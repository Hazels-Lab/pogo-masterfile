// Generated from Pokémon GO masterfile — group "combatMove", 318 entries (structural types).

export interface CombatMove<TemplateID extends string = string, TData extends CombatMoveData = CombatMoveData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		combatMove: TData;
	};
}

export interface CombatMoveData {
	buffs?: {
		attackerAttackStatStageChange?: number;
		attackerDefenseStatStageChange?: number;
		buffActivationChance?: number;
		targetAttackStatStageChange?: number;
		targetDefenseStatStageChange?: number;
	};
	durationTurns?: number;
	energyDelta?: number;
	power?: number;
	type:
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
	uniqueId: string;
	vfxName: string;
}
