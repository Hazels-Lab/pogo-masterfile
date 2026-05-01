//! Generated from Pokémon GO masterfile — group "temporaryEvolutionSettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash,
    Serialize, Deserialize,
    AllVariants, AsStr, FromStrEnum,
)]
pub enum TemporaryEvolutionSettingsTemplateId {
    #[serde(rename = "TEMPORARY_EVOLUTION_V0003_POKEMON_VENUSAUR")]
    TemporaryEvolutionV0003PokemonVenusaur,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0006_POKEMON_CHARIZARD")]
    TemporaryEvolutionV0006PokemonCharizard,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0009_POKEMON_BLASTOISE")]
    TemporaryEvolutionV0009PokemonBlastoise,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0015_POKEMON_BEEDRILL")]
    TemporaryEvolutionV0015PokemonBeedrill,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0018_POKEMON_PIDGEOT")]
    TemporaryEvolutionV0018PokemonPidgeot,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0065_POKEMON_ALAKAZAM")]
    TemporaryEvolutionV0065PokemonAlakazam,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0071_POKEMON_VICTREEBEL")]
    TemporaryEvolutionV0071PokemonVictreebel,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0080_POKEMON_SLOWBRO")]
    TemporaryEvolutionV0080PokemonSlowbro,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0094_POKEMON_GENGAR")]
    TemporaryEvolutionV0094PokemonGengar,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0115_POKEMON_KANGASKHAN")]
    TemporaryEvolutionV0115PokemonKangaskhan,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0127_POKEMON_PINSIR")]
    TemporaryEvolutionV0127PokemonPinsir,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0130_POKEMON_GYARADOS")]
    TemporaryEvolutionV0130PokemonGyarados,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0142_POKEMON_AERODACTYL")]
    TemporaryEvolutionV0142PokemonAerodactyl,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0149_POKEMON_DRAGONITE")]
    TemporaryEvolutionV0149PokemonDragonite,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0181_POKEMON_AMPHAROS")]
    TemporaryEvolutionV0181PokemonAmpharos,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0208_POKEMON_STEELIX")]
    TemporaryEvolutionV0208PokemonSteelix,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0212_POKEMON_SCIZOR")]
    TemporaryEvolutionV0212PokemonScizor,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0214_POKEMON_HERACROSS")]
    TemporaryEvolutionV0214PokemonHeracross,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0229_POKEMON_HOUNDOOM")]
    TemporaryEvolutionV0229PokemonHoundoom,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0248_POKEMON_TYRANITAR")]
    TemporaryEvolutionV0248PokemonTyranitar,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0254_POKEMON_SCEPTILE")]
    TemporaryEvolutionV0254PokemonSceptile,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0257_POKEMON_BLAZIKEN")]
    TemporaryEvolutionV0257PokemonBlaziken,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0260_POKEMON_SWAMPERT")]
    TemporaryEvolutionV0260PokemonSwampert,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0282_POKEMON_GARDEVOIR")]
    TemporaryEvolutionV0282PokemonGardevoir,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0302_POKEMON_SABLEYE")]
    TemporaryEvolutionV0302PokemonSableye,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0303_POKEMON_MAWILE")]
    TemporaryEvolutionV0303PokemonMawile,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0306_POKEMON_AGGRON")]
    TemporaryEvolutionV0306PokemonAggron,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0308_POKEMON_MEDICHAM")]
    TemporaryEvolutionV0308PokemonMedicham,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0310_POKEMON_MANECTRIC")]
    TemporaryEvolutionV0310PokemonManectric,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0319_POKEMON_SHARPEDO")]
    TemporaryEvolutionV0319PokemonSharpedo,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0323_POKEMON_CAMERUPT")]
    TemporaryEvolutionV0323PokemonCamerupt,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0334_POKEMON_ALTARIA")]
    TemporaryEvolutionV0334PokemonAltaria,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0354_POKEMON_BANETTE")]
    TemporaryEvolutionV0354PokemonBanette,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0359_POKEMON_ABSOL")]
    TemporaryEvolutionV0359PokemonAbsol,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0362_POKEMON_GLALIE")]
    TemporaryEvolutionV0362PokemonGlalie,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0373_POKEMON_SALAMENCE")]
    TemporaryEvolutionV0373PokemonSalamence,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0376_POKEMON_METAGROSS")]
    TemporaryEvolutionV0376PokemonMetagross,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0380_POKEMON_LATIAS")]
    TemporaryEvolutionV0380PokemonLatias,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0381_POKEMON_LATIOS")]
    TemporaryEvolutionV0381PokemonLatios,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0382_POKEMON_KYOGRE")]
    TemporaryEvolutionV0382PokemonKyogre,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0383_POKEMON_GROUDON")]
    TemporaryEvolutionV0383PokemonGroudon,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0384_POKEMON_RAYQUAZA")]
    TemporaryEvolutionV0384PokemonRayquaza,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0428_POKEMON_GARCHOMP")]
    TemporaryEvolutionV0428PokemonGarchomp,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0428_POKEMON_LOPUNNY")]
    TemporaryEvolutionV0428PokemonLopunny,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0448_POKEMON_LUCARIO")]
    TemporaryEvolutionV0448PokemonLucario,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0460_POKEMON_ABOMASNOW")]
    TemporaryEvolutionV0460PokemonAbomasnow,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0475_POKEMON_GALLADE")]
    TemporaryEvolutionV0475PokemonGallade,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0531_POKEMON_AUDINO")]
    TemporaryEvolutionV0531PokemonAudino,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0687_POKEMON_MALAMAR")]
    TemporaryEvolutionV0687PokemonMalamar,
    #[serde(rename = "TEMPORARY_EVOLUTION_V0719_POKEMON_DIANCIE")]
    TemporaryEvolutionV0719PokemonDiancie,
}
