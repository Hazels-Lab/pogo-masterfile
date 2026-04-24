export interface LanguageSettings<T extends string> {
	templateId: T;
	data: LanguageSettingsData<T>;
}

export interface LanguageSettingsData<T extends string> {
	templateId: T;
	languageSettings: unknown;
}

export type LanguageSettingsHindi = LanguageSettings<"Hindi">;
export type LanguageSettingsIndonesian = LanguageSettings<"Indonesian">;
export type LanguageSettingsLatam = LanguageSettings<"LATAM">;

export type LanguageSettingsMasterfileEntry =
	| LanguageSettingsHindi
	| LanguageSettingsIndonesian
	| LanguageSettingsLatam;

export type LanguageSettingsTemplateID = LanguageSettingsMasterfileEntry["templateId"];
