// Generated from Pokémon GO masterfile — group "featureGate", split "sub-feature-gate-list", 15 entries.

import type { S } from "../../_utils";
import type { FeatureGate } from "../types";

export type FeatureGateAppraisal = S<
	FeatureGate<
		"APPRAISAL_FEATURE_GATE",
		{
			status: 1514798484;
			subFeatureGateList: [
				{
					name: "ADD_DETAILS_GUI_SHORTCUT";
					rolloutPercentage: 100;
					status: 72927;
				},
			];
		}
	>
>;
export type FeatureGateDetailRendererDuplicateModels = S<
	FeatureGate<
		"DETAIL_RENDERER_DUPLICATE_MODELS_FEATURE_GATE",
		{
			status: 1;
			subFeatureGateList: [
				{
					name: "DETAIL_RENDERER_DUPLICATE_MODELS_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
				{
					name: "CUTSCENE_HIDDEN_POKEMON_RESTORE_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
				{
					name: "PLAY_POKEMON_STACKED_CHARACTER_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
				{
					name: "MAP_FOLLOWER_LEFTOVER_CHARACTER_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
			];
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
export type FeatureGateLocationCardBackgrounds = S<
	FeatureGate<
		"LOCATION_CARD_BACKGROUNDS_FEATURE_GATE",
		{
			status: 1;
			subFeatureGateList: [
				{
					name: "BACKGROUNDS_OWN_PROFILE_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
				{
					name: "BACKGROUNDS_FTUE_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
				{
					name: "BACKGROUNDS_FRIEND_PROFILE_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
				{
					name: "BACKGROUNDS_PDP_RENDERER_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
				{
					name: "BACKGROUNDS_NAMEPLATE_GRADIENT_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
				{
					name: "BACKGROUNDS_NAV_BAR_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
				{
					name: "BACKGROUNDS_GLOBE_ICON_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 2;
				},
				{
					name: "BACKGROUNDS_DISCLAIMER_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
				{
					name: "BACKGROUNDS_SETTINGS_TOGGLE_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
				{
					name: "BACKGROUNDS_PLAYER_SETTINGS_PERSISTENCE_SERVER_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
			];
		}
	>
>;
export type FeatureGateLocationCardBackgroundsRenderer = S<
	FeatureGate<
		"LOCATION_CARD_BACKGROUNDS_RENDERER_FEATURE_GATE",
		{
			status: 1;
			subFeatureGateList: [
				{
					name: "BACKGROUNDS_RENDERER_FULL_OWN_PROFILE_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
				{
					name: "BACKGROUNDS_RENDERER_FULL_FRIEND_PROFILE_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
				{
					name: "BACKGROUNDS_RENDERER_FNA_OWN_PROFILE_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
				{
					name: "BACKGROUNDS_RENDERER_FNA_FRIEND_PROFILE_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
				{
					name: "BACKGROUNDS_RENDERER_LOCATION_CARD_OWN_PROFILE_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
				{
					name: "BACKGROUNDS_RENDERER_LOCATION_CARD_FRIEND_PROFILE_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
				{
					name: "BACKGROUNDS_RENDERER_SPECIAL_BACKGROUND_OWN_PROFILE_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
				{
					name: "BACKGROUNDS_RENDERER_SPECIAL_BACKGROUND_FRIEND_PROFILE_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
			];
		}
	>
>;
export type FeatureGatePoolTrimmer = S<
	FeatureGate<
		"POOL_TRIMMER_FEATURE_GATE",
		{
			status: 1;
			subFeatureGateList: [
				{
					name: "DESTROY_UI_WIDGET_GAMEOBJECTS_SUB_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
			];
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
export type FeatureGateTutorialCollisionFixes = S<
	FeatureGate<
		"TUTORIAL_COLLISION_FIXES_FEATURE_GATE",
		{
			status: 1;
			subFeatureGateList: [
				{
					name: "FIELD_EFFECT_FTUE_DEFERRAL_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
				{
					name: "OVERLAY_CUTOUT_ON_SCREEN_SUB_FEATURE_GATE";
					rolloutPercentage: 100;
					status: 1;
				},
			];
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

export type FeatureGateSubFeatureGateListMasterfileEntry =
	| FeatureGateAppraisal
	| FeatureGateDetailRendererDuplicateModels
	| FeatureGateEventTicketDatetimeRange
	| FeatureGateLocationCardBackgrounds
	| FeatureGateLocationCardBackgroundsRenderer
	| FeatureGatePoolTrimmer
	| FeatureGatePrivateMaxLobbies
	| FeatureGateTodayViewV3DeferredTabLoad
	| FeatureGateTodayViewV3IncrementalCleanup
	| FeatureGateTodayViewV3LoadPresentation
	| FeatureGateTodayViewV3MultiPageGoPass
	| FeatureGateTodayViewV3SwipeGuard
	| FeatureGateTodayViewV3TabRestore
	| FeatureGateTutorialCollisionFixes
	| FeatureGateVnextFastAttackInputType;
