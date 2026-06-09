import { describe, expect, test } from "bun:test";
import { parseDeprecatedSource } from "./parse-source";

const SAMPLE = `// Generated — deprecated masterfile types. DO NOT EDIT BY HAND.
export type * from "./entries";
export type * from "./types";

/** @deprecated lastSeen 2025-06-06 — 2 entries */
type Deprecated_markerIds = "EGG_RARITY_FORM_ROLL_BACK" | "HOME_WIDGET_SETTINGS";

/** @deprecated lastSeen 2024-11-11 — 3 entries */
type DeprecatedBadgeSettingsIds =
	| "BADGE_A"
	| "BADGE_B"
	| "BADGE_C";
`;

describe("parseDeprecatedSource", () => {
	test("parses discriminators, ids, lastSeen", () => {
		const set = parseDeprecatedSource(SAMPLE);
		expect(set.size).toBe(2);
		expect(set.get("_marker")?.templateIds).toEqual(new Set(["EGG_RARITY_FORM_ROLL_BACK", "HOME_WIDGET_SETTINGS"]));
		expect(set.get("_marker")?.lastSeen).toBe("2025-06-06");
		expect(set.get("badgeSettings")?.templateIds.size).toBe(3);
		expect(set.get("badgeSettings")?.lastSeen).toBe("2024-11-11");
		expect(set.get("badgeSettings")?.entryCount).toBe(3);
	});

	test("empty source → empty set", () => {
		expect(parseDeprecatedSource("").size).toBe(0);
	});
});
