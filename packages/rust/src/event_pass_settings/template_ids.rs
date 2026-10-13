//! Generated from Pokémon GO masterfile — group "eventPassSettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum EventPassSettingsTemplateId {
    #[serde(rename = "EVENT_PASS_FALLMARATHON2026_EVENT")]
    EventPassFallmarathon2026Event,
    #[serde(rename = "EVENT_PASS_OCTOBER2026_SEASON")]
    EventPassOctober2026Season,
}
