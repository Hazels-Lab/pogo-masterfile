// Generated from Pokémon GO masterfile — group "moveSettings", 384 entries (structural types).

export interface MoveSettings<TemplateID extends string = string, TData extends MoveSettingsData = MoveSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		moveSettings: TData & {
			accuracyChance: 1;
		};
	};
}

export interface MoveSettingsData {
	animationId: number;
	criticalChance?: number;
	damageWindowEndMs: number;
	damageWindowStartMs?: number;
	durationMs: number;
	energyDelta?: number;
	healScalar?: number;
	isLocked?: boolean;
	movementId: string;
	obMoveSettingsNumber18?: [number, number, number, number];
	pokemonType:
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
	power?: number;
	staminaLossScalar?: number;
	trainerLevelMax?: number;
	trainerLevelMin?: number;
	vfxName: string;
}
