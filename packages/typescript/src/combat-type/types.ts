// Generated from Pokémon GO masterfile — group "combatType", 18 entries (structural types).

import type { W } from "../_utils";

export interface CombatType<TemplateID extends string = string, TData extends CombatTypeData = CombatTypeData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		combatType: TData & {
			excellentLevelThreshold: 0.95;
			niceLevelThreshold: 0.3;
			type: TemplateID extends `COMBAT_${infer Rest}` ? Rest : string;
		};
	};
}
export type CombatTypeType = W<CombatType>;

export interface CombatTypeData {
	greatLevelThreshold: number;
}

export type CombatPokemonType =
	| "COMBAT_POKEMON_TYPE_BUG"
	| "COMBAT_POKEMON_TYPE_DARK"
	| "COMBAT_POKEMON_TYPE_DRAGON"
	| "COMBAT_POKEMON_TYPE_ELECTRIC"
	| "COMBAT_POKEMON_TYPE_FAIRY"
	| "COMBAT_POKEMON_TYPE_FIGHTING"
	| "COMBAT_POKEMON_TYPE_FIRE"
	| "COMBAT_POKEMON_TYPE_FLYING"
	| "COMBAT_POKEMON_TYPE_GHOST"
	| "COMBAT_POKEMON_TYPE_GRASS"
	| "COMBAT_POKEMON_TYPE_GROUND"
	| "COMBAT_POKEMON_TYPE_ICE"
	| "COMBAT_POKEMON_TYPE_NORMAL"
	| "COMBAT_POKEMON_TYPE_POISON"
	| "COMBAT_POKEMON_TYPE_PSYCHIC"
	| "COMBAT_POKEMON_TYPE_ROCK"
	| "COMBAT_POKEMON_TYPE_STEEL"
	| "COMBAT_POKEMON_TYPE_WATER";
