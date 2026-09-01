//! Generated from Pokémon GO masterfile — group "codeGateProto" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum CodeGateProtoTemplateId {
    #[serde(rename = "AR_PHOTO_MULTIPLE_CONCURRENT_CAMPAIGN_CODE_GATE")]
    ArPhotoMultipleConcurrentCampaignCodeGate,
    #[serde(rename = "COMBAT_VNEXT_CODE_GATE")]
    CombatVnextCodeGate,
    #[serde(rename = "INPUT_TRACKER_CODE_GATE")]
    InputTrackerCodeGate,
    #[serde(rename = "IS_SKU_AVAILABLE_NO_APP_ID_CODE_GATE")]
    IsSkuAvailableNoAppIdCodeGate,
    #[serde(rename = "MEMORY_CLEANUP_CODE_GATE")]
    MemoryCleanupCodeGate,
    #[serde(rename = "TODAY_VIEW_V3_CODE_GATE")]
    TodayViewV3CodeGate,
    #[serde(rename = "USE_GMT_SKU_DATA_CODE_GATE")]
    UseGmtSkuDataCodeGate,
}
