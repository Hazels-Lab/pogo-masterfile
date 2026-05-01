//! Generated from Pokémon GO masterfile — group "questSettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash,
    Serialize, Deserialize,
    AllVariants, AsStr, FromStrEnum,
)]
pub enum QuestSettingsTemplateId {
    #[serde(rename = "QUEST_FIRST_CATCH_OF_THE_DAY")]
    QuestFirstCatchOfTheDay,
    #[serde(rename = "QUEST_FIRST_POKESTOP_OF_THE_DAY")]
    QuestFirstPokestopOfTheDay,
    #[serde(rename = "QUEST_FIRST_ROUTE_OF_THE_DAY")]
    QuestFirstRouteOfTheDay,
}
