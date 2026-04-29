# Promoted Union Aliases Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Auto-detect multi-entry groups whose templateIds share a common prefix, emit a named alias from the owning group's `types.ts`, and rewrite inline literal unions in consumer groups to reference (or `Exclude<>`) the alias.

**Architecture:** A new pure module `src/promoted-unions.ts` builds a registry of eligible groups from the parsed masterfile and exposes a `tryPromote(...)` lookup. `inferredToType` in `src/builder.ts` gains an optional context parameter; when provided and a string-literal node matches a registered group, the node is rewritten to a type reference or an `Exclude<...>` expression and the cross-group import is recorded. `emitGroupTypes` threads the context, prepends discovered imports, and appends the alias declaration when the current group is itself a promotion source. `emitEntriesFlat` separately gains a `${GroupName}TemplateID` alias to bring flat groups in line with split groups.

**Tech Stack:** TypeScript, Bun (test runner via `bun:test`), TypeScript Compiler API for AST emission, Biome for formatting/linting.

---

## File Structure

**Create:**
- `src/promoted-unions.ts` — `PromotionRegistryEntry`, `PromotionRegistry`, `PromotionContext`, `PromotionResult`, `buildPromotionRegistry`, `tryPromote`.
- `src/promoted-unions.test.ts` — unit tests for both functions.

**Modify:**
- `src/constants.ts` — add `PROMOTION_EXCLUDE_DELTA_RATIO`.
- `src/builder.ts` — `inferredToType` gains optional `ctx?: PromotionContext` parameter; string-literal case consults `tryPromote` and records imports.
- `src/emit.ts` — `emitGroupTypes` accepts `registry: PromotionRegistry`, threads context, prepends cross-group imports, appends alias declaration when current group is a source. `emitEntriesFlat` appends a `${GroupName}TemplateID` indexed-access alias.
- `src/generate.ts` — calls `buildPromotionRegistry` and forwards the registry into `emitGroupTypes` calls.
- `src/emit.test.ts` — new tests exercising the promotion paths and the new flat-group `TemplateID` alias.

---

## Task 1: Add the tunable constant

**Files:**
- Modify: `src/constants.ts`

- [ ] **Step 1: Append the constant**

Open `src/constants.ts` and append at the end of the file (after the `GAME_MASTER_URL` line):

```ts
// Promotion threshold: when an inline literal union is a subset of a registered
// group's templateIds, it gets rewritten as `Exclude<Alias, ...missing>` only if
// the missing fraction is at most this ratio. Above the ratio, the union stays
// inline (an Exclude with most of the members listed reads worse than the inline).
export const PROMOTION_EXCLUDE_DELTA_RATIO = 0.25;
```

- [ ] **Step 2: Verify the file still type-checks**

Run: `bun run typecheck`
Expected: exit code 0, no errors.

- [ ] **Step 3: Commit**

```bash
git add src/constants.ts
git commit -m "feat(constants): add PROMOTION_EXCLUDE_DELTA_RATIO"
```

---

## Task 2: `buildPromotionRegistry` — eligibility and naming

**Files:**
- Create: `src/promoted-unions.ts`
- Create: `src/promoted-unions.test.ts`

- [ ] **Step 1: Write the failing test for eligibility + naming**

Create `src/promoted-unions.test.ts`:

```ts
import { describe, expect, test } from "bun:test";
import type { Group } from "./group.ts";
import { buildPromotionRegistry } from "./promoted-unions.ts";

function group(disc: string, ids: string[]): Group {
	return {
		discriminator: disc,
		entries: ids.map((id) => ({ templateId: id, data: { templateId: id, [disc]: {} } })),
	};
}

function makeGroups(...gs: Group[]): Map<string, Group> {
	return new Map(gs.map((g) => [g.discriminator, g]));
}

describe("buildPromotionRegistry — eligibility", () => {
	test("registers a group with >= 2 entries and a non-empty shared prefix", () => {
		const groups = makeGroups(group("typeEffective", ["POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK"]));
		const registry = buildPromotionRegistry(groups);
		expect(registry).toHaveLength(1);
		expect(registry[0]!.aliasName).toBe("PokemonType");
		expect(registry[0]!.members).toEqual(["POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK"]);
	});

	test("skips a single-entry group (sharedPrefix returns empty for size < 2)", () => {
		const groups = makeGroups(group("singleton", ["JUST_ONE"]));
		expect(buildPromotionRegistry(groups)).toHaveLength(0);
	});

	test("skips a group whose templateIds have no underscore-aligned shared prefix", () => {
		const groups = makeGroups(group("pokemonSettings", ["V0001_POKEMON_BULBASAUR", "V0002_POKEMON_IVYSAUR"]));
		expect(buildPromotionRegistry(groups)).toHaveLength(0);
	});
});

describe("buildPromotionRegistry — naming rule", () => {
	test("strips trailing underscores and PascalCases the prefix", () => {
		const groups = makeGroups(
			group("typeEffective", ["POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK"]),
			group("weatherAffinities", ["WEATHER_AFFINITY_CLEAR", "WEATHER_AFFINITY_RAIN"]),
			group("combatType", ["COMBAT_POKEMON_TYPE_BUG", "COMBAT_POKEMON_TYPE_DARK"]),
		);
		const byDisc = new Map(buildPromotionRegistry(groups).map((e) => [e.group.discriminator, e]));
		expect(byDisc.get("typeEffective")!.aliasName).toBe("PokemonType");
		expect(byDisc.get("weatherAffinities")!.aliasName).toBe("WeatherAffinity");
		expect(byDisc.get("combatType")!.aliasName).toBe("CombatPokemonType");
	});

	test("members are sorted alphabetically", () => {
		const groups = makeGroups(group("typeEffective", ["POKEMON_TYPE_WATER", "POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK"]));
		expect(buildPromotionRegistry(groups)[0]!.members).toEqual(["POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK", "POKEMON_TYPE_WATER"]);
	});

	test("registry entries are sorted by aliasName for determinism", () => {
		const groups = makeGroups(
			group("weatherAffinities", ["WEATHER_AFFINITY_CLEAR", "WEATHER_AFFINITY_RAIN"]),
			group("typeEffective", ["POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK"]),
			group("combatType", ["COMBAT_POKEMON_TYPE_BUG", "COMBAT_POKEMON_TYPE_DARK"]),
		);
		const names = buildPromotionRegistry(groups).map((e) => e.aliasName);
		expect(names).toEqual(["CombatPokemonType", "PokemonType", "WeatherAffinity"]);
	});
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `bun test src/promoted-unions.test.ts`
Expected: FAIL with `Cannot find module './promoted-unions.ts'` (the module doesn't exist yet).

- [ ] **Step 3: Create the module with the minimal implementation**

Create `src/promoted-unions.ts`:

```ts
import type { Group } from "./group.ts";
import { pascalCase, sharedPrefix } from "./naming.ts";

