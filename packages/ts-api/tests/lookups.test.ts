/**
 * Top-level vs per-group lookups — where the literal narrowing lives.
 *
 * Hover over each variable in your editor and inspect the inferred type.
 * The point: top-level returns are wide (cheap to type-check); per-group
 * returns are literal-narrow (full intellisense on the entry's payload).
 */
import { describe, expect, test } from "bun:test";
import { EntryNotFoundError, Masterfile } from "../src/index.ts";
import { FIXTURE } from "./fixture.ts";

describe("Top-level lookups (wide return)", () => {
	test("getEntry returns MasterfileEntry — no literal narrowing", () => {
		const mf = Masterfile.fromJson(FIXTURE);

		// Hover on `entry`: type is `MasterfileEntry` (the wide union of every group).
		// Drilling further requires runtime checks: `if ("moveSettings" in entry.data)`.
		const entry = mf.getEntry("V0022_MOVE_MEGAHORN");
		expect(entry.templateId).toBe("V0022_MOVE_MEGAHORN");
	});

	test("tryGetEntry returns MasterfileEntry | undefined", () => {
		const mf = Masterfile.fromJson(FIXTURE);

		// Hover on `entry`: type is `MasterfileEntry | undefined`.
		const entry = mf.tryGetEntry("V0022_MOVE_MEGAHORN");
		expect(entry?.templateId).toBe("V0022_MOVE_MEGAHORN");
	});

	test("getEntry throws EntryNotFoundError on miss", () => {
		const mf = Masterfile.fromJson(FIXTURE);
		expect(() => mf.getEntry("DOES_NOT_EXIST")).toThrow(EntryNotFoundError);
	});

	test("has returns boolean", () => {
		const mf = Masterfile.fromJson(FIXTURE);
		expect(mf.has("V0022_MOVE_MEGAHORN")).toBe(true);
		expect(mf.has("DOES_NOT_EXIST")).toBe(false);
	});
});

describe("Per-group accessors (literal-narrow return)", () => {
	test("typing `mf.` shows every group as a property", () => {
		const mf = Masterfile.fromJson(FIXTURE);
		// In your editor, `mf.` autocompletes every group name as a property.
		// Each is a fully-typed accessor over that group's entries.
		expect(typeof mf.moveSettings).toBe("object");
		expect(typeof mf.pokemonSettings).toBe("object");
		expect(typeof mf.itemSettings).toBe("object");
	});

	test("accessor.get autocompletes only that group's templateIds", () => {
		const mf = Masterfile.fromJson(FIXTURE);

		// Type `mf.moveSettings.get("` in your editor — only moveSettings IDs
		// appear in the autocomplete list (~700 IDs, not the global 18k).
		const move = mf.moveSettings.get("V0022_MOVE_MEGAHORN");

		// Hover on `move`: type is the EXACT literal entry interface, e.g.
		// `MoveSettingsV0022MoveMegahorn`. `move.data.moveSettings.power` is
		// typed as the literal `105`, not `number`.
		expect(move.templateId).toBe("V0022_MOVE_MEGAHORN");

		// A different group:
		const bulba = mf.pokemonSettings.get("V0001_POKEMON_BULBASAUR");
		// Hover on `bulba.data.pokemonSettings`: full PokemonSettings shape.
		expect(bulba.templateId).toBe("V0001_POKEMON_BULBASAUR");
	});

	test("accessor.tryGet returns the literal type | undefined", () => {
		const mf = Masterfile.fromJson(FIXTURE);

		// Type is `MoveSettingsV0022MoveMegahorn | undefined`.
		const move = mf.moveSettings.tryGet("V0022_MOVE_MEGAHORN");
		expect(move?.templateId).toBe("V0022_MOVE_MEGAHORN");

		// Missing IDs return undefined, NOT throw.
		const missing = mf.moveSettings.tryGet("V9999_MOVE_FAKE");
		expect(missing).toBeUndefined();
	});

	test("accessor.has — narrowing on a runtime string", () => {
		const mf = Masterfile.fromJson(FIXTURE);
		const userInput = "V0022_MOVE_MEGAHORN";

		// `accessor.has` returns boolean (not a type predicate against the
		// per-group key union — that would force materialization of the union).
		// For literal IDs you write directly, just call `.get(...)` — TS will
		// validate the literal at compile time.
		if (mf.moveSettings.has(userInput)) {
			expect(mf.moveSettings.tryGet(userInput)).toBeDefined();
		}
	});

	test("accessor.all() — every entry for the group, narrow union", () => {
		const mf = Masterfile.fromJson(FIXTURE);

		// Type: `readonly MoveSettingsMasterfileEntry[]`. Inside the loop,
		// `m.data.moveSettings` autocompletes — no `if ("moveSettings" in ...)`
		// dance needed.
		const moves = mf.moveSettings.all();
		expect(moves).toHaveLength(1);
	});

	test("accessor.templateIds() — narrow ID array", () => {
		const mf = Masterfile.fromJson(FIXTURE);

		// Type: `readonly MoveSettingsTemplateID[]` (the per-group ID union).
		const ids = mf.moveSettings.templateIds();
		expect(ids).toEqual(["V0022_MOVE_MEGAHORN"]);
	});

	test("accessor.size — entry count for the group", () => {
		const mf = Masterfile.fromJson(FIXTURE);
		expect(mf.itemSettings.size).toBe(2);
		expect(mf.moveSettings.size).toBe(1);
		expect(mf.pokemonSettings.size).toBe(1);
		// Groups not present in the fixture still have a working accessor — empty.
		expect(mf.combatLeague.size).toBe(0);
	});

	test("accessor[Symbol.iterator] — for-of iterates the group's entries", () => {
		const mf = Masterfile.fromJson(FIXTURE);

		// Each `item` is fully typed as ItemSettingsMasterfileEntry inside.
		const ids: string[] = [];
		for (const item of mf.itemSettings) {
			ids.push(item.templateId);
		}
		expect(ids.sort()).toEqual(["ITEM_POTION", "ITEM_SUPER_POTION"]);
	});
});

describe("Top-level vs per-group — same data, different typing", () => {
	test("the entry is identical; only the static type differs", () => {
		const mf = Masterfile.fromJson(FIXTURE);

		// Top-level — wide type (MasterfileEntry).
		const fromTop = mf.getEntry("V0022_MOVE_MEGAHORN");

		// Per-group — narrow type (the exact literal entry interface).
		const fromGroup = mf.moveSettings.get("V0022_MOVE_MEGAHORN");

		// Same object at runtime.
		expect(fromTop).toBe(fromGroup);
	});
});
