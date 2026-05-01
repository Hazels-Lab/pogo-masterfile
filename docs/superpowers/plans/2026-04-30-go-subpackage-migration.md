# Go Sub-Package Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move Go output from flat `packages/go/<group>.go` + `<group>_template_ids.go` to per-group sub-packages `packages/go/<group>/{types,template_ids}.go`. Replace the unexported `isMasterfileEntry()` sealing trick with an exported `MasterfileEntry()` marker method so cross-package types can satisfy the interface.

**Architecture:** Five-layer change in the Go codegen.
1. **Module-path discovery** — `src/go/generate.ts` reads the module declaration from `packages/go/go.mod` so the codegen can construct full sub-package import paths transparently as the `PLACEHOLDER` is eventually replaced.
2. **Marker method rename** — `src/go/emit.ts`'s `entryWrapper` and `stubEntryWrapper` emit `MasterfileEntry()` (exported) instead of `isMasterfileEntry()`.
3. **Per-package emission** — `emitGroupModule`, `emitSingletonsModule`, and the templateIds emitters take a `packageName` parameter and produce output with that package declaration in their `// Generated …` header.
4. **Cross-package dispatch** — `emitMasterfileFile` imports every sub-package and qualifies type names in the dispatch switch (`badge_settings.BadgeSettingsEntry` instead of `BadgeSettingsEntry`).
5. **Output paths** — `src/go/generate.ts` writes to `<group>/types.go` and `<group>/template_ids.go` instead of flat `<group>.go` + `<group>_template_ids.go`.

After regen, hand-update `packages/go/masterfile_test.go` to import the relocated types.

**Tech Stack:** Bun for TypeScript codegen and tests, Go 1.24.

**Reference:** Spec at [`docs/superpowers/specs/2026-04-30-go-subpackage-migration-design.md`](../specs/2026-04-30-go-subpackage-migration-design.md).

---

## Phase 1 — codegen plumbing

### Task 1: Marker method rename

Switch the generated marker from `isMasterfileEntry()` (unexported) to `MasterfileEntry()` (exported). Updates the wrapper helpers and the masterfile interface declaration. Tests confirm both the per-group emission and the interface declaration use the new name.

**Files:**
- Modify: `src/go/emit.ts`
- Modify: `src/go/emit.test.ts`

- [ ] **Step 1: Add a failing test for the marker method on entry wrappers**

Append to `src/go/emit.test.ts`:

```ts
import { emitGroupModule, emitGroupTemplateIdsFile, emitMasterfileFile, emitSingletonsModule, emitSingletonsTemplateIdsFile } from "./emit.ts";

describe("entryWrapper marker method", () => {
	test("uses exported MasterfileEntry marker", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const typeEffective = groups.get("typeEffective")!;
		const out = emitGroupModule(typeEffective);
		expect(out).toContain("func (TypeEffectiveEntry) MasterfileEntry() {}");
		expect(out).not.toContain("isMasterfileEntry");
	});

	test("singletons wrappers use the exported marker too", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const accessibility = groups.get("accessibilitySettings")!;
		const out = emitSingletonsModule([accessibility]);
		expect(out).toContain("func (AccessibilitySettingsEntry) MasterfileEntry() {}");
		expect(out).not.toContain("isMasterfileEntry");
	});
});
```

(The existing `import { emitGroupTemplateIdsFile, emitSingletonsTemplateIdsFile } from "./emit.ts";` line at the top will need to be expanded to include `emitGroupModule`, `emitMasterfileFile`, `emitSingletonsModule` — combine them into one import.)

- [ ] **Step 2: Run the tests to verify failure**

Run: `bun test src/go/emit.test.ts`
Expected: the new tests fail with "expected … to contain `MasterfileEntry`" (the current generator still emits `isMasterfileEntry`).

- [ ] **Step 3: Update both wrappers**

In `src/go/emit.ts`, find `entryWrapper` (around line 189) and replace `isMasterfileEntry` with `MasterfileEntry`:

