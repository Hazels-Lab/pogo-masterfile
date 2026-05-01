// Generated from Pokémon GO masterfile — group "questSettings".

package quest_settings

type QuestSettingsDailyQuest struct {
	BonusMultiplier *float64 `json:"bonusMultiplier,omitempty"`
	BucketsPerDay uint64 `json:"bucketsPerDay"`
	StreakBonusMultiplier *float64 `json:"streakBonusMultiplier,omitempty"`
	StreakLength uint64 `json:"streakLength"`
}

type QuestSettings struct {
	DailyQuest QuestSettingsDailyQuest `json:"dailyQuest"`
	QuestType string `json:"questType"`
}

type QuestSettingsEntry struct {
	TemplateID string `json:"templateId"`
	Data       QuestSettingsEntryData `json:"data"`
}

func (QuestSettingsEntry) MasterfileEntry() {}

type QuestSettingsEntryData struct {
	TemplateID     string `json:"templateId"`
	QuestSettings QuestSettings `json:"questSettings"`
}
