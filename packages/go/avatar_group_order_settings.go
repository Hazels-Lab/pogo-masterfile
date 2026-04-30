// Generated from Pokémon GO masterfile — group "avatarGroupOrderSettings".

package masterfile

type AvatarGroupOrderSettingsGroup struct {
	Name string `json:"name"`
	NewTagEnabled *bool `json:"newTagEnabled,omitempty"`
	Order uint64 `json:"order"`
}

type AvatarGroupOrderSettings struct {
	Group []AvatarGroupOrderSettingsGroup `json:"group"`
}

type AvatarGroupOrderSettingsEntry struct {
	TemplateID string `json:"templateId"`
	Data       AvatarGroupOrderSettingsEntryData `json:"data"`
}

func (AvatarGroupOrderSettingsEntry) isMasterfileEntry() {}

type AvatarGroupOrderSettingsEntryData struct {
	TemplateID     string `json:"templateId"`
	AvatarGroupOrderSettings AvatarGroupOrderSettings `json:"avatarGroupOrderSettings"`
}
