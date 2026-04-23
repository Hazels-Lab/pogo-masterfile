/* eslint-disable */
// Auto-generated from GAME_MASTER.json
// Do not edit by hand.
// Group: pokemon/home
// Filters: all
// Entries emitted: 12

export interface Energy_costs_pokemon_class_legendarydatapokemonhomeenergycosts {
  base: number;
  cp1001To2000: number;
  cp2001ToInf: number;
  pokemonClass: string;
  shiny: number;
}
export interface Energy_costs_pokemon_class_legendarydata {
  pokemonHomeEnergyCosts: Energy_costs_pokemon_class_legendarydatapokemonhomeenergycosts;
  templateId: string;
}
export interface Energy_costs_pokemon_class_legendaryEntry {
  templateId: "ENERGY_COSTS_POKEMON_CLASS_LEGENDARY";
  data: Energy_costs_pokemon_class_legendarydata;
}
export interface Energy_costs_pokemon_class_mythicEntry {
  templateId: "ENERGY_COSTS_POKEMON_CLASS_MYTHIC";
  data: Energy_costs_pokemon_class_legendarydata;
}
export interface Energy_costs_pokemon_class_normaldatapokemonhomeenergycosts {
  base: number;
  cp1001To2000: number;
  cp2001ToInf: number;
  shiny: number;
}
export interface Energy_costs_pokemon_class_normaldata {
  pokemonHomeEnergyCosts: Energy_costs_pokemon_class_normaldatapokemonhomeenergycosts;
  templateId: string;
}
export interface Energy_costs_pokemon_class_normalEntry {
  templateId: "ENERGY_COSTS_POKEMON_CLASS_NORMAL";
  data: Energy_costs_pokemon_class_normaldata;
}
export interface Energy_costs_pokemon_class_ultra_beastEntry {
  templateId: "ENERGY_COSTS_POKEMON_CLASS_ULTRA_BEAST";
  data: Energy_costs_pokemon_class_legendarydata;
}
export interface Pokemon_home_settingsdatapokemonhomesettings {
  energySkuId: string;
  playerMinLevel: number;
  transporterEnergyGainPerHour: number;
  transporterMaxEnergy: number;
}
export interface Pokemon_home_settingsdata {
  pokemonHomeSettings: Pokemon_home_settingsdatapokemonhomesettings;
  templateId: string;
}
export interface Pokemon_home_settingsEntry {
  templateId: "POKEMON_HOME_SETTINGS";
  data: Pokemon_home_settingsdata;
}
export interface V0351_pokemon_castform_home_form_reversiondatapokemonhomeformreversionsformmappingitem {
  revertedForm: string;
  revertedFormString: string;
  unauthorizedForms: (string)[];
}
export interface V0351_pokemon_castform_home_form_reversiondatapokemonhomeformreversions {
  formMapping: (V0351_pokemon_castform_home_form_reversiondatapokemonhomeformreversionsformmappingitem)[];
  pokemonId: string;
}
export interface V0351_pokemon_castform_home_form_reversiondata {
  pokemonHomeFormReversions: V0351_pokemon_castform_home_form_reversiondatapokemonhomeformreversions;
  templateId: string;
}
export interface V0351_pokemon_castform_home_form_reversionEntry {
  templateId: "V0351_POKEMON_CASTFORM_HOME_FORM_REVERSION";
  data: V0351_pokemon_castform_home_form_reversiondata;
}
export interface V0421_cherrim_home_form_reversionEntry {
  templateId: "V0421_CHERRIM_HOME_FORM_REVERSION";
  data: V0351_pokemon_castform_home_form_reversiondata;
}
export interface V0487_pokemon_giratina_home_reversionEntry {
  templateId: "V0487_POKEMON_GIRATINA_HOME_REVERSION";
  data: V0351_pokemon_castform_home_form_reversiondata;
}
export interface V0555_pokemon_darmanitan_home_form_reversionEntry {
  templateId: "V0555_POKEMON_DARMANITAN_HOME_FORM_REVERSION";
  data: V0351_pokemon_castform_home_form_reversiondata;
}
export interface V0647_pokemon_keldeo_home_form_reversionEntry {
  templateId: "V0647_POKEMON_KELDEO_HOME_FORM_REVERSION";
  data: V0351_pokemon_castform_home_form_reversiondata;
}
export interface V0648_pokemon_meloetta_home_form_reversionEntry {
  templateId: "V0648_POKEMON_MELOETTA_HOME_FORM_REVERSION";
  data: V0351_pokemon_castform_home_form_reversiondata;
}
export interface V0649_pokemon_genesect_home_form_reversionEntry {
  templateId: "V0649_POKEMON_GENESECT_HOME_FORM_REVERSION";
  data: V0351_pokemon_castform_home_form_reversiondata;
}

export interface PokemonHomeMasterfileByTemplateId {
  "ENERGY_COSTS_POKEMON_CLASS_LEGENDARY": Energy_costs_pokemon_class_legendaryEntry;
  "ENERGY_COSTS_POKEMON_CLASS_MYTHIC": Energy_costs_pokemon_class_mythicEntry;
  "ENERGY_COSTS_POKEMON_CLASS_NORMAL": Energy_costs_pokemon_class_normalEntry;
  "ENERGY_COSTS_POKEMON_CLASS_ULTRA_BEAST": Energy_costs_pokemon_class_ultra_beastEntry;
  "POKEMON_HOME_SETTINGS": Pokemon_home_settingsEntry;
  "V0351_POKEMON_CASTFORM_HOME_FORM_REVERSION": V0351_pokemon_castform_home_form_reversionEntry;
  "V0421_CHERRIM_HOME_FORM_REVERSION": V0421_cherrim_home_form_reversionEntry;
  "V0487_POKEMON_GIRATINA_HOME_REVERSION": V0487_pokemon_giratina_home_reversionEntry;
  "V0555_POKEMON_DARMANITAN_HOME_FORM_REVERSION": V0555_pokemon_darmanitan_home_form_reversionEntry;
  "V0647_POKEMON_KELDEO_HOME_FORM_REVERSION": V0647_pokemon_keldeo_home_form_reversionEntry;
  "V0648_POKEMON_MELOETTA_HOME_FORM_REVERSION": V0648_pokemon_meloetta_home_form_reversionEntry;
  "V0649_POKEMON_GENESECT_HOME_FORM_REVERSION": V0649_pokemon_genesect_home_form_reversionEntry;
}

export type PokemonHomeMasterfileEntry = Energy_costs_pokemon_class_legendaryEntry | Energy_costs_pokemon_class_mythicEntry | Energy_costs_pokemon_class_normalEntry | Energy_costs_pokemon_class_ultra_beastEntry | Pokemon_home_settingsEntry | V0351_pokemon_castform_home_form_reversionEntry | V0421_cherrim_home_form_reversionEntry | V0487_pokemon_giratina_home_reversionEntry | V0555_pokemon_darmanitan_home_form_reversionEntry | V0647_pokemon_keldeo_home_form_reversionEntry | V0648_pokemon_meloetta_home_form_reversionEntry | V0649_pokemon_genesect_home_form_reversionEntry;
