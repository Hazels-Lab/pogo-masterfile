// Generated from Pokémon GO masterfile — group "weatherAffinities", 7 entries (structural types).

import type { W } from "../_utils";
import type { TypeEffectiveTemplateID } from "../type-effective/entries";

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
    pokemonType: Array<TypeEffectiveTemplateID>;
}
