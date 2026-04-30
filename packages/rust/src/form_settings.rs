// Generated from Pokémon GO masterfile — group "formSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FormSettingsFormsFormsSillouetteObfuscationGroup {
    pub group_number: u64,
    pub override_display_form: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FormSettingsFormsForms {
    pub asset_bundle_suffix: Option<String>,
    pub asset_bundle_value: Option<u64>,
    pub form: serde_json::Value,
    pub is_costume: Option<bool>,
    pub sillouette_obfuscation_group: Option<FormSettingsFormsFormsSillouetteObfuscationGroup>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FormSettingsForms {
    pub forms: Vec<FormSettingsFormsForms>,
    pub pokemon: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FormSettingsMisc {
    pub pokemon: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum FormSettings {
    Forms(FormSettingsForms),
    Misc(FormSettingsMisc),
}
