# Variant File Splitting Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reorganize the generated TypeScript output so every group lives in its own directory, and groups with > 100 entries have their per-variant aliases split across multiple files using a cascade of (H1) single-field discriminator → (H2) field-presence fingerprint clustering → no-split fallback.

**Architecture:** Add a new `src/split.ts` module containing the cascade selector (`chooseSplit`) plus its helpers (`tryH1`, `tryH2`, `valueFileName`, `fingerprintFileName`). Refactor `src/emit.ts` to expose four narrower emitters (`emitGroupIndex`, `emitVariantsFlat`, `emitVariantFile`, `emitVariantsBarrel`) plus a top-level variants barrel emitter. Rewrite `planFiles` in `src/generate.ts` to produce a directory tree (`<group>/index.ts`, `<group>/variants.ts` or `<group>/variants/<bucket>.ts`, plus `misc/index.ts`, top-level `index.ts`, top-level `variants.ts`). Add `packages/ts/package.json` with subpath `exports`.

**Tech Stack:** TypeScript (Bun runtime), `bun:test`, Biome formatter. Source + tests colocated in `src/`. Design spec at [`docs/superpowers/specs/2026-04-26-variant-file-splitting-design.md`](../specs/2026-04-26-variant-file-splitting-design.md).

**Note on project conventions:**
- Tabs for indentation (Biome enforced), double-quoted strings.
- Tests co-located with source (`foo.ts` + `foo.test.ts`).
- `bun test` runs all tests. `bun run generate` regenerates the output packages. `bun run format` runs Biome.
- `verbatimModuleSyntax: true` — every type-only import must use `import type` and every type re-export must use `export type * from`.
- **Do NOT read** `packages/ts/index.ts`, `packages/rust/lib.rs`, or `packages/go/main.go` — they're large generated files per `CLAUDE.md`. After this refactor, the largest TS files will move; Task 15 updates `CLAUDE.md`.

---

## File Structure

**Created:**
- `src/split.ts` — cascade selector + helpers (`chooseSplit`, `tryH1`, `tryH2`, `valueFileName`, `fingerprintFileName`)
- `src/split.test.ts` — unit tests for all cascade logic
- `packages/ts/package.json` — subpath `exports` so consumers can import sub-paths

**Modified:**
- `src/emit.ts` — split `emitGroupFile` into four narrower emitters; update `emitIndexFile` for directory paths; add `emitTopLevelVariants`. Delete `emitGroupFile` once it's unused.
- `src/emit.test.ts` — replace `emitGroupFile` tests with tests for `emitGroupIndex` + `emitVariantsFlat` + `emitVariantFile` + `emitVariantsBarrel` + `emitTopLevelVariants`. Update `emitIndexFile` tests for the no-`.ts` directory paths.
- `src/generate.ts` — rewrite `planFiles` to produce a directory-tree map.
- `CLAUDE.md` — update the "do not read" list to reflect the new directory structure.

**Unchanged:**
- `src/group.ts`, `src/naming.ts`, `src/infer.ts`, `src/invariants.ts`, `src/fixtures.ts`, `src/write.ts` — no changes (`writeOutput` already handles nested paths via `mkdir(dirname(full), { recursive: true })`).

**Output layout (after this refactor):**

```
packages/ts/
  package.json                                  ← new (Task 13)
  src/
    index.ts                                    ← top-level barrel + MasterfileEntry (Task 11)
    variants.ts                                 ← top-level variants barrel (Task 10)
    _utils.ts                                   ← unchanged
    misc/
      index.ts                                  ← all singletons (Task 12 moves it here)
    combat-type/                                ← ≤ 100 entries → no split
      index.ts
      variants.ts
    pokemon-settings/                           ← > 100 entries, H1 succeeded
      index.ts
      variants/
        index.ts                                ← barrel
        water.ts
        fire.ts
        ...
    pokemon-extended-settings/                  ← > 100 entries, H2 succeeded
      index.ts
      variants/
        index.ts
        form.ts
        base.ts
        ...
    move-sequence-settings/                     ← > 100 entries, both H1 and H2 failed
      index.ts
      variants.ts                               ← no-split fallback (flat file)
```

---

## Task 1: Create `src/split.ts` shell + `tryH1` (single-field discriminator)

**Files:**
- Create: `src/split.ts`
- Create: `src/split.test.ts`

- [ ] **Step 1: Write the failing tests**

Create `src/split.test.ts`:

```typescript
import { describe, expect, test } from "bun:test";
import { tryH1 } from "./split.ts";
import type { Group } from "./group.ts";

function mkGroup(payloads: Array<Record<string, unknown>>, discriminator = "x"): Group {
	return {
		discriminator,
		entries: payloads.map((p, i) => ({
			templateId: `T_${i}`,
			data: { templateId: `T_${i}`, [discriminator]: p },
		})),
	};
}

describe("tryH1", () => {
	test("picks a string-valued field with cardinality in range and balanced distribution", () => {
		// 6 entries: type=A,A,B,B,C,C → cardinality 3, dominance 33%, all-strings.
		const group = mkGroup([
			{ type: "A", noise: 1 },
			{ type: "A", noise: 2 },
			{ type: "B", noise: 3 },
			{ type: "B", noise: 4 },
			{ type: "C", noise: 5 },
			{ type: "C", noise: 6 },
		]);

		const result = tryH1(group);
		expect(result?.field).toBe("type");
		expect(result?.buckets).toHaveLength(3);
	});

	test("accepts cardinality 2", () => {
		const group = mkGroup([{ track: "FREE" }, { track: "PREMIUM" }, { track: "FREE" }, { track: "PREMIUM" }]);
		expect(tryH1(group)?.field).toBe("track");
	});

	test("rejects numeric-only field", () => {
		const group = mkGroup([{ n: 1 }, { n: 2 }, { n: 3 }, { n: 4 }, { n: 1 }, { n: 2 }]);
		expect(tryH1(group)).toBeNull();
	});

	test("rejects boolean-only field", () => {
		const group = mkGroup([{ b: true }, { b: false }, { b: true }, { b: false }]);
		expect(tryH1(group)).toBeNull();
	});

	test("rejects high-dominance field (>80%)", () => {
		// 9/10 entries share the same value.
		const payloads = Array.from({ length: 9 }, () => ({ x: "A" })).concat([{ x: "B" }]);
		const group = mkGroup(payloads);
		expect(tryH1(group)).toBeNull();
	});

	test("rejects high-cardinality field (>30)", () => {
		// 31 distinct values.
		const payloads = Array.from({ length: 31 }, (_, i) => ({ x: `V${i}` }));
		const group = mkGroup(payloads);
		expect(tryH1(group)).toBeNull();
	});

	test("rejects field not present in 100% of variants", () => {
		const group = mkGroup([{ x: "A" }, { x: "B" }, { y: 1 }, { x: "A" }]);
		expect(tryH1(group)).toBeNull();
	});

	test("picks lowest-dominance field when multiple qualify", () => {
		// `balanced` is 50/50; `lopsided` is 75/25 — both qualify, balanced wins.
		const group = mkGroup([
			{ balanced: "A", lopsided: "X" },
			{ balanced: "B", lopsided: "X" },
			{ balanced: "A", lopsided: "X" },
			{ balanced: "B", lopsided: "Y" },
		]);
		expect(tryH1(group)?.field).toBe("balanced");
	});

	test("returns Entry references in each bucket", () => {
		const group = mkGroup([{ type: "A" }, { type: "A" }, { type: "B" }]);
		const result = tryH1(group);
		expect(result).not.toBeNull();
		const aBucket = result!.buckets.find((b) => b.value === "A");
		const bBucket = result!.buckets.find((b) => b.value === "B");
		expect(aBucket?.entries).toHaveLength(2);
		expect(bBucket?.entries).toHaveLength(1);
		expect(aBucket?.entries[0]?.templateId).toBe("T_0");
		expect(bBucket?.entries[0]?.templateId).toBe("T_2");
	});
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `bun test src/split.test.ts`
Expected: FAIL — module `./split.ts` not found.

- [ ] **Step 3: Implement `tryH1` in `src/split.ts`**

Create `src/split.ts`:

```typescript
import type { Entry, Group } from "./group.ts";

const H1_MIN_CARDINALITY = 2;
const H1_MAX_CARDINALITY = 30;
const H1_MAX_DOMINANCE = 0.8;

export interface H1Bucket {
	value: string;
	fileName: string;
	entries: Entry[];
}

