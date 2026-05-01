import { describe, expect, test } from "bun:test";
import { aliasSuffix, deriveGroupAliases, deriveTemplateIdVariants, groupName, sharedPrefix, snakeCase, stripGroupNameTail } from "./naming.ts";

describe("snakeCase", () => {
	test("converts camelCase", () => {
		expect(snakeCase("displayStringId")).toBe("display_string_id");
		expect(snakeCase("pokemonSettings")).toBe("pokemon_settings");
	});

	test("converts SCREAMING_SNAKE_CASE", () => {
		expect(snakeCase("BACKGROUND_MODES_SETTINGS")).toBe("background_modes_settings");
	});

	test("converts PascalCase", () => {
		expect(snakeCase("FormSettings")).toBe("form_settings");
	});

	test("collapses repeated separators and trims", () => {
		expect(snakeCase("__foo__bar__")).toBe("foo_bar");
	});

	test("separates uppercase-run before PascalWord (acronym boundary)", () => {
		expect(snakeCase("maxStoneACount")).toBe("max_stone_a_count");
		expect(snakeCase("parseHTMLDocument")).toBe("parse_html_document");
		expect(snakeCase("ARSettings")).toBe("ar_settings");
	});
});

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

describe("stripGroupNameTail", () => {
	test("strips a trailing PascalCase token sequence equal to the group name", () => {
		expect(stripGroupNameTail("AndroidSensorsRollBack", "RollBack")).toBe("AndroidSensors");
		expect(stripGroupNameTail("BidirectionalFpWeeklyChallengeRewardRollBack", "RollBack")).toBe("BidirectionalFpWeeklyChallengeReward");
	});

	test("does not strip when the tail does not match the group name", () => {
		expect(stripGroupNameTail("Bug", "TypeEffective")).toBe("Bug");
		expect(stripGroupNameTail("AndroidSensors", "RollBack")).toBe("AndroidSensors");
	});

	test("does not strip a partial group-name match (must be at PascalCase boundary)", () => {
		// "XSettings" ends with "Settings" but not the full "MoveSettings" group.
		// Stripping just "Settings" would lose information.
		expect(stripGroupNameTail("XSettings", "MoveSettings")).toBe("XSettings");
	});

	test("does not strip when the trailing tokens only partially overlap the group name", () => {
		// "MoveBack" ends in "Back" but the group name is "RollBack" (two tokens).
		// "Move" is not "Roll", so no strip.
		expect(stripGroupNameTail("MoveBack", "RollBack")).toBe("MoveBack");
	});

	test("returns the original suffix when stripping would leave it empty", () => {
		expect(stripGroupNameTail("RollBack", "RollBack")).toBe("RollBack");
	});

	test("strips when group name is a single token", () => {
		expect(stripGroupNameTail("FooBar", "Bar")).toBe("Foo");
	});

	test("returns the suffix unchanged when group name is empty", () => {
		expect(stripGroupNameTail("AndroidSensorsRollBack", "")).toBe("AndroidSensorsRollBack");
	});
});

describe("deriveGroupAliases", () => {
	test("returns a map from templateId to clean alias suffix when no collisions", () => {
		const map = deriveGroupAliases(["POKEMON_TYPE_BUG", "POKEMON_TYPE_DARK"], "TypeEffective");
		expect(map.get("POKEMON_TYPE_BUG")).toBe("Bug");
		expect(map.get("POKEMON_TYPE_DARK")).toBe("Dark");
	});

	test("collision fallback does not disturb non-colliding entries", () => {
		const map = deriveGroupAliases(["PREFIX_ALPHA", "PREFIX_BETA", "PREFIX_GAMMA"], "PrefixGroup");
		expect(map.get("PREFIX_ALPHA")).toBe("Alpha");
		expect(map.get("PREFIX_BETA")).toBe("Beta");
		expect(map.get("PREFIX_GAMMA")).toBe("Gamma");
	});

	test("breaks further ties with a numeric suffix in natural sort order", () => {
		const map = deriveGroupAliases(["COLLIDE_FOO", "COLLIDE_bar", "COLLIDE_foo"], "CollisionTest");
		expect(map.get("COLLIDE_bar")).toBe("Bar"); // no collision → clean suffix
		// COLLIDE_FOO vs COLLIDE_foo → both yield CollideFoo; tie-break by Intl.Collator
		// (`compareNatural`), which sorts lowercase before uppercase under default English collation.
		expect(map.get("COLLIDE_foo")).toBe("CollideFoo0");
		expect(map.get("COLLIDE_FOO")).toBe("CollideFoo1");
	});

	test("strips redundant trailing group name from each suffix", () => {
		const map = deriveGroupAliases(["ANDROID_SENSORS_ROLL_BACK", "BIDIRECTIONAL_FP_WEEKLY_CHALLENGE_REWARD_ROLL_BACK"], "RollBack");
		expect(map.get("ANDROID_SENSORS_ROLL_BACK")).toBe("AndroidSensors");
		expect(map.get("BIDIRECTIONAL_FP_WEEKLY_CHALLENGE_REWARD_ROLL_BACK")).toBe("BidirectionalFpWeeklyChallengeReward");
	});

	test("falls back to the original suffix when stripping would empty it", () => {
		const map = deriveGroupAliases(["ROLL_BACK"], "RollBack");
		// Single id → no shared prefix → suffix is "RollBack" → strip would empty → fallback.
		expect(map.get("ROLL_BACK")).toBe("RollBack");
	});
});

describe("deriveTemplateIdVariants", () => {
	test("returns full PascalCase'd templateId as variant name", () => {
		const ids = ["BADGE_7_DAY_STREAKS", "BADGE_BATTLE_ATTACK_WON", "BADGE_BERRIES_FED"];
		const result = deriveTemplateIdVariants(ids);
		expect(result.get("BADGE_7_DAY_STREAKS")).toBe("Badge7DayStreaks");
		expect(result.get("BADGE_BATTLE_ATTACK_WON")).toBe("BadgeBattleAttackWon");
		expect(result.get("BADGE_BERRIES_FED")).toBe("BadgeBerriesFed");
	});

	test("preserves leading-V identifiers (versioned templateIds)", () => {
		const ids = ["V0001_POKEMON_BULBASAUR", "V0002_POKEMON_IVYSAUR"];
		const result = deriveTemplateIdVariants(ids);
		expect(result.get("V0001_POKEMON_BULBASAUR")).toBe("V0001PokemonBulbasaur");
		expect(result.get("V0002_POKEMON_IVYSAUR")).toBe("V0002PokemonIvysaur");
	});

	test("appends an underscore to reserved-word collisions", () => {
		const ids = ["SELF", "OTHER"];
		const result = deriveTemplateIdVariants(ids);
		expect(result.get("SELF")).toBe("Self_");
		expect(result.get("OTHER")).toBe("Other");
	});

	test("works for singletons (full PascalCase, no special handling)", () => {
		const ids = ["ACCESSIBILITY_CLIENT_SETTINGS", "ADDITIVE_SCENE_SETTINGS"];
		const result = deriveTemplateIdVariants(ids);
		expect(result.get("ACCESSIBILITY_CLIENT_SETTINGS")).toBe("AccessibilityClientSettings");
		expect(result.get("ADDITIVE_SCENE_SETTINGS")).toBe("AdditiveSceneSettings");
	});
});
