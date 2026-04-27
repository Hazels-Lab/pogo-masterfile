// Generated from Pokémon GO masterfile — group "megaEvoLevelSettings" entries barrel.

import type { MegaEvoLevelSettingsBaseMasterfileEntry } from "./base";
import type { MegaEvoLevelSettingsFtueExpirationTimestampLevelMegaEnergyCostToUnlockPokemonIdMasterfileEntry } from "./ftue-expiration-timestamp-level-mega-energy-cost-to-unlock-pokemon-id";
import type { MegaEvoLevelSettingsLevelMasterfileEntry } from "./level";
import type { MegaEvoLevelSettingsLevelPokemonIdMasterfileEntry } from "./level-pokemon-id";
import type { MegaEvoLevelSettingsPokemonIdMasterfileEntry } from "./pokemon-id";

export type * from "./base";
export type * from "./ftue-expiration-timestamp-level-mega-energy-cost-to-unlock-pokemon-id";
export type * from "./level";
export type * from "./level-pokemon-id";
export type * from "./pokemon-id";

export type MegaEvoLevelSettingsMasterfileEntry =
	| MegaEvoLevelSettingsBaseMasterfileEntry
	| MegaEvoLevelSettingsFtueExpirationTimestampLevelMegaEnergyCostToUnlockPokemonIdMasterfileEntry
	| MegaEvoLevelSettingsLevelMasterfileEntry
	| MegaEvoLevelSettingsLevelPokemonIdMasterfileEntry
	| MegaEvoLevelSettingsPokemonIdMasterfileEntry;
export type MegaEvoLevelSettingsTemplateID = MegaEvoLevelSettingsMasterfileEntry["templateId"];
