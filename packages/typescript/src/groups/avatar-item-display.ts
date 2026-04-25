export interface AvatarItemDisplay<
	TemplateID extends string = string,
	TData extends AvatarItemDisplayData = AvatarItemDisplayData,
> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		avatarItemDisplay: TData;
	};
}

export interface AvatarItemDisplayData {
	displayStringId?: string;
	iconAddress?: string;
}

export type AvatarItemDisplayMBackpackEggbackpack0 = AvatarItemDisplay<
	"N_DISPLAY_m_backpack_eggbackpack_0",
	{
		displayStringId: "m_backpack_eggbackpack_0_icon_display_name";
		iconAddress: "m_backpack_eggbackpack_0_icon";
	}
>;
export type AvatarItemDisplayMBackpackEggbackpack1 = AvatarItemDisplay<
	"N_DISPLAY_m_backpack_eggbackpack_1",
	{
		displayStringId: "m_backpack_eggbackpack_1_icon_display_name";
		iconAddress: "m_backpack_eggbackpack_1_icon";
	}
>;
export type AvatarItemDisplayMBackpackEggbackpack2 = AvatarItemDisplay<
	"N_DISPLAY_m_backpack_eggbackpack_2",
	{
		displayStringId: "m_backpack_eggbackpack_2_icon_display_name";
		iconAddress: "m_backpack_eggbackpack_2_icon";
	}
>;
export type AvatarItemDisplayNBackpackAlolaitemslittenbp0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_alolaitemslittenbp_0",
	{
		displayStringId: "n_backpack_alolaitemslittenbp_0_display_name";
		iconAddress: "n_backpack_alolaitemslittenbp_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackAlolaitemspoppliobp0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_alolaitemspoppliobp_0",
	{
		displayStringId: "n_backpack_alolaitemspoppliobp_0_display_name";
		iconAddress: "n_backpack_alolaitemspoppliobp_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackAlolaitemsrowletbp0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_alolaitemsrowletbp_0",
	{
		displayStringId: "n_backpack_alolaitemsrowletbp_0_display_name";
		iconAddress: "n_backpack_alolaitemsrowletbp_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackAnimegou0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_animegou_0",
	{
		displayStringId: "n_backpack_animegou_0_display_name";
		iconAddress: "n_backpack_animegou_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackBackpacker0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_backpacker_0",
	{
		displayStringId: "n_backpack_backpacker_0_display_name";
		iconAddress: "n_backpack_backpacker_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackBlackkyuremitem0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_blackkyuremitem_0",
	{
		displayStringId: "avatar_backpack_blackkyurem";
		iconAddress: "n_backpack_blackkyuremitem_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackCharjabug0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_charjabug_0",
	{
		displayStringId: "avatar_bag_charjabug";
		iconAddress: "n_backpack_charjabug_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackClemont0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_clemont_0",
	{
		displayStringId: "avatar_n_backpack_clemont";
		iconAddress: "n_backpack_clemont_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackCombeebackpack0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_combeebackpack_0",
	{
		displayStringId: "n_backpack_combeebackpack_0_display_name";
		iconAddress: "n_backpack_combeebackpack_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackCombeebackpack1 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_combeebackpack_1",
	{
		displayStringId: "n_backpack_combeebackpack_1_display_name";
		iconAddress: "n_backpack_combeebackpack_1_icon";
	}
>;
export type AvatarItemDisplayNBackpackCute0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_cute_0",
	{
		displayStringId: "n_backpack_cute_0_display_name";
		iconAddress: "n_backpack_cute_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackDedenneitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_dedenneitems_0",
	{
		displayStringId: "n_backpack_dedenneitems_0_display_name";
		iconAddress: "n_backpack_dedenneitems_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackDefaultNew0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_default-new_0",
	{
		displayStringId: "n_backpack_default-new_0_display_name";
		iconAddress: "n_backpack_defaultnew_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackDefaultA0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_default_a_0",
	{
		displayStringId: "n_backpack_default_a_0_display_name";
		iconAddress: "n_backpack_default_a_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackDefaultA1 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_default_a_1",
	{
		displayStringId: "n_backpack_default_a_0_display_name";
		iconAddress: "n_backpack_default_a_1_icon";
	}
>;
export type AvatarItemDisplayNBackpackDefaultA2 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_default_a_2",
	{
		displayStringId: "n_backpack_default_a_0_display_name";
		iconAddress: "n_backpack_default_a_2_icon";
	}
>;
export type AvatarItemDisplayNBackpackDefaultA3 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_default_a_3",
	{
		displayStringId: "n_backpack_default_a_0_display_name";
		iconAddress: "n_backpack_default_a_3_icon";
	}
>;
export type AvatarItemDisplayNBackpackDefaultB0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_default_b_0",
	{
		displayStringId: "n_backpack_default_b_0_display_name";
		iconAddress: "n_backpack_default_b_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackDefaultB1 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_default_b_1",
	{
		displayStringId: "n_backpack_default_b_0_display_name";
		iconAddress: "n_backpack_default_b_1_icon";
	}
>;
export type AvatarItemDisplayNBackpackDefaultB2 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_default_b_2",
	{
		displayStringId: "n_backpack_default_b_0_display_name";
		iconAddress: "n_backpack_default_b_2_icon";
	}
>;
export type AvatarItemDisplayNBackpackDefaultB3 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_default_b_3",
	{
		displayStringId: "n_backpack_default_b_0_display_name";
		iconAddress: "n_backpack_default_b_3_icon";
	}
>;
export type AvatarItemDisplayNBackpackDefaultB4 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_default_b_4",
	{
		displayStringId: "n_backpack_default_b_0_display_name";
		iconAddress: "n_backpack_default_b_4_icon";
	}
>;
export type AvatarItemDisplayNBackpackDefaultB5 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_default_b_5",
	{
		displayStringId: "n_backpack_default_b_0_display_name";
		iconAddress: "n_backpack_default_b_5_icon";
	}
>;
export type AvatarItemDisplayNBackpackDp0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_dp_0",
	{
		displayStringId: "n_backpack_dp_0_display_name";
		iconAddress: "n_backpack_dp_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackEggIncubator0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_egg-incubator_0",
	{
		displayStringId: "avatar_backpack_eggincubator";
		iconAddress: "n_backpack_egg-incubator_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackEggbackpack0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_eggbackpack_0",
	{
		displayStringId: "n_backpack_eggbackpack_0_display_name";
		iconAddress: "n_backpack_eggbackpack_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackEggbackpack1 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_eggbackpack_1",
	{
		displayStringId: "n_backpack_eggbackpack_1_display_name";
		iconAddress: "n_backpack_eggbackpack_1_icon";
	}
>;
export type AvatarItemDisplayNBackpackEggbackpack2 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_eggbackpack_2",
	{
		displayStringId: "n_backpack_eggbackpack_2_display_name";
		iconAddress: "n_backpack_eggbackpack_2_icon";
	}
>;
export type AvatarItemDisplayNBackpackFrlgA0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_frlg_a_0",
	{
		displayStringId: "n_backpack_frlg_a_0_display_name";
		iconAddress: "n_backpack_frlg_a_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackFrlgB0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_frlg_b_0",
	{
		displayStringId: "n_backpack_frlg_b_0_display_name";
		iconAddress: "n_backpack_frlg_b_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackGenesecteventitem0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_genesecteventitem_0",
	{
		displayStringId: "n_backpack_genesecteventitem_0_display_name";
		iconAddress: "n_backpack_genesecteventitem_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackGengar0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_gengar_0",
	{
		displayStringId: "n_backpack_gengar_0_display_name";
		iconAddress: "n_backpack_gengar_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackGiratinaitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_giratinaitems_0",
	{
		displayStringId: "n_backpack_giratinaitems_0_display_name";
		iconAddress: "n_backpack_giratinaitems_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackGoruckgengar0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_goruckgengar_0",
	{
		displayStringId: "avatar_backpack_goruckgengar";
		iconAddress: "n_backpack_goruckgengar_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackGoruckpikachu0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_goruckpikachu_0",
	{
		displayStringId: "avatar_backpack_goruckpikachu";
		iconAddress: "n_backpack_goruckpikachu_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackGoruckwobbuffet0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_goruckwobbuffet_0",
	{
		displayStringId: "avatar_backpack_goruckwobbuffet";
		iconAddress: "n_backpack_goruckwobbuffet_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackGreenpikavee0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_greenpikavee_0",
	{
		displayStringId: "avatar_backpack_s22blue";
		iconAddress: "n_backpack_greenpikavee_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackGuccibackpack0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_guccibackpack_0",
	{
		displayStringId: "n_backpack_guccibackpack_0_display_name";
		iconAddress: "n_backpack_guccibackpack_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackGuitarcasebackpack0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_guitarcasebackpack_0",
	{
		displayStringId: "n_backpack_guitarcasebackpack_0_display_name";
		iconAddress: "n_backpack_guitarcasebackpack_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackHgssA0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_hgss_a_0",
	{
		displayStringId: "n_backpack_hgss_a_0_display_name";
		iconAddress: "n_backpack_hgss_a_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackHgssB0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_hgss_b_0",
	{
		displayStringId: "n_backpack_hgss_b_0_display_name";
		iconAddress: "n_backpack_hgss_b_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackHououbackpack0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_hououbackpack_0",
	{
		displayStringId: "n_backpack_hououbackpack_0_display_name";
		iconAddress: "n_backpack_hououbackpack_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackKakureonpouch0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_kakureonpouch_0",
	{
		displayStringId: "n_backpack_kakureonpouch_0_display_name";
		iconAddress: "n_backpack_kakureonpouch_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackKomala0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_komala_0",
	{
		displayStringId: "AVATAR_KomalaBackpack";
		iconAddress: "n_backpack_komala_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackLongchampbp0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_longchampbp_0",
	{
		displayStringId: "n_backpack_longchampbp_0_display_name";
		iconAddress: "n_backpack_longchampbp_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackLunalaitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_lunalaitems_0",
	{
		displayStringId: "n_backpack_lunalaitems_0_display_name";
		iconAddress: "n_backpack_lunalaitems_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackLunarnewyr0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_lunarnewyr_0",
	{
		displayStringId: "n_backpack_lunarnewyr_0_display_name";
		iconAddress: "n_backpack_lunarnewyr_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackMimikyubp0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_mimikyubp_0",
	{
		displayStringId: "n_backpack_mimikyubp_0_display_name";
		iconAddress: "n_backpack_mimikyubp_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackMovie20200 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_movie2020_0",
	{
		displayStringId: "n_backpack_movie2020_0_display_name";
		iconAddress: "n_backpack_movie2020_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackNaganadelwings0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_naganadelwings_0",
	{
		displayStringId: "N_Naganadel_Backpack";
		iconAddress: "n_backpack_naganadelaitems_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackNike20210 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_nike2021_0",
	{
		displayStringId: "n_backpack_nike2021_0_display_name";
		iconAddress: "n_backpack_nike2021_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackPamobackpack0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_pamobackpack_0",
	{
		displayStringId: "n_backpack_pamobackpack_0_display_name";
		iconAddress: "n_backpack_pamobackpack_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackPinap0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_pinap_0",
	{
		displayStringId: "avatar_bag_pinapberry";
		iconAddress: "n_backpack_pinap_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackPkmnhoodie0010 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_pkmnhoodie001_0",
	{
		displayStringId: "n_backpack_pkmnhoodie001_0_display_name";
		iconAddress: "n_backpack_pkmnhoodie001_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackPkmnhoodie0040 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_pkmnhoodie004_0",
	{
		displayStringId: "n_backpack_pkmnhoodie004_0_display_name";
		iconAddress: "n_backpack_pkmnhoodie004_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackPkmnhoodie0070 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_pkmnhoodie007_0",
	{
		displayStringId: "n_backpack_pkmnhoodie007_0_display_name";
		iconAddress: "n_backpack_pkmnhoodie007_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackRuinmaniac0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_ruinmaniac_0",
	{
		displayStringId: "n_backpack_ruinmaniac_0_display_name";
		iconAddress: "n_backpack_ruinmaniac_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackSnapcamera0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_snapcamera_0",
	{
		displayStringId: "n_backpack_snapcamera_0_display_name";
		iconAddress: "n_backpack_snapcamera_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackSsA0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_ss_a_0",
	{
		displayStringId: "n_backpack_ss_a_0_display_name";
		iconAddress: "n_backpack_ss_a_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackSsB0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_ss_b_0",
	{
		displayStringId: "n_backpack_ss_b_0_display_name";
		iconAddress: "n_backpack_ss_b_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackSvcostumescarletschool0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_svcostumescarletschool_0",
	{
		displayStringId: "n_backpack_svcostumescarletschool_0_display_name";
		iconAddress: "n_backpack_svcostumescarletschool_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackSvcostumevioletschool0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_svcostumevioletschool_0",
	{
		displayStringId: "n_backpack_svcostumevioletschool_0_display_name";
		iconAddress: "n_backpack_svcostumevioletschool_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackSvdlc10 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_svdlc1_0",
	{
		displayStringId: "n_backpack_svdlc1_0_display_name";
		iconAddress: "n_backpack_svdlc1_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackSvdlc2spring0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_svdlc2spring_0",
	{
		displayStringId: "n_backpack_svdlc2spring_0_display_name";
		iconAddress: "n_backpack_svdlc2spring_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackSwshdlc2costumeA0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_swshdlc2costume_a_0",
	{
		displayStringId: "n_backpack_swshdlc2costume_a_0_display_name";
		iconAddress: "n_backpack_swshdlc2costume_a_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackSwshdlc2costumeB0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_swshdlc2costume_b_0",
	{
		displayStringId: "n_backpack_swshdlc2costume_b_0_display_name";
		iconAddress: "n_backpack_swshdlc2costume_b_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackSwshdlccostumeA0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_swshdlccostume_a_0",
	{
		displayStringId: "n_backpack_swshdlccostume_a_0_display_name";
		iconAddress: "n_backpack_swshdlccostume_a_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackSwshdlccostumeB0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_swshdlccostume_b_0",
	{
		displayStringId: "n_backpack_swshdlccostume_b_0_display_name";
		iconAddress: "n_backpack_swshdlccostume_b_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackTatsugiribackpackCurly0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_tatsugiribackpack-curly_0",
	{
		displayStringId: "avatar_backpack_tatsugiricurly";
		iconAddress: "n_backpack_tatsugiribackpack-curly_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackTatsugiribackpackDroopy0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_tatsugiribackpack-droopy_0",
	{
		displayStringId: "avatar_backpack_tatsugiridroopy";
		iconAddress: "n_backpack_tatsugiribackpack-droopy_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackTatsugiribackpackStretchy0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_tatsugiribackpack-stretchy_0",
	{
		displayStringId: "avatar_backpack_tatsugiristretchy";
		iconAddress: "n_backpack_tatsugiribackpack-stretchy_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackTogepibackpack0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_togepibackpack_0",
	{
		displayStringId: "n_backpack_togepibackpack_0_display_name";
		iconAddress: "n_backpack_togepibackpack_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackUltraA0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_ultra_a_0",
	{
		displayStringId: "n_backpack_ultra_a_0_display_name";
		iconAddress: "n_backpack_ultra_a_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackUltraB0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_ultra_b_0",
	{
		displayStringId: "n_backpack_ultra_b_0_display_name";
		iconAddress: "n_backpack_ultra_b_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackUnequip0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_unequip_0",
	{
		displayStringId: "n_backpack_unequip_0_display_name";
		iconAddress: "n_backpack_empty_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackVerizon20210 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_verizon2021_0",
	{
		displayStringId: "n_backpack_verizon2021_0_display_name";
		iconAddress: "n_backpack_verizon2021_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackWhitekyuremitem0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_whitekyuremitem_0",
	{
		displayStringId: "avatar_backpack_whitekyurem";
		iconAddress: "n_backpack_whitekyuremitem_0_icon";
	}
>;
export type AvatarItemDisplayNBackpackZubatbp0 = AvatarItemDisplay<
	"N_DISPLAY_n_backpack_zubatbp_0",
	{
		displayStringId: "n_backpack_zubatbp_0_display_name";
		iconAddress: "n_backpack_zubatbp_0_icon";
	}
>;
export type AvatarItemDisplayNBeltAcetrainerbw0 = AvatarItemDisplay<
	"N_DISPLAY_n_belt_acetrainerbw_0",
	{
		displayStringId: "n_belt_acetrainerbw_0_display_name";
		iconAddress: "n_belt_acetrainerbw_0_icon";
	}
>;
export type AvatarItemDisplayNBeltDefaultA0 = AvatarItemDisplay<
	"N_DISPLAY_n_belt_default_a_0",
	{
		displayStringId: "n_belt_default_a_0_display_name";
		iconAddress: "n_belt_default_a_0_icon";
	}
>;
export type AvatarItemDisplayNBeltDefaultA1 = AvatarItemDisplay<
	"N_DISPLAY_n_belt_default_a_1",
	{
		displayStringId: "n_belt_default_a_0_display_name";
		iconAddress: "n_belt_default_a_1_icon";
	}
>;
export type AvatarItemDisplayNBeltDefaultA2 = AvatarItemDisplay<
	"N_DISPLAY_n_belt_default_a_2",
	{
		displayStringId: "n_belt_default_a_0_display_name";
		iconAddress: "n_belt_default_a_2_icon";
	}
>;
export type AvatarItemDisplayNBeltDefaultA3 = AvatarItemDisplay<
	"N_DISPLAY_n_belt_default_a_3",
	{
		displayStringId: "n_belt_default_a_0_display_name";
		iconAddress: "n_belt_default_a_3_icon";
	}
>;
export type AvatarItemDisplayNBeltDefaultA4 = AvatarItemDisplay<
	"N_DISPLAY_n_belt_default_a_4",
	{
		displayStringId: "n_belt_default_a_0_display_name";
		iconAddress: "n_belt_default_a_4_icon";
	}
>;
export type AvatarItemDisplayNBeltDefaultA5 = AvatarItemDisplay<
	"N_DISPLAY_n_belt_default_a_5",
	{
		displayStringId: "n_belt_default_a_0_display_name";
		iconAddress: "n_belt_default_a_5_icon";
	}
>;
export type AvatarItemDisplayNBeltDefaultA6 = AvatarItemDisplay<
	"N_DISPLAY_n_belt_default_a_6",
	{
		displayStringId: "n_belt_default_a_0_display_name";
		iconAddress: "n_belt_default_a_6_icon";
	}
>;
export type AvatarItemDisplayNBeltDefaultA7 = AvatarItemDisplay<
	"N_DISPLAY_n_belt_default_a_7",
	{
		displayStringId: "n_belt_default_a_0_display_name";
		iconAddress: "n_belt_default_a_7_icon";
	}
>;
export type AvatarItemDisplayNBeltDefaultA8 = AvatarItemDisplay<
	"N_DISPLAY_n_belt_default_a_8",
	{
		displayStringId: "n_belt_default_a_0_display_name";
		iconAddress: "n_belt_default_a_8_icon";
	}
>;
export type AvatarItemDisplayNBeltSimple0 = AvatarItemDisplay<
	"N_DISPLAY_n_belt_simple_0",
	{
		displayStringId: "n_belt_simple_3_display_name";
		iconAddress: "n_belt_simple_0_icon";
	}
>;
export type AvatarItemDisplayNBeltSimple1 = AvatarItemDisplay<
	"N_DISPLAY_n_belt_simple_1",
	{
		displayStringId: "n_belt_simple_3_display_name";
		iconAddress: "n_belt_simple_1_icon";
	}
>;
export type AvatarItemDisplayNBeltSimple2 = AvatarItemDisplay<
	"N_DISPLAY_n_belt_simple_2",
	{
		displayStringId: "n_belt_simple_3_display_name";
		iconAddress: "n_belt_simple_2_icon";
	}
>;
export type AvatarItemDisplayNBeltSimple3 = AvatarItemDisplay<
	"N_DISPLAY_n_belt_simple_3",
	{
		displayStringId: "n_belt_simple_3_display_name";
		iconAddress: "n_belt_simple_3_icon";
	}
>;
export type AvatarItemDisplayNBeltTeamrocket0 = AvatarItemDisplay<
	"N_DISPLAY_n_belt_teamrocket_0",
	{
		displayStringId: "n_belt_teamrocket_0_display_name";
		iconAddress: "n_belt_teamrocket_0_icon";
	}
>;
export type AvatarItemDisplayNBeltTeamrocket1 = AvatarItemDisplay<
	"N_DISPLAY_n_belt_teamrocket_1",
	{
		displayStringId: "n_belt_teamrocket_1_display_name";
		iconAddress: "n_belt_teamrocket_1_icon";
	}
>;
export type AvatarItemDisplayNBeltUnequip0 = AvatarItemDisplay<
	"N_DISPLAY_n_belt_unequip_0",
	{
		displayStringId: "n_belt_unequip_0_display_name";
		iconAddress: "n_belt_empty_0_icon";
	}
>;
export type AvatarItemDisplayNFace3dmask0 = AvatarItemDisplay<
	"N_DISPLAY_n_face_3dmask_0",
	{
		displayStringId: "n_face_3dmask_0_display_name";
		iconAddress: "n_face_3dmask_0_icon";
	}
>;
export type AvatarItemDisplayNFace3dmask1 = AvatarItemDisplay<
	"N_DISPLAY_n_face_3dmask_1",
	{
		displayStringId: "n_face_3dmask_1_display_name";
		iconAddress: "n_face_3dmask_1_icon";
	}
>;
export type AvatarItemDisplayNFace3dmask2 = AvatarItemDisplay<
	"N_DISPLAY_n_face_3dmask_2",
	{
		displayStringId: "n_face_3dmask_2_display_name";
		iconAddress: "n_face_3dmask_2_icon";
	}
>;
export type AvatarItemDisplayNFaceAllister0 = AvatarItemDisplay<
	"N_DISPLAY_n_face_allister_0",
	{
		displayStringId: "avatar_mask_gblallister";
		iconAddress: "n_face_allister_0_icon";
	}
>;
export type AvatarItemDisplayNFaceBanettemask0 = AvatarItemDisplay<
	"N_DISPLAY_n_face_banettemask_0",
	{
		displayStringId: "n_face_banettemask_0_display_name";
		iconAddress: "n_face_banettemask_0_icon";
	}
>;
export type AvatarItemDisplayNFaceDayofthedead0 = AvatarItemDisplay<
	"N_DISPLAY_n_face_dayofthedead_0",
	{
		displayStringId: "n_face_dayofthedead_0_display_name";
		iconAddress: "n_face_dayofthedead_0_icon";
	}
>;
export type AvatarItemDisplayNFaceDefaultmask0 = AvatarItemDisplay<
	"N_DISPLAY_n_face_defaultmask_0",
	{
		displayStringId: "n_face_defaultmask_0_display_name";
		iconAddress: "n_face_defaultmask_0_icon";
	}
>;
export type AvatarItemDisplayNFaceFacestickerghostpika0 = AvatarItemDisplay<
	"N_DISPLAY_n_face_facestickerghostpika_0",
	{
		displayStringId: "n_face_facestickerghostpika_0_display_name";
		iconAddress: "n_face_facestickerghostpika_0_icon";
	}
>;
export type AvatarItemDisplayNFaceFacestickerpikachu0 = AvatarItemDisplay<
	"N_DISPLAY_n_face_facestickerpikachu_0",
	{
		displayStringId: "n_face_facestickerpikachu_0_display_name";
		iconAddress: "n_face_facestickerpikachu_0_icon";
	}
>;
export type AvatarItemDisplayNFaceFacestickerpokeball0 = AvatarItemDisplay<
	"N_DISPLAY_n_face_facestickerpokeball_0",
	{
		displayStringId: "n_face_facestickerpokeball_0_display_name";
		iconAddress: "n_face_facestickerpokeball_0_icon";
	}
>;
export type AvatarItemDisplayNFaceFestofcolors0 = AvatarItemDisplay<
	"N_DISPLAY_n_face_festofcolors_0",
	{
		displayStringId: "n_face_festofcolors_0_display_name";
		iconAddress: "n_face_festofcolors_0_icon";
	}
>;
export type AvatarItemDisplayNFaceFestofcolors1 = AvatarItemDisplay<
	"N_DISPLAY_n_face_festofcolors_1",
	{
		displayStringId: "n_face_festofcolors_1_display_name";
		iconAddress: "n_face_festofcolors_1_icon";
	}
>;
export type AvatarItemDisplayNFaceFestofcolors2 = AvatarItemDisplay<
	"N_DISPLAY_n_face_festofcolors_2",
	{
		displayStringId: "n_face_festofcolors_2_display_name";
		iconAddress: "n_face_festofcolors_2_icon";
	}
>;
export type AvatarItemDisplayNFaceGracidea0 = AvatarItemDisplay<
	"N_DISPLAY_n_face_gracidea_0",
	{
		displayStringId: "n_face_gracidea_0_display_name";
		iconAddress: "n_face_gracidea_0_icon";
	}
>;
export type AvatarItemDisplayNFaceHoliday2022santacostumes0 = AvatarItemDisplay<
	"N_DISPLAY_n_face_holiday2022santacostumes_0",
	{
		displayStringId: "n_face_holiday2022santacostumes_0_display_name";
		iconAddress: "n_face_holiday2022santacostumes_0_icon";
	}
>;
export type AvatarItemDisplayNFacePikachumask0 = AvatarItemDisplay<
	"N_DISPLAY_n_face_pikachumask_0",
	{
		displayStringId: "n_face_pikachumask_0_display_name";
		iconAddress: "n_face_pikachumask_0_icon";
	}
>;
export type AvatarItemDisplayNFaceSableyemask0 = AvatarItemDisplay<
	"N_DISPLAY_n_face_sableyemask_0",
	{
		displayStringId: "n_face_sableyemask_0_display_name";
		iconAddress: "n_face_sableyemask_0_icon";
	}
>;
export type AvatarItemDisplayNFaceTeamskull0 = AvatarItemDisplay<
	"N_DISPLAY_n_face_teamskull_0",
	{
		displayStringId: "n_face_teamskull_0_display_name";
		iconAddress: "n_face_teamskull_0_icon";
	}
>;
export type AvatarItemDisplayNFaceToxelmask0 = AvatarItemDisplay<
	"N_DISPLAY_n_face_toxelmask_0",
	{
		displayStringId: "avatar_mask_toxelfacemask";
		iconAddress: "n_face_toxelmask_0_icon";
	}
>;
export type AvatarItemDisplayNFaceUnequip0 = AvatarItemDisplay<
	"N_DISPLAY_n_face_unequip_0",
	{
		displayStringId: "n_face_unequip_0_display_name";
		iconAddress: "n_face_empty_0_icon";
	}
>;
export type AvatarItemDisplayNFaceVerizon2020mask0 = AvatarItemDisplay<
	"N_DISPLAY_n_face_verizon2020mask_0",
	{
		displayStringId: "n_face_verizon2020mask_0_display_name";
		iconAddress: "n_face_verizon2020mask_0_icon";
	}
>;
export type AvatarItemDisplayNGlasses3d0 = AvatarItemDisplay<
	"N_DISPLAY_n_glasses_3d_0",
	{
		displayStringId: "n_glasses_3d_0_display_name";
		iconAddress: "n_glasses_3d_0_icon";
	}
>;
export type AvatarItemDisplayNGlassesClemont0 = AvatarItemDisplay<
	"N_DISPLAY_n_glasses_clemont_0",
	{
		displayStringId: "avatar_n_glasses_clemont";
		iconAddress: "n_glasses_clemont_0_icon";
	}
>;
export type AvatarItemDisplayNGlassesCutieflysleepmask0 = AvatarItemDisplay<
	"N_DISPLAY_n_glasses_cutieflysleepmask_0",
	{
		displayStringId: "n_glasses_cutieflysleepmask_0_display_name";
		iconAddress: "n_glasses_cutieflysleepmask_0_icon";
	}
>;
export type AvatarItemDisplayNGlassesDittoeyewear0 = AvatarItemDisplay<
	"N_DISPLAY_n_glasses_dittoeyewear_0",
	{
		displayStringId: "avatar_glasses_ditto";
		iconAddress: "n_glasses_dittoeyewear_0_icon";
	}
>;
export type AvatarItemDisplayNGlassesDivingsuit0 = AvatarItemDisplay<
	"N_DISPLAY_n_glasses_divingsuit_0",
	{
		displayStringId: "n_glasses_divingsuit_0_display_name";
		iconAddress: "n_glasses_divingsuit_0_icon";
	}
>;
export type AvatarItemDisplayNGlassesDrpikachu0 = AvatarItemDisplay<
	"N_DISPLAY_n_glasses_drpikachu_0",
	{
		displayStringId: "n__glasses_drpikachu_0_display_name";
		iconAddress: "n_glasses_drpikachu_0_icon";
	}
>;
export type AvatarItemDisplayNGlassesFrillishglasses0 = AvatarItemDisplay<
	"N_DISPLAY_n_glasses_frillishglasses_0",
	{
		displayStringId: "n_glasses_frillishglasses_0_display_name";
		iconAddress: "n_glasses_frillishglasses_0_icon";
	}
>;
export type AvatarItemDisplayNGlassesFw20220 = AvatarItemDisplay<
	"N_DISPLAY_n_glasses_fw2022_0",
	{
		displayStringId: "n_glasses_fw2022_0_display_name";
		iconAddress: "n_glasses_fw2022_0_icon";
	}
>;
export type AvatarItemDisplayNGlassesGimmighoulitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_glasses_gimmighoulitems_0",
	{
		displayStringId: "n_glasses_gimmighoulitems_0_display_name";
		iconAddress: "n_glasses_gimmighoulitems_0_icon";
	}
>;
export type AvatarItemDisplayNGlassesGoteamrocketarlo0 = AvatarItemDisplay<
	"N_DISPLAY_n_glasses_goteamrocketarlo_0",
	{
		displayStringId: "n_glasses_goteamrocketarlo_0_display_name";
		iconAddress: "n_glasses_goteamrocketarlo_0_icon";
	}
>;
export type AvatarItemDisplayNGlassesGrandoakglasses0 = AvatarItemDisplay<
	"N_DISPLAY_n_glasses_grandoakglasses_0",
	{
		displayStringId: "n_glasses_grandoakglasses_0_display_name";
		iconAddress: "n_glasses_grandoakglasses_0_icon";
	}
>;
export type AvatarItemDisplayNGlassesJogger0 = AvatarItemDisplay<
	"N_DISPLAY_n_glasses_jogger_0",
	{
		displayStringId: "n_glasses_jogger_0_display_name";
		iconAddress: "n_glasses_jogger_0_icon";
	}
>;
export type AvatarItemDisplayNGlassesLugiaglasses0 = AvatarItemDisplay<
	"N_DISPLAY_n_glasses_lugiaglasses_0",
	{
		displayStringId: "n_glasses_lugiaglasses_0_display_name";
		iconAddress: "n_glasses_lugiaglasses_0_icon";
	}
>;
export type AvatarItemDisplayNGlassesLv40glasses0 = AvatarItemDisplay<
	"N_DISPLAY_n_glasses_lv40glasses_0",
	{
		displayStringId: "n_glasses_lv40glasses_0_display_name";
		iconAddress: "n_glasses_lv40glasses_0_icon";
	}
>;
export type AvatarItemDisplayNGlassesLvl73Visorspecs0 = AvatarItemDisplay<
	"N_DISPLAY_n_glasses_lvl73-visorspecs_0",
	{
		displayStringId: "avatar_n_glasses_lvl73-visorspecs_0";
		iconAddress: "n_glasses_lvl73-visorspecs_0_icon";
	}
>;
export type AvatarItemDisplayNGlassesMask0 = AvatarItemDisplay<
	"N_DISPLAY_n_glasses_mask_0",
	{
		displayStringId: "n_glasses_mask_1_display_name";
		iconAddress: "n_glasses_mask_0_icon";
	}
>;
export type AvatarItemDisplayNGlassesMask1 = AvatarItemDisplay<
	"N_DISPLAY_n_glasses_mask_1",
	{
		displayStringId: "n_glasses_mask_1_display_name";
		iconAddress: "n_glasses_mask_1_icon";
	}
>;
export type AvatarItemDisplayNGlassesNecrozmaitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_glasses_necrozmaitems_0",
	{
		displayStringId: "AVATAR_NecrozmaGlasses";
		iconAddress: "n_glasses_necrozmaitems_0_icon";
	}
>;
export type AvatarItemDisplayNGlassesNewyear20220 = AvatarItemDisplay<
	"N_DISPLAY_n_glasses_newyear2022_0",
	{
		displayStringId: "n_glasses_newyear2022_0_display_name";
		iconAddress: "n_glasses_newyearglasses2022_0_icon";
	}
>;
export type AvatarItemDisplayNGlassesNewyearglasses20200 = AvatarItemDisplay<
	"N_DISPLAY_n_glasses_newyearglasses2020_0",
	{
		displayStringId: "n_glasses_newyearglasses2020_0_display_name";
		iconAddress: "n_glasses_newyearglasses2020_0_icon";
	}
>;
export type AvatarItemDisplayNGlassesNewyearglasses20210 = AvatarItemDisplay<
	"N_DISPLAY_n_glasses_newyearglasses2021_0",
	{
		displayStringId: "n_glasses_newyearglasses2021_0_display_name";
		iconAddress: "n_glasses_newyearglasses2021_0_icon";
	}
>;
export type AvatarItemDisplayNGlassesObstagoonitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_glasses_obstagoonitems_0",
	{
		displayStringId: "n_glasses_obstagoonitems_0_display_name";
		iconAddress: "n_glasses_obstagoonitems_0_icon";
	}
>;
export type AvatarItemDisplayNGlassesRoundsunglasses0 = AvatarItemDisplay<
	"N_DISPLAY_n_glasses_roundsunglasses_0",
	{
		displayStringId: "n_glasses_roundsunglasses_0_display_name";
		iconAddress: "n_glasses_roundsunglasses_0_icon";
	}
>;
export type AvatarItemDisplayNGlassesTeardrop0 = AvatarItemDisplay<
	"N_DISPLAY_n_glasses_teardrop_0",
	{
		displayStringId: "n_glasses_teardrop_0_display_name";
		iconAddress: "n_glasses_teardrop_0_icon";
	}
>;
export type AvatarItemDisplayNGlassesThick0 = AvatarItemDisplay<
	"N_DISPLAY_n_glasses_thick_0",
	{
		displayStringId: "n_glasses_thick_4_display_name";
		iconAddress: "n_glasses_thick_0_icon";
	}
>;
export type AvatarItemDisplayNGlassesThick1 = AvatarItemDisplay<
	"N_DISPLAY_n_glasses_thick_1",
	{
		displayStringId: "n_glasses_thick_4_display_name";
		iconAddress: "n_glasses_thick_1_icon";
	}
>;
export type AvatarItemDisplayNGlassesThick2 = AvatarItemDisplay<
	"N_DISPLAY_n_glasses_thick_2",
	{
		displayStringId: "n_glasses_thick_4_display_name";
		iconAddress: "n_glasses_thick_2_icon";
	}
>;
export type AvatarItemDisplayNGlassesThick3 = AvatarItemDisplay<
	"N_DISPLAY_n_glasses_thick_3",
	{
		displayStringId: "n_glasses_thick_4_display_name";
		iconAddress: "n_glasses_thick_3_icon";
	}
>;
export type AvatarItemDisplayNGlassesThick4 = AvatarItemDisplay<
	"N_DISPLAY_n_glasses_thick_4",
	{
		displayStringId: "n_glasses_thick_4_display_name";
		iconAddress: "n_glasses_thick_4_icon";
	}
>;
export type AvatarItemDisplayNGlassesUnequip0 = AvatarItemDisplay<
	"N_DISPLAY_n_glasses_unequip_0",
	{
		displayStringId: "n_glasses_unequip_0_display_name";
		iconAddress: "n_glasses_empty_0_icon";
	}
>;
export type AvatarItemDisplayNGlassesWcs2024winnersitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_glasses_wcs2024winnersitems_0",
	{
		displayStringId: "avatar_glasses_wcs2024champion";
		iconAddress: "n_glasses_wcs2024winnersitems_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesAcetrainersm0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_acetrainersm_0",
	{
		displayStringId: "n_gloves_acetrainersm_0_display_name";
		iconAddress: "n_gloves_acetrainersm_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesAllister0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_allister_0",
	{
		displayStringId: "avatar_gloves_gblallister";
		iconAddress: "n_gloves_allister_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesBattlegirl0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_battlegirl_0",
	{
		displayStringId: "n_gloves_battlegirl_0_display_name";
		iconAddress: "n_gloves_battlegirl_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesBea0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_bea_0",
	{
		displayStringId: "n_gloves_bea_0_display_name";
		iconAddress: "n_gloves_bea_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesBwn0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_bwn_0",
	{
		displayStringId: "n_gloves_bwn_0_display_name";
		iconAddress: "n_gloves_bwn_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesDefaultNew0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_default-new_0",
	{
		displayStringId: "n_gloves_default-new_0_display_name";
		iconAddress: "n_gloves_defaultnew_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesDefaultA0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_default_a_0",
	{
		displayStringId: "n_gloves_default_a_0_display_name";
		iconAddress: "n_gloves_default_a_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesDefaultA1 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_default_a_1",
	{
		displayStringId: "n_gloves_default_a_0_display_name";
		iconAddress: "n_gloves_default_a_1_icon";
	}
>;
export type AvatarItemDisplayNGlovesDefaultA2 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_default_a_2",
	{
		displayStringId: "n_gloves_default_a_0_display_name";
		iconAddress: "n_gloves_default_a_2_icon";
	}
>;
export type AvatarItemDisplayNGlovesDefaultA3 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_default_a_3",
	{
		displayStringId: "n_gloves_default_a_0_display_name";
		iconAddress: "n_gloves_default_a_3_icon";
	}
>;
export type AvatarItemDisplayNGlovesDefaultB0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_default_b_0",
	{
		displayStringId: "n_gloves_default_b_0_display_name";
		iconAddress: "n_gloves_default_b_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesDefaultB1 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_default_b_1",
	{
		displayStringId: "n_gloves_default_b_0_display_name";
		iconAddress: "n_gloves_default_b_1_icon";
	}
>;
export type AvatarItemDisplayNGlovesDefaultB2 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_default_b_2",
	{
		displayStringId: "n_gloves_default_b_0_display_name";
		iconAddress: "n_gloves_default_b_2_icon";
	}
>;
export type AvatarItemDisplayNGlovesDefaultB3 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_default_b_3",
	{
		displayStringId: "n_gloves_default_b_0_display_name";
		iconAddress: "n_gloves_default_b_3_icon";
	}
>;
export type AvatarItemDisplayNGlovesDelibird0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_delibird_0",
	{
		displayStringId: "n_gloves_delibird_0_display_name";
		iconAddress: "n_gloves_delibird_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesDynamaxswsh0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_dynamaxswsh_0",
	{
		displayStringId: "avatar_gloves_dynamaxbandwhite";
		iconAddress: "n_gloves_dynamaxswsh_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesFrlgA0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_frlg_a_0",
	{
		displayStringId: "n_gloves_frlg_a_0_display_name";
		iconAddress: "n_gloves_frlg_a_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesFrlgB0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_frlg_b_0",
	{
		displayStringId: "n_gloves_frlg_b_0_display_name";
		iconAddress: "n_gloves_frlg_b_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesGeeta0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_geeta_0",
	{
		displayStringId: "n_gloves_geeta_0_display_name";
		iconAddress: "n_gloves_geeta_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesGiovanni0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_giovanni_0",
	{
		displayStringId: "n_gloves_giovanni_0_display_name";
		iconAddress: "n_gloves_giovanni_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesGuzma0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_guzma_0",
	{
		displayStringId: "n_gloves_guzma_0_display_name";
		iconAddress: "n_gloves_guzma_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesGymleaderA0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_gymleader_a_0",
	{
		displayStringId: "n_gloves_gymleader_a_0_display_name";
		iconAddress: "n_gloves_gymleader_a_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesGymleaderB0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_gymleader_b_0",
	{
		displayStringId: "n_gloves_gymleader_b_0_display_name";
		iconAddress: "n_gloves_gymleader_b_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesHoopabangle0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_hoopabangle_0",
	{
		displayStringId: "n_gloves_hoopabangle_a_0_display_name";
		iconAddress: "n_gloves_hoopabangle_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesJogger0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_jogger_0",
	{
		displayStringId: "n_gloves_jogger_0_display_name";
		iconAddress: "n_gloves_jogger_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesKorrina0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_korrina_0",
	{
		displayStringId: "n_gloves_korrina_0_display_name";
		iconAddress: "n_gloves_korrina_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesLysandre0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_lysandre_0",
	{
		displayStringId: "n_gloves_lysandre_0_display_name";
		iconAddress: "n_gloves_lysandre_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesMegabangle0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_megabangle_0",
	{
		displayStringId: "n_gloves_megabangle_0_display_name";
		iconAddress: "n_gloves_megabangle_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesMegabangle1 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_megabangle_1",
	{
		displayStringId: "n_gloves_megabangle_1_display_name";
		iconAddress: "n_gloves_megabangle_1_icon";
	}
>;
export type AvatarItemDisplayNGlovesMegabangle2 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_megabangle_2",
	{
		displayStringId: "n_gloves_megabangle_2_display_name";
		iconAddress: "n_gloves_megabangle_2_icon";
	}
>;
export type AvatarItemDisplayNGlovesMegabangle3 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_megabangle_3",
	{
		displayStringId: "n_gloves_megabangle_3_display_name";
		iconAddress: "n_gloves_megabangle_3_icon";
	}
>;
export type AvatarItemDisplayNGlovesMegabangle4 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_megabangle_4",
	{
		displayStringId: "n_gloves_megabangle_4_display_name";
		iconAddress: "n_gloves_megabangle_4_icon";
	}
>;
export type AvatarItemDisplayNGlovesObstagoonitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_obstagoonitems_0",
	{
		displayStringId: "n_gloves_obstagoonitems_0_display_name";
		iconAddress: "n_gloves_obstagoonitems_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesPalmer0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_palmer_0",
	{
		displayStringId: "n_gloves_palmer_0_display_name";
		iconAddress: "n_gloves_palmer_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesProfwillowoutfit0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_profwillowoutfit_0",
	{
		displayStringId: "n_gloves_profwillowoutfit_0_display_name";
		iconAddress: "n_gloves_profwillowoutfit_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesStevenfirst0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_stevenfirst_0",
	{
		displayStringId: "n_gloves_stevenfirst_0_display_name";
		iconAddress: "n_gloves_stevenfirst_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesSvdlc2spring0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_svdlc2spring_0",
	{
		displayStringId: "n_gloves_svdlc2spring_0_display_name";
		iconAddress: "n_gloves_svdlc2spring_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesSwshdlc2costume0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_swshdlc2costume_0",
	{
		displayStringId: "n_gloves_swshdlc2costume_0_display_name";
		iconAddress: "n_gloves_swshdlc2costume_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesSwshdlccostume0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_swshdlccostume_0",
	{
		displayStringId: "n_gloves_swshdlccostume_0_display_name";
		iconAddress: "n_gloves_swshdlccostume_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesSwshuniformchampion0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_swshuniformchampion_0",
	{
		displayStringId: "n_gloves_swshuniformchampion_0_display_name";
		iconAddress: "n_gloves_swshuniformchampion_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesSwshuniformdark0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_swshuniformdark_0",
	{
		displayStringId: "n_gloves_swshuniformdark_0_display_name";
		iconAddress: "n_gloves_swshuniformdark_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesSwshuniformdefault0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_swshuniformdefault_0",
	{
		displayStringId: "n_gloves_swshuniformdefault_0_display_name";
		iconAddress: "n_gloves_swshuniformdefault_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesSwshuniformdragon0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_swshuniformdragon_0",
	{
		displayStringId: "n_gloves_swshuniformdragon_0_display_name";
		iconAddress: "n_gloves_swshuniformdragon_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesTeamaquaA0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_teamaqua_a_0",
	{
		displayStringId: "n_gloves_teamaqua_a_0_display_name";
		iconAddress: "n_gloves_teamaqua_a_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesTeamaquaB0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_teamaqua_b_0",
	{
		displayStringId: "n_gloves_teamaqua_b_0_display_name";
		iconAddress: "n_gloves_teamaqua_b_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesTeammagma0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_teammagma_0",
	{
		displayStringId: "n_gloves_teammagma_0_display_name";
		iconAddress: "n_gloves_teammagma_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesTeamrocket0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_teamrocket_0",
	{
		displayStringId: "n_gloves_teamrocket_0_display_name";
		iconAddress: "n_gloves_teamrocket_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesTeamsparkA0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_teamspark_a_0",
	{
		displayStringId: "n_gloves_teamspark_a_0_display_name";
		iconAddress: "n_gloves_teamspark_a_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesTeamsparkB0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_teamspark_b_0",
	{
		displayStringId: "n_gloves_teamspark_b_0_display_name";
		iconAddress: "n_gloves_teamspark_b_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesTeamwristband0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_teamwristband_0",
	{
		displayStringId: "avatar_gloves_wristbandwhite";
		iconAddress: "n_gloves_teamwristband_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesTeamwristband1 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_teamwristband_1",
	{
		displayStringId: "avatar_gloves_wristbandred";
		iconAddress: "n_gloves_teamwristband_1_icon";
	}
>;
export type AvatarItemDisplayNGlovesTeamwristband2 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_teamwristband_2",
	{
		displayStringId: "avatar_gloves_wristbandblue";
		iconAddress: "n_gloves_teamwristband_2_icon";
	}
>;
export type AvatarItemDisplayNGlovesTeamwristband3 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_teamwristband_3",
	{
		displayStringId: "avatar_gloves_wristbandyellow";
		iconAddress: "n_gloves_teamwristband_3_icon";
	}
>;
export type AvatarItemDisplayNGlovesTeamyellgrunts0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_teamyellgrunts_0",
	{
		displayStringId: "avatar_gloves_teamyell";
		iconAddress: "n_gloves_teamyellgrunts_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesUnequip0 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_unequip_0",
	{
		displayStringId: "n_gloves_unequip_0_display_name";
		iconAddress: "n_gloves_empty_0_icon";
	}
>;
export type AvatarItemDisplayNGlovesWintergloves20230 = AvatarItemDisplay<
	"N_DISPLAY_n_gloves_wintergloves2023_0",
	{
		displayStringId: "n_gloves_wintergloves2023_0_display_name";
		iconAddress: "n_gloves_wintergloves2023_0_icon";
	}
>;
export type AvatarItemDisplayNGradientEye0 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_eye_0",
	{
		iconAddress: "n_gradient_eye_0_icon";
	}
>;
export type AvatarItemDisplayNGradientEye1 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_eye_1",
	{
		iconAddress: "n_gradient_eye_1_icon";
	}
>;
export type AvatarItemDisplayNGradientEye10 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_eye_10",
	{
		iconAddress: "n_gradient_eye_10_icon";
	}
>;
export type AvatarItemDisplayNGradientEye11 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_eye_11",
	{
		iconAddress: "n_gradient_eye_11_icon";
	}
>;
export type AvatarItemDisplayNGradientEye12 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_eye_12",
	{
		iconAddress: "n_gradient_eye_12_icon";
	}
>;
export type AvatarItemDisplayNGradientEye13 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_eye_13",
	{
		iconAddress: "n_gradient_eye_13_icon";
	}
>;
export type AvatarItemDisplayNGradientEye14 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_eye_14",
	{
		iconAddress: "n_gradient_eye_14_icon";
	}
>;
export type AvatarItemDisplayNGradientEye15 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_eye_15",
	{
		iconAddress: "n_gradient_eye_15_icon";
	}
>;
export type AvatarItemDisplayNGradientEye16 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_eye_16",
	{
		iconAddress: "n_gradient_eye_16_icon";
	}
>;
export type AvatarItemDisplayNGradientEye17 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_eye_17",
	{
		iconAddress: "n_gradient_eye_17_icon";
	}
>;
export type AvatarItemDisplayNGradientEye18 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_eye_18",
	{
		iconAddress: "n_gradient_eye_18_icon";
	}
>;
export type AvatarItemDisplayNGradientEye19 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_eye_19",
	{
		iconAddress: "n_gradient_eye_19_icon";
	}
>;
export type AvatarItemDisplayNGradientEye2 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_eye_2",
	{
		iconAddress: "n_gradient_eye_2_icon";
	}
>;
export type AvatarItemDisplayNGradientEye3 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_eye_3",
	{
		iconAddress: "n_gradient_eye_3_icon";
	}
>;
export type AvatarItemDisplayNGradientEye4 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_eye_4",
	{
		iconAddress: "n_gradient_eye_4_icon";
	}
>;
export type AvatarItemDisplayNGradientEye5 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_eye_5",
	{
		iconAddress: "n_gradient_eye_5_icon";
	}
>;
export type AvatarItemDisplayNGradientEye6 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_eye_6",
	{
		iconAddress: "n_gradient_eye_6_icon";
	}
>;
export type AvatarItemDisplayNGradientEye7 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_eye_7",
	{
		iconAddress: "n_gradient_eye_7_icon";
	}
>;
export type AvatarItemDisplayNGradientEye8 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_eye_8",
	{
		iconAddress: "n_gradient_eye_8_icon";
	}
>;
export type AvatarItemDisplayNGradientEye9 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_eye_9",
	{
		iconAddress: "n_gradient_eye_9_icon";
	}
>;
export type AvatarItemDisplayNGradientHair0 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_hair_0",
	{
		iconAddress: "n_gradient_hair_0_icon";
	}
>;
export type AvatarItemDisplayNGradientHair1 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_hair_1",
	{
		iconAddress: "n_gradient_hair_1_icon";
	}
>;
export type AvatarItemDisplayNGradientHair10 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_hair_10",
	{
		iconAddress: "n_gradient_hair_10_icon";
	}
>;
export type AvatarItemDisplayNGradientHair11 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_hair_11",
	{
		iconAddress: "n_gradient_hair_11_icon";
	}
>;
export type AvatarItemDisplayNGradientHair12 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_hair_12",
	{
		iconAddress: "n_gradient_hair_12_icon";
	}
>;
export type AvatarItemDisplayNGradientHair13 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_hair_13",
	{
		iconAddress: "n_gradient_hair_13_icon";
	}
>;
export type AvatarItemDisplayNGradientHair14 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_hair_14",
	{
		iconAddress: "n_gradient_hair_14_icon";
	}
>;
export type AvatarItemDisplayNGradientHair15 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_hair_15",
	{
		iconAddress: "n_gradient_hair_15_icon";
	}
>;
export type AvatarItemDisplayNGradientHair16 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_hair_16",
	{
		iconAddress: "n_gradient_hair_16_icon";
	}
>;
export type AvatarItemDisplayNGradientHair17 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_hair_17",
	{
		iconAddress: "n_gradient_hair_17_icon";
	}
>;
export type AvatarItemDisplayNGradientHair18 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_hair_18",
	{
		iconAddress: "n_gradient_hair_18_icon";
	}
>;
export type AvatarItemDisplayNGradientHair19 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_hair_19",
	{
		iconAddress: "n_gradient_hair_19_icon";
	}
>;
export type AvatarItemDisplayNGradientHair2 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_hair_2",
	{
		iconAddress: "n_gradient_hair_2_icon";
	}
>;
export type AvatarItemDisplayNGradientHair20 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_hair_20",
	{
		iconAddress: "n_gradient_hair_20_icon";
	}
>;
export type AvatarItemDisplayNGradientHair21 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_hair_21",
	{
		iconAddress: "n_gradient_hair_21_icon";
	}
>;
export type AvatarItemDisplayNGradientHair22 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_hair_22",
	{
		iconAddress: "n_gradient_hair_22_icon";
	}
>;
export type AvatarItemDisplayNGradientHair23 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_hair_23",
	{
		iconAddress: "n_gradient_hair_23_icon";
	}
>;
export type AvatarItemDisplayNGradientHair24 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_hair_24",
	{
		iconAddress: "n_gradient_hair_24_icon";
	}
>;
export type AvatarItemDisplayNGradientHair25 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_hair_25",
	{
		iconAddress: "n_gradient_hair_25_icon";
	}
>;
export type AvatarItemDisplayNGradientHair26 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_hair_26",
	{
		iconAddress: "n_gradient_hair_26_icon";
	}
>;
export type AvatarItemDisplayNGradientHair27 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_hair_27",
	{
		iconAddress: "n_gradient_hair_27_icon";
	}
>;
export type AvatarItemDisplayNGradientHair28 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_hair_28",
	{
		iconAddress: "n_gradient_hair_28_icon";
	}
>;
export type AvatarItemDisplayNGradientHair29 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_hair_29",
	{
		iconAddress: "n_gradient_hair_29_icon";
	}
>;
export type AvatarItemDisplayNGradientHair3 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_hair_3",
	{
		iconAddress: "n_gradient_hair_3_icon";
	}
>;
export type AvatarItemDisplayNGradientHair30 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_hair_30",
	{
		iconAddress: "n_gradient_hair_30_icon";
	}
>;
export type AvatarItemDisplayNGradientHair31 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_hair_31",
	{
		iconAddress: "n_gradient_hair_31_icon";
	}
>;
export type AvatarItemDisplayNGradientHair4 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_hair_4",
	{
		iconAddress: "n_gradient_hair_4_icon";
	}
>;
export type AvatarItemDisplayNGradientHair5 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_hair_5",
	{
		iconAddress: "n_gradient_hair_5_icon";
	}
>;
export type AvatarItemDisplayNGradientHair6 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_hair_6",
	{
		iconAddress: "n_gradient_hair_6_icon";
	}
>;
export type AvatarItemDisplayNGradientHair7 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_hair_7",
	{
		iconAddress: "n_gradient_hair_7_icon";
	}
>;
export type AvatarItemDisplayNGradientHair8 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_hair_8",
	{
		iconAddress: "n_gradient_hair_8_icon";
	}
>;
export type AvatarItemDisplayNGradientHair9 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_hair_9",
	{
		iconAddress: "n_gradient_hair_9_icon";
	}
>;
export type AvatarItemDisplayNGradientTesteye0 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_testeye_0",
	{
		iconAddress: "n_gradient_testeye_0_icon";
	}
>;
export type AvatarItemDisplayNGradientTesteye1 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_testeye_1",
	{
		iconAddress: "n_gradient_testeye_1_icon";
	}
>;
export type AvatarItemDisplayNGradientTesthair0 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_testhair_0",
	{
		iconAddress: "n_gradient_testhair_0_icon";
	}
>;
export type AvatarItemDisplayNGradientTesthair1 = AvatarItemDisplay<
	"N_DISPLAY_n_gradient_testhair_1",
	{
		iconAddress: "n_gradient_testhair_1_icon";
	}
>;
export type AvatarItemDisplayNHairCoilyshort0 = AvatarItemDisplay<
	"N_DISPLAY_n_hair_coilyshort_0",
	{
		iconAddress: "n_hair_coilyshort_0_icon";
	}
>;
export type AvatarItemDisplayNHairCurlymedium0 = AvatarItemDisplay<
	"N_DISPLAY_n_hair_curlymedium_0",
	{
		iconAddress: "n_hair_curlymedium_0_icon";
	}
>;
export type AvatarItemDisplayNHairDefaultA0 = AvatarItemDisplay<
	"N_DISPLAY_n_hair_default_a_0",
	{
		iconAddress: "n_hair_default_a_0_icon";
	}
>;
export type AvatarItemDisplayNHairDefaultB0 = AvatarItemDisplay<
	"N_DISPLAY_n_hair_default_b_0",
	{
		iconAddress: "n_hair_default_b_0_icon";
	}
>;
export type AvatarItemDisplayNHairGrimmsnarl0 = AvatarItemDisplay<
	"N_DISPLAY_n_hair_grimmsnarl_0",
	{
		iconAddress: "n_hair_grimmsnarl_0_icon";
	}
>;
export type AvatarItemDisplayNHairKinkymedium0 = AvatarItemDisplay<
	"N_DISPLAY_n_hair_kinkymedium_0",
	{
		iconAddress: "n_hair_kinkymedium_0_icon";
	}
>;
export type AvatarItemDisplayNHairKinkyshort0 = AvatarItemDisplay<
	"N_DISPLAY_n_hair_kinkyshort_0",
	{
		iconAddress: "n_hair_kinkyshort_0_icon";
	}
>;
export type AvatarItemDisplayNHairLvl79Synthfade0 = AvatarItemDisplay<
	"N_DISPLAY_n_hair_lvl79-synthfade_0",
	{
		iconAddress: "n_hair_lvl79-synthfade_0_icon";
	}
>;
export type AvatarItemDisplayNHairLvl79Urbanphantom0 = AvatarItemDisplay<
	"N_DISPLAY_n_hair_lvl79-urbanphantom_0",
	{
		iconAddress: "n_hair_lvl79-urbanphantom_0_icon";
	}
>;
export type AvatarItemDisplayNHairMohawk00 = AvatarItemDisplay<
	"N_DISPLAY_n_hair_mohawk-0_0",
	{
		iconAddress: "n_hair_mohawk-0_0_icon";
	}
>;
export type AvatarItemDisplayNHairMohawk10 = AvatarItemDisplay<
	"N_DISPLAY_n_hair_mohawk-1_0",
	{
		iconAddress: "n_hair_mohawk-1_0_icon";
	}
>;
export type AvatarItemDisplayNHairMorgrem0 = AvatarItemDisplay<
	"N_DISPLAY_n_hair_morgrem_0",
	{
		iconAddress: "n_hair_morgrem_0_icon";
	}
>;
export type AvatarItemDisplayNHairStraightlong0 = AvatarItemDisplay<
	"N_DISPLAY_n_hair_straightlong_0",
	{
		iconAddress: "n_hair_straightlong_0_icon";
	}
>;
export type AvatarItemDisplayNHairStraightmedium0 = AvatarItemDisplay<
	"N_DISPLAY_n_hair_straightmedium_0",
	{
		iconAddress: "n_hair_straightmedium_0_icon";
	}
>;
export type AvatarItemDisplayNHairStraightshort0 = AvatarItemDisplay<
	"N_DISPLAY_n_hair_straightshort_0",
	{
		iconAddress: "n_hair_straightshort_0_icon";
	}
>;
export type AvatarItemDisplayNHairTesthair00 = AvatarItemDisplay<
	"N_DISPLAY_n_hair_testhair-0_0",
	{
		iconAddress: "n_hair_testhair-0_0_icon";
	}
>;
export type AvatarItemDisplayNHairTesthair10 = AvatarItemDisplay<
	"N_DISPLAY_n_hair_testhair-1_0",
	{
		iconAddress: "n_hair_testhair-1_0_icon";
	}
>;
export type AvatarItemDisplayNHairWavylong0 = AvatarItemDisplay<
	"N_DISPLAY_n_hair_wavylong_0",
	{
		iconAddress: "n_hair_wavylong_0_icon";
	}
>;
export type AvatarItemDisplayNHairWavymedium0 = AvatarItemDisplay<
	"N_DISPLAY_n_hair_wavymedium_0",
	{
		iconAddress: "n_hair_wavymedium_0_icon";
	}
>;
export type AvatarItemDisplayNHairWavyshort0 = AvatarItemDisplay<
	"N_DISPLAY_n_hair_wavyshort_0",
	{
		iconAddress: "n_hair_wavyshort_0_icon";
	}
>;
export type AvatarItemDisplayNHairZacian0 = AvatarItemDisplay<
	"N_DISPLAY_n_hair_zacian_0",
	{
		iconAddress: "n_hair_zacian_0_icon";
	}
>;
export type AvatarItemDisplayNHairZamazenta0 = AvatarItemDisplay<
	"N_DISPLAY_n_hair_zamazenta_0",
	{
		iconAddress: "n_hair_zamazenta_0_icon";
	}
>;
export type AvatarItemDisplayNHat6thanniversaryA0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_6thanniversary_a_0",
	{
		displayStringId: "n_hat_6thanniversary_a_0_display_name";
		iconAddress: "n_hat_6thanniversary_a_0_icon";
	}
>;
export type AvatarItemDisplayNHat6thanniversaryB0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_6thanniversary_b_0",
	{
		displayStringId: "n_hat_6thanniversary_b_0_display_name";
		iconAddress: "n_hat_6thanniversary_b_0_icon";
	}
>;
export type AvatarItemDisplayNHatAcetrainersmA0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_acetrainersm_a_0",
	{
		displayStringId: "n_hat_acetrainersm_a_0_display_name";
		iconAddress: "n_hat_acetrainersm_a_0_icon";
	}
>;
export type AvatarItemDisplayNHatAcetrainersmB0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_acetrainersm_b_0",
	{
		displayStringId: "n_hat_acetrainersm_b_0_display_name";
		iconAddress: "n_hat_acetrainersm_b_0_icon";
	}
>;
export type AvatarItemDisplayNHatAdventure0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_adventure_0",
	{
		displayStringId: "n_hat_adventure_0_display_name";
		iconAddress: "n_hat_adventure_0_icon";
	}
>;
export type AvatarItemDisplayNHatAlolanexeggutorhat0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_alolanexeggutorhat_0",
	{
		displayStringId: "AVATAR_AlolanExeggutorHat";
		iconAddress: "n_hat_alolanexeggutorhat_0_icon";
	}
>;
export type AvatarItemDisplayNHatApplinitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_applinitems_0",
	{
		displayStringId: "avatar_hat_applinheadband";
		iconAddress: "n_hat_applinitems_0_icon";
	}
>;
export type AvatarItemDisplayNHatAseries0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_aseries_0",
	{
		displayStringId: "n_hat_aseries_0_display_name";
		iconAddress: "n_hat_aseries_0_icon";
	}
>;
export type AvatarItemDisplayNHatBeaA0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_bea_a_0",
	{
		displayStringId: "n_hat_bea_a_0_display_name";
		iconAddress: "n_hat_bea_a_0_icon";
	}
>;
export type AvatarItemDisplayNHatBeaB0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_bea_b_0",
	{
		displayStringId: "n_hat_bea_b_0_display_name";
		iconAddress: "n_hat_bea_b_0_icon";
	}
>;
export type AvatarItemDisplayNHatBidoofhat0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_bidoofhat_0",
	{
		displayStringId: "n_hat_bidoofhat_0_display_name";
		iconAddress: "n_hat_bidoofhat_0_icon";
	}
>;
export type AvatarItemDisplayNHatBounsweetitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_bounsweetitems_0",
	{
		displayStringId: "n_hat_bounsweetitems_0_display_name";
		iconAddress: "n_hat_bounsweetitems_0_icon";
	}
>;
export type AvatarItemDisplayNHatBwn0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_bwn_0",
	{
		displayStringId: "n_hat_bwn_0_display_name";
		iconAddress: "n_hat_bwn_0_icon";
	}
>;
export type AvatarItemDisplayNHatCaptainpikachu0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_captainpikachu_0",
	{
		displayStringId: "avatar_hat_captainpikachu";
		iconAddress: "n_hat_captainpikachu_0_icon";
	}
>;
export type AvatarItemDisplayNHatCasket0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_casket_0",
	{
		displayStringId: "n_hat_casket_0_display_name";
		iconAddress: "n_hat_casket_0_icon";
	}
>;
export type AvatarItemDisplayNHatCetoddlehat0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_cetoddlehat_0",
	{
		displayStringId: "n_hat_cetoddlehat_0_display_name";
		iconAddress: "n_hat_cetoddlehat_0_icon";
	}
>;
export type AvatarItemDisplayNHatClay0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_clay_0",
	{
		displayStringId: "n_hat_clay_0_display_name";
		iconAddress: "n_hat_clay_0_icon";
	}
>;
export type AvatarItemDisplayNHatCofagrigusitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_cofagrigusitems_0",
	{
		displayStringId: "n_hat_cofagrigusitems_0_display_name";
		iconAddress: "n_hat_cofagrigusitems_0_icon";
	}
>;
export type AvatarItemDisplayNHatCommunityambassador0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_communityambassador_0",
	{
		displayStringId: "avatar_n_hat_communityambassador";
		iconAddress: "n_hat_communityambassador_0_icon";
	}
>;
export type AvatarItemDisplayNHatCosmog0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_cosmog_0",
	{
		displayStringId: "n_hat_cosmog_0_display_name";
		iconAddress: "n_hat_cosmog_0_icon";
	}
>;
export type AvatarItemDisplayNHatCrownmoon0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_crownmoon_0",
	{
		displayStringId: "n_hat_gofest24mooncrownprepurchase_0_display_name";
		iconAddress: "n_hat_crownmoon_0_icon";
	}
>;
export type AvatarItemDisplayNHatCrownsun0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_crownsun_0",
	{
		displayStringId: "n_hat_gofest24suncrownprepurchase_0_display_name";
		iconAddress: "n_hat_crownsun_0_icon";
	}
>;
export type AvatarItemDisplayNHatCubonehat0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_cubonehat_0",
	{
		displayStringId: "n_hat_cubonehat_0_display_name";
		iconAddress: "n_hat_cubonehat_0_icon";
	}
>;
export type AvatarItemDisplayNHatDarumakahat0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_darumakahat_0",
	{
		displayStringId: "n_hat_darumakahat_0_display_name";
		iconAddress: "n_hat_darumakahat_0_icon";
	}
>;
export type AvatarItemDisplayNHatDedenneitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_dedenneitems_0",
	{
		displayStringId: "n_hat_dedenneitems_0_display_name";
		iconAddress: "n_hat_dedenneitems_0_icon";
	}
>;
export type AvatarItemDisplayNHatDefaultA0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_default_a_0",
	{
		displayStringId: "n_hat_default_a_0_display_name";
		iconAddress: "n_hat_default_a_0_icon";
	}
>;
export type AvatarItemDisplayNHatDefaultA1 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_default_a_1",
	{
		displayStringId: "n_hat_default_a_0_display_name";
		iconAddress: "n_hat_default_a_1_icon";
	}
>;
export type AvatarItemDisplayNHatDefaultA2 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_default_a_2",
	{
		displayStringId: "n_hat_default_a_0_display_name";
		iconAddress: "n_hat_default_a_2_icon";
	}
>;
export type AvatarItemDisplayNHatDefaultA3 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_default_a_3",
	{
		displayStringId: "n_hat_default_a_0_display_name";
		iconAddress: "n_hat_default_a_3_icon";
	}
>;
export type AvatarItemDisplayNHatDefaultA4 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_default_a_4",
	{
		displayStringId: "n_hat_default_a_0_display_name";
		iconAddress: "n_hat_default_a_4_icon";
	}
>;
export type AvatarItemDisplayNHatDefaultA5 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_default_a_5",
	{
		displayStringId: "n_hat_default_a_0_display_name";
		iconAddress: "n_hat_default_a_5_icon";
	}
>;
export type AvatarItemDisplayNHatDefaultA6 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_default_a_6",
	{
		displayStringId: "n_hat_default_a_6_display_name";
		iconAddress: "n_hat_default_a_6_icon";
	}
>;
export type AvatarItemDisplayNHatDefaultA7 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_default_a_7",
	{
		displayStringId: "n_hat_default_a_6_display_name";
		iconAddress: "n_hat_default_a_7_icon";
	}
>;
export type AvatarItemDisplayNHatDefaultB0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_default_b_0",
	{
		displayStringId: "n_hat_default_b_0_display_name";
		iconAddress: "n_hat_default_b_0_icon";
	}
>;
export type AvatarItemDisplayNHatDefaultB1 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_default_b_1",
	{
		displayStringId: "n_hat_default_b_0_display_name";
		iconAddress: "n_hat_default_b_1_icon";
	}
>;
export type AvatarItemDisplayNHatDefaultB2 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_default_b_2",
	{
		displayStringId: "n_hat_default_b_0_display_name";
		iconAddress: "n_hat_default_b_2_icon";
	}
>;
export type AvatarItemDisplayNHatDefaultB3 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_default_b_3",
	{
		displayStringId: "n_hat_default_b_0_display_name";
		iconAddress: "n_hat_default_b_3_icon";
	}
>;
export type AvatarItemDisplayNHatDefaultB4 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_default_b_4",
	{
		displayStringId: "n_hat_default_b_0_display_name";
		iconAddress: "n_hat_default_b_4_icon";
	}
>;
export type AvatarItemDisplayNHatDefaultB5 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_default_b_5",
	{
		displayStringId: "n_hat_default_b_0_display_name";
		iconAddress: "n_hat_default_b_5_icon";
	}
>;
export type AvatarItemDisplayNHatDeino0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_deino_0",
	{
		displayStringId: "n_hat_deino_0_display_name";
		iconAddress: "n_hat_deino_0_icon";
	}
>;
export type AvatarItemDisplayNHatDelibird0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_delibird_0",
	{
		displayStringId: "n_hat_delibird_0_display_name";
		iconAddress: "n_hat_delibird_0_icon";
	}
>;
export type AvatarItemDisplayNHatDetectivepikachu0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_detectivepikachu_0",
	{
		displayStringId: "n_hat_detectivepikachu_0_display_name";
		iconAddress: "n_hat_detectivepikachu_0_icon";
	}
>;
export type AvatarItemDisplayNHatDiancie0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_diancie_0",
	{
		displayStringId: "n_hat_diancie_0_display_name";
		iconAddress: "n_hat_diancie_0_icon";
	}
>;
export type AvatarItemDisplayNHatDpA0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_dp_a_0",
	{
		displayStringId: "n_hat_dp_a_0_display_name";
		iconAddress: "n_hat_dp_a_0_icon";
	}
>;
export type AvatarItemDisplayNHatDpB0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_dp_b_0",
	{
		displayStringId: "n_hat_dp_b_0_display_name";
		iconAddress: "n_hat_dp_b_0_icon";
	}
>;
export type AvatarItemDisplayNHatDrifloon0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_drifloon_0",
	{
		displayStringId: "n_hat_drifloon_0_display_name";
		iconAddress: "n_hat_drifloon_0_icon";
	}
>;
export type AvatarItemDisplayNHatDrpikachu0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_drpikachu_0",
	{
		displayStringId: "n_hat_drpikachu_0_display_name";
		iconAddress: "n_hat_drpikachu_0_icon";
	}
>;
export type AvatarItemDisplayNHatDusclopsmummy0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_dusclopsmummy_0",
	{
		displayStringId: "n_hat_dusclopsmummy_0_display_name";
		iconAddress: "n_hat_dusclopsmummy_0_icon";
	}
>;
export type AvatarItemDisplayNHatEarringsburmyplant0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_earringsburmyplant_0",
	{
		displayStringId: "n_hat_earringsburmyplant_0_display_name";
		iconAddress: "n_hat_burmyearrings11_0_icon";
	}
>;
export type AvatarItemDisplayNHatEarringsburmysandy0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_earringsburmysandy_0",
	{
		displayStringId: "n_hat_earringsburmysandy_0_display_name";
		iconAddress: "n_hat_burmyearrings12_0_icon";
	}
>;
export type AvatarItemDisplayNHatEarringsburmytrash0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_earringsburmytrash_0",
	{
		displayStringId: "n_hat_earringsburmytrash_0_display_name";
		iconAddress: "n_hat_burmyearrings13_0_icon";
	}
>;
export type AvatarItemDisplayNHatEeveecap0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_eeveecap_0",
	{
		displayStringId: "n_hat_eeveecap_0_display_name";
		iconAddress: "n_hat_eeveecap_0_icon";
	}
>;
export type AvatarItemDisplayNHatElesa0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_elesa_0",
	{
		displayStringId: "n_hat_elesa_0_display_name";
		iconAddress: "n_hat_elesa_0_icon";
	}
>;
export type AvatarItemDisplayNHatEternatussuit0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_eternatussuit_0",
	{
		displayStringId: "avatar_hat_eternatus";
		iconAddress: "n_hat_eternatussuit_0_icon";
	}
>;
export type AvatarItemDisplayNHatFedora0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_fedora_0",
	{
		displayStringId: "n_hat_fedora_1_display_name";
		iconAddress: "n_hat_fedora_0_icon";
	}
>;
export type AvatarItemDisplayNHatFedora1 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_fedora_1",
	{
		displayStringId: "n_hat_fedora_1_display_name";
		iconAddress: "n_hat_fedora_1_icon";
	}
>;
export type AvatarItemDisplayNHatFisher0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_fisher_0",
	{
		displayStringId: "n_hat_fisher_0_display_name";
		iconAddress: "n_hat_fisher_0_icon";
	}
>;
export type AvatarItemDisplayNHatFlabebepack0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_flabebepack_0",
	{
		displayStringId: "n_hat_flabebepack_0_display_name";
		iconAddress: "n_hat_flabebepack_0_icon";
	}
>;
export type AvatarItemDisplayNHatFlowercrown0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_flowercrown_0",
	{
		displayStringId: "avatar_hat_flowercrown";
		iconAddress: "n_hat_flowercrown_0_icon";
	}
>;
export type AvatarItemDisplayNHatFragment0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_fragment_0",
	{
		displayStringId: "n_hat_fragment_0_display_name";
		iconAddress: "n_hat_fragment_0_icon";
	}
>;
export type AvatarItemDisplayNHatFrlgA0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_frlg_a_0",
	{
		displayStringId: "n_hat_frlg_a_0_display_name";
		iconAddress: "n_hat_frlg_a_0_icon";
	}
>;
export type AvatarItemDisplayNHatFrlgB0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_frlg_b_0",
	{
		displayStringId: "n_hat_frlg_b_0_display_name";
		iconAddress: "n_hat_frlg_b_0_icon";
	}
>;
export type AvatarItemDisplayNHatFurfrouwig0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_furfrouwig_0",
	{
		displayStringId: "n_hat_furfrouwig_0_display_name";
		iconAddress: "n_hat_furfrouwig_0_icon";
	}
>;
export type AvatarItemDisplayNHatFw20220 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_fw2022_0",
	{
		displayStringId: "n_hat_fw2022_0_display_name";
		iconAddress: "n_hat_fw2022_0_icon";
	}
>;
export type AvatarItemDisplayNHatGalarfarfetchditems0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_galarfarfetchditems_0",
	{
		displayStringId: "n_hat_galarfarfetchditems_0_display_name";
		iconAddress: "n_hat_galarfarfetchditems_0_icon";
	}
>;
export type AvatarItemDisplayNHatGenesecteventitem0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_genesecteventitem_0",
	{
		displayStringId: "n_hat_genesecteventitem_0_display_name";
		iconAddress: "n_hat_genesecteventitem_0_icon";
	}
>;
export type AvatarItemDisplayNHatGengar0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_gengar_0",
	{
		displayStringId: "n_hat_gengar_0_display_name";
		iconAddress: "n_hat_gengar_0_icon";
	}
>;
export type AvatarItemDisplayNHatGimmighoulitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_gimmighoulitems_0",
	{
		displayStringId: "n_hat_gimmighoulitems_0_display_name";
		iconAddress: "n_hat_gimmighoulitems_0_icon";
	}
>;
export type AvatarItemDisplayNHatGiratinaitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_giratinaitems_0",
	{
		displayStringId: "n_hat_giratinaitems_0_display_name";
		iconAddress: "n_hat_giratinaitems_0_icon";
	}
>;
export type AvatarItemDisplayNHatGladion0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_gladion_0",
	{
		displayStringId: "n_hat_gladion_0_display_name";
		iconAddress: "n_hat_gladion_0_icon";
	}
>;
export type AvatarItemDisplayNHatGofestPikachuvisor0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_gofest-pikachuvisor_0",
	{
		displayStringId: "n_hat_gofest-pikachuvisor_0_display_name";
		iconAddress: "n_hat_gofestpikachuvisor_0_icon";
	}
>;
export type AvatarItemDisplayNHatGoomy0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_goomy_0",
	{
		displayStringId: "n_hat_goomy_0_display_name";
		iconAddress: "n_hat_goomy_0_icon";
	}
>;
export type AvatarItemDisplayNHatGreavardwig0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_greavardwig_0",
	{
		displayStringId: "n_hat_greavardwig_0_display_name";
		iconAddress: "n_hat_greavardwig_0_icon";
	}
>;
export type AvatarItemDisplayNHatGreencoat0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_greencoat_0",
	{
		displayStringId: "n_hat_greencoat_0_display_name";
		iconAddress: "n_hat_greencoat_0_icon";
	}
>;
export type AvatarItemDisplayNHatGrowlithehelmet0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_growlithehelmet_0",
	{
		displayStringId: "n_hat_growlithehelmet_0_display_name";
		iconAddress: "n_hat_growlithehelmet_0_icon";
	}
>;
export type AvatarItemDisplayNHatGtr2024eeveefanmask0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_gtr2024eeveefanmask_0",
	{
		displayStringId: "n_hat_gtr2024eeveefanmask_0_display_name";
		iconAddress: "n_hat_gtr2024eeveefanmask_0_icon";
	}
>;
export type AvatarItemDisplayNHatGtr2024pikachufanmask0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_gtr2024pikachufanmask_0",
	{
		displayStringId: "n_hat_gtr2024pikachufanmask_0_display_name";
		iconAddress: "n_hat_gtr2024pikachufanmask_0_icon";
	}
>;
export type AvatarItemDisplayNHatGuccihat0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_guccihat_0",
	{
		displayStringId: "n_hat_guccihat_0_display_name";
		iconAddress: "n_hat_guccihat_0_icon";
	}
>;
export type AvatarItemDisplayNHatGuzma0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_guzma_0",
	{
		displayStringId: "n_hat_guzma_0_display_name";
		iconAddress: "n_hat_guzma_0_icon";
	}
>;
export type AvatarItemDisplayNHatGyaradoscap0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_gyaradoscap_0",
	{
		displayStringId: "n_hat_gyaradoscap_0_display_name";
		iconAddress: "n_hat_gyaradoscap_0_icon";
	}
>;
export type AvatarItemDisplayNHatHalloween20240 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_halloween2024_0",
	{
		displayStringId: "avatar_hat_halloween2024";
		iconAddress: "n_hat_halloween2024_0_icon";
	}
>;
export type AvatarItemDisplayNHatHgssA0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_hgss_a_0",
	{
		displayStringId: "n_hat_hgss_a_0_display_name";
		iconAddress: "n_hat_hgss_a_0_icon";
	}
>;
export type AvatarItemDisplayNHatHgssB0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_hgss_b_0",
	{
		displayStringId: "n_hat_hgss_b_0_display_name";
		iconAddress: "n_hat_hgss_b_0_icon";
	}
>;
export type AvatarItemDisplayNHatHoliday2022santacostumes0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_holiday2022santacostumes_0",
	{
		displayStringId: "n_hat_holiday2022santacostumes_0_display_name";
		iconAddress: "n_hat_holiday2022santacostumes_0_icon";
	}
>;
export type AvatarItemDisplayNHatHolidaybeanie0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_holidaybeanie_0",
	{
		displayStringId: "n_hat_holidaybeanie_0_display_name";
		iconAddress: "n_hat_holidaybeanie_0_icon";
	}
>;
export type AvatarItemDisplayNHatHoopaearmuffs0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_hoopaearmuffs_0",
	{
		displayStringId: "n_hat_hoopaearmuffs_0_display_name";
		iconAddress: "n_hat_hoopaearmuffs_0_icon";
	}
>;
export type AvatarItemDisplayNHatIngo0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_ingo_0",
	{
		displayStringId: "n_hat_ingo_0_display_name";
		iconAddress: "n_hat_ingo_0_icon";
	}
>;
export type AvatarItemDisplayNHatJogger0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_jogger_0",
	{
		displayStringId: "n_hat_jogger_0_display_name";
		iconAddress: "n_hat_jogger_0_icon";
	}
>;
export type AvatarItemDisplayNHatKantotourcapgreen0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_kantotourcapgreen_0",
	{
		displayStringId: "n_hat_kantotourcapgreen_0_display_name";
		iconAddress: "n_hat_kantotourcapgreen_0_icon";
	}
>;
export type AvatarItemDisplayNHatKantotourcapred0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_kantotourcapred_0",
	{
		displayStringId: "n_hat_kantotourcapred_0_display_name";
		iconAddress: "n_hat_kantotourcapred_0_icon";
	}
>;
export type AvatarItemDisplayNHatKnitted0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_knitted_0",
	{
		displayStringId: "n_hat_knitted_1_display_name";
		iconAddress: "n_hat_knitted_0_icon";
	}
>;
export type AvatarItemDisplayNHatKnitted1 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_knitted_1",
	{
		displayStringId: "n_hat_knitted_1_display_name";
		iconAddress: "n_hat_knitted_1_icon";
	}
>;
export type AvatarItemDisplayNHatKorrina0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_korrina_0",
	{
		displayStringId: "n_hat_korrina_0_display_name";
		iconAddress: "n_hat_korrina_0_icon";
	}
>;
export type AvatarItemDisplayNHatKyuremhat0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_kyuremhat_0",
	{
		displayStringId: "avatar_hat_kyurem";
		iconAddress: "n_hat_kyuremhat_0_icon";
	}
>;
export type AvatarItemDisplayNHatLana0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_lana_0",
	{
		displayStringId: "AVATAR_LanaWig";
		iconAddress: "n_hat_lana_0_icon";
	}
>;
export type AvatarItemDisplayNHatLaprasbandanaA0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_laprasbandana_a_0",
	{
		displayStringId: "n_hat_laprasbandana_a_0_display_name";
		iconAddress: "n_hat_laprasbandana_a_0_icon";
	}
>;
export type AvatarItemDisplayNHatLaprasbandanaB0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_laprasbandana_b_0",
	{
		displayStringId: "n_hat_laprasbandana_b_0_display_name";
		iconAddress: "n_hat_laprasbandana_b_0_icon";
	}
>;
export type AvatarItemDisplayNHatLasecuritycorps0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_lasecuritycorps_0",
	{
		displayStringId: "n_hat_lasecuritycorps_0_display_name";
		iconAddress: "n_hat_lasecuritycorps_0_icon";
	}
>;
export type AvatarItemDisplayNHatLegendofarceusA0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_legendofarceus_a_0",
	{
		displayStringId: "n_hat_legendofarceus_a_0_display_name";
		iconAddress: "n_hat_legendofarceus_a_0_icon";
	}
>;
export type AvatarItemDisplayNHatLegendofarceusB0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_legendofarceus_b_0",
	{
		displayStringId: "n_hat_legendofarceus_b_0_display_name";
		iconAddress: "n_hat_legendofarceus_b_0_icon";
	}
>;
export type AvatarItemDisplayNHatLitwickhat0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_litwickhat_0",
	{
		displayStringId: "n_hat_litwickhat_0_display_name";
		iconAddress: "n_hat_litwickhat_0_icon";
	}
>;
export type AvatarItemDisplayNHatLoneearrings0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_loneearrings_0",
	{
		displayStringId: "n_hat_loneearrings_0_display_name";
		iconAddress: "n_hat_loneearrings_0_icon";
	}
>;
export type AvatarItemDisplayNHatLucariomask0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_lucariomask_0",
	{
		displayStringId: "AVATAR_LucarioMask";
		iconAddress: "n_hat_lucariomask_0_icon";
	}
>;
export type AvatarItemDisplayNHatLvl50cap0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_lvl50cap_0",
	{
		displayStringId: "n_hat_lvl50cap_0_display_name";
		iconAddress: "n_hat_lvl50cap_0_icon";
	}
>;
export type AvatarItemDisplayNHatMagikarp0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_magikarp_0",
	{
		displayStringId: "n_hat_magikarp_0_display_name";
		iconAddress: "n_hat_magikarp_0_icon";
	}
>;
export type AvatarItemDisplayNHatMareaniehat0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_mareaniehat_0",
	{
		displayStringId: "n_hat_mareaniehat_0_display_name";
		iconAddress: "n_hat_mareaniehat_0_icon";
	}
>;
export type AvatarItemDisplayNHatMegalopunnyitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_megalopunnyitems_0",
	{
		displayStringId: "n_hat_megalopunnyitems_0_display_name";
		iconAddress: "n_hat_megalopunnyitems_0_icon";
	}
>;
export type AvatarItemDisplayNHatMegarayquaza0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_megarayquaza_0",
	{
		displayStringId: "n_hat_megarayquaza_0_display_name";
		iconAddress: "n_hat_megarayquaza_0_icon";
	}
>;
export type AvatarItemDisplayNHatMeltan0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_meltan_0",
	{
		displayStringId: "n_hat_meltan_0_display_name";
		iconAddress: "n_hat_meltan_0_icon";
	}
>;
export type AvatarItemDisplayNHatMeltanearrings0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_meltanearrings_0",
	{
		displayStringId: "n_hat_meltanearrings_0_display_name";
		iconAddress: "n_hat_meltanearrings_0_icon";
	}
>;
export type AvatarItemDisplayNHatMewtwoA0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_mewtwo_a_0",
	{
		displayStringId: "n_hat_mewtwo_a_0_display_name";
		iconAddress: "n_hat_mewtwo_a_0_icon";
	}
>;
export type AvatarItemDisplayNHatMewtwoB0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_mewtwo_b_0",
	{
		displayStringId: "n_hat_mewtwo_b_0_display_name";
		iconAddress: "n_hat_mewtwo_b_0_icon";
	}
>;
export type AvatarItemDisplayNHatMimikyu0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_mimikyu_0",
	{
		displayStringId: "n_hat_mimikyu_0_display_name";
		iconAddress: "n_hat_mimikyu_0_icon";
	}
>;
export type AvatarItemDisplayNHatMismagius0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_mismagius_0",
	{
		displayStringId: "n_hat_mismagius_0_display_name";
		iconAddress: "n_hat_mismagius_0_icon";
	}
>;
export type AvatarItemDisplayNHatMlbBrewers0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_mlb-brewers_0",
	{
		displayStringId: "avatar_hat_mlbbrewers";
		iconAddress: "n_hat_mlb-brewers_0_icon";
	}
>;
export type AvatarItemDisplayNHatMlbDiamondbacks0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_mlb-diamondbacks_0",
	{
		displayStringId: "avatar_hat_mlbdiamondbacks";
		iconAddress: "n_hat_mlb-diamondbacks_0_icon";
	}
>;
export type AvatarItemDisplayNHatMlbGiants0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_mlb-giants_0",
	{
		displayStringId: "avatar_hat_mlbgiants";
		iconAddress: "n_hat_mlb-giants_0_icon";
	}
>;
export type AvatarItemDisplayNHatMlbGuardians0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_mlb-guardians_0",
	{
		displayStringId: "avatar_hat_mlbguardians";
		iconAddress: "n_hat_mlb-guardians_0_icon";
	}
>;
export type AvatarItemDisplayNHatMlbMariners0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_mlb-mariners_0",
	{
		displayStringId: "avatar_hat_mlbmariners";
		iconAddress: "n_hat_mlb-mariners_0_icon";
	}
>;
export type AvatarItemDisplayNHatMlbMarlins0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_mlb-marlins_0",
	{
		displayStringId: "avatar_hat_mlbmarlins";
		iconAddress: "n_hat_mlb-marlins_0_icon";
	}
>;
export type AvatarItemDisplayNHatMlbMets0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_mlb-mets_0",
	{
		displayStringId: "avatar_hat_mlbmets";
		iconAddress: "n_hat_mlb-mets_0_icon";
	}
>;
export type AvatarItemDisplayNHatMlbNationals0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_mlb-nationals_0",
	{
		displayStringId: "avatar_hat_mlbnationals";
		iconAddress: "n_hat_mlb-nationals_0_icon";
	}
>;
export type AvatarItemDisplayNHatMlbOrioles0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_mlb-orioles_0",
	{
		displayStringId: "avatar_hat_mlborioles";
		iconAddress: "n_hat_mlb-orioles_0_icon";
	}
>;
export type AvatarItemDisplayNHatMlbPadres0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_mlb-padres_0",
	{
		displayStringId: "avatar_hat_mlbpadres";
		iconAddress: "n_hat_mlb-padres_0_icon";
	}
>;
export type AvatarItemDisplayNHatMlbRangers0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_mlb-rangers_0",
	{
		displayStringId: "avatar_hat_mlbrangers";
		iconAddress: "n_hat_mlb-rangers_0_icon";
	}
>;
export type AvatarItemDisplayNHatMlbRays0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_mlb-rays_0",
	{
		displayStringId: "avatar_hat_mlbrays";
		iconAddress: "n_hat_mlb-rays_0_icon";
	}
>;
export type AvatarItemDisplayNHatMlbRedsox0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_mlb-redsox_0",
	{
		displayStringId: "avatar_hat_mlbredsox";
		iconAddress: "n_hat_mlb-redsox_0_icon";
	}
>;
export type AvatarItemDisplayNHatMlbTwins0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_mlb-twins_0",
	{
		displayStringId: "avatar_hat_mlbtwins";
		iconAddress: "n_hat_mlb-twins_0_icon";
	}
>;
export type AvatarItemDisplayNHatMlbWhitesox0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_mlb-whitesox_0",
	{
		displayStringId: "avatar_hat_mlbwhitesox";
		iconAddress: "n_hat_mlb-whitesox_0_icon";
	}
>;
export type AvatarItemDisplayNHatMlb0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_mlb_0",
	{
		displayStringId: "avatar_hat_mlbballcap";
		iconAddress: "n_hat_mlb_0_icon";
	}
>;
export type AvatarItemDisplayNHatMovie20200 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_movie2020_0",
	{
		displayStringId: "n_hat_movie2020_0_display_name";
		iconAddress: "n_hat_movie2020_0_icon";
	}
>;
export type AvatarItemDisplayNHatMunnapack0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_munnapack_0",
	{
		displayStringId: "n_hat_munnapack_0_display_name";
		iconAddress: "n_hat_munnapack_0_icon";
	}
>;
export type AvatarItemDisplayNHatMunnapack1 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_munnapack_1",
	{
		displayStringId: "n_hat_munnapack_1_display_name";
		iconAddress: "n_hat_munnapack_1_icon";
	}
>;
export type AvatarItemDisplayNHatMustard0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_mustard_0",
	{
		displayStringId: "avatar_hats_mustard";
		iconAddress: "n_hat_mustard_0_icon";
	}
>;
export type AvatarItemDisplayNHatNewyear20220 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_newyear2022_0",
	{
		displayStringId: "n_hat_newyear2022_0_display_name";
		iconAddress: "n_hat_newyear2022_0_icon";
	}
>;
export type AvatarItemDisplayNHatNewyearhat20210 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_newyearhat2021_0",
	{
		displayStringId: "n_hat_newyearhat2021_0_display_name";
		iconAddress: "n_hat_newyearhat2021_0_icon";
	}
>;
export type AvatarItemDisplayNHatNewyearhat20230 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_newyearhat2023_0",
	{
		displayStringId: "n_hat_newyearhat2023_0_display_name";
		iconAddress: "n_hat_newyearhat2023_0_icon";
	}
>;
export type AvatarItemDisplayNHatNihilegoitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_nihilegoitems_0",
	{
		displayStringId: "n_hat_nihilegoitems_0_display_name";
		iconAddress: "n_hat_nihilegoitems_0_icon";
	}
>;
export type AvatarItemDisplayNHatNoibat0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_noibat_0",
	{
		displayStringId: "n_hat_noibat_0_display_name";
		iconAddress: "n_hat_noibat_0_icon";
	}
>;
export type AvatarItemDisplayNHatObstagoonitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_obstagoonitems_0",
	{
		displayStringId: "n_hat_obstagoonitems_0_display_name";
		iconAddress: "n_hat_obstagoonitems_0_icon";
	}
>;
export type AvatarItemDisplayNHatOrasA0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_oras_a_0",
	{
		displayStringId: "n_hat_oras_a_0_display_name";
		iconAddress: "n_hat_oras_a_0_icon";
	}
>;
export type AvatarItemDisplayNHatOrasB0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_oras_b_0",
	{
		displayStringId: "n_hat_oras_b_0_display_name";
		iconAddress: "n_hat_oras_b_0_icon";
	}
>;
export type AvatarItemDisplayNHatOricoriopink0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_oricoriopink_0",
	{
		displayStringId: "n_hat_oricoriopink_0_display_name";
		iconAddress: "n_hat_oricoriopink_0_icon";
	}
>;
export type AvatarItemDisplayNHatOricoriopurple0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_oricoriopurple_0",
	{
		displayStringId: "n_hat_oricoriopurple_0_display_name";
		iconAddress: "n_hat_oricoriopurple_0_icon";
	}
>;
export type AvatarItemDisplayNHatOricoriored0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_oricoriored_0",
	{
		displayStringId: "n_hat_oricoriored_0_display_name";
		iconAddress: "n_hat_oricoriored_0_icon";
	}
>;
export type AvatarItemDisplayNHatOricorioyellow0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_oricorioyellow_0",
	{
		displayStringId: "n_hat_oricorioyellow_0_display_name";
		iconAddress: "n_hat_oricorioyellow_0_icon";
	}
>;
export type AvatarItemDisplayNHatPartneritemsjan2024hat0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_partneritemsjan2024hat_0",
	{
		displayStringId: "n_hat_partneritemsjan2024hat_0_display_name";
		iconAddress: "n_hat_partneritemsjan2024hat_0_icon";
	}
>;
export type AvatarItemDisplayNHatPartyhat0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_partyhat_0",
	{
		displayStringId: "avatar_hat_partyhat";
		iconAddress: "n_hat_partyhat_0_icon";
	}
>;
export type AvatarItemDisplayNHatPhantump0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_phantump_0",
	{
		displayStringId: "n_hat_phantump_0_display_name";
		iconAddress: "n_hat_phantump_0_icon";
	}
>;
export type AvatarItemDisplayNHatPikachubutlerBlue0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_pikachubutler-blue_0",
	{
		displayStringId: "avatar_hat_suitblue";
		iconAddress: "n_hat_pikachubutler-blue_0_icon";
	}
>;
export type AvatarItemDisplayNHatPikachubutlerRed0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_pikachubutler-red_0",
	{
		displayStringId: "avatar_hat_suitred";
		iconAddress: "n_hat_pikachubutler-red_0_icon";
	}
>;
export type AvatarItemDisplayNHatPikachubutlerYellow0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_pikachubutler-yellow_0",
	{
		displayStringId: "avatar_hat_suityellow";
		iconAddress: "n_hat_pikachubutler-yellow_0_icon";
	}
>;
export type AvatarItemDisplayNHatPikachucap0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_pikachucap_0",
	{
		displayStringId: "n_hat_pikachucap_0_display_name";
		iconAddress: "n_hat_pikachucap_0_icon";
	}
>;
export type AvatarItemDisplayNHatPikachufan0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_pikachufan_0",
	{
		displayStringId: "n_hat_pikachufan_0_display_name";
		iconAddress: "n_hat_pikachufan_0_icon";
	}
>;
export type AvatarItemDisplayNHatPikachulibre0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_pikachulibre_0",
	{
		displayStringId: "n_hat_pikachulibre_0_display_name";
		iconAddress: "n_hat_pikachulibre_0_icon";
	}
>;
export type AvatarItemDisplayNHatPikachupumpkinhead0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_pikachupumpkinhead_0",
	{
		displayStringId: "n_hat_pikachupumpkinhead_0_display_name";
		iconAddress: "n_hat_pikachupumpkinhead_0_icon";
	}
>;
export type AvatarItemDisplayNHatPkmncap0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_pkmncap_0",
	{
		displayStringId: "n_hat_pkmncap_0_display_name";
		iconAddress: "n_hat_pkmncap_0_icon";
	}
>;
export type AvatarItemDisplayNHatPkmncap1 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_pkmncap_1",
	{
		displayStringId: "n_hat_pkmncap_1_display_name";
		iconAddress: "n_hat_pkmncap_1_icon";
	}
>;
export type AvatarItemDisplayNHatPkmncap2 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_pkmncap_2",
	{
		displayStringId: "n_hat_pkmncap_2_display_name";
		iconAddress: "n_hat_pkmncap_2_icon";
	}
>;
export type AvatarItemDisplayNHatPoipole0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_poipole_0",
	{
		displayStringId: "n_hat_poipole_0_display_name";
		iconAddress: "n_hat_poipole_0_icon";
	}
>;
export type AvatarItemDisplayNHatPokeballitemsBasic0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_pokeballitems-basic_0",
	{
		displayStringId: "avatar_n_hat_pokeballitems-basic_0";
		iconAddress: "n_hat_pokeballitems-basic_0_icon";
	}
>;
export type AvatarItemDisplayNHatPokeballitemsGreat0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_pokeballitems-great_0",
	{
		displayStringId: "avatar_n_hat_pokeballitems-great_0";
		iconAddress: "n_hat_pokeballitems-great_0_icon";
	}
>;
export type AvatarItemDisplayNHatPokeballitemsUltra0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_pokeballitems-ultra_0",
	{
		displayStringId: "avatar_n_hat_pokeballitems-ultra_0";
		iconAddress: "n_hat_pokeballitems-ultra_0_icon";
	}
>;
export type AvatarItemDisplayNHatPolteageisthat0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_polteageisthat_0",
	{
		displayStringId: "avatar_n_hat_polteageist";
		iconAddress: "n_hat_polteageisthat_0_icon";
	}
>;
export type AvatarItemDisplayNHatProfwillowoutfit0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_profwillowoutfit_0",
	{
		displayStringId: "n_hat_profwillowoutfit_0_display_name";
		iconAddress: "n_hat_profwillowoutfit_0_icon";
	}
>;
export type AvatarItemDisplayNHatRegiicejersies0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_regiicejersies_0",
	{
		displayStringId: "n_hat_regiicejersies_0_display_name";
		iconAddress: "n_hat_regiicejersies_0_icon";
	}
>;
export type AvatarItemDisplayNHatRegirockjersies0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_regirockjersies_0",
	{
		displayStringId: "n_hat_regirockjersies_0_display_name";
		iconAddress: "n_hat_regirockjersies_0_icon";
	}
>;
export type AvatarItemDisplayNHatRegisteeljersies0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_registeeljersies_0",
	{
		displayStringId: "n_hat_registeeljersies_0_display_name";
		iconAddress: "n_hat_registeeljersies_0_icon";
	}
>;
export type AvatarItemDisplayNHatRuinmaniacA0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_ruinmaniac_a_0",
	{
		displayStringId: "n_hat_ruinmaniac_a_0_display_name";
		iconAddress: "n_hat_ruinmaniac_a_0_icon";
	}
>;
export type AvatarItemDisplayNHatRuinmaniacB0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_ruinmaniac_b_0",
	{
		displayStringId: "n_hat_ruinmaniac_b_0_display_name";
		iconAddress: "n_hat_ruinmaniac_b_0_icon";
	}
>;
export type AvatarItemDisplayNHatSableyegoggles0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_sableyegoggles_0",
	{
		displayStringId: "n_hat_sableyegoggles_0_display_name";
		iconAddress: "n_hat_sableyegoggles_0_icon";
	}
>;
export type AvatarItemDisplayNHatSamsungsummer20200 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_samsungsummer2020_0",
	{
		displayStringId: "n_hat_samsungsummer2020_0_display_name";
		iconAddress: "n_hat_samsungsummer2020_0_icon";
	}
>;
export type AvatarItemDisplayNHatSandygasthat0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_sandygasthat_0",
	{
		displayStringId: "n_hat_sandygasthat_0_display_name";
		iconAddress: "n_hat_sandygasthat_0_icon";
	}
>;
export type AvatarItemDisplayNHatShayminhat0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_shayminhat_0",
	{
		displayStringId: "n_hat_shayminhat_0_display_name";
		iconAddress: "n_hat_shayminhat_0_icon";
	}
>;
export type AvatarItemDisplayNHatSlowpoketailshirts0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_slowpoketailshirts_0",
	{
		displayStringId: "n_hat_slowpoketailshirts_0_display_name";
		iconAddress: "n_hat_slowpoketailshirts_0_icon";
	}
>;
export type AvatarItemDisplayNHatSnombeanie0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_snombeanie_0",
	{
		displayStringId: "avatar_hat_snom";
		iconAddress: "n_hat_snombeanie_0_icon";
	}
>;
export type AvatarItemDisplayNHatSnorlaxnightcap0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_snorlaxnightcap_0",
	{
		displayStringId: "n_hat_snorlaxnightcap_0_display_name";
		iconAddress: "n_hat_snorlaxnightcap_0_icon";
	}
>;
export type AvatarItemDisplayNHatSolgaleoitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_solgaleoitems_0",
	{
		displayStringId: "n_hat_solgaleoitems_0_display_name";
		iconAddress: "n_hat_solgaleoitems_0_icon";
	}
>;
export type AvatarItemDisplayNHatSsA0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_ss_a_0",
	{
		displayStringId: "n_hat_ss_a_0_display_name";
		iconAddress: "n_hat_ss_a_0_icon";
	}
>;
export type AvatarItemDisplayNHatSsB0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_ss_b_0",
	{
		displayStringId: "n_hat_ss_b_0_display_name";
		iconAddress: "n_hat_ss_b_0_icon";
	}
>;
export type AvatarItemDisplayNHatStantlerheadband0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_stantlerheadband_0",
	{
		displayStringId: "n_hat_stantlerheadband_0_display_name";
		iconAddress: "n_hat_stantlerheadband_0_icon";
	}
>;
export type AvatarItemDisplayNHatStrawhat0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_strawhat_0",
	{
		displayStringId: "n_hat_strawhat_0_display_name";
		iconAddress: "n_hat_strawhat_0_icon";
	}
>;
export type AvatarItemDisplayNHatSummer20230 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_summer2023_0",
	{
		displayStringId: "n_hat_summer2023_0_display_name";
		iconAddress: "n_hat_summer2023_0_icon";
	}
>;
export type AvatarItemDisplayNHatSvcostumescarletschool0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_svcostumescarletschool_0",
	{
		displayStringId: "n_hat_svcostumescarletschool_0_display_name";
		iconAddress: "n_hat_svcostumescarletschool_0_icon";
	}
>;
export type AvatarItemDisplayNHatSvcostumevioletschool0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_svcostumevioletschool_0",
	{
		displayStringId: "n_hat_svcostumevioletschool_0_display_name";
		iconAddress: "n_hat_svcostumevioletschool_0_icon";
	}
>;
export type AvatarItemDisplayNHatSwshdlc2costume0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_swshdlc2costume_0",
	{
		displayStringId: "n_hat_swshdlc2costume_0_display_name";
		iconAddress: "n_hat_swshdlc2costume_0_icon";
	}
>;
export type AvatarItemDisplayNHatSwshuniformchampion0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_swshuniformchampion_0",
	{
		displayStringId: "n_hat_swshuniformchampion_0_display_name";
		iconAddress: "n_hat_swshuniformchampion_0_icon";
	}
>;
export type AvatarItemDisplayNHatSylveonitemsA0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_sylveonitems_a_0",
	{
		displayStringId: "n_hat_sylveonitems_a_0_display_name";
		iconAddress: "n_hat_sylveonitems_a_0_icon";
	}
>;
export type AvatarItemDisplayNHatSylveonitemsB0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_sylveonitems_b_0",
	{
		displayStringId: "n_hat_sylveonitems_b_0_display_name";
		iconAddress: "n_hat_sylveonitems_b_0_icon";
	}
>;
export type AvatarItemDisplayNHatTcgcollabtshirtandcap0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_tcgcollabtshirtandcap_0",
	{
		displayStringId: "n_hat_tcgcollabtshirtandcap_0_display_name";
		iconAddress: "n_hat_tcgcollabtshirtandcap_0_icon";
	}
>;
export type AvatarItemDisplayNHatTeamaqua0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_teamaqua_0",
	{
		displayStringId: "n_hat_teamaqua_0_display_name";
		iconAddress: "n_hat_teamaqua_0_icon";
	}
>;
export type AvatarItemDisplayNHatTeamleadercap0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_teamleadercap_0",
	{
		displayStringId: "n_hat_teamleadercap_0_display_name";
		iconAddress: "n_hat_teamleadercap_0_icon";
	}
>;
export type AvatarItemDisplayNHatTeamleadercap1 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_teamleadercap_1",
	{
		displayStringId: "n_hat_teamleadercap_1_display_name";
		iconAddress: "n_hat_teamleadercap_1_icon";
	}
>;
export type AvatarItemDisplayNHatTeamleadercap2 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_teamleadercap_2",
	{
		displayStringId: "n_hat_teamleadercap_2_display_name";
		iconAddress: "n_hat_teamleadercap_2_icon";
	}
>;
export type AvatarItemDisplayNHatTeamrocket0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_teamrocket_0",
	{
		displayStringId: "n_hat_teamrocket_0_display_name";
		iconAddress: "n_hat_teamrocket_0_icon";
	}
>;
export type AvatarItemDisplayNHatTeamrocketcap0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_teamrocketcap_0",
	{
		displayStringId: "n_hat_teamrocketcap_0_display_name";
		iconAddress: "n_hat_teamrocketcap_0_icon";
	}
>;
export type AvatarItemDisplayNHatTeamskull0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_teamskull_0",
	{
		displayStringId: "n_hat_teamskull_0_display_name";
		iconAddress: "n_hat_teamskull_0_icon";
	}
>;
export type AvatarItemDisplayNHatTophat0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_tophat_0",
	{
		displayStringId: "n_hat_tophat_0_display_name";
		iconAddress: "n_hat_tophat_0_icon";
	}
>;
export type AvatarItemDisplayNHatUltraA0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_ultra_a_0",
	{
		displayStringId: "n_hat_ultra_a_0_display_name";
		iconAddress: "n_hat_ultra_a_0_icon";
	}
>;
export type AvatarItemDisplayNHatUltraB0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_ultra_b_0",
	{
		displayStringId: "n_hat_ultra_b_0_display_name";
		iconAddress: "n_hat_ultra_b_0_icon";
	}
>;
export type AvatarItemDisplayNHatUltrareconsquad0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_ultrareconsquad_0",
	{
		displayStringId: "n_hat_ultrareconsquad_0_display_name";
		iconAddress: "n_hat_ultrareconsquad_0_icon";
	}
>;
export type AvatarItemDisplayNHatUltrareconsquadb0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_ultrareconsquadb_0",
	{
		displayStringId: "n_hat_ultrareconsquadb_0_display_name";
		iconAddress: "n_hat_ultrareconsquadb_0_icon";
	}
>;
export type AvatarItemDisplayNHatUnequip0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_unequip_0",
	{
		displayStringId: "n_hat_unequip_0_display_name";
		iconAddress: "n_hat_empty_0_icon";
	}
>;
export type AvatarItemDisplayNHatVerizon20210 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_verizon2021_0",
	{
		displayStringId: "n_hat_verizon2021_0_display_name";
		iconAddress: "n_hat_verizon2021_0_icon";
	}
>;
export type AvatarItemDisplayNHatWcs2022winnersitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_wcs2022winnersitems_0",
	{
		displayStringId: "n_hat_wcs2022winnersitems_0_display_name";
		iconAddress: "n_hat_wcs2022winnersitems_0_icon";
	}
>;
export type AvatarItemDisplayNHatWcs2024paiditems0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_wcs2024paiditems_0",
	{
		displayStringId: "avatar_hat_wcs2024";
		iconAddress: "n_hat_wcs2024paiditems_0_icon";
	}
>;
export type AvatarItemDisplayNHatWcs20250 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_wcs2025_0",
	{
		displayStringId: "avatar_hat_wcs2025visor";
		iconAddress: "n_hat_wcs2025_0_icon";
	}
>;
export type AvatarItemDisplayNHatWcs2025winnersitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_wcs2025winnersitems_0",
	{
		displayStringId: "avatar_hat_wcs2025champion";
		iconAddress: "n_hat_wcs2025winnersitems_0_icon";
	}
>;
export type AvatarItemDisplayNHatWhimsicottearmuff0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_whimsicottearmuff_0",
	{
		displayStringId: "n_hat_whimsicottearmuff_0_display_name";
		iconAddress: "n_hat_whimsicottearmuff_0_icon";
	}
>;
export type AvatarItemDisplayNHatWillowglasses0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_willowglasses_0",
	{
		displayStringId: "n_hat_willowglasses_0 _display_name";
		iconAddress: "n_hat_willowglasses_0_icon";
	}
>;
export type AvatarItemDisplayNHatWoobatearrings0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_woobatearrings_0",
	{
		displayStringId: "n_hat_woobatearrings_0_display_name";
		iconAddress: "n_hat_woobatearrings_0_icon";
	}
>;
export type AvatarItemDisplayNHatXerneasitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_xerneasitems_0",
	{
		displayStringId: "avatar_hat_xerneas";
		iconAddress: "n_hat_xerneasitems_0_icon";
	}
>;
export type AvatarItemDisplayNHatYamaskhat0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_yamaskhat_0",
	{
		displayStringId: "n_hat_yamaskhat_0_display_name";
		iconAddress: "n_hat_yamaskhat_0_icon";
	}
>;
export type AvatarItemDisplayNHatYamaskmask0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_yamaskmask_0",
	{
		displayStringId: "n_hat_yamaskmask_0_display_name";
		iconAddress: "n_hat_yamaskmask_0_icon";
	}
>;
export type AvatarItemDisplayNHatZacianmask0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_zacianmask_0",
	{
		displayStringId: "avatar_mask_zacian";
		iconAddress: "n_hat_zacianmask_0_icon";
	}
>;
export type AvatarItemDisplayNHatZacostumeA0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_zacostume_a_0",
	{
		displayStringId: "avatar_n_hat_zacostume_a";
		iconAddress: "n_hat_zacostume_a_0_icon";
	}
>;
export type AvatarItemDisplayNHatZacostumeB0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_zacostume_b_0",
	{
		displayStringId: "avatar_n_hat_zacostume_b";
		iconAddress: "n_hat_zacostume_b_0_icon";
	}
>;
export type AvatarItemDisplayNHatZamazentamask0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_zamazentamask_0",
	{
		displayStringId: "avatar_mask_zamazenta";
		iconAddress: "n_hat_zamazentamask_0_icon";
	}
>;
export type AvatarItemDisplayNHatZubathat0 = AvatarItemDisplay<
	"N_DISPLAY_n_hat_zubathat_0",
	{
		displayStringId: "n_hat_zubathat_0_display_name";
		iconAddress: "n_hat_zubathat_0_icon";
	}
>;
export type AvatarItemDisplayNIdle01 = AvatarItemDisplay<
	"N_DISPLAY_n_idle_01",
	{
		displayStringId: "n_pose_empty_display_name";
		iconAddress: "f_poses_empty_icon";
	}
>;
export type AvatarItemDisplayNNecklaceDefault0 = AvatarItemDisplay<
	"N_DISPLAY_n_necklace_default_0",
	{
		displayStringId: "n_necklace_default_0_display_name";
		iconAddress: "n_necklace_default_0_icon";
	}
>;
export type AvatarItemDisplayNNecklaceDefault1 = AvatarItemDisplay<
	"N_DISPLAY_n_necklace_default_1",
	{
		displayStringId: "n_necklace_default_0_display_name";
		iconAddress: "n_necklace_default_1_icon";
	}
>;
export type AvatarItemDisplayNNecklaceHeart0 = AvatarItemDisplay<
	"N_DISPLAY_n_necklace_heart_0",
	{
		displayStringId: "n_necklace_heart_0_display_name";
		iconAddress: "n_necklace_heart_0_icon";
	}
>;
export type AvatarItemDisplayNNecklaceStar0 = AvatarItemDisplay<
	"N_DISPLAY_n_necklace_star_0",
	{
		displayStringId: "n_necklace_star_0_display_name";
		iconAddress: "n_necklace_star_0_icon";
	}
>;
export type AvatarItemDisplayNNecklaceUnequip0 = AvatarItemDisplay<
	"N_DISPLAY_n_necklace_unequip_0",
	{
		displayStringId: "n_necklace_unequip_0_display_name";
		iconAddress: "n_necklace_empty_0_icon";
	}
>;
export type AvatarItemDisplayNPants6thanniversary0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_6thanniversary_0",
	{
		displayStringId: "n_pants_6thanniversary_0_display_name";
		iconAddress: "n_pants_6thanniversary_0_icon";
	}
>;
export type AvatarItemDisplayNPants7thanniversary0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_7thanniversary_0",
	{
		displayStringId: "n_pants_7thanniversary_0_display_name";
		iconAddress: "n_pants_7thanniversary_0_icon";
	}
>;
export type AvatarItemDisplayNPantsAcetrainerbwA0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_acetrainerbw_a_0",
	{
		displayStringId: "n_pants_acetrainerbw_a_0_display_name";
		iconAddress: "n_pants_acetrainerbw_a_0_icon";
	}
>;
export type AvatarItemDisplayNPantsAcetrainerbwB0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_acetrainerbw_b_0",
	{
		displayStringId: "n_pants_acetrainerbw_b_0_display_name";
		iconAddress: "n_pants_acetrainerbw_b_0_icon";
	}
>;
export type AvatarItemDisplayNPantsAcetrainersm0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_acetrainersm_0",
	{
		displayStringId: "n_pants_acetrainersm_0_display_name";
		iconAddress: "n_pants_acetrainersm_0_icon";
	}
>;
export type AvatarItemDisplayNPantsAnimegou0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_animegou_0",
	{
		displayStringId: "n_pants_animegou_0_display_name";
		iconAddress: "n_pants_animegou_0_icon";
	}
>;
export type AvatarItemDisplayNPantsBackpackerA0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_backpacker_a_0",
	{
		displayStringId: "n_pants_backpacker_a_0_display_name";
		iconAddress: "n_pants_backpacker_a_0_icon";
	}
>;
export type AvatarItemDisplayNPantsBackpackerB0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_backpacker_b_0",
	{
		displayStringId: "n_pants_backpacker_b_0_display_name";
		iconAddress: "n_pants_backpacker_b_0_icon";
	}
>;
export type AvatarItemDisplayNPantsBattlegirl0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_battlegirl_0",
	{
		displayStringId: "n_pants_battlegirl_0_display_name";
		iconAddress: "n_pants_battlegirl_0_icon";
	}
>;
export type AvatarItemDisplayNPantsBlackwhite0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_blackwhite_0",
	{
		displayStringId: "avatar_pants_bwpants";
		iconAddress: "n_pants_blackwhite_0_icon";
	}
>;
export type AvatarItemDisplayNPantsBounsweetitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_bounsweetitems_0",
	{
		displayStringId: "n_pants_bounsweetitems_0_display_name";
		iconAddress: "n_pants_bounsweetitems_0_icon";
	}
>;
export type AvatarItemDisplayNPantsBrock0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_brock_0",
	{
		displayStringId: "n_pants_brock_0_display_name";
		iconAddress: "n_pants_brock_0_icon";
	}
>;
export type AvatarItemDisplayNPantsBwn0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_bwn_0",
	{
		displayStringId: "n_pants_bwn_0_display_name";
		iconAddress: "n_pants_bwn_0_icon";
	}
>;
export type AvatarItemDisplayNPantsCasualA0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_casual_a_0",
	{
		displayStringId: "n_pants_casual_b_0_display_name";
		iconAddress: "n_pants_casual_a_0_icon";
	}
>;
export type AvatarItemDisplayNPantsCasualA1 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_casual_a_1",
	{
		displayStringId: "n_pants_casual_b_1_display_name";
		iconAddress: "n_pants_casual_a_1_icon";
	}
>;
export type AvatarItemDisplayNPantsCasualB0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_casual_b_0",
	{
		displayStringId: "n_pants_casual_b_0_display_name";
		iconAddress: "n_pants_casual_b_0_icon";
	}
>;
export type AvatarItemDisplayNPantsCasualB1 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_casual_b_1",
	{
		displayStringId: "n_pants_casual_b_1_display_name";
		iconAddress: "n_pants_casual_b_1_icon";
	}
>;
export type AvatarItemDisplayNPantsClay0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_clay_0",
	{
		displayStringId: "n_pants_clay_0_display_name";
		iconAddress: "n_pants_clay_0_icon";
	}
>;
export type AvatarItemDisplayNPantsDefaultNew0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_default-new_0",
	{
		displayStringId: "n_pants_default-new_0_display_name";
		iconAddress: "n_pants_defaultnew_0_icon";
	}
>;
export type AvatarItemDisplayNPantsDefaultA0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_default_a_0",
	{
		displayStringId: "n_pants_default_a_0_display_name";
		iconAddress: "n_pants_default_a_0_icon";
	}
>;
export type AvatarItemDisplayNPantsDefaultA1 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_default_a_1",
	{
		displayStringId: "n_pants_default_a_0_display_name";
		iconAddress: "n_pants_default_a_1_icon";
	}
>;
export type AvatarItemDisplayNPantsDefaultA2 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_default_a_2",
	{
		displayStringId: "n_pants_default_a_0_display_name";
		iconAddress: "n_pants_default_a_2_icon";
	}
>;
export type AvatarItemDisplayNPantsDefaultA3 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_default_a_3",
	{
		displayStringId: "n_pants_default_a_0_display_name";
		iconAddress: "n_pants_default_a_3_icon";
	}
>;
export type AvatarItemDisplayNPantsDefaultA4 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_default_a_4",
	{
		displayStringId: "n_pants_default_a_0_display_name";
		iconAddress: "n_pants_default_a_4_icon";
	}
>;
export type AvatarItemDisplayNPantsDefaultA5 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_default_a_5",
	{
		displayStringId: "n_pants_default_a_0_display_name";
		iconAddress: "n_pants_default_a_5_icon";
	}
>;
export type AvatarItemDisplayNPantsDefaultB0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_default_b_0",
	{
		displayStringId: "n_pants_default_b_0_display_name";
		iconAddress: "n_pants_default_b_0_icon";
	}
>;
export type AvatarItemDisplayNPantsDenimfashionweek20230 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_denimfashionweek2023_0",
	{
		displayStringId: "n_pants_denimfashionweek2023_0_display_name";
		iconAddress: "n_pants_denimfashionweek2023_0_icon";
	}
>;
export type AvatarItemDisplayNPantsDpA0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_dp_a_0",
	{
		displayStringId: "n_pants_dp_a_0_display_name";
		iconAddress: "n_pants_dp_a_0_icon";
	}
>;
export type AvatarItemDisplayNPantsDpB0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_dp_b_0",
	{
		displayStringId: "n_pants_dp_b_0_display_name";
		iconAddress: "n_pants_dp_b_0_icon";
	}
>;
export type AvatarItemDisplayNPantsElesa0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_elesa_0",
	{
		displayStringId: "n_pants_elesa_0_display_name";
		iconAddress: "n_pants_elesa_0_icon";
	}
>;
export type AvatarItemDisplayNPantsEternatussuit0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_eternatussuit_0",
	{
		displayStringId: "avatar_pants_eternatus";
		iconAddress: "n_pants_eternatussuit_0_icon";
	}
>;
export type AvatarItemDisplayNPantsFashionweek20220 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_fashionweek2022_0",
	{
		displayStringId: "n_pants_fashionweek2022_0_display_name";
		iconAddress: "n_pants_fashionweek2022_0_icon";
	}
>;
export type AvatarItemDisplayNPantsFashionweek20250 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_fashionweek2025_0",
	{
		displayStringId: "avatar_pants_plaidpants";
		iconAddress: "n_pants_fashionweek2025_0_icon";
	}
>;
export type AvatarItemDisplayNPantsFisher0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_fisher_0",
	{
		displayStringId: "n_pants_fisher_0_display_name";
		iconAddress: "n_pants_fisher_0_icon";
	}
>;
export type AvatarItemDisplayNPantsFlabebepack0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_flabebepack_0",
	{
		displayStringId: "n_pants_flabebepack_0_display_name";
		iconAddress: "n_pants_flabebepack_0_icon";
	}
>;
export type AvatarItemDisplayNPantsFrlgA0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_frlg_a_0",
	{
		displayStringId: "n_pants_frlg_a_0_display_name";
		iconAddress: "n_pants_frlg_a_0_icon";
	}
>;
export type AvatarItemDisplayNPantsFrlgB0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_frlg_b_0",
	{
		displayStringId: "n_pants_frlg_b_0_display_name";
		iconAddress: "n_pants_frlg_b_0_icon";
	}
>;
export type AvatarItemDisplayNPantsFw2022A0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_fw2022_a_0",
	{
		displayStringId: "n_pants_fw2022_a_0_display_name";
		iconAddress: "n_pants_fw2022_a_0_icon";
	}
>;
export type AvatarItemDisplayNPantsFw2022B0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_fw2022_b_0",
	{
		displayStringId: "n_pants_fw2022_b_0_display_name";
		iconAddress: "n_pants_fw2022_b_0_icon";
	}
>;
export type AvatarItemDisplayNPantsGeeta0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_geeta_0",
	{
		displayStringId: "n_pants_geeta_0_display_name";
		iconAddress: "n_pants_geeta_0_icon";
	}
>;
export type AvatarItemDisplayNPantsGenderlessskirt0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_genderlessskirt_0",
	{
		displayStringId: "n_pants_genderlessskirt_0_display_name";
		iconAddress: "n_pants_genderlessskirt_0_icon";
	}
>;
export type AvatarItemDisplayNPantsGiovanni0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_giovanni_0",
	{
		displayStringId: "n_pants_giovanni_0_display_name";
		iconAddress: "n_pants_giovanni_0_icon";
	}
>;
export type AvatarItemDisplayNPantsGladion0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_gladion_0",
	{
		displayStringId: "n_pants_gladion_0_display_name";
		iconAddress: "n_pants_gladion_0_icon";
	}
>;
export type AvatarItemDisplayNPantsGothitelleitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_gothitelleitems_0",
	{
		displayStringId: "n_pants_gothitelleitems_0_display_name";
		iconAddress: "n_pants_gothitelleitems_0_icon";
	}
>;
export type AvatarItemDisplayNPantsGreenA0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_green_a_0",
	{
		displayStringId: "n_pants_green_a_0_display_name";
		iconAddress: "n_pants_green_a_0_icon";
	}
>;
export type AvatarItemDisplayNPantsGreenB0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_green_b_0",
	{
		displayStringId: "n_pants_green_b_0_display_name";
		iconAddress: "n_pants_green_b_0_icon";
	}
>;
export type AvatarItemDisplayNPantsGreencoat0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_greencoat_0",
	{
		displayStringId: "n_pants_greencoat_0_display_name";
		iconAddress: "n_pants_greencoat_0_icon";
	}
>;
export type AvatarItemDisplayNPantsGreenpikavee0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_greenpikavee_0",
	{
		displayStringId: "avatar_pants_s22blue";
		iconAddress: "n_pants_greenpikavee_0_icon";
	}
>;
export type AvatarItemDisplayNPantsGrimsley0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_grimsley_0",
	{
		displayStringId: "avatar_pants_gblgrimsley";
		iconAddress: "n_pants_grimsley_0_icon";
	}
>;
export type AvatarItemDisplayNPantsGrusha0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_grusha_0",
	{
		displayStringId: "avatar_pants_grusha";
		iconAddress: "n_pants_grusha_0_icon";
	}
>;
export type AvatarItemDisplayNPantsGuzma0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_guzma_0",
	{
		displayStringId: "n_pants_guzma_0_display_name";
		iconAddress: "n_pants_guzma_0_icon";
	}
>;
export type AvatarItemDisplayNPantsGymleaderA0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_gymleader_a_0",
	{
		displayStringId: "n_pants_gymleader_a_0_display_name";
		iconAddress: "n_pants_gymleader_a_0_icon";
	}
>;
export type AvatarItemDisplayNPantsGymleaderA1 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_gymleader_a_1",
	{
		displayStringId: "n_pants_gymleader_a_0_display_name";
		iconAddress: "n_pants_gymleader_a_1_icon";
	}
>;
export type AvatarItemDisplayNPantsGymleaderA2 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_gymleader_a_2",
	{
		displayStringId: "n_pants_gymleader_a_0_display_name";
		iconAddress: "n_pants_gymleader_a_2_icon";
	}
>;
export type AvatarItemDisplayNPantsGymleaderB0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_gymleader_b_0",
	{
		displayStringId: "n_pants_gymleader_b_0_display_name";
		iconAddress: "n_pants_gymleader_b_0_icon";
	}
>;
export type AvatarItemDisplayNPantsGymleaderB1 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_gymleader_b_1",
	{
		displayStringId: "n_pants_gymleader_b_0_display_name";
		iconAddress: "n_pants_gymleader_b_1_icon";
	}
>;
export type AvatarItemDisplayNPantsGymleaderB2 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_gymleader_b_2",
	{
		displayStringId: "n_pants_gymleader_b_0_display_name";
		iconAddress: "n_pants_gymleader_b_2_icon";
	}
>;
export type AvatarItemDisplayNPantsHala0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_hala_0",
	{
		displayStringId: "n_pants_hala_0_display_name";
		iconAddress: "n_pants_hala_0_icon";
	}
>;
export type AvatarItemDisplayNPantsHgssA0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_hgss_a_0",
	{
		displayStringId: "n_pants_hgss_a_0_display_name";
		iconAddress: "n_pants_hgss_a_0_icon";
	}
>;
export type AvatarItemDisplayNPantsHgssB0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_hgss_b_0",
	{
		displayStringId: "n_pants_hgss_b_0_display_name";
		iconAddress: "n_pants_hgss_b_0_icon";
	}
>;
export type AvatarItemDisplayNPantsIngo0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_ingo_0",
	{
		displayStringId: "n_shirt_galaxyoutfit_b_0_display_name";
		iconAddress: "n_pants_ingo_0_icon";
	}
>;
export type AvatarItemDisplayNPantsJogger0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_jogger_0",
	{
		displayStringId: "n_pants_jogger_0_display_name";
		iconAddress: "n_pants_jogger_0_icon";
	}
>;
export type AvatarItemDisplayNPantsKorrina0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_korrina_0",
	{
		displayStringId: "n_pants_korrina_0_display_name";
		iconAddress: "n_pants_korrina_0_icon";
	}
>;
export type AvatarItemDisplayNPantsLooseFitting0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_loose-fitting_0",
	{
		displayStringId: "AVATAR_baggypants";
		iconAddress: "n_pants_loose-fitting_0_icon";
	}
>;
export type AvatarItemDisplayNPantsLoosepants0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_loosepants_0",
	{
		displayStringId: "n_pants_loosepants_0_display_name";
		iconAddress: "n_pants_loosepants_0_icon";
	}
>;
export type AvatarItemDisplayNPantsLunalaitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_lunalaitems_0",
	{
		displayStringId: "n_pants_lunalaitems_0_display_name";
		iconAddress: "n_pants_lunalaitems_0_icon";
	}
>;
export type AvatarItemDisplayNPantsLuvdiscpackA0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_luvdiscpack_a_0",
	{
		displayStringId: "n_pants_luvdiscpack_a_0_display_name";
		iconAddress: "n_pants_luvdiscpack_a_0_icon";
	}
>;
export type AvatarItemDisplayNPantsLuvdiscpackB0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_luvdiscpack_b_0",
	{
		displayStringId: "n_pants_luvdiscpack_b_0_display_name";
		iconAddress: "n_pants_luvdiscpack_b_0_icon";
	}
>;
export type AvatarItemDisplayNPantsLvl75Techtrousers0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_lvl75-techtrousers_0",
	{
		displayStringId: "avatar_n_pants_lvl75-techtrousers_0";
		iconAddress: "n_pants_lvl75-techtrousers_0_icon";
	}
>;
export type AvatarItemDisplayNPantsLysandre0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_lysandre_0",
	{
		displayStringId: "n_pants_lysandre_0_display_name";
		iconAddress: "n_pants_lysandre_0_icon";
	}
>;
export type AvatarItemDisplayNPantsMewtwoA0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_mewtwo_a_0",
	{
		displayStringId: "n_pants_mewtwo_a_0_display_name";
		iconAddress: "n_pants_mewtwo_a_0_icon";
	}
>;
export type AvatarItemDisplayNPantsMewtwoB0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_mewtwo_b_0",
	{
		displayStringId: "n_pants_mewtwo_b_0_display_name";
		iconAddress: "n_pants_mewtwo_b_0_icon";
	}
>;
export type AvatarItemDisplayNPantsMiniskirtWave0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_miniskirt-wave_0",
	{
		displayStringId: "n_pants_miniskirt-wave_2_display_name";
		iconAddress: "n_pants_miniskirt-wave_0_icon";
	}
>;
export type AvatarItemDisplayNPantsMiniskirtWave1 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_miniskirt-wave_1",
	{
		displayStringId: "n_pants_miniskirt-wave_2_display_name";
		iconAddress: "n_pants_miniskirt-wave_1_icon";
	}
>;
export type AvatarItemDisplayNPantsMiniskirtWave2 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_miniskirt-wave_2",
	{
		displayStringId: "n_pants_miniskirt-wave_2_display_name";
		iconAddress: "n_pants_miniskirt-wave_2_icon";
	}
>;
export type AvatarItemDisplayNPantsMiniskirt0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_miniskirt_0",
	{
		displayStringId: "n_pants_miniskirt_3_display_name";
		iconAddress: "n_pants_miniskirt_0_icon";
	}
>;
export type AvatarItemDisplayNPantsMiniskirt1 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_miniskirt_1",
	{
		displayStringId: "n_pants_miniskirt_3_display_name";
		iconAddress: "n_pants_miniskirt_1_icon";
	}
>;
export type AvatarItemDisplayNPantsMiniskirt2 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_miniskirt_2",
	{
		displayStringId: "n_pants_miniskirt_3_display_name";
		iconAddress: "n_pants_miniskirt_2_icon";
	}
>;
export type AvatarItemDisplayNPantsMiniskirt3 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_miniskirt_3",
	{
		displayStringId: "n_pants_miniskirt_3_display_name";
		iconAddress: "n_pants_miniskirt_3_icon";
	}
>;
export type AvatarItemDisplayNPantsMisty0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_misty_0",
	{
		displayStringId: "n_pants_misty_0_display_name";
		iconAddress: "n_pants_misty_0_icon";
	}
>;
export type AvatarItemDisplayNPantsMunnapack0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_munnapack_0",
	{
		displayStringId: "n_pants_munnapack_0_display_name";
		iconAddress: "n_pants_munnapack_0_icon";
	}
>;
export type AvatarItemDisplayNPantsMustard0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_mustard_0",
	{
		displayStringId: "avatar_pants_mustard";
		iconAddress: "n_pants_mustard_0_icon";
	}
>;
export type AvatarItemDisplayNPantsNaganadelaitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_naganadelaitems_0",
	{
		displayStringId: "N_Naganadel_Pants";
		iconAddress: "n_pants_naganadelaitems_0_icon";
	}
>;
export type AvatarItemDisplayNPantsNecrozmaitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_necrozmaitems_0",
	{
		displayStringId: "AVATAR_NecrozmaPants";
		iconAddress: "n_pants_necrozmaitems_0_icon";
	}
>;
export type AvatarItemDisplayNPantsNeonSolid0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_neon-solid_0",
	{
		displayStringId: "n_pants_neon-stripes_1_display_name";
		iconAddress: "n_pants_neon-solid_0_icon";
	}
>;
export type AvatarItemDisplayNPantsNeonSolid1 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_neon-solid_1",
	{
		displayStringId: "n_pants_neon-stripes_1_display_name";
		iconAddress: "n_pants_neon-solid_1_icon";
	}
>;
export type AvatarItemDisplayNPantsNeonSolid2 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_neon-solid_2",
	{
		displayStringId: "n_pants_neon-stripes_1_display_name";
		iconAddress: "n_pants_neon-solid_2_icon";
	}
>;
export type AvatarItemDisplayNPantsNeonStripes0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_neon-stripes_0",
	{
		displayStringId: "n_pants_neon-stripes_1_display_name";
		iconAddress: "n_pants_neon-stripes_0_icon";
	}
>;
export type AvatarItemDisplayNPantsNeonStripes1 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_neon-stripes_1",
	{
		displayStringId: "n_pants_neon-stripes_1_display_name";
		iconAddress: "n_pants_neon-stripes_1_icon";
	}
>;
export type AvatarItemDisplayNPantsNewyear20220 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_newyear2022_0",
	{
		displayStringId: "n_pants_newyear2022_0_display_name";
		iconAddress: "n_pants_newyear2022_0_icon";
	}
>;
export type AvatarItemDisplayNPantsOrasA0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_oras_a_0",
	{
		displayStringId: "n_pants_oras_a_0_display_name";
		iconAddress: "n_pants_oras_a_0_icon";
	}
>;
export type AvatarItemDisplayNPantsOrasB0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_oras_b_0",
	{
		displayStringId: "n_pants_oras_b_0_display_name";
		iconAddress: "n_pants_oras_b_0_icon";
	}
>;
export type AvatarItemDisplayNPantsPajamas20220 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_pajamas2022_0",
	{
		displayStringId: "n_pants_pajamas2022_0_display_name";
		iconAddress: "n_pants_pajamas2022_0_icon";
	}
>;
export type AvatarItemDisplayNPantsPajamas20221 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_pajamas2022_1",
	{
		displayStringId: "n_pants_pajamas2022_0_display_name";
		iconAddress: "n_pants_pajamas2022_1_icon";
	}
>;
export type AvatarItemDisplayNPantsPalmer0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_palmer_0",
	{
		displayStringId: "n_pants_palmer_0_display_name";
		iconAddress: "n_pants_palmer_0_icon";
	}
>;
export type AvatarItemDisplayNPantsPikachubutler0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_pikachubutler_0",
	{
		displayStringId: "avatar_pants_suit";
		iconAddress: "n_pants_pikachubutler_0_icon";
	}
>;
export type AvatarItemDisplayNPantsPikachufanA0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_pikachufan_a_0",
	{
		displayStringId: "n_pants_pikachufan_a_0_display_name";
		iconAddress: "n_pants_pikachufan_a_0_icon";
	}
>;
export type AvatarItemDisplayNPantsPikachufanB0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_pikachufan_b_0",
	{
		displayStringId: "n_pants_pikachufan_b_0_display_name";
		iconAddress: "n_pants_pikachufan_b_0_icon";
	}
>;
export type AvatarItemDisplayNPantsPikachulibreA0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_pikachulibre_a_0",
	{
		displayStringId: "n_pants_pikachulibre_a_0_display_name";
		iconAddress: "n_pants_pikachulibre_a_0_icon";
	}
>;
export type AvatarItemDisplayNPantsPikachulibreB0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_pikachulibre_b_0",
	{
		displayStringId: "n_pants_pikachulibre_b_0_display_name";
		iconAddress: "n_pants_pikachulibre_b_0_icon";
	}
>;
export type AvatarItemDisplayNPantsProfwillowoutfit0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_profwillowoutfit_0",
	{
		displayStringId: "n_pants_profwillowoutfit_0_display_name";
		iconAddress: "n_pants_profwillowoutfit_0_icon";
	}
>;
export type AvatarItemDisplayNPantsPumpkabooitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_pumpkabooitems_0",
	{
		displayStringId: "n_pants_pumpkabooitems_0_display_name";
		iconAddress: "n_pants_pumpkabooitems_0_icon";
	}
>;
export type AvatarItemDisplayNPantsRegiicejersies0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_regiicejersies_0",
	{
		displayStringId: "n_pants_regiicejersies_0_display_name";
		iconAddress: "n_pants_regiicejersies_0_icon";
	}
>;
export type AvatarItemDisplayNPantsRegirockjersies0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_regirockjersies_0",
	{
		displayStringId: "n_pants_regirockjersies_0_display_name";
		iconAddress: "n_pants_regirockjersies_0_icon";
	}
>;
export type AvatarItemDisplayNPantsRegisteeljersies0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_registeeljersies_0",
	{
		displayStringId: "n_pants_registeeljersies_0_display_name";
		iconAddress: "n_pants_registeeljersies_0_icon";
	}
>;
export type AvatarItemDisplayNPantsS19gbl0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_s19gbl_0",
	{
		displayStringId: "avatar_pants_gbl19";
		iconAddress: "n_pants_s19gbl_0_icon";
	}
>;
export type AvatarItemDisplayNPantsShorts0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_shorts_0",
	{
		displayStringId: "n_pants_shorts_3_display_name";
		iconAddress: "n_pants_shorts_0_icon";
	}
>;
export type AvatarItemDisplayNPantsShorts1 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_shorts_1",
	{
		displayStringId: "n_pants_shorts_3_display_name";
		iconAddress: "n_pants_shorts_1_icon";
	}
>;
export type AvatarItemDisplayNPantsShorts2 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_shorts_2",
	{
		displayStringId: "n_pants_shorts_3_display_name";
		iconAddress: "n_pants_shorts_2_icon";
	}
>;
export type AvatarItemDisplayNPantsShorts3 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_shorts_3",
	{
		displayStringId: "n_pants_shorts_3_display_name";
		iconAddress: "n_pants_shorts_3_icon";
	}
>;
export type AvatarItemDisplayNPantsSkinnyjeansA0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_skinnyjeans_a_0",
	{
		displayStringId: "n_pants_skinnyjeans_a_0_display_name";
		iconAddress: "n_pants_skinnyjeans_a_0_icon";
	}
>;
export type AvatarItemDisplayNPantsSkinnyjeansB0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_skinnyjeans_b_0",
	{
		displayStringId: "n_pants_skinnyjeans_b_0_display_name";
		iconAddress: "n_pants_skinnyjeans_b_0_icon";
	}
>;
export type AvatarItemDisplayNPantsSkinnyjeansB1 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_skinnyjeans_b_1",
	{
		displayStringId: "n_pants_skinnyjeans_b_0_display_name";
		iconAddress: "n_pants_skinnyjeans_b_1_icon";
	}
>;
export type AvatarItemDisplayNPantsSkinnyjeansB2 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_skinnyjeans_b_2",
	{
		displayStringId: "n_pants_skinnyjeans_b_0_display_name";
		iconAddress: "n_pants_skinnyjeans_b_2_icon";
	}
>;
export type AvatarItemDisplayNPantsSs0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_ss_0",
	{
		displayStringId: "n_pants_ss_0_display_name";
		iconAddress: "n_pants_ss_0_icon";
	}
>;
export type AvatarItemDisplayNPantsSteven0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_steven_0",
	{
		displayStringId: "n_pants_steven_0_display_name";
		iconAddress: "n_pants_steven_0_icon";
	}
>;
export type AvatarItemDisplayNPantsStevenfirst0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_stevenfirst_0",
	{
		displayStringId: "n_pants_stevenfirst_0_display_name";
		iconAddress: "n_pants_stevenfirst_0_icon";
	}
>;
export type AvatarItemDisplayNPantsSweats0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_sweats_0",
	{
		displayStringId: "n_pants_sweats_0_display_name";
		iconAddress: "n_pants_sweats_0_icon";
	}
>;
export type AvatarItemDisplayNPantsSweats1 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_sweats_1",
	{
		displayStringId: "n_pants_sweats_0_display_name";
		iconAddress: "n_pants_sweats_1_icon";
	}
>;
export type AvatarItemDisplayNPantsSweats2 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_sweats_2",
	{
		displayStringId: "n_pants_sweats_0_display_name";
		iconAddress: "n_pants_sweats_2_icon";
	}
>;
export type AvatarItemDisplayNPantsSweats3 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_sweats_3",
	{
		displayStringId: "n_pants_sweats_0_display_name";
		iconAddress: "n_pants_sweats_3_icon";
	}
>;
export type AvatarItemDisplayNPantsSweats4 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_sweats_4",
	{
		displayStringId: "n_pants_sweats_0_display_name";
		iconAddress: "n_pants_sweats_4_icon";
	}
>;
export type AvatarItemDisplayNPantsSwshuniformchampion0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_swshuniformchampion_0",
	{
		displayStringId: "n_pants_swshuniformchampion_0_display_name";
		iconAddress: "n_pants_swshuniformchampion_0_icon";
	}
>;
export type AvatarItemDisplayNPantsSwshuniformdarkA0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_swshuniformdark_a_0",
	{
		displayStringId: "n_pants_swshuniformdark_a_0_display_name";
		iconAddress: "n_pants_swshuniformdark_a_0_icon";
	}
>;
export type AvatarItemDisplayNPantsSwshuniformdarkB0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_swshuniformdark_b_0",
	{
		displayStringId: "n_pants_swshuniformdark_b_0_display_name";
		iconAddress: "n_pants_swshuniformdark_b_0_icon";
	}
>;
export type AvatarItemDisplayNPantsSwshuniformdefaultA0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_swshuniformdefault_a_0",
	{
		displayStringId: "n_pants_swshuniformdefault_a_0_display_name";
		iconAddress: "n_pants_swshuniformdefault_a_0_icon";
	}
>;
export type AvatarItemDisplayNPantsSwshuniformdefaultB0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_swshuniformdefault_b_0",
	{
		displayStringId: "n_pants_swshuniformdefault_b_0_display_name";
		iconAddress: "n_pants_swshuniformdefault_b_0_icon";
	}
>;
export type AvatarItemDisplayNPantsSwshuniformdragonA0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_swshuniformdragon_a_0",
	{
		displayStringId: "n_pants_swshuniformdragon_a_0_display_name";
		iconAddress: "n_pants_swshuniformdragon_a_0_icon";
	}
>;
export type AvatarItemDisplayNPantsSwshuniformdragonB0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_swshuniformdragon_b_0",
	{
		displayStringId: "n_pants_swshuniformdragon_b_0_display_name";
		iconAddress: "n_pants_swshuniformdragon_b_0_icon";
	}
>;
export type AvatarItemDisplayNPantsTeamaquaA0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_teamaqua_a_0",
	{
		displayStringId: "n_pants_teamaqua_a_0_display_name";
		iconAddress: "n_pants_teamaqua_a_0_icon";
	}
>;
export type AvatarItemDisplayNPantsTeamaquaB0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_teamaqua_b_0",
	{
		displayStringId: "n_pants_teamaqua_b_0_display_name";
		iconAddress: "n_pants_teamaqua_b_0_icon";
	}
>;
export type AvatarItemDisplayNPantsTeamblancheA0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_teamblanche_a_0",
	{
		displayStringId: "n_pants_teamblanche_a_0_display_name";
		iconAddress: "n_pants_teamblanche_a_0_icon";
	}
>;
export type AvatarItemDisplayNPantsTeamblancheB0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_teamblanche_b_0",
	{
		displayStringId: "n_pants_teamblanche_b_0_display_name";
		iconAddress: "n_pants_teamblanche_b_0_icon";
	}
>;
export type AvatarItemDisplayNPantsTeamcandelaA0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_teamcandela_a_0",
	{
		displayStringId: "n_pants_teamcandela_a_0_display_name";
		iconAddress: "n_pants_teamcandela_a_0_icon";
	}
>;
export type AvatarItemDisplayNPantsTeamcandelaB0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_teamcandela_b_0",
	{
		displayStringId: "n_pants_teamcandela_b_0_display_name";
		iconAddress: "n_pants_teamcandela_b_0_icon";
	}
>;
export type AvatarItemDisplayNPantsTeammagmaA0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_teammagma_a_0",
	{
		displayStringId: "n_pants_teammagma_a_0_display_name";
		iconAddress: "n_pants_teammagma_a_0_icon";
	}
>;
export type AvatarItemDisplayNPantsTeammagmaB0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_teammagma_b_0",
	{
		displayStringId: "n_pants_teammagma_b_0_display_name";
		iconAddress: "n_pants_teammagma_b_0_icon";
	}
>;
export type AvatarItemDisplayNPantsTeamrocketA0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_teamrocket_a_0",
	{
		displayStringId: "n_pants_teamrocket_a_0_display_name";
		iconAddress: "n_pants_teamrocket_a_0_icon";
	}
>;
export type AvatarItemDisplayNPantsTeamrocketB0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_teamrocket_b_0",
	{
		displayStringId: "n_pants_teamrocket_b_0_display_name";
		iconAddress: "n_pants_teamrocket_b_0_icon";
	}
>;
export type AvatarItemDisplayNPantsTeamskullA0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_teamskull_a_0",
	{
		displayStringId: "n_pants_teamskull_a_0_display_name";
		iconAddress: "n_pants_teamskull_a_0_icon";
	}
>;
export type AvatarItemDisplayNPantsTeamskullB0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_teamskull_b_0",
	{
		displayStringId: "n_pants_teamskull_b_0_display_name";
		iconAddress: "n_pants_teamskull_b_0_icon";
	}
>;
export type AvatarItemDisplayNPantsTeamsparkA0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_teamspark_a_0",
	{
		displayStringId: "n_pants_teamspark_a_0_display_name";
		iconAddress: "n_pants_teamspark_a_0_icon";
	}
>;
export type AvatarItemDisplayNPantsTeamsparkB0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_teamspark_b_0",
	{
		displayStringId: "n_pants_teamspark_b_0_display_name";
		iconAddress: "n_pants_teamspark_b_0_icon";
	}
>;
export type AvatarItemDisplayNPantsTeamyellgruntsPants0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_teamyellgrunts-pants_0",
	{
		displayStringId: "avatar_pants_teamyellpants";
		iconAddress: "n_pants_teamyellgrunts-pants_0_icon";
	}
>;
export type AvatarItemDisplayNPantsTeamyellgruntsSkirt0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_teamyellgrunts-skirt_0",
	{
		displayStringId: "avatar_pants_teamyellskirt";
		iconAddress: "n_pants_teamyellgrunts-skirt_0_icon";
	}
>;
export type AvatarItemDisplayNPantsTurbine0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_turbine_0",
	{
		displayStringId: "n_pants_turbine_2_display_name";
		iconAddress: "n_pants_turbine_0_icon";
	}
>;
export type AvatarItemDisplayNPantsTurbine1 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_turbine_1",
	{
		displayStringId: "n_pants_turbine_2_display_name";
		iconAddress: "n_pants_turbine_1_icon";
	}
>;
export type AvatarItemDisplayNPantsTurbine2 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_turbine_2",
	{
		displayStringId: "n_pants_turbine_2_display_name";
		iconAddress: "n_pants_turbine_2_icon";
	}
>;
export type AvatarItemDisplayNPantsUltraA0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_ultra_a_0",
	{
		displayStringId: "n_pants_ultra_a_0_display_name";
		iconAddress: "n_pants_ultra_a_0_icon";
	}
>;
export type AvatarItemDisplayNPantsUltraB0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_ultra_b_0",
	{
		displayStringId: "n_pants_ultra_b_0_display_name";
		iconAddress: "n_pants_ultra_b_0_icon";
	}
>;
export type AvatarItemDisplayNPantsVeterantrainerxyA0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_veterantrainerxy_a_0",
	{
		displayStringId: "n_pants_veterantrainerxy_a_0_display_name";
		iconAddress: "n_pants_veterantrainerxy_a_0_icon";
	}
>;
export type AvatarItemDisplayNPantsVeterantrainerxyB0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_veterantrainerxy_b_0",
	{
		displayStringId: "n_pants_veterantrainerxy_b_0_display_name";
		iconAddress: "n_pants_veterantrainerxy_b_0_icon";
	}
>;
export type AvatarItemDisplayNPantsWcs2022winnersitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_wcs2022winnersitems_0",
	{
		displayStringId: "n_pants_wcs2022winnersitems_0_display_name";
		iconAddress: "n_pants_wcs2022winnersitems_0_icon";
	}
>;
export type AvatarItemDisplayNPantsWcs2024winnersitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_wcs2024winnersitems_0",
	{
		displayStringId: "avatar_pants_wcs2024champion";
		iconAddress: "n_pants_wcs2024winnersitems_0_icon";
	}
>;
export type AvatarItemDisplayNPantsWcs2025winnersitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_pants_wcs2025winnersitems_0",
	{
		displayStringId: "avatar_pants_wcs2025champion";
		iconAddress: "n_pants_wcs2025winnersitems_0_icon";
	}
>;
export type AvatarItemDisplayNPose001 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_001",
	{
		displayStringId: "n_pose_001_display_name";
		iconAddress: "pose_01";
	}
>;
export type AvatarItemDisplayNPose002 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_002",
	{
		displayStringId: "n_pose_002_display_name";
		iconAddress: "pose_12";
	}
>;
export type AvatarItemDisplayNPose003 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_003",
	{
		displayStringId: "n_pose_003_display_name";
		iconAddress: "pose_03";
	}
>;
export type AvatarItemDisplayNPose004 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_004",
	{
		displayStringId: "n_pose_004_display_name";
		iconAddress: "pose_14";
	}
>;
export type AvatarItemDisplayNPose005 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_005",
	{
		displayStringId: "n_pose_005_display_name";
		iconAddress: "pose_05";
	}
>;
export type AvatarItemDisplayNPose006 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_006",
	{
		displayStringId: "n_pose_006_display_name";
		iconAddress: "pose_06";
	}
>;
export type AvatarItemDisplayNPose007 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_007",
	{
		displayStringId: "n_pose_007_display_name";
		iconAddress: "pose_07";
	}
>;
export type AvatarItemDisplayNPose008 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_008",
	{
		displayStringId: "n_pose_008_display_name";
		iconAddress: "pose_18";
	}
>;
export type AvatarItemDisplayNPose009 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_009",
	{
		displayStringId: "n_pose_009_display_name";
		iconAddress: "pose_09";
	}
>;
export type AvatarItemDisplayNPose010 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_010",
	{
		displayStringId: "n_pose_010_display_name";
		iconAddress: "pose_20";
	}
>;
export type AvatarItemDisplayNPose011 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_011",
	{
		displayStringId: "n_pose_011_display_name";
		iconAddress: "pose_11";
	}
>;
export type AvatarItemDisplayNPose012 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_012",
	{
		displayStringId: "n_pose_012_display_name";
		iconAddress: "pose_02";
	}
>;
export type AvatarItemDisplayNPose013 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_013",
	{
		displayStringId: "n_pose_013_display_name";
		iconAddress: "pose_13";
	}
>;
export type AvatarItemDisplayNPose014 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_014",
	{
		displayStringId: "n_pose_014_display_name";
		iconAddress: "pose_04";
	}
>;
export type AvatarItemDisplayNPose015 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_015",
	{
		displayStringId: "n_pose_015_display_name";
		iconAddress: "pose_15";
	}
>;
export type AvatarItemDisplayNPose016 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_016",
	{
		displayStringId: "n_pose_016_display_name";
		iconAddress: "pose_16";
	}
>;
export type AvatarItemDisplayNPose017 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_017",
	{
		displayStringId: "n_pose_017_display_name";
		iconAddress: "pose_17";
	}
>;
export type AvatarItemDisplayNPose018 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_018",
	{
		displayStringId: "n_pose_018_display_name";
		iconAddress: "pose_08";
	}
>;
export type AvatarItemDisplayNPose019 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_019",
	{
		displayStringId: "n_pose_019_display_name";
		iconAddress: "pose_19";
	}
>;
export type AvatarItemDisplayNPose020 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_020",
	{
		displayStringId: "n_pose_020_display_name";
		iconAddress: "pose_10";
	}
>;
export type AvatarItemDisplayNPose021 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_021",
	{
		displayStringId: "n_pose_021_display_name";
		iconAddress: "pose_21";
	}
>;
export type AvatarItemDisplayNPose022 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_022",
	{
		displayStringId: "n_pose_022_display_name";
		iconAddress: "pose_22";
	}
>;
export type AvatarItemDisplayNPose023 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_023",
	{
		displayStringId: "n_pose_023_display_name";
		iconAddress: "pose_23";
	}
>;
export type AvatarItemDisplayNPose024 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_024",
	{
		displayStringId: "n_pose_024_display_name";
		iconAddress: "pose_24";
	}
>;
export type AvatarItemDisplayNPose025 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_025",
	{
		displayStringId: "n_pose_025_display_name";
		iconAddress: "pose_25";
	}
>;
export type AvatarItemDisplayNPose026 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_026",
	{
		displayStringId: "n_pose_026_display_name";
		iconAddress: "pose_26";
	}
>;
export type AvatarItemDisplayNPose027 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_027",
	{
		displayStringId: "n_pose_027_display_name";
		iconAddress: "pose_27";
	}
>;
export type AvatarItemDisplayNPose028 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_028",
	{
		displayStringId: "n_pose_028_display_name";
		iconAddress: "pose_28";
	}
>;
export type AvatarItemDisplayNPose029 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_029",
	{
		displayStringId: "n_pose_029_display_name";
		iconAddress: "pose_29";
	}
>;
export type AvatarItemDisplayNPose030 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_030",
	{
		displayStringId: "n_pose_030_display_name";
		iconAddress: "pose_30";
	}
>;
export type AvatarItemDisplayNPose031 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_031",
	{
		displayStringId: "n_pose_031_display_name";
		iconAddress: "pose_31";
	}
>;
export type AvatarItemDisplayNPose032 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_032",
	{
		displayStringId: "n_pose_032_display_name";
		iconAddress: "pose_32";
	}
>;
export type AvatarItemDisplayNPose032A = AvatarItemDisplay<
	"N_DISPLAY_n_pose_032_a",
	{
		displayStringId: "n_pose_032_a_display_name";
		iconAddress: "pose_01";
	}
>;
export type AvatarItemDisplayNPose033 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_033",
	{
		displayStringId: "n_pose_033_display_name";
		iconAddress: "pose_33";
	}
>;
export type AvatarItemDisplayNPose034 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_034",
	{
		displayStringId: "n_pose_034_display_name";
		iconAddress: "pose_34";
	}
>;
export type AvatarItemDisplayNPose035 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_035",
	{
		displayStringId: "n_pose_035_display_name";
		iconAddress: "pose_35";
	}
>;
export type AvatarItemDisplayNPose036 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_036",
	{
		displayStringId: "n_pose_036_display_name";
		iconAddress: "pose_36";
	}
>;
export type AvatarItemDisplayNPose037 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_037",
	{
		displayStringId: "n_pose_037_display_name";
		iconAddress: "pose_37";
	}
>;
export type AvatarItemDisplayNPose038 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_038",
	{
		displayStringId: "n_pose_038_display_name";
		iconAddress: "pose_38";
	}
>;
export type AvatarItemDisplayNPose039 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_039",
	{
		displayStringId: "n_pose_039_display_name";
		iconAddress: "n_pose_039_icon";
	}
>;
export type AvatarItemDisplayNPose040 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_040",
	{
		displayStringId: "n_pose_040_display_name";
		iconAddress: "pose_40";
	}
>;
export type AvatarItemDisplayNPose041 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_041",
	{
		displayStringId: "n_pose_041_display_name";
		iconAddress: "pose_41";
	}
>;
export type AvatarItemDisplayNPose042 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_042",
	{
		displayStringId: "n_pose_042_display_name";
		iconAddress: "pose_42";
	}
>;
export type AvatarItemDisplayNPose043 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_043",
	{
		displayStringId: "n_pose_043_display_name";
		iconAddress: "pose_43";
	}
>;
export type AvatarItemDisplayNPose044 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_044",
	{
		displayStringId: "n_pose_044_display_name";
		iconAddress: "pose_44";
	}
>;
export type AvatarItemDisplayNPose045 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_045",
	{
		displayStringId: "n_pose_045_display_name";
		iconAddress: "pose_45";
	}
>;
export type AvatarItemDisplayNPose046 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_046",
	{
		displayStringId: "n_pose_046_display_name";
		iconAddress: "pose_46";
	}
>;
export type AvatarItemDisplayNPose047 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_047",
	{
		displayStringId: "n_pose_047_display_name";
		iconAddress: "pose_47";
	}
>;
export type AvatarItemDisplayNPose048 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_048",
	{
		displayStringId: "n_pose_048_display_name";
		iconAddress: "pose_48";
	}
>;
export type AvatarItemDisplayNPose049 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_049",
	{
		displayStringId: "n_pose_049_display_name";
		iconAddress: "pose_49";
	}
>;
export type AvatarItemDisplayNPose050 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_050",
	{
		displayStringId: "n_pose_050_display_name";
		iconAddress: "pose_50";
	}
>;
export type AvatarItemDisplayNPose051 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_051",
	{
		displayStringId: "n_pose_051_display_name";
		iconAddress: "pose_51";
	}
>;
export type AvatarItemDisplayNPose052 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_052",
	{
		displayStringId: "n_pose_052_display_name";
		iconAddress: "pose_52";
	}
>;
export type AvatarItemDisplayNPose053 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_053",
	{
		displayStringId: "n_pose_053_display_name";
		iconAddress: "pose_53";
	}
>;
export type AvatarItemDisplayNPose054 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_054",
	{
		displayStringId: "n_pose_054_display_name";
		iconAddress: "pose_54";
	}
>;
export type AvatarItemDisplayNPose055 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_055",
	{
		displayStringId: "n_pose_055_display_name";
		iconAddress: "pose_55";
	}
>;
export type AvatarItemDisplayNPose056 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_056",
	{
		displayStringId: "n_pose_056_display_name";
		iconAddress: "pose_56";
	}
>;
export type AvatarItemDisplayNPose057 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_057",
	{
		displayStringId: "n_pose_057_display_name";
		iconAddress: "pose_57";
	}
>;
export type AvatarItemDisplayNPose058 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_058",
	{
		displayStringId: "n_pose_058_display_name";
		iconAddress: "pose_58";
	}
>;
export type AvatarItemDisplayNPose059 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_059",
	{
		displayStringId: "n_pose_059_display_name";
		iconAddress: "pose_59";
	}
>;
export type AvatarItemDisplayNPose060 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_060",
	{
		displayStringId: "n_pose_060_display_name";
		iconAddress: "pose_60";
	}
>;
export type AvatarItemDisplayNPose061 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_061",
	{
		displayStringId: "n_pose_061_display_name";
		iconAddress: "pose_61";
	}
>;
export type AvatarItemDisplayNPose062 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_062",
	{
		displayStringId: "n_pose_062_display_name";
		iconAddress: "pose_62";
	}
>;
export type AvatarItemDisplayNPose063 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_063",
	{
		displayStringId: "N_GO_Fest _Pose_Alola Greeting";
		iconAddress: "pose_63";
	}
>;
export type AvatarItemDisplayNPose064 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_064",
	{
		displayStringId: "AVATAR_LanaPose";
		iconAddress: "pose_64";
	}
>;
export type AvatarItemDisplayNPose065 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_065",
	{
		displayStringId: "avatar_pose_wcs2024";
		iconAddress: "n_pose_065_icon";
	}
>;
export type AvatarItemDisplayNPose066 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_066",
	{
		displayStringId: "avatar_pose_gblallister";
		iconAddress: "n_pose_066_icon";
	}
>;
export type AvatarItemDisplayNPose067 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_067",
	{
		displayStringId: "avatar_pose_gblgrimsley";
		iconAddress: "n_pose_067_icon";
	}
>;
export type AvatarItemDisplayNPose068 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_068",
	{
		displayStringId: "avatar_pose_safariball";
		iconAddress: "n_pose_068_icon";
	}
>;
export type AvatarItemDisplayNPoseBuddypokeball = AvatarItemDisplay<
	"N_DISPLAY_n_pose_buddypokeball",
	{
		displayStringId: "avatar_pose_pokeballbuddy";
		iconAddress: "n_pose_buddypokeball_icon";
	}
>;
export type AvatarItemDisplayNPoseCarnival = AvatarItemDisplay<
	"N_DISPLAY_n_pose_carnival",
	{
		displayStringId: "avatar_pose_carnival";
		iconAddress: "n_pose_carnival_icon";
	}
>;
export type AvatarItemDisplayNPoseCommunityambassador = AvatarItemDisplay<
	"N_DISPLAY_n_pose_communityambassador",
	{
		displayStringId: "avatar_n_pose_communityambassador";
		iconAddress: "n_pose_communityambassador_icon";
	}
>;
export type AvatarItemDisplayNPoseConcierge = AvatarItemDisplay<
	"N_DISPLAY_n_pose_concierge",
	{
		displayStringId: "avatar_pose_concierge";
		iconAddress: "n_pose_concierge_icon";
	}
>;
export type AvatarItemDisplayNPoseEmpty = AvatarItemDisplay<
	"N_DISPLAY_n_pose_empty",
	{
		displayStringId: "n_pose_empty_display_name";
		iconAddress: "m_poses_empty_icon";
	}
>;
export type AvatarItemDisplayNPoseFashionweek2025 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_fashionweek2025",
	{
		displayStringId: "avatar_pose_runway";
		iconAddress: "n_pose_fashionweek2025_icon";
	}
>;
export type AvatarItemDisplayNPoseGofest2025 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_gofest2025",
	{
		displayStringId: "avatar_pose_gofest2025";
		iconAddress: "n_pose_gofest2025_icon";
	}
>;
export type AvatarItemDisplayNPoseGrowingup = AvatarItemDisplay<
	"N_DISPLAY_n_pose_growingup",
	{
		displayStringId: "avatar_pose_paperplane";
		iconAddress: "n_pose_growingup_icon";
	}
>;
export type AvatarItemDisplayNPoseGrusha = AvatarItemDisplay<
	"N_DISPLAY_n_pose_grusha",
	{
		displayStringId: "avatar_pose_grusha";
		iconAddress: "n_pose_grusha_icon";
	}
>;
export type AvatarItemDisplayNPoseHeart = AvatarItemDisplay<
	"N_DISPLAY_n_pose_heart",
	{
		displayStringId: "avatar_pose_heart";
		iconAddress: "n_pose_heart_icon";
	}
>;
export type AvatarItemDisplayNPoseIdle = AvatarItemDisplay<
	"N_DISPLAY_n_pose_idle",
	{
		displayStringId: "n_pose_empty_display_name";
		iconAddress: "n_pose_idle_icon";
	}
>;
export type AvatarItemDisplayNPoseIdleA = AvatarItemDisplay<
	"N_DISPLAY_n_pose_idle_a",
	{
		displayStringId: "n_pose_idle_a_display_name";
		iconAddress: "f_poses_empty_icon";
	}
>;
export type AvatarItemDisplayNPoseIdleB = AvatarItemDisplay<
	"N_DISPLAY_n_pose_idle_b",
	{
		displayStringId: "n_pose_idle_b_display_name";
		iconAddress: "m_poses_empty_icon";
	}
>;
export type AvatarItemDisplayNPoseLegacy50 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_legacy50",
	{
		displayStringId: "avatar_pose_legacy50";
		iconAddress: "n_pose_legacy50_icon";
	}
>;
export type AvatarItemDisplayNPoseLvl77 = AvatarItemDisplay<
	"N_DISPLAY_n_pose_lvl77",
	{
		displayStringId: "avatar_pose_exploration";
		iconAddress: "n_pose_lvl77_icon";
	}
>;
export type AvatarItemDisplayNPoseMustard = AvatarItemDisplay<
	"N_DISPLAY_n_pose_mustard",
	{
		displayStringId: "avatar_pose_mustard";
		iconAddress: "n_pose_mustard_icon";
	}
>;
export type AvatarItemDisplayNPosePenpal = AvatarItemDisplay<
	"N_DISPLAY_n_pose_penpal",
	{
		displayStringId: "avatar_pose_penpal";
		iconAddress: "n_pose_penpal_icon";
	}
>;
export type AvatarItemDisplayNPoseS16finale = AvatarItemDisplay<
	"N_DISPLAY_n_pose_s16finale",
	{
		displayStringId: "avatar_pose_determined";
		iconAddress: "n_pose_s16finale_icon";
	}
>;
export type AvatarItemDisplayNPoseS19gbl = AvatarItemDisplay<
	"N_DISPLAY_n_pose_s19gbl",
	{
		displayStringId: "avatar_pose_gbl19";
		iconAddress: "n_pose_s19gbl_icon";
	}
>;
export type AvatarItemDisplayNPoseS20gbl = AvatarItemDisplay<
	"N_DISPLAY_n_pose_s20gbl",
	{
		displayStringId: "avatar_pose_s20gbl";
		iconAddress: "n_pose_s20gbl_icon";
	}
>;
export type AvatarItemDisplayNPoseS22gbl = AvatarItemDisplay<
	"N_DISPLAY_n_pose_s22gbl",
	{
		displayStringId: "avatar_pose_s22blue";
		iconAddress: "n_pose_s22gbl_icon";
	}
>;
export type AvatarItemDisplayNPoseSustainability = AvatarItemDisplay<
	"N_DISPLAY_n_pose_sustainability",
	{
		displayStringId: "avatar_pose_plant";
		iconAddress: "n_pose_sustainability_icon";
	}
>;
export type AvatarItemDisplayNPoseTeapot = AvatarItemDisplay<
	"N_DISPLAY_n_pose_teapot",
	{
		displayStringId: "avatar_pose_teacup";
		iconAddress: "n_pose_teapot_icon";
	}
>;
export type AvatarItemDisplayNPoseTinkatonhammer = AvatarItemDisplay<
	"N_DISPLAY_n_pose_tinkatonhammer",
	{
		displayStringId: "avatar_pose_tinkaton";
		iconAddress: "n_pose_tinkatonhammer_icon";
	}
>;
export type AvatarItemDisplayNPoseUrshifurapidstrike = AvatarItemDisplay<
	"N_DISPLAY_n_pose_urshifurapidstrike",
	{
		displayStringId: "avatar_pose_rapidstrike";
		iconAddress: "n_pose_urshifurapidstrike_icon";
	}
>;
export type AvatarItemDisplayNPoseUrshifusinglestrike = AvatarItemDisplay<
	"N_DISPLAY_n_pose_urshifusinglestrike",
	{
		displayStringId: "avatar_pose_singlestrike";
		iconAddress: "n_pose_urshifusinglestrike_icon";
	}
>;
export type AvatarItemDisplayNPoseWaterfestival = AvatarItemDisplay<
	"N_DISPLAY_n_pose_waterfestival",
	{
		displayStringId: "avatar_pose_icecream";
		iconAddress: "n_pose_waterfestival_icon";
	}
>;
export type AvatarItemDisplayNShirt6thanniversaryA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_6thanniversary_a_0",
	{
		displayStringId: "n_shirt_6thanniversary_a_0_display_name";
		iconAddress: "n_shirt_6thanniversary_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirt6thanniversaryB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_6thanniversary_b_0",
	{
		displayStringId: "n_shirt_6thanniversary_b_0_display_name";
		iconAddress: "n_shirt_6thanniversary_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirt7thanniversary0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_7thanniversary_0",
	{
		displayStringId: "n_shirt_7thanniversary_0_display_name";
		iconAddress: "n_shirt_7thanniversary_0_icon";
	}
>;
export type AvatarItemDisplayNShirtAcetrainerbwA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_acetrainerbw_a_0",
	{
		displayStringId: "n_shirt_acetrainerbw_a_0_display_name";
		iconAddress: "n_shirt_acetrainerbw_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtAcetrainerbwB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_acetrainerbw_b_0",
	{
		displayStringId: "n_shirt_acetrainerbw_b_0_display_name";
		iconAddress: "n_shirt_acetrainerbw_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtAcetrainersmA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_acetrainersm_a_0",
	{
		displayStringId: "n_shirt_acetrainersm_a_0_display_name";
		iconAddress: "n_shirt_acetrainersm_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtAcetrainersmB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_acetrainersm_b_0",
	{
		displayStringId: "n_shirt_acetrainersm_b_0_display_name";
		iconAddress: "n_shirt_acetrainersm_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtAllister0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_allister_0",
	{
		displayStringId: "avatar_shirt_gblallister";
		iconAddress: "n_shirt_allister_0_icon";
	}
>;
export type AvatarItemDisplayNShirtAlolacomfey0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_alolacomfey_0",
	{
		displayStringId: "n_shirt_alolacomfey_0_display_name";
		iconAddress: "n_shirt_alolacomfey_0_icon";
	}
>;
export type AvatarItemDisplayNShirtAnimegou0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_animegou_0",
	{
		displayStringId: "n_shirt_animegou_0_display_name";
		iconAddress: "n_shirt_animegou_0_icon";
	}
>;
export type AvatarItemDisplayNShirtApplinitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_applinitems_0",
	{
		displayStringId: "avatar_shirt_applinapron";
		iconAddress: "n_shirt_applinitems_0_icon";
	}
>;
export type AvatarItemDisplayNShirtAseries0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_aseries_0",
	{
		displayStringId: "n_shirt_aseries_0_display_name";
		iconAddress: "n_shirt_aseries_0_icon";
	}
>;
export type AvatarItemDisplayNShirtBackpackerA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_backpacker_a_0",
	{
		displayStringId: "n_shirt_backpacker_a_0_display_name";
		iconAddress: "n_shirt_backpacker_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtBackpackerB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_backpacker_b_0",
	{
		displayStringId: "n_shirt_backpacker_b_0_display_name";
		iconAddress: "n_shirt_backpacker_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtBallguy0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_ballguy_0",
	{
		displayStringId: "n_shirt_ballguy_0_display_name";
		iconAddress: "n_shirt_ballguy_0_icon";
	}
>;
export type AvatarItemDisplayNShirtBattlegirl0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_battlegirl_0",
	{
		displayStringId: "n_shirt_battlegirl_0_display_name";
		iconAddress: "n_shirt_battlegirl_0_icon";
	}
>;
export type AvatarItemDisplayNShirtBeaA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_bea_a_0",
	{
		displayStringId: "n_shirt_bea_a_0_display_name";
		iconAddress: "n_shirt_bea_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtBeaB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_bea_b_0",
	{
		displayStringId: "n_shirt_bea_b_0_display_name";
		iconAddress: "n_shirt_bea_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtBewearcostume0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_bewearcostume_0",
	{
		displayStringId: "avatar_n_shirt_bewear";
		iconAddress: "n_shirt_bewearcostume_0_icon";
	}
>;
export type AvatarItemDisplayNShirtBlackwhite0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_blackwhite_0",
	{
		displayStringId: "avatar_shirt_bwhoodie";
		iconAddress: "n_shirt_blackwhite_0_icon";
	}
>;
export type AvatarItemDisplayNShirtBlazer0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_blazer_0",
	{
		displayStringId: "n_shirt_blazer_0_display_name";
		iconAddress: "n_shirt_blazer_0_icon";
	}
>;
export type AvatarItemDisplayNShirtBounsweetitemsA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_bounsweetitems_a_0",
	{
		displayStringId: "n_shirt_bounsweetitems_a_0_display_name";
		iconAddress: "n_shirt_bounsweetitems_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtBounsweetitemsB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_bounsweetitems_b_0",
	{
		displayStringId: "n_shirt_bounsweetitems_b_0_display_name";
		iconAddress: "n_shirt_bounsweetitems_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtBrock0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_brock_0",
	{
		displayStringId: "n_shirt_brock_0_display_name";
		iconAddress: "n_shirt_brock_0_icon";
	}
>;
export type AvatarItemDisplayNShirtButtondown0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_buttondown_0",
	{
		displayStringId: "n_shirt_buttondown_0_display_name";
		iconAddress: "n_shirt_buttondown_0_icon";
	}
>;
export type AvatarItemDisplayNShirtBuzzwoleitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_buzzwoleitems_0",
	{
		displayStringId: "n_shirt_buzzwoleitems_0_display_name";
		iconAddress: "n_shirt_buzzwoleitems_0_icon";
	}
>;
export type AvatarItemDisplayNShirtBwn0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_bwn_0",
	{
		displayStringId: "n_shirt_bwn_0_display_name";
		iconAddress: "n_shirt_bwn_0_icon";
	}
>;
export type AvatarItemDisplayNShirtCasualA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_casual_a_0",
	{
		displayStringId: "n_shirt_casual_a_0_display_name";
		iconAddress: "n_shirt_casual_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtCasualA1 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_casual_a_1",
	{
		displayStringId: "n_shirt_casual_a_1_display_name";
		iconAddress: "n_shirt_casual_a_1_icon";
	}
>;
export type AvatarItemDisplayNShirtCasualA2 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_casual_a_2",
	{
		displayStringId: "n_shirt_casual_a_2_display_name";
		iconAddress: "n_shirt_casual_a_2_icon";
	}
>;
export type AvatarItemDisplayNShirtCasualA3 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_casual_a_3",
	{
		displayStringId: "n_shirt_casual_a_3_display_name";
		iconAddress: "n_shirt_casual_a_3_icon";
	}
>;
export type AvatarItemDisplayNShirtCasualB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_casual_b_0",
	{
		displayStringId: "n_shirt_casual_b_0_display_name";
		iconAddress: "n_shirt_casual_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtCasualB1 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_casual_b_1",
	{
		displayStringId: "n_shirt_casual_b_1_display_name";
		iconAddress: "n_shirt_casual_b_1_icon";
	}
>;
export type AvatarItemDisplayNShirtCasualB2 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_casual_b_2",
	{
		displayStringId: "n_shirt_casual_b_2_display_name";
		iconAddress: "n_shirt_casual_b_2_icon";
	}
>;
export type AvatarItemDisplayNShirtCasualB3 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_casual_b_3",
	{
		displayStringId: "n_shirt_casual_b_3_display_name";
		iconAddress: "n_shirt_casual_b_3_icon";
	}
>;
export type AvatarItemDisplayNShirtCelebi0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_celebi_0",
	{
		displayStringId: "n_shirt_celebi_0_display_name";
		iconAddress: "n_shirt_celebi_0_icon";
	}
>;
export type AvatarItemDisplayNShirtChimcharonesie0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_chimcharonesie_0",
	{
		displayStringId: "n_shirt_chimcharonesie_0_display_name";
		iconAddress: "n_shirt_chimcharonesie_0_icon";
	}
>;
export type AvatarItemDisplayNShirtClay0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_clay_0",
	{
		displayStringId: "n_shirt_clay_0_display_name";
		iconAddress: "n_shirt_clay_0_icon";
	}
>;
export type AvatarItemDisplayNShirtClemont0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_clemont_0",
	{
		displayStringId: "avatar_n_shirt_clemont";
		iconAddress: "n_shirt_clemont_0_icon";
	}
>;
export type AvatarItemDisplayNShirtCofagrigusitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_cofagrigusitems_0",
	{
		displayStringId: "n_shirt_cofagrigusitems_0_display_name";
		iconAddress: "n_shirt_cofagrigusitems_0_icon";
	}
>;
export type AvatarItemDisplayNShirtConcierge0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_concierge_0",
	{
		displayStringId: "avatar_n_shirt_concierge";
		iconAddress: "n_shirt_concierge_0_icon";
	}
>;
export type AvatarItemDisplayNShirtCosmog0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_cosmog_0",
	{
		displayStringId: "n_shirt_cosmog_0_display_name";
		iconAddress: "n_shirt_cosmog_0_icon";
	}
>;
export type AvatarItemDisplayNShirtCowichansweater0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_cowichansweater_0",
	{
		displayStringId: "n_shirt_cowichansweater_0_display_name";
		iconAddress: "n_shirt_cowichansweater_0_icon";
	}
>;
export type AvatarItemDisplayNShirtDayofdead0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_dayofdead_0",
	{
		displayStringId: "n_shirt_dayofdead_0_display_name";
		iconAddress: "n_shirt_dayofdead_0_icon";
	}
>;
export type AvatarItemDisplayNShirtDefaultNew0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_default-new_0",
	{
		displayStringId: "n_shirt_default-new_0_display_name";
		iconAddress: "n_shirt_defaultnew_0_icon";
	}
>;
export type AvatarItemDisplayNShirtDefaultA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_default_a_0",
	{
		displayStringId: "n_shirt_default_a_1_display_name";
		iconAddress: "n_shirt_default_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtDefaultA1 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_default_a_1",
	{
		displayStringId: "n_shirt_default_a_1_display_name";
		iconAddress: "n_shirt_default_a_1_icon";
	}
>;
export type AvatarItemDisplayNShirtDefaultA2 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_default_a_2",
	{
		displayStringId: "n_shirt_default_a_1_display_name";
		iconAddress: "n_shirt_default_a_2_icon";
	}
>;
export type AvatarItemDisplayNShirtDefaultA3 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_default_a_3",
	{
		displayStringId: "n_shirt_default_a_1_display_name";
		iconAddress: "n_shirt_default_a_3_icon";
	}
>;
export type AvatarItemDisplayNShirtDefaultA4 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_default_a_4",
	{
		displayStringId: "n_shirt_default_a_1_display_name";
		iconAddress: "n_shirt_default_a_4_icon";
	}
>;
export type AvatarItemDisplayNShirtDefaultA5 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_default_a_5",
	{
		displayStringId: "n_shirt_default_a_1_display_name";
		iconAddress: "n_shirt_default_a_5_icon";
	}
>;
export type AvatarItemDisplayNShirtDefaultA6 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_default_a_6",
	{
		displayStringId: "n_shirt_default_a_1_display_name";
		iconAddress: "n_shirt_default_a_6_icon";
	}
>;
export type AvatarItemDisplayNShirtDefaultA7 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_default_a_7",
	{
		displayStringId: "n_shirt_default_a_1_display_name";
		iconAddress: "n_shirt_default_a_7_icon";
	}
>;
export type AvatarItemDisplayNShirtDefaultA8 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_default_a_8",
	{
		displayStringId: "n_shirt_default_a_1_display_name";
		iconAddress: "n_shirt_default_a_8_icon";
	}
>;
export type AvatarItemDisplayNShirtDefaultB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_default_b_0",
	{
		displayStringId: "n_shirt_default_b_0_display_name";
		iconAddress: "n_shirt_default_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtDefaultB1 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_default_b_1",
	{
		displayStringId: "n_shirt_default_b_1_display_name";
		iconAddress: "n_shirt_default_1_icon";
	}
>;
export type AvatarItemDisplayNShirtDefaultB2 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_default_b_2",
	{
		displayStringId: "n_shirt_default_b_2_display_name";
		iconAddress: "n_shirt_default_b_2_icon";
	}
>;
export type AvatarItemDisplayNShirtDefaultB3 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_default_b_3",
	{
		displayStringId: "n_shirt_default_b_3_display_name";
		iconAddress: "n_shirt_default_3_icon";
	}
>;
export type AvatarItemDisplayNShirtDefaultB4 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_default_b_4",
	{
		displayStringId: "n_shirt_default_b_2_display_name";
		iconAddress: "n_shirt_default_b_4_icon";
	}
>;
export type AvatarItemDisplayNShirtDefaultB5 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_default_b_5",
	{
		displayStringId: "n_shirt_default_b_2_display_name";
		iconAddress: "n_shirt_default_b_5_icon";
	}
>;
export type AvatarItemDisplayNShirtDefaultB6 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_default_b_6",
	{
		displayStringId: "n_shirt_default_b_2_display_name";
		iconAddress: "n_shirt_default_b_6_icon";
	}
>;
export type AvatarItemDisplayNShirtDefaultB7 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_default_b_7",
	{
		displayStringId: "n_shirt_default_b_2_display_name";
		iconAddress: "n_shirt_default_b_7_icon";
	}
>;
export type AvatarItemDisplayNShirtDefaultB8 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_default_b_8",
	{
		displayStringId: "n_shirt_default_b_2_display_name";
		iconAddress: "n_shirt_default_b_8_icon";
	}
>;
export type AvatarItemDisplayNShirtDelibird0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_delibird_0",
	{
		displayStringId: "n_shirt_delibird_0_display_name";
		iconAddress: "n_shirt_delibird_0_icon";
	}
>;
export type AvatarItemDisplayNShirtDelibirdonesie0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_delibirdonesie_0",
	{
		displayStringId: "n_shirt_delibirdonesie_0_display_name";
		iconAddress: "n_shirt_delibirdonesie_0_icon";
	}
>;
export type AvatarItemDisplayNShirtDenimfashionweek20230 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_denimfashionweek2023_0",
	{
		displayStringId: "n_shirt_denimfashionweek2023_0_display_name";
		iconAddress: "n_shirt_denimfashionweek2023_0_icon";
	}
>;
export type AvatarItemDisplayNShirtDenimjacket0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_denimjacket_0",
	{
		displayStringId: "n_shirt_denimjacket_0_display_name";
		iconAddress: "n_shirt_denimjacket_0_icon";
	}
>;
export type AvatarItemDisplayNShirtDetectivepikachu0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_detectivepikachu_0",
	{
		displayStringId: "n_shirt_detectivepikachu_0_display_name";
		iconAddress: "n_shirt_detectivepikachu_0_icon";
	}
>;
export type AvatarItemDisplayNShirtDiancie0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_diancie_0",
	{
		displayStringId: "n_shirt_diancie_0_display_name";
		iconAddress: "n_shirt_diancie_0_icon";
	}
>;
export type AvatarItemDisplayNShirtDisguiseHoodoff0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_disguise-hoodoff_0",
	{
		displayStringId: "avatar_shirt_mimikyu_hoodoff";
		iconAddress: "n_shirt_disguise-hoodoff_0_icon";
	}
>;
export type AvatarItemDisplayNShirtDisguiseHoodon0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_disguise-hoodon_0",
	{
		displayStringId: "avatar_shirt_mimikyu_hoodon";
		iconAddress: "n_shirt_disguise-hoodon_0_icon";
	}
>;
export type AvatarItemDisplayNShirtDivingsuit0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_divingsuit_0",
	{
		displayStringId: "n_shirt_divingsuit_0_display_name";
		iconAddress: "n_shirt_divingsuit_0_icon";
	}
>;
export type AvatarItemDisplayNShirtDiwali20210 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_diwali2021_0",
	{
		displayStringId: "n_shirt_diwali2021_0_display_name";
		iconAddress: "n_shirt_diwali2021_0_icon";
	}
>;
export type AvatarItemDisplayNShirtDpA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_dp_a_0",
	{
		displayStringId: "n_shirt_dp_a_0_display_name";
		iconAddress: "n_shirt_dp_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtDpB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_dp_b_0",
	{
		displayStringId: "n_shirt_dp_b_0_display_name";
		iconAddress: "n_shirt_dp_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtDrifblim0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_drifblim_0",
	{
		displayStringId: "n_shirt_drifblim_0_display_name";
		iconAddress: "n_shirt_drifblim_0_icon";
	}
>;
export type AvatarItemDisplayNShirtDudunsparceitem0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_dudunsparceitem_0",
	{
		displayStringId: "avatar_n_shirt_dudunsparce";
		iconAddress: "n_shirt_dudunsparceitem_0_icon";
	}
>;
export type AvatarItemDisplayNShirtDusclopsmummy0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_dusclopsmummy_0",
	{
		displayStringId: "n_shirt_dusclopsmummy_0_display_name";
		iconAddress: "n_shirt_dusclopsmummy_0_icon";
	}
>;
export type AvatarItemDisplayNShirtEarthday20180 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_earthday-2018_0",
	{
		displayStringId: "n_shirt_earthday-2018_0_display_name";
		iconAddress: "n_shirt_earthday_2018_icon";
	}
>;
export type AvatarItemDisplayNShirtEeveestshirt000 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_eeveestshirt-00_0",
	{
		displayStringId: "n_shirt_eeveestshirt-00_0_display_name";
		iconAddress: "n_shirt_eeveestshirt_0_icon";
	}
>;
export type AvatarItemDisplayNShirtEeveestshirt010 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_eeveestshirt-01_0",
	{
		displayStringId: "n_shirt_eeveestshirt-01_0_display_name";
		iconAddress: "n_shirt_eeveestshirt_1_icon";
	}
>;
export type AvatarItemDisplayNShirtEeveestshirt020 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_eeveestshirt-02_0",
	{
		displayStringId: "n_shirt_eeveestshirt-02_0_display_name";
		iconAddress: "n_shirt_eeveestshirt_2_icon";
	}
>;
export type AvatarItemDisplayNShirtEeveestshirt030 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_eeveestshirt-03_0",
	{
		displayStringId: "n_shirt_eeveestshirt-03_0_display_name";
		iconAddress: "n_shirt_eeveestshirt_3_icon";
	}
>;
export type AvatarItemDisplayNShirtEeveestshirt040 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_eeveestshirt-04_0",
	{
		displayStringId: "n_shirt_eeveestshirt-04_0_display_name";
		iconAddress: "n_shirt_eeveestshirt_4_icon";
	}
>;
export type AvatarItemDisplayNShirtEeveestshirt050 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_eeveestshirt-05_0",
	{
		displayStringId: "n_shirt_eeveestshirt-05_0_display_name";
		iconAddress: "n_shirt_eeveestshirt_5_icon";
	}
>;
export type AvatarItemDisplayNShirtEeveestshirt060 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_eeveestshirt-06_0",
	{
		displayStringId: "n_shirt_eeveestshirt-06_0_display_name";
		iconAddress: "n_shirt_eeveestshirt_6_icon";
	}
>;
export type AvatarItemDisplayNShirtEeveestshirt070 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_eeveestshirt-07_0",
	{
		displayStringId: "n_shirt_eeveestshirt-07_0_display_name";
		iconAddress: "n_shirt_eeveestshirt_7_icon";
	}
>;
export type AvatarItemDisplayNShirtEeveestshirt080 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_eeveestshirt-08_0",
	{
		displayStringId: "n_shirt_eeveestshirt-08_0_display_name";
		iconAddress: "n_shirt_eeveestshirt_8_icon";
	}
>;
export type AvatarItemDisplayNShirtElesaA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_elesa_a_0",
	{
		displayStringId: "n_shirt_elesa_a_0_display_name";
		iconAddress: "n_shirt_elesa_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtElesaB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_elesa_b_0",
	{
		displayStringId: "n_shirt_elesa_b_0_display_name";
		iconAddress: "n_shirt_elesa_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtEternatussuit0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_eternatussuit_0",
	{
		displayStringId: "avatar_shirt_eternatus";
		iconAddress: "n_shirt_eternatussuit_0_icon";
	}
>;
export type AvatarItemDisplayNShirtFashionweek20220 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_fashionweek2022_0",
	{
		displayStringId: "n_shirt_fashionweek2022_0_display_name";
		iconAddress: "n_shirt_fashionweek2022_0_icon";
	}
>;
export type AvatarItemDisplayNShirtFashionweek20250 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_fashionweek2025_0",
	{
		displayStringId: "avatar_shirt_plaidtop";
		iconAddress: "n_shirt_fashionweek2025_0_icon";
	}
>;
export type AvatarItemDisplayNShirtFestivaloflights000 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_festivaloflights-00_0",
	{
		displayStringId: "n_shirt_festivaloflights-00_0_display_name";
		iconAddress: "n_shirt_festivaloflights_0_icon";
	}
>;
export type AvatarItemDisplayNShirtFestivaloflights010 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_festivaloflights-01_0",
	{
		displayStringId: "n_shirt_festivaloflights-01_0_display_name";
		iconAddress: "n_shirt_festivaloflights_1_icon";
	}
>;
export type AvatarItemDisplayNShirtFisher0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_fisher_0",
	{
		displayStringId: "n_shirt_fisher_0_display_name";
		iconAddress: "n_shirt_fisher_0_icon";
	}
>;
export type AvatarItemDisplayNShirtFlabebepack0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_flabebepack_0",
	{
		displayStringId: "n_shirt_flabebepack_0_display_name";
		iconAddress: "n_shirt_flabebepack_0_icon";
	}
>;
export type AvatarItemDisplayNShirtFragment0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_fragment_0",
	{
		displayStringId: "n_shirt_fragment_0_display_name";
		iconAddress: "n_shirt_fragment_0_icon";
	}
>;
export type AvatarItemDisplayNShirtFrlgA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_frlg_a_0",
	{
		displayStringId: "n_shirt_frlg_a_0_display_name";
		iconAddress: "n_shirt_frlg_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtFrlgB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_frlg_b_0",
	{
		displayStringId: "n_shirt_frlg_b_0_display_name";
		iconAddress: "n_shirt_frlg_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtFw2022A0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_fw2022_a_0",
	{
		displayStringId: "n_shirt_fw2022_a_0_display_name";
		iconAddress: "n_shirt_fw2022_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtFw2022B0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_fw2022_b_0",
	{
		displayStringId: "n_shirt_fw2022_b_0_display_name";
		iconAddress: "n_shirt_fw2022_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGalarfarfetchditems0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_galarfarfetchditems_0",
	{
		displayStringId: "n_shirt_galarfarfetchditems_0_display_name";
		iconAddress: "n_shirt_galarfarfetchditems_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGalaxyoutfitA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_galaxyoutfit_a_0",
	{
		displayStringId: "n_shirt_galaxyoutfit_a_0_display_name";
		iconAddress: "n_shirt_galaxyoutfit_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGalaxyoutfitB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_galaxyoutfit_b_0",
	{
		displayStringId: "n_shirt_galaxyoutfit_b_0_display_name";
		iconAddress: "n_shirt_galaxyoutfit_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGeeta0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_geeta_0",
	{
		displayStringId: "n_shirt_geeta_0_display_name";
		iconAddress: "n_shirt_geeta_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGenderlessskirt0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_genderlessskirt_0",
	{
		displayStringId: "n_shirt_genderlessskirt_0_display_name";
		iconAddress: "n_shirt_genderlessskirt_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGengar0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_gengar_0",
	{
		displayStringId: "n_shirt_gengar_0_display_name";
		iconAddress: "n_shirt_gengar_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGengaronesie0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_gengaronesie_0",
	{
		displayStringId: "n_shirt_gengaronesie_0_display_name";
		iconAddress: "n_shirt_gengaronesie_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGiovanniA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_giovanni_a_0",
	{
		displayStringId: "n_shirt_giovanni_a_0_display_name";
		iconAddress: "n_shirt_giovanni_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGiovanniB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_giovanni_b_0",
	{
		displayStringId: "n_shirt_giovanni_b_0_display_name";
		iconAddress: "n_shirt_giovanni_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGiratinaitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_giratinaitems_0",
	{
		displayStringId: "n_shirt_giratinaitems_0_display_name";
		iconAddress: "n_shirt_giratinaitems_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGladion0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_gladion_0",
	{
		displayStringId: "n_shirt_gladion_0_display_name";
		iconAddress: "n_shirt_gladion_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGofest20190 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_gofest-2019_0",
	{
		displayStringId: "n_shirt_gofest-2019_0_display_name";
		iconAddress: "n_shirt_gofest_2019_icon";
	}
>;
export type AvatarItemDisplayNShirtGofest20200 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_gofest-2020_0",
	{
		displayStringId: "n_shirt_gofest-2020_0_display_name";
		iconAddress: "n_shirt_gofest2020_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGofest20210 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_gofest-2021_0",
	{
		displayStringId: "n_shirt_gofest-2021_0_display_name";
		iconAddress: "n_shirt_gofest2021_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGofest20220 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_gofest2022_0",
	{
		displayStringId: "n_shirt_gofest2022_0_display_name";
		iconAddress: "n_shirt_gofest2022_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGofest20230 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_gofest2023_0",
	{
		displayStringId: "n_shirt_gofest2023_0_display_name";
		iconAddress: "n_shirt_gofest2023_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGofest2024darkgray0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_gofest2024darkgray_0",
	{
		displayStringId: "n_shirt_gofest24eventexclusive_display_name";
		iconAddress: "n_shirt_gofest2024darkgray_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGofest2024gray0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_gofest2024gray_0",
	{
		displayStringId: "AVATAR_m_shirt_gofest2024gray_00_bundle_icon";
		iconAddress: "n_shirt_gofest2024gray_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGofest2024purple0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_gofest2024purple_0",
	{
		displayStringId: "n_shirt_gofest24_display_name";
		iconAddress: "n_shirt_gofest2024purple_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGofest20250 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_gofest2025_0",
	{
		displayStringId: "avatar_shirt_gofest2025black";
		iconAddress: "n_shirt_gofest2025_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGofest2025cream0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_gofest2025cream_0",
	{
		displayStringId: "avatar_shirt_gofest2025cream";
		iconAddress: "n_shirt_gofest2025cream_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGofestglobal20230 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_gofestglobal2023_0",
	{
		displayStringId: "n_shirt_gofestglobal2023_0_display_name";
		iconAddress: "n_shirt_gofestglobal2023_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGoteamrocketarloA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_goteamrocketarlo_a_0",
	{
		displayStringId: "n_shirt_goteamrocketarlo_a_0_display_name";
		iconAddress: "n_shirt_goteamrocketarlo_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGoteamrocketarloB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_goteamrocketarlo_b_0",
	{
		displayStringId: "n_shirt_goteamrocketarlo_b_0_display_name";
		iconAddress: "n_shirt_goteamrocketarlo_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGoteamrocketcliffA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_goteamrocketcliff_a_0",
	{
		displayStringId: "n_shirt_goteamrocketcliff_a_0_display_name";
		iconAddress: "n_shirt_goteamrocketcliff_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGoteamrocketcliffB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_goteamrocketcliff_b_0",
	{
		displayStringId: "n_shirt_goteamrocketcliff_b_0_display_name";
		iconAddress: "n_shirt_goteamrocketcliff_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGoteamrocketsierraA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_goteamrocketsierra_a_0",
	{
		displayStringId: "n_shirt_goteamrocketsierra_a_0_display_name";
		iconAddress: "n_shirt_goteamrocketsierra_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGoteamrocketsierraB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_goteamrocketsierra_b_0",
	{
		displayStringId: "n_shirt_goteamrocketsierra_b_0_display_name";
		iconAddress: "n_shirt_goteamrocketsierra_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGothitelleitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_gothitelleitems_0",
	{
		displayStringId: "n_shirt_gothitelleitems_0_display_name";
		iconAddress: "n_shirt_gothitelleitems_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGotour20230 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_gotour2023_0",
	{
		displayStringId: "n_shirt_gotour2023_0_display_name";
		iconAddress: "n_shirt_gotour2023_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGotour20240 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_gotour2024_0",
	{
		displayStringId: "n_shirt_gotour2024_0_display_name";
		iconAddress: "n_shirt_gotour2024_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGotour20250 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_gotour2025_0",
	{
		displayStringId: "avatar_shirt_gotour2025black";
		iconAddress: "n_shirt_gotour2025_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGotour20251 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_gotour2025_1",
	{
		displayStringId: "avatar_shirt_gotour2025white";
		iconAddress: "n_shirt_gotour2025_1_icon";
	}
>;
export type AvatarItemDisplayNShirtGotour20252 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_gotour2025_2",
	{
		displayStringId: "avatar_shirt_gotour2025gray";
		iconAddress: "n_shirt_gotour2025_2_icon";
	}
>;
export type AvatarItemDisplayNShirtGotour2026Black0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_gotour2026-black_0",
	{
		displayStringId: "avatar_shirt_gotour_black";
		iconAddress: "n_shirt_gotour2026-black_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGotour2026Gray0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_gotour2026-gray_0",
	{
		displayStringId: "avatar_shirt_gotour_grey";
		iconAddress: "n_shirt_gotour2026-gray_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGowa20240 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_gowa2024_0",
	{
		displayStringId: "avatar_shirt_gowatshirt2024";
		iconAddress: "n_shirt_gowa2024_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGowa20250 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_gowa2025_0",
	{
		displayStringId: "avatar_n_shirt_gowa2025";
		iconAddress: "n_shirt_gowa2025_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGowa20251 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_gowa2025_1",
	{
		displayStringId: "avatar_n_shirt_gowa2025purple";
		iconAddress: "n_shirt_gowa2025_1_icon";
	}
>;
export type AvatarItemDisplayNShirtGreedentsweater0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_greedentsweater_0",
	{
		displayStringId: "n_shirt_greedentsweater_0_display_name";
		iconAddress: "n_shirt_greedentsweater_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGreen0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_green_0",
	{
		displayStringId: "n_shirt_green_0_display_name";
		iconAddress: "n_shirt_green_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGreencoat0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_greencoat_0",
	{
		displayStringId: "n_shirt_greencoat_0_display_name";
		iconAddress: "n_shirt_greencoat_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGreenpikavee0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_greenpikavee_0",
	{
		displayStringId: "avatar_shirt_s22blue";
		iconAddress: "n_shirt_greenpikavee_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGrimsley0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_grimsley_0",
	{
		displayStringId: "avatar_shirt_gblgrimsley";
		iconAddress: "n_shirt_grimsley_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGrusha0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_grusha_0",
	{
		displayStringId: "avatar_shirt_grusha";
		iconAddress: "n_shirt_grusha_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGtrtshirt20220 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_gtrtshirt2022_0",
	{
		displayStringId: "n_shirt_gtrtshirt2022_0_display_name";
		iconAddress: "n_shirt_gtrtshirt2022_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGtrtshirt20221 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_gtrtshirt2022_1",
	{
		displayStringId: "n_shirt_gtrtshirt2022_1_display_name";
		iconAddress: "n_shirt_gtrtshirt2022_1_icon";
	}
>;
export type AvatarItemDisplayNShirtGuccitshirts0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_guccitshirts_0",
	{
		displayStringId: "n_shirt_guccitshirts_0_display_name";
		iconAddress: "n_shirt_guccitshirts_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGuzma0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_guzma_0",
	{
		displayStringId: "n_shirt_guzma_0_display_name";
		iconAddress: "n_shirt_guzma_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGymleaderA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_gymleader_a_0",
	{
		displayStringId: "n_shirt_gymleader_a_0_display_name";
		iconAddress: "n_shirt_gymleader_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGymleaderA1 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_gymleader_a_1",
	{
		displayStringId: "n_shirt_gymleader_a_0_display_name";
		iconAddress: "n_shirt_gymleader_a_1_icon";
	}
>;
export type AvatarItemDisplayNShirtGymleaderA2 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_gymleader_a_2",
	{
		displayStringId: "n_shirt_gymleader_a_0_display_name";
		iconAddress: "n_shirt_gymleader_a_2_icon";
	}
>;
export type AvatarItemDisplayNShirtGymleaderB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_gymleader_b_0",
	{
		displayStringId: "n_shirt_gymleader_b_0_display_name";
		iconAddress: "n_shirt_gymleader_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtGymleaderB1 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_gymleader_b_1",
	{
		displayStringId: "n_shirt_gymleader_b_0_display_name";
		iconAddress: "n_shirt_gymleader_b_1_icon";
	}
>;
export type AvatarItemDisplayNShirtGymleaderB2 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_gymleader_b_2",
	{
		displayStringId: "n_shirt_gymleader_b_0_display_name";
		iconAddress: "n_shirt_gymleader_b_2_icon";
	}
>;
export type AvatarItemDisplayNShirtHala0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_hala_0",
	{
		displayStringId: "n_shirt_hala_0_display_name";
		iconAddress: "n_shirt_hala_0_icon";
	}
>;
export type AvatarItemDisplayNShirtHalloween20240 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_halloween2024_0",
	{
		displayStringId: "avatar_shirt_halloween2024";
		iconAddress: "n_shirt_halloween2024_0_icon";
	}
>;
export type AvatarItemDisplayNShirtHappi0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_happi_0",
	{
		displayStringId: "n_shirt_happi_0_display_name";
		iconAddress: "n_shirt_happi_0_icon";
	}
>;
export type AvatarItemDisplayNShirtHappi1 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_happi_1",
	{
		displayStringId: "n_shirt_happi_1_display_name";
		iconAddress: "n_shirt_happi_1_icon";
	}
>;
export type AvatarItemDisplayNShirtHappi2 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_happi_2",
	{
		displayStringId: "n_shirt_happi_2_display_name";
		iconAddress: "n_shirt_happi_2_icon";
	}
>;
export type AvatarItemDisplayNShirtHgssA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_hgss_a_0",
	{
		displayStringId: "n_shirt_hgss_a_0_display_name";
		iconAddress: "n_shirt_hgss_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtHgssB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_hgss_b_0",
	{
		displayStringId: "n_shirt_hgss_b_0_display_name";
		iconAddress: "n_shirt_hgss_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtHoliday2022santacostumes0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_holiday2022santacostumes_0",
	{
		displayStringId: "n_shirt_holiday2022santacostumes_0_display_name";
		iconAddress: "n_shirt_holiday2022santacostumes_0_icon";
	}
>;
export type AvatarItemDisplayNShirtHoliday2024Marshtompsweater0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_holiday2024-marshtompsweater_0",
	{
		displayStringId: "avatar_shirt_marshtompsweater";
		iconAddress: "n_shirt_holiday2024-marshtompsweater_0_icon";
	}
>;
export type AvatarItemDisplayNShirtHoliday2024Staryusweater0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_holiday2024-staryusweater_0",
	{
		displayStringId: "avatar_shirt_staryusweater";
		iconAddress: "n_shirt_holiday2024-staryusweater_0_icon";
	}
>;
export type AvatarItemDisplayNShirtHoliday2024Wooloojacket0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_holiday2024-wooloojacket_0",
	{
		displayStringId: "avatar_shirt_wooloojacket";
		iconAddress: "n_shirt_holiday2024-wooloojacket_0_icon";
	}
>;
export type AvatarItemDisplayNShirtHolifestival2021black0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_holifestival2021black_0",
	{
		displayStringId: "n_shirt_holifestival2021black_0_display_name";
		iconAddress: "n_shirt_holifestival2021black_0_icon";
	}
>;
export type AvatarItemDisplayNShirtHolifestival2021white0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_holifestival2021white_0",
	{
		displayStringId: "n_shirt_holifestival2021white_0_display_name";
		iconAddress: "n_shirt_holifestival2021white_0_icon";
	}
>;
export type AvatarItemDisplayNShirtHoopaunboundtshirt0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_hoopaunboundtshirt_0",
	{
		displayStringId: "n_shirt_hoopaunboundtshirt_0_display_name";
		iconAddress: "n_shirt_hoopaunboundtshirt_0_icon";
	}
>;
export type AvatarItemDisplayNShirtIngo0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_ingo_0",
	{
		displayStringId: "n_shirt_ingo_0_display_name";
		iconAddress: "n_shirt_ingo_0_icon";
	}
>;
export type AvatarItemDisplayNShirtIngressE0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_ingress-e_0",
	{
		displayStringId: "n_shirt_ingress-e_0_display_name";
		iconAddress: "n_shirt_ingresse_0_icon";
	}
>;
export type AvatarItemDisplayNShirtIngressR0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_ingress-r_0",
	{
		displayStringId: "n_shirt_ingress-r_0_display_name";
		iconAddress: "n_shirt_ingressr_0_icon";
	}
>;
export type AvatarItemDisplayNShirtIngress0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_ingress_0",
	{
		displayStringId: "n_shirt_ingress_0_display_name";
		iconAddress: "n_shirt_ingress_0_icon";
	}
>;
export type AvatarItemDisplayNShirtJacketNewyear20220 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_jacket-newyear2022_0",
	{
		displayStringId: "n_shirt_jacket-newyear2022_0_display_name";
		iconAddress: "n_shirt_newyear2022_0_icon";
	}
>;
export type AvatarItemDisplayNShirtJames0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_james_0",
	{
		displayStringId: "n_shirt_james_b_0_display_name";
		iconAddress: "n_shirt_james_0_icon";
	}
>;
export type AvatarItemDisplayNShirtJessie0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_jessie_0",
	{
		displayStringId: "n_shirt_jessie_0_display_name";
		iconAddress: "n_shirt_jessie_0_icon";
	}
>;
export type AvatarItemDisplayNShirtJirachi0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_jirachi_0",
	{
		displayStringId: "n_shirt_jirachi_0_display_name";
		iconAddress: "n_shirt_jirachi_0_icon";
	}
>;
export type AvatarItemDisplayNShirtJogger0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_jogger_0",
	{
		displayStringId: "n_shirt_jogger_0_display_name";
		iconAddress: "n_shirt_jogger_0_icon";
	}
>;
export type AvatarItemDisplayNShirtKeldeotshirt0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_keldeotshirt_0",
	{
		displayStringId: "n_shirt_keldeotshirt_0_display_name";
		iconAddress: "n_shirt_keldeotshirt_0_icon";
	}
>;
export type AvatarItemDisplayNShirtKorrinaA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_korrina_a_0",
	{
		displayStringId: "n_shirt_korrina_a_0_display_name";
		iconAddress: "n_shirt_korrina_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtKorrinaB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_korrina_b_0",
	{
		displayStringId: "n_shirt_korrina_b_0_display_name";
		iconAddress: "n_shirt_korrina_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtLadiamondoutfitA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_ladiamondoutfit_a_0",
	{
		displayStringId: "n_shirt_ladiamondoutfit_a_0_display_name";
		iconAddress: "n_shirt_ladiamondoutfit_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtLadiamondoutfitB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_ladiamondoutfit_b_0",
	{
		displayStringId: "n_shirt_ladiamondoutfit_b_0_display_name";
		iconAddress: "n_shirt_ladiamondoutfit_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtLana0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_lana_0",
	{
		displayStringId: "AVATAR_LanaOutfit";
		iconAddress: "n_shirt_lana_0_icon";
	}
>;
export type AvatarItemDisplayNShirtLapearloutfitA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_lapearloutfit_a_0",
	{
		displayStringId: "n_shirt_lapearloutfit_a_0_display_name";
		iconAddress: "n_shirt_lapearloutfit_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtLapearloutfitB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_lapearloutfit_b_0",
	{
		displayStringId: "n_shirt_lapearloutfit_b_0_display_name";
		iconAddress: "n_shirt_lapearloutfit_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtLasecuritycorpsA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_lasecuritycorps_a_0",
	{
		displayStringId: "n_shirt_lasecuritycorps_a_0_display_name";
		iconAddress: "n_shirt_lasecuritycorps_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtLasecuritycorpsB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_lasecuritycorps_b_0",
	{
		displayStringId: "n_shirt_lasecuritycorps_b_0_display_name";
		iconAddress: "n_shirt_lasecuritycorps_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtLatiasLatios0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_latias-latios_0",
	{
		displayStringId: "n_shirt_latias-latios_0_display_name";
		iconAddress: "n_shirt_latiaslatios_0_icon";
	}
>;
export type AvatarItemDisplayNShirtLegendofarceusA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_legendofarceus_a_0",
	{
		displayStringId: "n_shirt_legendofarceus_a_0_display_name";
		iconAddress: "n_shirt_legendofarceus_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtLegendofarceusB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_legendofarceus_b_0",
	{
		displayStringId: "n_shirt_legendofarceus_b_0_display_name";
		iconAddress: "n_shirt_legendofarceus_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtLongsleevesCharizard0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_longsleeves-charizard_0",
	{
		displayStringId: "n_shirt_longsleeves-charizard_0_display_name";
		iconAddress: "n_shirt_longsleeves-charizard_0_icon";
	}
>;
export type AvatarItemDisplayNShirtLongsleevesCharizard1 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_longsleeves-charizard_1",
	{
		displayStringId: "n_shirt_longsleeves-charizard_0_display_name";
		iconAddress: "n_shirt_longsleeves-charizard_1_icon";
	}
>;
export type AvatarItemDisplayNShirtLongsleevesCharizard2 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_longsleeves-charizard_2",
	{
		displayStringId: "n_shirt_longsleeves-charizard_0_display_name";
		iconAddress: "n_shirt_longsleeves-charizard_2_icon";
	}
>;
export type AvatarItemDisplayNShirtLongsleevesPikachu0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_longsleeves-pikachu_0",
	{
		displayStringId: "n_shirt_longsleeves-pikachu_0_display_name";
		iconAddress: "n_shirt_longsleeves-pikachu_0_icon";
	}
>;
export type AvatarItemDisplayNShirtLongsleevesPikachu1 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_longsleeves-pikachu_1",
	{
		displayStringId: "n_shirt_longsleeves-pikachu_0_display_name";
		iconAddress: "n_shirt_longsleeves-pikachu_1_icon";
	}
>;
export type AvatarItemDisplayNShirtLongsleevesPikachu2 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_longsleeves-pikachu_2",
	{
		displayStringId: "n_shirt_longsleeves-pikachu_0_display_name";
		iconAddress: "n_shirt_longsleeves-pikachu_2_icon";
	}
>;
export type AvatarItemDisplayNShirtLooseFitting0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_loose-fitting_0",
	{
		displayStringId: "AVATAR_darkbaggyjacket";
		iconAddress: "n_shirt_loose-fitting_0_icon";
	}
>;
export type AvatarItemDisplayNShirtLooseFitting1 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_loose-fitting_1",
	{
		displayStringId: "AVATAR_lightbaggyjacket";
		iconAddress: "n_shirt_loose-fitting_1_icon";
	}
>;
export type AvatarItemDisplayNShirtLuvdiscpackA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_luvdiscpack_a_0",
	{
		displayStringId: "n_shirt_luvdiscpack_a_0_display_name";
		iconAddress: "n_shirt_luvdiscpack_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtLuvdiscpackB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_luvdiscpack_b_0",
	{
		displayStringId: "n_shirt_luvdiscpack_b_0_display_name";
		iconAddress: "n_shirt_luvdiscpack_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtLvl500 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_lvl50_0",
	{
		displayStringId: "n_shirt_lvl50_0_display_name";
		iconAddress: "n_shirt_lvl50_0_icon";
	}
>;
export type AvatarItemDisplayNShirtLvl501 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_lvl50_1",
	{
		displayStringId: "n_shirt_lvl50_0_display_name";
		iconAddress: "n_shirt_lvl50_1_icon";
	}
>;
export type AvatarItemDisplayNShirtLvl80Circuitjacket0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_lvl80-circuitjacket_0",
	{
		displayStringId: "avatar_n_shirt_lvl80-circuitjacket_0";
		iconAddress: "n_shirt_lvl80-circuitjacket_0_icon";
	}
>;
export type AvatarItemDisplayNShirtLysandre0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_lysandre_0",
	{
		displayStringId: "n_shirt_lysandre_0_display_name";
		iconAddress: "n_shirt_lysandre_0_icon";
	}
>;
export type AvatarItemDisplayNShirtMarshadowtshirt0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_marshadowtshirt_0",
	{
		displayStringId: "N_Marshadow_Tee";
		iconAddress: "n_shirt_marshadowtshirt_0_icon";
	}
>;
export type AvatarItemDisplayNShirtMegalopunnyitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_megalopunnyitems_0",
	{
		displayStringId: "n_shirt_megalopunnyitems_0_display_name";
		iconAddress: "n_shirt_megalopunnyitems_0_icon";
	}
>;
export type AvatarItemDisplayNShirtMegarayquaza0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_megarayquaza_0",
	{
		displayStringId: "n_shirt_megarayquaza_0_display_name";
		iconAddress: "n_shirt_megarayquaza_0_icon";
	}
>;
export type AvatarItemDisplayNShirtMelmetaljacket0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_melmetaljacket_0",
	{
		displayStringId: "n_shirt_melmetaljacket_0_display_name";
		iconAddress: "n_shirt_melmetaljacket_0_icon";
	}
>;
export type AvatarItemDisplayNShirtMelmetalvest0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_melmetalvest_0",
	{
		displayStringId: "n_shirt_melmetalvest_0_display_name";
		iconAddress: "n_shirt_melmetalvest_0_icon";
	}
>;
export type AvatarItemDisplayNShirtMeloettatshirt0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_meloettatshirt_0",
	{
		displayStringId: "n_shirt_meloettatshirt_0_display_name";
		iconAddress: "n_shirt_meloettatshirt_0_icon";
	}
>;
export type AvatarItemDisplayNShirtMeltan0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_meltan_0",
	{
		displayStringId: "n_shirt_meltan_0_display_name";
		iconAddress: "n_shirt_meltan_0_icon";
	}
>;
export type AvatarItemDisplayNShirtMew0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_mew_0",
	{
		displayStringId: "n_shirt_mew_0_display_name";
		iconAddress: "n_shirt_mew_0_icon";
	}
>;
export type AvatarItemDisplayNShirtMewtwoA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_mewtwo_a_0",
	{
		displayStringId: "n_shirt_mewtwo_a_0_display_name";
		iconAddress: "n_shirt_mewtwo_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtMewtwoB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_mewtwo_b_0",
	{
		displayStringId: "n_shirt_mewtwo_b_0_display_name";
		iconAddress: "n_shirt_mewtwo_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtMisty0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_misty_0",
	{
		displayStringId: "n_shirt_misty_0_display_name";
		iconAddress: "n_shirt_misty_0_icon";
	}
>;
export type AvatarItemDisplayNShirtMorpekofullonesie0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_morpekofullonesie_0",
	{
		displayStringId: "avatar_shirt_morpekofullbelly";
		iconAddress: "n_shirt_morpekofullonesie_0_icon";
	}
>;
export type AvatarItemDisplayNShirtMorpekohangryonesie0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_morpekohangryonesie_0",
	{
		displayStringId: "avatar_shirt_morpekohangry";
		iconAddress: "n_shirt_morpekohangryonesie_0_icon";
	}
>;
export type AvatarItemDisplayNShirtMovie2020jessiejamesA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_movie2020jessiejames_a_0",
	{
		displayStringId: "n_shirt_movie2020jessiejames_a_0_display_name";
		iconAddress: "n_shirt_movie2020jessiejames_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtMovie2020jessiejamesB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_movie2020jessiejames_b_0",
	{
		displayStringId: "n_shirt_movie2020jessiejames_b_0_display_name";
		iconAddress: "n_shirt_movie2020jessiejames_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtMunnapackA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_munnapack_a_0",
	{
		displayStringId: "n_shirt_munnapack_a_0_display_name";
		iconAddress: "n_shirt_munnapack_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtMunnapackB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_munnapack_b_0",
	{
		displayStringId: "n_shirt_munnapack_b_0_display_name";
		iconAddress: "n_shirt_munnapack_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtMustard0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_mustard_0",
	{
		displayStringId: "avatar_shirt_mustard";
		iconAddress: "n_shirt_mustard_0_icon";
	}
>;
export type AvatarItemDisplayNShirtNaganadelaitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_naganadelaitems_0",
	{
		displayStringId: "N_Naganadel_Jacket";
		iconAddress: "n_shirt_naganadelaitems_0_icon";
	}
>;
export type AvatarItemDisplayNShirtNecrozmaitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_necrozmaitems_0",
	{
		displayStringId: "AVATAR_NecrozmaJacket";
		iconAddress: "n_shirt_necrozmaitems_0_icon";
	}
>;
export type AvatarItemDisplayNShirtNike20210 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_nike2021_0",
	{
		displayStringId: "n_shirt_nike2021_0_display_name";
		iconAddress: "n_shirt_nike2021_0_icon";
	}
>;
export type AvatarItemDisplayNShirtOcshirt045A0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_ocshirt-045_a_0",
	{
		displayStringId: "n_shirt_ocshirt-045_a_0_display_name";
		iconAddress: "n_shirt_ocshirt_a_45_icon";
	}
>;
export type AvatarItemDisplayNShirtOcshirt045B0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_ocshirt-045_b_0",
	{
		displayStringId: "n_shirt_ocshirt-045_b_0_display_name";
		iconAddress: "n_shirt_ocshirt_b_45_icon";
	}
>;
export type AvatarItemDisplayNShirtOcshirt108A0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_ocshirt-108_a_0",
	{
		displayStringId: "n_shirt_ocshirt-108_a_0_display_name";
		iconAddress: "n_shirt_ocshirt_a_108_icon";
	}
>;
export type AvatarItemDisplayNShirtOcshirt108B0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_ocshirt-108_b_0",
	{
		displayStringId: "n_shirt_ocshirt-108_b_0_display_name";
		iconAddress: "n_shirt_ocshirt_b_108_icon";
	}
>;
export type AvatarItemDisplayNShirtOcshirt129A0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_ocshirt-129_a_0",
	{
		displayStringId: "n_shirt_ocshirt-129_a_0_display_name";
		iconAddress: "n_shirt_ocshirt_a_129_icon";
	}
>;
export type AvatarItemDisplayNShirtOcshirt129B0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_ocshirt-129_b_0",
	{
		displayStringId: "n_shirt_ocshirt-129_b_0_display_name";
		iconAddress: "n_shirt_ocshirt_b_129_icon";
	}
>;
export type AvatarItemDisplayNShirtOcshirt143A0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_ocshirt-143_a_0",
	{
		displayStringId: "n_shirt_ocshirt-143_a_0_display_name";
		iconAddress: "n_shirt_ocshirt_a_143_icon";
	}
>;
export type AvatarItemDisplayNShirtOcshirt143B0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_ocshirt-143_b_0",
	{
		displayStringId: "n_shirt_ocshirt-143_b_0_display_name";
		iconAddress: "n_shirt_ocshirt_b_143_icon";
	}
>;
export type AvatarItemDisplayNShirtOrasA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_oras_a_0",
	{
		displayStringId: "n_shirt_oras_a_0_display_name";
		iconAddress: "n_shirt_oras_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtOrasB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_oras_b_0",
	{
		displayStringId: "n_shirt_oras_b_0_display_name";
		iconAddress: "n_shirt_oras_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtPajamas20220 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_pajamas2022_0",
	{
		displayStringId: "n_shirt_pajamas2022_0_display_name";
		iconAddress: "n_shirt_pajamas2022_0_icon";
	}
>;
export type AvatarItemDisplayNShirtPajamas20221 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_pajamas2022_1",
	{
		displayStringId: "n_shirt_pajamas2022_0_display_name";
		iconAddress: "n_shirt_pajamas2022_1_icon";
	}
>;
export type AvatarItemDisplayNShirtPalmer0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_palmer_0",
	{
		displayStringId: "n_shirt_palmer_0_display_name";
		iconAddress: "n_shirt_palmer_0_icon";
	}
>;
export type AvatarItemDisplayNShirtPartneritemsjan2024hoodie0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_partneritemsjan2024hoodie_0",
	{
		displayStringId: "n_shirt_partneritemsjan2024hoodie_0_display_name";
		iconAddress: "n_shirt_partneritemsjan2024hoodie_0_icon";
	}
>;
export type AvatarItemDisplayNShirtPartneritemsjan2024tshirt0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_partneritemsjan2024tshirt_0",
	{
		displayStringId: "n_shirt_partneritemsjan2024tshirt_0_display_name";
		iconAddress: "n_shirt_partneritemsjan2024tshirt_0_icon";
	}
>;
export type AvatarItemDisplayNShirtPikachubutlerBlue0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_pikachubutler-blue_0",
	{
		displayStringId: "avatar_shirt_suitblue";
		iconAddress: "n_shirt_pikachubutler-blue_0_icon";
	}
>;
export type AvatarItemDisplayNShirtPikachubutlerRed0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_pikachubutler-red_0",
	{
		displayStringId: "avatar_shirt_suitred";
		iconAddress: "n_shirt_pikachubutler-red_0_icon";
	}
>;
export type AvatarItemDisplayNShirtPikachubutlerYellow0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_pikachubutler-yellow_0",
	{
		displayStringId: "avatar_shirt_suityellow";
		iconAddress: "n_shirt_pikachubutler-yellow_0_icon";
	}
>;
export type AvatarItemDisplayNShirtPikachufanA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_pikachufan_a_0",
	{
		displayStringId: "n_shirt_pikachufan_a_0_display_name";
		iconAddress: "n_shirt_pikachufan_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtPikachufanB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_pikachufan_b_0",
	{
		displayStringId: "n_shirt_pikachufan_b_0_display_name";
		iconAddress: "n_shirt_pikachufan_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtPikachulibreA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_pikachulibre_a_0",
	{
		displayStringId: "n_shirt_pikachulibre_a_0_display_name";
		iconAddress: "n_shirt_pikachulibre_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtPikachulibreB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_pikachulibre_b_0",
	{
		displayStringId: "n_shirt_pikachulibre_b_0_display_name";
		iconAddress: "n_shirt_pikachulibre_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtPikachuonesie0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_pikachuonesie_0",
	{
		displayStringId: "n_shirt_pikachuonesie_0_display_name";
		iconAddress: "n_shirt_pikachuonesie_0_icon";
	}
>;
export type AvatarItemDisplayNShirtPinpukuhoodie0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_pinpukuhoodie_0",
	{
		displayStringId: "n_shirt_pinpukuhoodie_0_display_name";
		iconAddress: "n_shirt_pinpukuhoodie_0_icon";
	}
>;
export type AvatarItemDisplayNShirtPipluponesie0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_pipluponesie_0",
	{
		displayStringId: "n_shirt_pipluponesie_0_display_name";
		iconAddress: "n_shirt_pipluponesie_0_icon";
	}
>;
export type AvatarItemDisplayNShirtPkmnhoodie0010 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_pkmnhoodie001_0",
	{
		displayStringId: "n_shirt_pkmnhoodie001_0_display_name";
		iconAddress: "n_shirt_pkmnhoodie001_0_icon";
	}
>;
export type AvatarItemDisplayNShirtPkmnhoodie0040 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_pkmnhoodie004_0",
	{
		displayStringId: "n_shirt_pkmnhoodie004_0_display_name";
		iconAddress: "n_shirt_pkmnhoodie004_0_icon";
	}
>;
export type AvatarItemDisplayNShirtPkmnhoodie0070 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_pkmnhoodie007_0",
	{
		displayStringId: "n_shirt_pkmnhoodie007_0_display_name";
		iconAddress: "n_shirt_pkmnhoodie007_0_icon";
	}
>;
export type AvatarItemDisplayNShirtPkmnshirts1650 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_pkmnshirts-165_0",
	{
		displayStringId: "n_shirt_pkmnshirts-165_0_display_name";
		iconAddress: "n_shirt_pkmnshirts_165_icon";
	}
>;
export type AvatarItemDisplayNShirtPkmnshirts1880 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_pkmnshirts-188_0",
	{
		displayStringId: "n_shirt_pkmnshirts-188_0_display_name";
		iconAddress: "n_shirt_pkmnshirts_188_icon";
	}
>;
export type AvatarItemDisplayNShirtPkmnshirts2010 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_pkmnshirts-201_0",
	{
		displayStringId: "n_shirt_pkmnshirts-201_0_display_name";
		iconAddress: "n_shirt_pkmnshirts_201_icon";
	}
>;
export type AvatarItemDisplayNShirtPkmnshirts2380 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_pkmnshirts-238_0",
	{
		displayStringId: "n_shirt_pkmnshirts-238_0_display_name";
		iconAddress: "n_shirt_pkmnshirts_238_icon";
	}
>;
export type AvatarItemDisplayNShirtPkmnshirts20210 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_pkmnshirts2021_0",
	{
		displayStringId: "n_shirt_pkmnshirts2021_0_display_name";
		iconAddress: "n_shirt_pkmnshirts2021_0_icon";
	}
>;
export type AvatarItemDisplayNShirtPkmnshirts20211 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_pkmnshirts2021_1",
	{
		displayStringId: "n_shirt_pkmnshirts2021_1_display_name";
		iconAddress: "n_shirt_pkmnshirts2021_1_icon";
	}
>;
export type AvatarItemDisplayNShirtPkmnshirts20212 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_pkmnshirts2021_2",
	{
		displayStringId: "n_shirt_pkmnshirts2021_2_display_name";
		iconAddress: "n_shirt_pkmnshirts2021_2_icon";
	}
>;
export type AvatarItemDisplayNShirtPokeballitemsBasic0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_pokeballitems-basic_0",
	{
		displayStringId: "avatar_n_shirt_pokeballitems-basic_0";
		iconAddress: "n_shirt_pokeballitems-basic_0_icon";
	}
>;
export type AvatarItemDisplayNShirtPokeballitemsGreat0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_pokeballitems-great_0",
	{
		displayStringId: "avatar_n_shirt_pokeballitems-great_0";
		iconAddress: "n_shirt_pokeballitems-great_0_icon";
	}
>;
export type AvatarItemDisplayNShirtPokeballitemsUltra0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_pokeballitems-ultra_0",
	{
		displayStringId: "avatar_n_shirt_pokeballitems-ultra_0";
		iconAddress: "n_shirt_pokeballitems-ultra_0_icon";
	}
>;
export type AvatarItemDisplayNShirtPoloshirt0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_poloshirt_0",
	{
		displayStringId: "n_shirt_poloshirt_0_display_name";
		iconAddress: "n_shirt_poloshirt_0_icon";
	}
>;
export type AvatarItemDisplayNShirtPoloshirt1 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_poloshirt_1",
	{
		displayStringId: "n_shirt_poloshirt_1_display_name";
		iconAddress: "n_shirt_poloshirt_1_icon";
	}
>;
export type AvatarItemDisplayNShirtPoloshirt2 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_poloshirt_2",
	{
		displayStringId: "n_shirt_poloshirt_2_display_name";
		iconAddress: "n_shirt_poloshirt_2_icon";
	}
>;
export type AvatarItemDisplayNShirtProfwillowoutfit0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_profwillowoutfit_0",
	{
		displayStringId: "n_shirt_profwillowoutfit_0_display_name";
		iconAddress: "n_shirt_profwillowoutfit_0_icon";
	}
>;
export type AvatarItemDisplayNShirtProjectguitar0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_projectguitar_0",
	{
		displayStringId: "n_shirt_projectguitar_0_display_name";
		iconAddress: "n_shirt_projectguitar_0_icon";
	}
>;
export type AvatarItemDisplayNShirtPumpkabooitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_pumpkabooitems_0",
	{
		displayStringId: "n_shirt_pumpkabooitems_0_display_name";
		iconAddress: "n_shirt_pumpkabooitems_0_icon";
	}
>;
export type AvatarItemDisplayNShirtRegiicejersies0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_regiicejersies_0",
	{
		displayStringId: "n_shirt_regiicejersies_0_display_name";
		iconAddress: "n_shirt_regiicejersies_0_icon";
	}
>;
export type AvatarItemDisplayNShirtRegirockjersies0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_regirockjersies_0",
	{
		displayStringId: "n_shirt_regirockjersies_0_display_name";
		iconAddress: "n_shirt_regirockjersies_0_icon";
	}
>;
export type AvatarItemDisplayNShirtRegisteeljersies0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_registeeljersies_0",
	{
		displayStringId: "n_shirt_registeeljersies_0_display_name";
		iconAddress: "n_shirt_registeeljersies_0_icon";
	}
>;
export type AvatarItemDisplayNShirtReuniclusitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_reuniclusitems_0",
	{
		displayStringId: "n_shirt_reuniclusitems_0_display_name";
		iconAddress: "n_shirt_reuniclusitems_0_icon";
	}
>;
export type AvatarItemDisplayNShirtRuinmaniacA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_ruinmaniac_a_0",
	{
		displayStringId: "n_shirt_ruinmaniac_a_0_display_name";
		iconAddress: "n_shirt_ruinmaniac_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtRuinmaniacB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_ruinmaniac_b_0",
	{
		displayStringId: "n_shirt_ruinmaniac_b_0_display_name";
		iconAddress: "n_shirt_ruinmaniac_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtS19gbl0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_s19gbl_0",
	{
		displayStringId: "avatar_shirt_gbl19";
		iconAddress: "n_shirt_s19gbl_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSafarizone2020A0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_safarizone2020_a_0",
	{
		displayStringId: "n_shirt_safarizone2020_a_0_display_name";
		iconAddress: "n_shirt_safarizone2020_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSafarizone2020B0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_safarizone2020_b_0",
	{
		displayStringId: "n_shirt_safarizone2020_b_0_display_name";
		iconAddress: "n_shirt_safarizone2020_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSamsungsummer20200 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_samsungsummer2020_0",
	{
		displayStringId: "n_shirt_samsungsummer2020_0_display_name";
		iconAddress: "n_shirt_samsungsummer2020_0_icon";
	}
>;
export type AvatarItemDisplayNShirtScolipede0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_scolipede_0",
	{
		displayStringId: "avatar_shirt_scolipede";
		iconAddress: "n_shirt_scolipede_0_icon";
	}
>;
export type AvatarItemDisplayNShirtShayminlandtshirt0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_shayminlandtshirt_0",
	{
		displayStringId: "n_shirt_shayminlandtshirt_0_display_name";
		iconAddress: "n_shirt_shayminlandtshirt_0_icon";
	}
>;
export type AvatarItemDisplayNShirtShayminskytshirt0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_shayminskytshirt_0",
	{
		displayStringId: "n_shirt_shayminskytshirt_0_display_name";
		iconAddress: "n_shirt_shayminskytshirt_0_icon";
	}
>;
export type AvatarItemDisplayNShirtShinydiancie = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_shinydiancie",
	{
		displayStringId: "avatar_shirt_shinydiancie";
		iconAddress: "n_shirt_shinydiancie_icon";
	}
>;
export type AvatarItemDisplayNShirtShinykeldeoshirt0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_shinykeldeoshirt_0",
	{
		displayStringId: "avatar_n_shirt_shinykeldeotshirt";
		iconAddress: "n_shirt_shinykeldeoshirt_0_icon";
	}
>;
export type AvatarItemDisplayNShirtShinymeloettatshirt0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_shinymeloettatshirt_0",
	{
		displayStringId: "avatar_shirt_shinymeloetta";
		iconAddress: "n_shirt_shinymeloettatshirt_0_icon";
	}
>;
export type AvatarItemDisplayNShirtShinymewtshirts0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_shinymewtshirts_0",
	{
		displayStringId: "n_shirt_shinymewtshirts_0_display_name";
		iconAddress: "n_shirt_shinymewtshirts_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSlowpokeshirts0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_slowpokeshirts_0",
	{
		displayStringId: "n_shirt_slowpokeshirts_0_display_name";
		iconAddress: "n_shirt_slowpokeshirts_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSlowpoketailshirts0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_slowpoketailshirts_0",
	{
		displayStringId: "n_shirt_slowpoketailshirts_0_display_name";
		iconAddress: "n_shirt_slowpoketailshirts_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSnorlaxonesie0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_snorlaxonesie_0",
	{
		displayStringId: "n_shirt_snorlaxonesie_0_display_name";
		iconAddress: "n_shirt_snorlaxonesie_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSpiritomb0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_spiritomb_0",
	{
		displayStringId: "n_shirt_spiritomb_0_display_name";
		iconAddress: "n_shirt_spiritomb_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSpring2021gulpinA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_spring2021gulpin_a_0",
	{
		displayStringId: "n_shirt_spring2021gulpin_a_0_display_name";
		iconAddress: "n_shirt_spring2021gulpin_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSpring2021gulpinB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_spring2021gulpin_b_0",
	{
		displayStringId: "n_shirt_spring2021gulpin_b_0_display_name";
		iconAddress: "n_shirt_spring2021gulpin_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSpring2021plusleA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_spring2021plusle_a_0",
	{
		displayStringId: "n_shirt_spring2021plusle_a_0_display_name";
		iconAddress: "n_shirt_spring2021plusle_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSpring2021plusleB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_spring2021plusle_b_0",
	{
		displayStringId: "n_shirt_spring2021plusle_b_0_display_name";
		iconAddress: "n_shirt_spring2021plusle_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSsA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_ss_a_0",
	{
		displayStringId: "n_shirt_ss_a_0_display_name";
		iconAddress: "n_shirt_ss_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSsB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_ss_b_0",
	{
		displayStringId: "n_shirt_ss_b_0_display_name";
		iconAddress: "n_shirt_ss_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSteven0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_steven_0",
	{
		displayStringId: "n_shirt_steven_0_display_name";
		iconAddress: "n_shirt_steven_0_icon";
	}
>;
export type AvatarItemDisplayNShirtStevenfirst0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_stevenfirst_0",
	{
		displayStringId: "n_shirt_stevenfirst_0_display_name";
		iconAddress: "n_shirt_stevenfirst_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSukajanblastoise0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_sukajanblastoise_0",
	{
		displayStringId: "n_shirt_sukajanblastoise_0_display_name";
		iconAddress: "n_shirt_sukajanblastoise_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSukajancharizard0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_sukajancharizard_0",
	{
		displayStringId: "n_shirt_sukajancharizard_0_display_name";
		iconAddress: "n_shirt_sukajancharizard_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSukajanhouou0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_sukajanhouou_0",
	{
		displayStringId: "n_shirt_sukajanhouou_0_display_name";
		iconAddress: "n_shirt_sukajanhouou_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSukajanlugia0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_sukajanlugia_0",
	{
		displayStringId: "n_shirt_sukajanlugia_0_display_name";
		iconAddress: "n_shirt_sukajanlugia_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSukajanvenusaur0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_sukajanvenusaur_0",
	{
		displayStringId: "n_shirt_sukajanvenusaur_0_display_name";
		iconAddress: "n_shirt_sukajanvenusaur_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSummer20230 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_summer2023_0",
	{
		displayStringId: "n_shirt_summer2023_0_display_name";
		iconAddress: "n_shirt_summer2023_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSustainability2021A0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_sustainability2021_a_0",
	{
		displayStringId: "n_shirt_sustainability2021_a_0_display_name";
		iconAddress: "n_shirt_sustainability2021_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSustainability2021B0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_sustainability2021_b_0",
	{
		displayStringId: "n_shirt_sustainability2021_b_0_display_name";
		iconAddress: "n_shirt_sustainability2021_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSvcostumescarletschool0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_svcostumescarletschool_0",
	{
		displayStringId: "n_shirt_svcostumescarletschool_0_display_name";
		iconAddress: "n_shirt_svcostumescarletschool_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSvcostumevioletschool0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_svcostumevioletschool_0",
	{
		displayStringId: "n_shirt_svcostumevioletschool_0_display_name";
		iconAddress: "n_shirt_svcostumevioletschool_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSvdlc10 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_svdlc1_0",
	{
		displayStringId: "n_shirt_svdlc1_0_display_name";
		iconAddress: "n_shirt_svdlc1_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSvdlc2fall0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_svdlc2fall_0",
	{
		displayStringId: "n_shirt_svdlc2fall_0_display_name";
		iconAddress: "n_shirt_svdlc2fall_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSvdlc2spring0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_svdlc2spring_0",
	{
		displayStringId: "n_shirt_svdlc2spring_0_display_name";
		iconAddress: "n_shirt_svdlc2spring_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSweater300 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_sweater-30_0",
	{
		displayStringId: "n_shirt_sweater-30_2_display_name";
		iconAddress: "n_shirt_sweater-30_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSweater301 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_sweater-30_1",
	{
		displayStringId: "n_shirt_sweater-30_2_display_name";
		iconAddress: "n_shirt_sweater-30_1_icon";
	}
>;
export type AvatarItemDisplayNShirtSweater302 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_sweater-30_2",
	{
		displayStringId: "n_shirt_sweater-30_2_display_name";
		iconAddress: "n_shirt_sweater-30_2_icon";
	}
>;
export type AvatarItemDisplayNShirtSweaterInstinct0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_sweater-instinct_0",
	{
		displayStringId: "n_shirt_sweater-instinct_0_display_name";
		iconAddress: "n_shirt_sweaterinstinct_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSweaterMystic0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_sweater-mystic_0",
	{
		displayStringId: "n_shirt_sweater-mystic_0_display_name";
		iconAddress: "n_shirt_sweatermystic_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSweaterValor0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_sweater-valor_0",
	{
		displayStringId: "n_shirt_sweater-valor_0_display_name";
		iconAddress: "n_shirt_sweatervalor_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSweatshirtSporty0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_sweatshirt-sporty_0",
	{
		displayStringId: "n_shirt_sweatshirt-sporty_0_display_name";
		iconAddress: "n_shirt_sweatshirt-sporty_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSweatshirtSporty1 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_sweatshirt-sporty_1",
	{
		displayStringId: "n_shirt_sweatshirt-sporty_0_display_name";
		iconAddress: "n_shirt_sweatshirt-sporty_1_icon";
	}
>;
export type AvatarItemDisplayNShirtSweatshirtSporty2 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_sweatshirt-sporty_2",
	{
		displayStringId: "n_shirt_sweatshirt-sporty_0_display_name";
		iconAddress: "n_shirt_sweatshirt-sporty_2_icon";
	}
>;
export type AvatarItemDisplayNShirtSweatshirtSporty3 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_sweatshirt-sporty_3",
	{
		displayStringId: "n_shirt_sweatshirt-sporty_0_display_name";
		iconAddress: "n_shirt_sweatshirt-sporty_3_icon";
	}
>;
export type AvatarItemDisplayNShirtSweatshirtStreak0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_sweatshirt-streak_0",
	{
		displayStringId: "n_shirt_sweatshirt-streak_0_display_name";
		iconAddress: "n_shirt_sweatshirt-streak_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSweatshirtStreak1 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_sweatshirt-streak_1",
	{
		displayStringId: "n_shirt_sweatshirt-streak_0_display_name";
		iconAddress: "n_shirt_sweatshirt-streak_1_icon";
	}
>;
export type AvatarItemDisplayNShirtSweatshirtStreak2 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_sweatshirt-streak_2",
	{
		displayStringId: "n_shirt_sweatshirt-streak_0_display_name";
		iconAddress: "n_shirt_sweatshirt-streak_2_icon";
	}
>;
export type AvatarItemDisplayNShirtSweatshirtStreak3 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_sweatshirt-streak_3",
	{
		displayStringId: "n_shirt_sweatshirt-streak_0_display_name";
		iconAddress: "n_shirt_sweatshirt-streak_3_icon";
	}
>;
export type AvatarItemDisplayNShirtSweatshirtStreak4 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_sweatshirt-streak_4",
	{
		displayStringId: "n_shirt_sweatshirt-streak_0_display_name";
		iconAddress: "n_shirt_sweatshirt-streak_4_icon";
	}
>;
export type AvatarItemDisplayNShirtSwshdlc2costume0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_swshdlc2costume_0",
	{
		displayStringId: "n_shirt_swshdlc2costume_0_display_name";
		iconAddress: "n_shirt_swshdlc2costume_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSwshdlccostumeA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_swshdlccostume_a_0",
	{
		displayStringId: "n_shirt_swshdlccostume_a_0_display_name";
		iconAddress: "n_shirt_swshdlccostume_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSwshdlccostumeB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_swshdlccostume_b_0",
	{
		displayStringId: "n_shirt_swshdlccostume_b_0_display_name";
		iconAddress: "n_shirt_swshdlccostume_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSwshuniformchampion0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_swshuniformchampion_0",
	{
		displayStringId: "n_shirt_swshuniformchampion_0_display_name";
		iconAddress: "n_shirt_swshuniformchampion_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSwshuniformdarkA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_swshuniformdark_a_0",
	{
		displayStringId: "n_shirt_swshuniformdark_a_0_display_name";
		iconAddress: "n_shirt_swshuniformdark_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSwshuniformdarkB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_swshuniformdark_b_0",
	{
		displayStringId: "n_shirt_swshuniformdark_b_0_display_name";
		iconAddress: "n_shirt_swshuniformdark_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSwshuniformdefault0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_swshuniformdefault_0",
	{
		displayStringId: "n_shirt_swshuniformdefault_0_display_name";
		iconAddress: "n_shirt_swshuniformdefault_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSwshuniformdragon0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_swshuniformdragon_0",
	{
		displayStringId: "n_shirt_swshuniformdragon_0_display_name";
		iconAddress: "n_shirt_swshuniformdragon_0_icon";
	}
>;
export type AvatarItemDisplayNShirtSylveonitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_sylveonitems_0",
	{
		displayStringId: "n_shirt_sylveonitems_0_display_name";
		iconAddress: "n_shirt_sylveonitems_0_icon";
	}
>;
export type AvatarItemDisplayNShirtTandemausitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_tandemausitems_0",
	{
		displayStringId: "AVATAR_TandemausHoodie";
		iconAddress: "n_shirt_tandemausitems_0_icon";
	}
>;
export type AvatarItemDisplayNShirtTanktopCharizard0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_tanktop-charizard_0",
	{
		displayStringId: "n_shirt_tanktop-charizard_2_display_name";
		iconAddress: "n_shirt_tanktop-charizard_0_icon";
	}
>;
export type AvatarItemDisplayNShirtTanktopCharizard1 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_tanktop-charizard_1",
	{
		displayStringId: "n_shirt_tanktop-charizard_2_display_name";
		iconAddress: "n_shirt_tanktop-charizard_1_icon";
	}
>;
export type AvatarItemDisplayNShirtTanktopCharizard2 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_tanktop-charizard_2",
	{
		displayStringId: "n_shirt_tanktop-charizard_2_display_name";
		iconAddress: "n_shirt_tanktop-charizard_2_icon";
	}
>;
export type AvatarItemDisplayNShirtTanktopPikachu0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_tanktop-pikachu_0",
	{
		displayStringId: "n_shirt_tanktop-pikachu_2_display_name";
		iconAddress: "n_shirt_tanktop-pikachu_0_icon";
	}
>;
export type AvatarItemDisplayNShirtTanktopPikachu1 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_tanktop-pikachu_1",
	{
		displayStringId: "n_shirt_tanktop-pikachu_2_display_name";
		iconAddress: "n_shirt_tanktop-pikachu_1_icon";
	}
>;
export type AvatarItemDisplayNShirtTanktopPikachu2 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_tanktop-pikachu_2",
	{
		displayStringId: "n_shirt_tanktop-pikachu_2_display_name";
		iconAddress: "n_shirt_tanktop-pikachu_2_icon";
	}
>;
export type AvatarItemDisplayNShirtTanktop0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_tanktop_0",
	{
		displayStringId: "n_shirt_tanktop_2_display_name";
		iconAddress: "n_shirt_tanktop_0_icon";
	}
>;
export type AvatarItemDisplayNShirtTanktop1 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_tanktop_1",
	{
		displayStringId: "n_shirt_tanktop_2_display_name";
		iconAddress: "n_shirt_tanktop_1_icon";
	}
>;
export type AvatarItemDisplayNShirtTanktop2 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_tanktop_2",
	{
		displayStringId: "n_shirt_tanktop_2_display_name";
		iconAddress: "n_shirt_tanktop_2_icon";
	}
>;
export type AvatarItemDisplayNShirtTcgcollabtshirtandcap0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_tcgcollabtshirtandcap_0",
	{
		displayStringId: "n_shirt_tcgcollabtshirtandcap_0_display_name";
		iconAddress: "n_shirt_tcgcollabtshirtandcap_0_icon";
	}
>;
export type AvatarItemDisplayNShirtTeamaquaA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_teamaqua_a_0",
	{
		displayStringId: "n_shirt_teamaqua_a_0_display_name";
		iconAddress: "n_shirt_teamaqua_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtTeamaquaB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_teamaqua_b_0",
	{
		displayStringId: "n_shirt_teamaqua_b_0_display_name";
		iconAddress: "n_shirt_teamaqua_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtTeamblancheA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_teamblanche_a_0",
	{
		displayStringId: "n_shirt_teamblanche_a_0_display_name";
		iconAddress: "n_shirt_teamblanche_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtTeamblancheB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_teamblanche_b_0",
	{
		displayStringId: "n_shirt_teamblanche_b_0_display_name";
		iconAddress: "n_shirt_teamblanche_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtTeamcandelaA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_teamcandela_a_0",
	{
		displayStringId: "n_shirt_teamcandela_a_0_display_name";
		iconAddress: "n_shirt_teamcandela_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtTeamcandelaB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_teamcandela_b_0",
	{
		displayStringId: "n_shirt_teamcandela_b_0_display_name";
		iconAddress: "n_shirt_teamcandela_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtTeammagmaA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_teammagma_a_0",
	{
		displayStringId: "n_shirt_teammagma_a_0_display_name";
		iconAddress: "n_shirt_teammagma_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtTeammagmaB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_teammagma_b_0",
	{
		displayStringId: "n_shirt_teammagma_b_0_display_name";
		iconAddress: "n_shirt_teammagma_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtTeamrocketA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_teamrocket_a_0",
	{
		displayStringId: "n_shirt_teamrocket_a_0_display_name";
		iconAddress: "n_shirt_teamrocket_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtTeamrocketA1 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_teamrocket_a_1",
	{
		displayStringId: "n_shirt_teamrocket_a_1_display_name";
		iconAddress: "n_shirt_teamrocket_a_1_icon";
	}
>;
export type AvatarItemDisplayNShirtTeamrocketB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_teamrocket_b_0",
	{
		displayStringId: "n_shirt_teamrocket_b_0_display_name";
		iconAddress: "n_shirt_teamrocket_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtTeamrocketB1 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_teamrocket_b_1",
	{
		displayStringId: "n_shirt_teamrocket_b_1_display_name";
		iconAddress: "n_shirt_teamrocket_b_1_icon";
	}
>;
export type AvatarItemDisplayNShirtTeamskull0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_teamskull_0",
	{
		displayStringId: "n_shirt_teamskull_0_display_name";
		iconAddress: "n_shirt_teamskull_0_icon";
	}
>;
export type AvatarItemDisplayNShirtTeamsparkA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_teamspark_a_0",
	{
		displayStringId: "n_shirt_teamspark_a_0_display_name";
		iconAddress: "n_shirt_teamspark_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtTeamsparkB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_teamspark_b_0",
	{
		displayStringId: "n_shirt_teamspark_b_0_display_name";
		iconAddress: "n_shirt_teamspark_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtTeamyellgruntsCropped0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_teamyellgrunts-cropped_0",
	{
		displayStringId: "avatar_shirt_teamyellcrop";
		iconAddress: "n_shirt_teamyellgrunts-cropped_0_icon";
	}
>;
export type AvatarItemDisplayNShirtTeamyellgruntsLong0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_teamyellgrunts-long_0",
	{
		displayStringId: "avatar_shirt_teamyellshirt";
		iconAddress: "n_shirt_teamyellgrunts-long_0_icon";
	}
>;
export type AvatarItemDisplayNShirtTogepihoodie0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_togepihoodie_0",
	{
		displayStringId: "n_shirt_togepihoodie_0_display_name";
		iconAddress: "n_shirt_togepihoodie_0_icon";
	}
>;
export type AvatarItemDisplayNShirtTracksuitsgroudon0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_tracksuitsgroudon_0",
	{
		displayStringId: "n_shirt_tracksuitsgroudon_0_display_name";
		iconAddress: "n_shirt_tracksuitsgroudon_0_icon";
	}
>;
export type AvatarItemDisplayNShirtTracksuitskyogre0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_tracksuitskyogre_0",
	{
		displayStringId: "n_shirt_tracksuitskyogre_0_display_name";
		iconAddress: "n_shirt_tracksuitskyogre_0_icon";
	}
>;
export type AvatarItemDisplayNShirtTshirtCycling0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_tshirt-cycling_0",
	{
		displayStringId: "n_shirt_tshirt_cycling_0_display_name";
		iconAddress: "n_shirt_tshirt-cycling_0_icon";
	}
>;
export type AvatarItemDisplayNShirtTshirtCycling1 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_tshirt-cycling_1",
	{
		displayStringId: "n_shirt_tshirt_cycling_0_display_name";
		iconAddress: "n_shirt_tshirt-cycling_1_icon";
	}
>;
export type AvatarItemDisplayNShirtTshirtCycling2 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_tshirt-cycling_2",
	{
		displayStringId: "n_shirt_tshirt_cycling_0_display_name";
		iconAddress: "n_shirt_tshirt-cycling_2_icon";
	}
>;
export type AvatarItemDisplayNShirtTshirtCycling3 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_tshirt-cycling_3",
	{
		displayStringId: "n_shirt_tshirt_cycling_0_display_name";
		iconAddress: "n_shirt_tshirt-cycling_3_icon";
	}
>;
export type AvatarItemDisplayNShirtTshirtFestChicago20170 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_tshirt-fest-chicago-2017_0",
	{
		displayStringId: "n_shirt_tshirt-fest-chicago-2017_0_display_name";
		iconAddress: "n_shirt_tshirtfestchicago_2017_icon";
	}
>;
export type AvatarItemDisplayNShirtTshirtFestChicago20180 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_tshirt-fest-chicago-2018_0",
	{
		displayStringId: "n_shirt_tshirt-fest-chicago-2018_0_display_name";
		iconAddress: "n_shirt_tshirtfestchicago_2018_icon";
	}
>;
export type AvatarItemDisplayNShirtTshirtGeometric0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_tshirt-geometric_0",
	{
		displayStringId: "n_shirt_tshirt-geometric_0_display_name";
		iconAddress: "n_shirt_tshirt-geometric_0_icon";
	}
>;
export type AvatarItemDisplayNShirtTshirtGeometric1 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_tshirt-geometric_1",
	{
		displayStringId: "n_shirt_tshirt-geometric_0_display_name";
		iconAddress: "n_shirt_tshirt-geometric_1_icon";
	}
>;
export type AvatarItemDisplayNShirtTshirtGeometric2 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_tshirt-geometric_2",
	{
		displayStringId: "n_shirt_tshirt-geometric_0_display_name";
		iconAddress: "n_shirt_tshirt-geometric_2_icon";
	}
>;
export type AvatarItemDisplayNShirtTshirtGlobalGoals20170 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_tshirt-global-goals-2017_0",
	{
		displayStringId: "n_shirt_tshirt-global-goals-2017_0_display_name";
		iconAddress: "n_shirt_tshirtglobalgoals_2017_icon";
	}
>;
export type AvatarItemDisplayNShirtTshirtInstinct0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_tshirt-instinct_0",
	{
		displayStringId: "n_shirt_tshirt-instinct_0_display_name";
		iconAddress: "n_shirt_tshirtinstinct_0_icon";
	}
>;
export type AvatarItemDisplayNShirtTshirtMystic0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_tshirt-mystic_0",
	{
		displayStringId: "n_shirt_tshirt-mystic_0_display_name";
		iconAddress: "n_shirt_tshirtmystic_0_icon";
	}
>;
export type AvatarItemDisplayNShirtTshirtPikachu0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_tshirt-pikachu_0",
	{
		displayStringId: "n_shirt_tshirt_pikachu_0_display_name";
		iconAddress: "n_shirt_tshirt-pikachu_0_icon";
	}
>;
export type AvatarItemDisplayNShirtTshirtPikachu1 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_tshirt-pikachu_1",
	{
		displayStringId: "n_shirt_tshirt_pikachu_0_display_name";
		iconAddress: "n_shirt_tshirt-pikachu_1_icon";
	}
>;
export type AvatarItemDisplayNShirtTshirtPikachu2 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_tshirt-pikachu_2",
	{
		displayStringId: "n_shirt_tshirt_pikachu_0_display_name";
		iconAddress: "n_shirt_tshirt-pikachu_2_icon";
	}
>;
export type AvatarItemDisplayNShirtTshirtPikachu3 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_tshirt-pikachu_3",
	{
		displayStringId: "n_shirt_tshirt_pikachu_0_display_name";
		iconAddress: "n_shirt_tshirt-pikachu_3_icon";
	}
>;
export type AvatarItemDisplayNShirtTshirtPikachu4 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_tshirt-pikachu_4",
	{
		displayStringId: "n_shirt_tshirt_pikachu_0_display_name";
		iconAddress: "n_shirt_tshirt-pikachu_4_icon";
	}
>;
export type AvatarItemDisplayNShirtTshirtPikachu5 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_tshirt-pikachu_5",
	{
		displayStringId: "n_shirt_tshirt_pikachu_0_display_name";
		iconAddress: "n_shirt_tshirt-pikachu_5_icon";
	}
>;
export type AvatarItemDisplayNShirtTshirtPikachu6 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_tshirt-pikachu_6",
	{
		displayStringId: "n_shirt_tshirt_pikachu_0_display_name";
		iconAddress: "n_shirt_tshirt-pikachu_6_icon";
	}
>;
export type AvatarItemDisplayNShirtTshirtValor0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_tshirt-valor_0",
	{
		displayStringId: "n_shirt_tshirt-valor_0_display_name";
		iconAddress: "n_shirt_tshirtvalor_0_icon";
	}
>;
export type AvatarItemDisplayNShirtTurtleneck300 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_turtleneck-30_0",
	{
		displayStringId: "n_shirt_turtleneck-30_0_display_name";
		iconAddress: "n_shirt_turtleneck-30_0_icon";
	}
>;
export type AvatarItemDisplayNShirtTurtleneck301 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_turtleneck-30_1",
	{
		displayStringId: "n_shirt_turtleneck-30_0_display_name";
		iconAddress: "n_shirt_turtleneck-30_1_icon";
	}
>;
export type AvatarItemDisplayNShirtTurtleneck302 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_turtleneck-30_2",
	{
		displayStringId: "n_shirt_turtleneck-30_0_display_name";
		iconAddress: "n_shirt_turtleneck-30_2_icon";
	}
>;
export type AvatarItemDisplayNShirtTurtleneck303 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_turtleneck-30_3",
	{
		displayStringId: "n_shirt_turtleneck-30_0_display_name";
		iconAddress: "n_shirt_turtleneck-30_3_icon";
	}
>;
export type AvatarItemDisplayNShirtTurtwigonesie0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_turtwigonesie_0",
	{
		displayStringId: "n_shirt_turtwigonesie_0_display_name";
		iconAddress: "n_shirt_turtwigonesie_0_icon";
	}
>;
export type AvatarItemDisplayNShirtUglysweatersudowoodo0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_uglysweatersudowoodo_0",
	{
		displayStringId: "avatar_shirt_sweatersudowoodo";
		iconAddress: "n_shirt_uglysweatersudowoodo_0_icon";
	}
>;
export type AvatarItemDisplayNShirtUltraA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_ultra_a_0",
	{
		displayStringId: "n_shirt_ultra_a_0_display_name";
		iconAddress: "n_shirt_ultra_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtUltraB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_ultra_b_0",
	{
		displayStringId: "n_shirt_ultra_b_0_display_name";
		iconAddress: "n_shirt_ultra_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtUltrareconsquad0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_ultrareconsquad_0",
	{
		displayStringId: "n_shirt_ultrareconsquad_b_0_display_name";
		iconAddress: "n_shirt_ultrareconsquad_0_icon";
	}
>;
export type AvatarItemDisplayNShirtUniqlotshirts0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_uniqlotshirts_0",
	{
		displayStringId: "n_shirt_uniqlotshirts_0_display_name";
		iconAddress: "n_shirt_uniqlotshirts_0_icon";
	}
>;
export type AvatarItemDisplayNShirtUniqlotshirts1 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_uniqlotshirts_1",
	{
		displayStringId: "n_shirt_uniqlotshirts_1_display_name";
		iconAddress: "n_shirt_uniqlotshirts_1_icon";
	}
>;
export type AvatarItemDisplayNShirtUniqlotshirts2 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_uniqlotshirts_2",
	{
		displayStringId: "n_shirt_uniqlotshirts_2_display_name";
		iconAddress: "n_shirt_uniqlotshirts_2_icon";
	}
>;
export type AvatarItemDisplayNShirtUnwto0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_unwto_0",
	{
		displayStringId: "n_shirt_unwto_0_display_name";
		iconAddress: "n_shirt_unwto_0_icon";
	}
>;
export type AvatarItemDisplayNShirtValentine20230 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_valentine2023_0",
	{
		displayStringId: "n_shirt_valentine2023_0_display_name";
		iconAddress: "n_shirt_valentine2023_0_icon";
	}
>;
export type AvatarItemDisplayNShirtVerizon20200 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_verizon2020_0",
	{
		displayStringId: "n_shirt_verizon2020_0_display_name";
		iconAddress: "n_shirt_verizon2020sweater_0_icon";
	}
>;
export type AvatarItemDisplayNShirtVeterantrainerxyA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_veterantrainerxy_a_0",
	{
		displayStringId: "n_shirt_veterantrainerxy_a_0_display_name";
		iconAddress: "n_shirt_veterantrainerxy_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtVeterantrainerxyB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_veterantrainerxy_b_0",
	{
		displayStringId: "n_shirt_veterantrainerxy_b_0_display_name";
		iconAddress: "n_shirt_veterantrainerxy_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtVictinitshirts0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_victinitshirts_0",
	{
		displayStringId: "n_shirt_victinitshirts_0_display_name";
		iconAddress: "n_shirt_victinitshirts_0_icon";
	}
>;
export type AvatarItemDisplayNShirtVolcaniontshirt0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_volcaniontshirt_0",
	{
		displayStringId: "avatar_shirt_volcanion";
		iconAddress: "n_shirt_volcaniontshirt_0_icon";
	}
>;
export type AvatarItemDisplayNShirtWcs20220 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_wcs2022_0",
	{
		displayStringId: "n_shirt_wcs2022_0_display_name";
		iconAddress: "n_shirt_wcs2022_0_icon";
	}
>;
export type AvatarItemDisplayNShirtWcs2022tshirtbulu0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_wcs2022tshirtbulu_0",
	{
		displayStringId: "n_shirt_wcs2022tshirtbulu_0_display_name";
		iconAddress: "n_shirt_wcs2022tshirtbulu_0_icon";
	}
>;
export type AvatarItemDisplayNShirtWcs2022tshirtred0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_wcs2022tshirtred_0",
	{
		displayStringId: "n_shirt_wcs2022tshirtred_0_display_name";
		iconAddress: "n_shirt_wcs2022tshirtred_0_icon";
	}
>;
export type AvatarItemDisplayNShirtWcs2022winnersitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_wcs2022winnersitems_0",
	{
		displayStringId: "n_shirt_wcs2022winnersitems_0_display_name";
		iconAddress: "n_shirt_wcs2022winnersitems_0_icon";
	}
>;
export type AvatarItemDisplayNShirtWcs20230 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_wcs2023_0",
	{
		displayStringId: "n_shirt_wcs2023_0_display_name";
		iconAddress: "n_shirt_wcs2023_0_icon";
	}
>;
export type AvatarItemDisplayNShirtWcs2023promotshirt00 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_wcs2023promotshirt-0_0",
	{
		displayStringId: "n_shirt_wcs2023promotshirt-0_0_display_name";
		iconAddress: "n_shirt_wcs2023promotshirt_0_icon";
	}
>;
export type AvatarItemDisplayNShirtWcs2023promotshirt10 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_wcs2023promotshirt-1_0",
	{
		displayStringId: "n_shirt_wcs2023promotshirt-1_0_display_name";
		iconAddress: "n_shirt_wcs2023promotshirt01_0_icon";
	}
>;
export type AvatarItemDisplayNShirtWcs2023sukajan0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_wcs2023sukajan_0",
	{
		displayStringId: "n_shirt_wcs2023sukajan_0_display_name";
		iconAddress: "n_shirt_wcs2023sukajan_0_icon";
	}
>;
export type AvatarItemDisplayNShirtWcs2023winnersitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_wcs2023winnersitems_0",
	{
		displayStringId: "n_shirt_wcs2023winnersitems_0_display_name";
		iconAddress: "n_shirt_wcs2023winnersitems_0_icon";
	}
>;
export type AvatarItemDisplayNShirtWcs20240 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_wcs2024_0",
	{
		displayStringId: "N_WCSTee_Regional";
		iconAddress: "n_shirt_wcs2024_0_icon";
	}
>;
export type AvatarItemDisplayNShirtWcs2024championshipshirtBlue0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_wcs2024championshipshirt-blue_0",
	{
		displayStringId: "avatar_tshirt_wcs2024blue";
		iconAddress: "n_shirt_wcs2024championshipshirt-blue_0_icon";
	}
>;
export type AvatarItemDisplayNShirtWcs2024championshipshirtWhite0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_wcs2024championshipshirt-white_0",
	{
		displayStringId: "avatar_tshirt_wcs2024white";
		iconAddress: "n_shirt_wcs2024championshipshirt-white_0_icon";
	}
>;
export type AvatarItemDisplayNShirtWcs2024paiditems0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_wcs2024paiditems_0",
	{
		displayStringId: "avatar_shirt_wcs2024";
		iconAddress: "n_shirt_wcs2024paiditems_0_icon";
	}
>;
export type AvatarItemDisplayNShirtWcs2024winnersitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_wcs2024winnersitems_0",
	{
		displayStringId: "avatar_shirt_wcs2024champion";
		iconAddress: "n_shirt_wcs2024winnersitems_0_icon";
	}
>;
export type AvatarItemDisplayNShirtWcs20250 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_wcs2025_0",
	{
		displayStringId: "avatar_shirt_wcsregional2025";
		iconAddress: "n_shirt_wcs2025_0_icon";
	}
>;
export type AvatarItemDisplayNShirtWcs2025anaheimWhite0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_wcs2025anaheim-white_0",
	{
		displayStringId: "avatar_shirt_wcs2025white";
		iconAddress: "n_shirt_wcs2025anaheim-white_0_icon";
	}
>;
export type AvatarItemDisplayNShirtWcs2025anaheimYellow0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_wcs2025anaheim-yellow_0",
	{
		displayStringId: "avatar_shirt_wcs2025yellow";
		iconAddress: "n_shirt_wcs2025anaheim-yellow_0_icon";
	}
>;
export type AvatarItemDisplayNShirtWcs2025paiditems0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_wcs2025paiditems_0",
	{
		displayStringId: "avatar_shirt_wcs2025jersey";
		iconAddress: "n_shirt_wcs2025paiditems_0_icon";
	}
>;
export type AvatarItemDisplayNShirtWcs2025winnersitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_wcs2025winnersitems_0",
	{
		displayStringId: "avatar_shirt_wcs2025champion";
		iconAddress: "n_shirt_wcs2025winnersitems_0_icon";
	}
>;
export type AvatarItemDisplayNShirtWcsyokohama0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_wcsyokohama_0",
	{
		displayStringId: "n_shirt_wcsyokohama_0_display_name";
		iconAddress: "n_shirt_wcsyokohama_0_icon";
	}
>;
export type AvatarItemDisplayNShirtWhitecoat0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_whitecoat_0",
	{
		displayStringId: "n_shirt_whitecoat_0_display_name";
		iconAddress: "n_shirt_whitecoat_0_icon";
	}
>;
export type AvatarItemDisplayNShirtWintersweater20230 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_wintersweater2023_0",
	{
		displayStringId: "n_shirt_wintersweater2023_0_display_name";
		iconAddress: "n_shirt_wintersweater2023_0_icon";
	}
>;
export type AvatarItemDisplayNShirtYveltaljacket = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_yveltaljacket",
	{
		displayStringId: "avatar_shirt_yveltal";
		iconAddress: "n_shirt_yveltaljacket_icon";
	}
>;
export type AvatarItemDisplayNShirtZacostumeA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_zacostume_a_0",
	{
		displayStringId: "avatar_n_shirt_zacostume_a";
		iconAddress: "n_shirt_zacostume_a_0_icon";
	}
>;
export type AvatarItemDisplayNShirtZacostumeB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_zacostume_b_0",
	{
		displayStringId: "avatar_n_shirt_zacostume_b";
		iconAddress: "n_shirt_zacostume_b_0_icon";
	}
>;
export type AvatarItemDisplayNShirtZoruaonesie0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_zoruaonesie_0",
	{
		displayStringId: "n_shirt_zoruaonesie_0_display_name";
		iconAddress: "n_shirt_zoruaonesie_0_icon";
	}
>;
export type AvatarItemDisplayNShirtZygarde100items0 = AvatarItemDisplay<
	"N_DISPLAY_n_shirt_zygarde100items_0",
	{
		displayStringId: "avatar_shirt_zygarde";
		iconAddress: "n_shirt_zygarde100items_0_icon";
	}
>;
export type AvatarItemDisplayNShoes6thanniversaryA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_6thanniversary_a_0",
	{
		displayStringId: "n_shoes_6thanniversary_a_0_display_name";
		iconAddress: "n_shoes_6thanniversary_a_0_icon";
	}
>;
export type AvatarItemDisplayNShoes6thanniversaryB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_6thanniversary_b_0",
	{
		displayStringId: "n_shoes_6thanniversary_b_0_display_name";
		iconAddress: "n_shoes_6thanniversary_b_0_icon";
	}
>;
export type AvatarItemDisplayNShoesAcetrainerbwA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_acetrainerbw_a_0",
	{
		displayStringId: "n_shoes_acetrainerbw_a_0_display_name";
		iconAddress: "n_shoes_acetrainerbw_a_0_icon";
	}
>;
export type AvatarItemDisplayNShoesAcetrainerbwB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_acetrainerbw_b_0",
	{
		displayStringId: "n_shoes_acetrainerbw_b_0_display_name";
		iconAddress: "n_shoes_acetrainerbw_b_0_icon";
	}
>;
export type AvatarItemDisplayNShoesAcetrainersmA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_acetrainersm_a_0",
	{
		displayStringId: "n_shoes_acetrainersm_a_0_display_name";
		iconAddress: "n_shoes_acetrainersm_a_0_icon";
	}
>;
export type AvatarItemDisplayNShoesAcetrainersmB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_acetrainersm_b_0",
	{
		displayStringId: "n_shoes_acetrainersm_b_0_display_name";
		iconAddress: "n_shoes_acetrainersm_b_0_icon";
	}
>;
export type AvatarItemDisplayNShoesAllister0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_allister_0",
	{
		displayStringId: "avatar_shoes_gblallister";
		iconAddress: "n_shoes_allister_0_icon";
	}
>;
export type AvatarItemDisplayNShoesAnimegou0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_animegou_0",
	{
		displayStringId: "n_shoes_animegou_0_display_name";
		iconAddress: "n_shoes_animegou_0_icon";
	}
>;
export type AvatarItemDisplayNShoesBackpackerA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_backpacker_a_0",
	{
		displayStringId: "n_shoes_backpacker_a_0_display_name";
		iconAddress: "n_shoes_backpacker_a_0_icon";
	}
>;
export type AvatarItemDisplayNShoesBackpackerB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_backpacker_b_0",
	{
		displayStringId: "n_shoes_backpacker_b_0_display_name";
		iconAddress: "n_shoes_backpacker_b_0_icon";
	}
>;
export type AvatarItemDisplayNShoesBattlegirl0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_battlegirl_0",
	{
		displayStringId: "n_shoes_battlegirl_0_display_name";
		iconAddress: "n_shoes_battlegirl_0_icon";
	}
>;
export type AvatarItemDisplayNShoesBlacephalon0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_blacephalon_0",
	{
		displayStringId: "avatar_shoes_blacephelon";
		iconAddress: "n_shoes_blacephalon_0_icon";
	}
>;
export type AvatarItemDisplayNShoesBrock0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_brock_0",
	{
		displayStringId: "n_shoes_brock_0_display_name";
		iconAddress: "n_shoes_brock_0_icon";
	}
>;
export type AvatarItemDisplayNShoesBwn0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_bwn_0",
	{
		displayStringId: "n_shoes_bwn_0_display_name";
		iconAddress: "n_shoes_bwn_0_icon";
	}
>;
export type AvatarItemDisplayNShoesCarbink0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_carbink_0",
	{
		displayStringId: "n_shoes_carbink_0_display_name";
		iconAddress: "n_shoes_carbink_0_icon";
	}
>;
export type AvatarItemDisplayNShoesClay0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_clay_0",
	{
		displayStringId: "n_shoes_clay_0_display_name";
		iconAddress: "n_shoes_clay_0_icon";
	}
>;
export type AvatarItemDisplayNShoesClemont0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_clemont_0",
	{
		displayStringId: "avatar_n_shoes_clemont";
		iconAddress: "n_shoes_clemont_0_icon";
	}
>;
export type AvatarItemDisplayNShoesCoolboots0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_coolboots_0",
	{
		displayStringId: "n_shoes_coolboots_0_display_name";
		iconAddress: "n_shoes_coolboots_0_icon";
	}
>;
export type AvatarItemDisplayNShoesDedenneitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_dedenneitems_0",
	{
		displayStringId: "n_shoes_dedenneitems_0_display_name";
		iconAddress: "n_shoes_dedenneitems_0_icon";
	}
>;
export type AvatarItemDisplayNShoesDefaultNew0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_default-new_0",
	{
		displayStringId: "n_shoes_default-new_0_display_name";
		iconAddress: "n_shoes_defaultnew_0_icon";
	}
>;
export type AvatarItemDisplayNShoesDefaultA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_default_a_0",
	{
		displayStringId: "n_shoes_default_a_0_display_name";
		iconAddress: "n_shoes_default_a_0_icon";
	}
>;
export type AvatarItemDisplayNShoesDefaultA1 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_default_a_1",
	{
		displayStringId: "n_shoes_default_a_0_display_name";
		iconAddress: "n_shoes_default_a_1_icon";
	}
>;
export type AvatarItemDisplayNShoesDefaultA2 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_default_a_2",
	{
		displayStringId: "n_shoes_default_a_0_display_name";
		iconAddress: "n_shoes_default_a_2_icon";
	}
>;
export type AvatarItemDisplayNShoesDefaultA3 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_default_a_3",
	{
		displayStringId: "n_shoes_default_a_0_display_name";
		iconAddress: "n_shoes_default_a_3_icon";
	}
>;
export type AvatarItemDisplayNShoesDefaultA4 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_default_a_4",
	{
		displayStringId: "n_shoes_default_a_0_display_name";
		iconAddress: "n_shoes_default_a_4_icon";
	}
>;
export type AvatarItemDisplayNShoesDefaultA5 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_default_a_5",
	{
		displayStringId: "n_shoes_default_a_0_display_name";
		iconAddress: "n_shoes_default_a_5_icon";
	}
>;
export type AvatarItemDisplayNShoesDefaultA6 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_default_a_6",
	{
		displayStringId: "n_shoes_default_a_0_display_name";
		iconAddress: "n_shoes_default_a_6_icon";
	}
>;
export type AvatarItemDisplayNShoesDefaultB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_default_b_0",
	{
		displayStringId: "n_shoes_default_b_0_display_name";
		iconAddress: "n_shoes_default_b_0_icon";
	}
>;
export type AvatarItemDisplayNShoesDefaultB1 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_default_b_1",
	{
		displayStringId: "n_shoes_default_b_0_display_name";
		iconAddress: "n_shoes_default_b_1_icon";
	}
>;
export type AvatarItemDisplayNShoesDefaultB2 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_default_b_2",
	{
		displayStringId: "n_shoes_default_b_0_display_name";
		iconAddress: "n_shoes_default_b_2_icon";
	}
>;
export type AvatarItemDisplayNShoesDefaultB3 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_default_b_3",
	{
		displayStringId: "n_shoes_default_b_0_display_name";
		iconAddress: "n_shoes_default_b_3_icon";
	}
>;
export type AvatarItemDisplayNShoesDefaultB4 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_default_b_4",
	{
		displayStringId: "n_shoes_default_b_0_display_name";
		iconAddress: "n_shoes_default_b_4_icon";
	}
>;
export type AvatarItemDisplayNShoesDefaultB5 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_default_b_5",
	{
		displayStringId: "n_shoes_default_b_0_display_name";
		iconAddress: "n_shoes_default_b_5_icon";
	}
>;
export type AvatarItemDisplayNShoesDefaultB6 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_default_b_6",
	{
		displayStringId: "n_shoes_default_b_0_display_name";
		iconAddress: "n_shoes_default_b_6_icon";
	}
>;
export type AvatarItemDisplayNShoesDelibird0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_delibird_0",
	{
		displayStringId: "n_shoes_delibird_0_display_name";
		iconAddress: "n_shoes_delibird_0_icon";
	}
>;
export type AvatarItemDisplayNShoesDpA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_dp_a_0",
	{
		displayStringId: "n_shoes_dp_a_0_display_name";
		iconAddress: "n_shoes_dp_a_0_icon";
	}
>;
export type AvatarItemDisplayNShoesDpB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_dp_b_0",
	{
		displayStringId: "n_shoes_dp_b_0_display_name";
		iconAddress: "n_shoes_dp_b_0_icon";
	}
>;
export type AvatarItemDisplayNShoesElesaA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_elesa_a_0",
	{
		displayStringId: "n_shoes_elesa_a_0_display_name";
		iconAddress: "n_shoes_elesa_a_0_icon";
	}
>;
export type AvatarItemDisplayNShoesElesaB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_elesa_b_0",
	{
		displayStringId: "n_shoes_elesa_b_0_display_name";
		iconAddress: "n_shoes_elesa_b_0_icon";
	}
>;
export type AvatarItemDisplayNShoesEternatussuit0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_eternatussuit_0",
	{
		displayStringId: "avatar_shoes_eternatus";
		iconAddress: "n_shoes_eternatussuit_0_icon";
	}
>;
export type AvatarItemDisplayNShoesFashionweek20220 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_fashionweek2022_0",
	{
		displayStringId: "n_shoes_fashionweek2022_0_display_name";
		iconAddress: "n_shoes_fashionweek2022_0_icon";
	}
>;
export type AvatarItemDisplayNShoesFisher0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_fisher_0",
	{
		displayStringId: "n_shoes_fisher_0_display_name";
		iconAddress: "n_shoes_fisher_0_icon";
	}
>;
export type AvatarItemDisplayNShoesFrlgA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_frlg_a_0",
	{
		displayStringId: "n_shoes_frlg_a_0_display_name";
		iconAddress: "n_shoes_frlg_a_0_icon";
	}
>;
export type AvatarItemDisplayNShoesFrlgB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_frlg_b_0",
	{
		displayStringId: "n_shoes_frlg_b_0_display_name";
		iconAddress: "n_shoes_frlg_b_0_icon";
	}
>;
export type AvatarItemDisplayNShoesFw20220 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_fw2022_0",
	{
		displayStringId: "n_shoes_fw2022_0_display_name";
		iconAddress: "n_shoes_fw2022_0_icon";
	}
>;
export type AvatarItemDisplayNShoesGeeta0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_geeta_0",
	{
		displayStringId: "n_shoes_geeta_0_display_name";
		iconAddress: "n_shoes_geeta_0_icon";
	}
>;
export type AvatarItemDisplayNShoesGiovanniA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_giovanni_a_0",
	{
		displayStringId: "n_shoes_giovanni_a_0_display_name";
		iconAddress: "n_shoes_giovanni_a_0_icon";
	}
>;
export type AvatarItemDisplayNShoesGiovanniB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_giovanni_b_0",
	{
		displayStringId: "n_shoes_giovanni_b_0_display_name";
		iconAddress: "n_shoes_giovanni_b_0_icon";
	}
>;
export type AvatarItemDisplayNShoesGladion0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_gladion_0",
	{
		displayStringId: "n_shoes_gladion_0_display_name";
		iconAddress: "n_shoes_gladion_0_icon";
	}
>;
export type AvatarItemDisplayNShoesGothitelleitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_gothitelleitems_0",
	{
		displayStringId: "n_shoes_gothitelleitems_0_display_name";
		iconAddress: "n_shoes_gothitelleitems_0_icon";
	}
>;
export type AvatarItemDisplayNShoesGreenA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_green_a_0",
	{
		displayStringId: "n_shoes_green_a_0_display_name";
		iconAddress: "n_shoes_green_a_0_icon";
	}
>;
export type AvatarItemDisplayNShoesGreenB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_green_b_0",
	{
		displayStringId: "n_shoes_green_b_0_display_name";
		iconAddress: "n_shoes_green_b_0_icon";
	}
>;
export type AvatarItemDisplayNShoesGreenpikavee0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_greenpikavee_0",
	{
		displayStringId: "avatar_shoes_s22blue";
		iconAddress: "n_shoes_greenpikavee_0_icon";
	}
>;
export type AvatarItemDisplayNShoesGrimsley0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_grimsley_0",
	{
		displayStringId: "avatar_shoes_gblgrimsley";
		iconAddress: "n_shoes_grimsley_0_icon";
	}
>;
export type AvatarItemDisplayNShoesGrusha0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_grusha_0",
	{
		displayStringId: "avatar_shoes_grusha";
		iconAddress: "n_shoes_grusha_0_icon";
	}
>;
export type AvatarItemDisplayNShoesGymleader0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_gymleader_0",
	{
		displayStringId: "n_shoes_gymleader_0_display_name";
		iconAddress: "n_shoes_gymleader_0_icon";
	}
>;
export type AvatarItemDisplayNShoesGymleader1 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_gymleader_1",
	{
		displayStringId: "n_shoes_gymleader_0_display_name";
		iconAddress: "n_shoes_gymleader_1_icon";
	}
>;
export type AvatarItemDisplayNShoesGymleader2 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_gymleader_2",
	{
		displayStringId: "n_shoes_gymleader_0_display_name";
		iconAddress: "n_shoes_gymleader_2_icon";
	}
>;
export type AvatarItemDisplayNShoesHala0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_hala_0",
	{
		displayStringId: "n_shoes_hala_0_display_name";
		iconAddress: "n_shoes_hala_0_icon";
	}
>;
export type AvatarItemDisplayNShoesHgssA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_hgss_a_0",
	{
		displayStringId: "n_shoes_hgss_a_0_display_name";
		iconAddress: "n_shoes_hgss_a_0_icon";
	}
>;
export type AvatarItemDisplayNShoesHgssB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_hgss_b_0",
	{
		displayStringId: "n_shoes_hgss_b_0_display_name";
		iconAddress: "n_shoes_hgss_b_0_icon";
	}
>;
export type AvatarItemDisplayNShoesIngo0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_ingo_0",
	{
		displayStringId: "n_shoes_ingo_0_display_name";
		iconAddress: "n_shoes_ingo_0_icon";
	}
>;
export type AvatarItemDisplayNShoesJogger0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_jogger_0",
	{
		displayStringId: "n_shoes_jogger_0_display_name";
		iconAddress: "n_shoes_jogger_0_icon";
	}
>;
export type AvatarItemDisplayNShoesKorrina0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_korrina_0",
	{
		displayStringId: "n_shoes_korrina_0_display_name";
		iconAddress: "n_shoes_korrina_0_icon";
	}
>;
export type AvatarItemDisplayNShoesLadiamondoutfitA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_ladiamondoutfit_a_0",
	{
		displayStringId: "n_shoes_ladiamondoutfit_a_0_display_name";
		iconAddress: "n_shoes_ladiamondoutfit_a_0_icon";
	}
>;
export type AvatarItemDisplayNShoesLadiamondoutfitB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_ladiamondoutfit_b_0",
	{
		displayStringId: "n_shoes_ladiamondoutfit_b_0_display_name";
		iconAddress: "n_shoes_ladiamondoutfit_b_0_icon";
	}
>;
export type AvatarItemDisplayNShoesLana0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_lana_0",
	{
		displayStringId: "AVATAR_LanaShoes";
		iconAddress: "n_shoes_lana_0_icon";
	}
>;
export type AvatarItemDisplayNShoesLapearloutfitA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_lapearloutfit_a_0",
	{
		displayStringId: "n_shoes_lapearloutfit_a_0_display_name";
		iconAddress: "n_shoes_lapearloutfit_a_0_icon";
	}
>;
export type AvatarItemDisplayNShoesLapearloutfitB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_lapearloutfit_b_0",
	{
		displayStringId: "n_shoes_lapearloutfit_b_0_display_name";
		iconAddress: "n_shoes_lapearloutfit_b_0_icon";
	}
>;
export type AvatarItemDisplayNShoesLegendofarceusA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_legendofarceus_a_0",
	{
		displayStringId: "n_shoes_legendofarceus_a_0_display_name";
		iconAddress: "n_shoes_legendofarceus_a_0_icon";
	}
>;
export type AvatarItemDisplayNShoesLegendofarceusB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_legendofarceus_b_0",
	{
		displayStringId: "n_shoes_legendofarceus_b_0_display_name";
		iconAddress: "n_shoes_legendofarceus_b_0_icon";
	}
>;
export type AvatarItemDisplayNShoesLoosepants0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_loosepants_0",
	{
		displayStringId: "n_shoes_loosepants_0_display_name";
		iconAddress: "n_shoes_loosepants_0_icon";
	}
>;
export type AvatarItemDisplayNShoesLoosepants1 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_loosepants_1",
	{
		displayStringId: "n_shoes_loosepants_0_display_name";
		iconAddress: "n_shoes_loosepants_1_icon";
	}
>;
export type AvatarItemDisplayNShoesLoosepants2 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_loosepants_2",
	{
		displayStringId: "n_shoes_loosepants_0_display_name";
		iconAddress: "n_shoes_loosepants_2_icon";
	}
>;
export type AvatarItemDisplayNShoesLoosepants3 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_loosepants_3",
	{
		displayStringId: "n_shoes_loosepants_0_display_name";
		iconAddress: "n_shoes_loosepants_3_icon";
	}
>;
export type AvatarItemDisplayNShoesLuvdiscpack0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_luvdiscpack_0",
	{
		displayStringId: "n_shoes_luvdiscpack_0_display_name";
		iconAddress: "n_shoes_luvdiscpack_0_icon";
	}
>;
export type AvatarItemDisplayNShoesLvl71Cyberkicks0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_lvl71-cyberkicks_0",
	{
		displayStringId: "avatar_n_shoes_lvl71-cyberkicks_0";
		iconAddress: "n_shoes_lvl71-cyberkicks_0_icon";
	}
>;
export type AvatarItemDisplayNShoesLysandre0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_lysandre_0",
	{
		displayStringId: "n_shoes_lysandre_0_display_name";
		iconAddress: "n_shoes_lysandre_0_icon";
	}
>;
export type AvatarItemDisplayNShoesMegalopunnyitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_megalopunnyitems_0",
	{
		displayStringId: "n_shoes_megalopunnyitems_0_display_name";
		iconAddress: "n_shoes_megalopunnyitems_0_icon";
	}
>;
export type AvatarItemDisplayNShoesMelmetalshoes0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_melmetalshoes_0",
	{
		displayStringId: "n_shoes_melmetalshoes_0_display_name";
		iconAddress: "n_shoes_melmetalshoes_0_icon";
	}
>;
export type AvatarItemDisplayNShoesMewtwo0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_mewtwo_0",
	{
		displayStringId: "n_shoes_mewtwo_0_display_name";
		iconAddress: "n_shoes_mewtwo_0_icon";
	}
>;
export type AvatarItemDisplayNShoesMisty0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_misty_0",
	{
		displayStringId: "n_shoes_misty_0_display_name";
		iconAddress: "n_shoes_misty_0_icon";
	}
>;
export type AvatarItemDisplayNShoesMustard0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_mustard_0",
	{
		displayStringId: "avatar_shoes_mustard";
		iconAddress: "n_shoes_mustard_0_icon";
	}
>;
export type AvatarItemDisplayNShoesNecrozmaitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_necrozmaitems_0",
	{
		displayStringId: "AVATAR_NecrozmaShoes";
		iconAddress: "n_shoes_necrozmaitems_0_icon";
	}
>;
export type AvatarItemDisplayNShoesNewyear20220 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_newyear2022_0",
	{
		displayStringId: "n_shoes_newyear2022_0_display_name";
		iconAddress: "n_shoes_newyear2022_0_icon";
	}
>;
export type AvatarItemDisplayNShoesNike20210 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_nike2021_0",
	{
		displayStringId: "n_shoes_nike2021_0_display_name";
		iconAddress: "n_shoes_nike2021_0_icon";
	}
>;
export type AvatarItemDisplayNShoesOrasA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_oras_a_0",
	{
		displayStringId: "n_shoes_oras_a_0_display_name";
		iconAddress: "n_shoes_oras_a_0_icon";
	}
>;
export type AvatarItemDisplayNShoesOrasB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_oras_b_0",
	{
		displayStringId: "n_shoes_oras_b_0_display_name";
		iconAddress: "n_shoes_oras_b_0_icon";
	}
>;
export type AvatarItemDisplayNShoesPajamas20220 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_pajamas2022_0",
	{
		displayStringId: "n_shoes_pajamas2022_0_display_name";
		iconAddress: "n_shoes_pajamas2022_0_icon";
	}
>;
export type AvatarItemDisplayNShoesPajamas20221 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_pajamas2022_1",
	{
		displayStringId: "n_shoes_pajamas2022_0_display_name";
		iconAddress: "n_shoes_pajamas2022_1_icon";
	}
>;
export type AvatarItemDisplayNShoesPalmer0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_palmer_0",
	{
		displayStringId: "n_shoes_palmer_0_display_name";
		iconAddress: "n_shoes_palmer_0_icon";
	}
>;
export type AvatarItemDisplayNShoesPikachuathletic = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_pikachuathletic",
	{
		displayStringId: "avatar_shoes_marathon";
		iconAddress: "n_shoes_pikachuathletic_icon";
	}
>;
export type AvatarItemDisplayNShoesPikachufan0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_pikachufan_0",
	{
		displayStringId: "n_shoes_pikachufan_0_display_name";
		iconAddress: "n_shoes_pikachufan_0_icon";
	}
>;
export type AvatarItemDisplayNShoesPikachulibre0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_pikachulibre_0",
	{
		displayStringId: "n_shoes_pikachulibre_0_display_name";
		iconAddress: "n_shoes_pikachulibre_0_icon";
	}
>;
export type AvatarItemDisplayNShoesPokeballitemsBasic0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_pokeballitems-basic_0",
	{
		displayStringId: "avatar_n_shoes_pokeballitems-basic_0";
		iconAddress: "n_shoes_pokeballitems-basic_0_icon";
	}
>;
export type AvatarItemDisplayNShoesPokeballitemsGreat0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_pokeballitems-great_0",
	{
		displayStringId: "avatar_n_shoes_pokeballitems-great_0";
		iconAddress: "n_shoes_pokeballitems-great_0_icon";
	}
>;
export type AvatarItemDisplayNShoesPokeballitemsUltra0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_pokeballitems-ultra_0",
	{
		displayStringId: "avatar_n_shoes_pokeballitems-ultra_0";
		iconAddress: "n_shoes_pokeballitems-ultra_0_icon";
	}
>;
export type AvatarItemDisplayNShoesProfwillowoutfit0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_profwillowoutfit_0",
	{
		displayStringId: "n_shoes_profwillowoutfit_0_display_name";
		iconAddress: "n_shoes_profwillowoutfit_0_icon";
	}
>;
export type AvatarItemDisplayNShoesRegiicejersies0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_regiicejersies_0",
	{
		displayStringId: "n_shoes_regiicejersies_0_display_name";
		iconAddress: "n_shoes_regiicejersies_0_icon";
	}
>;
export type AvatarItemDisplayNShoesRegirockjersies0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_regirockjersies_0",
	{
		displayStringId: "n_shoes_regirockjersies_0_display_name";
		iconAddress: "n_shoes_regirockjersies_0_icon";
	}
>;
export type AvatarItemDisplayNShoesRegisteeljersies0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_registeeljersies_0",
	{
		displayStringId: "n_shoes_registeeljersies_0_display_name";
		iconAddress: "n_shoes_registeeljersies_0_icon";
	}
>;
export type AvatarItemDisplayNShoesReuniclusitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_reuniclusitems_0",
	{
		displayStringId: "n_shoes_reuniclusitems_0_display_name";
		iconAddress: "n_shoes_reuniclusitems_0_icon";
	}
>;
export type AvatarItemDisplayNShoesRuinmaniacA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_ruinmaniac_a_0",
	{
		displayStringId: "n_shoes_ruinmaniac_a_0_display_name";
		iconAddress: "n_shoes_ruinmaniac_a_0_icon";
	}
>;
export type AvatarItemDisplayNShoesRuinmaniacB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_ruinmaniac_b_0",
	{
		displayStringId: "n_shoes_ruinmaniac_b_0_display_name";
		iconAddress: "n_shoes_ruinmaniac_b_0_icon";
	}
>;
export type AvatarItemDisplayNShoesS19gbl0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_s19gbl_0",
	{
		displayStringId: "avatar_shoes_gbl19";
		iconAddress: "n_shoes_s19gbl_0_icon";
	}
>;
export type AvatarItemDisplayNShoesSandals0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_sandals_0",
	{
		displayStringId: "n_shoes_sandals_0_display_name";
		iconAddress: "n_shoes_sandals_0_icon";
	}
>;
export type AvatarItemDisplayNShoesSandals1 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_sandals_1",
	{
		displayStringId: "n_shoes_sandals_0_display_name";
		iconAddress: "n_shoes_sandals_1_icon";
	}
>;
export type AvatarItemDisplayNShoesSandals2 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_sandals_2",
	{
		displayStringId: "n_shoes_sandals_0_display_name";
		iconAddress: "n_shoes_sandals_2_icon";
	}
>;
export type AvatarItemDisplayNShoesSizzlipedeboots0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_sizzlipedeboots_0",
	{
		displayStringId: "avatar_shoes_sizzlipedeboots";
		iconAddress: "n_shoes_sizzlipedeboots_0_icon";
	}
>;
export type AvatarItemDisplayNShoesSolgaleoitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_solgaleoitems_0",
	{
		displayStringId: "n_shoes_solgaleoitems_0_display_name";
		iconAddress: "n_shoes_solgaleoitems_0_icon";
	}
>;
export type AvatarItemDisplayNShoesSsA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_ss_a_0",
	{
		displayStringId: "n_shoes_ss_a_0_display_name";
		iconAddress: "n_shoes_ss_a_0_icon";
	}
>;
export type AvatarItemDisplayNShoesSsB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_ss_b_0",
	{
		displayStringId: "n_shoes_ss_b_0_display_name";
		iconAddress: "n_shoes_ss_b_0_icon";
	}
>;
export type AvatarItemDisplayNShoesSteven0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_steven_0",
	{
		displayStringId: "n_shoes_steven_0_display_name";
		iconAddress: "n_shoes_steven_0_icon";
	}
>;
export type AvatarItemDisplayNShoesStevenfirst0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_stevenfirst_0",
	{
		displayStringId: "n_shoes_stevenfirst_0_display_name";
		iconAddress: "n_shoes_stevenfirst_0_icon";
	}
>;
export type AvatarItemDisplayNShoesSvcostumescarletschool0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_svcostumescarletschool_0",
	{
		displayStringId: "n_shoes_svcostumescarletschool_0_display_name";
		iconAddress: "n_shoes_svcostumescarletschool_0_icon";
	}
>;
export type AvatarItemDisplayNShoesSvcostumevioletschool0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_svcostumevioletschool_0",
	{
		displayStringId: "n_shoes_svcostumevioletschool_0_display_name";
		iconAddress: "n_shoes_svcostumevioletschool_0_icon";
	}
>;
export type AvatarItemDisplayNShoesSvdlc10 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_svdlc1_0",
	{
		displayStringId: "n_shoes_svdlc1_0_display_name";
		iconAddress: "n_shoes_svdlc1_0_icon";
	}
>;
export type AvatarItemDisplayNShoesSvdlc2spring0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_svdlc2spring_0",
	{
		displayStringId: "n_shoes_svdlc2spring_0_display_name";
		iconAddress: "n_shoes_svdlc2spring_0_icon";
	}
>;
export type AvatarItemDisplayNShoesSwshdlc2costume0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_swshdlc2costume_0",
	{
		displayStringId: "n_shoes_swshdlc2costume_0_display_name";
		iconAddress: "n_shoes_swshdlc2costume_0_icon";
	}
>;
export type AvatarItemDisplayNShoesSwshdlccostume0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_swshdlccostume_0",
	{
		displayStringId: "n_shoes_swshdlccostume_0_display_name";
		iconAddress: "n_shoes_swshdlccostume_0_icon";
	}
>;
export type AvatarItemDisplayNShoesSwshuniformdark0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_swshuniformdark_0",
	{
		displayStringId: "n_shoes_swshuniformdark_0_display_name";
		iconAddress: "n_shoes_swshuniformdark_0_icon";
	}
>;
export type AvatarItemDisplayNShoesSwshuniformdefault0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_swshuniformdefault_0",
	{
		displayStringId: "n_shoes_swshuniformdefault_0_display_name";
		iconAddress: "n_shoes_swshuniformdefault_0_icon";
	}
>;
export type AvatarItemDisplayNShoesSwshuniformdragon0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_swshuniformdragon_0",
	{
		displayStringId: "n_shoes_swshuniformdragon_0_display_name";
		iconAddress: "n_shoes_swshuniformdragon_0_icon";
	}
>;
export type AvatarItemDisplayNShoesSylveonitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_sylveonitems_0",
	{
		displayStringId: "n_shoes_sylveonitems_0_display_name";
		iconAddress: "n_shoes_sylveonitems_0_icon";
	}
>;
export type AvatarItemDisplayNShoesTandemausitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_tandemausitems_0",
	{
		displayStringId: "AVATAR_TandemausSlippers";
		iconAddress: "n_shoes_tandemausitems_0_icon";
	}
>;
export type AvatarItemDisplayNShoesTeamaqua0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_teamaqua_0",
	{
		displayStringId: "n_shoes_teamaqua_0_display_name";
		iconAddress: "n_shoes_teamaqua_0_icon";
	}
>;
export type AvatarItemDisplayNShoesTeamblancheA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_teamblanche_a_0",
	{
		displayStringId: "n_shoes_teamblanche_a_0_display_name";
		iconAddress: "n_shoes_teamblanche_a_0_icon";
	}
>;
export type AvatarItemDisplayNShoesTeamblancheB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_teamblanche_b_0",
	{
		displayStringId: "n_shoes_teamblanche_b_0_display_name";
		iconAddress: "n_shoes_teamblanche_b_0_icon";
	}
>;
export type AvatarItemDisplayNShoesTeamcandelaA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_teamcandela_a_0",
	{
		displayStringId: "n_shoes_teamcandela_a_0_display_name";
		iconAddress: "n_shoes_teamcandela_a_0_icon";
	}
>;
export type AvatarItemDisplayNShoesTeamcandelaB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_teamcandela_b_0",
	{
		displayStringId: "n_shoes_teamcandela_b_0_display_name";
		iconAddress: "n_shoes_teamcandela_b_0_icon";
	}
>;
export type AvatarItemDisplayNShoesTeammagmaA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_teammagma_a_0",
	{
		displayStringId: "n_shoes_teammagma_a_0_display_name";
		iconAddress: "n_shoes_teammagma_a_0_icon";
	}
>;
export type AvatarItemDisplayNShoesTeammagmaB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_teammagma_b_0",
	{
		displayStringId: "n_shoes_teammagma_b_0_display_name";
		iconAddress: "n_shoes_teammagma_b_0_icon";
	}
>;
export type AvatarItemDisplayNShoesTeamrocketA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_teamrocket_a_0",
	{
		displayStringId: "n_shoes_teamrocket_a_0_display_name";
		iconAddress: "n_shoes_teamrocket_a_0_icon";
	}
>;
export type AvatarItemDisplayNShoesTeamrocketA1 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_teamrocket_a_1",
	{
		displayStringId: "n_shoes_teamrocket_a_1_display_name";
		iconAddress: "n_shoes_teamrocket_a_1_icon";
	}
>;
export type AvatarItemDisplayNShoesTeamrocketB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_teamrocket_b_0",
	{
		displayStringId: "n_shoes_teamrocket_b_0_display_name";
		iconAddress: "n_shoes_teamrocket_b_0_icon";
	}
>;
export type AvatarItemDisplayNShoesTeamrocketB1 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_teamrocket_b_1",
	{
		displayStringId: "n_shoes_teamrocket_b_1_display_name";
		iconAddress: "n_shoes_teamrocket_b_1_icon";
	}
>;
export type AvatarItemDisplayNShoesTeamskull0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_teamskull_0",
	{
		displayStringId: "n_shoes_teamskull_a_0_display_name";
		iconAddress: "n_shoes_teamskull_a_0_icon";
	}
>;
export type AvatarItemDisplayNShoesTeamskullB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_teamskull_b_0",
	{
		displayStringId: "n_shoes_teamskull_b_0_display_name";
		iconAddress: "n_shoes_teamskull_b_0_icon";
	}
>;
export type AvatarItemDisplayNShoesTeamsparkA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_teamspark_a_0",
	{
		displayStringId: "n_shoes_teamspark_a_0_display_name";
		iconAddress: "n_shoes_teamspark_a_0_icon";
	}
>;
export type AvatarItemDisplayNShoesTeamsparkB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_teamspark_b_0",
	{
		displayStringId: "n_shoes_teamspark_b_0_display_name";
		iconAddress: "n_shoes_teamspark_b_0_icon";
	}
>;
export type AvatarItemDisplayNShoesTeamyellgrunts0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_teamyellgrunts_0",
	{
		displayStringId: "avatar_shoes_teamyell";
		iconAddress: "n_shoes_teamyellgrunts_0_icon";
	}
>;
export type AvatarItemDisplayNShoesUltraA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_ultra_a_0",
	{
		displayStringId: "n_shoes_ultra_a_0_display_name";
		iconAddress: "n_shoes_ultra_a_0_icon";
	}
>;
export type AvatarItemDisplayNShoesUltraB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_ultra_b_0",
	{
		displayStringId: "n_shoes_ultra_b_0_display_name";
		iconAddress: "n_shoes_ultra_b_0_icon";
	}
>;
export type AvatarItemDisplayNShoesUltrareconsquad0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_ultrareconsquad_0",
	{
		displayStringId: "n_shoes_ultrareconsquad_0_display_name";
		iconAddress: "n_shoes_ultrareconsquad_0_icon";
	}
>;
export type AvatarItemDisplayNShoesUnequip0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_unequip_0",
	{
		displayStringId: "n_shoes_unequip_0_display_name";
		iconAddress: "n_shoes_empty_0_icon";
	}
>;
export type AvatarItemDisplayNShoesVeterantrainerxyA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_veterantrainerxy_a_0",
	{
		displayStringId: "n_shoes_veterantrainerxy_a_0_display_name";
		iconAddress: "n_shoes_veterantrainerxy_a_0_icon";
	}
>;
export type AvatarItemDisplayNShoesVeterantrainerxyB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_veterantrainerxy_b_0",
	{
		displayStringId: "n_shoes_veterantrainerxy_b_0_display_name";
		iconAddress: "n_shoes_veterantrainerxy_b_0_icon";
	}
>;
export type AvatarItemDisplayNShoesWcs2022winnersitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_wcs2022winnersitems_0",
	{
		displayStringId: "n_shoes_wcs2022winnersitems_0_display_name";
		iconAddress: "n_shoes_wcs2022winnersitems_0_icon";
	}
>;
export type AvatarItemDisplayNShoesWcs2023winnersitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_wcs2023winnersitems_0",
	{
		displayStringId: "n_shoes_wcs2023winnersitems_0_display_name";
		iconAddress: "n_shoes_wcs2023winnersitems_0_icon";
	}
>;
export type AvatarItemDisplayNShoesWcs2024winnersitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_wcs2024winnersitems_0",
	{
		displayStringId: "avatar_shoes_wcs2024champion";
		iconAddress: "n_shoes_wcs2024winnersitems_0_icon";
	}
>;
export type AvatarItemDisplayNShoesWinterboots20230 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_winterboots2023_0",
	{
		displayStringId: "n_shoes_winterboots2023_0_display_name";
		iconAddress: "n_shoes_winterboots2023_0_icon";
	}
>;
export type AvatarItemDisplayNShoesWinterboots0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_winterboots_0",
	{
		displayStringId: "n_shoes_winterboots_0_display_name";
		iconAddress: "n_shoes_winterboots_0_icon";
	}
>;
export type AvatarItemDisplayNShoesWinterboots1 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_winterboots_1",
	{
		displayStringId: "n_shoes_winterboots_1_display_name";
		iconAddress: "n_shoes_winterboots_1_icon";
	}
>;
export type AvatarItemDisplayNShoesWinterboots2 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_winterboots_2",
	{
		displayStringId: "n_shoes_winterboots_2_display_name";
		iconAddress: "n_shoes_winterboots_2_icon";
	}
>;
export type AvatarItemDisplayNShoesWinterboots3 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_winterboots_3",
	{
		displayStringId: "n_shoes_winterboots_3_display_name";
		iconAddress: "n_shoes_winterboots_3_icon";
	}
>;
export type AvatarItemDisplayNShoesZacostumeA0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_zacostume_a_0",
	{
		displayStringId: "avatar_n_shoes_zacostume_a";
		iconAddress: "n_shoes_zacostume_a_0_icon";
	}
>;
export type AvatarItemDisplayNShoesZacostumeB0 = AvatarItemDisplay<
	"N_DISPLAY_n_shoes_zacostume_b_0",
	{
		displayStringId: "avatar_n_shoes_zacostume_b";
		iconAddress: "n_shoes_zacostume_b_0_icon";
	}
>;
export type AvatarItemDisplayNSocksDefaultA0 = AvatarItemDisplay<
	"N_DISPLAY_n_socks_default_a_0",
	{
		displayStringId: "n_socks_default_a_0_display_name";
		iconAddress: "n_socks_default_a_0_icon";
	}
>;
export type AvatarItemDisplayNSocksDefaultA1 = AvatarItemDisplay<
	"N_DISPLAY_n_socks_default_a_1",
	{
		displayStringId: "n_socks_default_a_0_display_name";
		iconAddress: "n_socks_default_a_1_icon";
	}
>;
export type AvatarItemDisplayNSocksDefaultA2 = AvatarItemDisplay<
	"N_DISPLAY_n_socks_default_a_2",
	{
		displayStringId: "n_socks_default_a_0_display_name";
		iconAddress: "n_socks_default_a_2_icon";
	}
>;
export type AvatarItemDisplayNSocksDefaultB0 = AvatarItemDisplay<
	"N_DISPLAY_n_socks_default_b_0",
	{
		displayStringId: "n_socks_default_b_0_display_name";
		iconAddress: "n_socks_default_b_0_icon";
	}
>;
export type AvatarItemDisplayNSocksDefaultB1 = AvatarItemDisplay<
	"N_DISPLAY_n_socks_default_b_1",
	{
		displayStringId: "n_socks_default_b_0_display_name";
		iconAddress: "n_socks_default_b_1_icon";
	}
>;
export type AvatarItemDisplayNSocksDefaultB2 = AvatarItemDisplay<
	"N_DISPLAY_n_socks_default_b_2",
	{
		displayStringId: "n_socks_default_b_0_display_name";
		iconAddress: "n_socks_default_b_2_icon";
	}
>;
export type AvatarItemDisplayNSocksDefaultB3 = AvatarItemDisplay<
	"N_DISPLAY_n_socks_default_b_3",
	{
		displayStringId: "n_socks_default_b_0_display_name";
		iconAddress: "n_socks_default_b_3_icon";
	}
>;
export type AvatarItemDisplayNSocksFw2022A0 = AvatarItemDisplay<
	"N_DISPLAY_n_socks_fw2022_a_0",
	{
		displayStringId: "n_socks_fw2022_a_0_display_name";
		iconAddress: "n_socks_fw2022_a_0_icon";
	}
>;
export type AvatarItemDisplayNSocksFw2022B0 = AvatarItemDisplay<
	"N_DISPLAY_n_socks_fw2022_b_0",
	{
		displayStringId: "n_socks_fw2022_b_0_display_name";
		iconAddress: "n_socks_fw2022_b_0_icon";
	}
>;
export type AvatarItemDisplayNSocksHgss0 = AvatarItemDisplay<
	"N_DISPLAY_n_socks_hgss_0",
	{
		displayStringId: "n_socks_hgss_0_display_name";
		iconAddress: "n_socks_hgss_0_icon";
	}
>;
export type AvatarItemDisplayNSocksSneakersocks0 = AvatarItemDisplay<
	"N_DISPLAY_n_socks_sneakersocks_0",
	{
		displayStringId: "n_socks_sneakersocks_0_display_name";
		iconAddress: "n_socks_sneakersocks_0_icon";
	}
>;
export type AvatarItemDisplayNSocksSneakersocks1 = AvatarItemDisplay<
	"N_DISPLAY_n_socks_sneakersocks_1",
	{
		displayStringId: "n_socks_sneakersocks_1_display_name";
		iconAddress: "n_socks_sneakersocks_1_icon";
	}
>;
export type AvatarItemDisplayNSocksSollunaitems0 = AvatarItemDisplay<
	"N_DISPLAY_n_socks_sollunaitems_0",
	{
		displayStringId: "n_socks_sollunaitems_0_display_name";
		iconAddress: "n_socks_sollunaitems_0_icon";
	}
>;
export type AvatarItemDisplayNSocksSwshuniformdefault0 = AvatarItemDisplay<
	"N_DISPLAY_n_socks_swshuniformdefault_0",
	{
		displayStringId: "n_socks_swshuniformdefault_0_display_name";
		iconAddress: "n_socks_swshuniformdefault_0_icon";
	}
>;
export type AvatarItemDisplayNSocksSwshuniformdragon0 = AvatarItemDisplay<
	"N_DISPLAY_n_socks_swshuniformdragon_0",
	{
		displayStringId: "n_socks_swshuniformdragon_0_display_name";
		iconAddress: "n_socks_swshuniformdragon_0_icon";
	}
>;
export type AvatarItemDisplayNSocksTeamaqua0 = AvatarItemDisplay<
	"N_DISPLAY_n_socks_teamaqua_0",
	{
		displayStringId: "n_socks_teamaqua_0_display_name";
		iconAddress: "n_socks_teamaqua_0_icon";
	}
>;
export type AvatarItemDisplayNSocksThighhighs0 = AvatarItemDisplay<
	"N_DISPLAY_n_socks_thighhighs_0",
	{
		displayStringId: "n_socks_thighhighs_0_display_name";
		iconAddress: "n_socks_thighhighs_0_icon";
	}
>;
export type AvatarItemDisplayNSocksUnequip0 = AvatarItemDisplay<
	"N_DISPLAY_n_socks_unequip_0",
	{
		displayStringId: "n_socks_unequip_0_display_name";
		iconAddress: "n_socks_empty_0_icon";
	}
>;
export type AvatarItemDisplaySet6thanniversaryF = AvatarItemDisplay<
	"N_DISPLAY_set_6thanniversary_f",
	{
		iconAddress: "set_6thanniversary_a";
	}
>;
export type AvatarItemDisplaySet6thanniversaryM = AvatarItemDisplay<
	"N_DISPLAY_set_6thanniversary_m",
	{
		iconAddress: "set_6thanniversary_b";
	}
>;
export type AvatarItemDisplaySet7thanniversaryF = AvatarItemDisplay<
	"N_DISPLAY_set_7thanniversary_f",
	{
		iconAddress: "set_7thanniversary_a";
	}
>;
export type AvatarItemDisplaySet7thanniversaryM = AvatarItemDisplay<
	"N_DISPLAY_set_7thanniversary_m",
	{
		iconAddress: "set_7thanniversary_b";
	}
>;
export type AvatarItemDisplaySetAcetrainerbwF = AvatarItemDisplay<
	"N_DISPLAY_set_acetrainerbw_f",
	{
		iconAddress: "set_acetrainerbw_a";
	}
>;
export type AvatarItemDisplaySetAcetrainerbwM = AvatarItemDisplay<
	"N_DISPLAY_set_acetrainerbw_m",
	{
		iconAddress: "set_acetrainerbw_b";
	}
>;
export type AvatarItemDisplaySetAcetrainersmF = AvatarItemDisplay<
	"N_DISPLAY_set_acetrainersm_f",
	{
		iconAddress: "set_acetrainersm_a";
	}
>;
export type AvatarItemDisplaySetAcetrainersmM = AvatarItemDisplay<
	"N_DISPLAY_set_acetrainersm_m",
	{
		iconAddress: "set_acetrainersm_b";
	}
>;
export type AvatarItemDisplaySetAllister0 = AvatarItemDisplay<
	"N_DISPLAY_set_allister_0",
	{
		iconAddress: "set_allister_0";
	}
>;
export type AvatarItemDisplaySetAnimegouF = AvatarItemDisplay<
	"N_DISPLAY_set_animegou_f",
	{
		iconAddress: "set_animegou_a";
	}
>;
export type AvatarItemDisplaySetAnimegouM = AvatarItemDisplay<
	"N_DISPLAY_set_animegou_m",
	{
		iconAddress: "set_animegou_b";
	}
>;
export type AvatarItemDisplaySetApplinitems = AvatarItemDisplay<
	"N_DISPLAY_set_applinitems",
	{
		iconAddress: "set_applinitems";
	}
>;
export type AvatarItemDisplaySetBackpackerF = AvatarItemDisplay<
	"N_DISPLAY_set_backpacker_f",
	{
		iconAddress: "set_backpacker_a";
	}
>;
export type AvatarItemDisplaySetBackpackerM = AvatarItemDisplay<
	"N_DISPLAY_set_backpacker_m",
	{
		iconAddress: "set_backpacker_b";
	}
>;
export type AvatarItemDisplaySetBattlegirl0F = AvatarItemDisplay<
	"N_DISPLAY_set_battlegirl_0_f",
	{
		iconAddress: "set_battlegirl_0_a";
	}
>;
export type AvatarItemDisplaySetBeaF = AvatarItemDisplay<
	"N_DISPLAY_set_bea_f",
	{
		iconAddress: "set_bea_a";
	}
>;
export type AvatarItemDisplaySetBeaM = AvatarItemDisplay<
	"N_DISPLAY_set_bea_m",
	{
		iconAddress: "set_bea_b";
	}
>;
export type AvatarItemDisplaySetBounsweetitemsF = AvatarItemDisplay<
	"N_DISPLAY_set_bounsweetitems_f",
	{
		iconAddress: "set_bounsweetitems_a";
	}
>;
export type AvatarItemDisplaySetBounsweetitemsM = AvatarItemDisplay<
	"N_DISPLAY_set_bounsweetitems_m",
	{
		iconAddress: "set_bounsweetitems_b";
	}
>;
export type AvatarItemDisplaySetBoxingoutfitF = AvatarItemDisplay<
	"N_DISPLAY_set_boxingoutfit_f",
	{
		iconAddress: "set_boxingoutfit_a";
	}
>;
export type AvatarItemDisplaySetBoxingoutfitM = AvatarItemDisplay<
	"N_DISPLAY_set_boxingoutfit_m",
	{
		iconAddress: "set_boxingoutfit_b";
	}
>;
export type AvatarItemDisplaySetBrockM = AvatarItemDisplay<
	"N_DISPLAY_set_brock_m",
	{
		iconAddress: "set_brock_b";
	}
>;
export type AvatarItemDisplaySetBwnF = AvatarItemDisplay<
	"N_DISPLAY_set_bwn_f",
	{
		iconAddress: "set_bwn_a";
	}
>;
export type AvatarItemDisplaySetBwnM = AvatarItemDisplay<
	"N_DISPLAY_set_bwn_m",
	{
		iconAddress: "set_bwn_b";
	}
>;
export type AvatarItemDisplaySetCasual0F = AvatarItemDisplay<
	"N_DISPLAY_set_casual_0_f",
	{
		iconAddress: "set_casual_0_a";
	}
>;
export type AvatarItemDisplaySetCasual0M = AvatarItemDisplay<
	"N_DISPLAY_set_casual_0_m",
	{
		iconAddress: "set_casual_0_b";
	}
>;
export type AvatarItemDisplaySetCasual1F = AvatarItemDisplay<
	"N_DISPLAY_set_casual_1_f",
	{
		iconAddress: "set_casual_1_a";
	}
>;
export type AvatarItemDisplaySetCasual1M = AvatarItemDisplay<
	"N_DISPLAY_set_casual_1_m",
	{
		iconAddress: "set_casual_1_b";
	}
>;
export type AvatarItemDisplaySetClayF = AvatarItemDisplay<
	"N_DISPLAY_set_clay_f",
	{
		iconAddress: "set_clay_a";
	}
>;
export type AvatarItemDisplaySetClayM = AvatarItemDisplay<
	"N_DISPLAY_set_clay_m",
	{
		iconAddress: "set_clay_b";
	}
>;
export type AvatarItemDisplaySetClemont = AvatarItemDisplay<
	"N_DISPLAY_set_clemont",
	{
		iconAddress: "set_clemont";
	}
>;
export type AvatarItemDisplaySetCofagrigusF = AvatarItemDisplay<
	"N_DISPLAY_set_cofagrigus_f",
	{
		iconAddress: "set_cofagrigus_a";
	}
>;
export type AvatarItemDisplaySetCofagrigusM = AvatarItemDisplay<
	"N_DISPLAY_set_cofagrigus_m",
	{
		iconAddress: "set_cofagrigus_b";
	}
>;
export type AvatarItemDisplaySetCosmogF = AvatarItemDisplay<
	"N_DISPLAY_set_cosmog_f",
	{
		iconAddress: "set_cosmog_a";
	}
>;
export type AvatarItemDisplaySetCosmogM = AvatarItemDisplay<
	"N_DISPLAY_set_cosmog_m",
	{
		iconAddress: "set_cosmog_b";
	}
>;
export type AvatarItemDisplaySetDayofthedeadF = AvatarItemDisplay<
	"N_DISPLAY_set_dayofthedead_f",
	{
		iconAddress: "set_dayofthedead_a";
	}
>;
export type AvatarItemDisplaySetDayofthedeadM = AvatarItemDisplay<
	"N_DISPLAY_set_dayofthedead_m",
	{
		iconAddress: "set_dayofthedead_b";
	}
>;
export type AvatarItemDisplaySetDedenneitemsF = AvatarItemDisplay<
	"N_DISPLAY_set_dedenneitems_f",
	{
		iconAddress: "set_dedenneitems_a";
	}
>;
export type AvatarItemDisplaySetDedenneitemsM = AvatarItemDisplay<
	"N_DISPLAY_set_dedenneitems_m",
	{
		iconAddress: "set_dedenneitems_b";
	}
>;
export type AvatarItemDisplaySetDelibirdF = AvatarItemDisplay<
	"N_DISPLAY_set_delibird_f",
	{
		iconAddress: "set_delibird_a";
	}
>;
export type AvatarItemDisplaySetDelibirdM = AvatarItemDisplay<
	"N_DISPLAY_set_delibird_m",
	{
		iconAddress: "set_delibird_b";
	}
>;
export type AvatarItemDisplaySetDetectivepikachuF = AvatarItemDisplay<
	"N_DISPLAY_set_detectivepikachu_f",
	{
		iconAddress: "set_detectivepikachu_a";
	}
>;
export type AvatarItemDisplaySetDetectivepikachuM = AvatarItemDisplay<
	"N_DISPLAY_set_detectivepikachu_m",
	{
		iconAddress: "set_detectivepikachu_b";
	}
>;
export type AvatarItemDisplaySetDivingsuitF = AvatarItemDisplay<
	"N_DISPLAY_set_divingsuit_f",
	{
		iconAddress: "set_divingsuit_a";
	}
>;
export type AvatarItemDisplaySetDivingsuitM = AvatarItemDisplay<
	"N_DISPLAY_set_divingsuit_m",
	{
		iconAddress: "set_divingsuit_b";
	}
>;
export type AvatarItemDisplaySetDpF = AvatarItemDisplay<
	"N_DISPLAY_set_dp_f",
	{
		iconAddress: "set_dp_a";
	}
>;
export type AvatarItemDisplaySetDpM = AvatarItemDisplay<
	"N_DISPLAY_set_dp_m",
	{
		iconAddress: "set_dp_b";
	}
>;
export type AvatarItemDisplaySetDusclopsmummyF = AvatarItemDisplay<
	"N_DISPLAY_set_dusclopsmummy_f",
	{
		iconAddress: "set_dusclopsmummy_a";
	}
>;
export type AvatarItemDisplaySetDusclopsmummyM = AvatarItemDisplay<
	"N_DISPLAY_set_dusclopsmummy_m",
	{
		iconAddress: "set_dusclopsmummy_b";
	}
>;
export type AvatarItemDisplaySetElesaF = AvatarItemDisplay<
	"N_DISPLAY_set_elesa_f",
	{
		iconAddress: "set_elesa_a";
	}
>;
export type AvatarItemDisplaySetElesaM = AvatarItemDisplay<
	"N_DISPLAY_set_elesa_m",
	{
		iconAddress: "set_elesa_b";
	}
>;
export type AvatarItemDisplaySetEternatussuit0 = AvatarItemDisplay<
	"N_DISPLAY_set_eternatussuit_0",
	{
		iconAddress: "set_eternatussuit_0";
	}
>;
export type AvatarItemDisplaySetFashionweek2022F = AvatarItemDisplay<
	"N_DISPLAY_set_fashionweek2022_f",
	{
		iconAddress: "set_fashionweek2022_a";
	}
>;
export type AvatarItemDisplaySetFashionweek2022M = AvatarItemDisplay<
	"N_DISPLAY_set_fashionweek2022_m",
	{
		iconAddress: "set_fashionweek2022_b";
	}
>;
export type AvatarItemDisplaySetFashionweek20250 = AvatarItemDisplay<
	"N_DISPLAY_set_fashionweek2025_0",
	{
		iconAddress: "set_fashionweek2025_0";
	}
>;
export type AvatarItemDisplaySetFisher0M = AvatarItemDisplay<
	"N_DISPLAY_set_fisher_0_m",
	{
		iconAddress: "set_fisher_0_b";
	}
>;
export type AvatarItemDisplaySetFlabebepackF = AvatarItemDisplay<
	"N_DISPLAY_set_flabebepack_f",
	{
		iconAddress: "set_flabebepack_a";
	}
>;
export type AvatarItemDisplaySetFlabebepackM = AvatarItemDisplay<
	"N_DISPLAY_set_flabebepack_m",
	{
		iconAddress: "set_flabebepack_b";
	}
>;
export type AvatarItemDisplaySetFragment0F = AvatarItemDisplay<
	"N_DISPLAY_set_fragment_0_f",
	{
		iconAddress: "set_fragment_0_a";
	}
>;
export type AvatarItemDisplaySetFragment0M = AvatarItemDisplay<
	"N_DISPLAY_set_fragment_0_m",
	{
		iconAddress: "set_fragment_0_b";
	}
>;
export type AvatarItemDisplaySetFrlg0F = AvatarItemDisplay<
	"N_DISPLAY_set_frlg_0_f",
	{
		iconAddress: "set_frlg_0_a";
	}
>;
export type AvatarItemDisplaySetFrlg0M = AvatarItemDisplay<
	"N_DISPLAY_set_frlg_0_m",
	{
		iconAddress: "set_frlg_0_b";
	}
>;
export type AvatarItemDisplaySetFw2022F = AvatarItemDisplay<
	"N_DISPLAY_set_fw2022_f",
	{
		iconAddress: "set_fw2022_a";
	}
>;
export type AvatarItemDisplaySetFw2022M = AvatarItemDisplay<
	"N_DISPLAY_set_fw2022_m",
	{
		iconAddress: "set_fw2022_b";
	}
>;
export type AvatarItemDisplaySetGalarfarfetchditemsF = AvatarItemDisplay<
	"N_DISPLAY_set_galarfarfetchditems_f",
	{
		iconAddress: "set_galarfarfetchditems_a";
	}
>;
export type AvatarItemDisplaySetGalarfarfetchditemsM = AvatarItemDisplay<
	"N_DISPLAY_set_galarfarfetchditems_m",
	{
		iconAddress: "set_galarfarfetchditems_b";
	}
>;
export type AvatarItemDisplaySetGeetaF = AvatarItemDisplay<
	"N_DISPLAY_set_geeta_f",
	{
		iconAddress: "set_geeta_a";
	}
>;
export type AvatarItemDisplaySetGeetaM = AvatarItemDisplay<
	"N_DISPLAY_set_geeta_m",
	{
		iconAddress: "set_geeta_b";
	}
>;
export type AvatarItemDisplaySetGenderlessskirtF = AvatarItemDisplay<
	"N_DISPLAY_set_genderlessskirt_f",
	{
		iconAddress: "set_genderlessskirt_a";
	}
>;
export type AvatarItemDisplaySetGenderlessskirtM = AvatarItemDisplay<
	"N_DISPLAY_set_genderlessskirt_m",
	{
		iconAddress: "set_genderlessskirt_b";
	}
>;
export type AvatarItemDisplaySetGenesecteventitemF = AvatarItemDisplay<
	"N_DISPLAY_set_genesecteventitem_f",
	{
		iconAddress: "set_genesecteventitem_a";
	}
>;
export type AvatarItemDisplaySetGenesecteventitemM = AvatarItemDisplay<
	"N_DISPLAY_set_genesecteventitem_m",
	{
		iconAddress: "set_genesecteventitem_b";
	}
>;
export type AvatarItemDisplaySetGengar0F = AvatarItemDisplay<
	"N_DISPLAY_set_gengar_0_f",
	{
		iconAddress: "set_gengar_0_a";
	}
>;
export type AvatarItemDisplaySetGengar0M = AvatarItemDisplay<
	"N_DISPLAY_set_gengar_0_m",
	{
		iconAddress: "set_gengar_0_b";
	}
>;
export type AvatarItemDisplaySetGimmighoulitemsF = AvatarItemDisplay<
	"N_DISPLAY_set_gimmighoulitems_f",
	{
		iconAddress: "set_gimmighoulitems_a";
	}
>;
export type AvatarItemDisplaySetGimmighoulitemsM = AvatarItemDisplay<
	"N_DISPLAY_set_gimmighoulitems_m",
	{
		iconAddress: "set_gimmighoulitems_b";
	}
>;
export type AvatarItemDisplaySetGiovanniF = AvatarItemDisplay<
	"N_DISPLAY_set_giovanni_f",
	{
		iconAddress: "set_giovanni_a";
	}
>;
export type AvatarItemDisplaySetGiovanniM = AvatarItemDisplay<
	"N_DISPLAY_set_giovanni_m",
	{
		iconAddress: "set_giovanni_b";
	}
>;
export type AvatarItemDisplaySetGiratinaitems = AvatarItemDisplay<
	"N_DISPLAY_set_giratinaitems",
	{
		iconAddress: "set_giratinaitems_b";
	}
>;
export type AvatarItemDisplaySetGladionF = AvatarItemDisplay<
	"N_DISPLAY_set_gladion_f",
	{
		iconAddress: "set_gladion_a";
	}
>;
export type AvatarItemDisplaySetGladionM = AvatarItemDisplay<
	"N_DISPLAY_set_gladion_m",
	{
		iconAddress: "set_gladion_b";
	}
>;
export type AvatarItemDisplaySetGoteamrocketarloF = AvatarItemDisplay<
	"N_DISPLAY_set_goteamrocketarlo_f",
	{
		iconAddress: "set_goteamrocketarlo_a";
	}
>;
export type AvatarItemDisplaySetGoteamrocketarloM = AvatarItemDisplay<
	"N_DISPLAY_set_goteamrocketarlo_m",
	{
		iconAddress: "set_goteamrocketarlo_b";
	}
>;
export type AvatarItemDisplaySetGreenF = AvatarItemDisplay<
	"N_DISPLAY_set_green_f",
	{
		iconAddress: "set_green_a";
	}
>;
export type AvatarItemDisplaySetGreenM = AvatarItemDisplay<
	"N_DISPLAY_set_green_m",
	{
		iconAddress: "set_green_b";
	}
>;
export type AvatarItemDisplaySetGreencoatF = AvatarItemDisplay<
	"N_DISPLAY_set_greencoat_f",
	{
		iconAddress: "set_greencoat_a";
	}
>;
export type AvatarItemDisplaySetGreencoatM = AvatarItemDisplay<
	"N_DISPLAY_set_greencoat_m",
	{
		iconAddress: "set_greencoat_b";
	}
>;
export type AvatarItemDisplaySetGrimsley0 = AvatarItemDisplay<
	"N_DISPLAY_set_grimsley_0",
	{
		iconAddress: "set_grimsley_0";
	}
>;
export type AvatarItemDisplaySetGrusha = AvatarItemDisplay<
	"N_DISPLAY_set_grusha",
	{
		iconAddress: "set_grusha";
	}
>;
export type AvatarItemDisplaySetGuzmaF = AvatarItemDisplay<
	"N_DISPLAY_set_guzma_f",
	{
		iconAddress: "set_guzma_a";
	}
>;
export type AvatarItemDisplaySetGuzmaM = AvatarItemDisplay<
	"N_DISPLAY_set_guzma_m",
	{
		iconAddress: "set_guzma_b";
	}
>;
export type AvatarItemDisplaySetGymleader0F = AvatarItemDisplay<
	"N_DISPLAY_set_gymleader_0_f",
	{
		iconAddress: "set_gymleader_0_a";
	}
>;
export type AvatarItemDisplaySetGymleader0M = AvatarItemDisplay<
	"N_DISPLAY_set_gymleader_0_m",
	{
		iconAddress: "set_gymleader_0_b";
	}
>;
export type AvatarItemDisplaySetGymleader1F = AvatarItemDisplay<
	"N_DISPLAY_set_gymleader_1_f",
	{
		iconAddress: "set_gymleader_1_a";
	}
>;
export type AvatarItemDisplaySetGymleader1M = AvatarItemDisplay<
	"N_DISPLAY_set_gymleader_1_m",
	{
		iconAddress: "set_gymleader_1_b";
	}
>;
export type AvatarItemDisplaySetGymleader2F = AvatarItemDisplay<
	"N_DISPLAY_set_gymleader_2_f",
	{
		iconAddress: "set_gymleader_2_a";
	}
>;
export type AvatarItemDisplaySetGymleader2M = AvatarItemDisplay<
	"N_DISPLAY_set_gymleader_2_m",
	{
		iconAddress: "set_gymleader_2_b";
	}
>;
export type AvatarItemDisplaySetHala = AvatarItemDisplay<
	"N_DISPLAY_set_hala",
	{
		iconAddress: "set_hala_a";
	}
>;
export type AvatarItemDisplaySetHalloween20240 = AvatarItemDisplay<
	"N_DISPLAY_set_halloween2024_0",
	{
		iconAddress: "set_halloween2024_0";
	}
>;
export type AvatarItemDisplaySetHgss0F = AvatarItemDisplay<
	"N_DISPLAY_set_hgss_0_f",
	{
		iconAddress: "set_hgss_0_a";
	}
>;
export type AvatarItemDisplaySetHgss0M = AvatarItemDisplay<
	"N_DISPLAY_set_hgss_0_m",
	{
		iconAddress: "set_hgss_0_b";
	}
>;
export type AvatarItemDisplaySetHoliday2022santacostumesF = AvatarItemDisplay<
	"N_DISPLAY_set_holiday2022santacostumes_f",
	{
		iconAddress: "set_holiday2022santacostumes_a";
	}
>;
export type AvatarItemDisplaySetHoliday2022santacostumesM = AvatarItemDisplay<
	"N_DISPLAY_set_holiday2022santacostumes_m",
	{
		iconAddress: "set_holiday2022santacostumes_b";
	}
>;
export type AvatarItemDisplaySetHoopaF = AvatarItemDisplay<
	"N_DISPLAY_set_hoopa_f",
	{
		iconAddress: "set_hoopa_a";
	}
>;
export type AvatarItemDisplaySetHoopaM = AvatarItemDisplay<
	"N_DISPLAY_set_hoopa_m",
	{
		iconAddress: "set_hoopa_b";
	}
>;
export type AvatarItemDisplaySetIngo = AvatarItemDisplay<
	"N_DISPLAY_set_ingo",
	{
		iconAddress: "set_ingo_b";
	}
>;
export type AvatarItemDisplaySetJogger0M = AvatarItemDisplay<
	"N_DISPLAY_set_jogger_0_m",
	{
		iconAddress: "set_jogger_0_b";
	}
>;
export type AvatarItemDisplaySetKorrinaF = AvatarItemDisplay<
	"N_DISPLAY_set_korrina_f",
	{
		iconAddress: "set_korrina_a";
	}
>;
export type AvatarItemDisplaySetKorrinaM = AvatarItemDisplay<
	"N_DISPLAY_set_korrina_m",
	{
		iconAddress: "set_korrina_b";
	}
>;
export type AvatarItemDisplaySetLadiamondoutfitF = AvatarItemDisplay<
	"N_DISPLAY_set_ladiamondoutfit_f",
	{
		iconAddress: "set_ladiamondoutfit_a";
	}
>;
export type AvatarItemDisplaySetLadiamondoutfitM = AvatarItemDisplay<
	"N_DISPLAY_set_ladiamondoutfit_m",
	{
		iconAddress: "set_ladiamondoutfit_b";
	}
>;
export type AvatarItemDisplaySetLana0 = AvatarItemDisplay<
	"N_DISPLAY_set_lana_0",
	{
		iconAddress: "set_lana_0";
	}
>;
export type AvatarItemDisplaySetLapearloutfitF = AvatarItemDisplay<
	"N_DISPLAY_set_lapearloutfit_f",
	{
		iconAddress: "set_lapearloutfit_a";
	}
>;
export type AvatarItemDisplaySetLapearloutfitM = AvatarItemDisplay<
	"N_DISPLAY_set_lapearloutfit_m",
	{
		iconAddress: "set_lapearloutfit_b";
	}
>;
export type AvatarItemDisplaySetLasecuritycorpsF = AvatarItemDisplay<
	"N_DISPLAY_set_lasecuritycorps_f",
	{
		iconAddress: "set_lasecuritycorps_a";
	}
>;
export type AvatarItemDisplaySetLasecuritycorpsM = AvatarItemDisplay<
	"N_DISPLAY_set_lasecuritycorps_m",
	{
		iconAddress: "set_lasecuritycorps_b";
	}
>;
export type AvatarItemDisplaySetLegendofarceusF = AvatarItemDisplay<
	"N_DISPLAY_set_legendofarceus_f",
	{
		iconAddress: "set_legendofarceus_a";
	}
>;
export type AvatarItemDisplaySetLegendofarceusM = AvatarItemDisplay<
	"N_DISPLAY_set_legendofarceus_m",
	{
		iconAddress: "set_legendofarceus_b";
	}
>;
export type AvatarItemDisplaySetLooseFitting0 = AvatarItemDisplay<
	"N_DISPLAY_set_loose-fitting_0",
	{
		iconAddress: "set_loose-fitting_0";
	}
>;
export type AvatarItemDisplaySetLooseFitting1 = AvatarItemDisplay<
	"N_DISPLAY_set_loose-fitting_1",
	{
		iconAddress: "set_loose-fitting_1";
	}
>;
export type AvatarItemDisplaySetLunalaitemsF = AvatarItemDisplay<
	"N_DISPLAY_set_lunalaitems_f",
	{
		iconAddress: "set_lunalaitems_a";
	}
>;
export type AvatarItemDisplaySetLunalaitemsM = AvatarItemDisplay<
	"N_DISPLAY_set_lunalaitems_m",
	{
		iconAddress: "set_lunalaitems_b";
	}
>;
export type AvatarItemDisplaySetLuvdiscpackF = AvatarItemDisplay<
	"N_DISPLAY_set_luvdiscpack_f",
	{
		iconAddress: "set_luvdiscpack_a";
	}
>;
export type AvatarItemDisplaySetLuvdiscpackM = AvatarItemDisplay<
	"N_DISPLAY_set_luvdiscpack_m",
	{
		iconAddress: "set_luvdiscpack_b";
	}
>;
export type AvatarItemDisplaySetLvl500F = AvatarItemDisplay<
	"N_DISPLAY_set_lvl50_0_f",
	{
		iconAddress: "set_lvl50_0_a";
	}
>;
export type AvatarItemDisplaySetLvl500M = AvatarItemDisplay<
	"N_DISPLAY_set_lvl50_0_m",
	{
		iconAddress: "set_lvl50_0_b";
	}
>;
export type AvatarItemDisplaySetLvl501F = AvatarItemDisplay<
	"N_DISPLAY_set_lvl50_1_f",
	{
		iconAddress: "set_lvl50_1_a";
	}
>;
export type AvatarItemDisplaySetLvl501M = AvatarItemDisplay<
	"N_DISPLAY_set_lvl50_1_m",
	{
		iconAddress: "set_lvl50_1_b";
	}
>;
export type AvatarItemDisplaySetLysandreF = AvatarItemDisplay<
	"N_DISPLAY_set_lysandre_f",
	{
		iconAddress: "set_lysandre_a";
	}
>;
export type AvatarItemDisplaySetLysandreM = AvatarItemDisplay<
	"N_DISPLAY_set_lysandre_m",
	{
		iconAddress: "set_lysandre_b";
	}
>;
export type AvatarItemDisplaySetMegalopunnyitemsF = AvatarItemDisplay<
	"N_DISPLAY_set_megalopunnyitems_f",
	{
		iconAddress: "set_megalopunnyitems_a";
	}
>;
export type AvatarItemDisplaySetMegalopunnyitemsM = AvatarItemDisplay<
	"N_DISPLAY_set_megalopunnyitems_m",
	{
		iconAddress: "set_megalopunnyitems_b";
	}
>;
export type AvatarItemDisplaySetMegarayquazaF = AvatarItemDisplay<
	"N_DISPLAY_set_megarayquaza_f",
	{
		iconAddress: "set_megarayquaza_a";
	}
>;
export type AvatarItemDisplaySetMegarayquazaM = AvatarItemDisplay<
	"N_DISPLAY_set_megarayquaza_m",
	{
		iconAddress: "set_megarayquaza_b";
	}
>;
export type AvatarItemDisplaySetMelmetalJacketF = AvatarItemDisplay<
	"N_DISPLAY_set_melmetal_jacket_f",
	{
		iconAddress: "set_melmetal_jacket_a";
	}
>;
export type AvatarItemDisplaySetMelmetalJacketM = AvatarItemDisplay<
	"N_DISPLAY_set_melmetal_jacket_m",
	{
		iconAddress: "set_melmetal_jacket_b";
	}
>;
export type AvatarItemDisplaySetMelmetalVestF = AvatarItemDisplay<
	"N_DISPLAY_set_melmetal_vest_f",
	{
		iconAddress: "set_melmetal_vest_a";
	}
>;
export type AvatarItemDisplaySetMelmetalVestM = AvatarItemDisplay<
	"N_DISPLAY_set_melmetal_vest_m",
	{
		iconAddress: "set_melmetal_vest_b";
	}
>;
export type AvatarItemDisplaySetMeltanF = AvatarItemDisplay<
	"N_DISPLAY_set_meltan_f",
	{
		iconAddress: "set_meltan_a";
	}
>;
export type AvatarItemDisplaySetMeltanM = AvatarItemDisplay<
	"N_DISPLAY_set_meltan_m",
	{
		iconAddress: "set_meltan_b";
	}
>;
export type AvatarItemDisplaySetMewtwoF = AvatarItemDisplay<
	"N_DISPLAY_set_mewtwo_f",
	{
		iconAddress: "set_mewtwo_a";
	}
>;
export type AvatarItemDisplaySetMewtwoM = AvatarItemDisplay<
	"N_DISPLAY_set_mewtwo_m",
	{
		iconAddress: "set_mewtwo_b";
	}
>;
export type AvatarItemDisplaySetMimikyuF = AvatarItemDisplay<
	"N_DISPLAY_set_mimikyu_f",
	{
		iconAddress: "set_mimikyu_a";
	}
>;
export type AvatarItemDisplaySetMimikyuM = AvatarItemDisplay<
	"N_DISPLAY_set_mimikyu_m",
	{
		iconAddress: "set_mimikyu_b";
	}
>;
export type AvatarItemDisplaySetMistyF = AvatarItemDisplay<
	"N_DISPLAY_set_misty_f",
	{
		iconAddress: "set_misty_a";
	}
>;
export type AvatarItemDisplaySetMovie2020F = AvatarItemDisplay<
	"N_DISPLAY_set_movie2020_f",
	{
		iconAddress: "set_movie2020_a";
	}
>;
export type AvatarItemDisplaySetMovie2020M = AvatarItemDisplay<
	"N_DISPLAY_set_movie2020_m",
	{
		iconAddress: "set_movie2020_b";
	}
>;
export type AvatarItemDisplaySetMunnapack0F = AvatarItemDisplay<
	"N_DISPLAY_set_munnapack_0_f",
	{
		iconAddress: "set_munnapack_0_a";
	}
>;
export type AvatarItemDisplaySetMunnapack0M = AvatarItemDisplay<
	"N_DISPLAY_set_munnapack_0_m",
	{
		iconAddress: "set_munnapack_0_b";
	}
>;
export type AvatarItemDisplaySetMunnapack1F = AvatarItemDisplay<
	"N_DISPLAY_set_munnapack_1_f",
	{
		iconAddress: "set_munnapack_1_a";
	}
>;
export type AvatarItemDisplaySetMunnapack1M = AvatarItemDisplay<
	"N_DISPLAY_set_munnapack_1_m",
	{
		iconAddress: "set_munnapack_1_b";
	}
>;
export type AvatarItemDisplaySetMustard0 = AvatarItemDisplay<
	"N_DISPLAY_set_mustard_0",
	{
		iconAddress: "set_mustard_0";
	}
>;
export type AvatarItemDisplaySetNDefaultNew = AvatarItemDisplay<
	"N_DISPLAY_set_n_default-new",
	{
		iconAddress: "set_n_default-new";
	}
>;
export type AvatarItemDisplaySetNDenimfashionweek2023 = AvatarItemDisplay<
	"N_DISPLAY_set_n_denimfashionweek2023",
	{
		iconAddress: "set_denimfashionweek2023_b";
	}
>;
export type AvatarItemDisplaySetNGothitelleitems = AvatarItemDisplay<
	"N_DISPLAY_set_n_gothitelleitems",
	{
		iconAddress: "set_gothitelleitems_b";
	}
>;
export type AvatarItemDisplaySetNReuniclusitems = AvatarItemDisplay<
	"N_DISPLAY_set_n_reuniclusitems",
	{
		iconAddress: "set_reuniclusitems_a";
	}
>;
export type AvatarItemDisplaySetNaganadelaitems = AvatarItemDisplay<
	"N_DISPLAY_set_naganadelaitems",
	{
		iconAddress: "set_naganadelaitems_0";
	}
>;
export type AvatarItemDisplaySetNecrozmaitems0 = AvatarItemDisplay<
	"N_DISPLAY_set_necrozmaitems_0",
	{
		iconAddress: "set_necrozmaitems_0";
	}
>;
export type AvatarItemDisplaySetNewyearF = AvatarItemDisplay<
	"N_DISPLAY_set_newyear_f",
	{
		iconAddress: "set_newyear_a";
	}
>;
export type AvatarItemDisplaySetNewyearM = AvatarItemDisplay<
	"N_DISPLAY_set_newyear_m",
	{
		iconAddress: "set_newyear_b";
	}
>;
export type AvatarItemDisplaySetObstagoonitemsF = AvatarItemDisplay<
	"N_DISPLAY_set_obstagoonitems_f",
	{
		iconAddress: "set_obstagoonitems_a";
	}
>;
export type AvatarItemDisplaySetObstagoonitemsM = AvatarItemDisplay<
	"N_DISPLAY_set_obstagoonitems_m",
	{
		iconAddress: "set_obstagoonitems_b";
	}
>;
export type AvatarItemDisplaySetOrasF = AvatarItemDisplay<
	"N_DISPLAY_set_oras_f",
	{
		iconAddress: "set_oras_a";
	}
>;
export type AvatarItemDisplaySetOrasM = AvatarItemDisplay<
	"N_DISPLAY_set_oras_m",
	{
		iconAddress: "set_oras_b";
	}
>;
export type AvatarItemDisplaySetPajamas20220F = AvatarItemDisplay<
	"N_DISPLAY_set_pajamas2022_0_f",
	{
		iconAddress: "set_pajamas2022_0_a";
	}
>;
export type AvatarItemDisplaySetPajamas20220M = AvatarItemDisplay<
	"N_DISPLAY_set_pajamas2022_0_m",
	{
		iconAddress: "set_pajamas2022_0_b";
	}
>;
export type AvatarItemDisplaySetPajamas20221F = AvatarItemDisplay<
	"N_DISPLAY_set_pajamas2022_1_f",
	{
		iconAddress: "set_pajamas2022_1_a";
	}
>;
export type AvatarItemDisplaySetPajamas20221M = AvatarItemDisplay<
	"N_DISPLAY_set_pajamas2022_1_m",
	{
		iconAddress: "set_pajamas2022_1_b";
	}
>;
export type AvatarItemDisplaySetPalmerF = AvatarItemDisplay<
	"N_DISPLAY_set_palmer_f",
	{
		iconAddress: "set_palmer_a";
	}
>;
export type AvatarItemDisplaySetPalmerM = AvatarItemDisplay<
	"N_DISPLAY_set_palmer_m",
	{
		iconAddress: "set_palmer_b";
	}
>;
export type AvatarItemDisplaySetPikachufan0F = AvatarItemDisplay<
	"N_DISPLAY_set_pikachufan_0_f",
	{
		iconAddress: "set_pikachufan_0_a";
	}
>;
export type AvatarItemDisplaySetPikachufan0M = AvatarItemDisplay<
	"N_DISPLAY_set_pikachufan_0_m",
	{
		iconAddress: "set_pikachufan_0_b";
	}
>;
export type AvatarItemDisplaySetPikachulibreF = AvatarItemDisplay<
	"N_DISPLAY_set_pikachulibre_f",
	{
		iconAddress: "set_pikachulibre_a";
	}
>;
export type AvatarItemDisplaySetPikachulibreM = AvatarItemDisplay<
	"N_DISPLAY_set_pikachulibre_m",
	{
		iconAddress: "set_pikachulibre_b";
	}
>;
export type AvatarItemDisplaySetPkmnhoodie001F = AvatarItemDisplay<
	"N_DISPLAY_set_pkmnhoodie001_f",
	{
		iconAddress: "set_pkmnhoodie001_a";
	}
>;
export type AvatarItemDisplaySetPkmnhoodie001M = AvatarItemDisplay<
	"N_DISPLAY_set_pkmnhoodie001_m",
	{
		iconAddress: "set_pkmnhoodie001_b";
	}
>;
export type AvatarItemDisplaySetPkmnhoodie004F = AvatarItemDisplay<
	"N_DISPLAY_set_pkmnhoodie004_f",
	{
		iconAddress: "set_pkmnhoodie004_a";
	}
>;
export type AvatarItemDisplaySetPkmnhoodie004M = AvatarItemDisplay<
	"N_DISPLAY_set_pkmnhoodie004_m",
	{
		iconAddress: "set_pkmnhoodie004_b";
	}
>;
export type AvatarItemDisplaySetPkmnhoodie007F = AvatarItemDisplay<
	"N_DISPLAY_set_pkmnhoodie007_f",
	{
		iconAddress: "set_pkmnhoodie007_a";
	}
>;
export type AvatarItemDisplaySetPkmnhoodie007M = AvatarItemDisplay<
	"N_DISPLAY_set_pkmnhoodie007_m",
	{
		iconAddress: "set_pkmnhoodie007_b";
	}
>;
export type AvatarItemDisplaySetProfwillowoutfitF = AvatarItemDisplay<
	"N_DISPLAY_set_profwillowoutfit_f",
	{
		iconAddress: "set_profwillowoutfit_a";
	}
>;
export type AvatarItemDisplaySetProfwillowoutfitM = AvatarItemDisplay<
	"N_DISPLAY_set_profwillowoutfit_m",
	{
		iconAddress: "set_profwillowoutfit_b";
	}
>;
export type AvatarItemDisplaySetPumpkabooitemsF = AvatarItemDisplay<
	"N_DISPLAY_set_pumpkabooitems_f",
	{
		iconAddress: "set_pumpkabooitems_a";
	}
>;
export type AvatarItemDisplaySetPumpkabooitemsM = AvatarItemDisplay<
	"N_DISPLAY_set_pumpkabooitems_m",
	{
		iconAddress: "set_pumpkabooitems_b";
	}
>;
export type AvatarItemDisplaySetRegiicejersiesF = AvatarItemDisplay<
	"N_DISPLAY_set_regiicejersies_f",
	{
		iconAddress: "set_regiicejersies_a";
	}
>;
export type AvatarItemDisplaySetRegiicejersiesM = AvatarItemDisplay<
	"N_DISPLAY_set_regiicejersies_m",
	{
		iconAddress: "set_regiicejersies_b";
	}
>;
export type AvatarItemDisplaySetRegirockjersiesF = AvatarItemDisplay<
	"N_DISPLAY_set_regirockjersies_f",
	{
		iconAddress: "set_regirockjersies_a";
	}
>;
export type AvatarItemDisplaySetRegirockjersiesM = AvatarItemDisplay<
	"N_DISPLAY_set_regirockjersies_m",
	{
		iconAddress: "set_regirockjersies_b";
	}
>;
export type AvatarItemDisplaySetRegisteeljersiesF = AvatarItemDisplay<
	"N_DISPLAY_set_registeeljersies_f",
	{
		iconAddress: "set_registeeljersies_a";
	}
>;
export type AvatarItemDisplaySetRegisteeljersiesM = AvatarItemDisplay<
	"N_DISPLAY_set_registeeljersies_m",
	{
		iconAddress: "set_registeeljersies_b";
	}
>;
export type AvatarItemDisplaySetRuinmaniacF = AvatarItemDisplay<
	"N_DISPLAY_set_ruinmaniac_f",
	{
		iconAddress: "set_ruinmaniac_a";
	}
>;
export type AvatarItemDisplaySetRuinmaniacM = AvatarItemDisplay<
	"N_DISPLAY_set_ruinmaniac_m",
	{
		iconAddress: "set_ruinmaniac_b";
	}
>;
export type AvatarItemDisplaySetS19gbl0 = AvatarItemDisplay<
	"N_DISPLAY_set_s19gbl_0",
	{
		iconAddress: "set_s19gbl";
	}
>;
export type AvatarItemDisplaySetS22gbl0 = AvatarItemDisplay<
	"N_DISPLAY_set_s22gbl_0",
	{
		iconAddress: "set_s22gbl_0";
	}
>;
export type AvatarItemDisplaySetShayminLandF = AvatarItemDisplay<
	"N_DISPLAY_set_shaymin_land_f",
	{
		iconAddress: "set_shaymin_land_a";
	}
>;
export type AvatarItemDisplaySetShayminLandM = AvatarItemDisplay<
	"N_DISPLAY_set_shaymin_land_m",
	{
		iconAddress: "set_shaymin_land_b";
	}
>;
export type AvatarItemDisplaySetShayminSkyF = AvatarItemDisplay<
	"N_DISPLAY_set_shaymin_sky_f",
	{
		iconAddress: "set_shaymin_sky_a";
	}
>;
export type AvatarItemDisplaySetShayminSkyM = AvatarItemDisplay<
	"N_DISPLAY_set_shaymin_sky_m",
	{
		iconAddress: "set_shaymin_sky_b";
	}
>;
export type AvatarItemDisplaySetSlowpoketailshirtsF = AvatarItemDisplay<
	"N_DISPLAY_set_slowpoketailshirts_f",
	{
		iconAddress: "set_slowpoketailshirts_a";
	}
>;
export type AvatarItemDisplaySetSlowpoketailshirtsM = AvatarItemDisplay<
	"N_DISPLAY_set_slowpoketailshirts_m",
	{
		iconAddress: "set_slowpoketailshirts_b";
	}
>;
export type AvatarItemDisplaySetSolgaleoitemsF = AvatarItemDisplay<
	"N_DISPLAY_set_solgaleoitems_f",
	{
		iconAddress: "set_solgaleoitems_a";
	}
>;
export type AvatarItemDisplaySetSolgaleoitemsM = AvatarItemDisplay<
	"N_DISPLAY_set_solgaleoitems_m",
	{
		iconAddress: "set_solgaleoitems_b";
	}
>;
export type AvatarItemDisplaySetSsF = AvatarItemDisplay<
	"N_DISPLAY_set_ss_f",
	{
		iconAddress: "set_ss_a";
	}
>;
export type AvatarItemDisplaySetSsM = AvatarItemDisplay<
	"N_DISPLAY_set_ss_m",
	{
		iconAddress: "set_ss_b";
	}
>;
export type AvatarItemDisplaySetStevenF = AvatarItemDisplay<
	"N_DISPLAY_set_steven_f",
	{
		iconAddress: "set_steven_a";
	}
>;
export type AvatarItemDisplaySetStevenM = AvatarItemDisplay<
	"N_DISPLAY_set_steven_m",
	{
		iconAddress: "set_steven_b";
	}
>;
export type AvatarItemDisplaySetStevenfirstF = AvatarItemDisplay<
	"N_DISPLAY_set_stevenfirst_f",
	{
		iconAddress: "set_stevenfirst_a";
	}
>;
export type AvatarItemDisplaySetStevenfirstM = AvatarItemDisplay<
	"N_DISPLAY_set_stevenfirst_m",
	{
		iconAddress: "set_stevenfirst_b";
	}
>;
export type AvatarItemDisplaySetSvcostumescarletschoolF = AvatarItemDisplay<
	"N_DISPLAY_set_svcostumescarletschool_f",
	{
		iconAddress: "set_svcostumescarletschool_a";
	}
>;
export type AvatarItemDisplaySetSvcostumescarletschoolM = AvatarItemDisplay<
	"N_DISPLAY_set_svcostumescarletschool_m",
	{
		iconAddress: "set_svcostumescarletschool_b";
	}
>;
export type AvatarItemDisplaySetSvcostumevioletschoolF = AvatarItemDisplay<
	"N_DISPLAY_set_svcostumevioletschool_f",
	{
		iconAddress: "set_svcostumevioletschool_a";
	}
>;
export type AvatarItemDisplaySetSvcostumevioletschoolM = AvatarItemDisplay<
	"N_DISPLAY_set_svcostumevioletschool_m",
	{
		iconAddress: "set_svcostumevioletschool_b";
	}
>;
export type AvatarItemDisplaySetSvdlc2fall0 = AvatarItemDisplay<
	"N_DISPLAY_set_svdlc2fall_0",
	{
		iconAddress: "set_svdlc2fall_b";
	}
>;
export type AvatarItemDisplaySetSvdlc2spring0 = AvatarItemDisplay<
	"N_DISPLAY_set_svdlc2spring_0",
	{
		iconAddress: "set_svdlc2spring_a";
	}
>;
export type AvatarItemDisplaySetSvdlcF = AvatarItemDisplay<
	"N_DISPLAY_set_svdlc_f",
	{
		iconAddress: "set_svdlc_a";
	}
>;
export type AvatarItemDisplaySetSvdlcM = AvatarItemDisplay<
	"N_DISPLAY_set_svdlc_m",
	{
		iconAddress: "set_svdlc_b";
	}
>;
export type AvatarItemDisplaySetSwshdlc2costumeF = AvatarItemDisplay<
	"N_DISPLAY_set_swshdlc2costume_f",
	{
		iconAddress: "set_swshdlc2costume_a";
	}
>;
export type AvatarItemDisplaySetSwshdlc2costumeM = AvatarItemDisplay<
	"N_DISPLAY_set_swshdlc2costume_m",
	{
		iconAddress: "set_swshdlc2costume_b";
	}
>;
export type AvatarItemDisplaySetSwshdlccostumeF = AvatarItemDisplay<
	"N_DISPLAY_set_swshdlccostume_f",
	{
		iconAddress: "set_swshdlccostume_a";
	}
>;
export type AvatarItemDisplaySetSwshdlccostumeM = AvatarItemDisplay<
	"N_DISPLAY_set_swshdlccostume_m",
	{
		iconAddress: "set_swshdlccostume_b";
	}
>;
export type AvatarItemDisplaySetSwshuniformchampionF = AvatarItemDisplay<
	"N_DISPLAY_set_swshuniformchampion_f",
	{
		iconAddress: "set_swshuniformchampion_a";
	}
>;
export type AvatarItemDisplaySetSwshuniformchampionM = AvatarItemDisplay<
	"N_DISPLAY_set_swshuniformchampion_m",
	{
		iconAddress: "set_swshuniformchampion_b";
	}
>;
export type AvatarItemDisplaySetSwshuniformdarkF = AvatarItemDisplay<
	"N_DISPLAY_set_swshuniformdark_f",
	{
		iconAddress: "set_swshuniformdark_a";
	}
>;
export type AvatarItemDisplaySetSwshuniformdarkM = AvatarItemDisplay<
	"N_DISPLAY_set_swshuniformdark_m",
	{
		iconAddress: "set_swshuniformdark_b";
	}
>;
export type AvatarItemDisplaySetSwshuniformdefaultF = AvatarItemDisplay<
	"N_DISPLAY_set_swshuniformdefault_f",
	{
		iconAddress: "set_swshuniformdefault_a";
	}
>;
export type AvatarItemDisplaySetSwshuniformdefaultM = AvatarItemDisplay<
	"N_DISPLAY_set_swshuniformdefault_m",
	{
		iconAddress: "set_swshuniformdefault_b";
	}
>;
export type AvatarItemDisplaySetSwshuniformdragonF = AvatarItemDisplay<
	"N_DISPLAY_set_swshuniformdragon_f",
	{
		iconAddress: "set_swshuniformdragon_a";
	}
>;
export type AvatarItemDisplaySetSwshuniformdragonM = AvatarItemDisplay<
	"N_DISPLAY_set_swshuniformdragon_m",
	{
		iconAddress: "set_swshuniformdragon_b";
	}
>;
export type AvatarItemDisplaySetSylveonitemsF = AvatarItemDisplay<
	"N_DISPLAY_set_sylveonitems_f",
	{
		iconAddress: "set_sylveonitems_a";
	}
>;
export type AvatarItemDisplaySetSylveonitemsM = AvatarItemDisplay<
	"N_DISPLAY_set_sylveonitems_m",
	{
		iconAddress: "set_sylveonitems_b";
	}
>;
export type AvatarItemDisplaySetTandemausitems0 = AvatarItemDisplay<
	"N_DISPLAY_set_tandemausitems_0",
	{
		iconAddress: "set_tandemausitems_0";
	}
>;
export type AvatarItemDisplaySetTcgcollabtshirtandcapF = AvatarItemDisplay<
	"N_DISPLAY_set_tcgcollabtshirtandcap_f",
	{
		iconAddress: "set_tcgcollabtshirtandcap_a";
	}
>;
export type AvatarItemDisplaySetTcgcollabtshirtandcapM = AvatarItemDisplay<
	"N_DISPLAY_set_tcgcollabtshirtandcap_m",
	{
		iconAddress: "set_tcgcollabtshirtandcap_b";
	}
>;
export type AvatarItemDisplaySetTeamaquaF = AvatarItemDisplay<
	"N_DISPLAY_set_teamaqua_f",
	{
		iconAddress: "set_teamaqua_a";
	}
>;
export type AvatarItemDisplaySetTeamaquaM = AvatarItemDisplay<
	"N_DISPLAY_set_teamaqua_m",
	{
		iconAddress: "set_teamaqua_b";
	}
>;
export type AvatarItemDisplaySetTeamblancheF = AvatarItemDisplay<
	"N_DISPLAY_set_teamblanche_f",
	{
		iconAddress: "set_teamblanche_a";
	}
>;
export type AvatarItemDisplaySetTeamblancheM = AvatarItemDisplay<
	"N_DISPLAY_set_teamblanche_m",
	{
		iconAddress: "set_teamblanche_b";
	}
>;
export type AvatarItemDisplaySetTeamcandelaF = AvatarItemDisplay<
	"N_DISPLAY_set_teamcandela_f",
	{
		iconAddress: "set_teamcandela_a";
	}
>;
export type AvatarItemDisplaySetTeamcandelaM = AvatarItemDisplay<
	"N_DISPLAY_set_teamcandela_m",
	{
		iconAddress: "set_teamcandela_b";
	}
>;
export type AvatarItemDisplaySetTeammagmaF = AvatarItemDisplay<
	"N_DISPLAY_set_teammagma_f",
	{
		iconAddress: "set_teammagma_a";
	}
>;
export type AvatarItemDisplaySetTeammagmaM = AvatarItemDisplay<
	"N_DISPLAY_set_teammagma_m",
	{
		iconAddress: "set_teammagma_b";
	}
>;
export type AvatarItemDisplaySetTeamrocket0F = AvatarItemDisplay<
	"N_DISPLAY_set_teamrocket_0_f",
	{
		iconAddress: "set_teamrocket_0_a";
	}
>;
export type AvatarItemDisplaySetTeamrocket0M = AvatarItemDisplay<
	"N_DISPLAY_set_teamrocket_0_m",
	{
		iconAddress: "set_teamrocket_0_b";
	}
>;
export type AvatarItemDisplaySetTeamrocket1F = AvatarItemDisplay<
	"N_DISPLAY_set_teamrocket_1_f",
	{
		iconAddress: "set_teamrocket_1_a";
	}
>;
export type AvatarItemDisplaySetTeamrocket1M = AvatarItemDisplay<
	"N_DISPLAY_set_teamrocket_1_m",
	{
		iconAddress: "set_teamrocket_1_b";
	}
>;
export type AvatarItemDisplaySetTeamskullF = AvatarItemDisplay<
	"N_DISPLAY_set_teamskull_f",
	{
		iconAddress: "set_teamskull_a";
	}
>;
export type AvatarItemDisplaySetTeamskullM = AvatarItemDisplay<
	"N_DISPLAY_set_teamskull_m",
	{
		iconAddress: "set_teamskull_b";
	}
>;
export type AvatarItemDisplaySetTeamsparkF = AvatarItemDisplay<
	"N_DISPLAY_set_teamspark_f",
	{
		iconAddress: "set_teamspark_a";
	}
>;
export type AvatarItemDisplaySetTeamsparkM = AvatarItemDisplay<
	"N_DISPLAY_set_teamspark_m",
	{
		iconAddress: "set_teamspark_b";
	}
>;
export type AvatarItemDisplaySetTeamyellgruntsA0 = AvatarItemDisplay<
	"N_DISPLAY_set_teamyellgrunts_a_0",
	{
		iconAddress: "set_teamyellgrunts_a_0";
	}
>;
export type AvatarItemDisplaySetTeamyellgruntsB0 = AvatarItemDisplay<
	"N_DISPLAY_set_teamyellgrunts_b_0",
	{
		iconAddress: "set_teamyellgrunts_b_0";
	}
>;
export type AvatarItemDisplaySetUltra0F = AvatarItemDisplay<
	"N_DISPLAY_set_ultra_0_f",
	{
		iconAddress: "set_ultra_0_a";
	}
>;
export type AvatarItemDisplaySetUltra0M = AvatarItemDisplay<
	"N_DISPLAY_set_ultra_0_m",
	{
		iconAddress: "set_ultra_0_b";
	}
>;
export type AvatarItemDisplaySetUltrareconsquadF = AvatarItemDisplay<
	"N_DISPLAY_set_ultrareconsquad_f",
	{
		iconAddress: "set_ultrareconsquad_a";
	}
>;
export type AvatarItemDisplaySetUltrareconsquadM = AvatarItemDisplay<
	"N_DISPLAY_set_ultrareconsquad_m",
	{
		iconAddress: "set_ultrareconsquad_b";
	}
>;
export type AvatarItemDisplaySetUltrareconsquadbF = AvatarItemDisplay<
	"N_DISPLAY_set_ultrareconsquadb_f",
	{
		iconAddress: "set_ultrareconsquadb_a";
	}
>;
export type AvatarItemDisplaySetVeterantrainerxyF = AvatarItemDisplay<
	"N_DISPLAY_set_veterantrainerxy_f",
	{
		iconAddress: "set_veterantrainerxy_a";
	}
>;
export type AvatarItemDisplaySetVeterantrainerxyM = AvatarItemDisplay<
	"N_DISPLAY_set_veterantrainerxy_m",
	{
		iconAddress: "set_veterantrainerxy_b";
	}
>;
export type AvatarItemDisplaySetWcs2022winnersitemsF = AvatarItemDisplay<
	"N_DISPLAY_set_wcs2022winnersitems_f",
	{
		iconAddress: "set_wcs2022winnersitems_a";
	}
>;
export type AvatarItemDisplaySetWcs2022winnersitemsM = AvatarItemDisplay<
	"N_DISPLAY_set_wcs2022winnersitems_m",
	{
		iconAddress: "set_wcs2022winnersitems_b";
	}
>;
export type AvatarItemDisplaySetWcs2024paiditems0 = AvatarItemDisplay<
	"N_DISPLAY_set_wcs2024paiditems_0",
	{
		iconAddress: "set_wcs2024paiditems_0";
	}
>;
export type AvatarItemDisplaySetWcs2024winnersitems0 = AvatarItemDisplay<
	"N_DISPLAY_set_wcs2024winnersitems_0",
	{
		iconAddress: "set_wcs2024winnersitems_0";
	}
>;
export type AvatarItemDisplaySetWcs2025winnersitems0 = AvatarItemDisplay<
	"N_DISPLAY_set_wcs2025winnersitems_0",
	{
		iconAddress: "set_wcs2025winnersitems_0";
	}
>;
export type AvatarItemDisplaySetWinter2023 = AvatarItemDisplay<
	"N_DISPLAY_set_winter2023",
	{
		iconAddress: "set_winter2023_a";
	}
>;
export type AvatarItemDisplaySetZacostumeA = AvatarItemDisplay<
	"N_DISPLAY_set_zacostume_a",
	{
		iconAddress: "set_zacostume_a";
	}
>;
export type AvatarItemDisplaySetZacostumeB = AvatarItemDisplay<
	"N_DISPLAY_set_zacostume_b",
	{
		iconAddress: "set_zacostume_b";
	}
>;

export type AvatarItemDisplayMasterfileEntry =
	| AvatarItemDisplayMBackpackEggbackpack0
	| AvatarItemDisplayMBackpackEggbackpack1
	| AvatarItemDisplayMBackpackEggbackpack2
	| AvatarItemDisplayNBackpackAlolaitemslittenbp0
	| AvatarItemDisplayNBackpackAlolaitemspoppliobp0
	| AvatarItemDisplayNBackpackAlolaitemsrowletbp0
	| AvatarItemDisplayNBackpackAnimegou0
	| AvatarItemDisplayNBackpackBackpacker0
	| AvatarItemDisplayNBackpackBlackkyuremitem0
	| AvatarItemDisplayNBackpackCharjabug0
	| AvatarItemDisplayNBackpackClemont0
	| AvatarItemDisplayNBackpackCombeebackpack0
	| AvatarItemDisplayNBackpackCombeebackpack1
	| AvatarItemDisplayNBackpackCute0
	| AvatarItemDisplayNBackpackDedenneitems0
	| AvatarItemDisplayNBackpackDefaultNew0
	| AvatarItemDisplayNBackpackDefaultA0
	| AvatarItemDisplayNBackpackDefaultA1
	| AvatarItemDisplayNBackpackDefaultA2
	| AvatarItemDisplayNBackpackDefaultA3
	| AvatarItemDisplayNBackpackDefaultB0
	| AvatarItemDisplayNBackpackDefaultB1
	| AvatarItemDisplayNBackpackDefaultB2
	| AvatarItemDisplayNBackpackDefaultB3
	| AvatarItemDisplayNBackpackDefaultB4
	| AvatarItemDisplayNBackpackDefaultB5
	| AvatarItemDisplayNBackpackDp0
	| AvatarItemDisplayNBackpackEggIncubator0
	| AvatarItemDisplayNBackpackEggbackpack0
	| AvatarItemDisplayNBackpackEggbackpack1
	| AvatarItemDisplayNBackpackEggbackpack2
	| AvatarItemDisplayNBackpackFrlgA0
	| AvatarItemDisplayNBackpackFrlgB0
	| AvatarItemDisplayNBackpackGenesecteventitem0
	| AvatarItemDisplayNBackpackGengar0
	| AvatarItemDisplayNBackpackGiratinaitems0
	| AvatarItemDisplayNBackpackGoruckgengar0
	| AvatarItemDisplayNBackpackGoruckpikachu0
	| AvatarItemDisplayNBackpackGoruckwobbuffet0
	| AvatarItemDisplayNBackpackGreenpikavee0
	| AvatarItemDisplayNBackpackGuccibackpack0
	| AvatarItemDisplayNBackpackGuitarcasebackpack0
	| AvatarItemDisplayNBackpackHgssA0
	| AvatarItemDisplayNBackpackHgssB0
	| AvatarItemDisplayNBackpackHououbackpack0
	| AvatarItemDisplayNBackpackKakureonpouch0
	| AvatarItemDisplayNBackpackKomala0
	| AvatarItemDisplayNBackpackLongchampbp0
	| AvatarItemDisplayNBackpackLunalaitems0
	| AvatarItemDisplayNBackpackLunarnewyr0
	| AvatarItemDisplayNBackpackMimikyubp0
	| AvatarItemDisplayNBackpackMovie20200
	| AvatarItemDisplayNBackpackNaganadelwings0
	| AvatarItemDisplayNBackpackNike20210
	| AvatarItemDisplayNBackpackPamobackpack0
	| AvatarItemDisplayNBackpackPinap0
	| AvatarItemDisplayNBackpackPkmnhoodie0010
	| AvatarItemDisplayNBackpackPkmnhoodie0040
	| AvatarItemDisplayNBackpackPkmnhoodie0070
	| AvatarItemDisplayNBackpackRuinmaniac0
	| AvatarItemDisplayNBackpackSnapcamera0
	| AvatarItemDisplayNBackpackSsA0
	| AvatarItemDisplayNBackpackSsB0
	| AvatarItemDisplayNBackpackSvcostumescarletschool0
	| AvatarItemDisplayNBackpackSvcostumevioletschool0
	| AvatarItemDisplayNBackpackSvdlc10
	| AvatarItemDisplayNBackpackSvdlc2spring0
	| AvatarItemDisplayNBackpackSwshdlc2costumeA0
	| AvatarItemDisplayNBackpackSwshdlc2costumeB0
	| AvatarItemDisplayNBackpackSwshdlccostumeA0
	| AvatarItemDisplayNBackpackSwshdlccostumeB0
	| AvatarItemDisplayNBackpackTatsugiribackpackCurly0
	| AvatarItemDisplayNBackpackTatsugiribackpackDroopy0
	| AvatarItemDisplayNBackpackTatsugiribackpackStretchy0
	| AvatarItemDisplayNBackpackTogepibackpack0
	| AvatarItemDisplayNBackpackUltraA0
	| AvatarItemDisplayNBackpackUltraB0
	| AvatarItemDisplayNBackpackUnequip0
	| AvatarItemDisplayNBackpackVerizon20210
	| AvatarItemDisplayNBackpackWhitekyuremitem0
	| AvatarItemDisplayNBackpackZubatbp0
	| AvatarItemDisplayNBeltAcetrainerbw0
	| AvatarItemDisplayNBeltDefaultA0
	| AvatarItemDisplayNBeltDefaultA1
	| AvatarItemDisplayNBeltDefaultA2
	| AvatarItemDisplayNBeltDefaultA3
	| AvatarItemDisplayNBeltDefaultA4
	| AvatarItemDisplayNBeltDefaultA5
	| AvatarItemDisplayNBeltDefaultA6
	| AvatarItemDisplayNBeltDefaultA7
	| AvatarItemDisplayNBeltDefaultA8
	| AvatarItemDisplayNBeltSimple0
	| AvatarItemDisplayNBeltSimple1
	| AvatarItemDisplayNBeltSimple2
	| AvatarItemDisplayNBeltSimple3
	| AvatarItemDisplayNBeltTeamrocket0
	| AvatarItemDisplayNBeltTeamrocket1
	| AvatarItemDisplayNBeltUnequip0
	| AvatarItemDisplayNFace3dmask0
	| AvatarItemDisplayNFace3dmask1
	| AvatarItemDisplayNFace3dmask2
	| AvatarItemDisplayNFaceAllister0
	| AvatarItemDisplayNFaceBanettemask0
	| AvatarItemDisplayNFaceDayofthedead0
	| AvatarItemDisplayNFaceDefaultmask0
	| AvatarItemDisplayNFaceFacestickerghostpika0
	| AvatarItemDisplayNFaceFacestickerpikachu0
	| AvatarItemDisplayNFaceFacestickerpokeball0
	| AvatarItemDisplayNFaceFestofcolors0
	| AvatarItemDisplayNFaceFestofcolors1
	| AvatarItemDisplayNFaceFestofcolors2
	| AvatarItemDisplayNFaceGracidea0
	| AvatarItemDisplayNFaceHoliday2022santacostumes0
	| AvatarItemDisplayNFacePikachumask0
	| AvatarItemDisplayNFaceSableyemask0
	| AvatarItemDisplayNFaceTeamskull0
	| AvatarItemDisplayNFaceToxelmask0
	| AvatarItemDisplayNFaceUnequip0
	| AvatarItemDisplayNFaceVerizon2020mask0
	| AvatarItemDisplayNGlasses3d0
	| AvatarItemDisplayNGlassesClemont0
	| AvatarItemDisplayNGlassesCutieflysleepmask0
	| AvatarItemDisplayNGlassesDittoeyewear0
	| AvatarItemDisplayNGlassesDivingsuit0
	| AvatarItemDisplayNGlassesDrpikachu0
	| AvatarItemDisplayNGlassesFrillishglasses0
	| AvatarItemDisplayNGlassesFw20220
	| AvatarItemDisplayNGlassesGimmighoulitems0
	| AvatarItemDisplayNGlassesGoteamrocketarlo0
	| AvatarItemDisplayNGlassesGrandoakglasses0
	| AvatarItemDisplayNGlassesJogger0
	| AvatarItemDisplayNGlassesLugiaglasses0
	| AvatarItemDisplayNGlassesLv40glasses0
	| AvatarItemDisplayNGlassesLvl73Visorspecs0
	| AvatarItemDisplayNGlassesMask0
	| AvatarItemDisplayNGlassesMask1
	| AvatarItemDisplayNGlassesNecrozmaitems0
	| AvatarItemDisplayNGlassesNewyear20220
	| AvatarItemDisplayNGlassesNewyearglasses20200
	| AvatarItemDisplayNGlassesNewyearglasses20210
	| AvatarItemDisplayNGlassesObstagoonitems0
	| AvatarItemDisplayNGlassesRoundsunglasses0
	| AvatarItemDisplayNGlassesTeardrop0
	| AvatarItemDisplayNGlassesThick0
	| AvatarItemDisplayNGlassesThick1
	| AvatarItemDisplayNGlassesThick2
	| AvatarItemDisplayNGlassesThick3
	| AvatarItemDisplayNGlassesThick4
	| AvatarItemDisplayNGlassesUnequip0
	| AvatarItemDisplayNGlassesWcs2024winnersitems0
	| AvatarItemDisplayNGlovesAcetrainersm0
	| AvatarItemDisplayNGlovesAllister0
	| AvatarItemDisplayNGlovesBattlegirl0
	| AvatarItemDisplayNGlovesBea0
	| AvatarItemDisplayNGlovesBwn0
	| AvatarItemDisplayNGlovesDefaultNew0
	| AvatarItemDisplayNGlovesDefaultA0
	| AvatarItemDisplayNGlovesDefaultA1
	| AvatarItemDisplayNGlovesDefaultA2
	| AvatarItemDisplayNGlovesDefaultA3
	| AvatarItemDisplayNGlovesDefaultB0
	| AvatarItemDisplayNGlovesDefaultB1
	| AvatarItemDisplayNGlovesDefaultB2
	| AvatarItemDisplayNGlovesDefaultB3
	| AvatarItemDisplayNGlovesDelibird0
	| AvatarItemDisplayNGlovesDynamaxswsh0
	| AvatarItemDisplayNGlovesFrlgA0
	| AvatarItemDisplayNGlovesFrlgB0
	| AvatarItemDisplayNGlovesGeeta0
	| AvatarItemDisplayNGlovesGiovanni0
	| AvatarItemDisplayNGlovesGuzma0
	| AvatarItemDisplayNGlovesGymleaderA0
	| AvatarItemDisplayNGlovesGymleaderB0
	| AvatarItemDisplayNGlovesHoopabangle0
	| AvatarItemDisplayNGlovesJogger0
	| AvatarItemDisplayNGlovesKorrina0
	| AvatarItemDisplayNGlovesLysandre0
	| AvatarItemDisplayNGlovesMegabangle0
	| AvatarItemDisplayNGlovesMegabangle1
	| AvatarItemDisplayNGlovesMegabangle2
	| AvatarItemDisplayNGlovesMegabangle3
	| AvatarItemDisplayNGlovesMegabangle4
	| AvatarItemDisplayNGlovesObstagoonitems0
	| AvatarItemDisplayNGlovesPalmer0
	| AvatarItemDisplayNGlovesProfwillowoutfit0
	| AvatarItemDisplayNGlovesStevenfirst0
	| AvatarItemDisplayNGlovesSvdlc2spring0
	| AvatarItemDisplayNGlovesSwshdlc2costume0
	| AvatarItemDisplayNGlovesSwshdlccostume0
	| AvatarItemDisplayNGlovesSwshuniformchampion0
	| AvatarItemDisplayNGlovesSwshuniformdark0
	| AvatarItemDisplayNGlovesSwshuniformdefault0
	| AvatarItemDisplayNGlovesSwshuniformdragon0
	| AvatarItemDisplayNGlovesTeamaquaA0
	| AvatarItemDisplayNGlovesTeamaquaB0
	| AvatarItemDisplayNGlovesTeammagma0
	| AvatarItemDisplayNGlovesTeamrocket0
	| AvatarItemDisplayNGlovesTeamsparkA0
	| AvatarItemDisplayNGlovesTeamsparkB0
	| AvatarItemDisplayNGlovesTeamwristband0
	| AvatarItemDisplayNGlovesTeamwristband1
	| AvatarItemDisplayNGlovesTeamwristband2
	| AvatarItemDisplayNGlovesTeamwristband3
	| AvatarItemDisplayNGlovesTeamyellgrunts0
	| AvatarItemDisplayNGlovesUnequip0
	| AvatarItemDisplayNGlovesWintergloves20230
	| AvatarItemDisplayNGradientEye0
	| AvatarItemDisplayNGradientEye1
	| AvatarItemDisplayNGradientEye10
	| AvatarItemDisplayNGradientEye11
	| AvatarItemDisplayNGradientEye12
	| AvatarItemDisplayNGradientEye13
	| AvatarItemDisplayNGradientEye14
	| AvatarItemDisplayNGradientEye15
	| AvatarItemDisplayNGradientEye16
	| AvatarItemDisplayNGradientEye17
	| AvatarItemDisplayNGradientEye18
	| AvatarItemDisplayNGradientEye19
	| AvatarItemDisplayNGradientEye2
	| AvatarItemDisplayNGradientEye3
	| AvatarItemDisplayNGradientEye4
	| AvatarItemDisplayNGradientEye5
	| AvatarItemDisplayNGradientEye6
	| AvatarItemDisplayNGradientEye7
	| AvatarItemDisplayNGradientEye8
	| AvatarItemDisplayNGradientEye9
	| AvatarItemDisplayNGradientHair0
	| AvatarItemDisplayNGradientHair1
	| AvatarItemDisplayNGradientHair10
	| AvatarItemDisplayNGradientHair11
	| AvatarItemDisplayNGradientHair12
	| AvatarItemDisplayNGradientHair13
	| AvatarItemDisplayNGradientHair14
	| AvatarItemDisplayNGradientHair15
	| AvatarItemDisplayNGradientHair16
	| AvatarItemDisplayNGradientHair17
	| AvatarItemDisplayNGradientHair18
	| AvatarItemDisplayNGradientHair19
	| AvatarItemDisplayNGradientHair2
	| AvatarItemDisplayNGradientHair20
	| AvatarItemDisplayNGradientHair21
	| AvatarItemDisplayNGradientHair22
	| AvatarItemDisplayNGradientHair23
	| AvatarItemDisplayNGradientHair24
	| AvatarItemDisplayNGradientHair25
	| AvatarItemDisplayNGradientHair26
	| AvatarItemDisplayNGradientHair27
	| AvatarItemDisplayNGradientHair28
	| AvatarItemDisplayNGradientHair29
	| AvatarItemDisplayNGradientHair3
	| AvatarItemDisplayNGradientHair30
	| AvatarItemDisplayNGradientHair31
	| AvatarItemDisplayNGradientHair4
	| AvatarItemDisplayNGradientHair5
	| AvatarItemDisplayNGradientHair6
	| AvatarItemDisplayNGradientHair7
	| AvatarItemDisplayNGradientHair8
	| AvatarItemDisplayNGradientHair9
	| AvatarItemDisplayNGradientTesteye0
	| AvatarItemDisplayNGradientTesteye1
	| AvatarItemDisplayNGradientTesthair0
	| AvatarItemDisplayNGradientTesthair1
	| AvatarItemDisplayNHairCoilyshort0
	| AvatarItemDisplayNHairCurlymedium0
	| AvatarItemDisplayNHairDefaultA0
	| AvatarItemDisplayNHairDefaultB0
	| AvatarItemDisplayNHairGrimmsnarl0
	| AvatarItemDisplayNHairKinkymedium0
	| AvatarItemDisplayNHairKinkyshort0
	| AvatarItemDisplayNHairLvl79Synthfade0
	| AvatarItemDisplayNHairLvl79Urbanphantom0
	| AvatarItemDisplayNHairMohawk00
	| AvatarItemDisplayNHairMohawk10
	| AvatarItemDisplayNHairMorgrem0
	| AvatarItemDisplayNHairStraightlong0
	| AvatarItemDisplayNHairStraightmedium0
	| AvatarItemDisplayNHairStraightshort0
	| AvatarItemDisplayNHairTesthair00
	| AvatarItemDisplayNHairTesthair10
	| AvatarItemDisplayNHairWavylong0
	| AvatarItemDisplayNHairWavymedium0
	| AvatarItemDisplayNHairWavyshort0
	| AvatarItemDisplayNHairZacian0
	| AvatarItemDisplayNHairZamazenta0
	| AvatarItemDisplayNHat6thanniversaryA0
	| AvatarItemDisplayNHat6thanniversaryB0
	| AvatarItemDisplayNHatAcetrainersmA0
	| AvatarItemDisplayNHatAcetrainersmB0
	| AvatarItemDisplayNHatAdventure0
	| AvatarItemDisplayNHatAlolanexeggutorhat0
	| AvatarItemDisplayNHatApplinitems0
	| AvatarItemDisplayNHatAseries0
	| AvatarItemDisplayNHatBeaA0
	| AvatarItemDisplayNHatBeaB0
	| AvatarItemDisplayNHatBidoofhat0
	| AvatarItemDisplayNHatBounsweetitems0
	| AvatarItemDisplayNHatBwn0
	| AvatarItemDisplayNHatCaptainpikachu0
	| AvatarItemDisplayNHatCasket0
	| AvatarItemDisplayNHatCetoddlehat0
	| AvatarItemDisplayNHatClay0
	| AvatarItemDisplayNHatCofagrigusitems0
	| AvatarItemDisplayNHatCommunityambassador0
	| AvatarItemDisplayNHatCosmog0
	| AvatarItemDisplayNHatCrownmoon0
	| AvatarItemDisplayNHatCrownsun0
	| AvatarItemDisplayNHatCubonehat0
	| AvatarItemDisplayNHatDarumakahat0
	| AvatarItemDisplayNHatDedenneitems0
	| AvatarItemDisplayNHatDefaultA0
	| AvatarItemDisplayNHatDefaultA1
	| AvatarItemDisplayNHatDefaultA2
	| AvatarItemDisplayNHatDefaultA3
	| AvatarItemDisplayNHatDefaultA4
	| AvatarItemDisplayNHatDefaultA5
	| AvatarItemDisplayNHatDefaultA6
	| AvatarItemDisplayNHatDefaultA7
	| AvatarItemDisplayNHatDefaultB0
	| AvatarItemDisplayNHatDefaultB1
	| AvatarItemDisplayNHatDefaultB2
	| AvatarItemDisplayNHatDefaultB3
	| AvatarItemDisplayNHatDefaultB4
	| AvatarItemDisplayNHatDefaultB5
	| AvatarItemDisplayNHatDeino0
	| AvatarItemDisplayNHatDelibird0
	| AvatarItemDisplayNHatDetectivepikachu0
	| AvatarItemDisplayNHatDiancie0
	| AvatarItemDisplayNHatDpA0
	| AvatarItemDisplayNHatDpB0
	| AvatarItemDisplayNHatDrifloon0
	| AvatarItemDisplayNHatDrpikachu0
	| AvatarItemDisplayNHatDusclopsmummy0
	| AvatarItemDisplayNHatEarringsburmyplant0
	| AvatarItemDisplayNHatEarringsburmysandy0
	| AvatarItemDisplayNHatEarringsburmytrash0
	| AvatarItemDisplayNHatEeveecap0
	| AvatarItemDisplayNHatElesa0
	| AvatarItemDisplayNHatEternatussuit0
	| AvatarItemDisplayNHatFedora0
	| AvatarItemDisplayNHatFedora1
	| AvatarItemDisplayNHatFisher0
	| AvatarItemDisplayNHatFlabebepack0
	| AvatarItemDisplayNHatFlowercrown0
	| AvatarItemDisplayNHatFragment0
	| AvatarItemDisplayNHatFrlgA0
	| AvatarItemDisplayNHatFrlgB0
	| AvatarItemDisplayNHatFurfrouwig0
	| AvatarItemDisplayNHatFw20220
	| AvatarItemDisplayNHatGalarfarfetchditems0
	| AvatarItemDisplayNHatGenesecteventitem0
	| AvatarItemDisplayNHatGengar0
	| AvatarItemDisplayNHatGimmighoulitems0
	| AvatarItemDisplayNHatGiratinaitems0
	| AvatarItemDisplayNHatGladion0
	| AvatarItemDisplayNHatGofestPikachuvisor0
	| AvatarItemDisplayNHatGoomy0
	| AvatarItemDisplayNHatGreavardwig0
	| AvatarItemDisplayNHatGreencoat0
	| AvatarItemDisplayNHatGrowlithehelmet0
	| AvatarItemDisplayNHatGtr2024eeveefanmask0
	| AvatarItemDisplayNHatGtr2024pikachufanmask0
	| AvatarItemDisplayNHatGuccihat0
	| AvatarItemDisplayNHatGuzma0
	| AvatarItemDisplayNHatGyaradoscap0
	| AvatarItemDisplayNHatHalloween20240
	| AvatarItemDisplayNHatHgssA0
	| AvatarItemDisplayNHatHgssB0
	| AvatarItemDisplayNHatHoliday2022santacostumes0
	| AvatarItemDisplayNHatHolidaybeanie0
	| AvatarItemDisplayNHatHoopaearmuffs0
	| AvatarItemDisplayNHatIngo0
	| AvatarItemDisplayNHatJogger0
	| AvatarItemDisplayNHatKantotourcapgreen0
	| AvatarItemDisplayNHatKantotourcapred0
	| AvatarItemDisplayNHatKnitted0
	| AvatarItemDisplayNHatKnitted1
	| AvatarItemDisplayNHatKorrina0
	| AvatarItemDisplayNHatKyuremhat0
	| AvatarItemDisplayNHatLana0
	| AvatarItemDisplayNHatLaprasbandanaA0
	| AvatarItemDisplayNHatLaprasbandanaB0
	| AvatarItemDisplayNHatLasecuritycorps0
	| AvatarItemDisplayNHatLegendofarceusA0
	| AvatarItemDisplayNHatLegendofarceusB0
	| AvatarItemDisplayNHatLitwickhat0
	| AvatarItemDisplayNHatLoneearrings0
	| AvatarItemDisplayNHatLucariomask0
	| AvatarItemDisplayNHatLvl50cap0
	| AvatarItemDisplayNHatMagikarp0
	| AvatarItemDisplayNHatMareaniehat0
	| AvatarItemDisplayNHatMegalopunnyitems0
	| AvatarItemDisplayNHatMegarayquaza0
	| AvatarItemDisplayNHatMeltan0
	| AvatarItemDisplayNHatMeltanearrings0
	| AvatarItemDisplayNHatMewtwoA0
	| AvatarItemDisplayNHatMewtwoB0
	| AvatarItemDisplayNHatMimikyu0
	| AvatarItemDisplayNHatMismagius0
	| AvatarItemDisplayNHatMlbBrewers0
	| AvatarItemDisplayNHatMlbDiamondbacks0
	| AvatarItemDisplayNHatMlbGiants0
	| AvatarItemDisplayNHatMlbGuardians0
	| AvatarItemDisplayNHatMlbMariners0
	| AvatarItemDisplayNHatMlbMarlins0
	| AvatarItemDisplayNHatMlbMets0
	| AvatarItemDisplayNHatMlbNationals0
	| AvatarItemDisplayNHatMlbOrioles0
	| AvatarItemDisplayNHatMlbPadres0
	| AvatarItemDisplayNHatMlbRangers0
	| AvatarItemDisplayNHatMlbRays0
	| AvatarItemDisplayNHatMlbRedsox0
	| AvatarItemDisplayNHatMlbTwins0
	| AvatarItemDisplayNHatMlbWhitesox0
	| AvatarItemDisplayNHatMlb0
	| AvatarItemDisplayNHatMovie20200
	| AvatarItemDisplayNHatMunnapack0
	| AvatarItemDisplayNHatMunnapack1
	| AvatarItemDisplayNHatMustard0
	| AvatarItemDisplayNHatNewyear20220
	| AvatarItemDisplayNHatNewyearhat20210
	| AvatarItemDisplayNHatNewyearhat20230
	| AvatarItemDisplayNHatNihilegoitems0
	| AvatarItemDisplayNHatNoibat0
	| AvatarItemDisplayNHatObstagoonitems0
	| AvatarItemDisplayNHatOrasA0
	| AvatarItemDisplayNHatOrasB0
	| AvatarItemDisplayNHatOricoriopink0
	| AvatarItemDisplayNHatOricoriopurple0
	| AvatarItemDisplayNHatOricoriored0
	| AvatarItemDisplayNHatOricorioyellow0
	| AvatarItemDisplayNHatPartneritemsjan2024hat0
	| AvatarItemDisplayNHatPartyhat0
	| AvatarItemDisplayNHatPhantump0
	| AvatarItemDisplayNHatPikachubutlerBlue0
	| AvatarItemDisplayNHatPikachubutlerRed0
	| AvatarItemDisplayNHatPikachubutlerYellow0
	| AvatarItemDisplayNHatPikachucap0
	| AvatarItemDisplayNHatPikachufan0
	| AvatarItemDisplayNHatPikachulibre0
	| AvatarItemDisplayNHatPikachupumpkinhead0
	| AvatarItemDisplayNHatPkmncap0
	| AvatarItemDisplayNHatPkmncap1
	| AvatarItemDisplayNHatPkmncap2
	| AvatarItemDisplayNHatPoipole0
	| AvatarItemDisplayNHatPokeballitemsBasic0
	| AvatarItemDisplayNHatPokeballitemsGreat0
	| AvatarItemDisplayNHatPokeballitemsUltra0
	| AvatarItemDisplayNHatPolteageisthat0
	| AvatarItemDisplayNHatProfwillowoutfit0
	| AvatarItemDisplayNHatRegiicejersies0
	| AvatarItemDisplayNHatRegirockjersies0
	| AvatarItemDisplayNHatRegisteeljersies0
	| AvatarItemDisplayNHatRuinmaniacA0
	| AvatarItemDisplayNHatRuinmaniacB0
	| AvatarItemDisplayNHatSableyegoggles0
	| AvatarItemDisplayNHatSamsungsummer20200
	| AvatarItemDisplayNHatSandygasthat0
	| AvatarItemDisplayNHatShayminhat0
	| AvatarItemDisplayNHatSlowpoketailshirts0
	| AvatarItemDisplayNHatSnombeanie0
	| AvatarItemDisplayNHatSnorlaxnightcap0
	| AvatarItemDisplayNHatSolgaleoitems0
	| AvatarItemDisplayNHatSsA0
	| AvatarItemDisplayNHatSsB0
	| AvatarItemDisplayNHatStantlerheadband0
	| AvatarItemDisplayNHatStrawhat0
	| AvatarItemDisplayNHatSummer20230
	| AvatarItemDisplayNHatSvcostumescarletschool0
	| AvatarItemDisplayNHatSvcostumevioletschool0
	| AvatarItemDisplayNHatSwshdlc2costume0
	| AvatarItemDisplayNHatSwshuniformchampion0
	| AvatarItemDisplayNHatSylveonitemsA0
	| AvatarItemDisplayNHatSylveonitemsB0
	| AvatarItemDisplayNHatTcgcollabtshirtandcap0
	| AvatarItemDisplayNHatTeamaqua0
	| AvatarItemDisplayNHatTeamleadercap0
	| AvatarItemDisplayNHatTeamleadercap1
	| AvatarItemDisplayNHatTeamleadercap2
	| AvatarItemDisplayNHatTeamrocket0
	| AvatarItemDisplayNHatTeamrocketcap0
	| AvatarItemDisplayNHatTeamskull0
	| AvatarItemDisplayNHatTophat0
	| AvatarItemDisplayNHatUltraA0
	| AvatarItemDisplayNHatUltraB0
	| AvatarItemDisplayNHatUltrareconsquad0
	| AvatarItemDisplayNHatUltrareconsquadb0
	| AvatarItemDisplayNHatUnequip0
	| AvatarItemDisplayNHatVerizon20210
	| AvatarItemDisplayNHatWcs2022winnersitems0
	| AvatarItemDisplayNHatWcs2024paiditems0
	| AvatarItemDisplayNHatWcs20250
	| AvatarItemDisplayNHatWcs2025winnersitems0
	| AvatarItemDisplayNHatWhimsicottearmuff0
	| AvatarItemDisplayNHatWillowglasses0
	| AvatarItemDisplayNHatWoobatearrings0
	| AvatarItemDisplayNHatXerneasitems0
	| AvatarItemDisplayNHatYamaskhat0
	| AvatarItemDisplayNHatYamaskmask0
	| AvatarItemDisplayNHatZacianmask0
	| AvatarItemDisplayNHatZacostumeA0
	| AvatarItemDisplayNHatZacostumeB0
	| AvatarItemDisplayNHatZamazentamask0
	| AvatarItemDisplayNHatZubathat0
	| AvatarItemDisplayNIdle01
	| AvatarItemDisplayNNecklaceDefault0
	| AvatarItemDisplayNNecklaceDefault1
	| AvatarItemDisplayNNecklaceHeart0
	| AvatarItemDisplayNNecklaceStar0
	| AvatarItemDisplayNNecklaceUnequip0
	| AvatarItemDisplayNPants6thanniversary0
	| AvatarItemDisplayNPants7thanniversary0
	| AvatarItemDisplayNPantsAcetrainerbwA0
	| AvatarItemDisplayNPantsAcetrainerbwB0
	| AvatarItemDisplayNPantsAcetrainersm0
	| AvatarItemDisplayNPantsAnimegou0
	| AvatarItemDisplayNPantsBackpackerA0
	| AvatarItemDisplayNPantsBackpackerB0
	| AvatarItemDisplayNPantsBattlegirl0
	| AvatarItemDisplayNPantsBlackwhite0
	| AvatarItemDisplayNPantsBounsweetitems0
	| AvatarItemDisplayNPantsBrock0
	| AvatarItemDisplayNPantsBwn0
	| AvatarItemDisplayNPantsCasualA0
	| AvatarItemDisplayNPantsCasualA1
	| AvatarItemDisplayNPantsCasualB0
	| AvatarItemDisplayNPantsCasualB1
	| AvatarItemDisplayNPantsClay0
	| AvatarItemDisplayNPantsDefaultNew0
	| AvatarItemDisplayNPantsDefaultA0
	| AvatarItemDisplayNPantsDefaultA1
	| AvatarItemDisplayNPantsDefaultA2
	| AvatarItemDisplayNPantsDefaultA3
	| AvatarItemDisplayNPantsDefaultA4
	| AvatarItemDisplayNPantsDefaultA5
	| AvatarItemDisplayNPantsDefaultB0
	| AvatarItemDisplayNPantsDenimfashionweek20230
	| AvatarItemDisplayNPantsDpA0
	| AvatarItemDisplayNPantsDpB0
	| AvatarItemDisplayNPantsElesa0
	| AvatarItemDisplayNPantsEternatussuit0
	| AvatarItemDisplayNPantsFashionweek20220
	| AvatarItemDisplayNPantsFashionweek20250
	| AvatarItemDisplayNPantsFisher0
	| AvatarItemDisplayNPantsFlabebepack0
	| AvatarItemDisplayNPantsFrlgA0
	| AvatarItemDisplayNPantsFrlgB0
	| AvatarItemDisplayNPantsFw2022A0
	| AvatarItemDisplayNPantsFw2022B0
	| AvatarItemDisplayNPantsGeeta0
	| AvatarItemDisplayNPantsGenderlessskirt0
	| AvatarItemDisplayNPantsGiovanni0
	| AvatarItemDisplayNPantsGladion0
	| AvatarItemDisplayNPantsGothitelleitems0
	| AvatarItemDisplayNPantsGreenA0
	| AvatarItemDisplayNPantsGreenB0
	| AvatarItemDisplayNPantsGreencoat0
	| AvatarItemDisplayNPantsGreenpikavee0
	| AvatarItemDisplayNPantsGrimsley0
	| AvatarItemDisplayNPantsGrusha0
	| AvatarItemDisplayNPantsGuzma0
	| AvatarItemDisplayNPantsGymleaderA0
	| AvatarItemDisplayNPantsGymleaderA1
	| AvatarItemDisplayNPantsGymleaderA2
	| AvatarItemDisplayNPantsGymleaderB0
	| AvatarItemDisplayNPantsGymleaderB1
	| AvatarItemDisplayNPantsGymleaderB2
	| AvatarItemDisplayNPantsHala0
	| AvatarItemDisplayNPantsHgssA0
	| AvatarItemDisplayNPantsHgssB0
	| AvatarItemDisplayNPantsIngo0
	| AvatarItemDisplayNPantsJogger0
	| AvatarItemDisplayNPantsKorrina0
	| AvatarItemDisplayNPantsLooseFitting0
	| AvatarItemDisplayNPantsLoosepants0
	| AvatarItemDisplayNPantsLunalaitems0
	| AvatarItemDisplayNPantsLuvdiscpackA0
	| AvatarItemDisplayNPantsLuvdiscpackB0
	| AvatarItemDisplayNPantsLvl75Techtrousers0
	| AvatarItemDisplayNPantsLysandre0
	| AvatarItemDisplayNPantsMewtwoA0
	| AvatarItemDisplayNPantsMewtwoB0
	| AvatarItemDisplayNPantsMiniskirtWave0
	| AvatarItemDisplayNPantsMiniskirtWave1
	| AvatarItemDisplayNPantsMiniskirtWave2
	| AvatarItemDisplayNPantsMiniskirt0
	| AvatarItemDisplayNPantsMiniskirt1
	| AvatarItemDisplayNPantsMiniskirt2
	| AvatarItemDisplayNPantsMiniskirt3
	| AvatarItemDisplayNPantsMisty0
	| AvatarItemDisplayNPantsMunnapack0
	| AvatarItemDisplayNPantsMustard0
	| AvatarItemDisplayNPantsNaganadelaitems0
	| AvatarItemDisplayNPantsNecrozmaitems0
	| AvatarItemDisplayNPantsNeonSolid0
	| AvatarItemDisplayNPantsNeonSolid1
	| AvatarItemDisplayNPantsNeonSolid2
	| AvatarItemDisplayNPantsNeonStripes0
	| AvatarItemDisplayNPantsNeonStripes1
	| AvatarItemDisplayNPantsNewyear20220
	| AvatarItemDisplayNPantsOrasA0
	| AvatarItemDisplayNPantsOrasB0
	| AvatarItemDisplayNPantsPajamas20220
	| AvatarItemDisplayNPantsPajamas20221
	| AvatarItemDisplayNPantsPalmer0
	| AvatarItemDisplayNPantsPikachubutler0
	| AvatarItemDisplayNPantsPikachufanA0
	| AvatarItemDisplayNPantsPikachufanB0
	| AvatarItemDisplayNPantsPikachulibreA0
	| AvatarItemDisplayNPantsPikachulibreB0
	| AvatarItemDisplayNPantsProfwillowoutfit0
	| AvatarItemDisplayNPantsPumpkabooitems0
	| AvatarItemDisplayNPantsRegiicejersies0
	| AvatarItemDisplayNPantsRegirockjersies0
	| AvatarItemDisplayNPantsRegisteeljersies0
	| AvatarItemDisplayNPantsS19gbl0
	| AvatarItemDisplayNPantsShorts0
	| AvatarItemDisplayNPantsShorts1
	| AvatarItemDisplayNPantsShorts2
	| AvatarItemDisplayNPantsShorts3
	| AvatarItemDisplayNPantsSkinnyjeansA0
	| AvatarItemDisplayNPantsSkinnyjeansB0
	| AvatarItemDisplayNPantsSkinnyjeansB1
	| AvatarItemDisplayNPantsSkinnyjeansB2
	| AvatarItemDisplayNPantsSs0
	| AvatarItemDisplayNPantsSteven0
	| AvatarItemDisplayNPantsStevenfirst0
	| AvatarItemDisplayNPantsSweats0
	| AvatarItemDisplayNPantsSweats1
	| AvatarItemDisplayNPantsSweats2
	| AvatarItemDisplayNPantsSweats3
	| AvatarItemDisplayNPantsSweats4
	| AvatarItemDisplayNPantsSwshuniformchampion0
	| AvatarItemDisplayNPantsSwshuniformdarkA0
	| AvatarItemDisplayNPantsSwshuniformdarkB0
	| AvatarItemDisplayNPantsSwshuniformdefaultA0
	| AvatarItemDisplayNPantsSwshuniformdefaultB0
	| AvatarItemDisplayNPantsSwshuniformdragonA0
	| AvatarItemDisplayNPantsSwshuniformdragonB0
	| AvatarItemDisplayNPantsTeamaquaA0
	| AvatarItemDisplayNPantsTeamaquaB0
	| AvatarItemDisplayNPantsTeamblancheA0
	| AvatarItemDisplayNPantsTeamblancheB0
	| AvatarItemDisplayNPantsTeamcandelaA0
	| AvatarItemDisplayNPantsTeamcandelaB0
	| AvatarItemDisplayNPantsTeammagmaA0
	| AvatarItemDisplayNPantsTeammagmaB0
	| AvatarItemDisplayNPantsTeamrocketA0
	| AvatarItemDisplayNPantsTeamrocketB0
	| AvatarItemDisplayNPantsTeamskullA0
	| AvatarItemDisplayNPantsTeamskullB0
	| AvatarItemDisplayNPantsTeamsparkA0
	| AvatarItemDisplayNPantsTeamsparkB0
	| AvatarItemDisplayNPantsTeamyellgruntsPants0
	| AvatarItemDisplayNPantsTeamyellgruntsSkirt0
	| AvatarItemDisplayNPantsTurbine0
	| AvatarItemDisplayNPantsTurbine1
	| AvatarItemDisplayNPantsTurbine2
	| AvatarItemDisplayNPantsUltraA0
	| AvatarItemDisplayNPantsUltraB0
	| AvatarItemDisplayNPantsVeterantrainerxyA0
	| AvatarItemDisplayNPantsVeterantrainerxyB0
	| AvatarItemDisplayNPantsWcs2022winnersitems0
	| AvatarItemDisplayNPantsWcs2024winnersitems0
	| AvatarItemDisplayNPantsWcs2025winnersitems0
	| AvatarItemDisplayNPose001
	| AvatarItemDisplayNPose002
	| AvatarItemDisplayNPose003
	| AvatarItemDisplayNPose004
	| AvatarItemDisplayNPose005
	| AvatarItemDisplayNPose006
	| AvatarItemDisplayNPose007
	| AvatarItemDisplayNPose008
	| AvatarItemDisplayNPose009
	| AvatarItemDisplayNPose010
	| AvatarItemDisplayNPose011
	| AvatarItemDisplayNPose012
	| AvatarItemDisplayNPose013
	| AvatarItemDisplayNPose014
	| AvatarItemDisplayNPose015
	| AvatarItemDisplayNPose016
	| AvatarItemDisplayNPose017
	| AvatarItemDisplayNPose018
	| AvatarItemDisplayNPose019
	| AvatarItemDisplayNPose020
	| AvatarItemDisplayNPose021
	| AvatarItemDisplayNPose022
	| AvatarItemDisplayNPose023
	| AvatarItemDisplayNPose024
	| AvatarItemDisplayNPose025
	| AvatarItemDisplayNPose026
	| AvatarItemDisplayNPose027
	| AvatarItemDisplayNPose028
	| AvatarItemDisplayNPose029
	| AvatarItemDisplayNPose030
	| AvatarItemDisplayNPose031
	| AvatarItemDisplayNPose032
	| AvatarItemDisplayNPose032A
	| AvatarItemDisplayNPose033
	| AvatarItemDisplayNPose034
	| AvatarItemDisplayNPose035
	| AvatarItemDisplayNPose036
	| AvatarItemDisplayNPose037
	| AvatarItemDisplayNPose038
	| AvatarItemDisplayNPose039
	| AvatarItemDisplayNPose040
	| AvatarItemDisplayNPose041
	| AvatarItemDisplayNPose042
	| AvatarItemDisplayNPose043
	| AvatarItemDisplayNPose044
	| AvatarItemDisplayNPose045
	| AvatarItemDisplayNPose046
	| AvatarItemDisplayNPose047
	| AvatarItemDisplayNPose048
	| AvatarItemDisplayNPose049
	| AvatarItemDisplayNPose050
	| AvatarItemDisplayNPose051
	| AvatarItemDisplayNPose052
	| AvatarItemDisplayNPose053
	| AvatarItemDisplayNPose054
	| AvatarItemDisplayNPose055
	| AvatarItemDisplayNPose056
	| AvatarItemDisplayNPose057
	| AvatarItemDisplayNPose058
	| AvatarItemDisplayNPose059
	| AvatarItemDisplayNPose060
	| AvatarItemDisplayNPose061
	| AvatarItemDisplayNPose062
	| AvatarItemDisplayNPose063
	| AvatarItemDisplayNPose064
	| AvatarItemDisplayNPose065
	| AvatarItemDisplayNPose066
	| AvatarItemDisplayNPose067
	| AvatarItemDisplayNPose068
	| AvatarItemDisplayNPoseBuddypokeball
	| AvatarItemDisplayNPoseCarnival
	| AvatarItemDisplayNPoseCommunityambassador
	| AvatarItemDisplayNPoseConcierge
	| AvatarItemDisplayNPoseEmpty
	| AvatarItemDisplayNPoseFashionweek2025
	| AvatarItemDisplayNPoseGofest2025
	| AvatarItemDisplayNPoseGrowingup
	| AvatarItemDisplayNPoseGrusha
	| AvatarItemDisplayNPoseHeart
	| AvatarItemDisplayNPoseIdle
	| AvatarItemDisplayNPoseIdleA
	| AvatarItemDisplayNPoseIdleB
	| AvatarItemDisplayNPoseLegacy50
	| AvatarItemDisplayNPoseLvl77
	| AvatarItemDisplayNPoseMustard
	| AvatarItemDisplayNPosePenpal
	| AvatarItemDisplayNPoseS16finale
	| AvatarItemDisplayNPoseS19gbl
	| AvatarItemDisplayNPoseS20gbl
	| AvatarItemDisplayNPoseS22gbl
	| AvatarItemDisplayNPoseSustainability
	| AvatarItemDisplayNPoseTeapot
	| AvatarItemDisplayNPoseTinkatonhammer
	| AvatarItemDisplayNPoseUrshifurapidstrike
	| AvatarItemDisplayNPoseUrshifusinglestrike
	| AvatarItemDisplayNPoseWaterfestival
	| AvatarItemDisplayNShirt6thanniversaryA0
	| AvatarItemDisplayNShirt6thanniversaryB0
	| AvatarItemDisplayNShirt7thanniversary0
	| AvatarItemDisplayNShirtAcetrainerbwA0
	| AvatarItemDisplayNShirtAcetrainerbwB0
	| AvatarItemDisplayNShirtAcetrainersmA0
	| AvatarItemDisplayNShirtAcetrainersmB0
	| AvatarItemDisplayNShirtAllister0
	| AvatarItemDisplayNShirtAlolacomfey0
	| AvatarItemDisplayNShirtAnimegou0
	| AvatarItemDisplayNShirtApplinitems0
	| AvatarItemDisplayNShirtAseries0
	| AvatarItemDisplayNShirtBackpackerA0
	| AvatarItemDisplayNShirtBackpackerB0
	| AvatarItemDisplayNShirtBallguy0
	| AvatarItemDisplayNShirtBattlegirl0
	| AvatarItemDisplayNShirtBeaA0
	| AvatarItemDisplayNShirtBeaB0
	| AvatarItemDisplayNShirtBewearcostume0
	| AvatarItemDisplayNShirtBlackwhite0
	| AvatarItemDisplayNShirtBlazer0
	| AvatarItemDisplayNShirtBounsweetitemsA0
	| AvatarItemDisplayNShirtBounsweetitemsB0
	| AvatarItemDisplayNShirtBrock0
	| AvatarItemDisplayNShirtButtondown0
	| AvatarItemDisplayNShirtBuzzwoleitems0
	| AvatarItemDisplayNShirtBwn0
	| AvatarItemDisplayNShirtCasualA0
	| AvatarItemDisplayNShirtCasualA1
	| AvatarItemDisplayNShirtCasualA2
	| AvatarItemDisplayNShirtCasualA3
	| AvatarItemDisplayNShirtCasualB0
	| AvatarItemDisplayNShirtCasualB1
	| AvatarItemDisplayNShirtCasualB2
	| AvatarItemDisplayNShirtCasualB3
	| AvatarItemDisplayNShirtCelebi0
	| AvatarItemDisplayNShirtChimcharonesie0
	| AvatarItemDisplayNShirtClay0
	| AvatarItemDisplayNShirtClemont0
	| AvatarItemDisplayNShirtCofagrigusitems0
	| AvatarItemDisplayNShirtConcierge0
	| AvatarItemDisplayNShirtCosmog0
	| AvatarItemDisplayNShirtCowichansweater0
	| AvatarItemDisplayNShirtDayofdead0
	| AvatarItemDisplayNShirtDefaultNew0
	| AvatarItemDisplayNShirtDefaultA0
	| AvatarItemDisplayNShirtDefaultA1
	| AvatarItemDisplayNShirtDefaultA2
	| AvatarItemDisplayNShirtDefaultA3
	| AvatarItemDisplayNShirtDefaultA4
	| AvatarItemDisplayNShirtDefaultA5
	| AvatarItemDisplayNShirtDefaultA6
	| AvatarItemDisplayNShirtDefaultA7
	| AvatarItemDisplayNShirtDefaultA8
	| AvatarItemDisplayNShirtDefaultB0
	| AvatarItemDisplayNShirtDefaultB1
	| AvatarItemDisplayNShirtDefaultB2
	| AvatarItemDisplayNShirtDefaultB3
	| AvatarItemDisplayNShirtDefaultB4
	| AvatarItemDisplayNShirtDefaultB5
	| AvatarItemDisplayNShirtDefaultB6
	| AvatarItemDisplayNShirtDefaultB7
	| AvatarItemDisplayNShirtDefaultB8
	| AvatarItemDisplayNShirtDelibird0
	| AvatarItemDisplayNShirtDelibirdonesie0
	| AvatarItemDisplayNShirtDenimfashionweek20230
	| AvatarItemDisplayNShirtDenimjacket0
	| AvatarItemDisplayNShirtDetectivepikachu0
	| AvatarItemDisplayNShirtDiancie0
	| AvatarItemDisplayNShirtDisguiseHoodoff0
	| AvatarItemDisplayNShirtDisguiseHoodon0
	| AvatarItemDisplayNShirtDivingsuit0
	| AvatarItemDisplayNShirtDiwali20210
	| AvatarItemDisplayNShirtDpA0
	| AvatarItemDisplayNShirtDpB0
	| AvatarItemDisplayNShirtDrifblim0
	| AvatarItemDisplayNShirtDudunsparceitem0
	| AvatarItemDisplayNShirtDusclopsmummy0
	| AvatarItemDisplayNShirtEarthday20180
	| AvatarItemDisplayNShirtEeveestshirt000
	| AvatarItemDisplayNShirtEeveestshirt010
	| AvatarItemDisplayNShirtEeveestshirt020
	| AvatarItemDisplayNShirtEeveestshirt030
	| AvatarItemDisplayNShirtEeveestshirt040
	| AvatarItemDisplayNShirtEeveestshirt050
	| AvatarItemDisplayNShirtEeveestshirt060
	| AvatarItemDisplayNShirtEeveestshirt070
	| AvatarItemDisplayNShirtEeveestshirt080
	| AvatarItemDisplayNShirtElesaA0
	| AvatarItemDisplayNShirtElesaB0
	| AvatarItemDisplayNShirtEternatussuit0
	| AvatarItemDisplayNShirtFashionweek20220
	| AvatarItemDisplayNShirtFashionweek20250
	| AvatarItemDisplayNShirtFestivaloflights000
	| AvatarItemDisplayNShirtFestivaloflights010
	| AvatarItemDisplayNShirtFisher0
	| AvatarItemDisplayNShirtFlabebepack0
	| AvatarItemDisplayNShirtFragment0
	| AvatarItemDisplayNShirtFrlgA0
	| AvatarItemDisplayNShirtFrlgB0
	| AvatarItemDisplayNShirtFw2022A0
	| AvatarItemDisplayNShirtFw2022B0
	| AvatarItemDisplayNShirtGalarfarfetchditems0
	| AvatarItemDisplayNShirtGalaxyoutfitA0
	| AvatarItemDisplayNShirtGalaxyoutfitB0
	| AvatarItemDisplayNShirtGeeta0
	| AvatarItemDisplayNShirtGenderlessskirt0
	| AvatarItemDisplayNShirtGengar0
	| AvatarItemDisplayNShirtGengaronesie0
	| AvatarItemDisplayNShirtGiovanniA0
	| AvatarItemDisplayNShirtGiovanniB0
	| AvatarItemDisplayNShirtGiratinaitems0
	| AvatarItemDisplayNShirtGladion0
	| AvatarItemDisplayNShirtGofest20190
	| AvatarItemDisplayNShirtGofest20200
	| AvatarItemDisplayNShirtGofest20210
	| AvatarItemDisplayNShirtGofest20220
	| AvatarItemDisplayNShirtGofest20230
	| AvatarItemDisplayNShirtGofest2024darkgray0
	| AvatarItemDisplayNShirtGofest2024gray0
	| AvatarItemDisplayNShirtGofest2024purple0
	| AvatarItemDisplayNShirtGofest20250
	| AvatarItemDisplayNShirtGofest2025cream0
	| AvatarItemDisplayNShirtGofestglobal20230
	| AvatarItemDisplayNShirtGoteamrocketarloA0
	| AvatarItemDisplayNShirtGoteamrocketarloB0
	| AvatarItemDisplayNShirtGoteamrocketcliffA0
	| AvatarItemDisplayNShirtGoteamrocketcliffB0
	| AvatarItemDisplayNShirtGoteamrocketsierraA0
	| AvatarItemDisplayNShirtGoteamrocketsierraB0
	| AvatarItemDisplayNShirtGothitelleitems0
	| AvatarItemDisplayNShirtGotour20230
	| AvatarItemDisplayNShirtGotour20240
	| AvatarItemDisplayNShirtGotour20250
	| AvatarItemDisplayNShirtGotour20251
	| AvatarItemDisplayNShirtGotour20252
	| AvatarItemDisplayNShirtGotour2026Black0
	| AvatarItemDisplayNShirtGotour2026Gray0
	| AvatarItemDisplayNShirtGowa20240
	| AvatarItemDisplayNShirtGowa20250
	| AvatarItemDisplayNShirtGowa20251
	| AvatarItemDisplayNShirtGreedentsweater0
	| AvatarItemDisplayNShirtGreen0
	| AvatarItemDisplayNShirtGreencoat0
	| AvatarItemDisplayNShirtGreenpikavee0
	| AvatarItemDisplayNShirtGrimsley0
	| AvatarItemDisplayNShirtGrusha0
	| AvatarItemDisplayNShirtGtrtshirt20220
	| AvatarItemDisplayNShirtGtrtshirt20221
	| AvatarItemDisplayNShirtGuccitshirts0
	| AvatarItemDisplayNShirtGuzma0
	| AvatarItemDisplayNShirtGymleaderA0
	| AvatarItemDisplayNShirtGymleaderA1
	| AvatarItemDisplayNShirtGymleaderA2
	| AvatarItemDisplayNShirtGymleaderB0
	| AvatarItemDisplayNShirtGymleaderB1
	| AvatarItemDisplayNShirtGymleaderB2
	| AvatarItemDisplayNShirtHala0
	| AvatarItemDisplayNShirtHalloween20240
	| AvatarItemDisplayNShirtHappi0
	| AvatarItemDisplayNShirtHappi1
	| AvatarItemDisplayNShirtHappi2
	| AvatarItemDisplayNShirtHgssA0
	| AvatarItemDisplayNShirtHgssB0
	| AvatarItemDisplayNShirtHoliday2022santacostumes0
	| AvatarItemDisplayNShirtHoliday2024Marshtompsweater0
	| AvatarItemDisplayNShirtHoliday2024Staryusweater0
	| AvatarItemDisplayNShirtHoliday2024Wooloojacket0
	| AvatarItemDisplayNShirtHolifestival2021black0
	| AvatarItemDisplayNShirtHolifestival2021white0
	| AvatarItemDisplayNShirtHoopaunboundtshirt0
	| AvatarItemDisplayNShirtIngo0
	| AvatarItemDisplayNShirtIngressE0
	| AvatarItemDisplayNShirtIngressR0
	| AvatarItemDisplayNShirtIngress0
	| AvatarItemDisplayNShirtJacketNewyear20220
	| AvatarItemDisplayNShirtJames0
	| AvatarItemDisplayNShirtJessie0
	| AvatarItemDisplayNShirtJirachi0
	| AvatarItemDisplayNShirtJogger0
	| AvatarItemDisplayNShirtKeldeotshirt0
	| AvatarItemDisplayNShirtKorrinaA0
	| AvatarItemDisplayNShirtKorrinaB0
	| AvatarItemDisplayNShirtLadiamondoutfitA0
	| AvatarItemDisplayNShirtLadiamondoutfitB0
	| AvatarItemDisplayNShirtLana0
	| AvatarItemDisplayNShirtLapearloutfitA0
	| AvatarItemDisplayNShirtLapearloutfitB0
	| AvatarItemDisplayNShirtLasecuritycorpsA0
	| AvatarItemDisplayNShirtLasecuritycorpsB0
	| AvatarItemDisplayNShirtLatiasLatios0
	| AvatarItemDisplayNShirtLegendofarceusA0
	| AvatarItemDisplayNShirtLegendofarceusB0
	| AvatarItemDisplayNShirtLongsleevesCharizard0
	| AvatarItemDisplayNShirtLongsleevesCharizard1
	| AvatarItemDisplayNShirtLongsleevesCharizard2
	| AvatarItemDisplayNShirtLongsleevesPikachu0
	| AvatarItemDisplayNShirtLongsleevesPikachu1
	| AvatarItemDisplayNShirtLongsleevesPikachu2
	| AvatarItemDisplayNShirtLooseFitting0
	| AvatarItemDisplayNShirtLooseFitting1
	| AvatarItemDisplayNShirtLuvdiscpackA0
	| AvatarItemDisplayNShirtLuvdiscpackB0
	| AvatarItemDisplayNShirtLvl500
	| AvatarItemDisplayNShirtLvl501
	| AvatarItemDisplayNShirtLvl80Circuitjacket0
	| AvatarItemDisplayNShirtLysandre0
	| AvatarItemDisplayNShirtMarshadowtshirt0
	| AvatarItemDisplayNShirtMegalopunnyitems0
	| AvatarItemDisplayNShirtMegarayquaza0
	| AvatarItemDisplayNShirtMelmetaljacket0
	| AvatarItemDisplayNShirtMelmetalvest0
	| AvatarItemDisplayNShirtMeloettatshirt0
	| AvatarItemDisplayNShirtMeltan0
	| AvatarItemDisplayNShirtMew0
	| AvatarItemDisplayNShirtMewtwoA0
	| AvatarItemDisplayNShirtMewtwoB0
	| AvatarItemDisplayNShirtMisty0
	| AvatarItemDisplayNShirtMorpekofullonesie0
	| AvatarItemDisplayNShirtMorpekohangryonesie0
	| AvatarItemDisplayNShirtMovie2020jessiejamesA0
	| AvatarItemDisplayNShirtMovie2020jessiejamesB0
	| AvatarItemDisplayNShirtMunnapackA0
	| AvatarItemDisplayNShirtMunnapackB0
	| AvatarItemDisplayNShirtMustard0
	| AvatarItemDisplayNShirtNaganadelaitems0
	| AvatarItemDisplayNShirtNecrozmaitems0
	| AvatarItemDisplayNShirtNike20210
	| AvatarItemDisplayNShirtOcshirt045A0
	| AvatarItemDisplayNShirtOcshirt045B0
	| AvatarItemDisplayNShirtOcshirt108A0
	| AvatarItemDisplayNShirtOcshirt108B0
	| AvatarItemDisplayNShirtOcshirt129A0
	| AvatarItemDisplayNShirtOcshirt129B0
	| AvatarItemDisplayNShirtOcshirt143A0
	| AvatarItemDisplayNShirtOcshirt143B0
	| AvatarItemDisplayNShirtOrasA0
	| AvatarItemDisplayNShirtOrasB0
	| AvatarItemDisplayNShirtPajamas20220
	| AvatarItemDisplayNShirtPajamas20221
	| AvatarItemDisplayNShirtPalmer0
	| AvatarItemDisplayNShirtPartneritemsjan2024hoodie0
	| AvatarItemDisplayNShirtPartneritemsjan2024tshirt0
	| AvatarItemDisplayNShirtPikachubutlerBlue0
	| AvatarItemDisplayNShirtPikachubutlerRed0
	| AvatarItemDisplayNShirtPikachubutlerYellow0
	| AvatarItemDisplayNShirtPikachufanA0
	| AvatarItemDisplayNShirtPikachufanB0
	| AvatarItemDisplayNShirtPikachulibreA0
	| AvatarItemDisplayNShirtPikachulibreB0
	| AvatarItemDisplayNShirtPikachuonesie0
	| AvatarItemDisplayNShirtPinpukuhoodie0
	| AvatarItemDisplayNShirtPipluponesie0
	| AvatarItemDisplayNShirtPkmnhoodie0010
	| AvatarItemDisplayNShirtPkmnhoodie0040
	| AvatarItemDisplayNShirtPkmnhoodie0070
	| AvatarItemDisplayNShirtPkmnshirts1650
	| AvatarItemDisplayNShirtPkmnshirts1880
	| AvatarItemDisplayNShirtPkmnshirts2010
	| AvatarItemDisplayNShirtPkmnshirts2380
	| AvatarItemDisplayNShirtPkmnshirts20210
	| AvatarItemDisplayNShirtPkmnshirts20211
	| AvatarItemDisplayNShirtPkmnshirts20212
	| AvatarItemDisplayNShirtPokeballitemsBasic0
	| AvatarItemDisplayNShirtPokeballitemsGreat0
	| AvatarItemDisplayNShirtPokeballitemsUltra0
	| AvatarItemDisplayNShirtPoloshirt0
	| AvatarItemDisplayNShirtPoloshirt1
	| AvatarItemDisplayNShirtPoloshirt2
	| AvatarItemDisplayNShirtProfwillowoutfit0
	| AvatarItemDisplayNShirtProjectguitar0
	| AvatarItemDisplayNShirtPumpkabooitems0
	| AvatarItemDisplayNShirtRegiicejersies0
	| AvatarItemDisplayNShirtRegirockjersies0
	| AvatarItemDisplayNShirtRegisteeljersies0
	| AvatarItemDisplayNShirtReuniclusitems0
	| AvatarItemDisplayNShirtRuinmaniacA0
	| AvatarItemDisplayNShirtRuinmaniacB0
	| AvatarItemDisplayNShirtS19gbl0
	| AvatarItemDisplayNShirtSafarizone2020A0
	| AvatarItemDisplayNShirtSafarizone2020B0
	| AvatarItemDisplayNShirtSamsungsummer20200
	| AvatarItemDisplayNShirtScolipede0
	| AvatarItemDisplayNShirtShayminlandtshirt0
	| AvatarItemDisplayNShirtShayminskytshirt0
	| AvatarItemDisplayNShirtShinydiancie
	| AvatarItemDisplayNShirtShinykeldeoshirt0
	| AvatarItemDisplayNShirtShinymeloettatshirt0
	| AvatarItemDisplayNShirtShinymewtshirts0
	| AvatarItemDisplayNShirtSlowpokeshirts0
	| AvatarItemDisplayNShirtSlowpoketailshirts0
	| AvatarItemDisplayNShirtSnorlaxonesie0
	| AvatarItemDisplayNShirtSpiritomb0
	| AvatarItemDisplayNShirtSpring2021gulpinA0
	| AvatarItemDisplayNShirtSpring2021gulpinB0
	| AvatarItemDisplayNShirtSpring2021plusleA0
	| AvatarItemDisplayNShirtSpring2021plusleB0
	| AvatarItemDisplayNShirtSsA0
	| AvatarItemDisplayNShirtSsB0
	| AvatarItemDisplayNShirtSteven0
	| AvatarItemDisplayNShirtStevenfirst0
	| AvatarItemDisplayNShirtSukajanblastoise0
	| AvatarItemDisplayNShirtSukajancharizard0
	| AvatarItemDisplayNShirtSukajanhouou0
	| AvatarItemDisplayNShirtSukajanlugia0
	| AvatarItemDisplayNShirtSukajanvenusaur0
	| AvatarItemDisplayNShirtSummer20230
	| AvatarItemDisplayNShirtSustainability2021A0
	| AvatarItemDisplayNShirtSustainability2021B0
	| AvatarItemDisplayNShirtSvcostumescarletschool0
	| AvatarItemDisplayNShirtSvcostumevioletschool0
	| AvatarItemDisplayNShirtSvdlc10
	| AvatarItemDisplayNShirtSvdlc2fall0
	| AvatarItemDisplayNShirtSvdlc2spring0
	| AvatarItemDisplayNShirtSweater300
	| AvatarItemDisplayNShirtSweater301
	| AvatarItemDisplayNShirtSweater302
	| AvatarItemDisplayNShirtSweaterInstinct0
	| AvatarItemDisplayNShirtSweaterMystic0
	| AvatarItemDisplayNShirtSweaterValor0
	| AvatarItemDisplayNShirtSweatshirtSporty0
	| AvatarItemDisplayNShirtSweatshirtSporty1
	| AvatarItemDisplayNShirtSweatshirtSporty2
	| AvatarItemDisplayNShirtSweatshirtSporty3
	| AvatarItemDisplayNShirtSweatshirtStreak0
	| AvatarItemDisplayNShirtSweatshirtStreak1
	| AvatarItemDisplayNShirtSweatshirtStreak2
	| AvatarItemDisplayNShirtSweatshirtStreak3
	| AvatarItemDisplayNShirtSweatshirtStreak4
	| AvatarItemDisplayNShirtSwshdlc2costume0
	| AvatarItemDisplayNShirtSwshdlccostumeA0
	| AvatarItemDisplayNShirtSwshdlccostumeB0
	| AvatarItemDisplayNShirtSwshuniformchampion0
	| AvatarItemDisplayNShirtSwshuniformdarkA0
	| AvatarItemDisplayNShirtSwshuniformdarkB0
	| AvatarItemDisplayNShirtSwshuniformdefault0
	| AvatarItemDisplayNShirtSwshuniformdragon0
	| AvatarItemDisplayNShirtSylveonitems0
	| AvatarItemDisplayNShirtTandemausitems0
	| AvatarItemDisplayNShirtTanktopCharizard0
	| AvatarItemDisplayNShirtTanktopCharizard1
	| AvatarItemDisplayNShirtTanktopCharizard2
	| AvatarItemDisplayNShirtTanktopPikachu0
	| AvatarItemDisplayNShirtTanktopPikachu1
	| AvatarItemDisplayNShirtTanktopPikachu2
	| AvatarItemDisplayNShirtTanktop0
	| AvatarItemDisplayNShirtTanktop1
	| AvatarItemDisplayNShirtTanktop2
	| AvatarItemDisplayNShirtTcgcollabtshirtandcap0
	| AvatarItemDisplayNShirtTeamaquaA0
	| AvatarItemDisplayNShirtTeamaquaB0
	| AvatarItemDisplayNShirtTeamblancheA0
	| AvatarItemDisplayNShirtTeamblancheB0
	| AvatarItemDisplayNShirtTeamcandelaA0
	| AvatarItemDisplayNShirtTeamcandelaB0
	| AvatarItemDisplayNShirtTeammagmaA0
	| AvatarItemDisplayNShirtTeammagmaB0
	| AvatarItemDisplayNShirtTeamrocketA0
	| AvatarItemDisplayNShirtTeamrocketA1
	| AvatarItemDisplayNShirtTeamrocketB0
	| AvatarItemDisplayNShirtTeamrocketB1
	| AvatarItemDisplayNShirtTeamskull0
	| AvatarItemDisplayNShirtTeamsparkA0
	| AvatarItemDisplayNShirtTeamsparkB0
	| AvatarItemDisplayNShirtTeamyellgruntsCropped0
	| AvatarItemDisplayNShirtTeamyellgruntsLong0
	| AvatarItemDisplayNShirtTogepihoodie0
	| AvatarItemDisplayNShirtTracksuitsgroudon0
	| AvatarItemDisplayNShirtTracksuitskyogre0
	| AvatarItemDisplayNShirtTshirtCycling0
	| AvatarItemDisplayNShirtTshirtCycling1
	| AvatarItemDisplayNShirtTshirtCycling2
	| AvatarItemDisplayNShirtTshirtCycling3
	| AvatarItemDisplayNShirtTshirtFestChicago20170
	| AvatarItemDisplayNShirtTshirtFestChicago20180
	| AvatarItemDisplayNShirtTshirtGeometric0
	| AvatarItemDisplayNShirtTshirtGeometric1
	| AvatarItemDisplayNShirtTshirtGeometric2
	| AvatarItemDisplayNShirtTshirtGlobalGoals20170
	| AvatarItemDisplayNShirtTshirtInstinct0
	| AvatarItemDisplayNShirtTshirtMystic0
	| AvatarItemDisplayNShirtTshirtPikachu0
	| AvatarItemDisplayNShirtTshirtPikachu1
	| AvatarItemDisplayNShirtTshirtPikachu2
	| AvatarItemDisplayNShirtTshirtPikachu3
	| AvatarItemDisplayNShirtTshirtPikachu4
	| AvatarItemDisplayNShirtTshirtPikachu5
	| AvatarItemDisplayNShirtTshirtPikachu6
	| AvatarItemDisplayNShirtTshirtValor0
	| AvatarItemDisplayNShirtTurtleneck300
	| AvatarItemDisplayNShirtTurtleneck301
	| AvatarItemDisplayNShirtTurtleneck302
	| AvatarItemDisplayNShirtTurtleneck303
	| AvatarItemDisplayNShirtTurtwigonesie0
	| AvatarItemDisplayNShirtUglysweatersudowoodo0
	| AvatarItemDisplayNShirtUltraA0
	| AvatarItemDisplayNShirtUltraB0
	| AvatarItemDisplayNShirtUltrareconsquad0
	| AvatarItemDisplayNShirtUniqlotshirts0
	| AvatarItemDisplayNShirtUniqlotshirts1
	| AvatarItemDisplayNShirtUniqlotshirts2
	| AvatarItemDisplayNShirtUnwto0
	| AvatarItemDisplayNShirtValentine20230
	| AvatarItemDisplayNShirtVerizon20200
	| AvatarItemDisplayNShirtVeterantrainerxyA0
	| AvatarItemDisplayNShirtVeterantrainerxyB0
	| AvatarItemDisplayNShirtVictinitshirts0
	| AvatarItemDisplayNShirtVolcaniontshirt0
	| AvatarItemDisplayNShirtWcs20220
	| AvatarItemDisplayNShirtWcs2022tshirtbulu0
	| AvatarItemDisplayNShirtWcs2022tshirtred0
	| AvatarItemDisplayNShirtWcs2022winnersitems0
	| AvatarItemDisplayNShirtWcs20230
	| AvatarItemDisplayNShirtWcs2023promotshirt00
	| AvatarItemDisplayNShirtWcs2023promotshirt10
	| AvatarItemDisplayNShirtWcs2023sukajan0
	| AvatarItemDisplayNShirtWcs2023winnersitems0
	| AvatarItemDisplayNShirtWcs20240
	| AvatarItemDisplayNShirtWcs2024championshipshirtBlue0
	| AvatarItemDisplayNShirtWcs2024championshipshirtWhite0
	| AvatarItemDisplayNShirtWcs2024paiditems0
	| AvatarItemDisplayNShirtWcs2024winnersitems0
	| AvatarItemDisplayNShirtWcs20250
	| AvatarItemDisplayNShirtWcs2025anaheimWhite0
	| AvatarItemDisplayNShirtWcs2025anaheimYellow0
	| AvatarItemDisplayNShirtWcs2025paiditems0
	| AvatarItemDisplayNShirtWcs2025winnersitems0
	| AvatarItemDisplayNShirtWcsyokohama0
	| AvatarItemDisplayNShirtWhitecoat0
	| AvatarItemDisplayNShirtWintersweater20230
	| AvatarItemDisplayNShirtYveltaljacket
	| AvatarItemDisplayNShirtZacostumeA0
	| AvatarItemDisplayNShirtZacostumeB0
	| AvatarItemDisplayNShirtZoruaonesie0
	| AvatarItemDisplayNShirtZygarde100items0
	| AvatarItemDisplayNShoes6thanniversaryA0
	| AvatarItemDisplayNShoes6thanniversaryB0
	| AvatarItemDisplayNShoesAcetrainerbwA0
	| AvatarItemDisplayNShoesAcetrainerbwB0
	| AvatarItemDisplayNShoesAcetrainersmA0
	| AvatarItemDisplayNShoesAcetrainersmB0
	| AvatarItemDisplayNShoesAllister0
	| AvatarItemDisplayNShoesAnimegou0
	| AvatarItemDisplayNShoesBackpackerA0
	| AvatarItemDisplayNShoesBackpackerB0
	| AvatarItemDisplayNShoesBattlegirl0
	| AvatarItemDisplayNShoesBlacephalon0
	| AvatarItemDisplayNShoesBrock0
	| AvatarItemDisplayNShoesBwn0
	| AvatarItemDisplayNShoesCarbink0
	| AvatarItemDisplayNShoesClay0
	| AvatarItemDisplayNShoesClemont0
	| AvatarItemDisplayNShoesCoolboots0
	| AvatarItemDisplayNShoesDedenneitems0
	| AvatarItemDisplayNShoesDefaultNew0
	| AvatarItemDisplayNShoesDefaultA0
	| AvatarItemDisplayNShoesDefaultA1
	| AvatarItemDisplayNShoesDefaultA2
	| AvatarItemDisplayNShoesDefaultA3
	| AvatarItemDisplayNShoesDefaultA4
	| AvatarItemDisplayNShoesDefaultA5
	| AvatarItemDisplayNShoesDefaultA6
	| AvatarItemDisplayNShoesDefaultB0
	| AvatarItemDisplayNShoesDefaultB1
	| AvatarItemDisplayNShoesDefaultB2
	| AvatarItemDisplayNShoesDefaultB3
	| AvatarItemDisplayNShoesDefaultB4
	| AvatarItemDisplayNShoesDefaultB5
	| AvatarItemDisplayNShoesDefaultB6
	| AvatarItemDisplayNShoesDelibird0
	| AvatarItemDisplayNShoesDpA0
	| AvatarItemDisplayNShoesDpB0
	| AvatarItemDisplayNShoesElesaA0
	| AvatarItemDisplayNShoesElesaB0
	| AvatarItemDisplayNShoesEternatussuit0
	| AvatarItemDisplayNShoesFashionweek20220
	| AvatarItemDisplayNShoesFisher0
	| AvatarItemDisplayNShoesFrlgA0
	| AvatarItemDisplayNShoesFrlgB0
	| AvatarItemDisplayNShoesFw20220
	| AvatarItemDisplayNShoesGeeta0
	| AvatarItemDisplayNShoesGiovanniA0
	| AvatarItemDisplayNShoesGiovanniB0
	| AvatarItemDisplayNShoesGladion0
	| AvatarItemDisplayNShoesGothitelleitems0
	| AvatarItemDisplayNShoesGreenA0
	| AvatarItemDisplayNShoesGreenB0
	| AvatarItemDisplayNShoesGreenpikavee0
	| AvatarItemDisplayNShoesGrimsley0
	| AvatarItemDisplayNShoesGrusha0
	| AvatarItemDisplayNShoesGymleader0
	| AvatarItemDisplayNShoesGymleader1
	| AvatarItemDisplayNShoesGymleader2
	| AvatarItemDisplayNShoesHala0
	| AvatarItemDisplayNShoesHgssA0
	| AvatarItemDisplayNShoesHgssB0
	| AvatarItemDisplayNShoesIngo0
	| AvatarItemDisplayNShoesJogger0
	| AvatarItemDisplayNShoesKorrina0
	| AvatarItemDisplayNShoesLadiamondoutfitA0
	| AvatarItemDisplayNShoesLadiamondoutfitB0
	| AvatarItemDisplayNShoesLana0
	| AvatarItemDisplayNShoesLapearloutfitA0
	| AvatarItemDisplayNShoesLapearloutfitB0
	| AvatarItemDisplayNShoesLegendofarceusA0
	| AvatarItemDisplayNShoesLegendofarceusB0
	| AvatarItemDisplayNShoesLoosepants0
	| AvatarItemDisplayNShoesLoosepants1
	| AvatarItemDisplayNShoesLoosepants2
	| AvatarItemDisplayNShoesLoosepants3
	| AvatarItemDisplayNShoesLuvdiscpack0
	| AvatarItemDisplayNShoesLvl71Cyberkicks0
	| AvatarItemDisplayNShoesLysandre0
	| AvatarItemDisplayNShoesMegalopunnyitems0
	| AvatarItemDisplayNShoesMelmetalshoes0
	| AvatarItemDisplayNShoesMewtwo0
	| AvatarItemDisplayNShoesMisty0
	| AvatarItemDisplayNShoesMustard0
	| AvatarItemDisplayNShoesNecrozmaitems0
	| AvatarItemDisplayNShoesNewyear20220
	| AvatarItemDisplayNShoesNike20210
	| AvatarItemDisplayNShoesOrasA0
	| AvatarItemDisplayNShoesOrasB0
	| AvatarItemDisplayNShoesPajamas20220
	| AvatarItemDisplayNShoesPajamas20221
	| AvatarItemDisplayNShoesPalmer0
	| AvatarItemDisplayNShoesPikachuathletic
	| AvatarItemDisplayNShoesPikachufan0
	| AvatarItemDisplayNShoesPikachulibre0
	| AvatarItemDisplayNShoesPokeballitemsBasic0
	| AvatarItemDisplayNShoesPokeballitemsGreat0
	| AvatarItemDisplayNShoesPokeballitemsUltra0
	| AvatarItemDisplayNShoesProfwillowoutfit0
	| AvatarItemDisplayNShoesRegiicejersies0
	| AvatarItemDisplayNShoesRegirockjersies0
	| AvatarItemDisplayNShoesRegisteeljersies0
	| AvatarItemDisplayNShoesReuniclusitems0
	| AvatarItemDisplayNShoesRuinmaniacA0
	| AvatarItemDisplayNShoesRuinmaniacB0
	| AvatarItemDisplayNShoesS19gbl0
	| AvatarItemDisplayNShoesSandals0
	| AvatarItemDisplayNShoesSandals1
	| AvatarItemDisplayNShoesSandals2
	| AvatarItemDisplayNShoesSizzlipedeboots0
	| AvatarItemDisplayNShoesSolgaleoitems0
	| AvatarItemDisplayNShoesSsA0
	| AvatarItemDisplayNShoesSsB0
	| AvatarItemDisplayNShoesSteven0
	| AvatarItemDisplayNShoesStevenfirst0
	| AvatarItemDisplayNShoesSvcostumescarletschool0
	| AvatarItemDisplayNShoesSvcostumevioletschool0
	| AvatarItemDisplayNShoesSvdlc10
	| AvatarItemDisplayNShoesSvdlc2spring0
	| AvatarItemDisplayNShoesSwshdlc2costume0
	| AvatarItemDisplayNShoesSwshdlccostume0
	| AvatarItemDisplayNShoesSwshuniformdark0
	| AvatarItemDisplayNShoesSwshuniformdefault0
	| AvatarItemDisplayNShoesSwshuniformdragon0
	| AvatarItemDisplayNShoesSylveonitems0
	| AvatarItemDisplayNShoesTandemausitems0
	| AvatarItemDisplayNShoesTeamaqua0
	| AvatarItemDisplayNShoesTeamblancheA0
	| AvatarItemDisplayNShoesTeamblancheB0
	| AvatarItemDisplayNShoesTeamcandelaA0
	| AvatarItemDisplayNShoesTeamcandelaB0
	| AvatarItemDisplayNShoesTeammagmaA0
	| AvatarItemDisplayNShoesTeammagmaB0
	| AvatarItemDisplayNShoesTeamrocketA0
	| AvatarItemDisplayNShoesTeamrocketA1
	| AvatarItemDisplayNShoesTeamrocketB0
	| AvatarItemDisplayNShoesTeamrocketB1
	| AvatarItemDisplayNShoesTeamskull0
	| AvatarItemDisplayNShoesTeamskullB0
	| AvatarItemDisplayNShoesTeamsparkA0
	| AvatarItemDisplayNShoesTeamsparkB0
	| AvatarItemDisplayNShoesTeamyellgrunts0
	| AvatarItemDisplayNShoesUltraA0
	| AvatarItemDisplayNShoesUltraB0
	| AvatarItemDisplayNShoesUltrareconsquad0
	| AvatarItemDisplayNShoesUnequip0
	| AvatarItemDisplayNShoesVeterantrainerxyA0
	| AvatarItemDisplayNShoesVeterantrainerxyB0
	| AvatarItemDisplayNShoesWcs2022winnersitems0
	| AvatarItemDisplayNShoesWcs2023winnersitems0
	| AvatarItemDisplayNShoesWcs2024winnersitems0
	| AvatarItemDisplayNShoesWinterboots20230
	| AvatarItemDisplayNShoesWinterboots0
	| AvatarItemDisplayNShoesWinterboots1
	| AvatarItemDisplayNShoesWinterboots2
	| AvatarItemDisplayNShoesWinterboots3
	| AvatarItemDisplayNShoesZacostumeA0
	| AvatarItemDisplayNShoesZacostumeB0
	| AvatarItemDisplayNSocksDefaultA0
	| AvatarItemDisplayNSocksDefaultA1
	| AvatarItemDisplayNSocksDefaultA2
	| AvatarItemDisplayNSocksDefaultB0
	| AvatarItemDisplayNSocksDefaultB1
	| AvatarItemDisplayNSocksDefaultB2
	| AvatarItemDisplayNSocksDefaultB3
	| AvatarItemDisplayNSocksFw2022A0
	| AvatarItemDisplayNSocksFw2022B0
	| AvatarItemDisplayNSocksHgss0
	| AvatarItemDisplayNSocksSneakersocks0
	| AvatarItemDisplayNSocksSneakersocks1
	| AvatarItemDisplayNSocksSollunaitems0
	| AvatarItemDisplayNSocksSwshuniformdefault0
	| AvatarItemDisplayNSocksSwshuniformdragon0
	| AvatarItemDisplayNSocksTeamaqua0
	| AvatarItemDisplayNSocksThighhighs0
	| AvatarItemDisplayNSocksUnequip0
	| AvatarItemDisplaySet6thanniversaryF
	| AvatarItemDisplaySet6thanniversaryM
	| AvatarItemDisplaySet7thanniversaryF
	| AvatarItemDisplaySet7thanniversaryM
	| AvatarItemDisplaySetAcetrainerbwF
	| AvatarItemDisplaySetAcetrainerbwM
	| AvatarItemDisplaySetAcetrainersmF
	| AvatarItemDisplaySetAcetrainersmM
	| AvatarItemDisplaySetAllister0
	| AvatarItemDisplaySetAnimegouF
	| AvatarItemDisplaySetAnimegouM
	| AvatarItemDisplaySetApplinitems
	| AvatarItemDisplaySetBackpackerF
	| AvatarItemDisplaySetBackpackerM
	| AvatarItemDisplaySetBattlegirl0F
	| AvatarItemDisplaySetBeaF
	| AvatarItemDisplaySetBeaM
	| AvatarItemDisplaySetBounsweetitemsF
	| AvatarItemDisplaySetBounsweetitemsM
	| AvatarItemDisplaySetBoxingoutfitF
	| AvatarItemDisplaySetBoxingoutfitM
	| AvatarItemDisplaySetBrockM
	| AvatarItemDisplaySetBwnF
	| AvatarItemDisplaySetBwnM
	| AvatarItemDisplaySetCasual0F
	| AvatarItemDisplaySetCasual0M
	| AvatarItemDisplaySetCasual1F
	| AvatarItemDisplaySetCasual1M
	| AvatarItemDisplaySetClayF
	| AvatarItemDisplaySetClayM
	| AvatarItemDisplaySetClemont
	| AvatarItemDisplaySetCofagrigusF
	| AvatarItemDisplaySetCofagrigusM
	| AvatarItemDisplaySetCosmogF
	| AvatarItemDisplaySetCosmogM
	| AvatarItemDisplaySetDayofthedeadF
	| AvatarItemDisplaySetDayofthedeadM
	| AvatarItemDisplaySetDedenneitemsF
	| AvatarItemDisplaySetDedenneitemsM
	| AvatarItemDisplaySetDelibirdF
	| AvatarItemDisplaySetDelibirdM
	| AvatarItemDisplaySetDetectivepikachuF
	| AvatarItemDisplaySetDetectivepikachuM
	| AvatarItemDisplaySetDivingsuitF
	| AvatarItemDisplaySetDivingsuitM
	| AvatarItemDisplaySetDpF
	| AvatarItemDisplaySetDpM
	| AvatarItemDisplaySetDusclopsmummyF
	| AvatarItemDisplaySetDusclopsmummyM
	| AvatarItemDisplaySetElesaF
	| AvatarItemDisplaySetElesaM
	| AvatarItemDisplaySetEternatussuit0
	| AvatarItemDisplaySetFashionweek2022F
	| AvatarItemDisplaySetFashionweek2022M
	| AvatarItemDisplaySetFashionweek20250
	| AvatarItemDisplaySetFisher0M
	| AvatarItemDisplaySetFlabebepackF
	| AvatarItemDisplaySetFlabebepackM
	| AvatarItemDisplaySetFragment0F
	| AvatarItemDisplaySetFragment0M
	| AvatarItemDisplaySetFrlg0F
	| AvatarItemDisplaySetFrlg0M
	| AvatarItemDisplaySetFw2022F
	| AvatarItemDisplaySetFw2022M
	| AvatarItemDisplaySetGalarfarfetchditemsF
	| AvatarItemDisplaySetGalarfarfetchditemsM
	| AvatarItemDisplaySetGeetaF
	| AvatarItemDisplaySetGeetaM
	| AvatarItemDisplaySetGenderlessskirtF
	| AvatarItemDisplaySetGenderlessskirtM
	| AvatarItemDisplaySetGenesecteventitemF
	| AvatarItemDisplaySetGenesecteventitemM
	| AvatarItemDisplaySetGengar0F
	| AvatarItemDisplaySetGengar0M
	| AvatarItemDisplaySetGimmighoulitemsF
	| AvatarItemDisplaySetGimmighoulitemsM
	| AvatarItemDisplaySetGiovanniF
	| AvatarItemDisplaySetGiovanniM
	| AvatarItemDisplaySetGiratinaitems
	| AvatarItemDisplaySetGladionF
	| AvatarItemDisplaySetGladionM
	| AvatarItemDisplaySetGoteamrocketarloF
	| AvatarItemDisplaySetGoteamrocketarloM
	| AvatarItemDisplaySetGreenF
	| AvatarItemDisplaySetGreenM
	| AvatarItemDisplaySetGreencoatF
	| AvatarItemDisplaySetGreencoatM
	| AvatarItemDisplaySetGrimsley0
	| AvatarItemDisplaySetGrusha
	| AvatarItemDisplaySetGuzmaF
	| AvatarItemDisplaySetGuzmaM
	| AvatarItemDisplaySetGymleader0F
	| AvatarItemDisplaySetGymleader0M
	| AvatarItemDisplaySetGymleader1F
	| AvatarItemDisplaySetGymleader1M
	| AvatarItemDisplaySetGymleader2F
	| AvatarItemDisplaySetGymleader2M
	| AvatarItemDisplaySetHala
	| AvatarItemDisplaySetHalloween20240
	| AvatarItemDisplaySetHgss0F
	| AvatarItemDisplaySetHgss0M
	| AvatarItemDisplaySetHoliday2022santacostumesF
	| AvatarItemDisplaySetHoliday2022santacostumesM
	| AvatarItemDisplaySetHoopaF
	| AvatarItemDisplaySetHoopaM
	| AvatarItemDisplaySetIngo
	| AvatarItemDisplaySetJogger0M
	| AvatarItemDisplaySetKorrinaF
	| AvatarItemDisplaySetKorrinaM
	| AvatarItemDisplaySetLadiamondoutfitF
	| AvatarItemDisplaySetLadiamondoutfitM
	| AvatarItemDisplaySetLana0
	| AvatarItemDisplaySetLapearloutfitF
	| AvatarItemDisplaySetLapearloutfitM
	| AvatarItemDisplaySetLasecuritycorpsF
	| AvatarItemDisplaySetLasecuritycorpsM
	| AvatarItemDisplaySetLegendofarceusF
	| AvatarItemDisplaySetLegendofarceusM
	| AvatarItemDisplaySetLooseFitting0
	| AvatarItemDisplaySetLooseFitting1
	| AvatarItemDisplaySetLunalaitemsF
	| AvatarItemDisplaySetLunalaitemsM
	| AvatarItemDisplaySetLuvdiscpackF
	| AvatarItemDisplaySetLuvdiscpackM
	| AvatarItemDisplaySetLvl500F
	| AvatarItemDisplaySetLvl500M
	| AvatarItemDisplaySetLvl501F
	| AvatarItemDisplaySetLvl501M
	| AvatarItemDisplaySetLysandreF
	| AvatarItemDisplaySetLysandreM
	| AvatarItemDisplaySetMegalopunnyitemsF
	| AvatarItemDisplaySetMegalopunnyitemsM
	| AvatarItemDisplaySetMegarayquazaF
	| AvatarItemDisplaySetMegarayquazaM
	| AvatarItemDisplaySetMelmetalJacketF
	| AvatarItemDisplaySetMelmetalJacketM
	| AvatarItemDisplaySetMelmetalVestF
	| AvatarItemDisplaySetMelmetalVestM
	| AvatarItemDisplaySetMeltanF
	| AvatarItemDisplaySetMeltanM
	| AvatarItemDisplaySetMewtwoF
	| AvatarItemDisplaySetMewtwoM
	| AvatarItemDisplaySetMimikyuF
	| AvatarItemDisplaySetMimikyuM
	| AvatarItemDisplaySetMistyF
	| AvatarItemDisplaySetMovie2020F
	| AvatarItemDisplaySetMovie2020M
	| AvatarItemDisplaySetMunnapack0F
	| AvatarItemDisplaySetMunnapack0M
	| AvatarItemDisplaySetMunnapack1F
	| AvatarItemDisplaySetMunnapack1M
	| AvatarItemDisplaySetMustard0
	| AvatarItemDisplaySetNDefaultNew
	| AvatarItemDisplaySetNDenimfashionweek2023
	| AvatarItemDisplaySetNGothitelleitems
	| AvatarItemDisplaySetNReuniclusitems
	| AvatarItemDisplaySetNaganadelaitems
	| AvatarItemDisplaySetNecrozmaitems0
	| AvatarItemDisplaySetNewyearF
	| AvatarItemDisplaySetNewyearM
	| AvatarItemDisplaySetObstagoonitemsF
	| AvatarItemDisplaySetObstagoonitemsM
	| AvatarItemDisplaySetOrasF
	| AvatarItemDisplaySetOrasM
	| AvatarItemDisplaySetPajamas20220F
	| AvatarItemDisplaySetPajamas20220M
	| AvatarItemDisplaySetPajamas20221F
	| AvatarItemDisplaySetPajamas20221M
	| AvatarItemDisplaySetPalmerF
	| AvatarItemDisplaySetPalmerM
	| AvatarItemDisplaySetPikachufan0F
	| AvatarItemDisplaySetPikachufan0M
	| AvatarItemDisplaySetPikachulibreF
	| AvatarItemDisplaySetPikachulibreM
	| AvatarItemDisplaySetPkmnhoodie001F
	| AvatarItemDisplaySetPkmnhoodie001M
	| AvatarItemDisplaySetPkmnhoodie004F
	| AvatarItemDisplaySetPkmnhoodie004M
	| AvatarItemDisplaySetPkmnhoodie007F
	| AvatarItemDisplaySetPkmnhoodie007M
	| AvatarItemDisplaySetProfwillowoutfitF
	| AvatarItemDisplaySetProfwillowoutfitM
	| AvatarItemDisplaySetPumpkabooitemsF
	| AvatarItemDisplaySetPumpkabooitemsM
	| AvatarItemDisplaySetRegiicejersiesF
	| AvatarItemDisplaySetRegiicejersiesM
	| AvatarItemDisplaySetRegirockjersiesF
	| AvatarItemDisplaySetRegirockjersiesM
	| AvatarItemDisplaySetRegisteeljersiesF
	| AvatarItemDisplaySetRegisteeljersiesM
	| AvatarItemDisplaySetRuinmaniacF
	| AvatarItemDisplaySetRuinmaniacM
	| AvatarItemDisplaySetS19gbl0
	| AvatarItemDisplaySetS22gbl0
	| AvatarItemDisplaySetShayminLandF
	| AvatarItemDisplaySetShayminLandM
	| AvatarItemDisplaySetShayminSkyF
	| AvatarItemDisplaySetShayminSkyM
	| AvatarItemDisplaySetSlowpoketailshirtsF
	| AvatarItemDisplaySetSlowpoketailshirtsM
	| AvatarItemDisplaySetSolgaleoitemsF
	| AvatarItemDisplaySetSolgaleoitemsM
	| AvatarItemDisplaySetSsF
	| AvatarItemDisplaySetSsM
	| AvatarItemDisplaySetStevenF
	| AvatarItemDisplaySetStevenM
	| AvatarItemDisplaySetStevenfirstF
	| AvatarItemDisplaySetStevenfirstM
	| AvatarItemDisplaySetSvcostumescarletschoolF
	| AvatarItemDisplaySetSvcostumescarletschoolM
	| AvatarItemDisplaySetSvcostumevioletschoolF
	| AvatarItemDisplaySetSvcostumevioletschoolM
	| AvatarItemDisplaySetSvdlc2fall0
	| AvatarItemDisplaySetSvdlc2spring0
	| AvatarItemDisplaySetSvdlcF
	| AvatarItemDisplaySetSvdlcM
	| AvatarItemDisplaySetSwshdlc2costumeF
	| AvatarItemDisplaySetSwshdlc2costumeM
	| AvatarItemDisplaySetSwshdlccostumeF
	| AvatarItemDisplaySetSwshdlccostumeM
	| AvatarItemDisplaySetSwshuniformchampionF
	| AvatarItemDisplaySetSwshuniformchampionM
	| AvatarItemDisplaySetSwshuniformdarkF
	| AvatarItemDisplaySetSwshuniformdarkM
	| AvatarItemDisplaySetSwshuniformdefaultF
	| AvatarItemDisplaySetSwshuniformdefaultM
	| AvatarItemDisplaySetSwshuniformdragonF
	| AvatarItemDisplaySetSwshuniformdragonM
	| AvatarItemDisplaySetSylveonitemsF
	| AvatarItemDisplaySetSylveonitemsM
	| AvatarItemDisplaySetTandemausitems0
	| AvatarItemDisplaySetTcgcollabtshirtandcapF
	| AvatarItemDisplaySetTcgcollabtshirtandcapM
	| AvatarItemDisplaySetTeamaquaF
	| AvatarItemDisplaySetTeamaquaM
	| AvatarItemDisplaySetTeamblancheF
	| AvatarItemDisplaySetTeamblancheM
	| AvatarItemDisplaySetTeamcandelaF
	| AvatarItemDisplaySetTeamcandelaM
	| AvatarItemDisplaySetTeammagmaF
	| AvatarItemDisplaySetTeammagmaM
	| AvatarItemDisplaySetTeamrocket0F
	| AvatarItemDisplaySetTeamrocket0M
	| AvatarItemDisplaySetTeamrocket1F
	| AvatarItemDisplaySetTeamrocket1M
	| AvatarItemDisplaySetTeamskullF
	| AvatarItemDisplaySetTeamskullM
	| AvatarItemDisplaySetTeamsparkF
	| AvatarItemDisplaySetTeamsparkM
	| AvatarItemDisplaySetTeamyellgruntsA0
	| AvatarItemDisplaySetTeamyellgruntsB0
	| AvatarItemDisplaySetUltra0F
	| AvatarItemDisplaySetUltra0M
	| AvatarItemDisplaySetUltrareconsquadF
	| AvatarItemDisplaySetUltrareconsquadM
	| AvatarItemDisplaySetUltrareconsquadbF
	| AvatarItemDisplaySetVeterantrainerxyF
	| AvatarItemDisplaySetVeterantrainerxyM
	| AvatarItemDisplaySetWcs2022winnersitemsF
	| AvatarItemDisplaySetWcs2022winnersitemsM
	| AvatarItemDisplaySetWcs2024paiditems0
	| AvatarItemDisplaySetWcs2024winnersitems0
	| AvatarItemDisplaySetWcs2025winnersitems0
	| AvatarItemDisplaySetWinter2023
	| AvatarItemDisplaySetZacostumeA
	| AvatarItemDisplaySetZacostumeB;

export type AvatarItemDisplayTemplateID = AvatarItemDisplayMasterfileEntry["templateId"];
