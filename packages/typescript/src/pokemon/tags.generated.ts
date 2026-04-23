/* eslint-disable */
// Auto-generated from GAME_MASTER.json
// Do not edit by hand.
// Group: pokemon/tags
// Filters: all
// Entries emitted: 1

export interface Pokemon_tag_settingsdatapokemontagsettingscolorbindingitem {
  color: string;
  hexCode: string;
}
export interface Pokemon_tag_settingsdatapokemontagsettings {
  colorBinding: (Pokemon_tag_settingsdatapokemontagsettingscolorbindingitem)[];
  maxNumTagsAllowed: number;
  minPlayerLevelForPokemonTagging: number;
}
export interface Pokemon_tag_settingsdata {
  pokemonTagSettings: Pokemon_tag_settingsdatapokemontagsettings;
  templateId: string;
}
export interface Pokemon_tag_settingsEntry {
  templateId: "POKEMON_TAG_SETTINGS";
  data: Pokemon_tag_settingsdata;
}

export interface PokemonTagsMasterfileByTemplateId {
  "POKEMON_TAG_SETTINGS": Pokemon_tag_settingsEntry;
}

export type PokemonTagsMasterfileEntry = Pokemon_tag_settingsEntry;
