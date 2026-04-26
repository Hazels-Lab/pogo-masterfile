// Generated from Pokémon GO masterfile — group "locationCardSettings", 181 entries.

export interface LocationCardSettings<
	TemplateID extends string = string,
	TData extends LocationCardSettingsData = LocationCardSettingsData,
> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		locationCardSettings: TData;
	};
}

export interface LocationCardSettingsData {
	cardType?: "LOCATION_CARD" | "SPECIAL_BACKGROUND";
	imageUrl: string;
	locationCard: number | string;
	vfxAddress?:
		| "bgfx_9thAnni"
		| "bgfx_Black"
		| "bgfx_CommunityDay_2026"
		| "bgfx_DelightfulDays"
		| "bgfx_Diamond"
		| "bgfx_Fusion"
		| "bgfx_goFest_2025_eternatus"
		| "bgfx_goFest_2025_rock_001"
		| "bgfx_goFest_2025_rock_002"
		| "bgfx_goFest_2025_rock_003"
		| "bgfx_goFest_2025_rock_004"
		| "bgfx_goFest_2025_rock_005"
		| "bgfx_goFest_2025_rock_006"
		| "bgfx_goFest_2025_shield"
		| "bgfx_goFest_2025_shield_c"
		| "bgfx_goFest_2025_sword"
		| "bgfx_goFest_2025_sword_c"
		| "bgfx_Gold"
		| "bgfx_gowa"
		| "bgfx_holi_2026"
		| "bgfx_Mega"
		| "bgfx_MightAndMastery"
		| "bgfx_Moon"
		| "bgfx_N"
		| "bgfx_Pearl"
		| "bgfx_Ruby"
		| "bgfx_Sapphire"
		| "bgfx_Silver"
		| "bgfx_Sun"
		| "bgfx_TalesOfTransformation"
		| "bgfx_TeamLeader_blue"
		| "bgfx_TeamLeader_red"
		| "bgfx_TeamLeader_yellow"
		| "bgfx_UltraWormhole"
		| "bgfx_White"
		| "bgfx_X"
		| "bgfx_Y";
}

export type LocationCardSettings2023BarcelonaCitysafari001 = LocationCardSettings<
	"LC_2023_BARCELONA_CITYSAFARI_001",
	{
		imageUrl: "lc_CitySafari2023_barcelona_2023";
		locationCard: "LC_2023_BARCELONA_CITYSAFARI_001";
	}
>;
export type LocationCardSettings2023JejuAiradventures001 = LocationCardSettings<
	"LC_2023_JEJU_AIRADVENTURES_001",
	{
		imageUrl: "lc_JejuAirAdv2023";
		locationCard: "LC_2023_JEJU_AIRADVENTURES_001";
	}
>;
export type LocationCardSettings2023LasvegasGotour001 = LocationCardSettings<
	"LC_2023_LASVEGAS_GOTOUR_001",
	{
		imageUrl: "lc_GoTour2023";
		locationCard: "LC_2023_LASVEGAS_GOTOUR_001";
	}
>;
export type LocationCardSettings2023LondonGofest001 = LocationCardSettings<
	"LC_2023_LONDON_GOFEST_001",
	{
		imageUrl: "lc_GoFest2023_london";
		locationCard: "LC_2023_LONDON_GOFEST_001";
	}
>;
export type LocationCardSettings2023MexicocityCitysafari001 = LocationCardSettings<
	"LC_2023_MEXICOCITY_CITYSAFARI_001",
	{
		imageUrl: "lc_CitySafari2023_mexicoCity_2023";
		locationCard: "LC_2023_MEXICOCITY_CITYSAFARI_001";
	}
>;
export type LocationCardSettings2023NycGofest001 = LocationCardSettings<
	"LC_2023_NYC_GOFEST_001",
	{
		imageUrl: "lc_GoFest2023_newyork";
		locationCard: "LC_2023_NYC_GOFEST_001";
	}
>;
export type LocationCardSettings2023OsakaGofest001 = LocationCardSettings<
	"LC_2023_OSAKA_GOFEST_001",
	{
		imageUrl: "lc_GoFest2023_osaka";
		locationCard: "LC_2023_OSAKA_GOFEST_001";
	}
>;
export type LocationCardSettings2023SeoulCitysafari001 = LocationCardSettings<
	"LC_2023_SEOUL_CITYSAFARI_001",
	{
		imageUrl: "lc_CitySafari2023_seoul_2023";
		locationCard: "LC_2023_SEOUL_CITYSAFARI_001";
	}
>;
export type LocationCardSettings2024BaliAiradventures001 = LocationCardSettings<
	"LC_2024_BALI_AIRADVENTURES_001",
	{
		imageUrl: "lc_AirAdv2024_bali";
		locationCard: "LC_2024_BALI_AIRADVENTURES_001";
	}
>;
export type LocationCardSettings2024FukuokaGowa001 = LocationCardSettings<
	"LC_2024_FUKUOKA_GOWA_001",
	{
		imageUrl: "lc_GOWA_fukuoka";
		locationCard: "LC_2024_FUKUOKA_GOWA_001";
	}
>;
export type LocationCardSettings2024HongkongCitysafari001 = LocationCardSettings<
	"LC_2024_HONGKONG_CITYSAFARI_001",
	{
		imageUrl: "lc_CitySafari2024_hongkong";
		locationCard: "LC_2024_HONGKONG_CITYSAFARI_001";
	}
>;
export type LocationCardSettings2024HonoluluWorldChampionships001 = LocationCardSettings<
	"LC_2024_HONOLULU_WORLD_CHAMPIONSHIPS_001",
	{
		imageUrl: "lc_wcs2024";
		locationCard: "LC_2024_HONOLULU_WORLD_CHAMPIONSHIPS_001";
	}
>;
export type LocationCardSettings2024IncheonSafariZone001 = LocationCardSettings<
	"LC_2024_INCHEON_SAFARI_ZONE_001",
	{
		imageUrl: "lc_CitySafari2024_incheon";
		locationCard: "LC_2024_INCHEON_SAFARI_ZONE_001";
	}
>;
export type LocationCardSettings2024JakartaAiradventures001 = LocationCardSettings<
	"LC_2024_JAKARTA_AIRADVENTURES_001",
	{
		imageUrl: "lc_AirAdv2024_jakarta";
		locationCard: "LC_2024_JAKARTA_AIRADVENTURES_001";
	}
>;
export type LocationCardSettings2024LosangelesGotour001 = LocationCardSettings<
	"LC_2024_LOSANGELES_GOTOUR_001",
	{
		imageUrl: "lc_GoTour2024_losAngeles";
		locationCard: "LC_2024_LOSANGELES_GOTOUR_001";
	}
