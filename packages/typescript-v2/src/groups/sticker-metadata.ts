export interface StickerMetadata<T extends string> {
	templateId: T;
	data: StickerMetadataData<T>;
}

export interface StickerMetadataData<T extends string> {
	templateId: T;
	stickerMetadata: {
		category: Array<"24_7" | "Characters" | "Decoration" | "Messages" | "Misc" | "Pokemon">;
		maxCount: 25;
		pokemonId?: "AMAURA" | "ANNIHILAPE" | "APPLETUN" | "ARCANINE" | "ARTICUNO" | "AUDINO" | "AXEW" | "BELLOSSOM" | "BELLSPROUT" | "BERGMITE" | "BIDOOF" | "BLASTOISE" | "BLISSEY" | "BRAVIARY" | "BULBASAUR" | "BUNEARY" | "BUTTERFREE" | "CASCOON" | "CASTFORM" | "CETODDLE" | "CHANDELURE" | "CHANSEY" | "CHARIZARD" | "CHARMANDER" | "CHARMELEON" | "CHERRIM" | "CHESPIN" | "CHIKORITA" | "CHIMCHAR" | "CLAMPERL" | "CLEFAIRY" | "COMBEE" | "CORSOLA" | "CROAGUNK" | "CROCONAW" | "CRYOGONAL" | "CUBCHOO" | "CUTIEFLY" | "CYNDAQUIL" | "DARUMAKA" | "DEDENNE" | "DEERLING" | "DEINO" | "DELIBIRD" | "DIALGA" | "DIGLETT" | "DITTO" | "DREEPY" | "DRIFBLIM" | "DUBWOOL" | "DUCKLETT" | "EELEKTROSS" | "EEVEE" | "EMOLGA" | "ESPEON" | "ESPURR" | "ETERNATUS" | "EXEGGUTOR" | "FALINKS" | "FEEBAS" | "FENNEKIN" | "FLABEBE" | "FLAREON" | "FLYGON" | "FRILLISH" | "FROAKIE" | "FROGADIER" | "FURFROU" | "FURRET" | "GALLADE" | "GARDEVOIR" | "GENGAR" | "GEODUDE" | "GIMMIGHOUL" | "GIRATINA" | "GLACEON" | "GOLEM" | "GOOMY" | "GRAVELER" | "GREAVARD" | "GREEDENT" | "GRENINJA" | "GRIMER" | "GRIMMSNARL" | "GROUDON" | "GROWLITHE" | "GRUBBIN" | "HAWLUCHA" | "HO_OH" | "HOOTHOOT" | "HOPPIP" | "HYDREIGON" | "IMPIDIMP" | "INKAY" | "IVYSAUR" | "JIGGLYPUFF" | "JOLTEON" | "KAKUNA" | "KARRABLAST" | "KECLEON" | "KOMALA" | "KOMMO_O" | "KYOGRE" | "KYUREM" | "LAPRAS" | "LEAFEON" | "LECHONK" | "LEDIAN" | "LICKITUNG" | "LITTEN" | "LITWICK" | "LUCARIO" | "LUGIA" | "LUNALA" | "LURANTIS" | "LUVDISC" | "MAGIKARP" | "MANKEY" | "MAREEP" | "MARILL" | "MARSHADOW" | "MAUSHOLD" | "MELOETTA" | "MELTAN" | "MEOWTH" | "MEW" | "MEWTWO" | "MISDREAVUS" | "MOLTRES" | "MORELULL" | "MORGREM" | "MR_MIME" | "MUDKIP" | "MUNCHLAX" | "MUNNA" | "MURKROW" | "NECROZMA" | "NICKIT" | "NIHILEGO" | "NOCTOWL" | "NOIBAT" | "ODDISH" | "OSHAWOTT" | "PALKIA" | "PASSIMIAN" | "PELIPPER" | "PETILIL" | "PHANTUMP" | "PHEROMOSA" | "PIDGEY" | "PIKACHU" | "PINSIR" | "PIPLUP" | "POLIWAG" | "PONYTA" | "POPPLIO" | "PRIMARINA" | "PSYDUCK" | "PUMPKABOO" | "RESHIRAM" | "RIBOMBEE" | "ROGGENROLA" | "ROWLET" | "SABLEYE" | "SANDSHREW" | "SAWSBUCK" | "SCATTERBUG" | "SEALEO" | "SEEL" | "SEWADDLE" | "SHARPEDO" | "SHAYMIN" | "SHELMET" | "SHIINOTIC" | "SHINX" | "SHROOMISH" | "SKWOVET" | "SLAKOTH" | "SLOWBRO" | "SLOWPOKE" | "SNORLAX" | "SNORUNT" | "SNOVER" | "SOLGALEO" | "SPHEAL" | "SPRIGATITO" | "SQUIRTLE" | "STANTLER" | "STARLY" | "STUFFUL" | "SUNFLORA" | "SWABLU" | "SWADLOON" | "SYLVEON" | "TANGROWTH" | "TEDDIURSA" | "TIMBURR" | "TOGEDEMARU" | "TOGEPI" | "TOGETIC" | "TORCHIC" | "TOUCANNON" | "TOXEL" | "TOXTRICITY" | "TREECKO" | "TREVENANT" | "TURTWIG" | "TYNAMO" | "UMBREON" | "URSALUNA" | "VANILLISH" | "VANILLITE" | "VAPOREON" | "VENUSAUR" | "VESPIQUEN" | "VICTINI" | "VILEPLUME" | "VOLCANION" | "VULPIX" | "WAILMER" | "WAILORD" | "WARTORTLE" | "WEAVILE" | "WHIMSICOTT" | "WIGLETT" | "WOBBUFFET" | "WOOLOO" | "WOOPER" | "WURMPLE" | "XERNEAS" | "XURKITREE" | "YVELTAL" | "ZACIAN" | "ZAMAZENTA" | "ZAPDOS" | "ZARUDE" | "ZEKROM" | "ZIGZAGOON" | "ZORUA" | "ZWEILOUS";
		regionId?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 1000 | 1001 | 2000;
		releaseDate?: 20200611 | 20200625 | 20200819 | 20201013 | 20201027 | 20201122 | 20201222 | 20201231 | 20210214 | 20210220 | 20210320 | 20210405 | 20210420 | 20210429 | 20210525 | 20210606 | 20210608 | 20210625 | 20210727 | 20210908 | 20210920 | 20211001 | 20211015 | 20211105 | 20211116 | 20211122 | 20211216 | 20211230 | 20220116 | 20220210 | 20220212 | 20220226 | 20220227 | 20220313 | 20220401 | 20220423 | 20220503 | 20220521 | 20220601 | 20220604 | 20220616 | 20220625 | 20220701 | 20220706 | 20220717 | 20220722 | 20220728 | 20220801 | 20220805 | 20220810 | 20220813 | 20220901 | 20220914 | 20221001 | 20221014 | 20221020 | 20221112 | 20221117 | 20221131 | 20221215 | 20230101 | 20230107 | 20230201 | 20230202 | 20230209 | 20230221 | 20230224 | 20230318 | 20230331 | 20230410 | 20230508 | 20230530 | 20230610 | 20230629 | 20230710 | 20230720 | 20230721 | 20230801 | 20230808 | 20230830 | 20230923 | 20230926 | 20231010 | 20231030 | 20231031 | 20231128 | 20231207 | 20240106 | 20240123 | 20240216 | 20240301 | 20240302 | 20240410 | 20240412 | 20240429 | 20240508 | 20240522 | 20240529 | 20240608 | 20240620 | 20240819 | 20240827 | 20240828 | 20240930 | 20241004 | 20241009 | 20241010 | 20241015 | 20241126 | 20241218 | 20250128 | 20250221 | 20250303 | 20250305 | 20250308 | 20250428 | 20250529 | 20250603 | 20250701 | 20250718 | 20250815 | 20250902 | 20250909 | 20250912 | 20250919 | 20251021 | 20251027 | 20251101 | 20251202 | 20260220 | 20260303 | 20260310;
		stickerId: "STICKER_2023COLLAB_1" | "STICKER_2023COLLAB_2" | "STICKER_2023COLLAB_3" | "STICKER_2023COLLAB_4" | "STICKER_6ANNIV_1" | "STICKER_6ANNIV_2" | "STICKER_6ANNIV_3" | "STICKER_6ANNIV_4" | "STICKER_6ANNIV_5" | "STICKER_6ANNIV_6" | "STICKER_7ANNIV_1" | "STICKER_7ANNIV_2" | "STICKER_7ANNIV_3" | "STICKER_7ANNIV_4" | "STICKER_7ANNIV_5" | "STICKER_8ANNIV_1" | "STICKER_8ANNIV_2" | "STICKER_8ANNIV_3" | "STICKER_8ANNIV_4" | "STICKER_9ANNIV_1" | "STICKER_9ANNIV_2" | "STICKER_9ANNIV_3" | "STICKER_ALOLAISHI_1" | "STICKER_ALOLAISHI_2" | "STICKER_ALOLAISHI_3" | "STICKER_ALOLAISHI_4" | "STICKER_APRILFOOL2023_1" | "STICKER_APRILFOOL2023_2" | "STICKER_AUDINO" | "STICKER_BELLSPROUTCD_1" | "STICKER_BELLSPROUTCD_2" | "STICKER_BELLSPROUTCD_3" | "STICKER_BELLSPROUTCD_4" | "STICKER_BIDOOFDAY_1" | "STICKER_BIDOOFDAY_2" | "STICKER_BIDOOFDAY_3" | "STICKER_BOUNSWEETCD2024_1" | "STICKER_BOUNSWEETCD2024_2" | "STICKER_BOUNSWEETCD2024_3" | "STICKER_BOUNSWEETCD2024_4" | "STICKER_BREADKOREA_001" | "STICKER_BREADKOREA_002" | "STICKER_BREADKOREA_003" | "STICKER_BREADKOREA_004" | "STICKER_BREADKOREA_005" | "STICKER_BREADKOREA_006" | "STICKER_CHANSEYCD_1" | "STICKER_CHANSEYCD_2" | "STICKER_CHANSEYCD_3" | "STICKER_CHANSEYCD_4" | "STICKER_CHARIZARD_1" | "STICKER_CHARIZARD_2" | "STICKER_CHARIZARD_3" | "STICKER_CHESPIN_1" | "STICKER_CHESPIN_2" | "STICKER_CHESPIN_3" | "STICKER_CHESPIN_4" | "STICKER_CITYSPOTLIGHT" | "STICKER_CONCIERGE_EEVEE" | "STICKER_CONCIERGE_PSYDUCK" | "STICKER_CONCIERGE_SEALEO" | "STICKER_CONCIERGE_SHINX" | "STICKER_DEINO_1" | "STICKER_DEINO_2" | "STICKER_DEINO_3" | "STICKER_DEINO_4" | "STICKER_DIADEMUERTOS2023_1" | "STICKER_DIADEMUERTOS2023_2" | "STICKER_DIADEMUERTOS2023_3" | "STICKER_DIADEMUERTOS2023_4" | "STICKER_DIAMONDPEARLCHIMCHAR" | "STICKER_DIAMONDPEARLDIALGA" | "STICKER_DIAMONDPEARLLUCARIO" | "STICKER_DIAMONDPEARLPALKIA" | "STICKER_DIAMONDPEARLPIPLUP" | "STICKER_DIAMONDPEARLTURTWIG" | "STICKER_DITTO_1" | "STICKER_DITTO_2" | "STICKER_DITTO_3" | "STICKER_DITTO_4" | "STICKER_DITTO_5" | "STICKER_DITTO_6" | "STICKER_EEVEEFRIENDS_1" | "STICKER_EEVEEFRIENDS_2" | "STICKER_EEVEEFRIENDS_3" | "STICKER_EEVEEFRIENDS_4" | "STICKER_EEVEEFRIENDS_5" | "STICKER_EEVEEFRIENDS_6" | "STICKER_EEVEEFRIENDS_7" | "STICKER_EEVEEFRIENDS_8" | "STICKER_EEVEEFRIENDS_9" | "STICKER_ETERNATUS" | "STICKER_FALL_2023_1" | "STICKER_FALL_2023_2" | "STICKER_FALL_2023_3" | "STICKER_FALL_2023_4" | "STICKER_FALL_2023_5" | "STICKER_FALL_2023_6" | "STICKER_FALL_2024_1" | "STICKER_FALL_2024_2" | "STICKER_FALL_2024_3" | "STICKER_FALL_2024_4" | "STICKER_FALL_2024_5" | "STICKER_FALL_2024_6" | "STICKER_FALL_2025_1" | "STICKER_FALL_2025_2" | "STICKER_FALL_2025_3" | "STICKER_FALL_2025_4" | "STICKER_FALL_SAWSBUCK" | "STICKER_FALL_SHROOMISH" | "STICKER_FALL_SKWOVET" | "STICKER_FALL_TEDDIURSA" | "STICKER_FALL_TREVENANT" | "STICKER_FALL_VULPIX" | "STICKER_FENNEKIN_1" | "STICKER_FENNEKIN_2" | "STICKER_FENNEKIN_3" | "STICKER_FENNEKIN_4" | "STICKER_FESTIVALOFLIGHT_MORELULL" | "STICKER_FESTIVALOFLIGHT_SHIINOTIC" | "STICKER_FESTIVALOFTHELIGHTS21_V1" | "STICKER_FESTIVALOFTHELIGHTS21_V2" | "STICKER_FESTIVALOFTHELIGHTS21_V3" | "STICKER_FESTIVALOFTHELIGHTS21_V4" | "STICKER_FLABEBE_1" | "STICKER_FLABEBE_2" | "STICKER_FLAIR_HEART_1" | "STICKER_FLAIR_HEART_2" | "STICKER_FLAIR_HEART_3" | "STICKER_FLAIR_HEART_4" | "STICKER_FLAIR_HEART_5" | "STICKER_FLAIR_STAR_1" | "STICKER_FLAIR_STAR_2" | "STICKER_FLAIR_STAR_3" | "STICKER_FLAIR_STAR_4" | "STICKER_FLAIR_STAR_5" | "STICKER_FLAIR_STAR_6" | "STICKER_FLAIR_STAR_7" | "STICKER_FORMULAEKOREA_PIKACHU" | "STICKER_FOSSILMUSEUM_1" | "STICKER_FOSSILMUSEUM_2" | "STICKER_FROAKIE_1" | "STICKER_FROAKIE_2" | "STICKER_FROAKIE_3" | "STICKER_FROAKIE_4" | "STICKER_FUNAWARI_04_312" | "STICKER_FUNAWARI_05_312" | "STICKER_FUNAWARI_06_312" | "STICKER_FUNAWARI_22_312" | "STICKER_FUNWARI_02_0608" | "STICKER_FUNWARI_10" | "STICKER_FUNWARI_11_THANKU" | "STICKER_FUNWARI_12_02" | "STICKER_FUNWARI_18" | "STICKER_FUNWARI_20" | "STICKER_FUNWARI_35" | "STICKER_FUNWARI_PIDGEY_18" | "STICKER_FURFROUHEART_1" | "STICKER_FURFROUHEART_2" | "STICKER_GALARIANZIGZAGOON_1" | "STICKER_GALARIANZIGZAGOON_2" | "STICKER_GALARIANZIGZAGOON_3" | "STICKER_GALARIANZIGZAGOON_4" | "STICKER_GIFTTHANKYOU" | "STICKER_GIMMIGHOUL_1" | "STICKER_GIMMIGHOUL_2" | "STICKER_GIMMIGHOUL_3" | "STICKER_GIMMIGHOUL_4" | "STICKER_GIMMIGHOUL_5" | "STICKER_GOOMYCD_1" | "STICKER_GOOMYCD_2" | "STICKER_GOOMYCD_3" | "STICKER_GOOMYCD_4" | "STICKER_GOTOUR2021" | "STICKER_GOTOUR2022_1" | "STICKER_GOTOUR2022_2" | "STICKER_GOTOUR2022_3" | "STICKER_GOTOUR2022_4" | "STICKER_GOTOUR2022_CHIKORITA" | "STICKER_GOTOUR2022_CYNDAQUIL" | "STICKER_GOTOUR2022_HOOH" | "STICKER_GOTOUR2022_LUGIA" | "STICKER_GOTOUR2022_TOGEPI" | "STICKER_GOTOUR2022_TOTODILE" | "STICKER_GOTOUR2025_BADGE" | "STICKER_GOTOUR2025_KYUREMBLACK" | "STICKER_GOTOUR2025_KYUREMWHITE" | "STICKER_GOTOUR2025_RESHIRAM" | "STICKER_GOTOUR2025_RZ" | "STICKER_GOTOUR2025_ZEKROM" | "STICKER_GOTOURHOENN_1" | "STICKER_GOTOURHOENN_2" | "STICKER_GOTOURHOENN_3" | "STICKER_GOTOURHOENN_4" | "STICKER_GOTOURHOENN_5" | "STICKER_GOTOURHOENN_6" | "STICKER_GOWA2025_01" | "STICKER_GOWA2025_02" | "STICKER_GOWA2025_03" | "STICKER_GOWA2025_04" | "STICKER_GOWA2025_05" | "STICKER_GRUBBIN_1" | "STICKER_GRUBBIN_2" | "STICKER_GRUBBIN_3" | "STICKER_GRUBBIN_4" | "STICKER_HALLOWEEN_BULB" | "STICKER_HALLOWEEN_CHARM" | "STICKER_HALLOWEEN_GENGARMD" | "STICKER_HALLOWEEN_PIKA" | "STICKER_HALLOWEEN_SABLEYEMD" | "STICKER_HALLOWEEN_SQU" | "STICKER_HALLOWEEN2022_GENGAR" | "STICKER_HALLOWEEN2022_PUMPKABOO" | "STICKER_HALLOWEEN2022_VULPIX" | "STICKER_HALLOWEEN2025_NOIBAT" | "STICKER_HALLOWEEN2025_TEDDIURSA" | "STICKER_HALLOWEEN21_FUWARAID" | "STICKER_HALLOWEEN21_GHOSTPIKA" | "STICKER_HALLOWEEN21_PIKACHU" | "STICKER_HALLOWEEN21_POCHAMA" | "STICKER_HALLOWEEN23_GENGAR" | "STICKER_HALLOWEEN23_GREAVARD" | "STICKER_HALLOWEEN23_MISDREAVUS" | "STICKER_HALLOWEEN23_PHANTUMP" | "STICKER_HALLOWEEN24_FROAKIE" | "STICKER_HALLOWEEN24_ROWLET" | "STICKER_HARU_CHERRIM" | "STICKER_HARU_DREDEARPIKA" | "STICKER_HARU_KIREIHANA" | "STICKER_HARU_LALANTES" | "STICKER_HARU_MEBUKISHIKIJIK" | "STICKER_HARU_MITSUHONEY" | "STICKER_HAWLUCHA_01" | "STICKER_HISUIDISCO_ARCANINE" | "STICKER_HISUIDISCO_BRAVIARY" | "STICKER_HISUIDISCO_GROWLITHE" | "STICKER_HOLIDAYEVENT21_1" | "STICKER_HOLIDAYEVENT21_2" | "STICKER_HOLIDAYEVENT21_3" | "STICKER_HOLIDAYEVENT21_4" | "STICKER_HOLIDAYEVENT22_CUBCHOO" | "STICKER_HOLIDAYEVENT22_SCATTERBUG" | "STICKER_HOLIDAYEVENT22_SNOWPIKA" | "STICKER_HOLIDAYEVENT22_VULPIX" | "STICKER_HOLIDAYEVENT23_CETODDLE" | "STICKER_HOLIDAYEVENT23_CRYOGONAL" | "STICKER_HOLIDAYEVENT23_PSYDUCK" | "STICKER_HOLIDAYEVENT23_SEEL" | "STICKER_HOLIDAYEVENT23_VANILLISH" | "STICKER_HOLOGRAPHIC_CHANCEY" | "STICKER_HOLOGRAPHIC_CHARMELEON" | "STICKER_HOLOGRAPHIC_IVYSAUR" | "STICKER_HOLOGRAPHIC_MELTAN" | "STICKER_HOLOGRAPHIC_PIKACHU" | "STICKER_HOLOGRAPHIC_WARTORTLE" | "STICKER_HOPPIP_1" | "STICKER_HOPPIP_2" | "STICKER_HOPPIP_3" | "STICKER_HOPPIP_4" | "STICKER_INDONESIAJOURNEY_1" | "STICKER_INDONESIAJOURNEY_2" | "STICKER_IPLPARTNERSHIP_1" | "STICKER_IPLPARTNERSHIP_2" | "STICKER_JUNECD2023_AXEW_1" | "STICKER_JUNECD2023_AXEW_2" | "STICKER_JUNECD2023_AXEW_3" | "STICKER_JUNECD2023_AXEW_4" | "STICKER_KOREATOWN_1" | "STICKER_KOREATOWN_2" | "STICKER_KOREATOWN_3" | "STICKER_KR_DITTO" | "STICKER_KURTASAREE_1" | "STICKER_KURTASAREE_2" | "STICKER_KURTASAREE_3" | "STICKER_KURTASAREE_4" | "STICKER_KURTASAREE_5" | "STICKER_KURTASAREE_6" | "STICKER_LENTILLAUNCH_CAMERA" | "STICKER_LITTENCD_1" | "STICKER_LITTENCD_2" | "STICKER_LITTENCD_3" | "STICKER_LITTENCD_4" | "STICKER_LITWICK_1" | "STICKER_LITWICK_2" | "STICKER_LITWICK_3" | "STICKER_LITWICK_4" | "STICKER_LUVDISC" | "STICKER_MANKEY_1" | "STICKER_MANKEY_2" | "STICKER_MANKEY_3" | "STICKER_MANKEY_4" | "STICKER_MEGAEVOLUTION_PARIS_1" | "STICKER_MEGAEVOLUTION_PARIS_2" | "STICKER_MEGAEVOLUTION_PARIS_3" | "STICKER_MEW_LAUGH" | "STICKER_MEWTWO" | "STICKER_MUKKURU_CD_1" | "STICKER_MUKKURU_CD_2" | "STICKER_MUKKURU_CD_3" | "STICKER_MUKKURU_CD_4" | "STICKER_NAGANO_06_312" | "STICKER_NAGANO_08" | "STICKER_NAGANO_11" | "STICKER_NAGANO_15" | "STICKER_NAGANO_15_312" | "STICKER_NAGANO_BATH" | "STICKER_NAGANO_MARILL" | "STICKER_NAGANO_YADON" | "STICKER_NEWPOKEMON_04" | "STICKER_NEWPOKEMON_20" | "STICKER_NEWPOKEMON_37" | "STICKER_NEWPOKEMON2_1" | "STICKER_NEWPOKEMON2_15" | "STICKER_NEWPOKEMON2_33" | "STICKER_NEWTEAMRASCAL" | "STICKER_NEWTEAMRASCALPIKACHU_26" | "STICKER_NEWYEARS22_1" | "STICKER_NEWYEARS22_2" | "STICKER_NEWYEARS22_3" | "STICKER_NEWYEARS22_4" | "STICKER_NEWYEARS23_1" | "STICKER_NEWYEARS23_2" | "STICKER_NEWYEARS23_3" | "STICKER_NEWYEARS23_4" | "STICKER_NIA_LOGO" | "STICKER_NIGIYAKA_08_0508_312" | "STICKER_NIGIYAKA_16_0508_312" | "STICKER_NOIBAT_CD_1" | "STICKER_NOIBAT_CD_2" | "STICKER_NOIBAT_CD_3" | "STICKER_NOIBAT_CD_4" | "STICKER_NYARTH_38" | "STICKER_OBSERVATORY_01" | "STICKER_OBSERVATORY_02" | "STICKER_PAPELPICADOTGR_1" | "STICKER_PAPELPICADOTGR_2" | "STICKER_PAPELPICADOTGR_3" | "STICKER_PAPELPICADOTGR_4" | "STICKER_PAPELPICADOTGR_5" | "STICKER_PGO_FEST_2017" | "STICKER_PGO_FEST_2018" | "STICKER_PGO_FEST_2019" | "STICKER_PGO_FEST_2020" | "STICKER_PGO_FEST_2020_LOGO" | "STICKER_PGO_FEST_2022" | "STICKER_PGO_FEST_2022_LOGO" | "STICKER_PGO_FEST_2023" | "STICKER_PGO_FEST_2023_1" | "STICKER_PGO_FEST_2023_2" | "STICKER_PGO_FEST_2023_3" | "STICKER_PGO_FEST_2023_4" | "STICKER_PGO_FEST_2023_5" | "STICKER_PGO_FEST_2023_6" | "STICKER_PGO_FEST_2023_LOGO" | "STICKER_PGO_FEST_2024" | "STICKER_PGO_FEST_2024_1" | "STICKER_PGO_FEST_2024_2" | "STICKER_PGO_FEST_2024_3" | "STICKER_PGO_FEST_2024_4" | "STICKER_PGO_FEST_2024_5" | "STICKER_PGO_FEST_2024_6" | "STICKER_PGO_FEST_2024_LOGO" | "STICKER_PGO_FEST_2025" | "STICKER_PGO_FEST_2025_1" | "STICKER_PGO_FEST_2025_2" | "STICKER_PGO_FEST_2025_3" | "STICKER_PGO_FEST_2025_LOGO" | "STICKER_PGO_FEST_VICTINI_05" | "STICKER_PGO_TOUR_2024" | "STICKER_PGO_TOUR_2024_1" | "STICKER_PGO_TOUR_2024_2" | "STICKER_PGO_TOUR_2024_3" | "STICKER_PGO_TOUR_2024_4" | "STICKER_PGO_TOUR_2024_5" | "STICKER_PGO_TOUR_2024_LOGO" | "STICKER_PGO_TOUR_2026" | "STICKER_PGO_TOUR_2026_1" | "STICKER_PGO_TOUR_2026_2" | "STICKER_PGO_TOUR_2026_3" | "STICKER_PGO_TOUR_2026_LOGO" | "STICKER_PGO_WILDAREA_2024" | "STICKER_PGO_WILDAREA_2024_1" | "STICKER_PGO_WILDAREA_2024_2" | "STICKER_PGO_WILDAREA_2024_3" | "STICKER_PGO_WILDAREA_2024_4" | "STICKER_PGO_WILDAREA_2024_LOGO" | "STICKER_PGOFEST2021_GALARIANZIGZAGOON" | "STICKER_PGOFEST2021_LOGO" | "STICKER_PGOFEST2021_MELOETTA_1" | "STICKER_PGOFEST2021_MELOETTA_2" | "STICKER_PGOFEST2021_PONYTA" | "STICKER_PGOFEST2021_SHIRTICON" | "STICKER_PGOFEST2022_DENJYUMOKU" | "STICKER_PGOFEST2022_GROUDON" | "STICKER_PGOFEST2022_KIBAGO" | "STICKER_PGOFEST2022_KYOGRE" | "STICKER_PGOFEST2022_MASSIVOON" | "STICKER_PGOFEST2022_PHEROACHE" | "STICKER_PGOFEST2022_PIKACHU" | "STICKER_PGOFEST2022_POCHAMA" | "STICKER_PGOFEST2022_SHAYMIN" | "STICKER_PGOFEST2022_SHAYMINSKY" | "STICKER_PGOFEST2022_UTUROID" | "STICKER_PIKA_14_THANKYOU" | "STICKER_PIKAAIRADVENTURE_1" | "STICKER_PIKAAIRADVENTURE_2" | "STICKER_PIKAAIRADVENTURE_3" | "STICKER_PIKAAIRJEJU_PIKACHU" | "STICKER_PIKAAIRSINGAPORE_LAPRAS" | "STICKER_PIKAAIRSINGAPORE_PIKACHU" | "STICKER_PIKAAIRTAIWAN_PIKACHU" | "STICKER_PIKAAIRTAIWAN_SNORLAX" | "STICKER_PIKACHU_JOL" | "STICKER_POKEMONCHATPALS2_04" | "STICKER_POKEMONCHATPALS2_40" | "STICKER_POKOPIA_BULBASAUR" | "STICKER_POKOPIA_PIKACHU" | "STICKER_POKOPIA_SNORLAX" | "STICKER_POKOPIA_TANGROWTH" | "STICKER_POLIWAG_1" | "STICKER_POLIWAG_2" | "STICKER_POLIWAG_3" | "STICKER_POLIWAG_4" | "STICKER_PONYTA_1" | "STICKER_PONYTA_2" | "STICKER_PONYTA_3" | "STICKER_PONYTA_4" | "STICKER_POPPLIOCD_1" | "STICKER_POPPLIOCD_2" | "STICKER_POPPLIOCD_3" | "STICKER_POPPLIOCD_4" | "STICKER_PROJECTGUITAR_04" | "STICKER_PROJECTGUITAR_07" | "STICKER_PROJECTGUITAR_13" | "STICKER_PROJECTGUITAR_25" | "STICKER_PROJECTGUITAR_FROAKIE" | "STICKER_PSYCHICSPEC21_INKAY" | "STICKER_PSYCHICSPEC21_INKAY2" | "STICKER_ROGGENROLA_CD_1" | "STICKER_ROGGENROLA_CD_2" | "STICKER_ROGGENROLA_CD_3" | "STICKER_ROGGENROLA_CD_4" | "STICKER_ROWLETCD_1" | "STICKER_ROWLETCD_2" | "STICKER_ROWLETCD_3" | "STICKER_ROWLETCD_4" | "STICKER_SANDSHREW_1" | "STICKER_SANDSHREW_2" | "STICKER_SANDSHREW_3" | "STICKER_SANDSHREW_4" | "STICKER_SECRETSOFTHEJUNGLE_1" | "STICKER_SECRETSOFTHEJUNGLE_4" | "STICKER_SECRETSOFTHEJUNGLE_5" | "STICKER_SECRETSOFTHEJUNGLE_6" | "STICKER_SECRETSOFTHEJUNGLE_7" | "STICKER_SECRETSOFTHEJUNGLE_8" | "STICKER_SECRETSOFTHEJUNGLE_9" | "STICKER_SEWADDLECD_1" | "STICKER_SEWADDLECD_2" | "STICKER_SEWADDLECD_3" | "STICKER_SEWADDLECD_4" | "STICKER_SHELMET_KARRABLAST_1" | "STICKER_SHELMET_KARRABLAST_2" | "STICKER_SHELMET_KARRABLAST_3" | "STICKER_SLEEP_1" | "STICKER_SLEEP_2" | "STICKER_SLEEP_3" | "STICKER_SLEEP_4" | "STICKER_SLEEP_5" | "STICKER_SLEEP_6" | "STICKER_SLEEP_7" | "STICKER_SLOWPOKE_1" | "STICKER_SLOWPOKE_2" | "STICKER_SLOWPOKE_3" | "STICKER_SLOWPOKE_4" | "STICKER_SPHEAL_1" | "STICKER_SPHEAL_2" | "STICKER_SPHEAL_3" | "STICKER_SPHEAL_4" | "STICKER_SPRIGATITO_1" | "STICKER_SPRIGATITO_2" | "STICKER_SPRIGATITO_3" | "STICKER_SPRIGATITO_4" | "STICKER_SPRING_2024_1" | "STICKER_SPRING_2024_2" | "STICKER_SPRING_2024_3" | "STICKER_SPRING_2024_4" | "STICKER_SPRING_2024_5" | "STICKER_SPRING_2024_6" | "STICKER_SPRING_2025_1" | "STICKER_SPRING_2025_2" | "STICKER_SPRING_2025_3" | "STICKER_SPRING_2025_4" | "STICKER_SPRING_2026_1" | "STICKER_SPRING_2026_2" | "STICKER_SPRING_2026_3" | "STICKER_SPRING_2026_4" | "STICKER_SPRING_EIEVUI" | "STICKER_SPRING_HAPINAS" | "STICKER_SPRING_MIMIROL" | "STICKER_SPRING_NIMPHIA" | "STICKER_SPRING_PIKACHU" | "STICKER_SPRING_PIPITO" | "STICKER_STUFFUL_1" | "STICKER_STUFFUL_2" | "STICKER_STUFFUL_3" | "STICKER_STUFFUL_4" | "STICKER_SUMMER_1" | "STICKER_SUMMER_2" | "STICKER_SUMMER_2023_BLASTOISE" | "STICKER_SUMMER_2023_BUTTERFREE" | "STICKER_SUMMER_2023_CLAMPERL" | "STICKER_SUMMER_2023_LEDIAN" | "STICKER_SUMMER_2023_SAWSBUCK" | "STICKER_SUMMER_2023_SQUIRTLE" | "STICKER_SUMMER_2024_1" | "STICKER_SUMMER_2024_2" | "STICKER_SUMMER_2024_3" | "STICKER_SUMMER_2024_4" | "STICKER_SUMMER_2024_5" | "STICKER_SUMMER_2024_6" | "STICKER_SUMMER_2025_1" | "STICKER_SUMMER_2025_2" | "STICKER_SUMMER_2025_3" | "STICKER_SUMMER_2025_4" | "STICKER_SUMMER_3" | "STICKER_SUMMER_4" | "STICKER_SUMMER_5" | "STICKER_SUMMER_6" | "STICKER_SWORDSHIELD21_1" | "STICKER_SWORDSHIELD21_2" | "STICKER_SWORDSHIELD21_3" | "STICKER_SWORDSHIELD21_4" | "STICKER_SWORDSHIELD21_5" | "STICKER_TEDDIURSA_1" | "STICKER_TEDDIURSA_2" | "STICKER_TEDDIURSA_3" | "STICKER_TEDDIURSA_4" | "STICKER_TIMBURR_1" | "STICKER_TIMBURR_2" | "STICKER_TIMBURR_3" | "STICKER_TIMBURR_4" | "STICKER_TL_BLANCHE" | "STICKER_TL_CANDELA" | "STICKER_TL_SPARK" | "STICKER_TOGETICCD2023_1" | "STICKER_TOGETICCD2023_2" | "STICKER_TOGETICCD2023_3" | "STICKER_TOGETICCD2023_4" | "STICKER_TR_ARLO" | "STICKER_TR_CLIFF" | "STICKER_TR_SIERRA" | "STICKER_TYNAMOCD_1" | "STICKER_TYNAMOCD_2" | "STICKER_TYNAMOCD_3" | "STICKER_TYNAMOCD_4" | "STICKER_VALENTINE2023_1" | "STICKER_VALENTINE2023_2" | "STICKER_VALENTINE2023_3" | "STICKER_WCS_PLAY" | "STICKER_WCS2025_CAR_GROUP" | "STICKER_WCS2025_JIGGLYPUFF" | "STICKER_WCS2025_MURKROW" | "STICKER_WCS2025_PIKACHU" | "STICKER_WILLOW_BRONZE" | "STICKER_WILLOW_GOLD" | "STICKER_WILLOW_SILVER" | "STICKER_WINTER_2024_1" | "STICKER_WINTER_2024_2" | "STICKER_WINTER_2024_3" | "STICKER_WINTER_2024_4" | "STICKER_WINTER_2024_5" | "STICKER_WINTER_2024_6" | "STICKER_WINTER_AMAURA" | "STICKER_WINTER_DARUMAKA" | "STICKER_WINTER_GLACEON" | "STICKER_WINTER_PIKACHU" | "STICKER_WINTER_SAWSBUCK" | "STICKER_WINTER_SNORUNT" | "STICKER_WINTER2023_1" | "STICKER_WINTER2023_2" | "STICKER_WINTER2023_3" | "STICKER_WINTER2023_4" | "STICKER_WINTER2023_5" | "STICKER_WINTER2023_6" | "STICKER_WINTER2025_1" | "STICKER_WINTER2025_2" | "STICKER_WINTER2025_3" | "STICKER_WINTER2025_4" | "STICKER_WOOPERCD2023_1" | "STICKER_WOOPERCD2023_2" | "STICKER_WOOPERCD2023_3" | "STICKER_WOOPERCD2023_4" | "STICKER_YADON" | "STICKER_YURUTTO_12" | "STICKER_YURUTTO_24" | "STICKER_YURUTTO_26" | "STICKER_YURUTTO_33" | "STICKER_YURUTTO_36" | "STICKER_YURUTTO_37";
		stickerUrl?: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_audino.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_bidoofDay_1.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_bidoofDay_2.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_bidoofDay_3.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_diamondPearlChimchar.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_diamondPearlDialga.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_diamondPearlLucario.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_diamondPearlPalkia.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_diamondPearlPiplup.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_diamondPearlTurtwig.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_ditto_1.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_ditto_2.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_ditto_3.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_ditto_4.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_ditto_5.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_ditto_6.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_eeveeFriends_1.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_eeveeFriends_2.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_eeveeFriends_3.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_eeveeFriends_4.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_eeveeFriends_5.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_eeveeFriends_6.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_eeveeFriends_7.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_eeveeFriends_8.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_eeveeFriends_9.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_festivalOfTheLights21_v1.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_festivalOfTheLights21_v2.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_festivalOfTheLights21_v3.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_festivalOfTheLights21_v4.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_flabebe_1.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_flabebe_2.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_funwari_pidgey_18.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_furfrouHeart_1.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_furfrouHeart_2.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_goTour2022_1.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_goTour2022_2.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_goTour2022_3.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_goTour2022_4.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_goTour2022_chikorita.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_goTour2022_cyndaquil.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_goTour2022_hooh.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_goTour2022_lugia.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_goTour2022_togepi.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_goTour2022_totodile.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_halloween21_fuwaraid.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_halloween21_ghostpika.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_halloween21_pikachu.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_halloween21_pochama.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_holidayEvent21_1.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_holidayEvent21_2.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_holidayEvent21_3.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_holidayEvent21_4.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_hoppip_1.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_hoppip_2.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_hoppip_3.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_hoppip_4.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_lentilLaunch_camera.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_luvdisc.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_nagano_15.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_newPokemon_20.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_newPokemon_37.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_newPokemon2_1.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_newPokemon2_33.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_newTeamRascal.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_newTeamRascalPikachu_26.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_newYears22_1.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_newYears22_2.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_newYears22_3.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_newYears22_4.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_pgoFest2021_galarianZigzagoon.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_pgoFest2021_logo.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_pgoFest2021_meloetta_1.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_pgoFest2021_meloetta_2.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_pgoFest2021_ponyta.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_pgoFest2021_shirtIcon.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_pika_14_thankyou.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_pikaairadventure_1.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_pikaairadventure_2.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_pikaairadventure_3.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_projectGuitar_04.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_projectGuitar_07.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_projectGuitar_13.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_projectGuitar_25.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_projectGuitar_froakie.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_psychicSpec21_inkay.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_psychicSpec21_inkay2.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_sandshrew_1.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_sandshrew_2.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_sandshrew_3.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_sandshrew_4.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_secretsOfTheJungle_1.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_secretsOfTheJungle_4.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_secretsOfTheJungle_5.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_secretsOfTheJungle_6.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_secretsOfTheJungle_7.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_secretsOfTheJungle_8.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_secretsOfTheJungle_9.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_spheal_1.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_spheal_2.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_spheal_3.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_spheal_4.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_spring_eievui.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_spring_hapinas.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_spring_mimirol.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_spring_nimphia.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_spring_pikachu.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_spring_pipito.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_stufful_1.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_stufful_2.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_stufful_3.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_stufful_4.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_swordShield21_1.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_swordShield21_2.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_swordShield21_3.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_swordShield21_4.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_swordShield21_5.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_TL_Blanche.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_TL_Candela.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_TL_Spark.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_yurutto_12.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_yurutto_24.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_yurutto_36.png" | "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_yurutto_37.png" | "https://storage.googleapis.com/prod-public-images/sticker_funwari_04_312.png" | "https://storage.googleapis.com/prod-public-images/sticker_funwari_05_312.png" | "https://storage.googleapis.com/prod-public-images/sticker_funwari_06_312.png" | "https://storage.googleapis.com/prod-public-images/sticker_funwari_10.png" | "https://storage.googleapis.com/prod-public-images/sticker_funwari_11_thanku.png" | "https://storage.googleapis.com/prod-public-images/sticker_funwari_12_02.png" | "https://storage.googleapis.com/prod-public-images/sticker_funwari_18.png" | "https://storage.googleapis.com/prod-public-images/sticker_funwari_20.png" | "https://storage.googleapis.com/prod-public-images/sticker_funwari_22_312.png" | "https://storage.googleapis.com/prod-public-images/sticker_GiftThankyou.png" | "https://storage.googleapis.com/prod-public-images/sticker_nagano_06_312.png" | "https://storage.googleapis.com/prod-public-images/sticker_nagano_15_312.png" | "https://storage.googleapis.com/prod-public-images/sticker_nagano_marill.png" | "https://storage.googleapis.com/prod-public-images/sticker_nagano_yadon.png" | "https://storage.googleapis.com/prod-public-images/sticker_nia_logo.png" | "https://storage.googleapis.com/prod-public-images/sticker_nigiyaka_08_0508_312.png" | "https://storage.googleapis.com/prod-public-images/sticker_nigiyaka_16_0508_312.png" | "https://storage.googleapis.com/prod-public-images/sticker_nyarth_38.png" | "https://storage.googleapis.com/prod-public-images/sticker_pgo_fest_2017.png" | "https://storage.googleapis.com/prod-public-images/sticker_pgo_fest_2018.png" | "https://storage.googleapis.com/prod-public-images/sticker_pgo_fest_2019.png" | "https://storage.googleapis.com/prod-public-images/sticker_pgo_fest_2020_logo.png" | "https://storage.googleapis.com/prod-public-images/sticker_pgo_fest_2020.png" | "https://storage.googleapis.com/prod-public-images/sticker_pgo_fest_victini_05.png" | "https://storage.googleapis.com/prod-public-images/sticker_yadon.png" | "https://storage.googleapis.com/prod-public-images/Stickers/sticker_CitySpotlight.png" | "https://storage.googleapis.com/prod-public-images/Stickers/sticker_funwari_02_0608.png" | "https://storage.googleapis.com/prod-public-images/Stickers/sticker_funwari_35.png" | "https://storage.googleapis.com/prod-public-images/Stickers/sticker_goTour2021_29075.png" | "https://storage.googleapis.com/prod-public-images/Stickers/sticker_Halloween_Bulb.png" | "https://storage.googleapis.com/prod-public-images/Stickers/sticker_Halloween_Charm.png" | "https://storage.googleapis.com/prod-public-images/Stickers/sticker_Halloween_GengarMD.png" | "https://storage.googleapis.com/prod-public-images/Stickers/sticker_Halloween_Pika.png" | "https://storage.googleapis.com/prod-public-images/Stickers/sticker_Halloween_SableyeMD.png" | "https://storage.googleapis.com/prod-public-images/Stickers/sticker_Halloween_Squ.png" | "https://storage.googleapis.com/prod-public-images/Stickers/sticker_mew_laugh.png" | "https://storage.googleapis.com/prod-public-images/Stickers/sticker_mewtwo.png" | "https://storage.googleapis.com/prod-public-images/Stickers/sticker_nagano_08.png" | "https://storage.googleapis.com/prod-public-images/Stickers/sticker_nagano_11.png" | "https://storage.googleapis.com/prod-public-images/Stickers/sticker_nagano_bath.png" | "https://storage.googleapis.com/prod-public-images/Stickers/sticker_newPokemon_04.png" | "https://storage.googleapis.com/prod-public-images/Stickers/sticker_newPokemon2_15.png" | "https://storage.googleapis.com/prod-public-images/Stickers/sticker_pikachu_JOL.png" | "https://storage.googleapis.com/prod-public-images/Stickers/sticker_pokemonChatPals2_04.png" | "https://storage.googleapis.com/prod-public-images/Stickers/sticker_pokemonChatPals2_40.png" | "https://storage.googleapis.com/prod-public-images/Stickers/sticker_TR_Arlo.png" | "https://storage.googleapis.com/prod-public-images/Stickers/sticker_TR_Cliff.png" | "https://storage.googleapis.com/prod-public-images/Stickers/sticker_TR_Sierra.png" | "https://storage.googleapis.com/prod-public-images/Stickers/sticker_yurutto_26.png" | "https://storage.googleapis.com/prod-public-images/Stickers/sticker_yurutto_33.png";
	};
}

