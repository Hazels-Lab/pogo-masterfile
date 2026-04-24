export interface CombatType<TemplateID extends string> {
	templateId: TemplateID;
	data: CombatTypeData<TemplateID>;
}

export interface CombatTypeData<TemplateID extends string> {
	templateId: TemplateID;
	combatType: {
		excellentLevelThreshold: 0.95;
		greatLevelThreshold: CombatTypeGreatLevelThreshold;
		niceLevelThreshold: 0.3;
		"type": CombatTypeType;
	};
}

export type CombatTypeGreatLevelThreshold = 0.6 | 0.7;

export type CombatTypeType = "POKEMON_TYPE_BUG" | "POKEMON_TYPE_DARK" | "POKEMON_TYPE_DRAGON" | "POKEMON_TYPE_ELECTRIC" | "POKEMON_TYPE_FAIRY" | "POKEMON_TYPE_FIGHTING" | "POKEMON_TYPE_FIRE" | "POKEMON_TYPE_FLYING" | "POKEMON_TYPE_GHOST" | "POKEMON_TYPE_GRASS" | "POKEMON_TYPE_GROUND" | "POKEMON_TYPE_ICE" | "POKEMON_TYPE_NORMAL" | "POKEMON_TYPE_POISON" | "POKEMON_TYPE_PSYCHIC" | "POKEMON_TYPE_ROCK" | "POKEMON_TYPE_STEEL" | "POKEMON_TYPE_WATER";

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
