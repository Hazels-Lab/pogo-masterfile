/* eslint-disable */
// Auto-generated from GAME_MASTER.json
// Do not edit by hand.
// Group: combat/leagues
// Filters: all
// Entries emitted: 105

export interface Combat_league_default_greatdatacombatleaguepokemonconditionitemwithpokemoncplimit {
  maxCp: number;
}
export interface Combat_league_default_greatdatacombatleaguepokemonconditionitem {
  "type": string;
  withPokemonCpLimit: Combat_league_default_greatdatacombatleaguepokemonconditionitemwithpokemoncplimit;
}
export interface Combat_league_default_greatdatacombatleague {
  allowTempEvos: boolean;
  badgeType: string;
  bannedPokemon: (string)[];
  enabled: boolean;
  iconUrl: string;
  leagueType: string;
  pokemonCondition: (Combat_league_default_greatdatacombatleaguepokemonconditionitem)[];
  pokemonCount: number;
  title: string;
}
export interface Combat_league_default_greatdata {
  combatLeague: Combat_league_default_greatdatacombatleague;
  templateId: string;
}
export interface Combat_league_default_greatEntry {
  templateId: "COMBAT_LEAGUE_DEFAULT_GREAT";
  data: Combat_league_default_greatdata;
}
export interface Combat_league_default_masterdatacombatleagueunlockconditionitemwithpokemoncplimit {
  maxCp: number;
  minCp: number;
}
export interface Combat_league_default_masterdatacombatleagueunlockconditionitem {
  minPokemonCount: number;
  "type": string;
  withPokemonCpLimit: Combat_league_default_masterdatacombatleagueunlockconditionitemwithpokemoncplimit;
}
export interface Combat_league_default_masterdatacombatleague {
  allowTempEvos: boolean;
  badgeType: string;
  bannedPokemon: (string)[];
  enabled: boolean;
  iconUrl: string;
  leagueType: string;
  pokemonCondition: (Combat_league_default_greatdatacombatleaguepokemonconditionitem)[];
  pokemonCount: number;
  title: string;
  unlockCondition: (Combat_league_default_masterdatacombatleagueunlockconditionitem)[];
}
export interface Combat_league_default_masterdata {
  combatLeague: Combat_league_default_masterdatacombatleague;
  templateId: string;
}
export interface Combat_league_default_masterEntry {
  templateId: "COMBAT_LEAGUE_DEFAULT_MASTER";
  data: Combat_league_default_masterdata;
}
export interface Combat_league_default_ultraEntry {
  templateId: "COMBAT_LEAGUE_DEFAULT_ULTRA";
  data: Combat_league_default_masterdata;
}
export interface Combat_league_safari_barcelona_2023_01datacombatleaguepokemonconditionitempokemoncaughttimestamp {
  afterTimestamp: string;
  beforeTimestamp: string;
}
export interface Combat_league_safari_barcelona_2023_01datacombatleaguepokemonconditionitempokemonwhitelistpokemonitem {
  form?: string;
  forms?: (string)[];
  id: string;
}
export interface Combat_league_safari_barcelona_2023_01datacombatleaguepokemonconditionitempokemonwhitelist {
  pokemon: (Combat_league_safari_barcelona_2023_01datacombatleaguepokemonconditionitempokemonwhitelistpokemonitem)[];
}
export interface Combat_league_safari_barcelona_2023_01datacombatleaguepokemonconditionitem {
  pokemonCaughtTimestamp?: Combat_league_safari_barcelona_2023_01datacombatleaguepokemonconditionitempokemoncaughttimestamp;
  pokemonWhiteList?: Combat_league_safari_barcelona_2023_01datacombatleaguepokemonconditionitempokemonwhitelist;
  "type": string;
  withPokemonCpLimit?: Combat_league_default_greatdatacombatleaguepokemonconditionitemwithpokemoncplimit;
}
export interface Combat_league_safari_barcelona_2023_01datacombatleagueunlockconditionitem {
  minPokemonCount: number;
  "type": string;
}
export interface Combat_league_safari_barcelona_2023_01datacombatleague {
  badgeType: string;
  battlePartyCombatLeagueTemplateId: string;
  enabled: boolean;
  iconUrl: string;
  leagueType: string;
  pokemonCondition: (Combat_league_safari_barcelona_2023_01datacombatleaguepokemonconditionitem)[];
  pokemonCount: number;
  title: string;
  unlockCondition: (Combat_league_safari_barcelona_2023_01datacombatleagueunlockconditionitem)[];
}
export interface Combat_league_safari_barcelona_2023_01data {
  combatLeague: Combat_league_safari_barcelona_2023_01datacombatleague;
  templateId: string;
}
export interface Combat_league_safari_barcelona_2023_01Entry {
  templateId: "COMBAT_LEAGUE_SAFARI_BARCELONA_2023_01";
  data: Combat_league_safari_barcelona_2023_01data;
}
export interface Combat_league_safari_barcelona_2023_02Entry {
  templateId: "COMBAT_LEAGUE_SAFARI_BARCELONA_2023_02";
  data: Combat_league_safari_barcelona_2023_01data;
}
export interface Combat_league_safari_barcelona_2023_testEntry {
  templateId: "COMBAT_LEAGUE_SAFARI_BARCELONA_2023_TEST";
  data: Combat_league_safari_barcelona_2023_01data;
}
export interface Combat_league_safari_mexicocity_2023_01Entry {
  templateId: "COMBAT_LEAGUE_SAFARI_MEXICOCITY_2023_01";
  data: Combat_league_safari_barcelona_2023_01data;
}
export interface Combat_league_safari_mexicocity_2023_02Entry {
  templateId: "COMBAT_LEAGUE_SAFARI_MEXICOCITY_2023_02";
  data: Combat_league_safari_barcelona_2023_01data;
}
export interface Combat_league_safari_mexicocity_2023_testEntry {
  templateId: "COMBAT_LEAGUE_SAFARI_MEXICOCITY_2023_TEST";
  data: Combat_league_safari_barcelona_2023_01data;
}
export interface Combat_league_safari_seoul_2023_01Entry {
  templateId: "COMBAT_LEAGUE_SAFARI_SEOUL_2023_01";
  data: Combat_league_safari_barcelona_2023_01data;
}
export interface Combat_league_safari_seoul_2023_02Entry {
  templateId: "COMBAT_LEAGUE_SAFARI_SEOUL_2023_02";
  data: Combat_league_safari_barcelona_2023_01data;
}
export interface Combat_league_safari_seoul_2023_testEntry {
  templateId: "COMBAT_LEAGUE_SAFARI_SEOUL_2023_TEST";
  data: Combat_league_safari_barcelona_2023_01data;
}
export interface Combat_league_safari_zone_goyang_2022_01Entry {
  templateId: "COMBAT_LEAGUE_SAFARI_ZONE_GOYANG_2022_01";
  data: Combat_league_safari_barcelona_2023_01data;
}
export interface Combat_league_safari_zone_goyang_2022_02Entry {
  templateId: "COMBAT_LEAGUE_SAFARI_ZONE_GOYANG_2022_02";
  data: Combat_league_safari_barcelona_2023_01data;
}
export interface Combat_league_safari_zone_goyang_2022_03Entry {
  templateId: "COMBAT_LEAGUE_SAFARI_ZONE_GOYANG_2022_03";
  data: Combat_league_safari_barcelona_2023_01data;
}
export interface Combat_league_safari_zone_goyang_2022_postEntry {
  templateId: "COMBAT_LEAGUE_SAFARI_ZONE_GOYANG_2022_POST";
  data: Combat_league_safari_barcelona_2023_01data;
}
export interface Combat_league_safari_zone_goyang_2022_testEntry {
  templateId: "COMBAT_LEAGUE_SAFARI_ZONE_GOYANG_2022_TEST";
  data: Combat_league_safari_barcelona_2023_01data;
}
export interface Combat_league_safari_zone_seville_2022_01Entry {
  templateId: "COMBAT_LEAGUE_SAFARI_ZONE_SEVILLE_2022_01";
  data: Combat_league_safari_barcelona_2023_01data;
}
export interface Combat_league_safari_zone_seville_2022_02Entry {
  templateId: "COMBAT_LEAGUE_SAFARI_ZONE_SEVILLE_2022_02";
  data: Combat_league_safari_barcelona_2023_01data;
}
export interface Combat_league_safari_zone_seville_2022_03Entry {
  templateId: "COMBAT_LEAGUE_SAFARI_ZONE_SEVILLE_2022_03";
  data: Combat_league_safari_barcelona_2023_01data;
}
export interface Combat_league_safari_zone_seville_2022_04Entry {
  templateId: "COMBAT_LEAGUE_SAFARI_ZONE_SEVILLE_2022_04";
  data: Combat_league_safari_barcelona_2023_01data;
}
export interface Combat_league_safari_zone_seville_2022_testEntry {
  templateId: "COMBAT_LEAGUE_SAFARI_ZONE_SEVILLE_2022_TEST";
  data: Combat_league_safari_barcelona_2023_01data;
}
export interface Combat_league_safari_zone_singapore_2022_01Entry {
  templateId: "COMBAT_LEAGUE_SAFARI_ZONE_SINGAPORE_2022_01";
  data: Combat_league_safari_barcelona_2023_01data;
}
export interface Combat_league_safari_zone_singapore_2022_02Entry {
  templateId: "COMBAT_LEAGUE_SAFARI_ZONE_SINGAPORE_2022_02";
  data: Combat_league_safari_barcelona_2023_01data;
}
export interface Combat_league_safari_zone_singapore_2022_03Entry {
  templateId: "COMBAT_LEAGUE_SAFARI_ZONE_SINGAPORE_2022_03";
  data: Combat_league_safari_barcelona_2023_01data;
}
export interface Combat_league_safari_zone_singapore_2022_postEntry {
  templateId: "COMBAT_LEAGUE_SAFARI_ZONE_SINGAPORE_2022_POST";
  data: Combat_league_safari_barcelona_2023_01data;
}
export interface Combat_league_safari_zone_singapore_2022_testEntry {
  templateId: "COMBAT_LEAGUE_SAFARI_ZONE_SINGAPORE_2022_TEST";
  data: Combat_league_safari_barcelona_2023_01data;
}
export interface Combat_league_safari_zone_taipei_2022_01Entry {
  templateId: "COMBAT_LEAGUE_SAFARI_ZONE_TAIPEI_2022_01";
  data: Combat_league_safari_barcelona_2023_01data;
}
export interface Combat_league_safari_zone_taipei_2022_02Entry {
  templateId: "COMBAT_LEAGUE_SAFARI_ZONE_TAIPEI_2022_02";
  data: Combat_league_safari_barcelona_2023_01data;
}
export interface Combat_league_safari_zone_taipei_2022_03Entry {
  templateId: "COMBAT_LEAGUE_SAFARI_ZONE_TAIPEI_2022_03";
  data: Combat_league_safari_barcelona_2023_01data;
}
export interface Combat_league_safari_zone_taipei_2022_postEntry {
  templateId: "COMBAT_LEAGUE_SAFARI_ZONE_TAIPEI_2022_POST";
  data: Combat_league_safari_barcelona_2023_01data;
}
export interface Combat_league_safari_zone_taipei_2022_testEntry {
  templateId: "COMBAT_LEAGUE_SAFARI_ZONE_TAIPEI_2022_TEST";
  data: Combat_league_safari_barcelona_2023_01data;
}
export interface Combat_league_vs_seeker_color_greatdatacombatleaguepokemonconditionitemwithpokemontype {
  pokemonType: (string)[];
}
export interface Combat_league_vs_seeker_color_greatdatacombatleaguepokemonconditionitem {
  "type": string;
  withPokemonCpLimit?: Combat_league_default_greatdatacombatleaguepokemonconditionitemwithpokemoncplimit;
  withPokemonType?: Combat_league_vs_seeker_color_greatdatacombatleaguepokemonconditionitemwithpokemontype;
}
export interface Combat_league_vs_seeker_color_greatdatacombatleague {
  badgeType: string;
  bannedPokemon: (string)[];
  battlePartyCombatLeagueTemplateId: string;
  enabled: boolean;
  iconUrl: string;
  leagueType: string;
  pokemonCondition: (Combat_league_vs_seeker_color_greatdatacombatleaguepokemonconditionitem)[];
  pokemonCount: number;
  title: string;
  unlockCondition: (Combat_league_safari_barcelona_2023_01datacombatleagueunlockconditionitem)[];
}
export interface Combat_league_vs_seeker_color_greatdata {
  combatLeague: Combat_league_vs_seeker_color_greatdatacombatleague;
  templateId: string;
}
export interface Combat_league_vs_seeker_color_greatEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_COLOR_GREAT";
  data: Combat_league_vs_seeker_color_greatdata;
}
export interface Combat_league_vs_seeker_fantasy_ultraEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_FANTASY_ULTRA";
  data: Combat_league_vs_seeker_color_greatdata;
}
export interface Combat_league_vs_seeker_great_electricEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_ELECTRIC";
  data: Combat_league_vs_seeker_color_greatdata;
}
export interface Combat_league_vs_seeker_great_fantasyEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_FANTASY";
  data: Combat_league_vs_seeker_color_greatdata;
}
export interface Combat_league_vs_seeker_great_fightingEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_FIGHTING";
  data: Combat_league_vs_seeker_color_greatdata;
}
export interface Combat_league_vs_seeker_great_fighting_remixEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_FIGHTING_REMIX";
  data: Combat_league_vs_seeker_color_greatdata;
}
export interface Combat_league_vs_seeker_great_fossilEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_FOSSIL";
  data: Combat_league_vs_seeker_color_greatdata;
}
export interface Combat_league_vs_seeker_great_halloweenEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_HALLOWEEN";
  data: Combat_league_vs_seeker_color_greatdata;
}
export interface Combat_league_vs_seeker_great_halloween_littleEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_HALLOWEEN_LITTLE";
  data: Combat_league_vs_seeker_color_greatdata;
}
export interface Combat_league_vs_seeker_great_holidayEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_HOLIDAY";
  data: Combat_league_vs_seeker_color_greatdata;
}
export interface Combat_league_vs_seeker_great_jungleEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_JUNGLE";
  data: Combat_league_vs_seeker_color_greatdata;
}
export interface Combat_league_vs_seeker_great_scrollEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_SCROLL";
  data: Combat_league_vs_seeker_color_greatdata;
}
export interface Combat_league_vs_seeker_great_summerEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_SUMMER";
  data: Combat_league_vs_seeker_color_greatdata;
}
export interface Combat_league_vs_seeker_great_weatherEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_WEATHER";
  data: Combat_league_vs_seeker_color_greatdata;
}
export interface Combat_league_vs_seeker_halloween_ultraEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_HALLOWEEN_ULTRA";
  data: Combat_league_vs_seeker_color_greatdata;
}
export interface Combat_league_vs_seeker_little_holidayEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_LITTLE_HOLIDAY";
  data: Combat_league_vs_seeker_color_greatdata;
}
export interface Combat_league_vs_seeker_little_jungle_remixEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_LITTLE_JUNGLE_REMIX";
  data: Combat_league_vs_seeker_color_greatdata;
}
export interface Combat_league_vs_seeker_mountain_greatEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_MOUNTAIN_GREAT";
  data: Combat_league_vs_seeker_color_greatdata;
}
export interface Combat_league_vs_seeker_psychicEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_PSYCHIC";
  data: Combat_league_vs_seeker_color_greatdata;
}
export interface Combat_league_vs_seeker_spring_greatEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_SPRING_GREAT";
  data: Combat_league_vs_seeker_color_greatdata;
}
export interface Combat_league_vs_seeker_sunshine_greatEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_SUNSHINE_GREAT";
  data: Combat_league_vs_seeker_color_greatdata;
}
export interface Combat_league_vs_seeker_ultra_holidayEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_ULTRA_HOLIDAY";
  data: Combat_league_vs_seeker_color_greatdata;
}
export interface Combat_league_vs_seeker_ultra_summerEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_ULTRA_SUMMER";
  data: Combat_league_vs_seeker_color_greatdata;
}
export interface Combat_league_vs_seeker_weatherEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_WEATHER";
  data: Combat_league_vs_seeker_color_greatdata;
}
export interface Combat_league_vs_seeker_willpowerEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_WILLPOWER";
  data: Combat_league_vs_seeker_color_greatdata;
}
export interface Combat_league_vs_seeker_element_remixdatacombatleaguepokemonconditionitempokemonwhitelistpokemonitem {
  forms?: (string)[];
  id: string;
}
export interface Combat_league_vs_seeker_element_remixdatacombatleaguepokemonconditionitempokemonwhitelist {
  pokemon: (Combat_league_vs_seeker_element_remixdatacombatleaguepokemonconditionitempokemonwhitelistpokemonitem)[];
}
export interface Combat_league_vs_seeker_element_remixdatacombatleaguepokemonconditionitem {
  pokemonWhiteList?: Combat_league_vs_seeker_element_remixdatacombatleaguepokemonconditionitempokemonwhitelist;
  "type": string;
  withPokemonCpLimit?: Combat_league_default_greatdatacombatleaguepokemonconditionitemwithpokemoncplimit;
}
export interface Combat_league_vs_seeker_element_remixdatacombatleague {
  badgeType: string;
  bannedPokemon: (string)[];
  battlePartyCombatLeagueTemplateId: string;
  enabled: boolean;
  iconUrl: string;
  leagueType: string;
  pokemonCondition: (Combat_league_vs_seeker_element_remixdatacombatleaguepokemonconditionitem)[];
  pokemonCount: number;
  title: string;
  unlockCondition: (Combat_league_safari_barcelona_2023_01datacombatleagueunlockconditionitem)[];
}
export interface Combat_league_vs_seeker_element_remixdata {
  combatLeague: Combat_league_vs_seeker_element_remixdatacombatleague;
  templateId: string;
}
export interface Combat_league_vs_seeker_element_remixEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_ELEMENT_REMIX";
  data: Combat_league_vs_seeker_element_remixdata;
}
export interface Combat_league_vs_seeker_evolutionEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_EVOLUTION";
  data: Combat_league_vs_seeker_element_remixdata;
}
export interface Combat_league_vs_seeker_galar_greatEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GALAR_GREAT";
  data: Combat_league_vs_seeker_element_remixdata;
}
export interface Combat_league_vs_seeker_galar_littleEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GALAR_LITTLE";
  data: Combat_league_vs_seeker_element_remixdata;
}
export interface Combat_league_vs_seeker_great_championship_seriesEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_CHAMPIONSHIP_SERIES";
  data: Combat_league_vs_seeker_element_remixdata;
}
export interface Combat_league_vs_seeker_great_elementEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_ELEMENT";
  data: Combat_league_vs_seeker_element_remixdata;
}
export interface Combat_league_vs_seeker_great_hisuiEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_HISUI";
  data: Combat_league_vs_seeker_element_remixdata;
}
export interface Combat_league_vs_seeker_great_hoennEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_HOENN";
  data: Combat_league_vs_seeker_element_remixdata;
}
export interface Combat_league_vs_seeker_great_johtoEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_JOHTO";
  data: Combat_league_vs_seeker_element_remixdata;
}
export interface Combat_league_vs_seeker_great_kantoEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_KANTO";
  data: Combat_league_vs_seeker_element_remixdata;
}
export interface Combat_league_vs_seeker_great_littleEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_LITTLE";
  data: Combat_league_vs_seeker_element_remixdata;
}
export interface Combat_league_vs_seeker_great_little_remixEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_LITTLE_REMIX";
  data: Combat_league_vs_seeker_element_remixdata;
}
export interface Combat_league_vs_seeker_great_loveEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_LOVE";
  data: Combat_league_vs_seeker_element_remixdata;
}
export interface Combat_league_vs_seeker_great_sinnohEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_SINNOH";
  data: Combat_league_vs_seeker_element_remixdata;
}
export interface Combat_league_vs_seeker_greatdatacombatleaguepokemonconditionitem {
  "type": string;
  withPokemonCpLimit?: Combat_league_default_greatdatacombatleaguepokemonconditionitemwithpokemoncplimit;
}
export interface Combat_league_vs_seeker_greatdatacombatleague {
  badgeType: string;
  bannedPokemon: (string)[];
  battlePartyCombatLeagueTemplateId: string;
  enabled: boolean;
  iconUrl: string;
  leagueType: string;
  pokemonCondition: (Combat_league_vs_seeker_greatdatacombatleaguepokemonconditionitem)[];
  pokemonCount: number;
  title: string;
  unlockCondition: (Combat_league_safari_barcelona_2023_01datacombatleagueunlockconditionitem)[];
}
export interface Combat_league_vs_seeker_greatdata {
  combatLeague: Combat_league_vs_seeker_greatdatacombatleague;
  templateId: string;
}
export interface Combat_league_vs_seeker_greatEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT";
  data: Combat_league_vs_seeker_greatdata;
}
export interface Combat_league_vs_seeker_great_pvp_next_previewEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_PVP_NEXT_PREVIEW";
  data: Combat_league_vs_seeker_greatdata;
}
export interface Combat_league_vs_seeker_masterEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_MASTER";
  data: Combat_league_vs_seeker_greatdata;
}
export interface Combat_league_vs_seeker_master_no_legendaryEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_MASTER_NO_LEGENDARY";
  data: Combat_league_vs_seeker_greatdata;
}
export interface Combat_league_vs_seeker_master_premierEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_MASTER_PREMIER";
  data: Combat_league_vs_seeker_greatdata;
}
export interface Combat_league_vs_seeker_ultraEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_ULTRA";
  data: Combat_league_vs_seeker_greatdata;
}
export interface Combat_league_vs_seeker_ultra_no_legendaryEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_ULTRA_NO_LEGENDARY";
  data: Combat_league_vs_seeker_greatdata;
}
export interface Combat_league_vs_seeker_ultra_premierEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_ULTRA_PREMIER";
  data: Combat_league_vs_seeker_greatdata;
}
export interface Combat_league_vs_seeker_great_bidoofdatacombatleaguepokemonconditionitempokemonwhitelistpokemonitem {
  id: string;
}
export interface Combat_league_vs_seeker_great_bidoofdatacombatleaguepokemonconditionitempokemonwhitelist {
  pokemon: (Combat_league_vs_seeker_great_bidoofdatacombatleaguepokemonconditionitempokemonwhitelistpokemonitem)[];
}
export interface Combat_league_vs_seeker_great_bidoofdatacombatleaguepokemonconditionitem {
  pokemonWhiteList?: Combat_league_vs_seeker_great_bidoofdatacombatleaguepokemonconditionitempokemonwhitelist;
  "type": string;
  withPokemonCpLimit?: Combat_league_default_greatdatacombatleaguepokemonconditionitemwithpokemoncplimit;
}
export interface Combat_league_vs_seeker_great_bidoofdatacombatleague {
  badgeType: string;
  battlePartyCombatLeagueTemplateId: string;
  enabled: boolean;
  iconUrl: string;
  leagueType: string;
  pokemonCondition: (Combat_league_vs_seeker_great_bidoofdatacombatleaguepokemonconditionitem)[];
  pokemonCount: number;
  title: string;
}
export interface Combat_league_vs_seeker_great_bidoofdata {
  combatLeague: Combat_league_vs_seeker_great_bidoofdatacombatleague;
  templateId: string;
}
export interface Combat_league_vs_seeker_great_bidoofEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_BIDOOF";
  data: Combat_league_vs_seeker_great_bidoofdata;
}
export interface Combat_league_vs_seeker_great_catchdatacombatleaguepokemonconditionitem {
  pokemonCaughtTimestamp?: Combat_league_safari_barcelona_2023_01datacombatleaguepokemonconditionitempokemoncaughttimestamp;
  "type": string;
  withPokemonCpLimit?: Combat_league_default_greatdatacombatleaguepokemonconditionitemwithpokemoncplimit;
}
export interface Combat_league_vs_seeker_great_catchdatacombatleague {
  badgeType: string;
  bannedPokemon: (string)[];
  battlePartyCombatLeagueTemplateId: string;
  enabled: boolean;
  iconUrl: string;
  leagueType: string;
  pokemonCondition: (Combat_league_vs_seeker_great_catchdatacombatleaguepokemonconditionitem)[];
  pokemonCount: number;
  title: string;
  unlockCondition: (Combat_league_safari_barcelona_2023_01datacombatleagueunlockconditionitem)[];
}
export interface Combat_league_vs_seeker_great_catchdata {
  combatLeague: Combat_league_vs_seeker_great_catchdatacombatleague;
  templateId: string;
}
export interface Combat_league_vs_seeker_great_catchEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH";
  data: Combat_league_vs_seeker_great_catchdata;
}
export interface Combat_league_vs_seeker_great_catch_gofest2022Entry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_GOFEST2022";
  data: Combat_league_vs_seeker_great_catchdata;
}
export interface Combat_league_vs_seeker_great_catch_s13Entry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S13";
  data: Combat_league_vs_seeker_great_catchdata;
}
export interface Combat_league_vs_seeker_great_catch_s14Entry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S14";
  data: Combat_league_vs_seeker_great_catchdata;
}
export interface Combat_league_vs_seeker_great_catch_s15Entry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S15";
  data: Combat_league_vs_seeker_great_catchdata;
}
export interface Combat_league_vs_seeker_great_catch_s16Entry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S16";
  data: Combat_league_vs_seeker_great_catchdata;
}
export interface Combat_league_vs_seeker_great_catch_s20Entry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S20";
  data: Combat_league_vs_seeker_great_catchdata;
}
export interface Combat_league_vs_seeker_great_catch_s22Entry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S22";
  data: Combat_league_vs_seeker_great_catchdata;
}
export interface Combat_league_vs_seeker_great_catch_s8Entry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S8";
  data: Combat_league_vs_seeker_great_catchdata;
}
export interface Combat_league_vs_seeker_great_catch_season11Entry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_SEASON11";
  data: Combat_league_vs_seeker_great_catchdata;
}
export interface Combat_league_vs_seeker_little_catchEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_LITTLE_CATCH";
  data: Combat_league_vs_seeker_great_catchdata;
}
export interface Combat_league_vs_seeker_little_catch_s13Entry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_LITTLE_CATCH_S13";
  data: Combat_league_vs_seeker_great_catchdata;
}
export interface Combat_league_vs_seeker_little_catch_s14Entry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_LITTLE_CATCH_S14";
  data: Combat_league_vs_seeker_great_catchdata;
}
export interface Combat_league_vs_seeker_great_catch_s18datacombatleague {
  badgeType: string;
  battlePartyCombatLeagueTemplateId: string;
  enabled: boolean;
  iconUrl: string;
  leagueType: string;
  pokemonCondition: (Combat_league_vs_seeker_great_catchdatacombatleaguepokemonconditionitem)[];
  pokemonCount: number;
  title: string;
  unlockCondition: (Combat_league_safari_barcelona_2023_01datacombatleagueunlockconditionitem)[];
}
export interface Combat_league_vs_seeker_great_catch_s18data {
  combatLeague: Combat_league_vs_seeker_great_catch_s18datacombatleague;
  templateId: string;
}
export interface Combat_league_vs_seeker_great_catch_s18Entry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S18";
  data: Combat_league_vs_seeker_great_catch_s18data;
}
export interface Combat_league_vs_seeker_great_catch_s19Entry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S19";
  data: Combat_league_vs_seeker_great_catch_s18data;
}
export interface Combat_league_vs_seeker_great_flyingdatacombatleaguepokemonconditionitempokemonlevelrange {
  maxLevel: number;
}
export interface Combat_league_vs_seeker_great_flyingdatacombatleaguepokemonconditionitem {
  pokemonLevelRange?: Combat_league_vs_seeker_great_flyingdatacombatleaguepokemonconditionitempokemonlevelrange;
  "type": string;
  withPokemonCpLimit?: Combat_league_default_greatdatacombatleaguepokemonconditionitemwithpokemoncplimit;
  withPokemonType?: Combat_league_vs_seeker_color_greatdatacombatleaguepokemonconditionitemwithpokemontype;
}
export interface Combat_league_vs_seeker_great_flyingdatacombatleague {
  badgeType: string;
  bannedPokemon: (string)[];
  battlePartyCombatLeagueTemplateId: string;
  enabled: boolean;
  iconUrl: string;
  leagueType: string;
  pokemonCondition: (Combat_league_vs_seeker_great_flyingdatacombatleaguepokemonconditionitem)[];
  pokemonCount: number;
  title: string;
  unlockCondition: (Combat_league_safari_barcelona_2023_01datacombatleagueunlockconditionitem)[];
}
export interface Combat_league_vs_seeker_great_flyingdata {
  combatLeague: Combat_league_vs_seeker_great_flyingdatacombatleague;
  templateId: string;
}
export interface Combat_league_vs_seeker_great_flyingEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_FLYING";
  data: Combat_league_vs_seeker_great_flyingdata;
}
export interface Combat_league_vs_seeker_great_remixdatacombatleaguepokemonconditionitem {
  pokemonBanList?: Combat_league_vs_seeker_element_remixdatacombatleaguepokemonconditionitempokemonwhitelist;
  "type": string;
  withPokemonCpLimit?: Combat_league_default_greatdatacombatleaguepokemonconditionitemwithpokemoncplimit;
}
export interface Combat_league_vs_seeker_great_remixdatacombatleague {
  badgeType: string;
  bannedPokemon: (string)[];
  battlePartyCombatLeagueTemplateId: string;
  enabled: boolean;
  iconUrl: string;
  leagueType: string;
  pokemonCondition: (Combat_league_vs_seeker_great_remixdatacombatleaguepokemonconditionitem)[];
  pokemonCount: number;
  title: string;
  unlockCondition: (Combat_league_safari_barcelona_2023_01datacombatleagueunlockconditionitem)[];
}
export interface Combat_league_vs_seeker_great_remixdata {
  combatLeague: Combat_league_vs_seeker_great_remixdatacombatleague;
  templateId: string;
}
export interface Combat_league_vs_seeker_great_remixEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_REMIX";
  data: Combat_league_vs_seeker_great_remixdata;
}
export interface Combat_league_vs_seeker_great_retroEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_RETRO";
  data: Combat_league_vs_seeker_great_remixdata;
}
export interface Combat_league_vs_seeker_ultra_remixEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_ULTRA_REMIX";
  data: Combat_league_vs_seeker_great_remixdata;
}
export interface Combat_league_vs_seeker_great_single_typedatacombatleaguepokemonconditionitempokemonbanlistpokemonitem {
  forms: (string)[];
  id: string;
}
export interface Combat_league_vs_seeker_great_single_typedatacombatleaguepokemonconditionitempokemonbanlist {
  pokemon: (Combat_league_vs_seeker_great_single_typedatacombatleaguepokemonconditionitempokemonbanlistpokemonitem)[];
}
export interface Combat_league_vs_seeker_great_single_typedatacombatleaguepokemonconditionitem {
  pokemonBanList?: Combat_league_vs_seeker_great_single_typedatacombatleaguepokemonconditionitempokemonbanlist;
  pokemonWhiteList?: Combat_league_vs_seeker_element_remixdatacombatleaguepokemonconditionitempokemonwhitelist;
  "type": string;
  withPokemonCpLimit?: Combat_league_default_greatdatacombatleaguepokemonconditionitemwithpokemoncplimit;
}
export interface Combat_league_vs_seeker_great_single_typedatacombatleague {
  badgeType: string;
  bannedPokemon: (string)[];
  battlePartyCombatLeagueTemplateId: string;
  enabled: boolean;
  iconUrl: string;
  leagueType: string;
  pokemonCondition: (Combat_league_vs_seeker_great_single_typedatacombatleaguepokemonconditionitem)[];
  pokemonCount: number;
  title: string;
  unlockCondition: (Combat_league_safari_barcelona_2023_01datacombatleagueunlockconditionitem)[];
}
export interface Combat_league_vs_seeker_great_single_typedata {
  combatLeague: Combat_league_vs_seeker_great_single_typedatacombatleague;
  templateId: string;
}
export interface Combat_league_vs_seeker_great_single_typeEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_GREAT_SINGLE_TYPE";
  data: Combat_league_vs_seeker_great_single_typedata;
}
export interface Combat_league_vs_seeker_little_jungledatacombatleaguepokemonconditionitem {
  pokemonBanList?: Combat_league_vs_seeker_great_single_typedatacombatleaguepokemonconditionitempokemonbanlist;
  "type": string;
  withPokemonCpLimit?: Combat_league_default_greatdatacombatleaguepokemonconditionitemwithpokemoncplimit;
  withPokemonType?: Combat_league_vs_seeker_color_greatdatacombatleaguepokemonconditionitemwithpokemontype;
}
export interface Combat_league_vs_seeker_little_jungledatacombatleague {
  badgeType: string;
  bannedPokemon: (string)[];
  battlePartyCombatLeagueTemplateId: string;
  enabled: boolean;
  iconUrl: string;
  leagueType: string;
  pokemonCondition: (Combat_league_vs_seeker_little_jungledatacombatleaguepokemonconditionitem)[];
  pokemonCount: number;
  title: string;
  unlockCondition: (Combat_league_safari_barcelona_2023_01datacombatleagueunlockconditionitem)[];
}
export interface Combat_league_vs_seeker_little_jungledata {
  combatLeague: Combat_league_vs_seeker_little_jungledatacombatleague;
  templateId: string;
}
export interface Combat_league_vs_seeker_little_jungleEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_LITTLE_JUNGLE";
  data: Combat_league_vs_seeker_little_jungledata;
}
export interface Combat_league_vs_seeker_master_classicdatacombatleaguepokemonconditionitem {
  pokemonLevelRange?: Combat_league_vs_seeker_great_flyingdatacombatleaguepokemonconditionitempokemonlevelrange;
  "type": string;
  withPokemonCpLimit?: Combat_league_default_greatdatacombatleaguepokemonconditionitemwithpokemoncplimit;
}
export interface Combat_league_vs_seeker_master_classicdatacombatleague {
  badgeType: string;
  bannedPokemon: (string)[];
  battlePartyCombatLeagueTemplateId: string;
  enabled: boolean;
  iconUrl: string;
  leagueType: string;
  pokemonCondition: (Combat_league_vs_seeker_master_classicdatacombatleaguepokemonconditionitem)[];
  pokemonCount: number;
  title: string;
  unlockCondition: (Combat_league_safari_barcelona_2023_01datacombatleagueunlockconditionitem)[];
}
export interface Combat_league_vs_seeker_master_classicdata {
  combatLeague: Combat_league_vs_seeker_master_classicdatacombatleague;
  templateId: string;
}
export interface Combat_league_vs_seeker_master_classicEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_MASTER_CLASSIC";
  data: Combat_league_vs_seeker_master_classicdata;
}
export interface Combat_league_vs_seeker_master_premier_classicEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_MASTER_PREMIER_CLASSIC";
  data: Combat_league_vs_seeker_master_classicdata;
}
export interface Combat_league_vs_seeker_ultra_premier_classicEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_ULTRA_PREMIER_CLASSIC";
  data: Combat_league_vs_seeker_master_classicdata;
}
export interface Combat_league_vs_seeker_master_megasdatacombatleague {
  allowTempEvos: boolean;
  badgeType: string;
  bannedPokemon: (string)[];
  battlePartyCombatLeagueTemplateId: string;
  enabled: boolean;
  iconUrl: string;
  leagueType: string;
  pokemonCondition: (Combat_league_vs_seeker_greatdatacombatleaguepokemonconditionitem)[];
  pokemonCount: number;
  title: string;
  unlockCondition: (Combat_league_safari_barcelona_2023_01datacombatleagueunlockconditionitem)[];
}
export interface Combat_league_vs_seeker_master_megasdata {
  combatLeague: Combat_league_vs_seeker_master_megasdatacombatleague;
  templateId: string;
}
export interface Combat_league_vs_seeker_master_megasEntry {
  templateId: "COMBAT_LEAGUE_VS_SEEKER_MASTER_MEGAS";
  data: Combat_league_vs_seeker_master_megasdata;
}

