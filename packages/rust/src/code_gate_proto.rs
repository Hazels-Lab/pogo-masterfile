// Generated from Pokémon GO masterfile — group "codeGateProto".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CodeGateProtoMisc {
    pub is_enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CodeGateProtoSubCodeGateListSubCodeGateList {
    pub is_enabled: Option<bool>,
    pub name: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CodeGateProtoSubCodeGateList {
    pub is_enabled: bool,
    pub sub_code_gate_list: CodeGateProtoSubCodeGateListSubCodeGateList,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CodeGateProto {
    Misc(CodeGateProtoMisc),
    SubCodeGateList(CodeGateProtoSubCodeGateList),
}
