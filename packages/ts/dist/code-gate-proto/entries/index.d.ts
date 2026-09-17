// Generated from Pokémon GO masterfile — group "codeGateProto", 4 entries (variant aliases).

import type { S } from "../../_utils";
import type { CodeGateProto } from "../types";

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
export type CodeGateProtoIsSkuAvailableNoAppIdCodeGate = S<CodeGateProto<"IS_SKU_AVAILABLE_NO_APP_ID_CODE_GATE">>;
export type CodeGateProtoTodayViewV3CodeGate = S<CodeGateProto<"TODAY_VIEW_V3_CODE_GATE">>;
export type CodeGateProtoUseGmtSkuDataCodeGate = S<CodeGateProto<"USE_GMT_SKU_DATA_CODE_GATE">>;

export type CodeGateProtoMasterfileEntry =
	| CodeGateProtoCombatVnextCodeGate
	| CodeGateProtoIsSkuAvailableNoAppIdCodeGate
	| CodeGateProtoTodayViewV3CodeGate
	| CodeGateProtoUseGmtSkuDataCodeGate;

export type CodeGateProtoTemplateID = CodeGateProtoMasterfileEntry["templateId"];
