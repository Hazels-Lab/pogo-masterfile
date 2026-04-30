// Generated from Pokémon GO masterfile — group "pokemonHomeFormReversions".

package masterfile

type PokemonHomeFormReversionsFormMapping struct {
	RevertedForm string `json:"revertedForm"`
	RevertedFormString string `json:"revertedFormString"`
	UnauthorizedForms []string `json:"unauthorizedForms"`
}

type PokemonHomeFormReversions struct {
	FormMapping []PokemonHomeFormReversionsFormMapping `json:"formMapping"`
	PokemonId string `json:"pokemonId"`
}

type PokemonHomeFormReversionsEntry struct {
	TemplateID string `json:"templateId"`
	Data       PokemonHomeFormReversionsEntryData `json:"data"`
}

func (PokemonHomeFormReversionsEntry) isMasterfileEntry() {}

type PokemonHomeFormReversionsEntryData struct {
	TemplateID     string `json:"templateId"`
	PokemonHomeFormReversions PokemonHomeFormReversions `json:"pokemonHomeFormReversions"`
}
