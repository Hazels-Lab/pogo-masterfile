// Generated from Pokémon GO masterfile — group "buddyLevelSettings".

package buddy_level_settings

type BuddyLevelSettings struct {
	Level                          string   `json:"level"`
	MinNonCumulativePointsRequired *uint64  `json:"minNonCumulativePointsRequired,omitempty"`
	UnlockedTraits                 []string `json:"unlockedTraits,omitempty"`
}

type BuddyLevelSettingsEntry struct {
	TemplateID string                      `json:"templateId"`
	Data       BuddyLevelSettingsEntryData `json:"data"`
}

func (BuddyLevelSettingsEntry) MasterfileEntry() {}

type BuddyLevelSettingsEntryData struct {
	TemplateID         string             `json:"templateId"`
	BuddyLevelSettings BuddyLevelSettings `json:"buddyLevelSettings"`
}
