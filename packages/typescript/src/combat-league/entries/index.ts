// Generated from Pokémon GO masterfile — group "combatLeague" entries barrel.

import type { CombatLeagueAllowTempEvosBannedPokemonMasterfileEntry } from "./allow-temp-evos-banned-pokemon";
import type { CombatLeagueAllowTempEvosBannedPokemonBattlePartyCombatLeagueTemplateIdUnlockConditionMasterfileEntry } from "./allow-temp-evos-banned-pokemon-battle-party-combat-league-template-id-unlock-condition";
import type { CombatLeagueAllowTempEvosBannedPokemonUnlockConditionMasterfileEntry } from "./allow-temp-evos-banned-pokemon-unlock-condition";
import type { CombatLeagueBannedPokemonBattlePartyCombatLeagueTemplateIdUnlockConditionMasterfileEntry } from "./banned-pokemon-battle-party-combat-league-template-id-unlock-condition";
import type { CombatLeagueBattlePartyCombatLeagueTemplateIdMasterfileEntry } from "./battle-party-combat-league-template-id";
import type { CombatLeagueBattlePartyCombatLeagueTemplateIdUnlockConditionMasterfileEntry } from "./battle-party-combat-league-template-id-unlock-condition";

export type * from "./allow-temp-evos-banned-pokemon";
export type * from "./allow-temp-evos-banned-pokemon-battle-party-combat-league-template-id-unlock-condition";
export type * from "./allow-temp-evos-banned-pokemon-unlock-condition";
export type * from "./banned-pokemon-battle-party-combat-league-template-id-unlock-condition";
export type * from "./battle-party-combat-league-template-id";
export type * from "./battle-party-combat-league-template-id-unlock-condition";

export type CombatLeagueMasterfileEntry =
	| CombatLeagueAllowTempEvosBannedPokemonMasterfileEntry
	| CombatLeagueAllowTempEvosBannedPokemonBattlePartyCombatLeagueTemplateIdUnlockConditionMasterfileEntry
	| CombatLeagueAllowTempEvosBannedPokemonUnlockConditionMasterfileEntry
	| CombatLeagueBannedPokemonBattlePartyCombatLeagueTemplateIdUnlockConditionMasterfileEntry
	| CombatLeagueBattlePartyCombatLeagueTemplateIdMasterfileEntry
	| CombatLeagueBattlePartyCombatLeagueTemplateIdUnlockConditionMasterfileEntry;

export type CombatLeagueTemplateID = CombatLeagueMasterfileEntry["templateId"];
