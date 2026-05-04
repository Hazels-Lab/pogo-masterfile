//! Generated from Pokémon GO masterfile — SettingsOverrideRule.

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MeshingEnabledRuleValueVpsEnabled {
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
pub struct RuleValue {
    pub occlusion_enabled: String,
    pub rule_type: u64,
    pub rule_value: String,
    pub semantics_enabled: String,
    pub sort_order: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FusedDepthEnabledPlus3 {
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
    MeshingEnabledRuleValueVpsEnabled(MeshingEnabledRuleValueVpsEnabled),
    RuleValue(RuleValue),
    FusedDepthEnabledPlus3(FusedDepthEnabledPlus3),
}

crate::masterfile_entry!(SettingsOverrideRuleEntry, SettingsOverrideRuleEntryData, settings_override_rule: SettingsOverrideRule);
