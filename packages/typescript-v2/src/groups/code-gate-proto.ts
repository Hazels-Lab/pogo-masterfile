export interface CodeGateProto<T extends string> {
	templateId: T;
	data: CodeGateProtoData<T>;
}

export interface CodeGateProtoData<T extends string> {
	templateId: T;
	codeGateProto: {
		isEnabled: true;
		subCodeGateList?: {
			isEnabled?: true;
			name: "LEADER_VNEXT_CODE_GATE" | "show_move_effectiveness" | "trade_sub_code_gate" | "UNLIMITED_PLAYER_ACTIVITY_REWARDS_SUB_CODE_GATE";
		};
	};
}

export type CodeGateProtoBattleAccessibilityCodeGate = CodeGateProto<"BATTLE_ACCESSIBILITY_CODE_GATE">;
export type CodeGateProtoBattleRewardsCodeGate = CodeGateProto<"BATTLE_REWARDS_CODE_GATE">;
export type CodeGateProtoCombatVnextCodeGate = CodeGateProto<"COMBAT_VNEXT_CODE_GATE">;
export type CodeGateProtoIbfcLwsCodeGate = CodeGateProto<"IBFC_LWS_CODE_GATE">;
export type CodeGateProtoInputTrackerCodeGate = CodeGateProto<"INPUT_TRACKER_CODE_GATE">;
export type CodeGateProtoIsSkuAvailableNoAppIdCodeGate = CodeGateProto<"IS_SKU_AVAILABLE_NO_APP_ID_CODE_GATE">;
export type CodeGateProtoMapThemeLowPerfCodeGate = CodeGateProto<"MAP_THEME_LOW_PERF_CODE_GATE">;
export type CodeGateProtoPredictChargeMoveOnSubmitRollBackCodeGate = CodeGateProto<"PREDICT_CHARGE_MOVE_ON_SUBMIT_ROLL_BACK_CODE_GATE">;
export type CodeGateProtoPushGatewayMultiActionCodeGate = CodeGateProto<"PUSH_GATEWAY_MULTI_ACTION_CODE_GATE">;
export type CodeGateProtoStampCollectionSnapshotEnabledCodeGate = CodeGateProto<"STAMP_COLLECTION_SNAPSHOT_ENABLED_CODE_GATE">;
export type CodeGateProtoTodayViewV3CodeGate = CodeGateProto<"TODAY_VIEW_V3_CODE_GATE">;
export type CodeGateProtoUseExtendedSettingsForMaxScaleCodeGate = CodeGateProto<"USE_EXTENDED_SETTINGS_FOR_MAX_SCALE_CODE_GATE">;
export type CodeGateProtoUseGmtSkuDataCodeGate = CodeGateProto<"USE_GMT_SKU_DATA_CODE_GATE">;

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
