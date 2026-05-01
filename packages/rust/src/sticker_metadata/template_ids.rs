//! Generated from Pokémon GO masterfile — group "stickerMetadata" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum StickerMetadataTemplateId {
    #[serde(rename = "STICKER_6ANNIV_1")]
    Sticker6anniv1,
    #[serde(rename = "STICKER_6ANNIV_2")]
    Sticker6anniv2,
    #[serde(rename = "STICKER_6ANNIV_3")]
    Sticker6anniv3,
    #[serde(rename = "STICKER_6ANNIV_4")]
    Sticker6anniv4,
    #[serde(rename = "STICKER_6ANNIV_5")]
    Sticker6anniv5,
    #[serde(rename = "STICKER_6ANNIV_6")]
    Sticker6anniv6,
    #[serde(rename = "STICKER_7ANNIV_1")]
    Sticker7anniv1,
    #[serde(rename = "STICKER_7ANNIV_2")]
    Sticker7anniv2,
    #[serde(rename = "STICKER_7ANNIV_3")]
    Sticker7anniv3,
    #[serde(rename = "STICKER_7ANNIV_4")]
    Sticker7anniv4,
    #[serde(rename = "STICKER_7ANNIV_5")]
    Sticker7anniv5,
    #[serde(rename = "STICKER_8ANNIV_1")]
    Sticker8anniv1,
    #[serde(rename = "STICKER_8ANNIV_2")]
    Sticker8anniv2,
    #[serde(rename = "STICKER_8ANNIV_3")]
    Sticker8anniv3,
    #[serde(rename = "STICKER_8ANNIV_4")]
    Sticker8anniv4,
    #[serde(rename = "STICKER_9ANNIV_1")]
    Sticker9anniv1,
    #[serde(rename = "STICKER_9ANNIV_2")]
    Sticker9anniv2,
    #[serde(rename = "STICKER_9ANNIV_3")]
    Sticker9anniv3,
    #[serde(rename = "STICKER_2023COLLAB_1")]
    Sticker2023collab1,
    #[serde(rename = "STICKER_2023COLLAB_2")]
    Sticker2023collab2,
    #[serde(rename = "STICKER_2023COLLAB_3")]
    Sticker2023collab3,
    #[serde(rename = "STICKER_2023COLLAB_4")]
    Sticker2023collab4,
    #[serde(rename = "STICKER_ALOLAISHI_1")]
    StickerAlolaishi1,
    #[serde(rename = "STICKER_ALOLAISHI_2")]
    StickerAlolaishi2,
    #[serde(rename = "STICKER_ALOLAISHI_3")]
    StickerAlolaishi3,
    #[serde(rename = "STICKER_ALOLAISHI_4")]
    StickerAlolaishi4,
    #[serde(rename = "STICKER_APRILFOOL2023_1")]
    StickerAprilfool20231,
    #[serde(rename = "STICKER_APRILFOOL2023_2")]
    StickerAprilfool20232,
    #[serde(rename = "STICKER_AUDINO")]
    StickerAudino,
    #[serde(rename = "STICKER_BELLSPROUTCD_1")]
    StickerBellsproutcd1,
    #[serde(rename = "STICKER_BELLSPROUTCD_2")]
    StickerBellsproutcd2,
    #[serde(rename = "STICKER_BELLSPROUTCD_3")]
    StickerBellsproutcd3,
    #[serde(rename = "STICKER_BELLSPROUTCD_4")]
    StickerBellsproutcd4,
    #[serde(rename = "STICKER_BIDOOFDAY_1")]
    StickerBidoofday1,
    #[serde(rename = "STICKER_BIDOOFDAY_2")]
    StickerBidoofday2,
    #[serde(rename = "STICKER_BIDOOFDAY_3")]
    StickerBidoofday3,
    #[serde(rename = "STICKER_BOUNSWEETCD2024_1")]
    StickerBounsweetcd20241,
    #[serde(rename = "STICKER_BOUNSWEETCD2024_2")]
    StickerBounsweetcd20242,
    #[serde(rename = "STICKER_BOUNSWEETCD2024_3")]
    StickerBounsweetcd20243,
    #[serde(rename = "STICKER_BOUNSWEETCD2024_4")]
    StickerBounsweetcd20244,
    #[serde(rename = "STICKER_BREADKOREA_001")]
    StickerBreadkorea001,
    #[serde(rename = "STICKER_BREADKOREA_002")]
    StickerBreadkorea002,
    #[serde(rename = "STICKER_BREADKOREA_003")]
    StickerBreadkorea003,
    #[serde(rename = "STICKER_BREADKOREA_004")]
    StickerBreadkorea004,
    #[serde(rename = "STICKER_BREADKOREA_005")]
    StickerBreadkorea005,
    #[serde(rename = "STICKER_BREADKOREA_006")]
    StickerBreadkorea006,
    #[serde(rename = "STICKER_CHANSEYCD_1")]
    StickerChanseycd1,
    #[serde(rename = "STICKER_CHANSEYCD_2")]
    StickerChanseycd2,
    #[serde(rename = "STICKER_CHANSEYCD_3")]
    StickerChanseycd3,
    #[serde(rename = "STICKER_CHANSEYCD_4")]
    StickerChanseycd4,
    #[serde(rename = "STICKER_CHARIZARD_1")]
    StickerCharizard1,
    #[serde(rename = "STICKER_CHARIZARD_2")]
    StickerCharizard2,
    #[serde(rename = "STICKER_CHARIZARD_3")]
    StickerCharizard3,
    #[serde(rename = "STICKER_CHESPIN_1")]
    StickerChespin1,
    #[serde(rename = "STICKER_CHESPIN_2")]
    StickerChespin2,
    #[serde(rename = "STICKER_CHESPIN_3")]
    StickerChespin3,
    #[serde(rename = "STICKER_CHESPIN_4")]
    StickerChespin4,
    #[serde(rename = "STICKER_CITYSPOTLIGHT")]
    StickerCityspotlight,
    #[serde(rename = "STICKER_CONCIERGE_EEVEE")]
    StickerConciergeEevee,
    #[serde(rename = "STICKER_CONCIERGE_PSYDUCK")]
    StickerConciergePsyduck,
    #[serde(rename = "STICKER_CONCIERGE_SEALEO")]
    StickerConciergeSealeo,
    #[serde(rename = "STICKER_CONCIERGE_SHINX")]
    StickerConciergeShinx,
    #[serde(rename = "STICKER_DEINO_1")]
    StickerDeino1,
    #[serde(rename = "STICKER_DEINO_2")]
    StickerDeino2,
    #[serde(rename = "STICKER_DEINO_3")]
    StickerDeino3,
    #[serde(rename = "STICKER_DEINO_4")]
    StickerDeino4,
    #[serde(rename = "STICKER_DIADEMUERTOS2023_1")]
    StickerDiademuertos20231,
    #[serde(rename = "STICKER_DIADEMUERTOS2023_2")]
    StickerDiademuertos20232,
    #[serde(rename = "STICKER_DIADEMUERTOS2023_3")]
    StickerDiademuertos20233,
    #[serde(rename = "STICKER_DIADEMUERTOS2023_4")]
    StickerDiademuertos20234,
    #[serde(rename = "STICKER_DIAMONDPEARLCHIMCHAR")]
    StickerDiamondpearlchimchar,
    #[serde(rename = "STICKER_DIAMONDPEARLDIALGA")]
    StickerDiamondpearldialga,
    #[serde(rename = "STICKER_DIAMONDPEARLLUCARIO")]
    StickerDiamondpearllucario,
    #[serde(rename = "STICKER_DIAMONDPEARLPALKIA")]
    StickerDiamondpearlpalkia,
    #[serde(rename = "STICKER_DIAMONDPEARLPIPLUP")]
    StickerDiamondpearlpiplup,
    #[serde(rename = "STICKER_DIAMONDPEARLTURTWIG")]
    StickerDiamondpearlturtwig,
    #[serde(rename = "STICKER_DITTO_1")]
    StickerDitto1,
    #[serde(rename = "STICKER_DITTO_2")]
    StickerDitto2,
    #[serde(rename = "STICKER_DITTO_3")]
    StickerDitto3,
    #[serde(rename = "STICKER_DITTO_4")]
    StickerDitto4,
    #[serde(rename = "STICKER_DITTO_5")]
    StickerDitto5,
    #[serde(rename = "STICKER_DITTO_6")]
    StickerDitto6,
    #[serde(rename = "STICKER_EEVEEFRIENDS_1")]
    StickerEeveefriends1,
    #[serde(rename = "STICKER_EEVEEFRIENDS_2")]
    StickerEeveefriends2,
    #[serde(rename = "STICKER_EEVEEFRIENDS_3")]
    StickerEeveefriends3,
    #[serde(rename = "STICKER_EEVEEFRIENDS_4")]
    StickerEeveefriends4,
    #[serde(rename = "STICKER_EEVEEFRIENDS_5")]
    StickerEeveefriends5,
    #[serde(rename = "STICKER_EEVEEFRIENDS_6")]
    StickerEeveefriends6,
    #[serde(rename = "STICKER_EEVEEFRIENDS_7")]
    StickerEeveefriends7,
    #[serde(rename = "STICKER_EEVEEFRIENDS_8")]
    StickerEeveefriends8,
    #[serde(rename = "STICKER_EEVEEFRIENDS_9")]
    StickerEeveefriends9,
    #[serde(rename = "STICKER_ETERNATUS")]
    StickerEternatus,
    #[serde(rename = "STICKER_FALL_2023_1")]
    StickerFall20231,
    #[serde(rename = "STICKER_FALL_2023_2")]
    StickerFall20232,
    #[serde(rename = "STICKER_FALL_2023_3")]
    StickerFall20233,
    #[serde(rename = "STICKER_FALL_2023_4")]
    StickerFall20234,
    #[serde(rename = "STICKER_FALL_2023_5")]
    StickerFall20235,
    #[serde(rename = "STICKER_FALL_2023_6")]
    StickerFall20236,
    #[serde(rename = "STICKER_FALL_2024_1")]
    StickerFall20241,
    #[serde(rename = "STICKER_FALL_2024_2")]
    StickerFall20242,
    #[serde(rename = "STICKER_FALL_2024_3")]
    StickerFall20243,
    #[serde(rename = "STICKER_FALL_2024_4")]
    StickerFall20244,
    #[serde(rename = "STICKER_FALL_2024_5")]
    StickerFall20245,
    #[serde(rename = "STICKER_FALL_2024_6")]
    StickerFall20246,
    #[serde(rename = "STICKER_FALL_2025_1")]
    StickerFall20251,
    #[serde(rename = "STICKER_FALL_2025_2")]
    StickerFall20252,
    #[serde(rename = "STICKER_FALL_2025_3")]
    StickerFall20253,
    #[serde(rename = "STICKER_FALL_2025_4")]
    StickerFall20254,
    #[serde(rename = "STICKER_FALL_SAWSBUCK")]
    StickerFallSawsbuck,
    #[serde(rename = "STICKER_FALL_SHROOMISH")]
    StickerFallShroomish,
    #[serde(rename = "STICKER_FALL_SKWOVET")]
    StickerFallSkwovet,
    #[serde(rename = "STICKER_FALL_TEDDIURSA")]
    StickerFallTeddiursa,
    #[serde(rename = "STICKER_FALL_TREVENANT")]
    StickerFallTrevenant,
    #[serde(rename = "STICKER_FALL_VULPIX")]
    StickerFallVulpix,
    #[serde(rename = "STICKER_FENNEKIN_1")]
    StickerFennekin1,
    #[serde(rename = "STICKER_FENNEKIN_2")]
    StickerFennekin2,
    #[serde(rename = "STICKER_FENNEKIN_3")]
    StickerFennekin3,
    #[serde(rename = "STICKER_FENNEKIN_4")]
    StickerFennekin4,
    #[serde(rename = "STICKER_FESTIVALOFLIGHT_MORELULL")]
    StickerFestivaloflightMorelull,
    #[serde(rename = "STICKER_FESTIVALOFLIGHT_SHIINOTIC")]
    StickerFestivaloflightShiinotic,
    #[serde(rename = "STICKER_FESTIVALOFTHELIGHTS21_V1")]
    StickerFestivalofthelights21V1,
    #[serde(rename = "STICKER_FESTIVALOFTHELIGHTS21_V2")]
    StickerFestivalofthelights21V2,
    #[serde(rename = "STICKER_FESTIVALOFTHELIGHTS21_V3")]
    StickerFestivalofthelights21V3,
    #[serde(rename = "STICKER_FESTIVALOFTHELIGHTS21_V4")]
    StickerFestivalofthelights21V4,
    #[serde(rename = "STICKER_FLABEBE_1")]
    StickerFlabebe1,
    #[serde(rename = "STICKER_FLABEBE_2")]
    StickerFlabebe2,
    #[serde(rename = "STICKER_FLAIR_HEART_1")]
    StickerFlairHeart1,
    #[serde(rename = "STICKER_FLAIR_HEART_2")]
    StickerFlairHeart2,
    #[serde(rename = "STICKER_FLAIR_HEART_3")]
    StickerFlairHeart3,
    #[serde(rename = "STICKER_FLAIR_HEART_4")]
    StickerFlairHeart4,
    #[serde(rename = "STICKER_FLAIR_HEART_5")]
    StickerFlairHeart5,
    #[serde(rename = "STICKER_FLAIR_STAR_1")]
    StickerFlairStar1,
    #[serde(rename = "STICKER_FLAIR_STAR_2")]
    StickerFlairStar2,
    #[serde(rename = "STICKER_FLAIR_STAR_3")]
    StickerFlairStar3,
    #[serde(rename = "STICKER_FLAIR_STAR_4")]
    StickerFlairStar4,
    #[serde(rename = "STICKER_FLAIR_STAR_5")]
    StickerFlairStar5,
    #[serde(rename = "STICKER_FLAIR_STAR_6")]
    StickerFlairStar6,
    #[serde(rename = "STICKER_FLAIR_STAR_7")]
    StickerFlairStar7,
    #[serde(rename = "STICKER_FORMULAEKOREA_PIKACHU")]
    StickerFormulaekoreaPikachu,
    #[serde(rename = "STICKER_FOSSILMUSEUM_1")]
    StickerFossilmuseum1,
    #[serde(rename = "STICKER_FOSSILMUSEUM_2")]
    StickerFossilmuseum2,
    #[serde(rename = "STICKER_FROAKIE_1")]
    StickerFroakie1,
    #[serde(rename = "STICKER_FROAKIE_2")]
    StickerFroakie2,
    #[serde(rename = "STICKER_FROAKIE_3")]
    StickerFroakie3,
    #[serde(rename = "STICKER_FROAKIE_4")]
    StickerFroakie4,
    #[serde(rename = "STICKER_FUNAWARI_04_312")]
    StickerFunawari04312,
    #[serde(rename = "STICKER_FUNAWARI_05_312")]
    StickerFunawari05312,
    #[serde(rename = "STICKER_FUNAWARI_06_312")]
    StickerFunawari06312,
    #[serde(rename = "STICKER_FUNAWARI_22_312")]
    StickerFunawari22312,
    #[serde(rename = "STICKER_FUNWARI_02_0608")]
    StickerFunwari020608,
    #[serde(rename = "STICKER_FUNWARI_10")]
    StickerFunwari10,
    #[serde(rename = "STICKER_FUNWARI_11_THANKU")]
    StickerFunwari11Thanku,
    #[serde(rename = "STICKER_FUNWARI_12_02")]
    StickerFunwari1202,
    #[serde(rename = "STICKER_FUNWARI_18")]
    StickerFunwari18,
    #[serde(rename = "STICKER_FUNWARI_20")]
    StickerFunwari20,
    #[serde(rename = "STICKER_FUNWARI_35")]
    StickerFunwari35,
    #[serde(rename = "STICKER_FUNWARI_PIDGEY_18")]
    StickerFunwariPidgey18,
    #[serde(rename = "STICKER_FURFROUHEART_1")]
    StickerFurfrouheart1,
    #[serde(rename = "STICKER_FURFROUHEART_2")]
    StickerFurfrouheart2,
    #[serde(rename = "STICKER_GALARIANZIGZAGOON_1")]
    StickerGalarianzigzagoon1,
    #[serde(rename = "STICKER_GALARIANZIGZAGOON_2")]
    StickerGalarianzigzagoon2,
    #[serde(rename = "STICKER_GALARIANZIGZAGOON_3")]
    StickerGalarianzigzagoon3,
    #[serde(rename = "STICKER_GALARIANZIGZAGOON_4")]
    StickerGalarianzigzagoon4,
    #[serde(rename = "STICKER_GIFTTHANKYOU")]
    StickerGiftthankyou,
    #[serde(rename = "STICKER_GIMMIGHOUL_1")]
    StickerGimmighoul1,
    #[serde(rename = "STICKER_GIMMIGHOUL_2")]
    StickerGimmighoul2,
    #[serde(rename = "STICKER_GIMMIGHOUL_3")]
    StickerGimmighoul3,
    #[serde(rename = "STICKER_GIMMIGHOUL_4")]
    StickerGimmighoul4,
    #[serde(rename = "STICKER_GIMMIGHOUL_5")]
    StickerGimmighoul5,
    #[serde(rename = "STICKER_GOOMYCD_1")]
    StickerGoomycd1,
    #[serde(rename = "STICKER_GOOMYCD_2")]
    StickerGoomycd2,
    #[serde(rename = "STICKER_GOOMYCD_3")]
    StickerGoomycd3,
    #[serde(rename = "STICKER_GOOMYCD_4")]
    StickerGoomycd4,
    #[serde(rename = "STICKER_GOTOUR2021")]
    StickerGotour2021,
    #[serde(rename = "STICKER_GOTOUR2022_1")]
    StickerGotour20221,
    #[serde(rename = "STICKER_GOTOUR2022_2")]
    StickerGotour20222,
    #[serde(rename = "STICKER_GOTOUR2022_3")]
    StickerGotour20223,
    #[serde(rename = "STICKER_GOTOUR2022_4")]
    StickerGotour20224,
    #[serde(rename = "STICKER_GOTOUR2022_CHIKORITA")]
    StickerGotour2022Chikorita,
    #[serde(rename = "STICKER_GOTOUR2022_CYNDAQUIL")]
    StickerGotour2022Cyndaquil,
    #[serde(rename = "STICKER_GOTOUR2022_HOOH")]
    StickerGotour2022Hooh,
    #[serde(rename = "STICKER_GOTOUR2022_LUGIA")]
    StickerGotour2022Lugia,
    #[serde(rename = "STICKER_GOTOUR2022_TOGEPI")]
    StickerGotour2022Togepi,
    #[serde(rename = "STICKER_GOTOUR2022_TOTODILE")]
    StickerGotour2022Totodile,
    #[serde(rename = "STICKER_GOTOUR2025_BADGE")]
    StickerGotour2025Badge,
    #[serde(rename = "STICKER_GOTOUR2025_KYUREMBLACK")]
    StickerGotour2025Kyuremblack,
    #[serde(rename = "STICKER_GOTOUR2025_KYUREMWHITE")]
    StickerGotour2025Kyuremwhite,
    #[serde(rename = "STICKER_GOTOUR2025_RESHIRAM")]
    StickerGotour2025Reshiram,
    #[serde(rename = "STICKER_GOTOUR2025_RZ")]
    StickerGotour2025Rz,
    #[serde(rename = "STICKER_GOTOUR2025_ZEKROM")]
    StickerGotour2025Zekrom,
    #[serde(rename = "STICKER_GOTOURHOENN_1")]
    StickerGotourhoenn1,
    #[serde(rename = "STICKER_GOTOURHOENN_2")]
    StickerGotourhoenn2,
    #[serde(rename = "STICKER_GOTOURHOENN_3")]
    StickerGotourhoenn3,
    #[serde(rename = "STICKER_GOTOURHOENN_4")]
    StickerGotourhoenn4,
    #[serde(rename = "STICKER_GOTOURHOENN_5")]
    StickerGotourhoenn5,
    #[serde(rename = "STICKER_GOTOURHOENN_6")]
    StickerGotourhoenn6,
    #[serde(rename = "STICKER_GOWA2025_01")]
    StickerGowa202501,
    #[serde(rename = "STICKER_GOWA2025_02")]
    StickerGowa202502,
    #[serde(rename = "STICKER_GOWA2025_03")]
    StickerGowa202503,
    #[serde(rename = "STICKER_GOWA2025_04")]
    StickerGowa202504,
    #[serde(rename = "STICKER_GOWA2025_05")]
    StickerGowa202505,
    #[serde(rename = "STICKER_GRUBBIN_1")]
    StickerGrubbin1,
    #[serde(rename = "STICKER_GRUBBIN_2")]
    StickerGrubbin2,
    #[serde(rename = "STICKER_GRUBBIN_3")]
    StickerGrubbin3,
    #[serde(rename = "STICKER_GRUBBIN_4")]
    StickerGrubbin4,
    #[serde(rename = "STICKER_HALLOWEEN_BULB")]
    StickerHalloweenBulb,
    #[serde(rename = "STICKER_HALLOWEEN_CHARM")]
    StickerHalloweenCharm,
    #[serde(rename = "STICKER_HALLOWEEN_GENGARMD")]
    StickerHalloweenGengarmd,
    #[serde(rename = "STICKER_HALLOWEEN_PIKA")]
    StickerHalloweenPika,
    #[serde(rename = "STICKER_HALLOWEEN_SABLEYEMD")]
    StickerHalloweenSableyemd,
    #[serde(rename = "STICKER_HALLOWEEN_SQU")]
    StickerHalloweenSqu,
    #[serde(rename = "STICKER_HALLOWEEN21_FUWARAID")]
    StickerHalloween21Fuwaraid,
    #[serde(rename = "STICKER_HALLOWEEN21_GHOSTPIKA")]
    StickerHalloween21Ghostpika,
    #[serde(rename = "STICKER_HALLOWEEN21_PIKACHU")]
    StickerHalloween21Pikachu,
    #[serde(rename = "STICKER_HALLOWEEN21_POCHAMA")]
    StickerHalloween21Pochama,
    #[serde(rename = "STICKER_HALLOWEEN23_GENGAR")]
    StickerHalloween23Gengar,
    #[serde(rename = "STICKER_HALLOWEEN23_GREAVARD")]
    StickerHalloween23Greavard,
    #[serde(rename = "STICKER_HALLOWEEN23_MISDREAVUS")]
    StickerHalloween23Misdreavus,
    #[serde(rename = "STICKER_HALLOWEEN23_PHANTUMP")]
    StickerHalloween23Phantump,
    #[serde(rename = "STICKER_HALLOWEEN24_FROAKIE")]
    StickerHalloween24Froakie,
    #[serde(rename = "STICKER_HALLOWEEN24_ROWLET")]
    StickerHalloween24Rowlet,
    #[serde(rename = "STICKER_HALLOWEEN2022_GENGAR")]
    StickerHalloween2022Gengar,
    #[serde(rename = "STICKER_HALLOWEEN2022_PUMPKABOO")]
    StickerHalloween2022Pumpkaboo,
    #[serde(rename = "STICKER_HALLOWEEN2022_VULPIX")]
    StickerHalloween2022Vulpix,
    #[serde(rename = "STICKER_HALLOWEEN2025_NOIBAT")]
    StickerHalloween2025Noibat,
    #[serde(rename = "STICKER_HALLOWEEN2025_TEDDIURSA")]
    StickerHalloween2025Teddiursa,
    #[serde(rename = "STICKER_HARU_CHERRIM")]
    StickerHaruCherrim,
    #[serde(rename = "STICKER_HARU_DREDEARPIKA")]
    StickerHaruDredearpika,
    #[serde(rename = "STICKER_HARU_KIREIHANA")]
    StickerHaruKireihana,
    #[serde(rename = "STICKER_HARU_LALANTES")]
    StickerHaruLalantes,
    #[serde(rename = "STICKER_HARU_MEBUKISHIKIJIK")]
    StickerHaruMebukishikijik,
    #[serde(rename = "STICKER_HARU_MITSUHONEY")]
    StickerHaruMitsuhoney,
    #[serde(rename = "STICKER_HAWLUCHA_01")]
    StickerHawlucha01,
    #[serde(rename = "STICKER_HISUIDISCO_ARCANINE")]
    StickerHisuidiscoArcanine,
    #[serde(rename = "STICKER_HISUIDISCO_BRAVIARY")]
    StickerHisuidiscoBraviary,
    #[serde(rename = "STICKER_HISUIDISCO_GROWLITHE")]
    StickerHisuidiscoGrowlithe,
    #[serde(rename = "STICKER_HOLIDAYEVENT21_1")]
    StickerHolidayevent211,
    #[serde(rename = "STICKER_HOLIDAYEVENT21_2")]
    StickerHolidayevent212,
    #[serde(rename = "STICKER_HOLIDAYEVENT21_3")]
    StickerHolidayevent213,
    #[serde(rename = "STICKER_HOLIDAYEVENT21_4")]
    StickerHolidayevent214,
    #[serde(rename = "STICKER_HOLIDAYEVENT22_CUBCHOO")]
    StickerHolidayevent22Cubchoo,
    #[serde(rename = "STICKER_HOLIDAYEVENT22_SCATTERBUG")]
    StickerHolidayevent22Scatterbug,
    #[serde(rename = "STICKER_HOLIDAYEVENT22_SNOWPIKA")]
    StickerHolidayevent22Snowpika,
    #[serde(rename = "STICKER_HOLIDAYEVENT22_VULPIX")]
    StickerHolidayevent22Vulpix,
    #[serde(rename = "STICKER_HOLIDAYEVENT23_CETODDLE")]
    StickerHolidayevent23Cetoddle,
    #[serde(rename = "STICKER_HOLIDAYEVENT23_CRYOGONAL")]
    StickerHolidayevent23Cryogonal,
    #[serde(rename = "STICKER_HOLIDAYEVENT23_PSYDUCK")]
    StickerHolidayevent23Psyduck,
    #[serde(rename = "STICKER_HOLIDAYEVENT23_SEEL")]
    StickerHolidayevent23Seel,
    #[serde(rename = "STICKER_HOLIDAYEVENT23_VANILLISH")]
    StickerHolidayevent23Vanillish,
    #[serde(rename = "STICKER_HOLOGRAPHIC_CHANCEY")]
    StickerHolographicChancey,
    #[serde(rename = "STICKER_HOLOGRAPHIC_CHARMELEON")]
    StickerHolographicCharmeleon,
    #[serde(rename = "STICKER_HOLOGRAPHIC_IVYSAUR")]
    StickerHolographicIvysaur,
    #[serde(rename = "STICKER_HOLOGRAPHIC_MELTAN")]
    StickerHolographicMeltan,
    #[serde(rename = "STICKER_HOLOGRAPHIC_PIKACHU")]
    StickerHolographicPikachu,
    #[serde(rename = "STICKER_HOLOGRAPHIC_WARTORTLE")]
    StickerHolographicWartortle,
    #[serde(rename = "STICKER_HOPPIP_1")]
    StickerHoppip1,
    #[serde(rename = "STICKER_HOPPIP_2")]
    StickerHoppip2,
    #[serde(rename = "STICKER_HOPPIP_3")]
    StickerHoppip3,
    #[serde(rename = "STICKER_HOPPIP_4")]
    StickerHoppip4,
    #[serde(rename = "STICKER_INDONESIAJOURNEY_1")]
    StickerIndonesiajourney1,
    #[serde(rename = "STICKER_INDONESIAJOURNEY_2")]
    StickerIndonesiajourney2,
    #[serde(rename = "STICKER_IPLPARTNERSHIP_1")]
    StickerIplpartnership1,
    #[serde(rename = "STICKER_IPLPARTNERSHIP_2")]
    StickerIplpartnership2,
    #[serde(rename = "STICKER_JUNECD2023_AXEW_1")]
    StickerJunecd2023Axew1,
    #[serde(rename = "STICKER_JUNECD2023_AXEW_2")]
    StickerJunecd2023Axew2,
    #[serde(rename = "STICKER_JUNECD2023_AXEW_3")]
    StickerJunecd2023Axew3,
    #[serde(rename = "STICKER_JUNECD2023_AXEW_4")]
    StickerJunecd2023Axew4,
    #[serde(rename = "STICKER_KOREATOWN_1")]
    StickerKoreatown1,
    #[serde(rename = "STICKER_KOREATOWN_2")]
    StickerKoreatown2,
    #[serde(rename = "STICKER_KOREATOWN_3")]
    StickerKoreatown3,
    #[serde(rename = "STICKER_KR_DITTO")]
    StickerKrDitto,
    #[serde(rename = "STICKER_KURTASAREE_1")]
    StickerKurtasaree1,
    #[serde(rename = "STICKER_KURTASAREE_2")]
    StickerKurtasaree2,
    #[serde(rename = "STICKER_KURTASAREE_3")]
    StickerKurtasaree3,
    #[serde(rename = "STICKER_KURTASAREE_4")]
    StickerKurtasaree4,
    #[serde(rename = "STICKER_KURTASAREE_5")]
    StickerKurtasaree5,
    #[serde(rename = "STICKER_KURTASAREE_6")]
    StickerKurtasaree6,
    #[serde(rename = "STICKER_LENTILLAUNCH_CAMERA")]
    StickerLentillaunchCamera,
    #[serde(rename = "STICKER_LITTENCD_1")]
    StickerLittencd1,
    #[serde(rename = "STICKER_LITTENCD_2")]
    StickerLittencd2,
    #[serde(rename = "STICKER_LITTENCD_3")]
    StickerLittencd3,
    #[serde(rename = "STICKER_LITTENCD_4")]
    StickerLittencd4,
    #[serde(rename = "STICKER_LITWICK_1")]
    StickerLitwick1,
    #[serde(rename = "STICKER_LITWICK_2")]
    StickerLitwick2,
    #[serde(rename = "STICKER_LITWICK_3")]
    StickerLitwick3,
    #[serde(rename = "STICKER_LITWICK_4")]
    StickerLitwick4,
    #[serde(rename = "STICKER_LUVDISC")]
    StickerLuvdisc,
    #[serde(rename = "STICKER_MANKEY_1")]
    StickerMankey1,
    #[serde(rename = "STICKER_MANKEY_2")]
    StickerMankey2,
    #[serde(rename = "STICKER_MANKEY_3")]
    StickerMankey3,
    #[serde(rename = "STICKER_MANKEY_4")]
    StickerMankey4,
    #[serde(rename = "STICKER_MEGAEVOLUTION_PARIS_1")]
    StickerMegaevolutionParis1,
    #[serde(rename = "STICKER_MEGAEVOLUTION_PARIS_2")]
    StickerMegaevolutionParis2,
    #[serde(rename = "STICKER_MEGAEVOLUTION_PARIS_3")]
    StickerMegaevolutionParis3,
    #[serde(rename = "STICKER_MEW_LAUGH")]
    StickerMewLaugh,
    #[serde(rename = "STICKER_MEWTWO")]
    StickerMewtwo,
    #[serde(rename = "STICKER_MUKKURU_CD_1")]
    StickerMukkuruCd1,
    #[serde(rename = "STICKER_MUKKURU_CD_2")]
    StickerMukkuruCd2,
    #[serde(rename = "STICKER_MUKKURU_CD_3")]
    StickerMukkuruCd3,
    #[serde(rename = "STICKER_MUKKURU_CD_4")]
    StickerMukkuruCd4,
    #[serde(rename = "STICKER_NAGANO_06_312")]
    StickerNagano06312,
    #[serde(rename = "STICKER_NAGANO_08")]
    StickerNagano08,
    #[serde(rename = "STICKER_NAGANO_11")]
    StickerNagano11,
    #[serde(rename = "STICKER_NAGANO_15")]
    StickerNagano15,
    #[serde(rename = "STICKER_NAGANO_15_312")]
    StickerNagano15312,
    #[serde(rename = "STICKER_NAGANO_BATH")]
    StickerNaganoBath,
    #[serde(rename = "STICKER_NAGANO_MARILL")]
    StickerNaganoMarill,
    #[serde(rename = "STICKER_NAGANO_YADON")]
    StickerNaganoYadon,
    #[serde(rename = "STICKER_NEWPOKEMON_04")]
    StickerNewpokemon04,
    #[serde(rename = "STICKER_NEWPOKEMON_20")]
    StickerNewpokemon20,
    #[serde(rename = "STICKER_NEWPOKEMON_37")]
    StickerNewpokemon37,
    #[serde(rename = "STICKER_NEWPOKEMON2_1")]
    StickerNewpokemon21,
    #[serde(rename = "STICKER_NEWPOKEMON2_15")]
    StickerNewpokemon215,
    #[serde(rename = "STICKER_NEWPOKEMON2_33")]
    StickerNewpokemon233,
    #[serde(rename = "STICKER_NEWTEAMRASCAL")]
    StickerNewteamrascal,
    #[serde(rename = "STICKER_NEWTEAMRASCALPIKACHU_26")]
    StickerNewteamrascalpikachu26,
    #[serde(rename = "STICKER_NEWYEARS22_1")]
    StickerNewyears221,
    #[serde(rename = "STICKER_NEWYEARS22_2")]
    StickerNewyears222,
    #[serde(rename = "STICKER_NEWYEARS22_3")]
    StickerNewyears223,
    #[serde(rename = "STICKER_NEWYEARS22_4")]
    StickerNewyears224,
    #[serde(rename = "STICKER_NEWYEARS23_1")]
    StickerNewyears231,
    #[serde(rename = "STICKER_NEWYEARS23_2")]
    StickerNewyears232,
    #[serde(rename = "STICKER_NEWYEARS23_3")]
    StickerNewyears233,
    #[serde(rename = "STICKER_NEWYEARS23_4")]
    StickerNewyears234,
    #[serde(rename = "STICKER_NIA_LOGO")]
    StickerNiaLogo,
    #[serde(rename = "STICKER_NIGIYAKA_08_0508_312")]
    StickerNigiyaka080508312,
    #[serde(rename = "STICKER_NIGIYAKA_16_0508_312")]
    StickerNigiyaka160508312,
    #[serde(rename = "STICKER_NOIBAT_CD_1")]
    StickerNoibatCd1,
    #[serde(rename = "STICKER_NOIBAT_CD_2")]
    StickerNoibatCd2,
    #[serde(rename = "STICKER_NOIBAT_CD_3")]
    StickerNoibatCd3,
    #[serde(rename = "STICKER_NOIBAT_CD_4")]
    StickerNoibatCd4,
    #[serde(rename = "STICKER_NYARTH_38")]
    StickerNyarth38,
    #[serde(rename = "STICKER_OBSERVATORY_01")]
    StickerObservatory01,
    #[serde(rename = "STICKER_OBSERVATORY_02")]
    StickerObservatory02,
    #[serde(rename = "STICKER_PAPELPICADOTGR_1")]
    StickerPapelpicadotgr1,
    #[serde(rename = "STICKER_PAPELPICADOTGR_2")]
    StickerPapelpicadotgr2,
    #[serde(rename = "STICKER_PAPELPICADOTGR_3")]
    StickerPapelpicadotgr3,
    #[serde(rename = "STICKER_PAPELPICADOTGR_4")]
    StickerPapelpicadotgr4,
    #[serde(rename = "STICKER_PAPELPICADOTGR_5")]
    StickerPapelpicadotgr5,
    #[serde(rename = "STICKER_PGO_FEST_2017")]
    StickerPgoFest2017,
    #[serde(rename = "STICKER_PGO_FEST_2018")]
    StickerPgoFest2018,
    #[serde(rename = "STICKER_PGO_FEST_2019")]
    StickerPgoFest2019,
    #[serde(rename = "STICKER_PGO_FEST_2020")]
    StickerPgoFest2020,
    #[serde(rename = "STICKER_PGO_FEST_2020_LOGO")]
    StickerPgoFest2020Logo,
    #[serde(rename = "STICKER_PGO_FEST_2022")]
    StickerPgoFest2022,
    #[serde(rename = "STICKER_PGO_FEST_2022_LOGO")]
    StickerPgoFest2022Logo,
    #[serde(rename = "STICKER_PGO_FEST_2023")]
    StickerPgoFest2023,
    #[serde(rename = "STICKER_PGO_FEST_2023_1")]
    StickerPgoFest20231,
    #[serde(rename = "STICKER_PGO_FEST_2023_2")]
    StickerPgoFest20232,
    #[serde(rename = "STICKER_PGO_FEST_2023_3")]
    StickerPgoFest20233,
    #[serde(rename = "STICKER_PGO_FEST_2023_4")]
    StickerPgoFest20234,
    #[serde(rename = "STICKER_PGO_FEST_2023_5")]
    StickerPgoFest20235,
    #[serde(rename = "STICKER_PGO_FEST_2023_6")]
    StickerPgoFest20236,
    #[serde(rename = "STICKER_PGO_FEST_2023_LOGO")]
    StickerPgoFest2023Logo,
    #[serde(rename = "STICKER_PGO_FEST_2024")]
    StickerPgoFest2024,
    #[serde(rename = "STICKER_PGO_FEST_2024_1")]
    StickerPgoFest20241,
    #[serde(rename = "STICKER_PGO_FEST_2024_2")]
    StickerPgoFest20242,
    #[serde(rename = "STICKER_PGO_FEST_2024_3")]
    StickerPgoFest20243,
    #[serde(rename = "STICKER_PGO_FEST_2024_4")]
    StickerPgoFest20244,
    #[serde(rename = "STICKER_PGO_FEST_2024_5")]
    StickerPgoFest20245,
    #[serde(rename = "STICKER_PGO_FEST_2024_6")]
    StickerPgoFest20246,
    #[serde(rename = "STICKER_PGO_FEST_2024_LOGO")]
    StickerPgoFest2024Logo,
    #[serde(rename = "STICKER_PGO_FEST_2025")]
    StickerPgoFest2025,
    #[serde(rename = "STICKER_PGO_FEST_2025_1")]
    StickerPgoFest20251,
    #[serde(rename = "STICKER_PGO_FEST_2025_2")]
    StickerPgoFest20252,
    #[serde(rename = "STICKER_PGO_FEST_2025_3")]
    StickerPgoFest20253,
    #[serde(rename = "STICKER_PGO_FEST_2025_LOGO")]
    StickerPgoFest2025Logo,
    #[serde(rename = "STICKER_PGO_FEST_2026")]
    StickerPgoFest2026,
    #[serde(rename = "STICKER_PGO_FEST_2026_1")]
    StickerPgoFest20261,
    #[serde(rename = "STICKER_PGO_FEST_2026_2")]
    StickerPgoFest20262,
    #[serde(rename = "STICKER_PGO_FEST_2026_3")]
    StickerPgoFest20263,
    #[serde(rename = "STICKER_PGO_FEST_2026_4")]
    StickerPgoFest20264,
    #[serde(rename = "STICKER_PGO_FEST_2026_LOGO")]
    StickerPgoFest2026Logo,
    #[serde(rename = "STICKER_PGO_FEST_VICTINI_05")]
    StickerPgoFestVictini05,
    #[serde(rename = "STICKER_PGO_TOUR_2024")]
    StickerPgoTour2024,
    #[serde(rename = "STICKER_PGO_TOUR_2024_1")]
    StickerPgoTour20241,
    #[serde(rename = "STICKER_PGO_TOUR_2024_2")]
    StickerPgoTour20242,
    #[serde(rename = "STICKER_PGO_TOUR_2024_3")]
    StickerPgoTour20243,
    #[serde(rename = "STICKER_PGO_TOUR_2024_4")]
    StickerPgoTour20244,
    #[serde(rename = "STICKER_PGO_TOUR_2024_5")]
    StickerPgoTour20245,
    #[serde(rename = "STICKER_PGO_TOUR_2024_LOGO")]
    StickerPgoTour2024Logo,
    #[serde(rename = "STICKER_PGO_TOUR_2026")]
    StickerPgoTour2026,
    #[serde(rename = "STICKER_PGO_TOUR_2026_1")]
    StickerPgoTour20261,
    #[serde(rename = "STICKER_PGO_TOUR_2026_2")]
    StickerPgoTour20262,
    #[serde(rename = "STICKER_PGO_TOUR_2026_3")]
    StickerPgoTour20263,
    #[serde(rename = "STICKER_PGO_TOUR_2026_LOGO")]
    StickerPgoTour2026Logo,
    #[serde(rename = "STICKER_PGO_WILDAREA_2024")]
    StickerPgoWildarea2024,
    #[serde(rename = "STICKER_PGO_WILDAREA_2024_1")]
    StickerPgoWildarea20241,
    #[serde(rename = "STICKER_PGO_WILDAREA_2024_2")]
    StickerPgoWildarea20242,
    #[serde(rename = "STICKER_PGO_WILDAREA_2024_3")]
    StickerPgoWildarea20243,
    #[serde(rename = "STICKER_PGO_WILDAREA_2024_4")]
    StickerPgoWildarea20244,
    #[serde(rename = "STICKER_PGO_WILDAREA_2024_LOGO")]
    StickerPgoWildarea2024Logo,
    #[serde(rename = "STICKER_PGOFEST2021_GALARIANZIGZAGOON")]
    StickerPgofest2021Galarianzigzagoon,
    #[serde(rename = "STICKER_PGOFEST2021_LOGO")]
    StickerPgofest2021Logo,
    #[serde(rename = "STICKER_PGOFEST2021_MELOETTA_1")]
    StickerPgofest2021Meloetta1,
    #[serde(rename = "STICKER_PGOFEST2021_MELOETTA_2")]
    StickerPgofest2021Meloetta2,
    #[serde(rename = "STICKER_PGOFEST2021_PONYTA")]
    StickerPgofest2021Ponyta,
    #[serde(rename = "STICKER_PGOFEST2021_SHIRTICON")]
    StickerPgofest2021Shirticon,
    #[serde(rename = "STICKER_PGOFEST2022_DENJYUMOKU")]
    StickerPgofest2022Denjyumoku,
    #[serde(rename = "STICKER_PGOFEST2022_GROUDON")]
    StickerPgofest2022Groudon,
    #[serde(rename = "STICKER_PGOFEST2022_KIBAGO")]
    StickerPgofest2022Kibago,
    #[serde(rename = "STICKER_PGOFEST2022_KYOGRE")]
    StickerPgofest2022Kyogre,
    #[serde(rename = "STICKER_PGOFEST2022_MASSIVOON")]
    StickerPgofest2022Massivoon,
    #[serde(rename = "STICKER_PGOFEST2022_PHEROACHE")]
    StickerPgofest2022Pheroache,
    #[serde(rename = "STICKER_PGOFEST2022_PIKACHU")]
    StickerPgofest2022Pikachu,
    #[serde(rename = "STICKER_PGOFEST2022_POCHAMA")]
    StickerPgofest2022Pochama,
    #[serde(rename = "STICKER_PGOFEST2022_SHAYMIN")]
    StickerPgofest2022Shaymin,
    #[serde(rename = "STICKER_PGOFEST2022_SHAYMINSKY")]
    StickerPgofest2022Shayminsky,
    #[serde(rename = "STICKER_PGOFEST2022_UTUROID")]
    StickerPgofest2022Uturoid,
    #[serde(rename = "STICKER_PIKA_14_THANKYOU")]
    StickerPika14Thankyou,
    #[serde(rename = "STICKER_PIKAAIRADVENTURE_1")]
    StickerPikaairadventure1,
    #[serde(rename = "STICKER_PIKAAIRADVENTURE_2")]
    StickerPikaairadventure2,
    #[serde(rename = "STICKER_PIKAAIRADVENTURE_3")]
    StickerPikaairadventure3,
    #[serde(rename = "STICKER_PIKAAIRJEJU_PIKACHU")]
    StickerPikaairjejuPikachu,
    #[serde(rename = "STICKER_PIKAAIRSINGAPORE_LAPRAS")]
    StickerPikaairsingaporeLapras,
    #[serde(rename = "STICKER_PIKAAIRSINGAPORE_PIKACHU")]
    StickerPikaairsingaporePikachu,
    #[serde(rename = "STICKER_PIKAAIRTAIWAN_PIKACHU")]
    StickerPikaairtaiwanPikachu,
    #[serde(rename = "STICKER_PIKAAIRTAIWAN_SNORLAX")]
    StickerPikaairtaiwanSnorlax,
    #[serde(rename = "STICKER_PIKACHU_JOL")]
    StickerPikachuJol,
    #[serde(rename = "STICKER_POKEMONCHATPALS2_04")]
    StickerPokemonchatpals204,
    #[serde(rename = "STICKER_POKEMONCHATPALS2_40")]
    StickerPokemonchatpals240,
    #[serde(rename = "STICKER_POKOPIA_BULBASAUR")]
    StickerPokopiaBulbasaur,
    #[serde(rename = "STICKER_POKOPIA_PIKACHU")]
    StickerPokopiaPikachu,
    #[serde(rename = "STICKER_POKOPIA_SNORLAX")]
    StickerPokopiaSnorlax,
    #[serde(rename = "STICKER_POKOPIA_TANGROWTH")]
    StickerPokopiaTangrowth,
    #[serde(rename = "STICKER_POLIWAG_1")]
    StickerPoliwag1,
    #[serde(rename = "STICKER_POLIWAG_2")]
    StickerPoliwag2,
    #[serde(rename = "STICKER_POLIWAG_3")]
    StickerPoliwag3,
    #[serde(rename = "STICKER_POLIWAG_4")]
    StickerPoliwag4,
    #[serde(rename = "STICKER_PONYTA_1")]
    StickerPonyta1,
    #[serde(rename = "STICKER_PONYTA_2")]
    StickerPonyta2,
    #[serde(rename = "STICKER_PONYTA_3")]
    StickerPonyta3,
    #[serde(rename = "STICKER_PONYTA_4")]
    StickerPonyta4,
    #[serde(rename = "STICKER_POPPLIOCD_1")]
    StickerPoppliocd1,
    #[serde(rename = "STICKER_POPPLIOCD_2")]
    StickerPoppliocd2,
    #[serde(rename = "STICKER_POPPLIOCD_3")]
    StickerPoppliocd3,
    #[serde(rename = "STICKER_POPPLIOCD_4")]
    StickerPoppliocd4,
    #[serde(rename = "STICKER_PROJECTGUITAR_04")]
    StickerProjectguitar04,
    #[serde(rename = "STICKER_PROJECTGUITAR_07")]
    StickerProjectguitar07,
    #[serde(rename = "STICKER_PROJECTGUITAR_13")]
    StickerProjectguitar13,
    #[serde(rename = "STICKER_PROJECTGUITAR_25")]
    StickerProjectguitar25,
    #[serde(rename = "STICKER_PROJECTGUITAR_FROAKIE")]
    StickerProjectguitarFroakie,
    #[serde(rename = "STICKER_PSYCHICSPEC21_INKAY")]
    StickerPsychicspec21Inkay,
    #[serde(rename = "STICKER_PSYCHICSPEC21_INKAY2")]
    StickerPsychicspec21Inkay2,
    #[serde(rename = "STICKER_ROGGENROLA_CD_1")]
    StickerRoggenrolaCd1,
    #[serde(rename = "STICKER_ROGGENROLA_CD_2")]
    StickerRoggenrolaCd2,
    #[serde(rename = "STICKER_ROGGENROLA_CD_3")]
    StickerRoggenrolaCd3,
    #[serde(rename = "STICKER_ROGGENROLA_CD_4")]
    StickerRoggenrolaCd4,
    #[serde(rename = "STICKER_ROWLETCD_1")]
    StickerRowletcd1,
    #[serde(rename = "STICKER_ROWLETCD_2")]
    StickerRowletcd2,
    #[serde(rename = "STICKER_ROWLETCD_3")]
    StickerRowletcd3,
    #[serde(rename = "STICKER_ROWLETCD_4")]
    StickerRowletcd4,
    #[serde(rename = "STICKER_SANDSHREW_1")]
    StickerSandshrew1,
    #[serde(rename = "STICKER_SANDSHREW_2")]
    StickerSandshrew2,
    #[serde(rename = "STICKER_SANDSHREW_3")]
    StickerSandshrew3,
    #[serde(rename = "STICKER_SANDSHREW_4")]
    StickerSandshrew4,
    #[serde(rename = "STICKER_SECRETSOFTHEJUNGLE_1")]
    StickerSecretsofthejungle1,
    #[serde(rename = "STICKER_SECRETSOFTHEJUNGLE_4")]
    StickerSecretsofthejungle4,
    #[serde(rename = "STICKER_SECRETSOFTHEJUNGLE_5")]
    StickerSecretsofthejungle5,
    #[serde(rename = "STICKER_SECRETSOFTHEJUNGLE_6")]
    StickerSecretsofthejungle6,
    #[serde(rename = "STICKER_SECRETSOFTHEJUNGLE_7")]
    StickerSecretsofthejungle7,
    #[serde(rename = "STICKER_SECRETSOFTHEJUNGLE_8")]
    StickerSecretsofthejungle8,
    #[serde(rename = "STICKER_SECRETSOFTHEJUNGLE_9")]
    StickerSecretsofthejungle9,
    #[serde(rename = "STICKER_SEWADDLECD_1")]
    StickerSewaddlecd1,
    #[serde(rename = "STICKER_SEWADDLECD_2")]
    StickerSewaddlecd2,
    #[serde(rename = "STICKER_SEWADDLECD_3")]
    StickerSewaddlecd3,
    #[serde(rename = "STICKER_SEWADDLECD_4")]
    StickerSewaddlecd4,
    #[serde(rename = "STICKER_SHELMET_KARRABLAST_1")]
    StickerShelmetKarrablast1,
    #[serde(rename = "STICKER_SHELMET_KARRABLAST_2")]
    StickerShelmetKarrablast2,
    #[serde(rename = "STICKER_SHELMET_KARRABLAST_3")]
    StickerShelmetKarrablast3,
    #[serde(rename = "STICKER_SLEEP_1")]
    StickerSleep1,
    #[serde(rename = "STICKER_SLEEP_2")]
    StickerSleep2,
    #[serde(rename = "STICKER_SLEEP_3")]
    StickerSleep3,
    #[serde(rename = "STICKER_SLEEP_4")]
    StickerSleep4,
    #[serde(rename = "STICKER_SLEEP_5")]
    StickerSleep5,
    #[serde(rename = "STICKER_SLEEP_6")]
    StickerSleep6,
    #[serde(rename = "STICKER_SLEEP_7")]
    StickerSleep7,
    #[serde(rename = "STICKER_SLOWPOKE_1")]
    StickerSlowpoke1,
    #[serde(rename = "STICKER_SLOWPOKE_2")]
    StickerSlowpoke2,
    #[serde(rename = "STICKER_SLOWPOKE_3")]
    StickerSlowpoke3,
    #[serde(rename = "STICKER_SLOWPOKE_4")]
    StickerSlowpoke4,
    #[serde(rename = "STICKER_SPHEAL_1")]
    StickerSpheal1,
    #[serde(rename = "STICKER_SPHEAL_2")]
    StickerSpheal2,
    #[serde(rename = "STICKER_SPHEAL_3")]
    StickerSpheal3,
    #[serde(rename = "STICKER_SPHEAL_4")]
    StickerSpheal4,
    #[serde(rename = "STICKER_SPRIGATITO_1")]
    StickerSprigatito1,
    #[serde(rename = "STICKER_SPRIGATITO_2")]
    StickerSprigatito2,
    #[serde(rename = "STICKER_SPRIGATITO_3")]
    StickerSprigatito3,
    #[serde(rename = "STICKER_SPRIGATITO_4")]
    StickerSprigatito4,
    #[serde(rename = "STICKER_SPRING_2024_1")]
    StickerSpring20241,
    #[serde(rename = "STICKER_SPRING_2024_2")]
    StickerSpring20242,
    #[serde(rename = "STICKER_SPRING_2024_3")]
    StickerSpring20243,
    #[serde(rename = "STICKER_SPRING_2024_4")]
    StickerSpring20244,
    #[serde(rename = "STICKER_SPRING_2024_5")]
    StickerSpring20245,
    #[serde(rename = "STICKER_SPRING_2024_6")]
    StickerSpring20246,
    #[serde(rename = "STICKER_SPRING_2025_1")]
    StickerSpring20251,
    #[serde(rename = "STICKER_SPRING_2025_2")]
    StickerSpring20252,
    #[serde(rename = "STICKER_SPRING_2025_3")]
    StickerSpring20253,
    #[serde(rename = "STICKER_SPRING_2025_4")]
    StickerSpring20254,
    #[serde(rename = "STICKER_SPRING_2026_1")]
    StickerSpring20261,
    #[serde(rename = "STICKER_SPRING_2026_2")]
    StickerSpring20262,
    #[serde(rename = "STICKER_SPRING_2026_3")]
    StickerSpring20263,
    #[serde(rename = "STICKER_SPRING_2026_4")]
    StickerSpring20264,
    #[serde(rename = "STICKER_SPRING_EIEVUI")]
    StickerSpringEievui,
    #[serde(rename = "STICKER_SPRING_HAPINAS")]
    StickerSpringHapinas,
    #[serde(rename = "STICKER_SPRING_MIMIROL")]
    StickerSpringMimirol,
    #[serde(rename = "STICKER_SPRING_NIMPHIA")]
    StickerSpringNimphia,
    #[serde(rename = "STICKER_SPRING_PIKACHU")]
    StickerSpringPikachu,
    #[serde(rename = "STICKER_SPRING_PIPITO")]
    StickerSpringPipito,
    #[serde(rename = "STICKER_STUFFUL_1")]
    StickerStufful1,
    #[serde(rename = "STICKER_STUFFUL_2")]
    StickerStufful2,
    #[serde(rename = "STICKER_STUFFUL_3")]
    StickerStufful3,
    #[serde(rename = "STICKER_STUFFUL_4")]
    StickerStufful4,
    #[serde(rename = "STICKER_SUMMER_1")]
    StickerSummer1,
    #[serde(rename = "STICKER_SUMMER_2")]
    StickerSummer2,
    #[serde(rename = "STICKER_SUMMER_3")]
    StickerSummer3,
    #[serde(rename = "STICKER_SUMMER_4")]
    StickerSummer4,
    #[serde(rename = "STICKER_SUMMER_5")]
    StickerSummer5,
    #[serde(rename = "STICKER_SUMMER_6")]
    StickerSummer6,
    #[serde(rename = "STICKER_SUMMER_2023_BLASTOISE")]
    StickerSummer2023Blastoise,
    #[serde(rename = "STICKER_SUMMER_2023_BUTTERFREE")]
    StickerSummer2023Butterfree,
    #[serde(rename = "STICKER_SUMMER_2023_CLAMPERL")]
    StickerSummer2023Clamperl,
    #[serde(rename = "STICKER_SUMMER_2023_LEDIAN")]
    StickerSummer2023Ledian,
    #[serde(rename = "STICKER_SUMMER_2023_SAWSBUCK")]
    StickerSummer2023Sawsbuck,
    #[serde(rename = "STICKER_SUMMER_2023_SQUIRTLE")]
    StickerSummer2023Squirtle,
    #[serde(rename = "STICKER_SUMMER_2024_1")]
    StickerSummer20241,
    #[serde(rename = "STICKER_SUMMER_2024_2")]
    StickerSummer20242,
    #[serde(rename = "STICKER_SUMMER_2024_3")]
    StickerSummer20243,
    #[serde(rename = "STICKER_SUMMER_2024_4")]
    StickerSummer20244,
    #[serde(rename = "STICKER_SUMMER_2024_5")]
    StickerSummer20245,
    #[serde(rename = "STICKER_SUMMER_2024_6")]
    StickerSummer20246,
    #[serde(rename = "STICKER_SUMMER_2025_1")]
    StickerSummer20251,
    #[serde(rename = "STICKER_SUMMER_2025_2")]
    StickerSummer20252,
    #[serde(rename = "STICKER_SUMMER_2025_3")]
    StickerSummer20253,
    #[serde(rename = "STICKER_SUMMER_2025_4")]
    StickerSummer20254,
    #[serde(rename = "STICKER_SWORDSHIELD21_1")]
    StickerSwordshield211,
    #[serde(rename = "STICKER_SWORDSHIELD21_2")]
    StickerSwordshield212,
    #[serde(rename = "STICKER_SWORDSHIELD21_3")]
    StickerSwordshield213,
    #[serde(rename = "STICKER_SWORDSHIELD21_4")]
    StickerSwordshield214,
    #[serde(rename = "STICKER_SWORDSHIELD21_5")]
    StickerSwordshield215,
    #[serde(rename = "STICKER_TEDDIURSA_1")]
    StickerTeddiursa1,
    #[serde(rename = "STICKER_TEDDIURSA_2")]
    StickerTeddiursa2,
    #[serde(rename = "STICKER_TEDDIURSA_3")]
    StickerTeddiursa3,
    #[serde(rename = "STICKER_TEDDIURSA_4")]
    StickerTeddiursa4,
    #[serde(rename = "STICKER_TIMBURR_1")]
    StickerTimburr1,
    #[serde(rename = "STICKER_TIMBURR_2")]
    StickerTimburr2,
    #[serde(rename = "STICKER_TIMBURR_3")]
    StickerTimburr3,
    #[serde(rename = "STICKER_TIMBURR_4")]
    StickerTimburr4,
    #[serde(rename = "STICKER_TL_BLANCHE")]
    StickerTlBlanche,
    #[serde(rename = "STICKER_TL_CANDELA")]
    StickerTlCandela,
    #[serde(rename = "STICKER_TL_SPARK")]
    StickerTlSpark,
    #[serde(rename = "STICKER_TOGETICCD2023_1")]
    StickerTogeticcd20231,
    #[serde(rename = "STICKER_TOGETICCD2023_2")]
    StickerTogeticcd20232,
    #[serde(rename = "STICKER_TOGETICCD2023_3")]
    StickerTogeticcd20233,
    #[serde(rename = "STICKER_TOGETICCD2023_4")]
    StickerTogeticcd20234,
    #[serde(rename = "STICKER_TR_ARLO")]
    StickerTrArlo,
    #[serde(rename = "STICKER_TR_CLIFF")]
    StickerTrCliff,
    #[serde(rename = "STICKER_TR_SIERRA")]
    StickerTrSierra,
    #[serde(rename = "STICKER_TYNAMOCD_1")]
    StickerTynamocd1,
    #[serde(rename = "STICKER_TYNAMOCD_2")]
    StickerTynamocd2,
    #[serde(rename = "STICKER_TYNAMOCD_3")]
    StickerTynamocd3,
    #[serde(rename = "STICKER_TYNAMOCD_4")]
    StickerTynamocd4,
    #[serde(rename = "STICKER_VALENTINE2023_1")]
    StickerValentine20231,
    #[serde(rename = "STICKER_VALENTINE2023_2")]
    StickerValentine20232,
    #[serde(rename = "STICKER_VALENTINE2023_3")]
    StickerValentine20233,
    #[serde(rename = "STICKER_WCS_PLAY")]
    StickerWcsPlay,
    #[serde(rename = "STICKER_WCS2025_CAR_GROUP")]
    StickerWcs2025CarGroup,
    #[serde(rename = "STICKER_WCS2025_JIGGLYPUFF")]
    StickerWcs2025Jigglypuff,
    #[serde(rename = "STICKER_WCS2025_MURKROW")]
    StickerWcs2025Murkrow,
    #[serde(rename = "STICKER_WCS2025_PIKACHU")]
    StickerWcs2025Pikachu,
    #[serde(rename = "STICKER_WILLOW_BRONZE")]
    StickerWillowBronze,
    #[serde(rename = "STICKER_WILLOW_GOLD")]
    StickerWillowGold,
    #[serde(rename = "STICKER_WILLOW_SILVER")]
    StickerWillowSilver,
    #[serde(rename = "STICKER_WINTER_2024_1")]
    StickerWinter20241,
    #[serde(rename = "STICKER_WINTER_2024_2")]
    StickerWinter20242,
    #[serde(rename = "STICKER_WINTER_2024_3")]
    StickerWinter20243,
    #[serde(rename = "STICKER_WINTER_2024_4")]
    StickerWinter20244,
    #[serde(rename = "STICKER_WINTER_2024_5")]
    StickerWinter20245,
    #[serde(rename = "STICKER_WINTER_2024_6")]
    StickerWinter20246,
    #[serde(rename = "STICKER_WINTER_AMAURA")]
    StickerWinterAmaura,
    #[serde(rename = "STICKER_WINTER_DARUMAKA")]
    StickerWinterDarumaka,
    #[serde(rename = "STICKER_WINTER_GLACEON")]
    StickerWinterGlaceon,
    #[serde(rename = "STICKER_WINTER_PIKACHU")]
    StickerWinterPikachu,
    #[serde(rename = "STICKER_WINTER_SAWSBUCK")]
    StickerWinterSawsbuck,
    #[serde(rename = "STICKER_WINTER_SNORUNT")]
    StickerWinterSnorunt,
    #[serde(rename = "STICKER_WINTER2023_1")]
    StickerWinter20231,
    #[serde(rename = "STICKER_WINTER2023_2")]
    StickerWinter20232,
    #[serde(rename = "STICKER_WINTER2023_3")]
    StickerWinter20233,
    #[serde(rename = "STICKER_WINTER2023_4")]
    StickerWinter20234,
    #[serde(rename = "STICKER_WINTER2023_5")]
    StickerWinter20235,
    #[serde(rename = "STICKER_WINTER2023_6")]
    StickerWinter20236,
    #[serde(rename = "STICKER_WINTER2025_1")]
    StickerWinter20251,
    #[serde(rename = "STICKER_WINTER2025_2")]
    StickerWinter20252,
    #[serde(rename = "STICKER_WINTER2025_3")]
    StickerWinter20253,
    #[serde(rename = "STICKER_WINTER2025_4")]
    StickerWinter20254,
    #[serde(rename = "STICKER_WOOPERCD2023_1")]
    StickerWoopercd20231,
    #[serde(rename = "STICKER_WOOPERCD2023_2")]
    StickerWoopercd20232,
    #[serde(rename = "STICKER_WOOPERCD2023_3")]
    StickerWoopercd20233,
    #[serde(rename = "STICKER_WOOPERCD2023_4")]
    StickerWoopercd20234,
    #[serde(rename = "STICKER_YADON")]
    StickerYadon,
    #[serde(rename = "STICKER_YURUTTO_12")]
    StickerYurutto12,
    #[serde(rename = "STICKER_YURUTTO_24")]
    StickerYurutto24,
    #[serde(rename = "STICKER_YURUTTO_26")]
    StickerYurutto26,
    #[serde(rename = "STICKER_YURUTTO_33")]
    StickerYurutto33,
    #[serde(rename = "STICKER_YURUTTO_36")]
    StickerYurutto36,
    #[serde(rename = "STICKER_YURUTTO_37")]
    StickerYurutto37,
}
