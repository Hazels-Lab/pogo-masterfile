// Generated from Pokémon GO masterfile — group "pokestopInvasionAvailabilitySettings".

package masterfile

type PokestopInvasionAvailabilitySettings struct {
	AvailabilityEndMinute   string `json:"availabilityEndMinute"`
	AvailabilityStartMinute string `json:"availabilityStartMinute"`
}

type PokestopInvasionAvailabilitySettingsEntry struct {
	TemplateID string                                        `json:"templateId"`
	Data       PokestopInvasionAvailabilitySettingsEntryData `json:"data"`
}

func (PokestopInvasionAvailabilitySettingsEntry) isMasterfileEntry() {}

type PokestopInvasionAvailabilitySettingsEntryData struct {
	TemplateID                           string                               `json:"templateId"`
	PokestopInvasionAvailabilitySettings PokestopInvasionAvailabilitySettings `json:"pokestopInvasionAvailabilitySettings"`
}
