export interface PokemonHomeEnergyCosts<
	TemplateID extends string = string,
	TData extends PokemonHomeEnergyCostsData = PokemonHomeEnergyCostsData,
> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		pokemonHomeEnergyCosts: TData;
	};
}

export interface PokemonHomeEnergyCostsData {
	base?: number;
	cp1001To2000?: number;
	cp2001ToInf?: number;
	pokemonClass?: string;
	shiny?: number;
}

export type PokemonHomeEnergyCostsLegendary = PokemonHomeEnergyCosts<
	"ENERGY_COSTS_POKEMON_CLASS_LEGENDARY",
	{
		base: 1000;
		cp1001To2000: 300;
		cp2001ToInf: 500;
		pokemonClass: "POKEMON_CLASS_LEGENDARY";
		shiny: 9000;
	}
>;
export type PokemonHomeEnergyCostsMythic = PokemonHomeEnergyCosts<
	"ENERGY_COSTS_POKEMON_CLASS_MYTHIC",
	{
		base: 2000;
		cp1001To2000: 500;
		cp2001ToInf: 700;
		pokemonClass: "POKEMON_CLASS_MYTHIC";
		shiny: 8000;
	}
>;
export type PokemonHomeEnergyCostsNormal = PokemonHomeEnergyCosts<
	"ENERGY_COSTS_POKEMON_CLASS_NORMAL",
	{
		base: 10;
		cp1001To2000: 100;
		cp2001ToInf: 300;
		shiny: 1990;
	}
>;
export type PokemonHomeEnergyCostsUltraBeast = PokemonHomeEnergyCosts<
	"ENERGY_COSTS_POKEMON_CLASS_ULTRA_BEAST",
	{
		base: 1000;
		cp1001To2000: 300;
		cp2001ToInf: 500;
		pokemonClass: "POKEMON_CLASS_ULTRA_BEAST";
		shiny: 9000;
	}
>;

export type PokemonHomeEnergyCostsMasterfileEntry =
	| PokemonHomeEnergyCostsLegendary
	| PokemonHomeEnergyCostsMythic
	| PokemonHomeEnergyCostsNormal
	| PokemonHomeEnergyCostsUltraBeast;

export type PokemonHomeEnergyCostsTemplateID = PokemonHomeEnergyCostsMasterfileEntry["templateId"];
