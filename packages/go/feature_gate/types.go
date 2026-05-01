// Generated from Pokémon GO masterfile — group "featureGate".

package feature_gate

type FeatureGateSubFeatureGateList struct {
	Name              string `json:"name"`
	RolloutPercentage uint64 `json:"rolloutPercentage"`
	Status            uint64 `json:"status"`
}

type FeatureGate struct {
	RolloutPercentage  uint64                          `json:"rolloutPercentage"`
	Status             uint64                          `json:"status"`
	SubFeatureGateList []FeatureGateSubFeatureGateList `json:"subFeatureGateList,omitempty"`
}

type FeatureGateEntry struct {
	TemplateID string               `json:"templateId"`
	Data       FeatureGateEntryData `json:"data"`
}

func (FeatureGateEntry) MasterfileEntry() {}

type FeatureGateEntryData struct {
	TemplateID  string      `json:"templateId"`
	FeatureGate FeatureGate `json:"featureGate"`
}
