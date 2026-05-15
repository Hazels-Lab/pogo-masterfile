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
				headerIconUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FS22_MemoriesInMotion_Logo.png";
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
		eventPassTitleKey: "season_pass_base_track_title_may" | "season_pass_base_track_title_spring_marathon_2026";
		eventPassTrackUpgradeDescriptions: [
			{
				detailsLinkKey: "season_pass_details_link_may2026" | "season_pass_details_link_spring_marathon_2026";
				eventDurationKey: "season_pass_may2026_event_duration" | "season_pass_spring_marathon_2026_event_duration";
				eventPassTrackToUpgradeTo: "PREMIUM";
				passTrackUpgradeHeaderDescription:
					| "season_pass_may2026_track_upgrade_header_description"
					| "season_pass_spring_marathon_2026_track_upgrade_header_description";
				ranksToHighlightRewards: [number, number, number];
				trackUnlockImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe.png";
				trackUnlockPlusPointsImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe_plus.png";
				trackUnlockPlusPointsSkuId:
					| "pgorelease.may1_2026_deluxe_event_pass_track_unlock_plus_points"
					| "pgorelease.month3_deluxe_event_pass_track_unlock_plus_points";
				trackUnlockSkuId: "pgorelease.may1_2026_deluxe_event_pass_track_unlock" | "pgorelease.month3_deluxe_event_pass_track_unlock";
				upgradeDescriptionKey: "season_pass_may2026_upgrade_description" | "season_pass_spring_marathon_2026_upgrade_description";
			},
		];
		premiumRewardBannerBottom?: "event_pass_premium_reward_banner_bottom_text_spring_marathon_2026";
		premiumRewardBannerImageUrl?: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FS22_MemoriesInMotion_Logo.png";
		premiumRewardBannerMiddle?: "item_spring_marathon_2026_milestone_name";
		premiumRewardBannerTop?: "event_pass_premium_reward_banner_top_text";
		sectionDisplayPriority: number;
	};
	expirationTime: "2026-05-18T20:00:00" | "2026-06-02T10:00:00";
	gracePeriodEndTime: "2026-05-20T20:00:00" | "2026-06-04T10:00:00";
	maxTierLevel: number;
	pointsItemId: "ITEM_EVENT_PASS_POINT_LIVE_OPS_01" | "ITEM_EVENT_PASS_POINT_MONTHLY_03";
	trackConditions: [
		{
			track: "FREE";
			trackTitleKey: "season_pass_base_track_title_may" | "season_pass_base_track_title_spring_marathon_2026";
		},
		{
			badge: "BADGE_EVENT_0176" | "BADGE_EVENT_0193";
			track: "PREMIUM";
			trackTitleKey: "season_pass_premium_track_title_may" | "season_pass_premium_track_title_spring_marathon_2026";
		},
	];
}
