// Generated from Pokémon GO masterfile — group "typeEffective", 18 entries (structural types).

export type * from "./variants";

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
