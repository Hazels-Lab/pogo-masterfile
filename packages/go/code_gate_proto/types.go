// Generated from Pokémon GO masterfile — group "codeGateProto".

package code_gate_proto

type CodeGateProto struct {
	IsEnabled bool `json:"isEnabled"`
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
