//! Generated from Pokémon GO masterfile — group "rollBack" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum RollBackTemplateId {
    #[serde(rename = "ANDROID_SENSORS_ROLL_BACK")]
    AndroidSensorsRollBack,
    #[serde(rename = "BIDIRECTIONAL_FP_WEEKLY_CHALLENGE_REWARD_ROLL_BACK")]
    BidirectionalFpWeeklyChallengeRewardRollBack,
    #[serde(rename = "SINGLE_ROLL_SHINY_RATE_ROLL_BACK")]
    SingleRollShinyRateRollBack,
}
