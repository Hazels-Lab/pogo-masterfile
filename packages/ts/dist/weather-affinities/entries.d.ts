// Generated from Pokémon GO masterfile — group "weatherAffinities", 7 entries (variant aliases).

import type { S } from "../_utils";
import type { WeatherAffinities, WeatherAffinitiesData } from "./index";

export type WeatherAffinitiesClear = S<WeatherAffinities<"WEATHER_AFFINITY_CLEAR", {
    pokemonType: [
        "POKEMON_TYPE_GRASS",
        "POKEMON_TYPE_GROUND",
        "POKEMON_TYPE_FIRE"
    ];
}>>;
export type WeatherAffinitiesFog = S<WeatherAffinities<"WEATHER_AFFINITY_FOG", {
    pokemonType: [
        "POKEMON_TYPE_DARK",
        "POKEMON_TYPE_GHOST"
    ];
}>>;
export type WeatherAffinitiesOvercast = S<WeatherAffinities<"WEATHER_AFFINITY_OVERCAST", {
    pokemonType: [
        "POKEMON_TYPE_FAIRY",
        "POKEMON_TYPE_FIGHTING",
        "POKEMON_TYPE_POISON"
    ];
}>>;
export type WeatherAffinitiesPartlyCloudy = S<WeatherAffinities<"WEATHER_AFFINITY_PARTLY_CLOUDY", {
    pokemonType: [
        "POKEMON_TYPE_NORMAL",
        "POKEMON_TYPE_ROCK"
    ];
}>>;
export type WeatherAffinitiesRainy = S<WeatherAffinities<"WEATHER_AFFINITY_RAINY", {
    pokemonType: [
        "POKEMON_TYPE_WATER",
        "POKEMON_TYPE_ELECTRIC",
        "POKEMON_TYPE_BUG"
    ];
}>>;
export type WeatherAffinitiesSnow = S<WeatherAffinities<"WEATHER_AFFINITY_SNOW", {
    pokemonType: [
        "POKEMON_TYPE_ICE",
        "POKEMON_TYPE_STEEL"
    ];
}>>;
export type WeatherAffinitiesWindy = S<WeatherAffinities<"WEATHER_AFFINITY_WINDY", {
    pokemonType: [
        "POKEMON_TYPE_DRAGON",
        "POKEMON_TYPE_FLYING",
        "POKEMON_TYPE_PSYCHIC"
    ];
}>>;

export type WeatherAffinitiesMasterfileEntry = WeatherAffinitiesClear | WeatherAffinitiesFog | WeatherAffinitiesOvercast | WeatherAffinitiesPartlyCloudy | WeatherAffinitiesRainy | WeatherAffinitiesSnow | WeatherAffinitiesWindy;

export type WeatherAffinitiesTemplateID = WeatherAffinitiesMasterfileEntry["templateId"];
