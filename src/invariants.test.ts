import { describe, expect, test } from "bun:test";
import { MOCK_MASTERFILE } from "./fixtures.ts";
import { groupEntries } from "./group.ts";
import type { InvariantNode, InvariantTree } from "./invariants.ts";
import { deepEqual, detectInvariants, invariantsToInferredType } from "./invariants.ts";

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

describe("invariantsToInferredType", () => {
	test("converts a Kind 2 tie to a templateIdReference type", () => {
		const tree: InvariantTree = new Map([["attackType", { kind: "templateIdTie" }]]);
		const result = invariantsToInferredType(tree);
		expect(result).toEqual({
			kind: "object",
			properties: [
				{
					name: "attackType",
					optional: false,
					type: { kind: "templateIdReference" },
				},
			],
		});
	});

	test("converts a Kind 1 numeric constant to a literal number type", () => {
		const tree: InvariantTree = new Map([["accuracyChance", { kind: "constant", value: 1 }]]);
		const result = invariantsToInferredType(tree);
		expect(result.kind).toBe("object");
		if (result.kind !== "object") throw new Error("unreachable");
		expect(result.properties).toHaveLength(1);
		const prop = result.properties[0]!;
		expect(prop.name).toBe("accuracyChance");
		expect(prop.optional).toBe(false);
		expect(prop.type.kind).toBe("number");
		if (prop.type.kind !== "number") throw new Error("unreachable");
		expect(prop.type.literals).toEqual([1]);
	});

	test("converts a Kind 1 tuple constant to a tuple-of-literals type", () => {
		const tree: InvariantTree = new Map([["windows", { kind: "constant", value: [0, 250] }]]);
		const result = invariantsToInferredType(tree);
		if (result.kind !== "object") throw new Error("unreachable");
		const prop = result.properties[0]!;
		if (prop.type.kind !== "tuple") throw new Error("unreachable");
		expect(prop.type.items).toHaveLength(2);
	});

	test("recurses into nested nodes", () => {
		const tree: InvariantTree = new Map<string, InvariantNode>([
			[
				"effectGroup",
				{
					kind: "nested",
					children: new Map<string, InvariantNode>([["accuracyChance", { kind: "constant", value: 1 }]]),
				},
			],
		]);
		const result = invariantsToInferredType(tree);
		if (result.kind !== "object") throw new Error("unreachable");
		const effectGroup = result.properties[0]!;
		expect(effectGroup.name).toBe("effectGroup");
		expect(effectGroup.type.kind).toBe("object");
	});

	test("sorts properties alphabetically", () => {
		const tree: InvariantTree = new Map([
			["zeta", { kind: "constant", value: 1 }],
			["alpha", { kind: "constant", value: 2 }],
		]);
		const result = invariantsToInferredType(tree);
		if (result.kind !== "object") throw new Error("unreachable");
		expect(result.properties.map((p) => p.name)).toEqual(["alpha", "zeta"]);
	});

	test("sorts nested properties alphabetically", () => {
		const tree: InvariantTree = new Map<string, InvariantNode>([
			[
				"outer",
				{
					kind: "nested",
					children: new Map<string, InvariantNode>([
						["zebra", { kind: "constant", value: 1 }],
						["apple", { kind: "constant", value: 2 }],
					]),
				},
			],
		]);
		const result = invariantsToInferredType(tree);
		if (result.kind !== "object") throw new Error("unreachable");
		const outer = result.properties[0]!;
		if (outer.type.kind !== "object") throw new Error("unreachable");
		expect(outer.type.properties.map((p) => p.name)).toEqual(["apple", "zebra"]);
	});
});
