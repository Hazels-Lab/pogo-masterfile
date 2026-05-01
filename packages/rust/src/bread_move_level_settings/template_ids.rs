//! Generated from Pokémon GO masterfile — group "breadMoveLevelSettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum BreadMoveLevelSettingsTemplateId {
    #[serde(rename = "BREAD_MOVE_LEVEL_SETTINGS_GROUP_1")]
    BreadMoveLevelSettingsGroup1,
    #[serde(rename = "BREAD_MOVE_LEVEL_SETTINGS_GROUP_2")]
    BreadMoveLevelSettingsGroup2,
    #[serde(rename = "BREAD_MOVE_LEVEL_SETTINGS_GROUP_3")]
    BreadMoveLevelSettingsGroup3,
    #[serde(rename = "BREAD_MOVE_LEVEL_SETTINGS_GROUP_4")]
    BreadMoveLevelSettingsGroup4,
    #[serde(rename = "BREAD_MOVE_LEVEL_SETTINGS_GROUP_7")]
    BreadMoveLevelSettingsGroup7,
    #[serde(rename = "BREAD_MOVE_LEVEL_SETTINGS_GROUP_8")]
    BreadMoveLevelSettingsGroup8,
    #[serde(rename = "BREAD_MOVE_LEVEL_SETTINGS_GROUP_Z")]
    BreadMoveLevelSettingsGroupZ,
}
