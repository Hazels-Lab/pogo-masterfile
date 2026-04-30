// Generated from Pokémon GO masterfile — group "moveSequenceSettings".

package masterfile

type MoveSequenceSettings struct {
	Sequence []string `json:"sequence"`
}

type MoveSequenceSettingsEntry struct {
	TemplateID string `json:"templateId"`
	Data       MoveSequenceSettingsEntryData `json:"data"`
}

func (MoveSequenceSettingsEntry) isMasterfileEntry() {}

type MoveSequenceSettingsEntryData struct {
	TemplateID     string `json:"templateId"`
	MoveSequenceSettings MoveSequenceSettings `json:"moveSequenceSettings"`
}
