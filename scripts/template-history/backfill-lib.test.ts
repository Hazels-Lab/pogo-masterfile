import { describe, expect, test } from "bun:test";
import type { DeprecatedSet } from "../../src/deprecated/types";
import { accumulateSeen, buildReport, classifyLegacy, discriminatorOf, isShadowPurified, mergeBackfill, parseSnapshotDate } from "./backfill-lib";

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

describe("classifyLegacy", () => {
	test("legacy = seen − live − alreadyDeprecated", () => {
		const seen = new Map([
			["LIVE_ID", { discriminator: "a", lastSeen: "2024-01-01" }],
			["DEP_ID", { discriminator: "b", lastSeen: "2023-01-01" }],
			["LEGACY_ID", { discriminator: "c", lastSeen: "2021-06-03" }],
		]);
		const legacy = classifyLegacy({
			seen,
			live: new Set(["LIVE_ID"]),
			alreadyDeprecated: new Set(["DEP_ID"]),
		});
		expect([...legacy.keys()]).toEqual(["LEGACY_ID"]);
		expect(legacy.get("LEGACY_ID")?.discriminator).toBe("c");
	});
});

describe("isShadowPurified", () => {
	test("matches the standalone shadow/purified pokemon family", () => {
		expect(isShadowPurified("V0001_POKEMON_BULBASAUR_SHADOW")).toBe(true);
		expect(isShadowPurified("SPAWN_V0001_POKEMON_BULBASAUR_PURIFIED")).toBe(true);
		expect(isShadowPurified("V0001_POKEMON_BULBASAUR")).toBe(false);
		expect(isShadowPurified("EX_RAID_SETTINGS")).toBe(false);
	});
});

describe("mergeBackfill", () => {
	test("adds a brand-new discriminator with max lastSeen of its ids", () => {
		const out = mergeBackfill(
			new Map(),
			new Map([
				["EX_RAID_SETTINGS", { discriminator: "exRaidSettings", lastSeen: "2023-08-30" }],
				["EX_RAID_OTHER", { discriminator: "exRaidSettings", lastSeen: "2022-01-01" }],
			]),
		);
		expect(out.get("exRaidSettings")?.templateIds).toEqual(new Set(["EX_RAID_SETTINGS", "EX_RAID_OTHER"]));
		expect(out.get("exRaidSettings")?.entryCount).toBe(2);
		expect(out.get("exRaidSettings")?.lastSeen).toBe("2023-08-30");
	});

	test("merges into an existing record without regressing a newer lastSeen", () => {
		const current: DeprecatedSet = new Map([
			["badgeSettings", { discriminator: "badgeSettings", templateIds: new Set(["BADGE_NEW"]), lastSeen: "2025-02-03", entryCount: 1 }],
		]);
		const out = mergeBackfill(current, new Map([["BADGE_EVENT_0008", { discriminator: "badgeSettings", lastSeen: "2022-09-22" }]]));
		expect(out.get("badgeSettings")?.templateIds).toEqual(new Set(["BADGE_NEW", "BADGE_EVENT_0008"]));
		expect(out.get("badgeSettings")?.entryCount).toBe(2);
		expect(out.get("badgeSettings")?.lastSeen).toBe("2025-02-03"); // unchanged: backfill date is older
	});

	test("does not mutate the input set", () => {
		const current: DeprecatedSet = new Map([["x", { discriminator: "x", templateIds: new Set(["A"]), lastSeen: "2025-01-01", entryCount: 1 }]]);
		mergeBackfill(current, new Map([["B", { discriminator: "x", lastSeen: "2021-01-01" }]]));
		expect(current.get("x")?.templateIds).toEqual(new Set(["A"])); // original untouched
	});
});

describe("buildReport", () => {
	test("groups by discriminator, flags new vs existing, counts shadow/purified, sorts by count", () => {
		const legacy = new Map([
			["V0001_POKEMON_BULBASAUR_SHADOW", { discriminator: "pokemonSettings", lastSeen: "2021-06-03" }],
			["V0002_POKEMON_IVYSAUR_SHADOW", { discriminator: "pokemonSettings", lastSeen: "2021-11-03" }],
			["EX_RAID_SETTINGS", { discriminator: "exRaidSettings", lastSeen: "2023-08-30" }],
		]);
		const current = new Map([["pokemonSettings", { discriminator: "pokemonSettings", templateIds: new Set(["LIVE"]), lastSeen: "2025-01-01", entryCount: 1 }]]);
		const report = buildReport(legacy, current);

		expect(report.totalLegacy).toBe(3);
		expect(report.discriminatorCount).toBe(2);
		expect(report.newDiscriminators).toBe(1); // exRaidSettings new; pokemonSettings exists
		expect(report.shadowPurifiedCount).toBe(2);
		// sorted by count desc → pokemonSettings (2) first
		expect(report.byDiscriminator[0]?.discriminator).toBe("pokemonSettings");
		expect(report.byDiscriminator[0]?.count).toBe(2);
		expect(report.byDiscriminator[0]?.isNew).toBe(false);
		expect(report.byDiscriminator[0]?.firstSeen).toBe("2021-06-03");
		expect(report.byDiscriminator[0]?.lastSeen).toBe("2021-11-03");
		expect(report.byDiscriminator[1]?.discriminator).toBe("exRaidSettings");
		expect(report.byDiscriminator[1]?.isNew).toBe(true);
	});
});