>;
export type LocationCardSettings2024MadridGofest001 = LocationCardSettings<
	"LC_2024_MADRID_GOFEST_001",
	{
		cardType: "LOCATION_CARD";
		imageUrl: "lc_GoFest2024_madrid";
		locationCard: "LC_2024_MADRID_GOFEST_001";
	}
>;
export type LocationCardSettings2024MilanCitysafari001 = LocationCardSettings<
	"LC_2024_MILAN_CITYSAFARI_001",
	{
		imageUrl: "lc_CitySafari2024_milan";
		locationCard: "LC_2024_MILAN_CITYSAFARI_001";
	}
>;
export type LocationCardSettings2024Mlb001 = LocationCardSettings<
	"LC_2024_MLB_001",
	{
		imageUrl: "lc_MLB_marlins";
		locationCard: "LC_2024_MLB_001";
	}
>;
export type LocationCardSettings2024Mlb002 = LocationCardSettings<
	"LC_2024_MLB_002",
	{
		imageUrl: "lc_MLB_mariners";
		locationCard: "LC_2024_MLB_002";
	}
>;
export type LocationCardSettings2024Mlb003 = LocationCardSettings<
	"LC_2024_MLB_003",
	{
		imageUrl: "lc_MLB_clevelandGuardians";
		locationCard: "LC_2024_MLB_003";
	}
>;
export type LocationCardSettings2024Mlb004 = LocationCardSettings<
	"LC_2024_MLB_004",
	{
		imageUrl: "lc_MLB_tampaBayRays";
		locationCard: "LC_2024_MLB_004";
	}
>;
export type LocationCardSettings2024Mlb005 = LocationCardSettings<
	"LC_2024_MLB_005",
	{
		imageUrl: "lc_MLB_milwaukeeBrewers";
		locationCard: "LC_2024_MLB_005";
	}
>;
export type LocationCardSettings2024Mlb006 = LocationCardSettings<
	"LC_2024_MLB_006",
	{
		imageUrl: "lc_MLB_washingtonNationals";
		locationCard: "LC_2024_MLB_006";
	}
>;
export type LocationCardSettings2024Mlb007 = LocationCardSettings<
	"LC_2024_MLB_007",
	{
		imageUrl: "lc_MLB_arizonaDiamondbacks";
		locationCard: "LC_2024_MLB_007";
	}
>;
export type LocationCardSettings2024Mlb008 = LocationCardSettings<
	"LC_2024_MLB_008",
	{
		imageUrl: "lc_MLB_chicagoWhiteSox";
		locationCard: "LC_2024_MLB_008";
	}
>;
export type LocationCardSettings2024Mlb009 = LocationCardSettings<
	"LC_2024_MLB_009",
	{
		imageUrl: "lc_MLB_baltimoreOrioles";
		locationCard: "LC_2024_MLB_009";
	}
>;
export type LocationCardSettings2024Mlb010 = LocationCardSettings<
	"LC_2024_MLB_010",
	{
		imageUrl: "lc_MLB_newyorkMets";
		locationCard: "LC_2024_MLB_010";
	}
>;
export type LocationCardSettings2024Mlb011 = LocationCardSettings<
	"LC_2024_MLB_011",
	{
		imageUrl: "lc_MLB_sanFranciscoGiants";
		locationCard: "LC_2024_MLB_011";
	}
>;
export type LocationCardSettings2024Mlb012 = LocationCardSettings<
	"LC_2024_MLB_012",
	{
		imageUrl: "lc_MLB_bostonRedSox";
		locationCard: "LC_2024_MLB_012";
	}
>;
export type LocationCardSettings2024Mlb013 = LocationCardSettings<
	"LC_2024_MLB_013",
	{
		imageUrl: "lc_MLB_minnesotaTwins";
		locationCard: "LC_2024_MLB_013";
	}
>;
export type LocationCardSettings2024Mlb014 = LocationCardSettings<
	"LC_2024_MLB_014",
	{
		imageUrl: "lc_MLB_texasRangers";
		locationCard: "LC_2024_MLB_014";
	}
>;
export type LocationCardSettings2024MumbaiCitysafari001 = LocationCardSettings<
	"LC_2024_MUMBAI_CITYSAFARI_001",
	{
		imageUrl: "lc_CitySafari2024_mumbai";
		locationCard: "LC_2024_MUMBAI_CITYSAFARI_001";
	}
>;
export type LocationCardSettings2024NycGofest001 = LocationCardSettings<
	"LC_2024_NYC_GOFEST_001",
	{
		cardType: "LOCATION_CARD";
		imageUrl: "lc_GoFest2024_newyork";
		locationCard: "LC_2024_NYC_GOFEST_001";
	}
>;
export type LocationCardSettings2024SantiagoCitysafari001 = LocationCardSettings<
	"LC_2024_SANTIAGO_CITYSAFARI_001",
	{
		imageUrl: "lc_CitySafari2024_santiago";
		locationCard: "LC_2024_SANTIAGO_CITYSAFARI_001";
	}
>;
export type LocationCardSettings2024SaopauloCitysafari001 = LocationCardSettings<
	"LC_2024_SAOPAULO_CITYSAFARI_001",
	{
		imageUrl: "lc_CitySafari2024_saopaulo";
		locationCard: "LC_2024_SAOPAULO_CITYSAFARI_001";
	}
>;
export type LocationCardSettings2024SendaiGofest001 = LocationCardSettings<
	"LC_2024_SENDAI_GOFEST_001",
	{
		cardType: "LOCATION_CARD";
		imageUrl: "lc_GoFest2024_sendai";
		locationCard: "LC_2024_SENDAI_GOFEST_001";
	}
>;
export type LocationCardSettings2024SingaporeCitysafari001 = LocationCardSettings<
	"LC_2024_SINGAPORE_CITYSAFARI_001",
	{
		imageUrl: "lc_CitySafari2024_singapore";
		locationCard: "LC_2024_SINGAPORE_CITYSAFARI_001";
	}
>;
export type LocationCardSettings2024SurabayaAiradventures001 = LocationCardSettings<
	"LC_2024_SURABAYA_AIRADVENTURES_001",
	{
		imageUrl: "lc_AirAdv2024_surabaya";
		locationCard: "LC_2024_SURABAYA_AIRADVENTURES_001";
	}
>;
export type LocationCardSettings2024TainanCitysafari001 = LocationCardSettings<
	"LC_2024_TAINAN_CITYSAFARI_001",
	{
		imageUrl: "lc_CitySafari2024_tainan";
		locationCard: "LC_2024_TAINAN_CITYSAFARI_001";
	}
>;
export type LocationCardSettings2024YogyakartaAiradventures001 = LocationCardSettings<
	"LC_2024_YOGYAKARTA_AIRADVENTURES_001",
	{
		imageUrl: "lc_AirAdv2024_yogyakarta";
		locationCard: "LC_2024_YOGYAKARTA_AIRADVENTURES_001";
	}
