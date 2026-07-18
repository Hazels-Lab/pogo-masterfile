//! Generated from Pokémon GO masterfile — group "featureGate" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum FeatureGateTemplateId {
    #[serde(rename = "ADMIN_GM_NIA_OPS_ONLY_FILTER_AMS_FEATURE_GATE")]
    AdminGmNiaOpsOnlyFilterAmsFeatureGate,
    #[serde(rename = "AMS_FEATURE_GATE")]
    AmsFeatureGate,
    #[serde(rename = "AMS_FRONTEND_FEATURE_GATE")]
    AmsFrontendFeatureGate,
    #[serde(rename = "DAY_NIGHT_POI_FEATURE_GATE")]
    DayNightPoiFeatureGate,
    #[serde(rename = "ENABLE_PVP_CHALLENGE_SPANNER_FEATURE_GATE")]
    EnablePvpChallengeSpannerFeatureGate,
    #[serde(rename = "ENHANCED_CURRENCY_OVERFLOW_STARDUST_FEATURE_GATE")]
    EnhancedCurrencyOverflowStardustFeatureGate,
    #[serde(rename = "EVENT_LIST_FEATURE_GATE")]
    EventListFeatureGate,
    #[serde(rename = "EVENT_PASS_BONUS_RANKS_FEATURE_GATE")]
    EventPassBonusRanksFeatureGate,
    #[serde(rename = "EVENT_PASS_CLAIMABLE_REWARD_TOGGLE_FEATURE_GATE")]
    EventPassClaimableRewardToggleFeatureGate,
    #[serde(rename = "EVENT_PASS_MILESTONE_REWARDS_FEATURE_GATE")]
    EventPassMilestoneRewardsFeatureGate,
    #[serde(rename = "EVENT_TICKET_DATETIME_RANGE_FEATURE_GATE")]
    EventTicketDatetimeRangeFeatureGate,
    #[serde(rename = "FRIENDSHIP_RESYNC_ON_READ_FEATURE_GATE")]
    FriendshipResyncOnReadFeatureGate,
    #[serde(rename = "GAMESITE_WEBVIEW_NEARBY_BUTTONS_FEATURE_GATE")]
    GamesiteWebviewNearbyButtonsFeatureGate,
    #[serde(rename = "HIDE_CAMPFIRE_MAP_BUTTONS_FEATURE_GATE")]
    HideCampfireMapButtonsFeatureGate,
    #[serde(rename = "MEGA_2026_FEATURE_GATE")]
    Mega2026FeatureGate,
    #[serde(rename = "SEAF_GET_MAP_OBJECTS_RATE_LIMITER_FEATURE_GATE")]
    SeafGetMapObjectsRateLimiterFeatureGate,
    #[serde(rename = "UPDATE_TICKETS_STRING_FEATURE_GATE")]
    UpdateTicketsStringFeatureGate,
    #[serde(rename = "VNEXT_PRE_RESPONSE_INPUT_BLOCKING_BEHAVIOR_FEATURE_GATE")]
    VnextPreResponseInputBlockingBehaviorFeatureGate,
}
