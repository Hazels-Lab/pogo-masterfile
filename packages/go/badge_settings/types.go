// Generated from Pokémon GO masterfile — group "badgeSettings".

package badge_settings

import "encoding/json"

type BadgeSettingsCaptureReward struct{}

type BadgeSettingsCaptureRewardV2 struct{}

type BadgeSettingsCaptureRewardV3 struct{}

type BadgeSettingsCaptureRewardV4 struct{}

type BadgeSettingsCaptureRewardV5 struct {
	RewardTypes *[1]string `json:"rewardTypes,omitempty"`
}

type BadgeSettingsEventBadgeSettings struct {
	ObEventBadgeSettingsNumber6 uint64 `json:"obEventBadgeSettingsNumber6"`
}

type BadgeSettings struct {
	BadgeRank          uint64                           `json:"badgeRank"`
	BadgeType          json.RawMessage                  `json:"badgeType"`
	CaptureReward      []any                            `json:"captureReward,omitempty"`
	EventBadge         *bool                            `json:"eventBadge,omitempty"`
	EventBadgeSettings *BadgeSettingsEventBadgeSettings `json:"eventBadgeSettings,omitempty"`
	Targets            []uint64                         `json:"targets"`
}

type BadgeSettingsEntry struct {
	TemplateID string                 `json:"templateId"`
	Data       BadgeSettingsEntryData `json:"data"`
}

func (BadgeSettingsEntry) MasterfileEntry() {}

type BadgeSettingsEntryData struct {
	TemplateID    string        `json:"templateId"`
	BadgeSettings BadgeSettings `json:"badgeSettings"`
}
