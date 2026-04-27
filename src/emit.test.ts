/** biome-ignore-all lint/suspicious/noTemplateCurlyInString: valid type generating tests */

import { describe, expect, test } from "bun:test";
import { emitIndexFile, emitMiscFile, emitTopLevelVariants, emitVariantFile, emitVariantsBarrel, emitVariantsFlat, kebabCase } from "./emit.ts";
import { MOCK_MASTERFILE } from "./fixtures.ts";
import type { Group } from "./group.ts";
import { groupEntries } from "./group.ts";

describe("emitMiscFile", () => {
	test("emits a deterministic header for the misc file", () => {
		const output = emitMiscFile([]);
		expect(output.startsWith(`// Generated from Pokémon GO masterfile — singleton entries (no shared discriminator).\n`)).toBe(true);
	});

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
		expect(output).toContain("accessibilitySettings: object;");
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
		const accessibility = groupEntries(MOCK_MASTERFILE).get("accessibilitySettings")!;

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
		expect(output).toContain(`export type MiscTemplateID = MiscMasterfileEntry["templateId"];`);

		// Union members follow the interface definitions
		const lastInterfaceIdx = output.lastIndexOf("export interface");
		const unionIdx = output.indexOf("export type MiscMasterfileEntry");
		expect(unionIdx).toBeGreaterThan(lastInterfaceIdx);
	});

	test("emits MiscMasterfileEntry = never when there are no singletons", () => {
		const output = emitMiscFile([]);
		expect(output).toContain("export type MiscMasterfileEntry = never;");
		expect(output).toContain(`export type MiscTemplateID = MiscMasterfileEntry["templateId"];`);
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
	test("emits a deterministic header for the index file", () => {
		const output = emitIndexFile([]);
		expect(output.startsWith(`// Generated from Pokémon GO masterfile — index of all groups.\n`)).toBe(true);
	});

	test("re-exports groups by directory path + misc, defines MasterfileEntry union + MasterfileTemplateID", () => {
		const multiEntryGroupNames = ["typeEffective", "pokemonSettings"];
		const output = emitIndexFile(multiEntryGroupNames);

		// Directory re-exports (no .ts suffix; resolves to <group>/index.ts).
		expect(output).toContain(`export type * from "./pokemon-settings";`);
		expect(output).toContain(`export type * from "./type-effective";`);
		expect(output).toContain(`export type * from "./misc";`);
		const pokeIdx = output.indexOf("./pokemon-settings");
		const typeIdx = output.indexOf("./type-effective");
		expect(pokeIdx).toBeLessThan(typeIdx);

		// Imports for the global union resolve via the directory too.
		expect(output).toContain(`import type { PokemonSettingsMasterfileEntry } from "./pokemon-settings";`);
		expect(output).toContain(`import type { TypeEffectiveMasterfileEntry } from "./type-effective";`);

		expect(output).toContain("export type MasterfileEntry =");
		expect(output).toContain("| PokemonSettingsMasterfileEntry");
		expect(output).toContain("| TypeEffectiveMasterfileEntry");
		expect(output).toContain(`export type MasterfileTemplateID = MasterfileEntry["templateId"];`);
		expect(output).toContain("export type MasterfileEntryByTemplateID<T extends MasterfileTemplateID> =");
		expect(output).toContain(`Extract<MasterfileEntry, { templateId: T }>`);
	});

	test("imports MiscMasterfileEntry from ./misc and places it at the end of MasterfileEntry", () => {
		const output = emitIndexFile(["typeEffective", "pokemonSettings"]);
		expect(output).toContain(`import type { MiscMasterfileEntry } from "./misc";`);
		expect(output).toContain("| MiscMasterfileEntry;");

		const miscIdx = output.indexOf("| MiscMasterfileEntry;");
		const pokemonIdx = output.indexOf("| PokemonSettingsMasterfileEntry");
		const typeIdx = output.indexOf("| TypeEffectiveMasterfileEntry");
		expect(miscIdx).toBeGreaterThan(pokemonIdx);
		expect(miscIdx).toBeGreaterThan(typeIdx);
	});
});

import { emitGroupIndex } from "./emit.ts";

