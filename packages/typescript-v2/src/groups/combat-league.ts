export interface CombatLeague<T extends string> {
	templateId: T;
	data: CombatLeagueData<T>;
}

export interface CombatLeagueData<T extends string> {
	templateId: T;
	combatLeague: unknown;
}

export type CombatLeagueDefaultGreat = CombatLeague<"COMBAT_LEAGUE_DEFAULT_GREAT">;
export type CombatLeagueDefaultMaster = CombatLeague<"COMBAT_LEAGUE_DEFAULT_MASTER">;
export type CombatLeagueDefaultUltra = CombatLeague<"COMBAT_LEAGUE_DEFAULT_ULTRA">;
export type CombatLeagueSafariBarcelona202301 = CombatLeague<"COMBAT_LEAGUE_SAFARI_BARCELONA_2023_01">;
export type CombatLeagueSafariBarcelona202302 = CombatLeague<"COMBAT_LEAGUE_SAFARI_BARCELONA_2023_02">;
export type CombatLeagueSafariBarcelona2023Test = CombatLeague<"COMBAT_LEAGUE_SAFARI_BARCELONA_2023_TEST">;
export type CombatLeagueSafariMexicocity202301 = CombatLeague<"COMBAT_LEAGUE_SAFARI_MEXICOCITY_2023_01">;
export type CombatLeagueSafariMexicocity202302 = CombatLeague<"COMBAT_LEAGUE_SAFARI_MEXICOCITY_2023_02">;
export type CombatLeagueSafariMexicocity2023Test = CombatLeague<"COMBAT_LEAGUE_SAFARI_MEXICOCITY_2023_TEST">;
export type CombatLeagueSafariSeoul202301 = CombatLeague<"COMBAT_LEAGUE_SAFARI_SEOUL_2023_01">;
export type CombatLeagueSafariSeoul202302 = CombatLeague<"COMBAT_LEAGUE_SAFARI_SEOUL_2023_02">;
export type CombatLeagueSafariSeoul2023Test = CombatLeague<"COMBAT_LEAGUE_SAFARI_SEOUL_2023_TEST">;
export type CombatLeagueSafariZoneGoyang202201 = CombatLeague<"COMBAT_LEAGUE_SAFARI_ZONE_GOYANG_2022_01">;
export type CombatLeagueSafariZoneGoyang202202 = CombatLeague<"COMBAT_LEAGUE_SAFARI_ZONE_GOYANG_2022_02">;
export type CombatLeagueSafariZoneGoyang202203 = CombatLeague<"COMBAT_LEAGUE_SAFARI_ZONE_GOYANG_2022_03">;
export type CombatLeagueSafariZoneGoyang2022Post = CombatLeague<"COMBAT_LEAGUE_SAFARI_ZONE_GOYANG_2022_POST">;
export type CombatLeagueSafariZoneGoyang2022Test = CombatLeague<"COMBAT_LEAGUE_SAFARI_ZONE_GOYANG_2022_TEST">;
export type CombatLeagueSafariZoneSeville202201 = CombatLeague<"COMBAT_LEAGUE_SAFARI_ZONE_SEVILLE_2022_01">;
export type CombatLeagueSafariZoneSeville202202 = CombatLeague<"COMBAT_LEAGUE_SAFARI_ZONE_SEVILLE_2022_02">;
export type CombatLeagueSafariZoneSeville202203 = CombatLeague<"COMBAT_LEAGUE_SAFARI_ZONE_SEVILLE_2022_03">;
export type CombatLeagueSafariZoneSeville202204 = CombatLeague<"COMBAT_LEAGUE_SAFARI_ZONE_SEVILLE_2022_04">;
export type CombatLeagueSafariZoneSeville2022Test = CombatLeague<"COMBAT_LEAGUE_SAFARI_ZONE_SEVILLE_2022_TEST">;
export type CombatLeagueSafariZoneSingapore202201 = CombatLeague<"COMBAT_LEAGUE_SAFARI_ZONE_SINGAPORE_2022_01">;
export type CombatLeagueSafariZoneSingapore202202 = CombatLeague<"COMBAT_LEAGUE_SAFARI_ZONE_SINGAPORE_2022_02">;
export type CombatLeagueSafariZoneSingapore202203 = CombatLeague<"COMBAT_LEAGUE_SAFARI_ZONE_SINGAPORE_2022_03">;
export type CombatLeagueSafariZoneSingapore2022Post = CombatLeague<"COMBAT_LEAGUE_SAFARI_ZONE_SINGAPORE_2022_POST">;
export type CombatLeagueSafariZoneSingapore2022Test = CombatLeague<"COMBAT_LEAGUE_SAFARI_ZONE_SINGAPORE_2022_TEST">;
export type CombatLeagueSafariZoneTaipei202201 = CombatLeague<"COMBAT_LEAGUE_SAFARI_ZONE_TAIPEI_2022_01">;
export type CombatLeagueSafariZoneTaipei202202 = CombatLeague<"COMBAT_LEAGUE_SAFARI_ZONE_TAIPEI_2022_02">;
export type CombatLeagueSafariZoneTaipei202203 = CombatLeague<"COMBAT_LEAGUE_SAFARI_ZONE_TAIPEI_2022_03">;
export type CombatLeagueSafariZoneTaipei2022Post = CombatLeague<"COMBAT_LEAGUE_SAFARI_ZONE_TAIPEI_2022_POST">;
export type CombatLeagueSafariZoneTaipei2022Test = CombatLeague<"COMBAT_LEAGUE_SAFARI_ZONE_TAIPEI_2022_TEST">;
export type CombatLeagueVsSeekerColorGreat = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_COLOR_GREAT">;
export type CombatLeagueVsSeekerElementRemix = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_ELEMENT_REMIX">;
export type CombatLeagueVsSeekerEvolution = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_EVOLUTION">;
export type CombatLeagueVsSeekerFantasyUltra = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_FANTASY_ULTRA">;
export type CombatLeagueVsSeekerGalarGreat = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GALAR_GREAT">;
export type CombatLeagueVsSeekerGalarLittle = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GALAR_LITTLE">;
export type CombatLeagueVsSeekerGreat = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT">;
export type CombatLeagueVsSeekerGreatBidoof = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_BIDOOF">;
export type CombatLeagueVsSeekerGreatCatch = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH">;
export type CombatLeagueVsSeekerGreatCatchGofest2022 = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_GOFEST2022">;
export type CombatLeagueVsSeekerGreatCatchS13 = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S13">;
export type CombatLeagueVsSeekerGreatCatchS14 = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S14">;
export type CombatLeagueVsSeekerGreatCatchS15 = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S15">;
export type CombatLeagueVsSeekerGreatCatchS16 = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S16">;
export type CombatLeagueVsSeekerGreatCatchS18 = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S18">;
export type CombatLeagueVsSeekerGreatCatchS19 = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S19">;
export type CombatLeagueVsSeekerGreatCatchS20 = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S20">;
export type CombatLeagueVsSeekerGreatCatchS22 = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S22">;
export type CombatLeagueVsSeekerGreatCatchS8 = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S8">;
export type CombatLeagueVsSeekerGreatCatchSeason11 = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_SEASON11">;
export type CombatLeagueVsSeekerGreatChampionshipSeries = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_CHAMPIONSHIP_SERIES">;
export type CombatLeagueVsSeekerGreatElectric = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_ELECTRIC">;
export type CombatLeagueVsSeekerGreatElement = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_ELEMENT">;
export type CombatLeagueVsSeekerGreatFantasy = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_FANTASY">;
export type CombatLeagueVsSeekerGreatFighting = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_FIGHTING">;
export type CombatLeagueVsSeekerGreatFightingRemix = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_FIGHTING_REMIX">;
export type CombatLeagueVsSeekerGreatFlying = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_FLYING">;
export type CombatLeagueVsSeekerGreatFossil = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_FOSSIL">;
export type CombatLeagueVsSeekerGreatHalloween = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_HALLOWEEN">;
export type CombatLeagueVsSeekerGreatHalloweenLittle = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_HALLOWEEN_LITTLE">;
export type CombatLeagueVsSeekerGreatHisui = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_HISUI">;
export type CombatLeagueVsSeekerGreatHoenn = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_HOENN">;
export type CombatLeagueVsSeekerGreatHoliday = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_HOLIDAY">;
export type CombatLeagueVsSeekerGreatJohto = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_JOHTO">;
export type CombatLeagueVsSeekerGreatJungle = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_JUNGLE">;
export type CombatLeagueVsSeekerGreatKanto = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_KANTO">;
export type CombatLeagueVsSeekerGreatLittle = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_LITTLE">;
export type CombatLeagueVsSeekerGreatLittleRemix = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_LITTLE_REMIX">;
export type CombatLeagueVsSeekerGreatLove = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_LOVE">;
export type CombatLeagueVsSeekerGreatPvpNextPreview = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_PVP_NEXT_PREVIEW">;
export type CombatLeagueVsSeekerGreatRemix = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_REMIX">;
export type CombatLeagueVsSeekerGreatRetro = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_RETRO">;
export type CombatLeagueVsSeekerGreatScroll = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_SCROLL">;
export type CombatLeagueVsSeekerGreatSingleType = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_SINGLE_TYPE">;
export type CombatLeagueVsSeekerGreatSinnoh = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_SINNOH">;
export type CombatLeagueVsSeekerGreatSummer = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_SUMMER">;
export type CombatLeagueVsSeekerGreatWeather = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_GREAT_WEATHER">;
export type CombatLeagueVsSeekerHalloweenUltra = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_HALLOWEEN_ULTRA">;
export type CombatLeagueVsSeekerLittleCatch = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_LITTLE_CATCH">;
export type CombatLeagueVsSeekerLittleCatchS13 = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_LITTLE_CATCH_S13">;
export type CombatLeagueVsSeekerLittleCatchS14 = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_LITTLE_CATCH_S14">;
export type CombatLeagueVsSeekerLittleHoliday = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_LITTLE_HOLIDAY">;
export type CombatLeagueVsSeekerLittleJungle = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_LITTLE_JUNGLE">;
export type CombatLeagueVsSeekerLittleJungleRemix = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_LITTLE_JUNGLE_REMIX">;
export type CombatLeagueVsSeekerMaster = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_MASTER">;
export type CombatLeagueVsSeekerMasterClassic = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_MASTER_CLASSIC">;
export type CombatLeagueVsSeekerMasterMegas = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_MASTER_MEGAS">;
export type CombatLeagueVsSeekerMasterNoLegendary = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_MASTER_NO_LEGENDARY">;
export type CombatLeagueVsSeekerMasterPremier = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_MASTER_PREMIER">;
export type CombatLeagueVsSeekerMasterPremierClassic = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_MASTER_PREMIER_CLASSIC">;
export type CombatLeagueVsSeekerMountainGreat = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_MOUNTAIN_GREAT">;
export type CombatLeagueVsSeekerPsychic = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_PSYCHIC">;
export type CombatLeagueVsSeekerSpringGreat = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_SPRING_GREAT">;
export type CombatLeagueVsSeekerSunshineGreat = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_SUNSHINE_GREAT">;
export type CombatLeagueVsSeekerUltra = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_ULTRA">;
export type CombatLeagueVsSeekerUltraHoliday = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_ULTRA_HOLIDAY">;
export type CombatLeagueVsSeekerUltraNoLegendary = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_ULTRA_NO_LEGENDARY">;
export type CombatLeagueVsSeekerUltraPremier = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_ULTRA_PREMIER">;
export type CombatLeagueVsSeekerUltraPremierClassic = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_ULTRA_PREMIER_CLASSIC">;
export type CombatLeagueVsSeekerUltraRemix = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_ULTRA_REMIX">;
export type CombatLeagueVsSeekerUltraSummer = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_ULTRA_SUMMER">;
export type CombatLeagueVsSeekerWeather = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_WEATHER">;
export type CombatLeagueVsSeekerWillpower = CombatLeague<"COMBAT_LEAGUE_VS_SEEKER_WILLPOWER">;

