// Generated from Pokémon GO masterfile — group "pokestopInvasionAvailabilitySettings".

package pokestop_invasion_availability_settings

type PokestopInvasionAvailabilitySettings struct {
	AvailabilityEndMinute string `json:"availabilityEndMinute"`
	AvailabilityStartMinute string `json:"availabilityStartMinute"`
}

type PokestopInvasionAvailabilitySettingsEntry struct {
	TemplateID string `json:"templateId"`
	Data       PokestopInvasionAvailabilitySettingsEntryData `json:"data"`
}

func (PokestopInvasionAvailabilitySettingsEntry) MasterfileEntry() {}

type PokestopInvasionAvailabilitySettingsEntryData struct {
	TemplateID     string `json:"templateId"`
	PokestopInvasionAvailabilitySettings PokestopInvasionAvailabilitySettings `json:"pokestopInvasionAvailabilitySettings"`
}
