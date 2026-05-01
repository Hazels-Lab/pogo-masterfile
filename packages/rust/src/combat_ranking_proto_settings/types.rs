use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RankLevel {
    pub additional_total_battles_required: Option<u64>,
    pub additional_wins_required: Option<u64>,
    pub min_rating_required: Option<u64>,
    pub rank_level: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RequiredForRewards {
    pub additional_total_battles_required: u64,
    pub rank_level: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MinRatingRequired {
    pub min_rank_to_display_rating: u64,
    pub min_rating_required: u64,
    pub rank_level: Vec<RankLevel>,
    pub required_for_rewards: RequiredForRewards,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RankLevelV2 {
    pub rank_level: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RankLevelV3 {
    pub additional_wins_required: u64,
    pub rank_level: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Misc {
    pub min_rank_to_display_rating: u64,
    pub rank_level: (
        RankLevelV2,
        RequiredForRewards,
        RankLevelV3,
        RankLevelV3,
        RankLevelV3,
        RankLevelV3,
        RankLevelV3,
        RankLevelV3,
        RankLevelV3,
        RankLevelV3,
    ),
    pub required_for_rewards: RequiredForRewards,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CombatRankingProtoSettings {
    MinRatingRequired(MinRatingRequired),
    Misc(Misc),
}

crate::masterfile_entry!(CombatRankingProtoSettingsEntry, CombatRankingProtoSettingsEntryData, combat_ranking_proto_settings: CombatRankingProtoSettings);
