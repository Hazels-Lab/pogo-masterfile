// Generated from Pokémon GO masterfile — group "locationCardSettings".

package masterfile

import "encoding/json"

type LocationCardSettings struct {
	CardType     *string         `json:"cardType,omitempty"`
	ImageUrl     string          `json:"imageUrl"`
	LocationCard json.RawMessage `json:"locationCard"`
	VfxAddress   *string         `json:"vfxAddress,omitempty"`
}

type LocationCardSettingsEntry struct {
	TemplateID string                        `json:"templateId"`
	Data       LocationCardSettingsEntryData `json:"data"`
}

func (LocationCardSettingsEntry) isMasterfileEntry() {}

type LocationCardSettingsEntryData struct {
	TemplateID           string               `json:"templateId"`
	LocationCardSettings LocationCardSettings `json:"locationCardSettings"`
}
