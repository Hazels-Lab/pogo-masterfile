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
		eventPassTitleKey: "season_pass_base_track_title_aug" | "season_pass_base_track_title_WCS_2026";
		eventPassTrackUpgradeDescriptions: [
			{
				detailsLinkKey: "season_pass_details_link_august2026" | "season_pass_details_link_WCS_2026";
				eventDurationKey: "season_pass_august2026_event_duration" | "season_pass_WCS_2026_event_duration";
				eventPassTrackToUpgradeTo: "PREMIUM";
				passTrackUpgradeHeaderDescription:
					| "season_pass_august2026_track_upgrade_header_description"
					| "season_pass_WCS_2026_track_upgrade_header_description_backpack";
				ranksToHighlightRewards: [number, number, number];
				trackUnlockImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe.png";
				trackUnlockPlusPointsImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe_plus.png";
				trackUnlockPlusPointsSkuId:
					| "pgorelease.august3_deluxe_event_pass_track_unlock_plus_points"
					| "pgorelease.month3_deluxe_event_pass_track_unlock_plus_points";
				trackUnlockSkuId: "pgorelease.august3_deluxe_event_pass_track_unlock" | "pgorelease.month3_deluxe_event_pass_track_unlock";
				upgradeDescriptionKey: "season_pass_august2026_upgrade_description" | "season_pass_WCS_2026_upgrade_description";
			},
		];
		headerIconUrl:
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Fdd421c86_2026-worlds-pokemonxp-backpack-270x270.png"
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fd99f7e15_Logo_256x256.png";
		premiumRewardBannerBottom: "event_pass_premium_reward_banner_bottom_text" | "event_pass_premium_reward_banner_bottom_text_bugoutbuddies2026";
		premiumRewardBannerImageUrl:
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Fdd421c86_2026-worlds-pokemonxp-backpack-270x270.png"
			| "https://storage.googleapis.com/prod-public-images/lucky_trinket_small.png";
		premiumRewardBannerMiddle: "avatar_backpack_wcspxp" | "event_pass_premium_reward_banner_middle_text";
		sectionDisplayPriority: number;
	};
	expirationTime: "2026-08-30T20:00:00" | "2026-09-08T10:00:00";
	gracePeriodEndTime: "2026-09-01T20:00:00" | "2026-09-10T10:00:00";
	maxTierLevel: number;
	pointsItemId: "ITEM_EVENT_PASS_POINT_LIVE_OPS_07" | "ITEM_EVENT_PASS_POINT_MONTHLY_03";
	trackConditions: [
		{
			track: "FREE";
			trackTitleKey: "season_pass_base_track_title_aug" | "season_pass_base_track_title_WCS_2026";
		},
		{
			badge: "BADGE_EVENT_0192" | "BADGE_EVENT_0231";
			track: "PREMIUM";
			trackTitleKey: "season_pass_premium_track_title_aug" | "season_pass_premium_track_title_WCS_2026";
		},
	];
}
