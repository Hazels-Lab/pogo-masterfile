// Generated from Pokémon GO masterfile — group "breadMoveLevelSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadMoveLevelSettingsASettings {
    pub candy_cost: u64,
    pub mp_cost: Option<u64>,
    pub stardust_cost: Option<u64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadMoveLevelSettingsASettingsV2 {
    pub candy_cost: u64,
    pub mp_cost: Option<u64>,
    pub stardust_cost: Option<u64>,
    pub xp_rewards: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadMoveLevelSettingsASettingsV3 {
    pub candy_cost: Option<u64>,
    pub mp_cost: Option<u64>,
    pub stardust_cost: Option<u64>,
    pub xl_candy_cost: u64,
    pub xp_rewards: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadMoveLevelSettings {
    pub a_settings: (BreadMoveLevelSettingsASettings, BreadMoveLevelSettingsASettingsV2, BreadMoveLevelSettingsASettingsV3),
    pub b_settings: (BreadMoveLevelSettingsASettingsV2, BreadMoveLevelSettingsASettingsV2, BreadMoveLevelSettingsASettingsV3),
    pub c_settings: (BreadMoveLevelSettingsASettingsV2, BreadMoveLevelSettingsASettingsV2, BreadMoveLevelSettingsASettingsV3),
    pub group: serde_json::Value,
}
