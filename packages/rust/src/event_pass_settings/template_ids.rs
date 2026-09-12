//! Generated from Pokémon GO masterfile — group "eventPassSettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum EventPassSettingsTemplateId {
    #[serde(rename = "EVENT_PASS_MEGASQUADS2026_EVENT")]
    EventPassMegasquads2026Event,
    #[serde(rename = "EVENT_PASS_SEPTEMBER2026_SEASON")]
    EventPassSeptember2026Season,
}
