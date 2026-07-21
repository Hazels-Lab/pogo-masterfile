// Generated from Pokémon GO masterfile — group "itemSettings".

package item_settings

type ItemSettingsExpiredIncubatorReplacement struct {
	IncubatorReplacement string `json:"incubatorReplacement"`
	UsesCountOverride    uint64 `json:"usesCountOverride"`
}

type ItemSettingsEggIncubator struct {
	DistanceMultiplier          float64                                  `json:"distanceMultiplier"`
	ExpiredIncubatorReplacement *ItemSettingsExpiredIncubatorReplacement `json:"expiredIncubatorReplacement,omitempty"`
	IncubatorType               string                                   `json:"incubatorType"`
	MaxHatchSummaryEntries      *uint64                                  `json:"maxHatchSummaryEntries,omitempty"`
	UseBonusIncubatorAttributes *bool                                    `json:"useBonusIncubatorAttributes,omitempty"`
	Uses                        *uint64                                  `json:"uses,omitempty"`
}

type ItemSettingsEventPassPoint struct {
	EventPassId string `json:"eventPassId"`
}

type ItemSettingsFood struct {
	BerryMultiplier         *float64  `json:"berryMultiplier,omitempty"`
	GrowthPercent           *float64  `json:"growthPercent,omitempty"`
	ItemEffect              []string  `json:"itemEffect,omitempty"`
	ItemEffectPercent       []float64 `json:"itemEffectPercent,omitempty"`
	MapDurationMs           *string   `json:"mapDurationMs,omitempty"`
	NumBuddyAffectionPoints *uint64   `json:"numBuddyAffectionPoints,omitempty"`
	NumBuddyHungerPoints    *uint64   `json:"numBuddyHungerPoints,omitempty"`
	RemoteBerryMultiplier   *float64  `json:"remoteBerryMultiplier,omitempty"`
	TimeFullDurationMs      *string   `json:"timeFullDurationMs,omitempty"`
}

type ItemSettingsCandy struct {
	Amount    uint64 `json:"amount"`
	PokemonId string `json:"pokemonId"`
}

type ItemSettingsItem struct {
	Amount *uint64 `json:"amount,omitempty"`
	Item   string  `json:"item"`
}

type ItemSettingsNeutralAvatarItemTemplate struct {
	DisplayTemplateId string `json:"displayTemplateId"`
}

type ItemSettingsPokemonDisplay struct {
	Form  string `json:"form"`
	Shiny *bool  `json:"shiny,omitempty"`
}

type ItemSettingsPokemonEncounter struct {
	PokemonDisplay *ItemSettingsPokemonDisplay `json:"pokemonDisplay,omitempty"`
	PokemonId      string                      `json:"pokemonId"`
}

type ItemSettingsIconRewards struct {
	Candy                     *ItemSettingsCandy                     `json:"candy,omitempty"`
	Exp                       *uint64                                `json:"exp,omitempty"`
	Item                      *ItemSettingsItem                      `json:"item,omitempty"`
	NeutralAvatarItemTemplate *ItemSettingsNeutralAvatarItemTemplate `json:"neutralAvatarItemTemplate,omitempty"`
	PokemonEncounter          *ItemSettingsPokemonEncounter          `json:"pokemonEncounter,omitempty"`
	Stardust                  *uint64                                `json:"stardust,omitempty"`
	Type                      string                                 `json:"type"`
}

type ItemSettingsGlobalEventTicket struct {
	BackgroundImageUrl           *string                   `json:"backgroundImageUrl,omitempty"`
	ClientEventEndTimeUtcMs      string                    `json:"clientEventEndTimeUtcMs"`
	ClientEventStartTimeUtcMs    string                    `json:"clientEventStartTimeUtcMs"`
	ConflictStoryQuestIds        *[2]string                `json:"conflictStoryQuestIds,omitempty"`
	DetailsLinkKey               *string                   `json:"detailsLinkKey,omitempty"`
	DisplayV2enabled             *bool                     `json:"displayV2Enabled,omitempty"`
	EventBadge                   *string                   `json:"eventBadge,omitempty"`
	EventBannerUrl               *string                   `json:"eventBannerUrl,omitempty"`
	EventDatetimeRangeKey        *string                   `json:"eventDatetimeRangeKey,omitempty"`
	EventEndTime                 string                    `json:"eventEndTime"`
	EventStartTime               string                    `json:"eventStartTime"`
	Giftable                     *bool                     `json:"giftable,omitempty"`
	GiftItem                     *string                   `json:"giftItem,omitempty"`
	GrantBadgeBeforeEventStartMs *string                   `json:"grantBadgeBeforeEventStartMs,omitempty"`
	IconRewards                  []ItemSettingsIconRewards `json:"iconRewards,omitempty"`
	ItemBagDescriptionKey        string                    `json:"itemBagDescriptionKey"`
	TextRewardsKey               *string                   `json:"textRewardsKey,omitempty"`
	TicketItem                   *string                   `json:"ticketItem,omitempty"`
	TitleImageUrl                *string                   `json:"titleImageUrl,omitempty"`
}

