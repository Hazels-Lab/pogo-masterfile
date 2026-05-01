//! Generated from Pokémon GO masterfile — group "weatherAffinities" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum WeatherAffinitiesTemplateId {
    #[serde(rename = "WEATHER_AFFINITY_CLEAR")]
    WeatherAffinityClear,
    #[serde(rename = "WEATHER_AFFINITY_FOG")]
    WeatherAffinityFog,
    #[serde(rename = "WEATHER_AFFINITY_OVERCAST")]
    WeatherAffinityOvercast,
    #[serde(rename = "WEATHER_AFFINITY_PARTLY_CLOUDY")]
    WeatherAffinityPartlyCloudy,
    #[serde(rename = "WEATHER_AFFINITY_RAINY")]
    WeatherAffinityRainy,
    #[serde(rename = "WEATHER_AFFINITY_SNOW")]
    WeatherAffinitySnow,
    #[serde(rename = "WEATHER_AFFINITY_WINDY")]
    WeatherAffinityWindy,
}
