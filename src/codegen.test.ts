import { describe, expect, test } from "bun:test";
import * as fs from "node:fs";
import * as path from "node:path";
import { filterGameMasterEntries } from "./codegen-core";
import { parseGoArgs } from "./go";
import { parseRustArgs } from "./rust";
import type { GameMasterEntryRaw } from "./types";
import {
	buildTypescriptFiles,
	buildTypescriptOutput,
	parseTypescriptArgs,
} from "./typescript";

const FIXTURE_ENTRIES: GameMasterEntryRaw[] = [
	{
		templateId: "V0002_POKEMON_IVYSAUR",
		data: {
			templateId: "V0002_POKEMON_IVYSAUR",
			pokemonSettings: {
				pokemonId: "IVYSAUR",
				familyId: "FAMILY_BULBASAUR",
				stats: {
					baseAttack: 151,
				},
			},
		},
	},
	{
		templateId: "V0002_POKEMON_IVYSAUR_NORMAL",
		data: {
			templateId: "V0002_POKEMON_IVYSAUR_NORMAL",
			pokemonSettings: {
				pokemonId: "IVYSAUR",
				familyId: "FAMILY_BULBASAUR",
				form: "IVYSAUR_NORMAL",
				stats: {
					baseAttack: 151,
				},
			},
		},
	},
	{
		templateId: "EXTENDED_V0002_POKEMON_IVYSAUR",
		data: {
			pokemonExtendedSettings: {
				uniqueId: "IVYSAUR",
				sizeSettings: {
					xxsLowerBound: 0.8,
				},
			},
		},
	},
	{
		templateId: "SPAWN_V0002_POKEMON_IVYSAUR",
		data: {
			genderSettings: {
				pokemon: "IVYSAUR",
				gender: {
					malePercent: 0.875,
					femalePercent: 0.125,
				},
			},
		},
	},
	{
		templateId: "V0001_FAMILY_BULBASAUR",
		data: {
			pokemonFamily: {
				familyId: "FAMILY_BULBASAUR",
			},
		},
	},
	{
		templateId: "POKEMON_TYPE_BUG",
		data: {
			typeEffective: {
				attackScalar: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				attackType: "POKEMON_TYPE_BUG",
			},
		},
	},
	{
		templateId: "POKEMON_TYPE_DARK",
		data: {
			typeEffective: {
				attackScalar: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				attackType: "POKEMON_TYPE_DARK",
			},
		},
	},
	{
		templateId: "POKEMON_TYPE_WATER",
		data: {
			typeEffective: {
				attackScalar: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				attackType: "POKEMON_TYPE_WATER",
			},
		},
	},
	{
		templateId: "POKEMON_SCALE_SETTINGS_BATTLE_POKEMON_SCALE",
		data: {
			pokemonScaleSettings: {
				minHeight: 0.5,
				maxHeight: 1.5,
				pokemonScaleMode: "BATTLE",
			},
		},
	},
	{
		templateId: "POKEMON_HOME_SETTINGS",
		data: {
			pokemonHomeSettings: {
				playerMinLevel: 15,
			},
		},
	},
	{
		templateId: "POKEMON_TAG_SETTINGS",
		data: {
			pokemonTagSettings: {
				maxNumTagsAllowed: 100,
				minPlayerLevelForPokemonTagging: 8,
				colorBinding: [],
			},
		},
	},
	{
		templateId: "POKEMON_UPGRADE_SETTINGS",
		data: {
			pokemonUpgrades: {
				allowedLevelsAbovePlayer: 10,
			},
		},
	},
	{
		templateId: "MOVE_VINE_WHIP_FAST",
		data: {
			moveSettings: {
				power: 5,
			},
		},
	},
	{
		templateId: "ITEM_POKE_BALL",
		data: {
			itemSettings: {
				itemType: "ITEM_TYPE_POKE_BALL",
			},
		},
	},
	{
		templateId: "AVATAR_TEST",
		data: {
			avatarCustomization: {
				enabled: true,
			},
		},
	},
	{
		templateId: "FEATURE_GATE_MAIN",
		data: {
			featureGate: {
				status: 1,
			},
		},
	},
];

