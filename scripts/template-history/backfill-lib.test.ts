import { describe, expect, test } from "bun:test";
import { discriminatorOf, parseSnapshotDate } from "./backfill-lib";

describe("parseSnapshotDate", () => {
	test("extracts ISO date from snapshot folder name", () => {
		expect(parseSnapshotDate("gm_v2_apk0327_2024.09.04-10.44.08")).toBe("2024-09-04");
		expect(parseSnapshotDate("gm_vNULL_apk2090_2021.06.03-15.45.17")).toBe("2021-06-03");
	});
	test("throws on unparseable name", () => {
		expect(() => parseSnapshotDate("garbage")).toThrow();
	});
});

describe("discriminatorOf", () => {
	test("single non-templateId key", () => {
		expect(discriminatorOf({ templateId: "X", pokemonSettings: {} })).toBe("pokemonSettings");
	});
	test("stub entry (no inner key) → _marker", () => {
		expect(discriminatorOf({ templateId: "HOME_WIDGET_SETTINGS" })).toBe("_marker");
	});
	test(">=2 keys → deterministic sorted-first fallback", () => {
		expect(discriminatorOf({ templateId: "X", zeta: {}, alpha: {} })).toBe("alpha");
	});
});
