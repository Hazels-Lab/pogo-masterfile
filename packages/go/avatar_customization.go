// Generated from Pokémon GO masterfile — group "avatarCustomization".

package masterfile

type AvatarCustomization struct {
	AssetName string `json:"assetName"`
	AvatarType *string `json:"avatarType,omitempty"`
	BundleName *string `json:"bundleName,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	GroupName string `json:"groupName"`
	IapSku *string `json:"iapSku,omitempty"`
	IconName *string `json:"iconName,omitempty"`
	SetNames []string `json:"setNames,omitempty"`
	SetPrimeItem *bool `json:"setPrimeItem,omitempty"`
	Slot [1]string `json:"slot"`
	SortOrder uint64 `json:"sortOrder"`
	UnlockBadgeLevel *uint64 `json:"unlockBadgeLevel,omitempty"`
	UnlockBadgeType *string `json:"unlockBadgeType,omitempty"`
	UnlockPlayerLevel *uint64 `json:"unlockPlayerLevel,omitempty"`
	UnlockType string `json:"unlockType"`
}

type AvatarCustomizationEntry struct {
	TemplateID string `json:"templateId"`
	Data       AvatarCustomizationEntryData `json:"data"`
}

func (AvatarCustomizationEntry) isMasterfileEntry() {}

type AvatarCustomizationEntryData struct {
	TemplateID     string `json:"templateId"`
	AvatarCustomization AvatarCustomization `json:"avatarCustomization"`
}
