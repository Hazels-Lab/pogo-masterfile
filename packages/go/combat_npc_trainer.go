// Generated from Pokémon GO masterfile — group "combatNpcTrainer".

package masterfile

type CombatNpcTrainerPokemonDisplay struct {
	Form string `json:"form"`
}

type CombatNpcTrainerAvailablePokemon struct {
	PokemonDisplay *CombatNpcTrainerPokemonDisplay `json:"pokemonDisplay,omitempty"`
	PokemonType    string                          `json:"pokemonType"`
}

type CombatNpcTrainerAvatar struct {
	Avatar uint64 `json:"avatar"`
}

type CombatNpcTrainer struct {
	AvailablePokemon       [3]CombatNpcTrainerAvailablePokemon `json:"availablePokemon"`
	Avatar                 CombatNpcTrainerAvatar              `json:"avatar"`
	BackdropImageBundle    string                              `json:"backdropImageBundle"`
	CombatLeagueTemplateId string                              `json:"combatLeagueTemplateId"`
	CombatPersonalityId    string                              `json:"combatPersonalityId"`
	IconUrl                string                              `json:"iconUrl"`
	TrainerName            string                              `json:"trainerName"`
	TrainerQuote           string                              `json:"trainerQuote"`
	TrainerTitle           string                              `json:"trainerTitle"`
}

type CombatNpcTrainerEntry struct {
	TemplateID string                    `json:"templateId"`
	Data       CombatNpcTrainerEntryData `json:"data"`
}

func (CombatNpcTrainerEntry) isMasterfileEntry() {}

type CombatNpcTrainerEntryData struct {
	TemplateID       string           `json:"templateId"`
	CombatNpcTrainer CombatNpcTrainer `json:"combatNpcTrainer"`
}
