// Generated from Pokémon GO masterfile — group "eventPassSettings".

package event_pass_settings

type EventPassSettingsBonusBoxes struct {
	IconType string `json:"iconType"`
	Quantity uint64 `json:"quantity"`
	Text     string `json:"text"`
}

type EventPassSettingsEventPassTrackUpgradeDescriptions struct {
	DetailsLinkKey                    string    `json:"detailsLinkKey"`
	EventDurationKey                  string    `json:"eventDurationKey"`
	EventPassTrackToUpgradeTo         string    `json:"eventPassTrackToUpgradeTo"`
	PassTrackUpgradeHeaderDescription string    `json:"passTrackUpgradeHeaderDescription"`
	RanksToHighlightRewards           [3]uint64 `json:"ranksToHighlightRewards"`
	TrackUnlockImageUrl               string    `json:"trackUnlockImageUrl"`
	TrackUnlockPlusPointsImageUrl     string    `json:"trackUnlockPlusPointsImageUrl"`
	TrackUnlockPlusPointsSkuId        string    `json:"trackUnlockPlusPointsSkuId"`
	TrackUnlockSkuId                  string    `json:"trackUnlockSkuId"`
	UpgradeDescriptionKey             string    `json:"upgradeDescriptionKey"`
}

type EventPassSettingsEventPassDisplaySettings struct {
	BonusBoxes                        [3]EventPassSettingsBonusBoxes                        `json:"bonusBoxes"`
	EventPassTitleKey                 string                                                `json:"eventPassTitleKey"`
	EventPassTrackUpgradeDescriptions [1]EventPassSettingsEventPassTrackUpgradeDescriptions `json:"eventPassTrackUpgradeDescriptions"`
	HeaderIconUrl                     string                                                `json:"headerIconUrl"`
	PremiumRewardBannerBottom         *string                                               `json:"premiumRewardBannerBottom,omitempty"`
	PremiumRewardBannerImageUrl       *string                                               `json:"premiumRewardBannerImageUrl,omitempty"`
	PremiumRewardBannerMiddle         *string                                               `json:"premiumRewardBannerMiddle,omitempty"`
	PremiumRewardBannerTop            *string                                               `json:"premiumRewardBannerTop,omitempty"`
	PremiumRewardsDescription         string                                                `json:"premiumRewardsDescription"`
	SectionDisplayPriority            uint64                                                `json:"sectionDisplayPriority"`
	TodayViewSection                  string                                                `json:"todayViewSection"`
}

type EventPassSettingsTrackConditions struct {
	Track         string `json:"track"`
	TrackTitleKey string `json:"trackTitleKey"`
}

type EventPassSettingsTrackConditionsV2 struct {
	Badge         string `json:"badge"`
	Track         string `json:"track"`
	TrackTitleKey string `json:"trackTitleKey"`
}

type EventPassSettings struct {
	AdditionalBonusTiersLevel uint64                                    `json:"additionalBonusTiersLevel"`
	EventPassDisplaySettings  EventPassSettingsEventPassDisplaySettings `json:"eventPassDisplaySettings"`
	ExpirationTime            string                                    `json:"expirationTime"`
	GracePeriodEndTime        string                                    `json:"gracePeriodEndTime"`
	MaxTierLevel              uint64                                    `json:"maxTierLevel"`
	PointsItemId              string                                    `json:"pointsItemId"`
	Prefix                    string                                    `json:"prefix"`
	TrackConditions           []any                                     `json:"trackConditions"`
}

type EventPassSettingsEntry struct {
	TemplateID string                     `json:"templateId"`
	Data       EventPassSettingsEntryData `json:"data"`
}

func (EventPassSettingsEntry) MasterfileEntry() {}

type EventPassSettingsEntryData struct {
	TemplateID        string            `json:"templateId"`
	EventPassSettings EventPassSettings `json:"eventPassSettings"`
}
