// Generated from Pokémon GO masterfile — group "pokemonUpgrades".

package pokemon_upgrades

type PokemonUpgrades struct {
	AllowedLevelsAbovePlayer uint64 `json:"allowedLevelsAbovePlayer"`
	CandyCost []uint64 `json:"candyCost"`
	DefaultCpBoostAdditionalLevel uint64 `json:"defaultCpBoostAdditionalLevel"`
	MaxNormalUpgradeLevel uint64 `json:"maxNormalUpgradeLevel"`
	PurifiedCandyMultiplier float64 `json:"purifiedCandyMultiplier"`
	PurifiedStardustMultiplier float64 `json:"purifiedStardustMultiplier"`
	ShadowCandyMultiplier float64 `json:"shadowCandyMultiplier"`
	ShadowStardustMultiplier float64 `json:"shadowStardustMultiplier"`
	StardustCost []uint64 `json:"stardustCost"`
	UpgradesPerLevel uint64 `json:"upgradesPerLevel"`
	XlCandyCost [10]uint64 `json:"xlCandyCost"`
	XlCandyMinPlayerLevel uint64 `json:"xlCandyMinPlayerLevel"`
	XlCandyMinPokemonLevel uint64 `json:"xlCandyMinPokemonLevel"`
}

type PokemonUpgradesEntry struct {
	TemplateID string `json:"templateId"`
	Data       PokemonUpgradesEntryData `json:"data"`
}

func (PokemonUpgradesEntry) MasterfileEntry() {}

type PokemonUpgradesEntryData struct {
	TemplateID     string `json:"templateId"`
	PokemonUpgrades PokemonUpgrades `json:"pokemonUpgrades"`
}
