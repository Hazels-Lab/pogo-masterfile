use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Gender {
    pub female_percent: Option<f64>,
    pub genderless_percent: Option<f64>,
    pub male_percent: Option<f64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Misc {
    pub gender: Gender,
    pub pokemon: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum FormValue {
    Uint(u64),
    String(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Form {
    pub form: FormValue,
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