```ts
function entryWrapper(baseName: string, payloadJsonKey: string): string {
	const goPayloadField = pascalCase(payloadJsonKey);
	return [
		`type ${baseName}Entry struct {`,
		`\tTemplateID string \`json:"templateId"\``,
		`\tData       ${baseName}EntryData \`json:"data"\``,
		`}`,
		``,
		`func (${baseName}Entry) MasterfileEntry() {}`,
		``,
		`type ${baseName}EntryData struct {`,
		`\tTemplateID     string \`json:"templateId"\``,
		`\t${goPayloadField} ${baseName} \`json:"${payloadJsonKey}"\``,
		`}`,
	].join("\n");
}
```

And `stubEntryWrapper`:

```ts
function stubEntryWrapper(baseName: string): string {
	return [
		`type ${baseName}Entry struct {`,
		`\tTemplateID string \`json:"templateId"\``,
		`\tData       ${baseName}EntryData \`json:"data"\``,
		`}`,
		``,
		`func (${baseName}Entry) MasterfileEntry() {}`,
		``,
		`type ${baseName}EntryData struct {`,
		`\tTemplateID string \`json:"templateId"\``,
		`}`,
	].join("\n");
}
```

The comment block at line 185–188 also needs an update — change "unexported `isMasterfileEntry()`" to "exported `MasterfileEntry()`" and adjust "sealed-trait-style dispatch" to "marker-method dispatch" since we no longer have sealing.

- [ ] **Step 4: Update the interface declaration in `emitMasterfileFile`**

Find the embedded interface declaration in `emitMasterfileFile` (around line 308) and replace:

```ts
type MasterfileEntry interface {
\tisMasterfileEntry()
}
```

with:

```ts
type MasterfileEntry interface {
\tMasterfileEntry()
}
```

The comment two lines above it should change from "sealed interface" to "marker interface."

- [ ] **Step 5: Run tests to verify pass**

Run: `bun test src/go/emit.test.ts`
Expected: all tests pass (the new marker tests plus the existing template-ids tests).

- [ ] **Step 6: Commit**

```bash
git add src/go/emit.ts src/go/emit.test.ts
git commit -m "$(cat <<'EOF'
Rename Go marker method from isMasterfileEntry to MasterfileEntry

Switches both Entry wrapper helpers (entryWrapper, stubEntryWrapper)
and the MasterfileEntry interface declaration in masterfile.go from the
unexported isMasterfileEntry() to the exported MasterfileEntry().
Required for the upcoming sub-package migration: unexported methods are
owned by their declaring package, so types in sub-packages cannot
satisfy them. Compile-time guarantee weakens slightly (anyone can
implement the interface externally) in exchange for the layout change.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

### Task 2: Module-path discovery in `generate.ts`

Read the module declaration from `packages/go/go.mod` at codegen time so sub-package imports use the actual module path instead of a hardcoded constant.

**Files:**
- Modify: `src/go/generate.ts`

- [ ] **Step 1: Read `go.mod` and parse out the module path**

In `src/go/generate.ts`, add an import for `readFile` and a helper near the top:

```ts
import { readFile } from "node:fs/promises";
import { join } from "node:path";
// …existing imports…

async function readModulePath(): Promise<string> {
	const goMod = await readFile(join(OUT_DIR, "go.mod"), "utf8");
	const match = goMod.match(/^module\s+(\S+)/m);
	if (!match) throw new Error(`could not parse module path from ${join(OUT_DIR, "go.mod")}`);
	return match[1]!;
}
```

- [ ] **Step 2: Thread the module path into `generateGo`**

At the top of `generateGo`, after the `groupEntries` call, add:

```ts
const modulePath = await readModulePath();
```

The variable will be passed to `emitMasterfileFile` in Task 4. For now it's unused; keep the call so the file fails fast if `go.mod` is malformed.

- [ ] **Step 3: Verify nothing breaks**

Run: `bun test src/go/`
Expected: all tests pass.

- [ ] **Step 4: Commit**

