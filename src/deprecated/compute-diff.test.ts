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
