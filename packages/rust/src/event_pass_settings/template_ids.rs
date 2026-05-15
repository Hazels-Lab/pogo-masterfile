//! Generated from Pokémon GO masterfile — group "eventPassSettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum EventPassSettingsTemplateId {
    #[serde(rename = "EVENT_PASS_MAY2026_SEASON")]
    EventPassMay2026Season,
    #[serde(rename = "EVENT_PASS_SPRINGMARATHON2026_EVENT")]
    EventPassSpringmarathon2026Event,
}
