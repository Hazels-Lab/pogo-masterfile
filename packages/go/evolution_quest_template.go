// Generated from Pokémon GO masterfile — group "evolutionQuestTemplate".

package masterfile

type EvolutionQuestTemplateDisplay struct {
	Description string `json:"description"`
	Title string `json:"title"`
}

type EvolutionQuestTemplateWithCombatType struct {
	CombatType []string `json:"combatType"`
}

type EvolutionQuestTemplateWithOpponentPokemonBattleStatus struct {
	OpponentPokemonType []string `json:"opponentPokemonType"`
	RequireDefeat bool `json:"requireDefeat"`
}

type EvolutionQuestTemplateWithPokemonType struct {
	PokemonType []string `json:"pokemonType"`
}

type EvolutionQuestTemplateWithThrowType struct {
	ThrowType string `json:"throwType"`
}

type EvolutionQuestTemplateCondition struct {
	Type string `json:"type"`
	WithCombatType *EvolutionQuestTemplateWithCombatType `json:"withCombatType,omitempty"`
	WithOpponentPokemonBattleStatus *EvolutionQuestTemplateWithOpponentPokemonBattleStatus `json:"withOpponentPokemonBattleStatus,omitempty"`
	WithPokemonType *EvolutionQuestTemplateWithPokemonType `json:"withPokemonType,omitempty"`
	WithThrowType *EvolutionQuestTemplateWithThrowType `json:"withThrowType,omitempty"`
}

type EvolutionQuestTemplateGoals struct {
	Condition []EvolutionQuestTemplateCondition `json:"condition,omitempty"`
	Target uint64 `json:"target"`
}

type EvolutionQuestTemplate struct {
	Context string `json:"context"`
	Display EvolutionQuestTemplateDisplay `json:"display"`
	Goals [1]EvolutionQuestTemplateGoals `json:"goals"`
	QuestTemplateId string `json:"questTemplateId"`
	QuestType string `json:"questType"`
}

type EvolutionQuestTemplateEntry struct {
	TemplateID string `json:"templateId"`
	Data       EvolutionQuestTemplateEntryData `json:"data"`
}

func (EvolutionQuestTemplateEntry) isMasterfileEntry() {}

type EvolutionQuestTemplateEntryData struct {
	TemplateID     string `json:"templateId"`
	EvolutionQuestTemplate EvolutionQuestTemplate `json:"evolutionQuestTemplate"`
}
