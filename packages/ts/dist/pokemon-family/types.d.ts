// Generated from Pokémon GO masterfile — group "pokemonFamily", 541 entries (structural types).

import type { W } from "../_utils";

export interface PokemonFamily<TemplateID extends string = string, TData extends PokemonFamilyData = PokemonFamilyData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		pokemonFamily: TData & {
			candyPerXlCandy: 100;
		};
	};
}
export type PokemonFamilyType = W<PokemonFamily>;

export interface PokemonFamilyData {
	familyId: string;
	megaEvolvablePokemonId?:
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
		| "GARCHOMP"
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
	megaEvolvablePokemonIds?: ["GARDEVOIR", "GALLADE"];
}
