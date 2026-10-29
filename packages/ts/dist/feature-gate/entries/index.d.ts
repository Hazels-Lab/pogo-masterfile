// Generated from Pokémon GO masterfile — group "featureGate", 54 entries (variant aliases).

import type { S } from "../../_utils";
import type { FeatureGate } from "../types";

export type FeatureGateAcForegroundCatchEncounter = S<
	FeatureGate<
		"AC_FOREGROUND_CATCH_ENCOUNTER_FEATURE_GATE",
		{
			status: 1284637195;
		}
	>
>;
export type FeatureGateAcForegroundCatchMapFocus = S<
	FeatureGate<
		"AC_FOREGROUND_CATCH_MAP_FOCUS_FEATURE_GATE",
		{
			status: 471823352;
		}
	>
>;
export type FeatureGateAcForegroundCatchPoiFocus = S<
	FeatureGate<
		"AC_FOREGROUND_CATCH_POI_FOCUS_FEATURE_GATE",
		{
			status: 812739461;
		}
	>
>;
export type FeatureGateAdminGmNiaOpsOnlyFilterAms = S<
	FeatureGate<
		"ADMIN_GM_NIA_OPS_ONLY_FILTER_AMS_FEATURE_GATE",
		{
			status: 1;
		}
	>
>;
export type FeatureGateAdvSyncTwo = S<
	FeatureGate<
		"ADV_SYNC_TWO_FEATURE_GATE",
		{
			status: 952347117;
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
export type FeatureGateAvatarSubcategoryHeaderForceRebuildOptimization = S<
	FeatureGate<
		"AVATAR_SUBCATEGORY_HEADER_FORCE_REBUILD_OPTIMIZATION_FEATURE_GATE",
		{
			status: 1;
		}
	>
>;
export type FeatureGateBadgeService = S<
	FeatureGate<
		"BADGE_SERVICE_FEATURE_GATE",
		{
			status: 1439520738;
		}
	>
>;
export type FeatureGateBuddySwapPlayerSnapshot = S<
	FeatureGate<
		"BUDDY_SWAP_PLAYER_SNAPSHOT_FEATURE_GATE",
		{
			status: 1;
		}
	>
>;
export type FeatureGateCombatSuppressFastMovePredictionsOnSwap = S<
	FeatureGate<
		"COMBAT_SUPPRESS_FAST_MOVE_PREDICTIONS_ON_SWAP_FEATURE_GATE",
		{
			status: 2;
		}
	>
>;
export type FeatureGateCombatVnextInitializeBdLast = S<
	FeatureGate<
		"COMBAT_VNEXT_INITIALIZE_BD_LAST_FEATURE_GATE",
		{
			status: 1;
		}
	>
>;
export type FeatureGateCombatVnextPlayMissedFm = S<
	FeatureGate<
		"COMBAT_VNEXT_PLAY_MISSED_FM_FEATURE_GATE",
		{
			status: 1;
		}
	>
>;
export type FeatureGateCombatVnextShowMiniorIbfcToasts = S<
	FeatureGate<
		"COMBAT_VNEXT_SHOW_MINIOR_IBFC_TOASTS_FEATURE_GATE",
		{
			status: 1;
		}
	>
>;
export type FeatureGateCombineCompassAndWeather = S<
	FeatureGate<
		"COMBINE_COMPASS_AND_WEATHER_FEATURE_GATE",
		{
			status: 2059828614;
		}
	>
>;
export type FeatureGateDailyEncounterGenerationContext = S<
	FeatureGate<
		"DAILY_ENCOUNTER_GENERATION_CONTEXT_FEATURE_GATE",
		{
			status: 2;
		}
	>
>;
export type FeatureGateDeprecateVerifyEligibility = S<
	FeatureGate<
		"DEPRECATE_VERIFY_ELIGIBILITY_FEATURE_GATE",
		{
			status: 234920450;
		}
	>
>;
export type FeatureGateDisableLegacyNearbyPokemon = S<
	FeatureGate<
		"DISABLE_LEGACY_NEARBY_POKEMON_FEATURE_GATE",
		{
			status: 1;
		}
	>
>;
export type FeatureGateEnableNearbyPokemonSnapshot = S<
	FeatureGate<
		"ENABLE_NEARBY_POKEMON_SNAPSHOT_FEATURE_GATE",
		{
			status: 1;
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
export type FeatureGateEnhancedCurrencyOverflowStardust = S<
	FeatureGate<
		"ENHANCED_CURRENCY_OVERFLOW_STARDUST_FEATURE_GATE",
		{
			status: 1;
		}
	>
>;
export type FeatureGateEventPassBonusMilestoneSeparation = S<
	FeatureGate<
		"EVENT_PASS_BONUS_MILESTONE_SEPARATION_FEATURE_GATE",
		{
			status: 1;
		}
	>
>;
export type FeatureGateEventTicketDatetimeRange = S<
	FeatureGate<
		"EVENT_TICKET_DATETIME_RANGE_FEATURE_GATE",
		{
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
export type FeatureGateFortStableDataDiffing = S<
	FeatureGate<
		"FORT_STABLE_DATA_DIFFING_FEATURE_GATE",
		{
			status: 1;
		}
	>
>;
export type FeatureGateGetGmtAnalysisForPlayer = S<
	FeatureGate<
		"GET_GMT_ANALYSIS_FOR_PLAYER_FEATURE_GATE",
		{
			status: 1;
		}
	>
>;
export type FeatureGateGmoWildPokemonS2Location = S<
	FeatureGate<
		"GMO_WILD_POKEMON_S2_LOCATION_FEATURE_GATE",
		{
			status: 1;
		}
	>
>;
export type FeatureGateGmoWildPokemonS2LocationServer = S<
	FeatureGate<
		"GMO_WILD_POKEMON_S2_LOCATION_SERVER_FEATURE_GATE",
		{
			status: 1;
		}
	>
>;
export type FeatureGateGrantCheckInBadgeWithoutRewards = S<
	FeatureGate<
		"GRANT_CHECK_IN_BADGE_WITHOUT_REWARDS_FEATURE_GATE",
		{
			status: 1;
		}
	>
>;
export type FeatureGateHideUiInMiniorIbfc = S<
	FeatureGate<
		"HIDE_UI_IN_MINIOR_IBFC_FEATURE_GATE",
		{
			status: 1;
		}
	>
>;
export type FeatureGateLocationCardRoll = S<
	FeatureGate<
		"LOCATION_CARD_ROLL_FEATURE_GATE",
		{
			status: 1;
		}
	>
>;
export type FeatureGateLuckyTradeNewStrings = S<
	FeatureGate<
		"LUCKY_TRADE_NEW_STRINGS_FEATURE_GATE",
		{
			status: 1284637195;
		}
	>
>;
export type FeatureGateMeetupReminderNotifications = S<
	FeatureGate<
		"MEETUP_REMINDER_NOTIFICATIONS_FEATURE_GATE",
		{
			status: 2084830192;
		}
	>
>;
export type FeatureGateMichelinMapLureBottomRingRemoval = S<
	FeatureGate<
		"MICHELIN_MAP_LURE_BOTTOM_RING_REMOVAL_FEATURE_GATE",
		{
			status: 1;
		}
	>
>;
export type FeatureGateMichelinMapZygardeCellReward = S<
	FeatureGate<
		"MICHELIN_MAP_ZYGARDE_CELL_REWARD_FEATURE_GATE",
		{
			status: 58439049;
		}
	>
>;
export type FeatureGatePlayerEncounterRandomizationSalt = S<
	FeatureGate<
		"PLAYER_ENCOUNTER_RANDOMIZATION_SALT_FEATURE_GATE",
		{
			status: 1;
		}
	>
>;
export type FeatureGatePokemonSpawnAvoidanceRework = S<
	FeatureGate<
		"POKEMON_SPAWN_AVOIDANCE_REWORK_FEATURE_GATE",
		{
			status: 67485911;
		}
	>
>;
export type FeatureGatePrivateMaxLobbies = S<
	FeatureGate<
		"PRIVATE_MAX_LOBBIES_FEATURE_GATE",
		{
			status: 1;
			subFeatureGateList: [
				{
					name: "INVITE_BY_CODE";
					rolloutPercentage: 100;
					status: 1;
				},
				{
					name: "INVITE_FRIENDS";
					rolloutPercentage: 100;
					status: 1;
				},
			];
		}
	>
>;
export type FeatureGateRegisterDevice = S<
	FeatureGate<
		"REGISTER_DEVICE_FEATURE_GATE",
		{
			status: 1;
		}
	>
>;
export type FeatureGateRemoteTradeImprovements = S<
	FeatureGate<
		"REMOTE_TRADE_IMPROVEMENTS_FEATURE_GATE",
		{
			status: 1284637195;
		}
	>
>;
export type FeatureGateSeafGetMapObjectsRateLimiter = S<
	FeatureGate<
		"SEAF_GET_MAP_OBJECTS_RATE_LIMITER_FEATURE_GATE",
		{
			status: 1;
		}
	>
>;
export type FeatureGateTodayViewV3ClaimRerender = S<
	FeatureGate<
		"TODAY_VIEW_V3_CLAIM_RERENDER_FEATURE_GATE",
		{
			status: 1;
		}
	>
>;
export type FeatureGateTodayViewV3CollapseRedraw = S<
	FeatureGate<
		"TODAY_VIEW_V3_COLLAPSE_REDRAW_FEATURE_GATE",
		{
			status: 1;
		}
	>
>;
export type FeatureGateTodayViewV3DeferredTabLoad = S<
	FeatureGate<
		"TODAY_VIEW_V3_DEFERRED_TAB_LOAD_FEATURE_GATE",
		{
			status: 1;
			subFeatureGateList: [
				{
					name: "TODAY_VIEW_V3_VIEWPORT_LAYOUT_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
				{
					name: "TODAY_VIEW_V3_OPEN_TIMING_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
			];
		}
	>
>;
export type FeatureGateTodayViewV3IncrementalCleanup = S<
	FeatureGate<
		"TODAY_VIEW_V3_INCREMENTAL_CLEANUP_FEATURE_GATE",
		{
			status: 1;
			subFeatureGateList: [
				{
					name: "TODAY_VIEW_V3_CLEANUP_SKIP_IF_RUNNING_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
			];
		}
	>
>;
export type FeatureGateTodayViewV3LoadPresentation = S<
	FeatureGate<
		"TODAY_VIEW_V3_LOAD_PRESENTATION_FEATURE_GATE",
		{
			status: 1;
			subFeatureGateList: [
				{
					name: "TODAY_VIEW_V3_LOADING_SKELETON_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
				{
					name: "TODAY_VIEW_V3_FAST_PAGE_FADE_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
				{
					name: "TODAY_VIEW_V3_FAST_OPEN_TRANSITION_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
			];
		}
	>
>;
export type FeatureGateTodayViewV3MultiPageGoPass = S<
	FeatureGate<
		"TODAY_VIEW_V3_MULTI_PAGE_GO_PASS_FEATURE_GATE",
		{
			status: 1;
			subFeatureGateList: [
				{
					name: "TODAY_VIEW_V3_GO_PASS_NEIGHBOR_PRELOAD_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
			];
		}
	>
>;
export type FeatureGateTodayViewV3SwipeGuard = S<
	FeatureGate<
		"TODAY_VIEW_V3_SWIPE_GUARD_FEATURE_GATE",
		{
			status: 1;
			subFeatureGateList: [
				{
					name: "TODAY_VIEW_V3_SNAP_GUARD_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
				{
					name: "TODAY_VIEW_V3_DRAG_LATCH_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
			];
		}
	>
>;
export type FeatureGateTodayViewV3TabRestore = S<
	FeatureGate<
		"TODAY_VIEW_V3_TAB_RESTORE_FEATURE_GATE",
		{
			status: 1;
			subFeatureGateList: [
				{
					name: "TODAY_VIEW_V3_INNER_TAB_RESTORE_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
				{
					name: "TODAY_VIEW_V3_OUTER_TAB_RESTORE_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
				{
					name: "TODAY_VIEW_V3_INNER_TAB_SNAP_RETRY_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
			];
		}
	>
>;
export type FeatureGateTransfer = S<
	FeatureGate<
		"TRANSFER_FEATURE_GATE",
		{
			status: 899172904;
		}
	>
>;
export type FeatureGateUseHalfLevelsForCpLimiter = S<
	FeatureGate<
		"USE_HALF_LEVELS_FOR_CP_LIMITER_FEATURE_GATE",
		{
			status: 2240670;
		}
	>
>;
export type FeatureGateVnextFastAttackInputType = S<
	FeatureGate<
		"VNEXT_FAST_ATTACK_INPUT_TYPE_FEATURE_GATE",
		{
			status: 1;
			subFeatureGateList: [
				{
					name: "COMBAT";
					rolloutPercentage: 100;
					status: 2;
				},
			];
		}
	>
>;
export type FeatureGateWaitForDownscaledStatsBeforeEnterState = S<
	FeatureGate<
		"WAIT_FOR_DOWNSCALED_STATS_BEFORE_ENTER_STATE_FEATURE_GATE",
		{
			status: 1907556965;
		}
	>
>;
export type FeatureGateWayfarerSubmitLinkout = S<
	FeatureGate<
		"WAYFARER_SUBMIT_LINKOUT_FEATURE_GATE",
		{
			status: 1;
		}
	>
>;
export type FeatureGateZygardeCellRewardQuestFixFeatureGateSr = S<
	FeatureGate<
		"ZYGARDE_CELL_REWARD_QUEST_FIX_FEATURE_GATE_SR",
		{
			status: 1;
		}
	>
>;

export type FeatureGateMasterfileEntry =
	| FeatureGateAcForegroundCatchEncounter
	| FeatureGateAcForegroundCatchMapFocus
	| FeatureGateAcForegroundCatchPoiFocus
	| FeatureGateAdminGmNiaOpsOnlyFilterAms
	| FeatureGateAdvSyncTwo
	| FeatureGateAms
	| FeatureGateAmsFrontend
	| FeatureGateAvatarSubcategoryHeaderForceRebuildOptimization
	| FeatureGateBadgeService
	| FeatureGateBuddySwapPlayerSnapshot
	| FeatureGateCombatSuppressFastMovePredictionsOnSwap
	| FeatureGateCombatVnextInitializeBdLast
	| FeatureGateCombatVnextPlayMissedFm
	| FeatureGateCombatVnextShowMiniorIbfcToasts
	| FeatureGateCombineCompassAndWeather
	| FeatureGateDailyEncounterGenerationContext
	| FeatureGateDeprecateVerifyEligibility
	| FeatureGateDisableLegacyNearbyPokemon
	| FeatureGateEnableNearbyPokemonSnapshot
	| FeatureGateEnablePvpChallengeSpanner
	| FeatureGateEnhancedCurrencyOverflowStardust
	| FeatureGateEventPassBonusMilestoneSeparation
	| FeatureGateEventTicketDatetimeRange
	| FeatureGateFortStableDataDiffing
	| FeatureGateGetGmtAnalysisForPlayer
	| FeatureGateGmoWildPokemonS2Location
	| FeatureGateGmoWildPokemonS2LocationServer
	| FeatureGateGrantCheckInBadgeWithoutRewards
	| FeatureGateHideUiInMiniorIbfc
	| FeatureGateLocationCardRoll
	| FeatureGateLuckyTradeNewStrings
	| FeatureGateMeetupReminderNotifications
	| FeatureGateMichelinMapLureBottomRingRemoval
	| FeatureGateMichelinMapZygardeCellReward
	| FeatureGatePlayerEncounterRandomizationSalt
	| FeatureGatePokemonSpawnAvoidanceRework
	| FeatureGatePrivateMaxLobbies
	| FeatureGateRegisterDevice
	| FeatureGateRemoteTradeImprovements
	| FeatureGateSeafGetMapObjectsRateLimiter
	| FeatureGateTodayViewV3ClaimRerender
	| FeatureGateTodayViewV3CollapseRedraw
	| FeatureGateTodayViewV3DeferredTabLoad
	| FeatureGateTodayViewV3IncrementalCleanup
	| FeatureGateTodayViewV3LoadPresentation
	| FeatureGateTodayViewV3MultiPageGoPass
	| FeatureGateTodayViewV3SwipeGuard
	| FeatureGateTodayViewV3TabRestore
	| FeatureGateTransfer
	| FeatureGateUseHalfLevelsForCpLimiter
	| FeatureGateVnextFastAttackInputType
	| FeatureGateWaitForDownscaledStatsBeforeEnterState
	| FeatureGateWayfarerSubmitLinkout
	| FeatureGateZygardeCellRewardQuestFixFeatureGateSr;

export type FeatureGateTemplateID = FeatureGateMasterfileEntry["templateId"];
