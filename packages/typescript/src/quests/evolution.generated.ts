/* eslint-disable */
// Auto-generated from GAME_MASTER.json
// Do not edit by hand.
// Group: quests/evolution
// Filters: all
// Entries emitted: 37

export interface Annihilape_cd_evolution_questdataevolutionquesttemplatedisplay {
  description: string;
  title: string;
}
export interface Annihilape_cd_evolution_questdataevolutionquesttemplategoalsitemconditionitemwithpokemontype {
  pokemonType: (string)[];
}
export interface Annihilape_cd_evolution_questdataevolutionquesttemplategoalsitemconditionitem {
  "type": string;
  withPokemonType: Annihilape_cd_evolution_questdataevolutionquesttemplategoalsitemconditionitemwithpokemontype;
}
export interface Annihilape_cd_evolution_questdataevolutionquesttemplategoalsitem {
  condition: (Annihilape_cd_evolution_questdataevolutionquesttemplategoalsitemconditionitem)[];
  target: number;
}
export interface Annihilape_cd_evolution_questdataevolutionquesttemplate {
  context: string;
  display: Annihilape_cd_evolution_questdataevolutionquesttemplatedisplay;
  goals: (Annihilape_cd_evolution_questdataevolutionquesttemplategoalsitem)[];
  questTemplateId: string;
  questType: string;
}
export interface Annihilape_cd_evolution_questdata {
  evolutionQuestTemplate: Annihilape_cd_evolution_questdataevolutionquesttemplate;
  templateId: string;
}
export interface Annihilape_cd_evolution_questEntry {
  templateId: "ANNIHILAPE_CD_EVOLUTION_QUEST";
  data: Annihilape_cd_evolution_questdata;
}
export interface Annihilape_evolution_questdataevolutionquesttemplategoalsitemconditionitemwithopponentpokemonbattlestatus {
  opponentPokemonType: (string)[];
  requireDefeat: boolean;
}
export interface Annihilape_evolution_questdataevolutionquesttemplategoalsitemconditionitem {
  "type": string;
  withOpponentPokemonBattleStatus: Annihilape_evolution_questdataevolutionquesttemplategoalsitemconditionitemwithopponentpokemonbattlestatus;
}
export interface Annihilape_evolution_questdataevolutionquesttemplategoalsitem {
  condition: (Annihilape_evolution_questdataevolutionquesttemplategoalsitemconditionitem)[];
  target: number;
}
export interface Annihilape_evolution_questdataevolutionquesttemplate {
  context: string;
  display: Annihilape_cd_evolution_questdataevolutionquesttemplatedisplay;
  goals: (Annihilape_evolution_questdataevolutionquesttemplategoalsitem)[];
  questTemplateId: string;
  questType: string;
}
export interface Annihilape_evolution_questdata {
  evolutionQuestTemplate: Annihilape_evolution_questdataevolutionquesttemplate;
  templateId: string;
}
export interface Annihilape_evolution_questEntry {
  templateId: "ANNIHILAPE_EVOLUTION_QUEST";
  data: Annihilape_evolution_questdata;
}
export interface Bisharp_kingambit_evolution_questdataevolutionquesttemplategoalsitemconditionitemwithcombattype {
  combatType: (string)[];
}
export interface Bisharp_kingambit_evolution_questdataevolutionquesttemplategoalsitemconditionitem {
  "type": string;
  withCombatType?: Bisharp_kingambit_evolution_questdataevolutionquesttemplategoalsitemconditionitemwithcombattype;
  withPokemonType?: Annihilape_cd_evolution_questdataevolutionquesttemplategoalsitemconditionitemwithpokemontype;
}
export interface Bisharp_kingambit_evolution_questdataevolutionquesttemplategoalsitem {
  condition: (Bisharp_kingambit_evolution_questdataevolutionquesttemplategoalsitemconditionitem)[];
  target: number;
}
export interface Bisharp_kingambit_evolution_questdataevolutionquesttemplate {
  context: string;
  display: Annihilape_cd_evolution_questdataevolutionquesttemplatedisplay;
  goals: (Bisharp_kingambit_evolution_questdataevolutionquesttemplategoalsitem)[];
  questTemplateId: string;
  questType: string;
}
export interface Bisharp_kingambit_evolution_questdata {
  evolutionQuestTemplate: Bisharp_kingambit_evolution_questdataevolutionquesttemplate;
  templateId: string;
}
export interface Bisharp_kingambit_evolution_questEntry {
  templateId: "BISHARP_KINGAMBIT_EVOLUTION_QUEST";
  data: Bisharp_kingambit_evolution_questdata;
}
export interface Chansey_evolution_questdataevolutionquesttemplategoalsitem {
  target: number;
}
export interface Chansey_evolution_questdataevolutionquesttemplate {
  context: string;
  display: Annihilape_cd_evolution_questdataevolutionquesttemplatedisplay;
  goals: (Chansey_evolution_questdataevolutionquesttemplategoalsitem)[];
  questTemplateId: string;
  questType: string;
}
export interface Chansey_evolution_questdata {
  evolutionQuestTemplate: Chansey_evolution_questdataevolutionquesttemplate;
  templateId: string;
}
export interface Chansey_evolution_questEntry {
  templateId: "CHANSEY_EVOLUTION_QUEST";
  data: Chansey_evolution_questdata;
}
export interface Charcadet_armarouge_evolution_questEntry {
  templateId: "CHARCADET_ARMAROUGE_EVOLUTION_QUEST";
  data: Annihilape_evolution_questdata;
}
export interface Charcadet_ceruledge_evolution_questEntry {
  templateId: "CHARCADET_CERULEDGE_EVOLUTION_QUEST";
  data: Annihilape_evolution_questdata;
}
export interface Dipplin_evolution_questEntry {
  templateId: "DIPPLIN_EVOLUTION_QUEST";
  data: Annihilape_cd_evolution_questdata;
}
export interface Espeon_cd_evolution_questEntry {
  templateId: "ESPEON_CD_EVOLUTION_QUEST";
  data: Chansey_evolution_questdata;
}
export interface Espeon_evolution_questEntry {
  templateId: "ESPEON_EVOLUTION_QUEST";
  data: Chansey_evolution_questdata;
}
export interface Florges_cd_evolution_questEntry {
  templateId: "FLORGES_CD_EVOLUTION_QUEST";
  data: Chansey_evolution_questdata;
}
export interface Florges_evolution_questEntry {
  templateId: "FLORGES_EVOLUTION_QUEST";
  data: Chansey_evolution_questdata;
}
export interface Kubfu_rapid_strike_evolution_questEntry {
  templateId: "KUBFU_RAPID_STRIKE_EVOLUTION_QUEST";
  data: Bisharp_kingambit_evolution_questdata;
}
export interface Kubfu_single_strike_evolution_questEntry {
  templateId: "KUBFU_SINGLE_STRIKE_EVOLUTION_QUEST";
  data: Bisharp_kingambit_evolution_questdata;
}
export interface Milotic_evolution_questEntry {
  templateId: "MILOTIC_EVOLUTION_QUEST";
  data: Chansey_evolution_questdata;
}
export interface Mr_mime_evolution_questEntry {
  templateId: "MR_MIME_EVOLUTION_QUEST";
  data: Chansey_evolution_questdata;
}
export interface Naganadel_evolution_questEntry {
  templateId: "NAGANADEL_EVOLUTION_QUEST";
  data: Annihilape_cd_evolution_questdata;
}
export interface Overqwil_evolution_questdataevolutionquesttemplategoalsitemconditionitem {
  "type": string;
}
export interface Overqwil_evolution_questdataevolutionquesttemplategoalsitem {
  condition: (Overqwil_evolution_questdataevolutionquesttemplategoalsitemconditionitem)[];
  target: number;
}
export interface Overqwil_evolution_questdataevolutionquesttemplate {
  context: string;
  display: Annihilape_cd_evolution_questdataevolutionquesttemplatedisplay;
  goals: (Overqwil_evolution_questdataevolutionquesttemplategoalsitem)[];
  questTemplateId: string;
  questType: string;
}
export interface Overqwil_evolution_questdata {
  evolutionQuestTemplate: Overqwil_evolution_questdataevolutionquesttemplate;
  templateId: string;
}
export interface Overqwil_evolution_questEntry {
  templateId: "OVERQWIL_EVOLUTION_QUEST";
  data: Overqwil_evolution_questdata;
}
export interface Pancham_buddy_event_evolution_questEntry {
  templateId: "PANCHAM_BUDDY_EVENT_EVOLUTION_QUEST";
  data: Annihilape_cd_evolution_questdata;
}
export interface Pancham_evolution_questEntry {
  templateId: "PANCHAM_EVOLUTION_QUEST";
  data: Annihilape_cd_evolution_questdata;
}
export interface Pawmot_buddy_event_evolution_questEntry {
  templateId: "PAWMOT_BUDDY_EVENT_EVOLUTION_QUEST";
  data: Chansey_evolution_questdata;
}
export interface Pawmot_cd_evolution_questEntry {
  templateId: "PAWMOT_CD_EVOLUTION_QUEST";
  data: Chansey_evolution_questdata;
}
export interface Pawmot_evolution_questEntry {
  templateId: "PAWMOT_EVOLUTION_QUEST";
  data: Chansey_evolution_questdata;
}
export interface Runerigus_evolution_questEntry {
  templateId: "RUNERIGUS_EVOLUTION_QUEST";
  data: Overqwil_evolution_questdata;
}
export interface Sirfetchd_evolution_questdataevolutionquesttemplategoalsitemconditionitemwiththrowtype {
  throwType: string;
}
export interface Sirfetchd_evolution_questdataevolutionquesttemplategoalsitemconditionitem {
  "type": string;
  withThrowType: Sirfetchd_evolution_questdataevolutionquesttemplategoalsitemconditionitemwiththrowtype;
}
export interface Sirfetchd_evolution_questdataevolutionquesttemplategoalsitem {
  condition: (Sirfetchd_evolution_questdataevolutionquesttemplategoalsitemconditionitem)[];
  target: number;
}
export interface Sirfetchd_evolution_questdataevolutionquesttemplate {
  context: string;
  display: Annihilape_cd_evolution_questdataevolutionquesttemplatedisplay;
  goals: (Sirfetchd_evolution_questdataevolutionquesttemplategoalsitem)[];
  questTemplateId: string;
  questType: string;
}
export interface Sirfetchd_evolution_questdata {
  evolutionQuestTemplate: Sirfetchd_evolution_questdataevolutionquesttemplate;
  templateId: string;
}
export interface Sirfetchd_evolution_questEntry {
  templateId: "SIRFETCHD_EVOLUTION_QUEST";
  data: Sirfetchd_evolution_questdata;
}
export interface Slowbro_g_evolution_questEntry {
  templateId: "SLOWBRO_G_EVOLUTION_QUEST";
  data: Annihilape_cd_evolution_questdata;
}
export interface Slowking_g_evolution_questEntry {
  templateId: "SLOWKING_G_EVOLUTION_QUEST";
  data: Annihilape_cd_evolution_questdata;
}
export interface Sneasler_evolution_questEntry {
  templateId: "SNEASLER_EVOLUTION_QUEST";
  data: Chansey_evolution_questdata;
}
export interface Snom_frosmoth_evolution_questEntry {
  templateId: "SNOM_FROSMOTH_EVOLUTION_QUEST";
  data: Chansey_evolution_questdata;
}
export interface Spritzee_evolution_questEntry {
  templateId: "SPRITZEE_EVOLUTION_QUEST";
  data: Chansey_evolution_questdata;
}
export interface Sudowoodo_evolution_questEntry {
  templateId: "SUDOWOODO_EVOLUTION_QUEST";
  data: Chansey_evolution_questdata;
}
export interface Swirlix_evolution_questEntry {
  templateId: "SWIRLIX_EVOLUTION_QUEST";
  data: Chansey_evolution_questdata;
}
export interface Swoobat_evolution_questEntry {
  templateId: "SWOOBAT_EVOLUTION_QUEST";
  data: Chansey_evolution_questdata;
}
export interface Sylveon_buddy_event_evolution_questEntry {
  templateId: "SYLVEON_BUDDY_EVENT_EVOLUTION_QUEST";
  data: Chansey_evolution_questdata;
}
export interface Sylveon_cd_evolution_questEntry {
  templateId: "SYLVEON_CD_EVOLUTION_QUEST";
  data: Chansey_evolution_questdata;
}
export interface Sylveon_evolution_questEntry {
  templateId: "SYLVEON_EVOLUTION_QUEST";
  data: Chansey_evolution_questdata;
}
export interface Umbreon_cd_evolution_questEntry {
  templateId: "UMBREON_CD_EVOLUTION_QUEST";
  data: Chansey_evolution_questdata;
}
export interface Umbreon_evolution_questEntry {
  templateId: "UMBREON_EVOLUTION_QUEST";
  data: Chansey_evolution_questdata;
}

