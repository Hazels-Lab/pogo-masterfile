# Deprecated Types Tracking Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Track permanently-removed masterfile templates as deprecated types in the published `pogo-masterfile-types` packages (TS / Rust / Go), with a one-time bootstrap from local analysis artifacts and steady-state diff-detection wired into `bun run generate`.

**Architecture:** Shared TypeScript modules under `src/deprecated/` handle emission and diff logic. A one-time bootstrap script (`scripts/template-history/bootstrap-deprecated.ts`, deleted after run) consumes existing local analysis JSONs to seed the deprecated emission. A permanent steady-state script (`src/update-deprecated.ts`) runs as the second step of `bun run generate`, diffing `git show HEAD:...` (pre-regen live emission) against the working tree (post-regen live emission) to track removals/revivals. Each language has its own opt-in surface (TS sub-path import, Rust feature flag, Go sub-package).

**Tech Stack:** TypeScript (Bun runtime, `bun test`), Rust (Cargo), Go (modules). All deprecated emission is generated; no JSON or value data is shipped. All git invocations use `execFileSync` with argv arrays (no shell interpolation) for command-injection safety.

**Spec:** [docs/superpowers/specs/2026-05-03-deprecated-types-tracking-design.md](../specs/2026-05-03-deprecated-types-tracking-design.md)

---

## File structure

### New files (kept after bootstrap)

| Path | Responsibility |
|---|---|
| `src/deprecated/types.ts` | Shared types: `DeprecatedDiscriminator`, `DeprecatedSet`, helper types |
| `src/deprecated/parse-emission.ts` | Parse `packages/ts/dist/*/entries.d.ts` to extract `Map<templateId, discriminator>` and per-discriminator data-type bodies |
| `src/deprecated/compute-diff.ts` | Given old/new live templateId sets and current deprecated set, compute newly-deprecated and newly-revived |
| `src/deprecated/emit-typescript.ts` | Emit `packages/ts/dist/deprecated.d.ts` |
| `src/deprecated/emit-rust.ts` | Emit `packages/rust/src/deprecated.rs` |
| `src/deprecated/emit-go.ts` | Emit `packages/go/deprecated/deprecated.go` |
| `src/update-deprecated.ts` | Steady-state entry point; runs after `src/generate.ts` |
| `src/deprecated/*.test.ts` | Tests for each module above |
| `src/update-deprecated.test.ts` | Integration test for steady-state |
| `packages/go/deprecated/doc.go` | Stub `package deprecated` declaration so the directory is a Go package even before bootstrap runs |

### New files (deleted after bootstrap PR merges)

| Path | Responsibility |
|---|---|
| `scripts/template-history/bootstrap-deprecated.ts` | One-time entry point; consumes `mini-masterfile-removed.json` + `report.json`, seeds initial deprecated emission |

### Modified files

| Path | Change |
|---|---|
| `package.json` (root) | Update `generate` script to chain `src/update-deprecated.ts` between `src/generate.ts` and `bun run format` |
| `packages/ts/package.json` | Add `"./deprecated"` entry to the `exports` field |
| `packages/rust/Cargo.toml` | Add `[features] deprecated = []` |
| `packages/rust/src/lib.rs` | Add `#[cfg(feature = "deprecated")] pub mod deprecated;` |

### Deleted at end (Task 12)

```
scripts/template-history/extract_history.py
scripts/template-history/analyze_gaps.py
scripts/template-history/gap_detection.py
scripts/template-history/build_mini_masterfile.py
scripts/template-history/bootstrap-deprecated.ts
scripts/template-history/CONTRIBUTION.md
scripts/template-history/commits.jsonl
scripts/template-history/report.json
scripts/template-history/mini-masterfile-removed.json
scripts/template-history/extract.log
```

(The directory `scripts/template-history/` becomes empty and is removed.)

---

## Design notes locked from the spec

- **TS `deprecated.d.ts`:** re-exports live types via `export type * from "./entries"` and `export type * from "./types"`, AND adds `Deprecated{Discriminator}` types to avoid name collisions.
- **Rust `deprecated.rs`:** types live inside the `deprecated` module (no name prefix), each annotated with `#[deprecated(note = "...")]`.
- **Go `deprecated/deprecated.go`:** types live inside `package deprecated` (no name prefix), each preceded by a `// Deprecated:` comment line.
- **Inlining strategy:** ALL data-shape definitions are inlined inside the deprecated emission. We do NOT import inner types from live per-discriminator folders. This keeps the deprecated emission self-contained and decouples it from live schema evolution.
- **Singleton emission:** singletons get the same generic shape as multi-entry; their templateId union just has one literal.
- **No-discriminator entries:** emit as `{ templateId: "FOO"; data: { templateId: "FOO" } }` with no inner block.

---

## Task 1: Shared types module

**Files:**
- Create: `src/deprecated/types.ts`
- Create: `src/deprecated/types.test.ts`

- [ ] **Step 1: Write the failing test**

Create `src/deprecated/types.test.ts`:

```ts
import { describe, expect, test } from "bun:test";
import type { DeprecatedDiscriminator, DeprecatedSet } from "./types";

describe("deprecated types", () => {
	test("DeprecatedDiscriminator has expected shape", () => {
		const sample: DeprecatedDiscriminator = {
			discriminator: "eventPassTierSettings",
			templateIds: new Set(["FOO", "BAR"]),
			lastSeen: "2026-04-09",
			entryCount: 2,
			dataTypeBody: { ts: "interface ...", rust: "pub struct ...", go: "type ... struct ..." },
		};
		expect(sample.discriminator).toBe("eventPassTierSettings");
		expect(sample.templateIds.size).toBe(2);
	});

	test("DeprecatedSet maps discriminators to their entries", () => {
		const set: DeprecatedSet = new Map();
		set.set("foo", {
			discriminator: "foo",
			templateIds: new Set(["X"]),
			lastSeen: "2026-04-09",
			entryCount: 1,
			dataTypeBody: { ts: "", rust: "", go: "" },
		});
		expect(set.get("foo")?.templateIds.has("X")).toBe(true);
	});
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test src/deprecated/types.test.ts`
Expected: FAIL with "Cannot find module './types'"

- [ ] **Step 3: Write the types**

Create `src/deprecated/types.ts`:

```ts
/** Per-language inlined data-type body for one deprecated discriminator. */
export interface DataTypeBody {
	/** TypeScript declaration block. Must declare an interface named `Deprecated{Pascal}Data`. */
	ts: string;
	/** Rust declaration block. */
	rust: string;
	/** Go declaration block. */
	go: string;
}

/** One deprecated discriminator and its currently-deprecated templateIds. */
export interface DeprecatedDiscriminator {
	/** Discriminator key, e.g. "eventPassTierSettings". The `data.<discriminator>` key. */
	discriminator: string;
	/** Currently-deprecated templateIds for this discriminator. */
	templateIds: Set<string>;
	/** ISO date of the most recent removal among `templateIds`. */
	lastSeen: string;
	/** Convenience for emission; equals `templateIds.size`. */
	entryCount: number;
	/** Inlined data-type body for each language. Captured at first deprecation; never updated. */
	dataTypeBody: DataTypeBody;
}

/** Map of discriminator key -> deprecated record. The full deprecated emission state. */
export type DeprecatedSet = Map<string, DeprecatedDiscriminator>;

/** Result of diffing previous live emission against new live emission. */
export interface DiffResult {
	/** Template IDs that were live before regen but absent after. */
	newlyDeprecated: Set<string>;
	/** Template IDs that were deprecated before but live after. */
	newlyRevived: Set<string>;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `bun test src/deprecated/types.test.ts`
Expected: PASS, 2 tests.

- [ ] **Step 5: Commit**

```bash
git add src/deprecated/types.ts src/deprecated/types.test.ts
git commit -m "$(cat <<'EOF'
feat(deprecated): add shared types module

