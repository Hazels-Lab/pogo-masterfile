// Generated from Pokémon GO masterfile — group "weatherAffinities".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct WeatherAffinities {
    pub pokemon_type: Vec<String>,
    pub weather_condition: String,
}
