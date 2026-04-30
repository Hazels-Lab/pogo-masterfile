// Generated from Pokémon GO masterfile — group "nonCombatMoveSettings".

package masterfile

type NonCombatMoveSettingsAttributes struct {
	AttackMultiplier *float64 `json:"attackMultiplier,omitempty"`
	CombatTypes [1]string `json:"combatTypes"`
	DefenseMultiplier *float64 `json:"defenseMultiplier,omitempty"`
}

type NonCombatMoveSettingsAttributesV2 struct {
	AttackMultiplier *float64 `json:"attackMultiplier,omitempty"`
	CombatTypes [2]string `json:"combatTypes"`
	DefenseMultiplier *float64 `json:"defenseMultiplier,omitempty"`
}

type NonCombatMoveSettingsAttackDefenseBonus struct {
	Attributes []any `json:"attributes"`
}

type NonCombatMoveSettingsDayNightBonus struct {
	IncenseItem string `json:"incenseItem"`
}

type NonCombatMoveSettingsMaxMoveBonus struct {
	ExcludedPokedexIds [2]string `json:"excludedPokedexIds"`
	NumAllMaxMoveLevelIncrease uint64 `json:"numAllMaxMoveLevelIncrease"`
}

type NonCombatMoveSettingsSlowFreezeBonus struct {
	CatchCircleOuterTimeScaleOverride float64 `json:"catchCircleOuterTimeScaleOverride"`
	CatchCircleSpeedChangeThreshold float64 `json:"catchCircleSpeedChangeThreshold"`
	CatchCircleTimeScaleOverride float64 `json:"catchCircleTimeScaleOverride"`
	CatchRateIncreaseMultiplier float64 `json:"catchRateIncreaseMultiplier"`
}

type NonCombatMoveSettingsSpaceBonus struct {
	EncounterRangeMeters float64 `json:"encounterRangeMeters"`
	PokemonVisibleRangeMeters float64 `json:"pokemonVisibleRangeMeters"`
	ServerAllowableEncounterRangeMeters float64 `json:"serverAllowableEncounterRangeMeters"`
}

type NonCombatMoveSettingsTimeBonus struct {
	AffectedItems [4]string `json:"affectedItems"`
}

type NonCombatMoveSettingsBonusEffect struct {
	AttackDefenseBonus *NonCombatMoveSettingsAttackDefenseBonus `json:"attackDefenseBonus,omitempty"`
	DayNightBonus *NonCombatMoveSettingsDayNightBonus `json:"dayNightBonus,omitempty"`
	MaxMoveBonus *NonCombatMoveSettingsMaxMoveBonus `json:"maxMoveBonus,omitempty"`
	SlowFreezeBonus *NonCombatMoveSettingsSlowFreezeBonus `json:"slowFreezeBonus,omitempty"`
	SpaceBonus *NonCombatMoveSettingsSpaceBonus `json:"spaceBonus,omitempty"`
	TimeBonus *NonCombatMoveSettingsTimeBonus `json:"timeBonus,omitempty"`
}

type NonCombatMoveSettingsCost struct {
	CandyCost uint64 `json:"candyCost"`
	StardustCost uint64 `json:"stardustCost"`
}

type NonCombatMoveSettings struct {
	BonusEffect NonCombatMoveSettingsBonusEffect `json:"bonusEffect"`
	BonusType string `json:"bonusType"`
	Cost NonCombatMoveSettingsCost `json:"cost"`
	DurationMs string `json:"durationMs"`
	EnableMultiUse bool `json:"enableMultiUse"`
	EnableNonCombatMove bool `json:"enableNonCombatMove"`
	ExtraDurationMs string `json:"extraDurationMs"`
	UniqueId string `json:"uniqueId"`
}

type NonCombatMoveSettingsEntry struct {
	TemplateID string `json:"templateId"`
	Data       NonCombatMoveSettingsEntryData `json:"data"`
}

func (NonCombatMoveSettingsEntry) isMasterfileEntry() {}

type NonCombatMoveSettingsEntryData struct {
	TemplateID     string `json:"templateId"`
	NonCombatMoveSettings NonCombatMoveSettings `json:"nonCombatMoveSettings"`
}
