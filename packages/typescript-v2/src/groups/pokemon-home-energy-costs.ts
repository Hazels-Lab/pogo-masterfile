export interface PokemonHomeEnergyCosts<T extends string> {
	templateId: T;
	data: PokemonHomeEnergyCostsData<T>;
}

export interface PokemonHomeEnergyCostsData<T extends string> {
	templateId: T;
	pokemonHomeEnergyCosts: unknown;
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
