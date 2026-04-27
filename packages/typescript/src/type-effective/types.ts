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
