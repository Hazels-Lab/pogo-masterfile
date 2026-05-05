/** biome-ignore-all lint/suspicious/noTemplateCurlyInString: valid type generating tests */

import { describe, expect, test } from "bun:test";
import { MOCK_MASTERFILE } from "../fixtures.ts";
import type { Group } from "../group.ts";
import { groupEntries } from "../group.ts";
import { kebabCase } from "../naming.ts";
import { emitEntriesBarrel, emitEntriesFlat, emitEntryFile, emitGroupTypes, emitSingletonsFile, emitTopLevelVariants, emitTypesFile } from "./emit.ts";
import { buildPromotionRegistry } from "./promoted-unions.ts";

describe("emitSingletonsFile", () => {
	test("emits a deterministic header for the singletons bucket file", () => {
		const output = emitSingletonsFile("Misc", []);
		expect(output.startsWith(`// Generated from Pokémon GO masterfile — Singletons entries (no shared discriminator).\n`)).toBe(true);
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

		const output = emitSingletonsFile("Misc", singletons);
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

		const output = emitSingletonsFile("Misc", stubs);
		expect(output).toContain("export interface ItemCurrencyValues {");
		expect(output).toContain('templateId: "ITEM_CURRENCY_VALUES";');
		expect(output).not.toContain(": unknown;");
	});

	test("emits inferred singleton payloads with exact scalar literals", () => {
		const accessibility = groupEntries(MOCK_MASTERFILE).get("accessibilitySettings")!;

		const output = emitSingletonsFile("Misc", [accessibility]);

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

		const output = emitSingletonsFile("Misc", mixed);
		// ItemCurrencyValues (stub, 'I') sorts before XyzSettings (regular, 'X')
		const itemIdx = output.indexOf("ItemCurrencyValues");
		const xyzIdx = output.indexOf("XyzSettings");
		expect(itemIdx).toBeLessThan(xyzIdx);
	});

	test("emits SingletonsMiscMasterfileEntry union + SingletonsMiscTemplateID alias at the end, sorted", () => {
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

		const output = emitSingletonsFile("Misc", mixed);
		expect(output).toContain("export type SingletonsMiscMasterfileEntry = AccessibilitySettings | XyzSettings;");
		expect(output).toContain(`export type SingletonsMiscTemplateID = SingletonsMiscMasterfileEntry["templateId"];`);

		// Union members follow the interface definitions
		const lastInterfaceIdx = output.lastIndexOf("export interface");
		const unionIdx = output.indexOf("export type SingletonsMiscMasterfileEntry");
		expect(unionIdx).toBeGreaterThan(lastInterfaceIdx);
	});

	test("emits SingletonsMiscMasterfileEntry = never when there are no singletons", () => {
		const output = emitSingletonsFile("Misc", []);
		expect(output).toContain("export type SingletonsMiscMasterfileEntry = never;");
		expect(output).toContain(`export type SingletonsMiscTemplateID = SingletonsMiscMasterfileEntry["templateId"];`);
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

describe("emitTypesFile", () => {
	test("emits a deterministic header for the index file", () => {
		const output = emitTypesFile([]);
		expect(output.startsWith(`// Generated from Pokémon GO masterfile — index of all groups.\n`)).toBe(true);
	});

	test("re-exports groups by directory path, defines MasterfileEntryType union + MasterfileType", () => {
		const output = emitTypesFile(["typeEffective", "pokemonSettings", "singletons"]);

		// Directory re-exports (no .ts suffix; resolves to <group>/index.ts).
		expect(output).toContain(`export type * from "./pokemon-settings/types";`);
		expect(output).toContain(`export type * from "./type-effective/types";`);
		expect(output).toContain(`export type * from "./singletons/types";`);
		const pokeIdx = output.indexOf("./pokemon-settings/types");
		const typeIdx = output.indexOf("./type-effective/types");
		expect(pokeIdx).toBeLessThan(typeIdx);

		// Imports bring in both the base interface and the W<...> alias for each group.
		expect(output).toContain(`import type { PokemonSettings, PokemonSettingsType } from "./pokemon-settings/types";`);
		expect(output).toContain(`import type { TypeEffective, TypeEffectiveType } from "./type-effective/types";`);

		expect(output).toContain("export type MasterfileEntryType = PokemonSettings | Singletons | TypeEffective;");
		expect(output).toContain("export type MasterfileType = PokemonSettingsType | SingletonsType | TypeEffectiveType;");
	});

	test("imports Singletons from ./singletons and places it alphabetically in the unions", () => {
		const output = emitTypesFile(["typeEffective", "pokemonSettings", "singletons"]);
		expect(output).toContain(`import type { Singletons, SingletonsType } from "./singletons/types";`);
		// Singletons (S) sorts between PokemonSettings (P) and TypeEffective (T):
		expect(output).toContain("PokemonSettings | Singletons | TypeEffective;");
		expect(output).toContain("PokemonSettingsType | SingletonsType | TypeEffectiveType;");
	});
});

describe("emitGroupIndex", () => {
	test("emits header noting it's the group's structural types", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const output = emitGroupTypes(group);
		expect(output.startsWith(`// Generated from Pokémon GO masterfile — group "typeEffective", 2 entries (structural types).\n`)).toBe(true);
	});

	test("emits the generic misc interface, XData, union, and TemplateID alias", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const output = emitGroupTypes(group);

		expect(output).toContain("export interface TypeEffective<");
		expect(output).toContain("TemplateID extends string = string");
		expect(output).toContain("TData extends TypeEffectiveData = TypeEffectiveData");
		expect(output).toContain("typeEffective: TData & {");
		expect(output).toContain("attackType: TemplateID;");

		expect(output).toContain("export interface TypeEffectiveData {");

		// expect(output).toContain("export type TypeEffectiveMasterfileEntry =");
		// expect(output).toContain("| TypeEffectiveBug");
		// expect(output).toContain("| TypeEffectiveDark");

		// expect(output).toContain(`export type TypeEffectiveTemplateID = TypeEffectiveMasterfileEntry["templateId"];`);
	});

	test("re-exports entries barrel from the parent index", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const output = emitGroupTypes(group);

		expect(output).toContain(`export interface TypeEffective<`);
		expect(output).toContain(`export interface TypeEffectiveData`);
	});

	test("does NOT emit per-variant alias declarations", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const output = emitGroupTypes(group);
		expect(output).not.toContain("export type TypeEffectiveBug = TypeEffective<");
		expect(output).not.toContain("export type TypeEffectiveDark = TypeEffective<");
		// Also check the S<...> form to be safe.
		expect(output).not.toContain("export type TypeEffectiveBug = S<TypeEffective<");
		expect(output).not.toContain("export type TypeEffectiveDark = S<TypeEffective<");
	});

	test("imports S from the parent _utils", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const output = emitEntriesFlat(group);
		expect(output).toContain(`import type { S } from "../../_utils";`);
	});
});

