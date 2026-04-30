// Generated from Pokémon GO masterfile — group "combatLeague".

package masterfile

type CombatLeaguePokemon struct {
	Forms []string `json:"forms,omitempty"`
	Id string `json:"id"`
}

type CombatLeaguePokemonBanList struct {
	Pokemon []CombatLeaguePokemon `json:"pokemon"`
}

type CombatLeaguePokemonCaughtTimestamp struct {
	AfterTimestamp string `json:"afterTimestamp"`
	BeforeTimestamp string `json:"beforeTimestamp"`
}

type CombatLeaguePokemonLevelRange struct {
	MaxLevel uint64 `json:"maxLevel"`
}

type CombatLeaguePokemonV2 struct {
	Form *string `json:"form,omitempty"`
	Forms []string `json:"forms,omitempty"`
	Id string `json:"id"`
}

type CombatLeaguePokemonWhiteList struct {
	Pokemon []CombatLeaguePokemonV2 `json:"pokemon"`
}

type CombatLeagueWithPokemonCpLimit struct {
	MaxCp uint64 `json:"maxCp"`
}

type CombatLeagueWithPokemonType struct {
	PokemonType []string `json:"pokemonType"`
}

type CombatLeaguePokemonCondition struct {
	PokemonBanList *CombatLeaguePokemonBanList `json:"pokemonBanList,omitempty"`
	PokemonCaughtTimestamp *CombatLeaguePokemonCaughtTimestamp `json:"pokemonCaughtTimestamp,omitempty"`
	PokemonLevelRange *CombatLeaguePokemonLevelRange `json:"pokemonLevelRange,omitempty"`
	PokemonWhiteList *CombatLeaguePokemonWhiteList `json:"pokemonWhiteList,omitempty"`
	Type string `json:"type"`
	WithPokemonCpLimit *CombatLeagueWithPokemonCpLimit `json:"withPokemonCpLimit,omitempty"`
	WithPokemonType *CombatLeagueWithPokemonType `json:"withPokemonType,omitempty"`
}

type CombatLeagueWithPokemonCpLimitV2 struct {
	MaxCp uint64 `json:"maxCp"`
	MinCp uint64 `json:"minCp"`
}

type CombatLeagueUnlockCondition struct {
	MinPokemonCount uint64 `json:"minPokemonCount"`
	Type string `json:"type"`
	WithPokemonCpLimit *CombatLeagueWithPokemonCpLimitV2 `json:"withPokemonCpLimit,omitempty"`
}

type CombatLeague struct {
	AllowTempEvos *bool `json:"allowTempEvos,omitempty"`
	BadgeType string `json:"badgeType"`
	BannedPokemon []string `json:"bannedPokemon,omitempty"`
	BattlePartyCombatLeagueTemplateId *string `json:"battlePartyCombatLeagueTemplateId,omitempty"`
	Enabled bool `json:"enabled"`
	IconUrl string `json:"iconUrl"`
	LeagueType string `json:"leagueType"`
	PokemonCondition []CombatLeaguePokemonCondition `json:"pokemonCondition"`
	PokemonCount uint64 `json:"pokemonCount"`
	Title string `json:"title"`
	UnlockCondition *[1]CombatLeagueUnlockCondition `json:"unlockCondition,omitempty"`
}

type CombatLeagueEntry struct {
	TemplateID string `json:"templateId"`
	Data       CombatLeagueEntryData `json:"data"`
}

func (CombatLeagueEntry) isMasterfileEntry() {}

type CombatLeagueEntryData struct {
	TemplateID     string `json:"templateId"`
	CombatLeague CombatLeague `json:"combatLeague"`
}
