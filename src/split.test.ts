import { describe, expect, test } from "bun:test";
import type { Group } from "./group.ts";
import { chooseSplit, fingerprintFileName, tryH1, tryH2, valueFileName } from "./split.ts";

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
		const group = mkGroup([{ type: "POKEMON_TYPE_WATER" }, { type: "POKEMON_TYPE_FIRE" }, { type: "POKEMON_TYPE_GRASS" }, { type: "POKEMON_TYPE_WATER" }]);
		const result = tryH1(group);
		expect(result).not.toBeNull();
		const water = result!.buckets.find((b) => b.value === "POKEMON_TYPE_WATER");
		expect(water?.fileName).toBe("water");
	});
});

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

describe("fingerprintFileName", () => {
	test("returns 'misc' for empty fingerprint", () => {
		expect(fingerprintFileName([])).toBe("misc");
	});

	test("kebab-cases a single camelCase field", () => {
		expect(fingerprintFileName(["form"])).toBe("form");
		expect(fingerprintFileName(["breadOverrides"])).toBe("bread-overrides");
		expect(fingerprintFileName(["tempEvoOverrides"])).toBe("temp-evo-overrides");
	});

	test("joins multiple fields with '-'", () => {
		expect(fingerprintFileName(["breadOverrides", "form"])).toBe("bread-overrides-form");
		expect(fingerprintFileName(["form", "tempEvoOverrides"])).toBe("form-temp-evo-overrides");
		expect(fingerprintFileName(["breadOverrides", "form", "tempEvoOverrides"])).toBe("bread-overrides-form-temp-evo-overrides");
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
		expect(names).toEqual(["extra-form", "form", "misc"]);
	});
});

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
