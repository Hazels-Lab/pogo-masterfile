// Generated from Pokémon GO masterfile — group "codeGateProto".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Misc {
    pub is_enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SubCodeGateListV2 {
    pub is_enabled: Option<bool>,
    pub name: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SubCodeGateList {
    pub is_enabled: bool,
    pub sub_code_gate_list: SubCodeGateListV2,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CodeGateProto {
    Misc(Misc),
    SubCodeGateList(SubCodeGateList),
}

crate::masterfile_entry!(CodeGateProtoEntry, CodeGateProtoEntryData, code_gate_proto: CodeGateProto);
