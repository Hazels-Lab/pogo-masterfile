// Generated from Pokémon GO masterfile — group "genderSettings", 2464 entries (structural types).

import type { W } from "../_utils";

export interface GenderSettings<TemplateID extends string = string, TData extends GenderSettingsData = GenderSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		genderSettings: TData;
	};
}
export type GenderSettingsType = W<GenderSettings>;

export interface GenderSettingsData {
	form?: number | string;
	gender: {
		femalePercent?: number;
		genderlessPercent?: number;
		malePercent?: number;
	};
	pokemon: string;
}
