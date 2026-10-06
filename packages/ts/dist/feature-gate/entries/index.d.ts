// Generated from Pokémon GO masterfile — group "featureGate", 35 entries (variant aliases).

import type { S } from "../../_utils";
import type { FeatureGate } from "../types";

export type FeatureGateAcForegroundCatchEncounter = S<
	FeatureGate<
		"AC_FOREGROUND_CATCH_ENCOUNTER_FEATURE_GATE",
		{
			rolloutPercentage: 100;
			status: 1284637195;
		}
	>
>;
export type FeatureGateAcForegroundCatchMapFocus = S<
	FeatureGate<
		"AC_FOREGROUND_CATCH_MAP_FOCUS_FEATURE_GATE",
		{
			rolloutPercentage: 100;
			status: 471823352;
		}
	>
>;
export type FeatureGateAcForegroundCatchPoiFocus = S<
	FeatureGate<
		"AC_FOREGROUND_CATCH_POI_FOCUS_FEATURE_GATE",
		{
			rolloutPercentage: 100;
			status: 812739461;
		}
	>
>;
export type FeatureGateAdminGmNiaOpsOnlyFilterAms = S<
	FeatureGate<
		"ADMIN_GM_NIA_OPS_ONLY_FILTER_AMS_FEATURE_GATE",
		{
			rolloutPercentage: 100;
			status: 1;
		}
	>
