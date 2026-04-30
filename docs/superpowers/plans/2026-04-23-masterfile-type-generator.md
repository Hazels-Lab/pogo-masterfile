# Masterfile Type Generator Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a TypeScript generator that fetches the remote Pokémon GO `GAME_MASTER.json`, groups its ~18,050 entries by their single `data`-level discriminator key, and emits ergonomic TypeScript types into `packages/ts-v2/src/`.

**Architecture:** One `bun`-runnable script at `src/generate.ts` orchestrates a pure functional pipeline: fetch → group → name → emit → write. Pure functions live in `src/group.ts`, `src/naming.ts`, `src/emit.ts`, `src/write.ts`. Each has a colocated `.test.ts`. Output is deterministic (alphabetically sorted) so CI diffs are meaningful.

**Tech Stack:** TypeScript, Bun (runtime + built-in test runner), Biome (formatting/linting — tabs, double quotes). No runtime deps beyond Node built-ins and `fetch`.

**Spec:** [`docs/superpowers/specs/2026-04-23-masterfile-type-generator-design.md`](../specs/2026-04-23-masterfile-type-generator-design.md)

---

## File structure

Files the plan creates/modifies:

| Path | Responsibility |
|---|---|
| `src/generate.ts` | Main entry — fetch + orchestrate pipeline. Side-effects live here only. |
| `src/group.ts` | `groupEntries(entries)` — bucket by discriminator, throw on invariant violations. |
| `src/naming.ts` | `groupName`, `sharedPrefix`, `aliasSuffix`, `deriveGroupAliases` (with collision fallback). Pure. |
| `src/emit.ts` | `emitGroupFile`, `emitMiscFile`, `emitIndexFile` — string generators for TS files. Pure. |
| `src/write.ts` | `writeOutput(files, outDir)` — nuke `outDir`, write files. Only file-I/O side effects. |
| `src/fixtures.ts` | Shared mock masterfile for tests. |
| `src/group.test.ts` | Tests for `groupEntries`. |
| `src/naming.test.ts` | Tests for naming helpers + collision handling. |
| `src/emit.test.ts` | Tests for emission helpers. |
| `src/write.test.ts` | Test for filesystem writer (temp dir). |
| `package.json` | Add `"generate"` script. |

The existing `src/index.ts`, `src/template-id-grouper.ts`, `src/template-id-grouper-openai.ts`, `src/typescript-v2.ts` are leftovers from failed attempts. **Delete them** at the start (Task 1).

Output (generated; regenerated fresh on each run):
```
packages/ts-v2/src/
  groups/
    <kebab-case-discriminator>.ts × 60
    misc.ts
  index.ts
```

---

## Task 1: Clean slate — delete failed-attempt src files + prep package.json

**Files:**
- Delete: `src/index.ts`, `src/template-id-grouper.ts`, `src/template-id-grouper-openai.ts`, `src/typescript-v2.ts`
- Modify: `package.json`

- [ ] **Step 1: Delete old src files**

```bash
rm src/index.ts src/template-id-grouper.ts src/template-id-grouper-openai.ts src/typescript-v2.ts
```

- [ ] **Step 2: Add generate + test scripts to `package.json`**

Replace the current `package.json` with:

```json
{
  "name": "pogo-masterfile-types",
  "module": "src/generate.ts",
  "type": "module",
  "private": true,
  "scripts": {
    "generate": "bun run src/generate.ts",
    "test": "bun test",
    "typecheck": "tsc --noEmit"
  },
  "devDependencies": {
    "@biomejs/biome": "^2.4.12",
    "@types/bun": "latest"
  },
  "peerDependencies": {
    "typescript": "^6.0.3"
  }
}
```

Note: removed `@na-ji/pogo-protos` and `fastest-levenshtein` — they were deps of the failed attempts. The new generator has zero runtime deps.

- [ ] **Step 3: Verify a tree snapshot**

Run: `ls src/ && cat package.json | head -20`
Expected: `src/` is empty; `package.json` has the three scripts.

- [ ] **Step 4: Install (drops the now-unused deps)**

Run: `bun install`
Expected: resolves cleanly, `bun.lock` is updated.

- [ ] **Step 5: Commit**

```bash
git add -u src/ package.json bun.lock
git commit -m "chore: clean slate for generator rewrite"
```

---

## Task 2: Create shared test fixtures

**Files:**
- Create: `src/fixtures.ts`

- [ ] **Step 1: Write fixtures.ts**