```bash
git add src/go/generate.ts
git commit -m "$(cat <<'EOF'
Read Go module path from go.mod for sub-package import construction

generateGo now reads the `module` declaration line from packages/go/go.mod
at codegen time. The path is needed in the next task to construct
sub-package import statements in the cross-package dispatch switch.
Letting codegen read it keeps PLACEHOLDER->realorg substitution
transparent — replacing the value in go.mod and re-running the
generator is the only step.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

### Task 3: Add `packageName` parameter to per-group emitters

`emitGroupModule`, `emitSingletonsModule`, `emitGroupTemplateIdsFile`, and `emitSingletonsTemplateIdsFile` currently hardcode `package masterfile`. Add a `packageName` parameter so the generator can request a per-group package name.

**Files:**
- Modify: `src/go/emit.ts`
- Modify: `src/go/emit.test.ts`

- [ ] **Step 1: Add a failing test for the parameter**

Append to `src/go/emit.test.ts`:

```ts
describe("packageName parameter", () => {
	test("emitGroupModule honors packageName", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const typeEffective = groups.get("typeEffective")!;
		const out = emitGroupModule(typeEffective, "type_effective");
		expect(out).toContain("package type_effective");
		expect(out).not.toContain("package masterfile");
	});

	test("emitGroupTemplateIdsFile honors packageName", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const typeEffective = groups.get("typeEffective")!;
		const out = emitGroupTemplateIdsFile(typeEffective, "type_effective");
		expect(out).toContain("package type_effective");
		expect(out).not.toContain("package masterfile");
	});

	test("emitSingletonsModule honors packageName", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const accessibility = groups.get("accessibilitySettings")!;
		const out = emitSingletonsModule([accessibility], "singletons");
		expect(out).toContain("package singletons");
		expect(out).not.toContain("package masterfile");
	});

	test("emitSingletonsTemplateIdsFile honors packageName", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const accessibility = groups.get("accessibilitySettings")!;
		const out = emitSingletonsTemplateIdsFile([accessibility], "singletons");
		expect(out).toContain("package singletons");
		expect(out).not.toContain("package masterfile");
	});
});
```

- [ ] **Step 2: Verify failure**

Run: `bun test src/go/emit.test.ts`
Expected: 4 new tests fail with "expected … to contain `package type_effective`" / `package singletons`.

- [ ] **Step 3: Add the parameter to the four emitters**

In `src/go/emit.ts`:

1. Update `file(...)` to take a packageName:

```ts
function file(headerComment: string, pool: StructPool, body: string, packageName: string): string {
	const parts: string[] = [headerComment, "", `package ${packageName}`, ""];
	if (pool.usesRawJSON) {
		parts.push(`import "encoding/json"`, "");
	}
	parts.push(...pool.deferred);
	if (body) parts.push(body);
	return `${parts.filter((p) => p !== "").join("\n\n")}\n`;
}
```

2. Update `emitGroupModule` signature and pass through:

```ts
export function emitGroupModule(group: Group, packageName: string): string {
	const baseName = pascalCase(group.discriminator);
	const headerComment = `// Generated from Pokémon GO masterfile — group "${group.discriminator}".`;
	const pool = newPool();

	if (isStubGroup(group)) {
		return file(headerComment, pool, stubEntryWrapper(baseName), packageName);
	}

	const inferred = inferPayloadType(group.entries, group.discriminator);
	emitNamedStruct(baseName, inferred, pool);
	return file(headerComment, pool, entryWrapper(baseName, group.discriminator), packageName);
}
```

3. Update `emitSingletonsModule`:

```ts
export function emitSingletonsModule(singletons: readonly Group[], packageName: string): string {
	const sorted = [...singletons].sort((a, b) => pascalCase(a.discriminator).localeCompare(pascalCase(b.discriminator)));
	const pool = newPool();
	const wrappers: string[] = [];

	for (const group of sorted) {
		const name = pascalCase(group.discriminator);
		if (isStubGroup(group)) {
			wrappers.push(stubEntryWrapper(name));
			continue;
		}
		const inferred = inferPayloadType(group.entries, group.discriminator);
		emitNamedStruct(name, inferred, pool);
		wrappers.push(entryWrapper(name, group.discriminator));
	}

	const headerComment = `// Generated from Pokémon GO masterfile — singletons (one-of-a-kind entries).`;
	return file(headerComment, pool, wrappers.join("\n\n"), packageName);
}
```

4. Update `emitGroupTemplateIdsFile` to take packageName:

```ts
export function emitGroupTemplateIdsFile(group: Group, packageName: string): string {
	const baseName = pascalCase(group.discriminator);
	const typeName = `${baseName}TemplateID`;
	const ids = group.entries.map((e) => e.templateId);
	const variants = deriveTemplateIdVariants(ids);
	const constBlock = emitGoConstBlock(typeName, variants);

	return `// Generated from Pokémon GO masterfile — group "${group.discriminator}" templateIds.\n\npackage ${packageName}\n\ntype ${typeName} string\n\n${constBlock}\n`;
}
```

5. Same for `emitSingletonsTemplateIdsFile`:

```ts
export function emitSingletonsTemplateIdsFile(singletons: readonly Group[], packageName: string): string {
	const allIds = singletons.flatMap((g) => g.entries.map((e) => e.templateId));
	const typeName = "SingletonsTemplateID";
	const variants = deriveTemplateIdVariants(allIds);
	const constBlock = emitGoConstBlock(typeName, variants);

	return `// Generated from Pokémon GO masterfile — singletons templateIds.\n\npackage ${packageName}\n\ntype ${typeName} string\n\n${constBlock}\n`;
}
```

- [ ] **Step 4: Update existing call sites in `generate.ts` so it still compiles**

In `src/go/generate.ts`, every call to these four functions needs the new arg. For now, pass `"masterfile"` to all of them so behavior is unchanged. Find each call and add the argument:

```ts
files.set(`${fileName}.go`, emitGroupModule(group, "masterfile"));
files.set(`${fileName}_template_ids.go`, emitGroupTemplateIdsFile(group, "masterfile"));
// …
files.set(`${SINGLETONS_FILE}.go`, emitSingletonsModule(singletons, "masterfile"));
files.set(`${SINGLETONS_FILE}_template_ids.go`, emitSingletonsTemplateIdsFile(singletons, "masterfile"));
```

This is intentional — the actual package-name change happens in Task 5 when generate.ts switches to the new layout.

- [ ] **Step 5: Run tests to verify pass**

Run: `bun test src/go/emit.test.ts`
Expected: all tests pass.

- [ ] **Step 6: Commit**

```bash
git add src/go/emit.ts src/go/emit.test.ts src/go/generate.ts
git commit -m "$(cat <<'EOF'
Add packageName parameter to Go per-group emitters

