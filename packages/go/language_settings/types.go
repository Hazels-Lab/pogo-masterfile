// Generated from Pokémon GO masterfile — group "languageSettings".

package language_settings

type LanguageSettings struct {
	IsEnabled bool   `json:"isEnabled"`
	Language  string `json:"language"`
}

type LanguageSettingsEntry struct {
	TemplateID string                    `json:"templateId"`
	Data       LanguageSettingsEntryData `json:"data"`
}

func (LanguageSettingsEntry) MasterfileEntry() {}

type LanguageSettingsEntryData struct {
	TemplateID       string           `json:"templateId"`
	LanguageSettings LanguageSettings `json:"languageSettings"`
}
