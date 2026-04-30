// Generated from Pokémon GO masterfile — group "recommendedSearchSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SearchKey {
    pub search_key: String,
    pub search_label: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AppendSearchString {
    pub append_search_string: String,
    pub search_label: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum RecommendedSearchSettings {
    SearchKey(SearchKey),
    AppendSearchString(AppendSearchString),
}
