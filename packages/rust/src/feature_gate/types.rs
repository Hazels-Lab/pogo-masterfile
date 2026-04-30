use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Misc {
    pub rollout_percentage: u64,
    pub status: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SubFeatureGateListV2 {
    pub name: String,
    pub rollout_percentage: u64,
    pub status: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SubFeatureGateList {
    pub rollout_percentage: u64,
    pub status: u64,
    pub sub_feature_gate_list: Vec<SubFeatureGateListV2>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum FeatureGate {
    Misc(Misc),
    SubFeatureGateList(SubFeatureGateList),
}

crate::masterfile_entry!(FeatureGateEntry, FeatureGateEntryData, feature_gate: FeatureGate);
