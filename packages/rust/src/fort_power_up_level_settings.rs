// Generated from Pokémon GO masterfile — group "fortPowerUpLevelSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AdditionalLevelPowerupDurationMsMinPowerUpPointsRequiredPowerupLevelRewards {
    pub additional_level_powerup_duration_ms: u64,
    pub level: String,
    pub min_power_up_points_required: u64,
    pub powerup_level_rewards: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Misc {
    pub level: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum FortPowerUpLevelSettings {
    AdditionalLevelPowerupDurationMsMinPowerUpPointsRequiredPowerupLevelRewards(AdditionalLevelPowerupDurationMsMinPowerUpPointsRequiredPowerupLevelRewards),
    Misc(Misc),
}

crate::masterfile_entry!(FortPowerUpLevelSettingsEntry, FortPowerUpLevelSettingsEntryData, fort_power_up_level_settings: FortPowerUpLevelSettings);
