//! Generated from Pokémon GO masterfile — group "recommendedSearchSettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash,
    Serialize, Deserialize,
    AllVariants, AsStr, FromStrEnum,
)]
pub enum RecommendedSearchSettingsTemplateId {
    #[serde(rename = "RECOMMENDED_SEARCH_APPRAISAL_IV_HIGH")]
    RecommendedSearchAppraisalIvHigh,
    #[serde(rename = "RECOMMENDED_SEARCH_APPRAISAL_IV_LOW")]
    RecommendedSearchAppraisalIvLow,
    #[serde(rename = "RECOMMENDED_SEARCH_APPRAISAL_LABEL_EVOLVE_MEGA")]
    RecommendedSearchAppraisalLabelEvolveMega,
    #[serde(rename = "RECOMMENDED_SEARCH_BADGE_KANTO_REGION")]
    RecommendedSearchBadgeKantoRegion,
    #[serde(rename = "RECOMMENDED_SEARCH_FILTER_LABEL_EVOLVABLE")]
    RecommendedSearchFilterLabelEvolvable,
    #[serde(rename = "RECOMMENDED_SEARCH_FILTER_LABEL_HATCHED")]
    RecommendedSearchFilterLabelHatched,
    #[serde(rename = "RECOMMENDED_SEARCH_FILTER_LABEL_LEGENDARY")]
    RecommendedSearchFilterLabelLegendary,
    #[serde(rename = "RECOMMENDED_SEARCH_FILTER_LABEL_SHINY")]
    RecommendedSearchFilterLabelShiny,
    #[serde(rename = "RECOMMENDED_SEARCH_FILTER_LABEL_TRADED")]
    RecommendedSearchFilterLabelTraded,
    #[serde(rename = "RECOMMENDED_SEARCH_POKEMON_TYPE_NORMAL")]
    RecommendedSearchPokemonTypeNormal,
}