export interface QuestsEvolutionMasterfileByTemplateId {
  "ANNIHILAPE_CD_EVOLUTION_QUEST": Annihilape_cd_evolution_questEntry;
  "ANNIHILAPE_EVOLUTION_QUEST": Annihilape_evolution_questEntry;
  "BISHARP_KINGAMBIT_EVOLUTION_QUEST": Bisharp_kingambit_evolution_questEntry;
  "CHANSEY_EVOLUTION_QUEST": Chansey_evolution_questEntry;
  "CHARCADET_ARMAROUGE_EVOLUTION_QUEST": Charcadet_armarouge_evolution_questEntry;
  "CHARCADET_CERULEDGE_EVOLUTION_QUEST": Charcadet_ceruledge_evolution_questEntry;
  "DIPPLIN_EVOLUTION_QUEST": Dipplin_evolution_questEntry;
  "ESPEON_CD_EVOLUTION_QUEST": Espeon_cd_evolution_questEntry;
  "ESPEON_EVOLUTION_QUEST": Espeon_evolution_questEntry;
  "FLORGES_CD_EVOLUTION_QUEST": Florges_cd_evolution_questEntry;
  "FLORGES_EVOLUTION_QUEST": Florges_evolution_questEntry;
  "KUBFU_RAPID_STRIKE_EVOLUTION_QUEST": Kubfu_rapid_strike_evolution_questEntry;
  "KUBFU_SINGLE_STRIKE_EVOLUTION_QUEST": Kubfu_single_strike_evolution_questEntry;
  "MILOTIC_EVOLUTION_QUEST": Milotic_evolution_questEntry;
  "MR_MIME_EVOLUTION_QUEST": Mr_mime_evolution_questEntry;
  "NAGANADEL_EVOLUTION_QUEST": Naganadel_evolution_questEntry;
  "OVERQWIL_EVOLUTION_QUEST": Overqwil_evolution_questEntry;
  "PANCHAM_BUDDY_EVENT_EVOLUTION_QUEST": Pancham_buddy_event_evolution_questEntry;
  "PANCHAM_EVOLUTION_QUEST": Pancham_evolution_questEntry;
  "PAWMOT_BUDDY_EVENT_EVOLUTION_QUEST": Pawmot_buddy_event_evolution_questEntry;
  "PAWMOT_CD_EVOLUTION_QUEST": Pawmot_cd_evolution_questEntry;
  "PAWMOT_EVOLUTION_QUEST": Pawmot_evolution_questEntry;
  "RUNERIGUS_EVOLUTION_QUEST": Runerigus_evolution_questEntry;
  "SIRFETCHD_EVOLUTION_QUEST": Sirfetchd_evolution_questEntry;
  "SLOWBRO_G_EVOLUTION_QUEST": Slowbro_g_evolution_questEntry;
  "SLOWKING_G_EVOLUTION_QUEST": Slowking_g_evolution_questEntry;
  "SNEASLER_EVOLUTION_QUEST": Sneasler_evolution_questEntry;
  "SNOM_FROSMOTH_EVOLUTION_QUEST": Snom_frosmoth_evolution_questEntry;
  "SPRITZEE_EVOLUTION_QUEST": Spritzee_evolution_questEntry;
  "SUDOWOODO_EVOLUTION_QUEST": Sudowoodo_evolution_questEntry;
  "SWIRLIX_EVOLUTION_QUEST": Swirlix_evolution_questEntry;
  "SWOOBAT_EVOLUTION_QUEST": Swoobat_evolution_questEntry;
  "SYLVEON_BUDDY_EVENT_EVOLUTION_QUEST": Sylveon_buddy_event_evolution_questEntry;
  "SYLVEON_CD_EVOLUTION_QUEST": Sylveon_cd_evolution_questEntry;
  "SYLVEON_EVOLUTION_QUEST": Sylveon_evolution_questEntry;
  "UMBREON_CD_EVOLUTION_QUEST": Umbreon_cd_evolution_questEntry;
  "UMBREON_EVOLUTION_QUEST": Umbreon_evolution_questEntry;
}

