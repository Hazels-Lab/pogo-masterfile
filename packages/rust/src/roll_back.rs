//! Generated from Pokémon GO masterfile — group "rollBack".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RollBack {
    pub rollback_percentage: u64,
}

crate::masterfile_entry!(RollBackEntry, RollBackEntryData, roll_back: RollBack);