Defines DeprecatedDiscriminator, DeprecatedSet, DataTypeBody, and
DiffResult — used by both the bootstrap and steady-state pipelines.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

## Task 2: Live-emission parser

**Files:**
- Create: `src/deprecated/parse-emission.ts`
- Create: `src/deprecated/parse-emission.test.ts`
- Create: `src/deprecated/__fixtures__/sample-entries.d.ts.txt`

The parser uses **regex** (not the TS Compiler API). The live generator's output is regular: each entry alias has the shape `<DiscriminatorPascal>Foo = S<<DiscriminatorPascal><"TEMPLATE_ID", { ... }>>`. The first quoted string after the discriminator name is the templateId.

- [ ] **Step 1: Create the test fixture**

Create `src/deprecated/__fixtures__/sample-entries.d.ts.txt` (the `.txt` suffix prevents tsc from picking it up):

```
// Generated from Pokémon GO masterfile — group "sampleSettings", 2 entries (variant aliases).

import type { S } from "../_utils";
import type { SampleSettings } from "./index";

export type SampleSettingsAlpha = S<
	SampleSettings<
		"SAMPLE_ALPHA",
		{
			rank: 1;
			track: "FREE";
		}
	>
>;
export type SampleSettingsBeta = S<
	SampleSettings<
		"SAMPLE_BETA",
		{
			rank: 2;
			track: "PREMIUM";
		}
	>
>;
```

- [ ] **Step 2: Write the failing test**

Create `src/deprecated/parse-emission.test.ts`:

```ts
import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { extractTemplateIdsFromEntries, parseLiveTsEmission } from "./parse-emission";

const FIXTURE_DIR = join(import.meta.dir, "__fixtures__");

describe("parse-emission", () => {
	test("extractTemplateIdsFromEntries pulls templateId literals", () => {
		const source = readFileSync(join(FIXTURE_DIR, "sample-entries.d.ts.txt"), "utf8");
		const ids = extractTemplateIdsFromEntries(source, "SampleSettings");
		expect(ids).toEqual(["SAMPLE_ALPHA", "SAMPLE_BETA"]);
	});

	test("extractTemplateIdsFromEntries returns empty for unrelated source", () => {
		const ids = extractTemplateIdsFromEntries("// nothing here\nexport const x = 1;", "SampleSettings");
		expect(ids).toEqual([]);
	});

	test("extractTemplateIdsFromEntries handles multiple discriminators (returns only target)", () => {
		const source = `
			export type X = S<OtherSettings<"OTHER_ID", {}>>;
			export type Y = S<SampleSettings<"SAMPLE_X", {}>>;
		`;
		const ids = extractTemplateIdsFromEntries(source, "SampleSettings");
		expect(ids).toEqual(["SAMPLE_X"]);
	});

	test("parseLiveTsEmission against real live emission", () => {
		const distRoot = join(import.meta.dir, "..", "..", "packages", "ts", "dist");
		const map = parseLiveTsEmission(distRoot);
		expect(map.has("ACCESSIBILITY_CLIENT_SETTINGS")).toBe(true);
		expect(map.get("ACCESSIBILITY_CLIENT_SETTINGS")).toBe("accessibilityClientSettings");
	});
});
```

- [ ] **Step 3: Run test to verify it fails**

Run: `bun test src/deprecated/parse-emission.test.ts`
Expected: FAIL with "Cannot find module './parse-emission'"

- [ ] **Step 4: Implement the parser**

Create `src/deprecated/parse-emission.ts`:

```ts
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

/**
 * Extract templateId string literals from one discriminator's entries.d.ts text.
 *
 * Looks for `<DiscriminatorPascal><"TEMPLATE_ID"` — the first quoted string
 * after the discriminator type's opening angle bracket. The live generator's
 * output is regular, so this is reliable; a schema break shows up as zero
 * matches and Task 10's first-run safety guard handles that case.
 */
export function extractTemplateIdsFromEntries(source: string, discriminatorPascal: string): string[] {
	const escaped = discriminatorPascal.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	const pattern = new RegExp(`${escaped}<\\s*"([^"]+)"`, "g");
	const ids: string[] = [];
	for (const match of source.matchAll(pattern)) {
		ids.push(match[1]);
	}
	return ids;
}

/**
 * Walk `packages/ts/dist/` and build {templateId -> discriminator} for every
 * per-discriminator folder that has an entries.d.ts.
 */
export function parseLiveTsEmission(distRoot: string): Map<string, string> {
	const result = new Map<string, string>();
	if (!existsSync(distRoot)) return result;

	for (const dirent of readdirSync(distRoot, { withFileTypes: true })) {
		if (!dirent.isDirectory()) continue;
		const entriesPath = join(distRoot, dirent.name, "entries.d.ts");
		if (!existsSync(entriesPath)) continue;

		const discriminator = kebabToCamel(dirent.name);
		const discriminatorPascal = pascalCase(discriminator);
		const source = readFileSync(entriesPath, "utf8");
		const ids = extractTemplateIdsFromEntries(source, discriminatorPascal);
		for (const id of ids) {
			result.set(id, discriminator);
		}
	}
	return result;
}

