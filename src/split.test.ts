import { describe, expect, test } from "bun:test";
import type { Group } from "./group.ts";
import { tryH1 } from "./split.ts";

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
