// Generated from Pokémon GO masterfile — group "buddyEmotionLevelSettings".

package masterfile

type BuddyEmotionLevelSettings struct {
	EmotionAnimation string `json:"emotionAnimation"`
	EmotionLevel string `json:"emotionLevel"`
	MinEmotionPointsRequired *uint64 `json:"minEmotionPointsRequired,omitempty"`
}

type BuddyEmotionLevelSettingsEntry struct {
	TemplateID string `json:"templateId"`
	Data       BuddyEmotionLevelSettingsEntryData `json:"data"`
}

func (BuddyEmotionLevelSettingsEntry) isMasterfileEntry() {}

type BuddyEmotionLevelSettingsEntryData struct {
	TemplateID     string `json:"templateId"`
	BuddyEmotionLevelSettings BuddyEmotionLevelSettings `json:"buddyEmotionLevelSettings"`
}
