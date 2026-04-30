// Generated from Pokémon GO masterfile — group "languageSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LanguageSettings {
    pub is_enabled: bool,
    pub language: String,
}
