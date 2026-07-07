// Generated from Pokémon GO masterfile — group "temporaryEvolutionSettings", 55 entries (structural types).

import type { W } from "../_utils";

export interface TemporaryEvolutionSettings<TemplateID extends string = string, TData extends TemporaryEvolutionSettingsData = TemporaryEvolutionSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		temporaryEvolutionSettings: TData;
	};
}
export type TemporaryEvolutionSettingsType = W<TemporaryEvolutionSettings>;

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
		| "FALINKS"
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
		| "MEWTWO"
		| "PIDGEOT"
		| "PINSIR"
		| "RAICHU"
		| "RAYQUAZA"
		| "SABLEYE"
		| "SALAMENCE"
		| "SCEPTILE"
		| "SCIZOR"
		| "SHARPEDO"
		| "SKARMORY"
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
