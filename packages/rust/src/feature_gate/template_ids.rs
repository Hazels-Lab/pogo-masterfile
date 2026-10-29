//! Generated from Pokémon GO masterfile — group "featureGate" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum FeatureGateTemplateId {
    #[serde(rename = "AC_FOREGROUND_CATCH_ENCOUNTER_FEATURE_GATE")]
    AcForegroundCatchEncounterFeatureGate,
    #[serde(rename = "AC_FOREGROUND_CATCH_MAP_FOCUS_FEATURE_GATE")]
    AcForegroundCatchMapFocusFeatureGate,
    #[serde(rename = "AC_FOREGROUND_CATCH_POI_FOCUS_FEATURE_GATE")]
    AcForegroundCatchPoiFocusFeatureGate,
    #[serde(rename = "ADMIN_GM_NIA_OPS_ONLY_FILTER_AMS_FEATURE_GATE")]
    AdminGmNiaOpsOnlyFilterAmsFeatureGate,
    #[serde(rename = "ADV_SYNC_TWO_FEATURE_GATE")]
    AdvSyncTwoFeatureGate,
    #[serde(rename = "AMS_FEATURE_GATE")]
    AmsFeatureGate,
    #[serde(rename = "AMS_FRONTEND_FEATURE_GATE")]
    AmsFrontendFeatureGate,
    #[serde(rename = "AVATAR_SUBCATEGORY_HEADER_FORCE_REBUILD_OPTIMIZATION_FEATURE_GATE")]
    AvatarSubcategoryHeaderForceRebuildOptimizationFeatureGate,
    #[serde(rename = "BADGE_SERVICE_FEATURE_GATE")]
    BadgeServiceFeatureGate,
    #[serde(rename = "BUDDY_SWAP_PLAYER_SNAPSHOT_FEATURE_GATE")]
    BuddySwapPlayerSnapshotFeatureGate,
    #[serde(rename = "COMBAT_SUPPRESS_FAST_MOVE_PREDICTIONS_ON_SWAP_FEATURE_GATE")]
    CombatSuppressFastMovePredictionsOnSwapFeatureGate,
    #[serde(rename = "COMBAT_VNEXT_INITIALIZE_BD_LAST_FEATURE_GATE")]
    CombatVnextInitializeBdLastFeatureGate,
    #[serde(rename = "COMBAT_VNEXT_PLAY_MISSED_FM_FEATURE_GATE")]
    CombatVnextPlayMissedFmFeatureGate,
    #[serde(rename = "COMBAT_VNEXT_SHOW_MINIOR_IBFC_TOASTS_FEATURE_GATE")]
    CombatVnextShowMiniorIbfcToastsFeatureGate,
    #[serde(rename = "COMBINE_COMPASS_AND_WEATHER_FEATURE_GATE")]
    CombineCompassAndWeatherFeatureGate,
    #[serde(rename = "DAILY_ENCOUNTER_GENERATION_CONTEXT_FEATURE_GATE")]
    DailyEncounterGenerationContextFeatureGate,
    #[serde(rename = "DEPRECATE_VERIFY_ELIGIBILITY_FEATURE_GATE")]
    DeprecateVerifyEligibilityFeatureGate,
    #[serde(rename = "DISABLE_LEGACY_NEARBY_POKEMON_FEATURE_GATE")]
    DisableLegacyNearbyPokemonFeatureGate,
    #[serde(rename = "ENABLE_NEARBY_POKEMON_SNAPSHOT_FEATURE_GATE")]
    EnableNearbyPokemonSnapshotFeatureGate,
    #[serde(rename = "ENABLE_PVP_CHALLENGE_SPANNER_FEATURE_GATE")]
    EnablePvpChallengeSpannerFeatureGate,
    #[serde(rename = "ENHANCED_CURRENCY_OVERFLOW_STARDUST_FEATURE_GATE")]
    EnhancedCurrencyOverflowStardustFeatureGate,
    #[serde(rename = "EVENT_PASS_BONUS_MILESTONE_SEPARATION_FEATURE_GATE")]
    EventPassBonusMilestoneSeparationFeatureGate,
    #[serde(rename = "EVENT_TICKET_DATETIME_RANGE_FEATURE_GATE")]
    EventTicketDatetimeRangeFeatureGate,
    #[serde(rename = "FORT_STABLE_DATA_DIFFING_FEATURE_GATE")]
    FortStableDataDiffingFeatureGate,
    #[serde(rename = "GET_GMT_ANALYSIS_FOR_PLAYER_FEATURE_GATE")]
    GetGmtAnalysisForPlayerFeatureGate,
    #[serde(rename = "GMO_WILD_POKEMON_S2_LOCATION_FEATURE_GATE")]
    GmoWildPokemonS2LocationFeatureGate,
    #[serde(rename = "GMO_WILD_POKEMON_S2_LOCATION_SERVER_FEATURE_GATE")]
    GmoWildPokemonS2LocationServerFeatureGate,
    #[serde(rename = "GRANT_CHECK_IN_BADGE_WITHOUT_REWARDS_FEATURE_GATE")]
    GrantCheckInBadgeWithoutRewardsFeatureGate,
    #[serde(rename = "HIDE_UI_IN_MINIOR_IBFC_FEATURE_GATE")]
    HideUiInMiniorIbfcFeatureGate,
    #[serde(rename = "LOCATION_CARD_ROLL_FEATURE_GATE")]
    LocationCardRollFeatureGate,
    #[serde(rename = "LUCKY_TRADE_NEW_STRINGS_FEATURE_GATE")]
    LuckyTradeNewStringsFeatureGate,
    #[serde(rename = "MEETUP_REMINDER_NOTIFICATIONS_FEATURE_GATE")]
    MeetupReminderNotificationsFeatureGate,
    #[serde(rename = "MICHELIN_MAP_LURE_BOTTOM_RING_REMOVAL_FEATURE_GATE")]
    MichelinMapLureBottomRingRemovalFeatureGate,
    #[serde(rename = "MICHELIN_MAP_ZYGARDE_CELL_REWARD_FEATURE_GATE")]
    MichelinMapZygardeCellRewardFeatureGate,
    #[serde(rename = "PLAYER_ENCOUNTER_RANDOMIZATION_SALT_FEATURE_GATE")]
    PlayerEncounterRandomizationSaltFeatureGate,
    #[serde(rename = "POKEMON_SPAWN_AVOIDANCE_REWORK_FEATURE_GATE")]
    PokemonSpawnAvoidanceReworkFeatureGate,
    #[serde(rename = "PRIVATE_MAX_LOBBIES_FEATURE_GATE")]
    PrivateMaxLobbiesFeatureGate,
    #[serde(rename = "REGISTER_DEVICE_FEATURE_GATE")]
    RegisterDeviceFeatureGate,
    #[serde(rename = "REMOTE_TRADE_IMPROVEMENTS_FEATURE_GATE")]
    RemoteTradeImprovementsFeatureGate,
    #[serde(rename = "SEAF_GET_MAP_OBJECTS_RATE_LIMITER_FEATURE_GATE")]
    SeafGetMapObjectsRateLimiterFeatureGate,
    #[serde(rename = "TODAY_VIEW_V3_CLAIM_RERENDER_FEATURE_GATE")]
    TodayViewV3ClaimRerenderFeatureGate,
    #[serde(rename = "TODAY_VIEW_V3_COLLAPSE_REDRAW_FEATURE_GATE")]
    TodayViewV3CollapseRedrawFeatureGate,
    #[serde(rename = "TODAY_VIEW_V3_DEFERRED_TAB_LOAD_FEATURE_GATE")]
    TodayViewV3DeferredTabLoadFeatureGate,
    #[serde(rename = "TODAY_VIEW_V3_INCREMENTAL_CLEANUP_FEATURE_GATE")]
    TodayViewV3IncrementalCleanupFeatureGate,
    #[serde(rename = "TODAY_VIEW_V3_LOAD_PRESENTATION_FEATURE_GATE")]
    TodayViewV3LoadPresentationFeatureGate,
    #[serde(rename = "TODAY_VIEW_V3_MULTI_PAGE_GO_PASS_FEATURE_GATE")]
    TodayViewV3MultiPageGoPassFeatureGate,
    #[serde(rename = "TODAY_VIEW_V3_SWIPE_GUARD_FEATURE_GATE")]
    TodayViewV3SwipeGuardFeatureGate,
    #[serde(rename = "TODAY_VIEW_V3_TAB_RESTORE_FEATURE_GATE")]
    TodayViewV3TabRestoreFeatureGate,
    #[serde(rename = "TRANSFER_FEATURE_GATE")]
    TransferFeatureGate,
    #[serde(rename = "USE_HALF_LEVELS_FOR_CP_LIMITER_FEATURE_GATE")]
    UseHalfLevelsForCpLimiterFeatureGate,
    #[serde(rename = "VNEXT_FAST_ATTACK_INPUT_TYPE_FEATURE_GATE")]
    VnextFastAttackInputTypeFeatureGate,
    #[serde(rename = "WAIT_FOR_DOWNSCALED_STATS_BEFORE_ENTER_STATE_FEATURE_GATE")]
    WaitForDownscaledStatsBeforeEnterStateFeatureGate,
    #[serde(rename = "WAYFARER_SUBMIT_LINKOUT_FEATURE_GATE")]
    WayfarerSubmitLinkoutFeatureGate,
    #[serde(rename = "ZYGARDE_CELL_REWARD_QUEST_FIX_FEATURE_GATE_SR")]
    ZygardeCellRewardQuestFixFeatureGateSr,
}
