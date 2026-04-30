// Generated from Pokémon GO masterfile — group "combatLeague", split "default", 3 entries.

import type { S } from "../../_utils";
import type { CombatLeague } from "../types";

export type CombatLeagueDefaultGreat = S<
	CombatLeague<
		"COMBAT_LEAGUE_DEFAULT_GREAT",
		{
			allowTempEvos: true;
			badgeType: "BADGE_GREAT_LEAGUE";
			bannedPokemon: [
				"DITTO",
				"SHEDINJA",
				"XERNEAS",
				"YVELTAL",
				"COBALION",
				"TERRAKION",
				"VIRIZION",
				"LANDORUS",
				"RESHIRAM",
				"ZEKROM",
				"KYUREM",
				"TAPU_KOKO",
				"TAPU_LELE",
				"TAPU_BULU",
				"SOLGALEO",
				"LUNALA",
				"ZACIAN",
				"ZAMAZENTA",
				"ENAMORUS",
				"MIMIKYU",
			];
			iconUrl: "https://storage.googleapis.com/prod-public-images/pogo_great_league.png";
			leagueType: "STANDARD";
			pokemonCondition: [
				{
					type: "WITH_POKEMON_CP_LIMIT";
					withPokemonCpLimit: {
						maxCp: 1500;
					};
				},
			];
			title: "combat_great_league";
		}
	>
>;
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

export type CombatLeagueDefaultMasterfileEntry = CombatLeagueDefaultGreat | CombatLeagueDefaultMaster | CombatLeagueDefaultUltra;
