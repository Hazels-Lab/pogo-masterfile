// Generated from Pokémon GO masterfile — group "codeGateProto", 11 entries (variant aliases).

import type { S } from "../../_utils";
import type { CodeGateProto } from "../types";

export type CodeGateProtoArPhotoMultipleConcurrentCampaignCodeGate = S<CodeGateProto<"AR_PHOTO_MULTIPLE_CONCURRENT_CAMPAIGN_CODE_GATE">>;
export type CodeGateProtoBattleAccessibilityCodeGate = S<
	CodeGateProto<
		"BATTLE_ACCESSIBILITY_CODE_GATE",
		{
			subCodeGateList: {
				isEnabled: true;
				name: "show_move_effectiveness";
			};
		}
	>
>;
export type CodeGateProtoCombatVnextCodeGate = S<
	CodeGateProto<
		"COMBAT_VNEXT_CODE_GATE",
		{
			subCodeGateList: {
				isEnabled: true;
				name: "LEADER_VNEXT_CODE_GATE";
			};
		}
	>
>;
export type CodeGateProtoEventPoiRefreshCodeGate = S<CodeGateProto<"EVENT_POI_REFRESH_CODE_GATE">>;
export type CodeGateProtoIbfcLwsCodeGate = S<CodeGateProto<"IBFC_LWS_CODE_GATE">>;
export type CodeGateProtoInputTrackerCodeGate = S<
	CodeGateProto<
		"INPUT_TRACKER_CODE_GATE",
		{
			subCodeGateList: {
				isEnabled: true;
				name: "trade_sub_code_gate";
			};
		}
	>
>;
export type CodeGateProtoIsSkuAvailableNoAppIdCodeGate = S<CodeGateProto<"IS_SKU_AVAILABLE_NO_APP_ID_CODE_GATE">>;
export type CodeGateProtoMapThemeLowPerfCodeGate = S<CodeGateProto<"MAP_THEME_LOW_PERF_CODE_GATE">>;
export type CodeGateProtoStampCollectionSnapshotEnabledCodeGate = S<CodeGateProto<"STAMP_COLLECTION_SNAPSHOT_ENABLED_CODE_GATE">>;
export type CodeGateProtoTodayViewV3CodeGate = S<CodeGateProto<"TODAY_VIEW_V3_CODE_GATE">>;
export type CodeGateProtoUseGmtSkuDataCodeGate = S<CodeGateProto<"USE_GMT_SKU_DATA_CODE_GATE">>;

export type CodeGateProtoMasterfileEntry =
	| CodeGateProtoArPhotoMultipleConcurrentCampaignCodeGate
	| CodeGateProtoBattleAccessibilityCodeGate
	| CodeGateProtoCombatVnextCodeGate
	| CodeGateProtoEventPoiRefreshCodeGate
	| CodeGateProtoIbfcLwsCodeGate
	| CodeGateProtoInputTrackerCodeGate
	| CodeGateProtoIsSkuAvailableNoAppIdCodeGate
	| CodeGateProtoMapThemeLowPerfCodeGate
	| CodeGateProtoStampCollectionSnapshotEnabledCodeGate
	| CodeGateProtoTodayViewV3CodeGate
	| CodeGateProtoUseGmtSkuDataCodeGate;

export type CodeGateProtoTemplateID = CodeGateProtoMasterfileEntry["templateId"];
