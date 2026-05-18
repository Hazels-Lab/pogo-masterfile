import { describe, expect, test } from "bun:test";
import { formatTemplateIdDiff } from "./bump-versions.ts";

describe("formatTemplateIdDiff", () => {
	test("empty before + empty after → empty string", () => {
		expect(formatTemplateIdDiff("", "")).toBe("");
	});

	test("identical non-empty sets → empty string", () => {
		const text = "FOO_1\nBAR_2\n";
		expect(formatTemplateIdDiff(text, text)).toBe("");
	});

	test("empty before + non-empty after → Added section only", () => {
		const before = "";
		const after = "BAR_2\nFOO_1\n";
		const out = formatTemplateIdDiff(before, after);
		expect(out).toBe("\n\n### Added template IDs (2)\n\n- BAR_2\n- FOO_1");
	});

	test("non-empty before + empty after → Removed section only", () => {
		const before = "BAR_2\nFOO_1\n";
		const after = "";
		const out = formatTemplateIdDiff(before, after);
		expect(out).toBe("\n\n### Removed template IDs (2)\n\n- BAR_2\n- FOO_1");
	});

	test("overlapping sets with one add + one remove → both sections", () => {
		const before = "BAR_2\nFOO_1\n";
		const after = "BAR_2\nBAZ_3\n";
		const out = formatTemplateIdDiff(before, after);
		expect(out).toBe("\n\n### Added template IDs (1)\n\n- BAZ_3\n\n### Removed template IDs (1)\n\n- FOO_1");
	});

	test("disjoint non-empty sets → both sections", () => {
		const before = "A\nB\n";
		const after = "C\nD\n";
		const out = formatTemplateIdDiff(before, after);
		expect(out).toBe("\n\n### Added template IDs (2)\n\n- C\n- D\n\n### Removed template IDs (2)\n\n- A\n- B");
	});

	test("output added/removed are sorted alphabetically regardless of input order", () => {
		const before = "ZZZ\n";
		const after = "BBB\nAAA\nCCC\n";
		const out = formatTemplateIdDiff(before, after);
		// Added: AAA, BBB, CCC (sorted). Removed: ZZZ.
		expect(out).toBe("\n\n### Added template IDs (3)\n\n- AAA\n- BBB\n- CCC\n\n### Removed template IDs (1)\n\n- ZZZ");
	});

	test("blank lines in input are ignored", () => {
		const before = "\n\nFOO\n\n";
		const after = "FOO\n";
		expect(formatTemplateIdDiff(before, after)).toBe("");
	});

	test("trailing newline absence doesn't break parsing", () => {
		const before = "A\nB";
		const after = "A\nB\nC";
		const out = formatTemplateIdDiff(before, after);
		expect(out).toBe("\n\n### Added template IDs (1)\n\n- C");
	});
});
