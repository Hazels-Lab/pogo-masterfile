// Generated from Pokémon GO masterfile — group "combatRankingProtoSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CombatRankingProtoSettingsMinRatingRequiredRankLevel {
    pub additional_total_battles_required: Option<u64>,
    pub additional_wins_required: Option<u64>,
    pub min_rating_required: Option<u64>,
    pub rank_level: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CombatRankingProtoSettingsMinRatingRequiredRequiredForRewards {
    pub additional_total_battles_required: u64,
    pub rank_level: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CombatRankingProtoSettingsMinRatingRequired {
    pub min_rank_to_display_rating: u64,
    pub min_rating_required: u64,
    pub rank_level: Vec<CombatRankingProtoSettingsMinRatingRequiredRankLevel>,
    pub required_for_rewards: CombatRankingProtoSettingsMinRatingRequiredRequiredForRewards,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CombatRankingProtoSettingsMiscRankLevel {
    pub rank_level: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CombatRankingProtoSettingsMiscRankLevelV2 {
    pub additional_wins_required: u64,
    pub rank_level: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CombatRankingProtoSettingsMisc {
    pub min_rank_to_display_rating: u64,
    pub rank_level: (CombatRankingProtoSettingsMiscRankLevel, CombatRankingProtoSettingsMinRatingRequiredRequiredForRewards, CombatRankingProtoSettingsMiscRankLevelV2, CombatRankingProtoSettingsMiscRankLevelV2, CombatRankingProtoSettingsMiscRankLevelV2, CombatRankingProtoSettingsMiscRankLevelV2, CombatRankingProtoSettingsMiscRankLevelV2, CombatRankingProtoSettingsMiscRankLevelV2, CombatRankingProtoSettingsMiscRankLevelV2, CombatRankingProtoSettingsMiscRankLevelV2),
    pub required_for_rewards: CombatRankingProtoSettingsMinRatingRequiredRequiredForRewards,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CombatRankingProtoSettings {
    MinRatingRequired(CombatRankingProtoSettingsMinRatingRequired),
    Misc(CombatRankingProtoSettingsMisc),
}
