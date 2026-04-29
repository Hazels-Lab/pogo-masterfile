import { describe, expect, test } from "bun:test";
import type { Group } from "./group.ts";
import { buildPromotionRegistry } from "./promoted-unions.ts";

function group(disc: string, ids: string[]): Group {
	return {
		discriminator: disc,
		entries: ids.map((id) => ({ templateId: id, data: { templateId: id, [disc]: {} } })),
	};
}

function makeGroups(...gs: Group[]): Map<string, Group> {
	return new Map(gs.map((g) => [g.discriminator, g]));
}

describe("buildPromotionRegistry — eligibility", () => {
	test("registers a group with >= 2 entries and a non-empty shared prefix", () => {
		const groups = makeGroups(group("typeEffective", ["POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK"]));
		const registry = buildPromotionRegistry(groups);
		expect(registry).toHaveLength(1);
		expect(registry[0]!.aliasName).toBe("PokemonType");
		expect(registry[0]!.members).toEqual(["POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK"]);
	});

	test("skips a single-entry group (sharedPrefix returns empty for size < 2)", () => {
		const groups = makeGroups(group("singleton", ["JUST_ONE"]));
		expect(buildPromotionRegistry(groups)).toHaveLength(0);
	});

	test("skips a group whose templateIds have no underscore-aligned shared prefix", () => {
		const groups = makeGroups(group("pokemonSettings", ["V0001_POKEMON_BULBASAUR", "V0002_POKEMON_IVYSAUR"]));
		expect(buildPromotionRegistry(groups)).toHaveLength(0);
	});
});

describe("buildPromotionRegistry — naming rule", () => {
	test("strips trailing underscores and PascalCases the prefix", () => {
		const groups = makeGroups(
			group("typeEffective", ["POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK"]),
			group("weatherAffinities", ["WEATHER_AFFINITY_CLEAR", "WEATHER_AFFINITY_RAIN"]),
			group("combatType", ["COMBAT_POKEMON_TYPE_BUG", "COMBAT_POKEMON_TYPE_DARK"]),
		);
		const byDisc = new Map(buildPromotionRegistry(groups).map((e) => [e.group.discriminator, e]));
		expect(byDisc.get("typeEffective")!.aliasName).toBe("PokemonType");
		expect(byDisc.get("weatherAffinities")!.aliasName).toBe("WeatherAffinity");
		expect(byDisc.get("combatType")!.aliasName).toBe("CombatPokemonType");
	});

	test("members are sorted alphabetically", () => {
		const groups = makeGroups(group("typeEffective", ["POKEMON_TYPE_WATER", "POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK"]));
		expect(buildPromotionRegistry(groups)[0]!.members).toEqual(["POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK", "POKEMON_TYPE_WATER"]);
	});

	test("registry entries are sorted by aliasName for determinism", () => {
		const groups = makeGroups(
			group("weatherAffinities", ["WEATHER_AFFINITY_CLEAR", "WEATHER_AFFINITY_RAIN"]),
			group("typeEffective", ["POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK"]),
			group("combatType", ["COMBAT_POKEMON_TYPE_BUG", "COMBAT_POKEMON_TYPE_DARK"]),
		);
		const names = buildPromotionRegistry(groups).map((e) => e.aliasName);
		expect(names).toEqual(["CombatPokemonType", "PokemonType", "WeatherAffinity"]);
	});
});
