// Generated from Pokémon GO masterfile — group "eventPassTierSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventPassTierSettingsMinPointsRequiredRewardsRewardsCandy {
    pub amount: u64,
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventPassTierSettingsMinPointsRequiredRewardsRewardsItem {
    pub amount: u64,
    pub item: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventPassTierSettingsMinPointsRequiredRewardsRewardsPokemonEncounterPokemonDisplay {
    pub bread_mode_enum: Option<String>,
    pub form: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventPassTierSettingsMinPointsRequiredRewardsRewardsPokemonEncounterStatsLimitsOverride {
    pub max_pokemon_level: u64,
    pub min_pokemon_level: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventPassTierSettingsMinPointsRequiredRewardsRewardsPokemonEncounter {
    pub is_featured_pokemon: bool,
    pub pokemon_display: Option<EventPassTierSettingsMinPointsRequiredRewardsRewardsPokemonEncounterPokemonDisplay>,
    pub pokemon_id: String,
    pub stats_limits_override: Option<EventPassTierSettingsMinPointsRequiredRewardsRewardsPokemonEncounterStatsLimitsOverride>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventPassTierSettingsMinPointsRequiredRewardsRewards {
    pub candy: Option<EventPassTierSettingsMinPointsRequiredRewardsRewardsCandy>,
    pub exp: Option<u64>,
    pub item: Option<EventPassTierSettingsMinPointsRequiredRewardsRewardsItem>,
    pub pokemon_encounter: Option<EventPassTierSettingsMinPointsRequiredRewardsRewardsPokemonEncounter>,
    pub stardust: Option<u64>,
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventPassTierSettingsMinPointsRequiredRewards {
    pub min_points_required: u64,
    pub rank: u64,
    pub rewards: [EventPassTierSettingsMinPointsRequiredRewardsRewards; 1],
    pub track: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventPassTierSettingsRewardsRewardsPlayerAttribute {
    pub duration_mins: u64,
    pub key: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventPassTierSettingsRewardsRewardsPokemonEncounter {
    pub is_featured_pokemon: bool,
    pub pokemon_display: Option<EventPassTierSettingsMinPointsRequiredRewardsRewardsPokemonEncounterPokemonDisplay>,
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventPassTierSettingsRewardsRewards {
    pub candy: Option<EventPassTierSettingsMinPointsRequiredRewardsRewardsCandy>,
    pub exp: Option<u64>,
    pub item: Option<EventPassTierSettingsMinPointsRequiredRewardsRewardsItem>,
    pub player_attribute: Option<EventPassTierSettingsRewardsRewardsPlayerAttribute>,
    pub pokemon_encounter: Option<EventPassTierSettingsRewardsRewardsPokemonEncounter>,
    pub stardust: Option<u64>,
    pub r#type: String,
    pub xl_candy: Option<EventPassTierSettingsMinPointsRequiredRewardsRewardsCandy>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventPassTierSettingsRewards {
    pub rank: u64,
    pub rewards: Vec<EventPassTierSettingsRewardsRewards>,
    pub track: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventPassTierSettingsActiveBonusDisplaySettingsBonusSettingsMinPointsRequiredRewardsActiveBonusDisplaySettingsBonusBoxes {
    pub icon_type: String,
    pub text: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventPassTierSettingsActiveBonusDisplaySettingsBonusSettingsMinPointsRequiredRewardsActiveBonusDisplaySettings {
    pub bonus_boxes: Vec<EventPassTierSettingsActiveBonusDisplaySettingsBonusSettingsMinPointsRequiredRewardsActiveBonusDisplaySettingsBonusBoxes>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventPassTierSettingsActiveBonusDisplaySettingsBonusSettingsMinPointsRequiredRewardsBonusSettings {
    pub bonus_boxes: Vec<EventPassTierSettingsActiveBonusDisplaySettingsBonusSettingsMinPointsRequiredRewardsActiveBonusDisplaySettingsBonusBoxes>,
    pub event_name: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventPassTierSettingsActiveBonusDisplaySettingsBonusSettingsMinPointsRequiredRewardsRewards {
    pub player_attribute: EventPassTierSettingsRewardsRewardsPlayerAttribute,
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventPassTierSettingsActiveBonusDisplaySettingsBonusSettingsMinPointsRequiredRewards {
    pub active_bonus_display_settings: EventPassTierSettingsActiveBonusDisplaySettingsBonusSettingsMinPointsRequiredRewardsActiveBonusDisplaySettings,
    pub bonus_settings: EventPassTierSettingsActiveBonusDisplaySettingsBonusSettingsMinPointsRequiredRewardsBonusSettings,
    pub min_points_required: u64,
    pub rank: u64,
    pub rewards: [EventPassTierSettingsActiveBonusDisplaySettingsBonusSettingsMinPointsRequiredRewardsRewards; 1],
    pub track: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventPassTierSettingsMisc {
    pub rank: u64,
    pub track: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum EventPassTierSettings {
    MinPointsRequiredRewards(EventPassTierSettingsMinPointsRequiredRewards),
    Rewards(EventPassTierSettingsRewards),
    ActiveBonusDisplaySettingsBonusSettingsMinPointsRequiredRewards(EventPassTierSettingsActiveBonusDisplaySettingsBonusSettingsMinPointsRequiredRewards),
    Misc(EventPassTierSettingsMisc),
}
