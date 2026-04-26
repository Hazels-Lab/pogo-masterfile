export interface AvatarCustomization<TemplateID extends string = string, TData extends AvatarCustomizationData = AvatarCustomizationData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		avatarCustomization: TData;
	};
}

export interface AvatarCustomizationData {
	assetName?: string;
	avatarType?: string;
	bundleName?: string;
	enabled?: boolean;
	groupName?: string;
	iapSku?: string;
	iconName?: string;
	setNames?: Array<string>;
	setPrimeItem?: boolean;
	slot?: [string];
	sortOrder?: number;
	unlockBadgeLevel?: number;
	unlockBadgeType?: string;
	unlockPlayerLevel?: number;
	unlockType?: string;
}

export type AvatarCustomizationFBackpackAlolaitemslittenbp = AvatarCustomization<
	"AVATAR_f_backpack_alolaitemslittenbp",
	{
		assetName: "f_backpack_alolaitemslittenbp_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_alolaitemslittenbp_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.f_backpack_alolaitemslittenbp_0";
		iconName: "f_backpack_alolaitemslittenbp_00_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 101175;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBackpackAlolaitemspoppliobp = AvatarCustomization<
	"AVATAR_f_backpack_alolaitemspoppliobp",
	{
		assetName: "f_backpack_alolaitemspoppliobp_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_alolaitemspoppliobp_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.f_backpack_alolaitemspoppliobp_0";
		iconName: "f_backpack_alolaitemspoppliobp_00_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 101171;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBackpackAlolaitemsrowletbp = AvatarCustomization<
	"AVATAR_f_backpack_alolaitemsrowletbp",
	{
		assetName: "f_backpack_alolaitemsrowletbp_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_alolaitemsrowletbp_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.f_backpack_alolaitemsrowletbp_0";
		iconName: "f_backpack_alolaitemsrowletbp_00_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 101173;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBackpackAnimegou = AvatarCustomization<
	"AVATAR_f_backpack_animegou",
	{
		assetName: "f_backpack_animegou_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_animegou_bundle";
		enabled: true;
		groupName: "group_backpack";
		iconName: "f_backpack_animegou_00_bundle_icon";
		setNames: ["animegou"];
		slot: ["BACKPACK"];
		sortOrder: 100816;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFBackpackBackpacker = AvatarCustomization<
	"AVATAR_f_backpack_backpacker",
	{
		assetName: "f_backpack_backpacker_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_backpacker_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.f_backpack_backpacker_0";
		iconName: "f_backpack_backpacker_0_bundle_icon";
		setNames: ["backpacker"];
		slot: ["BACKPACK"];
		sortOrder: 100713;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBackpackCombeebackpack = AvatarCustomization<
	"AVATAR_f_backpack_combeebackpack",
	{
		assetName: "f_backpack_combeebackpack_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_combeebackpack_bundle";
		enabled: true;
		groupName: "group_seasonal";
		iapSku: "pgorelease.avatar.f_backpack_combeebackpack_0";
		iconName: "f_backpack_combeebackpack_00_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 101590;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBackpackCombeebackpack01 = AvatarCustomization<
	"AVATAR_f_backpack_combeebackpack_01",
	{
		assetName: "f_backpack_combeebackpack_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_combeebackpack_bundle";
		enabled: true;
		groupName: "group_seasonal";
		iapSku: "pgorelease.avatar.f_backpack_combeebackpack_1";
		iconName: "f_backpack_combeebackpack_01_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 101592;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBackpackCute0 = AvatarCustomization<
	"AVATAR_f_backpack_cute_0",
	{
		assetName: "f_backpack_cute_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_cute_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.f_backpack_cute_0";
		iconName: "f_backpack_cute_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 100708;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBackpackDedenneitems = AvatarCustomization<
	"AVATAR_f_backpack_dedenneitems",
	{
		assetName: "f_backpack_dedenneitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_dedenneitems_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.f_backpack_dedenneitems_0";
		iconName: "f_backpack_dedenneitems_00_bundle_icon";
		setNames: ["dedenneitems"];
		slot: ["BACKPACK"];
		sortOrder: 101055;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBackpackDefault0 = AvatarCustomization<
	"AVATAR_f_backpack_default_0",
	{
		assetName: "f_backpack_default_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_default_bundle";
		enabled: true;
		groupName: "group_backpack";
		iconName: "f_backpack_default_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 100704;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFBackpackDefault1 = AvatarCustomization<
	"AVATAR_f_backpack_default_1",
	{
		assetName: "f_backpack_default_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_default_bundle";
		enabled: true;
		groupName: "group_backpack";
		iconName: "f_backpack_default_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 100703;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFBackpackDefault2 = AvatarCustomization<
	"AVATAR_f_backpack_default_2",
	{
		assetName: "f_backpack_default_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_default_bundle";
		enabled: true;
		groupName: "group_backpack";
		iconName: "f_backpack_default_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 100702;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFBackpackDefault3 = AvatarCustomization<
	"AVATAR_f_backpack_default_3",
	{
		assetName: "f_backpack_default_3";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_default_bundle";
		enabled: true;
		groupName: "group_backpack";
		iconName: "f_backpack_default_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 100701;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFBackpackEggIncubator = AvatarCustomization<
	"AVATAR_f_backpack_egg-incubator",
	{
		assetName: "f_backpack_egg-incubator_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_egg-incubator_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.f_backpack_egg-incubator_0";
		iconName: "f_backpack_egg-incubator_00_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 101635;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBackpackEggbackpack0 = AvatarCustomization<
	"AVATAR_f_backpack_eggbackpack_0",
	{
		assetName: "f_backpack_eggbackpack_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_eggbackpack_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.f_backpack_eggbackpack_0";
		iconName: "f_backpack_eggbackpack_0_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 100711;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBackpackEggbackpack1 = AvatarCustomization<
	"AVATAR_f_backpack_eggbackpack_1",
	{
		assetName: "f_backpack_eggbackpack_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_eggbackpack_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.f_backpack_eggbackpack_1";
		iconName: "f_backpack_eggbackpack_1_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 100710;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBackpackEggbackpack2 = AvatarCustomization<
	"AVATAR_f_backpack_eggbackpack_2",
	{
		assetName: "f_backpack_eggbackpack_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_eggbackpack_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.f_backpack_eggbackpack_2";
		iconName: "f_backpack_eggbackpack_2_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 100709;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBackpackEmpty = AvatarCustomization<
	"AVATAR_f_backpack_empty",
	{
		assetName: "f_backpack_empty";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_empty_bundle";
		enabled: true;
		groupName: "group_backpack";
		iconName: "f_backpack_empty_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 100699;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFBackpackFrlg0 = AvatarCustomization<
	"AVATAR_f_backpack_frlg_0",
	{
		assetName: "f_backpack_frlg_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_frlg_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.f_backpack_frlg_0";
		iconName: "f_backpack_frlg_bundle_icon";
		setNames: ["frlg_0"];
		slot: ["BACKPACK"];
		sortOrder: 100707;
		unlockBadgeLevel: 5;
		unlockBadgeType: "BADGE_POKEDEX_ENTRIES";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBackpackGenesecteventitem = AvatarCustomization<
	"AVATAR_f_backpack_genesecteventitem",
	{
		assetName: "f_backpack_genesecteventitem_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_genesecteventitem_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.f_backpack_genesecteventitem_0";
		iconName: "f_backpack_genesecteventitem_0_bundle_icon";
		setNames: ["genesecteventitem"];
		slot: ["BACKPACK"];
		sortOrder: 100721;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBackpackGengar0 = AvatarCustomization<
	"AVATAR_f_backpack_gengar_0",
	{
		assetName: "f_backpack_gengar_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_gengar_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.f_backpack_gengar_0";
		iconName: "f_backpack_gengar_0_bundle_icon";
		setNames: ["gengar_0"];
		slot: ["BACKPACK"];
		sortOrder: 100706;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBackpackGiratinaitems = AvatarCustomization<
	"AVATAR_f_backpack_giratinaitems",
	{
		assetName: "f_backpack_giratinaitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_giratinaitems_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.f_backpack_giratinaitems_0";
		iconName: "f_backpack_giratinaitems_00_bundle_icon";
		setNames: ["giratinaitems"];
		slot: ["BACKPACK"];
		sortOrder: 101564;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBackpackGuccibackpack = AvatarCustomization<
	"AVATAR_f_backpack_guccibackpack",
	{
		assetName: "f_backpack_guccibackpack_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_guccibackpack_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iconName: "f_backpack_guccibackpack_00_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 100854;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFBackpackGuitarcasebackpack = AvatarCustomization<
	"AVATAR_f_backpack_guitarcasebackpack",
	{
		assetName: "f_backpack_guitarcasebackpack_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_guitarcasebackpack_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.f_backpack_guitarcasebackpack_0";
		iconName: "f_backpack_guitarcasebackpack_00_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 100964;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBackpackHgss0 = AvatarCustomization<
	"AVATAR_f_backpack_hgss_0",
	{
		assetName: "f_backpack_hgss_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_hgss_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.f_backpack_hgss_0";
		iconName: "f_backpack_hgss_bundle_icon";
		setNames: ["hgss_0"];
		slot: ["BACKPACK"];
		sortOrder: 100705;
		unlockBadgeLevel: 5;
		unlockBadgeType: "BADGE_POKEDEX_ENTRIES_GEN2";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBackpackHououbackpack = AvatarCustomization<
	"AVATAR_f_backpack_hououbackpack",
	{
		assetName: "f_backpack_hououbackpack_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_hououbackpack_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.f_backpack_hououbackpack_0";
		iconName: "f_backpack_hououbackpack_00_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 101139;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBackpackKakureonpouch = AvatarCustomization<
	"AVATAR_f_backpack_kakureonpouch",
	{
		assetName: "f_backpack_kakureonpouch_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_kakureonpouch_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.f_backpack_kakureonpouch_0";
		iconName: "f_backpack_kakureonpouch_00_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 101353;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBackpackKomala = AvatarCustomization<
	"AVATAR_f_backpack_komala",
	{
		assetName: "f_backpack_komala_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_komala_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.f_backpack_komala_0";
		iconName: "f_backpack_komala_00_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 101620;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBackpackLongchampbp = AvatarCustomization<
	"AVATAR_f_backpack_longchampbp",
	{
		assetName: "f_backpack_longchampbp_00";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_longchampbp_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iconName: "f_backpack_longchampbp_00_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 100765;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFBackpackLunalaitems = AvatarCustomization<
	"AVATAR_f_backpack_lunalaitems",
	{
		assetName: "f_backpack_lunalaitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_lunalaitems_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.f_backpack_lunalaitems_0";
		iconName: "f_backpack_lunalaitems_00_bundle_icon";
		setNames: ["lunalaitems"];
		slot: ["BACKPACK"];
		sortOrder: 101302;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBackpackLunarnewyr = AvatarCustomization<
	"AVATAR_f_backpack_lunarNewYr",
	{
		assetName: "f_backpack_lunarNewYr_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_lunarnewyr_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.f_backpack_lunarNewYr_0";
		iconName: "f_backpack_lunarnewyr_00_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 101342;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBackpackMimikyubp = AvatarCustomization<
	"AVATAR_f_backpack_mimikyubp",
	{
		assetName: "f_backpack_mimikyubp_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_mimikyubp_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.f_backpack_mimikyubp_0";
		iconName: "f_backpack_mimikyubp_0_bundle_icon";
		setNames: ["mimikyu"];
		slot: ["BACKPACK"];
		sortOrder: 100718;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBackpackMovie2020 = AvatarCustomization<
	"AVATAR_f_backpack_movie2020",
	{
		assetName: "f_backpack_movie2020_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_movie2020_bundle";
		enabled: true;
		groupName: "group_backpack";
		iconName: "f_backpack_movie2020_00_bundle_icon";
		setNames: ["movie2020"];
		slot: ["BACKPACK"];
		sortOrder: 101030;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFBackpackNaganadelawings = AvatarCustomization<
	"AVATAR_f_backpack_naganadelawings",
	{
		assetName: "f_backpack_naganadelawings_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_naganadelawings_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.f_backpack_naganadelawings_0";
		iconName: "f_backpack_naganadelawings_00_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 101612;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBackpackNike2021 = AvatarCustomization<
	"AVATAR_f_backpack_nike2021",
	{
		assetName: "f_backpack_nike2021_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_nike2021_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iapSku: "pgorelease.avatar.f_backpack_nike2021_0";
		iconName: "f_backpack_nike2021_00_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 101031;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBackpackPamobackpack = AvatarCustomization<
	"AVATAR_f_backpack_pamobackpack",
	{
		assetName: "f_backpack_pamobackpack_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_pamobackpack_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.f_backpack_pamobackpack_0";
		iconName: "f_backpack_pamobackpack_00_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 101462;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBackpackPkmnhoodie001 = AvatarCustomization<
	"AVATAR_f_backpack_pkmnhoodie001",
	{
		assetName: "f_backpack_pkmnhoodie001";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_pkmnhoodie001_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.f_backpack_pkmnhoodie001";
		iconName: "f_backpack_pkmnhoodie001_0_bundle_icon";
		setNames: ["pkmnhoodie001"];
		slot: ["BACKPACK"];
		sortOrder: 100716;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBackpackPkmnhoodie004 = AvatarCustomization<
	"AVATAR_f_backpack_pkmnhoodie004",
	{
		assetName: "f_backpack_pkmnhoodie004";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_pkmnhoodie004_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.f_backpack_pkmnhoodie004";
		iconName: "f_backpack_pkmnhoodie004_0_bundle_icon";
		setNames: ["pkmnhoodie004"];
		slot: ["BACKPACK"];
		sortOrder: 100715;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBackpackPkmnhoodie007 = AvatarCustomization<
	"AVATAR_f_backpack_pkmnhoodie007",
	{
		assetName: "f_backpack_pkmnhoodie007";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_pkmnhoodie007_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.f_backpack_pkmnhoodie007";
		iconName: "f_backpack_pkmnhoodie007_0_bundle_icon";
		setNames: ["pkmnhoodie007"];
		slot: ["BACKPACK"];
		sortOrder: 100714;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBackpackRuinmaniac = AvatarCustomization<
	"AVATAR_f_backpack_ruinmaniac",
	{
		assetName: "f_backpack_ruinmaniac_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_ruinmaniac_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.f_backpack_ruinmaniac_0";
		iconName: "f_backpack_ruinmaniac_0_bundle_icon";
		setNames: ["ruinmaniac"];
		slot: ["BACKPACK"];
		sortOrder: 100712;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBackpackSnapcamera = AvatarCustomization<
	"AVATAR_f_backpack_snapcamera",
	{
		assetName: "f_backpack_snapcamera_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_snapcamera_bundle";
		enabled: true;
		groupName: "group_backpack";
		iconName: "f_backpack_snapcamera_00_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 100911;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFBackpackSs = AvatarCustomization<
	"AVATAR_f_backpack_ss",
	{
		assetName: "f_backpack_ss_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_ss_bundle";
		enabled: true;
		groupName: "group_backpack";
		iconName: "f_backpack_ss_0_bundle_icon";
		setNames: ["ss"];
		slot: ["BACKPACK"];
		sortOrder: 100719;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFBackpackSvcostumescarletschool = AvatarCustomization<
	"AVATAR_f_backpack_svcostumescarletschool",
	{
		assetName: "f_backpack_svcostumescarletschool_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_svcostumescarletschool_bundle";
		enabled: true;
		groupName: "group_backpack";
		iconName: "f_backpack_svcostumescarletschool_00_bundle_icon";
		setNames: ["svcostumescarletschool"];
		slot: ["BACKPACK"];
		sortOrder: 101291;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFBackpackSvcostumevioletschool = AvatarCustomization<
	"AVATAR_f_backpack_svcostumevioletschool",
	{
		assetName: "f_backpack_svcostumevioletschool_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_svcostumevioletschool_bundle";
		enabled: true;
		groupName: "group_backpack";
		iconName: "f_backpack_svcostumevioletschool_00_bundle_icon";
		setNames: ["svcostumevioletschool"];
		slot: ["BACKPACK"];
		sortOrder: 101299;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFBackpackSvdlc1 = AvatarCustomization<
	"AVATAR_f_backpack_svdlc1",
	{
		assetName: "f_backpack_svdlc1_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_svdlc1_bundle";
		enabled: true;
		groupName: "group_backpack";
		iconName: "f_backpack_svdlc1_00_bundle_icon";
		setNames: ["svdlc"];
		slot: ["BACKPACK"];
		sortOrder: 101457;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFBackpackSvdlc2spring = AvatarCustomization<
	"AVATAR_f_backpack_svdlc2spring",
	{
		assetName: "f_backpack_svdlc2spring_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_svdlc2spring_bundle";
		enabled: true;
		groupName: "group_backpack";
		iconName: "f_backpack_svdlc2spring_00_bundle_icon";
		setNames: ["svdlc2spring", "svdlc2fall"];
		slot: ["BACKPACK"];
		sortOrder: 101521;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFBackpackSwshdlc2costume = AvatarCustomization<
	"AVATAR_f_backpack_swshdlc2costume",
	{
		assetName: "f_backpack_swshdlc2costume_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_swshdlc2costume_bundle";
		enabled: true;
		groupName: "group_backpack";
		iconName: "f_backpack_swshdlc2costume_00_bundle_icon";
		setNames: ["swshdlc2costume"];
		slot: ["BACKPACK"];
		sortOrder: 100795;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFBackpackSwshdlccostume = AvatarCustomization<
	"AVATAR_f_backpack_swshdlccostume",
	{
		assetName: "f_backpack_swshdlccostume_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_swshdlccostume_bundle";
		enabled: true;
		groupName: "group_backpack";
		iconName: "f_backpack_swshdlccostume_00_bundle_icon";
		setNames: ["swshdlccostume"];
		slot: ["BACKPACK"];
		sortOrder: 100722;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFBackpackTogepibackpack = AvatarCustomization<
	"AVATAR_f_backpack_togepibackpack",
	{
		assetName: "f_backpack_togepibackpack_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_togepibackpack_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.f_backpack_togepibackpack_0";
		iconName: "f_backpack_togepibackpack_0_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 100720;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBackpackUltra0 = AvatarCustomization<
	"AVATAR_f_backpack_ultra_0",
	{
		assetName: "f_backpack_ultra";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_ultra_bundle";
		enabled: true;
		groupName: "group_backpack";
		iconName: "f_backpack_ultra_bundle_icon";
		setNames: ["ultra_0"];
		slot: ["BACKPACK"];
		sortOrder: 100700;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFBackpackVerizon2021 = AvatarCustomization<
	"AVATAR_f_backpack_verizon2021",
	{
		assetName: "f_backpack_verizon2021_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_verizon2021_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iconName: "f_backpack_verizon2021_00_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 101086;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFBackpackZubatbp = AvatarCustomization<
	"AVATAR_f_backpack_zubatbp",
	{
		assetName: "f_backpack_zubatbp_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_backpack_zubatbp_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.f_backpack_zubatbp_0";
		iconName: "f_backpack_zubatbp_0_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 100717;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBeltAcetrainerbw = AvatarCustomization<
	"AVATAR_f_belt_acetrainerbw",
	{
		assetName: "f_belt_acetrainerbw_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_belt_acetrainerbw_bundle";
		enabled: true;
		groupName: "group_belt";
		iapSku: "pgorelease.avatar.f_belt_acetrainerbw_0";
		iconName: "f_belt_acetrainerbw_0_bundle_icon";
		setNames: ["acetrainerbw"];
		slot: ["BELT"];
		sortOrder: 100698;
		unlockBadgeLevel: 10;
		unlockBadgeType: "BADGE_BATTLE_TRAINING_WON";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBeltDefault0 = AvatarCustomization<
	"AVATAR_f_belt_default_0",
	{
		assetName: "f_belt_default_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_belt_default_bundle";
		enabled: true;
		groupName: "group_belt";
		iconName: "f_belt_default_bundle_icon";
		slot: ["BELT"];
		sortOrder: 100691;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFBeltDefault1 = AvatarCustomization<
	"AVATAR_f_belt_default_1",
	{
		assetName: "f_belt_default_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_belt_default_bundle";
		enabled: true;
		groupName: "group_belt";
		iconName: "f_belt_default_bundle_icon";
		slot: ["BELT"];
		sortOrder: 100690;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFBeltDefault2 = AvatarCustomization<
	"AVATAR_f_belt_default_2",
	{
		assetName: "f_belt_default_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_belt_default_bundle";
		enabled: true;
		groupName: "group_belt";
		iconName: "f_belt_default_bundle_icon";
		slot: ["BELT"];
		sortOrder: 100689;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFBeltDefault3 = AvatarCustomization<
	"AVATAR_f_belt_default_3",
	{
		assetName: "f_belt_default_3";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_belt_default_bundle";
		enabled: true;
		groupName: "group_belt";
		iconName: "f_belt_default_bundle_icon";
		slot: ["BELT"];
		sortOrder: 100688;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFBeltDefault4 = AvatarCustomization<
	"AVATAR_f_belt_default_4",
	{
		assetName: "f_belt_default_4";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_belt_default_bundle";
		enabled: true;
		groupName: "group_belt";
		iconName: "f_belt_default_bundle_icon";
		slot: ["BELT"];
		sortOrder: 100687;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFBeltDefault5 = AvatarCustomization<
	"AVATAR_f_belt_default_5",
	{
		assetName: "f_belt_default_5";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_belt_default_bundle";
		enabled: true;
		groupName: "group_belt";
		iconName: "f_belt_default_bundle_icon";
		slot: ["BELT"];
		sortOrder: 100686;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFBeltDefault6 = AvatarCustomization<
	"AVATAR_f_belt_default_6",
	{
		assetName: "f_belt_default_6";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_belt_default_bundle";
		enabled: true;
		groupName: "group_belt";
		iconName: "f_belt_default_bundle_icon";
		slot: ["BELT"];
		sortOrder: 100685;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFBeltDefault7 = AvatarCustomization<
	"AVATAR_f_belt_default_7",
	{
		assetName: "f_belt_default_7";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_belt_default_bundle";
		enabled: true;
		groupName: "group_belt";
		iconName: "f_belt_default_bundle_icon";
		slot: ["BELT"];
		sortOrder: 100684;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFBeltDefault8 = AvatarCustomization<
	"AVATAR_f_belt_default_8",
	{
		assetName: "f_belt_default_8";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_belt_default_bundle";
		enabled: true;
		groupName: "group_belt";
		iconName: "f_belt_default_bundle_icon";
		slot: ["BELT"];
		sortOrder: 100683;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFBeltEmpty = AvatarCustomization<
	"AVATAR_f_belt_empty",
	{
		assetName: "f_belt_empty";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_belt_empty_bundle";
		enabled: true;
		groupName: "group_belt";
		iconName: "f_belt_empty_bundle_icon";
		slot: ["BELT"];
		sortOrder: 100682;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFBeltSimple0 = AvatarCustomization<
	"AVATAR_f_belt_simple_0",
	{
		assetName: "f_belt_simple_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_belt_simple_bundle";
		enabled: true;
		groupName: "group_belt";
		iapSku: "pgorelease.avatar.f_belt_simple_0";
		iconName: "f_belt_simple_bundle_icon";
		slot: ["BELT"];
		sortOrder: 100697;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBeltSimple1 = AvatarCustomization<
	"AVATAR_f_belt_simple_1",
	{
		assetName: "f_belt_simple_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_belt_simple_bundle";
		enabled: true;
		groupName: "group_belt";
		iapSku: "pgorelease.avatar.f_belt_simple_1";
		iconName: "f_belt_simple_bundle_icon";
		slot: ["BELT"];
		sortOrder: 100696;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBeltSimple2 = AvatarCustomization<
	"AVATAR_f_belt_simple_2",
	{
		assetName: "f_belt_simple_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_belt_simple_bundle";
		enabled: true;
		groupName: "group_belt";
		iapSku: "pgorelease.avatar.f_belt_simple_2";
		iconName: "f_belt_simple_bundle_icon";
		slot: ["BELT"];
		sortOrder: 100695;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBeltSimple3 = AvatarCustomization<
	"AVATAR_f_belt_simple_3",
	{
		assetName: "f_belt_simple_3";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_belt_simple_bundle";
		enabled: true;
		groupName: "group_belt";
		iapSku: "pgorelease.avatar.f_belt_simple_3";
		iconName: "f_belt_simple_bundle_icon";
		slot: ["BELT"];
		sortOrder: 100694;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBeltTeamrocket0 = AvatarCustomization<
	"AVATAR_f_belt_teamrocket_0",
	{
		assetName: "f_belt_teamrocket_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_belt_teamrocket_bundle";
		enabled: true;
		groupName: "group_belt";
		iapSku: "pgorelease.avatar.f_belt_teamrocket_0";
		iconName: "f_belt_teamrocket_0_bundle_icon";
		setNames: ["teamrocket_0"];
		slot: ["BELT"];
		sortOrder: 100693;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFBeltTeamrocket1 = AvatarCustomization<
	"AVATAR_f_belt_teamrocket_1",
	{
		assetName: "f_belt_teamrocket_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_belt_teamrocket_bundle";
		enabled: true;
		groupName: "group_belt";
		iapSku: "pgorelease.avatar.f_belt_teamrocket_1";
		iconName: "f_belt_teamrocket_1_bundle_icon";
		setNames: ["teamrocket_1"];
		slot: ["BELT"];
		sortOrder: 100692;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFEyes0 = AvatarCustomization<
	"AVATAR_f_eyes_0",
	{
		assetName: "f_eyes_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_eyes_asset_bundle";
		enabled: true;
		groupName: "group_eyes";
		iconName: "f_group_eye";
		slot: ["EYES"];
		sortOrder: 100681;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFEyes1 = AvatarCustomization<
	"AVATAR_f_eyes_1",
	{
		assetName: "f_eyes_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_eyes_asset_bundle";
		enabled: true;
		groupName: "group_eyes";
		iconName: "f_group_eye";
		slot: ["EYES"];
		sortOrder: 100680;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFEyes2 = AvatarCustomization<
	"AVATAR_f_eyes_2",
	{
		assetName: "f_eyes_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_eyes_asset_bundle";
		enabled: true;
		groupName: "group_eyes";
		iconName: "f_group_eye";
		slot: ["EYES"];
		sortOrder: 100679;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFEyes3 = AvatarCustomization<
	"AVATAR_f_eyes_3",
	{
		assetName: "f_eyes_3";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_eyes_asset_bundle";
		enabled: true;
		groupName: "group_eyes";
		iconName: "f_group_eye";
		slot: ["EYES"];
		sortOrder: 100678;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFEyes4 = AvatarCustomization<
	"AVATAR_f_eyes_4",
	{
		assetName: "f_eyes_4";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_eyes_asset_bundle";
		enabled: true;
		groupName: "group_eyes";
		iconName: "f_group_eye";
		slot: ["EYES"];
		sortOrder: 100677;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFFace3dmask00 = AvatarCustomization<
	"AVATAR_f_face_3dmask_00",
	{
		assetName: "f_face_3dmask_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_face_3dmask_00_bundle";
		enabled: true;
		groupName: "group_face";
		iapSku: "pgorelease.avatar.f_face_3dmask_0";
		iconName: "f_face_3dmask_00_bundle_icon";
		slot: ["FACE"];
		sortOrder: 100889;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFFace3dmask01 = AvatarCustomization<
	"AVATAR_f_face_3dmask_01",
	{
		assetName: "f_face_3dmask_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_face_3dmask_01_bundle";
		enabled: true;
		groupName: "group_face";
		iapSku: "pgorelease.avatar.f_face_3dmask_1";
		iconName: "f_face_3dmask_01_bundle_icon";
		slot: ["FACE"];
		sortOrder: 100890;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFFace3dmask02 = AvatarCustomization<
	"AVATAR_f_face_3dmask_02",
	{
		assetName: "f_face_3dmask_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_face_3dmask_02_bundle";
		enabled: true;
		groupName: "group_face";
		iapSku: "pgorelease.avatar.f_face_3dmask_2";
		iconName: "f_face_3dmask_02_bundle_icon";
		slot: ["FACE"];
		sortOrder: 100891;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFFaceBanettemask = AvatarCustomization<
	"AVATAR_f_face_banettemask",
	{
		assetName: "f_face_banettemask_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_face_banettemask_bundle";
		enabled: true;
		groupName: "group_face";
		iapSku: "pgorelease.avatar.f_face_banettemask_0";
		iconName: "f_face_banettemask_00_bundle_icon";
		slot: ["FACE"];
		sortOrder: 100777;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFFaceDayofthedead = AvatarCustomization<
	"AVATAR_f_face_dayofthedead",
	{
		assetName: "f_face_dayofthedead_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_face_dayofthedead_bundle";
		enabled: true;
		groupName: "group_face";
		iapSku: "pgorelease.avatar.f_face_dayofthedead_0";
		iconName: "f_face_dayofthedead_00_bundle_icon";
		setNames: ["dayofthedead"];
		slot: ["FACE"];
		sortOrder: 101282;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFFaceDefaultmask = AvatarCustomization<
	"AVATAR_f_face_defaultmask",
	{
		assetName: "f_face_defaultmask_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_face_defaultmask_bundle";
		enabled: true;
		groupName: "group_face";
		iconName: "f_face_defaultmask_00_bundle_icon";
		slot: ["FACE"];
		sortOrder: 100803;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFFaceEmpty = AvatarCustomization<
	"AVATAR_f_face_empty",
	{
		assetName: "f_face_empty";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_face_empty_bundle";
		enabled: true;
		groupName: "group_face";
		iconName: "f_face_empty_bundle_icon";
		slot: ["FACE"];
		sortOrder: 100801;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFFaceFacestickerghostpika = AvatarCustomization<
	"AVATAR_f_face_facestickerghostpika",
	{
		assetName: "f_face_facestickerghostpika_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_face_facestickerghostpika_bundle";
		enabled: true;
		groupName: "group_face";
		iapSku: "pgorelease.avatar.f_face_facestickerghostpika_0";
		iconName: "f_face_facestickerghostpika_00_bundle_icon";
		slot: ["FACE"];
		sortOrder: 101046;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFFaceFacestickerpikachu = AvatarCustomization<
	"AVATAR_f_face_facestickerpikachu",
	{
		assetName: "f_face_facestickerpikachu_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_face_facestickerpikachu_bundle";
		enabled: true;
		groupName: "group_face";
		iapSku: "pgorelease.avatar.f_face_facestickerpikachu_0";
		iconName: "f_face_facestickerpikachu_00_bundle_icon";
		slot: ["FACE"];
		sortOrder: 100974;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFFaceFacestickerpokeball = AvatarCustomization<
	"AVATAR_f_face_facestickerpokeball",
	{
		assetName: "f_face_facestickerpokeball_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_face_facestickerpokeball_bundle";
		enabled: true;
		groupName: "group_face";
		iapSku: "pgorelease.avatar.f_face_facestickerpokeball_0";
		iconName: "f_face_facestickerpokeball_00_bundle_icon";
		slot: ["FACE"];
		sortOrder: 100973;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFFaceFestofcolors00 = AvatarCustomization<
	"AVATAR_f_face_festOfColors_00",
	{
		assetName: "f_face_festOfColors_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_face_festofcolors_00_bundle";
		enabled: true;
		groupName: "group_face";
		iconName: "f_face_festofcolors_00_bundle_icon";
		slot: ["FACE"];
		sortOrder: 101151;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFFaceFestofcolors01 = AvatarCustomization<
	"AVATAR_f_face_festOfColors_01",
	{
		assetName: "f_face_festOfColors_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_face_festofcolors_01_bundle";
		enabled: true;
		groupName: "group_face";
		iconName: "f_face_festofcolors_01_bundle_icon";
		slot: ["FACE"];
		sortOrder: 101152;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFFaceFestofcolors02 = AvatarCustomization<
	"AVATAR_f_face_festOfColors_02",
	{
		assetName: "f_face_festOfColors_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_face_festofcolors_02_bundle";
		enabled: true;
		groupName: "group_face";
		iconName: "f_face_festofcolors_02_bundle_icon";
		slot: ["FACE"];
		sortOrder: 101153;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFFaceGracidea = AvatarCustomization<
	"AVATAR_f_face_gracidea",
	{
		assetName: "f_face_gracidea_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_face_gracidea_bundle";
		enabled: true;
		groupName: "group_face";
		iapSku: "pgorelease.avatar.f_face_gracidea_0";
		iconName: "f_face_gracidea_00_bundle_icon";
		slot: ["FACE"];
		sortOrder: 101198;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFFaceHoliday2022santacostumes = AvatarCustomization<
	"AVATAR_f_face_holiday2022santacostumes",
	{
		assetName: "f_face_holiday2022santacostumes_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_face_holiday2022santacostumes_bundle";
		enabled: true;
		groupName: "group_face";
		iapSku: "pgorelease.avatar.f_face_holiday2022santacostumes_0";
		iconName: "f_face_holiday2022santacostumes_00_bundle_icon";
		setNames: ["holiday2022santacostumes"];
		slot: ["FACE"];
		sortOrder: 101339;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFFacePikachumask = AvatarCustomization<
	"AVATAR_f_face_pikachumask",
	{
		assetName: "f_face_pikachumask_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_face_pikachumask_bundle";
		enabled: true;
		groupName: "group_face";
		iapSku: "pgorelease.avatar.f_face_pikachumask_0";
		iconName: "f_face_pikachumask_00_bundle_icon";
		slot: ["FACE"];
		sortOrder: 100775;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFFaceSableyemask = AvatarCustomization<
	"AVATAR_f_face_sableyemask",
	{
		assetName: "f_face_sableyemask_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_face_sableyemask_bundle";
		enabled: true;
		groupName: "group_face";
		iapSku: "pgorelease.avatar.f_face_sableyemask_0";
		iconName: "f_face_sableyemask_00_bundle_icon";
		slot: ["FACE"];
		sortOrder: 100776;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFFaceTeamskull = AvatarCustomization<
	"AVATAR_f_face_teamskull",
	{
		assetName: "f_face_teamskull_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_face_teamskull_bundle";
		enabled: true;
		groupName: "group_face";
		iapSku: "pgorelease.avatar.f_face_teamskull_0";
		iconName: "f_face_teamskull_00_bundle_icon";
		setNames: ["teamskull"];
		slot: ["FACE"];
		sortOrder: 101162;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFFaceToxelmask = AvatarCustomization<
	"AVATAR_f_face_toxelmask",
	{
		assetName: "f_face_toxelmask_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_face_toxelmask_bundle";
		enabled: true;
		groupName: "group_face";
		iapSku: "pgorelease.avatar.f_face_toxelmask_0";
		iconName: "f_face_toxelmask_00_bundle_icon";
		slot: ["FACE"];
		sortOrder: 101633;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFFaceVerizon2020mask = AvatarCustomization<
	"AVATAR_f_face_verizon2020mask",
	{
		assetName: "f_face_verizon2020mask_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_face_verizon2020mask_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iapSku: "pgorelease.avatar.f_face_verizon2020mask_0";
		iconName: "f_face_verizon2020mask_0_bundle_icon";
		slot: ["FACE"];
		sortOrder: 100750;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlasses3d = AvatarCustomization<
	"AVATAR_f_glasses_3d",
	{
		assetName: "f_glasses_3d";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_glasses_3d_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.f_glasses_3d";
		iconName: "f_glasses_3d_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 100674;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlassesCutieflysleepmask = AvatarCustomization<
	"AVATAR_f_glasses_cutieflysleepmask",
	{
		assetName: "f_glasses_cutieflysleepmask_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_glasses_cutieflysleepmask_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.f_glasses_cutieflysleepmask_0";
		iconName: "f_glasses_cutieflysleepmask_00_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 101544;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlassesDivingsuit = AvatarCustomization<
	"AVATAR_f_glasses_divingsuit",
	{
		assetName: "f_glasses_divingsuit_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_glasses_divingsuit_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.f_glasses_divingsuit_0";
		iconName: "f_glasses_divingsuit_00_bundle_icon";
		setNames: ["divingsuit"];
		slot: ["GLASSES"];
		sortOrder: 101415;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlassesDrpikachu = AvatarCustomization<
	"AVATAR_f_glasses_drpikachu",
	{
		assetName: "f_glasses_drpikachu_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_glasses_drpikachu_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.f_glasses_drpikachu_0";
		iconName: "f_glasses_drpikachu_00_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 101489;
		unlockBadgeLevel: 1;
		unlockBadgeType: "BADGE_MAX_SIZE_FIRST_PLACE_WIN";
		unlockType: "MEDAL_REWARD";
	}
>;
export type AvatarCustomizationFGlassesEmpty = AvatarCustomization<
	"AVATAR_f_glasses_empty",
	{
		assetName: "f_glasses_empty";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_glasses_empty_bundle";
		enabled: true;
		groupName: "group_glasses";
		iconName: "f_glasses_empty_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 100661;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFGlassesFrillishglasses = AvatarCustomization<
	"AVATAR_f_glasses_frillishglasses",
	{
		assetName: "f_glasses_frillishglasses_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_glasses_frillishglasses_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.f_glasses_frillishglasses_0";
		iconName: "f_glasses_frillishglasses_00_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 101347;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlassesFw2022 = AvatarCustomization<
	"AVATAR_f_glasses_fw2022",
	{
		assetName: "f_glasses_fw2022_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_glasses_fw2022_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.f_glasses_fw2022_0";
		iconName: "f_glasses_fw2022_00_bundle_icon";
		setNames: ["fw2022"];
		slot: ["GLASSES"];
		sortOrder: 101265;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlassesGimmighoulitems = AvatarCustomization<
	"AVATAR_f_glasses_gimmighoulitems",
	{
		assetName: "f_glasses_gimmighoulitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_glasses_gimmighoulitems_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.f_glasses_gimmighoulitems_0";
		iconName: "f_glasses_gimmighoulitems_00_bundle_icon";
		setNames: ["gimmighoulitems"];
		slot: ["GLASSES"];
		sortOrder: 101363;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlassesGoteamrocketarlo = AvatarCustomization<
	"AVATAR_f_glasses_goteamrocketarlo",
	{
		assetName: "f_glasses_goteamrocketarlo";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_glasses_goteamrocketarlo_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.f_glasses_goteamrocketarlo";
		iconName: "f_glasses_goteamrocketarlo_00_bundle_icon";
		setNames: ["goteamrocketarlo"];
		slot: ["GLASSES"];
		sortOrder: 100768;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlassesGrandoakglasses = AvatarCustomization<
	"AVATAR_f_glasses_grandoakglasses",
	{
		assetName: "f_glasses_grandoakglasses";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_glasses_grandoakglasses_bundle";
		enabled: true;
		groupName: "group_glasses";
		iconName: "f_glasses_grandoakglasses_00_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 100676;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFGlassesLugiaglasses = AvatarCustomization<
	"AVATAR_f_glasses_lugiaglasses",
	{
		assetName: "f_glasses_lugiaglasses_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_glasses_lugiaglasses_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.f_glasses_lugiaglasses_0";
		iconName: "f_glasses_lugiaglasses_00_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 101137;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlassesLv40glasses = AvatarCustomization<
	"AVATAR_f_glasses_lv40glasses",
	{
		assetName: "f_glasses_lv40glasses_00";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_glasses_lv40glasses_bundle";
		enabled: true;
		groupName: "group_glasses";
		iconName: "f_glasses_lv40glasses_00_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 100764;
		unlockPlayerLevel: 41;
		unlockType: "LEVEL_REWARD";
	}
>;
export type AvatarCustomizationFGlassesMask0 = AvatarCustomization<
	"AVATAR_f_glasses_mask_0",
	{
		assetName: "f_glasses_mask_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_glasses_mask_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.f_glasses_mask_0";
		iconName: "f_glasses_mask_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 100673;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlassesMask1 = AvatarCustomization<
	"AVATAR_f_glasses_mask_1",
	{
		assetName: "f_glasses_mask_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_glasses_mask_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.f_glasses_mask_1";
		iconName: "f_glasses_mask_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 100672;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlassesNewyear2022 = AvatarCustomization<
	"AVATAR_f_glasses_newyear2022",
	{
		assetName: "f_glasses_newyearglasses2022_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_glasses_newyearglasses2022_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.f_glasses_newyearglasses2022_0";
		iconName: "f_glasses_newyearglasses2022_00_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 101105;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlassesNewyearglasses2020 = AvatarCustomization<
	"AVATAR_f_glasses_newyearglasses2020",
	{
		assetName: "f_glasses_newyearglasses2020_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_glasses_newyearglasses2020_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.f_glasses_newyearglasses2020_0";
		iconName: "f_glasses_newyearglasses2020_0_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 100675;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlassesNewyearglasses2021 = AvatarCustomization<
	"AVATAR_f_glasses_newyearglasses2021",
	{
		assetName: "f_glasses_newyearglasses2021_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_glasses_newyearglasses2021_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.f_glasses_newyearglasses2021_0";
		iconName: "f_glasses_newyearglasses2021_00_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 100860;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlassesObstagoonitems = AvatarCustomization<
	"AVATAR_f_glasses_obstagoonitems",
	{
		assetName: "f_glasses_obstagoonitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_glasses_obstagoonitems_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.f_glasses_obstagoonitems_0";
		iconName: "f_glasses_obstagoonitems_00_bundle_icon";
		setNames: ["obstagoonitems"];
		slot: ["GLASSES"];
		sortOrder: 101233;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlassesRoundsunglasses = AvatarCustomization<
	"AVATAR_f_glasses_roundsunglasses",
	{
		assetName: "f_glasses_roundsunglasses_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_glasses_roundsunglasses_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.f_glasses_roundsunglasses_0";
		iconName: "f_glasses_roundsunglasses_00_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 101020;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlassesTeardrop0 = AvatarCustomization<
	"AVATAR_f_glasses_teardrop_0",
	{
		assetName: "f_glasses_teardrop_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_glasses_teardrop_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.f_glasses_teardrop_0";
		iconName: "f_glasses_teardrop_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 100671;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlassesThick0 = AvatarCustomization<
	"AVATAR_f_glasses_thick_0",
	{
		assetName: "f_glasses_thick_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_glasses_thick_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.f_glasses_thick_0";
		iconName: "f_glasses_thick_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 100670;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlassesThick1 = AvatarCustomization<
	"AVATAR_f_glasses_thick_1",
	{
		assetName: "f_glasses_thick_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_glasses_thick_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.f_glasses_thick_1";
		iconName: "f_glasses_thick_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 100669;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlassesThick2 = AvatarCustomization<
	"AVATAR_f_glasses_thick_2",
	{
		assetName: "f_glasses_thick_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_glasses_thick_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.f_glasses_thick_2";
		iconName: "f_glasses_thick_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 100668;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlassesThick3 = AvatarCustomization<
	"AVATAR_f_glasses_thick_3",
	{
		assetName: "f_glasses_thick_3";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_glasses_thick_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.f_glasses_thick_3";
		iconName: "f_glasses_thick_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 100667;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlassesThick4 = AvatarCustomization<
	"AVATAR_f_glasses_thick_4",
	{
		assetName: "f_glasses_thick_4";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_glasses_thick_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.f_glasses_thick_4";
		iconName: "f_glasses_thick_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 100666;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlovesAcetrainersm = AvatarCustomization<
	"AVATAR_f_gloves_acetrainersm",
	{
		assetName: "f_gloves_acetrainersm_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_acetrainersm_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.f_gloves_acetrainersm_0";
		iconName: "f_gloves_acetrainersm_0_bundle_icon";
		setNames: ["acetrainersm"];
		slot: ["GLOVES"];
		sortOrder: 100663;
		unlockBadgeLevel: 50;
		unlockBadgeType: "BADGE_GREAT_LEAGUE";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlovesBattlegirl0 = AvatarCustomization<
	"AVATAR_f_gloves_battlegirl_0",
	{
		assetName: "f_gloves_battlegirl_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_battlegirl_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.f_gloves_battlegirl_0";
		iconName: "f_gloves_battlegirl_bundle_icon";
		setNames: ["battlegirl_0"];
		slot: ["GLOVES"];
		sortOrder: 100662;
		unlockBadgeLevel: 10;
		unlockBadgeType: "BADGE_BATTLE_ATTACK_WON";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlovesBea = AvatarCustomization<
	"AVATAR_f_gloves_bea",
	{
		assetName: "f_gloves_bea_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_bea_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.f_gloves_bea_0";
		iconName: "f_gloves_bea_00_bundle_icon";
		setNames: ["bea"];
		slot: ["GLOVES"];
		sortOrder: 101183;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlovesBwn = AvatarCustomization<
	"AVATAR_f_gloves_bwn",
	{
		assetName: "f_gloves_bwn_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_bwn_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.f_gloves_bwn_0";
		iconName: "f_gloves_bwn_00_bundle_icon";
		setNames: ["bwn"];
		slot: ["GLOVES"];
		sortOrder: 100835;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlovesDefault0 = AvatarCustomization<
	"AVATAR_f_gloves_default_0",
	{
		assetName: "f_gloves_default_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_default_bundle";
		enabled: true;
		groupName: "group_gloves";
		iconName: "f_gloves_default_bundle_icon";
		slot: ["GLOVES"];
		sortOrder: 100653;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFGlovesDefault1 = AvatarCustomization<
	"AVATAR_f_gloves_default_1",
	{
		assetName: "f_gloves_default_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_default_bundle";
		enabled: true;
		groupName: "group_gloves";
		iconName: "f_gloves_default_bundle_icon";
		slot: ["GLOVES"];
		sortOrder: 100652;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFGlovesDefault2 = AvatarCustomization<
	"AVATAR_f_gloves_default_2",
	{
		assetName: "f_gloves_default_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_default_bundle";
		enabled: true;
		groupName: "group_gloves";
		iconName: "f_gloves_default_bundle_icon";
		slot: ["GLOVES"];
		sortOrder: 100651;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFGlovesDefault3 = AvatarCustomization<
	"AVATAR_f_gloves_default_3",
	{
		assetName: "f_gloves_default_3";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_default_bundle";
		enabled: true;
		groupName: "group_gloves";
		iconName: "f_gloves_default_bundle_icon";
		slot: ["GLOVES"];
		sortOrder: 100650;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFGlovesDelibird = AvatarCustomization<
	"AVATAR_f_gloves_delibird",
	{
		assetName: "f_gloves_delibird_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_delibird_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.f_gloves_delibird_0";
		iconName: "f_gloves_delibird_0_bundle_icon";
		setNames: ["delibird"];
		slot: ["GLOVES"];
		sortOrder: 100657;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlovesDynamaxswsh = AvatarCustomization<
	"AVATAR_f_gloves_dynamaxswsh",
	{
		assetName: "f_gloves_dynamaxswsh_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_dynamaxswsh_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.f_gloves_dynamaxswsh_0";
		iconName: "f_gloves_dynamaxswsh_00_bundle_icon";
		slot: ["GLOVES"];
		sortOrder: 101632;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlovesEmpty = AvatarCustomization<
	"AVATAR_f_gloves_empty",
	{
		assetName: "f_gloves_empty";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_empty_bundle";
		enabled: true;
		groupName: "group_gloves";
		iconName: "f_gloves_empty_bundle_icon";
		slot: ["GLOVES"];
		sortOrder: 100649;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFGlovesFrlg0 = AvatarCustomization<
	"AVATAR_f_gloves_frlg_0",
	{
		assetName: "f_gloves_frlg_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_frlg_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.f_gloves_frlg_0";
		iconName: "f_gloves_frlg_bundle_icon";
		setNames: ["frlg_0"];
		slot: ["GLOVES"];
		sortOrder: 100656;
		unlockBadgeLevel: 5;
		unlockBadgeType: "BADGE_POKEDEX_ENTRIES";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlovesGeeta = AvatarCustomization<
	"AVATAR_f_gloves_geeta",
	{
		assetName: "f_gloves_geeta_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_geeta_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.f_gloves_geeta_0";
		iconName: "f_gloves_geeta_00_bundle_icon";
		setNames: ["geeta"];
		slot: ["GLOVES"];
		sortOrder: 101447;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlovesGiovanni = AvatarCustomization<
	"AVATAR_f_gloves_giovanni",
	{
		assetName: "f_gloves_giovanni_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_giovanni_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.f_gloves_giovanni_0";
		iconName: "f_gloves_giovanni_0_bundle_icon";
		setNames: ["giovanni"];
		slot: ["GLOVES"];
		sortOrder: 100664;
		unlockBadgeLevel: 20;
		unlockBadgeType: "BADGE_ROCKET_GIOVANNI_DEFEATED";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlovesGuzma = AvatarCustomization<
	"AVATAR_f_gloves_guzma",
	{
		assetName: "f_gloves_guzma_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_guzma_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.f_gloves_guzma_0";
		iconName: "f_gloves_guzma_00_bundle_icon";
		setNames: ["guzma"];
		slot: ["GLOVES"];
		sortOrder: 101237;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlovesGymleader0 = AvatarCustomization<
	"AVATAR_f_gloves_gymleader_0",
	{
		assetName: "f_gloves_gymleader_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_gymleader_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.f_gloves_gymleader_0";
		iconName: "f_gloves_gymleader_bundle_icon";
		setNames: ["gymleader_0"];
		slot: ["GLOVES"];
		sortOrder: 100655;
		unlockBadgeLevel: 10;
		unlockBadgeType: "BADGE_HOURS_DEFENDED";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlovesHoopabangle = AvatarCustomization<
	"AVATAR_f_gloves_hoopabangle",
	{
		assetName: "f_gloves_hoopabangle_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_hoopabangle_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.f_gloves_hoopabangle_0";
		iconName: "f_gloves_hoopabangle_00_bundle_icon";
		setNames: ["hoopa"];
		slot: ["GLOVES"];
		sortOrder: 101026;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlovesKorrina = AvatarCustomization<
	"AVATAR_f_gloves_korrina",
	{
		assetName: "f_gloves_korrina_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_korrina_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.f_gloves_korrina_0";
		iconName: "f_gloves_korrina_00_bundle_icon";
		setNames: ["korrina"];
		slot: ["GLOVES"];
		sortOrder: 100960;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlovesLysandre = AvatarCustomization<
	"AVATAR_f_gloves_lysandre",
	{
		assetName: "f_gloves_lysandre_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_lysandre_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.f_gloves_lysandre_0";
		iconName: "f_gloves_lysandre_00_bundle_icon";
		setNames: ["lysandre"];
		slot: ["GLOVES"];
		sortOrder: 101083;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlovesMegabangle = AvatarCustomization<
	"AVATAR_f_gloves_megabangle",
	{
		assetName: "f_gloves_megabangle_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_megabangle_bundle";
		enabled: true;
		groupName: "group_gloves";
		iconName: "f_gloves_megabangle_00_bundle_icon";
		slot: ["GLOVES"];
		sortOrder: 100758;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFGlovesMegabangleblack = AvatarCustomization<
	"AVATAR_f_gloves_megabangleblack",
	{
		assetName: "f_gloves_megabangleblack_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_megabangleblack_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.f_gloves_megabangleblack_0";
		iconName: "f_gloves_megabangleblack_00_bundle_icon";
		slot: ["GLOVES"];
		sortOrder: 100759;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlovesMegabangleblue = AvatarCustomization<
	"AVATAR_f_gloves_megabangleblue",
	{
		assetName: "f_gloves_megabangleblue_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_megabangleblue_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.f_gloves_megabangleblue_0";
		iconName: "f_gloves_megabangleblue_00_bundle_icon";
		slot: ["GLOVES"];
		sortOrder: 100760;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlovesMegabanglered = AvatarCustomization<
	"AVATAR_f_gloves_megabanglered",
	{
		assetName: "f_gloves_megabanglered_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_megabanglered_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.f_gloves_megabanglered_0";
		iconName: "f_gloves_megabanglered_00_bundle_icon";
		slot: ["GLOVES"];
		sortOrder: 100761;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlovesMegabangleyellow = AvatarCustomization<
	"AVATAR_f_gloves_megabangleyellow",
	{
		assetName: "f_gloves_megabangleyellow_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_megabangleyellow_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.f_gloves_megabangleyellow_0";
		iconName: "f_gloves_megabangleyellow_00_bundle_icon";
		slot: ["GLOVES"];
		sortOrder: 100762;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlovesObstagoonitems = AvatarCustomization<
	"AVATAR_f_gloves_obstagoonitems",
	{
		assetName: "f_gloves_obstagoonitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_obstagoonitems_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.f_gloves_obstagoonitems_0";
		iconName: "f_gloves_obstagoonitems_00_bundle_icon";
		setNames: ["obstagoonitems"];
		slot: ["GLOVES"];
		sortOrder: 101231;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlovesPalmer = AvatarCustomization<
	"AVATAR_f_gloves_palmer",
	{
		assetName: "f_gloves_palmer_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_palmer_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.f_gloves_palmer_0";
		iconName: "f_gloves_palmer_00_bundle_icon";
		setNames: ["palmer"];
		slot: ["GLOVES"];
		sortOrder: 101370;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlovesProfwillowoutfit = AvatarCustomization<
	"AVATAR_f_gloves_profwillowoutfit",
	{
		assetName: "f_gloves_profwillowoutfit_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_profwillowoutfit_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.f_gloves_profwillowoutfit_0";
		iconName: "f_gloves_profwillowoutfit_00_bundle_icon";
		setNames: ["profwillowoutfit"];
		slot: ["GLOVES"];
		sortOrder: 101377;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlovesStevenfirst = AvatarCustomization<
	"AVATAR_f_gloves_stevenfirst",
	{
		assetName: "f_gloves_stevenfirst_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_stevenfirst_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.f_gloves_stevenfirst_0";
		iconName: "f_gloves_stevenfirst_00_bundle_icon";
		setNames: ["stevenfirst"];
		slot: ["GLOVES"];
		sortOrder: 101314;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlovesSvdlc2spring = AvatarCustomization<
	"AVATAR_f_gloves_svdlc2spring",
	{
		assetName: "f_gloves_svdlc2spring_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_svdlc2spring_bundle";
		enabled: true;
		groupName: "group_gloves";
		iconName: "f_gloves_svdlc2spring_00_bundle_icon";
		setNames: ["svdlc2spring", "svdlc2fall"];
		slot: ["GLOVES"];
		sortOrder: 101520;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFGlovesSwshdlc2costume = AvatarCustomization<
	"AVATAR_f_gloves_swshdlc2costume",
	{
		assetName: "f_gloves_swshdlc2costume_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_swshdlc2costume_bundle";
		enabled: true;
		groupName: "group_gloves";
		iconName: "f_gloves_swshdlc2costume_00_bundle_icon";
		setNames: ["swshdlc2costume"];
		slot: ["GLOVES"];
		sortOrder: 100800;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFGlovesSwshdlccostume = AvatarCustomization<
	"AVATAR_f_gloves_swshdlccostume",
	{
		assetName: "f_gloves_swshdlccostume_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_swshdlccostume_bundle";
		enabled: true;
		groupName: "group_gloves";
		iconName: "f_gloves_swshdlccostume_00_bundle_icon";
		setNames: ["swshdlccostume"];
		slot: ["GLOVES"];
		sortOrder: 100665;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFGlovesSwshuniformchampion = AvatarCustomization<
	"AVATAR_f_gloves_swshuniformchampion",
	{
		assetName: "f_gloves_swshuniformchampion_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_swshuniformchampion_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.f_gloves_swshuniformchampion_0";
		iconName: "f_gloves_swshuniformchampion_00_bundle_icon";
		setNames: ["swshuniformchampion"];
		slot: ["GLOVES"];
		sortOrder: 101016;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlovesSwshuniformdark = AvatarCustomization<
	"AVATAR_f_gloves_swshuniformdark",
	{
		assetName: "f_gloves_swshuniformdark_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_swshuniformdark_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.f_gloves_swshuniformdark_0";
		iconName: "f_gloves_swshuniformdark_00_bundle_icon";
		setNames: ["swshuniformdark"];
		slot: ["GLOVES"];
		sortOrder: 101008;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlovesSwshuniformdefault = AvatarCustomization<
	"AVATAR_f_gloves_swshuniformdefault",
	{
		assetName: "f_gloves_swshuniformdefault_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_swshuniformdefault_bundle";
		enabled: true;
		groupName: "group_gloves";
		iconName: "f_gloves_swshuniformdefault_00_bundle_icon";
		setNames: ["swshuniformdefault"];
		slot: ["GLOVES"];
		sortOrder: 100999;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFGlovesSwshuniformdragon = AvatarCustomization<
	"AVATAR_f_gloves_swshuniformdragon",
	{
		assetName: "f_gloves_swshuniformdragon_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_swshuniformdragon_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.f_gloves_swshuniformdragon_0";
		iconName: "f_gloves_swshuniformdragon_00_bundle_icon";
		setNames: ["swshuniformdragon"];
		slot: ["GLOVES"];
		sortOrder: 100989;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlovesTeamaqua = AvatarCustomization<
	"AVATAR_f_gloves_teamaqua",
	{
		assetName: "f_gloves_teamaqua_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_teamaqua_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.f_gloves_teamaqua_0";
		iconName: "f_gloves_teamaqua_0_bundle_icon";
		setNames: ["teamaqua"];
		slot: ["GLOVES"];
		sortOrder: 100658;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlovesTeammagma = AvatarCustomization<
	"AVATAR_f_gloves_teammagma",
	{
		assetName: "f_gloves_teammagma_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_teammagma_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.f_gloves_teammagma_0";
		iconName: "f_gloves_teammagma_0_bundle_icon";
		setNames: ["teammagma"];
		slot: ["GLOVES"];
		sortOrder: 100659;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlovesTeamrocket0 = AvatarCustomization<
	"AVATAR_f_gloves_teamrocket_0",
	{
		assetName: "f_gloves_teamrocket_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_teamrocket_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.f_gloves_teamrocket_0";
		iconName: "f_gloves_teamrocket_bundle_icon";
		setNames: ["teamrocket_0", "teamrocket_1"];
		slot: ["GLOVES"];
		sortOrder: 100654;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlovesTeamspark = AvatarCustomization<
	"AVATAR_f_gloves_teamspark",
	{
		assetName: "f_gloves_teamspark_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_teamspark_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.f_gloves_teamspark_0";
		iconName: "f_gloves_teamspark_0_bundle_icon";
		setNames: ["teamspark"];
		slot: ["GLOVES"];
		sortOrder: 100660;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGlovesWintergloves2023 = AvatarCustomization<
	"AVATAR_f_gloves_wintergloves2023",
	{
		assetName: "f_gloves_wintergloves2023_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_gloves_wintergloves2023_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.f_gloves_wintergloves2023_0";
		iconName: "f_gloves_wintergloves2023_00_bundle_icon";
		setNames: ["winter2023"];
		slot: ["GLOVES"];
		sortOrder: 101533;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFGofestPikachuvisor = AvatarCustomization<
	"AVATAR_f_gofest_pikachuvisor",
	{
		assetName: "f_hat_gofest_pikachuvisor_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_gofest_pikachuvisor_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "f_hat_gofest_pikachuvisor_0_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100744;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHairDefault0 = AvatarCustomization<
	"AVATAR_f_hair_default_0",
	{
		assetName: "f_hair_default_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "f_group_hair";
		slot: ["HAIR"];
		sortOrder: 100645;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHairDefault1 = AvatarCustomization<
	"AVATAR_f_hair_default_1",
	{
		assetName: "f_hair_default_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "f_group_hair";
		slot: ["HAIR"];
		sortOrder: 100639;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHairDefault10 = AvatarCustomization<
	"AVATAR_f_hair_default_10",
	{
		assetName: "f_hair_default_10";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "f_group_hair";
		slot: ["HAIR"];
		sortOrder: 100630;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHairDefault11 = AvatarCustomization<
	"AVATAR_f_hair_default_11",
	{
		assetName: "f_hair_default_11";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "f_group_hair";
		slot: ["HAIR"];
		sortOrder: 100642;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHairDefault12 = AvatarCustomization<
	"AVATAR_f_hair_default_12",
	{
		assetName: "f_hair_default_12";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "f_group_hair";
		slot: ["HAIR"];
		sortOrder: 100640;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHairDefault13 = AvatarCustomization<
	"AVATAR_f_hair_default_13",
	{
		assetName: "f_hair_default_13";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "f_group_hair";
		slot: ["HAIR"];
		sortOrder: 100636;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHairDefault14 = AvatarCustomization<
	"AVATAR_f_hair_default_14",
	{
		assetName: "f_hair_default_14";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "f_group_hair";
		slot: ["HAIR"];
		sortOrder: 100632;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHairDefault15 = AvatarCustomization<
	"AVATAR_f_hair_default_15",
	{
		assetName: "f_hair_default_15";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "f_group_hair";
		slot: ["HAIR"];
		sortOrder: 100631;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHairDefault16 = AvatarCustomization<
	"AVATAR_f_hair_default_16",
	{
		assetName: "f_hair_default_16";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "f_group_hair";
		slot: ["HAIR"];
		sortOrder: 100637;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHairDefault17 = AvatarCustomization<
	"AVATAR_f_hair_default_17",
	{
		assetName: "f_hair_default_17";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "f_group_hair";
		slot: ["HAIR"];
		sortOrder: 100633;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHairDefault18 = AvatarCustomization<
	"AVATAR_f_hair_default_18",
	{
		assetName: "f_hair_default_18";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "f_group_hair";
		slot: ["HAIR"];
		sortOrder: 100643;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHairDefault19 = AvatarCustomization<
	"AVATAR_f_hair_default_19",
	{
		assetName: "f_hair_default_19";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "f_group_hair";
		slot: ["HAIR"];
		sortOrder: 100641;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHairDefault2 = AvatarCustomization<
	"AVATAR_f_hair_default_2",
	{
		assetName: "f_hair_default_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "f_group_hair";
		slot: ["HAIR"];
		sortOrder: 100648;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHairDefault3 = AvatarCustomization<
	"AVATAR_f_hair_default_3",
	{
		assetName: "f_hair_default_3";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "f_group_hair";
		slot: ["HAIR"];
		sortOrder: 100634;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHairDefault4 = AvatarCustomization<
	"AVATAR_f_hair_default_4",
	{
		assetName: "f_hair_default_4";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "f_group_hair";
		slot: ["HAIR"];
		sortOrder: 100629;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHairDefault5 = AvatarCustomization<
	"AVATAR_f_hair_default_5",
	{
		assetName: "f_hair_default_5";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "f_group_hair";
		slot: ["HAIR"];
		sortOrder: 100646;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHairDefault6 = AvatarCustomization<
	"AVATAR_f_hair_default_6",
	{
		assetName: "f_hair_default_6";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "f_group_hair";
		slot: ["HAIR"];
		sortOrder: 100644;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHairDefault7 = AvatarCustomization<
	"AVATAR_f_hair_default_7",
	{
		assetName: "f_hair_default_7";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "f_group_hair";
		slot: ["HAIR"];
		sortOrder: 100638;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHairDefault8 = AvatarCustomization<
	"AVATAR_f_hair_default_8",
	{
		assetName: "f_hair_default_8";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "f_group_hair";
		slot: ["HAIR"];
		sortOrder: 100647;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHairDefault9 = AvatarCustomization<
	"AVATAR_f_hair_default_9",
	{
		assetName: "f_hair_default_9";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "f_group_hair";
		slot: ["HAIR"];
		sortOrder: 100635;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHat6thanniversary = AvatarCustomization<
	"AVATAR_f_hat_6thanniversary",
	{
		assetName: "f_hat_6thanniversary_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_6thanniversary_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_6thanniversary_0";
		iconName: "f_hat_6thanniversary_00_bundle_icon";
		setNames: ["6thanniversary"];
		slot: ["HAT"];
		sortOrder: 101209;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatAcetrainersm = AvatarCustomization<
	"AVATAR_f_hat_acetrainersm",
	{
		assetName: "f_hat_acetrainersm_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_acetrainersm_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_acetrainersm_0";
		iconName: "f_hat_acetrainersm_0_bundle_icon";
		setNames: ["acetrainersm"];
		slot: ["HAT"];
		sortOrder: 100611;
		unlockBadgeLevel: 50;
		unlockBadgeType: "BADGE_GREAT_LEAGUE";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatAdventure0 = AvatarCustomization<
	"AVATAR_f_hat_adventure_0",
	{
		assetName: "f_hat_adventure_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_adventure_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "f_hat_adventure_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100586;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHatAseries = AvatarCustomization<
	"AVATAR_f_hat_aseries",
	{
		assetName: "f_hat_aseries_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_aseries_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iapSku: "pgorelease.avatar.f_hat_aseries_0";
		iconName: "f_hat_aseries_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100975;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatBea = AvatarCustomization<
	"AVATAR_f_hat_bea",
	{
		assetName: "f_hat_bea_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_bea_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_bea_0";
		iconName: "f_hat_bea_00_bundle_icon";
		setNames: ["bea"];
		slot: ["HAT"];
		sortOrder: 101181;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatBidoofhat = AvatarCustomization<
	"AVATAR_f_hat_bidoofhat",
	{
		assetName: "f_hat_bidoofhat_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_bidoofhat_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_bidoofhat_0";
		iconName: "f_hat_bidoofhat_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100962;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatBounsweetitems = AvatarCustomization<
	"AVATAR_f_hat_bounsweetitems",
	{
		assetName: "f_hat_bounsweetitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_bounsweetitems_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_bounsweetitems_0";
		iconName: "f_hat_bounsweetitems_00_bundle_icon";
		setNames: ["bounsweetitems"];
		slot: ["HAT"];
		sortOrder: 101388;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatBurmyearrings11 = AvatarCustomization<
	"AVATAR_f_hat_burmyearrings11",
	{
		assetName: "f_hat_burmyearrings11_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_burmyearrings11_bundle";
		enabled: true;
		groupName: "group_seasonal";
		iapSku: "pgorelease.avatar.f_hat_burmyearrings11_0";
		iconName: "f_hat_burmyearrings11_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101597;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatBurmyearrings12 = AvatarCustomization<
	"AVATAR_f_hat_burmyearrings12",
	{
		assetName: "f_hat_burmyearrings12_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_burmyearrings12_bundle";
		enabled: true;
		groupName: "group_seasonal";
		iapSku: "pgorelease.avatar.f_hat_burmyearrings12_0";
		iconName: "f_hat_burmyearrings12_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101599;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatBurmyearrings13 = AvatarCustomization<
	"AVATAR_f_hat_burmyearrings13",
	{
		assetName: "f_hat_burmyearrings13_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_burmyearrings13_bundle";
		enabled: true;
		groupName: "group_seasonal";
		iapSku: "pgorelease.avatar.f_hat_burmyearrings13_0";
		iconName: "f_hat_burmyearrings13_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101601;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatBwn = AvatarCustomization<
	"AVATAR_f_hat_bwn",
	{
		assetName: "f_hat_bwn_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_bwn_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_bwn_0";
		iconName: "f_hat_bwn_00_bundle_icon";
		setNames: ["bwn"];
		slot: ["HAT"];
		sortOrder: 100836;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatCasket0 = AvatarCustomization<
	"AVATAR_f_hat_casket_0",
	{
		assetName: "f_hat_casket_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_casket_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_casket_0";
		iconName: "f_hat_casket_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100596;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatCetoddlehat = AvatarCustomization<
	"AVATAR_f_hat_cetoddlehat",
	{
		assetName: "f_hat_cetoddlehat_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_cetoddlehat_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_cetoddlehat_0";
		iconName: "f_hat_cetoddlehat_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101514;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatClay = AvatarCustomization<
	"AVATAR_f_hat_clay",
	{
		assetName: "f_hat_clay_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_clay_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_clay_0";
		iconName: "f_hat_clay_00_bundle_icon";
		setNames: ["clay"];
		slot: ["HAT"];
		sortOrder: 101403;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatCofagrigusitems = AvatarCustomization<
	"AVATAR_f_hat_cofagrigusitems",
	{
		assetName: "f_hat_cofagrigusitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_cofagrigusitems_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_cofagrigusitems_0";
		iconName: "f_hat_cofagrigusitems_00_bundle_icon";
		setNames: ["cofagrigus"];
		slot: ["HAT"];
		sortOrder: 101466;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatCosmog = AvatarCustomization<
	"AVATAR_f_hat_cosmog",
	{
		assetName: "f_hat_cosmog_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_cosmog_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_cosmog_0";
		iconName: "f_hat_cosmog_00_bundle_icon";
		setNames: ["cosmog"];
		slot: ["HAT"];
		sortOrder: 101251;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatCrownmoon = AvatarCustomization<
	"AVATAR_f_hat_crownmoon",
	{
		assetName: "f_hat_crownmoon_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_crownmoon_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_crownmoon_0";
		iconName: "f_hat_crownmoon_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101593;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatCrownsun = AvatarCustomization<
	"AVATAR_f_hat_crownsun",
	{
		assetName: "f_hat_crownsun_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_crownsun_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_crownsun_0";
		iconName: "f_hat_crownsun_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101595;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatCubonehat = AvatarCustomization<
	"AVATAR_f_hat_cubonehat",
	{
		assetName: "f_hat_cubonehat_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_cubonehat_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_cubonehat_0";
		iconName: "f_hat_cubonehat_0_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100618;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatDarumakahat = AvatarCustomization<
	"AVATAR_f_hat_darumakahat",
	{
		assetName: "f_hat_darumakahat_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_darumakahat_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_darumakahat_0";
		iconName: "f_hat_darumakahat_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101534;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatDedenneitems = AvatarCustomization<
	"AVATAR_f_hat_dedenneitems",
	{
		assetName: "f_hat_dedenneitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_dedenneitems_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_dedenneitems_0";
		iconName: "f_hat_dedenneitems_00_bundle_icon";
		setNames: ["dedenneitems"];
		slot: ["HAT"];
		sortOrder: 101054;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatDefaultA0 = AvatarCustomization<
	"AVATAR_f_hat_default_A_0",
	{
		assetName: "f_hat_default_A_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_default_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "f_hat_default_a_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100585;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHatDefaultA1 = AvatarCustomization<
	"AVATAR_f_hat_default_A_1",
	{
		assetName: "f_hat_default_A_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_default_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "f_hat_default_a_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100584;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHatDefaultA2 = AvatarCustomization<
	"AVATAR_f_hat_default_A_2",
	{
		assetName: "f_hat_default_A_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_default_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "f_hat_default_a_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100583;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHatDefaultA3 = AvatarCustomization<
	"AVATAR_f_hat_default_A_3",
	{
		assetName: "f_hat_default_A_3";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_default_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "f_hat_default_a_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100582;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHatDefaultA4 = AvatarCustomization<
	"AVATAR_f_hat_default_A_4",
	{
		assetName: "f_hat_default_A_4";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_default_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "f_hat_default_a_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100581;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHatDefaultA5 = AvatarCustomization<
	"AVATAR_f_hat_default_A_5",
	{
		assetName: "f_hat_default_A_5";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_default_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "f_hat_default_a_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100580;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHatDefaultB0 = AvatarCustomization<
	"AVATAR_f_hat_default_B_0",
	{
		assetName: "f_hat_default_B_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_default_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "f_hat_default_b_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100579;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHatDefaultB1 = AvatarCustomization<
	"AVATAR_f_hat_default_B_1",
	{
		assetName: "f_hat_default_B_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_default_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "f_hat_default_b_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100578;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHatDeino = AvatarCustomization<
	"AVATAR_f_hat_deino",
	{
		assetName: "f_hat_deino_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_deino_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_deino_0";
		iconName: "f_hat_deino_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101088;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatDelibird = AvatarCustomization<
	"AVATAR_f_hat_delibird",
	{
		assetName: "f_hat_delibird_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_delibird_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_delibird_0";
		iconName: "f_hat_delibird_0_bundle_icon";
		setNames: ["delibird"];
		slot: ["HAT"];
		sortOrder: 100609;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatDetectivepikachu = AvatarCustomization<
	"AVATAR_f_hat_detectivepikachu",
	{
		assetName: "f_hat_detectivepikachu_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_detectivepikachu_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "f_hat_detectivepikachu_0_bundle_icon";
		setNames: ["detectivepikachu"];
		slot: ["HAT"];
		sortOrder: 100614;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHatDiancie = AvatarCustomization<
	"AVATAR_f_hat_diancie",
	{
		assetName: "f_hat_diancie_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_diancie_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_diancie_0";
		iconName: "f_hat_diancie_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101427;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatDp = AvatarCustomization<
	"AVATAR_f_hat_dp",
	{
		assetName: "f_hat_dp_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_dp_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "f_hat_dp_00_bundle_icon";
		setNames: ["dp"];
		slot: ["HAT"];
		sortOrder: 101071;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHatDrifloon0 = AvatarCustomization<
	"AVATAR_f_hat_drifloon_0",
	{
		assetName: "f_hat_drifloon_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_drifloon_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_drifloon_0";
		iconName: "f_hat_drifloon_0_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100608;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatDrpikachu = AvatarCustomization<
	"AVATAR_f_hat_drpikachu",
	{
		assetName: "f_hat_drpikachu_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_drpikachu_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_drpikachu_0";
		iconName: "f_hat_drpikachu_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101487;
		unlockBadgeLevel: 10;
		unlockBadgeType: "BADGE_MAX_SIZE_FIRST_PLACE_WIN";
		unlockType: "MEDAL_REWARD";
	}
>;
export type AvatarCustomizationFHatDusclopsmummy = AvatarCustomization<
	"AVATAR_f_hat_dusclopsmummy",
	{
		assetName: "f_hat_dusclopsmummy_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_dusclopsmummy_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_dusclopsmummy_0";
		iconName: "f_hat_dusclopsmummy_00_bundle_icon";
		setNames: ["dusclopsmummy"];
		slot: ["HAT"];
		sortOrder: 101278;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatEeveecap = AvatarCustomization<
	"AVATAR_f_hat_eeveecap",
	{
		assetName: "f_hat_eeveecap_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_eeveecap_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "f_hat_eeveecap_0_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100587;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHatElesa = AvatarCustomization<
	"AVATAR_f_hat_elesa",
	{
		assetName: "f_hat_elesa_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_elesa_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_elesa_0";
		iconName: "f_hat_elesa_00_bundle_icon";
		setNames: ["elesa"];
		slot: ["HAT"];
		sortOrder: 100875;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatEmpty = AvatarCustomization<
	"AVATAR_f_hat_empty",
	{
		assetName: "f_hat_empty";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_empty_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "f_hat_empty_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100574;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHatFedora0 = AvatarCustomization<
	"AVATAR_f_hat_fedora_0",
	{
		assetName: "f_hat_fedora_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_fedora_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_fedora_0";
		iconName: "f_hat_fedora_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100595;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatFedora1 = AvatarCustomization<
	"AVATAR_f_hat_fedora_1",
	{
		assetName: "f_hat_fedora_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_fedora_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_fedora_1";
		iconName: "f_hat_fedora_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100594;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatFlabebepack = AvatarCustomization<
	"AVATAR_f_hat_flabebepack",
	{
		assetName: "f_hat_flabebepack_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_flabebepack_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_flabebepack_0";
		iconName: "f_hat_flabebepack_00_bundle_icon";
		setNames: ["flabebepack"];
		slot: ["HAT"];
		sortOrder: 101121;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatFragment0 = AvatarCustomization<
	"AVATAR_f_hat_fragment_0",
	{
		assetName: "f_hat_fragment_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_fragment_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "f_hat_fragment_bundle_icon";
		setNames: ["fragment_0"];
		slot: ["HAT"];
		sortOrder: 100589;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHatFrlg0 = AvatarCustomization<
	"AVATAR_f_hat_frlg_0",
	{
		assetName: "f_hat_frlg_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_frlg_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_frlg_0";
		iconName: "f_hat_frlg_bundle_icon";
		setNames: ["frlg_0"];
		slot: ["HAT"];
		sortOrder: 100598;
		unlockBadgeLevel: 5;
		unlockBadgeType: "BADGE_POKEDEX_ENTRIES";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatFurfrouwig = AvatarCustomization<
	"AVATAR_f_hat_furfrouwig",
	{
		assetName: "f_hat_furfrouwig_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_furfrouwig_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_furfrouwig_0";
		iconName: "f_hat_furfrouwig_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101018;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatFw2022 = AvatarCustomization<
	"AVATAR_f_hat_fw2022",
	{
		assetName: "f_hat_fw2022_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_fw2022_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_fw2022_0";
		iconName: "f_hat_fw2022_00_bundle_icon";
		setNames: ["fw2022"];
		slot: ["HAT"];
		sortOrder: 101255;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatGalarfarfetchditems = AvatarCustomization<
	"AVATAR_f_hat_galarfarfetchditems",
	{
		assetName: "f_hat_galarfarfetchditems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_galarfarfetchditems_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_galarfarfetchditems_0";
		iconName: "f_hat_galarfarfetchditems_00_bundle_icon";
		setNames: ["galarfarfetchditems"];
		slot: ["HAT"];
		sortOrder: 100628;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatGenesecteventitem = AvatarCustomization<
	"AVATAR_f_hat_genesecteventitem",
	{
		assetName: "f_hat_genesecteventitem_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_genesecteventitem_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_genesecteventitem_0";
		iconName: "f_hat_genesecteventitem_0_bundle_icon";
		setNames: ["genesecteventitem"];
		slot: ["HAT"];
		sortOrder: 100626;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatGengar0 = AvatarCustomization<
	"AVATAR_f_hat_gengar_0",
	{
		assetName: "f_hat_gengar_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_gengar_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_gengar_0";
		iconName: "f_hat_gengar_0_bundle_icon";
		setNames: ["gengar_0"];
		slot: ["HAT"];
		sortOrder: 100606;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatGimmighoulitems = AvatarCustomization<
	"AVATAR_f_hat_gimmighoulitems",
	{
		assetName: "f_hat_gimmighoulitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_gimmighoulitems_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_gimmighoulitems_0";
		iconName: "f_hat_gimmighoulitems_00_bundle_icon";
		setNames: ["gimmighoulitems"];
		slot: ["HAT"];
		sortOrder: 101365;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatGiratinaitems = AvatarCustomization<
	"AVATAR_f_hat_giratinaitems",
	{
		assetName: "f_hat_giratinaitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_giratinaitems_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_giratinaitems_0";
		iconName: "f_hat_giratinaitems_00_bundle_icon";
		setNames: ["giratinaitems"];
		slot: ["HAT"];
		sortOrder: 101567;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatGladion = AvatarCustomization<
	"AVATAR_f_hat_gladion",
	{
		assetName: "f_hat_gladion_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_gladion_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_gladion_0";
		iconName: "f_hat_gladion_00_bundle_icon";
		setNames: ["gladion"];
		slot: ["HAT"];
		sortOrder: 101133;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatGoomy = AvatarCustomization<
	"AVATAR_f_hat_goomy",
	{
		assetName: "f_hat_goomy_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_goomy_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_goomy_0";
		iconName: "f_hat_goomy_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101106;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatGreavardwig = AvatarCustomization<
	"AVATAR_f_hat_greavardwig",
	{
		assetName: "f_hat_greavardwig_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_greavardwig_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_greavardwig_0";
		iconName: "f_hat_greavardwig_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101471;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatGreencoat = AvatarCustomization<
	"AVATAR_f_hat_greencoat",
	{
		assetName: "f_hat_greencoat_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_greencoat_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_greencoat_0";
		iconName: "f_hat_greencoat_00_bundle_icon";
		setNames: ["greencoat"];
		slot: ["HAT"];
		sortOrder: 101093;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatGrowlithehelmet = AvatarCustomization<
	"AVATAR_f_hat_growlithehelmet",
	{
		assetName: "f_hat_growlithehelmet_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_growlithehelmet_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_growlithehelmet_0";
		iconName: "f_hat_growlithehelmet_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101454;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatGtr2024eeveefanmask = AvatarCustomization<
	"AVATAR_f_hat_gtr2024eeveefanmask",
	{
		assetName: "f_hat_gtr2024eeveefanmask_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_gtr2024eeveefanmask_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_gtr2024eeveefanmask_0";
		iconName: "f_hat_gtr2024eeveefanmask_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101545;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatGtr2024pikachufanmask = AvatarCustomization<
	"AVATAR_f_hat_gtr2024pikachufanmask",
	{
		assetName: "f_hat_gtr2024pikachufanmask_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_gtr2024pikachufanmask_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_gtr2024pikachufanmask_0";
		iconName: "f_hat_gtr2024pikachufanmask_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101547;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatGuccihat = AvatarCustomization<
	"AVATAR_f_hat_guccihat",
	{
		assetName: "f_hat_guccihat_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_guccihat_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iconName: "f_hat_guccihat_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100856;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHatGuzma = AvatarCustomization<
	"AVATAR_f_hat_guzma",
	{
		assetName: "f_hat_guzma_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_guzma_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_guzma_0";
		iconName: "f_hat_guzma_00_bundle_icon";
		setNames: ["guzma"];
		slot: ["HAT"];
		sortOrder: 101235;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatGyaradoscap = AvatarCustomization<
	"AVATAR_f_hat_gyaradoscap",
	{
		assetName: "f_hat_gyaradoscap_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_gyaradoscap_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_gyaradoscap_0";
		iconName: "f_hat_gyaradoscap_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100786;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatHgss0 = AvatarCustomization<
	"AVATAR_f_hat_hgss_0",
	{
		assetName: "f_hat_hgss_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_hgss_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_hgss_0";
		iconName: "f_hat_hgss_bundle_icon";
		setNames: ["hgss_0"];
		slot: ["HAT"];
		sortOrder: 100597;
		unlockBadgeLevel: 5;
		unlockBadgeType: "BADGE_POKEDEX_ENTRIES_GEN2";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatHoliday2022santacostumes = AvatarCustomization<
	"AVATAR_f_hat_holiday2022santacostumes",
	{
		assetName: "f_hat_holiday2022santacostumes_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_holiday2022santacostumes_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_holiday2022santacostumes_0";
		iconName: "f_hat_holiday2022santacostumes_00_bundle_icon";
		setNames: ["holiday2022santacostumes"];
		slot: ["HAT"];
		sortOrder: 101337;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatHolidaybeanie = AvatarCustomization<
	"AVATAR_f_hat_holidaybeanie",
	{
		assetName: "f_hat_holidaybeanie_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_holidaybeanie_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "f_hat_holidaybeanie_0_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100623;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHatHoopaearmuffs = AvatarCustomization<
	"AVATAR_f_hat_hoopaearmuffs",
	{
		assetName: "f_hat_hoopaearmuffs_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_hoopaearmuffs_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_hoopaearmuffs_0";
		iconName: "f_hat_hoopaearmuffs_00_bundle_icon";
		setNames: ["hoopa"];
		slot: ["HAT"];
		sortOrder: 101038;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatIngo = AvatarCustomization<
	"AVATAR_f_hat_ingo",
	{
		assetName: "f_hat_ingo_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_ingo_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_ingo_0";
		iconName: "f_hat_ingo_00_bundle_icon";
		setNames: ["ingo"];
		slot: ["HAT"];
		sortOrder: 101504;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatKantotourcapgreen = AvatarCustomization<
	"AVATAR_f_hat_kantotourcapgreen",
	{
		assetName: "f_hat_kantotourcapgreen_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_kantotourcapgreen_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_kantotourcapgreen_0";
		iconName: "f_hat_kantotourcapgreen_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100894;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatKantotourcapred = AvatarCustomization<
	"AVATAR_f_hat_kantotourcapred",
	{
		assetName: "f_hat_kantotourcapred_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_kantotourcapred_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_kantotourcapred_0";
		iconName: "f_hat_kantotourcapred_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100895;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatKnitted0 = AvatarCustomization<
	"AVATAR_f_hat_knitted_0",
	{
		assetName: "f_hat_knitted_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_knitted_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_knitted_0";
		iconName: "f_hat_knitted_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100593;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatKnitted1 = AvatarCustomization<
	"AVATAR_f_hat_knitted_1",
	{
		assetName: "f_hat_knitted_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_knitted_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_knitted_1";
		iconName: "f_hat_knitted_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100592;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatKorrina = AvatarCustomization<
	"AVATAR_f_hat_korrina",
	{
		assetName: "f_hat_korrina_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_korrina_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_korrina_0";
		iconName: "f_hat_korrina_00_bundle_icon";
		setNames: ["korrina"];
		slot: ["HAT"];
		sortOrder: 100957;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatLana = AvatarCustomization<
	"AVATAR_f_hat_lana",
	{
		assetName: "f_hat_lana_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_lana_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_lana_0";
		iconName: "f_hat_lana_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101614;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatLaprasbandana = AvatarCustomization<
	"AVATAR_f_hat_laprasbandana",
	{
		assetName: "f_hat_laprasbandana_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_laprasbandana_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_laprasbandana_0";
		iconName: "f_hat_laprasbandana_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101168;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatLasecuritycorps = AvatarCustomization<
	"AVATAR_f_hat_lasecuritycorps",
	{
		assetName: "f_hat_lasecuritycorps_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_lasecuritycorps_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_lasecuritycorps_0";
		iconName: "f_hat_lasecuritycorps_00_bundle_icon";
		setNames: ["lasecuritycorps"];
		slot: ["HAT"];
		sortOrder: 101550;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatLegendofarceus = AvatarCustomization<
	"AVATAR_f_hat_legendofarceus",
	{
		assetName: "f_hat_legendofarceus_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_legendofarceus_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "f_hat_legendofarceus_00_bundle_icon";
		setNames: ["legendofarceus"];
		slot: ["HAT"];
		sortOrder: 101111;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHatLitwickhat = AvatarCustomization<
	"AVATAR_f_hat_litwickhat",
	{
		assetName: "f_hat_litwickhat_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_litwickhat_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_litwickhat_0";
		iconName: "f_hat_litwickhat_0_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100619;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatLoneearrings = AvatarCustomization<
	"AVATAR_f_hat_loneearrings",
	{
		assetName: "f_hat_loneearrings_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_loneearrings_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "f_hat_loneearrings_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100622;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHatLvl50cap = AvatarCustomization<
	"AVATAR_f_hat_lvl50cap",
	{
		assetName: "f_hat_lvl50cap_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_lvl50cap_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "f_hat_lvl50cap_00_bundle_icon";
		setNames: ["lvl50_0", "lvl50_1"];
		slot: ["HAT"];
		sortOrder: 100822;
		unlockPlayerLevel: 45;
		unlockType: "LEVEL_REWARD";
	}
>;
export type AvatarCustomizationFHatMagikarp = AvatarCustomization<
	"AVATAR_f_hat_magikarp",
	{
		assetName: "f_hat_magikarp";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_magikarp_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "f_hat_magikarp_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100577;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHatMareaniehat = AvatarCustomization<
	"AVATAR_f_hat_mareaniehat",
	{
		assetName: "f_hat_mareaniehat_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_mareaniehat_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_mareaniehat_0";
		iconName: "f_hat_mareaniehat_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101266;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatMegalopunnyitems = AvatarCustomization<
	"AVATAR_f_hat_megalopunnyitems",
	{
		assetName: "f_hat_megalopunnyitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_megalopunnyitems_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_megalopunnyitems_0";
		iconName: "f_hat_megalopunnyitems_00_bundle_icon";
		setNames: ["megalopunnyitems"];
		slot: ["HAT"];
		sortOrder: 100903;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatMegarayquaza = AvatarCustomization<
	"AVATAR_f_hat_megarayquaza",
	{
		assetName: "f_hat_megarayquaza_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_megarayquaza_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_megarayquaza_0";
		iconName: "f_hat_megarayquaza_00_bundle_icon";
		setNames: ["megarayquaza"];
		slot: ["HAT"];
		sortOrder: 101429;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatMeltan = AvatarCustomization<
	"AVATAR_f_hat_meltan",
	{
		assetName: "f_hat_meltan_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_meltan_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_meltan_0";
		iconName: "f_hat_meltan_0_bundle_icon";
		setNames: ["meltan"];
		slot: ["HAT"];
		sortOrder: 100612;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatMeltanearrings = AvatarCustomization<
	"AVATAR_f_hat_meltanearrings",
	{
		assetName: "f_hat_meltanearrings_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_meltanearrings_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_meltanearrings_0";
		iconName: "f_hat_meltanearrings_0_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100613;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatMewtwo = AvatarCustomization<
	"AVATAR_f_hat_mewtwo",
	{
		assetName: "f_hat_mewtwo_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_mewtwo_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_mewtwo_0";
		iconName: "f_hat_mewtwo_0_bundle_icon";
		setNames: ["mewtwo"];
		slot: ["HAT"];
		sortOrder: 100616;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatMimikyu0 = AvatarCustomization<
	"AVATAR_f_hat_mimikyu_0",
	{
		assetName: "f_hat_mimikyu_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_mimikyu_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "f_hat_mimikyu_bundle_icon";
		setNames: ["mimikyu"];
		slot: ["HAT"];
		sortOrder: 100576;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHatMismagius0 = AvatarCustomization<
	"AVATAR_f_hat_mismagius_0",
	{
		assetName: "f_hat_mismagius_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_mismagius_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_mismagius_0";
		iconName: "f_hat_mismagius_0_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100607;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatMovie2020 = AvatarCustomization<
	"AVATAR_f_hat_movie2020",
	{
		assetName: "f_hat_movie2020_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_movie2020_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "f_hat_movie2020_00_bundle_icon";
		setNames: ["movie2020"];
		slot: ["HAT"];
		sortOrder: 101029;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHatMunnapack0 = AvatarCustomization<
	"AVATAR_f_hat_munnapack_0",
	{
		assetName: "f_hat_munnapack_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_munnapack_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_munnapack_0";
		iconName: "f_hat_munnapack_00_bundle_icon";
		setNames: ["munnapack_0"];
		slot: ["HAT"];
		sortOrder: 100864;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatMunnapack1 = AvatarCustomization<
	"AVATAR_f_hat_munnapack_1",
	{
		assetName: "f_hat_munnapack_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_munnapack_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_munnapack_1";
		iconName: "f_hat_munnapack_01_bundle_icon";
		setNames: ["munnapack_1"];
		slot: ["HAT"];
		sortOrder: 100865;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatNewyear2022 = AvatarCustomization<
	"AVATAR_f_hat_newyear2022",
	{
		assetName: "f_hat_newyear2022_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_newyear2022_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_newyear2022_0";
		iconName: "f_hat_newyear2022_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101103;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatNewyearhat2021 = AvatarCustomization<
	"AVATAR_f_hat_newyearhat2021",
	{
		assetName: "f_hat_newyearhat2021_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_newyearhat2021_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_newyearhat2021_0";
		iconName: "f_hat_newyearhat2021_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100862;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatNewyearhat2023 = AvatarCustomization<
	"AVATAR_f_hat_newyearhat2023",
	{
		assetName: "f_hat_newyearhat2023_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_newyearhat2023_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_newyearhat2023_0";
		iconName: "f_hat_newyearhat2023_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101321;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatNihilegoitems = AvatarCustomization<
	"AVATAR_f_hat_nihilegoitems",
	{
		assetName: "f_hat_nihilegoitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_nihilegoitems_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_nihilegoitems_0";
		iconName: "f_hat_nihilegoitems_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101226;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatNoibat = AvatarCustomization<
	"AVATAR_f_hat_noibat",
	{
		assetName: "f_hat_noibat_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_noibat_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_noibat_0";
		iconName: "f_hat_noibat_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101115;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatObstagoonitems = AvatarCustomization<
	"AVATAR_f_hat_obstagoonitems",
	{
		assetName: "f_hat_obstagoonitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_obstagoonitems_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_obstagoonitems_0";
		iconName: "f_hat_obstagoonitems_00_bundle_icon";
		setNames: ["obstagoonitems"];
		slot: ["HAT"];
		sortOrder: 101229;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatOras = AvatarCustomization<
	"AVATAR_f_hat_oras",
	{
		assetName: "f_hat_oras_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_oras_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "f_hat_oras_00_bundle_icon";
		setNames: ["oras"];
		slot: ["HAT"];
		sortOrder: 101354;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHatOricoriopink = AvatarCustomization<
	"AVATAR_f_hat_oricorioPink",
	{
		assetName: "f_hat_oricorioPink_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_oricoriopink_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_oricorioPink_0";
		iconName: "f_hat_oricoriopink_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101196;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatOricoriopurple = AvatarCustomization<
	"AVATAR_f_hat_oricorioPurple",
	{
		assetName: "f_hat_oricorioPurple_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_oricoriopurple_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_oricorioPurple_0";
		iconName: "f_hat_oricoriopurple_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101195;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatOricoriored = AvatarCustomization<
	"AVATAR_f_hat_oricorioRed",
	{
		assetName: "f_hat_oricorioRed_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_oricoriored_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_oricorioRed_0";
		iconName: "f_hat_oricoriored_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101194;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatOricorioyellow = AvatarCustomization<
	"AVATAR_f_hat_oricorioYellow",
	{
		assetName: "f_hat_oricorioYellow_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_oricorioyellow_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_oricorioYellow_0";
		iconName: "f_hat_oricorioyellow_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101197;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatPartneritemsjan2024hat = AvatarCustomization<
	"AVATAR_f_hat_partneritemsjan2024hat",
	{
		assetName: "f_hat_partneritemsjan2024hat_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_partneritemsjan2024hat_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iapSku: "pgorelease.avatar.f_hat_partneritemsjan2024hat_0";
		iconName: "f_hat_partneritemsjan2024hat_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101541;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatPhantump = AvatarCustomization<
	"AVATAR_f_hat_phantump",
	{
		assetName: "f_hat_phantump_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_phantump_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_phantump_0";
		iconName: "f_hat_phantump_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101465;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatPikachucap = AvatarCustomization<
	"AVATAR_f_hat_pikachucap",
	{
		assetName: "f_hat_pikachucap_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_pikachucap_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "f_hat_pikachucap_0_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100588;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHatPikachufan0 = AvatarCustomization<
	"AVATAR_f_hat_pikachufan_0",
	{
		assetName: "f_hat_pikachufan_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_pikachufan_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_pikachufan_0";
		iconName: "f_hat_pikachufan_bundle_icon";
		setNames: ["pikachufan_0"];
		slot: ["HAT"];
		sortOrder: 100591;
		unlockBadgeLevel: 3;
		unlockBadgeType: "BADGE_PIKACHU";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatPikachulibre = AvatarCustomization<
	"AVATAR_f_hat_pikachulibre",
	{
		assetName: "f_hat_pikachulibre_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_pikachulibre_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_pikachulibre_0";
		iconName: "f_hat_pikachulibre_0_bundle_icon";
		setNames: ["pikachulibre"];
		slot: ["HAT"];
		sortOrder: 100621;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatPikachupumpkinhead = AvatarCustomization<
	"AVATAR_f_hat_pikachupumpkinhead",
	{
		assetName: "f_hat_pikachupumpkinhead_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_pikachupumpkinhead_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_pikachupumpkinhead_0";
		iconName: "f_hat_pikachupumpkinhead_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101044;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatPkmncap0 = AvatarCustomization<
	"AVATAR_f_hat_pkmncap_0",
	{
		assetName: "f_hat_pkmncap_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_pkmncap_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_pkmncap_0";
		iconName: "f_hat_pkmncap_0_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100605;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatPkmncap1 = AvatarCustomization<
	"AVATAR_f_hat_pkmncap_1",
	{
		assetName: "f_hat_pkmncap_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_pkmncap_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_pkmncap_1";
		iconName: "f_hat_pkmncap_1_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100604;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatPkmncap2 = AvatarCustomization<
	"AVATAR_f_hat_pkmncap_2",
	{
		assetName: "f_hat_pkmncap_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_pkmncap_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_pkmncap_2";
		iconName: "f_hat_pkmncap_2_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100603;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatPoipole = AvatarCustomization<
	"AVATAR_f_hat_poipole",
	{
		assetName: "f_hat_poipole_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_poipole_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_poipole_0";
		iconName: "f_hat_poipole_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101586;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatProfwillowoutfit = AvatarCustomization<
	"AVATAR_f_hat_profwillowoutfit",
	{
		assetName: "f_hat_profwillowoutfit_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_profwillowoutfit_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_profwillowoutfit_0";
		iconName: "f_hat_profwillowoutfit_00_bundle_icon";
		setNames: ["profwillowoutfit"];
		slot: ["HAT"];
		sortOrder: 101378;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatRegiicejersies = AvatarCustomization<
	"AVATAR_f_hat_regiicejersies",
	{
		assetName: "f_hat_regiicejersies_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_regiicejersies_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_regiicejersies_0";
		iconName: "f_hat_regiicejersies_00_bundle_icon";
		setNames: ["regiicejersies"];
		slot: ["HAT"];
		sortOrder: 100940;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatRegirockjersies = AvatarCustomization<
	"AVATAR_f_hat_regirockjersies",
	{
		assetName: "f_hat_regirockjersies_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_regirockjersies_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_regirockjersies_0";
		iconName: "f_hat_regirockjersies_00_bundle_icon";
		setNames: ["regirockjersies"];
		slot: ["HAT"];
		sortOrder: 100932;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatRegisteeljersies = AvatarCustomization<
	"AVATAR_f_hat_registeeljersies",
	{
		assetName: "f_hat_registeeljersies_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_registeeljersies_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_registeeljersies_0";
		iconName: "f_hat_registeeljersies_00_bundle_icon";
		setNames: ["registeeljersies"];
		slot: ["HAT"];
		sortOrder: 100948;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatRuinmaniac = AvatarCustomization<
	"AVATAR_f_hat_ruinmaniac",
	{
		assetName: "f_hat_ruinmaniac_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_ruinmaniac_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_ruinmaniac_0";
		iconName: "f_hat_ruinmaniac_0_bundle_icon";
		setNames: ["ruinmaniac"];
		slot: ["HAT"];
		sortOrder: 100615;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatSableyegoggles = AvatarCustomization<
	"AVATAR_f_hat_sableyegoggles",
	{
		assetName: "f_hat_sableyegoggles_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_sableyegoggles_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_sableyegoggles_0";
		iconName: "f_hat_sableyegoggles_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100784;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatSamsungsummer2020 = AvatarCustomization<
	"AVATAR_f_hat_samsungsummer2020",
	{
		assetName: "f_hat_samsungsummer2020_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_samsungsummer2020_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iapSku: "pgorelease.avatar.f_hat_samsungsummer2020_0";
		iconName: "f_hat_samsungsummer2020_0_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100740;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatSandygasthat = AvatarCustomization<
	"AVATAR_f_hat_sandygasthat",
	{
		assetName: "f_hat_sandygasthat_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_sandygasthat_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_sandygasthat_0";
		iconName: "f_hat_sandygasthat_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101410;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatShayminhat = AvatarCustomization<
	"AVATAR_f_hat_shayminhat",
	{
		assetName: "f_hat_shayminhat_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_shayminhat_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_shayminhat_0";
		iconName: "f_hat_shayminhat_00_bundle_icon";
		setNames: ["shaymin_land", "shaymin_sky"];
		slot: ["HAT"];
		sortOrder: 101189;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatSlowpoketailshirts = AvatarCustomization<
	"AVATAR_f_hat_slowpoketailshirts",
	{
		assetName: "f_hat_slowpoketailshirts_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_slowpoketailshirts_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_slowpoketailshirts_0";
		iconName: "f_hat_slowpoketailshirts_00_bundle_icon";
		setNames: ["slowpoketailshirts"];
		slot: ["HAT"];
		sortOrder: 100924;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatSnorlaxnightcap = AvatarCustomization<
	"AVATAR_f_hat_snorlaxnightcap",
	{
		assetName: "f_hat_snorlaxnightcap_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_snorlaxnightcap_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "f_hat_snorlaxnightcap_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101398;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHatSolgaleoitems = AvatarCustomization<
	"AVATAR_f_hat_solgaleoitems",
	{
		assetName: "f_hat_solgaleoitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_solgaleoitems_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_solgaleoitems_0";
		iconName: "f_hat_solgaleoitems_00_bundle_icon";
		setNames: ["solgaleoitems"];
		slot: ["HAT"];
		sortOrder: 101306;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatSs = AvatarCustomization<
	"AVATAR_f_hat_ss",
	{
		assetName: "f_hat_ss_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_ss_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "f_hat_ss_0_bundle_icon";
		setNames: ["ss"];
		slot: ["HAT"];
		sortOrder: 100620;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHatStantlerheadband = AvatarCustomization<
	"AVATAR_f_hat_stantlerheadband",
	{
		assetName: "f_hat_stantlerheadband_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_stantlerheadband_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_stantlerheadband_0";
		iconName: "f_hat_stantlerheadband_0_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100624;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatStrawhat = AvatarCustomization<
	"AVATAR_f_hat_strawhat",
	{
		assetName: "f_hat_strawhat_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_strawhat_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "f_hat_strawhat_0_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100617;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHatSummer2023 = AvatarCustomization<
	"AVATAR_f_hat_summer2023",
	{
		assetName: "f_hat_summer2023_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_summer2023_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_summer2023_0";
		iconName: "f_hat_summer2023_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101396;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatSvcostumescarletschool = AvatarCustomization<
	"AVATAR_f_hat_svcostumescarletschool",
	{
		assetName: "f_hat_svcostumescarletschool_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_svcostumescarletschool_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "f_hat_svcostumescarletschool_00_bundle_icon";
		setNames: ["svcostumescarletschool"];
		slot: ["HAT"];
		sortOrder: 101288;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHatSvcostumevioletschool = AvatarCustomization<
	"AVATAR_f_hat_svcostumevioletschool",
	{
		assetName: "f_hat_svcostumevioletschool_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_svcostumevioletschool_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "f_hat_svcostumevioletschool_00_bundle_icon";
		setNames: ["svcostumevioletschool"];
		slot: ["HAT"];
		sortOrder: 101296;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHatSwshdlc2costume = AvatarCustomization<
	"AVATAR_f_hat_swshdlc2costume",
	{
		assetName: "f_hat_swshdlc2costume_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_swshdlc2costume_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "f_hat_swshdlc2costume_00_bundle_icon";
		setNames: ["swshdlc2costume"];
		slot: ["HAT"];
		sortOrder: 100799;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHatSwshuniformchampion = AvatarCustomization<
	"AVATAR_f_hat_swshuniformchampion",
	{
		assetName: "f_hat_swshuniformchampion_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_swshuniformchampion_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_swshuniformchampion_0";
		iconName: "f_hat_swshuniformchampion_00_bundle_icon";
		setNames: ["swshuniformchampion"];
		slot: ["HAT"];
		sortOrder: 101015;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatSylveonitems = AvatarCustomization<
	"AVATAR_f_hat_sylveonitems",
	{
		assetName: "f_hat_sylveonitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_sylveonitems_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_sylveonitems_0";
		iconName: "f_hat_sylveonitems_00_bundle_icon";
		setNames: ["sylveonitems"];
		slot: ["HAT"];
		sortOrder: 100917;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatTcgcollabtshirtandcap = AvatarCustomization<
	"AVATAR_f_hat_tcgcollabtshirtandcap",
	{
		assetName: "f_hat_tcgcollabtshirtandcap_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_tcgcollabtshirtandcap_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_tcgcollabtshirtandcap_0";
		iconName: "f_hat_tcgcollabtshirtandcap_00_bundle_icon";
		setNames: ["tcgcollabtshirtandcap"];
		slot: ["HAT"];
		sortOrder: 101200;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatTeamaqua = AvatarCustomization<
	"AVATAR_f_hat_teamaqua",
	{
		assetName: "f_hat_teamaqua_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_teamaqua_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_teamaqua_0";
		iconName: "f_hat_teamaqua_0_bundle_icon";
		setNames: ["teamaqua"];
		slot: ["HAT"];
		sortOrder: 100610;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatTeamleadercap0 = AvatarCustomization<
	"AVATAR_f_hat_teamleadercap_0",
	{
		assetName: "f_hat_teamleadercap_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_teamleadercap_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_teamleadercap_0";
		iconName: "f_hat_teamleadercap_0_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100602;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatTeamleadercap1 = AvatarCustomization<
	"AVATAR_f_hat_teamleadercap_1",
	{
		assetName: "f_hat_teamleadercap_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_teamleadercap_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_teamleadercap_1";
		iconName: "f_hat_teamleadercap_1_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100601;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatTeamleadercap2 = AvatarCustomization<
	"AVATAR_f_hat_teamleadercap_2",
	{
		assetName: "f_hat_teamleadercap_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_teamleadercap_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_teamleadercap_2";
		iconName: "f_hat_teamleadercap_2_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100600;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatTeamrocket0 = AvatarCustomization<
	"AVATAR_f_hat_teamrocket_0",
	{
		assetName: "f_hat_teamrocket_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_teamrocket_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_teamrocket_0";
		iconName: "f_hat_teamrocket_bundle_icon";
		setNames: ["teamrocket_0", "teamrocket_1"];
		slot: ["HAT"];
		sortOrder: 100599;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatTeamrocketcap = AvatarCustomization<
	"AVATAR_f_hat_teamrocketcap",
	{
		assetName: "f_hat_teamrocketcap_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_teamrocketcap_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_teamrocketcap_0";
		iconName: "f_hat_teamrocketcap_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100730;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatTeamskull = AvatarCustomization<
	"AVATAR_f_hat_teamskull",
	{
		assetName: "f_hat_teamskull_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_teamskull_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_teamskull_0";
		iconName: "f_hat_teamskull_00_bundle_icon";
		setNames: ["teamskull"];
		slot: ["HAT"];
		sortOrder: 101160;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatTophat0 = AvatarCustomization<
	"AVATAR_f_hat_tophat_0",
	{
		assetName: "f_hat_tophat_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_tophat_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_tophat_0";
		iconName: "f_hat_tophat_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100590;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatUltrareconsquad = AvatarCustomization<
	"AVATAR_f_hat_ultraReconSquad",
	{
		assetName: "f_hat_ultraReconSquad_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_ultrareconsquad_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_ultraReconSquad_0";
		iconName: "f_hat_ultrareconsquad_00_bundle_icon";
		setNames: ["ultraReconSquad"];
		slot: ["HAT"];
		sortOrder: 101242;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatUltrareconsquadb = AvatarCustomization<
	"AVATAR_f_hat_ultraReconSquadB",
	{
		assetName: "f_hat_ultraReconSquadB_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_ultrareconsquadb_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_ultraReconSquadB_0";
		iconName: "f_hat_ultrareconsquadb_00_bundle_icon";
		setNames: ["ultraReconSquadB"];
		slot: ["HAT"];
		sortOrder: 101249;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatUltra0 = AvatarCustomization<
	"AVATAR_f_hat_ultra_0",
	{
		assetName: "f_hat_ultra_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_ultra_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "f_hat_ultra_bundle_icon";
		setNames: ["ultra_0"];
		slot: ["HAT"];
		sortOrder: 100575;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHatVerizon2021 = AvatarCustomization<
	"AVATAR_f_hat_verizon2021",
	{
		assetName: "f_hat_verizon2021_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_verizon2021_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iconName: "f_hat_verizon2021_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101084;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFHatWcs2022winnersitems = AvatarCustomization<
	"AVATAR_f_hat_wcs2022winnersitems",
	{
		assetName: "f_hat_wcs2022winnersitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_wcs2022winnersitems_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_wcs2022winnersitems_0";
		iconName: "f_hat_wcs2022winnersitems_00_bundle_icon";
		setNames: ["wcs2022winnersitems"];
		slot: ["HAT"];
		sortOrder: 101216;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatWhimsicottearmuff = AvatarCustomization<
	"AVATAR_f_hat_whimsicottearmuff",
	{
		assetName: "f_hat_whimsicottearmuff_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_whimsicottearmuff_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_whimsicottearmuff_0";
		iconName: "f_hat_whimsicottearmuff_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100838;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatWillowglasses = AvatarCustomization<
	"AVATAR_f_hat_willowglasses",
	{
		assetName: "f_hat_willowglasses_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_willowglasses_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_willowglasses_0";
		iconName: "f_hat_willowglasses_0_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100627;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatWoobatearrings = AvatarCustomization<
	"AVATAR_f_hat_woobatearrings",
	{
		assetName: "f_hat_woobatearrings_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_woobatearrings_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_woobatearrings_0";
		iconName: "f_hat_woobatearrings_0_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100625;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatYamaskhat = AvatarCustomization<
	"AVATAR_f_hat_yamaskhat",
	{
		assetName: "f_hat_yamaskhat_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_yamaskhat_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_yamaskhat_0";
		iconName: "f_hat_yamaskhat_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100782;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatYamaskmask = AvatarCustomization<
	"AVATAR_f_hat_yamaskmask",
	{
		assetName: "f_hat_yamaskmask_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_yamaskmask_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_yamaskmask_0";
		iconName: "f_hat_yamaskmask_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101473;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFHatZubathat = AvatarCustomization<
	"AVATAR_f_hat_zubathat",
	{
		assetName: "f_hat_zubathat_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_hat_zubathat_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.f_hat_zubathat_0";
		iconName: "f_hat_zubathat_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101276;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFJacketNewyear2022 = AvatarCustomization<
	"AVATAR_f_jacket_newyear2022",
	{
		assetName: "f_shirt_newyear2022_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_newyear2022_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_newyear2022_0";
		iconName: "f_shirt_newyear2022_00_bundle_icon";
		setNames: ["newyear"];
		slot: ["SHIRT"];
		sortOrder: 101100;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFNecklaceDefault0 = AvatarCustomization<
	"AVATAR_f_necklace_default_0",
	{
		assetName: "f_necklace_default_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_necklace_default_bundle";
		enabled: true;
		groupName: "group_necklace";
		iconName: "f_necklace_default_bundle_icon";
		slot: ["NECKLACE"];
		sortOrder: 100573;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFNecklaceDefault1 = AvatarCustomization<
	"AVATAR_f_necklace_default_1",
	{
		assetName: "f_necklace_default_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_necklace_default_bundle";
		enabled: true;
		groupName: "group_necklace";
		iconName: "f_necklace_default_bundle_icon";
		slot: ["NECKLACE"];
		sortOrder: 100572;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFNecklaceEmpty = AvatarCustomization<
	"AVATAR_f_necklace_empty",
	{
		assetName: "f_necklace_empty";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_necklace_empty_bundle";
		enabled: true;
		groupName: "group_necklace";
		iconName: "f_necklace_empty_bundle_icon";
		slot: ["NECKLACE"];
		sortOrder: 100569;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFNecklaceHeart0 = AvatarCustomization<
	"AVATAR_f_necklace_heart_0",
	{
		assetName: "f_necklace_heart_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_necklace_heart_bundle";
		enabled: true;
		groupName: "group_necklace";
		iconName: "f_necklace_heart_bundle_icon";
		slot: ["NECKLACE"];
		sortOrder: 100571;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFNecklaceStar0 = AvatarCustomization<
	"AVATAR_f_necklace_star_0",
	{
		assetName: "f_necklace_star_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_necklace_star_bundle";
		enabled: true;
		groupName: "group_necklace";
		iconName: "f_necklace_star_bundle_icon";
		slot: ["NECKLACE"];
		sortOrder: 100570;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFPants6thanniversary = AvatarCustomization<
	"AVATAR_f_pants_6thanniversary",
	{
		assetName: "f_pants_6thanniversary_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_6thanniversary_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_6thanniversary_0";
		iconName: "f_pants_6thanniversary_00_bundle_icon";
		setNames: ["6thanniversary"];
		slot: ["PANTS"];
		sortOrder: 101213;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPants7thanniversary = AvatarCustomization<
	"AVATAR_f_pants_7thanniversary",
	{
		assetName: "f_pants_7thanniversary_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_7thanniversary_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_7thanniversary_0";
		iconName: "f_pants_7thanniversary_00_bundle_icon";
		setNames: ["7thanniversary"];
		slot: ["PANTS"];
		sortOrder: 101423;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsAcetrainerbw = AvatarCustomization<
	"AVATAR_f_pants_acetrainerbw",
	{
		assetName: "f_pants_acetrainerbw_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_acetrainerbw_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_acetrainerbw_0";
		iconName: "f_pants_acetrainerbw_0_bundle_icon";
		setNames: ["acetrainerbw"];
		slot: ["PANTS"];
		sortOrder: 100557;
		unlockBadgeLevel: 10;
		unlockBadgeType: "BADGE_BATTLE_TRAINING_WON";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsAnimegou = AvatarCustomization<
	"AVATAR_f_pants_animegou",
	{
		assetName: "f_pants_animegou_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_animegou_bundle";
		enabled: true;
		groupName: "group_pants";
		iconName: "f_pants_animegou_00_bundle_icon";
		setNames: ["animegou"];
		slot: ["PANTS"];
		sortOrder: 100815;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFPantsBackpacker = AvatarCustomization<
	"AVATAR_f_pants_backpacker",
	{
		assetName: "f_pants_backpacker_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_backpacker_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_backpacker_0";
		iconName: "f_pants_backpacker_0_bundle_icon";
		setNames: ["backpacker"];
		slot: ["PANTS"];
		sortOrder: 100560;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsBattlegirl0 = AvatarCustomization<
	"AVATAR_f_pants_battlegirl_0",
	{
		assetName: "f_pants_battlegirl_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_battlegirl_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_battlegirl_0";
		iconName: "f_pants_battlegirl_bundle_icon";
		setNames: ["battlegirl_0"];
		slot: ["PANTS"];
		sortOrder: 100553;
		unlockBadgeLevel: 100;
		unlockBadgeType: "BADGE_BATTLE_ATTACK_WON";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsBounsweetitems = AvatarCustomization<
	"AVATAR_f_pants_bounsweetitems",
	{
		assetName: "f_pants_bounsweetitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_bounsweetitems_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_bounsweetitems_0";
		iconName: "f_pants_bounsweetitems_00_bundle_icon";
		setNames: ["bounsweetitems"];
		slot: ["PANTS"];
		sortOrder: 101393;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsBwn = AvatarCustomization<
	"AVATAR_f_pants_bwn",
	{
		assetName: "f_pants_bwn_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_bwn_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_bwn_0";
		iconName: "f_pants_bwn_00_bundle_icon";
		setNames: ["bwn"];
		slot: ["PANTS"];
		sortOrder: 100833;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsCasual0 = AvatarCustomization<
	"AVATAR_f_pants_casual_0",
	{
		assetName: "f_pants_casual_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_casual_0_bundle";
		enabled: true;
		groupName: "group_pants";
		iconName: "f_pants_casual_0_bundle_icon";
		setNames: ["casual_0"];
		slot: ["PANTS"];
		sortOrder: 100559;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFPantsCasual1 = AvatarCustomization<
	"AVATAR_f_pants_casual_1",
	{
		assetName: "f_pants_casual_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_casual_1_bundle";
		enabled: true;
		groupName: "group_pants";
		iconName: "f_pants_casual_1_bundle_icon";
		setNames: ["casual_1"];
		slot: ["PANTS"];
		sortOrder: 100558;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFPantsClay = AvatarCustomization<
	"AVATAR_f_pants_clay",
	{
		assetName: "f_pants_clay_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_clay_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_clay_0";
		iconName: "f_pants_clay_00_bundle_icon";
		setNames: ["clay"];
		slot: ["PANTS"];
		sortOrder: 101407;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsDefault0 = AvatarCustomization<
	"AVATAR_f_pants_default_0",
	{
		assetName: "f_pants_default_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_default_bundle";
		enabled: true;
		groupName: "group_pants";
		iconName: "f_pants_default_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100527;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFPantsDefault1 = AvatarCustomization<
	"AVATAR_f_pants_default_1",
	{
		assetName: "f_pants_default_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_default_bundle";
		enabled: true;
		groupName: "group_pants";
		iconName: "f_pants_default_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100526;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFPantsDefault2 = AvatarCustomization<
	"AVATAR_f_pants_default_2",
	{
		assetName: "f_pants_default_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_default_bundle";
		enabled: true;
		groupName: "group_pants";
		iconName: "f_pants_default_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100525;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFPantsDefault3 = AvatarCustomization<
	"AVATAR_f_pants_default_3",
	{
		assetName: "f_pants_default_3";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_default_bundle";
		enabled: true;
		groupName: "group_pants";
		iconName: "f_pants_default_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100524;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFPantsDefault4 = AvatarCustomization<
	"AVATAR_f_pants_default_4",
	{
		assetName: "f_pants_default_4";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_default_bundle";
		enabled: true;
		groupName: "group_pants";
		iconName: "f_pants_default_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100523;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFPantsDefault5 = AvatarCustomization<
	"AVATAR_f_pants_default_5",
	{
		assetName: "f_pants_default_5";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_default_bundle";
		enabled: true;
		groupName: "group_pants";
		iconName: "f_pants_default_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100522;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFPantsDenimfashionweek2023 = AvatarCustomization<
	"AVATAR_f_pants_denimfashionweek2023",
	{
		assetName: "f_pants_denimfashionweek2023_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_denimfashionweek2023_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_denimfashionweek2023_0";
		iconName: "f_pants_denimfashionweek2023_00_bundle_icon";
		setNames: ["fashionweek2023"];
		slot: ["PANTS"];
		sortOrder: 101491;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsDp = AvatarCustomization<
	"AVATAR_f_pants_dp",
	{
		assetName: "f_pants_dp_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_dp_bundle";
		enabled: true;
		groupName: "group_pants";
		iconName: "f_pants_dp_00_bundle_icon";
		setNames: ["dp"];
		slot: ["PANTS"];
		sortOrder: 101069;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFPantsFashionweek2022 = AvatarCustomization<
	"AVATAR_f_pants_fashionWeek2022",
	{
		assetName: "f_pants_fashionWeek2022_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_fashionweek2022_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_fashionWeek2022_0";
		iconName: "f_pants_fashionweek2022_00_bundle_icon";
		setNames: ["fashionWeek2022"];
		slot: ["PANTS"];
		sortOrder: 101268;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsFlabebepack = AvatarCustomization<
	"AVATAR_f_pants_flabebepack",
	{
		assetName: "f_pants_flabebepack_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_flabebepack_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_flabebepack_0";
		iconName: "f_pants_flabebepack_00_bundle_icon";
		setNames: ["flabebepack"];
		slot: ["PANTS"];
		sortOrder: 101120;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsFrlg0 = AvatarCustomization<
	"AVATAR_f_pants_frlg_0",
	{
		assetName: "f_pants_frlg_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_frlg_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_frlg_0";
		iconName: "f_pants_frlg_bundle_icon";
		setNames: ["frlg_0"];
		slot: ["PANTS"];
		sortOrder: 100552;
		unlockBadgeLevel: 5;
		unlockBadgeType: "BADGE_POKEDEX_ENTRIES";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsFw2022 = AvatarCustomization<
	"AVATAR_f_pants_fw2022",
	{
		assetName: "f_pants_fw2022_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_fw2022_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_fw2022_0";
		iconName: "f_pants_fw2022_00_bundle_icon";
		setNames: ["fw2022"];
		slot: ["PANTS"];
		sortOrder: 101259;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsGeeta = AvatarCustomization<
	"AVATAR_f_pants_geeta",
	{
		assetName: "f_pants_geeta_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_geeta_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_geeta_0";
		iconName: "f_pants_geeta_00_bundle_icon";
		setNames: ["geeta"];
		slot: ["PANTS"];
		sortOrder: 101449;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsGenderlessskirt = AvatarCustomization<
	"AVATAR_f_pants_genderlessskirt",
	{
		assetName: "f_pants_genderlessskirt_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_genderlessskirt_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_genderlessskirt_0";
		iconName: "f_pants_genderlessskirt_00_bundle_icon";
		setNames: ["genderlessskirt"];
		slot: ["PANTS"];
		sortOrder: 101024;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsGiovanni = AvatarCustomization<
	"AVATAR_f_pants_giovanni",
	{
		assetName: "f_pants_giovanni_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_giovanni_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_giovanni_0";
		iconName: "f_pants_giovanni_0_bundle_icon";
		setNames: ["giovanni"];
		slot: ["PANTS"];
		sortOrder: 100565;
		unlockBadgeLevel: 5;
		unlockBadgeType: "BADGE_ROCKET_GIOVANNI_DEFEATED";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsGladion = AvatarCustomization<
	"AVATAR_f_pants_gladion",
	{
		assetName: "f_pants_gladion_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_gladion_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_gladion_0";
		iconName: "f_pants_gladion_00_bundle_icon";
		setNames: ["gladion"];
		slot: ["PANTS"];
		sortOrder: 101135;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsGothitelleitems = AvatarCustomization<
	"AVATAR_f_pants_gothitelleitems",
	{
		assetName: "f_pants_gothitelleitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_gothitelleitems_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_gothitelleitems_0";
		iconName: "f_pants_gothitelleitems_00_bundle_icon";
		setNames: ["gothitelleitems"];
		slot: ["PANTS"];
		sortOrder: 101502;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsGreen = AvatarCustomization<
	"AVATAR_f_pants_green",
	{
		assetName: "f_pants_green_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_green_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.gbl.avatar.f_pants_green_0";
		iconName: "f_pants_green_00_bundle_icon";
		setNames: ["green"];
		slot: ["PANTS"];
		sortOrder: 100737;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsGreencoat = AvatarCustomization<
	"AVATAR_f_pants_greencoat",
	{
		assetName: "f_pants_greencoat_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_greencoat_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_greencoat_0";
		iconName: "f_pants_greencoat_00_bundle_icon";
		setNames: ["greencoat"];
		slot: ["PANTS"];
		sortOrder: 101095;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsGuzma = AvatarCustomization<
	"AVATAR_f_pants_guzma",
	{
		assetName: "f_pants_guzma_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_guzma_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_guzma_0";
		iconName: "f_pants_guzma_00_bundle_icon";
		setNames: ["guzma"];
		slot: ["PANTS"];
		sortOrder: 101241;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsGymleader0 = AvatarCustomization<
	"AVATAR_f_pants_gymleader_0",
	{
		assetName: "f_pants_gymleader_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_gymleader_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_gymleader_0";
		iconName: "f_pants_gymleader_bundle_icon";
		setNames: ["gymleader_0"];
		slot: ["PANTS"];
		sortOrder: 100551;
		unlockBadgeLevel: 100;
		unlockBadgeType: "BADGE_HOURS_DEFENDED";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsGymleader1 = AvatarCustomization<
	"AVATAR_f_pants_gymleader_1",
	{
		assetName: "f_pants_gymleader_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_gymleader_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_gymleader_1";
		iconName: "f_pants_gymleader_bundle_icon";
		setNames: ["gymleader_1"];
		slot: ["PANTS"];
		sortOrder: 100550;
		unlockBadgeLevel: 100;
		unlockBadgeType: "BADGE_HOURS_DEFENDED";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsGymleader2 = AvatarCustomization<
	"AVATAR_f_pants_gymleader_2",
	{
		assetName: "f_pants_gymleader_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_gymleader_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_gymleader_2";
		iconName: "f_pants_gymleader_bundle_icon";
		setNames: ["gymleader_2"];
		slot: ["PANTS"];
		sortOrder: 100549;
		unlockBadgeLevel: 100;
		unlockBadgeType: "BADGE_HOURS_DEFENDED";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsHala = AvatarCustomization<
	"AVATAR_f_pants_hala",
	{
		assetName: "f_pants_hala_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_hala_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_hala_0";
		iconName: "f_pants_hala_00_bundle_icon";
		setNames: ["hala"];
		slot: ["PANTS"];
		sortOrder: 101582;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsHgss0 = AvatarCustomization<
	"AVATAR_f_pants_hgss_0",
	{
		assetName: "f_pants_hgss_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_hgss_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_hgss_0";
		iconName: "f_pants_hgss_bundle_icon";
		setNames: ["hgss_0"];
		slot: ["PANTS"];
		sortOrder: 100548;
		unlockBadgeLevel: 5;
		unlockBadgeType: "BADGE_POKEDEX_ENTRIES_GEN2";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsIngo = AvatarCustomization<
	"AVATAR_f_pants_ingo",
	{
		assetName: "f_pants_ingo_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_ingo_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_ingo_0";
		iconName: "f_pants_ingo_00_bundle_icon";
		setNames: ["ingo"];
		slot: ["PANTS"];
		sortOrder: 101510;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsLoosepants = AvatarCustomization<
	"AVATAR_f_pants_loosepants",
	{
		assetName: "f_pants_loosepants_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_loosepants_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_loosepants_0";
		iconName: "f_pants_loosepants_0_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100568;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsLunalaitems = AvatarCustomization<
	"AVATAR_f_pants_lunalaitems",
	{
		assetName: "f_pants_lunalaitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_lunalaitems_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_lunalaitems_0";
		iconName: "f_pants_lunalaitems_00_bundle_icon";
		setNames: ["lunalaitems"];
		slot: ["PANTS"];
		sortOrder: 101303;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsLuvdiscpack = AvatarCustomization<
	"AVATAR_f_pants_luvdiscpack",
	{
		assetName: "f_pants_luvdiscpack_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_luvdiscpack_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_luvdiscpack_0";
		iconName: "f_pants_luvdiscpack_0_bundle_icon";
		setNames: ["luvdiscpack"];
		slot: ["PANTS"];
		sortOrder: 100567;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsLysandre = AvatarCustomization<
	"AVATAR_f_pants_lysandre",
	{
		assetName: "f_pants_lysandre_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_lysandre_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_lysandre_0";
		iconName: "f_pants_lysandre_00_bundle_icon";
		setNames: ["lysandre"];
		slot: ["PANTS"];
		sortOrder: 101081;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsMewtwo = AvatarCustomization<
	"AVATAR_f_pants_mewtwo",
	{
		assetName: "f_pants_mewtwo_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_mewtwo_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_mewtwo_0";
		iconName: "f_pants_mewtwo_0_bundle_icon";
		setNames: ["mewtwo"];
		slot: ["PANTS"];
		sortOrder: 100564;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsMiniskirt0 = AvatarCustomization<
	"AVATAR_f_pants_miniskirt_0",
	{
		assetName: "f_pants_miniskirt_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_miniskirt_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_miniskirt_0";
		iconName: "f_pants_miniskirt_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100547;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsMiniskirt1 = AvatarCustomization<
	"AVATAR_f_pants_miniskirt_1",
	{
		assetName: "f_pants_miniskirt_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_miniskirt_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_miniskirt_1";
		iconName: "f_pants_miniskirt_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100546;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsMiniskirt2 = AvatarCustomization<
	"AVATAR_f_pants_miniskirt_2",
	{
		assetName: "f_pants_miniskirt_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_miniskirt_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_miniskirt_2";
		iconName: "f_pants_miniskirt_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100545;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsMiniskirt3 = AvatarCustomization<
	"AVATAR_f_pants_miniskirt_3",
	{
		assetName: "f_pants_miniskirt_3";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_miniskirt_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_miniskirt_3";
		iconName: "f_pants_miniskirt_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100544;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsMiniskirtWave0 = AvatarCustomization<
	"AVATAR_f_pants_miniskirt_wave_0",
	{
		assetName: "f_pants_miniskirt_wave_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_miniskirt_bundle";
		enabled: true;
		groupName: "group_pants";
		iconName: "f_pants_miniskirt_wave_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100521;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFPantsMiniskirtWave1 = AvatarCustomization<
	"AVATAR_f_pants_miniskirt_wave_1",
	{
		assetName: "f_pants_miniskirt_wave_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_miniskirt_bundle";
		enabled: true;
		groupName: "group_pants";
		iconName: "f_pants_miniskirt_wave_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100520;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFPantsMiniskirtWave2 = AvatarCustomization<
	"AVATAR_f_pants_miniskirt_wave_2",
	{
		assetName: "f_pants_miniskirt_wave_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_miniskirt_bundle";
		enabled: true;
		groupName: "group_pants";
		iconName: "f_pants_miniskirt_wave_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100519;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFPantsMisty = AvatarCustomization<
	"AVATAR_f_pants_misty",
	{
		assetName: "f_pants_misty_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_misty_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_misty_0";
		iconName: "f_pants_misty_0_bundle_icon";
		setNames: ["misty"];
		slot: ["PANTS"];
		sortOrder: 100543;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsMunnapack = AvatarCustomization<
	"AVATAR_f_pants_munnapack",
	{
		assetName: "f_pants_munnapack_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_munnapack_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_munnapack_0";
		iconName: "f_pants_munnapack_00_bundle_icon";
		setNames: ["munnapack_0", "munnapack_1"];
		slot: ["PANTS"];
		sortOrder: 100866;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsNeonSolid0 = AvatarCustomization<
	"AVATAR_f_pants_neon_solid_0",
	{
		assetName: "f_pants_neon_solid_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_neon_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_neon_solid_0";
		iconName: "f_pants_neon_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100542;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsNeonSolid1 = AvatarCustomization<
	"AVATAR_f_pants_neon_solid_1",
	{
		assetName: "f_pants_neon_solid_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_neon_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_neon_solid_1";
		iconName: "f_pants_neon_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100541;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsNeonSolid2 = AvatarCustomization<
	"AVATAR_f_pants_neon_solid_2",
	{
		assetName: "f_pants_neon_solid_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_neon_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_neon_solid_2";
		iconName: "f_pants_neon_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100540;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsNeonStripes0 = AvatarCustomization<
	"AVATAR_f_pants_neon_stripes_0",
	{
		assetName: "f_pants_neon_stripes_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_neon_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_neon_stripes_0";
		iconName: "f_pants_neon_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100539;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsNeonStripes1 = AvatarCustomization<
	"AVATAR_f_pants_neon_stripes_1",
	{
		assetName: "f_pants_neon_stripes_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_neon_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_neon_stripes_1";
		iconName: "f_pants_neon_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100538;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsNewyear2022 = AvatarCustomization<
	"AVATAR_f_pants_newyear2022",
	{
		assetName: "f_pants_newyear2022_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_newyear2022_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_newyear2022_0";
		iconName: "f_pants_newyear2022_00_bundle_icon";
		setNames: ["newyear"];
		slot: ["PANTS"];
		sortOrder: 101101;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsOras = AvatarCustomization<
	"AVATAR_f_pants_oras",
	{
		assetName: "f_pants_oras_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_oras_bundle";
		enabled: true;
		groupName: "group_pants";
		iconName: "f_pants_oras_00_bundle_icon";
		setNames: ["oras"];
		slot: ["PANTS"];
		sortOrder: 101355;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFPantsPajamas20220 = AvatarCustomization<
	"AVATAR_f_pants_pajamas2022_0",
	{
		assetName: "f_pants_pajamas2022_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_pajamas2022_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_pajamas2022_0";
		iconName: "f_pants_pajamas2022_bundle_icon";
		setNames: ["pajamas2022_0"];
		slot: ["PANTS"];
		sortOrder: 101326;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsPajamas20221 = AvatarCustomization<
	"AVATAR_f_pants_pajamas2022_1",
	{
		assetName: "f_pants_pajamas2022_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_pajamas2022_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_pajamas2022_1";
		iconName: "f_pants_pajamas2022_bundle_icon";
		setNames: ["pajamas2022_1"];
		slot: ["PANTS"];
		sortOrder: 101332;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsPalmer = AvatarCustomization<
	"AVATAR_f_pants_palmer",
	{
		assetName: "f_pants_palmer_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_palmer_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_palmer_0";
		iconName: "f_pants_palmer_00_bundle_icon";
		setNames: ["palmer"];
		slot: ["PANTS"];
		sortOrder: 101372;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsPikachufan0 = AvatarCustomization<
	"AVATAR_f_pants_pikachufan_0",
	{
		assetName: "f_pants_pikachufan_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_pikachufan_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_pikachufan_0";
		iconName: "f_pants_pikachufan_bundle_icon";
		setNames: ["pikachufan_0"];
		slot: ["PANTS"];
		sortOrder: 100537;
		unlockBadgeLevel: 50;
		unlockBadgeType: "BADGE_PIKACHU";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsPikachulibre = AvatarCustomization<
	"AVATAR_f_pants_pikachulibre",
	{
		assetName: "f_pants_pikachulibre_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_pikachulibre_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_pikachulibre_0";
		iconName: "f_pants_pikachulibre_0_bundle_icon";
		setNames: ["pikachulibre"];
		slot: ["PANTS"];
		sortOrder: 100566;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsProfwillowoutfit = AvatarCustomization<
	"AVATAR_f_pants_profwillowoutfit",
	{
		assetName: "f_pants_profwillowoutfit_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_profwillowoutfit_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_profwillowoutfit_0";
		iconName: "f_pants_profwillowoutfit_00_bundle_icon";
		setNames: ["profwillowoutfit"];
		slot: ["PANTS"];
		sortOrder: 101374;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsPumpkabooitems = AvatarCustomization<
	"AVATAR_f_pants_pumpkabooitems",
	{
		assetName: "f_pants_pumpkabooitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_pumpkabooitems_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_pumpkabooitems_0";
		iconName: "f_pants_pumpkabooitems_00_bundle_icon";
		setNames: ["pumpkabooitems"];
		slot: ["PANTS"];
		sortOrder: 101042;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsRegiicejersies = AvatarCustomization<
	"AVATAR_f_pants_regiicejersies",
	{
		assetName: "f_pants_regiicejersies_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_regiicejersies_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_regiicejersies_0";
		iconName: "f_pants_regiicejersies_00_bundle_icon";
		setNames: ["regiicejersies"];
		slot: ["PANTS"];
		sortOrder: 100942;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsRegirockjersies = AvatarCustomization<
	"AVATAR_f_pants_regirockjersies",
	{
		assetName: "f_pants_regirockjersies_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_regirockjersies_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_regirockjersies_0";
		iconName: "f_pants_regirockjersies_00_bundle_icon";
		setNames: ["regirockjersies"];
		slot: ["PANTS"];
		sortOrder: 100934;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsRegisteeljersies = AvatarCustomization<
	"AVATAR_f_pants_registeeljersies",
	{
		assetName: "f_pants_registeeljersies_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_registeeljersies_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_registeeljersies_0";
		iconName: "f_pants_registeeljersies_00_bundle_icon";
		setNames: ["registeeljersies"];
		slot: ["PANTS"];
		sortOrder: 100950;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsShorts0 = AvatarCustomization<
	"AVATAR_f_pants_shorts_0",
	{
		assetName: "f_pants_shorts_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_shorts_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_shorts_0";
		iconName: "f_pants_shorts_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100536;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsShorts1 = AvatarCustomization<
	"AVATAR_f_pants_shorts_1",
	{
		assetName: "f_pants_shorts_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_shorts_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_shorts_1";
		iconName: "f_pants_shorts_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100535;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsShorts2 = AvatarCustomization<
	"AVATAR_f_pants_shorts_2",
	{
		assetName: "f_pants_shorts_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_shorts_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_shorts_2";
		iconName: "f_pants_shorts_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100534;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsShorts3 = AvatarCustomization<
	"AVATAR_f_pants_shorts_3",
	{
		assetName: "f_pants_shorts_3";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_shorts_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_shorts_3";
		iconName: "f_pants_shorts_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100533;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsSkinnyjeans0 = AvatarCustomization<
	"AVATAR_f_pants_skinnyjeans_0",
	{
		assetName: "f_pants_skinnyjeans_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_skinnyjeans_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_skinnyjeans_0";
		iconName: "f_pants_skinnyjeans_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100532;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsSteven = AvatarCustomization<
	"AVATAR_f_pants_steven",
	{
		assetName: "f_pants_steven_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_steven_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_steven_0";
		iconName: "f_pants_steven_0_bundle_icon";
		setNames: ["steven"];
		slot: ["PANTS"];
		sortOrder: 100727;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsStevenfirst = AvatarCustomization<
	"AVATAR_f_pants_stevenfirst",
	{
		assetName: "f_pants_stevenfirst_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_stevenfirst_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_stevenfirst_0";
		iconName: "f_pants_stevenfirst_00_bundle_icon";
		setNames: ["stevenfirst"];
		slot: ["PANTS"];
		sortOrder: 101316;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsSwshdlc2costume = AvatarCustomization<
	"AVATAR_f_pants_swshdlc2costume",
	{
		assetName: "f_pants_swshdlc2costume_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_swshdlc2costume_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_swshdlc2costume_0";
		iconName: "f_pants_swshdlc2costume_00_bundle_icon";
		setNames: ["swshdlc2costume"];
		slot: ["PANTS"];
		sortOrder: 100789;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsSwshuniformchampion = AvatarCustomization<
	"AVATAR_f_pants_swshuniformchampion",
	{
		assetName: "f_pants_swshuniformchampion_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_swshuniformchampion_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_swshuniformchampion_0";
		iconName: "f_pants_swshuniformchampion_00_bundle_icon";
		setNames: ["swshuniformchampion"];
		slot: ["PANTS"];
		sortOrder: 101014;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsSwshuniformdark = AvatarCustomization<
	"AVATAR_f_pants_swshuniformdark",
	{
		assetName: "f_pants_swshuniformdark_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_swshuniformdark_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_swshuniformdark_0";
		iconName: "f_pants_swshuniformdark_00_bundle_icon";
		setNames: ["swshuniformdark"];
		slot: ["PANTS"];
		sortOrder: 101006;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsSwshuniformdefault = AvatarCustomization<
	"AVATAR_f_pants_swshuniformdefault",
	{
		assetName: "f_pants_swshuniformdefault_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_swshuniformdefault_bundle";
		enabled: true;
		groupName: "group_pants";
		iconName: "f_pants_swshuniformdefault_00_bundle_icon";
		setNames: ["swshuniformdefault"];
		slot: ["PANTS"];
		sortOrder: 100997;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFPantsSwshuniformdragon = AvatarCustomization<
	"AVATAR_f_pants_swshuniformdragon",
	{
		assetName: "f_pants_swshuniformdragon_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_swshuniformdragon_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_swshuniformdragon_0";
		iconName: "f_pants_swshuniformdragon_00_bundle_icon";
		setNames: ["swshuniformdragon"];
		slot: ["PANTS"];
		sortOrder: 100987;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsTeamaqua = AvatarCustomization<
	"AVATAR_f_pants_teamaqua",
	{
		assetName: "f_pants_teamaqua_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_teamaqua_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_teamaqua_0";
		iconName: "f_pants_teamaqua_0_bundle_icon";
		setNames: ["teamaqua"];
		slot: ["PANTS"];
		sortOrder: 100554;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsTeamblanche = AvatarCustomization<
	"AVATAR_f_pants_teamblanche",
	{
		assetName: "f_pants_teamblanche_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_teamblanche_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_teamblanche_0";
		iconName: "f_pants_teamblanche_0_bundle_icon";
		setNames: ["teamblanche"];
		slot: ["PANTS"];
		sortOrder: 100561;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsTeamcandela = AvatarCustomization<
	"AVATAR_f_pants_teamcandela",
	{
		assetName: "f_pants_teamcandela_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_teamcandela_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_teamcandela_0";
		iconName: "f_pants_teamcandela_0_bundle_icon";
		setNames: ["teamcandela"];
		slot: ["PANTS"];
		sortOrder: 100562;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsTeammagma = AvatarCustomization<
	"AVATAR_f_pants_teammagma",
	{
		assetName: "f_pants_teammagma_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_teammagma_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_teammagma_0";
		iconName: "f_pants_teammagma_0_bundle_icon";
		setNames: ["teammagma"];
		slot: ["PANTS"];
		sortOrder: 100555;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsTeamrocket0 = AvatarCustomization<
	"AVATAR_f_pants_teamrocket_0",
	{
		assetName: "f_pants_teamrocket_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_teamrocket_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_teamrocket_0";
		iconName: "f_pants_teamrocket_bundle_icon";
		setNames: ["teamrocket_0", "teamrocket_1"];
		slot: ["PANTS"];
		sortOrder: 100531;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsTeamskull = AvatarCustomization<
	"AVATAR_f_pants_teamskull",
	{
		assetName: "f_pants_teamskull_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_teamskull_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_teamskull_0";
		iconName: "f_pants_teamskull_00_bundle_icon";
		setNames: ["teamskull"];
		slot: ["PANTS"];
		sortOrder: 101159;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsTeamspark = AvatarCustomization<
	"AVATAR_f_pants_teamspark",
	{
		assetName: "f_pants_teamspark_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_teamspark_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_teamspark_0";
		iconName: "f_pants_teamspark_0_bundle_icon";
		setNames: ["teamspark"];
		slot: ["PANTS"];
		sortOrder: 100563;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsTurbine0 = AvatarCustomization<
	"AVATAR_f_pants_turbine_0",
	{
		assetName: "f_pants_miniskirt_turbine_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_miniskirt_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_miniskirt_turbine_0";
		iconName: "f_pants_miniskirt_turbine_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100530;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsTurbine1 = AvatarCustomization<
	"AVATAR_f_pants_turbine_1",
	{
		assetName: "f_pants_miniskirt_turbine_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_miniskirt_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_miniskirt_turbine_1";
		iconName: "f_pants_miniskirt_turbine_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100529;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsTurbine2 = AvatarCustomization<
	"AVATAR_f_pants_turbine_2",
	{
		assetName: "f_pants_miniskirt_turbine_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_miniskirt_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_miniskirt_turbine_2";
		iconName: "f_pants_miniskirt_turbine_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100528;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsUltra0 = AvatarCustomization<
	"AVATAR_f_pants_ultra_0",
	{
		assetName: "f_pants_ultra_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_ultra_bundle";
		enabled: true;
		groupName: "group_pants";
		iconName: "f_pants_ultra_bundle_icon";
		setNames: ["ultra_0"];
		slot: ["PANTS"];
		sortOrder: 100518;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFPantsVeterantrainerxy = AvatarCustomization<
	"AVATAR_f_pants_veterantrainerxy",
	{
		assetName: "f_pants_veterantrainerxy_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_veterantrainerxy_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_veterantrainerxy_0";
		iconName: "f_pants_veterantrainerxy_0_bundle_icon";
		setNames: ["veterantrainerxy"];
		slot: ["PANTS"];
		sortOrder: 100556;
		unlockBadgeLevel: 200;
		unlockBadgeType: "BADGE_GREAT_LEAGUE";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPantsWcs2022winnersitems = AvatarCustomization<
	"AVATAR_f_pants_wcs2022winnersitems",
	{
		assetName: "f_pants_wcs2022winnersitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_pants_wcs2022winnersitems_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.f_pants_wcs2022winnersitems_0";
		iconName: "f_pants_wcs2022winnersitems_00_bundle_icon";
		setNames: ["wcs2022winnersitems"];
		slot: ["PANTS"];
		sortOrder: 101221;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose01 = AvatarCustomization<
	"AVATAR_f_pose_01",
	{
		assetName: "pose_01";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_01";
		iconName: "pose_01";
		slot: ["POSE"];
		sortOrder: 3;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose02 = AvatarCustomization<
	"AVATAR_f_pose_02",
	{
		assetName: "pose_02";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_02";
		iconName: "pose_02";
		slot: ["POSE"];
		sortOrder: 4;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose03 = AvatarCustomization<
	"AVATAR_f_pose_03",
	{
		assetName: "pose_03";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_03";
		iconName: "pose_03";
		slot: ["POSE"];
		sortOrder: 5;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose04 = AvatarCustomization<
	"AVATAR_f_pose_04",
	{
		assetName: "pose_04";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_04";
		iconName: "pose_04";
		slot: ["POSE"];
		sortOrder: 6;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose05 = AvatarCustomization<
	"AVATAR_f_pose_05",
	{
		assetName: "pose_05";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_05";
		iconName: "pose_05";
		slot: ["POSE"];
		sortOrder: 7;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose06 = AvatarCustomization<
	"AVATAR_f_pose_06",
	{
		assetName: "pose_06";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_06";
		iconName: "pose_06";
		slot: ["POSE"];
		sortOrder: 8;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose07 = AvatarCustomization<
	"AVATAR_f_pose_07",
	{
		assetName: "pose_07";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_07";
		iconName: "pose_07";
		slot: ["POSE"];
		sortOrder: 9;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose08 = AvatarCustomization<
	"AVATAR_f_pose_08",
	{
		assetName: "pose_08";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_08";
		iconName: "pose_08";
		slot: ["POSE"];
		sortOrder: 10;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose09 = AvatarCustomization<
	"AVATAR_f_pose_09",
	{
		assetName: "pose_09";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_09";
		iconName: "pose_09";
		slot: ["POSE"];
		sortOrder: 11;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose10 = AvatarCustomization<
	"AVATAR_f_pose_10",
	{
		assetName: "pose_10";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_10";
		iconName: "pose_10";
		slot: ["POSE"];
		sortOrder: 12;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose11 = AvatarCustomization<
	"AVATAR_f_pose_11",
	{
		assetName: "pose_11";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_01";
		iconName: "pose_11";
		slot: ["POSE"];
		sortOrder: 13;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose12 = AvatarCustomization<
	"AVATAR_f_pose_12",
	{
		assetName: "pose_12";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_02";
		iconName: "pose_12";
		slot: ["POSE"];
		sortOrder: 14;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose13 = AvatarCustomization<
	"AVATAR_f_pose_13",
	{
		assetName: "pose_13";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_03";
		iconName: "pose_13";
		slot: ["POSE"];
		sortOrder: 15;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose14 = AvatarCustomization<
	"AVATAR_f_pose_14",
	{
		assetName: "pose_14";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_04";
		iconName: "pose_14";
		slot: ["POSE"];
		sortOrder: 16;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose15 = AvatarCustomization<
	"AVATAR_f_pose_15",
	{
		assetName: "pose_15";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_05";
		iconName: "pose_15";
		slot: ["POSE"];
		sortOrder: 17;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose16 = AvatarCustomization<
	"AVATAR_f_pose_16",
	{
		assetName: "pose_16";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_06";
		iconName: "pose_16";
		slot: ["POSE"];
		sortOrder: 18;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose17 = AvatarCustomization<
	"AVATAR_f_pose_17",
	{
		assetName: "pose_17";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_07";
		iconName: "pose_17";
		slot: ["POSE"];
		sortOrder: 19;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose18 = AvatarCustomization<
	"AVATAR_f_pose_18",
	{
		assetName: "pose_18";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_08";
		iconName: "pose_18";
		slot: ["POSE"];
		sortOrder: 20;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose19 = AvatarCustomization<
	"AVATAR_f_pose_19",
	{
		assetName: "pose_19";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_09";
		iconName: "pose_19";
		slot: ["POSE"];
		sortOrder: 21;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose20 = AvatarCustomization<
	"AVATAR_f_pose_20",
	{
		assetName: "pose_20";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_10";
		iconName: "pose_20";
		slot: ["POSE"];
		sortOrder: 22;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose21 = AvatarCustomization<
	"AVATAR_f_pose_21",
	{
		assetName: "pose_21";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.donotsku.f_pose21";
		iconName: "pose_21";
		slot: ["POSE"];
		sortOrder: 43;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose22 = AvatarCustomization<
	"AVATAR_f_pose_22",
	{
		assetName: "pose_22";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.gbl.avatar.f_pose_22";
		iconName: "pose_22";
		slot: ["POSE"];
		sortOrder: 45;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose23 = AvatarCustomization<
	"AVATAR_f_pose_23",
	{
		assetName: "pose_23";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_23";
		iconName: "pose_23";
		slot: ["POSE"];
		sortOrder: 47;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose24 = AvatarCustomization<
	"AVATAR_f_pose_24",
	{
		assetName: "pose_24";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_24";
		iconName: "pose_24";
		slot: ["POSE"];
		sortOrder: 49;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose25 = AvatarCustomization<
	"AVATAR_f_pose_25",
	{
		assetName: "pose_25";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_25";
		iconName: "pose_25";
		slot: ["POSE"];
		sortOrder: 51;
		unlockPlayerLevel: 43;
		unlockType: "LEVEL_REWARD";
	}
>;
export type AvatarCustomizationFPose26 = AvatarCustomization<
	"AVATAR_f_pose_26",
	{
		assetName: "pose_26";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_26";
		iconName: "pose_26";
		slot: ["POSE"];
		sortOrder: 53;
		unlockPlayerLevel: 47;
		unlockType: "LEVEL_REWARD";
	}
>;
export type AvatarCustomizationFPose27 = AvatarCustomization<
	"AVATAR_f_pose_27",
	{
		assetName: "pose_27";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_27";
		iconName: "pose_27";
		slot: ["POSE"];
		sortOrder: 55;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose28 = AvatarCustomization<
	"AVATAR_f_pose_28",
	{
		assetName: "pose_28";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_28";
		iconName: "pose_28";
		slot: ["POSE"];
		sortOrder: 57;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose29 = AvatarCustomization<
	"AVATAR_f_pose_29",
	{
		assetName: "pose_29";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_29";
		iconName: "pose_29";
		slot: ["POSE"];
		sortOrder: 59;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose30 = AvatarCustomization<
	"AVATAR_f_pose_30",
	{
		assetName: "pose_30";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_30";
		iconName: "pose_30";
		slot: ["POSE"];
		sortOrder: 61;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose31 = AvatarCustomization<
	"AVATAR_f_pose_31",
	{
		assetName: "pose_31";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_31";
		iconName: "pose_31";
		slot: ["POSE"];
		sortOrder: 63;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose32 = AvatarCustomization<
	"AVATAR_f_pose_32",
	{
		assetName: "pose_32";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_32";
		iconName: "pose_32";
		slot: ["POSE"];
		sortOrder: 65;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose33 = AvatarCustomization<
	"AVATAR_f_pose_33",
	{
		assetName: "pose_33";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_33";
		iconName: "pose_33";
		slot: ["POSE"];
		sortOrder: 67;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose34 = AvatarCustomization<
	"AVATAR_f_pose_34",
	{
		assetName: "pose_34";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_34";
		iconName: "pose_34";
		slot: ["POSE"];
		sortOrder: 69;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose35 = AvatarCustomization<
	"AVATAR_f_pose_35",
	{
		assetName: "pose_35";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_35";
		iconName: "pose_35";
		slot: ["POSE"];
		sortOrder: 71;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose36 = AvatarCustomization<
	"AVATAR_f_pose_36",
	{
		assetName: "pose_36";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_36";
		iconName: "pose_36";
		slot: ["POSE"];
		sortOrder: 73;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose37 = AvatarCustomization<
	"AVATAR_f_pose_37",
	{
		assetName: "pose_37";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_37";
		iconName: "pose_37";
		slot: ["POSE"];
		sortOrder: 75;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose38 = AvatarCustomization<
	"AVATAR_f_pose_38",
	{
		assetName: "pose_38";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_38";
		iconName: "pose_38";
		slot: ["POSE"];
		sortOrder: 77;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose39 = AvatarCustomization<
	"AVATAR_f_pose_39",
	{
		assetName: "pose_39";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_39";
		iconName: "pose_39";
		slot: ["POSE"];
		sortOrder: 79;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose40 = AvatarCustomization<
	"AVATAR_f_pose_40",
	{
		assetName: "pose_40";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_40";
		iconName: "pose_40";
		slot: ["POSE"];
		sortOrder: 81;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose41 = AvatarCustomization<
	"AVATAR_f_pose_41",
	{
		assetName: "pose_41";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_41";
		iconName: "pose_41";
		slot: ["POSE"];
		sortOrder: 83;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose43 = AvatarCustomization<
	"AVATAR_f_pose_43",
	{
		assetName: "pose_43";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_43";
		iconName: "pose_43";
		slot: ["POSE"];
		sortOrder: 85;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose44 = AvatarCustomization<
	"AVATAR_f_pose_44",
	{
		assetName: "pose_44";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_44";
		iconName: "pose_44";
		slot: ["POSE"];
		sortOrder: 87;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose45 = AvatarCustomization<
	"AVATAR_f_pose_45",
	{
		assetName: "pose_45";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_45";
		iconName: "pose_45";
		slot: ["POSE"];
		sortOrder: 89;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose46 = AvatarCustomization<
	"AVATAR_f_pose_46",
	{
		assetName: "pose_46";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_46";
		iconName: "pose_46";
		slot: ["POSE"];
		sortOrder: 91;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose47 = AvatarCustomization<
	"AVATAR_f_pose_47",
	{
		assetName: "pose_47";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_47";
		iconName: "pose_47";
		slot: ["POSE"];
		sortOrder: 93;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose48 = AvatarCustomization<
	"AVATAR_f_pose_48",
	{
		assetName: "pose_48";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_48";
		iconName: "pose_48";
		slot: ["POSE"];
		sortOrder: 95;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose49 = AvatarCustomization<
	"AVATAR_f_pose_49",
	{
		assetName: "pose_49";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_49";
		iconName: "pose_49";
		slot: ["POSE"];
		sortOrder: 97;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose50 = AvatarCustomization<
	"AVATAR_f_pose_50",
	{
		assetName: "pose_50";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_50";
		iconName: "pose_50";
		slot: ["POSE"];
		sortOrder: 99;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose51 = AvatarCustomization<
	"AVATAR_f_pose_51",
	{
		assetName: "pose_51";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_51";
		iconName: "pose_51";
		slot: ["POSE"];
		sortOrder: 101;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose52 = AvatarCustomization<
	"AVATAR_f_pose_52",
	{
		assetName: "pose_52";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_52";
		iconName: "pose_52";
		slot: ["POSE"];
		sortOrder: 103;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose53 = AvatarCustomization<
	"AVATAR_f_pose_53",
	{
		assetName: "pose_53";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_53";
		iconName: "pose_53";
		slot: ["POSE"];
		sortOrder: 1105;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose54 = AvatarCustomization<
	"AVATAR_f_pose_54",
	{
		assetName: "pose_54";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iconName: "pose_54";
		slot: ["POSE"];
		sortOrder: 1107;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFPose55 = AvatarCustomization<
	"AVATAR_f_pose_55",
	{
		assetName: "pose_55";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_55";
		iconName: "pose_55";
		slot: ["POSE"];
		sortOrder: 1109;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose56 = AvatarCustomization<
	"AVATAR_f_pose_56",
	{
		assetName: "pose_56";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_56";
		iconName: "pose_56";
		slot: ["POSE"];
		sortOrder: 1111;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose57 = AvatarCustomization<
	"AVATAR_f_pose_57",
	{
		assetName: "pose_57";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_57";
		iconName: "pose_57";
		slot: ["POSE"];
		sortOrder: 1113;
		unlockBadgeLevel: 50;
		unlockBadgeType: "BADGE_MAX_SIZE_FIRST_PLACE_WIN";
		unlockType: "MEDAL_REWARD";
	}
>;
export type AvatarCustomizationFPose58 = AvatarCustomization<
	"AVATAR_f_pose_58",
	{
		assetName: "pose_58";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_58";
		iconName: "pose_58";
		slot: ["POSE"];
		sortOrder: 1115;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose59 = AvatarCustomization<
	"AVATAR_f_pose_59",
	{
		assetName: "pose_59";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_59";
		iconName: "pose_59";
		slot: ["POSE"];
		sortOrder: 1117;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose60 = AvatarCustomization<
	"AVATAR_f_pose_60",
	{
		assetName: "pose_60";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_60";
		iconName: "pose_60";
		slot: ["POSE"];
		sortOrder: 1119;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose61 = AvatarCustomization<
	"AVATAR_f_pose_61",
	{
		assetName: "pose_61";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_61";
		iconName: "pose_61";
		slot: ["POSE"];
		sortOrder: 1121;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose62 = AvatarCustomization<
	"AVATAR_f_pose_62",
	{
		assetName: "pose_62";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_62";
		iconName: "pose_62";
		slot: ["POSE"];
		sortOrder: 1123;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose63 = AvatarCustomization<
	"AVATAR_f_pose_63",
	{
		assetName: "pose_63";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_63";
		iconName: "pose_63";
		slot: ["POSE"];
		sortOrder: 1125;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPose64 = AvatarCustomization<
	"AVATAR_f_pose_64",
	{
		assetName: "pose_64";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_64";
		iconName: "pose_64";
		slot: ["POSE"];
		sortOrder: 1127;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFPoseEmpty = AvatarCustomization<
	"AVATAR_f_pose_empty",
	{
		assetName: "pose_empty";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_avatar_poses_empty_bundle";
		enabled: true;
		groupName: "group_poses";
		iconName: "pose_empty";
		slot: ["POSE"];
		sortOrder: 1;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirt6thanniversary = AvatarCustomization<
	"AVATAR_f_shirt_6thanniversary",
	{
		assetName: "f_shirt_6thanniversary_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_6thanniversary_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_6thanniversary_0";
		iconName: "f_shirt_6thanniversary_00_bundle_icon";
		setNames: ["6thanniversary"];
		slot: ["SHIRT"];
		sortOrder: 101211;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirt7thanniversary = AvatarCustomization<
	"AVATAR_f_shirt_7thanniversary",
	{
		assetName: "f_shirt_7thanniversary_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_7thanniversary_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_7thanniversary_0";
		iconName: "f_shirt_7thanniversary_00_bundle_icon";
		setNames: ["7thanniversary"];
		slot: ["SHIRT"];
		sortOrder: 101424;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtAcetrainerbw = AvatarCustomization<
	"AVATAR_f_shirt_acetrainerbw",
	{
		assetName: "f_shirt_acetrainerbw_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_acetrainerbw_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_acetrainerbw_0";
		iconName: "f_shirt_acetrainerbw_0_bundle_icon";
		setNames: ["acetrainerbw"];
		slot: ["SHIRT"];
		sortOrder: 100471;
		unlockBadgeLevel: 1000;
		unlockBadgeType: "BADGE_BATTLE_TRAINING_WON";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtAcetrainersm = AvatarCustomization<
	"AVATAR_f_shirt_acetrainersm",
	{
		assetName: "f_shirt_acetrainersm_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_acetrainersm_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_acetrainersm_0";
		iconName: "f_shirt_acetrainersm_0_bundle_icon";
		setNames: ["acetrainersm"];
		slot: ["SHIRT"];
		sortOrder: 100470;
		unlockBadgeLevel: 50;
		unlockBadgeType: "BADGE_ULTRA_LEAGUE";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtAlolacomfey = AvatarCustomization<
	"AVATAR_f_shirt_alolacomfey",
	{
		assetName: "f_shirt_alolacomfey_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_alolacomfey_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_alolacomfey_0";
		iconName: "f_shirt_alolacomfey_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101155;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtAnimegou = AvatarCustomization<
	"AVATAR_f_shirt_animegou",
	{
		assetName: "f_shirt_animegou_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_animegou_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_animegou_00_bundle_icon";
		setNames: ["animegou"];
		slot: ["SHIRT"];
		sortOrder: 100818;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtAseries = AvatarCustomization<
	"AVATAR_f_shirt_aseries",
	{
		assetName: "f_shirt_aseries_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_aseries_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iapSku: "pgorelease.avatar.f_shirt_aseries_0";
		iconName: "f_shirt_aseries_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100976;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtBackpacker = AvatarCustomization<
	"AVATAR_f_shirt_backpacker",
	{
		assetName: "f_shirt_backpacker_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_backpacker_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_backpacker_0";
		iconName: "f_shirt_backpacker_0_bundle_icon";
		setNames: ["backpacker"];
		setPrimeItem: true;
		slot: ["SHIRT"];
		sortOrder: 100479;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtBallguy = AvatarCustomization<
	"AVATAR_f_shirt_ballguy",
	{
		assetName: "f_shirt_ballguy_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_ballguy_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_ballguy_0";
		iconName: "f_shirt_ballguy_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101127;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtBattlegirl0 = AvatarCustomization<
	"AVATAR_f_shirt_battlegirl_0",
	{
		assetName: "f_shirt_battlegirl_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_battlegirl_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_battlegirl_0";
		iconName: "f_shirt_battlegirl_bundle_icon";
		setNames: ["battlegirl_0"];
		slot: ["SHIRT"];
		sortOrder: 100461;
		unlockBadgeLevel: 1000;
		unlockBadgeType: "BADGE_BATTLE_ATTACK_WON";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtBea = AvatarCustomization<
	"AVATAR_f_shirt_bea",
	{
		assetName: "f_shirt_bea_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_bea_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_bea_0";
		iconName: "f_shirt_bea_00_bundle_icon";
		setNames: ["bea"];
		slot: ["SHIRT"];
		sortOrder: 101182;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtBounsweetitems = AvatarCustomization<
	"AVATAR_f_shirt_bounsweetitems",
	{
		assetName: "f_shirt_bounsweetitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_bounsweetitems_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_bounsweetitems_0";
		iconName: "f_shirt_bounsweetitems_00_bundle_icon";
		setNames: ["bounsweetitems"];
		slot: ["SHIRT"];
		sortOrder: 101391;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtButtondown0 = AvatarCustomization<
	"AVATAR_f_shirt_buttondown_0",
	{
		assetName: "f_shirt_buttondown_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_buttondown_bundle";
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_buttondown_0";
		iconName: "f_shirt_buttondown_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100453;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtBuzzwoleitems = AvatarCustomization<
	"AVATAR_f_shirt_buzzwoleitems",
	{
		assetName: "f_shirt_buzzwoleitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_buzzwoleitems_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_buzzwoleitems_0";
		iconName: "f_shirt_buzzwoleitems_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101224;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtBwn = AvatarCustomization<
	"AVATAR_f_shirt_bwn",
	{
		assetName: "f_shirt_bwn_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_bwn_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_bwn_0";
		iconName: "f_shirt_bwn_00_bundle_icon";
		setNames: ["bwn"];
		slot: ["SHIRT"];
		sortOrder: 100832;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtCasual0 = AvatarCustomization<
	"AVATAR_f_shirt_casual_0",
	{
		assetName: "f_shirt_casual_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_casual_0_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_casual_0_bundle_icon";
		setNames: ["casual_0"];
		slot: ["SHIRT"];
		sortOrder: 100476;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtCasual1 = AvatarCustomization<
	"AVATAR_f_shirt_casual_1",
	{
		assetName: "f_shirt_casual_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_casual_1_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_casual_1_bundle_icon";
		setNames: ["casual_1"];
		slot: ["SHIRT"];
		sortOrder: 100475;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtCasual2 = AvatarCustomization<
	"AVATAR_f_shirt_casual_2",
	{
		assetName: "f_shirt_casual_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_casual_2_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_casual_2_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100474;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtCasual3 = AvatarCustomization<
	"AVATAR_f_shirt_casual_3",
	{
		assetName: "f_shirt_casual_3";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_casual_3_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_casual_3_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100473;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtCelebi0 = AvatarCustomization<
	"AVATAR_f_shirt_celebi_0",
	{
		assetName: "f_shirt_celebi_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_celebi_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_celebi_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100423;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtChimcharonesie = AvatarCustomization<
	"AVATAR_f_shirt_chimcharonesie",
	{
		assetName: "f_shirt_chimcharonesie_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_chimcharonesie_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_chimcharonesie_0";
		iconName: "f_shirt_chimcharonesie_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101060;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtClay = AvatarCustomization<
	"AVATAR_f_shirt_clay",
	{
		assetName: "f_shirt_clay_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_clay_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_clay_0";
		iconName: "f_shirt_clay_00_bundle_icon";
		setNames: ["clay"];
		slot: ["SHIRT"];
		sortOrder: 101405;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtCofagrigusitems = AvatarCustomization<
	"AVATAR_f_shirt_cofagrigusitems",
	{
		assetName: "f_shirt_cofagrigusitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_cofagrigusitems_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_cofagrigusitems_0";
		iconName: "f_shirt_cofagrigusitems_00_bundle_icon";
		setNames: ["cofagrigus"];
		slot: ["SHIRT"];
		sortOrder: 101467;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtCosmog = AvatarCustomization<
	"AVATAR_f_shirt_cosmog",
	{
		assetName: "f_shirt_cosmog_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_cosmog_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_cosmog_0";
		iconName: "f_shirt_cosmog_00_bundle_icon";
		setNames: ["cosmog"];
		slot: ["SHIRT"];
		sortOrder: 101253;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtCowichansweater = AvatarCustomization<
	"AVATAR_f_shirt_cowichansweater",
	{
		assetName: "f_shirt_cowichansweater_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_cowichansweater_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_cowichansweater_0";
		iconName: "f_shirt_cowichansweater_0_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100503;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtDayofdead = AvatarCustomization<
	"AVATAR_f_shirt_dayofdead",
	{
		assetName: "f_shirt_dayofdead_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_dayofdead_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_dayofdead_00_bundle_icon";
		setNames: ["dayofthedead"];
		slot: ["SHIRT"];
		sortOrder: 101047;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtDefault0 = AvatarCustomization<
	"AVATAR_f_shirt_default_0",
	{
		assetName: "f_shirt_default_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_default_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_default_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100413;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtDefault1 = AvatarCustomization<
	"AVATAR_f_shirt_default_1",
	{
		assetName: "f_shirt_default_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_default_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_default_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100412;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtDefault2 = AvatarCustomization<
	"AVATAR_f_shirt_default_2",
	{
		assetName: "f_shirt_default_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_default_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_default_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100411;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtDefault3 = AvatarCustomization<
	"AVATAR_f_shirt_default_3",
	{
		assetName: "f_shirt_default_3";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_default_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_default_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100410;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtDefault4 = AvatarCustomization<
	"AVATAR_f_shirt_default_4",
	{
		assetName: "f_shirt_default_4";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_default_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_default_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100409;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtDefault5 = AvatarCustomization<
	"AVATAR_f_shirt_default_5",
	{
		assetName: "f_shirt_default_5";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_default_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_default_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100408;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtDefault6 = AvatarCustomization<
	"AVATAR_f_shirt_default_6",
	{
		assetName: "f_shirt_default_6";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_default_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_default_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100407;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtDefault7 = AvatarCustomization<
	"AVATAR_f_shirt_default_7",
	{
		assetName: "f_shirt_default_7";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_default_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_default_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100406;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtDefault8 = AvatarCustomization<
	"AVATAR_f_shirt_default_8",
	{
		assetName: "f_shirt_default_8";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_default_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_default_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100405;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtDelibird = AvatarCustomization<
	"AVATAR_f_shirt_delibird",
	{
		assetName: "f_shirt_delibird_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_delibird_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_delibird_0";
		iconName: "f_shirt_delibird_0_bundle_icon";
		setNames: ["delibird"];
		slot: ["SHIRT"];
		sortOrder: 100466;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtDelibirdonesie = AvatarCustomization<
	"AVATAR_f_shirt_delibirdonesie",
	{
		assetName: "f_shirt_delibirdonesie_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_delibirdonesie_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_delibirdonesie_0";
		iconName: "f_shirt_delibirdonesie_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101513;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtDenimfashionweek2023 = AvatarCustomization<
	"AVATAR_f_shirt_denimfashionweek2023",
	{
		assetName: "f_shirt_denimfashionweek2023_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_denimfashionweek2023_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_denimfashionweek2023_0";
		iconName: "f_shirt_denimfashionweek2023_00_bundle_icon";
		setNames: ["fashionweek2023"];
		slot: ["SHIRT"];
		sortOrder: 101490;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtDenimjacket = AvatarCustomization<
	"AVATAR_f_shirt_denimjacket",
	{
		assetName: "f_shirt_denimjacket_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_denimjacket_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_denimjacket_0";
		iconName: "f_shirt_denimjacket_0_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100512;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtDetectivepikachu = AvatarCustomization<
	"AVATAR_f_shirt_detectivepikachu",
	{
		assetName: "f_shirt_detectivepikachu_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_detectivepikachu_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_detectivepikachu_0_bundle_icon";
		setNames: ["detectivepikachu"];
		slot: ["SHIRT"];
		sortOrder: 100477;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtDiancie = AvatarCustomization<
	"AVATAR_f_shirt_diancie",
	{
		assetName: "f_shirt_diancie_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_diancie_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_diancie_0";
		iconName: "f_shirt_diancie_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101433;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtDivingsuit = AvatarCustomization<
	"AVATAR_f_shirt_divingsuit",
	{
		assetName: "f_shirt_divingsuit_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_divingsuit_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_divingsuit_0";
		iconName: "f_shirt_divingsuit_00_bundle_icon";
		setNames: ["divingsuit"];
		slot: ["SHIRT"];
		sortOrder: 101413;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtDiwali2021 = AvatarCustomization<
	"AVATAR_f_shirt_diwali2021",
	{
		assetName: "f_shirt_diwali2021_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_diwali2021_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_diwali2021_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101050;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtDp = AvatarCustomization<
	"AVATAR_f_shirt_dp",
	{
		assetName: "f_shirt_dp_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_dp_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_dp_00_bundle_icon";
		setNames: ["dp"];
		slot: ["SHIRT"];
		sortOrder: 101068;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtDrifblim0 = AvatarCustomization<
	"AVATAR_f_shirt_drifblim_0",
	{
		assetName: "f_shirt_drifblim_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_drifblim_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_drifblim_0";
		iconName: "f_shirt_drifblim_0_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100463;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtDusclopsmummy = AvatarCustomization<
	"AVATAR_f_shirt_dusclopsmummy",
	{
		assetName: "f_shirt_dusclopsmummy_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_dusclopsmummy_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_dusclopsmummy_0";
		iconName: "f_shirt_dusclopsmummy_00_bundle_icon";
		setNames: ["dusclopsmummy"];
		slot: ["SHIRT"];
		sortOrder: 101281;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtEarthday2018 = AvatarCustomization<
	"AVATAR_f_shirt_earthday_2018",
	{
		assetName: "f_shirt_earthday_2018";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_earthday_2018_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_earthday_2018_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100422;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtEeveestshirt00 = AvatarCustomization<
	"AVATAR_f_shirt_eeveestshirt_00",
	{
		assetName: "f_shirt_eeveestshirt_00_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_eeveestshirt_00_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_eeveestshirt_00_0";
		iconName: "f_shirt_eeveestshirt_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101474;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtEeveestshirt01 = AvatarCustomization<
	"AVATAR_f_shirt_eeveestshirt_01",
	{
		assetName: "f_shirt_eeveestshirt_01_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_eeveestshirt_01_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_eeveestshirt_01_0";
		iconName: "f_shirt_eeveestshirt_01_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101475;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtEeveestshirt02 = AvatarCustomization<
	"AVATAR_f_shirt_eeveestshirt_02",
	{
		assetName: "f_shirt_eeveestshirt_02_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_eeveestshirt_02_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_eeveestshirt_02_0";
		iconName: "f_shirt_eeveestshirt_02_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101476;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtEeveestshirt03 = AvatarCustomization<
	"AVATAR_f_shirt_eeveestshirt_03",
	{
		assetName: "f_shirt_eeveestshirt_03_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_eeveestshirt_03_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_eeveestshirt_03_0";
		iconName: "f_shirt_eeveestshirt_03_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101477;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtEeveestshirt04 = AvatarCustomization<
	"AVATAR_f_shirt_eeveestshirt_04",
	{
		assetName: "f_shirt_eeveestshirt_04";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_eeveestshirt_04_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_eeveestshirt_04";
		iconName: "f_shirt_eeveestshirt_04_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101554;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtEeveestshirt05 = AvatarCustomization<
	"AVATAR_f_shirt_eeveestshirt_05",
	{
		assetName: "f_shirt_eeveestshirt_05";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_eeveestshirt_05_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_eeveestshirt_05";
		iconName: "f_shirt_eeveestshirt_05_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101556;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtEeveestshirt06 = AvatarCustomization<
	"AVATAR_f_shirt_eeveestshirt_06",
	{
		assetName: "f_shirt_eeveestshirt_06";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_eeveestshirt_06_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_eeveestshirt_06";
		iconName: "f_shirt_eeveestshirt_06_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101558;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtEeveestshirt07 = AvatarCustomization<
	"AVATAR_f_shirt_eeveestshirt_07",
	{
		assetName: "f_shirt_eeveestshirt_07";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_eeveestshirt_07_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_eeveestshirt_07";
		iconName: "f_shirt_eeveestshirt_07_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101560;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtEeveestshirt08 = AvatarCustomization<
	"AVATAR_f_shirt_eeveestshirt_08",
	{
		assetName: "f_shirt_eeveestshirt_08";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_eeveestshirt_08_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_eeveestshirt_08";
		iconName: "f_shirt_eeveestshirt_08_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101562;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtElesa = AvatarCustomization<
	"AVATAR_f_shirt_elesa",
	{
		assetName: "f_shirt_elesa_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_elesa_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_elesa_0";
		iconName: "f_shirt_elesa_00_bundle_icon";
		setNames: ["elesa"];
		slot: ["SHIRT"];
		sortOrder: 100876;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtFashionweek2022 = AvatarCustomization<
	"AVATAR_f_shirt_fashionWeek2022",
	{
		assetName: "f_shirt_fashionWeek2022_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_fashionweek2022_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_fashionWeek2022_0";
		iconName: "f_shirt_fashionweek2022_00_bundle_icon";
		setNames: ["fashionWeek2022"];
		slot: ["SHIRT"];
		sortOrder: 101269;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtFestivaloflights00 = AvatarCustomization<
	"AVATAR_f_shirt_festivaloflights_00",
	{
		assetName: "f_shirt_festivaloflights_00_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_festivaloflights_00_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_festivaloflights_00_0";
		iconName: "f_shirt_festivaloflights_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101482;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtFestivaloflights01 = AvatarCustomization<
	"AVATAR_f_shirt_festivaloflights_01",
	{
		assetName: "f_shirt_festivaloflights_01_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_festivaloflights_01_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_festivaloflights_01_0";
		iconName: "f_shirt_festivaloflights_01_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101483;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtFlabebepack = AvatarCustomization<
	"AVATAR_f_shirt_flabebepack",
	{
		assetName: "f_shirt_flabebepack_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_flabebepack_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_flabebepack_0";
		iconName: "f_shirt_flabebepack_00_bundle_icon";
		setNames: ["flabebepack"];
		slot: ["SHIRT"];
		sortOrder: 101119;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtFragment0 = AvatarCustomization<
	"AVATAR_f_shirt_fragment_0",
	{
		assetName: "f_shirt_fragment_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_fragment_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_fragment_bundle_icon";
		setNames: ["fragment_0"];
		slot: ["SHIRT"];
		sortOrder: 100421;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtFrlg0 = AvatarCustomization<
	"AVATAR_f_shirt_frlg_0",
	{
		assetName: "f_shirt_frlg_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_frlg_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_frlg_0";
		iconName: "f_shirt_frlg_bundle_icon";
		setNames: ["frlg_0"];
		slot: ["SHIRT"];
		sortOrder: 100460;
		unlockBadgeLevel: 5;
		unlockBadgeType: "BADGE_POKEDEX_ENTRIES";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtFw2022 = AvatarCustomization<
	"AVATAR_f_shirt_fw2022",
	{
		assetName: "f_shirt_fw2022_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_fw2022_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_fw2022_0";
		iconName: "f_shirt_fw2022_00_bundle_icon";
		setNames: ["fw2022"];
		slot: ["SHIRT"];
		sortOrder: 101257;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtGalarfarfetchditems = AvatarCustomization<
	"AVATAR_f_shirt_galarfarfetchditems",
	{
		assetName: "f_shirt_galarfarfetchditems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_galarfarfetchditems_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_galarfarfetchditems_0";
		iconName: "f_shirt_galarfarfetchditems_00_bundle_icon";
		setNames: ["galarfarfetchditems"];
		slot: ["SHIRT"];
		sortOrder: 100517;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtGalaxyoutfit = AvatarCustomization<
	"AVATAR_f_shirt_galaxyoutfit",
	{
		assetName: "f_shirt_galaxyoutfit_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_galaxyoutfit_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_galaxyoutfit_0";
		iconName: "f_shirt_galaxyoutfit_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101577;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtGeeta = AvatarCustomization<
	"AVATAR_f_shirt_geeta",
	{
		assetName: "f_shirt_geeta_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_geeta_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_geeta_0";
		iconName: "f_shirt_geeta_00_bundle_icon";
		setNames: ["geeta"];
		slot: ["SHIRT"];
		sortOrder: 101451;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtGenderlessskirt = AvatarCustomization<
	"AVATAR_f_shirt_genderlessskirt",
	{
		assetName: "f_shirt_genderlessskirt_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_genderlessskirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_genderlessskirt_0";
		iconName: "f_shirt_genderlessskirt_00_bundle_icon";
		setNames: ["genderlessskirt"];
		slot: ["SHIRT"];
		sortOrder: 101023;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtGengar0 = AvatarCustomization<
	"AVATAR_f_shirt_gengar_0",
	{
		assetName: "f_shirt_gengar_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_gengar_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_gengar_0";
		iconName: "f_shirt_gengar_0_bundle_icon";
		setNames: ["gengar_0"];
		slot: ["SHIRT"];
		sortOrder: 100464;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtGengaronesie = AvatarCustomization<
	"AVATAR_f_shirt_gengaronesie",
	{
		assetName: "f_shirt_gengaronesie_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_gengaronesie_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_gengaronesie_0";
		iconName: "f_shirt_gengaronesie_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100787;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtGiovanni = AvatarCustomization<
	"AVATAR_f_shirt_giovanni",
	{
		assetName: "f_shirt_giovanni_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_giovanni_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_giovanni_0";
		iconName: "f_shirt_giovanni_0_bundle_icon";
		setNames: ["giovanni"];
		slot: ["SHIRT"];
		sortOrder: 100501;
		unlockBadgeLevel: 20;
		unlockBadgeType: "BADGE_ROCKET_GIOVANNI_DEFEATED";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtGiratinaitems = AvatarCustomization<
	"AVATAR_f_shirt_giratinaitems",
	{
		assetName: "f_shirt_giratinaitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_giratinaitems_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_giratinaitems_0";
		iconName: "f_shirt_giratinaitems_00_bundle_icon";
		setNames: ["giratinaitems"];
		slot: ["SHIRT"];
		sortOrder: 101566;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtGladion = AvatarCustomization<
	"AVATAR_f_shirt_gladion",
	{
		assetName: "f_shirt_gladion_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_gladion_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_gladion_0";
		iconName: "f_shirt_gladion_00_bundle_icon";
		setNames: ["gladion"];
		slot: ["SHIRT"];
		sortOrder: 101131;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtGofest2022 = AvatarCustomization<
	"AVATAR_f_shirt_gofest2022",
	{
		assetName: "f_shirt_gofest2022_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_gofest2022_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_gofest2022_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101177;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtGofest2023 = AvatarCustomization<
	"AVATAR_f_shirt_gofest2023",
	{
		assetName: "f_shirt_gofest2023_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_gofest2023_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_gofest2023_0";
		iconName: "f_shirt_gofest2023_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101421;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtGofest2024darkgray = AvatarCustomization<
	"AVATAR_f_shirt_gofest2024darkgray",
	{
		assetName: "f_shirt_gofest2024darkgray_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_gofest2024darkgray_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_gofest2024darkgray_0";
		iconName: "f_shirt_gofest2024darkgray_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101608;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtGofest2024gray = AvatarCustomization<
	"AVATAR_f_shirt_gofest2024gray",
	{
		assetName: "f_shirt_gofest2024gray_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_gofest2024gray_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_gofest2024gray_0";
		iconName: "f_shirt_gofest2024gray_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101588;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtGofest2024purple = AvatarCustomization<
	"AVATAR_f_shirt_gofest2024purple",
	{
		assetName: "f_shirt_gofest2024purple_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_gofest2024purple_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_gofest2024purple_0";
		iconName: "f_shirt_gofest2024purple_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101606;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtGofest2019 = AvatarCustomization<
	"AVATAR_f_shirt_gofest_2019",
	{
		assetName: "f_shirt_gofest_2019";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_gofest_2019_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_gofest_2019_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100478;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtGofest2020 = AvatarCustomization<
	"AVATAR_f_shirt_gofest_2020",
	{
		assetName: "f_shirt_gofest_2020_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_gofest_2020_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_gofest_2020_0_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100746;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtGofest2021 = AvatarCustomization<
	"AVATAR_f_shirt_gofest_2021",
	{
		assetName: "f_shirt_gofest_2021_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_gofest_2021_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_gofest_2021_0_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100927;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtGofestglobal2023 = AvatarCustomization<
	"AVATAR_f_shirt_gofestglobal2023",
	{
		assetName: "f_shirt_gofestglobal2023_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_gofestglobal2023_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_gofestglobal2023_0";
		iconName: "f_shirt_gofestglobal2023_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101418;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtGoteamrocketarlo = AvatarCustomization<
	"AVATAR_f_shirt_goteamrocketarlo",
	{
		assetName: "f_shirt_goteamrocketarlo_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_goteamrocketarlo_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_goteamrocketarlo_0";
		iconName: "f_shirt_goteamrocketarlo_00_bundle_icon";
		setNames: ["goteamrocketarlo"];
		slot: ["SHIRT"];
		sortOrder: 100767;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtGoteamrocketcliff = AvatarCustomization<
	"AVATAR_f_shirt_goteamrocketcliff",
	{
		assetName: "f_shirt_goteamrocketcliff_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_goteamrocketcliff_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_goteamrocketcliff_0";
		iconName: "f_shirt_goteamrocketcliff_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100769;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtGoteamrocketsierra = AvatarCustomization<
	"AVATAR_f_shirt_goteamrocketsierra",
	{
		assetName: "f_shirt_goteamrocketsierra_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_goteamrocketsierra_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_goteamrocketsierra_0";
		iconName: "f_shirt_goteamrocketsierra_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100770;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtGothitelleitems = AvatarCustomization<
	"AVATAR_f_shirt_gothitelleitems",
	{
		assetName: "f_shirt_gothitelleitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_gothitelleitems_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_gothitelleitems_0";
		iconName: "f_shirt_gothitelleitems_00_bundle_icon";
		setNames: ["gothitelleitems"];
		slot: ["SHIRT"];
		sortOrder: 101501;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtGotour2023 = AvatarCustomization<
	"AVATAR_f_shirt_gotour2023",
	{
		assetName: "f_shirt_gotour2023_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_gotour2023_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_gotour2023_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101341;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtGotour2024 = AvatarCustomization<
	"AVATAR_f_shirt_gotour2024",
	{
		assetName: "f_shirt_gotour2024_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_gotour2024_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_gotour2024_0";
		iconName: "f_shirt_gotour2024_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101527;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtGreedentsweater = AvatarCustomization<
	"AVATAR_f_shirt_greedentsweater",
	{
		assetName: "f_shirt_greedentsweater_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_greedentsweater_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_greedentsweater_0";
		iconName: "f_shirt_greedentsweater_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100848;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtGreen = AvatarCustomization<
	"AVATAR_f_shirt_green",
	{
		assetName: "f_shirt_green_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_green_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.gbl.avatar.f_shirt_green_0";
		iconName: "f_shirt_green_00_bundle_icon";
		setNames: ["green"];
		slot: ["SHIRT"];
		sortOrder: 100736;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtGreencoat = AvatarCustomization<
	"AVATAR_f_shirt_greencoat",
	{
		assetName: "f_shirt_greencoat_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_greencoat_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_greencoat_0";
		iconName: "f_shirt_greencoat_00_bundle_icon";
		setNames: ["greencoat"];
		slot: ["SHIRT"];
		sortOrder: 101094;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtGtrtshirt202200 = AvatarCustomization<
	"AVATAR_f_shirt_gtrtshirt2022_00",
	{
		assetName: "f_shirt_gtrtshirt2022_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_gtrtshirt2022_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_gtrtshirt2022_0";
		iconName: "f_shirt_gtrtshirt2022_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101145;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtGtrtshirt202201 = AvatarCustomization<
	"AVATAR_f_shirt_gtrtshirt2022_01",
	{
		assetName: "f_shirt_gtrtshirt2022_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_gtrtshirt2022_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_gtrtshirt2022_1";
		iconName: "f_shirt_gtrtshirt2022_01_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101147;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtGuccitshirts = AvatarCustomization<
	"AVATAR_f_shirt_guccitshirts",
	{
		assetName: "f_shirt_guccitshirts_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_guccitshirts_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iconName: "f_shirt_guccitshirts_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100858;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtGuzma = AvatarCustomization<
	"AVATAR_f_shirt_guzma",
	{
		assetName: "f_shirt_guzma_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_guzma_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_guzma_0";
		iconName: "f_shirt_guzma_00_bundle_icon";
		setNames: ["guzma"];
		slot: ["SHIRT"];
		sortOrder: 101239;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtGymleader0 = AvatarCustomization<
	"AVATAR_f_shirt_gymleader_0",
	{
		assetName: "f_shirt_gymleader_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_gymleader_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_gymleader_0";
		iconName: "f_shirt_gymleader_bundle_icon";
		setNames: ["gymleader_0"];
		slot: ["SHIRT"];
		sortOrder: 100459;
		unlockBadgeLevel: 1000;
		unlockBadgeType: "BADGE_HOURS_DEFENDED";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtGymleader1 = AvatarCustomization<
	"AVATAR_f_shirt_gymleader_1",
	{
		assetName: "f_shirt_gymleader_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_gymleader_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_gymleader_1";
		iconName: "f_shirt_gymleader_bundle_icon";
		setNames: ["gymleader_1"];
		slot: ["SHIRT"];
		sortOrder: 100458;
		unlockBadgeLevel: 1000;
		unlockBadgeType: "BADGE_HOURS_DEFENDED";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtGymleader2 = AvatarCustomization<
	"AVATAR_f_shirt_gymleader_2",
	{
		assetName: "f_shirt_gymleader_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_gymleader_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_gymleader_2";
		iconName: "f_shirt_gymleader_bundle_icon";
		setNames: ["gymleader_2"];
		slot: ["SHIRT"];
		sortOrder: 100457;
		unlockBadgeLevel: 1000;
		unlockBadgeType: "BADGE_HOURS_DEFENDED";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtHala = AvatarCustomization<
	"AVATAR_f_shirt_hala",
	{
		assetName: "f_shirt_hala_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_hala_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_hala_0";
		iconName: "f_shirt_hala_00_bundle_icon";
		setNames: ["hala"];
		slot: ["SHIRT"];
		sortOrder: 101580;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtHappi = AvatarCustomization<
	"AVATAR_f_shirt_happi",
	{
		assetName: "f_shirt_happi_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_happi_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_happi_0";
		iconName: "f_shirt_happi_0_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100487;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtHappi1 = AvatarCustomization<
	"AVATAR_f_shirt_happi_1",
	{
		assetName: "f_shirt_happi_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_happi_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_happi_1";
		iconName: "f_shirt_happi_1_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100486;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtHappi2 = AvatarCustomization<
	"AVATAR_f_shirt_happi_2",
	{
		assetName: "f_shirt_happi_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_happi_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_happi_2";
		iconName: "f_shirt_happi_2_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100485;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtHgss0 = AvatarCustomization<
	"AVATAR_f_shirt_hgss_0",
	{
		assetName: "f_shirt_hgss_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_hgss_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_hgss_0";
		iconName: "f_shirt_hgss_bundle_icon";
		setNames: ["hgss_0"];
		slot: ["SHIRT"];
		sortOrder: 100456;
		unlockBadgeLevel: 5;
		unlockBadgeType: "BADGE_POKEDEX_ENTRIES_GEN2";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtHoliday2022santacostumes = AvatarCustomization<
	"AVATAR_f_shirt_holiday2022santacostumes",
	{
		assetName: "f_shirt_holiday2022santacostumes_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_holiday2022santacostumes_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_holiday2022santacostumes_0";
		iconName: "f_shirt_holiday2022santacostumes_00_bundle_icon";
		setNames: ["holiday2022santacostumes"];
		slot: ["SHIRT"];
		sortOrder: 101338;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtHolifestival2021black = AvatarCustomization<
	"AVATAR_f_shirt_holifestival2021black",
	{
		assetName: "f_shirt_holifestival2021black_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_holifestival2021black_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_holifestival2021black_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100896;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtHolifestival2021white = AvatarCustomization<
	"AVATAR_f_shirt_holifestival2021white",
	{
		assetName: "f_shirt_holifestival2021white_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_holifestival2021white_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_holifestival2021white_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100899;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtHoopaunboundtshirt = AvatarCustomization<
	"AVATAR_f_shirt_hoopaunboundtshirt",
	{
		assetName: "f_shirt_hoopaunboundtshirt_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_hoopaunboundtshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_hoopaunboundtshirt_0";
		iconName: "f_shirt_hoopaunboundtshirt_00_bundle_icon";
		setNames: ["hoopa"];
		slot: ["SHIRT"];
		sortOrder: 101075;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtIngo = AvatarCustomization<
	"AVATAR_f_shirt_ingo",
	{
		assetName: "f_shirt_ingo_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_ingo_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_ingo_0";
		iconName: "f_shirt_ingo_00_bundle_icon";
		setNames: ["ingo"];
		slot: ["SHIRT"];
		sortOrder: 101505;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtIngress0 = AvatarCustomization<
	"AVATAR_f_shirt_ingress_0",
	{
		assetName: "f_shirt_ingress_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_ingress_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_ingress_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100420;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtIngressE0 = AvatarCustomization<
	"AVATAR_f_shirt_ingress_e_0",
	{
		assetName: "f_shirt_ingress_e_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_ingress_e_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_ingress_e_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100419;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtIngressR0 = AvatarCustomization<
	"AVATAR_f_shirt_ingress_r_0",
	{
		assetName: "f_shirt_ingress_r_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_ingress_r_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_ingress_r_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100418;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtJessie = AvatarCustomization<
	"AVATAR_f_shirt_jessie",
	{
		assetName: "f_shirt_jessie_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_jessie_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_jessie_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100732;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtJirachi = AvatarCustomization<
	"AVATAR_f_shirt_jirachi",
	{
		assetName: "f_shirt_jirachi_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_jirachi_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_jirachi_0";
		iconName: "f_shirt_jirachi_0_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100488;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtKeldeotshirt = AvatarCustomization<
	"AVATAR_f_shirt_keldeotshirt",
	{
		assetName: "f_shirt_keldeotshirt_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_keldeotshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_keldeotshirt_0";
		iconName: "f_shirt_keldeotshirt_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101319;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtKorrina = AvatarCustomization<
	"AVATAR_f_shirt_korrina",
	{
		assetName: "f_shirt_korrina_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_korrina_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_korrina_0";
		iconName: "f_shirt_korrina_00_bundle_icon";
		setNames: ["korrina"];
		slot: ["SHIRT"];
		sortOrder: 100958;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtLadiamondoutfit = AvatarCustomization<
	"AVATAR_f_shirt_ladiamondoutfit",
	{
		assetName: "f_shirt_ladiamondoutfit_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_ladiamondoutfit_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_ladiamondoutfit_0";
		iconName: "f_shirt_ladiamondoutfit_00_bundle_icon";
		setNames: ["ladiamondoutfit"];
		slot: ["SHIRT"];
		sortOrder: 101570;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtLana = AvatarCustomization<
	"AVATAR_f_shirt_lana",
	{
		assetName: "f_shirt_lana_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_lana_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_lana_0";
		iconName: "f_shirt_lana_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101613;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtLapearloutfit = AvatarCustomization<
	"AVATAR_f_shirt_lapearloutfit",
	{
		assetName: "f_shirt_lapearloutfit_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_lapearloutfit_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_lapearloutfit_0";
		iconName: "f_shirt_lapearloutfit_00_bundle_icon";
		setNames: ["lapearloutfit"];
		slot: ["SHIRT"];
		sortOrder: 101574;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtLasecuritycorps = AvatarCustomization<
	"AVATAR_f_shirt_lasecuritycorps",
	{
		assetName: "f_shirt_lasecuritycorps_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_lasecuritycorps_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_lasecuritycorps_0";
		iconName: "f_shirt_lasecuritycorps_00_bundle_icon";
		setNames: ["lasecuritycorps"];
		slot: ["SHIRT"];
		sortOrder: 101549;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtLatiasLatios0 = AvatarCustomization<
	"AVATAR_f_shirt_latias_latios_0",
	{
		assetName: "f_shirt_latias_latios_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_latias_latios_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_latias_latios_0";
		iconName: "f_shirt_latias_latios_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100455;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtLegendofarceus = AvatarCustomization<
	"AVATAR_f_shirt_legendofarceus",
	{
		assetName: "f_shirt_legendofarceus_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_legendofarceus_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_legendofarceus_00_bundle_icon";
		setNames: ["legendofarceus"];
		slot: ["SHIRT"];
		sortOrder: 101112;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtLuvdiscpack = AvatarCustomization<
	"AVATAR_f_shirt_luvdiscpack",
	{
		assetName: "f_shirt_luvdiscpack_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_luvdiscpack_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_luvdiscpack_0";
		iconName: "f_shirt_luvdiscpack_0_bundle_icon";
		setNames: ["luvdiscpack"];
		slot: ["SHIRT"];
		sortOrder: 100505;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtLvl50 = AvatarCustomization<
	"AVATAR_f_shirt_lvl50",
	{
		assetName: "f_shirt_lvl50_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_lvl50_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_lvl50_00_bundle_icon";
		setNames: ["lvl50_0"];
		slot: ["SHIRT"];
		sortOrder: 100823;
		unlockPlayerLevel: 50;
		unlockType: "LEVEL_REWARD";
	}
>;
export type AvatarCustomizationFShirtLvl501 = AvatarCustomization<
	"AVATAR_f_shirt_lvl50_1",
	{
		assetName: "f_shirt_lvl50_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_lvl50_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_lvl50_01_bundle_icon";
		setNames: ["lvl50_1"];
		slot: ["SHIRT"];
		sortOrder: 100826;
		unlockPlayerLevel: 50;
		unlockType: "LEVEL_REWARD";
	}
>;
export type AvatarCustomizationFShirtLysandre = AvatarCustomization<
	"AVATAR_f_shirt_lysandre",
	{
		assetName: "f_shirt_lysandre_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_lysandre_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_lysandre_0";
		iconName: "f_shirt_lysandre_00_bundle_icon";
		setNames: ["lysandre"];
		slot: ["SHIRT"];
		sortOrder: 101080;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtMarshadowtshirt = AvatarCustomization<
	"AVATAR_f_shirt_marshadowtshirt",
	{
		assetName: "f_shirt_marshadowtshirt_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_marshadowtshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_marshadowtshirt_0";
		iconName: "f_shirt_marshadowtshirt_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101610;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtMegalopunnyitems = AvatarCustomization<
	"AVATAR_f_shirt_megalopunnyitems",
	{
		assetName: "f_shirt_megalopunnyitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_megalopunnyitems_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_megalopunnyitems_0";
		iconName: "f_shirt_megalopunnyitems_00_bundle_icon";
		setNames: ["megalopunnyitems"];
		slot: ["SHIRT"];
		sortOrder: 100904;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtMegarayquaza = AvatarCustomization<
	"AVATAR_f_shirt_megarayquaza",
	{
		assetName: "f_shirt_megarayquaza_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_megarayquaza_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_megarayquaza_0";
		iconName: "f_shirt_megarayquaza_00_bundle_icon";
		setNames: ["megarayquaza"];
		slot: ["SHIRT"];
		sortOrder: 101430;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtMelmetaljacket = AvatarCustomization<
	"AVATAR_f_shirt_melmetaljacket",
	{
		assetName: "f_shirt_melmetaljacket_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_melmetaljacket_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_melmetaljacket_0";
		iconName: "f_shirt_melmetaljacket_00_bundle_icon";
		setNames: ["melmetal_jacket"];
		slot: ["SHIRT"];
		sortOrder: 100805;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtMelmetalvest = AvatarCustomization<
	"AVATAR_f_shirt_melmetalvest",
	{
		assetName: "f_shirt_melmetalvest_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_melmetalvest_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_melmetalvest_0";
		iconName: "f_shirt_melmetalvest_00_bundle_icon";
		setNames: ["melmetal_vest"];
		slot: ["SHIRT"];
		sortOrder: 100806;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtMeloettatshirt = AvatarCustomization<
	"AVATAR_f_shirt_meloettatshirt",
	{
		assetName: "f_shirt_meloettatshirt_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_meloettatshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_meloettatshirt_0";
		iconName: "f_shirt_meloettatshirt_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100980;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtMeltan = AvatarCustomization<
	"AVATAR_f_shirt_meltan",
	{
		assetName: "f_shirt_meltan_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_meltan_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_meltan_0";
		iconName: "f_shirt_meltan_0_bundle_icon";
		setNames: ["meltan"];
		slot: ["SHIRT"];
		sortOrder: 100472;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtMew0 = AvatarCustomization<
	"AVATAR_f_shirt_mew_0",
	{
		assetName: "f_shirt_mew_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_mew_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_mew_0";
		iconName: "f_shirt_mew_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100454;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtMewtwo = AvatarCustomization<
	"AVATAR_f_shirt_mewtwo",
	{
		assetName: "f_shirt_mewtwo_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_mewtwo_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_mewtwo_0";
		iconName: "f_shirt_mewtwo_0_bundle_icon";
		setNames: ["mewtwo"];
		slot: ["SHIRT"];
		sortOrder: 100484;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtMisty = AvatarCustomization<
	"AVATAR_f_shirt_misty",
	{
		assetName: "f_shirt_misty_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_misty_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_misty_0";
		iconName: "f_shirt_misty_0_bundle_icon";
		setNames: ["misty"];
		slot: ["SHIRT"];
		sortOrder: 100465;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtMovie2020jessiejames = AvatarCustomization<
	"AVATAR_f_shirt_movie2020jessiejames",
	{
		assetName: "f_shirt_movie2020jessiejames_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_movie2020jessiejames_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_movie2020jessiejames_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100852;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtMunnapack = AvatarCustomization<
	"AVATAR_f_shirt_munnapack",
	{
		assetName: "f_shirt_munnapack_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_munnapack_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_munnapack_0";
		iconName: "f_shirt_munnapack_00_bundle_icon";
		setNames: ["munnapack_0", "munnapack_1"];
		slot: ["SHIRT"];
		sortOrder: 100867;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtNike2021 = AvatarCustomization<
	"AVATAR_f_shirt_nike2021",
	{
		assetName: "f_shirt_nike2021_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_nike2021_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iapSku: "pgorelease.avatar.f_shirt_nike2021_0";
		iconName: "f_shirt_nike2021_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101036;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtOcshirt045 = AvatarCustomization<
	"AVATAR_f_shirt_ocshirt_045",
	{
		assetName: "f_shirt_ocshirt_045";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_ocshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_ocshirt_045";
		iconName: "f_shirt_ocshirt_045_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100493;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtOcshirt108 = AvatarCustomization<
	"AVATAR_f_shirt_ocshirt_108",
	{
		assetName: "f_shirt_ocshirt_108";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_ocshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_ocshirt_108";
		iconName: "f_shirt_ocshirt_108_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100492;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtOcshirt129 = AvatarCustomization<
	"AVATAR_f_shirt_ocshirt_129",
	{
		assetName: "f_shirt_ocshirt_129";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_ocshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_ocshirt_129";
		iconName: "f_shirt_ocshirt_129_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100491;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtOcshirt143 = AvatarCustomization<
	"AVATAR_f_shirt_ocshirt_143",
	{
		assetName: "f_shirt_ocshirt_143";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_ocshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_ocshirt_143";
		iconName: "f_shirt_ocshirt_143_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100490;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtOras = AvatarCustomization<
	"AVATAR_f_shirt_oras",
	{
		assetName: "f_shirt_oras_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_oras_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_oras_00_bundle_icon";
		setNames: ["oras"];
		slot: ["SHIRT"];
		sortOrder: 101356;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtPajamas20220 = AvatarCustomization<
	"AVATAR_f_shirt_pajamas2022_0",
	{
		assetName: "f_shirt_pajamas2022_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_pajamas2022_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_pajamas2022_0";
		iconName: "f_shirt_pajamas2022_bundle_icon";
		setNames: ["pajamas2022_0"];
		slot: ["SHIRT"];
		sortOrder: 101325;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtPajamas20221 = AvatarCustomization<
	"AVATAR_f_shirt_pajamas2022_1",
	{
		assetName: "f_shirt_pajamas2022_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_pajamas2022_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_pajamas2022_1";
		iconName: "f_shirt_pajamas2022_bundle_icon";
		setNames: ["pajamas2022_1"];
		slot: ["SHIRT"];
		sortOrder: 101331;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtPalmer = AvatarCustomization<
	"AVATAR_f_shirt_palmer",
	{
		assetName: "f_shirt_palmer_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_palmer_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_palmer_0";
		iconName: "f_shirt_palmer_00_bundle_icon";
		setNames: ["palmer"];
		slot: ["SHIRT"];
		sortOrder: 101371;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtPartneritemsjan2024hoodie = AvatarCustomization<
	"AVATAR_f_shirt_partneritemsjan2024hoodie",
	{
		assetName: "f_shirt_partneritemsjan2024hoodie_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_partneritemsjan2024hoodie_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iapSku: "pgorelease.avatar.f_shirt_partneritemsjan2024hoodie_0";
		iconName: "f_shirt_partneritemsjan2024hoodie_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101540;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtPartneritemsjan2024tshirt = AvatarCustomization<
	"AVATAR_f_shirt_partneritemsjan2024tshirt",
	{
		assetName: "f_shirt_partneritemsjan2024tshirt_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_partneritemsjan2024tshirt_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iapSku: "pgorelease.avatar.f_shirt_partneritemsjan2024tshirt_0";
		iconName: "f_shirt_partneritemsjan2024tshirt_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101539;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtPikachufan0 = AvatarCustomization<
	"AVATAR_f_shirt_pikachufan_0",
	{
		assetName: "f_shirt_pikachufan_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_pikachufan_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_pikachufan_0";
		iconName: "f_shirt_pikachufan_bundle_icon";
		setNames: ["pikachufan_0"];
		slot: ["SHIRT"];
		sortOrder: 100452;
		unlockBadgeLevel: 300;
		unlockBadgeType: "BADGE_PIKACHU";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtPikachulibre = AvatarCustomization<
	"AVATAR_f_shirt_pikachulibre",
	{
		assetName: "f_shirt_pikachulibre_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_pikachulibre_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_pikachulibre_0";
		iconName: "f_shirt_pikachulibre_0_bundle_icon";
		setNames: ["pikachulibre"];
		slot: ["SHIRT"];
		sortOrder: 100504;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtPikachuonesie = AvatarCustomization<
	"AVATAR_f_shirt_pikachuonesie",
	{
		assetName: "f_shirt_pikachuonesie_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_pikachuonesie_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_pikachuonesie_0";
		iconName: "f_shirt_pikachuonesie_0_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100497;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtPinpukuhoodie = AvatarCustomization<
	"AVATAR_f_shirt_pinpukuhoodie",
	{
		assetName: "f_shirt_pinpukuhoodie_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_pinpukuhoodie_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_pinpukuhoodie_0";
		iconName: "f_shirt_pinpukuhoodie_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101387;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtPipluponesie = AvatarCustomization<
	"AVATAR_f_shirt_pipluponesie",
	{
		assetName: "f_shirt_pipluponesie_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_pipluponesie_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_pipluponesie_0";
		iconName: "f_shirt_pipluponesie_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101058;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtPkmnhoodie001 = AvatarCustomization<
	"AVATAR_f_shirt_pkmnhoodie001",
	{
		assetName: "f_shirt_pkmnhoodie001";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_pkmnhoodie001_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_pkmnhoodie001";
		iconName: "f_shirt_pkmnhoodie001_0_bundle_icon";
		setNames: ["pkmnhoodie001"];
		slot: ["SHIRT"];
		sortOrder: 100496;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtPkmnhoodie004 = AvatarCustomization<
	"AVATAR_f_shirt_pkmnhoodie004",
	{
		assetName: "f_shirt_pkmnhoodie004";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_pkmnhoodie004_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_pkmnhoodie004";
		iconName: "f_shirt_pkmnhoodie004_0_bundle_icon";
		setNames: ["pkmnhoodie004"];
		slot: ["SHIRT"];
		sortOrder: 100495;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtPkmnhoodie007 = AvatarCustomization<
	"AVATAR_f_shirt_pkmnhoodie007",
	{
		assetName: "f_shirt_pkmnhoodie007";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_pkmnhoodie007_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_pkmnhoodie007";
		iconName: "f_shirt_pkmnhoodie007_0_bundle_icon";
		setNames: ["pkmnhoodie007"];
		slot: ["SHIRT"];
		sortOrder: 100494;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtPkmnshirts202100 = AvatarCustomization<
	"AVATAR_f_shirt_pkmnshirts2021_00",
	{
		assetName: "f_shirt_pkmnshirts2021_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_pkmnshirts2021_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_pkmnshirts2021_0";
		iconName: "f_shirt_pkmnshirts2021_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100968;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtPkmnshirts202101 = AvatarCustomization<
	"AVATAR_f_shirt_pkmnshirts2021_01",
	{
		assetName: "f_shirt_pkmnshirts2021_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_pkmnshirts2021_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_pkmnshirts2021_1";
		iconName: "f_shirt_pkmnshirts2021_01_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100969;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtPkmnshirts202102 = AvatarCustomization<
	"AVATAR_f_shirt_pkmnshirts2021_02",
	{
		assetName: "f_shirt_pkmnshirts2021_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_pkmnshirts2021_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_pkmnshirts2021_2";
		iconName: "f_shirt_pkmnshirts2021_02_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100970;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtPkmnshirts165 = AvatarCustomization<
	"AVATAR_f_shirt_pkmnshirts_165",
	{
		assetName: "f_shirt_pkmnshirts_165";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_pkmnshirts_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_pkmnshirts_165";
		iconName: "f_shirt_pkmnshirts_165_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100509;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtPkmnshirts188 = AvatarCustomization<
	"AVATAR_f_shirt_pkmnshirts_188",
	{
		assetName: "f_shirt_pkmnshirts_188";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_pkmnshirts_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_pkmnshirts_188";
		iconName: "f_shirt_pkmnshirts_188_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100508;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtPkmnshirts201 = AvatarCustomization<
	"AVATAR_f_shirt_pkmnshirts_201",
	{
		assetName: "f_shirt_pkmnshirts_201";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_pkmnshirts_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_pkmnshirts_201";
		iconName: "f_shirt_pkmnshirts_201_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100507;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtPkmnshirts238 = AvatarCustomization<
	"AVATAR_f_shirt_pkmnshirts_238",
	{
		assetName: "f_shirt_pkmnshirts_238";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_pkmnshirts_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_pkmnshirts_238";
		iconName: "f_shirt_pkmnshirts_238_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100506;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtPoloshirt = AvatarCustomization<
	"AVATAR_f_shirt_poloshirt",
	{
		assetName: "f_shirt_poloshirt_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_poloshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_poloshirt_0";
		iconName: "f_shirt_poloshirt_0_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100500;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtPoloshirt1 = AvatarCustomization<
	"AVATAR_f_shirt_poloshirt_1",
	{
		assetName: "f_shirt_poloshirt_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_poloshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_poloshirt_1";
		iconName: "f_shirt_poloshirt_1_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100499;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtPoloshirt2 = AvatarCustomization<
	"AVATAR_f_shirt_poloshirt_2",
	{
		assetName: "f_shirt_poloshirt_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_poloshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_poloshirt_2";
		iconName: "f_shirt_poloshirt_2_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100498;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtProfwillowoutfit = AvatarCustomization<
	"AVATAR_f_shirt_profwillowoutfit",
	{
		assetName: "f_shirt_profwillowoutfit_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_profwillowoutfit_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_profwillowoutfit_0";
		iconName: "f_shirt_profwillowoutfit_00_bundle_icon";
		setNames: ["profwillowoutfit"];
		slot: ["SHIRT"];
		sortOrder: 101376;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtProjectguitar = AvatarCustomization<
	"AVATAR_f_shirt_projectguitar",
	{
		assetName: "f_shirt_projectguitar_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_projectguitar_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_projectguitar_0";
		iconName: "f_shirt_projectguitar_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101073;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtPumpkabooitems = AvatarCustomization<
	"AVATAR_f_shirt_pumpkabooitems",
	{
		assetName: "f_shirt_pumpkabooitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_pumpkabooitems_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_pumpkabooitems_0";
		iconName: "f_shirt_pumpkabooitems_00_bundle_icon";
		setNames: ["pumpkabooitems"];
		slot: ["SHIRT"];
		sortOrder: 101041;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtRegiicejersies = AvatarCustomization<
	"AVATAR_f_shirt_regiicejersies",
	{
		assetName: "f_shirt_regiicejersies_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_regiicejersies_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_regiicejersies_0";
		iconName: "f_shirt_regiicejersies_00_bundle_icon";
		setNames: ["regiicejersies"];
		slot: ["SHIRT"];
		sortOrder: 100941;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtRegirockjersies = AvatarCustomization<
	"AVATAR_f_shirt_regirockjersies",
	{
		assetName: "f_shirt_regirockjersies_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_regirockjersies_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_regirockjersies_0";
		iconName: "f_shirt_regirockjersies_00_bundle_icon";
		setNames: ["regirockjersies"];
		slot: ["SHIRT"];
		sortOrder: 100933;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtRegisteeljersies = AvatarCustomization<
	"AVATAR_f_shirt_registeeljersies",
	{
		assetName: "f_shirt_registeeljersies_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_registeeljersies_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_registeeljersies_0";
		iconName: "f_shirt_registeeljersies_00_bundle_icon";
		setNames: ["registeeljersies"];
		slot: ["SHIRT"];
		sortOrder: 100949;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtReuniclusitems = AvatarCustomization<
	"AVATAR_f_shirt_reuniclusitems",
	{
		assetName: "f_shirt_reuniclusitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_reuniclusitems_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_reuniclusitems_0";
		iconName: "f_shirt_reuniclusitems_00_bundle_icon";
		setNames: ["reuniclusitems"];
		slot: ["SHIRT"];
		sortOrder: 101495;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtRuinmaniac = AvatarCustomization<
	"AVATAR_f_shirt_ruinmaniac",
	{
		assetName: "f_shirt_ruinmaniac_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_ruinmaniac_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_ruinmaniac_0";
		iconName: "f_shirt_ruinmaniac_0_bundle_icon";
		setNames: ["ruinmaniac"];
		setPrimeItem: true;
		slot: ["SHIRT"];
		sortOrder: 100480;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtSafarizone2020 = AvatarCustomization<
	"AVATAR_f_shirt_safarizone2020",
	{
		assetName: "f_shirt_safarizone2020_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_safarizone2020_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_safarizone2020_0";
		iconName: "f_shirt_safarizone2020_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100510;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtSamsungsummer2020 = AvatarCustomization<
	"AVATAR_f_shirt_samsungsummer2020",
	{
		assetName: "f_shirt_samsungsummer2020_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_samsungsummer2020_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iapSku: "pgorelease.avatar.f_shirt_samsungsummer2020_0";
		iconName: "f_shirt_samsungsummer2020_0_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100739;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtShayminlandtshirt = AvatarCustomization<
	"AVATAR_f_shirt_shayminlandtshirt",
	{
		assetName: "f_shirt_shayminlandtshirt_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_shayminlandtshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_shayminlandtshirt_0";
		iconName: "f_shirt_shayminlandtshirt_00_bundle_icon";
		setNames: ["shaymin_land"];
		slot: ["SHIRT"];
		sortOrder: 101185;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtShayminskytshirt = AvatarCustomization<
	"AVATAR_f_shirt_shayminskytshirt",
	{
		assetName: "f_shirt_shayminskytshirt_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_shayminskytshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_shayminskytshirt_0";
		iconName: "f_shirt_shayminskytshirt_00_bundle_icon";
		setNames: ["shaymin_sky"];
		slot: ["SHIRT"];
		sortOrder: 101187;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtShinymewtshirts = AvatarCustomization<
	"AVATAR_f_shirt_shinymewtshirts",
	{
		assetName: "f_shirt_shinymewtshirts_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_shinymewtshirts_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_shinymewtshirts_0";
		iconName: "f_shirt_shinymewtshirts_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100885;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtSlowpokeshirts = AvatarCustomization<
	"AVATAR_f_shirt_slowpokeshirts",
	{
		assetName: "f_shirt_slowpokeshirts_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_slowpokeshirts_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_slowpokeshirts_0";
		iconName: "f_shirt_slowpokeshirts_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100921;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtSlowpoketailshirts = AvatarCustomization<
	"AVATAR_f_shirt_slowpoketailshirts",
	{
		assetName: "f_shirt_slowpoketailshirts_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_slowpoketailshirts_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_slowpoketailshirts_0";
		iconName: "f_shirt_slowpoketailshirts_00_bundle_icon";
		setNames: ["slowpoketailshirts"];
		slot: ["SHIRT"];
		sortOrder: 100925;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtSnorlaxonesie = AvatarCustomization<
	"AVATAR_f_shirt_snorlaxonesie",
	{
		assetName: "f_shirt_snorlaxonesie_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_snorlaxonesie_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_snorlaxonesie_0";
		iconName: "f_shirt_snorlaxonesie_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101401;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtSpiritomb0 = AvatarCustomization<
	"AVATAR_f_shirt_spiritomb_0",
	{
		assetName: "f_shirt_spiritomb_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_spiritomb_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_spiritomb_0";
		iconName: "f_shirt_spiritomb_0_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100462;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtSpring2021gulpin = AvatarCustomization<
	"AVATAR_f_shirt_spring2021gulpin",
	{
		assetName: "f_shirt_spring2021gulpin_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_spring2021gulpin_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_spring2021gulpin_0";
		iconName: "f_shirt_spring2021gulpin_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100907;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtSpring2021plusle = AvatarCustomization<
	"AVATAR_f_shirt_spring2021plusle",
	{
		assetName: "f_shirt_spring2021plusle_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_spring2021plusle_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_spring2021plusle_0";
		iconName: "f_shirt_spring2021plusle_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100906;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtSs = AvatarCustomization<
	"AVATAR_f_shirt_ss",
	{
		assetName: "f_shirt_ss_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_ss_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_ss_0_bundle_icon";
		setNames: ["ss"];
		slot: ["SHIRT"];
		sortOrder: 100502;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtSteven = AvatarCustomization<
	"AVATAR_f_shirt_steven",
	{
		assetName: "f_shirt_steven_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_steven_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_steven_0";
		iconName: "f_shirt_steven_0_bundle_icon";
		setNames: ["steven"];
		slot: ["SHIRT"];
		sortOrder: 100726;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtStevenfirst = AvatarCustomization<
	"AVATAR_f_shirt_stevenfirst",
	{
		assetName: "f_shirt_stevenfirst_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_stevenfirst_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_stevenfirst_0";
		iconName: "f_shirt_stevenfirst_00_bundle_icon";
		setNames: ["stevenfirst"];
		slot: ["SHIRT"];
		sortOrder: 101315;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtSukajanblastoise = AvatarCustomization<
	"AVATAR_f_shirt_sukajanblastoise",
	{
		assetName: "f_shirt_sukajanblastoise_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_sukajanblastoise_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_sukajanblastoise_0";
		iconName: "f_shirt_sukajanblastoise_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100882;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtSukajancharizard = AvatarCustomization<
	"AVATAR_f_shirt_sukajancharizard",
	{
		assetName: "f_shirt_sukajancharizard_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_sukajancharizard_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_sukajancharizard_0";
		iconName: "f_shirt_sukajancharizard_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100883;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtSukajanhouou = AvatarCustomization<
	"AVATAR_f_shirt_sukajanhouou",
	{
		assetName: "f_shirt_sukajanhouou_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_sukajanhouou_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_sukajanhouou_0";
		iconName: "f_shirt_sukajanhouou_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101143;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtSukajanlugia = AvatarCustomization<
	"AVATAR_f_shirt_sukajanlugia",
	{
		assetName: "f_shirt_sukajanlugia_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_sukajanlugia_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_sukajanlugia_0";
		iconName: "f_shirt_sukajanlugia_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101141;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtSukajanvenusaur = AvatarCustomization<
	"AVATAR_f_shirt_sukajanvenusaur",
	{
		assetName: "f_shirt_sukajanvenusaur_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_sukajanvenusaur_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_sukajanvenusaur_0";
		iconName: "f_shirt_sukajanvenusaur_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100881;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtSummer2023 = AvatarCustomization<
	"AVATAR_f_shirt_summer2023",
	{
		assetName: "f_shirt_summer2023_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_summer2023_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_summer2023_0";
		iconName: "f_shirt_summer2023_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101397;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtSustainability2021 = AvatarCustomization<
	"AVATAR_f_shirt_sustainability2021",
	{
		assetName: "f_shirt_sustainability2021_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_sustainability2021_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_sustainability2021_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100912;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtSvcostumescarletschool = AvatarCustomization<
	"AVATAR_f_shirt_svcostumescarletschool",
	{
		assetName: "f_shirt_svcostumescarletschool_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_svcostumescarletschool_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_svcostumescarletschool_00_bundle_icon";
		setNames: ["svcostumescarletschool"];
		slot: ["SHIRT"];
		sortOrder: 101289;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtSvcostumevioletschool = AvatarCustomization<
	"AVATAR_f_shirt_svcostumevioletschool",
	{
		assetName: "f_shirt_svcostumevioletschool_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_svcostumevioletschool_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_svcostumevioletschool_00_bundle_icon";
		setNames: ["svcostumevioletschool"];
		slot: ["SHIRT"];
		sortOrder: 101297;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtSvdlc1 = AvatarCustomization<
	"AVATAR_f_shirt_svdlc1",
	{
		assetName: "f_shirt_svdlc1_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_svdlc1_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_svdlc1_00_bundle_icon";
		setNames: ["svdlc"];
		slot: ["SHIRT"];
		sortOrder: 101459;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtSvdlc2fall = AvatarCustomization<
	"AVATAR_f_shirt_svdlc2fall",
	{
		assetName: "f_shirt_svdlc2fall_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_svdlc2fall_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_svdlc2fall_00_bundle_icon";
		setNames: ["svdlc2fall"];
		slot: ["SHIRT"];
		sortOrder: 101524;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtSvdlc2spring = AvatarCustomization<
	"AVATAR_f_shirt_svdlc2spring",
	{
		assetName: "f_shirt_svdlc2spring_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_svdlc2spring_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_svdlc2spring_00_bundle_icon";
		setNames: ["svdlc2spring"];
		slot: ["SHIRT"];
		sortOrder: 101523;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtSweater300 = AvatarCustomization<
	"AVATAR_f_shirt_sweater_30_0",
	{
		assetName: "f_shirt_sweater_30_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_sweater_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_sweater_30_0";
		iconName: "f_shirt_sweater_30_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100451;
		unlockPlayerLevel: 30;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtSweater301 = AvatarCustomization<
	"AVATAR_f_shirt_sweater_30_1",
	{
		assetName: "f_shirt_sweater_30_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_sweater_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_sweater_30_1";
		iconName: "f_shirt_sweater_30_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100450;
		unlockPlayerLevel: 30;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtSweater302 = AvatarCustomization<
	"AVATAR_f_shirt_sweater_30_2",
	{
		assetName: "f_shirt_sweater_30_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_sweater_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_sweater_30_2";
		iconName: "f_shirt_sweater_30_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100449;
		unlockPlayerLevel: 30;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtSweaterInstinct = AvatarCustomization<
	"AVATAR_f_shirt_sweater_instinct",
	{
		assetName: "f_shirt_sweater_instinct";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_sweater_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_sweater_instinct";
		iconName: "f_shirt_sweater_instinct_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100448;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtSweaterMystic = AvatarCustomization<
	"AVATAR_f_shirt_sweater_mystic",
	{
		assetName: "f_shirt_sweater_mystic";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_sweater_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_sweater_mystic";
		iconName: "f_shirt_sweater_mystic_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100447;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtSweaterValor = AvatarCustomization<
	"AVATAR_f_shirt_sweater_valor",
	{
		assetName: "f_shirt_sweater_valor";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_sweater_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_sweater_valor";
		iconName: "f_shirt_sweater_valor_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100446;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtSwshdlc2costume = AvatarCustomization<
	"AVATAR_f_shirt_swshdlc2costume",
	{
		assetName: "f_shirt_swshdlc2costume_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_swshdlc2costume_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_swshdlc2costume_00_bundle_icon";
		setNames: ["swshdlc2costume"];
		slot: ["SHIRT"];
		sortOrder: 100796;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtSwshdlccostume = AvatarCustomization<
	"AVATAR_f_shirt_swshdlccostume",
	{
		assetName: "f_shirt_swshdlccostume_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_swshdlccostume_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_swshdlccostume_00_bundle_icon";
		setNames: ["swshdlccostume"];
		slot: ["SHIRT"];
		sortOrder: 100516;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtSwshuniformchampion = AvatarCustomization<
	"AVATAR_f_shirt_swshuniformchampion",
	{
		assetName: "f_shirt_swshuniformchampion_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_swshuniformchampion_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_swshuniformchampion_0";
		iconName: "f_shirt_swshuniformchampion_00_bundle_icon";
		setNames: ["swshuniformchampion"];
		slot: ["SHIRT"];
		sortOrder: 101013;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtSwshuniformdark = AvatarCustomization<
	"AVATAR_f_shirt_swshuniformdark",
	{
		assetName: "f_shirt_swshuniformdark_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_swshuniformdark_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_swshuniformdark_0";
		iconName: "f_shirt_swshuniformdark_00_bundle_icon";
		setNames: ["swshuniformdark"];
		slot: ["SHIRT"];
		sortOrder: 101005;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtSwshuniformdefault = AvatarCustomization<
	"AVATAR_f_shirt_swshuniformdefault",
	{
		assetName: "f_shirt_swshuniformdefault_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_swshuniformdefault_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_swshuniformdefault_00_bundle_icon";
		setNames: ["swshuniformdefault"];
		slot: ["SHIRT"];
		sortOrder: 100996;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtSwshuniformdragon = AvatarCustomization<
	"AVATAR_f_shirt_swshuniformdragon",
	{
		assetName: "f_shirt_swshuniformdragon_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_swshuniformdragon_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_swshuniformdragon_0";
		iconName: "f_shirt_swshuniformdragon_00_bundle_icon";
		setNames: ["swshuniformdragon"];
		slot: ["SHIRT"];
		sortOrder: 100986;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtSylveonitems = AvatarCustomization<
	"AVATAR_f_shirt_sylveonitems",
	{
		assetName: "f_shirt_sylveonitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_sylveonitems_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_sylveonitems_0";
		iconName: "f_shirt_sylveonitems_00_bundle_icon";
		setNames: ["sylveonitems"];
		slot: ["SHIRT"];
		sortOrder: 100918;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtTanktop0 = AvatarCustomization<
	"AVATAR_f_shirt_tanktop_0",
	{
		assetName: "f_shirt_tanktop_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_tanktop_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_tanktop_0";
		iconName: "f_shirt_tanktop_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100445;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtTanktop1 = AvatarCustomization<
	"AVATAR_f_shirt_tanktop_1",
	{
		assetName: "f_shirt_tanktop_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_tanktop_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_tanktop_1";
		iconName: "f_shirt_tanktop_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100444;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtTanktop2 = AvatarCustomization<
	"AVATAR_f_shirt_tanktop_2",
	{
		assetName: "f_shirt_tanktop_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_tanktop_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_tanktop_2";
		iconName: "f_shirt_tanktop_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100443;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtTanktopCharizard0 = AvatarCustomization<
	"AVATAR_f_shirt_tanktop_charizard_0",
	{
		assetName: "f_shirt_tanktop_charizard_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_tanktop_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_tanktop_charizard_0";
		iconName: "f_shirt_tanktop_charizard_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100442;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtTanktopCharizard1 = AvatarCustomization<
	"AVATAR_f_shirt_tanktop_charizard_1",
	{
		assetName: "f_shirt_tanktop_charizard_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_tanktop_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_tanktop_charizard_1";
		iconName: "f_shirt_tanktop_charizard_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100441;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtTanktopCharizard2 = AvatarCustomization<
	"AVATAR_f_shirt_tanktop_charizard_2",
	{
		assetName: "f_shirt_tanktop_charizard_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_tanktop_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_tanktop_charizard_2";
		iconName: "f_shirt_tanktop_charizard_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100440;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtTanktopPikachu0 = AvatarCustomization<
	"AVATAR_f_shirt_tanktop_pikachu_0",
	{
		assetName: "f_shirt_tanktop_pikachu_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_tanktop_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_tanktop_pikachu_0";
		iconName: "f_shirt_tanktop_pikachu_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100439;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtTanktopPikachu1 = AvatarCustomization<
	"AVATAR_f_shirt_tanktop_pikachu_1",
	{
		assetName: "f_shirt_tanktop_pikachu_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_tanktop_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_tanktop_pikachu_1";
		iconName: "f_shirt_tanktop_pikachu_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100438;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtTanktopPikachu2 = AvatarCustomization<
	"AVATAR_f_shirt_tanktop_pikachu_2",
	{
		assetName: "f_shirt_tanktop_pikachu_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_tanktop_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_tanktop_pikachu_2";
		iconName: "f_shirt_tanktop_pikachu_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100437;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtTcgcollabtshirtandcap = AvatarCustomization<
	"AVATAR_f_shirt_tcgcollabtshirtandcap",
	{
		assetName: "f_shirt_tcgcollabtshirtandcap_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_tcgcollabtshirtandcap_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_tcgcollabtshirtandcap_0";
		iconName: "f_shirt_tcgcollabtshirtandcap_00_bundle_icon";
		setNames: ["tcgcollabtshirtandcap"];
		slot: ["SHIRT"];
		sortOrder: 101203;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtTeamaqua = AvatarCustomization<
	"AVATAR_f_shirt_teamaqua",
	{
		assetName: "f_shirt_teamaqua_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_teamaqua_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_teamaqua_0";
		iconName: "f_shirt_teamaqua_0_bundle_icon";
		setNames: ["teamaqua"];
		slot: ["SHIRT"];
		sortOrder: 100467;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtTeamblanche = AvatarCustomization<
	"AVATAR_f_shirt_teamblanche",
	{
		assetName: "f_shirt_teamblanche_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_teamblanche_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_teamblanche_0";
		iconName: "f_shirt_teamblanche_0_bundle_icon";
		setNames: ["teamblanche"];
		slot: ["SHIRT"];
		sortOrder: 100481;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtTeamcandela = AvatarCustomization<
	"AVATAR_f_shirt_teamcandela",
	{
		assetName: "f_shirt_teamcandela_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_teamcandela_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_teamcandela_0";
		iconName: "f_shirt_teamcandela_0_bundle_icon";
		setNames: ["teamcandela"];
		slot: ["SHIRT"];
		sortOrder: 100482;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtTeammagma = AvatarCustomization<
	"AVATAR_f_shirt_teammagma",
	{
		assetName: "f_shirt_teammagma_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_teammagma_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_teammagma_0";
		iconName: "f_shirt_teammagma_0_bundle_icon";
		setNames: ["teammagma"];
		slot: ["SHIRT"];
		sortOrder: 100468;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtTeamrocket0 = AvatarCustomization<
	"AVATAR_f_shirt_teamrocket_0",
	{
		assetName: "f_shirt_teamrocket_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_teamrocket_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_teamrocket_0";
		iconName: "f_shirt_teamrocket_0_bundle_icon";
		setNames: ["teamrocket_0"];
		slot: ["SHIRT"];
		sortOrder: 100436;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtTeamrocket1 = AvatarCustomization<
	"AVATAR_f_shirt_teamrocket_1",
	{
		assetName: "f_shirt_teamrocket_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_teamrocket_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_teamrocket_1";
		iconName: "f_shirt_teamrocket_1_bundle_icon";
		setNames: ["teamrocket_1"];
		slot: ["SHIRT"];
		sortOrder: 100435;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtTeamskull = AvatarCustomization<
	"AVATAR_f_shirt_teamskull",
	{
		assetName: "f_shirt_teamskull_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_teamskull_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_teamskull_0";
		iconName: "f_shirt_teamskull_00_bundle_icon";
		setNames: ["teamskull"];
		slot: ["SHIRT"];
		sortOrder: 101158;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtTeamspark = AvatarCustomization<
	"AVATAR_f_shirt_teamspark",
	{
		assetName: "f_shirt_teamspark_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_teamspark_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_teamspark_0";
		iconName: "f_shirt_teamspark_0_bundle_icon";
		setNames: ["teamspark"];
		slot: ["SHIRT"];
		sortOrder: 100483;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtTogepihoodie = AvatarCustomization<
	"AVATAR_f_shirt_togepihoodie",
	{
		assetName: "f_shirt_togepihoodie_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_togepihoodie_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_togepihoodie_0";
		iconName: "f_shirt_togepihoodie_0_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100511;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtTracksuitsgroudon = AvatarCustomization<
	"AVATAR_f_shirt_tracksuitsgroudon",
	{
		assetName: "f_shirt_tracksuitsgroudon_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_tracksuitsgroudon_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_tracksuitsgroudon_0";
		iconName: "f_shirt_tracksuitsgroudon_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101349;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtTracksuitskyogre = AvatarCustomization<
	"AVATAR_f_shirt_tracksuitskyogre",
	{
		assetName: "f_shirt_tracksuitskyogre_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_tracksuitskyogre_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_tracksuitskyogre_0";
		iconName: "f_shirt_tracksuitskyogre_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101351;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtTshirtCycling0 = AvatarCustomization<
	"AVATAR_f_shirt_tshirt_cycling_0",
	{
		assetName: "f_shirt_tshirt_cycling_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_tshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_tshirt_cycling_0";
		iconName: "f_shirt_tshirt_cycling_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100434;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtTshirtCycling1 = AvatarCustomization<
	"AVATAR_f_shirt_tshirt_cycling_1",
	{
		assetName: "f_shirt_tshirt_cycling_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_tshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_tshirt_cycling_1";
		iconName: "f_shirt_tshirt_cycling_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100433;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtTshirtCycling2 = AvatarCustomization<
	"AVATAR_f_shirt_tshirt_cycling_2",
	{
		assetName: "f_shirt_tshirt_cycling_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_tshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_tshirt_cycling_2";
		iconName: "f_shirt_tshirt_cycling_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100432;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtTshirtCycling3 = AvatarCustomization<
	"AVATAR_f_shirt_tshirt_cycling_3",
	{
		assetName: "f_shirt_tshirt_cycling_3";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_tshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_tshirt_cycling_3";
		iconName: "f_shirt_tshirt_cycling_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100431;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtTshirtFestChicago2017 = AvatarCustomization<
	"AVATAR_f_shirt_tshirt_fest_chicago_2017",
	{
		assetName: "f_shirt_tshirt_fest_chicago_2017";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_tshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_tshirt_fest_chicago_2017_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100417;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtTshirtFestChicago2018 = AvatarCustomization<
	"AVATAR_f_shirt_tshirt_fest_chicago_2018",
	{
		assetName: "f_shirt_tshirt_fest_chicago_2018";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_tshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_tshirt_fest_chicago_2018_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100416;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtTshirtGlobalGoals2017 = AvatarCustomization<
	"AVATAR_f_shirt_tshirt_global_goals_2017",
	{
		assetName: "f_shirt_tshirt_global_goals_2017";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_tshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_tshirt_global_goals_2017_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100415;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtTshirtPikachu0 = AvatarCustomization<
	"AVATAR_f_shirt_tshirt_pikachu_0",
	{
		assetName: "f_shirt_tshirt_pikachu_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_tshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_tshirt_pikachu_0";
		iconName: "f_shirt_tshirt_pikachu_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100430;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtTshirtPikachu1 = AvatarCustomization<
	"AVATAR_f_shirt_tshirt_pikachu_1",
	{
		assetName: "f_shirt_tshirt_pikachu_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_tshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_tshirt_pikachu_1";
		iconName: "f_shirt_tshirt_pikachu_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100429;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtTshirtPikachu2 = AvatarCustomization<
	"AVATAR_f_shirt_tshirt_pikachu_2",
	{
		assetName: "f_shirt_tshirt_pikachu_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_tshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_tshirt_pikachu_2";
		iconName: "f_shirt_tshirt_pikachu_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100428;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtTshirtPikachu3 = AvatarCustomization<
	"AVATAR_f_shirt_tshirt_pikachu_3",
	{
		assetName: "f_shirt_tshirt_pikachu_3";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_tshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_tshirt_pikachu_3";
		iconName: "f_shirt_tshirt_pikachu_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100427;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtTshirtPikachu4 = AvatarCustomization<
	"AVATAR_f_shirt_tshirt_pikachu_4",
	{
		assetName: "f_shirt_tshirt_pikachu_4";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_tshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_tshirt_pikachu_4";
		iconName: "f_shirt_tshirt_pikachu_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100426;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtTshirtPikachu5 = AvatarCustomization<
	"AVATAR_f_shirt_tshirt_pikachu_5",
	{
		assetName: "f_shirt_tshirt_pikachu_5";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_tshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_tshirt_pikachu_5";
		iconName: "f_shirt_tshirt_pikachu_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100425;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtTshirtPikachu6 = AvatarCustomization<
	"AVATAR_f_shirt_tshirt_pikachu_6",
	{
		assetName: "f_shirt_tshirt_pikachu_6";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_tshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_tshirt_pikachu_6";
		iconName: "f_shirt_tshirt_pikachu_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100424;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtTurtwigonesie = AvatarCustomization<
	"AVATAR_f_shirt_turtwigonesie",
	{
		assetName: "f_shirt_turtwigonesie_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_turtwigonesie_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_turtwigonesie_0";
		iconName: "f_shirt_turtwigonesie_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101062;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtUltrareconsquad = AvatarCustomization<
	"AVATAR_f_shirt_ultraReconSquad",
	{
		assetName: "f_shirt_ultraReconSquad_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_ultrareconsquad_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_ultraReconSquad_0";
		iconName: "f_shirt_ultrareconsquad_00_bundle_icon";
		setNames: ["ultraReconSquad", "ultraReconSquadB"];
		slot: ["SHIRT"];
		sortOrder: 101248;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtUltra0 = AvatarCustomization<
	"AVATAR_f_shirt_ultra_0",
	{
		assetName: "f_shirt_ultra_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_ultra_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_ultra_bundle_icon";
		setNames: ["ultra_0"];
		slot: ["SHIRT"];
		sortOrder: 100414;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtUniqlotshirts0 = AvatarCustomization<
	"AVATAR_f_shirt_uniqlotshirts_0",
	{
		assetName: "f_shirt_uniqlotshirts_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_uniqlotshirts_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iconName: "f_shirt_uniqlotshirts_0_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100513;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtUniqlotshirts1 = AvatarCustomization<
	"AVATAR_f_shirt_uniqlotshirts_1",
	{
		assetName: "f_shirt_uniqlotshirts_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_uniqlotshirts_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iconName: "f_shirt_uniqlotshirts_1_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100514;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtUniqlotshirts2 = AvatarCustomization<
	"AVATAR_f_shirt_uniqlotshirts_2",
	{
		assetName: "f_shirt_uniqlotshirts_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_uniqlotshirts_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iconName: "f_shirt_uniqlotshirts_2_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100515;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtUnwto = AvatarCustomization<
	"AVATAR_f_shirt_unwto",
	{
		assetName: "f_shirt_unwto_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_unwto_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_unwto_0_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100489;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtValentine2023 = AvatarCustomization<
	"AVATAR_f_shirt_valentine2023",
	{
		assetName: "f_shirt_valentine2023_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_valentine2023_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_valentine2023_0";
		iconName: "f_shirt_valentine2023_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101345;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtVerizon2020 = AvatarCustomization<
	"AVATAR_f_shirt_verizon2020",
	{
		assetName: "f_shirt_verizon2020sweater_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_verizon2020sweater_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iapSku: "pgorelease.avatar.f_shirt_verizon2020sweater_0";
		iconName: "f_shirt_verizon2020sweater_0_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100749;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtVeterantrainerxy = AvatarCustomization<
	"AVATAR_f_shirt_veterantrainerxy",
	{
		assetName: "f_shirt_veterantrainerxy_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_veterantrainerxy_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_veterantrainerxy_0";
		iconName: "f_shirt_veterantrainerxy_0_bundle_icon";
		setNames: ["veterantrainerxy"];
		slot: ["SHIRT"];
		sortOrder: 100469;
		unlockBadgeLevel: 200;
		unlockBadgeType: "BADGE_ULTRA_LEAGUE";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtVictinitshirts = AvatarCustomization<
	"AVATAR_f_shirt_victinitshirts",
	{
		assetName: "f_shirt_victinitshirts_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_victinitshirts_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_victinitshirts_0";
		iconName: "f_shirt_victinitshirts_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100748;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtWcs2022 = AvatarCustomization<
	"AVATAR_f_shirt_wcs2022",
	{
		assetName: "f_shirt_wcs2022_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_wcs2022_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_wcs2022_0";
		iconName: "f_shirt_wcs2022_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101156;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtWcs2022tshirtbulu = AvatarCustomization<
	"AVATAR_f_shirt_wcs2022tshirtbulu",
	{
		assetName: "f_shirt_wcs2022tshirtbulu_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_wcs2022tshirtbulu_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_wcs2022tshirtbulu_0";
		iconName: "f_shirt_wcs2022tshirtbulu_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101205;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtWcs2022tshirtred = AvatarCustomization<
	"AVATAR_f_shirt_wcs2022tshirtred",
	{
		assetName: "f_shirt_wcs2022tshirtred_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_wcs2022tshirtred_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_wcs2022tshirtred_0";
		iconName: "f_shirt_wcs2022tshirtred_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101207;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtWcs2022winnersitems = AvatarCustomization<
	"AVATAR_f_shirt_wcs2022winnersitems",
	{
		assetName: "f_shirt_wcs2022winnersitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_wcs2022winnersitems_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_wcs2022winnersitems_0";
		iconName: "f_shirt_wcs2022winnersitems_00_bundle_icon";
		setNames: ["wcs2022winnersitems"];
		slot: ["SHIRT"];
		sortOrder: 101218;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtWcs2023 = AvatarCustomization<
	"AVATAR_f_shirt_wcs2023",
	{
		assetName: "f_shirt_wcs2023_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_wcs2023_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_wcs2023_0";
		iconName: "f_shirt_wcs2023_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101384;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtWcs2023promotshirt = AvatarCustomization<
	"AVATAR_f_shirt_wcs2023promotshirt",
	{
		assetName: "f_shirt_wcs2023promotshirt_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_wcs2023promotshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "f_shirt_wcs2023promotshirt_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101436;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShirtWcs2023promotshirt01 = AvatarCustomization<
	"AVATAR_f_shirt_wcs2023promotshirt_01",
	{
		assetName: "f_shirt_wcs2023promotshirt_01_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_wcs2023promotshirt_01_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_wcs2023promotshirt_01_0";
		iconName: "f_shirt_wcs2023promotshirt_01_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101438;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtWcs2023sukajan = AvatarCustomization<
	"AVATAR_f_shirt_wcs2023sukajan",
	{
		assetName: "f_shirt_wcs2023sukajan_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_wcs2023sukajan_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_wcs2023sukajan_0";
		iconName: "f_shirt_wcs2023sukajan_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101444;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtWcs2023winnersitems = AvatarCustomization<
	"AVATAR_f_shirt_wcs2023winnersitems",
	{
		assetName: "f_shirt_wcs2023winnersitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_wcs2023winnersitems_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_wcs2023winnersitems_0";
		iconName: "f_shirt_wcs2023winnersitems_00_bundle_icon";
		setNames: ["boxingoutfit"];
		slot: ["SHIRT"];
		sortOrder: 101443;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtWcs2024 = AvatarCustomization<
	"AVATAR_f_shirt_wcs2024",
	{
		assetName: "f_shirt_wcs2024_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_wcs2024_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_wcs2024_0";
		iconName: "f_shirt_wcs2024_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101603;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtWcs2024championshipshirtBlue = AvatarCustomization<
	"AVATAR_f_shirt_wcs2024championshipshirt-blue",
	{
		assetName: "f_shirt_wcs2024championshipshirt-blue_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_wcs2024championshipshirt-blue_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_wcs2024championshipshirt-blue_0";
		iconName: "f_shirt_wcs2024championshipshirt-blue_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101628;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtWcs2024championshipshirtWhite = AvatarCustomization<
	"AVATAR_f_shirt_wcs2024championshipshirt-white",
	{
		assetName: "f_shirt_wcs2024championshipshirt-white_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_wcs2024championshipshirt-white_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_wcs2024championshipshirt-white_0";
		iconName: "f_shirt_wcs2024championshipshirt-white_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101626;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtWcsyokohama = AvatarCustomization<
	"AVATAR_f_shirt_wcsyokohama",
	{
		assetName: "f_shirt_wcsyokohama_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_wcsyokohama_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_wcsyokohama_0";
		iconName: "f_shirt_wcsyokohama_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101434;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtWhitecoat = AvatarCustomization<
	"AVATAR_f_shirt_whitecoat",
	{
		assetName: "f_shirt_whitecoat_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_whitecoat_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_whitecoat_0";
		iconName: "f_shirt_whitecoat_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100850;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtWintersweater2023 = AvatarCustomization<
	"AVATAR_f_shirt_wintersweater2023",
	{
		assetName: "f_shirt_wintersweater2023_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_wintersweater2023_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_wintersweater2023_0";
		iconName: "f_shirt_wintersweater2023_00_bundle_icon";
		setNames: ["winter2023"];
		slot: ["SHIRT"];
		sortOrder: 101531;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShirtZoruaonesie = AvatarCustomization<
	"AVATAR_f_shirt_zoruaonesie",
	{
		assetName: "f_shirt_zoruaonesie_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shirt_zoruaonesie_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.f_shirt_zoruaonesie_0";
		iconName: "f_shirt_zoruaonesie_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101275;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoes6thanniversary = AvatarCustomization<
	"AVATAR_f_shoes_6thanniversary",
	{
		assetName: "f_shoes_6thanniversary_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_6thanniversary_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_6thanniversary_0";
		iconName: "f_shoes_6thanniversary_00_bundle_icon";
		setNames: ["6thanniversary"];
		slot: ["SHOES"];
		sortOrder: 101214;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesAcetrainerbw = AvatarCustomization<
	"AVATAR_f_shoes_acetrainerbw",
	{
		assetName: "f_shoes_acetrainerbw_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_acetrainerbw_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_acetrainerbw_0";
		iconName: "f_shoes_acetrainerbw_0_bundle_icon";
		setNames: ["acetrainerbw"];
		slot: ["SHOES"];
		sortOrder: 100386;
		unlockBadgeLevel: 100;
		unlockBadgeType: "BADGE_BATTLE_TRAINING_WON";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesAcetrainersm = AvatarCustomization<
	"AVATAR_f_shoes_acetrainersm",
	{
		assetName: "f_shoes_acetrainersm_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_acetrainersm_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_acetrainersm_0";
		iconName: "f_shoes_acetrainersm_0_bundle_icon";
		setNames: ["acetrainersm"];
		slot: ["SHOES"];
		sortOrder: 100385;
		unlockBadgeLevel: 50;
		unlockBadgeType: "BADGE_MASTER_LEAGUE";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesAnimegou = AvatarCustomization<
	"AVATAR_f_shoes_animegou",
	{
		assetName: "f_shoes_animegou_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_animegou_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "f_shoes_animegou_00_bundle_icon";
		setNames: ["animegou"];
		slot: ["SHOES"];
		sortOrder: 100817;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShoesBackpacker = AvatarCustomization<
	"AVATAR_f_shoes_backpacker",
	{
		assetName: "f_shoes_backpacker_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_backpacker_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_backpacker_0";
		iconName: "f_shoes_backpacker_0_bundle_icon";
		setNames: ["backpacker"];
		slot: ["SHOES"];
		sortOrder: 100387;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesBattlegirl0 = AvatarCustomization<
	"AVATAR_f_shoes_battlegirl_0",
	{
		assetName: "f_shoes_battlegirl_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_battlegirl_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_battlegirl_0";
		iconName: "f_shoes_battlegirl_bundle_icon";
		setNames: ["battlegirl_0"];
		slot: ["SHOES"];
		sortOrder: 100379;
		unlockBadgeLevel: 100;
		unlockBadgeType: "BADGE_BATTLE_ATTACK_WON";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesBwn = AvatarCustomization<
	"AVATAR_f_shoes_bwn",
	{
		assetName: "f_shoes_bwn_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_bwn_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_bwn_0";
		iconName: "f_shoes_bwn_00_bundle_icon";
		setNames: ["bwn"];
		slot: ["SHOES"];
		sortOrder: 100834;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesCarbink = AvatarCustomization<
	"AVATAR_f_shoes_carbink",
	{
		assetName: "f_shoes_carbink_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_carbink_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_carbink_0";
		iconName: "f_shoes_carbink_00_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 101417;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesClay = AvatarCustomization<
	"AVATAR_f_shoes_clay",
	{
		assetName: "f_shoes_clay_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_clay_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_clay_0";
		iconName: "f_shoes_clay_00_bundle_icon";
		setNames: ["clay"];
		slot: ["SHOES"];
		sortOrder: 101409;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesCoolboots = AvatarCustomization<
	"AVATAR_f_shoes_coolboots",
	{
		assetName: "f_shoes_coolboots_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_coolboots_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "f_shoes_coolboots_00_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100819;
		unlockPlayerLevel: 49;
		unlockType: "LEVEL_REWARD";
	}
>;
export type AvatarCustomizationFShoesDedenneitems = AvatarCustomization<
	"AVATAR_f_shoes_dedenneitems",
	{
		assetName: "f_shoes_dedenneitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_dedenneitems_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_dedenneitems_0";
		iconName: "f_shoes_dedenneitems_00_bundle_icon";
		setNames: ["dedenneitems"];
		slot: ["SHOES"];
		sortOrder: 101056;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesDefault0 = AvatarCustomization<
	"AVATAR_f_shoes_default_0",
	{
		assetName: "f_shoes_default_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_default_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "f_shoes_default_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100369;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShoesDefault1 = AvatarCustomization<
	"AVATAR_f_shoes_default_1",
	{
		assetName: "f_shoes_default_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_default_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "f_shoes_default_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100368;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShoesDefault2 = AvatarCustomization<
	"AVATAR_f_shoes_default_2",
	{
		assetName: "f_shoes_default_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_default_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "f_shoes_default_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100367;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShoesDefault3 = AvatarCustomization<
	"AVATAR_f_shoes_default_3",
	{
		assetName: "f_shoes_default_3";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_default_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "f_shoes_default_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100366;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShoesDefault4 = AvatarCustomization<
	"AVATAR_f_shoes_default_4",
	{
		assetName: "f_shoes_default_4";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_default_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "f_shoes_default_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100365;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShoesDefault5 = AvatarCustomization<
	"AVATAR_f_shoes_default_5",
	{
		assetName: "f_shoes_default_5";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_default_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "f_shoes_default_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100364;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShoesDefault6 = AvatarCustomization<
	"AVATAR_f_shoes_default_6",
	{
		assetName: "f_shoes_default_6";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_default_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "f_shoes_default_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100363;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShoesDelibird = AvatarCustomization<
	"AVATAR_f_shoes_delibird",
	{
		assetName: "f_shoes_delibird_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_delibird_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_delibird_0";
		iconName: "f_shoes_delibird_0_bundle_icon";
		setNames: ["delibird"];
		slot: ["SHOES"];
		sortOrder: 100381;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesDp = AvatarCustomization<
	"AVATAR_f_shoes_dp",
	{
		assetName: "f_shoes_dp_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_dp_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "f_shoes_dp_00_bundle_icon";
		setNames: ["dp"];
		slot: ["SHOES"];
		sortOrder: 101070;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShoesElesa = AvatarCustomization<
	"AVATAR_f_shoes_elesa",
	{
		assetName: "f_shoes_elesa_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_elesa_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_elesa_0";
		iconName: "f_shoes_elesa_00_bundle_icon";
		setNames: ["elesa"];
		slot: ["SHOES"];
		sortOrder: 100877;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesEmpty = AvatarCustomization<
	"AVATAR_f_shoes_empty",
	{
		assetName: "f_shoes_empty";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_empty_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "f_shoes_empty_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100362;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShoesFashionweek2022 = AvatarCustomization<
	"AVATAR_f_shoes_fashionWeek2022",
	{
		assetName: "f_shoes_fashionWeek2022_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_fashionweek2022_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_fashionWeek2022_0";
		iconName: "f_shoes_fashionweek2022_00_bundle_icon";
		setNames: ["fashionWeek2022"];
		slot: ["SHOES"];
		sortOrder: 101270;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesFrlg0 = AvatarCustomization<
	"AVATAR_f_shoes_frlg_0",
	{
		assetName: "f_shoes_frlg_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_frlg_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_frlg_0";
		iconName: "f_shoes_frlg_bundle_icon";
		setNames: ["frlg_0"];
		slot: ["SHOES"];
		sortOrder: 100378;
		unlockBadgeLevel: 5;
		unlockBadgeType: "BADGE_POKEDEX_ENTRIES";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesFw2022 = AvatarCustomization<
	"AVATAR_f_shoes_fw2022",
	{
		assetName: "f_shoes_fw2022_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_fw2022_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_fw2022_0";
		iconName: "f_shoes_fw2022_00_bundle_icon";
		setNames: ["fw2022"];
		slot: ["SHOES"];
		sortOrder: 101261;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesGeeta = AvatarCustomization<
	"AVATAR_f_shoes_geeta",
	{
		assetName: "f_shoes_geeta_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_geeta_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_geeta_0";
		iconName: "f_shoes_geeta_00_bundle_icon";
		setNames: ["geeta"];
		slot: ["SHOES"];
		sortOrder: 101453;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesGiovanni = AvatarCustomization<
	"AVATAR_f_shoes_giovanni",
	{
		assetName: "f_shoes_giovanni_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_giovanni_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_giovanni_0";
		iconName: "f_shoes_giovanni_0_bundle_icon";
		setNames: ["giovanni"];
		slot: ["SHOES"];
		sortOrder: 100396;
		unlockBadgeLevel: 5;
		unlockBadgeType: "BADGE_ROCKET_GIOVANNI_DEFEATED";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesGladion = AvatarCustomization<
	"AVATAR_f_shoes_gladion",
	{
		assetName: "f_shoes_gladion_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_gladion_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_gladion_0";
		iconName: "f_shoes_gladion_00_bundle_icon";
		setNames: ["gladion"];
		slot: ["SHOES"];
		sortOrder: 101129;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesGothitelleitems = AvatarCustomization<
	"AVATAR_f_shoes_gothitelleitems",
	{
		assetName: "f_shoes_gothitelleitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_gothitelleitems_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_gothitelleitems_0";
		iconName: "f_shoes_gothitelleitems_00_bundle_icon";
		setNames: ["gothitelleitems"];
		slot: ["SHOES"];
		sortOrder: 101503;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesGreen = AvatarCustomization<
	"AVATAR_f_shoes_green",
	{
		assetName: "f_shoes_green_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_green_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.gbl.avatar.f_shoes_green_0";
		iconName: "f_shoes_green_00_bundle_icon";
		setNames: ["green"];
		slot: ["SHOES"];
		sortOrder: 100738;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesGymleader0 = AvatarCustomization<
	"AVATAR_f_shoes_gymleader_0",
	{
		assetName: "f_shoes_gymleader_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_gymleader_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_gymleader_0";
		iconName: "f_shoes_gymleader_bundle_icon";
		setNames: ["gymleader_0"];
		slot: ["SHOES"];
		sortOrder: 100377;
		unlockBadgeLevel: 100;
		unlockBadgeType: "BADGE_HOURS_DEFENDED";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesGymleader1 = AvatarCustomization<
	"AVATAR_f_shoes_gymleader_1",
	{
		assetName: "f_shoes_gymleader_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_gymleader_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_gymleader_1";
		iconName: "f_shoes_gymleader_bundle_icon";
		setNames: ["gymleader_1"];
		slot: ["SHOES"];
		sortOrder: 100376;
		unlockBadgeLevel: 100;
		unlockBadgeType: "BADGE_HOURS_DEFENDED";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesGymleader2 = AvatarCustomization<
	"AVATAR_f_shoes_gymleader_2",
	{
		assetName: "f_shoes_gymleader_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_gymleader_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_gymleader_2";
		iconName: "f_shoes_gymleader_bundle_icon";
		setNames: ["gymleader_2"];
		slot: ["SHOES"];
		sortOrder: 100375;
		unlockBadgeLevel: 100;
		unlockBadgeType: "BADGE_HOURS_DEFENDED";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesHala = AvatarCustomization<
	"AVATAR_f_shoes_hala",
	{
		assetName: "f_shoes_hala_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_hala_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_hala_0";
		iconName: "f_shoes_hala_00_bundle_icon";
		setNames: ["hala"];
		slot: ["SHOES"];
		sortOrder: 101584;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesHgss0 = AvatarCustomization<
	"AVATAR_f_shoes_hgss_0",
	{
		assetName: "f_shoes_hgss_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_hgss_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_hgss_0";
		iconName: "f_shoes_hgss_bundle_icon";
		setNames: ["hgss_0"];
		slot: ["SHOES"];
		sortOrder: 100374;
		unlockBadgeLevel: 5;
		unlockBadgeType: "BADGE_POKEDEX_ENTRIES_GEN2";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesIngo = AvatarCustomization<
	"AVATAR_f_shoes_ingo",
	{
		assetName: "f_shoes_ingo_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_ingo_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_ingo_0";
		iconName: "f_shoes_ingo_00_bundle_icon";
		setNames: ["ingo"];
		slot: ["SHOES"];
		sortOrder: 101509;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesKorrina = AvatarCustomization<
	"AVATAR_f_shoes_korrina",
	{
		assetName: "f_shoes_korrina_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_korrina_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_korrina_0";
		iconName: "f_shoes_korrina_00_bundle_icon";
		setNames: ["korrina"];
		slot: ["SHOES"];
		sortOrder: 100959;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesLadiamondoutfit = AvatarCustomization<
	"AVATAR_f_shoes_ladiamondoutfit",
	{
		assetName: "f_shoes_ladiamondoutfit_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_ladiamondoutfit_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_ladiamondoutfit_0";
		iconName: "f_shoes_ladiamondoutfit_00_bundle_icon";
		setNames: ["ladiamondoutfit"];
		slot: ["SHOES"];
		sortOrder: 101572;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesLana = AvatarCustomization<
	"AVATAR_f_shoes_lana",
	{
		assetName: "f_shoes_lana_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_lana_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_lana_0";
		iconName: "f_shoes_lana_00_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 101615;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesLapearloutfit = AvatarCustomization<
	"AVATAR_f_shoes_lapearloutfit",
	{
		assetName: "f_shoes_lapearloutfit_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_lapearloutfit_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_lapearloutfit_0";
		iconName: "f_shoes_lapearloutfit_00_bundle_icon";
		setNames: ["lapearloutfit"];
		slot: ["SHOES"];
		sortOrder: 101576;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesLegendofarceus = AvatarCustomization<
	"AVATAR_f_shoes_legendofarceus",
	{
		assetName: "f_shoes_legendofarceus_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_legendofarceus_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "f_shoes_legendofarceus_00_bundle_icon";
		setNames: ["legendofarceus"];
		slot: ["SHOES"];
		sortOrder: 101113;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShoesLoosepants = AvatarCustomization<
	"AVATAR_f_shoes_loosepants",
	{
		assetName: "f_shoes_loosepants_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_loosepants_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_loosepants_0";
		iconName: "f_shoes_loosepants_0_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100400;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesLoosepants1 = AvatarCustomization<
	"AVATAR_f_shoes_loosepants_1",
	{
		assetName: "f_shoes_loosepants_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_loosepants_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_loosepants_1";
		iconName: "f_shoes_loosepants_0_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100401;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesLoosepants2 = AvatarCustomization<
	"AVATAR_f_shoes_loosepants_2",
	{
		assetName: "f_shoes_loosepants_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_loosepants_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_loosepants_2";
		iconName: "f_shoes_loosepants_0_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100402;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesLoosepants3 = AvatarCustomization<
	"AVATAR_f_shoes_loosepants_3",
	{
		assetName: "f_shoes_loosepants_3";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_loosepants_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_loosepants_3";
		iconName: "f_shoes_loosepants_0_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100403;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesLuvdiscpack = AvatarCustomization<
	"AVATAR_f_shoes_luvdiscpack",
	{
		assetName: "f_shoes_luvdiscpack_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_luvdiscpack_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_luvdiscpack_0";
		iconName: "f_shoes_luvdiscpack_0_bundle_icon";
		setNames: ["luvdiscpack"];
		slot: ["SHOES"];
		sortOrder: 100399;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesLysandre = AvatarCustomization<
	"AVATAR_f_shoes_lysandre",
	{
		assetName: "f_shoes_lysandre_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_lysandre_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_lysandre_0";
		iconName: "f_shoes_lysandre_00_bundle_icon";
		setNames: ["lysandre"];
		slot: ["SHOES"];
		sortOrder: 101082;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesMegalopunnyitems = AvatarCustomization<
	"AVATAR_f_shoes_megalopunnyitems",
	{
		assetName: "f_shoes_megalopunnyitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_megalopunnyitems_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_megalopunnyitems_0";
		iconName: "f_shoes_megalopunnyitems_00_bundle_icon";
		setNames: ["megalopunnyitems"];
		slot: ["SHOES"];
		sortOrder: 100905;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesMelmetalshoes = AvatarCustomization<
	"AVATAR_f_shoes_melmetalshoes",
	{
		assetName: "f_shoes_melmetalshoes_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_melmetalshoes_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_melmetalshoes_0";
		iconName: "f_shoes_melmetalshoes_00_bundle_icon";
		setNames: ["melmetal_jacket", "melmetal_vest"];
		slot: ["SHOES"];
		sortOrder: 100807;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesMewtwo = AvatarCustomization<
	"AVATAR_f_shoes_mewtwo",
	{
		assetName: "f_shoes_mewtwo_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_mewtwo_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_mewtwo_0";
		iconName: "f_shoes_mewtwo_0_bundle_icon";
		setNames: ["mewtwo"];
		slot: ["SHOES"];
		sortOrder: 100392;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesMisty = AvatarCustomization<
	"AVATAR_f_shoes_misty",
	{
		assetName: "f_shoes_misty_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_misty_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_misty_0";
		iconName: "f_shoes_misty_0_bundle_icon";
		setNames: ["misty"];
		slot: ["SHOES"];
		sortOrder: 100380;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesNewyear2022 = AvatarCustomization<
	"AVATAR_f_shoes_newyear2022",
	{
		assetName: "f_shoes_newyear2022_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_newyear2022_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_newyear2022_0";
		iconName: "f_shoes_newyear2022_00_bundle_icon";
		setNames: ["newyear"];
		slot: ["SHOES"];
		sortOrder: 101102;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesNike2021 = AvatarCustomization<
	"AVATAR_f_shoes_nike2021",
	{
		assetName: "f_shoes_nike2021_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_nike2021_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iapSku: "pgorelease.avatar.f_shoes_nike2021_0";
		iconName: "f_shoes_nike2021_00_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 101032;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesOras = AvatarCustomization<
	"AVATAR_f_shoes_oras",
	{
		assetName: "f_shoes_oras_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_oras_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "f_shoes_oras_00_bundle_icon";
		setNames: ["oras"];
		slot: ["SHOES"];
		sortOrder: 101357;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShoesPajamas20220 = AvatarCustomization<
	"AVATAR_f_shoes_pajamas2022_0",
	{
		assetName: "f_shoes_pajamas2022_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_pajamas2022_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_pajamas2022_0";
		iconName: "f_shoes_pajamas2022_bundle_icon";
		setNames: ["pajamas2022_0"];
		slot: ["SHOES"];
		sortOrder: 101327;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesPajamas20221 = AvatarCustomization<
	"AVATAR_f_shoes_pajamas2022_1",
	{
		assetName: "f_shoes_pajamas2022_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_pajamas2022_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_pajamas2022_1";
		iconName: "f_shoes_pajamas2022_bundle_icon";
		setNames: ["pajamas2022_1"];
		slot: ["SHOES"];
		sortOrder: 101333;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesPalmer = AvatarCustomization<
	"AVATAR_f_shoes_palmer",
	{
		assetName: "f_shoes_palmer_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_palmer_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_palmer_0";
		iconName: "f_shoes_palmer_00_bundle_icon";
		setNames: ["palmer"];
		slot: ["SHOES"];
		sortOrder: 101373;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesPikachufan0 = AvatarCustomization<
	"AVATAR_f_shoes_pikachufan_0",
	{
		assetName: "f_shoes_pikachufan_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_pikachufan_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_pikachufan_0";
		iconName: "f_shoes_pikachufan_bundle_icon";
		setNames: ["pikachufan_0"];
		slot: ["SHOES"];
		sortOrder: 100373;
		unlockBadgeLevel: 50;
		unlockBadgeType: "BADGE_PIKACHU";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesPikachulibre = AvatarCustomization<
	"AVATAR_f_shoes_pikachulibre",
	{
		assetName: "f_shoes_pikachulibre_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_pikachulibre_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_pikachulibre_0";
		iconName: "f_shoes_pikachulibre_0_bundle_icon";
		setNames: ["pikachulibre"];
		slot: ["SHOES"];
		sortOrder: 100398;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesProfwillowoutfit = AvatarCustomization<
	"AVATAR_f_shoes_profwillowoutfit",
	{
		assetName: "f_shoes_profwillowoutfit_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_profwillowoutfit_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_profwillowoutfit_0";
		iconName: "f_shoes_profwillowoutfit_00_bundle_icon";
		setNames: ["profwillowoutfit"];
		slot: ["SHOES"];
		sortOrder: 101375;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesRegiicejersies = AvatarCustomization<
	"AVATAR_f_shoes_regiicejersies",
	{
		assetName: "f_shoes_regiicejersies_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_regiicejersies_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_regiicejersies_0";
		iconName: "f_shoes_regiicejersies_00_bundle_icon";
		setNames: ["regiicejersies"];
		slot: ["SHOES"];
		sortOrder: 100943;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesRegirockjersies = AvatarCustomization<
	"AVATAR_f_shoes_regirockjersies",
	{
		assetName: "f_shoes_regirockjersies_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_regirockjersies_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_regirockjersies_0";
		iconName: "f_shoes_regirockjersies_00_bundle_icon";
		setNames: ["regirockjersies"];
		slot: ["SHOES"];
		sortOrder: 100935;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesRegisteeljersies = AvatarCustomization<
	"AVATAR_f_shoes_registeeljersies",
	{
		assetName: "f_shoes_registeeljersies_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_registeeljersies_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_registeeljersies_0";
		iconName: "f_shoes_registeeljersies_00_bundle_icon";
		setNames: ["registeeljersies"];
		slot: ["SHOES"];
		sortOrder: 100951;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesReuniclusitems = AvatarCustomization<
	"AVATAR_f_shoes_reuniclusitems",
	{
		assetName: "f_shoes_reuniclusitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_reuniclusitems_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_reuniclusitems_0";
		iconName: "f_shoes_reuniclusitems_00_bundle_icon";
		setNames: ["reuniclusitems"];
		slot: ["SHOES"];
		sortOrder: 101497;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesRuinmaniac = AvatarCustomization<
	"AVATAR_f_shoes_ruinmaniac",
	{
		assetName: "f_shoes_ruinmaniac_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_ruinmaniac_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_ruinmaniac_0";
		iconName: "f_shoes_ruinmaniac_0_bundle_icon";
		setNames: ["ruinmaniac"];
		slot: ["SHOES"];
		sortOrder: 100388;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesSandals = AvatarCustomization<
	"AVATAR_f_shoes_sandals",
	{
		assetName: "f_shoes_sandals_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_sandals_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_sandals_0";
		iconName: "f_shoes_sandals_0_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100395;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesSandals1 = AvatarCustomization<
	"AVATAR_f_shoes_sandals_1",
	{
		assetName: "f_shoes_sandals_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_sandals_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_sandals_1";
		iconName: "f_shoes_sandals_1_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100394;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesSandals2 = AvatarCustomization<
	"AVATAR_f_shoes_sandals_2",
	{
		assetName: "f_shoes_sandals_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_sandals_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_sandals_2";
		iconName: "f_shoes_sandals_2_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100393;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesSolgaleoitems = AvatarCustomization<
	"AVATAR_f_shoes_solgaleoitems",
	{
		assetName: "f_shoes_solgaleoitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_solgaleoitems_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_solgaleoitems_0";
		iconName: "f_shoes_solgaleoitems_00_bundle_icon";
		setNames: ["solgaleoitems"];
		slot: ["SHOES"];
		sortOrder: 101307;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesSs = AvatarCustomization<
	"AVATAR_f_shoes_ss",
	{
		assetName: "f_shoes_ss_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_ss_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "f_shoes_ss_0_bundle_icon";
		setNames: ["ss"];
		slot: ["SHOES"];
		sortOrder: 100397;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShoesSteven = AvatarCustomization<
	"AVATAR_f_shoes_steven",
	{
		assetName: "f_shoes_steven_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_steven_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_steven_0";
		iconName: "f_shoes_steven_0_bundle_icon";
		setNames: ["steven"];
		slot: ["SHOES"];
		sortOrder: 100728;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesStevenfirst = AvatarCustomization<
	"AVATAR_f_shoes_stevenfirst",
	{
		assetName: "f_shoes_stevenfirst_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_stevenfirst_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_stevenfirst_0";
		iconName: "f_shoes_stevenfirst_00_bundle_icon";
		setNames: ["stevenfirst"];
		slot: ["SHOES"];
		sortOrder: 101317;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesSvcostumescarletschool = AvatarCustomization<
	"AVATAR_f_shoes_svcostumescarletschool",
	{
		assetName: "f_shoes_svcostumescarletschool_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_svcostumescarletschool_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "f_shoes_svcostumescarletschool_00_bundle_icon";
		setNames: ["svcostumescarletschool"];
		slot: ["SHOES"];
		sortOrder: 101290;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShoesSvcostumevioletschool = AvatarCustomization<
	"AVATAR_f_shoes_svcostumevioletschool",
	{
		assetName: "f_shoes_svcostumevioletschool_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_svcostumevioletschool_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "f_shoes_svcostumevioletschool_00_bundle_icon";
		setNames: ["svcostumevioletschool"];
		slot: ["SHOES"];
		sortOrder: 101298;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShoesSvdlc1 = AvatarCustomization<
	"AVATAR_f_shoes_svdlc1",
	{
		assetName: "f_shoes_svdlc1_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_svdlc1_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "f_shoes_svdlc1_00_bundle_icon";
		setNames: ["svdlc"];
		slot: ["SHOES"];
		sortOrder: 101461;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShoesSvdlc2spring = AvatarCustomization<
	"AVATAR_f_shoes_svdlc2spring",
	{
		assetName: "f_shoes_svdlc2spring_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_svdlc2spring_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "f_shoes_svdlc2spring_00_bundle_icon";
		setNames: ["svdlc2spring", "svdlc2fall"];
		slot: ["SHOES"];
		sortOrder: 101522;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShoesSwshdlc2costume = AvatarCustomization<
	"AVATAR_f_shoes_swshdlc2costume",
	{
		assetName: "f_shoes_swshdlc2costume_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_swshdlc2costume_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "f_shoes_swshdlc2costume_00_bundle_icon";
		setNames: ["swshdlc2costume"];
		slot: ["SHOES"];
		sortOrder: 100797;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShoesSwshdlccostume = AvatarCustomization<
	"AVATAR_f_shoes_swshdlccostume",
	{
		assetName: "f_shoes_swshdlccostume_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_swshdlccostume_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "f_shoes_swshdlccostume_00_bundle_icon";
		setNames: ["swshdlccostume"];
		slot: ["SHOES"];
		sortOrder: 100404;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShoesSwshuniformdark = AvatarCustomization<
	"AVATAR_f_shoes_swshuniformdark",
	{
		assetName: "f_shoes_swshuniformdark_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_swshuniformdark_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_swshuniformdark_0";
		iconName: "f_shoes_swshuniformdark_00_bundle_icon";
		setNames: ["swshuniformdark"];
		slot: ["SHOES"];
		sortOrder: 101007;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesSwshuniformdefault = AvatarCustomization<
	"AVATAR_f_shoes_swshuniformdefault",
	{
		assetName: "f_shoes_swshuniformdefault_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_swshuniformdefault_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "f_shoes_swshuniformdefault_00_bundle_icon";
		setNames: ["swshuniformdefault"];
		slot: ["SHOES"];
		sortOrder: 100998;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShoesSwshuniformdragon = AvatarCustomization<
	"AVATAR_f_shoes_swshuniformdragon",
	{
		assetName: "f_shoes_swshuniformdragon_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_swshuniformdragon_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_swshuniformdragon_0";
		iconName: "f_shoes_swshuniformdragon_00_bundle_icon";
		setNames: ["swshuniformdragon"];
		slot: ["SHOES"];
		sortOrder: 100988;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesSylveonitems = AvatarCustomization<
	"AVATAR_f_shoes_sylveonitems",
	{
		assetName: "f_shoes_sylveonitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_sylveonitems_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_sylveonitems_0";
		iconName: "f_shoes_sylveonitems_00_bundle_icon";
		setNames: ["sylveonitems"];
		slot: ["SHOES"];
		sortOrder: 100919;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesTeamaqua = AvatarCustomization<
	"AVATAR_f_shoes_teamaqua",
	{
		assetName: "f_shoes_teamaqua_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_teamaqua_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_teamaqua_0";
		iconName: "f_shoes_teamaqua_0_bundle_icon";
		setNames: ["teamaqua"];
		slot: ["SHOES"];
		sortOrder: 100382;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesTeamblanche = AvatarCustomization<
	"AVATAR_f_shoes_teamblanche",
	{
		assetName: "f_shoes_teamblanche_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_teamblanche_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_teamblanche_0";
		iconName: "f_shoes_teamblanche_0_bundle_icon";
		setNames: ["teamblanche"];
		slot: ["SHOES"];
		sortOrder: 100389;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesTeamcandela = AvatarCustomization<
	"AVATAR_f_shoes_teamcandela",
	{
		assetName: "f_shoes_teamcandela_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_teamcandela_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_teamcandela_0";
		iconName: "f_shoes_teamcandela_0_bundle_icon";
		setNames: ["teamcandela"];
		slot: ["SHOES"];
		sortOrder: 100390;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesTeammagma = AvatarCustomization<
	"AVATAR_f_shoes_teammagma",
	{
		assetName: "f_shoes_teammagma_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_teammagma_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_teammagma_0";
		iconName: "f_shoes_teammagma_0_bundle_icon";
		setNames: ["teammagma"];
		slot: ["SHOES"];
		sortOrder: 100383;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesTeamrocket0 = AvatarCustomization<
	"AVATAR_f_shoes_teamrocket_0",
	{
		assetName: "f_shoes_teamrocket_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_teamrocket_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_teamrocket_0";
		iconName: "f_shoes_teamrocket_0_bundle_icon";
		setNames: ["teamrocket_0"];
		slot: ["SHOES"];
		sortOrder: 100372;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesTeamrocket1 = AvatarCustomization<
	"AVATAR_f_shoes_teamrocket_1",
	{
		assetName: "f_shoes_teamrocket_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_teamrocket_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_teamrocket_1";
		iconName: "f_shoes_teamrocket_1_bundle_icon";
		setNames: ["teamrocket_1"];
		slot: ["SHOES"];
		sortOrder: 100371;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesTeamskull = AvatarCustomization<
	"AVATAR_f_shoes_teamskull",
	{
		assetName: "f_shoes_teamskull_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_teamskull_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_teamskull_0";
		iconName: "f_shoes_teamskull_00_bundle_icon";
		setNames: ["teamskull"];
		slot: ["SHOES"];
		sortOrder: 101161;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesTeamspark = AvatarCustomization<
	"AVATAR_f_shoes_teamspark",
	{
		assetName: "f_shoes_teamspark_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_teamspark_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_teamspark_0";
		iconName: "f_shoes_teamspark_0_bundle_icon";
		setNames: ["teamspark"];
		slot: ["SHOES"];
		sortOrder: 100391;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesUltrareconsquad = AvatarCustomization<
	"AVATAR_f_shoes_ultraReconSquad",
	{
		assetName: "f_shoes_ultraReconSquad_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_ultrareconsquad_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_ultraReconSquad_0";
		iconName: "f_shoes_ultrareconsquad_00_bundle_icon";
		setNames: ["ultraReconSquad", "ultraReconSquadB"];
		slot: ["SHOES"];
		sortOrder: 101245;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesUltra0 = AvatarCustomization<
	"AVATAR_f_shoes_ultra_0",
	{
		assetName: "f_shoes_ultra_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_ultra_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "f_shoes_ultra_bundle_icon";
		setNames: ["ultra_0"];
		slot: ["SHOES"];
		sortOrder: 100370;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFShoesVeterantrainerxy = AvatarCustomization<
	"AVATAR_f_shoes_veterantrainerxy",
	{
		assetName: "f_shoes_veterantrainerxy_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_veterantrainerxy_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_veterantrainerxy_0";
		iconName: "f_shoes_veterantrainerxy_0_bundle_icon";
		setNames: ["veterantrainerxy"];
		slot: ["SHOES"];
		sortOrder: 100384;
		unlockBadgeLevel: 200;
		unlockBadgeType: "BADGE_MASTER_LEAGUE";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesWcs2022winnersitems = AvatarCustomization<
	"AVATAR_f_shoes_wcs2022winnersitems",
	{
		assetName: "f_shoes_wcs2022winnersitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_wcs2022winnersitems_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_wcs2022winnersitems_0";
		iconName: "f_shoes_wcs2022winnersitems_00_bundle_icon";
		setNames: ["wcs2022winnersitems"];
		slot: ["SHOES"];
		sortOrder: 101223;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesWcs2023winnersitems = AvatarCustomization<
	"AVATAR_f_shoes_wcs2023winnersitems",
	{
		assetName: "f_shoes_wcs2023winnersitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_wcs2023winnersitems_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_wcs2023winnersitems_0";
		iconName: "f_shoes_wcs2023winnersitems_00_bundle_icon";
		setNames: ["boxingoutfit"];
		slot: ["SHOES"];
		sortOrder: 101441;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesWinterboots2023 = AvatarCustomization<
	"AVATAR_f_shoes_winterboots2023",
	{
		assetName: "f_shoes_winterboots2023_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_winterboots2023_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_winterboots2023_0";
		iconName: "f_shoes_winterboots2023_00_bundle_icon";
		setNames: ["winter2023"];
		slot: ["SHOES"];
		sortOrder: 101532;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesWinterboots0 = AvatarCustomization<
	"AVATAR_f_shoes_winterboots_0",
	{
		assetName: "f_shoes_winterboots_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_winterboots_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_winterboots_0";
		iconName: "f_shoes_winterboots_00_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100843;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesWinterboots1 = AvatarCustomization<
	"AVATAR_f_shoes_winterboots_1",
	{
		assetName: "f_shoes_winterboots_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_winterboots_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_winterboots_1";
		iconName: "f_shoes_winterboots_01_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100844;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesWinterboots2 = AvatarCustomization<
	"AVATAR_f_shoes_winterboots_2",
	{
		assetName: "f_shoes_winterboots_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_winterboots_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_winterboots_2";
		iconName: "f_shoes_winterboots_02_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100845;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFShoesWinterboots3 = AvatarCustomization<
	"AVATAR_f_shoes_winterboots_3",
	{
		assetName: "f_shoes_winterboots_3";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_shoes_winterboots_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.f_shoes_winterboots_3";
		iconName: "f_shoes_winterboots_03_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100846;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFSkin0 = AvatarCustomization<
	"AVATAR_f_skin_0",
	{
		assetName: "f_skin_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		enabled: true;
		groupName: "group_skin";
		slot: ["SKIN"];
		sortOrder: 100358;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFSkin1 = AvatarCustomization<
	"AVATAR_f_skin_1",
	{
		assetName: "f_skin_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		enabled: true;
		groupName: "group_skin";
		slot: ["SKIN"];
		sortOrder: 100359;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFSkin10 = AvatarCustomization<
	"AVATAR_f_skin_10",
	{
		assetName: "f_skin_10";
		avatarType: "PLAYER_AVATAR_FEMALE";
		enabled: true;
		groupName: "group_skin";
		slot: ["SKIN"];
		sortOrder: 100351;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFSkin11 = AvatarCustomization<
	"AVATAR_f_skin_11",
	{
		assetName: "f_skin_11";
		avatarType: "PLAYER_AVATAR_FEMALE";
		enabled: true;
		groupName: "group_skin";
		slot: ["SKIN"];
		sortOrder: 100350;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFSkin2 = AvatarCustomization<
	"AVATAR_f_skin_2",
	{
		assetName: "f_skin_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		enabled: true;
		groupName: "group_skin";
		slot: ["SKIN"];
		sortOrder: 100356;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFSkin3 = AvatarCustomization<
	"AVATAR_f_skin_3",
	{
		assetName: "f_skin_3";
		avatarType: "PLAYER_AVATAR_FEMALE";
		enabled: true;
		groupName: "group_skin";
		slot: ["SKIN"];
		sortOrder: 100354;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFSkin4 = AvatarCustomization<
	"AVATAR_f_skin_4",
	{
		assetName: "f_skin_4";
		avatarType: "PLAYER_AVATAR_FEMALE";
		enabled: true;
		groupName: "group_skin";
		slot: ["SKIN"];
		sortOrder: 100361;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFSkin5 = AvatarCustomization<
	"AVATAR_f_skin_5",
	{
		assetName: "f_skin_5";
		avatarType: "PLAYER_AVATAR_FEMALE";
		enabled: true;
		groupName: "group_skin";
		slot: ["SKIN"];
		sortOrder: 100360;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFSkin6 = AvatarCustomization<
	"AVATAR_f_skin_6",
	{
		assetName: "f_skin_6";
		avatarType: "PLAYER_AVATAR_FEMALE";
		enabled: true;
		groupName: "group_skin";
		slot: ["SKIN"];
		sortOrder: 100357;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFSkin7 = AvatarCustomization<
	"AVATAR_f_skin_7",
	{
		assetName: "f_skin_7";
		avatarType: "PLAYER_AVATAR_FEMALE";
		enabled: true;
		groupName: "group_skin";
		slot: ["SKIN"];
		sortOrder: 100355;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFSkin8 = AvatarCustomization<
	"AVATAR_f_skin_8",
	{
		assetName: "f_skin_8";
		avatarType: "PLAYER_AVATAR_FEMALE";
		enabled: true;
		groupName: "group_skin";
		slot: ["SKIN"];
		sortOrder: 100353;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFSkin9 = AvatarCustomization<
	"AVATAR_f_skin_9",
	{
		assetName: "f_skin_9";
		avatarType: "PLAYER_AVATAR_FEMALE";
		enabled: true;
		groupName: "group_skin";
		slot: ["SKIN"];
		sortOrder: 100352;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFSocksDefault0 = AvatarCustomization<
	"AVATAR_f_socks_default_0",
	{
		assetName: "f_socks_default_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_socks_default_bundle";
		enabled: true;
		groupName: "group_socks";
		iconName: "f_socks_default_bundle_icon";
		slot: ["SOCKS"];
		sortOrder: 100347;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFSocksDefault1 = AvatarCustomization<
	"AVATAR_f_socks_default_1",
	{
		assetName: "f_socks_default_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_socks_default_bundle";
		enabled: true;
		groupName: "group_socks";
		iconName: "f_socks_default_bundle_icon";
		slot: ["SOCKS"];
		sortOrder: 100346;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFSocksDefault2 = AvatarCustomization<
	"AVATAR_f_socks_default_2",
	{
		assetName: "f_socks_default_2";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_socks_default_bundle";
		enabled: true;
		groupName: "group_socks";
		iconName: "f_socks_default_bundle_icon";
		slot: ["SOCKS"];
		sortOrder: 100345;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFSocksEmpty = AvatarCustomization<
	"AVATAR_f_socks_empty",
	{
		assetName: "f_socks_empty";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_socks_empty_bundle";
		enabled: true;
		groupName: "group_socks";
		iconName: "f_socks_empty_bundle_icon";
		slot: ["SOCKS"];
		sortOrder: 100343;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFSocksFw2022 = AvatarCustomization<
	"AVATAR_f_socks_fw2022",
	{
		assetName: "f_socks_fw2022_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_socks_fw2022_bundle";
		enabled: true;
		groupName: "group_socks";
		iapSku: "pgorelease.avatar.f_socks_fw2022_0";
		iconName: "f_socks_fw2022_00_bundle_icon";
		setNames: ["fw2022"];
		slot: ["SOCKS"];
		sortOrder: 101263;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFSocksHgss0 = AvatarCustomization<
	"AVATAR_f_socks_hgss_0",
	{
		assetName: "f_socks_hgss_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_socks_hgss_bundle";
		enabled: true;
		groupName: "group_socks";
		iapSku: "pgorelease.avatar.f_socks_hgss_0";
		iconName: "f_socks_hgss_bundle_icon";
		setNames: ["hgss_0"];
		slot: ["SOCKS"];
		sortOrder: 100348;
		unlockBadgeLevel: 5;
		unlockBadgeType: "BADGE_POKEDEX_ENTRIES_GEN2";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFSocksSneakersocks0 = AvatarCustomization<
	"AVATAR_f_socks_sneakersocks_0",
	{
		assetName: "f_socks_sneakersocks_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_socks_sneakersocks_bundle";
		enabled: true;
		groupName: "group_socks";
		iconName: "f_socks_sneakersocks_00_bundle_icon";
		slot: ["SOCKS"];
		sortOrder: 101124;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFSocksSneakersocks1 = AvatarCustomization<
	"AVATAR_f_socks_sneakersocks_1",
	{
		assetName: "f_socks_sneakersocks_1";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_socks_sneakersocks_bundle";
		enabled: true;
		groupName: "group_socks";
		iconName: "f_socks_sneakersocks_01_bundle_icon";
		slot: ["SOCKS"];
		sortOrder: 101125;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFSocksSollunaitems = AvatarCustomization<
	"AVATAR_f_socks_sollunaitems",
	{
		assetName: "f_socks_sollunaitems_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_socks_sollunaitems_bundle";
		enabled: true;
		groupName: "group_socks";
		iapSku: "pgorelease.avatar.f_socks_sollunaitems_0";
		iconName: "f_socks_sollunaitems_00_bundle_icon";
		setNames: ["solgaleoitems", "lunalaitems"];
		slot: ["SOCKS"];
		sortOrder: 101309;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFSocksSwshuniformdefault = AvatarCustomization<
	"AVATAR_f_socks_swshuniformdefault",
	{
		assetName: "f_socks_swshuniformdefault_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_socks_swshuniformdefault_bundle";
		enabled: true;
		groupName: "group_socks";
		iconName: "f_socks_swshuniformdefault_00_bundle_icon";
		setNames: ["swshuniformdefault"];
		slot: ["SOCKS"];
		sortOrder: 101000;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationFSocksSwshuniformdragon = AvatarCustomization<
	"AVATAR_f_socks_swshuniformdragon",
	{
		assetName: "f_socks_swshuniformdragon_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_socks_swshuniformdragon_bundle";
		enabled: true;
		groupName: "group_socks";
		iapSku: "pgorelease.avatar.f_socks_swshuniformdragon_0";
		iconName: "f_socks_swshuniformdragon_00_bundle_icon";
		setNames: ["swshuniformdragon"];
		slot: ["SOCKS"];
		sortOrder: 100990;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFSocksTeamaqua = AvatarCustomization<
	"AVATAR_f_socks_teamaqua",
	{
		assetName: "f_socks_teamaqua_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_socks_teamaqua_bundle";
		enabled: true;
		groupName: "group_socks";
		iapSku: "pgorelease.avatar.f_socks_teamaqua_0";
		iconName: "f_socks_teamaqua_0_bundle_icon";
		setNames: ["teamaqua"];
		slot: ["SOCKS"];
		sortOrder: 100349;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationFSocksThighhighs0 = AvatarCustomization<
	"AVATAR_f_socks_thighhighs_0",
	{
		assetName: "f_socks_thighhighs_0";
		avatarType: "PLAYER_AVATAR_FEMALE";
		bundleName: "f_socks_thighhighs_bundle";
		enabled: true;
		groupName: "group_socks";
		iconName: "f_socks_thighhighs_bundle_icon";
		slot: ["SOCKS"];
		sortOrder: 100344;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMBackpackAlolaitemslittenbp = AvatarCustomization<
	"AVATAR_m_backpack_alolaitemslittenbp",
	{
		assetName: "m_backpack_alolaitemslittenbp_0";
		bundleName: "m_backpack_alolaitemslittenbp_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.m_backpack_alolaitemslittenbp_0";
		iconName: "m_backpack_alolaitemslittenbp_00_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 101174;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMBackpackAlolaitemspoppliobp = AvatarCustomization<
	"AVATAR_m_backpack_alolaitemspoppliobp",
	{
		assetName: "m_backpack_alolaitemspoppliobp_0";
		bundleName: "m_backpack_alolaitemspoppliobp_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.m_backpack_alolaitemspoppliobp_0";
		iconName: "m_backpack_alolaitemspoppliobp_00_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 101170;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMBackpackAlolaitemsrowletbp = AvatarCustomization<
	"AVATAR_m_backpack_alolaitemsrowletbp",
	{
		assetName: "m_backpack_alolaitemsrowletbp_0";
		bundleName: "m_backpack_alolaitemsrowletbp_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.m_backpack_alolaitemsrowletbp_0";
		iconName: "m_backpack_alolaitemsrowletbp_00_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 101172;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMBackpackAnimegou = AvatarCustomization<
	"AVATAR_m_backpack_animegou",
	{
		assetName: "m_backpack_animegou_0";
		bundleName: "m_backpack_animegou_bundle";
		enabled: true;
		groupName: "group_backpack";
		iconName: "m_backpack_animegou_00_bundle_icon";
		setNames: ["animegou"];
		slot: ["BACKPACK"];
		sortOrder: 100811;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMBackpackBackpacker = AvatarCustomization<
	"AVATAR_m_backpack_backpacker",
	{
		assetName: "m_backpack_backpacker_0";
		bundleName: "m_backpack_backpacker_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.m_backpack_backpacker_0";
		iconName: "m_backpack_backpacker_0_bundle_icon";
		setNames: ["backpacker"];
		slot: ["BACKPACK"];
		sortOrder: 100332;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMBackpackCombeebackpack = AvatarCustomization<
	"AVATAR_m_backpack_combeebackpack",
	{
		assetName: "m_backpack_combeebackpack_0";
		bundleName: "m_backpack_combeebackpack_bundle";
		enabled: true;
		groupName: "group_seasonal";
		iapSku: "pgorelease.avatar.m_backpack_combeebackpack_0";
		iconName: "m_backpack_combeebackpack_00_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 101589;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMBackpackCombeebackpack01 = AvatarCustomization<
	"AVATAR_m_backpack_combeebackpack_01",
	{
		assetName: "m_backpack_combeebackpack_1";
		bundleName: "m_backpack_combeebackpack_bundle";
		enabled: true;
		groupName: "group_seasonal";
		iapSku: "pgorelease.avatar.m_backpack_combeebackpack_1";
		iconName: "m_backpack_combeebackpack_01_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 101591;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMBackpackDedenneitems = AvatarCustomization<
	"AVATAR_m_backpack_dedenneitems",
	{
		assetName: "m_backpack_dedenneitems_0";
		bundleName: "m_backpack_dedenneitems_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.m_backpack_dedenneitems_0";
		iconName: "m_backpack_dedenneitems_00_bundle_icon";
		setNames: ["dedenneitems"];
		slot: ["BACKPACK"];
		sortOrder: 101052;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMBackpackDefault0 = AvatarCustomization<
	"AVATAR_m_backpack_default_0",
	{
		assetName: "m_backpack_default_0";
		bundleName: "m_backpack_default_bundle";
		enabled: true;
		groupName: "group_backpack";
		iconName: "m_backpack_default_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 100325;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMBackpackDefault1 = AvatarCustomization<
	"AVATAR_m_backpack_default_1",
	{
		assetName: "m_backpack_default_1";
		bundleName: "m_backpack_default_bundle";
		enabled: true;
		groupName: "group_backpack";
		iconName: "m_backpack_default_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 100324;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMBackpackDefault2 = AvatarCustomization<
	"AVATAR_m_backpack_default_2",
	{
		assetName: "m_backpack_default_2";
		bundleName: "m_backpack_default_bundle";
		enabled: true;
		groupName: "group_backpack";
		iconName: "m_backpack_default_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 100323;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMBackpackDefault3 = AvatarCustomization<
	"AVATAR_m_backpack_default_3",
	{
		assetName: "m_backpack_default_3";
		bundleName: "m_backpack_default_bundle";
		enabled: true;
		groupName: "group_backpack";
		iconName: "m_backpack_default_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 100322;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMBackpackDefault4 = AvatarCustomization<
	"AVATAR_m_backpack_default_4",
	{
		assetName: "m_backpack_default_4";
		bundleName: "m_backpack_default_bundle";
		enabled: true;
		groupName: "group_backpack";
		iconName: "m_backpack_default_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 100321;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMBackpackDefault5 = AvatarCustomization<
	"AVATAR_m_backpack_default_5",
	{
		assetName: "m_backpack_default_5";
		bundleName: "m_backpack_default_bundle";
		enabled: true;
		groupName: "group_backpack";
		iconName: "m_backpack_default_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 100320;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMBackpackDp = AvatarCustomization<
	"AVATAR_m_backpack_dp",
	{
		assetName: "m_backpack_bd_0";
		bundleName: "m_backpack_dp_bundle";
		enabled: true;
		groupName: "group_backpack";
		iconName: "m_backpack_dp_00_bundle_icon";
		setNames: ["dp"];
		slot: ["BACKPACK"];
		sortOrder: 101063;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMBackpackEggIncubator = AvatarCustomization<
	"AVATAR_m_backpack_egg-incubator",
	{
		assetName: "m_backpack_egg-incubator_0";
		bundleName: "m_backpack_egg-incubator_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.m_backpack_egg-incubator_0";
		iconName: "m_backpack_egg-incubator_00_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 101636;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMBackpackEggbackpack0 = AvatarCustomization<
	"AVATAR_m_backpack_eggbackpack_0",
	{
		assetName: "m_backpack_eggbackpack_0";
		bundleName: "m_backpack_eggbackpack_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.m_backpack_eggbackpack_0";
		iconName: "m_backpack_eggbackpack_0_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 100331;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMBackpackEggbackpack1 = AvatarCustomization<
	"AVATAR_m_backpack_eggbackpack_1",
	{
		assetName: "m_backpack_eggbackpack_1";
		bundleName: "m_backpack_eggbackpack_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.m_backpack_eggbackpack_1";
		iconName: "m_backpack_eggbackpack_1_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 100330;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMBackpackEggbackpack2 = AvatarCustomization<
	"AVATAR_m_backpack_eggbackpack_2",
	{
		assetName: "m_backpack_eggbackpack_2";
		bundleName: "m_backpack_eggbackpack_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.m_backpack_eggbackpack_2";
		iconName: "m_backpack_eggbackpack_2_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 100329;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMBackpackEmpty = AvatarCustomization<
	"AVATAR_m_backpack_empty",
	{
		assetName: "m_backpack_empty";
		bundleName: "m_backpack_empty_bundle";
		enabled: true;
		groupName: "group_backpack";
		iconName: "m_backpack_empty_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 100318;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMBackpackFrlg0 = AvatarCustomization<
	"AVATAR_m_backpack_frlg_0",
	{
		assetName: "m_backpack_frlg_0";
		bundleName: "m_backpack_frlg_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.m_backpack_frlg_0";
		iconName: "m_backpack_frlg_bundle_icon";
		setNames: ["frlg_0"];
		slot: ["BACKPACK"];
		sortOrder: 100328;
		unlockBadgeLevel: 5;
		unlockBadgeType: "BADGE_POKEDEX_ENTRIES";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMBackpackGenesecteventitem = AvatarCustomization<
	"AVATAR_m_backpack_genesecteventitem",
	{
		assetName: "m_backpack_genesecteventitem_0";
		bundleName: "m_backpack_genesecteventitem_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.m_backpack_genesecteventitem_0";
		iconName: "m_backpack_genesecteventitem_0_bundle_icon";
		setNames: ["genesecteventitem"];
		slot: ["BACKPACK"];
		sortOrder: 100341;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMBackpackGengar0 = AvatarCustomization<
	"AVATAR_m_backpack_gengar_0",
	{
		assetName: "m_backpack_gengar_0";
		bundleName: "m_backpack_gengar_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.m_backpack_gengar_0";
		iconName: "m_backpack_gengar_0_bundle_icon";
		setNames: ["gengar_0"];
		slot: ["BACKPACK"];
		sortOrder: 100327;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMBackpackGiratinaitems = AvatarCustomization<
	"AVATAR_m_backpack_giratinaitems",
	{
		assetName: "m_backpack_giratinaitems_0";
		bundleName: "m_backpack_giratinaitems_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.m_backpack_giratinaitems_0";
		iconName: "m_backpack_giratinaitems_00_bundle_icon";
		setNames: ["giratinaitems"];
		slot: ["BACKPACK"];
		sortOrder: 101563;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMBackpackGuccibackpack = AvatarCustomization<
	"AVATAR_m_backpack_guccibackpack",
	{
		assetName: "m_backpack_guccibackpack_0";
		bundleName: "m_backpack_guccibackpack_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iconName: "m_backpack_guccibackpack_00_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 100853;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMBackpackGuitarcasebackpack = AvatarCustomization<
	"AVATAR_m_backpack_guitarcasebackpack",
	{
		assetName: "m_backpack_guitarcasebackpack_0";
		bundleName: "m_backpack_guitarcasebackpack_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.m_backpack_guitarcasebackpack_0";
		iconName: "m_backpack_guitarcasebackpack_00_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 100963;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMBackpackHgss0 = AvatarCustomization<
	"AVATAR_m_backpack_hgss_0",
	{
		assetName: "m_backpack_hgss_0";
		bundleName: "m_backpack_hgss_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.m_backpack_hgss_0";
		iconName: "m_backpack_hgss_bundle_icon";
		setNames: ["hgss_0"];
		slot: ["BACKPACK"];
		sortOrder: 100326;
		unlockBadgeLevel: 5;
		unlockBadgeType: "BADGE_POKEDEX_ENTRIES_GEN2";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMBackpackHououbackpack = AvatarCustomization<
	"AVATAR_m_backpack_hououbackpack",
	{
		assetName: "m_backpack_hououbackpack_0";
		bundleName: "m_backpack_hououbackpack_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.m_backpack_hououbackpack_0";
		iconName: "m_backpack_hououbackpack_00_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 101138;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMBackpackKakureonpouch = AvatarCustomization<
	"AVATAR_m_backpack_kakureonpouch",
	{
		assetName: "m_backpack_kakureonpouch_0";
		bundleName: "m_backpack_kakureonpouch_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.m_backpack_kakureonpouch_0";
		iconName: "m_backpack_kakureonpouch_00_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 101352;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMBackpackKomala = AvatarCustomization<
	"AVATAR_m_backpack_komala",
	{
		assetName: "m_backpack_komala_0";
		bundleName: "m_backpack_komala_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.m_backpack_komala_0";
		iconName: "m_backpack_komala_00_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 101619;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMBackpackLongchampbp = AvatarCustomization<
	"AVATAR_m_backpack_longchampbp",
	{
		assetName: "m_backpack_longchampbp_00";
		bundleName: "m_backpack_longchampbp_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iconName: "m_backpack_longchampbp_00_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 100766;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMBackpackLunalaitems = AvatarCustomization<
	"AVATAR_m_backpack_lunalaitems",
	{
		assetName: "m_backpack_lunalaitems_0";
		bundleName: "m_backpack_lunalaitems_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.m_backpack_lunalaitems_0";
		iconName: "m_backpack_lunalaitems_00_bundle_icon";
		setNames: ["lunalaitems"];
		slot: ["BACKPACK"];
		sortOrder: 101300;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMBackpackLunarnewyr = AvatarCustomization<
	"AVATAR_m_backpack_lunarNewYr",
	{
		assetName: "m_backpack_lunarNewYr_0";
		bundleName: "m_backpack_lunarnewyr_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.m_backpack_lunarNewYr_0";
		iconName: "m_backpack_lunarnewyr_00_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 101343;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMBackpackMimikyubp = AvatarCustomization<
	"AVATAR_m_backpack_mimikyubp",
	{
		assetName: "m_backpack_mimikyubp_0";
		bundleName: "m_backpack_mimikyubp_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.m_backpack_mimikyubp_0";
		iconName: "m_backpack_mimikyubp_0_bundle_icon";
		setNames: ["mimikyu"];
		slot: ["BACKPACK"];
		sortOrder: 100338;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMBackpackMovie2020 = AvatarCustomization<
	"AVATAR_m_backpack_movie2020",
	{
		assetName: "m_backpack_movie2020_0";
		bundleName: "m_backpack_movie2020_bundle";
		enabled: true;
		groupName: "group_backpack";
		iconName: "m_backpack_movie2020_00_bundle_icon";
		setNames: ["movie2020"];
		slot: ["BACKPACK"];
		sortOrder: 101028;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMBackpackNaganadelawings = AvatarCustomization<
	"AVATAR_m_backpack_naganadelawings",
	{
		assetName: "m_backpack_naganadelawings_0";
		bundleName: "m_backpack_naganadelawings_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.m_backpack_naganadelawings_0";
		iconName: "m_backpack_naganadelawings_00_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 101611;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMBackpackNike2021 = AvatarCustomization<
	"AVATAR_m_backpack_nike2021",
	{
		assetName: "m_backpack_nike2021_0";
		bundleName: "m_backpack_nike2021_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iapSku: "pgorelease.avatar.m_backpack_nike2021_0";
		iconName: "m_backpack_nike2021_00_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 101034;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMBackpackPamobackpack = AvatarCustomization<
	"AVATAR_m_backpack_pamobackpack",
	{
		assetName: "m_backpack_pamobackpack_0";
		bundleName: "m_backpack_pamobackpack_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.m_backpack_pamobackpack_0";
		iconName: "m_backpack_pamobackpack_00_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 101463;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMBackpackPkmnhoodie001 = AvatarCustomization<
	"AVATAR_m_backpack_pkmnhoodie001",
	{
		assetName: "m_backpack_pkmnhoodie001";
		bundleName: "m_backpack_pkmnhoodie001_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.m_backpack_pkmnhoodie001";
		iconName: "m_backpack_pkmnhoodie001_0_bundle_icon";
		setNames: ["pkmnhoodie001"];
		slot: ["BACKPACK"];
		sortOrder: 100336;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMBackpackPkmnhoodie004 = AvatarCustomization<
	"AVATAR_m_backpack_pkmnhoodie004",
	{
		assetName: "m_backpack_pkmnhoodie004";
		bundleName: "m_backpack_pkmnhoodie004_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.m_backpack_pkmnhoodie004";
		iconName: "m_backpack_pkmnhoodie004_0_bundle_icon";
		setNames: ["pkmnhoodie004"];
		slot: ["BACKPACK"];
		sortOrder: 100335;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMBackpackPkmnhoodie007 = AvatarCustomization<
	"AVATAR_m_backpack_pkmnhoodie007",
	{
		assetName: "m_backpack_pkmnhoodie007";
		bundleName: "m_backpack_pkmnhoodie007_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.m_backpack_pkmnhoodie007";
		iconName: "m_backpack_pkmnhoodie007_0_bundle_icon";
		setNames: ["pkmnhoodie007"];
		slot: ["BACKPACK"];
		sortOrder: 100334;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMBackpackRuinmaniac = AvatarCustomization<
	"AVATAR_m_backpack_ruinmaniac",
	{
		assetName: "m_backpack_ruinmaniac_0";
		bundleName: "m_backpack_ruinmaniac_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.m_backpack_ruinmaniac_0";
		iconName: "m_backpack_ruinmaniac_0_bundle_icon";
		setNames: ["ruinmaniac"];
		slot: ["BACKPACK"];
		sortOrder: 100333;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMBackpackSnapcamera = AvatarCustomization<
	"AVATAR_m_backpack_snapcamera",
	{
		assetName: "m_backpack_snapcamera_0";
		bundleName: "m_backpack_snapcamera_bundle";
		enabled: true;
		groupName: "group_backpack";
		iconName: "m_backpack_snapcamera_00_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 100910;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMBackpackSs = AvatarCustomization<
	"AVATAR_m_backpack_ss",
	{
		assetName: "m_backpack_ss_0";
		bundleName: "m_backpack_ss_bundle";
		enabled: true;
		groupName: "group_backpack";
		iconName: "m_backpack_ss_0_bundle_icon";
		setNames: ["ss"];
		slot: ["BACKPACK"];
		sortOrder: 100339;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMBackpackSvcostumescarletschool = AvatarCustomization<
	"AVATAR_m_backpack_svcostumescarletschool",
	{
		assetName: "m_backpack_svcostumescarletschool_0";
		bundleName: "m_backpack_svcostumescarletschool_bundle";
		enabled: true;
		groupName: "group_backpack";
		iconName: "m_backpack_svcostumescarletschool_00_bundle_icon";
		setNames: ["svcostumescarletschool"];
		slot: ["BACKPACK"];
		sortOrder: 101284;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMBackpackSvcostumevioletschool = AvatarCustomization<
	"AVATAR_m_backpack_svcostumevioletschool",
	{
		assetName: "m_backpack_svcostumevioletschool_0";
		bundleName: "m_backpack_svcostumevioletschool_bundle";
		enabled: true;
		groupName: "group_backpack";
		iconName: "m_backpack_svcostumevioletschool_00_bundle_icon";
		setNames: ["svcostumevioletschool"];
		slot: ["BACKPACK"];
		sortOrder: 101292;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMBackpackSvdlc1 = AvatarCustomization<
	"AVATAR_m_backpack_svdlc1",
	{
		assetName: "m_backpack_svdlc1_0";
		bundleName: "m_backpack_svdlc1_bundle";
		enabled: true;
		groupName: "group_backpack";
		iconName: "m_backpack_svdlc1_00_bundle_icon";
		setNames: ["svdlc"];
		slot: ["BACKPACK"];
		sortOrder: 101456;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMBackpackSvdlc2spring = AvatarCustomization<
	"AVATAR_m_backpack_svdlc2spring",
	{
		assetName: "m_backpack_svdlc2spring_0";
		bundleName: "m_backpack_svdlc2spring_bundle";
		enabled: true;
		groupName: "group_backpack";
		iconName: "m_backpack_svdlc2spring_00_bundle_icon";
		setNames: ["svdlc2spring", "svdlc2fall"];
		slot: ["BACKPACK"];
		sortOrder: 101517;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMBackpackSwshdlc2costume = AvatarCustomization<
	"AVATAR_m_backpack_swshdlc2costume",
	{
		assetName: "m_backpack_swshdlc2costume_0";
		bundleName: "m_backpack_swshdlc2costume_bundle";
		enabled: true;
		groupName: "group_backpack";
		iconName: "m_backpack_swshdlc2costume_00_bundle_icon";
		setNames: ["swshdlc2costume"];
		slot: ["BACKPACK"];
		sortOrder: 100790;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMBackpackSwshdlccostume = AvatarCustomization<
	"AVATAR_m_backpack_swshdlccostume",
	{
		assetName: "m_backpack_swshdlccostume_0";
		bundleName: "m_backpack_swshdlccostume_bundle";
		enabled: true;
		groupName: "group_backpack";
		iconName: "m_backpack_swshdlccostume_00_bundle_icon";
		setNames: ["swshdlccostume"];
		slot: ["BACKPACK"];
		sortOrder: 100342;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMBackpackTogepibackpack = AvatarCustomization<
	"AVATAR_m_backpack_togepibackpack",
	{
		assetName: "m_backpack_togepibackpack_0";
		bundleName: "m_backpack_togepibackpack_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.m_backpack_togepibackpack_0";
		iconName: "m_backpack_togepibackpack_0_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 100340;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMBackpackUltra0 = AvatarCustomization<
	"AVATAR_m_backpack_ultra_0",
	{
		assetName: "m_backpack_ultra";
		bundleName: "m_backpack_ultra_bundle";
		enabled: true;
		groupName: "group_backpack";
		iconName: "m_backpack_ultra_bundle_icon";
		setNames: ["ultra_0"];
		slot: ["BACKPACK"];
		sortOrder: 100319;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMBackpackVerizon2021 = AvatarCustomization<
	"AVATAR_m_backpack_verizon2021",
	{
		assetName: "m_backpack_verizon2021_0";
		bundleName: "m_backpack_verizon2021_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iconName: "m_backpack_verizon2021_00_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 101087;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMBackpackZubatbp = AvatarCustomization<
	"AVATAR_m_backpack_zubatbp",
	{
		assetName: "m_backpack_zubatbp_0";
		bundleName: "m_backpack_zubatbp_bundle";
		enabled: true;
		groupName: "group_backpack";
		iapSku: "pgorelease.avatar.m_backpack_zubatbp_0";
		iconName: "m_backpack_zubatbp_0_bundle_icon";
		slot: ["BACKPACK"];
		sortOrder: 100337;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMEyes0 = AvatarCustomization<
	"AVATAR_m_eyes_0",
	{
		assetName: "m_eyes_0";
		bundleName: "m_eyes_asset_bundle";
		enabled: true;
		groupName: "group_eyes";
		iconName: "m_group_eye";
		slot: ["EYES"];
		sortOrder: 100317;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMEyes1 = AvatarCustomization<
	"AVATAR_m_eyes_1",
	{
		assetName: "m_eyes_1";
		bundleName: "m_eyes_asset_bundle";
		enabled: true;
		groupName: "group_eyes";
		iconName: "m_group_eye";
		slot: ["EYES"];
		sortOrder: 100316;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMEyes2 = AvatarCustomization<
	"AVATAR_m_eyes_2",
	{
		assetName: "m_eyes_2";
		bundleName: "m_eyes_asset_bundle";
		enabled: true;
		groupName: "group_eyes";
		iconName: "m_group_eye";
		slot: ["EYES"];
		sortOrder: 100315;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMEyes3 = AvatarCustomization<
	"AVATAR_m_eyes_3",
	{
		assetName: "m_eyes_3";
		bundleName: "m_eyes_asset_bundle";
		enabled: true;
		groupName: "group_eyes";
		iconName: "m_group_eye";
		slot: ["EYES"];
		sortOrder: 100314;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMEyes4 = AvatarCustomization<
	"AVATAR_m_eyes_4",
	{
		assetName: "m_eyes_4";
		bundleName: "m_eyes_asset_bundle";
		enabled: true;
		groupName: "group_eyes";
		iconName: "m_group_eye";
		slot: ["EYES"];
		sortOrder: 100313;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMFace3dmask00 = AvatarCustomization<
	"AVATAR_m_face_3dmask_00",
	{
		assetName: "m_face_3dmask_0";
		bundleName: "m_face_3dmask_00_bundle";
		enabled: true;
		groupName: "group_face";
		iapSku: "pgorelease.avatar.m_face_3dmask_0";
		iconName: "m_face_3dmask_00_bundle_icon";
		slot: ["FACE"];
		sortOrder: 100886;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMFace3dmask01 = AvatarCustomization<
	"AVATAR_m_face_3dmask_01",
	{
		assetName: "m_face_3dmask_1";
		bundleName: "m_face_3dmask_01_bundle";
		enabled: true;
		groupName: "group_face";
		iapSku: "pgorelease.avatar.m_face_3dmask_1";
		iconName: "m_face_3dmask_01_bundle_icon";
		slot: ["FACE"];
		sortOrder: 100887;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMFace3dmask02 = AvatarCustomization<
	"AVATAR_m_face_3dmask_02",
	{
		assetName: "m_face_3dmask_2";
		bundleName: "m_face_3dmask_02_bundle";
		enabled: true;
		groupName: "group_face";
		iapSku: "pgorelease.avatar.m_face_3dmask_2";
		iconName: "m_face_3dmask_02_bundle_icon";
		slot: ["FACE"];
		sortOrder: 100888;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMFaceBanettemask = AvatarCustomization<
	"AVATAR_m_face_banettemask",
	{
		assetName: "m_face_banettemask_0";
		bundleName: "m_face_banettemask_bundle";
		enabled: true;
		groupName: "group_face";
		iapSku: "pgorelease.avatar.m_face_banettemask_0";
		iconName: "m_face_banettemask_00_bundle_icon";
		slot: ["FACE"];
		sortOrder: 100780;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMFaceDayofthedead = AvatarCustomization<
	"AVATAR_m_face_dayofthedead",
	{
		assetName: "m_face_dayofthedead_0";
		bundleName: "m_face_dayofthedead_bundle";
		enabled: true;
		groupName: "group_face";
		iapSku: "pgorelease.avatar.m_face_dayofthedead_0";
		iconName: "m_face_dayofthedead_00_bundle_icon";
		setNames: ["dayofthedead"];
		slot: ["FACE"];
		sortOrder: 101283;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMFaceDefaultmask = AvatarCustomization<
	"AVATAR_m_face_defaultmask",
	{
		assetName: "m_face_defaultmask_0";
		bundleName: "m_face_defaultmask_bundle";
		enabled: true;
		groupName: "group_face";
		iconName: "m_face_defaultmask_00_bundle_icon";
		slot: ["FACE"];
		sortOrder: 100804;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMFaceEmpty = AvatarCustomization<
	"AVATAR_m_face_empty",
	{
		assetName: "m_face_empty";
		bundleName: "m_face_empty_bundle";
		enabled: true;
		groupName: "group_face";
		iconName: "m_face_empty_bundle_icon";
		slot: ["FACE"];
		sortOrder: 100802;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMFaceFacestickerghostpika = AvatarCustomization<
	"AVATAR_m_face_facestickerghostpika",
	{
		assetName: "m_face_facestickerghostpika_0";
		bundleName: "m_face_facestickerghostpika_bundle";
		enabled: true;
		groupName: "group_face";
		iapSku: "pgorelease.avatar.m_face_facestickerghostpika_0";
		iconName: "m_face_facestickerghostpika_00_bundle_icon";
		slot: ["FACE"];
		sortOrder: 101045;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMFaceFacestickerpikachu = AvatarCustomization<
	"AVATAR_m_face_facestickerpikachu",
	{
		assetName: "m_face_facestickerpikachu_0";
		bundleName: "m_face_facestickerpikachu_bundle";
		enabled: true;
		groupName: "group_face";
		iapSku: "pgorelease.avatar.m_face_facestickerpikachu_0";
		iconName: "m_face_facestickerpikachu_00_bundle_icon";
		slot: ["FACE"];
		sortOrder: 100972;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMFaceFacestickerpokeball = AvatarCustomization<
	"AVATAR_m_face_facestickerpokeball",
	{
		assetName: "m_face_facestickerpokeball_0";
		bundleName: "m_face_facestickerpokeball_bundle";
		enabled: true;
		groupName: "group_face";
		iapSku: "pgorelease.avatar.m_face_facestickerpokeball_0";
		iconName: "m_face_facestickerpokeball_00_bundle_icon";
		slot: ["FACE"];
		sortOrder: 100971;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMFaceFestofcolors00 = AvatarCustomization<
	"AVATAR_m_face_festOfColors_00",
	{
		assetName: "m_face_festOfColors_0";
		bundleName: "m_face_festofcolors_00_bundle";
		enabled: true;
		groupName: "group_face";
		iconName: "m_face_festofcolors_00_bundle_icon";
		slot: ["FACE"];
		sortOrder: 101148;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMFaceFestofcolors01 = AvatarCustomization<
	"AVATAR_m_face_festOfColors_01",
	{
		assetName: "m_face_festOfColors_1";
		bundleName: "m_face_festofcolors_01_bundle";
		enabled: true;
		groupName: "group_face";
		iconName: "m_face_festofcolors_01_bundle_icon";
		slot: ["FACE"];
		sortOrder: 101149;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMFaceFestofcolors02 = AvatarCustomization<
	"AVATAR_m_face_festOfColors_02",
	{
		assetName: "m_face_festOfColors_2";
		bundleName: "m_face_festofcolors_02_bundle";
		enabled: true;
		groupName: "group_face";
		iconName: "m_face_festofcolors_02_bundle_icon";
		slot: ["FACE"];
		sortOrder: 101150;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMFaceGracidea = AvatarCustomization<
	"AVATAR_m_face_gracidea",
	{
		assetName: "m_face_gracidea_0";
		bundleName: "m_face_gracidea_bundle";
		enabled: true;
		groupName: "group_face";
		iapSku: "pgorelease.avatar.m_face_gracidea_0";
		iconName: "m_face_gracidea_00_bundle_icon";
		slot: ["FACE"];
		sortOrder: 101199;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMFaceHoliday2022santacostumes = AvatarCustomization<
	"AVATAR_m_face_holiday2022santacostumes",
	{
		assetName: "m_face_holiday2022santacostumes_0";
		bundleName: "m_face_holiday2022santacostumes_bundle";
		enabled: true;
		groupName: "group_face";
		iapSku: "pgorelease.avatar.m_face_holiday2022santacostumes_0";
		iconName: "m_face_holiday2022santacostumes_00_bundle_icon";
		setNames: ["holiday2022santacostumes"];
		slot: ["FACE"];
		sortOrder: 101336;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMFacePikachumask = AvatarCustomization<
	"AVATAR_m_face_pikachumask",
	{
		assetName: "m_face_pikachumask_0";
		bundleName: "m_face_pikachumask_bundle";
		enabled: true;
		groupName: "group_face";
		iapSku: "pgorelease.avatar.m_face_pikachumask_0";
		iconName: "m_face_pikachumask_00_bundle_icon";
		slot: ["FACE"];
		sortOrder: 100778;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMFaceSableyemask = AvatarCustomization<
	"AVATAR_m_face_sableyemask",
	{
		assetName: "m_face_sableyemask_0";
		bundleName: "m_face_sableyemask_bundle";
		enabled: true;
		groupName: "group_face";
		iapSku: "pgorelease.avatar.m_face_sableyemask_0";
		iconName: "m_face_sableyemask_00_bundle_icon";
		slot: ["FACE"];
		sortOrder: 100779;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMFaceTeamskull = AvatarCustomization<
	"AVATAR_m_face_teamskull",
	{
		assetName: "m_face_teamskull_0";
		bundleName: "m_face_teamskull_bundle";
		enabled: true;
		groupName: "group_face";
		iapSku: "pgorelease.avatar.m_face_teamskull_0";
		iconName: "m_face_teamskull_00_bundle_icon";
		setNames: ["teamskull"];
		slot: ["FACE"];
		sortOrder: 101166;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMFaceToxelmask = AvatarCustomization<
	"AVATAR_m_face_toxelmask",
	{
		assetName: "m_face_toxelmask_0";
		bundleName: "m_face_toxelmask_bundle";
		enabled: true;
		groupName: "group_face";
		iapSku: "pgorelease.avatar.m_face_toxelmask_0";
		iconName: "m_face_toxelmask_00_bundle_icon";
		slot: ["FACE"];
		sortOrder: 101634;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMFaceVerizon2020mask = AvatarCustomization<
	"AVATAR_m_face_verizon2020mask",
	{
		assetName: "m_face_verizon2020mask_0";
		bundleName: "m_face_verizon2020mask_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iapSku: "pgorelease.avatar.m_face_verizon2020mask_0";
		iconName: "m_face_verizon2020mask_0_bundle_icon";
		slot: ["FACE"];
		sortOrder: 100752;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlasses3d = AvatarCustomization<
	"AVATAR_m_glasses_3d",
	{
		assetName: "m_glasses_3d";
		bundleName: "m_glasses_3d_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.m_glasses_3d";
		iconName: "m_glasses_3d_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 100310;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlassesCutieflysleepmask = AvatarCustomization<
	"AVATAR_m_glasses_cutieflysleepmask",
	{
		assetName: "m_glasses_cutieflysleepmask_0";
		bundleName: "m_glasses_cutieflysleepmask_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.m_glasses_cutieflysleepmask_0";
		iconName: "m_glasses_cutieflysleepmask_00_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 101543;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlassesDivingsuit = AvatarCustomization<
	"AVATAR_m_glasses_divingsuit",
	{
		assetName: "m_glasses_divingsuit_0";
		bundleName: "m_glasses_divingsuit_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.m_glasses_divingsuit_0";
		iconName: "m_glasses_divingsuit_00_bundle_icon";
		setNames: ["divingsuit"];
		slot: ["GLASSES"];
		sortOrder: 101414;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlassesDrpikachu = AvatarCustomization<
	"AVATAR_m_glasses_drpikachu",
	{
		assetName: "m_glasses_drpikachu_0";
		bundleName: "m_glasses_drpikachu_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.m_glasses_drpikachu_0";
		iconName: "m_glasses_drpikachu_00_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 101488;
		unlockBadgeLevel: 1;
		unlockBadgeType: "BADGE_MAX_SIZE_FIRST_PLACE_WIN";
		unlockType: "MEDAL_REWARD";
	}
>;
export type AvatarCustomizationMGlassesEmpty = AvatarCustomization<
	"AVATAR_m_glasses_empty",
	{
		assetName: "m_glasses_empty";
		bundleName: "m_glasses_empty_bundle";
		enabled: true;
		groupName: "group_glasses";
		iconName: "m_glasses_empty_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 100300;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMGlassesFrillishglasses = AvatarCustomization<
	"AVATAR_m_glasses_frillishglasses",
	{
		assetName: "m_glasses_frillishglasses_0";
		bundleName: "m_glasses_frillishglasses_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.m_glasses_frillishglasses_0";
		iconName: "m_glasses_frillishglasses_00_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 101346;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlassesFw2022 = AvatarCustomization<
	"AVATAR_m_glasses_fw2022",
	{
		assetName: "m_glasses_fw2022_0";
		bundleName: "m_glasses_fw2022_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.m_glasses_fw2022_0";
		iconName: "m_glasses_fw2022_00_bundle_icon";
		setNames: ["fw2022"];
		slot: ["GLASSES"];
		sortOrder: 101264;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlassesGimmighoulitems = AvatarCustomization<
	"AVATAR_m_glasses_gimmighoulitems",
	{
		assetName: "m_glasses_gimmighoulitems_0";
		bundleName: "m_glasses_gimmighoulitems_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.m_glasses_gimmighoulitems_0";
		iconName: "m_glasses_gimmighoulitems_00_bundle_icon";
		setNames: ["gimmighoulitems"];
		slot: ["GLASSES"];
		sortOrder: 101362;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlassesGoteamrocketarlo = AvatarCustomization<
	"AVATAR_m_glasses_goteamrocketarlo",
	{
		assetName: "m_glasses_goteamrocketarlo";
		bundleName: "m_glasses_goteamrocketarlo_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.m_glasses_goteamrocketarlo";
		iconName: "m_glasses_goteamrocketarlo_00_bundle_icon";
		setNames: ["goteamrocketarlo"];
		slot: ["GLASSES"];
		sortOrder: 100772;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlassesGrandoakglasses = AvatarCustomization<
	"AVATAR_m_glasses_grandoakglasses",
	{
		assetName: "m_glasses_grandoakglasses";
		bundleName: "m_glasses_grandoakglasses_bundle";
		enabled: true;
		groupName: "group_glasses";
		iconName: "m_glasses_grandoakglasses_00_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 100312;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMGlassesJogger0 = AvatarCustomization<
	"AVATAR_m_glasses_jogger_0",
	{
		assetName: "m_glasses_jogger_0";
		bundleName: "m_glasses_jogger_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.m_glasses_jogger_0";
		iconName: "m_glasses_jogger_bundle_icon";
		setNames: ["jogger_0"];
		slot: ["GLASSES"];
		sortOrder: 100309;
		unlockBadgeLevel: 10;
		unlockBadgeType: "BADGE_TRAVEL_KM";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlassesLugiaglasses = AvatarCustomization<
	"AVATAR_m_glasses_lugiaglasses",
	{
		assetName: "m_glasses_lugiaglasses_0";
		bundleName: "m_glasses_lugiaglasses_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.m_glasses_lugiaglasses_0";
		iconName: "m_glasses_lugiaglasses_00_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 101136;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlassesLv40glasses = AvatarCustomization<
	"AVATAR_m_glasses_lv40glasses",
	{
		assetName: "m_glasses_lv40glasses_00";
		bundleName: "m_glasses_lv40glasses_bundle";
		enabled: true;
		groupName: "group_glasses";
		iconName: "m_glasses_lv40glasses_00_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 100763;
		unlockPlayerLevel: 41;
		unlockType: "LEVEL_REWARD";
	}
>;
export type AvatarCustomizationMGlassesMask0 = AvatarCustomization<
	"AVATAR_m_glasses_mask_0",
	{
		assetName: "m_glasses_mask_0";
		bundleName: "m_glasses_mask_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.m_glasses_mask_0";
		iconName: "m_glasses_mask_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 100308;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlassesMask1 = AvatarCustomization<
	"AVATAR_m_glasses_mask_1",
	{
		assetName: "m_glasses_mask_1";
		bundleName: "m_glasses_mask_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.m_glasses_mask_1";
		iconName: "m_glasses_mask_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 100307;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlassesNewyear2022 = AvatarCustomization<
	"AVATAR_m_glasses_newyear2022",
	{
		assetName: "m_glasses_newyearglasses2022_0";
		bundleName: "m_glasses_newyearglasses2022_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.m_glasses_newyearglasses2022_0";
		iconName: "m_glasses_newyearglasses2022_00_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 101104;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlassesNewyearglasses2020 = AvatarCustomization<
	"AVATAR_m_glasses_newyearglasses2020",
	{
		assetName: "m_glasses_newyearglasses2020_0";
		bundleName: "m_glasses_newyearglasses2020_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.m_glasses_newyearglasses2020_0";
		iconName: "m_glasses_newyearglasses2020_0_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 100311;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlassesNewyearglasses2021 = AvatarCustomization<
	"AVATAR_m_glasses_newyearglasses2021",
	{
		assetName: "m_glasses_newyearglasses2021_0";
		bundleName: "m_glasses_newyearglasses2021_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.m_glasses_newyearglasses2021_0";
		iconName: "m_glasses_newyearglasses2021_00_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 100859;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlassesObstagoonitems = AvatarCustomization<
	"AVATAR_m_glasses_obstagoonitems",
	{
		assetName: "m_glasses_obstagoonitems_0";
		bundleName: "m_glasses_obstagoonitems_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.m_glasses_obstagoonitems_0";
		iconName: "m_glasses_obstagoonitems_00_bundle_icon";
		setNames: ["obstagoonitems"];
		slot: ["GLASSES"];
		sortOrder: 101232;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlassesRoundsunglasses = AvatarCustomization<
	"AVATAR_m_glasses_roundsunglasses",
	{
		assetName: "m_glasses_roundsunglasses_0";
		bundleName: "m_glasses_roundsunglasses_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.m_glasses_roundsunglasses_0";
		iconName: "m_glasses_roundsunglasses_00_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 101019;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlassesTeardrop0 = AvatarCustomization<
	"AVATAR_m_glasses_teardrop_0",
	{
		assetName: "m_glasses_teardrop_0";
		bundleName: "m_glasses_teardrop_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.m_glasses_teardrop_0";
		iconName: "m_glasses_teardrop_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 100306;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlassesThick0 = AvatarCustomization<
	"AVATAR_m_glasses_thick_0",
	{
		assetName: "m_glasses_thick_0";
		bundleName: "m_glasses_thick_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.m_glasses_thick_0";
		iconName: "m_glasses_thick_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 100305;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlassesThick1 = AvatarCustomization<
	"AVATAR_m_glasses_thick_1",
	{
		assetName: "m_glasses_thick_1";
		bundleName: "m_glasses_thick_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.m_glasses_thick_1";
		iconName: "m_glasses_thick_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 100304;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlassesThick2 = AvatarCustomization<
	"AVATAR_m_glasses_thick_2",
	{
		assetName: "m_glasses_thick_2";
		bundleName: "m_glasses_thick_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.m_glasses_thick_2";
		iconName: "m_glasses_thick_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 100303;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlassesThick3 = AvatarCustomization<
	"AVATAR_m_glasses_thick_3",
	{
		assetName: "m_glasses_thick_3";
		bundleName: "m_glasses_thick_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.m_glasses_thick_3";
		iconName: "m_glasses_thick_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 100302;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlassesThick4 = AvatarCustomization<
	"AVATAR_m_glasses_thick_4",
	{
		assetName: "m_glasses_thick_4";
		bundleName: "m_glasses_thick_bundle";
		enabled: true;
		groupName: "group_glasses";
		iapSku: "pgorelease.avatar.m_glasses_thick_4";
		iconName: "m_glasses_thick_bundle_icon";
		slot: ["GLASSES"];
		sortOrder: 100301;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlovesAcetrainersm = AvatarCustomization<
	"AVATAR_m_gloves_acetrainersm",
	{
		assetName: "m_gloves_acetrainersm_0";
		bundleName: "m_gloves_acetrainersm_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.m_gloves_acetrainersm_0";
		iconName: "m_gloves_acetrainersm_0_bundle_icon";
		setNames: ["acetrainersm"];
		slot: ["GLOVES"];
		sortOrder: 100296;
		unlockBadgeLevel: 50;
		unlockBadgeType: "BADGE_GREAT_LEAGUE";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlovesBea = AvatarCustomization<
	"AVATAR_m_gloves_bea",
	{
		assetName: "m_gloves_bea_0";
		bundleName: "m_gloves_bea_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.m_gloves_bea_0";
		iconName: "m_gloves_bea_00_bundle_icon";
		setNames: ["bea"];
		slot: ["GLOVES"];
		sortOrder: 101180;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlovesBwn = AvatarCustomization<
	"AVATAR_m_gloves_bwn",
	{
		assetName: "m_gloves_bwn_0";
		bundleName: "m_gloves_bwn_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.m_gloves_bwn_0";
		iconName: "m_gloves_bwn_00_bundle_icon";
		setNames: ["bwn"];
		slot: ["GLOVES"];
		sortOrder: 100830;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlovesDefault0 = AvatarCustomization<
	"AVATAR_m_gloves_default_0",
	{
		assetName: "m_gloves_default_0";
		bundleName: "m_gloves_default_bundle";
		enabled: true;
		groupName: "group_gloves";
		iconName: "m_gloves_default_bundle_icon";
		slot: ["GLOVES"];
		sortOrder: 100288;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMGlovesDefault1 = AvatarCustomization<
	"AVATAR_m_gloves_default_1",
	{
		assetName: "m_gloves_default_1";
		bundleName: "m_gloves_default_bundle";
		enabled: true;
		groupName: "group_gloves";
		iconName: "m_gloves_default_bundle_icon";
		slot: ["GLOVES"];
		sortOrder: 100287;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMGlovesDefault2 = AvatarCustomization<
	"AVATAR_m_gloves_default_2",
	{
		assetName: "m_gloves_default_2";
		bundleName: "m_gloves_default_bundle";
		enabled: true;
		groupName: "group_gloves";
		iconName: "m_gloves_default_bundle_icon";
		slot: ["GLOVES"];
		sortOrder: 100286;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMGlovesDefault3 = AvatarCustomization<
	"AVATAR_m_gloves_default_3",
	{
		assetName: "m_gloves_default_3";
		bundleName: "m_gloves_default_bundle";
		enabled: true;
		groupName: "group_gloves";
		iconName: "m_gloves_default_bundle_icon";
		slot: ["GLOVES"];
		sortOrder: 100285;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMGlovesDelibird = AvatarCustomization<
	"AVATAR_m_gloves_delibird",
	{
		assetName: "m_gloves_delibird_0";
		bundleName: "m_gloves_delibird_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.m_gloves_delibird_0";
		iconName: "m_gloves_delibird_0_bundle_icon";
		setNames: ["delibird"];
		slot: ["GLOVES"];
		sortOrder: 100293;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlovesDynamaxswsh = AvatarCustomization<
	"AVATAR_m_gloves_dynamaxswsh",
	{
		assetName: "m_gloves_dynamaxswsh_0";
		bundleName: "m_gloves_dynamaxswsh_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.m_gloves_dynamaxswsh_0";
		iconName: "m_gloves_dynamaxswsh_00_bundle_icon";
		slot: ["GLOVES"];
		sortOrder: 101631;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlovesEmpty = AvatarCustomization<
	"AVATAR_m_gloves_empty",
	{
		assetName: "m_gloves_empty";
		bundleName: "m_gloves_empty_bundle";
		enabled: true;
		groupName: "group_gloves";
		iconName: "m_gloves_empty_bundle_icon";
		slot: ["GLOVES"];
		sortOrder: 100284;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMGlovesFrlg0 = AvatarCustomization<
	"AVATAR_m_gloves_frlg_0",
	{
		assetName: "m_gloves_frlg_0";
		bundleName: "m_gloves_frlg_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.m_gloves_frlg_0";
		iconName: "m_gloves_frlg_bundle_icon";
		setNames: ["frlg_0"];
		slot: ["GLOVES"];
		sortOrder: 100292;
		unlockBadgeLevel: 5;
		unlockBadgeType: "BADGE_POKEDEX_ENTRIES";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlovesGeeta = AvatarCustomization<
	"AVATAR_m_gloves_geeta",
	{
		assetName: "m_gloves_geeta_0";
		bundleName: "m_gloves_geeta_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.m_gloves_geeta_0";
		iconName: "m_gloves_geeta_00_bundle_icon";
		setNames: ["geeta"];
		slot: ["GLOVES"];
		sortOrder: 101448;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlovesGiovanni = AvatarCustomization<
	"AVATAR_m_gloves_giovanni",
	{
		assetName: "m_gloves_giovanni_0";
		bundleName: "m_gloves_giovanni_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.m_gloves_giovanni_0";
		iconName: "m_gloves_giovanni_0_bundle_icon";
		setNames: ["giovanni"];
		slot: ["GLOVES"];
		sortOrder: 100298;
		unlockBadgeLevel: 20;
		unlockBadgeType: "BADGE_ROCKET_GIOVANNI_DEFEATED";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlovesGuzma = AvatarCustomization<
	"AVATAR_m_gloves_guzma",
	{
		assetName: "m_gloves_guzma_0";
		bundleName: "m_gloves_guzma_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.m_gloves_guzma_0";
		iconName: "m_gloves_guzma_00_bundle_icon";
		setNames: ["guzma"];
		slot: ["GLOVES"];
		sortOrder: 101236;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlovesGymleader0 = AvatarCustomization<
	"AVATAR_m_gloves_gymleader_0",
	{
		assetName: "m_gloves_gymleader_0";
		bundleName: "m_gloves_gymleader_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.m_gloves_gymleader_0";
		iconName: "m_gloves_gymleader_bundle_icon";
		setNames: ["gymleader_0"];
		slot: ["GLOVES"];
		sortOrder: 100291;
		unlockBadgeLevel: 10;
		unlockBadgeType: "BADGE_HOURS_DEFENDED";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlovesHoopabangle = AvatarCustomization<
	"AVATAR_m_gloves_hoopabangle",
	{
		assetName: "m_gloves_hoopabangle_0";
		bundleName: "m_gloves_hoopabangle_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.m_gloves_hoopabangle_0";
		iconName: "m_gloves_hoopabangle_00_bundle_icon";
		setNames: ["hoopa"];
		slot: ["GLOVES"];
		sortOrder: 101025;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlovesJogger0 = AvatarCustomization<
	"AVATAR_m_gloves_jogger_0",
	{
		assetName: "m_gloves_jogger";
		bundleName: "m_gloves_jogger_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.m_gloves_jogger";
		iconName: "m_gloves_jogger_bundle_icon";
		setNames: ["jogger_0"];
		slot: ["GLOVES"];
		sortOrder: 100290;
		unlockBadgeLevel: 10;
		unlockBadgeType: "BADGE_TRAVEL_KM";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlovesKorrina = AvatarCustomization<
	"AVATAR_m_gloves_korrina",
	{
		assetName: "m_gloves_korrina_0";
		bundleName: "m_gloves_korrina_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.m_gloves_korrina_0";
		iconName: "m_gloves_korrina_00_bundle_icon";
		setNames: ["korrina"];
		slot: ["GLOVES"];
		sortOrder: 100956;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlovesLysandre = AvatarCustomization<
	"AVATAR_m_gloves_lysandre",
	{
		assetName: "m_gloves_lysandre_0";
		bundleName: "m_gloves_lysandre_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.m_gloves_lysandre_0";
		iconName: "m_gloves_lysandre_00_bundle_icon";
		setNames: ["lysandre"];
		slot: ["GLOVES"];
		sortOrder: 101079;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlovesMegabangle = AvatarCustomization<
	"AVATAR_m_gloves_megabangle",
	{
		assetName: "m_gloves_megabangle_0";
		bundleName: "m_gloves_megabangle_bundle";
		enabled: true;
		groupName: "group_gloves";
		iconName: "m_gloves_megabangle_00_bundle_icon";
		slot: ["GLOVES"];
		sortOrder: 100753;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMGlovesMegabangleblack = AvatarCustomization<
	"AVATAR_m_gloves_megabangleblack",
	{
		assetName: "m_gloves_megabangleblack_0";
		bundleName: "m_gloves_megabangleblack_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.m_gloves_megabangleblack_0";
		iconName: "m_gloves_megabangleblack_00_bundle_icon";
		slot: ["GLOVES"];
		sortOrder: 100754;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlovesMegabangleblue = AvatarCustomization<
	"AVATAR_m_gloves_megabangleblue",
	{
		assetName: "m_gloves_megabangleblue_0";
		bundleName: "m_gloves_megabangleblue_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.m_gloves_megabangleblue_0";
		iconName: "m_gloves_megabangleblue_00_bundle_icon";
		slot: ["GLOVES"];
		sortOrder: 100755;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlovesMegabanglered = AvatarCustomization<
	"AVATAR_m_gloves_megabanglered",
	{
		assetName: "m_gloves_megabanglered_0";
		bundleName: "m_gloves_megabanglered_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.m_gloves_megabanglered_0";
		iconName: "m_gloves_megabanglered_00_bundle_icon";
		slot: ["GLOVES"];
		sortOrder: 100756;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlovesMegabangleyellow = AvatarCustomization<
	"AVATAR_m_gloves_megabangleyellow",
	{
		assetName: "m_gloves_megabangleyellow_0";
		bundleName: "m_gloves_megabangleyellow_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.m_gloves_megabangleyellow_0";
		iconName: "m_gloves_megabangleyellow_00_bundle_icon";
		slot: ["GLOVES"];
		sortOrder: 100757;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlovesObstagoonitems = AvatarCustomization<
	"AVATAR_m_gloves_obstagoonitems",
	{
		assetName: "m_gloves_obstagoonitems_0";
		bundleName: "m_gloves_obstagoonitems_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.m_gloves_obstagoonitems_0";
		iconName: "m_gloves_obstagoonitems_00_bundle_icon";
		setNames: ["obstagoonitems"];
		slot: ["GLOVES"];
		sortOrder: 101230;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlovesPalmer = AvatarCustomization<
	"AVATAR_m_gloves_palmer",
	{
		assetName: "m_gloves_palmer_0";
		bundleName: "m_gloves_palmer_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.m_gloves_palmer_0";
		iconName: "m_gloves_palmer_00_bundle_icon";
		setNames: ["palmer"];
		slot: ["GLOVES"];
		sortOrder: 101366;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlovesProfwillowoutfit = AvatarCustomization<
	"AVATAR_m_gloves_profwillowoutfit",
	{
		assetName: "m_gloves_profwillowoutfit_0";
		bundleName: "m_gloves_profwillowoutfit_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.m_gloves_profwillowoutfit_0";
		iconName: "m_gloves_profwillowoutfit_00_bundle_icon";
		setNames: ["profwillowoutfit"];
		slot: ["GLOVES"];
		sortOrder: 101382;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlovesStevenfirst = AvatarCustomization<
	"AVATAR_m_gloves_stevenfirst",
	{
		assetName: "m_gloves_stevenfirst_0";
		bundleName: "m_gloves_stevenfirst_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.m_gloves_stevenfirst_0";
		iconName: "m_gloves_stevenfirst_00_bundle_icon";
		setNames: ["stevenfirst"];
		slot: ["GLOVES"];
		sortOrder: 101310;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlovesSvdlc2spring = AvatarCustomization<
	"AVATAR_m_gloves_svdlc2spring",
	{
		assetName: "m_gloves_svdlc2spring_0";
		bundleName: "m_gloves_svdlc2spring_bundle";
		enabled: true;
		groupName: "group_gloves";
		iconName: "m_gloves_svdlc2spring_00_bundle_icon";
		setNames: ["svdlc2spring", "svdlc2fall"];
		slot: ["GLOVES"];
		sortOrder: 101518;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMGlovesSwshdlc2costume = AvatarCustomization<
	"AVATAR_m_gloves_swshdlc2costume",
	{
		assetName: "m_gloves_swshdlc2costume_0";
		bundleName: "m_gloves_swshdlc2costume_bundle";
		enabled: true;
		groupName: "group_gloves";
		iconName: "m_gloves_swshdlc2costume_00_bundle_icon";
		setNames: ["swshdlc2costume"];
		slot: ["GLOVES"];
		sortOrder: 100798;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMGlovesSwshdlccostume = AvatarCustomization<
	"AVATAR_m_gloves_swshdlccostume",
	{
		assetName: "m_gloves_swshdlccostume_0";
		bundleName: "m_gloves_swshdlccostume_bundle";
		enabled: true;
		groupName: "group_gloves";
		iconName: "m_gloves_swshdlccostume_00_bundle_icon";
		setNames: ["swshdlccostume"];
		slot: ["GLOVES"];
		sortOrder: 100299;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMGlovesSwshuniformchampion = AvatarCustomization<
	"AVATAR_m_gloves_swshuniformchampion",
	{
		assetName: "m_gloves_swshuniformchampion_0";
		bundleName: "m_gloves_swshuniformchampion_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.m_gloves_swshuniformchampion_0";
		iconName: "m_gloves_swshuniformchampion_00_bundle_icon";
		setNames: ["swshuniformchampion"];
		slot: ["GLOVES"];
		sortOrder: 101012;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlovesSwshuniformdark = AvatarCustomization<
	"AVATAR_m_gloves_swshuniformdark",
	{
		assetName: "m_gloves_swshuniformdark_0";
		bundleName: "m_gloves_swshuniformdark_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.m_gloves_swshuniformdark_0";
		iconName: "m_gloves_swshuniformdark_00_bundle_icon";
		setNames: ["swshuniformdark"];
		slot: ["GLOVES"];
		sortOrder: 101004;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlovesSwshuniformdefault = AvatarCustomization<
	"AVATAR_m_gloves_swshuniformdefault",
	{
		assetName: "m_gloves_swshuniformdefault_0";
		bundleName: "m_gloves_swshuniformdefault_bundle";
		enabled: true;
		groupName: "group_gloves";
		iconName: "m_gloves_swshuniformdefault_00_bundle_icon";
		setNames: ["swshuniformdefault"];
		slot: ["GLOVES"];
		sortOrder: 100994;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMGlovesSwshuniformdragon = AvatarCustomization<
	"AVATAR_m_gloves_swshuniformdragon",
	{
		assetName: "m_gloves_swshuniformdragon_0";
		bundleName: "m_gloves_swshuniformdragon_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.m_gloves_swshuniformdragon_0";
		iconName: "m_gloves_swshuniformdragon_00_bundle_icon";
		setNames: ["swshuniformdragon"];
		slot: ["GLOVES"];
		sortOrder: 100984;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlovesTeamaqua = AvatarCustomization<
	"AVATAR_m_gloves_teamaqua",
	{
		assetName: "m_gloves_teamaqua_0";
		bundleName: "m_gloves_teamaqua_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.m_gloves_teamaqua_0";
		iconName: "m_gloves_teamaqua_0_bundle_icon";
		setNames: ["teamaqua"];
		slot: ["GLOVES"];
		sortOrder: 100294;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlovesTeammagma = AvatarCustomization<
	"AVATAR_m_gloves_teammagma",
	{
		assetName: "m_gloves_teammagma_0";
		bundleName: "m_gloves_teammagma_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.m_gloves_teammagma_0";
		iconName: "m_gloves_teammagma_0_bundle_icon";
		setNames: ["teammagma"];
		slot: ["GLOVES"];
		sortOrder: 100295;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlovesTeamrocket0 = AvatarCustomization<
	"AVATAR_m_gloves_teamrocket_0",
	{
		assetName: "m_gloves_teamrocket_0";
		bundleName: "m_gloves_teamrocket_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.m_gloves_teamrocket_0";
		iconName: "m_gloves_teamrocket_bundle_icon";
		setNames: ["teamrocket_0", "teamrocket_1"];
		slot: ["GLOVES"];
		sortOrder: 100289;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlovesTeamspark = AvatarCustomization<
	"AVATAR_m_gloves_teamspark",
	{
		assetName: "m_gloves_teamspark_0";
		bundleName: "m_gloves_teamspark_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.m_gloves_teamspark_0";
		iconName: "m_gloves_teamspark_0_bundle_icon";
		setNames: ["teamspark"];
		slot: ["GLOVES"];
		sortOrder: 100297;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGlovesWintergloves2023 = AvatarCustomization<
	"AVATAR_m_gloves_wintergloves2023",
	{
		assetName: "m_gloves_wintergloves2023_0";
		bundleName: "m_gloves_wintergloves2023_bundle";
		enabled: true;
		groupName: "group_gloves";
		iapSku: "pgorelease.avatar.m_gloves_wintergloves2023_0";
		iconName: "m_gloves_wintergloves2023_00_bundle_icon";
		setNames: ["winter2023"];
		slot: ["GLOVES"];
		sortOrder: 101530;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMGofestPikachuvisor = AvatarCustomization<
	"AVATAR_m_gofest_pikachuvisor",
	{
		assetName: "m_hat_gofest_pikachuvisor_0";
		bundleName: "m_hat_gofest_pikachuvisor_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "m_hat_gofest_pikachuvisor_0_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100743;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHairDefault0 = AvatarCustomization<
	"AVATAR_m_hair_default_0",
	{
		assetName: "m_hair_default_0";
		bundleName: "m_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "m_group_hair";
		slot: ["HAIR"];
		sortOrder: 100280;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHairDefault1 = AvatarCustomization<
	"AVATAR_m_hair_default_1",
	{
		assetName: "m_hair_default_1";
		bundleName: "m_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "m_group_hair";
		slot: ["HAIR"];
		sortOrder: 100274;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHairDefault10 = AvatarCustomization<
	"AVATAR_m_hair_default_10",
	{
		assetName: "m_hair_default_10";
		bundleName: "m_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "m_group_hair";
		slot: ["HAIR"];
		sortOrder: 100265;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHairDefault11 = AvatarCustomization<
	"AVATAR_m_hair_default_11",
	{
		assetName: "m_hair_default_11";
		bundleName: "m_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "m_group_hair";
		slot: ["HAIR"];
		sortOrder: 100277;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHairDefault12 = AvatarCustomization<
	"AVATAR_m_hair_default_12",
	{
		assetName: "m_hair_default_12";
		bundleName: "m_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "m_group_hair";
		slot: ["HAIR"];
		sortOrder: 100275;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHairDefault13 = AvatarCustomization<
	"AVATAR_m_hair_default_13",
	{
		assetName: "m_hair_default_13";
		bundleName: "m_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "m_group_hair";
		slot: ["HAIR"];
		sortOrder: 100271;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHairDefault14 = AvatarCustomization<
	"AVATAR_m_hair_default_14",
	{
		assetName: "m_hair_default_14";
		bundleName: "m_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "m_group_hair";
		slot: ["HAIR"];
		sortOrder: 100267;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHairDefault15 = AvatarCustomization<
	"AVATAR_m_hair_default_15",
	{
		assetName: "m_hair_default_15";
		bundleName: "m_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "m_group_hair";
		slot: ["HAIR"];
		sortOrder: 100266;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHairDefault16 = AvatarCustomization<
	"AVATAR_m_hair_default_16",
	{
		assetName: "m_hair_default_16";
		bundleName: "m_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "m_group_hair";
		slot: ["HAIR"];
		sortOrder: 100272;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHairDefault17 = AvatarCustomization<
	"AVATAR_m_hair_default_17",
	{
		assetName: "m_hair_default_17";
		bundleName: "m_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "m_group_hair";
		slot: ["HAIR"];
		sortOrder: 100268;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHairDefault18 = AvatarCustomization<
	"AVATAR_m_hair_default_18",
	{
		assetName: "m_hair_default_18";
		bundleName: "m_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "m_group_hair";
		slot: ["HAIR"];
		sortOrder: 100278;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHairDefault19 = AvatarCustomization<
	"AVATAR_m_hair_default_19",
	{
		assetName: "m_hair_default_19";
		bundleName: "m_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "m_group_hair";
		slot: ["HAIR"];
		sortOrder: 100276;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHairDefault2 = AvatarCustomization<
	"AVATAR_m_hair_default_2",
	{
		assetName: "m_hair_default_2";
		bundleName: "m_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "m_group_hair";
		slot: ["HAIR"];
		sortOrder: 100283;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHairDefault3 = AvatarCustomization<
	"AVATAR_m_hair_default_3",
	{
		assetName: "m_hair_default_3";
		bundleName: "m_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "m_group_hair";
		slot: ["HAIR"];
		sortOrder: 100269;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHairDefault4 = AvatarCustomization<
	"AVATAR_m_hair_default_4",
	{
		assetName: "m_hair_default_4";
		bundleName: "m_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "m_group_hair";
		slot: ["HAIR"];
		sortOrder: 100264;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHairDefault5 = AvatarCustomization<
	"AVATAR_m_hair_default_5",
	{
		assetName: "m_hair_default_5";
		bundleName: "m_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "m_group_hair";
		slot: ["HAIR"];
		sortOrder: 100281;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHairDefault6 = AvatarCustomization<
	"AVATAR_m_hair_default_6",
	{
		assetName: "m_hair_default_6";
		bundleName: "m_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "m_group_hair";
		slot: ["HAIR"];
		sortOrder: 100279;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHairDefault7 = AvatarCustomization<
	"AVATAR_m_hair_default_7",
	{
		assetName: "m_hair_default_7";
		bundleName: "m_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "m_group_hair";
		slot: ["HAIR"];
		sortOrder: 100273;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHairDefault8 = AvatarCustomization<
	"AVATAR_m_hair_default_8",
	{
		assetName: "m_hair_default_8";
		bundleName: "m_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "m_group_hair";
		slot: ["HAIR"];
		sortOrder: 100282;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHairDefault9 = AvatarCustomization<
	"AVATAR_m_hair_default_9",
	{
		assetName: "m_hair_default_9";
		bundleName: "m_hair_default_asset_bundle";
		enabled: true;
		groupName: "group_hair";
		iconName: "m_group_hair";
		slot: ["HAIR"];
		sortOrder: 100270;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHat6thanniversary = AvatarCustomization<
	"AVATAR_m_hat_6thanniversary",
	{
		assetName: "m_hat_6thanniversary_0";
		bundleName: "m_hat_6thanniversary_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_6thanniversary_0";
		iconName: "m_hat_6thanniversary_00_bundle_icon";
		setNames: ["6thanniversary"];
		slot: ["HAT"];
		sortOrder: 101208;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatAcetrainersm = AvatarCustomization<
	"AVATAR_m_hat_acetrainersm",
	{
		assetName: "m_hat_acetrainersm_0";
		bundleName: "m_hat_acetrainersm_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_acetrainersm_0";
		iconName: "m_hat_acetrainersm_0_bundle_icon";
		setNames: ["acetrainersm"];
		slot: ["HAT"];
		sortOrder: 100247;
		unlockBadgeLevel: 50;
		unlockBadgeType: "BADGE_GREAT_LEAGUE";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatAdventure0 = AvatarCustomization<
	"AVATAR_m_hat_adventure_0",
	{
		assetName: "m_hat_adventure_0";
		bundleName: "m_hat_adventure_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "m_hat_adventure_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100220;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHatAseries = AvatarCustomization<
	"AVATAR_m_hat_aseries",
	{
		assetName: "m_hat_aseries_0";
		bundleName: "m_hat_aseries_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iapSku: "pgorelease.avatar.m_hat_aseries_0";
		iconName: "m_hat_aseries_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100977;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatBea = AvatarCustomization<
	"AVATAR_m_hat_bea",
	{
		assetName: "m_hat_bea_0";
		bundleName: "m_hat_bea_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_bea_0";
		iconName: "m_hat_bea_00_bundle_icon";
		setNames: ["bea"];
		slot: ["HAT"];
		sortOrder: 101178;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatBidoofhat = AvatarCustomization<
	"AVATAR_m_hat_bidoofhat",
	{
		assetName: "m_hat_bidoofhat_0";
		bundleName: "m_hat_bidoofhat_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_bidoofhat_0";
		iconName: "m_hat_bidoofhat_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100961;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatBounsweetitems = AvatarCustomization<
	"AVATAR_m_hat_bounsweetitems",
	{
		assetName: "m_hat_bounsweetitems_0";
		bundleName: "m_hat_bounsweetitems_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_bounsweetitems_0";
		iconName: "m_hat_bounsweetitems_00_bundle_icon";
		setNames: ["bounsweetitems"];
		slot: ["HAT"];
		sortOrder: 101389;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatBurmyearrings11 = AvatarCustomization<
	"AVATAR_m_hat_burmyearrings11",
	{
		assetName: "m_hat_burmyearrings11_0";
		bundleName: "m_hat_burmyearrings11_bundle";
		enabled: true;
		groupName: "group_seasonal";
		iapSku: "pgorelease.avatar.m_hat_burmyearrings11_0";
		iconName: "m_hat_burmyearrings11_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101598;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatBurmyearrings12 = AvatarCustomization<
	"AVATAR_m_hat_burmyearrings12",
	{
		assetName: "m_hat_burmyearrings12_0";
		bundleName: "m_hat_burmyearrings12_bundle";
		enabled: true;
		groupName: "group_seasonal";
		iapSku: "pgorelease.avatar.m_hat_burmyearrings12_0";
		iconName: "m_hat_burmyearrings12_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101600;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatBurmyearrings13 = AvatarCustomization<
	"AVATAR_m_hat_burmyearrings13",
	{
		assetName: "m_hat_burmyearrings13_0";
		bundleName: "m_hat_burmyearrings13_bundle";
		enabled: true;
		groupName: "group_seasonal";
		iapSku: "pgorelease.avatar.m_hat_burmyearrings13_0";
		iconName: "m_hat_burmyearrings13_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101602;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatBwn = AvatarCustomization<
	"AVATAR_m_hat_bwn",
	{
		assetName: "m_hat_bwn_0";
		bundleName: "m_hat_bwn_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_bwn_0";
		iconName: "m_hat_bwn_00_bundle_icon";
		setNames: ["bwn"];
		slot: ["HAT"];
		sortOrder: 100831;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatCasket0 = AvatarCustomization<
	"AVATAR_m_hat_casket_0",
	{
		assetName: "m_hat_casket_0";
		bundleName: "m_hat_casket_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_casket_0";
		iconName: "m_hat_casket_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100236;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatCetoddlehat = AvatarCustomization<
	"AVATAR_m_hat_cetoddlehat",
	{
		assetName: "m_hat_cetoddlehat_0";
		bundleName: "m_hat_cetoddlehat_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_cetoddlehat_0";
		iconName: "m_hat_cetoddlehat_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101515;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatClay = AvatarCustomization<
	"AVATAR_m_hat_clay",
	{
		assetName: "m_hat_clay_0";
		bundleName: "m_hat_clay_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_clay_0";
		iconName: "m_hat_clay_00_bundle_icon";
		setNames: ["clay"];
		slot: ["HAT"];
		sortOrder: 101402;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatCofagrigusitems = AvatarCustomization<
	"AVATAR_m_hat_cofagrigusitems",
	{
		assetName: "m_hat_cofagrigusitems_0";
		bundleName: "m_hat_cofagrigusitems_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_cofagrigusitems_0";
		iconName: "m_hat_cofagrigusitems_00_bundle_icon";
		setNames: ["cofagrigus"];
		slot: ["HAT"];
		sortOrder: 101468;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatCosmog = AvatarCustomization<
	"AVATAR_m_hat_cosmog",
	{
		assetName: "m_hat_cosmog_0";
		bundleName: "m_hat_cosmog_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_cosmog_0";
		iconName: "m_hat_cosmog_00_bundle_icon";
		setNames: ["cosmog"];
		slot: ["HAT"];
		sortOrder: 101252;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatCrownmoon = AvatarCustomization<
	"AVATAR_m_hat_crownmoon",
	{
		assetName: "m_hat_crownmoon_0";
		bundleName: "m_hat_crownmoon_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_crownmoon_0";
		iconName: "m_hat_crownmoon_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101594;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatCrownsun = AvatarCustomization<
	"AVATAR_m_hat_crownsun",
	{
		assetName: "m_hat_crownsun_0";
		bundleName: "m_hat_crownsun_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_crownsun_0";
		iconName: "m_hat_crownsun_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101596;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatCubonehat = AvatarCustomization<
	"AVATAR_m_hat_cubonehat",
	{
		assetName: "m_hat_cubonehat_0";
		bundleName: "m_hat_cubonehat_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_cubonehat_0";
		iconName: "m_hat_cubonehat_0_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100253;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatDarumakahat = AvatarCustomization<
	"AVATAR_m_hat_darumakahat",
	{
		assetName: "m_hat_darumakahat_0";
		bundleName: "m_hat_darumakahat_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_darumakahat_0";
		iconName: "m_hat_darumakahat_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101535;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatDedenneitems = AvatarCustomization<
	"AVATAR_m_hat_dedenneitems",
	{
		assetName: "m_hat_dedenneitems_0";
		bundleName: "m_hat_dedenneitems_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_dedenneitems_0";
		iconName: "m_hat_dedenneitems_00_bundle_icon";
		setNames: ["dedenneitems"];
		slot: ["HAT"];
		sortOrder: 101051;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatDefault0 = AvatarCustomization<
	"AVATAR_m_hat_default_0",
	{
		assetName: "m_hat_default_0";
		bundleName: "m_hat_default_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "m_hat_default_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100218;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHatDefault1 = AvatarCustomization<
	"AVATAR_m_hat_default_1",
	{
		assetName: "m_hat_default_1";
		bundleName: "m_hat_default_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "m_hat_default_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100217;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHatDefault2 = AvatarCustomization<
	"AVATAR_m_hat_default_2",
	{
		assetName: "m_hat_default_2";
		bundleName: "m_hat_default_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "m_hat_default_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100216;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHatDefault3 = AvatarCustomization<
	"AVATAR_m_hat_default_3",
	{
		assetName: "m_hat_default_3";
		bundleName: "m_hat_default_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "m_hat_default_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100215;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHatDefault4 = AvatarCustomization<
	"AVATAR_m_hat_default_4",
	{
		assetName: "m_hat_default_4";
		bundleName: "m_hat_default_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "m_hat_default_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100214;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHatDefault5 = AvatarCustomization<
	"AVATAR_m_hat_default_5",
	{
		assetName: "m_hat_default_5";
		bundleName: "m_hat_default_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "m_hat_default_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100213;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHatDeino = AvatarCustomization<
	"AVATAR_m_hat_deino",
	{
		assetName: "m_hat_deino_0";
		bundleName: "m_hat_deino_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_deino_0";
		iconName: "m_hat_deino_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101089;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatDelibird = AvatarCustomization<
	"AVATAR_m_hat_delibird",
	{
		assetName: "m_hat_delibird_0";
		bundleName: "m_hat_delibird_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_delibird_0";
		iconName: "m_hat_delibird_0_bundle_icon";
		setNames: ["delibird"];
		slot: ["HAT"];
		sortOrder: 100235;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatDetectivepikachu = AvatarCustomization<
	"AVATAR_m_hat_detectivepikachu",
	{
		assetName: "m_hat_detectivepikachu_0";
		bundleName: "m_hat_detectivepikachu_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "m_hat_detectivepikachu_0_bundle_icon";
		setNames: ["detectivepikachu"];
		slot: ["HAT"];
		sortOrder: 100249;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHatDiancie = AvatarCustomization<
	"AVATAR_m_hat_diancie",
	{
		assetName: "m_hat_diancie_0";
		bundleName: "m_hat_diancie_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_diancie_0";
		iconName: "m_hat_diancie_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101426;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatDp = AvatarCustomization<
	"AVATAR_m_hat_dp",
	{
		assetName: "m_hat_dp_0";
		bundleName: "m_hat_dp_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "m_hat_dp_00_bundle_icon";
		setNames: ["dp"];
		slot: ["HAT"];
		sortOrder: 101067;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHatDrifloon0 = AvatarCustomization<
	"AVATAR_m_hat_drifloon_0",
	{
		assetName: "m_hat_drifloon_0";
		bundleName: "m_hat_drifloon_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_drifloon_0";
		iconName: "m_hat_drifloon_0_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100234;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatDrpikachu = AvatarCustomization<
	"AVATAR_m_hat_drpikachu",
	{
		assetName: "m_hat_drpikachu_0";
		bundleName: "m_hat_drpikachu_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_drpikachu_0";
		iconName: "m_hat_drpikachu_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101486;
		unlockBadgeLevel: 10;
		unlockBadgeType: "BADGE_MAX_SIZE_FIRST_PLACE_WIN";
		unlockType: "MEDAL_REWARD";
	}
>;
export type AvatarCustomizationMHatDusclopsmummy = AvatarCustomization<
	"AVATAR_m_hat_dusclopsmummy",
	{
		assetName: "m_hat_dusclopsmummy_0";
		bundleName: "m_hat_dusclopsmummy_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_dusclopsmummy_0";
		iconName: "m_hat_dusclopsmummy_00_bundle_icon";
		setNames: ["dusclopsmummy"];
		slot: ["HAT"];
		sortOrder: 101279;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatEeveecap = AvatarCustomization<
	"AVATAR_m_hat_eeveecap",
	{
		assetName: "m_hat_eeveecap_0";
		bundleName: "m_hat_eeveecap_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "m_hat_eeveecap_0_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100224;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHatElesa = AvatarCustomization<
	"AVATAR_m_hat_elesa",
	{
		assetName: "m_hat_elesa_0";
		bundleName: "m_hat_elesa_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_elesa_0";
		iconName: "m_hat_elesa_00_bundle_icon";
		setNames: ["elesa"];
		slot: ["HAT"];
		sortOrder: 100871;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatEmpty = AvatarCustomization<
	"AVATAR_m_hat_empty",
	{
		assetName: "m_hat_empty";
		bundleName: "m_hat_empty_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "m_hat_empty_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100212;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHatFedora0 = AvatarCustomization<
	"AVATAR_m_hat_fedora_0",
	{
		assetName: "m_hat_fedora_0";
		bundleName: "m_hat_fedora_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_fedora_0";
		iconName: "m_hat_fedora_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100233;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatFedora1 = AvatarCustomization<
	"AVATAR_m_hat_fedora_1",
	{
		assetName: "m_hat_fedora_1";
		bundleName: "m_hat_fedora_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_fedora_1";
		iconName: "m_hat_fedora_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100232;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatFisher0 = AvatarCustomization<
	"AVATAR_m_hat_fisher_0",
	{
		assetName: "m_hat_fisher_0";
		bundleName: "m_hat_fisher_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_fisher_0";
		iconName: "m_hat_fisher_bundle_icon";
		setNames: ["fisher_0"];
		slot: ["HAT"];
		sortOrder: 100231;
		unlockBadgeLevel: 3;
		unlockBadgeType: "BADGE_BIG_MAGIKARP";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatFlabebepack = AvatarCustomization<
	"AVATAR_m_hat_flabebepack",
	{
		assetName: "m_hat_flabebepack_0";
		bundleName: "m_hat_flabebepack_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_flabebepack_0";
		iconName: "m_hat_flabebepack_00_bundle_icon";
		setNames: ["flabebepack"];
		slot: ["HAT"];
		sortOrder: 101118;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatFragment0 = AvatarCustomization<
	"AVATAR_m_hat_fragment_0",
	{
		assetName: "m_hat_fragment_0";
		bundleName: "m_hat_fragment_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "m_hat_fragment_bundle_icon";
		setNames: ["fragment_0"];
		slot: ["HAT"];
		sortOrder: 100219;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHatFrlg0 = AvatarCustomization<
	"AVATAR_m_hat_frlg_0",
	{
		assetName: "m_hat_frlg_0";
		bundleName: "m_hat_frlg_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_frlg_0";
		iconName: "m_hat_frlg_bundle_icon";
		setNames: ["frlg_0"];
		slot: ["HAT"];
		sortOrder: 100230;
		unlockBadgeLevel: 5;
		unlockBadgeType: "BADGE_POKEDEX_ENTRIES";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatFurfrouwig = AvatarCustomization<
	"AVATAR_m_hat_furfrouwig",
	{
		assetName: "m_hat_furfrouwig_0";
		bundleName: "m_hat_furfrouwig_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_furfrouwig_0";
		iconName: "m_hat_furfrouwig_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101017;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatFw2022 = AvatarCustomization<
	"AVATAR_m_hat_fw2022",
	{
		assetName: "m_hat_fw2022_0";
		bundleName: "m_hat_fw2022_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_fw2022_0";
		iconName: "m_hat_fw2022_00_bundle_icon";
		setNames: ["fw2022"];
		slot: ["HAT"];
		sortOrder: 101254;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatGalarfarfetchditems = AvatarCustomization<
	"AVATAR_m_hat_galarfarfetchditems",
	{
		assetName: "m_hat_galarfarfetchditems_0";
		bundleName: "m_hat_galarfarfetchditems_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_galarfarfetchditems_0";
		iconName: "m_hat_galarfarfetchditems_00_bundle_icon";
		setNames: ["galarfarfetchditems"];
		slot: ["HAT"];
		sortOrder: 100263;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatGenesecteventitem = AvatarCustomization<
	"AVATAR_m_hat_genesecteventitem",
	{
		assetName: "m_hat_genesecteventitem_0";
		bundleName: "m_hat_genesecteventitem_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_genesecteventitem_0";
		iconName: "m_hat_genesecteventitem_0_bundle_icon";
		setNames: ["genesecteventitem"];
		slot: ["HAT"];
		sortOrder: 100261;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatGengar0 = AvatarCustomization<
	"AVATAR_m_hat_gengar_0",
	{
		assetName: "m_hat_gengar_0";
		bundleName: "m_hat_gengar_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_gengar_0";
		iconName: "m_hat_gengar_0_bundle_icon";
		setNames: ["gengar_0"];
		slot: ["HAT"];
		sortOrder: 100229;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatGimmighoulitems = AvatarCustomization<
	"AVATAR_m_hat_gimmighoulitems",
	{
		assetName: "m_hat_gimmighoulitems_0";
		bundleName: "m_hat_gimmighoulitems_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_gimmighoulitems_0";
		iconName: "m_hat_gimmighoulitems_00_bundle_icon";
		setNames: ["gimmighoulitems"];
		slot: ["HAT"];
		sortOrder: 101364;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatGiratinaitems = AvatarCustomization<
	"AVATAR_m_hat_giratinaitems",
	{
		assetName: "m_hat_giratinaitems_0";
		bundleName: "m_hat_giratinaitems_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_giratinaitems_0";
		iconName: "m_hat_giratinaitems_00_bundle_icon";
		setNames: ["giratinaitems"];
		slot: ["HAT"];
		sortOrder: 101568;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatGladion = AvatarCustomization<
	"AVATAR_m_hat_gladion",
	{
		assetName: "m_hat_gladion_0";
		bundleName: "m_hat_gladion_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_gladion_0";
		iconName: "m_hat_gladion_00_bundle_icon";
		setNames: ["gladion"];
		slot: ["HAT"];
		sortOrder: 101132;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatGoomy = AvatarCustomization<
	"AVATAR_m_hat_goomy",
	{
		assetName: "m_hat_goomy_0";
		bundleName: "m_hat_goomy_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_goomy_0";
		iconName: "m_hat_goomy_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101107;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatGreavardwig = AvatarCustomization<
	"AVATAR_m_hat_greavardwig",
	{
		assetName: "m_hat_greavardwig_0";
		bundleName: "m_hat_greavardwig_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_greavardwig_0";
		iconName: "m_hat_greavardwig_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101470;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatGreencoat = AvatarCustomization<
	"AVATAR_m_hat_greencoat",
	{
		assetName: "m_hat_greencoat_0";
		bundleName: "m_hat_greencoat_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_greencoat_0";
		iconName: "m_hat_greencoat_00_bundle_icon";
		setNames: ["greencoat"];
		slot: ["HAT"];
		sortOrder: 101090;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatGrowlithehelmet = AvatarCustomization<
	"AVATAR_m_hat_growlithehelmet",
	{
		assetName: "m_hat_growlithehelmet_0";
		bundleName: "m_hat_growlithehelmet_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_growlithehelmet_0";
		iconName: "m_hat_growlithehelmet_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101455;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatGtr2024eeveefanmask = AvatarCustomization<
	"AVATAR_m_hat_gtr2024eeveefanmask",
	{
		assetName: "m_hat_gtr2024eeveefanmask_0";
		bundleName: "m_hat_gtr2024eeveefanmask_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_gtr2024eeveefanmask_0";
		iconName: "m_hat_gtr2024eeveefanmask_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101546;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatGtr2024pikachufanmask = AvatarCustomization<
	"AVATAR_m_hat_gtr2024pikachufanmask",
	{
		assetName: "m_hat_gtr2024pikachufanmask_0";
		bundleName: "m_hat_gtr2024pikachufanmask_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_gtr2024pikachufanmask_0";
		iconName: "m_hat_gtr2024pikachufanmask_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101548;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatGuccihat = AvatarCustomization<
	"AVATAR_m_hat_guccihat",
	{
		assetName: "m_hat_guccihat_0";
		bundleName: "m_hat_guccihat_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iconName: "m_hat_guccihat_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100855;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHatGuzma = AvatarCustomization<
	"AVATAR_m_hat_guzma",
	{
		assetName: "m_hat_guzma_0";
		bundleName: "m_hat_guzma_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_guzma_0";
		iconName: "m_hat_guzma_00_bundle_icon";
		setNames: ["guzma"];
		slot: ["HAT"];
		sortOrder: 101234;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatGyaradoscap = AvatarCustomization<
	"AVATAR_m_hat_gyaradoscap",
	{
		assetName: "m_hat_gyaradoscap_0";
		bundleName: "m_hat_gyaradoscap_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_gyaradoscap_0";
		iconName: "m_hat_gyaradoscap_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100785;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatHgss0 = AvatarCustomization<
	"AVATAR_m_hat_hgss_0",
	{
		assetName: "m_hat_hgss_0";
		bundleName: "m_hat_hgss_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_hgss_0";
		iconName: "m_hat_hgss_bundle_icon";
		setNames: ["hgss_0"];
		slot: ["HAT"];
		sortOrder: 100228;
		unlockBadgeLevel: 5;
		unlockBadgeType: "BADGE_POKEDEX_ENTRIES_GEN2";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatHoliday2022santacostumes = AvatarCustomization<
	"AVATAR_m_hat_holiday2022santacostumes",
	{
		assetName: "m_hat_holiday2022santacostumes_0";
		bundleName: "m_hat_holiday2022santacostumes_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_holiday2022santacostumes_0";
		iconName: "m_hat_holiday2022santacostumes_00_bundle_icon";
		setNames: ["holiday2022santacostumes"];
		slot: ["HAT"];
		sortOrder: 101334;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatHolidaybeanie = AvatarCustomization<
	"AVATAR_m_hat_holidaybeanie",
	{
		assetName: "m_hat_holidaybeanie_0";
		bundleName: "m_hat_holidaybeanie_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "m_hat_holidaybeanie_0_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100257;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHatHoopaearmuffs = AvatarCustomization<
	"AVATAR_m_hat_hoopaearmuffs",
	{
		assetName: "m_hat_hoopaearmuffs_0";
		bundleName: "m_hat_hoopaearmuffs_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_hoopaearmuffs_0";
		iconName: "m_hat_hoopaearmuffs_00_bundle_icon";
		setNames: ["hoopa"];
		slot: ["HAT"];
		sortOrder: 101037;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatIngo = AvatarCustomization<
	"AVATAR_m_hat_ingo",
	{
		assetName: "m_hat_ingo_0";
		bundleName: "m_hat_ingo_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_ingo_0";
		iconName: "m_hat_ingo_00_bundle_icon";
		setNames: ["ingo"];
		slot: ["HAT"];
		sortOrder: 101507;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatJogger0 = AvatarCustomization<
	"AVATAR_m_hat_jogger_0",
	{
		assetName: "m_hat_jogger_0";
		bundleName: "m_hat_jogger_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_jogger_0";
		iconName: "m_hat_jogger_bundle_icon";
		setNames: ["jogger_0"];
		slot: ["HAT"];
		sortOrder: 100227;
		unlockBadgeLevel: 10;
		unlockBadgeType: "BADGE_TRAVEL_KM";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatKantotourcapgreen = AvatarCustomization<
	"AVATAR_m_hat_kantotourcapgreen",
	{
		assetName: "m_hat_kantotourcapgreen_0";
		bundleName: "m_hat_kantotourcapgreen_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_kantotourcapgreen_0";
		iconName: "m_hat_kantotourcapgreen_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100892;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatKantotourcapred = AvatarCustomization<
	"AVATAR_m_hat_kantotourcapred",
	{
		assetName: "m_hat_kantotourcapred_0";
		bundleName: "m_hat_kantotourcapred_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_kantotourcapred_0";
		iconName: "m_hat_kantotourcapred_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100893;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatKorrina = AvatarCustomization<
	"AVATAR_m_hat_korrina",
	{
		assetName: "m_hat_korrina_0";
		bundleName: "m_hat_korrina_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_korrina_0";
		iconName: "m_hat_korrina_00_bundle_icon";
		setNames: ["korrina"];
		slot: ["HAT"];
		sortOrder: 100952;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatLana = AvatarCustomization<
	"AVATAR_m_hat_lana",
	{
		assetName: "m_hat_lana_0";
		bundleName: "m_hat_lana_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_lana_0";
		iconName: "m_hat_lana_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101617;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatLaprasbandana = AvatarCustomization<
	"AVATAR_m_hat_laprasbandana",
	{
		assetName: "m_hat_laprasbandana_0";
		bundleName: "m_hat_laprasbandana_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_laprasbandana_0";
		iconName: "m_hat_laprasbandana_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101169;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatLasecuritycorps = AvatarCustomization<
	"AVATAR_m_hat_lasecuritycorps",
	{
		assetName: "m_hat_lasecuritycorps_0";
		bundleName: "m_hat_lasecuritycorps_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_lasecuritycorps_0";
		iconName: "m_hat_lasecuritycorps_00_bundle_icon";
		setNames: ["lasecuritycorps"];
		slot: ["HAT"];
		sortOrder: 101551;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatLegendofarceus = AvatarCustomization<
	"AVATAR_m_hat_legendofarceus",
	{
		assetName: "m_hat_legendofarceus_0";
		bundleName: "m_hat_legendofarceus_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "m_hat_legendofarceus_00_bundle_icon";
		setNames: ["legendofarceus"];
		slot: ["HAT"];
		sortOrder: 101108;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHatLitwickhat = AvatarCustomization<
	"AVATAR_m_hat_litwickhat",
	{
		assetName: "m_hat_litwickhat_0";
		bundleName: "m_hat_litwickhat_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_litwickhat_0";
		iconName: "m_hat_litwickhat_0_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100254;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatLoneearrings = AvatarCustomization<
	"AVATAR_m_hat_loneearrings",
	{
		assetName: "m_hat_loneearrings_0";
		bundleName: "m_hat_loneearrings_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "m_hat_loneearrings_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100256;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHatLvl50cap = AvatarCustomization<
	"AVATAR_m_hat_lvl50cap",
	{
		assetName: "m_hat_lvl50cap_0";
		bundleName: "m_hat_lvl50cap_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "m_hat_lvl50cap_00_bundle_icon";
		setNames: ["lvl50_0", "lvl50_1"];
		slot: ["HAT"];
		sortOrder: 100821;
		unlockPlayerLevel: 45;
		unlockType: "LEVEL_REWARD";
	}
>;
export type AvatarCustomizationMHatMagikarp = AvatarCustomization<
	"AVATAR_m_hat_magikarp",
	{
		assetName: "m_hat_magikarp";
		bundleName: "m_hat_magikarp_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "m_hat_magikarp_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100222;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHatMareaniehat = AvatarCustomization<
	"AVATAR_m_hat_mareaniehat",
	{
		assetName: "m_hat_mareaniehat_0";
		bundleName: "m_hat_mareaniehat_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_mareaniehat_0";
		iconName: "m_hat_mareaniehat_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101267;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatMegalopunnyitems = AvatarCustomization<
	"AVATAR_m_hat_megalopunnyitems",
	{
		assetName: "m_hat_megalopunnyitems_0";
		bundleName: "m_hat_megalopunnyitems_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_megalopunnyitems_0";
		iconName: "m_hat_megalopunnyitems_00_bundle_icon";
		setNames: ["megalopunnyitems"];
		slot: ["HAT"];
		sortOrder: 100900;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatMegarayquaza = AvatarCustomization<
	"AVATAR_m_hat_megarayquaza",
	{
		assetName: "m_hat_megarayquaza_0";
		bundleName: "m_hat_megarayquaza_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_megarayquaza_0";
		iconName: "m_hat_megarayquaza_00_bundle_icon";
		setNames: ["megarayquaza"];
		slot: ["HAT"];
		sortOrder: 101428;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatMeltan = AvatarCustomization<
	"AVATAR_m_hat_meltan",
	{
		assetName: "m_hat_meltan_0";
		bundleName: "m_hat_meltan_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_meltan_0";
		iconName: "m_hat_meltan_0_bundle_icon";
		setNames: ["meltan"];
		slot: ["HAT"];
		sortOrder: 100248;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatMewtwo = AvatarCustomization<
	"AVATAR_m_hat_mewtwo",
	{
		assetName: "m_hat_mewtwo_0";
		bundleName: "m_hat_mewtwo_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_mewtwo_0";
		iconName: "m_hat_mewtwo_0_bundle_icon";
		setNames: ["mewtwo"];
		slot: ["HAT"];
		sortOrder: 100251;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatMimikyu0 = AvatarCustomization<
	"AVATAR_m_hat_mimikyu_0",
	{
		assetName: "m_hat_mimikyu_0";
		bundleName: "m_hat_mimikyu_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "m_hat_mimikyu_bundle_icon";
		setNames: ["mimikyu"];
		slot: ["HAT"];
		sortOrder: 100221;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHatMismagius0 = AvatarCustomization<
	"AVATAR_m_hat_mismagius_0",
	{
		assetName: "m_hat_mismagius_0";
		bundleName: "m_hat_mismagius_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_mismagius_0";
		iconName: "m_hat_mismagius_0_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100226;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatMovie2020 = AvatarCustomization<
	"AVATAR_m_hat_movie2020",
	{
		assetName: "m_hat_movie2020_0";
		bundleName: "m_hat_movie2020_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "m_hat_movie2020_00_bundle_icon";
		setNames: ["movie2020"];
		slot: ["HAT"];
		sortOrder: 101027;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHatMunnapack0 = AvatarCustomization<
	"AVATAR_m_hat_munnapack_0",
	{
		assetName: "m_hat_munnapack_0";
		bundleName: "m_hat_munnapack_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_munnapack_0";
		iconName: "m_hat_munnapack_00_bundle_icon";
		setNames: ["munnapack_0"];
		slot: ["HAT"];
		sortOrder: 100868;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatMunnapack1 = AvatarCustomization<
	"AVATAR_m_hat_munnapack_1",
	{
		assetName: "m_hat_munnapack_1";
		bundleName: "m_hat_munnapack_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_munnapack_1";
		iconName: "m_hat_munnapack_01_bundle_icon";
		setNames: ["munnapack_1"];
		slot: ["HAT"];
		sortOrder: 100869;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatNewyear2022 = AvatarCustomization<
	"AVATAR_m_hat_newyear2022",
	{
		assetName: "m_hat_newyear2022_0";
		bundleName: "m_hat_newyear2022_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_newyear2022_0";
		iconName: "m_hat_newyear2022_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101099;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatNewyearhat2021 = AvatarCustomization<
	"AVATAR_m_hat_newyearhat2021",
	{
		assetName: "m_hat_newyearhat2021_0";
		bundleName: "m_hat_newyearhat2021_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_newyearhat2021_0";
		iconName: "m_hat_newyearhat2021_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100861;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatNewyearhat2023 = AvatarCustomization<
	"AVATAR_m_hat_newyearhat2023",
	{
		assetName: "m_hat_newyearhat2023_0";
		bundleName: "m_hat_newyearhat2023_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_newyearhat2023_0";
		iconName: "m_hat_newyearhat2023_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101320;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatNihilegoitems = AvatarCustomization<
	"AVATAR_m_hat_nihilegoitems",
	{
		assetName: "m_hat_nihilegoitems_0";
		bundleName: "m_hat_nihilegoitems_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_nihilegoitems_0";
		iconName: "m_hat_nihilegoitems_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101227;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatNoibat = AvatarCustomization<
	"AVATAR_m_hat_noibat",
	{
		assetName: "m_hat_noibat_0";
		bundleName: "m_hat_noibat_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_noibat_0";
		iconName: "m_hat_noibat_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101114;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatObstagoonitems = AvatarCustomization<
	"AVATAR_m_hat_obstagoonitems",
	{
		assetName: "m_hat_obstagoonitems_0";
		bundleName: "m_hat_obstagoonitems_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_obstagoonitems_0";
		iconName: "m_hat_obstagoonitems_00_bundle_icon";
		setNames: ["obstagoonitems"];
		slot: ["HAT"];
		sortOrder: 101228;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatOras = AvatarCustomization<
	"AVATAR_m_hat_oras",
	{
		assetName: "m_hat_oras_0";
		bundleName: "m_hat_oras_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "m_hat_oras_00_bundle_icon";
		setNames: ["oras"];
		slot: ["HAT"];
		sortOrder: 101358;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHatOricoriopink = AvatarCustomization<
	"AVATAR_m_hat_oricorioPink",
	{
		assetName: "m_hat_oricorioPink_0";
		bundleName: "m_hat_oricoriopink_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_oricorioPink_0";
		iconName: "m_hat_oricoriopink_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101192;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatOricoriopurple = AvatarCustomization<
	"AVATAR_m_hat_oricorioPurple",
	{
		assetName: "m_hat_oricorioPurple_0";
		bundleName: "m_hat_oricoriopurple_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_oricorioPurple_0";
		iconName: "m_hat_oricoriopurple_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101193;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatOricoriored = AvatarCustomization<
	"AVATAR_m_hat_oricorioRed",
	{
		assetName: "m_hat_oricorioRed_0";
		bundleName: "m_hat_oricoriored_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_oricorioRed_0";
		iconName: "m_hat_oricoriored_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101191;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatOricorioyellow = AvatarCustomization<
	"AVATAR_m_hat_oricorioYellow",
	{
		assetName: "m_hat_oricorioYellow_0";
		bundleName: "m_hat_oricorioyellow_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_oricorioYellow_0";
		iconName: "m_hat_oricorioyellow_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101190;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatPartneritemsjan2024hat = AvatarCustomization<
	"AVATAR_m_hat_partneritemsjan2024hat",
	{
		assetName: "m_hat_partneritemsjan2024hat_0";
		bundleName: "m_hat_partneritemsjan2024hat_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iapSku: "pgorelease.avatar.m_hat_partneritemsjan2024hat_0";
		iconName: "m_hat_partneritemsjan2024hat_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101542;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatPhantump = AvatarCustomization<
	"AVATAR_m_hat_phantump",
	{
		assetName: "m_hat_phantump_0";
		bundleName: "m_hat_phantump_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_phantump_0";
		iconName: "m_hat_phantump_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101464;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatPikachucap = AvatarCustomization<
	"AVATAR_m_hat_pikachucap",
	{
		assetName: "m_hat_pikachucap_0";
		bundleName: "m_hat_pikachucap_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "m_hat_pikachucap_0_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100225;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHatPikachufan0 = AvatarCustomization<
	"AVATAR_m_hat_pikachufan_0",
	{
		assetName: "m_hat_pikachufan_0";
		bundleName: "m_hat_pikachufan_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_pikachufan_0";
		iconName: "m_hat_pikachufan_bundle_icon";
		setNames: ["pikachufan_0"];
		slot: ["HAT"];
		sortOrder: 100238;
		unlockBadgeLevel: 3;
		unlockBadgeType: "BADGE_PIKACHU";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatPikachulibre = AvatarCustomization<
	"AVATAR_m_hat_pikachulibre",
	{
		assetName: "m_hat_pikachulibre_0";
		bundleName: "m_hat_pikachulibre_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_pikachulibre_0";
		iconName: "m_hat_pikachulibre_0_bundle_icon";
		setNames: ["pikachulibre"];
		slot: ["HAT"];
		sortOrder: 100259;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatPikachupumpkinhead = AvatarCustomization<
	"AVATAR_m_hat_pikachupumpkinhead",
	{
		assetName: "m_hat_pikachupumpkinhead_0";
		bundleName: "m_hat_pikachupumpkinhead_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_pikachupumpkinhead_0";
		iconName: "m_hat_pikachupumpkinhead_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101043;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatPkmncap0 = AvatarCustomization<
	"AVATAR_m_hat_pkmncap_0",
	{
		assetName: "m_hat_pkmncap_0";
		bundleName: "m_hat_pkmncap_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_pkmncap_0";
		iconName: "m_hat_pkmncap_0_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100245;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatPkmncap1 = AvatarCustomization<
	"AVATAR_m_hat_pkmncap_1",
	{
		assetName: "m_hat_pkmncap_1";
		bundleName: "m_hat_pkmncap_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_pkmncap_1";
		iconName: "m_hat_pkmncap_1_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100244;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatPkmncap2 = AvatarCustomization<
	"AVATAR_m_hat_pkmncap_2",
	{
		assetName: "m_hat_pkmncap_2";
		bundleName: "m_hat_pkmncap_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_pkmncap_2";
		iconName: "m_hat_pkmncap_2_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100243;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatPoipole = AvatarCustomization<
	"AVATAR_m_hat_poipole",
	{
		assetName: "m_hat_poipole_0";
		bundleName: "m_hat_poipole_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_poipole_0";
		iconName: "m_hat_poipole_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101585;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatProfwillowoutfit = AvatarCustomization<
	"AVATAR_m_hat_profwillowoutfit",
	{
		assetName: "m_hat_profwillowoutfit_0";
		bundleName: "m_hat_profwillowoutfit_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_profwillowoutfit_0";
		iconName: "m_hat_profwillowoutfit_00_bundle_icon";
		setNames: ["profwillowoutfit"];
		slot: ["HAT"];
		sortOrder: 101383;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatRegiicejersies = AvatarCustomization<
	"AVATAR_m_hat_regiicejersies",
	{
		assetName: "m_hat_regiicejersies_0";
		bundleName: "m_hat_regiicejersies_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_regiicejersies_0";
		iconName: "m_hat_regiicejersies_00_bundle_icon";
		setNames: ["regiicejersies"];
		slot: ["HAT"];
		sortOrder: 100936;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatRegirockjersies = AvatarCustomization<
	"AVATAR_m_hat_regirockjersies",
	{
		assetName: "m_hat_regirockjersies_0";
		bundleName: "m_hat_regirockjersies_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_regirockjersies_0";
		iconName: "m_hat_regirockjersies_00_bundle_icon";
		setNames: ["regirockjersies"];
		slot: ["HAT"];
		sortOrder: 100928;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatRegisteeljersies = AvatarCustomization<
	"AVATAR_m_hat_registeeljersies",
	{
		assetName: "m_hat_registeeljersies_0";
		bundleName: "m_hat_registeeljersies_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_registeeljersies_0";
		iconName: "m_hat_registeeljersies_00_bundle_icon";
		setNames: ["registeeljersies"];
		slot: ["HAT"];
		sortOrder: 100944;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatRuinmaniac = AvatarCustomization<
	"AVATAR_m_hat_ruinmaniac",
	{
		assetName: "m_hat_ruinmaniac_0";
		bundleName: "m_hat_ruinmaniac_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_ruinmaniac_0";
		iconName: "m_hat_ruinmaniac_0_bundle_icon";
		setNames: ["ruinmaniac"];
		slot: ["HAT"];
		sortOrder: 100250;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatSableyegoggles = AvatarCustomization<
	"AVATAR_m_hat_sableyegoggles",
	{
		assetName: "m_hat_sableyegoggles_0";
		bundleName: "m_hat_sableyegoggles_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_sableyegoggles_0";
		iconName: "m_hat_sableyegoggles_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100783;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatSamsungsummer2020 = AvatarCustomization<
	"AVATAR_m_hat_samsungsummer2020",
	{
		assetName: "m_hat_samsungsummer2020_0";
		bundleName: "m_hat_samsungsummer2020_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iapSku: "pgorelease.avatar.m_hat_samsungsummer2020_0";
		iconName: "m_hat_samsungsummer2020_0_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100742;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatSandygasthat = AvatarCustomization<
	"AVATAR_m_hat_sandygasthat",
	{
		assetName: "m_hat_sandygasthat_0";
		bundleName: "m_hat_sandygasthat_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_sandygasthat_0";
		iconName: "m_hat_sandygasthat_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101411;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatShayminhat = AvatarCustomization<
	"AVATAR_m_hat_shayminhat",
	{
		assetName: "m_hat_shayminhat_0";
		bundleName: "m_hat_shayminhat_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_shayminhat_0";
		iconName: "m_hat_shayminhat_00_bundle_icon";
		setNames: ["shaymin_land", "shaymin_sky"];
		slot: ["HAT"];
		sortOrder: 101188;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatSlowpoketailshirts = AvatarCustomization<
	"AVATAR_m_hat_slowpoketailshirts",
	{
		assetName: "m_hat_slowpoketailshirts_0";
		bundleName: "m_hat_slowpoketailshirts_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_slowpoketailshirts_0";
		iconName: "m_hat_slowpoketailshirts_00_bundle_icon";
		setNames: ["slowpoketailshirts"];
		slot: ["HAT"];
		sortOrder: 100922;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatSnorlaxnightcap = AvatarCustomization<
	"AVATAR_m_hat_snorlaxnightcap",
	{
		assetName: "m_hat_snorlaxnightcap_0";
		bundleName: "m_hat_snorlaxnightcap_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "m_hat_snorlaxnightcap_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101399;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHatSolgaleoitems = AvatarCustomization<
	"AVATAR_m_hat_solgaleoitems",
	{
		assetName: "m_hat_solgaleoitems_0";
		bundleName: "m_hat_solgaleoitems_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_solgaleoitems_0";
		iconName: "m_hat_solgaleoitems_00_bundle_icon";
		setNames: ["solgaleoitems"];
		slot: ["HAT"];
		sortOrder: 101304;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatSs = AvatarCustomization<
	"AVATAR_m_hat_ss",
	{
		assetName: "m_hat_ss_0";
		bundleName: "m_hat_ss_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "m_hat_ss_0_bundle_icon";
		setNames: ["ss"];
		slot: ["HAT"];
		sortOrder: 100255;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHatStantlerheadband = AvatarCustomization<
	"AVATAR_m_hat_stantlerheadband",
	{
		assetName: "m_hat_stantlerheadband_0";
		bundleName: "m_hat_stantlerheadband_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_stantlerheadband_0";
		iconName: "m_hat_stantlerheadband_0_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100258;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatStrawhat = AvatarCustomization<
	"AVATAR_m_hat_strawhat",
	{
		assetName: "m_hat_strawhat_0";
		bundleName: "m_hat_strawhat_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "m_hat_strawhat_0_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100252;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHatSummer2023 = AvatarCustomization<
	"AVATAR_m_hat_summer2023",
	{
		assetName: "m_hat_summer2023_0";
		bundleName: "m_hat_summer2023_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_summer2023_0";
		iconName: "m_hat_summer2023_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101394;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatSvcostumescarletschool = AvatarCustomization<
	"AVATAR_m_hat_svcostumescarletschool",
	{
		assetName: "m_hat_svcostumescarletschool_0";
		bundleName: "m_hat_svcostumescarletschool_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "m_hat_svcostumescarletschool_00_bundle_icon";
		setNames: ["svcostumescarletschool"];
		slot: ["HAT"];
		sortOrder: 101287;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHatSvcostumevioletschool = AvatarCustomization<
	"AVATAR_m_hat_svcostumevioletschool",
	{
		assetName: "m_hat_svcostumevioletschool_0";
		bundleName: "m_hat_svcostumevioletschool_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "m_hat_svcostumevioletschool_00_bundle_icon";
		setNames: ["svcostumevioletschool"];
		slot: ["HAT"];
		sortOrder: 101295;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHatSwshdlc2costume = AvatarCustomization<
	"AVATAR_m_hat_swshdlc2costume",
	{
		assetName: "m_hat_swshdlc2costume_0";
		bundleName: "m_hat_swshdlc2costume_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "m_hat_swshdlc2costume_00_bundle_icon";
		setNames: ["swshdlc2costume"];
		slot: ["HAT"];
		sortOrder: 100791;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHatSwshuniformchampion = AvatarCustomization<
	"AVATAR_m_hat_swshuniformchampion",
	{
		assetName: "m_hat_swshuniformchampion_0";
		bundleName: "m_hat_swshuniformchampion_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_swshuniformchampion_0";
		iconName: "m_hat_swshuniformchampion_00_bundle_icon";
		setNames: ["swshuniformchampion"];
		slot: ["HAT"];
		sortOrder: 101011;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatSylveonitems = AvatarCustomization<
	"AVATAR_m_hat_sylveonitems",
	{
		assetName: "m_hat_sylveonitems_0";
		bundleName: "m_hat_sylveonitems_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_sylveonitems_0";
		iconName: "m_hat_sylveonitems_00_bundle_icon";
		setNames: ["sylveonitems"];
		slot: ["HAT"];
		sortOrder: 100914;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatTcgcollabtshirtandcap = AvatarCustomization<
	"AVATAR_m_hat_tcgcollabtshirtandcap",
	{
		assetName: "m_hat_tcgcollabtshirtandcap_0";
		bundleName: "m_hat_tcgcollabtshirtandcap_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_tcgcollabtshirtandcap_0";
		iconName: "m_hat_tcgcollabtshirtandcap_00_bundle_icon";
		setNames: ["tcgcollabtshirtandcap"];
		slot: ["HAT"];
		sortOrder: 101201;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatTeamaqua = AvatarCustomization<
	"AVATAR_m_hat_teamaqua",
	{
		assetName: "m_hat_teamaqua_0";
		bundleName: "m_hat_teamaqua_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_teamaqua_0";
		iconName: "m_hat_teamaqua_0_bundle_icon";
		setNames: ["teamaqua"];
		slot: ["HAT"];
		sortOrder: 100246;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatTeamleadercap0 = AvatarCustomization<
	"AVATAR_m_hat_teamleadercap_0",
	{
		assetName: "m_hat_teamleadercap_0";
		bundleName: "m_hat_teamleadercap_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_teamleadercap_0";
		iconName: "m_hat_teamleadercap_0_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100242;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatTeamleadercap1 = AvatarCustomization<
	"AVATAR_m_hat_teamleadercap_1",
	{
		assetName: "m_hat_teamleadercap_1";
		bundleName: "m_hat_teamleadercap_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_teamleadercap_1";
		iconName: "m_hat_teamleadercap_1_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100241;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatTeamleadercap2 = AvatarCustomization<
	"AVATAR_m_hat_teamleadercap_2",
	{
		assetName: "m_hat_teamleadercap_2";
		bundleName: "m_hat_teamleadercap_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_teamleadercap_2";
		iconName: "m_hat_teamleadercap_2_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100240;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatTeamrocket0 = AvatarCustomization<
	"AVATAR_m_hat_teamrocket_0",
	{
		assetName: "m_hat_teamrocket_0";
		bundleName: "m_hat_teamrocket_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_teamrocket_0";
		iconName: "m_hat_teamrocket_bundle_icon";
		setNames: ["teamrocket_0", "teamrocket_1"];
		slot: ["HAT"];
		sortOrder: 100239;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatTeamrocketcap = AvatarCustomization<
	"AVATAR_m_hat_teamrocketcap",
	{
		assetName: "m_hat_teamrocketcap_0";
		bundleName: "m_hat_teamrocketcap_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_teamrocketcap_0";
		iconName: "m_hat_teamrocketcap_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100729;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatTeamskull = AvatarCustomization<
	"AVATAR_m_hat_teamskull",
	{
		assetName: "m_hat_teamskull_0";
		bundleName: "m_hat_teamskull_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_teamskull_0";
		iconName: "m_hat_teamskull_00_bundle_icon";
		setNames: ["teamskull"];
		slot: ["HAT"];
		sortOrder: 101165;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatTophat0 = AvatarCustomization<
	"AVATAR_m_hat_tophat_0",
	{
		assetName: "m_hat_tophat_0";
		bundleName: "m_hat_tophat_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_tophat_0";
		iconName: "m_hat_tophat_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100237;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatUltrareconsquad = AvatarCustomization<
	"AVATAR_m_hat_ultraReconSquad",
	{
		assetName: "m_hat_ultraReconSquad_0";
		bundleName: "m_hat_ultrareconsquad_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_ultraReconSquad_0";
		iconName: "m_hat_ultrareconsquad_00_bundle_icon";
		setNames: ["ultraReconSquad"];
		slot: ["HAT"];
		sortOrder: 101243;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatUltrareconsquadb = AvatarCustomization<
	"AVATAR_m_hat_ultraReconSquadB",
	{
		assetName: "m_hat_ultraReconSquadB_0";
		bundleName: "m_hat_ultrareconsquadb_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_ultraReconSquadB_0";
		iconName: "m_hat_ultrareconsquadb_00_bundle_icon";
		setNames: ["ultraReconSquadB"];
		slot: ["HAT"];
		sortOrder: 101246;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatUltra0 = AvatarCustomization<
	"AVATAR_m_hat_ultra_0",
	{
		assetName: "m_hat_ultra_0";
		bundleName: "m_hat_ultra_bundle";
		enabled: true;
		groupName: "group_hat";
		iconName: "m_hat_ultra_bundle_icon";
		setNames: ["ultra_0"];
		slot: ["HAT"];
		sortOrder: 100223;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHatVerizon2021 = AvatarCustomization<
	"AVATAR_m_hat_verizon2021",
	{
		assetName: "m_hat_verizon2021_0";
		bundleName: "m_hat_verizon2021_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iconName: "m_hat_verizon2021_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101085;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMHatWcs2022winnersitems = AvatarCustomization<
	"AVATAR_m_hat_wcs2022winnersitems",
	{
		assetName: "m_hat_wcs2022winnersitems_0";
		bundleName: "m_hat_wcs2022winnersitems_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_wcs2022winnersitems_0";
		iconName: "m_hat_wcs2022winnersitems_00_bundle_icon";
		setNames: ["wcs2022winnersitems"];
		slot: ["HAT"];
		sortOrder: 101217;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatWhimsicottearmuff = AvatarCustomization<
	"AVATAR_m_hat_whimsicottearmuff",
	{
		assetName: "m_hat_whimsicottearmuff_0";
		bundleName: "m_hat_whimsicottearmuff_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_whimsicottearmuff_0";
		iconName: "m_hat_whimsicottearmuff_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100837;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatWillowglasses = AvatarCustomization<
	"AVATAR_m_hat_willowglasses",
	{
		assetName: "m_hat_willowglasses_0";
		bundleName: "m_hat_willowglasses_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_willowglasses_0";
		iconName: "m_hat_willowglasses_0_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100262;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatWoobatearrings = AvatarCustomization<
	"AVATAR_m_hat_woobatearrings",
	{
		assetName: "m_hat_woobatearrings_0";
		bundleName: "m_hat_woobatearrings_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_woobatearrings_0";
		iconName: "m_hat_woobatearrings_0_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100260;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatYamaskhat = AvatarCustomization<
	"AVATAR_m_hat_yamaskhat",
	{
		assetName: "m_hat_yamaskhat_0";
		bundleName: "m_hat_yamaskhat_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_yamaskhat_0";
		iconName: "m_hat_yamaskhat_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 100781;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatYamaskmask = AvatarCustomization<
	"AVATAR_m_hat_yamaskmask",
	{
		assetName: "m_hat_yamaskmask_0";
		bundleName: "m_hat_yamaskmask_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_yamaskmask_0";
		iconName: "m_hat_yamaskmask_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101472;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMHatZubathat = AvatarCustomization<
	"AVATAR_m_hat_zubathat",
	{
		assetName: "m_hat_zubathat_0";
		bundleName: "m_hat_zubathat_bundle";
		enabled: true;
		groupName: "group_hat";
		iapSku: "pgorelease.avatar.m_hat_zubathat_0";
		iconName: "m_hat_zubathat_00_bundle_icon";
		slot: ["HAT"];
		sortOrder: 101277;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMJacketNewyear2022 = AvatarCustomization<
	"AVATAR_m_jacket_newyear2022",
	{
		assetName: "m_shirt_newyear2022_0";
		bundleName: "m_shirt_newyear2022_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_newyear2022_0";
		iconName: "m_shirt_newyear2022_00_bundle_icon";
		setNames: ["newyear"];
		slot: ["SHIRT"];
		sortOrder: 101096;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPants6thanniversary = AvatarCustomization<
	"AVATAR_m_pants_6thanniversary",
	{
		assetName: "m_pants_6thanniversary_0";
		bundleName: "m_pants_6thanniversary_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_6thanniversary_0";
		iconName: "m_pants_6thanniversary_00_bundle_icon";
		setNames: ["6thanniversary"];
		slot: ["PANTS"];
		sortOrder: 101212;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPants7thanniversary = AvatarCustomization<
	"AVATAR_m_pants_7thanniversary",
	{
		assetName: "m_pants_7thanniversary_0";
		bundleName: "m_pants_7thanniversary_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_7thanniversary_0";
		iconName: "m_pants_7thanniversary_00_bundle_icon";
		setNames: ["7thanniversary"];
		slot: ["PANTS"];
		sortOrder: 101422;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsAcetrainerbw = AvatarCustomization<
	"AVATAR_m_pants_acetrainerbw",
	{
		assetName: "m_pants_acetrainerbw_0";
		bundleName: "m_pants_acetrainerbw_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_acetrainerbw_0";
		iconName: "m_pants_acetrainerbw_0_bundle_icon";
		setNames: ["acetrainerbw"];
		slot: ["PANTS"];
		sortOrder: 100197;
		unlockBadgeLevel: 10;
		unlockBadgeType: "BADGE_BATTLE_TRAINING_WON";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsAcetrainersm = AvatarCustomization<
	"AVATAR_m_pants_acetrainersm",
	{
		assetName: "m_pants_acetrainersm_0";
		bundleName: "m_pants_acetrainersm_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_acetrainersm_0";
		iconName: "m_pants_acetrainersm_0_bundle_icon";
		setNames: ["acetrainersm"];
		slot: ["PANTS"];
		sortOrder: 100196;
		unlockBadgeLevel: 50;
		unlockBadgeType: "BADGE_MASTER_LEAGUE";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsAnimegou = AvatarCustomization<
	"AVATAR_m_pants_animegou",
	{
		assetName: "m_pants_animegou_0";
		bundleName: "m_pants_animegou_bundle";
		enabled: true;
		groupName: "group_pants";
		iconName: "m_pants_animegou_00_bundle_icon";
		setNames: ["animegou"];
		slot: ["PANTS"];
		sortOrder: 100812;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMPantsBackpacker = AvatarCustomization<
	"AVATAR_m_pants_backpacker",
	{
		assetName: "m_pants_backpacker_0";
		bundleName: "m_pants_backpacker_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_backpacker_0";
		iconName: "m_pants_backpacker_0_bundle_icon";
		setNames: ["backpacker"];
		slot: ["PANTS"];
		sortOrder: 100202;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsBounsweetitems = AvatarCustomization<
	"AVATAR_m_pants_bounsweetitems",
	{
		assetName: "m_pants_bounsweetitems_0";
		bundleName: "m_pants_bounsweetitems_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_bounsweetitems_0";
		iconName: "m_pants_bounsweetitems_00_bundle_icon";
		setNames: ["bounsweetitems"];
		slot: ["PANTS"];
		sortOrder: 101392;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsBrock = AvatarCustomization<
	"AVATAR_m_pants_brock",
	{
		assetName: "m_pants_brock_0";
		bundleName: "m_pants_brock_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_brock_0";
		iconName: "m_pants_brock_0_bundle_icon";
		setNames: ["brock"];
		slot: ["PANTS"];
		sortOrder: 100194;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsBwn = AvatarCustomization<
	"AVATAR_m_pants_bwn",
	{
		assetName: "m_pants_bwn_0";
		bundleName: "m_pants_bwn_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_bwn_0";
		iconName: "m_pants_bwn_00_bundle_icon";
		setNames: ["bwn"];
		slot: ["PANTS"];
		sortOrder: 100828;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsCasual0 = AvatarCustomization<
	"AVATAR_m_pants_casual_0",
	{
		assetName: "m_pants_casual_0";
		bundleName: "m_pants_casual_0_bundle";
		enabled: true;
		groupName: "group_pants";
		iconName: "m_pants_casual_0_bundle_icon";
		setNames: ["casual_0"];
		slot: ["PANTS"];
		sortOrder: 100201;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMPantsCasual1 = AvatarCustomization<
	"AVATAR_m_pants_casual_1",
	{
		assetName: "m_pants_casual_1";
		bundleName: "m_pants_casual_1_bundle";
		enabled: true;
		groupName: "group_pants";
		iconName: "m_pants_casual_1_bundle_icon";
		setNames: ["casual_1"];
		slot: ["PANTS"];
		sortOrder: 100200;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMPantsClay = AvatarCustomization<
	"AVATAR_m_pants_clay",
	{
		assetName: "m_pants_clay_0";
		bundleName: "m_pants_clay_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_clay_0";
		iconName: "m_pants_clay_00_bundle_icon";
		setNames: ["clay"];
		slot: ["PANTS"];
		sortOrder: 101406;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsDefault0 = AvatarCustomization<
	"AVATAR_m_pants_default_0",
	{
		assetName: "m_pants_default_0";
		bundleName: "m_pants_default_bundle";
		enabled: true;
		groupName: "group_pants";
		iconName: "m_pants_default_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100176;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMPantsDenimfashionweek2023 = AvatarCustomization<
	"AVATAR_m_pants_denimfashionweek2023",
	{
		assetName: "m_pants_denimfashionweek2023_0";
		bundleName: "m_pants_denimfashionweek2023_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_denimfashionweek2023_0";
		iconName: "m_pants_denimfashionweek2023_00_bundle_icon";
		setNames: ["fashionweek2023"];
		slot: ["PANTS"];
		sortOrder: 101492;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsDp = AvatarCustomization<
	"AVATAR_m_pants_dp",
	{
		assetName: "m_pants_dp_0";
		bundleName: "m_pants_dp_bundle";
		enabled: true;
		groupName: "group_pants";
		iconName: "m_pants_dp_00_bundle_icon";
		setNames: ["dp"];
		slot: ["PANTS"];
		sortOrder: 101065;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMPantsElesa = AvatarCustomization<
	"AVATAR_m_pants_elesa",
	{
		assetName: "m_pants_elesa_0";
		bundleName: "m_pants_elesa_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_elesa_0";
		iconName: "m_pants_elesa_00_bundle_icon";
		setNames: ["elesa"];
		slot: ["PANTS"];
		sortOrder: 100873;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsFashionweek2022 = AvatarCustomization<
	"AVATAR_m_pants_fashionWeek2022",
	{
		assetName: "m_pants_fashionWeek2022_0";
		bundleName: "m_pants_fashionweek2022_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_fashionWeek2022_0";
		iconName: "m_pants_fashionweek2022_00_bundle_icon";
		setNames: ["fashionWeek2022"];
		slot: ["PANTS"];
		sortOrder: 101272;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsFisher0 = AvatarCustomization<
	"AVATAR_m_pants_fisher_0",
	{
		assetName: "m_pants_fisher_0";
		bundleName: "m_pants_fisher_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_fisher_0";
		iconName: "m_pants_fisher_bundle_icon";
		setNames: ["fisher_0"];
		slot: ["PANTS"];
		sortOrder: 100193;
		unlockBadgeLevel: 50;
		unlockBadgeType: "BADGE_BIG_MAGIKARP";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsFlabebepack = AvatarCustomization<
	"AVATAR_m_pants_flabebepack",
	{
		assetName: "m_pants_flabebepack_0";
		bundleName: "m_pants_flabebepack_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_flabebepack_0";
		iconName: "m_pants_flabebepack_00_bundle_icon";
		setNames: ["flabebepack"];
		slot: ["PANTS"];
		sortOrder: 101117;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsFrlg0 = AvatarCustomization<
	"AVATAR_m_pants_frlg_0",
	{
		assetName: "m_pants_frlg_0";
		bundleName: "m_pants_frlg_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_frlg_0";
		iconName: "m_pants_frlg_bundle_icon";
		setNames: ["frlg_0"];
		slot: ["PANTS"];
		sortOrder: 100192;
		unlockBadgeLevel: 5;
		unlockBadgeType: "BADGE_POKEDEX_ENTRIES";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsFw2022 = AvatarCustomization<
	"AVATAR_m_pants_fw2022",
	{
		assetName: "m_pants_fw2022_0";
		bundleName: "m_pants_fw2022_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_fw2022_0";
		iconName: "m_pants_fw2022_00_bundle_icon";
		setNames: ["fw2022"];
		slot: ["PANTS"];
		sortOrder: 101258;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsGeeta = AvatarCustomization<
	"AVATAR_m_pants_geeta",
	{
		assetName: "m_pants_geeta_0";
		bundleName: "m_pants_geeta_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_geeta_0";
		iconName: "m_pants_geeta_00_bundle_icon";
		setNames: ["geeta"];
		slot: ["PANTS"];
		sortOrder: 101446;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsGenderlessskirt = AvatarCustomization<
	"AVATAR_m_pants_genderlessskirt",
	{
		assetName: "m_pants_genderlessskirt_0";
		bundleName: "m_pants_genderlessskirt_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_genderlessskirt_0";
		iconName: "m_pants_genderlessskirt_00_bundle_icon";
		setNames: ["genderlessskirt"];
		slot: ["PANTS"];
		sortOrder: 101022;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsGiovanni = AvatarCustomization<
	"AVATAR_m_pants_giovanni",
	{
		assetName: "m_pants_giovanni_0";
		bundleName: "m_pants_giovanni_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_giovanni_0";
		iconName: "m_pants_giovanni_0_bundle_icon";
		setNames: ["giovanni"];
		slot: ["PANTS"];
		sortOrder: 100207;
		unlockBadgeLevel: 5;
		unlockBadgeType: "BADGE_ROCKET_GIOVANNI_DEFEATED";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsGladion = AvatarCustomization<
	"AVATAR_m_pants_gladion",
	{
		assetName: "m_pants_gladion_0";
		bundleName: "m_pants_gladion_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_gladion_0";
		iconName: "m_pants_gladion_00_bundle_icon";
		setNames: ["gladion"];
		slot: ["PANTS"];
		sortOrder: 101134;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsGothitelleitems = AvatarCustomization<
	"AVATAR_m_pants_gothitelleitems",
	{
		assetName: "m_pants_gothitelleitems_0";
		bundleName: "m_pants_gothitelleitems_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_gothitelleitems_0";
		iconName: "m_pants_gothitelleitems_00_bundle_icon";
		setNames: ["gothitelleitems"];
		slot: ["PANTS"];
		sortOrder: 101499;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsGreen = AvatarCustomization<
	"AVATAR_m_pants_green",
	{
		assetName: "m_pants_green_0";
		bundleName: "m_pants_green_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.gbl.avatar.m_pants_green_0";
		iconName: "m_pants_green_00_bundle_icon";
		setNames: ["green"];
		slot: ["PANTS"];
		sortOrder: 100734;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsGreencoat = AvatarCustomization<
	"AVATAR_m_pants_greencoat",
	{
		assetName: "m_pants_greencoat_0";
		bundleName: "m_pants_greencoat_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_greencoat_0";
		iconName: "m_pants_greencoat_00_bundle_icon";
		setNames: ["greencoat"];
		slot: ["PANTS"];
		sortOrder: 101092;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsGuzma = AvatarCustomization<
	"AVATAR_m_pants_guzma",
	{
		assetName: "m_pants_guzma_0";
		bundleName: "m_pants_guzma_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_guzma_0";
		iconName: "m_pants_guzma_00_bundle_icon";
		setNames: ["guzma"];
		slot: ["PANTS"];
		sortOrder: 101240;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsGymleader0 = AvatarCustomization<
	"AVATAR_m_pants_gymleader_0",
	{
		assetName: "m_pants_gymleader_0";
		bundleName: "m_pants_gymleader_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_gymleader_0";
		iconName: "m_pants_gymleader_bundle_icon";
		setNames: ["gymleader_0"];
		slot: ["PANTS"];
		sortOrder: 100191;
		unlockBadgeLevel: 100;
		unlockBadgeType: "BADGE_HOURS_DEFENDED";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsGymleader1 = AvatarCustomization<
	"AVATAR_m_pants_gymleader_1",
	{
		assetName: "m_pants_gymleader_1";
		bundleName: "m_pants_gymleader_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_gymleader_1";
		iconName: "m_pants_gymleader_bundle_icon";
		setNames: ["gymleader_1"];
		slot: ["PANTS"];
		sortOrder: 100190;
		unlockBadgeLevel: 100;
		unlockBadgeType: "BADGE_HOURS_DEFENDED";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsGymleader2 = AvatarCustomization<
	"AVATAR_m_pants_gymleader_2",
	{
		assetName: "m_pants_gymleader_2";
		bundleName: "m_pants_gymleader_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_gymleader_2";
		iconName: "m_pants_gymleader_bundle_icon";
		setNames: ["gymleader_2"];
		slot: ["PANTS"];
		sortOrder: 100189;
		unlockBadgeLevel: 100;
		unlockBadgeType: "BADGE_HOURS_DEFENDED";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsHala = AvatarCustomization<
	"AVATAR_m_pants_hala",
	{
		assetName: "m_pants_hala_0";
		bundleName: "m_pants_hala_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_hala_0";
		iconName: "m_pants_hala_00_bundle_icon";
		setNames: ["hala"];
		slot: ["PANTS"];
		sortOrder: 101581;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsHgss0 = AvatarCustomization<
	"AVATAR_m_pants_hgss_0",
	{
		assetName: "m_pants_hgss_0";
		bundleName: "m_pants_hgss_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_hgss_0";
		iconName: "m_pants_hgss_bundle_icon";
		setNames: ["hgss_0"];
		slot: ["PANTS"];
		sortOrder: 100188;
		unlockBadgeLevel: 5;
		unlockBadgeType: "BADGE_POKEDEX_ENTRIES_GEN2";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsIngo = AvatarCustomization<
	"AVATAR_m_pants_ingo",
	{
		assetName: "m_pants_ingo_0";
		bundleName: "m_pants_ingo_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_ingo_0";
		iconName: "m_pants_ingo_00_bundle_icon";
		setNames: ["ingo"];
		slot: ["PANTS"];
		sortOrder: 101506;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsJogger0 = AvatarCustomization<
	"AVATAR_m_pants_jogger_0",
	{
		assetName: "m_pants_jogger_0";
		bundleName: "m_pants_jogger_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_jogger_0";
		iconName: "m_pants_jogger_bundle_icon";
		setNames: ["jogger_0"];
		slot: ["PANTS"];
		sortOrder: 100187;
		unlockBadgeLevel: 100;
		unlockBadgeType: "BADGE_TRAVEL_KM";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsKorrina = AvatarCustomization<
	"AVATAR_m_pants_korrina",
	{
		assetName: "m_pants_korrina_0";
		bundleName: "m_pants_korrina_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_korrina_0";
		iconName: "m_pants_korrina_00_bundle_icon";
		setNames: ["korrina"];
		slot: ["PANTS"];
		sortOrder: 100954;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsLoosepants = AvatarCustomization<
	"AVATAR_m_pants_loosepants",
	{
		assetName: "m_pants_loosepants_0";
		bundleName: "m_pants_loosepants_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_loosepants_0";
		iconName: "m_pants_loosepants_0_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100211;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsLunalaitems = AvatarCustomization<
	"AVATAR_m_pants_lunalaitems",
	{
		assetName: "m_pants_lunalaitems_0";
		bundleName: "m_pants_lunalaitems_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_lunalaitems_0";
		iconName: "m_pants_lunalaitems_00_bundle_icon";
		setNames: ["lunalaitems"];
		slot: ["PANTS"];
		sortOrder: 101301;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsLuvdiscpack = AvatarCustomization<
	"AVATAR_m_pants_luvdiscpack",
	{
		assetName: "m_pants_luvdiscpack_0";
		bundleName: "m_pants_luvdiscpack_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_luvdiscpack_0";
		iconName: "m_pants_luvdiscpack_0_bundle_icon";
		setNames: ["luvdiscpack"];
		slot: ["PANTS"];
		sortOrder: 100210;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsLysandre = AvatarCustomization<
	"AVATAR_m_pants_lysandre",
	{
		assetName: "m_pants_lysandre_0";
		bundleName: "m_pants_lysandre_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_lysandre_0";
		iconName: "m_pants_lysandre_00_bundle_icon";
		setNames: ["lysandre"];
		slot: ["PANTS"];
		sortOrder: 101077;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsMewtwo = AvatarCustomization<
	"AVATAR_m_pants_mewtwo",
	{
		assetName: "m_pants_mewtwo_0";
		bundleName: "m_pants_mewtwo_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_mewtwo_0";
		iconName: "m_pants_mewtwo_0_bundle_icon";
		setNames: ["mewtwo"];
		slot: ["PANTS"];
		sortOrder: 100206;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsMunnapack = AvatarCustomization<
	"AVATAR_m_pants_munnapack",
	{
		assetName: "m_pants_munnapack_0";
		bundleName: "m_pants_munnapack_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_munnapack_0";
		iconName: "m_pants_munnapack_00_bundle_icon";
		setNames: ["munnapack_0", "munnapack_1"];
		slot: ["PANTS"];
		sortOrder: 100870;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsNewyear2022 = AvatarCustomization<
	"AVATAR_m_pants_newyear2022",
	{
		assetName: "m_pants_newyear2022_0";
		bundleName: "m_pants_newyear2022_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_newyear2022_0";
		iconName: "m_pants_newyear2022_00_bundle_icon";
		setNames: ["newyear"];
		slot: ["PANTS"];
		sortOrder: 101097;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsOras = AvatarCustomization<
	"AVATAR_m_pants_oras",
	{
		assetName: "m_pants_oras_0";
		bundleName: "m_pants_oras_bundle";
		enabled: true;
		groupName: "group_pants";
		iconName: "m_pants_oras_00_bundle_icon";
		setNames: ["oras"];
		slot: ["PANTS"];
		sortOrder: 101359;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMPantsPajamas20220 = AvatarCustomization<
	"AVATAR_m_pants_pajamas2022_0",
	{
		assetName: "m_pants_pajamas2022_0";
		bundleName: "m_pants_pajamas2022_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_pajamas2022_0";
		iconName: "m_pants_pajamas2022_bundle_icon";
		setNames: ["pajamas2022_0"];
		slot: ["PANTS"];
		sortOrder: 101323;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsPajamas20221 = AvatarCustomization<
	"AVATAR_m_pants_pajamas2022_1",
	{
		assetName: "m_pants_pajamas2022_1";
		bundleName: "m_pants_pajamas2022_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_pajamas2022_1";
		iconName: "m_pants_pajamas2022_bundle_icon";
		setNames: ["pajamas2022_1"];
		slot: ["PANTS"];
		sortOrder: 101329;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsPalmer = AvatarCustomization<
	"AVATAR_m_pants_palmer",
	{
		assetName: "m_pants_palmer_0";
		bundleName: "m_pants_palmer_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_palmer_0";
		iconName: "m_pants_palmer_00_bundle_icon";
		setNames: ["palmer"];
		slot: ["PANTS"];
		sortOrder: 101368;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsPikachufan0 = AvatarCustomization<
	"AVATAR_m_pants_pikachufan_0",
	{
		assetName: "m_pants_pikachufan_0";
		bundleName: "m_pants_pikachufan_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_pikachufan_0";
		iconName: "m_pants_pikachufan_bundle_icon";
		setNames: ["pikachufan_0"];
		slot: ["PANTS"];
		sortOrder: 100186;
		unlockBadgeLevel: 50;
		unlockBadgeType: "BADGE_PIKACHU";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsPikachulibre = AvatarCustomization<
	"AVATAR_m_pants_pikachulibre",
	{
		assetName: "m_pants_pikachulibre_0";
		bundleName: "m_pants_pikachulibre_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_pikachulibre_0";
		iconName: "m_pants_pikachulibre_0_bundle_icon";
		setNames: ["pikachulibre"];
		slot: ["PANTS"];
		sortOrder: 100209;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsProfwillowoutfit = AvatarCustomization<
	"AVATAR_m_pants_profwillowoutfit",
	{
		assetName: "m_pants_profwillowoutfit_0";
		bundleName: "m_pants_profwillowoutfit_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_profwillowoutfit_0";
		iconName: "m_pants_profwillowoutfit_00_bundle_icon";
		setNames: ["profwillowoutfit"];
		slot: ["PANTS"];
		sortOrder: 101379;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsPumpkabooitems = AvatarCustomization<
	"AVATAR_m_pants_pumpkabooitems",
	{
		assetName: "m_pants_pumpkabooitems_0";
		bundleName: "m_pants_pumpkabooitems_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_pumpkabooitems_0";
		iconName: "m_pants_pumpkabooitems_00_bundle_icon";
		setNames: ["pumpkabooitems"];
		slot: ["PANTS"];
		sortOrder: 101040;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsRegiicejersies = AvatarCustomization<
	"AVATAR_m_pants_regiicejersies",
	{
		assetName: "m_pants_regiicejersies_0";
		bundleName: "m_pants_regiicejersies_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_regiicejersies_0";
		iconName: "m_pants_regiicejersies_00_bundle_icon";
		setNames: ["regiicejersies"];
		slot: ["PANTS"];
		sortOrder: 100938;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsRegirockjersies = AvatarCustomization<
	"AVATAR_m_pants_regirockjersies",
	{
		assetName: "m_pants_regirockjersies_0";
		bundleName: "m_pants_regirockjersies_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_regirockjersies_0";
		iconName: "m_pants_regirockjersies_00_bundle_icon";
		setNames: ["regirockjersies"];
		slot: ["PANTS"];
		sortOrder: 100930;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsRegisteeljersies = AvatarCustomization<
	"AVATAR_m_pants_registeeljersies",
	{
		assetName: "m_pants_registeeljersies_0";
		bundleName: "m_pants_registeeljersies_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_registeeljersies_0";
		iconName: "m_pants_registeeljersies_00_bundle_icon";
		setNames: ["registeeljersies"];
		slot: ["PANTS"];
		sortOrder: 100946;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsSkinnyjeans0 = AvatarCustomization<
	"AVATAR_m_pants_skinnyjeans_0",
	{
		assetName: "m_pants_skinnyjeans_0";
		bundleName: "m_pants_skinnyjeans_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_skinnyjeans_0";
		iconName: "m_pants_skinnyjeans_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100185;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsSkinnyjeans1 = AvatarCustomization<
	"AVATAR_m_pants_skinnyjeans_1",
	{
		assetName: "m_pants_skinnyjeans_1";
		bundleName: "m_pants_skinnyjeans_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_skinnyjeans_1";
		iconName: "m_pants_skinnyjeans_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100184;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsSkinnyjeans2 = AvatarCustomization<
	"AVATAR_m_pants_skinnyjeans_2",
	{
		assetName: "m_pants_skinnyjeans_2";
		bundleName: "m_pants_skinnyjeans_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_skinnyjeans_2";
		iconName: "m_pants_skinnyjeans_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100183;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsSs = AvatarCustomization<
	"AVATAR_m_pants_ss",
	{
		assetName: "m_pants_ss_0";
		bundleName: "m_pants_ss_bundle";
		enabled: true;
		groupName: "group_pants";
		iconName: "m_pants_ss_0_bundle_icon";
		setNames: ["ss"];
		slot: ["PANTS"];
		sortOrder: 100208;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMPantsSteven = AvatarCustomization<
	"AVATAR_m_pants_steven",
	{
		assetName: "m_pants_steven_0";
		bundleName: "m_pants_steven_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_steven_0";
		iconName: "m_pants_steven_0_bundle_icon";
		setNames: ["steven"];
		slot: ["PANTS"];
		sortOrder: 100724;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsStevenfirst = AvatarCustomization<
	"AVATAR_m_pants_stevenfirst",
	{
		assetName: "m_pants_stevenfirst_0";
		bundleName: "m_pants_stevenfirst_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_stevenfirst_0";
		iconName: "m_pants_stevenfirst_00_bundle_icon";
		setNames: ["stevenfirst"];
		slot: ["PANTS"];
		sortOrder: 101312;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsSweats0 = AvatarCustomization<
	"AVATAR_m_pants_sweats_0",
	{
		assetName: "m_pants_sweats_0";
		bundleName: "m_pants_sweats_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_sweats_0";
		iconName: "m_pants_sweats_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100182;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsSweats1 = AvatarCustomization<
	"AVATAR_m_pants_sweats_1",
	{
		assetName: "m_pants_sweats_1";
		bundleName: "m_pants_sweats_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_sweats_1";
		iconName: "m_pants_sweats_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100181;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsSweats2 = AvatarCustomization<
	"AVATAR_m_pants_sweats_2",
	{
		assetName: "m_pants_sweats_2";
		bundleName: "m_pants_sweats_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_sweats_2";
		iconName: "m_pants_sweats_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100180;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsSweats3 = AvatarCustomization<
	"AVATAR_m_pants_sweats_3",
	{
		assetName: "m_pants_sweats_3";
		bundleName: "m_pants_sweats_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_sweats_3";
		iconName: "m_pants_sweats_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100179;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsSweats4 = AvatarCustomization<
	"AVATAR_m_pants_sweats_4",
	{
		assetName: "m_pants_sweats_4";
		bundleName: "m_pants_sweats_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_sweats_4";
		iconName: "m_pants_sweats_bundle_icon";
		slot: ["PANTS"];
		sortOrder: 100178;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsSwshdlc2costume = AvatarCustomization<
	"AVATAR_m_pants_swshdlc2costume",
	{
		assetName: "m_pants_swshdlc2costume_0";
		bundleName: "m_pants_swshdlc2costume_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_swshdlc2costume_0";
		iconName: "m_pants_swshdlc2costume_00_bundle_icon";
		setNames: ["swshdlc2costume"];
		slot: ["PANTS"];
		sortOrder: 100792;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsSwshuniformchampion = AvatarCustomization<
	"AVATAR_m_pants_swshuniformchampion",
	{
		assetName: "m_pants_swshuniformchampion_0";
		bundleName: "m_pants_swshuniformchampion_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_swshuniformchampion_0";
		iconName: "m_pants_swshuniformchampion_00_bundle_icon";
		setNames: ["swshuniformchampion"];
		slot: ["PANTS"];
		sortOrder: 101010;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsSwshuniformdark = AvatarCustomization<
	"AVATAR_m_pants_swshuniformdark",
	{
		assetName: "m_pants_swshuniformdark_0";
		bundleName: "m_pants_swshuniformdark_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_swshuniformdark_0";
		iconName: "m_pants_swshuniformdark_00_bundle_icon";
		setNames: ["swshuniformdark"];
		slot: ["PANTS"];
		sortOrder: 101002;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsSwshuniformdefault = AvatarCustomization<
	"AVATAR_m_pants_swshuniformdefault",
	{
		assetName: "m_pants_swshuniformdefault_0";
		bundleName: "m_pants_swshuniformdefault_bundle";
		enabled: true;
		groupName: "group_pants";
		iconName: "m_pants_swshuniformdefault_00_bundle_icon";
		setNames: ["swshuniformdefault"];
		slot: ["PANTS"];
		sortOrder: 100992;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMPantsSwshuniformdragon = AvatarCustomization<
	"AVATAR_m_pants_swshuniformdragon",
	{
		assetName: "m_pants_swshuniformdragon_0";
		bundleName: "m_pants_swshuniformdragon_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_swshuniformdragon_0";
		iconName: "m_pants_swshuniformdragon_00_bundle_icon";
		setNames: ["swshuniformdragon"];
		slot: ["PANTS"];
		sortOrder: 100982;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsTeamaqua = AvatarCustomization<
	"AVATAR_m_pants_teamaqua",
	{
		assetName: "m_pants_teamaqua_0";
		bundleName: "m_pants_teamaqua_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_teamaqua_0";
		iconName: "m_pants_teamaqua_0_bundle_icon";
		setNames: ["teamaqua"];
		slot: ["PANTS"];
		sortOrder: 100198;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsTeamblanche = AvatarCustomization<
	"AVATAR_m_pants_teamblanche",
	{
		assetName: "m_pants_teamblanche_0";
		bundleName: "m_pants_teamblanche_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_teamblanche_0";
		iconName: "m_pants_teamblanche_0_bundle_icon";
		setNames: ["teamblanche"];
		slot: ["PANTS"];
		sortOrder: 100203;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsTeamcandela = AvatarCustomization<
	"AVATAR_m_pants_teamcandela",
	{
		assetName: "m_pants_teamcandela_0";
		bundleName: "m_pants_teamcandela_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_teamcandela_0";
		iconName: "m_pants_teamcandela_0_bundle_icon";
		setNames: ["teamcandela"];
		slot: ["PANTS"];
		sortOrder: 100204;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsTeammagma = AvatarCustomization<
	"AVATAR_m_pants_teammagma",
	{
		assetName: "m_pants_teammagma_0";
		bundleName: "m_pants_teammagma_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_teammagma_0";
		iconName: "m_pants_teammagma_0_bundle_icon";
		setNames: ["teammagma"];
		slot: ["PANTS"];
		sortOrder: 100199;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsTeamrocket0 = AvatarCustomization<
	"AVATAR_m_pants_teamrocket_0",
	{
		assetName: "m_pants_teamrocket_0";
		bundleName: "m_pants_teamrocket_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_teamrocket_0";
		iconName: "m_pants_teamrocket_bundle_icon";
		setNames: ["teamrocket_0", "teamrocket_1"];
		slot: ["PANTS"];
		sortOrder: 100177;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsTeamskull = AvatarCustomization<
	"AVATAR_m_pants_teamskull",
	{
		assetName: "m_pants_teamskull_0";
		bundleName: "m_pants_teamskull_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_teamskull_0";
		iconName: "m_pants_teamskull_00_bundle_icon";
		setNames: ["teamskull"];
		slot: ["PANTS"];
		sortOrder: 101164;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsTeamspark = AvatarCustomization<
	"AVATAR_m_pants_teamspark",
	{
		assetName: "m_pants_teamspark_0";
		bundleName: "m_pants_teamspark_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_teamspark_0";
		iconName: "m_pants_teamspark_0_bundle_icon";
		setNames: ["teamspark"];
		slot: ["PANTS"];
		sortOrder: 100205;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsUltra0 = AvatarCustomization<
	"AVATAR_m_pants_ultra_0",
	{
		assetName: "m_pants_ultra_0";
		bundleName: "m_pants_ultra_bundle";
		enabled: true;
		groupName: "group_pants";
		iconName: "m_pants_ultra_bundle_icon";
		setNames: ["ultra_0"];
		slot: ["PANTS"];
		sortOrder: 100175;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMPantsVeterantrainerxy = AvatarCustomization<
	"AVATAR_m_pants_veterantrainerxy",
	{
		assetName: "m_pants_veterantrainerxy_0";
		bundleName: "m_pants_veterantrainerxy_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_veterantrainerxy_0";
		iconName: "m_pants_veterantrainerxy_0_bundle_icon";
		setNames: ["veterantrainerxy"];
		slot: ["PANTS"];
		sortOrder: 100195;
		unlockBadgeLevel: 200;
		unlockBadgeType: "BADGE_GREAT_LEAGUE";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPantsWcs2022winnersitems = AvatarCustomization<
	"AVATAR_m_pants_wcs2022winnersitems",
	{
		assetName: "m_pants_wcs2022winnersitems_0";
		bundleName: "m_pants_wcs2022winnersitems_bundle";
		enabled: true;
		groupName: "group_pants";
		iapSku: "pgorelease.avatar.m_pants_wcs2022winnersitems_0";
		iconName: "m_pants_wcs2022winnersitems_00_bundle_icon";
		setNames: ["wcs2022winnersitems"];
		slot: ["PANTS"];
		sortOrder: 101220;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose01 = AvatarCustomization<
	"AVATAR_m_pose_01",
	{
		assetName: "pose_01";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_01";
		iconName: "pose_01";
		slot: ["POSE"];
		sortOrder: 23;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose02 = AvatarCustomization<
	"AVATAR_m_pose_02",
	{
		assetName: "pose_02";
		bundleName: "m_avatar_poses_bundle";
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_02";
		iconName: "pose_02";
		slot: ["POSE"];
		sortOrder: 24;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose03 = AvatarCustomization<
	"AVATAR_m_pose_03",
	{
		assetName: "pose_03";
		bundleName: "m_avatar_poses_bundle";
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_03";
		iconName: "pose_03";
		slot: ["POSE"];
		sortOrder: 25;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose04 = AvatarCustomization<
	"AVATAR_m_pose_04",
	{
		assetName: "pose_04";
		bundleName: "m_avatar_poses_bundle";
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_04";
		iconName: "pose_04";
		slot: ["POSE"];
		sortOrder: 26;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose05 = AvatarCustomization<
	"AVATAR_m_pose_05",
	{
		assetName: "pose_05";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_05";
		iconName: "pose_05";
		slot: ["POSE"];
		sortOrder: 27;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose06 = AvatarCustomization<
	"AVATAR_m_pose_06",
	{
		assetName: "pose_06";
		bundleName: "m_avatar_poses_bundle";
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_06";
		iconName: "pose_06";
		slot: ["POSE"];
		sortOrder: 28;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose07 = AvatarCustomization<
	"AVATAR_m_pose_07",
	{
		assetName: "pose_07";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_07";
		iconName: "pose_07";
		slot: ["POSE"];
		sortOrder: 29;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose08 = AvatarCustomization<
	"AVATAR_m_pose_08",
	{
		assetName: "pose_08";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_08";
		iconName: "pose_08";
		slot: ["POSE"];
		sortOrder: 30;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose09 = AvatarCustomization<
	"AVATAR_m_pose_09",
	{
		assetName: "pose_09";
		bundleName: "m_avatar_poses_bundle";
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_09";
		iconName: "pose_09";
		slot: ["POSE"];
		sortOrder: 31;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose10 = AvatarCustomization<
	"AVATAR_m_pose_10",
	{
		assetName: "pose_10";
		bundleName: "m_avatar_poses_bundle";
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_10";
		iconName: "pose_10";
		slot: ["POSE"];
		sortOrder: 32;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose11 = AvatarCustomization<
	"AVATAR_m_pose_11",
	{
		assetName: "pose_11";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_01";
		iconName: "pose_11";
		slot: ["POSE"];
		sortOrder: 33;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose12 = AvatarCustomization<
	"AVATAR_m_pose_12",
	{
		assetName: "pose_12";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_02";
		iconName: "pose_12";
		slot: ["POSE"];
		sortOrder: 34;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose13 = AvatarCustomization<
	"AVATAR_m_pose_13",
	{
		assetName: "pose_13";
		bundleName: "m_avatar_poses_bundle";
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_03";
		iconName: "pose_13";
		slot: ["POSE"];
		sortOrder: 35;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose14 = AvatarCustomization<
	"AVATAR_m_pose_14",
	{
		assetName: "pose_14";
		bundleName: "m_avatar_poses_bundle";
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_04";
		iconName: "pose_14";
		slot: ["POSE"];
		sortOrder: 36;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose15 = AvatarCustomization<
	"AVATAR_m_pose_15",
	{
		assetName: "pose_15";
		bundleName: "m_avatar_poses_bundle";
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_05";
		iconName: "pose_15";
		slot: ["POSE"];
		sortOrder: 37;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose16 = AvatarCustomization<
	"AVATAR_m_pose_16",
	{
		assetName: "pose_16";
		bundleName: "m_avatar_poses_bundle";
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_06";
		iconName: "pose_16";
		slot: ["POSE"];
		sortOrder: 38;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose17 = AvatarCustomization<
	"AVATAR_m_pose_17",
	{
		assetName: "pose_17";
		bundleName: "m_avatar_poses_bundle";
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_07";
		iconName: "pose_17";
		slot: ["POSE"];
		sortOrder: 39;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose18 = AvatarCustomization<
	"AVATAR_m_pose_18",
	{
		assetName: "pose_18";
		bundleName: "m_avatar_poses_bundle";
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_08";
		iconName: "pose_18";
		slot: ["POSE"];
		sortOrder: 40;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose19 = AvatarCustomization<
	"AVATAR_m_pose_19",
	{
		assetName: "pose_19";
		bundleName: "m_avatar_poses_bundle";
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_09";
		iconName: "pose_19";
		slot: ["POSE"];
		sortOrder: 41;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose20 = AvatarCustomization<
	"AVATAR_m_pose_20",
	{
		assetName: "pose_20";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.f_pose_10";
		iconName: "pose_20";
		slot: ["POSE"];
		sortOrder: 42;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose21 = AvatarCustomization<
	"AVATAR_m_pose_21",
	{
		assetName: "pose_21";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.donotsku.m_pose21";
		iconName: "pose_21";
		slot: ["POSE"];
		sortOrder: 44;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose22 = AvatarCustomization<
	"AVATAR_m_pose_22",
	{
		assetName: "pose_22";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.gbl.avatar.m_pose_22";
		iconName: "pose_22";
		slot: ["POSE"];
		sortOrder: 46;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose23 = AvatarCustomization<
	"AVATAR_m_pose_23",
	{
		assetName: "pose_23";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_23";
		iconName: "pose_23";
		slot: ["POSE"];
		sortOrder: 48;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose24 = AvatarCustomization<
	"AVATAR_m_pose_24",
	{
		assetName: "pose_24";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_24";
		iconName: "pose_24";
		slot: ["POSE"];
		sortOrder: 50;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose25 = AvatarCustomization<
	"AVATAR_m_pose_25",
	{
		assetName: "pose_25";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_25";
		iconName: "pose_25";
		slot: ["POSE"];
		sortOrder: 52;
		unlockPlayerLevel: 43;
		unlockType: "LEVEL_REWARD";
	}
>;
export type AvatarCustomizationMPose26 = AvatarCustomization<
	"AVATAR_m_pose_26",
	{
		assetName: "pose_26";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_26";
		iconName: "pose_26";
		slot: ["POSE"];
		sortOrder: 54;
		unlockPlayerLevel: 47;
		unlockType: "LEVEL_REWARD";
	}
>;
export type AvatarCustomizationMPose27 = AvatarCustomization<
	"AVATAR_m_pose_27",
	{
		assetName: "pose_27";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_27";
		iconName: "pose_27";
		slot: ["POSE"];
		sortOrder: 56;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose28 = AvatarCustomization<
	"AVATAR_m_pose_28",
	{
		assetName: "pose_28";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_28";
		iconName: "pose_28";
		slot: ["POSE"];
		sortOrder: 58;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose29 = AvatarCustomization<
	"AVATAR_m_pose_29",
	{
		assetName: "pose_29";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_29";
		iconName: "pose_29";
		slot: ["POSE"];
		sortOrder: 60;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose30 = AvatarCustomization<
	"AVATAR_m_pose_30",
	{
		assetName: "pose_30";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_30";
		iconName: "pose_30";
		slot: ["POSE"];
		sortOrder: 62;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose31 = AvatarCustomization<
	"AVATAR_m_pose_31",
	{
		assetName: "pose_31";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_31";
		iconName: "pose_31";
		slot: ["POSE"];
		sortOrder: 64;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose32 = AvatarCustomization<
	"AVATAR_m_pose_32",
	{
		assetName: "pose_32";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_32";
		iconName: "pose_32";
		slot: ["POSE"];
		sortOrder: 66;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose33 = AvatarCustomization<
	"AVATAR_m_pose_33",
	{
		assetName: "pose_33";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_33";
		iconName: "pose_33";
		slot: ["POSE"];
		sortOrder: 68;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose34 = AvatarCustomization<
	"AVATAR_m_pose_34",
	{
		assetName: "pose_34";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_34";
		iconName: "pose_34";
		slot: ["POSE"];
		sortOrder: 70;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose35 = AvatarCustomization<
	"AVATAR_m_pose_35",
	{
		assetName: "pose_35";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_35";
		iconName: "pose_35";
		slot: ["POSE"];
		sortOrder: 72;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose36 = AvatarCustomization<
	"AVATAR_m_pose_36",
	{
		assetName: "pose_36";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_36";
		iconName: "pose_36";
		slot: ["POSE"];
		sortOrder: 74;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose37 = AvatarCustomization<
	"AVATAR_m_pose_37",
	{
		assetName: "pose_37";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_37";
		iconName: "pose_37";
		slot: ["POSE"];
		sortOrder: 76;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose38 = AvatarCustomization<
	"AVATAR_m_pose_38",
	{
		assetName: "pose_38";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_38";
		iconName: "pose_38";
		slot: ["POSE"];
		sortOrder: 78;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose39 = AvatarCustomization<
	"AVATAR_m_pose_39",
	{
		assetName: "pose_39";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_39";
		iconName: "pose_39";
		slot: ["POSE"];
		sortOrder: 80;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose40 = AvatarCustomization<
	"AVATAR_m_pose_40",
	{
		assetName: "pose_40";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_40";
		iconName: "pose_40";
		slot: ["POSE"];
		sortOrder: 82;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose41 = AvatarCustomization<
	"AVATAR_m_pose_41",
	{
		assetName: "pose_41";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_41";
		iconName: "pose_41";
		slot: ["POSE"];
		sortOrder: 84;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose43 = AvatarCustomization<
	"AVATAR_m_pose_43",
	{
		assetName: "pose_43";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_43";
		iconName: "pose_43";
		slot: ["POSE"];
		sortOrder: 86;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose44 = AvatarCustomization<
	"AVATAR_m_pose_44",
	{
		assetName: "pose_44";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_44";
		iconName: "pose_44";
		slot: ["POSE"];
		sortOrder: 88;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose45 = AvatarCustomization<
	"AVATAR_m_pose_45",
	{
		assetName: "pose_45";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_45";
		iconName: "pose_45";
		slot: ["POSE"];
		sortOrder: 90;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose46 = AvatarCustomization<
	"AVATAR_m_pose_46",
	{
		assetName: "pose_46";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_46";
		iconName: "pose_46";
		slot: ["POSE"];
		sortOrder: 92;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose47 = AvatarCustomization<
	"AVATAR_m_pose_47",
	{
		assetName: "pose_47";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_47";
		iconName: "pose_47";
		slot: ["POSE"];
		sortOrder: 94;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose48 = AvatarCustomization<
	"AVATAR_m_pose_48",
	{
		assetName: "pose_48";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_48";
		iconName: "pose_48";
		slot: ["POSE"];
		sortOrder: 96;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose49 = AvatarCustomization<
	"AVATAR_m_pose_49",
	{
		assetName: "pose_49";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_49";
		iconName: "pose_49";
		slot: ["POSE"];
		sortOrder: 98;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose50 = AvatarCustomization<
	"AVATAR_m_pose_50",
	{
		assetName: "pose_50";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_50";
		iconName: "pose_50";
		slot: ["POSE"];
		sortOrder: 100;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose51 = AvatarCustomization<
	"AVATAR_m_pose_51",
	{
		assetName: "pose_51";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_51";
		iconName: "pose_51";
		slot: ["POSE"];
		sortOrder: 102;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose52 = AvatarCustomization<
	"AVATAR_m_pose_52",
	{
		assetName: "pose_52";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_52";
		iconName: "pose_52";
		slot: ["POSE"];
		sortOrder: 104;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose53 = AvatarCustomization<
	"AVATAR_m_pose_53",
	{
		assetName: "pose_53";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_53";
		iconName: "pose_53";
		slot: ["POSE"];
		sortOrder: 1106;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose54 = AvatarCustomization<
	"AVATAR_m_pose_54",
	{
		assetName: "pose_54";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iconName: "pose_54";
		slot: ["POSE"];
		sortOrder: 1108;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMPose55 = AvatarCustomization<
	"AVATAR_m_pose_55",
	{
		assetName: "pose_55";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_55";
		iconName: "pose_55";
		slot: ["POSE"];
		sortOrder: 1110;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose56 = AvatarCustomization<
	"AVATAR_m_pose_56",
	{
		assetName: "pose_56";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_56";
		iconName: "pose_56";
		slot: ["POSE"];
		sortOrder: 1112;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose57 = AvatarCustomization<
	"AVATAR_m_pose_57",
	{
		assetName: "pose_57";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_57";
		iconName: "pose_57";
		slot: ["POSE"];
		sortOrder: 1114;
		unlockBadgeLevel: 50;
		unlockBadgeType: "BADGE_MAX_SIZE_FIRST_PLACE_WIN";
		unlockType: "MEDAL_REWARD";
	}
>;
export type AvatarCustomizationMPose58 = AvatarCustomization<
	"AVATAR_m_pose_58",
	{
		assetName: "pose_58";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_58";
		iconName: "pose_58";
		slot: ["POSE"];
		sortOrder: 1116;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose59 = AvatarCustomization<
	"AVATAR_m_pose_59",
	{
		assetName: "pose_59";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_59";
		iconName: "pose_59";
		slot: ["POSE"];
		sortOrder: 1118;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose60 = AvatarCustomization<
	"AVATAR_m_pose_60",
	{
		assetName: "pose_60";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_60";
		iconName: "pose_60";
		slot: ["POSE"];
		sortOrder: 1120;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose61 = AvatarCustomization<
	"AVATAR_m_pose_61",
	{
		assetName: "pose_61";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_61";
		iconName: "pose_61";
		slot: ["POSE"];
		sortOrder: 1122;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose62 = AvatarCustomization<
	"AVATAR_m_pose_62",
	{
		assetName: "pose_62";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_62";
		iconName: "pose_62";
		slot: ["POSE"];
		sortOrder: 1124;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose63 = AvatarCustomization<
	"AVATAR_m_pose_63",
	{
		assetName: "pose_63";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_63";
		iconName: "pose_63";
		slot: ["POSE"];
		sortOrder: 1126;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPose64 = AvatarCustomization<
	"AVATAR_m_pose_64",
	{
		assetName: "pose_64";
		bundleName: "m_avatar_poses_bundle";
		enabled: true;
		groupName: "group_poses";
		iapSku: "pgorelease.avatar.m_pose_64";
		iconName: "pose_64";
		slot: ["POSE"];
		sortOrder: 1128;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMPoseEmpty = AvatarCustomization<
	"AVATAR_m_pose_empty",
	{
		assetName: "pose_empty";
		bundleName: "m_avatar_poses_empty_bundle";
		enabled: true;
		groupName: "group_poses";
		iconName: "pose_empty";
		slot: ["POSE"];
		sortOrder: 2;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirt6thanniversary = AvatarCustomization<
	"AVATAR_m_shirt_6thanniversary",
	{
		assetName: "m_shirt_6thanniversary_0";
		bundleName: "m_shirt_6thanniversary_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_6thanniversary_0";
		iconName: "m_shirt_6thanniversary_00_bundle_icon";
		setNames: ["6thanniversary"];
		slot: ["SHIRT"];
		sortOrder: 101210;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirt7thanniversary = AvatarCustomization<
	"AVATAR_m_shirt_7thanniversary",
	{
		assetName: "m_shirt_7thanniversary_0";
		bundleName: "m_shirt_7thanniversary_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_7thanniversary_0";
		iconName: "m_shirt_7thanniversary_00_bundle_icon";
		setNames: ["7thanniversary"];
		slot: ["SHIRT"];
		sortOrder: 101425;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtAcetrainerbw = AvatarCustomization<
	"AVATAR_m_shirt_acetrainerbw",
	{
		assetName: "m_shirt_acetrainerbw_0";
		bundleName: "m_shirt_acetrainerbw_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_acetrainerbw_0";
		iconName: "m_shirt_acetrainerbw_0_bundle_icon";
		setNames: ["acetrainerbw"];
		slot: ["SHIRT"];
		sortOrder: 100128;
		unlockBadgeLevel: 1000;
		unlockBadgeType: "BADGE_BATTLE_TRAINING_WON";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtAcetrainersm = AvatarCustomization<
	"AVATAR_m_shirt_acetrainersm",
	{
		assetName: "m_shirt_acetrainersm_0";
		bundleName: "m_shirt_acetrainersm_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_acetrainersm_0";
		iconName: "m_shirt_acetrainersm_0_bundle_icon";
		setNames: ["acetrainersm"];
		slot: ["SHIRT"];
		sortOrder: 100127;
		unlockBadgeLevel: 50;
		unlockBadgeType: "BADGE_ULTRA_LEAGUE";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtAlolacomfey = AvatarCustomization<
	"AVATAR_m_shirt_alolacomfey",
	{
		assetName: "m_shirt_alolacomfey_0";
		bundleName: "m_shirt_alolacomfey_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_alolacomfey_0";
		iconName: "m_shirt_alolacomfey_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101154;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtAnimegou = AvatarCustomization<
	"AVATAR_m_shirt_animegou",
	{
		assetName: "m_shirt_animegou_0";
		bundleName: "m_shirt_animegou_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_animegou_00_bundle_icon";
		setNames: ["animegou"];
		slot: ["SHIRT"];
		sortOrder: 100813;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtAseries = AvatarCustomization<
	"AVATAR_m_shirt_aseries",
	{
		assetName: "m_shirt_aseries_0";
		bundleName: "m_shirt_aseries_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iapSku: "pgorelease.avatar.m_shirt_aseries_0";
		iconName: "m_shirt_aseries_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100978;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtBackpacker = AvatarCustomization<
	"AVATAR_m_shirt_backpacker",
	{
		assetName: "m_shirt_backpacker_0";
		bundleName: "m_shirt_backpacker_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_backpacker_0";
		iconName: "m_shirt_backpacker_0_bundle_icon";
		setNames: ["backpacker"];
		setPrimeItem: true;
		slot: ["SHIRT"];
		sortOrder: 100136;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtBallguy = AvatarCustomization<
	"AVATAR_m_shirt_ballguy",
	{
		assetName: "m_shirt_ballguy_0";
		bundleName: "m_shirt_ballguy_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_ballguy_0";
		iconName: "m_shirt_ballguy_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101126;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtBea = AvatarCustomization<
	"AVATAR_m_shirt_bea",
	{
		assetName: "m_shirt_bea_0";
		bundleName: "m_shirt_bea_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_bea_0";
		iconName: "m_shirt_bea_00_bundle_icon";
		setNames: ["bea"];
		slot: ["SHIRT"];
		sortOrder: 101179;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtBlazer0 = AvatarCustomization<
	"AVATAR_m_shirt_blazer_0",
	{
		assetName: "m_shirt_blazer_0";
		bundleName: "m_shirt_blazer_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_blazer_0";
		iconName: "m_shirt_blazer_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100108;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtBounsweetitems = AvatarCustomization<
	"AVATAR_m_shirt_bounsweetitems",
	{
		assetName: "m_shirt_bounsweetitems_0";
		bundleName: "m_shirt_bounsweetitems_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_bounsweetitems_0";
		iconName: "m_shirt_bounsweetitems_00_bundle_icon";
		setNames: ["bounsweetitems"];
		slot: ["SHIRT"];
		sortOrder: 101390;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtBrock = AvatarCustomization<
	"AVATAR_m_shirt_brock",
	{
		assetName: "m_shirt_brock_0";
		bundleName: "m_shirt_brock_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_brock_0";
		iconName: "m_shirt_brock_0_bundle_icon";
		setNames: ["brock"];
		slot: ["SHIRT"];
		sortOrder: 100122;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtBuzzwoleitems = AvatarCustomization<
	"AVATAR_m_shirt_buzzwoleitems",
	{
		assetName: "m_shirt_buzzwoleitems_0";
		bundleName: "m_shirt_buzzwoleitems_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_buzzwoleitems_0";
		iconName: "m_shirt_buzzwoleitems_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101225;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtBwn = AvatarCustomization<
	"AVATAR_m_shirt_bwn",
	{
		assetName: "m_shirt_bwn_0";
		bundleName: "m_shirt_bwn_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_bwn_0";
		iconName: "m_shirt_bwn_00_bundle_icon";
		setNames: ["bwn"];
		slot: ["SHIRT"];
		sortOrder: 100827;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtCasual0 = AvatarCustomization<
	"AVATAR_m_shirt_casual_0",
	{
		assetName: "m_shirt_casual_0";
		bundleName: "m_shirt_casual_0_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_casual_0_bundle_icon";
		setNames: ["casual_0"];
		slot: ["SHIRT"];
		sortOrder: 100133;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtCasual1 = AvatarCustomization<
	"AVATAR_m_shirt_casual_1",
	{
		assetName: "m_shirt_casual_1";
		bundleName: "m_shirt_casual_1_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_casual_1_bundle_icon";
		setNames: ["casual_1"];
		slot: ["SHIRT"];
		sortOrder: 100132;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtCasual2 = AvatarCustomization<
	"AVATAR_m_shirt_casual_2",
	{
		assetName: "m_shirt_casual_2";
		bundleName: "m_shirt_casual_2_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_casual_2_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100131;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtCasual3 = AvatarCustomization<
	"AVATAR_m_shirt_casual_3",
	{
		assetName: "m_shirt_casual_3";
		bundleName: "m_shirt_casual_3_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_casual_3_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100130;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtCelebi0 = AvatarCustomization<
	"AVATAR_m_shirt_celebi_0",
	{
		assetName: "m_shirt_celebi_0";
		bundleName: "m_shirt_celebi_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_celebi_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100080;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtChimcharonesie = AvatarCustomization<
	"AVATAR_m_shirt_chimcharonesie",
	{
		assetName: "m_shirt_chimcharonesie_0";
		bundleName: "m_shirt_chimcharonesie_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_chimcharonesie_0";
		iconName: "m_shirt_chimcharonesie_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101059;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtClay = AvatarCustomization<
	"AVATAR_m_shirt_clay",
	{
		assetName: "m_shirt_clay_0";
		bundleName: "m_shirt_clay_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_clay_0";
		iconName: "m_shirt_clay_00_bundle_icon";
		setNames: ["clay"];
		slot: ["SHIRT"];
		sortOrder: 101404;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtCofagrigusitems = AvatarCustomization<
	"AVATAR_m_shirt_cofagrigusitems",
	{
		assetName: "m_shirt_cofagrigusitems_0";
		bundleName: "m_shirt_cofagrigusitems_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_cofagrigusitems_0";
		iconName: "m_shirt_cofagrigusitems_00_bundle_icon";
		setNames: ["cofagrigus"];
		slot: ["SHIRT"];
		sortOrder: 101469;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtCosmog = AvatarCustomization<
	"AVATAR_m_shirt_cosmog",
	{
		assetName: "m_shirt_cosmog_0";
		bundleName: "m_shirt_cosmog_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_cosmog_0";
		iconName: "m_shirt_cosmog_00_bundle_icon";
		setNames: ["cosmog"];
		slot: ["SHIRT"];
		sortOrder: 101250;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtCowichansweater = AvatarCustomization<
	"AVATAR_m_shirt_cowichansweater",
	{
		assetName: "m_shirt_cowichansweater_0";
		bundleName: "m_shirt_cowichansweater_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_cowichansweater_0";
		iconName: "m_shirt_cowichansweater_0_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100161;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtDayofdead = AvatarCustomization<
	"AVATAR_m_shirt_dayofdead",
	{
		assetName: "m_shirt_dayofdead_0";
		bundleName: "m_shirt_dayofdead_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_dayofdead_00_bundle_icon";
		setNames: ["dayofthedead"];
		slot: ["SHIRT"];
		sortOrder: 101048;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtDefault0 = AvatarCustomization<
	"AVATAR_m_shirt_default_0",
	{
		assetName: "m_shirt_default_0";
		bundleName: "m_shirt_default_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_default_0_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100070;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtDefault1 = AvatarCustomization<
	"AVATAR_m_shirt_default_1",
	{
		assetName: "m_shirt_default_1";
		bundleName: "m_shirt_default_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_default_1_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100069;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtDefault2 = AvatarCustomization<
	"AVATAR_m_shirt_default_2",
	{
		assetName: "m_shirt_default_2";
		bundleName: "m_shirt_default_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_default_2_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100068;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtDefault2b = AvatarCustomization<
	"AVATAR_m_shirt_default_2B",
	{
		assetName: "m_shirt_default_2B";
		bundleName: "m_shirt_default_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_default_2_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100067;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtDefault3 = AvatarCustomization<
	"AVATAR_m_shirt_default_3",
	{
		assetName: "m_shirt_default_3";
		bundleName: "m_shirt_default_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_default_3_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100066;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtDefault4 = AvatarCustomization<
	"AVATAR_m_shirt_default_4",
	{
		assetName: "m_shirt_default_4";
		bundleName: "m_shirt_default_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_default_2_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100065;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtDefault5 = AvatarCustomization<
	"AVATAR_m_shirt_default_5",
	{
		assetName: "m_shirt_default_5";
		bundleName: "m_shirt_default_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_default_2_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100064;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtDefault6 = AvatarCustomization<
	"AVATAR_m_shirt_default_6",
	{
		assetName: "m_shirt_default_6";
		bundleName: "m_shirt_default_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_default_2_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100063;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtDefault7 = AvatarCustomization<
	"AVATAR_m_shirt_default_7",
	{
		assetName: "m_shirt_default_7";
		bundleName: "m_shirt_default_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_default_2_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100062;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtDelibird = AvatarCustomization<
	"AVATAR_m_shirt_delibird",
	{
		assetName: "m_shirt_delibird_0";
		bundleName: "m_shirt_delibird_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_delibird_0";
		iconName: "m_shirt_delibird_0_bundle_icon";
		setNames: ["delibird"];
		slot: ["SHIRT"];
		sortOrder: 100123;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtDelibirdonesie = AvatarCustomization<
	"AVATAR_m_shirt_delibirdonesie",
	{
		assetName: "m_shirt_delibirdonesie_0";
		bundleName: "m_shirt_delibirdonesie_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_delibirdonesie_0";
		iconName: "m_shirt_delibirdonesie_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101512;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtDenimfashionweek2023 = AvatarCustomization<
	"AVATAR_m_shirt_denimfashionweek2023",
	{
		assetName: "m_shirt_denimfashionweek2023_0";
		bundleName: "m_shirt_denimfashionweek2023_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_denimfashionweek2023_0";
		iconName: "m_shirt_denimfashionweek2023_00_bundle_icon";
		setNames: ["fashionweek2023"];
		slot: ["SHIRT"];
		sortOrder: 101493;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtDenimjacket = AvatarCustomization<
	"AVATAR_m_shirt_denimjacket",
	{
		assetName: "m_shirt_denimjacket_0";
		bundleName: "m_shirt_denimjacket_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_denimjacket_0";
		iconName: "m_shirt_denimjacket_0_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100169;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtDetectivepikachu = AvatarCustomization<
	"AVATAR_m_shirt_detectivepikachu",
	{
		assetName: "m_shirt_detectivepikachu_0";
		bundleName: "m_shirt_detectivepikachu_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_detectivepikachu_0_bundle_icon";
		setNames: ["detectivepikachu"];
		slot: ["SHIRT"];
		sortOrder: 100134;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtDiancie = AvatarCustomization<
	"AVATAR_m_shirt_diancie",
	{
		assetName: "m_shirt_diancie_0";
		bundleName: "m_shirt_diancie_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_diancie_0";
		iconName: "m_shirt_diancie_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101432;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtDivingsuit = AvatarCustomization<
	"AVATAR_m_shirt_divingsuit",
	{
		assetName: "m_shirt_divingsuit_0";
		bundleName: "m_shirt_divingsuit_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_divingsuit_0";
		iconName: "m_shirt_divingsuit_00_bundle_icon";
		setNames: ["divingsuit"];
		slot: ["SHIRT"];
		sortOrder: 101412;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtDiwali2021 = AvatarCustomization<
	"AVATAR_m_shirt_diwali2021",
	{
		assetName: "m_shirt_diwali2021_0";
		bundleName: "m_shirt_diwali2021_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_diwali2021_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101049;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtDp = AvatarCustomization<
	"AVATAR_m_shirt_dp",
	{
		assetName: "m_shirt_dp_0";
		bundleName: "m_shirt_dp_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_dp_00_bundle_icon";
		setNames: ["dp"];
		slot: ["SHIRT"];
		sortOrder: 101064;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtDrifblim0 = AvatarCustomization<
	"AVATAR_m_shirt_drifblim_0",
	{
		assetName: "m_shirt_drifblim_0";
		bundleName: "m_shirt_drifblim_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_drifblim_0";
		iconName: "m_shirt_drifblim_0_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100121;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtDusclopsmummy = AvatarCustomization<
	"AVATAR_m_shirt_dusclopsmummy",
	{
		assetName: "m_shirt_dusclopsmummy_0";
		bundleName: "m_shirt_dusclopsmummy_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_dusclopsmummy_0";
		iconName: "m_shirt_dusclopsmummy_00_bundle_icon";
		setNames: ["dusclopsmummy"];
		slot: ["SHIRT"];
		sortOrder: 101280;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtEarthday2018 = AvatarCustomization<
	"AVATAR_m_shirt_earthday_2018",
	{
		assetName: "m_shirt_earthday_2018";
		bundleName: "m_shirt_earthday_2018_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_earthday_2018_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100079;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtEeveestshirt00 = AvatarCustomization<
	"AVATAR_m_shirt_eeveestshirt_00",
	{
		assetName: "m_shirt_eeveestshirt_00_0";
		bundleName: "m_shirt_eeveestshirt_00_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_eeveestshirt_00_0";
		iconName: "m_shirt_eeveestshirt_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101478;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtEeveestshirt01 = AvatarCustomization<
	"AVATAR_m_shirt_eeveestshirt_01",
	{
		assetName: "m_shirt_eeveestshirt_01_0";
		bundleName: "m_shirt_eeveestshirt_01_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_eeveestshirt_01_0";
		iconName: "m_shirt_eeveestshirt_01_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101479;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtEeveestshirt02 = AvatarCustomization<
	"AVATAR_m_shirt_eeveestshirt_02",
	{
		assetName: "m_shirt_eeveestshirt_02_0";
		bundleName: "m_shirt_eeveestshirt_02_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_eeveestshirt_02_0";
		iconName: "m_shirt_eeveestshirt_02_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101480;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtEeveestshirt03 = AvatarCustomization<
	"AVATAR_m_shirt_eeveestshirt_03",
	{
		assetName: "m_shirt_eeveestshirt_03_0";
		bundleName: "m_shirt_eeveestshirt_03_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_eeveestshirt_03_0";
		iconName: "m_shirt_eeveestshirt_03_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101481;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtEeveestshirt04 = AvatarCustomization<
	"AVATAR_m_shirt_eeveestshirt_04",
	{
		assetName: "m_shirt_eeveestshirt_04";
		bundleName: "m_shirt_eeveestshirt_04_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_eeveestshirt_04";
		iconName: "m_shirt_eeveestshirt_04_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101553;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtEeveestshirt05 = AvatarCustomization<
	"AVATAR_m_shirt_eeveestshirt_05",
	{
		assetName: "m_shirt_eeveestshirt_05";
		bundleName: "m_shirt_eeveestshirt_05_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_eeveestshirt_05";
		iconName: "m_shirt_eeveestshirt_05_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101555;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtEeveestshirt06 = AvatarCustomization<
	"AVATAR_m_shirt_eeveestshirt_06",
	{
		assetName: "m_shirt_eeveestshirt_06";
		bundleName: "m_shirt_eeveestshirt_06_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_eeveestshirt_06";
		iconName: "m_shirt_eeveestshirt_06_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101557;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtEeveestshirt07 = AvatarCustomization<
	"AVATAR_m_shirt_eeveestshirt_07",
	{
		assetName: "m_shirt_eeveestshirt_07";
		bundleName: "m_shirt_eeveestshirt_07_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_eeveestshirt_07";
		iconName: "m_shirt_eeveestshirt_07_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101559;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtEeveestshirt08 = AvatarCustomization<
	"AVATAR_m_shirt_eeveestshirt_08",
	{
		assetName: "m_shirt_eeveestshirt_08";
		bundleName: "m_shirt_eeveestshirt_08_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_eeveestshirt_08";
		iconName: "m_shirt_eeveestshirt_08_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101561;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtElesa = AvatarCustomization<
	"AVATAR_m_shirt_elesa",
	{
		assetName: "m_shirt_elesa_0";
		bundleName: "m_shirt_elesa_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_elesa_0";
		iconName: "m_shirt_elesa_00_bundle_icon";
		setNames: ["elesa"];
		slot: ["SHIRT"];
		sortOrder: 100872;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtFashionweek2022 = AvatarCustomization<
	"AVATAR_m_shirt_fashionWeek2022",
	{
		assetName: "m_shirt_fashionWeek2022_0";
		bundleName: "m_shirt_fashionweek2022_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_fashionWeek2022_0";
		iconName: "m_shirt_fashionweek2022_00_bundle_icon";
		setNames: ["fashionWeek2022"];
		slot: ["SHIRT"];
		sortOrder: 101271;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtFestivaloflights00 = AvatarCustomization<
	"AVATAR_m_shirt_festivaloflights_00",
	{
		assetName: "m_shirt_festivaloflights_00_0";
		bundleName: "m_shirt_festivaloflights_00_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_festivaloflights_00_0";
		iconName: "m_shirt_festivaloflights_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101484;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtFestivaloflights01 = AvatarCustomization<
	"AVATAR_m_shirt_festivaloflights_01",
	{
		assetName: "m_shirt_festivaloflights_01_0";
		bundleName: "m_shirt_festivaloflights_01_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_festivaloflights_01_0";
		iconName: "m_shirt_festivaloflights_01_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101485;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtFisher0 = AvatarCustomization<
	"AVATAR_m_shirt_fisher_0",
	{
		assetName: "m_shirt_fisher_0";
		bundleName: "m_shirt_fisher_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_fisher_0";
		iconName: "m_shirt_fisher_bundle_icon";
		setNames: ["fisher_0"];
		slot: ["SHIRT"];
		sortOrder: 100107;
		unlockBadgeLevel: 300;
		unlockBadgeType: "BADGE_BIG_MAGIKARP";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtFlabebepack = AvatarCustomization<
	"AVATAR_m_shirt_flabebepack",
	{
		assetName: "m_shirt_flabebepack_0";
		bundleName: "m_shirt_flabebepack_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_flabebepack_0";
		iconName: "m_shirt_flabebepack_00_bundle_icon";
		setNames: ["flabebepack"];
		slot: ["SHIRT"];
		sortOrder: 101116;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtFragment0 = AvatarCustomization<
	"AVATAR_m_shirt_fragment_0",
	{
		assetName: "m_shirt_fragment_0";
		bundleName: "m_shirt_fragment_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_fragment_bundle_icon";
		setNames: ["fragment_0"];
		slot: ["SHIRT"];
		sortOrder: 100078;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtFrlg0 = AvatarCustomization<
	"AVATAR_m_shirt_frlg_0",
	{
		assetName: "m_shirt_frlg_0";
		bundleName: "m_shirt_frlg_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_frlg_0";
		iconName: "m_shirt_frlg_bundle_icon";
		setNames: ["frlg_0"];
		slot: ["SHIRT"];
		sortOrder: 100117;
		unlockBadgeLevel: 5;
		unlockBadgeType: "BADGE_POKEDEX_ENTRIES";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtFw2022 = AvatarCustomization<
	"AVATAR_m_shirt_fw2022",
	{
		assetName: "m_shirt_fw2022_0";
		bundleName: "m_shirt_fw2022_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_fw2022_0";
		iconName: "m_shirt_fw2022_00_bundle_icon";
		setNames: ["fw2022"];
		slot: ["SHIRT"];
		sortOrder: 101256;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtGalarfarfetchditems = AvatarCustomization<
	"AVATAR_m_shirt_galarfarfetchditems",
	{
		assetName: "m_shirt_galarfarfetchditems_0";
		bundleName: "m_shirt_galarfarfetchditems_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_galarfarfetchditems_0";
		iconName: "m_shirt_galarfarfetchditems_00_bundle_icon";
		setNames: ["galarfarfetchditems"];
		slot: ["SHIRT"];
		sortOrder: 100174;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtGalaxyoutfit = AvatarCustomization<
	"AVATAR_m_shirt_galaxyoutfit",
	{
		assetName: "m_shirt_galaxyoutfit_0";
		bundleName: "m_shirt_galaxyoutfit_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_galaxyoutfit_0";
		iconName: "m_shirt_galaxyoutfit_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101578;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtGeeta = AvatarCustomization<
	"AVATAR_m_shirt_geeta",
	{
		assetName: "m_shirt_geeta_0";
		bundleName: "m_shirt_geeta_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_geeta_0";
		iconName: "m_shirt_geeta_00_bundle_icon";
		setNames: ["geeta"];
		slot: ["SHIRT"];
		sortOrder: 101450;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtGenderlessskirt = AvatarCustomization<
	"AVATAR_m_shirt_genderlessskirt",
	{
		assetName: "m_shirt_genderlessskirt_0";
		bundleName: "m_shirt_genderlessskirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_genderlessskirt_0";
		iconName: "m_shirt_genderlessskirt_00_bundle_icon";
		setNames: ["genderlessskirt"];
		slot: ["SHIRT"];
		sortOrder: 101021;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtGengar0 = AvatarCustomization<
	"AVATAR_m_shirt_gengar_0",
	{
		assetName: "m_shirt_gengar_0";
		bundleName: "m_shirt_gengar_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_gengar_0";
		iconName: "m_shirt_gengar_0_bundle_icon";
		setNames: ["gengar_0"];
		slot: ["SHIRT"];
		sortOrder: 100120;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtGengaronesie = AvatarCustomization<
	"AVATAR_m_shirt_gengaronesie",
	{
		assetName: "m_shirt_gengaronesie_0";
		bundleName: "m_shirt_gengaronesie_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_gengaronesie_0";
		iconName: "m_shirt_gengaronesie_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100788;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtGiovanni = AvatarCustomization<
	"AVATAR_m_shirt_giovanni",
	{
		assetName: "m_shirt_giovanni_0";
		bundleName: "m_shirt_giovanni_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_giovanni_0";
		iconName: "m_shirt_giovanni_0_bundle_icon";
		setNames: ["giovanni"];
		slot: ["SHIRT"];
		sortOrder: 100158;
		unlockBadgeLevel: 20;
		unlockBadgeType: "BADGE_ROCKET_GIOVANNI_DEFEATED";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtGiratinaitems = AvatarCustomization<
	"AVATAR_m_shirt_giratinaitems",
	{
		assetName: "m_shirt_giratinaitems_0";
		bundleName: "m_shirt_giratinaitems_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_giratinaitems_0";
		iconName: "m_shirt_giratinaitems_00_bundle_icon";
		setNames: ["giratinaitems"];
		slot: ["SHIRT"];
		sortOrder: 101565;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtGladion = AvatarCustomization<
	"AVATAR_m_shirt_gladion",
	{
		assetName: "m_shirt_gladion_0";
		bundleName: "m_shirt_gladion_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_gladion_0";
		iconName: "m_shirt_gladion_00_bundle_icon";
		setNames: ["gladion"];
		slot: ["SHIRT"];
		sortOrder: 101130;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtGofest2022 = AvatarCustomization<
	"AVATAR_m_shirt_gofest2022",
	{
		assetName: "m_shirt_gofest2022_0";
		bundleName: "m_shirt_gofest2022_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_gofest2022_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101176;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtGofest2023 = AvatarCustomization<
	"AVATAR_m_shirt_gofest2023",
	{
		assetName: "m_shirt_gofest2023_0";
		bundleName: "m_shirt_gofest2023_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_gofest2023_0";
		iconName: "m_shirt_gofest2023_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101420;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtGofest2024darkgray = AvatarCustomization<
	"AVATAR_m_shirt_gofest2024darkgray",
	{
		assetName: "m_shirt_gofest2024darkgray_0";
		bundleName: "m_shirt_gofest2024darkgray_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_gofest2024darkgray_0";
		iconName: "m_shirt_gofest2024darkgray_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101607;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtGofest2024gray = AvatarCustomization<
	"AVATAR_m_shirt_gofest2024gray",
	{
		assetName: "m_shirt_gofest2024gray_0";
		bundleName: "m_shirt_gofest2024gray_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_gofest2024gray_0";
		iconName: "m_shirt_gofest2024gray_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101587;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtGofest2024purple = AvatarCustomization<
	"AVATAR_m_shirt_gofest2024purple",
	{
		assetName: "m_shirt_gofest2024purple_0";
		bundleName: "m_shirt_gofest2024purple_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_gofest2024purple_0";
		iconName: "m_shirt_gofest2024purple_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101605;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtGofest2019 = AvatarCustomization<
	"AVATAR_m_shirt_gofest_2019",
	{
		assetName: "m_shirt_gofest_2019";
		bundleName: "m_shirt_gofest_2019_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_gofest_2019_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100135;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtGofest2020 = AvatarCustomization<
	"AVATAR_m_shirt_gofest_2020",
	{
		assetName: "m_shirt_gofest_2020_0";
		bundleName: "m_shirt_gofest_2020_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_gofest_2020_0_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100745;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtGofest2021 = AvatarCustomization<
	"AVATAR_m_shirt_gofest_2021",
	{
		assetName: "m_shirt_gofest_2021_0";
		bundleName: "m_shirt_gofest_2021_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_gofest_2021_0_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100926;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtGofestglobal2023 = AvatarCustomization<
	"AVATAR_m_shirt_gofestglobal2023",
	{
		assetName: "m_shirt_gofestglobal2023_0";
		bundleName: "m_shirt_gofestglobal2023_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_gofestglobal2023_0";
		iconName: "m_shirt_gofestglobal2023_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101419;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtGoteamrocketarlo = AvatarCustomization<
	"AVATAR_m_shirt_goteamrocketarlo",
	{
		assetName: "m_shirt_goteamrocketarlo_0";
		bundleName: "m_shirt_goteamrocketarlo_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_goteamrocketarlo_0";
		iconName: "m_shirt_goteamrocketarlo_00_bundle_icon";
		setNames: ["goteamrocketarlo"];
		slot: ["SHIRT"];
		sortOrder: 100771;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtGoteamrocketcliff = AvatarCustomization<
	"AVATAR_m_shirt_goteamrocketcliff",
	{
		assetName: "m_shirt_goteamrocketcliff_0";
		bundleName: "m_shirt_goteamrocketcliff_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_goteamrocketcliff_0";
		iconName: "m_shirt_goteamrocketcliff_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100773;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtGoteamrocketsierra = AvatarCustomization<
	"AVATAR_m_shirt_goteamrocketsierra",
	{
		assetName: "m_shirt_goteamrocketsierra_0";
		bundleName: "m_shirt_goteamrocketsierra_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_goteamrocketsierra_0";
		iconName: "m_shirt_goteamrocketsierra_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100774;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtGothitelleitems = AvatarCustomization<
	"AVATAR_m_shirt_gothitelleitems",
	{
		assetName: "m_shirt_gothitelleitems_0";
		bundleName: "m_shirt_gothitelleitems_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_gothitelleitems_0";
		iconName: "m_shirt_gothitelleitems_00_bundle_icon";
		setNames: ["gothitelleitems"];
		slot: ["SHIRT"];
		sortOrder: 101498;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtGotour2023 = AvatarCustomization<
	"AVATAR_m_shirt_gotour2023",
	{
		assetName: "m_shirt_gotour2023_0";
		bundleName: "m_shirt_gotour2023_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_gotour2023_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101340;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtGotour2024 = AvatarCustomization<
	"AVATAR_m_shirt_gotour2024",
	{
		assetName: "m_shirt_gotour2024_0";
		bundleName: "m_shirt_gotour2024_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_gotour2024_0";
		iconName: "m_shirt_gotour2024_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101526;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtGreedentsweater = AvatarCustomization<
	"AVATAR_m_shirt_greedentsweater",
	{
		assetName: "m_shirt_greedentsweater_0";
		bundleName: "m_shirt_greedentsweater_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_greedentsweater_0";
		iconName: "m_shirt_greedentsweater_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100847;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtGreen = AvatarCustomization<
	"AVATAR_m_shirt_green",
	{
		assetName: "m_shirt_green_0";
		bundleName: "m_shirt_green_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.gbl.avatar.m_shirt_green_0";
		iconName: "m_shirt_green_00_bundle_icon";
		setNames: ["green"];
		slot: ["SHIRT"];
		sortOrder: 100733;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtGreencoat = AvatarCustomization<
	"AVATAR_m_shirt_greencoat",
	{
		assetName: "m_shirt_greencoat_0";
		bundleName: "m_shirt_greencoat_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_greencoat_0";
		iconName: "m_shirt_greencoat_00_bundle_icon";
		setNames: ["greencoat"];
		slot: ["SHIRT"];
		sortOrder: 101091;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtGtrtshirt202200 = AvatarCustomization<
	"AVATAR_m_shirt_gtrtshirt2022_00",
	{
		assetName: "m_shirt_gtrtshirt2022_0";
		bundleName: "m_shirt_gtrtshirt2022_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_gtrtshirt2022_0";
		iconName: "m_shirt_gtrtshirt2022_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101144;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtGtrtshirt202201 = AvatarCustomization<
	"AVATAR_m_shirt_gtrtshirt2022_01",
	{
		assetName: "m_shirt_gtrtshirt2022_1";
		bundleName: "m_shirt_gtrtshirt2022_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_gtrtshirt2022_1";
		iconName: "m_shirt_gtrtshirt2022_01_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101146;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtGuccitshirts = AvatarCustomization<
	"AVATAR_m_shirt_guccitshirts",
	{
		assetName: "m_shirt_guccitshirts_0";
		bundleName: "m_shirt_guccitshirts_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iconName: "m_shirt_guccitshirts_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100857;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtGuzma = AvatarCustomization<
	"AVATAR_m_shirt_guzma",
	{
		assetName: "m_shirt_guzma_0";
		bundleName: "m_shirt_guzma_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_guzma_0";
		iconName: "m_shirt_guzma_00_bundle_icon";
		setNames: ["guzma"];
		slot: ["SHIRT"];
		sortOrder: 101238;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtGymleader0 = AvatarCustomization<
	"AVATAR_m_shirt_gymleader_0",
	{
		assetName: "m_shirt_gymleader_0";
		bundleName: "m_shirt_gymleader_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_gymleader_0";
		iconName: "m_shirt_gymleader_bundle_icon";
		setNames: ["gymleader_0"];
		slot: ["SHIRT"];
		sortOrder: 100113;
		unlockBadgeLevel: 1000;
		unlockBadgeType: "BADGE_HOURS_DEFENDED";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtGymleader1 = AvatarCustomization<
	"AVATAR_m_shirt_gymleader_1",
	{
		assetName: "m_shirt_gymleader_1";
		bundleName: "m_shirt_gymleader_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_gymleader_1";
		iconName: "m_shirt_gymleader_bundle_icon";
		setNames: ["gymleader_1"];
		slot: ["SHIRT"];
		sortOrder: 100112;
		unlockBadgeLevel: 1000;
		unlockBadgeType: "BADGE_HOURS_DEFENDED";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtGymleader2 = AvatarCustomization<
	"AVATAR_m_shirt_gymleader_2",
	{
		assetName: "m_shirt_gymleader_2";
		bundleName: "m_shirt_gymleader_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_gymleader_2";
		iconName: "m_shirt_gymleader_bundle_icon";
		setNames: ["gymleader_2"];
		slot: ["SHIRT"];
		sortOrder: 100111;
		unlockBadgeLevel: 1000;
		unlockBadgeType: "BADGE_HOURS_DEFENDED";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtHala = AvatarCustomization<
	"AVATAR_m_shirt_hala",
	{
		assetName: "m_shirt_hala_0";
		bundleName: "m_shirt_hala_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_hala_0";
		iconName: "m_shirt_hala_00_bundle_icon";
		setNames: ["hala"];
		slot: ["SHIRT"];
		sortOrder: 101579;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtHappi = AvatarCustomization<
	"AVATAR_m_shirt_happi",
	{
		assetName: "m_shirt_happi_0";
		bundleName: "m_shirt_happi_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_happi_0";
		iconName: "m_shirt_happi_0_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100144;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtHappi1 = AvatarCustomization<
	"AVATAR_m_shirt_happi_1",
	{
		assetName: "m_shirt_happi_1";
		bundleName: "m_shirt_happi_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_happi_1";
		iconName: "m_shirt_happi_1_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100143;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtHappi2 = AvatarCustomization<
	"AVATAR_m_shirt_happi_2",
	{
		assetName: "m_shirt_happi_2";
		bundleName: "m_shirt_happi_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_happi_2";
		iconName: "m_shirt_happi_2_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100142;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtHgss0 = AvatarCustomization<
	"AVATAR_m_shirt_hgss_0",
	{
		assetName: "m_shirt_hgss_0";
		bundleName: "m_shirt_hgss_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_hgss_0";
		iconName: "m_shirt_hgss_bundle_icon";
		setNames: ["hgss_0"];
		slot: ["SHIRT"];
		sortOrder: 100116;
		unlockBadgeLevel: 5;
		unlockBadgeType: "BADGE_POKEDEX_ENTRIES_GEN2";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtHoliday2022santacostumes = AvatarCustomization<
	"AVATAR_m_shirt_holiday2022santacostumes",
	{
		assetName: "m_shirt_holiday2022santacostumes_0";
		bundleName: "m_shirt_holiday2022santacostumes_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_holiday2022santacostumes_0";
		iconName: "m_shirt_holiday2022santacostumes_00_bundle_icon";
		setNames: ["holiday2022santacostumes"];
		slot: ["SHIRT"];
		sortOrder: 101335;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtHolifestival2021black = AvatarCustomization<
	"AVATAR_m_shirt_holifestival2021black",
	{
		assetName: "m_shirt_holifestival2021black_0";
		bundleName: "m_shirt_holifestival2021black_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_holifestival2021black_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100898;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtHolifestival2021white = AvatarCustomization<
	"AVATAR_m_shirt_holifestival2021white",
	{
		assetName: "m_shirt_holifestival2021white_0";
		bundleName: "m_shirt_holifestival2021white_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_holifestival2021white_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100897;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtHoopaunboundtshirt = AvatarCustomization<
	"AVATAR_m_shirt_hoopaunboundtshirt",
	{
		assetName: "m_shirt_hoopaunboundtshirt_0";
		bundleName: "m_shirt_hoopaunboundtshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_hoopaunboundtshirt_0";
		iconName: "m_shirt_hoopaunboundtshirt_00_bundle_icon";
		setNames: ["hoopa"];
		slot: ["SHIRT"];
		sortOrder: 101074;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtIngo = AvatarCustomization<
	"AVATAR_m_shirt_ingo",
	{
		assetName: "m_shirt_ingo_0";
		bundleName: "m_shirt_ingo_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_ingo_0";
		iconName: "m_shirt_ingo_00_bundle_icon";
		setNames: ["ingo"];
		slot: ["SHIRT"];
		sortOrder: 101511;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtIngress0 = AvatarCustomization<
	"AVATAR_m_shirt_ingress_0",
	{
		assetName: "m_shirt_ingress_0";
		bundleName: "m_shirt_ingress_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_ingress_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100077;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtIngressE0 = AvatarCustomization<
	"AVATAR_m_shirt_ingress_e_0",
	{
		assetName: "m_shirt_ingress_e_0";
		bundleName: "m_shirt_ingress_e_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_ingress_e_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100076;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtIngressR0 = AvatarCustomization<
	"AVATAR_m_shirt_ingress_r_0",
	{
		assetName: "m_shirt_ingress_r_0";
		bundleName: "m_shirt_ingress_r_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_ingress_r_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100075;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtJames = AvatarCustomization<
	"AVATAR_m_shirt_james",
	{
		assetName: "m_shirt_james_0";
		bundleName: "m_shirt_james_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_james_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100731;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtJirachi = AvatarCustomization<
	"AVATAR_m_shirt_jirachi",
	{
		assetName: "m_shirt_jirachi_0";
		bundleName: "m_shirt_jirachi_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_jirachi_0";
		iconName: "m_shirt_jirachi_0_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100145;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtJogger0 = AvatarCustomization<
	"AVATAR_m_shirt_jogger_0",
	{
		assetName: "m_shirt_jogger_0";
		bundleName: "m_shirt_jogger_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_jogger_0";
		iconName: "m_shirt_jogger_bundle_icon";
		setNames: ["jogger_0"];
		slot: ["SHIRT"];
		sortOrder: 100106;
		unlockBadgeLevel: 1000;
		unlockBadgeType: "BADGE_TRAVEL_KM";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtKeldeotshirt = AvatarCustomization<
	"AVATAR_m_shirt_keldeotshirt",
	{
		assetName: "m_shirt_keldeotshirt_0";
		bundleName: "m_shirt_keldeotshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_keldeotshirt_0";
		iconName: "m_shirt_keldeotshirt_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101318;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtKorrina = AvatarCustomization<
	"AVATAR_m_shirt_korrina",
	{
		assetName: "m_shirt_korrina_0";
		bundleName: "m_shirt_korrina_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_korrina_0";
		iconName: "m_shirt_korrina_00_bundle_icon";
		setNames: ["korrina"];
		slot: ["SHIRT"];
		sortOrder: 100953;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtLadiamondoutfit = AvatarCustomization<
	"AVATAR_m_shirt_ladiamondoutfit",
	{
		assetName: "m_shirt_ladiamondoutfit_0";
		bundleName: "m_shirt_ladiamondoutfit_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_ladiamondoutfit_0";
		iconName: "m_shirt_ladiamondoutfit_00_bundle_icon";
		setNames: ["ladiamondoutfit"];
		slot: ["SHIRT"];
		sortOrder: 101569;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtLana = AvatarCustomization<
	"AVATAR_m_shirt_lana",
	{
		assetName: "m_shirt_lana_0";
		bundleName: "m_shirt_lana_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_lana_0";
		iconName: "m_shirt_lana_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101616;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtLapearloutfit = AvatarCustomization<
	"AVATAR_m_shirt_lapearloutfit",
	{
		assetName: "m_shirt_lapearloutfit_0";
		bundleName: "m_shirt_lapearloutfit_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_lapearloutfit_0";
		iconName: "m_shirt_lapearloutfit_00_bundle_icon";
		setNames: ["lapearloutfit"];
		slot: ["SHIRT"];
		sortOrder: 101573;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtLasecuritycorps = AvatarCustomization<
	"AVATAR_m_shirt_lasecuritycorps",
	{
		assetName: "m_shirt_lasecuritycorps_0";
		bundleName: "m_shirt_lasecuritycorps_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_lasecuritycorps_0";
		iconName: "m_shirt_lasecuritycorps_00_bundle_icon";
		setNames: ["lasecuritycorps"];
		slot: ["SHIRT"];
		sortOrder: 101552;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtLatiasLatios0 = AvatarCustomization<
	"AVATAR_m_shirt_latias_latios_0",
	{
		assetName: "m_shirt_latias_latios_0";
		bundleName: "m_shirt_latias_latios_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_latias_latios_0";
		iconName: "m_shirt_latias_latios_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100109;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtLegendofarceus = AvatarCustomization<
	"AVATAR_m_shirt_legendofarceus",
	{
		assetName: "m_shirt_legendofarceus_0";
		bundleName: "m_shirt_legendofarceus_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_legendofarceus_00_bundle_icon";
		setNames: ["legendofarceus"];
		slot: ["SHIRT"];
		sortOrder: 101109;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtLongsleevesCharizard0 = AvatarCustomization<
	"AVATAR_m_shirt_longsleeves_charizard_0",
	{
		assetName: "m_shirt_longsleeves_charizard_0";
		bundleName: "m_shirt_longsleeves_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_longsleeves_charizard_0";
		iconName: "m_shirt_longsleeves_charizard_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100105;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtLongsleevesCharizard1 = AvatarCustomization<
	"AVATAR_m_shirt_longsleeves_charizard_1",
	{
		assetName: "m_shirt_longsleeves_charizard_1";
		bundleName: "m_shirt_longsleeves_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_longsleeves_charizard_1";
		iconName: "m_shirt_longsleeves_charizard_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100104;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtLongsleevesCharizard2 = AvatarCustomization<
	"AVATAR_m_shirt_longsleeves_charizard_2",
	{
		assetName: "m_shirt_longsleeves_charizard_2";
		bundleName: "m_shirt_longsleeves_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_longsleeves_charizard_2";
		iconName: "m_shirt_longsleeves_charizard_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100103;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtLongsleevesPikachu0 = AvatarCustomization<
	"AVATAR_m_shirt_longsleeves_pikachu_0",
	{
		assetName: "m_shirt_longsleeves_pikachu_0";
		bundleName: "m_shirt_longsleeves_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_longsleeves_pikachu_0";
		iconName: "m_shirt_longsleeves_pikachu_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100102;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtLongsleevesPikachu1 = AvatarCustomization<
	"AVATAR_m_shirt_longsleeves_pikachu_1",
	{
		assetName: "m_shirt_longsleeves_pikachu_1";
		bundleName: "m_shirt_longsleeves_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_longsleeves_pikachu_1";
		iconName: "m_shirt_longsleeves_pikachu_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100101;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtLongsleevesPikachu2 = AvatarCustomization<
	"AVATAR_m_shirt_longsleeves_pikachu_2",
	{
		assetName: "m_shirt_longsleeves_pikachu_2";
		bundleName: "m_shirt_longsleeves_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_longsleeves_pikachu_2";
		iconName: "m_shirt_longsleeves_pikachu_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100100;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtLuvdiscpack = AvatarCustomization<
	"AVATAR_m_shirt_luvdiscpack",
	{
		assetName: "m_shirt_luvdiscpack_0";
		bundleName: "m_shirt_luvdiscpack_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_luvdiscpack_0";
		iconName: "m_shirt_luvdiscpack_0_bundle_icon";
		setNames: ["luvdiscpack"];
		slot: ["SHIRT"];
		sortOrder: 100162;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtLvl50 = AvatarCustomization<
	"AVATAR_m_shirt_lvl50",
	{
		assetName: "m_shirt_lvl50_0";
		bundleName: "m_shirt_lvl50_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_lvl50_00_bundle_icon";
		setNames: ["lvl50_0"];
		slot: ["SHIRT"];
		sortOrder: 100824;
		unlockPlayerLevel: 50;
		unlockType: "LEVEL_REWARD";
	}
>;
export type AvatarCustomizationMShirtLvl501 = AvatarCustomization<
	"AVATAR_m_shirt_lvl50_1",
	{
		assetName: "m_shirt_lvl50_1";
		bundleName: "m_shirt_lvl50_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_lvl50_01_bundle_icon";
		setNames: ["lvl50_1"];
		slot: ["SHIRT"];
		sortOrder: 100825;
		unlockPlayerLevel: 50;
		unlockType: "LEVEL_REWARD";
	}
>;
export type AvatarCustomizationMShirtLysandre = AvatarCustomization<
	"AVATAR_m_shirt_lysandre",
	{
		assetName: "m_shirt_lysandre_0";
		bundleName: "m_shirt_lysandre_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_lysandre_0";
		iconName: "m_shirt_lysandre_00_bundle_icon";
		setNames: ["lysandre"];
		slot: ["SHIRT"];
		sortOrder: 101076;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtMarshadowtshirt = AvatarCustomization<
	"AVATAR_m_shirt_marshadowtshirt",
	{
		assetName: "m_shirt_marshadowtshirt_0";
		bundleName: "m_shirt_marshadowtshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_marshadowtshirt_0";
		iconName: "m_shirt_marshadowtshirt_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101609;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtMegalopunnyitems = AvatarCustomization<
	"AVATAR_m_shirt_megalopunnyitems",
	{
		assetName: "m_shirt_megalopunnyitems_0";
		bundleName: "m_shirt_megalopunnyitems_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_megalopunnyitems_0";
		iconName: "m_shirt_megalopunnyitems_00_bundle_icon";
		setNames: ["megalopunnyitems"];
		slot: ["SHIRT"];
		sortOrder: 100901;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtMegarayquaza = AvatarCustomization<
	"AVATAR_m_shirt_megarayquaza",
	{
		assetName: "m_shirt_megarayquaza_0";
		bundleName: "m_shirt_megarayquaza_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_megarayquaza_0";
		iconName: "m_shirt_megarayquaza_00_bundle_icon";
		setNames: ["megarayquaza"];
		slot: ["SHIRT"];
		sortOrder: 101431;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtMelmetaljacket = AvatarCustomization<
	"AVATAR_m_shirt_melmetaljacket",
	{
		assetName: "m_shirt_melmetaljacket_0";
		bundleName: "m_shirt_melmetaljacket_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_melmetaljacket_0";
		iconName: "m_shirt_melmetaljacket_00_bundle_icon";
		setNames: ["melmetal_jacket"];
		slot: ["SHIRT"];
		sortOrder: 100808;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtMelmetalvest = AvatarCustomization<
	"AVATAR_m_shirt_melmetalvest",
	{
		assetName: "m_shirt_melmetalvest_0";
		bundleName: "m_shirt_melmetalvest_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_melmetalvest_0";
		iconName: "m_shirt_melmetalvest_00_bundle_icon";
		setNames: ["melmetal_vest"];
		slot: ["SHIRT"];
		sortOrder: 100809;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtMeloettatshirt = AvatarCustomization<
	"AVATAR_m_shirt_meloettatshirt",
	{
		assetName: "m_shirt_meloettatshirt_0";
		bundleName: "m_shirt_meloettatshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_meloettatshirt_0";
		iconName: "m_shirt_meloettatshirt_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100979;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtMeltan = AvatarCustomization<
	"AVATAR_m_shirt_meltan",
	{
		assetName: "m_shirt_meltan_0";
		bundleName: "m_shirt_meltan_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_meltan_0";
		iconName: "m_shirt_meltan_0_bundle_icon";
		setNames: ["meltan"];
		slot: ["SHIRT"];
		sortOrder: 100129;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtMew0 = AvatarCustomization<
	"AVATAR_m_shirt_mew_0",
	{
		assetName: "m_shirt_mew_0";
		bundleName: "m_shirt_mew_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_mew_0";
		iconName: "m_shirt_mew_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100110;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtMewtwo = AvatarCustomization<
	"AVATAR_m_shirt_mewtwo",
	{
		assetName: "m_shirt_mewtwo_0";
		bundleName: "m_shirt_mewtwo_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_mewtwo_0";
		iconName: "m_shirt_mewtwo_0_bundle_icon";
		setNames: ["mewtwo"];
		slot: ["SHIRT"];
		sortOrder: 100141;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtMovie2020jessiejames = AvatarCustomization<
	"AVATAR_m_shirt_movie2020jessiejames",
	{
		assetName: "m_shirt_movie2020jessiejames_0";
		bundleName: "m_shirt_movie2020jessiejames_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_movie2020jessiejames_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100851;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtMunnapack = AvatarCustomization<
	"AVATAR_m_shirt_munnapack",
	{
		assetName: "m_shirt_munnapack_0";
		bundleName: "m_shirt_munnapack_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_munnapack_0";
		iconName: "m_shirt_munnapack_00_bundle_icon";
		setNames: ["munnapack_0", "munnapack_1"];
		slot: ["SHIRT"];
		sortOrder: 100863;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtNike2021 = AvatarCustomization<
	"AVATAR_m_shirt_nike2021",
	{
		assetName: "m_shirt_nike2021_0";
		bundleName: "m_shirt_nike2021_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iapSku: "pgorelease.avatar.m_shirt_nike2021_0";
		iconName: "m_shirt_nike2021_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101035;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtOcshirt045 = AvatarCustomization<
	"AVATAR_m_shirt_ocshirt_045",
	{
		assetName: "m_shirt_ocshirt_045";
		bundleName: "m_shirt_ocshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_ocshirt_045";
		iconName: "m_shirt_ocshirt_045_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100150;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtOcshirt108 = AvatarCustomization<
	"AVATAR_m_shirt_ocshirt_108",
	{
		assetName: "m_shirt_ocshirt_108";
		bundleName: "m_shirt_ocshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_ocshirt_108";
		iconName: "m_shirt_ocshirt_108_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100149;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtOcshirt129 = AvatarCustomization<
	"AVATAR_m_shirt_ocshirt_129",
	{
		assetName: "m_shirt_ocshirt_129";
		bundleName: "m_shirt_ocshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_ocshirt_129";
		iconName: "m_shirt_ocshirt_129_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100148;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtOcshirt143 = AvatarCustomization<
	"AVATAR_m_shirt_ocshirt_143",
	{
		assetName: "m_shirt_ocshirt_143";
		bundleName: "m_shirt_ocshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_ocshirt_143";
		iconName: "m_shirt_ocshirt_143_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100147;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtOras = AvatarCustomization<
	"AVATAR_m_shirt_oras",
	{
		assetName: "m_shirt_oras_0";
		bundleName: "m_shirt_oras_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_oras_00_bundle_icon";
		setNames: ["oras"];
		slot: ["SHIRT"];
		sortOrder: 101360;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtPajamas20220 = AvatarCustomization<
	"AVATAR_m_shirt_pajamas2022_0",
	{
		assetName: "m_shirt_pajamas2022_0";
		bundleName: "m_shirt_pajamas2022_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_pajamas2022_0";
		iconName: "m_shirt_pajamas2022_bundle_icon";
		setNames: ["pajamas2022_0"];
		slot: ["SHIRT"];
		sortOrder: 101322;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtPajamas20221 = AvatarCustomization<
	"AVATAR_m_shirt_pajamas2022_1",
	{
		assetName: "m_shirt_pajamas2022_1";
		bundleName: "m_shirt_pajamas2022_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_pajamas2022_1";
		iconName: "m_shirt_pajamas2022_bundle_icon";
		setNames: ["pajamas2022_1"];
		slot: ["SHIRT"];
		sortOrder: 101328;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtPalmer = AvatarCustomization<
	"AVATAR_m_shirt_palmer",
	{
		assetName: "m_shirt_palmer_0";
		bundleName: "m_shirt_palmer_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_palmer_0";
		iconName: "m_shirt_palmer_00_bundle_icon";
		setNames: ["palmer"];
		slot: ["SHIRT"];
		sortOrder: 101367;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtPartneritemsjan2024hoodie = AvatarCustomization<
	"AVATAR_m_shirt_partneritemsjan2024hoodie",
	{
		assetName: "m_shirt_partneritemsjan2024hoodie_0";
		bundleName: "m_shirt_partneritemsjan2024hoodie_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iapSku: "pgorelease.avatar.m_shirt_partneritemsjan2024hoodie_0";
		iconName: "m_shirt_partneritemsjan2024hoodie_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101538;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtPartneritemsjan2024tshirt = AvatarCustomization<
	"AVATAR_m_shirt_partneritemsjan2024tshirt",
	{
		assetName: "m_shirt_partneritemsjan2024tshirt_0";
		bundleName: "m_shirt_partneritemsjan2024tshirt_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iapSku: "pgorelease.avatar.m_shirt_partneritemsjan2024tshirt_0";
		iconName: "m_shirt_partneritemsjan2024tshirt_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101537;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtPikachufan0 = AvatarCustomization<
	"AVATAR_m_shirt_pikachufan_0",
	{
		assetName: "m_shirt_pikachufan_0";
		bundleName: "m_shirt_pikachufan_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_pikachufan_0";
		iconName: "m_shirt_pikachufan_bundle_icon";
		setNames: ["pikachufan_0"];
		slot: ["SHIRT"];
		sortOrder: 100118;
		unlockBadgeLevel: 300;
		unlockBadgeType: "BADGE_PIKACHU";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtPikachulibre = AvatarCustomization<
	"AVATAR_m_shirt_pikachulibre",
	{
		assetName: "m_shirt_pikachulibre_0";
		bundleName: "m_shirt_pikachulibre_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_pikachulibre_0";
		iconName: "m_shirt_pikachulibre_0_bundle_icon";
		setNames: ["pikachulibre"];
		slot: ["SHIRT"];
		sortOrder: 100160;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtPikachuonesie = AvatarCustomization<
	"AVATAR_m_shirt_pikachuonesie",
	{
		assetName: "m_shirt_pikachuonesie_0";
		bundleName: "m_shirt_pikachuonesie_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_pikachuonesie_0";
		iconName: "m_shirt_pikachuonesie_0_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100154;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtPinpukuhoodie = AvatarCustomization<
	"AVATAR_m_shirt_pinpukuhoodie",
	{
		assetName: "m_shirt_pinpukuhoodie_0";
		bundleName: "m_shirt_pinpukuhoodie_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_pinpukuhoodie_0";
		iconName: "m_shirt_pinpukuhoodie_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101386;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtPipluponesie = AvatarCustomization<
	"AVATAR_m_shirt_pipluponesie",
	{
		assetName: "m_shirt_pipluponesie_0";
		bundleName: "m_shirt_pipluponesie_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_pipluponesie_0";
		iconName: "m_shirt_pipluponesie_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101057;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtPkmnhoodie001 = AvatarCustomization<
	"AVATAR_m_shirt_pkmnhoodie001",
	{
		assetName: "m_shirt_pkmnhoodie001";
		bundleName: "m_shirt_pkmnhoodie001_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_pkmnhoodie001";
		iconName: "m_shirt_pkmnhoodie001_0_bundle_icon";
		setNames: ["pkmnhoodie001"];
		slot: ["SHIRT"];
		sortOrder: 100153;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtPkmnhoodie004 = AvatarCustomization<
	"AVATAR_m_shirt_pkmnhoodie004",
	{
		assetName: "m_shirt_pkmnhoodie004";
		bundleName: "m_shirt_pkmnhoodie004_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_pkmnhoodie004";
		iconName: "m_shirt_pkmnhoodie004_0_bundle_icon";
		setNames: ["pkmnhoodie004"];
		slot: ["SHIRT"];
		sortOrder: 100152;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtPkmnhoodie007 = AvatarCustomization<
	"AVATAR_m_shirt_pkmnhoodie007",
	{
		assetName: "m_shirt_pkmnhoodie007";
		bundleName: "m_shirt_pkmnhoodie007_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_pkmnhoodie007";
		iconName: "m_shirt_pkmnhoodie007_0_bundle_icon";
		setNames: ["pkmnhoodie007"];
		slot: ["SHIRT"];
		sortOrder: 100151;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtPkmnshirts202100 = AvatarCustomization<
	"AVATAR_m_shirt_pkmnshirts2021_00",
	{
		assetName: "m_shirt_pkmnshirts2021_0";
		bundleName: "m_shirt_pkmnshirts2021_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_pkmnshirts2021_0";
		iconName: "m_shirt_pkmnshirts2021_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100965;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtPkmnshirts202101 = AvatarCustomization<
	"AVATAR_m_shirt_pkmnshirts2021_01",
	{
		assetName: "m_shirt_pkmnshirts2021_1";
		bundleName: "m_shirt_pkmnshirts2021_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_pkmnshirts2021_1";
		iconName: "m_shirt_pkmnshirts2021_01_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100966;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtPkmnshirts202102 = AvatarCustomization<
	"AVATAR_m_shirt_pkmnshirts2021_02",
	{
		assetName: "m_shirt_pkmnshirts2021_2";
		bundleName: "m_shirt_pkmnshirts2021_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_pkmnshirts2021_2";
		iconName: "m_shirt_pkmnshirts2021_02_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100967;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtPkmnshirts165 = AvatarCustomization<
	"AVATAR_m_shirt_pkmnshirts_165",
	{
		assetName: "m_shirt_pkmnshirts_165";
		bundleName: "m_shirt_pkmnshirts_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_pkmnshirts_165";
		iconName: "m_shirt_pkmnshirts_165_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100166;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtPkmnshirts188 = AvatarCustomization<
	"AVATAR_m_shirt_pkmnshirts_188",
	{
		assetName: "m_shirt_pkmnshirts_188";
		bundleName: "m_shirt_pkmnshirts_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_pkmnshirts_188";
		iconName: "m_shirt_pkmnshirts_188_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100165;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtPkmnshirts201 = AvatarCustomization<
	"AVATAR_m_shirt_pkmnshirts_201",
	{
		assetName: "m_shirt_pkmnshirts_201";
		bundleName: "m_shirt_pkmnshirts_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_pkmnshirts_201";
		iconName: "m_shirt_pkmnshirts_201_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100164;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtPkmnshirts238 = AvatarCustomization<
	"AVATAR_m_shirt_pkmnshirts_238",
	{
		assetName: "m_shirt_pkmnshirts_238";
		bundleName: "m_shirt_pkmnshirts_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_pkmnshirts_238";
		iconName: "m_shirt_pkmnshirts_238_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100163;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtPoloshirt = AvatarCustomization<
	"AVATAR_m_shirt_poloshirt",
	{
		assetName: "m_shirt_poloshirt_0";
		bundleName: "m_shirt_poloshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_poloshirt_0";
		iconName: "m_shirt_poloshirt_0_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100157;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtPoloshirt1 = AvatarCustomization<
	"AVATAR_m_shirt_poloshirt_1",
	{
		assetName: "m_shirt_poloshirt_1";
		bundleName: "m_shirt_poloshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_poloshirt_1";
		iconName: "m_shirt_poloshirt_1_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100156;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtPoloshirt2 = AvatarCustomization<
	"AVATAR_m_shirt_poloshirt_2",
	{
		assetName: "m_shirt_poloshirt_2";
		bundleName: "m_shirt_poloshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_poloshirt_2";
		iconName: "m_shirt_poloshirt_2_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100155;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtProfwillowoutfit = AvatarCustomization<
	"AVATAR_m_shirt_profwillowoutfit",
	{
		assetName: "m_shirt_profwillowoutfit_0";
		bundleName: "m_shirt_profwillowoutfit_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_profwillowoutfit_0";
		iconName: "m_shirt_profwillowoutfit_00_bundle_icon";
		setNames: ["profwillowoutfit"];
		slot: ["SHIRT"];
		sortOrder: 101381;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtProjectguitar = AvatarCustomization<
	"AVATAR_m_shirt_projectguitar",
	{
		assetName: "m_shirt_projectguitar_0";
		bundleName: "m_shirt_projectguitar_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_projectguitar_0";
		iconName: "m_shirt_projectguitar_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101072;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtPumpkabooitems = AvatarCustomization<
	"AVATAR_m_shirt_pumpkabooitems",
	{
		assetName: "m_shirt_pumpkabooitems_0";
		bundleName: "m_shirt_pumpkabooitems_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_pumpkabooitems_0";
		iconName: "m_shirt_pumpkabooitems_00_bundle_icon";
		setNames: ["pumpkabooitems"];
		slot: ["SHIRT"];
		sortOrder: 101039;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtRegiicejersies = AvatarCustomization<
	"AVATAR_m_shirt_regiicejersies",
	{
		assetName: "m_shirt_regiicejersies_0";
		bundleName: "m_shirt_regiicejersies_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_regiicejersies_0";
		iconName: "m_shirt_regiicejersies_00_bundle_icon";
		setNames: ["regiicejersies"];
		slot: ["SHIRT"];
		sortOrder: 100937;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtRegirockjersies = AvatarCustomization<
	"AVATAR_m_shirt_regirockjersies",
	{
		assetName: "m_shirt_regirockjersies_0";
		bundleName: "m_shirt_regirockjersies_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_regirockjersies_0";
		iconName: "m_shirt_regirockjersies_00_bundle_icon";
		setNames: ["regirockjersies"];
		slot: ["SHIRT"];
		sortOrder: 100929;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtRegisteeljersies = AvatarCustomization<
	"AVATAR_m_shirt_registeeljersies",
	{
		assetName: "m_shirt_registeeljersies_0";
		bundleName: "m_shirt_registeeljersies_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_registeeljersies_0";
		iconName: "m_shirt_registeeljersies_00_bundle_icon";
		setNames: ["registeeljersies"];
		slot: ["SHIRT"];
		sortOrder: 100945;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtReuniclusitems = AvatarCustomization<
	"AVATAR_m_shirt_reuniclusitems",
	{
		assetName: "m_shirt_reuniclusitems_0";
		bundleName: "m_shirt_reuniclusitems_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_reuniclusitems_0";
		iconName: "m_shirt_reuniclusitems_00_bundle_icon";
		setNames: ["reuniclusitems"];
		slot: ["SHIRT"];
		sortOrder: 101494;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtRuinmaniac = AvatarCustomization<
	"AVATAR_m_shirt_ruinmaniac",
	{
		assetName: "m_shirt_ruinmaniac_0";
		bundleName: "m_shirt_ruinmaniac_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_ruinmaniac_0";
		iconName: "m_shirt_ruinmaniac_0_bundle_icon";
		setNames: ["ruinmaniac"];
		setPrimeItem: true;
		slot: ["SHIRT"];
		sortOrder: 100137;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtSafarizone2020 = AvatarCustomization<
	"AVATAR_m_shirt_safarizone2020",
	{
		assetName: "m_shirt_safarizone2020_0";
		bundleName: "m_shirt_safarizone2020_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_safarizone2020_0";
		iconName: "m_shirt_safarizone2020_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100167;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtSamsungsummer2020 = AvatarCustomization<
	"AVATAR_m_shirt_samsungsummer2020",
	{
		assetName: "m_shirt_samsungsummer2020_0";
		bundleName: "m_shirt_samsungsummer2020_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iapSku: "pgorelease.avatar.m_shirt_samsungsummer2020_0";
		iconName: "m_shirt_samsungsummer2020_0_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100741;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtShayminlandtshirt = AvatarCustomization<
	"AVATAR_m_shirt_shayminlandtshirt",
	{
		assetName: "m_shirt_shayminlandtshirt_0";
		bundleName: "m_shirt_shayminlandtshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_shayminlandtshirt_0";
		iconName: "m_shirt_shayminlandtshirt_00_bundle_icon";
		setNames: ["shaymin_land"];
		slot: ["SHIRT"];
		sortOrder: 101184;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtShayminskytshirt = AvatarCustomization<
	"AVATAR_m_shirt_shayminskytshirt",
	{
		assetName: "m_shirt_shayminskytshirt_0";
		bundleName: "m_shirt_shayminskytshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_shayminskytshirt_0";
		iconName: "m_shirt_shayminskytshirt_00_bundle_icon";
		setNames: ["shaymin_sky"];
		slot: ["SHIRT"];
		sortOrder: 101186;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtShinymewtshirts = AvatarCustomization<
	"AVATAR_m_shirt_shinymewtshirts",
	{
		assetName: "m_shirt_shinymewtshirts_0";
		bundleName: "m_shirt_shinymewtshirts_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_shinymewtshirts_0";
		iconName: "m_shirt_shinymewtshirts_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100884;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtSlowpokeshirts = AvatarCustomization<
	"AVATAR_m_shirt_slowpokeshirts",
	{
		assetName: "m_shirt_slowpokeshirts_0";
		bundleName: "m_shirt_slowpokeshirts_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_slowpokeshirts_0";
		iconName: "m_shirt_slowpokeshirts_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100920;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtSlowpoketailshirts = AvatarCustomization<
	"AVATAR_m_shirt_slowpoketailshirts",
	{
		assetName: "m_shirt_slowpoketailshirts_0";
		bundleName: "m_shirt_slowpoketailshirts_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_slowpoketailshirts_0";
		iconName: "m_shirt_slowpoketailshirts_00_bundle_icon";
		setNames: ["slowpoketailshirts"];
		slot: ["SHIRT"];
		sortOrder: 100923;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtSnorlaxonesie = AvatarCustomization<
	"AVATAR_m_shirt_snorlaxonesie",
	{
		assetName: "m_shirt_snorlaxonesie_0";
		bundleName: "m_shirt_snorlaxonesie_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_snorlaxonesie_0";
		iconName: "m_shirt_snorlaxonesie_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101400;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtSpiritomb0 = AvatarCustomization<
	"AVATAR_m_shirt_spiritomb_0",
	{
		assetName: "m_shirt_spiritomb_0";
		bundleName: "m_shirt_spiritomb_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_spiritomb_0";
		iconName: "m_shirt_spiritomb_0_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100119;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtSpring2021gulpin = AvatarCustomization<
	"AVATAR_m_shirt_spring2021gulpin",
	{
		assetName: "m_shirt_spring2021gulpin_0";
		bundleName: "m_shirt_spring2021gulpin_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_spring2021gulpin_0";
		iconName: "m_shirt_spring2021gulpin_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100908;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtSpring2021plusle = AvatarCustomization<
	"AVATAR_m_shirt_spring2021plusle",
	{
		assetName: "m_shirt_spring2021plusle_0";
		bundleName: "m_shirt_spring2021plusle_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_spring2021plusle_0";
		iconName: "m_shirt_spring2021plusle_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100909;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtSs = AvatarCustomization<
	"AVATAR_m_shirt_ss",
	{
		assetName: "m_shirt_ss_0";
		bundleName: "m_shirt_ss_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_ss_0_bundle_icon";
		setNames: ["ss"];
		slot: ["SHIRT"];
		sortOrder: 100159;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtSteven = AvatarCustomization<
	"AVATAR_m_shirt_steven",
	{
		assetName: "m_shirt_steven_0";
		bundleName: "m_shirt_steven_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_steven_0";
		iconName: "m_shirt_steven_0_bundle_icon";
		setNames: ["steven"];
		slot: ["SHIRT"];
		sortOrder: 100723;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtStevenfirst = AvatarCustomization<
	"AVATAR_m_shirt_stevenfirst",
	{
		assetName: "m_shirt_stevenfirst_0";
		bundleName: "m_shirt_stevenfirst_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_stevenfirst_0";
		iconName: "m_shirt_stevenfirst_00_bundle_icon";
		setNames: ["stevenfirst"];
		slot: ["SHIRT"];
		sortOrder: 101311;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtSukajanblastoise = AvatarCustomization<
	"AVATAR_m_shirt_sukajanblastoise",
	{
		assetName: "m_shirt_sukajanblastoise_0";
		bundleName: "m_shirt_sukajanblastoise_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_sukajanblastoise_0";
		iconName: "m_shirt_sukajanblastoise_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100879;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtSukajancharizard = AvatarCustomization<
	"AVATAR_m_shirt_sukajancharizard",
	{
		assetName: "m_shirt_sukajancharizard_0";
		bundleName: "m_shirt_sukajancharizard_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_sukajancharizard_0";
		iconName: "m_shirt_sukajancharizard_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100880;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtSukajanhouou = AvatarCustomization<
	"AVATAR_m_shirt_sukajanhouou",
	{
		assetName: "m_shirt_sukajanhouou_0";
		bundleName: "m_shirt_sukajanhouou_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_sukajanhouou_0";
		iconName: "m_shirt_sukajanhouou_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101142;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtSukajanlugia = AvatarCustomization<
	"AVATAR_m_shirt_sukajanlugia",
	{
		assetName: "m_shirt_sukajanlugia_0";
		bundleName: "m_shirt_sukajanlugia_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_sukajanlugia_0";
		iconName: "m_shirt_sukajanlugia_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101140;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtSukajanvenusaur = AvatarCustomization<
	"AVATAR_m_shirt_sukajanvenusaur",
	{
		assetName: "m_shirt_sukajanvenusaur_0";
		bundleName: "m_shirt_sukajanvenusaur_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_sukajanvenusaur_0";
		iconName: "m_shirt_sukajanvenusaur_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100878;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtSummer2023 = AvatarCustomization<
	"AVATAR_m_shirt_summer2023",
	{
		assetName: "m_shirt_summer2023_0";
		bundleName: "m_shirt_summer2023_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_summer2023_0";
		iconName: "m_shirt_summer2023_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101395;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtSustainability2021 = AvatarCustomization<
	"AVATAR_m_shirt_sustainability2021",
	{
		assetName: "m_shirt_sustainability2021_0";
		bundleName: "m_shirt_sustainability2021_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_sustainability2021_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100913;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtSvcostumescarletschool = AvatarCustomization<
	"AVATAR_m_shirt_svcostumescarletschool",
	{
		assetName: "m_shirt_svcostumescarletschool_0";
		bundleName: "m_shirt_svcostumescarletschool_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_svcostumescarletschool_00_bundle_icon";
		setNames: ["svcostumescarletschool"];
		slot: ["SHIRT"];
		sortOrder: 101285;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtSvcostumevioletschool = AvatarCustomization<
	"AVATAR_m_shirt_svcostumevioletschool",
	{
		assetName: "m_shirt_svcostumevioletschool_0";
		bundleName: "m_shirt_svcostumevioletschool_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_svcostumevioletschool_00_bundle_icon";
		setNames: ["svcostumevioletschool"];
		slot: ["SHIRT"];
		sortOrder: 101293;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtSvdlc1 = AvatarCustomization<
	"AVATAR_m_shirt_svdlc1",
	{
		assetName: "m_shirt_svdlc1_0";
		bundleName: "m_shirt_svdlc1_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_svdlc1_00_bundle_icon";
		setNames: ["svdlc"];
		slot: ["SHIRT"];
		sortOrder: 101458;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtSvdlc2fall = AvatarCustomization<
	"AVATAR_m_shirt_svdlc2fall",
	{
		assetName: "m_shirt_svdlc2fall_0";
		bundleName: "m_shirt_svdlc2fall_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_svdlc2fall_00_bundle_icon";
		setNames: ["svdlc2fall"];
		slot: ["SHIRT"];
		sortOrder: 101525;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtSvdlc2spring = AvatarCustomization<
	"AVATAR_m_shirt_svdlc2spring",
	{
		assetName: "m_shirt_svdlc2spring_0";
		bundleName: "m_shirt_svdlc2spring_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_svdlc2spring_00_bundle_icon";
		setNames: ["svdlc2spring"];
		slot: ["SHIRT"];
		sortOrder: 101516;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtSweatshirtSporty0 = AvatarCustomization<
	"AVATAR_m_shirt_sweatshirt_sporty_0",
	{
		assetName: "m_shirt_sweatshirt_sporty_0";
		bundleName: "m_shirt_sweatshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_sweatshirt_sporty_0";
		iconName: "m_shirt_sweatshirt_sporty_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100099;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtSweatshirtSporty1 = AvatarCustomization<
	"AVATAR_m_shirt_sweatshirt_sporty_1",
	{
		assetName: "m_shirt_sweatshirt_sporty_1";
		bundleName: "m_shirt_sweatshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_sweatshirt_sporty_1";
		iconName: "m_shirt_sweatshirt_sporty_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100098;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtSweatshirtSporty2 = AvatarCustomization<
	"AVATAR_m_shirt_sweatshirt_sporty_2",
	{
		assetName: "m_shirt_sweatshirt_sporty_2";
		bundleName: "m_shirt_sweatshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_sweatshirt_sporty_2";
		iconName: "m_shirt_sweatshirt_sporty_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100097;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtSweatshirtSporty3 = AvatarCustomization<
	"AVATAR_m_shirt_sweatshirt_sporty_3",
	{
		assetName: "m_shirt_sweatshirt_sporty_3";
		bundleName: "m_shirt_sweatshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_sweatshirt_sporty_3";
		iconName: "m_shirt_sweatshirt_sporty_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100096;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtSweatshirtStreak0 = AvatarCustomization<
	"AVATAR_m_shirt_sweatshirt_streak_0",
	{
		assetName: "m_shirt_sweatshirt_streak_0";
		bundleName: "m_shirt_sweatshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_sweatshirt_streak_0";
		iconName: "m_shirt_sweatshirt_streak_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100095;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtSweatshirtStreak1 = AvatarCustomization<
	"AVATAR_m_shirt_sweatshirt_streak_1",
	{
		assetName: "m_shirt_sweatshirt_streak_1";
		bundleName: "m_shirt_sweatshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_sweatshirt_streak_1";
		iconName: "m_shirt_sweatshirt_streak_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100094;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtSweatshirtStreak2 = AvatarCustomization<
	"AVATAR_m_shirt_sweatshirt_streak_2",
	{
		assetName: "m_shirt_sweatshirt_streak_2";
		bundleName: "m_shirt_sweatshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_sweatshirt_streak_2";
		iconName: "m_shirt_sweatshirt_streak_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100093;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtSweatshirtStreak3 = AvatarCustomization<
	"AVATAR_m_shirt_sweatshirt_streak_3",
	{
		assetName: "m_shirt_sweatshirt_streak_3";
		bundleName: "m_shirt_sweatshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_sweatshirt_streak_3";
		iconName: "m_shirt_sweatshirt_streak_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100092;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtSweatshirtStreak4 = AvatarCustomization<
	"AVATAR_m_shirt_sweatshirt_streak_4",
	{
		assetName: "m_shirt_sweatshirt_streak_4";
		bundleName: "m_shirt_sweatshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_sweatshirt_streak_4";
		iconName: "m_shirt_sweatshirt_streak_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100091;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtSwshdlc2costume = AvatarCustomization<
	"AVATAR_m_shirt_swshdlc2costume",
	{
		assetName: "m_shirt_swshdlc2costume_0";
		bundleName: "m_shirt_swshdlc2costume_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_swshdlc2costume_00_bundle_icon";
		setNames: ["swshdlc2costume"];
		slot: ["SHIRT"];
		sortOrder: 100793;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtSwshdlccostume = AvatarCustomization<
	"AVATAR_m_shirt_swshdlccostume",
	{
		assetName: "m_shirt_swshdlccostume_0";
		bundleName: "m_shirt_swshdlccostume_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_swshdlccostume_00_bundle_icon";
		setNames: ["swshdlccostume"];
		slot: ["SHIRT"];
		sortOrder: 100173;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtSwshuniformchampion = AvatarCustomization<
	"AVATAR_m_shirt_swshuniformchampion",
	{
		assetName: "m_shirt_swshuniformchampion_0";
		bundleName: "m_shirt_swshuniformchampion_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_swshuniformchampion_0";
		iconName: "m_shirt_swshuniformchampion_00_bundle_icon";
		setNames: ["swshuniformchampion"];
		slot: ["SHIRT"];
		sortOrder: 101009;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtSwshuniformdark = AvatarCustomization<
	"AVATAR_m_shirt_swshuniformdark",
	{
		assetName: "m_shirt_swshuniformdark_0";
		bundleName: "m_shirt_swshuniformdark_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_swshuniformdark_0";
		iconName: "m_shirt_swshuniformdark_00_bundle_icon";
		setNames: ["swshuniformdark"];
		slot: ["SHIRT"];
		sortOrder: 101001;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtSwshuniformdefault = AvatarCustomization<
	"AVATAR_m_shirt_swshuniformdefault",
	{
		assetName: "m_shirt_swshuniformdefault_0";
		bundleName: "m_shirt_swshuniformdefault_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_swshuniformdefault_00_bundle_icon";
		setNames: ["swshuniformdefault"];
		slot: ["SHIRT"];
		sortOrder: 100991;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtSwshuniformdragon = AvatarCustomization<
	"AVATAR_m_shirt_swshuniformdragon",
	{
		assetName: "m_shirt_swshuniformdragon_0";
		bundleName: "m_shirt_swshuniformdragon_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_swshuniformdragon_0";
		iconName: "m_shirt_swshuniformdragon_00_bundle_icon";
		setNames: ["swshuniformdragon"];
		slot: ["SHIRT"];
		sortOrder: 100981;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtSylveonitems = AvatarCustomization<
	"AVATAR_m_shirt_sylveonitems",
	{
		assetName: "m_shirt_sylveonitems_0";
		bundleName: "m_shirt_sylveonitems_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_sylveonitems_0";
		iconName: "m_shirt_sylveonitems_00_bundle_icon";
		setNames: ["sylveonitems"];
		slot: ["SHIRT"];
		sortOrder: 100915;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtTcgcollabtshirtandcap = AvatarCustomization<
	"AVATAR_m_shirt_tcgcollabtshirtandcap",
	{
		assetName: "m_shirt_tcgcollabtshirtandcap_0";
		bundleName: "m_shirt_tcgcollabtshirtandcap_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_tcgcollabtshirtandcap_0";
		iconName: "m_shirt_tcgcollabtshirtandcap_00_bundle_icon";
		setNames: ["tcgcollabtshirtandcap"];
		slot: ["SHIRT"];
		sortOrder: 101202;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtTeamaqua = AvatarCustomization<
	"AVATAR_m_shirt_teamaqua",
	{
		assetName: "m_shirt_teamaqua_0";
		bundleName: "m_shirt_teamaqua_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_teamaqua_0";
		iconName: "m_shirt_teamaqua_0_bundle_icon";
		setNames: ["teamaqua"];
		slot: ["SHIRT"];
		sortOrder: 100124;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtTeamblanche = AvatarCustomization<
	"AVATAR_m_shirt_teamblanche",
	{
		assetName: "m_shirt_teamblanche_0";
		bundleName: "m_shirt_teamblanche_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_teamblanche_0";
		iconName: "m_shirt_teamblanche_0_bundle_icon";
		setNames: ["teamblanche"];
		slot: ["SHIRT"];
		sortOrder: 100138;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtTeamcandela = AvatarCustomization<
	"AVATAR_m_shirt_teamcandela",
	{
		assetName: "m_shirt_teamcandela_0";
		bundleName: "m_shirt_teamcandela_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_teamcandela_0";
		iconName: "m_shirt_teamcandela_0_bundle_icon";
		setNames: ["teamcandela"];
		slot: ["SHIRT"];
		sortOrder: 100139;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtTeammagma = AvatarCustomization<
	"AVATAR_m_shirt_teammagma",
	{
		assetName: "m_shirt_teammagma_0";
		bundleName: "m_shirt_teammagma_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_teammagma_0";
		iconName: "m_shirt_teammagma_0_bundle_icon";
		setNames: ["teammagma"];
		slot: ["SHIRT"];
		sortOrder: 100125;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtTeamrocket0 = AvatarCustomization<
	"AVATAR_m_shirt_teamrocket_0",
	{
		assetName: "m_shirt_teamrocket_0";
		bundleName: "m_shirt_teamrocket_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_teamrocket_0";
		iconName: "m_shirt_teamrocket_0_bundle_icon";
		setNames: ["teamrocket_0"];
		slot: ["SHIRT"];
		sortOrder: 100115;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtTeamrocket1 = AvatarCustomization<
	"AVATAR_m_shirt_teamrocket_1",
	{
		assetName: "m_shirt_teamrocket_1";
		bundleName: "m_shirt_teamrocket_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_teamrocket_1";
		iconName: "m_shirt_teamrocket_1_bundle_icon";
		setNames: ["teamrocket_1"];
		slot: ["SHIRT"];
		sortOrder: 100114;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtTeamskull = AvatarCustomization<
	"AVATAR_m_shirt_teamskull",
	{
		assetName: "m_shirt_teamskull_0";
		bundleName: "m_shirt_teamskull_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_teamskull_0";
		iconName: "m_shirt_teamskull_00_bundle_icon";
		setNames: ["teamskull"];
		slot: ["SHIRT"];
		sortOrder: 101163;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtTeamspark = AvatarCustomization<
	"AVATAR_m_shirt_teamspark",
	{
		assetName: "m_shirt_teamspark_0";
		bundleName: "m_shirt_teamspark_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_teamspark_0";
		iconName: "m_shirt_teamspark_0_bundle_icon";
		setNames: ["teamspark"];
		slot: ["SHIRT"];
		sortOrder: 100140;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtTogepihoodie = AvatarCustomization<
	"AVATAR_m_shirt_togepihoodie",
	{
		assetName: "m_shirt_togepihoodie_0";
		bundleName: "m_shirt_togepihoodie_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_togepihoodie_0";
		iconName: "m_shirt_togepihoodie_0_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100168;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtTracksuitsgroudon = AvatarCustomization<
	"AVATAR_m_shirt_tracksuitsgroudon",
	{
		assetName: "m_shirt_tracksuitsgroudon_0";
		bundleName: "m_shirt_tracksuitsgroudon_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_tracksuitsgroudon_0";
		iconName: "m_shirt_tracksuitsgroudon_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101348;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtTracksuitskyogre = AvatarCustomization<
	"AVATAR_m_shirt_tracksuitskyogre",
	{
		assetName: "m_shirt_tracksuitskyogre_0";
		bundleName: "m_shirt_tracksuitskyogre_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_tracksuitskyogre_0";
		iconName: "m_shirt_tracksuitskyogre_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101350;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtTshirtFestChicago2017 = AvatarCustomization<
	"AVATAR_m_shirt_tshirt_fest_chicago_2017",
	{
		assetName: "m_shirt_tshirt_fest_chicago_2017";
		bundleName: "m_shirt_tshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_tshirt_fest_chicago_2017_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100074;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtTshirtFestChicago2018 = AvatarCustomization<
	"AVATAR_m_shirt_tshirt_fest_chicago_2018",
	{
		assetName: "m_shirt_tshirt_fest_chicago_2018";
		bundleName: "m_shirt_tshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_tshirt_fest_chicago_2018_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100073;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtTshirtGeometric0 = AvatarCustomization<
	"AVATAR_m_shirt_tshirt_geometric_0",
	{
		assetName: "m_shirt_tshirt_geometric_0";
		bundleName: "m_shirt_tshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_tshirt_geometric_0";
		iconName: "m_shirt_tshirt_geometric_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100090;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtTshirtGeometric1 = AvatarCustomization<
	"AVATAR_m_shirt_tshirt_geometric_1",
	{
		assetName: "m_shirt_tshirt_geometric_1";
		bundleName: "m_shirt_tshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_tshirt_geometric_1";
		iconName: "m_shirt_tshirt_geometric_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100089;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtTshirtGeometric2 = AvatarCustomization<
	"AVATAR_m_shirt_tshirt_geometric_2",
	{
		assetName: "m_shirt_tshirt_geometric_2";
		bundleName: "m_shirt_tshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_tshirt_geometric_2";
		iconName: "m_shirt_tshirt_geometric_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100088;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtTshirtGlobalGoals2017 = AvatarCustomization<
	"AVATAR_m_shirt_tshirt_global_goals_2017",
	{
		assetName: "m_shirt_tshirt_global_goals_2017";
		bundleName: "m_shirt_tshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_tshirt_global_goals_2017_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100072;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtTshirtInstinct = AvatarCustomization<
	"AVATAR_m_shirt_tshirt_instinct",
	{
		assetName: "m_shirt_tshirt_instinct";
		bundleName: "m_shirt_tshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_tshirt_instinct";
		iconName: "m_shirt_tshirt_instinct_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100087;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtTshirtMystic = AvatarCustomization<
	"AVATAR_m_shirt_tshirt_mystic",
	{
		assetName: "m_shirt_tshirt_mystic";
		bundleName: "m_shirt_tshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_tshirt_mystic";
		iconName: "m_shirt_tshirt_mystic_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100086;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtTshirtValor = AvatarCustomization<
	"AVATAR_m_shirt_tshirt_valor",
	{
		assetName: "m_shirt_tshirt_valor";
		bundleName: "m_shirt_tshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_tshirt_valor";
		iconName: "m_shirt_tshirt_valor_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100085;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtTurtleneck300 = AvatarCustomization<
	"AVATAR_m_shirt_turtleneck_30_0",
	{
		assetName: "m_shirt_turtleneck_30_0";
		bundleName: "m_shirt_turtleneck_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_turtleneck_30_0";
		iconName: "m_shirt_turtleneck_30_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100084;
		unlockPlayerLevel: 30;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtTurtleneck301 = AvatarCustomization<
	"AVATAR_m_shirt_turtleneck_30_1",
	{
		assetName: "m_shirt_turtleneck_30_1";
		bundleName: "m_shirt_turtleneck_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_turtleneck_30_1";
		iconName: "m_shirt_turtleneck_30_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100083;
		unlockPlayerLevel: 30;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtTurtleneck302 = AvatarCustomization<
	"AVATAR_m_shirt_turtleneck_30_2",
	{
		assetName: "m_shirt_turtleneck_30_2";
		bundleName: "m_shirt_turtleneck_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_turtleneck_30_2";
		iconName: "m_shirt_turtleneck_30_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100082;
		unlockPlayerLevel: 30;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtTurtleneck303 = AvatarCustomization<
	"AVATAR_m_shirt_turtleneck_30_3",
	{
		assetName: "m_shirt_turtleneck_30_3";
		bundleName: "m_shirt_turtleneck_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_turtleneck_30_3";
		iconName: "m_shirt_turtleneck_30_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100081;
		unlockPlayerLevel: 30;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtTurtwigonesie = AvatarCustomization<
	"AVATAR_m_shirt_turtwigonesie",
	{
		assetName: "m_shirt_turtwigonesie_0";
		bundleName: "m_shirt_turtwigonesie_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_turtwigonesie_0";
		iconName: "m_shirt_turtwigonesie_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101061;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtUltrareconsquad = AvatarCustomization<
	"AVATAR_m_shirt_ultraReconSquad",
	{
		assetName: "m_shirt_ultraReconSquad_0";
		bundleName: "m_shirt_ultrareconsquad_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_ultraReconSquad_0";
		iconName: "m_shirt_ultrareconsquad_00_bundle_icon";
		setNames: ["ultraReconSquad", "ultraReconSquadB"];
		slot: ["SHIRT"];
		sortOrder: 101244;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtUltra0 = AvatarCustomization<
	"AVATAR_m_shirt_ultra_0",
	{
		assetName: "m_shirt_ultra_0";
		bundleName: "m_shirt_ultra_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_ultra_bundle_icon";
		setNames: ["ultra_0"];
		slot: ["SHIRT"];
		sortOrder: 100071;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtUniqlotshirts0 = AvatarCustomization<
	"AVATAR_m_shirt_uniqlotshirts_0",
	{
		assetName: "m_shirt_uniqlotshirts_0";
		bundleName: "m_shirt_uniqlotshirts_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iconName: "m_shirt_uniqlotshirts_0_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100170;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtUniqlotshirts1 = AvatarCustomization<
	"AVATAR_m_shirt_uniqlotshirts_1",
	{
		assetName: "m_shirt_uniqlotshirts_1";
		bundleName: "m_shirt_uniqlotshirts_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iconName: "m_shirt_uniqlotshirts_1_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100171;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtUniqlotshirts2 = AvatarCustomization<
	"AVATAR_m_shirt_uniqlotshirts_2",
	{
		assetName: "m_shirt_uniqlotshirts_2";
		bundleName: "m_shirt_uniqlotshirts_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iconName: "m_shirt_uniqlotshirts_2_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100172;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtUnwto = AvatarCustomization<
	"AVATAR_m_shirt_unwto",
	{
		assetName: "m_shirt_unwto_0";
		bundleName: "m_shirt_unwto_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_unwto_0_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100146;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtValentine2023 = AvatarCustomization<
	"AVATAR_m_shirt_valentine2023",
	{
		assetName: "m_shirt_valentine2023_0";
		bundleName: "m_shirt_valentine2023_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_valentine2023_0";
		iconName: "m_shirt_valentine2023_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101344;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtVerizon2020 = AvatarCustomization<
	"AVATAR_m_shirt_verizon2020",
	{
		assetName: "m_shirt_verizon2020sweater_0";
		bundleName: "m_shirt_verizon2020sweater_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iapSku: "pgorelease.avatar.m_shirt_verizon2020sweater_0";
		iconName: "m_shirt_verizon2020sweater_0_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100751;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtVeterantrainerxy = AvatarCustomization<
	"AVATAR_m_shirt_veterantrainerxy",
	{
		assetName: "m_shirt_veterantrainerxy_0";
		bundleName: "m_shirt_veterantrainerxy_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_veterantrainerxy_0";
		iconName: "m_shirt_veterantrainerxy_0_bundle_icon";
		setNames: ["veterantrainerxy"];
		slot: ["SHIRT"];
		sortOrder: 100126;
		unlockBadgeLevel: 200;
		unlockBadgeType: "BADGE_ULTRA_LEAGUE";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtVictinitshirts = AvatarCustomization<
	"AVATAR_m_shirt_victinitshirts",
	{
		assetName: "m_shirt_victinitshirts_0";
		bundleName: "m_shirt_victinitshirts_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_victinitshirts_0";
		iconName: "m_shirt_victinitshirts_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100747;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtWcs2022 = AvatarCustomization<
	"AVATAR_m_shirt_wcs2022",
	{
		assetName: "m_shirt_wcs2022_0";
		bundleName: "m_shirt_wcs2022_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_wcs2022_0";
		iconName: "m_shirt_wcs2022_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101157;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtWcs2022tshirtbulu = AvatarCustomization<
	"AVATAR_m_shirt_wcs2022tshirtbulu",
	{
		assetName: "m_shirt_wcs2022tshirtbulu_0";
		bundleName: "m_shirt_wcs2022tshirtbulu_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_wcs2022tshirtbulu_0";
		iconName: "m_shirt_wcs2022tshirtbulu_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101204;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtWcs2022tshirtred = AvatarCustomization<
	"AVATAR_m_shirt_wcs2022tshirtred",
	{
		assetName: "m_shirt_wcs2022tshirtred_0";
		bundleName: "m_shirt_wcs2022tshirtred_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_wcs2022tshirtred_0";
		iconName: "m_shirt_wcs2022tshirtred_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101206;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtWcs2022winnersitems = AvatarCustomization<
	"AVATAR_m_shirt_wcs2022winnersitems",
	{
		assetName: "m_shirt_wcs2022winnersitems_0";
		bundleName: "m_shirt_wcs2022winnersitems_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_wcs2022winnersitems_0";
		iconName: "m_shirt_wcs2022winnersitems_00_bundle_icon";
		setNames: ["wcs2022winnersitems"];
		slot: ["SHIRT"];
		sortOrder: 101219;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtWcs2023 = AvatarCustomization<
	"AVATAR_m_shirt_wcs2023",
	{
		assetName: "m_shirt_wcs2023_0";
		bundleName: "m_shirt_wcs2023_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_wcs2023_0";
		iconName: "m_shirt_wcs2023_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101385;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtWcs2023promotshirt = AvatarCustomization<
	"AVATAR_m_shirt_wcs2023promotshirt",
	{
		assetName: "m_shirt_wcs2023promotshirt_0";
		bundleName: "m_shirt_wcs2023promotshirt_bundle";
		enabled: true;
		groupName: "group_shirt";
		iconName: "m_shirt_wcs2023promotshirt_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101437;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShirtWcs2023promotshirt01 = AvatarCustomization<
	"AVATAR_m_shirt_wcs2023promotshirt_01",
	{
		assetName: "m_shirt_wcs2023promotshirt_01_0";
		bundleName: "m_shirt_wcs2023promotshirt_01_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_wcs2023promotshirt_01_0";
		iconName: "m_shirt_wcs2023promotshirt_01_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101439;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtWcs2023sukajan = AvatarCustomization<
	"AVATAR_m_shirt_wcs2023sukajan",
	{
		assetName: "m_shirt_wcs2023sukajan_0";
		bundleName: "m_shirt_wcs2023sukajan_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_wcs2023sukajan_0";
		iconName: "m_shirt_wcs2023sukajan_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101445;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtWcs2023winnersitems = AvatarCustomization<
	"AVATAR_m_shirt_wcs2023winnersitems",
	{
		assetName: "m_shirt_wcs2023winnersitems_0";
		bundleName: "m_shirt_wcs2023winnersitems_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_wcs2023winnersitems_0";
		iconName: "m_shirt_wcs2023winnersitems_00_bundle_icon";
		setNames: ["boxingoutfit"];
		slot: ["SHIRT"];
		sortOrder: 101442;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtWcs2024 = AvatarCustomization<
	"AVATAR_m_shirt_wcs2024",
	{
		assetName: "m_shirt_wcs2024_0";
		bundleName: "m_shirt_wcs2024_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_wcs2024_0";
		iconName: "m_shirt_wcs2024_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101604;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtWcs2024championshipshirtBlue = AvatarCustomization<
	"AVATAR_m_shirt_wcs2024championshipshirt-blue",
	{
		assetName: "m_shirt_wcs2024championshipshirt-blue_0";
		bundleName: "m_shirt_wcs2024championshipshirt-blue_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_wcs2024championshipshirt-blue_0";
		iconName: "m_shirt_wcs2024championshipshirt-blue_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101627;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtWcs2024championshipshirtWhite = AvatarCustomization<
	"AVATAR_m_shirt_wcs2024championshipshirt-white",
	{
		assetName: "m_shirt_wcs2024championshipshirt-white_0";
		bundleName: "m_shirt_wcs2024championshipshirt-white_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_wcs2024championshipshirt-white_0";
		iconName: "m_shirt_wcs2024championshipshirt-white_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101625;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtWcsyokohama = AvatarCustomization<
	"AVATAR_m_shirt_wcsyokohama",
	{
		assetName: "m_shirt_wcsyokohama_0";
		bundleName: "m_shirt_wcsyokohama_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_wcsyokohama_0";
		iconName: "m_shirt_wcsyokohama_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101435;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtWhitecoat = AvatarCustomization<
	"AVATAR_m_shirt_whitecoat",
	{
		assetName: "m_shirt_whitecoat_0";
		bundleName: "m_shirt_whitecoat_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_whitecoat_0";
		iconName: "m_shirt_whitecoat_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 100849;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtWintersweater2023 = AvatarCustomization<
	"AVATAR_m_shirt_wintersweater2023",
	{
		assetName: "m_shirt_wintersweater2023_0";
		bundleName: "m_shirt_wintersweater2023_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_wintersweater2023_0";
		iconName: "m_shirt_wintersweater2023_00_bundle_icon";
		setNames: ["winter2023"];
		slot: ["SHIRT"];
		sortOrder: 101529;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShirtZoruaonesie = AvatarCustomization<
	"AVATAR_m_shirt_zoruaonesie",
	{
		assetName: "m_shirt_zoruaonesie_0";
		bundleName: "m_shirt_zoruaonesie_bundle";
		enabled: true;
		groupName: "group_shirt";
		iapSku: "pgorelease.avatar.m_shirt_zoruaonesie_0";
		iconName: "m_shirt_zoruaonesie_00_bundle_icon";
		slot: ["SHIRT"];
		sortOrder: 101274;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoes6thanniversary = AvatarCustomization<
	"AVATAR_m_shoes_6thanniversary",
	{
		assetName: "m_shoes_6thanniversary_0";
		bundleName: "m_shoes_6thanniversary_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_6thanniversary_0";
		iconName: "m_shoes_6thanniversary_00_bundle_icon";
		setNames: ["6thanniversary"];
		slot: ["SHOES"];
		sortOrder: 101215;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesAcetrainerbw = AvatarCustomization<
	"AVATAR_m_shoes_acetrainerbw",
	{
		assetName: "m_shoes_acetrainerbw_0";
		bundleName: "m_shoes_acetrainerbw_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_acetrainerbw_0";
		iconName: "m_shoes_acetrainerbw_0_bundle_icon";
		setNames: ["acetrainerbw"];
		slot: ["SHOES"];
		sortOrder: 100043;
		unlockBadgeLevel: 100;
		unlockBadgeType: "BADGE_BATTLE_TRAINING_WON";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesAcetrainersm = AvatarCustomization<
	"AVATAR_m_shoes_acetrainersm",
	{
		assetName: "m_shoes_acetrainersm_0";
		bundleName: "m_shoes_acetrainersm_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_acetrainersm_0";
		iconName: "m_shoes_acetrainersm_0_bundle_icon";
		setNames: ["acetrainersm"];
		slot: ["SHOES"];
		sortOrder: 100042;
		unlockBadgeLevel: 50;
		unlockBadgeType: "BADGE_MASTER_LEAGUE";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesAnimegou = AvatarCustomization<
	"AVATAR_m_shoes_animegou",
	{
		assetName: "m_shoes_animegou_0";
		bundleName: "m_shoes_animegou_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "m_shoes_animegou_00_bundle_icon";
		setNames: ["animegou"];
		slot: ["SHOES"];
		sortOrder: 100814;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShoesBackpacker = AvatarCustomization<
	"AVATAR_m_shoes_backpacker",
	{
		assetName: "m_shoes_backpacker_0";
		bundleName: "m_shoes_backpacker_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_backpacker_0";
		iconName: "m_shoes_backpacker_0_bundle_icon";
		setNames: ["backpacker"];
		slot: ["SHOES"];
		sortOrder: 100044;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesBrock = AvatarCustomization<
	"AVATAR_m_shoes_brock",
	{
		assetName: "m_shoes_brock_0";
		bundleName: "m_shoes_brock_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_brock_0";
		iconName: "m_shoes_brock_0_bundle_icon";
		setNames: ["brock"];
		slot: ["SHOES"];
		sortOrder: 100037;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesBwn = AvatarCustomization<
	"AVATAR_m_shoes_bwn",
	{
		assetName: "m_shoes_bwn_0";
		bundleName: "m_shoes_bwn_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_bwn_0";
		iconName: "m_shoes_bwn_00_bundle_icon";
		setNames: ["bwn"];
		slot: ["SHOES"];
		sortOrder: 100829;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesCarbink = AvatarCustomization<
	"AVATAR_m_shoes_carbink",
	{
		assetName: "m_shoes_carbink_0";
		bundleName: "m_shoes_carbink_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_carbink_0";
		iconName: "m_shoes_carbink_00_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 101416;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesClay = AvatarCustomization<
	"AVATAR_m_shoes_clay",
	{
		assetName: "m_shoes_clay_0";
		bundleName: "m_shoes_clay_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_clay_0";
		iconName: "m_shoes_clay_00_bundle_icon";
		setNames: ["clay"];
		slot: ["SHOES"];
		sortOrder: 101408;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesCoolboots = AvatarCustomization<
	"AVATAR_m_shoes_coolboots",
	{
		assetName: "m_shoes_coolboots_0";
		bundleName: "m_shoes_coolboots_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "m_shoes_coolboots_00_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100820;
		unlockPlayerLevel: 49;
		unlockType: "LEVEL_REWARD";
	}
>;
export type AvatarCustomizationMShoesDedenneitems = AvatarCustomization<
	"AVATAR_m_shoes_dedenneitems",
	{
		assetName: "m_shoes_dedenneitems_0";
		bundleName: "m_shoes_dedenneitems_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_dedenneitems_0";
		iconName: "m_shoes_dedenneitems_00_bundle_icon";
		setNames: ["dedenneitems"];
		slot: ["SHOES"];
		sortOrder: 101053;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesDefault0 = AvatarCustomization<
	"AVATAR_m_shoes_default_0",
	{
		assetName: "m_shoes_default_0";
		bundleName: "m_shoes_default_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "m_shoes_default_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100026;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShoesDefault1 = AvatarCustomization<
	"AVATAR_m_shoes_default_1",
	{
		assetName: "m_shoes_default_1";
		bundleName: "m_shoes_default_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "m_shoes_default_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100025;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShoesDefault2 = AvatarCustomization<
	"AVATAR_m_shoes_default_2",
	{
		assetName: "m_shoes_default_2";
		bundleName: "m_shoes_default_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "m_shoes_default_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100024;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShoesDefault3 = AvatarCustomization<
	"AVATAR_m_shoes_default_3",
	{
		assetName: "m_shoes_default_3";
		bundleName: "m_shoes_default_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "m_shoes_default_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100023;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShoesDefault4 = AvatarCustomization<
	"AVATAR_m_shoes_default_4",
	{
		assetName: "m_shoes_default_4";
		bundleName: "m_shoes_default_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "m_shoes_default_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100022;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShoesDefault5 = AvatarCustomization<
	"AVATAR_m_shoes_default_5",
	{
		assetName: "m_shoes_default_5";
		bundleName: "m_shoes_default_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "m_shoes_default_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100021;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShoesDefault6 = AvatarCustomization<
	"AVATAR_m_shoes_default_6",
	{
		assetName: "m_shoes_default_6";
		bundleName: "m_shoes_default_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "m_shoes_default_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100020;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShoesDelibird = AvatarCustomization<
	"AVATAR_m_shoes_delibird",
	{
		assetName: "m_shoes_delibird_0";
		bundleName: "m_shoes_delibird_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_delibird_0";
		iconName: "m_shoes_delibird_0_bundle_icon";
		setNames: ["delibird"];
		slot: ["SHOES"];
		sortOrder: 100038;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesDp = AvatarCustomization<
	"AVATAR_m_shoes_dp",
	{
		assetName: "m_shoes_dp_0";
		bundleName: "m_shoes_dp_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "m_shoes_dp_00_bundle_icon";
		setNames: ["dp"];
		slot: ["SHOES"];
		sortOrder: 101066;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShoesElesa = AvatarCustomization<
	"AVATAR_m_shoes_elesa",
	{
		assetName: "m_shoes_elesa_0";
		bundleName: "m_shoes_elesa_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_elesa_0";
		iconName: "m_shoes_elesa_00_bundle_icon";
		setNames: ["elesa"];
		slot: ["SHOES"];
		sortOrder: 100874;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesEmpty = AvatarCustomization<
	"AVATAR_m_shoes_empty",
	{
		assetName: "m_shoes_empty";
		bundleName: "m_shoes_empty_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "m_shoes_empty_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100018;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShoesFashionweek2022 = AvatarCustomization<
	"AVATAR_m_shoes_fashionWeek2022",
	{
		assetName: "m_shoes_fashionWeek2022_0";
		bundleName: "m_shoes_fashionweek2022_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_fashionWeek2022_0";
		iconName: "m_shoes_fashionweek2022_00_bundle_icon";
		setNames: ["fashionWeek2022"];
		slot: ["SHOES"];
		sortOrder: 101273;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesFisher0 = AvatarCustomization<
	"AVATAR_m_shoes_fisher_0",
	{
		assetName: "m_shoes_fisher_0";
		bundleName: "m_shoes_fisher_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_fisher_0";
		iconName: "m_shoes_fisher_bundle_icon";
		setNames: ["fisher_0"];
		slot: ["SHOES"];
		sortOrder: 100036;
		unlockBadgeLevel: 50;
		unlockBadgeType: "BADGE_BIG_MAGIKARP";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesFrlg0 = AvatarCustomization<
	"AVATAR_m_shoes_frlg_0",
	{
		assetName: "m_shoes_frlg_0";
		bundleName: "m_shoes_frlg_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_frlg_0";
		iconName: "m_shoes_frlg_bundle_icon";
		setNames: ["frlg_0"];
		slot: ["SHOES"];
		sortOrder: 100035;
		unlockBadgeLevel: 5;
		unlockBadgeType: "BADGE_POKEDEX_ENTRIES";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesFw2022 = AvatarCustomization<
	"AVATAR_m_shoes_fw2022",
	{
		assetName: "m_shoes_fw2022_0";
		bundleName: "m_shoes_fw2022_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_fw2022_0";
		iconName: "m_shoes_fw2022_00_bundle_icon";
		setNames: ["fw2022"];
		slot: ["SHOES"];
		sortOrder: 101260;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesGeeta = AvatarCustomization<
	"AVATAR_m_shoes_geeta",
	{
		assetName: "m_shoes_geeta_0";
		bundleName: "m_shoes_geeta_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_geeta_0";
		iconName: "m_shoes_geeta_00_bundle_icon";
		setNames: ["geeta"];
		slot: ["SHOES"];
		sortOrder: 101452;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesGiovanni = AvatarCustomization<
	"AVATAR_m_shoes_giovanni",
	{
		assetName: "m_shoes_giovanni_0";
		bundleName: "m_shoes_giovanni_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_giovanni_0";
		iconName: "m_shoes_giovanni_0_bundle_icon";
		setNames: ["giovanni"];
		slot: ["SHOES"];
		sortOrder: 100053;
		unlockBadgeLevel: 5;
		unlockBadgeType: "BADGE_ROCKET_GIOVANNI_DEFEATED";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesGladion = AvatarCustomization<
	"AVATAR_m_shoes_gladion",
	{
		assetName: "m_shoes_gladion_0";
		bundleName: "m_shoes_gladion_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_gladion_0";
		iconName: "m_shoes_gladion_00_bundle_icon";
		setNames: ["gladion"];
		slot: ["SHOES"];
		sortOrder: 101128;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesGothitelleitems = AvatarCustomization<
	"AVATAR_m_shoes_gothitelleitems",
	{
		assetName: "m_shoes_gothitelleitems_0";
		bundleName: "m_shoes_gothitelleitems_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_gothitelleitems_0";
		iconName: "m_shoes_gothitelleitems_00_bundle_icon";
		setNames: ["gothitelleitems"];
		slot: ["SHOES"];
		sortOrder: 101500;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesGreen = AvatarCustomization<
	"AVATAR_m_shoes_green",
	{
		assetName: "m_shoes_green_0";
		bundleName: "m_shoes_green_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.gbl.avatar.m_shoes_green_0";
		iconName: "m_shoes_green_00_bundle_icon";
		setNames: ["green"];
		slot: ["SHOES"];
		sortOrder: 100735;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesGymleader0 = AvatarCustomization<
	"AVATAR_m_shoes_gymleader_0",
	{
		assetName: "m_shoes_gymleader_0";
		bundleName: "m_shoes_gymleader_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_gymleader_0";
		iconName: "m_shoes_gymleader_bundle_icon";
		setNames: ["gymleader_0"];
		slot: ["SHOES"];
		sortOrder: 100034;
		unlockBadgeLevel: 100;
		unlockBadgeType: "BADGE_HOURS_DEFENDED";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesGymleader1 = AvatarCustomization<
	"AVATAR_m_shoes_gymleader_1",
	{
		assetName: "m_shoes_gymleader_1";
		bundleName: "m_shoes_gymleader_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_gymleader_1";
		iconName: "m_shoes_gymleader_bundle_icon";
		setNames: ["gymleader_1"];
		slot: ["SHOES"];
		sortOrder: 100033;
		unlockBadgeLevel: 100;
		unlockBadgeType: "BADGE_HOURS_DEFENDED";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesGymleader2 = AvatarCustomization<
	"AVATAR_m_shoes_gymleader_2",
	{
		assetName: "m_shoes_gymleader_2";
		bundleName: "m_shoes_gymleader_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_gymleader_2";
		iconName: "m_shoes_gymleader_bundle_icon";
		setNames: ["gymleader_2"];
		slot: ["SHOES"];
		sortOrder: 100032;
		unlockBadgeLevel: 100;
		unlockBadgeType: "BADGE_HOURS_DEFENDED";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesHala = AvatarCustomization<
	"AVATAR_m_shoes_hala",
	{
		assetName: "m_shoes_hala_0";
		bundleName: "m_shoes_hala_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_hala_0";
		iconName: "m_shoes_hala_00_bundle_icon";
		setNames: ["hala"];
		slot: ["SHOES"];
		sortOrder: 101583;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesHgss0 = AvatarCustomization<
	"AVATAR_m_shoes_hgss_0",
	{
		assetName: "m_shoes_hgss_0";
		bundleName: "m_shoes_hgss_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_hgss_0";
		iconName: "m_shoes_hgss_bundle_icon";
		setNames: ["hgss_0"];
		slot: ["SHOES"];
		sortOrder: 100031;
		unlockBadgeLevel: 5;
		unlockBadgeType: "BADGE_POKEDEX_ENTRIES_GEN2";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesIngo = AvatarCustomization<
	"AVATAR_m_shoes_ingo",
	{
		assetName: "m_shoes_ingo_0";
		bundleName: "m_shoes_ingo_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_ingo_0";
		iconName: "m_shoes_ingo_00_bundle_icon";
		setNames: ["ingo"];
		slot: ["SHOES"];
		sortOrder: 101508;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesJogger0 = AvatarCustomization<
	"AVATAR_m_shoes_jogger_0",
	{
		assetName: "m_shoes_jogger_0";
		bundleName: "m_shoes_jogger_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_jogger_0";
		iconName: "m_shoes_jogger_bundle_icon";
		setNames: ["jogger_0"];
		slot: ["SHOES"];
		sortOrder: 100030;
		unlockBadgeLevel: 100;
		unlockBadgeType: "BADGE_TRAVEL_KM";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesKorrina = AvatarCustomization<
	"AVATAR_m_shoes_korrina",
	{
		assetName: "m_shoes_korrina_0";
		bundleName: "m_shoes_korrina_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_korrina_0";
		iconName: "m_shoes_korrina_00_bundle_icon";
		setNames: ["korrina"];
		slot: ["SHOES"];
		sortOrder: 100955;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesLadiamondoutfit = AvatarCustomization<
	"AVATAR_m_shoes_ladiamondoutfit",
	{
		assetName: "m_shoes_ladiamondoutfit_0";
		bundleName: "m_shoes_ladiamondoutfit_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_ladiamondoutfit_0";
		iconName: "m_shoes_ladiamondoutfit_00_bundle_icon";
		setNames: ["ladiamondoutfit"];
		slot: ["SHOES"];
		sortOrder: 101571;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesLana = AvatarCustomization<
	"AVATAR_m_shoes_lana",
	{
		assetName: "m_shoes_lana_0";
		bundleName: "m_shoes_lana_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_lana_0";
		iconName: "m_shoes_lana_00_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 101618;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesLapearloutfit = AvatarCustomization<
	"AVATAR_m_shoes_lapearloutfit",
	{
		assetName: "m_shoes_lapearloutfit_0";
		bundleName: "m_shoes_lapearloutfit_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_lapearloutfit_0";
		iconName: "m_shoes_lapearloutfit_00_bundle_icon";
		setNames: ["lapearloutfit"];
		slot: ["SHOES"];
		sortOrder: 101575;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesLegendofarceus = AvatarCustomization<
	"AVATAR_m_shoes_legendofarceus",
	{
		assetName: "m_shoes_legendofarceus_0";
		bundleName: "m_shoes_legendofarceus_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "m_shoes_legendofarceus_00_bundle_icon";
		setNames: ["legendofarceus"];
		slot: ["SHOES"];
		sortOrder: 101110;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShoesLoosepants = AvatarCustomization<
	"AVATAR_m_shoes_loosepants",
	{
		assetName: "m_shoes_loosepants_0";
		bundleName: "m_shoes_loosepants_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_loosepants_0";
		iconName: "m_shoes_loosepants_0_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100057;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesLoosepants1 = AvatarCustomization<
	"AVATAR_m_shoes_loosepants_1",
	{
		assetName: "m_shoes_loosepants_1";
		bundleName: "m_shoes_loosepants_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_loosepants_1";
		iconName: "m_shoes_loosepants_0_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100058;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesLoosepants2 = AvatarCustomization<
	"AVATAR_m_shoes_loosepants_2",
	{
		assetName: "m_shoes_loosepants_2";
		bundleName: "m_shoes_loosepants_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_loosepants_2";
		iconName: "m_shoes_loosepants_0_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100059;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesLoosepants3 = AvatarCustomization<
	"AVATAR_m_shoes_loosepants_3",
	{
		assetName: "m_shoes_loosepants_3";
		bundleName: "m_shoes_loosepants_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_loosepants_3";
		iconName: "m_shoes_loosepants_0_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100060;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesLuvdiscpack = AvatarCustomization<
	"AVATAR_m_shoes_luvdiscpack",
	{
		assetName: "m_shoes_luvdiscpack_0";
		bundleName: "m_shoes_luvdiscpack_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_luvdiscpack_0";
		iconName: "m_shoes_luvdiscpack_0_bundle_icon";
		setNames: ["luvdiscpack"];
		slot: ["SHOES"];
		sortOrder: 100056;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesLysandre = AvatarCustomization<
	"AVATAR_m_shoes_lysandre",
	{
		assetName: "m_shoes_lysandre_0";
		bundleName: "m_shoes_lysandre_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_lysandre_0";
		iconName: "m_shoes_lysandre_00_bundle_icon";
		setNames: ["lysandre"];
		slot: ["SHOES"];
		sortOrder: 101078;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesMegalopunnyitems = AvatarCustomization<
	"AVATAR_m_shoes_megalopunnyitems",
	{
		assetName: "m_shoes_megalopunnyitems_0";
		bundleName: "m_shoes_megalopunnyitems_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_megalopunnyitems_0";
		iconName: "m_shoes_megalopunnyitems_00_bundle_icon";
		setNames: ["megalopunnyitems"];
		slot: ["SHOES"];
		sortOrder: 100902;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesMelmetalshoes = AvatarCustomization<
	"AVATAR_m_shoes_melmetalshoes",
	{
		assetName: "m_shoes_melmetalshoes_0";
		bundleName: "m_shoes_melmetalshoes_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_melmetalshoes_0";
		iconName: "m_shoes_melmetalshoes_00_bundle_icon";
		setNames: ["melmetal_jacket", "melmetal_vest"];
		slot: ["SHOES"];
		sortOrder: 100810;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesMewtwo = AvatarCustomization<
	"AVATAR_m_shoes_mewtwo",
	{
		assetName: "m_shoes_mewtwo_0";
		bundleName: "m_shoes_mewtwo_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_mewtwo_0";
		iconName: "m_shoes_mewtwo_0_bundle_icon";
		setNames: ["mewtwo"];
		slot: ["SHOES"];
		sortOrder: 100049;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesNewyear2022 = AvatarCustomization<
	"AVATAR_m_shoes_newyear2022",
	{
		assetName: "m_shoes_newyear2022_0";
		bundleName: "m_shoes_newyear2022_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_newyear2022_0";
		iconName: "m_shoes_newyear2022_00_bundle_icon";
		setNames: ["newyear"];
		slot: ["SHOES"];
		sortOrder: 101098;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesNike2021 = AvatarCustomization<
	"AVATAR_m_shoes_nike2021",
	{
		assetName: "m_shoes_nike2021_0";
		bundleName: "m_shoes_nike2021_bundle";
		enabled: true;
		groupName: "group_sponsor";
		iapSku: "pgorelease.avatar.m_shoes_nike2021_0";
		iconName: "m_shoes_nike2021_00_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 101033;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesOras = AvatarCustomization<
	"AVATAR_m_shoes_oras",
	{
		assetName: "m_shoes_oras_0";
		bundleName: "m_shoes_oras_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "m_shoes_oras_00_bundle_icon";
		setNames: ["oras"];
		slot: ["SHOES"];
		sortOrder: 101361;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShoesPajamas20220 = AvatarCustomization<
	"AVATAR_m_shoes_pajamas2022_0",
	{
		assetName: "m_shoes_pajamas2022_0";
		bundleName: "m_shoes_pajamas2022_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_pajamas2022_0";
		iconName: "m_shoes_pajamas2022_bundle_icon";
		setNames: ["pajamas2022_0"];
		slot: ["SHOES"];
		sortOrder: 101324;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesPajamas20221 = AvatarCustomization<
	"AVATAR_m_shoes_pajamas2022_1",
	{
		assetName: "m_shoes_pajamas2022_1";
		bundleName: "m_shoes_pajamas2022_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_pajamas2022_1";
		iconName: "m_shoes_pajamas2022_bundle_icon";
		setNames: ["pajamas2022_1"];
		slot: ["SHOES"];
		sortOrder: 101330;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesPalmer = AvatarCustomization<
	"AVATAR_m_shoes_palmer",
	{
		assetName: "m_shoes_palmer_0";
		bundleName: "m_shoes_palmer_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_palmer_0";
		iconName: "m_shoes_palmer_00_bundle_icon";
		setNames: ["palmer"];
		slot: ["SHOES"];
		sortOrder: 101369;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesPikachufan0 = AvatarCustomization<
	"AVATAR_m_shoes_pikachufan_0",
	{
		assetName: "m_shoes_pikachufan_0";
		bundleName: "m_shoes_pikachufan_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_pikachufan_0";
		iconName: "m_shoes_pikachufan_bundle_icon";
		setNames: ["pikachufan_0"];
		slot: ["SHOES"];
		sortOrder: 100029;
		unlockBadgeLevel: 50;
		unlockBadgeType: "BADGE_PIKACHU";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesPikachulibre = AvatarCustomization<
	"AVATAR_m_shoes_pikachulibre",
	{
		assetName: "m_shoes_pikachulibre_0";
		bundleName: "m_shoes_pikachulibre_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_pikachulibre_0";
		iconName: "m_shoes_pikachulibre_0_bundle_icon";
		setNames: ["pikachulibre"];
		slot: ["SHOES"];
		sortOrder: 100055;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesProfwillowoutfit = AvatarCustomization<
	"AVATAR_m_shoes_profwillowoutfit",
	{
		assetName: "m_shoes_profwillowoutfit_0";
		bundleName: "m_shoes_profwillowoutfit_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_profwillowoutfit_0";
		iconName: "m_shoes_profwillowoutfit_00_bundle_icon";
		setNames: ["profwillowoutfit"];
		slot: ["SHOES"];
		sortOrder: 101380;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesRegiicejersies = AvatarCustomization<
	"AVATAR_m_shoes_regiicejersies",
	{
		assetName: "m_shoes_regiicejersies_0";
		bundleName: "m_shoes_regiicejersies_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_regiicejersies_0";
		iconName: "m_shoes_regiicejersies_00_bundle_icon";
		setNames: ["regiicejersies"];
		slot: ["SHOES"];
		sortOrder: 100939;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesRegirockjersies = AvatarCustomization<
	"AVATAR_m_shoes_regirockjersies",
	{
		assetName: "m_shoes_regirockjersies_0";
		bundleName: "m_shoes_regirockjersies_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_regirockjersies_0";
		iconName: "m_shoes_regirockjersies_00_bundle_icon";
		setNames: ["regirockjersies"];
		slot: ["SHOES"];
		sortOrder: 100931;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesRegisteeljersies = AvatarCustomization<
	"AVATAR_m_shoes_registeeljersies",
	{
		assetName: "m_shoes_registeeljersies_0";
		bundleName: "m_shoes_registeeljersies_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_registeeljersies_0";
		iconName: "m_shoes_registeeljersies_00_bundle_icon";
		setNames: ["registeeljersies"];
		slot: ["SHOES"];
		sortOrder: 100947;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesReuniclusitems = AvatarCustomization<
	"AVATAR_m_shoes_reuniclusitems",
	{
		assetName: "m_shoes_reuniclusitems_0";
		bundleName: "m_shoes_reuniclusitems_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_reuniclusitems_0";
		iconName: "m_shoes_reuniclusitems_00_bundle_icon";
		setNames: ["reuniclusitems"];
		slot: ["SHOES"];
		sortOrder: 101496;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesRuinmaniac = AvatarCustomization<
	"AVATAR_m_shoes_ruinmaniac",
	{
		assetName: "m_shoes_ruinmaniac_0";
		bundleName: "m_shoes_ruinmaniac_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_ruinmaniac_0";
		iconName: "m_shoes_ruinmaniac_0_bundle_icon";
		setNames: ["ruinmaniac"];
		slot: ["SHOES"];
		sortOrder: 100045;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesSandals = AvatarCustomization<
	"AVATAR_m_shoes_sandals",
	{
		assetName: "m_shoes_sandals_0";
		bundleName: "m_shoes_sandals_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_sandals_0";
		iconName: "m_shoes_sandals_0_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100052;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesSandals1 = AvatarCustomization<
	"AVATAR_m_shoes_sandals_1",
	{
		assetName: "m_shoes_sandals_1";
		bundleName: "m_shoes_sandals_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_sandals_1";
		iconName: "m_shoes_sandals_1_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100051;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesSandals2 = AvatarCustomization<
	"AVATAR_m_shoes_sandals_2",
	{
		assetName: "m_shoes_sandals_2";
		bundleName: "m_shoes_sandals_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_sandals_2";
		iconName: "m_shoes_sandals_2_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100050;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesSolgaleoitems = AvatarCustomization<
	"AVATAR_m_shoes_solgaleoitems",
	{
		assetName: "m_shoes_solgaleoitems_0";
		bundleName: "m_shoes_solgaleoitems_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_solgaleoitems_0";
		iconName: "m_shoes_solgaleoitems_00_bundle_icon";
		setNames: ["solgaleoitems"];
		slot: ["SHOES"];
		sortOrder: 101305;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesSs = AvatarCustomization<
	"AVATAR_m_shoes_ss",
	{
		assetName: "m_shoes_ss_0";
		bundleName: "m_shoes_ss_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "m_shoes_ss_0_bundle_icon";
		setNames: ["ss"];
		slot: ["SHOES"];
		sortOrder: 100054;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShoesSteven = AvatarCustomization<
	"AVATAR_m_shoes_steven",
	{
		assetName: "m_shoes_steven_0";
		bundleName: "m_shoes_steven_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_steven_0";
		iconName: "m_shoes_steven_0_bundle_icon";
		setNames: ["steven"];
		slot: ["SHOES"];
		sortOrder: 100725;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesStevenfirst = AvatarCustomization<
	"AVATAR_m_shoes_stevenfirst",
	{
		assetName: "m_shoes_stevenfirst_0";
		bundleName: "m_shoes_stevenfirst_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_stevenfirst_0";
		iconName: "m_shoes_stevenfirst_00_bundle_icon";
		setNames: ["stevenfirst"];
		slot: ["SHOES"];
		sortOrder: 101313;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesSvcostumescarletschool = AvatarCustomization<
	"AVATAR_m_shoes_svcostumescarletschool",
	{
		assetName: "m_shoes_svcostumescarletschool_0";
		bundleName: "m_shoes_svcostumescarletschool_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "m_shoes_svcostumescarletschool_00_bundle_icon";
		setNames: ["svcostumescarletschool"];
		slot: ["SHOES"];
		sortOrder: 101286;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShoesSvcostumevioletschool = AvatarCustomization<
	"AVATAR_m_shoes_svcostumevioletschool",
	{
		assetName: "m_shoes_svcostumevioletschool_0";
		bundleName: "m_shoes_svcostumevioletschool_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "m_shoes_svcostumevioletschool_00_bundle_icon";
		setNames: ["svcostumevioletschool"];
		slot: ["SHOES"];
		sortOrder: 101294;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShoesSvdlc1 = AvatarCustomization<
	"AVATAR_m_shoes_svdlc1",
	{
		assetName: "m_shoes_svdlc1_0";
		bundleName: "m_shoes_svdlc1_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "m_shoes_svdlc1_00_bundle_icon";
		setNames: ["svdlc"];
		slot: ["SHOES"];
		sortOrder: 101460;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShoesSvdlc2spring = AvatarCustomization<
	"AVATAR_m_shoes_svdlc2spring",
	{
		assetName: "m_shoes_svdlc2spring_0";
		bundleName: "m_shoes_svdlc2spring_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "m_shoes_svdlc2spring_00_bundle_icon";
		setNames: ["svdlc2spring", "svdlc2fall"];
		slot: ["SHOES"];
		sortOrder: 101519;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShoesSwshdlc2costume = AvatarCustomization<
	"AVATAR_m_shoes_swshdlc2costume",
	{
		assetName: "m_shoes_swshdlc2costume_0";
		bundleName: "m_shoes_swshdlc2costume_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "m_shoes_swshdlc2costume_00_bundle_icon";
		setNames: ["swshdlc2costume"];
		slot: ["SHOES"];
		sortOrder: 100794;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShoesSwshdlccostume = AvatarCustomization<
	"AVATAR_m_shoes_swshdlccostume",
	{
		assetName: "m_shoes_swshdlccostume_0";
		bundleName: "m_shoes_swshdlccostume_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "m_shoes_swshdlccostume_00_bundle_icon";
		setNames: ["swshdlccostume"];
		slot: ["SHOES"];
		sortOrder: 100061;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShoesSwshuniformdark = AvatarCustomization<
	"AVATAR_m_shoes_swshuniformdark",
	{
		assetName: "m_shoes_swshuniformdark_0";
		bundleName: "m_shoes_swshuniformdark_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_swshuniformdark_0";
		iconName: "m_shoes_swshuniformdark_00_bundle_icon";
		setNames: ["swshuniformdark"];
		slot: ["SHOES"];
		sortOrder: 101003;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesSwshuniformdefault = AvatarCustomization<
	"AVATAR_m_shoes_swshuniformdefault",
	{
		assetName: "m_shoes_swshuniformdefault_0";
		bundleName: "m_shoes_swshuniformdefault_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "m_shoes_swshuniformdefault_00_bundle_icon";
		setNames: ["swshuniformdefault"];
		slot: ["SHOES"];
		sortOrder: 100993;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShoesSwshuniformdragon = AvatarCustomization<
	"AVATAR_m_shoes_swshuniformdragon",
	{
		assetName: "m_shoes_swshuniformdragon_0";
		bundleName: "m_shoes_swshuniformdragon_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_swshuniformdragon_0";
		iconName: "m_shoes_swshuniformdragon_00_bundle_icon";
		setNames: ["swshuniformdragon"];
		slot: ["SHOES"];
		sortOrder: 100983;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesSylveonitems = AvatarCustomization<
	"AVATAR_m_shoes_sylveonitems",
	{
		assetName: "m_shoes_sylveonitems_0";
		bundleName: "m_shoes_sylveonitems_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_sylveonitems_0";
		iconName: "m_shoes_sylveonitems_00_bundle_icon";
		setNames: ["sylveonitems"];
		slot: ["SHOES"];
		sortOrder: 100916;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesTeamaqua = AvatarCustomization<
	"AVATAR_m_shoes_teamaqua",
	{
		assetName: "m_shoes_teamaqua_0";
		bundleName: "m_shoes_teamaqua_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_teamaqua_0";
		iconName: "m_shoes_teamaqua_0_bundle_icon";
		setNames: ["teamaqua"];
		slot: ["SHOES"];
		sortOrder: 100039;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesTeamblanche = AvatarCustomization<
	"AVATAR_m_shoes_teamblanche",
	{
		assetName: "m_shoes_teamblanche_0";
		bundleName: "m_shoes_teamblanche_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_teamblanche_0";
		iconName: "m_shoes_teamblanche_0_bundle_icon";
		setNames: ["teamblanche"];
		slot: ["SHOES"];
		sortOrder: 100046;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesTeamcandela = AvatarCustomization<
	"AVATAR_m_shoes_teamcandela",
	{
		assetName: "m_shoes_teamcandela_0";
		bundleName: "m_shoes_teamcandela_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_teamcandela_0";
		iconName: "m_shoes_teamcandela_0_bundle_icon";
		setNames: ["teamcandela"];
		slot: ["SHOES"];
		sortOrder: 100047;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesTeammagma = AvatarCustomization<
	"AVATAR_m_shoes_teammagma",
	{
		assetName: "m_shoes_teammagma_0";
		bundleName: "m_shoes_teammagma_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_teammagma_0";
		iconName: "m_shoes_teammagma_0_bundle_icon";
		setNames: ["teammagma"];
		slot: ["SHOES"];
		sortOrder: 100040;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesTeamrocket0 = AvatarCustomization<
	"AVATAR_m_shoes_teamrocket_0",
	{
		assetName: "m_shoes_teamrocket_0";
		bundleName: "m_shoes_teamrocket_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_teamrocket_0";
		iconName: "m_shoes_teamrocket_0_bundle_icon";
		setNames: ["teamrocket_0"];
		slot: ["SHOES"];
		sortOrder: 100028;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesTeamrocket1 = AvatarCustomization<
	"AVATAR_m_shoes_teamrocket_1",
	{
		assetName: "m_shoes_teamrocket_1";
		bundleName: "m_shoes_teamrocket_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_teamrocket_1";
		iconName: "m_shoes_teamrocket_1_bundle_icon";
		setNames: ["teamrocket_1"];
		slot: ["SHOES"];
		sortOrder: 100027;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesTeamskull = AvatarCustomization<
	"AVATAR_m_shoes_teamskull",
	{
		assetName: "m_shoes_teamskull_0";
		bundleName: "m_shoes_teamskull_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_teamskull_0";
		iconName: "m_shoes_teamskull_00_bundle_icon";
		setNames: ["teamskull"];
		slot: ["SHOES"];
		sortOrder: 101167;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesTeamspark = AvatarCustomization<
	"AVATAR_m_shoes_teamspark",
	{
		assetName: "m_shoes_teamspark_0";
		bundleName: "m_shoes_teamspark_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_teamspark_0";
		iconName: "m_shoes_teamspark_0_bundle_icon";
		setNames: ["teamspark"];
		slot: ["SHOES"];
		sortOrder: 100048;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesUltrareconsquad = AvatarCustomization<
	"AVATAR_m_shoes_ultraReconSquad",
	{
		assetName: "m_shoes_ultraReconSquad_0";
		bundleName: "m_shoes_ultrareconsquad_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_ultraReconSquad_0";
		iconName: "m_shoes_ultrareconsquad_00_bundle_icon";
		setNames: ["ultraReconSquad", "ultraReconSquadB"];
		slot: ["SHOES"];
		sortOrder: 101247;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesUltra0 = AvatarCustomization<
	"AVATAR_m_shoes_ultra_0",
	{
		assetName: "m_shoes_ultra_0";
		bundleName: "m_shoes_ultra_bundle";
		enabled: true;
		groupName: "group_shoes";
		iconName: "m_shoes_ultra_bundle_icon";
		setNames: ["ultra_0"];
		slot: ["SHOES"];
		sortOrder: 100019;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMShoesVeterantrainerxy = AvatarCustomization<
	"AVATAR_m_shoes_veterantrainerxy",
	{
		assetName: "m_shoes_veterantrainerxy_0";
		bundleName: "m_shoes_veterantrainerxy_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_veterantrainerxy_0";
		iconName: "m_shoes_veterantrainerxy_0_bundle_icon";
		setNames: ["veterantrainerxy"];
		slot: ["SHOES"];
		sortOrder: 100041;
		unlockBadgeLevel: 200;
		unlockBadgeType: "BADGE_MASTER_LEAGUE";
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesWcs2022winnersitems = AvatarCustomization<
	"AVATAR_m_shoes_wcs2022winnersitems",
	{
		assetName: "m_shoes_wcs2022winnersitems_0";
		bundleName: "m_shoes_wcs2022winnersitems_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_wcs2022winnersitems_0";
		iconName: "m_shoes_wcs2022winnersitems_00_bundle_icon";
		setNames: ["wcs2022winnersitems"];
		slot: ["SHOES"];
		sortOrder: 101222;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesWcs2023winnersitems = AvatarCustomization<
	"AVATAR_m_shoes_wcs2023winnersitems",
	{
		assetName: "m_shoes_wcs2023winnersitems_0";
		bundleName: "m_shoes_wcs2023winnersitems_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_wcs2023winnersitems_0";
		iconName: "m_shoes_wcs2023winnersitems_00_bundle_icon";
		setNames: ["boxingoutfit"];
		slot: ["SHOES"];
		sortOrder: 101440;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesWinterboots2023 = AvatarCustomization<
	"AVATAR_m_shoes_winterboots2023",
	{
		assetName: "m_shoes_winterboots2023_0";
		bundleName: "m_shoes_winterboots2023_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_winterboots2023_0";
		iconName: "m_shoes_winterboots2023_00_bundle_icon";
		setNames: ["winter2023"];
		slot: ["SHOES"];
		sortOrder: 101528;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesWinterboots0 = AvatarCustomization<
	"AVATAR_m_shoes_winterboots_0",
	{
		assetName: "m_shoes_winterboots_0";
		bundleName: "m_shoes_winterboots_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_winterboots_0";
		iconName: "m_shoes_winterboots_00_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100839;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesWinterboots1 = AvatarCustomization<
	"AVATAR_m_shoes_winterboots_1",
	{
		assetName: "m_shoes_winterboots_1";
		bundleName: "m_shoes_winterboots_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_winterboots_1";
		iconName: "m_shoes_winterboots_01_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100840;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesWinterboots2 = AvatarCustomization<
	"AVATAR_m_shoes_winterboots_2",
	{
		assetName: "m_shoes_winterboots_2";
		bundleName: "m_shoes_winterboots_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_winterboots_2";
		iconName: "m_shoes_winterboots_02_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100841;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMShoesWinterboots3 = AvatarCustomization<
	"AVATAR_m_shoes_winterboots_3",
	{
		assetName: "m_shoes_winterboots_3";
		bundleName: "m_shoes_winterboots_bundle";
		enabled: true;
		groupName: "group_shoes";
		iapSku: "pgorelease.avatar.m_shoes_winterboots_3";
		iconName: "m_shoes_winterboots_03_bundle_icon";
		slot: ["SHOES"];
		sortOrder: 100842;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMSkin0 = AvatarCustomization<
	"AVATAR_m_skin_0",
	{
		assetName: "m_skin_0";
		enabled: true;
		groupName: "group_skin";
		slot: ["SKIN"];
		sortOrder: 100014;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMSkin1 = AvatarCustomization<
	"AVATAR_m_skin_1",
	{
		assetName: "m_skin_1";
		enabled: true;
		groupName: "group_skin";
		slot: ["SKIN"];
		sortOrder: 100015;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMSkin10 = AvatarCustomization<
	"AVATAR_m_skin_10",
	{
		assetName: "m_skin_10";
		enabled: true;
		groupName: "group_skin";
		slot: ["SKIN"];
		sortOrder: 100007;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMSkin11 = AvatarCustomization<
	"AVATAR_m_skin_11",
	{
		assetName: "m_skin_11";
		enabled: true;
		groupName: "group_skin";
		slot: ["SKIN"];
		sortOrder: 100006;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMSkin2 = AvatarCustomization<
	"AVATAR_m_skin_2",
	{
		assetName: "m_skin_2";
		enabled: true;
		groupName: "group_skin";
		slot: ["SKIN"];
		sortOrder: 100012;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMSkin3 = AvatarCustomization<
	"AVATAR_m_skin_3",
	{
		assetName: "m_skin_3";
		enabled: true;
		groupName: "group_skin";
		slot: ["SKIN"];
		sortOrder: 100010;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMSkin4 = AvatarCustomization<
	"AVATAR_m_skin_4",
	{
		assetName: "m_skin_4";
		enabled: true;
		groupName: "group_skin";
		slot: ["SKIN"];
		sortOrder: 100017;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMSkin5 = AvatarCustomization<
	"AVATAR_m_skin_5",
	{
		assetName: "m_skin_5";
		enabled: true;
		groupName: "group_skin";
		slot: ["SKIN"];
		sortOrder: 100016;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMSkin6 = AvatarCustomization<
	"AVATAR_m_skin_6",
	{
		assetName: "m_skin_6";
		enabled: true;
		groupName: "group_skin";
		slot: ["SKIN"];
		sortOrder: 100013;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMSkin7 = AvatarCustomization<
	"AVATAR_m_skin_7",
	{
		assetName: "m_skin_7";
		enabled: true;
		groupName: "group_skin";
		slot: ["SKIN"];
		sortOrder: 100011;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMSkin8 = AvatarCustomization<
	"AVATAR_m_skin_8",
	{
		assetName: "m_skin_8";
		enabled: true;
		groupName: "group_skin";
		slot: ["SKIN"];
		sortOrder: 100009;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMSkin9 = AvatarCustomization<
	"AVATAR_m_skin_9",
	{
		assetName: "m_skin_9";
		enabled: true;
		groupName: "group_skin";
		slot: ["SKIN"];
		sortOrder: 100008;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMSocksDefault0 = AvatarCustomization<
	"AVATAR_m_socks_default_0",
	{
		assetName: "m_socks_default_0";
		bundleName: "m_socks_default_bundle";
		enabled: true;
		groupName: "group_socks";
		iconName: "m_socks_default_bundle_icon";
		slot: ["SOCKS"];
		sortOrder: 100005;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMSocksDefault1 = AvatarCustomization<
	"AVATAR_m_socks_default_1",
	{
		assetName: "m_socks_default_1";
		bundleName: "m_socks_default_bundle";
		enabled: true;
		groupName: "group_socks";
		iconName: "m_socks_default_bundle_icon";
		slot: ["SOCKS"];
		sortOrder: 100004;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMSocksDefault2 = AvatarCustomization<
	"AVATAR_m_socks_default_2",
	{
		assetName: "m_socks_default_2";
		bundleName: "m_socks_default_bundle";
		enabled: true;
		groupName: "group_socks";
		iconName: "m_socks_default_bundle_icon";
		slot: ["SOCKS"];
		sortOrder: 100003;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMSocksDefault3 = AvatarCustomization<
	"AVATAR_m_socks_default_3",
	{
		assetName: "m_socks_default_3";
		bundleName: "m_socks_default_bundle";
		enabled: true;
		groupName: "group_socks";
		iconName: "m_socks_default_bundle_icon";
		slot: ["SOCKS"];
		sortOrder: 100002;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMSocksEmpty = AvatarCustomization<
	"AVATAR_m_socks_empty",
	{
		assetName: "m_socks_empty";
		bundleName: "m_socks_empty_bundle";
		enabled: true;
		groupName: "group_socks";
		iconName: "m_socks_empty_bundle_icon";
		slot: ["SOCKS"];
		sortOrder: 100001;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMSocksFw2022 = AvatarCustomization<
	"AVATAR_m_socks_fw2022",
	{
		assetName: "m_socks_fw2022_0";
		bundleName: "m_socks_fw2022_bundle";
		enabled: true;
		groupName: "group_socks";
		iapSku: "pgorelease.avatar.m_socks_fw2022_0";
		iconName: "m_socks_fw2022_00_bundle_icon";
		setNames: ["fw2022"];
		slot: ["SOCKS"];
		sortOrder: 101262;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMSocksSneakersocks0 = AvatarCustomization<
	"AVATAR_m_socks_sneakersocks_0",
	{
		assetName: "m_socks_sneakersocks_0";
		bundleName: "m_socks_sneakersocks_bundle";
		enabled: true;
		groupName: "group_socks";
		iconName: "m_socks_sneakersocks_00_bundle_icon";
		slot: ["SOCKS"];
		sortOrder: 101122;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMSocksSneakersocks1 = AvatarCustomization<
	"AVATAR_m_socks_sneakersocks_1",
	{
		assetName: "m_socks_sneakersocks_1";
		bundleName: "m_socks_sneakersocks_bundle";
		enabled: true;
		groupName: "group_socks";
		iconName: "m_socks_sneakersocks_01_bundle_icon";
		slot: ["SOCKS"];
		sortOrder: 101123;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMSocksSollunaitems = AvatarCustomization<
	"AVATAR_m_socks_sollunaitems",
	{
		assetName: "m_socks_sollunaitems_0";
		bundleName: "m_socks_sollunaitems_bundle";
		enabled: true;
		groupName: "group_socks";
		iapSku: "pgorelease.avatar.m_socks_sollunaitems_0";
		iconName: "m_socks_sollunaitems_00_bundle_icon";
		setNames: ["solgaleoitems", "lunalaitems"];
		slot: ["SOCKS"];
		sortOrder: 101308;
		unlockType: "IAP_CLOTHING";
	}
>;
export type AvatarCustomizationMSocksSwshuniformdefault = AvatarCustomization<
	"AVATAR_m_socks_swshuniformdefault",
	{
		assetName: "m_socks_swshuniformdefault_0";
		bundleName: "m_socks_swshuniformdefault_bundle";
		enabled: true;
		groupName: "group_socks";
		iconName: "m_socks_swshuniformdefault_00_bundle_icon";
		setNames: ["swshuniformdefault"];
		slot: ["SOCKS"];
		sortOrder: 100995;
		unlockType: "DEFAULT";
	}
>;
export type AvatarCustomizationMSocksSwshuniformdragon = AvatarCustomization<
	"AVATAR_m_socks_swshuniformdragon",
	{
		assetName: "m_socks_swshuniformdragon_0";
		bundleName: "m_socks_swshuniformdragon_bundle";
		enabled: true;
		groupName: "group_socks";
		iapSku: "pgorelease.avatar.m_socks_swshuniformdragon_0";
		iconName: "m_socks_swshuniformdragon_00_bundle_icon";
		setNames: ["swshuniformdragon"];
		slot: ["SOCKS"];
		sortOrder: 100985;
		unlockType: "IAP_CLOTHING";
	}
>;

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