>;
export type LocationCardSettings2025AmsterdamCitysafari001 = LocationCardSettings<
	"LC_2025_AMSTERDAM_CITYSAFARI_001",
	{
		imageUrl: "lc_citysafari2025_amsterdam";
		locationCard: "LC_2025_AMSTERDAM_CITYSAFARI_001";
	}
>;
export type LocationCardSettings2025AnaheimWorldChampionships001 = LocationCardSettings<
	"LC_2025_ANAHEIM_WORLD_CHAMPIONSHIPS_001",
	{
		imageUrl: "lc_Wcs2025_anaheim";
		locationCard: "LC_2025_ANAHEIM_WORLD_CHAMPIONSHIPS_001";
	}
>;
export type LocationCardSettings2025BangkokCitysafari001 = LocationCardSettings<
	"LC_2025_BANGKOK_CITYSAFARI_001",
	{
		imageUrl: "lc_citysafari2025_bangkok";
		locationCard: "LC_2025_BANGKOK_CITYSAFARI_001";
	}
>;
export type LocationCardSettings2025BerlinRoadtrip001 = LocationCardSettings<
	"LC_2025_BERLIN_ROADTRIP_001",
	{
		imageUrl: "lc_roadtrip2025_berlin";
		locationCard: "LC_2025_BERLIN_ROADTRIP_001";
	}
>;
export type LocationCardSettings2025CancunCitysafari001 = LocationCardSettings<
	"LC_2025_CANCUN_CITYSAFARI_001",
	{
		imageUrl: "lc_citysafari2025_cancun";
		locationCard: "LC_2025_CANCUN_CITYSAFARI_001";
	}
>;
export type LocationCardSettings2025CherryBlossomFestival = LocationCardSettings<
	"LC_2025_CHERRY_BLOSSOM_FESTIVAL",
	{
		imageUrl: "lc_CherryBlossomFest2025_yeouido";
		locationCard: "LC_2025_CHERRY_BLOSSOM_FESTIVAL";
	}
>;
export type LocationCardSettings2025CologneRoadtrip001 = LocationCardSettings<
	"LC_2025_COLOGNE_ROADTRIP_001",
	{
		imageUrl: "lc_roadtrip2025_cologne";
		locationCard: "LC_2025_COLOGNE_ROADTRIP_001";
	}
>;
export type LocationCardSettings2025GowaNagasaki = LocationCardSettings<
	"LC_2025_GOWA_NAGASAKI",
	{
		imageUrl: "lc_nagasaki2025";
		locationCard: "LC_2025_GOWA_NAGASAKI";
	}
>;
export type LocationCardSettings2025HagueRoadtrip001 = LocationCardSettings<
	"LC_2025_HAGUE_ROADTRIP_001",
	{
		imageUrl: "lc_roadtrip2025_hague";
		locationCard: "LC_2025_HAGUE_ROADTRIP_001";
	}
>;
export type LocationCardSettings2025JangheungSummerFestival = LocationCardSettings<
	"LC_2025_JANGHEUNG_SUMMER_FESTIVAL",
	{
		imageUrl: "lc_Jangheung_Water_Festival_2025";
		locationCard: "LC_2025_JANGHEUNG_SUMMER_FESTIVAL";
	}
>;
export type LocationCardSettings2025JerseycityGofest001 = LocationCardSettings<
	"LC_2025_JERSEYCITY_GOFEST_001",
	{
		cardType: "LOCATION_CARD";
		imageUrl: "lc_GoFest2025_jerseycity";
		locationCard: "LC_2025_JERSEYCITY_GOFEST_001";
	}
>;
export type LocationCardSettings2025KrPyeongchangWinterFestival = LocationCardSettings<
	"LC_2025_KR_PYEONGCHANG_WINTER_FESTIVAL",
	{
		imageUrl: "lc_2025_kr_pyeongchangWinterFestival";
		locationCard: "LC_2025_KR_PYEONGCHANG_WINTER_FESTIVAL";
	}
>;
export type LocationCardSettings2025LondonRoadtrip001 = LocationCardSettings<
	"LC_2025_LONDON_ROADTRIP_001",
	{
		imageUrl: "lc_roadtrip2025_london";
		locationCard: "LC_2025_LONDON_ROADTRIP_001";
	}
>;
export type LocationCardSettings2025LosangelesGotour001 = LocationCardSettings<
	"LC_2025_LOSANGELES_GOTOUR_001",
	{
		cardType: "LOCATION_CARD";
		imageUrl: "lc_GoTour2025_losAngeles";
		locationCard: "LC_2025_LOSANGELES_GOTOUR_001";
	}
>;
export type LocationCardSettings2025ManchesterRoadtrip001 = LocationCardSettings<
	"LC_2025_MANCHESTER_ROADTRIP_001",
	{
		imageUrl: "lc_roadtrip2025_manchester";
		locationCard: "LC_2025_MANCHESTER_ROADTRIP_001";
	}
>;
export type LocationCardSettings2025NewtaipeicityGotour001 = LocationCardSettings<
	"LC_2025_NEWTAIPEICITY_GOTOUR_001",
	{
		cardType: "LOCATION_CARD";
		imageUrl: "lc_GoTour2025_newTaipeiCity";
		locationCard: "LC_2025_NEWTAIPEICITY_GOTOUR_001";
	}
>;
export type LocationCardSettings2025Nfl001 = LocationCardSettings<
	"LC_2025_NFL_001",
	{
		imageUrl: "lc_NFL_cardinals";
		locationCard: "LC_2025_NFL_001";
	}
>;
export type LocationCardSettings2025OsakaEvent001 = LocationCardSettings<
	"LC_2025_OSAKA_EVENT_001",
	{
		imageUrl: "lc_OsakaEvent2025_01";
		locationCard: "LC_2025_OSAKA_EVENT_001";
	}
>;
export type LocationCardSettings2025OsakaEvent002 = LocationCardSettings<
	"LC_2025_OSAKA_EVENT_002",
	{
		imageUrl: "lc_OsakaEvent2025_02";
		locationCard: "LC_2025_OSAKA_EVENT_002";
	}
>;
export type LocationCardSettings2025OsakaEvent003 = LocationCardSettings<
	"LC_2025_OSAKA_EVENT_003",
	{
		imageUrl: "lc_OsakaEvent2025_03";
		locationCard: "LC_2025_OSAKA_EVENT_003";
	}
>;
export type LocationCardSettings2025OsakaGofest001 = LocationCardSettings<
	"LC_2025_OSAKA_GOFEST_001",
	{
		cardType: "LOCATION_CARD";
		imageUrl: "lc_GoFest2025_osaka";
		locationCard: "LC_2025_OSAKA_GOFEST_001";
	}
