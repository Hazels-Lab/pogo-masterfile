/* eslint-disable */
// Auto-generated from GAME_MASTER.json
// Do not edit by hand.
// Group: quests/client
// Filters: all
// Entries emitted: 55

export interface Level_71_capdataclientquesttemplatequestmultipartsubquestsitem {
  questId: string;
}
export interface Level_71_capdataclientquesttemplatequestmultipart {
  subQuests: (Level_71_capdataclientquesttemplatequestmultipartsubquestsitem)[];
}
export interface Level_71_capdataclientquesttemplatequestquestrewardsitem {
  levelCap: number;
  "type": string;
}
export interface Level_71_capdataclientquesttemplatequest {
  multiPart: Level_71_capdataclientquesttemplatequestmultipart;
  questContext: string;
  questId: string;
  questRewards: (Level_71_capdataclientquesttemplatequestquestrewardsitem)[];
  questType: string;
  templateId: string;
}
export interface Level_71_capdataclientquesttemplatequestdisplay {
  subquestDisplays: (Level_71_capdataclientquesttemplatequestmultipartsubquestsitem)[];
  title: string;
}
export interface Level_71_capdataclientquesttemplate {
  quest: Level_71_capdataclientquesttemplatequest;
  questDisplay: Level_71_capdataclientquesttemplatequestdisplay;
}
export interface Level_71_capdata {
  clientQuestTemplate: Level_71_capdataclientquesttemplate;
  templateId: string;
}
export interface Level_71_capEntry {
  templateId: "LEVEL_71_CAP";
  data: Level_71_capdata;
}
export interface Level_72_capEntry {
  templateId: "LEVEL_72_CAP";
  data: Level_71_capdata;
}
export interface Level_73_capEntry {
  templateId: "LEVEL_73_CAP";
  data: Level_71_capdata;
}
export interface Level_74_capEntry {
  templateId: "LEVEL_74_CAP";
  data: Level_71_capdata;
}
export interface Level_75_capEntry {
  templateId: "LEVEL_75_CAP";
  data: Level_71_capdata;
}
export interface Level_76_capEntry {
  templateId: "LEVEL_76_CAP";
  data: Level_71_capdata;
}
export interface Level_77_capEntry {
  templateId: "LEVEL_77_CAP";
  data: Level_71_capdata;
}
export interface Level_78_capEntry {
  templateId: "LEVEL_78_CAP";
  data: Level_71_capdata;
}
export interface Level_79_capEntry {
  templateId: "LEVEL_79_CAP";
  data: Level_71_capdata;
}
export interface Level_80_capEntry {
  templateId: "LEVEL_80_CAP";
  data: Level_71_capdata;
}
export interface Level_71_cap_sub_0dataclientquesttemplatequestgoalconditionitemwithbadgetype {
  badgeRank: number;
  badgeTypesToExclude: (string)[];
}
export interface Level_71_cap_sub_0dataclientquesttemplatequestgoalconditionitem {
  "type": string;
  withBadgeType: Level_71_cap_sub_0dataclientquesttemplatequestgoalconditionitemwithbadgetype;
}
export interface Level_71_cap_sub_0dataclientquesttemplatequestgoal {
  condition: (Level_71_cap_sub_0dataclientquesttemplatequestgoalconditionitem)[];
  target: number;
}
export interface Level_71_cap_sub_0dataclientquesttemplatequestquestrewardsitem {
  exp: number;
  "type": string;
}
export interface Level_71_cap_sub_0dataclientquesttemplatequest {
  goal: Level_71_cap_sub_0dataclientquesttemplatequestgoal;
  questContext: string;
  questId: string;
  questRewards: (Level_71_cap_sub_0dataclientquesttemplatequestquestrewardsitem)[];
  questType: string;
  templateId: string;
}
export interface Level_71_cap_sub_0dataclientquesttemplatequestdisplay {
  description: string;
  title: string;
}
export interface Level_71_cap_sub_0dataclientquesttemplate {
  quest: Level_71_cap_sub_0dataclientquesttemplatequest;
  questDisplay: Level_71_cap_sub_0dataclientquesttemplatequestdisplay;
}
export interface Level_71_cap_sub_0data {
  clientQuestTemplate: Level_71_cap_sub_0dataclientquesttemplate;
  templateId: string;
}
export interface Level_71_cap_sub_0Entry {
  templateId: "LEVEL_71_CAP_SUB_0";
  data: Level_71_cap_sub_0data;
}
export interface Level_72_cap_sub_0Entry {
  templateId: "LEVEL_72_CAP_SUB_0";
  data: Level_71_cap_sub_0data;
}
export interface Level_73_cap_sub_0Entry {
  templateId: "LEVEL_73_CAP_SUB_0";
  data: Level_71_cap_sub_0data;
}
export interface Level_74_cap_sub_0Entry {
  templateId: "LEVEL_74_CAP_SUB_0";
  data: Level_71_cap_sub_0data;
}
export interface Level_75_cap_sub_0Entry {
  templateId: "LEVEL_75_CAP_SUB_0";
  data: Level_71_cap_sub_0data;
}
export interface Level_76_cap_sub_0Entry {
  templateId: "LEVEL_76_CAP_SUB_0";
  data: Level_71_cap_sub_0data;
}
export interface Level_77_cap_sub_0Entry {
  templateId: "LEVEL_77_CAP_SUB_0";
  data: Level_71_cap_sub_0data;
}
export interface Level_78_cap_sub_0Entry {
  templateId: "LEVEL_78_CAP_SUB_0";
  data: Level_71_cap_sub_0data;
}
export interface Level_79_cap_sub_0Entry {
  templateId: "LEVEL_79_CAP_SUB_0";
  data: Level_71_cap_sub_0data;
}
export interface Level_80_cap_sub_0Entry {
  templateId: "LEVEL_80_CAP_SUB_0";
  data: Level_71_cap_sub_0data;
}
export interface Level_71_cap_sub_1dataclientquesttemplatequestgoalconditionitem {
  "type": string;
}
export interface Level_71_cap_sub_1dataclientquesttemplatequestgoal {
  condition: (Level_71_cap_sub_1dataclientquesttemplatequestgoalconditionitem)[];
  target: number;
}
export interface Level_71_cap_sub_1dataclientquesttemplatequest {
  goal: Level_71_cap_sub_1dataclientquesttemplatequestgoal;
  questContext: string;
  questId: string;
  questRewards: (Level_71_cap_sub_0dataclientquesttemplatequestquestrewardsitem)[];
  questType: string;
  templateId: string;
}
export interface Level_71_cap_sub_1dataclientquesttemplate {
  quest: Level_71_cap_sub_1dataclientquesttemplatequest;
  questDisplay: Level_71_cap_sub_0dataclientquesttemplatequestdisplay;
}
export interface Level_71_cap_sub_1data {
  clientQuestTemplate: Level_71_cap_sub_1dataclientquesttemplate;
  templateId: string;
}
export interface Level_71_cap_sub_1Entry {
  templateId: "LEVEL_71_CAP_SUB_1";
  data: Level_71_cap_sub_1data;
}
export interface Level_71_cap_sub_3Entry {
  templateId: "LEVEL_71_CAP_SUB_3";
  data: Level_71_cap_sub_1data;
}
export interface Level_72_cap_sub_1Entry {
  templateId: "LEVEL_72_CAP_SUB_1";
  data: Level_71_cap_sub_1data;
}
export interface Level_72_cap_sub_2Entry {
  templateId: "LEVEL_72_CAP_SUB_2";
  data: Level_71_cap_sub_1data;
}
export interface Level_73_cap_sub_3Entry {
  templateId: "LEVEL_73_CAP_SUB_3";
  data: Level_71_cap_sub_1data;
}
export interface Level_76_cap_sub_3Entry {
  templateId: "LEVEL_76_CAP_SUB_3";
  data: Level_71_cap_sub_1data;
}
export interface Level_79_cap_sub_3Entry {
  templateId: "LEVEL_79_CAP_SUB_3";
  data: Level_71_cap_sub_1data;
}
export interface Level_80_cap_sub_3Entry {
  templateId: "LEVEL_80_CAP_SUB_3";
  data: Level_71_cap_sub_1data;
}
export interface Level_71_cap_sub_2dataclientquesttemplatequestgoalconditionitemwiththrowtype {
  throwType: string;
}
export interface Level_71_cap_sub_2dataclientquesttemplatequestgoalconditionitem {
  "type": string;
  withThrowType: Level_71_cap_sub_2dataclientquesttemplatequestgoalconditionitemwiththrowtype;
}
export interface Level_71_cap_sub_2dataclientquesttemplatequestgoal {
  condition: (Level_71_cap_sub_2dataclientquesttemplatequestgoalconditionitem)[];
  target: number;
}
export interface Level_71_cap_sub_2dataclientquesttemplatequest {
  goal: Level_71_cap_sub_2dataclientquesttemplatequestgoal;
  questContext: string;
  questId: string;
  questRewards: (Level_71_cap_sub_0dataclientquesttemplatequestquestrewardsitem)[];
  questType: string;
  templateId: string;
}
export interface Level_71_cap_sub_2dataclientquesttemplate {
  quest: Level_71_cap_sub_2dataclientquesttemplatequest;
  questDisplay: Level_71_cap_sub_0dataclientquesttemplatequestdisplay;
}
export interface Level_71_cap_sub_2data {
  clientQuestTemplate: Level_71_cap_sub_2dataclientquesttemplate;
  templateId: string;
}
export interface Level_71_cap_sub_2Entry {
  templateId: "LEVEL_71_CAP_SUB_2";
  data: Level_71_cap_sub_2data;
}
export interface Level_75_cap_sub_2Entry {
  templateId: "LEVEL_75_CAP_SUB_2";
  data: Level_71_cap_sub_2data;
}
export interface Level_80_cap_sub_2Entry {
  templateId: "LEVEL_80_CAP_SUB_2";
  data: Level_71_cap_sub_2data;
}
export interface Level_72_cap_sub_3dataclientquesttemplatequestgoal {
  target: number;
}
export interface Level_72_cap_sub_3dataclientquesttemplatequest {
  goal: Level_72_cap_sub_3dataclientquesttemplatequestgoal;
  questContext: string;
  questId: string;
  questRewards: (Level_71_cap_sub_0dataclientquesttemplatequestquestrewardsitem)[];
  questType: string;
  templateId: string;
}
export interface Level_72_cap_sub_3dataclientquesttemplate {
  quest: Level_72_cap_sub_3dataclientquesttemplatequest;
  questDisplay: Level_71_cap_sub_0dataclientquesttemplatequestdisplay;
}
export interface Level_72_cap_sub_3data {
  clientQuestTemplate: Level_72_cap_sub_3dataclientquesttemplate;
  templateId: string;
}
export interface Level_72_cap_sub_3Entry {
  templateId: "LEVEL_72_CAP_SUB_3";
  data: Level_72_cap_sub_3data;
}
export interface Level_73_cap_sub_1Entry {
  templateId: "LEVEL_73_CAP_SUB_1";
  data: Level_72_cap_sub_3data;
}
export interface Level_74_cap_sub_1Entry {
  templateId: "LEVEL_74_CAP_SUB_1";
  data: Level_72_cap_sub_3data;
}
export interface Level_74_cap_sub_2Entry {
  templateId: "LEVEL_74_CAP_SUB_2";
  data: Level_72_cap_sub_3data;
}
export interface Level_75_cap_sub_1Entry {
  templateId: "LEVEL_75_CAP_SUB_1";
  data: Level_72_cap_sub_3data;
}
export interface Level_75_cap_sub_3Entry {
  templateId: "LEVEL_75_CAP_SUB_3";
  data: Level_72_cap_sub_3data;
}
export interface Level_76_cap_sub_2Entry {
  templateId: "LEVEL_76_CAP_SUB_2";
  data: Level_72_cap_sub_3data;
}
export interface Level_78_cap_sub_1Entry {
  templateId: "LEVEL_78_CAP_SUB_1";
  data: Level_72_cap_sub_3data;
}
export interface Level_78_cap_sub_2Entry {
  templateId: "LEVEL_78_CAP_SUB_2";
  data: Level_72_cap_sub_3data;
}
export interface Level_79_cap_sub_2Entry {
  templateId: "LEVEL_79_CAP_SUB_2";
  data: Level_72_cap_sub_3data;
}
export interface Level_73_cap_sub_2dataclientquesttemplatequestgoalconditionitemwithpokemonlevel {
  maxLevel: boolean;
}
export interface Level_73_cap_sub_2dataclientquesttemplatequestgoalconditionitem {
  "type": string;
  withPokemonLevel: Level_73_cap_sub_2dataclientquesttemplatequestgoalconditionitemwithpokemonlevel;
}
export interface Level_73_cap_sub_2dataclientquesttemplatequestgoal {
  condition: (Level_73_cap_sub_2dataclientquesttemplatequestgoalconditionitem)[];
  target: number;
}
export interface Level_73_cap_sub_2dataclientquesttemplatequest {
  goal: Level_73_cap_sub_2dataclientquesttemplatequestgoal;
  questContext: string;
  questId: string;
  questRewards: (Level_71_cap_sub_0dataclientquesttemplatequestquestrewardsitem)[];
  questType: string;
  templateId: string;
}
export interface Level_73_cap_sub_2dataclientquesttemplate {
  quest: Level_73_cap_sub_2dataclientquesttemplatequest;
  questDisplay: Level_71_cap_sub_0dataclientquesttemplatequestdisplay;
}
export interface Level_73_cap_sub_2data {
  clientQuestTemplate: Level_73_cap_sub_2dataclientquesttemplate;
  templateId: string;
}
export interface Level_73_cap_sub_2Entry {
  templateId: "LEVEL_73_CAP_SUB_2";
  data: Level_73_cap_sub_2data;
}
export interface Level_77_cap_sub_1Entry {
  templateId: "LEVEL_77_CAP_SUB_1";
  data: Level_73_cap_sub_2data;
}
export interface Level_74_cap_sub_3dataclientquesttemplatequestgoalconditionitemwithquestcontext {
  context: string;
}
export interface Level_74_cap_sub_3dataclientquesttemplatequestgoalconditionitem {
  "type": string;
  withQuestContext: Level_74_cap_sub_3dataclientquesttemplatequestgoalconditionitemwithquestcontext;
}
export interface Level_74_cap_sub_3dataclientquesttemplatequestgoal {
  condition: (Level_74_cap_sub_3dataclientquesttemplatequestgoalconditionitem)[];
  target: number;
}
export interface Level_74_cap_sub_3dataclientquesttemplatequest {
  goal: Level_74_cap_sub_3dataclientquesttemplatequestgoal;
  questContext: string;
  questId: string;
  questRewards: (Level_71_cap_sub_0dataclientquesttemplatequestquestrewardsitem)[];
  questType: string;
  templateId: string;
}
export interface Level_74_cap_sub_3dataclientquesttemplate {
  quest: Level_74_cap_sub_3dataclientquesttemplatequest;
  questDisplay: Level_71_cap_sub_0dataclientquesttemplatequestdisplay;
}
export interface Level_74_cap_sub_3data {
  clientQuestTemplate: Level_74_cap_sub_3dataclientquesttemplate;
  templateId: string;
}
export interface Level_74_cap_sub_3Entry {
  templateId: "LEVEL_74_CAP_SUB_3";
  data: Level_74_cap_sub_3data;
}
export interface Level_78_cap_sub_3Entry {
  templateId: "LEVEL_78_CAP_SUB_3";
  data: Level_74_cap_sub_3data;
}
export interface Level_76_cap_sub_1dataclientquesttemplatequestgoalconditionitemwithinvasioncharacter {
  category: (string)[];
}
export interface Level_76_cap_sub_1dataclientquesttemplatequestgoalconditionitem {
  "type": string;
  withInvasionCharacter?: Level_76_cap_sub_1dataclientquesttemplatequestgoalconditionitemwithinvasioncharacter;
}
export interface Level_76_cap_sub_1dataclientquesttemplatequestgoal {
  condition: (Level_76_cap_sub_1dataclientquesttemplatequestgoalconditionitem)[];
  target: number;
}
export interface Level_76_cap_sub_1dataclientquesttemplatequest {
  goal: Level_76_cap_sub_1dataclientquesttemplatequestgoal;
  questContext: string;
  questId: string;
  questRewards: (Level_71_cap_sub_0dataclientquesttemplatequestquestrewardsitem)[];
  questType: string;
  templateId: string;
}
export interface Level_76_cap_sub_1dataclientquesttemplate {
  quest: Level_76_cap_sub_1dataclientquesttemplatequest;
  questDisplay: Level_71_cap_sub_0dataclientquesttemplatequestdisplay;
}
export interface Level_76_cap_sub_1data {
  clientQuestTemplate: Level_76_cap_sub_1dataclientquesttemplate;
  templateId: string;
}
export interface Level_76_cap_sub_1Entry {
  templateId: "LEVEL_76_CAP_SUB_1";
  data: Level_76_cap_sub_1data;
}
export interface Level_79_cap_sub_1Entry {
  templateId: "LEVEL_79_CAP_SUB_1";
  data: Level_76_cap_sub_1data;
}
export interface Level_77_cap_sub_2dataclientquesttemplatequestgoalconditionitemwithcombattype {
  combatType: (string)[];
}
export interface Level_77_cap_sub_2dataclientquesttemplatequestgoalconditionitem {
  "type": string;
  withCombatType?: Level_77_cap_sub_2dataclientquesttemplatequestgoalconditionitemwithcombattype;
}
export interface Level_77_cap_sub_2dataclientquesttemplatequestgoal {
  condition: (Level_77_cap_sub_2dataclientquesttemplatequestgoalconditionitem)[];
  target: number;
}
export interface Level_77_cap_sub_2dataclientquesttemplatequest {
  goal: Level_77_cap_sub_2dataclientquesttemplatequestgoal;
  questContext: string;
  questId: string;
  questRewards: (Level_71_cap_sub_0dataclientquesttemplatequestquestrewardsitem)[];
  questType: string;
  templateId: string;
}
export interface Level_77_cap_sub_2dataclientquesttemplate {
  quest: Level_77_cap_sub_2dataclientquesttemplatequest;
  questDisplay: Level_71_cap_sub_0dataclientquesttemplatequestdisplay;
}
export interface Level_77_cap_sub_2data {
  clientQuestTemplate: Level_77_cap_sub_2dataclientquesttemplate;
  templateId: string;
}
export interface Level_77_cap_sub_2Entry {
  templateId: "LEVEL_77_CAP_SUB_2";
  data: Level_77_cap_sub_2data;
}
export interface Level_80_cap_sub_1Entry {
  templateId: "LEVEL_80_CAP_SUB_1";
  data: Level_77_cap_sub_2data;
}
export interface Level_77_cap_sub_3dataclientquesttemplatequestgoalconditionitemwithdistance {
  distanceKm: number;
}
export interface Level_77_cap_sub_3dataclientquesttemplatequestgoalconditionitem {
  "type": string;
  withDistance: Level_77_cap_sub_3dataclientquesttemplatequestgoalconditionitemwithdistance;
}
export interface Level_77_cap_sub_3dataclientquesttemplatequestgoal {
  condition: (Level_77_cap_sub_3dataclientquesttemplatequestgoalconditionitem)[];
  target: number;
}
export interface Level_77_cap_sub_3dataclientquesttemplatequest {
  goal: Level_77_cap_sub_3dataclientquesttemplatequestgoal;
  questContext: string;
  questId: string;
  questRewards: (Level_71_cap_sub_0dataclientquesttemplatequestquestrewardsitem)[];
  questType: string;
  templateId: string;
}
export interface Level_77_cap_sub_3dataclientquesttemplate {
  quest: Level_77_cap_sub_3dataclientquesttemplatequest;
  questDisplay: Level_71_cap_sub_0dataclientquesttemplatequestdisplay;
}
export interface Level_77_cap_sub_3data {
  clientQuestTemplate: Level_77_cap_sub_3dataclientquesttemplate;
  templateId: string;
}
export interface Level_77_cap_sub_3Entry {
  templateId: "LEVEL_77_CAP_SUB_3";
  data: Level_77_cap_sub_3data;
}
export interface Weekly_challenge_party_questdataclientquesttemplatequestquestrewardsitem {
  friendshipPoints?: number;
  stardust?: number;
  "type": string;
}
export interface Weekly_challenge_party_questdataclientquesttemplatequest {
  difficulty: string;
  goal: Level_72_cap_sub_3dataclientquesttemplatequestgoal;
  questContext: string;
  questId: string;
  questRewards: (Weekly_challenge_party_questdataclientquesttemplatequestquestrewardsitem)[];
  questType: string;
  templateId: string;
}
export interface Weekly_challenge_party_questdataclientquesttemplate {
  quest: Weekly_challenge_party_questdataclientquesttemplatequest;
  questDisplay: Level_71_cap_sub_0dataclientquesttemplatequestdisplay;
}
export interface Weekly_challenge_party_questdata {
  clientQuestTemplate: Weekly_challenge_party_questdataclientquesttemplate;
  templateId: string;
}
export interface Weekly_challenge_party_questEntry {
  templateId: "WEEKLY_CHALLENGE_PARTY_QUEST";
  data: Weekly_challenge_party_questdata;
}
export interface Weekly_challenge_party_quest_week1dataclientquesttemplatequestquestrewardsitemitem {
  amount: number;
  item: string;
}
export interface Weekly_challenge_party_quest_week1dataclientquesttemplatequestquestrewardsitempokemonencounterpokemondisplay {
  form: string;
}
export interface Weekly_challenge_party_quest_week1dataclientquesttemplatequestquestrewardsitempokemonencounter {
  pokemonDisplay: Weekly_challenge_party_quest_week1dataclientquesttemplatequestquestrewardsitempokemonencounterpokemondisplay;
  pokemonId: string;
}
export interface Weekly_challenge_party_quest_week1dataclientquesttemplatequestquestrewardsitem {
  exp?: number;
  friendshipPoints?: number;
  item?: Weekly_challenge_party_quest_week1dataclientquesttemplatequestquestrewardsitemitem;
  pokemonEncounter?: Weekly_challenge_party_quest_week1dataclientquesttemplatequestquestrewardsitempokemonencounter;
  stardust?: number;
  "type": string;
}
export interface Weekly_challenge_party_quest_week1dataclientquesttemplatequest {
  difficulty: string;
  goal: Level_72_cap_sub_3dataclientquesttemplatequestgoal;
  questContext: string;
  questId: string;
  questRewards: (Weekly_challenge_party_quest_week1dataclientquesttemplatequestquestrewardsitem)[];
  questType: string;
  templateId: string;
}
export interface Weekly_challenge_party_quest_week1dataclientquesttemplate {
  quest: Weekly_challenge_party_quest_week1dataclientquesttemplatequest;
  questDisplay: Level_71_cap_sub_0dataclientquesttemplatequestdisplay;
}
export interface Weekly_challenge_party_quest_week1data {
  clientQuestTemplate: Weekly_challenge_party_quest_week1dataclientquesttemplate;
  templateId: string;
}
export interface Weekly_challenge_party_quest_week1Entry {
  templateId: "WEEKLY_CHALLENGE_PARTY_QUEST_WEEK1";
  data: Weekly_challenge_party_quest_week1data;
}
export interface Weekly_challenge_party_quest_week2Entry {
  templateId: "WEEKLY_CHALLENGE_PARTY_QUEST_WEEK2";
  data: Weekly_challenge_party_quest_week1data;
}
export interface Weekly_challenge_party_quest_week3dataclientquesttemplatequest {
  difficulty: string;
  goal: Level_72_cap_sub_3dataclientquesttemplatequestgoal;
  questContext: string;
  questId: string;
  questRewards: (Weekly_challenge_party_quest_week1dataclientquesttemplatequestquestrewardsitem)[];
  questType: string;
  questUpdateToastProgressPercentageThreshold: number;
  templateId: string;
}
export interface Weekly_challenge_party_quest_week3dataclientquesttemplate {
  quest: Weekly_challenge_party_quest_week3dataclientquesttemplatequest;
  questDisplay: Level_71_cap_sub_0dataclientquesttemplatequestdisplay;
}
export interface Weekly_challenge_party_quest_week3data {
  clientQuestTemplate: Weekly_challenge_party_quest_week3dataclientquesttemplate;
  templateId: string;
}
export interface Weekly_challenge_party_quest_week3Entry {
  templateId: "WEEKLY_CHALLENGE_PARTY_QUEST_WEEK3";
  data: Weekly_challenge_party_quest_week3data;
}
export interface Weekly_challenge_party_quest_week4dataclientquesttemplatequest {
  difficulty: string;
  goal: Level_74_cap_sub_3dataclientquesttemplatequestgoal;
  questContext: string;
  questId: string;
  questRewards: (Weekly_challenge_party_quest_week1dataclientquesttemplatequestquestrewardsitem)[];
  questType: string;
  templateId: string;
}
export interface Weekly_challenge_party_quest_week4dataclientquesttemplate {
  quest: Weekly_challenge_party_quest_week4dataclientquesttemplatequest;
  questDisplay: Level_71_cap_sub_0dataclientquesttemplatequestdisplay;
}
export interface Weekly_challenge_party_quest_week4data {
  clientQuestTemplate: Weekly_challenge_party_quest_week4dataclientquesttemplate;
  templateId: string;
}
export interface Weekly_challenge_party_quest_week4Entry {
  templateId: "WEEKLY_CHALLENGE_PARTY_QUEST_WEEK4";
  data: Weekly_challenge_party_quest_week4data;
}

