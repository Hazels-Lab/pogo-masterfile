// Generated from Pokémon GO masterfile — group "pokestopInvasionAvailabilitySettings", 7 entries (variant aliases).

import type { S } from "../_utils";
import type { PokestopInvasionAvailabilitySettings } from "./index";

export type PokestopInvasionAvailabilitySettingsFriday = S<PokestopInvasionAvailabilitySettings<"INVASION_AVAILABILITY_SETTINGS_FRIDAY">>;
export type PokestopInvasionAvailabilitySettingsMonday = S<PokestopInvasionAvailabilitySettings<"INVASION_AVAILABILITY_SETTINGS_MONDAY">>;
export type PokestopInvasionAvailabilitySettingsSaturday = S<PokestopInvasionAvailabilitySettings<"INVASION_AVAILABILITY_SETTINGS_SATURDAY">>;
export type PokestopInvasionAvailabilitySettingsSunday = S<PokestopInvasionAvailabilitySettings<"INVASION_AVAILABILITY_SETTINGS_SUNDAY">>;
export type PokestopInvasionAvailabilitySettingsThursday = S<PokestopInvasionAvailabilitySettings<"INVASION_AVAILABILITY_SETTINGS_THURSDAY">>;
export type PokestopInvasionAvailabilitySettingsTuesday = S<PokestopInvasionAvailabilitySettings<"INVASION_AVAILABILITY_SETTINGS_TUESDAY">>;
export type PokestopInvasionAvailabilitySettingsWednesday = S<PokestopInvasionAvailabilitySettings<"INVASION_AVAILABILITY_SETTINGS_WEDNESDAY">>;

export type PokestopInvasionAvailabilitySettingsMasterfileEntry =
	| PokestopInvasionAvailabilitySettingsFriday
	| PokestopInvasionAvailabilitySettingsMonday
	| PokestopInvasionAvailabilitySettingsSaturday
	| PokestopInvasionAvailabilitySettingsSunday
	| PokestopInvasionAvailabilitySettingsThursday
	| PokestopInvasionAvailabilitySettingsTuesday
	| PokestopInvasionAvailabilitySettingsWednesday;

export type PokestopInvasionAvailabilitySettingsTemplateID = PokestopInvasionAvailabilitySettingsMasterfileEntry["templateId"];
