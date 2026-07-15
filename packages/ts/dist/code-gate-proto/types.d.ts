// Generated from Pokémon GO masterfile — group "codeGateProto", 11 entries (structural types).

import type { W } from "../_utils";

export interface CodeGateProto<TemplateID extends string = string, TData extends CodeGateProtoData = CodeGateProtoData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		codeGateProto: TData & {
			isEnabled: true;
		};
	};
}
export type CodeGateProtoType = W<CodeGateProto>;

export interface CodeGateProtoData {
	subCodeGateList?: {
		isEnabled: boolean;
		name: "LEADER_VNEXT_CODE_GATE" | "show_move_effectiveness" | "trade_sub_code_gate";
	};
}
