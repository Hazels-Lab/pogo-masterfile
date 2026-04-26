// Generated from Pokémon GO masterfile — group "codeGateProto", 13 entries.

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

export type CodeGateProtoBattleAccessibilityCodeGate = CodeGateProto<
	"BATTLE_ACCESSIBILITY_CODE_GATE",
	{
		subCodeGateList: {
			isEnabled: true;
			name: "show_move_effectiveness";
		};
	}
>;
export type CodeGateProtoBattleRewardsCodeGate = CodeGateProto<
	"BATTLE_REWARDS_CODE_GATE",
	{
		subCodeGateList: {
			name: "UNLIMITED_PLAYER_ACTIVITY_REWARDS_SUB_CODE_GATE";
		};
	}
>;
export type CodeGateProtoCombatVnextCodeGate = CodeGateProto<
	"COMBAT_VNEXT_CODE_GATE",
	{
		subCodeGateList: {
			isEnabled: true;
			name: "LEADER_VNEXT_CODE_GATE";
		};
	}
>;
export type CodeGateProtoIbfcLwsCodeGate = CodeGateProto<"IBFC_LWS_CODE_GATE", Record<string, never>>;
export type CodeGateProtoInputTrackerCodeGate = CodeGateProto<
	"INPUT_TRACKER_CODE_GATE",
	{
		subCodeGateList: {
			isEnabled: true;
			name: "trade_sub_code_gate";
		};
	}
>;
export type CodeGateProtoIsSkuAvailableNoAppIdCodeGate = CodeGateProto<"IS_SKU_AVAILABLE_NO_APP_ID_CODE_GATE", Record<string, never>>;
export type CodeGateProtoMapThemeLowPerfCodeGate = CodeGateProto<"MAP_THEME_LOW_PERF_CODE_GATE", Record<string, never>>;
export type CodeGateProtoPredictChargeMoveOnSubmitRollBackCodeGate = CodeGateProto<
	"PREDICT_CHARGE_MOVE_ON_SUBMIT_ROLL_BACK_CODE_GATE",
	Record<string, never>
>;
export type CodeGateProtoPushGatewayMultiActionCodeGate = CodeGateProto<"PUSH_GATEWAY_MULTI_ACTION_CODE_GATE", Record<string, never>>;
export type CodeGateProtoStampCollectionSnapshotEnabledCodeGate = CodeGateProto<
	"STAMP_COLLECTION_SNAPSHOT_ENABLED_CODE_GATE",
	Record<string, never>
>;
export type CodeGateProtoTodayViewV3CodeGate = CodeGateProto<"TODAY_VIEW_V3_CODE_GATE", Record<string, never>>;
export type CodeGateProtoUseExtendedSettingsForMaxScaleCodeGate = CodeGateProto<
	"USE_EXTENDED_SETTINGS_FOR_MAX_SCALE_CODE_GATE",
	Record<string, never>
>;
export type CodeGateProtoUseGmtSkuDataCodeGate = CodeGateProto<"USE_GMT_SKU_DATA_CODE_GATE", Record<string, never>>;

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
