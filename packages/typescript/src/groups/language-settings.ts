export interface LanguageSettings<
	TemplateID extends string = string,
	TData extends LanguageSettingsData = LanguageSettingsData,
> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		languageSettings: TData & {
			isEnabled: true;
		};
	};
}

export interface LanguageSettingsData {
	language?: string;
}

export type LanguageSettingsHindi = LanguageSettings<
	"Hindi",
	{
		language: "Hindi";
	}
>;
export type LanguageSettingsIndonesian = LanguageSettings<
	"Indonesian",
	{
		language: "Indonesian";
	}
>;
export type LanguageSettingsLatam = LanguageSettings<
	"LATAM",
	{
		language: "spanishlatinamerican";
	}
>;

export type LanguageSettingsMasterfileEntry =
	| LanguageSettingsHindi
	| LanguageSettingsIndonesian
	| LanguageSettingsLatam;

export type LanguageSettingsTemplateID = LanguageSettingsMasterfileEntry["templateId"];
