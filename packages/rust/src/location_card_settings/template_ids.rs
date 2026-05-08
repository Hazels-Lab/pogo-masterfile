//! Generated from Pokémon GO masterfile — group "locationCardSettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum LocationCardSettingsTemplateId {
    #[serde(rename = "LC_2023_BARCELONA_CITYSAFARI_001")]
    Lc2023BarcelonaCitysafari001,
    #[serde(rename = "LC_2023_JEJU_AIRADVENTURES_001")]
    Lc2023JejuAiradventures001,
    #[serde(rename = "LC_2023_LASVEGAS_GOTOUR_001")]
    Lc2023LasvegasGotour001,
    #[serde(rename = "LC_2023_LONDON_GOFEST_001")]
    Lc2023LondonGofest001,
    #[serde(rename = "LC_2023_MEXICOCITY_CITYSAFARI_001")]
    Lc2023MexicocityCitysafari001,
    #[serde(rename = "LC_2023_NYC_GOFEST_001")]
    Lc2023NycGofest001,
    #[serde(rename = "LC_2023_OSAKA_GOFEST_001")]
    Lc2023OsakaGofest001,
    #[serde(rename = "LC_2023_SEOUL_CITYSAFARI_001")]
    Lc2023SeoulCitysafari001,
    #[serde(rename = "LC_2024_BALI_AIRADVENTURES_001")]
    Lc2024BaliAiradventures001,
    #[serde(rename = "LC_2024_FUKUOKA_GOWA_001")]
    Lc2024FukuokaGowa001,
    #[serde(rename = "LC_2024_HONGKONG_CITYSAFARI_001")]
    Lc2024HongkongCitysafari001,
    #[serde(rename = "LC_2024_HONOLULU_WORLD_CHAMPIONSHIPS_001")]
    Lc2024HonoluluWorldChampionships001,
    #[serde(rename = "LC_2024_INCHEON_SAFARI_ZONE_001")]
    Lc2024IncheonSafariZone001,
    #[serde(rename = "LC_2024_JAKARTA_AIRADVENTURES_001")]
    Lc2024JakartaAiradventures001,
    #[serde(rename = "LC_2024_LOSANGELES_GOTOUR_001")]
    Lc2024LosangelesGotour001,
    #[serde(rename = "LC_2024_MADRID_GOFEST_001")]
    Lc2024MadridGofest001,
    #[serde(rename = "LC_2024_MILAN_CITYSAFARI_001")]
    Lc2024MilanCitysafari001,
    #[serde(rename = "LC_2024_MLB_001")]
    Lc2024Mlb001,
    #[serde(rename = "LC_2024_MLB_002")]
    Lc2024Mlb002,
    #[serde(rename = "LC_2024_MLB_003")]
    Lc2024Mlb003,
    #[serde(rename = "LC_2024_MLB_004")]
    Lc2024Mlb004,
    #[serde(rename = "LC_2024_MLB_005")]
    Lc2024Mlb005,
    #[serde(rename = "LC_2024_MLB_006")]
    Lc2024Mlb006,
    #[serde(rename = "LC_2024_MLB_007")]
    Lc2024Mlb007,
    #[serde(rename = "LC_2024_MLB_008")]
    Lc2024Mlb008,
    #[serde(rename = "LC_2024_MLB_009")]
    Lc2024Mlb009,
    #[serde(rename = "LC_2024_MLB_010")]
    Lc2024Mlb010,
    #[serde(rename = "LC_2024_MLB_011")]
    Lc2024Mlb011,
    #[serde(rename = "LC_2024_MLB_012")]
    Lc2024Mlb012,
    #[serde(rename = "LC_2024_MLB_013")]
    Lc2024Mlb013,
    #[serde(rename = "LC_2024_MLB_014")]
    Lc2024Mlb014,
    #[serde(rename = "LC_2024_MUMBAI_CITYSAFARI_001")]
    Lc2024MumbaiCitysafari001,
    #[serde(rename = "LC_2024_NYC_GOFEST_001")]
    Lc2024NycGofest001,
    #[serde(rename = "LC_2024_SANTIAGO_CITYSAFARI_001")]
    Lc2024SantiagoCitysafari001,
    #[serde(rename = "LC_2024_SAOPAULO_CITYSAFARI_001")]
    Lc2024SaopauloCitysafari001,
    #[serde(rename = "LC_2024_SENDAI_GOFEST_001")]
    Lc2024SendaiGofest001,
    #[serde(rename = "LC_2024_SINGAPORE_CITYSAFARI_001")]
    Lc2024SingaporeCitysafari001,
    #[serde(rename = "LC_2024_SURABAYA_AIRADVENTURES_001")]
    Lc2024SurabayaAiradventures001,
    #[serde(rename = "LC_2024_TAINAN_CITYSAFARI_001")]
    Lc2024TainanCitysafari001,
    #[serde(rename = "LC_2024_YOGYAKARTA_AIRADVENTURES_001")]
    Lc2024YogyakartaAiradventures001,
    #[serde(rename = "LC_2025_AMSTERDAM_CITYSAFARI_001")]
    Lc2025AmsterdamCitysafari001,
    #[serde(rename = "LC_2025_ANAHEIM_WORLD_CHAMPIONSHIPS_001")]
    Lc2025AnaheimWorldChampionships001,
    #[serde(rename = "LC_2025_BANGKOK_CITYSAFARI_001")]
    Lc2025BangkokCitysafari001,
    #[serde(rename = "LC_2025_BERLIN_ROADTRIP_001")]
    Lc2025BerlinRoadtrip001,
    #[serde(rename = "LC_2025_CANCUN_CITYSAFARI_001")]
    Lc2025CancunCitysafari001,
    #[serde(rename = "LC_2025_CHERRY_BLOSSOM_FESTIVAL")]
    Lc2025CherryBlossomFestival,
    #[serde(rename = "LC_2025_COLOGNE_ROADTRIP_001")]
    Lc2025CologneRoadtrip001,
    #[serde(rename = "LC_2025_GOWA_NAGASAKI")]
    Lc2025GowaNagasaki,
    #[serde(rename = "LC_2025_HAGUE_ROADTRIP_001")]
    Lc2025HagueRoadtrip001,
    #[serde(rename = "LC_2025_JANGHEUNG_SUMMER_FESTIVAL")]
    Lc2025JangheungSummerFestival,
    #[serde(rename = "LC_2025_JERSEYCITY_GOFEST_001")]
    Lc2025JerseycityGofest001,
    #[serde(rename = "LC_2025_KR_PYEONGCHANG_WINTER_FESTIVAL")]
    Lc2025KrPyeongchangWinterFestival,
    #[serde(rename = "LC_2025_LONDON_ROADTRIP_001")]
    Lc2025LondonRoadtrip001,
    #[serde(rename = "LC_2025_LOSANGELES_GOTOUR_001")]
    Lc2025LosangelesGotour001,
    #[serde(rename = "LC_2025_MANCHESTER_ROADTRIP_001")]
    Lc2025ManchesterRoadtrip001,
    #[serde(rename = "LC_2025_NEWTAIPEICITY_GOTOUR_001")]
    Lc2025NewtaipeicityGotour001,
    #[serde(rename = "LC_2025_NFL_001")]
    Lc2025Nfl001,
    #[serde(rename = "LC_2025_OSAKA_EVENT_001")]
    Lc2025OsakaEvent001,
    #[serde(rename = "LC_2025_OSAKA_EVENT_002")]
    Lc2025OsakaEvent002,
    #[serde(rename = "LC_2025_OSAKA_EVENT_003")]
    Lc2025OsakaEvent003,
    #[serde(rename = "LC_2025_OSAKA_GOFEST_001")]
    Lc2025OsakaGofest001,
    #[serde(rename = "LC_2025_PARIS_001")]
    Lc2025Paris001,
    #[serde(rename = "LC_2025_PARIS_002")]
    Lc2025Paris002,
    #[serde(rename = "LC_2025_PARIS_GOFEST_001")]
    Lc2025ParisGofest001,
    #[serde(rename = "LC_2025_PARIS_ROADTRIP_001")]
    Lc2025ParisRoadtrip001,
    #[serde(rename = "LC_2025_TAIPEICITY_AMUSEMENT_PARK")]
    Lc2025TaipeicityAmusementPark,
    #[serde(rename = "LC_2025_VALENCIA_CITYSAFARI_001")]
    Lc2025ValenciaCitysafari001,
    #[serde(rename = "LC_2025_VALENCIA_ROADTRIP_001")]
    Lc2025ValenciaRoadtrip001,
    #[serde(rename = "LC_2025_VANCOUVER_CITYSAFARI_001")]
    Lc2025VancouverCitysafari001,
    #[serde(rename = "LC_2026_CHICAGO_GOFEST_001")]
    Lc2026ChicagoGofest001,
    #[serde(rename = "LC_2026_COLOGNE_CARNIVAL_001")]
    Lc2026CologneCarnival001,
    #[serde(rename = "LC_2026_COPENHAGEN_GOFEST_001")]
    Lc2026CopenhagenGofest001,
    #[serde(rename = "LC_2026_LOSANGELES_GOTOUR_001")]
    Lc2026LosangelesGotour001,
    #[serde(rename = "LC_2026_NPB_001")]
    Lc2026Npb001,
    #[serde(rename = "LC_2026_NPB_002")]
    Lc2026Npb002,
    #[serde(rename = "LC_2026_NPB_003")]
    Lc2026Npb003,
    #[serde(rename = "LC_2026_NPB_004")]
    Lc2026Npb004,
    #[serde(rename = "LC_2026_NPB_005")]
    Lc2026Npb005,
    #[serde(rename = "LC_2026_NPB_006")]
    Lc2026Npb006,
    #[serde(rename = "LC_2026_NPB_007")]
    Lc2026Npb007,
    #[serde(rename = "LC_2026_NPB_008")]
    Lc2026Npb008,
    #[serde(rename = "LC_2026_NPB_009")]
    Lc2026Npb009,
    #[serde(rename = "LC_2026_NPB_010")]
    Lc2026Npb010,
    #[serde(rename = "LC_2026_NPB_011")]
    Lc2026Npb011,
    #[serde(rename = "LC_2026_NPB_012")]
    Lc2026Npb012,
    #[serde(rename = "LC_2026_NPB_013")]
    Lc2026Npb013,
    #[serde(rename = "LC_2026_PPK_001")]
    Lc2026Ppk001,
    #[serde(rename = "LC_2026_RIODEJANEIRO_CARNIVAL_001")]
    Lc2026RiodejaneiroCarnival001,
    #[serde(rename = "LC_2026_TAINAN_GOTOUR_001")]
    Lc2026TainanGotour001,
    #[serde(rename = "LC_2026_TOKYO_GOFEST_001")]
    Lc2026TokyoGofest001,
    #[serde(rename = "LC_CITYSAFARI2025_BUENOSAIRES")]
    LcCitysafari2025Buenosaires,
    #[serde(rename = "LC_CITYSAFARI2025_MIAMI")]
    LcCitysafari2025Miami,
    #[serde(rename = "LC_CITYSAFARI2025_SYDNEY")]
    LcCitysafari2025Sydney,
    #[serde(rename = "LC_ID_CAR_FREE_DAY")]
    LcIdCarFreeDay,
    #[serde(rename = "LC_JEJU_STAMP_RALLY")]
    LcJejuStampRally,
    #[serde(rename = "LC_POKELID_AICHI")]
    LcPokelidAichi,
    #[serde(rename = "LC_POKELID_AKITA")]
    LcPokelidAkita,
    #[serde(rename = "LC_POKELID_AOMORI")]
    LcPokelidAomori,
    #[serde(rename = "LC_POKELID_CHIBA")]
    LcPokelidChiba,
    #[serde(rename = "LC_POKELID_EHIME")]
    LcPokelidEhime,
    #[serde(rename = "LC_POKELID_FUKUI")]
    LcPokelidFukui,
    #[serde(rename = "LC_POKELID_FUKUOKA")]
    LcPokelidFukuoka,
    #[serde(rename = "LC_POKELID_FUKUSHIMA")]
    LcPokelidFukushima,
    #[serde(rename = "LC_POKELID_GIFU")]
    LcPokelidGifu,
    #[serde(rename = "LC_POKELID_HOKKAIDO")]
    LcPokelidHokkaido,
    #[serde(rename = "LC_POKELID_HYOGO")]
    LcPokelidHyogo,
    #[serde(rename = "LC_POKELID_IBARAKI")]
    LcPokelidIbaraki,
    #[serde(rename = "LC_POKELID_ISHIKAWA")]
    LcPokelidIshikawa,
    #[serde(rename = "LC_POKELID_IWATE")]
    LcPokelidIwate,
    #[serde(rename = "LC_POKELID_KAGAWA")]
    LcPokelidKagawa,
    #[serde(rename = "LC_POKELID_KAGOSHIMA")]
    LcPokelidKagoshima,
    #[serde(rename = "LC_POKELID_KANAGAWA")]
    LcPokelidKanagawa,
    #[serde(rename = "LC_POKELID_KOCHI")]
    LcPokelidKochi,
    #[serde(rename = "LC_POKELID_KYOTO")]
    LcPokelidKyoto,
    #[serde(rename = "LC_POKELID_MIE")]
    LcPokelidMie,
    #[serde(rename = "LC_POKELID_MIYAGI")]
    LcPokelidMiyagi,
    #[serde(rename = "LC_POKELID_MIYAZAKI")]
    LcPokelidMiyazaki,
    #[serde(rename = "LC_POKELID_NAGASAKI")]
    LcPokelidNagasaki,
    #[serde(rename = "LC_POKELID_NARA")]
    LcPokelidNara,
    #[serde(rename = "LC_POKELID_NIIGATA")]
    LcPokelidNiigata,
    #[serde(rename = "LC_POKELID_OKAYAMA")]
    LcPokelidOkayama,
    #[serde(rename = "LC_POKELID_OKINAWA")]
    LcPokelidOkinawa,
    #[serde(rename = "LC_POKELID_OSAKA")]
    LcPokelidOsaka,
    #[serde(rename = "LC_POKELID_SAGA")]
    LcPokelidSaga,
    #[serde(rename = "LC_POKELID_SAITAMA")]
    LcPokelidSaitama,
    #[serde(rename = "LC_POKELID_SHIGA")]
    LcPokelidShiga,
    #[serde(rename = "LC_POKELID_SHIMANE")]
    LcPokelidShimane,
    #[serde(rename = "LC_POKELID_SHIZUOKA")]
    LcPokelidShizuoka,
    #[serde(rename = "LC_POKELID_TOCHIGI")]
    LcPokelidTochigi,
    #[serde(rename = "LC_POKELID_TOKUSHIMA")]
    LcPokelidTokushima,
    #[serde(rename = "LC_POKELID_TOKYO")]
    LcPokelidTokyo,
    #[serde(rename = "LC_POKELID_TOTTORI")]
    LcPokelidTottori,
    #[serde(rename = "LC_POKELID_TOYAMA")]
    LcPokelidToyama,
    #[serde(rename = "LC_POKELID_WAKAYAMA")]
    LcPokelidWakayama,
    #[serde(rename = "LC_POKELID_YAMAGATA")]
    LcPokelidYamagata,
    #[serde(rename = "LC_POKELID_YAMAGUCHI")]
    LcPokelidYamaguchi,
    #[serde(rename = "LC_SPECIAL_BACKGROUND_2024_GLOBAL_GOFEST_MOON_ULTRA_WORMHOLE_001")]
    LcSpecialBackground2024GlobalGofestMoonUltraWormhole001,
    #[serde(rename = "LC_SPECIAL_BACKGROUND_2024_GLOBAL_GOFEST_SUN_ULTRA_WORMHOLE_001")]
    LcSpecialBackground2024GlobalGofestSunUltraWormhole001,
    #[serde(rename = "LC_SPECIAL_BACKGROUND_2024_GLOBAL_GOFEST_ULTRA_WORMHOLE_001")]
    LcSpecialBackground2024GlobalGofestUltraWormhole001,
    #[serde(rename = "LC_SPECIALBACKGROUND_2024_DECEMBERCDRECAP")]
    LcSpecialbackground2024Decembercdrecap,
    #[serde(rename = "LC_SPECIALBACKGROUND_2024_GLOBAL_GOFEST_RADIANCE_001")]
    LcSpecialbackground2024GlobalGofestRadiance001,
    #[serde(rename = "LC_SPECIALBACKGROUND_2024_GLOBAL_GOFEST_UMBRA_001")]
    LcSpecialbackground2024GlobalGofestUmbra001,
    #[serde(rename = "LC_SPECIALBACKGROUND_2024_GLOBAL_GOWA_001")]
    LcSpecialbackground2024GlobalGowa001,
    #[serde(rename = "LC_SPECIALBACKGROUND_2025_9THANNIVERSARY")]
    LcSpecialbackground20259thanniversary,
    #[serde(rename = "LC_SPECIALBACKGROUND_2025_GLOBAL_ENIGMA_001")]
    LcSpecialbackground2025GlobalEnigma001,
    #[serde(rename = "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_DD_001")]
    LcSpecialbackground2025GlobalGofestDd001,
    #[serde(rename = "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_REGI_001")]
    LcSpecialbackground2025GlobalGofestRegi001,
    #[serde(rename = "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_REGI_002")]
    LcSpecialbackground2025GlobalGofestRegi002,
    #[serde(rename = "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_REGI_003")]
    LcSpecialbackground2025GlobalGofestRegi003,
    #[serde(rename = "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_REGI_004")]
    LcSpecialbackground2025GlobalGofestRegi004,
    #[serde(rename = "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_REGI_005")]
    LcSpecialbackground2025GlobalGofestRegi005,
    #[serde(rename = "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_REGI_006")]
    LcSpecialbackground2025GlobalGofestRegi006,
    #[serde(rename = "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_SHIELD_001")]
    LcSpecialbackground2025GlobalGofestShield001,
    #[serde(rename = "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_SHIELD_CROWNED_001")]
    LcSpecialbackground2025GlobalGofestShieldCrowned001,
    #[serde(rename = "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_SWORD_001")]
    LcSpecialbackground2025GlobalGofestSword001,
    #[serde(rename = "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_SWORD_CROWNED_001")]
    LcSpecialbackground2025GlobalGofestSwordCrowned001,
    #[serde(rename = "LC_SPECIALBACKGROUND_2025_GLOBAL_GOTOUR_BLACK_001")]
    LcSpecialbackground2025GlobalGotourBlack001,
    #[serde(rename = "LC_SPECIALBACKGROUND_2025_GLOBAL_GOTOUR_BLACK_WHITE_001")]
    LcSpecialbackground2025GlobalGotourBlackWhite001,
    #[serde(rename = "LC_SPECIALBACKGROUND_2025_GLOBAL_GOTOUR_WHITE_001")]
    LcSpecialbackground2025GlobalGotourWhite001,
    #[serde(rename = "LC_SPECIALBACKGROUND_2025_GOWA_GLOBAL")]
    LcSpecialbackground2025GowaGlobal,
    #[serde(rename = "LC_SPECIALBACKGROUND_2025_S18")]
    LcSpecialbackground2025S18,
    #[serde(rename = "LC_SPECIALBACKGROUND_2025_SEASON17")]
    LcSpecialbackground2025Season17,
    #[serde(rename = "LC_SPECIALBACKGROUND_2025_SEASON19")]
    LcSpecialbackground2025Season19,
    #[serde(rename = "LC_SPECIALBACKGROUND_2025_SEASON20")]
    LcSpecialbackground2025Season20,
    #[serde(rename = "LC_SPECIALBACKGROUND_2026_COMMUNITYDAY")]
    LcSpecialbackground2026Communityday,
    #[serde(rename = "LC_SPECIALBACKGROUND_2026_GLOBAL_DIAMOND_001")]
    LcSpecialbackground2026GlobalDiamond001,
    #[serde(rename = "LC_SPECIALBACKGROUND_2026_GLOBAL_GOFEST_001")]
    LcSpecialbackground2026GlobalGofest001,
    #[serde(rename = "LC_SPECIALBACKGROUND_2026_GLOBAL_GOLD_001")]
    LcSpecialbackground2026GlobalGold001,
    #[serde(rename = "LC_SPECIALBACKGROUND_2026_GLOBAL_MEGA_001")]
    LcSpecialbackground2026GlobalMega001,
    #[serde(rename = "LC_SPECIALBACKGROUND_2026_GLOBAL_PEARL_001")]
    LcSpecialbackground2026GlobalPearl001,
    #[serde(rename = "LC_SPECIALBACKGROUND_2026_GLOBAL_RUBY_001")]
    LcSpecialbackground2026GlobalRuby001,
    #[serde(rename = "LC_SPECIALBACKGROUND_2026_GLOBAL_SAPPHIRE_001")]
    LcSpecialbackground2026GlobalSapphire001,
    #[serde(rename = "LC_SPECIALBACKGROUND_2026_GLOBAL_SILVER_001")]
    LcSpecialbackground2026GlobalSilver001,
    #[serde(rename = "LC_SPECIALBACKGROUND_2026_GLOBAL_X_001")]
    LcSpecialbackground2026GlobalX001,
    #[serde(rename = "LC_SPECIALBACKGROUND_2026_GLOBAL_Y_001")]
    LcSpecialbackground2026GlobalY001,
    #[serde(rename = "LC_SPECIALBACKGROUND_2026_MEWTWO_001")]
    LcSpecialbackground2026Mewtwo001,
    #[serde(rename = "LC_SPECIALBACKGROUND_2026_MEWTWO_002")]
    LcSpecialbackground2026Mewtwo002,
    #[serde(rename = "LC_SPECIALBACKGROUND_CON2025")]
    LcSpecialbackgroundCon2025,
    #[serde(rename = "LC_SPECIALBACKGROUND_EXTRA_2025_01")]
    LcSpecialbackgroundExtra202501,
    #[serde(rename = "LC_SPECIALBACKGROUND_EXTRA_2025_02")]
    LcSpecialbackgroundExtra202502,
    #[serde(rename = "LC_SPECIALBACKGROUND_KR2025_LOTTE_01")]
    LcSpecialbackgroundKr2025Lotte01,
    #[serde(rename = "LC_SPECIALBACKGROUND_OBSERVATORY_EXHIBITION_TOUR")]
    LcSpecialbackgroundObservatoryExhibitionTour,
    #[serde(rename = "LC_SPECIALBACKGROUND_POK2026")]
    LcSpecialbackgroundPok2026,
    #[serde(rename = "LC_SPECIALBACKGROUND_TEAM_BLUE")]
    LcSpecialbackgroundTeamBlue,
    #[serde(rename = "LC_SPECIALBACKGROUND_TEAM_RED")]
    LcSpecialbackgroundTeamRed,
    #[serde(rename = "LC_SPECIALBACKGROUND_TEAM_YELLOW")]
    LcSpecialbackgroundTeamYellow,
    #[serde(rename = "LC_TOKMUN_STAMP_01")]
    LcTokmunStamp01,
    #[serde(rename = "LC_TOKMUN_STAMP_02")]
    LcTokmunStamp02,
    #[serde(rename = "LC_TOKMUN_STAMP_03")]
    LcTokmunStamp03,
}
