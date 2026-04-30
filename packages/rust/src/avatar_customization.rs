// Generated from Pokémon GO masterfile — group "avatarCustomization".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AvatarCustomization {
    pub asset_name: String,
    pub avatar_type: Option<String>,
    pub bundle_name: Option<String>,
    pub enabled: Option<bool>,
    pub group_name: String,
    pub iap_sku: Option<String>,
    pub icon_name: Option<String>,
    pub set_names: Option<Vec<String>>,
    pub set_prime_item: Option<bool>,
    pub slot: [String; 1],
    pub sort_order: u64,
    pub unlock_badge_level: Option<u64>,
    pub unlock_badge_type: Option<String>,
    pub unlock_player_level: Option<u64>,
    pub unlock_type: String,
}
