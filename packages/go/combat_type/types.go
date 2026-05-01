// Generated from Pokémon GO masterfile — group "combatType".

package combat_type

type CombatType struct {
	ExcellentLevelThreshold float64 `json:"excellentLevelThreshold"`
	GreatLevelThreshold     float64 `json:"greatLevelThreshold"`
	NiceLevelThreshold      float64 `json:"niceLevelThreshold"`
	Type                    string  `json:"type"`
}

type CombatTypeEntry struct {
	TemplateID string              `json:"templateId"`
	Data       CombatTypeEntryData `json:"data"`
}

func (CombatTypeEntry) MasterfileEntry() {}

type CombatTypeEntryData struct {
	TemplateID string     `json:"templateId"`
	CombatType CombatType `json:"combatType"`
}
