// Generated from Pokémon GO masterfile — group "combatLeague", split "allow-temp-evos+banned-pokemon+battle-party-combat-league-template-id+unlock-condition", 1 entry.

import type { S } from "../../_utils";
import type { CombatLeague } from "..";

export type CombatLeagueVsSeekerMasterMegas = S<
	CombatLeague<
		"COMBAT_LEAGUE_VS_SEEKER_MASTER_MEGAS",
		{
			allowTempEvos: true;
			badgeType: "BADGE_MASTER_LEAGUE";
			bannedPokemon: ["DITTO", "SHEDINJA", "MIMIKYU"];
			battlePartyCombatLeagueTemplateId: "COMBAT_LEAGUE_DEFAULT_MASTER";
			iconUrl: "https://storage.googleapis.com/prod-public-images/pogo_master_league.png";
			leagueType: "STANDARD";
			pokemonCondition: [
				{
					type: "WITH_POKEMON_CP_LIMIT";
					withPokemonCpLimit: {
						maxCp: 7000;
					};
				},
				{
					type: "WITH_UNIQUE_POKEMON";
				},
			];
			title: "master_league_mega_title";
			unlockCondition: [
				{
					minPokemonCount: 3;
					type: "WITH_UNIQUE_POKEMON";
				},
			];
		}
	>
>;
