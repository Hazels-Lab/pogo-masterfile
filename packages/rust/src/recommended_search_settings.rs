// Generated from Pokémon GO masterfile — group "recommendedSearchSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RecommendedSearchSettingsSearchKey {
    pub search_key: String,
    pub search_label: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RecommendedSearchSettingsAppendSearchString {
    pub append_search_string: String,
    pub search_label: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum RecommendedSearchSettings {
    SearchKey(RecommendedSearchSettingsSearchKey),
    AppendSearchString(RecommendedSearchSettingsAppendSearchString),
}
