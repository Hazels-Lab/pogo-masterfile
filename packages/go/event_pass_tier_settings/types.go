// Generated from Pokémon GO masterfile — group "eventPassTierSettings".

package event_pass_tier_settings

type EventPassTierSettingsBonusBoxes struct {
	IconType string `json:"iconType"`
	Text     string `json:"text"`
}

type EventPassTierSettingsActiveBonusDisplaySettings struct {
	BonusBoxes []EventPassTierSettingsBonusBoxes `json:"bonusBoxes"`
	EventName  string                            `json:"eventName"`
}

type EventPassTierSettingsCandy struct {
	Amount    uint64 `json:"amount"`
	PokemonId string `json:"pokemonId"`
}

type EventPassTierSettingsItem struct {
	Amount uint64 `json:"amount"`
	Item   string `json:"item"`
}

type EventPassTierSettingsNeutralAvatarItemTemplate struct {
	DisplayTemplateId string `json:"displayTemplateId"`
	ItemTemplateId    string `json:"itemTemplateId"`
}

type EventPassTierSettingsPlayerAttribute struct {
	DurationMins *uint64 `json:"durationMins,omitempty"`
	Key          string  `json:"key"`
}

type EventPassTierSettingsLocationCard struct {
	LocationCard string `json:"locationCard"`
}

type EventPassTierSettingsPokemonDisplay struct {
	BreadModeEnum *string                            `json:"breadModeEnum,omitempty"`
	Form          *string                            `json:"form,omitempty"`
	LocationCard  *EventPassTierSettingsLocationCard `json:"locationCard,omitempty"`
}

type EventPassTierSettingsPokemonEncounterDistribution struct {
	QuestDistributionTemplateId string `json:"questDistributionTemplateId"`
}

type EventPassTierSettingsStatsLimitsOverride struct {
	MaxPokemonLevel uint64 `json:"maxPokemonLevel"`
	MinPokemonLevel uint64 `json:"minPokemonLevel"`
}

type EventPassTierSettingsPokemonEncounter struct {
	IsFeaturedPokemon            *bool                                              `json:"isFeaturedPokemon,omitempty"`
	PokemonDisplay               *EventPassTierSettingsPokemonDisplay               `json:"pokemonDisplay,omitempty"`
	PokemonEncounterDistribution *EventPassTierSettingsPokemonEncounterDistribution `json:"pokemonEncounterDistribution,omitempty"`
	PokemonId                    *string                                            `json:"pokemonId,omitempty"`
	StatsLimitsOverride          *EventPassTierSettingsStatsLimitsOverride          `json:"statsLimitsOverride,omitempty"`
}

type EventPassTierSettingsSticker struct {
	Amount    uint64 `json:"amount"`
	StickerId string `json:"stickerId"`
}

type EventPassTierSettingsRewards struct {
	Candy                     *EventPassTierSettingsCandy                     `json:"candy,omitempty"`
	EventBadgeId              *string                                         `json:"eventBadgeId,omitempty"`
	Exp                       *uint64                                         `json:"exp,omitempty"`
	Item                      *EventPassTierSettingsItem                      `json:"item,omitempty"`
	NeutralAvatarItemTemplate *EventPassTierSettingsNeutralAvatarItemTemplate `json:"neutralAvatarItemTemplate,omitempty"`
	PlayerAttribute           *EventPassTierSettingsPlayerAttribute           `json:"playerAttribute,omitempty"`
	Pokecoin                  *uint64                                         `json:"pokecoin,omitempty"`
	PokemonEncounter          *EventPassTierSettingsPokemonEncounter          `json:"pokemonEncounter,omitempty"`
	Stardust                  *uint64                                         `json:"stardust,omitempty"`
	Sticker                   *EventPassTierSettingsSticker                   `json:"sticker,omitempty"`
	Type                      string                                          `json:"type"`
	XlCandy                   *EventPassTierSettingsCandy                     `json:"xlCandy,omitempty"`
}

type EventPassTierSettings struct {
	ActiveBonusDisplaySettings *EventPassTierSettingsActiveBonusDisplaySettings `json:"activeBonusDisplaySettings,omitempty"`
	BonusSettings              *EventPassTierSettingsActiveBonusDisplaySettings `json:"bonusSettings,omitempty"`
	IsMilestoneRank            *bool                                            `json:"isMilestoneRank,omitempty"`
	MinPointsRequired          *uint64                                          `json:"minPointsRequired,omitempty"`
	Rank                       uint64                                           `json:"rank"`
	Rewards                    []EventPassTierSettingsRewards                   `json:"rewards,omitempty"`
	Track                      string                                           `json:"track"`
}

type EventPassTierSettingsEntry struct {
	TemplateID string                         `json:"templateId"`
	Data       EventPassTierSettingsEntryData `json:"data"`
}

func (EventPassTierSettingsEntry) MasterfileEntry() {}

type EventPassTierSettingsEntryData struct {
	TemplateID            string                `json:"templateId"`
	EventPassTierSettings EventPassTierSettings `json:"eventPassTierSettings"`
}
