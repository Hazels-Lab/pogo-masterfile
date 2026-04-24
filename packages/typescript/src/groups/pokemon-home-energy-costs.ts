export interface PokemonHomeEnergyCosts<TemplateID extends string> {
	templateId: TemplateID;
	data: PokemonHomeEnergyCostsData<TemplateID>;
}

export interface PokemonHomeEnergyCostsData<TemplateID extends string> {
	templateId: TemplateID;
	pokemonHomeEnergyCosts: {
		base: PokemonHomeEnergyCostsBase;
		cp1001To2000: PokemonHomeEnergyCostsCp1001To2000;
		cp2001ToInf: PokemonHomeEnergyCostsCp2001ToInf;
		pokemonClass?: PokemonHomeEnergyCostsPokemonClass;
		shiny: PokemonHomeEnergyCostsShiny;
	};
}

export type PokemonHomeEnergyCostsBase = 10 | 1000 | 2000;

export type PokemonHomeEnergyCostsCp1001To2000 = 100 | 300 | 500;

export type PokemonHomeEnergyCostsCp2001ToInf = 300 | 500 | 700;

export type PokemonHomeEnergyCostsPokemonClass = "POKEMON_CLASS_LEGENDARY" | "POKEMON_CLASS_MYTHIC" | "POKEMON_CLASS_ULTRA_BEAST";

export type PokemonHomeEnergyCostsShiny = 1990 | 8000 | 9000;

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
