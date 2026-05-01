import { describe, expect, test } from "bun:test";
import type { MasterfileEntry } from "pogo-masterfile-types/entries";
import { Masterfile } from "../../../packages/ts-api/src/masterfile.ts";
import { FIXTURE_ENTRIES } from "./fixture.ts";

describe("Masterfile mutation and search", () => {
	test("update replaces data and rebuilds indexes", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		expect(mf.has("V0022_MOVE_MEGAHORN")).toBe(true);
		mf.update([FIXTURE_ENTRIES[0]!] as readonly MasterfileEntry[]);
		expect(mf.size).toBe(1);
		expect(mf.has("V0022_MOVE_MEGAHORN")).toBe(false);
		expect(mf.has("ITEM_POTION")).toBe(true);
	});

	test("refresh uses provided fetcher and swaps data", async () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		await mf.refresh({
			fetcher: async () => [FIXTURE_ENTRIES[2]!] as MasterfileEntry[],
		});
		expect(mf.size).toBe(1);
		expect(mf.has("V0022_MOVE_MEGAHORN")).toBe(true);
		expect(mf.has("ITEM_POTION")).toBe(false);
	});

	test("find returns first matching entry", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		const found = mf.find((e) => e.templateId.startsWith("ITEM_"));
		expect(found?.templateId).toBe("ITEM_POTION");
	});

	test("filter returns all matching", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		const filtered = mf.filter((e) => e.templateId.startsWith("V"));
		expect(filtered).toHaveLength(2);
	});

	test("findByPattern matches templateId regex", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		const matches = mf.findByPattern(/^V\d+_/);
		expect(matches).toHaveLength(2);
		const itemMatches = mf.findByPattern(/^ITEM_/);
		expect(itemMatches).toHaveLength(1);
	});
});
