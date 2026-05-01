// Generated from Pokémon GO masterfile — group "pokemonExtendedSettings".

package pokemon_extended_settings

import "encoding/json"

type PokemonExtendedSettingsCamera struct {
	CylinderGroundM *float64 `json:"cylinderGroundM,omitempty"`
	CylinderHeightM float64 `json:"cylinderHeightM"`
	CylinderRadiusM float64 `json:"cylinderRadiusM"`
}

type PokemonExtendedSettingsCatchOverrideSettings struct {
	CollisionHeadRadiusM float64 `json:"collisionHeadRadiusM"`
	CollisionHeightM *float64 `json:"collisionHeightM,omitempty"`
	CollisionRadiusM float64 `json:"collisionRadiusM"`
}

type PokemonExtendedSettingsMaxBattleTrainerVisualSettings struct {
	XOffset *float64 `json:"xOffset,omitempty"`
	YOffset *float64 `json:"yOffset,omitempty"`
}

type PokemonExtendedSettingsMaxBattleVisualSettings struct {
	Scale *float64 `json:"scale,omitempty"`
	XOffset *float64 `json:"xOffset,omitempty"`
	YOffset *float64 `json:"yOffset,omitempty"`
}

type PokemonExtendedSettingsMaxEncounterVisualSettings struct {
	CameraDistance *float64 `json:"cameraDistance,omitempty"`
	CameraFov *float64 `json:"cameraFov,omitempty"`
	MaxReticleSize *float64 `json:"maxReticleSize,omitempty"`
	Scale *float64 `json:"scale,omitempty"`
	YOffset *float64 `json:"yOffset,omitempty"`
}

type PokemonExtendedSettingsMaxLobbyVisualSettings struct {
	CameraDistance *float64 `json:"cameraDistance,omitempty"`
	CameraFov *float64 `json:"cameraFov,omitempty"`
	Scale *float64 `json:"scale,omitempty"`
	XOffset *float64 `json:"xOffset,omitempty"`
	YOffset *float64 `json:"yOffset,omitempty"`
}

type PokemonExtendedSettingsMaxPowerspotTopperVisualSettings struct {
	Scale float64 `json:"scale"`
}

type PokemonExtendedSettingsSizeSettings struct {
	MLowerBound float64 `json:"mLowerBound"`
	MUpperBound float64 `json:"mUpperBound"`
	XlUpperBound float64 `json:"xlUpperBound"`
	XsLowerBound float64 `json:"xsLowerBound"`
	XxlUpperBound *float64 `json:"xxlUpperBound,omitempty"`
	XxsLowerBound float64 `json:"xxsLowerBound"`
}

type PokemonExtendedSettingsBreadOverrides struct {
	AverageHeightM *float64 `json:"averageHeightM,omitempty"`
	AverageWeightKg *float64 `json:"averageWeightKg,omitempty"`
	BreadMode json.RawMessage `json:"breadMode,omitempty"`
	Camera *PokemonExtendedSettingsCamera `json:"camera,omitempty"`
	CatchOverrideSettings *PokemonExtendedSettingsCatchOverrideSettings `json:"catchOverrideSettings,omitempty"`
	MaxBattleTrainerVisualSettings *PokemonExtendedSettingsMaxBattleTrainerVisualSettings `json:"maxBattleTrainerVisualSettings,omitempty"`
	MaxBattleVisualSettings *PokemonExtendedSettingsMaxBattleVisualSettings `json:"maxBattleVisualSettings,omitempty"`
	MaxEncounterVisualSettings *PokemonExtendedSettingsMaxEncounterVisualSettings `json:"maxEncounterVisualSettings,omitempty"`
	MaxLobbyVisualSettings *PokemonExtendedSettingsMaxLobbyVisualSettings `json:"maxLobbyVisualSettings,omitempty"`
	MaxPowerspotTopperVisualSettings *PokemonExtendedSettingsMaxPowerspotTopperVisualSettings `json:"maxPowerspotTopperVisualSettings,omitempty"`
	MaxStationVisualSettings *PokemonExtendedSettingsMaxBattleVisualSettings `json:"maxStationVisualSettings,omitempty"`
	ModelHeight *float64 `json:"modelHeight,omitempty"`
	ModelScaleV2 *float64 `json:"modelScaleV2,omitempty"`
	SizeSettings *PokemonExtendedSettingsSizeSettings `json:"sizeSettings,omitempty"`
}

type PokemonExtendedSettingsSizeSettingsV2 struct {
	DisablePokedexRecordDisplayForForms *bool `json:"disablePokedexRecordDisplayForForms,omitempty"`
	MLowerBound float64 `json:"mLowerBound"`
	MUpperBound float64 `json:"mUpperBound"`
	XlScaleMultiplier *float64 `json:"xlScaleMultiplier,omitempty"`
	XlUpperBound float64 `json:"xlUpperBound"`
	XsLowerBound float64 `json:"xsLowerBound"`
	XsScaleMultiplier *float64 `json:"xsScaleMultiplier,omitempty"`
	XxlScaleMultiplier *float64 `json:"xxlScaleMultiplier,omitempty"`
	XxlUpperBound float64 `json:"xxlUpperBound"`
	XxsLowerBound float64 `json:"xxsLowerBound"`
	XxsScaleMultiplier *float64 `json:"xxsScaleMultiplier,omitempty"`
}

type PokemonExtendedSettingsSizeSettingsV3 struct {
	MLowerBound float64 `json:"mLowerBound"`
	MUpperBound float64 `json:"mUpperBound"`
	XlUpperBound float64 `json:"xlUpperBound"`
	XsLowerBound float64 `json:"xsLowerBound"`
	XxlUpperBound float64 `json:"xxlUpperBound"`
	XxsLowerBound float64 `json:"xxsLowerBound"`
}

type PokemonExtendedSettingsTempEvoOverrides struct {
	SizeSettings PokemonExtendedSettingsSizeSettingsV3 `json:"sizeSettings"`
	TempEvoId string `json:"tempEvoId"`
}

type PokemonExtendedSettings struct {
	BreadOverrides []PokemonExtendedSettingsBreadOverrides `json:"breadOverrides,omitempty"`
	Form json.RawMessage `json:"form,omitempty"`
	SizeSettings PokemonExtendedSettingsSizeSettingsV2 `json:"sizeSettings"`
	TempEvoOverrides []PokemonExtendedSettingsTempEvoOverrides `json:"tempEvoOverrides,omitempty"`
	UniqueId string `json:"uniqueId"`
}

type PokemonExtendedSettingsEntry struct {
	TemplateID string `json:"templateId"`
	Data       PokemonExtendedSettingsEntryData `json:"data"`
}

func (PokemonExtendedSettingsEntry) MasterfileEntry() {}

type PokemonExtendedSettingsEntryData struct {
	TemplateID     string `json:"templateId"`
	PokemonExtendedSettings PokemonExtendedSettings `json:"pokemonExtendedSettings"`
}
