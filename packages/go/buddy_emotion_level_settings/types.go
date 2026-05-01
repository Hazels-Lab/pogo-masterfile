// Generated from Pokémon GO masterfile — group "buddyEmotionLevelSettings".

package buddy_emotion_level_settings

type BuddyEmotionLevelSettings struct {
	EmotionAnimation         string  `json:"emotionAnimation"`
	EmotionLevel             string  `json:"emotionLevel"`
	MinEmotionPointsRequired *uint64 `json:"minEmotionPointsRequired,omitempty"`
}

type BuddyEmotionLevelSettingsEntry struct {
	TemplateID string                             `json:"templateId"`
	Data       BuddyEmotionLevelSettingsEntryData `json:"data"`
}

func (BuddyEmotionLevelSettingsEntry) MasterfileEntry() {}

type BuddyEmotionLevelSettingsEntryData struct {
	TemplateID                string                    `json:"templateId"`
	BuddyEmotionLevelSettings BuddyEmotionLevelSettings `json:"buddyEmotionLevelSettings"`
}
