import { describe, expect, test } from "bun:test";
import { aliasSuffix, deriveGroupAliases, groupName, sharedPrefix } from "./naming.ts";

describe("groupName", () => {
	test("PascalCases a camelCase discriminator", () => {
		expect(groupName("typeEffective")).toBe("TypeEffective");
		expect(groupName("pokemonSettings")).toBe("PokemonSettings");
		expect(groupName("accessibilitySettings")).toBe("AccessibilitySettings");
	});
});

describe("sharedPrefix", () => {
	test("returns longest common prefix truncated to last underscore", () => {
		expect(sharedPrefix(["POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK"])).toBe("POKEMON_TYPE_");
	});

	test("returns empty string when no underscore boundary exists", () => {
		// "V0001_POKEMON_BULBASAUR" / "V0002_POKEMON_IVYSAUR" share only "V" — no underscore.
		expect(sharedPrefix(["V0001_POKEMON_BULBASAUR", "V0002_POKEMON_IVYSAUR"])).toBe("");
	});

	test("returns empty string for single-element input", () => {
		expect(sharedPrefix(["ONE_ID"])).toBe("");
	});

	test("returns empty string for empty input", () => {
		expect(sharedPrefix([])).toBe("");
	});

	test("handles case where one id is a full prefix of another", () => {
		// Common prefix is "POKEMON_BULBASAUR" (no trailing _), truncate to last _ → "POKEMON_"
		expect(sharedPrefix(["POKEMON_BULBASAUR", "POKEMON_BULBASAUR_SHINY"])).toBe("POKEMON_");
	});
});

describe("aliasSuffix", () => {
	test("strips prefix and PascalCases the remainder", () => {
		expect(aliasSuffix("POKEMON_TYPE_BUG", "POKEMON_TYPE_")).toBe("Bug");
		expect(aliasSuffix("POKEMON_TYPE_DRAGON", "POKEMON_TYPE_")).toBe("Dragon");
	});

	test("PascalCases mixed-case templateIds", () => {
		expect(aliasSuffix("AVATAR_f_backpack_one", "AVATAR_")).toBe("FBackpackOne");
	});

	test("returns Root when suffix would be empty", () => {
		expect(aliasSuffix("PREFIX_", "PREFIX_")).toBe("Root");
	});

	test("falls back to whole id when no prefix stripped", () => {
		expect(aliasSuffix("V0001_POKEMON_BULBASAUR", "")).toBe("V0001PokemonBulbasaur");
	});

	test("handles all-lowercase tails", () => {
		expect(aliasSuffix("x_foo_bar_baz", "x_")).toBe("FooBarBaz");
	});
});

describe("deriveGroupAliases", () => {
	test("returns a map from templateId to clean alias suffix when no collisions", () => {
		const map = deriveGroupAliases(["POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK"]);
		expect(map.get("POKEMON_TYPE_BUG")).toBe("Bug");
		expect(map.get("POKEMON_TYPE_DARK")).toBe("Dark");
	});

	test("collision fallback does not disturb non-colliding entries", () => {
		const map = deriveGroupAliases(["PREFIX_ALPHA", "PREFIX_BETA", "PREFIX_GAMMA"]);
		expect(map.get("PREFIX_ALPHA")).toBe("Alpha");
		expect(map.get("PREFIX_BETA")).toBe("Beta");
		expect(map.get("PREFIX_GAMMA")).toBe("Gamma");
	});

	test("breaks further ties with a numeric suffix in lexicographic order", () => {
		const map = deriveGroupAliases(["COLLIDE_FOO", "COLLIDE_bar", "COLLIDE_foo"]);
		expect(map.get("COLLIDE_bar")).toBe("Bar"); // no collision → clean suffix
		// COLLIDE_FOO vs COLLIDE_foo → both yield CollideFoo; tie-break lexicographically.
		expect(map.get("COLLIDE_FOO")).toBe("CollideFoo0");
		expect(map.get("COLLIDE_foo")).toBe("CollideFoo1");
	});
});
