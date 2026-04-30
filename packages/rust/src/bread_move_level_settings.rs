//! Generated from Pokémon GO masterfile — group "breadMoveLevelSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ASettings {
    pub candy_cost: Option<u64>,
    pub mp_cost: Option<u64>,
    pub stardust_cost: Option<u64>,
    pub xl_candy_cost: Option<u64>,
    pub xp_rewards: Option<u64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BSettings {
    pub candy_cost: Option<u64>,
    pub mp_cost: Option<u64>,
    pub stardust_cost: Option<u64>,
    pub xl_candy_cost: Option<u64>,
    pub xp_rewards: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadMoveLevelSettings {
    pub a_settings: Vec<ASettings>,
    pub b_settings: Vec<BSettings>,
    pub c_settings: Vec<BSettings>,
    pub group: serde_json::Value,
}

crate::masterfile_entry!(BreadMoveLevelSettingsEntry, BreadMoveLevelSettingsEntryData, bread_move_level_settings: BreadMoveLevelSettings);
