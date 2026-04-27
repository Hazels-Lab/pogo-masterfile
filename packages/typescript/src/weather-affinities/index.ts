// Generated from Pokémon GO masterfile — group "weatherAffinities", 7 entries (structural types).

export type * from "./variants";

export interface WeatherAffinities<TemplateID extends string = string, TData extends WeatherAffinitiesData = WeatherAffinitiesData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		weatherAffinities: TData & {
			weatherCondition: TemplateID extends `WEATHER_AFFINITY_${infer Rest}` ? Rest : string;
		};
	};
}

export interface WeatherAffinitiesData {
	pokemonType: Array<
		| "POKEMON_TYPE_BUG"
		| "POKEMON_TYPE_DARK"
		| "POKEMON_TYPE_DRAGON"
		| "POKEMON_TYPE_ELECTRIC"
		| "POKEMON_TYPE_FAIRY"
		| "POKEMON_TYPE_FIGHTING"
		| "POKEMON_TYPE_FIRE"
		| "POKEMON_TYPE_FLYING"
		| "POKEMON_TYPE_GHOST"
		| "POKEMON_TYPE_GRASS"
		| "POKEMON_TYPE_GROUND"
		| "POKEMON_TYPE_ICE"
		| "POKEMON_TYPE_NORMAL"
		| "POKEMON_TYPE_POISON"
		| "POKEMON_TYPE_PSYCHIC"
		| "POKEMON_TYPE_ROCK"
		| "POKEMON_TYPE_STEEL"
		| "POKEMON_TYPE_WATER"
	>;
}

export type WeatherAffinitiesMasterfileEntry =
	| WeatherAffinitiesClear
	| WeatherAffinitiesFog
	| WeatherAffinitiesOvercast
	| WeatherAffinitiesPartlyCloudy
	| WeatherAffinitiesRainy
	| WeatherAffinitiesSnow
	| WeatherAffinitiesWindy;

export type WeatherAffinitiesTemplateID = WeatherAffinitiesMasterfileEntry["templateId"];
