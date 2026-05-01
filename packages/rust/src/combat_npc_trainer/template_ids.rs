//! Generated from Pokémon GO masterfile — group "combatNpcTrainer" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash,
    Serialize, Deserialize,
    AllVariants, AsStr, FromStrEnum,
)]
pub enum CombatNpcTrainerTemplateId {
    #[serde(rename = "TRAINER_BLANCHE_GREAT")]
    TrainerBlancheGreat,
    #[serde(rename = "TRAINER_BLANCHE_MASTER")]
    TrainerBlancheMaster,
    #[serde(rename = "TRAINER_BLANCHE_ULTRA")]
    TrainerBlancheUltra,
    #[serde(rename = "TRAINER_CANDELA_GREAT")]
    TrainerCandelaGreat,
    #[serde(rename = "TRAINER_CANDELA_MASTER")]
    TrainerCandelaMaster,
    #[serde(rename = "TRAINER_CANDELA_ULTRA")]
    TrainerCandelaUltra,
    #[serde(rename = "TRAINER_SPARK_GREAT")]
    TrainerSparkGreat,
    #[serde(rename = "TRAINER_SPARK_MASTER")]
    TrainerSparkMaster,
    #[serde(rename = "TRAINER_SPARK_ULTRA")]
    TrainerSparkUltra,
}
