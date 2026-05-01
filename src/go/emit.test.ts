import { describe, expect, test } from "bun:test";
import { MOCK_MASTERFILE } from "../fixtures.ts";
import { groupEntries } from "../group.ts";
import { emitGroupModule, emitGroupTemplateIdsFile, emitMasterfileFile, emitSingletonsModule, emitSingletonsTemplateIdsFile } from "./emit.ts";

describe("emitGroupTemplateIdsFile", () => {
	test("emits typed-string + const block + values slice for a group", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const typeEffective = groups.get("typeEffective")!;
		const out = emitGroupTemplateIdsFile(typeEffective, "masterfile");

		expect(out).toContain('// Generated from Pokémon GO masterfile — group "typeEffective" templateIds.');
		expect(out).toContain("package masterfile");
		expect(out).toContain("type TypeEffectiveTemplateID string");
		expect(out).toContain("const (");
		// Constants use the full PascalCase'd templateId as the suffix.
		expect(out).toContain("TypeEffectiveTemplateIDPokemonTypeBug");
		expect(out).toContain('TypeEffectiveTemplateID = "POKEMON_TYPE_BUG"');
		expect(out).toContain("TypeEffectiveTemplateIDPokemonTypeDark");
		expect(out).toContain('TypeEffectiveTemplateID = "POKEMON_TYPE_DARK"');
		expect(out).toContain("var TypeEffectiveTemplateIDValues = [...]TypeEffectiveTemplateID{");
	});
});

describe("emitSingletonsTemplateIdsFile", () => {
	test("emits one combined SingletonsTemplateID const block", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const singletons = [...groups.values()].filter((g) => g.entries.length === 1);
		const out = emitSingletonsTemplateIdsFile(singletons, "masterfile");

		expect(out).toContain("// Generated from Pokémon GO masterfile — singletons templateIds.");
		expect(out).toContain("type SingletonsTemplateID string");
		expect(out).toContain("var SingletonsTemplateIDValues = [...]SingletonsTemplateID{");
	});
});

describe("emitMasterfileFile cross-package dispatch", () => {
	test("imports each sub-package and qualifies type references", () => {
		const variants = [
			{
				variantName: "BadgeSettings",
				entryTypeName: "BadgeSettingsEntry",
				isStub: false,
				discriminator: "badgeSettings",
				entryCount: 869,
				modulePath: "badge_settings",
			},
			{
				variantName: "AccessibilitySettings",
				entryTypeName: "AccessibilitySettingsEntry",
				isStub: false,
				discriminator: "accessibilitySettings",
				entryCount: 1,
				modulePath: "singletons",
			},
		];
		const out = emitMasterfileFile(variants, "github.com/example/pkg/packages/go");
		expect(out).toContain(`"github.com/example/pkg/packages/go/badge_settings"`);
		expect(out).toContain(`"github.com/example/pkg/packages/go/singletons"`);
		expect(out).toContain("var e badge_settings.BadgeSettingsEntry");
		expect(out).toContain("var e singletons.AccessibilitySettingsEntry");
		expect(out).toContain("MasterfileEntry()");
		expect(out).not.toContain("isMasterfileEntry()");
	});

	test("deduplicates sub-package imports when many groups share the same path", () => {
		const variants = [
			{
				variantName: "AccessibilitySettings",
				entryTypeName: "AccessibilitySettingsEntry",
				isStub: false,
				discriminator: "accessibilitySettings",
				entryCount: 1,
				modulePath: "singletons",
			},
			{
				variantName: "AdditiveSceneSettings",
				entryTypeName: "AdditiveSceneSettingsEntry",
				isStub: false,
				discriminator: "additiveSceneSettings",
				entryCount: 1,
				modulePath: "singletons",
			},
		];
		const out = emitMasterfileFile(variants, "github.com/example/pkg/packages/go");
		const matches = out.match(/"github\.com\/example\/pkg\/packages\/go\/singletons"/g) ?? [];
		expect(matches.length).toBe(1);
	});
});

describe("packageName parameter", () => {
	test("emitGroupModule honors packageName", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const typeEffective = groups.get("typeEffective")!;
		const out = emitGroupModule(typeEffective, "type_effective");
		expect(out).toContain("package type_effective");
		expect(out).not.toContain("package masterfile");
	});

	test("emitGroupTemplateIdsFile honors packageName", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const typeEffective = groups.get("typeEffective")!;
		const out = emitGroupTemplateIdsFile(typeEffective, "type_effective");
		expect(out).toContain("package type_effective");
		expect(out).not.toContain("package masterfile");
	});

	test("emitSingletonsModule honors packageName", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const accessibility = groups.get("accessibilitySettings")!;
		const out = emitSingletonsModule([accessibility], "singletons");
		expect(out).toContain("package singletons");
		expect(out).not.toContain("package masterfile");
	});

	test("emitSingletonsTemplateIdsFile honors packageName", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const accessibility = groups.get("accessibilitySettings")!;
		const out = emitSingletonsTemplateIdsFile([accessibility], "singletons");
		expect(out).toContain("package singletons");
		expect(out).not.toContain("package masterfile");
	});
});

describe("entryWrapper marker method", () => {
	test("uses exported MasterfileEntry marker", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const typeEffective = groups.get("typeEffective")!;
		const out = emitGroupModule(typeEffective, "masterfile");
		expect(out).toContain("func (TypeEffectiveEntry) MasterfileEntry() {}");
		expect(out).not.toContain("isMasterfileEntry");
	});

	test("singletons wrappers use the exported marker too", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const accessibility = groups.get("accessibilitySettings")!;
		const out = emitSingletonsModule([accessibility], "masterfile");
		expect(out).toContain("func (AccessibilitySettingsEntry) MasterfileEntry() {}");
		expect(out).not.toContain("isMasterfileEntry");
	});
});
