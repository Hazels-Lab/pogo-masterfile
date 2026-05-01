import { describe, expect, test } from "bun:test";
import { EntryNotFoundError } from "../../../packages/ts-api/src/errors.ts";
import { Masterfile } from "../../../packages/ts-api/src/masterfile.ts";
import { FIXTURE_ENTRIES } from "./fixture.ts";

describe("Per-group accessors", () => {
	test("accessor.get returns the entry by templateId", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		const move = mf.moveSettings.get("V0022_MOVE_MEGAHORN");
		expect(move.templateId).toBe("V0022_MOVE_MEGAHORN");
	});

	test("accessor.get throws on missing", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		expect(() => mf.moveSettings.get("DOES_NOT_EXIST")).toThrow(EntryNotFoundError);
	});

	test("accessor.tryGet returns undefined on missing", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		expect(mf.moveSettings.tryGet("DOES_NOT_EXIST")).toBeUndefined();
	});

	test("accessor.has returns true only for entries in that group", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		expect(mf.moveSettings.has("V0022_MOVE_MEGAHORN")).toBe(true);
		// Bulbasaur exists overall but is in pokemonSettings, not moveSettings
		expect(mf.moveSettings.has("V0001_POKEMON_BULBASAUR")).toBe(false);
	});

	test("accessor.all returns just the group's entries", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		expect(mf.moveSettings.all()).toHaveLength(1);
	});

	test("accessor.templateIds returns group IDs only", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		expect(mf.moveSettings.templateIds()).toEqual(["V0022_MOVE_MEGAHORN"]);
	});

	test("accessor.find with predicate", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		const found = mf.moveSettings.find((e) => e.templateId === "V0022_MOVE_MEGAHORN");
		expect(found?.templateId).toBe("V0022_MOVE_MEGAHORN");
	});

	test("accessor.filter narrows", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		const filtered = mf.moveSettings.filter(() => true);
		expect(filtered).toHaveLength(1);
	});

	test("accessor.size matches group length", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		expect(mf.moveSettings.size).toBe(1);
		expect(mf.combatLeague.size).toBe(0);
	});

	test("accessor[Symbol.iterator] iterates the group's entries", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		expect([...mf.moveSettings]).toHaveLength(1);
	});

	test("top-level getEntry equals accessor.get for in-group ID", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		expect(mf.getEntry("V0022_MOVE_MEGAHORN")).toBe(
			mf.moveSettings.get("V0022_MOVE_MEGAHORN"),
		);
	});
});
