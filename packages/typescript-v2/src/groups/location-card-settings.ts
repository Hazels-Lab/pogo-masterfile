export interface LocationCardSettings<T extends string> {
	templateId: T;
	data: LocationCardSettingsData<T>;
}

export interface LocationCardSettingsData<T extends string> {
	templateId: T;
	locationCardSettings: {
		cardType?: "LOCATION_CARD" | "SPECIAL_BACKGROUND";
		imageUrl: "lc_2025_kr_pyeongchangWinterFestival" | "lc_2026_NPB_belluna" | "lc_2026_NPB_hiroshimaCarp" | "lc_2026_NPB_koshienHanshinTigers" | "lc_2026_NPB_kyocera" | "lc_2026_NPB_rakutenEagles" | "lc_2026_NPB_softbankHawks" | "lc_2026_NPB_yokohamaStadium" | "lc_2026_NPB_yomiuriGiants" | "lc_2026_NPB_zozoMarine" | "lc_2026_ppk_001" | "lc_AirAdv2024_bali" | "lc_AirAdv2024_jakarta" | "lc_AirAdv2024_surabaya" | "lc_AirAdv2024_yogyakarta" | "lc_carnivalFlamigo_cologne_2026" | "lc_carnivalFlamigo_rio_2026" | "lc_CherryBlossomFest2025_yeouido" | "lc_CitySafari2023_barcelona_2023" | "lc_CitySafari2023_mexicoCity_2023" | "lc_CitySafari2023_seoul_2023" | "lc_CitySafari2024_hongkong" | "lc_CitySafari2024_incheon" | "lc_CitySafari2024_milan" | "lc_CitySafari2024_mumbai" | "lc_CitySafari2024_santiago" | "lc_CitySafari2024_saopaulo" | "lc_CitySafari2024_singapore" | "lc_CitySafari2024_tainan" | "lc_citysafari2025_amsterdam" | "lc_citysafari2025_bangkok" | "lc_CitySafari2025_buenosAires" | "lc_citysafari2025_cancun" | "lc_CitySafari2025_miami" | "lc_CitySafari2025_sydney" | "lc_citysafari2025_valencia" | "lc_citysafari2025_vancouver" | "lc_GoFest2023_london" | "lc_GoFest2023_newyork" | "lc_GoFest2023_osaka" | "lc_GoFest2024_madrid" | "lc_GoFest2024_newyork" | "lc_GoFest2024_sendai" | "lc_GoFest2025_jerseycity" | "lc_GoFest2025_osaka" | "lc_GoFest2025_paris" | "lc_GoTour2023" | "lc_GoTour2024_losAngeles" | "lc_GoTour2025_losAngeles" | "lc_GoTour2025_newTaipeiCity" | "lc_GoTour2026_losAngeles" | "lc_GoTour2026_tainan" | "lc_GOWA_fukuoka" | "lc_ID_CarFreeDay" | "lc_Jangheung_Water_Festival_2025" | "lc_JejuAirAdv2023" | "lc_LotteGiants" | "lc_MLB_arizonaDiamondbacks" | "lc_MLB_baltimoreOrioles" | "lc_MLB_bostonRedSox" | "lc_MLB_chicagoWhiteSox" | "lc_MLB_clevelandGuardians" | "lc_MLB_mariners" | "lc_MLB_marlins" | "lc_MLB_milwaukeeBrewers" | "lc_MLB_minnesotaTwins" | "lc_MLB_newyorkMets" | "lc_MLB_sanFranciscoGiants" | "lc_MLB_tampaBayRays" | "lc_MLB_texasRangers" | "lc_MLB_washingtonNationals" | "lc_nagasaki2025" | "lc_NFL_cardinals" | "lc_OsakaEvent2025_01" | "lc_OsakaEvent2025_02" | "lc_OsakaEvent2025_03" | "lc_Paris2025_01" | "lc_Paris2025_02" | "lc_pokelid_aichi" | "lc_pokelid_akita" | "lc_pokelid_aomori" | "lc_pokelid_chiba" | "lc_pokelid_ehime" | "lc_pokelid_fukui" | "lc_pokelid_fukuoka" | "lc_pokelid_fukushima" | "lc_pokelid_gifu" | "lc_pokelid_hokkaido" | "lc_pokelid_hyogo" | "lc_pokelid_ibaraki" | "lc_pokelid_ishikawa" | "lc_pokelid_iwate" | "lc_pokelid_kagawa" | "lc_pokelid_kagoshima" | "lc_pokelid_kanagawa" | "lc_pokelid_kochi" | "lc_pokelid_kyoto" | "lc_pokelid_mie" | "lc_pokelid_miyagi" | "lc_pokelid_miyazaki" | "lc_pokelid_nagasaki" | "lc_pokelid_nara" | "lc_pokelid_niigata" | "lc_pokelid_okayama" | "lc_pokelid_okinawa" | "lc_pokelid_osaka" | "lc_pokelid_saga" | "lc_pokelid_saitama" | "lc_pokelid_shiga" | "lc_pokelid_shimane" | "lc_pokelid_shizuoka" | "lc_pokelid_tochigi" | "lc_pokelid_tokushima" | "lc_pokelid_tokyo" | "lc_pokelid_tottori" | "lc_pokelid_toyama" | "lc_pokelid_wakayama" | "lc_pokelid_yamagata" | "lc_pokelid_yamaguchi" | "lc_pokopia2026" | "lc_roadtrip2025_berlin" | "lc_roadtrip2025_cologne" | "lc_roadtrip2025_hague" | "lc_roadtrip2025_london" | "lc_roadtrip2025_manchester" | "lc_roadtrip2025_paris" | "lc_roadtrip2025_valencia" | "lc_stampRally2025_Jeju" | "lc_taipeiAmusementPark_2025" | "lc_taipeiFlowerFestival_2026" | "lc_wcs2024" | "lc_Wcs2025_anaheim" | "sb_2024_decemberCdRecap" | "sb_9thAnniversary" | "sb_Community_2026" | "sb_Concierge2025" | "sb_FestivalofColors_2026" | "sb_GoFest2024_radiance" | "sb_GoFest2024_umbra" | "sb_GoFest2024_wormhole" | "sb_GoFest2024_wormhole_moon" | "sb_GoFest2024_wormhole_sun" | "sb_GoFest2025" | "sb_GoFest2025_Eternatus" | "sb_GoTour2025_black" | "sb_GoTour2026_diamond" | "sb_GoTour2026_gold" | "sb_GoTour2026_mega" | "sb_GoTour2026_pearl" | "sb_GoTour2026_ruby" | "sb_GoTour2026_sapphire" | "sb_GoTour2026_silver" | "sb_GoTour2026_x" | "sb_GoTour2026_y" | "sb_GOWA_fukuoka" | "sb_gowa2025_global" | "sb_ObservatoryExhibitionTour" | "sb_Season17_DuelDestiny" | "sb_Season18_MightAndMastery" | "sb_Season19_DelightfulDays" | "sb_Season20_TalesOfTransformation" | "sb_TeamLeader_blue" | "sb_TeamLeader_red" | "sb_TeamLeader_yellow";
		locationCard: 248 | "LC_2023_BARCELONA_CITYSAFARI_001" | "LC_2023_JEJU_AIRADVENTURES_001" | "LC_2023_LASVEGAS_GOTOUR_001" | "LC_2023_LONDON_GOFEST_001" | "LC_2023_MEXICOCITY_CITYSAFARI_001" | "LC_2023_NYC_GOFEST_001" | "LC_2023_OSAKA_GOFEST_001" | "LC_2023_SEOUL_CITYSAFARI_001" | "LC_2024_BALI_AIRADVENTURES_001" | "LC_2024_FUKUOKA_GOWA_001" | "LC_2024_HONGKONG_CITYSAFARI_001" | "LC_2024_HONOLULU_WORLD_CHAMPIONSHIPS_001" | "LC_2024_INCHEON_SAFARI_ZONE_001" | "LC_2024_JAKARTA_AIRADVENTURES_001" | "LC_2024_LOSANGELES_GOTOUR_001" | "LC_2024_MADRID_GOFEST_001" | "LC_2024_MILAN_CITYSAFARI_001" | "LC_2024_MLB_001" | "LC_2024_MLB_002" | "LC_2024_MLB_003" | "LC_2024_MLB_004" | "LC_2024_MLB_005" | "LC_2024_MLB_006" | "LC_2024_MLB_007" | "LC_2024_MLB_008" | "LC_2024_MLB_009" | "LC_2024_MLB_010" | "LC_2024_MLB_011" | "LC_2024_MLB_012" | "LC_2024_MLB_013" | "LC_2024_MLB_014" | "LC_2024_MUMBAI_CITYSAFARI_001" | "LC_2024_NYC_GOFEST_001" | "LC_2024_SANTIAGO_CITYSAFARI_001" | "LC_2024_SAOPAULO_CITYSAFARI_001" | "LC_2024_SENDAI_GOFEST_001" | "LC_2024_SINGAPORE_CITYSAFARI_001" | "LC_2024_SURABAYA_AIRADVENTURES_001" | "LC_2024_TAINAN_CITYSAFARI_001" | "LC_2024_YOGYAKARTA_AIRADVENTURES_001" | "LC_2025_AMSTERDAM_CITYSAFARI_001" | "LC_2025_ANAHEIM_WORLD_CHAMPIONSHIPS_001" | "LC_2025_BANGKOK_CITYSAFARI_001" | "LC_2025_BERLIN_ROADTRIP_001" | "LC_2025_CANCUN_CITYSAFARI_001" | "LC_2025_CHERRY_BLOSSOM_FESTIVAL" | "LC_2025_COLOGNE_ROADTRIP_001" | "LC_2025_GOWA_NAGASAKI" | "LC_2025_HAGUE_ROADTRIP_001" | "LC_2025_JANGHEUNG_SUMMER_FESTIVAL" | "LC_2025_JERSEYCITY_GOFEST_001" | "LC_2025_KR_PYEONGCHANG_WINTER_FESTIVAL" | "LC_2025_LONDON_ROADTRIP_001" | "LC_2025_LOSANGELES_GOTOUR_001" | "LC_2025_MANCHESTER_ROADTRIP_001" | "LC_2025_NEWTAIPEICITY_GOTOUR_001" | "LC_2025_NFL_001" | "LC_2025_OSAKA_EVENT_001" | "LC_2025_OSAKA_EVENT_002" | "LC_2025_OSAKA_EVENT_003" | "LC_2025_OSAKA_GOFEST_001" | "LC_2025_PARIS_001" | "LC_2025_PARIS_002" | "LC_2025_PARIS_GOFEST_001" | "LC_2025_PARIS_ROADTRIP_001" | "LC_2025_TAIPEICITY_AMUSEMENT_PARK" | "LC_2025_VALENCIA_CITYSAFARI_001" | "LC_2025_VALENCIA_ROADTRIP_001" | "LC_2025_VANCOUVER_CITYSAFARI_001" | "LC_2026_COLOGNE_CARNIVAL_001" | "LC_2026_LOSANGELES_GOTOUR_001" | "LC_2026_NPB_001" | "LC_2026_NPB_002" | "LC_2026_NPB_003" | "LC_2026_NPB_004" | "LC_2026_NPB_005" | "LC_2026_NPB_006" | "LC_2026_NPB_007" | "LC_2026_NPB_008" | "LC_2026_NPB_009" | "LC_2026_NPB_010" | "LC_2026_NPB_011" | "LC_2026_NPB_012" | "LC_2026_NPB_013" | "LC_2026_PPK_001" | "LC_2026_RIODEJANEIRO_CARNIVAL_001" | "LC_2026_TAINAN_GOTOUR_001" | "LC_CITYSAFARI2025_BUENOSAIRES" | "LC_CITYSAFARI2025_MIAMI" | "LC_CITYSAFARI2025_SYDNEY" | "LC_ID_CAR_FREE_DAY" | "LC_JEJU_STAMP_RALLY" | "LC_POKELID_AICHI" | "LC_POKELID_AKITA" | "LC_POKELID_AOMORI" | "LC_POKELID_CHIBA" | "LC_POKELID_EHIME" | "LC_POKELID_FUKUI" | "LC_POKELID_FUKUOKA" | "LC_POKELID_FUKUSHIMA" | "LC_POKELID_GIFU" | "LC_POKELID_HOKKAIDO" | "LC_POKELID_HYOGO" | "LC_POKELID_IBARAKI" | "LC_POKELID_ISHIKAWA" | "LC_POKELID_IWATE" | "LC_POKELID_KAGAWA" | "LC_POKELID_KAGOSHIMA" | "LC_POKELID_KANAGAWA" | "LC_POKELID_KOCHI" | "LC_POKELID_KYOTO" | "LC_POKELID_MIE" | "LC_POKELID_MIYAGI" | "LC_POKELID_MIYAZAKI" | "LC_POKELID_NAGASAKI" | "LC_POKELID_NARA" | "LC_POKELID_NIIGATA" | "LC_POKELID_OKAYAMA" | "LC_POKELID_OKINAWA" | "LC_POKELID_OSAKA" | "LC_POKELID_SAGA" | "LC_POKELID_SAITAMA" | "LC_POKELID_SHIGA" | "LC_POKELID_SHIMANE" | "LC_POKELID_SHIZUOKA" | "LC_POKELID_TOCHIGI" | "LC_POKELID_TOKUSHIMA" | "LC_POKELID_TOKYO" | "LC_POKELID_TOTTORI" | "LC_POKELID_TOYAMA" | "LC_POKELID_WAKAYAMA" | "LC_POKELID_YAMAGATA" | "LC_POKELID_YAMAGUCHI" | "LC_SPECIAL_BACKGROUND_2024_GLOBAL_GOFEST_MOON_ULTRA_WORMHOLE_001" | "LC_SPECIAL_BACKGROUND_2024_GLOBAL_GOFEST_SUN_ULTRA_WORMHOLE_001" | "LC_SPECIAL_BACKGROUND_2024_GLOBAL_GOFEST_ULTRA_WORMHOLE_001" | "LC_SPECIALBACKGROUND_2024_DECEMBERCDRECAP" | "LC_SPECIALBACKGROUND_2024_GLOBAL_GOFEST_RADIANCE_001" | "LC_SPECIALBACKGROUND_2024_GLOBAL_GOFEST_UMBRA_001" | "LC_SPECIALBACKGROUND_2024_GLOBAL_GOWA_001" | "LC_SPECIALBACKGROUND_2025_9THANNIVERSARY" | "LC_SPECIALBACKGROUND_2025_GLOBAL_ENIGMA_001" | "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_DD_001" | "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_REGI_001" | "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_REGI_002" | "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_REGI_003" | "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_REGI_004" | "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_REGI_005" | "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_REGI_006" | "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_SHIELD_001" | "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_SHIELD_CROWNED_001" | "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_SWORD_001" | "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_SWORD_CROWNED_001" | "LC_SPECIALBACKGROUND_2025_GLOBAL_GOTOUR_BLACK_001" | "LC_SPECIALBACKGROUND_2025_GLOBAL_GOTOUR_BLACK_WHITE_001" | "LC_SPECIALBACKGROUND_2025_GLOBAL_GOTOUR_WHITE_001" | "LC_SPECIALBACKGROUND_2025_GOWA_GLOBAL" | "LC_SPECIALBACKGROUND_2025_S18" | "LC_SPECIALBACKGROUND_2025_SEASON17" | "LC_SPECIALBACKGROUND_2025_SEASON19" | "LC_SPECIALBACKGROUND_2025_SEASON20" | "LC_SPECIALBACKGROUND_2026_COMMUNITYDAY" | "LC_SPECIALBACKGROUND_2026_GLOBAL_DIAMOND_001" | "LC_SPECIALBACKGROUND_2026_GLOBAL_GOLD_001" | "LC_SPECIALBACKGROUND_2026_GLOBAL_MEGA_001" | "LC_SPECIALBACKGROUND_2026_GLOBAL_PEARL_001" | "LC_SPECIALBACKGROUND_2026_GLOBAL_RUBY_001" | "LC_SPECIALBACKGROUND_2026_GLOBAL_SAPPHIRE_001" | "LC_SPECIALBACKGROUND_2026_GLOBAL_SILVER_001" | "LC_SPECIALBACKGROUND_2026_GLOBAL_X_001" | "LC_SPECIALBACKGROUND_2026_GLOBAL_Y_001" | "LC_SPECIALBACKGROUND_CON2025" | "LC_SPECIALBACKGROUND_EXTRA_2025_01" | "LC_SPECIALBACKGROUND_EXTRA_2025_02" | "LC_SPECIALBACKGROUND_KR2025_LOTTE_01" | "LC_SPECIALBACKGROUND_OBSERVATORY_EXHIBITION_TOUR" | "LC_SPECIALBACKGROUND_POK2026" | "LC_SPECIALBACKGROUND_TEAM_BLUE" | "LC_SPECIALBACKGROUND_TEAM_RED" | "LC_SPECIALBACKGROUND_TEAM_YELLOW";
		vfxAddress?: "bgfx_9thAnni" | "bgfx_Black" | "bgfx_CommunityDay_2026" | "bgfx_DelightfulDays" | "bgfx_Diamond" | "bgfx_Fusion" | "bgfx_goFest_2025_eternatus" | "bgfx_goFest_2025_rock_001" | "bgfx_goFest_2025_rock_002" | "bgfx_goFest_2025_rock_003" | "bgfx_goFest_2025_rock_004" | "bgfx_goFest_2025_rock_005" | "bgfx_goFest_2025_rock_006" | "bgfx_goFest_2025_shield" | "bgfx_goFest_2025_shield_c" | "bgfx_goFest_2025_sword" | "bgfx_goFest_2025_sword_c" | "bgfx_Gold" | "bgfx_gowa" | "bgfx_holi_2026" | "bgfx_Mega" | "bgfx_MightAndMastery" | "bgfx_Moon" | "bgfx_N" | "bgfx_Pearl" | "bgfx_Ruby" | "bgfx_Sapphire" | "bgfx_Silver" | "bgfx_Sun" | "bgfx_TalesOfTransformation" | "bgfx_TeamLeader_blue" | "bgfx_TeamLeader_red" | "bgfx_TeamLeader_yellow" | "bgfx_UltraWormhole" | "bgfx_White" | "bgfx_X" | "bgfx_Y";
	};
}

