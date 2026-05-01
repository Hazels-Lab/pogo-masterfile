// Generated from Pokémon GO masterfile — group "weatherAffinities".

package weather_affinities

type WeatherAffinities struct {
	PokemonType      []string `json:"pokemonType"`
	WeatherCondition string   `json:"weatherCondition"`
}

type WeatherAffinitiesEntry struct {
	TemplateID string                     `json:"templateId"`
	Data       WeatherAffinitiesEntryData `json:"data"`
}

func (WeatherAffinitiesEntry) MasterfileEntry() {}

type WeatherAffinitiesEntryData struct {
	TemplateID        string            `json:"templateId"`
	WeatherAffinities WeatherAffinities `json:"weatherAffinities"`
}