describe("emitGroupIndex", () => {
	test("emits header noting it's the group's structural types", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const output = emitGroupIndex(group);
		expect(output.startsWith(`// Generated from Pokémon GO masterfile — group "typeEffective", 2 entries (structural types).\n`)).toBe(true);
	});

	test("emits the generic base interface, XData, union, and TemplateID alias", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const output = emitGroupIndex(group);

		expect(output).toContain("export interface TypeEffective<");
		expect(output).toContain("TemplateID extends string = string,");
		expect(output).toContain("TData extends TypeEffectiveData = TypeEffectiveData,");
		expect(output).toContain("typeEffective: TData & {");
		expect(output).toContain("attackType: TemplateID;");

		expect(output).toContain("export interface TypeEffectiveData {");

		expect(output).toContain("export type TypeEffectiveMasterfileEntry =");
		expect(output).toContain("| TypeEffectiveBug");
		expect(output).toContain("| TypeEffectiveDark");

		expect(output).toContain(`export type TypeEffectiveTemplateID = TypeEffectiveMasterfileEntry["templateId"];`);
	});

	test("re-exports variants barrel from the parent index", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const output = emitGroupIndex(group);
		expect(output).toContain(`export type * from "./variants";`);
	});

	test("does NOT emit per-variant alias declarations", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const output = emitGroupIndex(group);
		expect(output).not.toContain("export type TypeEffectiveBug = TypeEffective<");
		expect(output).not.toContain("export type TypeEffectiveDark = TypeEffective<");
		// Also check the S<...> form to be safe.
		expect(output).not.toContain("export type TypeEffectiveBug = S<TypeEffective<");
		expect(output).not.toContain("export type TypeEffectiveDark = S<TypeEffective<");
	});

	test("imports S from the parent _utils", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const output = emitGroupIndex(group);
		expect(output).toContain(`import type { S } from "../_utils";`);
	});
});

describe("emitVariantsFlat", () => {
	test("emits header noting it's the variant aliases", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const output = emitVariantsFlat(group);
		expect(output.startsWith(`// Generated from Pokémon GO masterfile — group "typeEffective", 2 entries (variant aliases).\n`)).toBe(true);
	});

	test("imports the base interface and XData from the sibling index", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const output = emitVariantsFlat(group);
		expect(output).toContain(`import type { S } from "../_utils";`);
		expect(output).toContain(`import type { TypeEffective, TypeEffectiveData } from "./index";`);
	});

	test("emits each per-variant alias", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const output = emitVariantsFlat(group);
		expect(output).toContain("export type TypeEffectiveBug = S<TypeEffective<");
		expect(output).toContain(`"POKEMON_TYPE_BUG"`);
		expect(output).toContain("export type TypeEffectiveDark = S<TypeEffective<");
		expect(output).toContain(`"POKEMON_TYPE_DARK"`);
	});

	test("does NOT emit the base interface, XData, or union", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const output = emitVariantsFlat(group);
		expect(output).not.toContain("export interface TypeEffective<");
		expect(output).not.toContain("export interface TypeEffectiveData {");
		expect(output).not.toContain("export type TypeEffectiveMasterfileEntry =");
	});

	test("sorts aliases by templateId lexicographically", () => {
		const group: Group = {
			discriminator: "typeEffective",
			entries: [
				{ templateId: "POKEMON_TYPE_WATER", data: { templateId: "POKEMON_TYPE_WATER", typeEffective: {} } },
				{ templateId: "POKEMON_TYPE_BUG", data: { templateId: "POKEMON_TYPE_BUG", typeEffective: {} } },
			],
		};
		const output = emitVariantsFlat(group);
		const bugIdx = output.indexOf("TypeEffectiveBug");
		const waterIdx = output.indexOf("TypeEffectiveWater");
		expect(bugIdx).toBeLessThan(waterIdx);
	});
});

