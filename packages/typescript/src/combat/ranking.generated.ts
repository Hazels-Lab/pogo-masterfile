/* eslint-disable */
// Auto-generated from GAME_MASTER.json
// Do not edit by hand.
// Group: combat/ranking
// Filters: all
// Entries emitted: 21

export interface Combat_ranking_settingsdatacombatrankingprotosettingsranklevelitem {
  additionalTotalBattlesRequired?: number;
  additionalWinsRequired?: number;
  rankLevel: number;
}
export interface Combat_ranking_settingsdatacombatrankingprotosettingsrequiredforrewards {
  additionalTotalBattlesRequired: number;
  rankLevel: number;
}
export interface Combat_ranking_settingsdatacombatrankingprotosettings {
  minRankToDisplayRating: number;
  rankLevel: (Combat_ranking_settingsdatacombatrankingprotosettingsranklevelitem)[];
  requiredForRewards: Combat_ranking_settingsdatacombatrankingprotosettingsrequiredforrewards;
}
export interface Combat_ranking_settingsdata {
  combatRankingProtoSettings: Combat_ranking_settingsdatacombatrankingprotosettings;
  templateId: string;
}
export interface Combat_ranking_settingsEntry {
  templateId: "COMBAT_RANKING_SETTINGS";
  data: Combat_ranking_settingsdata;
}
export interface Combat_ranking_settings_s10datacombatrankingprotosettingsranklevelitem {
  additionalTotalBattlesRequired?: number;
  additionalWinsRequired?: number;
  minRatingRequired?: number;
  rankLevel: number;
}
export interface Combat_ranking_settings_s10datacombatrankingprotosettings {
  minRankToDisplayRating: number;
  minRatingRequired: number;
  rankLevel: (Combat_ranking_settings_s10datacombatrankingprotosettingsranklevelitem)[];
  requiredForRewards: Combat_ranking_settingsdatacombatrankingprotosettingsrequiredforrewards;
}
export interface Combat_ranking_settings_s10data {
  combatRankingProtoSettings: Combat_ranking_settings_s10datacombatrankingprotosettings;
  templateId: string;
}
export interface Combat_ranking_settings_s10Entry {
  templateId: "COMBAT_RANKING_SETTINGS_S10";
  data: Combat_ranking_settings_s10data;
}
export interface Combat_ranking_settings_s13Entry {
  templateId: "COMBAT_RANKING_SETTINGS_S13";
  data: Combat_ranking_settings_s10data;
}
export interface Combat_ranking_settings_s14Entry {
  templateId: "COMBAT_RANKING_SETTINGS_S14";
  data: Combat_ranking_settings_s10data;
}
export interface Combat_ranking_settings_s15Entry {
  templateId: "COMBAT_RANKING_SETTINGS_S15";
  data: Combat_ranking_settings_s10data;
}
export interface Combat_ranking_settings_s16Entry {
  templateId: "COMBAT_RANKING_SETTINGS_S16";
  data: Combat_ranking_settings_s10data;
}
export interface Combat_ranking_settings_s17Entry {
  templateId: "COMBAT_RANKING_SETTINGS_S17";
  data: Combat_ranking_settings_s10data;
}
export interface Combat_ranking_settings_s18Entry {
  templateId: "COMBAT_RANKING_SETTINGS_S18";
  data: Combat_ranking_settings_s10data;
}
export interface Combat_ranking_settings_s19Entry {
  templateId: "COMBAT_RANKING_SETTINGS_S19";
  data: Combat_ranking_settings_s10data;
}
export interface Combat_ranking_settings_s20Entry {
  templateId: "COMBAT_RANKING_SETTINGS_S20";
  data: Combat_ranking_settings_s10data;
}
export interface Combat_ranking_settings_s21Entry {
  templateId: "COMBAT_RANKING_SETTINGS_S21";
  data: Combat_ranking_settings_s10data;
}
export interface Combat_ranking_settings_s22Entry {
  templateId: "COMBAT_RANKING_SETTINGS_S22";
  data: Combat_ranking_settings_s10data;
}
export interface Combat_ranking_settings_s23Entry {
  templateId: "COMBAT_RANKING_SETTINGS_S23";
  data: Combat_ranking_settings_s10data;
}
export interface Combat_ranking_settings_s24Entry {
  templateId: "COMBAT_RANKING_SETTINGS_S24";
  data: Combat_ranking_settings_s10data;
}
export interface Combat_ranking_settings_s25Entry {
  templateId: "COMBAT_RANKING_SETTINGS_S25";
  data: Combat_ranking_settings_s10data;
}
export interface Combat_ranking_settings_s26Entry {
  templateId: "COMBAT_RANKING_SETTINGS_S26";
  data: Combat_ranking_settings_s10data;
}
export interface Combat_ranking_settings_s27Entry {
  templateId: "COMBAT_RANKING_SETTINGS_S27";
  data: Combat_ranking_settings_s10data;
}
export interface Combat_ranking_settings_s28datacombatrankingprotosettings {
  minRankToDisplayRating: number;
  minRatingRequired: number;
  rankLevel: (Combat_ranking_settingsdatacombatrankingprotosettingsranklevelitem)[];
  requiredForRewards: Combat_ranking_settingsdatacombatrankingprotosettingsrequiredforrewards;
}
export interface Combat_ranking_settings_s28data {
  combatRankingProtoSettings: Combat_ranking_settings_s28datacombatrankingprotosettings;
  templateId: string;
}
export interface Combat_ranking_settings_s28Entry {
  templateId: "COMBAT_RANKING_SETTINGS_S28";
  data: Combat_ranking_settings_s28data;
}
export interface Combat_ranking_settings_s29Entry {
  templateId: "COMBAT_RANKING_SETTINGS_S29";
  data: Combat_ranking_settings_s10data;
}
export interface Combat_ranking_settings_s8Entry {
  templateId: "COMBAT_RANKING_SETTINGS_S8";
  data: Combat_ranking_settings_s10data;
}
export interface Combat_ranking_settings_s9Entry {
  templateId: "COMBAT_RANKING_SETTINGS_S9";
  data: Combat_ranking_settings_s10data;
}

