import { describe, expect, test } from "bun:test";
import { MOCK_MASTERFILE } from "./fixtures.ts";
import type { Entry } from "./group.ts";
import { groupEntries } from "./group.ts";

describe("groupEntries", () => {
	test("buckets entries by their single non-templateId data key", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		expect(groups.get("typeEffective")?.entries.length).toBe(2);
		expect(groups.get("pokemonSettings")?.entries.length).toBe(2);
		expect(groups.get("avatarCustomization")?.entries.length).toBe(2);
		expect(groups.get("collisionTest")?.entries.length).toBe(2);
		expect(groups.get("accessibilitySettings")?.entries.length).toBe(1);
	});

	test("routes 0-key stub entries to their own bucket keyed by templateId", () => {
		const entries: Entry[] = [
			{
				templateId: "ITEM_CURRENCY_VALUES",
				data: { templateId: "ITEM_CURRENCY_VALUES" },
			},
		];
		const groups = groupEntries(entries);
		expect(groups.size).toBe(1);
		const g = groups.get("ITEM_CURRENCY_VALUES");
		expect(g).toBeDefined();
		expect(g?.discriminator).toBe("ITEM_CURRENCY_VALUES");
		expect(g?.entries).toHaveLength(1);
	});

	test("throws when entry has more than 1 non-templateId data key", () => {
		const entries: Entry[] = [
			{ templateId: "X", data: { templateId: "X", foo: {}, bar: {} } },
		];
		expect(() => groupEntries(entries)).toThrow(/2 non-templateId/);
	});
});
