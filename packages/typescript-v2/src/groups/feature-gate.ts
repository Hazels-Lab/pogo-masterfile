export interface FeatureGate<T extends string> {
	templateId: T;
	data: FeatureGateData<T>;
}

export interface FeatureGateData<T extends string> {
	templateId: T;
	featureGate: {
		rolloutPercentage: 100;
		status: 1 | 24 | 29825861 | 41414141 | 87970808 | 216426293 | 1827323905;
		subFeatureGateList?: Array<
			{
				name: "MEGA_2026_FTUE_SUB_FEATURE_GATE" | "MEGA_CP_BOOST_ENABLED_SUB_FEATURE_GATE" | "MEGA_EVOLVE_BUTTON_SUB_FEATURE_GATE" | "MEGA_HUD_SUB_FEATURE_GATE" | "MEGA_HUD_TIMER_SUB_FEATURE_GATE" | "MEGA_LEVEL_4_ENABLED_SUB_FEATURE_GATE" | "MEGA_LEVELS_TUTORIAL_SUB_FEATURE_GATE" | "PVP" | "REMOTE_NC_HELP_TEXT_SUB_FEATURE_GATE";
				rolloutPercentage: 100;
				status: 2 | 222 | 292744512 | 311989544 | 368387608 | 382901475 | 466713653 | 817843414 | 991283745;
			}
		>;
	};
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
