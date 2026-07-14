//! Generated from Pokémon GO masterfile — group "rollBack" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum RollBackTemplateId {
    #[serde(rename = "COMBAT_VNEXT_USE_MATCHING_START_TURN_FOR_FAST_ATTACK_ENABLE_ROLL_BACK")]
    CombatVnextUseMatchingStartTurnForFastAttackEnableRollBack,
    #[serde(rename = "FRIENDS_AND_SOCIAL_LAZY_LOAD_ROLL_BACK")]
    FriendsAndSocialLazyLoadRollBack,
    #[serde(rename = "MAP_RADIUS_ENHANCE_GRAPHICS_ROLL_BACK")]
    MapRadiusEnhanceGraphicsRollBack,
    #[serde(rename = "OPTIMIZE_RAID_LOBBY_AVATAR_DETAILS_ROLL_BACK")]
    OptimizeRaidLobbyAvatarDetailsRollBack,
    #[serde(rename = "PERIODIC_MAP_UNLOAD_ROLL_BACK")]
    PeriodicMapUnloadRollBack,
}
