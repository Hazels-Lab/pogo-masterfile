import { describe, expect, test } from "bun:test";
import {
	emitGroupFile,
	emitIndexFile,
	emitMiscFile,
	kebabCase,
} from "./emit.ts";
import { MOCK_MASTERFILE } from "./fixtures.ts";
import type { Group } from "./group.ts";
import { groupEntries } from "./group.ts";

describe("emitGroupFile", () => {
	test("emits generic interface + per-entry aliases + union + TemplateID for a multi-entry group", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;

		const output = emitGroupFile(group);

		expect(output).toContain(
			"export interface TypeEffective<T extends string> {",
		);
		expect(output).toContain("data: TypeEffectiveData<T>;");
		expect(output).toContain(
			"export interface TypeEffectiveData<T extends string> {",
		);
		expect(output).toContain("typeEffective: {");
		expect(output).toContain("attackScalar: [");
		expect(output).toContain("attackType: T;");
		expect(output).not.toContain(
			`attackType: "POKEMON_TYPE_BUG" | "POKEMON_TYPE_DARK";`,
		);
		expect(output).not.toContain("typeEffective: unknown;");
		expect(output).toContain(
			'export type TypeEffectiveBug = TypeEffective<"POKEMON_TYPE_BUG">;',
		);
		expect(output).toContain(
			'export type TypeEffectiveDark = TypeEffective<"POKEMON_TYPE_DARK">;',
		);
		expect(output).toContain("export type TypeEffectiveMasterfileEntry =");
		expect(output).toContain("| TypeEffectiveBug");
		expect(output).toContain("| TypeEffectiveDark");
		expect(output).toContain(
			'export type TypeEffectiveTemplateID = TypeEffectiveMasterfileEntry["templateId"];',
		);
	});

	test("sorts per-entry aliases by templateId lexicographically", () => {
		const group: Group = {
			discriminator: "typeEffective",
			entries: [
				{
					templateId: "POKEMON_TYPE_WATER",
					data: { templateId: "POKEMON_TYPE_WATER", typeEffective: {} },
				},
				{
					templateId: "POKEMON_TYPE_BUG",
					data: { templateId: "POKEMON_TYPE_BUG", typeEffective: {} },
				},
			],
		};

		const output = emitGroupFile(group);
		const bugIdx = output.indexOf("TypeEffectiveBug");
		const waterIdx = output.indexOf("TypeEffectiveWater");
		expect(bugIdx).toBeGreaterThan(-1);
		expect(waterIdx).toBeGreaterThan(-1);
		expect(bugIdx).toBeLessThan(waterIdx);
	});

	test("renders variable arrays and optional nested properties from inferred group payloads", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("pokemonSettings")!;

		const output = emitGroupFile(group);

		expect(output).toContain(`forms: Array<"NORMAL" | "SHADOW">;`);
		expect(output).toContain(`familyId: "FAMILY_BULBASAUR";`);
		expect(output).toContain("shadowBoost?: null;");
		expect(output).not.toContain(": unknown;");
	});
});