describe("emitVariantsFlat", () => {
	test("emits header noting it's the variant aliases", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const output = emitEntriesFlat(group);
		expect(output.startsWith(`// Generated from Pokémon GO masterfile — group "typeEffective", 2 entries (variant aliases).\n`)).toBe(true);
	});

	test("imports the misc interface and XData from the parent types file", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const output = emitEntriesFlat(group);
		expect(output).toContain(`import type { S } from "../../_utils";`);
		expect(output).toContain(`import type { TypeEffective, TypeEffectiveData } from "../types";`);
	});

	test("emits each per-variant alias", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const output = emitEntriesFlat(group);
		expect(output).toContain("export type TypeEffectiveBug = S<TypeEffective<");
		expect(output).toContain(`"POKEMON_TYPE_BUG"`);
		expect(output).toContain("export type TypeEffectiveDark = S<TypeEffective<");
		expect(output).toContain(`"POKEMON_TYPE_DARK"`);
	});

	test("does NOT emit the misc interface, XData, or union", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const output = emitEntriesFlat(group);

		expect(output).not.toContain("export interface TypeEffective<");
		expect(output).not.toContain("export interface TypeEffectiveData {");
		expect(output).toContain("export type TypeEffectiveMasterfileEntry =");
	});

	test("sorts aliases by templateId lexicographically", () => {
		const group: Group = {
			discriminator: "typeEffective",
			entries: [
				{ templateId: "POKEMON_TYPE_WATER", data: { templateId: "POKEMON_TYPE_WATER", typeEffective: {} } },
				{ templateId: "POKEMON_TYPE_BUG", data: { templateId: "POKEMON_TYPE_BUG", typeEffective: {} } },
			],
		};
		const output = emitEntriesFlat(group);
		const bugIdx = output.indexOf("TypeEffectiveBug");
		const waterIdx = output.indexOf("TypeEffectiveWater");
		expect(bugIdx).toBeLessThan(waterIdx);
	});

	test("emits a TemplateID alias derived from the union", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const output = emitEntriesFlat(group);
		expect(output).toContain(`export type TypeEffectiveTemplateID = TypeEffectiveMasterfileEntry["templateId"];`);
	});
});

