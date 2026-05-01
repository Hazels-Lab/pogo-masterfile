/**
 * Iteration & search — every way to walk the masterfile.
 *
 * The pattern: top-level methods take wide-typed predicates; per-group
 * accessors take narrow-typed predicates so you can drill into the
 * group's payload without runtime type guards.
 */
import { describe, expect, test } from "bun:test";
import { Masterfile } from "../src/index.ts";
import { FIXTURE } from "./fixture.ts";

describe("Top-level iteration", () => {
	test("for…of over the masterfile yields every entry", () => {
		const mf = Masterfile.fromJson(FIXTURE);

		// Each `entry` is typed as `MasterfileEntry`.
		const ids: string[] = [];
		for (const entry of mf) {
			ids.push(entry.templateId);
		}
		expect(ids).toHaveLength(FIXTURE.length);
	});

	test("[...mf] spreads into an array", () => {
		const mf = Masterfile.fromJson(FIXTURE);
		const all = [...mf];
		expect(all).toHaveLength(FIXTURE.length);
	});

	test("Array.from(mf) works the same way", () => {
		const mf = Masterfile.fromJson(FIXTURE);
		const all = Array.from(mf);
		expect(all).toHaveLength(FIXTURE.length);
	});

	test("getAll() returns a readonly view", () => {
		const mf = Masterfile.fromJson(FIXTURE);
		const all = mf.getAll();
		expect(all).toHaveLength(FIXTURE.length);
		// Type is `readonly MasterfileEntry[]` — `.push(…)` would be a TS error.
	});
});

describe("Group introspection", () => {
	test("groups() lists every populated group", () => {
		const mf = Masterfile.fromJson(FIXTURE);
		const groups = mf.groups();
		// Type: `readonly GroupName[]`.
		expect(groups).toContain("moveSettings");
		expect(groups).toContain("pokemonSettings");
	});

	test("getGroup(name) — narrowed to the group's union", () => {
		const mf = Masterfile.fromJson(FIXTURE);

		// Type: `readonly MoveSettingsMasterfileEntry[]`.
		const moves = mf.getGroup("moveSettings");
		expect(moves).toHaveLength(1);

		// Empty groups return [] — no need to handle undefined.
		const empty = mf.getGroup("combatLeague");
		expect(empty).toEqual([]);
	});

	test("templateIds() — every ID across all groups", () => {
		const mf = Masterfile.fromJson(FIXTURE);

		// No-arg overload: `readonly string[]` (literal union over 18k IDs is
		// genuinely too large for TS to represent, so this falls back to wide).
		const all = mf.templateIds();
		expect(all).toHaveLength(FIXTURE.length);
	});

	test("templateIds(group) — narrow per-group", () => {
		const mf = Masterfile.fromJson(FIXTURE);

		// Type: `readonly MoveSettingsTemplateID[]` — narrow string union of
		// just the moveSettings IDs.
		const moveIds = mf.templateIds("moveSettings");
		expect(moveIds).toEqual(["V0022_MOVE_MEGAHORN"]);
	});
});

describe("Top-level search", () => {
	test("find — returns the first match (or undefined)", () => {
		const mf = Masterfile.fromJson(FIXTURE);

		// Predicate sees `MasterfileEntry`; you can read `.templateId` directly,
		// but drilling into `.data.<groupKey>` requires a runtime narrow.
		const found = mf.find((e) => e.templateId.startsWith("V0001_"));
		expect(found?.templateId).toBe("V0001_POKEMON_BULBASAUR");
	});

	test("filter — every match", () => {
		const mf = Masterfile.fromJson(FIXTURE);

		const items = mf.filter((e) => e.templateId.startsWith("ITEM_"));
		expect(items.map((e) => e.templateId).sort()).toEqual(["ITEM_POTION", "ITEM_SUPER_POTION"]);
	});

	test("findByPattern — regex over templateId", () => {
		const mf = Masterfile.fromJson(FIXTURE);

		const matches = mf.findByPattern(/^V\d+_/);
		expect(matches).toHaveLength(2);

		const items = mf.findByPattern(/^ITEM_/);
		expect(items).toHaveLength(2);
	});
});

describe("Per-group search", () => {
	test("accessor.find — predicate sees the group's narrow entry", () => {
		const mf = Masterfile.fromJson(FIXTURE);

		// Inside the predicate, `move.data.moveSettings` is typed against the
		// MoveSettings union — no runtime type guard needed to drill into it.
		// Field-level narrowing depends on the specific entry: `power` is
		// optional across the union, so we use `in` to test for it.
		const heavy = mf.moveSettings.find((move) => {
			const settings = move.data.moveSettings;
			return "power" in settings && (settings.power ?? 0) > 100;
		});
		expect(heavy?.templateId).toBe("V0022_MOVE_MEGAHORN");
	});

	test("accessor.filter — every match within the group", () => {
		const mf = Masterfile.fromJson(FIXTURE);

		const allItems = mf.itemSettings.filter(() => true);
		expect(allItems).toHaveLength(2);
	});

	test("accessor + map — composing with array methods", () => {
		const mf = Masterfile.fromJson(FIXTURE);

		// `.all()` returns a readonly array; spread-then-map is the simplest path.
		const itemIds = [...mf.itemSettings.all()].map((e) => e.templateId);
		expect(itemIds.sort()).toEqual(["ITEM_POTION", "ITEM_SUPER_POTION"]);
	});
});
