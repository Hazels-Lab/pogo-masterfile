//! Generated from Pokémon GO masterfile — group "genderSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Gender {
    pub female_percent: Option<f64>,
    pub genderless_percent: Option<u64>,
    pub male_percent: Option<f64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Misc {
    pub gender: Gender,
    pub pokemon: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Form {
    pub form: serde_json::Value,
    pub gender: Gender,
    pub pokemon: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum GenderSettings {
    Misc(Misc),
    Form(Form),
}

crate::masterfile_entry!(GenderSettingsEntry, GenderSettingsEntryData, gender_settings: GenderSettings);
