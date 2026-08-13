// Generated from Pokémon GO masterfile — group "codeGateProto", 6 entries (variant aliases).

import type { S } from "../../_utils";
import type { CodeGateProto } from "../types";

export type CodeGateProtoArPhotoMultipleConcurrentCampaignCodeGate = S<CodeGateProto<"AR_PHOTO_MULTIPLE_CONCURRENT_CAMPAIGN_CODE_GATE">>;
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
export type CodeGateProtoTodayViewV3CodeGate = S<CodeGateProto<"TODAY_VIEW_V3_CODE_GATE">>;
export type CodeGateProtoUseGmtSkuDataCodeGate = S<CodeGateProto<"USE_GMT_SKU_DATA_CODE_GATE">>;

export type CodeGateProtoMasterfileEntry =
	| CodeGateProtoArPhotoMultipleConcurrentCampaignCodeGate
	| CodeGateProtoCombatVnextCodeGate
	| CodeGateProtoInputTrackerCodeGate
	| CodeGateProtoIsSkuAvailableNoAppIdCodeGate
	| CodeGateProtoTodayViewV3CodeGate
	| CodeGateProtoUseGmtSkuDataCodeGate;

export type CodeGateProtoTemplateID = CodeGateProtoMasterfileEntry["templateId"];
