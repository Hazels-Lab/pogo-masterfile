// Generated from Pokémon GO masterfile — group "avatarGroupOrderSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Group {
    pub name: String,
    pub new_tag_enabled: Option<bool>,
    pub order: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AvatarGroupOrderSettings {
    pub group: Vec<Group>,
}

crate::masterfile_entry!(AvatarGroupOrderSettingsEntry, AvatarGroupOrderSettingsEntryData, avatar_group_order_settings: AvatarGroupOrderSettings);
