//! Generated from Pokémon GO masterfile — group "nonCombatMoveSettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum NonCombatMoveSettingsTemplateId {
    #[serde(rename = "NON_COMBAT_V0388_MOVE_SPACIAL_REND")]
    NonCombatV0388MoveSpacialRend,
    #[serde(rename = "NON_COMBAT_V0394_MOVE_ROAR_OF_TIME")]
    NonCombatV0394MoveRoarOfTime,
    #[serde(rename = "NON_COMBAT_V0404_MOVE_SUNSTEEL_STRIKE")]
    NonCombatV0404MoveSunsteelStrike,
    #[serde(rename = "NON_COMBAT_V0405_MOVE_MOONGEIST_BEAM")]
    NonCombatV0405MoveMoongeistBeam,
    #[serde(rename = "NON_COMBAT_V0466_MOVE_FREEZE_SHOCK")]
    NonCombatV0466MoveFreezeShock,
    #[serde(rename = "NON_COMBAT_V0467_MOVE_ICE_BURN")]
    NonCombatV0467MoveIceBurn,
    #[serde(rename = "NON_COMBAT_V0469_MOVE_BEHEMOTH_BLADE")]
    NonCombatV0469MoveBehemothBlade,
    #[serde(rename = "NON_COMBAT_V0470_MOVE_BEHEMOTH_BASH")]
    NonCombatV0470MoveBehemothBash,
    #[serde(rename = "NON_COMBAT_V0482_MOVE_DYNAMAX_CANNON")]
    NonCombatV0482MoveDynamaxCannon,
}
