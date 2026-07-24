// Generated from Pokémon GO masterfile — group "combatLeague", split "default-ultra", 11 entries.

import type { S } from "../../_utils";
import type { CombatLeague } from "../types";

export type CombatLeagueVsSeekerFantasyUltra = S<
	CombatLeague<
		"COMBAT_LEAGUE_VS_SEEKER_FANTASY_ULTRA",
		{
			badgeType: "BADGE_ULTRA_LEAGUE";
			bannedPokemon: ["DITTO", "SHEDINJA"];
			battlePartyCombatLeagueTemplateId: "COMBAT_LEAGUE_DEFAULT_ULTRA";
			iconUrl: "https://storage.googleapis.com/prod-public-images/fantasy_cup_icon%20-%201x1.png";
			leagueType: "PREMIER";
			pokemonCondition: [
				{
					type: "WITH_POKEMON_CP_LIMIT";
					withPokemonCpLimit: {
						maxCp: 2500;
					};
				},
				{
					type: "WITH_UNIQUE_POKEMON";
				},
				{
					type: "WITH_POKEMON_TYPE";
					withPokemonType: {
						pokemonType: ["POKEMON_TYPE_STEEL", "POKEMON_TYPE_FAIRY", "POKEMON_TYPE_DRAGON"];
					};
				},
			];
			title: "fantasy_cup_ultra_title";
			unlockCondition: [
				{
					minPokemonCount: 3;
					type: "WITH_UNIQUE_POKEMON";
				},
			];
		}
	>
>;
export type CombatLeagueVsSeekerHalloweenUltra = S<
	CombatLeague<
		"COMBAT_LEAGUE_VS_SEEKER_HALLOWEEN_ULTRA",
		{
			badgeType: "BADGE_ULTRA_LEAGUE";
			bannedPokemon: ["DITTO", "SHEDINJA"];
			battlePartyCombatLeagueTemplateId: "COMBAT_LEAGUE_DEFAULT_ULTRA";
			iconUrl: "https://storage.googleapis.com/prod-public-images/halloween_cup.png";
			leagueType: "PREMIER";
			pokemonCondition: [
				{
					type: "WITH_POKEMON_CP_LIMIT";
					withPokemonCpLimit: {
						maxCp: 2500;
					};
				},
				{
					type: "WITH_UNIQUE_POKEMON";
				},
				{
					type: "WITH_POKEMON_TYPE";
					withPokemonType: {
						pokemonType: ["POKEMON_TYPE_POISON", "POKEMON_TYPE_BUG", "POKEMON_TYPE_GHOST", "POKEMON_TYPE_DARK", "POKEMON_TYPE_FAIRY"];
					};
				},
			];
			title: "halloween_ultra_cup_title";
			unlockCondition: [
				{
					minPokemonCount: 3;
					type: "WITH_UNIQUE_POKEMON";
				},
			];
		}
	>
>;
export type CombatLeagueVsSeekerUltra = S<
	CombatLeague<
		"COMBAT_LEAGUE_VS_SEEKER_ULTRA",
		{
			badgeType: "BADGE_ULTRA_LEAGUE";
			bannedPokemon: ["DITTO", "SHEDINJA"];
			battlePartyCombatLeagueTemplateId: "COMBAT_LEAGUE_DEFAULT_ULTRA";
			iconUrl: "https://storage.googleapis.com/prod-public-images/pogo_ultra_league.png";
			leagueType: "STANDARD";
			pokemonCondition: [
				{
					type: "WITH_POKEMON_CP_LIMIT";
					withPokemonCpLimit: {
						maxCp: 2500;
					};
				},
				{
					type: "WITH_UNIQUE_POKEMON";
				},
			];
			title: "combat_ultra_league";
			unlockCondition: [
				{
					minPokemonCount: 3;
					type: "WITH_UNIQUE_POKEMON";
				},
			];
		}
	>
