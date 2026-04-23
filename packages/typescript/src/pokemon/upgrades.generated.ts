/* eslint-disable */
// Auto-generated from GAME_MASTER.json
// Do not edit by hand.
// Group: pokemon/upgrades
// Filters: all
// Entries emitted: 2

export interface Pokemon_upgrade_override_settings_v0890_pokemon_eternatusdatapokemonupgrades {
  allowedLevelsAbovePlayer: number;
  candyCost: (number)[];
  defaultCpBoostAdditionalLevel: number;
  maxNormalUpgradeLevel: number;
  purifiedCandyMultiplier: number;
  purifiedStardustMultiplier: number;
  shadowCandyMultiplier: number;
  shadowStardustMultiplier: number;
  stardustCost: (number)[];
  upgradesPerLevel: number;
  xlCandyCost: (number)[];
  xlCandyMinPlayerLevel: number;
  xlCandyMinPokemonLevel: number;
}
export interface Pokemon_upgrade_override_settings_v0890_pokemon_eternatusdata {
  pokemonUpgrades: Pokemon_upgrade_override_settings_v0890_pokemon_eternatusdatapokemonupgrades;
  templateId: string;
}
export interface Pokemon_upgrade_override_settings_v0890_pokemon_eternatusEntry {
  templateId: "POKEMON_UPGRADE_OVERRIDE_SETTINGS_V0890_POKEMON_ETERNATUS";
  data: Pokemon_upgrade_override_settings_v0890_pokemon_eternatusdata;
}
export interface Pokemon_upgrade_settingsEntry {
  templateId: "POKEMON_UPGRADE_SETTINGS";
  data: Pokemon_upgrade_override_settings_v0890_pokemon_eternatusdata;
}

export interface PokemonUpgradesMasterfileByTemplateId {
  "POKEMON_UPGRADE_OVERRIDE_SETTINGS_V0890_POKEMON_ETERNATUS": Pokemon_upgrade_override_settings_v0890_pokemon_eternatusEntry;
  "POKEMON_UPGRADE_SETTINGS": Pokemon_upgrade_settingsEntry;
}

export type PokemonUpgradesMasterfileEntry = Pokemon_upgrade_override_settings_v0890_pokemon_eternatusEntry | Pokemon_upgrade_settingsEntry;
