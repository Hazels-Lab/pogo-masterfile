// Generated from Pokémon GO masterfile — group "combatRankingProtoSettings".

package combat_ranking_proto_settings

type CombatRankingProtoSettingsRankLevel struct {
	AdditionalTotalBattlesRequired *uint64 `json:"additionalTotalBattlesRequired,omitempty"`
	AdditionalWinsRequired         *uint64 `json:"additionalWinsRequired,omitempty"`
	MinRatingRequired              *uint64 `json:"minRatingRequired,omitempty"`
	RankLevel                      uint64  `json:"rankLevel"`
}

type CombatRankingProtoSettingsRequiredForRewards struct {
	AdditionalTotalBattlesRequired uint64 `json:"additionalTotalBattlesRequired"`
	RankLevel                      uint64 `json:"rankLevel"`
}

type CombatRankingProtoSettings struct {
	MinRankToDisplayRating uint64                                       `json:"minRankToDisplayRating"`
	MinRatingRequired      *uint64                                      `json:"minRatingRequired,omitempty"`
	RankLevel              []CombatRankingProtoSettingsRankLevel        `json:"rankLevel"`
	RequiredForRewards     CombatRankingProtoSettingsRequiredForRewards `json:"requiredForRewards"`
}

type CombatRankingProtoSettingsEntry struct {
	TemplateID string                              `json:"templateId"`
	Data       CombatRankingProtoSettingsEntryData `json:"data"`
}

func (CombatRankingProtoSettingsEntry) MasterfileEntry() {}

type CombatRankingProtoSettingsEntryData struct {
	TemplateID                 string                     `json:"templateId"`
	CombatRankingProtoSettings CombatRankingProtoSettings `json:"combatRankingProtoSettings"`
}