>;
export type FeatureGateAdvSyncTwo = S<
	FeatureGate<
		"ADV_SYNC_TWO_FEATURE_GATE",
		{
			rolloutPercentage: 100;
			status: 952347117;
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
export type FeatureGateCombatSuppressFastMovePredictionsOnSwap = S<
	FeatureGate<
		"COMBAT_SUPPRESS_FAST_MOVE_PREDICTIONS_ON_SWAP_FEATURE_GATE",
		{
			rolloutPercentage: 100;
			status: 2;
		}
	>
>;
export type FeatureGateCombatVnextInitializeBdLast = S<
	FeatureGate<
		"COMBAT_VNEXT_INITIALIZE_BD_LAST_FEATURE_GATE",
		{
			rolloutPercentage: 100;
			status: 1;
		}
	>
>;
export type FeatureGateDisableLegacyNearbyPokemon = S<
	FeatureGate<
		"DISABLE_LEGACY_NEARBY_POKEMON_FEATURE_GATE",
		{
			rolloutPercentage: 100;
			status: 1;
		}
	>
>;
export type FeatureGateEnableNearbyPokemonSnapshot = S<
	FeatureGate<
		"ENABLE_NEARBY_POKEMON_SNAPSHOT_FEATURE_GATE",
		{
			rolloutPercentage: 100;
			status: 1;
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
export type FeatureGateEventPassBonusMilestoneSeparation = S<
	FeatureGate<
		"EVENT_PASS_BONUS_MILESTONE_SEPARATION_FEATURE_GATE",
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
export type FeatureGateFortStableDataDiffing = S<
	FeatureGate<
		"FORT_STABLE_DATA_DIFFING_FEATURE_GATE",
		{
			rolloutPercentage: 100;
			status: 1;
		}
	>
>;
export type FeatureGateFriendshipResyncOnRead = S<
	FeatureGate<
		"FRIENDSHIP_RESYNC_ON_READ_FEATURE_GATE",
		{
			rolloutPercentage: 100;
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
export type FeatureGateGetGmtAnalysisForPlayer = S<
	FeatureGate<
		"GET_GMT_ANALYSIS_FOR_PLAYER_FEATURE_GATE",
		{
			rolloutPercentage: 100;
			status: 1;
		}
	>
>;
export type FeatureGateGmoWildPokemonS2Location = S<
	FeatureGate<
		"GMO_WILD_POKEMON_S2_LOCATION_FEATURE_GATE",
		{
			rolloutPercentage: 100;
			status: 1;
		}
	>
>;
export type FeatureGateGmoWildPokemonS2LocationServer = S<
	FeatureGate<
		"GMO_WILD_POKEMON_S2_LOCATION_SERVER_FEATURE_GATE",
		{
			rolloutPercentage: 100;
			status: 1;
		}
	>
>;
export type FeatureGateHideCampfireMapButtons = S<
	FeatureGate<
		"HIDE_CAMPFIRE_MAP_BUTTONS_FEATURE_GATE",
		{
			rolloutPercentage: 100;
			status: 1;
		}
	>
>;
export type FeatureGateLuckyTradeNewStrings = S<
	FeatureGate<
		"LUCKY_TRADE_NEW_STRINGS_FEATURE_GATE",
		{
			rolloutPercentage: 100;
			status: 1284637195;
		}
	>
>;
export type FeatureGateMeetupReminderNotifications = S<
	FeatureGate<
		"MEETUP_REMINDER_NOTIFICATIONS_FEATURE_GATE",
		{
			rolloutPercentage: 100;
			status: 2084830192;
		}
	>
>;
export type FeatureGateMepEggReadMigration = S<
	FeatureGate<
		"MEP_EGG_READ_MIGRATION_FEATURE_GATE",
		{
			rolloutPercentage: 100;
			status: 13;
		}
	>
>;
export type FeatureGateMepEggWriteMigration = S<
	FeatureGate<
		"MEP_EGG_WRITE_MIGRATION_FEATURE_GATE",
		{
			rolloutPercentage: 100;
			status: 12;
		}
	>
>;
export type FeatureGatePokemonSpawnAvoidanceRework = S<
	FeatureGate<
		"POKEMON_SPAWN_AVOIDANCE_REWORK_FEATURE_GATE",
		{
			rolloutPercentage: 30;
			status: 67485911;
		}
	>
>;
export type FeatureGateRegisterDevice = S<
	FeatureGate<
		"REGISTER_DEVICE_FEATURE_GATE",
		{
			rolloutPercentage: 100;
			status: 1;
		}
	>
>;
export type FeatureGateRemoteTradeImprovements = S<
	FeatureGate<
		"REMOTE_TRADE_IMPROVEMENTS_FEATURE_GATE",
		{
			rolloutPercentage: 100;
			status: 1284637195;
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
export type FeatureGateWayfarerSubmitLinkout = S<
	FeatureGate<
		"WAYFARER_SUBMIT_LINKOUT_FEATURE_GATE",
		{
			rolloutPercentage: 100;
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
	| FeatureGateCombatSuppressFastMovePredictionsOnSwap
	| FeatureGateCombatVnextInitializeBdLast
	| FeatureGateDisableLegacyNearbyPokemon
	| FeatureGateEnableNearbyPokemonSnapshot
	| FeatureGateEnablePvpChallengeSpanner
	| FeatureGateEnhancedCurrencyOverflowStardust
	| FeatureGateEventPassBonusMilestoneSeparation
	| FeatureGateEventPassBonusRanks
	| FeatureGateEventPassClaimableRewardToggle
	| FeatureGateEventPassMilestoneRewards
	| FeatureGateEventTicketDatetimeRange
	| FeatureGateFortStableDataDiffing
	| FeatureGateFriendshipResyncOnRead
	| FeatureGateGamesiteWebviewNearbyButtons
	| FeatureGateGetGmtAnalysisForPlayer
	| FeatureGateGmoWildPokemonS2Location
	| FeatureGateGmoWildPokemonS2LocationServer
	| FeatureGateHideCampfireMapButtons
	| FeatureGateLuckyTradeNewStrings
	| FeatureGateMeetupReminderNotifications
	| FeatureGateMepEggReadMigration
	| FeatureGateMepEggWriteMigration
	| FeatureGatePokemonSpawnAvoidanceRework
	| FeatureGateRegisterDevice
	| FeatureGateRemoteTradeImprovements
	| FeatureGateSeafGetMapObjectsRateLimiter
	| FeatureGateVnextPreResponseInputBlockingBehavior
	| FeatureGateWayfarerSubmitLinkout;

export type FeatureGateTemplateID = FeatureGateMasterfileEntry["templateId"];
