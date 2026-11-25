//! Generated from Pokémon GO masterfile — group "ticketGiftingSettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum TicketGiftingSettingsTemplateId {
    #[serde(rename = "ITEM_GIFTING_SETTINGS")]
    ItemGiftingSettings,
    #[serde(rename = "TICKET_GIFTING_SETTINGS")]
    TicketGiftingSettings,
}
