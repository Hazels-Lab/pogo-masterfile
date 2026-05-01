//! Generated from Pokémon GO masterfile — group "codeGateProto" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum CodeGateProtoTemplateId {
    #[serde(rename = "BATTLE_ACCESSIBILITY_CODE_GATE")]
    BattleAccessibilityCodeGate,
    #[serde(rename = "BATTLE_REWARDS_CODE_GATE")]
    BattleRewardsCodeGate,
    #[serde(rename = "COMBAT_VNEXT_CODE_GATE")]
    CombatVnextCodeGate,
    #[serde(rename = "IBFC_LWS_CODE_GATE")]
    IbfcLwsCodeGate,
    #[serde(rename = "INPUT_TRACKER_CODE_GATE")]
    InputTrackerCodeGate,
    #[serde(rename = "IS_SKU_AVAILABLE_NO_APP_ID_CODE_GATE")]
    IsSkuAvailableNoAppIdCodeGate,
    #[serde(rename = "MAP_THEME_LOW_PERF_CODE_GATE")]
    MapThemeLowPerfCodeGate,
    #[serde(rename = "PREDICT_CHARGE_MOVE_ON_SUBMIT_ROLL_BACK_CODE_GATE")]
    PredictChargeMoveOnSubmitRollBackCodeGate,
    #[serde(rename = "PUSH_GATEWAY_MULTI_ACTION_CODE_GATE")]
    PushGatewayMultiActionCodeGate,
    #[serde(rename = "STAMP_COLLECTION_SNAPSHOT_ENABLED_CODE_GATE")]
    StampCollectionSnapshotEnabledCodeGate,
    #[serde(rename = "TODAY_VIEW_V3_CODE_GATE")]
    TodayViewV3CodeGate,
    #[serde(rename = "USE_EXTENDED_SETTINGS_FOR_MAX_SCALE_CODE_GATE")]
    UseExtendedSettingsForMaxScaleCodeGate,
    #[serde(rename = "USE_GMT_SKU_DATA_CODE_GATE")]
    UseGmtSkuDataCodeGate,
}
