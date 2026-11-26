// Generated from Pokémon GO masterfile — group "eventPassSettings", 2 entries (structural types).

import type { W } from "../_utils";

export interface EventPassSettings<TemplateID extends string = string, TData extends EventPassSettingsData = EventPassSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		eventPassSettings: TData & {
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
				headerIconUrl: "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2F7150419b_s24-logo-512x512.png";
				premiumRewardBannerTop: "event_pass_premium_reward_banner_top_text";
				premiumRewardsDescription: "season_pass_premium_rewards_desc_monthly_no_disclaimer";
				todayViewSection: "SEASONAL_EVENT_PASS_SECTION";
			};
			prefix: TemplateID;
		};
	};
}
export type EventPassSettingsType = W<EventPassSettings>;

export interface EventPassSettingsData {
	additionalBonusTiersLevel: number;
	eventPassDisplaySettings: {
		eventPassTitleKey: "season_pass_base_track_title_nov" | "twilight_trails_finale_event_pass_title";
		eventPassTrackUpgradeDescriptions: [
			{
				detailsLinkKey: "details_link_key" | "season_pass_details_link_nov2026";
				eventDurationKey: "season_pass_nov2026_event_duration" | "twilight_trails_finale_event_pass_duration";
				eventPassTrackToUpgradeTo: "PREMIUM";
				passTrackUpgradeHeaderDescription:
					| "season_pass_nov2026_track_upgrade_header_description"
					| "twilight_trails_finale_event_pass_upgrade_header_description";
				ranksToHighlightRewards: [number, number, number];
				trackUnlockImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe.png";
				trackUnlockPlusPointsImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe_plus.png";
				trackUnlockPlusPointsSkuId:
					| "pgorelease.month3_deluxe_event_pass_track_unlock_plus_points"
					| "pgorelease.november1_2026_deluxe_event_pass_track_unlock_plus_points";
				trackUnlockSkuId: "pgorelease.month3_deluxe_event_pass_track_unlock" | "pgorelease.november1_2026_deluxe_event_pass_track_unlock";
				upgradeDescriptionKey: "season_pass_nov2026_upgrade_description" | "twilight_trails_finale_event_pass_upgrade_description";
			},
		];
		premiumRewardBannerBottom: "event_pass_premium_reward_banner_bottom_text" | "rank_16_event_pass_banner_bottom";
		premiumRewardBannerImageUrl:
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2F7150419b_s24-logo-512x512.png"
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2F0_poke%CC%81coin.png";
		premiumRewardBannerMiddle: "avatar_pose_starballoon" | "today_view_pokecoins_section_title";
		sectionDisplayPriority: number;
	};
	expirationTime: "2026-11-30T20:00:00" | "2026-12-01T10:00:00";
	gracePeriodEndTime: "2026-12-02T20:00:00" | "2026-12-03T10:00:00";
	maxTierLevel: number;
	pointsItemId: "ITEM_EVENT_PASS_POINT_LIVE_OPS_06" | "ITEM_EVENT_PASS_POINT_MONTHLY_03";
	trackConditions: [
		{
			track: "FREE";
			trackTitleKey: "season_pass_base_track_title_nov" | "twilight_trails_finale_event_pass_title";
		},
		{
			badge: "BADGE_EVENT_0238" | "BADGE_EVENT_0246";
			track: "PREMIUM";
			trackTitleKey: "season_pass_premium_track_title_nov" | "twilight_trails_finale_event_pass_deluxe_title";
		},
	];
}