export interface H1Result {
	field: string;
	buckets: H1Bucket[];
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}

interface FieldStats {
	field: string;
	cardinality: number;
	dominance: number;
	values: Map<string, Entry[]>;
}

function analyzeField(group: Group, field: string): FieldStats | null {
	const values = new Map<string, Entry[]>();
	for (const entry of group.entries) {
		const payload = entry.data[group.discriminator];
		if (!isPlainObject(payload)) return null;
		const v = payload[field];
		if (v === undefined) return null;
		if (typeof v !== "string") return null;
		const bucket = values.get(v);
		if (bucket) bucket.push(entry);
		else values.set(v, [entry]);
	}
	const sizes = [...values.values()].map((b) => b.length);
	const largest = sizes.reduce((a, b) => Math.max(a, b), 0);
	return {
		field,
		cardinality: values.size,
		dominance: largest / group.entries.length,
		values,
	};
}

export function tryH1(group: Group): H1Result | null {
	const allFields = new Set<string>();
	for (const entry of group.entries) {
		const payload = entry.data[group.discriminator];
		if (isPlainObject(payload)) for (const k of Object.keys(payload)) allFields.add(k);
	}

	const candidates: FieldStats[] = [];
	for (const field of allFields) {
		const stats = analyzeField(group, field);
		if (!stats) continue;
		if (stats.cardinality < H1_MIN_CARDINALITY) continue;
		if (stats.cardinality > H1_MAX_CARDINALITY) continue;
		if (stats.dominance > H1_MAX_DOMINANCE) continue;
		candidates.push(stats);
	}
	if (candidates.length === 0) return null;

	candidates.sort((a, b) => {
		if (a.dominance !== b.dominance) return a.dominance - b.dominance;
		if (a.cardinality !== b.cardinality) return a.cardinality - b.cardinality;
		return a.field.localeCompare(b.field);
	});
	const winner = candidates[0]!;

	const buckets: H1Bucket[] = [];
	for (const [value, entries] of winner.values) {
		buckets.push({ value, fileName: value, entries });
	}
	buckets.sort((a, b) => a.value.localeCompare(b.value));

	return { field: winner.field, buckets };
}
```

Note: `fileName` is set to the raw value here as a placeholder. Task 2 wires in the real prefix-stripping naming.

- [ ] **Step 4: Run tests to verify they pass**

Run: `bun test src/split.test.ts`
Expected: 9 pass, 0 fail.

- [ ] **Step 5: Commit**

```bash
git add src/split.ts src/split.test.ts
git commit -m "feat: add tryH1 single-field discriminator selector"
```

---

## Task 2: Add `valueFileName` for H1 prefix-stripping

**Files:**
- Modify: `src/split.ts` — add `valueFileName`, wire into `tryH1`
- Modify: `src/split.test.ts` — add naming tests

- [ ] **Step 1: Write the failing tests**

Append to `src/split.test.ts`:

```typescript
import { valueFileName } from "./split.ts";

describe("valueFileName", () => {
	test("strips longest common underscore-bounded prefix and lowercases", () => {
		const all = ["POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK", "POKEMON_TYPE_WATER"];
		expect(valueFileName("POKEMON_TYPE_BUG", all)).toBe("bug");
		expect(valueFileName("POKEMON_TYPE_WATER", all)).toBe("water");
	});

	test("preserves multi-segment tails with kebab-case", () => {
		const all = ["BADGE_GREAT_LEAGUE", "BADGE_ULTRA_LEAGUE", "BADGE_MASTER_LEAGUE"];
		expect(valueFileName("BADGE_GREAT_LEAGUE", all)).toBe("great-league");
		expect(valueFileName("BADGE_MASTER_LEAGUE", all)).toBe("master-league");
	});

	test("strips nothing when values share no common prefix", () => {
		const all = ["FREE", "PREMIUM"];
		expect(valueFileName("FREE", all)).toBe("free");
		expect(valueFileName("PREMIUM", all)).toBe("premium");
	});

	test("strips nothing when common prefix has no trailing underscore", () => {
		// Common prefix "AB" has no underscore — strip nothing.
		const all = ["ABC", "ABD"];
		expect(valueFileName("ABC", all)).toBe("abc");
		expect(valueFileName("ABD", all)).toBe("abd");
	});

	test("falls back to lowercased original when stripping would empty the name", () => {
		// Degenerate: one value equals the prefix.
		const all = ["FOO_", "FOO_BAR"];
		expect(valueFileName("FOO_", all)).toBe("foo-");
		expect(valueFileName("FOO_BAR", all)).toBe("bar");
	});

	test("handles single-value input by stripping nothing", () => {
		expect(valueFileName("ALONE", ["ALONE"])).toBe("alone");
	});
});

