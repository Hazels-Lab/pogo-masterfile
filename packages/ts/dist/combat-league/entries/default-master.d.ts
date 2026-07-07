// Generated from Pokémon GO masterfile — group "combatLeague", split "default-master", 6 entries.

import type { S } from "../../_utils";
import type { CombatLeague } from "../types";

export type CombatLeagueVsSeekerMaster = S<
	CombatLeague<
		"COMBAT_LEAGUE_VS_SEEKER_MASTER",
		{
			badgeType: "BADGE_MASTER_LEAGUE";
			bannedPokemon: ["DITTO", "SHEDINJA"];
			battlePartyCombatLeagueTemplateId: "COMBAT_LEAGUE_DEFAULT_MASTER";
			iconUrl: "https://storage.googleapis.com/prod-public-images/pogo_master_league.png";
			leagueType: "STANDARD";
			pokemonCondition: [
				{
					type: "WITH_POKEMON_CP_LIMIT";
					withPokemonCpLimit: {
						maxCp: 6000;
					};
				},
				{
					type: "WITH_UNIQUE_POKEMON";
				},
			];
			title: "combat_master_league";
			unlockCondition: [
				{
					minPokemonCount: 3;
					type: "WITH_UNIQUE_POKEMON";
				},
			];
		}
	>
>;
export type CombatLeagueVsSeekerMasterClassic = S<
	CombatLeague<
		"COMBAT_LEAGUE_VS_SEEKER_MASTER_CLASSIC",
		{
			badgeType: "BADGE_MASTER_LEAGUE";
			bannedPokemon: ["DITTO", "SHEDINJA"];
			battlePartyCombatLeagueTemplateId: "COMBAT_LEAGUE_DEFAULT_MASTER";
			iconUrl: "https://storage.googleapis.com/prod-public-images/pogo_master_league.png";
			leagueType: "PREMIER";
			pokemonCondition: [
				{
					type: "WITH_POKEMON_CP_LIMIT";
					withPokemonCpLimit: {
						maxCp: 6000;
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
			title: "master_classic_title";
			unlockCondition: [
				{
					minPokemonCount: 3;
					type: "WITH_UNIQUE_POKEMON";
				},
			];
		}
	>
>;
export type CombatLeagueVsSeekerMasterMegas = S<
	CombatLeague<
		"COMBAT_LEAGUE_VS_SEEKER_MASTER_MEGAS",
		{
			allowTempEvos: true;
			badgeType: "BADGE_MASTER_LEAGUE";
			bannedPokemon: ["DITTO", "SHEDINJA"];
			battlePartyCombatLeagueTemplateId: "COMBAT_LEAGUE_DEFAULT_MASTER";
			iconUrl: "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Fe00ac85c_GblMasterLeague_icon.png";
			leagueType: "STANDARD";
			pokemonCondition: [
				{
					type: "WITH_POKEMON_CP_LIMIT";
					withPokemonCpLimit: {
						maxCp: 9999;
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
export type CombatLeagueVsSeekerMasterNoLegendary = S<
	CombatLeague<
		"COMBAT_LEAGUE_VS_SEEKER_MASTER_NO_LEGENDARY",
		{
			badgeType: "BADGE_MASTER_LEAGUE";
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
			battlePartyCombatLeagueTemplateId: "COMBAT_LEAGUE_DEFAULT_MASTER";
			iconUrl: "https://storage.googleapis.com/prod-public-images/premierball_sprite.png";
			leagueType: "PREMIER";
			pokemonCondition: [
				{
					type: "WITH_POKEMON_CP_LIMIT";
					withPokemonCpLimit: {
						maxCp: 6000;
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
export type CombatLeagueVsSeekerMasterPremier = S<
	CombatLeague<
		"COMBAT_LEAGUE_VS_SEEKER_MASTER_PREMIER",
		{
			badgeType: "BADGE_MASTER_LEAGUE";
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
			battlePartyCombatLeagueTemplateId: "COMBAT_LEAGUE_DEFAULT_MASTER";
			iconUrl: "https://storage.googleapis.com/prod-public-images/premierball_sprite.png";
			leagueType: "PREMIER";
			pokemonCondition: [
				{
					type: "WITH_POKEMON_CP_LIMIT";
					withPokemonCpLimit: {
						maxCp: 6000;
					};
				},
				{
					type: "WITH_UNIQUE_POKEMON";
				},
			];
			title: "master_premier_cup_title";
			unlockCondition: [
				{
					minPokemonCount: 3;
					type: "WITH_UNIQUE_POKEMON";
				},
			];
		}
	>
>;
export type CombatLeagueVsSeekerMasterPremierClassic = S<
	CombatLeague<
		"COMBAT_LEAGUE_VS_SEEKER_MASTER_PREMIER_CLASSIC",
		{
			badgeType: "BADGE_MASTER_LEAGUE";
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
			battlePartyCombatLeagueTemplateId: "COMBAT_LEAGUE_DEFAULT_MASTER";
			iconUrl: "https://storage.googleapis.com/prod-public-images/premierball_sprite.png";
			leagueType: "PREMIER";
			pokemonCondition: [
				{
					type: "WITH_POKEMON_CP_LIMIT";
					withPokemonCpLimit: {
						maxCp: 6000;
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
			title: "master_premier_classic_title";
			unlockCondition: [
				{
					minPokemonCount: 3;
					type: "WITH_UNIQUE_POKEMON";
				},
			];
		}
	>
>;

export type CombatLeagueDefaultMasterMasterfileEntry =
	| CombatLeagueVsSeekerMaster
	| CombatLeagueVsSeekerMasterClassic
	| CombatLeagueVsSeekerMasterMegas
	| CombatLeagueVsSeekerMasterNoLegendary
	| CombatLeagueVsSeekerMasterPremier
	| CombatLeagueVsSeekerMasterPremierClassic;
