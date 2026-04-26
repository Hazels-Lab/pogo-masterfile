// Generated from Pokémon GO masterfile — group "temporaryEvolutionSettings", 50 entries.

export interface TemporaryEvolutionSettings<
	TemplateID extends string = string,
	TData extends TemporaryEvolutionSettingsData = TemporaryEvolutionSettingsData,
> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		temporaryEvolutionSettings: TData;
	};
}

export interface TemporaryEvolutionSettingsData {
	pokemonId:
		| "ABOMASNOW"
		| "ABSOL"
		| "AERODACTYL"
		| "AGGRON"
		| "ALAKAZAM"
		| "ALTARIA"
		| "AMPHAROS"
		| "AUDINO"
		| "BANETTE"
		| "BEEDRILL"
		| "BLASTOISE"
		| "BLAZIKEN"
		| "CAMERUPT"
		| "CHARIZARD"
		| "DIANCIE"
		| "DRAGONITE"
		| "GALLADE"
		| "GARCHOMP"
		| "GARDEVOIR"
		| "GENGAR"
		| "GLALIE"
		| "GROUDON"
		| "GYARADOS"
		| "HERACROSS"
		| "HOUNDOOM"
		| "KANGASKHAN"
		| "KYOGRE"
		| "LATIAS"
		| "LATIOS"
		| "LOPUNNY"
		| "LUCARIO"
		| "MALAMAR"
		| "MANECTRIC"
		| "MAWILE"
		| "MEDICHAM"
		| "METAGROSS"
		| "PIDGEOT"
		| "PINSIR"
		| "RAYQUAZA"
		| "SABLEYE"
		| "SALAMENCE"
		| "SCEPTILE"
		| "SCIZOR"
		| "SHARPEDO"
		| "SLOWBRO"
		| "STEELIX"
		| "SWAMPERT"
		| "TYRANITAR"
		| "VENUSAUR"
		| "VICTREEBEL";
	temporaryEvolutions: Array<{
		assetBundleValue: number;
		temporaryEvolutionId: "TEMP_EVOLUTION_MEGA" | "TEMP_EVOLUTION_MEGA_X" | "TEMP_EVOLUTION_MEGA_Y" | "TEMP_EVOLUTION_PRIMAL";
	}>;
}

