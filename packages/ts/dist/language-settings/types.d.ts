// Generated from Pokémon GO masterfile — group "languageSettings", 3 entries (structural types).

import type { W } from "../_utils";

export interface LanguageSettings<TemplateID extends string = string, TData extends LanguageSettingsData = LanguageSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		languageSettings: TData & {
			isEnabled: true;
		};
	};
}
export type LanguageSettingsType = W<LanguageSettings>;

export interface LanguageSettingsData {
	language: "Hindi" | "Indonesian" | "spanishlatinamerican";
}
