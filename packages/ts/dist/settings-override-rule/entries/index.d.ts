// Generated from Pokémon GO masterfile — group "settingsOverrideRule" entries barrel.

import type { SettingsOverrideRuleFusedDepthEnabledMeshingEnabledOcclusionDefaultOnVpsEnabledMasterfileEntry } from "./fused-depth-enabled-meshing-enabled-occlusion-default-on-vps-enabled";
import type { SettingsOverrideRuleMeshingEnabledRuleValueVpsEnabledMasterfileEntry } from "./meshing-enabled-rule-value-vps-enabled";
import type { SettingsOverrideRuleRuleValueMasterfileEntry } from "./rule-value";

export type * from "./fused-depth-enabled-meshing-enabled-occlusion-default-on-vps-enabled";
export type * from "./meshing-enabled-rule-value-vps-enabled";
export type * from "./rule-value";

export type SettingsOverrideRuleMasterfileEntry = SettingsOverrideRuleFusedDepthEnabledMeshingEnabledOcclusionDefaultOnVpsEnabledMasterfileEntry | SettingsOverrideRuleMeshingEnabledRuleValueVpsEnabledMasterfileEntry | SettingsOverrideRuleRuleValueMasterfileEntry;

export type SettingsOverrideRuleTemplateID = SettingsOverrideRuleMasterfileEntry["templateId"];
