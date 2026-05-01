// Generated from Pokémon GO masterfile — group "genderSettings".

package gender_settings

import "encoding/json"

type GenderSettingsGender struct {
	FemalePercent *float64 `json:"femalePercent,omitempty"`
	GenderlessPercent *float64 `json:"genderlessPercent,omitempty"`
	MalePercent *float64 `json:"malePercent,omitempty"`
}

type GenderSettings struct {
	Form json.RawMessage `json:"form,omitempty"`
	Gender GenderSettingsGender `json:"gender"`
	Pokemon string `json:"pokemon"`
}

type GenderSettingsEntry struct {
	TemplateID string `json:"templateId"`
	Data       GenderSettingsEntryData `json:"data"`
}

func (GenderSettingsEntry) MasterfileEntry() {}

type GenderSettingsEntryData struct {
	TemplateID     string `json:"templateId"`
	GenderSettings GenderSettings `json:"genderSettings"`
}
