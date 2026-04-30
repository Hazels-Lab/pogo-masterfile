// Generated from Pokémon GO masterfile — group "pokestopInvasionAvailabilitySettings", 7 entries (structural types).

import type { W } from "../_utils";

export interface PokestopInvasionAvailabilitySettings<TemplateID extends string = string, TData extends PokestopInvasionAvailabilitySettingsData = PokestopInvasionAvailabilitySettingsData> {
    templateId: TemplateID;
    data: {
        templateId: TemplateID;
        pokestopInvasionAvailabilitySettings: TData & {
            availabilityEndMinute: "1320";
            availabilityStartMinute: "360";
        };
    };
}
export type PokestopInvasionAvailabilitySettingsType = W<PokestopInvasionAvailabilitySettings>;

export interface PokestopInvasionAvailabilitySettingsData {
}
