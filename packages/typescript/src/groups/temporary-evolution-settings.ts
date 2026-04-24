export interface TemporaryEvolutionSettings<TemplateID extends string> {
	templateId: TemplateID;
	data: TemporaryEvolutionSettingsData<TemplateID>;
}

export interface TemporaryEvolutionSettingsData<TemplateID extends string> {
	templateId: TemplateID;
	temporaryEvolutionSettings: {
		pokemonId: TemporaryEvolutionSettingsPokemonID;
		temporaryEvolutions: Array<
			{
				assetBundleValue: TemporaryEvolutionSettingsTemporaryEvolutionsAssetBundleValue;
				temporaryEvolutionId: TemporaryEvolutionSettingsTemporaryEvolutionsTemporaryEvolutionID;
			}
		>;
	};
}

export type TemporaryEvolutionSettingsPokemonID = "ABOMASNOW" | "ABSOL" | "AERODACTYL" | "AGGRON" | "ALAKAZAM" | "ALTARIA" | "AMPHAROS" | "AUDINO" | "BANETTE" | "BEEDRILL" | "BLASTOISE" | "BLAZIKEN" | "CAMERUPT" | "CHARIZARD" | "DIANCIE" | "DRAGONITE" | "GALLADE" | "GARCHOMP" | "GARDEVOIR" | "GENGAR" | "GLALIE" | "GROUDON" | "GYARADOS" | "HERACROSS" | "HOUNDOOM" | "KANGASKHAN" | "KYOGRE" | "LATIAS" | "LATIOS" | "LOPUNNY" | "LUCARIO" | "MALAMAR" | "MANECTRIC" | "MAWILE" | "MEDICHAM" | "METAGROSS" | "PIDGEOT" | "PINSIR" | "RAYQUAZA" | "SABLEYE" | "SALAMENCE" | "SCEPTILE" | "SCIZOR" | "SHARPEDO" | "SLOWBRO" | "STEELIX" | "SWAMPERT" | "TYRANITAR" | "VENUSAUR" | "VICTREEBEL";

export type TemporaryEvolutionSettingsTemporaryEvolutionsAssetBundleValue = 51 | 52;

export type TemporaryEvolutionSettingsTemporaryEvolutionsTemporaryEvolutionID = "TEMP_EVOLUTION_MEGA" | "TEMP_EVOLUTION_MEGA_X" | "TEMP_EVOLUTION_MEGA_Y" | "TEMP_EVOLUTION_PRIMAL";

