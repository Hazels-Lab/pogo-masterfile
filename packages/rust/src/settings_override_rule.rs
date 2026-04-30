// Generated from Pokémon GO masterfile — group "settingsOverrideRule".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SettingsOverrideRuleMeshingEnabledRuleValueVpsEnabled {
    pub meshing_enabled: String,
    pub occlusion_enabled: String,
    pub rule_type: String,
    pub rule_value: String,
    pub semantics_enabled: String,
    pub sort_order: u64,
    pub vps_enabled: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SettingsOverrideRuleRuleValue {
    pub occlusion_enabled: String,
    pub rule_type: u64,
    pub rule_value: String,
    pub semantics_enabled: String,
    pub sort_order: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SettingsOverrideRuleFusedDepthEnabledMeshingEnabledOcclusionDefaultOnVpsEnabled {
    pub fused_depth_enabled: String,
    pub meshing_enabled: String,
    pub occlusion_default_on: String,
    pub occlusion_enabled: String,
    pub rule_type: String,
    pub semantics_enabled: String,
    pub sort_order: u64,
    pub vps_enabled: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum SettingsOverrideRule {
    MeshingEnabledRuleValueVpsEnabled(SettingsOverrideRuleMeshingEnabledRuleValueVpsEnabled),
    RuleValue(SettingsOverrideRuleRuleValue),
    FusedDepthEnabledMeshingEnabledOcclusionDefaultOnVpsEnabled(SettingsOverrideRuleFusedDepthEnabledMeshingEnabledOcclusionDefaultOnVpsEnabled),
}
