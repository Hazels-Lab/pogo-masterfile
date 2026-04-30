//! Generated from Pokémon GO masterfile — group "languageSettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash,
    Serialize, Deserialize,
    AllVariants, AsStr, FromStrEnum,
)]
pub enum LanguageSettingsTemplateId {
    #[serde(rename = "Hindi")]
    Hindi,
    #[serde(rename = "Indonesian")]
    Indonesian,
    #[serde(rename = "LATAM")]
    Latam,
}