describe("tryH1 file naming", () => {
	test("populates fileName by prefix-stripping the chosen value", () => {
		const group = mkGroup([
			{ type: "POKEMON_TYPE_WATER" },
			{ type: "POKEMON_TYPE_FIRE" },
			{ type: "POKEMON_TYPE_GRASS" },
			{ type: "POKEMON_TYPE_WATER" },
		]);
		const result = tryH1(group);
		expect(result).not.toBeNull();
		const water = result!.buckets.find((b) => b.value === "POKEMON_TYPE_WATER");
		expect(water?.fileName).toBe("water");
	});
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `bun test src/split.test.ts`
Expected: tests for `valueFileName` and the new `tryH1 file naming` test FAIL.

- [ ] **Step 3: Implement `valueFileName` and update `tryH1`**

Append to `src/split.ts`:

```typescript
export function valueFileName(value: string, allValues: string[]): string {
	const prefix = longestCommonUnderscorePrefix(allValues);
	const stripped = prefix.length > 0 && value.startsWith(prefix) ? value.slice(prefix.length) : value;
	const result = stripped.toLowerCase().replace(/_/g, "-");
	if (result.length === 0) return value.toLowerCase().replace(/_/g, "-");
	return result;
}

function longestCommonUnderscorePrefix(values: string[]): string {
	if (values.length < 2) return "";
	let prefix = values[0]!;
	for (const v of values) {
		while (!v.startsWith(prefix)) prefix = prefix.slice(0, -1);
		if (prefix === "") return "";
	}
	const lastUnderscore = prefix.lastIndexOf("_");
	return lastUnderscore >= 0 ? prefix.slice(0, lastUnderscore + 1) : "";
}
```

Update the `buckets.push` block inside `tryH1`:

```typescript
	const allValues = [...winner.values.keys()];
	const buckets: H1Bucket[] = [];
	for (const [value, entries] of winner.values) {
		buckets.push({ value, fileName: valueFileName(value, allValues), entries });
	}
	buckets.sort((a, b) => a.fileName.localeCompare(b.fileName));
```

(Replace the previous `buckets.push({ value, fileName: value, entries })` and the old sort.)

- [ ] **Step 4: Run tests to verify they pass**

Run: `bun test src/split.test.ts`
Expected: all tests pass (15 total: 9 from Task 1 + 6 for `valueFileName` + 1 for `tryH1` naming).

- [ ] **Step 5: Commit**

```bash
git add src/split.ts src/split.test.ts
git commit -m "feat: derive H1 file names by stripping common prefix"
```

---

## Task 3: Add `tryH2` (field-presence fingerprint clustering)

**Files:**
- Modify: `src/split.ts` — add `tryH2`
- Modify: `src/split.test.ts` — add tests

- [ ] **Step 1: Write the failing tests**

Append to `src/split.test.ts`:

```typescript
import { tryH2 } from "./split.ts";

describe("tryH2", () => {
	test("succeeds when avg cluster size >= 5, stripping universally-present fields", () => {
		// 15 entries, 3 clusters of 5 each.
		const make = (form: string | undefined, extra: number | undefined): Record<string, unknown> => {
			const o: Record<string, unknown> = { id: "x" };
			if (form !== undefined) o.form = form;
			if (extra !== undefined) o.extra = extra;
			return o;
		};
		const payloads: Array<Record<string, unknown>> = [];
		for (let i = 0; i < 5; i += 1) payloads.push(make(`f${i}`, undefined));
		for (let i = 0; i < 5; i += 1) payloads.push(make(undefined, undefined));
		for (let i = 0; i < 5; i += 1) payloads.push(make(`f${i}`, i));
		const group = mkGroup(payloads);

		const clusters = tryH2(group);
		expect(clusters).not.toBeNull();
		expect(clusters!).toHaveLength(3);

		const fingerprints = clusters!.map((c) => c.fingerprint.join("|")).sort();
		expect(fingerprints).toEqual(["", "extra|form", "form"]);
	});

	test("rejects single-cluster fixture", () => {
		// Every variant has the same shape → after stripping universal fields, fingerprint is {}.
		const group = mkGroup(Array.from({ length: 10 }, () => ({ a: 1, b: 2 })));
		expect(tryH2(group)).toBeNull();
	});

	test("rejects too-many-clusters fixture (avg cluster size < 5)", () => {
		// 10 variants, each with a unique optional field → 10 clusters of size 1 → avg 1.
		const payloads = Array.from({ length: 10 }, (_, i) => ({ id: "shared", [`uniq${i}`]: 1 }));
		const group = mkGroup(payloads);
		expect(tryH2(group)).toBeNull();
	});

	test("accepts lopsided 2-cluster fixture (96/4)", () => {
		const big = Array.from({ length: 96 }, () => ({ id: "x" }));
		const small = Array.from({ length: 4 }, () => ({ id: "x", form: "Y" }));
		const group = mkGroup([...big, ...small]);
		const clusters = tryH2(group);
		expect(clusters).not.toBeNull();
		expect(clusters!).toHaveLength(2);
	});

	test("clusters are sorted descending by entry count", () => {
		const small = Array.from({ length: 6 }, () => ({ id: "x", a: 1 }));
		const big = Array.from({ length: 12 }, () => ({ id: "x" }));
		const group = mkGroup([...small, ...big]);
		const clusters = tryH2(group)!;
		expect(clusters[0]!.entries.length).toBeGreaterThan(clusters[1]!.entries.length);
	});
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `bun test src/split.test.ts`
Expected: 5 new `tryH2` tests FAIL — function not exported.

- [ ] **Step 3: Implement `tryH2` in `src/split.ts`**

Append to `src/split.ts`:

```typescript
const H2_MIN_AVG_CLUSTER_SIZE = 5;

export interface H2Cluster {
	fingerprint: string[];
	fileName: string;
	entries: Entry[];
}

export function tryH2(group: Group): H2Cluster[] | null {
	// Pass 1: count per-field presence to find universally-present fields.
	const presenceCount = new Map<string, number>();
	for (const entry of group.entries) {
		const payload = entry.data[group.discriminator];
		if (!isPlainObject(payload)) continue;
		for (const k of Object.keys(payload)) presenceCount.set(k, (presenceCount.get(k) ?? 0) + 1);
	}
	const universal = new Set<string>();
	for (const [k, count] of presenceCount) {
		if (count === group.entries.length) universal.add(k);
	}

	// Pass 2: bucket entries by fingerprint (excluding universal fields).
	const clusters = new Map<string, { fingerprint: string[]; entries: Entry[] }>();
	for (const entry of group.entries) {
		const payload = entry.data[group.discriminator];
		const keys = isPlainObject(payload) ? Object.keys(payload) : [];
		const fingerprint = keys.filter((k) => !universal.has(k)).sort();
		const key = fingerprint.join("|");
		const bucket = clusters.get(key);
		if (bucket) bucket.entries.push(entry);
		else clusters.set(key, { fingerprint, entries: [entry] });
	}

	if (clusters.size < 2) return null;
	const minClusters = 2;
	const maxClusters = Math.max(minClusters, Math.floor(group.entries.length / H2_MIN_AVG_CLUSTER_SIZE));
	if (clusters.size > maxClusters) return null;

	const result: H2Cluster[] = [];
	for (const { fingerprint, entries } of clusters.values()) {
		result.push({ fingerprint, fileName: "", entries });
	}
	result.sort((a, b) => b.entries.length - a.entries.length);
	return result;
}
```

Note: `fileName` is left blank here. Task 4 fills it in via `fingerprintFileName`.

- [ ] **Step 4: Run tests to verify they pass**

Run: `bun test src/split.test.ts`
Expected: all tests pass.

- [ ] **Step 5: Commit**

```bash
git add src/split.ts src/split.test.ts
git commit -m "feat: add tryH2 fingerprint-clustering selector"
```

---

## Task 4: Add `fingerprintFileName` for H2 naming

**Files:**
- Modify: `src/split.ts` — add `fingerprintFileName`, wire into `tryH2`
- Modify: `src/split.test.ts` — add naming tests

- [ ] **Step 1: Write the failing tests**

Append to `src/split.test.ts`:

```typescript
import { fingerprintFileName } from "./split.ts";

describe("fingerprintFileName", () => {
	test("returns 'base' for empty fingerprint", () => {
		expect(fingerprintFileName([])).toBe("base");
	});

	test("kebab-cases a single camelCase field", () => {
		expect(fingerprintFileName(["form"])).toBe("form");
		expect(fingerprintFileName(["breadOverrides"])).toBe("bread-overrides");
		expect(fingerprintFileName(["tempEvoOverrides"])).toBe("temp-evo-overrides");
	});

	test("joins multiple fields with '+'", () => {
		expect(fingerprintFileName(["breadOverrides", "form"])).toBe("bread-overrides+form");
		expect(fingerprintFileName(["form", "tempEvoOverrides"])).toBe("form+temp-evo-overrides");
		expect(fingerprintFileName(["breadOverrides", "form", "tempEvoOverrides"])).toBe("bread-overrides+form+temp-evo-overrides");
	});
});

describe("tryH2 file naming", () => {
	test("populates fileName from each cluster's fingerprint", () => {
		const make = (form: string | undefined, extra: number | undefined): Record<string, unknown> => {
			const o: Record<string, unknown> = { id: "x" };
			if (form !== undefined) o.form = form;
			if (extra !== undefined) o.extra = extra;
			return o;
		};
		const payloads: Array<Record<string, unknown>> = [];
		for (let i = 0; i < 5; i += 1) payloads.push(make(`f${i}`, undefined));
		for (let i = 0; i < 5; i += 1) payloads.push(make(undefined, undefined));
		for (let i = 0; i < 5; i += 1) payloads.push(make(`f${i}`, i));
		const group = mkGroup(payloads);

		const clusters = tryH2(group)!;
		const names = clusters.map((c) => c.fileName).sort();
		expect(names).toEqual(["base", "extra+form", "form"]);
	});
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `bun test src/split.test.ts`
Expected: tests for `fingerprintFileName` and `tryH2 file naming` FAIL.

- [ ] **Step 3: Implement `fingerprintFileName` and update `tryH2`**

Reuse `kebabCase` from `src/emit.ts`. Add this import at the top of `src/split.ts`:

```typescript
import { kebabCase } from "./emit.ts";
```

Append to `src/split.ts`:

```typescript
export function fingerprintFileName(fingerprint: string[]): string {
	if (fingerprint.length === 0) return "base";
	return fingerprint.map(kebabCase).join("+");
}
```

Update the bucket-construction loop inside `tryH2`:

```typescript
	const result: H2Cluster[] = [];
	for (const { fingerprint, entries } of clusters.values()) {
		result.push({ fingerprint, fileName: fingerprintFileName(fingerprint), entries });
	}
	result.sort((a, b) => b.entries.length - a.entries.length);
	return result;
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `bun test src/split.test.ts`
Expected: all tests pass.

- [ ] **Step 5: Commit**

```bash
git add src/split.ts src/split.test.ts
git commit -m "feat: derive H2 file names from cluster fingerprints"
```

---

## Task 5: Add `chooseSplit` cascade

**Files:**
- Modify: `src/split.ts` — add `chooseSplit` and `SplitPlan` discriminated union
- Modify: `src/split.test.ts` — add cascade tests

- [ ] **Step 1: Write the failing tests**

Append to `src/split.test.ts`:

```typescript
import { chooseSplit } from "./split.ts";

describe("chooseSplit", () => {
	test("returns kind=none for groups at or below 100 entries", () => {
		const payloads = Array.from({ length: 100 }, (_, i) => ({ type: `T${i % 4}` }));
		const group = mkGroup(payloads);
		expect(chooseSplit(group).kind).toBe("none");
	});

	test("prefers H1 when it qualifies", () => {
		// 120 entries, type field with cardinality 4 and 30%/30%/20%/20% distribution.
		const payloads: Array<Record<string, unknown>> = [];
		for (let i = 0; i < 36; i += 1) payloads.push({ type: "POKEMON_TYPE_A", optional: i });
		for (let i = 0; i < 36; i += 1) payloads.push({ type: "POKEMON_TYPE_B" });
		for (let i = 0; i < 24; i += 1) payloads.push({ type: "POKEMON_TYPE_C", optional: i });
		for (let i = 0; i < 24; i += 1) payloads.push({ type: "POKEMON_TYPE_D" });
		const group = mkGroup(payloads);
		const plan = chooseSplit(group);
		expect(plan.kind).toBe("h1");
		if (plan.kind === "h1") {
			expect(plan.field).toBe("type");
			expect(plan.buckets).toHaveLength(4);
		}
	});

	test("falls back to H2 when H1 has no candidate", () => {
		// 120 entries, no string-valued always-present field, but two clear fingerprints.
		const payloads: Array<Record<string, unknown>> = [];
		for (let i = 0; i < 60; i += 1) payloads.push({ a: i });
		for (let i = 0; i < 60; i += 1) payloads.push({ a: i, b: i });
		const group = mkGroup(payloads);
		const plan = chooseSplit(group);
		expect(plan.kind).toBe("h2");
		if (plan.kind === "h2") {
			expect(plan.clusters).toHaveLength(2);
		}
	});

	test("falls back to none when both H1 and H2 fail", () => {
		// 120 entries, every variant uniquely shaped → too many H2 clusters.
		const payloads = Array.from({ length: 120 }, (_, i) => ({ [`uniq${i}`]: i }));
		const group = mkGroup(payloads);
		expect(chooseSplit(group).kind).toBe("none");
	});

	test("rejects H1 when chosen field's dominance disqualifies, falls to H2 or none", () => {
		// 120 entries; `type` has 90% dominance → H1 fails. No H2 split either.
		const payloads: Array<Record<string, unknown>> = [];
		for (let i = 0; i < 108; i += 1) payloads.push({ type: "MAJORITY" });
		for (let i = 0; i < 12; i += 1) payloads.push({ type: "MINORITY" });
		const group = mkGroup(payloads);
		expect(chooseSplit(group).kind).toBe("none");
	});
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `bun test src/split.test.ts`
Expected: 5 new tests FAIL — `chooseSplit` not exported.

- [ ] **Step 3: Implement `chooseSplit` in `src/split.ts`**

Append to `src/split.ts`:

```typescript
const SPLIT_THRESHOLD = 100;

export type SplitPlan =
	| { kind: "none" }
	| { kind: "h1"; field: string; buckets: H1Bucket[] }
	| { kind: "h2"; clusters: H2Cluster[] };

export function chooseSplit(group: Group): SplitPlan {
	if (group.entries.length <= SPLIT_THRESHOLD) return { kind: "none" };

	const h1 = tryH1(group);
	if (h1) return { kind: "h1", field: h1.field, buckets: h1.buckets };

	const h2 = tryH2(group);
	if (h2) return { kind: "h2", clusters: h2 };

	return { kind: "none" };
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `bun test src/split.test.ts`
Expected: all tests pass.

- [ ] **Step 5: Commit**

```bash
git add src/split.ts src/split.test.ts
git commit -m "feat: add chooseSplit cascade (H1 → H2 → none)"
```

---

## Task 6: Add `emitGroupIndex` (structural types only)

**Files:**
- Modify: `src/emit.ts` — add `emitGroupIndex`
- Modify: `src/emit.test.ts` — add tests

`emitGroupIndex` produces the contents of `<group>/index.ts`: imports, generic base interface, `XData` interface, union, `TemplateID` alias, and a re-export from `./variants`. It uses the same TData/invariants pipeline as the existing `emitGroupFile` but stops short of emitting per-variant aliases.

- [ ] **Step 1: Write the failing tests**

Append to `src/emit.test.ts`:

```typescript
import { emitGroupIndex } from "./emit.ts";

describe("emitGroupIndex", () => {
	test("emits header noting it's the group's structural types", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const output = emitGroupIndex(group);
		expect(output.startsWith(`// Generated from Pokémon GO masterfile — group "typeEffective", 2 entries (structural types).\n`)).toBe(true);
	});

	test("emits the generic base interface, XData, union, and TemplateID alias", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const output = emitGroupIndex(group);

		expect(output).toContain("export interface TypeEffective<");
		expect(output).toContain("TemplateID extends string = string,");
		expect(output).toContain("TData extends TypeEffectiveData = TypeEffectiveData,");
		expect(output).toContain("typeEffective: TData & {");
		expect(output).toContain("attackType: TemplateID;");

		expect(output).toContain("export interface TypeEffectiveData {");

		expect(output).toContain("export type TypeEffectiveMasterfileEntry =");
		expect(output).toContain("| TypeEffectiveBug");
		expect(output).toContain("| TypeEffectiveDark");

		expect(output).toContain(`export type TypeEffectiveTemplateID = TypeEffectiveMasterfileEntry["templateId"];`);
	});

	test("re-exports variants barrel from the parent index", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const output = emitGroupIndex(group);
		expect(output).toContain(`export type * from "./variants";`);
	});

	test("does NOT emit per-variant alias declarations", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const output = emitGroupIndex(group);
		expect(output).not.toContain("export type TypeEffectiveBug = TypeEffective<");
		expect(output).not.toContain("export type TypeEffectiveDark = TypeEffective<");
	});

	test("imports S from the parent _utils", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const output = emitGroupIndex(group);
		expect(output).toContain(`import type { S } from "../_utils";`);
	});
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `bun test src/emit.test.ts`
Expected: 5 new tests FAIL — `emitGroupIndex` not exported.

- [ ] **Step 3: Implement `emitGroupIndex` in `src/emit.ts`**

Refactor `emitGroupFile` to extract the structural-types portion. Inspect `src/emit.ts` and find the body of `emitGroupFile` (the function defined around [src/emit.ts:12](src/emit.ts:12)). The first portion (header through the union and TemplateID alias) becomes the body of `emitGroupIndex`; the per-variant rendering is excluded. Both functions can keep computing `aliases`, since `emitGroupIndex` references each alias name in the union output.

Add `emitGroupIndex` near the existing `emitGroupFile`:

```typescript
export function emitGroupIndex(group: Group): string {
	const gName = groupName(group.discriminator);
	const sortedIds = [...group.entries].map((e) => e.templateId).sort();
	const aliases = deriveGroupAliases(sortedIds, gName);

	const invariants = detectInvariants(group);
	const payloadType = inferGroupPayloadType(group);
	const widenedPayload = widenType(payloadType);
	const xdataType = stripInvariantsFromWidened(widenedPayload, invariants);

	const xdataName = `${gName}Data`;
	const discName = renderPropertyName(group.discriminator);
	const entryCount = group.entries.length;
	const entryWord = entryCount === 1 ? "entry" : "entries";
	const lines: string[] = [
		`// Generated from Pokémon GO masterfile — group "${group.discriminator}", ${entryCount} ${entryWord} (structural types).`,
		``,
		`import type { ${SIMPLIFY} } from "../_utils";`,
		``,
		`export type * from "./variants";`,
		``,
	];

	lines.push(`export interface ${gName}<`);
	lines.push(`\t${TEMPLATE_GENERIC} extends string = string,`);
	lines.push(`\tTData extends ${xdataName} = ${xdataName},`);
	lines.push(`> {`);
	lines.push(`\ttemplateId: ${TEMPLATE_GENERIC};`);
	lines.push(`\tdata: {`);
	lines.push(`\t\ttemplateId: ${TEMPLATE_GENERIC};`);

	if (invariants.size === 0) {
		lines.push(`\t\t${discName}: TData;`);
	} else {
		const invariantsType = invariantsToInferredType(invariants);
		const invariantsLines = renderType(invariantsType);
		if (invariantsLines.length === 1) {
			lines.push(`\t\t${discName}: TData & ${invariantsLines[0]};`);
		} else {
			lines.push(`\t\t${discName}: TData & ${invariantsLines[0]}`);
			for (const line of invariantsLines.slice(1, -1)) {
				lines.push(`\t\t${line}`);
			}
			lines.push(`\t\t${invariantsLines[invariantsLines.length - 1]};`);
		}
	}

	lines.push(`\t};`);
	lines.push(`}`);
	lines.push(``);

	lines.push(...renderXDataInterface(xdataName, xdataType));
	lines.push(``);

	lines.push(`export type ${gName}MasterfileEntry =`);
	sortedIds.forEach((id, i) => {
		const alias = aliases.get(id)!;
		const suffix = i === sortedIds.length - 1 ? ";" : "";
		lines.push(`\t| ${gName}${alias}${suffix}`);
	});
	lines.push(``);
	lines.push(`export type ${gName}TemplateID = ${gName}MasterfileEntry["templateId"];`);
	lines.push(``);

	return lines.join("\n");
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `bun test src/emit.test.ts`
Expected: all tests pass (including the existing `emitGroupFile` tests, which are unchanged at this point).

- [ ] **Step 5: Commit**

```bash
git add src/emit.ts src/emit.test.ts
git commit -m "feat: add emitGroupIndex for the structural types of a group"
```

---

## Task 7: Add `emitVariantsFlat` (all aliases for unsplit groups)

**Files:**
- Modify: `src/emit.ts` — add `emitVariantsFlat`
- Modify: `src/emit.test.ts` — add tests

`emitVariantsFlat` produces the contents of `<group>/variants.ts` for groups that don't get a per-cluster split. It contains all per-variant aliases inline, importing the base interface, `XData`, and `S` from sibling/parent files.

- [ ] **Step 1: Write the failing tests**

Append to `src/emit.test.ts`:

```typescript
import { emitVariantsFlat } from "./emit.ts";

describe("emitVariantsFlat", () => {
	test("emits header noting it's the variant aliases", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const output = emitVariantsFlat(group);
		expect(output.startsWith(`// Generated from Pokémon GO masterfile — group "typeEffective", 2 entries (variant aliases).\n`)).toBe(true);
	});

	test("imports the base interface and XData from the sibling index", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const output = emitVariantsFlat(group);
		expect(output).toContain(`import type { S } from "../_utils";`);
		expect(output).toContain(`import type { TypeEffective, TypeEffectiveData } from "./index";`);
	});

	test("emits each per-variant alias", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const output = emitVariantsFlat(group);
		expect(output).toContain("export type TypeEffectiveBug = TypeEffective<");
		expect(output).toContain(`"POKEMON_TYPE_BUG"`);
		expect(output).toContain("export type TypeEffectiveDark = TypeEffective<");
		expect(output).toContain(`"POKEMON_TYPE_DARK"`);
	});

	test("does NOT emit the base interface, XData, or union", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const output = emitVariantsFlat(group);
		expect(output).not.toContain("export interface TypeEffective<");
		expect(output).not.toContain("export interface TypeEffectiveData {");
		expect(output).not.toContain("export type TypeEffectiveMasterfileEntry =");
	});

	test("sorts aliases by templateId lexicographically", () => {
		const group: Group = {
			discriminator: "typeEffective",
			entries: [
				{ templateId: "POKEMON_TYPE_WATER", data: { templateId: "POKEMON_TYPE_WATER", typeEffective: {} } },
				{ templateId: "POKEMON_TYPE_BUG", data: { templateId: "POKEMON_TYPE_BUG", typeEffective: {} } },
			],
		};
		const output = emitVariantsFlat(group);
		const bugIdx = output.indexOf("TypeEffectiveBug");
		const waterIdx = output.indexOf("TypeEffectiveWater");
		expect(bugIdx).toBeLessThan(waterIdx);
	});
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `bun test src/emit.test.ts`
Expected: 5 new tests FAIL.

