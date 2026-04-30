// Generated from Pokémon GO masterfile — group "tappableSettings".

package masterfile

type TappableSettings struct {
	AvgTappablesInView             *float64 `json:"avgTappablesInView,omitempty"`
	BuddyFovDegress                *float64 `json:"buddyFovDegress,omitempty"`
	MovementRespawnThresholdMeters *float64 `json:"movementRespawnThresholdMeters,omitempty"`
	RemoveWhenTapped               *bool    `json:"removeWhenTapped,omitempty"`
	SpawnAngleDegrees              *float64 `json:"spawnAngleDegrees,omitempty"`
	TappableAssetKey               *string  `json:"tappableAssetKey,omitempty"`
	Type                           *string  `json:"type,omitempty"`
	VisibleRadiusMeters            float64  `json:"visibleRadiusMeters"`
}

type TappableSettingsEntry struct {
	TemplateID string                    `json:"templateId"`
	Data       TappableSettingsEntryData `json:"data"`
}

func (TappableSettingsEntry) isMasterfileEntry() {}

type TappableSettingsEntryData struct {
	TemplateID       string           `json:"templateId"`
	TappableSettings TappableSettings `json:"tappableSettings"`
}
