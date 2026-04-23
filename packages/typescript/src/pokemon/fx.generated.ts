/* eslint-disable */
// Auto-generated from GAME_MASTER.json
// Do not edit by hand.
// Group: pokemon/fx
// Filters: all
// Entries emitted: 1

export interface Pokemon_fx_settingsdatapokemonfxsettings {
  hidingInPhoto: boolean;
}
export interface Pokemon_fx_settingsdata {
  pokemonFxSettings: Pokemon_fx_settingsdatapokemonfxsettings;
  templateId: string;
}
export interface Pokemon_fx_settingsEntry {
  templateId: "POKEMON_FX_SETTINGS";
  data: Pokemon_fx_settingsdata;
}

export interface PokemonFxMasterfileByTemplateId {
  "POKEMON_FX_SETTINGS": Pokemon_fx_settingsEntry;
}

export type PokemonFxMasterfileEntry = Pokemon_fx_settingsEntry;
