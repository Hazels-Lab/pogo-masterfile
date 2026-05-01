import { describe, expect, test } from "bun:test";
import { GROUP_NAMES } from "../../../packages/ts-api/src/group-names.ts";
import { Masterfile } from "../../../packages/ts-api/src/masterfile.ts";
import { FIXTURE_ENTRIES } from "./fixture.ts";

describe("Masterfile group introspection", () => {
	test("groups() returns the full GROUP_NAMES list", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		expect(mf.groups()).toEqual(GROUP_NAMES);
	});

	test("getGroup returns matching entries for a populated group", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		const moves = mf.getGroup("moveSettings");
		expect(moves).toHaveLength(1);
		expect(moves[0]?.templateId).toBe("V0022_MOVE_MEGAHORN");
	});

	test("getGroup returns empty for a group not in the fixture", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		const empty = mf.getGroup("combatLeague");
		expect(empty).toEqual([]);
	});

	test("templateIds() with no arg returns all IDs", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		const ids = mf.templateIds();
		expect(ids).toContain("V0022_MOVE_MEGAHORN");
		expect(ids).toContain("V0001_POKEMON_BULBASAUR");
		expect(ids).toContain("ITEM_POTION");
	});

	test("templateIds(group) returns only that group's IDs", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		const moveIds = mf.templateIds("moveSettings");
		expect(moveIds).toEqual(["V0022_MOVE_MEGAHORN"]);
	});
});
