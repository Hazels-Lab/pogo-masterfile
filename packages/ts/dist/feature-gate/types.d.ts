// Generated from Pokémon GO masterfile — group "featureGate", 28 entries (structural types).

import type { W } from "../_utils";

export interface FeatureGate<TemplateID extends string = string, TData extends FeatureGateData = FeatureGateData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		featureGate: TData & {
			rolloutPercentage: 100;
		};
	};
}
export type FeatureGateType = W<FeatureGate>;

export interface FeatureGateData {
	status: number;
	subFeatureGateList?: Array<{
		name:
			| "ALWAYS_USE_EXPANDED_TIME_RANGE"
			| "MEGA_COMBAT_BUTTONS_SUB_FEATURE_GATE"
			| "MEGA_LEVEL_SPEEDUP_SUB_FEATURE_GATE"
			| "PVP"
			| "RAIDS"
			| "ROUTES"
			| "STATIONS";
		rolloutPercentage: number;
		status: number;
	}>;
}
