// Generated from Pokémon GO masterfile — group "featureGate", 41 entries (structural types).

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
		name: "ALWAYS_USE_EXPANDED_TIME_RANGE" | "COMBAT" | "PVP" | "RAIDS" | "ROUTES" | "STATIONS";
		rolloutPercentage: number;
		status: number;
	}>;
}
