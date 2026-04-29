// Generated from Pokémon GO masterfile — group "eventPassSettings", 2 entries (variant aliases).

import type { S } from "../_utils";
import type { EventPassSettings } from "./index";

export type EventPassSettingsApril2026Season = S<
	EventPassSettings<
		"EVENT_PASS_APRIL2026_SEASON",
		{
			additionalBonusTiersLevel: 101;
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
				sectionDisplayPriority: 10;
			};
			expirationTime: "2026-05-05T10:00:00";
			gracePeriodEndTime: "2026-05-07T10:00:00";
			maxTierLevel: 200;
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
export type EventPassSettingsSteeledresolve2026Event = S<
	EventPassSettings<
		"EVENT_PASS_STEELEDRESOLVE2026_EVENT",
		{
			additionalBonusTiersLevel: 31;
			eventPassDisplaySettings: {
				eventPassTitleKey: "season_pass_base_track_title_steeled_resolve_2026";
				eventPassTrackUpgradeDescriptions: [
					{
						detailsLinkKey: "season_pass_details_link_steeled_resolve_2026";
						eventDurationKey: "season_pass_steeled_resolve_2026_event_duration";
						eventPassTrackToUpgradeTo: "PREMIUM";
						passTrackUpgradeHeaderDescription: "season_pass_steeled_resolve_2026_track_upgrade_header_description";
						ranksToHighlightRewards: [1, 22, 30];
						trackUnlockImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe.png";
						trackUnlockPlusPointsImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe_plus.png";
						trackUnlockPlusPointsSkuId: "pgorelease.april3_2026_deluxe_event_pass_track_unlock_plus_points";
						trackUnlockSkuId: "pgorelease.april3_2026_deluxe_event_pass_track_unlock";
						upgradeDescriptionKey: "season_pass_steeled_resolve_2026_upgrade_description";
					},
				];
				premiumRewardBannerBottom: "event_pass_premium_reward_banner_bottom_text_steeled_resolve_2026";
				premiumRewardBannerImageUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FS22_MemoriesInMotion_Logo.png";
				premiumRewardBannerMiddle: "item_steeled_resolve_milestone_name";
				sectionDisplayPriority: 12;
			};
			expirationTime: "2026-05-04T20:00:00";
			gracePeriodEndTime: "2026-05-06T20:00:00";
			maxTierLevel: 60;
			pointsItemId: "ITEM_EVENT_PASS_POINT_LIVE_OPS_08";
			trackConditions: [
				{
					track: "FREE";
					trackTitleKey: "season_pass_base_track_title_steeled_resolve_2026";
				},
				{
					badge: "BADGE_EVENT_0196";
					track: "PREMIUM";
					trackTitleKey: "season_pass_premium_track_title_steeled_resolve_2026";
				},
			];
		}
	>
>;

export type EventPassSettingsMasterfileEntry = EventPassSettingsApril2026Season | EventPassSettingsSteeledresolve2026Event;

export type EventPassSettingsTemplateID = EventPassSettingsMasterfileEntry["templateId"];
