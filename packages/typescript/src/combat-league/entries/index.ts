// Generated from Pokémon GO masterfile — group "combatLeague" entries barrel.

import type { CombatLeagueDefaultMasterfileEntry } from "./default";
import type { CombatLeagueSafariMasterfileEntry } from "./safari";
import type { CombatLeagueVsMasterfileEntry } from "./vs";

export type * from "./default";
export type * from "./safari";
export type * from "./vs";

export type CombatLeagueMasterfileEntry = CombatLeagueDefaultMasterfileEntry | CombatLeagueSafariMasterfileEntry | CombatLeagueVsMasterfileEntry;

export type CombatLeagueTemplateID = CombatLeagueMasterfileEntry["templateId"];
