use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ASettings {
    pub candy_cost: u64,
    pub mp_cost: Option<u64>,
    pub stardust_cost: Option<u64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ASettingsV2 {
    pub candy_cost: u64,
    pub mp_cost: Option<u64>,
    pub stardust_cost: Option<u64>,
    pub xp_rewards: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ASettingsV3 {
    pub candy_cost: Option<u64>,
    pub mp_cost: Option<u64>,
    pub stardust_cost: Option<u64>,
    pub xl_candy_cost: u64,
    pub xp_rewards: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum GroupValue {
    Uint(u64),
    String(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadMoveLevelSettings {
    pub a_settings: (ASettings, ASettingsV2, ASettingsV3),
    pub b_settings: (ASettingsV2, ASettingsV2, ASettingsV3),
    pub c_settings: (ASettingsV2, ASettingsV2, ASettingsV3),
    pub group: GroupValue,
}

crate::masterfile_entry!(BreadMoveLevelSettingsEntry, BreadMoveLevelSettingsEntryData, bread_move_level_settings: BreadMoveLevelSettings);
