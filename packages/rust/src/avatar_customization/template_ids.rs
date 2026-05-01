//! Generated from Pokémon GO masterfile — group "avatarCustomization" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum AvatarCustomizationTemplateId {
    #[serde(rename = "AVATAR_f_backpack_alolaitemslittenbp")]
    AvatarFBackpackAlolaitemslittenbp,
    #[serde(rename = "AVATAR_f_backpack_alolaitemspoppliobp")]
    AvatarFBackpackAlolaitemspoppliobp,
    #[serde(rename = "AVATAR_f_backpack_alolaitemsrowletbp")]
    AvatarFBackpackAlolaitemsrowletbp,
    #[serde(rename = "AVATAR_f_backpack_animegou")]
    AvatarFBackpackAnimegou,
    #[serde(rename = "AVATAR_f_backpack_backpacker")]
    AvatarFBackpackBackpacker,
    #[serde(rename = "AVATAR_f_backpack_combeebackpack")]
    AvatarFBackpackCombeebackpack,
    #[serde(rename = "AVATAR_f_backpack_combeebackpack_01")]
    AvatarFBackpackCombeebackpack01,
    #[serde(rename = "AVATAR_f_backpack_cute_0")]
    AvatarFBackpackCute0,
    #[serde(rename = "AVATAR_f_backpack_dedenneitems")]
    AvatarFBackpackDedenneitems,
    #[serde(rename = "AVATAR_f_backpack_default_0")]
    AvatarFBackpackDefault0,
    #[serde(rename = "AVATAR_f_backpack_default_1")]
    AvatarFBackpackDefault1,
    #[serde(rename = "AVATAR_f_backpack_default_2")]
    AvatarFBackpackDefault2,
    #[serde(rename = "AVATAR_f_backpack_default_3")]
    AvatarFBackpackDefault3,
    #[serde(rename = "AVATAR_f_backpack_egg-incubator")]
    AvatarFBackpackEggIncubator,
    #[serde(rename = "AVATAR_f_backpack_eggbackpack_0")]
    AvatarFBackpackEggbackpack0,
    #[serde(rename = "AVATAR_f_backpack_eggbackpack_1")]
    AvatarFBackpackEggbackpack1,
    #[serde(rename = "AVATAR_f_backpack_eggbackpack_2")]
    AvatarFBackpackEggbackpack2,
    #[serde(rename = "AVATAR_f_backpack_empty")]
    AvatarFBackpackEmpty,
    #[serde(rename = "AVATAR_f_backpack_frlg_0")]
    AvatarFBackpackFrlg0,
    #[serde(rename = "AVATAR_f_backpack_genesecteventitem")]
    AvatarFBackpackGenesecteventitem,
    #[serde(rename = "AVATAR_f_backpack_gengar_0")]
    AvatarFBackpackGengar0,
    #[serde(rename = "AVATAR_f_backpack_giratinaitems")]
    AvatarFBackpackGiratinaitems,
    #[serde(rename = "AVATAR_f_backpack_guccibackpack")]
    AvatarFBackpackGuccibackpack,
    #[serde(rename = "AVATAR_f_backpack_guitarcasebackpack")]
    AvatarFBackpackGuitarcasebackpack,
    #[serde(rename = "AVATAR_f_backpack_hgss_0")]
    AvatarFBackpackHgss0,
    #[serde(rename = "AVATAR_f_backpack_hououbackpack")]
    AvatarFBackpackHououbackpack,
    #[serde(rename = "AVATAR_f_backpack_kakureonpouch")]
    AvatarFBackpackKakureonpouch,
    #[serde(rename = "AVATAR_f_backpack_komala")]
    AvatarFBackpackKomala,
    #[serde(rename = "AVATAR_f_backpack_longchampbp")]
    AvatarFBackpackLongchampbp,
    #[serde(rename = "AVATAR_f_backpack_lunalaitems")]
    AvatarFBackpackLunalaitems,
    #[serde(rename = "AVATAR_f_backpack_lunarNewYr")]
    AvatarFBackpackLunarNewYr,
    #[serde(rename = "AVATAR_f_backpack_mimikyubp")]
    AvatarFBackpackMimikyubp,
    #[serde(rename = "AVATAR_f_backpack_movie2020")]
    AvatarFBackpackMovie2020,
    #[serde(rename = "AVATAR_f_backpack_naganadelawings")]
    AvatarFBackpackNaganadelawings,
    #[serde(rename = "AVATAR_f_backpack_nike2021")]
    AvatarFBackpackNike2021,
    #[serde(rename = "AVATAR_f_backpack_pamobackpack")]
    AvatarFBackpackPamobackpack,
    #[serde(rename = "AVATAR_f_backpack_pkmnhoodie001")]
    AvatarFBackpackPkmnhoodie001,
    #[serde(rename = "AVATAR_f_backpack_pkmnhoodie004")]
    AvatarFBackpackPkmnhoodie004,
    #[serde(rename = "AVATAR_f_backpack_pkmnhoodie007")]
    AvatarFBackpackPkmnhoodie007,
    #[serde(rename = "AVATAR_f_backpack_ruinmaniac")]
    AvatarFBackpackRuinmaniac,
    #[serde(rename = "AVATAR_f_backpack_snapcamera")]
    AvatarFBackpackSnapcamera,
    #[serde(rename = "AVATAR_f_backpack_ss")]
    AvatarFBackpackSs,
    #[serde(rename = "AVATAR_f_backpack_svcostumescarletschool")]
    AvatarFBackpackSvcostumescarletschool,
    #[serde(rename = "AVATAR_f_backpack_svcostumevioletschool")]
    AvatarFBackpackSvcostumevioletschool,
    #[serde(rename = "AVATAR_f_backpack_svdlc1")]
    AvatarFBackpackSvdlc1,
    #[serde(rename = "AVATAR_f_backpack_svdlc2spring")]
    AvatarFBackpackSvdlc2spring,
    #[serde(rename = "AVATAR_f_backpack_swshdlc2costume")]
    AvatarFBackpackSwshdlc2costume,
    #[serde(rename = "AVATAR_f_backpack_swshdlccostume")]
    AvatarFBackpackSwshdlccostume,
    #[serde(rename = "AVATAR_f_backpack_togepibackpack")]
    AvatarFBackpackTogepibackpack,
    #[serde(rename = "AVATAR_f_backpack_ultra_0")]
    AvatarFBackpackUltra0,
    #[serde(rename = "AVATAR_f_backpack_verizon2021")]
    AvatarFBackpackVerizon2021,
    #[serde(rename = "AVATAR_f_backpack_zubatbp")]
    AvatarFBackpackZubatbp,
    #[serde(rename = "AVATAR_f_belt_acetrainerbw")]
    AvatarFBeltAcetrainerbw,
    #[serde(rename = "AVATAR_f_belt_default_0")]
    AvatarFBeltDefault0,
    #[serde(rename = "AVATAR_f_belt_default_1")]
    AvatarFBeltDefault1,
    #[serde(rename = "AVATAR_f_belt_default_2")]
    AvatarFBeltDefault2,
    #[serde(rename = "AVATAR_f_belt_default_3")]
    AvatarFBeltDefault3,
    #[serde(rename = "AVATAR_f_belt_default_4")]
    AvatarFBeltDefault4,
    #[serde(rename = "AVATAR_f_belt_default_5")]
    AvatarFBeltDefault5,
    #[serde(rename = "AVATAR_f_belt_default_6")]
    AvatarFBeltDefault6,
    #[serde(rename = "AVATAR_f_belt_default_7")]
    AvatarFBeltDefault7,
    #[serde(rename = "AVATAR_f_belt_default_8")]
    AvatarFBeltDefault8,
    #[serde(rename = "AVATAR_f_belt_empty")]
    AvatarFBeltEmpty,
    #[serde(rename = "AVATAR_f_belt_simple_0")]
    AvatarFBeltSimple0,
    #[serde(rename = "AVATAR_f_belt_simple_1")]
    AvatarFBeltSimple1,
    #[serde(rename = "AVATAR_f_belt_simple_2")]
    AvatarFBeltSimple2,
    #[serde(rename = "AVATAR_f_belt_simple_3")]
    AvatarFBeltSimple3,
    #[serde(rename = "AVATAR_f_belt_teamrocket_0")]
    AvatarFBeltTeamrocket0,
    #[serde(rename = "AVATAR_f_belt_teamrocket_1")]
    AvatarFBeltTeamrocket1,
    #[serde(rename = "AVATAR_f_eyes_0")]
    AvatarFEyes0,
    #[serde(rename = "AVATAR_f_eyes_1")]
    AvatarFEyes1,
    #[serde(rename = "AVATAR_f_eyes_2")]
    AvatarFEyes2,
    #[serde(rename = "AVATAR_f_eyes_3")]
    AvatarFEyes3,
    #[serde(rename = "AVATAR_f_eyes_4")]
    AvatarFEyes4,
    #[serde(rename = "AVATAR_f_face_3dmask_00")]
    AvatarFFace3dmask00,
    #[serde(rename = "AVATAR_f_face_3dmask_01")]
    AvatarFFace3dmask01,
    #[serde(rename = "AVATAR_f_face_3dmask_02")]
    AvatarFFace3dmask02,
    #[serde(rename = "AVATAR_f_face_banettemask")]
    AvatarFFaceBanettemask,
    #[serde(rename = "AVATAR_f_face_dayofthedead")]
    AvatarFFaceDayofthedead,
    #[serde(rename = "AVATAR_f_face_defaultmask")]
    AvatarFFaceDefaultmask,
    #[serde(rename = "AVATAR_f_face_empty")]
    AvatarFFaceEmpty,
    #[serde(rename = "AVATAR_f_face_facestickerghostpika")]
    AvatarFFaceFacestickerghostpika,
    #[serde(rename = "AVATAR_f_face_facestickerpikachu")]
    AvatarFFaceFacestickerpikachu,
    #[serde(rename = "AVATAR_f_face_facestickerpokeball")]
    AvatarFFaceFacestickerpokeball,
    #[serde(rename = "AVATAR_f_face_festOfColors_00")]
    AvatarFFaceFestOfColors00,
    #[serde(rename = "AVATAR_f_face_festOfColors_01")]
    AvatarFFaceFestOfColors01,
    #[serde(rename = "AVATAR_f_face_festOfColors_02")]
    AvatarFFaceFestOfColors02,
    #[serde(rename = "AVATAR_f_face_gracidea")]
    AvatarFFaceGracidea,
    #[serde(rename = "AVATAR_f_face_holiday2022santacostumes")]
    AvatarFFaceHoliday2022santacostumes,
    #[serde(rename = "AVATAR_f_face_pikachumask")]
    AvatarFFacePikachumask,
    #[serde(rename = "AVATAR_f_face_sableyemask")]
    AvatarFFaceSableyemask,
    #[serde(rename = "AVATAR_f_face_teamskull")]
    AvatarFFaceTeamskull,
    #[serde(rename = "AVATAR_f_face_toxelmask")]
    AvatarFFaceToxelmask,
    #[serde(rename = "AVATAR_f_face_verizon2020mask")]
    AvatarFFaceVerizon2020mask,
    #[serde(rename = "AVATAR_f_glasses_3d")]
    AvatarFGlasses3d,
    #[serde(rename = "AVATAR_f_glasses_cutieflysleepmask")]
    AvatarFGlassesCutieflysleepmask,
    #[serde(rename = "AVATAR_f_glasses_divingsuit")]
    AvatarFGlassesDivingsuit,
    #[serde(rename = "AVATAR_f_glasses_drpikachu")]
    AvatarFGlassesDrpikachu,
    #[serde(rename = "AVATAR_f_glasses_empty")]
    AvatarFGlassesEmpty,
    #[serde(rename = "AVATAR_f_glasses_frillishglasses")]
    AvatarFGlassesFrillishglasses,
    #[serde(rename = "AVATAR_f_glasses_fw2022")]
    AvatarFGlassesFw2022,
    #[serde(rename = "AVATAR_f_glasses_gimmighoulitems")]
    AvatarFGlassesGimmighoulitems,
    #[serde(rename = "AVATAR_f_glasses_goteamrocketarlo")]
    AvatarFGlassesGoteamrocketarlo,
    #[serde(rename = "AVATAR_f_glasses_grandoakglasses")]
    AvatarFGlassesGrandoakglasses,
    #[serde(rename = "AVATAR_f_glasses_lugiaglasses")]
    AvatarFGlassesLugiaglasses,
    #[serde(rename = "AVATAR_f_glasses_lv40glasses")]
    AvatarFGlassesLv40glasses,
    #[serde(rename = "AVATAR_f_glasses_mask_0")]
    AvatarFGlassesMask0,
    #[serde(rename = "AVATAR_f_glasses_mask_1")]
    AvatarFGlassesMask1,
    #[serde(rename = "AVATAR_f_glasses_newyear2022")]
    AvatarFGlassesNewyear2022,
    #[serde(rename = "AVATAR_f_glasses_newyearglasses2020")]
    AvatarFGlassesNewyearglasses2020,
    #[serde(rename = "AVATAR_f_glasses_newyearglasses2021")]
    AvatarFGlassesNewyearglasses2021,
    #[serde(rename = "AVATAR_f_glasses_obstagoonitems")]
    AvatarFGlassesObstagoonitems,
    #[serde(rename = "AVATAR_f_glasses_roundsunglasses")]
    AvatarFGlassesRoundsunglasses,
    #[serde(rename = "AVATAR_f_glasses_teardrop_0")]
    AvatarFGlassesTeardrop0,
    #[serde(rename = "AVATAR_f_glasses_thick_0")]
    AvatarFGlassesThick0,
    #[serde(rename = "AVATAR_f_glasses_thick_1")]
    AvatarFGlassesThick1,
    #[serde(rename = "AVATAR_f_glasses_thick_2")]
    AvatarFGlassesThick2,
    #[serde(rename = "AVATAR_f_glasses_thick_3")]
    AvatarFGlassesThick3,
    #[serde(rename = "AVATAR_f_glasses_thick_4")]
    AvatarFGlassesThick4,
    #[serde(rename = "AVATAR_f_gloves_acetrainersm")]
    AvatarFGlovesAcetrainersm,
    #[serde(rename = "AVATAR_f_gloves_battlegirl_0")]
    AvatarFGlovesBattlegirl0,
    #[serde(rename = "AVATAR_f_gloves_bea")]
    AvatarFGlovesBea,
    #[serde(rename = "AVATAR_f_gloves_bwn")]
    AvatarFGlovesBwn,
    #[serde(rename = "AVATAR_f_gloves_default_0")]
    AvatarFGlovesDefault0,
    #[serde(rename = "AVATAR_f_gloves_default_1")]
    AvatarFGlovesDefault1,
    #[serde(rename = "AVATAR_f_gloves_default_2")]
    AvatarFGlovesDefault2,
    #[serde(rename = "AVATAR_f_gloves_default_3")]
    AvatarFGlovesDefault3,
    #[serde(rename = "AVATAR_f_gloves_delibird")]
    AvatarFGlovesDelibird,
    #[serde(rename = "AVATAR_f_gloves_dynamaxswsh")]
    AvatarFGlovesDynamaxswsh,
    #[serde(rename = "AVATAR_f_gloves_empty")]
    AvatarFGlovesEmpty,
    #[serde(rename = "AVATAR_f_gloves_frlg_0")]
    AvatarFGlovesFrlg0,
    #[serde(rename = "AVATAR_f_gloves_geeta")]
    AvatarFGlovesGeeta,
    #[serde(rename = "AVATAR_f_gloves_giovanni")]
    AvatarFGlovesGiovanni,
    #[serde(rename = "AVATAR_f_gloves_guzma")]
    AvatarFGlovesGuzma,
    #[serde(rename = "AVATAR_f_gloves_gymleader_0")]
    AvatarFGlovesGymleader0,
    #[serde(rename = "AVATAR_f_gloves_hoopabangle")]
    AvatarFGlovesHoopabangle,
    #[serde(rename = "AVATAR_f_gloves_korrina")]
    AvatarFGlovesKorrina,
    #[serde(rename = "AVATAR_f_gloves_lysandre")]
    AvatarFGlovesLysandre,
    #[serde(rename = "AVATAR_f_gloves_megabangle")]
    AvatarFGlovesMegabangle,
    #[serde(rename = "AVATAR_f_gloves_megabangleblack")]
    AvatarFGlovesMegabangleblack,
    #[serde(rename = "AVATAR_f_gloves_megabangleblue")]
    AvatarFGlovesMegabangleblue,
    #[serde(rename = "AVATAR_f_gloves_megabanglered")]
    AvatarFGlovesMegabanglered,
    #[serde(rename = "AVATAR_f_gloves_megabangleyellow")]
    AvatarFGlovesMegabangleyellow,
    #[serde(rename = "AVATAR_f_gloves_obstagoonitems")]
    AvatarFGlovesObstagoonitems,
    #[serde(rename = "AVATAR_f_gloves_palmer")]
    AvatarFGlovesPalmer,
    #[serde(rename = "AVATAR_f_gloves_profwillowoutfit")]
    AvatarFGlovesProfwillowoutfit,
    #[serde(rename = "AVATAR_f_gloves_stevenfirst")]
    AvatarFGlovesStevenfirst,
    #[serde(rename = "AVATAR_f_gloves_svdlc2spring")]
    AvatarFGlovesSvdlc2spring,
    #[serde(rename = "AVATAR_f_gloves_swshdlc2costume")]
    AvatarFGlovesSwshdlc2costume,
    #[serde(rename = "AVATAR_f_gloves_swshdlccostume")]
    AvatarFGlovesSwshdlccostume,
    #[serde(rename = "AVATAR_f_gloves_swshuniformchampion")]
    AvatarFGlovesSwshuniformchampion,
    #[serde(rename = "AVATAR_f_gloves_swshuniformdark")]
    AvatarFGlovesSwshuniformdark,
    #[serde(rename = "AVATAR_f_gloves_swshuniformdefault")]
    AvatarFGlovesSwshuniformdefault,
    #[serde(rename = "AVATAR_f_gloves_swshuniformdragon")]
    AvatarFGlovesSwshuniformdragon,
    #[serde(rename = "AVATAR_f_gloves_teamaqua")]
    AvatarFGlovesTeamaqua,
    #[serde(rename = "AVATAR_f_gloves_teammagma")]
    AvatarFGlovesTeammagma,
    #[serde(rename = "AVATAR_f_gloves_teamrocket_0")]
    AvatarFGlovesTeamrocket0,
    #[serde(rename = "AVATAR_f_gloves_teamspark")]
    AvatarFGlovesTeamspark,
    #[serde(rename = "AVATAR_f_gloves_wintergloves2023")]
    AvatarFGlovesWintergloves2023,
    #[serde(rename = "AVATAR_f_gofest_pikachuvisor")]
    AvatarFGofestPikachuvisor,
    #[serde(rename = "AVATAR_f_hair_default_0")]
    AvatarFHairDefault0,
    #[serde(rename = "AVATAR_f_hair_default_1")]
    AvatarFHairDefault1,
    #[serde(rename = "AVATAR_f_hair_default_2")]
    AvatarFHairDefault2,
    #[serde(rename = "AVATAR_f_hair_default_3")]
    AvatarFHairDefault3,
    #[serde(rename = "AVATAR_f_hair_default_4")]
    AvatarFHairDefault4,
    #[serde(rename = "AVATAR_f_hair_default_5")]
    AvatarFHairDefault5,
    #[serde(rename = "AVATAR_f_hair_default_6")]
    AvatarFHairDefault6,
    #[serde(rename = "AVATAR_f_hair_default_7")]
    AvatarFHairDefault7,
    #[serde(rename = "AVATAR_f_hair_default_8")]
    AvatarFHairDefault8,
    #[serde(rename = "AVATAR_f_hair_default_9")]
    AvatarFHairDefault9,
    #[serde(rename = "AVATAR_f_hair_default_10")]
    AvatarFHairDefault10,
    #[serde(rename = "AVATAR_f_hair_default_11")]
    AvatarFHairDefault11,
    #[serde(rename = "AVATAR_f_hair_default_12")]
    AvatarFHairDefault12,
    #[serde(rename = "AVATAR_f_hair_default_13")]
    AvatarFHairDefault13,
    #[serde(rename = "AVATAR_f_hair_default_14")]
    AvatarFHairDefault14,
    #[serde(rename = "AVATAR_f_hair_default_15")]
    AvatarFHairDefault15,
    #[serde(rename = "AVATAR_f_hair_default_16")]
    AvatarFHairDefault16,
    #[serde(rename = "AVATAR_f_hair_default_17")]
    AvatarFHairDefault17,
    #[serde(rename = "AVATAR_f_hair_default_18")]
    AvatarFHairDefault18,
    #[serde(rename = "AVATAR_f_hair_default_19")]
    AvatarFHairDefault19,
    #[serde(rename = "AVATAR_f_hat_6thanniversary")]
    AvatarFHat6thanniversary,
    #[serde(rename = "AVATAR_f_hat_acetrainersm")]
    AvatarFHatAcetrainersm,
    #[serde(rename = "AVATAR_f_hat_adventure_0")]
    AvatarFHatAdventure0,
    #[serde(rename = "AVATAR_f_hat_aseries")]
    AvatarFHatAseries,
    #[serde(rename = "AVATAR_f_hat_bea")]
    AvatarFHatBea,
    #[serde(rename = "AVATAR_f_hat_bidoofhat")]
    AvatarFHatBidoofhat,
    #[serde(rename = "AVATAR_f_hat_bounsweetitems")]
    AvatarFHatBounsweetitems,
    #[serde(rename = "AVATAR_f_hat_burmyearrings11")]
    AvatarFHatBurmyearrings11,
    #[serde(rename = "AVATAR_f_hat_burmyearrings12")]
    AvatarFHatBurmyearrings12,
    #[serde(rename = "AVATAR_f_hat_burmyearrings13")]
    AvatarFHatBurmyearrings13,
    #[serde(rename = "AVATAR_f_hat_bwn")]
    AvatarFHatBwn,
    #[serde(rename = "AVATAR_f_hat_casket_0")]
    AvatarFHatCasket0,
    #[serde(rename = "AVATAR_f_hat_cetoddlehat")]
    AvatarFHatCetoddlehat,
    #[serde(rename = "AVATAR_f_hat_clay")]
    AvatarFHatClay,
    #[serde(rename = "AVATAR_f_hat_cofagrigusitems")]
    AvatarFHatCofagrigusitems,
    #[serde(rename = "AVATAR_f_hat_cosmog")]
    AvatarFHatCosmog,
    #[serde(rename = "AVATAR_f_hat_crownmoon")]
    AvatarFHatCrownmoon,
    #[serde(rename = "AVATAR_f_hat_crownsun")]
    AvatarFHatCrownsun,
    #[serde(rename = "AVATAR_f_hat_cubonehat")]
    AvatarFHatCubonehat,
    #[serde(rename = "AVATAR_f_hat_darumakahat")]
    AvatarFHatDarumakahat,
    #[serde(rename = "AVATAR_f_hat_dedenneitems")]
    AvatarFHatDedenneitems,
    #[serde(rename = "AVATAR_f_hat_default_A_0")]
    AvatarFHatDefaultA0,
    #[serde(rename = "AVATAR_f_hat_default_A_1")]
    AvatarFHatDefaultA1,
    #[serde(rename = "AVATAR_f_hat_default_A_2")]
    AvatarFHatDefaultA2,
    #[serde(rename = "AVATAR_f_hat_default_A_3")]
    AvatarFHatDefaultA3,
    #[serde(rename = "AVATAR_f_hat_default_A_4")]
    AvatarFHatDefaultA4,
    #[serde(rename = "AVATAR_f_hat_default_A_5")]
    AvatarFHatDefaultA5,
    #[serde(rename = "AVATAR_f_hat_default_B_0")]
    AvatarFHatDefaultB0,
    #[serde(rename = "AVATAR_f_hat_default_B_1")]
    AvatarFHatDefaultB1,
    #[serde(rename = "AVATAR_f_hat_deino")]
    AvatarFHatDeino,
    #[serde(rename = "AVATAR_f_hat_delibird")]
    AvatarFHatDelibird,
    #[serde(rename = "AVATAR_f_hat_detectivepikachu")]
    AvatarFHatDetectivepikachu,
    #[serde(rename = "AVATAR_f_hat_diancie")]
    AvatarFHatDiancie,
    #[serde(rename = "AVATAR_f_hat_dp")]
    AvatarFHatDp,
    #[serde(rename = "AVATAR_f_hat_drifloon_0")]
    AvatarFHatDrifloon0,
    #[serde(rename = "AVATAR_f_hat_drpikachu")]
    AvatarFHatDrpikachu,
    #[serde(rename = "AVATAR_f_hat_dusclopsmummy")]
    AvatarFHatDusclopsmummy,
    #[serde(rename = "AVATAR_f_hat_eeveecap")]
    AvatarFHatEeveecap,
    #[serde(rename = "AVATAR_f_hat_elesa")]
    AvatarFHatElesa,
    #[serde(rename = "AVATAR_f_hat_empty")]
    AvatarFHatEmpty,
    #[serde(rename = "AVATAR_f_hat_fedora_0")]
    AvatarFHatFedora0,
    #[serde(rename = "AVATAR_f_hat_fedora_1")]
    AvatarFHatFedora1,
    #[serde(rename = "AVATAR_f_hat_flabebepack")]
    AvatarFHatFlabebepack,
    #[serde(rename = "AVATAR_f_hat_fragment_0")]
    AvatarFHatFragment0,
    #[serde(rename = "AVATAR_f_hat_frlg_0")]
    AvatarFHatFrlg0,
    #[serde(rename = "AVATAR_f_hat_furfrouwig")]
    AvatarFHatFurfrouwig,
    #[serde(rename = "AVATAR_f_hat_fw2022")]
    AvatarFHatFw2022,
    #[serde(rename = "AVATAR_f_hat_galarfarfetchditems")]
    AvatarFHatGalarfarfetchditems,
    #[serde(rename = "AVATAR_f_hat_genesecteventitem")]
    AvatarFHatGenesecteventitem,
    #[serde(rename = "AVATAR_f_hat_gengar_0")]
    AvatarFHatGengar0,
    #[serde(rename = "AVATAR_f_hat_gimmighoulitems")]
    AvatarFHatGimmighoulitems,
    #[serde(rename = "AVATAR_f_hat_giratinaitems")]
    AvatarFHatGiratinaitems,
    #[serde(rename = "AVATAR_f_hat_gladion")]
    AvatarFHatGladion,
    #[serde(rename = "AVATAR_f_hat_goomy")]
    AvatarFHatGoomy,
    #[serde(rename = "AVATAR_f_hat_greavardwig")]
    AvatarFHatGreavardwig,
    #[serde(rename = "AVATAR_f_hat_greencoat")]
    AvatarFHatGreencoat,
    #[serde(rename = "AVATAR_f_hat_growlithehelmet")]
    AvatarFHatGrowlithehelmet,
    #[serde(rename = "AVATAR_f_hat_gtr2024eeveefanmask")]
    AvatarFHatGtr2024eeveefanmask,
    #[serde(rename = "AVATAR_f_hat_gtr2024pikachufanmask")]
    AvatarFHatGtr2024pikachufanmask,
    #[serde(rename = "AVATAR_f_hat_guccihat")]
    AvatarFHatGuccihat,
    #[serde(rename = "AVATAR_f_hat_guzma")]
    AvatarFHatGuzma,
    #[serde(rename = "AVATAR_f_hat_gyaradoscap")]
    AvatarFHatGyaradoscap,
    #[serde(rename = "AVATAR_f_hat_hgss_0")]
    AvatarFHatHgss0,
    #[serde(rename = "AVATAR_f_hat_holiday2022santacostumes")]
    AvatarFHatHoliday2022santacostumes,
    #[serde(rename = "AVATAR_f_hat_holidaybeanie")]
    AvatarFHatHolidaybeanie,
    #[serde(rename = "AVATAR_f_hat_hoopaearmuffs")]
    AvatarFHatHoopaearmuffs,
    #[serde(rename = "AVATAR_f_hat_ingo")]
    AvatarFHatIngo,
    #[serde(rename = "AVATAR_f_hat_kantotourcapgreen")]
    AvatarFHatKantotourcapgreen,
    #[serde(rename = "AVATAR_f_hat_kantotourcapred")]
    AvatarFHatKantotourcapred,
    #[serde(rename = "AVATAR_f_hat_knitted_0")]
    AvatarFHatKnitted0,
    #[serde(rename = "AVATAR_f_hat_knitted_1")]
    AvatarFHatKnitted1,
    #[serde(rename = "AVATAR_f_hat_korrina")]
    AvatarFHatKorrina,
    #[serde(rename = "AVATAR_f_hat_lana")]
    AvatarFHatLana,
    #[serde(rename = "AVATAR_f_hat_laprasbandana")]
    AvatarFHatLaprasbandana,
    #[serde(rename = "AVATAR_f_hat_lasecuritycorps")]
    AvatarFHatLasecuritycorps,
    #[serde(rename = "AVATAR_f_hat_legendofarceus")]
    AvatarFHatLegendofarceus,
    #[serde(rename = "AVATAR_f_hat_litwickhat")]
    AvatarFHatLitwickhat,
    #[serde(rename = "AVATAR_f_hat_loneearrings")]
    AvatarFHatLoneearrings,
    #[serde(rename = "AVATAR_f_hat_lvl50cap")]
    AvatarFHatLvl50cap,
    #[serde(rename = "AVATAR_f_hat_magikarp")]
    AvatarFHatMagikarp,
    #[serde(rename = "AVATAR_f_hat_mareaniehat")]
    AvatarFHatMareaniehat,
    #[serde(rename = "AVATAR_f_hat_megalopunnyitems")]
    AvatarFHatMegalopunnyitems,
    #[serde(rename = "AVATAR_f_hat_megarayquaza")]
    AvatarFHatMegarayquaza,
    #[serde(rename = "AVATAR_f_hat_meltan")]
    AvatarFHatMeltan,
    #[serde(rename = "AVATAR_f_hat_meltanearrings")]
    AvatarFHatMeltanearrings,
    #[serde(rename = "AVATAR_f_hat_mewtwo")]
    AvatarFHatMewtwo,
    #[serde(rename = "AVATAR_f_hat_mimikyu_0")]
    AvatarFHatMimikyu0,
    #[serde(rename = "AVATAR_f_hat_mismagius_0")]
    AvatarFHatMismagius0,
    #[serde(rename = "AVATAR_f_hat_movie2020")]
    AvatarFHatMovie2020,
    #[serde(rename = "AVATAR_f_hat_munnapack_0")]
    AvatarFHatMunnapack0,
    #[serde(rename = "AVATAR_f_hat_munnapack_1")]
    AvatarFHatMunnapack1,
    #[serde(rename = "AVATAR_f_hat_newyear2022")]
    AvatarFHatNewyear2022,
    #[serde(rename = "AVATAR_f_hat_newyearhat2021")]
    AvatarFHatNewyearhat2021,
    #[serde(rename = "AVATAR_f_hat_newyearhat2023")]
    AvatarFHatNewyearhat2023,
    #[serde(rename = "AVATAR_f_hat_nihilegoitems")]
    AvatarFHatNihilegoitems,
    #[serde(rename = "AVATAR_f_hat_noibat")]
    AvatarFHatNoibat,
    #[serde(rename = "AVATAR_f_hat_obstagoonitems")]
    AvatarFHatObstagoonitems,
    #[serde(rename = "AVATAR_f_hat_oras")]
    AvatarFHatOras,
    #[serde(rename = "AVATAR_f_hat_oricorioPink")]
    AvatarFHatOricorioPink,
    #[serde(rename = "AVATAR_f_hat_oricorioPurple")]
    AvatarFHatOricorioPurple,
    #[serde(rename = "AVATAR_f_hat_oricorioRed")]
    AvatarFHatOricorioRed,
    #[serde(rename = "AVATAR_f_hat_oricorioYellow")]
    AvatarFHatOricorioYellow,
    #[serde(rename = "AVATAR_f_hat_partneritemsjan2024hat")]
    AvatarFHatPartneritemsjan2024hat,
    #[serde(rename = "AVATAR_f_hat_phantump")]
    AvatarFHatPhantump,
    #[serde(rename = "AVATAR_f_hat_pikachucap")]
    AvatarFHatPikachucap,
    #[serde(rename = "AVATAR_f_hat_pikachufan_0")]
    AvatarFHatPikachufan0,
    #[serde(rename = "AVATAR_f_hat_pikachulibre")]
    AvatarFHatPikachulibre,
    #[serde(rename = "AVATAR_f_hat_pikachupumpkinhead")]
    AvatarFHatPikachupumpkinhead,
    #[serde(rename = "AVATAR_f_hat_pkmncap_0")]
    AvatarFHatPkmncap0,
    #[serde(rename = "AVATAR_f_hat_pkmncap_1")]
    AvatarFHatPkmncap1,
    #[serde(rename = "AVATAR_f_hat_pkmncap_2")]
    AvatarFHatPkmncap2,
    #[serde(rename = "AVATAR_f_hat_poipole")]
    AvatarFHatPoipole,
    #[serde(rename = "AVATAR_f_hat_profwillowoutfit")]
    AvatarFHatProfwillowoutfit,
    #[serde(rename = "AVATAR_f_hat_regiicejersies")]
    AvatarFHatRegiicejersies,
    #[serde(rename = "AVATAR_f_hat_regirockjersies")]
    AvatarFHatRegirockjersies,
    #[serde(rename = "AVATAR_f_hat_registeeljersies")]
    AvatarFHatRegisteeljersies,
    #[serde(rename = "AVATAR_f_hat_ruinmaniac")]
    AvatarFHatRuinmaniac,
    #[serde(rename = "AVATAR_f_hat_sableyegoggles")]
    AvatarFHatSableyegoggles,
    #[serde(rename = "AVATAR_f_hat_samsungsummer2020")]
    AvatarFHatSamsungsummer2020,
    #[serde(rename = "AVATAR_f_hat_sandygasthat")]
    AvatarFHatSandygasthat,
    #[serde(rename = "AVATAR_f_hat_shayminhat")]
    AvatarFHatShayminhat,
    #[serde(rename = "AVATAR_f_hat_slowpoketailshirts")]
    AvatarFHatSlowpoketailshirts,
    #[serde(rename = "AVATAR_f_hat_snorlaxnightcap")]
    AvatarFHatSnorlaxnightcap,
    #[serde(rename = "AVATAR_f_hat_solgaleoitems")]
    AvatarFHatSolgaleoitems,
    #[serde(rename = "AVATAR_f_hat_ss")]
    AvatarFHatSs,
    #[serde(rename = "AVATAR_f_hat_stantlerheadband")]
    AvatarFHatStantlerheadband,
    #[serde(rename = "AVATAR_f_hat_strawhat")]
    AvatarFHatStrawhat,
    #[serde(rename = "AVATAR_f_hat_summer2023")]
    AvatarFHatSummer2023,
    #[serde(rename = "AVATAR_f_hat_svcostumescarletschool")]
    AvatarFHatSvcostumescarletschool,
    #[serde(rename = "AVATAR_f_hat_svcostumevioletschool")]
    AvatarFHatSvcostumevioletschool,
    #[serde(rename = "AVATAR_f_hat_swshdlc2costume")]
    AvatarFHatSwshdlc2costume,
    #[serde(rename = "AVATAR_f_hat_swshuniformchampion")]
    AvatarFHatSwshuniformchampion,
    #[serde(rename = "AVATAR_f_hat_sylveonitems")]
    AvatarFHatSylveonitems,
    #[serde(rename = "AVATAR_f_hat_tcgcollabtshirtandcap")]
    AvatarFHatTcgcollabtshirtandcap,
    #[serde(rename = "AVATAR_f_hat_teamaqua")]
    AvatarFHatTeamaqua,
    #[serde(rename = "AVATAR_f_hat_teamleadercap_0")]
    AvatarFHatTeamleadercap0,
    #[serde(rename = "AVATAR_f_hat_teamleadercap_1")]
    AvatarFHatTeamleadercap1,
    #[serde(rename = "AVATAR_f_hat_teamleadercap_2")]
    AvatarFHatTeamleadercap2,
    #[serde(rename = "AVATAR_f_hat_teamrocket_0")]
    AvatarFHatTeamrocket0,
    #[serde(rename = "AVATAR_f_hat_teamrocketcap")]
    AvatarFHatTeamrocketcap,
    #[serde(rename = "AVATAR_f_hat_teamskull")]
    AvatarFHatTeamskull,
    #[serde(rename = "AVATAR_f_hat_tophat_0")]
    AvatarFHatTophat0,
    #[serde(rename = "AVATAR_f_hat_ultra_0")]
    AvatarFHatUltra0,
    #[serde(rename = "AVATAR_f_hat_ultraReconSquad")]
    AvatarFHatUltraReconSquad,
    #[serde(rename = "AVATAR_f_hat_ultraReconSquadB")]
    AvatarFHatUltraReconSquadB,
    #[serde(rename = "AVATAR_f_hat_verizon2021")]
    AvatarFHatVerizon2021,
    #[serde(rename = "AVATAR_f_hat_wcs2022winnersitems")]
    AvatarFHatWcs2022winnersitems,
    #[serde(rename = "AVATAR_f_hat_whimsicottearmuff")]
    AvatarFHatWhimsicottearmuff,
    #[serde(rename = "AVATAR_f_hat_willowglasses")]
    AvatarFHatWillowglasses,
    #[serde(rename = "AVATAR_f_hat_woobatearrings")]
    AvatarFHatWoobatearrings,
    #[serde(rename = "AVATAR_f_hat_yamaskhat")]
    AvatarFHatYamaskhat,
    #[serde(rename = "AVATAR_f_hat_yamaskmask")]
    AvatarFHatYamaskmask,
    #[serde(rename = "AVATAR_f_hat_zubathat")]
    AvatarFHatZubathat,
    #[serde(rename = "AVATAR_f_jacket_newyear2022")]
    AvatarFJacketNewyear2022,
    #[serde(rename = "AVATAR_f_necklace_default_0")]
    AvatarFNecklaceDefault0,
    #[serde(rename = "AVATAR_f_necklace_default_1")]
    AvatarFNecklaceDefault1,
    #[serde(rename = "AVATAR_f_necklace_empty")]
    AvatarFNecklaceEmpty,
    #[serde(rename = "AVATAR_f_necklace_heart_0")]
    AvatarFNecklaceHeart0,
    #[serde(rename = "AVATAR_f_necklace_star_0")]
    AvatarFNecklaceStar0,
    #[serde(rename = "AVATAR_f_pants_6thanniversary")]
    AvatarFPants6thanniversary,
    #[serde(rename = "AVATAR_f_pants_7thanniversary")]
    AvatarFPants7thanniversary,
    #[serde(rename = "AVATAR_f_pants_acetrainerbw")]
    AvatarFPantsAcetrainerbw,
    #[serde(rename = "AVATAR_f_pants_animegou")]
    AvatarFPantsAnimegou,
    #[serde(rename = "AVATAR_f_pants_backpacker")]
    AvatarFPantsBackpacker,
    #[serde(rename = "AVATAR_f_pants_battlegirl_0")]
    AvatarFPantsBattlegirl0,
    #[serde(rename = "AVATAR_f_pants_bounsweetitems")]
    AvatarFPantsBounsweetitems,
    #[serde(rename = "AVATAR_f_pants_bwn")]
    AvatarFPantsBwn,
    #[serde(rename = "AVATAR_f_pants_casual_0")]
    AvatarFPantsCasual0,
    #[serde(rename = "AVATAR_f_pants_casual_1")]
    AvatarFPantsCasual1,
    #[serde(rename = "AVATAR_f_pants_clay")]
    AvatarFPantsClay,
    #[serde(rename = "AVATAR_f_pants_default_0")]
    AvatarFPantsDefault0,
    #[serde(rename = "AVATAR_f_pants_default_1")]
    AvatarFPantsDefault1,
    #[serde(rename = "AVATAR_f_pants_default_2")]
    AvatarFPantsDefault2,
    #[serde(rename = "AVATAR_f_pants_default_3")]
    AvatarFPantsDefault3,
    #[serde(rename = "AVATAR_f_pants_default_4")]
    AvatarFPantsDefault4,
    #[serde(rename = "AVATAR_f_pants_default_5")]
    AvatarFPantsDefault5,
    #[serde(rename = "AVATAR_f_pants_denimfashionweek2023")]
    AvatarFPantsDenimfashionweek2023,
    #[serde(rename = "AVATAR_f_pants_dp")]
    AvatarFPantsDp,
    #[serde(rename = "AVATAR_f_pants_fashionWeek2022")]
    AvatarFPantsFashionWeek2022,
    #[serde(rename = "AVATAR_f_pants_flabebepack")]
    AvatarFPantsFlabebepack,
    #[serde(rename = "AVATAR_f_pants_frlg_0")]
    AvatarFPantsFrlg0,
    #[serde(rename = "AVATAR_f_pants_fw2022")]
    AvatarFPantsFw2022,
    #[serde(rename = "AVATAR_f_pants_geeta")]
    AvatarFPantsGeeta,
    #[serde(rename = "AVATAR_f_pants_genderlessskirt")]
    AvatarFPantsGenderlessskirt,
    #[serde(rename = "AVATAR_f_pants_giovanni")]
    AvatarFPantsGiovanni,
    #[serde(rename = "AVATAR_f_pants_gladion")]
    AvatarFPantsGladion,
    #[serde(rename = "AVATAR_f_pants_gothitelleitems")]
    AvatarFPantsGothitelleitems,
    #[serde(rename = "AVATAR_f_pants_green")]
    AvatarFPantsGreen,
    #[serde(rename = "AVATAR_f_pants_greencoat")]
    AvatarFPantsGreencoat,
    #[serde(rename = "AVATAR_f_pants_guzma")]
    AvatarFPantsGuzma,
    #[serde(rename = "AVATAR_f_pants_gymleader_0")]
    AvatarFPantsGymleader0,
    #[serde(rename = "AVATAR_f_pants_gymleader_1")]
    AvatarFPantsGymleader1,
    #[serde(rename = "AVATAR_f_pants_gymleader_2")]
    AvatarFPantsGymleader2,
    #[serde(rename = "AVATAR_f_pants_hala")]
    AvatarFPantsHala,
    #[serde(rename = "AVATAR_f_pants_hgss_0")]
    AvatarFPantsHgss0,
    #[serde(rename = "AVATAR_f_pants_ingo")]
    AvatarFPantsIngo,
    #[serde(rename = "AVATAR_f_pants_loosepants")]
    AvatarFPantsLoosepants,
    #[serde(rename = "AVATAR_f_pants_lunalaitems")]
    AvatarFPantsLunalaitems,
    #[serde(rename = "AVATAR_f_pants_luvdiscpack")]
    AvatarFPantsLuvdiscpack,
    #[serde(rename = "AVATAR_f_pants_lysandre")]
    AvatarFPantsLysandre,
    #[serde(rename = "AVATAR_f_pants_mewtwo")]
    AvatarFPantsMewtwo,
    #[serde(rename = "AVATAR_f_pants_miniskirt_0")]
    AvatarFPantsMiniskirt0,
    #[serde(rename = "AVATAR_f_pants_miniskirt_1")]
    AvatarFPantsMiniskirt1,
    #[serde(rename = "AVATAR_f_pants_miniskirt_2")]
    AvatarFPantsMiniskirt2,
    #[serde(rename = "AVATAR_f_pants_miniskirt_3")]
    AvatarFPantsMiniskirt3,
    #[serde(rename = "AVATAR_f_pants_miniskirt_wave_0")]
    AvatarFPantsMiniskirtWave0,
    #[serde(rename = "AVATAR_f_pants_miniskirt_wave_1")]
    AvatarFPantsMiniskirtWave1,
    #[serde(rename = "AVATAR_f_pants_miniskirt_wave_2")]
    AvatarFPantsMiniskirtWave2,
    #[serde(rename = "AVATAR_f_pants_misty")]
    AvatarFPantsMisty,
    #[serde(rename = "AVATAR_f_pants_munnapack")]
    AvatarFPantsMunnapack,
    #[serde(rename = "AVATAR_f_pants_neon_solid_0")]
    AvatarFPantsNeonSolid0,
    #[serde(rename = "AVATAR_f_pants_neon_solid_1")]
    AvatarFPantsNeonSolid1,
    #[serde(rename = "AVATAR_f_pants_neon_solid_2")]
    AvatarFPantsNeonSolid2,
    #[serde(rename = "AVATAR_f_pants_neon_stripes_0")]
    AvatarFPantsNeonStripes0,
    #[serde(rename = "AVATAR_f_pants_neon_stripes_1")]
    AvatarFPantsNeonStripes1,
    #[serde(rename = "AVATAR_f_pants_newyear2022")]
    AvatarFPantsNewyear2022,
    #[serde(rename = "AVATAR_f_pants_oras")]
    AvatarFPantsOras,
    #[serde(rename = "AVATAR_f_pants_pajamas2022_0")]
    AvatarFPantsPajamas20220,
    #[serde(rename = "AVATAR_f_pants_pajamas2022_1")]
    AvatarFPantsPajamas20221,
    #[serde(rename = "AVATAR_f_pants_palmer")]
    AvatarFPantsPalmer,
    #[serde(rename = "AVATAR_f_pants_pikachufan_0")]
    AvatarFPantsPikachufan0,
    #[serde(rename = "AVATAR_f_pants_pikachulibre")]
    AvatarFPantsPikachulibre,
    #[serde(rename = "AVATAR_f_pants_profwillowoutfit")]
    AvatarFPantsProfwillowoutfit,
    #[serde(rename = "AVATAR_f_pants_pumpkabooitems")]
    AvatarFPantsPumpkabooitems,
    #[serde(rename = "AVATAR_f_pants_regiicejersies")]
    AvatarFPantsRegiicejersies,
    #[serde(rename = "AVATAR_f_pants_regirockjersies")]
    AvatarFPantsRegirockjersies,
    #[serde(rename = "AVATAR_f_pants_registeeljersies")]
    AvatarFPantsRegisteeljersies,
    #[serde(rename = "AVATAR_f_pants_shorts_0")]
    AvatarFPantsShorts0,
    #[serde(rename = "AVATAR_f_pants_shorts_1")]
    AvatarFPantsShorts1,
    #[serde(rename = "AVATAR_f_pants_shorts_2")]
    AvatarFPantsShorts2,
    #[serde(rename = "AVATAR_f_pants_shorts_3")]
    AvatarFPantsShorts3,
    #[serde(rename = "AVATAR_f_pants_skinnyjeans_0")]
    AvatarFPantsSkinnyjeans0,
    #[serde(rename = "AVATAR_f_pants_steven")]
    AvatarFPantsSteven,
    #[serde(rename = "AVATAR_f_pants_stevenfirst")]
    AvatarFPantsStevenfirst,
    #[serde(rename = "AVATAR_f_pants_swshdlc2costume")]
    AvatarFPantsSwshdlc2costume,
    #[serde(rename = "AVATAR_f_pants_swshuniformchampion")]
    AvatarFPantsSwshuniformchampion,
    #[serde(rename = "AVATAR_f_pants_swshuniformdark")]
    AvatarFPantsSwshuniformdark,
    #[serde(rename = "AVATAR_f_pants_swshuniformdefault")]
    AvatarFPantsSwshuniformdefault,
    #[serde(rename = "AVATAR_f_pants_swshuniformdragon")]
    AvatarFPantsSwshuniformdragon,
    #[serde(rename = "AVATAR_f_pants_teamaqua")]
    AvatarFPantsTeamaqua,
    #[serde(rename = "AVATAR_f_pants_teamblanche")]
    AvatarFPantsTeamblanche,
    #[serde(rename = "AVATAR_f_pants_teamcandela")]
    AvatarFPantsTeamcandela,
    #[serde(rename = "AVATAR_f_pants_teammagma")]
    AvatarFPantsTeammagma,
    #[serde(rename = "AVATAR_f_pants_teamrocket_0")]
    AvatarFPantsTeamrocket0,
    #[serde(rename = "AVATAR_f_pants_teamskull")]
    AvatarFPantsTeamskull,
    #[serde(rename = "AVATAR_f_pants_teamspark")]
    AvatarFPantsTeamspark,
    #[serde(rename = "AVATAR_f_pants_turbine_0")]
    AvatarFPantsTurbine0,
    #[serde(rename = "AVATAR_f_pants_turbine_1")]
    AvatarFPantsTurbine1,
    #[serde(rename = "AVATAR_f_pants_turbine_2")]
    AvatarFPantsTurbine2,
    #[serde(rename = "AVATAR_f_pants_ultra_0")]
    AvatarFPantsUltra0,
    #[serde(rename = "AVATAR_f_pants_veterantrainerxy")]
    AvatarFPantsVeterantrainerxy,
    #[serde(rename = "AVATAR_f_pants_wcs2022winnersitems")]
    AvatarFPantsWcs2022winnersitems,
    #[serde(rename = "AVATAR_f_pose_01")]
    AvatarFPose01,
    #[serde(rename = "AVATAR_f_pose_02")]
    AvatarFPose02,
    #[serde(rename = "AVATAR_f_pose_03")]
    AvatarFPose03,
    #[serde(rename = "AVATAR_f_pose_04")]
    AvatarFPose04,
    #[serde(rename = "AVATAR_f_pose_05")]
    AvatarFPose05,
    #[serde(rename = "AVATAR_f_pose_06")]
    AvatarFPose06,
    #[serde(rename = "AVATAR_f_pose_07")]
    AvatarFPose07,
    #[serde(rename = "AVATAR_f_pose_08")]
    AvatarFPose08,
    #[serde(rename = "AVATAR_f_pose_09")]
    AvatarFPose09,
    #[serde(rename = "AVATAR_f_pose_10")]
    AvatarFPose10,
    #[serde(rename = "AVATAR_f_pose_11")]
    AvatarFPose11,
    #[serde(rename = "AVATAR_f_pose_12")]
    AvatarFPose12,
    #[serde(rename = "AVATAR_f_pose_13")]
    AvatarFPose13,
    #[serde(rename = "AVATAR_f_pose_14")]
    AvatarFPose14,
    #[serde(rename = "AVATAR_f_pose_15")]
    AvatarFPose15,
    #[serde(rename = "AVATAR_f_pose_16")]
    AvatarFPose16,
    #[serde(rename = "AVATAR_f_pose_17")]
    AvatarFPose17,
    #[serde(rename = "AVATAR_f_pose_18")]
    AvatarFPose18,
    #[serde(rename = "AVATAR_f_pose_19")]
    AvatarFPose19,
    #[serde(rename = "AVATAR_f_pose_20")]
    AvatarFPose20,
    #[serde(rename = "AVATAR_f_pose_21")]
    AvatarFPose21,
    #[serde(rename = "AVATAR_f_pose_22")]
    AvatarFPose22,
    #[serde(rename = "AVATAR_f_pose_23")]
    AvatarFPose23,
    #[serde(rename = "AVATAR_f_pose_24")]
    AvatarFPose24,
    #[serde(rename = "AVATAR_f_pose_25")]
    AvatarFPose25,
    #[serde(rename = "AVATAR_f_pose_26")]
    AvatarFPose26,
    #[serde(rename = "AVATAR_f_pose_27")]
    AvatarFPose27,
    #[serde(rename = "AVATAR_f_pose_28")]
    AvatarFPose28,
    #[serde(rename = "AVATAR_f_pose_29")]
    AvatarFPose29,
    #[serde(rename = "AVATAR_f_pose_30")]
    AvatarFPose30,
    #[serde(rename = "AVATAR_f_pose_31")]
    AvatarFPose31,
    #[serde(rename = "AVATAR_f_pose_32")]
    AvatarFPose32,
    #[serde(rename = "AVATAR_f_pose_33")]
    AvatarFPose33,
    #[serde(rename = "AVATAR_f_pose_34")]
    AvatarFPose34,
    #[serde(rename = "AVATAR_f_pose_35")]
    AvatarFPose35,
    #[serde(rename = "AVATAR_f_pose_36")]
    AvatarFPose36,
    #[serde(rename = "AVATAR_f_pose_37")]
    AvatarFPose37,
    #[serde(rename = "AVATAR_f_pose_38")]
    AvatarFPose38,
    #[serde(rename = "AVATAR_f_pose_39")]
    AvatarFPose39,
    #[serde(rename = "AVATAR_f_pose_40")]
    AvatarFPose40,
    #[serde(rename = "AVATAR_f_pose_41")]
    AvatarFPose41,
    #[serde(rename = "AVATAR_f_pose_43")]
    AvatarFPose43,
    #[serde(rename = "AVATAR_f_pose_44")]
    AvatarFPose44,
    #[serde(rename = "AVATAR_f_pose_45")]
    AvatarFPose45,
    #[serde(rename = "AVATAR_f_pose_46")]
    AvatarFPose46,
    #[serde(rename = "AVATAR_f_pose_47")]
    AvatarFPose47,
    #[serde(rename = "AVATAR_f_pose_48")]
    AvatarFPose48,
    #[serde(rename = "AVATAR_f_pose_49")]
    AvatarFPose49,
    #[serde(rename = "AVATAR_f_pose_50")]
    AvatarFPose50,
    #[serde(rename = "AVATAR_f_pose_51")]
    AvatarFPose51,
    #[serde(rename = "AVATAR_f_pose_52")]
    AvatarFPose52,
    #[serde(rename = "AVATAR_f_pose_53")]
    AvatarFPose53,
    #[serde(rename = "AVATAR_f_pose_54")]
    AvatarFPose54,
    #[serde(rename = "AVATAR_f_pose_55")]
    AvatarFPose55,
    #[serde(rename = "AVATAR_f_pose_56")]
    AvatarFPose56,
    #[serde(rename = "AVATAR_f_pose_57")]
    AvatarFPose57,
    #[serde(rename = "AVATAR_f_pose_58")]
    AvatarFPose58,
    #[serde(rename = "AVATAR_f_pose_59")]
    AvatarFPose59,
    #[serde(rename = "AVATAR_f_pose_60")]
    AvatarFPose60,
    #[serde(rename = "AVATAR_f_pose_61")]
    AvatarFPose61,
    #[serde(rename = "AVATAR_f_pose_62")]
    AvatarFPose62,
    #[serde(rename = "AVATAR_f_pose_63")]
    AvatarFPose63,
    #[serde(rename = "AVATAR_f_pose_64")]
    AvatarFPose64,
    #[serde(rename = "AVATAR_f_pose_empty")]
    AvatarFPoseEmpty,
    #[serde(rename = "AVATAR_f_shirt_6thanniversary")]
    AvatarFShirt6thanniversary,
    #[serde(rename = "AVATAR_f_shirt_7thanniversary")]
    AvatarFShirt7thanniversary,
    #[serde(rename = "AVATAR_f_shirt_acetrainerbw")]
    AvatarFShirtAcetrainerbw,
    #[serde(rename = "AVATAR_f_shirt_acetrainersm")]
    AvatarFShirtAcetrainersm,
    #[serde(rename = "AVATAR_f_shirt_alolacomfey")]
    AvatarFShirtAlolacomfey,
    #[serde(rename = "AVATAR_f_shirt_animegou")]
    AvatarFShirtAnimegou,
    #[serde(rename = "AVATAR_f_shirt_aseries")]
    AvatarFShirtAseries,
    #[serde(rename = "AVATAR_f_shirt_backpacker")]
    AvatarFShirtBackpacker,
    #[serde(rename = "AVATAR_f_shirt_ballguy")]
    AvatarFShirtBallguy,
    #[serde(rename = "AVATAR_f_shirt_battlegirl_0")]
    AvatarFShirtBattlegirl0,
    #[serde(rename = "AVATAR_f_shirt_bea")]
    AvatarFShirtBea,
    #[serde(rename = "AVATAR_f_shirt_bounsweetitems")]
    AvatarFShirtBounsweetitems,
    #[serde(rename = "AVATAR_f_shirt_buttondown_0")]
    AvatarFShirtButtondown0,
    #[serde(rename = "AVATAR_f_shirt_buzzwoleitems")]
    AvatarFShirtBuzzwoleitems,
    #[serde(rename = "AVATAR_f_shirt_bwn")]
    AvatarFShirtBwn,
    #[serde(rename = "AVATAR_f_shirt_casual_0")]
    AvatarFShirtCasual0,
    #[serde(rename = "AVATAR_f_shirt_casual_1")]
    AvatarFShirtCasual1,
    #[serde(rename = "AVATAR_f_shirt_casual_2")]
    AvatarFShirtCasual2,
    #[serde(rename = "AVATAR_f_shirt_casual_3")]
    AvatarFShirtCasual3,
    #[serde(rename = "AVATAR_f_shirt_celebi_0")]
    AvatarFShirtCelebi0,
    #[serde(rename = "AVATAR_f_shirt_chimcharonesie")]
    AvatarFShirtChimcharonesie,
    #[serde(rename = "AVATAR_f_shirt_clay")]
    AvatarFShirtClay,
    #[serde(rename = "AVATAR_f_shirt_cofagrigusitems")]
    AvatarFShirtCofagrigusitems,
    #[serde(rename = "AVATAR_f_shirt_cosmog")]
    AvatarFShirtCosmog,
    #[serde(rename = "AVATAR_f_shirt_cowichansweater")]
    AvatarFShirtCowichansweater,
    #[serde(rename = "AVATAR_f_shirt_dayofdead")]
    AvatarFShirtDayofdead,
    #[serde(rename = "AVATAR_f_shirt_default_0")]
    AvatarFShirtDefault0,
    #[serde(rename = "AVATAR_f_shirt_default_1")]
    AvatarFShirtDefault1,
    #[serde(rename = "AVATAR_f_shirt_default_2")]
    AvatarFShirtDefault2,
    #[serde(rename = "AVATAR_f_shirt_default_3")]
    AvatarFShirtDefault3,
    #[serde(rename = "AVATAR_f_shirt_default_4")]
    AvatarFShirtDefault4,
    #[serde(rename = "AVATAR_f_shirt_default_5")]
    AvatarFShirtDefault5,
    #[serde(rename = "AVATAR_f_shirt_default_6")]
    AvatarFShirtDefault6,
    #[serde(rename = "AVATAR_f_shirt_default_7")]
    AvatarFShirtDefault7,
    #[serde(rename = "AVATAR_f_shirt_default_8")]
    AvatarFShirtDefault8,
    #[serde(rename = "AVATAR_f_shirt_delibird")]
    AvatarFShirtDelibird,
    #[serde(rename = "AVATAR_f_shirt_delibirdonesie")]
    AvatarFShirtDelibirdonesie,
    #[serde(rename = "AVATAR_f_shirt_denimfashionweek2023")]
    AvatarFShirtDenimfashionweek2023,
    #[serde(rename = "AVATAR_f_shirt_denimjacket")]
    AvatarFShirtDenimjacket,
    #[serde(rename = "AVATAR_f_shirt_detectivepikachu")]
    AvatarFShirtDetectivepikachu,
    #[serde(rename = "AVATAR_f_shirt_diancie")]
    AvatarFShirtDiancie,
    #[serde(rename = "AVATAR_f_shirt_divingsuit")]
    AvatarFShirtDivingsuit,
    #[serde(rename = "AVATAR_f_shirt_diwali2021")]
    AvatarFShirtDiwali2021,
    #[serde(rename = "AVATAR_f_shirt_dp")]
    AvatarFShirtDp,
    #[serde(rename = "AVATAR_f_shirt_drifblim_0")]
    AvatarFShirtDrifblim0,
    #[serde(rename = "AVATAR_f_shirt_dusclopsmummy")]
    AvatarFShirtDusclopsmummy,
    #[serde(rename = "AVATAR_f_shirt_earthday_2018")]
    AvatarFShirtEarthday2018,
    #[serde(rename = "AVATAR_f_shirt_eeveestshirt_00")]
    AvatarFShirtEeveestshirt00,
    #[serde(rename = "AVATAR_f_shirt_eeveestshirt_01")]
    AvatarFShirtEeveestshirt01,
    #[serde(rename = "AVATAR_f_shirt_eeveestshirt_02")]
    AvatarFShirtEeveestshirt02,
    #[serde(rename = "AVATAR_f_shirt_eeveestshirt_03")]
    AvatarFShirtEeveestshirt03,
    #[serde(rename = "AVATAR_f_shirt_eeveestshirt_04")]
    AvatarFShirtEeveestshirt04,
    #[serde(rename = "AVATAR_f_shirt_eeveestshirt_05")]
    AvatarFShirtEeveestshirt05,
    #[serde(rename = "AVATAR_f_shirt_eeveestshirt_06")]
    AvatarFShirtEeveestshirt06,
    #[serde(rename = "AVATAR_f_shirt_eeveestshirt_07")]
    AvatarFShirtEeveestshirt07,
    #[serde(rename = "AVATAR_f_shirt_eeveestshirt_08")]
    AvatarFShirtEeveestshirt08,
    #[serde(rename = "AVATAR_f_shirt_elesa")]
    AvatarFShirtElesa,
    #[serde(rename = "AVATAR_f_shirt_fashionWeek2022")]
    AvatarFShirtFashionWeek2022,
    #[serde(rename = "AVATAR_f_shirt_festivaloflights_00")]
    AvatarFShirtFestivaloflights00,
    #[serde(rename = "AVATAR_f_shirt_festivaloflights_01")]
    AvatarFShirtFestivaloflights01,
    #[serde(rename = "AVATAR_f_shirt_flabebepack")]
    AvatarFShirtFlabebepack,
    #[serde(rename = "AVATAR_f_shirt_fragment_0")]
    AvatarFShirtFragment0,
    #[serde(rename = "AVATAR_f_shirt_frlg_0")]
    AvatarFShirtFrlg0,
    #[serde(rename = "AVATAR_f_shirt_fw2022")]
    AvatarFShirtFw2022,
    #[serde(rename = "AVATAR_f_shirt_galarfarfetchditems")]
    AvatarFShirtGalarfarfetchditems,
    #[serde(rename = "AVATAR_f_shirt_galaxyoutfit")]
    AvatarFShirtGalaxyoutfit,
    #[serde(rename = "AVATAR_f_shirt_geeta")]
    AvatarFShirtGeeta,
    #[serde(rename = "AVATAR_f_shirt_genderlessskirt")]
    AvatarFShirtGenderlessskirt,
    #[serde(rename = "AVATAR_f_shirt_gengar_0")]
    AvatarFShirtGengar0,
    #[serde(rename = "AVATAR_f_shirt_gengaronesie")]
    AvatarFShirtGengaronesie,
    #[serde(rename = "AVATAR_f_shirt_giovanni")]
    AvatarFShirtGiovanni,
    #[serde(rename = "AVATAR_f_shirt_giratinaitems")]
    AvatarFShirtGiratinaitems,
    #[serde(rename = "AVATAR_f_shirt_gladion")]
    AvatarFShirtGladion,
    #[serde(rename = "AVATAR_f_shirt_gofest_2019")]
    AvatarFShirtGofest2019,
    #[serde(rename = "AVATAR_f_shirt_gofest_2020")]
    AvatarFShirtGofest2020,
    #[serde(rename = "AVATAR_f_shirt_gofest_2021")]
    AvatarFShirtGofest2021,
    #[serde(rename = "AVATAR_f_shirt_gofest2022")]
    AvatarFShirtGofest2022,
    #[serde(rename = "AVATAR_f_shirt_gofest2023")]
    AvatarFShirtGofest2023,
    #[serde(rename = "AVATAR_f_shirt_gofest2024darkgray")]
    AvatarFShirtGofest2024darkgray,
    #[serde(rename = "AVATAR_f_shirt_gofest2024gray")]
    AvatarFShirtGofest2024gray,
    #[serde(rename = "AVATAR_f_shirt_gofest2024purple")]
    AvatarFShirtGofest2024purple,
    #[serde(rename = "AVATAR_f_shirt_gofestglobal2023")]
    AvatarFShirtGofestglobal2023,
    #[serde(rename = "AVATAR_f_shirt_goteamrocketarlo")]
    AvatarFShirtGoteamrocketarlo,
    #[serde(rename = "AVATAR_f_shirt_goteamrocketcliff")]
    AvatarFShirtGoteamrocketcliff,
    #[serde(rename = "AVATAR_f_shirt_goteamrocketsierra")]
    AvatarFShirtGoteamrocketsierra,
    #[serde(rename = "AVATAR_f_shirt_gothitelleitems")]
    AvatarFShirtGothitelleitems,
    #[serde(rename = "AVATAR_f_shirt_gotour2023")]
    AvatarFShirtGotour2023,
    #[serde(rename = "AVATAR_f_shirt_gotour2024")]
    AvatarFShirtGotour2024,
    #[serde(rename = "AVATAR_f_shirt_greedentsweater")]
    AvatarFShirtGreedentsweater,
    #[serde(rename = "AVATAR_f_shirt_green")]
    AvatarFShirtGreen,
    #[serde(rename = "AVATAR_f_shirt_greencoat")]
    AvatarFShirtGreencoat,
    #[serde(rename = "AVATAR_f_shirt_gtrtshirt2022_00")]
    AvatarFShirtGtrtshirt202200,
    #[serde(rename = "AVATAR_f_shirt_gtrtshirt2022_01")]
    AvatarFShirtGtrtshirt202201,
    #[serde(rename = "AVATAR_f_shirt_guccitshirts")]
    AvatarFShirtGuccitshirts,
    #[serde(rename = "AVATAR_f_shirt_guzma")]
    AvatarFShirtGuzma,
    #[serde(rename = "AVATAR_f_shirt_gymleader_0")]
    AvatarFShirtGymleader0,
    #[serde(rename = "AVATAR_f_shirt_gymleader_1")]
    AvatarFShirtGymleader1,
    #[serde(rename = "AVATAR_f_shirt_gymleader_2")]
    AvatarFShirtGymleader2,
    #[serde(rename = "AVATAR_f_shirt_hala")]
    AvatarFShirtHala,
    #[serde(rename = "AVATAR_f_shirt_happi")]
    AvatarFShirtHappi,
    #[serde(rename = "AVATAR_f_shirt_happi_1")]
    AvatarFShirtHappi1,
    #[serde(rename = "AVATAR_f_shirt_happi_2")]
    AvatarFShirtHappi2,
    #[serde(rename = "AVATAR_f_shirt_hgss_0")]
    AvatarFShirtHgss0,
    #[serde(rename = "AVATAR_f_shirt_holiday2022santacostumes")]
    AvatarFShirtHoliday2022santacostumes,
    #[serde(rename = "AVATAR_f_shirt_holifestival2021black")]
    AvatarFShirtHolifestival2021black,
    #[serde(rename = "AVATAR_f_shirt_holifestival2021white")]
    AvatarFShirtHolifestival2021white,
    #[serde(rename = "AVATAR_f_shirt_hoopaunboundtshirt")]
    AvatarFShirtHoopaunboundtshirt,
    #[serde(rename = "AVATAR_f_shirt_ingo")]
    AvatarFShirtIngo,
    #[serde(rename = "AVATAR_f_shirt_ingress_0")]
    AvatarFShirtIngress0,
    #[serde(rename = "AVATAR_f_shirt_ingress_e_0")]
    AvatarFShirtIngressE0,
    #[serde(rename = "AVATAR_f_shirt_ingress_r_0")]
    AvatarFShirtIngressR0,
    #[serde(rename = "AVATAR_f_shirt_jessie")]
    AvatarFShirtJessie,
    #[serde(rename = "AVATAR_f_shirt_jirachi")]
    AvatarFShirtJirachi,
    #[serde(rename = "AVATAR_f_shirt_keldeotshirt")]
    AvatarFShirtKeldeotshirt,
    #[serde(rename = "AVATAR_f_shirt_korrina")]
    AvatarFShirtKorrina,
    #[serde(rename = "AVATAR_f_shirt_ladiamondoutfit")]
    AvatarFShirtLadiamondoutfit,
    #[serde(rename = "AVATAR_f_shirt_lana")]
    AvatarFShirtLana,
    #[serde(rename = "AVATAR_f_shirt_lapearloutfit")]
    AvatarFShirtLapearloutfit,
    #[serde(rename = "AVATAR_f_shirt_lasecuritycorps")]
    AvatarFShirtLasecuritycorps,
    #[serde(rename = "AVATAR_f_shirt_latias_latios_0")]
    AvatarFShirtLatiasLatios0,
    #[serde(rename = "AVATAR_f_shirt_legendofarceus")]
    AvatarFShirtLegendofarceus,
    #[serde(rename = "AVATAR_f_shirt_luvdiscpack")]
    AvatarFShirtLuvdiscpack,
    #[serde(rename = "AVATAR_f_shirt_lvl50")]
    AvatarFShirtLvl50,
    #[serde(rename = "AVATAR_f_shirt_lvl50_1")]
    AvatarFShirtLvl501,
    #[serde(rename = "AVATAR_f_shirt_lysandre")]
    AvatarFShirtLysandre,
    #[serde(rename = "AVATAR_f_shirt_marshadowtshirt")]
    AvatarFShirtMarshadowtshirt,
    #[serde(rename = "AVATAR_f_shirt_megalopunnyitems")]
    AvatarFShirtMegalopunnyitems,
    #[serde(rename = "AVATAR_f_shirt_megarayquaza")]
    AvatarFShirtMegarayquaza,
    #[serde(rename = "AVATAR_f_shirt_melmetaljacket")]
    AvatarFShirtMelmetaljacket,
    #[serde(rename = "AVATAR_f_shirt_melmetalvest")]
    AvatarFShirtMelmetalvest,
    #[serde(rename = "AVATAR_f_shirt_meloettatshirt")]
    AvatarFShirtMeloettatshirt,
    #[serde(rename = "AVATAR_f_shirt_meltan")]
    AvatarFShirtMeltan,
    #[serde(rename = "AVATAR_f_shirt_mew_0")]
    AvatarFShirtMew0,
    #[serde(rename = "AVATAR_f_shirt_mewtwo")]
    AvatarFShirtMewtwo,
    #[serde(rename = "AVATAR_f_shirt_misty")]
    AvatarFShirtMisty,
    #[serde(rename = "AVATAR_f_shirt_movie2020jessiejames")]
    AvatarFShirtMovie2020jessiejames,
    #[serde(rename = "AVATAR_f_shirt_munnapack")]
    AvatarFShirtMunnapack,
    #[serde(rename = "AVATAR_f_shirt_nike2021")]
    AvatarFShirtNike2021,
    #[serde(rename = "AVATAR_f_shirt_ocshirt_045")]
    AvatarFShirtOcshirt045,
    #[serde(rename = "AVATAR_f_shirt_ocshirt_108")]
    AvatarFShirtOcshirt108,
    #[serde(rename = "AVATAR_f_shirt_ocshirt_129")]
    AvatarFShirtOcshirt129,
    #[serde(rename = "AVATAR_f_shirt_ocshirt_143")]
    AvatarFShirtOcshirt143,
    #[serde(rename = "AVATAR_f_shirt_oras")]
    AvatarFShirtOras,
    #[serde(rename = "AVATAR_f_shirt_pajamas2022_0")]
    AvatarFShirtPajamas20220,
    #[serde(rename = "AVATAR_f_shirt_pajamas2022_1")]
    AvatarFShirtPajamas20221,
    #[serde(rename = "AVATAR_f_shirt_palmer")]
    AvatarFShirtPalmer,
    #[serde(rename = "AVATAR_f_shirt_partneritemsjan2024hoodie")]
    AvatarFShirtPartneritemsjan2024hoodie,
    #[serde(rename = "AVATAR_f_shirt_partneritemsjan2024tshirt")]
    AvatarFShirtPartneritemsjan2024tshirt,
    #[serde(rename = "AVATAR_f_shirt_pikachufan_0")]
    AvatarFShirtPikachufan0,
    #[serde(rename = "AVATAR_f_shirt_pikachulibre")]
    AvatarFShirtPikachulibre,
    #[serde(rename = "AVATAR_f_shirt_pikachuonesie")]
    AvatarFShirtPikachuonesie,
    #[serde(rename = "AVATAR_f_shirt_pinpukuhoodie")]
    AvatarFShirtPinpukuhoodie,
    #[serde(rename = "AVATAR_f_shirt_pipluponesie")]
    AvatarFShirtPipluponesie,
    #[serde(rename = "AVATAR_f_shirt_pkmnhoodie001")]
    AvatarFShirtPkmnhoodie001,
    #[serde(rename = "AVATAR_f_shirt_pkmnhoodie004")]
    AvatarFShirtPkmnhoodie004,
    #[serde(rename = "AVATAR_f_shirt_pkmnhoodie007")]
    AvatarFShirtPkmnhoodie007,
    #[serde(rename = "AVATAR_f_shirt_pkmnshirts_165")]
    AvatarFShirtPkmnshirts165,
    #[serde(rename = "AVATAR_f_shirt_pkmnshirts_188")]
    AvatarFShirtPkmnshirts188,
    #[serde(rename = "AVATAR_f_shirt_pkmnshirts_201")]
    AvatarFShirtPkmnshirts201,
    #[serde(rename = "AVATAR_f_shirt_pkmnshirts_238")]
    AvatarFShirtPkmnshirts238,
    #[serde(rename = "AVATAR_f_shirt_pkmnshirts2021_00")]
    AvatarFShirtPkmnshirts202100,
    #[serde(rename = "AVATAR_f_shirt_pkmnshirts2021_01")]
    AvatarFShirtPkmnshirts202101,
    #[serde(rename = "AVATAR_f_shirt_pkmnshirts2021_02")]
    AvatarFShirtPkmnshirts202102,
    #[serde(rename = "AVATAR_f_shirt_poloshirt")]
    AvatarFShirtPoloshirt,
    #[serde(rename = "AVATAR_f_shirt_poloshirt_1")]
    AvatarFShirtPoloshirt1,
    #[serde(rename = "AVATAR_f_shirt_poloshirt_2")]
    AvatarFShirtPoloshirt2,
    #[serde(rename = "AVATAR_f_shirt_profwillowoutfit")]
    AvatarFShirtProfwillowoutfit,
    #[serde(rename = "AVATAR_f_shirt_projectguitar")]
    AvatarFShirtProjectguitar,
    #[serde(rename = "AVATAR_f_shirt_pumpkabooitems")]
    AvatarFShirtPumpkabooitems,
    #[serde(rename = "AVATAR_f_shirt_regiicejersies")]
    AvatarFShirtRegiicejersies,
    #[serde(rename = "AVATAR_f_shirt_regirockjersies")]
    AvatarFShirtRegirockjersies,
    #[serde(rename = "AVATAR_f_shirt_registeeljersies")]
    AvatarFShirtRegisteeljersies,
    #[serde(rename = "AVATAR_f_shirt_reuniclusitems")]
    AvatarFShirtReuniclusitems,
    #[serde(rename = "AVATAR_f_shirt_ruinmaniac")]
    AvatarFShirtRuinmaniac,
    #[serde(rename = "AVATAR_f_shirt_safarizone2020")]
    AvatarFShirtSafarizone2020,
    #[serde(rename = "AVATAR_f_shirt_samsungsummer2020")]
    AvatarFShirtSamsungsummer2020,
    #[serde(rename = "AVATAR_f_shirt_shayminlandtshirt")]
    AvatarFShirtShayminlandtshirt,
    #[serde(rename = "AVATAR_f_shirt_shayminskytshirt")]
    AvatarFShirtShayminskytshirt,
    #[serde(rename = "AVATAR_f_shirt_shinymewtshirts")]
    AvatarFShirtShinymewtshirts,
    #[serde(rename = "AVATAR_f_shirt_slowpokeshirts")]
    AvatarFShirtSlowpokeshirts,
    #[serde(rename = "AVATAR_f_shirt_slowpoketailshirts")]
    AvatarFShirtSlowpoketailshirts,
    #[serde(rename = "AVATAR_f_shirt_snorlaxonesie")]
    AvatarFShirtSnorlaxonesie,
    #[serde(rename = "AVATAR_f_shirt_spiritomb_0")]
    AvatarFShirtSpiritomb0,
    #[serde(rename = "AVATAR_f_shirt_spring2021gulpin")]
    AvatarFShirtSpring2021gulpin,
    #[serde(rename = "AVATAR_f_shirt_spring2021plusle")]
    AvatarFShirtSpring2021plusle,
    #[serde(rename = "AVATAR_f_shirt_ss")]
    AvatarFShirtSs,
    #[serde(rename = "AVATAR_f_shirt_steven")]
    AvatarFShirtSteven,
    #[serde(rename = "AVATAR_f_shirt_stevenfirst")]
    AvatarFShirtStevenfirst,
    #[serde(rename = "AVATAR_f_shirt_sukajanblastoise")]
    AvatarFShirtSukajanblastoise,
    #[serde(rename = "AVATAR_f_shirt_sukajancharizard")]
    AvatarFShirtSukajancharizard,
    #[serde(rename = "AVATAR_f_shirt_sukajanhouou")]
    AvatarFShirtSukajanhouou,
    #[serde(rename = "AVATAR_f_shirt_sukajanlugia")]
    AvatarFShirtSukajanlugia,
    #[serde(rename = "AVATAR_f_shirt_sukajanvenusaur")]
    AvatarFShirtSukajanvenusaur,
    #[serde(rename = "AVATAR_f_shirt_summer2023")]
    AvatarFShirtSummer2023,
    #[serde(rename = "AVATAR_f_shirt_sustainability2021")]
    AvatarFShirtSustainability2021,
    #[serde(rename = "AVATAR_f_shirt_svcostumescarletschool")]
    AvatarFShirtSvcostumescarletschool,
    #[serde(rename = "AVATAR_f_shirt_svcostumevioletschool")]
    AvatarFShirtSvcostumevioletschool,
    #[serde(rename = "AVATAR_f_shirt_svdlc1")]
    AvatarFShirtSvdlc1,
    #[serde(rename = "AVATAR_f_shirt_svdlc2fall")]
    AvatarFShirtSvdlc2fall,
    #[serde(rename = "AVATAR_f_shirt_svdlc2spring")]
    AvatarFShirtSvdlc2spring,
    #[serde(rename = "AVATAR_f_shirt_sweater_30_0")]
    AvatarFShirtSweater300,
    #[serde(rename = "AVATAR_f_shirt_sweater_30_1")]
    AvatarFShirtSweater301,
    #[serde(rename = "AVATAR_f_shirt_sweater_30_2")]
    AvatarFShirtSweater302,
    #[serde(rename = "AVATAR_f_shirt_sweater_instinct")]
    AvatarFShirtSweaterInstinct,
    #[serde(rename = "AVATAR_f_shirt_sweater_mystic")]
    AvatarFShirtSweaterMystic,
    #[serde(rename = "AVATAR_f_shirt_sweater_valor")]
    AvatarFShirtSweaterValor,
    #[serde(rename = "AVATAR_f_shirt_swshdlc2costume")]
    AvatarFShirtSwshdlc2costume,
    #[serde(rename = "AVATAR_f_shirt_swshdlccostume")]
    AvatarFShirtSwshdlccostume,
    #[serde(rename = "AVATAR_f_shirt_swshuniformchampion")]
    AvatarFShirtSwshuniformchampion,
    #[serde(rename = "AVATAR_f_shirt_swshuniformdark")]
    AvatarFShirtSwshuniformdark,
    #[serde(rename = "AVATAR_f_shirt_swshuniformdefault")]
    AvatarFShirtSwshuniformdefault,
    #[serde(rename = "AVATAR_f_shirt_swshuniformdragon")]
    AvatarFShirtSwshuniformdragon,
    #[serde(rename = "AVATAR_f_shirt_sylveonitems")]
    AvatarFShirtSylveonitems,
    #[serde(rename = "AVATAR_f_shirt_tanktop_0")]
    AvatarFShirtTanktop0,
    #[serde(rename = "AVATAR_f_shirt_tanktop_1")]
    AvatarFShirtTanktop1,
    #[serde(rename = "AVATAR_f_shirt_tanktop_2")]
    AvatarFShirtTanktop2,
    #[serde(rename = "AVATAR_f_shirt_tanktop_charizard_0")]
    AvatarFShirtTanktopCharizard0,
    #[serde(rename = "AVATAR_f_shirt_tanktop_charizard_1")]
    AvatarFShirtTanktopCharizard1,
    #[serde(rename = "AVATAR_f_shirt_tanktop_charizard_2")]
    AvatarFShirtTanktopCharizard2,
    #[serde(rename = "AVATAR_f_shirt_tanktop_pikachu_0")]
    AvatarFShirtTanktopPikachu0,
    #[serde(rename = "AVATAR_f_shirt_tanktop_pikachu_1")]
    AvatarFShirtTanktopPikachu1,
    #[serde(rename = "AVATAR_f_shirt_tanktop_pikachu_2")]
    AvatarFShirtTanktopPikachu2,
    #[serde(rename = "AVATAR_f_shirt_tcgcollabtshirtandcap")]
    AvatarFShirtTcgcollabtshirtandcap,
    #[serde(rename = "AVATAR_f_shirt_teamaqua")]
    AvatarFShirtTeamaqua,
    #[serde(rename = "AVATAR_f_shirt_teamblanche")]
    AvatarFShirtTeamblanche,
    #[serde(rename = "AVATAR_f_shirt_teamcandela")]
    AvatarFShirtTeamcandela,
    #[serde(rename = "AVATAR_f_shirt_teammagma")]
    AvatarFShirtTeammagma,
    #[serde(rename = "AVATAR_f_shirt_teamrocket_0")]
    AvatarFShirtTeamrocket0,
    #[serde(rename = "AVATAR_f_shirt_teamrocket_1")]
    AvatarFShirtTeamrocket1,
    #[serde(rename = "AVATAR_f_shirt_teamskull")]
    AvatarFShirtTeamskull,
    #[serde(rename = "AVATAR_f_shirt_teamspark")]
    AvatarFShirtTeamspark,
    #[serde(rename = "AVATAR_f_shirt_togepihoodie")]
    AvatarFShirtTogepihoodie,
    #[serde(rename = "AVATAR_f_shirt_tracksuitsgroudon")]
    AvatarFShirtTracksuitsgroudon,
    #[serde(rename = "AVATAR_f_shirt_tracksuitskyogre")]
    AvatarFShirtTracksuitskyogre,
    #[serde(rename = "AVATAR_f_shirt_tshirt_cycling_0")]
    AvatarFShirtTshirtCycling0,
    #[serde(rename = "AVATAR_f_shirt_tshirt_cycling_1")]
    AvatarFShirtTshirtCycling1,
    #[serde(rename = "AVATAR_f_shirt_tshirt_cycling_2")]
    AvatarFShirtTshirtCycling2,
    #[serde(rename = "AVATAR_f_shirt_tshirt_cycling_3")]
    AvatarFShirtTshirtCycling3,
    #[serde(rename = "AVATAR_f_shirt_tshirt_fest_chicago_2017")]
    AvatarFShirtTshirtFestChicago2017,
    #[serde(rename = "AVATAR_f_shirt_tshirt_fest_chicago_2018")]
    AvatarFShirtTshirtFestChicago2018,
    #[serde(rename = "AVATAR_f_shirt_tshirt_global_goals_2017")]
    AvatarFShirtTshirtGlobalGoals2017,
    #[serde(rename = "AVATAR_f_shirt_tshirt_pikachu_0")]
    AvatarFShirtTshirtPikachu0,
    #[serde(rename = "AVATAR_f_shirt_tshirt_pikachu_1")]
    AvatarFShirtTshirtPikachu1,
    #[serde(rename = "AVATAR_f_shirt_tshirt_pikachu_2")]
    AvatarFShirtTshirtPikachu2,
    #[serde(rename = "AVATAR_f_shirt_tshirt_pikachu_3")]
    AvatarFShirtTshirtPikachu3,
    #[serde(rename = "AVATAR_f_shirt_tshirt_pikachu_4")]
    AvatarFShirtTshirtPikachu4,
    #[serde(rename = "AVATAR_f_shirt_tshirt_pikachu_5")]
    AvatarFShirtTshirtPikachu5,
    #[serde(rename = "AVATAR_f_shirt_tshirt_pikachu_6")]
    AvatarFShirtTshirtPikachu6,
    #[serde(rename = "AVATAR_f_shirt_turtwigonesie")]
    AvatarFShirtTurtwigonesie,
    #[serde(rename = "AVATAR_f_shirt_ultra_0")]
    AvatarFShirtUltra0,
    #[serde(rename = "AVATAR_f_shirt_ultraReconSquad")]
    AvatarFShirtUltraReconSquad,
    #[serde(rename = "AVATAR_f_shirt_uniqlotshirts_0")]
    AvatarFShirtUniqlotshirts0,
    #[serde(rename = "AVATAR_f_shirt_uniqlotshirts_1")]
    AvatarFShirtUniqlotshirts1,
    #[serde(rename = "AVATAR_f_shirt_uniqlotshirts_2")]
    AvatarFShirtUniqlotshirts2,
    #[serde(rename = "AVATAR_f_shirt_unwto")]
    AvatarFShirtUnwto,
    #[serde(rename = "AVATAR_f_shirt_valentine2023")]
    AvatarFShirtValentine2023,
    #[serde(rename = "AVATAR_f_shirt_verizon2020")]
    AvatarFShirtVerizon2020,
    #[serde(rename = "AVATAR_f_shirt_veterantrainerxy")]
    AvatarFShirtVeterantrainerxy,
    #[serde(rename = "AVATAR_f_shirt_victinitshirts")]
    AvatarFShirtVictinitshirts,
    #[serde(rename = "AVATAR_f_shirt_wcs2022")]
    AvatarFShirtWcs2022,
    #[serde(rename = "AVATAR_f_shirt_wcs2022tshirtbulu")]
    AvatarFShirtWcs2022tshirtbulu,
    #[serde(rename = "AVATAR_f_shirt_wcs2022tshirtred")]
    AvatarFShirtWcs2022tshirtred,
    #[serde(rename = "AVATAR_f_shirt_wcs2022winnersitems")]
    AvatarFShirtWcs2022winnersitems,
    #[serde(rename = "AVATAR_f_shirt_wcs2023")]
    AvatarFShirtWcs2023,
    #[serde(rename = "AVATAR_f_shirt_wcs2023promotshirt")]
    AvatarFShirtWcs2023promotshirt,
    #[serde(rename = "AVATAR_f_shirt_wcs2023promotshirt_01")]
    AvatarFShirtWcs2023promotshirt01,
    #[serde(rename = "AVATAR_f_shirt_wcs2023sukajan")]
    AvatarFShirtWcs2023sukajan,
    #[serde(rename = "AVATAR_f_shirt_wcs2023winnersitems")]
    AvatarFShirtWcs2023winnersitems,
    #[serde(rename = "AVATAR_f_shirt_wcs2024")]
    AvatarFShirtWcs2024,
    #[serde(rename = "AVATAR_f_shirt_wcs2024championshipshirt-blue")]
    AvatarFShirtWcs2024championshipshirtBlue,
    #[serde(rename = "AVATAR_f_shirt_wcs2024championshipshirt-white")]
    AvatarFShirtWcs2024championshipshirtWhite,
    #[serde(rename = "AVATAR_f_shirt_wcsyokohama")]
    AvatarFShirtWcsyokohama,
    #[serde(rename = "AVATAR_f_shirt_whitecoat")]
    AvatarFShirtWhitecoat,
    #[serde(rename = "AVATAR_f_shirt_wintersweater2023")]
    AvatarFShirtWintersweater2023,
    #[serde(rename = "AVATAR_f_shirt_zoruaonesie")]
    AvatarFShirtZoruaonesie,
    #[serde(rename = "AVATAR_f_shoes_6thanniversary")]
    AvatarFShoes6thanniversary,
    #[serde(rename = "AVATAR_f_shoes_acetrainerbw")]
    AvatarFShoesAcetrainerbw,
    #[serde(rename = "AVATAR_f_shoes_acetrainersm")]
    AvatarFShoesAcetrainersm,
    #[serde(rename = "AVATAR_f_shoes_animegou")]
    AvatarFShoesAnimegou,
    #[serde(rename = "AVATAR_f_shoes_backpacker")]
    AvatarFShoesBackpacker,
    #[serde(rename = "AVATAR_f_shoes_battlegirl_0")]
    AvatarFShoesBattlegirl0,
    #[serde(rename = "AVATAR_f_shoes_bwn")]
    AvatarFShoesBwn,
    #[serde(rename = "AVATAR_f_shoes_carbink")]
    AvatarFShoesCarbink,
    #[serde(rename = "AVATAR_f_shoes_clay")]
    AvatarFShoesClay,
    #[serde(rename = "AVATAR_f_shoes_coolboots")]
    AvatarFShoesCoolboots,
    #[serde(rename = "AVATAR_f_shoes_dedenneitems")]
    AvatarFShoesDedenneitems,
    #[serde(rename = "AVATAR_f_shoes_default_0")]
    AvatarFShoesDefault0,
    #[serde(rename = "AVATAR_f_shoes_default_1")]
    AvatarFShoesDefault1,
    #[serde(rename = "AVATAR_f_shoes_default_2")]
    AvatarFShoesDefault2,
    #[serde(rename = "AVATAR_f_shoes_default_3")]
    AvatarFShoesDefault3,
    #[serde(rename = "AVATAR_f_shoes_default_4")]
    AvatarFShoesDefault4,
    #[serde(rename = "AVATAR_f_shoes_default_5")]
    AvatarFShoesDefault5,
    #[serde(rename = "AVATAR_f_shoes_default_6")]
    AvatarFShoesDefault6,
    #[serde(rename = "AVATAR_f_shoes_delibird")]
    AvatarFShoesDelibird,
    #[serde(rename = "AVATAR_f_shoes_dp")]
    AvatarFShoesDp,
    #[serde(rename = "AVATAR_f_shoes_elesa")]
    AvatarFShoesElesa,
    #[serde(rename = "AVATAR_f_shoes_empty")]
    AvatarFShoesEmpty,
    #[serde(rename = "AVATAR_f_shoes_fashionWeek2022")]
    AvatarFShoesFashionWeek2022,
    #[serde(rename = "AVATAR_f_shoes_frlg_0")]
    AvatarFShoesFrlg0,
    #[serde(rename = "AVATAR_f_shoes_fw2022")]
    AvatarFShoesFw2022,
    #[serde(rename = "AVATAR_f_shoes_geeta")]
    AvatarFShoesGeeta,
    #[serde(rename = "AVATAR_f_shoes_giovanni")]
    AvatarFShoesGiovanni,
    #[serde(rename = "AVATAR_f_shoes_gladion")]
    AvatarFShoesGladion,
    #[serde(rename = "AVATAR_f_shoes_gothitelleitems")]
    AvatarFShoesGothitelleitems,
    #[serde(rename = "AVATAR_f_shoes_green")]
    AvatarFShoesGreen,
    #[serde(rename = "AVATAR_f_shoes_gymleader_0")]
    AvatarFShoesGymleader0,
    #[serde(rename = "AVATAR_f_shoes_gymleader_1")]
    AvatarFShoesGymleader1,
    #[serde(rename = "AVATAR_f_shoes_gymleader_2")]
    AvatarFShoesGymleader2,
    #[serde(rename = "AVATAR_f_shoes_hala")]
    AvatarFShoesHala,
    #[serde(rename = "AVATAR_f_shoes_hgss_0")]
    AvatarFShoesHgss0,
    #[serde(rename = "AVATAR_f_shoes_ingo")]
    AvatarFShoesIngo,
    #[serde(rename = "AVATAR_f_shoes_korrina")]
    AvatarFShoesKorrina,
    #[serde(rename = "AVATAR_f_shoes_ladiamondoutfit")]
    AvatarFShoesLadiamondoutfit,
    #[serde(rename = "AVATAR_f_shoes_lana")]
    AvatarFShoesLana,
    #[serde(rename = "AVATAR_f_shoes_lapearloutfit")]
    AvatarFShoesLapearloutfit,
    #[serde(rename = "AVATAR_f_shoes_legendofarceus")]
    AvatarFShoesLegendofarceus,
    #[serde(rename = "AVATAR_f_shoes_loosepants")]
    AvatarFShoesLoosepants,
    #[serde(rename = "AVATAR_f_shoes_loosepants_1")]
    AvatarFShoesLoosepants1,
    #[serde(rename = "AVATAR_f_shoes_loosepants_2")]
    AvatarFShoesLoosepants2,
    #[serde(rename = "AVATAR_f_shoes_loosepants_3")]
    AvatarFShoesLoosepants3,
    #[serde(rename = "AVATAR_f_shoes_luvdiscpack")]
    AvatarFShoesLuvdiscpack,
    #[serde(rename = "AVATAR_f_shoes_lysandre")]
    AvatarFShoesLysandre,
    #[serde(rename = "AVATAR_f_shoes_megalopunnyitems")]
    AvatarFShoesMegalopunnyitems,
    #[serde(rename = "AVATAR_f_shoes_melmetalshoes")]
    AvatarFShoesMelmetalshoes,
    #[serde(rename = "AVATAR_f_shoes_mewtwo")]
    AvatarFShoesMewtwo,
    #[serde(rename = "AVATAR_f_shoes_misty")]
    AvatarFShoesMisty,
    #[serde(rename = "AVATAR_f_shoes_newyear2022")]
    AvatarFShoesNewyear2022,
    #[serde(rename = "AVATAR_f_shoes_nike2021")]
    AvatarFShoesNike2021,
    #[serde(rename = "AVATAR_f_shoes_oras")]
    AvatarFShoesOras,
    #[serde(rename = "AVATAR_f_shoes_pajamas2022_0")]
    AvatarFShoesPajamas20220,
    #[serde(rename = "AVATAR_f_shoes_pajamas2022_1")]
    AvatarFShoesPajamas20221,
    #[serde(rename = "AVATAR_f_shoes_palmer")]
    AvatarFShoesPalmer,
    #[serde(rename = "AVATAR_f_shoes_pikachufan_0")]
    AvatarFShoesPikachufan0,
    #[serde(rename = "AVATAR_f_shoes_pikachulibre")]
    AvatarFShoesPikachulibre,
    #[serde(rename = "AVATAR_f_shoes_profwillowoutfit")]
    AvatarFShoesProfwillowoutfit,
    #[serde(rename = "AVATAR_f_shoes_regiicejersies")]
    AvatarFShoesRegiicejersies,
    #[serde(rename = "AVATAR_f_shoes_regirockjersies")]
    AvatarFShoesRegirockjersies,
    #[serde(rename = "AVATAR_f_shoes_registeeljersies")]
    AvatarFShoesRegisteeljersies,
    #[serde(rename = "AVATAR_f_shoes_reuniclusitems")]
    AvatarFShoesReuniclusitems,
    #[serde(rename = "AVATAR_f_shoes_ruinmaniac")]
    AvatarFShoesRuinmaniac,
    #[serde(rename = "AVATAR_f_shoes_sandals")]
    AvatarFShoesSandals,
    #[serde(rename = "AVATAR_f_shoes_sandals_1")]
    AvatarFShoesSandals1,
    #[serde(rename = "AVATAR_f_shoes_sandals_2")]
    AvatarFShoesSandals2,
    #[serde(rename = "AVATAR_f_shoes_solgaleoitems")]
    AvatarFShoesSolgaleoitems,
    #[serde(rename = "AVATAR_f_shoes_ss")]
    AvatarFShoesSs,
    #[serde(rename = "AVATAR_f_shoes_steven")]
    AvatarFShoesSteven,
    #[serde(rename = "AVATAR_f_shoes_stevenfirst")]
    AvatarFShoesStevenfirst,
    #[serde(rename = "AVATAR_f_shoes_svcostumescarletschool")]
    AvatarFShoesSvcostumescarletschool,
    #[serde(rename = "AVATAR_f_shoes_svcostumevioletschool")]
    AvatarFShoesSvcostumevioletschool,
    #[serde(rename = "AVATAR_f_shoes_svdlc1")]
    AvatarFShoesSvdlc1,
    #[serde(rename = "AVATAR_f_shoes_svdlc2spring")]
    AvatarFShoesSvdlc2spring,
    #[serde(rename = "AVATAR_f_shoes_swshdlc2costume")]
    AvatarFShoesSwshdlc2costume,
    #[serde(rename = "AVATAR_f_shoes_swshdlccostume")]
    AvatarFShoesSwshdlccostume,
    #[serde(rename = "AVATAR_f_shoes_swshuniformdark")]
    AvatarFShoesSwshuniformdark,
    #[serde(rename = "AVATAR_f_shoes_swshuniformdefault")]
    AvatarFShoesSwshuniformdefault,
    #[serde(rename = "AVATAR_f_shoes_swshuniformdragon")]
    AvatarFShoesSwshuniformdragon,
    #[serde(rename = "AVATAR_f_shoes_sylveonitems")]
    AvatarFShoesSylveonitems,
    #[serde(rename = "AVATAR_f_shoes_teamaqua")]
    AvatarFShoesTeamaqua,
    #[serde(rename = "AVATAR_f_shoes_teamblanche")]
    AvatarFShoesTeamblanche,
    #[serde(rename = "AVATAR_f_shoes_teamcandela")]
    AvatarFShoesTeamcandela,
    #[serde(rename = "AVATAR_f_shoes_teammagma")]
    AvatarFShoesTeammagma,
    #[serde(rename = "AVATAR_f_shoes_teamrocket_0")]
    AvatarFShoesTeamrocket0,
    #[serde(rename = "AVATAR_f_shoes_teamrocket_1")]
    AvatarFShoesTeamrocket1,
    #[serde(rename = "AVATAR_f_shoes_teamskull")]
    AvatarFShoesTeamskull,
    #[serde(rename = "AVATAR_f_shoes_teamspark")]
    AvatarFShoesTeamspark,
    #[serde(rename = "AVATAR_f_shoes_ultra_0")]
    AvatarFShoesUltra0,
    #[serde(rename = "AVATAR_f_shoes_ultraReconSquad")]
    AvatarFShoesUltraReconSquad,
    #[serde(rename = "AVATAR_f_shoes_veterantrainerxy")]
    AvatarFShoesVeterantrainerxy,
    #[serde(rename = "AVATAR_f_shoes_wcs2022winnersitems")]
    AvatarFShoesWcs2022winnersitems,
    #[serde(rename = "AVATAR_f_shoes_wcs2023winnersitems")]
    AvatarFShoesWcs2023winnersitems,
    #[serde(rename = "AVATAR_f_shoes_winterboots_0")]
    AvatarFShoesWinterboots0,
    #[serde(rename = "AVATAR_f_shoes_winterboots_1")]
    AvatarFShoesWinterboots1,
    #[serde(rename = "AVATAR_f_shoes_winterboots_2")]
    AvatarFShoesWinterboots2,
    #[serde(rename = "AVATAR_f_shoes_winterboots_3")]
    AvatarFShoesWinterboots3,
    #[serde(rename = "AVATAR_f_shoes_winterboots2023")]
    AvatarFShoesWinterboots2023,
    #[serde(rename = "AVATAR_f_skin_0")]
    AvatarFSkin0,
    #[serde(rename = "AVATAR_f_skin_1")]
    AvatarFSkin1,
    #[serde(rename = "AVATAR_f_skin_2")]
    AvatarFSkin2,
    #[serde(rename = "AVATAR_f_skin_3")]
    AvatarFSkin3,
    #[serde(rename = "AVATAR_f_skin_4")]
    AvatarFSkin4,
    #[serde(rename = "AVATAR_f_skin_5")]
    AvatarFSkin5,
    #[serde(rename = "AVATAR_f_skin_6")]
    AvatarFSkin6,
    #[serde(rename = "AVATAR_f_skin_7")]
    AvatarFSkin7,
    #[serde(rename = "AVATAR_f_skin_8")]
    AvatarFSkin8,
    #[serde(rename = "AVATAR_f_skin_9")]
    AvatarFSkin9,
    #[serde(rename = "AVATAR_f_skin_10")]
    AvatarFSkin10,
    #[serde(rename = "AVATAR_f_skin_11")]
    AvatarFSkin11,
    #[serde(rename = "AVATAR_f_socks_default_0")]
    AvatarFSocksDefault0,
    #[serde(rename = "AVATAR_f_socks_default_1")]
    AvatarFSocksDefault1,
    #[serde(rename = "AVATAR_f_socks_default_2")]
    AvatarFSocksDefault2,
    #[serde(rename = "AVATAR_f_socks_empty")]
    AvatarFSocksEmpty,
    #[serde(rename = "AVATAR_f_socks_fw2022")]
    AvatarFSocksFw2022,
    #[serde(rename = "AVATAR_f_socks_hgss_0")]
    AvatarFSocksHgss0,
    #[serde(rename = "AVATAR_f_socks_sneakersocks_0")]
    AvatarFSocksSneakersocks0,
    #[serde(rename = "AVATAR_f_socks_sneakersocks_1")]
    AvatarFSocksSneakersocks1,
    #[serde(rename = "AVATAR_f_socks_sollunaitems")]
    AvatarFSocksSollunaitems,
    #[serde(rename = "AVATAR_f_socks_swshuniformdefault")]
    AvatarFSocksSwshuniformdefault,
    #[serde(rename = "AVATAR_f_socks_swshuniformdragon")]
    AvatarFSocksSwshuniformdragon,
    #[serde(rename = "AVATAR_f_socks_teamaqua")]
    AvatarFSocksTeamaqua,
    #[serde(rename = "AVATAR_f_socks_thighhighs_0")]
    AvatarFSocksThighhighs0,
    #[serde(rename = "AVATAR_m_backpack_alolaitemslittenbp")]
    AvatarMBackpackAlolaitemslittenbp,
    #[serde(rename = "AVATAR_m_backpack_alolaitemspoppliobp")]
    AvatarMBackpackAlolaitemspoppliobp,
    #[serde(rename = "AVATAR_m_backpack_alolaitemsrowletbp")]
    AvatarMBackpackAlolaitemsrowletbp,
    #[serde(rename = "AVATAR_m_backpack_animegou")]
    AvatarMBackpackAnimegou,
    #[serde(rename = "AVATAR_m_backpack_backpacker")]
    AvatarMBackpackBackpacker,
    #[serde(rename = "AVATAR_m_backpack_combeebackpack")]
    AvatarMBackpackCombeebackpack,
    #[serde(rename = "AVATAR_m_backpack_combeebackpack_01")]
    AvatarMBackpackCombeebackpack01,
    #[serde(rename = "AVATAR_m_backpack_dedenneitems")]
    AvatarMBackpackDedenneitems,
    #[serde(rename = "AVATAR_m_backpack_default_0")]
    AvatarMBackpackDefault0,
    #[serde(rename = "AVATAR_m_backpack_default_1")]
    AvatarMBackpackDefault1,
    #[serde(rename = "AVATAR_m_backpack_default_2")]
    AvatarMBackpackDefault2,
    #[serde(rename = "AVATAR_m_backpack_default_3")]
    AvatarMBackpackDefault3,
    #[serde(rename = "AVATAR_m_backpack_default_4")]
    AvatarMBackpackDefault4,
    #[serde(rename = "AVATAR_m_backpack_default_5")]
    AvatarMBackpackDefault5,
    #[serde(rename = "AVATAR_m_backpack_dp")]
    AvatarMBackpackDp,
    #[serde(rename = "AVATAR_m_backpack_egg-incubator")]
    AvatarMBackpackEggIncubator,
    #[serde(rename = "AVATAR_m_backpack_eggbackpack_0")]
    AvatarMBackpackEggbackpack0,
    #[serde(rename = "AVATAR_m_backpack_eggbackpack_1")]
    AvatarMBackpackEggbackpack1,
    #[serde(rename = "AVATAR_m_backpack_eggbackpack_2")]
    AvatarMBackpackEggbackpack2,
    #[serde(rename = "AVATAR_m_backpack_empty")]
    AvatarMBackpackEmpty,
    #[serde(rename = "AVATAR_m_backpack_frlg_0")]
    AvatarMBackpackFrlg0,
    #[serde(rename = "AVATAR_m_backpack_genesecteventitem")]
    AvatarMBackpackGenesecteventitem,
    #[serde(rename = "AVATAR_m_backpack_gengar_0")]
    AvatarMBackpackGengar0,
    #[serde(rename = "AVATAR_m_backpack_giratinaitems")]
    AvatarMBackpackGiratinaitems,
    #[serde(rename = "AVATAR_m_backpack_guccibackpack")]
    AvatarMBackpackGuccibackpack,
    #[serde(rename = "AVATAR_m_backpack_guitarcasebackpack")]
    AvatarMBackpackGuitarcasebackpack,
    #[serde(rename = "AVATAR_m_backpack_hgss_0")]
    AvatarMBackpackHgss0,
    #[serde(rename = "AVATAR_m_backpack_hououbackpack")]
    AvatarMBackpackHououbackpack,
    #[serde(rename = "AVATAR_m_backpack_kakureonpouch")]
    AvatarMBackpackKakureonpouch,
    #[serde(rename = "AVATAR_m_backpack_komala")]
    AvatarMBackpackKomala,
    #[serde(rename = "AVATAR_m_backpack_longchampbp")]
    AvatarMBackpackLongchampbp,
    #[serde(rename = "AVATAR_m_backpack_lunalaitems")]
    AvatarMBackpackLunalaitems,
    #[serde(rename = "AVATAR_m_backpack_lunarNewYr")]
    AvatarMBackpackLunarNewYr,
    #[serde(rename = "AVATAR_m_backpack_mimikyubp")]
    AvatarMBackpackMimikyubp,
    #[serde(rename = "AVATAR_m_backpack_movie2020")]
    AvatarMBackpackMovie2020,
    #[serde(rename = "AVATAR_m_backpack_naganadelawings")]
    AvatarMBackpackNaganadelawings,
    #[serde(rename = "AVATAR_m_backpack_nike2021")]
    AvatarMBackpackNike2021,
    #[serde(rename = "AVATAR_m_backpack_pamobackpack")]
    AvatarMBackpackPamobackpack,
    #[serde(rename = "AVATAR_m_backpack_pkmnhoodie001")]
    AvatarMBackpackPkmnhoodie001,
    #[serde(rename = "AVATAR_m_backpack_pkmnhoodie004")]
    AvatarMBackpackPkmnhoodie004,
    #[serde(rename = "AVATAR_m_backpack_pkmnhoodie007")]
    AvatarMBackpackPkmnhoodie007,
    #[serde(rename = "AVATAR_m_backpack_ruinmaniac")]
    AvatarMBackpackRuinmaniac,
    #[serde(rename = "AVATAR_m_backpack_snapcamera")]
    AvatarMBackpackSnapcamera,
    #[serde(rename = "AVATAR_m_backpack_ss")]
    AvatarMBackpackSs,
    #[serde(rename = "AVATAR_m_backpack_svcostumescarletschool")]
    AvatarMBackpackSvcostumescarletschool,
    #[serde(rename = "AVATAR_m_backpack_svcostumevioletschool")]
    AvatarMBackpackSvcostumevioletschool,
    #[serde(rename = "AVATAR_m_backpack_svdlc1")]
    AvatarMBackpackSvdlc1,
    #[serde(rename = "AVATAR_m_backpack_svdlc2spring")]
    AvatarMBackpackSvdlc2spring,
    #[serde(rename = "AVATAR_m_backpack_swshdlc2costume")]
    AvatarMBackpackSwshdlc2costume,
    #[serde(rename = "AVATAR_m_backpack_swshdlccostume")]
    AvatarMBackpackSwshdlccostume,
    #[serde(rename = "AVATAR_m_backpack_togepibackpack")]
    AvatarMBackpackTogepibackpack,
    #[serde(rename = "AVATAR_m_backpack_ultra_0")]
    AvatarMBackpackUltra0,
    #[serde(rename = "AVATAR_m_backpack_verizon2021")]
    AvatarMBackpackVerizon2021,
    #[serde(rename = "AVATAR_m_backpack_zubatbp")]
    AvatarMBackpackZubatbp,
    #[serde(rename = "AVATAR_m_eyes_0")]
    AvatarMEyes0,
    #[serde(rename = "AVATAR_m_eyes_1")]
    AvatarMEyes1,
    #[serde(rename = "AVATAR_m_eyes_2")]
    AvatarMEyes2,
    #[serde(rename = "AVATAR_m_eyes_3")]
    AvatarMEyes3,
    #[serde(rename = "AVATAR_m_eyes_4")]
    AvatarMEyes4,
    #[serde(rename = "AVATAR_m_face_3dmask_00")]
    AvatarMFace3dmask00,
    #[serde(rename = "AVATAR_m_face_3dmask_01")]
    AvatarMFace3dmask01,
    #[serde(rename = "AVATAR_m_face_3dmask_02")]
    AvatarMFace3dmask02,
    #[serde(rename = "AVATAR_m_face_banettemask")]
    AvatarMFaceBanettemask,
    #[serde(rename = "AVATAR_m_face_dayofthedead")]
    AvatarMFaceDayofthedead,
    #[serde(rename = "AVATAR_m_face_defaultmask")]
    AvatarMFaceDefaultmask,
    #[serde(rename = "AVATAR_m_face_empty")]
    AvatarMFaceEmpty,
    #[serde(rename = "AVATAR_m_face_facestickerghostpika")]
    AvatarMFaceFacestickerghostpika,
    #[serde(rename = "AVATAR_m_face_facestickerpikachu")]
    AvatarMFaceFacestickerpikachu,
    #[serde(rename = "AVATAR_m_face_facestickerpokeball")]
    AvatarMFaceFacestickerpokeball,
    #[serde(rename = "AVATAR_m_face_festOfColors_00")]
    AvatarMFaceFestOfColors00,
    #[serde(rename = "AVATAR_m_face_festOfColors_01")]
    AvatarMFaceFestOfColors01,
    #[serde(rename = "AVATAR_m_face_festOfColors_02")]
    AvatarMFaceFestOfColors02,
    #[serde(rename = "AVATAR_m_face_gracidea")]
    AvatarMFaceGracidea,
    #[serde(rename = "AVATAR_m_face_holiday2022santacostumes")]
    AvatarMFaceHoliday2022santacostumes,
    #[serde(rename = "AVATAR_m_face_pikachumask")]
    AvatarMFacePikachumask,
    #[serde(rename = "AVATAR_m_face_sableyemask")]
    AvatarMFaceSableyemask,
    #[serde(rename = "AVATAR_m_face_teamskull")]
    AvatarMFaceTeamskull,
    #[serde(rename = "AVATAR_m_face_toxelmask")]
    AvatarMFaceToxelmask,
    #[serde(rename = "AVATAR_m_face_verizon2020mask")]
    AvatarMFaceVerizon2020mask,
    #[serde(rename = "AVATAR_m_glasses_3d")]
    AvatarMGlasses3d,
    #[serde(rename = "AVATAR_m_glasses_cutieflysleepmask")]
    AvatarMGlassesCutieflysleepmask,
    #[serde(rename = "AVATAR_m_glasses_divingsuit")]
    AvatarMGlassesDivingsuit,
    #[serde(rename = "AVATAR_m_glasses_drpikachu")]
    AvatarMGlassesDrpikachu,
    #[serde(rename = "AVATAR_m_glasses_empty")]
    AvatarMGlassesEmpty,
    #[serde(rename = "AVATAR_m_glasses_frillishglasses")]
    AvatarMGlassesFrillishglasses,
    #[serde(rename = "AVATAR_m_glasses_fw2022")]
    AvatarMGlassesFw2022,
    #[serde(rename = "AVATAR_m_glasses_gimmighoulitems")]
    AvatarMGlassesGimmighoulitems,
    #[serde(rename = "AVATAR_m_glasses_goteamrocketarlo")]
    AvatarMGlassesGoteamrocketarlo,
    #[serde(rename = "AVATAR_m_glasses_grandoakglasses")]
    AvatarMGlassesGrandoakglasses,
    #[serde(rename = "AVATAR_m_glasses_jogger_0")]
    AvatarMGlassesJogger0,
    #[serde(rename = "AVATAR_m_glasses_lugiaglasses")]
    AvatarMGlassesLugiaglasses,
    #[serde(rename = "AVATAR_m_glasses_lv40glasses")]
    AvatarMGlassesLv40glasses,
    #[serde(rename = "AVATAR_m_glasses_mask_0")]
    AvatarMGlassesMask0,
    #[serde(rename = "AVATAR_m_glasses_mask_1")]
    AvatarMGlassesMask1,
    #[serde(rename = "AVATAR_m_glasses_newyear2022")]
    AvatarMGlassesNewyear2022,
    #[serde(rename = "AVATAR_m_glasses_newyearglasses2020")]
    AvatarMGlassesNewyearglasses2020,
    #[serde(rename = "AVATAR_m_glasses_newyearglasses2021")]
    AvatarMGlassesNewyearglasses2021,
    #[serde(rename = "AVATAR_m_glasses_obstagoonitems")]
    AvatarMGlassesObstagoonitems,
    #[serde(rename = "AVATAR_m_glasses_roundsunglasses")]
    AvatarMGlassesRoundsunglasses,
    #[serde(rename = "AVATAR_m_glasses_teardrop_0")]
    AvatarMGlassesTeardrop0,
    #[serde(rename = "AVATAR_m_glasses_thick_0")]
    AvatarMGlassesThick0,
    #[serde(rename = "AVATAR_m_glasses_thick_1")]
    AvatarMGlassesThick1,
    #[serde(rename = "AVATAR_m_glasses_thick_2")]
    AvatarMGlassesThick2,
    #[serde(rename = "AVATAR_m_glasses_thick_3")]
    AvatarMGlassesThick3,
    #[serde(rename = "AVATAR_m_glasses_thick_4")]
    AvatarMGlassesThick4,
    #[serde(rename = "AVATAR_m_gloves_acetrainersm")]
    AvatarMGlovesAcetrainersm,
    #[serde(rename = "AVATAR_m_gloves_bea")]
    AvatarMGlovesBea,
    #[serde(rename = "AVATAR_m_gloves_bwn")]
    AvatarMGlovesBwn,
    #[serde(rename = "AVATAR_m_gloves_default_0")]
    AvatarMGlovesDefault0,
    #[serde(rename = "AVATAR_m_gloves_default_1")]
    AvatarMGlovesDefault1,
    #[serde(rename = "AVATAR_m_gloves_default_2")]
    AvatarMGlovesDefault2,
    #[serde(rename = "AVATAR_m_gloves_default_3")]
    AvatarMGlovesDefault3,
    #[serde(rename = "AVATAR_m_gloves_delibird")]
    AvatarMGlovesDelibird,
    #[serde(rename = "AVATAR_m_gloves_dynamaxswsh")]
    AvatarMGlovesDynamaxswsh,
    #[serde(rename = "AVATAR_m_gloves_empty")]
    AvatarMGlovesEmpty,
    #[serde(rename = "AVATAR_m_gloves_frlg_0")]
    AvatarMGlovesFrlg0,
    #[serde(rename = "AVATAR_m_gloves_geeta")]
    AvatarMGlovesGeeta,
    #[serde(rename = "AVATAR_m_gloves_giovanni")]
    AvatarMGlovesGiovanni,
    #[serde(rename = "AVATAR_m_gloves_guzma")]
    AvatarMGlovesGuzma,
    #[serde(rename = "AVATAR_m_gloves_gymleader_0")]
    AvatarMGlovesGymleader0,
    #[serde(rename = "AVATAR_m_gloves_hoopabangle")]
    AvatarMGlovesHoopabangle,
    #[serde(rename = "AVATAR_m_gloves_jogger_0")]
    AvatarMGlovesJogger0,
    #[serde(rename = "AVATAR_m_gloves_korrina")]
    AvatarMGlovesKorrina,
    #[serde(rename = "AVATAR_m_gloves_lysandre")]
    AvatarMGlovesLysandre,
    #[serde(rename = "AVATAR_m_gloves_megabangle")]
    AvatarMGlovesMegabangle,
    #[serde(rename = "AVATAR_m_gloves_megabangleblack")]
    AvatarMGlovesMegabangleblack,
    #[serde(rename = "AVATAR_m_gloves_megabangleblue")]
    AvatarMGlovesMegabangleblue,
    #[serde(rename = "AVATAR_m_gloves_megabanglered")]
    AvatarMGlovesMegabanglered,
    #[serde(rename = "AVATAR_m_gloves_megabangleyellow")]
    AvatarMGlovesMegabangleyellow,
    #[serde(rename = "AVATAR_m_gloves_obstagoonitems")]
    AvatarMGlovesObstagoonitems,
    #[serde(rename = "AVATAR_m_gloves_palmer")]
    AvatarMGlovesPalmer,
    #[serde(rename = "AVATAR_m_gloves_profwillowoutfit")]
    AvatarMGlovesProfwillowoutfit,
    #[serde(rename = "AVATAR_m_gloves_stevenfirst")]
    AvatarMGlovesStevenfirst,
    #[serde(rename = "AVATAR_m_gloves_svdlc2spring")]
    AvatarMGlovesSvdlc2spring,
    #[serde(rename = "AVATAR_m_gloves_swshdlc2costume")]
    AvatarMGlovesSwshdlc2costume,
    #[serde(rename = "AVATAR_m_gloves_swshdlccostume")]
    AvatarMGlovesSwshdlccostume,
    #[serde(rename = "AVATAR_m_gloves_swshuniformchampion")]
    AvatarMGlovesSwshuniformchampion,
    #[serde(rename = "AVATAR_m_gloves_swshuniformdark")]
    AvatarMGlovesSwshuniformdark,
    #[serde(rename = "AVATAR_m_gloves_swshuniformdefault")]
    AvatarMGlovesSwshuniformdefault,
    #[serde(rename = "AVATAR_m_gloves_swshuniformdragon")]
    AvatarMGlovesSwshuniformdragon,
    #[serde(rename = "AVATAR_m_gloves_teamaqua")]
    AvatarMGlovesTeamaqua,
    #[serde(rename = "AVATAR_m_gloves_teammagma")]
    AvatarMGlovesTeammagma,
    #[serde(rename = "AVATAR_m_gloves_teamrocket_0")]
    AvatarMGlovesTeamrocket0,
    #[serde(rename = "AVATAR_m_gloves_teamspark")]
    AvatarMGlovesTeamspark,
    #[serde(rename = "AVATAR_m_gloves_wintergloves2023")]
    AvatarMGlovesWintergloves2023,
    #[serde(rename = "AVATAR_m_gofest_pikachuvisor")]
    AvatarMGofestPikachuvisor,
    #[serde(rename = "AVATAR_m_hair_default_0")]
    AvatarMHairDefault0,
    #[serde(rename = "AVATAR_m_hair_default_1")]
    AvatarMHairDefault1,
    #[serde(rename = "AVATAR_m_hair_default_2")]
    AvatarMHairDefault2,
    #[serde(rename = "AVATAR_m_hair_default_3")]
    AvatarMHairDefault3,
    #[serde(rename = "AVATAR_m_hair_default_4")]
    AvatarMHairDefault4,
    #[serde(rename = "AVATAR_m_hair_default_5")]
    AvatarMHairDefault5,
    #[serde(rename = "AVATAR_m_hair_default_6")]
    AvatarMHairDefault6,
    #[serde(rename = "AVATAR_m_hair_default_7")]
    AvatarMHairDefault7,
    #[serde(rename = "AVATAR_m_hair_default_8")]
    AvatarMHairDefault8,
    #[serde(rename = "AVATAR_m_hair_default_9")]
    AvatarMHairDefault9,
    #[serde(rename = "AVATAR_m_hair_default_10")]
    AvatarMHairDefault10,
    #[serde(rename = "AVATAR_m_hair_default_11")]
    AvatarMHairDefault11,
    #[serde(rename = "AVATAR_m_hair_default_12")]
    AvatarMHairDefault12,
    #[serde(rename = "AVATAR_m_hair_default_13")]
    AvatarMHairDefault13,
    #[serde(rename = "AVATAR_m_hair_default_14")]
    AvatarMHairDefault14,
    #[serde(rename = "AVATAR_m_hair_default_15")]
    AvatarMHairDefault15,
    #[serde(rename = "AVATAR_m_hair_default_16")]
    AvatarMHairDefault16,
    #[serde(rename = "AVATAR_m_hair_default_17")]
    AvatarMHairDefault17,
    #[serde(rename = "AVATAR_m_hair_default_18")]
    AvatarMHairDefault18,
    #[serde(rename = "AVATAR_m_hair_default_19")]
    AvatarMHairDefault19,
    #[serde(rename = "AVATAR_m_hat_6thanniversary")]
    AvatarMHat6thanniversary,
    #[serde(rename = "AVATAR_m_hat_acetrainersm")]
    AvatarMHatAcetrainersm,
    #[serde(rename = "AVATAR_m_hat_adventure_0")]
    AvatarMHatAdventure0,
    #[serde(rename = "AVATAR_m_hat_aseries")]
    AvatarMHatAseries,
    #[serde(rename = "AVATAR_m_hat_bea")]
    AvatarMHatBea,
    #[serde(rename = "AVATAR_m_hat_bidoofhat")]
    AvatarMHatBidoofhat,
    #[serde(rename = "AVATAR_m_hat_bounsweetitems")]
    AvatarMHatBounsweetitems,
    #[serde(rename = "AVATAR_m_hat_burmyearrings11")]
    AvatarMHatBurmyearrings11,
    #[serde(rename = "AVATAR_m_hat_burmyearrings12")]
    AvatarMHatBurmyearrings12,
    #[serde(rename = "AVATAR_m_hat_burmyearrings13")]
    AvatarMHatBurmyearrings13,
    #[serde(rename = "AVATAR_m_hat_bwn")]
    AvatarMHatBwn,
    #[serde(rename = "AVATAR_m_hat_casket_0")]
    AvatarMHatCasket0,
    #[serde(rename = "AVATAR_m_hat_cetoddlehat")]
    AvatarMHatCetoddlehat,
    #[serde(rename = "AVATAR_m_hat_clay")]
    AvatarMHatClay,
    #[serde(rename = "AVATAR_m_hat_cofagrigusitems")]
    AvatarMHatCofagrigusitems,
    #[serde(rename = "AVATAR_m_hat_cosmog")]
    AvatarMHatCosmog,
    #[serde(rename = "AVATAR_m_hat_crownmoon")]
    AvatarMHatCrownmoon,
    #[serde(rename = "AVATAR_m_hat_crownsun")]
    AvatarMHatCrownsun,
    #[serde(rename = "AVATAR_m_hat_cubonehat")]
    AvatarMHatCubonehat,
    #[serde(rename = "AVATAR_m_hat_darumakahat")]
    AvatarMHatDarumakahat,
    #[serde(rename = "AVATAR_m_hat_dedenneitems")]
    AvatarMHatDedenneitems,
    #[serde(rename = "AVATAR_m_hat_default_0")]
    AvatarMHatDefault0,
    #[serde(rename = "AVATAR_m_hat_default_1")]
    AvatarMHatDefault1,
    #[serde(rename = "AVATAR_m_hat_default_2")]
    AvatarMHatDefault2,
    #[serde(rename = "AVATAR_m_hat_default_3")]
    AvatarMHatDefault3,
    #[serde(rename = "AVATAR_m_hat_default_4")]
    AvatarMHatDefault4,
    #[serde(rename = "AVATAR_m_hat_default_5")]
    AvatarMHatDefault5,
    #[serde(rename = "AVATAR_m_hat_deino")]
    AvatarMHatDeino,
    #[serde(rename = "AVATAR_m_hat_delibird")]
    AvatarMHatDelibird,
    #[serde(rename = "AVATAR_m_hat_detectivepikachu")]
    AvatarMHatDetectivepikachu,
    #[serde(rename = "AVATAR_m_hat_diancie")]
    AvatarMHatDiancie,
    #[serde(rename = "AVATAR_m_hat_dp")]
    AvatarMHatDp,
    #[serde(rename = "AVATAR_m_hat_drifloon_0")]
    AvatarMHatDrifloon0,
    #[serde(rename = "AVATAR_m_hat_drpikachu")]
    AvatarMHatDrpikachu,
    #[serde(rename = "AVATAR_m_hat_dusclopsmummy")]
    AvatarMHatDusclopsmummy,
    #[serde(rename = "AVATAR_m_hat_eeveecap")]
    AvatarMHatEeveecap,
    #[serde(rename = "AVATAR_m_hat_elesa")]
    AvatarMHatElesa,
    #[serde(rename = "AVATAR_m_hat_empty")]
    AvatarMHatEmpty,
    #[serde(rename = "AVATAR_m_hat_fedora_0")]
    AvatarMHatFedora0,
    #[serde(rename = "AVATAR_m_hat_fedora_1")]
    AvatarMHatFedora1,
    #[serde(rename = "AVATAR_m_hat_fisher_0")]
    AvatarMHatFisher0,
    #[serde(rename = "AVATAR_m_hat_flabebepack")]
    AvatarMHatFlabebepack,
    #[serde(rename = "AVATAR_m_hat_fragment_0")]
    AvatarMHatFragment0,
    #[serde(rename = "AVATAR_m_hat_frlg_0")]
    AvatarMHatFrlg0,
    #[serde(rename = "AVATAR_m_hat_furfrouwig")]
    AvatarMHatFurfrouwig,
    #[serde(rename = "AVATAR_m_hat_fw2022")]
    AvatarMHatFw2022,
    #[serde(rename = "AVATAR_m_hat_galarfarfetchditems")]
    AvatarMHatGalarfarfetchditems,
    #[serde(rename = "AVATAR_m_hat_genesecteventitem")]
    AvatarMHatGenesecteventitem,
    #[serde(rename = "AVATAR_m_hat_gengar_0")]
    AvatarMHatGengar0,
    #[serde(rename = "AVATAR_m_hat_gimmighoulitems")]
    AvatarMHatGimmighoulitems,
    #[serde(rename = "AVATAR_m_hat_giratinaitems")]
    AvatarMHatGiratinaitems,
    #[serde(rename = "AVATAR_m_hat_gladion")]
    AvatarMHatGladion,
    #[serde(rename = "AVATAR_m_hat_goomy")]
    AvatarMHatGoomy,
    #[serde(rename = "AVATAR_m_hat_greavardwig")]
    AvatarMHatGreavardwig,
    #[serde(rename = "AVATAR_m_hat_greencoat")]
    AvatarMHatGreencoat,
    #[serde(rename = "AVATAR_m_hat_growlithehelmet")]
    AvatarMHatGrowlithehelmet,
    #[serde(rename = "AVATAR_m_hat_gtr2024eeveefanmask")]
    AvatarMHatGtr2024eeveefanmask,
    #[serde(rename = "AVATAR_m_hat_gtr2024pikachufanmask")]
    AvatarMHatGtr2024pikachufanmask,
    #[serde(rename = "AVATAR_m_hat_guccihat")]
    AvatarMHatGuccihat,
    #[serde(rename = "AVATAR_m_hat_guzma")]
    AvatarMHatGuzma,
    #[serde(rename = "AVATAR_m_hat_gyaradoscap")]
    AvatarMHatGyaradoscap,
    #[serde(rename = "AVATAR_m_hat_hgss_0")]
    AvatarMHatHgss0,
    #[serde(rename = "AVATAR_m_hat_holiday2022santacostumes")]
    AvatarMHatHoliday2022santacostumes,
    #[serde(rename = "AVATAR_m_hat_holidaybeanie")]
    AvatarMHatHolidaybeanie,
    #[serde(rename = "AVATAR_m_hat_hoopaearmuffs")]
    AvatarMHatHoopaearmuffs,
    #[serde(rename = "AVATAR_m_hat_ingo")]
    AvatarMHatIngo,
    #[serde(rename = "AVATAR_m_hat_jogger_0")]
    AvatarMHatJogger0,
    #[serde(rename = "AVATAR_m_hat_kantotourcapgreen")]
    AvatarMHatKantotourcapgreen,
    #[serde(rename = "AVATAR_m_hat_kantotourcapred")]
    AvatarMHatKantotourcapred,
    #[serde(rename = "AVATAR_m_hat_korrina")]
    AvatarMHatKorrina,
    #[serde(rename = "AVATAR_m_hat_lana")]
    AvatarMHatLana,
    #[serde(rename = "AVATAR_m_hat_laprasbandana")]
    AvatarMHatLaprasbandana,
    #[serde(rename = "AVATAR_m_hat_lasecuritycorps")]
    AvatarMHatLasecuritycorps,
    #[serde(rename = "AVATAR_m_hat_legendofarceus")]
    AvatarMHatLegendofarceus,
    #[serde(rename = "AVATAR_m_hat_litwickhat")]
    AvatarMHatLitwickhat,
    #[serde(rename = "AVATAR_m_hat_loneearrings")]
    AvatarMHatLoneearrings,
    #[serde(rename = "AVATAR_m_hat_lvl50cap")]
    AvatarMHatLvl50cap,
    #[serde(rename = "AVATAR_m_hat_magikarp")]
    AvatarMHatMagikarp,
    #[serde(rename = "AVATAR_m_hat_mareaniehat")]
    AvatarMHatMareaniehat,
    #[serde(rename = "AVATAR_m_hat_megalopunnyitems")]
    AvatarMHatMegalopunnyitems,
    #[serde(rename = "AVATAR_m_hat_megarayquaza")]
    AvatarMHatMegarayquaza,
    #[serde(rename = "AVATAR_m_hat_meltan")]
    AvatarMHatMeltan,
    #[serde(rename = "AVATAR_m_hat_mewtwo")]
    AvatarMHatMewtwo,
    #[serde(rename = "AVATAR_m_hat_mimikyu_0")]
    AvatarMHatMimikyu0,
    #[serde(rename = "AVATAR_m_hat_mismagius_0")]
    AvatarMHatMismagius0,
    #[serde(rename = "AVATAR_m_hat_movie2020")]
    AvatarMHatMovie2020,
    #[serde(rename = "AVATAR_m_hat_munnapack_0")]
    AvatarMHatMunnapack0,
    #[serde(rename = "AVATAR_m_hat_munnapack_1")]
    AvatarMHatMunnapack1,
    #[serde(rename = "AVATAR_m_hat_newyear2022")]
    AvatarMHatNewyear2022,
    #[serde(rename = "AVATAR_m_hat_newyearhat2021")]
    AvatarMHatNewyearhat2021,
    #[serde(rename = "AVATAR_m_hat_newyearhat2023")]
    AvatarMHatNewyearhat2023,
    #[serde(rename = "AVATAR_m_hat_nihilegoitems")]
    AvatarMHatNihilegoitems,
    #[serde(rename = "AVATAR_m_hat_noibat")]
    AvatarMHatNoibat,
    #[serde(rename = "AVATAR_m_hat_obstagoonitems")]
    AvatarMHatObstagoonitems,
    #[serde(rename = "AVATAR_m_hat_oras")]
    AvatarMHatOras,
    #[serde(rename = "AVATAR_m_hat_oricorioPink")]
    AvatarMHatOricorioPink,
    #[serde(rename = "AVATAR_m_hat_oricorioPurple")]
    AvatarMHatOricorioPurple,
    #[serde(rename = "AVATAR_m_hat_oricorioRed")]
    AvatarMHatOricorioRed,
    #[serde(rename = "AVATAR_m_hat_oricorioYellow")]
    AvatarMHatOricorioYellow,
    #[serde(rename = "AVATAR_m_hat_partneritemsjan2024hat")]
    AvatarMHatPartneritemsjan2024hat,
    #[serde(rename = "AVATAR_m_hat_phantump")]
    AvatarMHatPhantump,
    #[serde(rename = "AVATAR_m_hat_pikachucap")]
    AvatarMHatPikachucap,
    #[serde(rename = "AVATAR_m_hat_pikachufan_0")]
    AvatarMHatPikachufan0,
    #[serde(rename = "AVATAR_m_hat_pikachulibre")]
    AvatarMHatPikachulibre,
    #[serde(rename = "AVATAR_m_hat_pikachupumpkinhead")]
    AvatarMHatPikachupumpkinhead,
    #[serde(rename = "AVATAR_m_hat_pkmncap_0")]
    AvatarMHatPkmncap0,
    #[serde(rename = "AVATAR_m_hat_pkmncap_1")]
    AvatarMHatPkmncap1,
    #[serde(rename = "AVATAR_m_hat_pkmncap_2")]
    AvatarMHatPkmncap2,
    #[serde(rename = "AVATAR_m_hat_poipole")]
    AvatarMHatPoipole,
    #[serde(rename = "AVATAR_m_hat_profwillowoutfit")]
    AvatarMHatProfwillowoutfit,
    #[serde(rename = "AVATAR_m_hat_regiicejersies")]
    AvatarMHatRegiicejersies,
    #[serde(rename = "AVATAR_m_hat_regirockjersies")]
    AvatarMHatRegirockjersies,
    #[serde(rename = "AVATAR_m_hat_registeeljersies")]
    AvatarMHatRegisteeljersies,
    #[serde(rename = "AVATAR_m_hat_ruinmaniac")]
    AvatarMHatRuinmaniac,
    #[serde(rename = "AVATAR_m_hat_sableyegoggles")]
    AvatarMHatSableyegoggles,
    #[serde(rename = "AVATAR_m_hat_samsungsummer2020")]
    AvatarMHatSamsungsummer2020,
    #[serde(rename = "AVATAR_m_hat_sandygasthat")]
    AvatarMHatSandygasthat,
    #[serde(rename = "AVATAR_m_hat_shayminhat")]
    AvatarMHatShayminhat,
    #[serde(rename = "AVATAR_m_hat_slowpoketailshirts")]
    AvatarMHatSlowpoketailshirts,
    #[serde(rename = "AVATAR_m_hat_snorlaxnightcap")]
    AvatarMHatSnorlaxnightcap,
    #[serde(rename = "AVATAR_m_hat_solgaleoitems")]
    AvatarMHatSolgaleoitems,
    #[serde(rename = "AVATAR_m_hat_ss")]
    AvatarMHatSs,
    #[serde(rename = "AVATAR_m_hat_stantlerheadband")]
    AvatarMHatStantlerheadband,
    #[serde(rename = "AVATAR_m_hat_strawhat")]
    AvatarMHatStrawhat,
    #[serde(rename = "AVATAR_m_hat_summer2023")]
    AvatarMHatSummer2023,
    #[serde(rename = "AVATAR_m_hat_svcostumescarletschool")]
    AvatarMHatSvcostumescarletschool,
    #[serde(rename = "AVATAR_m_hat_svcostumevioletschool")]
    AvatarMHatSvcostumevioletschool,
    #[serde(rename = "AVATAR_m_hat_swshdlc2costume")]
    AvatarMHatSwshdlc2costume,
    #[serde(rename = "AVATAR_m_hat_swshuniformchampion")]
    AvatarMHatSwshuniformchampion,
    #[serde(rename = "AVATAR_m_hat_sylveonitems")]
    AvatarMHatSylveonitems,
    #[serde(rename = "AVATAR_m_hat_tcgcollabtshirtandcap")]
    AvatarMHatTcgcollabtshirtandcap,
    #[serde(rename = "AVATAR_m_hat_teamaqua")]
    AvatarMHatTeamaqua,
    #[serde(rename = "AVATAR_m_hat_teamleadercap_0")]
    AvatarMHatTeamleadercap0,
    #[serde(rename = "AVATAR_m_hat_teamleadercap_1")]
    AvatarMHatTeamleadercap1,
    #[serde(rename = "AVATAR_m_hat_teamleadercap_2")]
    AvatarMHatTeamleadercap2,
    #[serde(rename = "AVATAR_m_hat_teamrocket_0")]
    AvatarMHatTeamrocket0,
    #[serde(rename = "AVATAR_m_hat_teamrocketcap")]
    AvatarMHatTeamrocketcap,
    #[serde(rename = "AVATAR_m_hat_teamskull")]
    AvatarMHatTeamskull,
    #[serde(rename = "AVATAR_m_hat_tophat_0")]
    AvatarMHatTophat0,
    #[serde(rename = "AVATAR_m_hat_ultra_0")]
    AvatarMHatUltra0,
    #[serde(rename = "AVATAR_m_hat_ultraReconSquad")]
    AvatarMHatUltraReconSquad,
    #[serde(rename = "AVATAR_m_hat_ultraReconSquadB")]
    AvatarMHatUltraReconSquadB,
    #[serde(rename = "AVATAR_m_hat_verizon2021")]
    AvatarMHatVerizon2021,
    #[serde(rename = "AVATAR_m_hat_wcs2022winnersitems")]
    AvatarMHatWcs2022winnersitems,
    #[serde(rename = "AVATAR_m_hat_whimsicottearmuff")]
    AvatarMHatWhimsicottearmuff,
    #[serde(rename = "AVATAR_m_hat_willowglasses")]
    AvatarMHatWillowglasses,
    #[serde(rename = "AVATAR_m_hat_woobatearrings")]
    AvatarMHatWoobatearrings,
    #[serde(rename = "AVATAR_m_hat_yamaskhat")]
    AvatarMHatYamaskhat,
    #[serde(rename = "AVATAR_m_hat_yamaskmask")]
    AvatarMHatYamaskmask,
    #[serde(rename = "AVATAR_m_hat_zubathat")]
    AvatarMHatZubathat,
    #[serde(rename = "AVATAR_m_jacket_newyear2022")]
    AvatarMJacketNewyear2022,
    #[serde(rename = "AVATAR_m_pants_6thanniversary")]
    AvatarMPants6thanniversary,
    #[serde(rename = "AVATAR_m_pants_7thanniversary")]
    AvatarMPants7thanniversary,
    #[serde(rename = "AVATAR_m_pants_acetrainerbw")]
    AvatarMPantsAcetrainerbw,
    #[serde(rename = "AVATAR_m_pants_acetrainersm")]
    AvatarMPantsAcetrainersm,
    #[serde(rename = "AVATAR_m_pants_animegou")]
    AvatarMPantsAnimegou,
    #[serde(rename = "AVATAR_m_pants_backpacker")]
    AvatarMPantsBackpacker,
    #[serde(rename = "AVATAR_m_pants_bounsweetitems")]
    AvatarMPantsBounsweetitems,
    #[serde(rename = "AVATAR_m_pants_brock")]
    AvatarMPantsBrock,
    #[serde(rename = "AVATAR_m_pants_bwn")]
    AvatarMPantsBwn,
    #[serde(rename = "AVATAR_m_pants_casual_0")]
    AvatarMPantsCasual0,
    #[serde(rename = "AVATAR_m_pants_casual_1")]
    AvatarMPantsCasual1,
    #[serde(rename = "AVATAR_m_pants_clay")]
    AvatarMPantsClay,
    #[serde(rename = "AVATAR_m_pants_default_0")]
    AvatarMPantsDefault0,
    #[serde(rename = "AVATAR_m_pants_denimfashionweek2023")]
    AvatarMPantsDenimfashionweek2023,
    #[serde(rename = "AVATAR_m_pants_dp")]
    AvatarMPantsDp,
    #[serde(rename = "AVATAR_m_pants_elesa")]
    AvatarMPantsElesa,
    #[serde(rename = "AVATAR_m_pants_fashionWeek2022")]
    AvatarMPantsFashionWeek2022,
    #[serde(rename = "AVATAR_m_pants_fisher_0")]
    AvatarMPantsFisher0,
    #[serde(rename = "AVATAR_m_pants_flabebepack")]
    AvatarMPantsFlabebepack,
    #[serde(rename = "AVATAR_m_pants_frlg_0")]
    AvatarMPantsFrlg0,
    #[serde(rename = "AVATAR_m_pants_fw2022")]
    AvatarMPantsFw2022,
    #[serde(rename = "AVATAR_m_pants_geeta")]
    AvatarMPantsGeeta,
    #[serde(rename = "AVATAR_m_pants_genderlessskirt")]
    AvatarMPantsGenderlessskirt,
    #[serde(rename = "AVATAR_m_pants_giovanni")]
    AvatarMPantsGiovanni,
    #[serde(rename = "AVATAR_m_pants_gladion")]
    AvatarMPantsGladion,
    #[serde(rename = "AVATAR_m_pants_gothitelleitems")]
    AvatarMPantsGothitelleitems,
    #[serde(rename = "AVATAR_m_pants_green")]
    AvatarMPantsGreen,
    #[serde(rename = "AVATAR_m_pants_greencoat")]
    AvatarMPantsGreencoat,
    #[serde(rename = "AVATAR_m_pants_guzma")]
    AvatarMPantsGuzma,
    #[serde(rename = "AVATAR_m_pants_gymleader_0")]
    AvatarMPantsGymleader0,
    #[serde(rename = "AVATAR_m_pants_gymleader_1")]
    AvatarMPantsGymleader1,
    #[serde(rename = "AVATAR_m_pants_gymleader_2")]
    AvatarMPantsGymleader2,
    #[serde(rename = "AVATAR_m_pants_hala")]
    AvatarMPantsHala,
    #[serde(rename = "AVATAR_m_pants_hgss_0")]
    AvatarMPantsHgss0,
    #[serde(rename = "AVATAR_m_pants_ingo")]
    AvatarMPantsIngo,
    #[serde(rename = "AVATAR_m_pants_jogger_0")]
    AvatarMPantsJogger0,
    #[serde(rename = "AVATAR_m_pants_korrina")]
    AvatarMPantsKorrina,
    #[serde(rename = "AVATAR_m_pants_loosepants")]
    AvatarMPantsLoosepants,
    #[serde(rename = "AVATAR_m_pants_lunalaitems")]
    AvatarMPantsLunalaitems,
    #[serde(rename = "AVATAR_m_pants_luvdiscpack")]
    AvatarMPantsLuvdiscpack,
    #[serde(rename = "AVATAR_m_pants_lysandre")]
    AvatarMPantsLysandre,
    #[serde(rename = "AVATAR_m_pants_mewtwo")]
    AvatarMPantsMewtwo,
    #[serde(rename = "AVATAR_m_pants_munnapack")]
    AvatarMPantsMunnapack,
    #[serde(rename = "AVATAR_m_pants_newyear2022")]
    AvatarMPantsNewyear2022,
    #[serde(rename = "AVATAR_m_pants_oras")]
    AvatarMPantsOras,
    #[serde(rename = "AVATAR_m_pants_pajamas2022_0")]
    AvatarMPantsPajamas20220,
    #[serde(rename = "AVATAR_m_pants_pajamas2022_1")]
    AvatarMPantsPajamas20221,
    #[serde(rename = "AVATAR_m_pants_palmer")]
    AvatarMPantsPalmer,
    #[serde(rename = "AVATAR_m_pants_pikachufan_0")]
    AvatarMPantsPikachufan0,
    #[serde(rename = "AVATAR_m_pants_pikachulibre")]
    AvatarMPantsPikachulibre,
    #[serde(rename = "AVATAR_m_pants_profwillowoutfit")]
    AvatarMPantsProfwillowoutfit,
    #[serde(rename = "AVATAR_m_pants_pumpkabooitems")]
    AvatarMPantsPumpkabooitems,
    #[serde(rename = "AVATAR_m_pants_regiicejersies")]
    AvatarMPantsRegiicejersies,
    #[serde(rename = "AVATAR_m_pants_regirockjersies")]
    AvatarMPantsRegirockjersies,
    #[serde(rename = "AVATAR_m_pants_registeeljersies")]
    AvatarMPantsRegisteeljersies,
    #[serde(rename = "AVATAR_m_pants_skinnyjeans_0")]
    AvatarMPantsSkinnyjeans0,
    #[serde(rename = "AVATAR_m_pants_skinnyjeans_1")]
    AvatarMPantsSkinnyjeans1,
    #[serde(rename = "AVATAR_m_pants_skinnyjeans_2")]
    AvatarMPantsSkinnyjeans2,
    #[serde(rename = "AVATAR_m_pants_ss")]
    AvatarMPantsSs,
    #[serde(rename = "AVATAR_m_pants_steven")]
    AvatarMPantsSteven,
    #[serde(rename = "AVATAR_m_pants_stevenfirst")]
    AvatarMPantsStevenfirst,
    #[serde(rename = "AVATAR_m_pants_sweats_0")]
    AvatarMPantsSweats0,
    #[serde(rename = "AVATAR_m_pants_sweats_1")]
    AvatarMPantsSweats1,
    #[serde(rename = "AVATAR_m_pants_sweats_2")]
    AvatarMPantsSweats2,
    #[serde(rename = "AVATAR_m_pants_sweats_3")]
    AvatarMPantsSweats3,
    #[serde(rename = "AVATAR_m_pants_sweats_4")]
    AvatarMPantsSweats4,
    #[serde(rename = "AVATAR_m_pants_swshdlc2costume")]
    AvatarMPantsSwshdlc2costume,
    #[serde(rename = "AVATAR_m_pants_swshuniformchampion")]
    AvatarMPantsSwshuniformchampion,
    #[serde(rename = "AVATAR_m_pants_swshuniformdark")]
    AvatarMPantsSwshuniformdark,
    #[serde(rename = "AVATAR_m_pants_swshuniformdefault")]
    AvatarMPantsSwshuniformdefault,
    #[serde(rename = "AVATAR_m_pants_swshuniformdragon")]
    AvatarMPantsSwshuniformdragon,
    #[serde(rename = "AVATAR_m_pants_teamaqua")]
    AvatarMPantsTeamaqua,
    #[serde(rename = "AVATAR_m_pants_teamblanche")]
    AvatarMPantsTeamblanche,
    #[serde(rename = "AVATAR_m_pants_teamcandela")]
    AvatarMPantsTeamcandela,
    #[serde(rename = "AVATAR_m_pants_teammagma")]
    AvatarMPantsTeammagma,
    #[serde(rename = "AVATAR_m_pants_teamrocket_0")]
    AvatarMPantsTeamrocket0,
    #[serde(rename = "AVATAR_m_pants_teamskull")]
    AvatarMPantsTeamskull,
    #[serde(rename = "AVATAR_m_pants_teamspark")]
    AvatarMPantsTeamspark,
    #[serde(rename = "AVATAR_m_pants_ultra_0")]
    AvatarMPantsUltra0,
    #[serde(rename = "AVATAR_m_pants_veterantrainerxy")]
    AvatarMPantsVeterantrainerxy,
    #[serde(rename = "AVATAR_m_pants_wcs2022winnersitems")]
    AvatarMPantsWcs2022winnersitems,
    #[serde(rename = "AVATAR_m_pose_01")]
    AvatarMPose01,
    #[serde(rename = "AVATAR_m_pose_02")]
    AvatarMPose02,
    #[serde(rename = "AVATAR_m_pose_03")]
    AvatarMPose03,
    #[serde(rename = "AVATAR_m_pose_04")]
    AvatarMPose04,
    #[serde(rename = "AVATAR_m_pose_05")]
    AvatarMPose05,
    #[serde(rename = "AVATAR_m_pose_06")]
    AvatarMPose06,
    #[serde(rename = "AVATAR_m_pose_07")]
    AvatarMPose07,
    #[serde(rename = "AVATAR_m_pose_08")]
    AvatarMPose08,
    #[serde(rename = "AVATAR_m_pose_09")]
    AvatarMPose09,
    #[serde(rename = "AVATAR_m_pose_10")]
    AvatarMPose10,
    #[serde(rename = "AVATAR_m_pose_11")]
    AvatarMPose11,
    #[serde(rename = "AVATAR_m_pose_12")]
    AvatarMPose12,
    #[serde(rename = "AVATAR_m_pose_13")]
    AvatarMPose13,
    #[serde(rename = "AVATAR_m_pose_14")]
    AvatarMPose14,
    #[serde(rename = "AVATAR_m_pose_15")]
    AvatarMPose15,
    #[serde(rename = "AVATAR_m_pose_16")]
    AvatarMPose16,
    #[serde(rename = "AVATAR_m_pose_17")]
    AvatarMPose17,
    #[serde(rename = "AVATAR_m_pose_18")]
    AvatarMPose18,
    #[serde(rename = "AVATAR_m_pose_19")]
    AvatarMPose19,
    #[serde(rename = "AVATAR_m_pose_20")]
    AvatarMPose20,
    #[serde(rename = "AVATAR_m_pose_21")]
    AvatarMPose21,
    #[serde(rename = "AVATAR_m_pose_22")]
    AvatarMPose22,
    #[serde(rename = "AVATAR_m_pose_23")]
    AvatarMPose23,
    #[serde(rename = "AVATAR_m_pose_24")]
    AvatarMPose24,
    #[serde(rename = "AVATAR_m_pose_25")]
    AvatarMPose25,
    #[serde(rename = "AVATAR_m_pose_26")]
    AvatarMPose26,
    #[serde(rename = "AVATAR_m_pose_27")]
    AvatarMPose27,
    #[serde(rename = "AVATAR_m_pose_28")]
    AvatarMPose28,
    #[serde(rename = "AVATAR_m_pose_29")]
    AvatarMPose29,
    #[serde(rename = "AVATAR_m_pose_30")]
    AvatarMPose30,
    #[serde(rename = "AVATAR_m_pose_31")]
    AvatarMPose31,
    #[serde(rename = "AVATAR_m_pose_32")]
    AvatarMPose32,
    #[serde(rename = "AVATAR_m_pose_33")]
    AvatarMPose33,
    #[serde(rename = "AVATAR_m_pose_34")]
    AvatarMPose34,
    #[serde(rename = "AVATAR_m_pose_35")]
    AvatarMPose35,
    #[serde(rename = "AVATAR_m_pose_36")]
    AvatarMPose36,
    #[serde(rename = "AVATAR_m_pose_37")]
    AvatarMPose37,
    #[serde(rename = "AVATAR_m_pose_38")]
    AvatarMPose38,
    #[serde(rename = "AVATAR_m_pose_39")]
    AvatarMPose39,
    #[serde(rename = "AVATAR_m_pose_40")]
    AvatarMPose40,
    #[serde(rename = "AVATAR_m_pose_41")]
    AvatarMPose41,
    #[serde(rename = "AVATAR_m_pose_43")]
    AvatarMPose43,
    #[serde(rename = "AVATAR_m_pose_44")]
    AvatarMPose44,
    #[serde(rename = "AVATAR_m_pose_45")]
    AvatarMPose45,
    #[serde(rename = "AVATAR_m_pose_46")]
    AvatarMPose46,
    #[serde(rename = "AVATAR_m_pose_47")]
    AvatarMPose47,
    #[serde(rename = "AVATAR_m_pose_48")]
    AvatarMPose48,
    #[serde(rename = "AVATAR_m_pose_49")]
    AvatarMPose49,
    #[serde(rename = "AVATAR_m_pose_50")]
    AvatarMPose50,
    #[serde(rename = "AVATAR_m_pose_51")]
    AvatarMPose51,
    #[serde(rename = "AVATAR_m_pose_52")]
    AvatarMPose52,
    #[serde(rename = "AVATAR_m_pose_53")]
    AvatarMPose53,
    #[serde(rename = "AVATAR_m_pose_54")]
    AvatarMPose54,
    #[serde(rename = "AVATAR_m_pose_55")]
    AvatarMPose55,
    #[serde(rename = "AVATAR_m_pose_56")]
    AvatarMPose56,
    #[serde(rename = "AVATAR_m_pose_57")]
    AvatarMPose57,
    #[serde(rename = "AVATAR_m_pose_58")]
    AvatarMPose58,
    #[serde(rename = "AVATAR_m_pose_59")]
    AvatarMPose59,
    #[serde(rename = "AVATAR_m_pose_60")]
    AvatarMPose60,
    #[serde(rename = "AVATAR_m_pose_61")]
    AvatarMPose61,
    #[serde(rename = "AVATAR_m_pose_62")]
    AvatarMPose62,
    #[serde(rename = "AVATAR_m_pose_63")]
    AvatarMPose63,
    #[serde(rename = "AVATAR_m_pose_64")]
    AvatarMPose64,
    #[serde(rename = "AVATAR_m_pose_empty")]
    AvatarMPoseEmpty,
    #[serde(rename = "AVATAR_m_shirt_6thanniversary")]
    AvatarMShirt6thanniversary,
    #[serde(rename = "AVATAR_m_shirt_7thanniversary")]
    AvatarMShirt7thanniversary,
    #[serde(rename = "AVATAR_m_shirt_acetrainerbw")]
    AvatarMShirtAcetrainerbw,
    #[serde(rename = "AVATAR_m_shirt_acetrainersm")]
    AvatarMShirtAcetrainersm,
    #[serde(rename = "AVATAR_m_shirt_alolacomfey")]
    AvatarMShirtAlolacomfey,
    #[serde(rename = "AVATAR_m_shirt_animegou")]
    AvatarMShirtAnimegou,
    #[serde(rename = "AVATAR_m_shirt_aseries")]
    AvatarMShirtAseries,
    #[serde(rename = "AVATAR_m_shirt_backpacker")]
    AvatarMShirtBackpacker,
    #[serde(rename = "AVATAR_m_shirt_ballguy")]
    AvatarMShirtBallguy,
    #[serde(rename = "AVATAR_m_shirt_bea")]
    AvatarMShirtBea,
    #[serde(rename = "AVATAR_m_shirt_blazer_0")]
    AvatarMShirtBlazer0,
    #[serde(rename = "AVATAR_m_shirt_bounsweetitems")]
    AvatarMShirtBounsweetitems,
    #[serde(rename = "AVATAR_m_shirt_brock")]
    AvatarMShirtBrock,
    #[serde(rename = "AVATAR_m_shirt_buzzwoleitems")]
    AvatarMShirtBuzzwoleitems,
    #[serde(rename = "AVATAR_m_shirt_bwn")]
    AvatarMShirtBwn,
    #[serde(rename = "AVATAR_m_shirt_casual_0")]
    AvatarMShirtCasual0,
    #[serde(rename = "AVATAR_m_shirt_casual_1")]
    AvatarMShirtCasual1,
    #[serde(rename = "AVATAR_m_shirt_casual_2")]
    AvatarMShirtCasual2,
    #[serde(rename = "AVATAR_m_shirt_casual_3")]
    AvatarMShirtCasual3,
    #[serde(rename = "AVATAR_m_shirt_celebi_0")]
    AvatarMShirtCelebi0,
    #[serde(rename = "AVATAR_m_shirt_chimcharonesie")]
    AvatarMShirtChimcharonesie,
    #[serde(rename = "AVATAR_m_shirt_clay")]
    AvatarMShirtClay,
    #[serde(rename = "AVATAR_m_shirt_cofagrigusitems")]
    AvatarMShirtCofagrigusitems,
    #[serde(rename = "AVATAR_m_shirt_cosmog")]
    AvatarMShirtCosmog,
    #[serde(rename = "AVATAR_m_shirt_cowichansweater")]
    AvatarMShirtCowichansweater,
    #[serde(rename = "AVATAR_m_shirt_dayofdead")]
    AvatarMShirtDayofdead,
    #[serde(rename = "AVATAR_m_shirt_default_0")]
    AvatarMShirtDefault0,
    #[serde(rename = "AVATAR_m_shirt_default_1")]
    AvatarMShirtDefault1,
    #[serde(rename = "AVATAR_m_shirt_default_2")]
    AvatarMShirtDefault2,
    #[serde(rename = "AVATAR_m_shirt_default_2B")]
    AvatarMShirtDefault2b,
    #[serde(rename = "AVATAR_m_shirt_default_3")]
    AvatarMShirtDefault3,
    #[serde(rename = "AVATAR_m_shirt_default_4")]
    AvatarMShirtDefault4,
    #[serde(rename = "AVATAR_m_shirt_default_5")]
    AvatarMShirtDefault5,
    #[serde(rename = "AVATAR_m_shirt_default_6")]
    AvatarMShirtDefault6,
    #[serde(rename = "AVATAR_m_shirt_default_7")]
    AvatarMShirtDefault7,
    #[serde(rename = "AVATAR_m_shirt_delibird")]
    AvatarMShirtDelibird,
    #[serde(rename = "AVATAR_m_shirt_delibirdonesie")]
    AvatarMShirtDelibirdonesie,
    #[serde(rename = "AVATAR_m_shirt_denimfashionweek2023")]
    AvatarMShirtDenimfashionweek2023,
    #[serde(rename = "AVATAR_m_shirt_denimjacket")]
    AvatarMShirtDenimjacket,
    #[serde(rename = "AVATAR_m_shirt_detectivepikachu")]
    AvatarMShirtDetectivepikachu,
    #[serde(rename = "AVATAR_m_shirt_diancie")]
    AvatarMShirtDiancie,
    #[serde(rename = "AVATAR_m_shirt_divingsuit")]
    AvatarMShirtDivingsuit,
    #[serde(rename = "AVATAR_m_shirt_diwali2021")]
    AvatarMShirtDiwali2021,
    #[serde(rename = "AVATAR_m_shirt_dp")]
    AvatarMShirtDp,
    #[serde(rename = "AVATAR_m_shirt_drifblim_0")]
    AvatarMShirtDrifblim0,
    #[serde(rename = "AVATAR_m_shirt_dusclopsmummy")]
    AvatarMShirtDusclopsmummy,
    #[serde(rename = "AVATAR_m_shirt_earthday_2018")]
    AvatarMShirtEarthday2018,
    #[serde(rename = "AVATAR_m_shirt_eeveestshirt_00")]
    AvatarMShirtEeveestshirt00,
    #[serde(rename = "AVATAR_m_shirt_eeveestshirt_01")]
    AvatarMShirtEeveestshirt01,
    #[serde(rename = "AVATAR_m_shirt_eeveestshirt_02")]
    AvatarMShirtEeveestshirt02,
    #[serde(rename = "AVATAR_m_shirt_eeveestshirt_03")]
    AvatarMShirtEeveestshirt03,
    #[serde(rename = "AVATAR_m_shirt_eeveestshirt_04")]
    AvatarMShirtEeveestshirt04,
    #[serde(rename = "AVATAR_m_shirt_eeveestshirt_05")]
    AvatarMShirtEeveestshirt05,
    #[serde(rename = "AVATAR_m_shirt_eeveestshirt_06")]
    AvatarMShirtEeveestshirt06,
    #[serde(rename = "AVATAR_m_shirt_eeveestshirt_07")]
    AvatarMShirtEeveestshirt07,
    #[serde(rename = "AVATAR_m_shirt_eeveestshirt_08")]
    AvatarMShirtEeveestshirt08,
    #[serde(rename = "AVATAR_m_shirt_elesa")]
    AvatarMShirtElesa,
    #[serde(rename = "AVATAR_m_shirt_fashionWeek2022")]
    AvatarMShirtFashionWeek2022,
    #[serde(rename = "AVATAR_m_shirt_festivaloflights_00")]
    AvatarMShirtFestivaloflights00,
    #[serde(rename = "AVATAR_m_shirt_festivaloflights_01")]
    AvatarMShirtFestivaloflights01,
    #[serde(rename = "AVATAR_m_shirt_fisher_0")]
    AvatarMShirtFisher0,
    #[serde(rename = "AVATAR_m_shirt_flabebepack")]
    AvatarMShirtFlabebepack,
    #[serde(rename = "AVATAR_m_shirt_fragment_0")]
    AvatarMShirtFragment0,
    #[serde(rename = "AVATAR_m_shirt_frlg_0")]
    AvatarMShirtFrlg0,
    #[serde(rename = "AVATAR_m_shirt_fw2022")]
    AvatarMShirtFw2022,
    #[serde(rename = "AVATAR_m_shirt_galarfarfetchditems")]
    AvatarMShirtGalarfarfetchditems,
    #[serde(rename = "AVATAR_m_shirt_galaxyoutfit")]
    AvatarMShirtGalaxyoutfit,
    #[serde(rename = "AVATAR_m_shirt_geeta")]
    AvatarMShirtGeeta,
    #[serde(rename = "AVATAR_m_shirt_genderlessskirt")]
    AvatarMShirtGenderlessskirt,
    #[serde(rename = "AVATAR_m_shirt_gengar_0")]
    AvatarMShirtGengar0,
    #[serde(rename = "AVATAR_m_shirt_gengaronesie")]
    AvatarMShirtGengaronesie,
    #[serde(rename = "AVATAR_m_shirt_giovanni")]
    AvatarMShirtGiovanni,
    #[serde(rename = "AVATAR_m_shirt_giratinaitems")]
    AvatarMShirtGiratinaitems,
    #[serde(rename = "AVATAR_m_shirt_gladion")]
    AvatarMShirtGladion,
    #[serde(rename = "AVATAR_m_shirt_gofest_2019")]
    AvatarMShirtGofest2019,
    #[serde(rename = "AVATAR_m_shirt_gofest_2020")]
    AvatarMShirtGofest2020,
    #[serde(rename = "AVATAR_m_shirt_gofest_2021")]
    AvatarMShirtGofest2021,
    #[serde(rename = "AVATAR_m_shirt_gofest2022")]
    AvatarMShirtGofest2022,
    #[serde(rename = "AVATAR_m_shirt_gofest2023")]
    AvatarMShirtGofest2023,
    #[serde(rename = "AVATAR_m_shirt_gofest2024darkgray")]
    AvatarMShirtGofest2024darkgray,
    #[serde(rename = "AVATAR_m_shirt_gofest2024gray")]
    AvatarMShirtGofest2024gray,
    #[serde(rename = "AVATAR_m_shirt_gofest2024purple")]
    AvatarMShirtGofest2024purple,
    #[serde(rename = "AVATAR_m_shirt_gofestglobal2023")]
    AvatarMShirtGofestglobal2023,
    #[serde(rename = "AVATAR_m_shirt_goteamrocketarlo")]
    AvatarMShirtGoteamrocketarlo,
    #[serde(rename = "AVATAR_m_shirt_goteamrocketcliff")]
    AvatarMShirtGoteamrocketcliff,
    #[serde(rename = "AVATAR_m_shirt_goteamrocketsierra")]
    AvatarMShirtGoteamrocketsierra,
    #[serde(rename = "AVATAR_m_shirt_gothitelleitems")]
    AvatarMShirtGothitelleitems,
    #[serde(rename = "AVATAR_m_shirt_gotour2023")]
    AvatarMShirtGotour2023,
    #[serde(rename = "AVATAR_m_shirt_gotour2024")]
    AvatarMShirtGotour2024,
    #[serde(rename = "AVATAR_m_shirt_greedentsweater")]
    AvatarMShirtGreedentsweater,
    #[serde(rename = "AVATAR_m_shirt_green")]
    AvatarMShirtGreen,
    #[serde(rename = "AVATAR_m_shirt_greencoat")]
    AvatarMShirtGreencoat,
    #[serde(rename = "AVATAR_m_shirt_gtrtshirt2022_00")]
    AvatarMShirtGtrtshirt202200,
    #[serde(rename = "AVATAR_m_shirt_gtrtshirt2022_01")]
    AvatarMShirtGtrtshirt202201,
    #[serde(rename = "AVATAR_m_shirt_guccitshirts")]
    AvatarMShirtGuccitshirts,
    #[serde(rename = "AVATAR_m_shirt_guzma")]
    AvatarMShirtGuzma,
    #[serde(rename = "AVATAR_m_shirt_gymleader_0")]
    AvatarMShirtGymleader0,
    #[serde(rename = "AVATAR_m_shirt_gymleader_1")]
    AvatarMShirtGymleader1,
    #[serde(rename = "AVATAR_m_shirt_gymleader_2")]
    AvatarMShirtGymleader2,
    #[serde(rename = "AVATAR_m_shirt_hala")]
    AvatarMShirtHala,
    #[serde(rename = "AVATAR_m_shirt_happi")]
    AvatarMShirtHappi,
    #[serde(rename = "AVATAR_m_shirt_happi_1")]
    AvatarMShirtHappi1,
    #[serde(rename = "AVATAR_m_shirt_happi_2")]
    AvatarMShirtHappi2,
    #[serde(rename = "AVATAR_m_shirt_hgss_0")]
    AvatarMShirtHgss0,
    #[serde(rename = "AVATAR_m_shirt_holiday2022santacostumes")]
    AvatarMShirtHoliday2022santacostumes,
    #[serde(rename = "AVATAR_m_shirt_holifestival2021black")]
    AvatarMShirtHolifestival2021black,
    #[serde(rename = "AVATAR_m_shirt_holifestival2021white")]
    AvatarMShirtHolifestival2021white,
    #[serde(rename = "AVATAR_m_shirt_hoopaunboundtshirt")]
    AvatarMShirtHoopaunboundtshirt,
    #[serde(rename = "AVATAR_m_shirt_ingo")]
    AvatarMShirtIngo,
    #[serde(rename = "AVATAR_m_shirt_ingress_0")]
    AvatarMShirtIngress0,
    #[serde(rename = "AVATAR_m_shirt_ingress_e_0")]
    AvatarMShirtIngressE0,
    #[serde(rename = "AVATAR_m_shirt_ingress_r_0")]
    AvatarMShirtIngressR0,
    #[serde(rename = "AVATAR_m_shirt_james")]
    AvatarMShirtJames,
    #[serde(rename = "AVATAR_m_shirt_jirachi")]
    AvatarMShirtJirachi,
    #[serde(rename = "AVATAR_m_shirt_jogger_0")]
    AvatarMShirtJogger0,
    #[serde(rename = "AVATAR_m_shirt_keldeotshirt")]
    AvatarMShirtKeldeotshirt,
    #[serde(rename = "AVATAR_m_shirt_korrina")]
    AvatarMShirtKorrina,
    #[serde(rename = "AVATAR_m_shirt_ladiamondoutfit")]
    AvatarMShirtLadiamondoutfit,
    #[serde(rename = "AVATAR_m_shirt_lana")]
    AvatarMShirtLana,
    #[serde(rename = "AVATAR_m_shirt_lapearloutfit")]
    AvatarMShirtLapearloutfit,
    #[serde(rename = "AVATAR_m_shirt_lasecuritycorps")]
    AvatarMShirtLasecuritycorps,
    #[serde(rename = "AVATAR_m_shirt_latias_latios_0")]
    AvatarMShirtLatiasLatios0,
    #[serde(rename = "AVATAR_m_shirt_legendofarceus")]
    AvatarMShirtLegendofarceus,
    #[serde(rename = "AVATAR_m_shirt_longsleeves_charizard_0")]
    AvatarMShirtLongsleevesCharizard0,
    #[serde(rename = "AVATAR_m_shirt_longsleeves_charizard_1")]
    AvatarMShirtLongsleevesCharizard1,
    #[serde(rename = "AVATAR_m_shirt_longsleeves_charizard_2")]
    AvatarMShirtLongsleevesCharizard2,
    #[serde(rename = "AVATAR_m_shirt_longsleeves_pikachu_0")]
    AvatarMShirtLongsleevesPikachu0,
    #[serde(rename = "AVATAR_m_shirt_longsleeves_pikachu_1")]
    AvatarMShirtLongsleevesPikachu1,
    #[serde(rename = "AVATAR_m_shirt_longsleeves_pikachu_2")]
    AvatarMShirtLongsleevesPikachu2,
    #[serde(rename = "AVATAR_m_shirt_luvdiscpack")]
    AvatarMShirtLuvdiscpack,
    #[serde(rename = "AVATAR_m_shirt_lvl50")]
    AvatarMShirtLvl50,
    #[serde(rename = "AVATAR_m_shirt_lvl50_1")]
    AvatarMShirtLvl501,
    #[serde(rename = "AVATAR_m_shirt_lysandre")]
    AvatarMShirtLysandre,
    #[serde(rename = "AVATAR_m_shirt_marshadowtshirt")]
    AvatarMShirtMarshadowtshirt,
    #[serde(rename = "AVATAR_m_shirt_megalopunnyitems")]
    AvatarMShirtMegalopunnyitems,
    #[serde(rename = "AVATAR_m_shirt_megarayquaza")]
    AvatarMShirtMegarayquaza,
    #[serde(rename = "AVATAR_m_shirt_melmetaljacket")]
    AvatarMShirtMelmetaljacket,
    #[serde(rename = "AVATAR_m_shirt_melmetalvest")]
    AvatarMShirtMelmetalvest,
    #[serde(rename = "AVATAR_m_shirt_meloettatshirt")]
    AvatarMShirtMeloettatshirt,
    #[serde(rename = "AVATAR_m_shirt_meltan")]
    AvatarMShirtMeltan,
    #[serde(rename = "AVATAR_m_shirt_mew_0")]
    AvatarMShirtMew0,
    #[serde(rename = "AVATAR_m_shirt_mewtwo")]
    AvatarMShirtMewtwo,
    #[serde(rename = "AVATAR_m_shirt_movie2020jessiejames")]
    AvatarMShirtMovie2020jessiejames,
    #[serde(rename = "AVATAR_m_shirt_munnapack")]
    AvatarMShirtMunnapack,
    #[serde(rename = "AVATAR_m_shirt_nike2021")]
    AvatarMShirtNike2021,
    #[serde(rename = "AVATAR_m_shirt_ocshirt_045")]
    AvatarMShirtOcshirt045,
    #[serde(rename = "AVATAR_m_shirt_ocshirt_108")]
    AvatarMShirtOcshirt108,
    #[serde(rename = "AVATAR_m_shirt_ocshirt_129")]
    AvatarMShirtOcshirt129,
    #[serde(rename = "AVATAR_m_shirt_ocshirt_143")]
    AvatarMShirtOcshirt143,
    #[serde(rename = "AVATAR_m_shirt_oras")]
    AvatarMShirtOras,
    #[serde(rename = "AVATAR_m_shirt_pajamas2022_0")]
    AvatarMShirtPajamas20220,
    #[serde(rename = "AVATAR_m_shirt_pajamas2022_1")]
    AvatarMShirtPajamas20221,
    #[serde(rename = "AVATAR_m_shirt_palmer")]
    AvatarMShirtPalmer,
    #[serde(rename = "AVATAR_m_shirt_partneritemsjan2024hoodie")]
    AvatarMShirtPartneritemsjan2024hoodie,
    #[serde(rename = "AVATAR_m_shirt_partneritemsjan2024tshirt")]
    AvatarMShirtPartneritemsjan2024tshirt,
    #[serde(rename = "AVATAR_m_shirt_pikachufan_0")]
    AvatarMShirtPikachufan0,
    #[serde(rename = "AVATAR_m_shirt_pikachulibre")]
    AvatarMShirtPikachulibre,
    #[serde(rename = "AVATAR_m_shirt_pikachuonesie")]
    AvatarMShirtPikachuonesie,
    #[serde(rename = "AVATAR_m_shirt_pinpukuhoodie")]
    AvatarMShirtPinpukuhoodie,
    #[serde(rename = "AVATAR_m_shirt_pipluponesie")]
    AvatarMShirtPipluponesie,
    #[serde(rename = "AVATAR_m_shirt_pkmnhoodie001")]
    AvatarMShirtPkmnhoodie001,
    #[serde(rename = "AVATAR_m_shirt_pkmnhoodie004")]
    AvatarMShirtPkmnhoodie004,
    #[serde(rename = "AVATAR_m_shirt_pkmnhoodie007")]
    AvatarMShirtPkmnhoodie007,
    #[serde(rename = "AVATAR_m_shirt_pkmnshirts_165")]
    AvatarMShirtPkmnshirts165,
    #[serde(rename = "AVATAR_m_shirt_pkmnshirts_188")]
    AvatarMShirtPkmnshirts188,
    #[serde(rename = "AVATAR_m_shirt_pkmnshirts_201")]
    AvatarMShirtPkmnshirts201,
    #[serde(rename = "AVATAR_m_shirt_pkmnshirts_238")]
    AvatarMShirtPkmnshirts238,
    #[serde(rename = "AVATAR_m_shirt_pkmnshirts2021_00")]
    AvatarMShirtPkmnshirts202100,
    #[serde(rename = "AVATAR_m_shirt_pkmnshirts2021_01")]
    AvatarMShirtPkmnshirts202101,
    #[serde(rename = "AVATAR_m_shirt_pkmnshirts2021_02")]
    AvatarMShirtPkmnshirts202102,
    #[serde(rename = "AVATAR_m_shirt_poloshirt")]
    AvatarMShirtPoloshirt,
    #[serde(rename = "AVATAR_m_shirt_poloshirt_1")]
    AvatarMShirtPoloshirt1,
    #[serde(rename = "AVATAR_m_shirt_poloshirt_2")]
    AvatarMShirtPoloshirt2,
    #[serde(rename = "AVATAR_m_shirt_profwillowoutfit")]
    AvatarMShirtProfwillowoutfit,
    #[serde(rename = "AVATAR_m_shirt_projectguitar")]
    AvatarMShirtProjectguitar,
    #[serde(rename = "AVATAR_m_shirt_pumpkabooitems")]
    AvatarMShirtPumpkabooitems,
    #[serde(rename = "AVATAR_m_shirt_regiicejersies")]
    AvatarMShirtRegiicejersies,
    #[serde(rename = "AVATAR_m_shirt_regirockjersies")]
    AvatarMShirtRegirockjersies,
    #[serde(rename = "AVATAR_m_shirt_registeeljersies")]
    AvatarMShirtRegisteeljersies,
    #[serde(rename = "AVATAR_m_shirt_reuniclusitems")]
    AvatarMShirtReuniclusitems,
    #[serde(rename = "AVATAR_m_shirt_ruinmaniac")]
    AvatarMShirtRuinmaniac,
    #[serde(rename = "AVATAR_m_shirt_safarizone2020")]
    AvatarMShirtSafarizone2020,
    #[serde(rename = "AVATAR_m_shirt_samsungsummer2020")]
    AvatarMShirtSamsungsummer2020,
    #[serde(rename = "AVATAR_m_shirt_shayminlandtshirt")]
    AvatarMShirtShayminlandtshirt,
    #[serde(rename = "AVATAR_m_shirt_shayminskytshirt")]
    AvatarMShirtShayminskytshirt,
    #[serde(rename = "AVATAR_m_shirt_shinymewtshirts")]
    AvatarMShirtShinymewtshirts,
    #[serde(rename = "AVATAR_m_shirt_slowpokeshirts")]
    AvatarMShirtSlowpokeshirts,
    #[serde(rename = "AVATAR_m_shirt_slowpoketailshirts")]
    AvatarMShirtSlowpoketailshirts,
    #[serde(rename = "AVATAR_m_shirt_snorlaxonesie")]
    AvatarMShirtSnorlaxonesie,
    #[serde(rename = "AVATAR_m_shirt_spiritomb_0")]
    AvatarMShirtSpiritomb0,
    #[serde(rename = "AVATAR_m_shirt_spring2021gulpin")]
    AvatarMShirtSpring2021gulpin,
    #[serde(rename = "AVATAR_m_shirt_spring2021plusle")]
    AvatarMShirtSpring2021plusle,
    #[serde(rename = "AVATAR_m_shirt_ss")]
    AvatarMShirtSs,
    #[serde(rename = "AVATAR_m_shirt_steven")]
    AvatarMShirtSteven,
    #[serde(rename = "AVATAR_m_shirt_stevenfirst")]
    AvatarMShirtStevenfirst,
    #[serde(rename = "AVATAR_m_shirt_sukajanblastoise")]
    AvatarMShirtSukajanblastoise,
    #[serde(rename = "AVATAR_m_shirt_sukajancharizard")]
    AvatarMShirtSukajancharizard,
    #[serde(rename = "AVATAR_m_shirt_sukajanhouou")]
    AvatarMShirtSukajanhouou,
    #[serde(rename = "AVATAR_m_shirt_sukajanlugia")]
    AvatarMShirtSukajanlugia,
    #[serde(rename = "AVATAR_m_shirt_sukajanvenusaur")]
    AvatarMShirtSukajanvenusaur,
    #[serde(rename = "AVATAR_m_shirt_summer2023")]
    AvatarMShirtSummer2023,
    #[serde(rename = "AVATAR_m_shirt_sustainability2021")]
    AvatarMShirtSustainability2021,
    #[serde(rename = "AVATAR_m_shirt_svcostumescarletschool")]
    AvatarMShirtSvcostumescarletschool,
    #[serde(rename = "AVATAR_m_shirt_svcostumevioletschool")]
    AvatarMShirtSvcostumevioletschool,
    #[serde(rename = "AVATAR_m_shirt_svdlc1")]
    AvatarMShirtSvdlc1,
    #[serde(rename = "AVATAR_m_shirt_svdlc2fall")]
    AvatarMShirtSvdlc2fall,
    #[serde(rename = "AVATAR_m_shirt_svdlc2spring")]
    AvatarMShirtSvdlc2spring,
    #[serde(rename = "AVATAR_m_shirt_sweatshirt_sporty_0")]
    AvatarMShirtSweatshirtSporty0,
    #[serde(rename = "AVATAR_m_shirt_sweatshirt_sporty_1")]
    AvatarMShirtSweatshirtSporty1,
    #[serde(rename = "AVATAR_m_shirt_sweatshirt_sporty_2")]
    AvatarMShirtSweatshirtSporty2,
    #[serde(rename = "AVATAR_m_shirt_sweatshirt_sporty_3")]
    AvatarMShirtSweatshirtSporty3,
    #[serde(rename = "AVATAR_m_shirt_sweatshirt_streak_0")]
    AvatarMShirtSweatshirtStreak0,
    #[serde(rename = "AVATAR_m_shirt_sweatshirt_streak_1")]
    AvatarMShirtSweatshirtStreak1,
    #[serde(rename = "AVATAR_m_shirt_sweatshirt_streak_2")]
    AvatarMShirtSweatshirtStreak2,
    #[serde(rename = "AVATAR_m_shirt_sweatshirt_streak_3")]
    AvatarMShirtSweatshirtStreak3,
    #[serde(rename = "AVATAR_m_shirt_sweatshirt_streak_4")]
    AvatarMShirtSweatshirtStreak4,
    #[serde(rename = "AVATAR_m_shirt_swshdlc2costume")]
    AvatarMShirtSwshdlc2costume,
    #[serde(rename = "AVATAR_m_shirt_swshdlccostume")]
    AvatarMShirtSwshdlccostume,
    #[serde(rename = "AVATAR_m_shirt_swshuniformchampion")]
    AvatarMShirtSwshuniformchampion,
    #[serde(rename = "AVATAR_m_shirt_swshuniformdark")]
    AvatarMShirtSwshuniformdark,
    #[serde(rename = "AVATAR_m_shirt_swshuniformdefault")]
    AvatarMShirtSwshuniformdefault,
    #[serde(rename = "AVATAR_m_shirt_swshuniformdragon")]
    AvatarMShirtSwshuniformdragon,
    #[serde(rename = "AVATAR_m_shirt_sylveonitems")]
    AvatarMShirtSylveonitems,
    #[serde(rename = "AVATAR_m_shirt_tcgcollabtshirtandcap")]
    AvatarMShirtTcgcollabtshirtandcap,
    #[serde(rename = "AVATAR_m_shirt_teamaqua")]
    AvatarMShirtTeamaqua,
    #[serde(rename = "AVATAR_m_shirt_teamblanche")]
    AvatarMShirtTeamblanche,
    #[serde(rename = "AVATAR_m_shirt_teamcandela")]
    AvatarMShirtTeamcandela,
    #[serde(rename = "AVATAR_m_shirt_teammagma")]
    AvatarMShirtTeammagma,
    #[serde(rename = "AVATAR_m_shirt_teamrocket_0")]
    AvatarMShirtTeamrocket0,
    #[serde(rename = "AVATAR_m_shirt_teamrocket_1")]
    AvatarMShirtTeamrocket1,
    #[serde(rename = "AVATAR_m_shirt_teamskull")]
    AvatarMShirtTeamskull,
    #[serde(rename = "AVATAR_m_shirt_teamspark")]
    AvatarMShirtTeamspark,
    #[serde(rename = "AVATAR_m_shirt_togepihoodie")]
    AvatarMShirtTogepihoodie,
    #[serde(rename = "AVATAR_m_shirt_tracksuitsgroudon")]
    AvatarMShirtTracksuitsgroudon,
    #[serde(rename = "AVATAR_m_shirt_tracksuitskyogre")]
    AvatarMShirtTracksuitskyogre,
    #[serde(rename = "AVATAR_m_shirt_tshirt_fest_chicago_2017")]
    AvatarMShirtTshirtFestChicago2017,
    #[serde(rename = "AVATAR_m_shirt_tshirt_fest_chicago_2018")]
    AvatarMShirtTshirtFestChicago2018,
    #[serde(rename = "AVATAR_m_shirt_tshirt_geometric_0")]
    AvatarMShirtTshirtGeometric0,
    #[serde(rename = "AVATAR_m_shirt_tshirt_geometric_1")]
    AvatarMShirtTshirtGeometric1,
    #[serde(rename = "AVATAR_m_shirt_tshirt_geometric_2")]
    AvatarMShirtTshirtGeometric2,
    #[serde(rename = "AVATAR_m_shirt_tshirt_global_goals_2017")]
    AvatarMShirtTshirtGlobalGoals2017,
    #[serde(rename = "AVATAR_m_shirt_tshirt_instinct")]
    AvatarMShirtTshirtInstinct,
    #[serde(rename = "AVATAR_m_shirt_tshirt_mystic")]
    AvatarMShirtTshirtMystic,
    #[serde(rename = "AVATAR_m_shirt_tshirt_valor")]
    AvatarMShirtTshirtValor,
    #[serde(rename = "AVATAR_m_shirt_turtleneck_30_0")]
    AvatarMShirtTurtleneck300,
    #[serde(rename = "AVATAR_m_shirt_turtleneck_30_1")]
    AvatarMShirtTurtleneck301,
    #[serde(rename = "AVATAR_m_shirt_turtleneck_30_2")]
    AvatarMShirtTurtleneck302,
    #[serde(rename = "AVATAR_m_shirt_turtleneck_30_3")]
    AvatarMShirtTurtleneck303,
    #[serde(rename = "AVATAR_m_shirt_turtwigonesie")]
    AvatarMShirtTurtwigonesie,
    #[serde(rename = "AVATAR_m_shirt_ultra_0")]
    AvatarMShirtUltra0,
    #[serde(rename = "AVATAR_m_shirt_ultraReconSquad")]
    AvatarMShirtUltraReconSquad,
    #[serde(rename = "AVATAR_m_shirt_uniqlotshirts_0")]
    AvatarMShirtUniqlotshirts0,
    #[serde(rename = "AVATAR_m_shirt_uniqlotshirts_1")]
    AvatarMShirtUniqlotshirts1,
    #[serde(rename = "AVATAR_m_shirt_uniqlotshirts_2")]
    AvatarMShirtUniqlotshirts2,
    #[serde(rename = "AVATAR_m_shirt_unwto")]
    AvatarMShirtUnwto,
    #[serde(rename = "AVATAR_m_shirt_valentine2023")]
    AvatarMShirtValentine2023,
    #[serde(rename = "AVATAR_m_shirt_verizon2020")]
    AvatarMShirtVerizon2020,
    #[serde(rename = "AVATAR_m_shirt_veterantrainerxy")]
    AvatarMShirtVeterantrainerxy,
    #[serde(rename = "AVATAR_m_shirt_victinitshirts")]
    AvatarMShirtVictinitshirts,
    #[serde(rename = "AVATAR_m_shirt_wcs2022")]
    AvatarMShirtWcs2022,
    #[serde(rename = "AVATAR_m_shirt_wcs2022tshirtbulu")]
    AvatarMShirtWcs2022tshirtbulu,
    #[serde(rename = "AVATAR_m_shirt_wcs2022tshirtred")]
    AvatarMShirtWcs2022tshirtred,
    #[serde(rename = "AVATAR_m_shirt_wcs2022winnersitems")]
    AvatarMShirtWcs2022winnersitems,
    #[serde(rename = "AVATAR_m_shirt_wcs2023")]
    AvatarMShirtWcs2023,
    #[serde(rename = "AVATAR_m_shirt_wcs2023promotshirt")]
    AvatarMShirtWcs2023promotshirt,
    #[serde(rename = "AVATAR_m_shirt_wcs2023promotshirt_01")]
    AvatarMShirtWcs2023promotshirt01,
    #[serde(rename = "AVATAR_m_shirt_wcs2023sukajan")]
    AvatarMShirtWcs2023sukajan,
    #[serde(rename = "AVATAR_m_shirt_wcs2023winnersitems")]
    AvatarMShirtWcs2023winnersitems,
    #[serde(rename = "AVATAR_m_shirt_wcs2024")]
    AvatarMShirtWcs2024,
    #[serde(rename = "AVATAR_m_shirt_wcs2024championshipshirt-blue")]
    AvatarMShirtWcs2024championshipshirtBlue,
    #[serde(rename = "AVATAR_m_shirt_wcs2024championshipshirt-white")]
    AvatarMShirtWcs2024championshipshirtWhite,
    #[serde(rename = "AVATAR_m_shirt_wcsyokohama")]
    AvatarMShirtWcsyokohama,
    #[serde(rename = "AVATAR_m_shirt_whitecoat")]
    AvatarMShirtWhitecoat,
    #[serde(rename = "AVATAR_m_shirt_wintersweater2023")]
    AvatarMShirtWintersweater2023,
    #[serde(rename = "AVATAR_m_shirt_zoruaonesie")]
    AvatarMShirtZoruaonesie,
    #[serde(rename = "AVATAR_m_shoes_6thanniversary")]
    AvatarMShoes6thanniversary,
    #[serde(rename = "AVATAR_m_shoes_acetrainerbw")]
    AvatarMShoesAcetrainerbw,
    #[serde(rename = "AVATAR_m_shoes_acetrainersm")]
    AvatarMShoesAcetrainersm,
    #[serde(rename = "AVATAR_m_shoes_animegou")]
    AvatarMShoesAnimegou,
    #[serde(rename = "AVATAR_m_shoes_backpacker")]
    AvatarMShoesBackpacker,
    #[serde(rename = "AVATAR_m_shoes_brock")]
    AvatarMShoesBrock,
    #[serde(rename = "AVATAR_m_shoes_bwn")]
    AvatarMShoesBwn,
    #[serde(rename = "AVATAR_m_shoes_carbink")]
    AvatarMShoesCarbink,
    #[serde(rename = "AVATAR_m_shoes_clay")]
    AvatarMShoesClay,
    #[serde(rename = "AVATAR_m_shoes_coolboots")]
    AvatarMShoesCoolboots,
    #[serde(rename = "AVATAR_m_shoes_dedenneitems")]
    AvatarMShoesDedenneitems,
    #[serde(rename = "AVATAR_m_shoes_default_0")]
    AvatarMShoesDefault0,
    #[serde(rename = "AVATAR_m_shoes_default_1")]
    AvatarMShoesDefault1,
    #[serde(rename = "AVATAR_m_shoes_default_2")]
    AvatarMShoesDefault2,
    #[serde(rename = "AVATAR_m_shoes_default_3")]
    AvatarMShoesDefault3,
    #[serde(rename = "AVATAR_m_shoes_default_4")]
    AvatarMShoesDefault4,
    #[serde(rename = "AVATAR_m_shoes_default_5")]
    AvatarMShoesDefault5,
    #[serde(rename = "AVATAR_m_shoes_default_6")]
    AvatarMShoesDefault6,
    #[serde(rename = "AVATAR_m_shoes_delibird")]
    AvatarMShoesDelibird,
    #[serde(rename = "AVATAR_m_shoes_dp")]
    AvatarMShoesDp,
    #[serde(rename = "AVATAR_m_shoes_elesa")]
    AvatarMShoesElesa,
    #[serde(rename = "AVATAR_m_shoes_empty")]
    AvatarMShoesEmpty,
    #[serde(rename = "AVATAR_m_shoes_fashionWeek2022")]
    AvatarMShoesFashionWeek2022,
    #[serde(rename = "AVATAR_m_shoes_fisher_0")]
    AvatarMShoesFisher0,
    #[serde(rename = "AVATAR_m_shoes_frlg_0")]
    AvatarMShoesFrlg0,
    #[serde(rename = "AVATAR_m_shoes_fw2022")]
    AvatarMShoesFw2022,
    #[serde(rename = "AVATAR_m_shoes_geeta")]
    AvatarMShoesGeeta,
    #[serde(rename = "AVATAR_m_shoes_giovanni")]
    AvatarMShoesGiovanni,
    #[serde(rename = "AVATAR_m_shoes_gladion")]
    AvatarMShoesGladion,
    #[serde(rename = "AVATAR_m_shoes_gothitelleitems")]
    AvatarMShoesGothitelleitems,
    #[serde(rename = "AVATAR_m_shoes_green")]
    AvatarMShoesGreen,
    #[serde(rename = "AVATAR_m_shoes_gymleader_0")]
    AvatarMShoesGymleader0,
    #[serde(rename = "AVATAR_m_shoes_gymleader_1")]
    AvatarMShoesGymleader1,
    #[serde(rename = "AVATAR_m_shoes_gymleader_2")]
    AvatarMShoesGymleader2,
    #[serde(rename = "AVATAR_m_shoes_hala")]
    AvatarMShoesHala,
    #[serde(rename = "AVATAR_m_shoes_hgss_0")]
    AvatarMShoesHgss0,
    #[serde(rename = "AVATAR_m_shoes_ingo")]
    AvatarMShoesIngo,
    #[serde(rename = "AVATAR_m_shoes_jogger_0")]
    AvatarMShoesJogger0,
    #[serde(rename = "AVATAR_m_shoes_korrina")]
    AvatarMShoesKorrina,
    #[serde(rename = "AVATAR_m_shoes_ladiamondoutfit")]
    AvatarMShoesLadiamondoutfit,
    #[serde(rename = "AVATAR_m_shoes_lana")]
    AvatarMShoesLana,
    #[serde(rename = "AVATAR_m_shoes_lapearloutfit")]
    AvatarMShoesLapearloutfit,
    #[serde(rename = "AVATAR_m_shoes_legendofarceus")]
    AvatarMShoesLegendofarceus,
    #[serde(rename = "AVATAR_m_shoes_loosepants")]
    AvatarMShoesLoosepants,
    #[serde(rename = "AVATAR_m_shoes_loosepants_1")]
    AvatarMShoesLoosepants1,
    #[serde(rename = "AVATAR_m_shoes_loosepants_2")]
    AvatarMShoesLoosepants2,
    #[serde(rename = "AVATAR_m_shoes_loosepants_3")]
    AvatarMShoesLoosepants3,
    #[serde(rename = "AVATAR_m_shoes_luvdiscpack")]
    AvatarMShoesLuvdiscpack,
    #[serde(rename = "AVATAR_m_shoes_lysandre")]
    AvatarMShoesLysandre,
    #[serde(rename = "AVATAR_m_shoes_megalopunnyitems")]
    AvatarMShoesMegalopunnyitems,
    #[serde(rename = "AVATAR_m_shoes_melmetalshoes")]
    AvatarMShoesMelmetalshoes,
    #[serde(rename = "AVATAR_m_shoes_mewtwo")]
    AvatarMShoesMewtwo,
    #[serde(rename = "AVATAR_m_shoes_newyear2022")]
    AvatarMShoesNewyear2022,
    #[serde(rename = "AVATAR_m_shoes_nike2021")]
    AvatarMShoesNike2021,
    #[serde(rename = "AVATAR_m_shoes_oras")]
    AvatarMShoesOras,
    #[serde(rename = "AVATAR_m_shoes_pajamas2022_0")]
    AvatarMShoesPajamas20220,
    #[serde(rename = "AVATAR_m_shoes_pajamas2022_1")]
    AvatarMShoesPajamas20221,
    #[serde(rename = "AVATAR_m_shoes_palmer")]
    AvatarMShoesPalmer,
    #[serde(rename = "AVATAR_m_shoes_pikachufan_0")]
    AvatarMShoesPikachufan0,
    #[serde(rename = "AVATAR_m_shoes_pikachulibre")]
    AvatarMShoesPikachulibre,
    #[serde(rename = "AVATAR_m_shoes_profwillowoutfit")]
    AvatarMShoesProfwillowoutfit,
    #[serde(rename = "AVATAR_m_shoes_regiicejersies")]
    AvatarMShoesRegiicejersies,
    #[serde(rename = "AVATAR_m_shoes_regirockjersies")]
    AvatarMShoesRegirockjersies,
    #[serde(rename = "AVATAR_m_shoes_registeeljersies")]
    AvatarMShoesRegisteeljersies,
    #[serde(rename = "AVATAR_m_shoes_reuniclusitems")]
    AvatarMShoesReuniclusitems,
    #[serde(rename = "AVATAR_m_shoes_ruinmaniac")]
    AvatarMShoesRuinmaniac,
    #[serde(rename = "AVATAR_m_shoes_sandals")]
    AvatarMShoesSandals,
    #[serde(rename = "AVATAR_m_shoes_sandals_1")]
    AvatarMShoesSandals1,
    #[serde(rename = "AVATAR_m_shoes_sandals_2")]
    AvatarMShoesSandals2,
    #[serde(rename = "AVATAR_m_shoes_solgaleoitems")]
    AvatarMShoesSolgaleoitems,
    #[serde(rename = "AVATAR_m_shoes_ss")]
    AvatarMShoesSs,
    #[serde(rename = "AVATAR_m_shoes_steven")]
    AvatarMShoesSteven,
    #[serde(rename = "AVATAR_m_shoes_stevenfirst")]
    AvatarMShoesStevenfirst,
    #[serde(rename = "AVATAR_m_shoes_svcostumescarletschool")]
    AvatarMShoesSvcostumescarletschool,
    #[serde(rename = "AVATAR_m_shoes_svcostumevioletschool")]
    AvatarMShoesSvcostumevioletschool,
    #[serde(rename = "AVATAR_m_shoes_svdlc1")]
    AvatarMShoesSvdlc1,
    #[serde(rename = "AVATAR_m_shoes_svdlc2spring")]
    AvatarMShoesSvdlc2spring,
    #[serde(rename = "AVATAR_m_shoes_swshdlc2costume")]
    AvatarMShoesSwshdlc2costume,
    #[serde(rename = "AVATAR_m_shoes_swshdlccostume")]
    AvatarMShoesSwshdlccostume,
    #[serde(rename = "AVATAR_m_shoes_swshuniformdark")]
    AvatarMShoesSwshuniformdark,
    #[serde(rename = "AVATAR_m_shoes_swshuniformdefault")]
    AvatarMShoesSwshuniformdefault,
    #[serde(rename = "AVATAR_m_shoes_swshuniformdragon")]
    AvatarMShoesSwshuniformdragon,
    #[serde(rename = "AVATAR_m_shoes_sylveonitems")]
    AvatarMShoesSylveonitems,
    #[serde(rename = "AVATAR_m_shoes_teamaqua")]
    AvatarMShoesTeamaqua,
    #[serde(rename = "AVATAR_m_shoes_teamblanche")]
    AvatarMShoesTeamblanche,
    #[serde(rename = "AVATAR_m_shoes_teamcandela")]
    AvatarMShoesTeamcandela,
    #[serde(rename = "AVATAR_m_shoes_teammagma")]
    AvatarMShoesTeammagma,
    #[serde(rename = "AVATAR_m_shoes_teamrocket_0")]
    AvatarMShoesTeamrocket0,
    #[serde(rename = "AVATAR_m_shoes_teamrocket_1")]
    AvatarMShoesTeamrocket1,
    #[serde(rename = "AVATAR_m_shoes_teamskull")]
    AvatarMShoesTeamskull,
    #[serde(rename = "AVATAR_m_shoes_teamspark")]
    AvatarMShoesTeamspark,
    #[serde(rename = "AVATAR_m_shoes_ultra_0")]
    AvatarMShoesUltra0,
    #[serde(rename = "AVATAR_m_shoes_ultraReconSquad")]
    AvatarMShoesUltraReconSquad,
    #[serde(rename = "AVATAR_m_shoes_veterantrainerxy")]
    AvatarMShoesVeterantrainerxy,
    #[serde(rename = "AVATAR_m_shoes_wcs2022winnersitems")]
    AvatarMShoesWcs2022winnersitems,
    #[serde(rename = "AVATAR_m_shoes_wcs2023winnersitems")]
    AvatarMShoesWcs2023winnersitems,
    #[serde(rename = "AVATAR_m_shoes_winterboots_0")]
    AvatarMShoesWinterboots0,
    #[serde(rename = "AVATAR_m_shoes_winterboots_1")]
    AvatarMShoesWinterboots1,
    #[serde(rename = "AVATAR_m_shoes_winterboots_2")]
    AvatarMShoesWinterboots2,
    #[serde(rename = "AVATAR_m_shoes_winterboots_3")]
    AvatarMShoesWinterboots3,
    #[serde(rename = "AVATAR_m_shoes_winterboots2023")]
    AvatarMShoesWinterboots2023,
    #[serde(rename = "AVATAR_m_skin_0")]
    AvatarMSkin0,
    #[serde(rename = "AVATAR_m_skin_1")]
    AvatarMSkin1,
    #[serde(rename = "AVATAR_m_skin_2")]
    AvatarMSkin2,
    #[serde(rename = "AVATAR_m_skin_3")]
    AvatarMSkin3,
    #[serde(rename = "AVATAR_m_skin_4")]
    AvatarMSkin4,
    #[serde(rename = "AVATAR_m_skin_5")]
    AvatarMSkin5,
    #[serde(rename = "AVATAR_m_skin_6")]
    AvatarMSkin6,
    #[serde(rename = "AVATAR_m_skin_7")]
    AvatarMSkin7,
    #[serde(rename = "AVATAR_m_skin_8")]
    AvatarMSkin8,
    #[serde(rename = "AVATAR_m_skin_9")]
    AvatarMSkin9,
    #[serde(rename = "AVATAR_m_skin_10")]
    AvatarMSkin10,
    #[serde(rename = "AVATAR_m_skin_11")]
    AvatarMSkin11,
    #[serde(rename = "AVATAR_m_socks_default_0")]
    AvatarMSocksDefault0,
    #[serde(rename = "AVATAR_m_socks_default_1")]
    AvatarMSocksDefault1,
    #[serde(rename = "AVATAR_m_socks_default_2")]
    AvatarMSocksDefault2,
    #[serde(rename = "AVATAR_m_socks_default_3")]
    AvatarMSocksDefault3,
    #[serde(rename = "AVATAR_m_socks_empty")]
    AvatarMSocksEmpty,
    #[serde(rename = "AVATAR_m_socks_fw2022")]
    AvatarMSocksFw2022,
    #[serde(rename = "AVATAR_m_socks_sneakersocks_0")]
    AvatarMSocksSneakersocks0,
    #[serde(rename = "AVATAR_m_socks_sneakersocks_1")]
    AvatarMSocksSneakersocks1,
    #[serde(rename = "AVATAR_m_socks_sollunaitems")]
    AvatarMSocksSollunaitems,
    #[serde(rename = "AVATAR_m_socks_swshuniformdefault")]
    AvatarMSocksSwshuniformdefault,
    #[serde(rename = "AVATAR_m_socks_swshuniformdragon")]
    AvatarMSocksSwshuniformdragon,
}
