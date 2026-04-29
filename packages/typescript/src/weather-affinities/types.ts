// Generated from Pokémon GO masterfile — group "weatherAffinities", 7 entries (structural types).

import type { W } from "../_utils";
import type { PokemonType } from "../type-effective/types";

export interface WeatherAffinities<TemplateID extends string = string, TData extends WeatherAffinitiesData = WeatherAffinitiesData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		weatherAffinities: TData & {
			weatherCondition: TemplateID extends `WEATHER_AFFINITY_${infer Rest}` ? Rest : string;
		};
	};
}
export type WeatherAffinitiesType = W<WeatherAffinities>;

export interface WeatherAffinitiesData {
	pokemonType: Array<PokemonType>;
}

export type WeatherAffinity =
	| "WEATHER_AFFINITY_CLEAR"
	| "WEATHER_AFFINITY_FOG"
	| "WEATHER_AFFINITY_OVERCAST"
	| "WEATHER_AFFINITY_PARTLY_CLOUDY"
	| "WEATHER_AFFINITY_RAINY"
	| "WEATHER_AFFINITY_SNOW"
	| "WEATHER_AFFINITY_WINDY";
