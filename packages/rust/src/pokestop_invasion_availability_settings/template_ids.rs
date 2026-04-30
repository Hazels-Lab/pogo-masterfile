//! Generated from Pokémon GO masterfile — group "pokestopInvasionAvailabilitySettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash,
    Serialize, Deserialize,
    AllVariants, AsStr, FromStrEnum,
)]
pub enum PokestopInvasionAvailabilitySettingsTemplateId {
    #[serde(rename = "INVASION_AVAILABILITY_SETTINGS_FRIDAY")]
    InvasionAvailabilitySettingsFriday,
    #[serde(rename = "INVASION_AVAILABILITY_SETTINGS_MONDAY")]
    InvasionAvailabilitySettingsMonday,
    #[serde(rename = "INVASION_AVAILABILITY_SETTINGS_SATURDAY")]
    InvasionAvailabilitySettingsSaturday,
    #[serde(rename = "INVASION_AVAILABILITY_SETTINGS_SUNDAY")]
    InvasionAvailabilitySettingsSunday,
    #[serde(rename = "INVASION_AVAILABILITY_SETTINGS_THURSDAY")]
    InvasionAvailabilitySettingsThursday,
    #[serde(rename = "INVASION_AVAILABILITY_SETTINGS_TUESDAY")]
    InvasionAvailabilitySettingsTuesday,
    #[serde(rename = "INVASION_AVAILABILITY_SETTINGS_WEDNESDAY")]
    InvasionAvailabilitySettingsWednesday,
}