>;
export type CombatLeagueVsSeekerUltraHoliday = S<
	CombatLeague<
		"COMBAT_LEAGUE_VS_SEEKER_ULTRA_HOLIDAY",
		{
			badgeType: "BADGE_ULTRA_LEAGUE";
			bannedPokemon: ["DITTO", "SHEDINJA"];
			battlePartyCombatLeagueTemplateId: "COMBAT_LEAGUE_DEFAULT_ULTRA";
			iconUrl: "https://storage.googleapis.com/prod-public-images/LeagueIcons/holiday_league_icon.png";
			leagueType: "PREMIER";
			pokemonCondition: [
				{
					type: "WITH_POKEMON_CP_LIMIT";
					withPokemonCpLimit: {
						maxCp: 2500;
					};
				},
				{
					type: "WITH_UNIQUE_POKEMON";
				},
				{
					type: "WITH_POKEMON_TYPE";
					withPokemonType: {
						pokemonType: [
							"POKEMON_TYPE_ELECTRIC",
							"POKEMON_TYPE_FLYING",
							"POKEMON_TYPE_GHOST",
							"POKEMON_TYPE_GRASS",
							"POKEMON_TYPE_ICE",
							"POKEMON_TYPE_NORMAL",
						];
					};
				},
			];
			title: "holiday_cup_ultra_title";
			unlockCondition: [
				{
					minPokemonCount: 3;
					type: "WITH_UNIQUE_POKEMON";
				},
			];
		}
	>
>;
export type CombatLeagueVsSeekerUltraMegas = S<
	CombatLeague<
		"COMBAT_LEAGUE_VS_SEEKER_ULTRA_MEGAS",
		{
			allowTempEvos: true;
			badgeType: "BADGE_ULTRA_LEAGUE";
			bannedPokemon: ["DITTO", "SHEDINJA"];
			battlePartyCombatLeagueTemplateId: "COMBAT_LEAGUE_DEFAULT_ULTRA";
			iconUrl: "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2F34c7dd20_pogo_mega_ultra_league.png";
			leagueType: "STANDARD";
			pokemonCondition: [
				{
					type: "WITH_POKEMON_CP_LIMIT";
					withPokemonCpLimit: {
						maxCp: 2500;
					};
				},
				{
					type: "WITH_UNIQUE_POKEMON";
				},
			];
			title: "ultra_league_mega_title";
			unlockCondition: [
				{
					minPokemonCount: 3;
					type: "WITH_UNIQUE_POKEMON";
				},
			];
		}
	>
>;
export type CombatLeagueVsSeekerUltraNoLegendary = S<
	CombatLeague<
		"COMBAT_LEAGUE_VS_SEEKER_ULTRA_NO_LEGENDARY",
		{
			badgeType: "BADGE_ULTRA_LEAGUE";
			bannedPokemon: [
				"DITTO",
				"SHEDINJA",
				"ARTICUNO",
				"ZAPDOS",
				"MOLTRES",
				"MEWTWO",
				"MEW",
				"RAIKOU",
				"ENTEI",
				"SUICUNE",
				"LUGIA",
				"HO_OH",
				"CELEBI",
				"REGIROCK",
				"REGICE",
				"REGISTEEL",
				"LATIAS",
				"LATIOS",
				"KYOGRE",
				"GROUDON",
				"RAYQUAZA",
				"JIRACHI",
				"DEOXYS",
				"UXIE",
				"MESPRIT",
				"AZELF",
				"DIALGA",
				"PALKIA",
				"HEATRAN",
				"REGIGIGAS",
				"GIRATINA",
				"CRESSELIA",
				"PHIONE",
				"MANAPHY",
				"DARKRAI",
				"SHAYMIN",
				"ARCEUS",
				"VICTINI",
				"COBALION",
				"TERRAKION",
				"VIRIZION",
				"TORNADUS",
				"THUNDURUS",
				"RESHIRAM",
				"ZEKROM",
				"LANDORUS",
				"KYUREM",
				"KELDEO",
				"MELOETTA",
				"GENESECT",
				"XERNEAS",
				"YVELTAL",
				"ZYGARDE",
				"DIANCIE",
				"VOLCANION",
				"MELTAN",
				"MELMETAL",
				"ZACIAN",
				"ZAMAZENTA",
			];
			battlePartyCombatLeagueTemplateId: "COMBAT_LEAGUE_DEFAULT_ULTRA";
			iconUrl: "https://storage.googleapis.com/prod-public-images/premierball_sprite.png";
			leagueType: "PREMIER";
			pokemonCondition: [
				{
					type: "WITH_POKEMON_CP_LIMIT";
					withPokemonCpLimit: {
						maxCp: 2500;
					};
				},
				{
					type: "WITH_UNIQUE_POKEMON";
				},
			];
			title: "master_no_legendary";
			unlockCondition: [
				{
					minPokemonCount: 3;
					type: "WITH_UNIQUE_POKEMON";
				},
			];
		}
	>
