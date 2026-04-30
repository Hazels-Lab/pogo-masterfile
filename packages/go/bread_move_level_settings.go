// Generated from Pokémon GO masterfile — group "breadMoveLevelSettings".

package masterfile

import "encoding/json"

type BreadMoveLevelSettingsASettings struct {
	CandyCost uint64 `json:"candyCost"`
	MpCost *uint64 `json:"mpCost,omitempty"`
	StardustCost *uint64 `json:"stardustCost,omitempty"`
}

type BreadMoveLevelSettingsASettingsV2 struct {
	CandyCost uint64 `json:"candyCost"`
	MpCost *uint64 `json:"mpCost,omitempty"`
	StardustCost *uint64 `json:"stardustCost,omitempty"`
	XpRewards uint64 `json:"xpRewards"`
}

type BreadMoveLevelSettingsASettingsV3 struct {
	CandyCost *uint64 `json:"candyCost,omitempty"`
	MpCost *uint64 `json:"mpCost,omitempty"`
	StardustCost *uint64 `json:"stardustCost,omitempty"`
	XlCandyCost uint64 `json:"xlCandyCost"`
	XpRewards uint64 `json:"xpRewards"`
}

type BreadMoveLevelSettings struct {
	ASettings []any `json:"aSettings"`
	BSettings []any `json:"bSettings"`
	CSettings []any `json:"cSettings"`
	Group json.RawMessage `json:"group"`
}

type BreadMoveLevelSettingsEntry struct {
	TemplateID string `json:"templateId"`
	Data       BreadMoveLevelSettingsEntryData `json:"data"`
}

func (BreadMoveLevelSettingsEntry) isMasterfileEntry() {}

type BreadMoveLevelSettingsEntryData struct {
	TemplateID     string `json:"templateId"`
	BreadMoveLevelSettings BreadMoveLevelSettings `json:"breadMoveLevelSettings"`
}
