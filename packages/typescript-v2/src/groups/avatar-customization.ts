export interface AvatarCustomization<T extends string> {
	templateId: T;
	data: AvatarCustomizationData<T>;
}

export interface AvatarCustomizationData<T extends string> {
	templateId: T;
	avatarCustomization: {
		assetName: "f_backpack_alolaitemslittenbp_0" | "f_backpack_alolaitemspoppliobp_0" | "f_backpack_alolaitemsrowletbp_0" | "f_backpack_animegou_0" | "f_backpack_backpacker_0" | "f_backpack_combeebackpack_0" | "f_backpack_combeebackpack_1" | "f_backpack_cute_0" | "f_backpack_dedenneitems_0" | "f_backpack_default_0" | "f_backpack_default_1" | "f_backpack_default_2" | "f_backpack_default_3" | "f_backpack_egg-incubator_0" | "f_backpack_eggbackpack_0" | "f_backpack_eggbackpack_1" | "f_backpack_eggbackpack_2" | "f_backpack_empty" | "f_backpack_frlg_0" | "f_backpack_genesecteventitem_0" | "f_backpack_gengar_0" | "f_backpack_giratinaitems_0" | "f_backpack_guccibackpack_0" | "f_backpack_guitarcasebackpack_0" | "f_backpack_hgss_0" | "f_backpack_hououbackpack_0" | "f_backpack_kakureonpouch_0" | "f_backpack_komala_0" | "f_backpack_longchampbp_00" | "f_backpack_lunalaitems_0" | "f_backpack_lunarNewYr_0" | "f_backpack_mimikyubp_0" | "f_backpack_movie2020_0" | "f_backpack_naganadelawings_0" | "f_backpack_nike2021_0" | "f_backpack_pamobackpack_0" | "f_backpack_pkmnhoodie001" | "f_backpack_pkmnhoodie004" | "f_backpack_pkmnhoodie007" | "f_backpack_ruinmaniac_0" | "f_backpack_snapcamera_0" | "f_backpack_ss_0" | "f_backpack_svcostumescarletschool_0" | "f_backpack_svcostumevioletschool_0" | "f_backpack_svdlc1_0" | "f_backpack_svdlc2spring_0" | "f_backpack_swshdlc2costume_0" | "f_backpack_swshdlccostume_0" | "f_backpack_togepibackpack_0" | "f_backpack_ultra" | "f_backpack_verizon2021_0" | "f_backpack_zubatbp_0" | "f_belt_acetrainerbw_0" | "f_belt_default_0" | "f_belt_default_1" | "f_belt_default_2" | "f_belt_default_3" | "f_belt_default_4" | "f_belt_default_5" | "f_belt_default_6" | "f_belt_default_7" | "f_belt_default_8" | "f_belt_empty" | "f_belt_simple_0" | "f_belt_simple_1" | "f_belt_simple_2" | "f_belt_simple_3" | "f_belt_teamrocket_0" | "f_belt_teamrocket_1" | "f_eyes_0" | "f_eyes_1" | "f_eyes_2" | "f_eyes_3" | "f_eyes_4" | "f_face_3dmask_0" | "f_face_3dmask_1" | "f_face_3dmask_2" | "f_face_banettemask_0" | "f_face_dayofthedead_0" | "f_face_defaultmask_0" | "f_face_empty" | "f_face_facestickerghostpika_0" | "f_face_facestickerpikachu_0" | "f_face_facestickerpokeball_0" | "f_face_festOfColors_0" | "f_face_festOfColors_1" | "f_face_festOfColors_2" | "f_face_gracidea_0" | "f_face_holiday2022santacostumes_0" | "f_face_pikachumask_0" | "f_face_sableyemask_0" | "f_face_teamskull_0" | "f_face_toxelmask_0" | "f_face_verizon2020mask_0" | "f_glasses_3d" | "f_glasses_cutieflysleepmask_0" | "f_glasses_divingsuit_0" | "f_glasses_drpikachu_0" | "f_glasses_empty" | "f_glasses_frillishglasses_0" | "f_glasses_fw2022_0" | "f_glasses_gimmighoulitems_0" | "f_glasses_goteamrocketarlo" | "f_glasses_grandoakglasses" | "f_glasses_lugiaglasses_0" | "f_glasses_lv40glasses_00" | "f_glasses_mask_0" | "f_glasses_mask_1" | "f_glasses_newyearglasses2020_0" | "f_glasses_newyearglasses2021_0" | "f_glasses_newyearglasses2022_0" | "f_glasses_obstagoonitems_0" | "f_glasses_roundsunglasses_0" | "f_glasses_teardrop_0" | "f_glasses_thick_0" | "f_glasses_thick_1" | "f_glasses_thick_2" | "f_glasses_thick_3" | "f_glasses_thick_4" | "f_gloves_acetrainersm_0" | "f_gloves_battlegirl_0" | "f_gloves_bea_0" | "f_gloves_bwn_0" | "f_gloves_default_0" | "f_gloves_default_1" | "f_gloves_default_2" | "f_gloves_default_3" | "f_gloves_delibird_0" | "f_gloves_dynamaxswsh_0" | "f_gloves_empty" | "f_gloves_frlg_0" | "f_gloves_geeta_0" | "f_gloves_giovanni_0" | "f_gloves_guzma_0" | "f_gloves_gymleader_0" | "f_gloves_hoopabangle_0" | "f_gloves_korrina_0" | "f_gloves_lysandre_0" | "f_gloves_megabangle_0" | "f_gloves_megabangleblack_0" | "f_gloves_megabangleblue_0" | "f_gloves_megabanglered_0" | "f_gloves_megabangleyellow_0" | "f_gloves_obstagoonitems_0" | "f_gloves_palmer_0" | "f_gloves_profwillowoutfit_0" | "f_gloves_stevenfirst_0" | "f_gloves_svdlc2spring_0" | "f_gloves_swshdlc2costume_0" | "f_gloves_swshdlccostume_0" | "f_gloves_swshuniformchampion_0" | "f_gloves_swshuniformdark_0" | "f_gloves_swshuniformdefault_0" | "f_gloves_swshuniformdragon_0" | "f_gloves_teamaqua_0" | "f_gloves_teammagma_0" | "f_gloves_teamrocket_0" | "f_gloves_teamspark_0" | "f_gloves_wintergloves2023_0" | "f_hair_default_0" | "f_hair_default_1" | "f_hair_default_10" | "f_hair_default_11" | "f_hair_default_12" | "f_hair_default_13" | "f_hair_default_14" | "f_hair_default_15" | "f_hair_default_16" | "f_hair_default_17" | "f_hair_default_18" | "f_hair_default_19" | "f_hair_default_2" | "f_hair_default_3" | "f_hair_default_4" | "f_hair_default_5" | "f_hair_default_6" | "f_hair_default_7" | "f_hair_default_8" | "f_hair_default_9" | "f_hat_6thanniversary_0" | "f_hat_acetrainersm_0" | "f_hat_adventure_0" | "f_hat_aseries_0" | "f_hat_bea_0" | "f_hat_bidoofhat_0" | "f_hat_bounsweetitems_0" | "f_hat_burmyearrings11_0" | "f_hat_burmyearrings12_0" | "f_hat_burmyearrings13_0" | "f_hat_bwn_0" | "f_hat_casket_0" | "f_hat_cetoddlehat_0" | "f_hat_clay_0" | "f_hat_cofagrigusitems_0" | "f_hat_cosmog_0" | "f_hat_crownmoon_0" | "f_hat_crownsun_0" | "f_hat_cubonehat_0" | "f_hat_darumakahat_0" | "f_hat_dedenneitems_0" | "f_hat_default_A_0" | "f_hat_default_A_1" | "f_hat_default_A_2" | "f_hat_default_A_3" | "f_hat_default_A_4" | "f_hat_default_A_5" | "f_hat_default_B_0" | "f_hat_default_B_1" | "f_hat_deino_0" | "f_hat_delibird_0" | "f_hat_detectivepikachu_0" | "f_hat_diancie_0" | "f_hat_dp_0" | "f_hat_drifloon_0" | "f_hat_drpikachu_0" | "f_hat_dusclopsmummy_0" | "f_hat_eeveecap_0" | "f_hat_elesa_0" | "f_hat_empty" | "f_hat_fedora_0" | "f_hat_fedora_1" | "f_hat_flabebepack_0" | "f_hat_fragment_0" | "f_hat_frlg_0" | "f_hat_furfrouwig_0" | "f_hat_fw2022_0" | "f_hat_galarfarfetchditems_0" | "f_hat_genesecteventitem_0" | "f_hat_gengar_0" | "f_hat_gimmighoulitems_0" | "f_hat_giratinaitems_0" | "f_hat_gladion_0" | "f_hat_gofest_pikachuvisor_0" | "f_hat_goomy_0" | "f_hat_greavardwig_0" | "f_hat_greencoat_0" | "f_hat_growlithehelmet_0" | "f_hat_gtr2024eeveefanmask_0" | "f_hat_gtr2024pikachufanmask_0" | "f_hat_guccihat_0" | "f_hat_guzma_0" | "f_hat_gyaradoscap_0" | "f_hat_hgss_0" | "f_hat_holiday2022santacostumes_0" | "f_hat_holidaybeanie_0" | "f_hat_hoopaearmuffs_0" | "f_hat_ingo_0" | "f_hat_kantotourcapgreen_0" | "f_hat_kantotourcapred_0" | "f_hat_knitted_0" | "f_hat_knitted_1" | "f_hat_korrina_0" | "f_hat_lana_0" | "f_hat_laprasbandana_0" | "f_hat_lasecuritycorps_0" | "f_hat_legendofarceus_0" | "f_hat_litwickhat_0" | "f_hat_loneearrings_0" | "f_hat_lvl50cap_0" | "f_hat_magikarp" | "f_hat_mareaniehat_0" | "f_hat_megalopunnyitems_0" | "f_hat_megarayquaza_0" | "f_hat_meltan_0" | "f_hat_meltanearrings_0" | "f_hat_mewtwo_0" | "f_hat_mimikyu_0" | "f_hat_mismagius_0" | "f_hat_movie2020_0" | "f_hat_munnapack_0" | "f_hat_munnapack_1" | "f_hat_newyear2022_0" | "f_hat_newyearhat2021_0" | "f_hat_newyearhat2023_0" | "f_hat_nihilegoitems_0" | "f_hat_noibat_0" | "f_hat_obstagoonitems_0" | "f_hat_oras_0" | "f_hat_oricorioPink_0" | "f_hat_oricorioPurple_0" | "f_hat_oricorioRed_0" | "f_hat_oricorioYellow_0" | "f_hat_partneritemsjan2024hat_0" | "f_hat_phantump_0" | "f_hat_pikachucap_0" | "f_hat_pikachufan_0" | "f_hat_pikachulibre_0" | "f_hat_pikachupumpkinhead_0" | "f_hat_pkmncap_0" | "f_hat_pkmncap_1" | "f_hat_pkmncap_2" | "f_hat_poipole_0" | "f_hat_profwillowoutfit_0" | "f_hat_regiicejersies_0" | "f_hat_regirockjersies_0" | "f_hat_registeeljersies_0" | "f_hat_ruinmaniac_0" | "f_hat_sableyegoggles_0" | "f_hat_samsungsummer2020_0" | "f_hat_sandygasthat_0" | "f_hat_shayminhat_0" | "f_hat_slowpoketailshirts_0" | "f_hat_snorlaxnightcap_0" | "f_hat_solgaleoitems_0" | "f_hat_ss_0" | "f_hat_stantlerheadband_0" | "f_hat_strawhat_0" | "f_hat_summer2023_0" | "f_hat_svcostumescarletschool_0" | "f_hat_svcostumevioletschool_0" | "f_hat_swshdlc2costume_0" | "f_hat_swshuniformchampion_0" | "f_hat_sylveonitems_0" | "f_hat_tcgcollabtshirtandcap_0" | "f_hat_teamaqua_0" | "f_hat_teamleadercap_0" | "f_hat_teamleadercap_1" | "f_hat_teamleadercap_2" | "f_hat_teamrocket_0" | "f_hat_teamrocketcap_0" | "f_hat_teamskull_0" | "f_hat_tophat_0" | "f_hat_ultra_0" | "f_hat_ultraReconSquad_0" | "f_hat_ultraReconSquadB_0" | "f_hat_verizon2021_0" | "f_hat_wcs2022winnersitems_0" | "f_hat_whimsicottearmuff_0" | "f_hat_willowglasses_0" | "f_hat_woobatearrings_0" | "f_hat_yamaskhat_0" | "f_hat_yamaskmask_0" | "f_hat_zubathat_0" | "f_necklace_default_0" | "f_necklace_default_1" | "f_necklace_empty" | "f_necklace_heart_0" | "f_necklace_star_0" | "f_pants_6thanniversary_0" | "f_pants_7thanniversary_0" | "f_pants_acetrainerbw_0" | "f_pants_animegou_0" | "f_pants_backpacker_0" | "f_pants_battlegirl_0" | "f_pants_bounsweetitems_0" | "f_pants_bwn_0" | "f_pants_casual_0" | "f_pants_casual_1" | "f_pants_clay_0" | "f_pants_default_0" | "f_pants_default_1" | "f_pants_default_2" | "f_pants_default_3" | "f_pants_default_4" | "f_pants_default_5" | "f_pants_denimfashionweek2023_0" | "f_pants_dp_0" | "f_pants_fashionWeek2022_0" | "f_pants_flabebepack_0" | "f_pants_frlg_0" | "f_pants_fw2022_0" | "f_pants_geeta_0" | "f_pants_genderlessskirt_0" | "f_pants_giovanni_0" | "f_pants_gladion_0" | "f_pants_gothitelleitems_0" | "f_pants_green_0" | "f_pants_greencoat_0" | "f_pants_guzma_0" | "f_pants_gymleader_0" | "f_pants_gymleader_1" | "f_pants_gymleader_2" | "f_pants_hala_0" | "f_pants_hgss_0" | "f_pants_ingo_0" | "f_pants_loosepants_0" | "f_pants_lunalaitems_0" | "f_pants_luvdiscpack_0" | "f_pants_lysandre_0" | "f_pants_mewtwo_0" | "f_pants_miniskirt_0" | "f_pants_miniskirt_1" | "f_pants_miniskirt_2" | "f_pants_miniskirt_3" | "f_pants_miniskirt_turbine_0" | "f_pants_miniskirt_turbine_1" | "f_pants_miniskirt_turbine_2" | "f_pants_miniskirt_wave_0" | "f_pants_miniskirt_wave_1" | "f_pants_miniskirt_wave_2" | "f_pants_misty_0" | "f_pants_munnapack_0" | "f_pants_neon_solid_0" | "f_pants_neon_solid_1" | "f_pants_neon_solid_2" | "f_pants_neon_stripes_0" | "f_pants_neon_stripes_1" | "f_pants_newyear2022_0" | "f_pants_oras_0" | "f_pants_pajamas2022_0" | "f_pants_pajamas2022_1" | "f_pants_palmer_0" | "f_pants_pikachufan_0" | "f_pants_pikachulibre_0" | "f_pants_profwillowoutfit_0" | "f_pants_pumpkabooitems_0" | "f_pants_regiicejersies_0" | "f_pants_regirockjersies_0" | "f_pants_registeeljersies_0" | "f_pants_shorts_0" | "f_pants_shorts_1" | "f_pants_shorts_2" | "f_pants_shorts_3" | "f_pants_skinnyjeans_0" | "f_pants_steven_0" | "f_pants_stevenfirst_0" | "f_pants_swshdlc2costume_0" | "f_pants_swshuniformchampion_0" | "f_pants_swshuniformdark_0" | "f_pants_swshuniformdefault_0" | "f_pants_swshuniformdragon_0" | "f_pants_teamaqua_0" | "f_pants_teamblanche_0" | "f_pants_teamcandela_0" | "f_pants_teammagma_0" | "f_pants_teamrocket_0" | "f_pants_teamskull_0" | "f_pants_teamspark_0" | "f_pants_ultra_0" | "f_pants_veterantrainerxy_0" | "f_pants_wcs2022winnersitems_0" | "f_shirt_6thanniversary_0" | "f_shirt_7thanniversary_0" | "f_shirt_acetrainerbw_0" | "f_shirt_acetrainersm_0" | "f_shirt_alolacomfey_0" | "f_shirt_animegou_0" | "f_shirt_aseries_0" | "f_shirt_backpacker_0" | "f_shirt_ballguy_0" | "f_shirt_battlegirl_0" | "f_shirt_bea_0" | "f_shirt_bounsweetitems_0" | "f_shirt_buttondown_0" | "f_shirt_buzzwoleitems_0" | "f_shirt_bwn_0" | "f_shirt_casual_0" | "f_shirt_casual_1" | "f_shirt_casual_2" | "f_shirt_casual_3" | "f_shirt_celebi_0" | "f_shirt_chimcharonesie_0" | "f_shirt_clay_0" | "f_shirt_cofagrigusitems_0" | "f_shirt_cosmog_0" | "f_shirt_cowichansweater_0" | "f_shirt_dayofdead_0" | "f_shirt_default_0" | "f_shirt_default_1" | "f_shirt_default_2" | "f_shirt_default_3" | "f_shirt_default_4" | "f_shirt_default_5" | "f_shirt_default_6" | "f_shirt_default_7" | "f_shirt_default_8" | "f_shirt_delibird_0" | "f_shirt_delibirdonesie_0" | "f_shirt_denimfashionweek2023_0" | "f_shirt_denimjacket_0" | "f_shirt_detectivepikachu_0" | "f_shirt_diancie_0" | "f_shirt_divingsuit_0" | "f_shirt_diwali2021_0" | "f_shirt_dp_0" | "f_shirt_drifblim_0" | "f_shirt_dusclopsmummy_0" | "f_shirt_earthday_2018" | "f_shirt_eeveestshirt_00_0" | "f_shirt_eeveestshirt_01_0" | "f_shirt_eeveestshirt_02_0" | "f_shirt_eeveestshirt_03_0" | "f_shirt_eeveestshirt_04" | "f_shirt_eeveestshirt_05" | "f_shirt_eeveestshirt_06" | "f_shirt_eeveestshirt_07" | "f_shirt_eeveestshirt_08" | "f_shirt_elesa_0" | "f_shirt_fashionWeek2022_0" | "f_shirt_festivaloflights_00_0" | "f_shirt_festivaloflights_01_0" | "f_shirt_flabebepack_0" | "f_shirt_fragment_0" | "f_shirt_frlg_0" | "f_shirt_fw2022_0" | "f_shirt_galarfarfetchditems_0" | "f_shirt_galaxyoutfit_0" | "f_shirt_geeta_0" | "f_shirt_genderlessskirt_0" | "f_shirt_gengar_0" | "f_shirt_gengaronesie_0" | "f_shirt_giovanni_0" | "f_shirt_giratinaitems_0" | "f_shirt_gladion_0" | "f_shirt_gofest_2019" | "f_shirt_gofest_2020_0" | "f_shirt_gofest_2021_0" | "f_shirt_gofest2022_0" | "f_shirt_gofest2023_0" | "f_shirt_gofest2024darkgray_0" | "f_shirt_gofest2024gray_0" | "f_shirt_gofest2024purple_0" | "f_shirt_gofestglobal2023_0" | "f_shirt_goteamrocketarlo_0" | "f_shirt_goteamrocketcliff_0" | "f_shirt_goteamrocketsierra_0" | "f_shirt_gothitelleitems_0" | "f_shirt_gotour2023_0" | "f_shirt_gotour2024_0" | "f_shirt_greedentsweater_0" | "f_shirt_green_0" | "f_shirt_greencoat_0" | "f_shirt_gtrtshirt2022_0" | "f_shirt_gtrtshirt2022_1" | "f_shirt_guccitshirts_0" | "f_shirt_guzma_0" | "f_shirt_gymleader_0" | "f_shirt_gymleader_1" | "f_shirt_gymleader_2" | "f_shirt_hala_0" | "f_shirt_happi_0" | "f_shirt_happi_1" | "f_shirt_happi_2" | "f_shirt_hgss_0" | "f_shirt_holiday2022santacostumes_0" | "f_shirt_holifestival2021black_0" | "f_shirt_holifestival2021white_0" | "f_shirt_hoopaunboundtshirt_0" | "f_shirt_ingo_0" | "f_shirt_ingress_0" | "f_shirt_ingress_e_0" | "f_shirt_ingress_r_0" | "f_shirt_jessie_0" | "f_shirt_jirachi_0" | "f_shirt_keldeotshirt_0" | "f_shirt_korrina_0" | "f_shirt_ladiamondoutfit_0" | "f_shirt_lana_0" | "f_shirt_lapearloutfit_0" | "f_shirt_lasecuritycorps_0" | "f_shirt_latias_latios_0" | "f_shirt_legendofarceus_0" | "f_shirt_luvdiscpack_0" | "f_shirt_lvl50_0" | "f_shirt_lvl50_1" | "f_shirt_lysandre_0" | "f_shirt_marshadowtshirt_0" | "f_shirt_megalopunnyitems_0" | "f_shirt_megarayquaza_0" | "f_shirt_melmetaljacket_0" | "f_shirt_melmetalvest_0" | "f_shirt_meloettatshirt_0" | "f_shirt_meltan_0" | "f_shirt_mew_0" | "f_shirt_mewtwo_0" | "f_shirt_misty_0" | "f_shirt_movie2020jessiejames_0" | "f_shirt_munnapack_0" | "f_shirt_newyear2022_0" | "f_shirt_nike2021_0" | "f_shirt_ocshirt_045" | "f_shirt_ocshirt_108" | "f_shirt_ocshirt_129" | "f_shirt_ocshirt_143" | "f_shirt_oras_0" | "f_shirt_pajamas2022_0" | "f_shirt_pajamas2022_1" | "f_shirt_palmer_0" | "f_shirt_partneritemsjan2024hoodie_0" | "f_shirt_partneritemsjan2024tshirt_0" | "f_shirt_pikachufan_0" | "f_shirt_pikachulibre_0" | "f_shirt_pikachuonesie_0" | "f_shirt_pinpukuhoodie_0" | "f_shirt_pipluponesie_0" | "f_shirt_pkmnhoodie001" | "f_shirt_pkmnhoodie004" | "f_shirt_pkmnhoodie007" | "f_shirt_pkmnshirts_165" | "f_shirt_pkmnshirts_188" | "f_shirt_pkmnshirts_201" | "f_shirt_pkmnshirts_238" | "f_shirt_pkmnshirts2021_0" | "f_shirt_pkmnshirts2021_1" | "f_shirt_pkmnshirts2021_2" | "f_shirt_poloshirt_0" | "f_shirt_poloshirt_1" | "f_shirt_poloshirt_2" | "f_shirt_profwillowoutfit_0" | "f_shirt_projectguitar_0" | "f_shirt_pumpkabooitems_0" | "f_shirt_regiicejersies_0" | "f_shirt_regirockjersies_0" | "f_shirt_registeeljersies_0" | "f_shirt_reuniclusitems_0" | "f_shirt_ruinmaniac_0" | "f_shirt_safarizone2020_0" | "f_shirt_samsungsummer2020_0" | "f_shirt_shayminlandtshirt_0" | "f_shirt_shayminskytshirt_0" | "f_shirt_shinymewtshirts_0" | "f_shirt_slowpokeshirts_0" | "f_shirt_slowpoketailshirts_0" | "f_shirt_snorlaxonesie_0" | "f_shirt_spiritomb_0" | "f_shirt_spring2021gulpin_0" | "f_shirt_spring2021plusle_0" | "f_shirt_ss_0" | "f_shirt_steven_0" | "f_shirt_stevenfirst_0" | "f_shirt_sukajanblastoise_0" | "f_shirt_sukajancharizard_0" | "f_shirt_sukajanhouou_0" | "f_shirt_sukajanlugia_0" | "f_shirt_sukajanvenusaur_0" | "f_shirt_summer2023_0" | "f_shirt_sustainability2021_0" | "f_shirt_svcostumescarletschool_0" | "f_shirt_svcostumevioletschool_0" | "f_shirt_svdlc1_0" | "f_shirt_svdlc2fall_0" | "f_shirt_svdlc2spring_0" | "f_shirt_sweater_30_0" | "f_shirt_sweater_30_1" | "f_shirt_sweater_30_2" | "f_shirt_sweater_instinct" | "f_shirt_sweater_mystic" | "f_shirt_sweater_valor" | "f_shirt_swshdlc2costume_0" | "f_shirt_swshdlccostume_0" | "f_shirt_swshuniformchampion_0" | "f_shirt_swshuniformdark_0" | "f_shirt_swshuniformdefault_0" | "f_shirt_swshuniformdragon_0" | "f_shirt_sylveonitems_0" | "f_shirt_tanktop_0" | "f_shirt_tanktop_1" | "f_shirt_tanktop_2" | "f_shirt_tanktop_charizard_0" | "f_shirt_tanktop_charizard_1" | "f_shirt_tanktop_charizard_2" | "f_shirt_tanktop_pikachu_0" | "f_shirt_tanktop_pikachu_1" | "f_shirt_tanktop_pikachu_2" | "f_shirt_tcgcollabtshirtandcap_0" | "f_shirt_teamaqua_0" | "f_shirt_teamblanche_0" | "f_shirt_teamcandela_0" | "f_shirt_teammagma_0" | "f_shirt_teamrocket_0" | "f_shirt_teamrocket_1" | "f_shirt_teamskull_0" | "f_shirt_teamspark_0" | "f_shirt_togepihoodie_0" | "f_shirt_tracksuitsgroudon_0" | "f_shirt_tracksuitskyogre_0" | "f_shirt_tshirt_cycling_0" | "f_shirt_tshirt_cycling_1" | "f_shirt_tshirt_cycling_2" | "f_shirt_tshirt_cycling_3" | "f_shirt_tshirt_fest_chicago_2017" | "f_shirt_tshirt_fest_chicago_2018" | "f_shirt_tshirt_global_goals_2017" | "f_shirt_tshirt_pikachu_0" | "f_shirt_tshirt_pikachu_1" | "f_shirt_tshirt_pikachu_2" | "f_shirt_tshirt_pikachu_3" | "f_shirt_tshirt_pikachu_4" | "f_shirt_tshirt_pikachu_5" | "f_shirt_tshirt_pikachu_6" | "f_shirt_turtwigonesie_0" | "f_shirt_ultra_0" | "f_shirt_ultraReconSquad_0" | "f_shirt_uniqlotshirts_0" | "f_shirt_uniqlotshirts_1" | "f_shirt_uniqlotshirts_2" | "f_shirt_unwto_0" | "f_shirt_valentine2023_0" | "f_shirt_verizon2020sweater_0" | "f_shirt_veterantrainerxy_0" | "f_shirt_victinitshirts_0" | "f_shirt_wcs2022_0" | "f_shirt_wcs2022tshirtbulu_0" | "f_shirt_wcs2022tshirtred_0" | "f_shirt_wcs2022winnersitems_0" | "f_shirt_wcs2023_0" | "f_shirt_wcs2023promotshirt_0" | "f_shirt_wcs2023promotshirt_01_0" | "f_shirt_wcs2023sukajan_0" | "f_shirt_wcs2023winnersitems_0" | "f_shirt_wcs2024_0" | "f_shirt_wcs2024championshipshirt-blue_0" | "f_shirt_wcs2024championshipshirt-white_0" | "f_shirt_wcsyokohama_0" | "f_shirt_whitecoat_0" | "f_shirt_wintersweater2023_0" | "f_shirt_zoruaonesie_0" | "f_shoes_6thanniversary_0" | "f_shoes_acetrainerbw_0" | "f_shoes_acetrainersm_0" | "f_shoes_animegou_0" | "f_shoes_backpacker_0" | "f_shoes_battlegirl_0" | "f_shoes_bwn_0" | "f_shoes_carbink_0" | "f_shoes_clay_0" | "f_shoes_coolboots_0" | "f_shoes_dedenneitems_0" | "f_shoes_default_0" | "f_shoes_default_1" | "f_shoes_default_2" | "f_shoes_default_3" | "f_shoes_default_4" | "f_shoes_default_5" | "f_shoes_default_6" | "f_shoes_delibird_0" | "f_shoes_dp_0" | "f_shoes_elesa_0" | "f_shoes_empty" | "f_shoes_fashionWeek2022_0" | "f_shoes_frlg_0" | "f_shoes_fw2022_0" | "f_shoes_geeta_0" | "f_shoes_giovanni_0" | "f_shoes_gladion_0" | "f_shoes_gothitelleitems_0" | "f_shoes_green_0" | "f_shoes_gymleader_0" | "f_shoes_gymleader_1" | "f_shoes_gymleader_2" | "f_shoes_hala_0" | "f_shoes_hgss_0" | "f_shoes_ingo_0" | "f_shoes_korrina_0" | "f_shoes_ladiamondoutfit_0" | "f_shoes_lana_0" | "f_shoes_lapearloutfit_0" | "f_shoes_legendofarceus_0" | "f_shoes_loosepants_0" | "f_shoes_loosepants_1" | "f_shoes_loosepants_2" | "f_shoes_loosepants_3" | "f_shoes_luvdiscpack_0" | "f_shoes_lysandre_0" | "f_shoes_megalopunnyitems_0" | "f_shoes_melmetalshoes_0" | "f_shoes_mewtwo_0" | "f_shoes_misty_0" | "f_shoes_newyear2022_0" | "f_shoes_nike2021_0" | "f_shoes_oras_0" | "f_shoes_pajamas2022_0" | "f_shoes_pajamas2022_1" | "f_shoes_palmer_0" | "f_shoes_pikachufan_0" | "f_shoes_pikachulibre_0" | "f_shoes_profwillowoutfit_0" | "f_shoes_regiicejersies_0" | "f_shoes_regirockjersies_0" | "f_shoes_registeeljersies_0" | "f_shoes_reuniclusitems_0" | "f_shoes_ruinmaniac_0" | "f_shoes_sandals_0" | "f_shoes_sandals_1" | "f_shoes_sandals_2" | "f_shoes_solgaleoitems_0" | "f_shoes_ss_0" | "f_shoes_steven_0" | "f_shoes_stevenfirst_0" | "f_shoes_svcostumescarletschool_0" | "f_shoes_svcostumevioletschool_0" | "f_shoes_svdlc1_0" | "f_shoes_svdlc2spring_0" | "f_shoes_swshdlc2costume_0" | "f_shoes_swshdlccostume_0" | "f_shoes_swshuniformdark_0" | "f_shoes_swshuniformdefault_0" | "f_shoes_swshuniformdragon_0" | "f_shoes_sylveonitems_0" | "f_shoes_teamaqua_0" | "f_shoes_teamblanche_0" | "f_shoes_teamcandela_0" | "f_shoes_teammagma_0" | "f_shoes_teamrocket_0" | "f_shoes_teamrocket_1" | "f_shoes_teamskull_0" | "f_shoes_teamspark_0" | "f_shoes_ultra_0" | "f_shoes_ultraReconSquad_0" | "f_shoes_veterantrainerxy_0" | "f_shoes_wcs2022winnersitems_0" | "f_shoes_wcs2023winnersitems_0" | "f_shoes_winterboots_0" | "f_shoes_winterboots_1" | "f_shoes_winterboots_2" | "f_shoes_winterboots_3" | "f_shoes_winterboots2023_0" | "f_skin_0" | "f_skin_1" | "f_skin_10" | "f_skin_11" | "f_skin_2" | "f_skin_3" | "f_skin_4" | "f_skin_5" | "f_skin_6" | "f_skin_7" | "f_skin_8" | "f_skin_9" | "f_socks_default_0" | "f_socks_default_1" | "f_socks_default_2" | "f_socks_empty" | "f_socks_fw2022_0" | "f_socks_hgss_0" | "f_socks_sneakersocks_0" | "f_socks_sneakersocks_1" | "f_socks_sollunaitems_0" | "f_socks_swshuniformdefault_0" | "f_socks_swshuniformdragon_0" | "f_socks_teamaqua_0" | "f_socks_thighhighs_0" | "m_backpack_alolaitemslittenbp_0" | "m_backpack_alolaitemspoppliobp_0" | "m_backpack_alolaitemsrowletbp_0" | "m_backpack_animegou_0" | "m_backpack_backpacker_0" | "m_backpack_bd_0" | "m_backpack_combeebackpack_0" | "m_backpack_combeebackpack_1" | "m_backpack_dedenneitems_0" | "m_backpack_default_0" | "m_backpack_default_1" | "m_backpack_default_2" | "m_backpack_default_3" | "m_backpack_default_4" | "m_backpack_default_5" | "m_backpack_egg-incubator_0" | "m_backpack_eggbackpack_0" | "m_backpack_eggbackpack_1" | "m_backpack_eggbackpack_2" | "m_backpack_empty" | "m_backpack_frlg_0" | "m_backpack_genesecteventitem_0" | "m_backpack_gengar_0" | "m_backpack_giratinaitems_0" | "m_backpack_guccibackpack_0" | "m_backpack_guitarcasebackpack_0" | "m_backpack_hgss_0" | "m_backpack_hououbackpack_0" | "m_backpack_kakureonpouch_0" | "m_backpack_komala_0" | "m_backpack_longchampbp_00" | "m_backpack_lunalaitems_0" | "m_backpack_lunarNewYr_0" | "m_backpack_mimikyubp_0" | "m_backpack_movie2020_0" | "m_backpack_naganadelawings_0" | "m_backpack_nike2021_0" | "m_backpack_pamobackpack_0" | "m_backpack_pkmnhoodie001" | "m_backpack_pkmnhoodie004" | "m_backpack_pkmnhoodie007" | "m_backpack_ruinmaniac_0" | "m_backpack_snapcamera_0" | "m_backpack_ss_0" | "m_backpack_svcostumescarletschool_0" | "m_backpack_svcostumevioletschool_0" | "m_backpack_svdlc1_0" | "m_backpack_svdlc2spring_0" | "m_backpack_swshdlc2costume_0" | "m_backpack_swshdlccostume_0" | "m_backpack_togepibackpack_0" | "m_backpack_ultra" | "m_backpack_verizon2021_0" | "m_backpack_zubatbp_0" | "m_eyes_0" | "m_eyes_1" | "m_eyes_2" | "m_eyes_3" | "m_eyes_4" | "m_face_3dmask_0" | "m_face_3dmask_1" | "m_face_3dmask_2" | "m_face_banettemask_0" | "m_face_dayofthedead_0" | "m_face_defaultmask_0" | "m_face_empty" | "m_face_facestickerghostpika_0" | "m_face_facestickerpikachu_0" | "m_face_facestickerpokeball_0" | "m_face_festOfColors_0" | "m_face_festOfColors_1" | "m_face_festOfColors_2" | "m_face_gracidea_0" | "m_face_holiday2022santacostumes_0" | "m_face_pikachumask_0" | "m_face_sableyemask_0" | "m_face_teamskull_0" | "m_face_toxelmask_0" | "m_face_verizon2020mask_0" | "m_glasses_3d" | "m_glasses_cutieflysleepmask_0" | "m_glasses_divingsuit_0" | "m_glasses_drpikachu_0" | "m_glasses_empty" | "m_glasses_frillishglasses_0" | "m_glasses_fw2022_0" | "m_glasses_gimmighoulitems_0" | "m_glasses_goteamrocketarlo" | "m_glasses_grandoakglasses" | "m_glasses_jogger_0" | "m_glasses_lugiaglasses_0" | "m_glasses_lv40glasses_00" | "m_glasses_mask_0" | "m_glasses_mask_1" | "m_glasses_newyearglasses2020_0" | "m_glasses_newyearglasses2021_0" | "m_glasses_newyearglasses2022_0" | "m_glasses_obstagoonitems_0" | "m_glasses_roundsunglasses_0" | "m_glasses_teardrop_0" | "m_glasses_thick_0" | "m_glasses_thick_1" | "m_glasses_thick_2" | "m_glasses_thick_3" | "m_glasses_thick_4" | "m_gloves_acetrainersm_0" | "m_gloves_bea_0" | "m_gloves_bwn_0" | "m_gloves_default_0" | "m_gloves_default_1" | "m_gloves_default_2" | "m_gloves_default_3" | "m_gloves_delibird_0" | "m_gloves_dynamaxswsh_0" | "m_gloves_empty" | "m_gloves_frlg_0" | "m_gloves_geeta_0" | "m_gloves_giovanni_0" | "m_gloves_guzma_0" | "m_gloves_gymleader_0" | "m_gloves_hoopabangle_0" | "m_gloves_jogger" | "m_gloves_korrina_0" | "m_gloves_lysandre_0" | "m_gloves_megabangle_0" | "m_gloves_megabangleblack_0" | "m_gloves_megabangleblue_0" | "m_gloves_megabanglered_0" | "m_gloves_megabangleyellow_0" | "m_gloves_obstagoonitems_0" | "m_gloves_palmer_0" | "m_gloves_profwillowoutfit_0" | "m_gloves_stevenfirst_0" | "m_gloves_svdlc2spring_0" | "m_gloves_swshdlc2costume_0" | "m_gloves_swshdlccostume_0" | "m_gloves_swshuniformchampion_0" | "m_gloves_swshuniformdark_0" | "m_gloves_swshuniformdefault_0" | "m_gloves_swshuniformdragon_0" | "m_gloves_teamaqua_0" | "m_gloves_teammagma_0" | "m_gloves_teamrocket_0" | "m_gloves_teamspark_0" | "m_gloves_wintergloves2023_0" | "m_hair_default_0" | "m_hair_default_1" | "m_hair_default_10" | "m_hair_default_11" | "m_hair_default_12" | "m_hair_default_13" | "m_hair_default_14" | "m_hair_default_15" | "m_hair_default_16" | "m_hair_default_17" | "m_hair_default_18" | "m_hair_default_19" | "m_hair_default_2" | "m_hair_default_3" | "m_hair_default_4" | "m_hair_default_5" | "m_hair_default_6" | "m_hair_default_7" | "m_hair_default_8" | "m_hair_default_9" | "m_hat_6thanniversary_0" | "m_hat_acetrainersm_0" | "m_hat_adventure_0" | "m_hat_aseries_0" | "m_hat_bea_0" | "m_hat_bidoofhat_0" | "m_hat_bounsweetitems_0" | "m_hat_burmyearrings11_0" | "m_hat_burmyearrings12_0" | "m_hat_burmyearrings13_0" | "m_hat_bwn_0" | "m_hat_casket_0" | "m_hat_cetoddlehat_0" | "m_hat_clay_0" | "m_hat_cofagrigusitems_0" | "m_hat_cosmog_0" | "m_hat_crownmoon_0" | "m_hat_crownsun_0" | "m_hat_cubonehat_0" | "m_hat_darumakahat_0" | "m_hat_dedenneitems_0" | "m_hat_default_0" | "m_hat_default_1" | "m_hat_default_2" | "m_hat_default_3" | "m_hat_default_4" | "m_hat_default_5" | "m_hat_deino_0" | "m_hat_delibird_0" | "m_hat_detectivepikachu_0" | "m_hat_diancie_0" | "m_hat_dp_0" | "m_hat_drifloon_0" | "m_hat_drpikachu_0" | "m_hat_dusclopsmummy_0" | "m_hat_eeveecap_0" | "m_hat_elesa_0" | "m_hat_empty" | "m_hat_fedora_0" | "m_hat_fedora_1" | "m_hat_fisher_0" | "m_hat_flabebepack_0" | "m_hat_fragment_0" | "m_hat_frlg_0" | "m_hat_furfrouwig_0" | "m_hat_fw2022_0" | "m_hat_galarfarfetchditems_0" | "m_hat_genesecteventitem_0" | "m_hat_gengar_0" | "m_hat_gimmighoulitems_0" | "m_hat_giratinaitems_0" | "m_hat_gladion_0" | "m_hat_gofest_pikachuvisor_0" | "m_hat_goomy_0" | "m_hat_greavardwig_0" | "m_hat_greencoat_0" | "m_hat_growlithehelmet_0" | "m_hat_gtr2024eeveefanmask_0" | "m_hat_gtr2024pikachufanmask_0" | "m_hat_guccihat_0" | "m_hat_guzma_0" | "m_hat_gyaradoscap_0" | "m_hat_hgss_0" | "m_hat_holiday2022santacostumes_0" | "m_hat_holidaybeanie_0" | "m_hat_hoopaearmuffs_0" | "m_hat_ingo_0" | "m_hat_jogger_0" | "m_hat_kantotourcapgreen_0" | "m_hat_kantotourcapred_0" | "m_hat_korrina_0" | "m_hat_lana_0" | "m_hat_laprasbandana_0" | "m_hat_lasecuritycorps_0" | "m_hat_legendofarceus_0" | "m_hat_litwickhat_0" | "m_hat_loneearrings_0" | "m_hat_lvl50cap_0" | "m_hat_magikarp" | "m_hat_mareaniehat_0" | "m_hat_megalopunnyitems_0" | "m_hat_megarayquaza_0" | "m_hat_meltan_0" | "m_hat_mewtwo_0" | "m_hat_mimikyu_0" | "m_hat_mismagius_0" | "m_hat_movie2020_0" | "m_hat_munnapack_0" | "m_hat_munnapack_1" | "m_hat_newyear2022_0" | "m_hat_newyearhat2021_0" | "m_hat_newyearhat2023_0" | "m_hat_nihilegoitems_0" | "m_hat_noibat_0" | "m_hat_obstagoonitems_0" | "m_hat_oras_0" | "m_hat_oricorioPink_0" | "m_hat_oricorioPurple_0" | "m_hat_oricorioRed_0" | "m_hat_oricorioYellow_0" | "m_hat_partneritemsjan2024hat_0" | "m_hat_phantump_0" | "m_hat_pikachucap_0" | "m_hat_pikachufan_0" | "m_hat_pikachulibre_0" | "m_hat_pikachupumpkinhead_0" | "m_hat_pkmncap_0" | "m_hat_pkmncap_1" | "m_hat_pkmncap_2" | "m_hat_poipole_0" | "m_hat_profwillowoutfit_0" | "m_hat_regiicejersies_0" | "m_hat_regirockjersies_0" | "m_hat_registeeljersies_0" | "m_hat_ruinmaniac_0" | "m_hat_sableyegoggles_0" | "m_hat_samsungsummer2020_0" | "m_hat_sandygasthat_0" | "m_hat_shayminhat_0" | "m_hat_slowpoketailshirts_0" | "m_hat_snorlaxnightcap_0" | "m_hat_solgaleoitems_0" | "m_hat_ss_0" | "m_hat_stantlerheadband_0" | "m_hat_strawhat_0" | "m_hat_summer2023_0" | "m_hat_svcostumescarletschool_0" | "m_hat_svcostumevioletschool_0" | "m_hat_swshdlc2costume_0" | "m_hat_swshuniformchampion_0" | "m_hat_sylveonitems_0" | "m_hat_tcgcollabtshirtandcap_0" | "m_hat_teamaqua_0" | "m_hat_teamleadercap_0" | "m_hat_teamleadercap_1" | "m_hat_teamleadercap_2" | "m_hat_teamrocket_0" | "m_hat_teamrocketcap_0" | "m_hat_teamskull_0" | "m_hat_tophat_0" | "m_hat_ultra_0" | "m_hat_ultraReconSquad_0" | "m_hat_ultraReconSquadB_0" | "m_hat_verizon2021_0" | "m_hat_wcs2022winnersitems_0" | "m_hat_whimsicottearmuff_0" | "m_hat_willowglasses_0" | "m_hat_woobatearrings_0" | "m_hat_yamaskhat_0" | "m_hat_yamaskmask_0" | "m_hat_zubathat_0" | "m_pants_6thanniversary_0" | "m_pants_7thanniversary_0" | "m_pants_acetrainerbw_0" | "m_pants_acetrainersm_0" | "m_pants_animegou_0" | "m_pants_backpacker_0" | "m_pants_bounsweetitems_0" | "m_pants_brock_0" | "m_pants_bwn_0" | "m_pants_casual_0" | "m_pants_casual_1" | "m_pants_clay_0" | "m_pants_default_0" | "m_pants_denimfashionweek2023_0" | "m_pants_dp_0" | "m_pants_elesa_0" | "m_pants_fashionWeek2022_0" | "m_pants_fisher_0" | "m_pants_flabebepack_0" | "m_pants_frlg_0" | "m_pants_fw2022_0" | "m_pants_geeta_0" | "m_pants_genderlessskirt_0" | "m_pants_giovanni_0" | "m_pants_gladion_0" | "m_pants_gothitelleitems_0" | "m_pants_green_0" | "m_pants_greencoat_0" | "m_pants_guzma_0" | "m_pants_gymleader_0" | "m_pants_gymleader_1" | "m_pants_gymleader_2" | "m_pants_hala_0" | "m_pants_hgss_0" | "m_pants_ingo_0" | "m_pants_jogger_0" | "m_pants_korrina_0" | "m_pants_loosepants_0" | "m_pants_lunalaitems_0" | "m_pants_luvdiscpack_0" | "m_pants_lysandre_0" | "m_pants_mewtwo_0" | "m_pants_munnapack_0" | "m_pants_newyear2022_0" | "m_pants_oras_0" | "m_pants_pajamas2022_0" | "m_pants_pajamas2022_1" | "m_pants_palmer_0" | "m_pants_pikachufan_0" | "m_pants_pikachulibre_0" | "m_pants_profwillowoutfit_0" | "m_pants_pumpkabooitems_0" | "m_pants_regiicejersies_0" | "m_pants_regirockjersies_0" | "m_pants_registeeljersies_0" | "m_pants_skinnyjeans_0" | "m_pants_skinnyjeans_1" | "m_pants_skinnyjeans_2" | "m_pants_ss_0" | "m_pants_steven_0" | "m_pants_stevenfirst_0" | "m_pants_sweats_0" | "m_pants_sweats_1" | "m_pants_sweats_2" | "m_pants_sweats_3" | "m_pants_sweats_4" | "m_pants_swshdlc2costume_0" | "m_pants_swshuniformchampion_0" | "m_pants_swshuniformdark_0" | "m_pants_swshuniformdefault_0" | "m_pants_swshuniformdragon_0" | "m_pants_teamaqua_0" | "m_pants_teamblanche_0" | "m_pants_teamcandela_0" | "m_pants_teammagma_0" | "m_pants_teamrocket_0" | "m_pants_teamskull_0" | "m_pants_teamspark_0" | "m_pants_ultra_0" | "m_pants_veterantrainerxy_0" | "m_pants_wcs2022winnersitems_0" | "m_shirt_6thanniversary_0" | "m_shirt_7thanniversary_0" | "m_shirt_acetrainerbw_0" | "m_shirt_acetrainersm_0" | "m_shirt_alolacomfey_0" | "m_shirt_animegou_0" | "m_shirt_aseries_0" | "m_shirt_backpacker_0" | "m_shirt_ballguy_0" | "m_shirt_bea_0" | "m_shirt_blazer_0" | "m_shirt_bounsweetitems_0" | "m_shirt_brock_0" | "m_shirt_buzzwoleitems_0" | "m_shirt_bwn_0" | "m_shirt_casual_0" | "m_shirt_casual_1" | "m_shirt_casual_2" | "m_shirt_casual_3" | "m_shirt_celebi_0" | "m_shirt_chimcharonesie_0" | "m_shirt_clay_0" | "m_shirt_cofagrigusitems_0" | "m_shirt_cosmog_0" | "m_shirt_cowichansweater_0" | "m_shirt_dayofdead_0" | "m_shirt_default_0" | "m_shirt_default_1" | "m_shirt_default_2" | "m_shirt_default_2B" | "m_shirt_default_3" | "m_shirt_default_4" | "m_shirt_default_5" | "m_shirt_default_6" | "m_shirt_default_7" | "m_shirt_delibird_0" | "m_shirt_delibirdonesie_0" | "m_shirt_denimfashionweek2023_0" | "m_shirt_denimjacket_0" | "m_shirt_detectivepikachu_0" | "m_shirt_diancie_0" | "m_shirt_divingsuit_0" | "m_shirt_diwali2021_0" | "m_shirt_dp_0" | "m_shirt_drifblim_0" | "m_shirt_dusclopsmummy_0" | "m_shirt_earthday_2018" | "m_shirt_eeveestshirt_00_0" | "m_shirt_eeveestshirt_01_0" | "m_shirt_eeveestshirt_02_0" | "m_shirt_eeveestshirt_03_0" | "m_shirt_eeveestshirt_04" | "m_shirt_eeveestshirt_05" | "m_shirt_eeveestshirt_06" | "m_shirt_eeveestshirt_07" | "m_shirt_eeveestshirt_08" | "m_shirt_elesa_0" | "m_shirt_fashionWeek2022_0" | "m_shirt_festivaloflights_00_0" | "m_shirt_festivaloflights_01_0" | "m_shirt_fisher_0" | "m_shirt_flabebepack_0" | "m_shirt_fragment_0" | "m_shirt_frlg_0" | "m_shirt_fw2022_0" | "m_shirt_galarfarfetchditems_0" | "m_shirt_galaxyoutfit_0" | "m_shirt_geeta_0" | "m_shirt_genderlessskirt_0" | "m_shirt_gengar_0" | "m_shirt_gengaronesie_0" | "m_shirt_giovanni_0" | "m_shirt_giratinaitems_0" | "m_shirt_gladion_0" | "m_shirt_gofest_2019" | "m_shirt_gofest_2020_0" | "m_shirt_gofest_2021_0" | "m_shirt_gofest2022_0" | "m_shirt_gofest2023_0" | "m_shirt_gofest2024darkgray_0" | "m_shirt_gofest2024gray_0" | "m_shirt_gofest2024purple_0" | "m_shirt_gofestglobal2023_0" | "m_shirt_goteamrocketarlo_0" | "m_shirt_goteamrocketcliff_0" | "m_shirt_goteamrocketsierra_0" | "m_shirt_gothitelleitems_0" | "m_shirt_gotour2023_0" | "m_shirt_gotour2024_0" | "m_shirt_greedentsweater_0" | "m_shirt_green_0" | "m_shirt_greencoat_0" | "m_shirt_gtrtshirt2022_0" | "m_shirt_gtrtshirt2022_1" | "m_shirt_guccitshirts_0" | "m_shirt_guzma_0" | "m_shirt_gymleader_0" | "m_shirt_gymleader_1" | "m_shirt_gymleader_2" | "m_shirt_hala_0" | "m_shirt_happi_0" | "m_shirt_happi_1" | "m_shirt_happi_2" | "m_shirt_hgss_0" | "m_shirt_holiday2022santacostumes_0" | "m_shirt_holifestival2021black_0" | "m_shirt_holifestival2021white_0" | "m_shirt_hoopaunboundtshirt_0" | "m_shirt_ingo_0" | "m_shirt_ingress_0" | "m_shirt_ingress_e_0" | "m_shirt_ingress_r_0" | "m_shirt_james_0" | "m_shirt_jirachi_0" | "m_shirt_jogger_0" | "m_shirt_keldeotshirt_0" | "m_shirt_korrina_0" | "m_shirt_ladiamondoutfit_0" | "m_shirt_lana_0" | "m_shirt_lapearloutfit_0" | "m_shirt_lasecuritycorps_0" | "m_shirt_latias_latios_0" | "m_shirt_legendofarceus_0" | "m_shirt_longsleeves_charizard_0" | "m_shirt_longsleeves_charizard_1" | "m_shirt_longsleeves_charizard_2" | "m_shirt_longsleeves_pikachu_0" | "m_shirt_longsleeves_pikachu_1" | "m_shirt_longsleeves_pikachu_2" | "m_shirt_luvdiscpack_0" | "m_shirt_lvl50_0" | "m_shirt_lvl50_1" | "m_shirt_lysandre_0" | "m_shirt_marshadowtshirt_0" | "m_shirt_megalopunnyitems_0" | "m_shirt_megarayquaza_0" | "m_shirt_melmetaljacket_0" | "m_shirt_melmetalvest_0" | "m_shirt_meloettatshirt_0" | "m_shirt_meltan_0" | "m_shirt_mew_0" | "m_shirt_mewtwo_0" | "m_shirt_movie2020jessiejames_0" | "m_shirt_munnapack_0" | "m_shirt_newyear2022_0" | "m_shirt_nike2021_0" | "m_shirt_ocshirt_045" | "m_shirt_ocshirt_108" | "m_shirt_ocshirt_129" | "m_shirt_ocshirt_143" | "m_shirt_oras_0" | "m_shirt_pajamas2022_0" | "m_shirt_pajamas2022_1" | "m_shirt_palmer_0" | "m_shirt_partneritemsjan2024hoodie_0" | "m_shirt_partneritemsjan2024tshirt_0" | "m_shirt_pikachufan_0" | "m_shirt_pikachulibre_0" | "m_shirt_pikachuonesie_0" | "m_shirt_pinpukuhoodie_0" | "m_shirt_pipluponesie_0" | "m_shirt_pkmnhoodie001" | "m_shirt_pkmnhoodie004" | "m_shirt_pkmnhoodie007" | "m_shirt_pkmnshirts_165" | "m_shirt_pkmnshirts_188" | "m_shirt_pkmnshirts_201" | "m_shirt_pkmnshirts_238" | "m_shirt_pkmnshirts2021_0" | "m_shirt_pkmnshirts2021_1" | "m_shirt_pkmnshirts2021_2" | "m_shirt_poloshirt_0" | "m_shirt_poloshirt_1" | "m_shirt_poloshirt_2" | "m_shirt_profwillowoutfit_0" | "m_shirt_projectguitar_0" | "m_shirt_pumpkabooitems_0" | "m_shirt_regiicejersies_0" | "m_shirt_regirockjersies_0" | "m_shirt_registeeljersies_0" | "m_shirt_reuniclusitems_0" | "m_shirt_ruinmaniac_0" | "m_shirt_safarizone2020_0" | "m_shirt_samsungsummer2020_0" | "m_shirt_shayminlandtshirt_0" | "m_shirt_shayminskytshirt_0" | "m_shirt_shinymewtshirts_0" | "m_shirt_slowpokeshirts_0" | "m_shirt_slowpoketailshirts_0" | "m_shirt_snorlaxonesie_0" | "m_shirt_spiritomb_0" | "m_shirt_spring2021gulpin_0" | "m_shirt_spring2021plusle_0" | "m_shirt_ss_0" | "m_shirt_steven_0" | "m_shirt_stevenfirst_0" | "m_shirt_sukajanblastoise_0" | "m_shirt_sukajancharizard_0" | "m_shirt_sukajanhouou_0" | "m_shirt_sukajanlugia_0" | "m_shirt_sukajanvenusaur_0" | "m_shirt_summer2023_0" | "m_shirt_sustainability2021_0" | "m_shirt_svcostumescarletschool_0" | "m_shirt_svcostumevioletschool_0" | "m_shirt_svdlc1_0" | "m_shirt_svdlc2fall_0" | "m_shirt_svdlc2spring_0" | "m_shirt_sweatshirt_sporty_0" | "m_shirt_sweatshirt_sporty_1" | "m_shirt_sweatshirt_sporty_2" | "m_shirt_sweatshirt_sporty_3" | "m_shirt_sweatshirt_streak_0" | "m_shirt_sweatshirt_streak_1" | "m_shirt_sweatshirt_streak_2" | "m_shirt_sweatshirt_streak_3" | "m_shirt_sweatshirt_streak_4" | "m_shirt_swshdlc2costume_0" | "m_shirt_swshdlccostume_0" | "m_shirt_swshuniformchampion_0" | "m_shirt_swshuniformdark_0" | "m_shirt_swshuniformdefault_0" | "m_shirt_swshuniformdragon_0" | "m_shirt_sylveonitems_0" | "m_shirt_tcgcollabtshirtandcap_0" | "m_shirt_teamaqua_0" | "m_shirt_teamblanche_0" | "m_shirt_teamcandela_0" | "m_shirt_teammagma_0" | "m_shirt_teamrocket_0" | "m_shirt_teamrocket_1" | "m_shirt_teamskull_0" | "m_shirt_teamspark_0" | "m_shirt_togepihoodie_0" | "m_shirt_tracksuitsgroudon_0" | "m_shirt_tracksuitskyogre_0" | "m_shirt_tshirt_fest_chicago_2017" | "m_shirt_tshirt_fest_chicago_2018" | "m_shirt_tshirt_geometric_0" | "m_shirt_tshirt_geometric_1" | "m_shirt_tshirt_geometric_2" | "m_shirt_tshirt_global_goals_2017" | "m_shirt_tshirt_instinct" | "m_shirt_tshirt_mystic" | "m_shirt_tshirt_valor" | "m_shirt_turtleneck_30_0" | "m_shirt_turtleneck_30_1" | "m_shirt_turtleneck_30_2" | "m_shirt_turtleneck_30_3" | "m_shirt_turtwigonesie_0" | "m_shirt_ultra_0" | "m_shirt_ultraReconSquad_0" | "m_shirt_uniqlotshirts_0" | "m_shirt_uniqlotshirts_1" | "m_shirt_uniqlotshirts_2" | "m_shirt_unwto_0" | "m_shirt_valentine2023_0" | "m_shirt_verizon2020sweater_0" | "m_shirt_veterantrainerxy_0" | "m_shirt_victinitshirts_0" | "m_shirt_wcs2022_0" | "m_shirt_wcs2022tshirtbulu_0" | "m_shirt_wcs2022tshirtred_0" | "m_shirt_wcs2022winnersitems_0" | "m_shirt_wcs2023_0" | "m_shirt_wcs2023promotshirt_0" | "m_shirt_wcs2023promotshirt_01_0" | "m_shirt_wcs2023sukajan_0" | "m_shirt_wcs2023winnersitems_0" | "m_shirt_wcs2024_0" | "m_shirt_wcs2024championshipshirt-blue_0" | "m_shirt_wcs2024championshipshirt-white_0" | "m_shirt_wcsyokohama_0" | "m_shirt_whitecoat_0" | "m_shirt_wintersweater2023_0" | "m_shirt_zoruaonesie_0" | "m_shoes_6thanniversary_0" | "m_shoes_acetrainerbw_0" | "m_shoes_acetrainersm_0" | "m_shoes_animegou_0" | "m_shoes_backpacker_0" | "m_shoes_brock_0" | "m_shoes_bwn_0" | "m_shoes_carbink_0" | "m_shoes_clay_0" | "m_shoes_coolboots_0" | "m_shoes_dedenneitems_0" | "m_shoes_default_0" | "m_shoes_default_1" | "m_shoes_default_2" | "m_shoes_default_3" | "m_shoes_default_4" | "m_shoes_default_5" | "m_shoes_default_6" | "m_shoes_delibird_0" | "m_shoes_dp_0" | "m_shoes_elesa_0" | "m_shoes_empty" | "m_shoes_fashionWeek2022_0" | "m_shoes_fisher_0" | "m_shoes_frlg_0" | "m_shoes_fw2022_0" | "m_shoes_geeta_0" | "m_shoes_giovanni_0" | "m_shoes_gladion_0" | "m_shoes_gothitelleitems_0" | "m_shoes_green_0" | "m_shoes_gymleader_0" | "m_shoes_gymleader_1" | "m_shoes_gymleader_2" | "m_shoes_hala_0" | "m_shoes_hgss_0" | "m_shoes_ingo_0" | "m_shoes_jogger_0" | "m_shoes_korrina_0" | "m_shoes_ladiamondoutfit_0" | "m_shoes_lana_0" | "m_shoes_lapearloutfit_0" | "m_shoes_legendofarceus_0" | "m_shoes_loosepants_0" | "m_shoes_loosepants_1" | "m_shoes_loosepants_2" | "m_shoes_loosepants_3" | "m_shoes_luvdiscpack_0" | "m_shoes_lysandre_0" | "m_shoes_megalopunnyitems_0" | "m_shoes_melmetalshoes_0" | "m_shoes_mewtwo_0" | "m_shoes_newyear2022_0" | "m_shoes_nike2021_0" | "m_shoes_oras_0" | "m_shoes_pajamas2022_0" | "m_shoes_pajamas2022_1" | "m_shoes_palmer_0" | "m_shoes_pikachufan_0" | "m_shoes_pikachulibre_0" | "m_shoes_profwillowoutfit_0" | "m_shoes_regiicejersies_0" | "m_shoes_regirockjersies_0" | "m_shoes_registeeljersies_0" | "m_shoes_reuniclusitems_0" | "m_shoes_ruinmaniac_0" | "m_shoes_sandals_0" | "m_shoes_sandals_1" | "m_shoes_sandals_2" | "m_shoes_solgaleoitems_0" | "m_shoes_ss_0" | "m_shoes_steven_0" | "m_shoes_stevenfirst_0" | "m_shoes_svcostumescarletschool_0" | "m_shoes_svcostumevioletschool_0" | "m_shoes_svdlc1_0" | "m_shoes_svdlc2spring_0" | "m_shoes_swshdlc2costume_0" | "m_shoes_swshdlccostume_0" | "m_shoes_swshuniformdark_0" | "m_shoes_swshuniformdefault_0" | "m_shoes_swshuniformdragon_0" | "m_shoes_sylveonitems_0" | "m_shoes_teamaqua_0" | "m_shoes_teamblanche_0" | "m_shoes_teamcandela_0" | "m_shoes_teammagma_0" | "m_shoes_teamrocket_0" | "m_shoes_teamrocket_1" | "m_shoes_teamskull_0" | "m_shoes_teamspark_0" | "m_shoes_ultra_0" | "m_shoes_ultraReconSquad_0" | "m_shoes_veterantrainerxy_0" | "m_shoes_wcs2022winnersitems_0" | "m_shoes_wcs2023winnersitems_0" | "m_shoes_winterboots_0" | "m_shoes_winterboots_1" | "m_shoes_winterboots_2" | "m_shoes_winterboots_3" | "m_shoes_winterboots2023_0" | "m_skin_0" | "m_skin_1" | "m_skin_10" | "m_skin_11" | "m_skin_2" | "m_skin_3" | "m_skin_4" | "m_skin_5" | "m_skin_6" | "m_skin_7" | "m_skin_8" | "m_skin_9" | "m_socks_default_0" | "m_socks_default_1" | "m_socks_default_2" | "m_socks_default_3" | "m_socks_empty" | "m_socks_fw2022_0" | "m_socks_sneakersocks_0" | "m_socks_sneakersocks_1" | "m_socks_sollunaitems_0" | "m_socks_swshuniformdefault_0" | "m_socks_swshuniformdragon_0" | "pose_01" | "pose_02" | "pose_03" | "pose_04" | "pose_05" | "pose_06" | "pose_07" | "pose_08" | "pose_09" | "pose_10" | "pose_11" | "pose_12" | "pose_13" | "pose_14" | "pose_15" | "pose_16" | "pose_17" | "pose_18" | "pose_19" | "pose_20" | "pose_21" | "pose_22" | "pose_23" | "pose_24" | "pose_25" | "pose_26" | "pose_27" | "pose_28" | "pose_29" | "pose_30" | "pose_31" | "pose_32" | "pose_33" | "pose_34" | "pose_35" | "pose_36" | "pose_37" | "pose_38" | "pose_39" | "pose_40" | "pose_41" | "pose_43" | "pose_44" | "pose_45" | "pose_46" | "pose_47" | "pose_48" | "pose_49" | "pose_50" | "pose_51" | "pose_52" | "pose_53" | "pose_54" | "pose_55" | "pose_56" | "pose_57" | "pose_58" | "pose_59" | "pose_60" | "pose_61" | "pose_62" | "pose_63" | "pose_64" | "pose_empty";
		avatarType?: "PLAYER_AVATAR_FEMALE";
		bundleName?: "f_avatar_poses_bundle" | "f_avatar_poses_empty_bundle" | "f_backpack_alolaitemslittenbp_bundle" | "f_backpack_alolaitemspoppliobp_bundle" | "f_backpack_alolaitemsrowletbp_bundle" | "f_backpack_animegou_bundle" | "f_backpack_backpacker_bundle" | "f_backpack_combeebackpack_bundle" | "f_backpack_cute_bundle" | "f_backpack_dedenneitems_bundle" | "f_backpack_default_bundle" | "f_backpack_egg-incubator_bundle" | "f_backpack_eggbackpack_bundle" | "f_backpack_empty_bundle" | "f_backpack_frlg_bundle" | "f_backpack_genesecteventitem_bundle" | "f_backpack_gengar_bundle" | "f_backpack_giratinaitems_bundle" | "f_backpack_guccibackpack_bundle" | "f_backpack_guitarcasebackpack_bundle" | "f_backpack_hgss_bundle" | "f_backpack_hououbackpack_bundle" | "f_backpack_kakureonpouch_bundle" | "f_backpack_komala_bundle" | "f_backpack_longchampbp_bundle" | "f_backpack_lunalaitems_bundle" | "f_backpack_lunarnewyr_bundle" | "f_backpack_mimikyubp_bundle" | "f_backpack_movie2020_bundle" | "f_backpack_naganadelawings_bundle" | "f_backpack_nike2021_bundle" | "f_backpack_pamobackpack_bundle" | "f_backpack_pkmnhoodie001_bundle" | "f_backpack_pkmnhoodie004_bundle" | "f_backpack_pkmnhoodie007_bundle" | "f_backpack_ruinmaniac_bundle" | "f_backpack_snapcamera_bundle" | "f_backpack_ss_bundle" | "f_backpack_svcostumescarletschool_bundle" | "f_backpack_svcostumevioletschool_bundle" | "f_backpack_svdlc1_bundle" | "f_backpack_svdlc2spring_bundle" | "f_backpack_swshdlc2costume_bundle" | "f_backpack_swshdlccostume_bundle" | "f_backpack_togepibackpack_bundle" | "f_backpack_ultra_bundle" | "f_backpack_verizon2021_bundle" | "f_backpack_zubatbp_bundle" | "f_belt_acetrainerbw_bundle" | "f_belt_default_bundle" | "f_belt_empty_bundle" | "f_belt_simple_bundle" | "f_belt_teamrocket_bundle" | "f_eyes_asset_bundle" | "f_face_3dmask_00_bundle" | "f_face_3dmask_01_bundle" | "f_face_3dmask_02_bundle" | "f_face_banettemask_bundle" | "f_face_dayofthedead_bundle" | "f_face_defaultmask_bundle" | "f_face_empty_bundle" | "f_face_facestickerghostpika_bundle" | "f_face_facestickerpikachu_bundle" | "f_face_facestickerpokeball_bundle" | "f_face_festofcolors_00_bundle" | "f_face_festofcolors_01_bundle" | "f_face_festofcolors_02_bundle" | "f_face_gracidea_bundle" | "f_face_holiday2022santacostumes_bundle" | "f_face_pikachumask_bundle" | "f_face_sableyemask_bundle" | "f_face_teamskull_bundle" | "f_face_toxelmask_bundle" | "f_face_verizon2020mask_bundle" | "f_glasses_3d_bundle" | "f_glasses_cutieflysleepmask_bundle" | "f_glasses_divingsuit_bundle" | "f_glasses_drpikachu_bundle" | "f_glasses_empty_bundle" | "f_glasses_frillishglasses_bundle" | "f_glasses_fw2022_bundle" | "f_glasses_gimmighoulitems_bundle" | "f_glasses_goteamrocketarlo_bundle" | "f_glasses_grandoakglasses_bundle" | "f_glasses_lugiaglasses_bundle" | "f_glasses_lv40glasses_bundle" | "f_glasses_mask_bundle" | "f_glasses_newyearglasses2020_bundle" | "f_glasses_newyearglasses2021_bundle" | "f_glasses_newyearglasses2022_bundle" | "f_glasses_obstagoonitems_bundle" | "f_glasses_roundsunglasses_bundle" | "f_glasses_teardrop_bundle" | "f_glasses_thick_bundle" | "f_gloves_acetrainersm_bundle" | "f_gloves_battlegirl_bundle" | "f_gloves_bea_bundle" | "f_gloves_bwn_bundle" | "f_gloves_default_bundle" | "f_gloves_delibird_bundle" | "f_gloves_dynamaxswsh_bundle" | "f_gloves_empty_bundle" | "f_gloves_frlg_bundle" | "f_gloves_geeta_bundle" | "f_gloves_giovanni_bundle" | "f_gloves_guzma_bundle" | "f_gloves_gymleader_bundle" | "f_gloves_hoopabangle_bundle" | "f_gloves_korrina_bundle" | "f_gloves_lysandre_bundle" | "f_gloves_megabangle_bundle" | "f_gloves_megabangleblack_bundle" | "f_gloves_megabangleblue_bundle" | "f_gloves_megabanglered_bundle" | "f_gloves_megabangleyellow_bundle" | "f_gloves_obstagoonitems_bundle" | "f_gloves_palmer_bundle" | "f_gloves_profwillowoutfit_bundle" | "f_gloves_stevenfirst_bundle" | "f_gloves_svdlc2spring_bundle" | "f_gloves_swshdlc2costume_bundle" | "f_gloves_swshdlccostume_bundle" | "f_gloves_swshuniformchampion_bundle" | "f_gloves_swshuniformdark_bundle" | "f_gloves_swshuniformdefault_bundle" | "f_gloves_swshuniformdragon_bundle" | "f_gloves_teamaqua_bundle" | "f_gloves_teammagma_bundle" | "f_gloves_teamrocket_bundle" | "f_gloves_teamspark_bundle" | "f_gloves_wintergloves2023_bundle" | "f_hair_default_asset_bundle" | "f_hat_6thanniversary_bundle" | "f_hat_acetrainersm_bundle" | "f_hat_adventure_bundle" | "f_hat_aseries_bundle" | "f_hat_bea_bundle" | "f_hat_bidoofhat_bundle" | "f_hat_bounsweetitems_bundle" | "f_hat_burmyearrings11_bundle" | "f_hat_burmyearrings12_bundle" | "f_hat_burmyearrings13_bundle" | "f_hat_bwn_bundle" | "f_hat_casket_bundle" | "f_hat_cetoddlehat_bundle" | "f_hat_clay_bundle" | "f_hat_cofagrigusitems_bundle" | "f_hat_cosmog_bundle" | "f_hat_crownmoon_bundle" | "f_hat_crownsun_bundle" | "f_hat_cubonehat_bundle" | "f_hat_darumakahat_bundle" | "f_hat_dedenneitems_bundle" | "f_hat_default_bundle" | "f_hat_deino_bundle" | "f_hat_delibird_bundle" | "f_hat_detectivepikachu_bundle" | "f_hat_diancie_bundle" | "f_hat_dp_bundle" | "f_hat_drifloon_bundle" | "f_hat_drpikachu_bundle" | "f_hat_dusclopsmummy_bundle" | "f_hat_eeveecap_bundle" | "f_hat_elesa_bundle" | "f_hat_empty_bundle" | "f_hat_fedora_bundle" | "f_hat_flabebepack_bundle" | "f_hat_fragment_bundle" | "f_hat_frlg_bundle" | "f_hat_furfrouwig_bundle" | "f_hat_fw2022_bundle" | "f_hat_galarfarfetchditems_bundle" | "f_hat_genesecteventitem_bundle" | "f_hat_gengar_bundle" | "f_hat_gimmighoulitems_bundle" | "f_hat_giratinaitems_bundle" | "f_hat_gladion_bundle" | "f_hat_gofest_pikachuvisor_bundle" | "f_hat_goomy_bundle" | "f_hat_greavardwig_bundle" | "f_hat_greencoat_bundle" | "f_hat_growlithehelmet_bundle" | "f_hat_gtr2024eeveefanmask_bundle" | "f_hat_gtr2024pikachufanmask_bundle" | "f_hat_guccihat_bundle" | "f_hat_guzma_bundle" | "f_hat_gyaradoscap_bundle" | "f_hat_hgss_bundle" | "f_hat_holiday2022santacostumes_bundle" | "f_hat_holidaybeanie_bundle" | "f_hat_hoopaearmuffs_bundle" | "f_hat_ingo_bundle" | "f_hat_kantotourcapgreen_bundle" | "f_hat_kantotourcapred_bundle" | "f_hat_knitted_bundle" | "f_hat_korrina_bundle" | "f_hat_lana_bundle" | "f_hat_laprasbandana_bundle" | "f_hat_lasecuritycorps_bundle" | "f_hat_legendofarceus_bundle" | "f_hat_litwickhat_bundle" | "f_hat_loneearrings_bundle" | "f_hat_lvl50cap_bundle" | "f_hat_magikarp_bundle" | "f_hat_mareaniehat_bundle" | "f_hat_megalopunnyitems_bundle" | "f_hat_megarayquaza_bundle" | "f_hat_meltan_bundle" | "f_hat_meltanearrings_bundle" | "f_hat_mewtwo_bundle" | "f_hat_mimikyu_bundle" | "f_hat_mismagius_bundle" | "f_hat_movie2020_bundle" | "f_hat_munnapack_bundle" | "f_hat_newyear2022_bundle" | "f_hat_newyearhat2021_bundle" | "f_hat_newyearhat2023_bundle" | "f_hat_nihilegoitems_bundle" | "f_hat_noibat_bundle" | "f_hat_obstagoonitems_bundle" | "f_hat_oras_bundle" | "f_hat_oricoriopink_bundle" | "f_hat_oricoriopurple_bundle" | "f_hat_oricoriored_bundle" | "f_hat_oricorioyellow_bundle" | "f_hat_partneritemsjan2024hat_bundle" | "f_hat_phantump_bundle" | "f_hat_pikachucap_bundle" | "f_hat_pikachufan_bundle" | "f_hat_pikachulibre_bundle" | "f_hat_pikachupumpkinhead_bundle" | "f_hat_pkmncap_bundle" | "f_hat_poipole_bundle" | "f_hat_profwillowoutfit_bundle" | "f_hat_regiicejersies_bundle" | "f_hat_regirockjersies_bundle" | "f_hat_registeeljersies_bundle" | "f_hat_ruinmaniac_bundle" | "f_hat_sableyegoggles_bundle" | "f_hat_samsungsummer2020_bundle" | "f_hat_sandygasthat_bundle" | "f_hat_shayminhat_bundle" | "f_hat_slowpoketailshirts_bundle" | "f_hat_snorlaxnightcap_bundle" | "f_hat_solgaleoitems_bundle" | "f_hat_ss_bundle" | "f_hat_stantlerheadband_bundle" | "f_hat_strawhat_bundle" | "f_hat_summer2023_bundle" | "f_hat_svcostumescarletschool_bundle" | "f_hat_svcostumevioletschool_bundle" | "f_hat_swshdlc2costume_bundle" | "f_hat_swshuniformchampion_bundle" | "f_hat_sylveonitems_bundle" | "f_hat_tcgcollabtshirtandcap_bundle" | "f_hat_teamaqua_bundle" | "f_hat_teamleadercap_bundle" | "f_hat_teamrocket_bundle" | "f_hat_teamrocketcap_bundle" | "f_hat_teamskull_bundle" | "f_hat_tophat_bundle" | "f_hat_ultra_bundle" | "f_hat_ultrareconsquad_bundle" | "f_hat_ultrareconsquadb_bundle" | "f_hat_verizon2021_bundle" | "f_hat_wcs2022winnersitems_bundle" | "f_hat_whimsicottearmuff_bundle" | "f_hat_willowglasses_bundle" | "f_hat_woobatearrings_bundle" | "f_hat_yamaskhat_bundle" | "f_hat_yamaskmask_bundle" | "f_hat_zubathat_bundle" | "f_necklace_default_bundle" | "f_necklace_empty_bundle" | "f_necklace_heart_bundle" | "f_necklace_star_bundle" | "f_pants_6thanniversary_bundle" | "f_pants_7thanniversary_bundle" | "f_pants_acetrainerbw_bundle" | "f_pants_animegou_bundle" | "f_pants_backpacker_bundle" | "f_pants_battlegirl_bundle" | "f_pants_bounsweetitems_bundle" | "f_pants_bwn_bundle" | "f_pants_casual_0_bundle" | "f_pants_casual_1_bundle" | "f_pants_clay_bundle" | "f_pants_default_bundle" | "f_pants_denimfashionweek2023_bundle" | "f_pants_dp_bundle" | "f_pants_fashionweek2022_bundle" | "f_pants_flabebepack_bundle" | "f_pants_frlg_bundle" | "f_pants_fw2022_bundle" | "f_pants_geeta_bundle" | "f_pants_genderlessskirt_bundle" | "f_pants_giovanni_bundle" | "f_pants_gladion_bundle" | "f_pants_gothitelleitems_bundle" | "f_pants_green_bundle" | "f_pants_greencoat_bundle" | "f_pants_guzma_bundle" | "f_pants_gymleader_bundle" | "f_pants_hala_bundle" | "f_pants_hgss_bundle" | "f_pants_ingo_bundle" | "f_pants_loosepants_bundle" | "f_pants_lunalaitems_bundle" | "f_pants_luvdiscpack_bundle" | "f_pants_lysandre_bundle" | "f_pants_mewtwo_bundle" | "f_pants_miniskirt_bundle" | "f_pants_misty_bundle" | "f_pants_munnapack_bundle" | "f_pants_neon_bundle" | "f_pants_newyear2022_bundle" | "f_pants_oras_bundle" | "f_pants_pajamas2022_bundle" | "f_pants_palmer_bundle" | "f_pants_pikachufan_bundle" | "f_pants_pikachulibre_bundle" | "f_pants_profwillowoutfit_bundle" | "f_pants_pumpkabooitems_bundle" | "f_pants_regiicejersies_bundle" | "f_pants_regirockjersies_bundle" | "f_pants_registeeljersies_bundle" | "f_pants_shorts_bundle" | "f_pants_skinnyjeans_bundle" | "f_pants_steven_bundle" | "f_pants_stevenfirst_bundle" | "f_pants_swshdlc2costume_bundle" | "f_pants_swshuniformchampion_bundle" | "f_pants_swshuniformdark_bundle" | "f_pants_swshuniformdefault_bundle" | "f_pants_swshuniformdragon_bundle" | "f_pants_teamaqua_bundle" | "f_pants_teamblanche_bundle" | "f_pants_teamcandela_bundle" | "f_pants_teammagma_bundle" | "f_pants_teamrocket_bundle" | "f_pants_teamskull_bundle" | "f_pants_teamspark_bundle" | "f_pants_ultra_bundle" | "f_pants_veterantrainerxy_bundle" | "f_pants_wcs2022winnersitems_bundle" | "f_shirt_6thanniversary_bundle" | "f_shirt_7thanniversary_bundle" | "f_shirt_acetrainerbw_bundle" | "f_shirt_acetrainersm_bundle" | "f_shirt_alolacomfey_bundle" | "f_shirt_animegou_bundle" | "f_shirt_aseries_bundle" | "f_shirt_backpacker_bundle" | "f_shirt_ballguy_bundle" | "f_shirt_battlegirl_bundle" | "f_shirt_bea_bundle" | "f_shirt_bounsweetitems_bundle" | "f_shirt_buttondown_bundle" | "f_shirt_buzzwoleitems_bundle" | "f_shirt_bwn_bundle" | "f_shirt_casual_0_bundle" | "f_shirt_casual_1_bundle" | "f_shirt_casual_2_bundle" | "f_shirt_casual_3_bundle" | "f_shirt_celebi_bundle" | "f_shirt_chimcharonesie_bundle" | "f_shirt_clay_bundle" | "f_shirt_cofagrigusitems_bundle" | "f_shirt_cosmog_bundle" | "f_shirt_cowichansweater_bundle" | "f_shirt_dayofdead_bundle" | "f_shirt_default_bundle" | "f_shirt_delibird_bundle" | "f_shirt_delibirdonesie_bundle" | "f_shirt_denimfashionweek2023_bundle" | "f_shirt_denimjacket_bundle" | "f_shirt_detectivepikachu_bundle" | "f_shirt_diancie_bundle" | "f_shirt_divingsuit_bundle" | "f_shirt_diwali2021_bundle" | "f_shirt_dp_bundle" | "f_shirt_drifblim_bundle" | "f_shirt_dusclopsmummy_bundle" | "f_shirt_earthday_2018_bundle" | "f_shirt_eeveestshirt_00_bundle" | "f_shirt_eeveestshirt_01_bundle" | "f_shirt_eeveestshirt_02_bundle" | "f_shirt_eeveestshirt_03_bundle" | "f_shirt_eeveestshirt_04_bundle" | "f_shirt_eeveestshirt_05_bundle" | "f_shirt_eeveestshirt_06_bundle" | "f_shirt_eeveestshirt_07_bundle" | "f_shirt_eeveestshirt_08_bundle" | "f_shirt_elesa_bundle" | "f_shirt_fashionweek2022_bundle" | "f_shirt_festivaloflights_00_bundle" | "f_shirt_festivaloflights_01_bundle" | "f_shirt_flabebepack_bundle" | "f_shirt_fragment_bundle" | "f_shirt_frlg_bundle" | "f_shirt_fw2022_bundle" | "f_shirt_galarfarfetchditems_bundle" | "f_shirt_galaxyoutfit_bundle" | "f_shirt_geeta_bundle" | "f_shirt_genderlessskirt_bundle" | "f_shirt_gengar_bundle" | "f_shirt_gengaronesie_bundle" | "f_shirt_giovanni_bundle" | "f_shirt_giratinaitems_bundle" | "f_shirt_gladion_bundle" | "f_shirt_gofest_2019_bundle" | "f_shirt_gofest_2020_bundle" | "f_shirt_gofest_2021_bundle" | "f_shirt_gofest2022_bundle" | "f_shirt_gofest2023_bundle" | "f_shirt_gofest2024darkgray_bundle" | "f_shirt_gofest2024gray_bundle" | "f_shirt_gofest2024purple_bundle" | "f_shirt_gofestglobal2023_bundle" | "f_shirt_goteamrocketarlo_bundle" | "f_shirt_goteamrocketcliff_bundle" | "f_shirt_goteamrocketsierra_bundle" | "f_shirt_gothitelleitems_bundle" | "f_shirt_gotour2023_bundle" | "f_shirt_gotour2024_bundle" | "f_shirt_greedentsweater_bundle" | "f_shirt_green_bundle" | "f_shirt_greencoat_bundle" | "f_shirt_gtrtshirt2022_bundle" | "f_shirt_guccitshirts_bundle" | "f_shirt_guzma_bundle" | "f_shirt_gymleader_bundle" | "f_shirt_hala_bundle" | "f_shirt_happi_bundle" | "f_shirt_hgss_bundle" | "f_shirt_holiday2022santacostumes_bundle" | "f_shirt_holifestival2021black_bundle" | "f_shirt_holifestival2021white_bundle" | "f_shirt_hoopaunboundtshirt_bundle" | "f_shirt_ingo_bundle" | "f_shirt_ingress_bundle" | "f_shirt_ingress_e_bundle" | "f_shirt_ingress_r_bundle" | "f_shirt_jessie_bundle" | "f_shirt_jirachi_bundle" | "f_shirt_keldeotshirt_bundle" | "f_shirt_korrina_bundle" | "f_shirt_ladiamondoutfit_bundle" | "f_shirt_lana_bundle" | "f_shirt_lapearloutfit_bundle" | "f_shirt_lasecuritycorps_bundle" | "f_shirt_latias_latios_bundle" | "f_shirt_legendofarceus_bundle" | "f_shirt_luvdiscpack_bundle" | "f_shirt_lvl50_bundle" | "f_shirt_lysandre_bundle" | "f_shirt_marshadowtshirt_bundle" | "f_shirt_megalopunnyitems_bundle" | "f_shirt_megarayquaza_bundle" | "f_shirt_melmetaljacket_bundle" | "f_shirt_melmetalvest_bundle" | "f_shirt_meloettatshirt_bundle" | "f_shirt_meltan_bundle" | "f_shirt_mew_bundle" | "f_shirt_mewtwo_bundle" | "f_shirt_misty_bundle" | "f_shirt_movie2020jessiejames_bundle" | "f_shirt_munnapack_bundle" | "f_shirt_newyear2022_bundle" | "f_shirt_nike2021_bundle" | "f_shirt_ocshirt_bundle" | "f_shirt_oras_bundle" | "f_shirt_pajamas2022_bundle" | "f_shirt_palmer_bundle" | "f_shirt_partneritemsjan2024hoodie_bundle" | "f_shirt_partneritemsjan2024tshirt_bundle" | "f_shirt_pikachufan_bundle" | "f_shirt_pikachulibre_bundle" | "f_shirt_pikachuonesie_bundle" | "f_shirt_pinpukuhoodie_bundle" | "f_shirt_pipluponesie_bundle" | "f_shirt_pkmnhoodie001_bundle" | "f_shirt_pkmnhoodie004_bundle" | "f_shirt_pkmnhoodie007_bundle" | "f_shirt_pkmnshirts_bundle" | "f_shirt_pkmnshirts2021_bundle" | "f_shirt_poloshirt_bundle" | "f_shirt_profwillowoutfit_bundle" | "f_shirt_projectguitar_bundle" | "f_shirt_pumpkabooitems_bundle" | "f_shirt_regiicejersies_bundle" | "f_shirt_regirockjersies_bundle" | "f_shirt_registeeljersies_bundle" | "f_shirt_reuniclusitems_bundle" | "f_shirt_ruinmaniac_bundle" | "f_shirt_safarizone2020_bundle" | "f_shirt_samsungsummer2020_bundle" | "f_shirt_shayminlandtshirt_bundle" | "f_shirt_shayminskytshirt_bundle" | "f_shirt_shinymewtshirts_bundle" | "f_shirt_slowpokeshirts_bundle" | "f_shirt_slowpoketailshirts_bundle" | "f_shirt_snorlaxonesie_bundle" | "f_shirt_spiritomb_bundle" | "f_shirt_spring2021gulpin_bundle" | "f_shirt_spring2021plusle_bundle" | "f_shirt_ss_bundle" | "f_shirt_steven_bundle" | "f_shirt_stevenfirst_bundle" | "f_shirt_sukajanblastoise_bundle" | "f_shirt_sukajancharizard_bundle" | "f_shirt_sukajanhouou_bundle" | "f_shirt_sukajanlugia_bundle" | "f_shirt_sukajanvenusaur_bundle" | "f_shirt_summer2023_bundle" | "f_shirt_sustainability2021_bundle" | "f_shirt_svcostumescarletschool_bundle" | "f_shirt_svcostumevioletschool_bundle" | "f_shirt_svdlc1_bundle" | "f_shirt_svdlc2fall_bundle" | "f_shirt_svdlc2spring_bundle" | "f_shirt_sweater_bundle" | "f_shirt_swshdlc2costume_bundle" | "f_shirt_swshdlccostume_bundle" | "f_shirt_swshuniformchampion_bundle" | "f_shirt_swshuniformdark_bundle" | "f_shirt_swshuniformdefault_bundle" | "f_shirt_swshuniformdragon_bundle" | "f_shirt_sylveonitems_bundle" | "f_shirt_tanktop_bundle" | "f_shirt_tcgcollabtshirtandcap_bundle" | "f_shirt_teamaqua_bundle" | "f_shirt_teamblanche_bundle" | "f_shirt_teamcandela_bundle" | "f_shirt_teammagma_bundle" | "f_shirt_teamrocket_bundle" | "f_shirt_teamskull_bundle" | "f_shirt_teamspark_bundle" | "f_shirt_togepihoodie_bundle" | "f_shirt_tracksuitsgroudon_bundle" | "f_shirt_tracksuitskyogre_bundle" | "f_shirt_tshirt_bundle" | "f_shirt_turtwigonesie_bundle" | "f_shirt_ultra_bundle" | "f_shirt_ultrareconsquad_bundle" | "f_shirt_uniqlotshirts_bundle" | "f_shirt_unwto_bundle" | "f_shirt_valentine2023_bundle" | "f_shirt_verizon2020sweater_bundle" | "f_shirt_veterantrainerxy_bundle" | "f_shirt_victinitshirts_bundle" | "f_shirt_wcs2022_bundle" | "f_shirt_wcs2022tshirtbulu_bundle" | "f_shirt_wcs2022tshirtred_bundle" | "f_shirt_wcs2022winnersitems_bundle" | "f_shirt_wcs2023_bundle" | "f_shirt_wcs2023promotshirt_01_bundle" | "f_shirt_wcs2023promotshirt_bundle" | "f_shirt_wcs2023sukajan_bundle" | "f_shirt_wcs2023winnersitems_bundle" | "f_shirt_wcs2024_bundle" | "f_shirt_wcs2024championshipshirt-blue_bundle" | "f_shirt_wcs2024championshipshirt-white_bundle" | "f_shirt_wcsyokohama_bundle" | "f_shirt_whitecoat_bundle" | "f_shirt_wintersweater2023_bundle" | "f_shirt_zoruaonesie_bundle" | "f_shoes_6thanniversary_bundle" | "f_shoes_acetrainerbw_bundle" | "f_shoes_acetrainersm_bundle" | "f_shoes_animegou_bundle" | "f_shoes_backpacker_bundle" | "f_shoes_battlegirl_bundle" | "f_shoes_bwn_bundle" | "f_shoes_carbink_bundle" | "f_shoes_clay_bundle" | "f_shoes_coolboots_bundle" | "f_shoes_dedenneitems_bundle" | "f_shoes_default_bundle" | "f_shoes_delibird_bundle" | "f_shoes_dp_bundle" | "f_shoes_elesa_bundle" | "f_shoes_empty_bundle" | "f_shoes_fashionweek2022_bundle" | "f_shoes_frlg_bundle" | "f_shoes_fw2022_bundle" | "f_shoes_geeta_bundle" | "f_shoes_giovanni_bundle" | "f_shoes_gladion_bundle" | "f_shoes_gothitelleitems_bundle" | "f_shoes_green_bundle" | "f_shoes_gymleader_bundle" | "f_shoes_hala_bundle" | "f_shoes_hgss_bundle" | "f_shoes_ingo_bundle" | "f_shoes_korrina_bundle" | "f_shoes_ladiamondoutfit_bundle" | "f_shoes_lana_bundle" | "f_shoes_lapearloutfit_bundle" | "f_shoes_legendofarceus_bundle" | "f_shoes_loosepants_bundle" | "f_shoes_luvdiscpack_bundle" | "f_shoes_lysandre_bundle" | "f_shoes_megalopunnyitems_bundle" | "f_shoes_melmetalshoes_bundle" | "f_shoes_mewtwo_bundle" | "f_shoes_misty_bundle" | "f_shoes_newyear2022_bundle" | "f_shoes_nike2021_bundle" | "f_shoes_oras_bundle" | "f_shoes_pajamas2022_bundle" | "f_shoes_palmer_bundle" | "f_shoes_pikachufan_bundle" | "f_shoes_pikachulibre_bundle" | "f_shoes_profwillowoutfit_bundle" | "f_shoes_regiicejersies_bundle" | "f_shoes_regirockjersies_bundle" | "f_shoes_registeeljersies_bundle" | "f_shoes_reuniclusitems_bundle" | "f_shoes_ruinmaniac_bundle" | "f_shoes_sandals_bundle" | "f_shoes_solgaleoitems_bundle" | "f_shoes_ss_bundle" | "f_shoes_steven_bundle" | "f_shoes_stevenfirst_bundle" | "f_shoes_svcostumescarletschool_bundle" | "f_shoes_svcostumevioletschool_bundle" | "f_shoes_svdlc1_bundle" | "f_shoes_svdlc2spring_bundle" | "f_shoes_swshdlc2costume_bundle" | "f_shoes_swshdlccostume_bundle" | "f_shoes_swshuniformdark_bundle" | "f_shoes_swshuniformdefault_bundle" | "f_shoes_swshuniformdragon_bundle" | "f_shoes_sylveonitems_bundle" | "f_shoes_teamaqua_bundle" | "f_shoes_teamblanche_bundle" | "f_shoes_teamcandela_bundle" | "f_shoes_teammagma_bundle" | "f_shoes_teamrocket_bundle" | "f_shoes_teamskull_bundle" | "f_shoes_teamspark_bundle" | "f_shoes_ultra_bundle" | "f_shoes_ultrareconsquad_bundle" | "f_shoes_veterantrainerxy_bundle" | "f_shoes_wcs2022winnersitems_bundle" | "f_shoes_wcs2023winnersitems_bundle" | "f_shoes_winterboots_bundle" | "f_shoes_winterboots2023_bundle" | "f_socks_default_bundle" | "f_socks_empty_bundle" | "f_socks_fw2022_bundle" | "f_socks_hgss_bundle" | "f_socks_sneakersocks_bundle" | "f_socks_sollunaitems_bundle" | "f_socks_swshuniformdefault_bundle" | "f_socks_swshuniformdragon_bundle" | "f_socks_teamaqua_bundle" | "f_socks_thighhighs_bundle" | "m_avatar_poses_bundle" | "m_avatar_poses_empty_bundle" | "m_backpack_alolaitemslittenbp_bundle" | "m_backpack_alolaitemspoppliobp_bundle" | "m_backpack_alolaitemsrowletbp_bundle" | "m_backpack_animegou_bundle" | "m_backpack_backpacker_bundle" | "m_backpack_combeebackpack_bundle" | "m_backpack_dedenneitems_bundle" | "m_backpack_default_bundle" | "m_backpack_dp_bundle" | "m_backpack_egg-incubator_bundle" | "m_backpack_eggbackpack_bundle" | "m_backpack_empty_bundle" | "m_backpack_frlg_bundle" | "m_backpack_genesecteventitem_bundle" | "m_backpack_gengar_bundle" | "m_backpack_giratinaitems_bundle" | "m_backpack_guccibackpack_bundle" | "m_backpack_guitarcasebackpack_bundle" | "m_backpack_hgss_bundle" | "m_backpack_hououbackpack_bundle" | "m_backpack_kakureonpouch_bundle" | "m_backpack_komala_bundle" | "m_backpack_longchampbp_bundle" | "m_backpack_lunalaitems_bundle" | "m_backpack_lunarnewyr_bundle" | "m_backpack_mimikyubp_bundle" | "m_backpack_movie2020_bundle" | "m_backpack_naganadelawings_bundle" | "m_backpack_nike2021_bundle" | "m_backpack_pamobackpack_bundle" | "m_backpack_pkmnhoodie001_bundle" | "m_backpack_pkmnhoodie004_bundle" | "m_backpack_pkmnhoodie007_bundle" | "m_backpack_ruinmaniac_bundle" | "m_backpack_snapcamera_bundle" | "m_backpack_ss_bundle" | "m_backpack_svcostumescarletschool_bundle" | "m_backpack_svcostumevioletschool_bundle" | "m_backpack_svdlc1_bundle" | "m_backpack_svdlc2spring_bundle" | "m_backpack_swshdlc2costume_bundle" | "m_backpack_swshdlccostume_bundle" | "m_backpack_togepibackpack_bundle" | "m_backpack_ultra_bundle" | "m_backpack_verizon2021_bundle" | "m_backpack_zubatbp_bundle" | "m_eyes_asset_bundle" | "m_face_3dmask_00_bundle" | "m_face_3dmask_01_bundle" | "m_face_3dmask_02_bundle" | "m_face_banettemask_bundle" | "m_face_dayofthedead_bundle" | "m_face_defaultmask_bundle" | "m_face_empty_bundle" | "m_face_facestickerghostpika_bundle" | "m_face_facestickerpikachu_bundle" | "m_face_facestickerpokeball_bundle" | "m_face_festofcolors_00_bundle" | "m_face_festofcolors_01_bundle" | "m_face_festofcolors_02_bundle" | "m_face_gracidea_bundle" | "m_face_holiday2022santacostumes_bundle" | "m_face_pikachumask_bundle" | "m_face_sableyemask_bundle" | "m_face_teamskull_bundle" | "m_face_toxelmask_bundle" | "m_face_verizon2020mask_bundle" | "m_glasses_3d_bundle" | "m_glasses_cutieflysleepmask_bundle" | "m_glasses_divingsuit_bundle" | "m_glasses_drpikachu_bundle" | "m_glasses_empty_bundle" | "m_glasses_frillishglasses_bundle" | "m_glasses_fw2022_bundle" | "m_glasses_gimmighoulitems_bundle" | "m_glasses_goteamrocketarlo_bundle" | "m_glasses_grandoakglasses_bundle" | "m_glasses_jogger_bundle" | "m_glasses_lugiaglasses_bundle" | "m_glasses_lv40glasses_bundle" | "m_glasses_mask_bundle" | "m_glasses_newyearglasses2020_bundle" | "m_glasses_newyearglasses2021_bundle" | "m_glasses_newyearglasses2022_bundle" | "m_glasses_obstagoonitems_bundle" | "m_glasses_roundsunglasses_bundle" | "m_glasses_teardrop_bundle" | "m_glasses_thick_bundle" | "m_gloves_acetrainersm_bundle" | "m_gloves_bea_bundle" | "m_gloves_bwn_bundle" | "m_gloves_default_bundle" | "m_gloves_delibird_bundle" | "m_gloves_dynamaxswsh_bundle" | "m_gloves_empty_bundle" | "m_gloves_frlg_bundle" | "m_gloves_geeta_bundle" | "m_gloves_giovanni_bundle" | "m_gloves_guzma_bundle" | "m_gloves_gymleader_bundle" | "m_gloves_hoopabangle_bundle" | "m_gloves_jogger_bundle" | "m_gloves_korrina_bundle" | "m_gloves_lysandre_bundle" | "m_gloves_megabangle_bundle" | "m_gloves_megabangleblack_bundle" | "m_gloves_megabangleblue_bundle" | "m_gloves_megabanglered_bundle" | "m_gloves_megabangleyellow_bundle" | "m_gloves_obstagoonitems_bundle" | "m_gloves_palmer_bundle" | "m_gloves_profwillowoutfit_bundle" | "m_gloves_stevenfirst_bundle" | "m_gloves_svdlc2spring_bundle" | "m_gloves_swshdlc2costume_bundle" | "m_gloves_swshdlccostume_bundle" | "m_gloves_swshuniformchampion_bundle" | "m_gloves_swshuniformdark_bundle" | "m_gloves_swshuniformdefault_bundle" | "m_gloves_swshuniformdragon_bundle" | "m_gloves_teamaqua_bundle" | "m_gloves_teammagma_bundle" | "m_gloves_teamrocket_bundle" | "m_gloves_teamspark_bundle" | "m_gloves_wintergloves2023_bundle" | "m_hair_default_asset_bundle" | "m_hat_6thanniversary_bundle" | "m_hat_acetrainersm_bundle" | "m_hat_adventure_bundle" | "m_hat_aseries_bundle" | "m_hat_bea_bundle" | "m_hat_bidoofhat_bundle" | "m_hat_bounsweetitems_bundle" | "m_hat_burmyearrings11_bundle" | "m_hat_burmyearrings12_bundle" | "m_hat_burmyearrings13_bundle" | "m_hat_bwn_bundle" | "m_hat_casket_bundle" | "m_hat_cetoddlehat_bundle" | "m_hat_clay_bundle" | "m_hat_cofagrigusitems_bundle" | "m_hat_cosmog_bundle" | "m_hat_crownmoon_bundle" | "m_hat_crownsun_bundle" | "m_hat_cubonehat_bundle" | "m_hat_darumakahat_bundle" | "m_hat_dedenneitems_bundle" | "m_hat_default_bundle" | "m_hat_deino_bundle" | "m_hat_delibird_bundle" | "m_hat_detectivepikachu_bundle" | "m_hat_diancie_bundle" | "m_hat_dp_bundle" | "m_hat_drifloon_bundle" | "m_hat_drpikachu_bundle" | "m_hat_dusclopsmummy_bundle" | "m_hat_eeveecap_bundle" | "m_hat_elesa_bundle" | "m_hat_empty_bundle" | "m_hat_fedora_bundle" | "m_hat_fisher_bundle" | "m_hat_flabebepack_bundle" | "m_hat_fragment_bundle" | "m_hat_frlg_bundle" | "m_hat_furfrouwig_bundle" | "m_hat_fw2022_bundle" | "m_hat_galarfarfetchditems_bundle" | "m_hat_genesecteventitem_bundle" | "m_hat_gengar_bundle" | "m_hat_gimmighoulitems_bundle" | "m_hat_giratinaitems_bundle" | "m_hat_gladion_bundle" | "m_hat_gofest_pikachuvisor_bundle" | "m_hat_goomy_bundle" | "m_hat_greavardwig_bundle" | "m_hat_greencoat_bundle" | "m_hat_growlithehelmet_bundle" | "m_hat_gtr2024eeveefanmask_bundle" | "m_hat_gtr2024pikachufanmask_bundle" | "m_hat_guccihat_bundle" | "m_hat_guzma_bundle" | "m_hat_gyaradoscap_bundle" | "m_hat_hgss_bundle" | "m_hat_holiday2022santacostumes_bundle" | "m_hat_holidaybeanie_bundle" | "m_hat_hoopaearmuffs_bundle" | "m_hat_ingo_bundle" | "m_hat_jogger_bundle" | "m_hat_kantotourcapgreen_bundle" | "m_hat_kantotourcapred_bundle" | "m_hat_korrina_bundle" | "m_hat_lana_bundle" | "m_hat_laprasbandana_bundle" | "m_hat_lasecuritycorps_bundle" | "m_hat_legendofarceus_bundle" | "m_hat_litwickhat_bundle" | "m_hat_loneearrings_bundle" | "m_hat_lvl50cap_bundle" | "m_hat_magikarp_bundle" | "m_hat_mareaniehat_bundle" | "m_hat_megalopunnyitems_bundle" | "m_hat_megarayquaza_bundle" | "m_hat_meltan_bundle" | "m_hat_mewtwo_bundle" | "m_hat_mimikyu_bundle" | "m_hat_mismagius_bundle" | "m_hat_movie2020_bundle" | "m_hat_munnapack_bundle" | "m_hat_newyear2022_bundle" | "m_hat_newyearhat2021_bundle" | "m_hat_newyearhat2023_bundle" | "m_hat_nihilegoitems_bundle" | "m_hat_noibat_bundle" | "m_hat_obstagoonitems_bundle" | "m_hat_oras_bundle" | "m_hat_oricoriopink_bundle" | "m_hat_oricoriopurple_bundle" | "m_hat_oricoriored_bundle" | "m_hat_oricorioyellow_bundle" | "m_hat_partneritemsjan2024hat_bundle" | "m_hat_phantump_bundle" | "m_hat_pikachucap_bundle" | "m_hat_pikachufan_bundle" | "m_hat_pikachulibre_bundle" | "m_hat_pikachupumpkinhead_bundle" | "m_hat_pkmncap_bundle" | "m_hat_poipole_bundle" | "m_hat_profwillowoutfit_bundle" | "m_hat_regiicejersies_bundle" | "m_hat_regirockjersies_bundle" | "m_hat_registeeljersies_bundle" | "m_hat_ruinmaniac_bundle" | "m_hat_sableyegoggles_bundle" | "m_hat_samsungsummer2020_bundle" | "m_hat_sandygasthat_bundle" | "m_hat_shayminhat_bundle" | "m_hat_slowpoketailshirts_bundle" | "m_hat_snorlaxnightcap_bundle" | "m_hat_solgaleoitems_bundle" | "m_hat_ss_bundle" | "m_hat_stantlerheadband_bundle" | "m_hat_strawhat_bundle" | "m_hat_summer2023_bundle" | "m_hat_svcostumescarletschool_bundle" | "m_hat_svcostumevioletschool_bundle" | "m_hat_swshdlc2costume_bundle" | "m_hat_swshuniformchampion_bundle" | "m_hat_sylveonitems_bundle" | "m_hat_tcgcollabtshirtandcap_bundle" | "m_hat_teamaqua_bundle" | "m_hat_teamleadercap_bundle" | "m_hat_teamrocket_bundle" | "m_hat_teamrocketcap_bundle" | "m_hat_teamskull_bundle" | "m_hat_tophat_bundle" | "m_hat_ultra_bundle" | "m_hat_ultrareconsquad_bundle" | "m_hat_ultrareconsquadb_bundle" | "m_hat_verizon2021_bundle" | "m_hat_wcs2022winnersitems_bundle" | "m_hat_whimsicottearmuff_bundle" | "m_hat_willowglasses_bundle" | "m_hat_woobatearrings_bundle" | "m_hat_yamaskhat_bundle" | "m_hat_yamaskmask_bundle" | "m_hat_zubathat_bundle" | "m_pants_6thanniversary_bundle" | "m_pants_7thanniversary_bundle" | "m_pants_acetrainerbw_bundle" | "m_pants_acetrainersm_bundle" | "m_pants_animegou_bundle" | "m_pants_backpacker_bundle" | "m_pants_bounsweetitems_bundle" | "m_pants_brock_bundle" | "m_pants_bwn_bundle" | "m_pants_casual_0_bundle" | "m_pants_casual_1_bundle" | "m_pants_clay_bundle" | "m_pants_default_bundle" | "m_pants_denimfashionweek2023_bundle" | "m_pants_dp_bundle" | "m_pants_elesa_bundle" | "m_pants_fashionweek2022_bundle" | "m_pants_fisher_bundle" | "m_pants_flabebepack_bundle" | "m_pants_frlg_bundle" | "m_pants_fw2022_bundle" | "m_pants_geeta_bundle" | "m_pants_genderlessskirt_bundle" | "m_pants_giovanni_bundle" | "m_pants_gladion_bundle" | "m_pants_gothitelleitems_bundle" | "m_pants_green_bundle" | "m_pants_greencoat_bundle" | "m_pants_guzma_bundle" | "m_pants_gymleader_bundle" | "m_pants_hala_bundle" | "m_pants_hgss_bundle" | "m_pants_ingo_bundle" | "m_pants_jogger_bundle" | "m_pants_korrina_bundle" | "m_pants_loosepants_bundle" | "m_pants_lunalaitems_bundle" | "m_pants_luvdiscpack_bundle" | "m_pants_lysandre_bundle" | "m_pants_mewtwo_bundle" | "m_pants_munnapack_bundle" | "m_pants_newyear2022_bundle" | "m_pants_oras_bundle" | "m_pants_pajamas2022_bundle" | "m_pants_palmer_bundle" | "m_pants_pikachufan_bundle" | "m_pants_pikachulibre_bundle" | "m_pants_profwillowoutfit_bundle" | "m_pants_pumpkabooitems_bundle" | "m_pants_regiicejersies_bundle" | "m_pants_regirockjersies_bundle" | "m_pants_registeeljersies_bundle" | "m_pants_skinnyjeans_bundle" | "m_pants_ss_bundle" | "m_pants_steven_bundle" | "m_pants_stevenfirst_bundle" | "m_pants_sweats_bundle" | "m_pants_swshdlc2costume_bundle" | "m_pants_swshuniformchampion_bundle" | "m_pants_swshuniformdark_bundle" | "m_pants_swshuniformdefault_bundle" | "m_pants_swshuniformdragon_bundle" | "m_pants_teamaqua_bundle" | "m_pants_teamblanche_bundle" | "m_pants_teamcandela_bundle" | "m_pants_teammagma_bundle" | "m_pants_teamrocket_bundle" | "m_pants_teamskull_bundle" | "m_pants_teamspark_bundle" | "m_pants_ultra_bundle" | "m_pants_veterantrainerxy_bundle" | "m_pants_wcs2022winnersitems_bundle" | "m_shirt_6thanniversary_bundle" | "m_shirt_7thanniversary_bundle" | "m_shirt_acetrainerbw_bundle" | "m_shirt_acetrainersm_bundle" | "m_shirt_alolacomfey_bundle" | "m_shirt_animegou_bundle" | "m_shirt_aseries_bundle" | "m_shirt_backpacker_bundle" | "m_shirt_ballguy_bundle" | "m_shirt_bea_bundle" | "m_shirt_blazer_bundle" | "m_shirt_bounsweetitems_bundle" | "m_shirt_brock_bundle" | "m_shirt_buzzwoleitems_bundle" | "m_shirt_bwn_bundle" | "m_shirt_casual_0_bundle" | "m_shirt_casual_1_bundle" | "m_shirt_casual_2_bundle" | "m_shirt_casual_3_bundle" | "m_shirt_celebi_bundle" | "m_shirt_chimcharonesie_bundle" | "m_shirt_clay_bundle" | "m_shirt_cofagrigusitems_bundle" | "m_shirt_cosmog_bundle" | "m_shirt_cowichansweater_bundle" | "m_shirt_dayofdead_bundle" | "m_shirt_default_bundle" | "m_shirt_delibird_bundle" | "m_shirt_delibirdonesie_bundle" | "m_shirt_denimfashionweek2023_bundle" | "m_shirt_denimjacket_bundle" | "m_shirt_detectivepikachu_bundle" | "m_shirt_diancie_bundle" | "m_shirt_divingsuit_bundle" | "m_shirt_diwali2021_bundle" | "m_shirt_dp_bundle" | "m_shirt_drifblim_bundle" | "m_shirt_dusclopsmummy_bundle" | "m_shirt_earthday_2018_bundle" | "m_shirt_eeveestshirt_00_bundle" | "m_shirt_eeveestshirt_01_bundle" | "m_shirt_eeveestshirt_02_bundle" | "m_shirt_eeveestshirt_03_bundle" | "m_shirt_eeveestshirt_04_bundle" | "m_shirt_eeveestshirt_05_bundle" | "m_shirt_eeveestshirt_06_bundle" | "m_shirt_eeveestshirt_07_bundle" | "m_shirt_eeveestshirt_08_bundle" | "m_shirt_elesa_bundle" | "m_shirt_fashionweek2022_bundle" | "m_shirt_festivaloflights_00_bundle" | "m_shirt_festivaloflights_01_bundle" | "m_shirt_fisher_bundle" | "m_shirt_flabebepack_bundle" | "m_shirt_fragment_bundle" | "m_shirt_frlg_bundle" | "m_shirt_fw2022_bundle" | "m_shirt_galarfarfetchditems_bundle" | "m_shirt_galaxyoutfit_bundle" | "m_shirt_geeta_bundle" | "m_shirt_genderlessskirt_bundle" | "m_shirt_gengar_bundle" | "m_shirt_gengaronesie_bundle" | "m_shirt_giovanni_bundle" | "m_shirt_giratinaitems_bundle" | "m_shirt_gladion_bundle" | "m_shirt_gofest_2019_bundle" | "m_shirt_gofest_2020_bundle" | "m_shirt_gofest_2021_bundle" | "m_shirt_gofest2022_bundle" | "m_shirt_gofest2023_bundle" | "m_shirt_gofest2024darkgray_bundle" | "m_shirt_gofest2024gray_bundle" | "m_shirt_gofest2024purple_bundle" | "m_shirt_gofestglobal2023_bundle" | "m_shirt_goteamrocketarlo_bundle" | "m_shirt_goteamrocketcliff_bundle" | "m_shirt_goteamrocketsierra_bundle" | "m_shirt_gothitelleitems_bundle" | "m_shirt_gotour2023_bundle" | "m_shirt_gotour2024_bundle" | "m_shirt_greedentsweater_bundle" | "m_shirt_green_bundle" | "m_shirt_greencoat_bundle" | "m_shirt_gtrtshirt2022_bundle" | "m_shirt_guccitshirts_bundle" | "m_shirt_guzma_bundle" | "m_shirt_gymleader_bundle" | "m_shirt_hala_bundle" | "m_shirt_happi_bundle" | "m_shirt_hgss_bundle" | "m_shirt_holiday2022santacostumes_bundle" | "m_shirt_holifestival2021black_bundle" | "m_shirt_holifestival2021white_bundle" | "m_shirt_hoopaunboundtshirt_bundle" | "m_shirt_ingo_bundle" | "m_shirt_ingress_bundle" | "m_shirt_ingress_e_bundle" | "m_shirt_ingress_r_bundle" | "m_shirt_james_bundle" | "m_shirt_jirachi_bundle" | "m_shirt_jogger_bundle" | "m_shirt_keldeotshirt_bundle" | "m_shirt_korrina_bundle" | "m_shirt_ladiamondoutfit_bundle" | "m_shirt_lana_bundle" | "m_shirt_lapearloutfit_bundle" | "m_shirt_lasecuritycorps_bundle" | "m_shirt_latias_latios_bundle" | "m_shirt_legendofarceus_bundle" | "m_shirt_longsleeves_bundle" | "m_shirt_luvdiscpack_bundle" | "m_shirt_lvl50_bundle" | "m_shirt_lysandre_bundle" | "m_shirt_marshadowtshirt_bundle" | "m_shirt_megalopunnyitems_bundle" | "m_shirt_megarayquaza_bundle" | "m_shirt_melmetaljacket_bundle" | "m_shirt_melmetalvest_bundle" | "m_shirt_meloettatshirt_bundle" | "m_shirt_meltan_bundle" | "m_shirt_mew_bundle" | "m_shirt_mewtwo_bundle" | "m_shirt_movie2020jessiejames_bundle" | "m_shirt_munnapack_bundle" | "m_shirt_newyear2022_bundle" | "m_shirt_nike2021_bundle" | "m_shirt_ocshirt_bundle" | "m_shirt_oras_bundle" | "m_shirt_pajamas2022_bundle" | "m_shirt_palmer_bundle" | "m_shirt_partneritemsjan2024hoodie_bundle" | "m_shirt_partneritemsjan2024tshirt_bundle" | "m_shirt_pikachufan_bundle" | "m_shirt_pikachulibre_bundle" | "m_shirt_pikachuonesie_bundle" | "m_shirt_pinpukuhoodie_bundle" | "m_shirt_pipluponesie_bundle" | "m_shirt_pkmnhoodie001_bundle" | "m_shirt_pkmnhoodie004_bundle" | "m_shirt_pkmnhoodie007_bundle" | "m_shirt_pkmnshirts_bundle" | "m_shirt_pkmnshirts2021_bundle" | "m_shirt_poloshirt_bundle" | "m_shirt_profwillowoutfit_bundle" | "m_shirt_projectguitar_bundle" | "m_shirt_pumpkabooitems_bundle" | "m_shirt_regiicejersies_bundle" | "m_shirt_regirockjersies_bundle" | "m_shirt_registeeljersies_bundle" | "m_shirt_reuniclusitems_bundle" | "m_shirt_ruinmaniac_bundle" | "m_shirt_safarizone2020_bundle" | "m_shirt_samsungsummer2020_bundle" | "m_shirt_shayminlandtshirt_bundle" | "m_shirt_shayminskytshirt_bundle" | "m_shirt_shinymewtshirts_bundle" | "m_shirt_slowpokeshirts_bundle" | "m_shirt_slowpoketailshirts_bundle" | "m_shirt_snorlaxonesie_bundle" | "m_shirt_spiritomb_bundle" | "m_shirt_spring2021gulpin_bundle" | "m_shirt_spring2021plusle_bundle" | "m_shirt_ss_bundle" | "m_shirt_steven_bundle" | "m_shirt_stevenfirst_bundle" | "m_shirt_sukajanblastoise_bundle" | "m_shirt_sukajancharizard_bundle" | "m_shirt_sukajanhouou_bundle" | "m_shirt_sukajanlugia_bundle" | "m_shirt_sukajanvenusaur_bundle" | "m_shirt_summer2023_bundle" | "m_shirt_sustainability2021_bundle" | "m_shirt_svcostumescarletschool_bundle" | "m_shirt_svcostumevioletschool_bundle" | "m_shirt_svdlc1_bundle" | "m_shirt_svdlc2fall_bundle" | "m_shirt_svdlc2spring_bundle" | "m_shirt_sweatshirt_bundle" | "m_shirt_swshdlc2costume_bundle" | "m_shirt_swshdlccostume_bundle" | "m_shirt_swshuniformchampion_bundle" | "m_shirt_swshuniformdark_bundle" | "m_shirt_swshuniformdefault_bundle" | "m_shirt_swshuniformdragon_bundle" | "m_shirt_sylveonitems_bundle" | "m_shirt_tcgcollabtshirtandcap_bundle" | "m_shirt_teamaqua_bundle" | "m_shirt_teamblanche_bundle" | "m_shirt_teamcandela_bundle" | "m_shirt_teammagma_bundle" | "m_shirt_teamrocket_bundle" | "m_shirt_teamskull_bundle" | "m_shirt_teamspark_bundle" | "m_shirt_togepihoodie_bundle" | "m_shirt_tracksuitsgroudon_bundle" | "m_shirt_tracksuitskyogre_bundle" | "m_shirt_tshirt_bundle" | "m_shirt_turtleneck_bundle" | "m_shirt_turtwigonesie_bundle" | "m_shirt_ultra_bundle" | "m_shirt_ultrareconsquad_bundle" | "m_shirt_uniqlotshirts_bundle" | "m_shirt_unwto_bundle" | "m_shirt_valentine2023_bundle" | "m_shirt_verizon2020sweater_bundle" | "m_shirt_veterantrainerxy_bundle" | "m_shirt_victinitshirts_bundle" | "m_shirt_wcs2022_bundle" | "m_shirt_wcs2022tshirtbulu_bundle" | "m_shirt_wcs2022tshirtred_bundle" | "m_shirt_wcs2022winnersitems_bundle" | "m_shirt_wcs2023_bundle" | "m_shirt_wcs2023promotshirt_01_bundle" | "m_shirt_wcs2023promotshirt_bundle" | "m_shirt_wcs2023sukajan_bundle" | "m_shirt_wcs2023winnersitems_bundle" | "m_shirt_wcs2024_bundle" | "m_shirt_wcs2024championshipshirt-blue_bundle" | "m_shirt_wcs2024championshipshirt-white_bundle" | "m_shirt_wcsyokohama_bundle" | "m_shirt_whitecoat_bundle" | "m_shirt_wintersweater2023_bundle" | "m_shirt_zoruaonesie_bundle" | "m_shoes_6thanniversary_bundle" | "m_shoes_acetrainerbw_bundle" | "m_shoes_acetrainersm_bundle" | "m_shoes_animegou_bundle" | "m_shoes_backpacker_bundle" | "m_shoes_brock_bundle" | "m_shoes_bwn_bundle" | "m_shoes_carbink_bundle" | "m_shoes_clay_bundle" | "m_shoes_coolboots_bundle" | "m_shoes_dedenneitems_bundle" | "m_shoes_default_bundle" | "m_shoes_delibird_bundle" | "m_shoes_dp_bundle" | "m_shoes_elesa_bundle" | "m_shoes_empty_bundle" | "m_shoes_fashionweek2022_bundle" | "m_shoes_fisher_bundle" | "m_shoes_frlg_bundle" | "m_shoes_fw2022_bundle" | "m_shoes_geeta_bundle" | "m_shoes_giovanni_bundle" | "m_shoes_gladion_bundle" | "m_shoes_gothitelleitems_bundle" | "m_shoes_green_bundle" | "m_shoes_gymleader_bundle" | "m_shoes_hala_bundle" | "m_shoes_hgss_bundle" | "m_shoes_ingo_bundle" | "m_shoes_jogger_bundle" | "m_shoes_korrina_bundle" | "m_shoes_ladiamondoutfit_bundle" | "m_shoes_lana_bundle" | "m_shoes_lapearloutfit_bundle" | "m_shoes_legendofarceus_bundle" | "m_shoes_loosepants_bundle" | "m_shoes_luvdiscpack_bundle" | "m_shoes_lysandre_bundle" | "m_shoes_megalopunnyitems_bundle" | "m_shoes_melmetalshoes_bundle" | "m_shoes_mewtwo_bundle" | "m_shoes_newyear2022_bundle" | "m_shoes_nike2021_bundle" | "m_shoes_oras_bundle" | "m_shoes_pajamas2022_bundle" | "m_shoes_palmer_bundle" | "m_shoes_pikachufan_bundle" | "m_shoes_pikachulibre_bundle" | "m_shoes_profwillowoutfit_bundle" | "m_shoes_regiicejersies_bundle" | "m_shoes_regirockjersies_bundle" | "m_shoes_registeeljersies_bundle" | "m_shoes_reuniclusitems_bundle" | "m_shoes_ruinmaniac_bundle" | "m_shoes_sandals_bundle" | "m_shoes_solgaleoitems_bundle" | "m_shoes_ss_bundle" | "m_shoes_steven_bundle" | "m_shoes_stevenfirst_bundle" | "m_shoes_svcostumescarletschool_bundle" | "m_shoes_svcostumevioletschool_bundle" | "m_shoes_svdlc1_bundle" | "m_shoes_svdlc2spring_bundle" | "m_shoes_swshdlc2costume_bundle" | "m_shoes_swshdlccostume_bundle" | "m_shoes_swshuniformdark_bundle" | "m_shoes_swshuniformdefault_bundle" | "m_shoes_swshuniformdragon_bundle" | "m_shoes_sylveonitems_bundle" | "m_shoes_teamaqua_bundle" | "m_shoes_teamblanche_bundle" | "m_shoes_teamcandela_bundle" | "m_shoes_teammagma_bundle" | "m_shoes_teamrocket_bundle" | "m_shoes_teamskull_bundle" | "m_shoes_teamspark_bundle" | "m_shoes_ultra_bundle" | "m_shoes_ultrareconsquad_bundle" | "m_shoes_veterantrainerxy_bundle" | "m_shoes_wcs2022winnersitems_bundle" | "m_shoes_wcs2023winnersitems_bundle" | "m_shoes_winterboots_bundle" | "m_shoes_winterboots2023_bundle" | "m_socks_default_bundle" | "m_socks_empty_bundle" | "m_socks_fw2022_bundle" | "m_socks_sneakersocks_bundle" | "m_socks_sollunaitems_bundle" | "m_socks_swshuniformdefault_bundle" | "m_socks_swshuniformdragon_bundle";
		enabled?: true;
		groupName: "group_backpack" | "group_belt" | "group_eyes" | "group_face" | "group_glasses" | "group_gloves" | "group_hair" | "group_hat" | "group_necklace" | "group_pants" | "group_poses" | "group_seasonal" | "group_shirt" | "group_shoes" | "group_skin" | "group_socks" | "group_sponsor";
		iapSku?: "pgorelease.avatar.f_backpack_alolaitemslittenbp_0" | "pgorelease.avatar.f_backpack_alolaitemspoppliobp_0" | "pgorelease.avatar.f_backpack_alolaitemsrowletbp_0" | "pgorelease.avatar.f_backpack_backpacker_0" | "pgorelease.avatar.f_backpack_combeebackpack_0" | "pgorelease.avatar.f_backpack_combeebackpack_1" | "pgorelease.avatar.f_backpack_cute_0" | "pgorelease.avatar.f_backpack_dedenneitems_0" | "pgorelease.avatar.f_backpack_egg-incubator_0" | "pgorelease.avatar.f_backpack_eggbackpack_0" | "pgorelease.avatar.f_backpack_eggbackpack_1" | "pgorelease.avatar.f_backpack_eggbackpack_2" | "pgorelease.avatar.f_backpack_frlg_0" | "pgorelease.avatar.f_backpack_genesecteventitem_0" | "pgorelease.avatar.f_backpack_gengar_0" | "pgorelease.avatar.f_backpack_giratinaitems_0" | "pgorelease.avatar.f_backpack_guitarcasebackpack_0" | "pgorelease.avatar.f_backpack_hgss_0" | "pgorelease.avatar.f_backpack_hououbackpack_0" | "pgorelease.avatar.f_backpack_kakureonpouch_0" | "pgorelease.avatar.f_backpack_komala_0" | "pgorelease.avatar.f_backpack_lunalaitems_0" | "pgorelease.avatar.f_backpack_lunarNewYr_0" | "pgorelease.avatar.f_backpack_mimikyubp_0" | "pgorelease.avatar.f_backpack_naganadelawings_0" | "pgorelease.avatar.f_backpack_nike2021_0" | "pgorelease.avatar.f_backpack_pamobackpack_0" | "pgorelease.avatar.f_backpack_pkmnhoodie001" | "pgorelease.avatar.f_backpack_pkmnhoodie004" | "pgorelease.avatar.f_backpack_pkmnhoodie007" | "pgorelease.avatar.f_backpack_ruinmaniac_0" | "pgorelease.avatar.f_backpack_togepibackpack_0" | "pgorelease.avatar.f_backpack_zubatbp_0" | "pgorelease.avatar.f_belt_acetrainerbw_0" | "pgorelease.avatar.f_belt_simple_0" | "pgorelease.avatar.f_belt_simple_1" | "pgorelease.avatar.f_belt_simple_2" | "pgorelease.avatar.f_belt_simple_3" | "pgorelease.avatar.f_belt_teamrocket_0" | "pgorelease.avatar.f_belt_teamrocket_1" | "pgorelease.avatar.f_face_3dmask_0" | "pgorelease.avatar.f_face_3dmask_1" | "pgorelease.avatar.f_face_3dmask_2" | "pgorelease.avatar.f_face_banettemask_0" | "pgorelease.avatar.f_face_dayofthedead_0" | "pgorelease.avatar.f_face_facestickerghostpika_0" | "pgorelease.avatar.f_face_facestickerpikachu_0" | "pgorelease.avatar.f_face_facestickerpokeball_0" | "pgorelease.avatar.f_face_gracidea_0" | "pgorelease.avatar.f_face_holiday2022santacostumes_0" | "pgorelease.avatar.f_face_pikachumask_0" | "pgorelease.avatar.f_face_sableyemask_0" | "pgorelease.avatar.f_face_teamskull_0" | "pgorelease.avatar.f_face_toxelmask_0" | "pgorelease.avatar.f_face_verizon2020mask_0" | "pgorelease.avatar.f_glasses_3d" | "pgorelease.avatar.f_glasses_cutieflysleepmask_0" | "pgorelease.avatar.f_glasses_divingsuit_0" | "pgorelease.avatar.f_glasses_drpikachu_0" | "pgorelease.avatar.f_glasses_frillishglasses_0" | "pgorelease.avatar.f_glasses_fw2022_0" | "pgorelease.avatar.f_glasses_gimmighoulitems_0" | "pgorelease.avatar.f_glasses_goteamrocketarlo" | "pgorelease.avatar.f_glasses_lugiaglasses_0" | "pgorelease.avatar.f_glasses_mask_0" | "pgorelease.avatar.f_glasses_mask_1" | "pgorelease.avatar.f_glasses_newyearglasses2020_0" | "pgorelease.avatar.f_glasses_newyearglasses2021_0" | "pgorelease.avatar.f_glasses_newyearglasses2022_0" | "pgorelease.avatar.f_glasses_obstagoonitems_0" | "pgorelease.avatar.f_glasses_roundsunglasses_0" | "pgorelease.avatar.f_glasses_teardrop_0" | "pgorelease.avatar.f_glasses_thick_0" | "pgorelease.avatar.f_glasses_thick_1" | "pgorelease.avatar.f_glasses_thick_2" | "pgorelease.avatar.f_glasses_thick_3" | "pgorelease.avatar.f_glasses_thick_4" | "pgorelease.avatar.f_gloves_acetrainersm_0" | "pgorelease.avatar.f_gloves_battlegirl_0" | "pgorelease.avatar.f_gloves_bea_0" | "pgorelease.avatar.f_gloves_bwn_0" | "pgorelease.avatar.f_gloves_delibird_0" | "pgorelease.avatar.f_gloves_dynamaxswsh_0" | "pgorelease.avatar.f_gloves_frlg_0" | "pgorelease.avatar.f_gloves_geeta_0" | "pgorelease.avatar.f_gloves_giovanni_0" | "pgorelease.avatar.f_gloves_guzma_0" | "pgorelease.avatar.f_gloves_gymleader_0" | "pgorelease.avatar.f_gloves_hoopabangle_0" | "pgorelease.avatar.f_gloves_korrina_0" | "pgorelease.avatar.f_gloves_lysandre_0" | "pgorelease.avatar.f_gloves_megabangleblack_0" | "pgorelease.avatar.f_gloves_megabangleblue_0" | "pgorelease.avatar.f_gloves_megabanglered_0" | "pgorelease.avatar.f_gloves_megabangleyellow_0" | "pgorelease.avatar.f_gloves_obstagoonitems_0" | "pgorelease.avatar.f_gloves_palmer_0" | "pgorelease.avatar.f_gloves_profwillowoutfit_0" | "pgorelease.avatar.f_gloves_stevenfirst_0" | "pgorelease.avatar.f_gloves_swshuniformchampion_0" | "pgorelease.avatar.f_gloves_swshuniformdark_0" | "pgorelease.avatar.f_gloves_swshuniformdragon_0" | "pgorelease.avatar.f_gloves_teamaqua_0" | "pgorelease.avatar.f_gloves_teammagma_0" | "pgorelease.avatar.f_gloves_teamrocket_0" | "pgorelease.avatar.f_gloves_teamspark_0" | "pgorelease.avatar.f_gloves_wintergloves2023_0" | "pgorelease.avatar.f_hat_6thanniversary_0" | "pgorelease.avatar.f_hat_acetrainersm_0" | "pgorelease.avatar.f_hat_aseries_0" | "pgorelease.avatar.f_hat_bea_0" | "pgorelease.avatar.f_hat_bidoofhat_0" | "pgorelease.avatar.f_hat_bounsweetitems_0" | "pgorelease.avatar.f_hat_burmyearrings11_0" | "pgorelease.avatar.f_hat_burmyearrings12_0" | "pgorelease.avatar.f_hat_burmyearrings13_0" | "pgorelease.avatar.f_hat_bwn_0" | "pgorelease.avatar.f_hat_casket_0" | "pgorelease.avatar.f_hat_cetoddlehat_0" | "pgorelease.avatar.f_hat_clay_0" | "pgorelease.avatar.f_hat_cofagrigusitems_0" | "pgorelease.avatar.f_hat_cosmog_0" | "pgorelease.avatar.f_hat_crownmoon_0" | "pgorelease.avatar.f_hat_crownsun_0" | "pgorelease.avatar.f_hat_cubonehat_0" | "pgorelease.avatar.f_hat_darumakahat_0" | "pgorelease.avatar.f_hat_dedenneitems_0" | "pgorelease.avatar.f_hat_deino_0" | "pgorelease.avatar.f_hat_delibird_0" | "pgorelease.avatar.f_hat_diancie_0" | "pgorelease.avatar.f_hat_drifloon_0" | "pgorelease.avatar.f_hat_drpikachu_0" | "pgorelease.avatar.f_hat_dusclopsmummy_0" | "pgorelease.avatar.f_hat_elesa_0" | "pgorelease.avatar.f_hat_fedora_0" | "pgorelease.avatar.f_hat_fedora_1" | "pgorelease.avatar.f_hat_flabebepack_0" | "pgorelease.avatar.f_hat_frlg_0" | "pgorelease.avatar.f_hat_furfrouwig_0" | "pgorelease.avatar.f_hat_fw2022_0" | "pgorelease.avatar.f_hat_galarfarfetchditems_0" | "pgorelease.avatar.f_hat_genesecteventitem_0" | "pgorelease.avatar.f_hat_gengar_0" | "pgorelease.avatar.f_hat_gimmighoulitems_0" | "pgorelease.avatar.f_hat_giratinaitems_0" | "pgorelease.avatar.f_hat_gladion_0" | "pgorelease.avatar.f_hat_goomy_0" | "pgorelease.avatar.f_hat_greavardwig_0" | "pgorelease.avatar.f_hat_greencoat_0" | "pgorelease.avatar.f_hat_growlithehelmet_0" | "pgorelease.avatar.f_hat_gtr2024eeveefanmask_0" | "pgorelease.avatar.f_hat_gtr2024pikachufanmask_0" | "pgorelease.avatar.f_hat_guzma_0" | "pgorelease.avatar.f_hat_gyaradoscap_0" | "pgorelease.avatar.f_hat_hgss_0" | "pgorelease.avatar.f_hat_holiday2022santacostumes_0" | "pgorelease.avatar.f_hat_hoopaearmuffs_0" | "pgorelease.avatar.f_hat_ingo_0" | "pgorelease.avatar.f_hat_kantotourcapgreen_0" | "pgorelease.avatar.f_hat_kantotourcapred_0" | "pgorelease.avatar.f_hat_knitted_0" | "pgorelease.avatar.f_hat_knitted_1" | "pgorelease.avatar.f_hat_korrina_0" | "pgorelease.avatar.f_hat_lana_0" | "pgorelease.avatar.f_hat_laprasbandana_0" | "pgorelease.avatar.f_hat_lasecuritycorps_0" | "pgorelease.avatar.f_hat_litwickhat_0" | "pgorelease.avatar.f_hat_mareaniehat_0" | "pgorelease.avatar.f_hat_megalopunnyitems_0" | "pgorelease.avatar.f_hat_megarayquaza_0" | "pgorelease.avatar.f_hat_meltan_0" | "pgorelease.avatar.f_hat_meltanearrings_0" | "pgorelease.avatar.f_hat_mewtwo_0" | "pgorelease.avatar.f_hat_mismagius_0" | "pgorelease.avatar.f_hat_munnapack_0" | "pgorelease.avatar.f_hat_munnapack_1" | "pgorelease.avatar.f_hat_newyear2022_0" | "pgorelease.avatar.f_hat_newyearhat2021_0" | "pgorelease.avatar.f_hat_newyearhat2023_0" | "pgorelease.avatar.f_hat_nihilegoitems_0" | "pgorelease.avatar.f_hat_noibat_0" | "pgorelease.avatar.f_hat_obstagoonitems_0" | "pgorelease.avatar.f_hat_oricorioPink_0" | "pgorelease.avatar.f_hat_oricorioPurple_0" | "pgorelease.avatar.f_hat_oricorioRed_0" | "pgorelease.avatar.f_hat_oricorioYellow_0" | "pgorelease.avatar.f_hat_partneritemsjan2024hat_0" | "pgorelease.avatar.f_hat_phantump_0" | "pgorelease.avatar.f_hat_pikachufan_0" | "pgorelease.avatar.f_hat_pikachulibre_0" | "pgorelease.avatar.f_hat_pikachupumpkinhead_0" | "pgorelease.avatar.f_hat_pkmncap_0" | "pgorelease.avatar.f_hat_pkmncap_1" | "pgorelease.avatar.f_hat_pkmncap_2" | "pgorelease.avatar.f_hat_poipole_0" | "pgorelease.avatar.f_hat_profwillowoutfit_0" | "pgorelease.avatar.f_hat_regiicejersies_0" | "pgorelease.avatar.f_hat_regirockjersies_0" | "pgorelease.avatar.f_hat_registeeljersies_0" | "pgorelease.avatar.f_hat_ruinmaniac_0" | "pgorelease.avatar.f_hat_sableyegoggles_0" | "pgorelease.avatar.f_hat_samsungsummer2020_0" | "pgorelease.avatar.f_hat_sandygasthat_0" | "pgorelease.avatar.f_hat_shayminhat_0" | "pgorelease.avatar.f_hat_slowpoketailshirts_0" | "pgorelease.avatar.f_hat_solgaleoitems_0" | "pgorelease.avatar.f_hat_stantlerheadband_0" | "pgorelease.avatar.f_hat_summer2023_0" | "pgorelease.avatar.f_hat_swshuniformchampion_0" | "pgorelease.avatar.f_hat_sylveonitems_0" | "pgorelease.avatar.f_hat_tcgcollabtshirtandcap_0" | "pgorelease.avatar.f_hat_teamaqua_0" | "pgorelease.avatar.f_hat_teamleadercap_0" | "pgorelease.avatar.f_hat_teamleadercap_1" | "pgorelease.avatar.f_hat_teamleadercap_2" | "pgorelease.avatar.f_hat_teamrocket_0" | "pgorelease.avatar.f_hat_teamrocketcap_0" | "pgorelease.avatar.f_hat_teamskull_0" | "pgorelease.avatar.f_hat_tophat_0" | "pgorelease.avatar.f_hat_ultraReconSquad_0" | "pgorelease.avatar.f_hat_ultraReconSquadB_0" | "pgorelease.avatar.f_hat_wcs2022winnersitems_0" | "pgorelease.avatar.f_hat_whimsicottearmuff_0" | "pgorelease.avatar.f_hat_willowglasses_0" | "pgorelease.avatar.f_hat_woobatearrings_0" | "pgorelease.avatar.f_hat_yamaskhat_0" | "pgorelease.avatar.f_hat_yamaskmask_0" | "pgorelease.avatar.f_hat_zubathat_0" | "pgorelease.avatar.f_pants_6thanniversary_0" | "pgorelease.avatar.f_pants_7thanniversary_0" | "pgorelease.avatar.f_pants_acetrainerbw_0" | "pgorelease.avatar.f_pants_backpacker_0" | "pgorelease.avatar.f_pants_battlegirl_0" | "pgorelease.avatar.f_pants_bounsweetitems_0" | "pgorelease.avatar.f_pants_bwn_0" | "pgorelease.avatar.f_pants_clay_0" | "pgorelease.avatar.f_pants_denimfashionweek2023_0" | "pgorelease.avatar.f_pants_fashionWeek2022_0" | "pgorelease.avatar.f_pants_flabebepack_0" | "pgorelease.avatar.f_pants_frlg_0" | "pgorelease.avatar.f_pants_fw2022_0" | "pgorelease.avatar.f_pants_geeta_0" | "pgorelease.avatar.f_pants_genderlessskirt_0" | "pgorelease.avatar.f_pants_giovanni_0" | "pgorelease.avatar.f_pants_gladion_0" | "pgorelease.avatar.f_pants_gothitelleitems_0" | "pgorelease.avatar.f_pants_greencoat_0" | "pgorelease.avatar.f_pants_guzma_0" | "pgorelease.avatar.f_pants_gymleader_0" | "pgorelease.avatar.f_pants_gymleader_1" | "pgorelease.avatar.f_pants_gymleader_2" | "pgorelease.avatar.f_pants_hala_0" | "pgorelease.avatar.f_pants_hgss_0" | "pgorelease.avatar.f_pants_ingo_0" | "pgorelease.avatar.f_pants_loosepants_0" | "pgorelease.avatar.f_pants_lunalaitems_0" | "pgorelease.avatar.f_pants_luvdiscpack_0" | "pgorelease.avatar.f_pants_lysandre_0" | "pgorelease.avatar.f_pants_mewtwo_0" | "pgorelease.avatar.f_pants_miniskirt_0" | "pgorelease.avatar.f_pants_miniskirt_1" | "pgorelease.avatar.f_pants_miniskirt_2" | "pgorelease.avatar.f_pants_miniskirt_3" | "pgorelease.avatar.f_pants_miniskirt_turbine_0" | "pgorelease.avatar.f_pants_miniskirt_turbine_1" | "pgorelease.avatar.f_pants_miniskirt_turbine_2" | "pgorelease.avatar.f_pants_misty_0" | "pgorelease.avatar.f_pants_munnapack_0" | "pgorelease.avatar.f_pants_neon_solid_0" | "pgorelease.avatar.f_pants_neon_solid_1" | "pgorelease.avatar.f_pants_neon_solid_2" | "pgorelease.avatar.f_pants_neon_stripes_0" | "pgorelease.avatar.f_pants_neon_stripes_1" | "pgorelease.avatar.f_pants_newyear2022_0" | "pgorelease.avatar.f_pants_pajamas2022_0" | "pgorelease.avatar.f_pants_pajamas2022_1" | "pgorelease.avatar.f_pants_palmer_0" | "pgorelease.avatar.f_pants_pikachufan_0" | "pgorelease.avatar.f_pants_pikachulibre_0" | "pgorelease.avatar.f_pants_profwillowoutfit_0" | "pgorelease.avatar.f_pants_pumpkabooitems_0" | "pgorelease.avatar.f_pants_regiicejersies_0" | "pgorelease.avatar.f_pants_regirockjersies_0" | "pgorelease.avatar.f_pants_registeeljersies_0" | "pgorelease.avatar.f_pants_shorts_0" | "pgorelease.avatar.f_pants_shorts_1" | "pgorelease.avatar.f_pants_shorts_2" | "pgorelease.avatar.f_pants_shorts_3" | "pgorelease.avatar.f_pants_skinnyjeans_0" | "pgorelease.avatar.f_pants_steven_0" | "pgorelease.avatar.f_pants_stevenfirst_0" | "pgorelease.avatar.f_pants_swshdlc2costume_0" | "pgorelease.avatar.f_pants_swshuniformchampion_0" | "pgorelease.avatar.f_pants_swshuniformdark_0" | "pgorelease.avatar.f_pants_swshuniformdragon_0" | "pgorelease.avatar.f_pants_teamaqua_0" | "pgorelease.avatar.f_pants_teamblanche_0" | "pgorelease.avatar.f_pants_teamcandela_0" | "pgorelease.avatar.f_pants_teammagma_0" | "pgorelease.avatar.f_pants_teamrocket_0" | "pgorelease.avatar.f_pants_teamskull_0" | "pgorelease.avatar.f_pants_teamspark_0" | "pgorelease.avatar.f_pants_veterantrainerxy_0" | "pgorelease.avatar.f_pants_wcs2022winnersitems_0" | "pgorelease.avatar.f_pose_01" | "pgorelease.avatar.f_pose_02" | "pgorelease.avatar.f_pose_03" | "pgorelease.avatar.f_pose_04" | "pgorelease.avatar.f_pose_05" | "pgorelease.avatar.f_pose_06" | "pgorelease.avatar.f_pose_07" | "pgorelease.avatar.f_pose_08" | "pgorelease.avatar.f_pose_09" | "pgorelease.avatar.f_pose_10" | "pgorelease.avatar.f_pose_23" | "pgorelease.avatar.f_pose_24" | "pgorelease.avatar.f_pose_25" | "pgorelease.avatar.f_pose_26" | "pgorelease.avatar.f_pose_27" | "pgorelease.avatar.f_pose_28" | "pgorelease.avatar.f_pose_29" | "pgorelease.avatar.f_pose_30" | "pgorelease.avatar.f_pose_31" | "pgorelease.avatar.f_pose_32" | "pgorelease.avatar.f_pose_33" | "pgorelease.avatar.f_pose_34" | "pgorelease.avatar.f_pose_35" | "pgorelease.avatar.f_pose_36" | "pgorelease.avatar.f_pose_37" | "pgorelease.avatar.f_pose_38" | "pgorelease.avatar.f_pose_39" | "pgorelease.avatar.f_pose_40" | "pgorelease.avatar.f_pose_41" | "pgorelease.avatar.f_pose_43" | "pgorelease.avatar.f_pose_44" | "pgorelease.avatar.f_pose_45" | "pgorelease.avatar.f_pose_46" | "pgorelease.avatar.f_pose_47" | "pgorelease.avatar.f_pose_48" | "pgorelease.avatar.f_pose_49" | "pgorelease.avatar.f_pose_50" | "pgorelease.avatar.f_pose_51" | "pgorelease.avatar.f_pose_52" | "pgorelease.avatar.f_pose_53" | "pgorelease.avatar.f_pose_55" | "pgorelease.avatar.f_pose_56" | "pgorelease.avatar.f_pose_57" | "pgorelease.avatar.f_pose_58" | "pgorelease.avatar.f_pose_59" | "pgorelease.avatar.f_pose_60" | "pgorelease.avatar.f_pose_61" | "pgorelease.avatar.f_pose_62" | "pgorelease.avatar.f_pose_63" | "pgorelease.avatar.f_pose_64" | "pgorelease.avatar.f_shirt_6thanniversary_0" | "pgorelease.avatar.f_shirt_7thanniversary_0" | "pgorelease.avatar.f_shirt_acetrainerbw_0" | "pgorelease.avatar.f_shirt_acetrainersm_0" | "pgorelease.avatar.f_shirt_alolacomfey_0" | "pgorelease.avatar.f_shirt_aseries_0" | "pgorelease.avatar.f_shirt_backpacker_0" | "pgorelease.avatar.f_shirt_ballguy_0" | "pgorelease.avatar.f_shirt_battlegirl_0" | "pgorelease.avatar.f_shirt_bea_0" | "pgorelease.avatar.f_shirt_bounsweetitems_0" | "pgorelease.avatar.f_shirt_buttondown_0" | "pgorelease.avatar.f_shirt_buzzwoleitems_0" | "pgorelease.avatar.f_shirt_bwn_0" | "pgorelease.avatar.f_shirt_chimcharonesie_0" | "pgorelease.avatar.f_shirt_clay_0" | "pgorelease.avatar.f_shirt_cofagrigusitems_0" | "pgorelease.avatar.f_shirt_cosmog_0" | "pgorelease.avatar.f_shirt_cowichansweater_0" | "pgorelease.avatar.f_shirt_delibird_0" | "pgorelease.avatar.f_shirt_delibirdonesie_0" | "pgorelease.avatar.f_shirt_denimfashionweek2023_0" | "pgorelease.avatar.f_shirt_denimjacket_0" | "pgorelease.avatar.f_shirt_diancie_0" | "pgorelease.avatar.f_shirt_divingsuit_0" | "pgorelease.avatar.f_shirt_drifblim_0" | "pgorelease.avatar.f_shirt_dusclopsmummy_0" | "pgorelease.avatar.f_shirt_eeveestshirt_00_0" | "pgorelease.avatar.f_shirt_eeveestshirt_01_0" | "pgorelease.avatar.f_shirt_eeveestshirt_02_0" | "pgorelease.avatar.f_shirt_eeveestshirt_03_0" | "pgorelease.avatar.f_shirt_eeveestshirt_04" | "pgorelease.avatar.f_shirt_eeveestshirt_05" | "pgorelease.avatar.f_shirt_eeveestshirt_06" | "pgorelease.avatar.f_shirt_eeveestshirt_07" | "pgorelease.avatar.f_shirt_eeveestshirt_08" | "pgorelease.avatar.f_shirt_elesa_0" | "pgorelease.avatar.f_shirt_fashionWeek2022_0" | "pgorelease.avatar.f_shirt_festivaloflights_00_0" | "pgorelease.avatar.f_shirt_festivaloflights_01_0" | "pgorelease.avatar.f_shirt_flabebepack_0" | "pgorelease.avatar.f_shirt_frlg_0" | "pgorelease.avatar.f_shirt_fw2022_0" | "pgorelease.avatar.f_shirt_galarfarfetchditems_0" | "pgorelease.avatar.f_shirt_galaxyoutfit_0" | "pgorelease.avatar.f_shirt_geeta_0" | "pgorelease.avatar.f_shirt_genderlessskirt_0" | "pgorelease.avatar.f_shirt_gengar_0" | "pgorelease.avatar.f_shirt_gengaronesie_0" | "pgorelease.avatar.f_shirt_giovanni_0" | "pgorelease.avatar.f_shirt_giratinaitems_0" | "pgorelease.avatar.f_shirt_gladion_0" | "pgorelease.avatar.f_shirt_gofest2023_0" | "pgorelease.avatar.f_shirt_gofest2024darkgray_0" | "pgorelease.avatar.f_shirt_gofest2024gray_0" | "pgorelease.avatar.f_shirt_gofest2024purple_0" | "pgorelease.avatar.f_shirt_gofestglobal2023_0" | "pgorelease.avatar.f_shirt_goteamrocketarlo_0" | "pgorelease.avatar.f_shirt_goteamrocketcliff_0" | "pgorelease.avatar.f_shirt_goteamrocketsierra_0" | "pgorelease.avatar.f_shirt_gothitelleitems_0" | "pgorelease.avatar.f_shirt_gotour2024_0" | "pgorelease.avatar.f_shirt_greedentsweater_0" | "pgorelease.avatar.f_shirt_greencoat_0" | "pgorelease.avatar.f_shirt_gtrtshirt2022_0" | "pgorelease.avatar.f_shirt_gtrtshirt2022_1" | "pgorelease.avatar.f_shirt_guzma_0" | "pgorelease.avatar.f_shirt_gymleader_0" | "pgorelease.avatar.f_shirt_gymleader_1" | "pgorelease.avatar.f_shirt_gymleader_2" | "pgorelease.avatar.f_shirt_hala_0" | "pgorelease.avatar.f_shirt_happi_0" | "pgorelease.avatar.f_shirt_happi_1" | "pgorelease.avatar.f_shirt_happi_2" | "pgorelease.avatar.f_shirt_hgss_0" | "pgorelease.avatar.f_shirt_holiday2022santacostumes_0" | "pgorelease.avatar.f_shirt_hoopaunboundtshirt_0" | "pgorelease.avatar.f_shirt_ingo_0" | "pgorelease.avatar.f_shirt_jirachi_0" | "pgorelease.avatar.f_shirt_keldeotshirt_0" | "pgorelease.avatar.f_shirt_korrina_0" | "pgorelease.avatar.f_shirt_ladiamondoutfit_0" | "pgorelease.avatar.f_shirt_lana_0" | "pgorelease.avatar.f_shirt_lapearloutfit_0" | "pgorelease.avatar.f_shirt_lasecuritycorps_0" | "pgorelease.avatar.f_shirt_latias_latios_0" | "pgorelease.avatar.f_shirt_luvdiscpack_0" | "pgorelease.avatar.f_shirt_lysandre_0" | "pgorelease.avatar.f_shirt_marshadowtshirt_0" | "pgorelease.avatar.f_shirt_megalopunnyitems_0" | "pgorelease.avatar.f_shirt_megarayquaza_0" | "pgorelease.avatar.f_shirt_melmetaljacket_0" | "pgorelease.avatar.f_shirt_melmetalvest_0" | "pgorelease.avatar.f_shirt_meloettatshirt_0" | "pgorelease.avatar.f_shirt_meltan_0" | "pgorelease.avatar.f_shirt_mew_0" | "pgorelease.avatar.f_shirt_mewtwo_0" | "pgorelease.avatar.f_shirt_misty_0" | "pgorelease.avatar.f_shirt_munnapack_0" | "pgorelease.avatar.f_shirt_newyear2022_0" | "pgorelease.avatar.f_shirt_nike2021_0" | "pgorelease.avatar.f_shirt_ocshirt_045" | "pgorelease.avatar.f_shirt_ocshirt_108" | "pgorelease.avatar.f_shirt_ocshirt_129" | "pgorelease.avatar.f_shirt_ocshirt_143" | "pgorelease.avatar.f_shirt_pajamas2022_0" | "pgorelease.avatar.f_shirt_pajamas2022_1" | "pgorelease.avatar.f_shirt_palmer_0" | "pgorelease.avatar.f_shirt_partneritemsjan2024hoodie_0" | "pgorelease.avatar.f_shirt_partneritemsjan2024tshirt_0" | "pgorelease.avatar.f_shirt_pikachufan_0" | "pgorelease.avatar.f_shirt_pikachulibre_0" | "pgorelease.avatar.f_shirt_pikachuonesie_0" | "pgorelease.avatar.f_shirt_pinpukuhoodie_0" | "pgorelease.avatar.f_shirt_pipluponesie_0" | "pgorelease.avatar.f_shirt_pkmnhoodie001" | "pgorelease.avatar.f_shirt_pkmnhoodie004" | "pgorelease.avatar.f_shirt_pkmnhoodie007" | "pgorelease.avatar.f_shirt_pkmnshirts_165" | "pgorelease.avatar.f_shirt_pkmnshirts_188" | "pgorelease.avatar.f_shirt_pkmnshirts_201" | "pgorelease.avatar.f_shirt_pkmnshirts_238" | "pgorelease.avatar.f_shirt_pkmnshirts2021_0" | "pgorelease.avatar.f_shirt_pkmnshirts2021_1" | "pgorelease.avatar.f_shirt_pkmnshirts2021_2" | "pgorelease.avatar.f_shirt_poloshirt_0" | "pgorelease.avatar.f_shirt_poloshirt_1" | "pgorelease.avatar.f_shirt_poloshirt_2" | "pgorelease.avatar.f_shirt_profwillowoutfit_0" | "pgorelease.avatar.f_shirt_projectguitar_0" | "pgorelease.avatar.f_shirt_pumpkabooitems_0" | "pgorelease.avatar.f_shirt_regiicejersies_0" | "pgorelease.avatar.f_shirt_regirockjersies_0" | "pgorelease.avatar.f_shirt_registeeljersies_0" | "pgorelease.avatar.f_shirt_reuniclusitems_0" | "pgorelease.avatar.f_shirt_ruinmaniac_0" | "pgorelease.avatar.f_shirt_safarizone2020_0" | "pgorelease.avatar.f_shirt_samsungsummer2020_0" | "pgorelease.avatar.f_shirt_shayminlandtshirt_0" | "pgorelease.avatar.f_shirt_shayminskytshirt_0" | "pgorelease.avatar.f_shirt_shinymewtshirts_0" | "pgorelease.avatar.f_shirt_slowpokeshirts_0" | "pgorelease.avatar.f_shirt_slowpoketailshirts_0" | "pgorelease.avatar.f_shirt_snorlaxonesie_0" | "pgorelease.avatar.f_shirt_spiritomb_0" | "pgorelease.avatar.f_shirt_spring2021gulpin_0" | "pgorelease.avatar.f_shirt_spring2021plusle_0" | "pgorelease.avatar.f_shirt_steven_0" | "pgorelease.avatar.f_shirt_stevenfirst_0" | "pgorelease.avatar.f_shirt_sukajanblastoise_0" | "pgorelease.avatar.f_shirt_sukajancharizard_0" | "pgorelease.avatar.f_shirt_sukajanhouou_0" | "pgorelease.avatar.f_shirt_sukajanlugia_0" | "pgorelease.avatar.f_shirt_sukajanvenusaur_0" | "pgorelease.avatar.f_shirt_summer2023_0" | "pgorelease.avatar.f_shirt_sweater_30_0" | "pgorelease.avatar.f_shirt_sweater_30_1" | "pgorelease.avatar.f_shirt_sweater_30_2" | "pgorelease.avatar.f_shirt_sweater_instinct" | "pgorelease.avatar.f_shirt_sweater_mystic" | "pgorelease.avatar.f_shirt_sweater_valor" | "pgorelease.avatar.f_shirt_swshuniformchampion_0" | "pgorelease.avatar.f_shirt_swshuniformdark_0" | "pgorelease.avatar.f_shirt_swshuniformdragon_0" | "pgorelease.avatar.f_shirt_sylveonitems_0" | "pgorelease.avatar.f_shirt_tanktop_0" | "pgorelease.avatar.f_shirt_tanktop_1" | "pgorelease.avatar.f_shirt_tanktop_2" | "pgorelease.avatar.f_shirt_tanktop_charizard_0" | "pgorelease.avatar.f_shirt_tanktop_charizard_1" | "pgorelease.avatar.f_shirt_tanktop_charizard_2" | "pgorelease.avatar.f_shirt_tanktop_pikachu_0" | "pgorelease.avatar.f_shirt_tanktop_pikachu_1" | "pgorelease.avatar.f_shirt_tanktop_pikachu_2" | "pgorelease.avatar.f_shirt_tcgcollabtshirtandcap_0" | "pgorelease.avatar.f_shirt_teamaqua_0" | "pgorelease.avatar.f_shirt_teamblanche_0" | "pgorelease.avatar.f_shirt_teamcandela_0" | "pgorelease.avatar.f_shirt_teammagma_0" | "pgorelease.avatar.f_shirt_teamrocket_0" | "pgorelease.avatar.f_shirt_teamrocket_1" | "pgorelease.avatar.f_shirt_teamskull_0" | "pgorelease.avatar.f_shirt_teamspark_0" | "pgorelease.avatar.f_shirt_togepihoodie_0" | "pgorelease.avatar.f_shirt_tracksuitsgroudon_0" | "pgorelease.avatar.f_shirt_tracksuitskyogre_0" | "pgorelease.avatar.f_shirt_tshirt_cycling_0" | "pgorelease.avatar.f_shirt_tshirt_cycling_1" | "pgorelease.avatar.f_shirt_tshirt_cycling_2" | "pgorelease.avatar.f_shirt_tshirt_cycling_3" | "pgorelease.avatar.f_shirt_tshirt_pikachu_0" | "pgorelease.avatar.f_shirt_tshirt_pikachu_1" | "pgorelease.avatar.f_shirt_tshirt_pikachu_2" | "pgorelease.avatar.f_shirt_tshirt_pikachu_3" | "pgorelease.avatar.f_shirt_tshirt_pikachu_4" | "pgorelease.avatar.f_shirt_tshirt_pikachu_5" | "pgorelease.avatar.f_shirt_tshirt_pikachu_6" | "pgorelease.avatar.f_shirt_turtwigonesie_0" | "pgorelease.avatar.f_shirt_ultraReconSquad_0" | "pgorelease.avatar.f_shirt_valentine2023_0" | "pgorelease.avatar.f_shirt_verizon2020sweater_0" | "pgorelease.avatar.f_shirt_veterantrainerxy_0" | "pgorelease.avatar.f_shirt_victinitshirts_0" | "pgorelease.avatar.f_shirt_wcs2022_0" | "pgorelease.avatar.f_shirt_wcs2022tshirtbulu_0" | "pgorelease.avatar.f_shirt_wcs2022tshirtred_0" | "pgorelease.avatar.f_shirt_wcs2022winnersitems_0" | "pgorelease.avatar.f_shirt_wcs2023_0" | "pgorelease.avatar.f_shirt_wcs2023promotshirt_01_0" | "pgorelease.avatar.f_shirt_wcs2023sukajan_0" | "pgorelease.avatar.f_shirt_wcs2023winnersitems_0" | "pgorelease.avatar.f_shirt_wcs2024_0" | "pgorelease.avatar.f_shirt_wcs2024championshipshirt-blue_0" | "pgorelease.avatar.f_shirt_wcs2024championshipshirt-white_0" | "pgorelease.avatar.f_shirt_wcsyokohama_0" | "pgorelease.avatar.f_shirt_whitecoat_0" | "pgorelease.avatar.f_shirt_wintersweater2023_0" | "pgorelease.avatar.f_shirt_zoruaonesie_0" | "pgorelease.avatar.f_shoes_6thanniversary_0" | "pgorelease.avatar.f_shoes_acetrainerbw_0" | "pgorelease.avatar.f_shoes_acetrainersm_0" | "pgorelease.avatar.f_shoes_backpacker_0" | "pgorelease.avatar.f_shoes_battlegirl_0" | "pgorelease.avatar.f_shoes_bwn_0" | "pgorelease.avatar.f_shoes_carbink_0" | "pgorelease.avatar.f_shoes_clay_0" | "pgorelease.avatar.f_shoes_dedenneitems_0" | "pgorelease.avatar.f_shoes_delibird_0" | "pgorelease.avatar.f_shoes_elesa_0" | "pgorelease.avatar.f_shoes_fashionWeek2022_0" | "pgorelease.avatar.f_shoes_frlg_0" | "pgorelease.avatar.f_shoes_fw2022_0" | "pgorelease.avatar.f_shoes_geeta_0" | "pgorelease.avatar.f_shoes_giovanni_0" | "pgorelease.avatar.f_shoes_gladion_0" | "pgorelease.avatar.f_shoes_gothitelleitems_0" | "pgorelease.avatar.f_shoes_gymleader_0" | "pgorelease.avatar.f_shoes_gymleader_1" | "pgorelease.avatar.f_shoes_gymleader_2" | "pgorelease.avatar.f_shoes_hala_0" | "pgorelease.avatar.f_shoes_hgss_0" | "pgorelease.avatar.f_shoes_ingo_0" | "pgorelease.avatar.f_shoes_korrina_0" | "pgorelease.avatar.f_shoes_ladiamondoutfit_0" | "pgorelease.avatar.f_shoes_lana_0" | "pgorelease.avatar.f_shoes_lapearloutfit_0" | "pgorelease.avatar.f_shoes_loosepants_0" | "pgorelease.avatar.f_shoes_loosepants_1" | "pgorelease.avatar.f_shoes_loosepants_2" | "pgorelease.avatar.f_shoes_loosepants_3" | "pgorelease.avatar.f_shoes_luvdiscpack_0" | "pgorelease.avatar.f_shoes_lysandre_0" | "pgorelease.avatar.f_shoes_megalopunnyitems_0" | "pgorelease.avatar.f_shoes_melmetalshoes_0" | "pgorelease.avatar.f_shoes_mewtwo_0" | "pgorelease.avatar.f_shoes_misty_0" | "pgorelease.avatar.f_shoes_newyear2022_0" | "pgorelease.avatar.f_shoes_nike2021_0" | "pgorelease.avatar.f_shoes_pajamas2022_0" | "pgorelease.avatar.f_shoes_pajamas2022_1" | "pgorelease.avatar.f_shoes_palmer_0" | "pgorelease.avatar.f_shoes_pikachufan_0" | "pgorelease.avatar.f_shoes_pikachulibre_0" | "pgorelease.avatar.f_shoes_profwillowoutfit_0" | "pgorelease.avatar.f_shoes_regiicejersies_0" | "pgorelease.avatar.f_shoes_regirockjersies_0" | "pgorelease.avatar.f_shoes_registeeljersies_0" | "pgorelease.avatar.f_shoes_reuniclusitems_0" | "pgorelease.avatar.f_shoes_ruinmaniac_0" | "pgorelease.avatar.f_shoes_sandals_0" | "pgorelease.avatar.f_shoes_sandals_1" | "pgorelease.avatar.f_shoes_sandals_2" | "pgorelease.avatar.f_shoes_solgaleoitems_0" | "pgorelease.avatar.f_shoes_steven_0" | "pgorelease.avatar.f_shoes_stevenfirst_0" | "pgorelease.avatar.f_shoes_swshuniformdark_0" | "pgorelease.avatar.f_shoes_swshuniformdragon_0" | "pgorelease.avatar.f_shoes_sylveonitems_0" | "pgorelease.avatar.f_shoes_teamaqua_0" | "pgorelease.avatar.f_shoes_teamblanche_0" | "pgorelease.avatar.f_shoes_teamcandela_0" | "pgorelease.avatar.f_shoes_teammagma_0" | "pgorelease.avatar.f_shoes_teamrocket_0" | "pgorelease.avatar.f_shoes_teamrocket_1" | "pgorelease.avatar.f_shoes_teamskull_0" | "pgorelease.avatar.f_shoes_teamspark_0" | "pgorelease.avatar.f_shoes_ultraReconSquad_0" | "pgorelease.avatar.f_shoes_veterantrainerxy_0" | "pgorelease.avatar.f_shoes_wcs2022winnersitems_0" | "pgorelease.avatar.f_shoes_wcs2023winnersitems_0" | "pgorelease.avatar.f_shoes_winterboots_0" | "pgorelease.avatar.f_shoes_winterboots_1" | "pgorelease.avatar.f_shoes_winterboots_2" | "pgorelease.avatar.f_shoes_winterboots_3" | "pgorelease.avatar.f_shoes_winterboots2023_0" | "pgorelease.avatar.f_socks_fw2022_0" | "pgorelease.avatar.f_socks_hgss_0" | "pgorelease.avatar.f_socks_sollunaitems_0" | "pgorelease.avatar.f_socks_swshuniformdragon_0" | "pgorelease.avatar.f_socks_teamaqua_0" | "pgorelease.avatar.m_backpack_alolaitemslittenbp_0" | "pgorelease.avatar.m_backpack_alolaitemspoppliobp_0" | "pgorelease.avatar.m_backpack_alolaitemsrowletbp_0" | "pgorelease.avatar.m_backpack_backpacker_0" | "pgorelease.avatar.m_backpack_combeebackpack_0" | "pgorelease.avatar.m_backpack_combeebackpack_1" | "pgorelease.avatar.m_backpack_dedenneitems_0" | "pgorelease.avatar.m_backpack_egg-incubator_0" | "pgorelease.avatar.m_backpack_eggbackpack_0" | "pgorelease.avatar.m_backpack_eggbackpack_1" | "pgorelease.avatar.m_backpack_eggbackpack_2" | "pgorelease.avatar.m_backpack_frlg_0" | "pgorelease.avatar.m_backpack_genesecteventitem_0" | "pgorelease.avatar.m_backpack_gengar_0" | "pgorelease.avatar.m_backpack_giratinaitems_0" | "pgorelease.avatar.m_backpack_guitarcasebackpack_0" | "pgorelease.avatar.m_backpack_hgss_0" | "pgorelease.avatar.m_backpack_hououbackpack_0" | "pgorelease.avatar.m_backpack_kakureonpouch_0" | "pgorelease.avatar.m_backpack_komala_0" | "pgorelease.avatar.m_backpack_lunalaitems_0" | "pgorelease.avatar.m_backpack_lunarNewYr_0" | "pgorelease.avatar.m_backpack_mimikyubp_0" | "pgorelease.avatar.m_backpack_naganadelawings_0" | "pgorelease.avatar.m_backpack_nike2021_0" | "pgorelease.avatar.m_backpack_pamobackpack_0" | "pgorelease.avatar.m_backpack_pkmnhoodie001" | "pgorelease.avatar.m_backpack_pkmnhoodie004" | "pgorelease.avatar.m_backpack_pkmnhoodie007" | "pgorelease.avatar.m_backpack_ruinmaniac_0" | "pgorelease.avatar.m_backpack_togepibackpack_0" | "pgorelease.avatar.m_backpack_zubatbp_0" | "pgorelease.avatar.m_face_3dmask_0" | "pgorelease.avatar.m_face_3dmask_1" | "pgorelease.avatar.m_face_3dmask_2" | "pgorelease.avatar.m_face_banettemask_0" | "pgorelease.avatar.m_face_dayofthedead_0" | "pgorelease.avatar.m_face_facestickerghostpika_0" | "pgorelease.avatar.m_face_facestickerpikachu_0" | "pgorelease.avatar.m_face_facestickerpokeball_0" | "pgorelease.avatar.m_face_gracidea_0" | "pgorelease.avatar.m_face_holiday2022santacostumes_0" | "pgorelease.avatar.m_face_pikachumask_0" | "pgorelease.avatar.m_face_sableyemask_0" | "pgorelease.avatar.m_face_teamskull_0" | "pgorelease.avatar.m_face_toxelmask_0" | "pgorelease.avatar.m_face_verizon2020mask_0" | "pgorelease.avatar.m_glasses_3d" | "pgorelease.avatar.m_glasses_cutieflysleepmask_0" | "pgorelease.avatar.m_glasses_divingsuit_0" | "pgorelease.avatar.m_glasses_drpikachu_0" | "pgorelease.avatar.m_glasses_frillishglasses_0" | "pgorelease.avatar.m_glasses_fw2022_0" | "pgorelease.avatar.m_glasses_gimmighoulitems_0" | "pgorelease.avatar.m_glasses_goteamrocketarlo" | "pgorelease.avatar.m_glasses_jogger_0" | "pgorelease.avatar.m_glasses_lugiaglasses_0" | "pgorelease.avatar.m_glasses_mask_0" | "pgorelease.avatar.m_glasses_mask_1" | "pgorelease.avatar.m_glasses_newyearglasses2020_0" | "pgorelease.avatar.m_glasses_newyearglasses2021_0" | "pgorelease.avatar.m_glasses_newyearglasses2022_0" | "pgorelease.avatar.m_glasses_obstagoonitems_0" | "pgorelease.avatar.m_glasses_roundsunglasses_0" | "pgorelease.avatar.m_glasses_teardrop_0" | "pgorelease.avatar.m_glasses_thick_0" | "pgorelease.avatar.m_glasses_thick_1" | "pgorelease.avatar.m_glasses_thick_2" | "pgorelease.avatar.m_glasses_thick_3" | "pgorelease.avatar.m_glasses_thick_4" | "pgorelease.avatar.m_gloves_acetrainersm_0" | "pgorelease.avatar.m_gloves_bea_0" | "pgorelease.avatar.m_gloves_bwn_0" | "pgorelease.avatar.m_gloves_delibird_0" | "pgorelease.avatar.m_gloves_dynamaxswsh_0" | "pgorelease.avatar.m_gloves_frlg_0" | "pgorelease.avatar.m_gloves_geeta_0" | "pgorelease.avatar.m_gloves_giovanni_0" | "pgorelease.avatar.m_gloves_guzma_0" | "pgorelease.avatar.m_gloves_gymleader_0" | "pgorelease.avatar.m_gloves_hoopabangle_0" | "pgorelease.avatar.m_gloves_jogger" | "pgorelease.avatar.m_gloves_korrina_0" | "pgorelease.avatar.m_gloves_lysandre_0" | "pgorelease.avatar.m_gloves_megabangleblack_0" | "pgorelease.avatar.m_gloves_megabangleblue_0" | "pgorelease.avatar.m_gloves_megabanglered_0" | "pgorelease.avatar.m_gloves_megabangleyellow_0" | "pgorelease.avatar.m_gloves_obstagoonitems_0" | "pgorelease.avatar.m_gloves_palmer_0" | "pgorelease.avatar.m_gloves_profwillowoutfit_0" | "pgorelease.avatar.m_gloves_stevenfirst_0" | "pgorelease.avatar.m_gloves_swshuniformchampion_0" | "pgorelease.avatar.m_gloves_swshuniformdark_0" | "pgorelease.avatar.m_gloves_swshuniformdragon_0" | "pgorelease.avatar.m_gloves_teamaqua_0" | "pgorelease.avatar.m_gloves_teammagma_0" | "pgorelease.avatar.m_gloves_teamrocket_0" | "pgorelease.avatar.m_gloves_teamspark_0" | "pgorelease.avatar.m_gloves_wintergloves2023_0" | "pgorelease.avatar.m_hat_6thanniversary_0" | "pgorelease.avatar.m_hat_acetrainersm_0" | "pgorelease.avatar.m_hat_aseries_0" | "pgorelease.avatar.m_hat_bea_0" | "pgorelease.avatar.m_hat_bidoofhat_0" | "pgorelease.avatar.m_hat_bounsweetitems_0" | "pgorelease.avatar.m_hat_burmyearrings11_0" | "pgorelease.avatar.m_hat_burmyearrings12_0" | "pgorelease.avatar.m_hat_burmyearrings13_0" | "pgorelease.avatar.m_hat_bwn_0" | "pgorelease.avatar.m_hat_casket_0" | "pgorelease.avatar.m_hat_cetoddlehat_0" | "pgorelease.avatar.m_hat_clay_0" | "pgorelease.avatar.m_hat_cofagrigusitems_0" | "pgorelease.avatar.m_hat_cosmog_0" | "pgorelease.avatar.m_hat_crownmoon_0" | "pgorelease.avatar.m_hat_crownsun_0" | "pgorelease.avatar.m_hat_cubonehat_0" | "pgorelease.avatar.m_hat_darumakahat_0" | "pgorelease.avatar.m_hat_dedenneitems_0" | "pgorelease.avatar.m_hat_deino_0" | "pgorelease.avatar.m_hat_delibird_0" | "pgorelease.avatar.m_hat_diancie_0" | "pgorelease.avatar.m_hat_drifloon_0" | "pgorelease.avatar.m_hat_drpikachu_0" | "pgorelease.avatar.m_hat_dusclopsmummy_0" | "pgorelease.avatar.m_hat_elesa_0" | "pgorelease.avatar.m_hat_fedora_0" | "pgorelease.avatar.m_hat_fedora_1" | "pgorelease.avatar.m_hat_fisher_0" | "pgorelease.avatar.m_hat_flabebepack_0" | "pgorelease.avatar.m_hat_frlg_0" | "pgorelease.avatar.m_hat_furfrouwig_0" | "pgorelease.avatar.m_hat_fw2022_0" | "pgorelease.avatar.m_hat_galarfarfetchditems_0" | "pgorelease.avatar.m_hat_genesecteventitem_0" | "pgorelease.avatar.m_hat_gengar_0" | "pgorelease.avatar.m_hat_gimmighoulitems_0" | "pgorelease.avatar.m_hat_giratinaitems_0" | "pgorelease.avatar.m_hat_gladion_0" | "pgorelease.avatar.m_hat_goomy_0" | "pgorelease.avatar.m_hat_greavardwig_0" | "pgorelease.avatar.m_hat_greencoat_0" | "pgorelease.avatar.m_hat_growlithehelmet_0" | "pgorelease.avatar.m_hat_gtr2024eeveefanmask_0" | "pgorelease.avatar.m_hat_gtr2024pikachufanmask_0" | "pgorelease.avatar.m_hat_guzma_0" | "pgorelease.avatar.m_hat_gyaradoscap_0" | "pgorelease.avatar.m_hat_hgss_0" | "pgorelease.avatar.m_hat_holiday2022santacostumes_0" | "pgorelease.avatar.m_hat_hoopaearmuffs_0" | "pgorelease.avatar.m_hat_ingo_0" | "pgorelease.avatar.m_hat_jogger_0" | "pgorelease.avatar.m_hat_kantotourcapgreen_0" | "pgorelease.avatar.m_hat_kantotourcapred_0" | "pgorelease.avatar.m_hat_korrina_0" | "pgorelease.avatar.m_hat_lana_0" | "pgorelease.avatar.m_hat_laprasbandana_0" | "pgorelease.avatar.m_hat_lasecuritycorps_0" | "pgorelease.avatar.m_hat_litwickhat_0" | "pgorelease.avatar.m_hat_mareaniehat_0" | "pgorelease.avatar.m_hat_megalopunnyitems_0" | "pgorelease.avatar.m_hat_megarayquaza_0" | "pgorelease.avatar.m_hat_meltan_0" | "pgorelease.avatar.m_hat_mewtwo_0" | "pgorelease.avatar.m_hat_mismagius_0" | "pgorelease.avatar.m_hat_munnapack_0" | "pgorelease.avatar.m_hat_munnapack_1" | "pgorelease.avatar.m_hat_newyear2022_0" | "pgorelease.avatar.m_hat_newyearhat2021_0" | "pgorelease.avatar.m_hat_newyearhat2023_0" | "pgorelease.avatar.m_hat_nihilegoitems_0" | "pgorelease.avatar.m_hat_noibat_0" | "pgorelease.avatar.m_hat_obstagoonitems_0" | "pgorelease.avatar.m_hat_oricorioPink_0" | "pgorelease.avatar.m_hat_oricorioPurple_0" | "pgorelease.avatar.m_hat_oricorioRed_0" | "pgorelease.avatar.m_hat_oricorioYellow_0" | "pgorelease.avatar.m_hat_partneritemsjan2024hat_0" | "pgorelease.avatar.m_hat_phantump_0" | "pgorelease.avatar.m_hat_pikachufan_0" | "pgorelease.avatar.m_hat_pikachulibre_0" | "pgorelease.avatar.m_hat_pikachupumpkinhead_0" | "pgorelease.avatar.m_hat_pkmncap_0" | "pgorelease.avatar.m_hat_pkmncap_1" | "pgorelease.avatar.m_hat_pkmncap_2" | "pgorelease.avatar.m_hat_poipole_0" | "pgorelease.avatar.m_hat_profwillowoutfit_0" | "pgorelease.avatar.m_hat_regiicejersies_0" | "pgorelease.avatar.m_hat_regirockjersies_0" | "pgorelease.avatar.m_hat_registeeljersies_0" | "pgorelease.avatar.m_hat_ruinmaniac_0" | "pgorelease.avatar.m_hat_sableyegoggles_0" | "pgorelease.avatar.m_hat_samsungsummer2020_0" | "pgorelease.avatar.m_hat_sandygasthat_0" | "pgorelease.avatar.m_hat_shayminhat_0" | "pgorelease.avatar.m_hat_slowpoketailshirts_0" | "pgorelease.avatar.m_hat_solgaleoitems_0" | "pgorelease.avatar.m_hat_stantlerheadband_0" | "pgorelease.avatar.m_hat_summer2023_0" | "pgorelease.avatar.m_hat_swshuniformchampion_0" | "pgorelease.avatar.m_hat_sylveonitems_0" | "pgorelease.avatar.m_hat_tcgcollabtshirtandcap_0" | "pgorelease.avatar.m_hat_teamaqua_0" | "pgorelease.avatar.m_hat_teamleadercap_0" | "pgorelease.avatar.m_hat_teamleadercap_1" | "pgorelease.avatar.m_hat_teamleadercap_2" | "pgorelease.avatar.m_hat_teamrocket_0" | "pgorelease.avatar.m_hat_teamrocketcap_0" | "pgorelease.avatar.m_hat_teamskull_0" | "pgorelease.avatar.m_hat_tophat_0" | "pgorelease.avatar.m_hat_ultraReconSquad_0" | "pgorelease.avatar.m_hat_ultraReconSquadB_0" | "pgorelease.avatar.m_hat_wcs2022winnersitems_0" | "pgorelease.avatar.m_hat_whimsicottearmuff_0" | "pgorelease.avatar.m_hat_willowglasses_0" | "pgorelease.avatar.m_hat_woobatearrings_0" | "pgorelease.avatar.m_hat_yamaskhat_0" | "pgorelease.avatar.m_hat_yamaskmask_0" | "pgorelease.avatar.m_hat_zubathat_0" | "pgorelease.avatar.m_pants_6thanniversary_0" | "pgorelease.avatar.m_pants_7thanniversary_0" | "pgorelease.avatar.m_pants_acetrainerbw_0" | "pgorelease.avatar.m_pants_acetrainersm_0" | "pgorelease.avatar.m_pants_backpacker_0" | "pgorelease.avatar.m_pants_bounsweetitems_0" | "pgorelease.avatar.m_pants_brock_0" | "pgorelease.avatar.m_pants_bwn_0" | "pgorelease.avatar.m_pants_clay_0" | "pgorelease.avatar.m_pants_denimfashionweek2023_0" | "pgorelease.avatar.m_pants_elesa_0" | "pgorelease.avatar.m_pants_fashionWeek2022_0" | "pgorelease.avatar.m_pants_fisher_0" | "pgorelease.avatar.m_pants_flabebepack_0" | "pgorelease.avatar.m_pants_frlg_0" | "pgorelease.avatar.m_pants_fw2022_0" | "pgorelease.avatar.m_pants_geeta_0" | "pgorelease.avatar.m_pants_genderlessskirt_0" | "pgorelease.avatar.m_pants_giovanni_0" | "pgorelease.avatar.m_pants_gladion_0" | "pgorelease.avatar.m_pants_gothitelleitems_0" | "pgorelease.avatar.m_pants_greencoat_0" | "pgorelease.avatar.m_pants_guzma_0" | "pgorelease.avatar.m_pants_gymleader_0" | "pgorelease.avatar.m_pants_gymleader_1" | "pgorelease.avatar.m_pants_gymleader_2" | "pgorelease.avatar.m_pants_hala_0" | "pgorelease.avatar.m_pants_hgss_0" | "pgorelease.avatar.m_pants_ingo_0" | "pgorelease.avatar.m_pants_jogger_0" | "pgorelease.avatar.m_pants_korrina_0" | "pgorelease.avatar.m_pants_loosepants_0" | "pgorelease.avatar.m_pants_lunalaitems_0" | "pgorelease.avatar.m_pants_luvdiscpack_0" | "pgorelease.avatar.m_pants_lysandre_0" | "pgorelease.avatar.m_pants_mewtwo_0" | "pgorelease.avatar.m_pants_munnapack_0" | "pgorelease.avatar.m_pants_newyear2022_0" | "pgorelease.avatar.m_pants_pajamas2022_0" | "pgorelease.avatar.m_pants_pajamas2022_1" | "pgorelease.avatar.m_pants_palmer_0" | "pgorelease.avatar.m_pants_pikachufan_0" | "pgorelease.avatar.m_pants_pikachulibre_0" | "pgorelease.avatar.m_pants_profwillowoutfit_0" | "pgorelease.avatar.m_pants_pumpkabooitems_0" | "pgorelease.avatar.m_pants_regiicejersies_0" | "pgorelease.avatar.m_pants_regirockjersies_0" | "pgorelease.avatar.m_pants_registeeljersies_0" | "pgorelease.avatar.m_pants_skinnyjeans_0" | "pgorelease.avatar.m_pants_skinnyjeans_1" | "pgorelease.avatar.m_pants_skinnyjeans_2" | "pgorelease.avatar.m_pants_steven_0" | "pgorelease.avatar.m_pants_stevenfirst_0" | "pgorelease.avatar.m_pants_sweats_0" | "pgorelease.avatar.m_pants_sweats_1" | "pgorelease.avatar.m_pants_sweats_2" | "pgorelease.avatar.m_pants_sweats_3" | "pgorelease.avatar.m_pants_sweats_4" | "pgorelease.avatar.m_pants_swshdlc2costume_0" | "pgorelease.avatar.m_pants_swshuniformchampion_0" | "pgorelease.avatar.m_pants_swshuniformdark_0" | "pgorelease.avatar.m_pants_swshuniformdragon_0" | "pgorelease.avatar.m_pants_teamaqua_0" | "pgorelease.avatar.m_pants_teamblanche_0" | "pgorelease.avatar.m_pants_teamcandela_0" | "pgorelease.avatar.m_pants_teammagma_0" | "pgorelease.avatar.m_pants_teamrocket_0" | "pgorelease.avatar.m_pants_teamskull_0" | "pgorelease.avatar.m_pants_teamspark_0" | "pgorelease.avatar.m_pants_veterantrainerxy_0" | "pgorelease.avatar.m_pants_wcs2022winnersitems_0" | "pgorelease.avatar.m_pose_01" | "pgorelease.avatar.m_pose_02" | "pgorelease.avatar.m_pose_03" | "pgorelease.avatar.m_pose_04" | "pgorelease.avatar.m_pose_05" | "pgorelease.avatar.m_pose_06" | "pgorelease.avatar.m_pose_07" | "pgorelease.avatar.m_pose_08" | "pgorelease.avatar.m_pose_09" | "pgorelease.avatar.m_pose_10" | "pgorelease.avatar.m_pose_23" | "pgorelease.avatar.m_pose_24" | "pgorelease.avatar.m_pose_25" | "pgorelease.avatar.m_pose_26" | "pgorelease.avatar.m_pose_27" | "pgorelease.avatar.m_pose_28" | "pgorelease.avatar.m_pose_29" | "pgorelease.avatar.m_pose_30" | "pgorelease.avatar.m_pose_31" | "pgorelease.avatar.m_pose_32" | "pgorelease.avatar.m_pose_33" | "pgorelease.avatar.m_pose_34" | "pgorelease.avatar.m_pose_35" | "pgorelease.avatar.m_pose_36" | "pgorelease.avatar.m_pose_37" | "pgorelease.avatar.m_pose_38" | "pgorelease.avatar.m_pose_39" | "pgorelease.avatar.m_pose_40" | "pgorelease.avatar.m_pose_41" | "pgorelease.avatar.m_pose_43" | "pgorelease.avatar.m_pose_44" | "pgorelease.avatar.m_pose_45" | "pgorelease.avatar.m_pose_46" | "pgorelease.avatar.m_pose_47" | "pgorelease.avatar.m_pose_48" | "pgorelease.avatar.m_pose_49" | "pgorelease.avatar.m_pose_50" | "pgorelease.avatar.m_pose_51" | "pgorelease.avatar.m_pose_52" | "pgorelease.avatar.m_pose_53" | "pgorelease.avatar.m_pose_55" | "pgorelease.avatar.m_pose_56" | "pgorelease.avatar.m_pose_57" | "pgorelease.avatar.m_pose_58" | "pgorelease.avatar.m_pose_59" | "pgorelease.avatar.m_pose_60" | "pgorelease.avatar.m_pose_61" | "pgorelease.avatar.m_pose_62" | "pgorelease.avatar.m_pose_63" | "pgorelease.avatar.m_pose_64" | "pgorelease.avatar.m_shirt_6thanniversary_0" | "pgorelease.avatar.m_shirt_7thanniversary_0" | "pgorelease.avatar.m_shirt_acetrainerbw_0" | "pgorelease.avatar.m_shirt_acetrainersm_0" | "pgorelease.avatar.m_shirt_alolacomfey_0" | "pgorelease.avatar.m_shirt_aseries_0" | "pgorelease.avatar.m_shirt_backpacker_0" | "pgorelease.avatar.m_shirt_ballguy_0" | "pgorelease.avatar.m_shirt_bea_0" | "pgorelease.avatar.m_shirt_blazer_0" | "pgorelease.avatar.m_shirt_bounsweetitems_0" | "pgorelease.avatar.m_shirt_brock_0" | "pgorelease.avatar.m_shirt_buzzwoleitems_0" | "pgorelease.avatar.m_shirt_bwn_0" | "pgorelease.avatar.m_shirt_chimcharonesie_0" | "pgorelease.avatar.m_shirt_clay_0" | "pgorelease.avatar.m_shirt_cofagrigusitems_0" | "pgorelease.avatar.m_shirt_cosmog_0" | "pgorelease.avatar.m_shirt_cowichansweater_0" | "pgorelease.avatar.m_shirt_delibird_0" | "pgorelease.avatar.m_shirt_delibirdonesie_0" | "pgorelease.avatar.m_shirt_denimfashionweek2023_0" | "pgorelease.avatar.m_shirt_denimjacket_0" | "pgorelease.avatar.m_shirt_diancie_0" | "pgorelease.avatar.m_shirt_divingsuit_0" | "pgorelease.avatar.m_shirt_drifblim_0" | "pgorelease.avatar.m_shirt_dusclopsmummy_0" | "pgorelease.avatar.m_shirt_eeveestshirt_00_0" | "pgorelease.avatar.m_shirt_eeveestshirt_01_0" | "pgorelease.avatar.m_shirt_eeveestshirt_02_0" | "pgorelease.avatar.m_shirt_eeveestshirt_03_0" | "pgorelease.avatar.m_shirt_eeveestshirt_04" | "pgorelease.avatar.m_shirt_eeveestshirt_05" | "pgorelease.avatar.m_shirt_eeveestshirt_06" | "pgorelease.avatar.m_shirt_eeveestshirt_07" | "pgorelease.avatar.m_shirt_eeveestshirt_08" | "pgorelease.avatar.m_shirt_elesa_0" | "pgorelease.avatar.m_shirt_fashionWeek2022_0" | "pgorelease.avatar.m_shirt_festivaloflights_00_0" | "pgorelease.avatar.m_shirt_festivaloflights_01_0" | "pgorelease.avatar.m_shirt_fisher_0" | "pgorelease.avatar.m_shirt_flabebepack_0" | "pgorelease.avatar.m_shirt_frlg_0" | "pgorelease.avatar.m_shirt_fw2022_0" | "pgorelease.avatar.m_shirt_galarfarfetchditems_0" | "pgorelease.avatar.m_shirt_galaxyoutfit_0" | "pgorelease.avatar.m_shirt_geeta_0" | "pgorelease.avatar.m_shirt_genderlessskirt_0" | "pgorelease.avatar.m_shirt_gengar_0" | "pgorelease.avatar.m_shirt_gengaronesie_0" | "pgorelease.avatar.m_shirt_giovanni_0" | "pgorelease.avatar.m_shirt_giratinaitems_0" | "pgorelease.avatar.m_shirt_gladion_0" | "pgorelease.avatar.m_shirt_gofest2023_0" | "pgorelease.avatar.m_shirt_gofest2024darkgray_0" | "pgorelease.avatar.m_shirt_gofest2024gray_0" | "pgorelease.avatar.m_shirt_gofest2024purple_0" | "pgorelease.avatar.m_shirt_gofestglobal2023_0" | "pgorelease.avatar.m_shirt_goteamrocketarlo_0" | "pgorelease.avatar.m_shirt_goteamrocketcliff_0" | "pgorelease.avatar.m_shirt_goteamrocketsierra_0" | "pgorelease.avatar.m_shirt_gothitelleitems_0" | "pgorelease.avatar.m_shirt_gotour2024_0" | "pgorelease.avatar.m_shirt_greedentsweater_0" | "pgorelease.avatar.m_shirt_greencoat_0" | "pgorelease.avatar.m_shirt_gtrtshirt2022_0" | "pgorelease.avatar.m_shirt_gtrtshirt2022_1" | "pgorelease.avatar.m_shirt_guzma_0" | "pgorelease.avatar.m_shirt_gymleader_0" | "pgorelease.avatar.m_shirt_gymleader_1" | "pgorelease.avatar.m_shirt_gymleader_2" | "pgorelease.avatar.m_shirt_hala_0" | "pgorelease.avatar.m_shirt_happi_0" | "pgorelease.avatar.m_shirt_happi_1" | "pgorelease.avatar.m_shirt_happi_2" | "pgorelease.avatar.m_shirt_hgss_0" | "pgorelease.avatar.m_shirt_holiday2022santacostumes_0" | "pgorelease.avatar.m_shirt_hoopaunboundtshirt_0" | "pgorelease.avatar.m_shirt_ingo_0" | "pgorelease.avatar.m_shirt_jirachi_0" | "pgorelease.avatar.m_shirt_jogger_0" | "pgorelease.avatar.m_shirt_keldeotshirt_0" | "pgorelease.avatar.m_shirt_korrina_0" | "pgorelease.avatar.m_shirt_ladiamondoutfit_0" | "pgorelease.avatar.m_shirt_lana_0" | "pgorelease.avatar.m_shirt_lapearloutfit_0" | "pgorelease.avatar.m_shirt_lasecuritycorps_0" | "pgorelease.avatar.m_shirt_latias_latios_0" | "pgorelease.avatar.m_shirt_longsleeves_charizard_0" | "pgorelease.avatar.m_shirt_longsleeves_charizard_1" | "pgorelease.avatar.m_shirt_longsleeves_charizard_2" | "pgorelease.avatar.m_shirt_longsleeves_pikachu_0" | "pgorelease.avatar.m_shirt_longsleeves_pikachu_1" | "pgorelease.avatar.m_shirt_longsleeves_pikachu_2" | "pgorelease.avatar.m_shirt_luvdiscpack_0" | "pgorelease.avatar.m_shirt_lysandre_0" | "pgorelease.avatar.m_shirt_marshadowtshirt_0" | "pgorelease.avatar.m_shirt_megalopunnyitems_0" | "pgorelease.avatar.m_shirt_megarayquaza_0" | "pgorelease.avatar.m_shirt_melmetaljacket_0" | "pgorelease.avatar.m_shirt_melmetalvest_0" | "pgorelease.avatar.m_shirt_meloettatshirt_0" | "pgorelease.avatar.m_shirt_meltan_0" | "pgorelease.avatar.m_shirt_mew_0" | "pgorelease.avatar.m_shirt_mewtwo_0" | "pgorelease.avatar.m_shirt_munnapack_0" | "pgorelease.avatar.m_shirt_newyear2022_0" | "pgorelease.avatar.m_shirt_nike2021_0" | "pgorelease.avatar.m_shirt_ocshirt_045" | "pgorelease.avatar.m_shirt_ocshirt_108" | "pgorelease.avatar.m_shirt_ocshirt_129" | "pgorelease.avatar.m_shirt_ocshirt_143" | "pgorelease.avatar.m_shirt_pajamas2022_0" | "pgorelease.avatar.m_shirt_pajamas2022_1" | "pgorelease.avatar.m_shirt_palmer_0" | "pgorelease.avatar.m_shirt_partneritemsjan2024hoodie_0" | "pgorelease.avatar.m_shirt_partneritemsjan2024tshirt_0" | "pgorelease.avatar.m_shirt_pikachufan_0" | "pgorelease.avatar.m_shirt_pikachulibre_0" | "pgorelease.avatar.m_shirt_pikachuonesie_0" | "pgorelease.avatar.m_shirt_pinpukuhoodie_0" | "pgorelease.avatar.m_shirt_pipluponesie_0" | "pgorelease.avatar.m_shirt_pkmnhoodie001" | "pgorelease.avatar.m_shirt_pkmnhoodie004" | "pgorelease.avatar.m_shirt_pkmnhoodie007" | "pgorelease.avatar.m_shirt_pkmnshirts_165" | "pgorelease.avatar.m_shirt_pkmnshirts_188" | "pgorelease.avatar.m_shirt_pkmnshirts_201" | "pgorelease.avatar.m_shirt_pkmnshirts_238" | "pgorelease.avatar.m_shirt_pkmnshirts2021_0" | "pgorelease.avatar.m_shirt_pkmnshirts2021_1" | "pgorelease.avatar.m_shirt_pkmnshirts2021_2" | "pgorelease.avatar.m_shirt_poloshirt_0" | "pgorelease.avatar.m_shirt_poloshirt_1" | "pgorelease.avatar.m_shirt_poloshirt_2" | "pgorelease.avatar.m_shirt_profwillowoutfit_0" | "pgorelease.avatar.m_shirt_projectguitar_0" | "pgorelease.avatar.m_shirt_pumpkabooitems_0" | "pgorelease.avatar.m_shirt_regiicejersies_0" | "pgorelease.avatar.m_shirt_regirockjersies_0" | "pgorelease.avatar.m_shirt_registeeljersies_0" | "pgorelease.avatar.m_shirt_reuniclusitems_0" | "pgorelease.avatar.m_shirt_ruinmaniac_0" | "pgorelease.avatar.m_shirt_safarizone2020_0" | "pgorelease.avatar.m_shirt_samsungsummer2020_0" | "pgorelease.avatar.m_shirt_shayminlandtshirt_0" | "pgorelease.avatar.m_shirt_shayminskytshirt_0" | "pgorelease.avatar.m_shirt_shinymewtshirts_0" | "pgorelease.avatar.m_shirt_slowpokeshirts_0" | "pgorelease.avatar.m_shirt_slowpoketailshirts_0" | "pgorelease.avatar.m_shirt_snorlaxonesie_0" | "pgorelease.avatar.m_shirt_spiritomb_0" | "pgorelease.avatar.m_shirt_spring2021gulpin_0" | "pgorelease.avatar.m_shirt_spring2021plusle_0" | "pgorelease.avatar.m_shirt_steven_0" | "pgorelease.avatar.m_shirt_stevenfirst_0" | "pgorelease.avatar.m_shirt_sukajanblastoise_0" | "pgorelease.avatar.m_shirt_sukajancharizard_0" | "pgorelease.avatar.m_shirt_sukajanhouou_0" | "pgorelease.avatar.m_shirt_sukajanlugia_0" | "pgorelease.avatar.m_shirt_sukajanvenusaur_0" | "pgorelease.avatar.m_shirt_summer2023_0" | "pgorelease.avatar.m_shirt_sweatshirt_sporty_0" | "pgorelease.avatar.m_shirt_sweatshirt_sporty_1" | "pgorelease.avatar.m_shirt_sweatshirt_sporty_2" | "pgorelease.avatar.m_shirt_sweatshirt_sporty_3" | "pgorelease.avatar.m_shirt_sweatshirt_streak_0" | "pgorelease.avatar.m_shirt_sweatshirt_streak_1" | "pgorelease.avatar.m_shirt_sweatshirt_streak_2" | "pgorelease.avatar.m_shirt_sweatshirt_streak_3" | "pgorelease.avatar.m_shirt_sweatshirt_streak_4" | "pgorelease.avatar.m_shirt_swshuniformchampion_0" | "pgorelease.avatar.m_shirt_swshuniformdark_0" | "pgorelease.avatar.m_shirt_swshuniformdragon_0" | "pgorelease.avatar.m_shirt_sylveonitems_0" | "pgorelease.avatar.m_shirt_tcgcollabtshirtandcap_0" | "pgorelease.avatar.m_shirt_teamaqua_0" | "pgorelease.avatar.m_shirt_teamblanche_0" | "pgorelease.avatar.m_shirt_teamcandela_0" | "pgorelease.avatar.m_shirt_teammagma_0" | "pgorelease.avatar.m_shirt_teamrocket_0" | "pgorelease.avatar.m_shirt_teamrocket_1" | "pgorelease.avatar.m_shirt_teamskull_0" | "pgorelease.avatar.m_shirt_teamspark_0" | "pgorelease.avatar.m_shirt_togepihoodie_0" | "pgorelease.avatar.m_shirt_tracksuitsgroudon_0" | "pgorelease.avatar.m_shirt_tracksuitskyogre_0" | "pgorelease.avatar.m_shirt_tshirt_geometric_0" | "pgorelease.avatar.m_shirt_tshirt_geometric_1" | "pgorelease.avatar.m_shirt_tshirt_geometric_2" | "pgorelease.avatar.m_shirt_tshirt_instinct" | "pgorelease.avatar.m_shirt_tshirt_mystic" | "pgorelease.avatar.m_shirt_tshirt_valor" | "pgorelease.avatar.m_shirt_turtleneck_30_0" | "pgorelease.avatar.m_shirt_turtleneck_30_1" | "pgorelease.avatar.m_shirt_turtleneck_30_2" | "pgorelease.avatar.m_shirt_turtleneck_30_3" | "pgorelease.avatar.m_shirt_turtwigonesie_0" | "pgorelease.avatar.m_shirt_ultraReconSquad_0" | "pgorelease.avatar.m_shirt_valentine2023_0" | "pgorelease.avatar.m_shirt_verizon2020sweater_0" | "pgorelease.avatar.m_shirt_veterantrainerxy_0" | "pgorelease.avatar.m_shirt_victinitshirts_0" | "pgorelease.avatar.m_shirt_wcs2022_0" | "pgorelease.avatar.m_shirt_wcs2022tshirtbulu_0" | "pgorelease.avatar.m_shirt_wcs2022tshirtred_0" | "pgorelease.avatar.m_shirt_wcs2022winnersitems_0" | "pgorelease.avatar.m_shirt_wcs2023_0" | "pgorelease.avatar.m_shirt_wcs2023promotshirt_01_0" | "pgorelease.avatar.m_shirt_wcs2023sukajan_0" | "pgorelease.avatar.m_shirt_wcs2023winnersitems_0" | "pgorelease.avatar.m_shirt_wcs2024_0" | "pgorelease.avatar.m_shirt_wcs2024championshipshirt-blue_0" | "pgorelease.avatar.m_shirt_wcs2024championshipshirt-white_0" | "pgorelease.avatar.m_shirt_wcsyokohama_0" | "pgorelease.avatar.m_shirt_whitecoat_0" | "pgorelease.avatar.m_shirt_wintersweater2023_0" | "pgorelease.avatar.m_shirt_zoruaonesie_0" | "pgorelease.avatar.m_shoes_6thanniversary_0" | "pgorelease.avatar.m_shoes_acetrainerbw_0" | "pgorelease.avatar.m_shoes_acetrainersm_0" | "pgorelease.avatar.m_shoes_backpacker_0" | "pgorelease.avatar.m_shoes_brock_0" | "pgorelease.avatar.m_shoes_bwn_0" | "pgorelease.avatar.m_shoes_carbink_0" | "pgorelease.avatar.m_shoes_clay_0" | "pgorelease.avatar.m_shoes_dedenneitems_0" | "pgorelease.avatar.m_shoes_delibird_0" | "pgorelease.avatar.m_shoes_elesa_0" | "pgorelease.avatar.m_shoes_fashionWeek2022_0" | "pgorelease.avatar.m_shoes_fisher_0" | "pgorelease.avatar.m_shoes_frlg_0" | "pgorelease.avatar.m_shoes_fw2022_0" | "pgorelease.avatar.m_shoes_geeta_0" | "pgorelease.avatar.m_shoes_giovanni_0" | "pgorelease.avatar.m_shoes_gladion_0" | "pgorelease.avatar.m_shoes_gothitelleitems_0" | "pgorelease.avatar.m_shoes_gymleader_0" | "pgorelease.avatar.m_shoes_gymleader_1" | "pgorelease.avatar.m_shoes_gymleader_2" | "pgorelease.avatar.m_shoes_hala_0" | "pgorelease.avatar.m_shoes_hgss_0" | "pgorelease.avatar.m_shoes_ingo_0" | "pgorelease.avatar.m_shoes_jogger_0" | "pgorelease.avatar.m_shoes_korrina_0" | "pgorelease.avatar.m_shoes_ladiamondoutfit_0" | "pgorelease.avatar.m_shoes_lana_0" | "pgorelease.avatar.m_shoes_lapearloutfit_0" | "pgorelease.avatar.m_shoes_loosepants_0" | "pgorelease.avatar.m_shoes_loosepants_1" | "pgorelease.avatar.m_shoes_loosepants_2" | "pgorelease.avatar.m_shoes_loosepants_3" | "pgorelease.avatar.m_shoes_luvdiscpack_0" | "pgorelease.avatar.m_shoes_lysandre_0" | "pgorelease.avatar.m_shoes_megalopunnyitems_0" | "pgorelease.avatar.m_shoes_melmetalshoes_0" | "pgorelease.avatar.m_shoes_mewtwo_0" | "pgorelease.avatar.m_shoes_newyear2022_0" | "pgorelease.avatar.m_shoes_nike2021_0" | "pgorelease.avatar.m_shoes_pajamas2022_0" | "pgorelease.avatar.m_shoes_pajamas2022_1" | "pgorelease.avatar.m_shoes_palmer_0" | "pgorelease.avatar.m_shoes_pikachufan_0" | "pgorelease.avatar.m_shoes_pikachulibre_0" | "pgorelease.avatar.m_shoes_profwillowoutfit_0" | "pgorelease.avatar.m_shoes_regiicejersies_0" | "pgorelease.avatar.m_shoes_regirockjersies_0" | "pgorelease.avatar.m_shoes_registeeljersies_0" | "pgorelease.avatar.m_shoes_reuniclusitems_0" | "pgorelease.avatar.m_shoes_ruinmaniac_0" | "pgorelease.avatar.m_shoes_sandals_0" | "pgorelease.avatar.m_shoes_sandals_1" | "pgorelease.avatar.m_shoes_sandals_2" | "pgorelease.avatar.m_shoes_solgaleoitems_0" | "pgorelease.avatar.m_shoes_steven_0" | "pgorelease.avatar.m_shoes_stevenfirst_0" | "pgorelease.avatar.m_shoes_swshuniformdark_0" | "pgorelease.avatar.m_shoes_swshuniformdragon_0" | "pgorelease.avatar.m_shoes_sylveonitems_0" | "pgorelease.avatar.m_shoes_teamaqua_0" | "pgorelease.avatar.m_shoes_teamblanche_0" | "pgorelease.avatar.m_shoes_teamcandela_0" | "pgorelease.avatar.m_shoes_teammagma_0" | "pgorelease.avatar.m_shoes_teamrocket_0" | "pgorelease.avatar.m_shoes_teamrocket_1" | "pgorelease.avatar.m_shoes_teamskull_0" | "pgorelease.avatar.m_shoes_teamspark_0" | "pgorelease.avatar.m_shoes_ultraReconSquad_0" | "pgorelease.avatar.m_shoes_veterantrainerxy_0" | "pgorelease.avatar.m_shoes_wcs2022winnersitems_0" | "pgorelease.avatar.m_shoes_wcs2023winnersitems_0" | "pgorelease.avatar.m_shoes_winterboots_0" | "pgorelease.avatar.m_shoes_winterboots_1" | "pgorelease.avatar.m_shoes_winterboots_2" | "pgorelease.avatar.m_shoes_winterboots_3" | "pgorelease.avatar.m_shoes_winterboots2023_0" | "pgorelease.avatar.m_socks_fw2022_0" | "pgorelease.avatar.m_socks_sollunaitems_0" | "pgorelease.avatar.m_socks_swshuniformdragon_0" | "pgorelease.donotsku.f_pose21" | "pgorelease.donotsku.m_pose21" | "pgorelease.gbl.avatar.f_pants_green_0" | "pgorelease.gbl.avatar.f_pose_22" | "pgorelease.gbl.avatar.f_shirt_green_0" | "pgorelease.gbl.avatar.f_shoes_green_0" | "pgorelease.gbl.avatar.m_pants_green_0" | "pgorelease.gbl.avatar.m_pose_22" | "pgorelease.gbl.avatar.m_shirt_green_0" | "pgorelease.gbl.avatar.m_shoes_green_0";
		iconName?: "f_backpack_alolaitemslittenbp_00_bundle_icon" | "f_backpack_alolaitemspoppliobp_00_bundle_icon" | "f_backpack_alolaitemsrowletbp_00_bundle_icon" | "f_backpack_animegou_00_bundle_icon" | "f_backpack_backpacker_0_bundle_icon" | "f_backpack_combeebackpack_00_bundle_icon" | "f_backpack_combeebackpack_01_bundle_icon" | "f_backpack_cute_bundle_icon" | "f_backpack_dedenneitems_00_bundle_icon" | "f_backpack_default_bundle_icon" | "f_backpack_egg-incubator_00_bundle_icon" | "f_backpack_eggbackpack_0_bundle_icon" | "f_backpack_eggbackpack_1_bundle_icon" | "f_backpack_eggbackpack_2_bundle_icon" | "f_backpack_empty_bundle_icon" | "f_backpack_frlg_bundle_icon" | "f_backpack_genesecteventitem_0_bundle_icon" | "f_backpack_gengar_0_bundle_icon" | "f_backpack_giratinaitems_00_bundle_icon" | "f_backpack_guccibackpack_00_bundle_icon" | "f_backpack_guitarcasebackpack_00_bundle_icon" | "f_backpack_hgss_bundle_icon" | "f_backpack_hououbackpack_00_bundle_icon" | "f_backpack_kakureonpouch_00_bundle_icon" | "f_backpack_komala_00_bundle_icon" | "f_backpack_longchampbp_00_bundle_icon" | "f_backpack_lunalaitems_00_bundle_icon" | "f_backpack_lunarnewyr_00_bundle_icon" | "f_backpack_mimikyubp_0_bundle_icon" | "f_backpack_movie2020_00_bundle_icon" | "f_backpack_naganadelawings_00_bundle_icon" | "f_backpack_nike2021_00_bundle_icon" | "f_backpack_pamobackpack_00_bundle_icon" | "f_backpack_pkmnhoodie001_0_bundle_icon" | "f_backpack_pkmnhoodie004_0_bundle_icon" | "f_backpack_pkmnhoodie007_0_bundle_icon" | "f_backpack_ruinmaniac_0_bundle_icon" | "f_backpack_snapcamera_00_bundle_icon" | "f_backpack_ss_0_bundle_icon" | "f_backpack_svcostumescarletschool_00_bundle_icon" | "f_backpack_svcostumevioletschool_00_bundle_icon" | "f_backpack_svdlc1_00_bundle_icon" | "f_backpack_svdlc2spring_00_bundle_icon" | "f_backpack_swshdlc2costume_00_bundle_icon" | "f_backpack_swshdlccostume_00_bundle_icon" | "f_backpack_togepibackpack_0_bundle_icon" | "f_backpack_ultra_bundle_icon" | "f_backpack_verizon2021_00_bundle_icon" | "f_backpack_zubatbp_0_bundle_icon" | "f_belt_acetrainerbw_0_bundle_icon" | "f_belt_default_bundle_icon" | "f_belt_empty_bundle_icon" | "f_belt_simple_bundle_icon" | "f_belt_teamrocket_0_bundle_icon" | "f_belt_teamrocket_1_bundle_icon" | "f_face_3dmask_00_bundle_icon" | "f_face_3dmask_01_bundle_icon" | "f_face_3dmask_02_bundle_icon" | "f_face_banettemask_00_bundle_icon" | "f_face_dayofthedead_00_bundle_icon" | "f_face_defaultmask_00_bundle_icon" | "f_face_empty_bundle_icon" | "f_face_facestickerghostpika_00_bundle_icon" | "f_face_facestickerpikachu_00_bundle_icon" | "f_face_facestickerpokeball_00_bundle_icon" | "f_face_festofcolors_00_bundle_icon" | "f_face_festofcolors_01_bundle_icon" | "f_face_festofcolors_02_bundle_icon" | "f_face_gracidea_00_bundle_icon" | "f_face_holiday2022santacostumes_00_bundle_icon" | "f_face_pikachumask_00_bundle_icon" | "f_face_sableyemask_00_bundle_icon" | "f_face_teamskull_00_bundle_icon" | "f_face_toxelmask_00_bundle_icon" | "f_face_verizon2020mask_0_bundle_icon" | "f_glasses_3d_bundle_icon" | "f_glasses_cutieflysleepmask_00_bundle_icon" | "f_glasses_divingsuit_00_bundle_icon" | "f_glasses_drpikachu_00_bundle_icon" | "f_glasses_empty_bundle_icon" | "f_glasses_frillishglasses_00_bundle_icon" | "f_glasses_fw2022_00_bundle_icon" | "f_glasses_gimmighoulitems_00_bundle_icon" | "f_glasses_goteamrocketarlo_00_bundle_icon" | "f_glasses_grandoakglasses_00_bundle_icon" | "f_glasses_lugiaglasses_00_bundle_icon" | "f_glasses_lv40glasses_00_bundle_icon" | "f_glasses_mask_bundle_icon" | "f_glasses_newyearglasses2020_0_bundle_icon" | "f_glasses_newyearglasses2021_00_bundle_icon" | "f_glasses_newyearglasses2022_00_bundle_icon" | "f_glasses_obstagoonitems_00_bundle_icon" | "f_glasses_roundsunglasses_00_bundle_icon" | "f_glasses_teardrop_bundle_icon" | "f_glasses_thick_bundle_icon" | "f_gloves_acetrainersm_0_bundle_icon" | "f_gloves_battlegirl_bundle_icon" | "f_gloves_bea_00_bundle_icon" | "f_gloves_bwn_00_bundle_icon" | "f_gloves_default_bundle_icon" | "f_gloves_delibird_0_bundle_icon" | "f_gloves_dynamaxswsh_00_bundle_icon" | "f_gloves_empty_bundle_icon" | "f_gloves_frlg_bundle_icon" | "f_gloves_geeta_00_bundle_icon" | "f_gloves_giovanni_0_bundle_icon" | "f_gloves_guzma_00_bundle_icon" | "f_gloves_gymleader_bundle_icon" | "f_gloves_hoopabangle_00_bundle_icon" | "f_gloves_korrina_00_bundle_icon" | "f_gloves_lysandre_00_bundle_icon" | "f_gloves_megabangle_00_bundle_icon" | "f_gloves_megabangleblack_00_bundle_icon" | "f_gloves_megabangleblue_00_bundle_icon" | "f_gloves_megabanglered_00_bundle_icon" | "f_gloves_megabangleyellow_00_bundle_icon" | "f_gloves_obstagoonitems_00_bundle_icon" | "f_gloves_palmer_00_bundle_icon" | "f_gloves_profwillowoutfit_00_bundle_icon" | "f_gloves_stevenfirst_00_bundle_icon" | "f_gloves_svdlc2spring_00_bundle_icon" | "f_gloves_swshdlc2costume_00_bundle_icon" | "f_gloves_swshdlccostume_00_bundle_icon" | "f_gloves_swshuniformchampion_00_bundle_icon" | "f_gloves_swshuniformdark_00_bundle_icon" | "f_gloves_swshuniformdefault_00_bundle_icon" | "f_gloves_swshuniformdragon_00_bundle_icon" | "f_gloves_teamaqua_0_bundle_icon" | "f_gloves_teammagma_0_bundle_icon" | "f_gloves_teamrocket_bundle_icon" | "f_gloves_teamspark_0_bundle_icon" | "f_gloves_wintergloves2023_00_bundle_icon" | "f_group_eye" | "f_group_hair" | "f_hat_6thanniversary_00_bundle_icon" | "f_hat_acetrainersm_0_bundle_icon" | "f_hat_adventure_bundle_icon" | "f_hat_aseries_00_bundle_icon" | "f_hat_bea_00_bundle_icon" | "f_hat_bidoofhat_00_bundle_icon" | "f_hat_bounsweetitems_00_bundle_icon" | "f_hat_burmyearrings11_00_bundle_icon" | "f_hat_burmyearrings12_00_bundle_icon" | "f_hat_burmyearrings13_00_bundle_icon" | "f_hat_bwn_00_bundle_icon" | "f_hat_casket_bundle_icon" | "f_hat_cetoddlehat_00_bundle_icon" | "f_hat_clay_00_bundle_icon" | "f_hat_cofagrigusitems_00_bundle_icon" | "f_hat_cosmog_00_bundle_icon" | "f_hat_crownmoon_00_bundle_icon" | "f_hat_crownsun_00_bundle_icon" | "f_hat_cubonehat_0_bundle_icon" | "f_hat_darumakahat_00_bundle_icon" | "f_hat_dedenneitems_00_bundle_icon" | "f_hat_default_a_bundle_icon" | "f_hat_default_b_bundle_icon" | "f_hat_deino_00_bundle_icon" | "f_hat_delibird_0_bundle_icon" | "f_hat_detectivepikachu_0_bundle_icon" | "f_hat_diancie_00_bundle_icon" | "f_hat_dp_00_bundle_icon" | "f_hat_drifloon_0_bundle_icon" | "f_hat_drpikachu_00_bundle_icon" | "f_hat_dusclopsmummy_00_bundle_icon" | "f_hat_eeveecap_0_bundle_icon" | "f_hat_elesa_00_bundle_icon" | "f_hat_empty_bundle_icon" | "f_hat_fedora_bundle_icon" | "f_hat_flabebepack_00_bundle_icon" | "f_hat_fragment_bundle_icon" | "f_hat_frlg_bundle_icon" | "f_hat_furfrouwig_00_bundle_icon" | "f_hat_fw2022_00_bundle_icon" | "f_hat_galarfarfetchditems_00_bundle_icon" | "f_hat_genesecteventitem_0_bundle_icon" | "f_hat_gengar_0_bundle_icon" | "f_hat_gimmighoulitems_00_bundle_icon" | "f_hat_giratinaitems_00_bundle_icon" | "f_hat_gladion_00_bundle_icon" | "f_hat_gofest_pikachuvisor_0_bundle_icon" | "f_hat_goomy_00_bundle_icon" | "f_hat_greavardwig_00_bundle_icon" | "f_hat_greencoat_00_bundle_icon" | "f_hat_growlithehelmet_00_bundle_icon" | "f_hat_gtr2024eeveefanmask_00_bundle_icon" | "f_hat_gtr2024pikachufanmask_00_bundle_icon" | "f_hat_guccihat_00_bundle_icon" | "f_hat_guzma_00_bundle_icon" | "f_hat_gyaradoscap_00_bundle_icon" | "f_hat_hgss_bundle_icon" | "f_hat_holiday2022santacostumes_00_bundle_icon" | "f_hat_holidaybeanie_0_bundle_icon" | "f_hat_hoopaearmuffs_00_bundle_icon" | "f_hat_ingo_00_bundle_icon" | "f_hat_kantotourcapgreen_00_bundle_icon" | "f_hat_kantotourcapred_00_bundle_icon" | "f_hat_knitted_bundle_icon" | "f_hat_korrina_00_bundle_icon" | "f_hat_lana_00_bundle_icon" | "f_hat_laprasbandana_00_bundle_icon" | "f_hat_lasecuritycorps_00_bundle_icon" | "f_hat_legendofarceus_00_bundle_icon" | "f_hat_litwickhat_0_bundle_icon" | "f_hat_loneearrings_bundle_icon" | "f_hat_lvl50cap_00_bundle_icon" | "f_hat_magikarp_bundle_icon" | "f_hat_mareaniehat_00_bundle_icon" | "f_hat_megalopunnyitems_00_bundle_icon" | "f_hat_megarayquaza_00_bundle_icon" | "f_hat_meltan_0_bundle_icon" | "f_hat_meltanearrings_0_bundle_icon" | "f_hat_mewtwo_0_bundle_icon" | "f_hat_mimikyu_bundle_icon" | "f_hat_mismagius_0_bundle_icon" | "f_hat_movie2020_00_bundle_icon" | "f_hat_munnapack_00_bundle_icon" | "f_hat_munnapack_01_bundle_icon" | "f_hat_newyear2022_00_bundle_icon" | "f_hat_newyearhat2021_00_bundle_icon" | "f_hat_newyearhat2023_00_bundle_icon" | "f_hat_nihilegoitems_00_bundle_icon" | "f_hat_noibat_00_bundle_icon" | "f_hat_obstagoonitems_00_bundle_icon" | "f_hat_oras_00_bundle_icon" | "f_hat_oricoriopink_00_bundle_icon" | "f_hat_oricoriopurple_00_bundle_icon" | "f_hat_oricoriored_00_bundle_icon" | "f_hat_oricorioyellow_00_bundle_icon" | "f_hat_partneritemsjan2024hat_00_bundle_icon" | "f_hat_phantump_00_bundle_icon" | "f_hat_pikachucap_0_bundle_icon" | "f_hat_pikachufan_bundle_icon" | "f_hat_pikachulibre_0_bundle_icon" | "f_hat_pikachupumpkinhead_00_bundle_icon" | "f_hat_pkmncap_0_bundle_icon" | "f_hat_pkmncap_1_bundle_icon" | "f_hat_pkmncap_2_bundle_icon" | "f_hat_poipole_00_bundle_icon" | "f_hat_profwillowoutfit_00_bundle_icon" | "f_hat_regiicejersies_00_bundle_icon" | "f_hat_regirockjersies_00_bundle_icon" | "f_hat_registeeljersies_00_bundle_icon" | "f_hat_ruinmaniac_0_bundle_icon" | "f_hat_sableyegoggles_00_bundle_icon" | "f_hat_samsungsummer2020_0_bundle_icon" | "f_hat_sandygasthat_00_bundle_icon" | "f_hat_shayminhat_00_bundle_icon" | "f_hat_slowpoketailshirts_00_bundle_icon" | "f_hat_snorlaxnightcap_00_bundle_icon" | "f_hat_solgaleoitems_00_bundle_icon" | "f_hat_ss_0_bundle_icon" | "f_hat_stantlerheadband_0_bundle_icon" | "f_hat_strawhat_0_bundle_icon" | "f_hat_summer2023_00_bundle_icon" | "f_hat_svcostumescarletschool_00_bundle_icon" | "f_hat_svcostumevioletschool_00_bundle_icon" | "f_hat_swshdlc2costume_00_bundle_icon" | "f_hat_swshuniformchampion_00_bundle_icon" | "f_hat_sylveonitems_00_bundle_icon" | "f_hat_tcgcollabtshirtandcap_00_bundle_icon" | "f_hat_teamaqua_0_bundle_icon" | "f_hat_teamleadercap_0_bundle_icon" | "f_hat_teamleadercap_1_bundle_icon" | "f_hat_teamleadercap_2_bundle_icon" | "f_hat_teamrocket_bundle_icon" | "f_hat_teamrocketcap_00_bundle_icon" | "f_hat_teamskull_00_bundle_icon" | "f_hat_tophat_bundle_icon" | "f_hat_ultra_bundle_icon" | "f_hat_ultrareconsquad_00_bundle_icon" | "f_hat_ultrareconsquadb_00_bundle_icon" | "f_hat_verizon2021_00_bundle_icon" | "f_hat_wcs2022winnersitems_00_bundle_icon" | "f_hat_whimsicottearmuff_00_bundle_icon" | "f_hat_willowglasses_0_bundle_icon" | "f_hat_woobatearrings_0_bundle_icon" | "f_hat_yamaskhat_00_bundle_icon" | "f_hat_yamaskmask_00_bundle_icon" | "f_hat_zubathat_00_bundle_icon" | "f_necklace_default_bundle_icon" | "f_necklace_empty_bundle_icon" | "f_necklace_heart_bundle_icon" | "f_necklace_star_bundle_icon" | "f_pants_6thanniversary_00_bundle_icon" | "f_pants_7thanniversary_00_bundle_icon" | "f_pants_acetrainerbw_0_bundle_icon" | "f_pants_animegou_00_bundle_icon" | "f_pants_backpacker_0_bundle_icon" | "f_pants_battlegirl_bundle_icon" | "f_pants_bounsweetitems_00_bundle_icon" | "f_pants_bwn_00_bundle_icon" | "f_pants_casual_0_bundle_icon" | "f_pants_casual_1_bundle_icon" | "f_pants_clay_00_bundle_icon" | "f_pants_default_bundle_icon" | "f_pants_denimfashionweek2023_00_bundle_icon" | "f_pants_dp_00_bundle_icon" | "f_pants_fashionweek2022_00_bundle_icon" | "f_pants_flabebepack_00_bundle_icon" | "f_pants_frlg_bundle_icon" | "f_pants_fw2022_00_bundle_icon" | "f_pants_geeta_00_bundle_icon" | "f_pants_genderlessskirt_00_bundle_icon" | "f_pants_giovanni_0_bundle_icon" | "f_pants_gladion_00_bundle_icon" | "f_pants_gothitelleitems_00_bundle_icon" | "f_pants_green_00_bundle_icon" | "f_pants_greencoat_00_bundle_icon" | "f_pants_guzma_00_bundle_icon" | "f_pants_gymleader_bundle_icon" | "f_pants_hala_00_bundle_icon" | "f_pants_hgss_bundle_icon" | "f_pants_ingo_00_bundle_icon" | "f_pants_loosepants_0_bundle_icon" | "f_pants_lunalaitems_00_bundle_icon" | "f_pants_luvdiscpack_0_bundle_icon" | "f_pants_lysandre_00_bundle_icon" | "f_pants_mewtwo_0_bundle_icon" | "f_pants_miniskirt_bundle_icon" | "f_pants_miniskirt_turbine_bundle_icon" | "f_pants_miniskirt_wave_bundle_icon" | "f_pants_misty_0_bundle_icon" | "f_pants_munnapack_00_bundle_icon" | "f_pants_neon_bundle_icon" | "f_pants_newyear2022_00_bundle_icon" | "f_pants_oras_00_bundle_icon" | "f_pants_pajamas2022_bundle_icon" | "f_pants_palmer_00_bundle_icon" | "f_pants_pikachufan_bundle_icon" | "f_pants_pikachulibre_0_bundle_icon" | "f_pants_profwillowoutfit_00_bundle_icon" | "f_pants_pumpkabooitems_00_bundle_icon" | "f_pants_regiicejersies_00_bundle_icon" | "f_pants_regirockjersies_00_bundle_icon" | "f_pants_registeeljersies_00_bundle_icon" | "f_pants_shorts_bundle_icon" | "f_pants_skinnyjeans_bundle_icon" | "f_pants_steven_0_bundle_icon" | "f_pants_stevenfirst_00_bundle_icon" | "f_pants_swshdlc2costume_00_bundle_icon" | "f_pants_swshuniformchampion_00_bundle_icon" | "f_pants_swshuniformdark_00_bundle_icon" | "f_pants_swshuniformdefault_00_bundle_icon" | "f_pants_swshuniformdragon_00_bundle_icon" | "f_pants_teamaqua_0_bundle_icon" | "f_pants_teamblanche_0_bundle_icon" | "f_pants_teamcandela_0_bundle_icon" | "f_pants_teammagma_0_bundle_icon" | "f_pants_teamrocket_bundle_icon" | "f_pants_teamskull_00_bundle_icon" | "f_pants_teamspark_0_bundle_icon" | "f_pants_ultra_bundle_icon" | "f_pants_veterantrainerxy_0_bundle_icon" | "f_pants_wcs2022winnersitems_00_bundle_icon" | "f_shirt_6thanniversary_00_bundle_icon" | "f_shirt_7thanniversary_00_bundle_icon" | "f_shirt_acetrainerbw_0_bundle_icon" | "f_shirt_acetrainersm_0_bundle_icon" | "f_shirt_alolacomfey_00_bundle_icon" | "f_shirt_animegou_00_bundle_icon" | "f_shirt_aseries_00_bundle_icon" | "f_shirt_backpacker_0_bundle_icon" | "f_shirt_ballguy_00_bundle_icon" | "f_shirt_battlegirl_bundle_icon" | "f_shirt_bea_00_bundle_icon" | "f_shirt_bounsweetitems_00_bundle_icon" | "f_shirt_buttondown_bundle_icon" | "f_shirt_buzzwoleitems_00_bundle_icon" | "f_shirt_bwn_00_bundle_icon" | "f_shirt_casual_0_bundle_icon" | "f_shirt_casual_1_bundle_icon" | "f_shirt_casual_2_bundle_icon" | "f_shirt_casual_3_bundle_icon" | "f_shirt_celebi_bundle_icon" | "f_shirt_chimcharonesie_00_bundle_icon" | "f_shirt_clay_00_bundle_icon" | "f_shirt_cofagrigusitems_00_bundle_icon" | "f_shirt_cosmog_00_bundle_icon" | "f_shirt_cowichansweater_0_bundle_icon" | "f_shirt_dayofdead_00_bundle_icon" | "f_shirt_default_bundle_icon" | "f_shirt_delibird_0_bundle_icon" | "f_shirt_delibirdonesie_00_bundle_icon" | "f_shirt_denimfashionweek2023_00_bundle_icon" | "f_shirt_denimjacket_0_bundle_icon" | "f_shirt_detectivepikachu_0_bundle_icon" | "f_shirt_diancie_00_bundle_icon" | "f_shirt_divingsuit_00_bundle_icon" | "f_shirt_diwali2021_00_bundle_icon" | "f_shirt_dp_00_bundle_icon" | "f_shirt_drifblim_0_bundle_icon" | "f_shirt_dusclopsmummy_00_bundle_icon" | "f_shirt_earthday_2018_bundle_icon" | "f_shirt_eeveestshirt_00_bundle_icon" | "f_shirt_eeveestshirt_01_bundle_icon" | "f_shirt_eeveestshirt_02_bundle_icon" | "f_shirt_eeveestshirt_03_bundle_icon" | "f_shirt_eeveestshirt_04_bundle_icon" | "f_shirt_eeveestshirt_05_bundle_icon" | "f_shirt_eeveestshirt_06_bundle_icon" | "f_shirt_eeveestshirt_07_bundle_icon" | "f_shirt_eeveestshirt_08_bundle_icon" | "f_shirt_elesa_00_bundle_icon" | "f_shirt_fashionweek2022_00_bundle_icon" | "f_shirt_festivaloflights_00_bundle_icon" | "f_shirt_festivaloflights_01_bundle_icon" | "f_shirt_flabebepack_00_bundle_icon" | "f_shirt_fragment_bundle_icon" | "f_shirt_frlg_bundle_icon" | "f_shirt_fw2022_00_bundle_icon" | "f_shirt_galarfarfetchditems_00_bundle_icon" | "f_shirt_galaxyoutfit_00_bundle_icon" | "f_shirt_geeta_00_bundle_icon" | "f_shirt_genderlessskirt_00_bundle_icon" | "f_shirt_gengar_0_bundle_icon" | "f_shirt_gengaronesie_00_bundle_icon" | "f_shirt_giovanni_0_bundle_icon" | "f_shirt_giratinaitems_00_bundle_icon" | "f_shirt_gladion_00_bundle_icon" | "f_shirt_gofest_2019_bundle_icon" | "f_shirt_gofest_2020_0_bundle_icon" | "f_shirt_gofest_2021_0_bundle_icon" | "f_shirt_gofest2022_00_bundle_icon" | "f_shirt_gofest2023_00_bundle_icon" | "f_shirt_gofest2024darkgray_00_bundle_icon" | "f_shirt_gofest2024gray_00_bundle_icon" | "f_shirt_gofest2024purple_00_bundle_icon" | "f_shirt_gofestglobal2023_00_bundle_icon" | "f_shirt_goteamrocketarlo_00_bundle_icon" | "f_shirt_goteamrocketcliff_00_bundle_icon" | "f_shirt_goteamrocketsierra_00_bundle_icon" | "f_shirt_gothitelleitems_00_bundle_icon" | "f_shirt_gotour2023_00_bundle_icon" | "f_shirt_gotour2024_00_bundle_icon" | "f_shirt_greedentsweater_00_bundle_icon" | "f_shirt_green_00_bundle_icon" | "f_shirt_greencoat_00_bundle_icon" | "f_shirt_gtrtshirt2022_00_bundle_icon" | "f_shirt_gtrtshirt2022_01_bundle_icon" | "f_shirt_guccitshirts_00_bundle_icon" | "f_shirt_guzma_00_bundle_icon" | "f_shirt_gymleader_bundle_icon" | "f_shirt_hala_00_bundle_icon" | "f_shirt_happi_0_bundle_icon" | "f_shirt_happi_1_bundle_icon" | "f_shirt_happi_2_bundle_icon" | "f_shirt_hgss_bundle_icon" | "f_shirt_holiday2022santacostumes_00_bundle_icon" | "f_shirt_holifestival2021black_00_bundle_icon" | "f_shirt_holifestival2021white_00_bundle_icon" | "f_shirt_hoopaunboundtshirt_00_bundle_icon" | "f_shirt_ingo_00_bundle_icon" | "f_shirt_ingress_bundle_icon" | "f_shirt_ingress_e_bundle_icon" | "f_shirt_ingress_r_bundle_icon" | "f_shirt_jessie_00_bundle_icon" | "f_shirt_jirachi_0_bundle_icon" | "f_shirt_keldeotshirt_00_bundle_icon" | "f_shirt_korrina_00_bundle_icon" | "f_shirt_ladiamondoutfit_00_bundle_icon" | "f_shirt_lana_00_bundle_icon" | "f_shirt_lapearloutfit_00_bundle_icon" | "f_shirt_lasecuritycorps_00_bundle_icon" | "f_shirt_latias_latios_bundle_icon" | "f_shirt_legendofarceus_00_bundle_icon" | "f_shirt_luvdiscpack_0_bundle_icon" | "f_shirt_lvl50_00_bundle_icon" | "f_shirt_lvl50_01_bundle_icon" | "f_shirt_lysandre_00_bundle_icon" | "f_shirt_marshadowtshirt_00_bundle_icon" | "f_shirt_megalopunnyitems_00_bundle_icon" | "f_shirt_megarayquaza_00_bundle_icon" | "f_shirt_melmetaljacket_00_bundle_icon" | "f_shirt_melmetalvest_00_bundle_icon" | "f_shirt_meloettatshirt_00_bundle_icon" | "f_shirt_meltan_0_bundle_icon" | "f_shirt_mew_bundle_icon" | "f_shirt_mewtwo_0_bundle_icon" | "f_shirt_misty_0_bundle_icon" | "f_shirt_movie2020jessiejames_00_bundle_icon" | "f_shirt_munnapack_00_bundle_icon" | "f_shirt_newyear2022_00_bundle_icon" | "f_shirt_nike2021_00_bundle_icon" | "f_shirt_ocshirt_045_bundle_icon" | "f_shirt_ocshirt_108_bundle_icon" | "f_shirt_ocshirt_129_bundle_icon" | "f_shirt_ocshirt_143_bundle_icon" | "f_shirt_oras_00_bundle_icon" | "f_shirt_pajamas2022_bundle_icon" | "f_shirt_palmer_00_bundle_icon" | "f_shirt_partneritemsjan2024hoodie_00_bundle_icon" | "f_shirt_partneritemsjan2024tshirt_00_bundle_icon" | "f_shirt_pikachufan_bundle_icon" | "f_shirt_pikachulibre_0_bundle_icon" | "f_shirt_pikachuonesie_0_bundle_icon" | "f_shirt_pinpukuhoodie_00_bundle_icon" | "f_shirt_pipluponesie_00_bundle_icon" | "f_shirt_pkmnhoodie001_0_bundle_icon" | "f_shirt_pkmnhoodie004_0_bundle_icon" | "f_shirt_pkmnhoodie007_0_bundle_icon" | "f_shirt_pkmnshirts_165_bundle_icon" | "f_shirt_pkmnshirts_188_bundle_icon" | "f_shirt_pkmnshirts_201_bundle_icon" | "f_shirt_pkmnshirts_238_bundle_icon" | "f_shirt_pkmnshirts2021_00_bundle_icon" | "f_shirt_pkmnshirts2021_01_bundle_icon" | "f_shirt_pkmnshirts2021_02_bundle_icon" | "f_shirt_poloshirt_0_bundle_icon" | "f_shirt_poloshirt_1_bundle_icon" | "f_shirt_poloshirt_2_bundle_icon" | "f_shirt_profwillowoutfit_00_bundle_icon" | "f_shirt_projectguitar_00_bundle_icon" | "f_shirt_pumpkabooitems_00_bundle_icon" | "f_shirt_regiicejersies_00_bundle_icon" | "f_shirt_regirockjersies_00_bundle_icon" | "f_shirt_registeeljersies_00_bundle_icon" | "f_shirt_reuniclusitems_00_bundle_icon" | "f_shirt_ruinmaniac_0_bundle_icon" | "f_shirt_safarizone2020_bundle_icon" | "f_shirt_samsungsummer2020_0_bundle_icon" | "f_shirt_shayminlandtshirt_00_bundle_icon" | "f_shirt_shayminskytshirt_00_bundle_icon" | "f_shirt_shinymewtshirts_00_bundle_icon" | "f_shirt_slowpokeshirts_00_bundle_icon" | "f_shirt_slowpoketailshirts_00_bundle_icon" | "f_shirt_snorlaxonesie_00_bundle_icon" | "f_shirt_spiritomb_0_bundle_icon" | "f_shirt_spring2021gulpin_00_bundle_icon" | "f_shirt_spring2021plusle_00_bundle_icon" | "f_shirt_ss_0_bundle_icon" | "f_shirt_steven_0_bundle_icon" | "f_shirt_stevenfirst_00_bundle_icon" | "f_shirt_sukajanblastoise_00_bundle_icon" | "f_shirt_sukajancharizard_00_bundle_icon" | "f_shirt_sukajanhouou_00_bundle_icon" | "f_shirt_sukajanlugia_00_bundle_icon" | "f_shirt_sukajanvenusaur_00_bundle_icon" | "f_shirt_summer2023_00_bundle_icon" | "f_shirt_sustainability2021_00_bundle_icon" | "f_shirt_svcostumescarletschool_00_bundle_icon" | "f_shirt_svcostumevioletschool_00_bundle_icon" | "f_shirt_svdlc1_00_bundle_icon" | "f_shirt_svdlc2fall_00_bundle_icon" | "f_shirt_svdlc2spring_00_bundle_icon" | "f_shirt_sweater_30_bundle_icon" | "f_shirt_sweater_instinct_bundle_icon" | "f_shirt_sweater_mystic_bundle_icon" | "f_shirt_sweater_valor_bundle_icon" | "f_shirt_swshdlc2costume_00_bundle_icon" | "f_shirt_swshdlccostume_00_bundle_icon" | "f_shirt_swshuniformchampion_00_bundle_icon" | "f_shirt_swshuniformdark_00_bundle_icon" | "f_shirt_swshuniformdefault_00_bundle_icon" | "f_shirt_swshuniformdragon_00_bundle_icon" | "f_shirt_sylveonitems_00_bundle_icon" | "f_shirt_tanktop_bundle_icon" | "f_shirt_tanktop_charizard_bundle_icon" | "f_shirt_tanktop_pikachu_bundle_icon" | "f_shirt_tcgcollabtshirtandcap_00_bundle_icon" | "f_shirt_teamaqua_0_bundle_icon" | "f_shirt_teamblanche_0_bundle_icon" | "f_shirt_teamcandela_0_bundle_icon" | "f_shirt_teammagma_0_bundle_icon" | "f_shirt_teamrocket_0_bundle_icon" | "f_shirt_teamrocket_1_bundle_icon" | "f_shirt_teamskull_00_bundle_icon" | "f_shirt_teamspark_0_bundle_icon" | "f_shirt_togepihoodie_0_bundle_icon" | "f_shirt_tracksuitsgroudon_00_bundle_icon" | "f_shirt_tracksuitskyogre_00_bundle_icon" | "f_shirt_tshirt_cycling_bundle_icon" | "f_shirt_tshirt_fest_chicago_2017_bundle_icon" | "f_shirt_tshirt_fest_chicago_2018_bundle_icon" | "f_shirt_tshirt_global_goals_2017_bundle_icon" | "f_shirt_tshirt_pikachu_bundle_icon" | "f_shirt_turtwigonesie_00_bundle_icon" | "f_shirt_ultra_bundle_icon" | "f_shirt_ultrareconsquad_00_bundle_icon" | "f_shirt_uniqlotshirts_0_bundle_icon" | "f_shirt_uniqlotshirts_1_bundle_icon" | "f_shirt_uniqlotshirts_2_bundle_icon" | "f_shirt_unwto_0_bundle_icon" | "f_shirt_valentine2023_00_bundle_icon" | "f_shirt_verizon2020sweater_0_bundle_icon" | "f_shirt_veterantrainerxy_0_bundle_icon" | "f_shirt_victinitshirts_00_bundle_icon" | "f_shirt_wcs2022_00_bundle_icon" | "f_shirt_wcs2022tshirtbulu_00_bundle_icon" | "f_shirt_wcs2022tshirtred_00_bundle_icon" | "f_shirt_wcs2022winnersitems_00_bundle_icon" | "f_shirt_wcs2023_00_bundle_icon" | "f_shirt_wcs2023promotshirt_00_bundle_icon" | "f_shirt_wcs2023promotshirt_01_00_bundle_icon" | "f_shirt_wcs2023sukajan_00_bundle_icon" | "f_shirt_wcs2023winnersitems_00_bundle_icon" | "f_shirt_wcs2024_00_bundle_icon" | "f_shirt_wcs2024championshipshirt-blue_00_bundle_icon" | "f_shirt_wcs2024championshipshirt-white_00_bundle_icon" | "f_shirt_wcsyokohama_00_bundle_icon" | "f_shirt_whitecoat_00_bundle_icon" | "f_shirt_wintersweater2023_00_bundle_icon" | "f_shirt_zoruaonesie_00_bundle_icon" | "f_shoes_6thanniversary_00_bundle_icon" | "f_shoes_acetrainerbw_0_bundle_icon" | "f_shoes_acetrainersm_0_bundle_icon" | "f_shoes_animegou_00_bundle_icon" | "f_shoes_backpacker_0_bundle_icon" | "f_shoes_battlegirl_bundle_icon" | "f_shoes_bwn_00_bundle_icon" | "f_shoes_carbink_00_bundle_icon" | "f_shoes_clay_00_bundle_icon" | "f_shoes_coolboots_00_bundle_icon" | "f_shoes_dedenneitems_00_bundle_icon" | "f_shoes_default_bundle_icon" | "f_shoes_delibird_0_bundle_icon" | "f_shoes_dp_00_bundle_icon" | "f_shoes_elesa_00_bundle_icon" | "f_shoes_empty_bundle_icon" | "f_shoes_fashionweek2022_00_bundle_icon" | "f_shoes_frlg_bundle_icon" | "f_shoes_fw2022_00_bundle_icon" | "f_shoes_geeta_00_bundle_icon" | "f_shoes_giovanni_0_bundle_icon" | "f_shoes_gladion_00_bundle_icon" | "f_shoes_gothitelleitems_00_bundle_icon" | "f_shoes_green_00_bundle_icon" | "f_shoes_gymleader_bundle_icon" | "f_shoes_hala_00_bundle_icon" | "f_shoes_hgss_bundle_icon" | "f_shoes_ingo_00_bundle_icon" | "f_shoes_korrina_00_bundle_icon" | "f_shoes_ladiamondoutfit_00_bundle_icon" | "f_shoes_lana_00_bundle_icon" | "f_shoes_lapearloutfit_00_bundle_icon" | "f_shoes_legendofarceus_00_bundle_icon" | "f_shoes_loosepants_0_bundle_icon" | "f_shoes_luvdiscpack_0_bundle_icon" | "f_shoes_lysandre_00_bundle_icon" | "f_shoes_megalopunnyitems_00_bundle_icon" | "f_shoes_melmetalshoes_00_bundle_icon" | "f_shoes_mewtwo_0_bundle_icon" | "f_shoes_misty_0_bundle_icon" | "f_shoes_newyear2022_00_bundle_icon" | "f_shoes_nike2021_00_bundle_icon" | "f_shoes_oras_00_bundle_icon" | "f_shoes_pajamas2022_bundle_icon" | "f_shoes_palmer_00_bundle_icon" | "f_shoes_pikachufan_bundle_icon" | "f_shoes_pikachulibre_0_bundle_icon" | "f_shoes_profwillowoutfit_00_bundle_icon" | "f_shoes_regiicejersies_00_bundle_icon" | "f_shoes_regirockjersies_00_bundle_icon" | "f_shoes_registeeljersies_00_bundle_icon" | "f_shoes_reuniclusitems_00_bundle_icon" | "f_shoes_ruinmaniac_0_bundle_icon" | "f_shoes_sandals_0_bundle_icon" | "f_shoes_sandals_1_bundle_icon" | "f_shoes_sandals_2_bundle_icon" | "f_shoes_solgaleoitems_00_bundle_icon" | "f_shoes_ss_0_bundle_icon" | "f_shoes_steven_0_bundle_icon" | "f_shoes_stevenfirst_00_bundle_icon" | "f_shoes_svcostumescarletschool_00_bundle_icon" | "f_shoes_svcostumevioletschool_00_bundle_icon" | "f_shoes_svdlc1_00_bundle_icon" | "f_shoes_svdlc2spring_00_bundle_icon" | "f_shoes_swshdlc2costume_00_bundle_icon" | "f_shoes_swshdlccostume_00_bundle_icon" | "f_shoes_swshuniformdark_00_bundle_icon" | "f_shoes_swshuniformdefault_00_bundle_icon" | "f_shoes_swshuniformdragon_00_bundle_icon" | "f_shoes_sylveonitems_00_bundle_icon" | "f_shoes_teamaqua_0_bundle_icon" | "f_shoes_teamblanche_0_bundle_icon" | "f_shoes_teamcandela_0_bundle_icon" | "f_shoes_teammagma_0_bundle_icon" | "f_shoes_teamrocket_0_bundle_icon" | "f_shoes_teamrocket_1_bundle_icon" | "f_shoes_teamskull_00_bundle_icon" | "f_shoes_teamspark_0_bundle_icon" | "f_shoes_ultra_bundle_icon" | "f_shoes_ultrareconsquad_00_bundle_icon" | "f_shoes_veterantrainerxy_0_bundle_icon" | "f_shoes_wcs2022winnersitems_00_bundle_icon" | "f_shoes_wcs2023winnersitems_00_bundle_icon" | "f_shoes_winterboots_00_bundle_icon" | "f_shoes_winterboots_01_bundle_icon" | "f_shoes_winterboots_02_bundle_icon" | "f_shoes_winterboots_03_bundle_icon" | "f_shoes_winterboots2023_00_bundle_icon" | "f_socks_default_bundle_icon" | "f_socks_empty_bundle_icon" | "f_socks_fw2022_00_bundle_icon" | "f_socks_hgss_bundle_icon" | "f_socks_sneakersocks_00_bundle_icon" | "f_socks_sneakersocks_01_bundle_icon" | "f_socks_sollunaitems_00_bundle_icon" | "f_socks_swshuniformdefault_00_bundle_icon" | "f_socks_swshuniformdragon_00_bundle_icon" | "f_socks_teamaqua_0_bundle_icon" | "f_socks_thighhighs_bundle_icon" | "m_backpack_alolaitemslittenbp_00_bundle_icon" | "m_backpack_alolaitemspoppliobp_00_bundle_icon" | "m_backpack_alolaitemsrowletbp_00_bundle_icon" | "m_backpack_animegou_00_bundle_icon" | "m_backpack_backpacker_0_bundle_icon" | "m_backpack_combeebackpack_00_bundle_icon" | "m_backpack_combeebackpack_01_bundle_icon" | "m_backpack_dedenneitems_00_bundle_icon" | "m_backpack_default_bundle_icon" | "m_backpack_dp_00_bundle_icon" | "m_backpack_egg-incubator_00_bundle_icon" | "m_backpack_eggbackpack_0_bundle_icon" | "m_backpack_eggbackpack_1_bundle_icon" | "m_backpack_eggbackpack_2_bundle_icon" | "m_backpack_empty_bundle_icon" | "m_backpack_frlg_bundle_icon" | "m_backpack_genesecteventitem_0_bundle_icon" | "m_backpack_gengar_0_bundle_icon" | "m_backpack_giratinaitems_00_bundle_icon" | "m_backpack_guccibackpack_00_bundle_icon" | "m_backpack_guitarcasebackpack_00_bundle_icon" | "m_backpack_hgss_bundle_icon" | "m_backpack_hououbackpack_00_bundle_icon" | "m_backpack_kakureonpouch_00_bundle_icon" | "m_backpack_komala_00_bundle_icon" | "m_backpack_longchampbp_00_bundle_icon" | "m_backpack_lunalaitems_00_bundle_icon" | "m_backpack_lunarnewyr_00_bundle_icon" | "m_backpack_mimikyubp_0_bundle_icon" | "m_backpack_movie2020_00_bundle_icon" | "m_backpack_naganadelawings_00_bundle_icon" | "m_backpack_nike2021_00_bundle_icon" | "m_backpack_pamobackpack_00_bundle_icon" | "m_backpack_pkmnhoodie001_0_bundle_icon" | "m_backpack_pkmnhoodie004_0_bundle_icon" | "m_backpack_pkmnhoodie007_0_bundle_icon" | "m_backpack_ruinmaniac_0_bundle_icon" | "m_backpack_snapcamera_00_bundle_icon" | "m_backpack_ss_0_bundle_icon" | "m_backpack_svcostumescarletschool_00_bundle_icon" | "m_backpack_svcostumevioletschool_00_bundle_icon" | "m_backpack_svdlc1_00_bundle_icon" | "m_backpack_svdlc2spring_00_bundle_icon" | "m_backpack_swshdlc2costume_00_bundle_icon" | "m_backpack_swshdlccostume_00_bundle_icon" | "m_backpack_togepibackpack_0_bundle_icon" | "m_backpack_ultra_bundle_icon" | "m_backpack_verizon2021_00_bundle_icon" | "m_backpack_zubatbp_0_bundle_icon" | "m_face_3dmask_00_bundle_icon" | "m_face_3dmask_01_bundle_icon" | "m_face_3dmask_02_bundle_icon" | "m_face_banettemask_00_bundle_icon" | "m_face_dayofthedead_00_bundle_icon" | "m_face_defaultmask_00_bundle_icon" | "m_face_empty_bundle_icon" | "m_face_facestickerghostpika_00_bundle_icon" | "m_face_facestickerpikachu_00_bundle_icon" | "m_face_facestickerpokeball_00_bundle_icon" | "m_face_festofcolors_00_bundle_icon" | "m_face_festofcolors_01_bundle_icon" | "m_face_festofcolors_02_bundle_icon" | "m_face_gracidea_00_bundle_icon" | "m_face_holiday2022santacostumes_00_bundle_icon" | "m_face_pikachumask_00_bundle_icon" | "m_face_sableyemask_00_bundle_icon" | "m_face_teamskull_00_bundle_icon" | "m_face_toxelmask_00_bundle_icon" | "m_face_verizon2020mask_0_bundle_icon" | "m_glasses_3d_bundle_icon" | "m_glasses_cutieflysleepmask_00_bundle_icon" | "m_glasses_divingsuit_00_bundle_icon" | "m_glasses_drpikachu_00_bundle_icon" | "m_glasses_empty_bundle_icon" | "m_glasses_frillishglasses_00_bundle_icon" | "m_glasses_fw2022_00_bundle_icon" | "m_glasses_gimmighoulitems_00_bundle_icon" | "m_glasses_goteamrocketarlo_00_bundle_icon" | "m_glasses_grandoakglasses_00_bundle_icon" | "m_glasses_jogger_bundle_icon" | "m_glasses_lugiaglasses_00_bundle_icon" | "m_glasses_lv40glasses_00_bundle_icon" | "m_glasses_mask_bundle_icon" | "m_glasses_newyearglasses2020_0_bundle_icon" | "m_glasses_newyearglasses2021_00_bundle_icon" | "m_glasses_newyearglasses2022_00_bundle_icon" | "m_glasses_obstagoonitems_00_bundle_icon" | "m_glasses_roundsunglasses_00_bundle_icon" | "m_glasses_teardrop_bundle_icon" | "m_glasses_thick_bundle_icon" | "m_gloves_acetrainersm_0_bundle_icon" | "m_gloves_bea_00_bundle_icon" | "m_gloves_bwn_00_bundle_icon" | "m_gloves_default_bundle_icon" | "m_gloves_delibird_0_bundle_icon" | "m_gloves_dynamaxswsh_00_bundle_icon" | "m_gloves_empty_bundle_icon" | "m_gloves_frlg_bundle_icon" | "m_gloves_geeta_00_bundle_icon" | "m_gloves_giovanni_0_bundle_icon" | "m_gloves_guzma_00_bundle_icon" | "m_gloves_gymleader_bundle_icon" | "m_gloves_hoopabangle_00_bundle_icon" | "m_gloves_jogger_bundle_icon" | "m_gloves_korrina_00_bundle_icon" | "m_gloves_lysandre_00_bundle_icon" | "m_gloves_megabangle_00_bundle_icon" | "m_gloves_megabangleblack_00_bundle_icon" | "m_gloves_megabangleblue_00_bundle_icon" | "m_gloves_megabanglered_00_bundle_icon" | "m_gloves_megabangleyellow_00_bundle_icon" | "m_gloves_obstagoonitems_00_bundle_icon" | "m_gloves_palmer_00_bundle_icon" | "m_gloves_profwillowoutfit_00_bundle_icon" | "m_gloves_stevenfirst_00_bundle_icon" | "m_gloves_svdlc2spring_00_bundle_icon" | "m_gloves_swshdlc2costume_00_bundle_icon" | "m_gloves_swshdlccostume_00_bundle_icon" | "m_gloves_swshuniformchampion_00_bundle_icon" | "m_gloves_swshuniformdark_00_bundle_icon" | "m_gloves_swshuniformdefault_00_bundle_icon" | "m_gloves_swshuniformdragon_00_bundle_icon" | "m_gloves_teamaqua_0_bundle_icon" | "m_gloves_teammagma_0_bundle_icon" | "m_gloves_teamrocket_bundle_icon" | "m_gloves_teamspark_0_bundle_icon" | "m_gloves_wintergloves2023_00_bundle_icon" | "m_group_eye" | "m_group_hair" | "m_hat_6thanniversary_00_bundle_icon" | "m_hat_acetrainersm_0_bundle_icon" | "m_hat_adventure_bundle_icon" | "m_hat_aseries_00_bundle_icon" | "m_hat_bea_00_bundle_icon" | "m_hat_bidoofhat_00_bundle_icon" | "m_hat_bounsweetitems_00_bundle_icon" | "m_hat_burmyearrings11_00_bundle_icon" | "m_hat_burmyearrings12_00_bundle_icon" | "m_hat_burmyearrings13_00_bundle_icon" | "m_hat_bwn_00_bundle_icon" | "m_hat_casket_bundle_icon" | "m_hat_cetoddlehat_00_bundle_icon" | "m_hat_clay_00_bundle_icon" | "m_hat_cofagrigusitems_00_bundle_icon" | "m_hat_cosmog_00_bundle_icon" | "m_hat_crownmoon_00_bundle_icon" | "m_hat_crownsun_00_bundle_icon" | "m_hat_cubonehat_0_bundle_icon" | "m_hat_darumakahat_00_bundle_icon" | "m_hat_dedenneitems_00_bundle_icon" | "m_hat_default_bundle_icon" | "m_hat_deino_00_bundle_icon" | "m_hat_delibird_0_bundle_icon" | "m_hat_detectivepikachu_0_bundle_icon" | "m_hat_diancie_00_bundle_icon" | "m_hat_dp_00_bundle_icon" | "m_hat_drifloon_0_bundle_icon" | "m_hat_drpikachu_00_bundle_icon" | "m_hat_dusclopsmummy_00_bundle_icon" | "m_hat_eeveecap_0_bundle_icon" | "m_hat_elesa_00_bundle_icon" | "m_hat_empty_bundle_icon" | "m_hat_fedora_bundle_icon" | "m_hat_fisher_bundle_icon" | "m_hat_flabebepack_00_bundle_icon" | "m_hat_fragment_bundle_icon" | "m_hat_frlg_bundle_icon" | "m_hat_furfrouwig_00_bundle_icon" | "m_hat_fw2022_00_bundle_icon" | "m_hat_galarfarfetchditems_00_bundle_icon" | "m_hat_genesecteventitem_0_bundle_icon" | "m_hat_gengar_0_bundle_icon" | "m_hat_gimmighoulitems_00_bundle_icon" | "m_hat_giratinaitems_00_bundle_icon" | "m_hat_gladion_00_bundle_icon" | "m_hat_gofest_pikachuvisor_0_bundle_icon" | "m_hat_goomy_00_bundle_icon" | "m_hat_greavardwig_00_bundle_icon" | "m_hat_greencoat_00_bundle_icon" | "m_hat_growlithehelmet_00_bundle_icon" | "m_hat_gtr2024eeveefanmask_00_bundle_icon" | "m_hat_gtr2024pikachufanmask_00_bundle_icon" | "m_hat_guccihat_00_bundle_icon" | "m_hat_guzma_00_bundle_icon" | "m_hat_gyaradoscap_00_bundle_icon" | "m_hat_hgss_bundle_icon" | "m_hat_holiday2022santacostumes_00_bundle_icon" | "m_hat_holidaybeanie_0_bundle_icon" | "m_hat_hoopaearmuffs_00_bundle_icon" | "m_hat_ingo_00_bundle_icon" | "m_hat_jogger_bundle_icon" | "m_hat_kantotourcapgreen_00_bundle_icon" | "m_hat_kantotourcapred_00_bundle_icon" | "m_hat_korrina_00_bundle_icon" | "m_hat_lana_00_bundle_icon" | "m_hat_laprasbandana_00_bundle_icon" | "m_hat_lasecuritycorps_00_bundle_icon" | "m_hat_legendofarceus_00_bundle_icon" | "m_hat_litwickhat_0_bundle_icon" | "m_hat_loneearrings_bundle_icon" | "m_hat_lvl50cap_00_bundle_icon" | "m_hat_magikarp_bundle_icon" | "m_hat_mareaniehat_00_bundle_icon" | "m_hat_megalopunnyitems_00_bundle_icon" | "m_hat_megarayquaza_00_bundle_icon" | "m_hat_meltan_0_bundle_icon" | "m_hat_mewtwo_0_bundle_icon" | "m_hat_mimikyu_bundle_icon" | "m_hat_mismagius_0_bundle_icon" | "m_hat_movie2020_00_bundle_icon" | "m_hat_munnapack_00_bundle_icon" | "m_hat_munnapack_01_bundle_icon" | "m_hat_newyear2022_00_bundle_icon" | "m_hat_newyearhat2021_00_bundle_icon" | "m_hat_newyearhat2023_00_bundle_icon" | "m_hat_nihilegoitems_00_bundle_icon" | "m_hat_noibat_00_bundle_icon" | "m_hat_obstagoonitems_00_bundle_icon" | "m_hat_oras_00_bundle_icon" | "m_hat_oricoriopink_00_bundle_icon" | "m_hat_oricoriopurple_00_bundle_icon" | "m_hat_oricoriored_00_bundle_icon" | "m_hat_oricorioyellow_00_bundle_icon" | "m_hat_partneritemsjan2024hat_00_bundle_icon" | "m_hat_phantump_00_bundle_icon" | "m_hat_pikachucap_0_bundle_icon" | "m_hat_pikachufan_bundle_icon" | "m_hat_pikachulibre_0_bundle_icon" | "m_hat_pikachupumpkinhead_00_bundle_icon" | "m_hat_pkmncap_0_bundle_icon" | "m_hat_pkmncap_1_bundle_icon" | "m_hat_pkmncap_2_bundle_icon" | "m_hat_poipole_00_bundle_icon" | "m_hat_profwillowoutfit_00_bundle_icon" | "m_hat_regiicejersies_00_bundle_icon" | "m_hat_regirockjersies_00_bundle_icon" | "m_hat_registeeljersies_00_bundle_icon" | "m_hat_ruinmaniac_0_bundle_icon" | "m_hat_sableyegoggles_00_bundle_icon" | "m_hat_samsungsummer2020_0_bundle_icon" | "m_hat_sandygasthat_00_bundle_icon" | "m_hat_shayminhat_00_bundle_icon" | "m_hat_slowpoketailshirts_00_bundle_icon" | "m_hat_snorlaxnightcap_00_bundle_icon" | "m_hat_solgaleoitems_00_bundle_icon" | "m_hat_ss_0_bundle_icon" | "m_hat_stantlerheadband_0_bundle_icon" | "m_hat_strawhat_0_bundle_icon" | "m_hat_summer2023_00_bundle_icon" | "m_hat_svcostumescarletschool_00_bundle_icon" | "m_hat_svcostumevioletschool_00_bundle_icon" | "m_hat_swshdlc2costume_00_bundle_icon" | "m_hat_swshuniformchampion_00_bundle_icon" | "m_hat_sylveonitems_00_bundle_icon" | "m_hat_tcgcollabtshirtandcap_00_bundle_icon" | "m_hat_teamaqua_0_bundle_icon" | "m_hat_teamleadercap_0_bundle_icon" | "m_hat_teamleadercap_1_bundle_icon" | "m_hat_teamleadercap_2_bundle_icon" | "m_hat_teamrocket_bundle_icon" | "m_hat_teamrocketcap_00_bundle_icon" | "m_hat_teamskull_00_bundle_icon" | "m_hat_tophat_bundle_icon" | "m_hat_ultra_bundle_icon" | "m_hat_ultrareconsquad_00_bundle_icon" | "m_hat_ultrareconsquadb_00_bundle_icon" | "m_hat_verizon2021_00_bundle_icon" | "m_hat_wcs2022winnersitems_00_bundle_icon" | "m_hat_whimsicottearmuff_00_bundle_icon" | "m_hat_willowglasses_0_bundle_icon" | "m_hat_woobatearrings_0_bundle_icon" | "m_hat_yamaskhat_00_bundle_icon" | "m_hat_yamaskmask_00_bundle_icon" | "m_hat_zubathat_00_bundle_icon" | "m_pants_6thanniversary_00_bundle_icon" | "m_pants_7thanniversary_00_bundle_icon" | "m_pants_acetrainerbw_0_bundle_icon" | "m_pants_acetrainersm_0_bundle_icon" | "m_pants_animegou_00_bundle_icon" | "m_pants_backpacker_0_bundle_icon" | "m_pants_bounsweetitems_00_bundle_icon" | "m_pants_brock_0_bundle_icon" | "m_pants_bwn_00_bundle_icon" | "m_pants_casual_0_bundle_icon" | "m_pants_casual_1_bundle_icon" | "m_pants_clay_00_bundle_icon" | "m_pants_default_bundle_icon" | "m_pants_denimfashionweek2023_00_bundle_icon" | "m_pants_dp_00_bundle_icon" | "m_pants_elesa_00_bundle_icon" | "m_pants_fashionweek2022_00_bundle_icon" | "m_pants_fisher_bundle_icon" | "m_pants_flabebepack_00_bundle_icon" | "m_pants_frlg_bundle_icon" | "m_pants_fw2022_00_bundle_icon" | "m_pants_geeta_00_bundle_icon" | "m_pants_genderlessskirt_00_bundle_icon" | "m_pants_giovanni_0_bundle_icon" | "m_pants_gladion_00_bundle_icon" | "m_pants_gothitelleitems_00_bundle_icon" | "m_pants_green_00_bundle_icon" | "m_pants_greencoat_00_bundle_icon" | "m_pants_guzma_00_bundle_icon" | "m_pants_gymleader_bundle_icon" | "m_pants_hala_00_bundle_icon" | "m_pants_hgss_bundle_icon" | "m_pants_ingo_00_bundle_icon" | "m_pants_jogger_bundle_icon" | "m_pants_korrina_00_bundle_icon" | "m_pants_loosepants_0_bundle_icon" | "m_pants_lunalaitems_00_bundle_icon" | "m_pants_luvdiscpack_0_bundle_icon" | "m_pants_lysandre_00_bundle_icon" | "m_pants_mewtwo_0_bundle_icon" | "m_pants_munnapack_00_bundle_icon" | "m_pants_newyear2022_00_bundle_icon" | "m_pants_oras_00_bundle_icon" | "m_pants_pajamas2022_bundle_icon" | "m_pants_palmer_00_bundle_icon" | "m_pants_pikachufan_bundle_icon" | "m_pants_pikachulibre_0_bundle_icon" | "m_pants_profwillowoutfit_00_bundle_icon" | "m_pants_pumpkabooitems_00_bundle_icon" | "m_pants_regiicejersies_00_bundle_icon" | "m_pants_regirockjersies_00_bundle_icon" | "m_pants_registeeljersies_00_bundle_icon" | "m_pants_skinnyjeans_bundle_icon" | "m_pants_ss_0_bundle_icon" | "m_pants_steven_0_bundle_icon" | "m_pants_stevenfirst_00_bundle_icon" | "m_pants_sweats_bundle_icon" | "m_pants_swshdlc2costume_00_bundle_icon" | "m_pants_swshuniformchampion_00_bundle_icon" | "m_pants_swshuniformdark_00_bundle_icon" | "m_pants_swshuniformdefault_00_bundle_icon" | "m_pants_swshuniformdragon_00_bundle_icon" | "m_pants_teamaqua_0_bundle_icon" | "m_pants_teamblanche_0_bundle_icon" | "m_pants_teamcandela_0_bundle_icon" | "m_pants_teammagma_0_bundle_icon" | "m_pants_teamrocket_bundle_icon" | "m_pants_teamskull_00_bundle_icon" | "m_pants_teamspark_0_bundle_icon" | "m_pants_ultra_bundle_icon" | "m_pants_veterantrainerxy_0_bundle_icon" | "m_pants_wcs2022winnersitems_00_bundle_icon" | "m_shirt_6thanniversary_00_bundle_icon" | "m_shirt_7thanniversary_00_bundle_icon" | "m_shirt_acetrainerbw_0_bundle_icon" | "m_shirt_acetrainersm_0_bundle_icon" | "m_shirt_alolacomfey_00_bundle_icon" | "m_shirt_animegou_00_bundle_icon" | "m_shirt_aseries_00_bundle_icon" | "m_shirt_backpacker_0_bundle_icon" | "m_shirt_ballguy_00_bundle_icon" | "m_shirt_bea_00_bundle_icon" | "m_shirt_blazer_bundle_icon" | "m_shirt_bounsweetitems_00_bundle_icon" | "m_shirt_brock_0_bundle_icon" | "m_shirt_buzzwoleitems_00_bundle_icon" | "m_shirt_bwn_00_bundle_icon" | "m_shirt_casual_0_bundle_icon" | "m_shirt_casual_1_bundle_icon" | "m_shirt_casual_2_bundle_icon" | "m_shirt_casual_3_bundle_icon" | "m_shirt_celebi_bundle_icon" | "m_shirt_chimcharonesie_00_bundle_icon" | "m_shirt_clay_00_bundle_icon" | "m_shirt_cofagrigusitems_00_bundle_icon" | "m_shirt_cosmog_00_bundle_icon" | "m_shirt_cowichansweater_0_bundle_icon" | "m_shirt_dayofdead_00_bundle_icon" | "m_shirt_default_0_bundle_icon" | "m_shirt_default_1_bundle_icon" | "m_shirt_default_2_bundle_icon" | "m_shirt_default_3_bundle_icon" | "m_shirt_delibird_0_bundle_icon" | "m_shirt_delibirdonesie_00_bundle_icon" | "m_shirt_denimfashionweek2023_00_bundle_icon" | "m_shirt_denimjacket_0_bundle_icon" | "m_shirt_detectivepikachu_0_bundle_icon" | "m_shirt_diancie_00_bundle_icon" | "m_shirt_divingsuit_00_bundle_icon" | "m_shirt_diwali2021_00_bundle_icon" | "m_shirt_dp_00_bundle_icon" | "m_shirt_drifblim_0_bundle_icon" | "m_shirt_dusclopsmummy_00_bundle_icon" | "m_shirt_earthday_2018_bundle_icon" | "m_shirt_eeveestshirt_00_bundle_icon" | "m_shirt_eeveestshirt_01_bundle_icon" | "m_shirt_eeveestshirt_02_bundle_icon" | "m_shirt_eeveestshirt_03_bundle_icon" | "m_shirt_eeveestshirt_04_bundle_icon" | "m_shirt_eeveestshirt_05_bundle_icon" | "m_shirt_eeveestshirt_06_bundle_icon" | "m_shirt_eeveestshirt_07_bundle_icon" | "m_shirt_eeveestshirt_08_bundle_icon" | "m_shirt_elesa_00_bundle_icon" | "m_shirt_fashionweek2022_00_bundle_icon" | "m_shirt_festivaloflights_00_bundle_icon" | "m_shirt_festivaloflights_01_bundle_icon" | "m_shirt_fisher_bundle_icon" | "m_shirt_flabebepack_00_bundle_icon" | "m_shirt_fragment_bundle_icon" | "m_shirt_frlg_bundle_icon" | "m_shirt_fw2022_00_bundle_icon" | "m_shirt_galarfarfetchditems_00_bundle_icon" | "m_shirt_galaxyoutfit_00_bundle_icon" | "m_shirt_geeta_00_bundle_icon" | "m_shirt_genderlessskirt_00_bundle_icon" | "m_shirt_gengar_0_bundle_icon" | "m_shirt_gengaronesie_00_bundle_icon" | "m_shirt_giovanni_0_bundle_icon" | "m_shirt_giratinaitems_00_bundle_icon" | "m_shirt_gladion_00_bundle_icon" | "m_shirt_gofest_2019_bundle_icon" | "m_shirt_gofest_2020_0_bundle_icon" | "m_shirt_gofest_2021_0_bundle_icon" | "m_shirt_gofest2022_00_bundle_icon" | "m_shirt_gofest2023_00_bundle_icon" | "m_shirt_gofest2024darkgray_00_bundle_icon" | "m_shirt_gofest2024gray_00_bundle_icon" | "m_shirt_gofest2024purple_00_bundle_icon" | "m_shirt_gofestglobal2023_00_bundle_icon" | "m_shirt_goteamrocketarlo_00_bundle_icon" | "m_shirt_goteamrocketcliff_00_bundle_icon" | "m_shirt_goteamrocketsierra_00_bundle_icon" | "m_shirt_gothitelleitems_00_bundle_icon" | "m_shirt_gotour2023_00_bundle_icon" | "m_shirt_gotour2024_00_bundle_icon" | "m_shirt_greedentsweater_00_bundle_icon" | "m_shirt_green_00_bundle_icon" | "m_shirt_greencoat_00_bundle_icon" | "m_shirt_gtrtshirt2022_00_bundle_icon" | "m_shirt_gtrtshirt2022_01_bundle_icon" | "m_shirt_guccitshirts_00_bundle_icon" | "m_shirt_guzma_00_bundle_icon" | "m_shirt_gymleader_bundle_icon" | "m_shirt_hala_00_bundle_icon" | "m_shirt_happi_0_bundle_icon" | "m_shirt_happi_1_bundle_icon" | "m_shirt_happi_2_bundle_icon" | "m_shirt_hgss_bundle_icon" | "m_shirt_holiday2022santacostumes_00_bundle_icon" | "m_shirt_holifestival2021black_00_bundle_icon" | "m_shirt_holifestival2021white_00_bundle_icon" | "m_shirt_hoopaunboundtshirt_00_bundle_icon" | "m_shirt_ingo_00_bundle_icon" | "m_shirt_ingress_bundle_icon" | "m_shirt_ingress_e_bundle_icon" | "m_shirt_ingress_r_bundle_icon" | "m_shirt_james_00_bundle_icon" | "m_shirt_jirachi_0_bundle_icon" | "m_shirt_jogger_bundle_icon" | "m_shirt_keldeotshirt_00_bundle_icon" | "m_shirt_korrina_00_bundle_icon" | "m_shirt_ladiamondoutfit_00_bundle_icon" | "m_shirt_lana_00_bundle_icon" | "m_shirt_lapearloutfit_00_bundle_icon" | "m_shirt_lasecuritycorps_00_bundle_icon" | "m_shirt_latias_latios_bundle_icon" | "m_shirt_legendofarceus_00_bundle_icon" | "m_shirt_longsleeves_charizard_bundle_icon" | "m_shirt_longsleeves_pikachu_bundle_icon" | "m_shirt_luvdiscpack_0_bundle_icon" | "m_shirt_lvl50_00_bundle_icon" | "m_shirt_lvl50_01_bundle_icon" | "m_shirt_lysandre_00_bundle_icon" | "m_shirt_marshadowtshirt_00_bundle_icon" | "m_shirt_megalopunnyitems_00_bundle_icon" | "m_shirt_megarayquaza_00_bundle_icon" | "m_shirt_melmetaljacket_00_bundle_icon" | "m_shirt_melmetalvest_00_bundle_icon" | "m_shirt_meloettatshirt_00_bundle_icon" | "m_shirt_meltan_0_bundle_icon" | "m_shirt_mew_bundle_icon" | "m_shirt_mewtwo_0_bundle_icon" | "m_shirt_movie2020jessiejames_00_bundle_icon" | "m_shirt_munnapack_00_bundle_icon" | "m_shirt_newyear2022_00_bundle_icon" | "m_shirt_nike2021_00_bundle_icon" | "m_shirt_ocshirt_045_bundle_icon" | "m_shirt_ocshirt_108_bundle_icon" | "m_shirt_ocshirt_129_bundle_icon" | "m_shirt_ocshirt_143_bundle_icon" | "m_shirt_oras_00_bundle_icon" | "m_shirt_pajamas2022_bundle_icon" | "m_shirt_palmer_00_bundle_icon" | "m_shirt_partneritemsjan2024hoodie_00_bundle_icon" | "m_shirt_partneritemsjan2024tshirt_00_bundle_icon" | "m_shirt_pikachufan_bundle_icon" | "m_shirt_pikachulibre_0_bundle_icon" | "m_shirt_pikachuonesie_0_bundle_icon" | "m_shirt_pinpukuhoodie_00_bundle_icon" | "m_shirt_pipluponesie_00_bundle_icon" | "m_shirt_pkmnhoodie001_0_bundle_icon" | "m_shirt_pkmnhoodie004_0_bundle_icon" | "m_shirt_pkmnhoodie007_0_bundle_icon" | "m_shirt_pkmnshirts_165_bundle_icon" | "m_shirt_pkmnshirts_188_bundle_icon" | "m_shirt_pkmnshirts_201_bundle_icon" | "m_shirt_pkmnshirts_238_bundle_icon" | "m_shirt_pkmnshirts2021_00_bundle_icon" | "m_shirt_pkmnshirts2021_01_bundle_icon" | "m_shirt_pkmnshirts2021_02_bundle_icon" | "m_shirt_poloshirt_0_bundle_icon" | "m_shirt_poloshirt_1_bundle_icon" | "m_shirt_poloshirt_2_bundle_icon" | "m_shirt_profwillowoutfit_00_bundle_icon" | "m_shirt_projectguitar_00_bundle_icon" | "m_shirt_pumpkabooitems_00_bundle_icon" | "m_shirt_regiicejersies_00_bundle_icon" | "m_shirt_regirockjersies_00_bundle_icon" | "m_shirt_registeeljersies_00_bundle_icon" | "m_shirt_reuniclusitems_00_bundle_icon" | "m_shirt_ruinmaniac_0_bundle_icon" | "m_shirt_safarizone2020_bundle_icon" | "m_shirt_samsungsummer2020_0_bundle_icon" | "m_shirt_shayminlandtshirt_00_bundle_icon" | "m_shirt_shayminskytshirt_00_bundle_icon" | "m_shirt_shinymewtshirts_00_bundle_icon" | "m_shirt_slowpokeshirts_00_bundle_icon" | "m_shirt_slowpoketailshirts_00_bundle_icon" | "m_shirt_snorlaxonesie_00_bundle_icon" | "m_shirt_spiritomb_0_bundle_icon" | "m_shirt_spring2021gulpin_00_bundle_icon" | "m_shirt_spring2021plusle_00_bundle_icon" | "m_shirt_ss_0_bundle_icon" | "m_shirt_steven_0_bundle_icon" | "m_shirt_stevenfirst_00_bundle_icon" | "m_shirt_sukajanblastoise_00_bundle_icon" | "m_shirt_sukajancharizard_00_bundle_icon" | "m_shirt_sukajanhouou_00_bundle_icon" | "m_shirt_sukajanlugia_00_bundle_icon" | "m_shirt_sukajanvenusaur_00_bundle_icon" | "m_shirt_summer2023_00_bundle_icon" | "m_shirt_sustainability2021_00_bundle_icon" | "m_shirt_svcostumescarletschool_00_bundle_icon" | "m_shirt_svcostumevioletschool_00_bundle_icon" | "m_shirt_svdlc1_00_bundle_icon" | "m_shirt_svdlc2fall_00_bundle_icon" | "m_shirt_svdlc2spring_00_bundle_icon" | "m_shirt_sweatshirt_sporty_bundle_icon" | "m_shirt_sweatshirt_streak_bundle_icon" | "m_shirt_swshdlc2costume_00_bundle_icon" | "m_shirt_swshdlccostume_00_bundle_icon" | "m_shirt_swshuniformchampion_00_bundle_icon" | "m_shirt_swshuniformdark_00_bundle_icon" | "m_shirt_swshuniformdefault_00_bundle_icon" | "m_shirt_swshuniformdragon_00_bundle_icon" | "m_shirt_sylveonitems_00_bundle_icon" | "m_shirt_tcgcollabtshirtandcap_00_bundle_icon" | "m_shirt_teamaqua_0_bundle_icon" | "m_shirt_teamblanche_0_bundle_icon" | "m_shirt_teamcandela_0_bundle_icon" | "m_shirt_teammagma_0_bundle_icon" | "m_shirt_teamrocket_0_bundle_icon" | "m_shirt_teamrocket_1_bundle_icon" | "m_shirt_teamskull_00_bundle_icon" | "m_shirt_teamspark_0_bundle_icon" | "m_shirt_togepihoodie_0_bundle_icon" | "m_shirt_tracksuitsgroudon_00_bundle_icon" | "m_shirt_tracksuitskyogre_00_bundle_icon" | "m_shirt_tshirt_fest_chicago_2017_bundle_icon" | "m_shirt_tshirt_fest_chicago_2018_bundle_icon" | "m_shirt_tshirt_geometric_bundle_icon" | "m_shirt_tshirt_global_goals_2017_bundle_icon" | "m_shirt_tshirt_instinct_bundle_icon" | "m_shirt_tshirt_mystic_bundle_icon" | "m_shirt_tshirt_valor_bundle_icon" | "m_shirt_turtleneck_30_bundle_icon" | "m_shirt_turtwigonesie_00_bundle_icon" | "m_shirt_ultra_bundle_icon" | "m_shirt_ultrareconsquad_00_bundle_icon" | "m_shirt_uniqlotshirts_0_bundle_icon" | "m_shirt_uniqlotshirts_1_bundle_icon" | "m_shirt_uniqlotshirts_2_bundle_icon" | "m_shirt_unwto_0_bundle_icon" | "m_shirt_valentine2023_00_bundle_icon" | "m_shirt_verizon2020sweater_0_bundle_icon" | "m_shirt_veterantrainerxy_0_bundle_icon" | "m_shirt_victinitshirts_00_bundle_icon" | "m_shirt_wcs2022_00_bundle_icon" | "m_shirt_wcs2022tshirtbulu_00_bundle_icon" | "m_shirt_wcs2022tshirtred_00_bundle_icon" | "m_shirt_wcs2022winnersitems_00_bundle_icon" | "m_shirt_wcs2023_00_bundle_icon" | "m_shirt_wcs2023promotshirt_00_bundle_icon" | "m_shirt_wcs2023promotshirt_01_00_bundle_icon" | "m_shirt_wcs2023sukajan_00_bundle_icon" | "m_shirt_wcs2023winnersitems_00_bundle_icon" | "m_shirt_wcs2024_00_bundle_icon" | "m_shirt_wcs2024championshipshirt-blue_00_bundle_icon" | "m_shirt_wcs2024championshipshirt-white_00_bundle_icon" | "m_shirt_wcsyokohama_00_bundle_icon" | "m_shirt_whitecoat_00_bundle_icon" | "m_shirt_wintersweater2023_00_bundle_icon" | "m_shirt_zoruaonesie_00_bundle_icon" | "m_shoes_6thanniversary_00_bundle_icon" | "m_shoes_acetrainerbw_0_bundle_icon" | "m_shoes_acetrainersm_0_bundle_icon" | "m_shoes_animegou_00_bundle_icon" | "m_shoes_backpacker_0_bundle_icon" | "m_shoes_brock_0_bundle_icon" | "m_shoes_bwn_00_bundle_icon" | "m_shoes_carbink_00_bundle_icon" | "m_shoes_clay_00_bundle_icon" | "m_shoes_coolboots_00_bundle_icon" | "m_shoes_dedenneitems_00_bundle_icon" | "m_shoes_default_bundle_icon" | "m_shoes_delibird_0_bundle_icon" | "m_shoes_dp_00_bundle_icon" | "m_shoes_elesa_00_bundle_icon" | "m_shoes_empty_bundle_icon" | "m_shoes_fashionweek2022_00_bundle_icon" | "m_shoes_fisher_bundle_icon" | "m_shoes_frlg_bundle_icon" | "m_shoes_fw2022_00_bundle_icon" | "m_shoes_geeta_00_bundle_icon" | "m_shoes_giovanni_0_bundle_icon" | "m_shoes_gladion_00_bundle_icon" | "m_shoes_gothitelleitems_00_bundle_icon" | "m_shoes_green_00_bundle_icon" | "m_shoes_gymleader_bundle_icon" | "m_shoes_hala_00_bundle_icon" | "m_shoes_hgss_bundle_icon" | "m_shoes_ingo_00_bundle_icon" | "m_shoes_jogger_bundle_icon" | "m_shoes_korrina_00_bundle_icon" | "m_shoes_ladiamondoutfit_00_bundle_icon" | "m_shoes_lana_00_bundle_icon" | "m_shoes_lapearloutfit_00_bundle_icon" | "m_shoes_legendofarceus_00_bundle_icon" | "m_shoes_loosepants_0_bundle_icon" | "m_shoes_luvdiscpack_0_bundle_icon" | "m_shoes_lysandre_00_bundle_icon" | "m_shoes_megalopunnyitems_00_bundle_icon" | "m_shoes_melmetalshoes_00_bundle_icon" | "m_shoes_mewtwo_0_bundle_icon" | "m_shoes_newyear2022_00_bundle_icon" | "m_shoes_nike2021_00_bundle_icon" | "m_shoes_oras_00_bundle_icon" | "m_shoes_pajamas2022_bundle_icon" | "m_shoes_palmer_00_bundle_icon" | "m_shoes_pikachufan_bundle_icon" | "m_shoes_pikachulibre_0_bundle_icon" | "m_shoes_profwillowoutfit_00_bundle_icon" | "m_shoes_regiicejersies_00_bundle_icon" | "m_shoes_regirockjersies_00_bundle_icon" | "m_shoes_registeeljersies_00_bundle_icon" | "m_shoes_reuniclusitems_00_bundle_icon" | "m_shoes_ruinmaniac_0_bundle_icon" | "m_shoes_sandals_0_bundle_icon" | "m_shoes_sandals_1_bundle_icon" | "m_shoes_sandals_2_bundle_icon" | "m_shoes_solgaleoitems_00_bundle_icon" | "m_shoes_ss_0_bundle_icon" | "m_shoes_steven_0_bundle_icon" | "m_shoes_stevenfirst_00_bundle_icon" | "m_shoes_svcostumescarletschool_00_bundle_icon" | "m_shoes_svcostumevioletschool_00_bundle_icon" | "m_shoes_svdlc1_00_bundle_icon" | "m_shoes_svdlc2spring_00_bundle_icon" | "m_shoes_swshdlc2costume_00_bundle_icon" | "m_shoes_swshdlccostume_00_bundle_icon" | "m_shoes_swshuniformdark_00_bundle_icon" | "m_shoes_swshuniformdefault_00_bundle_icon" | "m_shoes_swshuniformdragon_00_bundle_icon" | "m_shoes_sylveonitems_00_bundle_icon" | "m_shoes_teamaqua_0_bundle_icon" | "m_shoes_teamblanche_0_bundle_icon" | "m_shoes_teamcandela_0_bundle_icon" | "m_shoes_teammagma_0_bundle_icon" | "m_shoes_teamrocket_0_bundle_icon" | "m_shoes_teamrocket_1_bundle_icon" | "m_shoes_teamskull_00_bundle_icon" | "m_shoes_teamspark_0_bundle_icon" | "m_shoes_ultra_bundle_icon" | "m_shoes_ultrareconsquad_00_bundle_icon" | "m_shoes_veterantrainerxy_0_bundle_icon" | "m_shoes_wcs2022winnersitems_00_bundle_icon" | "m_shoes_wcs2023winnersitems_00_bundle_icon" | "m_shoes_winterboots_00_bundle_icon" | "m_shoes_winterboots_01_bundle_icon" | "m_shoes_winterboots_02_bundle_icon" | "m_shoes_winterboots_03_bundle_icon" | "m_shoes_winterboots2023_00_bundle_icon" | "m_socks_default_bundle_icon" | "m_socks_empty_bundle_icon" | "m_socks_fw2022_00_bundle_icon" | "m_socks_sneakersocks_00_bundle_icon" | "m_socks_sneakersocks_01_bundle_icon" | "m_socks_sollunaitems_00_bundle_icon" | "m_socks_swshuniformdefault_00_bundle_icon" | "m_socks_swshuniformdragon_00_bundle_icon" | "pose_01" | "pose_02" | "pose_03" | "pose_04" | "pose_05" | "pose_06" | "pose_07" | "pose_08" | "pose_09" | "pose_10" | "pose_11" | "pose_12" | "pose_13" | "pose_14" | "pose_15" | "pose_16" | "pose_17" | "pose_18" | "pose_19" | "pose_20" | "pose_21" | "pose_22" | "pose_23" | "pose_24" | "pose_25" | "pose_26" | "pose_27" | "pose_28" | "pose_29" | "pose_30" | "pose_31" | "pose_32" | "pose_33" | "pose_34" | "pose_35" | "pose_36" | "pose_37" | "pose_38" | "pose_39" | "pose_40" | "pose_41" | "pose_43" | "pose_44" | "pose_45" | "pose_46" | "pose_47" | "pose_48" | "pose_49" | "pose_50" | "pose_51" | "pose_52" | "pose_53" | "pose_54" | "pose_55" | "pose_56" | "pose_57" | "pose_58" | "pose_59" | "pose_60" | "pose_61" | "pose_62" | "pose_63" | "pose_64" | "pose_empty";
		setNames?: Array<"6thanniversary" | "7thanniversary" | "acetrainerbw" | "acetrainersm" | "animegou" | "backpacker" | "battlegirl_0" | "bea" | "bounsweetitems" | "boxingoutfit" | "brock" | "bwn" | "casual_0" | "casual_1" | "clay" | "cofagrigus" | "cosmog" | "dayofthedead" | "dedenneitems" | "delibird" | "detectivepikachu" | "divingsuit" | "dp" | "dusclopsmummy" | "elesa" | "fashionWeek2022" | "fashionweek2023" | "fisher_0" | "flabebepack" | "fragment_0" | "frlg_0" | "fw2022" | "galarfarfetchditems" | "geeta" | "genderlessskirt" | "genesecteventitem" | "gengar_0" | "gimmighoulitems" | "giovanni" | "giratinaitems" | "gladion" | "goteamrocketarlo" | "gothitelleitems" | "green" | "greencoat" | "guzma" | "gymleader_0" | "gymleader_1" | "gymleader_2" | "hala" | "hgss_0" | "holiday2022santacostumes" | "hoopa" | "ingo" | "jogger_0" | "korrina" | "ladiamondoutfit" | "lapearloutfit" | "lasecuritycorps" | "legendofarceus" | "lunalaitems" | "luvdiscpack" | "lvl50_0" | "lvl50_1" | "lysandre" | "megalopunnyitems" | "megarayquaza" | "melmetal_jacket" | "melmetal_vest" | "meltan" | "mewtwo" | "mimikyu" | "misty" | "movie2020" | "munnapack_0" | "munnapack_1" | "newyear" | "obstagoonitems" | "oras" | "pajamas2022_0" | "pajamas2022_1" | "palmer" | "pikachufan_0" | "pikachulibre" | "pkmnhoodie001" | "pkmnhoodie004" | "pkmnhoodie007" | "profwillowoutfit" | "pumpkabooitems" | "regiicejersies" | "regirockjersies" | "registeeljersies" | "reuniclusitems" | "ruinmaniac" | "shaymin_land" | "shaymin_sky" | "slowpoketailshirts" | "solgaleoitems" | "ss" | "steven" | "stevenfirst" | "svcostumescarletschool" | "svcostumevioletschool" | "svdlc" | "svdlc2fall" | "svdlc2spring" | "swshdlc2costume" | "swshdlccostume" | "swshuniformchampion" | "swshuniformdark" | "swshuniformdefault" | "swshuniformdragon" | "sylveonitems" | "tcgcollabtshirtandcap" | "teamaqua" | "teamblanche" | "teamcandela" | "teammagma" | "teamrocket_0" | "teamrocket_1" | "teamskull" | "teamspark" | "ultra_0" | "ultraReconSquad" | "ultraReconSquadB" | "veterantrainerxy" | "wcs2022winnersitems" | "winter2023">;
		setPrimeItem?: true;
		slot: [
			"BACKPACK" | "BELT" | "EYES" | "FACE" | "GLASSES" | "GLOVES" | "HAIR" | "HAT" | "NECKLACE" | "PANTS" | "POSE" | "SHIRT" | "SHOES" | "SKIN" | "SOCKS"
		];
		sortOrder: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100 | 101 | 102 | 103 | 104 | 1105 | 1106 | 1107 | 1108 | 1109 | 1110 | 1111 | 1112 | 1113 | 1114 | 1115 | 1116 | 1117 | 1118 | 1119 | 1120 | 1121 | 1122 | 1123 | 1124 | 1125 | 1126 | 1127 | 1128 | 100001 | 100002 | 100003 | 100004 | 100005 | 100006 | 100007 | 100008 | 100009 | 100010 | 100011 | 100012 | 100013 | 100014 | 100015 | 100016 | 100017 | 100018 | 100019 | 100020 | 100021 | 100022 | 100023 | 100024 | 100025 | 100026 | 100027 | 100028 | 100029 | 100030 | 100031 | 100032 | 100033 | 100034 | 100035 | 100036 | 100037 | 100038 | 100039 | 100040 | 100041 | 100042 | 100043 | 100044 | 100045 | 100046 | 100047 | 100048 | 100049 | 100050 | 100051 | 100052 | 100053 | 100054 | 100055 | 100056 | 100057 | 100058 | 100059 | 100060 | 100061 | 100062 | 100063 | 100064 | 100065 | 100066 | 100067 | 100068 | 100069 | 100070 | 100071 | 100072 | 100073 | 100074 | 100075 | 100076 | 100077 | 100078 | 100079 | 100080 | 100081 | 100082 | 100083 | 100084 | 100085 | 100086 | 100087 | 100088 | 100089 | 100090 | 100091 | 100092 | 100093 | 100094 | 100095 | 100096 | 100097 | 100098 | 100099 | 100100 | 100101 | 100102 | 100103 | 100104 | 100105 | 100106 | 100107 | 100108 | 100109 | 100110 | 100111 | 100112 | 100113 | 100114 | 100115 | 100116 | 100117 | 100118 | 100119 | 100120 | 100121 | 100122 | 100123 | 100124 | 100125 | 100126 | 100127 | 100128 | 100129 | 100130 | 100131 | 100132 | 100133 | 100134 | 100135 | 100136 | 100137 | 100138 | 100139 | 100140 | 100141 | 100142 | 100143 | 100144 | 100145 | 100146 | 100147 | 100148 | 100149 | 100150 | 100151 | 100152 | 100153 | 100154 | 100155 | 100156 | 100157 | 100158 | 100159 | 100160 | 100161 | 100162 | 100163 | 100164 | 100165 | 100166 | 100167 | 100168 | 100169 | 100170 | 100171 | 100172 | 100173 | 100174 | 100175 | 100176 | 100177 | 100178 | 100179 | 100180 | 100181 | 100182 | 100183 | 100184 | 100185 | 100186 | 100187 | 100188 | 100189 | 100190 | 100191 | 100192 | 100193 | 100194 | 100195 | 100196 | 100197 | 100198 | 100199 | 100200 | 100201 | 100202 | 100203 | 100204 | 100205 | 100206 | 100207 | 100208 | 100209 | 100210 | 100211 | 100212 | 100213 | 100214 | 100215 | 100216 | 100217 | 100218 | 100219 | 100220 | 100221 | 100222 | 100223 | 100224 | 100225 | 100226 | 100227 | 100228 | 100229 | 100230 | 100231 | 100232 | 100233 | 100234 | 100235 | 100236 | 100237 | 100238 | 100239 | 100240 | 100241 | 100242 | 100243 | 100244 | 100245 | 100246 | 100247 | 100248 | 100249 | 100250 | 100251 | 100252 | 100253 | 100254 | 100255 | 100256 | 100257 | 100258 | 100259 | 100260 | 100261 | 100262 | 100263 | 100264 | 100265 | 100266 | 100267 | 100268 | 100269 | 100270 | 100271 | 100272 | 100273 | 100274 | 100275 | 100276 | 100277 | 100278 | 100279 | 100280 | 100281 | 100282 | 100283 | 100284 | 100285 | 100286 | 100287 | 100288 | 100289 | 100290 | 100291 | 100292 | 100293 | 100294 | 100295 | 100296 | 100297 | 100298 | 100299 | 100300 | 100301 | 100302 | 100303 | 100304 | 100305 | 100306 | 100307 | 100308 | 100309 | 100310 | 100311 | 100312 | 100313 | 100314 | 100315 | 100316 | 100317 | 100318 | 100319 | 100320 | 100321 | 100322 | 100323 | 100324 | 100325 | 100326 | 100327 | 100328 | 100329 | 100330 | 100331 | 100332 | 100333 | 100334 | 100335 | 100336 | 100337 | 100338 | 100339 | 100340 | 100341 | 100342 | 100343 | 100344 | 100345 | 100346 | 100347 | 100348 | 100349 | 100350 | 100351 | 100352 | 100353 | 100354 | 100355 | 100356 | 100357 | 100358 | 100359 | 100360 | 100361 | 100362 | 100363 | 100364 | 100365 | 100366 | 100367 | 100368 | 100369 | 100370 | 100371 | 100372 | 100373 | 100374 | 100375 | 100376 | 100377 | 100378 | 100379 | 100380 | 100381 | 100382 | 100383 | 100384 | 100385 | 100386 | 100387 | 100388 | 100389 | 100390 | 100391 | 100392 | 100393 | 100394 | 100395 | 100396 | 100397 | 100398 | 100399 | 100400 | 100401 | 100402 | 100403 | 100404 | 100405 | 100406 | 100407 | 100408 | 100409 | 100410 | 100411 | 100412 | 100413 | 100414 | 100415 | 100416 | 100417 | 100418 | 100419 | 100420 | 100421 | 100422 | 100423 | 100424 | 100425 | 100426 | 100427 | 100428 | 100429 | 100430 | 100431 | 100432 | 100433 | 100434 | 100435 | 100436 | 100437 | 100438 | 100439 | 100440 | 100441 | 100442 | 100443 | 100444 | 100445 | 100446 | 100447 | 100448 | 100449 | 100450 | 100451 | 100452 | 100453 | 100454 | 100455 | 100456 | 100457 | 100458 | 100459 | 100460 | 100461 | 100462 | 100463 | 100464 | 100465 | 100466 | 100467 | 100468 | 100469 | 100470 | 100471 | 100472 | 100473 | 100474 | 100475 | 100476 | 100477 | 100478 | 100479 | 100480 | 100481 | 100482 | 100483 | 100484 | 100485 | 100486 | 100487 | 100488 | 100489 | 100490 | 100491 | 100492 | 100493 | 100494 | 100495 | 100496 | 100497 | 100498 | 100499 | 100500 | 100501 | 100502 | 100503 | 100504 | 100505 | 100506 | 100507 | 100508 | 100509 | 100510 | 100511 | 100512 | 100513 | 100514 | 100515 | 100516 | 100517 | 100518 | 100519 | 100520 | 100521 | 100522 | 100523 | 100524 | 100525 | 100526 | 100527 | 100528 | 100529 | 100530 | 100531 | 100532 | 100533 | 100534 | 100535 | 100536 | 100537 | 100538 | 100539 | 100540 | 100541 | 100542 | 100543 | 100544 | 100545 | 100546 | 100547 | 100548 | 100549 | 100550 | 100551 | 100552 | 100553 | 100554 | 100555 | 100556 | 100557 | 100558 | 100559 | 100560 | 100561 | 100562 | 100563 | 100564 | 100565 | 100566 | 100567 | 100568 | 100569 | 100570 | 100571 | 100572 | 100573 | 100574 | 100575 | 100576 | 100577 | 100578 | 100579 | 100580 | 100581 | 100582 | 100583 | 100584 | 100585 | 100586 | 100587 | 100588 | 100589 | 100590 | 100591 | 100592 | 100593 | 100594 | 100595 | 100596 | 100597 | 100598 | 100599 | 100600 | 100601 | 100602 | 100603 | 100604 | 100605 | 100606 | 100607 | 100608 | 100609 | 100610 | 100611 | 100612 | 100613 | 100614 | 100615 | 100616 | 100617 | 100618 | 100619 | 100620 | 100621 | 100622 | 100623 | 100624 | 100625 | 100626 | 100627 | 100628 | 100629 | 100630 | 100631 | 100632 | 100633 | 100634 | 100635 | 100636 | 100637 | 100638 | 100639 | 100640 | 100641 | 100642 | 100643 | 100644 | 100645 | 100646 | 100647 | 100648 | 100649 | 100650 | 100651 | 100652 | 100653 | 100654 | 100655 | 100656 | 100657 | 100658 | 100659 | 100660 | 100661 | 100662 | 100663 | 100664 | 100665 | 100666 | 100667 | 100668 | 100669 | 100670 | 100671 | 100672 | 100673 | 100674 | 100675 | 100676 | 100677 | 100678 | 100679 | 100680 | 100681 | 100682 | 100683 | 100684 | 100685 | 100686 | 100687 | 100688 | 100689 | 100690 | 100691 | 100692 | 100693 | 100694 | 100695 | 100696 | 100697 | 100698 | 100699 | 100700 | 100701 | 100702 | 100703 | 100704 | 100705 | 100706 | 100707 | 100708 | 100709 | 100710 | 100711 | 100712 | 100713 | 100714 | 100715 | 100716 | 100717 | 100718 | 100719 | 100720 | 100721 | 100722 | 100723 | 100724 | 100725 | 100726 | 100727 | 100728 | 100729 | 100730 | 100731 | 100732 | 100733 | 100734 | 100735 | 100736 | 100737 | 100738 | 100739 | 100740 | 100741 | 100742 | 100743 | 100744 | 100745 | 100746 | 100747 | 100748 | 100749 | 100750 | 100751 | 100752 | 100753 | 100754 | 100755 | 100756 | 100757 | 100758 | 100759 | 100760 | 100761 | 100762 | 100763 | 100764 | 100765 | 100766 | 100767 | 100768 | 100769 | 100770 | 100771 | 100772 | 100773 | 100774 | 100775 | 100776 | 100777 | 100778 | 100779 | 100780 | 100781 | 100782 | 100783 | 100784 | 100785 | 100786 | 100787 | 100788 | 100789 | 100790 | 100791 | 100792 | 100793 | 100794 | 100795 | 100796 | 100797 | 100798 | 100799 | 100800 | 100801 | 100802 | 100803 | 100804 | 100805 | 100806 | 100807 | 100808 | 100809 | 100810 | 100811 | 100812 | 100813 | 100814 | 100815 | 100816 | 100817 | 100818 | 100819 | 100820 | 100821 | 100822 | 100823 | 100824 | 100825 | 100826 | 100827 | 100828 | 100829 | 100830 | 100831 | 100832 | 100833 | 100834 | 100835 | 100836 | 100837 | 100838 | 100839 | 100840 | 100841 | 100842 | 100843 | 100844 | 100845 | 100846 | 100847 | 100848 | 100849 | 100850 | 100851 | 100852 | 100853 | 100854 | 100855 | 100856 | 100857 | 100858 | 100859 | 100860 | 100861 | 100862 | 100863 | 100864 | 100865 | 100866 | 100867 | 100868 | 100869 | 100870 | 100871 | 100872 | 100873 | 100874 | 100875 | 100876 | 100877 | 100878 | 100879 | 100880 | 100881 | 100882 | 100883 | 100884 | 100885 | 100886 | 100887 | 100888 | 100889 | 100890 | 100891 | 100892 | 100893 | 100894 | 100895 | 100896 | 100897 | 100898 | 100899 | 100900 | 100901 | 100902 | 100903 | 100904 | 100905 | 100906 | 100907 | 100908 | 100909 | 100910 | 100911 | 100912 | 100913 | 100914 | 100915 | 100916 | 100917 | 100918 | 100919 | 100920 | 100921 | 100922 | 100923 | 100924 | 100925 | 100926 | 100927 | 100928 | 100929 | 100930 | 100931 | 100932 | 100933 | 100934 | 100935 | 100936 | 100937 | 100938 | 100939 | 100940 | 100941 | 100942 | 100943 | 100944 | 100945 | 100946 | 100947 | 100948 | 100949 | 100950 | 100951 | 100952 | 100953 | 100954 | 100955 | 100956 | 100957 | 100958 | 100959 | 100960 | 100961 | 100962 | 100963 | 100964 | 100965 | 100966 | 100967 | 100968 | 100969 | 100970 | 100971 | 100972 | 100973 | 100974 | 100975 | 100976 | 100977 | 100978 | 100979 | 100980 | 100981 | 100982 | 100983 | 100984 | 100985 | 100986 | 100987 | 100988 | 100989 | 100990 | 100991 | 100992 | 100993 | 100994 | 100995 | 100996 | 100997 | 100998 | 100999 | 101000 | 101001 | 101002 | 101003 | 101004 | 101005 | 101006 | 101007 | 101008 | 101009 | 101010 | 101011 | 101012 | 101013 | 101014 | 101015 | 101016 | 101017 | 101018 | 101019 | 101020 | 101021 | 101022 | 101023 | 101024 | 101025 | 101026 | 101027 | 101028 | 101029 | 101030 | 101031 | 101032 | 101033 | 101034 | 101035 | 101036 | 101037 | 101038 | 101039 | 101040 | 101041 | 101042 | 101043 | 101044 | 101045 | 101046 | 101047 | 101048 | 101049 | 101050 | 101051 | 101052 | 101053 | 101054 | 101055 | 101056 | 101057 | 101058 | 101059 | 101060 | 101061 | 101062 | 101063 | 101064 | 101065 | 101066 | 101067 | 101068 | 101069 | 101070 | 101071 | 101072 | 101073 | 101074 | 101075 | 101076 | 101077 | 101078 | 101079 | 101080 | 101081 | 101082 | 101083 | 101084 | 101085 | 101086 | 101087 | 101088 | 101089 | 101090 | 101091 | 101092 | 101093 | 101094 | 101095 | 101096 | 101097 | 101098 | 101099 | 101100 | 101101 | 101102 | 101103 | 101104 | 101105 | 101106 | 101107 | 101108 | 101109 | 101110 | 101111 | 101112 | 101113 | 101114 | 101115 | 101116 | 101117 | 101118 | 101119 | 101120 | 101121 | 101122 | 101123 | 101124 | 101125 | 101126 | 101127 | 101128 | 101129 | 101130 | 101131 | 101132 | 101133 | 101134 | 101135 | 101136 | 101137 | 101138 | 101139 | 101140 | 101141 | 101142 | 101143 | 101144 | 101145 | 101146 | 101147 | 101148 | 101149 | 101150 | 101151 | 101152 | 101153 | 101154 | 101155 | 101156 | 101157 | 101158 | 101159 | 101160 | 101161 | 101162 | 101163 | 101164 | 101165 | 101166 | 101167 | 101168 | 101169 | 101170 | 101171 | 101172 | 101173 | 101174 | 101175 | 101176 | 101177 | 101178 | 101179 | 101180 | 101181 | 101182 | 101183 | 101184 | 101185 | 101186 | 101187 | 101188 | 101189 | 101190 | 101191 | 101192 | 101193 | 101194 | 101195 | 101196 | 101197 | 101198 | 101199 | 101200 | 101201 | 101202 | 101203 | 101204 | 101205 | 101206 | 101207 | 101208 | 101209 | 101210 | 101211 | 101212 | 101213 | 101214 | 101215 | 101216 | 101217 | 101218 | 101219 | 101220 | 101221 | 101222 | 101223 | 101224 | 101225 | 101226 | 101227 | 101228 | 101229 | 101230 | 101231 | 101232 | 101233 | 101234 | 101235 | 101236 | 101237 | 101238 | 101239 | 101240 | 101241 | 101242 | 101243 | 101244 | 101245 | 101246 | 101247 | 101248 | 101249 | 101250 | 101251 | 101252 | 101253 | 101254 | 101255 | 101256 | 101257 | 101258 | 101259 | 101260 | 101261 | 101262 | 101263 | 101264 | 101265 | 101266 | 101267 | 101268 | 101269 | 101270 | 101271 | 101272 | 101273 | 101274 | 101275 | 101276 | 101277 | 101278 | 101279 | 101280 | 101281 | 101282 | 101283 | 101284 | 101285 | 101286 | 101287 | 101288 | 101289 | 101290 | 101291 | 101292 | 101293 | 101294 | 101295 | 101296 | 101297 | 101298 | 101299 | 101300 | 101301 | 101302 | 101303 | 101304 | 101305 | 101306 | 101307 | 101308 | 101309 | 101310 | 101311 | 101312 | 101313 | 101314 | 101315 | 101316 | 101317 | 101318 | 101319 | 101320 | 101321 | 101322 | 101323 | 101324 | 101325 | 101326 | 101327 | 101328 | 101329 | 101330 | 101331 | 101332 | 101333 | 101334 | 101335 | 101336 | 101337 | 101338 | 101339 | 101340 | 101341 | 101342 | 101343 | 101344 | 101345 | 101346 | 101347 | 101348 | 101349 | 101350 | 101351 | 101352 | 101353 | 101354 | 101355 | 101356 | 101357 | 101358 | 101359 | 101360 | 101361 | 101362 | 101363 | 101364 | 101365 | 101366 | 101367 | 101368 | 101369 | 101370 | 101371 | 101372 | 101373 | 101374 | 101375 | 101376 | 101377 | 101378 | 101379 | 101380 | 101381 | 101382 | 101383 | 101384 | 101385 | 101386 | 101387 | 101388 | 101389 | 101390 | 101391 | 101392 | 101393 | 101394 | 101395 | 101396 | 101397 | 101398 | 101399 | 101400 | 101401 | 101402 | 101403 | 101404 | 101405 | 101406 | 101407 | 101408 | 101409 | 101410 | 101411 | 101412 | 101413 | 101414 | 101415 | 101416 | 101417 | 101418 | 101419 | 101420 | 101421 | 101422 | 101423 | 101424 | 101425 | 101426 | 101427 | 101428 | 101429 | 101430 | 101431 | 101432 | 101433 | 101434 | 101435 | 101436 | 101437 | 101438 | 101439 | 101440 | 101441 | 101442 | 101443 | 101444 | 101445 | 101446 | 101447 | 101448 | 101449 | 101450 | 101451 | 101452 | 101453 | 101454 | 101455 | 101456 | 101457 | 101458 | 101459 | 101460 | 101461 | 101462 | 101463 | 101464 | 101465 | 101466 | 101467 | 101468 | 101469 | 101470 | 101471 | 101472 | 101473 | 101474 | 101475 | 101476 | 101477 | 101478 | 101479 | 101480 | 101481 | 101482 | 101483 | 101484 | 101485 | 101486 | 101487 | 101488 | 101489 | 101490 | 101491 | 101492 | 101493 | 101494 | 101495 | 101496 | 101497 | 101498 | 101499 | 101500 | 101501 | 101502 | 101503 | 101504 | 101505 | 101506 | 101507 | 101508 | 101509 | 101510 | 101511 | 101512 | 101513 | 101514 | 101515 | 101516 | 101517 | 101518 | 101519 | 101520 | 101521 | 101522 | 101523 | 101524 | 101525 | 101526 | 101527 | 101528 | 101529 | 101530 | 101531 | 101532 | 101533 | 101534 | 101535 | 101537 | 101538 | 101539 | 101540 | 101541 | 101542 | 101543 | 101544 | 101545 | 101546 | 101547 | 101548 | 101549 | 101550 | 101551 | 101552 | 101553 | 101554 | 101555 | 101556 | 101557 | 101558 | 101559 | 101560 | 101561 | 101562 | 101563 | 101564 | 101565 | 101566 | 101567 | 101568 | 101569 | 101570 | 101571 | 101572 | 101573 | 101574 | 101575 | 101576 | 101577 | 101578 | 101579 | 101580 | 101581 | 101582 | 101583 | 101584 | 101585 | 101586 | 101587 | 101588 | 101589 | 101590 | 101591 | 101592 | 101593 | 101594 | 101595 | 101596 | 101597 | 101598 | 101599 | 101600 | 101601 | 101602 | 101603 | 101604 | 101605 | 101606 | 101607 | 101608 | 101609 | 101610 | 101611 | 101612 | 101613 | 101614 | 101615 | 101616 | 101617 | 101618 | 101619 | 101620 | 101625 | 101626 | 101627 | 101628 | 101631 | 101632 | 101633 | 101634 | 101635 | 101636;
		unlockBadgeLevel?: 1 | 3 | 5 | 10 | 20 | 50 | 100 | 200 | 300 | 1000;
		unlockBadgeType?: "BADGE_BATTLE_ATTACK_WON" | "BADGE_BATTLE_TRAINING_WON" | "BADGE_BIG_MAGIKARP" | "BADGE_GREAT_LEAGUE" | "BADGE_HOURS_DEFENDED" | "BADGE_MASTER_LEAGUE" | "BADGE_MAX_SIZE_FIRST_PLACE_WIN" | "BADGE_PIKACHU" | "BADGE_POKEDEX_ENTRIES" | "BADGE_POKEDEX_ENTRIES_GEN2" | "BADGE_ROCKET_GIOVANNI_DEFEATED" | "BADGE_TRAVEL_KM" | "BADGE_ULTRA_LEAGUE";
		unlockPlayerLevel?: 30 | 41 | 43 | 45 | 47 | 49 | 50;
		unlockType: "DEFAULT" | "IAP_CLOTHING" | "LEVEL_REWARD" | "MEDAL_REWARD";
	};
}

export type AvatarCustomizationFBackpackAlolaitemslittenbp = AvatarCustomization<"AVATAR_f_backpack_alolaitemslittenbp">;
export type AvatarCustomizationFBackpackAlolaitemspoppliobp = AvatarCustomization<"AVATAR_f_backpack_alolaitemspoppliobp">;
export type AvatarCustomizationFBackpackAlolaitemsrowletbp = AvatarCustomization<"AVATAR_f_backpack_alolaitemsrowletbp">;
export type AvatarCustomizationFBackpackAnimegou = AvatarCustomization<"AVATAR_f_backpack_animegou">;
export type AvatarCustomizationFBackpackBackpacker = AvatarCustomization<"AVATAR_f_backpack_backpacker">;
export type AvatarCustomizationFBackpackCombeebackpack = AvatarCustomization<"AVATAR_f_backpack_combeebackpack">;
export type AvatarCustomizationFBackpackCombeebackpack01 = AvatarCustomization<"AVATAR_f_backpack_combeebackpack_01">;
export type AvatarCustomizationFBackpackCute0 = AvatarCustomization<"AVATAR_f_backpack_cute_0">;
export type AvatarCustomizationFBackpackDedenneitems = AvatarCustomization<"AVATAR_f_backpack_dedenneitems">;
export type AvatarCustomizationFBackpackDefault0 = AvatarCustomization<"AVATAR_f_backpack_default_0">;
export type AvatarCustomizationFBackpackDefault1 = AvatarCustomization<"AVATAR_f_backpack_default_1">;
export type AvatarCustomizationFBackpackDefault2 = AvatarCustomization<"AVATAR_f_backpack_default_2">;
export type AvatarCustomizationFBackpackDefault3 = AvatarCustomization<"AVATAR_f_backpack_default_3">;
export type AvatarCustomizationFBackpackEggIncubator = AvatarCustomization<"AVATAR_f_backpack_egg-incubator">;
export type AvatarCustomizationFBackpackEggbackpack0 = AvatarCustomization<"AVATAR_f_backpack_eggbackpack_0">;
export type AvatarCustomizationFBackpackEggbackpack1 = AvatarCustomization<"AVATAR_f_backpack_eggbackpack_1">;
export type AvatarCustomizationFBackpackEggbackpack2 = AvatarCustomization<"AVATAR_f_backpack_eggbackpack_2">;
export type AvatarCustomizationFBackpackEmpty = AvatarCustomization<"AVATAR_f_backpack_empty">;
export type AvatarCustomizationFBackpackFrlg0 = AvatarCustomization<"AVATAR_f_backpack_frlg_0">;
export type AvatarCustomizationFBackpackGenesecteventitem = AvatarCustomization<"AVATAR_f_backpack_genesecteventitem">;
export type AvatarCustomizationFBackpackGengar0 = AvatarCustomization<"AVATAR_f_backpack_gengar_0">;
export type AvatarCustomizationFBackpackGiratinaitems = AvatarCustomization<"AVATAR_f_backpack_giratinaitems">;
export type AvatarCustomizationFBackpackGuccibackpack = AvatarCustomization<"AVATAR_f_backpack_guccibackpack">;
export type AvatarCustomizationFBackpackGuitarcasebackpack = AvatarCustomization<"AVATAR_f_backpack_guitarcasebackpack">;
export type AvatarCustomizationFBackpackHgss0 = AvatarCustomization<"AVATAR_f_backpack_hgss_0">;
export type AvatarCustomizationFBackpackHououbackpack = AvatarCustomization<"AVATAR_f_backpack_hououbackpack">;
export type AvatarCustomizationFBackpackKakureonpouch = AvatarCustomization<"AVATAR_f_backpack_kakureonpouch">;
export type AvatarCustomizationFBackpackKomala = AvatarCustomization<"AVATAR_f_backpack_komala">;
export type AvatarCustomizationFBackpackLongchampbp = AvatarCustomization<"AVATAR_f_backpack_longchampbp">;
export type AvatarCustomizationFBackpackLunalaitems = AvatarCustomization<"AVATAR_f_backpack_lunalaitems">;
export type AvatarCustomizationFBackpackLunarnewyr = AvatarCustomization<"AVATAR_f_backpack_lunarNewYr">;
export type AvatarCustomizationFBackpackMimikyubp = AvatarCustomization<"AVATAR_f_backpack_mimikyubp">;
export type AvatarCustomizationFBackpackMovie2020 = AvatarCustomization<"AVATAR_f_backpack_movie2020">;
export type AvatarCustomizationFBackpackNaganadelawings = AvatarCustomization<"AVATAR_f_backpack_naganadelawings">;
export type AvatarCustomizationFBackpackNike2021 = AvatarCustomization<"AVATAR_f_backpack_nike2021">;
export type AvatarCustomizationFBackpackPamobackpack = AvatarCustomization<"AVATAR_f_backpack_pamobackpack">;
export type AvatarCustomizationFBackpackPkmnhoodie001 = AvatarCustomization<"AVATAR_f_backpack_pkmnhoodie001">;
export type AvatarCustomizationFBackpackPkmnhoodie004 = AvatarCustomization<"AVATAR_f_backpack_pkmnhoodie004">;
export type AvatarCustomizationFBackpackPkmnhoodie007 = AvatarCustomization<"AVATAR_f_backpack_pkmnhoodie007">;
export type AvatarCustomizationFBackpackRuinmaniac = AvatarCustomization<"AVATAR_f_backpack_ruinmaniac">;
export type AvatarCustomizationFBackpackSnapcamera = AvatarCustomization<"AVATAR_f_backpack_snapcamera">;
export type AvatarCustomizationFBackpackSs = AvatarCustomization<"AVATAR_f_backpack_ss">;
export type AvatarCustomizationFBackpackSvcostumescarletschool = AvatarCustomization<"AVATAR_f_backpack_svcostumescarletschool">;
export type AvatarCustomizationFBackpackSvcostumevioletschool = AvatarCustomization<"AVATAR_f_backpack_svcostumevioletschool">;
export type AvatarCustomizationFBackpackSvdlc1 = AvatarCustomization<"AVATAR_f_backpack_svdlc1">;
export type AvatarCustomizationFBackpackSvdlc2spring = AvatarCustomization<"AVATAR_f_backpack_svdlc2spring">;
export type AvatarCustomizationFBackpackSwshdlc2costume = AvatarCustomization<"AVATAR_f_backpack_swshdlc2costume">;
export type AvatarCustomizationFBackpackSwshdlccostume = AvatarCustomization<"AVATAR_f_backpack_swshdlccostume">;
export type AvatarCustomizationFBackpackTogepibackpack = AvatarCustomization<"AVATAR_f_backpack_togepibackpack">;
export type AvatarCustomizationFBackpackUltra0 = AvatarCustomization<"AVATAR_f_backpack_ultra_0">;
export type AvatarCustomizationFBackpackVerizon2021 = AvatarCustomization<"AVATAR_f_backpack_verizon2021">;
export type AvatarCustomizationFBackpackZubatbp = AvatarCustomization<"AVATAR_f_backpack_zubatbp">;
export type AvatarCustomizationFBeltAcetrainerbw = AvatarCustomization<"AVATAR_f_belt_acetrainerbw">;
export type AvatarCustomizationFBeltDefault0 = AvatarCustomization<"AVATAR_f_belt_default_0">;
export type AvatarCustomizationFBeltDefault1 = AvatarCustomization<"AVATAR_f_belt_default_1">;
export type AvatarCustomizationFBeltDefault2 = AvatarCustomization<"AVATAR_f_belt_default_2">;
export type AvatarCustomizationFBeltDefault3 = AvatarCustomization<"AVATAR_f_belt_default_3">;
export type AvatarCustomizationFBeltDefault4 = AvatarCustomization<"AVATAR_f_belt_default_4">;
export type AvatarCustomizationFBeltDefault5 = AvatarCustomization<"AVATAR_f_belt_default_5">;
export type AvatarCustomizationFBeltDefault6 = AvatarCustomization<"AVATAR_f_belt_default_6">;
export type AvatarCustomizationFBeltDefault7 = AvatarCustomization<"AVATAR_f_belt_default_7">;
export type AvatarCustomizationFBeltDefault8 = AvatarCustomization<"AVATAR_f_belt_default_8">;
export type AvatarCustomizationFBeltEmpty = AvatarCustomization<"AVATAR_f_belt_empty">;
export type AvatarCustomizationFBeltSimple0 = AvatarCustomization<"AVATAR_f_belt_simple_0">;
export type AvatarCustomizationFBeltSimple1 = AvatarCustomization<"AVATAR_f_belt_simple_1">;
export type AvatarCustomizationFBeltSimple2 = AvatarCustomization<"AVATAR_f_belt_simple_2">;
export type AvatarCustomizationFBeltSimple3 = AvatarCustomization<"AVATAR_f_belt_simple_3">;
export type AvatarCustomizationFBeltTeamrocket0 = AvatarCustomization<"AVATAR_f_belt_teamrocket_0">;
export type AvatarCustomizationFBeltTeamrocket1 = AvatarCustomization<"AVATAR_f_belt_teamrocket_1">;
export type AvatarCustomizationFEyes0 = AvatarCustomization<"AVATAR_f_eyes_0">;
export type AvatarCustomizationFEyes1 = AvatarCustomization<"AVATAR_f_eyes_1">;
export type AvatarCustomizationFEyes2 = AvatarCustomization<"AVATAR_f_eyes_2">;
export type AvatarCustomizationFEyes3 = AvatarCustomization<"AVATAR_f_eyes_3">;
export type AvatarCustomizationFEyes4 = AvatarCustomization<"AVATAR_f_eyes_4">;
export type AvatarCustomizationFFace3dmask00 = AvatarCustomization<"AVATAR_f_face_3dmask_00">;
export type AvatarCustomizationFFace3dmask01 = AvatarCustomization<"AVATAR_f_face_3dmask_01">;
export type AvatarCustomizationFFace3dmask02 = AvatarCustomization<"AVATAR_f_face_3dmask_02">;
export type AvatarCustomizationFFaceBanettemask = AvatarCustomization<"AVATAR_f_face_banettemask">;
export type AvatarCustomizationFFaceDayofthedead = AvatarCustomization<"AVATAR_f_face_dayofthedead">;
export type AvatarCustomizationFFaceDefaultmask = AvatarCustomization<"AVATAR_f_face_defaultmask">;
export type AvatarCustomizationFFaceEmpty = AvatarCustomization<"AVATAR_f_face_empty">;
export type AvatarCustomizationFFaceFacestickerghostpika = AvatarCustomization<"AVATAR_f_face_facestickerghostpika">;
export type AvatarCustomizationFFaceFacestickerpikachu = AvatarCustomization<"AVATAR_f_face_facestickerpikachu">;
export type AvatarCustomizationFFaceFacestickerpokeball = AvatarCustomization<"AVATAR_f_face_facestickerpokeball">;
export type AvatarCustomizationFFaceFestofcolors00 = AvatarCustomization<"AVATAR_f_face_festOfColors_00">;
export type AvatarCustomizationFFaceFestofcolors01 = AvatarCustomization<"AVATAR_f_face_festOfColors_01">;
export type AvatarCustomizationFFaceFestofcolors02 = AvatarCustomization<"AVATAR_f_face_festOfColors_02">;
export type AvatarCustomizationFFaceGracidea = AvatarCustomization<"AVATAR_f_face_gracidea">;
export type AvatarCustomizationFFaceHoliday2022santacostumes = AvatarCustomization<"AVATAR_f_face_holiday2022santacostumes">;
export type AvatarCustomizationFFacePikachumask = AvatarCustomization<"AVATAR_f_face_pikachumask">;
export type AvatarCustomizationFFaceSableyemask = AvatarCustomization<"AVATAR_f_face_sableyemask">;
export type AvatarCustomizationFFaceTeamskull = AvatarCustomization<"AVATAR_f_face_teamskull">;
export type AvatarCustomizationFFaceToxelmask = AvatarCustomization<"AVATAR_f_face_toxelmask">;
export type AvatarCustomizationFFaceVerizon2020mask = AvatarCustomization<"AVATAR_f_face_verizon2020mask">;
export type AvatarCustomizationFGlasses3d = AvatarCustomization<"AVATAR_f_glasses_3d">;
export type AvatarCustomizationFGlassesCutieflysleepmask = AvatarCustomization<"AVATAR_f_glasses_cutieflysleepmask">;
export type AvatarCustomizationFGlassesDivingsuit = AvatarCustomization<"AVATAR_f_glasses_divingsuit">;
export type AvatarCustomizationFGlassesDrpikachu = AvatarCustomization<"AVATAR_f_glasses_drpikachu">;
export type AvatarCustomizationFGlassesEmpty = AvatarCustomization<"AVATAR_f_glasses_empty">;
export type AvatarCustomizationFGlassesFrillishglasses = AvatarCustomization<"AVATAR_f_glasses_frillishglasses">;
export type AvatarCustomizationFGlassesFw2022 = AvatarCustomization<"AVATAR_f_glasses_fw2022">;
export type AvatarCustomizationFGlassesGimmighoulitems = AvatarCustomization<"AVATAR_f_glasses_gimmighoulitems">;
export type AvatarCustomizationFGlassesGoteamrocketarlo = AvatarCustomization<"AVATAR_f_glasses_goteamrocketarlo">;
export type AvatarCustomizationFGlassesGrandoakglasses = AvatarCustomization<"AVATAR_f_glasses_grandoakglasses">;
export type AvatarCustomizationFGlassesLugiaglasses = AvatarCustomization<"AVATAR_f_glasses_lugiaglasses">;
export type AvatarCustomizationFGlassesLv40glasses = AvatarCustomization<"AVATAR_f_glasses_lv40glasses">;
export type AvatarCustomizationFGlassesMask0 = AvatarCustomization<"AVATAR_f_glasses_mask_0">;
export type AvatarCustomizationFGlassesMask1 = AvatarCustomization<"AVATAR_f_glasses_mask_1">;
export type AvatarCustomizationFGlassesNewyear2022 = AvatarCustomization<"AVATAR_f_glasses_newyear2022">;
export type AvatarCustomizationFGlassesNewyearglasses2020 = AvatarCustomization<"AVATAR_f_glasses_newyearglasses2020">;
export type AvatarCustomizationFGlassesNewyearglasses2021 = AvatarCustomization<"AVATAR_f_glasses_newyearglasses2021">;
export type AvatarCustomizationFGlassesObstagoonitems = AvatarCustomization<"AVATAR_f_glasses_obstagoonitems">;
export type AvatarCustomizationFGlassesRoundsunglasses = AvatarCustomization<"AVATAR_f_glasses_roundsunglasses">;
export type AvatarCustomizationFGlassesTeardrop0 = AvatarCustomization<"AVATAR_f_glasses_teardrop_0">;
export type AvatarCustomizationFGlassesThick0 = AvatarCustomization<"AVATAR_f_glasses_thick_0">;
export type AvatarCustomizationFGlassesThick1 = AvatarCustomization<"AVATAR_f_glasses_thick_1">;
export type AvatarCustomizationFGlassesThick2 = AvatarCustomization<"AVATAR_f_glasses_thick_2">;
export type AvatarCustomizationFGlassesThick3 = AvatarCustomization<"AVATAR_f_glasses_thick_3">;
export type AvatarCustomizationFGlassesThick4 = AvatarCustomization<"AVATAR_f_glasses_thick_4">;
export type AvatarCustomizationFGlovesAcetrainersm = AvatarCustomization<"AVATAR_f_gloves_acetrainersm">;
export type AvatarCustomizationFGlovesBattlegirl0 = AvatarCustomization<"AVATAR_f_gloves_battlegirl_0">;
export type AvatarCustomizationFGlovesBea = AvatarCustomization<"AVATAR_f_gloves_bea">;
export type AvatarCustomizationFGlovesBwn = AvatarCustomization<"AVATAR_f_gloves_bwn">;
export type AvatarCustomizationFGlovesDefault0 = AvatarCustomization<"AVATAR_f_gloves_default_0">;
export type AvatarCustomizationFGlovesDefault1 = AvatarCustomization<"AVATAR_f_gloves_default_1">;
export type AvatarCustomizationFGlovesDefault2 = AvatarCustomization<"AVATAR_f_gloves_default_2">;
export type AvatarCustomizationFGlovesDefault3 = AvatarCustomization<"AVATAR_f_gloves_default_3">;
export type AvatarCustomizationFGlovesDelibird = AvatarCustomization<"AVATAR_f_gloves_delibird">;
export type AvatarCustomizationFGlovesDynamaxswsh = AvatarCustomization<"AVATAR_f_gloves_dynamaxswsh">;
export type AvatarCustomizationFGlovesEmpty = AvatarCustomization<"AVATAR_f_gloves_empty">;
export type AvatarCustomizationFGlovesFrlg0 = AvatarCustomization<"AVATAR_f_gloves_frlg_0">;
export type AvatarCustomizationFGlovesGeeta = AvatarCustomization<"AVATAR_f_gloves_geeta">;
export type AvatarCustomizationFGlovesGiovanni = AvatarCustomization<"AVATAR_f_gloves_giovanni">;
export type AvatarCustomizationFGlovesGuzma = AvatarCustomization<"AVATAR_f_gloves_guzma">;
export type AvatarCustomizationFGlovesGymleader0 = AvatarCustomization<"AVATAR_f_gloves_gymleader_0">;
export type AvatarCustomizationFGlovesHoopabangle = AvatarCustomization<"AVATAR_f_gloves_hoopabangle">;
export type AvatarCustomizationFGlovesKorrina = AvatarCustomization<"AVATAR_f_gloves_korrina">;
export type AvatarCustomizationFGlovesLysandre = AvatarCustomization<"AVATAR_f_gloves_lysandre">;
export type AvatarCustomizationFGlovesMegabangle = AvatarCustomization<"AVATAR_f_gloves_megabangle">;
export type AvatarCustomizationFGlovesMegabangleblack = AvatarCustomization<"AVATAR_f_gloves_megabangleblack">;
export type AvatarCustomizationFGlovesMegabangleblue = AvatarCustomization<"AVATAR_f_gloves_megabangleblue">;
export type AvatarCustomizationFGlovesMegabanglered = AvatarCustomization<"AVATAR_f_gloves_megabanglered">;
export type AvatarCustomizationFGlovesMegabangleyellow = AvatarCustomization<"AVATAR_f_gloves_megabangleyellow">;
export type AvatarCustomizationFGlovesObstagoonitems = AvatarCustomization<"AVATAR_f_gloves_obstagoonitems">;
export type AvatarCustomizationFGlovesPalmer = AvatarCustomization<"AVATAR_f_gloves_palmer">;
export type AvatarCustomizationFGlovesProfwillowoutfit = AvatarCustomization<"AVATAR_f_gloves_profwillowoutfit">;
export type AvatarCustomizationFGlovesStevenfirst = AvatarCustomization<"AVATAR_f_gloves_stevenfirst">;
export type AvatarCustomizationFGlovesSvdlc2spring = AvatarCustomization<"AVATAR_f_gloves_svdlc2spring">;
export type AvatarCustomizationFGlovesSwshdlc2costume = AvatarCustomization<"AVATAR_f_gloves_swshdlc2costume">;
export type AvatarCustomizationFGlovesSwshdlccostume = AvatarCustomization<"AVATAR_f_gloves_swshdlccostume">;
export type AvatarCustomizationFGlovesSwshuniformchampion = AvatarCustomization<"AVATAR_f_gloves_swshuniformchampion">;
export type AvatarCustomizationFGlovesSwshuniformdark = AvatarCustomization<"AVATAR_f_gloves_swshuniformdark">;
export type AvatarCustomizationFGlovesSwshuniformdefault = AvatarCustomization<"AVATAR_f_gloves_swshuniformdefault">;
export type AvatarCustomizationFGlovesSwshuniformdragon = AvatarCustomization<"AVATAR_f_gloves_swshuniformdragon">;
export type AvatarCustomizationFGlovesTeamaqua = AvatarCustomization<"AVATAR_f_gloves_teamaqua">;
export type AvatarCustomizationFGlovesTeammagma = AvatarCustomization<"AVATAR_f_gloves_teammagma">;
export type AvatarCustomizationFGlovesTeamrocket0 = AvatarCustomization<"AVATAR_f_gloves_teamrocket_0">;
export type AvatarCustomizationFGlovesTeamspark = AvatarCustomization<"AVATAR_f_gloves_teamspark">;
export type AvatarCustomizationFGlovesWintergloves2023 = AvatarCustomization<"AVATAR_f_gloves_wintergloves2023">;
export type AvatarCustomizationFGofestPikachuvisor = AvatarCustomization<"AVATAR_f_gofest_pikachuvisor">;
export type AvatarCustomizationFHairDefault0 = AvatarCustomization<"AVATAR_f_hair_default_0">;
export type AvatarCustomizationFHairDefault1 = AvatarCustomization<"AVATAR_f_hair_default_1">;
export type AvatarCustomizationFHairDefault10 = AvatarCustomization<"AVATAR_f_hair_default_10">;
export type AvatarCustomizationFHairDefault11 = AvatarCustomization<"AVATAR_f_hair_default_11">;
export type AvatarCustomizationFHairDefault12 = AvatarCustomization<"AVATAR_f_hair_default_12">;
export type AvatarCustomizationFHairDefault13 = AvatarCustomization<"AVATAR_f_hair_default_13">;
export type AvatarCustomizationFHairDefault14 = AvatarCustomization<"AVATAR_f_hair_default_14">;
export type AvatarCustomizationFHairDefault15 = AvatarCustomization<"AVATAR_f_hair_default_15">;
export type AvatarCustomizationFHairDefault16 = AvatarCustomization<"AVATAR_f_hair_default_16">;
export type AvatarCustomizationFHairDefault17 = AvatarCustomization<"AVATAR_f_hair_default_17">;
export type AvatarCustomizationFHairDefault18 = AvatarCustomization<"AVATAR_f_hair_default_18">;
export type AvatarCustomizationFHairDefault19 = AvatarCustomization<"AVATAR_f_hair_default_19">;
export type AvatarCustomizationFHairDefault2 = AvatarCustomization<"AVATAR_f_hair_default_2">;
export type AvatarCustomizationFHairDefault3 = AvatarCustomization<"AVATAR_f_hair_default_3">;
export type AvatarCustomizationFHairDefault4 = AvatarCustomization<"AVATAR_f_hair_default_4">;
export type AvatarCustomizationFHairDefault5 = AvatarCustomization<"AVATAR_f_hair_default_5">;
export type AvatarCustomizationFHairDefault6 = AvatarCustomization<"AVATAR_f_hair_default_6">;
export type AvatarCustomizationFHairDefault7 = AvatarCustomization<"AVATAR_f_hair_default_7">;
export type AvatarCustomizationFHairDefault8 = AvatarCustomization<"AVATAR_f_hair_default_8">;
export type AvatarCustomizationFHairDefault9 = AvatarCustomization<"AVATAR_f_hair_default_9">;
export type AvatarCustomizationFHat6thanniversary = AvatarCustomization<"AVATAR_f_hat_6thanniversary">;
export type AvatarCustomizationFHatAcetrainersm = AvatarCustomization<"AVATAR_f_hat_acetrainersm">;
export type AvatarCustomizationFHatAdventure0 = AvatarCustomization<"AVATAR_f_hat_adventure_0">;
export type AvatarCustomizationFHatAseries = AvatarCustomization<"AVATAR_f_hat_aseries">;
export type AvatarCustomizationFHatBea = AvatarCustomization<"AVATAR_f_hat_bea">;
export type AvatarCustomizationFHatBidoofhat = AvatarCustomization<"AVATAR_f_hat_bidoofhat">;
export type AvatarCustomizationFHatBounsweetitems = AvatarCustomization<"AVATAR_f_hat_bounsweetitems">;
export type AvatarCustomizationFHatBurmyearrings11 = AvatarCustomization<"AVATAR_f_hat_burmyearrings11">;
export type AvatarCustomizationFHatBurmyearrings12 = AvatarCustomization<"AVATAR_f_hat_burmyearrings12">;
export type AvatarCustomizationFHatBurmyearrings13 = AvatarCustomization<"AVATAR_f_hat_burmyearrings13">;
export type AvatarCustomizationFHatBwn = AvatarCustomization<"AVATAR_f_hat_bwn">;
export type AvatarCustomizationFHatCasket0 = AvatarCustomization<"AVATAR_f_hat_casket_0">;
export type AvatarCustomizationFHatCetoddlehat = AvatarCustomization<"AVATAR_f_hat_cetoddlehat">;
export type AvatarCustomizationFHatClay = AvatarCustomization<"AVATAR_f_hat_clay">;
export type AvatarCustomizationFHatCofagrigusitems = AvatarCustomization<"AVATAR_f_hat_cofagrigusitems">;
export type AvatarCustomizationFHatCosmog = AvatarCustomization<"AVATAR_f_hat_cosmog">;
export type AvatarCustomizationFHatCrownmoon = AvatarCustomization<"AVATAR_f_hat_crownmoon">;
export type AvatarCustomizationFHatCrownsun = AvatarCustomization<"AVATAR_f_hat_crownsun">;
export type AvatarCustomizationFHatCubonehat = AvatarCustomization<"AVATAR_f_hat_cubonehat">;
export type AvatarCustomizationFHatDarumakahat = AvatarCustomization<"AVATAR_f_hat_darumakahat">;
export type AvatarCustomizationFHatDedenneitems = AvatarCustomization<"AVATAR_f_hat_dedenneitems">;
export type AvatarCustomizationFHatDefaultA0 = AvatarCustomization<"AVATAR_f_hat_default_A_0">;
export type AvatarCustomizationFHatDefaultA1 = AvatarCustomization<"AVATAR_f_hat_default_A_1">;
export type AvatarCustomizationFHatDefaultA2 = AvatarCustomization<"AVATAR_f_hat_default_A_2">;
export type AvatarCustomizationFHatDefaultA3 = AvatarCustomization<"AVATAR_f_hat_default_A_3">;
export type AvatarCustomizationFHatDefaultA4 = AvatarCustomization<"AVATAR_f_hat_default_A_4">;
export type AvatarCustomizationFHatDefaultA5 = AvatarCustomization<"AVATAR_f_hat_default_A_5">;
export type AvatarCustomizationFHatDefaultB0 = AvatarCustomization<"AVATAR_f_hat_default_B_0">;
export type AvatarCustomizationFHatDefaultB1 = AvatarCustomization<"AVATAR_f_hat_default_B_1">;
export type AvatarCustomizationFHatDeino = AvatarCustomization<"AVATAR_f_hat_deino">;
export type AvatarCustomizationFHatDelibird = AvatarCustomization<"AVATAR_f_hat_delibird">;
export type AvatarCustomizationFHatDetectivepikachu = AvatarCustomization<"AVATAR_f_hat_detectivepikachu">;
export type AvatarCustomizationFHatDiancie = AvatarCustomization<"AVATAR_f_hat_diancie">;
export type AvatarCustomizationFHatDp = AvatarCustomization<"AVATAR_f_hat_dp">;
export type AvatarCustomizationFHatDrifloon0 = AvatarCustomization<"AVATAR_f_hat_drifloon_0">;
export type AvatarCustomizationFHatDrpikachu = AvatarCustomization<"AVATAR_f_hat_drpikachu">;
export type AvatarCustomizationFHatDusclopsmummy = AvatarCustomization<"AVATAR_f_hat_dusclopsmummy">;
export type AvatarCustomizationFHatEeveecap = AvatarCustomization<"AVATAR_f_hat_eeveecap">;
export type AvatarCustomizationFHatElesa = AvatarCustomization<"AVATAR_f_hat_elesa">;
export type AvatarCustomizationFHatEmpty = AvatarCustomization<"AVATAR_f_hat_empty">;
export type AvatarCustomizationFHatFedora0 = AvatarCustomization<"AVATAR_f_hat_fedora_0">;
export type AvatarCustomizationFHatFedora1 = AvatarCustomization<"AVATAR_f_hat_fedora_1">;
export type AvatarCustomizationFHatFlabebepack = AvatarCustomization<"AVATAR_f_hat_flabebepack">;
export type AvatarCustomizationFHatFragment0 = AvatarCustomization<"AVATAR_f_hat_fragment_0">;
export type AvatarCustomizationFHatFrlg0 = AvatarCustomization<"AVATAR_f_hat_frlg_0">;
export type AvatarCustomizationFHatFurfrouwig = AvatarCustomization<"AVATAR_f_hat_furfrouwig">;
export type AvatarCustomizationFHatFw2022 = AvatarCustomization<"AVATAR_f_hat_fw2022">;
export type AvatarCustomizationFHatGalarfarfetchditems = AvatarCustomization<"AVATAR_f_hat_galarfarfetchditems">;
export type AvatarCustomizationFHatGenesecteventitem = AvatarCustomization<"AVATAR_f_hat_genesecteventitem">;
export type AvatarCustomizationFHatGengar0 = AvatarCustomization<"AVATAR_f_hat_gengar_0">;
export type AvatarCustomizationFHatGimmighoulitems = AvatarCustomization<"AVATAR_f_hat_gimmighoulitems">;
export type AvatarCustomizationFHatGiratinaitems = AvatarCustomization<"AVATAR_f_hat_giratinaitems">;
export type AvatarCustomizationFHatGladion = AvatarCustomization<"AVATAR_f_hat_gladion">;
export type AvatarCustomizationFHatGoomy = AvatarCustomization<"AVATAR_f_hat_goomy">;
export type AvatarCustomizationFHatGreavardwig = AvatarCustomization<"AVATAR_f_hat_greavardwig">;
export type AvatarCustomizationFHatGreencoat = AvatarCustomization<"AVATAR_f_hat_greencoat">;
export type AvatarCustomizationFHatGrowlithehelmet = AvatarCustomization<"AVATAR_f_hat_growlithehelmet">;
export type AvatarCustomizationFHatGtr2024eeveefanmask = AvatarCustomization<"AVATAR_f_hat_gtr2024eeveefanmask">;
export type AvatarCustomizationFHatGtr2024pikachufanmask = AvatarCustomization<"AVATAR_f_hat_gtr2024pikachufanmask">;
export type AvatarCustomizationFHatGuccihat = AvatarCustomization<"AVATAR_f_hat_guccihat">;
export type AvatarCustomizationFHatGuzma = AvatarCustomization<"AVATAR_f_hat_guzma">;
export type AvatarCustomizationFHatGyaradoscap = AvatarCustomization<"AVATAR_f_hat_gyaradoscap">;
export type AvatarCustomizationFHatHgss0 = AvatarCustomization<"AVATAR_f_hat_hgss_0">;
export type AvatarCustomizationFHatHoliday2022santacostumes = AvatarCustomization<"AVATAR_f_hat_holiday2022santacostumes">;
export type AvatarCustomizationFHatHolidaybeanie = AvatarCustomization<"AVATAR_f_hat_holidaybeanie">;
export type AvatarCustomizationFHatHoopaearmuffs = AvatarCustomization<"AVATAR_f_hat_hoopaearmuffs">;
export type AvatarCustomizationFHatIngo = AvatarCustomization<"AVATAR_f_hat_ingo">;
export type AvatarCustomizationFHatKantotourcapgreen = AvatarCustomization<"AVATAR_f_hat_kantotourcapgreen">;
export type AvatarCustomizationFHatKantotourcapred = AvatarCustomization<"AVATAR_f_hat_kantotourcapred">;
export type AvatarCustomizationFHatKnitted0 = AvatarCustomization<"AVATAR_f_hat_knitted_0">;
export type AvatarCustomizationFHatKnitted1 = AvatarCustomization<"AVATAR_f_hat_knitted_1">;
export type AvatarCustomizationFHatKorrina = AvatarCustomization<"AVATAR_f_hat_korrina">;
export type AvatarCustomizationFHatLana = AvatarCustomization<"AVATAR_f_hat_lana">;
export type AvatarCustomizationFHatLaprasbandana = AvatarCustomization<"AVATAR_f_hat_laprasbandana">;
export type AvatarCustomizationFHatLasecuritycorps = AvatarCustomization<"AVATAR_f_hat_lasecuritycorps">;
export type AvatarCustomizationFHatLegendofarceus = AvatarCustomization<"AVATAR_f_hat_legendofarceus">;
export type AvatarCustomizationFHatLitwickhat = AvatarCustomization<"AVATAR_f_hat_litwickhat">;
export type AvatarCustomizationFHatLoneearrings = AvatarCustomization<"AVATAR_f_hat_loneearrings">;
export type AvatarCustomizationFHatLvl50cap = AvatarCustomization<"AVATAR_f_hat_lvl50cap">;
export type AvatarCustomizationFHatMagikarp = AvatarCustomization<"AVATAR_f_hat_magikarp">;
export type AvatarCustomizationFHatMareaniehat = AvatarCustomization<"AVATAR_f_hat_mareaniehat">;
export type AvatarCustomizationFHatMegalopunnyitems = AvatarCustomization<"AVATAR_f_hat_megalopunnyitems">;
export type AvatarCustomizationFHatMegarayquaza = AvatarCustomization<"AVATAR_f_hat_megarayquaza">;
export type AvatarCustomizationFHatMeltan = AvatarCustomization<"AVATAR_f_hat_meltan">;
export type AvatarCustomizationFHatMeltanearrings = AvatarCustomization<"AVATAR_f_hat_meltanearrings">;
export type AvatarCustomizationFHatMewtwo = AvatarCustomization<"AVATAR_f_hat_mewtwo">;
export type AvatarCustomizationFHatMimikyu0 = AvatarCustomization<"AVATAR_f_hat_mimikyu_0">;
export type AvatarCustomizationFHatMismagius0 = AvatarCustomization<"AVATAR_f_hat_mismagius_0">;
export type AvatarCustomizationFHatMovie2020 = AvatarCustomization<"AVATAR_f_hat_movie2020">;
export type AvatarCustomizationFHatMunnapack0 = AvatarCustomization<"AVATAR_f_hat_munnapack_0">;
export type AvatarCustomizationFHatMunnapack1 = AvatarCustomization<"AVATAR_f_hat_munnapack_1">;
export type AvatarCustomizationFHatNewyear2022 = AvatarCustomization<"AVATAR_f_hat_newyear2022">;
export type AvatarCustomizationFHatNewyearhat2021 = AvatarCustomization<"AVATAR_f_hat_newyearhat2021">;
export type AvatarCustomizationFHatNewyearhat2023 = AvatarCustomization<"AVATAR_f_hat_newyearhat2023">;
export type AvatarCustomizationFHatNihilegoitems = AvatarCustomization<"AVATAR_f_hat_nihilegoitems">;
export type AvatarCustomizationFHatNoibat = AvatarCustomization<"AVATAR_f_hat_noibat">;
export type AvatarCustomizationFHatObstagoonitems = AvatarCustomization<"AVATAR_f_hat_obstagoonitems">;
export type AvatarCustomizationFHatOras = AvatarCustomization<"AVATAR_f_hat_oras">;
export type AvatarCustomizationFHatOricoriopink = AvatarCustomization<"AVATAR_f_hat_oricorioPink">;
export type AvatarCustomizationFHatOricoriopurple = AvatarCustomization<"AVATAR_f_hat_oricorioPurple">;
export type AvatarCustomizationFHatOricoriored = AvatarCustomization<"AVATAR_f_hat_oricorioRed">;
export type AvatarCustomizationFHatOricorioyellow = AvatarCustomization<"AVATAR_f_hat_oricorioYellow">;
export type AvatarCustomizationFHatPartneritemsjan2024hat = AvatarCustomization<"AVATAR_f_hat_partneritemsjan2024hat">;
export type AvatarCustomizationFHatPhantump = AvatarCustomization<"AVATAR_f_hat_phantump">;
export type AvatarCustomizationFHatPikachucap = AvatarCustomization<"AVATAR_f_hat_pikachucap">;
export type AvatarCustomizationFHatPikachufan0 = AvatarCustomization<"AVATAR_f_hat_pikachufan_0">;
export type AvatarCustomizationFHatPikachulibre = AvatarCustomization<"AVATAR_f_hat_pikachulibre">;
export type AvatarCustomizationFHatPikachupumpkinhead = AvatarCustomization<"AVATAR_f_hat_pikachupumpkinhead">;
export type AvatarCustomizationFHatPkmncap0 = AvatarCustomization<"AVATAR_f_hat_pkmncap_0">;
export type AvatarCustomizationFHatPkmncap1 = AvatarCustomization<"AVATAR_f_hat_pkmncap_1">;
export type AvatarCustomizationFHatPkmncap2 = AvatarCustomization<"AVATAR_f_hat_pkmncap_2">;
export type AvatarCustomizationFHatPoipole = AvatarCustomization<"AVATAR_f_hat_poipole">;
export type AvatarCustomizationFHatProfwillowoutfit = AvatarCustomization<"AVATAR_f_hat_profwillowoutfit">;
export type AvatarCustomizationFHatRegiicejersies = AvatarCustomization<"AVATAR_f_hat_regiicejersies">;
export type AvatarCustomizationFHatRegirockjersies = AvatarCustomization<"AVATAR_f_hat_regirockjersies">;
export type AvatarCustomizationFHatRegisteeljersies = AvatarCustomization<"AVATAR_f_hat_registeeljersies">;
export type AvatarCustomizationFHatRuinmaniac = AvatarCustomization<"AVATAR_f_hat_ruinmaniac">;
export type AvatarCustomizationFHatSableyegoggles = AvatarCustomization<"AVATAR_f_hat_sableyegoggles">;
export type AvatarCustomizationFHatSamsungsummer2020 = AvatarCustomization<"AVATAR_f_hat_samsungsummer2020">;
export type AvatarCustomizationFHatSandygasthat = AvatarCustomization<"AVATAR_f_hat_sandygasthat">;
export type AvatarCustomizationFHatShayminhat = AvatarCustomization<"AVATAR_f_hat_shayminhat">;
export type AvatarCustomizationFHatSlowpoketailshirts = AvatarCustomization<"AVATAR_f_hat_slowpoketailshirts">;
export type AvatarCustomizationFHatSnorlaxnightcap = AvatarCustomization<"AVATAR_f_hat_snorlaxnightcap">;
export type AvatarCustomizationFHatSolgaleoitems = AvatarCustomization<"AVATAR_f_hat_solgaleoitems">;
export type AvatarCustomizationFHatSs = AvatarCustomization<"AVATAR_f_hat_ss">;
export type AvatarCustomizationFHatStantlerheadband = AvatarCustomization<"AVATAR_f_hat_stantlerheadband">;
export type AvatarCustomizationFHatStrawhat = AvatarCustomization<"AVATAR_f_hat_strawhat">;
export type AvatarCustomizationFHatSummer2023 = AvatarCustomization<"AVATAR_f_hat_summer2023">;
export type AvatarCustomizationFHatSvcostumescarletschool = AvatarCustomization<"AVATAR_f_hat_svcostumescarletschool">;
export type AvatarCustomizationFHatSvcostumevioletschool = AvatarCustomization<"AVATAR_f_hat_svcostumevioletschool">;
export type AvatarCustomizationFHatSwshdlc2costume = AvatarCustomization<"AVATAR_f_hat_swshdlc2costume">;
export type AvatarCustomizationFHatSwshuniformchampion = AvatarCustomization<"AVATAR_f_hat_swshuniformchampion">;
export type AvatarCustomizationFHatSylveonitems = AvatarCustomization<"AVATAR_f_hat_sylveonitems">;
export type AvatarCustomizationFHatTcgcollabtshirtandcap = AvatarCustomization<"AVATAR_f_hat_tcgcollabtshirtandcap">;
export type AvatarCustomizationFHatTeamaqua = AvatarCustomization<"AVATAR_f_hat_teamaqua">;
export type AvatarCustomizationFHatTeamleadercap0 = AvatarCustomization<"AVATAR_f_hat_teamleadercap_0">;
export type AvatarCustomizationFHatTeamleadercap1 = AvatarCustomization<"AVATAR_f_hat_teamleadercap_1">;
export type AvatarCustomizationFHatTeamleadercap2 = AvatarCustomization<"AVATAR_f_hat_teamleadercap_2">;
export type AvatarCustomizationFHatTeamrocket0 = AvatarCustomization<"AVATAR_f_hat_teamrocket_0">;
export type AvatarCustomizationFHatTeamrocketcap = AvatarCustomization<"AVATAR_f_hat_teamrocketcap">;
export type AvatarCustomizationFHatTeamskull = AvatarCustomization<"AVATAR_f_hat_teamskull">;
export type AvatarCustomizationFHatTophat0 = AvatarCustomization<"AVATAR_f_hat_tophat_0">;
export type AvatarCustomizationFHatUltrareconsquad = AvatarCustomization<"AVATAR_f_hat_ultraReconSquad">;
export type AvatarCustomizationFHatUltrareconsquadb = AvatarCustomization<"AVATAR_f_hat_ultraReconSquadB">;
export type AvatarCustomizationFHatUltra0 = AvatarCustomization<"AVATAR_f_hat_ultra_0">;
export type AvatarCustomizationFHatVerizon2021 = AvatarCustomization<"AVATAR_f_hat_verizon2021">;
export type AvatarCustomizationFHatWcs2022winnersitems = AvatarCustomization<"AVATAR_f_hat_wcs2022winnersitems">;
export type AvatarCustomizationFHatWhimsicottearmuff = AvatarCustomization<"AVATAR_f_hat_whimsicottearmuff">;
export type AvatarCustomizationFHatWillowglasses = AvatarCustomization<"AVATAR_f_hat_willowglasses">;
export type AvatarCustomizationFHatWoobatearrings = AvatarCustomization<"AVATAR_f_hat_woobatearrings">;
export type AvatarCustomizationFHatYamaskhat = AvatarCustomization<"AVATAR_f_hat_yamaskhat">;
export type AvatarCustomizationFHatYamaskmask = AvatarCustomization<"AVATAR_f_hat_yamaskmask">;
export type AvatarCustomizationFHatZubathat = AvatarCustomization<"AVATAR_f_hat_zubathat">;
export type AvatarCustomizationFJacketNewyear2022 = AvatarCustomization<"AVATAR_f_jacket_newyear2022">;
export type AvatarCustomizationFNecklaceDefault0 = AvatarCustomization<"AVATAR_f_necklace_default_0">;
export type AvatarCustomizationFNecklaceDefault1 = AvatarCustomization<"AVATAR_f_necklace_default_1">;
export type AvatarCustomizationFNecklaceEmpty = AvatarCustomization<"AVATAR_f_necklace_empty">;
export type AvatarCustomizationFNecklaceHeart0 = AvatarCustomization<"AVATAR_f_necklace_heart_0">;
export type AvatarCustomizationFNecklaceStar0 = AvatarCustomization<"AVATAR_f_necklace_star_0">;
export type AvatarCustomizationFPants6thanniversary = AvatarCustomization<"AVATAR_f_pants_6thanniversary">;
export type AvatarCustomizationFPants7thanniversary = AvatarCustomization<"AVATAR_f_pants_7thanniversary">;
export type AvatarCustomizationFPantsAcetrainerbw = AvatarCustomization<"AVATAR_f_pants_acetrainerbw">;
export type AvatarCustomizationFPantsAnimegou = AvatarCustomization<"AVATAR_f_pants_animegou">;
export type AvatarCustomizationFPantsBackpacker = AvatarCustomization<"AVATAR_f_pants_backpacker">;
export type AvatarCustomizationFPantsBattlegirl0 = AvatarCustomization<"AVATAR_f_pants_battlegirl_0">;
export type AvatarCustomizationFPantsBounsweetitems = AvatarCustomization<"AVATAR_f_pants_bounsweetitems">;
export type AvatarCustomizationFPantsBwn = AvatarCustomization<"AVATAR_f_pants_bwn">;
export type AvatarCustomizationFPantsCasual0 = AvatarCustomization<"AVATAR_f_pants_casual_0">;
export type AvatarCustomizationFPantsCasual1 = AvatarCustomization<"AVATAR_f_pants_casual_1">;
export type AvatarCustomizationFPantsClay = AvatarCustomization<"AVATAR_f_pants_clay">;
export type AvatarCustomizationFPantsDefault0 = AvatarCustomization<"AVATAR_f_pants_default_0">;
export type AvatarCustomizationFPantsDefault1 = AvatarCustomization<"AVATAR_f_pants_default_1">;
export type AvatarCustomizationFPantsDefault2 = AvatarCustomization<"AVATAR_f_pants_default_2">;
export type AvatarCustomizationFPantsDefault3 = AvatarCustomization<"AVATAR_f_pants_default_3">;
export type AvatarCustomizationFPantsDefault4 = AvatarCustomization<"AVATAR_f_pants_default_4">;
export type AvatarCustomizationFPantsDefault5 = AvatarCustomization<"AVATAR_f_pants_default_5">;
export type AvatarCustomizationFPantsDenimfashionweek2023 = AvatarCustomization<"AVATAR_f_pants_denimfashionweek2023">;
export type AvatarCustomizationFPantsDp = AvatarCustomization<"AVATAR_f_pants_dp">;
export type AvatarCustomizationFPantsFashionweek2022 = AvatarCustomization<"AVATAR_f_pants_fashionWeek2022">;
export type AvatarCustomizationFPantsFlabebepack = AvatarCustomization<"AVATAR_f_pants_flabebepack">;
export type AvatarCustomizationFPantsFrlg0 = AvatarCustomization<"AVATAR_f_pants_frlg_0">;
export type AvatarCustomizationFPantsFw2022 = AvatarCustomization<"AVATAR_f_pants_fw2022">;
export type AvatarCustomizationFPantsGeeta = AvatarCustomization<"AVATAR_f_pants_geeta">;
export type AvatarCustomizationFPantsGenderlessskirt = AvatarCustomization<"AVATAR_f_pants_genderlessskirt">;
export type AvatarCustomizationFPantsGiovanni = AvatarCustomization<"AVATAR_f_pants_giovanni">;
export type AvatarCustomizationFPantsGladion = AvatarCustomization<"AVATAR_f_pants_gladion">;
export type AvatarCustomizationFPantsGothitelleitems = AvatarCustomization<"AVATAR_f_pants_gothitelleitems">;
export type AvatarCustomizationFPantsGreen = AvatarCustomization<"AVATAR_f_pants_green">;
export type AvatarCustomizationFPantsGreencoat = AvatarCustomization<"AVATAR_f_pants_greencoat">;
export type AvatarCustomizationFPantsGuzma = AvatarCustomization<"AVATAR_f_pants_guzma">;
export type AvatarCustomizationFPantsGymleader0 = AvatarCustomization<"AVATAR_f_pants_gymleader_0">;
export type AvatarCustomizationFPantsGymleader1 = AvatarCustomization<"AVATAR_f_pants_gymleader_1">;
export type AvatarCustomizationFPantsGymleader2 = AvatarCustomization<"AVATAR_f_pants_gymleader_2">;
export type AvatarCustomizationFPantsHala = AvatarCustomization<"AVATAR_f_pants_hala">;
export type AvatarCustomizationFPantsHgss0 = AvatarCustomization<"AVATAR_f_pants_hgss_0">;
export type AvatarCustomizationFPantsIngo = AvatarCustomization<"AVATAR_f_pants_ingo">;
export type AvatarCustomizationFPantsLoosepants = AvatarCustomization<"AVATAR_f_pants_loosepants">;
export type AvatarCustomizationFPantsLunalaitems = AvatarCustomization<"AVATAR_f_pants_lunalaitems">;
export type AvatarCustomizationFPantsLuvdiscpack = AvatarCustomization<"AVATAR_f_pants_luvdiscpack">;
export type AvatarCustomizationFPantsLysandre = AvatarCustomization<"AVATAR_f_pants_lysandre">;
export type AvatarCustomizationFPantsMewtwo = AvatarCustomization<"AVATAR_f_pants_mewtwo">;
export type AvatarCustomizationFPantsMiniskirt0 = AvatarCustomization<"AVATAR_f_pants_miniskirt_0">;
export type AvatarCustomizationFPantsMiniskirt1 = AvatarCustomization<"AVATAR_f_pants_miniskirt_1">;
export type AvatarCustomizationFPantsMiniskirt2 = AvatarCustomization<"AVATAR_f_pants_miniskirt_2">;
export type AvatarCustomizationFPantsMiniskirt3 = AvatarCustomization<"AVATAR_f_pants_miniskirt_3">;
export type AvatarCustomizationFPantsMiniskirtWave0 = AvatarCustomization<"AVATAR_f_pants_miniskirt_wave_0">;
export type AvatarCustomizationFPantsMiniskirtWave1 = AvatarCustomization<"AVATAR_f_pants_miniskirt_wave_1">;
export type AvatarCustomizationFPantsMiniskirtWave2 = AvatarCustomization<"AVATAR_f_pants_miniskirt_wave_2">;
export type AvatarCustomizationFPantsMisty = AvatarCustomization<"AVATAR_f_pants_misty">;
export type AvatarCustomizationFPantsMunnapack = AvatarCustomization<"AVATAR_f_pants_munnapack">;
export type AvatarCustomizationFPantsNeonSolid0 = AvatarCustomization<"AVATAR_f_pants_neon_solid_0">;
export type AvatarCustomizationFPantsNeonSolid1 = AvatarCustomization<"AVATAR_f_pants_neon_solid_1">;
export type AvatarCustomizationFPantsNeonSolid2 = AvatarCustomization<"AVATAR_f_pants_neon_solid_2">;
export type AvatarCustomizationFPantsNeonStripes0 = AvatarCustomization<"AVATAR_f_pants_neon_stripes_0">;
export type AvatarCustomizationFPantsNeonStripes1 = AvatarCustomization<"AVATAR_f_pants_neon_stripes_1">;
export type AvatarCustomizationFPantsNewyear2022 = AvatarCustomization<"AVATAR_f_pants_newyear2022">;
export type AvatarCustomizationFPantsOras = AvatarCustomization<"AVATAR_f_pants_oras">;
export type AvatarCustomizationFPantsPajamas20220 = AvatarCustomization<"AVATAR_f_pants_pajamas2022_0">;
export type AvatarCustomizationFPantsPajamas20221 = AvatarCustomization<"AVATAR_f_pants_pajamas2022_1">;
export type AvatarCustomizationFPantsPalmer = AvatarCustomization<"AVATAR_f_pants_palmer">;
export type AvatarCustomizationFPantsPikachufan0 = AvatarCustomization<"AVATAR_f_pants_pikachufan_0">;
export type AvatarCustomizationFPantsPikachulibre = AvatarCustomization<"AVATAR_f_pants_pikachulibre">;
export type AvatarCustomizationFPantsProfwillowoutfit = AvatarCustomization<"AVATAR_f_pants_profwillowoutfit">;
export type AvatarCustomizationFPantsPumpkabooitems = AvatarCustomization<"AVATAR_f_pants_pumpkabooitems">;
export type AvatarCustomizationFPantsRegiicejersies = AvatarCustomization<"AVATAR_f_pants_regiicejersies">;
export type AvatarCustomizationFPantsRegirockjersies = AvatarCustomization<"AVATAR_f_pants_regirockjersies">;
export type AvatarCustomizationFPantsRegisteeljersies = AvatarCustomization<"AVATAR_f_pants_registeeljersies">;
export type AvatarCustomizationFPantsShorts0 = AvatarCustomization<"AVATAR_f_pants_shorts_0">;
export type AvatarCustomizationFPantsShorts1 = AvatarCustomization<"AVATAR_f_pants_shorts_1">;
export type AvatarCustomizationFPantsShorts2 = AvatarCustomization<"AVATAR_f_pants_shorts_2">;
export type AvatarCustomizationFPantsShorts3 = AvatarCustomization<"AVATAR_f_pants_shorts_3">;
export type AvatarCustomizationFPantsSkinnyjeans0 = AvatarCustomization<"AVATAR_f_pants_skinnyjeans_0">;
export type AvatarCustomizationFPantsSteven = AvatarCustomization<"AVATAR_f_pants_steven">;
export type AvatarCustomizationFPantsStevenfirst = AvatarCustomization<"AVATAR_f_pants_stevenfirst">;
export type AvatarCustomizationFPantsSwshdlc2costume = AvatarCustomization<"AVATAR_f_pants_swshdlc2costume">;
export type AvatarCustomizationFPantsSwshuniformchampion = AvatarCustomization<"AVATAR_f_pants_swshuniformchampion">;
export type AvatarCustomizationFPantsSwshuniformdark = AvatarCustomization<"AVATAR_f_pants_swshuniformdark">;
export type AvatarCustomizationFPantsSwshuniformdefault = AvatarCustomization<"AVATAR_f_pants_swshuniformdefault">;
export type AvatarCustomizationFPantsSwshuniformdragon = AvatarCustomization<"AVATAR_f_pants_swshuniformdragon">;
export type AvatarCustomizationFPantsTeamaqua = AvatarCustomization<"AVATAR_f_pants_teamaqua">;
export type AvatarCustomizationFPantsTeamblanche = AvatarCustomization<"AVATAR_f_pants_teamblanche">;
export type AvatarCustomizationFPantsTeamcandela = AvatarCustomization<"AVATAR_f_pants_teamcandela">;
export type AvatarCustomizationFPantsTeammagma = AvatarCustomization<"AVATAR_f_pants_teammagma">;
export type AvatarCustomizationFPantsTeamrocket0 = AvatarCustomization<"AVATAR_f_pants_teamrocket_0">;
export type AvatarCustomizationFPantsTeamskull = AvatarCustomization<"AVATAR_f_pants_teamskull">;
export type AvatarCustomizationFPantsTeamspark = AvatarCustomization<"AVATAR_f_pants_teamspark">;
export type AvatarCustomizationFPantsTurbine0 = AvatarCustomization<"AVATAR_f_pants_turbine_0">;
export type AvatarCustomizationFPantsTurbine1 = AvatarCustomization<"AVATAR_f_pants_turbine_1">;
export type AvatarCustomizationFPantsTurbine2 = AvatarCustomization<"AVATAR_f_pants_turbine_2">;
export type AvatarCustomizationFPantsUltra0 = AvatarCustomization<"AVATAR_f_pants_ultra_0">;
export type AvatarCustomizationFPantsVeterantrainerxy = AvatarCustomization<"AVATAR_f_pants_veterantrainerxy">;
export type AvatarCustomizationFPantsWcs2022winnersitems = AvatarCustomization<"AVATAR_f_pants_wcs2022winnersitems">;
export type AvatarCustomizationFPose01 = AvatarCustomization<"AVATAR_f_pose_01">;
export type AvatarCustomizationFPose02 = AvatarCustomization<"AVATAR_f_pose_02">;
export type AvatarCustomizationFPose03 = AvatarCustomization<"AVATAR_f_pose_03">;
export type AvatarCustomizationFPose04 = AvatarCustomization<"AVATAR_f_pose_04">;
export type AvatarCustomizationFPose05 = AvatarCustomization<"AVATAR_f_pose_05">;
export type AvatarCustomizationFPose06 = AvatarCustomization<"AVATAR_f_pose_06">;
export type AvatarCustomizationFPose07 = AvatarCustomization<"AVATAR_f_pose_07">;
export type AvatarCustomizationFPose08 = AvatarCustomization<"AVATAR_f_pose_08">;
export type AvatarCustomizationFPose09 = AvatarCustomization<"AVATAR_f_pose_09">;
export type AvatarCustomizationFPose10 = AvatarCustomization<"AVATAR_f_pose_10">;
export type AvatarCustomizationFPose11 = AvatarCustomization<"AVATAR_f_pose_11">;
export type AvatarCustomizationFPose12 = AvatarCustomization<"AVATAR_f_pose_12">;
export type AvatarCustomizationFPose13 = AvatarCustomization<"AVATAR_f_pose_13">;
export type AvatarCustomizationFPose14 = AvatarCustomization<"AVATAR_f_pose_14">;
export type AvatarCustomizationFPose15 = AvatarCustomization<"AVATAR_f_pose_15">;
export type AvatarCustomizationFPose16 = AvatarCustomization<"AVATAR_f_pose_16">;
export type AvatarCustomizationFPose17 = AvatarCustomization<"AVATAR_f_pose_17">;
export type AvatarCustomizationFPose18 = AvatarCustomization<"AVATAR_f_pose_18">;
export type AvatarCustomizationFPose19 = AvatarCustomization<"AVATAR_f_pose_19">;
export type AvatarCustomizationFPose20 = AvatarCustomization<"AVATAR_f_pose_20">;
export type AvatarCustomizationFPose21 = AvatarCustomization<"AVATAR_f_pose_21">;
export type AvatarCustomizationFPose22 = AvatarCustomization<"AVATAR_f_pose_22">;
export type AvatarCustomizationFPose23 = AvatarCustomization<"AVATAR_f_pose_23">;
export type AvatarCustomizationFPose24 = AvatarCustomization<"AVATAR_f_pose_24">;
export type AvatarCustomizationFPose25 = AvatarCustomization<"AVATAR_f_pose_25">;
export type AvatarCustomizationFPose26 = AvatarCustomization<"AVATAR_f_pose_26">;
export type AvatarCustomizationFPose27 = AvatarCustomization<"AVATAR_f_pose_27">;
export type AvatarCustomizationFPose28 = AvatarCustomization<"AVATAR_f_pose_28">;
export type AvatarCustomizationFPose29 = AvatarCustomization<"AVATAR_f_pose_29">;
export type AvatarCustomizationFPose30 = AvatarCustomization<"AVATAR_f_pose_30">;
export type AvatarCustomizationFPose31 = AvatarCustomization<"AVATAR_f_pose_31">;
export type AvatarCustomizationFPose32 = AvatarCustomization<"AVATAR_f_pose_32">;
export type AvatarCustomizationFPose33 = AvatarCustomization<"AVATAR_f_pose_33">;
export type AvatarCustomizationFPose34 = AvatarCustomization<"AVATAR_f_pose_34">;
export type AvatarCustomizationFPose35 = AvatarCustomization<"AVATAR_f_pose_35">;
export type AvatarCustomizationFPose36 = AvatarCustomization<"AVATAR_f_pose_36">;
export type AvatarCustomizationFPose37 = AvatarCustomization<"AVATAR_f_pose_37">;
export type AvatarCustomizationFPose38 = AvatarCustomization<"AVATAR_f_pose_38">;
export type AvatarCustomizationFPose39 = AvatarCustomization<"AVATAR_f_pose_39">;
export type AvatarCustomizationFPose40 = AvatarCustomization<"AVATAR_f_pose_40">;
export type AvatarCustomizationFPose41 = AvatarCustomization<"AVATAR_f_pose_41">;
export type AvatarCustomizationFPose43 = AvatarCustomization<"AVATAR_f_pose_43">;
export type AvatarCustomizationFPose44 = AvatarCustomization<"AVATAR_f_pose_44">;
export type AvatarCustomizationFPose45 = AvatarCustomization<"AVATAR_f_pose_45">;
export type AvatarCustomizationFPose46 = AvatarCustomization<"AVATAR_f_pose_46">;
export type AvatarCustomizationFPose47 = AvatarCustomization<"AVATAR_f_pose_47">;
export type AvatarCustomizationFPose48 = AvatarCustomization<"AVATAR_f_pose_48">;
export type AvatarCustomizationFPose49 = AvatarCustomization<"AVATAR_f_pose_49">;
export type AvatarCustomizationFPose50 = AvatarCustomization<"AVATAR_f_pose_50">;
export type AvatarCustomizationFPose51 = AvatarCustomization<"AVATAR_f_pose_51">;
export type AvatarCustomizationFPose52 = AvatarCustomization<"AVATAR_f_pose_52">;
export type AvatarCustomizationFPose53 = AvatarCustomization<"AVATAR_f_pose_53">;
export type AvatarCustomizationFPose54 = AvatarCustomization<"AVATAR_f_pose_54">;
export type AvatarCustomizationFPose55 = AvatarCustomization<"AVATAR_f_pose_55">;
export type AvatarCustomizationFPose56 = AvatarCustomization<"AVATAR_f_pose_56">;
export type AvatarCustomizationFPose57 = AvatarCustomization<"AVATAR_f_pose_57">;
export type AvatarCustomizationFPose58 = AvatarCustomization<"AVATAR_f_pose_58">;
export type AvatarCustomizationFPose59 = AvatarCustomization<"AVATAR_f_pose_59">;
export type AvatarCustomizationFPose60 = AvatarCustomization<"AVATAR_f_pose_60">;
export type AvatarCustomizationFPose61 = AvatarCustomization<"AVATAR_f_pose_61">;
export type AvatarCustomizationFPose62 = AvatarCustomization<"AVATAR_f_pose_62">;
export type AvatarCustomizationFPose63 = AvatarCustomization<"AVATAR_f_pose_63">;
export type AvatarCustomizationFPose64 = AvatarCustomization<"AVATAR_f_pose_64">;
export type AvatarCustomizationFPoseEmpty = AvatarCustomization<"AVATAR_f_pose_empty">;
export type AvatarCustomizationFShirt6thanniversary = AvatarCustomization<"AVATAR_f_shirt_6thanniversary">;
export type AvatarCustomizationFShirt7thanniversary = AvatarCustomization<"AVATAR_f_shirt_7thanniversary">;
export type AvatarCustomizationFShirtAcetrainerbw = AvatarCustomization<"AVATAR_f_shirt_acetrainerbw">;
export type AvatarCustomizationFShirtAcetrainersm = AvatarCustomization<"AVATAR_f_shirt_acetrainersm">;
export type AvatarCustomizationFShirtAlolacomfey = AvatarCustomization<"AVATAR_f_shirt_alolacomfey">;
export type AvatarCustomizationFShirtAnimegou = AvatarCustomization<"AVATAR_f_shirt_animegou">;
export type AvatarCustomizationFShirtAseries = AvatarCustomization<"AVATAR_f_shirt_aseries">;
export type AvatarCustomizationFShirtBackpacker = AvatarCustomization<"AVATAR_f_shirt_backpacker">;
export type AvatarCustomizationFShirtBallguy = AvatarCustomization<"AVATAR_f_shirt_ballguy">;
export type AvatarCustomizationFShirtBattlegirl0 = AvatarCustomization<"AVATAR_f_shirt_battlegirl_0">;
export type AvatarCustomizationFShirtBea = AvatarCustomization<"AVATAR_f_shirt_bea">;
export type AvatarCustomizationFShirtBounsweetitems = AvatarCustomization<"AVATAR_f_shirt_bounsweetitems">;
export type AvatarCustomizationFShirtButtondown0 = AvatarCustomization<"AVATAR_f_shirt_buttondown_0">;
export type AvatarCustomizationFShirtBuzzwoleitems = AvatarCustomization<"AVATAR_f_shirt_buzzwoleitems">;
export type AvatarCustomizationFShirtBwn = AvatarCustomization<"AVATAR_f_shirt_bwn">;
export type AvatarCustomizationFShirtCasual0 = AvatarCustomization<"AVATAR_f_shirt_casual_0">;
export type AvatarCustomizationFShirtCasual1 = AvatarCustomization<"AVATAR_f_shirt_casual_1">;
export type AvatarCustomizationFShirtCasual2 = AvatarCustomization<"AVATAR_f_shirt_casual_2">;
export type AvatarCustomizationFShirtCasual3 = AvatarCustomization<"AVATAR_f_shirt_casual_3">;
export type AvatarCustomizationFShirtCelebi0 = AvatarCustomization<"AVATAR_f_shirt_celebi_0">;
export type AvatarCustomizationFShirtChimcharonesie = AvatarCustomization<"AVATAR_f_shirt_chimcharonesie">;
export type AvatarCustomizationFShirtClay = AvatarCustomization<"AVATAR_f_shirt_clay">;
export type AvatarCustomizationFShirtCofagrigusitems = AvatarCustomization<"AVATAR_f_shirt_cofagrigusitems">;
export type AvatarCustomizationFShirtCosmog = AvatarCustomization<"AVATAR_f_shirt_cosmog">;
export type AvatarCustomizationFShirtCowichansweater = AvatarCustomization<"AVATAR_f_shirt_cowichansweater">;
export type AvatarCustomizationFShirtDayofdead = AvatarCustomization<"AVATAR_f_shirt_dayofdead">;
export type AvatarCustomizationFShirtDefault0 = AvatarCustomization<"AVATAR_f_shirt_default_0">;
export type AvatarCustomizationFShirtDefault1 = AvatarCustomization<"AVATAR_f_shirt_default_1">;
export type AvatarCustomizationFShirtDefault2 = AvatarCustomization<"AVATAR_f_shirt_default_2">;
export type AvatarCustomizationFShirtDefault3 = AvatarCustomization<"AVATAR_f_shirt_default_3">;
export type AvatarCustomizationFShirtDefault4 = AvatarCustomization<"AVATAR_f_shirt_default_4">;
export type AvatarCustomizationFShirtDefault5 = AvatarCustomization<"AVATAR_f_shirt_default_5">;
export type AvatarCustomizationFShirtDefault6 = AvatarCustomization<"AVATAR_f_shirt_default_6">;
export type AvatarCustomizationFShirtDefault7 = AvatarCustomization<"AVATAR_f_shirt_default_7">;
export type AvatarCustomizationFShirtDefault8 = AvatarCustomization<"AVATAR_f_shirt_default_8">;
export type AvatarCustomizationFShirtDelibird = AvatarCustomization<"AVATAR_f_shirt_delibird">;
export type AvatarCustomizationFShirtDelibirdonesie = AvatarCustomization<"AVATAR_f_shirt_delibirdonesie">;
export type AvatarCustomizationFShirtDenimfashionweek2023 = AvatarCustomization<"AVATAR_f_shirt_denimfashionweek2023">;
export type AvatarCustomizationFShirtDenimjacket = AvatarCustomization<"AVATAR_f_shirt_denimjacket">;
export type AvatarCustomizationFShirtDetectivepikachu = AvatarCustomization<"AVATAR_f_shirt_detectivepikachu">;
export type AvatarCustomizationFShirtDiancie = AvatarCustomization<"AVATAR_f_shirt_diancie">;
export type AvatarCustomizationFShirtDivingsuit = AvatarCustomization<"AVATAR_f_shirt_divingsuit">;
export type AvatarCustomizationFShirtDiwali2021 = AvatarCustomization<"AVATAR_f_shirt_diwali2021">;
export type AvatarCustomizationFShirtDp = AvatarCustomization<"AVATAR_f_shirt_dp">;
export type AvatarCustomizationFShirtDrifblim0 = AvatarCustomization<"AVATAR_f_shirt_drifblim_0">;
export type AvatarCustomizationFShirtDusclopsmummy = AvatarCustomization<"AVATAR_f_shirt_dusclopsmummy">;
export type AvatarCustomizationFShirtEarthday2018 = AvatarCustomization<"AVATAR_f_shirt_earthday_2018">;
export type AvatarCustomizationFShirtEeveestshirt00 = AvatarCustomization<"AVATAR_f_shirt_eeveestshirt_00">;
export type AvatarCustomizationFShirtEeveestshirt01 = AvatarCustomization<"AVATAR_f_shirt_eeveestshirt_01">;
export type AvatarCustomizationFShirtEeveestshirt02 = AvatarCustomization<"AVATAR_f_shirt_eeveestshirt_02">;
export type AvatarCustomizationFShirtEeveestshirt03 = AvatarCustomization<"AVATAR_f_shirt_eeveestshirt_03">;
export type AvatarCustomizationFShirtEeveestshirt04 = AvatarCustomization<"AVATAR_f_shirt_eeveestshirt_04">;
export type AvatarCustomizationFShirtEeveestshirt05 = AvatarCustomization<"AVATAR_f_shirt_eeveestshirt_05">;
export type AvatarCustomizationFShirtEeveestshirt06 = AvatarCustomization<"AVATAR_f_shirt_eeveestshirt_06">;
export type AvatarCustomizationFShirtEeveestshirt07 = AvatarCustomization<"AVATAR_f_shirt_eeveestshirt_07">;
export type AvatarCustomizationFShirtEeveestshirt08 = AvatarCustomization<"AVATAR_f_shirt_eeveestshirt_08">;
export type AvatarCustomizationFShirtElesa = AvatarCustomization<"AVATAR_f_shirt_elesa">;
export type AvatarCustomizationFShirtFashionweek2022 = AvatarCustomization<"AVATAR_f_shirt_fashionWeek2022">;
export type AvatarCustomizationFShirtFestivaloflights00 = AvatarCustomization<"AVATAR_f_shirt_festivaloflights_00">;
export type AvatarCustomizationFShirtFestivaloflights01 = AvatarCustomization<"AVATAR_f_shirt_festivaloflights_01">;
export type AvatarCustomizationFShirtFlabebepack = AvatarCustomization<"AVATAR_f_shirt_flabebepack">;
export type AvatarCustomizationFShirtFragment0 = AvatarCustomization<"AVATAR_f_shirt_fragment_0">;
export type AvatarCustomizationFShirtFrlg0 = AvatarCustomization<"AVATAR_f_shirt_frlg_0">;
export type AvatarCustomizationFShirtFw2022 = AvatarCustomization<"AVATAR_f_shirt_fw2022">;
export type AvatarCustomizationFShirtGalarfarfetchditems = AvatarCustomization<"AVATAR_f_shirt_galarfarfetchditems">;
export type AvatarCustomizationFShirtGalaxyoutfit = AvatarCustomization<"AVATAR_f_shirt_galaxyoutfit">;
export type AvatarCustomizationFShirtGeeta = AvatarCustomization<"AVATAR_f_shirt_geeta">;
export type AvatarCustomizationFShirtGenderlessskirt = AvatarCustomization<"AVATAR_f_shirt_genderlessskirt">;
export type AvatarCustomizationFShirtGengar0 = AvatarCustomization<"AVATAR_f_shirt_gengar_0">;
export type AvatarCustomizationFShirtGengaronesie = AvatarCustomization<"AVATAR_f_shirt_gengaronesie">;
export type AvatarCustomizationFShirtGiovanni = AvatarCustomization<"AVATAR_f_shirt_giovanni">;
export type AvatarCustomizationFShirtGiratinaitems = AvatarCustomization<"AVATAR_f_shirt_giratinaitems">;
export type AvatarCustomizationFShirtGladion = AvatarCustomization<"AVATAR_f_shirt_gladion">;
export type AvatarCustomizationFShirtGofest2022 = AvatarCustomization<"AVATAR_f_shirt_gofest2022">;
export type AvatarCustomizationFShirtGofest2023 = AvatarCustomization<"AVATAR_f_shirt_gofest2023">;
export type AvatarCustomizationFShirtGofest2024darkgray = AvatarCustomization<"AVATAR_f_shirt_gofest2024darkgray">;
export type AvatarCustomizationFShirtGofest2024gray = AvatarCustomization<"AVATAR_f_shirt_gofest2024gray">;
export type AvatarCustomizationFShirtGofest2024purple = AvatarCustomization<"AVATAR_f_shirt_gofest2024purple">;
export type AvatarCustomizationFShirtGofest2019 = AvatarCustomization<"AVATAR_f_shirt_gofest_2019">;
export type AvatarCustomizationFShirtGofest2020 = AvatarCustomization<"AVATAR_f_shirt_gofest_2020">;
export type AvatarCustomizationFShirtGofest2021 = AvatarCustomization<"AVATAR_f_shirt_gofest_2021">;
export type AvatarCustomizationFShirtGofestglobal2023 = AvatarCustomization<"AVATAR_f_shirt_gofestglobal2023">;
export type AvatarCustomizationFShirtGoteamrocketarlo = AvatarCustomization<"AVATAR_f_shirt_goteamrocketarlo">;
export type AvatarCustomizationFShirtGoteamrocketcliff = AvatarCustomization<"AVATAR_f_shirt_goteamrocketcliff">;
export type AvatarCustomizationFShirtGoteamrocketsierra = AvatarCustomization<"AVATAR_f_shirt_goteamrocketsierra">;
export type AvatarCustomizationFShirtGothitelleitems = AvatarCustomization<"AVATAR_f_shirt_gothitelleitems">;
export type AvatarCustomizationFShirtGotour2023 = AvatarCustomization<"AVATAR_f_shirt_gotour2023">;
export type AvatarCustomizationFShirtGotour2024 = AvatarCustomization<"AVATAR_f_shirt_gotour2024">;
export type AvatarCustomizationFShirtGreedentsweater = AvatarCustomization<"AVATAR_f_shirt_greedentsweater">;
export type AvatarCustomizationFShirtGreen = AvatarCustomization<"AVATAR_f_shirt_green">;
export type AvatarCustomizationFShirtGreencoat = AvatarCustomization<"AVATAR_f_shirt_greencoat">;
export type AvatarCustomizationFShirtGtrtshirt202200 = AvatarCustomization<"AVATAR_f_shirt_gtrtshirt2022_00">;
export type AvatarCustomizationFShirtGtrtshirt202201 = AvatarCustomization<"AVATAR_f_shirt_gtrtshirt2022_01">;
export type AvatarCustomizationFShirtGuccitshirts = AvatarCustomization<"AVATAR_f_shirt_guccitshirts">;
export type AvatarCustomizationFShirtGuzma = AvatarCustomization<"AVATAR_f_shirt_guzma">;
export type AvatarCustomizationFShirtGymleader0 = AvatarCustomization<"AVATAR_f_shirt_gymleader_0">;
export type AvatarCustomizationFShirtGymleader1 = AvatarCustomization<"AVATAR_f_shirt_gymleader_1">;
export type AvatarCustomizationFShirtGymleader2 = AvatarCustomization<"AVATAR_f_shirt_gymleader_2">;
export type AvatarCustomizationFShirtHala = AvatarCustomization<"AVATAR_f_shirt_hala">;
export type AvatarCustomizationFShirtHappi = AvatarCustomization<"AVATAR_f_shirt_happi">;
export type AvatarCustomizationFShirtHappi1 = AvatarCustomization<"AVATAR_f_shirt_happi_1">;
export type AvatarCustomizationFShirtHappi2 = AvatarCustomization<"AVATAR_f_shirt_happi_2">;
export type AvatarCustomizationFShirtHgss0 = AvatarCustomization<"AVATAR_f_shirt_hgss_0">;
export type AvatarCustomizationFShirtHoliday2022santacostumes = AvatarCustomization<"AVATAR_f_shirt_holiday2022santacostumes">;
export type AvatarCustomizationFShirtHolifestival2021black = AvatarCustomization<"AVATAR_f_shirt_holifestival2021black">;
export type AvatarCustomizationFShirtHolifestival2021white = AvatarCustomization<"AVATAR_f_shirt_holifestival2021white">;
export type AvatarCustomizationFShirtHoopaunboundtshirt = AvatarCustomization<"AVATAR_f_shirt_hoopaunboundtshirt">;
export type AvatarCustomizationFShirtIngo = AvatarCustomization<"AVATAR_f_shirt_ingo">;
export type AvatarCustomizationFShirtIngress0 = AvatarCustomization<"AVATAR_f_shirt_ingress_0">;
export type AvatarCustomizationFShirtIngressE0 = AvatarCustomization<"AVATAR_f_shirt_ingress_e_0">;
export type AvatarCustomizationFShirtIngressR0 = AvatarCustomization<"AVATAR_f_shirt_ingress_r_0">;
export type AvatarCustomizationFShirtJessie = AvatarCustomization<"AVATAR_f_shirt_jessie">;
export type AvatarCustomizationFShirtJirachi = AvatarCustomization<"AVATAR_f_shirt_jirachi">;
export type AvatarCustomizationFShirtKeldeotshirt = AvatarCustomization<"AVATAR_f_shirt_keldeotshirt">;
export type AvatarCustomizationFShirtKorrina = AvatarCustomization<"AVATAR_f_shirt_korrina">;
export type AvatarCustomizationFShirtLadiamondoutfit = AvatarCustomization<"AVATAR_f_shirt_ladiamondoutfit">;
export type AvatarCustomizationFShirtLana = AvatarCustomization<"AVATAR_f_shirt_lana">;
export type AvatarCustomizationFShirtLapearloutfit = AvatarCustomization<"AVATAR_f_shirt_lapearloutfit">;
export type AvatarCustomizationFShirtLasecuritycorps = AvatarCustomization<"AVATAR_f_shirt_lasecuritycorps">;
export type AvatarCustomizationFShirtLatiasLatios0 = AvatarCustomization<"AVATAR_f_shirt_latias_latios_0">;
export type AvatarCustomizationFShirtLegendofarceus = AvatarCustomization<"AVATAR_f_shirt_legendofarceus">;
export type AvatarCustomizationFShirtLuvdiscpack = AvatarCustomization<"AVATAR_f_shirt_luvdiscpack">;
export type AvatarCustomizationFShirtLvl50 = AvatarCustomization<"AVATAR_f_shirt_lvl50">;
export type AvatarCustomizationFShirtLvl501 = AvatarCustomization<"AVATAR_f_shirt_lvl50_1">;
export type AvatarCustomizationFShirtLysandre = AvatarCustomization<"AVATAR_f_shirt_lysandre">;
export type AvatarCustomizationFShirtMarshadowtshirt = AvatarCustomization<"AVATAR_f_shirt_marshadowtshirt">;
export type AvatarCustomizationFShirtMegalopunnyitems = AvatarCustomization<"AVATAR_f_shirt_megalopunnyitems">;
export type AvatarCustomizationFShirtMegarayquaza = AvatarCustomization<"AVATAR_f_shirt_megarayquaza">;
export type AvatarCustomizationFShirtMelmetaljacket = AvatarCustomization<"AVATAR_f_shirt_melmetaljacket">;
export type AvatarCustomizationFShirtMelmetalvest = AvatarCustomization<"AVATAR_f_shirt_melmetalvest">;
export type AvatarCustomizationFShirtMeloettatshirt = AvatarCustomization<"AVATAR_f_shirt_meloettatshirt">;
export type AvatarCustomizationFShirtMeltan = AvatarCustomization<"AVATAR_f_shirt_meltan">;
export type AvatarCustomizationFShirtMew0 = AvatarCustomization<"AVATAR_f_shirt_mew_0">;
export type AvatarCustomizationFShirtMewtwo = AvatarCustomization<"AVATAR_f_shirt_mewtwo">;
export type AvatarCustomizationFShirtMisty = AvatarCustomization<"AVATAR_f_shirt_misty">;
export type AvatarCustomizationFShirtMovie2020jessiejames = AvatarCustomization<"AVATAR_f_shirt_movie2020jessiejames">;
export type AvatarCustomizationFShirtMunnapack = AvatarCustomization<"AVATAR_f_shirt_munnapack">;
export type AvatarCustomizationFShirtNike2021 = AvatarCustomization<"AVATAR_f_shirt_nike2021">;
export type AvatarCustomizationFShirtOcshirt045 = AvatarCustomization<"AVATAR_f_shirt_ocshirt_045">;
export type AvatarCustomizationFShirtOcshirt108 = AvatarCustomization<"AVATAR_f_shirt_ocshirt_108">;
export type AvatarCustomizationFShirtOcshirt129 = AvatarCustomization<"AVATAR_f_shirt_ocshirt_129">;
export type AvatarCustomizationFShirtOcshirt143 = AvatarCustomization<"AVATAR_f_shirt_ocshirt_143">;
export type AvatarCustomizationFShirtOras = AvatarCustomization<"AVATAR_f_shirt_oras">;
export type AvatarCustomizationFShirtPajamas20220 = AvatarCustomization<"AVATAR_f_shirt_pajamas2022_0">;
export type AvatarCustomizationFShirtPajamas20221 = AvatarCustomization<"AVATAR_f_shirt_pajamas2022_1">;
export type AvatarCustomizationFShirtPalmer = AvatarCustomization<"AVATAR_f_shirt_palmer">;
export type AvatarCustomizationFShirtPartneritemsjan2024hoodie = AvatarCustomization<"AVATAR_f_shirt_partneritemsjan2024hoodie">;
export type AvatarCustomizationFShirtPartneritemsjan2024tshirt = AvatarCustomization<"AVATAR_f_shirt_partneritemsjan2024tshirt">;
export type AvatarCustomizationFShirtPikachufan0 = AvatarCustomization<"AVATAR_f_shirt_pikachufan_0">;
export type AvatarCustomizationFShirtPikachulibre = AvatarCustomization<"AVATAR_f_shirt_pikachulibre">;
export type AvatarCustomizationFShirtPikachuonesie = AvatarCustomization<"AVATAR_f_shirt_pikachuonesie">;
export type AvatarCustomizationFShirtPinpukuhoodie = AvatarCustomization<"AVATAR_f_shirt_pinpukuhoodie">;
export type AvatarCustomizationFShirtPipluponesie = AvatarCustomization<"AVATAR_f_shirt_pipluponesie">;
export type AvatarCustomizationFShirtPkmnhoodie001 = AvatarCustomization<"AVATAR_f_shirt_pkmnhoodie001">;
export type AvatarCustomizationFShirtPkmnhoodie004 = AvatarCustomization<"AVATAR_f_shirt_pkmnhoodie004">;
export type AvatarCustomizationFShirtPkmnhoodie007 = AvatarCustomization<"AVATAR_f_shirt_pkmnhoodie007">;
export type AvatarCustomizationFShirtPkmnshirts202100 = AvatarCustomization<"AVATAR_f_shirt_pkmnshirts2021_00">;
export type AvatarCustomizationFShirtPkmnshirts202101 = AvatarCustomization<"AVATAR_f_shirt_pkmnshirts2021_01">;
export type AvatarCustomizationFShirtPkmnshirts202102 = AvatarCustomization<"AVATAR_f_shirt_pkmnshirts2021_02">;
export type AvatarCustomizationFShirtPkmnshirts165 = AvatarCustomization<"AVATAR_f_shirt_pkmnshirts_165">;
export type AvatarCustomizationFShirtPkmnshirts188 = AvatarCustomization<"AVATAR_f_shirt_pkmnshirts_188">;
export type AvatarCustomizationFShirtPkmnshirts201 = AvatarCustomization<"AVATAR_f_shirt_pkmnshirts_201">;
export type AvatarCustomizationFShirtPkmnshirts238 = AvatarCustomization<"AVATAR_f_shirt_pkmnshirts_238">;
export type AvatarCustomizationFShirtPoloshirt = AvatarCustomization<"AVATAR_f_shirt_poloshirt">;
export type AvatarCustomizationFShirtPoloshirt1 = AvatarCustomization<"AVATAR_f_shirt_poloshirt_1">;
export type AvatarCustomizationFShirtPoloshirt2 = AvatarCustomization<"AVATAR_f_shirt_poloshirt_2">;
export type AvatarCustomizationFShirtProfwillowoutfit = AvatarCustomization<"AVATAR_f_shirt_profwillowoutfit">;
export type AvatarCustomizationFShirtProjectguitar = AvatarCustomization<"AVATAR_f_shirt_projectguitar">;
export type AvatarCustomizationFShirtPumpkabooitems = AvatarCustomization<"AVATAR_f_shirt_pumpkabooitems">;
export type AvatarCustomizationFShirtRegiicejersies = AvatarCustomization<"AVATAR_f_shirt_regiicejersies">;
export type AvatarCustomizationFShirtRegirockjersies = AvatarCustomization<"AVATAR_f_shirt_regirockjersies">;
export type AvatarCustomizationFShirtRegisteeljersies = AvatarCustomization<"AVATAR_f_shirt_registeeljersies">;
export type AvatarCustomizationFShirtReuniclusitems = AvatarCustomization<"AVATAR_f_shirt_reuniclusitems">;
export type AvatarCustomizationFShirtRuinmaniac = AvatarCustomization<"AVATAR_f_shirt_ruinmaniac">;
export type AvatarCustomizationFShirtSafarizone2020 = AvatarCustomization<"AVATAR_f_shirt_safarizone2020">;
export type AvatarCustomizationFShirtSamsungsummer2020 = AvatarCustomization<"AVATAR_f_shirt_samsungsummer2020">;
export type AvatarCustomizationFShirtShayminlandtshirt = AvatarCustomization<"AVATAR_f_shirt_shayminlandtshirt">;
export type AvatarCustomizationFShirtShayminskytshirt = AvatarCustomization<"AVATAR_f_shirt_shayminskytshirt">;
export type AvatarCustomizationFShirtShinymewtshirts = AvatarCustomization<"AVATAR_f_shirt_shinymewtshirts">;
export type AvatarCustomizationFShirtSlowpokeshirts = AvatarCustomization<"AVATAR_f_shirt_slowpokeshirts">;
export type AvatarCustomizationFShirtSlowpoketailshirts = AvatarCustomization<"AVATAR_f_shirt_slowpoketailshirts">;
export type AvatarCustomizationFShirtSnorlaxonesie = AvatarCustomization<"AVATAR_f_shirt_snorlaxonesie">;
export type AvatarCustomizationFShirtSpiritomb0 = AvatarCustomization<"AVATAR_f_shirt_spiritomb_0">;
export type AvatarCustomizationFShirtSpring2021gulpin = AvatarCustomization<"AVATAR_f_shirt_spring2021gulpin">;
export type AvatarCustomizationFShirtSpring2021plusle = AvatarCustomization<"AVATAR_f_shirt_spring2021plusle">;
export type AvatarCustomizationFShirtSs = AvatarCustomization<"AVATAR_f_shirt_ss">;
export type AvatarCustomizationFShirtSteven = AvatarCustomization<"AVATAR_f_shirt_steven">;
export type AvatarCustomizationFShirtStevenfirst = AvatarCustomization<"AVATAR_f_shirt_stevenfirst">;
export type AvatarCustomizationFShirtSukajanblastoise = AvatarCustomization<"AVATAR_f_shirt_sukajanblastoise">;
export type AvatarCustomizationFShirtSukajancharizard = AvatarCustomization<"AVATAR_f_shirt_sukajancharizard">;
export type AvatarCustomizationFShirtSukajanhouou = AvatarCustomization<"AVATAR_f_shirt_sukajanhouou">;
export type AvatarCustomizationFShirtSukajanlugia = AvatarCustomization<"AVATAR_f_shirt_sukajanlugia">;
export type AvatarCustomizationFShirtSukajanvenusaur = AvatarCustomization<"AVATAR_f_shirt_sukajanvenusaur">;
export type AvatarCustomizationFShirtSummer2023 = AvatarCustomization<"AVATAR_f_shirt_summer2023">;
export type AvatarCustomizationFShirtSustainability2021 = AvatarCustomization<"AVATAR_f_shirt_sustainability2021">;
export type AvatarCustomizationFShirtSvcostumescarletschool = AvatarCustomization<"AVATAR_f_shirt_svcostumescarletschool">;
export type AvatarCustomizationFShirtSvcostumevioletschool = AvatarCustomization<"AVATAR_f_shirt_svcostumevioletschool">;
export type AvatarCustomizationFShirtSvdlc1 = AvatarCustomization<"AVATAR_f_shirt_svdlc1">;
export type AvatarCustomizationFShirtSvdlc2fall = AvatarCustomization<"AVATAR_f_shirt_svdlc2fall">;
export type AvatarCustomizationFShirtSvdlc2spring = AvatarCustomization<"AVATAR_f_shirt_svdlc2spring">;
export type AvatarCustomizationFShirtSweater300 = AvatarCustomization<"AVATAR_f_shirt_sweater_30_0">;
export type AvatarCustomizationFShirtSweater301 = AvatarCustomization<"AVATAR_f_shirt_sweater_30_1">;
export type AvatarCustomizationFShirtSweater302 = AvatarCustomization<"AVATAR_f_shirt_sweater_30_2">;
export type AvatarCustomizationFShirtSweaterInstinct = AvatarCustomization<"AVATAR_f_shirt_sweater_instinct">;
export type AvatarCustomizationFShirtSweaterMystic = AvatarCustomization<"AVATAR_f_shirt_sweater_mystic">;
export type AvatarCustomizationFShirtSweaterValor = AvatarCustomization<"AVATAR_f_shirt_sweater_valor">;
export type AvatarCustomizationFShirtSwshdlc2costume = AvatarCustomization<"AVATAR_f_shirt_swshdlc2costume">;
export type AvatarCustomizationFShirtSwshdlccostume = AvatarCustomization<"AVATAR_f_shirt_swshdlccostume">;
export type AvatarCustomizationFShirtSwshuniformchampion = AvatarCustomization<"AVATAR_f_shirt_swshuniformchampion">;
export type AvatarCustomizationFShirtSwshuniformdark = AvatarCustomization<"AVATAR_f_shirt_swshuniformdark">;
export type AvatarCustomizationFShirtSwshuniformdefault = AvatarCustomization<"AVATAR_f_shirt_swshuniformdefault">;
export type AvatarCustomizationFShirtSwshuniformdragon = AvatarCustomization<"AVATAR_f_shirt_swshuniformdragon">;
export type AvatarCustomizationFShirtSylveonitems = AvatarCustomization<"AVATAR_f_shirt_sylveonitems">;
export type AvatarCustomizationFShirtTanktop0 = AvatarCustomization<"AVATAR_f_shirt_tanktop_0">;
export type AvatarCustomizationFShirtTanktop1 = AvatarCustomization<"AVATAR_f_shirt_tanktop_1">;
export type AvatarCustomizationFShirtTanktop2 = AvatarCustomization<"AVATAR_f_shirt_tanktop_2">;
export type AvatarCustomizationFShirtTanktopCharizard0 = AvatarCustomization<"AVATAR_f_shirt_tanktop_charizard_0">;
export type AvatarCustomizationFShirtTanktopCharizard1 = AvatarCustomization<"AVATAR_f_shirt_tanktop_charizard_1">;
export type AvatarCustomizationFShirtTanktopCharizard2 = AvatarCustomization<"AVATAR_f_shirt_tanktop_charizard_2">;
export type AvatarCustomizationFShirtTanktopPikachu0 = AvatarCustomization<"AVATAR_f_shirt_tanktop_pikachu_0">;
export type AvatarCustomizationFShirtTanktopPikachu1 = AvatarCustomization<"AVATAR_f_shirt_tanktop_pikachu_1">;
export type AvatarCustomizationFShirtTanktopPikachu2 = AvatarCustomization<"AVATAR_f_shirt_tanktop_pikachu_2">;
export type AvatarCustomizationFShirtTcgcollabtshirtandcap = AvatarCustomization<"AVATAR_f_shirt_tcgcollabtshirtandcap">;
export type AvatarCustomizationFShirtTeamaqua = AvatarCustomization<"AVATAR_f_shirt_teamaqua">;
export type AvatarCustomizationFShirtTeamblanche = AvatarCustomization<"AVATAR_f_shirt_teamblanche">;
export type AvatarCustomizationFShirtTeamcandela = AvatarCustomization<"AVATAR_f_shirt_teamcandela">;
export type AvatarCustomizationFShirtTeammagma = AvatarCustomization<"AVATAR_f_shirt_teammagma">;
export type AvatarCustomizationFShirtTeamrocket0 = AvatarCustomization<"AVATAR_f_shirt_teamrocket_0">;
export type AvatarCustomizationFShirtTeamrocket1 = AvatarCustomization<"AVATAR_f_shirt_teamrocket_1">;
export type AvatarCustomizationFShirtTeamskull = AvatarCustomization<"AVATAR_f_shirt_teamskull">;
export type AvatarCustomizationFShirtTeamspark = AvatarCustomization<"AVATAR_f_shirt_teamspark">;
export type AvatarCustomizationFShirtTogepihoodie = AvatarCustomization<"AVATAR_f_shirt_togepihoodie">;
export type AvatarCustomizationFShirtTracksuitsgroudon = AvatarCustomization<"AVATAR_f_shirt_tracksuitsgroudon">;
export type AvatarCustomizationFShirtTracksuitskyogre = AvatarCustomization<"AVATAR_f_shirt_tracksuitskyogre">;
export type AvatarCustomizationFShirtTshirtCycling0 = AvatarCustomization<"AVATAR_f_shirt_tshirt_cycling_0">;
export type AvatarCustomizationFShirtTshirtCycling1 = AvatarCustomization<"AVATAR_f_shirt_tshirt_cycling_1">;
export type AvatarCustomizationFShirtTshirtCycling2 = AvatarCustomization<"AVATAR_f_shirt_tshirt_cycling_2">;
export type AvatarCustomizationFShirtTshirtCycling3 = AvatarCustomization<"AVATAR_f_shirt_tshirt_cycling_3">;
export type AvatarCustomizationFShirtTshirtFestChicago2017 = AvatarCustomization<"AVATAR_f_shirt_tshirt_fest_chicago_2017">;
export type AvatarCustomizationFShirtTshirtFestChicago2018 = AvatarCustomization<"AVATAR_f_shirt_tshirt_fest_chicago_2018">;
export type AvatarCustomizationFShirtTshirtGlobalGoals2017 = AvatarCustomization<"AVATAR_f_shirt_tshirt_global_goals_2017">;
export type AvatarCustomizationFShirtTshirtPikachu0 = AvatarCustomization<"AVATAR_f_shirt_tshirt_pikachu_0">;
export type AvatarCustomizationFShirtTshirtPikachu1 = AvatarCustomization<"AVATAR_f_shirt_tshirt_pikachu_1">;
export type AvatarCustomizationFShirtTshirtPikachu2 = AvatarCustomization<"AVATAR_f_shirt_tshirt_pikachu_2">;
export type AvatarCustomizationFShirtTshirtPikachu3 = AvatarCustomization<"AVATAR_f_shirt_tshirt_pikachu_3">;
export type AvatarCustomizationFShirtTshirtPikachu4 = AvatarCustomization<"AVATAR_f_shirt_tshirt_pikachu_4">;
export type AvatarCustomizationFShirtTshirtPikachu5 = AvatarCustomization<"AVATAR_f_shirt_tshirt_pikachu_5">;
export type AvatarCustomizationFShirtTshirtPikachu6 = AvatarCustomization<"AVATAR_f_shirt_tshirt_pikachu_6">;
export type AvatarCustomizationFShirtTurtwigonesie = AvatarCustomization<"AVATAR_f_shirt_turtwigonesie">;
export type AvatarCustomizationFShirtUltrareconsquad = AvatarCustomization<"AVATAR_f_shirt_ultraReconSquad">;
export type AvatarCustomizationFShirtUltra0 = AvatarCustomization<"AVATAR_f_shirt_ultra_0">;
export type AvatarCustomizationFShirtUniqlotshirts0 = AvatarCustomization<"AVATAR_f_shirt_uniqlotshirts_0">;
export type AvatarCustomizationFShirtUniqlotshirts1 = AvatarCustomization<"AVATAR_f_shirt_uniqlotshirts_1">;
export type AvatarCustomizationFShirtUniqlotshirts2 = AvatarCustomization<"AVATAR_f_shirt_uniqlotshirts_2">;
export type AvatarCustomizationFShirtUnwto = AvatarCustomization<"AVATAR_f_shirt_unwto">;
export type AvatarCustomizationFShirtValentine2023 = AvatarCustomization<"AVATAR_f_shirt_valentine2023">;
export type AvatarCustomizationFShirtVerizon2020 = AvatarCustomization<"AVATAR_f_shirt_verizon2020">;
export type AvatarCustomizationFShirtVeterantrainerxy = AvatarCustomization<"AVATAR_f_shirt_veterantrainerxy">;
export type AvatarCustomizationFShirtVictinitshirts = AvatarCustomization<"AVATAR_f_shirt_victinitshirts">;
export type AvatarCustomizationFShirtWcs2022 = AvatarCustomization<"AVATAR_f_shirt_wcs2022">;
export type AvatarCustomizationFShirtWcs2022tshirtbulu = AvatarCustomization<"AVATAR_f_shirt_wcs2022tshirtbulu">;
export type AvatarCustomizationFShirtWcs2022tshirtred = AvatarCustomization<"AVATAR_f_shirt_wcs2022tshirtred">;
export type AvatarCustomizationFShirtWcs2022winnersitems = AvatarCustomization<"AVATAR_f_shirt_wcs2022winnersitems">;
export type AvatarCustomizationFShirtWcs2023 = AvatarCustomization<"AVATAR_f_shirt_wcs2023">;
export type AvatarCustomizationFShirtWcs2023promotshirt = AvatarCustomization<"AVATAR_f_shirt_wcs2023promotshirt">;
export type AvatarCustomizationFShirtWcs2023promotshirt01 = AvatarCustomization<"AVATAR_f_shirt_wcs2023promotshirt_01">;
export type AvatarCustomizationFShirtWcs2023sukajan = AvatarCustomization<"AVATAR_f_shirt_wcs2023sukajan">;
export type AvatarCustomizationFShirtWcs2023winnersitems = AvatarCustomization<"AVATAR_f_shirt_wcs2023winnersitems">;
export type AvatarCustomizationFShirtWcs2024 = AvatarCustomization<"AVATAR_f_shirt_wcs2024">;
export type AvatarCustomizationFShirtWcs2024championshipshirtBlue = AvatarCustomization<"AVATAR_f_shirt_wcs2024championshipshirt-blue">;
export type AvatarCustomizationFShirtWcs2024championshipshirtWhite = AvatarCustomization<"AVATAR_f_shirt_wcs2024championshipshirt-white">;
export type AvatarCustomizationFShirtWcsyokohama = AvatarCustomization<"AVATAR_f_shirt_wcsyokohama">;
export type AvatarCustomizationFShirtWhitecoat = AvatarCustomization<"AVATAR_f_shirt_whitecoat">;
export type AvatarCustomizationFShirtWintersweater2023 = AvatarCustomization<"AVATAR_f_shirt_wintersweater2023">;
export type AvatarCustomizationFShirtZoruaonesie = AvatarCustomization<"AVATAR_f_shirt_zoruaonesie">;
export type AvatarCustomizationFShoes6thanniversary = AvatarCustomization<"AVATAR_f_shoes_6thanniversary">;
export type AvatarCustomizationFShoesAcetrainerbw = AvatarCustomization<"AVATAR_f_shoes_acetrainerbw">;
export type AvatarCustomizationFShoesAcetrainersm = AvatarCustomization<"AVATAR_f_shoes_acetrainersm">;
export type AvatarCustomizationFShoesAnimegou = AvatarCustomization<"AVATAR_f_shoes_animegou">;
export type AvatarCustomizationFShoesBackpacker = AvatarCustomization<"AVATAR_f_shoes_backpacker">;
export type AvatarCustomizationFShoesBattlegirl0 = AvatarCustomization<"AVATAR_f_shoes_battlegirl_0">;
export type AvatarCustomizationFShoesBwn = AvatarCustomization<"AVATAR_f_shoes_bwn">;
export type AvatarCustomizationFShoesCarbink = AvatarCustomization<"AVATAR_f_shoes_carbink">;
export type AvatarCustomizationFShoesClay = AvatarCustomization<"AVATAR_f_shoes_clay">;
export type AvatarCustomizationFShoesCoolboots = AvatarCustomization<"AVATAR_f_shoes_coolboots">;
export type AvatarCustomizationFShoesDedenneitems = AvatarCustomization<"AVATAR_f_shoes_dedenneitems">;
export type AvatarCustomizationFShoesDefault0 = AvatarCustomization<"AVATAR_f_shoes_default_0">;
export type AvatarCustomizationFShoesDefault1 = AvatarCustomization<"AVATAR_f_shoes_default_1">;
export type AvatarCustomizationFShoesDefault2 = AvatarCustomization<"AVATAR_f_shoes_default_2">;
export type AvatarCustomizationFShoesDefault3 = AvatarCustomization<"AVATAR_f_shoes_default_3">;
export type AvatarCustomizationFShoesDefault4 = AvatarCustomization<"AVATAR_f_shoes_default_4">;
export type AvatarCustomizationFShoesDefault5 = AvatarCustomization<"AVATAR_f_shoes_default_5">;
export type AvatarCustomizationFShoesDefault6 = AvatarCustomization<"AVATAR_f_shoes_default_6">;
export type AvatarCustomizationFShoesDelibird = AvatarCustomization<"AVATAR_f_shoes_delibird">;
export type AvatarCustomizationFShoesDp = AvatarCustomization<"AVATAR_f_shoes_dp">;
export type AvatarCustomizationFShoesElesa = AvatarCustomization<"AVATAR_f_shoes_elesa">;
export type AvatarCustomizationFShoesEmpty = AvatarCustomization<"AVATAR_f_shoes_empty">;
export type AvatarCustomizationFShoesFashionweek2022 = AvatarCustomization<"AVATAR_f_shoes_fashionWeek2022">;
export type AvatarCustomizationFShoesFrlg0 = AvatarCustomization<"AVATAR_f_shoes_frlg_0">;
export type AvatarCustomizationFShoesFw2022 = AvatarCustomization<"AVATAR_f_shoes_fw2022">;
export type AvatarCustomizationFShoesGeeta = AvatarCustomization<"AVATAR_f_shoes_geeta">;
export type AvatarCustomizationFShoesGiovanni = AvatarCustomization<"AVATAR_f_shoes_giovanni">;
export type AvatarCustomizationFShoesGladion = AvatarCustomization<"AVATAR_f_shoes_gladion">;
export type AvatarCustomizationFShoesGothitelleitems = AvatarCustomization<"AVATAR_f_shoes_gothitelleitems">;
export type AvatarCustomizationFShoesGreen = AvatarCustomization<"AVATAR_f_shoes_green">;
export type AvatarCustomizationFShoesGymleader0 = AvatarCustomization<"AVATAR_f_shoes_gymleader_0">;
export type AvatarCustomizationFShoesGymleader1 = AvatarCustomization<"AVATAR_f_shoes_gymleader_1">;
export type AvatarCustomizationFShoesGymleader2 = AvatarCustomization<"AVATAR_f_shoes_gymleader_2">;
export type AvatarCustomizationFShoesHala = AvatarCustomization<"AVATAR_f_shoes_hala">;
export type AvatarCustomizationFShoesHgss0 = AvatarCustomization<"AVATAR_f_shoes_hgss_0">;
export type AvatarCustomizationFShoesIngo = AvatarCustomization<"AVATAR_f_shoes_ingo">;
export type AvatarCustomizationFShoesKorrina = AvatarCustomization<"AVATAR_f_shoes_korrina">;
export type AvatarCustomizationFShoesLadiamondoutfit = AvatarCustomization<"AVATAR_f_shoes_ladiamondoutfit">;
export type AvatarCustomizationFShoesLana = AvatarCustomization<"AVATAR_f_shoes_lana">;
export type AvatarCustomizationFShoesLapearloutfit = AvatarCustomization<"AVATAR_f_shoes_lapearloutfit">;
export type AvatarCustomizationFShoesLegendofarceus = AvatarCustomization<"AVATAR_f_shoes_legendofarceus">;
export type AvatarCustomizationFShoesLoosepants = AvatarCustomization<"AVATAR_f_shoes_loosepants">;
export type AvatarCustomizationFShoesLoosepants1 = AvatarCustomization<"AVATAR_f_shoes_loosepants_1">;
export type AvatarCustomizationFShoesLoosepants2 = AvatarCustomization<"AVATAR_f_shoes_loosepants_2">;
export type AvatarCustomizationFShoesLoosepants3 = AvatarCustomization<"AVATAR_f_shoes_loosepants_3">;
export type AvatarCustomizationFShoesLuvdiscpack = AvatarCustomization<"AVATAR_f_shoes_luvdiscpack">;
export type AvatarCustomizationFShoesLysandre = AvatarCustomization<"AVATAR_f_shoes_lysandre">;
export type AvatarCustomizationFShoesMegalopunnyitems = AvatarCustomization<"AVATAR_f_shoes_megalopunnyitems">;
export type AvatarCustomizationFShoesMelmetalshoes = AvatarCustomization<"AVATAR_f_shoes_melmetalshoes">;
export type AvatarCustomizationFShoesMewtwo = AvatarCustomization<"AVATAR_f_shoes_mewtwo">;
export type AvatarCustomizationFShoesMisty = AvatarCustomization<"AVATAR_f_shoes_misty">;
export type AvatarCustomizationFShoesNewyear2022 = AvatarCustomization<"AVATAR_f_shoes_newyear2022">;
export type AvatarCustomizationFShoesNike2021 = AvatarCustomization<"AVATAR_f_shoes_nike2021">;
export type AvatarCustomizationFShoesOras = AvatarCustomization<"AVATAR_f_shoes_oras">;
export type AvatarCustomizationFShoesPajamas20220 = AvatarCustomization<"AVATAR_f_shoes_pajamas2022_0">;
export type AvatarCustomizationFShoesPajamas20221 = AvatarCustomization<"AVATAR_f_shoes_pajamas2022_1">;
export type AvatarCustomizationFShoesPalmer = AvatarCustomization<"AVATAR_f_shoes_palmer">;
export type AvatarCustomizationFShoesPikachufan0 = AvatarCustomization<"AVATAR_f_shoes_pikachufan_0">;
export type AvatarCustomizationFShoesPikachulibre = AvatarCustomization<"AVATAR_f_shoes_pikachulibre">;
export type AvatarCustomizationFShoesProfwillowoutfit = AvatarCustomization<"AVATAR_f_shoes_profwillowoutfit">;
export type AvatarCustomizationFShoesRegiicejersies = AvatarCustomization<"AVATAR_f_shoes_regiicejersies">;
export type AvatarCustomizationFShoesRegirockjersies = AvatarCustomization<"AVATAR_f_shoes_regirockjersies">;
export type AvatarCustomizationFShoesRegisteeljersies = AvatarCustomization<"AVATAR_f_shoes_registeeljersies">;
export type AvatarCustomizationFShoesReuniclusitems = AvatarCustomization<"AVATAR_f_shoes_reuniclusitems">;
export type AvatarCustomizationFShoesRuinmaniac = AvatarCustomization<"AVATAR_f_shoes_ruinmaniac">;
export type AvatarCustomizationFShoesSandals = AvatarCustomization<"AVATAR_f_shoes_sandals">;
export type AvatarCustomizationFShoesSandals1 = AvatarCustomization<"AVATAR_f_shoes_sandals_1">;
export type AvatarCustomizationFShoesSandals2 = AvatarCustomization<"AVATAR_f_shoes_sandals_2">;
export type AvatarCustomizationFShoesSolgaleoitems = AvatarCustomization<"AVATAR_f_shoes_solgaleoitems">;
export type AvatarCustomizationFShoesSs = AvatarCustomization<"AVATAR_f_shoes_ss">;
export type AvatarCustomizationFShoesSteven = AvatarCustomization<"AVATAR_f_shoes_steven">;
export type AvatarCustomizationFShoesStevenfirst = AvatarCustomization<"AVATAR_f_shoes_stevenfirst">;
export type AvatarCustomizationFShoesSvcostumescarletschool = AvatarCustomization<"AVATAR_f_shoes_svcostumescarletschool">;
export type AvatarCustomizationFShoesSvcostumevioletschool = AvatarCustomization<"AVATAR_f_shoes_svcostumevioletschool">;
export type AvatarCustomizationFShoesSvdlc1 = AvatarCustomization<"AVATAR_f_shoes_svdlc1">;
export type AvatarCustomizationFShoesSvdlc2spring = AvatarCustomization<"AVATAR_f_shoes_svdlc2spring">;
export type AvatarCustomizationFShoesSwshdlc2costume = AvatarCustomization<"AVATAR_f_shoes_swshdlc2costume">;
export type AvatarCustomizationFShoesSwshdlccostume = AvatarCustomization<"AVATAR_f_shoes_swshdlccostume">;
export type AvatarCustomizationFShoesSwshuniformdark = AvatarCustomization<"AVATAR_f_shoes_swshuniformdark">;
export type AvatarCustomizationFShoesSwshuniformdefault = AvatarCustomization<"AVATAR_f_shoes_swshuniformdefault">;
export type AvatarCustomizationFShoesSwshuniformdragon = AvatarCustomization<"AVATAR_f_shoes_swshuniformdragon">;
export type AvatarCustomizationFShoesSylveonitems = AvatarCustomization<"AVATAR_f_shoes_sylveonitems">;
export type AvatarCustomizationFShoesTeamaqua = AvatarCustomization<"AVATAR_f_shoes_teamaqua">;
export type AvatarCustomizationFShoesTeamblanche = AvatarCustomization<"AVATAR_f_shoes_teamblanche">;
export type AvatarCustomizationFShoesTeamcandela = AvatarCustomization<"AVATAR_f_shoes_teamcandela">;
export type AvatarCustomizationFShoesTeammagma = AvatarCustomization<"AVATAR_f_shoes_teammagma">;
export type AvatarCustomizationFShoesTeamrocket0 = AvatarCustomization<"AVATAR_f_shoes_teamrocket_0">;
export type AvatarCustomizationFShoesTeamrocket1 = AvatarCustomization<"AVATAR_f_shoes_teamrocket_1">;
export type AvatarCustomizationFShoesTeamskull = AvatarCustomization<"AVATAR_f_shoes_teamskull">;
export type AvatarCustomizationFShoesTeamspark = AvatarCustomization<"AVATAR_f_shoes_teamspark">;
export type AvatarCustomizationFShoesUltrareconsquad = AvatarCustomization<"AVATAR_f_shoes_ultraReconSquad">;
export type AvatarCustomizationFShoesUltra0 = AvatarCustomization<"AVATAR_f_shoes_ultra_0">;
export type AvatarCustomizationFShoesVeterantrainerxy = AvatarCustomization<"AVATAR_f_shoes_veterantrainerxy">;
export type AvatarCustomizationFShoesWcs2022winnersitems = AvatarCustomization<"AVATAR_f_shoes_wcs2022winnersitems">;
export type AvatarCustomizationFShoesWcs2023winnersitems = AvatarCustomization<"AVATAR_f_shoes_wcs2023winnersitems">;
export type AvatarCustomizationFShoesWinterboots2023 = AvatarCustomization<"AVATAR_f_shoes_winterboots2023">;
export type AvatarCustomizationFShoesWinterboots0 = AvatarCustomization<"AVATAR_f_shoes_winterboots_0">;
export type AvatarCustomizationFShoesWinterboots1 = AvatarCustomization<"AVATAR_f_shoes_winterboots_1">;
export type AvatarCustomizationFShoesWinterboots2 = AvatarCustomization<"AVATAR_f_shoes_winterboots_2">;
export type AvatarCustomizationFShoesWinterboots3 = AvatarCustomization<"AVATAR_f_shoes_winterboots_3">;
export type AvatarCustomizationFSkin0 = AvatarCustomization<"AVATAR_f_skin_0">;
export type AvatarCustomizationFSkin1 = AvatarCustomization<"AVATAR_f_skin_1">;
export type AvatarCustomizationFSkin10 = AvatarCustomization<"AVATAR_f_skin_10">;
export type AvatarCustomizationFSkin11 = AvatarCustomization<"AVATAR_f_skin_11">;
export type AvatarCustomizationFSkin2 = AvatarCustomization<"AVATAR_f_skin_2">;
export type AvatarCustomizationFSkin3 = AvatarCustomization<"AVATAR_f_skin_3">;
export type AvatarCustomizationFSkin4 = AvatarCustomization<"AVATAR_f_skin_4">;
export type AvatarCustomizationFSkin5 = AvatarCustomization<"AVATAR_f_skin_5">;
export type AvatarCustomizationFSkin6 = AvatarCustomization<"AVATAR_f_skin_6">;
export type AvatarCustomizationFSkin7 = AvatarCustomization<"AVATAR_f_skin_7">;
export type AvatarCustomizationFSkin8 = AvatarCustomization<"AVATAR_f_skin_8">;
export type AvatarCustomizationFSkin9 = AvatarCustomization<"AVATAR_f_skin_9">;
export type AvatarCustomizationFSocksDefault0 = AvatarCustomization<"AVATAR_f_socks_default_0">;
export type AvatarCustomizationFSocksDefault1 = AvatarCustomization<"AVATAR_f_socks_default_1">;
export type AvatarCustomizationFSocksDefault2 = AvatarCustomization<"AVATAR_f_socks_default_2">;
export type AvatarCustomizationFSocksEmpty = AvatarCustomization<"AVATAR_f_socks_empty">;
export type AvatarCustomizationFSocksFw2022 = AvatarCustomization<"AVATAR_f_socks_fw2022">;
export type AvatarCustomizationFSocksHgss0 = AvatarCustomization<"AVATAR_f_socks_hgss_0">;
export type AvatarCustomizationFSocksSneakersocks0 = AvatarCustomization<"AVATAR_f_socks_sneakersocks_0">;
export type AvatarCustomizationFSocksSneakersocks1 = AvatarCustomization<"AVATAR_f_socks_sneakersocks_1">;
export type AvatarCustomizationFSocksSollunaitems = AvatarCustomization<"AVATAR_f_socks_sollunaitems">;
export type AvatarCustomizationFSocksSwshuniformdefault = AvatarCustomization<"AVATAR_f_socks_swshuniformdefault">;
export type AvatarCustomizationFSocksSwshuniformdragon = AvatarCustomization<"AVATAR_f_socks_swshuniformdragon">;
export type AvatarCustomizationFSocksTeamaqua = AvatarCustomization<"AVATAR_f_socks_teamaqua">;
export type AvatarCustomizationFSocksThighhighs0 = AvatarCustomization<"AVATAR_f_socks_thighhighs_0">;
export type AvatarCustomizationMBackpackAlolaitemslittenbp = AvatarCustomization<"AVATAR_m_backpack_alolaitemslittenbp">;
export type AvatarCustomizationMBackpackAlolaitemspoppliobp = AvatarCustomization<"AVATAR_m_backpack_alolaitemspoppliobp">;
export type AvatarCustomizationMBackpackAlolaitemsrowletbp = AvatarCustomization<"AVATAR_m_backpack_alolaitemsrowletbp">;
export type AvatarCustomizationMBackpackAnimegou = AvatarCustomization<"AVATAR_m_backpack_animegou">;
export type AvatarCustomizationMBackpackBackpacker = AvatarCustomization<"AVATAR_m_backpack_backpacker">;
export type AvatarCustomizationMBackpackCombeebackpack = AvatarCustomization<"AVATAR_m_backpack_combeebackpack">;
export type AvatarCustomizationMBackpackCombeebackpack01 = AvatarCustomization<"AVATAR_m_backpack_combeebackpack_01">;
export type AvatarCustomizationMBackpackDedenneitems = AvatarCustomization<"AVATAR_m_backpack_dedenneitems">;
export type AvatarCustomizationMBackpackDefault0 = AvatarCustomization<"AVATAR_m_backpack_default_0">;
export type AvatarCustomizationMBackpackDefault1 = AvatarCustomization<"AVATAR_m_backpack_default_1">;
export type AvatarCustomizationMBackpackDefault2 = AvatarCustomization<"AVATAR_m_backpack_default_2">;
export type AvatarCustomizationMBackpackDefault3 = AvatarCustomization<"AVATAR_m_backpack_default_3">;
export type AvatarCustomizationMBackpackDefault4 = AvatarCustomization<"AVATAR_m_backpack_default_4">;
export type AvatarCustomizationMBackpackDefault5 = AvatarCustomization<"AVATAR_m_backpack_default_5">;
export type AvatarCustomizationMBackpackDp = AvatarCustomization<"AVATAR_m_backpack_dp">;
export type AvatarCustomizationMBackpackEggIncubator = AvatarCustomization<"AVATAR_m_backpack_egg-incubator">;
export type AvatarCustomizationMBackpackEggbackpack0 = AvatarCustomization<"AVATAR_m_backpack_eggbackpack_0">;
export type AvatarCustomizationMBackpackEggbackpack1 = AvatarCustomization<"AVATAR_m_backpack_eggbackpack_1">;
export type AvatarCustomizationMBackpackEggbackpack2 = AvatarCustomization<"AVATAR_m_backpack_eggbackpack_2">;
export type AvatarCustomizationMBackpackEmpty = AvatarCustomization<"AVATAR_m_backpack_empty">;
export type AvatarCustomizationMBackpackFrlg0 = AvatarCustomization<"AVATAR_m_backpack_frlg_0">;
export type AvatarCustomizationMBackpackGenesecteventitem = AvatarCustomization<"AVATAR_m_backpack_genesecteventitem">;
export type AvatarCustomizationMBackpackGengar0 = AvatarCustomization<"AVATAR_m_backpack_gengar_0">;
export type AvatarCustomizationMBackpackGiratinaitems = AvatarCustomization<"AVATAR_m_backpack_giratinaitems">;
export type AvatarCustomizationMBackpackGuccibackpack = AvatarCustomization<"AVATAR_m_backpack_guccibackpack">;
export type AvatarCustomizationMBackpackGuitarcasebackpack = AvatarCustomization<"AVATAR_m_backpack_guitarcasebackpack">;
export type AvatarCustomizationMBackpackHgss0 = AvatarCustomization<"AVATAR_m_backpack_hgss_0">;
export type AvatarCustomizationMBackpackHououbackpack = AvatarCustomization<"AVATAR_m_backpack_hououbackpack">;
export type AvatarCustomizationMBackpackKakureonpouch = AvatarCustomization<"AVATAR_m_backpack_kakureonpouch">;
export type AvatarCustomizationMBackpackKomala = AvatarCustomization<"AVATAR_m_backpack_komala">;
export type AvatarCustomizationMBackpackLongchampbp = AvatarCustomization<"AVATAR_m_backpack_longchampbp">;
export type AvatarCustomizationMBackpackLunalaitems = AvatarCustomization<"AVATAR_m_backpack_lunalaitems">;
export type AvatarCustomizationMBackpackLunarnewyr = AvatarCustomization<"AVATAR_m_backpack_lunarNewYr">;
export type AvatarCustomizationMBackpackMimikyubp = AvatarCustomization<"AVATAR_m_backpack_mimikyubp">;
export type AvatarCustomizationMBackpackMovie2020 = AvatarCustomization<"AVATAR_m_backpack_movie2020">;
export type AvatarCustomizationMBackpackNaganadelawings = AvatarCustomization<"AVATAR_m_backpack_naganadelawings">;
export type AvatarCustomizationMBackpackNike2021 = AvatarCustomization<"AVATAR_m_backpack_nike2021">;
export type AvatarCustomizationMBackpackPamobackpack = AvatarCustomization<"AVATAR_m_backpack_pamobackpack">;
export type AvatarCustomizationMBackpackPkmnhoodie001 = AvatarCustomization<"AVATAR_m_backpack_pkmnhoodie001">;
export type AvatarCustomizationMBackpackPkmnhoodie004 = AvatarCustomization<"AVATAR_m_backpack_pkmnhoodie004">;
export type AvatarCustomizationMBackpackPkmnhoodie007 = AvatarCustomization<"AVATAR_m_backpack_pkmnhoodie007">;
export type AvatarCustomizationMBackpackRuinmaniac = AvatarCustomization<"AVATAR_m_backpack_ruinmaniac">;
export type AvatarCustomizationMBackpackSnapcamera = AvatarCustomization<"AVATAR_m_backpack_snapcamera">;
export type AvatarCustomizationMBackpackSs = AvatarCustomization<"AVATAR_m_backpack_ss">;
export type AvatarCustomizationMBackpackSvcostumescarletschool = AvatarCustomization<"AVATAR_m_backpack_svcostumescarletschool">;
export type AvatarCustomizationMBackpackSvcostumevioletschool = AvatarCustomization<"AVATAR_m_backpack_svcostumevioletschool">;
export type AvatarCustomizationMBackpackSvdlc1 = AvatarCustomization<"AVATAR_m_backpack_svdlc1">;
export type AvatarCustomizationMBackpackSvdlc2spring = AvatarCustomization<"AVATAR_m_backpack_svdlc2spring">;
export type AvatarCustomizationMBackpackSwshdlc2costume = AvatarCustomization<"AVATAR_m_backpack_swshdlc2costume">;
export type AvatarCustomizationMBackpackSwshdlccostume = AvatarCustomization<"AVATAR_m_backpack_swshdlccostume">;
export type AvatarCustomizationMBackpackTogepibackpack = AvatarCustomization<"AVATAR_m_backpack_togepibackpack">;
export type AvatarCustomizationMBackpackUltra0 = AvatarCustomization<"AVATAR_m_backpack_ultra_0">;
export type AvatarCustomizationMBackpackVerizon2021 = AvatarCustomization<"AVATAR_m_backpack_verizon2021">;
export type AvatarCustomizationMBackpackZubatbp = AvatarCustomization<"AVATAR_m_backpack_zubatbp">;
export type AvatarCustomizationMEyes0 = AvatarCustomization<"AVATAR_m_eyes_0">;
export type AvatarCustomizationMEyes1 = AvatarCustomization<"AVATAR_m_eyes_1">;
export type AvatarCustomizationMEyes2 = AvatarCustomization<"AVATAR_m_eyes_2">;
export type AvatarCustomizationMEyes3 = AvatarCustomization<"AVATAR_m_eyes_3">;
export type AvatarCustomizationMEyes4 = AvatarCustomization<"AVATAR_m_eyes_4">;
export type AvatarCustomizationMFace3dmask00 = AvatarCustomization<"AVATAR_m_face_3dmask_00">;
export type AvatarCustomizationMFace3dmask01 = AvatarCustomization<"AVATAR_m_face_3dmask_01">;
export type AvatarCustomizationMFace3dmask02 = AvatarCustomization<"AVATAR_m_face_3dmask_02">;
export type AvatarCustomizationMFaceBanettemask = AvatarCustomization<"AVATAR_m_face_banettemask">;
export type AvatarCustomizationMFaceDayofthedead = AvatarCustomization<"AVATAR_m_face_dayofthedead">;
export type AvatarCustomizationMFaceDefaultmask = AvatarCustomization<"AVATAR_m_face_defaultmask">;
export type AvatarCustomizationMFaceEmpty = AvatarCustomization<"AVATAR_m_face_empty">;
export type AvatarCustomizationMFaceFacestickerghostpika = AvatarCustomization<"AVATAR_m_face_facestickerghostpika">;
export type AvatarCustomizationMFaceFacestickerpikachu = AvatarCustomization<"AVATAR_m_face_facestickerpikachu">;
export type AvatarCustomizationMFaceFacestickerpokeball = AvatarCustomization<"AVATAR_m_face_facestickerpokeball">;
export type AvatarCustomizationMFaceFestofcolors00 = AvatarCustomization<"AVATAR_m_face_festOfColors_00">;
export type AvatarCustomizationMFaceFestofcolors01 = AvatarCustomization<"AVATAR_m_face_festOfColors_01">;
export type AvatarCustomizationMFaceFestofcolors02 = AvatarCustomization<"AVATAR_m_face_festOfColors_02">;
export type AvatarCustomizationMFaceGracidea = AvatarCustomization<"AVATAR_m_face_gracidea">;
export type AvatarCustomizationMFaceHoliday2022santacostumes = AvatarCustomization<"AVATAR_m_face_holiday2022santacostumes">;
export type AvatarCustomizationMFacePikachumask = AvatarCustomization<"AVATAR_m_face_pikachumask">;
export type AvatarCustomizationMFaceSableyemask = AvatarCustomization<"AVATAR_m_face_sableyemask">;
export type AvatarCustomizationMFaceTeamskull = AvatarCustomization<"AVATAR_m_face_teamskull">;
export type AvatarCustomizationMFaceToxelmask = AvatarCustomization<"AVATAR_m_face_toxelmask">;
export type AvatarCustomizationMFaceVerizon2020mask = AvatarCustomization<"AVATAR_m_face_verizon2020mask">;
export type AvatarCustomizationMGlasses3d = AvatarCustomization<"AVATAR_m_glasses_3d">;
export type AvatarCustomizationMGlassesCutieflysleepmask = AvatarCustomization<"AVATAR_m_glasses_cutieflysleepmask">;
export type AvatarCustomizationMGlassesDivingsuit = AvatarCustomization<"AVATAR_m_glasses_divingsuit">;
export type AvatarCustomizationMGlassesDrpikachu = AvatarCustomization<"AVATAR_m_glasses_drpikachu">;
export type AvatarCustomizationMGlassesEmpty = AvatarCustomization<"AVATAR_m_glasses_empty">;
export type AvatarCustomizationMGlassesFrillishglasses = AvatarCustomization<"AVATAR_m_glasses_frillishglasses">;
export type AvatarCustomizationMGlassesFw2022 = AvatarCustomization<"AVATAR_m_glasses_fw2022">;
export type AvatarCustomizationMGlassesGimmighoulitems = AvatarCustomization<"AVATAR_m_glasses_gimmighoulitems">;
export type AvatarCustomizationMGlassesGoteamrocketarlo = AvatarCustomization<"AVATAR_m_glasses_goteamrocketarlo">;
export type AvatarCustomizationMGlassesGrandoakglasses = AvatarCustomization<"AVATAR_m_glasses_grandoakglasses">;
export type AvatarCustomizationMGlassesJogger0 = AvatarCustomization<"AVATAR_m_glasses_jogger_0">;
export type AvatarCustomizationMGlassesLugiaglasses = AvatarCustomization<"AVATAR_m_glasses_lugiaglasses">;
export type AvatarCustomizationMGlassesLv40glasses = AvatarCustomization<"AVATAR_m_glasses_lv40glasses">;
export type AvatarCustomizationMGlassesMask0 = AvatarCustomization<"AVATAR_m_glasses_mask_0">;
export type AvatarCustomizationMGlassesMask1 = AvatarCustomization<"AVATAR_m_glasses_mask_1">;
export type AvatarCustomizationMGlassesNewyear2022 = AvatarCustomization<"AVATAR_m_glasses_newyear2022">;
export type AvatarCustomizationMGlassesNewyearglasses2020 = AvatarCustomization<"AVATAR_m_glasses_newyearglasses2020">;
export type AvatarCustomizationMGlassesNewyearglasses2021 = AvatarCustomization<"AVATAR_m_glasses_newyearglasses2021">;
export type AvatarCustomizationMGlassesObstagoonitems = AvatarCustomization<"AVATAR_m_glasses_obstagoonitems">;
export type AvatarCustomizationMGlassesRoundsunglasses = AvatarCustomization<"AVATAR_m_glasses_roundsunglasses">;
export type AvatarCustomizationMGlassesTeardrop0 = AvatarCustomization<"AVATAR_m_glasses_teardrop_0">;
export type AvatarCustomizationMGlassesThick0 = AvatarCustomization<"AVATAR_m_glasses_thick_0">;
export type AvatarCustomizationMGlassesThick1 = AvatarCustomization<"AVATAR_m_glasses_thick_1">;
export type AvatarCustomizationMGlassesThick2 = AvatarCustomization<"AVATAR_m_glasses_thick_2">;
export type AvatarCustomizationMGlassesThick3 = AvatarCustomization<"AVATAR_m_glasses_thick_3">;
export type AvatarCustomizationMGlassesThick4 = AvatarCustomization<"AVATAR_m_glasses_thick_4">;
export type AvatarCustomizationMGlovesAcetrainersm = AvatarCustomization<"AVATAR_m_gloves_acetrainersm">;
export type AvatarCustomizationMGlovesBea = AvatarCustomization<"AVATAR_m_gloves_bea">;
export type AvatarCustomizationMGlovesBwn = AvatarCustomization<"AVATAR_m_gloves_bwn">;
export type AvatarCustomizationMGlovesDefault0 = AvatarCustomization<"AVATAR_m_gloves_default_0">;
export type AvatarCustomizationMGlovesDefault1 = AvatarCustomization<"AVATAR_m_gloves_default_1">;
export type AvatarCustomizationMGlovesDefault2 = AvatarCustomization<"AVATAR_m_gloves_default_2">;
export type AvatarCustomizationMGlovesDefault3 = AvatarCustomization<"AVATAR_m_gloves_default_3">;
export type AvatarCustomizationMGlovesDelibird = AvatarCustomization<"AVATAR_m_gloves_delibird">;
export type AvatarCustomizationMGlovesDynamaxswsh = AvatarCustomization<"AVATAR_m_gloves_dynamaxswsh">;
export type AvatarCustomizationMGlovesEmpty = AvatarCustomization<"AVATAR_m_gloves_empty">;
export type AvatarCustomizationMGlovesFrlg0 = AvatarCustomization<"AVATAR_m_gloves_frlg_0">;
export type AvatarCustomizationMGlovesGeeta = AvatarCustomization<"AVATAR_m_gloves_geeta">;
export type AvatarCustomizationMGlovesGiovanni = AvatarCustomization<"AVATAR_m_gloves_giovanni">;
export type AvatarCustomizationMGlovesGuzma = AvatarCustomization<"AVATAR_m_gloves_guzma">;
export type AvatarCustomizationMGlovesGymleader0 = AvatarCustomization<"AVATAR_m_gloves_gymleader_0">;
export type AvatarCustomizationMGlovesHoopabangle = AvatarCustomization<"AVATAR_m_gloves_hoopabangle">;
export type AvatarCustomizationMGlovesJogger0 = AvatarCustomization<"AVATAR_m_gloves_jogger_0">;
export type AvatarCustomizationMGlovesKorrina = AvatarCustomization<"AVATAR_m_gloves_korrina">;
export type AvatarCustomizationMGlovesLysandre = AvatarCustomization<"AVATAR_m_gloves_lysandre">;
export type AvatarCustomizationMGlovesMegabangle = AvatarCustomization<"AVATAR_m_gloves_megabangle">;
export type AvatarCustomizationMGlovesMegabangleblack = AvatarCustomization<"AVATAR_m_gloves_megabangleblack">;
export type AvatarCustomizationMGlovesMegabangleblue = AvatarCustomization<"AVATAR_m_gloves_megabangleblue">;
export type AvatarCustomizationMGlovesMegabanglered = AvatarCustomization<"AVATAR_m_gloves_megabanglered">;
export type AvatarCustomizationMGlovesMegabangleyellow = AvatarCustomization<"AVATAR_m_gloves_megabangleyellow">;
export type AvatarCustomizationMGlovesObstagoonitems = AvatarCustomization<"AVATAR_m_gloves_obstagoonitems">;
export type AvatarCustomizationMGlovesPalmer = AvatarCustomization<"AVATAR_m_gloves_palmer">;
export type AvatarCustomizationMGlovesProfwillowoutfit = AvatarCustomization<"AVATAR_m_gloves_profwillowoutfit">;
export type AvatarCustomizationMGlovesStevenfirst = AvatarCustomization<"AVATAR_m_gloves_stevenfirst">;
export type AvatarCustomizationMGlovesSvdlc2spring = AvatarCustomization<"AVATAR_m_gloves_svdlc2spring">;
export type AvatarCustomizationMGlovesSwshdlc2costume = AvatarCustomization<"AVATAR_m_gloves_swshdlc2costume">;
export type AvatarCustomizationMGlovesSwshdlccostume = AvatarCustomization<"AVATAR_m_gloves_swshdlccostume">;
export type AvatarCustomizationMGlovesSwshuniformchampion = AvatarCustomization<"AVATAR_m_gloves_swshuniformchampion">;
export type AvatarCustomizationMGlovesSwshuniformdark = AvatarCustomization<"AVATAR_m_gloves_swshuniformdark">;
export type AvatarCustomizationMGlovesSwshuniformdefault = AvatarCustomization<"AVATAR_m_gloves_swshuniformdefault">;
export type AvatarCustomizationMGlovesSwshuniformdragon = AvatarCustomization<"AVATAR_m_gloves_swshuniformdragon">;
export type AvatarCustomizationMGlovesTeamaqua = AvatarCustomization<"AVATAR_m_gloves_teamaqua">;
export type AvatarCustomizationMGlovesTeammagma = AvatarCustomization<"AVATAR_m_gloves_teammagma">;
export type AvatarCustomizationMGlovesTeamrocket0 = AvatarCustomization<"AVATAR_m_gloves_teamrocket_0">;
export type AvatarCustomizationMGlovesTeamspark = AvatarCustomization<"AVATAR_m_gloves_teamspark">;
export type AvatarCustomizationMGlovesWintergloves2023 = AvatarCustomization<"AVATAR_m_gloves_wintergloves2023">;
export type AvatarCustomizationMGofestPikachuvisor = AvatarCustomization<"AVATAR_m_gofest_pikachuvisor">;
export type AvatarCustomizationMHairDefault0 = AvatarCustomization<"AVATAR_m_hair_default_0">;
export type AvatarCustomizationMHairDefault1 = AvatarCustomization<"AVATAR_m_hair_default_1">;
export type AvatarCustomizationMHairDefault10 = AvatarCustomization<"AVATAR_m_hair_default_10">;
export type AvatarCustomizationMHairDefault11 = AvatarCustomization<"AVATAR_m_hair_default_11">;
export type AvatarCustomizationMHairDefault12 = AvatarCustomization<"AVATAR_m_hair_default_12">;
export type AvatarCustomizationMHairDefault13 = AvatarCustomization<"AVATAR_m_hair_default_13">;
export type AvatarCustomizationMHairDefault14 = AvatarCustomization<"AVATAR_m_hair_default_14">;
export type AvatarCustomizationMHairDefault15 = AvatarCustomization<"AVATAR_m_hair_default_15">;
export type AvatarCustomizationMHairDefault16 = AvatarCustomization<"AVATAR_m_hair_default_16">;
export type AvatarCustomizationMHairDefault17 = AvatarCustomization<"AVATAR_m_hair_default_17">;
export type AvatarCustomizationMHairDefault18 = AvatarCustomization<"AVATAR_m_hair_default_18">;
export type AvatarCustomizationMHairDefault19 = AvatarCustomization<"AVATAR_m_hair_default_19">;
export type AvatarCustomizationMHairDefault2 = AvatarCustomization<"AVATAR_m_hair_default_2">;
export type AvatarCustomizationMHairDefault3 = AvatarCustomization<"AVATAR_m_hair_default_3">;
export type AvatarCustomizationMHairDefault4 = AvatarCustomization<"AVATAR_m_hair_default_4">;
export type AvatarCustomizationMHairDefault5 = AvatarCustomization<"AVATAR_m_hair_default_5">;
export type AvatarCustomizationMHairDefault6 = AvatarCustomization<"AVATAR_m_hair_default_6">;
export type AvatarCustomizationMHairDefault7 = AvatarCustomization<"AVATAR_m_hair_default_7">;
export type AvatarCustomizationMHairDefault8 = AvatarCustomization<"AVATAR_m_hair_default_8">;
export type AvatarCustomizationMHairDefault9 = AvatarCustomization<"AVATAR_m_hair_default_9">;
export type AvatarCustomizationMHat6thanniversary = AvatarCustomization<"AVATAR_m_hat_6thanniversary">;
export type AvatarCustomizationMHatAcetrainersm = AvatarCustomization<"AVATAR_m_hat_acetrainersm">;
export type AvatarCustomizationMHatAdventure0 = AvatarCustomization<"AVATAR_m_hat_adventure_0">;
export type AvatarCustomizationMHatAseries = AvatarCustomization<"AVATAR_m_hat_aseries">;
export type AvatarCustomizationMHatBea = AvatarCustomization<"AVATAR_m_hat_bea">;
export type AvatarCustomizationMHatBidoofhat = AvatarCustomization<"AVATAR_m_hat_bidoofhat">;
export type AvatarCustomizationMHatBounsweetitems = AvatarCustomization<"AVATAR_m_hat_bounsweetitems">;
export type AvatarCustomizationMHatBurmyearrings11 = AvatarCustomization<"AVATAR_m_hat_burmyearrings11">;
export type AvatarCustomizationMHatBurmyearrings12 = AvatarCustomization<"AVATAR_m_hat_burmyearrings12">;
export type AvatarCustomizationMHatBurmyearrings13 = AvatarCustomization<"AVATAR_m_hat_burmyearrings13">;
export type AvatarCustomizationMHatBwn = AvatarCustomization<"AVATAR_m_hat_bwn">;
export type AvatarCustomizationMHatCasket0 = AvatarCustomization<"AVATAR_m_hat_casket_0">;
export type AvatarCustomizationMHatCetoddlehat = AvatarCustomization<"AVATAR_m_hat_cetoddlehat">;
export type AvatarCustomizationMHatClay = AvatarCustomization<"AVATAR_m_hat_clay">;
export type AvatarCustomizationMHatCofagrigusitems = AvatarCustomization<"AVATAR_m_hat_cofagrigusitems">;
export type AvatarCustomizationMHatCosmog = AvatarCustomization<"AVATAR_m_hat_cosmog">;
export type AvatarCustomizationMHatCrownmoon = AvatarCustomization<"AVATAR_m_hat_crownmoon">;
export type AvatarCustomizationMHatCrownsun = AvatarCustomization<"AVATAR_m_hat_crownsun">;
export type AvatarCustomizationMHatCubonehat = AvatarCustomization<"AVATAR_m_hat_cubonehat">;
export type AvatarCustomizationMHatDarumakahat = AvatarCustomization<"AVATAR_m_hat_darumakahat">;
export type AvatarCustomizationMHatDedenneitems = AvatarCustomization<"AVATAR_m_hat_dedenneitems">;
export type AvatarCustomizationMHatDefault0 = AvatarCustomization<"AVATAR_m_hat_default_0">;
export type AvatarCustomizationMHatDefault1 = AvatarCustomization<"AVATAR_m_hat_default_1">;
export type AvatarCustomizationMHatDefault2 = AvatarCustomization<"AVATAR_m_hat_default_2">;
export type AvatarCustomizationMHatDefault3 = AvatarCustomization<"AVATAR_m_hat_default_3">;
export type AvatarCustomizationMHatDefault4 = AvatarCustomization<"AVATAR_m_hat_default_4">;
export type AvatarCustomizationMHatDefault5 = AvatarCustomization<"AVATAR_m_hat_default_5">;
export type AvatarCustomizationMHatDeino = AvatarCustomization<"AVATAR_m_hat_deino">;
export type AvatarCustomizationMHatDelibird = AvatarCustomization<"AVATAR_m_hat_delibird">;
export type AvatarCustomizationMHatDetectivepikachu = AvatarCustomization<"AVATAR_m_hat_detectivepikachu">;
export type AvatarCustomizationMHatDiancie = AvatarCustomization<"AVATAR_m_hat_diancie">;
export type AvatarCustomizationMHatDp = AvatarCustomization<"AVATAR_m_hat_dp">;
export type AvatarCustomizationMHatDrifloon0 = AvatarCustomization<"AVATAR_m_hat_drifloon_0">;
export type AvatarCustomizationMHatDrpikachu = AvatarCustomization<"AVATAR_m_hat_drpikachu">;
export type AvatarCustomizationMHatDusclopsmummy = AvatarCustomization<"AVATAR_m_hat_dusclopsmummy">;
export type AvatarCustomizationMHatEeveecap = AvatarCustomization<"AVATAR_m_hat_eeveecap">;
export type AvatarCustomizationMHatElesa = AvatarCustomization<"AVATAR_m_hat_elesa">;
export type AvatarCustomizationMHatEmpty = AvatarCustomization<"AVATAR_m_hat_empty">;
export type AvatarCustomizationMHatFedora0 = AvatarCustomization<"AVATAR_m_hat_fedora_0">;
export type AvatarCustomizationMHatFedora1 = AvatarCustomization<"AVATAR_m_hat_fedora_1">;
export type AvatarCustomizationMHatFisher0 = AvatarCustomization<"AVATAR_m_hat_fisher_0">;
export type AvatarCustomizationMHatFlabebepack = AvatarCustomization<"AVATAR_m_hat_flabebepack">;
export type AvatarCustomizationMHatFragment0 = AvatarCustomization<"AVATAR_m_hat_fragment_0">;
export type AvatarCustomizationMHatFrlg0 = AvatarCustomization<"AVATAR_m_hat_frlg_0">;
export type AvatarCustomizationMHatFurfrouwig = AvatarCustomization<"AVATAR_m_hat_furfrouwig">;
export type AvatarCustomizationMHatFw2022 = AvatarCustomization<"AVATAR_m_hat_fw2022">;
export type AvatarCustomizationMHatGalarfarfetchditems = AvatarCustomization<"AVATAR_m_hat_galarfarfetchditems">;
export type AvatarCustomizationMHatGenesecteventitem = AvatarCustomization<"AVATAR_m_hat_genesecteventitem">;
export type AvatarCustomizationMHatGengar0 = AvatarCustomization<"AVATAR_m_hat_gengar_0">;
export type AvatarCustomizationMHatGimmighoulitems = AvatarCustomization<"AVATAR_m_hat_gimmighoulitems">;
export type AvatarCustomizationMHatGiratinaitems = AvatarCustomization<"AVATAR_m_hat_giratinaitems">;
export type AvatarCustomizationMHatGladion = AvatarCustomization<"AVATAR_m_hat_gladion">;
export type AvatarCustomizationMHatGoomy = AvatarCustomization<"AVATAR_m_hat_goomy">;
export type AvatarCustomizationMHatGreavardwig = AvatarCustomization<"AVATAR_m_hat_greavardwig">;
export type AvatarCustomizationMHatGreencoat = AvatarCustomization<"AVATAR_m_hat_greencoat">;
export type AvatarCustomizationMHatGrowlithehelmet = AvatarCustomization<"AVATAR_m_hat_growlithehelmet">;
export type AvatarCustomizationMHatGtr2024eeveefanmask = AvatarCustomization<"AVATAR_m_hat_gtr2024eeveefanmask">;
export type AvatarCustomizationMHatGtr2024pikachufanmask = AvatarCustomization<"AVATAR_m_hat_gtr2024pikachufanmask">;
export type AvatarCustomizationMHatGuccihat = AvatarCustomization<"AVATAR_m_hat_guccihat">;
export type AvatarCustomizationMHatGuzma = AvatarCustomization<"AVATAR_m_hat_guzma">;
export type AvatarCustomizationMHatGyaradoscap = AvatarCustomization<"AVATAR_m_hat_gyaradoscap">;
export type AvatarCustomizationMHatHgss0 = AvatarCustomization<"AVATAR_m_hat_hgss_0">;
export type AvatarCustomizationMHatHoliday2022santacostumes = AvatarCustomization<"AVATAR_m_hat_holiday2022santacostumes">;
export type AvatarCustomizationMHatHolidaybeanie = AvatarCustomization<"AVATAR_m_hat_holidaybeanie">;
export type AvatarCustomizationMHatHoopaearmuffs = AvatarCustomization<"AVATAR_m_hat_hoopaearmuffs">;
export type AvatarCustomizationMHatIngo = AvatarCustomization<"AVATAR_m_hat_ingo">;
export type AvatarCustomizationMHatJogger0 = AvatarCustomization<"AVATAR_m_hat_jogger_0">;
export type AvatarCustomizationMHatKantotourcapgreen = AvatarCustomization<"AVATAR_m_hat_kantotourcapgreen">;
export type AvatarCustomizationMHatKantotourcapred = AvatarCustomization<"AVATAR_m_hat_kantotourcapred">;
export type AvatarCustomizationMHatKorrina = AvatarCustomization<"AVATAR_m_hat_korrina">;
export type AvatarCustomizationMHatLana = AvatarCustomization<"AVATAR_m_hat_lana">;
export type AvatarCustomizationMHatLaprasbandana = AvatarCustomization<"AVATAR_m_hat_laprasbandana">;
export type AvatarCustomizationMHatLasecuritycorps = AvatarCustomization<"AVATAR_m_hat_lasecuritycorps">;
export type AvatarCustomizationMHatLegendofarceus = AvatarCustomization<"AVATAR_m_hat_legendofarceus">;
export type AvatarCustomizationMHatLitwickhat = AvatarCustomization<"AVATAR_m_hat_litwickhat">;
export type AvatarCustomizationMHatLoneearrings = AvatarCustomization<"AVATAR_m_hat_loneearrings">;
export type AvatarCustomizationMHatLvl50cap = AvatarCustomization<"AVATAR_m_hat_lvl50cap">;
export type AvatarCustomizationMHatMagikarp = AvatarCustomization<"AVATAR_m_hat_magikarp">;
export type AvatarCustomizationMHatMareaniehat = AvatarCustomization<"AVATAR_m_hat_mareaniehat">;
export type AvatarCustomizationMHatMegalopunnyitems = AvatarCustomization<"AVATAR_m_hat_megalopunnyitems">;
export type AvatarCustomizationMHatMegarayquaza = AvatarCustomization<"AVATAR_m_hat_megarayquaza">;
export type AvatarCustomizationMHatMeltan = AvatarCustomization<"AVATAR_m_hat_meltan">;
export type AvatarCustomizationMHatMewtwo = AvatarCustomization<"AVATAR_m_hat_mewtwo">;
export type AvatarCustomizationMHatMimikyu0 = AvatarCustomization<"AVATAR_m_hat_mimikyu_0">;
export type AvatarCustomizationMHatMismagius0 = AvatarCustomization<"AVATAR_m_hat_mismagius_0">;
export type AvatarCustomizationMHatMovie2020 = AvatarCustomization<"AVATAR_m_hat_movie2020">;
export type AvatarCustomizationMHatMunnapack0 = AvatarCustomization<"AVATAR_m_hat_munnapack_0">;
export type AvatarCustomizationMHatMunnapack1 = AvatarCustomization<"AVATAR_m_hat_munnapack_1">;
export type AvatarCustomizationMHatNewyear2022 = AvatarCustomization<"AVATAR_m_hat_newyear2022">;
export type AvatarCustomizationMHatNewyearhat2021 = AvatarCustomization<"AVATAR_m_hat_newyearhat2021">;
export type AvatarCustomizationMHatNewyearhat2023 = AvatarCustomization<"AVATAR_m_hat_newyearhat2023">;
export type AvatarCustomizationMHatNihilegoitems = AvatarCustomization<"AVATAR_m_hat_nihilegoitems">;
export type AvatarCustomizationMHatNoibat = AvatarCustomization<"AVATAR_m_hat_noibat">;
export type AvatarCustomizationMHatObstagoonitems = AvatarCustomization<"AVATAR_m_hat_obstagoonitems">;
export type AvatarCustomizationMHatOras = AvatarCustomization<"AVATAR_m_hat_oras">;
export type AvatarCustomizationMHatOricoriopink = AvatarCustomization<"AVATAR_m_hat_oricorioPink">;
export type AvatarCustomizationMHatOricoriopurple = AvatarCustomization<"AVATAR_m_hat_oricorioPurple">;
export type AvatarCustomizationMHatOricoriored = AvatarCustomization<"AVATAR_m_hat_oricorioRed">;
export type AvatarCustomizationMHatOricorioyellow = AvatarCustomization<"AVATAR_m_hat_oricorioYellow">;
export type AvatarCustomizationMHatPartneritemsjan2024hat = AvatarCustomization<"AVATAR_m_hat_partneritemsjan2024hat">;
export type AvatarCustomizationMHatPhantump = AvatarCustomization<"AVATAR_m_hat_phantump">;
export type AvatarCustomizationMHatPikachucap = AvatarCustomization<"AVATAR_m_hat_pikachucap">;
export type AvatarCustomizationMHatPikachufan0 = AvatarCustomization<"AVATAR_m_hat_pikachufan_0">;
export type AvatarCustomizationMHatPikachulibre = AvatarCustomization<"AVATAR_m_hat_pikachulibre">;
export type AvatarCustomizationMHatPikachupumpkinhead = AvatarCustomization<"AVATAR_m_hat_pikachupumpkinhead">;
export type AvatarCustomizationMHatPkmncap0 = AvatarCustomization<"AVATAR_m_hat_pkmncap_0">;
export type AvatarCustomizationMHatPkmncap1 = AvatarCustomization<"AVATAR_m_hat_pkmncap_1">;
export type AvatarCustomizationMHatPkmncap2 = AvatarCustomization<"AVATAR_m_hat_pkmncap_2">;
export type AvatarCustomizationMHatPoipole = AvatarCustomization<"AVATAR_m_hat_poipole">;
export type AvatarCustomizationMHatProfwillowoutfit = AvatarCustomization<"AVATAR_m_hat_profwillowoutfit">;
export type AvatarCustomizationMHatRegiicejersies = AvatarCustomization<"AVATAR_m_hat_regiicejersies">;
export type AvatarCustomizationMHatRegirockjersies = AvatarCustomization<"AVATAR_m_hat_regirockjersies">;
export type AvatarCustomizationMHatRegisteeljersies = AvatarCustomization<"AVATAR_m_hat_registeeljersies">;
export type AvatarCustomizationMHatRuinmaniac = AvatarCustomization<"AVATAR_m_hat_ruinmaniac">;
export type AvatarCustomizationMHatSableyegoggles = AvatarCustomization<"AVATAR_m_hat_sableyegoggles">;
export type AvatarCustomizationMHatSamsungsummer2020 = AvatarCustomization<"AVATAR_m_hat_samsungsummer2020">;
export type AvatarCustomizationMHatSandygasthat = AvatarCustomization<"AVATAR_m_hat_sandygasthat">;
export type AvatarCustomizationMHatShayminhat = AvatarCustomization<"AVATAR_m_hat_shayminhat">;
export type AvatarCustomizationMHatSlowpoketailshirts = AvatarCustomization<"AVATAR_m_hat_slowpoketailshirts">;
export type AvatarCustomizationMHatSnorlaxnightcap = AvatarCustomization<"AVATAR_m_hat_snorlaxnightcap">;
export type AvatarCustomizationMHatSolgaleoitems = AvatarCustomization<"AVATAR_m_hat_solgaleoitems">;
export type AvatarCustomizationMHatSs = AvatarCustomization<"AVATAR_m_hat_ss">;
export type AvatarCustomizationMHatStantlerheadband = AvatarCustomization<"AVATAR_m_hat_stantlerheadband">;
export type AvatarCustomizationMHatStrawhat = AvatarCustomization<"AVATAR_m_hat_strawhat">;
export type AvatarCustomizationMHatSummer2023 = AvatarCustomization<"AVATAR_m_hat_summer2023">;
export type AvatarCustomizationMHatSvcostumescarletschool = AvatarCustomization<"AVATAR_m_hat_svcostumescarletschool">;
export type AvatarCustomizationMHatSvcostumevioletschool = AvatarCustomization<"AVATAR_m_hat_svcostumevioletschool">;
export type AvatarCustomizationMHatSwshdlc2costume = AvatarCustomization<"AVATAR_m_hat_swshdlc2costume">;
export type AvatarCustomizationMHatSwshuniformchampion = AvatarCustomization<"AVATAR_m_hat_swshuniformchampion">;
export type AvatarCustomizationMHatSylveonitems = AvatarCustomization<"AVATAR_m_hat_sylveonitems">;
export type AvatarCustomizationMHatTcgcollabtshirtandcap = AvatarCustomization<"AVATAR_m_hat_tcgcollabtshirtandcap">;
export type AvatarCustomizationMHatTeamaqua = AvatarCustomization<"AVATAR_m_hat_teamaqua">;
export type AvatarCustomizationMHatTeamleadercap0 = AvatarCustomization<"AVATAR_m_hat_teamleadercap_0">;
export type AvatarCustomizationMHatTeamleadercap1 = AvatarCustomization<"AVATAR_m_hat_teamleadercap_1">;
export type AvatarCustomizationMHatTeamleadercap2 = AvatarCustomization<"AVATAR_m_hat_teamleadercap_2">;
export type AvatarCustomizationMHatTeamrocket0 = AvatarCustomization<"AVATAR_m_hat_teamrocket_0">;
export type AvatarCustomizationMHatTeamrocketcap = AvatarCustomization<"AVATAR_m_hat_teamrocketcap">;
export type AvatarCustomizationMHatTeamskull = AvatarCustomization<"AVATAR_m_hat_teamskull">;
export type AvatarCustomizationMHatTophat0 = AvatarCustomization<"AVATAR_m_hat_tophat_0">;
export type AvatarCustomizationMHatUltrareconsquad = AvatarCustomization<"AVATAR_m_hat_ultraReconSquad">;
export type AvatarCustomizationMHatUltrareconsquadb = AvatarCustomization<"AVATAR_m_hat_ultraReconSquadB">;
export type AvatarCustomizationMHatUltra0 = AvatarCustomization<"AVATAR_m_hat_ultra_0">;
export type AvatarCustomizationMHatVerizon2021 = AvatarCustomization<"AVATAR_m_hat_verizon2021">;
export type AvatarCustomizationMHatWcs2022winnersitems = AvatarCustomization<"AVATAR_m_hat_wcs2022winnersitems">;
export type AvatarCustomizationMHatWhimsicottearmuff = AvatarCustomization<"AVATAR_m_hat_whimsicottearmuff">;
export type AvatarCustomizationMHatWillowglasses = AvatarCustomization<"AVATAR_m_hat_willowglasses">;
export type AvatarCustomizationMHatWoobatearrings = AvatarCustomization<"AVATAR_m_hat_woobatearrings">;
export type AvatarCustomizationMHatYamaskhat = AvatarCustomization<"AVATAR_m_hat_yamaskhat">;
export type AvatarCustomizationMHatYamaskmask = AvatarCustomization<"AVATAR_m_hat_yamaskmask">;
export type AvatarCustomizationMHatZubathat = AvatarCustomization<"AVATAR_m_hat_zubathat">;
export type AvatarCustomizationMJacketNewyear2022 = AvatarCustomization<"AVATAR_m_jacket_newyear2022">;
export type AvatarCustomizationMPants6thanniversary = AvatarCustomization<"AVATAR_m_pants_6thanniversary">;
export type AvatarCustomizationMPants7thanniversary = AvatarCustomization<"AVATAR_m_pants_7thanniversary">;
export type AvatarCustomizationMPantsAcetrainerbw = AvatarCustomization<"AVATAR_m_pants_acetrainerbw">;
export type AvatarCustomizationMPantsAcetrainersm = AvatarCustomization<"AVATAR_m_pants_acetrainersm">;
export type AvatarCustomizationMPantsAnimegou = AvatarCustomization<"AVATAR_m_pants_animegou">;
export type AvatarCustomizationMPantsBackpacker = AvatarCustomization<"AVATAR_m_pants_backpacker">;
export type AvatarCustomizationMPantsBounsweetitems = AvatarCustomization<"AVATAR_m_pants_bounsweetitems">;
export type AvatarCustomizationMPantsBrock = AvatarCustomization<"AVATAR_m_pants_brock">;
export type AvatarCustomizationMPantsBwn = AvatarCustomization<"AVATAR_m_pants_bwn">;
export type AvatarCustomizationMPantsCasual0 = AvatarCustomization<"AVATAR_m_pants_casual_0">;
export type AvatarCustomizationMPantsCasual1 = AvatarCustomization<"AVATAR_m_pants_casual_1">;
export type AvatarCustomizationMPantsClay = AvatarCustomization<"AVATAR_m_pants_clay">;
export type AvatarCustomizationMPantsDefault0 = AvatarCustomization<"AVATAR_m_pants_default_0">;
export type AvatarCustomizationMPantsDenimfashionweek2023 = AvatarCustomization<"AVATAR_m_pants_denimfashionweek2023">;
export type AvatarCustomizationMPantsDp = AvatarCustomization<"AVATAR_m_pants_dp">;
export type AvatarCustomizationMPantsElesa = AvatarCustomization<"AVATAR_m_pants_elesa">;
export type AvatarCustomizationMPantsFashionweek2022 = AvatarCustomization<"AVATAR_m_pants_fashionWeek2022">;
export type AvatarCustomizationMPantsFisher0 = AvatarCustomization<"AVATAR_m_pants_fisher_0">;
export type AvatarCustomizationMPantsFlabebepack = AvatarCustomization<"AVATAR_m_pants_flabebepack">;
export type AvatarCustomizationMPantsFrlg0 = AvatarCustomization<"AVATAR_m_pants_frlg_0">;
export type AvatarCustomizationMPantsFw2022 = AvatarCustomization<"AVATAR_m_pants_fw2022">;
export type AvatarCustomizationMPantsGeeta = AvatarCustomization<"AVATAR_m_pants_geeta">;
export type AvatarCustomizationMPantsGenderlessskirt = AvatarCustomization<"AVATAR_m_pants_genderlessskirt">;
export type AvatarCustomizationMPantsGiovanni = AvatarCustomization<"AVATAR_m_pants_giovanni">;
export type AvatarCustomizationMPantsGladion = AvatarCustomization<"AVATAR_m_pants_gladion">;
export type AvatarCustomizationMPantsGothitelleitems = AvatarCustomization<"AVATAR_m_pants_gothitelleitems">;
export type AvatarCustomizationMPantsGreen = AvatarCustomization<"AVATAR_m_pants_green">;
export type AvatarCustomizationMPantsGreencoat = AvatarCustomization<"AVATAR_m_pants_greencoat">;
export type AvatarCustomizationMPantsGuzma = AvatarCustomization<"AVATAR_m_pants_guzma">;
export type AvatarCustomizationMPantsGymleader0 = AvatarCustomization<"AVATAR_m_pants_gymleader_0">;
export type AvatarCustomizationMPantsGymleader1 = AvatarCustomization<"AVATAR_m_pants_gymleader_1">;
export type AvatarCustomizationMPantsGymleader2 = AvatarCustomization<"AVATAR_m_pants_gymleader_2">;
export type AvatarCustomizationMPantsHala = AvatarCustomization<"AVATAR_m_pants_hala">;
export type AvatarCustomizationMPantsHgss0 = AvatarCustomization<"AVATAR_m_pants_hgss_0">;
export type AvatarCustomizationMPantsIngo = AvatarCustomization<"AVATAR_m_pants_ingo">;
export type AvatarCustomizationMPantsJogger0 = AvatarCustomization<"AVATAR_m_pants_jogger_0">;
export type AvatarCustomizationMPantsKorrina = AvatarCustomization<"AVATAR_m_pants_korrina">;
export type AvatarCustomizationMPantsLoosepants = AvatarCustomization<"AVATAR_m_pants_loosepants">;
export type AvatarCustomizationMPantsLunalaitems = AvatarCustomization<"AVATAR_m_pants_lunalaitems">;
export type AvatarCustomizationMPantsLuvdiscpack = AvatarCustomization<"AVATAR_m_pants_luvdiscpack">;
export type AvatarCustomizationMPantsLysandre = AvatarCustomization<"AVATAR_m_pants_lysandre">;
export type AvatarCustomizationMPantsMewtwo = AvatarCustomization<"AVATAR_m_pants_mewtwo">;
export type AvatarCustomizationMPantsMunnapack = AvatarCustomization<"AVATAR_m_pants_munnapack">;
export type AvatarCustomizationMPantsNewyear2022 = AvatarCustomization<"AVATAR_m_pants_newyear2022">;
export type AvatarCustomizationMPantsOras = AvatarCustomization<"AVATAR_m_pants_oras">;
export type AvatarCustomizationMPantsPajamas20220 = AvatarCustomization<"AVATAR_m_pants_pajamas2022_0">;
export type AvatarCustomizationMPantsPajamas20221 = AvatarCustomization<"AVATAR_m_pants_pajamas2022_1">;
export type AvatarCustomizationMPantsPalmer = AvatarCustomization<"AVATAR_m_pants_palmer">;
export type AvatarCustomizationMPantsPikachufan0 = AvatarCustomization<"AVATAR_m_pants_pikachufan_0">;
export type AvatarCustomizationMPantsPikachulibre = AvatarCustomization<"AVATAR_m_pants_pikachulibre">;
export type AvatarCustomizationMPantsProfwillowoutfit = AvatarCustomization<"AVATAR_m_pants_profwillowoutfit">;
export type AvatarCustomizationMPantsPumpkabooitems = AvatarCustomization<"AVATAR_m_pants_pumpkabooitems">;
export type AvatarCustomizationMPantsRegiicejersies = AvatarCustomization<"AVATAR_m_pants_regiicejersies">;
export type AvatarCustomizationMPantsRegirockjersies = AvatarCustomization<"AVATAR_m_pants_regirockjersies">;
export type AvatarCustomizationMPantsRegisteeljersies = AvatarCustomization<"AVATAR_m_pants_registeeljersies">;
export type AvatarCustomizationMPantsSkinnyjeans0 = AvatarCustomization<"AVATAR_m_pants_skinnyjeans_0">;
export type AvatarCustomizationMPantsSkinnyjeans1 = AvatarCustomization<"AVATAR_m_pants_skinnyjeans_1">;
export type AvatarCustomizationMPantsSkinnyjeans2 = AvatarCustomization<"AVATAR_m_pants_skinnyjeans_2">;
export type AvatarCustomizationMPantsSs = AvatarCustomization<"AVATAR_m_pants_ss">;
export type AvatarCustomizationMPantsSteven = AvatarCustomization<"AVATAR_m_pants_steven">;
export type AvatarCustomizationMPantsStevenfirst = AvatarCustomization<"AVATAR_m_pants_stevenfirst">;
export type AvatarCustomizationMPantsSweats0 = AvatarCustomization<"AVATAR_m_pants_sweats_0">;
export type AvatarCustomizationMPantsSweats1 = AvatarCustomization<"AVATAR_m_pants_sweats_1">;
export type AvatarCustomizationMPantsSweats2 = AvatarCustomization<"AVATAR_m_pants_sweats_2">;
export type AvatarCustomizationMPantsSweats3 = AvatarCustomization<"AVATAR_m_pants_sweats_3">;
export type AvatarCustomizationMPantsSweats4 = AvatarCustomization<"AVATAR_m_pants_sweats_4">;
export type AvatarCustomizationMPantsSwshdlc2costume = AvatarCustomization<"AVATAR_m_pants_swshdlc2costume">;
export type AvatarCustomizationMPantsSwshuniformchampion = AvatarCustomization<"AVATAR_m_pants_swshuniformchampion">;
export type AvatarCustomizationMPantsSwshuniformdark = AvatarCustomization<"AVATAR_m_pants_swshuniformdark">;
export type AvatarCustomizationMPantsSwshuniformdefault = AvatarCustomization<"AVATAR_m_pants_swshuniformdefault">;
export type AvatarCustomizationMPantsSwshuniformdragon = AvatarCustomization<"AVATAR_m_pants_swshuniformdragon">;
export type AvatarCustomizationMPantsTeamaqua = AvatarCustomization<"AVATAR_m_pants_teamaqua">;
export type AvatarCustomizationMPantsTeamblanche = AvatarCustomization<"AVATAR_m_pants_teamblanche">;
export type AvatarCustomizationMPantsTeamcandela = AvatarCustomization<"AVATAR_m_pants_teamcandela">;
export type AvatarCustomizationMPantsTeammagma = AvatarCustomization<"AVATAR_m_pants_teammagma">;
export type AvatarCustomizationMPantsTeamrocket0 = AvatarCustomization<"AVATAR_m_pants_teamrocket_0">;
export type AvatarCustomizationMPantsTeamskull = AvatarCustomization<"AVATAR_m_pants_teamskull">;
export type AvatarCustomizationMPantsTeamspark = AvatarCustomization<"AVATAR_m_pants_teamspark">;
export type AvatarCustomizationMPantsUltra0 = AvatarCustomization<"AVATAR_m_pants_ultra_0">;
export type AvatarCustomizationMPantsVeterantrainerxy = AvatarCustomization<"AVATAR_m_pants_veterantrainerxy">;
export type AvatarCustomizationMPantsWcs2022winnersitems = AvatarCustomization<"AVATAR_m_pants_wcs2022winnersitems">;
export type AvatarCustomizationMPose01 = AvatarCustomization<"AVATAR_m_pose_01">;
export type AvatarCustomizationMPose02 = AvatarCustomization<"AVATAR_m_pose_02">;
export type AvatarCustomizationMPose03 = AvatarCustomization<"AVATAR_m_pose_03">;
export type AvatarCustomizationMPose04 = AvatarCustomization<"AVATAR_m_pose_04">;
export type AvatarCustomizationMPose05 = AvatarCustomization<"AVATAR_m_pose_05">;
export type AvatarCustomizationMPose06 = AvatarCustomization<"AVATAR_m_pose_06">;
export type AvatarCustomizationMPose07 = AvatarCustomization<"AVATAR_m_pose_07">;
export type AvatarCustomizationMPose08 = AvatarCustomization<"AVATAR_m_pose_08">;
export type AvatarCustomizationMPose09 = AvatarCustomization<"AVATAR_m_pose_09">;
export type AvatarCustomizationMPose10 = AvatarCustomization<"AVATAR_m_pose_10">;
export type AvatarCustomizationMPose11 = AvatarCustomization<"AVATAR_m_pose_11">;
export type AvatarCustomizationMPose12 = AvatarCustomization<"AVATAR_m_pose_12">;
export type AvatarCustomizationMPose13 = AvatarCustomization<"AVATAR_m_pose_13">;
export type AvatarCustomizationMPose14 = AvatarCustomization<"AVATAR_m_pose_14">;
export type AvatarCustomizationMPose15 = AvatarCustomization<"AVATAR_m_pose_15">;
export type AvatarCustomizationMPose16 = AvatarCustomization<"AVATAR_m_pose_16">;
export type AvatarCustomizationMPose17 = AvatarCustomization<"AVATAR_m_pose_17">;
export type AvatarCustomizationMPose18 = AvatarCustomization<"AVATAR_m_pose_18">;
export type AvatarCustomizationMPose19 = AvatarCustomization<"AVATAR_m_pose_19">;
export type AvatarCustomizationMPose20 = AvatarCustomization<"AVATAR_m_pose_20">;
export type AvatarCustomizationMPose21 = AvatarCustomization<"AVATAR_m_pose_21">;
export type AvatarCustomizationMPose22 = AvatarCustomization<"AVATAR_m_pose_22">;
export type AvatarCustomizationMPose23 = AvatarCustomization<"AVATAR_m_pose_23">;
export type AvatarCustomizationMPose24 = AvatarCustomization<"AVATAR_m_pose_24">;
export type AvatarCustomizationMPose25 = AvatarCustomization<"AVATAR_m_pose_25">;
export type AvatarCustomizationMPose26 = AvatarCustomization<"AVATAR_m_pose_26">;
export type AvatarCustomizationMPose27 = AvatarCustomization<"AVATAR_m_pose_27">;
export type AvatarCustomizationMPose28 = AvatarCustomization<"AVATAR_m_pose_28">;
export type AvatarCustomizationMPose29 = AvatarCustomization<"AVATAR_m_pose_29">;
export type AvatarCustomizationMPose30 = AvatarCustomization<"AVATAR_m_pose_30">;
export type AvatarCustomizationMPose31 = AvatarCustomization<"AVATAR_m_pose_31">;
export type AvatarCustomizationMPose32 = AvatarCustomization<"AVATAR_m_pose_32">;
export type AvatarCustomizationMPose33 = AvatarCustomization<"AVATAR_m_pose_33">;
export type AvatarCustomizationMPose34 = AvatarCustomization<"AVATAR_m_pose_34">;
export type AvatarCustomizationMPose35 = AvatarCustomization<"AVATAR_m_pose_35">;
export type AvatarCustomizationMPose36 = AvatarCustomization<"AVATAR_m_pose_36">;
export type AvatarCustomizationMPose37 = AvatarCustomization<"AVATAR_m_pose_37">;
export type AvatarCustomizationMPose38 = AvatarCustomization<"AVATAR_m_pose_38">;
export type AvatarCustomizationMPose39 = AvatarCustomization<"AVATAR_m_pose_39">;
export type AvatarCustomizationMPose40 = AvatarCustomization<"AVATAR_m_pose_40">;
export type AvatarCustomizationMPose41 = AvatarCustomization<"AVATAR_m_pose_41">;
export type AvatarCustomizationMPose43 = AvatarCustomization<"AVATAR_m_pose_43">;
export type AvatarCustomizationMPose44 = AvatarCustomization<"AVATAR_m_pose_44">;
export type AvatarCustomizationMPose45 = AvatarCustomization<"AVATAR_m_pose_45">;
export type AvatarCustomizationMPose46 = AvatarCustomization<"AVATAR_m_pose_46">;
export type AvatarCustomizationMPose47 = AvatarCustomization<"AVATAR_m_pose_47">;
export type AvatarCustomizationMPose48 = AvatarCustomization<"AVATAR_m_pose_48">;
export type AvatarCustomizationMPose49 = AvatarCustomization<"AVATAR_m_pose_49">;
export type AvatarCustomizationMPose50 = AvatarCustomization<"AVATAR_m_pose_50">;
export type AvatarCustomizationMPose51 = AvatarCustomization<"AVATAR_m_pose_51">;
export type AvatarCustomizationMPose52 = AvatarCustomization<"AVATAR_m_pose_52">;
export type AvatarCustomizationMPose53 = AvatarCustomization<"AVATAR_m_pose_53">;
export type AvatarCustomizationMPose54 = AvatarCustomization<"AVATAR_m_pose_54">;
export type AvatarCustomizationMPose55 = AvatarCustomization<"AVATAR_m_pose_55">;
export type AvatarCustomizationMPose56 = AvatarCustomization<"AVATAR_m_pose_56">;
export type AvatarCustomizationMPose57 = AvatarCustomization<"AVATAR_m_pose_57">;
export type AvatarCustomizationMPose58 = AvatarCustomization<"AVATAR_m_pose_58">;
export type AvatarCustomizationMPose59 = AvatarCustomization<"AVATAR_m_pose_59">;
export type AvatarCustomizationMPose60 = AvatarCustomization<"AVATAR_m_pose_60">;
export type AvatarCustomizationMPose61 = AvatarCustomization<"AVATAR_m_pose_61">;
export type AvatarCustomizationMPose62 = AvatarCustomization<"AVATAR_m_pose_62">;
export type AvatarCustomizationMPose63 = AvatarCustomization<"AVATAR_m_pose_63">;
export type AvatarCustomizationMPose64 = AvatarCustomization<"AVATAR_m_pose_64">;
export type AvatarCustomizationMPoseEmpty = AvatarCustomization<"AVATAR_m_pose_empty">;
export type AvatarCustomizationMShirt6thanniversary = AvatarCustomization<"AVATAR_m_shirt_6thanniversary">;
export type AvatarCustomizationMShirt7thanniversary = AvatarCustomization<"AVATAR_m_shirt_7thanniversary">;
export type AvatarCustomizationMShirtAcetrainerbw = AvatarCustomization<"AVATAR_m_shirt_acetrainerbw">;
export type AvatarCustomizationMShirtAcetrainersm = AvatarCustomization<"AVATAR_m_shirt_acetrainersm">;
export type AvatarCustomizationMShirtAlolacomfey = AvatarCustomization<"AVATAR_m_shirt_alolacomfey">;
export type AvatarCustomizationMShirtAnimegou = AvatarCustomization<"AVATAR_m_shirt_animegou">;
export type AvatarCustomizationMShirtAseries = AvatarCustomization<"AVATAR_m_shirt_aseries">;
export type AvatarCustomizationMShirtBackpacker = AvatarCustomization<"AVATAR_m_shirt_backpacker">;
export type AvatarCustomizationMShirtBallguy = AvatarCustomization<"AVATAR_m_shirt_ballguy">;
export type AvatarCustomizationMShirtBea = AvatarCustomization<"AVATAR_m_shirt_bea">;
export type AvatarCustomizationMShirtBlazer0 = AvatarCustomization<"AVATAR_m_shirt_blazer_0">;
export type AvatarCustomizationMShirtBounsweetitems = AvatarCustomization<"AVATAR_m_shirt_bounsweetitems">;
export type AvatarCustomizationMShirtBrock = AvatarCustomization<"AVATAR_m_shirt_brock">;
export type AvatarCustomizationMShirtBuzzwoleitems = AvatarCustomization<"AVATAR_m_shirt_buzzwoleitems">;
export type AvatarCustomizationMShirtBwn = AvatarCustomization<"AVATAR_m_shirt_bwn">;
export type AvatarCustomizationMShirtCasual0 = AvatarCustomization<"AVATAR_m_shirt_casual_0">;
export type AvatarCustomizationMShirtCasual1 = AvatarCustomization<"AVATAR_m_shirt_casual_1">;
export type AvatarCustomizationMShirtCasual2 = AvatarCustomization<"AVATAR_m_shirt_casual_2">;
export type AvatarCustomizationMShirtCasual3 = AvatarCustomization<"AVATAR_m_shirt_casual_3">;
export type AvatarCustomizationMShirtCelebi0 = AvatarCustomization<"AVATAR_m_shirt_celebi_0">;
export type AvatarCustomizationMShirtChimcharonesie = AvatarCustomization<"AVATAR_m_shirt_chimcharonesie">;
export type AvatarCustomizationMShirtClay = AvatarCustomization<"AVATAR_m_shirt_clay">;
export type AvatarCustomizationMShirtCofagrigusitems = AvatarCustomization<"AVATAR_m_shirt_cofagrigusitems">;
export type AvatarCustomizationMShirtCosmog = AvatarCustomization<"AVATAR_m_shirt_cosmog">;
export type AvatarCustomizationMShirtCowichansweater = AvatarCustomization<"AVATAR_m_shirt_cowichansweater">;
export type AvatarCustomizationMShirtDayofdead = AvatarCustomization<"AVATAR_m_shirt_dayofdead">;
export type AvatarCustomizationMShirtDefault0 = AvatarCustomization<"AVATAR_m_shirt_default_0">;
export type AvatarCustomizationMShirtDefault1 = AvatarCustomization<"AVATAR_m_shirt_default_1">;
export type AvatarCustomizationMShirtDefault2 = AvatarCustomization<"AVATAR_m_shirt_default_2">;
export type AvatarCustomizationMShirtDefault2b = AvatarCustomization<"AVATAR_m_shirt_default_2B">;
export type AvatarCustomizationMShirtDefault3 = AvatarCustomization<"AVATAR_m_shirt_default_3">;
export type AvatarCustomizationMShirtDefault4 = AvatarCustomization<"AVATAR_m_shirt_default_4">;
export type AvatarCustomizationMShirtDefault5 = AvatarCustomization<"AVATAR_m_shirt_default_5">;
export type AvatarCustomizationMShirtDefault6 = AvatarCustomization<"AVATAR_m_shirt_default_6">;
export type AvatarCustomizationMShirtDefault7 = AvatarCustomization<"AVATAR_m_shirt_default_7">;
export type AvatarCustomizationMShirtDelibird = AvatarCustomization<"AVATAR_m_shirt_delibird">;
export type AvatarCustomizationMShirtDelibirdonesie = AvatarCustomization<"AVATAR_m_shirt_delibirdonesie">;
export type AvatarCustomizationMShirtDenimfashionweek2023 = AvatarCustomization<"AVATAR_m_shirt_denimfashionweek2023">;
export type AvatarCustomizationMShirtDenimjacket = AvatarCustomization<"AVATAR_m_shirt_denimjacket">;
export type AvatarCustomizationMShirtDetectivepikachu = AvatarCustomization<"AVATAR_m_shirt_detectivepikachu">;
export type AvatarCustomizationMShirtDiancie = AvatarCustomization<"AVATAR_m_shirt_diancie">;
export type AvatarCustomizationMShirtDivingsuit = AvatarCustomization<"AVATAR_m_shirt_divingsuit">;
export type AvatarCustomizationMShirtDiwali2021 = AvatarCustomization<"AVATAR_m_shirt_diwali2021">;
export type AvatarCustomizationMShirtDp = AvatarCustomization<"AVATAR_m_shirt_dp">;
export type AvatarCustomizationMShirtDrifblim0 = AvatarCustomization<"AVATAR_m_shirt_drifblim_0">;
export type AvatarCustomizationMShirtDusclopsmummy = AvatarCustomization<"AVATAR_m_shirt_dusclopsmummy">;
export type AvatarCustomizationMShirtEarthday2018 = AvatarCustomization<"AVATAR_m_shirt_earthday_2018">;
export type AvatarCustomizationMShirtEeveestshirt00 = AvatarCustomization<"AVATAR_m_shirt_eeveestshirt_00">;
export type AvatarCustomizationMShirtEeveestshirt01 = AvatarCustomization<"AVATAR_m_shirt_eeveestshirt_01">;
export type AvatarCustomizationMShirtEeveestshirt02 = AvatarCustomization<"AVATAR_m_shirt_eeveestshirt_02">;
export type AvatarCustomizationMShirtEeveestshirt03 = AvatarCustomization<"AVATAR_m_shirt_eeveestshirt_03">;
export type AvatarCustomizationMShirtEeveestshirt04 = AvatarCustomization<"AVATAR_m_shirt_eeveestshirt_04">;
export type AvatarCustomizationMShirtEeveestshirt05 = AvatarCustomization<"AVATAR_m_shirt_eeveestshirt_05">;
export type AvatarCustomizationMShirtEeveestshirt06 = AvatarCustomization<"AVATAR_m_shirt_eeveestshirt_06">;
export type AvatarCustomizationMShirtEeveestshirt07 = AvatarCustomization<"AVATAR_m_shirt_eeveestshirt_07">;
export type AvatarCustomizationMShirtEeveestshirt08 = AvatarCustomization<"AVATAR_m_shirt_eeveestshirt_08">;
export type AvatarCustomizationMShirtElesa = AvatarCustomization<"AVATAR_m_shirt_elesa">;
export type AvatarCustomizationMShirtFashionweek2022 = AvatarCustomization<"AVATAR_m_shirt_fashionWeek2022">;
export type AvatarCustomizationMShirtFestivaloflights00 = AvatarCustomization<"AVATAR_m_shirt_festivaloflights_00">;
export type AvatarCustomizationMShirtFestivaloflights01 = AvatarCustomization<"AVATAR_m_shirt_festivaloflights_01">;
export type AvatarCustomizationMShirtFisher0 = AvatarCustomization<"AVATAR_m_shirt_fisher_0">;
export type AvatarCustomizationMShirtFlabebepack = AvatarCustomization<"AVATAR_m_shirt_flabebepack">;
export type AvatarCustomizationMShirtFragment0 = AvatarCustomization<"AVATAR_m_shirt_fragment_0">;
export type AvatarCustomizationMShirtFrlg0 = AvatarCustomization<"AVATAR_m_shirt_frlg_0">;
export type AvatarCustomizationMShirtFw2022 = AvatarCustomization<"AVATAR_m_shirt_fw2022">;
export type AvatarCustomizationMShirtGalarfarfetchditems = AvatarCustomization<"AVATAR_m_shirt_galarfarfetchditems">;
export type AvatarCustomizationMShirtGalaxyoutfit = AvatarCustomization<"AVATAR_m_shirt_galaxyoutfit">;
export type AvatarCustomizationMShirtGeeta = AvatarCustomization<"AVATAR_m_shirt_geeta">;
export type AvatarCustomizationMShirtGenderlessskirt = AvatarCustomization<"AVATAR_m_shirt_genderlessskirt">;
export type AvatarCustomizationMShirtGengar0 = AvatarCustomization<"AVATAR_m_shirt_gengar_0">;
export type AvatarCustomizationMShirtGengaronesie = AvatarCustomization<"AVATAR_m_shirt_gengaronesie">;
export type AvatarCustomizationMShirtGiovanni = AvatarCustomization<"AVATAR_m_shirt_giovanni">;
export type AvatarCustomizationMShirtGiratinaitems = AvatarCustomization<"AVATAR_m_shirt_giratinaitems">;
export type AvatarCustomizationMShirtGladion = AvatarCustomization<"AVATAR_m_shirt_gladion">;
export type AvatarCustomizationMShirtGofest2022 = AvatarCustomization<"AVATAR_m_shirt_gofest2022">;
export type AvatarCustomizationMShirtGofest2023 = AvatarCustomization<"AVATAR_m_shirt_gofest2023">;
export type AvatarCustomizationMShirtGofest2024darkgray = AvatarCustomization<"AVATAR_m_shirt_gofest2024darkgray">;
export type AvatarCustomizationMShirtGofest2024gray = AvatarCustomization<"AVATAR_m_shirt_gofest2024gray">;
export type AvatarCustomizationMShirtGofest2024purple = AvatarCustomization<"AVATAR_m_shirt_gofest2024purple">;
export type AvatarCustomizationMShirtGofest2019 = AvatarCustomization<"AVATAR_m_shirt_gofest_2019">;
export type AvatarCustomizationMShirtGofest2020 = AvatarCustomization<"AVATAR_m_shirt_gofest_2020">;
export type AvatarCustomizationMShirtGofest2021 = AvatarCustomization<"AVATAR_m_shirt_gofest_2021">;
export type AvatarCustomizationMShirtGofestglobal2023 = AvatarCustomization<"AVATAR_m_shirt_gofestglobal2023">;
export type AvatarCustomizationMShirtGoteamrocketarlo = AvatarCustomization<"AVATAR_m_shirt_goteamrocketarlo">;
export type AvatarCustomizationMShirtGoteamrocketcliff = AvatarCustomization<"AVATAR_m_shirt_goteamrocketcliff">;
export type AvatarCustomizationMShirtGoteamrocketsierra = AvatarCustomization<"AVATAR_m_shirt_goteamrocketsierra">;
export type AvatarCustomizationMShirtGothitelleitems = AvatarCustomization<"AVATAR_m_shirt_gothitelleitems">;
export type AvatarCustomizationMShirtGotour2023 = AvatarCustomization<"AVATAR_m_shirt_gotour2023">;
export type AvatarCustomizationMShirtGotour2024 = AvatarCustomization<"AVATAR_m_shirt_gotour2024">;
export type AvatarCustomizationMShirtGreedentsweater = AvatarCustomization<"AVATAR_m_shirt_greedentsweater">;
export type AvatarCustomizationMShirtGreen = AvatarCustomization<"AVATAR_m_shirt_green">;
export type AvatarCustomizationMShirtGreencoat = AvatarCustomization<"AVATAR_m_shirt_greencoat">;
export type AvatarCustomizationMShirtGtrtshirt202200 = AvatarCustomization<"AVATAR_m_shirt_gtrtshirt2022_00">;
export type AvatarCustomizationMShirtGtrtshirt202201 = AvatarCustomization<"AVATAR_m_shirt_gtrtshirt2022_01">;
export type AvatarCustomizationMShirtGuccitshirts = AvatarCustomization<"AVATAR_m_shirt_guccitshirts">;
export type AvatarCustomizationMShirtGuzma = AvatarCustomization<"AVATAR_m_shirt_guzma">;
export type AvatarCustomizationMShirtGymleader0 = AvatarCustomization<"AVATAR_m_shirt_gymleader_0">;
export type AvatarCustomizationMShirtGymleader1 = AvatarCustomization<"AVATAR_m_shirt_gymleader_1">;
export type AvatarCustomizationMShirtGymleader2 = AvatarCustomization<"AVATAR_m_shirt_gymleader_2">;
export type AvatarCustomizationMShirtHala = AvatarCustomization<"AVATAR_m_shirt_hala">;
export type AvatarCustomizationMShirtHappi = AvatarCustomization<"AVATAR_m_shirt_happi">;
export type AvatarCustomizationMShirtHappi1 = AvatarCustomization<"AVATAR_m_shirt_happi_1">;
export type AvatarCustomizationMShirtHappi2 = AvatarCustomization<"AVATAR_m_shirt_happi_2">;
export type AvatarCustomizationMShirtHgss0 = AvatarCustomization<"AVATAR_m_shirt_hgss_0">;
export type AvatarCustomizationMShirtHoliday2022santacostumes = AvatarCustomization<"AVATAR_m_shirt_holiday2022santacostumes">;
export type AvatarCustomizationMShirtHolifestival2021black = AvatarCustomization<"AVATAR_m_shirt_holifestival2021black">;
export type AvatarCustomizationMShirtHolifestival2021white = AvatarCustomization<"AVATAR_m_shirt_holifestival2021white">;
export type AvatarCustomizationMShirtHoopaunboundtshirt = AvatarCustomization<"AVATAR_m_shirt_hoopaunboundtshirt">;
export type AvatarCustomizationMShirtIngo = AvatarCustomization<"AVATAR_m_shirt_ingo">;
export type AvatarCustomizationMShirtIngress0 = AvatarCustomization<"AVATAR_m_shirt_ingress_0">;
export type AvatarCustomizationMShirtIngressE0 = AvatarCustomization<"AVATAR_m_shirt_ingress_e_0">;
export type AvatarCustomizationMShirtIngressR0 = AvatarCustomization<"AVATAR_m_shirt_ingress_r_0">;
export type AvatarCustomizationMShirtJames = AvatarCustomization<"AVATAR_m_shirt_james">;
export type AvatarCustomizationMShirtJirachi = AvatarCustomization<"AVATAR_m_shirt_jirachi">;
export type AvatarCustomizationMShirtJogger0 = AvatarCustomization<"AVATAR_m_shirt_jogger_0">;
export type AvatarCustomizationMShirtKeldeotshirt = AvatarCustomization<"AVATAR_m_shirt_keldeotshirt">;
export type AvatarCustomizationMShirtKorrina = AvatarCustomization<"AVATAR_m_shirt_korrina">;
export type AvatarCustomizationMShirtLadiamondoutfit = AvatarCustomization<"AVATAR_m_shirt_ladiamondoutfit">;
export type AvatarCustomizationMShirtLana = AvatarCustomization<"AVATAR_m_shirt_lana">;
export type AvatarCustomizationMShirtLapearloutfit = AvatarCustomization<"AVATAR_m_shirt_lapearloutfit">;
export type AvatarCustomizationMShirtLasecuritycorps = AvatarCustomization<"AVATAR_m_shirt_lasecuritycorps">;
export type AvatarCustomizationMShirtLatiasLatios0 = AvatarCustomization<"AVATAR_m_shirt_latias_latios_0">;
export type AvatarCustomizationMShirtLegendofarceus = AvatarCustomization<"AVATAR_m_shirt_legendofarceus">;
export type AvatarCustomizationMShirtLongsleevesCharizard0 = AvatarCustomization<"AVATAR_m_shirt_longsleeves_charizard_0">;
export type AvatarCustomizationMShirtLongsleevesCharizard1 = AvatarCustomization<"AVATAR_m_shirt_longsleeves_charizard_1">;
export type AvatarCustomizationMShirtLongsleevesCharizard2 = AvatarCustomization<"AVATAR_m_shirt_longsleeves_charizard_2">;
export type AvatarCustomizationMShirtLongsleevesPikachu0 = AvatarCustomization<"AVATAR_m_shirt_longsleeves_pikachu_0">;
export type AvatarCustomizationMShirtLongsleevesPikachu1 = AvatarCustomization<"AVATAR_m_shirt_longsleeves_pikachu_1">;
export type AvatarCustomizationMShirtLongsleevesPikachu2 = AvatarCustomization<"AVATAR_m_shirt_longsleeves_pikachu_2">;
export type AvatarCustomizationMShirtLuvdiscpack = AvatarCustomization<"AVATAR_m_shirt_luvdiscpack">;
export type AvatarCustomizationMShirtLvl50 = AvatarCustomization<"AVATAR_m_shirt_lvl50">;
export type AvatarCustomizationMShirtLvl501 = AvatarCustomization<"AVATAR_m_shirt_lvl50_1">;
export type AvatarCustomizationMShirtLysandre = AvatarCustomization<"AVATAR_m_shirt_lysandre">;
export type AvatarCustomizationMShirtMarshadowtshirt = AvatarCustomization<"AVATAR_m_shirt_marshadowtshirt">;
export type AvatarCustomizationMShirtMegalopunnyitems = AvatarCustomization<"AVATAR_m_shirt_megalopunnyitems">;
export type AvatarCustomizationMShirtMegarayquaza = AvatarCustomization<"AVATAR_m_shirt_megarayquaza">;
export type AvatarCustomizationMShirtMelmetaljacket = AvatarCustomization<"AVATAR_m_shirt_melmetaljacket">;
export type AvatarCustomizationMShirtMelmetalvest = AvatarCustomization<"AVATAR_m_shirt_melmetalvest">;
export type AvatarCustomizationMShirtMeloettatshirt = AvatarCustomization<"AVATAR_m_shirt_meloettatshirt">;
export type AvatarCustomizationMShirtMeltan = AvatarCustomization<"AVATAR_m_shirt_meltan">;
export type AvatarCustomizationMShirtMew0 = AvatarCustomization<"AVATAR_m_shirt_mew_0">;
export type AvatarCustomizationMShirtMewtwo = AvatarCustomization<"AVATAR_m_shirt_mewtwo">;
export type AvatarCustomizationMShirtMovie2020jessiejames = AvatarCustomization<"AVATAR_m_shirt_movie2020jessiejames">;
export type AvatarCustomizationMShirtMunnapack = AvatarCustomization<"AVATAR_m_shirt_munnapack">;
export type AvatarCustomizationMShirtNike2021 = AvatarCustomization<"AVATAR_m_shirt_nike2021">;
export type AvatarCustomizationMShirtOcshirt045 = AvatarCustomization<"AVATAR_m_shirt_ocshirt_045">;
export type AvatarCustomizationMShirtOcshirt108 = AvatarCustomization<"AVATAR_m_shirt_ocshirt_108">;
export type AvatarCustomizationMShirtOcshirt129 = AvatarCustomization<"AVATAR_m_shirt_ocshirt_129">;
export type AvatarCustomizationMShirtOcshirt143 = AvatarCustomization<"AVATAR_m_shirt_ocshirt_143">;
export type AvatarCustomizationMShirtOras = AvatarCustomization<"AVATAR_m_shirt_oras">;
export type AvatarCustomizationMShirtPajamas20220 = AvatarCustomization<"AVATAR_m_shirt_pajamas2022_0">;
export type AvatarCustomizationMShirtPajamas20221 = AvatarCustomization<"AVATAR_m_shirt_pajamas2022_1">;
export type AvatarCustomizationMShirtPalmer = AvatarCustomization<"AVATAR_m_shirt_palmer">;
export type AvatarCustomizationMShirtPartneritemsjan2024hoodie = AvatarCustomization<"AVATAR_m_shirt_partneritemsjan2024hoodie">;
export type AvatarCustomizationMShirtPartneritemsjan2024tshirt = AvatarCustomization<"AVATAR_m_shirt_partneritemsjan2024tshirt">;
export type AvatarCustomizationMShirtPikachufan0 = AvatarCustomization<"AVATAR_m_shirt_pikachufan_0">;
export type AvatarCustomizationMShirtPikachulibre = AvatarCustomization<"AVATAR_m_shirt_pikachulibre">;
export type AvatarCustomizationMShirtPikachuonesie = AvatarCustomization<"AVATAR_m_shirt_pikachuonesie">;
export type AvatarCustomizationMShirtPinpukuhoodie = AvatarCustomization<"AVATAR_m_shirt_pinpukuhoodie">;
export type AvatarCustomizationMShirtPipluponesie = AvatarCustomization<"AVATAR_m_shirt_pipluponesie">;
export type AvatarCustomizationMShirtPkmnhoodie001 = AvatarCustomization<"AVATAR_m_shirt_pkmnhoodie001">;
export type AvatarCustomizationMShirtPkmnhoodie004 = AvatarCustomization<"AVATAR_m_shirt_pkmnhoodie004">;
export type AvatarCustomizationMShirtPkmnhoodie007 = AvatarCustomization<"AVATAR_m_shirt_pkmnhoodie007">;
export type AvatarCustomizationMShirtPkmnshirts202100 = AvatarCustomization<"AVATAR_m_shirt_pkmnshirts2021_00">;
export type AvatarCustomizationMShirtPkmnshirts202101 = AvatarCustomization<"AVATAR_m_shirt_pkmnshirts2021_01">;
export type AvatarCustomizationMShirtPkmnshirts202102 = AvatarCustomization<"AVATAR_m_shirt_pkmnshirts2021_02">;
export type AvatarCustomizationMShirtPkmnshirts165 = AvatarCustomization<"AVATAR_m_shirt_pkmnshirts_165">;
export type AvatarCustomizationMShirtPkmnshirts188 = AvatarCustomization<"AVATAR_m_shirt_pkmnshirts_188">;
export type AvatarCustomizationMShirtPkmnshirts201 = AvatarCustomization<"AVATAR_m_shirt_pkmnshirts_201">;
export type AvatarCustomizationMShirtPkmnshirts238 = AvatarCustomization<"AVATAR_m_shirt_pkmnshirts_238">;
export type AvatarCustomizationMShirtPoloshirt = AvatarCustomization<"AVATAR_m_shirt_poloshirt">;
export type AvatarCustomizationMShirtPoloshirt1 = AvatarCustomization<"AVATAR_m_shirt_poloshirt_1">;
export type AvatarCustomizationMShirtPoloshirt2 = AvatarCustomization<"AVATAR_m_shirt_poloshirt_2">;
export type AvatarCustomizationMShirtProfwillowoutfit = AvatarCustomization<"AVATAR_m_shirt_profwillowoutfit">;
export type AvatarCustomizationMShirtProjectguitar = AvatarCustomization<"AVATAR_m_shirt_projectguitar">;
export type AvatarCustomizationMShirtPumpkabooitems = AvatarCustomization<"AVATAR_m_shirt_pumpkabooitems">;
export type AvatarCustomizationMShirtRegiicejersies = AvatarCustomization<"AVATAR_m_shirt_regiicejersies">;
export type AvatarCustomizationMShirtRegirockjersies = AvatarCustomization<"AVATAR_m_shirt_regirockjersies">;
export type AvatarCustomizationMShirtRegisteeljersies = AvatarCustomization<"AVATAR_m_shirt_registeeljersies">;
export type AvatarCustomizationMShirtReuniclusitems = AvatarCustomization<"AVATAR_m_shirt_reuniclusitems">;
export type AvatarCustomizationMShirtRuinmaniac = AvatarCustomization<"AVATAR_m_shirt_ruinmaniac">;
export type AvatarCustomizationMShirtSafarizone2020 = AvatarCustomization<"AVATAR_m_shirt_safarizone2020">;
export type AvatarCustomizationMShirtSamsungsummer2020 = AvatarCustomization<"AVATAR_m_shirt_samsungsummer2020">;
export type AvatarCustomizationMShirtShayminlandtshirt = AvatarCustomization<"AVATAR_m_shirt_shayminlandtshirt">;
export type AvatarCustomizationMShirtShayminskytshirt = AvatarCustomization<"AVATAR_m_shirt_shayminskytshirt">;
export type AvatarCustomizationMShirtShinymewtshirts = AvatarCustomization<"AVATAR_m_shirt_shinymewtshirts">;
export type AvatarCustomizationMShirtSlowpokeshirts = AvatarCustomization<"AVATAR_m_shirt_slowpokeshirts">;
export type AvatarCustomizationMShirtSlowpoketailshirts = AvatarCustomization<"AVATAR_m_shirt_slowpoketailshirts">;
export type AvatarCustomizationMShirtSnorlaxonesie = AvatarCustomization<"AVATAR_m_shirt_snorlaxonesie">;
export type AvatarCustomizationMShirtSpiritomb0 = AvatarCustomization<"AVATAR_m_shirt_spiritomb_0">;
export type AvatarCustomizationMShirtSpring2021gulpin = AvatarCustomization<"AVATAR_m_shirt_spring2021gulpin">;
export type AvatarCustomizationMShirtSpring2021plusle = AvatarCustomization<"AVATAR_m_shirt_spring2021plusle">;
export type AvatarCustomizationMShirtSs = AvatarCustomization<"AVATAR_m_shirt_ss">;
export type AvatarCustomizationMShirtSteven = AvatarCustomization<"AVATAR_m_shirt_steven">;
export type AvatarCustomizationMShirtStevenfirst = AvatarCustomization<"AVATAR_m_shirt_stevenfirst">;
export type AvatarCustomizationMShirtSukajanblastoise = AvatarCustomization<"AVATAR_m_shirt_sukajanblastoise">;
export type AvatarCustomizationMShirtSukajancharizard = AvatarCustomization<"AVATAR_m_shirt_sukajancharizard">;
export type AvatarCustomizationMShirtSukajanhouou = AvatarCustomization<"AVATAR_m_shirt_sukajanhouou">;
export type AvatarCustomizationMShirtSukajanlugia = AvatarCustomization<"AVATAR_m_shirt_sukajanlugia">;
export type AvatarCustomizationMShirtSukajanvenusaur = AvatarCustomization<"AVATAR_m_shirt_sukajanvenusaur">;
export type AvatarCustomizationMShirtSummer2023 = AvatarCustomization<"AVATAR_m_shirt_summer2023">;
export type AvatarCustomizationMShirtSustainability2021 = AvatarCustomization<"AVATAR_m_shirt_sustainability2021">;
export type AvatarCustomizationMShirtSvcostumescarletschool = AvatarCustomization<"AVATAR_m_shirt_svcostumescarletschool">;
export type AvatarCustomizationMShirtSvcostumevioletschool = AvatarCustomization<"AVATAR_m_shirt_svcostumevioletschool">;
export type AvatarCustomizationMShirtSvdlc1 = AvatarCustomization<"AVATAR_m_shirt_svdlc1">;
export type AvatarCustomizationMShirtSvdlc2fall = AvatarCustomization<"AVATAR_m_shirt_svdlc2fall">;
export type AvatarCustomizationMShirtSvdlc2spring = AvatarCustomization<"AVATAR_m_shirt_svdlc2spring">;
export type AvatarCustomizationMShirtSweatshirtSporty0 = AvatarCustomization<"AVATAR_m_shirt_sweatshirt_sporty_0">;
export type AvatarCustomizationMShirtSweatshirtSporty1 = AvatarCustomization<"AVATAR_m_shirt_sweatshirt_sporty_1">;
export type AvatarCustomizationMShirtSweatshirtSporty2 = AvatarCustomization<"AVATAR_m_shirt_sweatshirt_sporty_2">;
export type AvatarCustomizationMShirtSweatshirtSporty3 = AvatarCustomization<"AVATAR_m_shirt_sweatshirt_sporty_3">;
export type AvatarCustomizationMShirtSweatshirtStreak0 = AvatarCustomization<"AVATAR_m_shirt_sweatshirt_streak_0">;
export type AvatarCustomizationMShirtSweatshirtStreak1 = AvatarCustomization<"AVATAR_m_shirt_sweatshirt_streak_1">;
export type AvatarCustomizationMShirtSweatshirtStreak2 = AvatarCustomization<"AVATAR_m_shirt_sweatshirt_streak_2">;
export type AvatarCustomizationMShirtSweatshirtStreak3 = AvatarCustomization<"AVATAR_m_shirt_sweatshirt_streak_3">;
export type AvatarCustomizationMShirtSweatshirtStreak4 = AvatarCustomization<"AVATAR_m_shirt_sweatshirt_streak_4">;
export type AvatarCustomizationMShirtSwshdlc2costume = AvatarCustomization<"AVATAR_m_shirt_swshdlc2costume">;
export type AvatarCustomizationMShirtSwshdlccostume = AvatarCustomization<"AVATAR_m_shirt_swshdlccostume">;
export type AvatarCustomizationMShirtSwshuniformchampion = AvatarCustomization<"AVATAR_m_shirt_swshuniformchampion">;
export type AvatarCustomizationMShirtSwshuniformdark = AvatarCustomization<"AVATAR_m_shirt_swshuniformdark">;
export type AvatarCustomizationMShirtSwshuniformdefault = AvatarCustomization<"AVATAR_m_shirt_swshuniformdefault">;
export type AvatarCustomizationMShirtSwshuniformdragon = AvatarCustomization<"AVATAR_m_shirt_swshuniformdragon">;
export type AvatarCustomizationMShirtSylveonitems = AvatarCustomization<"AVATAR_m_shirt_sylveonitems">;
export type AvatarCustomizationMShirtTcgcollabtshirtandcap = AvatarCustomization<"AVATAR_m_shirt_tcgcollabtshirtandcap">;
export type AvatarCustomizationMShirtTeamaqua = AvatarCustomization<"AVATAR_m_shirt_teamaqua">;
export type AvatarCustomizationMShirtTeamblanche = AvatarCustomization<"AVATAR_m_shirt_teamblanche">;
export type AvatarCustomizationMShirtTeamcandela = AvatarCustomization<"AVATAR_m_shirt_teamcandela">;
export type AvatarCustomizationMShirtTeammagma = AvatarCustomization<"AVATAR_m_shirt_teammagma">;
export type AvatarCustomizationMShirtTeamrocket0 = AvatarCustomization<"AVATAR_m_shirt_teamrocket_0">;
export type AvatarCustomizationMShirtTeamrocket1 = AvatarCustomization<"AVATAR_m_shirt_teamrocket_1">;
export type AvatarCustomizationMShirtTeamskull = AvatarCustomization<"AVATAR_m_shirt_teamskull">;
export type AvatarCustomizationMShirtTeamspark = AvatarCustomization<"AVATAR_m_shirt_teamspark">;
export type AvatarCustomizationMShirtTogepihoodie = AvatarCustomization<"AVATAR_m_shirt_togepihoodie">;
export type AvatarCustomizationMShirtTracksuitsgroudon = AvatarCustomization<"AVATAR_m_shirt_tracksuitsgroudon">;
export type AvatarCustomizationMShirtTracksuitskyogre = AvatarCustomization<"AVATAR_m_shirt_tracksuitskyogre">;
export type AvatarCustomizationMShirtTshirtFestChicago2017 = AvatarCustomization<"AVATAR_m_shirt_tshirt_fest_chicago_2017">;
export type AvatarCustomizationMShirtTshirtFestChicago2018 = AvatarCustomization<"AVATAR_m_shirt_tshirt_fest_chicago_2018">;
export type AvatarCustomizationMShirtTshirtGeometric0 = AvatarCustomization<"AVATAR_m_shirt_tshirt_geometric_0">;
export type AvatarCustomizationMShirtTshirtGeometric1 = AvatarCustomization<"AVATAR_m_shirt_tshirt_geometric_1">;
export type AvatarCustomizationMShirtTshirtGeometric2 = AvatarCustomization<"AVATAR_m_shirt_tshirt_geometric_2">;
export type AvatarCustomizationMShirtTshirtGlobalGoals2017 = AvatarCustomization<"AVATAR_m_shirt_tshirt_global_goals_2017">;
export type AvatarCustomizationMShirtTshirtInstinct = AvatarCustomization<"AVATAR_m_shirt_tshirt_instinct">;
export type AvatarCustomizationMShirtTshirtMystic = AvatarCustomization<"AVATAR_m_shirt_tshirt_mystic">;
export type AvatarCustomizationMShirtTshirtValor = AvatarCustomization<"AVATAR_m_shirt_tshirt_valor">;
export type AvatarCustomizationMShirtTurtleneck300 = AvatarCustomization<"AVATAR_m_shirt_turtleneck_30_0">;
export type AvatarCustomizationMShirtTurtleneck301 = AvatarCustomization<"AVATAR_m_shirt_turtleneck_30_1">;
export type AvatarCustomizationMShirtTurtleneck302 = AvatarCustomization<"AVATAR_m_shirt_turtleneck_30_2">;
export type AvatarCustomizationMShirtTurtleneck303 = AvatarCustomization<"AVATAR_m_shirt_turtleneck_30_3">;
export type AvatarCustomizationMShirtTurtwigonesie = AvatarCustomization<"AVATAR_m_shirt_turtwigonesie">;
export type AvatarCustomizationMShirtUltrareconsquad = AvatarCustomization<"AVATAR_m_shirt_ultraReconSquad">;
export type AvatarCustomizationMShirtUltra0 = AvatarCustomization<"AVATAR_m_shirt_ultra_0">;
export type AvatarCustomizationMShirtUniqlotshirts0 = AvatarCustomization<"AVATAR_m_shirt_uniqlotshirts_0">;
export type AvatarCustomizationMShirtUniqlotshirts1 = AvatarCustomization<"AVATAR_m_shirt_uniqlotshirts_1">;
export type AvatarCustomizationMShirtUniqlotshirts2 = AvatarCustomization<"AVATAR_m_shirt_uniqlotshirts_2">;
export type AvatarCustomizationMShirtUnwto = AvatarCustomization<"AVATAR_m_shirt_unwto">;
export type AvatarCustomizationMShirtValentine2023 = AvatarCustomization<"AVATAR_m_shirt_valentine2023">;
export type AvatarCustomizationMShirtVerizon2020 = AvatarCustomization<"AVATAR_m_shirt_verizon2020">;
export type AvatarCustomizationMShirtVeterantrainerxy = AvatarCustomization<"AVATAR_m_shirt_veterantrainerxy">;
export type AvatarCustomizationMShirtVictinitshirts = AvatarCustomization<"AVATAR_m_shirt_victinitshirts">;
export type AvatarCustomizationMShirtWcs2022 = AvatarCustomization<"AVATAR_m_shirt_wcs2022">;
export type AvatarCustomizationMShirtWcs2022tshirtbulu = AvatarCustomization<"AVATAR_m_shirt_wcs2022tshirtbulu">;
export type AvatarCustomizationMShirtWcs2022tshirtred = AvatarCustomization<"AVATAR_m_shirt_wcs2022tshirtred">;
export type AvatarCustomizationMShirtWcs2022winnersitems = AvatarCustomization<"AVATAR_m_shirt_wcs2022winnersitems">;
export type AvatarCustomizationMShirtWcs2023 = AvatarCustomization<"AVATAR_m_shirt_wcs2023">;
export type AvatarCustomizationMShirtWcs2023promotshirt = AvatarCustomization<"AVATAR_m_shirt_wcs2023promotshirt">;
export type AvatarCustomizationMShirtWcs2023promotshirt01 = AvatarCustomization<"AVATAR_m_shirt_wcs2023promotshirt_01">;
export type AvatarCustomizationMShirtWcs2023sukajan = AvatarCustomization<"AVATAR_m_shirt_wcs2023sukajan">;
export type AvatarCustomizationMShirtWcs2023winnersitems = AvatarCustomization<"AVATAR_m_shirt_wcs2023winnersitems">;
export type AvatarCustomizationMShirtWcs2024 = AvatarCustomization<"AVATAR_m_shirt_wcs2024">;
export type AvatarCustomizationMShirtWcs2024championshipshirtBlue = AvatarCustomization<"AVATAR_m_shirt_wcs2024championshipshirt-blue">;
export type AvatarCustomizationMShirtWcs2024championshipshirtWhite = AvatarCustomization<"AVATAR_m_shirt_wcs2024championshipshirt-white">;
export type AvatarCustomizationMShirtWcsyokohama = AvatarCustomization<"AVATAR_m_shirt_wcsyokohama">;
export type AvatarCustomizationMShirtWhitecoat = AvatarCustomization<"AVATAR_m_shirt_whitecoat">;
export type AvatarCustomizationMShirtWintersweater2023 = AvatarCustomization<"AVATAR_m_shirt_wintersweater2023">;
export type AvatarCustomizationMShirtZoruaonesie = AvatarCustomization<"AVATAR_m_shirt_zoruaonesie">;
export type AvatarCustomizationMShoes6thanniversary = AvatarCustomization<"AVATAR_m_shoes_6thanniversary">;
export type AvatarCustomizationMShoesAcetrainerbw = AvatarCustomization<"AVATAR_m_shoes_acetrainerbw">;
export type AvatarCustomizationMShoesAcetrainersm = AvatarCustomization<"AVATAR_m_shoes_acetrainersm">;
export type AvatarCustomizationMShoesAnimegou = AvatarCustomization<"AVATAR_m_shoes_animegou">;
export type AvatarCustomizationMShoesBackpacker = AvatarCustomization<"AVATAR_m_shoes_backpacker">;
export type AvatarCustomizationMShoesBrock = AvatarCustomization<"AVATAR_m_shoes_brock">;
export type AvatarCustomizationMShoesBwn = AvatarCustomization<"AVATAR_m_shoes_bwn">;
export type AvatarCustomizationMShoesCarbink = AvatarCustomization<"AVATAR_m_shoes_carbink">;
export type AvatarCustomizationMShoesClay = AvatarCustomization<"AVATAR_m_shoes_clay">;
export type AvatarCustomizationMShoesCoolboots = AvatarCustomization<"AVATAR_m_shoes_coolboots">;
export type AvatarCustomizationMShoesDedenneitems = AvatarCustomization<"AVATAR_m_shoes_dedenneitems">;
export type AvatarCustomizationMShoesDefault0 = AvatarCustomization<"AVATAR_m_shoes_default_0">;
export type AvatarCustomizationMShoesDefault1 = AvatarCustomization<"AVATAR_m_shoes_default_1">;
export type AvatarCustomizationMShoesDefault2 = AvatarCustomization<"AVATAR_m_shoes_default_2">;
export type AvatarCustomizationMShoesDefault3 = AvatarCustomization<"AVATAR_m_shoes_default_3">;
export type AvatarCustomizationMShoesDefault4 = AvatarCustomization<"AVATAR_m_shoes_default_4">;
export type AvatarCustomizationMShoesDefault5 = AvatarCustomization<"AVATAR_m_shoes_default_5">;
export type AvatarCustomizationMShoesDefault6 = AvatarCustomization<"AVATAR_m_shoes_default_6">;
export type AvatarCustomizationMShoesDelibird = AvatarCustomization<"AVATAR_m_shoes_delibird">;
export type AvatarCustomizationMShoesDp = AvatarCustomization<"AVATAR_m_shoes_dp">;
export type AvatarCustomizationMShoesElesa = AvatarCustomization<"AVATAR_m_shoes_elesa">;
export type AvatarCustomizationMShoesEmpty = AvatarCustomization<"AVATAR_m_shoes_empty">;
export type AvatarCustomizationMShoesFashionweek2022 = AvatarCustomization<"AVATAR_m_shoes_fashionWeek2022">;
export type AvatarCustomizationMShoesFisher0 = AvatarCustomization<"AVATAR_m_shoes_fisher_0">;
export type AvatarCustomizationMShoesFrlg0 = AvatarCustomization<"AVATAR_m_shoes_frlg_0">;
export type AvatarCustomizationMShoesFw2022 = AvatarCustomization<"AVATAR_m_shoes_fw2022">;
export type AvatarCustomizationMShoesGeeta = AvatarCustomization<"AVATAR_m_shoes_geeta">;
export type AvatarCustomizationMShoesGiovanni = AvatarCustomization<"AVATAR_m_shoes_giovanni">;
export type AvatarCustomizationMShoesGladion = AvatarCustomization<"AVATAR_m_shoes_gladion">;
export type AvatarCustomizationMShoesGothitelleitems = AvatarCustomization<"AVATAR_m_shoes_gothitelleitems">;
export type AvatarCustomizationMShoesGreen = AvatarCustomization<"AVATAR_m_shoes_green">;
export type AvatarCustomizationMShoesGymleader0 = AvatarCustomization<"AVATAR_m_shoes_gymleader_0">;
export type AvatarCustomizationMShoesGymleader1 = AvatarCustomization<"AVATAR_m_shoes_gymleader_1">;
export type AvatarCustomizationMShoesGymleader2 = AvatarCustomization<"AVATAR_m_shoes_gymleader_2">;
export type AvatarCustomizationMShoesHala = AvatarCustomization<"AVATAR_m_shoes_hala">;
export type AvatarCustomizationMShoesHgss0 = AvatarCustomization<"AVATAR_m_shoes_hgss_0">;
export type AvatarCustomizationMShoesIngo = AvatarCustomization<"AVATAR_m_shoes_ingo">;
export type AvatarCustomizationMShoesJogger0 = AvatarCustomization<"AVATAR_m_shoes_jogger_0">;
export type AvatarCustomizationMShoesKorrina = AvatarCustomization<"AVATAR_m_shoes_korrina">;
export type AvatarCustomizationMShoesLadiamondoutfit = AvatarCustomization<"AVATAR_m_shoes_ladiamondoutfit">;
export type AvatarCustomizationMShoesLana = AvatarCustomization<"AVATAR_m_shoes_lana">;
export type AvatarCustomizationMShoesLapearloutfit = AvatarCustomization<"AVATAR_m_shoes_lapearloutfit">;
export type AvatarCustomizationMShoesLegendofarceus = AvatarCustomization<"AVATAR_m_shoes_legendofarceus">;
export type AvatarCustomizationMShoesLoosepants = AvatarCustomization<"AVATAR_m_shoes_loosepants">;
export type AvatarCustomizationMShoesLoosepants1 = AvatarCustomization<"AVATAR_m_shoes_loosepants_1">;
export type AvatarCustomizationMShoesLoosepants2 = AvatarCustomization<"AVATAR_m_shoes_loosepants_2">;
export type AvatarCustomizationMShoesLoosepants3 = AvatarCustomization<"AVATAR_m_shoes_loosepants_3">;
export type AvatarCustomizationMShoesLuvdiscpack = AvatarCustomization<"AVATAR_m_shoes_luvdiscpack">;
export type AvatarCustomizationMShoesLysandre = AvatarCustomization<"AVATAR_m_shoes_lysandre">;
export type AvatarCustomizationMShoesMegalopunnyitems = AvatarCustomization<"AVATAR_m_shoes_megalopunnyitems">;
export type AvatarCustomizationMShoesMelmetalshoes = AvatarCustomization<"AVATAR_m_shoes_melmetalshoes">;
export type AvatarCustomizationMShoesMewtwo = AvatarCustomization<"AVATAR_m_shoes_mewtwo">;
export type AvatarCustomizationMShoesNewyear2022 = AvatarCustomization<"AVATAR_m_shoes_newyear2022">;
export type AvatarCustomizationMShoesNike2021 = AvatarCustomization<"AVATAR_m_shoes_nike2021">;
export type AvatarCustomizationMShoesOras = AvatarCustomization<"AVATAR_m_shoes_oras">;
export type AvatarCustomizationMShoesPajamas20220 = AvatarCustomization<"AVATAR_m_shoes_pajamas2022_0">;
export type AvatarCustomizationMShoesPajamas20221 = AvatarCustomization<"AVATAR_m_shoes_pajamas2022_1">;
export type AvatarCustomizationMShoesPalmer = AvatarCustomization<"AVATAR_m_shoes_palmer">;
export type AvatarCustomizationMShoesPikachufan0 = AvatarCustomization<"AVATAR_m_shoes_pikachufan_0">;
export type AvatarCustomizationMShoesPikachulibre = AvatarCustomization<"AVATAR_m_shoes_pikachulibre">;
export type AvatarCustomizationMShoesProfwillowoutfit = AvatarCustomization<"AVATAR_m_shoes_profwillowoutfit">;
export type AvatarCustomizationMShoesRegiicejersies = AvatarCustomization<"AVATAR_m_shoes_regiicejersies">;
export type AvatarCustomizationMShoesRegirockjersies = AvatarCustomization<"AVATAR_m_shoes_regirockjersies">;
export type AvatarCustomizationMShoesRegisteeljersies = AvatarCustomization<"AVATAR_m_shoes_registeeljersies">;
export type AvatarCustomizationMShoesReuniclusitems = AvatarCustomization<"AVATAR_m_shoes_reuniclusitems">;
export type AvatarCustomizationMShoesRuinmaniac = AvatarCustomization<"AVATAR_m_shoes_ruinmaniac">;
export type AvatarCustomizationMShoesSandals = AvatarCustomization<"AVATAR_m_shoes_sandals">;
export type AvatarCustomizationMShoesSandals1 = AvatarCustomization<"AVATAR_m_shoes_sandals_1">;
export type AvatarCustomizationMShoesSandals2 = AvatarCustomization<"AVATAR_m_shoes_sandals_2">;
export type AvatarCustomizationMShoesSolgaleoitems = AvatarCustomization<"AVATAR_m_shoes_solgaleoitems">;
export type AvatarCustomizationMShoesSs = AvatarCustomization<"AVATAR_m_shoes_ss">;
export type AvatarCustomizationMShoesSteven = AvatarCustomization<"AVATAR_m_shoes_steven">;
export type AvatarCustomizationMShoesStevenfirst = AvatarCustomization<"AVATAR_m_shoes_stevenfirst">;
export type AvatarCustomizationMShoesSvcostumescarletschool = AvatarCustomization<"AVATAR_m_shoes_svcostumescarletschool">;
export type AvatarCustomizationMShoesSvcostumevioletschool = AvatarCustomization<"AVATAR_m_shoes_svcostumevioletschool">;
export type AvatarCustomizationMShoesSvdlc1 = AvatarCustomization<"AVATAR_m_shoes_svdlc1">;
export type AvatarCustomizationMShoesSvdlc2spring = AvatarCustomization<"AVATAR_m_shoes_svdlc2spring">;
export type AvatarCustomizationMShoesSwshdlc2costume = AvatarCustomization<"AVATAR_m_shoes_swshdlc2costume">;
export type AvatarCustomizationMShoesSwshdlccostume = AvatarCustomization<"AVATAR_m_shoes_swshdlccostume">;
export type AvatarCustomizationMShoesSwshuniformdark = AvatarCustomization<"AVATAR_m_shoes_swshuniformdark">;
export type AvatarCustomizationMShoesSwshuniformdefault = AvatarCustomization<"AVATAR_m_shoes_swshuniformdefault">;
export type AvatarCustomizationMShoesSwshuniformdragon = AvatarCustomization<"AVATAR_m_shoes_swshuniformdragon">;
export type AvatarCustomizationMShoesSylveonitems = AvatarCustomization<"AVATAR_m_shoes_sylveonitems">;
export type AvatarCustomizationMShoesTeamaqua = AvatarCustomization<"AVATAR_m_shoes_teamaqua">;
export type AvatarCustomizationMShoesTeamblanche = AvatarCustomization<"AVATAR_m_shoes_teamblanche">;
export type AvatarCustomizationMShoesTeamcandela = AvatarCustomization<"AVATAR_m_shoes_teamcandela">;
export type AvatarCustomizationMShoesTeammagma = AvatarCustomization<"AVATAR_m_shoes_teammagma">;
export type AvatarCustomizationMShoesTeamrocket0 = AvatarCustomization<"AVATAR_m_shoes_teamrocket_0">;
export type AvatarCustomizationMShoesTeamrocket1 = AvatarCustomization<"AVATAR_m_shoes_teamrocket_1">;
export type AvatarCustomizationMShoesTeamskull = AvatarCustomization<"AVATAR_m_shoes_teamskull">;
export type AvatarCustomizationMShoesTeamspark = AvatarCustomization<"AVATAR_m_shoes_teamspark">;
export type AvatarCustomizationMShoesUltrareconsquad = AvatarCustomization<"AVATAR_m_shoes_ultraReconSquad">;
export type AvatarCustomizationMShoesUltra0 = AvatarCustomization<"AVATAR_m_shoes_ultra_0">;
export type AvatarCustomizationMShoesVeterantrainerxy = AvatarCustomization<"AVATAR_m_shoes_veterantrainerxy">;
export type AvatarCustomizationMShoesWcs2022winnersitems = AvatarCustomization<"AVATAR_m_shoes_wcs2022winnersitems">;
export type AvatarCustomizationMShoesWcs2023winnersitems = AvatarCustomization<"AVATAR_m_shoes_wcs2023winnersitems">;
export type AvatarCustomizationMShoesWinterboots2023 = AvatarCustomization<"AVATAR_m_shoes_winterboots2023">;
export type AvatarCustomizationMShoesWinterboots0 = AvatarCustomization<"AVATAR_m_shoes_winterboots_0">;
export type AvatarCustomizationMShoesWinterboots1 = AvatarCustomization<"AVATAR_m_shoes_winterboots_1">;
export type AvatarCustomizationMShoesWinterboots2 = AvatarCustomization<"AVATAR_m_shoes_winterboots_2">;
export type AvatarCustomizationMShoesWinterboots3 = AvatarCustomization<"AVATAR_m_shoes_winterboots_3">;
export type AvatarCustomizationMSkin0 = AvatarCustomization<"AVATAR_m_skin_0">;
export type AvatarCustomizationMSkin1 = AvatarCustomization<"AVATAR_m_skin_1">;
export type AvatarCustomizationMSkin10 = AvatarCustomization<"AVATAR_m_skin_10">;
export type AvatarCustomizationMSkin11 = AvatarCustomization<"AVATAR_m_skin_11">;
export type AvatarCustomizationMSkin2 = AvatarCustomization<"AVATAR_m_skin_2">;
export type AvatarCustomizationMSkin3 = AvatarCustomization<"AVATAR_m_skin_3">;
export type AvatarCustomizationMSkin4 = AvatarCustomization<"AVATAR_m_skin_4">;
export type AvatarCustomizationMSkin5 = AvatarCustomization<"AVATAR_m_skin_5">;
export type AvatarCustomizationMSkin6 = AvatarCustomization<"AVATAR_m_skin_6">;
export type AvatarCustomizationMSkin7 = AvatarCustomization<"AVATAR_m_skin_7">;
export type AvatarCustomizationMSkin8 = AvatarCustomization<"AVATAR_m_skin_8">;
export type AvatarCustomizationMSkin9 = AvatarCustomization<"AVATAR_m_skin_9">;
export type AvatarCustomizationMSocksDefault0 = AvatarCustomization<"AVATAR_m_socks_default_0">;
export type AvatarCustomizationMSocksDefault1 = AvatarCustomization<"AVATAR_m_socks_default_1">;
export type AvatarCustomizationMSocksDefault2 = AvatarCustomization<"AVATAR_m_socks_default_2">;
export type AvatarCustomizationMSocksDefault3 = AvatarCustomization<"AVATAR_m_socks_default_3">;
export type AvatarCustomizationMSocksEmpty = AvatarCustomization<"AVATAR_m_socks_empty">;
export type AvatarCustomizationMSocksFw2022 = AvatarCustomization<"AVATAR_m_socks_fw2022">;
export type AvatarCustomizationMSocksSneakersocks0 = AvatarCustomization<"AVATAR_m_socks_sneakersocks_0">;
export type AvatarCustomizationMSocksSneakersocks1 = AvatarCustomization<"AVATAR_m_socks_sneakersocks_1">;
export type AvatarCustomizationMSocksSollunaitems = AvatarCustomization<"AVATAR_m_socks_sollunaitems">;
export type AvatarCustomizationMSocksSwshuniformdefault = AvatarCustomization<"AVATAR_m_socks_swshuniformdefault">;
export type AvatarCustomizationMSocksSwshuniformdragon = AvatarCustomization<"AVATAR_m_socks_swshuniformdragon">;

export type AvatarCustomizationMasterfileEntry =
	| AvatarCustomizationFBackpackAlolaitemslittenbp
	| AvatarCustomizationFBackpackAlolaitemspoppliobp
	| AvatarCustomizationFBackpackAlolaitemsrowletbp
	| AvatarCustomizationFBackpackAnimegou
	| AvatarCustomizationFBackpackBackpacker
	| AvatarCustomizationFBackpackCombeebackpack
	| AvatarCustomizationFBackpackCombeebackpack01
	| AvatarCustomizationFBackpackCute0
	| AvatarCustomizationFBackpackDedenneitems
	| AvatarCustomizationFBackpackDefault0
	| AvatarCustomizationFBackpackDefault1
	| AvatarCustomizationFBackpackDefault2
	| AvatarCustomizationFBackpackDefault3
	| AvatarCustomizationFBackpackEggIncubator
	| AvatarCustomizationFBackpackEggbackpack0
	| AvatarCustomizationFBackpackEggbackpack1
	| AvatarCustomizationFBackpackEggbackpack2
	| AvatarCustomizationFBackpackEmpty
	| AvatarCustomizationFBackpackFrlg0
	| AvatarCustomizationFBackpackGenesecteventitem
	| AvatarCustomizationFBackpackGengar0
	| AvatarCustomizationFBackpackGiratinaitems
	| AvatarCustomizationFBackpackGuccibackpack
	| AvatarCustomizationFBackpackGuitarcasebackpack
	| AvatarCustomizationFBackpackHgss0
	| AvatarCustomizationFBackpackHououbackpack
	| AvatarCustomizationFBackpackKakureonpouch
	| AvatarCustomizationFBackpackKomala
	| AvatarCustomizationFBackpackLongchampbp
	| AvatarCustomizationFBackpackLunalaitems
	| AvatarCustomizationFBackpackLunarnewyr
	| AvatarCustomizationFBackpackMimikyubp
	| AvatarCustomizationFBackpackMovie2020
	| AvatarCustomizationFBackpackNaganadelawings
	| AvatarCustomizationFBackpackNike2021
	| AvatarCustomizationFBackpackPamobackpack
	| AvatarCustomizationFBackpackPkmnhoodie001
	| AvatarCustomizationFBackpackPkmnhoodie004
	| AvatarCustomizationFBackpackPkmnhoodie007
	| AvatarCustomizationFBackpackRuinmaniac
	| AvatarCustomizationFBackpackSnapcamera
	| AvatarCustomizationFBackpackSs
	| AvatarCustomizationFBackpackSvcostumescarletschool
	| AvatarCustomizationFBackpackSvcostumevioletschool
	| AvatarCustomizationFBackpackSvdlc1
	| AvatarCustomizationFBackpackSvdlc2spring
	| AvatarCustomizationFBackpackSwshdlc2costume
	| AvatarCustomizationFBackpackSwshdlccostume
	| AvatarCustomizationFBackpackTogepibackpack
	| AvatarCustomizationFBackpackUltra0
	| AvatarCustomizationFBackpackVerizon2021
	| AvatarCustomizationFBackpackZubatbp
	| AvatarCustomizationFBeltAcetrainerbw
	| AvatarCustomizationFBeltDefault0
	| AvatarCustomizationFBeltDefault1
	| AvatarCustomizationFBeltDefault2
	| AvatarCustomizationFBeltDefault3
	| AvatarCustomizationFBeltDefault4
	| AvatarCustomizationFBeltDefault5
	| AvatarCustomizationFBeltDefault6
	| AvatarCustomizationFBeltDefault7
	| AvatarCustomizationFBeltDefault8
	| AvatarCustomizationFBeltEmpty
	| AvatarCustomizationFBeltSimple0
	| AvatarCustomizationFBeltSimple1
	| AvatarCustomizationFBeltSimple2
	| AvatarCustomizationFBeltSimple3
	| AvatarCustomizationFBeltTeamrocket0
	| AvatarCustomizationFBeltTeamrocket1
	| AvatarCustomizationFEyes0
	| AvatarCustomizationFEyes1
	| AvatarCustomizationFEyes2
	| AvatarCustomizationFEyes3
	| AvatarCustomizationFEyes4
	| AvatarCustomizationFFace3dmask00
	| AvatarCustomizationFFace3dmask01
	| AvatarCustomizationFFace3dmask02
	| AvatarCustomizationFFaceBanettemask
	| AvatarCustomizationFFaceDayofthedead
	| AvatarCustomizationFFaceDefaultmask
	| AvatarCustomizationFFaceEmpty
	| AvatarCustomizationFFaceFacestickerghostpika
	| AvatarCustomizationFFaceFacestickerpikachu
	| AvatarCustomizationFFaceFacestickerpokeball
	| AvatarCustomizationFFaceFestofcolors00
	| AvatarCustomizationFFaceFestofcolors01
	| AvatarCustomizationFFaceFestofcolors02
	| AvatarCustomizationFFaceGracidea
	| AvatarCustomizationFFaceHoliday2022santacostumes
	| AvatarCustomizationFFacePikachumask
	| AvatarCustomizationFFaceSableyemask
	| AvatarCustomizationFFaceTeamskull
	| AvatarCustomizationFFaceToxelmask
	| AvatarCustomizationFFaceVerizon2020mask
	| AvatarCustomizationFGlasses3d
	| AvatarCustomizationFGlassesCutieflysleepmask
	| AvatarCustomizationFGlassesDivingsuit
	| AvatarCustomizationFGlassesDrpikachu
	| AvatarCustomizationFGlassesEmpty
	| AvatarCustomizationFGlassesFrillishglasses
	| AvatarCustomizationFGlassesFw2022
	| AvatarCustomizationFGlassesGimmighoulitems
	| AvatarCustomizationFGlassesGoteamrocketarlo
	| AvatarCustomizationFGlassesGrandoakglasses
	| AvatarCustomizationFGlassesLugiaglasses
	| AvatarCustomizationFGlassesLv40glasses
	| AvatarCustomizationFGlassesMask0
	| AvatarCustomizationFGlassesMask1
	| AvatarCustomizationFGlassesNewyear2022
	| AvatarCustomizationFGlassesNewyearglasses2020
	| AvatarCustomizationFGlassesNewyearglasses2021
	| AvatarCustomizationFGlassesObstagoonitems
	| AvatarCustomizationFGlassesRoundsunglasses
	| AvatarCustomizationFGlassesTeardrop0
	| AvatarCustomizationFGlassesThick0
	| AvatarCustomizationFGlassesThick1
	| AvatarCustomizationFGlassesThick2
	| AvatarCustomizationFGlassesThick3
	| AvatarCustomizationFGlassesThick4
	| AvatarCustomizationFGlovesAcetrainersm
	| AvatarCustomizationFGlovesBattlegirl0
	| AvatarCustomizationFGlovesBea
	| AvatarCustomizationFGlovesBwn
	| AvatarCustomizationFGlovesDefault0
	| AvatarCustomizationFGlovesDefault1
	| AvatarCustomizationFGlovesDefault2
	| AvatarCustomizationFGlovesDefault3
	| AvatarCustomizationFGlovesDelibird
	| AvatarCustomizationFGlovesDynamaxswsh
	| AvatarCustomizationFGlovesEmpty
	| AvatarCustomizationFGlovesFrlg0
	| AvatarCustomizationFGlovesGeeta
	| AvatarCustomizationFGlovesGiovanni
	| AvatarCustomizationFGlovesGuzma
	| AvatarCustomizationFGlovesGymleader0
	| AvatarCustomizationFGlovesHoopabangle
	| AvatarCustomizationFGlovesKorrina
	| AvatarCustomizationFGlovesLysandre
	| AvatarCustomizationFGlovesMegabangle
	| AvatarCustomizationFGlovesMegabangleblack
	| AvatarCustomizationFGlovesMegabangleblue
	| AvatarCustomizationFGlovesMegabanglered
	| AvatarCustomizationFGlovesMegabangleyellow
	| AvatarCustomizationFGlovesObstagoonitems
	| AvatarCustomizationFGlovesPalmer
	| AvatarCustomizationFGlovesProfwillowoutfit
	| AvatarCustomizationFGlovesStevenfirst
	| AvatarCustomizationFGlovesSvdlc2spring
	| AvatarCustomizationFGlovesSwshdlc2costume
	| AvatarCustomizationFGlovesSwshdlccostume
	| AvatarCustomizationFGlovesSwshuniformchampion
	| AvatarCustomizationFGlovesSwshuniformdark
	| AvatarCustomizationFGlovesSwshuniformdefault
	| AvatarCustomizationFGlovesSwshuniformdragon
	| AvatarCustomizationFGlovesTeamaqua
	| AvatarCustomizationFGlovesTeammagma
	| AvatarCustomizationFGlovesTeamrocket0
	| AvatarCustomizationFGlovesTeamspark
	| AvatarCustomizationFGlovesWintergloves2023
	| AvatarCustomizationFGofestPikachuvisor
	| AvatarCustomizationFHairDefault0
	| AvatarCustomizationFHairDefault1
	| AvatarCustomizationFHairDefault10
	| AvatarCustomizationFHairDefault11
	| AvatarCustomizationFHairDefault12
	| AvatarCustomizationFHairDefault13
	| AvatarCustomizationFHairDefault14
	| AvatarCustomizationFHairDefault15
	| AvatarCustomizationFHairDefault16
	| AvatarCustomizationFHairDefault17
	| AvatarCustomizationFHairDefault18
	| AvatarCustomizationFHairDefault19
	| AvatarCustomizationFHairDefault2
	| AvatarCustomizationFHairDefault3
	| AvatarCustomizationFHairDefault4
	| AvatarCustomizationFHairDefault5
	| AvatarCustomizationFHairDefault6
	| AvatarCustomizationFHairDefault7
	| AvatarCustomizationFHairDefault8
	| AvatarCustomizationFHairDefault9
	| AvatarCustomizationFHat6thanniversary
	| AvatarCustomizationFHatAcetrainersm
	| AvatarCustomizationFHatAdventure0
	| AvatarCustomizationFHatAseries
	| AvatarCustomizationFHatBea
	| AvatarCustomizationFHatBidoofhat
	| AvatarCustomizationFHatBounsweetitems
	| AvatarCustomizationFHatBurmyearrings11
	| AvatarCustomizationFHatBurmyearrings12
	| AvatarCustomizationFHatBurmyearrings13
	| AvatarCustomizationFHatBwn
	| AvatarCustomizationFHatCasket0
	| AvatarCustomizationFHatCetoddlehat
	| AvatarCustomizationFHatClay
	| AvatarCustomizationFHatCofagrigusitems
	| AvatarCustomizationFHatCosmog
	| AvatarCustomizationFHatCrownmoon
	| AvatarCustomizationFHatCrownsun
	| AvatarCustomizationFHatCubonehat
	| AvatarCustomizationFHatDarumakahat
	| AvatarCustomizationFHatDedenneitems
	| AvatarCustomizationFHatDefaultA0
	| AvatarCustomizationFHatDefaultA1
	| AvatarCustomizationFHatDefaultA2
	| AvatarCustomizationFHatDefaultA3
	| AvatarCustomizationFHatDefaultA4
	| AvatarCustomizationFHatDefaultA5
	| AvatarCustomizationFHatDefaultB0
	| AvatarCustomizationFHatDefaultB1
	| AvatarCustomizationFHatDeino
	| AvatarCustomizationFHatDelibird
	| AvatarCustomizationFHatDetectivepikachu
	| AvatarCustomizationFHatDiancie
	| AvatarCustomizationFHatDp
	| AvatarCustomizationFHatDrifloon0
	| AvatarCustomizationFHatDrpikachu
	| AvatarCustomizationFHatDusclopsmummy
	| AvatarCustomizationFHatEeveecap
	| AvatarCustomizationFHatElesa
	| AvatarCustomizationFHatEmpty
	| AvatarCustomizationFHatFedora0
	| AvatarCustomizationFHatFedora1
	| AvatarCustomizationFHatFlabebepack
	| AvatarCustomizationFHatFragment0
	| AvatarCustomizationFHatFrlg0
	| AvatarCustomizationFHatFurfrouwig
	| AvatarCustomizationFHatFw2022
	| AvatarCustomizationFHatGalarfarfetchditems
	| AvatarCustomizationFHatGenesecteventitem
	| AvatarCustomizationFHatGengar0
	| AvatarCustomizationFHatGimmighoulitems
	| AvatarCustomizationFHatGiratinaitems
	| AvatarCustomizationFHatGladion
	| AvatarCustomizationFHatGoomy
	| AvatarCustomizationFHatGreavardwig
	| AvatarCustomizationFHatGreencoat
	| AvatarCustomizationFHatGrowlithehelmet
	| AvatarCustomizationFHatGtr2024eeveefanmask
	| AvatarCustomizationFHatGtr2024pikachufanmask
	| AvatarCustomizationFHatGuccihat
	| AvatarCustomizationFHatGuzma
	| AvatarCustomizationFHatGyaradoscap
	| AvatarCustomizationFHatHgss0
	| AvatarCustomizationFHatHoliday2022santacostumes
	| AvatarCustomizationFHatHolidaybeanie
	| AvatarCustomizationFHatHoopaearmuffs
	| AvatarCustomizationFHatIngo
	| AvatarCustomizationFHatKantotourcapgreen
	| AvatarCustomizationFHatKantotourcapred
	| AvatarCustomizationFHatKnitted0
	| AvatarCustomizationFHatKnitted1
	| AvatarCustomizationFHatKorrina
	| AvatarCustomizationFHatLana
	| AvatarCustomizationFHatLaprasbandana
	| AvatarCustomizationFHatLasecuritycorps
	| AvatarCustomizationFHatLegendofarceus
	| AvatarCustomizationFHatLitwickhat
	| AvatarCustomizationFHatLoneearrings
	| AvatarCustomizationFHatLvl50cap
	| AvatarCustomizationFHatMagikarp
	| AvatarCustomizationFHatMareaniehat
	| AvatarCustomizationFHatMegalopunnyitems
	| AvatarCustomizationFHatMegarayquaza
	| AvatarCustomizationFHatMeltan
	| AvatarCustomizationFHatMeltanearrings
	| AvatarCustomizationFHatMewtwo
	| AvatarCustomizationFHatMimikyu0
	| AvatarCustomizationFHatMismagius0
	| AvatarCustomizationFHatMovie2020
	| AvatarCustomizationFHatMunnapack0
	| AvatarCustomizationFHatMunnapack1
	| AvatarCustomizationFHatNewyear2022
	| AvatarCustomizationFHatNewyearhat2021
	| AvatarCustomizationFHatNewyearhat2023
	| AvatarCustomizationFHatNihilegoitems
	| AvatarCustomizationFHatNoibat
	| AvatarCustomizationFHatObstagoonitems
	| AvatarCustomizationFHatOras
	| AvatarCustomizationFHatOricoriopink
	| AvatarCustomizationFHatOricoriopurple
	| AvatarCustomizationFHatOricoriored
	| AvatarCustomizationFHatOricorioyellow
	| AvatarCustomizationFHatPartneritemsjan2024hat
	| AvatarCustomizationFHatPhantump
	| AvatarCustomizationFHatPikachucap
	| AvatarCustomizationFHatPikachufan0
	| AvatarCustomizationFHatPikachulibre
	| AvatarCustomizationFHatPikachupumpkinhead
	| AvatarCustomizationFHatPkmncap0
	| AvatarCustomizationFHatPkmncap1
	| AvatarCustomizationFHatPkmncap2
	| AvatarCustomizationFHatPoipole
	| AvatarCustomizationFHatProfwillowoutfit
	| AvatarCustomizationFHatRegiicejersies
	| AvatarCustomizationFHatRegirockjersies
	| AvatarCustomizationFHatRegisteeljersies
	| AvatarCustomizationFHatRuinmaniac
	| AvatarCustomizationFHatSableyegoggles
	| AvatarCustomizationFHatSamsungsummer2020
	| AvatarCustomizationFHatSandygasthat
	| AvatarCustomizationFHatShayminhat
	| AvatarCustomizationFHatSlowpoketailshirts
	| AvatarCustomizationFHatSnorlaxnightcap
	| AvatarCustomizationFHatSolgaleoitems
	| AvatarCustomizationFHatSs
	| AvatarCustomizationFHatStantlerheadband
	| AvatarCustomizationFHatStrawhat
	| AvatarCustomizationFHatSummer2023
	| AvatarCustomizationFHatSvcostumescarletschool
	| AvatarCustomizationFHatSvcostumevioletschool
	| AvatarCustomizationFHatSwshdlc2costume
	| AvatarCustomizationFHatSwshuniformchampion
	| AvatarCustomizationFHatSylveonitems
	| AvatarCustomizationFHatTcgcollabtshirtandcap
	| AvatarCustomizationFHatTeamaqua
	| AvatarCustomizationFHatTeamleadercap0
	| AvatarCustomizationFHatTeamleadercap1
	| AvatarCustomizationFHatTeamleadercap2
	| AvatarCustomizationFHatTeamrocket0
	| AvatarCustomizationFHatTeamrocketcap
	| AvatarCustomizationFHatTeamskull
	| AvatarCustomizationFHatTophat0
	| AvatarCustomizationFHatUltrareconsquad
	| AvatarCustomizationFHatUltrareconsquadb
	| AvatarCustomizationFHatUltra0
	| AvatarCustomizationFHatVerizon2021
	| AvatarCustomizationFHatWcs2022winnersitems
	| AvatarCustomizationFHatWhimsicottearmuff
	| AvatarCustomizationFHatWillowglasses
	| AvatarCustomizationFHatWoobatearrings
	| AvatarCustomizationFHatYamaskhat
	| AvatarCustomizationFHatYamaskmask
	| AvatarCustomizationFHatZubathat
	| AvatarCustomizationFJacketNewyear2022
	| AvatarCustomizationFNecklaceDefault0
	| AvatarCustomizationFNecklaceDefault1
	| AvatarCustomizationFNecklaceEmpty
	| AvatarCustomizationFNecklaceHeart0
	| AvatarCustomizationFNecklaceStar0
	| AvatarCustomizationFPants6thanniversary
	| AvatarCustomizationFPants7thanniversary
	| AvatarCustomizationFPantsAcetrainerbw
	| AvatarCustomizationFPantsAnimegou
	| AvatarCustomizationFPantsBackpacker
	| AvatarCustomizationFPantsBattlegirl0
	| AvatarCustomizationFPantsBounsweetitems
	| AvatarCustomizationFPantsBwn
	| AvatarCustomizationFPantsCasual0
	| AvatarCustomizationFPantsCasual1
	| AvatarCustomizationFPantsClay
	| AvatarCustomizationFPantsDefault0
	| AvatarCustomizationFPantsDefault1
	| AvatarCustomizationFPantsDefault2
	| AvatarCustomizationFPantsDefault3
	| AvatarCustomizationFPantsDefault4
	| AvatarCustomizationFPantsDefault5
	| AvatarCustomizationFPantsDenimfashionweek2023
	| AvatarCustomizationFPantsDp
	| AvatarCustomizationFPantsFashionweek2022
	| AvatarCustomizationFPantsFlabebepack
	| AvatarCustomizationFPantsFrlg0
	| AvatarCustomizationFPantsFw2022
	| AvatarCustomizationFPantsGeeta
	| AvatarCustomizationFPantsGenderlessskirt
	| AvatarCustomizationFPantsGiovanni
	| AvatarCustomizationFPantsGladion
	| AvatarCustomizationFPantsGothitelleitems
	| AvatarCustomizationFPantsGreen
	| AvatarCustomizationFPantsGreencoat
	| AvatarCustomizationFPantsGuzma
	| AvatarCustomizationFPantsGymleader0
	| AvatarCustomizationFPantsGymleader1
	| AvatarCustomizationFPantsGymleader2
	| AvatarCustomizationFPantsHala
	| AvatarCustomizationFPantsHgss0
	| AvatarCustomizationFPantsIngo
	| AvatarCustomizationFPantsLoosepants
	| AvatarCustomizationFPantsLunalaitems
	| AvatarCustomizationFPantsLuvdiscpack
	| AvatarCustomizationFPantsLysandre
	| AvatarCustomizationFPantsMewtwo
	| AvatarCustomizationFPantsMiniskirt0
	| AvatarCustomizationFPantsMiniskirt1
	| AvatarCustomizationFPantsMiniskirt2
	| AvatarCustomizationFPantsMiniskirt3
	| AvatarCustomizationFPantsMiniskirtWave0
	| AvatarCustomizationFPantsMiniskirtWave1
	| AvatarCustomizationFPantsMiniskirtWave2
	| AvatarCustomizationFPantsMisty
	| AvatarCustomizationFPantsMunnapack
	| AvatarCustomizationFPantsNeonSolid0
	| AvatarCustomizationFPantsNeonSolid1
	| AvatarCustomizationFPantsNeonSolid2
	| AvatarCustomizationFPantsNeonStripes0
	| AvatarCustomizationFPantsNeonStripes1
	| AvatarCustomizationFPantsNewyear2022
	| AvatarCustomizationFPantsOras
	| AvatarCustomizationFPantsPajamas20220
	| AvatarCustomizationFPantsPajamas20221
	| AvatarCustomizationFPantsPalmer
	| AvatarCustomizationFPantsPikachufan0
	| AvatarCustomizationFPantsPikachulibre
	| AvatarCustomizationFPantsProfwillowoutfit
	| AvatarCustomizationFPantsPumpkabooitems
	| AvatarCustomizationFPantsRegiicejersies
	| AvatarCustomizationFPantsRegirockjersies
	| AvatarCustomizationFPantsRegisteeljersies
	| AvatarCustomizationFPantsShorts0
	| AvatarCustomizationFPantsShorts1
	| AvatarCustomizationFPantsShorts2
	| AvatarCustomizationFPantsShorts3
	| AvatarCustomizationFPantsSkinnyjeans0
	| AvatarCustomizationFPantsSteven
	| AvatarCustomizationFPantsStevenfirst
	| AvatarCustomizationFPantsSwshdlc2costume
	| AvatarCustomizationFPantsSwshuniformchampion
	| AvatarCustomizationFPantsSwshuniformdark
	| AvatarCustomizationFPantsSwshuniformdefault
	| AvatarCustomizationFPantsSwshuniformdragon
	| AvatarCustomizationFPantsTeamaqua
	| AvatarCustomizationFPantsTeamblanche
	| AvatarCustomizationFPantsTeamcandela
	| AvatarCustomizationFPantsTeammagma
	| AvatarCustomizationFPantsTeamrocket0
	| AvatarCustomizationFPantsTeamskull
	| AvatarCustomizationFPantsTeamspark
	| AvatarCustomizationFPantsTurbine0
	| AvatarCustomizationFPantsTurbine1
	| AvatarCustomizationFPantsTurbine2
	| AvatarCustomizationFPantsUltra0
	| AvatarCustomizationFPantsVeterantrainerxy
	| AvatarCustomizationFPantsWcs2022winnersitems
	| AvatarCustomizationFPose01
	| AvatarCustomizationFPose02
	| AvatarCustomizationFPose03
	| AvatarCustomizationFPose04
	| AvatarCustomizationFPose05
	| AvatarCustomizationFPose06
	| AvatarCustomizationFPose07
	| AvatarCustomizationFPose08
	| AvatarCustomizationFPose09
	| AvatarCustomizationFPose10
	| AvatarCustomizationFPose11
	| AvatarCustomizationFPose12
	| AvatarCustomizationFPose13
	| AvatarCustomizationFPose14
	| AvatarCustomizationFPose15
	| AvatarCustomizationFPose16
	| AvatarCustomizationFPose17
	| AvatarCustomizationFPose18
	| AvatarCustomizationFPose19
	| AvatarCustomizationFPose20
	| AvatarCustomizationFPose21
	| AvatarCustomizationFPose22
	| AvatarCustomizationFPose23
	| AvatarCustomizationFPose24
	| AvatarCustomizationFPose25
	| AvatarCustomizationFPose26
	| AvatarCustomizationFPose27
	| AvatarCustomizationFPose28
	| AvatarCustomizationFPose29
	| AvatarCustomizationFPose30
	| AvatarCustomizationFPose31
	| AvatarCustomizationFPose32
	| AvatarCustomizationFPose33
	| AvatarCustomizationFPose34
	| AvatarCustomizationFPose35
	| AvatarCustomizationFPose36
	| AvatarCustomizationFPose37
	| AvatarCustomizationFPose38
	| AvatarCustomizationFPose39
	| AvatarCustomizationFPose40
	| AvatarCustomizationFPose41
	| AvatarCustomizationFPose43
	| AvatarCustomizationFPose44
	| AvatarCustomizationFPose45
	| AvatarCustomizationFPose46
	| AvatarCustomizationFPose47
	| AvatarCustomizationFPose48
	| AvatarCustomizationFPose49
	| AvatarCustomizationFPose50
	| AvatarCustomizationFPose51
	| AvatarCustomizationFPose52
	| AvatarCustomizationFPose53
	| AvatarCustomizationFPose54
	| AvatarCustomizationFPose55
	| AvatarCustomizationFPose56
	| AvatarCustomizationFPose57
	| AvatarCustomizationFPose58
	| AvatarCustomizationFPose59
	| AvatarCustomizationFPose60
	| AvatarCustomizationFPose61
	| AvatarCustomizationFPose62
	| AvatarCustomizationFPose63
	| AvatarCustomizationFPose64
	| AvatarCustomizationFPoseEmpty
	| AvatarCustomizationFShirt6thanniversary
	| AvatarCustomizationFShirt7thanniversary
	| AvatarCustomizationFShirtAcetrainerbw
	| AvatarCustomizationFShirtAcetrainersm
	| AvatarCustomizationFShirtAlolacomfey
	| AvatarCustomizationFShirtAnimegou
	| AvatarCustomizationFShirtAseries
	| AvatarCustomizationFShirtBackpacker
	| AvatarCustomizationFShirtBallguy
	| AvatarCustomizationFShirtBattlegirl0
	| AvatarCustomizationFShirtBea
	| AvatarCustomizationFShirtBounsweetitems
	| AvatarCustomizationFShirtButtondown0
	| AvatarCustomizationFShirtBuzzwoleitems
	| AvatarCustomizationFShirtBwn
	| AvatarCustomizationFShirtCasual0
	| AvatarCustomizationFShirtCasual1
	| AvatarCustomizationFShirtCasual2
	| AvatarCustomizationFShirtCasual3
	| AvatarCustomizationFShirtCelebi0
	| AvatarCustomizationFShirtChimcharonesie
	| AvatarCustomizationFShirtClay
	| AvatarCustomizationFShirtCofagrigusitems
	| AvatarCustomizationFShirtCosmog
	| AvatarCustomizationFShirtCowichansweater
	| AvatarCustomizationFShirtDayofdead
	| AvatarCustomizationFShirtDefault0
	| AvatarCustomizationFShirtDefault1
	| AvatarCustomizationFShirtDefault2
	| AvatarCustomizationFShirtDefault3
	| AvatarCustomizationFShirtDefault4
	| AvatarCustomizationFShirtDefault5
	| AvatarCustomizationFShirtDefault6
	| AvatarCustomizationFShirtDefault7
	| AvatarCustomizationFShirtDefault8
	| AvatarCustomizationFShirtDelibird
	| AvatarCustomizationFShirtDelibirdonesie
	| AvatarCustomizationFShirtDenimfashionweek2023
	| AvatarCustomizationFShirtDenimjacket
	| AvatarCustomizationFShirtDetectivepikachu
	| AvatarCustomizationFShirtDiancie
	| AvatarCustomizationFShirtDivingsuit
	| AvatarCustomizationFShirtDiwali2021
	| AvatarCustomizationFShirtDp
	| AvatarCustomizationFShirtDrifblim0
	| AvatarCustomizationFShirtDusclopsmummy
	| AvatarCustomizationFShirtEarthday2018
	| AvatarCustomizationFShirtEeveestshirt00
	| AvatarCustomizationFShirtEeveestshirt01
	| AvatarCustomizationFShirtEeveestshirt02
	| AvatarCustomizationFShirtEeveestshirt03
	| AvatarCustomizationFShirtEeveestshirt04
	| AvatarCustomizationFShirtEeveestshirt05
	| AvatarCustomizationFShirtEeveestshirt06
	| AvatarCustomizationFShirtEeveestshirt07
	| AvatarCustomizationFShirtEeveestshirt08
	| AvatarCustomizationFShirtElesa
	| AvatarCustomizationFShirtFashionweek2022
	| AvatarCustomizationFShirtFestivaloflights00
	| AvatarCustomizationFShirtFestivaloflights01
	| AvatarCustomizationFShirtFlabebepack
	| AvatarCustomizationFShirtFragment0
	| AvatarCustomizationFShirtFrlg0
	| AvatarCustomizationFShirtFw2022
	| AvatarCustomizationFShirtGalarfarfetchditems
	| AvatarCustomizationFShirtGalaxyoutfit
	| AvatarCustomizationFShirtGeeta
	| AvatarCustomizationFShirtGenderlessskirt
	| AvatarCustomizationFShirtGengar0
	| AvatarCustomizationFShirtGengaronesie
	| AvatarCustomizationFShirtGiovanni
	| AvatarCustomizationFShirtGiratinaitems
	| AvatarCustomizationFShirtGladion
	| AvatarCustomizationFShirtGofest2022
	| AvatarCustomizationFShirtGofest2023
	| AvatarCustomizationFShirtGofest2024darkgray
	| AvatarCustomizationFShirtGofest2024gray
	| AvatarCustomizationFShirtGofest2024purple
	| AvatarCustomizationFShirtGofest2019
	| AvatarCustomizationFShirtGofest2020
	| AvatarCustomizationFShirtGofest2021
	| AvatarCustomizationFShirtGofestglobal2023
	| AvatarCustomizationFShirtGoteamrocketarlo
	| AvatarCustomizationFShirtGoteamrocketcliff
	| AvatarCustomizationFShirtGoteamrocketsierra
	| AvatarCustomizationFShirtGothitelleitems
	| AvatarCustomizationFShirtGotour2023
	| AvatarCustomizationFShirtGotour2024
	| AvatarCustomizationFShirtGreedentsweater
	| AvatarCustomizationFShirtGreen
	| AvatarCustomizationFShirtGreencoat
	| AvatarCustomizationFShirtGtrtshirt202200
	| AvatarCustomizationFShirtGtrtshirt202201
	| AvatarCustomizationFShirtGuccitshirts
	| AvatarCustomizationFShirtGuzma
	| AvatarCustomizationFShirtGymleader0
	| AvatarCustomizationFShirtGymleader1
	| AvatarCustomizationFShirtGymleader2
	| AvatarCustomizationFShirtHala
	| AvatarCustomizationFShirtHappi
	| AvatarCustomizationFShirtHappi1
	| AvatarCustomizationFShirtHappi2
	| AvatarCustomizationFShirtHgss0
	| AvatarCustomizationFShirtHoliday2022santacostumes
	| AvatarCustomizationFShirtHolifestival2021black
	| AvatarCustomizationFShirtHolifestival2021white
	| AvatarCustomizationFShirtHoopaunboundtshirt
	| AvatarCustomizationFShirtIngo
	| AvatarCustomizationFShirtIngress0
	| AvatarCustomizationFShirtIngressE0
	| AvatarCustomizationFShirtIngressR0
	| AvatarCustomizationFShirtJessie
	| AvatarCustomizationFShirtJirachi
	| AvatarCustomizationFShirtKeldeotshirt
	| AvatarCustomizationFShirtKorrina
	| AvatarCustomizationFShirtLadiamondoutfit
	| AvatarCustomizationFShirtLana
	| AvatarCustomizationFShirtLapearloutfit
	| AvatarCustomizationFShirtLasecuritycorps
	| AvatarCustomizationFShirtLatiasLatios0
	| AvatarCustomizationFShirtLegendofarceus
	| AvatarCustomizationFShirtLuvdiscpack
	| AvatarCustomizationFShirtLvl50
	| AvatarCustomizationFShirtLvl501
	| AvatarCustomizationFShirtLysandre
	| AvatarCustomizationFShirtMarshadowtshirt
	| AvatarCustomizationFShirtMegalopunnyitems
	| AvatarCustomizationFShirtMegarayquaza
	| AvatarCustomizationFShirtMelmetaljacket
	| AvatarCustomizationFShirtMelmetalvest
	| AvatarCustomizationFShirtMeloettatshirt
	| AvatarCustomizationFShirtMeltan
	| AvatarCustomizationFShirtMew0
	| AvatarCustomizationFShirtMewtwo
	| AvatarCustomizationFShirtMisty
	| AvatarCustomizationFShirtMovie2020jessiejames
	| AvatarCustomizationFShirtMunnapack
	| AvatarCustomizationFShirtNike2021
	| AvatarCustomizationFShirtOcshirt045
	| AvatarCustomizationFShirtOcshirt108
	| AvatarCustomizationFShirtOcshirt129
	| AvatarCustomizationFShirtOcshirt143
	| AvatarCustomizationFShirtOras
	| AvatarCustomizationFShirtPajamas20220
	| AvatarCustomizationFShirtPajamas20221
	| AvatarCustomizationFShirtPalmer
	| AvatarCustomizationFShirtPartneritemsjan2024hoodie
	| AvatarCustomizationFShirtPartneritemsjan2024tshirt
	| AvatarCustomizationFShirtPikachufan0
	| AvatarCustomizationFShirtPikachulibre
	| AvatarCustomizationFShirtPikachuonesie
	| AvatarCustomizationFShirtPinpukuhoodie
	| AvatarCustomizationFShirtPipluponesie
	| AvatarCustomizationFShirtPkmnhoodie001
	| AvatarCustomizationFShirtPkmnhoodie004
	| AvatarCustomizationFShirtPkmnhoodie007
	| AvatarCustomizationFShirtPkmnshirts202100
	| AvatarCustomizationFShirtPkmnshirts202101
	| AvatarCustomizationFShirtPkmnshirts202102
	| AvatarCustomizationFShirtPkmnshirts165
	| AvatarCustomizationFShirtPkmnshirts188
	| AvatarCustomizationFShirtPkmnshirts201
	| AvatarCustomizationFShirtPkmnshirts238
	| AvatarCustomizationFShirtPoloshirt
	| AvatarCustomizationFShirtPoloshirt1
	| AvatarCustomizationFShirtPoloshirt2
	| AvatarCustomizationFShirtProfwillowoutfit
	| AvatarCustomizationFShirtProjectguitar
	| AvatarCustomizationFShirtPumpkabooitems
	| AvatarCustomizationFShirtRegiicejersies
	| AvatarCustomizationFShirtRegirockjersies
	| AvatarCustomizationFShirtRegisteeljersies
	| AvatarCustomizationFShirtReuniclusitems
	| AvatarCustomizationFShirtRuinmaniac
	| AvatarCustomizationFShirtSafarizone2020
	| AvatarCustomizationFShirtSamsungsummer2020
	| AvatarCustomizationFShirtShayminlandtshirt
	| AvatarCustomizationFShirtShayminskytshirt
	| AvatarCustomizationFShirtShinymewtshirts
	| AvatarCustomizationFShirtSlowpokeshirts
	| AvatarCustomizationFShirtSlowpoketailshirts
	| AvatarCustomizationFShirtSnorlaxonesie
	| AvatarCustomizationFShirtSpiritomb0
	| AvatarCustomizationFShirtSpring2021gulpin
	| AvatarCustomizationFShirtSpring2021plusle
	| AvatarCustomizationFShirtSs
	| AvatarCustomizationFShirtSteven
	| AvatarCustomizationFShirtStevenfirst
	| AvatarCustomizationFShirtSukajanblastoise
	| AvatarCustomizationFShirtSukajancharizard
	| AvatarCustomizationFShirtSukajanhouou
	| AvatarCustomizationFShirtSukajanlugia
	| AvatarCustomizationFShirtSukajanvenusaur
	| AvatarCustomizationFShirtSummer2023
	| AvatarCustomizationFShirtSustainability2021
	| AvatarCustomizationFShirtSvcostumescarletschool
	| AvatarCustomizationFShirtSvcostumevioletschool
	| AvatarCustomizationFShirtSvdlc1
	| AvatarCustomizationFShirtSvdlc2fall
	| AvatarCustomizationFShirtSvdlc2spring
	| AvatarCustomizationFShirtSweater300
	| AvatarCustomizationFShirtSweater301
	| AvatarCustomizationFShirtSweater302
	| AvatarCustomizationFShirtSweaterInstinct
	| AvatarCustomizationFShirtSweaterMystic
	| AvatarCustomizationFShirtSweaterValor
	| AvatarCustomizationFShirtSwshdlc2costume
	| AvatarCustomizationFShirtSwshdlccostume
	| AvatarCustomizationFShirtSwshuniformchampion
	| AvatarCustomizationFShirtSwshuniformdark
	| AvatarCustomizationFShirtSwshuniformdefault
	| AvatarCustomizationFShirtSwshuniformdragon
	| AvatarCustomizationFShirtSylveonitems
	| AvatarCustomizationFShirtTanktop0
	| AvatarCustomizationFShirtTanktop1
	| AvatarCustomizationFShirtTanktop2
	| AvatarCustomizationFShirtTanktopCharizard0
	| AvatarCustomizationFShirtTanktopCharizard1
	| AvatarCustomizationFShirtTanktopCharizard2
	| AvatarCustomizationFShirtTanktopPikachu0
	| AvatarCustomizationFShirtTanktopPikachu1
	| AvatarCustomizationFShirtTanktopPikachu2
	| AvatarCustomizationFShirtTcgcollabtshirtandcap
	| AvatarCustomizationFShirtTeamaqua
	| AvatarCustomizationFShirtTeamblanche
	| AvatarCustomizationFShirtTeamcandela
	| AvatarCustomizationFShirtTeammagma
	| AvatarCustomizationFShirtTeamrocket0
	| AvatarCustomizationFShirtTeamrocket1
	| AvatarCustomizationFShirtTeamskull
	| AvatarCustomizationFShirtTeamspark
	| AvatarCustomizationFShirtTogepihoodie
	| AvatarCustomizationFShirtTracksuitsgroudon
	| AvatarCustomizationFShirtTracksuitskyogre
	| AvatarCustomizationFShirtTshirtCycling0
	| AvatarCustomizationFShirtTshirtCycling1
	| AvatarCustomizationFShirtTshirtCycling2
	| AvatarCustomizationFShirtTshirtCycling3
	| AvatarCustomizationFShirtTshirtFestChicago2017
	| AvatarCustomizationFShirtTshirtFestChicago2018
	| AvatarCustomizationFShirtTshirtGlobalGoals2017
	| AvatarCustomizationFShirtTshirtPikachu0
	| AvatarCustomizationFShirtTshirtPikachu1
	| AvatarCustomizationFShirtTshirtPikachu2
	| AvatarCustomizationFShirtTshirtPikachu3
	| AvatarCustomizationFShirtTshirtPikachu4
	| AvatarCustomizationFShirtTshirtPikachu5
	| AvatarCustomizationFShirtTshirtPikachu6
	| AvatarCustomizationFShirtTurtwigonesie
	| AvatarCustomizationFShirtUltrareconsquad
	| AvatarCustomizationFShirtUltra0
	| AvatarCustomizationFShirtUniqlotshirts0
	| AvatarCustomizationFShirtUniqlotshirts1
	| AvatarCustomizationFShirtUniqlotshirts2
	| AvatarCustomizationFShirtUnwto
	| AvatarCustomizationFShirtValentine2023
	| AvatarCustomizationFShirtVerizon2020
	| AvatarCustomizationFShirtVeterantrainerxy
	| AvatarCustomizationFShirtVictinitshirts
	| AvatarCustomizationFShirtWcs2022
	| AvatarCustomizationFShirtWcs2022tshirtbulu
	| AvatarCustomizationFShirtWcs2022tshirtred
	| AvatarCustomizationFShirtWcs2022winnersitems
	| AvatarCustomizationFShirtWcs2023
	| AvatarCustomizationFShirtWcs2023promotshirt
	| AvatarCustomizationFShirtWcs2023promotshirt01
	| AvatarCustomizationFShirtWcs2023sukajan
	| AvatarCustomizationFShirtWcs2023winnersitems
	| AvatarCustomizationFShirtWcs2024
	| AvatarCustomizationFShirtWcs2024championshipshirtBlue
	| AvatarCustomizationFShirtWcs2024championshipshirtWhite
	| AvatarCustomizationFShirtWcsyokohama
	| AvatarCustomizationFShirtWhitecoat
	| AvatarCustomizationFShirtWintersweater2023
	| AvatarCustomizationFShirtZoruaonesie
	| AvatarCustomizationFShoes6thanniversary
	| AvatarCustomizationFShoesAcetrainerbw
	| AvatarCustomizationFShoesAcetrainersm
	| AvatarCustomizationFShoesAnimegou
	| AvatarCustomizationFShoesBackpacker
	| AvatarCustomizationFShoesBattlegirl0
	| AvatarCustomizationFShoesBwn
	| AvatarCustomizationFShoesCarbink
	| AvatarCustomizationFShoesClay
	| AvatarCustomizationFShoesCoolboots
	| AvatarCustomizationFShoesDedenneitems
	| AvatarCustomizationFShoesDefault0
	| AvatarCustomizationFShoesDefault1
	| AvatarCustomizationFShoesDefault2
	| AvatarCustomizationFShoesDefault3
	| AvatarCustomizationFShoesDefault4
	| AvatarCustomizationFShoesDefault5
	| AvatarCustomizationFShoesDefault6
	| AvatarCustomizationFShoesDelibird
	| AvatarCustomizationFShoesDp
	| AvatarCustomizationFShoesElesa
	| AvatarCustomizationFShoesEmpty
	| AvatarCustomizationFShoesFashionweek2022
	| AvatarCustomizationFShoesFrlg0
	| AvatarCustomizationFShoesFw2022
	| AvatarCustomizationFShoesGeeta
	| AvatarCustomizationFShoesGiovanni
	| AvatarCustomizationFShoesGladion
	| AvatarCustomizationFShoesGothitelleitems
	| AvatarCustomizationFShoesGreen
	| AvatarCustomizationFShoesGymleader0
	| AvatarCustomizationFShoesGymleader1
	| AvatarCustomizationFShoesGymleader2
	| AvatarCustomizationFShoesHala
	| AvatarCustomizationFShoesHgss0
	| AvatarCustomizationFShoesIngo
	| AvatarCustomizationFShoesKorrina
	| AvatarCustomizationFShoesLadiamondoutfit
	| AvatarCustomizationFShoesLana
	| AvatarCustomizationFShoesLapearloutfit
	| AvatarCustomizationFShoesLegendofarceus
	| AvatarCustomizationFShoesLoosepants
	| AvatarCustomizationFShoesLoosepants1
	| AvatarCustomizationFShoesLoosepants2
	| AvatarCustomizationFShoesLoosepants3
	| AvatarCustomizationFShoesLuvdiscpack
	| AvatarCustomizationFShoesLysandre
	| AvatarCustomizationFShoesMegalopunnyitems
	| AvatarCustomizationFShoesMelmetalshoes
	| AvatarCustomizationFShoesMewtwo
	| AvatarCustomizationFShoesMisty
	| AvatarCustomizationFShoesNewyear2022
	| AvatarCustomizationFShoesNike2021
	| AvatarCustomizationFShoesOras
	| AvatarCustomizationFShoesPajamas20220
	| AvatarCustomizationFShoesPajamas20221
	| AvatarCustomizationFShoesPalmer
	| AvatarCustomizationFShoesPikachufan0
	| AvatarCustomizationFShoesPikachulibre
	| AvatarCustomizationFShoesProfwillowoutfit
	| AvatarCustomizationFShoesRegiicejersies
	| AvatarCustomizationFShoesRegirockjersies
	| AvatarCustomizationFShoesRegisteeljersies
	| AvatarCustomizationFShoesReuniclusitems
	| AvatarCustomizationFShoesRuinmaniac
	| AvatarCustomizationFShoesSandals
	| AvatarCustomizationFShoesSandals1
	| AvatarCustomizationFShoesSandals2
	| AvatarCustomizationFShoesSolgaleoitems
	| AvatarCustomizationFShoesSs
	| AvatarCustomizationFShoesSteven
	| AvatarCustomizationFShoesStevenfirst
	| AvatarCustomizationFShoesSvcostumescarletschool
	| AvatarCustomizationFShoesSvcostumevioletschool
	| AvatarCustomizationFShoesSvdlc1
	| AvatarCustomizationFShoesSvdlc2spring
	| AvatarCustomizationFShoesSwshdlc2costume
	| AvatarCustomizationFShoesSwshdlccostume
	| AvatarCustomizationFShoesSwshuniformdark
	| AvatarCustomizationFShoesSwshuniformdefault
	| AvatarCustomizationFShoesSwshuniformdragon
	| AvatarCustomizationFShoesSylveonitems
	| AvatarCustomizationFShoesTeamaqua
	| AvatarCustomizationFShoesTeamblanche
	| AvatarCustomizationFShoesTeamcandela
	| AvatarCustomizationFShoesTeammagma
	| AvatarCustomizationFShoesTeamrocket0
	| AvatarCustomizationFShoesTeamrocket1
	| AvatarCustomizationFShoesTeamskull
	| AvatarCustomizationFShoesTeamspark
	| AvatarCustomizationFShoesUltrareconsquad
	| AvatarCustomizationFShoesUltra0
	| AvatarCustomizationFShoesVeterantrainerxy
	| AvatarCustomizationFShoesWcs2022winnersitems
	| AvatarCustomizationFShoesWcs2023winnersitems
	| AvatarCustomizationFShoesWinterboots2023
	| AvatarCustomizationFShoesWinterboots0
	| AvatarCustomizationFShoesWinterboots1
	| AvatarCustomizationFShoesWinterboots2
	| AvatarCustomizationFShoesWinterboots3
	| AvatarCustomizationFSkin0
	| AvatarCustomizationFSkin1
	| AvatarCustomizationFSkin10
	| AvatarCustomizationFSkin11
	| AvatarCustomizationFSkin2
	| AvatarCustomizationFSkin3
	| AvatarCustomizationFSkin4
	| AvatarCustomizationFSkin5
	| AvatarCustomizationFSkin6
	| AvatarCustomizationFSkin7
	| AvatarCustomizationFSkin8
	| AvatarCustomizationFSkin9
	| AvatarCustomizationFSocksDefault0
	| AvatarCustomizationFSocksDefault1
	| AvatarCustomizationFSocksDefault2
	| AvatarCustomizationFSocksEmpty
	| AvatarCustomizationFSocksFw2022
	| AvatarCustomizationFSocksHgss0
	| AvatarCustomizationFSocksSneakersocks0
	| AvatarCustomizationFSocksSneakersocks1
	| AvatarCustomizationFSocksSollunaitems
	| AvatarCustomizationFSocksSwshuniformdefault
	| AvatarCustomizationFSocksSwshuniformdragon
	| AvatarCustomizationFSocksTeamaqua
	| AvatarCustomizationFSocksThighhighs0
	| AvatarCustomizationMBackpackAlolaitemslittenbp
	| AvatarCustomizationMBackpackAlolaitemspoppliobp
	| AvatarCustomizationMBackpackAlolaitemsrowletbp
	| AvatarCustomizationMBackpackAnimegou
	| AvatarCustomizationMBackpackBackpacker
	| AvatarCustomizationMBackpackCombeebackpack
	| AvatarCustomizationMBackpackCombeebackpack01
	| AvatarCustomizationMBackpackDedenneitems
	| AvatarCustomizationMBackpackDefault0
	| AvatarCustomizationMBackpackDefault1
	| AvatarCustomizationMBackpackDefault2
	| AvatarCustomizationMBackpackDefault3
	| AvatarCustomizationMBackpackDefault4
	| AvatarCustomizationMBackpackDefault5
	| AvatarCustomizationMBackpackDp
	| AvatarCustomizationMBackpackEggIncubator
	| AvatarCustomizationMBackpackEggbackpack0
	| AvatarCustomizationMBackpackEggbackpack1
	| AvatarCustomizationMBackpackEggbackpack2
	| AvatarCustomizationMBackpackEmpty
	| AvatarCustomizationMBackpackFrlg0
	| AvatarCustomizationMBackpackGenesecteventitem
	| AvatarCustomizationMBackpackGengar0
	| AvatarCustomizationMBackpackGiratinaitems
	| AvatarCustomizationMBackpackGuccibackpack
	| AvatarCustomizationMBackpackGuitarcasebackpack
	| AvatarCustomizationMBackpackHgss0
	| AvatarCustomizationMBackpackHououbackpack
	| AvatarCustomizationMBackpackKakureonpouch
	| AvatarCustomizationMBackpackKomala
	| AvatarCustomizationMBackpackLongchampbp
	| AvatarCustomizationMBackpackLunalaitems
	| AvatarCustomizationMBackpackLunarnewyr
	| AvatarCustomizationMBackpackMimikyubp
	| AvatarCustomizationMBackpackMovie2020
	| AvatarCustomizationMBackpackNaganadelawings
	| AvatarCustomizationMBackpackNike2021
	| AvatarCustomizationMBackpackPamobackpack
	| AvatarCustomizationMBackpackPkmnhoodie001
	| AvatarCustomizationMBackpackPkmnhoodie004
	| AvatarCustomizationMBackpackPkmnhoodie007
	| AvatarCustomizationMBackpackRuinmaniac
	| AvatarCustomizationMBackpackSnapcamera
	| AvatarCustomizationMBackpackSs
	| AvatarCustomizationMBackpackSvcostumescarletschool
	| AvatarCustomizationMBackpackSvcostumevioletschool
	| AvatarCustomizationMBackpackSvdlc1
	| AvatarCustomizationMBackpackSvdlc2spring
	| AvatarCustomizationMBackpackSwshdlc2costume
	| AvatarCustomizationMBackpackSwshdlccostume
	| AvatarCustomizationMBackpackTogepibackpack
	| AvatarCustomizationMBackpackUltra0
	| AvatarCustomizationMBackpackVerizon2021
	| AvatarCustomizationMBackpackZubatbp
	| AvatarCustomizationMEyes0
	| AvatarCustomizationMEyes1
	| AvatarCustomizationMEyes2
	| AvatarCustomizationMEyes3
	| AvatarCustomizationMEyes4
	| AvatarCustomizationMFace3dmask00
	| AvatarCustomizationMFace3dmask01
	| AvatarCustomizationMFace3dmask02
	| AvatarCustomizationMFaceBanettemask
	| AvatarCustomizationMFaceDayofthedead
	| AvatarCustomizationMFaceDefaultmask
	| AvatarCustomizationMFaceEmpty
	| AvatarCustomizationMFaceFacestickerghostpika
	| AvatarCustomizationMFaceFacestickerpikachu
	| AvatarCustomizationMFaceFacestickerpokeball
	| AvatarCustomizationMFaceFestofcolors00
	| AvatarCustomizationMFaceFestofcolors01
	| AvatarCustomizationMFaceFestofcolors02
	| AvatarCustomizationMFaceGracidea
	| AvatarCustomizationMFaceHoliday2022santacostumes
	| AvatarCustomizationMFacePikachumask
	| AvatarCustomizationMFaceSableyemask
	| AvatarCustomizationMFaceTeamskull
	| AvatarCustomizationMFaceToxelmask
	| AvatarCustomizationMFaceVerizon2020mask
	| AvatarCustomizationMGlasses3d
	| AvatarCustomizationMGlassesCutieflysleepmask
	| AvatarCustomizationMGlassesDivingsuit
	| AvatarCustomizationMGlassesDrpikachu
	| AvatarCustomizationMGlassesEmpty
	| AvatarCustomizationMGlassesFrillishglasses
	| AvatarCustomizationMGlassesFw2022
	| AvatarCustomizationMGlassesGimmighoulitems
	| AvatarCustomizationMGlassesGoteamrocketarlo
	| AvatarCustomizationMGlassesGrandoakglasses
	| AvatarCustomizationMGlassesJogger0
	| AvatarCustomizationMGlassesLugiaglasses
	| AvatarCustomizationMGlassesLv40glasses
	| AvatarCustomizationMGlassesMask0
	| AvatarCustomizationMGlassesMask1
	| AvatarCustomizationMGlassesNewyear2022
	| AvatarCustomizationMGlassesNewyearglasses2020
	| AvatarCustomizationMGlassesNewyearglasses2021
	| AvatarCustomizationMGlassesObstagoonitems
	| AvatarCustomizationMGlassesRoundsunglasses
	| AvatarCustomizationMGlassesTeardrop0
	| AvatarCustomizationMGlassesThick0
	| AvatarCustomizationMGlassesThick1
	| AvatarCustomizationMGlassesThick2
	| AvatarCustomizationMGlassesThick3
	| AvatarCustomizationMGlassesThick4
	| AvatarCustomizationMGlovesAcetrainersm
	| AvatarCustomizationMGlovesBea
	| AvatarCustomizationMGlovesBwn
	| AvatarCustomizationMGlovesDefault0
	| AvatarCustomizationMGlovesDefault1
	| AvatarCustomizationMGlovesDefault2
	| AvatarCustomizationMGlovesDefault3
	| AvatarCustomizationMGlovesDelibird
	| AvatarCustomizationMGlovesDynamaxswsh
	| AvatarCustomizationMGlovesEmpty
	| AvatarCustomizationMGlovesFrlg0
	| AvatarCustomizationMGlovesGeeta
	| AvatarCustomizationMGlovesGiovanni
	| AvatarCustomizationMGlovesGuzma
	| AvatarCustomizationMGlovesGymleader0
	| AvatarCustomizationMGlovesHoopabangle
	| AvatarCustomizationMGlovesJogger0
	| AvatarCustomizationMGlovesKorrina
	| AvatarCustomizationMGlovesLysandre
	| AvatarCustomizationMGlovesMegabangle
	| AvatarCustomizationMGlovesMegabangleblack
	| AvatarCustomizationMGlovesMegabangleblue
	| AvatarCustomizationMGlovesMegabanglered
	| AvatarCustomizationMGlovesMegabangleyellow
	| AvatarCustomizationMGlovesObstagoonitems
	| AvatarCustomizationMGlovesPalmer
	| AvatarCustomizationMGlovesProfwillowoutfit
	| AvatarCustomizationMGlovesStevenfirst
	| AvatarCustomizationMGlovesSvdlc2spring
	| AvatarCustomizationMGlovesSwshdlc2costume
	| AvatarCustomizationMGlovesSwshdlccostume
	| AvatarCustomizationMGlovesSwshuniformchampion
	| AvatarCustomizationMGlovesSwshuniformdark
	| AvatarCustomizationMGlovesSwshuniformdefault
	| AvatarCustomizationMGlovesSwshuniformdragon
	| AvatarCustomizationMGlovesTeamaqua
	| AvatarCustomizationMGlovesTeammagma
	| AvatarCustomizationMGlovesTeamrocket0
	| AvatarCustomizationMGlovesTeamspark
	| AvatarCustomizationMGlovesWintergloves2023
	| AvatarCustomizationMGofestPikachuvisor
	| AvatarCustomizationMHairDefault0
	| AvatarCustomizationMHairDefault1
	| AvatarCustomizationMHairDefault10
	| AvatarCustomizationMHairDefault11
	| AvatarCustomizationMHairDefault12
	| AvatarCustomizationMHairDefault13
	| AvatarCustomizationMHairDefault14
	| AvatarCustomizationMHairDefault15
	| AvatarCustomizationMHairDefault16
	| AvatarCustomizationMHairDefault17
	| AvatarCustomizationMHairDefault18
	| AvatarCustomizationMHairDefault19
	| AvatarCustomizationMHairDefault2
	| AvatarCustomizationMHairDefault3
	| AvatarCustomizationMHairDefault4
	| AvatarCustomizationMHairDefault5
	| AvatarCustomizationMHairDefault6
	| AvatarCustomizationMHairDefault7
	| AvatarCustomizationMHairDefault8
	| AvatarCustomizationMHairDefault9
	| AvatarCustomizationMHat6thanniversary
	| AvatarCustomizationMHatAcetrainersm
	| AvatarCustomizationMHatAdventure0
	| AvatarCustomizationMHatAseries
	| AvatarCustomizationMHatBea
	| AvatarCustomizationMHatBidoofhat
	| AvatarCustomizationMHatBounsweetitems
	| AvatarCustomizationMHatBurmyearrings11
	| AvatarCustomizationMHatBurmyearrings12
	| AvatarCustomizationMHatBurmyearrings13
	| AvatarCustomizationMHatBwn
	| AvatarCustomizationMHatCasket0
	| AvatarCustomizationMHatCetoddlehat
	| AvatarCustomizationMHatClay
	| AvatarCustomizationMHatCofagrigusitems
	| AvatarCustomizationMHatCosmog
	| AvatarCustomizationMHatCrownmoon
	| AvatarCustomizationMHatCrownsun
	| AvatarCustomizationMHatCubonehat
	| AvatarCustomizationMHatDarumakahat
	| AvatarCustomizationMHatDedenneitems
	| AvatarCustomizationMHatDefault0
	| AvatarCustomizationMHatDefault1
	| AvatarCustomizationMHatDefault2
	| AvatarCustomizationMHatDefault3
	| AvatarCustomizationMHatDefault4
	| AvatarCustomizationMHatDefault5
	| AvatarCustomizationMHatDeino
	| AvatarCustomizationMHatDelibird
	| AvatarCustomizationMHatDetectivepikachu
	| AvatarCustomizationMHatDiancie
	| AvatarCustomizationMHatDp
	| AvatarCustomizationMHatDrifloon0
	| AvatarCustomizationMHatDrpikachu
	| AvatarCustomizationMHatDusclopsmummy
	| AvatarCustomizationMHatEeveecap
	| AvatarCustomizationMHatElesa
	| AvatarCustomizationMHatEmpty
	| AvatarCustomizationMHatFedora0
	| AvatarCustomizationMHatFedora1
	| AvatarCustomizationMHatFisher0
	| AvatarCustomizationMHatFlabebepack
	| AvatarCustomizationMHatFragment0
	| AvatarCustomizationMHatFrlg0
	| AvatarCustomizationMHatFurfrouwig
	| AvatarCustomizationMHatFw2022
	| AvatarCustomizationMHatGalarfarfetchditems
	| AvatarCustomizationMHatGenesecteventitem
	| AvatarCustomizationMHatGengar0
	| AvatarCustomizationMHatGimmighoulitems
	| AvatarCustomizationMHatGiratinaitems
	| AvatarCustomizationMHatGladion
	| AvatarCustomizationMHatGoomy
	| AvatarCustomizationMHatGreavardwig
	| AvatarCustomizationMHatGreencoat
	| AvatarCustomizationMHatGrowlithehelmet
	| AvatarCustomizationMHatGtr2024eeveefanmask
	| AvatarCustomizationMHatGtr2024pikachufanmask
	| AvatarCustomizationMHatGuccihat
	| AvatarCustomizationMHatGuzma
	| AvatarCustomizationMHatGyaradoscap
	| AvatarCustomizationMHatHgss0
	| AvatarCustomizationMHatHoliday2022santacostumes
	| AvatarCustomizationMHatHolidaybeanie
	| AvatarCustomizationMHatHoopaearmuffs
	| AvatarCustomizationMHatIngo
	| AvatarCustomizationMHatJogger0
	| AvatarCustomizationMHatKantotourcapgreen
	| AvatarCustomizationMHatKantotourcapred
	| AvatarCustomizationMHatKorrina
	| AvatarCustomizationMHatLana
	| AvatarCustomizationMHatLaprasbandana
	| AvatarCustomizationMHatLasecuritycorps
	| AvatarCustomizationMHatLegendofarceus
	| AvatarCustomizationMHatLitwickhat
	| AvatarCustomizationMHatLoneearrings
	| AvatarCustomizationMHatLvl50cap
	| AvatarCustomizationMHatMagikarp
	| AvatarCustomizationMHatMareaniehat
	| AvatarCustomizationMHatMegalopunnyitems
	| AvatarCustomizationMHatMegarayquaza
	| AvatarCustomizationMHatMeltan
	| AvatarCustomizationMHatMewtwo
	| AvatarCustomizationMHatMimikyu0
	| AvatarCustomizationMHatMismagius0
	| AvatarCustomizationMHatMovie2020
	| AvatarCustomizationMHatMunnapack0
	| AvatarCustomizationMHatMunnapack1
	| AvatarCustomizationMHatNewyear2022
	| AvatarCustomizationMHatNewyearhat2021
	| AvatarCustomizationMHatNewyearhat2023
	| AvatarCustomizationMHatNihilegoitems
	| AvatarCustomizationMHatNoibat
	| AvatarCustomizationMHatObstagoonitems
	| AvatarCustomizationMHatOras
	| AvatarCustomizationMHatOricoriopink
	| AvatarCustomizationMHatOricoriopurple
	| AvatarCustomizationMHatOricoriored
	| AvatarCustomizationMHatOricorioyellow
	| AvatarCustomizationMHatPartneritemsjan2024hat
	| AvatarCustomizationMHatPhantump
	| AvatarCustomizationMHatPikachucap
	| AvatarCustomizationMHatPikachufan0
	| AvatarCustomizationMHatPikachulibre
	| AvatarCustomizationMHatPikachupumpkinhead
	| AvatarCustomizationMHatPkmncap0
	| AvatarCustomizationMHatPkmncap1
	| AvatarCustomizationMHatPkmncap2
	| AvatarCustomizationMHatPoipole
	| AvatarCustomizationMHatProfwillowoutfit
	| AvatarCustomizationMHatRegiicejersies
	| AvatarCustomizationMHatRegirockjersies
	| AvatarCustomizationMHatRegisteeljersies
	| AvatarCustomizationMHatRuinmaniac
	| AvatarCustomizationMHatSableyegoggles
	| AvatarCustomizationMHatSamsungsummer2020
	| AvatarCustomizationMHatSandygasthat
	| AvatarCustomizationMHatShayminhat
	| AvatarCustomizationMHatSlowpoketailshirts
	| AvatarCustomizationMHatSnorlaxnightcap
	| AvatarCustomizationMHatSolgaleoitems
	| AvatarCustomizationMHatSs
	| AvatarCustomizationMHatStantlerheadband
	| AvatarCustomizationMHatStrawhat
	| AvatarCustomizationMHatSummer2023
	| AvatarCustomizationMHatSvcostumescarletschool
	| AvatarCustomizationMHatSvcostumevioletschool
	| AvatarCustomizationMHatSwshdlc2costume
	| AvatarCustomizationMHatSwshuniformchampion
	| AvatarCustomizationMHatSylveonitems
	| AvatarCustomizationMHatTcgcollabtshirtandcap
	| AvatarCustomizationMHatTeamaqua
	| AvatarCustomizationMHatTeamleadercap0
	| AvatarCustomizationMHatTeamleadercap1
	| AvatarCustomizationMHatTeamleadercap2
	| AvatarCustomizationMHatTeamrocket0
	| AvatarCustomizationMHatTeamrocketcap
	| AvatarCustomizationMHatTeamskull
	| AvatarCustomizationMHatTophat0
	| AvatarCustomizationMHatUltrareconsquad
	| AvatarCustomizationMHatUltrareconsquadb
	| AvatarCustomizationMHatUltra0
	| AvatarCustomizationMHatVerizon2021
	| AvatarCustomizationMHatWcs2022winnersitems
	| AvatarCustomizationMHatWhimsicottearmuff
	| AvatarCustomizationMHatWillowglasses
	| AvatarCustomizationMHatWoobatearrings
	| AvatarCustomizationMHatYamaskhat
	| AvatarCustomizationMHatYamaskmask
	| AvatarCustomizationMHatZubathat
	| AvatarCustomizationMJacketNewyear2022
	| AvatarCustomizationMPants6thanniversary
	| AvatarCustomizationMPants7thanniversary
	| AvatarCustomizationMPantsAcetrainerbw
	| AvatarCustomizationMPantsAcetrainersm
	| AvatarCustomizationMPantsAnimegou
	| AvatarCustomizationMPantsBackpacker
	| AvatarCustomizationMPantsBounsweetitems
	| AvatarCustomizationMPantsBrock
	| AvatarCustomizationMPantsBwn
	| AvatarCustomizationMPantsCasual0
	| AvatarCustomizationMPantsCasual1
	| AvatarCustomizationMPantsClay
	| AvatarCustomizationMPantsDefault0
	| AvatarCustomizationMPantsDenimfashionweek2023
	| AvatarCustomizationMPantsDp
	| AvatarCustomizationMPantsElesa
	| AvatarCustomizationMPantsFashionweek2022
	| AvatarCustomizationMPantsFisher0
	| AvatarCustomizationMPantsFlabebepack
	| AvatarCustomizationMPantsFrlg0
	| AvatarCustomizationMPantsFw2022
	| AvatarCustomizationMPantsGeeta
	| AvatarCustomizationMPantsGenderlessskirt
	| AvatarCustomizationMPantsGiovanni
	| AvatarCustomizationMPantsGladion
	| AvatarCustomizationMPantsGothitelleitems
	| AvatarCustomizationMPantsGreen
	| AvatarCustomizationMPantsGreencoat
	| AvatarCustomizationMPantsGuzma
	| AvatarCustomizationMPantsGymleader0
	| AvatarCustomizationMPantsGymleader1
	| AvatarCustomizationMPantsGymleader2
	| AvatarCustomizationMPantsHala
	| AvatarCustomizationMPantsHgss0
	| AvatarCustomizationMPantsIngo
	| AvatarCustomizationMPantsJogger0
	| AvatarCustomizationMPantsKorrina
	| AvatarCustomizationMPantsLoosepants
	| AvatarCustomizationMPantsLunalaitems
	| AvatarCustomizationMPantsLuvdiscpack
	| AvatarCustomizationMPantsLysandre
	| AvatarCustomizationMPantsMewtwo
	| AvatarCustomizationMPantsMunnapack
	| AvatarCustomizationMPantsNewyear2022
	| AvatarCustomizationMPantsOras
	| AvatarCustomizationMPantsPajamas20220
	| AvatarCustomizationMPantsPajamas20221
	| AvatarCustomizationMPantsPalmer
	| AvatarCustomizationMPantsPikachufan0
	| AvatarCustomizationMPantsPikachulibre
	| AvatarCustomizationMPantsProfwillowoutfit
	| AvatarCustomizationMPantsPumpkabooitems
	| AvatarCustomizationMPantsRegiicejersies
	| AvatarCustomizationMPantsRegirockjersies
	| AvatarCustomizationMPantsRegisteeljersies
	| AvatarCustomizationMPantsSkinnyjeans0
	| AvatarCustomizationMPantsSkinnyjeans1
	| AvatarCustomizationMPantsSkinnyjeans2
	| AvatarCustomizationMPantsSs
	| AvatarCustomizationMPantsSteven
	| AvatarCustomizationMPantsStevenfirst
	| AvatarCustomizationMPantsSweats0
	| AvatarCustomizationMPantsSweats1
	| AvatarCustomizationMPantsSweats2
	| AvatarCustomizationMPantsSweats3
	| AvatarCustomizationMPantsSweats4
	| AvatarCustomizationMPantsSwshdlc2costume
	| AvatarCustomizationMPantsSwshuniformchampion
	| AvatarCustomizationMPantsSwshuniformdark
	| AvatarCustomizationMPantsSwshuniformdefault
	| AvatarCustomizationMPantsSwshuniformdragon
	| AvatarCustomizationMPantsTeamaqua
	| AvatarCustomizationMPantsTeamblanche
	| AvatarCustomizationMPantsTeamcandela
	| AvatarCustomizationMPantsTeammagma
	| AvatarCustomizationMPantsTeamrocket0
	| AvatarCustomizationMPantsTeamskull
	| AvatarCustomizationMPantsTeamspark
	| AvatarCustomizationMPantsUltra0
	| AvatarCustomizationMPantsVeterantrainerxy
	| AvatarCustomizationMPantsWcs2022winnersitems
	| AvatarCustomizationMPose01
	| AvatarCustomizationMPose02
	| AvatarCustomizationMPose03
	| AvatarCustomizationMPose04
	| AvatarCustomizationMPose05
	| AvatarCustomizationMPose06
	| AvatarCustomizationMPose07
	| AvatarCustomizationMPose08
	| AvatarCustomizationMPose09
	| AvatarCustomizationMPose10
	| AvatarCustomizationMPose11
	| AvatarCustomizationMPose12
	| AvatarCustomizationMPose13
	| AvatarCustomizationMPose14
	| AvatarCustomizationMPose15
	| AvatarCustomizationMPose16
	| AvatarCustomizationMPose17
	| AvatarCustomizationMPose18
	| AvatarCustomizationMPose19
	| AvatarCustomizationMPose20
	| AvatarCustomizationMPose21
	| AvatarCustomizationMPose22
	| AvatarCustomizationMPose23
	| AvatarCustomizationMPose24
	| AvatarCustomizationMPose25
	| AvatarCustomizationMPose26
	| AvatarCustomizationMPose27
	| AvatarCustomizationMPose28
	| AvatarCustomizationMPose29
	| AvatarCustomizationMPose30
	| AvatarCustomizationMPose31
	| AvatarCustomizationMPose32
	| AvatarCustomizationMPose33
	| AvatarCustomizationMPose34
	| AvatarCustomizationMPose35
	| AvatarCustomizationMPose36
	| AvatarCustomizationMPose37
	| AvatarCustomizationMPose38
	| AvatarCustomizationMPose39
	| AvatarCustomizationMPose40
	| AvatarCustomizationMPose41
	| AvatarCustomizationMPose43
	| AvatarCustomizationMPose44
	| AvatarCustomizationMPose45
	| AvatarCustomizationMPose46
	| AvatarCustomizationMPose47
	| AvatarCustomizationMPose48
	| AvatarCustomizationMPose49
	| AvatarCustomizationMPose50
	| AvatarCustomizationMPose51
	| AvatarCustomizationMPose52
	| AvatarCustomizationMPose53
	| AvatarCustomizationMPose54
	| AvatarCustomizationMPose55
	| AvatarCustomizationMPose56
	| AvatarCustomizationMPose57
	| AvatarCustomizationMPose58
	| AvatarCustomizationMPose59
	| AvatarCustomizationMPose60
	| AvatarCustomizationMPose61
	| AvatarCustomizationMPose62
	| AvatarCustomizationMPose63
	| AvatarCustomizationMPose64
	| AvatarCustomizationMPoseEmpty
	| AvatarCustomizationMShirt6thanniversary
	| AvatarCustomizationMShirt7thanniversary
	| AvatarCustomizationMShirtAcetrainerbw
	| AvatarCustomizationMShirtAcetrainersm
	| AvatarCustomizationMShirtAlolacomfey
	| AvatarCustomizationMShirtAnimegou
	| AvatarCustomizationMShirtAseries
	| AvatarCustomizationMShirtBackpacker
	| AvatarCustomizationMShirtBallguy
	| AvatarCustomizationMShirtBea
	| AvatarCustomizationMShirtBlazer0
	| AvatarCustomizationMShirtBounsweetitems
	| AvatarCustomizationMShirtBrock
	| AvatarCustomizationMShirtBuzzwoleitems
	| AvatarCustomizationMShirtBwn
	| AvatarCustomizationMShirtCasual0
	| AvatarCustomizationMShirtCasual1
	| AvatarCustomizationMShirtCasual2
	| AvatarCustomizationMShirtCasual3
	| AvatarCustomizationMShirtCelebi0
	| AvatarCustomizationMShirtChimcharonesie
	| AvatarCustomizationMShirtClay
	| AvatarCustomizationMShirtCofagrigusitems
	| AvatarCustomizationMShirtCosmog
	| AvatarCustomizationMShirtCowichansweater
	| AvatarCustomizationMShirtDayofdead
	| AvatarCustomizationMShirtDefault0
	| AvatarCustomizationMShirtDefault1
	| AvatarCustomizationMShirtDefault2
	| AvatarCustomizationMShirtDefault2b
	| AvatarCustomizationMShirtDefault3
	| AvatarCustomizationMShirtDefault4
	| AvatarCustomizationMShirtDefault5
	| AvatarCustomizationMShirtDefault6
	| AvatarCustomizationMShirtDefault7
	| AvatarCustomizationMShirtDelibird
	| AvatarCustomizationMShirtDelibirdonesie
	| AvatarCustomizationMShirtDenimfashionweek2023
	| AvatarCustomizationMShirtDenimjacket
	| AvatarCustomizationMShirtDetectivepikachu
	| AvatarCustomizationMShirtDiancie
	| AvatarCustomizationMShirtDivingsuit
	| AvatarCustomizationMShirtDiwali2021
	| AvatarCustomizationMShirtDp
	| AvatarCustomizationMShirtDrifblim0
	| AvatarCustomizationMShirtDusclopsmummy
	| AvatarCustomizationMShirtEarthday2018
	| AvatarCustomizationMShirtEeveestshirt00
	| AvatarCustomizationMShirtEeveestshirt01
	| AvatarCustomizationMShirtEeveestshirt02
	| AvatarCustomizationMShirtEeveestshirt03
	| AvatarCustomizationMShirtEeveestshirt04
	| AvatarCustomizationMShirtEeveestshirt05
	| AvatarCustomizationMShirtEeveestshirt06
	| AvatarCustomizationMShirtEeveestshirt07
	| AvatarCustomizationMShirtEeveestshirt08
	| AvatarCustomizationMShirtElesa
	| AvatarCustomizationMShirtFashionweek2022
	| AvatarCustomizationMShirtFestivaloflights00
	| AvatarCustomizationMShirtFestivaloflights01
	| AvatarCustomizationMShirtFisher0
	| AvatarCustomizationMShirtFlabebepack
	| AvatarCustomizationMShirtFragment0
	| AvatarCustomizationMShirtFrlg0
	| AvatarCustomizationMShirtFw2022
	| AvatarCustomizationMShirtGalarfarfetchditems
	| AvatarCustomizationMShirtGalaxyoutfit
	| AvatarCustomizationMShirtGeeta
	| AvatarCustomizationMShirtGenderlessskirt
	| AvatarCustomizationMShirtGengar0
	| AvatarCustomizationMShirtGengaronesie
	| AvatarCustomizationMShirtGiovanni
	| AvatarCustomizationMShirtGiratinaitems
	| AvatarCustomizationMShirtGladion
	| AvatarCustomizationMShirtGofest2022
	| AvatarCustomizationMShirtGofest2023
	| AvatarCustomizationMShirtGofest2024darkgray
	| AvatarCustomizationMShirtGofest2024gray
	| AvatarCustomizationMShirtGofest2024purple
	| AvatarCustomizationMShirtGofest2019
	| AvatarCustomizationMShirtGofest2020
	| AvatarCustomizationMShirtGofest2021
	| AvatarCustomizationMShirtGofestglobal2023
	| AvatarCustomizationMShirtGoteamrocketarlo
	| AvatarCustomizationMShirtGoteamrocketcliff
	| AvatarCustomizationMShirtGoteamrocketsierra
	| AvatarCustomizationMShirtGothitelleitems
	| AvatarCustomizationMShirtGotour2023
	| AvatarCustomizationMShirtGotour2024
	| AvatarCustomizationMShirtGreedentsweater
	| AvatarCustomizationMShirtGreen
	| AvatarCustomizationMShirtGreencoat
	| AvatarCustomizationMShirtGtrtshirt202200
	| AvatarCustomizationMShirtGtrtshirt202201
	| AvatarCustomizationMShirtGuccitshirts
	| AvatarCustomizationMShirtGuzma
	| AvatarCustomizationMShirtGymleader0
	| AvatarCustomizationMShirtGymleader1
	| AvatarCustomizationMShirtGymleader2
	| AvatarCustomizationMShirtHala
	| AvatarCustomizationMShirtHappi
	| AvatarCustomizationMShirtHappi1
	| AvatarCustomizationMShirtHappi2
	| AvatarCustomizationMShirtHgss0
	| AvatarCustomizationMShirtHoliday2022santacostumes
	| AvatarCustomizationMShirtHolifestival2021black
	| AvatarCustomizationMShirtHolifestival2021white
	| AvatarCustomizationMShirtHoopaunboundtshirt
	| AvatarCustomizationMShirtIngo
	| AvatarCustomizationMShirtIngress0
	| AvatarCustomizationMShirtIngressE0
	| AvatarCustomizationMShirtIngressR0
	| AvatarCustomizationMShirtJames
	| AvatarCustomizationMShirtJirachi
	| AvatarCustomizationMShirtJogger0
	| AvatarCustomizationMShirtKeldeotshirt
	| AvatarCustomizationMShirtKorrina
	| AvatarCustomizationMShirtLadiamondoutfit
	| AvatarCustomizationMShirtLana
	| AvatarCustomizationMShirtLapearloutfit
	| AvatarCustomizationMShirtLasecuritycorps
	| AvatarCustomizationMShirtLatiasLatios0
	| AvatarCustomizationMShirtLegendofarceus
	| AvatarCustomizationMShirtLongsleevesCharizard0
	| AvatarCustomizationMShirtLongsleevesCharizard1
	| AvatarCustomizationMShirtLongsleevesCharizard2
	| AvatarCustomizationMShirtLongsleevesPikachu0
	| AvatarCustomizationMShirtLongsleevesPikachu1
	| AvatarCustomizationMShirtLongsleevesPikachu2
	| AvatarCustomizationMShirtLuvdiscpack
	| AvatarCustomizationMShirtLvl50
	| AvatarCustomizationMShirtLvl501
	| AvatarCustomizationMShirtLysandre
	| AvatarCustomizationMShirtMarshadowtshirt
	| AvatarCustomizationMShirtMegalopunnyitems
	| AvatarCustomizationMShirtMegarayquaza
	| AvatarCustomizationMShirtMelmetaljacket
	| AvatarCustomizationMShirtMelmetalvest
	| AvatarCustomizationMShirtMeloettatshirt
	| AvatarCustomizationMShirtMeltan
	| AvatarCustomizationMShirtMew0
	| AvatarCustomizationMShirtMewtwo
	| AvatarCustomizationMShirtMovie2020jessiejames
	| AvatarCustomizationMShirtMunnapack
	| AvatarCustomizationMShirtNike2021
	| AvatarCustomizationMShirtOcshirt045
	| AvatarCustomizationMShirtOcshirt108
	| AvatarCustomizationMShirtOcshirt129
	| AvatarCustomizationMShirtOcshirt143
	| AvatarCustomizationMShirtOras
	| AvatarCustomizationMShirtPajamas20220
	| AvatarCustomizationMShirtPajamas20221
	| AvatarCustomizationMShirtPalmer
	| AvatarCustomizationMShirtPartneritemsjan2024hoodie
	| AvatarCustomizationMShirtPartneritemsjan2024tshirt
	| AvatarCustomizationMShirtPikachufan0
	| AvatarCustomizationMShirtPikachulibre
	| AvatarCustomizationMShirtPikachuonesie
	| AvatarCustomizationMShirtPinpukuhoodie
	| AvatarCustomizationMShirtPipluponesie
	| AvatarCustomizationMShirtPkmnhoodie001
	| AvatarCustomizationMShirtPkmnhoodie004
	| AvatarCustomizationMShirtPkmnhoodie007
	| AvatarCustomizationMShirtPkmnshirts202100
	| AvatarCustomizationMShirtPkmnshirts202101
	| AvatarCustomizationMShirtPkmnshirts202102
	| AvatarCustomizationMShirtPkmnshirts165
	| AvatarCustomizationMShirtPkmnshirts188
	| AvatarCustomizationMShirtPkmnshirts201
	| AvatarCustomizationMShirtPkmnshirts238
	| AvatarCustomizationMShirtPoloshirt
	| AvatarCustomizationMShirtPoloshirt1
	| AvatarCustomizationMShirtPoloshirt2
	| AvatarCustomizationMShirtProfwillowoutfit
	| AvatarCustomizationMShirtProjectguitar
	| AvatarCustomizationMShirtPumpkabooitems
	| AvatarCustomizationMShirtRegiicejersies
	| AvatarCustomizationMShirtRegirockjersies
	| AvatarCustomizationMShirtRegisteeljersies
	| AvatarCustomizationMShirtReuniclusitems
	| AvatarCustomizationMShirtRuinmaniac
	| AvatarCustomizationMShirtSafarizone2020
	| AvatarCustomizationMShirtSamsungsummer2020
	| AvatarCustomizationMShirtShayminlandtshirt
	| AvatarCustomizationMShirtShayminskytshirt
	| AvatarCustomizationMShirtShinymewtshirts
	| AvatarCustomizationMShirtSlowpokeshirts
	| AvatarCustomizationMShirtSlowpoketailshirts
	| AvatarCustomizationMShirtSnorlaxonesie
	| AvatarCustomizationMShirtSpiritomb0
	| AvatarCustomizationMShirtSpring2021gulpin
	| AvatarCustomizationMShirtSpring2021plusle
	| AvatarCustomizationMShirtSs
	| AvatarCustomizationMShirtSteven
	| AvatarCustomizationMShirtStevenfirst
	| AvatarCustomizationMShirtSukajanblastoise
	| AvatarCustomizationMShirtSukajancharizard
	| AvatarCustomizationMShirtSukajanhouou
	| AvatarCustomizationMShirtSukajanlugia
	| AvatarCustomizationMShirtSukajanvenusaur
	| AvatarCustomizationMShirtSummer2023
	| AvatarCustomizationMShirtSustainability2021
	| AvatarCustomizationMShirtSvcostumescarletschool
	| AvatarCustomizationMShirtSvcostumevioletschool
	| AvatarCustomizationMShirtSvdlc1
	| AvatarCustomizationMShirtSvdlc2fall
	| AvatarCustomizationMShirtSvdlc2spring
	| AvatarCustomizationMShirtSweatshirtSporty0
	| AvatarCustomizationMShirtSweatshirtSporty1
	| AvatarCustomizationMShirtSweatshirtSporty2
	| AvatarCustomizationMShirtSweatshirtSporty3
	| AvatarCustomizationMShirtSweatshirtStreak0
	| AvatarCustomizationMShirtSweatshirtStreak1
	| AvatarCustomizationMShirtSweatshirtStreak2
	| AvatarCustomizationMShirtSweatshirtStreak3
	| AvatarCustomizationMShirtSweatshirtStreak4
	| AvatarCustomizationMShirtSwshdlc2costume
	| AvatarCustomizationMShirtSwshdlccostume
	| AvatarCustomizationMShirtSwshuniformchampion
	| AvatarCustomizationMShirtSwshuniformdark
	| AvatarCustomizationMShirtSwshuniformdefault
	| AvatarCustomizationMShirtSwshuniformdragon
	| AvatarCustomizationMShirtSylveonitems
	| AvatarCustomizationMShirtTcgcollabtshirtandcap
	| AvatarCustomizationMShirtTeamaqua
	| AvatarCustomizationMShirtTeamblanche
	| AvatarCustomizationMShirtTeamcandela
	| AvatarCustomizationMShirtTeammagma
	| AvatarCustomizationMShirtTeamrocket0
	| AvatarCustomizationMShirtTeamrocket1
	| AvatarCustomizationMShirtTeamskull
	| AvatarCustomizationMShirtTeamspark
	| AvatarCustomizationMShirtTogepihoodie
	| AvatarCustomizationMShirtTracksuitsgroudon
	| AvatarCustomizationMShirtTracksuitskyogre
	| AvatarCustomizationMShirtTshirtFestChicago2017
	| AvatarCustomizationMShirtTshirtFestChicago2018
	| AvatarCustomizationMShirtTshirtGeometric0
	| AvatarCustomizationMShirtTshirtGeometric1
	| AvatarCustomizationMShirtTshirtGeometric2
	| AvatarCustomizationMShirtTshirtGlobalGoals2017
	| AvatarCustomizationMShirtTshirtInstinct
	| AvatarCustomizationMShirtTshirtMystic
	| AvatarCustomizationMShirtTshirtValor
	| AvatarCustomizationMShirtTurtleneck300
	| AvatarCustomizationMShirtTurtleneck301
	| AvatarCustomizationMShirtTurtleneck302
	| AvatarCustomizationMShirtTurtleneck303
	| AvatarCustomizationMShirtTurtwigonesie
	| AvatarCustomizationMShirtUltrareconsquad
	| AvatarCustomizationMShirtUltra0
	| AvatarCustomizationMShirtUniqlotshirts0
	| AvatarCustomizationMShirtUniqlotshirts1
	| AvatarCustomizationMShirtUniqlotshirts2
	| AvatarCustomizationMShirtUnwto
	| AvatarCustomizationMShirtValentine2023
	| AvatarCustomizationMShirtVerizon2020
	| AvatarCustomizationMShirtVeterantrainerxy
	| AvatarCustomizationMShirtVictinitshirts
	| AvatarCustomizationMShirtWcs2022
	| AvatarCustomizationMShirtWcs2022tshirtbulu
	| AvatarCustomizationMShirtWcs2022tshirtred
	| AvatarCustomizationMShirtWcs2022winnersitems
	| AvatarCustomizationMShirtWcs2023
	| AvatarCustomizationMShirtWcs2023promotshirt
	| AvatarCustomizationMShirtWcs2023promotshirt01
	| AvatarCustomizationMShirtWcs2023sukajan
	| AvatarCustomizationMShirtWcs2023winnersitems
	| AvatarCustomizationMShirtWcs2024
	| AvatarCustomizationMShirtWcs2024championshipshirtBlue
	| AvatarCustomizationMShirtWcs2024championshipshirtWhite
	| AvatarCustomizationMShirtWcsyokohama
	| AvatarCustomizationMShirtWhitecoat
	| AvatarCustomizationMShirtWintersweater2023
	| AvatarCustomizationMShirtZoruaonesie
	| AvatarCustomizationMShoes6thanniversary
	| AvatarCustomizationMShoesAcetrainerbw
	| AvatarCustomizationMShoesAcetrainersm
	| AvatarCustomizationMShoesAnimegou
	| AvatarCustomizationMShoesBackpacker
	| AvatarCustomizationMShoesBrock
	| AvatarCustomizationMShoesBwn
	| AvatarCustomizationMShoesCarbink
	| AvatarCustomizationMShoesClay
	| AvatarCustomizationMShoesCoolboots
	| AvatarCustomizationMShoesDedenneitems
	| AvatarCustomizationMShoesDefault0
	| AvatarCustomizationMShoesDefault1
	| AvatarCustomizationMShoesDefault2
	| AvatarCustomizationMShoesDefault3
	| AvatarCustomizationMShoesDefault4
	| AvatarCustomizationMShoesDefault5
	| AvatarCustomizationMShoesDefault6
	| AvatarCustomizationMShoesDelibird
	| AvatarCustomizationMShoesDp
	| AvatarCustomizationMShoesElesa
	| AvatarCustomizationMShoesEmpty
	| AvatarCustomizationMShoesFashionweek2022
	| AvatarCustomizationMShoesFisher0
	| AvatarCustomizationMShoesFrlg0
	| AvatarCustomizationMShoesFw2022
	| AvatarCustomizationMShoesGeeta
	| AvatarCustomizationMShoesGiovanni
	| AvatarCustomizationMShoesGladion
	| AvatarCustomizationMShoesGothitelleitems
	| AvatarCustomizationMShoesGreen
	| AvatarCustomizationMShoesGymleader0
	| AvatarCustomizationMShoesGymleader1
	| AvatarCustomizationMShoesGymleader2
	| AvatarCustomizationMShoesHala
	| AvatarCustomizationMShoesHgss0
	| AvatarCustomizationMShoesIngo
	| AvatarCustomizationMShoesJogger0
	| AvatarCustomizationMShoesKorrina
	| AvatarCustomizationMShoesLadiamondoutfit
	| AvatarCustomizationMShoesLana
	| AvatarCustomizationMShoesLapearloutfit
	| AvatarCustomizationMShoesLegendofarceus
	| AvatarCustomizationMShoesLoosepants
	| AvatarCustomizationMShoesLoosepants1
	| AvatarCustomizationMShoesLoosepants2
	| AvatarCustomizationMShoesLoosepants3
	| AvatarCustomizationMShoesLuvdiscpack
	| AvatarCustomizationMShoesLysandre
	| AvatarCustomizationMShoesMegalopunnyitems
	| AvatarCustomizationMShoesMelmetalshoes
	| AvatarCustomizationMShoesMewtwo
	| AvatarCustomizationMShoesNewyear2022
	| AvatarCustomizationMShoesNike2021
	| AvatarCustomizationMShoesOras
	| AvatarCustomizationMShoesPajamas20220
	| AvatarCustomizationMShoesPajamas20221
	| AvatarCustomizationMShoesPalmer
	| AvatarCustomizationMShoesPikachufan0
	| AvatarCustomizationMShoesPikachulibre
	| AvatarCustomizationMShoesProfwillowoutfit
	| AvatarCustomizationMShoesRegiicejersies
	| AvatarCustomizationMShoesRegirockjersies
	| AvatarCustomizationMShoesRegisteeljersies
	| AvatarCustomizationMShoesReuniclusitems
	| AvatarCustomizationMShoesRuinmaniac
	| AvatarCustomizationMShoesSandals
	| AvatarCustomizationMShoesSandals1
	| AvatarCustomizationMShoesSandals2
	| AvatarCustomizationMShoesSolgaleoitems
	| AvatarCustomizationMShoesSs
	| AvatarCustomizationMShoesSteven
	| AvatarCustomizationMShoesStevenfirst
	| AvatarCustomizationMShoesSvcostumescarletschool
	| AvatarCustomizationMShoesSvcostumevioletschool
	| AvatarCustomizationMShoesSvdlc1
	| AvatarCustomizationMShoesSvdlc2spring
	| AvatarCustomizationMShoesSwshdlc2costume
	| AvatarCustomizationMShoesSwshdlccostume
	| AvatarCustomizationMShoesSwshuniformdark
	| AvatarCustomizationMShoesSwshuniformdefault
	| AvatarCustomizationMShoesSwshuniformdragon
	| AvatarCustomizationMShoesSylveonitems
	| AvatarCustomizationMShoesTeamaqua
	| AvatarCustomizationMShoesTeamblanche
	| AvatarCustomizationMShoesTeamcandela
	| AvatarCustomizationMShoesTeammagma
	| AvatarCustomizationMShoesTeamrocket0
	| AvatarCustomizationMShoesTeamrocket1
	| AvatarCustomizationMShoesTeamskull
	| AvatarCustomizationMShoesTeamspark
	| AvatarCustomizationMShoesUltrareconsquad
	| AvatarCustomizationMShoesUltra0
	| AvatarCustomizationMShoesVeterantrainerxy
	| AvatarCustomizationMShoesWcs2022winnersitems
	| AvatarCustomizationMShoesWcs2023winnersitems
	| AvatarCustomizationMShoesWinterboots2023
	| AvatarCustomizationMShoesWinterboots0
	| AvatarCustomizationMShoesWinterboots1
	| AvatarCustomizationMShoesWinterboots2
	| AvatarCustomizationMShoesWinterboots3
	| AvatarCustomizationMSkin0
	| AvatarCustomizationMSkin1
	| AvatarCustomizationMSkin10
	| AvatarCustomizationMSkin11
	| AvatarCustomizationMSkin2
	| AvatarCustomizationMSkin3
	| AvatarCustomizationMSkin4
	| AvatarCustomizationMSkin5
	| AvatarCustomizationMSkin6
	| AvatarCustomizationMSkin7
	| AvatarCustomizationMSkin8
	| AvatarCustomizationMSkin9
	| AvatarCustomizationMSocksDefault0
	| AvatarCustomizationMSocksDefault1
	| AvatarCustomizationMSocksDefault2
	| AvatarCustomizationMSocksDefault3
	| AvatarCustomizationMSocksEmpty
	| AvatarCustomizationMSocksFw2022
	| AvatarCustomizationMSocksSneakersocks0
	| AvatarCustomizationMSocksSneakersocks1
	| AvatarCustomizationMSocksSollunaitems
	| AvatarCustomizationMSocksSwshuniformdefault
	| AvatarCustomizationMSocksSwshuniformdragon;

export type AvatarCustomizationTemplateID = AvatarCustomizationMasterfileEntry["templateId"];
