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
    #[serde(rename = "ADVENTURE_EFFECTS_IN_LOBBY_FEATURE_GATE")]
    AdventureEffectsInLobbyFeatureGate,
    #[serde(rename = "AMS_FEATURE_GATE")]
    AmsFeatureGate,
    #[serde(rename = "AMS_FRONTEND_FEATURE_GATE")]
    AmsFrontendFeatureGate,
    #[serde(rename = "APPRAISAL_FEATURE_GATE")]
    AppraisalFeatureGate,
    #[serde(rename = "AVATAR_SUBCATEGORY_HEADER_FORCE_REBUILD_OPTIMIZATION_FEATURE_GATE")]
    AvatarSubcategoryHeaderForceRebuildOptimizationFeatureGate,
    #[serde(rename = "BADGE_SERVICE_FEATURE_GATE")]
    BadgeServiceFeatureGate,
    #[serde(rename = "BREAD_BATTLE_PREP_UI_FORCE_REBUILD_OPTIMIZATION_FEATURE_GATE")]
    BreadBattlePrepUiForceRebuildOptimizationFeatureGate,
    #[serde(rename = "BUDDY_SWAP_PLAYER_SNAPSHOT_FEATURE_GATE")]
    BuddySwapPlayerSnapshotFeatureGate,
    #[serde(rename = "COMBAT_ACCEPTED_TURN_SWAP_SUPPRESSION_FEATURE_GATE_CR")]
    CombatAcceptedTurnSwapSuppressionFeatureGateCr,
    #[serde(rename = "COMBAT_SUPPRESS_FAST_MOVE_PREDICTIONS_ON_SWAP_FEATURE_GATE")]
    CombatSuppressFastMovePredictionsOnSwapFeatureGate,
    #[serde(rename = "COMBAT_VNEXT_ALLOW_LATE_SIMULTANEOUS_IBFC_FEATURE_GATE_CR")]
    CombatVnextAllowLateSimultaneousIbfcFeatureGateCr,
    #[serde(rename = "COMBAT_VNEXT_INITIALIZE_BD_LAST_FEATURE_GATE")]
    CombatVnextInitializeBdLastFeatureGate,
    #[serde(rename = "COMBAT_VNEXT_PLAY_MISSED_FM_FEATURE_GATE")]
    CombatVnextPlayMissedFmFeatureGate,
    #[serde(rename = "COMBAT_VNEXT_PRESERVE_ADDRESSABLE_DIRT_MATERIAL_BUG_FIX_FEATURE_GATE")]
    CombatVnextPreserveAddressableDirtMaterialBugFixFeatureGate,
    #[serde(rename = "COMBAT_VNEXT_SHOW_MINIOR_IBFC_TOASTS_FEATURE_GATE")]
    CombatVnextShowMiniorIbfcToastsFeatureGate,
    #[serde(rename = "COMBAT_VNEXT_SUPPRESS_FM_AT_CM_SCREEN_POINT_FIX_FEATURE_GATE_CR")]
    CombatVnextSuppressFmAtCmScreenPointFixFeatureGateCr,
    #[serde(rename = "COMBAT_VNEXT_TRIGGER_SIMULTANEOUS_IBFC_ON_LATE_CINEMATIC_FEATURE_GATE_CR")]
    CombatVnextTriggerSimultaneousIbfcOnLateCinematicFeatureGateCr,
    #[serde(rename = "COMBAT_VNEXT_USE_SYNCHRONIZED_FORM_FOR_CAMERA_SCALE_FEATURE_GATE")]
    CombatVnextUseSynchronizedFormForCameraScaleFeatureGate,
    #[serde(rename = "COMBINE_COMPASS_AND_WEATHER_FEATURE_GATE")]
    CombineCompassAndWeatherFeatureGate,
    #[serde(rename = "COMPASS_SORTING_ORDER_FIX_FEATURE_GATE")]
    CompassSortingOrderFixFeatureGate,
    #[serde(rename = "DAILY_ENCOUNTER_GENERATION_CONTEXT_FEATURE_GATE")]
    DailyEncounterGenerationContextFeatureGate,
    #[serde(rename = "DEPRECATE_VERIFY_ELIGIBILITY_FEATURE_GATE")]
    DeprecateVerifyEligibilityFeatureGate,
    #[serde(rename = "DETAIL_RENDERER_DUPLICATE_MODELS_FEATURE_GATE")]
    DetailRendererDuplicateModelsFeatureGate,
    #[serde(rename = "DISABLE_LEGACY_NEARBY_POKEMON_FEATURE_GATE")]
    DisableLegacyNearbyPokemonFeatureGate,
    #[serde(rename = "DISMISS_POKEDEX_ON_ADVENTURE_EFFECT_FEATURE_GATE")]
    DismissPokedexOnAdventureEffectFeatureGate,
    #[serde(rename = "DMAX_GACHA_SYSTEM_REMOVAL_FEATURE_GATE")]
    DmaxGachaSystemRemovalFeatureGate,
    #[serde(rename = "DYNAMIC_REWARD_ARROW_PADDING_FEATURE_GATE_CR")]
    DynamicRewardArrowPaddingFeatureGateCr,
    #[serde(rename = "ENABLE_NEARBY_POKEMON_SNAPSHOT_FEATURE_GATE")]
    EnableNearbyPokemonSnapshotFeatureGate,
    #[serde(rename = "ENABLE_PVP_CHALLENGE_SPANNER_FEATURE_GATE")]
    EnablePvpChallengeSpannerFeatureGate,
    #[serde(rename = "ENHANCED_CURRENCY_OVERFLOW_STARDUST_FEATURE_GATE")]
    EnhancedCurrencyOverflowStardustFeatureGate,
    #[serde(rename = "EVENT_PASS_BONUS_MILESTONE_SEPARATION_FEATURE_GATE")]
    EventPassBonusMilestoneSeparationFeatureGate,
    #[serde(rename = "EVENT_PASS_BONUS_QUEST_NO_COLLAPSE_FEATURE_GATE_CR")]
    EventPassBonusQuestNoCollapseFeatureGateCr,
    #[serde(rename = "EVENT_PASS_BUSH_FEATURE_GATE_CR")]
    EventPassBushFeatureGateCr,
    #[serde(rename = "EVENT_PASS_ENCOUNTER_LOAD_TRANSITION_FEATURE_GATE_CR")]
    EventPassEncounterLoadTransitionFeatureGateCr,
    #[serde(rename = "EVENT_PASS_MISSING_TIER_PROTECTION_FEATURE_GATE_SR")]
    EventPassMissingTierProtectionFeatureGateSr,
    #[serde(rename = "EVENT_PASS_WIDGET_FORCE_REBUILD_OPTIMIZATION_FEATURE_GATE")]
    EventPassWidgetForceRebuildOptimizationFeatureGate,
    #[serde(rename = "EVENT_TICKET_DATETIME_RANGE_FEATURE_GATE")]
    EventTicketDatetimeRangeFeatureGate,
    #[serde(rename = "EXPIRE_MINUTE_STRING_FEATURE_GATE_CR")]
    ExpireMinuteStringFeatureGateCr,
    #[serde(rename = "FORT_SEARCH_TIME_TRAVEL_FEATURE_GATE_SR")]
    FortSearchTimeTravelFeatureGateSr,
    #[serde(rename = "FORT_STABLE_DATA_DIFFING_FEATURE_GATE")]
    FortStableDataDiffingFeatureGate,
    #[serde(rename = "FRIEND_NICKNAME_SYMBOL_FILTER_FEATURE_GATE")]
    FriendNicknameSymbolFilterFeatureGate,
    #[serde(rename = "FRIENDSHIP_LEVEL_PAGE_REFRESH_FEATURE_GATE")]
    FriendshipLevelPageRefreshFeatureGate,
    #[serde(rename = "GET_GMT_ANALYSIS_FOR_PLAYER_FEATURE_GATE")]
    GetGmtAnalysisForPlayerFeatureGate,
    #[serde(rename = "GLOBAL_CHALLENGE_BONUSES_MODAL_SHOWN_FEATURE_GATE_CR")]
    GlobalChallengeBonusesModalShownFeatureGateCr,
    #[serde(rename = "GMO_WILD_POKEMON_S2_LOCATION_FEATURE_GATE")]
    GmoWildPokemonS2LocationFeatureGate,
    #[serde(rename = "GMO_WILD_POKEMON_S2_LOCATION_SERVER_FEATURE_GATE")]
    GmoWildPokemonS2LocationServerFeatureGate,
    #[serde(rename = "GRANT_CHECK_IN_BADGE_WITHOUT_REWARDS_FEATURE_GATE")]
    GrantCheckInBadgeWithoutRewardsFeatureGate,
    #[serde(rename = "GYM_SPRITE_FIX_FEATURE_GATE")]
    GymSpriteFixFeatureGate,
    #[serde(rename = "HIDE_UI_IN_MINIOR_IBFC_FEATURE_GATE")]
    HideUiInMiniorIbfcFeatureGate,
    #[serde(rename = "IMMERSIVE_CATCH_SUMMARY_FEATURE_GATE")]
    ImmersiveCatchSummaryFeatureGate,
    #[serde(rename = "IMPERSONATION_STAT_SYNC_FEATURE_GATE_SR")]
    ImpersonationStatSyncFeatureGateSr,
    #[serde(rename = "ITEM_USE_SORT_CONTEXT_FEATURE_GATE")]
    ItemUseSortContextFeatureGate,
    #[serde(rename = "LOCATION_CARD_BACKGROUNDS_FEATURE_GATE")]
    LocationCardBackgroundsFeatureGate,
    #[serde(rename = "LOCATION_CARD_BACKGROUNDS_RENDERER_FEATURE_GATE")]
    LocationCardBackgroundsRendererFeatureGate,
    #[serde(rename = "LOCATION_CARD_ROLL_FEATURE_GATE")]
    LocationCardRollFeatureGate,
    #[serde(rename = "LUCKY_TRADE_NEW_STRINGS_FEATURE_GATE")]
    LuckyTradeNewStringsFeatureGate,
    #[serde(rename = "MAP_BACKGROUND_THREAD_PROCESSING_FEATURE_GATE")]
    MapBackgroundThreadProcessingFeatureGate,
    #[serde(rename = "MAP_EFFECT_PRIORITY_FEATURE_GATE_CR")]
    MapEffectPriorityFeatureGateCr,
    #[serde(rename = "MAP_POKEMON_RINGS_FEATURE_GATE")]
    MapPokemonRingsFeatureGate,
    #[serde(rename = "MEETUP_REMINDER_NOTIFICATIONS_FEATURE_GATE")]
    MeetupReminderNotificationsFeatureGate,
    #[serde(rename = "MEP_BATTLE_DURABILITY_TRACKING_RECORD_FEATURE_GATE")]
    MepBattleDurabilityTrackingRecordFeatureGate,
    #[serde(rename = "MICHELIN_MAP_LURE_BOTTOM_RING_REMOVAL_FEATURE_GATE")]
    MichelinMapLureBottomRingRemovalFeatureGate,
    #[serde(rename = "MICHELIN_MAP_POKEMON_ATTRACTANT_FOG_FEATURE_GATE")]
    MichelinMapPokemonAttractantFogFeatureGate,
    #[serde(rename = "MICHELIN_MAP_POKESTOP_SPUN_CONTRAST_UP_FEATURE_GATE")]
    MichelinMapPokestopSpunContrastUpFeatureGate,
    #[serde(rename = "MICHELIN_MAP_ZYGARDE_CELL_REWARD_FEATURE_GATE")]
    MichelinMapZygardeCellRewardFeatureGate,
    #[serde(rename = "NEARBY_MENU_RSVP_ROUTE_FIX_FEATURE_GATE_CR")]
    NearbyMenuRsvpRouteFixFeatureGateCr,
    #[serde(rename = "NEUTRAL_AVATAR_SHOP_ITEM_FORCE_REBUILD_OPTIMIZATION_FEATURE_GATE")]
    NeutralAvatarShopItemForceRebuildOptimizationFeatureGate,
    #[serde(rename = "NPC_GIFT_AUTO_CLAIM_FEATURE_GATE")]
    NpcGiftAutoClaimFeatureGate,
    #[serde(rename = "PAIRED_DEVICE_HELP_FEATURE_GATE")]
    PairedDeviceHelpFeatureGate,
    #[serde(rename = "PHOTOBOMB_TIME_PORTAL_FUTURE_FEATURE_GATE_SR")]
    PhotobombTimePortalFutureFeatureGateSr,
    #[serde(rename = "PLAYER_ENCOUNTER_RANDOMIZATION_SALT_FEATURE_GATE")]
    PlayerEncounterRandomizationSaltFeatureGate,
    #[serde(rename = "POKEDEX_DEFENDER_GYM_FIX_FEATURE_GATE")]
    PokedexDefenderGymFixFeatureGate,
    #[serde(rename = "POKEDEX_SCROLLING_FIX_FEATURE_GATE")]
    PokedexScrollingFixFeatureGate,
    #[serde(rename = "POKEMON_SPAWN_AVOIDANCE_REWORK_FEATURE_GATE")]
    PokemonSpawnAvoidanceReworkFeatureGate,
    #[serde(rename = "POOL_TRIMMER_FEATURE_GATE")]
    PoolTrimmerFeatureGate,
    #[serde(rename = "PRIVATE_MAX_LOBBIES_FEATURE_GATE")]
    PrivateMaxLobbiesFeatureGate,
    #[serde(rename = "PROFILE_FTUE_REWARDS_BANNER_RECHECK_FEATURE_GATE")]
    ProfileFtueRewardsBannerRecheckFeatureGate,
    #[serde(rename = "QUEST_PROGRESS_AGGREGATION_FEATURE_GATE_SR")]
    QuestProgressAggregationFeatureGateSr,
    #[serde(rename = "QUEST_TOTAL_DAYS_CATCH_RESULT_FIX_FEATURE_GATE")]
    QuestTotalDaysCatchResultFixFeatureGate,
    #[serde(rename = "RAID_RSVP_REMOTE_JOIN_FIX_FEATURE_GATE_CR")]
    RaidRsvpRemoteJoinFixFeatureGateCr,
    #[serde(rename = "REGISTER_DEVICE_FEATURE_GATE")]
    RegisterDeviceFeatureGate,
    #[serde(rename = "REMOTE_TRADE_IMPROVEMENTS_FEATURE_GATE")]
    RemoteTradeImprovementsFeatureGate,
    #[serde(rename = "REMOTE_TRADE_SPEED_GIFT_FIX_FEATURE_GATE")]
    RemoteTradeSpeedGiftFixFeatureGate,
    #[serde(rename = "RUN_CELL_UPDATES_BACKGROUND_THREAD_PROCESSING_FEATURE_GATE")]
    RunCellUpdatesBackgroundThreadProcessingFeatureGate,
    #[serde(rename = "SANITIZE_ADVENTURE_EFFECT_SERVER_ONLY_FIELDS_FEATURE_GATE")]
    SanitizeAdventureEffectServerOnlyFieldsFeatureGate,
    #[serde(rename = "SAVE_PLAYER_SNAPSHOT_IMMEDIATE_REASON_FEATURE_GATE")]
    SavePlayerSnapshotImmediateReasonFeatureGate,
    #[serde(rename = "SEAF_GET_MAP_OBJECTS_RATE_LIMITER_FEATURE_GATE")]
    SeafGetMapObjectsRateLimiterFeatureGate,
    #[serde(rename = "SOFT_SFIDA_WIDGET_BACKGROUND_COLOR_FEATURE_GATE")]
    SoftSfidaWidgetBackgroundColorFeatureGate,
    #[serde(rename = "STAMP_RALLY_MINI_GAME_ANIMATION_LOCK_FIX_FEATURE_GATE")]
    StampRallyMiniGameAnimationLockFixFeatureGate,
    #[serde(rename = "STAMP_RALLY_TIME_TRAVEL_CLIENT_FEATURE_GATE")]
    StampRallyTimeTravelClientFeatureGate,
    #[serde(rename = "STAMP_RALLY_TIME_TRAVEL_SERVER_FEATURE_GATE")]
    StampRallyTimeTravelServerFeatureGate,
    #[serde(rename = "TIME_TRAVEL_POWERSPOT_SCHEDULING_FEATURE_GATE_SR")]
    TimeTravelPowerspotSchedulingFeatureGateSr,
    #[serde(rename = "TODAY_VIEW_INNER_TAB_EQUAL_WIDTH_FEATURE_GATE_CR")]
    TodayViewInnerTabEqualWidthFeatureGateCr,
    #[serde(rename = "TODAY_VIEW_INNER_TABS_HEADER_FEATURE_GATE")]
    TodayViewInnerTabsHeaderFeatureGate,
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
    #[serde(rename = "TUTORIAL_COLLISION_FIXES_FEATURE_GATE")]
    TutorialCollisionFixesFeatureGate,
    #[serde(rename = "UNCOSTUMED_OVERRIDE_FEATURE_GATE_CR")]
    UncostumedOverrideFeatureGateCr,
    #[serde(rename = "USE_ACCURATE_MODEL_SCALE_FEATURE_GATE_CR")]
    UseAccurateModelScaleFeatureGateCr,
    #[serde(rename = "USE_HALF_LEVELS_FOR_CP_LIMITER_FEATURE_GATE")]
    UseHalfLevelsForCpLimiterFeatureGate,
    #[serde(rename = "USE_REWORKED_PVP_NAMEPLATE_FEATURE_GATE_CR")]
    UseReworkedPvpNameplateFeatureGateCr,
    #[serde(rename = "VNEXT_CAMERA_CONTROLLER_CACHE_FORM_FEATURE_GATE_CR")]
    VnextCameraControllerCacheFormFeatureGateCr,
    #[serde(rename = "VNEXT_COMPLETE_THE_BUFFERED_PROMISE_FEATURE_GATE_CR")]
    VnextCompleteTheBufferedPromiseFeatureGateCr,
    #[serde(rename = "VNEXT_FAST_ATTACK_INPUT_TYPE_FEATURE_GATE")]
    VnextFastAttackInputTypeFeatureGate,
    #[serde(rename = "VNEXT_FIX_HANGING_ERROR_PROMISES_FEATURE_GATE")]
    VnextFixHangingErrorPromisesFeatureGate,
    #[serde(rename = "VNEXT_RAPID_FIRE_FAST_ATTACK_EFFECTS_FEATURE_GATE_CR")]
    VnextRapidFireFastAttackEffectsFeatureGateCr,
    #[serde(rename = "WAIT_FOR_DOWNSCALED_STATS_BEFORE_ENTER_STATE_FEATURE_GATE")]
    WaitForDownscaledStatsBeforeEnterStateFeatureGate,
    #[serde(rename = "WAYFARER_SUBMIT_LINKOUT_FEATURE_GATE")]
    WayfarerSubmitLinkoutFeatureGate,
    #[serde(rename = "ZYGARDE_CELL_REWARD_QUEST_FIX_FEATURE_GATE_SR")]
    ZygardeCellRewardQuestFixFeatureGateSr,
}
