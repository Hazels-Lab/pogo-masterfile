// Generated from Pokémon GO masterfile — group "weatherAffinities".

package masterfile

type WeatherAffinities struct {
	PokemonType []string `json:"pokemonType"`
	WeatherCondition string `json:"weatherCondition"`
}

type WeatherAffinitiesEntry struct {
	TemplateID string `json:"templateId"`
	Data       WeatherAffinitiesEntryData `json:"data"`
}

func (WeatherAffinitiesEntry) isMasterfileEntry() {}

type WeatherAffinitiesEntryData struct {
	TemplateID     string `json:"templateId"`
	WeatherAffinities WeatherAffinities `json:"weatherAffinities"`
}
