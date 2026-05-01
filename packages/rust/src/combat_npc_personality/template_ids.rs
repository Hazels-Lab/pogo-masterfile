//! Generated from Pokémon GO masterfile — group "combatNpcPersonality" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash,
    Serialize, Deserialize,
    AllVariants, AsStr, FromStrEnum,
)]
pub enum CombatNpcPersonalityTemplateId {
    #[serde(rename = "TRAINER_PERSONALITY_EASY")]
    TrainerPersonalityEasy,
    #[serde(rename = "TRAINER_PERSONALITY_HARD")]
    TrainerPersonalityHard,
    #[serde(rename = "TRAINER_PERSONALITY_MEDIUM")]
    TrainerPersonalityMedium,
}