- [ ] **Step 3: Implement `emitVariantsFlat` in `src/emit.ts`**

Add this helper alongside `emitGroupFile` and `emitGroupIndex`:

```typescript
function renderAllVariantAliases(group: Group): string[] {
	const gName = groupName(group.discriminator);
	const sortedIds = [...group.entries].map((e) => e.templateId).sort();
	const aliases = deriveGroupAliases(sortedIds, gName);
	const invariants = detectInvariants(group);
	const entriesById = new Map(group.entries.map((e) => [e.templateId, e]));

	const lines: string[] = [];
	for (const id of sortedIds) {
		const entry = entriesById.get(id)!;
		const variantSuffix = aliases.get(id)!;
		lines.push(...renderVariantAlias(gName, entry, group, variantSuffix, invariants));
	}
	return lines;
}

export function emitVariantsFlat(group: Group): string {
	const gName = groupName(group.discriminator);
	const xdataName = `${gName}Data`;
	const entryCount = group.entries.length;
	const entryWord = entryCount === 1 ? "entry" : "entries";

	const lines: string[] = [
		`// Generated from Pokémon GO masterfile — group "${group.discriminator}", ${entryCount} ${entryWord} (variant aliases).`,
		``,
		`import type { ${SIMPLIFY} } from "../_utils";`,
		`import type { ${gName}, ${xdataName} } from "./index";`,
		``,
	];
	lines.push(...renderAllVariantAliases(group));
	lines.push(``);
	return lines.join("\n");
}
```

Note: the existing inline rendering inside `emitGroupFile` builds the same alias lines, so `renderAllVariantAliases` temporarily duplicates that logic. The duplication is intentional — `emitGroupFile` will be deleted entirely in Task 12, so refactoring it now would create churn. The two paths (`emitGroupFile` and `emitVariantsFlat` via `renderAllVariantAliases`) produce identical alias lines, both verified by tests.

- [ ] **Step 4: Run tests to verify they pass**

Run: `bun test src/emit.test.ts`
Expected: all tests pass — both the new `emitVariantsFlat` tests and the existing `emitGroupFile` tests (which still work because `renderAllVariantAliases` produces identical output).

- [ ] **Step 5: Commit**

```bash
git add src/emit.ts src/emit.test.ts
git commit -m "feat: add emitVariantsFlat for unsplit groups' variant aliases"
```

---

## Task 8: Add `emitVariantFile` (subset of aliases for split groups)

**Files:**
- Modify: `src/emit.ts` — add `emitVariantFile`
- Modify: `src/emit.test.ts` — add tests

`emitVariantFile` produces one file inside `<group>/variants/`. It receives a subset of the group's entries (an H1 bucket or H2 cluster) and emits only those variants' aliases, importing from `..` (the parent group's `index.ts`).

- [ ] **Step 1: Write the failing tests**

Append to `src/emit.test.ts`:

```typescript
import { emitVariantFile } from "./emit.ts";

