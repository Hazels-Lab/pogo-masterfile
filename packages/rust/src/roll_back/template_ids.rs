//! Generated from Pokémon GO masterfile — group "rollBack" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum RollBackTemplateId {
    #[serde(rename = "FRIENDS_AND_SOCIAL_LAZY_LOAD_ROLL_BACK")]
    FriendsAndSocialLazyLoadRollBack,
    #[serde(rename = "GET_FRIEND_DETAILS_PAGINATED_ROLL_BACK")]
    GetFriendDetailsPaginatedRollBack,
    #[serde(rename = "MAP_RADIUS_ENHANCE_GRAPHICS_ROLL_BACK")]
    MapRadiusEnhanceGraphicsRollBack,
    #[serde(rename = "PERIODIC_MAP_UNLOAD_ROLL_BACK")]
    PeriodicMapUnloadRollBack,
}
