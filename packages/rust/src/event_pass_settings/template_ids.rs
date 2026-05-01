//! Generated from Pokémon GO masterfile — group "eventPassSettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum EventPassSettingsTemplateId {
    #[serde(rename = "EVENT_PASS_APRIL2026_SEASON")]
    EventPassApril2026Season,
    #[serde(rename = "EVENT_PASS_STEELEDRESOLVE2026_EVENT")]
    EventPassSteeledresolve2026Event,
}
