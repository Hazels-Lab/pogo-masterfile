//! Generated from Pokémon GO masterfile — group "tappableSettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash,
    Serialize, Deserialize,
    AllVariants, AsStr, FromStrEnum,
)]
pub enum TappableSettingsTemplateId {
    #[serde(rename = "TAPPABLE_SETTINGS")]
    TappableSettings,
    #[serde(rename = "TAPPABLE_SETTINGS_BREAKFAST")]
    TappableSettingsBreakfast,
    #[serde(rename = "TAPPABLE_TYPE_HAT")]
    TappableTypeHat,
    #[serde(rename = "TAPPABLE_TYPE_MAPLE")]
    TappableTypeMaple,
    #[serde(rename = "TAPPABLE_TYPE_POKEBALL")]
    TappableTypePokeball,
}
