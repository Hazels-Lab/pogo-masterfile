export interface WeatherAffinities<T extends string> {
	templateId: T;
	data: WeatherAffinitiesData<T>;
}

export interface WeatherAffinitiesData<T extends string> {
	templateId: T;
	weatherAffinities: unknown;
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
