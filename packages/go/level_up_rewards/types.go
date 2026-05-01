// Generated from Pokémon GO masterfile — group "levelUpRewards".

package level_up_rewards

type LevelUpRewardsNeutralAvatarItemTemplates struct {
	DisplayTemplateId string `json:"displayTemplateId"`
	ItemTemplateId    string `json:"itemTemplateId"`
}

type LevelUpRewards struct {
	ClientOverrideDisplayOrder *bool                                     `json:"clientOverrideDisplayOrder,omitempty"`
	FeaturesUnlocked           []string                                  `json:"featuresUnlocked,omitempty"`
	IsBackfill                 *bool                                     `json:"isBackfill,omitempty"`
	Items                      []string                                  `json:"items"`
	ItemsCount                 []uint64                                  `json:"itemsCount"`
	ItemsUnlocked              []string                                  `json:"itemsUnlocked,omitempty"`
	Level                      uint64                                    `json:"level"`
	NeutralAvatarItemTemplates *LevelUpRewardsNeutralAvatarItemTemplates `json:"neutralAvatarItemTemplates,omitempty"`
	ObLevelUpRewardsNumber9    *float64                                  `json:"obLevelUpRewardsNumber9,omitempty"`
}

type LevelUpRewardsEntry struct {
	TemplateID string                  `json:"templateId"`
	Data       LevelUpRewardsEntryData `json:"data"`
}

func (LevelUpRewardsEntry) MasterfileEntry() {}

type LevelUpRewardsEntryData struct {
	TemplateID     string         `json:"templateId"`
	LevelUpRewards LevelUpRewards `json:"levelUpRewards"`
}
