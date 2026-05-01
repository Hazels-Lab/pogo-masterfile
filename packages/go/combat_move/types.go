// Generated from Pokémon GO masterfile — group "combatMove".

package combat_move

type CombatMoveBuffs struct {
	AttackerAttackStatStageChange *int64 `json:"attackerAttackStatStageChange,omitempty"`
	AttackerDefenseStatStageChange *int64 `json:"attackerDefenseStatStageChange,omitempty"`
	BuffActivationChance *float64 `json:"buffActivationChance,omitempty"`
	TargetAttackStatStageChange *int64 `json:"targetAttackStatStageChange,omitempty"`
	TargetDefenseStatStageChange *int64 `json:"targetDefenseStatStageChange,omitempty"`
}

type CombatMove struct {
	Buffs *CombatMoveBuffs `json:"buffs,omitempty"`
	DurationTurns *uint64 `json:"durationTurns,omitempty"`
	EnergyDelta *int64 `json:"energyDelta,omitempty"`
	Power *float64 `json:"power,omitempty"`
	Type string `json:"type"`
	UniqueId string `json:"uniqueId"`
	VfxName string `json:"vfxName"`
}

type CombatMoveEntry struct {
	TemplateID string `json:"templateId"`
	Data       CombatMoveEntryData `json:"data"`
}

func (CombatMoveEntry) MasterfileEntry() {}

type CombatMoveEntryData struct {
	TemplateID     string `json:"templateId"`
	CombatMove CombatMove `json:"combatMove"`
}
