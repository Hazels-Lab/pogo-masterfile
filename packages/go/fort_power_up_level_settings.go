// Generated from Pokémon GO masterfile — group "fortPowerUpLevelSettings".

package masterfile

type FortPowerUpLevelSettings struct {
	AdditionalLevelPowerupDurationMs *uint64  `json:"additionalLevelPowerupDurationMs,omitempty"`
	Level                            string   `json:"level"`
	MinPowerUpPointsRequired         *uint64  `json:"minPowerUpPointsRequired,omitempty"`
	PowerupLevelRewards              []string `json:"powerupLevelRewards,omitempty"`
}

type FortPowerUpLevelSettingsEntry struct {
	TemplateID string                            `json:"templateId"`
	Data       FortPowerUpLevelSettingsEntryData `json:"data"`
}

func (FortPowerUpLevelSettingsEntry) isMasterfileEntry() {}

type FortPowerUpLevelSettingsEntryData struct {
	TemplateID               string                   `json:"templateId"`
	FortPowerUpLevelSettings FortPowerUpLevelSettings `json:"fortPowerUpLevelSettings"`
}