export type TemporaryEvolutionSettingsV0003PokemonVenusaur = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0003_POKEMON_VENUSAUR">;
export type TemporaryEvolutionSettingsV0006PokemonCharizard = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0006_POKEMON_CHARIZARD">;
export type TemporaryEvolutionSettingsV0009PokemonBlastoise = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0009_POKEMON_BLASTOISE">;
export type TemporaryEvolutionSettingsV0015PokemonBeedrill = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0015_POKEMON_BEEDRILL">;
export type TemporaryEvolutionSettingsV0018PokemonPidgeot = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0018_POKEMON_PIDGEOT">;
export type TemporaryEvolutionSettingsV0065PokemonAlakazam = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0065_POKEMON_ALAKAZAM">;
export type TemporaryEvolutionSettingsV0071PokemonVictreebel = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0071_POKEMON_VICTREEBEL">;
export type TemporaryEvolutionSettingsV0080PokemonSlowbro = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0080_POKEMON_SLOWBRO">;
export type TemporaryEvolutionSettingsV0094PokemonGengar = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0094_POKEMON_GENGAR">;
export type TemporaryEvolutionSettingsV0115PokemonKangaskhan = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0115_POKEMON_KANGASKHAN">;
export type TemporaryEvolutionSettingsV0127PokemonPinsir = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0127_POKEMON_PINSIR">;
export type TemporaryEvolutionSettingsV0130PokemonGyarados = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0130_POKEMON_GYARADOS">;
export type TemporaryEvolutionSettingsV0142PokemonAerodactyl = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0142_POKEMON_AERODACTYL">;
export type TemporaryEvolutionSettingsV0149PokemonDragonite = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0149_POKEMON_DRAGONITE">;
export type TemporaryEvolutionSettingsV0181PokemonAmpharos = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0181_POKEMON_AMPHAROS">;
export type TemporaryEvolutionSettingsV0208PokemonSteelix = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0208_POKEMON_STEELIX">;
export type TemporaryEvolutionSettingsV0212PokemonScizor = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0212_POKEMON_SCIZOR">;
export type TemporaryEvolutionSettingsV0214PokemonHeracross = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0214_POKEMON_HERACROSS">;
export type TemporaryEvolutionSettingsV0229PokemonHoundoom = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0229_POKEMON_HOUNDOOM">;
export type TemporaryEvolutionSettingsV0248PokemonTyranitar = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0248_POKEMON_TYRANITAR">;
export type TemporaryEvolutionSettingsV0254PokemonSceptile = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0254_POKEMON_SCEPTILE">;
export type TemporaryEvolutionSettingsV0257PokemonBlaziken = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0257_POKEMON_BLAZIKEN">;
export type TemporaryEvolutionSettingsV0260PokemonSwampert = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0260_POKEMON_SWAMPERT">;
export type TemporaryEvolutionSettingsV0282PokemonGardevoir = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0282_POKEMON_GARDEVOIR">;
export type TemporaryEvolutionSettingsV0302PokemonSableye = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0302_POKEMON_SABLEYE">;
export type TemporaryEvolutionSettingsV0303PokemonMawile = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0303_POKEMON_MAWILE">;
export type TemporaryEvolutionSettingsV0306PokemonAggron = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0306_POKEMON_AGGRON">;
export type TemporaryEvolutionSettingsV0308PokemonMedicham = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0308_POKEMON_MEDICHAM">;
export type TemporaryEvolutionSettingsV0310PokemonManectric = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0310_POKEMON_MANECTRIC">;
export type TemporaryEvolutionSettingsV0319PokemonSharpedo = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0319_POKEMON_SHARPEDO">;
export type TemporaryEvolutionSettingsV0323PokemonCamerupt = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0323_POKEMON_CAMERUPT">;
export type TemporaryEvolutionSettingsV0334PokemonAltaria = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0334_POKEMON_ALTARIA">;
export type TemporaryEvolutionSettingsV0354PokemonBanette = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0354_POKEMON_BANETTE">;
export type TemporaryEvolutionSettingsV0359PokemonAbsol = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0359_POKEMON_ABSOL">;
export type TemporaryEvolutionSettingsV0362PokemonGlalie = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0362_POKEMON_GLALIE">;
export type TemporaryEvolutionSettingsV0373PokemonSalamence = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0373_POKEMON_SALAMENCE">;
export type TemporaryEvolutionSettingsV0376PokemonMetagross = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0376_POKEMON_METAGROSS">;
export type TemporaryEvolutionSettingsV0380PokemonLatias = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0380_POKEMON_LATIAS">;
export type TemporaryEvolutionSettingsV0381PokemonLatios = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0381_POKEMON_LATIOS">;
export type TemporaryEvolutionSettingsV0382PokemonKyogre = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0382_POKEMON_KYOGRE">;
export type TemporaryEvolutionSettingsV0383PokemonGroudon = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0383_POKEMON_GROUDON">;
export type TemporaryEvolutionSettingsV0384PokemonRayquaza = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0384_POKEMON_RAYQUAZA">;
export type TemporaryEvolutionSettingsV0428PokemonGarchomp = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0428_POKEMON_GARCHOMP">;
export type TemporaryEvolutionSettingsV0428PokemonLopunny = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0428_POKEMON_LOPUNNY">;
export type TemporaryEvolutionSettingsV0448PokemonLucario = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0448_POKEMON_LUCARIO">;
export type TemporaryEvolutionSettingsV0460PokemonAbomasnow = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0460_POKEMON_ABOMASNOW">;
export type TemporaryEvolutionSettingsV0475PokemonGallade = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0475_POKEMON_GALLADE">;
export type TemporaryEvolutionSettingsV0531PokemonAudino = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0531_POKEMON_AUDINO">;
export type TemporaryEvolutionSettingsV0687PokemonMalamar = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0687_POKEMON_MALAMAR">;
export type TemporaryEvolutionSettingsV0719PokemonDiancie = TemporaryEvolutionSettings<"TEMPORARY_EVOLUTION_V0719_POKEMON_DIANCIE">;

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
