// Generated from Pokémon GO masterfile — group "nonCombatMoveSettings".

package non_combat_move_settings

import "encoding/json"

type NonCombatMoveSettingsAttributes struct {
	AttackMultiplier  *float64  `json:"attackMultiplier,omitempty"`
	CombatTypes       [1]string `json:"combatTypes"`
	DefenseMultiplier *float64  `json:"defenseMultiplier,omitempty"`
}

type NonCombatMoveSettingsAttributesV2 struct {
	AttackMultiplier  *float64  `json:"attackMultiplier,omitempty"`
	CombatTypes       [2]string `json:"combatTypes"`
	DefenseMultiplier *float64  `json:"defenseMultiplier,omitempty"`
}

type NonCombatMoveSettingsAttackDefenseBonus struct {
	Attributes []any `json:"attributes"`
}

type NonCombatMoveSettingsDayNightBonus struct {
	IncenseItem string `json:"incenseItem"`
}

type NonCombatMoveSettingsMaxMoveBonus struct {
	ExcludedPokedexIds         [2]string `json:"excludedPokedexIds"`
	NumAllMaxMoveLevelIncrease uint64    `json:"numAllMaxMoveLevelIncrease"`
}

type NonCombatMoveSettingsMegaMoveBonus struct {
	AttackMultiplier          *float64   `json:"attackMultiplier,omitempty"`
	ExtraMegaRaidShieldBreak  *uint64    `json:"extraMegaRaidShieldBreak,omitempty"`
	SpecialMove               string     `json:"specialMove"`
	VisibleAppraisalStarTiers *[2]uint64 `json:"visibleAppraisalStarTiers,omitempty"`
}

type NonCombatMoveSettingsSlowFreezeBonus struct {
	CatchCircleOuterTimeScaleOverride float64 `json:"catchCircleOuterTimeScaleOverride"`
	CatchCircleSpeedChangeThreshold   float64 `json:"catchCircleSpeedChangeThreshold"`
	CatchCircleTimeScaleOverride      float64 `json:"catchCircleTimeScaleOverride"`
	CatchRateIncreaseMultiplier       float64 `json:"catchRateIncreaseMultiplier"`
}

type NonCombatMoveSettingsSpaceBonus struct {
	EncounterRangeMeters                float64 `json:"encounterRangeMeters"`
	PokemonVisibleRangeMeters           float64 `json:"pokemonVisibleRangeMeters"`
	ServerAllowableEncounterRangeMeters float64 `json:"serverAllowableEncounterRangeMeters"`
}

type NonCombatMoveSettingsTimeBonus struct {
	AffectedItems [4]string `json:"affectedItems"`
}

type NonCombatMoveSettingsBonusEffect struct {
	AttackDefenseBonus *NonCombatMoveSettingsAttackDefenseBonus `json:"attackDefenseBonus,omitempty"`
	DayNightBonus      *NonCombatMoveSettingsDayNightBonus      `json:"dayNightBonus,omitempty"`
	MaxMoveBonus       *NonCombatMoveSettingsMaxMoveBonus       `json:"maxMoveBonus,omitempty"`
	MegaMoveBonus      *NonCombatMoveSettingsMegaMoveBonus      `json:"megaMoveBonus,omitempty"`
	SlowFreezeBonus    *NonCombatMoveSettingsSlowFreezeBonus    `json:"slowFreezeBonus,omitempty"`
	SpaceBonus         *NonCombatMoveSettingsSpaceBonus         `json:"spaceBonus,omitempty"`
	TimeBonus          *NonCombatMoveSettingsTimeBonus          `json:"timeBonus,omitempty"`
}

type NonCombatMoveSettingsTempEvoPokemonBranch struct {
	PokedexId string `json:"pokedexId"`
	TempEvoId string `json:"tempEvoId"`
}

type NonCombatMoveSettingsTempEvoResourceCost struct {
	MegaEnergyCost       uint64                                    `json:"megaEnergyCost"`
	TempEvoPokemonBranch NonCombatMoveSettingsTempEvoPokemonBranch `json:"tempEvoPokemonBranch"`
}

type NonCombatMoveSettingsCost struct {
	CandyCost           uint64                                    `json:"candyCost"`
	StardustCost        *uint64                                   `json:"stardustCost,omitempty"`
	TempEvoResourceCost *NonCombatMoveSettingsTempEvoResourceCost `json:"tempEvoResourceCost,omitempty"`
}

type NonCombatMoveSettingsInnLobbyActivationSettings struct {
	EnableActivationInMaxLobby      *bool `json:"enableActivationInMaxLobby,omitempty"`
	EnableActivationInMegaRaidLobby *bool `json:"enableActivationInMegaRaidLobby,omitempty"`
	EnableActivationInRaidLobby     *bool `json:"enableActivationInRaidLobby,omitempty"`
}

type NonCombatMoveSettings struct {
	BonusEffect                NonCombatMoveSettingsBonusEffect                 `json:"bonusEffect"`
	BonusType                  json.RawMessage                                  `json:"bonusType"`
	Cost                       NonCombatMoveSettingsCost                        `json:"cost"`
	DurationMs                 string                                           `json:"durationMs"`
	EnableMultiUse             bool                                             `json:"enableMultiUse"`
	EnableNonCombatMove        bool                                             `json:"enableNonCombatMove"`
	ExtraDurationMs            string                                           `json:"extraDurationMs"`
	InnLobbyActivationSettings *NonCombatMoveSettingsInnLobbyActivationSettings `json:"innLobbyActivationSettings,omitempty"`
	UniqueId                   string                                           `json:"uniqueId"`
}

type NonCombatMoveSettingsEntry struct {
	TemplateID string                         `json:"templateId"`
	Data       NonCombatMoveSettingsEntryData `json:"data"`
}

func (NonCombatMoveSettingsEntry) MasterfileEntry() {}

type NonCombatMoveSettingsEntryData struct {
	TemplateID            string                `json:"templateId"`
	NonCombatMoveSettings NonCombatMoveSettings `json:"nonCombatMoveSettings"`
}
