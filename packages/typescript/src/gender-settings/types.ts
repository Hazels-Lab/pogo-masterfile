// Generated from Pokémon GO masterfile — group "genderSettings", 2463 entries (structural types).

export interface GenderSettings<TemplateID extends string = string, TData extends GenderSettingsData = GenderSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		genderSettings: TData;
	};
}

export interface GenderSettingsData {
	form?: number | string;
	gender: {
		femalePercent?: number;
		genderlessPercent?: number;
		malePercent?: number;
	};
	pokemon: string;
}
