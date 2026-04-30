// Generated from Pokémon GO masterfile — group "codeGateProto".

package masterfile

type CodeGateProtoSubCodeGateList struct {
	IsEnabled *bool `json:"isEnabled,omitempty"`
	Name string `json:"name"`
}

type CodeGateProto struct {
	IsEnabled bool `json:"isEnabled"`
	SubCodeGateList *CodeGateProtoSubCodeGateList `json:"subCodeGateList,omitempty"`
}

type CodeGateProtoEntry struct {
	TemplateID string `json:"templateId"`
	Data       CodeGateProtoEntryData `json:"data"`
}

func (CodeGateProtoEntry) isMasterfileEntry() {}

type CodeGateProtoEntryData struct {
	TemplateID     string `json:"templateId"`
	CodeGateProto CodeGateProto `json:"codeGateProto"`
}
