// Generated from Pokémon GO masterfile — group "avatarItemDisplay".

package avatar_item_display

type AvatarItemDisplay struct {
	DisplayStringId *string `json:"displayStringId,omitempty"`
	IconAddress     string  `json:"iconAddress"`
}

type AvatarItemDisplayEntry struct {
	TemplateID string                     `json:"templateId"`
	Data       AvatarItemDisplayEntryData `json:"data"`
}

func (AvatarItemDisplayEntry) MasterfileEntry() {}

type AvatarItemDisplayEntryData struct {
	TemplateID        string            `json:"templateId"`
	AvatarItemDisplay AvatarItemDisplay `json:"avatarItemDisplay"`
}
