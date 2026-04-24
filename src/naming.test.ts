import { describe, expect, test } from "bun:test";
import { groupName } from "./naming.ts";

describe("groupName", () => {
	test("PascalCases a camelCase discriminator", () => {
		expect(groupName("typeEffective")).toBe("TypeEffective");
		expect(groupName("pokemonSettings")).toBe("PokemonSettings");
		expect(groupName("accessibilitySettings")).toBe("AccessibilitySettings");
	});
});
