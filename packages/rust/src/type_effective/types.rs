use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeEffective {
    pub attack_scalar: [f64; 18],
    pub attack_type: String,
}

crate::masterfile_entry!(TypeEffectiveEntry, TypeEffectiveEntryData, type_effective: TypeEffective);
