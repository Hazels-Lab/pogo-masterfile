// Generated from Pokémon GO masterfile — group "quickInviteSettings".

package quick_invite_settings

type QuickInviteSettings struct {
	Enabled                   bool   `json:"enabled"`
	SuggestedPlayersVariation string `json:"suggestedPlayersVariation"`
}

type QuickInviteSettingsEntry struct {
	TemplateID string                       `json:"templateId"`
	Data       QuickInviteSettingsEntryData `json:"data"`
}

func (QuickInviteSettingsEntry) MasterfileEntry() {}

type QuickInviteSettingsEntryData struct {
	TemplateID          string              `json:"templateId"`
	QuickInviteSettings QuickInviteSettings `json:"quickInviteSettings"`
}
