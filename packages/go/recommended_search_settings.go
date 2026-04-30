// Generated from Pokémon GO masterfile — group "recommendedSearchSettings".

package masterfile

type RecommendedSearchSettings struct {
	AppendSearchString *string `json:"appendSearchString,omitempty"`
	SearchKey          *string `json:"searchKey,omitempty"`
	SearchLabel        string  `json:"searchLabel"`
}

type RecommendedSearchSettingsEntry struct {
	TemplateID string                             `json:"templateId"`
	Data       RecommendedSearchSettingsEntryData `json:"data"`
}

func (RecommendedSearchSettingsEntry) isMasterfileEntry() {}

type RecommendedSearchSettingsEntryData struct {
	TemplateID                string                    `json:"templateId"`
	RecommendedSearchSettings RecommendedSearchSettings `json:"recommendedSearchSettings"`
}