function kebabToCamel(s: string): string {
	return s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

function pascalCase(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}
```

- [ ] **Step 5: Run test to verify it passes**

Run: `bun test src/deprecated/parse-emission.test.ts`
Expected: PASS, 4 tests.

- [ ] **Step 6: Commit**

```bash
git add src/deprecated/parse-emission.ts src/deprecated/parse-emission.test.ts src/deprecated/__fixtures__/sample-entries.d.ts.txt
git commit -m "$(cat <<'EOF'
feat(deprecated): parse live TS emission for templateId -> discriminator map

Regex-based extraction from per-discriminator entries.d.ts files. The
live generator's output is regular enough that regex is reliable.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

## Task 3: Diff computer

**Files:**
- Create: `src/deprecated/compute-diff.ts`
- Create: `src/deprecated/compute-diff.test.ts`

- [ ] **Step 1: Write the failing test**

Create `src/deprecated/compute-diff.test.ts`:

```ts
import { describe, expect, test } from "bun:test";
import { computeDiff } from "./compute-diff";

describe("computeDiff", () => {
	test("identifies newly-deprecated IDs (in old, not in new)", () => {
		const result = computeDiff({
			oldLive: new Set(["A", "B", "C"]),
			newLive: new Set(["A", "B"]),
			currentDeprecated: new Set(),
		});
		expect([...result.newlyDeprecated]).toEqual(["C"]);
		expect([...result.newlyRevived]).toEqual([]);
	});

	test("identifies newly-revived IDs (in current deprecated, also in new)", () => {
		const result = computeDiff({
			oldLive: new Set(["A", "B"]),
			newLive: new Set(["A", "B", "C"]),
			currentDeprecated: new Set(["C", "D"]),
		});
		expect([...result.newlyDeprecated]).toEqual([]);
		expect([...result.newlyRevived]).toEqual(["C"]);
	});

	test("handles simultaneous deprecation and revival", () => {
		const result = computeDiff({
			oldLive: new Set(["A", "B"]),
			newLive: new Set(["A", "C"]),
			currentDeprecated: new Set(["C", "D"]),
		});
		expect([...result.newlyDeprecated]).toEqual(["B"]);
		expect([...result.newlyRevived]).toEqual(["C"]);
	});

	test("empty inputs produce empty diffs", () => {
		const result = computeDiff({
			oldLive: new Set(),
			newLive: new Set(),
			currentDeprecated: new Set(),
		});
		expect(result.newlyDeprecated.size).toBe(0);
		expect(result.newlyRevived.size).toBe(0);
	});
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test src/deprecated/compute-diff.test.ts`
Expected: FAIL with "Cannot find module './compute-diff'"

- [ ] **Step 3: Implement**

Create `src/deprecated/compute-diff.ts`:

```ts
import type { DiffResult } from "./types";

export interface DiffInput {
	/** Template IDs in the live emission BEFORE the regen. */
	oldLive: Set<string>;
	/** Template IDs in the live emission AFTER the regen. */
	newLive: Set<string>;
	/** Template IDs currently in the deprecated emission. */
	currentDeprecated: Set<string>;
}

/**
 * Compute newly-deprecated and newly-revived templateIds.
 * - newlyDeprecated = oldLive − newLive (was live, now isn't)
 * - newlyRevived = currentDeprecated ∩ newLive (was deprecated, now live)
 */
export function computeDiff(input: DiffInput): DiffResult {
	const newlyDeprecated = new Set<string>();
	for (const id of input.oldLive) {
		if (!input.newLive.has(id)) newlyDeprecated.add(id);
	}
	const newlyRevived = new Set<string>();
	for (const id of input.currentDeprecated) {
		if (input.newLive.has(id)) newlyRevived.add(id);
	}
	return { newlyDeprecated, newlyRevived };
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `bun test src/deprecated/compute-diff.test.ts`
Expected: PASS, 4 tests.

- [ ] **Step 5: Commit**

```bash
git add src/deprecated/compute-diff.ts src/deprecated/compute-diff.test.ts
git commit -m "$(cat <<'EOF'
feat(deprecated): compute newly-deprecated and newly-revived diffs

Pure set-arithmetic. Decoupled from I/O for easy unit testing.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

## Task 4: TypeScript emitter

**Files:**
- Create: `src/deprecated/emit-typescript.ts`
- Create: `src/deprecated/emit-typescript.test.ts`

- [ ] **Step 1: Write the failing test**

Create `src/deprecated/emit-typescript.test.ts`:

```ts
import { describe, expect, test } from "bun:test";
import { emitTypescript } from "./emit-typescript";
import type { DeprecatedSet } from "./types";

describe("emitTypescript", () => {
	test("emits header, re-exports, and a multi-entry discriminator block", () => {
		const set: DeprecatedSet = new Map();
		set.set("eventPassTierSettings", {
			discriminator: "eventPassTierSettings",
			templateIds: new Set(["FOO", "BAR"]),
			lastSeen: "2026-04-09",
			entryCount: 2,
			dataTypeBody: {
				ts: `export interface DeprecatedEventPassTierSettingsData {\n\trank?: number;\n\ttrack?: string;\n}`,
				rust: "",
				go: "",
			},
		});
		const out = emitTypescript(set);
		expect(out).toMatch(/^\/\/ Generated/);
		expect(out).toContain(`export type * from "./entries"`);
		expect(out).toContain(`export type * from "./types"`);
		expect(out).toContain("export interface DeprecatedEventPassTierSettingsData");
		expect(out).toContain("@deprecated lastSeen 2026-04-09 — 2 entries");
		expect(out).toMatch(/type DeprecatedEventPassTierSettingsIds = "BAR" \| "FOO"/);
		expect(out).toContain("export type DeprecatedEventPassTierSettings");
		expect(out).toContain("export type DeprecatedMasterfileEntry =");
	});

	test("emits singleton with single-literal union", () => {
		const set: DeprecatedSet = new Map();
		set.set("gymLevel", {
			discriminator: "gymLevel",
			templateIds: new Set(["GYM_LEVEL_SETTINGS"]),
			lastSeen: "2025-12-01",
			entryCount: 1,
			dataTypeBody: { ts: "export interface DeprecatedGymLevelData { value?: number; }", rust: "", go: "" },
		});
		const out = emitTypescript(set);
		expect(out).toMatch(/type DeprecatedGymLevelIds = "GYM_LEVEL_SETTINGS"/);
	});

	test("empty set produces a valid file with empty union", () => {
		const out = emitTypescript(new Map());
		expect(out).toMatch(/^\/\/ Generated/);
		expect(out).toContain(`export type * from "./entries"`);
		expect(out).toContain("export type DeprecatedMasterfileEntry = never");
	});
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test src/deprecated/emit-typescript.test.ts`
Expected: FAIL with "Cannot find module './emit-typescript'"

- [ ] **Step 3: Implement the emitter**

Create `src/deprecated/emit-typescript.ts`:

```ts
import type { DeprecatedDiscriminator, DeprecatedSet } from "./types";

const HEADER = `// Generated — deprecated masterfile types. DO NOT EDIT BY HAND.
// Re-exports live types and adds Deprecated{Discriminator} variants for
// templates removed from the upstream GAME_MASTER.json. See
// docs/superpowers/specs/2026-05-03-deprecated-types-tracking-design.md.

export type * from "./entries";
export type * from "./types";
`;

export function emitTypescript(set: DeprecatedSet): string {
	const sorted = [...set.values()].sort((a, b) => a.discriminator.localeCompare(b.discriminator));

	const blocks = sorted.map(emitOneDiscriminator).join("\n");

	const unionMembers = sorted.map((d) => `Deprecated${pascalCase(d.discriminator)}`);
	const unionRhs = unionMembers.length === 0 ? "never" : unionMembers.join("\n\t| ");
	const union = `\n/**\n * Union of every currently-deprecated masterfile entry type.\n * Compose with \`MasterfileEntry\` from "../entries" to get a wide union.\n */\nexport type DeprecatedMasterfileEntry =\n\t| ${unionRhs};\n`;

	return HEADER + blocks + union;
}

function emitOneDiscriminator(d: DeprecatedDiscriminator): string {
	const Pascal = pascalCase(d.discriminator);
	const literals = [...d.templateIds].sort().map((id) => `"${id}"`).join(" | ");
	const literalsType = `type Deprecated${Pascal}Ids = ${literals};`;

	const dataBody = d.dataTypeBody.ts.trim();
	const jsdoc = `/** @deprecated lastSeen ${d.lastSeen} — ${d.entryCount} entries */`;

	const generic = `${jsdoc}
export type Deprecated${Pascal}<TID extends Deprecated${Pascal}Ids = Deprecated${Pascal}Ids> = {
	templateId: TID;
	data: {
		templateId: TID;
		${d.discriminator}: Deprecated${Pascal}Data;
	};
};
`;

	return `\n${literalsType}\n\n${dataBody}\n\n${generic}`;
}

function pascalCase(camel: string): string {
	return camel.charAt(0).toUpperCase() + camel.slice(1);
}
```

Note: `dataTypeBody.ts` MUST declare an interface named `Deprecated{Pascal}Data`. The bootstrap (Task 7) and steady-state (Task 10) are responsible for producing that exact name.

- [ ] **Step 4: Run test to verify it passes**

Run: `bun test src/deprecated/emit-typescript.test.ts`
Expected: PASS, 3 tests.

- [ ] **Step 5: Commit**

```bash
git add src/deprecated/emit-typescript.ts src/deprecated/emit-typescript.test.ts
git commit -m "$(cat <<'EOF'
feat(deprecated): emit packages/ts/dist/deprecated.d.ts

Single .d.ts that re-exports live types and adds
Deprecated{Discriminator} variants with @deprecated JSDoc carrying
lastSeen + entryCount metadata.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

## Task 5: Rust emitter

**Files:**
- Create: `src/deprecated/emit-rust.ts`
- Create: `src/deprecated/emit-rust.test.ts`

- [ ] **Step 1: Write the failing test**

Create `src/deprecated/emit-rust.test.ts`:

```ts
import { describe, expect, test } from "bun:test";
import { emitRust } from "./emit-rust";
import type { DeprecatedSet } from "./types";

describe("emitRust", () => {
	test("emits header and a discriminator with #[deprecated]", () => {
		const set: DeprecatedSet = new Map();
		set.set("eventPassTierSettings", {
			discriminator: "eventPassTierSettings",
			templateIds: new Set(["FOO", "BAR"]),
			lastSeen: "2026-04-09",
			entryCount: 2,
			dataTypeBody: {
				ts: "",
				rust: `#[derive(Debug, Clone, Serialize, Deserialize)]\n#[serde(rename_all = "camelCase")]\npub struct EventPassTierSettingsData {\n\tpub rank: u64,\n\tpub track: String,\n}`,
				go: "",
			},
		});
		const out = emitRust(set);
		expect(out).toContain("use serde::{Deserialize, Serialize};");
		expect(out).toContain('#[deprecated(note = "lastSeen 2026-04-09 — 2 entries")]');
		expect(out).toContain("pub struct EventPassTierSettingsData");
		expect(out).toContain("pub struct EventPassTierSettings");
	});

	test("empty set produces a header-only file", () => {
		const out = emitRust(new Map());
		expect(out).toContain("use serde::{Deserialize, Serialize};");
		expect(out).not.toContain("#[deprecated");
	});
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test src/deprecated/emit-rust.test.ts`
Expected: FAIL with "Cannot find module './emit-rust'"

- [ ] **Step 3: Implement**

Create `src/deprecated/emit-rust.ts`:

```ts
import type { DeprecatedDiscriminator, DeprecatedSet } from "./types";

const HEADER = `// Generated — deprecated masterfile types. DO NOT EDIT BY HAND.
// See docs/superpowers/specs/2026-05-03-deprecated-types-tracking-design.md.

use serde::{Deserialize, Serialize};
`;

export function emitRust(set: DeprecatedSet): string {
	const sorted = [...set.values()].sort((a, b) => a.discriminator.localeCompare(b.discriminator));
	if (sorted.length === 0) return HEADER;
	return HEADER + "\n" + sorted.map(emitOneDiscriminator).join("\n\n") + "\n";
}

function emitOneDiscriminator(d: DeprecatedDiscriminator): string {
	const Pascal = pascalCase(d.discriminator);
	const dataBody = d.dataTypeBody.rust.trim();

	const wrapper = `#[deprecated(note = "lastSeen ${d.lastSeen} — ${d.entryCount} entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ${Pascal} {
	pub template_id: String,
	pub data: ${Pascal}Outer,
}

#[deprecated(note = "lastSeen ${d.lastSeen} — ${d.entryCount} entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ${Pascal}Outer {
	pub template_id: String,
	pub ${snakeCase(d.discriminator)}: ${Pascal}Data,
}`;

	return `${dataBody}\n\n${wrapper}`;
}

function pascalCase(camel: string): string {
	return camel.charAt(0).toUpperCase() + camel.slice(1);
}

function snakeCase(camel: string): string {
	return camel.replace(/[A-Z]/g, (c) => `_${c.toLowerCase()}`);
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `bun test src/deprecated/emit-rust.test.ts`
Expected: PASS, 2 tests.

- [ ] **Step 5: Commit**

```bash
git add src/deprecated/emit-rust.ts src/deprecated/emit-rust.test.ts
git commit -m "$(cat <<'EOF'
feat(deprecated): emit packages/rust/src/deprecated.rs

Single file with #[deprecated] attributes on each wrapper struct.
Lives behind the `deprecated` Cargo feature (added in Task 8).

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

## Task 6: Go emitter

**Files:**
- Create: `src/deprecated/emit-go.ts`
- Create: `src/deprecated/emit-go.test.ts`

- [ ] **Step 1: Write the failing test**

Create `src/deprecated/emit-go.test.ts`:

```ts
import { describe, expect, test } from "bun:test";
import { emitGo } from "./emit-go";
import type { DeprecatedSet } from "./types";

describe("emitGo", () => {
	test("emits package header and a discriminator with // Deprecated comment", () => {
		const set: DeprecatedSet = new Map();
		set.set("eventPassTierSettings", {
			discriminator: "eventPassTierSettings",
			templateIds: new Set(["FOO"]),
			lastSeen: "2026-04-09",
			entryCount: 1,
			dataTypeBody: {
				ts: "",
				rust: "",
				go: `type EventPassTierSettingsData struct {\n\tRank  uint64 \`json:"rank"\`\n\tTrack string \`json:"track"\`\n}`,
			},
		});
		const out = emitGo(set);
		expect(out).toContain("package deprecated");
		expect(out).toContain("// Deprecated: lastSeen 2026-04-09, 1 entries");
		expect(out).toContain("type EventPassTierSettingsData struct");
		expect(out).toContain("type EventPassTierSettings struct");
	});

	test("empty set produces a header-only file", () => {
		const out = emitGo(new Map());
		expect(out).toContain("package deprecated");
		expect(out).not.toContain("// Deprecated:");
	});
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test src/deprecated/emit-go.test.ts`
Expected: FAIL with "Cannot find module './emit-go'"

- [ ] **Step 3: Implement**

Create `src/deprecated/emit-go.ts`:

```ts
import type { DeprecatedDiscriminator, DeprecatedSet } from "./types";

const HEADER = `// Generated — deprecated masterfile types. DO NOT EDIT BY HAND.
// See docs/superpowers/specs/2026-05-03-deprecated-types-tracking-design.md.

package deprecated
`;

export function emitGo(set: DeprecatedSet): string {
	const sorted = [...set.values()].sort((a, b) => a.discriminator.localeCompare(b.discriminator));
	if (sorted.length === 0) return HEADER;
	return HEADER + "\n" + sorted.map(emitOneDiscriminator).join("\n\n") + "\n";
}

function emitOneDiscriminator(d: DeprecatedDiscriminator): string {
	const Pascal = pascalCase(d.discriminator);
	const dataBody = d.dataTypeBody.go.trim();

	const wrapper = `// Deprecated: lastSeen ${d.lastSeen}, ${d.entryCount} entries
type ${Pascal} struct {
	TemplateId string         \`json:"templateId"\`
	Data       ${Pascal}Outer \`json:"data"\`
}

// Deprecated: lastSeen ${d.lastSeen}, ${d.entryCount} entries
type ${Pascal}Outer struct {
	TemplateId        string       \`json:"templateId"\`
	${Pascal}Settings ${Pascal}Data \`json:"${d.discriminator}"\`
}`;

	return `${dataBody}\n\n${wrapper}`;
}

function pascalCase(camel: string): string {
	return camel.charAt(0).toUpperCase() + camel.slice(1);
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `bun test src/deprecated/emit-go.test.ts`
Expected: PASS, 2 tests.

- [ ] **Step 5: Commit**

```bash
git add src/deprecated/emit-go.ts src/deprecated/emit-go.test.ts
git commit -m "$(cat <<'EOF'
feat(deprecated): emit packages/go/deprecated/deprecated.go

Single file in the deprecated sub-package. // Deprecated: comment
on each wrapper triggers gopls warnings at use sites.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

## Task 7: Bootstrap script

**Files:**
- Create: `scripts/template-history/bootstrap-deprecated.ts`

The script reads `mini-masterfile-removed.json` and `report.json`, groups by discriminator, builds a `DeprecatedSet`, and writes the three deprecated emission files.

For the data-type bodies: TS is inferred from the JSON (all keys observed across the group, marked optional and typed `unknown` — historical types are coarse-by-design). Rust and Go bodies are left empty in the bootstrap output. **This is a deliberate scope cut** — the bootstrap output is partial coverage; steady-state populates Rust/Go bodies as new deprecations arrive going forward. A polish pass to backfill Rust/Go bootstrap can be a follow-up issue.

- [ ] **Step 1: Write the bootstrap**

Create `scripts/template-history/bootstrap-deprecated.ts`:

```ts
#!/usr/bin/env bun
/**
 * One-time bootstrap of the deprecated emission from local analysis artifacts.
 * Run from repo root: `bun run scripts/template-history/bootstrap-deprecated.ts`
 *
 * Inputs:
 *   - scripts/template-history/mini-masterfile-removed.json
 *   - scripts/template-history/report.json
 *
 * Outputs:
 *   - packages/ts/dist/deprecated.d.ts
 *   - packages/rust/src/deprecated.rs
 *   - packages/go/deprecated/deprecated.go
 *
 * After this script runs and the resulting PR merges, this file is deleted
 * along with all analysis artifacts. Steady-state diffs handle future updates.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { emitGo } from "../../src/deprecated/emit-go";
import { emitRust } from "../../src/deprecated/emit-rust";
import { emitTypescript } from "../../src/deprecated/emit-typescript";
import type { DeprecatedDiscriminator, DeprecatedSet } from "../../src/deprecated/types";

interface RawEntry {
	templateId: string;
	data: { templateId: string; [discriminator: string]: unknown };
}

interface PermanentRemoval {
	template_id: string;
	last_seen_date: string;
}

interface Report {
	permanent: PermanentRemoval[];
}

const REPO_ROOT = join(import.meta.dir, "..", "..");
const MINI_MASTERFILE = join(import.meta.dir, "mini-masterfile-removed.json");
const REPORT = join(import.meta.dir, "report.json");

const TS_OUT = join(REPO_ROOT, "packages", "ts", "dist", "deprecated.d.ts");
const RUST_OUT = join(REPO_ROOT, "packages", "rust", "src", "deprecated.rs");
const GO_OUT = join(REPO_ROOT, "packages", "go", "deprecated", "deprecated.go");

function main(): void {
	const entries = JSON.parse(readFileSync(MINI_MASTERFILE, "utf8")) as RawEntry[];
	const report = JSON.parse(readFileSync(REPORT, "utf8")) as Report;

	const lastSeenByTemplateId = new Map<string, string>();
	for (const r of report.permanent) {
		lastSeenByTemplateId.set(r.template_id, r.last_seen_date.slice(0, 10));
	}

	// Group by discriminator (the FIRST non-templateId key in `data`).
	// Marker-only entries with no inner key are bucketed under "_marker".
	const byDiscriminator = new Map<string, RawEntry[]>();
	for (const entry of entries) {
		const dKeys = Object.keys(entry.data).filter((k) => k !== "templateId");
		const discriminator = dKeys[0] ?? "_marker";
		if (!byDiscriminator.has(discriminator)) byDiscriminator.set(discriminator, []);
		byDiscriminator.get(discriminator)!.push(entry);
	}

	const set: DeprecatedSet = new Map();
	for (const [discriminator, group] of byDiscriminator) {
		const templateIds = new Set(group.map((e) => e.templateId));
		const lastSeen = [...templateIds]
			.map((id) => lastSeenByTemplateId.get(id) ?? "0000-00-00")
			.sort()
			.at(-1)!;

		const tsDataBody = inferTypescriptDataInterface(discriminator, group);

		const record: DeprecatedDiscriminator = {
			discriminator,
			templateIds,
			lastSeen,
			entryCount: templateIds.size,
			dataTypeBody: { ts: tsDataBody, rust: "", go: "" },
		};
		set.set(discriminator, record);
	}

	mkdirSync(join(REPO_ROOT, "packages", "go", "deprecated"), { recursive: true });
	writeFileSync(TS_OUT, emitTypescript(set));
	writeFileSync(RUST_OUT, emitRust(set));
	writeFileSync(GO_OUT, emitGo(set));

	console.log(`bootstrap: wrote ${set.size} discriminators (${entries.length} entries)`);
	console.log(`  TS:   ${TS_OUT}`);
	console.log(`  Rust: ${RUST_OUT}`);
	console.log(`  Go:   ${GO_OUT}`);
}

function inferTypescriptDataInterface(discriminator: string, group: RawEntry[]): string {
	const Pascal = discriminator.charAt(0).toUpperCase() + discriminator.slice(1);
	const allKeys = new Set<string>();
	for (const e of group) {
		const inner = e.data[discriminator];
		if (inner && typeof inner === "object" && !Array.isArray(inner)) {
			for (const k of Object.keys(inner as object)) allKeys.add(k);
		}
	}
	if (allKeys.size === 0) {
		return `export interface Deprecated${Pascal}Data {}`;
	}
	const sortedKeys = [...allKeys].sort();
	const fields = sortedKeys.map((k) => `\t${JSON.stringify(k)}?: unknown;`).join("\n");
	return `export interface Deprecated${Pascal}Data {\n${fields}\n}`;
}

main();
```

- [ ] **Step 2: Sanity-check the script parses**

Run: `bun build --target=bun scripts/template-history/bootstrap-deprecated.ts > /dev/null`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add scripts/template-history/bootstrap-deprecated.ts
git commit -m "$(cat <<'EOF'
feat(deprecated): bootstrap script for initial emission

One-time consumer of mini-masterfile-removed.json + report.json.
TS data shapes inferred (all-optional unknown). Rust/Go data
bodies are intentionally empty in bootstrap; steady-state
populates them as new deprecations arrive.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

## Task 8: Apply package configuration changes

**Files:**
- Modify: `packages/ts/package.json` (add `"./deprecated"` to `exports`)
- Modify: `packages/rust/Cargo.toml` (add `[features]`)
- Modify: `packages/rust/src/lib.rs` (add `#[cfg(feature = "deprecated")] pub mod deprecated;`)
- Create: `packages/go/deprecated/doc.go`

- [ ] **Step 1: Update `packages/ts/package.json`**

Use Edit:

old:
```json
		"./lookup-table": {
			"types": "./dist/lookup-table.d.ts"
		},
		"./*": {
```

new:
```json
		"./lookup-table": {
			"types": "./dist/lookup-table.d.ts"
		},
		"./deprecated": {
			"types": "./dist/deprecated.d.ts"
		},
		"./*": {
```

- [ ] **Step 2: Update `packages/rust/Cargo.toml`**

Use Edit:

old:
```toml
pogo-masterfile-macros = { version = "0.1", path = "../rust-macros" }

[package.metadata.docs.rs]
```

new:
```toml
pogo-masterfile-macros = { version = "0.1", path = "../rust-macros" }

[features]
default = []
# Opt-in: types for templates that have been removed from upstream GAME_MASTER.json.
# Each type carries a #[deprecated] attribute; expect compile warnings at use sites.
deprecated = []

[package.metadata.docs.rs]
```

- [ ] **Step 3: Update `packages/rust/src/lib.rs`**

DO NOT read the file (CLAUDE.md flags it as too large). Append the cfg-gated module declaration:

```bash
printf '\n#[cfg(feature = "deprecated")]\npub mod deprecated;\n' >> packages/rust/src/lib.rs
```

- [ ] **Step 4: Create `packages/go/deprecated/doc.go`**

```bash
mkdir -p packages/go/deprecated
```

Create `packages/go/deprecated/doc.go`:

```go
// Package deprecated holds historical type definitions for masterfile
// templates that have been removed from the upstream GAME_MASTER.json.
//
// Types here carry // Deprecated: comments and are kept for consumers
// that need to parse older masterfile dumps. New code should prefer
// the live types in github.com/Hazels-Lab/pogo-masterfile/packages/go.
//
// The contents of deprecated.go are fully generated. See:
//   docs/superpowers/specs/2026-05-03-deprecated-types-tracking-design.md
package deprecated
```

- [ ] **Step 5: Verify Rust still compiles without the feature**

Run: `cd packages/rust && cargo check`
Expected: PASS (cfg-gate excludes `mod deprecated` by default).

- [ ] **Step 6: Verify Go package declaration is valid**

Run: `cd packages/go/deprecated && go vet ./...`
Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add packages/ts/package.json packages/rust/Cargo.toml packages/rust/src/lib.rs packages/go/deprecated/doc.go
git commit -m "$(cat <<'EOF'
feat(deprecated): wire opt-in surfaces

- TS: add "./deprecated" sub-path to package.json exports
- Rust: add [features] deprecated and cfg-gated module decl in lib.rs
- Go: scaffold packages/go/deprecated/doc.go for the new sub-package

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

## Task 9: Run the bootstrap and verify

- [ ] **Step 1: Run the bootstrap**

```bash
bun run scripts/template-history/bootstrap-deprecated.ts
```

Expected output:
```
bootstrap: wrote 41 discriminators (12423 entries)
  TS:   .../packages/ts/dist/deprecated.d.ts
  Rust: .../packages/rust/src/deprecated.rs
  Go:   .../packages/go/deprecated/deprecated.go
```

- [ ] **Step 2: Run formatter**

```bash
bun run format
```

(biome on TS, gofmt on Go, rustfmt on Rust — runs in parallel.)

- [ ] **Step 3: Verify TS typechecks**

```bash
cd packages/ts && bun run check
```

Expected: PASS.

If you see errors related to empty interfaces (`interface Deprecated_markerData {}`), suppress per-line with biome ignore comments after format. The marker-only data interface is intentionally empty.

- [ ] **Step 4: Verify Rust compiles with the feature**

```bash
cd packages/rust && cargo check --features deprecated
```

Expected: PASS. `unused_attributes` / `dead_code` warnings on individual `#[deprecated]` types are expected.

- [ ] **Step 5: Verify Go compiles**

```bash
cd packages/go/deprecated && go build ./...
```

Expected: PASS.

- [ ] **Step 6: Spot-check the emission**

```bash
wc -l packages/ts/dist/deprecated.d.ts packages/rust/src/deprecated.rs packages/go/deprecated/deprecated.go
grep -c "@deprecated" packages/ts/dist/deprecated.d.ts
```

Expected: `@deprecated` count is 41 (one per discriminator).

- [ ] **Step 7: Commit the bootstrap output**

```bash
git add packages/ts/dist/deprecated.d.ts packages/rust/src/deprecated.rs packages/go/deprecated/deprecated.go
git commit -m "$(cat <<'EOF'
feat(deprecated): bootstrap initial deprecated type emission

Generated from local analysis: 41 discriminators covering 12,423
permanently-removed templates spanning Sep 2024 – May 2026.

TS data shapes are coarse (all-optional unknown). Rust/Go data
bodies are scaffolded but empty in bootstrap; steady-state will
populate them as new deprecations arrive.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

## Task 10: Steady-state script

**Files:**
- Create: `src/update-deprecated.ts`
- Create: `src/update-deprecated.test.ts`

- [ ] **Step 1: Write the failing test**

Create `src/update-deprecated.test.ts`:

```ts
import { describe, expect, test } from "bun:test";
import { applyDiff } from "./update-deprecated";
import type { DeprecatedSet } from "./deprecated/types";

describe("applyDiff", () => {
	test("adds newly-deprecated to existing discriminator (and bumps lastSeen)", () => {
		const current: DeprecatedSet = new Map();
		current.set("foo", {
			discriminator: "foo",
			templateIds: new Set(["A"]),
			lastSeen: "2026-01-01",
			entryCount: 1,
			dataTypeBody: { ts: "export interface DeprecatedFooData {}", rust: "", go: "" },
		});
		const out = applyDiff({
			current,
			newlyDeprecated: new Set(["B"]),
			newlyRevived: new Set(),
			discriminatorOfId: new Map([["B", "foo"]]),
			dataBodiesByDiscriminator: new Map(),
			today: "2026-05-03",
		});
		expect(out.get("foo")?.templateIds.has("A")).toBe(true);
		expect(out.get("foo")?.templateIds.has("B")).toBe(true);
		expect(out.get("foo")?.entryCount).toBe(2);
		expect(out.get("foo")?.lastSeen).toBe("2026-05-03");
		// dataTypeBody for an existing discriminator is NOT updated.
		expect(out.get("foo")?.dataTypeBody.ts).toBe("export interface DeprecatedFooData {}");
	});

	test("creates new discriminator for unseen newly-deprecated id", () => {
		const out = applyDiff({
			current: new Map(),
			newlyDeprecated: new Set(["X"]),
			newlyRevived: new Set(),
			discriminatorOfId: new Map([["X", "newDiscriminator"]]),
			dataBodiesByDiscriminator: new Map([
				["newDiscriminator", { ts: "export interface DeprecatedNewDiscriminatorData {}", rust: "", go: "" }],
			]),
			today: "2026-05-03",
		});
		expect(out.get("newDiscriminator")?.templateIds.has("X")).toBe(true);
		expect(out.get("newDiscriminator")?.dataTypeBody.ts).toContain("DeprecatedNewDiscriminatorData");
	});

	test("removes revived id from discriminator", () => {
		const current: DeprecatedSet = new Map();
		current.set("foo", {
			discriminator: "foo",
			templateIds: new Set(["A", "B"]),
			lastSeen: "2026-01-01",
			entryCount: 2,
			dataTypeBody: { ts: "x", rust: "", go: "" },
		});
		const out = applyDiff({
			current,
			newlyDeprecated: new Set(),
			newlyRevived: new Set(["A"]),
			discriminatorOfId: new Map(),
			dataBodiesByDiscriminator: new Map(),
			today: "2026-05-03",
		});
		expect(out.get("foo")?.templateIds.has("A")).toBe(false);
		expect(out.get("foo")?.entryCount).toBe(1);
	});

	test("drops discriminator when its last id revives", () => {
		const current: DeprecatedSet = new Map();
		current.set("foo", {
			discriminator: "foo",
			templateIds: new Set(["A"]),
			lastSeen: "2026-01-01",
			entryCount: 1,
			dataTypeBody: { ts: "x", rust: "", go: "" },
		});
		const out = applyDiff({
			current,
			newlyDeprecated: new Set(),
			newlyRevived: new Set(["A"]),
			discriminatorOfId: new Map(),
			dataBodiesByDiscriminator: new Map(),
			today: "2026-05-03",
		});
		expect(out.has("foo")).toBe(false);
	});
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test src/update-deprecated.test.ts`
Expected: FAIL with "Cannot find module './update-deprecated'"

- [ ] **Step 3: Implement `applyDiff` and the orchestrator**

Create `src/update-deprecated.ts`:

```ts
#!/usr/bin/env bun
/**
 * Steady-state deprecation update. Runs as the second step of `bun run generate`.
 *
 * Reads:
 *   - working-tree packages/ts/dist/deprecated.d.ts (current deprecated set)
 *   - `git show HEAD:packages/ts/dist/...`         (PREVIOUS live emission)
 *   - working-tree packages/ts/dist/...            (NEW live emission)
 *
 * Writes:
 *   - packages/ts/dist/deprecated.d.ts
 *   - packages/rust/src/deprecated.rs
 *   - packages/go/deprecated/deprecated.go
 *
 * Git invocations use execFileSync with argv arrays — no shell interpolation,
 * no command-injection surface even though all inputs are repo-internal.
 */
import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { computeDiff } from "./deprecated/compute-diff";
import { emitGo } from "./deprecated/emit-go";
import { emitRust } from "./deprecated/emit-rust";
import { emitTypescript } from "./deprecated/emit-typescript";
import { extractTemplateIdsFromEntries, parseLiveTsEmission } from "./deprecated/parse-emission";
import type { DataTypeBody, DeprecatedDiscriminator, DeprecatedSet } from "./deprecated/types";

const REPO_ROOT = join(import.meta.dir, "..");
const TS_DIST = join(REPO_ROOT, "packages", "ts", "dist");

const TS_OUT = join(TS_DIST, "deprecated.d.ts");
const RUST_OUT = join(REPO_ROOT, "packages", "rust", "src", "deprecated.rs");
const GO_OUT = join(REPO_ROOT, "packages", "go", "deprecated", "deprecated.go");

export interface ApplyDiffInput {
	current: DeprecatedSet;
	newlyDeprecated: Set<string>;
	newlyRevived: Set<string>;
	/** Map<templateId, discriminator> from the PREVIOUS live emission. */
	discriminatorOfId: Map<string, string>;
	/** Map<discriminator, DataTypeBody> from the PREVIOUS live emission, used when a discriminator is new to deprecated. */
	dataBodiesByDiscriminator: Map<string, DataTypeBody>;
	/** Today's date in ISO YYYY-MM-DD form. */
	today: string;
}

export function applyDiff(input: ApplyDiffInput): DeprecatedSet {
	// Clone current to avoid mutation surprises.
	const next: DeprecatedSet = new Map();
	for (const [k, v] of input.current) {
		next.set(k, {
			discriminator: v.discriminator,
			templateIds: new Set(v.templateIds),
			lastSeen: v.lastSeen,
			entryCount: v.entryCount,
			dataTypeBody: v.dataTypeBody,
		});
	}

	// Apply newly-revived: remove ids; drop empty discriminators.
	for (const id of input.newlyRevived) {
		for (const [discriminator, record] of next) {
			if (record.templateIds.delete(id)) {
				record.entryCount = record.templateIds.size;
				if (record.templateIds.size === 0) next.delete(discriminator);
			}
		}
	}

	// Apply newly-deprecated: add ids; create discriminators if needed; bump lastSeen.
	for (const id of input.newlyDeprecated) {
		const discriminator = input.discriminatorOfId.get(id);
		if (!discriminator) continue; // Unknown id — tolerate (shouldn't happen).
		let record = next.get(discriminator);
		if (!record) {
			const dataTypeBody = input.dataBodiesByDiscriminator.get(discriminator) ?? { ts: "", rust: "", go: "" };
			record = {
				discriminator,
				templateIds: new Set(),
				lastSeen: input.today,
				entryCount: 0,
				dataTypeBody,
			};
			next.set(discriminator, record);
		}
		record.templateIds.add(id);
		record.entryCount = record.templateIds.size;
		record.lastSeen = input.today;
	}

	return next;
}

// --- I/O orchestration (covered by Task 11's smoke test) ---

function git(...args: string[]): string | null {
	try {
		return execFileSync("git", args, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] });
	} catch {
		return null;
	}
}

/** `git show <rev>:<path>` — returns null if the path doesn't exist at that rev. */
function gitShow(rev: string, path: string): string | null {
	return git("show", `${rev}:${path}`);
}

/** Read PREVIOUS live emission at HEAD — Map<templateId, discriminator>. */
function parsePreLiveFromGit(): Map<string, string> {
	const result = new Map<string, string>();
	const lsOut = git("ls-tree", "HEAD", "packages/ts/dist");
	if (!lsOut) return result;
	for (const line of lsOut.trim().split("\n")) {
		const parts = line.split("\t");
		if (parts.length < 2) continue;
		const meta = parts[0].split(" ");
		const objType = meta[1];
		const path = parts[1];
		if (objType !== "tree") continue;
		const dirName = path.split("/").pop()!;
		const source = gitShow("HEAD", `${path}/entries.d.ts`);
		if (!source) continue;
		const discriminator = kebabToCamel(dirName);
		const Pascal = pascalCase(discriminator);
		const ids = extractTemplateIdsFromEntries(source, Pascal);
		for (const id of ids) result.set(id, discriminator);
	}
	return result;
}

/** Fetch PREVIOUS-HEAD type bodies for one discriminator, all three languages. */
function fetchDataBodiesAtHead(discriminator: string): DataTypeBody {
	const kebab = camelToKebab(discriminator);
	const snake = camelToSnake(discriminator);
	const ts = gitShow("HEAD", `packages/ts/dist/${kebab}/types.d.ts`) ?? "";
	const rust = gitShow("HEAD", `packages/rust/src/${snake}/types.rs`) ?? "";
	const go = gitShow("HEAD", `packages/go/${snake}/types.go`) ?? "";
	return { ts, rust, go };
}

function parseCurrentDeprecated(): DeprecatedSet {
	if (!existsSync(TS_OUT)) return new Map();
	const source = readFileSync(TS_OUT, "utf8");
	const set: DeprecatedSet = new Map();
	const blockRe =
		/\/\*\* @deprecated lastSeen (\d{4}-\d{2}-\d{2}) — (\d+) entries \*\/\nexport type Deprecated([A-Z][A-Za-z0-9]*)<TID extends Deprecated\3Ids[^>]*> = \{[\s\S]*?\};/g;
	const idsRe = /type Deprecated([A-Z][A-Za-z0-9]*)Ids = ([^;]+);/g;
	const idMap = new Map<string, string[]>();
	for (const m of source.matchAll(idsRe)) {
		const Pascal = m[1];
		const literals = [...m[2].matchAll(/"([^"]+)"/g)].map((mm) => mm[1]);
		idMap.set(Pascal, literals);
	}
	for (const m of source.matchAll(blockRe)) {
		const lastSeen = m[1];
		const entryCount = Number(m[2]);
		const Pascal = m[3];
		const discriminator = Pascal.charAt(0).toLowerCase() + Pascal.slice(1);
		const ids = idMap.get(Pascal) ?? [];
		const dataRe = new RegExp(`export interface Deprecated${Pascal}Data \\{[\\s\\S]*?\\}`, "m");
		const dataMatch = source.match(dataRe);
		set.set(discriminator, {
			discriminator,
			templateIds: new Set(ids),
			lastSeen,
			entryCount,
			dataTypeBody: { ts: dataMatch?.[0] ?? "", rust: "", go: "" },
		});
	}
	return set;
}

function main(): void {
	const oldLiveMap = parsePreLiveFromGit();
	if (oldLiveMap.size === 0) {
		console.warn(
			"update-deprecated: previous live emission unavailable at HEAD (fresh clone or paths moved). No-op.",
		);
		return;
	}
	const oldLiveIds = new Set(oldLiveMap.keys());

	const newLiveMap = parseLiveTsEmission(TS_DIST);
	const newLiveIds = new Set(newLiveMap.keys());

	const current = parseCurrentDeprecated();
	const currentIds = new Set<string>();
	for (const r of current.values()) for (const id of r.templateIds) currentIds.add(id);

	const diff = computeDiff({ oldLive: oldLiveIds, newLive: newLiveIds, currentDeprecated: currentIds });

	const newDiscriminators = new Set<string>();
	for (const id of diff.newlyDeprecated) {
		const discriminator = oldLiveMap.get(id);
		if (!discriminator) continue;
		if (!current.has(discriminator)) newDiscriminators.add(discriminator);
	}
	const dataBodies = new Map<string, DataTypeBody>();
	for (const d of newDiscriminators) dataBodies.set(d, fetchDataBodiesAtHead(d));

	const today = new Date().toISOString().slice(0, 10);
	const next = applyDiff({
		current,
		newlyDeprecated: diff.newlyDeprecated,
		newlyRevived: diff.newlyRevived,
		discriminatorOfId: oldLiveMap,
		dataBodiesByDiscriminator: dataBodies,
		today,
	});

	writeFileSync(TS_OUT, emitTypescript(next));
	writeFileSync(RUST_OUT, emitRust(next));
	writeFileSync(GO_OUT, emitGo(next));

	console.log(
		`update-deprecated: +${diff.newlyDeprecated.size} newly deprecated, -${diff.newlyRevived.size} revived, ${next.size} discriminators`,
	);
}

function kebabToCamel(s: string): string {
	return s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}
function camelToKebab(s: string): string {
	return s.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
}
function camelToSnake(s: string): string {
	return s.replace(/[A-Z]/g, (c) => `_${c.toLowerCase()}`);
}
function pascalCase(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

if (import.meta.main) main();
```

- [ ] **Step 4: Run test to verify it passes**

Run: `bun test src/update-deprecated.test.ts`
Expected: PASS, 4 tests.

- [ ] **Step 5: Commit**

```bash
git add src/update-deprecated.ts src/update-deprecated.test.ts
git commit -m "$(cat <<'EOF'
feat(deprecated): steady-state script for ongoing deprecation tracking

Reads pre-regen state from git HEAD and post-regen state from the
working tree, computes diffs, applies them. Pure applyDiff() is
unit-tested; I/O orchestration is covered by Task 11's smoke test.

Git calls use execFileSync with argv arrays for command-injection
safety.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

## Task 11: Wire into `bun run generate`

**Files:**
- Modify: root `package.json`

- [ ] **Step 1: Update the `generate` script**

In root `package.json`, find:

```json
"generate": "bun run src/generate.ts && bun run format",
```

Replace with:

```json
"generate": "bun run src/generate.ts && bun run src/update-deprecated.ts && bun run format",
```

- [ ] **Step 2: Smoke test — run generate immediately**

```bash
bun run generate
```

Expected output includes:
```
update-deprecated: +0 newly deprecated, -0 revived, 41 discriminators
```

(Zero diffs are expected — bootstrap and steady-state should agree on first run.)

If non-zero, investigate before continuing.

- [ ] **Step 3: Verify the working tree has no spurious changes**

```bash
git status
```

Expected: only `masterfile.json` and `template-ids.json` may show as modified (gitignored, ignore them). Regenerated dist files may show whitespace-only diffs from the formatter. The deprecated files should NOT have meaningful changes from Task 9's output (idempotent first run).

If `git diff packages/ts/dist/deprecated.d.ts` shows any meaningful change, the steady-state and bootstrap are out of sync — debug before proceeding.

- [ ] **Step 4: Commit the script change**

```bash
git add package.json
git commit -m "$(cat <<'EOF'
feat(deprecated): chain update-deprecated into bun run generate

Runs after src/generate.ts (live emission fresh) and before bun run
format (so deprecated files get formatted too). First-run smoke
test verified zero spurious diffs.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

## Task 12: Cleanup analysis artifacts

After all deletions, `scripts/template-history/` is empty and removed.

- [ ] **Step 1: Verify no live source code references the analysis dir**

```bash
grep -rn "template-history" src/ packages/ scripts/ --include="*.ts" --include="*.json"
```

Expected: only `scripts/template-history/...` matches (those are the files we're about to delete) and possibly references in `bump-versions.ts`/etc. that we should leave alone. There must be NO references in `src/` to anything under `scripts/template-history/`.

- [ ] **Step 2: Delete the files**

```bash
rm scripts/template-history/extract_history.py
rm scripts/template-history/analyze_gaps.py
rm scripts/template-history/gap_detection.py
rm scripts/template-history/build_mini_masterfile.py
rm scripts/template-history/bootstrap-deprecated.ts
rm scripts/template-history/CONTRIBUTION.md
rm scripts/template-history/commits.jsonl
rm scripts/template-history/report.json
rm scripts/template-history/mini-masterfile-removed.json
rm scripts/template-history/extract.log
rmdir scripts/template-history
```

- [ ] **Step 3: Verify clean**

```bash
ls scripts/
```

Expected: only `bump-versions.ts`, `detect-changes.ts`, `push-release-tags.ts` remain.

- [ ] **Step 4: Run the full pipeline once more to confirm steady-state still works**

```bash
bun run generate
```

Expected: same `+0 newly deprecated, -0 revived` output as Task 11.

- [ ] **Step 5: Commit**

```bash
git add -A scripts/template-history/
git commit -m "$(cat <<'EOF'
chore(deprecated): delete one-time analysis scripts and data

Bootstrap is complete. scripts/template-history/ contained Python
analysis scripts, intermediate JSONL/JSON, and the bootstrap entry
point — all single-use. Steady-state (src/update-deprecated.ts)
handles all future updates.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

## Self-review checklist

**Spec coverage:**
- ✅ Lifecycle (bootstrap + steady-state) — Tasks 7, 9 (bootstrap), 10, 11 (steady-state)
- ✅ Per-language opt-in — Task 8 (TS exports, Rust feature, Go subpackage)
- ✅ Emission shape (multi-entry, singleton, no-discriminator) — Tasks 4, 5, 6
- ✅ Steady-state algorithm — Task 10 implements the spec's pseudocode
- ✅ Edge cases (schema drift snapshot, git-show fail, first-run safety) — Task 10's `parsePreLiveFromGit` returns empty on failure; `applyDiff` doesn't update existing dataTypeBody
- ✅ Cleanup — Task 12

**Placeholder scan:** none ("TBD"/"TODO"/"implement later" not present in any task body).

**Type consistency:** `DeprecatedDiscriminator`, `DeprecatedSet`, `DataTypeBody`, `DiffResult` defined once in Task 1, used consistently in Tasks 2-10. Function signatures match across consumers.

**Known limitation called out in plan:** Rust and Go data-type bodies in the bootstrap output are empty. Steady-state populates them as new deprecations arrive. Documented in Task 7 comments and the bootstrap commit message. A polish pass to backfill is a follow-up issue.

**Security note:** all `git` invocations use `execFileSync` with argv arrays — no shell interpolation surface.
