//! Generated from Pokémon GO masterfile — group "friendshipMilestoneSettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash,
    Serialize, Deserialize,
    AllVariants, AsStr, FromStrEnum,
)]
pub enum FriendshipMilestoneSettingsTemplateId {
    #[serde(rename = "FRIENDSHIP_LEVEL_0")]
    FriendshipLevel0,
    #[serde(rename = "FRIENDSHIP_LEVEL_1")]
    FriendshipLevel1,
    #[serde(rename = "FRIENDSHIP_LEVEL_2")]
    FriendshipLevel2,
    #[serde(rename = "FRIENDSHIP_LEVEL_3")]
    FriendshipLevel3,
    #[serde(rename = "FRIENDSHIP_LEVEL_4")]
    FriendshipLevel4,
    #[serde(rename = "FRIENDSHIP_LEVEL_5")]
    FriendshipLevel5,
}
