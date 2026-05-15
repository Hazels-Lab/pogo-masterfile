// Generated from Pokémon GO masterfile — group "eventPassSettings", 2 entries (variant aliases).

import type { S } from "../../_utils";
import type { EventPassSettings } from "../types";

export type EventPassSettingsMay2026Season = S<
	EventPassSettings<
		"EVENT_PASS_MAY2026_SEASON",
		{
			additionalBonusTiersLevel: 101;
			eventPassDisplaySettings: {
				eventPassTitleKey: "season_pass_base_track_title_may";
				eventPassTrackUpgradeDescriptions: [
					{
						detailsLinkKey: "season_pass_details_link_may2026";
						eventDurationKey: "season_pass_may2026_event_duration";
						eventPassTrackToUpgradeTo: "PREMIUM";
						passTrackUpgradeHeaderDescription: "season_pass_may2026_track_upgrade_header_description";
						ranksToHighlightRewards: [94, 99, 100];
						trackUnlockImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe.png";
						trackUnlockPlusPointsImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe_plus.png";
						trackUnlockPlusPointsSkuId: "pgorelease.month3_deluxe_event_pass_track_unlock_plus_points";
						trackUnlockSkuId: "pgorelease.month3_deluxe_event_pass_track_unlock";
						upgradeDescriptionKey: "season_pass_may2026_upgrade_description";
					},
				];
				sectionDisplayPriority: 11;
			};
			expirationTime: "2026-06-02T10:00:00";
			gracePeriodEndTime: "2026-06-04T10:00:00";
			maxTierLevel: 200;
			pointsItemId: "ITEM_EVENT_PASS_POINT_MONTHLY_03";
			trackConditions: [
				{
					track: "FREE";
					trackTitleKey: "season_pass_base_track_title_may";
				},
				{
					badge: "BADGE_EVENT_0176";
					track: "PREMIUM";
					trackTitleKey: "season_pass_premium_track_title_may";
				},
			];
		}
	>
>;
export type EventPassSettingsSpringmarathon2026Event = S<
	EventPassSettings<
		"EVENT_PASS_SPRINGMARATHON2026_EVENT",
		{
			additionalBonusTiersLevel: 31;
			eventPassDisplaySettings: {
				eventPassTitleKey: "season_pass_base_track_title_spring_marathon_2026";
				eventPassTrackUpgradeDescriptions: [
					{
						detailsLinkKey: "season_pass_details_link_spring_marathon_2026";
						eventDurationKey: "season_pass_spring_marathon_2026_event_duration";
						eventPassTrackToUpgradeTo: "PREMIUM";
						passTrackUpgradeHeaderDescription: "season_pass_spring_marathon_2026_track_upgrade_header_description";
						ranksToHighlightRewards: [15, 29, 30];
						trackUnlockImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe.png";
						trackUnlockPlusPointsImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe_plus.png";
						trackUnlockPlusPointsSkuId: "pgorelease.may1_2026_deluxe_event_pass_track_unlock_plus_points";
						trackUnlockSkuId: "pgorelease.may1_2026_deluxe_event_pass_track_unlock";
						upgradeDescriptionKey: "season_pass_spring_marathon_2026_upgrade_description";
					},
				];
				premiumRewardBannerBottom: "event_pass_premium_reward_banner_bottom_text_spring_marathon_2026";
				premiumRewardBannerImageUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FS22_MemoriesInMotion_Logo.png";
				premiumRewardBannerMiddle: "item_spring_marathon_2026_milestone_name";
				premiumRewardBannerTop: "event_pass_premium_reward_banner_top_text";
				sectionDisplayPriority: 50;
			};
			expirationTime: "2026-05-18T20:00:00";
			gracePeriodEndTime: "2026-05-20T20:00:00";
			maxTierLevel: 60;
			pointsItemId: "ITEM_EVENT_PASS_POINT_LIVE_OPS_01";
			trackConditions: [
				{
					track: "FREE";
					trackTitleKey: "season_pass_base_track_title_spring_marathon_2026";
				},
				{
					badge: "BADGE_EVENT_0193";
					track: "PREMIUM";
					trackTitleKey: "season_pass_premium_track_title_spring_marathon_2026";
				},
			];
		}
	>
>;

export type EventPassSettingsMasterfileEntry = EventPassSettingsMay2026Season | EventPassSettingsSpringmarathon2026Event;

export type EventPassSettingsTemplateID = EventPassSettingsMasterfileEntry["templateId"];
