export interface PokemonHomeEnergyCosts<T extends string> {
	templateId: T;
	data: PokemonHomeEnergyCostsData<T>;
}

export interface PokemonHomeEnergyCostsData<T extends string> {
	templateId: T;
	pokemonHomeEnergyCosts: {
		base: 10 | 1000 | 2000;
		cp1001To2000: 100 | 300 | 500;
		cp2001ToInf: 300 | 500 | 700;
		pokemonClass?: "POKEMON_CLASS_LEGENDARY" | "POKEMON_CLASS_MYTHIC" | "POKEMON_CLASS_ULTRA_BEAST";
		shiny: 1990 | 8000 | 9000;
	};
}

export type PokemonHomeEnergyCostsLegendary = PokemonHomeEnergyCosts<"ENERGY_COSTS_POKEMON_CLASS_LEGENDARY">;
export type PokemonHomeEnergyCostsMythic = PokemonHomeEnergyCosts<"ENERGY_COSTS_POKEMON_CLASS_MYTHIC">;
export type PokemonHomeEnergyCostsNormal = PokemonHomeEnergyCosts<"ENERGY_COSTS_POKEMON_CLASS_NORMAL">;
export type PokemonHomeEnergyCostsUltraBeast = PokemonHomeEnergyCosts<"ENERGY_COSTS_POKEMON_CLASS_ULTRA_BEAST">;

export type PokemonHomeEnergyCostsMasterfileEntry =
	| PokemonHomeEnergyCostsLegendary
	| PokemonHomeEnergyCostsMythic
	| PokemonHomeEnergyCostsNormal
	| PokemonHomeEnergyCostsUltraBeast;

export type PokemonHomeEnergyCostsTemplateID = PokemonHomeEnergyCostsMasterfileEntry["templateId"];
