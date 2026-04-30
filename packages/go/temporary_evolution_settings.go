// Generated from Pokémon GO masterfile — group "temporaryEvolutionSettings".

package masterfile

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

func (TemporaryEvolutionSettingsEntry) isMasterfileEntry() {}

type TemporaryEvolutionSettingsEntryData struct {
	TemplateID                 string                     `json:"templateId"`
	TemporaryEvolutionSettings TemporaryEvolutionSettings `json:"temporaryEvolutionSettings"`
}
