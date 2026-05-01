// Generated from Pokémon GO masterfile — group "vsSeekerPokemonRewards".

package vs_seeker_pokemon_rewards

type VsSeekerPokemonRewardsRange struct {
	Max uint64 `json:"max"`
	Min uint64 `json:"min"`
}

type VsSeekerPokemonRewardsAttackIvOverride struct {
	Range VsSeekerPokemonRewardsRange `json:"range"`
}

type VsSeekerPokemonRewardsPokemonDisplay struct {
	Form string `json:"form"`
}

type VsSeekerPokemonRewardsPokemon struct {
	PokemonDisplay   VsSeekerPokemonRewardsPokemonDisplay `json:"pokemonDisplay"`
	PokemonId        string                               `json:"pokemonId"`
	ShinyProbability float64                              `json:"shinyProbability"`
}

type VsSeekerPokemonRewardsGuaranteedLimitedPokemonReward struct {
	Identifier                         string                        `json:"identifier"`
	PerCompetitiveCombatSeasonMaxCount uint64                        `json:"perCompetitiveCombatSeasonMaxCount"`
	Pokemon                            VsSeekerPokemonRewardsPokemon `json:"pokemon"`
}

type VsSeekerPokemonRewardsAvailablePokemon struct {
	AttackIvOverride               VsSeekerPokemonRewardsAttackIvOverride               `json:"attackIvOverride"`
	DefenseIvOverride              VsSeekerPokemonRewardsAttackIvOverride               `json:"defenseIvOverride"`
	GuaranteedLimitedPokemonReward VsSeekerPokemonRewardsGuaranteedLimitedPokemonReward `json:"guaranteedLimitedPokemonReward"`
	StaminaIvOverride              VsSeekerPokemonRewardsAttackIvOverride               `json:"staminaIvOverride"`
	UnlockedAtRank                 uint64                                               `json:"unlockedAtRank"`
}

type VsSeekerPokemonRewardsPokemonV2 struct {
	PokemonDisplay VsSeekerPokemonRewardsPokemonDisplay `json:"pokemonDisplay"`
	PokemonId      string                               `json:"pokemonId"`
}

type VsSeekerPokemonRewardsGuaranteedLimitedPokemonRewardV2 struct {
	Identifier       string                          `json:"identifier"`
	LifetimeMaxCount uint64                          `json:"lifetimeMaxCount"`
	Pokemon          VsSeekerPokemonRewardsPokemonV2 `json:"pokemon"`
}

type VsSeekerPokemonRewardsAvailablePokemonV2 struct {
	AttackIvOverride               VsSeekerPokemonRewardsAttackIvOverride                 `json:"attackIvOverride"`
	DefenseIvOverride              VsSeekerPokemonRewardsAttackIvOverride                 `json:"defenseIvOverride"`
	GuaranteedLimitedPokemonReward VsSeekerPokemonRewardsGuaranteedLimitedPokemonRewardV2 `json:"guaranteedLimitedPokemonReward"`
	StaminaIvOverride              VsSeekerPokemonRewardsAttackIvOverride                 `json:"staminaIvOverride"`
	UnlockedAtRank                 uint64                                                 `json:"unlockedAtRank"`
}

type VsSeekerPokemonRewardsAvailablePokemonV3 struct {
	AttackIvOverride  VsSeekerPokemonRewardsAttackIvOverride `json:"attackIvOverride"`
	DefenseIvOverride VsSeekerPokemonRewardsAttackIvOverride `json:"defenseIvOverride"`
	Pokemon           VsSeekerPokemonRewardsPokemonV2        `json:"pokemon"`
	StaminaIvOverride VsSeekerPokemonRewardsAttackIvOverride `json:"staminaIvOverride"`
	UnlockedAtRank    uint64                                 `json:"unlockedAtRank"`
}

type VsSeekerPokemonRewards struct {
	AvailablePokemon []any   `json:"availablePokemon"`
	RewardTrack      *string `json:"rewardTrack,omitempty"`
}

type VsSeekerPokemonRewardsEntry struct {
	TemplateID string                          `json:"templateId"`
	Data       VsSeekerPokemonRewardsEntryData `json:"data"`
}

func (VsSeekerPokemonRewardsEntry) MasterfileEntry() {}

type VsSeekerPokemonRewardsEntryData struct {
	TemplateID             string                 `json:"templateId"`
	VsSeekerPokemonRewards VsSeekerPokemonRewards `json:"vsSeekerPokemonRewards"`
}
