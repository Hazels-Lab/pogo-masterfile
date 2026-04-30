//! Generated from Pokémon GO masterfile — group "moveSequenceSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MoveSequenceSettings {
    pub sequence: Vec<String>,
}

crate::masterfile_entry!(MoveSequenceSettingsEntry, MoveSequenceSettingsEntryData, move_sequence_settings: MoveSequenceSettings);