>;
export type CombatLeagueVsSeekerUltraPremier = S<
	CombatLeague<
		"COMBAT_LEAGUE_VS_SEEKER_ULTRA_PREMIER",
		{
			badgeType: "BADGE_ULTRA_LEAGUE";
			bannedPokemon: [
				"DITTO",
				"SHEDINJA",
				"ARTICUNO",
				"ZAPDOS",
				"MOLTRES",
				"MEWTWO",
				"MEW",
				"RAIKOU",
				"ENTEI",
				"SUICUNE",
				"LUGIA",
				"HO_OH",
				"CELEBI",
				"REGIROCK",
				"REGICE",
				"REGISTEEL",
				"LATIAS",
				"LATIOS",
				"KYOGRE",
				"GROUDON",
				"RAYQUAZA",
				"JIRACHI",
				"DEOXYS",
				"UXIE",
				"MESPRIT",
				"AZELF",
				"DIALGA",
				"PALKIA",
				"HEATRAN",
				"REGIGIGAS",
				"GIRATINA",
				"CRESSELIA",
				"PHIONE",
				"MANAPHY",
				"DARKRAI",
				"SHAYMIN",
				"ARCEUS",
				"VICTINI",
				"COBALION",
				"TERRAKION",
				"VIRIZION",
				"TORNADUS",
				"THUNDURUS",
				"RESHIRAM",
				"ZEKROM",
				"LANDORUS",
				"KYUREM",
				"KELDEO",
				"MELOETTA",
				"GENESECT",
				"XERNEAS",
				"YVELTAL",
				"ZYGARDE",
				"DIANCIE",
				"HOOPA",
				"VOLCANION",
				"TAPU_KOKO",
				"TAPU_LELE",
				"TAPU_BULU",
				"TAPU_FINI",
				"COSMOG",
				"COSMOEM",
				"SOLGALEO",
				"LUNALA",
				"NIHILEGO",
				"BUZZWOLE",
				"PHEROMOSA",
				"XURKITREE",
				"CELESTEELA",
				"KARTANA",
				"GUZZLORD",
				"NECROZMA",
				"POIPOLE",
				"NAGANADEL",
				"STAKATAKA",
				"BLACEPHALON",
				"MELTAN",
				"MELMETAL",
				"ZACIAN",
				"ZAMAZENTA",
				"ZARUDE",
				"ETERNATUS",
				"KUBFU",
				"URSHIFU",
				"REGIELEKI",
				"REGIDRAGO",
				"GLASTRIER",
				"SPECTRIER",
				"CALYREX",
				"MAGEARNA",
				"MARSHADOW",
				"ZERAORA",
				"TYPE_NULL",
				"SILVALLY",
				"ENAMORUS",
				"WOCHIEN",
				"CHIENPAO",
				"TINGLU",
				"CHIYU",
				"KORAIDON",
				"MIRAIDON",
				"OKIDOGI",
				"MUNKIDORI",
				"FEZANDIPITI",
				"OGERPON",
				"TERAPAGOS",
				"PECHARUNT",
			];
			battlePartyCombatLeagueTemplateId: "COMBAT_LEAGUE_DEFAULT_ULTRA";
			iconUrl: "https://storage.googleapis.com/prod-public-images/premierball_sprite.png";
			leagueType: "PREMIER";
			pokemonCondition: [
				{
					type: "WITH_POKEMON_CP_LIMIT";
					withPokemonCpLimit: {
						maxCp: 2500;
					};
				},
				{
					type: "WITH_UNIQUE_POKEMON";
				},
			];
			title: "ultra_premier_cup_title";
			unlockCondition: [
				{
					minPokemonCount: 3;
					type: "WITH_UNIQUE_POKEMON";
				},
			];
		}
	>
