// Generated from Pokémon GO masterfile — group "formSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SillouetteObfuscationGroup {
    pub group_number: u64,
    pub override_display_form: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Forms {
    pub asset_bundle_suffix: Option<String>,
    pub asset_bundle_value: Option<u64>,
    pub form: serde_json::Value,
    pub is_costume: Option<bool>,
    pub sillouette_obfuscation_group: Option<SillouetteObfuscationGroup>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FormsV2 {
    pub forms: Vec<Forms>,
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
    Forms(FormsV2),
    Misc(Misc),
}
