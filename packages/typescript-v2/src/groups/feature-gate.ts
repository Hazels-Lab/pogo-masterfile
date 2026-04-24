export interface FeatureGate<T extends string> {
	templateId: T;
	data: FeatureGateData<T>;
}

export interface FeatureGateData<T extends string> {
	templateId: T;
	featureGate: unknown;
}

export type FeatureGateAdminGmNiaOpsOnlyFilterAmsFeatureGate = FeatureGate<"ADMIN_GM_NIA_OPS_ONLY_FILTER_AMS_FEATURE_GATE">;
export type FeatureGateAmsFeatureGate = FeatureGate<"AMS_FEATURE_GATE">;
export type FeatureGateAmsFrontendFeatureGate = FeatureGate<"AMS_FRONTEND_FEATURE_GATE">;
export type FeatureGateDayNightPoiFeatureGate = FeatureGate<"DAY_NIGHT_POI_FEATURE_GATE">;
export type FeatureGateEnablePvpChallengeSpannerFeatureGate = FeatureGate<"ENABLE_PVP_CHALLENGE_SPANNER_FEATURE_GATE">;
export type FeatureGateEventListFeatureGate = FeatureGate<"EVENT_LIST_FEATURE_GATE">;
export type FeatureGateEventPassBonusRanksFeatureGate = FeatureGate<"EVENT_PASS_BONUS_RANKS_FEATURE_GATE">;
export type FeatureGateEventPassMilestoneRewardsFeatureGate = FeatureGate<"EVENT_PASS_MILESTONE_REWARDS_FEATURE_GATE">;
export type FeatureGateHealToastFeatureGate = FeatureGate<"HEAL_TOAST_FEATURE_GATE">;
export type FeatureGateMega2026FeatureGate = FeatureGate<"MEGA_2026_FEATURE_GATE">;
export type FeatureGateStoreRefreshFeatureGate = FeatureGate<"STORE_REFRESH_FEATURE_GATE">;
export type FeatureGateUpdateTicketsStringFeatureGate = FeatureGate<"UPDATE_TICKETS_STRING_FEATURE_GATE">;
export type FeatureGateVnextPreResponseInputBlockingBehaviorFeatureGate = FeatureGate<"VNEXT_PRE_RESPONSE_INPUT_BLOCKING_BEHAVIOR_FEATURE_GATE">;

export type FeatureGateMasterfileEntry =
	| FeatureGateAdminGmNiaOpsOnlyFilterAmsFeatureGate
	| FeatureGateAmsFeatureGate
	| FeatureGateAmsFrontendFeatureGate
	| FeatureGateDayNightPoiFeatureGate
	| FeatureGateEnablePvpChallengeSpannerFeatureGate
	| FeatureGateEventListFeatureGate
	| FeatureGateEventPassBonusRanksFeatureGate
	| FeatureGateEventPassMilestoneRewardsFeatureGate
	| FeatureGateHealToastFeatureGate
	| FeatureGateMega2026FeatureGate
	| FeatureGateStoreRefreshFeatureGate
	| FeatureGateUpdateTicketsStringFeatureGate
	| FeatureGateVnextPreResponseInputBlockingBehaviorFeatureGate;

export type FeatureGateTemplateID = FeatureGateMasterfileEntry["templateId"];