describe("emitVariantFile", () => {
	test("emits header noting the bucket name and entry count", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const bug = group.entries.find((e) => e.templateId === "POKEMON_TYPE_BUG")!;
		const output = emitVariantFile(group, "bug", [bug]);
		expect(output.startsWith(`// Generated from Pokémon GO masterfile — group "typeEffective", split "bug", 1 entry.\n`)).toBe(true);
	});

	test("imports base + XData + S from the parent directory", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const bug = group.entries.find((e) => e.templateId === "POKEMON_TYPE_BUG")!;
		const output = emitVariantFile(group, "bug", [bug]);
		expect(output).toContain(`import type { S } from "../../_utils";`);
		expect(output).toContain(`import type { TypeEffective, TypeEffectiveData } from "..";`);
	});

	test("emits only the aliases for the supplied entries", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const bug = group.entries.find((e) => e.templateId === "POKEMON_TYPE_BUG")!;
		const output = emitVariantFile(group, "bug", [bug]);
		expect(output).toContain("export type TypeEffectiveBug = TypeEffective<");
		expect(output).not.toContain("export type TypeEffectiveDark");
	});

	test("preserves the same alias bodies as the unsplit emitter", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const bug = group.entries.find((e) => e.templateId === "POKEMON_TYPE_BUG")!;
		const split = emitVariantFile(group, "bug", [bug]);
		const flat = emitVariantsFlat(group);
		// The Bug alias declaration should be byte-identical between the two paths
		// (only the surrounding imports/header differ).
		const bugStart = split.indexOf("export type TypeEffectiveBug =");
		const bugEnd = split.indexOf(">;", bugStart) + 2;
		const splitBug = split.slice(bugStart, bugEnd);
		const flatBugStart = flat.indexOf("export type TypeEffectiveBug =");
		const flatBugEnd = flat.indexOf(">;", flatBugStart) + 2;
		const flatBug = flat.slice(flatBugStart, flatBugEnd);
		expect(splitBug).toBe(flatBug);
	});
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `bun test src/emit.test.ts`
Expected: 4 new tests FAIL.

- [ ] **Step 3: Implement `emitVariantFile` in `src/emit.ts`**

