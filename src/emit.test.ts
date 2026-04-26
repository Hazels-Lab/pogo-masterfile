import { describe, expect, test } from "bun:test";
import { emitGroupFile, emitIndexFile, emitMiscFile, kebabCase } from "./emit.ts";
import { MOCK_MASTERFILE } from "./fixtures.ts";
import type { Group } from "./group.ts";
import { groupEntries } from "./group.ts";

describe("emitGroupFile", () => {
	test("emits a deterministic header with group name and entry count", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const output = emitGroupFile(group);
		expect(output.startsWith(`// Generated from Pokémon GO masterfile — group "typeEffective", 2 entries.\n`)).toBe(true);
	});

	test("emits TData generic with invariants inlined in base body", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;

		const output = emitGroupFile(group);

		// Two-generic base interface header:
		expect(output).toContain("export interface TypeEffective<");
		expect(output).toContain("TemplateID extends string = string,");
		expect(output).toContain("TData extends TypeEffectiveData = TypeEffectiveData,");

		// Base body: TData & { invariants }
		expect(output).toContain("typeEffective: TData & {");
		expect(output).toContain("attackType: TemplateID;"); // Kind 2 top-level
		expect(output).toContain("accuracyChance: 1;"); // Kind 1 nested
		expect(output).toContain("combatType: TemplateID;"); // Kind 2 nested deeply
		// Kind 3 (slice) nested: typeCode is derived by stripping the POKEMON_TYPE_ prefix.
		expect(output).toContain("typeCode: TemplateID extends `POKEMON_TYPE_${infer Rest}` ? Rest : string;");

		// XData interface: fields in 100% of variants are required; invariant fields are stripped.
		// Finite string sets become literal unions (cap-bounded) instead of widening to `string`.
		expect(output).toContain("export interface TypeEffectiveData {");
		expect(output).toContain("attackScalar: [");
		expect(output).toContain("effectGroup: {");
		expect(output).toContain(`tags: Array<"charged" | "fast">;`);
		expect(output).toContain("windows: [");
		// Invariants should NOT appear in XData (they live in the base body):
		expect(output).not.toContain("attackType?:");
		expect(output).not.toContain("accuracyChance?:");
		// typeCode is now a templateIdSlice invariant — derived from TemplateID, not a literal union in XData.
		expect(output).not.toContain(`typeCode: "BUG" | "DARK";`);
		// effectGroup.nested has only combatType (an invariant) — the whole nested
		// wrapper should be stripped from XData.
		expect(output).not.toContain("nested?:");

		// No legacy named tuple/primitive aliases should be emitted:
		expect(output).not.toContain("export type TypeEffectiveAttackScalar");
		expect(output).not.toContain("export type TypeEffectiveEffectGroupWindows");

		// Per-variant aliases carry literal TData, NOT the widened alias:
		expect(output).toContain("export type TypeEffectiveBug = TypeEffective<");
		expect(output).toContain(`"POKEMON_TYPE_BUG"`);
		expect(output).toContain("export type TypeEffectiveDark = TypeEffective<");
		expect(output).toContain(`"POKEMON_TYPE_DARK"`);

		// Bug's block contains its literal tuple + literals for variable fields.
		// Invariant-hoisted fields (attackType, accuracyChance, nested.combatType)
		// are NOT present in the variant literal — they come from the base body.
		const bugStart = output.indexOf("export type TypeEffectiveBug = TypeEffective<");
		const bugEnd = output.indexOf(">;", bugStart);
		const bugBlock = output.slice(bugStart, bugEnd + 2);
		expect(bugBlock).toContain(`"POKEMON_TYPE_BUG"`);
		expect(bugBlock).toContain("0.625");
		expect(bugBlock).toContain("1.6");
		expect(bugBlock).toContain(`"fast"`); // tags
		expect(bugBlock).toContain("250"); // windows[1]
		expect(bugBlock).not.toContain("attackType"); // invariant; in base body only
		expect(bugBlock).not.toContain("accuracyChance"); // invariant; in base body only
		expect(bugBlock).not.toContain("combatType"); // invariant; in base body only
		expect(bugBlock).not.toContain("typeCode"); // slice invariant; in base body only

		// Dark's block:
		const darkStart = output.indexOf("export type TypeEffectiveDark = TypeEffective<");
		const darkEnd = output.indexOf(">;", darkStart);
		const darkBlock = output.slice(darkStart, darkEnd + 2);
		expect(darkBlock).toContain(`"POKEMON_TYPE_DARK"`);
		expect(darkBlock).toContain(`"charged"`);
		expect(darkBlock).toContain(`"fast"`);
		expect(darkBlock).toContain("300"); // windows[1]
		expect(darkBlock).not.toContain("typeCode"); // slice invariant; in base body only

		// Union + TemplateID alias unchanged:
		expect(output).toContain("export type TypeEffectiveMasterfileEntry =");
		expect(output).toContain("| TypeEffectiveBug");
		expect(output).toContain("| TypeEffectiveDark");
		expect(output).toContain(`export type TypeEffectiveTemplateID = TypeEffectiveMasterfileEntry["templateId"];`);
	});

	test("emits a templateIdSlice as an inline conditional template literal in the base body", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("combatType")!;
		const output = emitGroupFile(group);

		// `type` is a slice of templateId (drop "COMBAT_") — lives in base body, not XData, not variants.
		// (`type` is in the reserved-word list, so the property name is quoted.)
		expect(output).toContain("combatType: TData & {");
		expect(output).toContain('"type": TemplateID extends `COMBAT_${infer Rest}` ? Rest : string;');
		// `excellentLevelThreshold` is a constant (0.95) → also in base body.
		expect(output).toContain("excellentLevelThreshold: 0.95;");

		// XData has neither `type` nor `excellentLevelThreshold` (both stripped); the varying
		// `greatLevelThreshold` (0.6 and 0.7) remains.
		expect(output).toContain("export interface CombatTypeData {");
		expect(output).not.toContain(`type: "POKEMON_TYPE_BUG"`);
		// `excellentLevelThreshold` should not appear in XData (only in base body).
		const xdataStart = output.indexOf("export interface CombatTypeData");
		const xdataEnd = output.indexOf("}", xdataStart);
		const xdataBlock = output.slice(xdataStart, xdataEnd + 1);
		expect(xdataBlock).not.toContain("excellentLevelThreshold");
		// number literals widen to `number` for XData (per widenType policy).
		expect(xdataBlock).toContain("greatLevelThreshold: number;");

		// Per-variant aliases: payload should NOT carry `type` (it's derived from TemplateID).
		const bugStart = output.indexOf("export type CombatTypeBug = CombatType<");
		const bugEnd = output.indexOf(">;", bugStart);
		const bugBlock = output.slice(bugStart, bugEnd + 2);
		expect(bugBlock).toContain(`"COMBAT_POKEMON_TYPE_BUG"`);
		expect(bugBlock).toContain("greatLevelThreshold: 0.7"); // varying, in TData
		expect(bugBlock).not.toContain(`"POKEMON_TYPE_BUG"`); // not as a `type` value
		expect(bugBlock).not.toContain("type:");
		expect(bugBlock).not.toContain("excellentLevelThreshold"); // constant, in base body only
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

	test("emits per-variant TData with only the fields that variant has", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("pokemonSettings")!;

		const output = emitGroupFile(group);

		// Base interface + XData:
		expect(output).toContain("export interface PokemonSettings<");
		expect(output).toContain("TData extends PokemonSettingsData = PokemonSettingsData,");
		expect(output).toContain("export interface PokemonSettingsData {");
		// Both fixture entries have `forms` and `stats` → required.
		// Finite string set "NORMAL"/"SHADOW" preserved as union after §3.
		expect(output).toContain(`forms: Array<"NORMAL" | "SHADOW">;`);
		expect(output).toContain("stats: {");
		// `shadowBoost` is only on Bulbasaur → optional.
		expect(output).toContain("shadowBoost?: null;");

		// familyId is a Kind 1 constant ("FAMILY_BULBASAUR" across both entries) → base body
		expect(output).toContain("pokemonSettings: TData & {");
		expect(output).toContain(`familyId: "FAMILY_BULBASAUR";`);

		// Ivysaur's stats omit `shadowBoost` (present only on Bulbasaur).
		const ivyStart = output.indexOf("export type PokemonSettingsV0002PokemonIvysaur = PokemonSettings<");
		const ivyEnd = output.indexOf(">;", ivyStart);
		const ivyBlock = output.slice(ivyStart, ivyEnd + 2);
		expect(ivyBlock).toContain(`"V0002_POKEMON_IVYSAUR"`);
		expect(ivyBlock).toContain(`"NORMAL"`);
		expect(ivyBlock).toContain(`"SHADOW"`);
		expect(ivyBlock).not.toContain("shadowBoost");

		// Bulbasaur's TData includes shadowBoost: null.
		const bulbaStart = output.indexOf("export type PokemonSettingsV0001PokemonBulbasaur = PokemonSettings<");
		const bulbaEnd = output.indexOf(">;", bulbaStart);
		const bulbaBlock = output.slice(bulbaStart, bulbaEnd + 2);
		expect(bulbaBlock).toContain("shadowBoost: null");
	});

	test("emits tuples inline in XData without dangling TemplateID references", () => {
		const group: Group = {
			discriminator: "tupleMirror",
			entries: [
				{
					templateId: "TUPLE_ONE",
					data: {
						templateId: "TUPLE_ONE",
						tupleMirror: { ids: ["TUPLE_ONE"] },
					},
				},
				{
					templateId: "TUPLE_TWO",
					data: {
						templateId: "TUPLE_TWO",
						tupleMirror: { ids: ["TUPLE_TWO"] },
					},
				},
			],
		};

		const output = emitGroupFile(group);

		// XData: ids is a 1-tuple. Both variants have `ids` → required.
		// String-literal union preserved across the tuple slot after §3.
		expect(output).toContain("export interface TupleMirrorData {");
		expect(output).toContain("ids: [");
		expect(output).toContain(`"TUPLE_ONE" | "TUPLE_TWO"`);

		// Per-variant: literal tuple.
		expect(output).toContain(`"TUPLE_ONE"`);
		expect(output).toContain(`"TUPLE_TWO"`);
	});

	test("emits XData interface name without the collision suffix", () => {
		const group: Group = {
			discriminator: "nameCollision",
			entries: [
				{
					templateId: "BUG",
					data: {
						templateId: "BUG",
						nameCollision: { bug: "one", data: "first" },
					},
				},
				{
					templateId: "DARK",
					data: {
						templateId: "DARK",
						nameCollision: { bug: "two", data: "second" },
					},
				},
			],
		};

		const output = emitGroupFile(group);

		// XData interface name is the canonical form (no collision logic now —
		// XData is the single named sibling, and per-variant aliases use the
		// group's own name derivation which already avoids collision).
		// Both variants have `bug` and `data` → required, with §3 literal unions.
		expect(output).toContain("export interface NameCollisionData {");
		expect(output).toContain(`bug: "one" | "two";`);
		expect(output).toContain(`data: "first" | "second";`);

		// Per-variant alias for templateId "BUG":
		expect(output).toContain("export type NameCollisionBug = NameCollision<");
		expect(output).toContain(`"BUG"`);
		expect(output).toContain(`"one"`);
		expect(output).toContain(`"first"`);
	});

	test("preserves dotted JSON keys as distinct properties in XData and per-variant literals", () => {
		const group: Group = {
			discriminator: "dotSettings",
			entries: [
				{
					templateId: "DOT_ONE",
					data: {
						templateId: "DOT_ONE",
						dotSettings: {
							a: { b: "inner-one" },
							"a.b": "direct-one",
						},
					},
				},
				{
					templateId: "DOT_TWO",
					data: {
						templateId: "DOT_TWO",
						dotSettings: {
							a: { b: "inner-two" },
							"a.b": "direct-two",
						},
					},
				},
			],
		};

		const output = emitGroupFile(group);

		// XData preserves both paths. Both variants have these → required, §3 literal unions.
		expect(output).toContain(`b: "inner-one" | "inner-two";`);
		expect(output).toContain(`"a.b": "direct-one" | "direct-two";`);

		// Per-variant literals preserve the actual values:
		expect(output).toContain(`"direct-one"`);
		expect(output).toContain(`"direct-two"`);
		expect(output).toContain(`"inner-one"`);
		expect(output).toContain(`"inner-two"`);
	});

	test("preserves nested array layers inside XData", () => {
		const group: Group = {
			discriminator: "matrixSettings",
			entries: [
				{
					templateId: "MATRIX_ONE",
					data: {
						templateId: "MATRIX_ONE",
						matrixSettings: {
							matrix: [["A"], ["B", "A"]],
						},
					},
				},
				{
					templateId: "MATRIX_TWO",
					data: {
						templateId: "MATRIX_TWO",
						matrixSettings: {
							matrix: [["B"]],
						},
					},
				},
			],
		};

		const output = emitGroupFile(group);

		// XData: nested Array<Array<...>>. Both variants have `matrix` → required, §3 literal union.
		expect(output).toContain(`matrix: Array<Array<"A" | "B">>;`);

		// Per-variant: literal 2D array. MATRIX_ONE has [["A"], ["B", "A"]]:
		const oneStart = output.indexOf("export type MatrixSettingsOne = MatrixSettings<");
		const oneEnd = output.indexOf(">;", oneStart);
		const oneBlock = output.slice(oneStart, oneEnd + 2);
		expect(oneBlock).toContain(`"A"`);
		expect(oneBlock).toContain(`"B"`);
	});

	test("elides the TData arg when the variant's stripped payload is empty", () => {
		const group: Group = {
			discriminator: "allConstant",
			entries: [
				{
					templateId: "A",
					data: { templateId: "A", allConstant: { fixed: 1 } },
				},
				{
					templateId: "B",
					data: { templateId: "B", allConstant: { fixed: 1 } },
				},
			],
		};

		const output = emitGroupFile(group);

		// `fixed` is a Kind 1 constant — lives in the base body. XData is empty.
		expect(output).toContain("export interface AllConstantData {}");
		expect(output).toContain("allConstant: TData & {");
		expect(output).toContain("fixed: 1;");

		// Both variants pass an explicit Record<string, never> to close the shape
		// (forbid stray fields), rather than defaulting to the wide XData fallback.
		expect(output).toContain(`export type AllConstantA = AllConstant<"A", Record<string, never>>;`);
		expect(output).toContain(`export type AllConstantB = AllConstant<"B", Record<string, never>>;`);
	});

	test("drops the intersection when there are no invariants", () => {
		const group: Group = {
			discriminator: "varyAll",
			entries: [
				{
					templateId: "ONE",
					data: { templateId: "ONE", varyAll: { label: "first", count: 1 } },
				},
				{
					templateId: "TWO",
					data: { templateId: "TWO", varyAll: { label: "second", count: 2 } },
				},
			],
		};

		const output = emitGroupFile(group);

		// No invariants → inner payload is plain TData (no `& {...}` intersection)
		expect(output).toContain("varyAll: TData;");
		expect(output).not.toContain("varyAll: TData &");

		// XData has both fields. Both variants have them → required, §3 literal union for strings.
		expect(output).toContain(`label: "first" | "second";`);
		expect(output).toContain("count: number;");
	});
});

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

	test("re-exports groups (kebab-case filenames) + misc, defines MasterfileEntry union + MasterfileTemplateID", () => {
		const multiEntryGroupNames = ["typeEffective", "pokemonSettings"];
		const output = emitIndexFile(multiEntryGroupNames);

		// Exports are sorted:
		expect(output).toContain(`export type * from "./pokemon-settings.ts";`);
		expect(output).toContain(`export type * from "./type-effective.ts";`);
		expect(output).toContain(`export type * from "./misc.ts";`);
		const pokeIdx = output.indexOf("pokemon-settings");
		const typeIdx = output.indexOf("type-effective");
		expect(pokeIdx).toBeLessThan(typeIdx);

		// Imports for the global union:
		expect(output).toContain(`import type { PokemonSettingsMasterfileEntry } from "./pokemon-settings.ts";`);
		expect(output).toContain(`import type { TypeEffectiveMasterfileEntry } from "./type-effective.ts";`);

		// Global union and TemplateID alias:
		expect(output).toContain("export type MasterfileEntry =");
		expect(output).toContain("| PokemonSettingsMasterfileEntry");
		expect(output).toContain("| TypeEffectiveMasterfileEntry");
		expect(output).toContain(`export type MasterfileTemplateID = MasterfileEntry["templateId"];`);
		// Lookup mapped type — Extract narrows the union by templateId.
		expect(output).toContain("export type MasterfileEntryByTemplateID<T extends MasterfileTemplateID> =");
		expect(output).toContain(`Extract<MasterfileEntry, { templateId: T }>`);
	});

	test("imports MiscMasterfileEntry and includes it at the end of the MasterfileEntry union", () => {
		const output = emitIndexFile(["typeEffective", "pokemonSettings"]);
		expect(output).toContain(`import type { MiscMasterfileEntry } from "./misc.ts";`);
		expect(output).toContain("| MiscMasterfileEntry;");

		// Misc is last in the union:
		const miscIdx = output.indexOf("| MiscMasterfileEntry;");
		const pokemonIdx = output.indexOf("| PokemonSettingsMasterfileEntry");
		const typeIdx = output.indexOf("| TypeEffectiveMasterfileEntry");
		expect(miscIdx).toBeGreaterThan(pokemonIdx);
		expect(miscIdx).toBeGreaterThan(typeIdx);
	});
});
