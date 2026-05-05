// Generated from Pokémon GO masterfile — group "featureGate", 14 entries (variant aliases).

import type { S } from "../../_utils";
import type { FeatureGate } from "../types";

export type FeatureGateAdminGmNiaOpsOnlyFilterAms = S<
	FeatureGate<
		"ADMIN_GM_NIA_OPS_ONLY_FILTER_AMS_FEATURE_GATE",
		{
			status: 1;
		}
	>
>;
export type FeatureGateAms = S<
	FeatureGate<
		"AMS_FEATURE_GATE",
		{
			status: 24;
		}
	>
>;
export type FeatureGateAmsFrontend = S<
	FeatureGate<
		"AMS_FRONTEND_FEATURE_GATE",
		{
			status: 1;
		}
	>
>;
export type FeatureGateDayNightPoi = S<
	FeatureGate<
		"DAY_NIGHT_POI_FEATURE_GATE",
		{
			status: 1827323905;
		}
	>
>;
export type FeatureGateEnablePvpChallengeSpanner = S<
	FeatureGate<
		"ENABLE_PVP_CHALLENGE_SPANNER_FEATURE_GATE",
		{
			status: 1;
		}
	>
>;
export type FeatureGateEventList = S<
	FeatureGate<
		"EVENT_LIST_FEATURE_GATE",
		{
			status: 1;
		}
	>
>;
export type FeatureGateEventPassBonusRanks = S<
	FeatureGate<
		"EVENT_PASS_BONUS_RANKS_FEATURE_GATE",
		{
			status: 1;
		}
	>
>;
export type FeatureGateEventPassClaimableRewardToggle = S<
	FeatureGate<
		"EVENT_PASS_CLAIMABLE_REWARD_TOGGLE_FEATURE_GATE",
		{
			status: 1;
		}
	>
>;
export type FeatureGateEventPassMilestoneRewards = S<
	FeatureGate<
		"EVENT_PASS_MILESTONE_REWARDS_FEATURE_GATE",
		{
			status: 1;
		}
	>
>;
export type FeatureGateHealToast = S<
	FeatureGate<
		"HEAL_TOAST_FEATURE_GATE",
		{
			status: 41414141;
		}
	>
>;
export type FeatureGateMega2026 = S<
	FeatureGate<
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
	>
>;
export type FeatureGateStoreRefresh = S<
	FeatureGate<
		"STORE_REFRESH_FEATURE_GATE",
		{
			status: 87970808;
		}
	>
>;
export type FeatureGateUpdateTicketsString = S<
	FeatureGate<
		"UPDATE_TICKETS_STRING_FEATURE_GATE",
		{
			status: 29825861;
		}
	>
>;
export type FeatureGateVnextPreResponseInputBlockingBehavior = S<
	FeatureGate<
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
	>
>;

export type FeatureGateMasterfileEntry =
	| FeatureGateAdminGmNiaOpsOnlyFilterAms
	| FeatureGateAms
	| FeatureGateAmsFrontend
	| FeatureGateDayNightPoi
	| FeatureGateEnablePvpChallengeSpanner
	| FeatureGateEventList
	| FeatureGateEventPassBonusRanks
	| FeatureGateEventPassClaimableRewardToggle
	| FeatureGateEventPassMilestoneRewards
	| FeatureGateHealToast
	| FeatureGateMega2026
	| FeatureGateStoreRefresh
	| FeatureGateUpdateTicketsString
	| FeatureGateVnextPreResponseInputBlockingBehavior;

export type FeatureGateTemplateID = FeatureGateMasterfileEntry["templateId"];
