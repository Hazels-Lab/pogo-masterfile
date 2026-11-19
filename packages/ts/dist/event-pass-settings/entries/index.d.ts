// Generated from Pokémon GO masterfile — group "eventPassSettings", 2 entries (variant aliases).

import type { S } from "../../_utils";
import type { EventPassSettings } from "../types";

export type EventPassSettingsGowa2026Leadout = S<
	EventPassSettings<
		"EVENT_PASS_GOWA2026_LEADOUT",
		{
			eventPassDisplaySettings: {
				backgroundConfiguration: "EVENT_PASS_BACKGROUND_GO_WILD_AREA_02";
				bonusBoxes: [
					{
						iconType: "SPAWN_UNKNOWN";
						quantity: 10;
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
					{
						iconType: "BREAD";
						quantity: 200;
						text: "win_max_battle_singular";
					},
				];
				eventPassTitleKey: "event_pass_base_track_title_gowa_leadout_2026";
				eventPassTrackUpgradeDescriptions: [
					{
						detailsLinkKey: "event_pass_details_link_gowa_leadout_2026";
						eventDurationKey: "event_pass_gowa_leadout_2026_event_duration";
						eventPassTrackToUpgradeTo: "PREMIUM";
						passTrackUpgradeHeaderDescription: "gowa_2026_leadout_upgrade_header";
						ranksToHighlightRewards: [10, 30, 100];
						trackUnlockImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe.png";
						trackUnlockSkuId: "pgorelease.gowa2026_leadout_event_pass_track_unlock";
						upgradeDescriptionKey: "event_pass_gowa_leadout_2026_upgrade_description";
					},
				];
				premiumRewardBannerBottom: "gowa_2026_leadout_premium_banner_bottom";
				premiumRewardBannerImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe.png";
				premiumRewardBannerMiddle: "event_pass_premium_track_title_gowa_leadout_2026";
				sectionDisplayPriority: 11;
				todayViewSection: "GLOBAL_EVENT_PASS_SECTION";
			};
			expirationTime: "2026-11-23T20:00:00";
			gracePeriodEndTime: "2026-11-25T20:00:00";
			maxTierLevel: 300;
			pointsItemId: "ITEM_EVENT_PASS_POINT_GO_WILD_AREA_02";
			trackConditions: [
				{
					track: "FREE";
					trackTitleKey: "event_pass_base_track_title_gowa_leadout_2026";
				},
				{
					badge: "BADGE_GOWA_2026_EVENT_02";
					track: "PREMIUM";
					trackTitleKey: "event_pass_premium_track_title_gowa_leadout_2026";
				},
			];
		}
	>
>;
export type EventPassSettingsNovember2026Season = S<
	EventPassSettings<
		"EVENT_PASS_NOVEMBER2026_SEASON",
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
				todayViewSection: "SEASONAL_EVENT_PASS_SECTION";
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

export type EventPassSettingsMasterfileEntry = EventPassSettingsGowa2026Leadout | EventPassSettingsNovember2026Season;

export type EventPassSettingsTemplateID = EventPassSettingsMasterfileEntry["templateId"];