describe("emitMiscFile", () => {
	test("emits a concrete interface (not generic) per singleton group, sorted by interface name", () => {
		const singletons: Group[] = [
			{
				discriminator: "xyzSettings",
				entries: [
					{
						templateId: "XYZ_SETTINGS",
						data: { templateId: "XYZ_SETTINGS", xyzSettings: {} },
					},
				],
			},
			{
				discriminator: "accessibilitySettings",
				entries: [
					{
						templateId: "ACCESSIBILITY_CLIENT_SETTINGS",
						data: {
							templateId: "ACCESSIBILITY_CLIENT_SETTINGS",
							accessibilitySettings: {},
						},
					},
				],
			},
		];

		const output = emitMiscFile(singletons);
		expect(output).toContain("export interface AccessibilitySettings {");
		expect(output).toContain('templateId: "ACCESSIBILITY_CLIENT_SETTINGS";');
		expect(output).toContain("accessibilitySettings: Record<string, never>;");
		expect(output).toContain("export interface XyzSettings {");

		// Alphabetical order:
		const aIdx = output.indexOf("AccessibilitySettings");
		const xIdx = output.indexOf("XyzSettings");
		expect(aIdx).toBeLessThan(xIdx);
	});

	test("emits stub interfaces without the discriminator field when data has only templateId", () => {
		const stubs: Group[] = [
			{
				discriminator: "ITEM_CURRENCY_VALUES",
				entries: [
					{
						templateId: "ITEM_CURRENCY_VALUES",
						data: { templateId: "ITEM_CURRENCY_VALUES" },
					},
				],
			},
		];

		const output = emitMiscFile(stubs);
		expect(output).toContain("export interface ItemCurrencyValues {");
		expect(output).toContain('templateId: "ITEM_CURRENCY_VALUES";');
		expect(output).not.toContain(": unknown;");
	});

	test("emits inferred singleton payloads with exact scalar literals", () => {
		const accessibility = groupEntries(MOCK_MASTERFILE).get(
			"accessibilitySettings",
		)!;

		const output = emitMiscFile([accessibility]);

		expect(output).toContain("accessibilitySettings: {");
		expect(output).toContain("enabled: true;");
		expect(output).toContain(`mode: "default";`);
		expect(output).toContain("scale: 1;");
		expect(output).not.toContain(": unknown;");
	});

	test("sorts stubs and regular singletons together by interface name", () => {
		const mixed: Group[] = [
			{
				discriminator: "xyzSettings",
				entries: [
					{
						templateId: "XYZ_SETTINGS",
						data: { templateId: "XYZ_SETTINGS", xyzSettings: {} },
					},
				],
			},
			{
				discriminator: "ITEM_CURRENCY_VALUES",
				entries: [
					{
						templateId: "ITEM_CURRENCY_VALUES",
						data: { templateId: "ITEM_CURRENCY_VALUES" },
					},
				],
			},
		];

		const output = emitMiscFile(mixed);
		// ItemCurrencyValues (stub, 'I') sorts before XyzSettings (regular, 'X')
		const itemIdx = output.indexOf("ItemCurrencyValues");
		const xyzIdx = output.indexOf("XyzSettings");
		expect(itemIdx).toBeLessThan(xyzIdx);
	});

	test("emits MiscMasterfileEntry union + MiscTemplateID alias at the end, sorted", () => {
		const mixed: Group[] = [
			{
				discriminator: "xyzSettings",
				entries: [
					{
						templateId: "XYZ_SETTINGS",
						data: { templateId: "XYZ_SETTINGS", xyzSettings: {} },
					},
				],
			},
			{
				discriminator: "accessibilitySettings",
				entries: [
					{
						templateId: "ACCESSIBILITY_CLIENT_SETTINGS",
						data: {
							templateId: "ACCESSIBILITY_CLIENT_SETTINGS",
							accessibilitySettings: {},
						},
					},
				],
			},
		];

		const output = emitMiscFile(mixed);
		expect(output).toContain("export type MiscMasterfileEntry =");
		expect(output).toContain("| AccessibilitySettings");
		expect(output).toContain("| XyzSettings;");
		expect(output).toContain(
			`export type MiscTemplateID = MiscMasterfileEntry["templateId"];`,
		);

		// Union members follow the interface definitions
		const lastInterfaceIdx = output.lastIndexOf("export interface");
		const unionIdx = output.indexOf("export type MiscMasterfileEntry");
		expect(unionIdx).toBeGreaterThan(lastInterfaceIdx);
	});

	test("emits MiscMasterfileEntry = never when there are no singletons", () => {
		const output = emitMiscFile([]);
		expect(output).toContain("export type MiscMasterfileEntry = never;");
		expect(output).toContain(
			`export type MiscTemplateID = MiscMasterfileEntry["templateId"];`,
		);
	});
});

describe("kebabCase", () => {
	test("converts camelCase to kebab-case", () => {
		expect(kebabCase("typeEffective")).toBe("type-effective");
		expect(kebabCase("pokemonSettings")).toBe("pokemon-settings");
		expect(kebabCase("iapItemDisplay")).toBe("iap-item-display");
	});

	test("passes through all-lowercase strings unchanged", () => {
		expect(kebabCase("misc")).toBe("misc");
	});
});

describe("emitIndexFile", () => {
	test("re-exports groups (kebab-case filenames) + misc, defines MasterfileEntry union + MasterfileTemplateID", () => {
		const multiEntryGroupNames = ["typeEffective", "pokemonSettings"];
		const output = emitIndexFile(multiEntryGroupNames);

		// Exports are sorted:
		expect(output).toContain(
			`export type * from "./groups/pokemon-settings.ts";`,
		);
		expect(output).toContain(
			`export type * from "./groups/type-effective.ts";`,
		);
		expect(output).toContain(`export type * from "./groups/misc.ts";`);
		const pokeIdx = output.indexOf("pokemon-settings");
		const typeIdx = output.indexOf("type-effective");
		expect(pokeIdx).toBeLessThan(typeIdx);

		// Imports for the global union:
		expect(output).toContain(
			`import type { PokemonSettingsMasterfileEntry } from "./groups/pokemon-settings.ts";`,
		);
		expect(output).toContain(
			`import type { TypeEffectiveMasterfileEntry } from "./groups/type-effective.ts";`,
		);

		// Global union and TemplateID alias:
		expect(output).toContain("export type MasterfileEntry =");
		expect(output).toContain("| PokemonSettingsMasterfileEntry");
		expect(output).toContain("| TypeEffectiveMasterfileEntry");
		expect(output).toContain(
			`export type MasterfileTemplateID = MasterfileEntry["templateId"];`,
		);
	});

	test("imports MiscMasterfileEntry and includes it at the end of the MasterfileEntry union", () => {
		const output = emitIndexFile(["typeEffective", "pokemonSettings"]);
		expect(output).toContain(
			`import type { MiscMasterfileEntry } from "./groups/misc.ts";`,
		);
		expect(output).toContain("| MiscMasterfileEntry;");

		// Misc is last in the union:
		const miscIdx = output.indexOf("| MiscMasterfileEntry;");
		const pokemonIdx = output.indexOf("| PokemonSettingsMasterfileEntry");
		const typeIdx = output.indexOf("| TypeEffectiveMasterfileEntry");
		expect(miscIdx).toBeGreaterThan(pokemonIdx);
		expect(miscIdx).toBeGreaterThan(typeIdx);
	});
});
