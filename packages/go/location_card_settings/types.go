// Generated from Pokémon GO masterfile — group "locationCardSettings".

package location_card_settings

type LocationCardSettings struct {
	CardType     *string `json:"cardType,omitempty"`
	ImageUrl     string  `json:"imageUrl"`
	LocationCard string  `json:"locationCard"`
	VfxAddress   *string `json:"vfxAddress,omitempty"`
}

type LocationCardSettingsEntry struct {
	TemplateID string                        `json:"templateId"`
	Data       LocationCardSettingsEntryData `json:"data"`
}

func (LocationCardSettingsEntry) MasterfileEntry() {}

type LocationCardSettingsEntryData struct {
	TemplateID           string               `json:"templateId"`
	LocationCardSettings LocationCardSettings `json:"locationCardSettings"`
}
