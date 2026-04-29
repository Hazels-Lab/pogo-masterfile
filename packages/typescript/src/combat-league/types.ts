// Generated from Pokémon GO masterfile — group "combatLeague", 105 entries (structural types).

import type { W } from "../_utils";
import type { PokemonType } from "../type-effective/types";

export interface CombatLeague<TemplateID extends string = string, TData extends CombatLeagueData = CombatLeagueData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		combatLeague: TData & {
			enabled: true;
			pokemonCount: 3;
		};
	};
}
export type CombatLeagueType = W<CombatLeague>;

export interface CombatLeagueData {
	allowTempEvos?: boolean;
	badgeType: "BADGE_GREAT_LEAGUE" | "BADGE_MASTER_LEAGUE" | "BADGE_ULTRA_LEAGUE";
	bannedPokemon?: Array<string>;
	battlePartyCombatLeagueTemplateId?:
		| "COMBAT_LEAGUE_DEFAULT_GREAT"
		| "COMBAT_LEAGUE_DEFAULT_MASTER"
		| "COMBAT_LEAGUE_DEFAULT_ULTRA"
		| "COMBAT_LEAGUE_VS_SEEKER_GREAT";
	iconUrl:
		| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FGBL_Pokemon_GO_Championship_Series_Logo.png"
		| "https://prodholoholo-public-images.nianticlabs.com/LeagueIcons/gofestCatch2022_icon.png"
		| "https://storage.googleapis.com/prod-public-images/colorCup_Icon.png"
		| "https://storage.googleapis.com/prod-public-images/fantasy_cup_icon%20-%201x1.png"
		| "https://storage.googleapis.com/prod-public-images/halloween_cup.png"
		| "https://storage.googleapis.com/prod-public-images/LeagueIcons/electric_cup.png"
		| "https://storage.googleapis.com/prod-public-images/LeagueIcons/element_cup.png"
		| "https://storage.googleapis.com/prod-public-images/LeagueIcons/elementCupRemix_icon.png"
		| "https://storage.googleapis.com/prod-public-images/LeagueIcons/fight2022_icon.png"
		| "https://storage.googleapis.com/prod-public-images/LeagueIcons/fight2022_remix_icon.png"
		| "https://storage.googleapis.com/prod-public-images/LeagueIcons/flying_cup.png"
		| "https://storage.googleapis.com/prod-public-images/LeagueIcons/fossil_gblcup.png"
		| "https://storage.googleapis.com/prod-public-images/LeagueIcons/galarCup_icon.png"
		| "https://storage.googleapis.com/prod-public-images/LeagueIcons/gbl_evolution_cup.png"
		| "https://storage.googleapis.com/prod-public-images/LeagueIcons/GBL_littlecup.png"
		| "https://storage.googleapis.com/prod-public-images/LeagueIcons/GBL_littlecupremix.png"
		| "https://storage.googleapis.com/prod-public-images/LeagueIcons/GBL_retrocup.png"
		| "https://storage.googleapis.com/prod-public-images/LeagueIcons/hisui_icon.png"
		| "https://storage.googleapis.com/prod-public-images/LeagueIcons/holiday_league_icon.png"
		| "https://storage.googleapis.com/prod-public-images/LeagueIcons/johtoLeague2022_icon.png"
		| "https://storage.googleapis.com/prod-public-images/LeagueIcons/jungleCupRemix_icon.png"
		| "https://storage.googleapis.com/prod-public-images/LeagueIcons/jungleLeague2022_icon.png"
		| "https://storage.googleapis.com/prod-public-images/LeagueIcons/kantoLeague2022_icon.png"
		| "https://storage.googleapis.com/prod-public-images/LeagueIcons/league_icon_bidoof.png"
		| "https://storage.googleapis.com/prod-public-images/LeagueIcons/league_icon_great_pokemon_limit.png"
		| "https://storage.googleapis.com/prod-public-images/LeagueIcons/league_icon_ultra_pokemon_limit.png"
		| "https://storage.googleapis.com/prod-public-images/LeagueIcons/loveLeague2022_icon.png"
		| "https://storage.googleapis.com/prod-public-images/LeagueIcons/monoType_icon.png"
		| "https://storage.googleapis.com/prod-public-images/LeagueIcons/mountainCup_icon.png"
		| "https://storage.googleapis.com/prod-public-images/LeagueIcons/PGO_City-Safari_Logo.png"
		| "https://storage.googleapis.com/prod-public-images/LeagueIcons/psychic_gbl.png"
		| "https://storage.googleapis.com/prod-public-images/LeagueIcons/SafariZone_logo_square.png"
		| "https://storage.googleapis.com/prod-public-images/LeagueIcons/spring_cup_icon.png"
		| "https://storage.googleapis.com/prod-public-images/LeagueIcons/summer_gblcup.png"
		| "https://storage.googleapis.com/prod-public-images/LeagueIcons/sunshine_cup_icon.png"
		| "https://storage.googleapis.com/prod-public-images/LeagueIcons/weatherCup_icon.png"
		| "https://storage.googleapis.com/prod-public-images/LeagueIcons/willpower_cup_icon.png"
		| "https://storage.googleapis.com/prod-public-images/pgo-s18-gbl-icon-2025.png"
		| "https://storage.googleapis.com/prod-public-images/pogo_great_league.png"
		| "https://storage.googleapis.com/prod-public-images/pogo_master_league.png"
		| "https://storage.googleapis.com/prod-public-images/pogo_ultra_league.png"
		| "https://storage.googleapis.com/prod-public-images/premierball_sprite.png";
	leagueType: "PREMIER" | "STANDARD";
	pokemonCondition: Array<{
		pokemonBanList?: {
			pokemon: Array<{
				forms?: Array<string>;
				id: string;
			}>;
		};
		pokemonCaughtTimestamp?: {
			afterTimestamp:
				| "1652252400000"
				| "1652425200000"
				| "1652511600000"
				| "1652598000000"
				| "1654286100000"
				| "1661976000000"
				| "1663804800000"
				| "1663891200000"
				| "1663977600000"
				| "1664064000000"
				| "1666231200000"
				| "1666317600000"
				| "1666404000000"
				| "1666490400000"
				| "1668650400000"
				| "1668736800000"
				| "1668823200000"
				| "1668909600000"
				| "1685638800000"
				| "1695862800000"
				| "1696640400000"
				| "1696726800000"
				| "1697097600000"
				| "1697184000000"
				| "1697270400000"
				| "1698854400000"
				| "1699113600000"
				| "1699196400000"
				| "1701460800000"
				| "1709316000000"
				| "1717246800000"
				| "1725368400000"
				| "1741082400000"
				| "1748980800000"
				| "1756843200000"
				| "1772571600000";
			beforeTimestamp:
				| "1652457600000"
				| "1652544000000"
				| "1652630400000"
				| "1652637600000"
				| "1654491900000"
				| "1663837200000"
				| "1663923600000"
				| "1664010000000"
				| "1664096400000"
				| "1666260000000"
				| "1666346400000"
				| "1666432800000"
				| "1666519200000"
				| "1668679200000"
				| "1668765600000"
				| "1668852000000"
				| "1668938400000"
				| "1669928400000"
				| "1693587600000"
				| "1696582800000"
				| "1696669200000"
				| "1696755600000"
				| "1697126400000"
				| "1697212800000"
				| "1697299200000"
				| "1699056000000"
				| "1699142400000"
				| "1699236000000"
				| "1709326800000"
				| "1717261200000"
				| "1725368400000"
				| "1733216400000"
				| "1748944800000"
				| "1756843200000"
				| "1764709200000"
				| "1780430400000";
		};
		pokemonLevelRange?: {
			maxLevel: number;
		};
		pokemonWhiteList?: {
			pokemon: Array<{
				form?: string;
				forms?: Array<string>;
				id: string;
			}>;
		};
		type:
			| "POKEMON_BANLIST"
			| "POKEMON_CAUGHT_TIMESTAMP"
			| "POKEMON_LEVEL_RANGE"
			| "POKEMON_WHITELIST"
			| "WITH_POKEMON_CP_LIMIT"
			| "WITH_POKEMON_TYPE"
			| "WITH_UNIQUE_POKEMON";
		withPokemonCpLimit?: {
			maxCp: number;
		};
		withPokemonType?: {
			pokemonType: Array<PokemonType>;
		};
	}>;
	title: string;
	unlockCondition?: [
		{
			minPokemonCount: number;
			type: "WITH_POKEMON_CP_LIMIT" | "WITH_UNIQUE_POKEMON";
			withPokemonCpLimit?: {
				maxCp: number;
				minCp: number;
			};
		},
	];
}

