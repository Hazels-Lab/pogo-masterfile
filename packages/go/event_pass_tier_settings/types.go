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
	DurationMins uint64 `json:"durationMins"`
	Key          string `json:"key"`
}

type EventPassTierSettingsPokemonDisplay struct {
	BreadModeEnum *string `json:"breadModeEnum,omitempty"`
	Form          string  `json:"form"`
}

type EventPassTierSettingsStatsLimitsOverride struct {
	MaxAttack       *uint64 `json:"maxAttack,omitempty"`
	MaxDefense      *uint64 `json:"maxDefense,omitempty"`
	MaxHp           *uint64 `json:"maxHp,omitempty"`
	MaxPokemonLevel uint64  `json:"maxPokemonLevel"`
	MinAttack       *int64  `json:"minAttack,omitempty"`
	MinDefense      *int64  `json:"minDefense,omitempty"`
	MinHp           *int64  `json:"minHp,omitempty"`
	MinPokemonLevel uint64  `json:"minPokemonLevel"`
}

type EventPassTierSettingsPokemonEncounter struct {
	IsFeaturedPokemon   bool                                      `json:"isFeaturedPokemon"`
	PokemonDisplay      *EventPassTierSettingsPokemonDisplay      `json:"pokemonDisplay,omitempty"`
	PokemonId           string                                    `json:"pokemonId"`
	StatsLimitsOverride *EventPassTierSettingsStatsLimitsOverride `json:"statsLimitsOverride,omitempty"`
}

type EventPassTierSettingsRewards struct {
	Candy                     *EventPassTierSettingsCandy                     `json:"candy,omitempty"`
	Exp                       *uint64                                         `json:"exp,omitempty"`
	Item                      *EventPassTierSettingsItem                      `json:"item,omitempty"`
	NeutralAvatarItemTemplate *EventPassTierSettingsNeutralAvatarItemTemplate `json:"neutralAvatarItemTemplate,omitempty"`
	PlayerAttribute           *EventPassTierSettingsPlayerAttribute           `json:"playerAttribute,omitempty"`
	PokemonEncounter          *EventPassTierSettingsPokemonEncounter          `json:"pokemonEncounter,omitempty"`
	Stardust                  *uint64                                         `json:"stardust,omitempty"`
	Type                      string                                          `json:"type"`
	XlCandy                   *EventPassTierSettingsCandy                     `json:"xlCandy,omitempty"`
}

type EventPassTierSettings struct {
	ActiveBonusDisplaySettings *EventPassTierSettingsActiveBonusDisplaySettings `json:"activeBonusDisplaySettings,omitempty"`
	BonusSettings              *EventPassTierSettingsActiveBonusDisplaySettings `json:"bonusSettings,omitempty"`
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
