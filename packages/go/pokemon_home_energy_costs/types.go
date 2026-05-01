// Generated from Pokémon GO masterfile — group "pokemonHomeEnergyCosts".

package pokemon_home_energy_costs

type PokemonHomeEnergyCosts struct {
	Base         uint64  `json:"base"`
	Cp1001to2000 uint64  `json:"cp1001To2000"`
	Cp2001toInf  uint64  `json:"cp2001ToInf"`
	PokemonClass *string `json:"pokemonClass,omitempty"`
	Shiny        uint64  `json:"shiny"`
}

type PokemonHomeEnergyCostsEntry struct {
	TemplateID string                          `json:"templateId"`
	Data       PokemonHomeEnergyCostsEntryData `json:"data"`
}

func (PokemonHomeEnergyCostsEntry) MasterfileEntry() {}

type PokemonHomeEnergyCostsEntryData struct {
	TemplateID             string                 `json:"templateId"`
	PokemonHomeEnergyCosts PokemonHomeEnergyCosts `json:"pokemonHomeEnergyCosts"`
}
