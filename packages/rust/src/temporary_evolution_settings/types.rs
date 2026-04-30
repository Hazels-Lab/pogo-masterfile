use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TemporaryEvolutions {
    pub asset_bundle_value: u64,
    pub temporary_evolution_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TemporaryEvolutionSettings {
    pub pokemon_id: String,
    pub temporary_evolutions: Vec<TemporaryEvolutions>,
}

crate::masterfile_entry!(TemporaryEvolutionSettingsEntry, TemporaryEvolutionSettingsEntryData, temporary_evolution_settings: TemporaryEvolutionSettings);