export type CombatLeagueMasterfileEntry =
	| CombatLeagueDefaultGreat
	| CombatLeagueDefaultMaster
	| CombatLeagueDefaultUltra
	| CombatLeagueSafariBarcelona202301
	| CombatLeagueSafariBarcelona202302
	| CombatLeagueSafariBarcelona2023Test
	| CombatLeagueSafariMexicocity202301
	| CombatLeagueSafariMexicocity202302
	| CombatLeagueSafariMexicocity2023Test
	| CombatLeagueSafariSeoul202301
	| CombatLeagueSafariSeoul202302
	| CombatLeagueSafariSeoul2023Test
	| CombatLeagueSafariZoneGoyang202201
	| CombatLeagueSafariZoneGoyang202202
	| CombatLeagueSafariZoneGoyang202203
	| CombatLeagueSafariZoneGoyang2022Post
	| CombatLeagueSafariZoneGoyang2022Test
	| CombatLeagueSafariZoneSeville202201
	| CombatLeagueSafariZoneSeville202202
	| CombatLeagueSafariZoneSeville202203
	| CombatLeagueSafariZoneSeville202204
	| CombatLeagueSafariZoneSeville2022Test
	| CombatLeagueSafariZoneSingapore202201
	| CombatLeagueSafariZoneSingapore202202
	| CombatLeagueSafariZoneSingapore202203
	| CombatLeagueSafariZoneSingapore2022Post
	| CombatLeagueSafariZoneSingapore2022Test
	| CombatLeagueSafariZoneTaipei202201
	| CombatLeagueSafariZoneTaipei202202
	| CombatLeagueSafariZoneTaipei202203
	| CombatLeagueSafariZoneTaipei2022Post
	| CombatLeagueSafariZoneTaipei2022Test
	| CombatLeagueVsSeekerColorGreat
	| CombatLeagueVsSeekerElementRemix
	| CombatLeagueVsSeekerEvolution
	| CombatLeagueVsSeekerFantasyUltra
	| CombatLeagueVsSeekerGalarGreat
	| CombatLeagueVsSeekerGalarLittle
	| CombatLeagueVsSeekerGreat
	| CombatLeagueVsSeekerGreatBidoof
	| CombatLeagueVsSeekerGreatCatch
	| CombatLeagueVsSeekerGreatCatchGofest2022
	| CombatLeagueVsSeekerGreatCatchS13
	| CombatLeagueVsSeekerGreatCatchS14
	| CombatLeagueVsSeekerGreatCatchS15
	| CombatLeagueVsSeekerGreatCatchS16
	| CombatLeagueVsSeekerGreatCatchS18
	| CombatLeagueVsSeekerGreatCatchS19
	| CombatLeagueVsSeekerGreatCatchS20
	| CombatLeagueVsSeekerGreatCatchS22
	| CombatLeagueVsSeekerGreatCatchS8
	| CombatLeagueVsSeekerGreatCatchSeason11
	| CombatLeagueVsSeekerGreatChampionshipSeries
	| CombatLeagueVsSeekerGreatElectric
	| CombatLeagueVsSeekerGreatElement
	| CombatLeagueVsSeekerGreatFantasy
	| CombatLeagueVsSeekerGreatFighting
	| CombatLeagueVsSeekerGreatFightingRemix
	| CombatLeagueVsSeekerGreatFlying
	| CombatLeagueVsSeekerGreatFossil
	| CombatLeagueVsSeekerGreatHalloween
	| CombatLeagueVsSeekerGreatHalloweenLittle
	| CombatLeagueVsSeekerGreatHisui
	| CombatLeagueVsSeekerGreatHoenn
	| CombatLeagueVsSeekerGreatHoliday
	| CombatLeagueVsSeekerGreatJohto
	| CombatLeagueVsSeekerGreatJungle
	| CombatLeagueVsSeekerGreatKanto
	| CombatLeagueVsSeekerGreatLittle
	| CombatLeagueVsSeekerGreatLittleRemix
	| CombatLeagueVsSeekerGreatLove
	| CombatLeagueVsSeekerGreatPvpNextPreview
	| CombatLeagueVsSeekerGreatRemix
	| CombatLeagueVsSeekerGreatRetro
	| CombatLeagueVsSeekerGreatScroll
	| CombatLeagueVsSeekerGreatSingleType
	| CombatLeagueVsSeekerGreatSinnoh
	| CombatLeagueVsSeekerGreatSummer
	| CombatLeagueVsSeekerGreatWeather
	| CombatLeagueVsSeekerHalloweenUltra
	| CombatLeagueVsSeekerLittleCatch
	| CombatLeagueVsSeekerLittleCatchS13
	| CombatLeagueVsSeekerLittleCatchS14
	| CombatLeagueVsSeekerLittleHoliday
	| CombatLeagueVsSeekerLittleJungle
	| CombatLeagueVsSeekerLittleJungleRemix
	| CombatLeagueVsSeekerMaster
	| CombatLeagueVsSeekerMasterClassic
	| CombatLeagueVsSeekerMasterMegas
	| CombatLeagueVsSeekerMasterNoLegendary
	| CombatLeagueVsSeekerMasterPremier
	| CombatLeagueVsSeekerMasterPremierClassic
	| CombatLeagueVsSeekerMountainGreat
	| CombatLeagueVsSeekerPsychic
	| CombatLeagueVsSeekerSpringGreat
	| CombatLeagueVsSeekerSunshineGreat
	| CombatLeagueVsSeekerUltra
	| CombatLeagueVsSeekerUltraHoliday
	| CombatLeagueVsSeekerUltraNoLegendary
	| CombatLeagueVsSeekerUltraPremier
	| CombatLeagueVsSeekerUltraPremierClassic
	| CombatLeagueVsSeekerUltraRemix
	| CombatLeagueVsSeekerUltraSummer
	| CombatLeagueVsSeekerWeather
	| CombatLeagueVsSeekerWillpower;

export type CombatLeagueTemplateID = CombatLeagueMasterfileEntry["templateId"];
