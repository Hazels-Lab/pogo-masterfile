export interface WeatherAffinities<T extends string> {
	templateId: T;
	data: WeatherAffinitiesData<T>;
}

export interface WeatherAffinitiesData<T extends string> {
	templateId: T;
	weatherAffinities: {
		pokemonType: Array<"POKEMON_TYPE_BUG" | "POKEMON_TYPE_DARK" | "POKEMON_TYPE_DRAGON" | "POKEMON_TYPE_ELECTRIC" | "POKEMON_TYPE_FAIRY" | "POKEMON_TYPE_FIGHTING" | "POKEMON_TYPE_FIRE" | "POKEMON_TYPE_FLYING" | "POKEMON_TYPE_GHOST" | "POKEMON_TYPE_GRASS" | "POKEMON_TYPE_GROUND" | "POKEMON_TYPE_ICE" | "POKEMON_TYPE_NORMAL" | "POKEMON_TYPE_POISON" | "POKEMON_TYPE_PSYCHIC" | "POKEMON_TYPE_ROCK" | "POKEMON_TYPE_STEEL" | "POKEMON_TYPE_WATER">;
		weatherCondition: "CLEAR" | "FOG" | "OVERCAST" | "PARTLY_CLOUDY" | "RAINY" | "SNOW" | "WINDY";
	};
}

export type WeatherAffinitiesClear = WeatherAffinities<"WEATHER_AFFINITY_CLEAR">;
export type WeatherAffinitiesFog = WeatherAffinities<"WEATHER_AFFINITY_FOG">;
export type WeatherAffinitiesOvercast = WeatherAffinities<"WEATHER_AFFINITY_OVERCAST">;
export type WeatherAffinitiesPartlyCloudy = WeatherAffinities<"WEATHER_AFFINITY_PARTLY_CLOUDY">;
export type WeatherAffinitiesRainy = WeatherAffinities<"WEATHER_AFFINITY_RAINY">;
export type WeatherAffinitiesSnow = WeatherAffinities<"WEATHER_AFFINITY_SNOW">;
export type WeatherAffinitiesWindy = WeatherAffinities<"WEATHER_AFFINITY_WINDY">;

export type WeatherAffinitiesMasterfileEntry =
	| WeatherAffinitiesClear
	| WeatherAffinitiesFog
	| WeatherAffinitiesOvercast
	| WeatherAffinitiesPartlyCloudy
	| WeatherAffinitiesRainy
	| WeatherAffinitiesSnow
	| WeatherAffinitiesWindy;

export type WeatherAffinitiesTemplateID = WeatherAffinitiesMasterfileEntry["templateId"];
