// Generated from Pokémon GO masterfile — group "ticketGiftingSettings".

package ticket_gifting_settings

type TicketGiftingSettings struct {
	DailyPlayerGiftingLimit    uint64 `json:"dailyPlayerGiftingLimit"`
	MinPlayerLevel             uint64 `json:"minPlayerLevel"`
	MinRequiredFriendshipLevel string `json:"minRequiredFriendshipLevel"`
}

type TicketGiftingSettingsEntry struct {
	TemplateID string                         `json:"templateId"`
	Data       TicketGiftingSettingsEntryData `json:"data"`
}

func (TicketGiftingSettingsEntry) MasterfileEntry() {}

type TicketGiftingSettingsEntryData struct {
	TemplateID            string                `json:"templateId"`
	TicketGiftingSettings TicketGiftingSettings `json:"ticketGiftingSettings"`
}
