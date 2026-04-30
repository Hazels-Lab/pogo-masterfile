// Generated from Pokémon GO masterfile — group "photoSetsSettingsProto".

package masterfile

type PhotoSetsSettingsProtoPokemon struct {
	Form *string `json:"form,omitempty"`
	PokemonId string `json:"pokemonId"`
}

type PhotoSetsSettingsProto struct {
	DisplayOrder uint64 `json:"displayOrder"`
	FrameColor string `json:"frameColor"`
	MinimumPokemon uint64 `json:"minimumPokemon"`
	NameKey string `json:"nameKey"`
	Pokemon []PhotoSetsSettingsProtoPokemon `json:"pokemon"`
}

type PhotoSetsSettingsProtoEntry struct {
	TemplateID string `json:"templateId"`
	Data       PhotoSetsSettingsProtoEntryData `json:"data"`
}

func (PhotoSetsSettingsProtoEntry) isMasterfileEntry() {}

type PhotoSetsSettingsProtoEntryData struct {
	TemplateID     string `json:"templateId"`
	PhotoSetsSettingsProto PhotoSetsSettingsProto `json:"photoSetsSettingsProto"`
}