type ItemSettingsIncense struct {
	IncenseLifetimeSeconds uint64   `json:"incenseLifetimeSeconds"`
	SpawnTableProbability  *float64 `json:"spawnTableProbability,omitempty"`
}

type ItemSettingsIncidentTicket struct {
	IgnoreFullInventory     *bool   `json:"ignoreFullInventory,omitempty"`
	UpgradedItem            *string `json:"upgradedItem,omitempty"`
	UpgradeRequirementCount *uint64 `json:"upgradeRequirementCount,omitempty"`
}

type ItemSettingsInventoryUpgrade struct {
	AdditionalStorage uint64 `json:"additionalStorage"`
	UpgradeType       string `json:"upgradeType"`
}

type ItemSettingsPotion struct {
	StaAmount  *uint64  `json:"staAmount,omitempty"`
	StaPercent *float64 `json:"staPercent,omitempty"`
}

type ItemSettingsReplenishMp struct {
	MpAmount uint64 `json:"mpAmount"`
}

type ItemSettingsRevive struct {
	StaPercent float64 `json:"staPercent"`
}

type ItemSettingsStardustBoost struct {
	BoostDurationMs    uint64  `json:"boostDurationMs"`
	StardustMultiplier float64 `json:"stardustMultiplier"`
}

type ItemSettingsStatIncrease struct {
	StatsToIncreaseLimit uint64 `json:"statsToIncreaseLimit"`
}

type ItemSettingsPlayerActivity struct {
	Limit uint64 `json:"limit"`
}

type ItemSettingsTimePeriodCounters struct {
	PlayerActivity ItemSettingsPlayerActivity `json:"playerActivity"`
}

type ItemSettingsXpBoost struct {
	BoostDurationMs uint64  `json:"boostDurationMs"`
	XpMultiplier    float64 `json:"xpMultiplier"`
}

type ItemSettings struct {
	Category             string                          `json:"category"`
	DescriptionOverride  *string                         `json:"descriptionOverride,omitempty"`
	DropTrainerLevel     *uint64                         `json:"dropTrainerLevel,omitempty"`
	EggIncubator         *ItemSettingsEggIncubator       `json:"eggIncubator,omitempty"`
	EventPassPoint       *ItemSettingsEventPassPoint     `json:"eventPassPoint,omitempty"`
	Food                 *ItemSettingsFood               `json:"food,omitempty"`
	GlobalEventTicket    *ItemSettingsGlobalEventTicket  `json:"globalEventTicket,omitempty"`
	HideItemInInventory  *bool                           `json:"hideItemInInventory,omitempty"`
	IgnoreInventorySpace *bool                           `json:"ignoreInventorySpace,omitempty"`
	Incense              *ItemSettingsIncense            `json:"incense,omitempty"`
	IncidentTicket       *ItemSettingsIncidentTicket     `json:"incidentTicket,omitempty"`
	InventoryUpgrade     *ItemSettingsInventoryUpgrade   `json:"inventoryUpgrade,omitempty"`
	ItemCap              *uint64                         `json:"itemCap,omitempty"`
	ItemId               string                          `json:"itemId"`
	ItemType             string                          `json:"itemType"`
	NameOverride         *string                         `json:"nameOverride,omitempty"`
	Potion               *ItemSettingsPotion             `json:"potion,omitempty"`
	ReplenishMp          *ItemSettingsReplenishMp        `json:"replenishMp,omitempty"`
	Revive               *ItemSettingsRevive             `json:"revive,omitempty"`
	StardustBoost        *ItemSettingsStardustBoost      `json:"stardustBoost,omitempty"`
	StatIncrease         *ItemSettingsStatIncrease       `json:"statIncrease,omitempty"`
	TimePeriodCounters   *ItemSettingsTimePeriodCounters `json:"timePeriodCounters,omitempty"`
	XpBoost              *ItemSettingsXpBoost            `json:"xpBoost,omitempty"`
}

type ItemSettingsEntry struct {
	TemplateID string                `json:"templateId"`
	Data       ItemSettingsEntryData `json:"data"`
}

func (ItemSettingsEntry) MasterfileEntry() {}

type ItemSettingsEntryData struct {
	TemplateID   string       `json:"templateId"`
	ItemSettings ItemSettings `json:"itemSettings"`
}
