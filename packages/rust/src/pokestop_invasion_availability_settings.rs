//! Generated from Pokémon GO masterfile — group "pokestopInvasionAvailabilitySettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokestopInvasionAvailabilitySettings {
    pub availability_end_minute: String,
    pub availability_start_minute: String,
}

crate::masterfile_entry!(PokestopInvasionAvailabilitySettingsEntry, PokestopInvasionAvailabilitySettingsEntryData, pokestop_invasion_availability_settings: PokestopInvasionAvailabilitySettings);
