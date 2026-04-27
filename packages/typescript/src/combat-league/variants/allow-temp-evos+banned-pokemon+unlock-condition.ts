// Generated from Pokémon GO masterfile — group "combatLeague", split "allow-temp-evos+banned-pokemon+unlock-condition", 2 entries.

import type { S } from "../../_utils";
import type { CombatLeague } from "..";

export type CombatLeagueDefaultMaster = S<
	CombatLeague<
		"COMBAT_LEAGUE_DEFAULT_MASTER",
		{
			allowTempEvos: true;
			badgeType: "BADGE_MASTER_LEAGUE";
			bannedPokemon: ["DITTO", "SHEDINJA", "MIMIKYU"];
			iconUrl: "https://storage.googleapis.com/prod-public-images/pogo_master_league.png";
			leagueType: "STANDARD";
			pokemonCondition: [
				{
					type: "WITH_POKEMON_CP_LIMIT";
					withPokemonCpLimit: {
						maxCp: 10000;
					};
				},
			];
			title: "combat_master_league";
			unlockCondition: [
				{
					minPokemonCount: 3;
					type: "WITH_POKEMON_CP_LIMIT";
					withPokemonCpLimit: {
						maxCp: 50000;
						minCp: 2500;
					};
				},
			];
		}
	>
>;
export type CombatLeagueDefaultUltra = S<
	CombatLeague<
		"COMBAT_LEAGUE_DEFAULT_ULTRA",
		{
			allowTempEvos: true;
			badgeType: "BADGE_ULTRA_LEAGUE";
			bannedPokemon: ["DITTO", "SHEDINJA", "MIMIKYU"];
			iconUrl: "https://storage.googleapis.com/prod-public-images/pogo_ultra_league.png";
			leagueType: "STANDARD";
			pokemonCondition: [
				{
					type: "WITH_POKEMON_CP_LIMIT";
					withPokemonCpLimit: {
						maxCp: 2500;
					};
				},
			];
			title: "combat_ultra_league";
			unlockCondition: [
				{
					minPokemonCount: 3;
					type: "WITH_POKEMON_CP_LIMIT";
					withPokemonCpLimit: {
						maxCp: 50000;
						minCp: 1500;
					};
				},
			];
		}
	>
>;