>;
export type CombatLeagueVsSeekerUltraPremierClassic = S<
	CombatLeague<
		"COMBAT_LEAGUE_VS_SEEKER_ULTRA_PREMIER_CLASSIC",
		{
			badgeType: "BADGE_ULTRA_LEAGUE";
			bannedPokemon: [
				"DITTO",
				"SHEDINJA",
				"ARTICUNO",
				"ZAPDOS",
				"MOLTRES",
				"MEWTWO",
				"MEW",
				"RAIKOU",
				"ENTEI",
				"SUICUNE",
				"LUGIA",
				"HO_OH",
				"CELEBI",
				"REGIROCK",
				"REGICE",
				"REGISTEEL",
				"LATIAS",
				"LATIOS",
				"KYOGRE",
				"GROUDON",
				"RAYQUAZA",
				"JIRACHI",
				"DEOXYS",
				"UXIE",
				"MESPRIT",
				"AZELF",
				"DIALGA",
				"PALKIA",
				"HEATRAN",
				"REGIGIGAS",
				"GIRATINA",
				"CRESSELIA",
				"PHIONE",
				"MANAPHY",
				"DARKRAI",
				"SHAYMIN",
				"ARCEUS",
				"VICTINI",
				"COBALION",
				"TERRAKION",
				"VIRIZION",
				"TORNADUS",
				"THUNDURUS",
				"RESHIRAM",
				"ZEKROM",
				"LANDORUS",
				"KYUREM",
				"KELDEO",
				"MELOETTA",
				"GENESECT",
				"XERNEAS",
				"YVELTAL",
				"ZYGARDE",
				"DIANCIE",
				"HOOPA",
				"VOLCANION",
				"TAPU_KOKO",
				"TAPU_LELE",
				"TAPU_BULU",
				"TAPU_FINI",
				"COSMOG",
				"COSMOEM",
				"SOLGALEO",
				"LUNALA",
				"NIHILEGO",
				"BUZZWOLE",
				"PHEROMOSA",
				"XURKITREE",
				"CELESTEELA",
				"KARTANA",
				"GUZZLORD",
				"NECROZMA",
				"POIPOLE",
				"NAGANADEL",
				"STAKATAKA",
				"BLACEPHALON",
				"MELTAN",
				"MELMETAL",
				"ZACIAN",
				"ZAMAZENTA",
				"ZARUDE",
				"ETERNATUS",
				"KUBFU",
				"URSHIFU",
				"REGIELEKI",
				"REGIDRAGO",
				"GLASTRIER",
				"SPECTRIER",
				"CALYREX",
				"MAGEARNA",
				"MARSHADOW",
				"ZERAORA",
				"TYPE_NULL",
				"SILVALLY",
				"ENAMORUS",
				"WOCHIEN",
				"CHIENPAO",
				"TINGLU",
				"CHIYU",
				"KORAIDON",
				"MIRAIDON",
				"OKIDOGI",
				"MUNKIDORI",
				"FEZANDIPITI",
				"OGERPON",
				"TERAPAGOS",
				"PECHARUNT",
			];
			battlePartyCombatLeagueTemplateId: "COMBAT_LEAGUE_DEFAULT_ULTRA";
			iconUrl: "https://storage.googleapis.com/prod-public-images/premierball_sprite.png";
			leagueType: "PREMIER";
			pokemonCondition: [
				{
					type: "WITH_POKEMON_CP_LIMIT";
					withPokemonCpLimit: {
						maxCp: 2500;
					};
				},
				{
					type: "WITH_UNIQUE_POKEMON";
				},
				{
					pokemonLevelRange: {
						maxLevel: 40;
					};
					type: "POKEMON_LEVEL_RANGE";
				},
			];
			title: "ultra_premier_classic_title";
			unlockCondition: [
				{
					minPokemonCount: 3;
					type: "WITH_UNIQUE_POKEMON";
				},
			];
		}
	>
>;
export type CombatLeagueVsSeekerUltraRemix = S<
	CombatLeague<
		"COMBAT_LEAGUE_VS_SEEKER_ULTRA_REMIX",
		{
			badgeType: "BADGE_ULTRA_LEAGUE";
			battlePartyCombatLeagueTemplateId: "COMBAT_LEAGUE_DEFAULT_ULTRA";
			iconUrl: "https://storage.googleapis.com/prod-public-images/LeagueIcons/league_icon_ultra_pokemon_limit.png";
			leagueType: "PREMIER";
			pokemonCondition: [
				{
					type: "WITH_POKEMON_CP_LIMIT";
					withPokemonCpLimit: {
						maxCp: 2500;
					};
				},
				{
					type: "WITH_UNIQUE_POKEMON";
				},
				{
					pokemonBanList: {
						pokemon: [
							{
								id: "VENUSAUR";
							},
							{
								forms: ["MUK_ALOLA"];
								id: "MUK";
							},
							{
								id: "UMBREON";
							},
							{
								id: "SWAMPERT";
							},
							{
								forms: ["FORM_UNSET", "EMPOLEON_NORMAL"];
								id: "EMPOLEON";
							},
							{
								forms: ["FORM_UNSET", "TOGEKISS_NORMAL"];
								id: "TOGEKISS";
							},
							{
								forms: ["GIRATINA_ALTERED"];
								id: "GIRATINA";
							},
							{
								forms: ["FORM_UNSET", "CRESSELIA_NORMAL"];
								id: "CRESSELIA";
							},
							{
								forms: ["FORM_UNSET", "TALONFLAME_NORMAL"];
								id: "TALONFLAME";
							},
							{
								id: "OBSTAGOON";
							},
						];
					};
					type: "POKEMON_BANLIST";
				},
			];
			title: "ultra_league_remix_title";
			unlockCondition: [
				{
					minPokemonCount: 3;
					type: "WITH_UNIQUE_POKEMON";
				},
			];
		}
	>
