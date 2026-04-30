// Generated from Pokémon GO masterfile — group "avatarItemDisplay".

package masterfile

type AvatarItemDisplay struct {
	DisplayStringId *string `json:"displayStringId,omitempty"`
	IconAddress     string  `json:"iconAddress"`
}

type AvatarItemDisplayEntry struct {
	TemplateID string                     `json:"templateId"`
	Data       AvatarItemDisplayEntryData `json:"data"`
}

func (AvatarItemDisplayEntry) isMasterfileEntry() {}

type AvatarItemDisplayEntryData struct {
	TemplateID        string            `json:"templateId"`
	AvatarItemDisplay AvatarItemDisplay `json:"avatarItemDisplay"`
}
