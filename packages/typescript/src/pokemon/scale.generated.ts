/* eslint-disable */
// Auto-generated from GAME_MASTER.json
// Do not edit by hand.
// Group: pokemon/scale
// Filters: all
// Entries emitted: 6

export interface Pokemon_scale_settings_battle_pokemon_scaledatapokemonscalesettings {
  maxHeight: number;
  minHeight: number;
  pokemonScaleMode: string;
}
export interface Pokemon_scale_settings_battle_pokemon_scaledata {
  pokemonScaleSettings: Pokemon_scale_settings_battle_pokemon_scaledatapokemonscalesettings;
  templateId: string;
}
export interface Pokemon_scale_settings_battle_pokemon_scaleEntry {
  templateId: "POKEMON_SCALE_SETTINGS_BATTLE_POKEMON_SCALE";
  data: Pokemon_scale_settings_battle_pokemon_scaledata;
}
export interface Pokemon_scale_settings_gui_scaleEntry {
  templateId: "POKEMON_SCALE_SETTINGS_GUI_SCALE";
  data: Pokemon_scale_settings_battle_pokemon_scaledata;
}
export interface Pokemon_scale_settings_gym_topper_scaleEntry {
  templateId: "POKEMON_SCALE_SETTINGS_GYM_TOPPER_SCALE";
  data: Pokemon_scale_settings_battle_pokemon_scaledata;
}
export interface Pokemon_scale_settings_map_pokemon_scaleEntry {
  templateId: "POKEMON_SCALE_SETTINGS_MAP_POKEMON_SCALE";
  data: Pokemon_scale_settings_battle_pokemon_scaledata;
}
export interface Pokemon_scale_settings_natural_scaledatapokemonscalesettings {
  maxHeight: number;
  minHeight: number;
}
export interface Pokemon_scale_settings_natural_scaledata {
  pokemonScaleSettings: Pokemon_scale_settings_natural_scaledatapokemonscalesettings;
  templateId: string;
}
export interface Pokemon_scale_settings_natural_scaleEntry {
  templateId: "POKEMON_SCALE_SETTINGS_NATURAL_SCALE";
  data: Pokemon_scale_settings_natural_scaledata;
}
export interface Pokemon_scale_settings_raid_boss_scaleEntry {
  templateId: "POKEMON_SCALE_SETTINGS_RAID_BOSS_SCALE";
  data: Pokemon_scale_settings_battle_pokemon_scaledata;
}

export interface PokemonScaleMasterfileByTemplateId {
  "POKEMON_SCALE_SETTINGS_BATTLE_POKEMON_SCALE": Pokemon_scale_settings_battle_pokemon_scaleEntry;
  "POKEMON_SCALE_SETTINGS_GUI_SCALE": Pokemon_scale_settings_gui_scaleEntry;
  "POKEMON_SCALE_SETTINGS_GYM_TOPPER_SCALE": Pokemon_scale_settings_gym_topper_scaleEntry;
  "POKEMON_SCALE_SETTINGS_MAP_POKEMON_SCALE": Pokemon_scale_settings_map_pokemon_scaleEntry;
  "POKEMON_SCALE_SETTINGS_NATURAL_SCALE": Pokemon_scale_settings_natural_scaleEntry;
  "POKEMON_SCALE_SETTINGS_RAID_BOSS_SCALE": Pokemon_scale_settings_raid_boss_scaleEntry;
}

export type PokemonScaleMasterfileEntry = Pokemon_scale_settings_battle_pokemon_scaleEntry | Pokemon_scale_settings_gui_scaleEntry | Pokemon_scale_settings_gym_topper_scaleEntry | Pokemon_scale_settings_map_pokemon_scaleEntry | Pokemon_scale_settings_natural_scaleEntry | Pokemon_scale_settings_raid_boss_scaleEntry;
