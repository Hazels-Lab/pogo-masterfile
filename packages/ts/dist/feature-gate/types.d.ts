// Generated from Pokémon GO masterfile — group "featureGate", 54 entries (structural types).

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
			| "COMBAT"
			| "INVITE_BY_CODE"
			| "INVITE_FRIENDS"
			| "TODAY_VIEW_V3_CLEANUP_SKIP_IF_RUNNING_SUB_FEATURE_GATE"
			| "TODAY_VIEW_V3_DRAG_LATCH_SUB_FEATURE_GATE"
			| "TODAY_VIEW_V3_FAST_OPEN_TRANSITION_SUB_FEATURE_GATE"
			| "TODAY_VIEW_V3_FAST_PAGE_FADE_SUB_FEATURE_GATE"
			| "TODAY_VIEW_V3_GO_PASS_NEIGHBOR_PRELOAD_SUB_FEATURE_GATE"
			| "TODAY_VIEW_V3_INNER_TAB_RESTORE_SUB_FEATURE_GATE"
			| "TODAY_VIEW_V3_INNER_TAB_SNAP_RETRY_SUB_FEATURE_GATE"
			| "TODAY_VIEW_V3_LOADING_SKELETON_SUB_FEATURE_GATE"
			| "TODAY_VIEW_V3_OPEN_TIMING_SUB_FEATURE_GATE"
			| "TODAY_VIEW_V3_OUTER_TAB_RESTORE_SUB_FEATURE_GATE"
			| "TODAY_VIEW_V3_SNAP_GUARD_SUB_FEATURE_GATE"
			| "TODAY_VIEW_V3_VIEWPORT_LAYOUT_SUB_FEATURE_GATE";
		rolloutPercentage: number;
		status: number;
	}>;
}