export interface PromotionRegistryEntry {
	group: Group;
	aliasName: string;
	members: string[];
	memberSet: ReadonlySet<string>;
}

export type PromotionRegistry = readonly PromotionRegistryEntry[];

export function buildPromotionRegistry(groups: Map<string, Group>): PromotionRegistry {
	const entries: PromotionRegistryEntry[] = [];
	for (const group of groups.values()) {
		if (group.entries.length < 2) continue;
		const ids = group.entries.map((e) => e.templateId);
		const prefix = sharedPrefix(ids);
		if (prefix === "") continue;
		const aliasName = pascalCase(prefix.replace(/_+$/, ""));
		const members = [...ids].sort((a, b) => a.localeCompare(b));
		entries.push({ group, aliasName, members, memberSet: new Set(members) });
	}
	entries.sort((a, b) => a.aliasName.localeCompare(b.aliasName));
	return entries;
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `bun test src/promoted-unions.test.ts`
Expected: PASS — all six test cases green.

- [ ] **Step 5: Commit**

```bash
git add src/promoted-unions.ts src/promoted-unions.test.ts
git commit -m "feat(promoted-unions): build registry from prefix-shaped groups"
```

---

## Task 3: `buildPromotionRegistry` — collision resolution

**Files:**
- Modify: `src/promoted-unions.ts`
- Modify: `src/promoted-unions.test.ts`

- [ ] **Step 1: Write the failing test for alias-vs-interface collisions**

Append to `src/promoted-unions.test.ts`:

```ts
describe("buildPromotionRegistry — collision resolution", () => {
	test("appends 'Id' when alias would collide with an existing group's interface name", () => {
		// "PokemonType" is the alias derived from prefix POKEMON_TYPE_; the colliding
		// group's discriminator is "pokemonType" → groupName "PokemonType".
		const groups = makeGroups(
			group("typeEffective", ["POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK"]),
			group("pokemonType", ["X_ONE", "X_TWO"]),
		);
		const byDisc = new Map(buildPromotionRegistry(groups).map((e) => [e.group.discriminator, e]));
		expect(byDisc.get("typeEffective")!.aliasName).toBe("PokemonTypeId");
	});

	test("appends pascalCase(disc) when two registry entries derive the same alias", () => {
		// Defensive: two groups with the same prefix → same alias; both get suffixed
		// with their pascal-cased discriminator.
		const groups = makeGroups(
			group("alphaTypes", ["X_ONE", "X_TWO"]),
			group("betaTypes", ["X_THREE", "X_FOUR"]),
		);
		const reg = buildPromotionRegistry(groups);
		const byDisc = new Map(reg.map((e) => [e.group.discriminator, e]));
		expect(byDisc.get("alphaTypes")!.aliasName).toBe("XAlphaTypes");
		expect(byDisc.get("betaTypes")!.aliasName).toBe("XBetaTypes");
	});
});
```

- [ ] **Step 2: Run tests to verify the new ones fail**

Run: `bun test src/promoted-unions.test.ts`
Expected: the two new tests FAIL (alias collisions are not yet handled).

- [ ] **Step 3: Add `resolveCollisions` to the module**

Open `src/promoted-unions.ts`. Update the imports line and rewrite `buildPromotionRegistry`:

```ts
import type { Group } from "./group.ts";
import { groupName, pascalCase, sharedPrefix } from "./naming.ts";

export interface PromotionRegistryEntry {
	group: Group;
	aliasName: string;
	members: string[];
	memberSet: ReadonlySet<string>;
}

export type PromotionRegistry = readonly PromotionRegistryEntry[];

export function buildPromotionRegistry(groups: Map<string, Group>): PromotionRegistry {
	const entries: PromotionRegistryEntry[] = [];
	for (const group of groups.values()) {
		if (group.entries.length < 2) continue;
		const ids = group.entries.map((e) => e.templateId);
		const prefix = sharedPrefix(ids);
		if (prefix === "") continue;
		const aliasName = pascalCase(prefix.replace(/_+$/, ""));
		const members = [...ids].sort((a, b) => a.localeCompare(b));
		entries.push({ group, aliasName, members, memberSet: new Set(members) });
	}
	resolveCollisions(entries, groups);
	entries.sort((a, b) => a.aliasName.localeCompare(b.aliasName));
	return entries;
}

function resolveCollisions(entries: PromotionRegistryEntry[], groups: Map<string, Group>): void {
	const interfaceNames = new Set([...groups.values()].map((g) => groupName(g.discriminator)));

	// Pass 1: alias-vs-interface — append "Id" to colliding aliases.
	for (const entry of entries) {
		if (interfaceNames.has(entry.aliasName)) {
			entry.aliasName = `${entry.aliasName}Id`;
		}
	}

	// Pass 2: alias-vs-alias — for any aliasName held by ≥ 2 entries, append
	// pascalCase(disc) to each colliding entry to disambiguate.
	const byAlias = new Map<string, PromotionRegistryEntry[]>();
	for (const entry of entries) {
		const bucket = byAlias.get(entry.aliasName);
		if (bucket) bucket.push(entry);
		else byAlias.set(entry.aliasName, [entry]);
	}
	for (const bucket of byAlias.values()) {
		if (bucket.length < 2) continue;
		for (const entry of bucket) {
			entry.aliasName = `${entry.aliasName}${pascalCase(entry.group.discriminator)}`;
		}
	}
}
```

- [ ] **Step 4: Run all promoted-unions tests**

Run: `bun test src/promoted-unions.test.ts`
Expected: all tests PASS.

- [ ] **Step 5: Commit**

```bash
git add src/promoted-unions.ts src/promoted-unions.test.ts
git commit -m "feat(promoted-unions): resolve alias name collisions"
```

---

## Task 4: `tryPromote` — exact match and short-union guard

**Files:**
- Modify: `src/promoted-unions.ts`
- Modify: `src/promoted-unions.test.ts`

- [ ] **Step 1: Write the failing test**

Append to `src/promoted-unions.test.ts`:

```ts
import { buildPromotionRegistry as build, tryPromote } from "./promoted-unions.ts";

describe("tryPromote — exact match", () => {
	const groups = makeGroups(group("typeEffective", ["POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK", "POKEMON_TYPE_FIRE"]));
	const registry = build(groups);

	test("returns a 'ref' result when inline equals members", () => {
		const inline = new Set(["POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK", "POKEMON_TYPE_FIRE"]);
		const result = tryPromote(inline, registry, null);
		expect(result).toEqual({
			kind: "ref",
			aliasName: "PokemonType",
			sourceGroup: registry[0]!.group,
		});
	});

	test("returns null for a single-element inline union", () => {
		expect(tryPromote(new Set(["POKEMON_TYPE_BUG"]), registry, null)).toBeNull();
	});

	test("returns null for an empty inline union", () => {
		expect(tryPromote(new Set(), registry, null)).toBeNull();
	});

	test("returns null when inline contains a value not in any registered set", () => {
		const inline = new Set(["POKEMON_TYPE_BUG", "POKEMON_TYPE_NOT_REAL"]);
		expect(tryPromote(inline, registry, null)).toBeNull();
	});

	test("does not promote when currentGroup is the source group (self-reference guard)", () => {
		const inline = new Set(["POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK", "POKEMON_TYPE_FIRE"]);
		expect(tryPromote(inline, registry, registry[0]!.group)).toBeNull();
	});
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `bun test src/promoted-unions.test.ts`
Expected: FAIL with `tryPromote is not defined` (or similar).

- [ ] **Step 3: Implement `tryPromote` (exact match only for now)**

Append to `src/promoted-unions.ts`:

```ts
export type PromotionResult =
	| { kind: "ref"; aliasName: string; sourceGroup: Group }
	| { kind: "exclude"; aliasName: string; missing: string[]; sourceGroup: Group };

export function tryPromote(inline: ReadonlySet<string>, registry: PromotionRegistry, currentGroup: Group | null): PromotionResult | null {
	if (inline.size <= 1) return null;
	for (const entry of registry) {
		if (currentGroup !== null && entry.group === currentGroup) continue;
		if (!isSubsetOrEqual(inline, entry.memberSet)) continue;
		if (inline.size === entry.memberSet.size) {
			return { kind: "ref", aliasName: entry.aliasName, sourceGroup: entry.group };
		}
	}
	return null;
}

function isSubsetOrEqual(a: ReadonlySet<string>, b: ReadonlySet<string>): boolean {
	for (const value of a) {
		if (!b.has(value)) return false;
	}
	return true;
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `bun test src/promoted-unions.test.ts`
Expected: PASS — all exact-match cases green.

- [ ] **Step 5: Commit**

```bash
git add src/promoted-unions.ts src/promoted-unions.test.ts
git commit -m "feat(promoted-unions): exact-match promotion in tryPromote"
```

---

## Task 5: `tryPromote` — Exclude path with delta-ratio gate

**Files:**
- Modify: `src/promoted-unions.ts`
- Modify: `src/promoted-unions.test.ts`

- [ ] **Step 1: Write failing tests for the Exclude path**

Append to `src/promoted-unions.test.ts`:

```ts
describe("tryPromote — Exclude path", () => {
	// Build an 8-member group so the delta math is unambiguous: 25% of 8 = 2 missing max.
	const groups = makeGroups(
		group("k8", [
			"K_AAA",
			"K_BBB",
			"K_CCC",
			"K_DDD",
			"K_EEE",
			"K_FFF",
			"K_GGG",
			"K_HHH",
		]),
	);
	const registry = build(groups);

	test("returns 'exclude' when missing fraction is at the boundary (2 of 8 missing)", () => {
		const inline = new Set(["K_AAA", "K_BBB", "K_CCC", "K_DDD", "K_EEE", "K_FFF"]);
		const result = tryPromote(inline, registry, null);
		expect(result).toEqual({
			kind: "exclude",
			aliasName: "K",
			missing: ["K_GGG", "K_HHH"],
			sourceGroup: registry[0]!.group,
		});
	});

	test("returns 'exclude' when only one member is missing", () => {
		const inline = new Set(["K_AAA", "K_BBB", "K_CCC", "K_DDD", "K_EEE", "K_FFF", "K_GGG"]);
		const result = tryPromote(inline, registry, null);
		expect(result).toMatchObject({ kind: "exclude", missing: ["K_HHH"] });
	});

	test("returns null when missing fraction is just over the ratio (3 of 8 missing = 0.375)", () => {
		const inline = new Set(["K_AAA", "K_BBB", "K_CCC", "K_DDD", "K_EEE"]);
		expect(tryPromote(inline, registry, null)).toBeNull();
	});

	test("missing list is sorted alphabetically", () => {
		const inline = new Set(["K_AAA", "K_BBB", "K_CCC", "K_DDD", "K_EEE", "K_FFF"]);
		const result = tryPromote(inline, registry, null);
		// HHH > GGG; the missing list must be lexicographically sorted regardless
		// of insertion order in the source.
		expect((result as { missing: string[] }).missing).toEqual(["K_GGG", "K_HHH"]);
	});
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `bun test src/promoted-unions.test.ts`
Expected: the four new tests FAIL (Exclude path returns null today).

- [ ] **Step 3: Extend `tryPromote` with the Exclude path**

Open `src/promoted-unions.ts`. Replace the existing imports and `tryPromote` with:

```ts
import { PROMOTION_EXCLUDE_DELTA_RATIO } from "./constants.ts";
import type { Group } from "./group.ts";
import { groupName, pascalCase, sharedPrefix } from "./naming.ts";
```

(The first line `import { PROMOTION_EXCLUDE_DELTA_RATIO } ...` is new — keep the others.)

Replace the body of `tryPromote`:

```ts
export function tryPromote(inline: ReadonlySet<string>, registry: PromotionRegistry, currentGroup: Group | null): PromotionResult | null {
	if (inline.size <= 1) return null;
	for (const entry of registry) {
		if (currentGroup !== null && entry.group === currentGroup) continue;
		if (!isSubsetOrEqual(inline, entry.memberSet)) continue;
		if (inline.size === entry.memberSet.size) {
			return { kind: "ref", aliasName: entry.aliasName, sourceGroup: entry.group };
		}
		const missing = entry.members.filter((m) => !inline.has(m));
		if (missing.length === 0) continue;
		if (missing.length / entry.memberSet.size > PROMOTION_EXCLUDE_DELTA_RATIO) continue;
		return { kind: "exclude", aliasName: entry.aliasName, missing, sourceGroup: entry.group };
	}
	return null;
}
```

(`entry.members` is already sorted alphabetically by `buildPromotionRegistry`, so `missing` inherits that order.)

- [ ] **Step 4: Run tests to verify they pass**

Run: `bun test src/promoted-unions.test.ts`
Expected: PASS — all exact and Exclude cases green.

- [ ] **Step 5: Commit**

```bash
git add src/promoted-unions.ts src/promoted-unions.test.ts
git commit -m "feat(promoted-unions): Exclude<> promotion within delta ratio"
```

---

## Task 6: `tryPromote` — multi-match resolution

**Files:**
- Modify: `src/promoted-unions.test.ts`

(Implementation already supports this via the for-loop's "first match wins" plus alphabetical sort of the registry; this task adds tests asserting the exact behavior so future regressions are caught.)

- [ ] **Step 1: Write tests for multi-match resolution**

Append to `src/promoted-unions.test.ts`:

```ts
describe("tryPromote — multi-match resolution", () => {
	// Two groups whose member sets overlap. Inline = {X_A, X_B} matches both.
	// Smallest containing group wins; alphabetical aliasName tiebreak.
	// Both groups derive aliasName "X" from prefix "X_"; alias-vs-alias collision
	// resolution (Task 3) suffixes each with pascalCase(disc), giving "XAlpha" and
	// "XAaSuper".
	const groups = makeGroups(
		group("alpha", ["X_A", "X_B"]),
		group("aaSuper", ["X_A", "X_B", "X_C", "X_D"]),
	);
	const registry = build(groups);

	test("smallest containing group wins on exact match", () => {
		const inline = new Set(["X_A", "X_B"]);
		const result = tryPromote(inline, registry, null);
		expect(result).toMatchObject({ kind: "ref", aliasName: "XAlpha" });
		expect((result as { sourceGroup: Group }).sourceGroup.discriminator).toBe("alpha");
	});

	test("falls back to the larger group when the smaller is not a containing set", () => {
		const inline = new Set(["X_A", "X_B", "X_C", "X_D"]);
		const result = tryPromote(inline, registry, null);
		expect(result).toMatchObject({ kind: "ref", aliasName: "XAaSuper" });
		expect((result as { sourceGroup: Group }).sourceGroup.discriminator).toBe("aaSuper");
	});
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `bun test src/promoted-unions.test.ts`
Expected: FAIL — current `tryPromote` returns the first match in registry order (which is `XAaSuper` because `XAaSuper < XAlpha` alphabetically), not the smallest-by-size.

- [ ] **Step 3: Iterate `tryPromote` to prefer smallest-then-alphabetical**

The current `tryPromote` returns on the first matching registry entry. Since `buildPromotionRegistry` sorts entries by `aliasName`, that's not "smallest first." Update `tryPromote` to collect all candidates and pick the smallest:

Replace `tryPromote` body in `src/promoted-unions.ts`:

```ts
export function tryPromote(inline: ReadonlySet<string>, registry: PromotionRegistry, currentGroup: Group | null): PromotionResult | null {
	if (inline.size <= 1) return null;

	const candidates = registry.filter((entry) => {
		if (currentGroup !== null && entry.group === currentGroup) return false;
		return isSubsetOrEqual(inline, entry.memberSet);
	});
	if (candidates.length === 0) return null;

	candidates.sort((a, b) => a.memberSet.size - b.memberSet.size || a.aliasName.localeCompare(b.aliasName));
	const best = candidates[0]!;

	if (inline.size === best.memberSet.size) {
		return { kind: "ref", aliasName: best.aliasName, sourceGroup: best.group };
	}
	const missing = best.members.filter((m) => !inline.has(m));
	if (missing.length === 0) return null;
	if (missing.length / best.memberSet.size > PROMOTION_EXCLUDE_DELTA_RATIO) return null;
	return { kind: "exclude", aliasName: best.aliasName, missing, sourceGroup: best.group };
}
```

- [ ] **Step 4: Run all tests in this file**

Run: `bun test src/promoted-unions.test.ts`
Expected: PASS — multi-match cases plus all earlier tests still green.

- [ ] **Step 5: Commit**

```bash
git add src/promoted-unions.ts src/promoted-unions.test.ts
git commit -m "feat(promoted-unions): smallest-group-first multi-match resolution"
```

---

## Task 7: Extend `inferredToType` with optional promotion context

**Files:**
- Modify: `src/builder.ts`
- Modify: `src/promoted-unions.ts`

- [ ] **Step 1: Add `PromotionContext` to the promoted-unions module**

Open `src/promoted-unions.ts` and append at the end:

```ts
export interface PromotionContext {
	registry: PromotionRegistry;
	currentGroup: Group | null;
	imports: Map<string, Set<string>>;
}

export function recordImport(ctx: PromotionContext, sourceGroup: Group, aliasName: string): void {
	if (ctx.currentGroup !== null && sourceGroup === ctx.currentGroup) return;
	const disc = sourceGroup.discriminator;
	let names = ctx.imports.get(disc);
	if (!names) {
		names = new Set();
		ctx.imports.set(disc, names);
	}
	names.add(aliasName);
}
```

- [ ] **Step 2: Write a failing test in builder for ctx-driven promotion**

Append a new `describe` block at the end of `src/promoted-unions.test.ts`:

```ts
import { inferredToType } from "./builder.ts";
import type { PromotionContext } from "./promoted-unions.ts";
import ts from "typescript";

function printNode(node: ts.TypeNode): string {
	const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
	const file = ts.createSourceFile("t.ts", "", ts.ScriptTarget.Latest, false);
	return printer.printNode(ts.EmitHint.Unspecified, node, file);
}

describe("inferredToType — promotion via ctx", () => {
	const groups = makeGroups(group("typeEffective", ["POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK", "POKEMON_TYPE_FIRE"]));
	const registry = build(groups);

	test("rewrites an exact-match string union to a type reference", () => {
		const ctx: PromotionContext = { registry, currentGroup: null, imports: new Map() };
		const node = inferredToType(
			{ kind: "string", literals: ["POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK", "POKEMON_TYPE_FIRE"] },
			ctx,
		);
		expect(printNode(node)).toBe("PokemonType");
		expect(ctx.imports.get("typeEffective")).toEqual(new Set(["PokemonType"]));
	});

	test("rewrites a near-exact union to an Exclude<> expression", () => {
		// 8-entry registry: 6 inline = 2 missing = 25% (at the default boundary).
		const fooGroups = makeGroups(group("foo", ["FOO_A", "FOO_B", "FOO_C", "FOO_D", "FOO_E", "FOO_F", "FOO_G", "FOO_H"]));
		const fooRegistry = build(fooGroups);
		const ctx: PromotionContext = { registry: fooRegistry, currentGroup: null, imports: new Map() };
		const node = inferredToType({ kind: "string", literals: ["FOO_A", "FOO_B", "FOO_C", "FOO_D", "FOO_E", "FOO_F"] }, ctx);
		expect(printNode(node)).toBe(`Exclude<Foo, "FOO_G" | "FOO_H">`);
		expect(ctx.imports.get("foo")).toEqual(new Set(["Foo"]));
	});

	test("leaves the union inline when missing fraction exceeds the delta ratio", () => {
		const ctx: PromotionContext = { registry, currentGroup: null, imports: new Map() };
		const node = inferredToType({ kind: "string", literals: ["POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK"] }, ctx);
		// 1 of 3 missing = 33%; default ratio 0.25 → no promotion.
		expect(printNode(node)).toContain(`"POKEMON_TYPE_BUG"`);
		expect(printNode(node)).toContain(`"POKEMON_TYPE_DARK"`);
		expect(ctx.imports.size).toBe(0);
	});

	test("leaves the node unchanged when no ctx is supplied", () => {
		const node = inferredToType({ kind: "string", literals: ["POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK", "POKEMON_TYPE_FIRE"] });
		// No ctx → no promotion, regardless of registry.
		expect(printNode(node)).toContain(`"POKEMON_TYPE_BUG"`);
		expect(printNode(node)).not.toBe("PokemonType");
	});

	test("does not promote when currentGroup is the source group", () => {
		const ctx: PromotionContext = { registry, currentGroup: registry[0]!.group, imports: new Map() };
		const node = inferredToType(
			{ kind: "string", literals: ["POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK", "POKEMON_TYPE_FIRE"] },
			ctx,
		);
		expect(printNode(node)).not.toBe("PokemonType");
		expect(ctx.imports.size).toBe(0);
	});
});
```

- [ ] **Step 3: Run tests to verify they fail**

Run: `bun test src/promoted-unions.test.ts`
Expected: FAIL — `inferredToType` doesn't accept a `ctx` parameter yet, so the call signatures error or the assertions don't hold.

- [ ] **Step 4: Extend `inferredToType` to accept and use `ctx`**

Open `src/builder.ts`. Update the imports near the top to add the promoted-unions module:

```ts
import type { InferredType } from "./infer.ts";
import { type PromotionContext, recordImport, tryPromote } from "./promoted-unions.ts";
```

Then update the `inferredToType` signature and the `string` case. Replace the existing function:

```ts
export function inferredToType(type: InferredType, ctx?: PromotionContext): ts.TypeNode {
	switch (type.kind) {
		case "null":
			return T.null();
		case "boolean":
			return type.literals.length === 0 ? T.boolean() : T.union(...type.literals.map((l) => T.literal(l)));
		case "number":
			return type.literals.length === 0 ? T.number() : T.union(...type.literals.map((l) => T.literal(l)));
		case "string": {
			if (type.literals.length === 0) return T.string();
			if (ctx) {
				const promoted = tryPromote(new Set(type.literals), ctx.registry, ctx.currentGroup);
				if (promoted) {
					recordImport(ctx, promoted.sourceGroup, promoted.aliasName);
					if (promoted.kind === "ref") return T.ref(promoted.aliasName);
					return T.ref("Exclude", [T.ref(promoted.aliasName), T.union(...promoted.missing.map((m) => T.literal(m)))]);
				}
			}
			return T.union(...type.literals.map((l) => T.literal(l)));
		}
		case "object":
			if (type.properties.length === 0) return T.object();
			return T.objectLiteral(type.properties.map((p) => ({ name: p.name, type: inferredToType(p.type, ctx), optional: p.optional })));
		case "tuple":
			return T.tuple(...type.items.map((t) => inferredToType(t, ctx)));
		case "array":
			return T.ref("Array", [inferredToType(type.element, ctx)]);
		case "union":
			if (type.variants.length === 0) return T.never();
			if (type.variants.length === 1) return inferredToType(type.variants[0]!, ctx);
			return T.union(...flattenUnion(type.variants.map((v) => inferredToType(v, ctx))));
		case "templateIdReference":
			return T.ref(TEMPLATE_GENERIC);
		case "templateIdSlice":
			return T.conditional(
				T.ref(TEMPLATE_GENERIC),
				T.templateLiteral(type.prefix, [{ type: T.infer("Rest"), suffix: type.suffix }]),
				T.ref("Rest"),
				T.string(),
			);
	}
}
```

- [ ] **Step 5: Run tests to verify they pass**

Run: `bun test src/promoted-unions.test.ts`
Expected: PASS — all four ctx-driven cases green.

- [ ] **Step 6: Run the full test suite to ensure nothing else regressed**

Run: `bun test`
Expected: all existing tests still green (the `ctx?` parameter is optional, so callers without it behave identically to before).

- [ ] **Step 7: Commit**

```bash
git add src/builder.ts src/promoted-unions.ts src/promoted-unions.test.ts
git commit -m "feat(builder): inferredToType promotes string unions via ctx"
```

---

## Task 8: `emitGroupTypes` — accept registry and emit alias for source group

**Files:**
- Modify: `src/emit.ts`
- Modify: `src/emit.test.ts`

- [ ] **Step 1: Write the failing test**

Open `src/emit.test.ts`. Append a new describe block at the end of the file:

```ts
import { buildPromotionRegistry } from "./promoted-unions.ts";

describe("emitGroupTypes — promotion alias declaration", () => {
	test("appends the promoted alias when the current group is itself a source", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const registry = buildPromotionRegistry(groups);
		const typeEffective = groups.get("typeEffective")!;
		const output = emitGroupTypes(typeEffective, registry);
		// MOCK_MASTERFILE has typeEffective with templateIds POKEMON_TYPE_BUG / POKEMON_TYPE_DARK.
		expect(output).toContain("export type PokemonType =");
		expect(output).toContain(`"POKEMON_TYPE_BUG"`);
		expect(output).toContain(`"POKEMON_TYPE_DARK"`);
	});

	test("does not emit an alias for a group that does not qualify", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const registry = buildPromotionRegistry(groups);
		const pokemonSettings = groups.get("pokemonSettings")!;
		const output = emitGroupTypes(pokemonSettings, registry);
		// pokemonSettings has no shared underscore-aligned prefix → no alias.
		expect(output).not.toContain("export type Pokemon =");
	});

	test("backwards compatible: omitting registry still works", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const typeEffective = groups.get("typeEffective")!;
		const output = emitGroupTypes(typeEffective);
		expect(output).toContain("export interface TypeEffective<");
		expect(output).not.toContain("export type PokemonType =");
	});
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `bun test src/emit.test.ts`
Expected: the first test FAILS (no `PokemonType` in output); the second and third may pass already.

- [ ] **Step 3: Update `emitGroupTypes` to accept the registry and emit the alias**

Open `src/emit.ts`. Add the import near the other imports at the top:

```ts
import { buildPromotionRegistry, type PromotionContext, type PromotionRegistry } from "./promoted-unions.ts";
```

Replace `emitGroupTypes` with:

```ts
export function emitGroupTypes(group: Group, registry: PromotionRegistry = []): string {
	const gName = groupName(group.discriminator);
	const invariants = detectInvariants(group);
	const xdataType = stripInvariantsFromWidened(widenType(inferGroupPayloadType(group)), invariants);
	const xdataName = `${gName}Data`;
	const entryCount = group.entries.length;
	const entryWord = entryCount === 1 ? ENTRY_LOWER : ENTRIES_LOWER;

	const ctx: PromotionContext = { registry, currentGroup: group, imports: new Map() };

	// Compute body AST nodes first; this populates ctx.imports as a side effect.
	const dataPropType: ts.TypeNode =
		invariants.size > 0 ? T.intersection(T.ref("TData"), inferredToType(invariantsToInferredType(invariants), ctx)) : T.ref("TData");

	const xdataProperties = xdataType.kind === "object" ? xdataType.properties : [];
	const xdataMembers = xdataProperties.map((p) => N.propSignature(p.name, inferredToType(p.type, ctx), p.optional));

	const file = new AstFileBuilder()
		.header(`Generated from Pokémon GO masterfile — group "${group.discriminator}", ${entryCount} ${entryWord} (structural types).`)
		.importNamed("../_utils", [WIDEN], true);

	// Cross-group imports come next (Task 9 wires the consumer end of this).
	const sortedImports = [...ctx.imports.entries()]
		.filter(([disc]) => disc !== group.discriminator)
		.sort(([a], [b]) => a.localeCompare(b));
	for (const [disc, names] of sortedImports) {
		file.importNamed(`../${kebabCase(disc)}/${TYPES_LOWER}`, [...names].sort(), true);
	}
	file.blank();

	file.exportInterface(
		gName,
		[
			N.propSignature("templateId", T.ref(TEMPLATE_GENERIC)),
			N.propSignature(
				"data",
				T.objectLiteral([
					{ name: "templateId", type: T.ref(TEMPLATE_GENERIC) },
					{ name: group.discriminator, type: dataPropType },
				]),
			),
		],
		[
			{ name: TEMPLATE_GENERIC, constraint: T.string(), default: T.string() },
			{ name: "TData", constraint: T.ref(xdataName), default: T.ref(xdataName) },
		],
	);

	file.exportTypeAlias(`${gName}${TYPE}`, T.ref(WIDEN, [T.ref(gName)]));
	file.blank();

	file.exportInterface(xdataName, xdataMembers);

	const ownEntry = registry.find((e) => e.group === group);
	if (ownEntry) {
		file.blank();
		file.exportTypeAlias(ownEntry.aliasName, T.union(...ownEntry.members.map((m) => T.literal(m))));
	}

	return file.render();
}
```

(Note: the `kebabCase` import was already present from the existing emit.ts code; no new imports beyond `promoted-unions.ts` are needed.)

- [ ] **Step 4: Run tests to verify they pass**

Run: `bun test src/emit.test.ts`
Expected: PASS for the new tests AND all existing `emitGroupTypes` tests.

- [ ] **Step 5: Run the full test suite**

Run: `bun test`
Expected: all green.

- [ ] **Step 6: Commit**

```bash
git add src/emit.ts src/emit.test.ts
git commit -m "feat(emit): emitGroupTypes accepts registry and emits source alias"
```

---

## Task 9: `emitGroupTypes` — cross-group imports for consumers

**Files:**
- Modify: `src/emit.test.ts`

(Implementation is already in place from Task 8. This task adds tests that exercise the consumer side — a group whose data references *another* group's templateIds should get an `import type` line.)

- [ ] **Step 1: Write a failing test for the consumer side**

Append to the new describe block in `src/emit.test.ts`:

```ts
	test("emits an import for a consumer group that references another group's templateIds (exact match)", () => {
		// Synthesize a fixture: groupA owns POKEMON_TYPE_BUG / POKEMON_TYPE_DARK,
		// groupB has data containing exactly that union of strings.
		const groupA: Group = {
			discriminator: "typeEffective",
			entries: [
				{ templateId: "POKEMON_TYPE_BUG", data: { templateId: "POKEMON_TYPE_BUG", typeEffective: { attackScalar: [1] } } },
				{ templateId: "POKEMON_TYPE_DARK", data: { templateId: "POKEMON_TYPE_DARK", typeEffective: { attackScalar: [1] } } },
			],
		};
		const groupB: Group = {
			discriminator: "moveSettings",
			entries: [
				{ templateId: "MOVE_X", data: { templateId: "MOVE_X", moveSettings: { pokemonType: "POKEMON_TYPE_BUG" } } },
				{ templateId: "MOVE_Y", data: { templateId: "MOVE_Y", moveSettings: { pokemonType: "POKEMON_TYPE_DARK" } } },
			],
		};
		const groups = new Map<string, Group>([["typeEffective", groupA], ["moveSettings", groupB]]);
		const registry = buildPromotionRegistry(groups);
		const output = emitGroupTypes(groupB, registry);
		expect(output).toContain(`import type { PokemonType } from "../type-effective/types";`);
		expect(output).toContain("pokemonType: PokemonType;");
	});

	test("emits an Exclude<> reference and import when consumer is a near-exact subset", () => {
		// groupA: 4 templateIds with prefix KIND_ (alias "Kind"); groupB references
		// 3 of 4 (1 missing = 25% — at the default boundary).
		const groupA: Group = {
			discriminator: "kindThing",
			entries: ["KIND_AAA", "KIND_BBB", "KIND_CCC", "KIND_DDD"].map((id) => ({
				templateId: id,
				data: { templateId: id, kindThing: { stamp: 1 } },
			})),
		};
		const groupB: Group = {
			discriminator: "consumer",
			entries: [
				{ templateId: "C_ONE", data: { templateId: "C_ONE", consumer: { kind: "KIND_AAA" } } },
				{ templateId: "C_TWO", data: { templateId: "C_TWO", consumer: { kind: "KIND_BBB" } } },
				{ templateId: "C_THR", data: { templateId: "C_THR", consumer: { kind: "KIND_CCC" } } },
			],
		};
		const groups = new Map<string, Group>([["kindThing", groupA], ["consumer", groupB]]);
		const registry = buildPromotionRegistry(groups);
		const output = emitGroupTypes(groupB, registry);
		expect(output).toContain(`import type { Kind } from "../kind-thing/types";`);
		expect(output).toContain(`Exclude<Kind, "KIND_DDD">`);
	});

	test("does not emit a self-import when the source group references its own promoted alias", () => {
		// Edge case guard: even if some property of the source group's data widens to
		// the group's own templateId set, the generator must not produce a self-import.
		const groups = groupEntries(MOCK_MASTERFILE);
		const registry = buildPromotionRegistry(groups);
		const typeEffective = groups.get("typeEffective")!;
		const output = emitGroupTypes(typeEffective, registry);
		expect(output).not.toContain(`from "../type-effective/types"`);
	});
```

- [ ] **Step 2: Run tests**

Run: `bun test src/emit.test.ts`
Expected: PASS — the implementation from Task 8 already supports these. If any test fails, the failure points at a real issue: investigate before moving on.

- [ ] **Step 3: Commit**

```bash
git add src/emit.test.ts
git commit -m "test(emit): cover consumer-side imports and Exclude rendering"
```

---

## Task 10: `emitEntriesFlat` — `${GroupName}TemplateID` alias

**Files:**
- Modify: `src/emit.ts`
- Modify: `src/emit.test.ts`

- [ ] **Step 1: Write the failing test**

Append to `src/emit.test.ts` (inside the existing `describe("emitVariantsFlat", ...)` block, near the end):

```ts
	test("emits a TemplateID alias derived from the union", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const output = emitEntriesFlat(group);
		expect(output).toContain(`export type TypeEffectiveTemplateID = TypeEffectiveMasterfileEntry["templateId"];`);
	});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `bun test src/emit.test.ts`
Expected: FAIL — flat groups don't yet emit a `TemplateID` alias.

- [ ] **Step 3: Append the alias to `emitEntriesFlat`**

Open `src/emit.ts`. Find `emitEntriesFlat` (around line 211). Replace the final two statements (the union export and the `return file.render()`) with:

```ts
	const unionName = `${gName}${BARREL_TYPE}${ENTRY}`;
	file.exportTypeAlias(unionName, T.union(...typeNames.map((n) => T.ref(n))));
	file.blank();
	file.exportTypeAlias(`${gName}${TEMPLATE_GENERIC}`, T.indexedAccess(T.ref(unionName), T.literal("templateId")));

	return file.render();
}
```

(The change introduces a local `unionName` so the indexed-access reference uses the same identifier; the union export itself is unchanged.)

- [ ] **Step 4: Run tests to verify they pass**

Run: `bun test src/emit.test.ts`
Expected: PASS — including the new test.

- [ ] **Step 5: Run the full suite**

Run: `bun test`
Expected: all green. (Existing tests assert specific lines in `emitEntriesFlat` output; verify none of them break — if one does, it's because they relied on the union being the last statement; update the assertion to use `toContain` over `toEndWith` if needed.)

- [ ] **Step 6: Commit**

```bash
git add src/emit.ts src/emit.test.ts
git commit -m "feat(emit): emitEntriesFlat exports a TemplateID indexed-access alias"
```

---

## Task 11: Wire the registry into `generate.ts`

**Files:**
- Modify: `src/generate.ts`

- [ ] **Step 1: Update the planFiles signature and call site**

Open `src/generate.ts`. Modify the imports near the top (line 13) to add the promoted-unions module:

```ts
import { buildPromotionRegistry } from "./promoted-unions.ts";
```

Then replace the line `files.set(`${dir}/${TYPES_LOWER}.ts`, emitGroupTypes(g));` (around line 48) with the registry-aware call. Specifically:

In the `planFiles` function body, just after `multiEntry.sort(...)`, add:

```ts
	const promotionRegistry = buildPromotionRegistry(groups);
```

Then change the line:

```ts
		files.set(`${dir}/${TYPES_LOWER}.ts`, emitGroupTypes(g));
```

to:

```ts
		files.set(`${dir}/${TYPES_LOWER}.ts`, emitGroupTypes(g, promotionRegistry));
```

- [ ] **Step 2: Type-check**

Run: `bun run typecheck`
Expected: no errors.

- [ ] **Step 3: Run the full test suite**

Run: `bun test`
Expected: all green.

- [ ] **Step 4: Commit**

```bash
git add src/generate.ts
git commit -m "feat(generate): pass promotion registry into emitGroupTypes"
```

---

## Task 12: End-to-end verification — regenerate and type-check

**Files:**
- Generated output under `packages/typescript/src/**` (regenerated)

- [ ] **Step 1: Regenerate the TypeScript output**

Run: `bun run generate`
Expected: command completes without errors; emits regenerated files under `packages/typescript/src/`.

- [ ] **Step 2: Spot-check a sentinel file (`type-effective`)**

Run: `head -50 packages/typescript/src/type-effective/types.ts`
Expected output should now include the `PokemonType` alias near the bottom of the file:

```ts
export type PokemonType =
	| "POKEMON_TYPE_BUG"
	| "POKEMON_TYPE_DARK"
	| ...
	| "POKEMON_TYPE_WATER";
```

If the alias is absent, investigate before continuing. Likely culprits: registry not threaded into `emitGroupTypes`, or `type-effective` is failing eligibility (check `bun run` against the actual masterfile).

- [ ] **Step 3: Spot-check a consumer file (`move-settings`)**

Run: `head -30 packages/typescript/src/move-settings/types.ts`
Expected: an `import type { PokemonType } from "../type-effective/types";` line and `pokemonType: PokemonType;` inside `MoveSettingsData`.

- [ ] **Step 4: Spot-check the Exclude path (`pokemon-settings`)**

Run: `grep -n "Exclude<PokemonType" packages/typescript/src/pokemon-settings/types.ts`
Expected: at least one match for the `tempEvoOverrides[].typeOverride1` field. The exact members in the `Exclude` argument depend on the live masterfile, but should be 1–4 missing types.

- [ ] **Step 5: Type-check the regenerated package**

Run: `bun run typecheck`
Expected: exit code 0. If the regenerated files fail type-checking, investigate cross-group import paths and any unhandled collisions.

- [ ] **Step 6: Run the full test suite once more**

Run: `bun test`
Expected: all green.

- [ ] **Step 7: Commit the regenerated package**

```bash
git add packages/typescript/src
git commit -m "chore(generated): regenerate types with promoted union aliases"
```

- [ ] **Step 8: Report back to the user**

Per the project's CLAUDE.md, generated files under `packages/typescript/src/**` are not parsed during normal operation. Post a short message to the user summarizing what was regenerated and asking them to verify the output type-checks cleanly in their downstream consumers.

---

## Verification checklist

After Task 12 completes, the following should all be true:

- [ ] `bun test` passes.
- [ ] `bun run typecheck` passes against `packages/typescript/src`.
- [ ] `packages/typescript/src/type-effective/types.ts` exports `PokemonType` and `TypeEffectiveTemplateID`.
- [ ] At least one consumer group (`move-settings`, `combat-move`, `weather-affinities`) imports `PokemonType` instead of inlining the 18-member union.
- [ ] At least one consumer field (e.g., `pokemon-settings`'s `tempEvoOverrides`) uses `Exclude<PokemonType, ...>` for partial unions.
- [ ] No file imports from itself (`grep -rn 'from "../<own-disc>/types"' packages/typescript/src/<own-disc>/types.ts` returns nothing).
- [ ] Other prefix-shaped groups (`combat-type`, `weather-affinities`) emit their own promoted aliases (`CombatPokemonType`, `WeatherAffinity`).
