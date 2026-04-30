//! Generated from Pokémon GO masterfile — group "buddyActivityCategorySettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash,
    Serialize, Deserialize,
    AllVariants, AsStr, FromStrEnum,
)]
pub enum BuddyActivityCategorySettingsTemplateId {
    #[serde(rename = "BUDDY_CATEGORY_BATTLE")]
    BuddyCategoryBattle,
    #[serde(rename = "BUDDY_CATEGORY_BONUS")]
    BuddyCategoryBonus,
    #[serde(rename = "BUDDY_CATEGORY_CARE")]
    BuddyCategoryCare,
    #[serde(rename = "BUDDY_CATEGORY_EXPLORE")]
    BuddyCategoryExplore,
    #[serde(rename = "BUDDY_CATEGORY_FEED")]
    BuddyCategoryFeed,
    #[serde(rename = "BUDDY_CATEGORY_ROUTE")]
    BuddyCategoryRoute,
    #[serde(rename = "BUDDY_CATEGORY_SNAPSHOT")]
    BuddyCategorySnapshot,
    #[serde(rename = "BUDDY_CATEGORY_WALK")]
    BuddyCategoryWalk,
}