Note: uses `satisfies` with an inline shape so this file has no dependency on `group.ts` (which doesn't exist yet). Tests will import `Entry` from group.ts directly in later tasks.

```ts
// Hand-crafted tiny masterfile that exercises every edge case the spec calls out:
// - multiple multi-entry groups with clean shared prefixes
// - a group with a partial (non-boundary) common prefix
// - a singleton
// - a lowercase/mixed-case templateId
// - an alias-suffix collision within one group
export const MOCK_MASTERFILE = [
	// typeEffective group — clean shared prefix POKEMON_TYPE_
	{
		templateId: "POKEMON_TYPE_BUG",
		data: { templateId: "POKEMON_TYPE_BUG", typeEffective: {} },
	},
	{
		templateId: "POKEMON_TYPE_DARK",
		data: { templateId: "POKEMON_TYPE_DARK", typeEffective: {} },
	},
	// pokemonSettings group — no shared prefix at underscore boundary
	{
		templateId: "V0001_POKEMON_BULBASAUR",
		data: { templateId: "V0001_POKEMON_BULBASAUR", pokemonSettings: {} },
	},
	{
		templateId: "V0002_POKEMON_IVYSAUR",
		data: { templateId: "V0002_POKEMON_IVYSAUR", pokemonSettings: {} },
	},
	// avatarCustomization group — mixed/lowercase templateIds
	{
		templateId: "AVATAR_f_backpack_one",
		data: { templateId: "AVATAR_f_backpack_one", avatarCustomization: {} },
	},
	{
		templateId: "AVATAR_f_backpack_two",
		data: { templateId: "AVATAR_f_backpack_two", avatarCustomization: {} },
	},
	// Collision-inducing pair: both PascalCase to "Foo" after shared prefix strip.
	// Shared prefix would be "COLLIDE_" → suffixes "foo" and "FOO" both → "Foo".
	{
		templateId: "COLLIDE_foo",
		data: { templateId: "COLLIDE_foo", collisionTest: {} },
	},
	{
		templateId: "COLLIDE_FOO",
		data: { templateId: "COLLIDE_FOO", collisionTest: {} },
	},
	// Singleton
	{
		templateId: "ACCESSIBILITY_CLIENT_SETTINGS",
		data: {
			templateId: "ACCESSIBILITY_CLIENT_SETTINGS",
			accessibilitySettings: {},
		},
	},
] satisfies Array<{ templateId: string; data: Record<string, unknown> }>;
```

- [ ] **Step 2: Commit**

```bash
git add src/fixtures.ts
git commit -m "test: add shared fixtures covering naming edge cases"
```

---

## Task 3: Implement `groupEntries` (TDD)

**Files:**
- Create: `src/group.ts`, `src/group.test.ts`

- [ ] **Step 1: Write the failing test**

`src/group.test.ts`:

```ts
import { describe, expect, test } from "bun:test";
import { MOCK_MASTERFILE } from "./fixtures.ts";
import { groupEntries } from "./group.ts";

describe("groupEntries", () => {
	test("buckets entries by their single non-templateId data key", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		expect(groups.get("typeEffective")?.entries.length).toBe(2);
		expect(groups.get("pokemonSettings")?.entries.length).toBe(2);
		expect(groups.get("avatarCustomization")?.entries.length).toBe(2);
		expect(groups.get("collisionTest")?.entries.length).toBe(2);
		expect(groups.get("accessibilitySettings")?.entries.length).toBe(1);
	});

	test("throws when an entry has zero non-templateId data keys", () => {
		expect(() =>
			groupEntries([
				{ templateId: "BROKEN", data: { templateId: "BROKEN" } },
			]),
		).toThrow(/BROKEN/);
	});

	test("throws when an entry has two or more non-templateId data keys", () => {
		expect(() =>
			groupEntries([
				{
					templateId: "BROKEN_TWO",
					data: { templateId: "BROKEN_TWO", a: {}, b: {} },
				},
			]),
		).toThrow(/BROKEN_TWO/);
	});
});
```

- [ ] **Step 2: Run test, verify it fails**

Run: `bun test src/group.test.ts`
Expected: FAIL — `groupEntries` / `Entry` not defined.

- [ ] **Step 3: Implement `src/group.ts`**

```ts
export type Entry = {
	templateId: string;
	data: Record<string, unknown>;
};

export type Group = {
	discriminator: string;
	entries: Entry[];
};

export function groupEntries(entries: Entry[]): Map<string, Group> {
	const groups = new Map<string, Group>();
	for (const entry of entries) {
		const keys = Object.keys(entry.data).filter((k) => k !== "templateId");
		if (keys.length !== 1) {
			throw new Error(
				`Entry ${entry.templateId} has ${keys.length} non-templateId data keys, expected 1`,
			);
		}
		const disc = keys[0]!;
		let group = groups.get(disc);
		if (!group) {
			group = { discriminator: disc, entries: [] };
			groups.set(disc, group);
		}
		group.entries.push(entry);
	}
	return groups;
}
```

- [ ] **Step 4: Run test, verify it passes**

Run: `bun test src/group.test.ts`
Expected: PASS (3 tests).

- [ ] **Step 5: Commit**

```bash
git add src/group.ts src/group.test.ts
git commit -m "feat(group): bucket masterfile entries by discriminator"
```

---

## Task 4: Implement `groupName` (TDD)

**Files:**
- Create: `src/naming.ts`, `src/naming.test.ts`

- [ ] **Step 1: Write the failing test**

`src/naming.test.ts`:

```ts
import { describe, expect, test } from "bun:test";
import { groupName } from "./naming.ts";

describe("groupName", () => {
	test("PascalCases a camelCase discriminator", () => {
		expect(groupName("typeEffective")).toBe("TypeEffective");
		expect(groupName("pokemonSettings")).toBe("PokemonSettings");
		expect(groupName("accessibilitySettings")).toBe("AccessibilitySettings");
	});
});
```

- [ ] **Step 2: Run test, verify it fails**

Run: `bun test src/naming.test.ts`
Expected: FAIL — `groupName` not defined.

- [ ] **Step 3: Implement in `src/naming.ts`**

```ts
export function groupName(discriminator: string): string {
	return discriminator[0]!.toUpperCase() + discriminator.slice(1);
}
```

- [ ] **Step 4: Run test, verify it passes**

Run: `bun test src/naming.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/naming.ts src/naming.test.ts
git commit -m "feat(naming): add groupName helper"
```

---

## Task 5: Implement `sharedPrefix` (TDD)

**Files:**
- Modify: `src/naming.ts`, `src/naming.test.ts`

- [ ] **Step 1: Add failing tests**

Append to `src/naming.test.ts`:

```ts
import { sharedPrefix } from "./naming.ts";

describe("sharedPrefix", () => {
	test("returns longest common prefix truncated to last underscore", () => {
		expect(sharedPrefix(["POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK"])).toBe(
			"POKEMON_TYPE_",
		);
	});

	test("returns empty string when no underscore boundary exists", () => {
		// "V0001_POKEMON_BULBASAUR" / "V0002_POKEMON_IVYSAUR" share only "V" — no underscore.
		expect(
			sharedPrefix(["V0001_POKEMON_BULBASAUR", "V0002_POKEMON_IVYSAUR"]),
		).toBe("");
	});

	test("returns empty string for single-element input", () => {
		expect(sharedPrefix(["ONE_ID"])).toBe("");
	});

	test("returns empty string for empty input", () => {
		expect(sharedPrefix([])).toBe("");
	});

	test("handles case where one id is a full prefix of another", () => {
		// Common prefix is "POKEMON_BULBASAUR" (no trailing _), truncate to last _ → "POKEMON_"
		expect(
			sharedPrefix(["POKEMON_BULBASAUR", "POKEMON_BULBASAUR_SHINY"]),
		).toBe("POKEMON_");
	});
});
```

- [ ] **Step 2: Run tests, verify fail**

Run: `bun test src/naming.test.ts`
Expected: FAIL — `sharedPrefix` not defined.

- [ ] **Step 3: Implement in `src/naming.ts`** (append)

```ts
export function sharedPrefix(ids: string[]): string {
	if (ids.length <= 1) return "";
	let p = ids[0]!;
	for (const id of ids) {
		while (!id.startsWith(p)) p = p.slice(0, -1);
		if (p === "") return "";
	}
	const lastUnderscore = p.lastIndexOf("_");
	return lastUnderscore >= 0 ? p.slice(0, lastUnderscore + 1) : "";
}
```

- [ ] **Step 4: Run tests, verify pass**

Run: `bun test src/naming.test.ts`
Expected: PASS (all).

- [ ] **Step 5: Commit**

```bash
git add src/naming.ts src/naming.test.ts
git commit -m "feat(naming): add sharedPrefix with underscore-boundary trimming"
```

---

## Task 6: Implement `aliasSuffix` (TDD)

**Files:**
- Modify: `src/naming.ts`, `src/naming.test.ts`

- [ ] **Step 1: Add failing tests**

Append to `src/naming.test.ts`:

```ts
import { aliasSuffix } from "./naming.ts";

describe("aliasSuffix", () => {
	test("strips prefix and PascalCases the remainder", () => {
		expect(aliasSuffix("POKEMON_TYPE_BUG", "POKEMON_TYPE_")).toBe("Bug");
		expect(aliasSuffix("POKEMON_TYPE_DRAGON", "POKEMON_TYPE_")).toBe("Dragon");
	});

	test("PascalCases mixed-case templateIds", () => {
		expect(aliasSuffix("AVATAR_f_backpack_one", "AVATAR_")).toBe(
			"FBackpackOne",
		);
	});

	test("returns Root when suffix would be empty", () => {
		expect(aliasSuffix("PREFIX_", "PREFIX_")).toBe("Root");
	});

	test("falls back to whole id when no prefix stripped", () => {
		expect(aliasSuffix("V0001_POKEMON_BULBASAUR", "")).toBe(
			"V0001PokemonBulbasaur",
		);
	});

	test("handles all-lowercase tails", () => {
		expect(aliasSuffix("x_foo_bar_baz", "x_")).toBe("FooBarBaz");
	});
});
```

- [ ] **Step 2: Run tests, verify fail**

Run: `bun test src/naming.test.ts`
Expected: FAIL — `aliasSuffix` not defined.

- [ ] **Step 3: Implement in `src/naming.ts`** (append)

```ts
export function aliasSuffix(templateId: string, prefix: string): string {
	const tail = templateId.slice(prefix.length);
	if (tail === "") return "Root";
	const parts = tail.split(/[^a-zA-Z0-9]+/).filter(Boolean);
	if (parts.length === 0) return "Root";
	return parts
		.map((w) => w[0]!.toUpperCase() + w.slice(1).toLowerCase())
		.join("");
}
```

- [ ] **Step 4: Run tests, verify pass**

Run: `bun test src/naming.test.ts`
Expected: PASS (all).

- [ ] **Step 5: Commit**

```bash
git add src/naming.ts src/naming.test.ts
git commit -m "feat(naming): add aliasSuffix with PascalCase + Root fallback"
```

---

## Task 7: Implement `deriveGroupAliases` with collision handling (TDD)

**Files:**
- Modify: `src/naming.ts`, `src/naming.test.ts`

- [ ] **Step 1: Add failing tests**

Append to `src/naming.test.ts`:

```ts
import { deriveGroupAliases } from "./naming.ts";

describe("deriveGroupAliases", () => {
	test("returns a map from templateId to clean alias suffix when no collisions", () => {
		const map = deriveGroupAliases(["POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK"]);
		expect(map.get("POKEMON_TYPE_BUG")).toBe("Bug");
		expect(map.get("POKEMON_TYPE_DARK")).toBe("Dark");
	});

	test("falls back to prefix-less PascalCase for colliding entries only", () => {
		// COLLIDE_foo and COLLIDE_FOO both would PascalCase to "Foo" after "COLLIDE_" strip.
		// Fallback uses the whole templateId (prefix = "") instead.
		const map = deriveGroupAliases(["COLLIDE_foo", "COLLIDE_FOO", "COLLIDE_bar"]);
		expect(map.get("COLLIDE_foo")).toBe("CollideFoo");
		expect(map.get("COLLIDE_FOO")).toBe("CollideFoo");
		// Wait — these STILL collide. See Step 3 comment for why this is OK.
		// But "bar" keeps its clean suffix:
		expect(map.get("COLLIDE_bar")).toBe("Bar");
	});

	test("collision fallback does not disturb non-colliding entries", () => {
		const map = deriveGroupAliases([
			"PREFIX_ALPHA",
			"PREFIX_BETA",
			"PREFIX_GAMMA",
		]);
		expect(map.get("PREFIX_ALPHA")).toBe("Alpha");
		expect(map.get("PREFIX_BETA")).toBe("Beta");
		expect(map.get("PREFIX_GAMMA")).toBe("Gamma");
	});
});
```

Note: the second test reveals a subtle issue. The spec says "fall back to `aliasSuffix(templateId, "")`" which for `COLLIDE_foo` and `COLLIDE_FOO` both yield `CollideFoo` — still colliding because they only differ in *case* of the stripped part. The fallback must guarantee uniqueness. We must tighten the spec *in the code* for this case.

- [ ] **Step 2: Resolve the case-collision subtlety**

Update the fallback rule: if the prefix-less PascalCase *also* collides, append a zero-padded numeric suffix (`_0`, `_1`, ...) in templateId-sorted order to guarantee uniqueness. Rewrite the second test:

```ts
	test("breaks further ties with a numeric suffix in lexicographic order", () => {
		const map = deriveGroupAliases(["COLLIDE_FOO", "COLLIDE_bar", "COLLIDE_foo"]);
		expect(map.get("COLLIDE_bar")).toBe("Bar"); // no collision → clean suffix
		// COLLIDE_FOO vs COLLIDE_foo → both yield CollideFoo; tie-break lexicographically.
		expect(map.get("COLLIDE_FOO")).toBe("CollideFoo0");
		expect(map.get("COLLIDE_foo")).toBe("CollideFoo1");
	});
```

- [ ] **Step 3: Run tests, verify fail**

Run: `bun test src/naming.test.ts`
Expected: FAIL — `deriveGroupAliases` not defined.

- [ ] **Step 4: Implement in `src/naming.ts`** (append)

```ts
export function deriveGroupAliases(templateIds: string[]): Map<string, string> {
	const prefix = sharedPrefix(templateIds);
	const result = new Map<string, string>();
	const suffixToIds = new Map<string, string[]>();

	for (const id of templateIds) {
		const suffix = aliasSuffix(id, prefix);
		const bucket = suffixToIds.get(suffix);
		if (bucket) bucket.push(id);
		else suffixToIds.set(suffix, [id]);
	}

	for (const [suffix, ids] of suffixToIds) {
		if (ids.length === 1) {
			result.set(ids[0]!, suffix);
			continue;
		}
		// Collision: re-derive from whole templateId.
		const reDerived = new Map<string, string[]>();
		for (const id of ids) {
			const s = aliasSuffix(id, "");
			const bucket = reDerived.get(s);
			if (bucket) bucket.push(id);
			else reDerived.set(s, [id]);
		}
		for (const [s, idList] of reDerived) {
			if (idList.length === 1) {
				result.set(idList[0]!, s);
			} else {
				// Still colliding — tie-break with numeric suffix, lexicographic order.
				const sorted = [...idList].sort();
				sorted.forEach((id, i) => result.set(id, `${s}${i}`));
			}
		}
	}

	return result;
}
```

- [ ] **Step 5: Run tests, verify pass**

Run: `bun test src/naming.test.ts`
Expected: PASS (all).

- [ ] **Step 6: Commit**

```bash
git add src/naming.ts src/naming.test.ts
git commit -m "feat(naming): add deriveGroupAliases with two-layer collision fallback"
```

---

## Task 8: Implement `emitGroupFile` for multi-entry groups (TDD)

**Files:**
- Create: `src/emit.ts`, `src/emit.test.ts`

- [ ] **Step 1: Write failing test**

`src/emit.test.ts`:

```ts
import { describe, expect, test } from "bun:test";
import type { Group } from "./group.ts";
import { emitGroupFile } from "./emit.ts";

describe("emitGroupFile", () => {
	test("emits generic interface + per-entry aliases + union + TemplateID for a multi-entry group", () => {
		const group: Group = {
			discriminator: "typeEffective",
			entries: [
				{
					templateId: "POKEMON_TYPE_BUG",
					data: { templateId: "POKEMON_TYPE_BUG", typeEffective: {} },
				},
				{
					templateId: "POKEMON_TYPE_DARK",
					data: { templateId: "POKEMON_TYPE_DARK", typeEffective: {} },
				},
			],
		};

		const output = emitGroupFile(group);

		expect(output).toContain(
			"export interface TypeEffective<T extends string> {",
		);
		expect(output).toContain("data: TypeEffectiveData<T>;");
		expect(output).toContain(
			"export interface TypeEffectiveData<T extends string> {",
		);
		expect(output).toContain("typeEffective: unknown;");
		expect(output).toContain(
			'export type TypeEffectiveBug = TypeEffective<"POKEMON_TYPE_BUG">;',
		);
		expect(output).toContain(
			'export type TypeEffectiveDark = TypeEffective<"POKEMON_TYPE_DARK">;',
		);
		expect(output).toContain(
			"export type TypeEffectiveMasterfileEntry =",
		);
		expect(output).toContain("| TypeEffectiveBug");
		expect(output).toContain("| TypeEffectiveDark");
		expect(output).toContain(
			'export type TypeEffectiveTemplateID = TypeEffectiveMasterfileEntry["templateId"];',
		);
	});

	test("sorts per-entry aliases by templateId lexicographically", () => {
		const group: Group = {
			discriminator: "typeEffective",
			entries: [
				{
					templateId: "POKEMON_TYPE_WATER",
					data: { templateId: "POKEMON_TYPE_WATER", typeEffective: {} },
				},
				{
					templateId: "POKEMON_TYPE_BUG",
					data: { templateId: "POKEMON_TYPE_BUG", typeEffective: {} },
				},
			],
		};

		const output = emitGroupFile(group);
		const bugIdx = output.indexOf("TypeEffectiveBug");
		const waterIdx = output.indexOf("TypeEffectiveWater");
		expect(bugIdx).toBeGreaterThan(-1);
		expect(waterIdx).toBeGreaterThan(-1);
		expect(bugIdx).toBeLessThan(waterIdx);
	});
});
```

- [ ] **Step 2: Run test, verify fail**

Run: `bun test src/emit.test.ts`
Expected: FAIL — `emitGroupFile` not defined.

- [ ] **Step 3: Implement `src/emit.ts`**

```ts
import type { Group } from "./group.ts";
import { deriveGroupAliases, groupName } from "./naming.ts";

export function emitGroupFile(group: Group): string {
	const gName = groupName(group.discriminator);
	const sortedIds = [...group.entries]
		.map((e) => e.templateId)
		.sort();
	const aliases = deriveGroupAliases(sortedIds);

	const lines: string[] = [];
	lines.push(`export interface ${gName}<T extends string> {`);
	lines.push(`\ttemplateId: T;`);
	lines.push(`\tdata: ${gName}Data<T>;`);
	lines.push(`}`);
	lines.push(``);
	lines.push(`export interface ${gName}Data<T extends string> {`);
	lines.push(`\ttemplateId: T;`);
	lines.push(`\t${group.discriminator}: unknown;`);
	lines.push(`}`);
	lines.push(``);

	for (const id of sortedIds) {
		const alias = aliases.get(id)!;
		lines.push(`export type ${gName}${alias} = ${gName}<"${id}">;`);
	}
	lines.push(``);

	lines.push(`export type ${gName}MasterfileEntry =`);
	sortedIds.forEach((id, i) => {
		const alias = aliases.get(id)!;
		const suffix = i === sortedIds.length - 1 ? ";" : "";
		lines.push(`\t| ${gName}${alias}${suffix}`);
	});
	lines.push(``);
	lines.push(
		`export type ${gName}TemplateID = ${gName}MasterfileEntry["templateId"];`,
	);
	lines.push(``);

	return lines.join("\n");
}
```

- [ ] **Step 4: Run test, verify pass**

Run: `bun test src/emit.test.ts`
Expected: PASS (both tests).

- [ ] **Step 5: Commit**

```bash
git add src/emit.ts src/emit.test.ts
git commit -m "feat(emit): emitGroupFile for multi-entry discriminators"
```

---

## Task 9: Implement `emitMiscFile` for singletons (TDD)

**Files:**
- Modify: `src/emit.ts`, `src/emit.test.ts`

- [ ] **Step 1: Add failing test**

Append to `src/emit.test.ts`:

```ts
import { emitMiscFile } from "./emit.ts";

describe("emitMiscFile", () => {
	test("emits a concrete interface (not generic) per singleton group, sorted by interface name", () => {
		const singletons: Group[] = [
			{
				discriminator: "xyzSettings",
				entries: [
					{
						templateId: "XYZ_SETTINGS",
						data: { templateId: "XYZ_SETTINGS", xyzSettings: {} },
					},
				],
			},
			{
				discriminator: "accessibilitySettings",
				entries: [
					{
						templateId: "ACCESSIBILITY_CLIENT_SETTINGS",
						data: {
							templateId: "ACCESSIBILITY_CLIENT_SETTINGS",
							accessibilitySettings: {},
						},
					},
				],
			},
		];

		const output = emitMiscFile(singletons);
		expect(output).toContain("export interface AccessibilitySettings {");
		expect(output).toContain('templateId: "ACCESSIBILITY_CLIENT_SETTINGS";');
		expect(output).toContain("accessibilitySettings: unknown;");
		expect(output).toContain("export interface XyzSettings {");

		// Alphabetical order:
		const aIdx = output.indexOf("AccessibilitySettings");
		const xIdx = output.indexOf("XyzSettings");
		expect(aIdx).toBeLessThan(xIdx);
	});
});
```

(The `import type { Group } from "./group.ts"` import was already added in Task 8.)

- [ ] **Step 2: Run tests, verify fail**

Run: `bun test src/emit.test.ts`
Expected: FAIL — `emitMiscFile` not defined.

- [ ] **Step 3: Implement in `src/emit.ts`** (append)

```ts
export function emitMiscFile(singletons: Group[]): string {
	const sorted = [...singletons].sort((a, b) =>
		groupName(a.discriminator).localeCompare(groupName(b.discriminator)),
	);

	const lines: string[] = [];
	for (const g of sorted) {
		const entry = g.entries[0]!;
		const name = groupName(g.discriminator);
		lines.push(`export interface ${name} {`);
		lines.push(`\ttemplateId: "${entry.templateId}";`);
		lines.push(`\tdata: {`);
		lines.push(`\t\ttemplateId: "${entry.templateId}";`);
		lines.push(`\t\t${g.discriminator}: unknown;`);
		lines.push(`\t};`);
		lines.push(`}`);
		lines.push(``);
	}
	return lines.join("\n");
}
```

- [ ] **Step 4: Run tests, verify pass**

Run: `bun test src/emit.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/emit.ts src/emit.test.ts
git commit -m "feat(emit): emitMiscFile for singleton discriminators"
```

---

## Task 10: Implement `emitIndexFile` barrel (TDD)

**Files:**
- Modify: `src/emit.ts`, `src/emit.test.ts`

- [ ] **Step 1: Add failing test**

Append to `src/emit.test.ts`:

```ts
import { emitIndexFile, kebabCase } from "./emit.ts";

describe("kebabCase", () => {
	test("converts camelCase to kebab-case", () => {
		expect(kebabCase("typeEffective")).toBe("type-effective");
		expect(kebabCase("pokemonSettings")).toBe("pokemon-settings");
		expect(kebabCase("iapItemDisplay")).toBe("iap-item-display");
	});

	test("passes through all-lowercase strings unchanged", () => {
		expect(kebabCase("misc")).toBe("misc");
	});
});

describe("emitIndexFile", () => {
	test("re-exports groups (kebab-case filenames) + misc, defines MasterfileEntry union + MasterfileTemplateID", () => {
		const multiEntryGroupNames = ["typeEffective", "pokemonSettings"];
		const output = emitIndexFile(multiEntryGroupNames);

		// Exports are sorted:
		expect(output).toContain(`export type * from "./groups/pokemon-settings.ts";`);
		expect(output).toContain(`export type * from "./groups/type-effective.ts";`);
		expect(output).toContain(`export type * from "./groups/misc.ts";`);
		const pokeIdx = output.indexOf("pokemon-settings");
		const typeIdx = output.indexOf("type-effective");
		expect(pokeIdx).toBeLessThan(typeIdx);

		// Imports for the global union:
		expect(output).toContain(
			`import type { PokemonSettingsMasterfileEntry } from "./groups/pokemon-settings.ts";`,
		);
		expect(output).toContain(
			`import type { TypeEffectiveMasterfileEntry } from "./groups/type-effective.ts";`,
		);

		// Global union and TemplateID alias:
		expect(output).toContain("export type MasterfileEntry =");
		expect(output).toContain("| PokemonSettingsMasterfileEntry");
		expect(output).toContain("| TypeEffectiveMasterfileEntry");
		expect(output).toContain(
			`export type MasterfileTemplateID = MasterfileEntry["templateId"];`,
		);
	});
});
```

- [ ] **Step 2: Run test, verify fail**

Run: `bun test src/emit.test.ts`
Expected: FAIL — `emitIndexFile` not defined.

- [ ] **Step 3: Implement in `src/emit.ts`** (append)

Add helper + function:

```ts
export function kebabCase(camelCase: string): string {
	return camelCase.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
}

export function emitIndexFile(multiEntryDiscriminators: string[]): string {
	const sorted = [...multiEntryDiscriminators].sort();
	const lines: string[] = [];

	for (const disc of sorted) {
		lines.push(`export type * from "./groups/${kebabCase(disc)}.ts";`);
	}
	lines.push(`export type * from "./groups/misc.ts";`);
	lines.push(``);

	for (const disc of sorted) {
		const name = groupName(disc);
		lines.push(
			`import type { ${name}MasterfileEntry } from "./groups/${kebabCase(disc)}.ts";`,
		);
	}
	lines.push(``);
	lines.push(`export type MasterfileEntry =`);
	sorted.forEach((disc, i) => {
		const name = groupName(disc);
		const suffix = i === sorted.length - 1 ? ";" : "";
		lines.push(`\t| ${name}MasterfileEntry${suffix}`);
	});
	lines.push(``);
	lines.push(
		`export type MasterfileTemplateID = MasterfileEntry["templateId"];`,
	);
	lines.push(``);

	return lines.join("\n");
}
```

- [ ] **Step 4: Run test, verify pass**

Run: `bun test src/emit.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/emit.ts src/emit.test.ts
git commit -m "feat(emit): emitIndexFile barrel with global MasterfileEntry union"
```

---

## Task 11: Implement filesystem writer (TDD)

**Files:**
- Create: `src/write.ts`, `src/write.test.ts`

- [ ] **Step 1: Write failing test**

`src/write.test.ts`:

```ts
import { describe, expect, test } from "bun:test";
import { readdirSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { writeOutput } from "./write.ts";

function mkTempDir(): string {
	const dir = join(tmpdir(), `masterfile-gen-${Date.now()}-${Math.random()}`);
	return dir;
}

describe("writeOutput", () => {
	test("writes files relative to outDir, creates nested dirs", () => {
		const outDir = mkTempDir();
		writeOutput(
			new Map([
				["groups/foo.ts", "export type Foo = 1;\n"],
				["index.ts", "export * from './groups/foo.ts';\n"],
			]),
			outDir,
		);
		expect(readFileSync(join(outDir, "groups/foo.ts"), "utf8")).toContain(
			"Foo",
		);
		expect(readFileSync(join(outDir, "index.ts"), "utf8")).toContain("foo");
		rmSync(outDir, { recursive: true, force: true });
	});

	test("nukes existing contents of outDir before writing", () => {
		const outDir = mkTempDir();
		// Pre-populate with a stale file
		writeOutput(new Map([["stale.ts", "stale"]]), outDir);
		expect(readdirSync(outDir)).toContain("stale.ts");

		// Write a fresh set — stale should be gone
		writeOutput(new Map([["fresh.ts", "fresh"]]), outDir);
		const after = readdirSync(outDir);
		expect(after).toContain("fresh.ts");
		expect(after).not.toContain("stale.ts");

		rmSync(outDir, { recursive: true, force: true });
	});
});
```

- [ ] **Step 2: Run test, verify fail**

Run: `bun test src/write.test.ts`
Expected: FAIL — `writeOutput` not defined.

- [ ] **Step 3: Implement `src/write.ts`**

```ts
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

export function writeOutput(
	files: Map<string, string>,
	outDir: string,
): void {
	rmSync(outDir, { recursive: true, force: true });
	mkdirSync(outDir, { recursive: true });
	for (const [relPath, content] of files) {
		const full = join(outDir, relPath);
		mkdirSync(dirname(full), { recursive: true });
		writeFileSync(full, content, "utf8");
	}
}
```

- [ ] **Step 4: Run test, verify pass**

Run: `bun test src/write.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/write.ts src/write.test.ts
git commit -m "feat(write): nuke-and-write output helper"
```

---

## Task 12: Wire up main `src/generate.ts` entry point

**Files:**
- Create: `src/generate.ts`

- [ ] **Step 1: Implement `src/generate.ts`**

```ts
import { join } from "node:path";
import { emitGroupFile, emitIndexFile, emitMiscFile, kebabCase } from "./emit.ts";
import type { Entry, Group } from "./group.ts";
import { groupEntries } from "./group.ts";
import { writeOutput } from "./write.ts";

const GAME_MASTER_URL =
	"https://raw.githubusercontent.com/alexelgt/game_masters/refs/heads/master/GAME_MASTER.json";

const OUT_DIR = join(
	import.meta.dir,
	"..",
	"packages",
	"typescript-v2",
	"src",
);

async function fetchMasterfile(): Promise<Entry[]> {
	const resp = await fetch(GAME_MASTER_URL);
	if (!resp.ok) {
		throw new Error(`fetch failed: ${resp.status} ${resp.statusText}`);
	}
	return (await resp.json()) as Entry[];
}

function planFiles(groups: Map<string, Group>): Map<string, string> {
	const files = new Map<string, string>();
	const multiEntry: Group[] = [];
	const singletons: Group[] = [];

	for (const g of groups.values()) {
		if (g.entries.length === 1) singletons.push(g);
		else multiEntry.push(g);
	}

	// Sort groups alphabetically by discriminator for deterministic iteration.
	multiEntry.sort((a, b) => a.discriminator.localeCompare(b.discriminator));

	for (const g of multiEntry) {
		files.set(`groups/${kebabCase(g.discriminator)}.ts`, emitGroupFile(g));
	}
	files.set("groups/misc.ts", emitMiscFile(singletons));
	files.set(
		"index.ts",
		emitIndexFile(multiEntry.map((g) => g.discriminator)),
	);

	return files;
}

async function main(): Promise<void> {
	console.log(`Fetching ${GAME_MASTER_URL}...`);
	const entries = await fetchMasterfile();
	console.log(`Fetched ${entries.length} entries.`);

	const groups = groupEntries(entries);
	console.log(`Grouped into ${groups.size} discriminators.`);

	const files = planFiles(groups);
	writeOutput(files, OUT_DIR);
	console.log(`Wrote ${files.size} files to ${OUT_DIR}`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
```

- [ ] **Step 2: Run generator against live data**

Run: `bun run generate`
Expected output (counts will match the current upstream):
```
Fetching https://raw.githubusercontent.com/alexelgt/game_masters/...
Fetched ~18050 entries.
Grouped into ~195 discriminators.
Wrote ~62 files to /Users/rin/GitHub/pogo-masterfile-types/packages/ts-v2/src
```

- [ ] **Step 3: Spot-check generated output**

Run: `ls packages/ts-v2/src/groups/ | head -10 && head -30 packages/ts-v2/src/groups/type-effective.ts`
Expected: kebab-case filenames; `TypeEffective<T extends string>` interface at top.

- [ ] **Step 4: Typecheck the generated output**

Run: `bun run typecheck`
Expected: no errors.

- [ ] **Step 5: Idempotency check**

Run:
```bash
bun run generate
shasum -a 256 packages/ts-v2/src/index.ts > /tmp/hash-1
bun run generate
shasum -a 256 packages/ts-v2/src/index.ts > /tmp/hash-2
diff /tmp/hash-1 /tmp/hash-2
```
Expected: identical hashes (empty diff).

- [ ] **Step 6: Commit the generator + the generated output**

```bash
git add src/generate.ts packages/ts-v2/src/
git commit -m "feat: generate masterfile types from upstream GAME_MASTER.json"
```

---

## Task 13: Full regression pass

**Files:** (verification-only, no new code)

- [ ] **Step 1: Run the full test suite**

Run: `bun test`
Expected: all tests pass.

- [ ] **Step 2: Run Biome format check on source (not generated output)**

Run: `bunx biome check src/`
Expected: clean. (If the generated output has formatting issues, that's fine — Biome should ignore `packages/ts-v2/src/` via gitignore or a scoped include. If Biome flags the generator source, fix it.)

- [ ] **Step 3: Sanity-check a known group**

Run: `grep "PokemonType" packages/ts-v2/src/groups/type-effective.ts | head -5`
Expected: see `PokemonTypeBug`, `PokemonTypeDark`, ... — wait, that would require the `PokemonType` naming strategy (option B from the brainstorming). Under option A (chosen), the group is named `TypeEffective`, so:

Run: `grep "TypeEffective" packages/ts-v2/src/groups/type-effective.ts | head -5`
Expected: see `TypeEffectiveBug`, `TypeEffectiveDark`, etc.

- [ ] **Step 4: Confirm a known global count**

Run: `grep -c "^export type " packages/ts-v2/src/index.ts`
Expected: small number (just `MasterfileEntry` and `MasterfileTemplateID`).

Run: `grep -rc "^export type " packages/ts-v2/src/groups/ | awk -F: '{s+=$2} END {print s}'`
Expected: roughly 18,050 (one exported type alias per templateId in multi-entry groups, plus the per-group `MasterfileEntry` unions and `TemplateID` aliases — the exact total is deterministic once the generator runs).

- [ ] **Step 5: If all green, no commit needed** (this task is verification only).

---

## Success criteria checklist (from spec)

- [ ] `bun run generate` produces a deterministic `packages/ts-v2/src/` tree.
- [ ] Re-running without upstream changes produces a byte-identical tree.
- [ ] Every templateId in the fetched masterfile resolves to exactly one exported type reachable from `index.ts`.
- [ ] `tsc --noEmit` passes on the generated output.
