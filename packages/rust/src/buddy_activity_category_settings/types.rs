use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BuddyActivityCategorySettings {
    pub activity_category: String,
    pub max_points_per_day: u64,
}

crate::masterfile_entry!(BuddyActivityCategorySettingsEntry, BuddyActivityCategorySettingsEntryData, buddy_activity_category_settings: BuddyActivityCategorySettings);
