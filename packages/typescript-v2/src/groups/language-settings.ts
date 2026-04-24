export interface LanguageSettings<TemplateID extends string> {
	templateId: TemplateID;
	data: LanguageSettingsData<TemplateID>;
}

export interface LanguageSettingsData<TemplateID extends string> {
	templateId: TemplateID;
	languageSettings: {
		isEnabled: true;
		language: LanguageSettingsLanguage;
	};
}

export type LanguageSettingsLanguage = "Hindi" | "Indonesian" | "spanishlatinamerican";

export type LanguageSettingsHindi = LanguageSettings<"Hindi">;
export type LanguageSettingsIndonesian = LanguageSettings<"Indonesian">;
export type LanguageSettingsLatam = LanguageSettings<"LATAM">;

export type LanguageSettingsMasterfileEntry =
	| LanguageSettingsHindi
	| LanguageSettingsIndonesian
	| LanguageSettingsLatam;

export type LanguageSettingsTemplateID = LanguageSettingsMasterfileEntry["templateId"];
