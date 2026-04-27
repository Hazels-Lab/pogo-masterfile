// Generated from Pokémon GO masterfile — group "pokemonHomeEnergyCosts", 4 entries (structural types).

export type * from "./variants";

export interface PokemonHomeEnergyCosts<TemplateID extends string = string, TData extends PokemonHomeEnergyCostsData = PokemonHomeEnergyCostsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		pokemonHomeEnergyCosts: TData;
	};
}

export interface PokemonHomeEnergyCostsData {
	base: number;
	cp1001To2000: number;
	cp2001ToInf: number;
	pokemonClass?: "POKEMON_CLASS_LEGENDARY" | "POKEMON_CLASS_MYTHIC" | "POKEMON_CLASS_ULTRA_BEAST";
	shiny: number;
}

export type PokemonHomeEnergyCostsMasterfileEntry =
	| PokemonHomeEnergyCostsLegendary
	| PokemonHomeEnergyCostsMythic
	| PokemonHomeEnergyCostsNormal
	| PokemonHomeEnergyCostsUltraBeast;

export type PokemonHomeEnergyCostsTemplateID = PokemonHomeEnergyCostsMasterfileEntry["templateId"];
