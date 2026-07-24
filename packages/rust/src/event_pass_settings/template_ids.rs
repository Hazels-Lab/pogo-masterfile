//! Generated from Pokémon GO masterfile — group "eventPassSettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum EventPassSettingsTemplateId {
    #[serde(rename = "EVENT_PASS_AFTERPARTY2026_EVENT")]
    EventPassAfterparty2026Event,
    #[serde(rename = "EVENT_PASS_JULY2026_SEASON")]
    EventPassJuly2026Season,
}
