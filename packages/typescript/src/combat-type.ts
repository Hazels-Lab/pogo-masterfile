// Generated from Pokémon GO masterfile — group "combatType", 18 entries.

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

export interface CombatTypeData {
	greatLevelThreshold: number;
}

export type CombatTypeBug = CombatType<
	"COMBAT_POKEMON_TYPE_BUG",
	{
		greatLevelThreshold: 0.7;
	}
>;
export type CombatTypeDark = CombatType<
	"COMBAT_POKEMON_TYPE_DARK",
	{
		greatLevelThreshold: 0.7;
	}
>;
export type CombatTypeDragon = CombatType<
	"COMBAT_POKEMON_TYPE_DRAGON",
	{
		greatLevelThreshold: 0.7;
	}
>;
export type CombatTypeElectric = CombatType<
	"COMBAT_POKEMON_TYPE_ELECTRIC",
	{
		greatLevelThreshold: 0.7;
	}
>;
export type CombatTypeFairy = CombatType<
	"COMBAT_POKEMON_TYPE_FAIRY",
	{
		greatLevelThreshold: 0.7;
	}
>;
export type CombatTypeFighting = CombatType<
	"COMBAT_POKEMON_TYPE_FIGHTING",
	{
		greatLevelThreshold: 0.7;
	}
>;
export type CombatTypeFire = CombatType<
	"COMBAT_POKEMON_TYPE_FIRE",
	{
		greatLevelThreshold: 0.7;
	}
>;
export type CombatTypeFlying = CombatType<
	"COMBAT_POKEMON_TYPE_FLYING",
	{
		greatLevelThreshold: 0.7;
	}
>;
export type CombatTypeGhost = CombatType<
	"COMBAT_POKEMON_TYPE_GHOST",
	{
		greatLevelThreshold: 0.7;
	}
>;
export type CombatTypeGrass = CombatType<
	"COMBAT_POKEMON_TYPE_GRASS",
	{
		greatLevelThreshold: 0.7;
	}
>;
export type CombatTypeGround = CombatType<
	"COMBAT_POKEMON_TYPE_GROUND",
	{
		greatLevelThreshold: 0.7;
	}
>;
export type CombatTypeIce = CombatType<
	"COMBAT_POKEMON_TYPE_ICE",
	{
		greatLevelThreshold: 0.7;
	}
>;
export type CombatTypeNormal = CombatType<
	"COMBAT_POKEMON_TYPE_NORMAL",
	{
		greatLevelThreshold: 0.6;
	}
>;
export type CombatTypePoison = CombatType<
	"COMBAT_POKEMON_TYPE_POISON",
	{
		greatLevelThreshold: 0.7;
	}
>;
export type CombatTypePsychic = CombatType<
	"COMBAT_POKEMON_TYPE_PSYCHIC",
	{
		greatLevelThreshold: 0.7;
	}
>;
export type CombatTypeRock = CombatType<
	"COMBAT_POKEMON_TYPE_ROCK",
	{
		greatLevelThreshold: 0.7;
	}
>;
export type CombatTypeSteel = CombatType<
	"COMBAT_POKEMON_TYPE_STEEL",
	{
		greatLevelThreshold: 0.7;
	}
>;
export type CombatTypeWater = CombatType<
	"COMBAT_POKEMON_TYPE_WATER",
	{
		greatLevelThreshold: 0.7;
	}
>;

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
