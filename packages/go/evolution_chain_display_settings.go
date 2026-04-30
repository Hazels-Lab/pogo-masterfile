// Generated from Pokémon GO masterfile — group "evolutionChainDisplaySettings".

package masterfile

type EvolutionChainDisplaySettingsEvolutionInfos struct {
	Form    *string `json:"form,omitempty"`
	Gender  *string `json:"gender,omitempty"`
	Pokemon string  `json:"pokemon"`
}

type EvolutionChainDisplaySettingsEvolutionChains struct {
	EvolutionInfos []EvolutionChainDisplaySettingsEvolutionInfos `json:"evolutionInfos"`
	HeaderMessage  *string                                       `json:"headerMessage,omitempty"`
}

type EvolutionChainDisplaySettings struct {
	EvolutionChains []EvolutionChainDisplaySettingsEvolutionChains `json:"evolutionChains,omitempty"`
	Pokemon         string                                         `json:"pokemon"`
}

type EvolutionChainDisplaySettingsEntry struct {
	TemplateID string                                 `json:"templateId"`
	Data       EvolutionChainDisplaySettingsEntryData `json:"data"`
}

func (EvolutionChainDisplaySettingsEntry) isMasterfileEntry() {}

type EvolutionChainDisplaySettingsEntryData struct {
	TemplateID                    string                        `json:"templateId"`
	EvolutionChainDisplaySettings EvolutionChainDisplaySettings `json:"evolutionChainDisplaySettings"`
}
