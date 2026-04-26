// Generated from Pokémon GO masterfile — group "codeGateProto", 13 entries.

import type { S } from "./_utils";
export interface CodeGateProto<TemplateID extends string = string, TData extends CodeGateProtoData = CodeGateProtoData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		codeGateProto: TData & {
			isEnabled: true;
		};
	};
}

export interface CodeGateProtoData {
	subCodeGateList?: {
		isEnabled?: boolean;
		name: "LEADER_VNEXT_CODE_GATE" | "show_move_effectiveness" | "trade_sub_code_gate" | "UNLIMITED_PLAYER_ACTIVITY_REWARDS_SUB_CODE_GATE";
	};
}

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
export type CodeGateProtoBattleRewardsCodeGate = S<
	CodeGateProto<
		"BATTLE_REWARDS_CODE_GATE",
		{
			subCodeGateList: {
				name: "UNLIMITED_PLAYER_ACTIVITY_REWARDS_SUB_CODE_GATE";
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
export type CodeGateProtoPredictChargeMoveOnSubmitRollBackCodeGate = S<CodeGateProto<"PREDICT_CHARGE_MOVE_ON_SUBMIT_ROLL_BACK_CODE_GATE">>;
export type CodeGateProtoPushGatewayMultiActionCodeGate = S<CodeGateProto<"PUSH_GATEWAY_MULTI_ACTION_CODE_GATE">>;
export type CodeGateProtoStampCollectionSnapshotEnabledCodeGate = S<CodeGateProto<"STAMP_COLLECTION_SNAPSHOT_ENABLED_CODE_GATE">>;
export type CodeGateProtoTodayViewV3CodeGate = S<CodeGateProto<"TODAY_VIEW_V3_CODE_GATE">>;
export type CodeGateProtoUseExtendedSettingsForMaxScaleCodeGate = S<CodeGateProto<"USE_EXTENDED_SETTINGS_FOR_MAX_SCALE_CODE_GATE">>;
export type CodeGateProtoUseGmtSkuDataCodeGate = S<CodeGateProto<"USE_GMT_SKU_DATA_CODE_GATE">>;

export type CodeGateProtoMasterfileEntry =
	| CodeGateProtoBattleAccessibilityCodeGate
	| CodeGateProtoBattleRewardsCodeGate
	| CodeGateProtoCombatVnextCodeGate
	| CodeGateProtoIbfcLwsCodeGate
	| CodeGateProtoInputTrackerCodeGate
	| CodeGateProtoIsSkuAvailableNoAppIdCodeGate
	| CodeGateProtoMapThemeLowPerfCodeGate
	| CodeGateProtoPredictChargeMoveOnSubmitRollBackCodeGate
	| CodeGateProtoPushGatewayMultiActionCodeGate
	| CodeGateProtoStampCollectionSnapshotEnabledCodeGate
	| CodeGateProtoTodayViewV3CodeGate
	| CodeGateProtoUseExtendedSettingsForMaxScaleCodeGate
	| CodeGateProtoUseGmtSkuDataCodeGate;

export type CodeGateProtoTemplateID = CodeGateProtoMasterfileEntry["templateId"];
