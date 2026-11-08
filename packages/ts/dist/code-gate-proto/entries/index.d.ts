// Generated from Pokémon GO masterfile — group "codeGateProto", 4 entries (variant aliases).

import type { S } from "../../_utils";
import type { CodeGateProto } from "../types";

export type CodeGateProtoIsSkuAvailableNoAppIdCodeGate = S<CodeGateProto<"IS_SKU_AVAILABLE_NO_APP_ID_CODE_GATE">>;
export type CodeGateProtoPokemonLevelCeilingCodeGate = S<CodeGateProto<"POKEMON_LEVEL_CEILING_CODE_GATE">>;
export type CodeGateProtoSoftSfidaForegroundDescriptionTextCodeGate = S<CodeGateProto<"SOFT_SFIDA_FOREGROUND_DESCRIPTION_TEXT_CODE_GATE">>;
export type CodeGateProtoUseGmtSkuDataCodeGate = S<CodeGateProto<"USE_GMT_SKU_DATA_CODE_GATE">>;

export type CodeGateProtoMasterfileEntry =
	| CodeGateProtoIsSkuAvailableNoAppIdCodeGate
	| CodeGateProtoPokemonLevelCeilingCodeGate
	| CodeGateProtoSoftSfidaForegroundDescriptionTextCodeGate
	| CodeGateProtoUseGmtSkuDataCodeGate;

export type CodeGateProtoTemplateID = CodeGateProtoMasterfileEntry["templateId"];