export type LocationCardSettings2023BarcelonaCitysafari001 = LocationCardSettings<"LC_2023_BARCELONA_CITYSAFARI_001">;
export type LocationCardSettings2023JejuAiradventures001 = LocationCardSettings<"LC_2023_JEJU_AIRADVENTURES_001">;
export type LocationCardSettings2023LasvegasGotour001 = LocationCardSettings<"LC_2023_LASVEGAS_GOTOUR_001">;
export type LocationCardSettings2023LondonGofest001 = LocationCardSettings<"LC_2023_LONDON_GOFEST_001">;
export type LocationCardSettings2023MexicocityCitysafari001 = LocationCardSettings<"LC_2023_MEXICOCITY_CITYSAFARI_001">;
export type LocationCardSettings2023NycGofest001 = LocationCardSettings<"LC_2023_NYC_GOFEST_001">;
export type LocationCardSettings2023OsakaGofest001 = LocationCardSettings<"LC_2023_OSAKA_GOFEST_001">;
export type LocationCardSettings2023SeoulCitysafari001 = LocationCardSettings<"LC_2023_SEOUL_CITYSAFARI_001">;
export type LocationCardSettings2024BaliAiradventures001 = LocationCardSettings<"LC_2024_BALI_AIRADVENTURES_001">;
export type LocationCardSettings2024FukuokaGowa001 = LocationCardSettings<"LC_2024_FUKUOKA_GOWA_001">;
export type LocationCardSettings2024HongkongCitysafari001 = LocationCardSettings<"LC_2024_HONGKONG_CITYSAFARI_001">;
export type LocationCardSettings2024HonoluluWorldChampionships001 = LocationCardSettings<"LC_2024_HONOLULU_WORLD_CHAMPIONSHIPS_001">;
export type LocationCardSettings2024IncheonSafariZone001 = LocationCardSettings<"LC_2024_INCHEON_SAFARI_ZONE_001">;
export type LocationCardSettings2024JakartaAiradventures001 = LocationCardSettings<"LC_2024_JAKARTA_AIRADVENTURES_001">;
export type LocationCardSettings2024LosangelesGotour001 = LocationCardSettings<"LC_2024_LOSANGELES_GOTOUR_001">;
export type LocationCardSettings2024MadridGofest001 = LocationCardSettings<"LC_2024_MADRID_GOFEST_001">;
export type LocationCardSettings2024MilanCitysafari001 = LocationCardSettings<"LC_2024_MILAN_CITYSAFARI_001">;
export type LocationCardSettings2024Mlb001 = LocationCardSettings<"LC_2024_MLB_001">;
export type LocationCardSettings2024Mlb002 = LocationCardSettings<"LC_2024_MLB_002">;
export type LocationCardSettings2024Mlb003 = LocationCardSettings<"LC_2024_MLB_003">;
export type LocationCardSettings2024Mlb004 = LocationCardSettings<"LC_2024_MLB_004">;
export type LocationCardSettings2024Mlb005 = LocationCardSettings<"LC_2024_MLB_005">;
export type LocationCardSettings2024Mlb006 = LocationCardSettings<"LC_2024_MLB_006">;
export type LocationCardSettings2024Mlb007 = LocationCardSettings<"LC_2024_MLB_007">;
export type LocationCardSettings2024Mlb008 = LocationCardSettings<"LC_2024_MLB_008">;
export type LocationCardSettings2024Mlb009 = LocationCardSettings<"LC_2024_MLB_009">;
export type LocationCardSettings2024Mlb010 = LocationCardSettings<"LC_2024_MLB_010">;
export type LocationCardSettings2024Mlb011 = LocationCardSettings<"LC_2024_MLB_011">;
export type LocationCardSettings2024Mlb012 = LocationCardSettings<"LC_2024_MLB_012">;
export type LocationCardSettings2024Mlb013 = LocationCardSettings<"LC_2024_MLB_013">;
export type LocationCardSettings2024Mlb014 = LocationCardSettings<"LC_2024_MLB_014">;
export type LocationCardSettings2024MumbaiCitysafari001 = LocationCardSettings<"LC_2024_MUMBAI_CITYSAFARI_001">;
export type LocationCardSettings2024NycGofest001 = LocationCardSettings<"LC_2024_NYC_GOFEST_001">;
export type LocationCardSettings2024SantiagoCitysafari001 = LocationCardSettings<"LC_2024_SANTIAGO_CITYSAFARI_001">;
export type LocationCardSettings2024SaopauloCitysafari001 = LocationCardSettings<"LC_2024_SAOPAULO_CITYSAFARI_001">;
export type LocationCardSettings2024SendaiGofest001 = LocationCardSettings<"LC_2024_SENDAI_GOFEST_001">;
export type LocationCardSettings2024SingaporeCitysafari001 = LocationCardSettings<"LC_2024_SINGAPORE_CITYSAFARI_001">;
export type LocationCardSettings2024SurabayaAiradventures001 = LocationCardSettings<"LC_2024_SURABAYA_AIRADVENTURES_001">;
export type LocationCardSettings2024TainanCitysafari001 = LocationCardSettings<"LC_2024_TAINAN_CITYSAFARI_001">;
export type LocationCardSettings2024YogyakartaAiradventures001 = LocationCardSettings<"LC_2024_YOGYAKARTA_AIRADVENTURES_001">;
export type LocationCardSettings2025AmsterdamCitysafari001 = LocationCardSettings<"LC_2025_AMSTERDAM_CITYSAFARI_001">;
export type LocationCardSettings2025AnaheimWorldChampionships001 = LocationCardSettings<"LC_2025_ANAHEIM_WORLD_CHAMPIONSHIPS_001">;
export type LocationCardSettings2025BangkokCitysafari001 = LocationCardSettings<"LC_2025_BANGKOK_CITYSAFARI_001">;
export type LocationCardSettings2025BerlinRoadtrip001 = LocationCardSettings<"LC_2025_BERLIN_ROADTRIP_001">;
export type LocationCardSettings2025CancunCitysafari001 = LocationCardSettings<"LC_2025_CANCUN_CITYSAFARI_001">;
export type LocationCardSettings2025CherryBlossomFestival = LocationCardSettings<"LC_2025_CHERRY_BLOSSOM_FESTIVAL">;
export type LocationCardSettings2025CologneRoadtrip001 = LocationCardSettings<"LC_2025_COLOGNE_ROADTRIP_001">;
export type LocationCardSettings2025GowaNagasaki = LocationCardSettings<"LC_2025_GOWA_NAGASAKI">;
export type LocationCardSettings2025HagueRoadtrip001 = LocationCardSettings<"LC_2025_HAGUE_ROADTRIP_001">;
export type LocationCardSettings2025JangheungSummerFestival = LocationCardSettings<"LC_2025_JANGHEUNG_SUMMER_FESTIVAL">;
export type LocationCardSettings2025JerseycityGofest001 = LocationCardSettings<"LC_2025_JERSEYCITY_GOFEST_001">;
export type LocationCardSettings2025KrPyeongchangWinterFestival = LocationCardSettings<"LC_2025_KR_PYEONGCHANG_WINTER_FESTIVAL">;
export type LocationCardSettings2025LondonRoadtrip001 = LocationCardSettings<"LC_2025_LONDON_ROADTRIP_001">;
export type LocationCardSettings2025LosangelesGotour001 = LocationCardSettings<"LC_2025_LOSANGELES_GOTOUR_001">;
export type LocationCardSettings2025ManchesterRoadtrip001 = LocationCardSettings<"LC_2025_MANCHESTER_ROADTRIP_001">;
export type LocationCardSettings2025NewtaipeicityGotour001 = LocationCardSettings<"LC_2025_NEWTAIPEICITY_GOTOUR_001">;
export type LocationCardSettings2025Nfl001 = LocationCardSettings<"LC_2025_NFL_001">;
export type LocationCardSettings2025OsakaEvent001 = LocationCardSettings<"LC_2025_OSAKA_EVENT_001">;
export type LocationCardSettings2025OsakaEvent002 = LocationCardSettings<"LC_2025_OSAKA_EVENT_002">;
export type LocationCardSettings2025OsakaEvent003 = LocationCardSettings<"LC_2025_OSAKA_EVENT_003">;
export type LocationCardSettings2025OsakaGofest001 = LocationCardSettings<"LC_2025_OSAKA_GOFEST_001">;
export type LocationCardSettings2025Paris001 = LocationCardSettings<"LC_2025_PARIS_001">;
export type LocationCardSettings2025Paris002 = LocationCardSettings<"LC_2025_PARIS_002">;
export type LocationCardSettings2025ParisGofest001 = LocationCardSettings<"LC_2025_PARIS_GOFEST_001">;
export type LocationCardSettings2025ParisRoadtrip001 = LocationCardSettings<"LC_2025_PARIS_ROADTRIP_001">;
export type LocationCardSettings2025TaipeicityAmusementPark = LocationCardSettings<"LC_2025_TAIPEICITY_AMUSEMENT_PARK">;
export type LocationCardSettings2025ValenciaCitysafari001 = LocationCardSettings<"LC_2025_VALENCIA_CITYSAFARI_001">;
export type LocationCardSettings2025ValenciaRoadtrip001 = LocationCardSettings<"LC_2025_VALENCIA_ROADTRIP_001">;
export type LocationCardSettings2025VancouverCitysafari001 = LocationCardSettings<"LC_2025_VANCOUVER_CITYSAFARI_001">;
export type LocationCardSettings2026CologneCarnival001 = LocationCardSettings<"LC_2026_COLOGNE_CARNIVAL_001">;
export type LocationCardSettings2026LosangelesGotour001 = LocationCardSettings<"LC_2026_LOSANGELES_GOTOUR_001">;
export type LocationCardSettings2026Npb001 = LocationCardSettings<"LC_2026_NPB_001">;
export type LocationCardSettings2026Npb002 = LocationCardSettings<"LC_2026_NPB_002">;
export type LocationCardSettings2026Npb003 = LocationCardSettings<"LC_2026_NPB_003">;
export type LocationCardSettings2026Npb004 = LocationCardSettings<"LC_2026_NPB_004">;
export type LocationCardSettings2026Npb005 = LocationCardSettings<"LC_2026_NPB_005">;
export type LocationCardSettings2026Npb006 = LocationCardSettings<"LC_2026_NPB_006">;
export type LocationCardSettings2026Npb007 = LocationCardSettings<"LC_2026_NPB_007">;
export type LocationCardSettings2026Npb008 = LocationCardSettings<"LC_2026_NPB_008">;
export type LocationCardSettings2026Npb009 = LocationCardSettings<"LC_2026_NPB_009">;
export type LocationCardSettings2026Npb010 = LocationCardSettings<"LC_2026_NPB_010">;
export type LocationCardSettings2026Npb011 = LocationCardSettings<"LC_2026_NPB_011">;
export type LocationCardSettings2026Npb012 = LocationCardSettings<"LC_2026_NPB_012">;
export type LocationCardSettings2026Npb013 = LocationCardSettings<"LC_2026_NPB_013">;
export type LocationCardSettings2026Ppk001 = LocationCardSettings<"LC_2026_PPK_001">;
export type LocationCardSettings2026RiodejaneiroCarnival001 = LocationCardSettings<"LC_2026_RIODEJANEIRO_CARNIVAL_001">;
export type LocationCardSettings2026TainanGotour001 = LocationCardSettings<"LC_2026_TAINAN_GOTOUR_001">;
export type LocationCardSettingsCitysafari2025Buenosaires = LocationCardSettings<"LC_CITYSAFARI2025_BUENOSAIRES">;
export type LocationCardSettingsCitysafari2025Miami = LocationCardSettings<"LC_CITYSAFARI2025_MIAMI">;
export type LocationCardSettingsCitysafari2025Sydney = LocationCardSettings<"LC_CITYSAFARI2025_SYDNEY">;
export type LocationCardSettingsIdCarFreeDay = LocationCardSettings<"LC_ID_CAR_FREE_DAY">;
export type LocationCardSettingsJejuStampRally = LocationCardSettings<"LC_JEJU_STAMP_RALLY">;
export type LocationCardSettingsPokelidAichi = LocationCardSettings<"LC_POKELID_AICHI">;
export type LocationCardSettingsPokelidAkita = LocationCardSettings<"LC_POKELID_AKITA">;
export type LocationCardSettingsPokelidAomori = LocationCardSettings<"LC_POKELID_AOMORI">;
export type LocationCardSettingsPokelidChiba = LocationCardSettings<"LC_POKELID_CHIBA">;
export type LocationCardSettingsPokelidEhime = LocationCardSettings<"LC_POKELID_EHIME">;
export type LocationCardSettingsPokelidFukui = LocationCardSettings<"LC_POKELID_FUKUI">;
export type LocationCardSettingsPokelidFukuoka = LocationCardSettings<"LC_POKELID_FUKUOKA">;
export type LocationCardSettingsPokelidFukushima = LocationCardSettings<"LC_POKELID_FUKUSHIMA">;
export type LocationCardSettingsPokelidGifu = LocationCardSettings<"LC_POKELID_GIFU">;
export type LocationCardSettingsPokelidHokkaido = LocationCardSettings<"LC_POKELID_HOKKAIDO">;
export type LocationCardSettingsPokelidHyogo = LocationCardSettings<"LC_POKELID_HYOGO">;
export type LocationCardSettingsPokelidIbaraki = LocationCardSettings<"LC_POKELID_IBARAKI">;
export type LocationCardSettingsPokelidIshikawa = LocationCardSettings<"LC_POKELID_ISHIKAWA">;
export type LocationCardSettingsPokelidIwate = LocationCardSettings<"LC_POKELID_IWATE">;
export type LocationCardSettingsPokelidKagawa = LocationCardSettings<"LC_POKELID_KAGAWA">;
export type LocationCardSettingsPokelidKagoshima = LocationCardSettings<"LC_POKELID_KAGOSHIMA">;
export type LocationCardSettingsPokelidKanagawa = LocationCardSettings<"LC_POKELID_KANAGAWA">;
export type LocationCardSettingsPokelidKochi = LocationCardSettings<"LC_POKELID_KOCHI">;
export type LocationCardSettingsPokelidKyoto = LocationCardSettings<"LC_POKELID_KYOTO">;
export type LocationCardSettingsPokelidMie = LocationCardSettings<"LC_POKELID_MIE">;
export type LocationCardSettingsPokelidMiyagi = LocationCardSettings<"LC_POKELID_MIYAGI">;
export type LocationCardSettingsPokelidMiyazaki = LocationCardSettings<"LC_POKELID_MIYAZAKI">;
export type LocationCardSettingsPokelidNagasaki = LocationCardSettings<"LC_POKELID_NAGASAKI">;
export type LocationCardSettingsPokelidNara = LocationCardSettings<"LC_POKELID_NARA">;
export type LocationCardSettingsPokelidNiigata = LocationCardSettings<"LC_POKELID_NIIGATA">;
export type LocationCardSettingsPokelidOkayama = LocationCardSettings<"LC_POKELID_OKAYAMA">;
export type LocationCardSettingsPokelidOkinawa = LocationCardSettings<"LC_POKELID_OKINAWA">;
export type LocationCardSettingsPokelidOsaka = LocationCardSettings<"LC_POKELID_OSAKA">;
export type LocationCardSettingsPokelidSaga = LocationCardSettings<"LC_POKELID_SAGA">;
export type LocationCardSettingsPokelidSaitama = LocationCardSettings<"LC_POKELID_SAITAMA">;
export type LocationCardSettingsPokelidShiga = LocationCardSettings<"LC_POKELID_SHIGA">;
export type LocationCardSettingsPokelidShimane = LocationCardSettings<"LC_POKELID_SHIMANE">;
export type LocationCardSettingsPokelidShizuoka = LocationCardSettings<"LC_POKELID_SHIZUOKA">;
export type LocationCardSettingsPokelidTochigi = LocationCardSettings<"LC_POKELID_TOCHIGI">;
export type LocationCardSettingsPokelidTokushima = LocationCardSettings<"LC_POKELID_TOKUSHIMA">;
export type LocationCardSettingsPokelidTokyo = LocationCardSettings<"LC_POKELID_TOKYO">;
export type LocationCardSettingsPokelidTottori = LocationCardSettings<"LC_POKELID_TOTTORI">;
export type LocationCardSettingsPokelidToyama = LocationCardSettings<"LC_POKELID_TOYAMA">;
export type LocationCardSettingsPokelidWakayama = LocationCardSettings<"LC_POKELID_WAKAYAMA">;
export type LocationCardSettingsPokelidYamagata = LocationCardSettings<"LC_POKELID_YAMAGATA">;
export type LocationCardSettingsPokelidYamaguchi = LocationCardSettings<"LC_POKELID_YAMAGUCHI">;
export type LocationCardSettingsSpecialbackground2024Decembercdrecap = LocationCardSettings<"LC_SPECIALBACKGROUND_2024_DECEMBERCDRECAP">;
export type LocationCardSettingsSpecialbackground2024GlobalGofestRadiance001 = LocationCardSettings<"LC_SPECIALBACKGROUND_2024_GLOBAL_GOFEST_RADIANCE_001">;
export type LocationCardSettingsSpecialbackground2024GlobalGofestUmbra001 = LocationCardSettings<"LC_SPECIALBACKGROUND_2024_GLOBAL_GOFEST_UMBRA_001">;
export type LocationCardSettingsSpecialbackground2024GlobalGowa001 = LocationCardSettings<"LC_SPECIALBACKGROUND_2024_GLOBAL_GOWA_001">;
export type LocationCardSettingsSpecialbackground20259thanniversary = LocationCardSettings<"LC_SPECIALBACKGROUND_2025_9THANNIVERSARY">;
export type LocationCardSettingsSpecialbackground2025GlobalEnigma001 = LocationCardSettings<"LC_SPECIALBACKGROUND_2025_GLOBAL_ENIGMA_001">;
export type LocationCardSettingsSpecialbackground2025GlobalGofestDd001 = LocationCardSettings<"LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_DD_001">;
export type LocationCardSettingsSpecialbackground2025GlobalGofestRegi001 = LocationCardSettings<"LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_REGI_001">;
export type LocationCardSettingsSpecialbackground2025GlobalGofestRegi002 = LocationCardSettings<"LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_REGI_002">;
export type LocationCardSettingsSpecialbackground2025GlobalGofestRegi003 = LocationCardSettings<"LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_REGI_003">;
export type LocationCardSettingsSpecialbackground2025GlobalGofestRegi004 = LocationCardSettings<"LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_REGI_004">;
export type LocationCardSettingsSpecialbackground2025GlobalGofestRegi005 = LocationCardSettings<"LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_REGI_005">;
export type LocationCardSettingsSpecialbackground2025GlobalGofestRegi006 = LocationCardSettings<"LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_REGI_006">;
export type LocationCardSettingsSpecialbackground2025GlobalGofestShield001 = LocationCardSettings<"LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_SHIELD_001">;
export type LocationCardSettingsSpecialbackground2025GlobalGofestShieldCrowned001 = LocationCardSettings<"LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_SHIELD_CROWNED_001">;
export type LocationCardSettingsSpecialbackground2025GlobalGofestSword001 = LocationCardSettings<"LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_SWORD_001">;
export type LocationCardSettingsSpecialbackground2025GlobalGofestSwordCrowned001 = LocationCardSettings<"LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_SWORD_CROWNED_001">;
export type LocationCardSettingsSpecialbackground2025GlobalGotourBlack001 = LocationCardSettings<"LC_SPECIALBACKGROUND_2025_GLOBAL_GOTOUR_BLACK_001">;
export type LocationCardSettingsSpecialbackground2025GlobalGotourBlackWhite001 = LocationCardSettings<"LC_SPECIALBACKGROUND_2025_GLOBAL_GOTOUR_BLACK_WHITE_001">;
export type LocationCardSettingsSpecialbackground2025GlobalGotourWhite001 = LocationCardSettings<"LC_SPECIALBACKGROUND_2025_GLOBAL_GOTOUR_WHITE_001">;
export type LocationCardSettingsSpecialbackground2025GowaGlobal = LocationCardSettings<"LC_SPECIALBACKGROUND_2025_GOWA_GLOBAL">;
export type LocationCardSettingsSpecialbackground2025S18 = LocationCardSettings<"LC_SPECIALBACKGROUND_2025_S18">;
export type LocationCardSettingsSpecialbackground2025Season17 = LocationCardSettings<"LC_SPECIALBACKGROUND_2025_SEASON17">;
export type LocationCardSettingsSpecialbackground2025Season19 = LocationCardSettings<"LC_SPECIALBACKGROUND_2025_SEASON19">;
export type LocationCardSettingsSpecialbackground2025Season20 = LocationCardSettings<"LC_SPECIALBACKGROUND_2025_SEASON20">;
export type LocationCardSettingsSpecialbackground2026Communityday = LocationCardSettings<"LC_SPECIALBACKGROUND_2026_COMMUNITYDAY">;
export type LocationCardSettingsSpecialbackground2026GlobalDiamond001 = LocationCardSettings<"LC_SPECIALBACKGROUND_2026_GLOBAL_DIAMOND_001">;
export type LocationCardSettingsSpecialbackground2026GlobalGofest001 = LocationCardSettings<"LC_SPECIALBACKGROUND_2026_GLOBAL_GOFEST_001">;
export type LocationCardSettingsSpecialbackground2026GlobalGold001 = LocationCardSettings<"LC_SPECIALBACKGROUND_2026_GLOBAL_GOLD_001">;
export type LocationCardSettingsSpecialbackground2026GlobalMega001 = LocationCardSettings<"LC_SPECIALBACKGROUND_2026_GLOBAL_MEGA_001">;
export type LocationCardSettingsSpecialbackground2026GlobalPearl001 = LocationCardSettings<"LC_SPECIALBACKGROUND_2026_GLOBAL_PEARL_001">;
export type LocationCardSettingsSpecialbackground2026GlobalRuby001 = LocationCardSettings<"LC_SPECIALBACKGROUND_2026_GLOBAL_RUBY_001">;
export type LocationCardSettingsSpecialbackground2026GlobalSapphire001 = LocationCardSettings<"LC_SPECIALBACKGROUND_2026_GLOBAL_SAPPHIRE_001">;
export type LocationCardSettingsSpecialbackground2026GlobalSilver001 = LocationCardSettings<"LC_SPECIALBACKGROUND_2026_GLOBAL_SILVER_001">;
export type LocationCardSettingsSpecialbackground2026GlobalX001 = LocationCardSettings<"LC_SPECIALBACKGROUND_2026_GLOBAL_X_001">;
export type LocationCardSettingsSpecialbackground2026GlobalY001 = LocationCardSettings<"LC_SPECIALBACKGROUND_2026_GLOBAL_Y_001">;
export type LocationCardSettingsSpecialbackgroundCon2025 = LocationCardSettings<"LC_SPECIALBACKGROUND_CON2025">;
export type LocationCardSettingsSpecialbackgroundExtra202501 = LocationCardSettings<"LC_SPECIALBACKGROUND_EXTRA_2025_01">;
export type LocationCardSettingsSpecialbackgroundExtra202502 = LocationCardSettings<"LC_SPECIALBACKGROUND_EXTRA_2025_02">;
export type LocationCardSettingsSpecialbackgroundKr2025Lotte01 = LocationCardSettings<"LC_SPECIALBACKGROUND_KR2025_LOTTE_01">;
export type LocationCardSettingsSpecialbackgroundObservatoryExhibitionTour = LocationCardSettings<"LC_SPECIALBACKGROUND_OBSERVATORY_EXHIBITION_TOUR">;
export type LocationCardSettingsSpecialbackgroundPok2026 = LocationCardSettings<"LC_SPECIALBACKGROUND_POK2026">;
export type LocationCardSettingsSpecialbackgroundTeamBlue = LocationCardSettings<"LC_SPECIALBACKGROUND_TEAM_BLUE">;
export type LocationCardSettingsSpecialbackgroundTeamRed = LocationCardSettings<"LC_SPECIALBACKGROUND_TEAM_RED">;
export type LocationCardSettingsSpecialbackgroundTeamYellow = LocationCardSettings<"LC_SPECIALBACKGROUND_TEAM_YELLOW">;
export type LocationCardSettingsSpecialBackground2024GlobalGofestMoonUltraWormhole001 = LocationCardSettings<"LC_SPECIAL_BACKGROUND_2024_GLOBAL_GOFEST_MOON_ULTRA_WORMHOLE_001">;
export type LocationCardSettingsSpecialBackground2024GlobalGofestSunUltraWormhole001 = LocationCardSettings<"LC_SPECIAL_BACKGROUND_2024_GLOBAL_GOFEST_SUN_ULTRA_WORMHOLE_001">;
export type LocationCardSettingsSpecialBackground2024GlobalGofestUltraWormhole001 = LocationCardSettings<"LC_SPECIAL_BACKGROUND_2024_GLOBAL_GOFEST_ULTRA_WORMHOLE_001">;