describe("emitVariantFile", () => {
	test("emits header noting the bucket name and entry count", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const bug = group.entries.find((e) => e.templateId === "POKEMON_TYPE_BUG")!;
		const output = emitEntryFile(group, "bug", [bug]);
		expect(output.startsWith(`// Generated from Pokémon GO masterfile — group "typeEffective", split "bug", 1 entry.\n`)).toBe(true);
	});

	test("imports misc + XData + S from the parent directory", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const bug = group.entries.find((e) => e.templateId === "POKEMON_TYPE_BUG")!;
		const output = emitEntryFile(group, "bug", [bug]);
		expect(output).toContain(`import type { S } from "../../_utils";`);
		expect(output).toContain(`import type { TypeEffective, TypeEffectiveData } from "../types";`);
	});

	test("emits only the aliases for the supplied entries", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const bug = group.entries.find((e) => e.templateId === "POKEMON_TYPE_BUG")!;
		const output = emitEntryFile(group, "bug", [bug]);
		expect(output).toContain("export type TypeEffectiveBug = S<TypeEffective<");
		expect(output).not.toContain("export type TypeEffectiveDark");
	});

	test("preserves the same alias bodies as the unsplit emitter", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const bug = group.entries.find((e) => e.templateId === "POKEMON_TYPE_BUG")!;
		const split = emitEntryFile(group, "bug", [bug]);
		const flat = emitEntriesFlat(group);
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
		const output = emitEntriesBarrel("pokemonSettings", ["water", "fire", "grass"]);
		expect(output.startsWith(`// Generated from Pokémon GO masterfile — group "pokemonSettings" entries barrel.\n`)).toBe(true);
	});

	test("re-exports each file alphabetically", () => {
		const output = emitEntriesBarrel("pokemonSettings", ["water", "fire", "grass"]);
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
		const output = emitEntriesBarrel("formSettings", ["misc"]);
		expect(output).toContain(`export type * from "./misc";`);
	});
});

