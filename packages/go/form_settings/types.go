// Generated from Pokémon GO masterfile — group "formSettings".

package form_settings

import "encoding/json"

type FormSettingsSillouetteObfuscationGroup struct {
	GroupNumber uint64 `json:"groupNumber"`
	OverrideDisplayForm string `json:"overrideDisplayForm"`
}

type FormSettingsForms struct {
	AssetBundleSuffix *string `json:"assetBundleSuffix,omitempty"`
	AssetBundleValue *uint64 `json:"assetBundleValue,omitempty"`
	Form json.RawMessage `json:"form"`
	IsCostume *bool `json:"isCostume,omitempty"`
	SillouetteObfuscationGroup *FormSettingsSillouetteObfuscationGroup `json:"sillouetteObfuscationGroup,omitempty"`
}

type FormSettings struct {
	Forms []FormSettingsForms `json:"forms,omitempty"`
	Pokemon string `json:"pokemon"`
}

type FormSettingsEntry struct {
	TemplateID string `json:"templateId"`
	Data       FormSettingsEntryData `json:"data"`
}

func (FormSettingsEntry) MasterfileEntry() {}

type FormSettingsEntryData struct {
	TemplateID     string `json:"templateId"`
	FormSettings FormSettings `json:"formSettings"`
}
