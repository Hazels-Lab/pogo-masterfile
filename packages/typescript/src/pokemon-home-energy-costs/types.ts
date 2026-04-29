// Generated from Pokémon GO masterfile — group "pokemonHomeEnergyCosts", 4 entries (structural types).

import type { W } from "../_utils";

export interface PokemonHomeEnergyCosts<TemplateID extends string = string, TData extends PokemonHomeEnergyCostsData = PokemonHomeEnergyCostsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		pokemonHomeEnergyCosts: TData;
	};
}
export type PokemonHomeEnergyCostsType = W<PokemonHomeEnergyCosts>;

export interface PokemonHomeEnergyCostsData {
	base: number;
	cp1001To2000: number;
	cp2001ToInf: number;
	pokemonClass?: "POKEMON_CLASS_LEGENDARY" | "POKEMON_CLASS_MYTHIC" | "POKEMON_CLASS_ULTRA_BEAST";
	shiny: number;
}

export type EnergyCostsPokemonClass =
	| "ENERGY_COSTS_POKEMON_CLASS_LEGENDARY"
	| "ENERGY_COSTS_POKEMON_CLASS_MYTHIC"
	| "ENERGY_COSTS_POKEMON_CLASS_NORMAL"
	| "ENERGY_COSTS_POKEMON_CLASS_ULTRA_BEAST";
