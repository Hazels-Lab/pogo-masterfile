// Generated from Pokémon GO masterfile — group "eventPassSettings", 2 entries (variant aliases).

import type { S } from "../../_utils";
import type { EventPassSettings } from "../types";

export type EventPassSettingsAugust2026Season = S<
	EventPassSettings<
		"EVENT_PASS_AUGUST2026_SEASON",
		{
			additionalBonusTiersLevel: 101;
			eventPassDisplaySettings: {
				eventPassTitleKey: "season_pass_base_track_title_aug";
				eventPassTrackUpgradeDescriptions: [
					{
						detailsLinkKey: "season_pass_details_link_august2026";
						eventDurationKey: "season_pass_august2026_event_duration";
						eventPassTrackToUpgradeTo: "PREMIUM";
						passTrackUpgradeHeaderDescription: "season_pass_august2026_track_upgrade_header_description";
						ranksToHighlightRewards: [94, 80, 100];
						trackUnlockImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe.png";
						trackUnlockPlusPointsImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe_plus.png";
						trackUnlockPlusPointsSkuId: "pgorelease.month3_deluxe_event_pass_track_unlock_plus_points";
						trackUnlockSkuId: "pgorelease.month3_deluxe_event_pass_track_unlock";
						upgradeDescriptionKey: "season_pass_august2026_upgrade_description";
					},
				];
				headerIconUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fd99f7e15_Logo_256x256.png";
				premiumRewardBannerBottom: "event_pass_premium_reward_banner_bottom_text";
				premiumRewardBannerImageUrl: "https://storage.googleapis.com/prod-public-images/lucky_trinket_small.png";
				premiumRewardBannerMiddle: "event_pass_premium_reward_banner_middle_text";
				sectionDisplayPriority: 14;
			};
			expirationTime: "2026-09-08T10:00:00";
			gracePeriodEndTime: "2026-09-10T10:00:00";
			maxTierLevel: 200;
			pointsItemId: "ITEM_EVENT_PASS_POINT_MONTHLY_03";
			trackConditions: [
				{
					track: "FREE";
					trackTitleKey: "season_pass_base_track_title_aug";
				},
				{
					badge: "BADGE_EVENT_0192";
					track: "PREMIUM";
					trackTitleKey: "season_pass_premium_track_title_aug";
				},
			];
		}
	>
>;
export type EventPassSettingsWcs2026Event = S<
	EventPassSettings<
		"EVENT_PASS_WCS2026_EVENT",
		{
			additionalBonusTiersLevel: 31;
			eventPassDisplaySettings: {
				eventPassTitleKey: "season_pass_base_track_title_WCS_2026";
				eventPassTrackUpgradeDescriptions: [
					{
						detailsLinkKey: "season_pass_details_link_WCS_2026";
						eventDurationKey: "season_pass_WCS_2026_event_duration";
						eventPassTrackToUpgradeTo: "PREMIUM";
						passTrackUpgradeHeaderDescription: "season_pass_WCS_2026_track_upgrade_header_description_backpack";
						ranksToHighlightRewards: [5, 15, 30];
						trackUnlockImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe.png";
						trackUnlockPlusPointsImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe_plus.png";
						trackUnlockPlusPointsSkuId: "pgorelease.august3_deluxe_event_pass_track_unlock_plus_points";
						trackUnlockSkuId: "pgorelease.august3_deluxe_event_pass_track_unlock";
						upgradeDescriptionKey: "season_pass_WCS_2026_upgrade_description";
					},
				];
				headerIconUrl: "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Fdd421c86_2026-worlds-pokemonxp-backpack-270x270.png";
				premiumRewardBannerBottom: "event_pass_premium_reward_banner_bottom_text_bugoutbuddies2026";
				premiumRewardBannerImageUrl: "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Fdd421c86_2026-worlds-pokemonxp-backpack-270x270.png";
				premiumRewardBannerMiddle: "avatar_backpack_wcspxp";
				sectionDisplayPriority: 50;
			};
			expirationTime: "2026-08-30T20:00:00";
			gracePeriodEndTime: "2026-09-01T20:00:00";
			maxTierLevel: 60;
			pointsItemId: "ITEM_EVENT_PASS_POINT_LIVE_OPS_07";
			trackConditions: [
				{
					track: "FREE";
					trackTitleKey: "season_pass_base_track_title_WCS_2026";
				},
				{
					badge: "BADGE_EVENT_0231";
					track: "PREMIUM";
					trackTitleKey: "season_pass_premium_track_title_WCS_2026";
				},
			];
		}
	>
>;

export type EventPassSettingsMasterfileEntry = EventPassSettingsAugust2026Season | EventPassSettingsWcs2026Event;

export type EventPassSettingsTemplateID = EventPassSettingsMasterfileEntry["templateId"];