export type CombatLeagueId =
	| "COMBAT_LEAGUE_DEFAULT_GREAT"
	| "COMBAT_LEAGUE_DEFAULT_MASTER"
	| "COMBAT_LEAGUE_DEFAULT_ULTRA"
	| "COMBAT_LEAGUE_SAFARI_BARCELONA_2023_01"
	| "COMBAT_LEAGUE_SAFARI_BARCELONA_2023_02"
	| "COMBAT_LEAGUE_SAFARI_BARCELONA_2023_TEST"
	| "COMBAT_LEAGUE_SAFARI_MEXICOCITY_2023_01"
	| "COMBAT_LEAGUE_SAFARI_MEXICOCITY_2023_02"
	| "COMBAT_LEAGUE_SAFARI_MEXICOCITY_2023_TEST"
	| "COMBAT_LEAGUE_SAFARI_SEOUL_2023_01"
	| "COMBAT_LEAGUE_SAFARI_SEOUL_2023_02"
	| "COMBAT_LEAGUE_SAFARI_SEOUL_2023_TEST"
	| "COMBAT_LEAGUE_SAFARI_ZONE_GOYANG_2022_01"
	| "COMBAT_LEAGUE_SAFARI_ZONE_GOYANG_2022_02"
	| "COMBAT_LEAGUE_SAFARI_ZONE_GOYANG_2022_03"
	| "COMBAT_LEAGUE_SAFARI_ZONE_GOYANG_2022_POST"
	| "COMBAT_LEAGUE_SAFARI_ZONE_GOYANG_2022_TEST"
	| "COMBAT_LEAGUE_SAFARI_ZONE_SEVILLE_2022_01"
	| "COMBAT_LEAGUE_SAFARI_ZONE_SEVILLE_2022_02"
	| "COMBAT_LEAGUE_SAFARI_ZONE_SEVILLE_2022_03"
	| "COMBAT_LEAGUE_SAFARI_ZONE_SEVILLE_2022_04"
	| "COMBAT_LEAGUE_SAFARI_ZONE_SEVILLE_2022_TEST"
	| "COMBAT_LEAGUE_SAFARI_ZONE_SINGAPORE_2022_01"
	| "COMBAT_LEAGUE_SAFARI_ZONE_SINGAPORE_2022_02"
	| "COMBAT_LEAGUE_SAFARI_ZONE_SINGAPORE_2022_03"
	| "COMBAT_LEAGUE_SAFARI_ZONE_SINGAPORE_2022_POST"
	| "COMBAT_LEAGUE_SAFARI_ZONE_SINGAPORE_2022_TEST"
	| "COMBAT_LEAGUE_SAFARI_ZONE_TAIPEI_2022_01"
	| "COMBAT_LEAGUE_SAFARI_ZONE_TAIPEI_2022_02"
	| "COMBAT_LEAGUE_SAFARI_ZONE_TAIPEI_2022_03"
	| "COMBAT_LEAGUE_SAFARI_ZONE_TAIPEI_2022_POST"
	| "COMBAT_LEAGUE_SAFARI_ZONE_TAIPEI_2022_TEST"
	| "COMBAT_LEAGUE_VS_SEEKER_COLOR_GREAT"
	| "COMBAT_LEAGUE_VS_SEEKER_ELEMENT_REMIX"
	| "COMBAT_LEAGUE_VS_SEEKER_EVOLUTION"
	| "COMBAT_LEAGUE_VS_SEEKER_FANTASY_ULTRA"
	| "COMBAT_LEAGUE_VS_SEEKER_GALAR_GREAT"
	| "COMBAT_LEAGUE_VS_SEEKER_GALAR_LITTLE"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_BIDOOF"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_GOFEST2022"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S13"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S14"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S15"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S16"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S18"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S19"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S20"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S22"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S8"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_SEASON11"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_CHAMPIONSHIP_SERIES"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_ELECTRIC"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_ELEMENT"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_FANTASY"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_FIGHTING"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_FIGHTING_REMIX"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_FLYING"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_FOSSIL"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_HALLOWEEN"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_HALLOWEEN_LITTLE"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_HISUI"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_HOENN"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_HOLIDAY"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_JOHTO"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_JUNGLE"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_KANTO"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_LITTLE"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_LITTLE_REMIX"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_LOVE"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_PVP_NEXT_PREVIEW"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_REMIX"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_RETRO"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_SCROLL"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_SINGLE_TYPE"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_SINNOH"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_SUMMER"
	| "COMBAT_LEAGUE_VS_SEEKER_GREAT_WEATHER"
	| "COMBAT_LEAGUE_VS_SEEKER_HALLOWEEN_ULTRA"
	| "COMBAT_LEAGUE_VS_SEEKER_LITTLE_CATCH"
	| "COMBAT_LEAGUE_VS_SEEKER_LITTLE_CATCH_S13"
	| "COMBAT_LEAGUE_VS_SEEKER_LITTLE_CATCH_S14"
	| "COMBAT_LEAGUE_VS_SEEKER_LITTLE_HOLIDAY"
	| "COMBAT_LEAGUE_VS_SEEKER_LITTLE_JUNGLE"
	| "COMBAT_LEAGUE_VS_SEEKER_LITTLE_JUNGLE_REMIX"
	| "COMBAT_LEAGUE_VS_SEEKER_MASTER"
	| "COMBAT_LEAGUE_VS_SEEKER_MASTER_CLASSIC"
	| "COMBAT_LEAGUE_VS_SEEKER_MASTER_MEGAS"
	| "COMBAT_LEAGUE_VS_SEEKER_MASTER_NO_LEGENDARY"
	| "COMBAT_LEAGUE_VS_SEEKER_MASTER_PREMIER"
	| "COMBAT_LEAGUE_VS_SEEKER_MASTER_PREMIER_CLASSIC"
	| "COMBAT_LEAGUE_VS_SEEKER_MOUNTAIN_GREAT"
	| "COMBAT_LEAGUE_VS_SEEKER_PSYCHIC"
	| "COMBAT_LEAGUE_VS_SEEKER_SPRING_GREAT"
	| "COMBAT_LEAGUE_VS_SEEKER_SUNSHINE_GREAT"
	| "COMBAT_LEAGUE_VS_SEEKER_ULTRA"
	| "COMBAT_LEAGUE_VS_SEEKER_ULTRA_HOLIDAY"
	| "COMBAT_LEAGUE_VS_SEEKER_ULTRA_NO_LEGENDARY"
	| "COMBAT_LEAGUE_VS_SEEKER_ULTRA_PREMIER"
	| "COMBAT_LEAGUE_VS_SEEKER_ULTRA_PREMIER_CLASSIC"
	| "COMBAT_LEAGUE_VS_SEEKER_ULTRA_REMIX"
	| "COMBAT_LEAGUE_VS_SEEKER_ULTRA_SUMMER"
	| "COMBAT_LEAGUE_VS_SEEKER_WEATHER"
	| "COMBAT_LEAGUE_VS_SEEKER_WILLPOWER";
