use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TicketGiftingSettings {
    pub daily_player_gifting_limit: u64,
    pub min_player_level: u64,
    pub min_required_friendship_level: String,
}

crate::masterfile_entry!(TicketGiftingSettingsEntry, TicketGiftingSettingsEntryData, ticket_gifting_settings: TicketGiftingSettings);
