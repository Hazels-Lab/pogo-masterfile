export interface FeatureGate<TemplateID extends string = string, TData extends FeatureGateData = FeatureGateData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		featureGate: TData & {
			rolloutPercentage: 100;
		};
	};
}

export interface FeatureGateData {
	status?: number;
	subFeatureGateList?: Array<{
		name: string;
		rolloutPercentage: number;
		status: number;
	}>;
}

export type FeatureGateAdminGmNiaOpsOnlyFilterAmsFeatureGate = FeatureGate<
	"ADMIN_GM_NIA_OPS_ONLY_FILTER_AMS_FEATURE_GATE",
	{
		status: 1;
	}
>;
export type FeatureGateAmsFeatureGate = FeatureGate<
	"AMS_FEATURE_GATE",
	{
		status: 24;
	}
>;
export type FeatureGateAmsFrontendFeatureGate = FeatureGate<
	"AMS_FRONTEND_FEATURE_GATE",
	{
		status: 1;
	}
>;
export type FeatureGateDayNightPoiFeatureGate = FeatureGate<
	"DAY_NIGHT_POI_FEATURE_GATE",
	{
		status: 1827323905;
	}
>;
export type FeatureGateEnablePvpChallengeSpannerFeatureGate = FeatureGate<
	"ENABLE_PVP_CHALLENGE_SPANNER_FEATURE_GATE",
	{
		status: 1;
	}
>;
export type FeatureGateEventListFeatureGate = FeatureGate<
	"EVENT_LIST_FEATURE_GATE",
	{
		status: 1;
	}
>;
export type FeatureGateEventPassBonusRanksFeatureGate = FeatureGate<
	"EVENT_PASS_BONUS_RANKS_FEATURE_GATE",
	{
		status: 1;
	}
>;
export type FeatureGateEventPassMilestoneRewardsFeatureGate = FeatureGate<
	"EVENT_PASS_MILESTONE_REWARDS_FEATURE_GATE",
	{
		status: 1;
	}
>;
export type FeatureGateHealToastFeatureGate = FeatureGate<
	"HEAL_TOAST_FEATURE_GATE",
	{
		status: 41414141;
	}
>;
export type FeatureGateMega2026FeatureGate = FeatureGate<
	"MEGA_2026_FEATURE_GATE",
	{
		status: 216426293;
		subFeatureGateList: [
			{
				name: "MEGA_LEVELS_TUTORIAL_SUB_FEATURE_GATE";
				rolloutPercentage: 100;
				status: 817843414;
			},
			{
				name: "MEGA_EVOLVE_BUTTON_SUB_FEATURE_GATE";
				rolloutPercentage: 100;
				status: 466713653;
			},
			{
				name: "MEGA_HUD_SUB_FEATURE_GATE";
				rolloutPercentage: 100;
				status: 292744512;
			},
			{
				name: "MEGA_HUD_TIMER_SUB_FEATURE_GATE";
				rolloutPercentage: 100;
				status: 991283745;
			},
			{
				name: "MEGA_2026_FTUE_SUB_FEATURE_GATE";
				rolloutPercentage: 100;
				status: 382901475;
			},
			{
				name: "MEGA_LEVEL_4_ENABLED_SUB_FEATURE_GATE";
				rolloutPercentage: 100;
				status: 311989544;
			},
			{
				name: "REMOTE_NC_HELP_TEXT_SUB_FEATURE_GATE";
				rolloutPercentage: 100;
				status: 222;
			},
			{
				name: "MEGA_CP_BOOST_ENABLED_SUB_FEATURE_GATE";
				rolloutPercentage: 100;
				status: 368387608;
			},
		];
	}
>;
export type FeatureGateStoreRefreshFeatureGate = FeatureGate<
	"STORE_REFRESH_FEATURE_GATE",
	{
		status: 87970808;
	}
>;
export type FeatureGateUpdateTicketsStringFeatureGate = FeatureGate<
	"UPDATE_TICKETS_STRING_FEATURE_GATE",
	{
		status: 29825861;
	}
>;
export type FeatureGateVnextPreResponseInputBlockingBehaviorFeatureGate = FeatureGate<
	"VNEXT_PRE_RESPONSE_INPUT_BLOCKING_BEHAVIOR_FEATURE_GATE",
	{
		status: 1;
		subFeatureGateList: [
			{
				name: "PVP";
				rolloutPercentage: 100;
				status: 2;
			},
		];
	}
>;

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
