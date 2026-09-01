// Generated from Pokémon GO masterfile — group "eventPassSettings", 2 entries (variant aliases).

import type { S } from "../../_utils";
import type { EventPassSettings } from "../types";

export type EventPassSettingsAugust2026Season = S<
	EventPassSettings<
		"EVENT_PASS_AUGUST2026_SEASON",
		{
			eventPassDisplaySettings: {
				bonusBoxes: [
					{
						iconType: "SPAWN_UNKNOWN";
						quantity: 5;
						text: "quest_catch_pokemon_singular";
					},
					{
						iconType: "EGG";
						quantity: 40;
						text: "quest_hatch_egg_singular";
					},
					{
						iconType: "RAID";
						quantity: 100;
						text: "quest_win_raid_singular";
					},
				];
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
				premiumRewardBannerTop: "event_pass_premium_reward_banner_top_text";
				premiumRewardsDescription: "season_pass_premium_rewards_desc_monthly_no_disclaimer";
				sectionDisplayPriority: 14;
				todayViewSection: "SEASONAL_EVENT_PASS_SECTION";
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
export type EventPassSettingsGofest2026Finale = S<
	EventPassSettings<
		"EVENT_PASS_GOFEST2026_FINALE",
		{
			eventPassDisplaySettings: {
				bonusBoxes: [
					{
						iconType: "SPAWN_UNKNOWN";
						quantity: 5;
						text: "quest_catch_pokemon_singular";
					},
					{
						iconType: "RAID";
						quantity: 100;
						text: "quest_win_raid_singular";
					},
					{
						iconType: "EGG";
						quantity: 250;
						text: "quest_hatch_egg_singular";
					},
				];
				eventPassTitleKey: "event_pass_gofest2026_finale_base_track_title";
				eventPassTrackUpgradeDescriptions: [
					{
						detailsLinkKey: "gofest2026_finale_details_link";
						eventDurationKey: "event_pass_gofest2026_finale_event_duration";
						eventPassTrackToUpgradeTo: "PREMIUM";
						passTrackUpgradeHeaderDescription: "event_pass_gofest2026_finale_track_upgrade_header_description";
						ranksToHighlightRewards: [20, 40, 100];
						trackUnlockImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe.png";
						trackUnlockPlusPointsImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe_plus_points.png";
						trackUnlockPlusPointsSkuId: "pgorelease.gofest_finale_2025_deluxe_event_pass_track_unlock_plus_points";
						trackUnlockSkuId: "pgorelease.gofest_finale_2025_deluxe_event_pass_track_unlock";
						upgradeDescriptionKey: "event_pass_gofest2026_finale_upgrade_description";
					},
				];
				headerIconUrl: "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Fe7045957_PGO_Fest_Finale_Logo_512x512.png";
				todayViewSection: 2;
			};
			expirationTime: "2026-09-06T23:59:59";
			gracePeriodEndTime: "2026-09-08T23:59:59";
			maxTierLevel: 600;
			pointsItemId: "ITEM_EVENT_PASS_POINT_GO_FEST_02";
			trackConditions: [
				{
					track: "FREE";
					trackTitleKey: "event_pass_gofest2026_finale_base_track_title";
				},
				{
					badge: 6261;
					track: "PREMIUM";
					trackTitleKey: "event_pass_gofest2026_finale_premium_track_title";
				},
			];
		}
	>
>;

export type EventPassSettingsMasterfileEntry = EventPassSettingsAugust2026Season | EventPassSettingsGofest2026Finale;

export type EventPassSettingsTemplateID = EventPassSettingsMasterfileEntry["templateId"];
