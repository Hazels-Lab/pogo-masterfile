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

describe("buildPromotionRegistry — collision resolution", () => {
	test("appends 'Id' when alias would collide with an existing group's interface name", () => {
		// "PokemonType" is the alias derived from prefix POKEMON_TYPE_; the colliding
		// group's discriminator is "pokemonType" → groupName "PokemonType".
		const groups = makeGroups(
			group("typeEffective", ["POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK"]),
			group("pokemonType", ["X_ONE", "X_TWO"]),
		);
		const byDisc = new Map(buildPromotionRegistry(groups).map((e) => [e.group.discriminator, e]));
		expect(byDisc.get("typeEffective")!.aliasName).toBe("PokemonTypeId");
	});

	test("appends pascalCase(disc) when two registry entries derive the same alias", () => {
		// Defensive: two groups with the same prefix → same alias; both get suffixed
		// with their pascal-cased discriminator.
		const groups = makeGroups(
			group("alphaTypes", ["X_ONE", "X_TWO"]),
			group("betaTypes", ["X_THREE", "X_FOUR"]),
		);
		const reg = buildPromotionRegistry(groups);
		const byDisc = new Map(reg.map((e) => [e.group.discriminator, e]));
		expect(byDisc.get("alphaTypes")!.aliasName).toBe("XAlphaTypes");
		expect(byDisc.get("betaTypes")!.aliasName).toBe("XBetaTypes");
	});
});

import { buildPromotionRegistry as build, tryPromote } from "./promoted-unions.ts";

describe("tryPromote — exact match", () => {
	const groups = makeGroups(group("typeEffective", ["POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK", "POKEMON_TYPE_FIRE"]));
	const registry = build(groups);

	test("returns a 'ref' result when inline equals members", () => {
		const inline = new Set(["POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK", "POKEMON_TYPE_FIRE"]);
		const result = tryPromote(inline, registry, null);
		expect(result).toEqual({
			kind: "ref",
			aliasName: "PokemonType",
			sourceGroup: registry[0]!.group,
		});
	});

	test("returns null for a single-element inline union", () => {
		expect(tryPromote(new Set(["POKEMON_TYPE_BUG"]), registry, null)).toBeNull();
	});

	test("returns null for an empty inline union", () => {
		expect(tryPromote(new Set(), registry, null)).toBeNull();
	});

	test("returns null when inline contains a value not in any registered set", () => {
		const inline = new Set(["POKEMON_TYPE_BUG", "POKEMON_TYPE_NOT_REAL"]);
		expect(tryPromote(inline, registry, null)).toBeNull();
	});

	test("does not promote when currentGroup is the source group (self-reference guard)", () => {
		const inline = new Set(["POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK", "POKEMON_TYPE_FIRE"]);
		expect(tryPromote(inline, registry, registry[0]!.group)).toBeNull();
	});
});

describe("tryPromote — Exclude path", () => {
	// Build an 8-member group so the delta math is unambiguous: 25% of 8 = 2 missing max.
	const groups = makeGroups(
		group("k8", [
			"K_AAA",
			"K_BBB",
			"K_CCC",
			"K_DDD",
			"K_EEE",
			"K_FFF",
			"K_GGG",
			"K_HHH",
		]),
	);
	const registry = build(groups);

	test("returns 'exclude' when missing fraction is at the boundary (2 of 8 missing)", () => {
		const inline = new Set(["K_AAA", "K_BBB", "K_CCC", "K_DDD", "K_EEE", "K_FFF"]);
		const result = tryPromote(inline, registry, null);
		expect(result).toEqual({
			kind: "exclude",
			aliasName: "K",
			missing: ["K_GGG", "K_HHH"],
			sourceGroup: registry[0]!.group,
		});
	});

	test("returns 'exclude' when only one member is missing", () => {
		const inline = new Set(["K_AAA", "K_BBB", "K_CCC", "K_DDD", "K_EEE", "K_FFF", "K_GGG"]);
		const result = tryPromote(inline, registry, null);
		expect(result).toMatchObject({ kind: "exclude", missing: ["K_HHH"] });
	});

	test("returns null when missing fraction is just over the ratio (3 of 8 missing = 0.375)", () => {
		const inline = new Set(["K_AAA", "K_BBB", "K_CCC", "K_DDD", "K_EEE"]);
		expect(tryPromote(inline, registry, null)).toBeNull();
	});

	test("missing list is sorted alphabetically", () => {
		const inline = new Set(["K_AAA", "K_BBB", "K_CCC", "K_DDD", "K_EEE", "K_FFF"]);
		const result = tryPromote(inline, registry, null);
		// HHH > GGG; the missing list must be lexicographically sorted regardless
		// of insertion order in the source.
		expect((result as { missing: string[] }).missing).toEqual(["K_GGG", "K_HHH"]);
	});
});