export interface QuestsClientMasterfileByTemplateId {
  "LEVEL_71_CAP": Level_71_capEntry;
  "LEVEL_72_CAP": Level_72_capEntry;
  "LEVEL_73_CAP": Level_73_capEntry;
  "LEVEL_74_CAP": Level_74_capEntry;
  "LEVEL_75_CAP": Level_75_capEntry;
  "LEVEL_76_CAP": Level_76_capEntry;
  "LEVEL_77_CAP": Level_77_capEntry;
  "LEVEL_78_CAP": Level_78_capEntry;
  "LEVEL_79_CAP": Level_79_capEntry;
  "LEVEL_80_CAP": Level_80_capEntry;
  "LEVEL_71_CAP_SUB_0": Level_71_cap_sub_0Entry;
  "LEVEL_72_CAP_SUB_0": Level_72_cap_sub_0Entry;
  "LEVEL_73_CAP_SUB_0": Level_73_cap_sub_0Entry;
  "LEVEL_74_CAP_SUB_0": Level_74_cap_sub_0Entry;
  "LEVEL_75_CAP_SUB_0": Level_75_cap_sub_0Entry;
  "LEVEL_76_CAP_SUB_0": Level_76_cap_sub_0Entry;
  "LEVEL_77_CAP_SUB_0": Level_77_cap_sub_0Entry;
  "LEVEL_78_CAP_SUB_0": Level_78_cap_sub_0Entry;
  "LEVEL_79_CAP_SUB_0": Level_79_cap_sub_0Entry;
  "LEVEL_80_CAP_SUB_0": Level_80_cap_sub_0Entry;
  "LEVEL_71_CAP_SUB_1": Level_71_cap_sub_1Entry;
  "LEVEL_71_CAP_SUB_3": Level_71_cap_sub_3Entry;
  "LEVEL_72_CAP_SUB_1": Level_72_cap_sub_1Entry;
  "LEVEL_72_CAP_SUB_2": Level_72_cap_sub_2Entry;
  "LEVEL_73_CAP_SUB_3": Level_73_cap_sub_3Entry;
  "LEVEL_76_CAP_SUB_3": Level_76_cap_sub_3Entry;
  "LEVEL_79_CAP_SUB_3": Level_79_cap_sub_3Entry;
  "LEVEL_80_CAP_SUB_3": Level_80_cap_sub_3Entry;
  "LEVEL_71_CAP_SUB_2": Level_71_cap_sub_2Entry;
  "LEVEL_75_CAP_SUB_2": Level_75_cap_sub_2Entry;
  "LEVEL_80_CAP_SUB_2": Level_80_cap_sub_2Entry;
  "LEVEL_72_CAP_SUB_3": Level_72_cap_sub_3Entry;
  "LEVEL_73_CAP_SUB_1": Level_73_cap_sub_1Entry;
  "LEVEL_74_CAP_SUB_1": Level_74_cap_sub_1Entry;
  "LEVEL_74_CAP_SUB_2": Level_74_cap_sub_2Entry;
  "LEVEL_75_CAP_SUB_1": Level_75_cap_sub_1Entry;
  "LEVEL_75_CAP_SUB_3": Level_75_cap_sub_3Entry;
  "LEVEL_76_CAP_SUB_2": Level_76_cap_sub_2Entry;
  "LEVEL_78_CAP_SUB_1": Level_78_cap_sub_1Entry;
  "LEVEL_78_CAP_SUB_2": Level_78_cap_sub_2Entry;
  "LEVEL_79_CAP_SUB_2": Level_79_cap_sub_2Entry;
  "LEVEL_73_CAP_SUB_2": Level_73_cap_sub_2Entry;
  "LEVEL_77_CAP_SUB_1": Level_77_cap_sub_1Entry;
  "LEVEL_74_CAP_SUB_3": Level_74_cap_sub_3Entry;
  "LEVEL_78_CAP_SUB_3": Level_78_cap_sub_3Entry;
  "LEVEL_76_CAP_SUB_1": Level_76_cap_sub_1Entry;
  "LEVEL_79_CAP_SUB_1": Level_79_cap_sub_1Entry;
  "LEVEL_77_CAP_SUB_2": Level_77_cap_sub_2Entry;
  "LEVEL_80_CAP_SUB_1": Level_80_cap_sub_1Entry;
  "LEVEL_77_CAP_SUB_3": Level_77_cap_sub_3Entry;
  "WEEKLY_CHALLENGE_PARTY_QUEST": Weekly_challenge_party_questEntry;
  "WEEKLY_CHALLENGE_PARTY_QUEST_WEEK1": Weekly_challenge_party_quest_week1Entry;
  "WEEKLY_CHALLENGE_PARTY_QUEST_WEEK2": Weekly_challenge_party_quest_week2Entry;
  "WEEKLY_CHALLENGE_PARTY_QUEST_WEEK3": Weekly_challenge_party_quest_week3Entry;
  "WEEKLY_CHALLENGE_PARTY_QUEST_WEEK4": Weekly_challenge_party_quest_week4Entry;
}

