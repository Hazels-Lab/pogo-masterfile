// Generated from Pokémon GO masterfile — group "megaEvoLevelSettings" entries barrel.

import type { MegaEvoLevelSettingsFtueExpirationTimestampLevelMegaEnergyCostToUnlockPokemonIdMasterfileEntry } from "./ftue-expiration-timestamp-level-mega-energy-cost-to-unlock-pokemon-id";
import type { MegaEvoLevelSettingsLevelMasterfileEntry } from "./level";
import type { MegaEvoLevelSettingsLevelPokemonIdMasterfileEntry } from "./level-pokemon-id";
import type { MegaEvoLevelSettingsMiscMasterfileEntry } from "./misc";
import type { MegaEvoLevelSettingsPokemonIdMasterfileEntry } from "./pokemon-id";

export type * from "./ftue-expiration-timestamp-level-mega-energy-cost-to-unlock-pokemon-id";
export type * from "./level";
export type * from "./level-pokemon-id";
export type * from "./misc";
export type * from "./pokemon-id";

export type MegaEvoLevelSettingsMasterfileEntry =
	| MegaEvoLevelSettingsFtueExpirationTimestampLevelMegaEnergyCostToUnlockPokemonIdMasterfileEntry
	| MegaEvoLevelSettingsLevelMasterfileEntry
	| MegaEvoLevelSettingsLevelPokemonIdMasterfileEntry
	| MegaEvoLevelSettingsMiscMasterfileEntry
	| MegaEvoLevelSettingsPokemonIdMasterfileEntry;

export type MegaEvoLevelSettingsTemplateID = MegaEvoLevelSettingsMasterfileEntry["templateId"];
