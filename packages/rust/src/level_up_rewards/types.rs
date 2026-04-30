use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NeutralAvatarItemTemplates {
    pub display_template_id: String,
    pub item_template_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LevelUpRewards {
    pub client_override_display_order: Option<bool>,
    pub features_unlocked: Option<Vec<String>>,
    pub is_backfill: Option<bool>,
    pub items: Vec<String>,
    pub items_count: Vec<u64>,
    pub items_unlocked: Option<Vec<String>>,
    pub level: u64,
    pub neutral_avatar_item_templates: Option<NeutralAvatarItemTemplates>,
    pub ob_level_up_rewards_number9: Option<f64>,
}

crate::masterfile_entry!(LevelUpRewardsEntry, LevelUpRewardsEntryData, level_up_rewards: LevelUpRewards);
