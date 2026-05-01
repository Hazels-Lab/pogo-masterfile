import { describe, expect, test } from "bun:test";
import { compareNatural } from "./helpers.ts";

// Cases pulled directly from the lookup-table.d.ts diff that biome's
// organizeImports rewrites. Each pair is (smaller, larger) under
// natural sort. Sign-of-result is what matters; magnitude is not asserted.

describe("compareNatural", () => {
	test("trailing-number runs sort numerically", () => {
		// Eye2 < Eye10: this is the canonical case the user described.
		expect(compareNatural("AvatarItemDisplayNGradientEye2", "AvatarItemDisplayNGradientEye10")).toBeLessThan(0);
		expect(compareNatural("AvatarItemDisplayNGradientEye10", "AvatarItemDisplayNGradientEye2")).toBeGreaterThan(0);
		expect(compareNatural("AvatarItemDisplayNGradientEye9", "AvatarItemDisplayNGradientEye10")).toBeLessThan(0);
	});

	test("digit runs in the middle of a string also sort numerically", () => {
		// dlc2spring0 < dlc10 because the first differing digit run is 2 vs 10.
		expect(compareNatural("AvatarItemDisplayNBackpackSvdlc2spring0", "AvatarItemDisplayNBackpackSvdlc10")).toBeLessThan(0);
		// Gofest2024darkgray0 < Gofest20190 (2024 vs 20190, both numeric).
		expect(compareNatural("AvatarItemDisplayNShirtGofest2024darkgray0", "AvatarItemDisplayNShirtGofest20190")).toBeLessThan(0);
		// Wcs2025winnersitems0 < Wcs20250 (2025 vs 20250 in the first digit run).
		expect(compareNatural("AvatarItemDisplayNHatWcs2025winnersitems0", "AvatarItemDisplayNHatWcs20250")).toBeLessThan(0);
	});

	test("equal strings compare equal", () => {
		expect(compareNatural("Foo10", "Foo10")).toBe(0);
	});

	test("pure-letter prefixes compare lexicographically", () => {
		expect(compareNatural("Alpha", "Beta")).toBeLessThan(0);
		expect(compareNatural("Beta", "Alpha")).toBeGreaterThan(0);
	});

	test("works as Array.prototype.sort comparator", () => {
		const input = ["Eye10", "Eye2", "Eye1", "Eye20", "Eye3"];
		const sorted = [...input].sort(compareNatural);
		expect(sorted).toEqual(["Eye1", "Eye2", "Eye3", "Eye10", "Eye20"]);
	});
});
