// Generated from Pokémon GO masterfile — group "eventPassSettings", 2 entries (variant aliases).

import type { S } from "../../_utils";
import type { EventPassSettings } from "../types";

export type EventPassSettingsNovember2026Season = S<
	EventPassSettings<
		"EVENT_PASS_NOVEMBER2026_SEASON",
		{
			additionalBonusTiersLevel: 101;
			eventPassDisplaySettings: {
				eventPassTitleKey: "season_pass_base_track_title_nov";
				eventPassTrackUpgradeDescriptions: [
					{
						detailsLinkKey: "season_pass_details_link_nov2026";
						eventDurationKey: "season_pass_nov2026_event_duration";
						eventPassTrackToUpgradeTo: "PREMIUM";
						passTrackUpgradeHeaderDescription: "season_pass_nov2026_track_upgrade_header_description";
						ranksToHighlightRewards: [94, 99, 100];
						trackUnlockImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe.png";
						trackUnlockPlusPointsImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe_plus.png";
						trackUnlockPlusPointsSkuId: "pgorelease.month3_deluxe_event_pass_track_unlock_plus_points";
						trackUnlockSkuId: "pgorelease.month3_deluxe_event_pass_track_unlock";
						upgradeDescriptionKey: "season_pass_nov2026_upgrade_description";
					},
				];
				premiumRewardBannerBottom: "event_pass_premium_reward_banner_bottom_text";
				premiumRewardBannerImageUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2F0_poke%CC%81coin.png";
				premiumRewardBannerMiddle: "today_view_pokecoins_section_title";
				sectionDisplayPriority: 14;
			};
			expirationTime: "2026-12-01T10:00:00";
			gracePeriodEndTime: "2026-12-03T10:00:00";
			maxTierLevel: 200;
			pointsItemId: "ITEM_EVENT_PASS_POINT_MONTHLY_03";
			trackConditions: [
				{
					track: "FREE";
					trackTitleKey: "season_pass_base_track_title_nov";
				},
				{
					badge: "BADGE_EVENT_0238";
					track: "PREMIUM";
					trackTitleKey: "season_pass_premium_track_title_nov";
				},
			];
		}
	>
>;
export type EventPassSettingsTwilightTrailsFinale2026 = S<
	EventPassSettings<
		"EVENT_PASS_TWILIGHT_TRAILS_FINALE_2026",
		{
			additionalBonusTiersLevel: 31;
			eventPassDisplaySettings: {
				eventPassTitleKey: "twilight_trails_finale_event_pass_title";
				eventPassTrackUpgradeDescriptions: [
					{
						detailsLinkKey: "details_link_key";
						eventDurationKey: "twilight_trails_finale_event_pass_duration";
						eventPassTrackToUpgradeTo: "PREMIUM";
						passTrackUpgradeHeaderDescription: "twilight_trails_finale_event_pass_upgrade_header_description";
						ranksToHighlightRewards: [8, 16, 18];
						trackUnlockImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe.png";
						trackUnlockPlusPointsImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe_plus.png";
						trackUnlockPlusPointsSkuId: "pgorelease.november1_2026_deluxe_event_pass_track_unlock_plus_points";
						trackUnlockSkuId: "pgorelease.november1_2026_deluxe_event_pass_track_unlock";
						upgradeDescriptionKey: "twilight_trails_finale_event_pass_upgrade_description";
					},
				];
				premiumRewardBannerBottom: "rank_16_event_pass_banner_bottom";
				premiumRewardBannerImageUrl: "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2F7150419b_s24-logo-512x512.png";
				premiumRewardBannerMiddle: "avatar_pose_starballoon";
				sectionDisplayPriority: 12;
			};
			expirationTime: "2026-11-30T20:00:00";
			gracePeriodEndTime: "2026-12-02T20:00:00";
			maxTierLevel: 60;
			pointsItemId: "ITEM_EVENT_PASS_POINT_LIVE_OPS_06";
			trackConditions: [
				{
					track: "FREE";
					trackTitleKey: "twilight_trails_finale_event_pass_title";
				},
				{
					badge: "BADGE_EVENT_0246";
					track: "PREMIUM";
					trackTitleKey: "twilight_trails_finale_event_pass_deluxe_title";
				},
			];
		}
	>
>;

export type EventPassSettingsMasterfileEntry = EventPassSettingsNovember2026Season | EventPassSettingsTwilightTrailsFinale2026;

export type EventPassSettingsTemplateID = EventPassSettingsMasterfileEntry["templateId"];