>;
export type LocationCardSettings2025Paris001 = LocationCardSettings<
	"LC_2025_PARIS_001",
	{
		imageUrl: "lc_Paris2025_01";
		locationCard: "LC_2025_PARIS_001";
	}
>;
export type LocationCardSettings2025Paris002 = LocationCardSettings<
	"LC_2025_PARIS_002",
	{
		imageUrl: "lc_Paris2025_02";
		locationCard: "LC_2025_PARIS_002";
	}
>;
export type LocationCardSettings2025ParisGofest001 = LocationCardSettings<
	"LC_2025_PARIS_GOFEST_001",
	{
		cardType: "LOCATION_CARD";
		imageUrl: "lc_GoFest2025_paris";
		locationCard: "LC_2025_PARIS_GOFEST_001";
	}
>;
export type LocationCardSettings2025ParisRoadtrip001 = LocationCardSettings<
	"LC_2025_PARIS_ROADTRIP_001",
	{
		imageUrl: "lc_roadtrip2025_paris";
		locationCard: "LC_2025_PARIS_ROADTRIP_001";
	}
>;
export type LocationCardSettings2025TaipeicityAmusementPark = LocationCardSettings<
	"LC_2025_TAIPEICITY_AMUSEMENT_PARK",
	{
		imageUrl: "lc_taipeiAmusementPark_2025";
		locationCard: "LC_2025_TAIPEICITY_AMUSEMENT_PARK";
	}
>;
export type LocationCardSettings2025ValenciaCitysafari001 = LocationCardSettings<
	"LC_2025_VALENCIA_CITYSAFARI_001",
	{
		imageUrl: "lc_citysafari2025_valencia";
		locationCard: "LC_2025_VALENCIA_CITYSAFARI_001";
	}
>;
export type LocationCardSettings2025ValenciaRoadtrip001 = LocationCardSettings<
	"LC_2025_VALENCIA_ROADTRIP_001",
	{
		imageUrl: "lc_roadtrip2025_valencia";
		locationCard: "LC_2025_VALENCIA_ROADTRIP_001";
	}
>;
export type LocationCardSettings2025VancouverCitysafari001 = LocationCardSettings<
	"LC_2025_VANCOUVER_CITYSAFARI_001",
	{
		imageUrl: "lc_citysafari2025_vancouver";
		locationCard: "LC_2025_VANCOUVER_CITYSAFARI_001";
	}
>;
export type LocationCardSettings2026CologneCarnival001 = LocationCardSettings<
	"LC_2026_COLOGNE_CARNIVAL_001",
	{
		imageUrl: "lc_carnivalFlamigo_cologne_2026";
		locationCard: "LC_2026_COLOGNE_CARNIVAL_001";
	}
>;
export type LocationCardSettings2026LosangelesGotour001 = LocationCardSettings<
	"LC_2026_LOSANGELES_GOTOUR_001",
	{
		cardType: "LOCATION_CARD";
		imageUrl: "lc_GoTour2026_losAngeles";
		locationCard: "LC_2026_LOSANGELES_GOTOUR_001";
	}
>;
export type LocationCardSettings2026Npb001 = LocationCardSettings<
	"LC_2026_NPB_001",
	{
		imageUrl: "lc_2026_NPB_yokohamaStadium";
		locationCard: "LC_2026_NPB_001";
	}
>;
export type LocationCardSettings2026Npb002 = LocationCardSettings<
	"LC_2026_NPB_002",
	{
		imageUrl: "lc_2026_NPB_yomiuriGiants";
		locationCard: "LC_2026_NPB_002";
	}
>;
export type LocationCardSettings2026Npb003 = LocationCardSettings<
	"LC_2026_NPB_003",
	{
		imageUrl: "lc_2026_ppk_001";
		locationCard: "LC_2026_NPB_003";
	}
>;
export type LocationCardSettings2026Npb004 = LocationCardSettings<
	"LC_2026_NPB_004",
	{
		imageUrl: "lc_2026_NPB_koshienHanshinTigers";
		locationCard: "LC_2026_NPB_004";
	}
>;
export type LocationCardSettings2026Npb005 = LocationCardSettings<
	"LC_2026_NPB_005",
	{
		imageUrl: "lc_2026_NPB_rakutenEagles";
		locationCard: "LC_2026_NPB_005";
	}
>;
export type LocationCardSettings2026Npb006 = LocationCardSettings<
	"LC_2026_NPB_006",
	{
		imageUrl: "lc_2026_NPB_hiroshimaCarp";
		locationCard: "LC_2026_NPB_006";
	}
>;
export type LocationCardSettings2026Npb007 = LocationCardSettings<
	"LC_2026_NPB_007",
	{
		imageUrl: "lc_2026_ppk_001";
		locationCard: "LC_2026_NPB_007";
	}
>;
export type LocationCardSettings2026Npb008 = LocationCardSettings<
	"LC_2026_NPB_008",
	{
		imageUrl: "lc_2026_NPB_softbankHawks";
		locationCard: "LC_2026_NPB_008";
	}
>;
export type LocationCardSettings2026Npb009 = LocationCardSettings<
	"LC_2026_NPB_009",
	{
		imageUrl: "lc_2026_NPB_kyocera";
		locationCard: "LC_2026_NPB_009";
	}
>;
export type LocationCardSettings2026Npb010 = LocationCardSettings<
	"LC_2026_NPB_010",
	{
		imageUrl: "lc_2026_NPB_belluna";
		locationCard: "LC_2026_NPB_010";
	}
>;
export type LocationCardSettings2026Npb011 = LocationCardSettings<
	"LC_2026_NPB_011",
	{
		imageUrl: "lc_2026_NPB_zozoMarine";
		locationCard: "LC_2026_NPB_011";
	}
>;
export type LocationCardSettings2026Npb012 = LocationCardSettings<
	"LC_2026_NPB_012",
	{
		imageUrl: "lc_2026_ppk_001";
		locationCard: "LC_2026_NPB_012";
	}
>;
export type LocationCardSettings2026Npb013 = LocationCardSettings<
	"LC_2026_NPB_013",
	{
		imageUrl: "lc_2026_ppk_001";
		locationCard: "LC_2026_NPB_013";
	}
>;
export type LocationCardSettings2026Ppk001 = LocationCardSettings<
	"LC_2026_PPK_001",
	{
		imageUrl: "lc_2026_ppk_001";
		locationCard: "LC_2026_PPK_001";
	}
>;
export type LocationCardSettings2026RiodejaneiroCarnival001 = LocationCardSettings<
	"LC_2026_RIODEJANEIRO_CARNIVAL_001",
	{
		imageUrl: "lc_carnivalFlamigo_rio_2026";
		locationCard: "LC_2026_RIODEJANEIRO_CARNIVAL_001";
	}