export type StickerMetadata2023collab1 = StickerMetadata<"STICKER_2023COLLAB_1">;
export type StickerMetadata2023collab2 = StickerMetadata<"STICKER_2023COLLAB_2">;
export type StickerMetadata2023collab3 = StickerMetadata<"STICKER_2023COLLAB_3">;
export type StickerMetadata2023collab4 = StickerMetadata<"STICKER_2023COLLAB_4">;
export type StickerMetadata6anniv1 = StickerMetadata<"STICKER_6ANNIV_1">;
export type StickerMetadata6anniv2 = StickerMetadata<"STICKER_6ANNIV_2">;
export type StickerMetadata6anniv3 = StickerMetadata<"STICKER_6ANNIV_3">;
export type StickerMetadata6anniv4 = StickerMetadata<"STICKER_6ANNIV_4">;
export type StickerMetadata6anniv5 = StickerMetadata<"STICKER_6ANNIV_5">;
export type StickerMetadata6anniv6 = StickerMetadata<"STICKER_6ANNIV_6">;
export type StickerMetadata7anniv1 = StickerMetadata<"STICKER_7ANNIV_1">;
export type StickerMetadata7anniv2 = StickerMetadata<"STICKER_7ANNIV_2">;
export type StickerMetadata7anniv3 = StickerMetadata<"STICKER_7ANNIV_3">;
export type StickerMetadata7anniv4 = StickerMetadata<"STICKER_7ANNIV_4">;
export type StickerMetadata7anniv5 = StickerMetadata<"STICKER_7ANNIV_5">;
export type StickerMetadata8anniv1 = StickerMetadata<"STICKER_8ANNIV_1">;
export type StickerMetadata8anniv2 = StickerMetadata<"STICKER_8ANNIV_2">;
export type StickerMetadata8anniv3 = StickerMetadata<"STICKER_8ANNIV_3">;
export type StickerMetadata8anniv4 = StickerMetadata<"STICKER_8ANNIV_4">;
export type StickerMetadata9anniv1 = StickerMetadata<"STICKER_9ANNIV_1">;
export type StickerMetadata9anniv2 = StickerMetadata<"STICKER_9ANNIV_2">;
export type StickerMetadata9anniv3 = StickerMetadata<"STICKER_9ANNIV_3">;
export type StickerMetadataAlolaishi1 = StickerMetadata<"STICKER_ALOLAISHI_1">;
export type StickerMetadataAlolaishi2 = StickerMetadata<"STICKER_ALOLAISHI_2">;
export type StickerMetadataAlolaishi3 = StickerMetadata<"STICKER_ALOLAISHI_3">;
export type StickerMetadataAlolaishi4 = StickerMetadata<"STICKER_ALOLAISHI_4">;
export type StickerMetadataAprilfool20231 = StickerMetadata<"STICKER_APRILFOOL2023_1">;
export type StickerMetadataAprilfool20232 = StickerMetadata<"STICKER_APRILFOOL2023_2">;
export type StickerMetadataAudino = StickerMetadata<"STICKER_AUDINO">;
export type StickerMetadataBellsproutcd1 = StickerMetadata<"STICKER_BELLSPROUTCD_1">;
export type StickerMetadataBellsproutcd2 = StickerMetadata<"STICKER_BELLSPROUTCD_2">;
export type StickerMetadataBellsproutcd3 = StickerMetadata<"STICKER_BELLSPROUTCD_3">;
export type StickerMetadataBellsproutcd4 = StickerMetadata<"STICKER_BELLSPROUTCD_4">;
export type StickerMetadataBidoofday1 = StickerMetadata<"STICKER_BIDOOFDAY_1">;
export type StickerMetadataBidoofday2 = StickerMetadata<"STICKER_BIDOOFDAY_2">;
export type StickerMetadataBidoofday3 = StickerMetadata<"STICKER_BIDOOFDAY_3">;
export type StickerMetadataBounsweetcd20241 = StickerMetadata<"STICKER_BOUNSWEETCD2024_1">;
export type StickerMetadataBounsweetcd20242 = StickerMetadata<"STICKER_BOUNSWEETCD2024_2">;
export type StickerMetadataBounsweetcd20243 = StickerMetadata<"STICKER_BOUNSWEETCD2024_3">;
export type StickerMetadataBounsweetcd20244 = StickerMetadata<"STICKER_BOUNSWEETCD2024_4">;
export type StickerMetadataBreadkorea001 = StickerMetadata<"STICKER_BREADKOREA_001">;
export type StickerMetadataBreadkorea002 = StickerMetadata<"STICKER_BREADKOREA_002">;
export type StickerMetadataBreadkorea003 = StickerMetadata<"STICKER_BREADKOREA_003">;
export type StickerMetadataBreadkorea004 = StickerMetadata<"STICKER_BREADKOREA_004">;
export type StickerMetadataBreadkorea005 = StickerMetadata<"STICKER_BREADKOREA_005">;
export type StickerMetadataBreadkorea006 = StickerMetadata<"STICKER_BREADKOREA_006">;
export type StickerMetadataChanseycd1 = StickerMetadata<"STICKER_CHANSEYCD_1">;
export type StickerMetadataChanseycd2 = StickerMetadata<"STICKER_CHANSEYCD_2">;
export type StickerMetadataChanseycd3 = StickerMetadata<"STICKER_CHANSEYCD_3">;
export type StickerMetadataChanseycd4 = StickerMetadata<"STICKER_CHANSEYCD_4">;
export type StickerMetadataCharizard1 = StickerMetadata<"STICKER_CHARIZARD_1">;
export type StickerMetadataCharizard2 = StickerMetadata<"STICKER_CHARIZARD_2">;
export type StickerMetadataCharizard3 = StickerMetadata<"STICKER_CHARIZARD_3">;
export type StickerMetadataChespin1 = StickerMetadata<"STICKER_CHESPIN_1">;
export type StickerMetadataChespin2 = StickerMetadata<"STICKER_CHESPIN_2">;
export type StickerMetadataChespin3 = StickerMetadata<"STICKER_CHESPIN_3">;
export type StickerMetadataChespin4 = StickerMetadata<"STICKER_CHESPIN_4">;
export type StickerMetadataCityspotlight = StickerMetadata<"STICKER_CITYSPOTLIGHT">;
export type StickerMetadataConciergeEevee = StickerMetadata<"STICKER_CONCIERGE_EEVEE">;
export type StickerMetadataConciergePsyduck = StickerMetadata<"STICKER_CONCIERGE_PSYDUCK">;
export type StickerMetadataConciergeSealeo = StickerMetadata<"STICKER_CONCIERGE_SEALEO">;
export type StickerMetadataConciergeShinx = StickerMetadata<"STICKER_CONCIERGE_SHINX">;
export type StickerMetadataDeino1 = StickerMetadata<"STICKER_DEINO_1">;
export type StickerMetadataDeino2 = StickerMetadata<"STICKER_DEINO_2">;
export type StickerMetadataDeino3 = StickerMetadata<"STICKER_DEINO_3">;
export type StickerMetadataDeino4 = StickerMetadata<"STICKER_DEINO_4">;
export type StickerMetadataDiademuertos20231 = StickerMetadata<"STICKER_DIADEMUERTOS2023_1">;
export type StickerMetadataDiademuertos20232 = StickerMetadata<"STICKER_DIADEMUERTOS2023_2">;
export type StickerMetadataDiademuertos20233 = StickerMetadata<"STICKER_DIADEMUERTOS2023_3">;
export type StickerMetadataDiademuertos20234 = StickerMetadata<"STICKER_DIADEMUERTOS2023_4">;
export type StickerMetadataDiamondpearlchimchar = StickerMetadata<"STICKER_DIAMONDPEARLCHIMCHAR">;
export type StickerMetadataDiamondpearldialga = StickerMetadata<"STICKER_DIAMONDPEARLDIALGA">;
export type StickerMetadataDiamondpearllucario = StickerMetadata<"STICKER_DIAMONDPEARLLUCARIO">;
export type StickerMetadataDiamondpearlpalkia = StickerMetadata<"STICKER_DIAMONDPEARLPALKIA">;
export type StickerMetadataDiamondpearlpiplup = StickerMetadata<"STICKER_DIAMONDPEARLPIPLUP">;
export type StickerMetadataDiamondpearlturtwig = StickerMetadata<"STICKER_DIAMONDPEARLTURTWIG">;
export type StickerMetadataDitto1 = StickerMetadata<"STICKER_DITTO_1">;
export type StickerMetadataDitto2 = StickerMetadata<"STICKER_DITTO_2">;
export type StickerMetadataDitto3 = StickerMetadata<"STICKER_DITTO_3">;
export type StickerMetadataDitto4 = StickerMetadata<"STICKER_DITTO_4">;
export type StickerMetadataDitto5 = StickerMetadata<"STICKER_DITTO_5">;
export type StickerMetadataDitto6 = StickerMetadata<"STICKER_DITTO_6">;
export type StickerMetadataEeveefriends1 = StickerMetadata<"STICKER_EEVEEFRIENDS_1">;
export type StickerMetadataEeveefriends2 = StickerMetadata<"STICKER_EEVEEFRIENDS_2">;
export type StickerMetadataEeveefriends3 = StickerMetadata<"STICKER_EEVEEFRIENDS_3">;
export type StickerMetadataEeveefriends4 = StickerMetadata<"STICKER_EEVEEFRIENDS_4">;
export type StickerMetadataEeveefriends5 = StickerMetadata<"STICKER_EEVEEFRIENDS_5">;
export type StickerMetadataEeveefriends6 = StickerMetadata<"STICKER_EEVEEFRIENDS_6">;
export type StickerMetadataEeveefriends7 = StickerMetadata<"STICKER_EEVEEFRIENDS_7">;
export type StickerMetadataEeveefriends8 = StickerMetadata<"STICKER_EEVEEFRIENDS_8">;
export type StickerMetadataEeveefriends9 = StickerMetadata<"STICKER_EEVEEFRIENDS_9">;
export type StickerMetadataEternatus = StickerMetadata<"STICKER_ETERNATUS">;
export type StickerMetadataFall20231 = StickerMetadata<"STICKER_FALL_2023_1">;
export type StickerMetadataFall20232 = StickerMetadata<"STICKER_FALL_2023_2">;
export type StickerMetadataFall20233 = StickerMetadata<"STICKER_FALL_2023_3">;
export type StickerMetadataFall20234 = StickerMetadata<"STICKER_FALL_2023_4">;
export type StickerMetadataFall20235 = StickerMetadata<"STICKER_FALL_2023_5">;
export type StickerMetadataFall20236 = StickerMetadata<"STICKER_FALL_2023_6">;
export type StickerMetadataFall20241 = StickerMetadata<"STICKER_FALL_2024_1">;
export type StickerMetadataFall20242 = StickerMetadata<"STICKER_FALL_2024_2">;
export type StickerMetadataFall20243 = StickerMetadata<"STICKER_FALL_2024_3">;
export type StickerMetadataFall20244 = StickerMetadata<"STICKER_FALL_2024_4">;
export type StickerMetadataFall20245 = StickerMetadata<"STICKER_FALL_2024_5">;
export type StickerMetadataFall20246 = StickerMetadata<"STICKER_FALL_2024_6">;
export type StickerMetadataFall20251 = StickerMetadata<"STICKER_FALL_2025_1">;
export type StickerMetadataFall20252 = StickerMetadata<"STICKER_FALL_2025_2">;
export type StickerMetadataFall20253 = StickerMetadata<"STICKER_FALL_2025_3">;
export type StickerMetadataFall20254 = StickerMetadata<"STICKER_FALL_2025_4">;
export type StickerMetadataFallSawsbuck = StickerMetadata<"STICKER_FALL_SAWSBUCK">;
export type StickerMetadataFallShroomish = StickerMetadata<"STICKER_FALL_SHROOMISH">;
export type StickerMetadataFallSkwovet = StickerMetadata<"STICKER_FALL_SKWOVET">;
export type StickerMetadataFallTeddiursa = StickerMetadata<"STICKER_FALL_TEDDIURSA">;
export type StickerMetadataFallTrevenant = StickerMetadata<"STICKER_FALL_TREVENANT">;
export type StickerMetadataFallVulpix = StickerMetadata<"STICKER_FALL_VULPIX">;
export type StickerMetadataFennekin1 = StickerMetadata<"STICKER_FENNEKIN_1">;
export type StickerMetadataFennekin2 = StickerMetadata<"STICKER_FENNEKIN_2">;
export type StickerMetadataFennekin3 = StickerMetadata<"STICKER_FENNEKIN_3">;
export type StickerMetadataFennekin4 = StickerMetadata<"STICKER_FENNEKIN_4">;
export type StickerMetadataFestivaloflightMorelull = StickerMetadata<"STICKER_FESTIVALOFLIGHT_MORELULL">;
export type StickerMetadataFestivaloflightShiinotic = StickerMetadata<"STICKER_FESTIVALOFLIGHT_SHIINOTIC">;
export type StickerMetadataFestivalofthelights21V1 = StickerMetadata<"STICKER_FESTIVALOFTHELIGHTS21_V1">;
export type StickerMetadataFestivalofthelights21V2 = StickerMetadata<"STICKER_FESTIVALOFTHELIGHTS21_V2">;
export type StickerMetadataFestivalofthelights21V3 = StickerMetadata<"STICKER_FESTIVALOFTHELIGHTS21_V3">;
export type StickerMetadataFestivalofthelights21V4 = StickerMetadata<"STICKER_FESTIVALOFTHELIGHTS21_V4">;
export type StickerMetadataFlabebe1 = StickerMetadata<"STICKER_FLABEBE_1">;
export type StickerMetadataFlabebe2 = StickerMetadata<"STICKER_FLABEBE_2">;
export type StickerMetadataFlairHeart1 = StickerMetadata<"STICKER_FLAIR_HEART_1">;
export type StickerMetadataFlairHeart2 = StickerMetadata<"STICKER_FLAIR_HEART_2">;
export type StickerMetadataFlairHeart3 = StickerMetadata<"STICKER_FLAIR_HEART_3">;
export type StickerMetadataFlairHeart4 = StickerMetadata<"STICKER_FLAIR_HEART_4">;
export type StickerMetadataFlairHeart5 = StickerMetadata<"STICKER_FLAIR_HEART_5">;
export type StickerMetadataFlairStar1 = StickerMetadata<"STICKER_FLAIR_STAR_1">;
export type StickerMetadataFlairStar2 = StickerMetadata<"STICKER_FLAIR_STAR_2">;
export type StickerMetadataFlairStar3 = StickerMetadata<"STICKER_FLAIR_STAR_3">;
export type StickerMetadataFlairStar4 = StickerMetadata<"STICKER_FLAIR_STAR_4">;
export type StickerMetadataFlairStar5 = StickerMetadata<"STICKER_FLAIR_STAR_5">;
export type StickerMetadataFlairStar6 = StickerMetadata<"STICKER_FLAIR_STAR_6">;
export type StickerMetadataFlairStar7 = StickerMetadata<"STICKER_FLAIR_STAR_7">;
export type StickerMetadataFormulaekoreaPikachu = StickerMetadata<"STICKER_FORMULAEKOREA_PIKACHU">;
export type StickerMetadataFossilmuseum1 = StickerMetadata<"STICKER_FOSSILMUSEUM_1">;
export type StickerMetadataFossilmuseum2 = StickerMetadata<"STICKER_FOSSILMUSEUM_2">;
export type StickerMetadataFroakie1 = StickerMetadata<"STICKER_FROAKIE_1">;
export type StickerMetadataFroakie2 = StickerMetadata<"STICKER_FROAKIE_2">;
export type StickerMetadataFroakie3 = StickerMetadata<"STICKER_FROAKIE_3">;
export type StickerMetadataFroakie4 = StickerMetadata<"STICKER_FROAKIE_4">;
export type StickerMetadataFunawari04312 = StickerMetadata<"STICKER_FUNAWARI_04_312">;
export type StickerMetadataFunawari05312 = StickerMetadata<"STICKER_FUNAWARI_05_312">;
export type StickerMetadataFunawari06312 = StickerMetadata<"STICKER_FUNAWARI_06_312">;
export type StickerMetadataFunawari22312 = StickerMetadata<"STICKER_FUNAWARI_22_312">;
export type StickerMetadataFunwari020608 = StickerMetadata<"STICKER_FUNWARI_02_0608">;
export type StickerMetadataFunwari10 = StickerMetadata<"STICKER_FUNWARI_10">;
export type StickerMetadataFunwari11Thanku = StickerMetadata<"STICKER_FUNWARI_11_THANKU">;
export type StickerMetadataFunwari1202 = StickerMetadata<"STICKER_FUNWARI_12_02">;
export type StickerMetadataFunwari18 = StickerMetadata<"STICKER_FUNWARI_18">;
export type StickerMetadataFunwari20 = StickerMetadata<"STICKER_FUNWARI_20">;
export type StickerMetadataFunwari35 = StickerMetadata<"STICKER_FUNWARI_35">;
export type StickerMetadataFunwariPidgey18 = StickerMetadata<"STICKER_FUNWARI_PIDGEY_18">;
export type StickerMetadataFurfrouheart1 = StickerMetadata<"STICKER_FURFROUHEART_1">;
export type StickerMetadataFurfrouheart2 = StickerMetadata<"STICKER_FURFROUHEART_2">;
export type StickerMetadataGalarianzigzagoon1 = StickerMetadata<"STICKER_GALARIANZIGZAGOON_1">;
export type StickerMetadataGalarianzigzagoon2 = StickerMetadata<"STICKER_GALARIANZIGZAGOON_2">;
export type StickerMetadataGalarianzigzagoon3 = StickerMetadata<"STICKER_GALARIANZIGZAGOON_3">;
export type StickerMetadataGalarianzigzagoon4 = StickerMetadata<"STICKER_GALARIANZIGZAGOON_4">;
export type StickerMetadataGiftthankyou = StickerMetadata<"STICKER_GIFTTHANKYOU">;
export type StickerMetadataGimmighoul1 = StickerMetadata<"STICKER_GIMMIGHOUL_1">;
export type StickerMetadataGimmighoul2 = StickerMetadata<"STICKER_GIMMIGHOUL_2">;
export type StickerMetadataGimmighoul3 = StickerMetadata<"STICKER_GIMMIGHOUL_3">;
export type StickerMetadataGimmighoul4 = StickerMetadata<"STICKER_GIMMIGHOUL_4">;
export type StickerMetadataGimmighoul5 = StickerMetadata<"STICKER_GIMMIGHOUL_5">;
export type StickerMetadataGoomycd1 = StickerMetadata<"STICKER_GOOMYCD_1">;
export type StickerMetadataGoomycd2 = StickerMetadata<"STICKER_GOOMYCD_2">;
export type StickerMetadataGoomycd3 = StickerMetadata<"STICKER_GOOMYCD_3">;
export type StickerMetadataGoomycd4 = StickerMetadata<"STICKER_GOOMYCD_4">;
export type StickerMetadataGotour2021 = StickerMetadata<"STICKER_GOTOUR2021">;
export type StickerMetadataGotour20221 = StickerMetadata<"STICKER_GOTOUR2022_1">;
export type StickerMetadataGotour20222 = StickerMetadata<"STICKER_GOTOUR2022_2">;
export type StickerMetadataGotour20223 = StickerMetadata<"STICKER_GOTOUR2022_3">;
export type StickerMetadataGotour20224 = StickerMetadata<"STICKER_GOTOUR2022_4">;
export type StickerMetadataGotour2022Chikorita = StickerMetadata<"STICKER_GOTOUR2022_CHIKORITA">;
export type StickerMetadataGotour2022Cyndaquil = StickerMetadata<"STICKER_GOTOUR2022_CYNDAQUIL">;
export type StickerMetadataGotour2022Hooh = StickerMetadata<"STICKER_GOTOUR2022_HOOH">;
export type StickerMetadataGotour2022Lugia = StickerMetadata<"STICKER_GOTOUR2022_LUGIA">;
export type StickerMetadataGotour2022Togepi = StickerMetadata<"STICKER_GOTOUR2022_TOGEPI">;
export type StickerMetadataGotour2022Totodile = StickerMetadata<"STICKER_GOTOUR2022_TOTODILE">;
export type StickerMetadataGotour2025Badge = StickerMetadata<"STICKER_GOTOUR2025_BADGE">;
export type StickerMetadataGotour2025Kyuremblack = StickerMetadata<"STICKER_GOTOUR2025_KYUREMBLACK">;
export type StickerMetadataGotour2025Kyuremwhite = StickerMetadata<"STICKER_GOTOUR2025_KYUREMWHITE">;
export type StickerMetadataGotour2025Reshiram = StickerMetadata<"STICKER_GOTOUR2025_RESHIRAM">;
export type StickerMetadataGotour2025Rz = StickerMetadata<"STICKER_GOTOUR2025_RZ">;
export type StickerMetadataGotour2025Zekrom = StickerMetadata<"STICKER_GOTOUR2025_ZEKROM">;
export type StickerMetadataGotourhoenn1 = StickerMetadata<"STICKER_GOTOURHOENN_1">;
export type StickerMetadataGotourhoenn2 = StickerMetadata<"STICKER_GOTOURHOENN_2">;
export type StickerMetadataGotourhoenn3 = StickerMetadata<"STICKER_GOTOURHOENN_3">;
export type StickerMetadataGotourhoenn4 = StickerMetadata<"STICKER_GOTOURHOENN_4">;
export type StickerMetadataGotourhoenn5 = StickerMetadata<"STICKER_GOTOURHOENN_5">;
export type StickerMetadataGotourhoenn6 = StickerMetadata<"STICKER_GOTOURHOENN_6">;
export type StickerMetadataGowa202501 = StickerMetadata<"STICKER_GOWA2025_01">;
export type StickerMetadataGowa202502 = StickerMetadata<"STICKER_GOWA2025_02">;
export type StickerMetadataGowa202503 = StickerMetadata<"STICKER_GOWA2025_03">;
export type StickerMetadataGowa202504 = StickerMetadata<"STICKER_GOWA2025_04">;
export type StickerMetadataGowa202505 = StickerMetadata<"STICKER_GOWA2025_05">;
export type StickerMetadataGrubbin1 = StickerMetadata<"STICKER_GRUBBIN_1">;
export type StickerMetadataGrubbin2 = StickerMetadata<"STICKER_GRUBBIN_2">;
export type StickerMetadataGrubbin3 = StickerMetadata<"STICKER_GRUBBIN_3">;
export type StickerMetadataGrubbin4 = StickerMetadata<"STICKER_GRUBBIN_4">;
export type StickerMetadataHalloween2022Gengar = StickerMetadata<"STICKER_HALLOWEEN2022_GENGAR">;
export type StickerMetadataHalloween2022Pumpkaboo = StickerMetadata<"STICKER_HALLOWEEN2022_PUMPKABOO">;
export type StickerMetadataHalloween2022Vulpix = StickerMetadata<"STICKER_HALLOWEEN2022_VULPIX">;
export type StickerMetadataHalloween2025Noibat = StickerMetadata<"STICKER_HALLOWEEN2025_NOIBAT">;
export type StickerMetadataHalloween2025Teddiursa = StickerMetadata<"STICKER_HALLOWEEN2025_TEDDIURSA">;
export type StickerMetadataHalloween21Fuwaraid = StickerMetadata<"STICKER_HALLOWEEN21_FUWARAID">;
export type StickerMetadataHalloween21Ghostpika = StickerMetadata<"STICKER_HALLOWEEN21_GHOSTPIKA">;
export type StickerMetadataHalloween21Pikachu = StickerMetadata<"STICKER_HALLOWEEN21_PIKACHU">;
export type StickerMetadataHalloween21Pochama = StickerMetadata<"STICKER_HALLOWEEN21_POCHAMA">;
export type StickerMetadataHalloween23Gengar = StickerMetadata<"STICKER_HALLOWEEN23_GENGAR">;
export type StickerMetadataHalloween23Greavard = StickerMetadata<"STICKER_HALLOWEEN23_GREAVARD">;
export type StickerMetadataHalloween23Misdreavus = StickerMetadata<"STICKER_HALLOWEEN23_MISDREAVUS">;
export type StickerMetadataHalloween23Phantump = StickerMetadata<"STICKER_HALLOWEEN23_PHANTUMP">;
export type StickerMetadataHalloween24Froakie = StickerMetadata<"STICKER_HALLOWEEN24_FROAKIE">;
export type StickerMetadataHalloween24Rowlet = StickerMetadata<"STICKER_HALLOWEEN24_ROWLET">;
export type StickerMetadataHalloweenBulb = StickerMetadata<"STICKER_HALLOWEEN_BULB">;
export type StickerMetadataHalloweenCharm = StickerMetadata<"STICKER_HALLOWEEN_CHARM">;
export type StickerMetadataHalloweenGengarmd = StickerMetadata<"STICKER_HALLOWEEN_GENGARMD">;
export type StickerMetadataHalloweenPika = StickerMetadata<"STICKER_HALLOWEEN_PIKA">;
export type StickerMetadataHalloweenSableyemd = StickerMetadata<"STICKER_HALLOWEEN_SABLEYEMD">;
export type StickerMetadataHalloweenSqu = StickerMetadata<"STICKER_HALLOWEEN_SQU">;
export type StickerMetadataHaruCherrim = StickerMetadata<"STICKER_HARU_CHERRIM">;
export type StickerMetadataHaruDredearpika = StickerMetadata<"STICKER_HARU_DREDEARPIKA">;
export type StickerMetadataHaruKireihana = StickerMetadata<"STICKER_HARU_KIREIHANA">;
export type StickerMetadataHaruLalantes = StickerMetadata<"STICKER_HARU_LALANTES">;
export type StickerMetadataHaruMebukishikijik = StickerMetadata<"STICKER_HARU_MEBUKISHIKIJIK">;
export type StickerMetadataHaruMitsuhoney = StickerMetadata<"STICKER_HARU_MITSUHONEY">;
export type StickerMetadataHawlucha01 = StickerMetadata<"STICKER_HAWLUCHA_01">;
export type StickerMetadataHisuidiscoArcanine = StickerMetadata<"STICKER_HISUIDISCO_ARCANINE">;
export type StickerMetadataHisuidiscoBraviary = StickerMetadata<"STICKER_HISUIDISCO_BRAVIARY">;
export type StickerMetadataHisuidiscoGrowlithe = StickerMetadata<"STICKER_HISUIDISCO_GROWLITHE">;
export type StickerMetadataHolidayevent211 = StickerMetadata<"STICKER_HOLIDAYEVENT21_1">;
export type StickerMetadataHolidayevent212 = StickerMetadata<"STICKER_HOLIDAYEVENT21_2">;
export type StickerMetadataHolidayevent213 = StickerMetadata<"STICKER_HOLIDAYEVENT21_3">;
export type StickerMetadataHolidayevent214 = StickerMetadata<"STICKER_HOLIDAYEVENT21_4">;
export type StickerMetadataHolidayevent22Cubchoo = StickerMetadata<"STICKER_HOLIDAYEVENT22_CUBCHOO">;
export type StickerMetadataHolidayevent22Scatterbug = StickerMetadata<"STICKER_HOLIDAYEVENT22_SCATTERBUG">;
export type StickerMetadataHolidayevent22Snowpika = StickerMetadata<"STICKER_HOLIDAYEVENT22_SNOWPIKA">;
export type StickerMetadataHolidayevent22Vulpix = StickerMetadata<"STICKER_HOLIDAYEVENT22_VULPIX">;
export type StickerMetadataHolidayevent23Cetoddle = StickerMetadata<"STICKER_HOLIDAYEVENT23_CETODDLE">;
export type StickerMetadataHolidayevent23Cryogonal = StickerMetadata<"STICKER_HOLIDAYEVENT23_CRYOGONAL">;
export type StickerMetadataHolidayevent23Psyduck = StickerMetadata<"STICKER_HOLIDAYEVENT23_PSYDUCK">;
export type StickerMetadataHolidayevent23Seel = StickerMetadata<"STICKER_HOLIDAYEVENT23_SEEL">;
export type StickerMetadataHolidayevent23Vanillish = StickerMetadata<"STICKER_HOLIDAYEVENT23_VANILLISH">;
export type StickerMetadataHolographicChancey = StickerMetadata<"STICKER_HOLOGRAPHIC_CHANCEY">;
export type StickerMetadataHolographicCharmeleon = StickerMetadata<"STICKER_HOLOGRAPHIC_CHARMELEON">;
export type StickerMetadataHolographicIvysaur = StickerMetadata<"STICKER_HOLOGRAPHIC_IVYSAUR">;
export type StickerMetadataHolographicMeltan = StickerMetadata<"STICKER_HOLOGRAPHIC_MELTAN">;
export type StickerMetadataHolographicPikachu = StickerMetadata<"STICKER_HOLOGRAPHIC_PIKACHU">;
export type StickerMetadataHolographicWartortle = StickerMetadata<"STICKER_HOLOGRAPHIC_WARTORTLE">;
export type StickerMetadataHoppip1 = StickerMetadata<"STICKER_HOPPIP_1">;
export type StickerMetadataHoppip2 = StickerMetadata<"STICKER_HOPPIP_2">;
export type StickerMetadataHoppip3 = StickerMetadata<"STICKER_HOPPIP_3">;
export type StickerMetadataHoppip4 = StickerMetadata<"STICKER_HOPPIP_4">;
export type StickerMetadataIndonesiajourney1 = StickerMetadata<"STICKER_INDONESIAJOURNEY_1">;
export type StickerMetadataIndonesiajourney2 = StickerMetadata<"STICKER_INDONESIAJOURNEY_2">;
export type StickerMetadataIplpartnership1 = StickerMetadata<"STICKER_IPLPARTNERSHIP_1">;
export type StickerMetadataIplpartnership2 = StickerMetadata<"STICKER_IPLPARTNERSHIP_2">;
export type StickerMetadataJunecd2023Axew1 = StickerMetadata<"STICKER_JUNECD2023_AXEW_1">;
export type StickerMetadataJunecd2023Axew2 = StickerMetadata<"STICKER_JUNECD2023_AXEW_2">;
export type StickerMetadataJunecd2023Axew3 = StickerMetadata<"STICKER_JUNECD2023_AXEW_3">;
export type StickerMetadataJunecd2023Axew4 = StickerMetadata<"STICKER_JUNECD2023_AXEW_4">;
export type StickerMetadataKoreatown1 = StickerMetadata<"STICKER_KOREATOWN_1">;
export type StickerMetadataKoreatown2 = StickerMetadata<"STICKER_KOREATOWN_2">;
export type StickerMetadataKoreatown3 = StickerMetadata<"STICKER_KOREATOWN_3">;
export type StickerMetadataKrDitto = StickerMetadata<"STICKER_KR_DITTO">;
export type StickerMetadataKurtasaree1 = StickerMetadata<"STICKER_KURTASAREE_1">;
export type StickerMetadataKurtasaree2 = StickerMetadata<"STICKER_KURTASAREE_2">;
export type StickerMetadataKurtasaree3 = StickerMetadata<"STICKER_KURTASAREE_3">;
export type StickerMetadataKurtasaree4 = StickerMetadata<"STICKER_KURTASAREE_4">;
export type StickerMetadataKurtasaree5 = StickerMetadata<"STICKER_KURTASAREE_5">;
export type StickerMetadataKurtasaree6 = StickerMetadata<"STICKER_KURTASAREE_6">;
export type StickerMetadataLentillaunchCamera = StickerMetadata<"STICKER_LENTILLAUNCH_CAMERA">;
export type StickerMetadataLittencd1 = StickerMetadata<"STICKER_LITTENCD_1">;
export type StickerMetadataLittencd2 = StickerMetadata<"STICKER_LITTENCD_2">;
export type StickerMetadataLittencd3 = StickerMetadata<"STICKER_LITTENCD_3">;
export type StickerMetadataLittencd4 = StickerMetadata<"STICKER_LITTENCD_4">;
export type StickerMetadataLitwick1 = StickerMetadata<"STICKER_LITWICK_1">;
export type StickerMetadataLitwick2 = StickerMetadata<"STICKER_LITWICK_2">;
export type StickerMetadataLitwick3 = StickerMetadata<"STICKER_LITWICK_3">;
export type StickerMetadataLitwick4 = StickerMetadata<"STICKER_LITWICK_4">;
export type StickerMetadataLuvdisc = StickerMetadata<"STICKER_LUVDISC">;
export type StickerMetadataMankey1 = StickerMetadata<"STICKER_MANKEY_1">;
export type StickerMetadataMankey2 = StickerMetadata<"STICKER_MANKEY_2">;
export type StickerMetadataMankey3 = StickerMetadata<"STICKER_MANKEY_3">;
export type StickerMetadataMankey4 = StickerMetadata<"STICKER_MANKEY_4">;
export type StickerMetadataMegaevolutionParis1 = StickerMetadata<"STICKER_MEGAEVOLUTION_PARIS_1">;
export type StickerMetadataMegaevolutionParis2 = StickerMetadata<"STICKER_MEGAEVOLUTION_PARIS_2">;
export type StickerMetadataMegaevolutionParis3 = StickerMetadata<"STICKER_MEGAEVOLUTION_PARIS_3">;
export type StickerMetadataMewtwo = StickerMetadata<"STICKER_MEWTWO">;
export type StickerMetadataMewLaugh = StickerMetadata<"STICKER_MEW_LAUGH">;
export type StickerMetadataMukkuruCd1 = StickerMetadata<"STICKER_MUKKURU_CD_1">;
export type StickerMetadataMukkuruCd2 = StickerMetadata<"STICKER_MUKKURU_CD_2">;
export type StickerMetadataMukkuruCd3 = StickerMetadata<"STICKER_MUKKURU_CD_3">;
export type StickerMetadataMukkuruCd4 = StickerMetadata<"STICKER_MUKKURU_CD_4">;
export type StickerMetadataNagano06312 = StickerMetadata<"STICKER_NAGANO_06_312">;
export type StickerMetadataNagano08 = StickerMetadata<"STICKER_NAGANO_08">;
export type StickerMetadataNagano11 = StickerMetadata<"STICKER_NAGANO_11">;
export type StickerMetadataNagano15 = StickerMetadata<"STICKER_NAGANO_15">;
export type StickerMetadataNagano15312 = StickerMetadata<"STICKER_NAGANO_15_312">;
export type StickerMetadataNaganoBath = StickerMetadata<"STICKER_NAGANO_BATH">;
export type StickerMetadataNaganoMarill = StickerMetadata<"STICKER_NAGANO_MARILL">;
export type StickerMetadataNaganoYadon = StickerMetadata<"STICKER_NAGANO_YADON">;
export type StickerMetadataNewpokemon21 = StickerMetadata<"STICKER_NEWPOKEMON2_1">;
export type StickerMetadataNewpokemon215 = StickerMetadata<"STICKER_NEWPOKEMON2_15">;
export type StickerMetadataNewpokemon233 = StickerMetadata<"STICKER_NEWPOKEMON2_33">;
export type StickerMetadataNewpokemon04 = StickerMetadata<"STICKER_NEWPOKEMON_04">;
export type StickerMetadataNewpokemon20 = StickerMetadata<"STICKER_NEWPOKEMON_20">;
export type StickerMetadataNewpokemon37 = StickerMetadata<"STICKER_NEWPOKEMON_37">;
export type StickerMetadataNewteamrascal = StickerMetadata<"STICKER_NEWTEAMRASCAL">;
export type StickerMetadataNewteamrascalpikachu26 = StickerMetadata<"STICKER_NEWTEAMRASCALPIKACHU_26">;
export type StickerMetadataNewyears221 = StickerMetadata<"STICKER_NEWYEARS22_1">;
export type StickerMetadataNewyears222 = StickerMetadata<"STICKER_NEWYEARS22_2">;
export type StickerMetadataNewyears223 = StickerMetadata<"STICKER_NEWYEARS22_3">;
export type StickerMetadataNewyears224 = StickerMetadata<"STICKER_NEWYEARS22_4">;
export type StickerMetadataNewyears231 = StickerMetadata<"STICKER_NEWYEARS23_1">;
export type StickerMetadataNewyears232 = StickerMetadata<"STICKER_NEWYEARS23_2">;
export type StickerMetadataNewyears233 = StickerMetadata<"STICKER_NEWYEARS23_3">;
export type StickerMetadataNewyears234 = StickerMetadata<"STICKER_NEWYEARS23_4">;
export type StickerMetadataNiaLogo = StickerMetadata<"STICKER_NIA_LOGO">;
export type StickerMetadataNigiyaka080508312 = StickerMetadata<"STICKER_NIGIYAKA_08_0508_312">;
export type StickerMetadataNigiyaka160508312 = StickerMetadata<"STICKER_NIGIYAKA_16_0508_312">;
export type StickerMetadataNoibatCd1 = StickerMetadata<"STICKER_NOIBAT_CD_1">;
export type StickerMetadataNoibatCd2 = StickerMetadata<"STICKER_NOIBAT_CD_2">;
export type StickerMetadataNoibatCd3 = StickerMetadata<"STICKER_NOIBAT_CD_3">;
export type StickerMetadataNoibatCd4 = StickerMetadata<"STICKER_NOIBAT_CD_4">;
export type StickerMetadataNyarth38 = StickerMetadata<"STICKER_NYARTH_38">;
export type StickerMetadataObservatory01 = StickerMetadata<"STICKER_OBSERVATORY_01">;
export type StickerMetadataObservatory02 = StickerMetadata<"STICKER_OBSERVATORY_02">;
export type StickerMetadataPapelpicadotgr1 = StickerMetadata<"STICKER_PAPELPICADOTGR_1">;
export type StickerMetadataPapelpicadotgr2 = StickerMetadata<"STICKER_PAPELPICADOTGR_2">;
export type StickerMetadataPapelpicadotgr3 = StickerMetadata<"STICKER_PAPELPICADOTGR_3">;
export type StickerMetadataPapelpicadotgr4 = StickerMetadata<"STICKER_PAPELPICADOTGR_4">;
export type StickerMetadataPapelpicadotgr5 = StickerMetadata<"STICKER_PAPELPICADOTGR_5">;
export type StickerMetadataPgofest2021Galarianzigzagoon = StickerMetadata<"STICKER_PGOFEST2021_GALARIANZIGZAGOON">;
export type StickerMetadataPgofest2021Logo = StickerMetadata<"STICKER_PGOFEST2021_LOGO">;
export type StickerMetadataPgofest2021Meloetta1 = StickerMetadata<"STICKER_PGOFEST2021_MELOETTA_1">;
export type StickerMetadataPgofest2021Meloetta2 = StickerMetadata<"STICKER_PGOFEST2021_MELOETTA_2">;
export type StickerMetadataPgofest2021Ponyta = StickerMetadata<"STICKER_PGOFEST2021_PONYTA">;
export type StickerMetadataPgofest2021Shirticon = StickerMetadata<"STICKER_PGOFEST2021_SHIRTICON">;
export type StickerMetadataPgofest2022Denjyumoku = StickerMetadata<"STICKER_PGOFEST2022_DENJYUMOKU">;
export type StickerMetadataPgofest2022Groudon = StickerMetadata<"STICKER_PGOFEST2022_GROUDON">;
export type StickerMetadataPgofest2022Kibago = StickerMetadata<"STICKER_PGOFEST2022_KIBAGO">;
export type StickerMetadataPgofest2022Kyogre = StickerMetadata<"STICKER_PGOFEST2022_KYOGRE">;
export type StickerMetadataPgofest2022Massivoon = StickerMetadata<"STICKER_PGOFEST2022_MASSIVOON">;
export type StickerMetadataPgofest2022Pheroache = StickerMetadata<"STICKER_PGOFEST2022_PHEROACHE">;
export type StickerMetadataPgofest2022Pikachu = StickerMetadata<"STICKER_PGOFEST2022_PIKACHU">;
export type StickerMetadataPgofest2022Pochama = StickerMetadata<"STICKER_PGOFEST2022_POCHAMA">;
export type StickerMetadataPgofest2022Shaymin = StickerMetadata<"STICKER_PGOFEST2022_SHAYMIN">;
export type StickerMetadataPgofest2022Shayminsky = StickerMetadata<"STICKER_PGOFEST2022_SHAYMINSKY">;
export type StickerMetadataPgofest2022Uturoid = StickerMetadata<"STICKER_PGOFEST2022_UTUROID">;
export type StickerMetadataPgoFest2017 = StickerMetadata<"STICKER_PGO_FEST_2017">;
export type StickerMetadataPgoFest2018 = StickerMetadata<"STICKER_PGO_FEST_2018">;
export type StickerMetadataPgoFest2019 = StickerMetadata<"STICKER_PGO_FEST_2019">;
export type StickerMetadataPgoFest2020 = StickerMetadata<"STICKER_PGO_FEST_2020">;
export type StickerMetadataPgoFest2020Logo = StickerMetadata<"STICKER_PGO_FEST_2020_LOGO">;
export type StickerMetadataPgoFest2022 = StickerMetadata<"STICKER_PGO_FEST_2022">;
export type StickerMetadataPgoFest2022Logo = StickerMetadata<"STICKER_PGO_FEST_2022_LOGO">;
export type StickerMetadataPgoFest2023 = StickerMetadata<"STICKER_PGO_FEST_2023">;
export type StickerMetadataPgoFest20231 = StickerMetadata<"STICKER_PGO_FEST_2023_1">;
export type StickerMetadataPgoFest20232 = StickerMetadata<"STICKER_PGO_FEST_2023_2">;
export type StickerMetadataPgoFest20233 = StickerMetadata<"STICKER_PGO_FEST_2023_3">;
export type StickerMetadataPgoFest20234 = StickerMetadata<"STICKER_PGO_FEST_2023_4">;
export type StickerMetadataPgoFest20235 = StickerMetadata<"STICKER_PGO_FEST_2023_5">;
export type StickerMetadataPgoFest20236 = StickerMetadata<"STICKER_PGO_FEST_2023_6">;
export type StickerMetadataPgoFest2023Logo = StickerMetadata<"STICKER_PGO_FEST_2023_LOGO">;
export type StickerMetadataPgoFest2024 = StickerMetadata<"STICKER_PGO_FEST_2024">;
export type StickerMetadataPgoFest20241 = StickerMetadata<"STICKER_PGO_FEST_2024_1">;
export type StickerMetadataPgoFest20242 = StickerMetadata<"STICKER_PGO_FEST_2024_2">;
export type StickerMetadataPgoFest20243 = StickerMetadata<"STICKER_PGO_FEST_2024_3">;
export type StickerMetadataPgoFest20244 = StickerMetadata<"STICKER_PGO_FEST_2024_4">;
export type StickerMetadataPgoFest20245 = StickerMetadata<"STICKER_PGO_FEST_2024_5">;
export type StickerMetadataPgoFest20246 = StickerMetadata<"STICKER_PGO_FEST_2024_6">;
export type StickerMetadataPgoFest2024Logo = StickerMetadata<"STICKER_PGO_FEST_2024_LOGO">;
export type StickerMetadataPgoFest2025 = StickerMetadata<"STICKER_PGO_FEST_2025">;
export type StickerMetadataPgoFest20251 = StickerMetadata<"STICKER_PGO_FEST_2025_1">;
export type StickerMetadataPgoFest20252 = StickerMetadata<"STICKER_PGO_FEST_2025_2">;
export type StickerMetadataPgoFest20253 = StickerMetadata<"STICKER_PGO_FEST_2025_3">;
export type StickerMetadataPgoFest2025Logo = StickerMetadata<"STICKER_PGO_FEST_2025_LOGO">;
export type StickerMetadataPgoFestVictini05 = StickerMetadata<"STICKER_PGO_FEST_VICTINI_05">;
export type StickerMetadataPgoTour2024 = StickerMetadata<"STICKER_PGO_TOUR_2024">;
export type StickerMetadataPgoTour20241 = StickerMetadata<"STICKER_PGO_TOUR_2024_1">;
export type StickerMetadataPgoTour20242 = StickerMetadata<"STICKER_PGO_TOUR_2024_2">;
export type StickerMetadataPgoTour20243 = StickerMetadata<"STICKER_PGO_TOUR_2024_3">;
export type StickerMetadataPgoTour20244 = StickerMetadata<"STICKER_PGO_TOUR_2024_4">;
export type StickerMetadataPgoTour20245 = StickerMetadata<"STICKER_PGO_TOUR_2024_5">;
export type StickerMetadataPgoTour2024Logo = StickerMetadata<"STICKER_PGO_TOUR_2024_LOGO">;
export type StickerMetadataPgoTour2026 = StickerMetadata<"STICKER_PGO_TOUR_2026">;
export type StickerMetadataPgoTour20261 = StickerMetadata<"STICKER_PGO_TOUR_2026_1">;
export type StickerMetadataPgoTour20262 = StickerMetadata<"STICKER_PGO_TOUR_2026_2">;
export type StickerMetadataPgoTour20263 = StickerMetadata<"STICKER_PGO_TOUR_2026_3">;
export type StickerMetadataPgoTour2026Logo = StickerMetadata<"STICKER_PGO_TOUR_2026_LOGO">;
export type StickerMetadataPgoWildarea2024 = StickerMetadata<"STICKER_PGO_WILDAREA_2024">;
export type StickerMetadataPgoWildarea20241 = StickerMetadata<"STICKER_PGO_WILDAREA_2024_1">;
export type StickerMetadataPgoWildarea20242 = StickerMetadata<"STICKER_PGO_WILDAREA_2024_2">;
export type StickerMetadataPgoWildarea20243 = StickerMetadata<"STICKER_PGO_WILDAREA_2024_3">;
export type StickerMetadataPgoWildarea20244 = StickerMetadata<"STICKER_PGO_WILDAREA_2024_4">;
export type StickerMetadataPgoWildarea2024Logo = StickerMetadata<"STICKER_PGO_WILDAREA_2024_LOGO">;
export type StickerMetadataPikaairadventure1 = StickerMetadata<"STICKER_PIKAAIRADVENTURE_1">;
export type StickerMetadataPikaairadventure2 = StickerMetadata<"STICKER_PIKAAIRADVENTURE_2">;
export type StickerMetadataPikaairadventure3 = StickerMetadata<"STICKER_PIKAAIRADVENTURE_3">;
export type StickerMetadataPikaairjejuPikachu = StickerMetadata<"STICKER_PIKAAIRJEJU_PIKACHU">;
export type StickerMetadataPikaairsingaporeLapras = StickerMetadata<"STICKER_PIKAAIRSINGAPORE_LAPRAS">;
export type StickerMetadataPikaairsingaporePikachu = StickerMetadata<"STICKER_PIKAAIRSINGAPORE_PIKACHU">;
export type StickerMetadataPikaairtaiwanPikachu = StickerMetadata<"STICKER_PIKAAIRTAIWAN_PIKACHU">;
export type StickerMetadataPikaairtaiwanSnorlax = StickerMetadata<"STICKER_PIKAAIRTAIWAN_SNORLAX">;
export type StickerMetadataPikachuJol = StickerMetadata<"STICKER_PIKACHU_JOL">;
export type StickerMetadataPika14Thankyou = StickerMetadata<"STICKER_PIKA_14_THANKYOU">;
export type StickerMetadataPokemonchatpals204 = StickerMetadata<"STICKER_POKEMONCHATPALS2_04">;
export type StickerMetadataPokemonchatpals240 = StickerMetadata<"STICKER_POKEMONCHATPALS2_40">;
export type StickerMetadataPokopiaBulbasaur = StickerMetadata<"STICKER_POKOPIA_BULBASAUR">;
export type StickerMetadataPokopiaPikachu = StickerMetadata<"STICKER_POKOPIA_PIKACHU">;
export type StickerMetadataPokopiaSnorlax = StickerMetadata<"STICKER_POKOPIA_SNORLAX">;
export type StickerMetadataPokopiaTangrowth = StickerMetadata<"STICKER_POKOPIA_TANGROWTH">;
export type StickerMetadataPoliwag1 = StickerMetadata<"STICKER_POLIWAG_1">;
export type StickerMetadataPoliwag2 = StickerMetadata<"STICKER_POLIWAG_2">;
export type StickerMetadataPoliwag3 = StickerMetadata<"STICKER_POLIWAG_3">;
export type StickerMetadataPoliwag4 = StickerMetadata<"STICKER_POLIWAG_4">;
export type StickerMetadataPonyta1 = StickerMetadata<"STICKER_PONYTA_1">;
export type StickerMetadataPonyta2 = StickerMetadata<"STICKER_PONYTA_2">;
export type StickerMetadataPonyta3 = StickerMetadata<"STICKER_PONYTA_3">;
export type StickerMetadataPonyta4 = StickerMetadata<"STICKER_PONYTA_4">;
export type StickerMetadataPoppliocd1 = StickerMetadata<"STICKER_POPPLIOCD_1">;
export type StickerMetadataPoppliocd2 = StickerMetadata<"STICKER_POPPLIOCD_2">;
export type StickerMetadataPoppliocd3 = StickerMetadata<"STICKER_POPPLIOCD_3">;
export type StickerMetadataPoppliocd4 = StickerMetadata<"STICKER_POPPLIOCD_4">;
export type StickerMetadataProjectguitar04 = StickerMetadata<"STICKER_PROJECTGUITAR_04">;
export type StickerMetadataProjectguitar07 = StickerMetadata<"STICKER_PROJECTGUITAR_07">;
export type StickerMetadataProjectguitar13 = StickerMetadata<"STICKER_PROJECTGUITAR_13">;
export type StickerMetadataProjectguitar25 = StickerMetadata<"STICKER_PROJECTGUITAR_25">;
export type StickerMetadataProjectguitarFroakie = StickerMetadata<"STICKER_PROJECTGUITAR_FROAKIE">;
export type StickerMetadataPsychicspec21Inkay = StickerMetadata<"STICKER_PSYCHICSPEC21_INKAY">;
export type StickerMetadataPsychicspec21Inkay2 = StickerMetadata<"STICKER_PSYCHICSPEC21_INKAY2">;
export type StickerMetadataRoggenrolaCd1 = StickerMetadata<"STICKER_ROGGENROLA_CD_1">;
export type StickerMetadataRoggenrolaCd2 = StickerMetadata<"STICKER_ROGGENROLA_CD_2">;
export type StickerMetadataRoggenrolaCd3 = StickerMetadata<"STICKER_ROGGENROLA_CD_3">;
export type StickerMetadataRoggenrolaCd4 = StickerMetadata<"STICKER_ROGGENROLA_CD_4">;
export type StickerMetadataRowletcd1 = StickerMetadata<"STICKER_ROWLETCD_1">;
export type StickerMetadataRowletcd2 = StickerMetadata<"STICKER_ROWLETCD_2">;
export type StickerMetadataRowletcd3 = StickerMetadata<"STICKER_ROWLETCD_3">;
export type StickerMetadataRowletcd4 = StickerMetadata<"STICKER_ROWLETCD_4">;
export type StickerMetadataSandshrew1 = StickerMetadata<"STICKER_SANDSHREW_1">;
export type StickerMetadataSandshrew2 = StickerMetadata<"STICKER_SANDSHREW_2">;
export type StickerMetadataSandshrew3 = StickerMetadata<"STICKER_SANDSHREW_3">;
export type StickerMetadataSandshrew4 = StickerMetadata<"STICKER_SANDSHREW_4">;
export type StickerMetadataSecretsofthejungle1 = StickerMetadata<"STICKER_SECRETSOFTHEJUNGLE_1">;
export type StickerMetadataSecretsofthejungle4 = StickerMetadata<"STICKER_SECRETSOFTHEJUNGLE_4">;
export type StickerMetadataSecretsofthejungle5 = StickerMetadata<"STICKER_SECRETSOFTHEJUNGLE_5">;
export type StickerMetadataSecretsofthejungle6 = StickerMetadata<"STICKER_SECRETSOFTHEJUNGLE_6">;
export type StickerMetadataSecretsofthejungle7 = StickerMetadata<"STICKER_SECRETSOFTHEJUNGLE_7">;
export type StickerMetadataSecretsofthejungle8 = StickerMetadata<"STICKER_SECRETSOFTHEJUNGLE_8">;
export type StickerMetadataSecretsofthejungle9 = StickerMetadata<"STICKER_SECRETSOFTHEJUNGLE_9">;
export type StickerMetadataSewaddlecd1 = StickerMetadata<"STICKER_SEWADDLECD_1">;
export type StickerMetadataSewaddlecd2 = StickerMetadata<"STICKER_SEWADDLECD_2">;
export type StickerMetadataSewaddlecd3 = StickerMetadata<"STICKER_SEWADDLECD_3">;
export type StickerMetadataSewaddlecd4 = StickerMetadata<"STICKER_SEWADDLECD_4">;
export type StickerMetadataShelmetKarrablast1 = StickerMetadata<"STICKER_SHELMET_KARRABLAST_1">;
export type StickerMetadataShelmetKarrablast2 = StickerMetadata<"STICKER_SHELMET_KARRABLAST_2">;
export type StickerMetadataShelmetKarrablast3 = StickerMetadata<"STICKER_SHELMET_KARRABLAST_3">;
export type StickerMetadataSleep1 = StickerMetadata<"STICKER_SLEEP_1">;
export type StickerMetadataSleep2 = StickerMetadata<"STICKER_SLEEP_2">;
export type StickerMetadataSleep3 = StickerMetadata<"STICKER_SLEEP_3">;
export type StickerMetadataSleep4 = StickerMetadata<"STICKER_SLEEP_4">;
export type StickerMetadataSleep5 = StickerMetadata<"STICKER_SLEEP_5">;
export type StickerMetadataSleep6 = StickerMetadata<"STICKER_SLEEP_6">;
export type StickerMetadataSleep7 = StickerMetadata<"STICKER_SLEEP_7">;
export type StickerMetadataSlowpoke1 = StickerMetadata<"STICKER_SLOWPOKE_1">;
export type StickerMetadataSlowpoke2 = StickerMetadata<"STICKER_SLOWPOKE_2">;
export type StickerMetadataSlowpoke3 = StickerMetadata<"STICKER_SLOWPOKE_3">;
export type StickerMetadataSlowpoke4 = StickerMetadata<"STICKER_SLOWPOKE_4">;
export type StickerMetadataSpheal1 = StickerMetadata<"STICKER_SPHEAL_1">;
export type StickerMetadataSpheal2 = StickerMetadata<"STICKER_SPHEAL_2">;
export type StickerMetadataSpheal3 = StickerMetadata<"STICKER_SPHEAL_3">;
export type StickerMetadataSpheal4 = StickerMetadata<"STICKER_SPHEAL_4">;
export type StickerMetadataSprigatito1 = StickerMetadata<"STICKER_SPRIGATITO_1">;
export type StickerMetadataSprigatito2 = StickerMetadata<"STICKER_SPRIGATITO_2">;
export type StickerMetadataSprigatito3 = StickerMetadata<"STICKER_SPRIGATITO_3">;
export type StickerMetadataSprigatito4 = StickerMetadata<"STICKER_SPRIGATITO_4">;
export type StickerMetadataSpring20241 = StickerMetadata<"STICKER_SPRING_2024_1">;
export type StickerMetadataSpring20242 = StickerMetadata<"STICKER_SPRING_2024_2">;
export type StickerMetadataSpring20243 = StickerMetadata<"STICKER_SPRING_2024_3">;
export type StickerMetadataSpring20244 = StickerMetadata<"STICKER_SPRING_2024_4">;
export type StickerMetadataSpring20245 = StickerMetadata<"STICKER_SPRING_2024_5">;
export type StickerMetadataSpring20246 = StickerMetadata<"STICKER_SPRING_2024_6">;
export type StickerMetadataSpring20251 = StickerMetadata<"STICKER_SPRING_2025_1">;
export type StickerMetadataSpring20252 = StickerMetadata<"STICKER_SPRING_2025_2">;
export type StickerMetadataSpring20253 = StickerMetadata<"STICKER_SPRING_2025_3">;
export type StickerMetadataSpring20254 = StickerMetadata<"STICKER_SPRING_2025_4">;
export type StickerMetadataSpring20261 = StickerMetadata<"STICKER_SPRING_2026_1">;
export type StickerMetadataSpring20262 = StickerMetadata<"STICKER_SPRING_2026_2">;
export type StickerMetadataSpring20263 = StickerMetadata<"STICKER_SPRING_2026_3">;
export type StickerMetadataSpring20264 = StickerMetadata<"STICKER_SPRING_2026_4">;
export type StickerMetadataSpringEievui = StickerMetadata<"STICKER_SPRING_EIEVUI">;
export type StickerMetadataSpringHapinas = StickerMetadata<"STICKER_SPRING_HAPINAS">;
export type StickerMetadataSpringMimirol = StickerMetadata<"STICKER_SPRING_MIMIROL">;
export type StickerMetadataSpringNimphia = StickerMetadata<"STICKER_SPRING_NIMPHIA">;
export type StickerMetadataSpringPikachu = StickerMetadata<"STICKER_SPRING_PIKACHU">;
export type StickerMetadataSpringPipito = StickerMetadata<"STICKER_SPRING_PIPITO">;
export type StickerMetadataStufful1 = StickerMetadata<"STICKER_STUFFUL_1">;
export type StickerMetadataStufful2 = StickerMetadata<"STICKER_STUFFUL_2">;
export type StickerMetadataStufful3 = StickerMetadata<"STICKER_STUFFUL_3">;
export type StickerMetadataStufful4 = StickerMetadata<"STICKER_STUFFUL_4">;
export type StickerMetadataSummer1 = StickerMetadata<"STICKER_SUMMER_1">;
export type StickerMetadataSummer2 = StickerMetadata<"STICKER_SUMMER_2">;
export type StickerMetadataSummer2023Blastoise = StickerMetadata<"STICKER_SUMMER_2023_BLASTOISE">;
export type StickerMetadataSummer2023Butterfree = StickerMetadata<"STICKER_SUMMER_2023_BUTTERFREE">;
export type StickerMetadataSummer2023Clamperl = StickerMetadata<"STICKER_SUMMER_2023_CLAMPERL">;
export type StickerMetadataSummer2023Ledian = StickerMetadata<"STICKER_SUMMER_2023_LEDIAN">;
export type StickerMetadataSummer2023Sawsbuck = StickerMetadata<"STICKER_SUMMER_2023_SAWSBUCK">;
export type StickerMetadataSummer2023Squirtle = StickerMetadata<"STICKER_SUMMER_2023_SQUIRTLE">;
export type StickerMetadataSummer20241 = StickerMetadata<"STICKER_SUMMER_2024_1">;
export type StickerMetadataSummer20242 = StickerMetadata<"STICKER_SUMMER_2024_2">;
export type StickerMetadataSummer20243 = StickerMetadata<"STICKER_SUMMER_2024_3">;
export type StickerMetadataSummer20244 = StickerMetadata<"STICKER_SUMMER_2024_4">;
export type StickerMetadataSummer20245 = StickerMetadata<"STICKER_SUMMER_2024_5">;
export type StickerMetadataSummer20246 = StickerMetadata<"STICKER_SUMMER_2024_6">;
export type StickerMetadataSummer20251 = StickerMetadata<"STICKER_SUMMER_2025_1">;
export type StickerMetadataSummer20252 = StickerMetadata<"STICKER_SUMMER_2025_2">;
export type StickerMetadataSummer20253 = StickerMetadata<"STICKER_SUMMER_2025_3">;
export type StickerMetadataSummer20254 = StickerMetadata<"STICKER_SUMMER_2025_4">;
export type StickerMetadataSummer3 = StickerMetadata<"STICKER_SUMMER_3">;
export type StickerMetadataSummer4 = StickerMetadata<"STICKER_SUMMER_4">;
export type StickerMetadataSummer5 = StickerMetadata<"STICKER_SUMMER_5">;
export type StickerMetadataSummer6 = StickerMetadata<"STICKER_SUMMER_6">;
export type StickerMetadataSwordshield211 = StickerMetadata<"STICKER_SWORDSHIELD21_1">;
export type StickerMetadataSwordshield212 = StickerMetadata<"STICKER_SWORDSHIELD21_2">;
export type StickerMetadataSwordshield213 = StickerMetadata<"STICKER_SWORDSHIELD21_3">;
export type StickerMetadataSwordshield214 = StickerMetadata<"STICKER_SWORDSHIELD21_4">;
export type StickerMetadataSwordshield215 = StickerMetadata<"STICKER_SWORDSHIELD21_5">;
export type StickerMetadataTeddiursa1 = StickerMetadata<"STICKER_TEDDIURSA_1">;
export type StickerMetadataTeddiursa2 = StickerMetadata<"STICKER_TEDDIURSA_2">;
export type StickerMetadataTeddiursa3 = StickerMetadata<"STICKER_TEDDIURSA_3">;
export type StickerMetadataTeddiursa4 = StickerMetadata<"STICKER_TEDDIURSA_4">;
export type StickerMetadataTimburr1 = StickerMetadata<"STICKER_TIMBURR_1">;
export type StickerMetadataTimburr2 = StickerMetadata<"STICKER_TIMBURR_2">;
export type StickerMetadataTimburr3 = StickerMetadata<"STICKER_TIMBURR_3">;
export type StickerMetadataTimburr4 = StickerMetadata<"STICKER_TIMBURR_4">;
export type StickerMetadataTlBlanche = StickerMetadata<"STICKER_TL_BLANCHE">;
export type StickerMetadataTlCandela = StickerMetadata<"STICKER_TL_CANDELA">;
export type StickerMetadataTlSpark = StickerMetadata<"STICKER_TL_SPARK">;
export type StickerMetadataTogeticcd20231 = StickerMetadata<"STICKER_TOGETICCD2023_1">;
export type StickerMetadataTogeticcd20232 = StickerMetadata<"STICKER_TOGETICCD2023_2">;
export type StickerMetadataTogeticcd20233 = StickerMetadata<"STICKER_TOGETICCD2023_3">;
export type StickerMetadataTogeticcd20234 = StickerMetadata<"STICKER_TOGETICCD2023_4">;
export type StickerMetadataTrArlo = StickerMetadata<"STICKER_TR_ARLO">;
export type StickerMetadataTrCliff = StickerMetadata<"STICKER_TR_CLIFF">;
export type StickerMetadataTrSierra = StickerMetadata<"STICKER_TR_SIERRA">;
export type StickerMetadataTynamocd1 = StickerMetadata<"STICKER_TYNAMOCD_1">;
export type StickerMetadataTynamocd2 = StickerMetadata<"STICKER_TYNAMOCD_2">;
export type StickerMetadataTynamocd3 = StickerMetadata<"STICKER_TYNAMOCD_3">;
export type StickerMetadataTynamocd4 = StickerMetadata<"STICKER_TYNAMOCD_4">;
export type StickerMetadataValentine20231 = StickerMetadata<"STICKER_VALENTINE2023_1">;
export type StickerMetadataValentine20232 = StickerMetadata<"STICKER_VALENTINE2023_2">;
export type StickerMetadataValentine20233 = StickerMetadata<"STICKER_VALENTINE2023_3">;
export type StickerMetadataWcs2025CarGroup = StickerMetadata<"STICKER_WCS2025_CAR_GROUP">;
export type StickerMetadataWcs2025Jigglypuff = StickerMetadata<"STICKER_WCS2025_JIGGLYPUFF">;
export type StickerMetadataWcs2025Murkrow = StickerMetadata<"STICKER_WCS2025_MURKROW">;
export type StickerMetadataWcs2025Pikachu = StickerMetadata<"STICKER_WCS2025_PIKACHU">;
export type StickerMetadataWcsPlay = StickerMetadata<"STICKER_WCS_PLAY">;
export type StickerMetadataWillowBronze = StickerMetadata<"STICKER_WILLOW_BRONZE">;
export type StickerMetadataWillowGold = StickerMetadata<"STICKER_WILLOW_GOLD">;
export type StickerMetadataWillowSilver = StickerMetadata<"STICKER_WILLOW_SILVER">;
export type StickerMetadataWinter20231 = StickerMetadata<"STICKER_WINTER2023_1">;
export type StickerMetadataWinter20232 = StickerMetadata<"STICKER_WINTER2023_2">;
export type StickerMetadataWinter20233 = StickerMetadata<"STICKER_WINTER2023_3">;
export type StickerMetadataWinter20234 = StickerMetadata<"STICKER_WINTER2023_4">;
export type StickerMetadataWinter20235 = StickerMetadata<"STICKER_WINTER2023_5">;
export type StickerMetadataWinter20236 = StickerMetadata<"STICKER_WINTER2023_6">;
export type StickerMetadataWinter20251 = StickerMetadata<"STICKER_WINTER2025_1">;
export type StickerMetadataWinter20252 = StickerMetadata<"STICKER_WINTER2025_2">;
export type StickerMetadataWinter20253 = StickerMetadata<"STICKER_WINTER2025_3">;
export type StickerMetadataWinter20254 = StickerMetadata<"STICKER_WINTER2025_4">;
export type StickerMetadataWinter20241 = StickerMetadata<"STICKER_WINTER_2024_1">;
export type StickerMetadataWinter20242 = StickerMetadata<"STICKER_WINTER_2024_2">;
export type StickerMetadataWinter20243 = StickerMetadata<"STICKER_WINTER_2024_3">;
export type StickerMetadataWinter20244 = StickerMetadata<"STICKER_WINTER_2024_4">;
export type StickerMetadataWinter20245 = StickerMetadata<"STICKER_WINTER_2024_5">;
export type StickerMetadataWinter20246 = StickerMetadata<"STICKER_WINTER_2024_6">;
export type StickerMetadataWinterAmaura = StickerMetadata<"STICKER_WINTER_AMAURA">;
export type StickerMetadataWinterDarumaka = StickerMetadata<"STICKER_WINTER_DARUMAKA">;
export type StickerMetadataWinterGlaceon = StickerMetadata<"STICKER_WINTER_GLACEON">;
export type StickerMetadataWinterPikachu = StickerMetadata<"STICKER_WINTER_PIKACHU">;
export type StickerMetadataWinterSawsbuck = StickerMetadata<"STICKER_WINTER_SAWSBUCK">;
export type StickerMetadataWinterSnorunt = StickerMetadata<"STICKER_WINTER_SNORUNT">;
export type StickerMetadataWoopercd20231 = StickerMetadata<"STICKER_WOOPERCD2023_1">;
export type StickerMetadataWoopercd20232 = StickerMetadata<"STICKER_WOOPERCD2023_2">;
export type StickerMetadataWoopercd20233 = StickerMetadata<"STICKER_WOOPERCD2023_3">;
export type StickerMetadataWoopercd20234 = StickerMetadata<"STICKER_WOOPERCD2023_4">;
export type StickerMetadataYadon = StickerMetadata<"STICKER_YADON">;
export type StickerMetadataYurutto12 = StickerMetadata<"STICKER_YURUTTO_12">;
export type StickerMetadataYurutto24 = StickerMetadata<"STICKER_YURUTTO_24">;
export type StickerMetadataYurutto26 = StickerMetadata<"STICKER_YURUTTO_26">;
export type StickerMetadataYurutto33 = StickerMetadata<"STICKER_YURUTTO_33">;
export type StickerMetadataYurutto36 = StickerMetadata<"STICKER_YURUTTO_36">;
export type StickerMetadataYurutto37 = StickerMetadata<"STICKER_YURUTTO_37">;

