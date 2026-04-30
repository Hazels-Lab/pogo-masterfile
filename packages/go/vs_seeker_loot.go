// Generated from Pokémon GO masterfile — group "vsSeekerLoot".

package masterfile

type VsSeekerLootItem struct {
	Count    uint64  `json:"count"`
	Item     *string `json:"item,omitempty"`
	Stardust *bool   `json:"stardust,omitempty"`
}

type VsSeekerLootReward struct {
	Item                      *VsSeekerLootItem `json:"item,omitempty"`
	ItemRankingLootTableCount *uint64           `json:"itemRankingLootTableCount,omitempty"`
	PokemonReward             *bool             `json:"pokemonReward,omitempty"`
}

type VsSeekerLoot struct {
	RankLevel   uint64                `json:"rankLevel"`
	Reward      [5]VsSeekerLootReward `json:"reward"`
	RewardTrack *string               `json:"rewardTrack,omitempty"`
}

type VsSeekerLootEntry struct {
	TemplateID string                `json:"templateId"`
	Data       VsSeekerLootEntryData `json:"data"`
}

func (VsSeekerLootEntry) isMasterfileEntry() {}

type VsSeekerLootEntryData struct {
	TemplateID   string       `json:"templateId"`
	VsSeekerLoot VsSeekerLoot `json:"vsSeekerLoot"`
}
