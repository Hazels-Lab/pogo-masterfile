import { describe, expect, test } from "bun:test";
import { MOCK_MASTERFILE } from "../fixtures.ts";
import { groupEntries } from "../group.ts";
import { emitGroupTemplateIdsFile, emitSingletonsTemplateIdsFile } from "./emit.ts";

describe("emitGroupTemplateIdsFile", () => {
	test("emits typed-string + const block + values slice for a group", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const typeEffective = groups.get("typeEffective")!;
		const out = emitGroupTemplateIdsFile(typeEffective);

		expect(out).toContain('// Generated from Pokémon GO masterfile — group "typeEffective" templateIds.');
		expect(out).toContain("package masterfile");
		expect(out).toContain("type TypeEffectiveTemplateID string");
		expect(out).toContain("const (");
		// Constants use the full PascalCase'd templateId as the suffix.
		expect(out).toContain("TypeEffectiveTemplateIDPokemonTypeBug");
		expect(out).toContain('TypeEffectiveTemplateID = "POKEMON_TYPE_BUG"');
		expect(out).toContain("TypeEffectiveTemplateIDPokemonTypeDark");
		expect(out).toContain('TypeEffectiveTemplateID = "POKEMON_TYPE_DARK"');
		expect(out).toContain("var TypeEffectiveTemplateIDValues = []TypeEffectiveTemplateID{");
	});
});

describe("emitSingletonsTemplateIdsFile", () => {
	test("emits one combined SingletonsTemplateID const block", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const singletons = [...groups.values()].filter((g) => g.entries.length === 1);
		const out = emitSingletonsTemplateIdsFile(singletons);

		expect(out).toContain('// Generated from Pokémon GO masterfile — singletons templateIds.');
		expect(out).toContain("type SingletonsTemplateID string");
		expect(out).toContain("var SingletonsTemplateIDValues = []SingletonsTemplateID{");
	});
});
