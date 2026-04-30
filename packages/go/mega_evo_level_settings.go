// Generated from Pokémon GO masterfile — group "megaEvoLevelSettings".

package masterfile

type MegaEvoLevelSettingsCooldown struct {
	BypassCostInitial uint64 `json:"bypassCostInitial"`
	BypassCostRoundingValue uint64 `json:"bypassCostRoundingValue"`
	DurationMs string `json:"durationMs"`
}

type MegaEvoLevelSettingsEffects struct {
	DifferentTypeAttackBoost float64 `json:"differentTypeAttackBoost"`
	SameTypeAttackBoost float64 `json:"sameTypeAttackBoost"`
	SameTypeExtraCatchCandy uint64 `json:"sameTypeExtraCatchCandy"`
	SameTypeExtraCatchCandyXlChance *float64 `json:"sameTypeExtraCatchCandyXlChance,omitempty"`
	SameTypeExtraCatchXp *uint64 `json:"sameTypeExtraCatchXp,omitempty"`
	SelfCpBoostAdditionalLevel *uint64 `json:"selfCpBoostAdditionalLevel,omitempty"`
}

type MegaEvoLevelSettingsProgression struct {
	PointsLimitPerPeriod uint64 `json:"pointsLimitPerPeriod"`
	PointsPerMegaEvoAction uint64 `json:"pointsPerMegaEvoAction"`
	PointsRequired *uint64 `json:"pointsRequired,omitempty"`
}

type MegaEvoLevelSettings struct {
	Cooldown MegaEvoLevelSettingsCooldown `json:"cooldown"`
	Effects MegaEvoLevelSettingsEffects `json:"effects"`
	FtueExpirationTimestamp *string `json:"ftueExpirationTimestamp,omitempty"`
	Level *uint64 `json:"level,omitempty"`
	MegaEnergyCostToUnlock *uint64 `json:"megaEnergyCostToUnlock,omitempty"`
	PokemonId *string `json:"pokemonId,omitempty"`
	Progression MegaEvoLevelSettingsProgression `json:"progression"`
}

type MegaEvoLevelSettingsEntry struct {
	TemplateID string `json:"templateId"`
	Data       MegaEvoLevelSettingsEntryData `json:"data"`
}

func (MegaEvoLevelSettingsEntry) isMasterfileEntry() {}

type MegaEvoLevelSettingsEntryData struct {
	TemplateID     string `json:"templateId"`
	MegaEvoLevelSettings MegaEvoLevelSettings `json:"megaEvoLevelSettings"`
}
