use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct QuickInviteSettings {
    pub enabled: bool,
    pub suggested_players_variation: String,
}

crate::masterfile_entry!(QuickInviteSettingsEntry, QuickInviteSettingsEntryData, quick_invite_settings: QuickInviteSettings);
