// Generated from Pokémon GO masterfile — group "partyPlayGeneralSettings".

package party_play_general_settings

type PartyPlayGeneralSettingsDayAndTimeEndTime struct {
	DayOfWeek uint64 `json:"dayOfWeek"`
	HourOfDay uint64 `json:"hourOfDay"`
}

type PartyPlayGeneralSettingsNearEndNotification struct {
	AvalibleWindowHours uint64                                    `json:"avalibleWindowHours"`
	Enabled             bool                                      `json:"enabled"`
	IsLocal             bool                                      `json:"isLocal"`
	Time                PartyPlayGeneralSettingsDayAndTimeEndTime `json:"time"`
}

type PartyPlayGeneralSettingsRecurringChallengeSchedule struct {
	DayAndTimeEndTime       PartyPlayGeneralSettingsDayAndTimeEndTime   `json:"dayAndTimeEndTime"`
	DayAndTimeStartTime     PartyPlayGeneralSettingsDayAndTimeEndTime   `json:"dayAndTimeStartTime"`
	MaxNumChallengePerCycle uint64                                      `json:"maxNumChallengePerCycle"`
	NearEndNotification     PartyPlayGeneralSettingsNearEndNotification `json:"nearEndNotification"`
	StartNotification       PartyPlayGeneralSettingsNearEndNotification `json:"startNotification"`
	TimezoneId              string                                      `json:"timezoneId"`
}

type PartyPlayGeneralSettingsPartySchedulingSettings struct {
	RecurringChallengeSchedule PartyPlayGeneralSettingsRecurringChallengeSchedule `json:"recurringChallengeSchedule"`
}

type PartyPlayGeneralSettings struct {
	ComplianceZonesEnabled             *bool                                            `json:"complianceZonesEnabled,omitempty"`
	CreationToStartTimeoutMs           *string                                          `json:"creationToStartTimeoutMs,omitempty"`
	Enabled                            bool                                             `json:"enabled"`
	EnabledFriendStatusIncrease        *bool                                            `json:"enabledFriendStatusIncrease,omitempty"`
	EnablePartyRaidInformation         *bool                                            `json:"enablePartyRaidInformation,omitempty"`
	FallbackPartyQuestEnabled          bool                                             `json:"fallbackPartyQuestEnabled"`
	FriendRequestsEnabled              bool                                             `json:"friendRequestsEnabled"`
	InviteExpirationMs                 *uint64                                          `json:"inviteExpirationMs,omitempty"`
	MatchmakingEnabled                 *bool                                            `json:"matchmakingEnabled,omitempty"`
	MaxInvitesPerPlayer                *uint64                                          `json:"maxInvitesPerPlayer,omitempty"`
	MaxPartySize                       *uint64                                          `json:"maxPartySize,omitempty"`
	MaxStackedEncounterReward          *uint64                                          `json:"maxStackedEncounterReward,omitempty"`
	MinPlayerLevel                     uint64                                           `json:"minPlayerLevel"`
	NotificationMilestones             *[4]float64                                      `json:"notificationMilestones,omitempty"`
	PartyCatchTagsEnabled              *bool                                            `json:"partyCatchTagsEnabled,omitempty"`
	PartyExpiryDurationMs              *string                                          `json:"partyExpiryDurationMs,omitempty"`
	PartyExpiryWarningMinutes          *uint64                                          `json:"partyExpiryWarningMinutes,omitempty"`
	PartyIapBoostsEnabled              *bool                                            `json:"partyIapBoostsEnabled,omitempty"`
	PartyNewQuestNotificationV2enabled *bool                                            `json:"partyNewQuestNotificationV2Enabled,omitempty"`
	PartyQuestEncounterRewardEnabled   *bool                                            `json:"partyQuestEncounterRewardEnabled,omitempty"`
	PartyRewardGracePeriodMs           *string                                          `json:"partyRewardGracePeriodMs,omitempty"`
	PartySchedulingSettings            *PartyPlayGeneralSettingsPartySchedulingSettings `json:"partySchedulingSettings,omitempty"`
	PgDeliveryMechanic                 *string                                          `json:"pgDeliveryMechanic,omitempty"`
	QuestUpdateToastEnabled            *bool                                            `json:"questUpdateToastEnabled,omitempty"`
	RestartPartyRejoinPromptEnabled    *bool                                            `json:"restartPartyRejoinPromptEnabled,omitempty"`
	SendInviteEnabled                  *bool                                            `json:"sendInviteEnabled,omitempty"`
}

type PartyPlayGeneralSettingsEntry struct {
	TemplateID string                            `json:"templateId"`
	Data       PartyPlayGeneralSettingsEntryData `json:"data"`
}

func (PartyPlayGeneralSettingsEntry) MasterfileEntry() {}

type PartyPlayGeneralSettingsEntryData struct {
	TemplateID               string                   `json:"templateId"`
	PartyPlayGeneralSettings PartyPlayGeneralSettings `json:"partyPlayGeneralSettings"`
}