export interface CombatRankingMasterfileByTemplateId {
  "COMBAT_RANKING_SETTINGS": Combat_ranking_settingsEntry;
  "COMBAT_RANKING_SETTINGS_S10": Combat_ranking_settings_s10Entry;
  "COMBAT_RANKING_SETTINGS_S13": Combat_ranking_settings_s13Entry;
  "COMBAT_RANKING_SETTINGS_S14": Combat_ranking_settings_s14Entry;
  "COMBAT_RANKING_SETTINGS_S15": Combat_ranking_settings_s15Entry;
  "COMBAT_RANKING_SETTINGS_S16": Combat_ranking_settings_s16Entry;
  "COMBAT_RANKING_SETTINGS_S17": Combat_ranking_settings_s17Entry;
  "COMBAT_RANKING_SETTINGS_S18": Combat_ranking_settings_s18Entry;
  "COMBAT_RANKING_SETTINGS_S19": Combat_ranking_settings_s19Entry;
  "COMBAT_RANKING_SETTINGS_S20": Combat_ranking_settings_s20Entry;
  "COMBAT_RANKING_SETTINGS_S21": Combat_ranking_settings_s21Entry;
  "COMBAT_RANKING_SETTINGS_S22": Combat_ranking_settings_s22Entry;
  "COMBAT_RANKING_SETTINGS_S23": Combat_ranking_settings_s23Entry;
  "COMBAT_RANKING_SETTINGS_S24": Combat_ranking_settings_s24Entry;
  "COMBAT_RANKING_SETTINGS_S25": Combat_ranking_settings_s25Entry;
  "COMBAT_RANKING_SETTINGS_S26": Combat_ranking_settings_s26Entry;
  "COMBAT_RANKING_SETTINGS_S27": Combat_ranking_settings_s27Entry;
  "COMBAT_RANKING_SETTINGS_S28": Combat_ranking_settings_s28Entry;
  "COMBAT_RANKING_SETTINGS_S29": Combat_ranking_settings_s29Entry;
  "COMBAT_RANKING_SETTINGS_S8": Combat_ranking_settings_s8Entry;
  "COMBAT_RANKING_SETTINGS_S9": Combat_ranking_settings_s9Entry;
}

export type CombatRankingMasterfileEntry = Combat_ranking_settingsEntry | Combat_ranking_settings_s10Entry | Combat_ranking_settings_s13Entry | Combat_ranking_settings_s14Entry | Combat_ranking_settings_s15Entry | Combat_ranking_settings_s16Entry | Combat_ranking_settings_s17Entry | Combat_ranking_settings_s18Entry | Combat_ranking_settings_s19Entry | Combat_ranking_settings_s20Entry | Combat_ranking_settings_s21Entry | Combat_ranking_settings_s22Entry | Combat_ranking_settings_s23Entry | Combat_ranking_settings_s24Entry | Combat_ranking_settings_s25Entry | Combat_ranking_settings_s26Entry | Combat_ranking_settings_s27Entry | Combat_ranking_settings_s28Entry | Combat_ranking_settings_s29Entry | Combat_ranking_settings_s8Entry | Combat_ranking_settings_s9Entry;
