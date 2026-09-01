//! Generated from Pokémon GO masterfile — group "eventPassSettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum EventPassSettingsTemplateId {
    #[serde(rename = "EVENT_PASS_AUGUST2026_SEASON")]
    EventPassAugust2026Season,
    #[serde(rename = "EVENT_PASS_GOFEST2026_FINALE")]
    EventPassGofest2026Finale,
}