export interface CombatLeaguesMasterfileByTemplateId {
  "COMBAT_LEAGUE_DEFAULT_GREAT": Combat_league_default_greatEntry;
  "COMBAT_LEAGUE_DEFAULT_MASTER": Combat_league_default_masterEntry;
  "COMBAT_LEAGUE_DEFAULT_ULTRA": Combat_league_default_ultraEntry;
  "COMBAT_LEAGUE_SAFARI_BARCELONA_2023_01": Combat_league_safari_barcelona_2023_01Entry;
  "COMBAT_LEAGUE_SAFARI_BARCELONA_2023_02": Combat_league_safari_barcelona_2023_02Entry;
  "COMBAT_LEAGUE_SAFARI_BARCELONA_2023_TEST": Combat_league_safari_barcelona_2023_testEntry;
  "COMBAT_LEAGUE_SAFARI_MEXICOCITY_2023_01": Combat_league_safari_mexicocity_2023_01Entry;
  "COMBAT_LEAGUE_SAFARI_MEXICOCITY_2023_02": Combat_league_safari_mexicocity_2023_02Entry;
  "COMBAT_LEAGUE_SAFARI_MEXICOCITY_2023_TEST": Combat_league_safari_mexicocity_2023_testEntry;
  "COMBAT_LEAGUE_SAFARI_SEOUL_2023_01": Combat_league_safari_seoul_2023_01Entry;
  "COMBAT_LEAGUE_SAFARI_SEOUL_2023_02": Combat_league_safari_seoul_2023_02Entry;
  "COMBAT_LEAGUE_SAFARI_SEOUL_2023_TEST": Combat_league_safari_seoul_2023_testEntry;
  "COMBAT_LEAGUE_SAFARI_ZONE_GOYANG_2022_01": Combat_league_safari_zone_goyang_2022_01Entry;
  "COMBAT_LEAGUE_SAFARI_ZONE_GOYANG_2022_02": Combat_league_safari_zone_goyang_2022_02Entry;
  "COMBAT_LEAGUE_SAFARI_ZONE_GOYANG_2022_03": Combat_league_safari_zone_goyang_2022_03Entry;
  "COMBAT_LEAGUE_SAFARI_ZONE_GOYANG_2022_POST": Combat_league_safari_zone_goyang_2022_postEntry;
  "COMBAT_LEAGUE_SAFARI_ZONE_GOYANG_2022_TEST": Combat_league_safari_zone_goyang_2022_testEntry;
  "COMBAT_LEAGUE_SAFARI_ZONE_SEVILLE_2022_01": Combat_league_safari_zone_seville_2022_01Entry;
  "COMBAT_LEAGUE_SAFARI_ZONE_SEVILLE_2022_02": Combat_league_safari_zone_seville_2022_02Entry;
  "COMBAT_LEAGUE_SAFARI_ZONE_SEVILLE_2022_03": Combat_league_safari_zone_seville_2022_03Entry;
  "COMBAT_LEAGUE_SAFARI_ZONE_SEVILLE_2022_04": Combat_league_safari_zone_seville_2022_04Entry;
  "COMBAT_LEAGUE_SAFARI_ZONE_SEVILLE_2022_TEST": Combat_league_safari_zone_seville_2022_testEntry;
  "COMBAT_LEAGUE_SAFARI_ZONE_SINGAPORE_2022_01": Combat_league_safari_zone_singapore_2022_01Entry;
  "COMBAT_LEAGUE_SAFARI_ZONE_SINGAPORE_2022_02": Combat_league_safari_zone_singapore_2022_02Entry;
  "COMBAT_LEAGUE_SAFARI_ZONE_SINGAPORE_2022_03": Combat_league_safari_zone_singapore_2022_03Entry;
  "COMBAT_LEAGUE_SAFARI_ZONE_SINGAPORE_2022_POST": Combat_league_safari_zone_singapore_2022_postEntry;
  "COMBAT_LEAGUE_SAFARI_ZONE_SINGAPORE_2022_TEST": Combat_league_safari_zone_singapore_2022_testEntry;
  "COMBAT_LEAGUE_SAFARI_ZONE_TAIPEI_2022_01": Combat_league_safari_zone_taipei_2022_01Entry;
  "COMBAT_LEAGUE_SAFARI_ZONE_TAIPEI_2022_02": Combat_league_safari_zone_taipei_2022_02Entry;
  "COMBAT_LEAGUE_SAFARI_ZONE_TAIPEI_2022_03": Combat_league_safari_zone_taipei_2022_03Entry;
  "COMBAT_LEAGUE_SAFARI_ZONE_TAIPEI_2022_POST": Combat_league_safari_zone_taipei_2022_postEntry;
  "COMBAT_LEAGUE_SAFARI_ZONE_TAIPEI_2022_TEST": Combat_league_safari_zone_taipei_2022_testEntry;
  "COMBAT_LEAGUE_VS_SEEKER_COLOR_GREAT": Combat_league_vs_seeker_color_greatEntry;
  "COMBAT_LEAGUE_VS_SEEKER_FANTASY_ULTRA": Combat_league_vs_seeker_fantasy_ultraEntry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_ELECTRIC": Combat_league_vs_seeker_great_electricEntry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_FANTASY": Combat_league_vs_seeker_great_fantasyEntry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_FIGHTING": Combat_league_vs_seeker_great_fightingEntry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_FIGHTING_REMIX": Combat_league_vs_seeker_great_fighting_remixEntry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_FOSSIL": Combat_league_vs_seeker_great_fossilEntry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_HALLOWEEN": Combat_league_vs_seeker_great_halloweenEntry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_HALLOWEEN_LITTLE": Combat_league_vs_seeker_great_halloween_littleEntry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_HOLIDAY": Combat_league_vs_seeker_great_holidayEntry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_JUNGLE": Combat_league_vs_seeker_great_jungleEntry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_SCROLL": Combat_league_vs_seeker_great_scrollEntry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_SUMMER": Combat_league_vs_seeker_great_summerEntry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_WEATHER": Combat_league_vs_seeker_great_weatherEntry;
  "COMBAT_LEAGUE_VS_SEEKER_HALLOWEEN_ULTRA": Combat_league_vs_seeker_halloween_ultraEntry;
  "COMBAT_LEAGUE_VS_SEEKER_LITTLE_HOLIDAY": Combat_league_vs_seeker_little_holidayEntry;
  "COMBAT_LEAGUE_VS_SEEKER_LITTLE_JUNGLE_REMIX": Combat_league_vs_seeker_little_jungle_remixEntry;
  "COMBAT_LEAGUE_VS_SEEKER_MOUNTAIN_GREAT": Combat_league_vs_seeker_mountain_greatEntry;
  "COMBAT_LEAGUE_VS_SEEKER_PSYCHIC": Combat_league_vs_seeker_psychicEntry;
  "COMBAT_LEAGUE_VS_SEEKER_SPRING_GREAT": Combat_league_vs_seeker_spring_greatEntry;
  "COMBAT_LEAGUE_VS_SEEKER_SUNSHINE_GREAT": Combat_league_vs_seeker_sunshine_greatEntry;
  "COMBAT_LEAGUE_VS_SEEKER_ULTRA_HOLIDAY": Combat_league_vs_seeker_ultra_holidayEntry;
  "COMBAT_LEAGUE_VS_SEEKER_ULTRA_SUMMER": Combat_league_vs_seeker_ultra_summerEntry;
  "COMBAT_LEAGUE_VS_SEEKER_WEATHER": Combat_league_vs_seeker_weatherEntry;
  "COMBAT_LEAGUE_VS_SEEKER_WILLPOWER": Combat_league_vs_seeker_willpowerEntry;
  "COMBAT_LEAGUE_VS_SEEKER_ELEMENT_REMIX": Combat_league_vs_seeker_element_remixEntry;
  "COMBAT_LEAGUE_VS_SEEKER_EVOLUTION": Combat_league_vs_seeker_evolutionEntry;
  "COMBAT_LEAGUE_VS_SEEKER_GALAR_GREAT": Combat_league_vs_seeker_galar_greatEntry;
  "COMBAT_LEAGUE_VS_SEEKER_GALAR_LITTLE": Combat_league_vs_seeker_galar_littleEntry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_CHAMPIONSHIP_SERIES": Combat_league_vs_seeker_great_championship_seriesEntry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_ELEMENT": Combat_league_vs_seeker_great_elementEntry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_HISUI": Combat_league_vs_seeker_great_hisuiEntry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_HOENN": Combat_league_vs_seeker_great_hoennEntry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_JOHTO": Combat_league_vs_seeker_great_johtoEntry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_KANTO": Combat_league_vs_seeker_great_kantoEntry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_LITTLE": Combat_league_vs_seeker_great_littleEntry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_LITTLE_REMIX": Combat_league_vs_seeker_great_little_remixEntry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_LOVE": Combat_league_vs_seeker_great_loveEntry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_SINNOH": Combat_league_vs_seeker_great_sinnohEntry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT": Combat_league_vs_seeker_greatEntry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_PVP_NEXT_PREVIEW": Combat_league_vs_seeker_great_pvp_next_previewEntry;
  "COMBAT_LEAGUE_VS_SEEKER_MASTER": Combat_league_vs_seeker_masterEntry;
  "COMBAT_LEAGUE_VS_SEEKER_MASTER_NO_LEGENDARY": Combat_league_vs_seeker_master_no_legendaryEntry;
  "COMBAT_LEAGUE_VS_SEEKER_MASTER_PREMIER": Combat_league_vs_seeker_master_premierEntry;
  "COMBAT_LEAGUE_VS_SEEKER_ULTRA": Combat_league_vs_seeker_ultraEntry;
  "COMBAT_LEAGUE_VS_SEEKER_ULTRA_NO_LEGENDARY": Combat_league_vs_seeker_ultra_no_legendaryEntry;
  "COMBAT_LEAGUE_VS_SEEKER_ULTRA_PREMIER": Combat_league_vs_seeker_ultra_premierEntry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_BIDOOF": Combat_league_vs_seeker_great_bidoofEntry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH": Combat_league_vs_seeker_great_catchEntry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_GOFEST2022": Combat_league_vs_seeker_great_catch_gofest2022Entry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S13": Combat_league_vs_seeker_great_catch_s13Entry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S14": Combat_league_vs_seeker_great_catch_s14Entry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S15": Combat_league_vs_seeker_great_catch_s15Entry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S16": Combat_league_vs_seeker_great_catch_s16Entry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S20": Combat_league_vs_seeker_great_catch_s20Entry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S22": Combat_league_vs_seeker_great_catch_s22Entry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S8": Combat_league_vs_seeker_great_catch_s8Entry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_SEASON11": Combat_league_vs_seeker_great_catch_season11Entry;
  "COMBAT_LEAGUE_VS_SEEKER_LITTLE_CATCH": Combat_league_vs_seeker_little_catchEntry;
  "COMBAT_LEAGUE_VS_SEEKER_LITTLE_CATCH_S13": Combat_league_vs_seeker_little_catch_s13Entry;
  "COMBAT_LEAGUE_VS_SEEKER_LITTLE_CATCH_S14": Combat_league_vs_seeker_little_catch_s14Entry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S18": Combat_league_vs_seeker_great_catch_s18Entry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S19": Combat_league_vs_seeker_great_catch_s19Entry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_FLYING": Combat_league_vs_seeker_great_flyingEntry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_REMIX": Combat_league_vs_seeker_great_remixEntry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_RETRO": Combat_league_vs_seeker_great_retroEntry;
  "COMBAT_LEAGUE_VS_SEEKER_ULTRA_REMIX": Combat_league_vs_seeker_ultra_remixEntry;
  "COMBAT_LEAGUE_VS_SEEKER_GREAT_SINGLE_TYPE": Combat_league_vs_seeker_great_single_typeEntry;
  "COMBAT_LEAGUE_VS_SEEKER_LITTLE_JUNGLE": Combat_league_vs_seeker_little_jungleEntry;
  "COMBAT_LEAGUE_VS_SEEKER_MASTER_CLASSIC": Combat_league_vs_seeker_master_classicEntry;
  "COMBAT_LEAGUE_VS_SEEKER_MASTER_PREMIER_CLASSIC": Combat_league_vs_seeker_master_premier_classicEntry;
  "COMBAT_LEAGUE_VS_SEEKER_ULTRA_PREMIER_CLASSIC": Combat_league_vs_seeker_ultra_premier_classicEntry;
  "COMBAT_LEAGUE_VS_SEEKER_MASTER_MEGAS": Combat_league_vs_seeker_master_megasEntry;
}

