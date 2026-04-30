// Generated from Pokémon GO masterfile — group "typeEffective".

package masterfile

type TypeEffective struct {
	AttackScalar [18]float64 `json:"attackScalar"`
	AttackType string `json:"attackType"`
}

type TypeEffectiveEntry struct {
	TemplateID string `json:"templateId"`
	Data       TypeEffectiveEntryData `json:"data"`
}

func (TypeEffectiveEntry) isMasterfileEntry() {}

type TypeEffectiveEntryData struct {
	TemplateID     string `json:"templateId"`
	TypeEffective TypeEffective `json:"typeEffective"`
}