export type QuestsClientMasterfileEntry = Level_71_capEntry | Level_72_capEntry | Level_73_capEntry | Level_74_capEntry | Level_75_capEntry | Level_76_capEntry | Level_77_capEntry | Level_78_capEntry | Level_79_capEntry | Level_80_capEntry | Level_71_cap_sub_0Entry | Level_72_cap_sub_0Entry | Level_73_cap_sub_0Entry | Level_74_cap_sub_0Entry | Level_75_cap_sub_0Entry | Level_76_cap_sub_0Entry | Level_77_cap_sub_0Entry | Level_78_cap_sub_0Entry | Level_79_cap_sub_0Entry | Level_80_cap_sub_0Entry | Level_71_cap_sub_1Entry | Level_71_cap_sub_3Entry | Level_72_cap_sub_1Entry | Level_72_cap_sub_2Entry | Level_73_cap_sub_3Entry | Level_76_cap_sub_3Entry | Level_79_cap_sub_3Entry | Level_80_cap_sub_3Entry | Level_71_cap_sub_2Entry | Level_75_cap_sub_2Entry | Level_80_cap_sub_2Entry | Level_72_cap_sub_3Entry | Level_73_cap_sub_1Entry | Level_74_cap_sub_1Entry | Level_74_cap_sub_2Entry | Level_75_cap_sub_1Entry | Level_75_cap_sub_3Entry | Level_76_cap_sub_2Entry | Level_78_cap_sub_1Entry | Level_78_cap_sub_2Entry | Level_79_cap_sub_2Entry | Level_73_cap_sub_2Entry | Level_77_cap_sub_1Entry | Level_74_cap_sub_3Entry | Level_78_cap_sub_3Entry | Level_76_cap_sub_1Entry | Level_79_cap_sub_1Entry | Level_77_cap_sub_2Entry | Level_80_cap_sub_1Entry | Level_77_cap_sub_3Entry | Weekly_challenge_party_questEntry | Weekly_challenge_party_quest_week1Entry | Weekly_challenge_party_quest_week2Entry | Weekly_challenge_party_quest_week3Entry | Weekly_challenge_party_quest_week4Entry;
