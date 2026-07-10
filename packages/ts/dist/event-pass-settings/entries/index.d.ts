// Generated from Pokémon GO masterfile — group "eventPassSettings", 2 entries (variant aliases).

import type { S } from "../../_utils";
import type { EventPassSettings } from "../types";

export type EventPassSettingsGofest2026Global = S<
	EventPassSettings<
		"EVENT_PASS_GOFEST2026_GLOBAL",
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
				eventPassTitleKey: "event_pass_gofest2026_base_track_title";
				eventPassTrackUpgradeDescriptions: [
					{
						detailsLinkKey: "gofest2026_details_link";
						eventDurationKey: "event_pass_gofest2026_event_duration";
						eventPassTrackToUpgradeTo: "PREMIUM";
						passTrackUpgradeHeaderDescription: "event_pass_gofest2026_track_upgrade_header_description";
						ranksToHighlightRewards: [80, 90, 100];
						trackUnlockImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe.png";
						trackUnlockPlusPointsImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe_plus.png";
						trackUnlockPlusPointsSkuId: "pgorelease.gofest_deluxe_event_pass_track_unlock_plus_points";
						trackUnlockSkuId: "pgorelease.gofest_deluxe_event_pass_track_unlock";
						upgradeDescriptionKey: "event_pass_gofest2026_upgrade_description";
					},
				];
				headerIconUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2F1ba4259b_PGO_Fest25_Logo_2026_Global.png";
				premiumRewardBannerImageUrl: "https://storage.googleapis.com/prod-public-images/gofest2025/bottlecap_gold.png";
				premiumRewardBannerMiddle: "item_triple_stat_increase_name";
				premiumRewardsDescription: "season_pass_premium_rewards_desc_monthly";
				todayViewSection: 2;
			};
			expirationTime: "2026-07-12T23:59:59";
			gracePeriodEndTime: "2026-07-14T23:59:59";
			maxTierLevel: 500;
			pointsItemId: "ITEM_EVENT_PASS_POINT_GO_FEST_01";
			trackConditions: [
				{
					track: "FREE";
					trackTitleKey: "event_pass_gofest2026_base_track_title";
				},
				{
					badge: "BADGE_GOFEST_2026_EVENT_PASS_DELUXE";
					track: "PREMIUM";
					trackTitleKey: "event_pass_gofest2026_premium_track_title";
				},
			];
		}
	>
>;
export type EventPassSettingsJuly2026Season = S<
	EventPassSettings<
		"EVENT_PASS_JULY2026_SEASON",
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
				eventPassTitleKey: "season_pass_base_track_title_july";
				eventPassTrackUpgradeDescriptions: [
					{
						detailsLinkKey: "season_pass_details_link_july2026";
						eventDurationKey: "season_pass_july2026_event_duration";
						eventPassTrackToUpgradeTo: "PREMIUM";
						passTrackUpgradeHeaderDescription: "season_pass_july2026_track_upgrade_header_description";
						ranksToHighlightRewards: [94, 99, 100];
						trackUnlockImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe.png";
						trackUnlockPlusPointsImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe_plus.png";
						trackUnlockPlusPointsSkuId: "pgorelease.month2_deluxe_event_pass_track_unlock_plus_points";
						trackUnlockSkuId: "pgorelease.month2_deluxe_event_pass_track_unlock";
						upgradeDescriptionKey: "season_pass_july2026_upgrade_description";
					},
				];
				headerIconUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fd99f7e15_Logo_256x256.png";
				premiumRewardBannerImageUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2F0_poke%CC%81coin.png";
				premiumRewardBannerMiddle: "today_view_pokecoins_section_title";
				premiumRewardsDescription: "season_pass_premium_rewards_desc_monthly_no_disclaimer";
				sectionDisplayPriority: 13;
				todayViewSection: "SEASONAL_EVENT_PASS_SECTION";
			};
			expirationTime: "2026-08-04T10:00:00";
			gracePeriodEndTime: "2026-08-06T10:00:00";
			maxTierLevel: 200;
			pointsItemId: "ITEM_EVENT_PASS_POINT_MONTHLY_02";
			trackConditions: [
				{
					track: "FREE";
					trackTitleKey: "season_pass_base_track_title_july";
				},
				{
					badge: "BADGE_EVENT_0191";
					track: "PREMIUM";
					trackTitleKey: "season_pass_premium_track_title_july";
				},
			];
		}
	>
>;

export type EventPassSettingsMasterfileEntry = EventPassSettingsGofest2026Global | EventPassSettingsJuly2026Season;

export type EventPassSettingsTemplateID = EventPassSettingsMasterfileEntry["templateId"];
