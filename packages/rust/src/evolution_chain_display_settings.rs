// Generated from Pokémon GO masterfile — group "evolutionChainDisplaySettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EvolutionChainDisplaySettingsEvolutionChainsEvolutionChainsEvolutionInfos {
    pub form: Option<String>,
    pub gender: Option<String>,
    pub pokemon: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EvolutionChainDisplaySettingsEvolutionChainsEvolutionChains {
    pub evolution_infos: Vec<EvolutionChainDisplaySettingsEvolutionChainsEvolutionChainsEvolutionInfos>,
    pub header_message: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EvolutionChainDisplaySettingsEvolutionChains {
    pub evolution_chains: Vec<EvolutionChainDisplaySettingsEvolutionChainsEvolutionChains>,
    pub pokemon: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EvolutionChainDisplaySettingsMisc {
    pub pokemon: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum EvolutionChainDisplaySettings {
    EvolutionChains(EvolutionChainDisplaySettingsEvolutionChains),
    Misc(EvolutionChainDisplaySettingsMisc),
}
