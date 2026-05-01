// Generated from Pokémon GO masterfile — group "codeGateProto".

package code_gate_proto

type CodeGateProtoSubCodeGateList struct {
	IsEnabled *bool  `json:"isEnabled,omitempty"`
	Name      string `json:"name"`
}

type CodeGateProto struct {
	IsEnabled       bool                          `json:"isEnabled"`
	SubCodeGateList *CodeGateProtoSubCodeGateList `json:"subCodeGateList,omitempty"`
}

type CodeGateProtoEntry struct {
	TemplateID string                 `json:"templateId"`
	Data       CodeGateProtoEntryData `json:"data"`
}

func (CodeGateProtoEntry) MasterfileEntry() {}

type CodeGateProtoEntryData struct {
	TemplateID    string        `json:"templateId"`
	CodeGateProto CodeGateProto `json:"codeGateProto"`
}