>;
export type LocationCardSettings2026TainanGotour001 = LocationCardSettings<
	"LC_2026_TAINAN_GOTOUR_001",
	{
		cardType: "LOCATION_CARD";
		imageUrl: "lc_GoTour2026_tainan";
		locationCard: "LC_2026_TAINAN_GOTOUR_001";
	}
>;
export type LocationCardSettingsCitysafari2025Buenosaires = LocationCardSettings<
	"LC_CITYSAFARI2025_BUENOSAIRES",
	{
		imageUrl: "lc_CitySafari2025_buenosAires";
		locationCard: "LC_CITYSAFARI2025_BUENOSAIRES";
	}
>;
export type LocationCardSettingsCitysafari2025Miami = LocationCardSettings<
	"LC_CITYSAFARI2025_MIAMI",
	{
		imageUrl: "lc_CitySafari2025_miami";
		locationCard: "LC_CITYSAFARI2025_MIAMI";
	}
>;
export type LocationCardSettingsCitysafari2025Sydney = LocationCardSettings<
	"LC_CITYSAFARI2025_SYDNEY",
	{
		imageUrl: "lc_CitySafari2025_sydney";
		locationCard: "LC_CITYSAFARI2025_SYDNEY";
	}
>;
export type LocationCardSettingsIdCarFreeDay = LocationCardSettings<
	"LC_ID_CAR_FREE_DAY",
	{
		imageUrl: "lc_ID_CarFreeDay";
		locationCard: "LC_ID_CAR_FREE_DAY";
	}
>;
export type LocationCardSettingsJejuStampRally = LocationCardSettings<
	"LC_JEJU_STAMP_RALLY",
	{
		imageUrl: "lc_stampRally2025_Jeju";
		locationCard: "LC_JEJU_STAMP_RALLY";
	}
>;
export type LocationCardSettingsPokelidAichi = LocationCardSettings<
	"LC_POKELID_AICHI",
	{
		imageUrl: "lc_pokelid_aichi";
		locationCard: "LC_POKELID_AICHI";
	}
>;
export type LocationCardSettingsPokelidAkita = LocationCardSettings<
	"LC_POKELID_AKITA",
	{
		imageUrl: "lc_pokelid_akita";
		locationCard: "LC_POKELID_AKITA";
	}
>;
export type LocationCardSettingsPokelidAomori = LocationCardSettings<
	"LC_POKELID_AOMORI",
	{
		imageUrl: "lc_pokelid_aomori";
		locationCard: "LC_POKELID_AOMORI";
	}
>;
export type LocationCardSettingsPokelidChiba = LocationCardSettings<
	"LC_POKELID_CHIBA",
	{
		imageUrl: "lc_pokelid_chiba";
		locationCard: "LC_POKELID_CHIBA";
	}
>;
export type LocationCardSettingsPokelidEhime = LocationCardSettings<
	"LC_POKELID_EHIME",
	{
		imageUrl: "lc_pokelid_ehime";
		locationCard: "LC_POKELID_EHIME";
	}
>;
export type LocationCardSettingsPokelidFukui = LocationCardSettings<
	"LC_POKELID_FUKUI",
	{
		imageUrl: "lc_pokelid_fukui";
		locationCard: "LC_POKELID_FUKUI";
	}
>;
export type LocationCardSettingsPokelidFukuoka = LocationCardSettings<
	"LC_POKELID_FUKUOKA",
	{
		imageUrl: "lc_pokelid_fukuoka";
		locationCard: "LC_POKELID_FUKUOKA";
	}
>;
export type LocationCardSettingsPokelidFukushima = LocationCardSettings<
	"LC_POKELID_FUKUSHIMA",
	{
		imageUrl: "lc_pokelid_fukushima";
		locationCard: "LC_POKELID_FUKUSHIMA";
	}
>;
export type LocationCardSettingsPokelidGifu = LocationCardSettings<
	"LC_POKELID_GIFU",
	{
		imageUrl: "lc_pokelid_gifu";
		locationCard: "LC_POKELID_GIFU";
	}
>;
export type LocationCardSettingsPokelidHokkaido = LocationCardSettings<
	"LC_POKELID_HOKKAIDO",
	{
		imageUrl: "lc_pokelid_hokkaido";
		locationCard: "LC_POKELID_HOKKAIDO";
	}
>;
export type LocationCardSettingsPokelidHyogo = LocationCardSettings<
	"LC_POKELID_HYOGO",
	{
		imageUrl: "lc_pokelid_hyogo";
		locationCard: "LC_POKELID_HYOGO";
	}
>;
export type LocationCardSettingsPokelidIbaraki = LocationCardSettings<
	"LC_POKELID_IBARAKI",
	{
		imageUrl: "lc_pokelid_ibaraki";
		locationCard: "LC_POKELID_IBARAKI";
	}
>;
export type LocationCardSettingsPokelidIshikawa = LocationCardSettings<
	"LC_POKELID_ISHIKAWA",
	{
		imageUrl: "lc_pokelid_ishikawa";
		locationCard: "LC_POKELID_ISHIKAWA";
	}
>;
export type LocationCardSettingsPokelidIwate = LocationCardSettings<
	"LC_POKELID_IWATE",
	{
		imageUrl: "lc_pokelid_iwate";
		locationCard: "LC_POKELID_IWATE";
	}
>;
export type LocationCardSettingsPokelidKagawa = LocationCardSettings<
	"LC_POKELID_KAGAWA",
	{
		imageUrl: "lc_pokelid_kagawa";
		locationCard: "LC_POKELID_KAGAWA";
	}
>;
export type LocationCardSettingsPokelidKagoshima = LocationCardSettings<
	"LC_POKELID_KAGOSHIMA",
	{
		imageUrl: "lc_pokelid_kagoshima";
		locationCard: "LC_POKELID_KAGOSHIMA";
	}
>;
export type LocationCardSettingsPokelidKanagawa = LocationCardSettings<
	"LC_POKELID_KANAGAWA",
	{
		imageUrl: "lc_pokelid_kanagawa";
		locationCard: "LC_POKELID_KANAGAWA";
	}
>;
export type LocationCardSettingsPokelidKochi = LocationCardSettings<
	"LC_POKELID_KOCHI",
	{
		imageUrl: "lc_pokelid_kochi";
		locationCard: "LC_POKELID_KOCHI";
	}
>;
export type LocationCardSettingsPokelidKyoto = LocationCardSettings<
	"LC_POKELID_KYOTO",
	{
		imageUrl: "lc_pokelid_kyoto";
		locationCard: "LC_POKELID_KYOTO";
	}
>;
export type LocationCardSettingsPokelidMie = LocationCardSettings<
	"LC_POKELID_MIE",
	{
		imageUrl: "lc_pokelid_mie";
		locationCard: "LC_POKELID_MIE";
	}
