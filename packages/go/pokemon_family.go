// Generated from Pokémon GO masterfile — group "pokemonFamily".

package masterfile

type PokemonFamily struct {
	CandyPerXlCandy         uint64     `json:"candyPerXlCandy"`
	FamilyId                string     `json:"familyId"`
	MegaEvolvablePokemonId  *string    `json:"megaEvolvablePokemonId,omitempty"`
	MegaEvolvablePokemonIds *[2]string `json:"megaEvolvablePokemonIds,omitempty"`
}

type PokemonFamilyEntry struct {
	TemplateID string                 `json:"templateId"`
	Data       PokemonFamilyEntryData `json:"data"`
}

func (PokemonFamilyEntry) isMasterfileEntry() {}

type PokemonFamilyEntryData struct {
	TemplateID    string        `json:"templateId"`
	PokemonFamily PokemonFamily `json:"pokemonFamily"`
}
