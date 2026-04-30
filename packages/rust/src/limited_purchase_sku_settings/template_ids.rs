//! Generated from Pokémon GO masterfile — group "limitedPurchaseSkuSettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash,
    Serialize, Deserialize,
    AllVariants, AsStr, FromStrEnum,
)]
pub enum LimitedPurchaseSkuSettingsTemplateId {
    #[serde(rename = "LPSKU_bundle.flair.firsttime.1")]
    LpskuBundleFlairFirsttime1,
    #[serde(rename = "LPSKU_bundle.general1.free.1")]
    LpskuBundleGeneral1Free1,
    #[serde(rename = "LPSKU_bundle.general1.medium.1")]
    LpskuBundleGeneral1Medium1,
    #[serde(rename = "LPSKU_bundle.general1.medium.2")]
    LpskuBundleGeneral1Medium2,
    #[serde(rename = "LPSKU_bundle.general1.medium.3")]
    LpskuBundleGeneral1Medium3,
    #[serde(rename = "LPSKU_bundle.general1.rocket.1")]
    LpskuBundleGeneral1Rocket1,
    #[serde(rename = "LPSKU_bundle.general1.tiny.2")]
    LpskuBundleGeneral1Tiny2,
    #[serde(rename = "LPSKU_bundle.general1.tiny.3")]
    LpskuBundleGeneral1Tiny3,
    #[serde(rename = "LPSKU_bundle.general1.tiny.4")]
    LpskuBundleGeneral1Tiny4,
    #[serde(rename = "LPSKU_bundle.general2.free.1")]
    LpskuBundleGeneral2Free1,
    #[serde(rename = "LPSKU_bundle.general2.large.1")]
    LpskuBundleGeneral2Large1,
    #[serde(rename = "LPSKU_bundle.general2.medium.1")]
    LpskuBundleGeneral2Medium1,
    #[serde(rename = "LPSKU_bundle.general4.small.2")]
    LpskuBundleGeneral4Small2,
    #[serde(rename = "LPSKU_bundle.general5.large.1")]
    LpskuBundleGeneral5Large1,
    #[serde(rename = "LPSKU_bundle.general5.small.1")]
    LpskuBundleGeneral5Small1,
    #[serde(rename = "LPSKU_bundle.general5.small.2")]
    LpskuBundleGeneral5Small2,
    #[serde(rename = "LPSKU_bundle.general5.small.3")]
    LpskuBundleGeneral5Small3,
    #[serde(rename = "LPSKU_bundle.general5.small.4")]
    LpskuBundleGeneral5Small4,
    #[serde(rename = "LPSKU_bundle.general5.small.5")]
    LpskuBundleGeneral5Small5,
    #[serde(rename = "LPSKU_bundle.general6.small.1")]
    LpskuBundleGeneral6Small1,
    #[serde(rename = "LPSKU_bundle.halloween.adventure.1")]
    LpskuBundleHalloweenAdventure1,
    #[serde(rename = "LPSKU_bundle.webstore_box.1")]
    LpskuBundleWebstoreBox1,
    #[serde(rename = "LPSKU_bundle.webstore_box.2")]
    LpskuBundleWebstoreBox2,
    #[serde(rename = "LPSKU_bundle.webstore_box.3")]
    LpskuBundleWebstoreBox3,
    #[serde(rename = "LPSKU_bundle.webstore_box.4")]
    LpskuBundleWebstoreBox4,
    #[serde(rename = "LPSKU_bundle.webstore_promo.1")]
    LpskuBundleWebstorePromo1,
    #[serde(rename = "LPSKU_bundle.webstore_thanksgiving.1")]
    LpskuBundleWebstoreThanksgiving1,
    #[serde(rename = "LPSKU_bundle.webstore_thanksgiving.2")]
    LpskuBundleWebstoreThanksgiving2,
    #[serde(rename = "LPSKU_bundle.webstore_thanksgiving.3")]
    LpskuBundleWebstoreThanksgiving3,
    #[serde(rename = "LPSKU_bundle.welcomebox.1")]
    LpskuBundleWelcomebox1,
    #[serde(rename = "LPSKU_incense.general2.medium.1")]
    LpskuIncenseGeneral2Medium1,
    #[serde(rename = "LPSKU_incense_bundle.general2.small.1")]
    LpskuIncenseBundleGeneral2Small1,
    #[serde(rename = "LPSKU_remotepass.bundle.general3.small.1")]
    LpskuRemotepassBundleGeneral3Small1,
    #[serde(rename = "LPSKU_weekly_balls.general2.medium.1")]
    LpskuWeeklyBallsGeneral2Medium1,
}