describe("emitVariantFile", () => {
	test("emits header noting the bucket name and entry count", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const bug = group.entries.find((e) => e.templateId === "POKEMON_TYPE_BUG")!;
		const output = emitVariantFile(group, "bug", [bug]);
		expect(output.startsWith(`// Generated from Pokémon GO masterfile — group "typeEffective", split "bug", 1 entry.\n`)).toBe(true);
	});

	test("imports base + XData + S from the parent directory", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const bug = group.entries.find((e) => e.templateId === "POKEMON_TYPE_BUG")!;
		const output = emitVariantFile(group, "bug", [bug]);
		expect(output).toContain(`import type { S } from "../../_utils";`);
		expect(output).toContain(`import type { TypeEffective, TypeEffectiveData } from "..";`);
	});

	test("emits only the aliases for the supplied entries", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const bug = group.entries.find((e) => e.templateId === "POKEMON_TYPE_BUG")!;
		const output = emitVariantFile(group, "bug", [bug]);
		expect(output).toContain("export type TypeEffectiveBug = S<TypeEffective<");
		expect(output).not.toContain("export type TypeEffectiveDark");
	});

	test("preserves the same alias bodies as the unsplit emitter", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const bug = group.entries.find((e) => e.templateId === "POKEMON_TYPE_BUG")!;
		const split = emitVariantFile(group, "bug", [bug]);
		const flat = emitVariantsFlat(group);
		// The Bug alias declaration should be byte-identical between the two paths
		// (only the surrounding imports/header differ).
		const bugStart = split.indexOf("export type TypeEffectiveBug =");
		const bugEnd = split.indexOf(">;", bugStart) + 2;
		const splitBug = split.slice(bugStart, bugEnd);
		const flatBugStart = flat.indexOf("export type TypeEffectiveBug =");
		const flatBugEnd = flat.indexOf(">;", flatBugStart) + 2;
		const flatBug = flat.slice(flatBugStart, flatBugEnd);
		expect(splitBug).toBe(flatBug);
	});
});

describe("emitVariantsBarrel", () => {
	test("emits a deterministic header", () => {
		const output = emitVariantsBarrel("pokemonSettings", ["water", "fire", "grass"]);
		expect(output.startsWith(`// Generated from Pokémon GO masterfile — group "pokemonSettings" variants barrel.\n`)).toBe(true);
	});

	test("re-exports each file alphabetically", () => {
		const output = emitVariantsBarrel("pokemonSettings", ["water", "fire", "grass"]);
		expect(output).toContain(`export type * from "./fire";`);
		expect(output).toContain(`export type * from "./grass";`);
		expect(output).toContain(`export type * from "./water";`);
		const fireIdx = output.indexOf("./fire");
		const grassIdx = output.indexOf("./grass");
		const waterIdx = output.indexOf("./water");
		expect(fireIdx).toBeLessThan(grassIdx);
		expect(grassIdx).toBeLessThan(waterIdx);
	});

	test("handles a single-file barrel", () => {
		const output = emitVariantsBarrel("formSettings", ["base"]);
		expect(output).toContain(`export type * from "./base";`);
	});
});

describe("emitTopLevelVariants", () => {
	test("emits a deterministic header", () => {
		const output = emitTopLevelVariants(new Map());
		expect(output.startsWith(`// Generated from Pokémon GO masterfile — top-level variants barrel.\n`)).toBe(true);
	});

	test("re-exports unsplit groups via /variants.ts and split groups via /variants", () => {
		const groupSplits = new Map<string, "split" | "flat">([
			["pokemonSettings", "split"],
			["combatType", "flat"],
			["pokemonExtendedSettings", "split"],
		]);
		const output = emitTopLevelVariants(groupSplits);

		expect(output).toContain(`export type * from "./combat-type/variants.ts";`);
		expect(output).toContain(`export type * from "./pokemon-settings/variants";`);
		expect(output).toContain(`export type * from "./pokemon-extended-settings/variants";`);

		// Sorted alphabetically by group kebab name:
		const combatIdx = output.indexOf("./combat-type/");
		const extendedIdx = output.indexOf("./pokemon-extended-settings/");
		const settingsIdx = output.indexOf("./pokemon-settings/");
		expect(combatIdx).toBeLessThan(extendedIdx);
		expect(extendedIdx).toBeLessThan(settingsIdx);
	});

	test("emits empty body when no groups are present", () => {
		const output = emitTopLevelVariants(new Map());
		// Just header and a trailing newline.
		expect(output).not.toContain("export type *");
	});
});
