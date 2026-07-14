//! Generated from Pokémon GO masterfile — group "itemSettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum ItemSettingsTemplateId {
    #[serde(rename = "FUSION_RESOURCE_BLACK_KYUREM")]
    FusionResourceBlackKyurem,
    #[serde(rename = "FUSION_RESOURCE_DAWNWINGS_NECROZMA")]
    FusionResourceDawnwingsNecrozma,
    #[serde(rename = "FUSION_RESOURCE_DUSKMANE_NECROZMA")]
    FusionResourceDuskmaneNecrozma,
    #[serde(rename = "FUSION_RESOURCE_WHITE_KYUREM")]
    FusionResourceWhiteKyurem,
    #[serde(rename = "ITEM_BATTLE_PASS_TICKET")]
    ItemBattlePassTicket,
    #[serde(rename = "ITEM_BEANS")]
    ItemBeans,
    #[serde(rename = "ITEM_BEAST_BALL")]
    ItemBeastBall,
    #[serde(rename = "ITEM_BLUK_BERRY")]
    ItemBlukBerry,
    #[serde(rename = "ITEM_BREAKFAST")]
    ItemBreakfast,
    #[serde(rename = "ITEM_DRAGON_SCALE")]
    ItemDragonScale,
    #[serde(rename = "ITEM_ENHANCED_CURRENCY")]
    ItemEnhancedCurrency,
    #[serde(rename = "ITEM_ENHANCED_CURRENCY_HOLDER")]
    ItemEnhancedCurrencyHolder,
    #[serde(rename = "ITEM_EVENT_PASS_POINT_GO_FEST_01")]
    ItemEventPassPointGoFest01,
    #[serde(rename = "ITEM_EVENT_PASS_POINT_GO_FEST_02")]
    ItemEventPassPointGoFest02,
    #[serde(rename = "ITEM_EVENT_PASS_POINT_GO_TOUR_01")]
    ItemEventPassPointGoTour01,
    #[serde(rename = "ITEM_EVENT_PASS_POINT_GO_TOUR_02")]
    ItemEventPassPointGoTour02,
    #[serde(rename = "ITEM_EVENT_PASS_POINT_GO_WILD_AREA_01")]
    ItemEventPassPointGoWildArea01,
    #[serde(rename = "ITEM_EVENT_PASS_POINT_LIVE_OPS_01")]
    ItemEventPassPointLiveOps01,
    #[serde(rename = "ITEM_EVENT_PASS_POINT_LIVE_OPS_02")]
    ItemEventPassPointLiveOps02,
    #[serde(rename = "ITEM_EVENT_PASS_POINT_LIVE_OPS_03")]
    ItemEventPassPointLiveOps03,
    #[serde(rename = "ITEM_EVENT_PASS_POINT_LIVE_OPS_04")]
    ItemEventPassPointLiveOps04,
    #[serde(rename = "ITEM_EVENT_PASS_POINT_LIVE_OPS_05")]
    ItemEventPassPointLiveOps05,
    #[serde(rename = "ITEM_EVENT_PASS_POINT_LIVE_OPS_06")]
    ItemEventPassPointLiveOps06,
    #[serde(rename = "ITEM_EVENT_PASS_POINT_LIVE_OPS_07")]
    ItemEventPassPointLiveOps07,
    #[serde(rename = "ITEM_EVENT_PASS_POINT_LIVE_OPS_08")]
    ItemEventPassPointLiveOps08,
    #[serde(rename = "ITEM_EVENT_PASS_POINT_MONTHLY_01")]
    ItemEventPassPointMonthly01,
    #[serde(rename = "ITEM_EVENT_PASS_POINT_MONTHLY_02")]
    ItemEventPassPointMonthly02,
    #[serde(rename = "ITEM_EVENT_PASS_POINT_MONTHLY_03")]
    ItemEventPassPointMonthly03,
    #[serde(rename = "ITEM_EVENT_TICKET_02")]
    ItemEventTicket02,
    #[serde(rename = "ITEM_EVENT_TICKET_02_TO_GIFT")]
    ItemEventTicket02ToGift,
    #[serde(rename = "ITEM_EVENT_TICKET_03")]
    ItemEventTicket03,
    #[serde(rename = "ITEM_EVENT_TICKET_03_TO_GIFT")]
    ItemEventTicket03ToGift,
    #[serde(rename = "ITEM_EVENT_TICKET_04")]
    ItemEventTicket04,
    #[serde(rename = "ITEM_EVENT_TICKET_04_TO_GIFT")]
    ItemEventTicket04ToGift,
    #[serde(rename = "ITEM_EVENT_TICKET_05")]
    ItemEventTicket05,
    #[serde(rename = "ITEM_EVENT_TICKET_05_TO_GIFT")]
    ItemEventTicket05ToGift,
    #[serde(rename = "ITEM_EVENT_TICKET_06")]
    ItemEventTicket06,
    #[serde(rename = "ITEM_EVENT_TICKET_06_TO_GIFT")]
    ItemEventTicket06ToGift,
    #[serde(rename = "ITEM_EVENT_TICKET_07")]
    ItemEventTicket07,
    #[serde(rename = "ITEM_EVENT_TICKET_07_TO_GIFT")]
    ItemEventTicket07ToGift,
    #[serde(rename = "ITEM_EVENT_TICKET_08")]
    ItemEventTicket08,
    #[serde(rename = "ITEM_EVENT_TICKET_08_TO_GIFT")]
    ItemEventTicket08ToGift,
    #[serde(rename = "ITEM_EVENT_TICKET_09")]
    ItemEventTicket09,
    #[serde(rename = "ITEM_EVENT_TICKET_09_TO_GIFT")]
    ItemEventTicket09ToGift,
    #[serde(rename = "ITEM_EVENT_TICKET_10")]
    ItemEventTicket10,
    #[serde(rename = "ITEM_EVENT_TICKET_10_TO_GIFT")]
    ItemEventTicket10ToGift,
    #[serde(rename = "ITEM_EVENT_TICKET_GRAY")]
    ItemEventTicketGray,
    #[serde(rename = "ITEM_EVENT_TICKET_GRAY_TO_GIFT")]
    ItemEventTicketGrayToGift,
    #[serde(rename = "ITEM_EVENT_TICKET_PINK")]
    ItemEventTicketPink,
    #[serde(rename = "ITEM_EVENT_TICKET_PINK_TO_GIFT")]
    ItemEventTicketPinkToGift,
    #[serde(rename = "ITEM_EVENT_TICKET_S23_2026_01")]
    ItemEventTicketS23202601,
    #[serde(rename = "ITEM_EVENT_TICKET_S23_2026_01_TO_GIFT")]
    ItemEventTicketS23202601ToGift,
    #[serde(rename = "ITEM_EVENT_TICKET_S23_2026_02")]
    ItemEventTicketS23202602,
    #[serde(rename = "ITEM_EVENT_TICKET_S23_2026_02_TO_GIFT")]
    ItemEventTicketS23202602ToGift,
    #[serde(rename = "ITEM_EVENT_TICKET_S23_2026_03")]
    ItemEventTicketS23202603,
    #[serde(rename = "ITEM_EVENT_TICKET_S23_2026_04")]
    ItemEventTicketS23202604,
    #[serde(rename = "ITEM_EVENT_TICKET_S23_2026_04_TO_GIFT")]
    ItemEventTicketS23202604ToGift,
    #[serde(rename = "ITEM_EVENT_TICKET_S23_2026_06")]
    ItemEventTicketS23202606,
    #[serde(rename = "ITEM_EVENT_TICKET_S23_2026_07")]
    ItemEventTicketS23202607,
    #[serde(rename = "ITEM_EVENT_TICKET_S23_2026_09")]
    ItemEventTicketS23202609,
    #[serde(rename = "ITEM_EVERGREEN_TICKET")]
    ItemEvergreenTicket,
    #[serde(rename = "ITEM_EVERGREEN_TICKET_TO_GIFT")]
    ItemEvergreenTicketToGift,
    #[serde(rename = "ITEM_FREE_RAID_TICKET")]
    ItemFreeRaidTicket,
    #[serde(rename = "ITEM_FRIEND_GIFT_BOX")]
    ItemFriendGiftBox,
    #[serde(rename = "ITEM_GEN4_EVOLUTION_STONE")]
    ItemGen4EvolutionStone,
    #[serde(rename = "ITEM_GEN5_EVOLUTION_STONE")]
    ItemGen5EvolutionStone,
    #[serde(rename = "ITEM_GIOVANNI_MAP")]
    ItemGiovanniMap,
    #[serde(rename = "ITEM_GLOBAL_EVENT_TICKET")]
    ItemGlobalEventTicket,
    #[serde(rename = "ITEM_GLOBAL_EVENT_TICKET_TO_GIFT")]
    ItemGlobalEventTicketToGift,
    #[serde(rename = "ITEM_GOLDEN_PINAP_BERRY")]
    ItemGoldenPinapBerry,
    #[serde(rename = "ITEM_GOLDEN_RAZZ_BERRY")]
    ItemGoldenRazzBerry,
    #[serde(rename = "ITEM_GREAT_BALL")]
    ItemGreatBall,
    #[serde(rename = "ITEM_HYPER_POTION")]
    ItemHyperPotion,
    #[serde(rename = "ITEM_INCENSE_BELUGA_BOX")]
    ItemIncenseBelugaBox,
    #[serde(rename = "ITEM_INCENSE_DAILY_ADVENTURE")]
    ItemIncenseDailyAdventure,
    #[serde(rename = "ITEM_INCENSE_DAY_BONUS")]
    ItemIncenseDayBonus,
    #[serde(rename = "ITEM_INCENSE_NIGHT_BONUS")]
    ItemIncenseNightBonus,
    #[serde(rename = "ITEM_INCENSE_ORDINARY")]
    ItemIncenseOrdinary,
    #[serde(rename = "ITEM_INCENSE_SPARKLY")]
    ItemIncenseSparkly,
    #[serde(rename = "ITEM_INCUBATOR_BASIC")]
    ItemIncubatorBasic,
    #[serde(rename = "ITEM_INCUBATOR_BASIC_UNLIMITED")]
    ItemIncubatorBasicUnlimited,
    #[serde(rename = "ITEM_INCUBATOR_SPECIAL")]
    ItemIncubatorSpecial,
    #[serde(rename = "ITEM_INCUBATOR_SUPER")]
    ItemIncubatorSuper,
    #[serde(rename = "ITEM_INCUBATOR_TIMED")]
    ItemIncubatorTimed,
    #[serde(rename = "ITEM_ITEM_STORAGE_UPGRADE")]
    ItemItemStorageUpgrade,
    #[serde(rename = "ITEM_KINGS_ROCK")]
    ItemKingsRock,
    #[serde(rename = "ITEM_LEADER_MAP")]
    ItemLeaderMap,
    #[serde(rename = "ITEM_LEADER_MAP_FRAGMENT")]
    ItemLeaderMapFragment,
    #[serde(rename = "ITEM_LUCKY_EGG")]
    ItemLuckyEgg,
    #[serde(rename = "ITEM_LUCKY_FRIEND_APPLICATOR")]
    ItemLuckyFriendApplicator,
    #[serde(rename = "ITEM_MASTER_BALL")]
    ItemMasterBall,
    #[serde(rename = "ITEM_MAX_BOOST")]
    ItemMaxBoost,
    #[serde(rename = "ITEM_MAX_POTION")]
    ItemMaxPotion,
    #[serde(rename = "ITEM_MAX_REVIVE")]
    ItemMaxRevive,
    #[serde(rename = "ITEM_METAL_COAT")]
    ItemMetalCoat,
    #[serde(rename = "ITEM_MOVE_REROLL_ELITE_FAST_ATTACK")]
    ItemMoveRerollEliteFastAttack,
    #[serde(rename = "ITEM_MOVE_REROLL_ELITE_SPECIAL_ATTACK")]
    ItemMoveRerollEliteSpecialAttack,
    #[serde(rename = "ITEM_MOVE_REROLL_FAST_ATTACK")]
    ItemMoveRerollFastAttack,
    #[serde(rename = "ITEM_MOVE_REROLL_OTHER_SPECIAL_ATTACK_A")]
    ItemMoveRerollOtherSpecialAttackA,
    #[serde(rename = "ITEM_MOVE_REROLL_SPECIAL_ATTACK")]
    ItemMoveRerollSpecialAttack,
    #[serde(rename = "ITEM_MP")]
    ItemMp,
    #[serde(rename = "ITEM_MP_REPLENISH")]
    ItemMpReplenish,
    #[serde(rename = "ITEM_NANAB_BERRY")]
    ItemNanabBerry,
    #[serde(rename = "ITEM_OTHER_EVOLUTION_STONE_A")]
    ItemOtherEvolutionStoneA,
    #[serde(rename = "ITEM_OTHER_EVOLUTION_STONE_MAPLE_A")]
    ItemOtherEvolutionStoneMapleA,
    #[serde(rename = "ITEM_OTHER_EVOLUTION_STONE_MAPLE_B")]
    ItemOtherEvolutionStoneMapleB,
    #[serde(rename = "ITEM_OTHER_EVOLUTION_STONE_MAPLE_C")]
    ItemOtherEvolutionStoneMapleC,
    #[serde(rename = "ITEM_PAID_RAID_TICKET")]
    ItemPaidRaidTicket,
    #[serde(rename = "ITEM_PINAP_BERRY")]
    ItemPinapBerry,
    #[serde(rename = "ITEM_POFFIN")]
    ItemPoffin,
    #[serde(rename = "ITEM_POKE_BALL")]
    ItemPokeBall,
    #[serde(rename = "ITEM_POKEMON_STORAGE_UPGRADE")]
    ItemPokemonStorageUpgrade,
    #[serde(rename = "ITEM_POSTCARD_INVENTORY")]
    ItemPostcardInventory,
    #[serde(rename = "ITEM_POSTCARD_STORAGE_UPGRADE")]
    ItemPostcardStorageUpgrade,
    #[serde(rename = "ITEM_POTION")]
    ItemPotion,
    #[serde(rename = "ITEM_PREMIER_BALL")]
    ItemPremierBall,
    #[serde(rename = "ITEM_RARE_CANDY")]
    ItemRareCandy,
    #[serde(rename = "ITEM_RAZZ_BERRY")]
    ItemRazzBerry,
    #[serde(rename = "ITEM_REMOTE_RAID_TICKET")]
    ItemRemoteRaidTicket,
    #[serde(rename = "ITEM_RESOURCE_CROWNED_ZACIAN")]
    ItemResourceCrownedZacian,
    #[serde(rename = "ITEM_RESOURCE_CROWNED_ZAMAZENTA")]
    ItemResourceCrownedZamazenta,
    #[serde(rename = "ITEM_REVIVE")]
    ItemRevive,
    #[serde(rename = "ITEM_ROUTE_MAKER")]
    ItemRouteMaker,
    #[serde(rename = "ITEM_SHADOW_GEM")]
    ItemShadowGem,
    #[serde(rename = "ITEM_SHADOW_GEM_FRAGMENT")]
    ItemShadowGemFragment,
    #[serde(rename = "ITEM_SINGLE_STAT_INCREASE")]
    ItemSingleStatIncrease,
    #[serde(rename = "ITEM_SOFT_SFIDA")]
    ItemSoftSfida,
    #[serde(rename = "ITEM_SPECIAL_CAMERA")]
    ItemSpecialCamera,
    #[serde(rename = "ITEM_STAR_PIECE")]
    ItemStarPiece,
    #[serde(rename = "ITEM_STICKER_INVENTORY")]
    ItemStickerInventory,
    #[serde(rename = "ITEM_SUN_STONE")]
    ItemSunStone,
    #[serde(rename = "ITEM_SUPER_POTION")]
    ItemSuperPotion,
    #[serde(rename = "ITEM_TEAM_CHANGE")]
    ItemTeamChange,
    #[serde(rename = "ITEM_TICKET_CITY_SAFARI_00")]
    ItemTicketCitySafari00,
    #[serde(rename = "ITEM_TICKET_CITY_SAFARI_01")]
    ItemTicketCitySafari01,
    #[serde(rename = "ITEM_TICKET_CITY_SAFARI_02")]
    ItemTicketCitySafari02,
    #[serde(rename = "ITEM_TICKET_CITY_SAFARI_04")]
    ItemTicketCitySafari04,
    #[serde(rename = "ITEM_TRIPLE_STAT_INCREASE")]
    ItemTripleStatIncrease,
    #[serde(rename = "ITEM_TROY_DISK")]
    ItemTroyDisk,
    #[serde(rename = "ITEM_TROY_DISK_GLACIAL")]
    ItemTroyDiskGlacial,
    #[serde(rename = "ITEM_TROY_DISK_MAGNETIC")]
    ItemTroyDiskMagnetic,
    #[serde(rename = "ITEM_TROY_DISK_MOSSY")]
    ItemTroyDiskMossy,
    #[serde(rename = "ITEM_TROY_DISK_RAINY")]
    ItemTroyDiskRainy,
    #[serde(rename = "ITEM_TROY_DISK_SPARKLY")]
    ItemTroyDiskSparkly,
    #[serde(rename = "ITEM_ULTRA_BALL")]
    ItemUltraBall,
    #[serde(rename = "ITEM_UP_GRADE")]
    ItemUpGrade,
    #[serde(rename = "ITEM_WEPAR_BERRY")]
    ItemWeparBerry,
    #[serde(rename = "ITEM_WILD_BALL")]
    ItemWildBall,
    #[serde(rename = "ITEM_WILD_BALL_PREMIER")]
    ItemWildBallPremier,
    #[serde(rename = "ITEM_X_ATTACK")]
    ItemXAttack,
    #[serde(rename = "ITEM_X_DEFENSE")]
    ItemXDefense,
    #[serde(rename = "ITEM_X_MIRACLE")]
    ItemXMiracle,
    #[serde(rename = "ITEM_XL_RARE_CANDY")]
    ItemXlRareCandy,
}
