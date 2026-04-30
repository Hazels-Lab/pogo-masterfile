use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CombatType {
    pub excellent_level_threshold: f64,
    pub great_level_threshold: f64,
    pub nice_level_threshold: f64,
    pub r#type: String,
}

crate::masterfile_entry!(CombatTypeEntry, CombatTypeEntryData, combat_type: CombatType);
