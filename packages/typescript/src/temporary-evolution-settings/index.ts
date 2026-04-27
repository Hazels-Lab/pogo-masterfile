// Generated from Pokémon GO masterfile — group "temporaryEvolutionSettings", 50 entries (structural types).

export type * from "./variants";

export interface TemporaryEvolutionSettings<TemplateID extends string = string, TData extends TemporaryEvolutionSettingsData = TemporaryEvolutionSettingsData> {
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
