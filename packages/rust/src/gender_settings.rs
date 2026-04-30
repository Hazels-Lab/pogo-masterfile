// Generated from Pokémon GO masterfile — group "genderSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct GenderSettingsMiscGender {
    pub female_percent: Option<f64>,
    pub genderless_percent: Option<u64>,
    pub male_percent: Option<f64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct GenderSettingsMisc {
    pub gender: GenderSettingsMiscGender,
    pub pokemon: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct GenderSettingsForm {
    pub form: serde_json::Value,
    pub gender: GenderSettingsMiscGender,
    pub pokemon: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum GenderSettings {
    Misc(GenderSettingsMisc),
    Form(GenderSettingsForm),
}
