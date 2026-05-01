//! Generated from Pokémon GO masterfile — group "invasionNpcDisplaySettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash,
    Serialize, Deserialize,
    AllVariants, AsStr, FromStrEnum,
)]
pub enum InvasionNpcDisplaySettingsTemplateId {
    #[serde(rename = "CHARACTER_BLANCHE")]
    CharacterBlanche,
    #[serde(rename = "CHARACTER_BUG_GRUNT_FEMALE")]
    CharacterBugGruntFemale,
    #[serde(rename = "CHARACTER_BUG_GRUNT_MALE")]
    CharacterBugGruntMale,
    #[serde(rename = "CHARACTER_CANDELA")]
    CharacterCandela,
    #[serde(rename = "CHARACTER_DARK_GRUNT_FEMALE")]
    CharacterDarkGruntFemale,
    #[serde(rename = "CHARACTER_DARK_GRUNT_MALE")]
    CharacterDarkGruntMale,
    #[serde(rename = "CHARACTER_DECOY_GRUNT_FEMALE")]
    CharacterDecoyGruntFemale,
    #[serde(rename = "CHARACTER_DECOY_GRUNT_MALE")]
    CharacterDecoyGruntMale,
    #[serde(rename = "CHARACTER_DRAGON_GRUNT_FEMALE")]
    CharacterDragonGruntFemale,
    #[serde(rename = "CHARACTER_DRAGON_GRUNT_MALE")]
    CharacterDragonGruntMale,
    #[serde(rename = "CHARACTER_ELECTRIC_GRUNT_FEMALE")]
    CharacterElectricGruntFemale,
    #[serde(rename = "CHARACTER_ELECTRIC_GRUNT_MALE")]
    CharacterElectricGruntMale,
    #[serde(rename = "CHARACTER_EVENT_ARLO_UNTICKETED")]
    CharacterEventArloUnticketed,
    #[serde(rename = "CHARACTER_EVENT_CLIFF_UNTICKETED")]
    CharacterEventCliffUnticketed,
    #[serde(rename = "CHARACTER_EVENT_GIOVANNI_UNTICKETED")]
    CharacterEventGiovanniUnticketed,
    #[serde(rename = "CHARACTER_EVENT_NPC_0")]
    CharacterEventNpc0,
    #[serde(rename = "CHARACTER_EVENT_NPC_1")]
    CharacterEventNpc1,
    #[serde(rename = "CHARACTER_EVENT_NPC_10")]
    CharacterEventNpc10,
    #[serde(rename = "CHARACTER_EVENT_NPC_2")]
    CharacterEventNpc2,
    #[serde(rename = "CHARACTER_EVENT_NPC_3")]
    CharacterEventNpc3,
    #[serde(rename = "CHARACTER_EVENT_NPC_4")]
    CharacterEventNpc4,
    #[serde(rename = "CHARACTER_EVENT_NPC_5")]
    CharacterEventNpc5,
    #[serde(rename = "CHARACTER_EVENT_NPC_6")]
    CharacterEventNpc6,
    #[serde(rename = "CHARACTER_EVENT_NPC_7")]
    CharacterEventNpc7,
    #[serde(rename = "CHARACTER_EVENT_NPC_8")]
    CharacterEventNpc8,
    #[serde(rename = "CHARACTER_EVENT_NPC_9")]
    CharacterEventNpc9,
    #[serde(rename = "CHARACTER_EVENT_SIERRA_UNTICKETED")]
    CharacterEventSierraUnticketed,
    #[serde(rename = "CHARACTER_EXECUTIVE_ARLO")]
    CharacterExecutiveArlo,
    #[serde(rename = "CHARACTER_EXECUTIVE_CLIFF")]
    CharacterExecutiveCliff,
    #[serde(rename = "CHARACTER_EXECUTIVE_SIERRA")]
    CharacterExecutiveSierra,
    #[serde(rename = "CHARACTER_EXPLORER")]
    CharacterExplorer,
    #[serde(rename = "CHARACTER_FAIRY_GRUNT_FEMALE")]
    CharacterFairyGruntFemale,
    #[serde(rename = "CHARACTER_FAIRY_GRUNT_MALE")]
    CharacterFairyGruntMale,
    #[serde(rename = "CHARACTER_FIGHTING_GRUNT_FEMALE")]
    CharacterFightingGruntFemale,
    #[serde(rename = "CHARACTER_FIGHTING_GRUNT_MALE")]
    CharacterFightingGruntMale,
    #[serde(rename = "CHARACTER_FIRE_GRUNT_FEMALE")]
    CharacterFireGruntFemale,
    #[serde(rename = "CHARACTER_FIRE_GRUNT_MALE")]
    CharacterFireGruntMale,
    #[serde(rename = "CHARACTER_FLYING_GRUNT_FEMALE")]
    CharacterFlyingGruntFemale,
    #[serde(rename = "CHARACTER_FLYING_GRUNT_MALE")]
    CharacterFlyingGruntMale,
    #[serde(rename = "CHARACTER_GHOST_GRUNT_FEMALE")]
    CharacterGhostGruntFemale,
    #[serde(rename = "CHARACTER_GHOST_GRUNT_MALE")]
    CharacterGhostGruntMale,
    #[serde(rename = "CHARACTER_GIOVANNI")]
    CharacterGiovanni,
    #[serde(rename = "CHARACTER_GRASS_GRUNT_FEMALE")]
    CharacterGrassGruntFemale,
    #[serde(rename = "CHARACTER_GRASS_GRUNT_MALE")]
    CharacterGrassGruntMale,
    #[serde(rename = "CHARACTER_GROUND_GRUNT_FEMALE")]
    CharacterGroundGruntFemale,
    #[serde(rename = "CHARACTER_GROUND_GRUNT_MALE")]
    CharacterGroundGruntMale,
    #[serde(rename = "CHARACTER_GRUNTB_FEMALE")]
    CharacterGruntbFemale,
    #[serde(rename = "CHARACTER_GRUNTB_MALE")]
    CharacterGruntbMale,
    #[serde(rename = "CHARACTER_GRUNT_FEMALE")]
    CharacterGruntFemale,
    #[serde(rename = "CHARACTER_GRUNT_MALE")]
    CharacterGruntMale,
    #[serde(rename = "CHARACTER_ICE_GRUNT_FEMALE")]
    CharacterIceGruntFemale,
    #[serde(rename = "CHARACTER_ICE_GRUNT_MALE")]
    CharacterIceGruntMale,
    #[serde(rename = "CHARACTER_METAL_GRUNT_FEMALE")]
    CharacterMetalGruntFemale,
    #[serde(rename = "CHARACTER_METAL_GRUNT_MALE")]
    CharacterMetalGruntMale,
    #[serde(rename = "CHARACTER_NORMAL_GRUNT_FEMALE")]
    CharacterNormalGruntFemale,
    #[serde(rename = "CHARACTER_NORMAL_GRUNT_MALE")]
    CharacterNormalGruntMale,
    #[serde(rename = "CHARACTER_POISON_GRUNT_FEMALE")]
    CharacterPoisonGruntFemale,
    #[serde(rename = "CHARACTER_POISON_GRUNT_MALE")]
    CharacterPoisonGruntMale,
    #[serde(rename = "CHARACTER_PSYCHIC_GRUNT_FEMALE")]
    CharacterPsychicGruntFemale,
    #[serde(rename = "CHARACTER_PSYCHIC_GRUNT_MALE")]
    CharacterPsychicGruntMale,
    #[serde(rename = "CHARACTER_ROCK_GRUNT_FEMALE")]
    CharacterRockGruntFemale,
    #[serde(rename = "CHARACTER_ROCK_GRUNT_MALE")]
    CharacterRockGruntMale,
    #[serde(rename = "CHARACTER_SPARK")]
    CharacterSpark,
    #[serde(rename = "CHARACTER_WATER_GRUNT_FEMALE")]
    CharacterWaterGruntFemale,
    #[serde(rename = "CHARACTER_WATER_GRUNT_MALE")]
    CharacterWaterGruntMale,
    #[serde(rename = "CHARACTER_WILLOW")]
    CharacterWillow,
    #[serde(rename = "CHARACTER_WILLOWB")]
    CharacterWillowb,
}
