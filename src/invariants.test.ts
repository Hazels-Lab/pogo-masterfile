import { describe, expect, test } from "bun:test";
import { deepEqual } from "./invariants.ts";

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
