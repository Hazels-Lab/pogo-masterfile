// Generated from Pokémon GO masterfile — group "pokestopInvasionAvailabilitySettings", 7 entries.

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

export type PokestopInvasionAvailabilitySettingsFriday = PokestopInvasionAvailabilitySettings<
	"INVASION_AVAILABILITY_SETTINGS_FRIDAY",
	Record<string, never>
>;
export type PokestopInvasionAvailabilitySettingsMonday = PokestopInvasionAvailabilitySettings<
	"INVASION_AVAILABILITY_SETTINGS_MONDAY",
	Record<string, never>
>;
export type PokestopInvasionAvailabilitySettingsSaturday = PokestopInvasionAvailabilitySettings<
	"INVASION_AVAILABILITY_SETTINGS_SATURDAY",
	Record<string, never>
>;
export type PokestopInvasionAvailabilitySettingsSunday = PokestopInvasionAvailabilitySettings<
	"INVASION_AVAILABILITY_SETTINGS_SUNDAY",
	Record<string, never>
>;
export type PokestopInvasionAvailabilitySettingsThursday = PokestopInvasionAvailabilitySettings<
	"INVASION_AVAILABILITY_SETTINGS_THURSDAY",
	Record<string, never>
>;
export type PokestopInvasionAvailabilitySettingsTuesday = PokestopInvasionAvailabilitySettings<
	"INVASION_AVAILABILITY_SETTINGS_TUESDAY",
	Record<string, never>
>;
export type PokestopInvasionAvailabilitySettingsWednesday = PokestopInvasionAvailabilitySettings<
	"INVASION_AVAILABILITY_SETTINGS_WEDNESDAY",
	Record<string, never>
>;

export type PokestopInvasionAvailabilitySettingsMasterfileEntry =
	| PokestopInvasionAvailabilitySettingsFriday
	| PokestopInvasionAvailabilitySettingsMonday
	| PokestopInvasionAvailabilitySettingsSaturday
	| PokestopInvasionAvailabilitySettingsSunday
	| PokestopInvasionAvailabilitySettingsThursday
	| PokestopInvasionAvailabilitySettingsTuesday
	| PokestopInvasionAvailabilitySettingsWednesday;

export type PokestopInvasionAvailabilitySettingsTemplateID = PokestopInvasionAvailabilitySettingsMasterfileEntry["templateId"];
