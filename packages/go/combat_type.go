// Generated from Pokémon GO masterfile — group "combatType".

package masterfile

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

func (CombatTypeEntry) isMasterfileEntry() {}

type CombatTypeEntryData struct {
	TemplateID string     `json:"templateId"`
	CombatType CombatType `json:"combatType"`
}