describe("tryPromote — multi-match resolution", () => {
	// Two groups whose member sets overlap. Inline = {X_A, X_B} matches both.
	// Smallest containing group wins; alphabetical aliasName tiebreak.
	// Both groups derive aliasName "X" from prefix "X_"; alias-vs-alias collision
	// resolution (Task 3) suffixes each with pascalCase(disc), giving "XAlpha" and
	// "XAaSuper".
	const groups = makeGroups(
		group("alpha", ["X_A", "X_B"]),
		group("aaSuper", ["X_A", "X_B", "X_C", "X_D"]),
	);
	const registry = build(groups);

	test("smallest containing group wins on exact match", () => {
		const inline = new Set(["X_A", "X_B"]);
		const result = tryPromote(inline, registry, null);
		expect(result).toMatchObject({ kind: "ref", aliasName: "XAlpha" });
		expect((result as { sourceGroup: Group }).sourceGroup.discriminator).toBe("alpha");
	});

	test("falls back to the larger group when the smaller is not a containing set", () => {
		const inline = new Set(["X_A", "X_B", "X_C", "X_D"]);
		const result = tryPromote(inline, registry, null);
		expect(result).toMatchObject({ kind: "ref", aliasName: "XAaSuper" });
		expect((result as { sourceGroup: Group }).sourceGroup.discriminator).toBe("aaSuper");
	});
});

import { inferredToType } from "./builder.ts";
import type { PromotionContext } from "./promoted-unions.ts";
import ts from "typescript";

function printNode(node: ts.TypeNode): string {
	const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
	const file = ts.createSourceFile("t.ts", "", ts.ScriptTarget.Latest, false);
	return printer.printNode(ts.EmitHint.Unspecified, node, file);
}

describe("inferredToType — promotion via ctx", () => {
	const groups = makeGroups(group("typeEffective", ["POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK", "POKEMON_TYPE_FIRE"]));
	const registry = build(groups);

	test("rewrites an exact-match string union to a type reference", () => {
		const ctx: PromotionContext = { registry, currentGroup: null, imports: new Map() };
		const node = inferredToType(
			{ kind: "string", literals: ["POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK", "POKEMON_TYPE_FIRE"] },
			ctx,
		);
		expect(printNode(node)).toBe("PokemonType");
		expect(ctx.imports.get("typeEffective")).toEqual(new Set(["PokemonType"]));
	});

	test("rewrites a near-exact union to an Exclude<> expression", () => {
		// 8-entry registry: 6 inline = 2 missing = 25% (at the default boundary).
		// Note: discriminator "foo" → groupName "Foo" collides with the alias derived
		// from prefix "FOO_", so collision resolution appends "Id" → "FooId".
		const fooGroups = makeGroups(group("foo", ["FOO_A", "FOO_B", "FOO_C", "FOO_D", "FOO_E", "FOO_F", "FOO_G", "FOO_H"]));
		const fooRegistry = build(fooGroups);
		const ctx: PromotionContext = { registry: fooRegistry, currentGroup: null, imports: new Map() };
		const node = inferredToType({ kind: "string", literals: ["FOO_A", "FOO_B", "FOO_C", "FOO_D", "FOO_E", "FOO_F"] }, ctx);
		expect(printNode(node)).toBe(`Exclude<FooId, "FOO_G" | "FOO_H">`);
		expect(ctx.imports.get("foo")).toEqual(new Set(["FooId"]));
	});

	test("leaves the union inline when missing fraction exceeds the delta ratio", () => {
		const ctx: PromotionContext = { registry, currentGroup: null, imports: new Map() };
		const node = inferredToType({ kind: "string", literals: ["POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK"] }, ctx);
		// 1 of 3 missing = 33%; default ratio 0.25 → no promotion.
		expect(printNode(node)).toContain(`"POKEMON_TYPE_BUG"`);
		expect(printNode(node)).toContain(`"POKEMON_TYPE_DARK"`);
		expect(ctx.imports.size).toBe(0);
	});

	test("leaves the node unchanged when no ctx is supplied", () => {
		const node = inferredToType({ kind: "string", literals: ["POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK", "POKEMON_TYPE_FIRE"] });
		// No ctx → no promotion, regardless of registry.
		expect(printNode(node)).toContain(`"POKEMON_TYPE_BUG"`);
		expect(printNode(node)).not.toBe("PokemonType");
	});

	test("does not promote when currentGroup is the source group", () => {
		const ctx: PromotionContext = { registry, currentGroup: registry[0]!.group, imports: new Map() };
		const node = inferredToType(
			{ kind: "string", literals: ["POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK", "POKEMON_TYPE_FIRE"] },
			ctx,
		);
		expect(printNode(node)).not.toBe("PokemonType");
		expect(ctx.imports.size).toBe(0);
	});
});
