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
		eventPassTitleKey: "season_pass_base_track_title_halloween2026" | "season_pass_base_track_title_oct";
		eventPassTrackUpgradeDescriptions: [
			{
				detailsLinkKey: "season_pass_details_link_halloween2026_part1" | "season_pass_details_link_oct2026";
				eventDurationKey: "season_pass_halloween2026_event_duration" | "season_pass_oct2026_event_duration";
				eventPassTrackToUpgradeTo: "PREMIUM";
				passTrackUpgradeHeaderDescription:
					| "season_pass_halloween2026_track_upgrade_header_description"
					| "season_pass_oct2026_track_upgrade_header_description";
				ranksToHighlightRewards: [number, number, number];
				trackUnlockImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe.png";
				trackUnlockPlusPointsImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe_plus.png";
				trackUnlockPlusPointsSkuId:
					| "pgorelease.month2_deluxe_event_pass_track_unlock_plus_points"
					| "pgorelease.october2_2026_deluxe_event_pass_track_unlock_plus_points";
				trackUnlockSkuId: "pgorelease.month2_deluxe_event_pass_track_unlock" | "pgorelease.october2_2026_deluxe_event_pass_track_unlock";
				upgradeDescriptionKey: "season_pass_halloween2026_upgrade_description" | "season_pass_oct2026_upgrade_description";
			},
		];
		premiumRewardBannerBottom: "event_pass_premium_reward_banner_bottom_text" | "event_pass_premium_reward_banner_bottom_text_bugoutbuddies2026";
		premiumRewardBannerImageUrl:
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2F7150419b_s24-logo-512x512.png"
			| "https://storage.googleapis.com/prod-public-images/lucky_trinket_small.png";
		premiumRewardBannerMiddle: "avatar_pants_halloween2026" | "event_pass_premium_reward_banner_middle_text";
		sectionDisplayPriority: number;
	};
	expirationTime: "2026-11-03T10:00:00" | "2026-11-05T20:00:00";
	gracePeriodEndTime: "2026-11-05T10:00:00" | "2026-11-07T20:00:00";
	maxTierLevel: number;
	pointsItemId: "ITEM_EVENT_PASS_POINT_LIVE_OPS_05" | "ITEM_EVENT_PASS_POINT_MONTHLY_02";
	trackConditions: [
		{
			track: "FREE";
			trackTitleKey: "season_pass_base_track_title_halloween2026" | "season_pass_base_track_title_oct";
		},
		{
			badge: "BADGE_EVENT_0237" | "BADGE_EVENT_0245";
			track: "PREMIUM";
			trackTitleKey: "season_pass_premium_track_title_halloween2026" | "season_pass_premium_track_title_oct";
		},
	];
}