export type LocationCardSettingsMasterfileEntry =
	| LocationCardSettings2023BarcelonaCitysafari001
	| LocationCardSettings2023JejuAiradventures001
	| LocationCardSettings2023LasvegasGotour001
	| LocationCardSettings2023LondonGofest001
	| LocationCardSettings2023MexicocityCitysafari001
	| LocationCardSettings2023NycGofest001
	| LocationCardSettings2023OsakaGofest001
	| LocationCardSettings2023SeoulCitysafari001
	| LocationCardSettings2024BaliAiradventures001
	| LocationCardSettings2024FukuokaGowa001
	| LocationCardSettings2024HongkongCitysafari001
	| LocationCardSettings2024HonoluluWorldChampionships001
	| LocationCardSettings2024IncheonSafariZone001
	| LocationCardSettings2024JakartaAiradventures001
	| LocationCardSettings2024LosangelesGotour001
	| LocationCardSettings2024MadridGofest001
	| LocationCardSettings2024MilanCitysafari001
	| LocationCardSettings2024Mlb001
	| LocationCardSettings2024Mlb002
	| LocationCardSettings2024Mlb003
	| LocationCardSettings2024Mlb004
	| LocationCardSettings2024Mlb005
	| LocationCardSettings2024Mlb006
	| LocationCardSettings2024Mlb007
	| LocationCardSettings2024Mlb008
	| LocationCardSettings2024Mlb009
	| LocationCardSettings2024Mlb010
	| LocationCardSettings2024Mlb011
	| LocationCardSettings2024Mlb012
	| LocationCardSettings2024Mlb013
	| LocationCardSettings2024Mlb014
	| LocationCardSettings2024MumbaiCitysafari001
	| LocationCardSettings2024NycGofest001
	| LocationCardSettings2024SantiagoCitysafari001
	| LocationCardSettings2024SaopauloCitysafari001
	| LocationCardSettings2024SendaiGofest001
	| LocationCardSettings2024SingaporeCitysafari001
	| LocationCardSettings2024SurabayaAiradventures001
	| LocationCardSettings2024TainanCitysafari001
	| LocationCardSettings2024YogyakartaAiradventures001
	| LocationCardSettings2025AmsterdamCitysafari001
	| LocationCardSettings2025AnaheimWorldChampionships001
	| LocationCardSettings2025BangkokCitysafari001
	| LocationCardSettings2025BerlinRoadtrip001
	| LocationCardSettings2025CancunCitysafari001
	| LocationCardSettings2025CherryBlossomFestival
	| LocationCardSettings2025CologneRoadtrip001
	| LocationCardSettings2025GowaNagasaki
	| LocationCardSettings2025HagueRoadtrip001
	| LocationCardSettings2025JangheungSummerFestival
	| LocationCardSettings2025JerseycityGofest001
	| LocationCardSettings2025KrPyeongchangWinterFestival
	| LocationCardSettings2025LondonRoadtrip001
	| LocationCardSettings2025LosangelesGotour001
	| LocationCardSettings2025ManchesterRoadtrip001
	| LocationCardSettings2025NewtaipeicityGotour001
	| LocationCardSettings2025Nfl001
	| LocationCardSettings2025OsakaEvent001
	| LocationCardSettings2025OsakaEvent002
	| LocationCardSettings2025OsakaEvent003
	| LocationCardSettings2025OsakaGofest001
	| LocationCardSettings2025Paris001
	| LocationCardSettings2025Paris002
	| LocationCardSettings2025ParisGofest001
	| LocationCardSettings2025ParisRoadtrip001
	| LocationCardSettings2025TaipeicityAmusementPark
	| LocationCardSettings2025ValenciaCitysafari001
	| LocationCardSettings2025ValenciaRoadtrip001
	| LocationCardSettings2025VancouverCitysafari001
	| LocationCardSettings2026CologneCarnival001
	| LocationCardSettings2026LosangelesGotour001
	| LocationCardSettings2026Npb001
	| LocationCardSettings2026Npb002
	| LocationCardSettings2026Npb003
	| LocationCardSettings2026Npb004
	| LocationCardSettings2026Npb005
	| LocationCardSettings2026Npb006
	| LocationCardSettings2026Npb007
	| LocationCardSettings2026Npb008
	| LocationCardSettings2026Npb009
	| LocationCardSettings2026Npb010
	| LocationCardSettings2026Npb011
	| LocationCardSettings2026Npb012
	| LocationCardSettings2026Npb013
	| LocationCardSettings2026Ppk001
	| LocationCardSettings2026RiodejaneiroCarnival001
	| LocationCardSettings2026TainanGotour001
	| LocationCardSettingsCitysafari2025Buenosaires
	| LocationCardSettingsCitysafari2025Miami
	| LocationCardSettingsCitysafari2025Sydney
	| LocationCardSettingsIdCarFreeDay
	| LocationCardSettingsJejuStampRally
	| LocationCardSettingsPokelidAichi
	| LocationCardSettingsPokelidAkita
	| LocationCardSettingsPokelidAomori
	| LocationCardSettingsPokelidChiba
	| LocationCardSettingsPokelidEhime
	| LocationCardSettingsPokelidFukui
	| LocationCardSettingsPokelidFukuoka
	| LocationCardSettingsPokelidFukushima
	| LocationCardSettingsPokelidGifu
	| LocationCardSettingsPokelidHokkaido
	| LocationCardSettingsPokelidHyogo
	| LocationCardSettingsPokelidIbaraki
	| LocationCardSettingsPokelidIshikawa
	| LocationCardSettingsPokelidIwate
	| LocationCardSettingsPokelidKagawa
	| LocationCardSettingsPokelidKagoshima
	| LocationCardSettingsPokelidKanagawa
	| LocationCardSettingsPokelidKochi
	| LocationCardSettingsPokelidKyoto
	| LocationCardSettingsPokelidMie
	| LocationCardSettingsPokelidMiyagi
	| LocationCardSettingsPokelidMiyazaki
	| LocationCardSettingsPokelidNagasaki
	| LocationCardSettingsPokelidNara
	| LocationCardSettingsPokelidNiigata
	| LocationCardSettingsPokelidOkayama
	| LocationCardSettingsPokelidOkinawa
	| LocationCardSettingsPokelidOsaka
	| LocationCardSettingsPokelidSaga
	| LocationCardSettingsPokelidSaitama
	| LocationCardSettingsPokelidShiga
	| LocationCardSettingsPokelidShimane
	| LocationCardSettingsPokelidShizuoka
	| LocationCardSettingsPokelidTochigi
	| LocationCardSettingsPokelidTokushima
	| LocationCardSettingsPokelidTokyo
	| LocationCardSettingsPokelidTottori
	| LocationCardSettingsPokelidToyama
	| LocationCardSettingsPokelidWakayama
	| LocationCardSettingsPokelidYamagata
	| LocationCardSettingsPokelidYamaguchi
	| LocationCardSettingsSpecialbackground2024Decembercdrecap
	| LocationCardSettingsSpecialbackground2024GlobalGofestRadiance001
	| LocationCardSettingsSpecialbackground2024GlobalGofestUmbra001
	| LocationCardSettingsSpecialbackground2024GlobalGowa001
	| LocationCardSettingsSpecialbackground20259thanniversary
	| LocationCardSettingsSpecialbackground2025GlobalEnigma001
	| LocationCardSettingsSpecialbackground2025GlobalGofestDd001
	| LocationCardSettingsSpecialbackground2025GlobalGofestRegi001
	| LocationCardSettingsSpecialbackground2025GlobalGofestRegi002
	| LocationCardSettingsSpecialbackground2025GlobalGofestRegi003
	| LocationCardSettingsSpecialbackground2025GlobalGofestRegi004
	| LocationCardSettingsSpecialbackground2025GlobalGofestRegi005
	| LocationCardSettingsSpecialbackground2025GlobalGofestRegi006
	| LocationCardSettingsSpecialbackground2025GlobalGofestShield001
	| LocationCardSettingsSpecialbackground2025GlobalGofestShieldCrowned001
	| LocationCardSettingsSpecialbackground2025GlobalGofestSword001
	| LocationCardSettingsSpecialbackground2025GlobalGofestSwordCrowned001
	| LocationCardSettingsSpecialbackground2025GlobalGotourBlack001
	| LocationCardSettingsSpecialbackground2025GlobalGotourBlackWhite001
	| LocationCardSettingsSpecialbackground2025GlobalGotourWhite001
	| LocationCardSettingsSpecialbackground2025GowaGlobal
	| LocationCardSettingsSpecialbackground2025S18
	| LocationCardSettingsSpecialbackground2025Season17
	| LocationCardSettingsSpecialbackground2025Season19
	| LocationCardSettingsSpecialbackground2025Season20
	| LocationCardSettingsSpecialbackground2026Communityday
	| LocationCardSettingsSpecialbackground2026GlobalDiamond001
	| LocationCardSettingsSpecialbackground2026GlobalGofest001
	| LocationCardSettingsSpecialbackground2026GlobalGold001
	| LocationCardSettingsSpecialbackground2026GlobalMega001
	| LocationCardSettingsSpecialbackground2026GlobalPearl001
	| LocationCardSettingsSpecialbackground2026GlobalRuby001
	| LocationCardSettingsSpecialbackground2026GlobalSapphire001
	| LocationCardSettingsSpecialbackground2026GlobalSilver001
	| LocationCardSettingsSpecialbackground2026GlobalX001
	| LocationCardSettingsSpecialbackground2026GlobalY001
	| LocationCardSettingsSpecialbackgroundCon2025
	| LocationCardSettingsSpecialbackgroundExtra202501
	| LocationCardSettingsSpecialbackgroundExtra202502
	| LocationCardSettingsSpecialbackgroundKr2025Lotte01
	| LocationCardSettingsSpecialbackgroundObservatoryExhibitionTour
	| LocationCardSettingsSpecialbackgroundPok2026
	| LocationCardSettingsSpecialbackgroundTeamBlue
	| LocationCardSettingsSpecialbackgroundTeamRed
	| LocationCardSettingsSpecialbackgroundTeamYellow
	| LocationCardSettingsSpecialBackground2024GlobalGofestMoonUltraWormhole001
	| LocationCardSettingsSpecialBackground2024GlobalGofestSunUltraWormhole001
	| LocationCardSettingsSpecialBackground2024GlobalGofestUltraWormhole001;

export type LocationCardSettingsTemplateID = LocationCardSettingsMasterfileEntry["templateId"];
