//! Generated from Pokémon GO masterfile — singletons templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum SingletonsTemplateId {
    #[serde(rename = "ACCESSIBILITY_CLIENT_SETTINGS")]
    AccessibilityClientSettings,
    #[serde(rename = "ADDITIVE_SCENE_SETTINGS")]
    AdditiveSceneSettings,
    #[serde(rename = "ADDRESS_BOOK_IMPORT_SETTINGS")]
    AddressBookImportSettings,
    #[serde(rename = "ADDRESSABLE_POKEMON_SETTINGS")]
    AddressablePokemonSettings,
    #[serde(rename = "ADVANCED_SETTINGS")]
    AdvancedSettings,
    #[serde(rename = "AR_PHOTO_FEATURE_FLAGS")]
    ArPhotoFeatureFlags,
    #[serde(rename = "AR_TELEMETRY_SETTINGS")]
    ArTelemetrySettings,
    #[serde(rename = "ASSET_REFRESH_PROTO")]
    AssetRefreshProto,
    #[serde(rename = "AVATAR_FEATURE_FLAGS")]
    AvatarFeatureFlags,
    #[serde(rename = "avatar_store_footer_flags")]
    AvatarStoreFooterFlags,
    #[serde(rename = "avatar_store_subcategory_filtering_flags")]
    AvatarStoreSubcategoryFilteringFlags,
    #[serde(rename = "BACKGROUND_MODE_SETTINGS")]
    BackgroundModeSettings,
    #[serde(rename = "BATTLE_HUB_BADGE_SETTINGS")]
    BattleHubBadgeSettings,
    #[serde(rename = "BATTLE_HUB_ORDER_SETTINGS")]
    BattleHubOrderSettings,
    #[serde(rename = "BATTLE_PARTY_SETTINGS")]
    BattlePartySettings,
    #[serde(rename = "BATTLE_SETTINGS")]
    BattleSettings,
    #[serde(rename = "BATTLE_VISUAL_SETTINGS")]
    BattleVisualSettings,
    #[serde(rename = "BELUGA_POKEMON_WHITELIST")]
    BelugaPokemonWhitelist,
    #[serde(rename = "BEST_FRIENDS_PLUS_SETTINGS")]
    BestFriendsPlusSettings,
    #[serde(rename = "BREAD_BATTLE_CLIENT_SETTINGS")]
    BreadBattleClientSettings,
    #[serde(rename = "BREAD_FEATURE_FLAGS")]
    BreadFeatureFlags,
    #[serde(rename = "BREAD_LOBBY_COUNTER_SETTINGS")]
    BreadLobbyCounterSettings,
    #[serde(rename = "BREAD_LOBBY_UPDATE_SETTINGS")]
    BreadLobbyUpdateSettings,
    #[serde(rename = "BREAD_MOVE_MAPPING_SETTINGS")]
    BreadMoveMappingSettings,
    #[serde(rename = "BREAD_POKEMON_SCALING_SETTINGS")]
    BreadPokemonScalingSettings,
    #[serde(rename = "BREAD_SHARED_SETTINGS")]
    BreadSharedSettings,
    #[serde(rename = "BUDDY_ENCOUNTER_CAMEO_SETTINGS")]
    BuddyEncounterCameoSettings,
    #[serde(rename = "BUDDY_HUNGER_SETTINGS")]
    BuddyHungerSettings,
    #[serde(rename = "BUDDY_INTERACTION_SETTINGS")]
    BuddyInteractionSettings,
    #[serde(rename = "BUDDY_SWAP_SETTINGS")]
    BuddySwapSettings,
    #[serde(rename = "BUDDY_WALK_SETTINGS")]
    BuddyWalkSettings,
    #[serde(rename = "BULK_HEALING_SETTINGS")]
    BulkHealingSettings,
    #[serde(rename = "BUTTERFLY_COLLECTOR_SETTINGS")]
    ButterflyCollectorSettings,
    #[serde(rename = "CAMPFIRE_SETTINGS")]
    CampfireSettings,
    #[serde(rename = "CATCH_RADIUS_MULTIPLIER_SETTINGS")]
    CatchRadiusMultiplierSettings,
    #[serde(rename = "COMBAT_COMPETITIVE_SEASON_SETTINGS")]
    CombatCompetitiveSeasonSettings,
    #[serde(rename = "COMBAT_LEAGUE_SETTINGS")]
    CombatLeagueSettings,
    #[serde(rename = "COMBAT_SETTINGS")]
    CombatSettings,
    #[serde(rename = "COMBAT_STAT_STAGE_SETTINGS")]
    CombatStatStageSettings,
    #[serde(rename = "CONTEST_SETTINGS")]
    ContestSettings,
    #[serde(rename = "CONVERSATION_SETTINGS")]
    ConversationSettings,
    #[serde(rename = "CROSS_GAME_SOCIAL_SETTING")]
    CrossGameSocialSetting,
    #[serde(rename = "DAILY_ADVENTURE_INCENSE_SETTINGS")]
    DailyAdventureIncenseSettings,
    #[serde(rename = "DEEP_LINKING_SETTINGS")]
    DeepLinkingSettings,
    #[serde(rename = "DEFAULT_BATTLE_INPUT_BUFFER_SETTINGS")]
    DefaultBattleInputBufferSettings,
    #[serde(rename = "EGG_HATCH_IMPROVEMENTS_SETTINGS")]
    EggHatchImprovementsSettings,
    #[serde(rename = "ENCOUNTER_SETTINGS")]
    EncounterSettings,
    #[serde(rename = "ERROR_REPORTING_SETTINGS_PRE_LOGIN")]
    ErrorReportingSettingsPreLogin,
    #[serde(rename = "EVENT_PLANNER_POPULAR_RAID_RSVP_SETTINGS")]
    EventPlannerPopularRaidRsvpSettings,
    #[serde(rename = "EVENT_PLANNER_SETTINGS")]
    EventPlannerSettings,
    #[serde(rename = "EXTERNAL_ADDRESSABLE_ASSETS_SETTINGS")]
    ExternalAddressableAssetsSettings,
    #[serde(rename = "FEATURE_UNLOCK_LEVEL_SETTINGS")]
    FeatureUnlockLevelSettings,
    #[serde(rename = "GEOTARGETED_QUEST_SETTINGS")]
    GeotargetedQuestSettings,
    #[serde(rename = "GIFTING_SETTINGS")]
    GiftingSettings,
    #[serde(rename = "GUI_SEARCH_SETTINGS")]
    GuiSearchSettings,
    #[serde(rename = "GYM_BADGE_SETTINGS")]
    GymBadgeSettings,
    #[serde(rename = "HAPTICS_SETTINGS")]
    HapticsSettings,
    #[serde(rename = "IAP_SETTINGS")]
    IapSettings,
    #[serde(rename = "IBFC_LIGHTWEIGHT_SETTINGS")]
    IbfcLightweightSettings,
    #[serde(rename = "impression_tracking_settings")]
    ImpressionTrackingSettings,
    #[serde(rename = "INCIDENT_PRIORITY_SETTINGS")]
    IncidentPrioritySettings,
    #[serde(rename = "INCIDENT_VISIBILITY_SETTINGS")]
    IncidentVisibilitySettings,
    #[serde(rename = "INVENTORY_SETTINGS")]
    InventorySettings,
    #[serde(rename = "IRIS_SOCIAL_SETTINGS")]
    IrisSocialSettings,
    #[serde(rename = "IRIS_SOCIAL_UX_FUNNEL_SETTINGS")]
    IrisSocialUxFunnelSettings,
    #[serde(rename = "ITEM_CURRENCY_VALUES")]
    ItemCurrencyValues,
    #[serde(rename = "ITEM_INVENTORY_UPDATE_SETTINGS")]
    ItemInventoryUpdateSettings,
    #[serde(rename = "JOIN_RAID_VIA_FRIEND_LIST_SETTINGS")]
    JoinRaidViaFriendListSettings,
    #[serde(rename = "LANGUAGE_SELECTOR_SETTINGS")]
    LanguageSelectorSettings,
    #[serde(rename = "LUCKY_POKEMON_SETTINGS")]
    LuckyPokemonSettings,
    #[serde(rename = "MAIN_MENU_CAMERA_BUTTON_SETTINGS")]
    MainMenuCameraButtonSettings,
    #[serde(rename = "MAP_DISPLAY_SETTINGS")]
    MapDisplaySettings,
    #[serde(rename = "MAP_OBJECTS_INTERACTION_RANGE_SETTINGS")]
    MapObjectsInteractionRangeSettings,
    #[serde(rename = "MEGA_EVO_SETTINGS")]
    MegaEvoSettings,
    #[serde(rename = "MONODEPTH_SETTINGS")]
    MonodepthSettings,
    #[serde(rename = "MP_SHARED_SETTINGS")]
    MpSharedSettings,
    #[serde(rename = "NATURAL_ART_DAY_NIGHT_FEATURE_SETTINGS")]
    NaturalArtDayNightFeatureSettings,
    #[serde(rename = "NEARBY_POKEMON_SETTINGS")]
    NearbyPokemonSettings,
    #[serde(rename = "NEUTRAL_AVATAR_SETTINGS")]
    NeutralAvatarSettings,
    #[serde(rename = "ONBOARDING_SETTINGS")]
    OnboardingSettings,
    #[serde(rename = "OPTIMIZATIONS_SETTINGS")]
    OptimizationsSettings,
    #[serde(rename = "PARTY_PLAY_DARK_LAUNCH_SETTINGS")]
    PartyPlayDarkLaunchSettings,
    #[serde(rename = "PARTY_PLAY_IAP_BOOSTS_SETTINGS")]
    PartyPlayIapBoostsSettings,
    #[serde(rename = "PARTY_RECOMMENDATION_SETTINGS")]
    PartyRecommendationSettings,
    #[serde(rename = "PHOTO_SETTINGS")]
    PhotoSettings,
    #[serde(rename = "PLAYER_BONUS_SYSTEM_SETTINGS")]
    PlayerBonusSystemSettings,
    #[serde(rename = "PLAYER_LEVEL_SETTINGS")]
    PlayerLevelSettings,
    #[serde(rename = "POKEBALL_THROW_PROPERTY_SETTINGS")]
    PokeballThrowPropertySettings,
    #[serde(rename = "POKECOIN_PURCHASE_DISPLAY_GMT")]
    PokecoinPurchaseDisplayGmt,
    #[serde(rename = "POKEDEX_CATEGORIES_SETTINGS")]
    PokedexCategoriesSettings,
    #[serde(rename = "POKEDEX_SIZE_STATS_SYSTEM_SETTINGS")]
    PokedexSizeStatsSystemSettings,
    #[serde(rename = "POKEDEX_V2_SETTINGS")]
    PokedexV2Settings,
    #[serde(rename = "POKEDEXV2_FEATURE_FLAGS")]
    Pokedexv2FeatureFlags,
    #[serde(rename = "POKEMON_FX_SETTINGS")]
    PokemonFxSettings,
    #[serde(rename = "POKEMON_HOME_SETTINGS")]
    PokemonHomeSettings,
    #[serde(rename = "POKEMON_TAG_SETTINGS")]
    PokemonTagSettings,
    #[serde(rename = "POPUP_CONTROL_SETTINGS")]
    PopupControlSettings,
    #[serde(rename = "POSTCARD_COLLECTION_SETTINGS")]
    PostcardCollectionSettings,
    #[serde(rename = "POWER_UP_POKESTOP_SHARED_SETTINGS")]
    PowerUpPokestopSharedSettings,
    #[serde(rename = "PRIMAL_EVO_SETTINGS")]
    PrimalEvoSettings,
    #[serde(rename = "PTC_OAUTH_SETTINGS")]
    PtcOauthSettings,
    #[serde(rename = "QUEST_DIALOGUE_INBOX_SETTINGS")]
    QuestDialogueInboxSettings,
    #[serde(rename = "QUICK_INVITE_SETTINGS_RAID")]
    QuickInviteSettingsRaid,
    #[serde(rename = "RAID_CLIENT_SETTINGS")]
    RaidClientSettings,
    #[serde(rename = "RAID_ENTRY_COST_SETTINGS")]
    RaidEntryCostSettings,
    #[serde(rename = "RAID_LOBBY_COUNTER_SETTINGS")]
    RaidLobbyCounterSettings,
    #[serde(rename = "REFERRAL_SETTINGS")]
    ReferralSettings,
    #[serde(rename = "REMOTE_RAID_LIMIT_SETTINGS")]
    RemoteRaidLimitSettings,
    #[serde(rename = "REMOTE_TRADE_SETTINGS")]
    RemoteTradeSettings,
    #[serde(rename = "ROUTE_BADGE_SETTINGS")]
    RouteBadgeSettings,
    #[serde(rename = "ROUTE_CREATION_SETTINGS")]
    RouteCreationSettings,
    #[serde(rename = "ROUTE_DISCOVERY_SETTINGS")]
    RouteDiscoverySettings,
    #[serde(rename = "ROUTE_PIN_SETTINGS")]
    RoutePinSettings,
    #[serde(rename = "ROUTE_PLAY_SETTINGS")]
    RoutePlaySettings,
    #[serde(rename = "ROUTE_STAMP_CATEGORY_DEFAULT")]
    RouteStampCategoryDefault,
    #[serde(rename = "ROUTES_NEARBY_NOTIF_SETTINGS")]
    RoutesNearbyNotifSettings,
    #[serde(rename = "ROUTES_PARTY_PLAY_INTEROP_SETTINGS")]
    RoutesPartyPlayInteropSettings,
    #[serde(rename = "SHARED_FUSION_SETTINGS")]
    SharedFusionSettings,
    #[serde(rename = "SHARED_MOVE_SETTINGS")]
    SharedMoveSettings,
    #[serde(rename = "SOFT_SFIDA_SETTINGS")]
    SoftSfidaSettings,
    #[serde(rename = "SOURDOUGH_MOVE_MAPPING_SETTINGS")]
    SourdoughMoveMappingSettings,
    #[serde(rename = "SPECIAL_EGG_SETTINGS")]
    SpecialEggSettings,
    #[serde(rename = "SPONSORED_GEOFENCE_GIFT_SETTINGS")]
    SponsoredGeofenceGiftSettings,
    #[serde(rename = "STAMP_COLLECTION_SETTINGS")]
    StampCollectionSettings,
    #[serde(rename = "STATIONED_POKEMON_POWER_BOOST_TABLE_SETTINGS")]
    StationedPokemonPowerBoostTableSettings,
    #[serde(rename = "sticker_category_settings")]
    StickerCategorySettings,
    #[serde(rename = "STYLE_SHOP_SETTINGS")]
    StyleShopSettings,
    #[serde(rename = "SURVEY_SETTINGS")]
    SurveySettings,
    #[serde(rename = "TICKET_GIFTING_SETTINGS")]
    TicketGiftingSettings,
    #[serde(rename = "TODAY_VIEW_SETTINGS_V2")]
    TodayViewSettingsV2,
    #[serde(rename = "TUTORIALS_SETTINGS")]
    TutorialsSettings,
    #[serde(rename = "username_suggestion_settings")]
    UsernameSuggestionSettings,
    #[serde(rename = "VERBOSE_LOG_COMBAT_SETTINGS")]
    VerboseLogCombatSettings,
    #[serde(rename = "VERBOSE_LOG_RAID_SETTINGS")]
    VerboseLogRaidSettings,
    #[serde(rename = "VISTA_GENERAL_SETTINGS")]
    VistaGeneralSettings,
    #[serde(rename = "VNEXT_ANIMATION_CONFIGURATION")]
    VnextAnimationConfiguration,
    #[serde(rename = "VNEXT_BATTLE_CLIENT_SETTINGS")]
    VnextBattleClientSettings,
    #[serde(rename = "VS_SEEKER_CLIENT_SETTINGS")]
    VsSeekerClientSettings,
    #[serde(rename = "VS_SEEKER_SCHEDULE_SETTINGS")]
    VsSeekerScheduleSettings,
    #[serde(rename = "WEATHER_BONUS_SETTINGS")]
    WeatherBonusSettings,
}
