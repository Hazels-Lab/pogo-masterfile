// Generated from Pokémon GO masterfile — group "fortPowerUpLevelSettings".

package fort_power_up_level_settings

type FortPowerUpLevelSettings struct {
	AdditionalLevelPowerupDurationMs *uint64 `json:"additionalLevelPowerupDurationMs,omitempty"`
	Level string `json:"level"`
	MinPowerUpPointsRequired *uint64 `json:"minPowerUpPointsRequired,omitempty"`
	PowerupLevelRewards []string `json:"powerupLevelRewards,omitempty"`
}

type FortPowerUpLevelSettingsEntry struct {
	TemplateID string `json:"templateId"`
	Data       FortPowerUpLevelSettingsEntryData `json:"data"`
}

func (FortPowerUpLevelSettingsEntry) MasterfileEntry() {}

type FortPowerUpLevelSettingsEntryData struct {
	TemplateID     string `json:"templateId"`
	FortPowerUpLevelSettings FortPowerUpLevelSettings `json:"fortPowerUpLevelSettings"`
}