>;
export type LocationCardSettingsPokelidMiyagi = LocationCardSettings<
	"LC_POKELID_MIYAGI",
	{
		imageUrl: "lc_pokelid_miyagi";
		locationCard: "LC_POKELID_MIYAGI";
	}
>;
export type LocationCardSettingsPokelidMiyazaki = LocationCardSettings<
	"LC_POKELID_MIYAZAKI",
	{
		imageUrl: "lc_pokelid_miyazaki";
		locationCard: "LC_POKELID_MIYAZAKI";
	}
>;
export type LocationCardSettingsPokelidNagasaki = LocationCardSettings<
	"LC_POKELID_NAGASAKI",
	{
		imageUrl: "lc_pokelid_nagasaki";
		locationCard: "LC_POKELID_NAGASAKI";
	}
>;
export type LocationCardSettingsPokelidNara = LocationCardSettings<
	"LC_POKELID_NARA",
	{
		imageUrl: "lc_pokelid_nara";
		locationCard: "LC_POKELID_NARA";
	}
>;
export type LocationCardSettingsPokelidNiigata = LocationCardSettings<
	"LC_POKELID_NIIGATA",
	{
		imageUrl: "lc_pokelid_niigata";
		locationCard: "LC_POKELID_NIIGATA";
	}
>;
export type LocationCardSettingsPokelidOkayama = LocationCardSettings<
	"LC_POKELID_OKAYAMA",
	{
		imageUrl: "lc_pokelid_okayama";
		locationCard: "LC_POKELID_OKAYAMA";
	}
>;
export type LocationCardSettingsPokelidOkinawa = LocationCardSettings<
	"LC_POKELID_OKINAWA",
	{
		imageUrl: "lc_pokelid_okinawa";
		locationCard: "LC_POKELID_OKINAWA";
	}
>;
export type LocationCardSettingsPokelidOsaka = LocationCardSettings<
	"LC_POKELID_OSAKA",
	{
		imageUrl: "lc_pokelid_osaka";
		locationCard: "LC_POKELID_OSAKA";
	}
>;
export type LocationCardSettingsPokelidSaga = LocationCardSettings<
	"LC_POKELID_SAGA",
	{
		imageUrl: "lc_pokelid_saga";
		locationCard: "LC_POKELID_SAGA";
	}
>;
export type LocationCardSettingsPokelidSaitama = LocationCardSettings<
	"LC_POKELID_SAITAMA",
	{
		imageUrl: "lc_pokelid_saitama";
		locationCard: "LC_POKELID_SAITAMA";
	}
>;
export type LocationCardSettingsPokelidShiga = LocationCardSettings<
	"LC_POKELID_SHIGA",
	{
		imageUrl: "lc_pokelid_shiga";
		locationCard: "LC_POKELID_SHIGA";
	}
>;
export type LocationCardSettingsPokelidShimane = LocationCardSettings<
	"LC_POKELID_SHIMANE",
	{
		imageUrl: "lc_pokelid_shimane";
		locationCard: "LC_POKELID_SHIMANE";
	}
>;
export type LocationCardSettingsPokelidShizuoka = LocationCardSettings<
	"LC_POKELID_SHIZUOKA",
	{
		imageUrl: "lc_pokelid_shizuoka";
		locationCard: "LC_POKELID_SHIZUOKA";
	}
>;
export type LocationCardSettingsPokelidTochigi = LocationCardSettings<
	"LC_POKELID_TOCHIGI",
	{
		imageUrl: "lc_pokelid_tochigi";
		locationCard: "LC_POKELID_TOCHIGI";
	}
>;
export type LocationCardSettingsPokelidTokushima = LocationCardSettings<
	"LC_POKELID_TOKUSHIMA",
	{
		imageUrl: "lc_pokelid_tokushima";
		locationCard: "LC_POKELID_TOKUSHIMA";
	}
>;
export type LocationCardSettingsPokelidTokyo = LocationCardSettings<
	"LC_POKELID_TOKYO",
	{
		imageUrl: "lc_pokelid_tokyo";
		locationCard: "LC_POKELID_TOKYO";
	}
>;
export type LocationCardSettingsPokelidTottori = LocationCardSettings<
	"LC_POKELID_TOTTORI",
	{
		imageUrl: "lc_pokelid_tottori";
		locationCard: "LC_POKELID_TOTTORI";
	}
>;
export type LocationCardSettingsPokelidToyama = LocationCardSettings<
	"LC_POKELID_TOYAMA",
	{
		imageUrl: "lc_pokelid_toyama";
		locationCard: "LC_POKELID_TOYAMA";
	}
>;
export type LocationCardSettingsPokelidWakayama = LocationCardSettings<
	"LC_POKELID_WAKAYAMA",
	{
		imageUrl: "lc_pokelid_wakayama";
		locationCard: "LC_POKELID_WAKAYAMA";
	}
>;
export type LocationCardSettingsPokelidYamagata = LocationCardSettings<
	"LC_POKELID_YAMAGATA",
	{
		imageUrl: "lc_pokelid_yamagata";
		locationCard: "LC_POKELID_YAMAGATA";
	}
>;
export type LocationCardSettingsPokelidYamaguchi = LocationCardSettings<
	"LC_POKELID_YAMAGUCHI",
	{
		imageUrl: "lc_pokelid_yamaguchi";
		locationCard: "LC_POKELID_YAMAGUCHI";
	}
>;
export type LocationCardSettingsSpecialbackground2024Decembercdrecap = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2024_DECEMBERCDRECAP",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_2024_decemberCdRecap";
		locationCard: "LC_SPECIALBACKGROUND_2024_DECEMBERCDRECAP";
	}
>;
export type LocationCardSettingsSpecialbackground2024GlobalGofestRadiance001 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2024_GLOBAL_GOFEST_RADIANCE_001",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_GoFest2024_radiance";
		locationCard: "LC_SPECIALBACKGROUND_2024_GLOBAL_GOFEST_RADIANCE_001";
		vfxAddress: "bgfx_Sun";
	}
>;
export type LocationCardSettingsSpecialbackground2024GlobalGofestUmbra001 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2024_GLOBAL_GOFEST_UMBRA_001",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_GoFest2024_umbra";
		locationCard: "LC_SPECIALBACKGROUND_2024_GLOBAL_GOFEST_UMBRA_001";
		vfxAddress: "bgfx_Moon";
	}
>;
export type LocationCardSettingsSpecialbackground2024GlobalGowa001 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2024_GLOBAL_GOWA_001",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_GOWA_fukuoka";
		locationCard: "LC_SPECIALBACKGROUND_2024_GLOBAL_GOWA_001";
	}
