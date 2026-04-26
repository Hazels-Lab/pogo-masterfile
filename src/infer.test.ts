import { describe, expect, test } from "bun:test";
import { InferenceBuilder, inferJsonType, inferJsonTypes, STRING_LITERAL_UNION_CAP, widenType } from "./infer.ts";

describe("inferJsonTypes", () => {
	test("classifies non-negative integers as uint and preserves literals", () => {
		const inferred = inferJsonTypes([0, 1, 2, 2]);
		if (inferred.kind !== "number") throw new Error("Expected number type");

		expect(inferred.numericKind).toBe("uint");
		expect(inferred.literals).toEqual([0, 1, 2]);
	});

	test("classifies negative integers as int and preserves literals", () => {
		const inferred = inferJsonTypes([-1, 0, 1]);
		if (inferred.kind !== "number") throw new Error("Expected number type");

		expect(inferred.numericKind).toBe("int");
		expect(inferred.literals).toEqual([-1, 0, 1]);
	});

	test("classifies decimal numbers as float and preserves literals", () => {
		const inferred = inferJsonTypes([0.625, 1, 1.6]);
		if (inferred.kind !== "number") throw new Error("Expected number type");

		expect(inferred.numericKind).toBe("float");
		expect(inferred.literals).toEqual([0.625, 1, 1.6]);
	});

	test("infers fixed-length arrays as tuples", () => {
		const inferred = inferJsonTypes([
			["POKEMON_TYPE_BUG", 1],
			["POKEMON_TYPE_DARK", 2],
		]);
		if (inferred.kind !== "tuple") throw new Error("Expected tuple type");

		expect(inferred.items).toHaveLength(2);
		expect(inferred.items[0]?.kind).toBe("string");
		expect(inferred.items[1]?.kind).toBe("number");
	});

	test("infers a TypeEffective-style attackScalar as an 18-float tuple", () => {
		const inferred = inferJsonType([1, 1.6, 1, 0.625, 1, 1, 1, 1, 1, 1, 1.6, 1, 0.625, 1, 1, 1, 1, 1]);
		if (inferred.kind !== "tuple") throw new Error("Expected tuple type");

		expect(inferred.items).toHaveLength(18);
		for (const item of inferred.items) {
			if (item.kind !== "number") throw new Error("Expected numeric tuple item");
			expect(item.numericKind).toBe("float");
		}
	});

	test("infers mixed-length arrays as variable arrays", () => {
		const inferred = inferJsonTypes([["a"], ["a", "b"]]);
		if (inferred.kind !== "array") throw new Error("Expected array type");

		expect(inferred.element.kind).toBe("string");
	});

	test("marks object fields optional when missing from at least one object", () => {
		const inferred = inferJsonTypes([{ always: 1, sometimes: "yes" }, { always: 2 }]);
		if (inferred.kind !== "object") throw new Error("Expected object type");

		expect(inferred.properties).toEqual([
			{
				name: "always",
				optional: false,
				type: { kind: "number", numericKind: "uint", literals: [1, 2] },
			},
			{
				name: "sometimes",
				optional: true,
				type: { kind: "string", literals: ["yes"] },
			},
		]);
	});

	test("treats null as a value instead of an optional marker", () => {
		const inferred = inferJsonTypes([null, "enabled"]);
		if (inferred.kind !== "union") throw new Error("Expected union type");

		expect(inferred.variants).toEqual([{ kind: "null" }, { kind: "string", literals: ["enabled"] }]);
	});
});

describe("widenType", () => {
	test("preserves string literals at or below the cap", () => {
		const inferred = inferJsonTypes(["BUG", "DARK", "FIRE"]);
		const widened = widenType(inferred);
		expect(widened).toEqual({ kind: "string", literals: ["BUG", "DARK", "FIRE"] });
	});

	test("widens strings to bare type when literal count exceeds the cap", () => {
		const many = Array.from({ length: STRING_LITERAL_UNION_CAP + 1 }, (_, i) => `value-${i.toString().padStart(3, "0")}`);
		const inferred = inferJsonTypes(many);
		const widened = widenType(inferred);
		expect(widened).toEqual({ kind: "string", literals: [] });
	});

	test("preserves string literals exactly at the cap", () => {
		const exactly = Array.from({ length: STRING_LITERAL_UNION_CAP }, (_, i) => `value-${i.toString().padStart(3, "0")}`);
		const inferred = inferJsonTypes(exactly);
		const widened = widenType(inferred);
		if (widened.kind !== "string") throw new Error("Expected string type");
		expect(widened.literals).toHaveLength(STRING_LITERAL_UNION_CAP);
	});

	test("still strips number and boolean literals", () => {
		expect(widenType({ kind: "number", numericKind: "uint", literals: [1, 2, 3] })).toEqual({
			kind: "number",
			numericKind: "uint",
			literals: [],
		});
		expect(widenType({ kind: "boolean", literals: [true, false] })).toEqual({ kind: "boolean", literals: [] });
	});

	test("widens templateIdSlice (and templateIdReference) to bare string for XData", () => {
		// XData is generic-free, so any TemplateID-tied marker must collapse to string.
		expect(widenType({ kind: "templateIdSlice", prefix: "COMBAT_", suffix: "" })).toEqual({
			kind: "string",
			literals: [],
		});
		expect(widenType({ kind: "templateIdReference" })).toEqual({
			kind: "string",
			literals: [],
		});
	});

	test("preserves string literals nested inside object and array", () => {
		const inferred = inferJsonTypes([
			{ tag: "ALPHA", values: ["x"] },
			{ tag: "BETA", values: ["y", "z"] },
		]);
		const widened = widenType(inferred);
		if (widened.kind !== "object") throw new Error("Expected object type");
		const tag = widened.properties.find((p) => p.name === "tag");
		expect(tag?.type).toEqual({ kind: "string", literals: ["ALPHA", "BETA"] });
		const values = widened.properties.find((p) => p.name === "values");
		if (values?.type.kind !== "array") throw new Error("Expected array type");
		expect(values.type.element).toEqual({ kind: "string", literals: ["x", "y", "z"] });
	});
});

describe("InferenceBuilder", () => {
	test("incrementally collects values before building the inferred type", () => {
		const inferred = new InferenceBuilder().add(false).add(true).add(true).build();
		if (inferred.kind !== "boolean") throw new Error("Expected boolean type");

		expect(inferred.literals).toEqual([false, true]);
	});
});
