import { describe, expect, test } from "bun:test";
import { EntryNotFoundError } from "../../../packages/ts-api/src/errors.ts";
import { Masterfile } from "../../../packages/ts-api/src/masterfile.ts";
import { FIXTURE_ENTRIES } from "./fixture.ts";

describe("Masterfile core lookups", () => {
	test("fromJson constructs and indexes", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		expect(mf.size).toBe(FIXTURE_ENTRIES.length);
	});

	test("getEntry returns the entry by templateId", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		const entry = mf.getEntry("V0022_MOVE_MEGAHORN");
		expect(entry.templateId).toBe("V0022_MOVE_MEGAHORN");
	});

	test("getEntry throws EntryNotFoundError on missing", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		expect(() => mf.getEntry("DOES_NOT_EXIST")).toThrow(EntryNotFoundError);
	});

	test("tryGetEntry returns undefined on missing", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		expect(mf.tryGetEntry("DOES_NOT_EXIST")).toBeUndefined();
	});

	test("tryGetEntry returns entry on hit", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		expect(mf.tryGetEntry("ITEM_POTION")?.templateId).toBe("ITEM_POTION");
	});

	test("has returns true on hit and false on miss", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		expect(mf.has("V0001_POKEMON_BULBASAUR")).toBe(true);
		expect(mf.has("DOES_NOT_EXIST")).toBe(false);
	});

	test("getAll returns all entries", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		expect(mf.getAll()).toHaveLength(FIXTURE_ENTRIES.length);
	});

	test("Symbol.iterator yields each entry", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		const collected = [...mf];
		expect(collected).toHaveLength(FIXTURE_ENTRIES.length);
	});

	test("size matches entries length", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		expect(mf.size).toBe(FIXTURE_ENTRIES.length);
	});

	test("raw returns underlying entries", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		expect(mf.raw).toHaveLength(FIXTURE_ENTRIES.length);
	});
});
