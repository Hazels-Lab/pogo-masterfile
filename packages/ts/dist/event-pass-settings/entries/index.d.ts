// Generated from Pokémon GO masterfile — group "eventPassSettings", 2 entries (variant aliases).

import type { S } from "../../_utils";
import type { EventPassSettings } from "../types";

export type EventPassSettingsHalloween2026Event = S<
	EventPassSettings<
		"EVENT_PASS_HALLOWEEN_2026_EVENT",
		{
			additionalBonusTiersLevel: 51;
			eventPassDisplaySettings: {
				eventPassTitleKey: "season_pass_base_track_title_halloween2026";
				eventPassTrackUpgradeDescriptions: [
					{
						detailsLinkKey: "season_pass_details_link_halloween2026_part1";
						eventDurationKey: "season_pass_halloween2026_event_duration";
						eventPassTrackToUpgradeTo: "PREMIUM";
						passTrackUpgradeHeaderDescription: "season_pass_halloween2026_track_upgrade_header_description";
						ranksToHighlightRewards: [15, 30, 50];
						trackUnlockImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe.png";
						trackUnlockPlusPointsImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe_plus.png";
						trackUnlockPlusPointsSkuId: "pgorelease.october2_2026_deluxe_event_pass_track_unlock_plus_points";
						trackUnlockSkuId: "pgorelease.october2_2026_deluxe_event_pass_track_unlock";
						upgradeDescriptionKey: "season_pass_halloween2026_upgrade_description";
					},
				];
				premiumRewardBannerBottom: "event_pass_premium_reward_banner_bottom_text_bugoutbuddies2026";
				premiumRewardBannerImageUrl: "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2F7150419b_s24-logo-512x512.png";
				premiumRewardBannerMiddle: "avatar_pants_halloween2026";
				sectionDisplayPriority: 50;
			};
			expirationTime: "2026-11-05T20:00:00";
			gracePeriodEndTime: "2026-11-07T20:00:00";
			maxTierLevel: 108;
			pointsItemId: "ITEM_EVENT_PASS_POINT_LIVE_OPS_05";
			trackConditions: [
				{
					track: "FREE";
					trackTitleKey: "season_pass_base_track_title_halloween2026";
				},
				{
					badge: "BADGE_EVENT_0245";
					track: "PREMIUM";
					trackTitleKey: "season_pass_premium_track_title_halloween2026";
				},
			];
		}
	>
>;
export type EventPassSettingsOctober2026Season = S<
	EventPassSettings<
		"EVENT_PASS_OCTOBER2026_SEASON",
		{
			additionalBonusTiersLevel: 101;
			eventPassDisplaySettings: {
				eventPassTitleKey: "season_pass_base_track_title_oct";
				eventPassTrackUpgradeDescriptions: [
					{
						detailsLinkKey: "season_pass_details_link_oct2026";
						eventDurationKey: "season_pass_oct2026_event_duration";
						eventPassTrackToUpgradeTo: "PREMIUM";
						passTrackUpgradeHeaderDescription: "season_pass_oct2026_track_upgrade_header_description";
						ranksToHighlightRewards: [94, 99, 100];
						trackUnlockImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe.png";
						trackUnlockPlusPointsImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe_plus.png";
						trackUnlockPlusPointsSkuId: "pgorelease.month2_deluxe_event_pass_track_unlock_plus_points";
						trackUnlockSkuId: "pgorelease.month2_deluxe_event_pass_track_unlock";
						upgradeDescriptionKey: "season_pass_oct2026_upgrade_description";
					},
				];
				premiumRewardBannerBottom: "event_pass_premium_reward_banner_bottom_text";
				premiumRewardBannerImageUrl: "https://storage.googleapis.com/prod-public-images/lucky_trinket_small.png";
				premiumRewardBannerMiddle: "event_pass_premium_reward_banner_middle_text";
				sectionDisplayPriority: 13;
			};
			expirationTime: "2026-11-03T10:00:00";
			gracePeriodEndTime: "2026-11-05T10:00:00";
			maxTierLevel: 200;
			pointsItemId: "ITEM_EVENT_PASS_POINT_MONTHLY_02";
			trackConditions: [
				{
					track: "FREE";
					trackTitleKey: "season_pass_base_track_title_oct";
				},
				{
					badge: "BADGE_EVENT_0237";
					track: "PREMIUM";
					trackTitleKey: "season_pass_premium_track_title_oct";
				},
			];
		}
	>
>;

export type EventPassSettingsMasterfileEntry = EventPassSettingsHalloween2026Event | EventPassSettingsOctober2026Season;

export type EventPassSettingsTemplateID = EventPassSettingsMasterfileEntry["templateId"];
