//! Generated from Pokémon GO masterfile — group "fortPowerUpLevelSettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum FortPowerUpLevelSettingsTemplateId {
    #[serde(rename = "FORT_POWER_UP_LEVEL_0")]
    FortPowerUpLevel0,
    #[serde(rename = "FORT_POWER_UP_LEVEL_1")]
    FortPowerUpLevel1,
    #[serde(rename = "FORT_POWER_UP_LEVEL_2")]
    FortPowerUpLevel2,
    #[serde(rename = "FORT_POWER_UP_LEVEL_3")]
    FortPowerUpLevel3,
}
