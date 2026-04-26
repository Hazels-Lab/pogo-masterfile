export interface WeatherAffinities<TemplateID extends string = string, TData extends WeatherAffinitiesData = WeatherAffinitiesData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		weatherAffinities: TData;
	};
}

export interface WeatherAffinitiesData {
	pokemonType?: Array<string>;
	weatherCondition?: string;
}

export type WeatherAffinitiesClear = WeatherAffinities<
	"WEATHER_AFFINITY_CLEAR",
	{
		pokemonType: ["POKEMON_TYPE_GRASS", "POKEMON_TYPE_GROUND", "POKEMON_TYPE_FIRE"];
		weatherCondition: "CLEAR";
	}
>;
export type WeatherAffinitiesFog = WeatherAffinities<
	"WEATHER_AFFINITY_FOG",
	{
		pokemonType: ["POKEMON_TYPE_DARK", "POKEMON_TYPE_GHOST"];
		weatherCondition: "FOG";
	}
>;
export type WeatherAffinitiesOvercast = WeatherAffinities<
	"WEATHER_AFFINITY_OVERCAST",
	{
		pokemonType: ["POKEMON_TYPE_FAIRY", "POKEMON_TYPE_FIGHTING", "POKEMON_TYPE_POISON"];
		weatherCondition: "OVERCAST";
	}
>;
export type WeatherAffinitiesPartlyCloudy = WeatherAffinities<
	"WEATHER_AFFINITY_PARTLY_CLOUDY",
	{
		pokemonType: ["POKEMON_TYPE_NORMAL", "POKEMON_TYPE_ROCK"];
		weatherCondition: "PARTLY_CLOUDY";
	}
>;
export type WeatherAffinitiesRainy = WeatherAffinities<
	"WEATHER_AFFINITY_RAINY",
	{
		pokemonType: ["POKEMON_TYPE_WATER", "POKEMON_TYPE_ELECTRIC", "POKEMON_TYPE_BUG"];
		weatherCondition: "RAINY";
	}
>;
export type WeatherAffinitiesSnow = WeatherAffinities<
	"WEATHER_AFFINITY_SNOW",
	{
		pokemonType: ["POKEMON_TYPE_ICE", "POKEMON_TYPE_STEEL"];
		weatherCondition: "SNOW";
	}
>;
export type WeatherAffinitiesWindy = WeatherAffinities<
	"WEATHER_AFFINITY_WINDY",
	{
		pokemonType: ["POKEMON_TYPE_DRAGON", "POKEMON_TYPE_FLYING", "POKEMON_TYPE_PSYCHIC"];
		weatherCondition: "WINDY";
	}
>;

export type WeatherAffinitiesMasterfileEntry =
	| WeatherAffinitiesClear
	| WeatherAffinitiesFog
	| WeatherAffinitiesOvercast
	| WeatherAffinitiesPartlyCloudy
	| WeatherAffinitiesRainy
	| WeatherAffinitiesSnow
	| WeatherAffinitiesWindy;

export type WeatherAffinitiesTemplateID = WeatherAffinitiesMasterfileEntry["templateId"];
