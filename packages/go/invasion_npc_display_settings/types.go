// Generated from Pokémon GO masterfile — group "invasionNpcDisplaySettings".

package invasion_npc_display_settings

type InvasionNpcDisplaySettingsAvatar struct {
	Avatar *uint64 `json:"avatar,omitempty"`
	AvatarBackpack *string `json:"avatarBackpack,omitempty"`
	AvatarBelt *string `json:"avatarBelt,omitempty"`
	AvatarEyes *string `json:"avatarEyes,omitempty"`
	AvatarFace *string `json:"avatarFace,omitempty"`
	AvatarGlasses *string `json:"avatarGlasses,omitempty"`
	AvatarGloves *string `json:"avatarGloves,omitempty"`
	AvatarHair *string `json:"avatarHair,omitempty"`
	AvatarHat *string `json:"avatarHat,omitempty"`
	AvatarNecklace *string `json:"avatarNecklace,omitempty"`
	AvatarPants *string `json:"avatarPants,omitempty"`
	AvatarPose *string `json:"avatarPose,omitempty"`
	AvatarShirt *string `json:"avatarShirt,omitempty"`
	AvatarShoes *string `json:"avatarShoes,omitempty"`
	AvatarSocks *string `json:"avatarSocks,omitempty"`
	Skin *uint64 `json:"skin,omitempty"`
}

type InvasionNpcDisplaySettings struct {
	Avatar InvasionNpcDisplaySettingsAvatar `json:"avatar"`
	BackdropImageBundle *string `json:"backdropImageBundle,omitempty"`
	CustomCombatMusic *string `json:"customCombatMusic,omitempty"`
	CustomIncidentMusic *string `json:"customIncidentMusic,omitempty"`
	IconUrl string `json:"iconUrl"`
	IsMale *bool `json:"isMale,omitempty"`
	ModelName string `json:"modelName"`
	TipsType *string `json:"tipsType,omitempty"`
	TrainerName string `json:"trainerName"`
	TrainerQuote string `json:"trainerQuote"`
	TrainerTitle string `json:"trainerTitle"`
	TutorialOnLossString *string `json:"tutorialOnLossString,omitempty"`
}

type InvasionNpcDisplaySettingsEntry struct {
	TemplateID string `json:"templateId"`
	Data       InvasionNpcDisplaySettingsEntryData `json:"data"`
}

func (InvasionNpcDisplaySettingsEntry) MasterfileEntry() {}

type InvasionNpcDisplaySettingsEntryData struct {
	TemplateID     string `json:"templateId"`
	InvasionNpcDisplaySettings InvasionNpcDisplaySettings `json:"invasionNpcDisplaySettings"`
}
