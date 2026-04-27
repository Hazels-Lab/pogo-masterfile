// Generated from Pokémon GO masterfile — group "codeGateProto", 13 entries (structural types).

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