>;
export type LocationCardSettingsSpecialbackground20259thanniversary = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2025_9THANNIVERSARY",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_9thAnniversary";
		locationCard: "LC_SPECIALBACKGROUND_2025_9THANNIVERSARY";
		vfxAddress: "bgfx_9thAnni";
	}
>;
export type LocationCardSettingsSpecialbackground2025GlobalEnigma001 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2025_GLOBAL_ENIGMA_001",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_GoTour2025_black";
		locationCard: "LC_SPECIALBACKGROUND_2025_GLOBAL_ENIGMA_001";
		vfxAddress: "bgfx_N";
	}
>;
export type LocationCardSettingsSpecialbackground2025GlobalGofestDd001 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_DD_001",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_GoFest2025_Eternatus";
		locationCard: "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_DD_001";
		vfxAddress: "bgfx_goFest_2025_eternatus";
	}
>;
export type LocationCardSettingsSpecialbackground2025GlobalGofestRegi001 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_REGI_001",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_GoFest2025";
		locationCard: "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_REGI_001";
		vfxAddress: "bgfx_goFest_2025_rock_001";
	}
>;
export type LocationCardSettingsSpecialbackground2025GlobalGofestRegi002 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_REGI_002",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_GoFest2025";
		locationCard: "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_REGI_002";
		vfxAddress: "bgfx_goFest_2025_rock_002";
	}
>;
export type LocationCardSettingsSpecialbackground2025GlobalGofestRegi003 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_REGI_003",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_GoFest2025";
		locationCard: "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_REGI_003";
		vfxAddress: "bgfx_goFest_2025_rock_003";
	}
>;
export type LocationCardSettingsSpecialbackground2025GlobalGofestRegi004 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_REGI_004",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_GoFest2025";
		locationCard: "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_REGI_004";
		vfxAddress: "bgfx_goFest_2025_rock_004";
	}
>;
export type LocationCardSettingsSpecialbackground2025GlobalGofestRegi005 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_REGI_005",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_GoFest2025";
		locationCard: "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_REGI_005";
		vfxAddress: "bgfx_goFest_2025_rock_005";
	}
>;
export type LocationCardSettingsSpecialbackground2025GlobalGofestRegi006 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_REGI_006",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_GoFest2025";
		locationCard: "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_REGI_006";
		vfxAddress: "bgfx_goFest_2025_rock_006";
	}
>;
export type LocationCardSettingsSpecialbackground2025GlobalGofestShield001 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_SHIELD_001",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_GoTour2025_black";
		locationCard: "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_SHIELD_001";
		vfxAddress: "bgfx_goFest_2025_shield";
	}
>;
export type LocationCardSettingsSpecialbackground2025GlobalGofestShieldCrowned001 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_SHIELD_CROWNED_001",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_GoTour2025_black";
		locationCard: "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_SHIELD_CROWNED_001";
		vfxAddress: "bgfx_goFest_2025_shield_c";
	}
>;
export type LocationCardSettingsSpecialbackground2025GlobalGofestSword001 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_SWORD_001",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_GoTour2025_black";
		locationCard: "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_SWORD_001";
		vfxAddress: "bgfx_goFest_2025_sword";
	}
>;
export type LocationCardSettingsSpecialbackground2025GlobalGofestSwordCrowned001 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_SWORD_CROWNED_001",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_GoTour2025_black";
		locationCard: "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_SWORD_CROWNED_001";
		vfxAddress: "bgfx_goFest_2025_sword_c";
	}
>;
export type LocationCardSettingsSpecialbackground2025GlobalGotourBlack001 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2025_GLOBAL_GOTOUR_BLACK_001",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_GoTour2025_black";
		locationCard: "LC_SPECIALBACKGROUND_2025_GLOBAL_GOTOUR_BLACK_001";
		vfxAddress: "bgfx_Black";
	}
>;
export type LocationCardSettingsSpecialbackground2025GlobalGotourBlackWhite001 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2025_GLOBAL_GOTOUR_BLACK_WHITE_001",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_GoTour2025_black";
		locationCard: "LC_SPECIALBACKGROUND_2025_GLOBAL_GOTOUR_BLACK_WHITE_001";
		vfxAddress: "bgfx_Fusion";
	}
>;
export type LocationCardSettingsSpecialbackground2025GlobalGotourWhite001 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2025_GLOBAL_GOTOUR_WHITE_001",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_GoTour2025_black";
		locationCard: "LC_SPECIALBACKGROUND_2025_GLOBAL_GOTOUR_WHITE_001";
		vfxAddress: "bgfx_White";
	}
>;
export type LocationCardSettingsSpecialbackground2025GowaGlobal = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2025_GOWA_GLOBAL",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_gowa2025_global";
		locationCard: "LC_SPECIALBACKGROUND_2025_GOWA_GLOBAL";
		vfxAddress: "bgfx_gowa";
	}
>;
export type LocationCardSettingsSpecialbackground2025S18 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2025_S18",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_Season18_MightAndMastery";
		locationCard: "LC_SPECIALBACKGROUND_2025_S18";
		vfxAddress: "bgfx_MightAndMastery";
	}
>;
export type LocationCardSettingsSpecialbackground2025Season17 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2025_SEASON17",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_Season17_DuelDestiny";
		locationCard: "LC_SPECIALBACKGROUND_2025_SEASON17";
	}
>;
export type LocationCardSettingsSpecialbackground2025Season19 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2025_SEASON19",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_Season19_DelightfulDays";
		locationCard: "LC_SPECIALBACKGROUND_2025_SEASON19";
		vfxAddress: "bgfx_DelightfulDays";
	}
>;
export type LocationCardSettingsSpecialbackground2025Season20 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2025_SEASON20",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_Season20_TalesOfTransformation";
		locationCard: "LC_SPECIALBACKGROUND_2025_SEASON20";
		vfxAddress: "bgfx_TalesOfTransformation";
	}
>;
export type LocationCardSettingsSpecialbackground2026Communityday = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2026_COMMUNITYDAY",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_Community_2026";
		locationCard: "LC_SPECIALBACKGROUND_2026_COMMUNITYDAY";
		vfxAddress: "bgfx_CommunityDay_2026";
	}
>;
export type LocationCardSettingsSpecialbackground2026GlobalDiamond001 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2026_GLOBAL_DIAMOND_001",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_GoTour2026_diamond";
		locationCard: "LC_SPECIALBACKGROUND_2026_GLOBAL_DIAMOND_001";
		vfxAddress: "bgfx_Diamond";
	}
>;
export type LocationCardSettingsSpecialbackground2026GlobalGofest001 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2026_GLOBAL_GOFEST_001",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_GoTour2026_mega";
		locationCard: 248;
	}
