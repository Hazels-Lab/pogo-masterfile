//! Generated from Pokémon GO masterfile — group "iapItemDisplay" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum IapItemDisplayTemplateId {
    #[serde(rename = "APRIL1_2026_DELUXE_EVENT_PASS_TRACK_UNLOCK")]
    April12026DeluxeEventPassTrackUnlock,
    #[serde(rename = "APRIL1_2026_DELUXE_EVENT_PASS_TRACK_UNLOCK_PLUS_POINTS")]
    April12026DeluxeEventPassTrackUnlockPlusPoints,
    #[serde(rename = "APRIL2_2026_DELUXE_EVENT_PASS_TRACK_UNLOCK")]
    April22026DeluxeEventPassTrackUnlock,
    #[serde(rename = "APRIL2_2026_DELUXE_EVENT_PASS_TRACK_UNLOCK_PLUS_POINTS")]
    April22026DeluxeEventPassTrackUnlockPlusPoints,
    #[serde(rename = "APRIL3_2026_DELUXE_EVENT_PASS_TRACK_UNLOCK")]
    April32026DeluxeEventPassTrackUnlock,
    #[serde(rename = "APRIL3_2026_DELUXE_EVENT_PASS_TRACK_UNLOCK_PLUS_POINTS")]
    April32026DeluxeEventPassTrackUnlockPlusPoints,
    #[serde(rename = "battlepassticket.1")]
    Battlepassticket1,
    #[serde(rename = "BUNDLE_EC_200_RPP_1")]
    BundleEc200Rpp1,
    #[serde(rename = "BUNDLE_EC_600_RPP_3")]
    BundleEc600Rpp3,
    #[serde(rename = "bundle.adventurebrazil100.1")]
    BundleAdventurebrazil1001,
    #[serde(rename = "bundle.adventurebrazil200.1")]
    BundleAdventurebrazil2001,
    #[serde(rename = "bundle.anniversary2023.1")]
    BundleAnniversary20231,
    #[serde(rename = "bundle.apacmar2025.1")]
    BundleApacmar20251,
    #[serde(rename = "bundle.arraia2025.1")]
    BundleArraia20251,
    #[serde(rename = "bundle.arraia2025.2")]
    BundleArraia20252,
    #[serde(rename = "bundle.atlanticav2box.1")]
    BundleAtlanticav2box1,
    #[serde(rename = "bundle.atlanticav2box.2")]
    BundleAtlanticav2box2,
    #[serde(rename = "bundle.blackfridaystickers24.1")]
    BundleBlackfridaystickers241,
    #[serde(rename = "bundle.blackfridaystickers24.2")]
    BundleBlackfridaystickers242,
    #[serde(rename = "bundle.boost2023.1")]
    BundleBoost20231,
    #[serde(rename = "bundle.brazil2023.1")]
    BundleBrazil20231,
    #[serde(rename = "bundle.brazilrediscover1.1")]
    BundleBrazilrediscover11,
    #[serde(rename = "bundle.brazilrediscover2.1")]
    BundleBrazilrediscover21,
    #[serde(rename = "bundle.brazilvacations100.1")]
    BundleBrazilvacations1001,
    #[serde(rename = "bundle.carnival2025.1")]
    BundleCarnival20251,
    #[serde(rename = "bundle.carnival2025.2")]
    BundleCarnival20252,
    #[serde(rename = "bundle.cd2022.1")]
    BundleCd20221,
    #[serde(rename = "bundle.cd2022.2")]
    BundleCd20222,
    #[serde(rename = "bundle.cdrecapstickers.1")]
    BundleCdrecapstickers1,
    #[serde(rename = "bundle.citysafari450hktw.1")]
    BundleCitysafari450hktw1,
    #[serde(rename = "bundle.cswkmakegoodprep.100.1")]
    BundleCswkmakegoodprep1001,
    #[serde(rename = "bundle.cswkmakegoodprep.200.1")]
    BundleCswkmakegoodprep2001,
    #[serde(rename = "bundle.cswkmakegoodprep.300.1")]
    BundleCswkmakegoodprep3001,
    #[serde(rename = "bundle.decroutes2023.1")]
    BundleDecroutes20231,
    #[serde(rename = "bundle.diademuertos2025.1")]
    BundleDiademuertos20251,
    #[serde(rename = "bundle.diademuertosmax100.1")]
    BundleDiademuertosmax1001,
    #[serde(rename = "bundle.diademuertosmax200.1")]
    BundleDiademuertosmax2001,
    #[serde(rename = "bundle.diwali2025.1")]
    BundleDiwali20251,
    #[serde(rename = "bundle.diwali2025.2")]
    BundleDiwali20252,
    #[serde(rename = "bundle.diwalimax100.1")]
    BundleDiwalimax1001,
    #[serde(rename = "bundle.EliteExp2024.1")]
    BundleEliteExp20241,
    #[serde(rename = "bundle.EliteExp2024.2")]
    BundleEliteExp20242,
    #[serde(rename = "bundle.EliteExp2024.3")]
    BundleEliteExp20243,
    #[serde(rename = "bundle.EliteExp2024.4")]
    BundleEliteExp20244,
    #[serde(rename = "bundle.EliteExp2024.5")]
    BundleEliteExp20245,
    #[serde(rename = "bundle.emcarnival2026.1")]
    BundleEmcarnival20261,
    #[serde(rename = "bundle.emcarnival2026.2")]
    BundleEmcarnival20262,
    #[serde(rename = "bundle.emea2023.1")]
    BundleEmea20231,
    #[serde(rename = "bundle.evolve2022.1")]
    BundleEvolve20221,
    #[serde(rename = "bundle.evolve2022.2")]
    BundleEvolve20222,
    #[serde(rename = "bundle.evolve2022.3")]
    BundleEvolve20223,
    #[serde(rename = "bundle.evolve2022.4")]
    BundleEvolve20224,
    #[serde(rename = "bundle.evolve2022.5")]
    BundleEvolve20225,
    #[serde(rename = "bundle.evolve2022.6")]
    BundleEvolve20226,
    #[serde(rename = "bundle.fol2022.1")]
    BundleFol20221,
    #[serde(rename = "bundle.fol2022.2")]
    BundleFol20222,
    #[serde(rename = "bundle.fol2022.3")]
    BundleFol20223,
    #[serde(rename = "bundle.fol2022.4")]
    BundleFol20224,
    #[serde(rename = "bundle.general.template4")]
    BundleGeneralTemplate4,
    #[serde(rename = "bundle.general.template5")]
    BundleGeneralTemplate5,
    #[serde(rename = "bundle.general.template6")]
    BundleGeneralTemplate6,
    #[serde(rename = "bundle.general1.free.1")]
    BundleGeneral1Free1,
    #[serde(rename = "bundle.general1.large.1")]
    BundleGeneral1Large1,
    #[serde(rename = "bundle.general1.medium.1")]
    BundleGeneral1Medium1,
    #[serde(rename = "bundle.general1.medium.2")]
    BundleGeneral1Medium2,
    #[serde(rename = "bundle.general1.medium.3")]
    BundleGeneral1Medium3,
    #[serde(rename = "bundle.general1.rocket.1")]
    BundleGeneral1Rocket1,
    #[serde(rename = "bundle.general1.small.1")]
    BundleGeneral1Small1,
    #[serde(rename = "bundle.general1.tiny.2")]
    BundleGeneral1Tiny2,
    #[serde(rename = "bundle.general1.tiny.3")]
    BundleGeneral1Tiny3,
    #[serde(rename = "bundle.general1.tiny.4")]
    BundleGeneral1Tiny4,
    #[serde(rename = "bundle.general2.free.1")]
    BundleGeneral2Free1,
    #[serde(rename = "bundle.general2.large.1")]
    BundleGeneral2Large1,
    #[serde(rename = "bundle.general2.medium.1")]
    BundleGeneral2Medium1,
    #[serde(rename = "bundle.general2.small.1")]
    BundleGeneral2Small1,
    #[serde(rename = "bundle.general3.free.1")]
    BundleGeneral3Free1,
    #[serde(rename = "bundle.general3.large.1")]
    BundleGeneral3Large1,
    #[serde(rename = "bundle.general3.small.1")]
    BundleGeneral3Small1,
    #[serde(rename = "bundle.general4.large.1")]
    BundleGeneral4Large1,
    #[serde(rename = "bundle.general4.small.2")]
    BundleGeneral4Small2,
    #[serde(rename = "bundle.general5.large.1")]
    BundleGeneral5Large1,
    #[serde(rename = "bundle.general5.small.1")]
    BundleGeneral5Small1,
    #[serde(rename = "bundle.general5.small.2")]
    BundleGeneral5Small2,
    #[serde(rename = "bundle.general5.small.3")]
    BundleGeneral5Small3,
    #[serde(rename = "bundle.general5.small.4")]
    BundleGeneral5Small4,
    #[serde(rename = "bundle.general5.small.5")]
    BundleGeneral5Small5,
    #[serde(rename = "bundle.general6.small.1")]
    BundleGeneral6Small1,
    #[serde(rename = "bundle.gmaxday.1")]
    BundleGmaxday1,
    #[serde(rename = "bundle.gofest2023.1")]
    BundleGofest20231,
    #[serde(rename = "bundle.gofest2023.2")]
    BundleGofest20232,
    #[serde(rename = "bundle.gofest2023.3")]
    BundleGofest20233,
    #[serde(rename = "bundle.gofest2023.4")]
    BundleGofest20234,
    #[serde(rename = "bundle.gofest2023.5")]
    BundleGofest20235,
    #[serde(rename = "bundle.gofest2024.1")]
    BundleGofest20241,
    #[serde(rename = "bundle.gofest2024.2")]
    BundleGofest20242,
    #[serde(rename = "bundle.gofest2024.3")]
    BundleGofest20243,
    #[serde(rename = "bundle.gofest2024.4")]
    BundleGofest20244,
    #[serde(rename = "bundle.gofestmakegoodprep.1")]
    BundleGofestmakegoodprep1,
    #[serde(rename = "bundle.gofestmakegoodprep.2")]
    BundleGofestmakegoodprep2,
    #[serde(rename = "bundle.gofestmakegoodprep.3")]
    BundleGofestmakegoodprep3,
    #[serde(rename = "bundle.GOTour2024.1")]
    BundleGotour20241,
    #[serde(rename = "bundle.GOTour2024.2")]
    BundleGotour20242,
    #[serde(rename = "bundle.GOTour2024.3")]
    BundleGotour20243,
    #[serde(rename = "bundle.GOTour2024.4")]
    BundleGotour20244,
    #[serde(rename = "bundle.GOTour2024.5")]
    BundleGotour20245,
    #[serde(rename = "bundle.GOTour2024.6")]
    BundleGotour20246,
    #[serde(rename = "bundle.GOTour2024.7")]
    BundleGotour20247,
    #[serde(rename = "bundle.gowa2024.1")]
    BundleGowa20241,
    #[serde(rename = "bundle.gowa2024.2")]
    BundleGowa20242,
    #[serde(rename = "bundle.gowa2024.3")]
    BundleGowa20243,
    #[serde(rename = "bundle.gowa2024.4")]
    BundleGowa20244,
    #[serde(rename = "bundle.gpdindialaunch.1")]
    BundleGpdindialaunch1,
    #[serde(rename = "bundle.gpmay2023.1")]
    BundleGpmay20231,
    #[serde(rename = "bundle.gwlatam2025.1")]
    BundleGwlatam20251,
    #[serde(rename = "bundle.gwlatam2025.2")]
    BundleGwlatam20252,
    #[serde(rename = "bundle.gwlatam2025.3")]
    BundleGwlatam20253,
    #[serde(rename = "bundle.halloween.adventure.1")]
    BundleHalloweenAdventure1,
    #[serde(rename = "bundle.halloween.large.1")]
    BundleHalloweenLarge1,
    #[serde(rename = "bundle.halloween.small.1")]
    BundleHalloweenSmall1,
    #[serde(rename = "bundle.halloween2022.1")]
    BundleHalloween20221,
    #[serde(rename = "bundle.halloween2022.2")]
    BundleHalloween20222,
    #[serde(rename = "bundle.halloween2022.3")]
    BundleHalloween20223,
    #[serde(rename = "bundle.halloween2023.1")]
    BundleHalloween20231,
    #[serde(rename = "bundle.halloween2023.2")]
    BundleHalloween20232,
    #[serde(rename = "bundle.halloween2023.3")]
    BundleHalloween20233,
    #[serde(rename = "bundle.halloween2025.1")]
    BundleHalloween20251,
    #[serde(rename = "bundle.halloween2025.2")]
    BundleHalloween20252,
    #[serde(rename = "bundle.halloween2025.3")]
    BundleHalloween20253,
    #[serde(rename = "bundle.harvestcatch.1")]
    BundleHarvestcatch1,
    #[serde(rename = "bundle.harvestfestival.2025")]
    BundleHarvestfestival2025,
    #[serde(rename = "bundle.hatchbox2024.1")]
    BundleHatchbox20241,
    #[serde(rename = "bundle.hawlucha2025.1")]
    BundleHawlucha20251,
    #[serde(rename = "bundle.hawlucha2025.2")]
    BundleHawlucha20252,
    #[serde(rename = "bundle.hawluchacelebration100.1")]
    BundleHawluchacelebration1001,
    #[serde(rename = "bundle.hawluchacelebration200.1")]
    BundleHawluchacelebration2001,
    #[serde(rename = "bundle.hisuiraidday2023.1")]
    BundleHisuiraidday20231,
    #[serde(rename = "bundle.holi2025.1")]
    BundleHoli20251,
    #[serde(rename = "bundle.holi2025.2")]
    BundleHoli20252,
    #[serde(rename = "bundle.holiday2022.1")]
    BundleHoliday20221,
    #[serde(rename = "bundle.holiday2022.2")]
    BundleHoliday20222,
    #[serde(rename = "bundle.holiday2022.3")]
    BundleHoliday20223,
    #[serde(rename = "bundle.holiday2024.1")]
    BundleHoliday20241,
    #[serde(rename = "bundle.incenseday.1")]
    BundleIncenseday1,
    #[serde(rename = "bundle.indiaaugust100.1")]
    BundleIndiaaugust1001,
    #[serde(rename = "bundle.indiaboxfeature.1")]
    BundleIndiaboxfeature1,
    #[serde(rename = "bundle.indiafestivaloflights.1")]
    BundleIndiafestivaloflights1,
    #[serde(rename = "bundle.indiamay2024.1")]
    BundleIndiamay20241,
    #[serde(rename = "bundle.indiaseptember100.1")]
    BundleIndiaseptember1001,
    #[serde(rename = "bundle.indiaseptember200.1")]
    BundleIndiaseptember2001,
    #[serde(rename = "bundle.indonesiaboxfeature.1")]
    BundleIndonesiaboxfeature1,
    #[serde(rename = "bundle.indonesialaunch.1")]
    BundleIndonesialaunch1,
    #[serde(rename = "bundle.indonesialaunch.2")]
    BundleIndonesialaunch2,
    #[serde(rename = "bundle.jakartaaugust100.1")]
    BundleJakartaaugust1001,
    #[serde(rename = "bundle.koreaseptember100.1")]
    BundleKoreaseptember1001,
    #[serde(rename = "bundle.koreaseptember200.1")]
    BundleKoreaseptember2001,
    #[serde(rename = "bundle.ksalaunch100.1")]
    BundleKsalaunch1001,
    #[serde(rename = "bundle.ksalaunch200.1")]
    BundleKsalaunch2001,
    #[serde(rename = "bundle.latbox100.1")]
    BundleLatbox1001,
    #[serde(rename = "bundle.latbox300.1")]
    BundleLatbox3001,
    #[serde(rename = "bundle.lunarnewyear.1")]
    BundleLunarnewyear1,
    #[serde(rename = "bundle.maxfinale.1")]
    BundleMaxfinale1,
    #[serde(rename = "bundle.maxfinale.2")]
    BundleMaxfinale2,
    #[serde(rename = "bundle.maxmonday.1")]
    BundleMaxmonday1,
    #[serde(rename = "bundle.mega-lucario-raid-day2024.1")]
    BundleMegaLucarioRaidDay20241,
    #[serde(rename = "bundle.mheracrossraidday2024.1")]
    BundleMheracrossraidday20241,
    #[serde(rename = "bundle.midautumn.1")]
    BundleMidautumn1,
    #[serde(rename = "bundle.midautumn.2")]
    BundleMidautumn2,
    #[serde(rename = "bundle.midautumn.3")]
    BundleMidautumn3,
    #[serde(rename = "bundle.newyears2024.1")]
    BundleNewyears20241,
    #[serde(rename = "bundle.playsummerbox.1")]
    BundlePlaysummerbox1,
    #[serde(rename = "bundle.primalraidday2023.1")]
    BundlePrimalraidday20231,
    #[serde(rename = "bundle.psych_spec_2022.1")]
    BundlePsychSpec20221,
    #[serde(rename = "bundle.psych_spec_2022.2")]
    BundlePsychSpec20222,
    #[serde(rename = "bundle.psych_spec_2022.3")]
    BundlePsychSpec20223,
    #[serde(rename = "bundle.ramadan.1")]
    BundleRamadan1,
    #[serde(rename = "bundle.ramadan.2")]
    BundleRamadan2,
    #[serde(rename = "bundle.rarebundle.1")]
    BundleRarebundle1,
    #[serde(rename = "bundle.rarebundle.2")]
    BundleRarebundle2,
    #[serde(rename = "bundle.rarebundle.3")]
    BundleRarebundle3,
    #[serde(rename = "bundle.rarebundle.4")]
    BundleRarebundle4,
    #[serde(rename = "bundle.riolu2023.1")]
    BundleRiolu20231,
    #[serde(rename = "bundle.riolu2023.2")]
    BundleRiolu20232,
    #[serde(rename = "bundle.rockruffboost.1")]
    BundleRockruffboost1,
    #[serde(rename = "bundle.rrpstar.1")]
    BundleRrpstar1,
    #[serde(rename = "bundle.s17seasonstart.1")]
    BundleS17seasonstart1,
    #[serde(rename = "bundle.season10evergreen.1")]
    BundleSeason10evergreen1,
    #[serde(rename = "bundle.season10evergreen.2")]
    BundleSeason10evergreen2,
    #[serde(rename = "bundle.season10evergreen.3")]
    BundleSeason10evergreen3,
    #[serde(rename = "bundle.season11evergreen.1")]
    BundleSeason11evergreen1,
    #[serde(rename = "bundle.season11evergreen.2")]
    BundleSeason11evergreen2,
    #[serde(rename = "bundle.season11evergreen.3")]
    BundleSeason11evergreen3,
    #[serde(rename = "bundle.season12evergreen2023.1")]
    BundleSeason12evergreen20231,
    #[serde(rename = "bundle.season12evergreen2023.2")]
    BundleSeason12evergreen20232,
    #[serde(rename = "bundle.season12evergreen2023.3")]
    BundleSeason12evergreen20233,
    #[serde(rename = "bundle.season13evergreen2023.1")]
    BundleSeason13evergreen20231,
    #[serde(rename = "bundle.season13evergreen2023.2")]
    BundleSeason13evergreen20232,
    #[serde(rename = "bundle.season13evergreen2023.3")]
    BundleSeason13evergreen20233,
    #[serde(rename = "bundle.season14evergreen2024.1")]
    BundleSeason14evergreen20241,
    #[serde(rename = "bundle.season14evergreen2024.2")]
    BundleSeason14evergreen20242,
    #[serde(rename = "bundle.season14evergreen2024.3")]
    BundleSeason14evergreen20243,
    #[serde(rename = "bundle.season15evergreen2024.1")]
    BundleSeason15evergreen20241,
    #[serde(rename = "bundle.season15evergreen2024.2")]
    BundleSeason15evergreen20242,
    #[serde(rename = "bundle.season15evergreen2024.3")]
    BundleSeason15evergreen20243,
    #[serde(rename = "bundle.season16evergreen2024.1")]
    BundleSeason16evergreen20241,
    #[serde(rename = "bundle.season16evergreen2024.2")]
    BundleSeason16evergreen20242,
    #[serde(rename = "bundle.season16evergreen2024.3")]
    BundleSeason16evergreen20243,
    #[serde(rename = "bundle.seasonaldelights2024.1")]
    BundleSeasonaldelights20241,
    #[serde(rename = "bundle.shadowlugia.1")]
    BundleShadowlugia1,
    #[serde(rename = "bundle.smoresbump.2025")]
    BundleSmoresbump2025,
    #[serde(rename = "bundle.solstice2023.1")]
    BundleSolstice20231,
    #[serde(rename = "bundle.solstice2023.2")]
    BundleSolstice20232,
    #[serde(rename = "bundle.solstice2023.3")]
    BundleSolstice20233,
    #[serde(rename = "bundle.songkran2025.1")]
    BundleSongkran20251,
    #[serde(rename = "bundle.sparkbox.1")]
    BundleSparkbox1,
    #[serde(rename = "bundle.sparkbox.2")]
    BundleSparkbox2,
    #[serde(rename = "bundle.sparkbox.3")]
    BundleSparkbox3,
    #[serde(rename = "bundle.springtakeover2023.1")]
    BundleSpringtakeover20231,
    #[serde(rename = "bundle.springtakeover2023.2")]
    BundleSpringtakeover20232,
    #[serde(rename = "bundle.springtakeover2023.3")]
    BundleSpringtakeover20233,
    #[serde(rename = "bundle.steel_mettle2022.1")]
    BundleSteelMettle20221,
    #[serde(rename = "bundle.steel_mettle2022.2")]
    BundleSteelMettle20222,
    #[serde(rename = "bundle.steel_mettle2022.3")]
    BundleSteelMettle20223,
    #[serde(rename = "bundle.takeover2022.1")]
    BundleTakeover20221,
    #[serde(rename = "bundle.takeover2022.2")]
    BundleTakeover20222,
    #[serde(rename = "bundle.takeover2022.3")]
    BundleTakeover20223,
    #[serde(rename = "bundle.tgrtakeover2024.1")]
    BundleTgrtakeover20241,
    #[serde(rename = "bundle.thailandfeatureapril2024.1")]
    BundleThailandfeatureapril20241,
    #[serde(rename = "bundle.tmexpert.1")]
    BundleTmexpert1,
    #[serde(rename = "bundle.ubraidday2022.1")]
    BundleUbraidday20221,
    #[serde(rename = "bundle.ubraidday2022.2")]
    BundleUbraidday20222,
    #[serde(rename = "bundle.ukfeature.1")]
    BundleUkfeature1,
    #[serde(rename = "bundle.ultrabeastraid.2024")]
    BundleUltrabeastraid2024,
    #[serde(rename = "bundle.ultraunlockraid2023.1")]
    BundleUltraunlockraid20231,
    #[serde(rename = "bundle.ultraunlockraid2023.2")]
    BundleUltraunlockraid20232,
    #[serde(rename = "bundle.uustorage.1")]
    BundleUustorage1,
    #[serde(rename = "bundle.voyagerouttoplay.1")]
    BundleVoyagerouttoplay1,
    #[serde(rename = "bundle.welcomebox.1")]
    BundleWelcomebox1,
    #[serde(rename = "bundle.winterevergreen.1")]
    BundleWinterevergreen1,
    #[serde(rename = "bundle.winterevergreen.2")]
    BundleWinterevergreen2,
    #[serde(rename = "bundle.winterevergreen.3")]
    BundleWinterevergreen3,
    #[serde(rename = "bundle.winterholiday2023.1")]
    BundleWinterholiday20231,
    #[serde(rename = "bundle.winterholiday2023.2")]
    BundleWinterholiday20232,
    #[serde(rename = "bundle.winterholiday2023.3")]
    BundleWinterholiday20233,
    #[serde(rename = "bundle.xmas.large.1")]
    BundleXmasLarge1,
    #[serde(rename = "bundle.zoruamakegood2022")]
    BundleZoruamakegood2022,
    #[serde(rename = "bundle.zzraid.1")]
    BundleZzraid1,
    #[serde(rename = "diademuertos")]
    Diademuertos,
    #[serde(rename = "EVENT_PASS_APRIL1_SEASON_STORE_REDIRECT")]
    EventPassApril1SeasonStoreRedirect,
    #[serde(rename = "EVENT_PASS_APRIL3_EVENT_STORE_REDIRECT")]
    EventPassApril3EventStoreRedirect,
    #[serde(rename = "EVENT_PASS_GOFEST2025_FINALE_STORE_REDIRECT")]
    EventPassGofest2025FinaleStoreRedirect,
    #[serde(rename = "EVENT_PASS_GOFEST2025_GLOBAL_STORE_REDIRECT")]
    EventPassGofest2025GlobalStoreRedirect,
    #[serde(rename = "EVENT_PASS_GOTOUR2025_GLOBAL_STORE_REDIRECT")]
    EventPassGotour2025GlobalStoreRedirect,
    #[serde(rename = "EVENT_PASS_GOWILD2025_GLOBAL_STORE_REDIRECT")]
    EventPassGowild2025GlobalStoreRedirect,
    #[serde(rename = "EVENT_PASS_HALLOWEEN2025_SEASON_STORE_REDIRECT")]
    EventPassHalloween2025SeasonStoreRedirect,
    #[serde(rename = "EVENT_PASS_MARCH1_SEASON_STORE_REDIRECT")]
    EventPassMarch1SeasonStoreRedirect,
    #[serde(rename = "EVENT_PASS_MARCH2_SEASON_STORE_REDIRECT")]
    EventPassMarch2SeasonStoreRedirect,
    #[serde(rename = "EVENT_PASS_MONTH1_SEASON_STORE_REDIRECT")]
    EventPassMonth1SeasonStoreRedirect,
    #[serde(rename = "EVENT_PASS_MONTH2_SEASON_STORE_REDIRECT")]
    EventPassMonth2SeasonStoreRedirect,
    #[serde(rename = "EVENT_PASS_MONTH3_SEASON_STORE_REDIRECT")]
    EventPassMonth3SeasonStoreRedirect,
    #[serde(rename = "EVENT_PASS_WINTERHOLIDAYS2025_SEASON_STORE_REDIRECT")]
    EventPassWinterholidays2025SeasonStoreRedirect,
    #[serde(rename = "evergreenticket.1")]
    Evergreenticket1,
    #[serde(rename = "evergreenticket.1.giftable")]
    Evergreenticket1Giftable,
    #[serde(rename = "FLAIR_FREE_BUNDLE_0")]
    FlairFreeBundle0,
    #[serde(rename = "general1.ticket.1")]
    General1Ticket1,
    #[serde(rename = "general1.ticket.1.giftable")]
    General1Ticket1Giftable,
    #[serde(rename = "general1.ticket.2")]
    General1Ticket2,
    #[serde(rename = "general1.ticket.2.giftable")]
    General1Ticket2Giftable,
    #[serde(rename = "general1.ticket.3")]
    General1Ticket3,
    #[serde(rename = "general1.ticket.4")]
    General1Ticket4,
    #[serde(rename = "general1.ticket.4.giftable")]
    General1Ticket4Giftable,
    #[serde(rename = "general1.ticket.5")]
    General1Ticket5,
    #[serde(rename = "general1.ticket.6")]
    General1Ticket6,
    #[serde(rename = "general2.ticket.1")]
    General2Ticket1,
    #[serde(rename = "general2.ticket.1.giftable")]
    General2Ticket1Giftable,
    #[serde(rename = "general2.ticket.2")]
    General2Ticket2,
    #[serde(rename = "general2.ticket.2.giftable")]
    General2Ticket2Giftable,
    #[serde(rename = "general2.ticket.4")]
    General2Ticket4,
    #[serde(rename = "general2.ticket.4.giftable")]
    General2Ticket4Giftable,
    #[serde(rename = "general2.ticket.5")]
    General2Ticket5,
    #[serde(rename = "general2.ticket.5.giftable")]
    General2Ticket5Giftable,
    #[serde(rename = "general2.ticket.6")]
    General2Ticket6,
    #[serde(rename = "general2.ticket.7")]
    General2Ticket7,
    #[serde(rename = "general2.ticket.7.giftable")]
    General2Ticket7Giftable,
    #[serde(rename = "general2.ticket.8")]
    General2Ticket8,
    #[serde(rename = "general2.ticket.8.giftable")]
    General2Ticket8Giftable,
    #[serde(rename = "general2.ticket.9")]
    General2Ticket9,
    #[serde(rename = "general2.ticket.9.giftable")]
    General2Ticket9Giftable,
    #[serde(rename = "general2.ticket.10")]
    General2Ticket10,
    #[serde(rename = "general2.ticket.10.giftable")]
    General2Ticket10Giftable,
    #[serde(rename = "general4.medium.1")]
    General4Medium1,
    #[serde(rename = "general6.small.1")]
    General6Small1,
    #[serde(rename = "GO_SAFARI_BALL_IAP_10")]
    GoSafariBallIap10,
    #[serde(rename = "GO_SAFARI_BALL_IAP_25")]
    GoSafariBallIap25,
    #[serde(rename = "GO_SAFARI_BALL_IAP_50")]
    GoSafariBallIap50,
    #[serde(rename = "GOFEST_2025_DELUXE_EVENT_PASS_TRACK_UNLOCK")]
    Gofest2025DeluxeEventPassTrackUnlock,
    #[serde(rename = "GOFEST_2025_DELUXE_EVENT_PASS_TRACK_UNLOCK_PLUS_POINTS")]
    Gofest2025DeluxeEventPassTrackUnlockPlusPoints,
    #[serde(rename = "GOFEST2025_FINALE_DELUXE_EVENT_PASS_TRACK_UNLOCK")]
    Gofest2025FinaleDeluxeEventPassTrackUnlock,
    #[serde(rename = "GOFEST2025_FINALE_DELUXE_EVENT_PASS_TRACK_UNLOCK_PLUS_POINTS")]
    Gofest2025FinaleDeluxeEventPassTrackUnlockPlusPoints,
    #[serde(rename = "GOTOUR_2025_DELUXE_EVENT_PASS_TRACK_UNLOCK")]
    Gotour2025DeluxeEventPassTrackUnlock,
    #[serde(rename = "GOTOUR_2025_DELUXE_EVENT_PASS_TRACK_UNLOCK_PLUS_POINTS")]
    Gotour2025DeluxeEventPassTrackUnlockPlusPoints,
    #[serde(rename = "gowaticketfree.1")]
    Gowaticketfree1,
    #[serde(rename = "GOWILD_2025_DELUXE_EVENT_PASS_TRACK_UNLOCK")]
    Gowild2025DeluxeEventPassTrackUnlock,
    #[serde(rename = "GOWILD_2025_DELUXE_EVENT_PASS_TRACK_UNLOCK_PLUS_POINTS")]
    Gowild2025DeluxeEventPassTrackUnlockPlusPoints,
    #[serde(rename = "HALLOWEEN2025_DELUXE_EVENT_PASS_TRACK_UNLOCK")]
    Halloween2025DeluxeEventPassTrackUnlock,
    #[serde(rename = "HALLOWEEN2025_DELUXE_EVENT_PASS_TRACK_UNLOCK_PLUS_POINTS")]
    Halloween2025DeluxeEventPassTrackUnlockPlusPoints,
    #[serde(rename = "hometransport.1")]
    Hometransport1,
    #[serde(rename = "incenseordinary.1")]
    Incenseordinary1,
    #[serde(rename = "incenseordinary.8")]
    Incenseordinary8,
    #[serde(rename = "incubatorbasic.1")]
    Incubatorbasic1,
    #[serde(rename = "incubatorsuper.1")]
    Incubatorsuper1,
    #[serde(rename = "ITEM_ENHANCED_CURRENCY_200")]
    ItemEnhancedCurrency200,
    #[serde(rename = "ITEM_ENHANCED_CURRENCY_600")]
    ItemEnhancedCurrency600,
    #[serde(rename = "itemleadermap")]
    Itemleadermap,
    #[serde(rename = "luckyegg.1")]
    Luckyegg1,
    #[serde(rename = "luckyegg.8")]
    Luckyegg8,
    #[serde(rename = "MARCH1_2026_DELUXE_EVENT_PASS_TRACK_UNLOCK")]
    March12026DeluxeEventPassTrackUnlock,
    #[serde(rename = "MARCH1_2026_DELUXE_EVENT_PASS_TRACK_UNLOCK_PLUS_POINTS")]
    March12026DeluxeEventPassTrackUnlockPlusPoints,
    #[serde(rename = "MARCH2_2026_DELUXE_EVENT_PASS_TRACK_UNLOCK")]
    March22026DeluxeEventPassTrackUnlock,
    #[serde(rename = "MARCH2_2026_DELUXE_EVENT_PASS_TRACK_UNLOCK_PLUS_POINTS")]
    March22026DeluxeEventPassTrackUnlockPlusPoints,
    #[serde(rename = "max_boost.1")]
    MaxBoost1,
    #[serde(rename = "max_boost.3")]
    MaxBoost3,
    #[serde(rename = "maxpotion.5")]
    Maxpotion5,
    #[serde(rename = "maxpotion.10")]
    Maxpotion10,
    #[serde(rename = "maxrevive.3")]
    Maxrevive3,
    #[serde(rename = "maxrevive.6")]
    Maxrevive6,
    #[serde(rename = "MONTH1_DELUXE_EVENT_PASS_TRACK_UNLOCK")]
    Month1DeluxeEventPassTrackUnlock,
    #[serde(rename = "MONTH1_DELUXE_EVENT_PASS_TRACK_UNLOCK_PLUS_POINTS")]
    Month1DeluxeEventPassTrackUnlockPlusPoints,
    #[serde(rename = "MONTH2_DELUXE_EVENT_PASS_TRACK_UNLOCK")]
    Month2DeluxeEventPassTrackUnlock,
    #[serde(rename = "MONTH2_DELUXE_EVENT_PASS_TRACK_UNLOCK_PLUS_POINTS")]
    Month2DeluxeEventPassTrackUnlockPlusPoints,
    #[serde(rename = "MONTH3_DELUXE_EVENT_PASS_TRACK_UNLOCK")]
    Month3DeluxeEventPassTrackUnlock,
    #[serde(rename = "MONTH3_DELUXE_EVENT_PASS_TRACK_UNLOCK_PLUS_POINTS")]
    Month3DeluxeEventPassTrackUnlockPlusPoints,
    #[serde(rename = "mp_replenish_rrp.1")]
    MpReplenishRrp1,
    #[serde(rename = "mp_replenish_rrp.3")]
    MpReplenishRrp3,
    #[serde(rename = "mp_replenish.1")]
    MpReplenish1,
    #[serde(rename = "mp_replenish.3")]
    MpReplenish3,
    #[serde(rename = "paidraidticket.1")]
    Paidraidticket1,
    #[serde(rename = "paidraidticket.3")]
    Paidraidticket3,
    #[serde(rename = "pgorelease.april2_2026_deluxe_event_pass_track_redirect")]
    PgoreleaseApril22026DeluxeEventPassTrackRedirect,
    #[serde(rename = "pgorelease.bundle.1")]
    PgoreleaseBundle1,
    #[serde(rename = "pgorelease.bundle.2")]
    PgoreleaseBundle2,
    #[serde(rename = "pgorelease.bundle.blanchebox.1")]
    PgoreleaseBundleBlanchebox1,
    #[serde(rename = "pgorelease.bundle.citysafaribarcelona1")]
    PgoreleaseBundleCitysafaribarcelona1,
    #[serde(rename = "pgorelease.bundle.citysafaribarcelona2")]
    PgoreleaseBundleCitysafaribarcelona2,
    #[serde(rename = "pgorelease.bundle.citysafarimexico1")]
    PgoreleaseBundleCitysafarimexico1,
    #[serde(rename = "pgorelease.bundle.citysafarimexico2")]
    PgoreleaseBundleCitysafarimexico2,
    #[serde(rename = "pgorelease.bundle.eliteraidbox.1")]
    PgoreleaseBundleEliteraidbox1,
    #[serde(rename = "pgorelease.bundle.eliteraidmay2023")]
    PgoreleaseBundleEliteraidmay2023,
    #[serde(rename = "pgorelease.bundle.flavoredlures.1")]
    PgoreleaseBundleFlavoredlures1,
    #[serde(rename = "pgorelease.bundle.flavoredlures.2")]
    PgoreleaseBundleFlavoredlures2,
    #[serde(rename = "pgorelease.bundle.flavoredlures.3")]
    PgoreleaseBundleFlavoredlures3,
    #[serde(rename = "pgorelease.bundle.flavoredlures.4")]
    PgoreleaseBundleFlavoredlures4,
    #[serde(rename = "pgorelease.bundle.flavoredlures.5")]
    PgoreleaseBundleFlavoredlures5,
    #[serde(rename = "pgorelease.bundle.flavoredlures.6")]
    PgoreleaseBundleFlavoredlures6,
    #[serde(rename = "pgorelease.bundle.flavoredlures.7")]
    PgoreleaseBundleFlavoredlures7,
    #[serde(rename = "pgorelease.bundle.flavoredlures.8")]
    PgoreleaseBundleFlavoredlures8,
    #[serde(rename = "pgorelease.bundle.foc2023box.1")]
    PgoreleaseBundleFoc2023box1,
    #[serde(rename = "pgorelease.bundle.general.thirdparty.large.2")]
    PgoreleaseBundleGeneralThirdpartyLarge2,
    #[serde(rename = "pgorelease.bundle.general.thirdparty.large.4")]
    PgoreleaseBundleGeneralThirdpartyLarge4,
    #[serde(rename = "pgorelease.bundle.general.thirdparty.medium.1")]
    PgoreleaseBundleGeneralThirdpartyMedium1,
    #[serde(rename = "pgorelease.bundle.general.thirdparty.small.1")]
    PgoreleaseBundleGeneralThirdpartySmall1,
    #[serde(rename = "pgorelease.bundle.general.thirdparty.small.1.2")]
    PgoreleaseBundleGeneralThirdpartySmall12,
    #[serde(rename = "pgorelease.bundle.general.thirdparty.small.2")]
    PgoreleaseBundleGeneralThirdpartySmall2,
    #[serde(rename = "pgorelease.bundle.general1.tiny.4")]
    PgoreleaseBundleGeneral1Tiny4,
    #[serde(rename = "pgorelease.bundle.general11.small.1331")]
    PgoreleaseBundleGeneral11Small1331,
    #[serde(rename = "pgorelease.bundle.gotour2023.0")]
    PgoreleaseBundleGotour20230,
    #[serde(rename = "pgorelease.bundle.gotour2023.1")]
    PgoreleaseBundleGotour20231,
    #[serde(rename = "pgorelease.bundle.gotour2023.2")]
    PgoreleaseBundleGotour20232,
    #[serde(rename = "pgorelease.bundle.gotour2023.3")]
    PgoreleaseBundleGotour20233,
    #[serde(rename = "pgorelease.bundle.gotour2023.4")]
    PgoreleaseBundleGotour20234,
    #[serde(rename = "pgorelease.bundle.gotour2023.5")]
    PgoreleaseBundleGotour20235,
    #[serde(rename = "pgorelease.bundle.gotour2023.6")]
    PgoreleaseBundleGotour20236,
    #[serde(rename = "pgorelease.bundle.gp2022.1")]
    PgoreleaseBundleGp20221,
    #[serde(rename = "pgorelease.bundle.indiagp2023.1")]
    PgoreleaseBundleIndiagp20231,
    #[serde(rename = "pgorelease.bundle.lure.1")]
    PgoreleaseBundleLure1,
    #[serde(rename = "pgorelease.bundle.pokemonday.1")]
    PgoreleaseBundlePokemonday1,
    #[serde(rename = "pgorelease.bundle.raiddaymay2023.1")]
    PgoreleaseBundleRaiddaymay20231,
    #[serde(rename = "pgorelease.bundle.raiddaymay2023.2")]
    PgoreleaseBundleRaiddaymay20232,
    #[serde(rename = "pgorelease.bundle.raiddaymay2023.3")]
    PgoreleaseBundleRaiddaymay20233,
    #[serde(rename = "pgorelease.bundle.raiddaymay2023.4")]
    PgoreleaseBundleRaiddaymay20234,
    #[serde(rename = "pgorelease.bundle.raiddaynov2023.1")]
    PgoreleaseBundleRaiddaynov20231,
    #[serde(rename = "pgorelease.bundle.raidhourbox.1")]
    PgoreleaseBundleRaidhourbox1,
    #[serde(rename = "pgorelease.bundle.raidhourbox.2")]
    PgoreleaseBundleRaidhourbox2,
    #[serde(rename = "pgorelease.bundle.ramadan2023box.1")]
    PgoreleaseBundleRamadan2023box1,
    #[serde(rename = "pgorelease.bundle.RTSRaid")]
    PgoreleaseBundleRtsraid,
    #[serde(rename = "pgorelease.bundle.season10evergreen.1")]
    PgoreleaseBundleSeason10evergreen1,
    #[serde(rename = "pgorelease.bundle.season10evergreen.2")]
    PgoreleaseBundleSeason10evergreen2,
    #[serde(rename = "pgorelease.bundle.season10evergreen.3")]
    PgoreleaseBundleSeason10evergreen3,
    #[serde(rename = "pgorelease.bundle.season10launch.1")]
    PgoreleaseBundleSeason10launch1,
    #[serde(rename = "pgorelease.bundle.sustainabilitybonusmay2023")]
    PgoreleaseBundleSustainabilitybonusmay2023,
    #[serde(rename = "pgorelease.bundle.sustainabilitymay2023")]
    PgoreleaseBundleSustainabilitymay2023,
    #[serde(rename = "pgorelease.bundle.template1")]
    PgoreleaseBundleTemplate1,
    #[serde(rename = "pgorelease.bundle.template2")]
    PgoreleaseBundleTemplate2,
    #[serde(rename = "pgorelease.bundle.template3")]
    PgoreleaseBundleTemplate3,
    #[serde(rename = "pgorelease.bundle.thailandspec2023.1")]
    PgoreleaseBundleThailandspec20231,
    #[serde(rename = "pgorelease.bundle.walkeratlantic2022.1")]
    PgoreleaseBundleWalkeratlantic20221,
    #[serde(rename = "pgorelease.bundle.walkeratlantic2022.2")]
    PgoreleaseBundleWalkeratlantic20222,
    #[serde(rename = "pgorelease.citysafariticket0.1")]
    PgoreleaseCitysafariticket01,
    #[serde(rename = "pgorelease.citysafariticket1.1")]
    PgoreleaseCitysafariticket11,
    #[serde(rename = "pgorelease.citysafariticket2.1")]
    PgoreleaseCitysafariticket21,
    #[serde(rename = "pgorelease.evergreenticket.1")]
    PgoreleaseEvergreenticket1,
    #[serde(rename = "pgorelease.evergreenticket.1.giftable")]
    PgoreleaseEvergreenticket1Giftable,
    #[serde(rename = "pgorelease.general1.ticket.1")]
    PgoreleaseGeneral1Ticket1,
    #[serde(rename = "pgorelease.general1.ticket.1.giftable")]
    PgoreleaseGeneral1Ticket1Giftable,
    #[serde(rename = "pgorelease.general1.ticket.2")]
    PgoreleaseGeneral1Ticket2,
    #[serde(rename = "pgorelease.general1.ticket.2.giftable")]
    PgoreleaseGeneral1Ticket2Giftable,
    #[serde(rename = "pgorelease.general1.ticket.4")]
    PgoreleaseGeneral1Ticket4,
    #[serde(rename = "pgorelease.general1.ticket.4.giftable")]
    PgoreleaseGeneral1Ticket4Giftable,
    #[serde(rename = "pgorelease.general2.ticket.1")]
    PgoreleaseGeneral2Ticket1,
    #[serde(rename = "pgorelease.general2.ticket.1.giftable")]
    PgoreleaseGeneral2Ticket1Giftable,
    #[serde(rename = "pgorelease.general2.ticket.2")]
    PgoreleaseGeneral2Ticket2,
    #[serde(rename = "pgorelease.general2.ticket.2.giftable")]
    PgoreleaseGeneral2Ticket2Giftable,
    #[serde(rename = "pgorelease.general2.ticket.4")]
    PgoreleaseGeneral2Ticket4,
    #[serde(rename = "pgorelease.general2.ticket.4.giftable")]
    PgoreleaseGeneral2Ticket4Giftable,
    #[serde(rename = "pgorelease.general2.ticket.5")]
    PgoreleaseGeneral2Ticket5,
    #[serde(rename = "pgorelease.general2.ticket.5.giftable")]
    PgoreleaseGeneral2Ticket5Giftable,
    #[serde(rename = "pgorelease.general2.ticket.7")]
    PgoreleaseGeneral2Ticket7,
    #[serde(rename = "pgorelease.general2.ticket.7.giftable")]
    PgoreleaseGeneral2Ticket7Giftable,
    #[serde(rename = "pgorelease.general2.ticket.8")]
    PgoreleaseGeneral2Ticket8,
    #[serde(rename = "pgorelease.general2.ticket.8.giftable")]
    PgoreleaseGeneral2Ticket8Giftable,
    #[serde(rename = "pgorelease.general2.ticket.9")]
    PgoreleaseGeneral2Ticket9,
    #[serde(rename = "pgorelease.general2.ticket.9.giftable")]
    PgoreleaseGeneral2Ticket9Giftable,
    #[serde(rename = "pgorelease.general2.ticket.10")]
    PgoreleaseGeneral2Ticket10,
    #[serde(rename = "pgorelease.general2.ticket.10.giftable")]
    PgoreleaseGeneral2Ticket10Giftable,
    #[serde(rename = "pgorelease.month2_deluxe_event_pass_track_unlock")]
    PgoreleaseMonth2DeluxeEventPassTrackUnlock,
    #[serde(rename = "pgorelease.month2_deluxe_event_pass_track_unlock_plus_points")]
    PgoreleaseMonth2DeluxeEventPassTrackUnlockPlusPoints,
    #[serde(rename = "pgorelease.month3_deluxe_event_pass_track_unlock")]
    PgoreleaseMonth3DeluxeEventPassTrackUnlock,
    #[serde(rename = "pgorelease.month3_deluxe_event_pass_track_unlock_plus_points")]
    PgoreleaseMonth3DeluxeEventPassTrackUnlockPlusPoints,
    #[serde(rename = "pgorelease.pokecoin.2750")]
    PgoreleasePokecoin2750,
    #[serde(rename = "pgorelease.pokecoin.5720")]
    PgoreleasePokecoin5720,
    #[serde(rename = "pgorelease.pokecoin.15950")]
    PgoreleasePokecoin15950,
    #[serde(rename = "pgorelease.pokecoin.21375")]
    PgoreleasePokecoin21375,
    #[serde(rename = "poffin")]
    Poffin,
    #[serde(rename = "pokeball.20")]
    Pokeball20,
    #[serde(rename = "pokeball.100")]
    Pokeball100,
    #[serde(rename = "pokeball.200")]
    Pokeball200,
    #[serde(rename = "postcardstorageupgrade.1")]
    Postcardstorageupgrade1,
    #[serde(rename = "remoteraidticket.1")]
    Remoteraidticket1,
    #[serde(rename = "remoteraidticket.3")]
    Remoteraidticket3,
    #[serde(rename = "starpiece.1")]
    Starpiece1,
    #[serde(rename = "starpiece.8")]
    Starpiece8,
    #[serde(rename = "STICKER_8ANNIV_1.3")]
    Sticker8anniv13,
    #[serde(rename = "STICKER_8ANNIV_1.5")]
    Sticker8anniv15,
    #[serde(rename = "STICKER_8ANNIV_2.3")]
    Sticker8anniv23,
    #[serde(rename = "STICKER_8ANNIV_2.5")]
    Sticker8anniv25,
    #[serde(rename = "STICKER_8ANNIV_3.3")]
    Sticker8anniv33,
    #[serde(rename = "STICKER_8ANNIV_3.5")]
    Sticker8anniv35,
    #[serde(rename = "STICKER_8ANNIV_4.3")]
    Sticker8anniv43,
    #[serde(rename = "STICKER_8ANNIV_4.5")]
    Sticker8anniv45,
    #[serde(rename = "STICKER_9ANNIV_1.3")]
    Sticker9anniv13,
    #[serde(rename = "STICKER_9ANNIV_1.5")]
    Sticker9anniv15,
    #[serde(rename = "STICKER_9ANNIV_2.3")]
    Sticker9anniv23,
    #[serde(rename = "STICKER_9ANNIV_2.5")]
    Sticker9anniv25,
    #[serde(rename = "STICKER_9ANNIV_3.3")]
    Sticker9anniv33,
    #[serde(rename = "STICKER_9ANNIV_3.5")]
    Sticker9anniv35,
    #[serde(rename = "STICKER_2023COLLAB_1.3")]
    Sticker2023collab13,
    #[serde(rename = "STICKER_2023COLLAB_1.5")]
    Sticker2023collab15,
    #[serde(rename = "STICKER_2023COLLAB_2.3")]
    Sticker2023collab23,
    #[serde(rename = "STICKER_2023COLLAB_2.5")]
    Sticker2023collab25,
    #[serde(rename = "STICKER_2023COLLAB_3.3")]
    Sticker2023collab33,
    #[serde(rename = "STICKER_2023COLLAB_3.5")]
    Sticker2023collab35,
    #[serde(rename = "STICKER_2023COLLAB_4.3")]
    Sticker2023collab43,
    #[serde(rename = "STICKER_2023COLLAB_4.5")]
    Sticker2023collab45,
    #[serde(rename = "STICKER_APRILFOOL2023_1.3")]
    StickerAprilfool202313,
    #[serde(rename = "STICKER_APRILFOOL2023_1.5")]
    StickerAprilfool202315,
    #[serde(rename = "STICKER_APRILFOOL2023_2.3")]
    StickerAprilfool202323,
    #[serde(rename = "STICKER_APRILFOOL2023_2.5")]
    StickerAprilfool202325,
    #[serde(rename = "STICKER_AUDINO.3")]
    StickerAudino3,
    #[serde(rename = "STICKER_AUDINO.5")]
    StickerAudino5,
    #[serde(rename = "STICKER_BELLSPROUTCD_1.3")]
    StickerBellsproutcd13,
    #[serde(rename = "STICKER_BELLSPROUTCD_1.5")]
    StickerBellsproutcd15,
    #[serde(rename = "STICKER_BELLSPROUTCD_2.3")]
    StickerBellsproutcd23,
    #[serde(rename = "STICKER_BELLSPROUTCD_2.5")]
    StickerBellsproutcd25,
    #[serde(rename = "STICKER_BELLSPROUTCD_3.3")]
    StickerBellsproutcd33,
    #[serde(rename = "STICKER_BELLSPROUTCD_3.5")]
    StickerBellsproutcd35,
    #[serde(rename = "STICKER_BELLSPROUTCD_4.3")]
    StickerBellsproutcd43,
    #[serde(rename = "STICKER_BELLSPROUTCD_4.5")]
    StickerBellsproutcd45,
    #[serde(rename = "STICKER_BIDOOFDAY_1.3")]
    StickerBidoofday13,
    #[serde(rename = "STICKER_BIDOOFDAY_1.5")]
    StickerBidoofday15,
    #[serde(rename = "STICKER_BIDOOFDAY_2.3")]
    StickerBidoofday23,
    #[serde(rename = "STICKER_BIDOOFDAY_2.5")]
    StickerBidoofday25,
    #[serde(rename = "STICKER_BIDOOFDAY_3.3")]
    StickerBidoofday33,
    #[serde(rename = "STICKER_BIDOOFDAY_3.5")]
    StickerBidoofday35,
    #[serde(rename = "STICKER_BOUNSWEETCD2024_1.3")]
    StickerBounsweetcd202413,
    #[serde(rename = "STICKER_BOUNSWEETCD2024_1.5")]
    StickerBounsweetcd202415,
    #[serde(rename = "STICKER_BOUNSWEETCD2024_2.3")]
    StickerBounsweetcd202423,
    #[serde(rename = "STICKER_BOUNSWEETCD2024_2.5")]
    StickerBounsweetcd202425,
    #[serde(rename = "STICKER_BOUNSWEETCD2024_3.3")]
    StickerBounsweetcd202433,
    #[serde(rename = "STICKER_BOUNSWEETCD2024_3.5")]
    StickerBounsweetcd202435,
    #[serde(rename = "STICKER_BOUNSWEETCD2024_4.3")]
    StickerBounsweetcd202443,
    #[serde(rename = "STICKER_BOUNSWEETCD2024_4.5")]
    StickerBounsweetcd202445,
    #[serde(rename = "STICKER_CHANSEYCD_1.3")]
    StickerChanseycd13,
    #[serde(rename = "STICKER_CHANSEYCD_1.5")]
    StickerChanseycd15,
    #[serde(rename = "STICKER_CHANSEYCD_2.3")]
    StickerChanseycd23,
    #[serde(rename = "STICKER_CHANSEYCD_2.5")]
    StickerChanseycd25,
    #[serde(rename = "STICKER_CHANSEYCD_3.3")]
    StickerChanseycd33,
    #[serde(rename = "STICKER_CHANSEYCD_3.5")]
    StickerChanseycd35,
    #[serde(rename = "STICKER_CHANSEYCD_4.3")]
    StickerChanseycd43,
    #[serde(rename = "STICKER_CHANSEYCD_4.5")]
    StickerChanseycd45,
    #[serde(rename = "STICKER_DIAMONDPEARLCHIMCHAR.3")]
    StickerDiamondpearlchimchar3,
    #[serde(rename = "STICKER_DIAMONDPEARLCHIMCHAR.5")]
    StickerDiamondpearlchimchar5,
    #[serde(rename = "STICKER_DIAMONDPEARLDIALGA.3")]
    StickerDiamondpearldialga3,
    #[serde(rename = "STICKER_DIAMONDPEARLDIALGA.5")]
    StickerDiamondpearldialga5,
    #[serde(rename = "STICKER_DIAMONDPEARLLUCARIO.3")]
    StickerDiamondpearllucario3,
    #[serde(rename = "STICKER_DIAMONDPEARLLUCARIO.5")]
    StickerDiamondpearllucario5,
    #[serde(rename = "STICKER_DIAMONDPEARLPALKIA.3")]
    StickerDiamondpearlpalkia3,
    #[serde(rename = "STICKER_DIAMONDPEARLPALKIA.5")]
    StickerDiamondpearlpalkia5,
    #[serde(rename = "STICKER_DIAMONDPEARLPIPLUP.3")]
    StickerDiamondpearlpiplup3,
    #[serde(rename = "STICKER_DIAMONDPEARLPIPLUP.5")]
    StickerDiamondpearlpiplup5,
    #[serde(rename = "STICKER_DIAMONDPEARLTURTWIG.3")]
    StickerDiamondpearlturtwig3,
    #[serde(rename = "STICKER_DIAMONDPEARLTURTWIG.5")]
    StickerDiamondpearlturtwig5,
    #[serde(rename = "STICKER_DITTO_1.3")]
    StickerDitto13,
    #[serde(rename = "STICKER_DITTO_1.5")]
    StickerDitto15,
    #[serde(rename = "STICKER_DITTO_2.3")]
    StickerDitto23,
    #[serde(rename = "STICKER_DITTO_2.5")]
    StickerDitto25,
    #[serde(rename = "STICKER_DITTO_3.3")]
    StickerDitto33,
    #[serde(rename = "STICKER_DITTO_3.5")]
    StickerDitto35,
    #[serde(rename = "STICKER_DITTO_4.3")]
    StickerDitto43,
    #[serde(rename = "STICKER_DITTO_4.5")]
    StickerDitto45,
    #[serde(rename = "STICKER_DITTO_5.3")]
    StickerDitto53,
    #[serde(rename = "STICKER_DITTO_5.5")]
    StickerDitto55,
    #[serde(rename = "STICKER_DITTO_6.3")]
    StickerDitto63,
    #[serde(rename = "STICKER_DITTO_6.5")]
    StickerDitto65,
    #[serde(rename = "STICKER_EEVEEFRIENDS_1.3")]
    StickerEeveefriends13,
    #[serde(rename = "STICKER_EEVEEFRIENDS_1.5")]
    StickerEeveefriends15,
    #[serde(rename = "STICKER_EEVEEFRIENDS_2.3")]
    StickerEeveefriends23,
    #[serde(rename = "STICKER_EEVEEFRIENDS_2.5")]
    StickerEeveefriends25,
    #[serde(rename = "STICKER_EEVEEFRIENDS_3.3")]
    StickerEeveefriends33,
    #[serde(rename = "STICKER_EEVEEFRIENDS_3.5")]
    StickerEeveefriends35,
    #[serde(rename = "STICKER_EEVEEFRIENDS_4.3")]
    StickerEeveefriends43,
    #[serde(rename = "STICKER_EEVEEFRIENDS_4.5")]
    StickerEeveefriends45,
    #[serde(rename = "STICKER_EEVEEFRIENDS_5.3")]
    StickerEeveefriends53,
    #[serde(rename = "STICKER_EEVEEFRIENDS_5.5")]
    StickerEeveefriends55,
    #[serde(rename = "STICKER_EEVEEFRIENDS_6.3")]
    StickerEeveefriends63,
    #[serde(rename = "STICKER_EEVEEFRIENDS_6.5")]
    StickerEeveefriends65,
    #[serde(rename = "STICKER_EEVEEFRIENDS_7.3")]
    StickerEeveefriends73,
    #[serde(rename = "STICKER_EEVEEFRIENDS_7.5")]
    StickerEeveefriends75,
    #[serde(rename = "STICKER_EEVEEFRIENDS_8.3")]
    StickerEeveefriends83,
    #[serde(rename = "STICKER_EEVEEFRIENDS_8.5")]
    StickerEeveefriends85,
    #[serde(rename = "STICKER_EEVEEFRIENDS_9.3")]
    StickerEeveefriends93,
    #[serde(rename = "STICKER_EEVEEFRIENDS_9.5")]
    StickerEeveefriends95,
    #[serde(rename = "STICKER_ETERNATUS.3")]
    StickerEternatus3,
    #[serde(rename = "STICKER_ETERNATUS.5")]
    StickerEternatus5,
    #[serde(rename = "STICKER_FALL_2023_1.3")]
    StickerFall202313,
    #[serde(rename = "STICKER_FALL_2023_1.5")]
    StickerFall202315,
    #[serde(rename = "STICKER_FALL_2023_2.3")]
    StickerFall202323,
    #[serde(rename = "STICKER_FALL_2023_2.5")]
    StickerFall202325,
    #[serde(rename = "STICKER_FALL_2023_3.3")]
    StickerFall202333,
    #[serde(rename = "STICKER_FALL_2023_3.5")]
    StickerFall202335,
    #[serde(rename = "STICKER_FALL_2023_4.3")]
    StickerFall202343,
    #[serde(rename = "STICKER_FALL_2023_4.5")]
    StickerFall202345,
    #[serde(rename = "STICKER_FALL_2023_5.3")]
    StickerFall202353,
    #[serde(rename = "STICKER_FALL_2023_5.5")]
    StickerFall202355,
    #[serde(rename = "STICKER_FALL_2023_6.3")]
    StickerFall202363,
    #[serde(rename = "STICKER_FALL_2023_6.5")]
    StickerFall202365,
    #[serde(rename = "STICKER_FALL_2024_1.3")]
    StickerFall202413,
    #[serde(rename = "STICKER_FALL_2024_1.5")]
    StickerFall202415,
    #[serde(rename = "STICKER_FALL_2024_2.3")]
    StickerFall202423,
    #[serde(rename = "STICKER_FALL_2024_2.5")]
    StickerFall202425,
    #[serde(rename = "STICKER_FALL_2024_3.3")]
    StickerFall202433,
    #[serde(rename = "STICKER_FALL_2024_3.5")]
    StickerFall202435,
    #[serde(rename = "STICKER_FALL_2024_4.3")]
    StickerFall202443,
    #[serde(rename = "STICKER_FALL_2024_4.5")]
    StickerFall202445,
    #[serde(rename = "STICKER_FALL_2024_5.3")]
    StickerFall202453,
    #[serde(rename = "STICKER_FALL_2024_5.5")]
    StickerFall202455,
    #[serde(rename = "STICKER_FALL_2024_6.3")]
    StickerFall202463,
    #[serde(rename = "STICKER_FALL_2024_6.5")]
    StickerFall202465,
    #[serde(rename = "STICKER_FALL_2025_1.3")]
    StickerFall202513,
    #[serde(rename = "STICKER_FALL_2025_1.5")]
    StickerFall202515,
    #[serde(rename = "STICKER_FALL_2025_2.3")]
    StickerFall202523,
    #[serde(rename = "STICKER_FALL_2025_2.5")]
    StickerFall202525,
    #[serde(rename = "STICKER_FALL_2025_3.3")]
    StickerFall202533,
    #[serde(rename = "STICKER_FALL_2025_3.5")]
    StickerFall202535,
    #[serde(rename = "STICKER_FALL_2025_4.3")]
    StickerFall202543,
    #[serde(rename = "STICKER_FALL_2025_4.5")]
    StickerFall202545,
    #[serde(rename = "STICKER_FALL_SAWSBUCK.3")]
    StickerFallSawsbuck3,
    #[serde(rename = "STICKER_FALL_SAWSBUCK.5")]
    StickerFallSawsbuck5,
    #[serde(rename = "STICKER_FALL_SHROOMISH.3")]
    StickerFallShroomish3,
    #[serde(rename = "STICKER_FALL_SHROOMISH.5")]
    StickerFallShroomish5,
    #[serde(rename = "STICKER_FALL_SKWOVET.3")]
    StickerFallSkwovet3,
    #[serde(rename = "STICKER_FALL_SKWOVET.5")]
    StickerFallSkwovet5,
    #[serde(rename = "STICKER_FALL_TEDDIURSA.3")]
    StickerFallTeddiursa3,
    #[serde(rename = "STICKER_FALL_TEDDIURSA.5")]
    StickerFallTeddiursa5,
    #[serde(rename = "STICKER_FALL_TREVENANT.3")]
    StickerFallTrevenant3,
    #[serde(rename = "STICKER_FALL_TREVENANT.5")]
    StickerFallTrevenant5,
    #[serde(rename = "STICKER_FALL_VULPIX.3")]
    StickerFallVulpix3,
    #[serde(rename = "STICKER_FALL_VULPIX.5")]
    StickerFallVulpix5,
    #[serde(rename = "STICKER_FESTIVALOFLIGHT_MORELULL.3")]
    StickerFestivaloflightMorelull3,
    #[serde(rename = "STICKER_FESTIVALOFLIGHT_MORELULL.5")]
    StickerFestivaloflightMorelull5,
    #[serde(rename = "STICKER_FESTIVALOFLIGHT_SHIINOTIC.3")]
    StickerFestivaloflightShiinotic3,
    #[serde(rename = "STICKER_FESTIVALOFLIGHT_SHIINOTIC.5")]
    StickerFestivaloflightShiinotic5,
    #[serde(rename = "STICKER_FESTIVALOFTHELIGHTS21_V1.3")]
    StickerFestivalofthelights21V13,
    #[serde(rename = "STICKER_FESTIVALOFTHELIGHTS21_V1.5")]
    StickerFestivalofthelights21V15,
    #[serde(rename = "STICKER_FESTIVALOFTHELIGHTS21_V2.3")]
    StickerFestivalofthelights21V23,
    #[serde(rename = "STICKER_FESTIVALOFTHELIGHTS21_V2.5")]
    StickerFestivalofthelights21V25,
    #[serde(rename = "STICKER_FESTIVALOFTHELIGHTS21_V3.3")]
    StickerFestivalofthelights21V33,
    #[serde(rename = "STICKER_FESTIVALOFTHELIGHTS21_V3.5")]
    StickerFestivalofthelights21V35,
    #[serde(rename = "STICKER_FESTIVALOFTHELIGHTS21_V4.3")]
    StickerFestivalofthelights21V43,
    #[serde(rename = "STICKER_FESTIVALOFTHELIGHTS21_V4.5")]
    StickerFestivalofthelights21V45,
    #[serde(rename = "STICKER_FLABEBE_1.3")]
    StickerFlabebe13,
    #[serde(rename = "STICKER_FLABEBE_1.5")]
    StickerFlabebe15,
    #[serde(rename = "STICKER_FLABEBE_2.3")]
    StickerFlabebe23,
    #[serde(rename = "STICKER_FLABEBE_2.5")]
    StickerFlabebe25,
    #[serde(rename = "STICKER_FUNAWARI_22_312.3")]
    StickerFunawari223123,
    #[serde(rename = "STICKER_FUNAWARI_22_312.5")]
    StickerFunawari223125,
    #[serde(rename = "STICKER_FUNWARI_02_0608.3")]
    StickerFunwari0206083,
    #[serde(rename = "STICKER_FUNWARI_02_0608.5")]
    StickerFunwari0206085,
    #[serde(rename = "STICKER_FUNWARI_20.3")]
    StickerFunwari203,
    #[serde(rename = "STICKER_FUNWARI_20.5")]
    StickerFunwari205,
    #[serde(rename = "STICKER_FURFROUHEART_1.3")]
    StickerFurfrouheart13,
    #[serde(rename = "STICKER_FURFROUHEART_1.5")]
    StickerFurfrouheart15,
    #[serde(rename = "STICKER_FURFROUHEART_2.3")]
    StickerFurfrouheart23,
    #[serde(rename = "STICKER_FURFROUHEART_2.5")]
    StickerFurfrouheart25,
    #[serde(rename = "STICKER_GIFTTHANKYOU.3")]
    StickerGiftthankyou3,
    #[serde(rename = "STICKER_GIFTTHANKYOU.5")]
    StickerGiftthankyou5,
    #[serde(rename = "STICKER_GIMMIGHOUL_1.3")]
    StickerGimmighoul13,
    #[serde(rename = "STICKER_GIMMIGHOUL_1.5")]
    StickerGimmighoul15,
    #[serde(rename = "STICKER_GIMMIGHOUL_2.3")]
    StickerGimmighoul23,
    #[serde(rename = "STICKER_GIMMIGHOUL_2.5")]
    StickerGimmighoul25,
    #[serde(rename = "STICKER_GIMMIGHOUL_3.3")]
    StickerGimmighoul33,
    #[serde(rename = "STICKER_GIMMIGHOUL_3.5")]
    StickerGimmighoul35,
    #[serde(rename = "STICKER_GIMMIGHOUL_4.3")]
    StickerGimmighoul43,
    #[serde(rename = "STICKER_GIMMIGHOUL_4.5")]
    StickerGimmighoul45,
    #[serde(rename = "STICKER_GIMMIGHOUL_5.3")]
    StickerGimmighoul53,
    #[serde(rename = "STICKER_GIMMIGHOUL_5.5")]
    StickerGimmighoul55,
    #[serde(rename = "STICKER_GOOMYCD_1.3")]
    StickerGoomycd13,
    #[serde(rename = "STICKER_GOOMYCD_1.5")]
    StickerGoomycd15,
    #[serde(rename = "STICKER_GOOMYCD_2.3")]
    StickerGoomycd23,
    #[serde(rename = "STICKER_GOOMYCD_2.5")]
    StickerGoomycd25,
    #[serde(rename = "STICKER_GOOMYCD_3.3")]
    StickerGoomycd33,
    #[serde(rename = "STICKER_GOOMYCD_3.5")]
    StickerGoomycd35,
    #[serde(rename = "STICKER_GOOMYCD_4.3")]
    StickerGoomycd43,
    #[serde(rename = "STICKER_GOOMYCD_4.5")]
    StickerGoomycd45,
    #[serde(rename = "STICKER_GOTOUR2025_BADGE.3")]
    StickerGotour2025Badge3,
    #[serde(rename = "STICKER_GOTOUR2025_BADGE.5")]
    StickerGotour2025Badge5,
    #[serde(rename = "STICKER_GOTOUR2025_KYUREMBLACK.3")]
    StickerGotour2025Kyuremblack3,
    #[serde(rename = "STICKER_GOTOUR2025_KYUREMBLACK.5")]
    StickerGotour2025Kyuremblack5,
    #[serde(rename = "STICKER_GOTOUR2025_KYUREMWHITE.3")]
    StickerGotour2025Kyuremwhite3,
    #[serde(rename = "STICKER_GOTOUR2025_KYUREMWHITE.5")]
    StickerGotour2025Kyuremwhite5,
    #[serde(rename = "STICKER_GOTOUR2025_RESHIRAM.3")]
    StickerGotour2025Reshiram3,
    #[serde(rename = "STICKER_GOTOUR2025_RESHIRAM.5")]
    StickerGotour2025Reshiram5,
    #[serde(rename = "STICKER_GOTOUR2025_RZ.3")]
    StickerGotour2025Rz3,
    #[serde(rename = "STICKER_GOTOUR2025_RZ.5")]
    StickerGotour2025Rz5,
    #[serde(rename = "STICKER_GOTOUR2025_ZEKROM.3")]
    StickerGotour2025Zekrom3,
    #[serde(rename = "STICKER_GOTOUR2025_ZEKROM.5")]
    StickerGotour2025Zekrom5,
    #[serde(rename = "STICKER_GOWA2025_01.3")]
    StickerGowa2025013,
    #[serde(rename = "STICKER_GOWA2025_01.5")]
    StickerGowa2025015,
    #[serde(rename = "STICKER_GOWA2025_02.3")]
    StickerGowa2025023,
    #[serde(rename = "STICKER_GOWA2025_02.5")]
    StickerGowa2025025,
    #[serde(rename = "STICKER_GOWA2025_03.3")]
    StickerGowa2025033,
    #[serde(rename = "STICKER_GOWA2025_03.5")]
    StickerGowa2025035,
    #[serde(rename = "STICKER_GOWA2025_04.3")]
    StickerGowa2025043,
    #[serde(rename = "STICKER_GOWA2025_04.5")]
    StickerGowa2025045,
    #[serde(rename = "STICKER_GOWA2025_05.3")]
    StickerGowa2025053,
    #[serde(rename = "STICKER_GOWA2025_05.5")]
    StickerGowa2025055,
    #[serde(rename = "STICKER_HALLOWEEN_BULB.3")]
    StickerHalloweenBulb3,
    #[serde(rename = "STICKER_HALLOWEEN_BULB.5")]
    StickerHalloweenBulb5,
    #[serde(rename = "STICKER_HALLOWEEN_CHARM.3")]
    StickerHalloweenCharm3,
    #[serde(rename = "STICKER_HALLOWEEN_CHARM.5")]
    StickerHalloweenCharm5,
    #[serde(rename = "STICKER_HALLOWEEN_GENGARMD.3")]
    StickerHalloweenGengarmd3,
    #[serde(rename = "STICKER_HALLOWEEN_GENGARMD.5")]
    StickerHalloweenGengarmd5,
    #[serde(rename = "STICKER_HALLOWEEN_PIKA.3")]
    StickerHalloweenPika3,
    #[serde(rename = "STICKER_HALLOWEEN_PIKA.5")]
    StickerHalloweenPika5,
    #[serde(rename = "STICKER_HALLOWEEN_SQU.3")]
    StickerHalloweenSqu3,
    #[serde(rename = "STICKER_HALLOWEEN_SQU.5")]
    StickerHalloweenSqu5,
    #[serde(rename = "STICKER_HALLOWEEN21_FUWARAID.3")]
    StickerHalloween21Fuwaraid3,
    #[serde(rename = "STICKER_HALLOWEEN21_FUWARAID.5")]
    StickerHalloween21Fuwaraid5,
    #[serde(rename = "STICKER_HALLOWEEN21_GHOSTPIKA.3")]
    StickerHalloween21Ghostpika3,
    #[serde(rename = "STICKER_HALLOWEEN21_GHOSTPIKA.5")]
    StickerHalloween21Ghostpika5,
    #[serde(rename = "STICKER_HALLOWEEN21_PIKACHU.3")]
    StickerHalloween21Pikachu3,
    #[serde(rename = "STICKER_HALLOWEEN21_PIKACHU.5")]
    StickerHalloween21Pikachu5,
    #[serde(rename = "STICKER_HALLOWEEN21_POCHAMA.3")]
    StickerHalloween21Pochama3,
    #[serde(rename = "STICKER_HALLOWEEN21_POCHAMA.5")]
    StickerHalloween21Pochama5,
    #[serde(rename = "STICKER_HALLOWEEN24_FROAKIE.3")]
    StickerHalloween24Froakie3,
    #[serde(rename = "STICKER_HALLOWEEN24_FROAKIE.5")]
    StickerHalloween24Froakie5,
    #[serde(rename = "STICKER_HALLOWEEN24_ROWLET.3")]
    StickerHalloween24Rowlet3,
    #[serde(rename = "STICKER_HALLOWEEN24_ROWLET.5")]
    StickerHalloween24Rowlet5,
    #[serde(rename = "STICKER_HALLOWEEN2025_NOIBAT.3")]
    StickerHalloween2025Noibat3,
    #[serde(rename = "STICKER_HALLOWEEN2025_NOIBAT.5")]
    StickerHalloween2025Noibat5,
    #[serde(rename = "STICKER_HALLOWEEN2025_TEDDIURSA.3")]
    StickerHalloween2025Teddiursa3,
    #[serde(rename = "STICKER_HALLOWEEN2025_TEDDIURSA.5")]
    StickerHalloween2025Teddiursa5,
    #[serde(rename = "STICKER_HARU_CHERRIM.3")]
    StickerHaruCherrim3,
    #[serde(rename = "STICKER_HARU_CHERRIM.5")]
    StickerHaruCherrim5,
    #[serde(rename = "STICKER_HARU_DREDEARPIKA.3")]
    StickerHaruDredearpika3,
    #[serde(rename = "STICKER_HARU_DREDEARPIKA.5")]
    StickerHaruDredearpika5,
    #[serde(rename = "STICKER_HARU_KIREIHANA.3")]
    StickerHaruKireihana3,
    #[serde(rename = "STICKER_HARU_KIREIHANA.5")]
    StickerHaruKireihana5,
    #[serde(rename = "STICKER_HARU_LALANTES.3")]
    StickerHaruLalantes3,
    #[serde(rename = "STICKER_HARU_LALANTES.5")]
    StickerHaruLalantes5,
    #[serde(rename = "STICKER_HARU_MEBUKISHIKIJIK.3")]
    StickerHaruMebukishikijik3,
    #[serde(rename = "STICKER_HARU_MEBUKISHIKIJIK.5")]
    StickerHaruMebukishikijik5,
    #[serde(rename = "STICKER_HARU_MITSUHONEY.3")]
    StickerHaruMitsuhoney3,
    #[serde(rename = "STICKER_HARU_MITSUHONEY.5")]
    StickerHaruMitsuhoney5,
    #[serde(rename = "STICKER_HISUIDISCO_ARCANINE.3")]
    StickerHisuidiscoArcanine3,
    #[serde(rename = "STICKER_HISUIDISCO_ARCANINE.5")]
    StickerHisuidiscoArcanine5,
    #[serde(rename = "STICKER_HISUIDISCO_BRAVIARY.3")]
    StickerHisuidiscoBraviary3,
    #[serde(rename = "STICKER_HISUIDISCO_BRAVIARY.5")]
    StickerHisuidiscoBraviary5,
    #[serde(rename = "STICKER_HISUIDISCO_GROWLITHE.3")]
    StickerHisuidiscoGrowlithe3,
    #[serde(rename = "STICKER_HISUIDISCO_GROWLITHE.5")]
    StickerHisuidiscoGrowlithe5,
    #[serde(rename = "STICKER_HOLIDAYEVENT21_1.3")]
    StickerHolidayevent2113,
    #[serde(rename = "STICKER_HOLIDAYEVENT21_1.5")]
    StickerHolidayevent2115,
    #[serde(rename = "STICKER_HOLIDAYEVENT21_2.3")]
    StickerHolidayevent2123,
    #[serde(rename = "STICKER_HOLIDAYEVENT21_2.5")]
    StickerHolidayevent2125,
    #[serde(rename = "STICKER_HOLIDAYEVENT21_3.3")]
    StickerHolidayevent2133,
    #[serde(rename = "STICKER_HOLIDAYEVENT21_3.5")]
    StickerHolidayevent2135,
    #[serde(rename = "STICKER_HOLIDAYEVENT21_4.3")]
    StickerHolidayevent2143,
    #[serde(rename = "STICKER_HOLIDAYEVENT21_4.5")]
    StickerHolidayevent2145,
    #[serde(rename = "STICKER_HOLIDAYEVENT22_CUBCHOO.3")]
    StickerHolidayevent22Cubchoo3,
    #[serde(rename = "STICKER_HOLIDAYEVENT22_CUBCHOO.5")]
    StickerHolidayevent22Cubchoo5,
    #[serde(rename = "STICKER_HOLIDAYEVENT22_SCATTERBUG.3")]
    StickerHolidayevent22Scatterbug3,
    #[serde(rename = "STICKER_HOLIDAYEVENT22_SCATTERBUG.5")]
    StickerHolidayevent22Scatterbug5,
    #[serde(rename = "STICKER_HOLIDAYEVENT22_SNOWPIKA.3")]
    StickerHolidayevent22Snowpika3,
    #[serde(rename = "STICKER_HOLIDAYEVENT22_SNOWPIKA.5")]
    StickerHolidayevent22Snowpika5,
    #[serde(rename = "STICKER_HOLIDAYEVENT22_VULPIX.3")]
    StickerHolidayevent22Vulpix3,
    #[serde(rename = "STICKER_HOLIDAYEVENT22_VULPIX.5")]
    StickerHolidayevent22Vulpix5,
    #[serde(rename = "STICKER_HOLIDAYEVENT23_CETODDLE.3")]
    StickerHolidayevent23Cetoddle3,
    #[serde(rename = "STICKER_HOLIDAYEVENT23_CETODDLE.5")]
    StickerHolidayevent23Cetoddle5,
    #[serde(rename = "STICKER_HOLIDAYEVENT23_CRYOGONAL.3")]
    StickerHolidayevent23Cryogonal3,
    #[serde(rename = "STICKER_HOLIDAYEVENT23_CRYOGONAL.5")]
    StickerHolidayevent23Cryogonal5,
    #[serde(rename = "STICKER_HOLIDAYEVENT23_PSYDUCK.3")]
    StickerHolidayevent23Psyduck3,
    #[serde(rename = "STICKER_HOLIDAYEVENT23_PSYDUCK.5")]
    StickerHolidayevent23Psyduck5,
    #[serde(rename = "STICKER_HOLIDAYEVENT23_SEEL.3")]
    StickerHolidayevent23Seel3,
    #[serde(rename = "STICKER_HOLIDAYEVENT23_SEEL.5")]
    StickerHolidayevent23Seel5,
    #[serde(rename = "STICKER_HOLIDAYEVENT23_VANILLISH.3")]
    StickerHolidayevent23Vanillish3,
    #[serde(rename = "STICKER_HOLIDAYEVENT23_VANILLISH.5")]
    StickerHolidayevent23Vanillish5,
    #[serde(rename = "STICKER_HOPPIP_1.3")]
    StickerHoppip13,
    #[serde(rename = "STICKER_HOPPIP_1.5")]
    StickerHoppip15,
    #[serde(rename = "STICKER_HOPPIP_2.3")]
    StickerHoppip23,
    #[serde(rename = "STICKER_HOPPIP_2.5")]
    StickerHoppip25,
    #[serde(rename = "STICKER_HOPPIP_3.3")]
    StickerHoppip33,
    #[serde(rename = "STICKER_HOPPIP_3.5")]
    StickerHoppip35,
    #[serde(rename = "STICKER_HOPPIP_4.3")]
    StickerHoppip43,
    #[serde(rename = "STICKER_HOPPIP_4.5")]
    StickerHoppip45,
    #[serde(rename = "STICKER_LENTILLAUNCH_CAMERA.3")]
    StickerLentillaunchCamera3,
    #[serde(rename = "STICKER_LENTILLAUNCH_CAMERA.5")]
    StickerLentillaunchCamera5,
    #[serde(rename = "STICKER_LITTENCD_1.3")]
    StickerLittencd13,
    #[serde(rename = "STICKER_LITTENCD_1.5")]
    StickerLittencd15,
    #[serde(rename = "STICKER_LITTENCD_2.3")]
    StickerLittencd23,
    #[serde(rename = "STICKER_LITTENCD_2.5")]
    StickerLittencd25,
    #[serde(rename = "STICKER_LITTENCD_3.3")]
    StickerLittencd33,
    #[serde(rename = "STICKER_LITTENCD_3.5")]
    StickerLittencd35,
    #[serde(rename = "STICKER_LITTENCD_4.3")]
    StickerLittencd43,
    #[serde(rename = "STICKER_LITTENCD_4.5")]
    StickerLittencd45,
    #[serde(rename = "STICKER_LUVDISC.3")]
    StickerLuvdisc3,
    #[serde(rename = "STICKER_LUVDISC.5")]
    StickerLuvdisc5,
    #[serde(rename = "STICKER_MANKEY_1.3")]
    StickerMankey13,
    #[serde(rename = "STICKER_MANKEY_1.5")]
    StickerMankey15,
    #[serde(rename = "STICKER_MANKEY_2.3")]
    StickerMankey23,
    #[serde(rename = "STICKER_MANKEY_2.5")]
    StickerMankey25,
    #[serde(rename = "STICKER_MANKEY_3.3")]
    StickerMankey33,
    #[serde(rename = "STICKER_MANKEY_3.5")]
    StickerMankey35,
    #[serde(rename = "STICKER_MANKEY_4.3")]
    StickerMankey43,
    #[serde(rename = "STICKER_MANKEY_4.5")]
    StickerMankey45,
    #[serde(rename = "STICKER_NAGANO_06_312.3")]
    StickerNagano063123,
    #[serde(rename = "STICKER_NAGANO_06_312.5")]
    StickerNagano063125,
    #[serde(rename = "STICKER_NAGANO_11.3")]
    StickerNagano113,
    #[serde(rename = "STICKER_NAGANO_11.5")]
    StickerNagano115,
    #[serde(rename = "STICKER_NAGANO_15_312.3")]
    StickerNagano153123,
    #[serde(rename = "STICKER_NAGANO_15_312.5")]
    StickerNagano153125,
    #[serde(rename = "STICKER_NAGANO_BATH.3")]
    StickerNaganoBath3,
    #[serde(rename = "STICKER_NAGANO_BATH.5")]
    StickerNaganoBath5,
    #[serde(rename = "STICKER_NAGANO_MARILL.3")]
    StickerNaganoMarill3,
    #[serde(rename = "STICKER_NAGANO_MARILL.5")]
    StickerNaganoMarill5,
    #[serde(rename = "STICKER_NAGANO_YADON.3")]
    StickerNaganoYadon3,
    #[serde(rename = "STICKER_NAGANO_YADON.5")]
    StickerNaganoYadon5,
    #[serde(rename = "STICKER_NEWPOKEMON2_15.3")]
    StickerNewpokemon2153,
    #[serde(rename = "STICKER_NEWPOKEMON2_15.5")]
    StickerNewpokemon2155,
    #[serde(rename = "STICKER_NEWYEARS22_1.3")]
    StickerNewyears2213,
    #[serde(rename = "STICKER_NEWYEARS22_1.5")]
    StickerNewyears2215,
    #[serde(rename = "STICKER_NEWYEARS22_2.3")]
    StickerNewyears2223,
    #[serde(rename = "STICKER_NEWYEARS22_2.5")]
    StickerNewyears2225,
    #[serde(rename = "STICKER_NEWYEARS22_3.3")]
    StickerNewyears2233,
    #[serde(rename = "STICKER_NEWYEARS22_3.5")]
    StickerNewyears2235,
    #[serde(rename = "STICKER_NEWYEARS22_4.3")]
    StickerNewyears2243,
    #[serde(rename = "STICKER_NEWYEARS22_4.5")]
    StickerNewyears2245,
    #[serde(rename = "STICKER_NOIBAT_CD_1.3")]
    StickerNoibatCd13,
    #[serde(rename = "STICKER_NOIBAT_CD_1.5")]
    StickerNoibatCd15,
    #[serde(rename = "STICKER_NOIBAT_CD_2.3")]
    StickerNoibatCd23,
    #[serde(rename = "STICKER_NOIBAT_CD_2.5")]
    StickerNoibatCd25,
    #[serde(rename = "STICKER_NOIBAT_CD_3.3")]
    StickerNoibatCd33,
    #[serde(rename = "STICKER_NOIBAT_CD_3.5")]
    StickerNoibatCd35,
    #[serde(rename = "STICKER_NOIBAT_CD_4.3")]
    StickerNoibatCd43,
    #[serde(rename = "STICKER_NOIBAT_CD_4.5")]
    StickerNoibatCd45,
    #[serde(rename = "STICKER_PGO_FEST_2024_1.3")]
    StickerPgoFest202413,
    #[serde(rename = "STICKER_PGO_FEST_2024_1.5")]
    StickerPgoFest202415,
    #[serde(rename = "STICKER_PGO_FEST_2024_2.3")]
    StickerPgoFest202423,
    #[serde(rename = "STICKER_PGO_FEST_2024_2.5")]
    StickerPgoFest202425,
    #[serde(rename = "STICKER_PGO_FEST_2024_3.3")]
    StickerPgoFest202433,
    #[serde(rename = "STICKER_PGO_FEST_2024_3.5")]
    StickerPgoFest202435,
    #[serde(rename = "STICKER_PGO_FEST_2024_4.3")]
    StickerPgoFest202443,
    #[serde(rename = "STICKER_PGO_FEST_2024_4.5")]
    StickerPgoFest202445,
    #[serde(rename = "STICKER_PGO_FEST_2024_5.3")]
    StickerPgoFest202453,
    #[serde(rename = "STICKER_PGO_FEST_2024_5.5")]
    StickerPgoFest202455,
    #[serde(rename = "STICKER_PGO_FEST_2024_6.3")]
    StickerPgoFest202463,
    #[serde(rename = "STICKER_PGO_FEST_2024_6.5")]
    StickerPgoFest202465,
    #[serde(rename = "STICKER_PGO_FEST_2024_LOGO.3")]
    StickerPgoFest2024Logo3,
    #[serde(rename = "STICKER_PGO_FEST_2024_LOGO.5")]
    StickerPgoFest2024Logo5,
    #[serde(rename = "STICKER_PGO_FEST_2024.3")]
    StickerPgoFest20243,
    #[serde(rename = "STICKER_PGO_FEST_2024.5")]
    StickerPgoFest20245,
    #[serde(rename = "STICKER_PGO_FEST_2025_1.3")]
    StickerPgoFest202513,
    #[serde(rename = "STICKER_PGO_FEST_2025_1.5")]
    StickerPgoFest202515,
    #[serde(rename = "STICKER_PGO_FEST_2025_2.3")]
    StickerPgoFest202523,
    #[serde(rename = "STICKER_PGO_FEST_2025_2.5")]
    StickerPgoFest202525,
    #[serde(rename = "STICKER_PGO_FEST_2025_3.3")]
    StickerPgoFest202533,
    #[serde(rename = "STICKER_PGO_FEST_2025_3.5")]
    StickerPgoFest202535,
    #[serde(rename = "STICKER_PGO_FEST_2025_LOGO.3")]
    StickerPgoFest2025Logo3,
    #[serde(rename = "STICKER_PGO_FEST_2025_LOGO.5")]
    StickerPgoFest2025Logo5,
    #[serde(rename = "STICKER_PGO_FEST_2025.3")]
    StickerPgoFest20253,
    #[serde(rename = "STICKER_PGO_FEST_2025.5")]
    StickerPgoFest20255,
    #[serde(rename = "STICKER_PGO_FEST_VICTINI_05.3")]
    StickerPgoFestVictini053,
    #[serde(rename = "STICKER_PGO_FEST_VICTINI_05.5")]
    StickerPgoFestVictini055,
    #[serde(rename = "STICKER_PGO_TOUR_2026_1.3")]
    StickerPgoTour202613,
    #[serde(rename = "STICKER_PGO_TOUR_2026_1.5")]
    StickerPgoTour202615,
    #[serde(rename = "STICKER_PGO_TOUR_2026_2.3")]
    StickerPgoTour202623,
    #[serde(rename = "STICKER_PGO_TOUR_2026_2.5")]
    StickerPgoTour202625,
    #[serde(rename = "STICKER_PGO_TOUR_2026_3.3")]
    StickerPgoTour202633,
    #[serde(rename = "STICKER_PGO_TOUR_2026_3.5")]
    StickerPgoTour202635,
    #[serde(rename = "STICKER_PGO_TOUR_2026_LOGO.3")]
    StickerPgoTour2026Logo3,
    #[serde(rename = "STICKER_PGO_TOUR_2026_LOGO.5")]
    StickerPgoTour2026Logo5,
    #[serde(rename = "STICKER_PGO_TOUR_2026.3")]
    StickerPgoTour20263,
    #[serde(rename = "STICKER_PGO_TOUR_2026.5")]
    StickerPgoTour20265,
    #[serde(rename = "STICKER_PGO_WILDAREA_2024_1.3")]
    StickerPgoWildarea202413,
    #[serde(rename = "STICKER_PGO_WILDAREA_2024_1.5")]
    StickerPgoWildarea202415,
    #[serde(rename = "STICKER_PGO_WILDAREA_2024_2.3")]
    StickerPgoWildarea202423,
    #[serde(rename = "STICKER_PGO_WILDAREA_2024_2.5")]
    StickerPgoWildarea202425,
    #[serde(rename = "STICKER_PGO_WILDAREA_2024_3.3")]
    StickerPgoWildarea202433,
    #[serde(rename = "STICKER_PGO_WILDAREA_2024_3.5")]
    StickerPgoWildarea202435,
    #[serde(rename = "STICKER_PGO_WILDAREA_2024_4.3")]
    StickerPgoWildarea202443,
    #[serde(rename = "STICKER_PGO_WILDAREA_2024_4.5")]
    StickerPgoWildarea202445,
    #[serde(rename = "STICKER_PGO_WILDAREA_2024_LOGO.3")]
    StickerPgoWildarea2024Logo3,
    #[serde(rename = "STICKER_PGO_WILDAREA_2024_LOGO.5")]
    StickerPgoWildarea2024Logo5,
    #[serde(rename = "STICKER_PGO_WILDAREA_2024.3")]
    StickerPgoWildarea20243,
    #[serde(rename = "STICKER_PGO_WILDAREA_2024.5")]
    StickerPgoWildarea20245,
    #[serde(rename = "STICKER_PGOFEST2021_GALARIANZIGZAGOON.3")]
    StickerPgofest2021Galarianzigzagoon3,
    #[serde(rename = "STICKER_PGOFEST2021_GALARIANZIGZAGOON.5")]
    StickerPgofest2021Galarianzigzagoon5,
    #[serde(rename = "STICKER_PGOFEST2021_MELOETTA_1.3")]
    StickerPgofest2021Meloetta13,
    #[serde(rename = "STICKER_PGOFEST2021_MELOETTA_1.5")]
    StickerPgofest2021Meloetta15,
    #[serde(rename = "STICKER_PGOFEST2021_MELOETTA_2.3")]
    StickerPgofest2021Meloetta23,
    #[serde(rename = "STICKER_PGOFEST2021_MELOETTA_2.5")]
    StickerPgofest2021Meloetta25,
    #[serde(rename = "STICKER_PGOFEST2021_PONYTA.3")]
    StickerPgofest2021Ponyta3,
    #[serde(rename = "STICKER_PGOFEST2021_PONYTA.5")]
    StickerPgofest2021Ponyta5,
    #[serde(rename = "STICKER_PGOFEST2022_GROUDON.3")]
    StickerPgofest2022Groudon3,
    #[serde(rename = "STICKER_PGOFEST2022_GROUDON.5")]
    StickerPgofest2022Groudon5,
    #[serde(rename = "STICKER_PGOFEST2022_KIBAGO.3")]
    StickerPgofest2022Kibago3,
    #[serde(rename = "STICKER_PGOFEST2022_KIBAGO.5")]
    StickerPgofest2022Kibago5,
    #[serde(rename = "STICKER_PGOFEST2022_KYOGRE.3")]
    StickerPgofest2022Kyogre3,
    #[serde(rename = "STICKER_PGOFEST2022_KYOGRE.5")]
    StickerPgofest2022Kyogre5,
    #[serde(rename = "STICKER_PGOFEST2022_PIKACHU.3")]
    StickerPgofest2022Pikachu3,
    #[serde(rename = "STICKER_PGOFEST2022_PIKACHU.5")]
    StickerPgofest2022Pikachu5,
    #[serde(rename = "STICKER_PGOFEST2022_POCHAMA.3")]
    StickerPgofest2022Pochama3,
    #[serde(rename = "STICKER_PGOFEST2022_POCHAMA.5")]
    StickerPgofest2022Pochama5,
    #[serde(rename = "STICKER_PGOFEST2022_SHAYMIN.3")]
    StickerPgofest2022Shaymin3,
    #[serde(rename = "STICKER_PGOFEST2022_SHAYMIN.5")]
    StickerPgofest2022Shaymin5,
    #[serde(rename = "STICKER_PIKACHU_JOL.3")]
    StickerPikachuJol3,
    #[serde(rename = "STICKER_PIKACHU_JOL.5")]
    StickerPikachuJol5,
    #[serde(rename = "STICKER_POKEMONCHATPALS2_40.3")]
    StickerPokemonchatpals2403,
    #[serde(rename = "STICKER_POKEMONCHATPALS2_40.5")]
    StickerPokemonchatpals2405,
    #[serde(rename = "STICKER_PONYTA_1.3")]
    StickerPonyta13,
    #[serde(rename = "STICKER_PONYTA_1.5")]
    StickerPonyta15,
    #[serde(rename = "STICKER_PONYTA_2.3")]
    StickerPonyta23,
    #[serde(rename = "STICKER_PONYTA_2.5")]
    StickerPonyta25,
    #[serde(rename = "STICKER_PONYTA_3.3")]
    StickerPonyta33,
    #[serde(rename = "STICKER_PONYTA_3.5")]
    StickerPonyta35,
    #[serde(rename = "STICKER_PONYTA_4.3")]
    StickerPonyta43,
    #[serde(rename = "STICKER_PONYTA_4.5")]
    StickerPonyta45,
    #[serde(rename = "STICKER_POPPLIOCD_1.3")]
    StickerPoppliocd13,
    #[serde(rename = "STICKER_POPPLIOCD_1.5")]
    StickerPoppliocd15,
    #[serde(rename = "STICKER_POPPLIOCD_2.3")]
    StickerPoppliocd23,
    #[serde(rename = "STICKER_POPPLIOCD_2.5")]
    StickerPoppliocd25,
    #[serde(rename = "STICKER_POPPLIOCD_3.3")]
    StickerPoppliocd33,
    #[serde(rename = "STICKER_POPPLIOCD_3.5")]
    StickerPoppliocd35,
    #[serde(rename = "STICKER_POPPLIOCD_4.3")]
    StickerPoppliocd43,
    #[serde(rename = "STICKER_POPPLIOCD_4.5")]
    StickerPoppliocd45,
    #[serde(rename = "STICKER_PSYCHICSPEC21_INKAY.3")]
    StickerPsychicspec21Inkay3,
    #[serde(rename = "STICKER_PSYCHICSPEC21_INKAY.5")]
    StickerPsychicspec21Inkay5,
    #[serde(rename = "STICKER_PSYCHICSPEC21_INKAY2.3")]
    StickerPsychicspec21Inkay23,
    #[serde(rename = "STICKER_PSYCHICSPEC21_INKAY2.5")]
    StickerPsychicspec21Inkay25,
    #[serde(rename = "STICKER_ROWLETCD_1.3")]
    StickerRowletcd13,
    #[serde(rename = "STICKER_ROWLETCD_1.5")]
    StickerRowletcd15,
    #[serde(rename = "STICKER_ROWLETCD_2.3")]
    StickerRowletcd23,
    #[serde(rename = "STICKER_ROWLETCD_2.5")]
    StickerRowletcd25,
    #[serde(rename = "STICKER_ROWLETCD_3.3")]
    StickerRowletcd33,
    #[serde(rename = "STICKER_ROWLETCD_3.5")]
    StickerRowletcd35,
    #[serde(rename = "STICKER_ROWLETCD_4.3")]
    StickerRowletcd43,
    #[serde(rename = "STICKER_ROWLETCD_4.5")]
    StickerRowletcd45,
    #[serde(rename = "STICKER_SEWADDLECD_1.3")]
    StickerSewaddlecd13,
    #[serde(rename = "STICKER_SEWADDLECD_1.5")]
    StickerSewaddlecd15,
    #[serde(rename = "STICKER_SEWADDLECD_2.3")]
    StickerSewaddlecd23,
    #[serde(rename = "STICKER_SEWADDLECD_2.5")]
    StickerSewaddlecd25,
    #[serde(rename = "STICKER_SEWADDLECD_3.3")]
    StickerSewaddlecd33,
    #[serde(rename = "STICKER_SEWADDLECD_3.5")]
    StickerSewaddlecd35,
    #[serde(rename = "STICKER_SEWADDLECD_4.3")]
    StickerSewaddlecd43,
    #[serde(rename = "STICKER_SEWADDLECD_4.5")]
    StickerSewaddlecd45,
    #[serde(rename = "STICKER_SHELMET_KARRABLAST_1.3")]
    StickerShelmetKarrablast13,
    #[serde(rename = "STICKER_SHELMET_KARRABLAST_1.5")]
    StickerShelmetKarrablast15,
    #[serde(rename = "STICKER_SHELMET_KARRABLAST_2.3")]
    StickerShelmetKarrablast23,
    #[serde(rename = "STICKER_SHELMET_KARRABLAST_2.5")]
    StickerShelmetKarrablast25,
    #[serde(rename = "STICKER_SHELMET_KARRABLAST_3.3")]
    StickerShelmetKarrablast33,
    #[serde(rename = "STICKER_SHELMET_KARRABLAST_3.5")]
    StickerShelmetKarrablast35,
    #[serde(rename = "STICKER_SLOWPOKE_1.3")]
    StickerSlowpoke13,
    #[serde(rename = "STICKER_SLOWPOKE_1.5")]
    StickerSlowpoke15,
    #[serde(rename = "STICKER_SLOWPOKE_2.3")]
    StickerSlowpoke23,
    #[serde(rename = "STICKER_SLOWPOKE_2.5")]
    StickerSlowpoke25,
    #[serde(rename = "STICKER_SLOWPOKE_3.3")]
    StickerSlowpoke33,
    #[serde(rename = "STICKER_SLOWPOKE_3.5")]
    StickerSlowpoke35,
    #[serde(rename = "STICKER_SLOWPOKE_4.3")]
    StickerSlowpoke43,
    #[serde(rename = "STICKER_SLOWPOKE_4.5")]
    StickerSlowpoke45,
    #[serde(rename = "STICKER_SPHEAL_1.3")]
    StickerSpheal13,
    #[serde(rename = "STICKER_SPHEAL_1.5")]
    StickerSpheal15,
    #[serde(rename = "STICKER_SPHEAL_2.3")]
    StickerSpheal23,
    #[serde(rename = "STICKER_SPHEAL_2.5")]
    StickerSpheal25,
    #[serde(rename = "STICKER_SPHEAL_3.3")]
    StickerSpheal33,
    #[serde(rename = "STICKER_SPHEAL_3.5")]
    StickerSpheal35,
    #[serde(rename = "STICKER_SPHEAL_4.3")]
    StickerSpheal43,
    #[serde(rename = "STICKER_SPHEAL_4.5")]
    StickerSpheal45,
    #[serde(rename = "STICKER_SPRIGATITO_1.3")]
    StickerSprigatito13,
    #[serde(rename = "STICKER_SPRIGATITO_1.5")]
    StickerSprigatito15,
    #[serde(rename = "STICKER_SPRIGATITO_2.3")]
    StickerSprigatito23,
    #[serde(rename = "STICKER_SPRIGATITO_2.5")]
    StickerSprigatito25,
    #[serde(rename = "STICKER_SPRIGATITO_3.3")]
    StickerSprigatito33,
    #[serde(rename = "STICKER_SPRIGATITO_3.5")]
    StickerSprigatito35,
    #[serde(rename = "STICKER_SPRIGATITO_4.3")]
    StickerSprigatito43,
    #[serde(rename = "STICKER_SPRIGATITO_4.5")]
    StickerSprigatito45,
    #[serde(rename = "STICKER_SPRING_2024_1.3")]
    StickerSpring202413,
    #[serde(rename = "STICKER_SPRING_2024_1.5")]
    StickerSpring202415,
    #[serde(rename = "STICKER_SPRING_2024_2.3")]
    StickerSpring202423,
    #[serde(rename = "STICKER_SPRING_2024_2.5")]
    StickerSpring202425,
    #[serde(rename = "STICKER_SPRING_2024_3.3")]
    StickerSpring202433,
    #[serde(rename = "STICKER_SPRING_2024_3.5")]
    StickerSpring202435,
    #[serde(rename = "STICKER_SPRING_2024_4.3")]
    StickerSpring202443,
    #[serde(rename = "STICKER_SPRING_2024_4.5")]
    StickerSpring202445,
    #[serde(rename = "STICKER_SPRING_2024_5.3")]
    StickerSpring202453,
    #[serde(rename = "STICKER_SPRING_2024_5.5")]
    StickerSpring202455,
    #[serde(rename = "STICKER_SPRING_2024_6.3")]
    StickerSpring202463,
    #[serde(rename = "STICKER_SPRING_2024_6.5")]
    StickerSpring202465,
    #[serde(rename = "STICKER_SPRING_2025_1.3")]
    StickerSpring202513,
    #[serde(rename = "STICKER_SPRING_2025_1.5")]
    StickerSpring202515,
    #[serde(rename = "STICKER_SPRING_2025_2.3")]
    StickerSpring202523,
    #[serde(rename = "STICKER_SPRING_2025_2.5")]
    StickerSpring202525,
    #[serde(rename = "STICKER_SPRING_2025_3.3")]
    StickerSpring202533,
    #[serde(rename = "STICKER_SPRING_2025_3.5")]
    StickerSpring202535,
    #[serde(rename = "STICKER_SPRING_2025_4.3")]
    StickerSpring202543,
    #[serde(rename = "STICKER_SPRING_2025_4.5")]
    StickerSpring202545,
    #[serde(rename = "STICKER_SPRING_2026_1.3")]
    StickerSpring202613,
    #[serde(rename = "STICKER_SPRING_2026_1.5")]
    StickerSpring202615,
    #[serde(rename = "STICKER_SPRING_2026_2.3")]
    StickerSpring202623,
    #[serde(rename = "STICKER_SPRING_2026_2.5")]
    StickerSpring202625,
    #[serde(rename = "STICKER_SPRING_2026_3.3")]
    StickerSpring202633,
    #[serde(rename = "STICKER_SPRING_2026_3.5")]
    StickerSpring202635,
    #[serde(rename = "STICKER_SPRING_2026_4.3")]
    StickerSpring202643,
    #[serde(rename = "STICKER_SPRING_2026_4.5")]
    StickerSpring202645,
    #[serde(rename = "STICKER_SPRING_EIEVUI.3")]
    StickerSpringEievui3,
    #[serde(rename = "STICKER_SPRING_EIEVUI.5")]
    StickerSpringEievui5,
    #[serde(rename = "STICKER_SPRING_HAPINAS.3")]
    StickerSpringHapinas3,
    #[serde(rename = "STICKER_SPRING_HAPINAS.5")]
    StickerSpringHapinas5,
    #[serde(rename = "STICKER_SPRING_MIMIROL.3")]
    StickerSpringMimirol3,
    #[serde(rename = "STICKER_SPRING_MIMIROL.5")]
    StickerSpringMimirol5,
    #[serde(rename = "STICKER_SPRING_NIMPHIA.3")]
    StickerSpringNimphia3,
    #[serde(rename = "STICKER_SPRING_NIMPHIA.5")]
    StickerSpringNimphia5,
    #[serde(rename = "STICKER_SPRING_PIKACHU.3")]
    StickerSpringPikachu3,
    #[serde(rename = "STICKER_SPRING_PIKACHU.5")]
    StickerSpringPikachu5,
    #[serde(rename = "STICKER_SPRING_PIPITO.3")]
    StickerSpringPipito3,
    #[serde(rename = "STICKER_SPRING_PIPITO.5")]
    StickerSpringPipito5,
    #[serde(rename = "STICKER_STUFFUL_1.3")]
    StickerStufful13,
    #[serde(rename = "STICKER_STUFFUL_1.5")]
    StickerStufful15,
    #[serde(rename = "STICKER_STUFFUL_2.3")]
    StickerStufful23,
    #[serde(rename = "STICKER_STUFFUL_2.5")]
    StickerStufful25,
    #[serde(rename = "STICKER_STUFFUL_3.3")]
    StickerStufful33,
    #[serde(rename = "STICKER_STUFFUL_3.5")]
    StickerStufful35,
    #[serde(rename = "STICKER_STUFFUL_4.3")]
    StickerStufful43,
    #[serde(rename = "STICKER_STUFFUL_4.5")]
    StickerStufful45,
    #[serde(rename = "STICKER_SUMMER_1.3")]
    StickerSummer13,
    #[serde(rename = "STICKER_SUMMER_1.5")]
    StickerSummer15,
    #[serde(rename = "STICKER_SUMMER_2.3")]
    StickerSummer23,
    #[serde(rename = "STICKER_SUMMER_2.5")]
    StickerSummer25,
    #[serde(rename = "STICKER_SUMMER_3.3")]
    StickerSummer33,
    #[serde(rename = "STICKER_SUMMER_3.5")]
    StickerSummer35,
    #[serde(rename = "STICKER_SUMMER_4.3")]
    StickerSummer43,
    #[serde(rename = "STICKER_SUMMER_4.5")]
    StickerSummer45,
    #[serde(rename = "STICKER_SUMMER_5.3")]
    StickerSummer53,
    #[serde(rename = "STICKER_SUMMER_5.5")]
    StickerSummer55,
    #[serde(rename = "STICKER_SUMMER_6.3")]
    StickerSummer63,
    #[serde(rename = "STICKER_SUMMER_6.5")]
    StickerSummer65,
    #[serde(rename = "STICKER_SUMMER_2023_BLASTOISE.3")]
    StickerSummer2023Blastoise3,
    #[serde(rename = "STICKER_SUMMER_2023_BLASTOISE.5")]
    StickerSummer2023Blastoise5,
    #[serde(rename = "STICKER_SUMMER_2023_BUTTERFREE.3")]
    StickerSummer2023Butterfree3,
    #[serde(rename = "STICKER_SUMMER_2023_BUTTERFREE.5")]
    StickerSummer2023Butterfree5,
    #[serde(rename = "STICKER_SUMMER_2023_CLAMPERL.3")]
    StickerSummer2023Clamperl3,
    #[serde(rename = "STICKER_SUMMER_2023_CLAMPERL.5")]
    StickerSummer2023Clamperl5,
    #[serde(rename = "STICKER_SUMMER_2023_LEDIAN.3")]
    StickerSummer2023Ledian3,
    #[serde(rename = "STICKER_SUMMER_2023_LEDIAN.5")]
    StickerSummer2023Ledian5,
    #[serde(rename = "STICKER_SUMMER_2023_SAWSBUCK.3")]
    StickerSummer2023Sawsbuck3,
    #[serde(rename = "STICKER_SUMMER_2023_SAWSBUCK.5")]
    StickerSummer2023Sawsbuck5,
    #[serde(rename = "STICKER_SUMMER_2023_SQUIRTLE.3")]
    StickerSummer2023Squirtle3,
    #[serde(rename = "STICKER_SUMMER_2023_SQUIRTLE.5")]
    StickerSummer2023Squirtle5,
    #[serde(rename = "STICKER_SUMMER_2024_1.3")]
    StickerSummer202413,
    #[serde(rename = "STICKER_SUMMER_2024_1.5")]
    StickerSummer202415,
    #[serde(rename = "STICKER_SUMMER_2024_2.3")]
    StickerSummer202423,
    #[serde(rename = "STICKER_SUMMER_2024_2.5")]
    StickerSummer202425,
    #[serde(rename = "STICKER_SUMMER_2024_3.3")]
    StickerSummer202433,
    #[serde(rename = "STICKER_SUMMER_2024_3.5")]
    StickerSummer202435,
    #[serde(rename = "STICKER_SUMMER_2024_4.3")]
    StickerSummer202443,
    #[serde(rename = "STICKER_SUMMER_2024_4.5")]
    StickerSummer202445,
    #[serde(rename = "STICKER_SUMMER_2024_5.3")]
    StickerSummer202453,
    #[serde(rename = "STICKER_SUMMER_2024_5.5")]
    StickerSummer202455,
    #[serde(rename = "STICKER_SUMMER_2024_6.3")]
    StickerSummer202463,
    #[serde(rename = "STICKER_SUMMER_2024_6.5")]
    StickerSummer202465,
    #[serde(rename = "STICKER_SUMMER_2025_1.3")]
    StickerSummer202513,
    #[serde(rename = "STICKER_SUMMER_2025_1.5")]
    StickerSummer202515,
    #[serde(rename = "STICKER_SUMMER_2025_2.3")]
    StickerSummer202523,
    #[serde(rename = "STICKER_SUMMER_2025_2.5")]
    StickerSummer202525,
    #[serde(rename = "STICKER_SUMMER_2025_3.3")]
    StickerSummer202533,
    #[serde(rename = "STICKER_SUMMER_2025_3.5")]
    StickerSummer202535,
    #[serde(rename = "STICKER_SUMMER_2025_4.3")]
    StickerSummer202543,
    #[serde(rename = "STICKER_SUMMER_2025_4.5")]
    StickerSummer202545,
    #[serde(rename = "STICKER_SWORDSHIELD21_1.3")]
    StickerSwordshield2113,
    #[serde(rename = "STICKER_SWORDSHIELD21_1.5")]
    StickerSwordshield2115,
    #[serde(rename = "STICKER_SWORDSHIELD21_2.3")]
    StickerSwordshield2123,
    #[serde(rename = "STICKER_SWORDSHIELD21_2.5")]
    StickerSwordshield2125,
    #[serde(rename = "STICKER_SWORDSHIELD21_3.3")]
    StickerSwordshield2133,
    #[serde(rename = "STICKER_SWORDSHIELD21_3.5")]
    StickerSwordshield2135,
    #[serde(rename = "STICKER_SWORDSHIELD21_4.3")]
    StickerSwordshield2143,
    #[serde(rename = "STICKER_SWORDSHIELD21_4.5")]
    StickerSwordshield2145,
    #[serde(rename = "STICKER_SWORDSHIELD21_5.3")]
    StickerSwordshield2153,
    #[serde(rename = "STICKER_SWORDSHIELD21_5.5")]
    StickerSwordshield2155,
    #[serde(rename = "STICKER_TL_BLANCHE.3")]
    StickerTlBlanche3,
    #[serde(rename = "STICKER_TL_BLANCHE.5")]
    StickerTlBlanche5,
    #[serde(rename = "STICKER_TL_CANDELA.3")]
    StickerTlCandela3,
    #[serde(rename = "STICKER_TL_CANDELA.5")]
    StickerTlCandela5,
    #[serde(rename = "STICKER_TL_SPARK.3")]
    StickerTlSpark3,
    #[serde(rename = "STICKER_TL_SPARK.5")]
    StickerTlSpark5,
    #[serde(rename = "STICKER_TR_ARLO.3")]
    StickerTrArlo3,
    #[serde(rename = "STICKER_TR_ARLO.5")]
    StickerTrArlo5,
    #[serde(rename = "STICKER_TR_CLIFF.3")]
    StickerTrCliff3,
    #[serde(rename = "STICKER_TR_CLIFF.5")]
    StickerTrCliff5,
    #[serde(rename = "STICKER_TR_SIERRA.3")]
    StickerTrSierra3,
    #[serde(rename = "STICKER_TR_SIERRA.5")]
    StickerTrSierra5,
    #[serde(rename = "STICKER_TYNAMOCD_1.3")]
    StickerTynamocd13,
    #[serde(rename = "STICKER_TYNAMOCD_1.5")]
    StickerTynamocd15,
    #[serde(rename = "STICKER_TYNAMOCD_2.3")]
    StickerTynamocd23,
    #[serde(rename = "STICKER_TYNAMOCD_2.5")]
    StickerTynamocd25,
    #[serde(rename = "STICKER_TYNAMOCD_3.3")]
    StickerTynamocd33,
    #[serde(rename = "STICKER_TYNAMOCD_3.5")]
    StickerTynamocd35,
    #[serde(rename = "STICKER_TYNAMOCD_4.3")]
    StickerTynamocd43,
    #[serde(rename = "STICKER_TYNAMOCD_4.5")]
    StickerTynamocd45,
    #[serde(rename = "STICKER_VALENTINE2023_1.3")]
    StickerValentine202313,
    #[serde(rename = "STICKER_VALENTINE2023_1.5")]
    StickerValentine202315,
    #[serde(rename = "STICKER_VALENTINE2023_2.3")]
    StickerValentine202323,
    #[serde(rename = "STICKER_VALENTINE2023_2.5")]
    StickerValentine202325,
    #[serde(rename = "STICKER_VALENTINE2023_3.3")]
    StickerValentine202333,
    #[serde(rename = "STICKER_VALENTINE2023_3.5")]
    StickerValentine202335,
    #[serde(rename = "STICKER_WCS2025_CAR_GROUP.3")]
    StickerWcs2025CarGroup3,
    #[serde(rename = "STICKER_WCS2025_CAR_GROUP.5")]
    StickerWcs2025CarGroup5,
    #[serde(rename = "STICKER_WCS2025_JIGGLYPUFF.3")]
    StickerWcs2025Jigglypuff3,
    #[serde(rename = "STICKER_WCS2025_JIGGLYPUFF.5")]
    StickerWcs2025Jigglypuff5,
    #[serde(rename = "STICKER_WCS2025_MURKROW.3")]
    StickerWcs2025Murkrow3,
    #[serde(rename = "STICKER_WCS2025_MURKROW.5")]
    StickerWcs2025Murkrow5,
    #[serde(rename = "STICKER_WCS2025_PIKACHU.3")]
    StickerWcs2025Pikachu3,
    #[serde(rename = "STICKER_WCS2025_PIKACHU.5")]
    StickerWcs2025Pikachu5,
    #[serde(rename = "STICKER_WINTER_2024_1.3")]
    StickerWinter202413,
    #[serde(rename = "STICKER_WINTER_2024_1.5")]
    StickerWinter202415,
    #[serde(rename = "STICKER_WINTER_2024_2.3")]
    StickerWinter202423,
    #[serde(rename = "STICKER_WINTER_2024_2.5")]
    StickerWinter202425,
    #[serde(rename = "STICKER_WINTER_2024_3.3")]
    StickerWinter202433,
    #[serde(rename = "STICKER_WINTER_2024_3.5")]
    StickerWinter202435,
    #[serde(rename = "STICKER_WINTER_2024_4.3")]
    StickerWinter202443,
    #[serde(rename = "STICKER_WINTER_2024_4.5")]
    StickerWinter202445,
    #[serde(rename = "STICKER_WINTER_2024_5.3")]
    StickerWinter202453,
    #[serde(rename = "STICKER_WINTER_2024_5.5")]
    StickerWinter202455,
    #[serde(rename = "STICKER_WINTER_2024_6.3")]
    StickerWinter202463,
    #[serde(rename = "STICKER_WINTER_2024_6.5")]
    StickerWinter202465,
    #[serde(rename = "STICKER_WINTER_AMAURA.3")]
    StickerWinterAmaura3,
    #[serde(rename = "STICKER_WINTER_AMAURA.5")]
    StickerWinterAmaura5,
    #[serde(rename = "STICKER_WINTER_DARUMAKA.3")]
    StickerWinterDarumaka3,
    #[serde(rename = "STICKER_WINTER_DARUMAKA.5")]
    StickerWinterDarumaka5,
    #[serde(rename = "STICKER_WINTER_GLACEON.3")]
    StickerWinterGlaceon3,
    #[serde(rename = "STICKER_WINTER_GLACEON.5")]
    StickerWinterGlaceon5,
    #[serde(rename = "STICKER_WINTER_PIKACHU.3")]
    StickerWinterPikachu3,
    #[serde(rename = "STICKER_WINTER_PIKACHU.5")]
    StickerWinterPikachu5,
    #[serde(rename = "STICKER_WINTER_SAWSBUCK.3")]
    StickerWinterSawsbuck3,
    #[serde(rename = "STICKER_WINTER_SAWSBUCK.5")]
    StickerWinterSawsbuck5,
    #[serde(rename = "STICKER_WINTER_SNORUNT.3")]
    StickerWinterSnorunt3,
    #[serde(rename = "STICKER_WINTER_SNORUNT.5")]
    StickerWinterSnorunt5,
    #[serde(rename = "STICKER_WINTER2023_1.3")]
    StickerWinter202313,
    #[serde(rename = "STICKER_WINTER2023_1.5")]
    StickerWinter202315,
    #[serde(rename = "STICKER_WINTER2023_2.3")]
    StickerWinter202323,
    #[serde(rename = "STICKER_WINTER2023_2.5")]
    StickerWinter202325,
    #[serde(rename = "STICKER_WINTER2023_3.3")]
    StickerWinter202333,
    #[serde(rename = "STICKER_WINTER2023_3.5")]
    StickerWinter202335,
    #[serde(rename = "STICKER_WINTER2023_4.3")]
    StickerWinter202343,
    #[serde(rename = "STICKER_WINTER2023_4.5")]
    StickerWinter202345,
    #[serde(rename = "STICKER_WINTER2023_5.3")]
    StickerWinter202353,
    #[serde(rename = "STICKER_WINTER2023_5.5")]
    StickerWinter202355,
    #[serde(rename = "STICKER_WINTER2023_6.3")]
    StickerWinter202363,
    #[serde(rename = "STICKER_WINTER2023_6.5")]
    StickerWinter202365,
    #[serde(rename = "STICKER_WINTER2025_1.3")]
    StickerWinter202513,
    #[serde(rename = "STICKER_WINTER2025_1.5")]
    StickerWinter202515,
    #[serde(rename = "STICKER_WINTER2025_2.3")]
    StickerWinter202523,
    #[serde(rename = "STICKER_WINTER2025_2.5")]
    StickerWinter202525,
    #[serde(rename = "STICKER_WINTER2025_3.3")]
    StickerWinter202533,
    #[serde(rename = "STICKER_WINTER2025_3.5")]
    StickerWinter202535,
    #[serde(rename = "STICKER_WINTER2025_4.3")]
    StickerWinter202543,
    #[serde(rename = "STICKER_WINTER2025_4.5")]
    StickerWinter202545,
    #[serde(rename = "STICKER_YURUTTO_12.3")]
    StickerYurutto123,
    #[serde(rename = "STICKER_YURUTTO_12.5")]
    StickerYurutto125,
    #[serde(rename = "STICKER_YURUTTO_24.3")]
    StickerYurutto243,
    #[serde(rename = "STICKER_YURUTTO_24.5")]
    StickerYurutto245,
    #[serde(rename = "troydisk.1")]
    Troydisk1,
    #[serde(rename = "troydisk.8")]
    Troydisk8,
    #[serde(rename = "web-community-ambassador-bonus-bundle-2025")]
    WebCommunityAmbassadorBonusBundle2025,
    #[serde(rename = "web-go-fest-hatch-box-2023")]
    WebGoFestHatchBox2023,
    #[serde(rename = "web-go-fest-raid-box-2023")]
    WebGoFestRaidBox2023,
    #[serde(rename = "web-raid-box-071323")]
    WebRaidBox071323,
    #[serde(rename = "web-seasonal-delights-2024-box")]
    WebSeasonalDelights2024Box,
    #[serde(rename = "web-voyager-box-071323")]
    WebVoyagerBox071323,
    #[serde(rename = "WINTERHOLIDAYS2025_DELUXE_EVENT_PASS_TRACK_UNLOCK")]
    Winterholidays2025DeluxeEventPassTrackUnlock,
    #[serde(rename = "WINTERHOLIDAYS2025_DELUXE_EVENT_PASS_TRACK_UNLOCK_PLUS_POINTS")]
    Winterholidays2025DeluxeEventPassTrackUnlockPlusPoints,
}
