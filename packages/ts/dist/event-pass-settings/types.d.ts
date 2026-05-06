// Generated from Pokémon GO masterfile — group "eventPassSettings", 2 entries (structural types).

import type { W } from "../_utils";

export interface EventPassSettings<TemplateID extends string = string, TData extends EventPassSettingsData = EventPassSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		eventPassSettings: TData & {
			additionalBonusTiersLevel: 101;
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
				headerIconUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FS22_MemoriesInMotion_Logo.png";
				premiumRewardsDescription: "season_pass_premium_rewards_desc_monthly_no_disclaimer";
				todayViewSection: "SEASONAL_EVENT_PASS_SECTION";
			};
			maxTierLevel: 200;
			prefix: TemplateID;
		};
	};
}
export type EventPassSettingsType = W<EventPassSettings>;

export interface EventPassSettingsData {
	eventPassDisplaySettings: {
		eventPassTitleKey: "season_pass_base_track_title_april" | "season_pass_base_track_title_may";
		eventPassTrackUpgradeDescriptions: [
			{
				detailsLinkKey: "season_pass_details_link_april2026" | "season_pass_details_link_may2026";
				eventDurationKey: "season_pass_april2026_event_duration" | "season_pass_may2026_event_duration";
				eventPassTrackToUpgradeTo: "PREMIUM";
				passTrackUpgradeHeaderDescription: "season_pass_april2026_track_upgrade_header_description" | "season_pass_may2026_track_upgrade_header_description";
				ranksToHighlightRewards: [number, number, number];
				trackUnlockImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe.png";
				trackUnlockPlusPointsImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe_plus.png";
				trackUnlockPlusPointsSkuId:
					| "pgorelease.month2_deluxe_event_pass_track_unlock_plus_points"
					| "pgorelease.month3_deluxe_event_pass_track_unlock_plus_points";
				trackUnlockSkuId: "pgorelease.month2_deluxe_event_pass_track_unlock" | "pgorelease.month3_deluxe_event_pass_track_unlock";
				upgradeDescriptionKey: "season_pass_april2026_upgrade_description" | "season_pass_may2026_upgrade_description";
			},
		];
		premiumRewardBannerBottom?: "event_pass_premium_reward_banner_bottom_text";
		premiumRewardBannerImageUrl?: "https://storage.googleapis.com/prod-public-images/lucky_trinket_small.png";
		premiumRewardBannerMiddle?: "event_pass_premium_reward_banner_middle_text";
		premiumRewardBannerTop?: "event_pass_premium_reward_banner_top_text";
		sectionDisplayPriority: number;
	};
	expirationTime: "2026-05-05T10:00:00" | "2026-06-02T10:00:00";
	gracePeriodEndTime: "2026-05-07T10:00:00" | "2026-06-04T10:00:00";
	pointsItemId: "ITEM_EVENT_PASS_POINT_MONTHLY_02" | "ITEM_EVENT_PASS_POINT_MONTHLY_03";
	trackConditions: [
		{
			track: "FREE";
			trackTitleKey: "season_pass_base_track_title_april" | "season_pass_base_track_title_may";
		},
		{
			badge: "BADGE_EVENT_0175" | "BADGE_EVENT_0176";
			track: "PREMIUM";
			trackTitleKey: "season_pass_premium_track_title_april" | "season_pass_premium_track_title_may";
		},
	];
}
