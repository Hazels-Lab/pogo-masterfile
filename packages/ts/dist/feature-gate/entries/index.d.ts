// Generated from Pokémon GO masterfile — group "featureGate", 17 entries (variant aliases).

import type { S } from "../../_utils";
import type { FeatureGate } from "../types";

export type FeatureGateAdminGmNiaOpsOnlyFilterAms = S<
	FeatureGate<
		"ADMIN_GM_NIA_OPS_ONLY_FILTER_AMS_FEATURE_GATE",
		{
			rolloutPercentage: 100;
			status: 1;
		}
	>
>;
export type FeatureGateAms = S<
	FeatureGate<
		"AMS_FEATURE_GATE",
		{
			rolloutPercentage: 100;
			status: 24;
		}
	>
>;
export type FeatureGateAmsFrontend = S<
	FeatureGate<
		"AMS_FRONTEND_FEATURE_GATE",
		{
			rolloutPercentage: 100;
			status: 1;
		}
	>
>;
export type FeatureGateDayNightPoi = S<
	FeatureGate<
		"DAY_NIGHT_POI_FEATURE_GATE",
		{
			rolloutPercentage: 100;
			status: 1827323905;
		}
	>
>;
export type FeatureGateEnablePvpChallengeSpanner = S<
	FeatureGate<
		"ENABLE_PVP_CHALLENGE_SPANNER_FEATURE_GATE",
		{
			rolloutPercentage: 100;
			status: 1;
		}
	>
>;
export type FeatureGateEnhancedCurrencyOverflowStardust = S<
	FeatureGate<
		"ENHANCED_CURRENCY_OVERFLOW_STARDUST_FEATURE_GATE",
		{
			rolloutPercentage: 100;
			status: 1;
		}
	>
>;
export type FeatureGateEventList = S<
	FeatureGate<
		"EVENT_LIST_FEATURE_GATE",
		{
			rolloutPercentage: 100;
			status: 1;
		}
	>
>;
export type FeatureGateEventPassBonusRanks = S<
	FeatureGate<
		"EVENT_PASS_BONUS_RANKS_FEATURE_GATE",
		{
			rolloutPercentage: 100;
			status: 1;
		}
	>
>;
export type FeatureGateEventPassClaimableRewardToggle = S<
	FeatureGate<
		"EVENT_PASS_CLAIMABLE_REWARD_TOGGLE_FEATURE_GATE",
		{
			rolloutPercentage: 100;
			status: 1;
		}
	>
>;
export type FeatureGateEventPassMilestoneRewards = S<
	FeatureGate<
		"EVENT_PASS_MILESTONE_REWARDS_FEATURE_GATE",
		{
			rolloutPercentage: 100;
			status: 1;
		}
	>
>;
export type FeatureGateEventTicketDatetimeRange = S<
	FeatureGate<
		"EVENT_TICKET_DATETIME_RANGE_FEATURE_GATE",
		{
			rolloutPercentage: 100;
			status: 1;
			subFeatureGateList: [
				{
					name: "ALWAYS_USE_EXPANDED_TIME_RANGE";
					rolloutPercentage: 100;
					status: 1;
				},
			];
		}
	>
>;
export type FeatureGateFriendshipResyncOnRead = S<
	FeatureGate<
		"FRIENDSHIP_RESYNC_ON_READ_FEATURE_GATE",
		{
			rolloutPercentage: 50;
			status: 1;
		}
	>
>;
export type FeatureGateGamesiteWebviewNearbyButtons = S<
	FeatureGate<
		"GAMESITE_WEBVIEW_NEARBY_BUTTONS_FEATURE_GATE",
		{
			rolloutPercentage: 100;
			status: 1;
			subFeatureGateList: [
				{
					name: "RAIDS";
					rolloutPercentage: 100;
					status: 1;
				},
				{
					name: "STATIONS";
					rolloutPercentage: 100;
					status: 1;
				},
				{
					name: "ROUTES";
					rolloutPercentage: 100;
					status: 1;
				},
			];
		}
	>
>;
export type FeatureGateMega2026 = S<
	FeatureGate<
		"MEGA_2026_FEATURE_GATE",
		{
			rolloutPercentage: 100;
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
				{
					name: "MEGA_LEVEL_SPEEDUP_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 344171892;
				},
			];
		}
	>
>;
export type FeatureGateSeafGetMapObjectsRateLimiter = S<
	FeatureGate<
		"SEAF_GET_MAP_OBJECTS_RATE_LIMITER_FEATURE_GATE",
		{
			rolloutPercentage: 100;
			status: 1;
		}
	>
>;
export type FeatureGateUpdateTicketsString = S<
	FeatureGate<
		"UPDATE_TICKETS_STRING_FEATURE_GATE",
		{
			rolloutPercentage: 100;
			status: 29825861;
		}
	>
>;
export type FeatureGateVnextPreResponseInputBlockingBehavior = S<
	FeatureGate<
		"VNEXT_PRE_RESPONSE_INPUT_BLOCKING_BEHAVIOR_FEATURE_GATE",
		{
			rolloutPercentage: 100;
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
	| FeatureGateEnhancedCurrencyOverflowStardust
	| FeatureGateEventList
	| FeatureGateEventPassBonusRanks
	| FeatureGateEventPassClaimableRewardToggle
	| FeatureGateEventPassMilestoneRewards
	| FeatureGateEventTicketDatetimeRange
	| FeatureGateFriendshipResyncOnRead
	| FeatureGateGamesiteWebviewNearbyButtons
	| FeatureGateMega2026
	| FeatureGateSeafGetMapObjectsRateLimiter
	| FeatureGateUpdateTicketsString
	| FeatureGateVnextPreResponseInputBlockingBehavior;

export type FeatureGateTemplateID = FeatureGateMasterfileEntry["templateId"];
