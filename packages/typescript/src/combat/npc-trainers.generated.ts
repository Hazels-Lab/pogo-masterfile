/* eslint-disable */
// Auto-generated from GAME_MASTER.json
// Do not edit by hand.
// Group: combat/npc-trainers
// Filters: all
// Entries emitted: 9

export interface Trainer_blanche_greatdatacombatnpctraineravailablepokemonitempokemondisplay {
  form: string;
}
export interface Trainer_blanche_greatdatacombatnpctraineravailablepokemonitem {
  pokemonDisplay?: Trainer_blanche_greatdatacombatnpctraineravailablepokemonitempokemondisplay;
  pokemonType: string;
}
export interface Trainer_blanche_greatdatacombatnpctraineravatar {
  avatar: number;
}
export interface Trainer_blanche_greatdatacombatnpctrainer {
  availablePokemon: (Trainer_blanche_greatdatacombatnpctraineravailablepokemonitem)[];
  avatar: Trainer_blanche_greatdatacombatnpctraineravatar;
  backdropImageBundle: string;
  combatLeagueTemplateId: string;
  combatPersonalityId: string;
  iconUrl: string;
  trainerName: string;
  trainerQuote: string;
  trainerTitle: string;
}
export interface Trainer_blanche_greatdata {
  combatNpcTrainer: Trainer_blanche_greatdatacombatnpctrainer;
  templateId: string;
}
export interface Trainer_blanche_greatEntry {
  templateId: "TRAINER_BLANCHE_GREAT";
  data: Trainer_blanche_greatdata;
}
export interface Trainer_blanche_masterEntry {
  templateId: "TRAINER_BLANCHE_MASTER";
  data: Trainer_blanche_greatdata;
}
export interface Trainer_blanche_ultradatacombatnpctraineravailablepokemonitem {
  pokemonType: string;
}
export interface Trainer_blanche_ultradatacombatnpctrainer {
  availablePokemon: (Trainer_blanche_ultradatacombatnpctraineravailablepokemonitem)[];
  avatar: Trainer_blanche_greatdatacombatnpctraineravatar;
  backdropImageBundle: string;
  combatLeagueTemplateId: string;
  combatPersonalityId: string;
  iconUrl: string;
  trainerName: string;
  trainerQuote: string;
  trainerTitle: string;
}
export interface Trainer_blanche_ultradata {
  combatNpcTrainer: Trainer_blanche_ultradatacombatnpctrainer;
  templateId: string;
}
export interface Trainer_blanche_ultraEntry {
  templateId: "TRAINER_BLANCHE_ULTRA";
  data: Trainer_blanche_ultradata;
}
export interface Trainer_candela_greatEntry {
  templateId: "TRAINER_CANDELA_GREAT";
  data: Trainer_blanche_ultradata;
}
export interface Trainer_candela_masterEntry {
  templateId: "TRAINER_CANDELA_MASTER";
  data: Trainer_blanche_ultradata;
}
export interface Trainer_candela_ultraEntry {
  templateId: "TRAINER_CANDELA_ULTRA";
  data: Trainer_blanche_greatdata;
}
export interface Trainer_spark_greatEntry {
  templateId: "TRAINER_SPARK_GREAT";
  data: Trainer_blanche_ultradata;
}
export interface Trainer_spark_masterEntry {
  templateId: "TRAINER_SPARK_MASTER";
  data: Trainer_blanche_greatdata;
}
export interface Trainer_spark_ultraEntry {
  templateId: "TRAINER_SPARK_ULTRA";
  data: Trainer_blanche_greatdata;
}

export interface CombatNpcTrainersMasterfileByTemplateId {
  "TRAINER_BLANCHE_GREAT": Trainer_blanche_greatEntry;
  "TRAINER_BLANCHE_MASTER": Trainer_blanche_masterEntry;
  "TRAINER_BLANCHE_ULTRA": Trainer_blanche_ultraEntry;
  "TRAINER_CANDELA_GREAT": Trainer_candela_greatEntry;
  "TRAINER_CANDELA_MASTER": Trainer_candela_masterEntry;
  "TRAINER_CANDELA_ULTRA": Trainer_candela_ultraEntry;
  "TRAINER_SPARK_GREAT": Trainer_spark_greatEntry;
  "TRAINER_SPARK_MASTER": Trainer_spark_masterEntry;
  "TRAINER_SPARK_ULTRA": Trainer_spark_ultraEntry;
}

export type CombatNpcTrainersMasterfileEntry = Trainer_blanche_greatEntry | Trainer_blanche_masterEntry | Trainer_blanche_ultraEntry | Trainer_candela_greatEntry | Trainer_candela_masterEntry | Trainer_candela_ultraEntry | Trainer_spark_greatEntry | Trainer_spark_masterEntry | Trainer_spark_ultraEntry;