export type TemporaryEvolutionSettingsV0003PokemonVenusaur = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0003_POKEMON_VENUSAUR",
	{
		pokemonId: "VENUSAUR";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0006PokemonCharizard = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0006_POKEMON_CHARIZARD",
	{
		pokemonId: "CHARIZARD";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA_X";
			},
			{
				assetBundleValue: 52;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA_Y";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0009PokemonBlastoise = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0009_POKEMON_BLASTOISE",
	{
		pokemonId: "BLASTOISE";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0015PokemonBeedrill = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0015_POKEMON_BEEDRILL",
	{
		pokemonId: "BEEDRILL";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0018PokemonPidgeot = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0018_POKEMON_PIDGEOT",
	{
		pokemonId: "PIDGEOT";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0065PokemonAlakazam = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0065_POKEMON_ALAKAZAM",
	{
		pokemonId: "ALAKAZAM";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0071PokemonVictreebel = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0071_POKEMON_VICTREEBEL",
	{
		pokemonId: "VICTREEBEL";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0080PokemonSlowbro = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0080_POKEMON_SLOWBRO",
	{
		pokemonId: "SLOWBRO";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0094PokemonGengar = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0094_POKEMON_GENGAR",
	{
		pokemonId: "GENGAR";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0115PokemonKangaskhan = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0115_POKEMON_KANGASKHAN",
	{
		pokemonId: "KANGASKHAN";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0127PokemonPinsir = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0127_POKEMON_PINSIR",
	{
		pokemonId: "PINSIR";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0130PokemonGyarados = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0130_POKEMON_GYARADOS",
	{
		pokemonId: "GYARADOS";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0142PokemonAerodactyl = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0142_POKEMON_AERODACTYL",
	{
		pokemonId: "AERODACTYL";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0149PokemonDragonite = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0149_POKEMON_DRAGONITE",
	{
		pokemonId: "DRAGONITE";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0181PokemonAmpharos = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0181_POKEMON_AMPHAROS",
	{
		pokemonId: "AMPHAROS";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0208PokemonSteelix = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0208_POKEMON_STEELIX",
	{
		pokemonId: "STEELIX";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0212PokemonScizor = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0212_POKEMON_SCIZOR",
	{
		pokemonId: "SCIZOR";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0214PokemonHeracross = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0214_POKEMON_HERACROSS",
	{
		pokemonId: "HERACROSS";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0229PokemonHoundoom = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0229_POKEMON_HOUNDOOM",
	{
		pokemonId: "HOUNDOOM";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0248PokemonTyranitar = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0248_POKEMON_TYRANITAR",
	{
		pokemonId: "TYRANITAR";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0254PokemonSceptile = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0254_POKEMON_SCEPTILE",
	{
		pokemonId: "SCEPTILE";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0257PokemonBlaziken = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0257_POKEMON_BLAZIKEN",
	{
		pokemonId: "BLAZIKEN";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0260PokemonSwampert = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0260_POKEMON_SWAMPERT",
	{
		pokemonId: "SWAMPERT";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0282PokemonGardevoir = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0282_POKEMON_GARDEVOIR",
	{
		pokemonId: "GARDEVOIR";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0302PokemonSableye = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0302_POKEMON_SABLEYE",
	{
		pokemonId: "SABLEYE";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0303PokemonMawile = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0303_POKEMON_MAWILE",
	{
		pokemonId: "MAWILE";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0306PokemonAggron = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0306_POKEMON_AGGRON",
	{
		pokemonId: "AGGRON";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0308PokemonMedicham = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0308_POKEMON_MEDICHAM",
	{
		pokemonId: "MEDICHAM";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0310PokemonManectric = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0310_POKEMON_MANECTRIC",
	{
		pokemonId: "MANECTRIC";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0319PokemonSharpedo = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0319_POKEMON_SHARPEDO",
	{
		pokemonId: "SHARPEDO";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0323PokemonCamerupt = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0323_POKEMON_CAMERUPT",
	{
		pokemonId: "CAMERUPT";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0334PokemonAltaria = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0334_POKEMON_ALTARIA",
	{
		pokemonId: "ALTARIA";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0354PokemonBanette = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0354_POKEMON_BANETTE",
	{
		pokemonId: "BANETTE";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0359PokemonAbsol = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0359_POKEMON_ABSOL",
	{
		pokemonId: "ABSOL";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0362PokemonGlalie = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0362_POKEMON_GLALIE",
	{
		pokemonId: "GLALIE";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0373PokemonSalamence = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0373_POKEMON_SALAMENCE",
	{
		pokemonId: "SALAMENCE";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0376PokemonMetagross = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0376_POKEMON_METAGROSS",
	{
		pokemonId: "METAGROSS";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0380PokemonLatias = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0380_POKEMON_LATIAS",
	{
		pokemonId: "LATIAS";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0381PokemonLatios = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0381_POKEMON_LATIOS",
	{
		pokemonId: "LATIOS";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0382PokemonKyogre = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0382_POKEMON_KYOGRE",
	{
		pokemonId: "KYOGRE";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_PRIMAL";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0383PokemonGroudon = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0383_POKEMON_GROUDON",
	{
		pokemonId: "GROUDON";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_PRIMAL";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0384PokemonRayquaza = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0384_POKEMON_RAYQUAZA",
	{
		pokemonId: "RAYQUAZA";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0428PokemonGarchomp = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0428_POKEMON_GARCHOMP",
	{
		pokemonId: "GARCHOMP";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0428PokemonLopunny = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0428_POKEMON_LOPUNNY",
	{
		pokemonId: "LOPUNNY";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0448PokemonLucario = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0448_POKEMON_LUCARIO",
	{
		pokemonId: "LUCARIO";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0460PokemonAbomasnow = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0460_POKEMON_ABOMASNOW",
	{
		pokemonId: "ABOMASNOW";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0475PokemonGallade = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0475_POKEMON_GALLADE",
	{
		pokemonId: "GALLADE";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0531PokemonAudino = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0531_POKEMON_AUDINO",
	{
		pokemonId: "AUDINO";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0687PokemonMalamar = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0687_POKEMON_MALAMAR",
	{
		pokemonId: "MALAMAR";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;
export type TemporaryEvolutionSettingsV0719PokemonDiancie = TemporaryEvolutionSettings<
	"TEMPORARY_EVOLUTION_V0719_POKEMON_DIANCIE",
	{
		pokemonId: "DIANCIE";
		temporaryEvolutions: [
			{
				assetBundleValue: 51;
				temporaryEvolutionId: "TEMP_EVOLUTION_MEGA";
			},
		];
	}
>;

export type TemporaryEvolutionSettingsMasterfileEntry =
	| TemporaryEvolutionSettingsV0003PokemonVenusaur
	| TemporaryEvolutionSettingsV0006PokemonCharizard
	| TemporaryEvolutionSettingsV0009PokemonBlastoise
	| TemporaryEvolutionSettingsV0015PokemonBeedrill
	| TemporaryEvolutionSettingsV0018PokemonPidgeot
	| TemporaryEvolutionSettingsV0065PokemonAlakazam
	| TemporaryEvolutionSettingsV0071PokemonVictreebel
	| TemporaryEvolutionSettingsV0080PokemonSlowbro
	| TemporaryEvolutionSettingsV0094PokemonGengar
	| TemporaryEvolutionSettingsV0115PokemonKangaskhan
	| TemporaryEvolutionSettingsV0127PokemonPinsir
	| TemporaryEvolutionSettingsV0130PokemonGyarados
	| TemporaryEvolutionSettingsV0142PokemonAerodactyl
	| TemporaryEvolutionSettingsV0149PokemonDragonite
	| TemporaryEvolutionSettingsV0181PokemonAmpharos
	| TemporaryEvolutionSettingsV0208PokemonSteelix
	| TemporaryEvolutionSettingsV0212PokemonScizor
	| TemporaryEvolutionSettingsV0214PokemonHeracross
	| TemporaryEvolutionSettingsV0229PokemonHoundoom
	| TemporaryEvolutionSettingsV0248PokemonTyranitar
	| TemporaryEvolutionSettingsV0254PokemonSceptile
	| TemporaryEvolutionSettingsV0257PokemonBlaziken
	| TemporaryEvolutionSettingsV0260PokemonSwampert
	| TemporaryEvolutionSettingsV0282PokemonGardevoir
	| TemporaryEvolutionSettingsV0302PokemonSableye
	| TemporaryEvolutionSettingsV0303PokemonMawile
	| TemporaryEvolutionSettingsV0306PokemonAggron
	| TemporaryEvolutionSettingsV0308PokemonMedicham
	| TemporaryEvolutionSettingsV0310PokemonManectric
	| TemporaryEvolutionSettingsV0319PokemonSharpedo
	| TemporaryEvolutionSettingsV0323PokemonCamerupt
	| TemporaryEvolutionSettingsV0334PokemonAltaria
	| TemporaryEvolutionSettingsV0354PokemonBanette
	| TemporaryEvolutionSettingsV0359PokemonAbsol
	| TemporaryEvolutionSettingsV0362PokemonGlalie
	| TemporaryEvolutionSettingsV0373PokemonSalamence
	| TemporaryEvolutionSettingsV0376PokemonMetagross
	| TemporaryEvolutionSettingsV0380PokemonLatias
	| TemporaryEvolutionSettingsV0381PokemonLatios
	| TemporaryEvolutionSettingsV0382PokemonKyogre
	| TemporaryEvolutionSettingsV0383PokemonGroudon
	| TemporaryEvolutionSettingsV0384PokemonRayquaza
	| TemporaryEvolutionSettingsV0428PokemonGarchomp
	| TemporaryEvolutionSettingsV0428PokemonLopunny
	| TemporaryEvolutionSettingsV0448PokemonLucario
	| TemporaryEvolutionSettingsV0460PokemonAbomasnow
	| TemporaryEvolutionSettingsV0475PokemonGallade
	| TemporaryEvolutionSettingsV0531PokemonAudino
	| TemporaryEvolutionSettingsV0687PokemonMalamar
	| TemporaryEvolutionSettingsV0719PokemonDiancie;

export type TemporaryEvolutionSettingsTemplateID = TemporaryEvolutionSettingsMasterfileEntry["templateId"];
