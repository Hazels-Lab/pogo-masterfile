// Generated from Pokémon GO masterfile — group "rollBack", 3 entries (variant aliases).

import type { S } from "../../_utils";
import type { RollBack } from "../types";

export type RollBackAndroidSensors = S<RollBack<"ANDROID_SENSORS_ROLL_BACK">>;
export type RollBackNpcLeagueSuffix = S<RollBack<"NPC_LEAGUE_SUFFIX_ROLL_BACK">>;
export type RollBackSingleRollShinyRate = S<RollBack<"SINGLE_ROLL_SHINY_RATE_ROLL_BACK">>;

export type RollBackMasterfileEntry = RollBackAndroidSensors | RollBackNpcLeagueSuffix | RollBackSingleRollShinyRate;

export type RollBackTemplateID = RollBackMasterfileEntry["templateId"];
