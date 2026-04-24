export interface PokestopInvasionAvailabilitySettings<TemplateID extends string> {
	templateId: TemplateID;
	data: PokestopInvasionAvailabilitySettingsData<TemplateID>;
}

export interface PokestopInvasionAvailabilitySettingsData<TemplateID extends string> {
	templateId: TemplateID;
	pokestopInvasionAvailabilitySettings: {
		availabilityEndMinute: "1320";
		availabilityStartMinute: "360";
	};
}

export type PokestopInvasionAvailabilitySettingsFriday = PokestopInvasionAvailabilitySettings<"INVASION_AVAILABILITY_SETTINGS_FRIDAY">;
export type PokestopInvasionAvailabilitySettingsMonday = PokestopInvasionAvailabilitySettings<"INVASION_AVAILABILITY_SETTINGS_MONDAY">;
export type PokestopInvasionAvailabilitySettingsSaturday = PokestopInvasionAvailabilitySettings<"INVASION_AVAILABILITY_SETTINGS_SATURDAY">;
export type PokestopInvasionAvailabilitySettingsSunday = PokestopInvasionAvailabilitySettings<"INVASION_AVAILABILITY_SETTINGS_SUNDAY">;
export type PokestopInvasionAvailabilitySettingsThursday = PokestopInvasionAvailabilitySettings<"INVASION_AVAILABILITY_SETTINGS_THURSDAY">;
export type PokestopInvasionAvailabilitySettingsTuesday = PokestopInvasionAvailabilitySettings<"INVASION_AVAILABILITY_SETTINGS_TUESDAY">;
export type PokestopInvasionAvailabilitySettingsWednesday = PokestopInvasionAvailabilitySettings<"INVASION_AVAILABILITY_SETTINGS_WEDNESDAY">;

export type PokestopInvasionAvailabilitySettingsMasterfileEntry =
	| PokestopInvasionAvailabilitySettingsFriday
	| PokestopInvasionAvailabilitySettingsMonday
	| PokestopInvasionAvailabilitySettingsSaturday
	| PokestopInvasionAvailabilitySettingsSunday
	| PokestopInvasionAvailabilitySettingsThursday
	| PokestopInvasionAvailabilitySettingsTuesday
	| PokestopInvasionAvailabilitySettingsWednesday;

export type PokestopInvasionAvailabilitySettingsTemplateID = PokestopInvasionAvailabilitySettingsMasterfileEntry["templateId"];
