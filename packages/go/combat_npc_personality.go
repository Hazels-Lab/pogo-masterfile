// Generated from Pokémon GO masterfile — group "combatNpcPersonality".

package masterfile

type CombatNpcPersonality struct {
	DefensiveMaximumScore *float64 `json:"defensiveMaximumScore,omitempty"`
	DefensiveMinimumScore *float64 `json:"defensiveMinimumScore,omitempty"`
	OffensiveMaximumScore float64  `json:"offensiveMaximumScore"`
	OffensiveMinimumScore float64  `json:"offensiveMinimumScore"`
	PersonalityName       string   `json:"personalityName"`
	SpecialChance         float64  `json:"specialChance"`
	SuperEffectiveChance  float64  `json:"superEffectiveChance"`
}

type CombatNpcPersonalityEntry struct {
	TemplateID string                        `json:"templateId"`
	Data       CombatNpcPersonalityEntryData `json:"data"`
}

func (CombatNpcPersonalityEntry) isMasterfileEntry() {}

type CombatNpcPersonalityEntryData struct {
	TemplateID           string               `json:"templateId"`
	CombatNpcPersonality CombatNpcPersonality `json:"combatNpcPersonality"`
}
