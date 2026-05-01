// Generated from Pokémon GO masterfile — group "moveSequenceSettings".

package move_sequence_settings

type MoveSequenceSettings struct {
	Sequence []string `json:"sequence"`
}

type MoveSequenceSettingsEntry struct {
	TemplateID string `json:"templateId"`
	Data       MoveSequenceSettingsEntryData `json:"data"`
}

func (MoveSequenceSettingsEntry) MasterfileEntry() {}

type MoveSequenceSettingsEntryData struct {
	TemplateID     string `json:"templateId"`
	MoveSequenceSettings MoveSequenceSettings `json:"moveSequenceSettings"`
}
