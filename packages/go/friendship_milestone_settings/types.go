// Generated from Pokémon GO masterfile — group "friendshipMilestoneSettings".

package friendship_milestone_settings

type FriendshipMilestoneSettings struct {
	AttackBonusPercentage float64 `json:"attackBonusPercentage"`
	MilestoneXpReward uint64 `json:"milestoneXpReward"`
	MinPointsToReach *uint64 `json:"minPointsToReach,omitempty"`
	RaidBallBonus *uint64 `json:"raidBallBonus,omitempty"`
	RelativePointsToReach *uint64 `json:"relativePointsToReach,omitempty"`
	TradingDiscount *float64 `json:"tradingDiscount,omitempty"`
	UnlockedLuckyFriendApplicator *bool `json:"unlockedLuckyFriendApplicator,omitempty"`
	UnlockedTrading []string `json:"unlockedTrading"`
}

type FriendshipMilestoneSettingsEntry struct {
	TemplateID string `json:"templateId"`
	Data       FriendshipMilestoneSettingsEntryData `json:"data"`
}

func (FriendshipMilestoneSettingsEntry) MasterfileEntry() {}

type FriendshipMilestoneSettingsEntryData struct {
	TemplateID     string `json:"templateId"`
	FriendshipMilestoneSettings FriendshipMilestoneSettings `json:"friendshipMilestoneSettings"`
}
