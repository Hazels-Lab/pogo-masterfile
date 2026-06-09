import { describe, expect, test } from "bun:test";
import { accumulateSeen, discriminatorOf, parseSnapshotDate } from "./backfill-lib";

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

describe("accumulateSeen", () => {
	test("keeps discriminator + date from the most recent appearance", () => {
		const seen = new Map();
		// older snapshot first
		accumulateSeen(seen, [{ templateId: "A", data: { templateId: "A", oldDisc: {} } }], "2021-06-03");
		// newer snapshot: same id, different shape
		accumulateSeen(seen, [{ templateId: "A", data: { templateId: "A", newDisc: {} } }], "2023-08-30");
		expect(seen.get("A")).toEqual({ discriminator: "newDisc", lastSeen: "2023-08-30" });
	});

	test("order-independent: newer processed before older still keeps newer", () => {
		const seen = new Map();
		accumulateSeen(seen, [{ templateId: "A", data: { templateId: "A", newDisc: {} } }], "2023-08-30");
		accumulateSeen(seen, [{ templateId: "A", data: { templateId: "A", oldDisc: {} } }], "2021-06-03");
		expect(seen.get("A")).toEqual({ discriminator: "newDisc", lastSeen: "2023-08-30" });
	});
});
