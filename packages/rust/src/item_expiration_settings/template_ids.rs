//! Generated from Pokémon GO masterfile — group "itemExpirationSettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash,
    Serialize, Deserialize,
    AllVariants, AsStr, FromStrEnum,
)]
pub enum ItemExpirationSettingsTemplateId {
    #[serde(rename = "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_GO_FEST_01")]
    ItemExpirationItemEventPassPointGoFest01,
    #[serde(rename = "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_GO_FEST_02")]
    ItemExpirationItemEventPassPointGoFest02,
    #[serde(rename = "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_GO_TOUR_01")]
    ItemExpirationItemEventPassPointGoTour01,
    #[serde(rename = "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_GO_TOUR_02")]
    ItemExpirationItemEventPassPointGoTour02,
    #[serde(rename = "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_GO_WILD_AREA_01")]
    ItemExpirationItemEventPassPointGoWildArea01,
    #[serde(rename = "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_01")]
    ItemExpirationItemEventPassPointLiveOps01,
    #[serde(rename = "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_02")]
    ItemExpirationItemEventPassPointLiveOps02,
    #[serde(rename = "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_03")]
    ItemExpirationItemEventPassPointLiveOps03,
    #[serde(rename = "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_04")]
    ItemExpirationItemEventPassPointLiveOps04,
    #[serde(rename = "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_05")]
    ItemExpirationItemEventPassPointLiveOps05,
    #[serde(rename = "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_06")]
    ItemExpirationItemEventPassPointLiveOps06,
    #[serde(rename = "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_07")]
    ItemExpirationItemEventPassPointLiveOps07,
    #[serde(rename = "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_08")]
    ItemExpirationItemEventPassPointLiveOps08,
    #[serde(rename = "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_MONTHLY_01")]
    ItemExpirationItemEventPassPointMonthly01,
    #[serde(rename = "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_MONTHLY_02")]
    ItemExpirationItemEventPassPointMonthly02,
    #[serde(rename = "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_MONTHLY_03")]
    ItemExpirationItemEventPassPointMonthly03,
    #[serde(rename = "ITEM_EXPIRATION_ITEM_INCUBATOR_TIMED")]
    ItemExpirationItemIncubatorTimed,
    #[serde(rename = "ITEM_EXPIRATION_ITEM_LUCKY_FRIEND_APPLICATOR")]
    ItemExpirationItemLuckyFriendApplicator,
    #[serde(rename = "ITEM_EXPIRATION_ITEM_SINGLE_STAT_INCREASE")]
    ItemExpirationItemSingleStatIncrease,
    #[serde(rename = "ITEM_EXPIRATION_ITEM_TRIPLE_STAT_INCREASE")]
    ItemExpirationItemTripleStatIncrease,
    #[serde(rename = "ITEM_EXPIRATION_ITEM_WILD_BALL")]
    ItemExpirationItemWildBall,
    #[serde(rename = "ITEM_EXPIRATION_ITEM_WILD_BALL_PREMIER")]
    ItemExpirationItemWildBallPremier,
}
