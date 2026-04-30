// Generated from Pokémon GO masterfile — group "stickerMetadata".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StickerMetadata {
    pub category: Vec<String>,
    pub max_count: u64,
    pub pokemon_id: Option<String>,
    pub region_id: Option<u64>,
    pub release_date: Option<u64>,
    pub sticker_id: String,
    pub sticker_url: Option<String>,
}

crate::masterfile_entry!(StickerMetadataEntry, StickerMetadataEntryData, sticker_metadata: StickerMetadata);