export type StickerMetadataMasterfileEntry =
	| StickerMetadata2023collab1
	| StickerMetadata2023collab2
	| StickerMetadata2023collab3
	| StickerMetadata2023collab4
	| StickerMetadata6anniv1
	| StickerMetadata6anniv2
	| StickerMetadata6anniv3
	| StickerMetadata6anniv4
	| StickerMetadata6anniv5
	| StickerMetadata6anniv6
	| StickerMetadata7anniv1
	| StickerMetadata7anniv2
	| StickerMetadata7anniv3
	| StickerMetadata7anniv4
	| StickerMetadata7anniv5
	| StickerMetadata8anniv1
	| StickerMetadata8anniv2
	| StickerMetadata8anniv3
	| StickerMetadata8anniv4
	| StickerMetadata9anniv1
	| StickerMetadata9anniv2
	| StickerMetadata9anniv3
	| StickerMetadataAlolaishi1
	| StickerMetadataAlolaishi2
	| StickerMetadataAlolaishi3
	| StickerMetadataAlolaishi4
	| StickerMetadataAprilfool20231
	| StickerMetadataAprilfool20232
	| StickerMetadataAudino
	| StickerMetadataBellsproutcd1
	| StickerMetadataBellsproutcd2
	| StickerMetadataBellsproutcd3
	| StickerMetadataBellsproutcd4
	| StickerMetadataBidoofday1
	| StickerMetadataBidoofday2
	| StickerMetadataBidoofday3
	| StickerMetadataBounsweetcd20241
	| StickerMetadataBounsweetcd20242
	| StickerMetadataBounsweetcd20243
	| StickerMetadataBounsweetcd20244
	| StickerMetadataBreadkorea001
	| StickerMetadataBreadkorea002
	| StickerMetadataBreadkorea003
	| StickerMetadataBreadkorea004
	| StickerMetadataBreadkorea005
	| StickerMetadataBreadkorea006
	| StickerMetadataChanseycd1
	| StickerMetadataChanseycd2
	| StickerMetadataChanseycd3
	| StickerMetadataChanseycd4
	| StickerMetadataCharizard1
	| StickerMetadataCharizard2
	| StickerMetadataCharizard3
	| StickerMetadataChespin1
	| StickerMetadataChespin2
	| StickerMetadataChespin3
	| StickerMetadataChespin4
	| StickerMetadataCityspotlight
	| StickerMetadataConciergeEevee
	| StickerMetadataConciergePsyduck
	| StickerMetadataConciergeSealeo
	| StickerMetadataConciergeShinx
	| StickerMetadataDeino1
	| StickerMetadataDeino2
	| StickerMetadataDeino3
	| StickerMetadataDeino4
	| StickerMetadataDiademuertos20231
	| StickerMetadataDiademuertos20232
	| StickerMetadataDiademuertos20233
	| StickerMetadataDiademuertos20234
	| StickerMetadataDiamondpearlchimchar
	| StickerMetadataDiamondpearldialga
	| StickerMetadataDiamondpearllucario
	| StickerMetadataDiamondpearlpalkia
	| StickerMetadataDiamondpearlpiplup
	| StickerMetadataDiamondpearlturtwig
	| StickerMetadataDitto1
	| StickerMetadataDitto2
	| StickerMetadataDitto3
	| StickerMetadataDitto4
	| StickerMetadataDitto5
	| StickerMetadataDitto6
	| StickerMetadataEeveefriends1
	| StickerMetadataEeveefriends2
	| StickerMetadataEeveefriends3
	| StickerMetadataEeveefriends4
	| StickerMetadataEeveefriends5
	| StickerMetadataEeveefriends6
	| StickerMetadataEeveefriends7
	| StickerMetadataEeveefriends8
	| StickerMetadataEeveefriends9
	| StickerMetadataEternatus
	| StickerMetadataFall20231
	| StickerMetadataFall20232
	| StickerMetadataFall20233
	| StickerMetadataFall20234
	| StickerMetadataFall20235
	| StickerMetadataFall20236
	| StickerMetadataFall20241
	| StickerMetadataFall20242
	| StickerMetadataFall20243
	| StickerMetadataFall20244
	| StickerMetadataFall20245
	| StickerMetadataFall20246
	| StickerMetadataFall20251
	| StickerMetadataFall20252
	| StickerMetadataFall20253
	| StickerMetadataFall20254
	| StickerMetadataFallSawsbuck
	| StickerMetadataFallShroomish
	| StickerMetadataFallSkwovet
	| StickerMetadataFallTeddiursa
	| StickerMetadataFallTrevenant
	| StickerMetadataFallVulpix
	| StickerMetadataFennekin1
	| StickerMetadataFennekin2
	| StickerMetadataFennekin3
	| StickerMetadataFennekin4
	| StickerMetadataFestivaloflightMorelull
	| StickerMetadataFestivaloflightShiinotic
	| StickerMetadataFestivalofthelights21V1
	| StickerMetadataFestivalofthelights21V2
	| StickerMetadataFestivalofthelights21V3
	| StickerMetadataFestivalofthelights21V4
	| StickerMetadataFlabebe1
	| StickerMetadataFlabebe2
	| StickerMetadataFlairHeart1
	| StickerMetadataFlairHeart2
	| StickerMetadataFlairHeart3
	| StickerMetadataFlairHeart4
	| StickerMetadataFlairHeart5
	| StickerMetadataFlairStar1
	| StickerMetadataFlairStar2
	| StickerMetadataFlairStar3
	| StickerMetadataFlairStar4
	| StickerMetadataFlairStar5
	| StickerMetadataFlairStar6
	| StickerMetadataFlairStar7
	| StickerMetadataFormulaekoreaPikachu
	| StickerMetadataFossilmuseum1
	| StickerMetadataFossilmuseum2
	| StickerMetadataFroakie1
	| StickerMetadataFroakie2
	| StickerMetadataFroakie3
	| StickerMetadataFroakie4
	| StickerMetadataFunawari04312
	| StickerMetadataFunawari05312
	| StickerMetadataFunawari06312
	| StickerMetadataFunawari22312
	| StickerMetadataFunwari020608
	| StickerMetadataFunwari10
	| StickerMetadataFunwari11Thanku
	| StickerMetadataFunwari1202
	| StickerMetadataFunwari18
	| StickerMetadataFunwari20
	| StickerMetadataFunwari35
	| StickerMetadataFunwariPidgey18
	| StickerMetadataFurfrouheart1
	| StickerMetadataFurfrouheart2
	| StickerMetadataGalarianzigzagoon1
	| StickerMetadataGalarianzigzagoon2
	| StickerMetadataGalarianzigzagoon3
	| StickerMetadataGalarianzigzagoon4
	| StickerMetadataGiftthankyou
	| StickerMetadataGimmighoul1
	| StickerMetadataGimmighoul2
	| StickerMetadataGimmighoul3
	| StickerMetadataGimmighoul4
	| StickerMetadataGimmighoul5
	| StickerMetadataGoomycd1
	| StickerMetadataGoomycd2
	| StickerMetadataGoomycd3
	| StickerMetadataGoomycd4
	| StickerMetadataGotour2021
	| StickerMetadataGotour20221
	| StickerMetadataGotour20222
	| StickerMetadataGotour20223
	| StickerMetadataGotour20224
	| StickerMetadataGotour2022Chikorita
	| StickerMetadataGotour2022Cyndaquil
	| StickerMetadataGotour2022Hooh
	| StickerMetadataGotour2022Lugia
	| StickerMetadataGotour2022Togepi
	| StickerMetadataGotour2022Totodile
	| StickerMetadataGotour2025Badge
	| StickerMetadataGotour2025Kyuremblack
	| StickerMetadataGotour2025Kyuremwhite
	| StickerMetadataGotour2025Reshiram
	| StickerMetadataGotour2025Rz
	| StickerMetadataGotour2025Zekrom
	| StickerMetadataGotourhoenn1
	| StickerMetadataGotourhoenn2
	| StickerMetadataGotourhoenn3
	| StickerMetadataGotourhoenn4
	| StickerMetadataGotourhoenn5
	| StickerMetadataGotourhoenn6
	| StickerMetadataGowa202501
	| StickerMetadataGowa202502
	| StickerMetadataGowa202503
	| StickerMetadataGowa202504
	| StickerMetadataGowa202505
	| StickerMetadataGrubbin1
	| StickerMetadataGrubbin2
	| StickerMetadataGrubbin3
	| StickerMetadataGrubbin4
	| StickerMetadataHalloween2022Gengar
	| StickerMetadataHalloween2022Pumpkaboo
	| StickerMetadataHalloween2022Vulpix
	| StickerMetadataHalloween2025Noibat
	| StickerMetadataHalloween2025Teddiursa
	| StickerMetadataHalloween21Fuwaraid
	| StickerMetadataHalloween21Ghostpika
	| StickerMetadataHalloween21Pikachu
	| StickerMetadataHalloween21Pochama
	| StickerMetadataHalloween23Gengar
	| StickerMetadataHalloween23Greavard
	| StickerMetadataHalloween23Misdreavus
	| StickerMetadataHalloween23Phantump
	| StickerMetadataHalloween24Froakie
	| StickerMetadataHalloween24Rowlet
	| StickerMetadataHalloweenBulb
	| StickerMetadataHalloweenCharm
	| StickerMetadataHalloweenGengarmd
	| StickerMetadataHalloweenPika
	| StickerMetadataHalloweenSableyemd
	| StickerMetadataHalloweenSqu
	| StickerMetadataHaruCherrim
	| StickerMetadataHaruDredearpika
	| StickerMetadataHaruKireihana
	| StickerMetadataHaruLalantes
	| StickerMetadataHaruMebukishikijik
	| StickerMetadataHaruMitsuhoney
	| StickerMetadataHawlucha01
	| StickerMetadataHisuidiscoArcanine
	| StickerMetadataHisuidiscoBraviary
	| StickerMetadataHisuidiscoGrowlithe
	| StickerMetadataHolidayevent211
	| StickerMetadataHolidayevent212
	| StickerMetadataHolidayevent213
	| StickerMetadataHolidayevent214
	| StickerMetadataHolidayevent22Cubchoo
	| StickerMetadataHolidayevent22Scatterbug
	| StickerMetadataHolidayevent22Snowpika
	| StickerMetadataHolidayevent22Vulpix
	| StickerMetadataHolidayevent23Cetoddle
	| StickerMetadataHolidayevent23Cryogonal
	| StickerMetadataHolidayevent23Psyduck
	| StickerMetadataHolidayevent23Seel
	| StickerMetadataHolidayevent23Vanillish
	| StickerMetadataHolographicChancey
	| StickerMetadataHolographicCharmeleon
	| StickerMetadataHolographicIvysaur
	| StickerMetadataHolographicMeltan
	| StickerMetadataHolographicPikachu
	| StickerMetadataHolographicWartortle
	| StickerMetadataHoppip1
	| StickerMetadataHoppip2
	| StickerMetadataHoppip3
	| StickerMetadataHoppip4
	| StickerMetadataIndonesiajourney1
	| StickerMetadataIndonesiajourney2
	| StickerMetadataIplpartnership1
	| StickerMetadataIplpartnership2
	| StickerMetadataJunecd2023Axew1
	| StickerMetadataJunecd2023Axew2
	| StickerMetadataJunecd2023Axew3
	| StickerMetadataJunecd2023Axew4
	| StickerMetadataKoreatown1
	| StickerMetadataKoreatown2
	| StickerMetadataKoreatown3
	| StickerMetadataKrDitto
	| StickerMetadataKurtasaree1
	| StickerMetadataKurtasaree2
	| StickerMetadataKurtasaree3
	| StickerMetadataKurtasaree4
	| StickerMetadataKurtasaree5
	| StickerMetadataKurtasaree6
	| StickerMetadataLentillaunchCamera
	| StickerMetadataLittencd1
	| StickerMetadataLittencd2
	| StickerMetadataLittencd3
	| StickerMetadataLittencd4
	| StickerMetadataLitwick1
	| StickerMetadataLitwick2
	| StickerMetadataLitwick3
	| StickerMetadataLitwick4
	| StickerMetadataLuvdisc
	| StickerMetadataMankey1
	| StickerMetadataMankey2
	| StickerMetadataMankey3
	| StickerMetadataMankey4
	| StickerMetadataMegaevolutionParis1
	| StickerMetadataMegaevolutionParis2
	| StickerMetadataMegaevolutionParis3
	| StickerMetadataMewtwo
	| StickerMetadataMewLaugh
	| StickerMetadataMukkuruCd1
	| StickerMetadataMukkuruCd2
	| StickerMetadataMukkuruCd3
	| StickerMetadataMukkuruCd4
	| StickerMetadataNagano06312
	| StickerMetadataNagano08
	| StickerMetadataNagano11
	| StickerMetadataNagano15
	| StickerMetadataNagano15312
	| StickerMetadataNaganoBath
	| StickerMetadataNaganoMarill
	| StickerMetadataNaganoYadon
	| StickerMetadataNewpokemon21
	| StickerMetadataNewpokemon215
	| StickerMetadataNewpokemon233
	| StickerMetadataNewpokemon04
	| StickerMetadataNewpokemon20
	| StickerMetadataNewpokemon37
	| StickerMetadataNewteamrascal
	| StickerMetadataNewteamrascalpikachu26
	| StickerMetadataNewyears221
	| StickerMetadataNewyears222
	| StickerMetadataNewyears223
	| StickerMetadataNewyears224
	| StickerMetadataNewyears231
	| StickerMetadataNewyears232
	| StickerMetadataNewyears233
	| StickerMetadataNewyears234
	| StickerMetadataNiaLogo
	| StickerMetadataNigiyaka080508312
	| StickerMetadataNigiyaka160508312
	| StickerMetadataNoibatCd1
	| StickerMetadataNoibatCd2
	| StickerMetadataNoibatCd3
	| StickerMetadataNoibatCd4
	| StickerMetadataNyarth38
	| StickerMetadataObservatory01
	| StickerMetadataObservatory02
	| StickerMetadataPapelpicadotgr1
	| StickerMetadataPapelpicadotgr2
	| StickerMetadataPapelpicadotgr3
	| StickerMetadataPapelpicadotgr4
	| StickerMetadataPapelpicadotgr5
	| StickerMetadataPgofest2021Galarianzigzagoon
	| StickerMetadataPgofest2021Logo
	| StickerMetadataPgofest2021Meloetta1
	| StickerMetadataPgofest2021Meloetta2
	| StickerMetadataPgofest2021Ponyta
	| StickerMetadataPgofest2021Shirticon
	| StickerMetadataPgofest2022Denjyumoku
	| StickerMetadataPgofest2022Groudon
	| StickerMetadataPgofest2022Kibago
	| StickerMetadataPgofest2022Kyogre
	| StickerMetadataPgofest2022Massivoon
	| StickerMetadataPgofest2022Pheroache
	| StickerMetadataPgofest2022Pikachu
	| StickerMetadataPgofest2022Pochama
	| StickerMetadataPgofest2022Shaymin
	| StickerMetadataPgofest2022Shayminsky
	| StickerMetadataPgofest2022Uturoid
	| StickerMetadataPgoFest2017
	| StickerMetadataPgoFest2018
	| StickerMetadataPgoFest2019
	| StickerMetadataPgoFest2020
	| StickerMetadataPgoFest2020Logo
	| StickerMetadataPgoFest2022
	| StickerMetadataPgoFest2022Logo
	| StickerMetadataPgoFest2023
	| StickerMetadataPgoFest20231
	| StickerMetadataPgoFest20232
	| StickerMetadataPgoFest20233
	| StickerMetadataPgoFest20234
	| StickerMetadataPgoFest20235
	| StickerMetadataPgoFest20236
	| StickerMetadataPgoFest2023Logo
	| StickerMetadataPgoFest2024
	| StickerMetadataPgoFest20241
	| StickerMetadataPgoFest20242
	| StickerMetadataPgoFest20243
	| StickerMetadataPgoFest20244
	| StickerMetadataPgoFest20245
	| StickerMetadataPgoFest20246
	| StickerMetadataPgoFest2024Logo
	| StickerMetadataPgoFest2025
	| StickerMetadataPgoFest20251
	| StickerMetadataPgoFest20252
	| StickerMetadataPgoFest20253
	| StickerMetadataPgoFest2025Logo
	| StickerMetadataPgoFestVictini05
	| StickerMetadataPgoTour2024
	| StickerMetadataPgoTour20241
	| StickerMetadataPgoTour20242
	| StickerMetadataPgoTour20243
	| StickerMetadataPgoTour20244
	| StickerMetadataPgoTour20245
	| StickerMetadataPgoTour2024Logo
	| StickerMetadataPgoTour2026
	| StickerMetadataPgoTour20261
	| StickerMetadataPgoTour20262
	| StickerMetadataPgoTour20263
	| StickerMetadataPgoTour2026Logo
	| StickerMetadataPgoWildarea2024
	| StickerMetadataPgoWildarea20241
	| StickerMetadataPgoWildarea20242
	| StickerMetadataPgoWildarea20243
	| StickerMetadataPgoWildarea20244
	| StickerMetadataPgoWildarea2024Logo
	| StickerMetadataPikaairadventure1
	| StickerMetadataPikaairadventure2
	| StickerMetadataPikaairadventure3
	| StickerMetadataPikaairjejuPikachu
	| StickerMetadataPikaairsingaporeLapras
	| StickerMetadataPikaairsingaporePikachu
	| StickerMetadataPikaairtaiwanPikachu
	| StickerMetadataPikaairtaiwanSnorlax
	| StickerMetadataPikachuJol
	| StickerMetadataPika14Thankyou
	| StickerMetadataPokemonchatpals204
	| StickerMetadataPokemonchatpals240
	| StickerMetadataPokopiaBulbasaur
	| StickerMetadataPokopiaPikachu
	| StickerMetadataPokopiaSnorlax
	| StickerMetadataPokopiaTangrowth
	| StickerMetadataPoliwag1
	| StickerMetadataPoliwag2
	| StickerMetadataPoliwag3
	| StickerMetadataPoliwag4
	| StickerMetadataPonyta1
	| StickerMetadataPonyta2
	| StickerMetadataPonyta3
	| StickerMetadataPonyta4
	| StickerMetadataPoppliocd1
	| StickerMetadataPoppliocd2
	| StickerMetadataPoppliocd3
	| StickerMetadataPoppliocd4
	| StickerMetadataProjectguitar04
	| StickerMetadataProjectguitar07
	| StickerMetadataProjectguitar13
	| StickerMetadataProjectguitar25
	| StickerMetadataProjectguitarFroakie
	| StickerMetadataPsychicspec21Inkay
	| StickerMetadataPsychicspec21Inkay2
	| StickerMetadataRoggenrolaCd1
	| StickerMetadataRoggenrolaCd2
	| StickerMetadataRoggenrolaCd3
	| StickerMetadataRoggenrolaCd4
	| StickerMetadataRowletcd1
	| StickerMetadataRowletcd2
	| StickerMetadataRowletcd3
	| StickerMetadataRowletcd4
	| StickerMetadataSandshrew1
	| StickerMetadataSandshrew2
	| StickerMetadataSandshrew3
	| StickerMetadataSandshrew4
	| StickerMetadataSecretsofthejungle1
	| StickerMetadataSecretsofthejungle4
	| StickerMetadataSecretsofthejungle5
	| StickerMetadataSecretsofthejungle6
	| StickerMetadataSecretsofthejungle7
	| StickerMetadataSecretsofthejungle8
	| StickerMetadataSecretsofthejungle9
	| StickerMetadataSewaddlecd1
	| StickerMetadataSewaddlecd2
	| StickerMetadataSewaddlecd3
	| StickerMetadataSewaddlecd4
	| StickerMetadataShelmetKarrablast1
	| StickerMetadataShelmetKarrablast2
	| StickerMetadataShelmetKarrablast3
	| StickerMetadataSleep1
	| StickerMetadataSleep2
	| StickerMetadataSleep3
	| StickerMetadataSleep4
	| StickerMetadataSleep5
	| StickerMetadataSleep6
	| StickerMetadataSleep7
	| StickerMetadataSlowpoke1
	| StickerMetadataSlowpoke2
	| StickerMetadataSlowpoke3
	| StickerMetadataSlowpoke4
	| StickerMetadataSpheal1
	| StickerMetadataSpheal2
	| StickerMetadataSpheal3
	| StickerMetadataSpheal4
	| StickerMetadataSprigatito1
	| StickerMetadataSprigatito2
	| StickerMetadataSprigatito3
	| StickerMetadataSprigatito4
	| StickerMetadataSpring20241
	| StickerMetadataSpring20242
	| StickerMetadataSpring20243
	| StickerMetadataSpring20244
	| StickerMetadataSpring20245
	| StickerMetadataSpring20246
	| StickerMetadataSpring20251
	| StickerMetadataSpring20252
	| StickerMetadataSpring20253
	| StickerMetadataSpring20254
	| StickerMetadataSpring20261
	| StickerMetadataSpring20262
	| StickerMetadataSpring20263
	| StickerMetadataSpring20264
	| StickerMetadataSpringEievui
	| StickerMetadataSpringHapinas
	| StickerMetadataSpringMimirol
	| StickerMetadataSpringNimphia
	| StickerMetadataSpringPikachu
	| StickerMetadataSpringPipito
	| StickerMetadataStufful1
	| StickerMetadataStufful2
	| StickerMetadataStufful3
	| StickerMetadataStufful4
	| StickerMetadataSummer1
	| StickerMetadataSummer2
	| StickerMetadataSummer2023Blastoise
	| StickerMetadataSummer2023Butterfree
	| StickerMetadataSummer2023Clamperl
	| StickerMetadataSummer2023Ledian
	| StickerMetadataSummer2023Sawsbuck
	| StickerMetadataSummer2023Squirtle
	| StickerMetadataSummer20241
	| StickerMetadataSummer20242
	| StickerMetadataSummer20243
	| StickerMetadataSummer20244
	| StickerMetadataSummer20245
	| StickerMetadataSummer20246
	| StickerMetadataSummer20251
	| StickerMetadataSummer20252
	| StickerMetadataSummer20253
	| StickerMetadataSummer20254
	| StickerMetadataSummer3
	| StickerMetadataSummer4
	| StickerMetadataSummer5
	| StickerMetadataSummer6
	| StickerMetadataSwordshield211
	| StickerMetadataSwordshield212
	| StickerMetadataSwordshield213
	| StickerMetadataSwordshield214
	| StickerMetadataSwordshield215
	| StickerMetadataTeddiursa1
	| StickerMetadataTeddiursa2
	| StickerMetadataTeddiursa3
	| StickerMetadataTeddiursa4
	| StickerMetadataTimburr1
	| StickerMetadataTimburr2
	| StickerMetadataTimburr3
	| StickerMetadataTimburr4
	| StickerMetadataTlBlanche
	| StickerMetadataTlCandela
	| StickerMetadataTlSpark
	| StickerMetadataTogeticcd20231
	| StickerMetadataTogeticcd20232
	| StickerMetadataTogeticcd20233
	| StickerMetadataTogeticcd20234
	| StickerMetadataTrArlo
	| StickerMetadataTrCliff
	| StickerMetadataTrSierra
	| StickerMetadataTynamocd1
	| StickerMetadataTynamocd2
	| StickerMetadataTynamocd3
	| StickerMetadataTynamocd4
	| StickerMetadataValentine20231
	| StickerMetadataValentine20232
	| StickerMetadataValentine20233
	| StickerMetadataWcs2025CarGroup
	| StickerMetadataWcs2025Jigglypuff
	| StickerMetadataWcs2025Murkrow
	| StickerMetadataWcs2025Pikachu
	| StickerMetadataWcsPlay
	| StickerMetadataWillowBronze
	| StickerMetadataWillowGold
	| StickerMetadataWillowSilver
	| StickerMetadataWinter20231
	| StickerMetadataWinter20232
	| StickerMetadataWinter20233
	| StickerMetadataWinter20234
	| StickerMetadataWinter20235
	| StickerMetadataWinter20236
	| StickerMetadataWinter20251
	| StickerMetadataWinter20252
	| StickerMetadataWinter20253
	| StickerMetadataWinter20254
	| StickerMetadataWinter20241
	| StickerMetadataWinter20242
	| StickerMetadataWinter20243
	| StickerMetadataWinter20244
	| StickerMetadataWinter20245
	| StickerMetadataWinter20246
	| StickerMetadataWinterAmaura
	| StickerMetadataWinterDarumaka
	| StickerMetadataWinterGlaceon
	| StickerMetadataWinterPikachu
	| StickerMetadataWinterSawsbuck
	| StickerMetadataWinterSnorunt
	| StickerMetadataWoopercd20231
	| StickerMetadataWoopercd20232
	| StickerMetadataWoopercd20233
	| StickerMetadataWoopercd20234
	| StickerMetadataYadon
	| StickerMetadataYurutto12
	| StickerMetadataYurutto24
	| StickerMetadataYurutto26
	| StickerMetadataYurutto33
	| StickerMetadataYurutto36
	| StickerMetadataYurutto37;

export type StickerMetadataTemplateID = StickerMetadataMasterfileEntry["templateId"];
