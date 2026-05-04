// Generated from Pokémon GO masterfile — group "combatLeague" entries barrel.

import type { CombatLeagueDefaultGreatMasterfileEntry } from "./default-great";
import type { CombatLeagueDefaultMasterMasterfileEntry } from "./default-master";
import type { CombatLeagueDefaultUltraMasterfileEntry } from "./default-ultra";
import type { CombatLeagueNoBattlePartyCombatLeagueTemplateIdMasterfileEntry } from "./no-battle-party-combat-league-template-id";
import type { CombatLeagueVsSeekerGreatMasterfileEntry } from "./vs-seeker-great";

export type * from "./default-great";
export type * from "./default-master";
export type * from "./default-ultra";
export type * from "./no-battle-party-combat-league-template-id";
export type * from "./vs-seeker-great";

export type CombatLeagueMasterfileEntry =
	| CombatLeagueDefaultGreatMasterfileEntry
	| CombatLeagueDefaultMasterMasterfileEntry
	| CombatLeagueDefaultUltraMasterfileEntry
	| CombatLeagueNoBattlePartyCombatLeagueTemplateIdMasterfileEntry
	| CombatLeagueVsSeekerGreatMasterfileEntry;

export type CombatLeagueTemplateID = CombatLeagueMasterfileEntry["templateId"];
