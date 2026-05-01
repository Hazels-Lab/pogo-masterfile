/**
 * Mutation — refresh from remote, replace data in-memory.
 *
 * Both rebuild the internal indexes atomically: the new maps are built in
 * full before any read can observe them, so concurrent reads never see a
 * half-updated state.
 */
import { describe, expect, mock, test } from "bun:test";
import type { MasterfileEntry } from "pogo-masterfile-types/entries";
import { Masterfile } from "../src/index.ts";
import { FIXTURE } from "./fixture.ts";

describe("update — replace data synchronously", () => {
	test("swaps in a new array and rebuilds indexes", () => {
		const mf = Masterfile.fromJson(FIXTURE);
		expect(mf.has("V0022_MOVE_MEGAHORN")).toBe(true);

		// `update(json)` accepts the same shape as `fromJson` — useful when
		// you've already fetched and transformed the masterfile yourself.
		mf.update([FIXTURE[0]!] as readonly MasterfileEntry[]);

		expect(mf.size).toBe(1);
		expect(mf.has("V0022_MOVE_MEGAHORN")).toBe(false);
		expect(mf.has("ITEM_POTION")).toBe(true);
	});

	test("per-group accessors reflect the update immediately", () => {
		const mf = Masterfile.fromJson(FIXTURE);
		expect(mf.moveSettings.size).toBe(1);

		mf.update([] as readonly MasterfileEntry[]);
		expect(mf.moveSettings.size).toBe(0);
		expect(mf.itemSettings.size).toBe(0);
	});
});

describe("refresh — re-fetch from remote", () => {
	test("uses the same options as fromRemote", async () => {
		const mf = Masterfile.fromJson(FIXTURE);

		// Custom fetcher mirrors `fromRemote` — same `Fetcher` signature.
		await mf.refresh({
			fetcher: async () => [FIXTURE[2]!] as MasterfileEntry[],
		});

		expect(mf.size).toBe(1);
		expect(mf.has("V0001_POKEMON_BULBASAUR")).toBe(true);
		expect(mf.has("V0022_MOVE_MEGAHORN")).toBe(false);
	});

	test("refresh is async — await it before reading the swapped data", async () => {
		const mf = Masterfile.fromJson(FIXTURE);
		const fetcher = mock(async () => [FIXTURE[0]!] as MasterfileEntry[]);

		// Pre-refresh state.
		expect(mf.size).toBe(FIXTURE.length);

		// Refresh starts...
		const promise = mf.refresh({ fetcher });
		// ...and the old data is still visible until it resolves.
		expect(mf.size).toBe(FIXTURE.length);

		await promise;
		expect(mf.size).toBe(1);
	});
});
