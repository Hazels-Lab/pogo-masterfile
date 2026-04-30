// Generated from Pokémon GO masterfile — group "buddyLevelSettings".

package masterfile

type BuddyLevelSettings struct {
	Level                          string   `json:"level"`
	MinNonCumulativePointsRequired *uint64  `json:"minNonCumulativePointsRequired,omitempty"`
	UnlockedTraits                 []string `json:"unlockedTraits,omitempty"`
}

type BuddyLevelSettingsEntry struct {
	TemplateID string                      `json:"templateId"`
	Data       BuddyLevelSettingsEntryData `json:"data"`
}

func (BuddyLevelSettingsEntry) isMasterfileEntry() {}

type BuddyLevelSettingsEntryData struct {
	TemplateID         string             `json:"templateId"`
	BuddyLevelSettings BuddyLevelSettings `json:"buddyLevelSettings"`
}
