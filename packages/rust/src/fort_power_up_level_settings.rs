// Generated from Pokémon GO masterfile — group "fortPowerUpLevelSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FortPowerUpLevelSettingsAdditionalLevelPowerupDurationMsMinPowerUpPointsRequiredPowerupLevelRewards {
    pub additional_level_powerup_duration_ms: u64,
    pub level: String,
    pub min_power_up_points_required: u64,
    pub powerup_level_rewards: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FortPowerUpLevelSettingsMisc {
    pub level: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum FortPowerUpLevelSettings {
    AdditionalLevelPowerupDurationMsMinPowerUpPointsRequiredPowerupLevelRewards(FortPowerUpLevelSettingsAdditionalLevelPowerupDurationMsMinPowerUpPointsRequiredPowerupLevelRewards),
    Misc(FortPowerUpLevelSettingsMisc),
}
