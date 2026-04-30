//! Generated from Pokémon GO masterfile — group "invasionNpcDisplaySettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Avatar {
    pub avatar: Option<u64>,
    pub avatar_backpack: Option<String>,
    pub avatar_belt: Option<String>,
    pub avatar_eyes: Option<String>,
    pub avatar_face: Option<String>,
    pub avatar_glasses: Option<String>,
    pub avatar_gloves: Option<String>,
    pub avatar_hair: Option<String>,
    pub avatar_hat: Option<String>,
    pub avatar_necklace: Option<String>,
    pub avatar_pants: Option<String>,
    pub avatar_pose: Option<String>,
    pub avatar_shirt: Option<String>,
    pub avatar_shoes: Option<String>,
    pub avatar_socks: Option<String>,
    pub skin: Option<u64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct InvasionNpcDisplaySettings {
    pub avatar: Avatar,
    pub backdrop_image_bundle: Option<String>,
    pub custom_combat_music: Option<String>,
    pub custom_incident_music: Option<String>,
    pub icon_url: String,
    pub is_male: Option<bool>,
    pub model_name: String,
    pub tips_type: Option<String>,
    pub trainer_name: String,
    pub trainer_quote: String,
    pub trainer_title: String,
    pub tutorial_on_loss_string: Option<String>,
}

crate::masterfile_entry!(InvasionNpcDisplaySettingsEntry, InvasionNpcDisplaySettingsEntryData, invasion_npc_display_settings: InvasionNpcDisplaySettings);
