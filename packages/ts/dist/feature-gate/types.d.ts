// Generated from Pokémon GO masterfile — group "featureGate", 18 entries (structural types).

import type { W } from "../_utils";

export interface FeatureGate<TemplateID extends string = string, TData extends FeatureGateData = FeatureGateData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		featureGate: TData;
	};
}
export type FeatureGateType = W<FeatureGate>;

export interface FeatureGateData {
	rolloutPercentage: number;
	status: number;
	subFeatureGateList?: Array<{
		name:
			| "ALWAYS_USE_EXPANDED_TIME_RANGE"
			| "MEGA_2026_FTUE_SUB_FEATURE_GATE"
			| "MEGA_CP_BOOST_ENABLED_SUB_FEATURE_GATE"
			| "MEGA_EVOLVE_BUTTON_SUB_FEATURE_GATE"
			| "MEGA_HUD_SUB_FEATURE_GATE"
			| "MEGA_HUD_TIMER_SUB_FEATURE_GATE"
			| "MEGA_LEVEL_4_ENABLED_SUB_FEATURE_GATE"
			| "MEGA_LEVEL_SPEEDUP_SUB_FEATURE_GATE"
			| "MEGA_LEVELS_TUTORIAL_SUB_FEATURE_GATE"
			| "PVP"
			| "RAIDS"
			| "REMOTE_NC_HELP_TEXT_SUB_FEATURE_GATE"
			| "ROUTES"
			| "STATIONS";
		rolloutPercentage: number;
		status: number;
	}>;
}
