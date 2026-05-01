//! Generated from Pokémon GO masterfile — group "partyPlayGeneralSettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum PartyPlayGeneralSettingsTemplateId {
    #[serde(rename = "PARTY_PLAY_GENERAL_SETTINGS")]
    PartyPlayGeneralSettings,
    #[serde(rename = "WEEKLY_CHALLENGE_GENERAL_SETTINGS")]
    WeeklyChallengeGeneralSettings,
}
