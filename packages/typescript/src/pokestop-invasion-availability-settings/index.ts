// Generated from Pokémon GO masterfile — group "pokestopInvasionAvailabilitySettings", 7 entries (structural types).

export type * from "./variants";

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

export interface PokestopInvasionAvailabilitySettingsData {}

export type PokestopInvasionAvailabilitySettingsMasterfileEntry =
	| PokestopInvasionAvailabilitySettingsFriday
	| PokestopInvasionAvailabilitySettingsMonday
	| PokestopInvasionAvailabilitySettingsSaturday
	| PokestopInvasionAvailabilitySettingsSunday
	| PokestopInvasionAvailabilitySettingsThursday
	| PokestopInvasionAvailabilitySettingsTuesday
	| PokestopInvasionAvailabilitySettingsWednesday;

export type PokestopInvasionAvailabilitySettingsTemplateID = PokestopInvasionAvailabilitySettingsMasterfileEntry["templateId"];
