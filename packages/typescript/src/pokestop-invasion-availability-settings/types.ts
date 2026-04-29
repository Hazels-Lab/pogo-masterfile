// Generated from Pokémon GO masterfile — group "pokestopInvasionAvailabilitySettings", 7 entries (structural types).

import type { W } from "../_utils";

export interface PokestopInvasionAvailabilitySettings<
	TemplateID extends string = string,
	TData extends PokestopInvasionAvailabilitySettingsData = PokestopInvasionAvailabilitySettingsData,
> {
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

export interface PokestopInvasionAvailabilitySettingsData {}

export type InvasionAvailabilitySettings =
	| "INVASION_AVAILABILITY_SETTINGS_FRIDAY"
	| "INVASION_AVAILABILITY_SETTINGS_MONDAY"
	| "INVASION_AVAILABILITY_SETTINGS_SATURDAY"
	| "INVASION_AVAILABILITY_SETTINGS_SUNDAY"
	| "INVASION_AVAILABILITY_SETTINGS_THURSDAY"
	| "INVASION_AVAILABILITY_SETTINGS_TUESDAY"
	| "INVASION_AVAILABILITY_SETTINGS_WEDNESDAY";