describe("emitTopLevelVariants", () => {
	test("emits a deterministic header", () => {
		const output = emitTopLevelVariants(new Map());
		expect(output.startsWith(`// Generated from Pokémon GO masterfile — top-level entries barrel.\n`)).toBe(true);
	});

	test("re-exports each group's entries module by directory path", () => {
		const groupSplits = new Map<string, "split" | "flat">([
			["pokemonSettings", "split"],
			["combatType", "flat"],
			["pokemonExtendedSettings", "split"],
		]);
		const output = emitTopLevelVariants(groupSplits);

		// Both flat and split groups resolve via "./<group>/entries" — TS picks
		// entries.ts for flat groups and entries/index.ts for split ones.
		expect(output).toContain(`export type * from "./combat-type/entries";`);
		expect(output).toContain(`export type * from "./pokemon-settings/entries";`);
		expect(output).toContain(`export type * from "./pokemon-extended-settings/entries";`);

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

describe("emitGroupTypes — promoted TemplateID references", () => {
	test("backwards compatible: omitting registry still works", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const typeEffective = groups.get("typeEffective")!;
		const output = emitGroupTypes(typeEffective);
		expect(output).toContain("export interface TypeEffective<");
	});

	test("emits an import for a consumer group that references another group's templateIds (exact match)", () => {
		// groupA owns POKEMON_TYPE_BUG / POKEMON_TYPE_DARK; groupB's data picks both.
		const groupA: Group = {
			discriminator: "typeEffective",
			entries: [
				{ templateId: "POKEMON_TYPE_BUG", data: { templateId: "POKEMON_TYPE_BUG", typeEffective: { attackScalar: [1] } } },
				{ templateId: "POKEMON_TYPE_DARK", data: { templateId: "POKEMON_TYPE_DARK", typeEffective: { attackScalar: [1] } } },
			],
		};
		const groupB: Group = {
			discriminator: "moveSettings",
			entries: [
				{ templateId: "MOVE_X", data: { templateId: "MOVE_X", moveSettings: { pokemonType: "POKEMON_TYPE_BUG" } } },
				{ templateId: "MOVE_Y", data: { templateId: "MOVE_Y", moveSettings: { pokemonType: "POKEMON_TYPE_DARK" } } },
			],
		};
		const groups = new Map<string, Group>([
			["typeEffective", groupA],
			["moveSettings", groupB],
		]);
		const registry = buildPromotionRegistry(groups);
		const output = emitGroupTypes(groupB, registry);
		expect(output).toContain(`import type { TypeEffectiveTemplateID } from "../type-effective/entries";`);
		expect(output).toContain("pokemonType: TypeEffectiveTemplateID;");
	});

	test("emits an Exclude<> reference and import when consumer is a near-exact subset", () => {
		// groupA: 4 templateIds with prefix KIND_; groupB references 3 of 4 (1 missing = 25%).
		const groupA: Group = {
			discriminator: "kindThing",
			entries: ["KIND_AAA", "KIND_BBB", "KIND_CCC", "KIND_DDD"].map((id) => ({
				templateId: id,
				data: { templateId: id, kindThing: { stamp: 1 } },
			})),
		};
		const groupB: Group = {
			discriminator: "consumer",
			entries: [
				{ templateId: "C_ONE", data: { templateId: "C_ONE", consumer: { kind: "KIND_AAA" } } },
				{ templateId: "C_TWO", data: { templateId: "C_TWO", consumer: { kind: "KIND_BBB" } } },
				{ templateId: "C_THR", data: { templateId: "C_THR", consumer: { kind: "KIND_CCC" } } },
			],
		};
		const groups = new Map<string, Group>([
			["kindThing", groupA],
			["consumer", groupB],
		]);
		const registry = buildPromotionRegistry(groups);
		const output = emitGroupTypes(groupB, registry);
		expect(output).toContain(`import type { KindThingTemplateID } from "../kind-thing/entries";`);
		expect(output).toContain(`Exclude<KindThingTemplateID, "KIND_DDD">`);
	});

	test("does not emit a self-import when the source group's own data references its own templateID set", () => {
		// Even if some property of the source group's data widens to the group's own
		// templateId set, the generator must not produce a self-import.
		const groups = groupEntries(MOCK_MASTERFILE);
		const registry = buildPromotionRegistry(groups);
		const typeEffective = groups.get("typeEffective")!;
		const output = emitGroupTypes(typeEffective, registry);
		expect(output).not.toContain(`from "../type-effective/entries"`);
	});
});
