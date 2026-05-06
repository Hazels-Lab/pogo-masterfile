// Generated from Pokémon GO masterfile — group "eventPassSettings", 2 entries (variant aliases).

import type { S } from "../../_utils";
import type { EventPassSettings } from "../types";

export type EventPassSettingsApril2026Season = S<
	EventPassSettings<
		"EVENT_PASS_APRIL2026_SEASON",
		{
			eventPassDisplaySettings: {
				eventPassTitleKey: "season_pass_base_track_title_april";
				eventPassTrackUpgradeDescriptions: [
					{
						detailsLinkKey: "season_pass_details_link_april2026";
						eventDurationKey: "season_pass_april2026_event_duration";
						eventPassTrackToUpgradeTo: "PREMIUM";
						passTrackUpgradeHeaderDescription: "season_pass_april2026_track_upgrade_header_description";
						ranksToHighlightRewards: [94, 99, 100];
						trackUnlockImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe.png";
						trackUnlockPlusPointsImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe_plus.png";
						trackUnlockPlusPointsSkuId: "pgorelease.month2_deluxe_event_pass_track_unlock_plus_points";
						trackUnlockSkuId: "pgorelease.month2_deluxe_event_pass_track_unlock";
						upgradeDescriptionKey: "season_pass_april2026_upgrade_description";
					},
				];
				premiumRewardBannerBottom: "event_pass_premium_reward_banner_bottom_text";
				premiumRewardBannerImageUrl: "https://storage.googleapis.com/prod-public-images/lucky_trinket_small.png";
				premiumRewardBannerMiddle: "event_pass_premium_reward_banner_middle_text";
				premiumRewardBannerTop: "event_pass_premium_reward_banner_top_text";
				sectionDisplayPriority: 10;
			};
			expirationTime: "2026-05-05T10:00:00";
			gracePeriodEndTime: "2026-05-07T10:00:00";
			pointsItemId: "ITEM_EVENT_PASS_POINT_MONTHLY_02";
			trackConditions: [
				{
					track: "FREE";
					trackTitleKey: "season_pass_base_track_title_april";
				},
				{
					badge: "BADGE_EVENT_0175";
					track: "PREMIUM";
					trackTitleKey: "season_pass_premium_track_title_april";
				},
			];
		}
	>
>;
export type EventPassSettingsMay2026Season = S<
	EventPassSettings<
		"EVENT_PASS_MAY2026_SEASON",
		{
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

export type EventPassSettingsMasterfileEntry = EventPassSettingsApril2026Season | EventPassSettingsMay2026Season;

export type EventPassSettingsTemplateID = EventPassSettingsMasterfileEntry["templateId"];
