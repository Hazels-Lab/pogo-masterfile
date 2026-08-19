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
				headerIconUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fd99f7e15_Logo_256x256.png";
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
		eventPassTitleKey: "season_pass_base_track_title_aug" | "season_pass_base_track_title_uu_water_festival_2026";
		eventPassTrackUpgradeDescriptions: [
			{
				detailsLinkKey: "season_pass_details_link_august2026" | "season_pass_details_link_uu_water_festival_2026";
				eventDurationKey: "season_pass_august2026_event_duration" | "season_pass_uu_water_festival_2026_event_duration";
				eventPassTrackToUpgradeTo: "PREMIUM";
				passTrackUpgradeHeaderDescription:
					| "season_pass_august2026_track_upgrade_header_description"
					| "season_pass_uu_water_festival_2026_track_upgrade_header_description";
				ranksToHighlightRewards: [number, number, number];
				trackUnlockImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe.png";
				trackUnlockPlusPointsImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe_plus.png";
				trackUnlockPlusPointsSkuId:
					| "pgorelease.august2_deluxe_event_pass_track_unlock_plus_points"
					| "pgorelease.month3_deluxe_event_pass_track_unlock_plus_points";
				trackUnlockSkuId: "pgorelease.august2_deluxe_event_pass_track_unlock" | "pgorelease.month3_deluxe_event_pass_track_unlock";
				upgradeDescriptionKey: "season_pass_august2026_upgrade_description" | "season_pass_uu_water_festival_2026_upgrade_description";
			},
		];
		premiumRewardBannerBottom: "event_pass_premium_reward_banner_bottom_text" | "event_pass_premium_reward_banner_bottom_text_rank_15_reward";
		premiumRewardBannerImageUrl:
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2F1eec675d_n_backpack_starmie_icon_270px.png"
			| "https://storage.googleapis.com/prod-public-images/lucky_trinket_small.png";
		premiumRewardBannerMiddle: "avatar_backpack_starmie" | "event_pass_premium_reward_banner_middle_text";
		sectionDisplayPriority: number;
	};
	expirationTime: "2026-08-24T20:00:00" | "2026-09-08T10:00:00";
	gracePeriodEndTime: "2026-08-26T20:00:00" | "2026-09-10T10:00:00";
	maxTierLevel: number;
	pointsItemId: "ITEM_EVENT_PASS_POINT_LIVE_OPS_10" | "ITEM_EVENT_PASS_POINT_MONTHLY_03";
	trackConditions: [
		{
			track: "FREE";
			trackTitleKey: "season_pass_base_track_title_aug" | "season_pass_base_track_title_uu_water_festival_2026";
		},
		{
			badge: "BADGE_EVENT_0192" | "BADGE_EVENT_0201";
			track: "PREMIUM";
			trackTitleKey: "season_pass_premium_track_title_aug" | "season_pass_premium_track_title_uu_water_festival_2026";
		},
	];
}
