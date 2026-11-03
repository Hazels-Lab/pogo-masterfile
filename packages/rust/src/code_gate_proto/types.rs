use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CodeGateProto {
    pub is_enabled: bool,
}

crate::masterfile_entry!(CodeGateProtoEntry, CodeGateProtoEntryData, code_gate_proto: CodeGateProto);
