// Generated from Pokémon GO masterfile — group "settingsOverrideRule".

package settings_override_rule

import "encoding/json"

type SettingsOverrideRule struct {
	FusedDepthEnabled *string `json:"fusedDepthEnabled,omitempty"`
	MeshingEnabled *string `json:"meshingEnabled,omitempty"`
	OcclusionDefaultOn *string `json:"occlusionDefaultOn,omitempty"`
	OcclusionEnabled string `json:"occlusionEnabled"`
	RuleType json.RawMessage `json:"ruleType"`
	RuleValue *string `json:"ruleValue,omitempty"`
	SemanticsEnabled string `json:"semanticsEnabled"`
	SortOrder uint64 `json:"sortOrder"`
	VpsEnabled *string `json:"vpsEnabled,omitempty"`
}

type SettingsOverrideRuleEntry struct {
	TemplateID string `json:"templateId"`
	Data       SettingsOverrideRuleEntryData `json:"data"`
}

func (SettingsOverrideRuleEntry) MasterfileEntry() {}

type SettingsOverrideRuleEntryData struct {
	TemplateID     string `json:"templateId"`
	SettingsOverrideRule SettingsOverrideRule `json:"settingsOverrideRule"`
}