>;
export type LocationCardSettingsSpecialbackground2026GlobalGold001 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2026_GLOBAL_GOLD_001",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_GoTour2026_gold";
		locationCard: "LC_SPECIALBACKGROUND_2026_GLOBAL_GOLD_001";
		vfxAddress: "bgfx_Gold";
	}
>;
export type LocationCardSettingsSpecialbackground2026GlobalMega001 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2026_GLOBAL_MEGA_001",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_GoTour2026_mega";
		locationCard: "LC_SPECIALBACKGROUND_2026_GLOBAL_MEGA_001";
		vfxAddress: "bgfx_Mega";
	}
>;
export type LocationCardSettingsSpecialbackground2026GlobalPearl001 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2026_GLOBAL_PEARL_001",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_GoTour2026_pearl";
		locationCard: "LC_SPECIALBACKGROUND_2026_GLOBAL_PEARL_001";
		vfxAddress: "bgfx_Pearl";
	}
>;
export type LocationCardSettingsSpecialbackground2026GlobalRuby001 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2026_GLOBAL_RUBY_001",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_GoTour2026_ruby";
		locationCard: "LC_SPECIALBACKGROUND_2026_GLOBAL_RUBY_001";
		vfxAddress: "bgfx_Ruby";
	}
>;
export type LocationCardSettingsSpecialbackground2026GlobalSapphire001 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2026_GLOBAL_SAPPHIRE_001",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_GoTour2026_sapphire";
		locationCard: "LC_SPECIALBACKGROUND_2026_GLOBAL_SAPPHIRE_001";
		vfxAddress: "bgfx_Sapphire";
	}
>;
export type LocationCardSettingsSpecialbackground2026GlobalSilver001 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2026_GLOBAL_SILVER_001",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_GoTour2026_silver";
		locationCard: "LC_SPECIALBACKGROUND_2026_GLOBAL_SILVER_001";
		vfxAddress: "bgfx_Silver";
	}
>;
export type LocationCardSettingsSpecialbackground2026GlobalX001 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2026_GLOBAL_X_001",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_GoTour2026_x";
		locationCard: "LC_SPECIALBACKGROUND_2026_GLOBAL_X_001";
		vfxAddress: "bgfx_X";
	}
>;
export type LocationCardSettingsSpecialbackground2026GlobalY001 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_2026_GLOBAL_Y_001",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_GoTour2026_y";
		locationCard: "LC_SPECIALBACKGROUND_2026_GLOBAL_Y_001";
		vfxAddress: "bgfx_Y";
	}
>;
export type LocationCardSettingsSpecialbackgroundCon2025 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_CON2025",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_Concierge2025";
		locationCard: "LC_SPECIALBACKGROUND_CON2025";
	}
>;
export type LocationCardSettingsSpecialbackgroundExtra202501 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_EXTRA_2025_01",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_FestivalofColors_2026";
		locationCard: "LC_SPECIALBACKGROUND_EXTRA_2025_01";
		vfxAddress: "bgfx_holi_2026";
	}
>;
export type LocationCardSettingsSpecialbackgroundExtra202502 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_EXTRA_2025_02",
	{
		imageUrl: "lc_taipeiFlowerFestival_2026";
		locationCard: "LC_SPECIALBACKGROUND_EXTRA_2025_02";
	}
>;
export type LocationCardSettingsSpecialbackgroundKr2025Lotte01 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_KR2025_LOTTE_01",
	{
		imageUrl: "lc_LotteGiants";
		locationCard: "LC_SPECIALBACKGROUND_KR2025_LOTTE_01";
	}
>;
export type LocationCardSettingsSpecialbackgroundObservatoryExhibitionTour = LocationCardSettings<
	"LC_SPECIALBACKGROUND_OBSERVATORY_EXHIBITION_TOUR",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_ObservatoryExhibitionTour";
		locationCard: "LC_SPECIALBACKGROUND_OBSERVATORY_EXHIBITION_TOUR";
	}
>;
export type LocationCardSettingsSpecialbackgroundPok2026 = LocationCardSettings<
	"LC_SPECIALBACKGROUND_POK2026",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "lc_pokopia2026";
		locationCard: "LC_SPECIALBACKGROUND_POK2026";
	}
>;
export type LocationCardSettingsSpecialbackgroundTeamBlue = LocationCardSettings<
	"LC_SPECIALBACKGROUND_TEAM_BLUE",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_TeamLeader_blue";
		locationCard: "LC_SPECIALBACKGROUND_TEAM_BLUE";
		vfxAddress: "bgfx_TeamLeader_blue";
	}
>;
export type LocationCardSettingsSpecialbackgroundTeamRed = LocationCardSettings<
	"LC_SPECIALBACKGROUND_TEAM_RED",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_TeamLeader_red";
		locationCard: "LC_SPECIALBACKGROUND_TEAM_RED";
		vfxAddress: "bgfx_TeamLeader_red";
	}
>;
export type LocationCardSettingsSpecialbackgroundTeamYellow = LocationCardSettings<
	"LC_SPECIALBACKGROUND_TEAM_YELLOW",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_TeamLeader_yellow";
		locationCard: "LC_SPECIALBACKGROUND_TEAM_YELLOW";
		vfxAddress: "bgfx_TeamLeader_yellow";
	}
>;
export type LocationCardSettingsSpecialBackground2024GlobalGofestMoonUltraWormhole001 = LocationCardSettings<
	"LC_SPECIAL_BACKGROUND_2024_GLOBAL_GOFEST_MOON_ULTRA_WORMHOLE_001",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_GoFest2024_wormhole_moon";
		locationCard: "LC_SPECIAL_BACKGROUND_2024_GLOBAL_GOFEST_MOON_ULTRA_WORMHOLE_001";
		vfxAddress: "bgfx_UltraWormhole";
	}
>;
export type LocationCardSettingsSpecialBackground2024GlobalGofestSunUltraWormhole001 = LocationCardSettings<
	"LC_SPECIAL_BACKGROUND_2024_GLOBAL_GOFEST_SUN_ULTRA_WORMHOLE_001",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_GoFest2024_wormhole_sun";
		locationCard: "LC_SPECIAL_BACKGROUND_2024_GLOBAL_GOFEST_SUN_ULTRA_WORMHOLE_001";
		vfxAddress: "bgfx_UltraWormhole";
	}
>;
export type LocationCardSettingsSpecialBackground2024GlobalGofestUltraWormhole001 = LocationCardSettings<
	"LC_SPECIAL_BACKGROUND_2024_GLOBAL_GOFEST_ULTRA_WORMHOLE_001",
	{
		cardType: "SPECIAL_BACKGROUND";
		imageUrl: "sb_GoFest2024_wormhole";
		locationCard: "LC_SPECIAL_BACKGROUND_2024_GLOBAL_GOFEST_ULTRA_WORMHOLE_001";
		vfxAddress: "bgfx_UltraWormhole";
	}
>;

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
