// Generated from Pokémon GO masterfile — group "languageSettings", 3 entries.

import type { S } from "./_utils";
export interface LanguageSettings<TemplateID extends string = string, TData extends LanguageSettingsData = LanguageSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		languageSettings: TData & {
			isEnabled: true;
		};
	};
}

export interface LanguageSettingsData {
	language: "Hindi" | "Indonesian" | "spanishlatinamerican";
}

export type LanguageSettingsHindi = S<
	LanguageSettings<
		"Hindi",
		{
			language: "Hindi";
		}
	>
>;
export type LanguageSettingsIndonesian = S<
	LanguageSettings<
		"Indonesian",
		{
			language: "Indonesian";
		}
	>
>;
export type LanguageSettingsLatam = S<
	LanguageSettings<
		"LATAM",
		{
			language: "spanishlatinamerican";
		}
	>
>;

export type LanguageSettingsMasterfileEntry = LanguageSettingsHindi | LanguageSettingsIndonesian | LanguageSettingsLatam;

export type LanguageSettingsTemplateID = LanguageSettingsMasterfileEntry["templateId"];
