// Generated from Pokémon GO masterfile — group "featureGate".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FeatureGateMisc {
    pub rollout_percentage: u64,
    pub status: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FeatureGateSubFeatureGateListSubFeatureGateList {
    pub name: String,
    pub rollout_percentage: u64,
    pub status: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FeatureGateSubFeatureGateList {
    pub rollout_percentage: u64,
    pub status: u64,
    pub sub_feature_gate_list: Vec<FeatureGateSubFeatureGateListSubFeatureGateList>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum FeatureGate {
    Misc(FeatureGateMisc),
    SubFeatureGateList(FeatureGateSubFeatureGateList),
}
