import { describe, expect, test } from "bun:test";
import { MOCK_MASTERFILE } from "./fixtures.ts";
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

	test("throws when an entry has zero non-templateId data keys", () => {
		expect(() =>
			groupEntries([
				{ templateId: "BROKEN", data: { templateId: "BROKEN" } },
			]),
		).toThrow(/BROKEN/);
	});

	test("throws when an entry has two or more non-templateId data keys", () => {
		expect(() =>
			groupEntries([
				{
					templateId: "BROKEN_TWO",
					data: { templateId: "BROKEN_TWO", a: {}, b: {} },
				},
			]),
		).toThrow(/BROKEN_TWO/);
	});
});
