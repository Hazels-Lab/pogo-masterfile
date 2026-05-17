//! Generated from Pokémon GO masterfile — group "combatLeague" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum CombatLeagueTemplateId {
    #[serde(rename = "COMBAT_LEAGUE_DEFAULT_GREAT")]
    CombatLeagueDefaultGreat,
    #[serde(rename = "COMBAT_LEAGUE_DEFAULT_MASTER")]
    CombatLeagueDefaultMaster,
    #[serde(rename = "COMBAT_LEAGUE_DEFAULT_MASTER_NPC")]
    CombatLeagueDefaultMasterNpc,
    #[serde(rename = "COMBAT_LEAGUE_DEFAULT_ULTRA")]
    CombatLeagueDefaultUltra,
    #[serde(rename = "COMBAT_LEAGUE_SAFARI_BARCELONA_2023_01")]
    CombatLeagueSafariBarcelona202301,
    #[serde(rename = "COMBAT_LEAGUE_SAFARI_BARCELONA_2023_02")]
    CombatLeagueSafariBarcelona202302,
    #[serde(rename = "COMBAT_LEAGUE_SAFARI_BARCELONA_2023_TEST")]
    CombatLeagueSafariBarcelona2023Test,
    #[serde(rename = "COMBAT_LEAGUE_SAFARI_MEXICOCITY_2023_01")]
    CombatLeagueSafariMexicocity202301,
    #[serde(rename = "COMBAT_LEAGUE_SAFARI_MEXICOCITY_2023_02")]
    CombatLeagueSafariMexicocity202302,
    #[serde(rename = "COMBAT_LEAGUE_SAFARI_MEXICOCITY_2023_TEST")]
    CombatLeagueSafariMexicocity2023Test,
    #[serde(rename = "COMBAT_LEAGUE_SAFARI_SEOUL_2023_01")]
    CombatLeagueSafariSeoul202301,
    #[serde(rename = "COMBAT_LEAGUE_SAFARI_SEOUL_2023_02")]
    CombatLeagueSafariSeoul202302,
    #[serde(rename = "COMBAT_LEAGUE_SAFARI_SEOUL_2023_TEST")]
    CombatLeagueSafariSeoul2023Test,
    #[serde(rename = "COMBAT_LEAGUE_SAFARI_ZONE_GOYANG_2022_01")]
    CombatLeagueSafariZoneGoyang202201,
    #[serde(rename = "COMBAT_LEAGUE_SAFARI_ZONE_GOYANG_2022_02")]
    CombatLeagueSafariZoneGoyang202202,
    #[serde(rename = "COMBAT_LEAGUE_SAFARI_ZONE_GOYANG_2022_03")]
    CombatLeagueSafariZoneGoyang202203,
    #[serde(rename = "COMBAT_LEAGUE_SAFARI_ZONE_GOYANG_2022_POST")]
    CombatLeagueSafariZoneGoyang2022Post,
    #[serde(rename = "COMBAT_LEAGUE_SAFARI_ZONE_GOYANG_2022_TEST")]
    CombatLeagueSafariZoneGoyang2022Test,
    #[serde(rename = "COMBAT_LEAGUE_SAFARI_ZONE_SEVILLE_2022_01")]
    CombatLeagueSafariZoneSeville202201,
    #[serde(rename = "COMBAT_LEAGUE_SAFARI_ZONE_SEVILLE_2022_02")]
    CombatLeagueSafariZoneSeville202202,
    #[serde(rename = "COMBAT_LEAGUE_SAFARI_ZONE_SEVILLE_2022_03")]
    CombatLeagueSafariZoneSeville202203,
    #[serde(rename = "COMBAT_LEAGUE_SAFARI_ZONE_SEVILLE_2022_04")]
    CombatLeagueSafariZoneSeville202204,
    #[serde(rename = "COMBAT_LEAGUE_SAFARI_ZONE_SEVILLE_2022_TEST")]
    CombatLeagueSafariZoneSeville2022Test,
    #[serde(rename = "COMBAT_LEAGUE_SAFARI_ZONE_SINGAPORE_2022_01")]
    CombatLeagueSafariZoneSingapore202201,
    #[serde(rename = "COMBAT_LEAGUE_SAFARI_ZONE_SINGAPORE_2022_02")]
    CombatLeagueSafariZoneSingapore202202,
    #[serde(rename = "COMBAT_LEAGUE_SAFARI_ZONE_SINGAPORE_2022_03")]
    CombatLeagueSafariZoneSingapore202203,
    #[serde(rename = "COMBAT_LEAGUE_SAFARI_ZONE_SINGAPORE_2022_POST")]
    CombatLeagueSafariZoneSingapore2022Post,
    #[serde(rename = "COMBAT_LEAGUE_SAFARI_ZONE_SINGAPORE_2022_TEST")]
    CombatLeagueSafariZoneSingapore2022Test,
    #[serde(rename = "COMBAT_LEAGUE_SAFARI_ZONE_TAIPEI_2022_01")]
    CombatLeagueSafariZoneTaipei202201,
    #[serde(rename = "COMBAT_LEAGUE_SAFARI_ZONE_TAIPEI_2022_02")]
    CombatLeagueSafariZoneTaipei202202,
    #[serde(rename = "COMBAT_LEAGUE_SAFARI_ZONE_TAIPEI_2022_03")]
    CombatLeagueSafariZoneTaipei202203,
    #[serde(rename = "COMBAT_LEAGUE_SAFARI_ZONE_TAIPEI_2022_POST")]
    CombatLeagueSafariZoneTaipei2022Post,
    #[serde(rename = "COMBAT_LEAGUE_SAFARI_ZONE_TAIPEI_2022_TEST")]
    CombatLeagueSafariZoneTaipei2022Test,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_COLOR_GREAT")]
    CombatLeagueVsSeekerColorGreat,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_ELEMENT_REMIX")]
    CombatLeagueVsSeekerElementRemix,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_EVOLUTION")]
    CombatLeagueVsSeekerEvolution,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_FANTASY_ULTRA")]
    CombatLeagueVsSeekerFantasyUltra,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GALAR_GREAT")]
    CombatLeagueVsSeekerGalarGreat,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GALAR_LITTLE")]
    CombatLeagueVsSeekerGalarLittle,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT")]
    CombatLeagueVsSeekerGreat,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_BIDOOF")]
    CombatLeagueVsSeekerGreatBidoof,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH")]
    CombatLeagueVsSeekerGreatCatch,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_GOFEST2022")]
    CombatLeagueVsSeekerGreatCatchGofest2022,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S8")]
    CombatLeagueVsSeekerGreatCatchS8,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S13")]
    CombatLeagueVsSeekerGreatCatchS13,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S14")]
    CombatLeagueVsSeekerGreatCatchS14,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S15")]
    CombatLeagueVsSeekerGreatCatchS15,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S16")]
    CombatLeagueVsSeekerGreatCatchS16,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S18")]
    CombatLeagueVsSeekerGreatCatchS18,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S19")]
    CombatLeagueVsSeekerGreatCatchS19,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S20")]
    CombatLeagueVsSeekerGreatCatchS20,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_S22")]
    CombatLeagueVsSeekerGreatCatchS22,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_CATCH_SEASON11")]
    CombatLeagueVsSeekerGreatCatchSeason11,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_CHAMPIONSHIP_NAIC")]
    CombatLeagueVsSeekerGreatChampionshipNaic,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_CHAMPIONSHIP_SERIES")]
    CombatLeagueVsSeekerGreatChampionshipSeries,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_ELECTRIC")]
    CombatLeagueVsSeekerGreatElectric,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_ELEMENT")]
    CombatLeagueVsSeekerGreatElement,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_FANTASY")]
    CombatLeagueVsSeekerGreatFantasy,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_FIGHTING")]
    CombatLeagueVsSeekerGreatFighting,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_FIGHTING_REMIX")]
    CombatLeagueVsSeekerGreatFightingRemix,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_FLYING")]
    CombatLeagueVsSeekerGreatFlying,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_FOSSIL")]
    CombatLeagueVsSeekerGreatFossil,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_HALLOWEEN")]
    CombatLeagueVsSeekerGreatHalloween,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_HALLOWEEN_LITTLE")]
    CombatLeagueVsSeekerGreatHalloweenLittle,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_HISUI")]
    CombatLeagueVsSeekerGreatHisui,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_HOENN")]
    CombatLeagueVsSeekerGreatHoenn,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_HOLIDAY")]
    CombatLeagueVsSeekerGreatHoliday,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_JOHTO")]
    CombatLeagueVsSeekerGreatJohto,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_JUNGLE")]
    CombatLeagueVsSeekerGreatJungle,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_KANTO")]
    CombatLeagueVsSeekerGreatKanto,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_LITTLE")]
    CombatLeagueVsSeekerGreatLittle,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_LITTLE_REMIX")]
    CombatLeagueVsSeekerGreatLittleRemix,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_LOVE")]
    CombatLeagueVsSeekerGreatLove,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_MEGAS")]
    CombatLeagueVsSeekerGreatMegas,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_PVP_NEXT_PREVIEW")]
    CombatLeagueVsSeekerGreatPvpNextPreview,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_REMIX")]
    CombatLeagueVsSeekerGreatRemix,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_RETRO")]
    CombatLeagueVsSeekerGreatRetro,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_SCROLL")]
    CombatLeagueVsSeekerGreatScroll,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_SINGLE_TYPE")]
    CombatLeagueVsSeekerGreatSingleType,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_SINNOH")]
    CombatLeagueVsSeekerGreatSinnoh,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_SUMMER")]
    CombatLeagueVsSeekerGreatSummer,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_GREAT_WEATHER")]
    CombatLeagueVsSeekerGreatWeather,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_HALLOWEEN_ULTRA")]
    CombatLeagueVsSeekerHalloweenUltra,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_LITTLE_CATCH")]
    CombatLeagueVsSeekerLittleCatch,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_LITTLE_CATCH_S13")]
    CombatLeagueVsSeekerLittleCatchS13,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_LITTLE_CATCH_S14")]
    CombatLeagueVsSeekerLittleCatchS14,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_LITTLE_HOLIDAY")]
    CombatLeagueVsSeekerLittleHoliday,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_LITTLE_JUNGLE")]
    CombatLeagueVsSeekerLittleJungle,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_LITTLE_JUNGLE_REMIX")]
    CombatLeagueVsSeekerLittleJungleRemix,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_MASTER")]
    CombatLeagueVsSeekerMaster,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_MASTER_CLASSIC")]
    CombatLeagueVsSeekerMasterClassic,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_MASTER_MEGAS")]
    CombatLeagueVsSeekerMasterMegas,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_MASTER_NO_LEGENDARY")]
    CombatLeagueVsSeekerMasterNoLegendary,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_MASTER_PREMIER")]
    CombatLeagueVsSeekerMasterPremier,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_MASTER_PREMIER_CLASSIC")]
    CombatLeagueVsSeekerMasterPremierClassic,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_MOUNTAIN_GREAT")]
    CombatLeagueVsSeekerMountainGreat,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_PSYCHIC")]
    CombatLeagueVsSeekerPsychic,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_SPRING_GREAT")]
    CombatLeagueVsSeekerSpringGreat,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_SUNSHINE_GREAT")]
    CombatLeagueVsSeekerSunshineGreat,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_ULTRA")]
    CombatLeagueVsSeekerUltra,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_ULTRA_HOLIDAY")]
    CombatLeagueVsSeekerUltraHoliday,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_ULTRA_MEGAS")]
    CombatLeagueVsSeekerUltraMegas,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_ULTRA_NO_LEGENDARY")]
    CombatLeagueVsSeekerUltraNoLegendary,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_ULTRA_PREMIER")]
    CombatLeagueVsSeekerUltraPremier,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_ULTRA_PREMIER_CLASSIC")]
    CombatLeagueVsSeekerUltraPremierClassic,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_ULTRA_REMIX")]
    CombatLeagueVsSeekerUltraRemix,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_ULTRA_SUMMER")]
    CombatLeagueVsSeekerUltraSummer,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_WEATHER")]
    CombatLeagueVsSeekerWeather,
    #[serde(rename = "COMBAT_LEAGUE_VS_SEEKER_WILLPOWER")]
    CombatLeagueVsSeekerWillpower,
}
