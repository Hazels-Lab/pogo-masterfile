export interface TypeEffective<T extends string> {
	templateId: T;
	data: TypeEffectiveData<T>;
}

export interface TypeEffectiveData<T extends string> {
	templateId: T;
	typeEffective: {
		attackScalar: [
			0.390625 | 1 | 1.6,
			0.625 | 1 | 1.6,
			0.390625 | 0.625 | 1 | 1.6,
			0.625 | 1 | 1.6,
			0.390625 | 0.625 | 1 | 1.6,
			0.625 | 1 | 1.6,
			0.625 | 1 | 1.6,
			0.390625 | 0.625 | 1 | 1.6,
			0.390625 | 0.625 | 1 | 1.6,
			0.625 | 1 | 1.6,
			0.625 | 1 | 1.6,
			0.625 | 1 | 1.6,
			0.625 | 1 | 1.6,
			0.625 | 1 | 1.6,
			0.625 | 1 | 1.6,
			0.625 | 1 | 1.6,
			0.390625 | 0.625 | 1 | 1.6,
			0.390625 | 0.625 | 1 | 1.6
		];
		attackType: "POKEMON_TYPE_BUG" | "POKEMON_TYPE_DARK" | "POKEMON_TYPE_DRAGON" | "POKEMON_TYPE_ELECTRIC" | "POKEMON_TYPE_FAIRY" | "POKEMON_TYPE_FIGHTING" | "POKEMON_TYPE_FIRE" | "POKEMON_TYPE_FLYING" | "POKEMON_TYPE_GHOST" | "POKEMON_TYPE_GRASS" | "POKEMON_TYPE_GROUND" | "POKEMON_TYPE_ICE" | "POKEMON_TYPE_NORMAL" | "POKEMON_TYPE_POISON" | "POKEMON_TYPE_PSYCHIC" | "POKEMON_TYPE_ROCK" | "POKEMON_TYPE_STEEL" | "POKEMON_TYPE_WATER";
	};
}

export type TypeEffectiveBug = TypeEffective<"POKEMON_TYPE_BUG">;
export type TypeEffectiveDark = TypeEffective<"POKEMON_TYPE_DARK">;
export type TypeEffectiveDragon = TypeEffective<"POKEMON_TYPE_DRAGON">;
export type TypeEffectiveElectric = TypeEffective<"POKEMON_TYPE_ELECTRIC">;
export type TypeEffectiveFairy = TypeEffective<"POKEMON_TYPE_FAIRY">;
export type TypeEffectiveFighting = TypeEffective<"POKEMON_TYPE_FIGHTING">;
export type TypeEffectiveFire = TypeEffective<"POKEMON_TYPE_FIRE">;
export type TypeEffectiveFlying = TypeEffective<"POKEMON_TYPE_FLYING">;
export type TypeEffectiveGhost = TypeEffective<"POKEMON_TYPE_GHOST">;
export type TypeEffectiveGrass = TypeEffective<"POKEMON_TYPE_GRASS">;
export type TypeEffectiveGround = TypeEffective<"POKEMON_TYPE_GROUND">;
export type TypeEffectiveIce = TypeEffective<"POKEMON_TYPE_ICE">;
export type TypeEffectiveNormal = TypeEffective<"POKEMON_TYPE_NORMAL">;
export type TypeEffectivePoison = TypeEffective<"POKEMON_TYPE_POISON">;
export type TypeEffectivePsychic = TypeEffective<"POKEMON_TYPE_PSYCHIC">;
export type TypeEffectiveRock = TypeEffective<"POKEMON_TYPE_ROCK">;
export type TypeEffectiveSteel = TypeEffective<"POKEMON_TYPE_STEEL">;
export type TypeEffectiveWater = TypeEffective<"POKEMON_TYPE_WATER">;

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