export type QuestsEvolutionMasterfileEntry = Annihilape_cd_evolution_questEntry | Annihilape_evolution_questEntry | Bisharp_kingambit_evolution_questEntry | Chansey_evolution_questEntry | Charcadet_armarouge_evolution_questEntry | Charcadet_ceruledge_evolution_questEntry | Dipplin_evolution_questEntry | Espeon_cd_evolution_questEntry | Espeon_evolution_questEntry | Florges_cd_evolution_questEntry | Florges_evolution_questEntry | Kubfu_rapid_strike_evolution_questEntry | Kubfu_single_strike_evolution_questEntry | Milotic_evolution_questEntry | Mr_mime_evolution_questEntry | Naganadel_evolution_questEntry | Overqwil_evolution_questEntry | Pancham_buddy_event_evolution_questEntry | Pancham_evolution_questEntry | Pawmot_buddy_event_evolution_questEntry | Pawmot_cd_evolution_questEntry | Pawmot_evolution_questEntry | Runerigus_evolution_questEntry | Sirfetchd_evolution_questEntry | Slowbro_g_evolution_questEntry | Slowking_g_evolution_questEntry | Sneasler_evolution_questEntry | Snom_frosmoth_evolution_questEntry | Spritzee_evolution_questEntry | Sudowoodo_evolution_questEntry | Swirlix_evolution_questEntry | Swoobat_evolution_questEntry | Sylveon_buddy_event_evolution_questEntry | Sylveon_cd_evolution_questEntry | Sylveon_evolution_questEntry | Umbreon_cd_evolution_questEntry | Umbreon_evolution_questEntry;
