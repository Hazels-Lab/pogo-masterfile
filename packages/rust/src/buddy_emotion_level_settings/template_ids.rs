//! Generated from Pokémon GO masterfile — group "buddyEmotionLevelSettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash,
    Serialize, Deserialize,
    AllVariants, AsStr, FromStrEnum,
)]
pub enum BuddyEmotionLevelSettingsTemplateId {
    #[serde(rename = "BUDDY_EMOTION_LEVEL_0")]
    BuddyEmotionLevel0,
    #[serde(rename = "BUDDY_EMOTION_LEVEL_1")]
    BuddyEmotionLevel1,
    #[serde(rename = "BUDDY_EMOTION_LEVEL_2")]
    BuddyEmotionLevel2,
    #[serde(rename = "BUDDY_EMOTION_LEVEL_3")]
    BuddyEmotionLevel3,
    #[serde(rename = "BUDDY_EMOTION_LEVEL_4")]
    BuddyEmotionLevel4,
    #[serde(rename = "BUDDY_EMOTION_LEVEL_5")]
    BuddyEmotionLevel5,
    #[serde(rename = "BUDDY_EMOTION_LEVEL_6")]
    BuddyEmotionLevel6,
}
