//! Generated from Pokémon GO masterfile — group "pokemonHomeFormReversions" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash,
    Serialize, Deserialize,
    AllVariants, AsStr, FromStrEnum,
)]
pub enum PokemonHomeFormReversionsTemplateId {
    #[serde(rename = "V0351_POKEMON_CASTFORM_HOME_FORM_REVERSION")]
    V0351PokemonCastformHomeFormReversion,
    #[serde(rename = "V0421_CHERRIM_HOME_FORM_REVERSION")]
    V0421CherrimHomeFormReversion,
    #[serde(rename = "V0487_POKEMON_GIRATINA_HOME_REVERSION")]
    V0487PokemonGiratinaHomeReversion,
    #[serde(rename = "V0555_POKEMON_DARMANITAN_HOME_FORM_REVERSION")]
    V0555PokemonDarmanitanHomeFormReversion,
    #[serde(rename = "V0647_POKEMON_KELDEO_HOME_FORM_REVERSION")]
    V0647PokemonKeldeoHomeFormReversion,
    #[serde(rename = "V0648_POKEMON_MELOETTA_HOME_FORM_REVERSION")]
    V0648PokemonMeloettaHomeFormReversion,
    #[serde(rename = "V0649_POKEMON_GENESECT_HOME_FORM_REVERSION")]
    V0649PokemonGenesectHomeFormReversion,
}
