//! Generated from Pokémon GO masterfile — group "buddyLevelSettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash,
    Serialize, Deserialize,
    AllVariants, AsStr, FromStrEnum,
)]
pub enum BuddyLevelSettingsTemplateId {
    #[serde(rename = "BUDDY_LEVEL_0")]
    BuddyLevel0,
    #[serde(rename = "BUDDY_LEVEL_1")]
    BuddyLevel1,
    #[serde(rename = "BUDDY_LEVEL_2")]
    BuddyLevel2,
    #[serde(rename = "BUDDY_LEVEL_3")]
    BuddyLevel3,
    #[serde(rename = "BUDDY_LEVEL_4")]
    BuddyLevel4,
}
