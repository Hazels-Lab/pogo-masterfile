//! Generated from Pokémon GO masterfile — group "codeGateProto" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum CodeGateProtoTemplateId {
    #[serde(rename = "COMBAT_VNEXT_CODE_GATE")]
    CombatVnextCodeGate,
    #[serde(rename = "IS_SKU_AVAILABLE_NO_APP_ID_CODE_GATE")]
    IsSkuAvailableNoAppIdCodeGate,
    #[serde(rename = "SOFT_SFIDA_FOREGROUND_DESCRIPTION_TEXT_CODE_GATE")]
    SoftSfidaForegroundDescriptionTextCodeGate,
    #[serde(rename = "USE_GMT_SKU_DATA_CODE_GATE")]
    UseGmtSkuDataCodeGate,
}
