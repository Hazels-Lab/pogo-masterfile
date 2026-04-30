// Generated from Pokémon GO masterfile — group "featureGate".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Misc {
    pub rollout_percentage: u64,
    pub status: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SubFeatureGateList {
    pub name: String,
    pub rollout_percentage: u64,
    pub status: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SubFeatureGateListV2 {
    pub rollout_percentage: u64,
    pub status: u64,
    pub sub_feature_gate_list: Vec<SubFeatureGateList>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum FeatureGate {
    Misc(Misc),
    SubFeatureGateList(SubFeatureGateListV2),
}
