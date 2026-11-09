//! Generated from Pokémon GO masterfile — group "eventPassSettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum EventPassSettingsTemplateId {
    #[serde(rename = "EVENT_PASS_GOWA2026_GLOBAL")]
    EventPassGowa2026Global,
    #[serde(rename = "EVENT_PASS_NOVEMBER2026_SEASON")]
    EventPassNovember2026Season,
}
