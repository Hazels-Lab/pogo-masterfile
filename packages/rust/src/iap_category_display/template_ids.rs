//! Generated from Pokémon GO masterfile — group "iapCategoryDisplay" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash,
    Serialize, Deserialize,
    AllVariants, AsStr, FromStrEnum,
)]
pub enum IapCategoryDisplayTemplateId {
    #[serde(rename = "IAP_CATEGORY_AVATAR")]
    IapCategoryAvatar,
    #[serde(rename = "IAP_CATEGORY_BUNDLE")]
    IapCategoryBundle,
    #[serde(rename = "IAP_CATEGORY_FLAIR_BUNDLE")]
    IapCategoryFlairBundle,
    #[serde(rename = "IAP_CATEGORY_FREE")]
    IapCategoryFree,
    #[serde(rename = "IAP_CATEGORY_GLOBAL_EVENT_TICKET")]
    IapCategoryGlobalEventTicket,
    #[serde(rename = "IAP_CATEGORY_ITEMS")]
    IapCategoryItems,
    #[serde(rename = "IAP_CATEGORY_NONE")]
    IapCategoryNone,
    #[serde(rename = "IAP_CATEGORY_POKECOINS")]
    IapCategoryPokecoins,
    #[serde(rename = "IAP_CATEGORY_REWARDED_SPEND")]
    IapCategoryRewardedSpend,
    #[serde(rename = "IAP_CATEGORY_STICKER")]
    IapCategorySticker,
    #[serde(rename = "IAP_CATEGORY_TEAM_CHANGE")]
    IapCategoryTeamChange,
    #[serde(rename = "IAP_CATEGORY_TRANSPORTER_ENERGY")]
    IapCategoryTransporterEnergy,
    #[serde(rename = "IAP_CATEGORY_UPGRADES")]
    IapCategoryUpgrades,
}
