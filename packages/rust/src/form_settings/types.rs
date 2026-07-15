//! Generated from Pokémon GO masterfile — FormSettings.

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum FormValue {
    Uint(u64),
    String(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SillouetteObfuscationGroup {
    pub group_number: u64,
    pub override_display_form: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FormsV2 {
    pub asset_bundle_suffix: Option<String>,
    pub asset_bundle_value: Option<u64>,
    pub form: FormValue,
    pub is_costume: Option<bool>,
    pub sillouette_obfuscation_group: Option<SillouetteObfuscationGroup>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Forms {
    pub forms: Vec<FormsV2>,
    pub pokemon: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Misc {
    pub pokemon: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum FormSettings {
    Forms(Forms),
    Misc(Misc),
}

crate::masterfile_entry!(FormSettingsEntry, FormSettingsEntryData, form_settings: FormSettings);
