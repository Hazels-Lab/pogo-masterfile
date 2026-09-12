// Generated from Pokémon GO masterfile — group "eventPassSettings", 2 entries (variant aliases).

import type { S } from "../../_utils";
import type { EventPassSettings } from "../types";

export type EventPassSettingsMegasquads2026Event = S<
	EventPassSettings<
		"EVENT_PASS_MEGASQUADS2026_EVENT",
		{
			additionalBonusTiersLevel: 31;
			eventPassDisplaySettings: {
				eventPassTitleKey: "season_pass_base_track_title_mega_squads_2026";
				eventPassTrackUpgradeDescriptions: [
					{
						detailsLinkKey: "details_link_key_mega_squads";
						eventDurationKey: "season_pass_mega_squads_2026_event_duration";
						eventPassTrackToUpgradeTo: "PREMIUM";
						passTrackUpgradeHeaderDescription: "deluxe_event_pass_track_unlock_description";
						ranksToHighlightRewards: [6, 13, 25];
						trackUnlockImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe.png";
						trackUnlockPlusPointsImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe_plus.png";
						trackUnlockPlusPointsSkuId: "pgorelease.september1_2026_deluxe_event_pass_track_unlock_plus_points";
						trackUnlockSkuId: "pgorelease.september1_2026_deluxe_event_pass_track_unlock";
						upgradeDescriptionKey: "season_pass_mega_squads_2026_upgrade_description";
					},
				];
				premiumRewardBannerBottom: "event_pass_premium_reward_banner_bottom_text_25";
				premiumRewardBannerImageUrl: "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2F7150419b_s24-logo-512x512.png";
				premiumRewardBannerMiddle: "avatar_shirt_maschiff";
				sectionDisplayPriority: 6;
			};
			expirationTime: "2026-09-14T20:00:00";
			gracePeriodEndTime: "2026-09-16T20:00:00";
			maxTierLevel: 60;
			pointsItemId: "ITEM_EVENT_PASS_POINT_LIVE_OPS_01";
			trackConditions: [
				{
					track: "FREE";
					trackTitleKey: "season_pass_base_track_title_mega_squads_2026";
				},
				{
					badge: "BADGE_EVENT_0241";
					track: "PREMIUM";
					trackTitleKey: "season_pass_premium_track_title_mega_squads_2026";
				},
			];
		}
	>
>;
export type EventPassSettingsSeptember2026Season = S<
	EventPassSettings<
		"EVENT_PASS_SEPTEMBER2026_SEASON",
		{
			additionalBonusTiersLevel: 101;
			eventPassDisplaySettings: {
				eventPassTitleKey: "season_pass_base_track_title_sep";
				eventPassTrackUpgradeDescriptions: [
					{
						detailsLinkKey: "season_pass_details_link_sep2026";
						eventDurationKey: "season_pass_sep2026_event_duration";
						eventPassTrackToUpgradeTo: "PREMIUM";
						passTrackUpgradeHeaderDescription: "season_pass_sep2026_track_upgrade_header_description";
						ranksToHighlightRewards: [20, 91, 99];
						trackUnlockImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe.png";
						trackUnlockPlusPointsImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe_plus.png";
						trackUnlockPlusPointsSkuId: "pgorelease.month1_deluxe_event_pass_track_unlock_plus_points";
						trackUnlockSkuId: "pgorelease.month1_deluxe_event_pass_track_unlock";
						upgradeDescriptionKey: "season_pass_sep2026_upgrade_description";
					},
				];
				premiumRewardBannerBottom: "event_pass_premium_reward_banner_bottom_text_timed_incubator";
				premiumRewardBannerImageUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FIncubator_green128x128.png";
				premiumRewardBannerMiddle: "item_incubator_timed_name";
				sectionDisplayPriority: 12;
			};
			expirationTime: "2026-10-06T10:00:00";
			gracePeriodEndTime: "2026-10-08T10:00:00";
			maxTierLevel: 200;
			pointsItemId: "ITEM_EVENT_PASS_POINT_MONTHLY_01";
			trackConditions: [
				{
					track: "FREE";
					trackTitleKey: "season_pass_base_track_title_sep";
				},
				{
					badge: "BADGE_EVENT_0236";
					track: "PREMIUM";
					trackTitleKey: "season_pass_premium_track_title_sep";
				},
			];
		}
	>
>;

export type EventPassSettingsMasterfileEntry = EventPassSettingsMegasquads2026Event | EventPassSettingsSeptember2026Season;

export type EventPassSettingsTemplateID = EventPassSettingsMasterfileEntry["templateId"];
