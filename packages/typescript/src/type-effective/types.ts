// Generated from Pokémon GO masterfile — group "typeEffective", 18 entries (structural types).

import type { W } from "../_utils";

export interface TypeEffective<TemplateID extends string = string, TData extends TypeEffectiveData = TypeEffectiveData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		typeEffective: TData & {
			attackType: TemplateID;
		};
	};
}
export type TypeEffectiveType = W<TypeEffective>;

export interface TypeEffectiveData {
	attackScalar: [
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
	];
}

export type PokemonType =
	| "POKEMON_TYPE_BUG"
	| "POKEMON_TYPE_DARK"
	| "POKEMON_TYPE_DRAGON"
	| "POKEMON_TYPE_ELECTRIC"
	| "POKEMON_TYPE_FAIRY"
	| "POKEMON_TYPE_FIGHTING"
	| "POKEMON_TYPE_FIRE"
	| "POKEMON_TYPE_FLYING"
	| "POKEMON_TYPE_GHOST"
	| "POKEMON_TYPE_GRASS"
	| "POKEMON_TYPE_GROUND"
	| "POKEMON_TYPE_ICE"
	| "POKEMON_TYPE_NORMAL"
	| "POKEMON_TYPE_POISON"
	| "POKEMON_TYPE_PSYCHIC"
	| "POKEMON_TYPE_ROCK"
	| "POKEMON_TYPE_STEEL"
	| "POKEMON_TYPE_WATER";
