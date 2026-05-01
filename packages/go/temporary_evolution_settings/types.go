// Generated from Pokémon GO masterfile — group "temporaryEvolutionSettings".

package temporary_evolution_settings

type TemporaryEvolutionSettingsTemporaryEvolutions struct {
	AssetBundleValue     uint64 `json:"assetBundleValue"`
	TemporaryEvolutionId string `json:"temporaryEvolutionId"`
}

type TemporaryEvolutionSettings struct {
	PokemonId           string                                          `json:"pokemonId"`
	TemporaryEvolutions []TemporaryEvolutionSettingsTemporaryEvolutions `json:"temporaryEvolutions"`
}

type TemporaryEvolutionSettingsEntry struct {
	TemplateID string                              `json:"templateId"`
	Data       TemporaryEvolutionSettingsEntryData `json:"data"`
}

func (TemporaryEvolutionSettingsEntry) MasterfileEntry() {}

type TemporaryEvolutionSettingsEntryData struct {
	TemplateID                 string                     `json:"templateId"`
	TemporaryEvolutionSettings TemporaryEvolutionSettings `json:"temporaryEvolutionSettings"`
}
