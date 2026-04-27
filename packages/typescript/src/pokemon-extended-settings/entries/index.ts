// Generated from Pokémon GO masterfile — group "pokemonExtendedSettings" entries barrel.

import type { PokemonExtendedSettingsBaseMasterfileEntry } from "./base";
import type { PokemonExtendedSettingsBreadOverridesMasterfileEntry } from "./bread-overrides";
import type { PokemonExtendedSettingsBreadOverridesFormMasterfileEntry } from "./bread-overrides-form";
import type { PokemonExtendedSettingsBreadOverridesFormTempEvoOverridesMasterfileEntry } from "./bread-overrides-form-temp-evo-overrides";
import type { PokemonExtendedSettingsBreadOverridesTempEvoOverridesMasterfileEntry } from "./bread-overrides-temp-evo-overrides";
import type { PokemonExtendedSettingsFormMasterfileEntry } from "./form";
import type { PokemonExtendedSettingsFormTempEvoOverridesMasterfileEntry } from "./form-temp-evo-overrides";
import type { PokemonExtendedSettingsTempEvoOverridesMasterfileEntry } from "./temp-evo-overrides";

export type * from "./base";
export type * from "./bread-overrides";
export type * from "./bread-overrides-form";
export type * from "./bread-overrides-form-temp-evo-overrides";
export type * from "./bread-overrides-temp-evo-overrides";
export type * from "./form";
export type * from "./form-temp-evo-overrides";
export type * from "./temp-evo-overrides";

export type PokemonExtendedSettingsMasterfileEntry =
	| PokemonExtendedSettingsBaseMasterfileEntry
	| PokemonExtendedSettingsBreadOverridesMasterfileEntry
	| PokemonExtendedSettingsBreadOverridesFormMasterfileEntry
	| PokemonExtendedSettingsBreadOverridesFormTempEvoOverridesMasterfileEntry
	| PokemonExtendedSettingsBreadOverridesTempEvoOverridesMasterfileEntry
	| PokemonExtendedSettingsFormMasterfileEntry
	| PokemonExtendedSettingsFormTempEvoOverridesMasterfileEntry
	| PokemonExtendedSettingsTempEvoOverridesMasterfileEntry;
export type PokemonExtendedSettingsTemplateID = PokemonExtendedSettingsMasterfileEntry["templateId"];
