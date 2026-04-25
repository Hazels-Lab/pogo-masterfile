import { describe, expect, test } from "bun:test";
import { deepEqual, detectInvariants } from "./invariants.ts";
import { MOCK_MASTERFILE } from "./fixtures.ts";
import { groupEntries } from "./group.ts";

describe("deepEqual", () => {
	test("returns true for equal primitives", () => {
		expect(deepEqual(1, 1)).toBe(true);
		expect(deepEqual("a", "a")).toBe(true);
		expect(deepEqual(true, true)).toBe(true);
		expect(deepEqual(null, null)).toBe(true);
	});

	test("returns false for unequal primitives", () => {
		expect(deepEqual(1, 2)).toBe(false);
		expect(deepEqual("a", "b")).toBe(false);
		expect(deepEqual(true, false)).toBe(false);
		expect(deepEqual(null, undefined)).toBe(false);
		expect(deepEqual(1, "1")).toBe(false);
	});

	test("compares arrays element-wise", () => {
		expect(deepEqual([1, 2, 3], [1, 2, 3])).toBe(true);
		expect(deepEqual([1, 2, 3], [1, 2])).toBe(false);
		expect(deepEqual([1, 2], [1, 2, 3])).toBe(false);
		expect(deepEqual([1, 2, 3], [1, 2, 4])).toBe(false);
	});

	test("compares objects key-wise", () => {
		expect(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
		expect(deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 })).toBe(true);
		expect(deepEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false);
		expect(deepEqual({ a: 1, b: 2 }, { a: 1 })).toBe(false);
		expect(deepEqual({ a: 1, b: 2 }, { a: 1, b: 3 })).toBe(false);
	});

	test("recurses into nested structures", () => {
		expect(deepEqual({ a: [1, { b: 2 }] }, { a: [1, { b: 2 }] })).toBe(true);
		expect(deepEqual({ a: [1, { b: 2 }] }, { a: [1, { b: 3 }] })).toBe(false);
	});

	test("distinguishes arrays from objects", () => {
		expect(deepEqual([], {})).toBe(false);
	});
});

describe("detectInvariants", () => {
	test("detects Kind 2 (templateId tie) at top-level", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const tree = detectInvariants(group);
		expect(tree.get("attackType")).toEqual({ kind: "templateIdTie" });
	});

	test("detects Kind 1 (constant) nested inside an object", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const tree = detectInvariants(group);
		const effectGroup = tree.get("effectGroup");
		if (!effectGroup || effectGroup.kind !== "nested") {
			throw new Error("expected effectGroup to be a nested node");
		}
		expect(effectGroup.children.get("accuracyChance")).toEqual({
			kind: "constant",
			value: 1,
		});
	});

	test("detects Kind 2 nested deeply", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const tree = detectInvariants(group);
		const effectGroup = tree.get("effectGroup");
		if (!effectGroup || effectGroup.kind !== "nested") {
			throw new Error("expected effectGroup to be a nested node");
		}
		const nested = effectGroup.children.get("nested");
		if (!nested || nested.kind !== "nested") {
			throw new Error("expected effectGroup.nested to be a nested node");
		}
		expect(nested.children.get("combatType")).toEqual({ kind: "templateIdTie" });
	});

	test("does not flag fields with varying values", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const tree = detectInvariants(group);
		// attackScalar varies per-entry → not an invariant
		expect(tree.has("attackScalar")).toBe(false);
		const effectGroup = tree.get("effectGroup");
		if (!effectGroup || effectGroup.kind !== "nested") {
			throw new Error("expected effectGroup to be a nested node");
		}
		// typeCode varies ("BUG" vs "DARK") → not an invariant
		expect(effectGroup.children.has("typeCode")).toBe(false);
		// tags varies (length differs) → not an invariant
		expect(effectGroup.children.has("tags")).toBe(false);
		// windows varies ([0, 250] vs [0, 300]) → not an invariant
		expect(effectGroup.children.has("windows")).toBe(false);
	});

	test("flags a tuple constant via deep equality", () => {
		const group = {
			discriminator: "example",
			entries: [
				{
					templateId: "A",
					data: { templateId: "A", example: { sharedTuple: [0, 250] } },
				},
				{
					templateId: "B",
					data: { templateId: "B", example: { sharedTuple: [0, 250] } },
				},
			],
		};
		const tree = detectInvariants(group);
		expect(tree.get("sharedTuple")).toEqual({
			kind: "constant",
			value: [0, 250],
		});
	});

	test("does not flag a field absent in any entry", () => {
		const group = {
			discriminator: "example",
			entries: [
				{
					templateId: "A",
					data: { templateId: "A", example: { a: "shared", b: 1 } },
				},
				{
					templateId: "B",
					data: { templateId: "B", example: { a: "shared" } },
				},
			],
		};
		const tree = detectInvariants(group);
		expect(tree.get("a")).toEqual({ kind: "constant", value: "shared" });
		expect(tree.has("b")).toBe(false);
	});
});
