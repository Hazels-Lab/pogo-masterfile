// Generated from Pokémon GO masterfile — group "avatarItemDisplay".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DisplayStringId {
    pub display_string_id: String,
    pub icon_address: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Misc {
    pub icon_address: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum AvatarItemDisplay {
    DisplayStringId(DisplayStringId),
    Misc(Misc),
}

crate::masterfile_entry!(AvatarItemDisplayEntry, AvatarItemDisplayEntryData, avatar_item_display: AvatarItemDisplay);
