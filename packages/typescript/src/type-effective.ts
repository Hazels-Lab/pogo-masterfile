// Generated from Pokémon GO masterfile — group "typeEffective", 18 entries.

export interface TypeEffective<TemplateID extends string = string, TData extends TypeEffectiveData = TypeEffectiveData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		typeEffective: TData & {
			attackType: TemplateID;
		};
	};
}

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

export type TypeEffectiveBug = TypeEffective<
	"POKEMON_TYPE_BUG",
	{
		attackScalar: [1, 0.625, 0.625, 0.625, 1, 1, 1, 0.625, 0.625, 0.625, 1, 1.6, 1, 1.6, 1, 1, 1.6, 0.625];
	}
>;
export type TypeEffectiveDark = TypeEffective<
	"POKEMON_TYPE_DARK",
	{
		attackScalar: [1, 0.625, 1, 1, 1, 1, 1, 1.6, 1, 1, 1, 1, 1, 1.6, 1, 1, 0.625, 0.625];
	}
>;
export type TypeEffectiveDragon = TypeEffective<
	"POKEMON_TYPE_DRAGON",
	{
		attackScalar: [1, 1, 1, 1, 1, 1, 1, 1, 0.625, 1, 1, 1, 1, 1, 1, 1.6, 1, 0.390625];
	}
>;
export type TypeEffectiveElectric = TypeEffective<
	"POKEMON_TYPE_ELECTRIC",
	{
		attackScalar: [1, 1, 1.6, 1, 0.390625, 1, 1, 1, 1, 1, 1.6, 0.625, 0.625, 1, 1, 0.625, 1, 1];
	}
>;
export type TypeEffectiveFairy = TypeEffective<
	"POKEMON_TYPE_FAIRY",
	{
		attackScalar: [1, 1.6, 1, 0.625, 1, 1, 1, 1, 0.625, 0.625, 1, 1, 1, 1, 1, 1.6, 1.6, 1];
	}
>;
export type TypeEffectiveFighting = TypeEffective<
	"POKEMON_TYPE_FIGHTING",
	{
		attackScalar: [1.6, 1, 0.625, 0.625, 1, 1.6, 0.625, 0.390625, 1.6, 1, 1, 1, 1, 0.625, 1.6, 1, 1.6, 0.625];
	}
>;
export type TypeEffectiveFire = TypeEffective<
	"POKEMON_TYPE_FIRE",
	{
		attackScalar: [1, 1, 1, 1, 1, 0.625, 1.6, 1, 1.6, 0.625, 0.625, 1.6, 1, 1, 1.6, 0.625, 1, 1];
	}
>;
export type TypeEffectiveFlying = TypeEffective<
	"POKEMON_TYPE_FLYING",
	{
		attackScalar: [1, 1.6, 1, 1, 1, 0.625, 1.6, 1, 0.625, 1, 1, 1.6, 0.625, 1, 1, 1, 1, 1];
	}
>;
export type TypeEffectiveGhost = TypeEffective<
	"POKEMON_TYPE_GHOST",
	{
		attackScalar: [0.390625, 1, 1, 1, 1, 1, 1, 1.6, 1, 1, 1, 1, 1, 1.6, 1, 1, 0.625, 1];
	}
>;
export type TypeEffectiveGrass = TypeEffective<
	"POKEMON_TYPE_GRASS",
	{
		attackScalar: [1, 1, 0.625, 0.625, 1.6, 1.6, 0.625, 1, 0.625, 0.625, 1.6, 0.625, 1, 1, 1, 0.625, 1, 1];
	}
>;
export type TypeEffectiveGround = TypeEffective<
	"POKEMON_TYPE_GROUND",
	{
		attackScalar: [1, 1, 0.390625, 1.6, 1, 1.6, 0.625, 1, 1.6, 1.6, 1, 0.625, 1.6, 1, 1, 1, 1, 1];
	}
>;
export type TypeEffectiveIce = TypeEffective<
	"POKEMON_TYPE_ICE",
	{
		attackScalar: [1, 1, 1.6, 1, 1.6, 1, 1, 1, 0.625, 0.625, 0.625, 1.6, 1, 1, 0.625, 1.6, 1, 1];
	}
>;
export type TypeEffectiveNormal = TypeEffective<
	"POKEMON_TYPE_NORMAL",
	{
		attackScalar: [1, 1, 1, 1, 1, 0.625, 1, 0.390625, 0.625, 1, 1, 1, 1, 1, 1, 1, 1, 1];
	}
>;
export type TypeEffectivePoison = TypeEffective<
	"POKEMON_TYPE_POISON",
	{
		attackScalar: [1, 1, 1, 0.625, 0.625, 0.625, 1, 0.625, 0.390625, 1, 1, 1.6, 1, 1, 1, 1, 1, 1.6];
	}
>;
export type TypeEffectivePsychic = TypeEffective<
	"POKEMON_TYPE_PSYCHIC",
	{
		attackScalar: [1, 1.6, 1, 1.6, 1, 1, 1, 1, 0.625, 1, 1, 1, 1, 0.625, 1, 1, 0.390625, 1];
	}
>;
export type TypeEffectiveRock = TypeEffective<
	"POKEMON_TYPE_ROCK",
	{
		attackScalar: [1, 0.625, 1.6, 1, 0.625, 1, 1.6, 1, 0.625, 1.6, 1, 1, 1, 1, 1.6, 1, 1, 1];
	}
>;
export type TypeEffectiveSteel = TypeEffective<
	"POKEMON_TYPE_STEEL",
	{
		attackScalar: [1, 1, 1, 1, 1, 1.6, 1, 1, 0.625, 0.625, 0.625, 1, 0.625, 1, 1.6, 1, 1, 1.6];
	}
>;
export type TypeEffectiveWater = TypeEffective<
	"POKEMON_TYPE_WATER",
	{
		attackScalar: [1, 1, 1, 1, 1.6, 1.6, 1, 1, 1, 1.6, 0.625, 0.625, 1, 1, 1, 0.625, 1, 1];
	}
>;

export type TypeEffectiveMasterfileEntry =
	| TypeEffectiveBug
	| TypeEffectiveDark
	| TypeEffectiveDragon
	| TypeEffectiveElectric
	| TypeEffectiveFairy
	| TypeEffectiveFighting
	| TypeEffectiveFire
	| TypeEffectiveFlying
	| TypeEffectiveGhost
	| TypeEffectiveGrass
	| TypeEffectiveGround
	| TypeEffectiveIce
	| TypeEffectiveNormal
	| TypeEffectivePoison
	| TypeEffectivePsychic
	| TypeEffectiveRock
	| TypeEffectiveSteel
	| TypeEffectiveWater;

export type TypeEffectiveTemplateID = TypeEffectiveMasterfileEntry["templateId"];
