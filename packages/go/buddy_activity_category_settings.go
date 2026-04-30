// Generated from Pokémon GO masterfile — group "buddyActivityCategorySettings".

package masterfile

type BuddyActivityCategorySettings struct {
	ActivityCategory string `json:"activityCategory"`
	MaxPointsPerDay  uint64 `json:"maxPointsPerDay"`
}

type BuddyActivityCategorySettingsEntry struct {
	TemplateID string                                 `json:"templateId"`
	Data       BuddyActivityCategorySettingsEntryData `json:"data"`
}

func (BuddyActivityCategorySettingsEntry) isMasterfileEntry() {}

type BuddyActivityCategorySettingsEntryData struct {
	TemplateID                    string                        `json:"templateId"`
	BuddyActivityCategorySettings BuddyActivityCategorySettings `json:"buddyActivityCategorySettings"`
}
