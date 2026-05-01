// Generated from Pokémon GO masterfile — group "pokemonScaleSettings".

package pokemon_scale_settings

type PokemonScaleSettings struct {
	MaxHeight        float64 `json:"maxHeight"`
	MinHeight        float64 `json:"minHeight"`
	PokemonScaleMode *string `json:"pokemonScaleMode,omitempty"`
}

type PokemonScaleSettingsEntry struct {
	TemplateID string                        `json:"templateId"`
	Data       PokemonScaleSettingsEntryData `json:"data"`
}

func (PokemonScaleSettingsEntry) MasterfileEntry() {}

type PokemonScaleSettingsEntryData struct {
	TemplateID           string               `json:"templateId"`
	PokemonScaleSettings PokemonScaleSettings `json:"pokemonScaleSettings"`
}
