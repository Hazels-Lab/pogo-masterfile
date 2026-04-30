// Generated from Pokémon GO masterfile — group "avatarItemDisplay".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AvatarItemDisplayDisplayStringId {
    pub display_string_id: String,
    pub icon_address: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AvatarItemDisplayMisc {
    pub icon_address: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum AvatarItemDisplay {
    DisplayStringId(AvatarItemDisplayDisplayStringId),
    Misc(AvatarItemDisplayMisc),
}