export type CombatLeaguesMasterfileEntry = Combat_league_default_greatEntry | Combat_league_default_masterEntry | Combat_league_default_ultraEntry | Combat_league_safari_barcelona_2023_01Entry | Combat_league_safari_barcelona_2023_02Entry | Combat_league_safari_barcelona_2023_testEntry | Combat_league_safari_mexicocity_2023_01Entry | Combat_league_safari_mexicocity_2023_02Entry | Combat_league_safari_mexicocity_2023_testEntry | Combat_league_safari_seoul_2023_01Entry | Combat_league_safari_seoul_2023_02Entry | Combat_league_safari_seoul_2023_testEntry | Combat_league_safari_zone_goyang_2022_01Entry | Combat_league_safari_zone_goyang_2022_02Entry | Combat_league_safari_zone_goyang_2022_03Entry | Combat_league_safari_zone_goyang_2022_postEntry | Combat_league_safari_zone_goyang_2022_testEntry | Combat_league_safari_zone_seville_2022_01Entry | Combat_league_safari_zone_seville_2022_02Entry | Combat_league_safari_zone_seville_2022_03Entry | Combat_league_safari_zone_seville_2022_04Entry | Combat_league_safari_zone_seville_2022_testEntry | Combat_league_safari_zone_singapore_2022_01Entry | Combat_league_safari_zone_singapore_2022_02Entry | Combat_league_safari_zone_singapore_2022_03Entry | Combat_league_safari_zone_singapore_2022_postEntry | Combat_league_safari_zone_singapore_2022_testEntry | Combat_league_safari_zone_taipei_2022_01Entry | Combat_league_safari_zone_taipei_2022_02Entry | Combat_league_safari_zone_taipei_2022_03Entry | Combat_league_safari_zone_taipei_2022_postEntry | Combat_league_safari_zone_taipei_2022_testEntry | Combat_league_vs_seeker_color_greatEntry | Combat_league_vs_seeker_fantasy_ultraEntry | Combat_league_vs_seeker_great_electricEntry | Combat_league_vs_seeker_great_fantasyEntry | Combat_league_vs_seeker_great_fightingEntry | Combat_league_vs_seeker_great_fighting_remixEntry | Combat_league_vs_seeker_great_fossilEntry | Combat_league_vs_seeker_great_halloweenEntry | Combat_league_vs_seeker_great_halloween_littleEntry | Combat_league_vs_seeker_great_holidayEntry | Combat_league_vs_seeker_great_jungleEntry | Combat_league_vs_seeker_great_scrollEntry | Combat_league_vs_seeker_great_summerEntry | Combat_league_vs_seeker_great_weatherEntry | Combat_league_vs_seeker_halloween_ultraEntry | Combat_league_vs_seeker_little_holidayEntry | Combat_league_vs_seeker_little_jungle_remixEntry | Combat_league_vs_seeker_mountain_greatEntry | Combat_league_vs_seeker_psychicEntry | Combat_league_vs_seeker_spring_greatEntry | Combat_league_vs_seeker_sunshine_greatEntry | Combat_league_vs_seeker_ultra_holidayEntry | Combat_league_vs_seeker_ultra_summerEntry | Combat_league_vs_seeker_weatherEntry | Combat_league_vs_seeker_willpowerEntry | Combat_league_vs_seeker_element_remixEntry | Combat_league_vs_seeker_evolutionEntry | Combat_league_vs_seeker_galar_greatEntry | Combat_league_vs_seeker_galar_littleEntry | Combat_league_vs_seeker_great_championship_seriesEntry | Combat_league_vs_seeker_great_elementEntry | Combat_league_vs_seeker_great_hisuiEntry | Combat_league_vs_seeker_great_hoennEntry | Combat_league_vs_seeker_great_johtoEntry | Combat_league_vs_seeker_great_kantoEntry | Combat_league_vs_seeker_great_littleEntry | Combat_league_vs_seeker_great_little_remixEntry | Combat_league_vs_seeker_great_loveEntry | Combat_league_vs_seeker_great_sinnohEntry | Combat_league_vs_seeker_greatEntry | Combat_league_vs_seeker_great_pvp_next_previewEntry | Combat_league_vs_seeker_masterEntry | Combat_league_vs_seeker_master_no_legendaryEntry | Combat_league_vs_seeker_master_premierEntry | Combat_league_vs_seeker_ultraEntry | Combat_league_vs_seeker_ultra_no_legendaryEntry | Combat_league_vs_seeker_ultra_premierEntry | Combat_league_vs_seeker_great_bidoofEntry | Combat_league_vs_seeker_great_catchEntry | Combat_league_vs_seeker_great_catch_gofest2022Entry | Combat_league_vs_seeker_great_catch_s13Entry | Combat_league_vs_seeker_great_catch_s14Entry | Combat_league_vs_seeker_great_catch_s15Entry | Combat_league_vs_seeker_great_catch_s16Entry | Combat_league_vs_seeker_great_catch_s20Entry | Combat_league_vs_seeker_great_catch_s22Entry | Combat_league_vs_seeker_great_catch_s8Entry | Combat_league_vs_seeker_great_catch_season11Entry | Combat_league_vs_seeker_little_catchEntry | Combat_league_vs_seeker_little_catch_s13Entry | Combat_league_vs_seeker_little_catch_s14Entry | Combat_league_vs_seeker_great_catch_s18Entry | Combat_league_vs_seeker_great_catch_s19Entry | Combat_league_vs_seeker_great_flyingEntry | Combat_league_vs_seeker_great_remixEntry | Combat_league_vs_seeker_great_retroEntry | Combat_league_vs_seeker_ultra_remixEntry | Combat_league_vs_seeker_great_single_typeEntry | Combat_league_vs_seeker_little_jungleEntry | Combat_league_vs_seeker_master_classicEntry | Combat_league_vs_seeker_master_premier_classicEntry | Combat_league_vs_seeker_ultra_premier_classicEntry | Combat_league_vs_seeker_master_megasEntry;
