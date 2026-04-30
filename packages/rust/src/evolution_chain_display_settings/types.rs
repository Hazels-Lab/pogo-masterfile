use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EvolutionInfos {
    pub form: Option<String>,
    pub gender: Option<String>,
    pub pokemon: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EvolutionChainsV2 {
    pub evolution_infos: Vec<EvolutionInfos>,
    pub header_message: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EvolutionChains {
    pub evolution_chains: Vec<EvolutionChainsV2>,
    pub pokemon: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Misc {
    pub pokemon: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum EvolutionChainDisplaySettings {
    EvolutionChains(EvolutionChains),
    Misc(Misc),
}

crate::masterfile_entry!(EvolutionChainDisplaySettingsEntry, EvolutionChainDisplaySettingsEntryData, evolution_chain_display_settings: EvolutionChainDisplaySettings);