const SHARED_GENDER_FIXTURE_ENTRIES: GameMasterEntryRaw[] = [
	{
		templateId: "SPAWN_V0001_POKEMON_BULBASAUR",
		data: {
			genderSettings: {
				pokemon: "BULBASAUR",
				gender: {
					malePercent: 0.875,
					femalePercent: 0.125,
				},
			},
		},
	},
	{
		templateId: "SPAWN_V0152_POKEMON_CHIKORITA",
		data: {
			genderSettings: {
				pokemon: "CHIKORITA",
				gender: {
					malePercent: 0.875,
					femalePercent: 0.125,
				},
			},
		},
	},
];

const EXPECTED_POKEMON_SETTINGS_GEN1_FILE = `/* eslint-disable */
// Auto-generated from GAME_MASTER.json
// Do not edit by hand.
// Group: pokemon/settings/gen1
// Filters: all
// Entries emitted: 2

export interface V0002_pokemon_ivysaurdatapokemonsettingsstats {
  baseAttack: number;
}
export interface V0002_pokemon_ivysaurdatapokemonsettings {
  familyId: string;
  pokemonId: string;
  stats: V0002_pokemon_ivysaurdatapokemonsettingsstats;
}
export interface V0002_pokemon_ivysaurdata {
  pokemonSettings: V0002_pokemon_ivysaurdatapokemonsettings;
  templateId: string;
}
export interface V0002_pokemon_ivysaurEntry {
  templateId: "V0002_POKEMON_IVYSAUR";
  data: V0002_pokemon_ivysaurdata;
}
export interface V0002_pokemon_ivysaur_normaldatapokemonsettings {
  familyId: string;
  form: string;
  pokemonId: string;
  stats: V0002_pokemon_ivysaurdatapokemonsettingsstats;
}
export interface V0002_pokemon_ivysaur_normaldata {
  pokemonSettings: V0002_pokemon_ivysaur_normaldatapokemonsettings;
  templateId: string;
}
export interface V0002_pokemon_ivysaur_normalEntry {
  templateId: "V0002_POKEMON_IVYSAUR_NORMAL";
  data: V0002_pokemon_ivysaur_normaldata;
}

export interface PokemonSettingsGen1MasterfileByTemplateId {
  "V0002_POKEMON_IVYSAUR": V0002_pokemon_ivysaurEntry;
  "V0002_POKEMON_IVYSAUR_NORMAL": V0002_pokemon_ivysaur_normalEntry;
}

export interface PokemonSettingsGen1ByDexId {
  "0002": V0002_pokemon_ivysaurEntry | V0002_pokemon_ivysaur_normalEntry;
}

export interface PokemonSettingsGen1ByPokemonId {
  "IVYSAUR": V0002_pokemon_ivysaurEntry | V0002_pokemon_ivysaur_normalEntry;
}

export type PokemonSettingsGen1MasterfileEntry = V0002_pokemon_ivysaurEntry | V0002_pokemon_ivysaur_normalEntry;
`;

