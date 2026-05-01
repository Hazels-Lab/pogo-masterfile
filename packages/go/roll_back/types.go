// Generated from Pokémon GO masterfile — group "rollBack".

package roll_back

type RollBack struct {
	RollbackPercentage uint64 `json:"rollbackPercentage"`
}

type RollBackEntry struct {
	TemplateID string            `json:"templateId"`
	Data       RollBackEntryData `json:"data"`
}

func (RollBackEntry) MasterfileEntry() {}

type RollBackEntryData struct {
	TemplateID string   `json:"templateId"`
	RollBack   RollBack `json:"rollBack"`
}