```typescript
export function emitVariantFile(group: Group, bucketName: string, entries: Entry[]): string {
	const gName = groupName(group.discriminator);
	const xdataName = `${gName}Data`;
	const sortedIds = [...group.entries].map((e) => e.templateId).sort();
	const aliases = deriveGroupAliases(sortedIds, gName);
	const invariants = detectInvariants(group);
	const entryCount = entries.length;
	const entryWord = entryCount === 1 ? "entry" : "entries";

	const lines: string[] = [
		`// Generated from Pokémon GO masterfile — group "${group.discriminator}", split "${bucketName}", ${entryCount} ${entryWord}.`,
		``,
		`import type { ${SIMPLIFY} } from "../../_utils";`,
		`import type { ${gName}, ${xdataName} } from "..";`,
		``,
	];

	const sortedSubset = [...entries].map((e) => e.templateId).sort();
	for (const id of sortedSubset) {
		const entry = entries.find((e) => e.templateId === id)!;
		const variantSuffix = aliases.get(id)!;
		lines.push(...renderVariantAlias(gName, entry, group, variantSuffix, invariants));
	}
	lines.push(``);
	return lines.join("\n");
}
```

Note: `Entry` is already imported at the top of `src/emit.ts` from `./group.ts`, so no import change is needed.

- [ ] **Step 4: Run tests to verify they pass**

Run: `bun test src/emit.test.ts`
Expected: all tests pass.

- [ ] **Step 5: Commit**

```bash
git add src/emit.ts src/emit.test.ts
git commit -m "feat: add emitVariantFile for one bucket of a split group"
```

---

## Task 9: Add `emitVariantsBarrel` (variants/index.ts re-exports)

**Files:**
- Modify: `src/emit.ts` — add `emitVariantsBarrel`
- Modify: `src/emit.test.ts` — add tests

`emitVariantsBarrel` produces the contents of `<group>/variants/index.ts`. It re-exports types from each variant file, sorted alphabetically by file name.

- [ ] **Step 1: Write the failing tests**

Append to `src/emit.test.ts`:

```typescript
import { emitVariantsBarrel } from "./emit.ts";

describe("emitVariantsBarrel", () => {
	test("emits a deterministic header", () => {
		const output = emitVariantsBarrel("pokemonSettings", ["water", "fire", "grass"]);
		expect(output.startsWith(`// Generated from Pokémon GO masterfile — group "pokemonSettings" variants barrel.\n`)).toBe(true);
	});

	test("re-exports each file alphabetically", () => {
		const output = emitVariantsBarrel("pokemonSettings", ["water", "fire", "grass"]);
		expect(output).toContain(`export type * from "./fire";`);
		expect(output).toContain(`export type * from "./grass";`);
		expect(output).toContain(`export type * from "./water";`);
		const fireIdx = output.indexOf("./fire");
		const grassIdx = output.indexOf("./grass");
		const waterIdx = output.indexOf("./water");
		expect(fireIdx).toBeLessThan(grassIdx);
		expect(grassIdx).toBeLessThan(waterIdx);
	});

	test("handles a single-file barrel", () => {
		const output = emitVariantsBarrel("formSettings", ["base"]);
		expect(output).toContain(`export type * from "./base";`);
	});
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `bun test src/emit.test.ts`
Expected: 3 new tests FAIL.

- [ ] **Step 3: Implement `emitVariantsBarrel` in `src/emit.ts`**

```typescript
export function emitVariantsBarrel(discriminator: string, fileNames: string[]): string {
	const sorted = [...fileNames].sort();
	const lines: string[] = [
		`// Generated from Pokémon GO masterfile — group "${discriminator}" variants barrel.`,
		``,
	];
	for (const name of sorted) {
		lines.push(`export type * from "./${name}";`);
	}
	lines.push(``);
	return lines.join("\n");
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `bun test src/emit.test.ts`
Expected: all tests pass.

- [ ] **Step 5: Commit**

```bash
git add src/emit.ts src/emit.test.ts
git commit -m "feat: add emitVariantsBarrel for split-group variant index"
```

---

## Task 10: Add `emitTopLevelVariants` (src/variants.ts barrel)

**Files:**
- Modify: `src/emit.ts` — add `emitTopLevelVariants`
- Modify: `src/emit.test.ts` — add tests

`emitTopLevelVariants` produces the contents of `src/variants.ts`. It re-exports from each multi-entry group's variants surface, picking the right path depending on whether the group was split (`/variants`) or unsplit (`/variants.ts`).

- [ ] **Step 1: Write the failing tests**

Append to `src/emit.test.ts`:

```typescript
import { emitTopLevelVariants } from "./emit.ts";

describe("emitTopLevelVariants", () => {
	test("emits a deterministic header", () => {
		const output = emitTopLevelVariants(new Map());
		expect(output.startsWith(`// Generated from Pokémon GO masterfile — top-level variants barrel.\n`)).toBe(true);
	});

	test("re-exports unsplit groups via /variants.ts and split groups via /variants", () => {
		const groupSplits = new Map<string, "split" | "flat">([
			["pokemonSettings", "split"],
			["combatType", "flat"],
			["pokemonExtendedSettings", "split"],
		]);
		const output = emitTopLevelVariants(groupSplits);

		expect(output).toContain(`export type * from "./combat-type/variants.ts";`);
		expect(output).toContain(`export type * from "./pokemon-settings/variants";`);
		expect(output).toContain(`export type * from "./pokemon-extended-settings/variants";`);

		// Sorted alphabetically by group kebab name:
		const combatIdx = output.indexOf("./combat-type/");
		const extendedIdx = output.indexOf("./pokemon-extended-settings/");
		const settingsIdx = output.indexOf("./pokemon-settings/");
		expect(combatIdx).toBeLessThan(extendedIdx);
		expect(extendedIdx).toBeLessThan(settingsIdx);
	});

	test("emits empty body when no groups are present", () => {
		const output = emitTopLevelVariants(new Map());
		// Just header and a trailing newline.
		expect(output).not.toContain("export type *");
	});
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `bun test src/emit.test.ts`
Expected: 3 new tests FAIL.

- [ ] **Step 3: Implement `emitTopLevelVariants` in `src/emit.ts`**

```typescript
export function emitTopLevelVariants(groupSplits: Map<string, "split" | "flat">): string {
	const sortedDiscs = [...groupSplits.keys()].sort();
	const lines: string[] = [
		`// Generated from Pokémon GO masterfile — top-level variants barrel.`,
		``,
	];
	for (const disc of sortedDiscs) {
		const kebab = kebabCase(disc);
		const path = groupSplits.get(disc) === "split" ? `./${kebab}/variants` : `./${kebab}/variants.ts`;
		lines.push(`export type * from "${path}";`);
	}
	lines.push(``);
	return lines.join("\n");
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `bun test src/emit.test.ts`
Expected: all tests pass.

- [ ] **Step 5: Commit**

```bash
git add src/emit.ts src/emit.test.ts
git commit -m "feat: add emitTopLevelVariants for top-level variants barrel"
```

---

## Task 11: Update `emitIndexFile` for directory paths

**Files:**
- Modify: `src/emit.ts` — change paths from `./<group>.ts` to `./<group>` and `./misc.ts` to `./misc`
- Modify: `src/emit.test.ts` — update existing assertions

After this task, the top-level `index.ts` re-exports from group directories (`./pokemon-settings`) rather than flat files (`./pokemon-settings.ts`). Path resolution lands on each group's `index.ts`.

- [ ] **Step 1: Update the failing tests**

Edit the existing `emitIndexFile` test block in `src/emit.test.ts`. Replace the `re-exports groups (kebab-case filenames) + misc, defines MasterfileEntry union + MasterfileTemplateID` test with:

```typescript
	test("re-exports groups by directory path + misc, defines MasterfileEntry union + MasterfileTemplateID", () => {
		const multiEntryGroupNames = ["typeEffective", "pokemonSettings"];
		const output = emitIndexFile(multiEntryGroupNames);

		// Directory re-exports (no .ts suffix; resolves to <group>/index.ts).
		expect(output).toContain(`export type * from "./pokemon-settings";`);
		expect(output).toContain(`export type * from "./type-effective";`);
		expect(output).toContain(`export type * from "./misc";`);
		const pokeIdx = output.indexOf("./pokemon-settings");
		const typeIdx = output.indexOf("./type-effective");
		expect(pokeIdx).toBeLessThan(typeIdx);

		// Imports for the global union resolve via the directory too.
		expect(output).toContain(`import type { PokemonSettingsMasterfileEntry } from "./pokemon-settings";`);
		expect(output).toContain(`import type { TypeEffectiveMasterfileEntry } from "./type-effective";`);

		expect(output).toContain("export type MasterfileEntry =");
		expect(output).toContain("| PokemonSettingsMasterfileEntry");
		expect(output).toContain("| TypeEffectiveMasterfileEntry");
		expect(output).toContain(`export type MasterfileTemplateID = MasterfileEntry["templateId"];`);
		expect(output).toContain("export type MasterfileEntryByTemplateID<T extends MasterfileTemplateID> =");
		expect(output).toContain(`Extract<MasterfileEntry, { templateId: T }>`);
	});
```