emitGroupModule, emitSingletonsModule, and the two templateIds emitters
now take a packageName parameter that controls the `package …`
declaration in the generated file. generate.ts passes "masterfile" for
now to keep behavior unchanged; the next task uses the parameter to
actually switch packages.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

### Task 4: Cross-package dispatch in `emitMasterfileFile`

`masterfile.go` currently lives in `package masterfile` and references generated types unqualified (`BadgeSettingsEntry`). After sub-package migration, those types live in sub-packages and the dispatch needs to import each one and qualify the type name.

**Files:**
- Modify: `src/go/emit.ts`
- Modify: `src/go/emit.test.ts`

- [ ] **Step 1: Add `modulePath` to the `EntryVariant` interface**

In `src/go/emit.ts`, find the `EntryVariant` interface (around line 265) and add a field:

```ts
export interface EntryVariant {
	variantName: string;
	entryTypeName: string;
	isStub: boolean;
	discriminator: string;
	entryCount: number;
	// snake_case sub-package directory where the Entry type lives
	// (e.g., "badge_settings", "singletons"). The masterfile dispatcher
	// uses this to qualify the type reference in the parse switch.
	modulePath: string;
}
```

- [ ] **Step 2: Add a failing test for the cross-package dispatch**

Append to `src/go/emit.test.ts`:

```ts
describe("emitMasterfileFile cross-package dispatch", () => {
	test("imports each sub-package and qualifies type references", () => {
		const variants = [
			{
				variantName: "BadgeSettings",
				entryTypeName: "BadgeSettingsEntry",
				isStub: false,
				discriminator: "badgeSettings",
				entryCount: 869,
				modulePath: "badge_settings",
			},
			{
				variantName: "AccessibilitySettings",
				entryTypeName: "AccessibilitySettingsEntry",
				isStub: false,
				discriminator: "accessibilitySettings",
				entryCount: 1,
				modulePath: "singletons",
			},
		];
		const out = emitMasterfileFile(variants, "github.com/example/pkg/packages/go");
		expect(out).toContain(`"github.com/example/pkg/packages/go/badge_settings"`);
		expect(out).toContain(`"github.com/example/pkg/packages/go/singletons"`);
		// Qualified type reference inside the dispatch.
		expect(out).toContain("var e badge_settings.BadgeSettingsEntry");
		expect(out).toContain("var e singletons.AccessibilitySettingsEntry");
		// The MasterfileEntry interface uses the exported marker.
		expect(out).toContain("MasterfileEntry()");
		expect(out).not.toContain("isMasterfileEntry()");
	});

	test("deduplicates sub-package imports when many groups share the same path", () => {
		// Singletons all have modulePath="singletons"; the import should
		// appear exactly once even with multiple singleton variants.
		const variants = [
			{
				variantName: "AccessibilitySettings",
				entryTypeName: "AccessibilitySettingsEntry",
				isStub: false,
				discriminator: "accessibilitySettings",
				entryCount: 1,
				modulePath: "singletons",
			},
			{
				variantName: "AdditiveSceneSettings",
				entryTypeName: "AdditiveSceneSettingsEntry",
				isStub: false,
				discriminator: "additiveSceneSettings",
				entryCount: 1,
				modulePath: "singletons",
			},
		];
		const out = emitMasterfileFile(variants, "github.com/example/pkg/packages/go");
		const matches = out.match(/"github\.com\/example\/pkg\/packages\/go\/singletons"/g) ?? [];
		expect(matches.length).toBe(1);
	});
});
```

