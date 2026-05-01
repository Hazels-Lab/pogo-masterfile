// Generated from Pokémon GO masterfile — group "settingsOverrideRule", 250 entries (structural types).

import type { W } from "../_utils";

export interface SettingsOverrideRule<TemplateID extends string = string, TData extends SettingsOverrideRuleData = SettingsOverrideRuleData> {
    templateId: TemplateID;
    data: {
        templateId: TemplateID;
        settingsOverrideRule: TData;
    };
}
export type SettingsOverrideRuleType = W<SettingsOverrideRule>;

export interface SettingsOverrideRuleData {
    fusedDepthEnabled?: "TRUE";
    meshingEnabled?: "FALSE" | "TRUE";
    occlusionDefaultOn?: "FALSE";
    occlusionEnabled: "FALSE" | "TRUE";
    ruleType: number | "ALL" | "DEVICE_MODEL" | "DEVICE_MODEL_CONTAINS" | "PLATFORM";
    ruleValue?: string;
    semanticsEnabled: "FALSE" | "TRUE";
    sortOrder: number;
    vpsEnabled?: "FALSE" | "TRUE";
}