describe("codegen refactor parity", () => {
	test("TypeScript CLI still defaults to all when no filters are passed", () => {
		const options = parseTypescriptArgs([]);

		expect(options.includeAll).toBe(true);
		expect(options.prefixes).toEqual([]);
		expect(options.matches).toEqual([]);
	});

	test("generator parsers keep repeated filters and language-specific options", () => {
		const typescriptOptions = parseTypescriptArgs([
			"--prefix",
			"AVATAR_",
			"--prefix",
			"SPAWN_",
			"--match",
			"FEATURE_GATE",
		]);
		const goOptions = parseGoArgs([
			"--package",
			"123 weird-name",
			"--validate",
		]);
		const rustOptions = parseRustArgs([
			"--integer-strategy",
			"f64",
			"--derive-default",
			"--all",
		]);

		expect(typescriptOptions.includeAll).toBe(false);
		expect(typescriptOptions.prefixes).toEqual(["AVATAR_", "SPAWN_"]);
		expect(typescriptOptions.matches).toEqual(["FEATURE_GATE"]);
		expect(goOptions.includeAll).toBe(true);
		expect(goOptions.packageName).toBe("pkgweirdname");
		expect(goOptions.validate).toBe(true);
		expect(rustOptions.includeAll).toBe(true);
		expect(rustOptions.integerStrategy).toBe("f64");
		expect(rustOptions.deriveDefault).toBe(true);
	});

	test("shared filtering still ignores non-object payloads and keeps match order", () => {
		const filtered = filterGameMasterEntries(
			[
				...FIXTURE_ENTRIES,
				{
					templateId: "BROKEN_TEMPLATE",
					data: null as unknown as GameMasterEntryRaw["data"],
				},
			],
			{
				includeAll: false,
				prefixes: ["V0002_", "SPAWN_"],
				matches: ["FEATURE_GATE"],
			},
		);

		expect(filtered.map((entry) => entry.templateId)).toEqual([
			"V0002_POKEMON_IVYSAUR",
			"V0002_POKEMON_IVYSAUR_NORMAL",
			"SPAWN_V0002_POKEMON_IVYSAUR",
			"FEATURE_GATE_MAIN",
		]);
	});

	test("TypeScript output uses semantic families and explicit Pokemon modules", () => {
		const options = parseTypescriptArgs(["--all"]);
		const bundle = buildTypescriptFiles(FIXTURE_ENTRIES, options);
		const fileNames = bundle.files.map((file) => file.fileName).sort();
		const fileMap = new Map(
			bundle.files.map((file) => [file.fileName, file.content]),
		);

		expect(fileNames).toEqual([
			"avatar/customization.generated.ts",
			"items/settings.generated.ts",
			"misc.generated.ts",
			"moves/settings.generated.ts",
			"pokemon/extended/gen1.generated.ts",
			"pokemon/family.generated.ts",
			"pokemon/gender/gen1.generated.ts",
			"pokemon/home.generated.ts",
			"pokemon/scale.generated.ts",
			"pokemon/settings/gen1.generated.ts",
			"pokemon/tags.generated.ts",
			"pokemon/type-chart.generated.ts",
			"pokemon/upgrades.generated.ts",
		]);
		expect(
			fileNames.some((fileName) => fileName.includes("pokemon/misc")),
		).toBe(false);

		expect(fileMap.get("pokemon/settings/gen1.generated.ts")?.trim()).toBe(
			EXPECTED_POKEMON_SETTINGS_GEN1_FILE.trim(),
		);
		expect(fileMap.get("pokemon/extended/gen1.generated.ts")).toContain(
			"export interface PokemonExtendedGen1ByPokemonId {",
		);
		expect(fileMap.get("pokemon/gender/gen1.generated.ts")).toContain(
			'  "IVYSAUR": Spawn_v0002_pokemon_ivysaurEntry;',
		);
		expect(fileMap.get("pokemon/type-chart.generated.ts")).toContain(
			"export interface PokemonType<TTemplateId extends string> {",
		);
		expect(fileMap.get("pokemon/type-chart.generated.ts")).not.toContain(
			"export interface Pokemon_type_bugEntry {",
		);
		expect(fileMap.get("pokemon/type-chart.generated.ts")).toContain(
			"export interface PokemonTypeTypeEffective<TTemplateId extends string> {",
		);
		expect(fileMap.get("pokemon/type-chart.generated.ts")).toContain(
			"  attackType: TTemplateId;",
		);
		expect(fileMap.get("pokemon/type-chart.generated.ts")).toContain(
			'export type PokemonTypeBug = PokemonType<"POKEMON_TYPE_BUG">;',
		);
		expect(fileMap.get("pokemon/type-chart.generated.ts")).toContain(
			'export type PokemonTypeTemplateId = PokemonTypeMasterfileEntry["templateId"];',
		);
		expect(fileMap.get("misc.generated.ts")).toContain(
			'templateId: "FEATURE_GATE_MAIN";',
		);
	});

	test("TypeScript barrel exports normalized aliases and lookup types", () => {
		const options = parseTypescriptArgs(["--all"]);
		const output = buildTypescriptOutput(FIXTURE_ENTRIES, options);

		expect(output).toContain(
			'import type POGOProtos from "@na-ji/pogo-protos";',
		);
		expect(output).not.toContain(
			'export * from "./pokemon/settings/gen1.generated";',
		);
		expect(output).toContain('export * from "./pokemon/type-chart.generated";');
		expect(output).toContain(
			"export type PokemonMasterfileEntry = PokemonSettingsGen1MasterfileEntry | PokemonExtendedGen1MasterfileEntry | PokemonGenderGen1MasterfileEntry | PokemonFamilyMasterfileEntry | PokemonTypeChartMasterfileEntry | PokemonScaleMasterfileEntry | PokemonHomeMasterfileEntry | PokemonTagsMasterfileEntry | PokemonUpgradesMasterfileEntry;",
		);
		expect(output).toContain(
			"export interface PokemonSettingsByTemplateId extends PokemonSettingsGen1MasterfileByTemplateId {}",
		);
		expect(output).toContain(
			'export interface PokemonSettingsByDexId {\n  "0002": PokemonSettingsGen1ByDexId["0002"];\n}',
		);
		expect(output).toContain(
			'export interface PokemonSettingsByPokemonId {\n  "IVYSAUR": PokemonSettingsGen1ByPokemonId["IVYSAUR"];\n}',
		);
		expect(output).toContain(
			'export interface PokemonExtendedByPokemonId {\n  "IVYSAUR": PokemonExtendedGen1ByPokemonId["IVYSAUR"];\n}',
		);
		expect(output).toContain(
			'export interface PokemonGenderByPokemonId {\n  "IVYSAUR": PokemonGenderGen1ByPokemonId["IVYSAUR"];\n}',
		);
		expect(output).toContain(
			"export type MoveMasterfileEntry = MovesSettingsMasterfileEntry;",
		);
		expect(output).toContain(
			"export type ItemMasterfileEntry = ItemsSettingsMasterfileEntry;",
		);
		expect(output).toContain(
			"export type NormalizedPokemonSettings = POGOProtos.Rpc.IPokemonSettingsProto;",
		);
		expect(output).toContain(
			"export type NormalizedMoveSettings = POGOProtos.Rpc.IMoveSettingsProto;",
		);
		expect(output).toContain(
			"export type NormalizedItemSettings = POGOProtos.Rpc.IItemSettingsProto;",
		);
		expect(output).toContain(
			"export type NormalizedPokemonSettingsByTemplateId = {",
		);
	});

	test("TypeScript routes three-digit dex templateIds into the correct generation bucket", () => {
		const options = parseTypescriptArgs(["--all"]);
		const bundle = buildTypescriptFiles(
			[
				{
					templateId: "EXTENDED_V999_POKEMON_GIMMIGHOUL",
					data: {
						pokemonExtendedSettings: {
							uniqueId: "GIMMIGHOUL",
						},
					},
				},
			],
			options,
		);

		expect(bundle.files.map((file) => file.fileName)).toEqual([
			"pokemon/extended/gen9.generated.ts",
		]);
		expect(bundle.barrelContent).not.toContain("PokemonExtendedSpecial");
	});

	test("TypeScript keeps non-Pokemon local clusters on the raw fallback path", () => {
		const options = parseTypescriptArgs(["--all"]);
		const bundle = buildTypescriptFiles(
			[
				{
					templateId: "TEST_WIDGET_ALPHA",
					data: {
						testWidget: {
							correlatedId: "TEST_WIDGET_ALPHA",
							label: "alpha",
							values: [1, 2],
						},
					},
				},
				{
					templateId: "TEST_WIDGET_BETA",
					data: {
						testWidget: {
							correlatedId: "TEST_WIDGET_BETA",
							label: "beta",
							values: [1, 2, 3],
						},
					},
				},
			],
			options,
		);
		const miscFile = bundle.files.find(
			(file) => file.fileName === "misc.generated.ts",
		);

		expect(miscFile?.content).not.toContain("export interface TestWidget<");
		expect(miscFile?.content).toContain('templateId: "TEST_WIDGET_ALPHA";');
		expect(miscFile?.content).toContain('templateId: "TEST_WIDGET_BETA";');
	});

	test("TypeScript skips beautification for mixed-shape singleton clusters", () => {
		const options = parseTypescriptArgs(["--all"]);
		const bundle = buildTypescriptFiles(
			[
				{
					templateId: "TEST_WIDGET_ALPHA",
					data: {
						testWidget: {
							correlatedId: "TEST_WIDGET_ALPHA",
							values: [1, 2],
						},
					},
				},
				{
					templateId: "TEST_WIDGET_BETA",
					data: {
						testWidget: {
							correlatedId: "TEST_WIDGET_BETA",
							extra: true,
							values: [1, 2],
						},
					},
				},
			],
			options,
		);
		const miscFile = bundle.files.find(
			(file) => file.fileName === "misc.generated.ts",
		);

		expect(miscFile?.content).not.toContain(
			"export interface TestWidget<TTemplateId extends string> {",
		);
	});

	test("TypeScript emits shared Pokemon gender bases across generation files", () => {
		const options = parseTypescriptArgs(["--all"]);
		const bundle = buildTypescriptFiles(SHARED_GENDER_FIXTURE_ENTRIES, options);
		const fileMap = new Map(
			bundle.files.map((file) => [file.fileName, file.content]),
		);

		expect(bundle.files.map((file) => file.fileName).sort()).toEqual([
			"pokemon/gender/gen1.generated.ts",
			"pokemon/gender/gen2.generated.ts",
			"pokemon/gender/shared.generated.ts",
		]);
		expect(fileMap.get("pokemon/gender/shared.generated.ts")).toContain(
			"// Group: pokemon/gender/shared",
		);
		expect(fileMap.get("pokemon/gender/shared.generated.ts")).toContain(
			"export interface PokemonGenderShared<TTemplateId extends string, TPokemon extends string> {",
		);
		expect(fileMap.get("pokemon/gender/gen1.generated.ts")).toContain(
			'import type { PokemonGenderShared } from "./shared.generated";',
		);
		expect(fileMap.get("pokemon/gender/gen1.generated.ts")).toContain(
			'export type PokemonGenderBulbasaur = PokemonGenderShared<"SPAWN_V0001_POKEMON_BULBASAUR", "BULBASAUR">;',
		);
		expect(fileMap.get("pokemon/gender/gen1.generated.ts")).not.toContain(
			"export interface Spawn_v0001_pokemon_bulbasaurEntry {",
		);
		expect(fileMap.get("pokemon/gender/gen2.generated.ts")).toContain(
			'export type PokemonGenderChikorita = PokemonGenderShared<"SPAWN_V0152_POKEMON_CHIKORITA", "CHIKORITA">;',
		);
	});

	test("generated ergonomic helpers compile in a consumer import", () => {
		const options = parseTypescriptArgs(["--all"]);
		const bundle = buildTypescriptFiles(FIXTURE_ENTRIES, options);
		const tempDir = fs.mkdtempSync(
			path.join(process.cwd(), "node_modules/.tmp-pogo-types-"),
		);

		try {
			const outputRoot = path.join(tempDir, "generated");

			for (const file of bundle.files) {
				const targetPath = path.join(outputRoot, file.fileName);
				fs.mkdirSync(path.dirname(targetPath), { recursive: true });
				fs.writeFileSync(targetPath, file.content);
			}

			const indexPath = path.join(outputRoot, "index.ts");
			fs.writeFileSync(indexPath, bundle.barrelContent);

			const consumerPath = path.join(tempDir, "consumer.ts");
			fs.writeFileSync(
				consumerPath,
				[
					`import type { PokemonTypeMasterfileEntry, PokemonTypeTemplateId } from ${JSON.stringify(indexPath.replace(/\.ts$/, ""))};`,
					"declare const entry: PokemonTypeMasterfileEntry;",
					"const templateId: PokemonTypeTemplateId = entry.templateId;",
					"void templateId;",
				].join("\n"),
			);

			const tscPath = path.resolve("./node_modules/.bin/tsc");
			const result = Bun.spawnSync([
				tscPath,
				"--noEmit",
				"--moduleResolution",
				"bundler",
				"--module",
				"Preserve",
				"--target",
				"ESNext",
				"--verbatimModuleSyntax",
				"--strict",
				"--skipLibCheck",
				consumerPath,
			]);

			expect(result.exitCode).toBe(0);
		} finally {
			fs.rmSync(tempDir, { force: true, recursive: true });
		}
	});
});
