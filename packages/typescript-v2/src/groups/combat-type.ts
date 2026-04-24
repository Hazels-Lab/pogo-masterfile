export interface CombatType<T extends string> {
	templateId: T;
	data: CombatTypeData<T>;
}

export interface CombatTypeData<T extends string> {
	templateId: T;
	combatType: unknown;
}

export type CombatTypeBug = CombatType<"COMBAT_POKEMON_TYPE_BUG">;
export type CombatTypeDark = CombatType<"COMBAT_POKEMON_TYPE_DARK">;
export type CombatTypeDragon = CombatType<"COMBAT_POKEMON_TYPE_DRAGON">;
export type CombatTypeElectric = CombatType<"COMBAT_POKEMON_TYPE_ELECTRIC">;
export type CombatTypeFairy = CombatType<"COMBAT_POKEMON_TYPE_FAIRY">;
export type CombatTypeFighting = CombatType<"COMBAT_POKEMON_TYPE_FIGHTING">;
export type CombatTypeFire = CombatType<"COMBAT_POKEMON_TYPE_FIRE">;
export type CombatTypeFlying = CombatType<"COMBAT_POKEMON_TYPE_FLYING">;
export type CombatTypeGhost = CombatType<"COMBAT_POKEMON_TYPE_GHOST">;
export type CombatTypeGrass = CombatType<"COMBAT_POKEMON_TYPE_GRASS">;
export type CombatTypeGround = CombatType<"COMBAT_POKEMON_TYPE_GROUND">;
export type CombatTypeIce = CombatType<"COMBAT_POKEMON_TYPE_ICE">;
export type CombatTypeNormal = CombatType<"COMBAT_POKEMON_TYPE_NORMAL">;
export type CombatTypePoison = CombatType<"COMBAT_POKEMON_TYPE_POISON">;
export type CombatTypePsychic = CombatType<"COMBAT_POKEMON_TYPE_PSYCHIC">;
export type CombatTypeRock = CombatType<"COMBAT_POKEMON_TYPE_ROCK">;
export type CombatTypeSteel = CombatType<"COMBAT_POKEMON_TYPE_STEEL">;
export type CombatTypeWater = CombatType<"COMBAT_POKEMON_TYPE_WATER">;

export type CombatTypeMasterfileEntry =
	| CombatTypeBug
	| CombatTypeDark
	| CombatTypeDragon
	| CombatTypeElectric
	| CombatTypeFairy
	| CombatTypeFighting
	| CombatTypeFire
	| CombatTypeFlying
	| CombatTypeGhost
	| CombatTypeGrass
	| CombatTypeGround
	| CombatTypeIce
	| CombatTypeNormal
	| CombatTypePoison
	| CombatTypePsychic
	| CombatTypeRock
	| CombatTypeSteel
	| CombatTypeWater;

export type CombatTypeTemplateID = CombatTypeMasterfileEntry["templateId"];