- [ ] **Step 3: Verify failure**

Run: `bun test src/go/emit.test.ts`
Expected: the new tests fail (signature mismatch — `emitMasterfileFile` doesn't take a second arg yet).

- [ ] **Step 4: Update `emitMasterfileFile`**

Replace the current implementation in `src/go/emit.ts` with:

```ts
export function emitMasterfileFile(variants: readonly EntryVariant[], modulePath: string): string {
	const sorted = [...variants].sort((a, b) => b.entryCount - a.entryCount || a.variantName.localeCompare(b.variantName));
	const nonStubs = sorted.filter((v) => !v.isStub);
	const stubs = sorted.filter((v) => v.isStub);

	// Deduplicated sub-package imports, sorted alphabetically. Each variant's
	// modulePath becomes <modulePath>/<group>; the dispatch references types
	// as <group>.EntryType.
	const subPackages = [...new Set(sorted.map((v) => v.modulePath))].sort();
	const subPackageImports = subPackages.map((p) => `\t${JSON.stringify(`${modulePath}/${p}`)}`).join("\n");

	const nonStubArms = nonStubs
		.map(
			(v) =>
				`\tcase ${JSON.stringify(v.discriminator)}:\n\t\tvar e ${v.modulePath}.${v.entryTypeName}\n\t\tif err := json.Unmarshal(data, &e); err != nil {\n\t\t\treturn nil, err\n\t\t}\n\t\treturn e, nil`,
		)
		.join("\n");
	const stubArms = stubs
		.map(
			(v) =>
				`\t\tcase ${JSON.stringify(v.discriminator)}:\n\t\t\tvar e ${v.modulePath}.${v.entryTypeName}\n\t\t\tif err := json.Unmarshal(data, &e); err != nil {\n\t\t\t\treturn nil, err\n\t\t\t}\n\t\t\treturn e, nil`,
		)
		.join("\n");

	return `// Generated from Pokémon GO masterfile — package entry point.
// Package documentation lives in doc.go.

package masterfile

import (
\t"encoding/json"
\t"fmt"

${subPackageImports}
)

// MasterfileEntry is the marker interface implemented by every per-discriminator
// Entry type generated under this module. Use a type switch to extract a
// concrete entry from a parse result.
//
// The marker method is exported because Go's unexported-method sealing trick
// only works within a single package. Foreign types could implement this
// interface, but the only thing that produces values of it is ParseMasterfile
// which only returns generated types.
type MasterfileEntry interface {
\tMasterfileEntry()
}

// ParseMasterfile parses a masterfile JSON byte slice into a slice of typed
// entries. Each entry is dispatched to the concrete \`*Entry\` type matching
// its discriminator (the non-templateId key inside \`data\`).
func ParseMasterfile(data []byte) ([]MasterfileEntry, error) {
\tvar raw []json.RawMessage
\tif err := json.Unmarshal(data, &raw); err != nil {
\t\treturn nil, fmt.Errorf("masterfile is not a JSON array: %w", err)
\t}

\tentries := make([]MasterfileEntry, 0, len(raw))
\tfor i, m := range raw {
\t\te, err := parseEntry(m)
\t\tif err != nil {
\t\t\treturn nil, fmt.Errorf("entry %d: %w", i, err)
\t\t}
\t\tentries = append(entries, e)
\t}
\treturn entries, nil
}

func parseEntry(data json.RawMessage) (MasterfileEntry, error) {
\tvar probe struct {
\t\tTemplateID string                     \`json:"templateId"\`
\t\tData       map[string]json.RawMessage \`json:"data"\`
\t}
\tif err := json.Unmarshal(data, &probe); err != nil {
\t\treturn nil, fmt.Errorf("parse entry shell: %w", err)
\t}

\tvar disc string
\tfor k := range probe.Data {
\t\tif k != "templateId" {
\t\t\tdisc = k
\t\t\tbreak
\t\t}
\t}

\tswitch disc {
${nonStubArms}
\tcase "":
\t\tswitch probe.TemplateID {
${stubArms}
\t\tdefault:
\t\t\treturn nil, fmt.Errorf("unknown stub templateId: %s", probe.TemplateID)
\t\t}
\tdefault:
\t\treturn nil, fmt.Errorf("unknown discriminator: %s", disc)
\t}
}
`;
}
```

- [ ] **Step 5: Update existing `generate.ts` call sites so it still compiles**

In `src/go/generate.ts`, the call to `emitMasterfileFile` needs the modulePath argument. Add it:

```ts
files.set("masterfile.go", emitMasterfileFile(enumVariants, modulePath));
```

The `enumVariants.push(...)` calls also need `modulePath` set. In each iteration, set it to the snake_case file name (which becomes the sub-package name in Task 5):

```ts
const fileName = snakeCase(group.discriminator);
files.set(`${fileName}.go`, emitGroupModule(group, "masterfile"));
files.set(`${fileName}_template_ids.go`, emitGroupTemplateIdsFile(group, "masterfile"));
enumVariants.push({
	variantName: baseName,
	entryTypeName,
	isStub: stub,
	discriminator: group.discriminator,
	entryCount: group.entries.length,
	modulePath: fileName,
});
```

For singletons:

```ts
enumVariants.push({
	variantName: baseName,
	entryTypeName,
	isStub: stub,
	discriminator: group.discriminator,
	entryCount: group.entries.length,
	modulePath: SINGLETONS_FILE,
});
```

The packages still emit `package masterfile` from Task 3's hardcoding, so the regenerated `masterfile.go` will reference types like `badge_settings.BadgeSettingsEntry` while those types are still in `package masterfile` — that won't compile yet. Task 5 fixes this by switching the package names.

- [ ] **Step 6: Run tests to verify pass**

Run: `bun test src/go/emit.test.ts`
Expected: all tests pass (the new emitMasterfileFile tests plus everything before).

- [ ] **Step 7: Commit**

```bash
git add src/go/emit.ts src/go/emit.test.ts src/go/generate.ts
git commit -m "$(cat <<'EOF'
Cross-package dispatch in emitMasterfileFile

emitMasterfileFile now takes a modulePath, imports each sub-package
referenced by the EntryVariant list (deduplicated), and qualifies type
references in the dispatch switch with the sub-package name. The
EntryVariant interface gains a modulePath field for this. Marker
interface comment updated from "sealed" to "marker." Output file
references types like badge_settings.BadgeSettingsEntry; those types
still live in package masterfile until the next task moves them.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

## Phase 2 — flip the layout

### Task 5: Switch `generate.ts` to per-group output paths and packages

The piece-by-piece refactors above let us land the layout change in one focused commit: change file paths from flat `<group>.go` → `<group>/types.go`, swap `"masterfile"` for the per-group package name, and verify the regenerated tree compiles.

**Files:**
- Modify: `src/go/generate.ts`

- [ ] **Step 1: Rewrite the file map building loop**

Replace `src/go/generate.ts` with:

```ts
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { type Entry, type Group, groupEntries } from "../group.ts";
import { pascalCase, snakeCase } from "../naming.ts";
import { writeOutput } from "../write.ts";
import {
	type EntryVariant,
	emitGroupModule,
	emitGroupTemplateIdsFile,
	emitMasterfileFile,
	emitSingletonsModule,
	emitSingletonsTemplateIdsFile,
} from "./emit.ts";

const OUT_DIR = join(import.meta.dir, "..", "..", "packages", "go");
const SINGLETONS_PACKAGE = "singletons";

function isStubGroup(group: Group): boolean {
	const first = group.entries[0];
	if (!first) return true;
	return Object.keys(first.data).filter((k) => k !== "templateId").length === 0;
}

async function readModulePath(): Promise<string> {
	const goMod = await readFile(join(OUT_DIR, "go.mod"), "utf8");
	const match = goMod.match(/^module\s+(\S+)/m);
	if (!match) throw new Error(`could not parse module path from ${join(OUT_DIR, "go.mod")}`);
	return match[1]!;
}

export async function generateGo(entries: Entry[]): Promise<void> {
	const groups = groupEntries(entries);
	console.log(`[go] grouped into ${groups.size} discriminators.`);

	const modulePath = await readModulePath();

	const files = new Map<string, string>();
	const singletons: Group[] = [];
	const enumVariants: EntryVariant[] = [];

	for (const group of groups.values()) {
		const baseName = pascalCase(group.discriminator);
		const entryTypeName = `${baseName}Entry`;
		const stub = isStubGroup(group);

		if (group.entries.length === 1) {
			singletons.push(group);
			enumVariants.push({
				variantName: baseName,
				entryTypeName,
				isStub: stub,
				discriminator: group.discriminator,
				entryCount: group.entries.length,
				modulePath: SINGLETONS_PACKAGE,
			});
			continue;
		}

		const packageName = snakeCase(group.discriminator);
		files.set(`${packageName}/types.go`, emitGroupModule(group, packageName));
		files.set(`${packageName}/template_ids.go`, emitGroupTemplateIdsFile(group, packageName));
		enumVariants.push({
			variantName: baseName,
			entryTypeName,
			isStub: stub,
			discriminator: group.discriminator,
			entryCount: group.entries.length,
			modulePath: packageName,
		});
	}

	if (singletons.length > 0) {
		files.set(`${SINGLETONS_PACKAGE}/types.go`, emitSingletonsModule(singletons, SINGLETONS_PACKAGE));
		files.set(`${SINGLETONS_PACKAGE}/template_ids.go`, emitSingletonsTemplateIdsFile(singletons, SINGLETONS_PACKAGE));
	}

	files.set("masterfile.go", emitMasterfileFile(enumVariants, modulePath));

	const preserve = ["go.mod", "go.sum", "doc.go", "README.md", "LICENSE", "CHANGELOG.md", "masterfile_test.go", "examples/parse/main.go"];

	await writeOutput(files, OUT_DIR, { preserve });
	console.log(`[go] wrote ${files.size} files to ${OUT_DIR} (${singletons.length} singletons folded into ${SINGLETONS_PACKAGE}/).`);
}
```

- [ ] **Step 2: Run TS tests**

Run: `bun test`
Expected: all tests still pass — the change is to file paths and package names, neither of which any TS test asserts on directly.

- [ ] **Step 3: Regenerate Go output**

Run: `bun run src/generate.ts`
Expected: console output shows `[go] wrote N files to .../packages/go (139 singletons folded into singletons/)`.

- [ ] **Step 4: Verify Go compiles (will fail at first — that's the point)**

Run: `cd packages/go && go build ./...`
Expected: **fail** because `masterfile_test.go` still references types unqualified (e.g. `AccessibilitySettingsEntry` instead of `singletons.AccessibilitySettingsEntry`). Task 6 fixes the test by hand.

If the failure is anything else (e.g. an import-cycle error, a misplaced package declaration, or an unresolved type in the dispatch switch), debug before proceeding.

- [ ] **Step 5: Don't commit yet**

The build is broken until Task 6 fixes the tests. Commit Task 5 + Task 6 together.

---

### Task 6: Update `masterfile_test.go` for relocated types

Hand-update the preserved test file so it imports the relocated types. Required because the test references `*Entry` types and `*Values` slices that moved from `package masterfile` to per-group sub-packages.

**Files:**
- Modify: `packages/go/masterfile_test.go`

- [ ] **Step 1: Read the current test file**

Run: `cat packages/go/masterfile_test.go`

Identify every type reference that's now in a sub-package:

- `AccessibilitySettingsEntry` → `singletons.AccessibilitySettingsEntry`
- `BadgeSettingsTemplateID` → `badge_settings.BadgeSettingsTemplateID`
- `BadgeSettingsTemplateIDValues` → `badge_settings.BadgeSettingsTemplateIDValues`
- `SingletonsTemplateID` → `singletons.SingletonsTemplateID`
- `SingletonsTemplateIDValues` → `singletons.SingletonsTemplateIDValues`

- [ ] **Step 2: Rewrite the test imports**

Replace the import block:

```go
import (
	"testing"

	"github.com/PLACEHOLDER/pogo-masterfile-types/packages/go/badge_settings"
	"github.com/PLACEHOLDER/pogo-masterfile-types/packages/go/singletons"
)
```

Then qualify every relocated type reference. The exact diff depends on the test file's current state — for each reference identified in Step 1, prepend the package alias.

Example transform:

```go
// Before:
entry, ok := entries[0].(AccessibilitySettingsEntry)

// After:
entry, ok := entries[0].(singletons.AccessibilitySettingsEntry)
```

```go
// Before:
if len(BadgeSettingsTemplateIDValues) == 0 {

// After:
if len(badge_settings.BadgeSettingsTemplateIDValues) == 0 {
```

```go
// Before:
var first BadgeSettingsTemplateID = BadgeSettingsTemplateIDValues[0]

// After:
var first badge_settings.BadgeSettingsTemplateID = badge_settings.BadgeSettingsTemplateIDValues[0]
```

```go
// Before:
wanted := SingletonsTemplateID("ACCESSIBILITY_CLIENT_SETTINGS")
for _, v := range SingletonsTemplateIDValues {

// After:
wanted := singletons.SingletonsTemplateID("ACCESSIBILITY_CLIENT_SETTINGS")
for _, v := range singletons.SingletonsTemplateIDValues {
```

- [ ] **Step 3: Verify Go builds and tests pass**

Run: `cd packages/go && go build ./...`
Expected: clean build.

Run: `cd packages/go && go test ./...`
Expected: all tests pass — the existing parse tests, and the templateID-related smoke tests added in the prior migration.

- [ ] **Step 4: Run the parse benchmark (sanity check)**

Run: `cd packages/go/examples/parse && go run .`
Expected: prints non-zero entry count and a parse time. No panics or errors.

- [ ] **Step 5: Run all test suites end-to-end**

Run from repo root:

```bash
bun test && cargo test --workspace && cd packages/go && go test ./... && cd ../..
```

Expected: every suite green.

- [ ] **Step 6: Commit Task 5 + Task 6 together**

```bash
git add src/go/generate.ts packages/go
git commit -m "$(cat <<'EOF'
Migrate Go output to per-group sub-packages

Each multi-entry discriminator group now has its own sub-package at
packages/go/<group>/{types,template_ids}.go. Singletons fold into
packages/go/singletons/{types,template_ids}.go. The root masterfile
package keeps the parser, MasterfileEntry interface, and dispatch
switch — which now imports each sub-package and uses qualified type
names (badge_settings.BadgeSettingsEntry).

Hand-updates packages/go/masterfile_test.go to import the relocated
types. examples/parse/main.go references only masterfile.ParseMasterfile
so needs no change.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

## Phase 3 — repo hygiene

### Task 7: Update CLAUDE.md and AGENTS.md skip lists

The skip-list patterns from the prior templateId migration target individual files. With the layout flat → directories, switch to directory-level globs that match the new structure.

**Files:**
- Modify: `CLAUDE.md`
- Modify: `AGENTS.md`

- [ ] **Step 1: Replace the Go entries in `CLAUDE.md`**

Find the existing Go skip entries (currently a long list of `<group>.go` and `<group>_template_ids.go` files) and replace with:

```markdown
* `./packages/go/masterfile.go`
* `./packages/go/pokemon_settings/**`
* `./packages/go/pokemon_extended_settings/**`
* `./packages/go/avatar_customization/**`
* `./packages/go/gender_settings/**`
* `./packages/go/avatar_item_display/**`
* `./packages/go/iap_item_display/**`
* `./packages/go/form_settings/**`
* `./packages/go/badge_settings/**`
* `./packages/go/singletons/**`
```

- [ ] **Step 2: Mirror the same change in `AGENTS.md`**

Both files share the same skip list — keep them in sync.

- [ ] **Step 3: Commit**

```bash
git add CLAUDE.md AGENTS.md
git commit -m "$(cat <<'EOF'
Update skip lists for Go sub-package layout

Replaces per-file globs (<group>.go, <group>_template_ids.go) with
directory-level globs (<group>/**) reflecting the new sub-package
structure. Symmetric with the Rust entries.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

## Self-Review

The plan covers every spec section:

- §"Output layout" — Task 5.
- §"Marker interface change" — Task 1.
- §"Type naming inside sub-packages" — preserved by Task 3+5 (no rename, just package change).
- §"Cross-package dispatch in masterfile.go" — Task 4.
- §"Module-path discovery" — Task 2.
- §"Files" — Task 5 produces `<group>/types.go` and `<group>/template_ids.go`.
- §"Test updates (hand-written)" — Task 6.
- §"Out of scope" — explicit defers, not implemented.
- §"Migration / build order" — task order matches.

No placeholders. Type names consistent (`BadgeSettingsEntry`, `MasterfileEntry()`, `BadgeSettingsTemplateID`). Package names consistent (snake_case matching directory). Module path discovery handled in one place (Task 2's helper) and threaded through (Task 4 + 5).

One real risk: Task 5's regen produces a transiently-broken Go module that only goes green after Task 6. The plan explicitly batches them into one commit so the repo never lands in the broken state on `main`.