>;
export type CombatLeagueVsSeekerUltraSummer = S<
	CombatLeague<
		"COMBAT_LEAGUE_VS_SEEKER_ULTRA_SUMMER",
		{
			badgeType: "BADGE_ULTRA_LEAGUE";
			bannedPokemon: ["DITTO", "SHEDINJA"];
			battlePartyCombatLeagueTemplateId: "COMBAT_LEAGUE_DEFAULT_ULTRA";
			iconUrl: "https://storage.googleapis.com/prod-public-images/LeagueIcons/summer_gblcup.png";
			leagueType: "PREMIER";
			pokemonCondition: [
				{
					type: "WITH_POKEMON_CP_LIMIT";
					withPokemonCpLimit: {
						maxCp: 2500;
					};
				},
				{
					type: "WITH_UNIQUE_POKEMON";
				},
				{
					type: "WITH_POKEMON_TYPE";
					withPokemonType: {
						pokemonType: ["POKEMON_TYPE_FIRE", "POKEMON_TYPE_ELECTRIC", "POKEMON_TYPE_WATER", "POKEMON_TYPE_NORMAL", "POKEMON_TYPE_GRASS", "POKEMON_TYPE_BUG"];
					};
				},
			];
			title: "summer_cup_ultra_title";
			unlockCondition: [
				{
					minPokemonCount: 3;
					type: "WITH_UNIQUE_POKEMON";
				},
			];
		}
	>
>;
export type CombatLeagueVsSeekerWeather = S<
	CombatLeague<
		"COMBAT_LEAGUE_VS_SEEKER_WEATHER",
		{
			badgeType: "BADGE_ULTRA_LEAGUE";
			bannedPokemon: ["DITTO", "SHEDINJA"];
			battlePartyCombatLeagueTemplateId: "COMBAT_LEAGUE_DEFAULT_ULTRA";
			iconUrl: "https://storage.googleapis.com/prod-public-images/LeagueIcons/weatherCup_icon.png";
			leagueType: "PREMIER";
			pokemonCondition: [
				{
					type: "WITH_POKEMON_CP_LIMIT";
					withPokemonCpLimit: {
						maxCp: 2500;
					};
				},
				{
					type: "WITH_UNIQUE_POKEMON";
				},
				{
					type: "WITH_POKEMON_TYPE";
					withPokemonType: {
						pokemonType: ["POKEMON_TYPE_FIRE", "POKEMON_TYPE_WATER", "POKEMON_TYPE_ICE", "POKEMON_TYPE_ROCK"];
					};
				},
			];
			title: "weather_cup_title";
			unlockCondition: [
				{
					minPokemonCount: 3;
					type: "WITH_UNIQUE_POKEMON";
				},
			];
		}
	>
>;

export type CombatLeagueDefaultUltraMasterfileEntry =
	| CombatLeagueVsSeekerFantasyUltra
	| CombatLeagueVsSeekerHalloweenUltra
	| CombatLeagueVsSeekerUltra
	| CombatLeagueVsSeekerUltraHoliday
	| CombatLeagueVsSeekerUltraMegas
	| CombatLeagueVsSeekerUltraNoLegendary
	| CombatLeagueVsSeekerUltraPremier
	| CombatLeagueVsSeekerUltraPremierClassic
	| CombatLeagueVsSeekerUltraRemix
	| CombatLeagueVsSeekerUltraSummer
	| CombatLeagueVsSeekerWeather;
