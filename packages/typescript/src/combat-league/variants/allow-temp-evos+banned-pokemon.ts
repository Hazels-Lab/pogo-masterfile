// Generated from Pokémon GO masterfile — group "combatLeague", split "allow-temp-evos+banned-pokemon", 1 entry.

import type { S } from "../../_utils";
import type { CombatLeague } from "..";

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
