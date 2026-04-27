// Generated from Pokémon GO masterfile — group "languageSettings", 3 entries (structural types).

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
