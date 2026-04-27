// Generated from Pokémon GO masterfile — group "combatLeague", split "battle-party-combat-league-template-id", 1 entry.

import type { S } from "../../_utils";
import type { CombatLeague } from "..";

export type CombatLeagueVsSeekerGreatBidoof = S<
	CombatLeague<
		"COMBAT_LEAGUE_VS_SEEKER_GREAT_BIDOOF",
		{
			badgeType: "BADGE_GREAT_LEAGUE";
			battlePartyCombatLeagueTemplateId: "COMBAT_LEAGUE_DEFAULT_GREAT";
			iconUrl: "https://storage.googleapis.com/prod-public-images/LeagueIcons/league_icon_bidoof.png";
			leagueType: "PREMIER";
			pokemonCondition: [
				{
					type: "WITH_POKEMON_CP_LIMIT";
					withPokemonCpLimit: {
						maxCp: 500;
					};
				},
				{
					pokemonWhiteList: {
						pokemon: [
							{
								id: "BIDOOF";
							},
						];
					};
					type: "POKEMON_WHITELIST";
				},
			];
			title: "branch_bidoof_1a_title";
		}
	>
>;
