// Generated from Pokémon GO masterfile — group "moveSettings".

package move_settings

import "encoding/json"

type MoveSettings struct {
	AccuracyChance         *float64        `json:"accuracyChance,omitempty"`
	AnimationId            uint64          `json:"animationId"`
	CriticalChance         *float64        `json:"criticalChance,omitempty"`
	DamageWindowEndMs      *uint64         `json:"damageWindowEndMs,omitempty"`
	DamageWindowStartMs    *uint64         `json:"damageWindowStartMs,omitempty"`
	DurationMs             uint64          `json:"durationMs"`
	EnergyDelta            *int64          `json:"energyDelta,omitempty"`
	HealScalar             *float64        `json:"healScalar,omitempty"`
	IsLocked               *bool           `json:"isLocked,omitempty"`
	MovementId             json.RawMessage `json:"movementId"`
	ObMoveSettingsNumber18 *[4]float64     `json:"obMoveSettingsNumber18,omitempty"`
	PokemonType            string          `json:"pokemonType"`
	Power                  *float64        `json:"power,omitempty"`
	StaminaLossScalar      *float64        `json:"staminaLossScalar,omitempty"`
	TrainerLevelMax        *uint64         `json:"trainerLevelMax,omitempty"`
	TrainerLevelMin        *uint64         `json:"trainerLevelMin,omitempty"`
	VfxName                string          `json:"vfxName"`
}

type MoveSettingsEntry struct {
	TemplateID string                `json:"templateId"`
	Data       MoveSettingsEntryData `json:"data"`
}

func (MoveSettingsEntry) MasterfileEntry() {}

type MoveSettingsEntryData struct {
	TemplateID   string       `json:"templateId"`
	MoveSettings MoveSettings `json:"moveSettings"`
}
