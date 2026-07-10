//! Generated from Pokémon GO masterfile — group "eventPassSettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum EventPassSettingsTemplateId {
    #[serde(rename = "EVENT_PASS_GOFEST2026_GLOBAL")]
    EventPassGofest2026Global,
    #[serde(rename = "EVENT_PASS_JULY2026_SEASON")]
    EventPassJuly2026Season,
}
