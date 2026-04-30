// Generated from Pokémon GO masterfile — group "stickerMetadata".

package masterfile

type StickerMetadata struct {
	Category    []string `json:"category"`
	MaxCount    uint64   `json:"maxCount"`
	PokemonId   *string  `json:"pokemonId,omitempty"`
	RegionId    *uint64  `json:"regionId,omitempty"`
	ReleaseDate *uint64  `json:"releaseDate,omitempty"`
	StickerId   string   `json:"stickerId"`
	StickerUrl  *string  `json:"stickerUrl,omitempty"`
}

type StickerMetadataEntry struct {
	TemplateID string                   `json:"templateId"`
	Data       StickerMetadataEntryData `json:"data"`
}

func (StickerMetadataEntry) isMasterfileEntry() {}

type StickerMetadataEntryData struct {
	TemplateID      string          `json:"templateId"`
	StickerMetadata StickerMetadata `json:"stickerMetadata"`
}