Replace the `imports MiscMasterfileEntry and includes it at the end of the MasterfileEntry union` test with:

```typescript
	test("imports MiscMasterfileEntry from ./misc and places it at the end of MasterfileEntry", () => {
		const output = emitIndexFile(["typeEffective", "pokemonSettings"]);
		expect(output).toContain(`import type { MiscMasterfileEntry } from "./misc";`);
		expect(output).toContain("| MiscMasterfileEntry;");

		const miscIdx = output.indexOf("| MiscMasterfileEntry;");
		const pokemonIdx = output.indexOf("| PokemonSettingsMasterfileEntry");
		const typeIdx = output.indexOf("| TypeEffectiveMasterfileEntry");
		expect(miscIdx).toBeGreaterThan(pokemonIdx);
		expect(miscIdx).toBeGreaterThan(typeIdx);
	});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `bun test src/emit.test.ts -t "emitIndexFile"`
Expected: the two updated tests FAIL because emit.ts still produces `.ts` paths.

- [ ] **Step 3: Update `emitIndexFile` in `src/emit.ts`**

Find the function near [src/emit.ts:398](src/emit.ts:398). Replace the body so paths drop the `.ts` extension:

```typescript
export function emitIndexFile(multiEntryDiscriminators: string[]): string {
	const sorted = [...multiEntryDiscriminators].sort();
	const lines: string[] = [`// Generated from Pokémon GO masterfile — index of all groups.`, ``];

	for (const disc of sorted) {
		lines.push(`export type * from "./${kebabCase(disc)}";`);
	}
	lines.push(`export type * from "./misc";`);
	lines.push(``);

	for (const disc of sorted) {
		const name = groupName(disc);
		lines.push(`import type { ${name}MasterfileEntry } from "./${kebabCase(disc)}";`);
	}
	lines.push(`import type { MiscMasterfileEntry } from "./misc";`);
	lines.push(``);
	lines.push(`export type MasterfileEntry =`);
	for (const disc of sorted) {
		const name = groupName(disc);
		lines.push(`\t| ${name}MasterfileEntry`);
	}
	lines.push(`\t| MiscMasterfileEntry;`);
	lines.push(``);
	lines.push(`export type MasterfileTemplateID = MasterfileEntry["templateId"];`);
	lines.push(``);
	lines.push(`export type MasterfileEntryByTemplateID<T extends MasterfileTemplateID> = Extract<MasterfileEntry, { templateId: T }>;`);
	lines.push(``);

	return lines.join("\n");
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `bun test src/emit.test.ts`
Expected: all tests pass.

- [ ] **Step 5: Commit**

```bash
git add src/emit.ts src/emit.test.ts
git commit -m "refactor: emit index re-exports as directory paths"
```

---

## Task 12: Rewrite `planFiles` in `src/generate.ts` and remove dead `emitGroupFile`

**Files:**
- Modify: `src/generate.ts` — rewrite `planFiles` to produce a directory-tree map; emit `misc/index.ts`, `<group>/index.ts`, `<group>/variants.ts` or `<group>/variants/<name>.ts`, plus the top-level `index.ts` and `variants.ts`.
- Modify: `src/emit.ts` — delete `emitGroupFile` (no longer called).
- Modify: `src/emit.test.ts` — delete the existing `emitGroupFile` describe block (the new emitters are tested directly).

This is the switchover task: end-to-end behavior changes here.

- [ ] **Step 1: Rewrite `planFiles` in `src/generate.ts`**

Replace the existing `planFiles` function (and update imports) with:

```typescript
import { join } from "node:path";
import {
	emitGroupIndex,
	emitIndexFile,
	emitMiscFile,
	emitTopLevelVariants,
	emitVariantFile,
	emitVariantsBarrel,
	emitVariantsFlat,
	kebabCase,
} from "./emit.ts";
import type { Entry, Group } from "./group.ts";
import { groupEntries } from "./group.ts";
import { chooseSplit } from "./split.ts";
import { writeOutput } from "./write.ts";

const GAME_MASTER_URL = "https://raw.githubusercontent.com/alexelgt/game_masters/refs/heads/master/GAME_MASTER.json";

const OUT_DIR = join(import.meta.dir, "..", "packages", "typescript", "src");

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

	multiEntry.sort((a, b) => a.discriminator.localeCompare(b.discriminator));

	const groupSplits = new Map<string, "split" | "flat">();

	for (const g of multiEntry) {
		const dir = kebabCase(g.discriminator);
		const plan = chooseSplit(g);
		files.set(`${dir}/index.ts`, emitGroupIndex(g));

		if (plan.kind === "none") {
			files.set(`${dir}/variants.ts`, emitVariantsFlat(g));
			groupSplits.set(g.discriminator, "flat");
		} else {
			const fileNames: string[] = [];
			const buckets: Array<{ fileName: string; entries: Entry[] }> =
				plan.kind === "h1"
					? plan.buckets.map((b) => ({ fileName: b.fileName, entries: b.entries }))
					: plan.clusters.map((c) => ({ fileName: c.fileName, entries: c.entries }));
			for (const b of buckets) {
				files.set(`${dir}/variants/${b.fileName}.ts`, emitVariantFile(g, b.fileName, b.entries));
				fileNames.push(b.fileName);
			}
			files.set(`${dir}/variants/index.ts`, emitVariantsBarrel(g.discriminator, fileNames));
			groupSplits.set(g.discriminator, "split");
		}
	}

	files.set("misc/index.ts", emitMiscFile(singletons));
	files.set("index.ts", emitIndexFile(multiEntry.map((g) => g.discriminator)));
	files.set("variants.ts", emitTopLevelVariants(groupSplits));
	files.set("_utils.ts", "export type S<T> = {[KeyType in keyof T]: T[KeyType]} & {};");

	return files;
}

async function main(): Promise<void> {
	console.log(`Fetching ${GAME_MASTER_URL}...`);
	const entries = await fetchMasterfile();
	console.log(`Fetched ${entries.length} entries.`);

	const groups = groupEntries(entries);
	console.log(`Grouped into ${groups.size} discriminators.`);

	const files = planFiles(groups);
	await writeOutput(files, OUT_DIR);
	console.log(`Wrote ${files.size} files to ${OUT_DIR}`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
```

- [ ] **Step 2: Delete dead `emitGroupFile` from `src/emit.ts`**

Find the existing `emitGroupFile` function (around [src/emit.ts:12](src/emit.ts:12)) and delete it entirely. The behavior is now covered by `emitGroupIndex` + `emitVariantsFlat` + `emitVariantFile`.

- [ ] **Step 3: Delete the now-obsolete `emitGroupFile` test block in `src/emit.test.ts`**

Find the `describe("emitGroupFile", ...)` block and remove it entirely. The structural-types behavior is covered by `emitGroupIndex` tests; the per-variant alias behavior is covered by `emitVariantsFlat` and `emitVariantFile` tests.

Also remove the `emitGroupFile` import from the top of `src/emit.test.ts`:

```typescript
import { emitIndexFile, emitMiscFile, kebabCase } from "./emit.ts";
```

(Plus whichever other emit imports the new tests need — `emitGroupIndex`, `emitVariantsFlat`, etc. — these were already added in Tasks 6–10.)

- [ ] **Step 4: Verify the full pipeline**

Run: `bun test`
Expected: all tests pass — `split.test.ts`, `emit.test.ts`, `naming.test.ts`, `group.test.ts`, `infer.test.ts`, `invariants.test.ts`, `write.test.ts`.

Run: `bun run generate`
Expected: regenerates the directory tree without errors. Note: `generate.ts` fetches the masterfile from a public URL — requires network. Verify quickly with:

```bash
ls packages/ts/src
ls packages/ts/src/pokemon-settings
ls packages/ts/src/pokemon-settings/variants
```

You should see directories per multi-entry group, an `index.ts` and either `variants.ts` or `variants/` per group, and top-level `index.ts` + `variants.ts` + `misc/`.

Run: `bun run format`
Expected: Biome formats without errors.

Run: `cd packages/ts && bunx tsc --noEmit && cd ../..`
Expected: zero type errors across the regenerated tree.

- [ ] **Step 5: Commit**

```bash
git add src/generate.ts src/emit.ts src/emit.test.ts packages/ts/src
git commit -m "feat: switch generator to per-group directory tree with cascade splitting"
```

---

## Task 13: Add `packages/ts/package.json` with subpath exports

**Files:**
- Create: `packages/ts/package.json`

This exposes the new directory layout to consumers via importable subpaths.

- [ ] **Step 1: Create the package.json**

Write `packages/ts/package.json`:

```json
{
	"name": "pogo-masterfile-types",
	"private": true,
	"type": "module",
	"types": "./src/index.ts",
	"exports": {
		".": {
			"types": "./src/index.ts"
		},
		"./variants": {
			"types": "./src/variants.ts"
		},
		"./*": {
			"types": "./src/*/index.ts"
		},
		"./*/variants": {
			"types": "./src/*/variants.ts"
		},
		"./*/variants/*": {
			"types": "./src/*/variants/*.ts"
		}
	}
}
```

- [ ] **Step 2: Write a tiny consumer fixture and verify it resolves**

Create `scripts/consumer-fixture.ts`:

```typescript
// Read-only fixture — verifies subpath resolution works across the new layout.
// Run via `cd packages/ts && bunx tsc --noEmit ../../scripts/consumer-fixture.ts`.

import type { MasterfileEntry, MasterfileTemplateID } from "pogo-masterfile-types";
import type { PokemonSettings, PokemonSettingsMasterfileEntry } from "pogo-masterfile-types/pokemon-settings";
import type { CombatType, CombatTypeMasterfileEntry } from "pogo-masterfile-types/combat-type";

declare const a: MasterfileEntry;
declare const b: MasterfileTemplateID;
declare const c: PokemonSettings;
declare const d: PokemonSettingsMasterfileEntry;
declare const e: CombatType;
declare const f: CombatTypeMasterfileEntry;

// Suppress unused-locals (none if the file even compiles).
void a;
void b;
void c;
void d;
void e;
void f;
```

- [ ] **Step 3: Verify subpath resolution from a consumer**

The consumer fixture relies on the package being resolvable. Bun's workspace resolution handles this automatically only if `pogo-masterfile-types` is declared. Skip workspace setup; instead validate by directly type-checking the fixture with explicit `paths` mapping.

Add (temporarily) a `tsconfig.consumer.json` at repo root:

```json
{
	"extends": "./tsconfig.json",
	"compilerOptions": {
		"paths": {
			"pogo-masterfile-types": ["./packages/ts/src/index.ts"],
			"pogo-masterfile-types/*": ["./packages/ts/src/*/index.ts"],
			"pogo-masterfile-types/variants": ["./packages/ts/src/variants.ts"],
			"pogo-masterfile-types/*/variants": ["./packages/ts/src/*/variants.ts"],
			"pogo-masterfile-types/*/variants/*": ["./packages/ts/src/*/variants/*.ts"]
		}
	},
	"include": ["scripts/consumer-fixture.ts"]
}
```

Run: `bunx tsc --noEmit -p tsconfig.consumer.json`
Expected: zero errors.

If the resolution fails, the issue is likely the `exports` map shape. Adjust `packages/ts/package.json` (e.g. some bundlers prefer the flatter `"./pokemon-settings": "./src/pokemon-settings/index.ts"` form). Re-run until it passes.

Once it passes, delete `tsconfig.consumer.json` and `scripts/consumer-fixture.ts` — they were validation aids, not committed artifacts.

- [ ] **Step 4: Verify the existing test suite still passes**

Run: `bun test`
Expected: all tests pass.

- [ ] **Step 5: Commit**

```bash
git add packages/ts/package.json
git commit -m "feat: add packages/ts/package.json with subpath exports"
```

---

## Task 14: Final end-to-end verification

**Files:**
- None modified — verification only.

- [ ] **Step 1: Regenerate from scratch**

Run: `rm -rf packages/ts/src && bun run generate`
Expected: the script wipes and rewrites the tree without error. Final log line should report the number of files written.

- [ ] **Step 2: Spot-check the generated layouts**

Run each command and confirm the listed expectations:

```bash
ls packages/ts/src/pokemon-settings/variants/ | sort
```
Expected: 18 type-named files (`bug.ts`, `dark.ts`, `dragon.ts`, `electric.ts`, `fairy.ts`, `fighting.ts`, `fire.ts`, `flying.ts`, `ghost.ts`, `grass.ts`, `ground.ts`, `ice.ts`, `index.ts`, `normal.ts`, `poison.ts`, `psychic.ts`, `rock.ts`, `steel.ts`, `water.ts`).

```bash
ls packages/ts/src/pokemon-extended-settings/variants/ | sort
```
Expected: ~9 fingerprint-named files (`base.ts`, `bread-overrides.ts`, `bread-overrides+form.ts`, `bread-overrides+form+temp-evo-overrides.ts`, `bread-overrides+temp-evo-overrides.ts`, `form.ts`, `form+temp-evo-overrides.ts`, `index.ts`, `temp-evo-overrides.ts`).

```bash
ls packages/ts/src/gender-settings/variants/ | sort
```
Expected: 3 files (`base.ts`, `form.ts`, `index.ts`).

```bash
ls packages/ts/src/combat-type/
```
Expected: `index.ts`, `variants.ts` — no `variants/` directory (≤ 100 entries).

```bash
ls packages/ts/src/move-sequence-settings/
```
Expected: `index.ts`, `variants.ts` — no `variants/` directory (no-split fallback).

```bash
ls packages/ts/src/misc/
```
Expected: `index.ts` only.

- [ ] **Step 3: Type-check the whole regenerated package**

Run: `cd packages/ts && bunx tsc --noEmit && cd ../..`
Expected: zero errors across the new directory tree.

- [ ] **Step 4: Format and lint**

Run: `bun run format`
Expected: Biome formats without errors. If formatter changes any generated files, re-run `bun run generate && bun run format` until stable, then commit those formatting changes if the rerun is non-idempotent (it shouldn't be — `generate` already calls `format`).

- [ ] **Step 5: Run all tests one more time**

Run: `bun test`
Expected: all tests pass.

(No commit needed in this task unless `bun run format` left changes.)

---

## Task 15: Update `CLAUDE.md` for the new layout

**Files:**
- Modify: `CLAUDE.md`

The "do NOT read" list points to `./packages/ts/index.ts`, but the new layout has the bulk of the data in per-cluster variant files. Update the list to reflect the largest generated files after the refactor.

- [ ] **Step 1: Identify the largest generated files**

Run: `find packages/ts/src -type f -name "*.ts" -exec ls -la {} \; | sort -k5 -nr | head -20`
Expected: a list ordered by size. Note the top ~10 file paths.

- [ ] **Step 2: Edit `CLAUDE.md`**

Replace the existing `## Important` block with:

```markdown
## Important

Do NOT read or parse the following generated files (extremely large — wastes tokens):

* `./packages/ts/src/pokemon-settings/**`
* `./packages/ts/src/pokemon-extended-settings/**`
* `./packages/ts/src/avatar-customization/**`
* `./packages/ts/src/gender-settings/**`
* `./packages/ts/src/avatar-item-display/**`
* `./packages/ts/src/iap-item-display/**`
* `./packages/ts/src/form-settings/**`
* `./packages/ts/src/badge-settings/**`
* `./packages/rust/lib.rs`
* `./packages/go/main.go`

When you are done with your edits, report to the user to test if the files have outputted correctly.
```

- [ ] **Step 3: Verify the file is well-formed**

Run: `cat CLAUDE.md`
Expected: the file matches what you wrote in Step 2; no unexpected diffs.

- [ ] **Step 4: Commit**

```bash
git add CLAUDE.md
git commit -m "docs: update CLAUDE.md do-not-read list for new directory layout"
```

---

## Done

After Task 15, the implementation is complete. Final state:

- `src/split.ts` provides the cascade selector, fully tested.
- `src/emit.ts` exposes narrower per-purpose emitters; `emitGroupFile` is gone.
- `src/generate.ts` produces a directory tree.
- The generated `packages/ts/src/` layout uses one directory per multi-entry group, with `variants.ts` for unsplit groups and `variants/<bucket>.ts` for split groups.
- `packages/ts/package.json` exposes subpath exports for consumers.
- `CLAUDE.md` reflects the new file paths in its "do not read" list.

Per the design's Non-Goals, Rust (`packages/rust/lib.rs`) and Go (`packages/go/main.go`) emitters are unchanged. Report to the user to verify those outputs manually if they're regenerated alongside.
