//! Generated from Pokémon GO masterfile — group "avatarGroupOrderSettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum AvatarGroupOrderSettingsTemplateId {
    #[serde(rename = "AVATAR_GROUP_ORDER_SETTINGS")]
    AvatarGroupOrderSettings,
    #[serde(rename = "AVATAR_GROUP_SETTINGS")]
    AvatarGroupSettings,
}
