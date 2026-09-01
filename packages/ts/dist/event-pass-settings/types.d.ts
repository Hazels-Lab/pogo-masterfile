// Generated from Pokémon GO masterfile — group "eventPassSettings", 2 entries (structural types).

import type { W } from "../_utils";

export interface EventPassSettings<TemplateID extends string = string, TData extends EventPassSettingsData = EventPassSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		eventPassSettings: TData & {
			additionalBonusTiersLevel: 101;
			prefix: TemplateID;
		};
	};
}
export type EventPassSettingsType = W<EventPassSettings>;

export interface EventPassSettingsData {
	eventPassDisplaySettings: {
		bonusBoxes: [
			{
				iconType: "SPAWN_UNKNOWN";
				quantity: number;
				text: "quest_catch_pokemon_singular";
			},
			{
				iconType: "EGG" | "RAID";
				quantity: number;
				text: "quest_hatch_egg_singular" | "quest_win_raid_singular";
			},
			{
				iconType: "EGG" | "RAID";
				quantity: number;
				text: "quest_hatch_egg_singular" | "quest_win_raid_singular";
			},
		];
		eventPassTitleKey: "event_pass_gofest2026_finale_base_track_title" | "season_pass_base_track_title_aug";
		eventPassTrackUpgradeDescriptions: [
			{
				detailsLinkKey: "gofest2026_finale_details_link" | "season_pass_details_link_august2026";
				eventDurationKey: "event_pass_gofest2026_finale_event_duration" | "season_pass_august2026_event_duration";
				eventPassTrackToUpgradeTo: "PREMIUM";
				passTrackUpgradeHeaderDescription:
					| "event_pass_gofest2026_finale_track_upgrade_header_description"
					| "season_pass_august2026_track_upgrade_header_description";
				ranksToHighlightRewards: [number, number, number];
				trackUnlockImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe.png";
				trackUnlockPlusPointsImageUrl:
					| "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe_plus_points.png"
					| "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe_plus.png";
				trackUnlockPlusPointsSkuId:
					| "pgorelease.gofest_finale_2025_deluxe_event_pass_track_unlock_plus_points"
					| "pgorelease.month3_deluxe_event_pass_track_unlock_plus_points";
				trackUnlockSkuId: "pgorelease.gofest_finale_2025_deluxe_event_pass_track_unlock" | "pgorelease.month3_deluxe_event_pass_track_unlock";
				upgradeDescriptionKey: "event_pass_gofest2026_finale_upgrade_description" | "season_pass_august2026_upgrade_description";
			},
		];
		headerIconUrl:
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Fe7045957_PGO_Fest_Finale_Logo_512x512.png"
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fd99f7e15_Logo_256x256.png";
		premiumRewardBannerBottom?: "event_pass_premium_reward_banner_bottom_text";
		premiumRewardBannerImageUrl?: "https://storage.googleapis.com/prod-public-images/lucky_trinket_small.png";
		premiumRewardBannerMiddle?: "event_pass_premium_reward_banner_middle_text";
		premiumRewardBannerTop?: "event_pass_premium_reward_banner_top_text";
		premiumRewardsDescription?: "season_pass_premium_rewards_desc_monthly_no_disclaimer";
		sectionDisplayPriority?: number;
		todayViewSection: number | "SEASONAL_EVENT_PASS_SECTION";
	};
	expirationTime: "2026-09-06T23:59:59" | "2026-09-08T10:00:00";
	gracePeriodEndTime: "2026-09-08T23:59:59" | "2026-09-10T10:00:00";
	maxTierLevel: number;
	pointsItemId: "ITEM_EVENT_PASS_POINT_GO_FEST_02" | "ITEM_EVENT_PASS_POINT_MONTHLY_03";
	trackConditions: [
		{
			track: "FREE";
			trackTitleKey: "event_pass_gofest2026_finale_base_track_title" | "season_pass_base_track_title_aug";
		},
		{
			badge: number | "BADGE_EVENT_0192";
			track: "PREMIUM";
			trackTitleKey: "event_pass_gofest2026_finale_premium_track_title" | "season_pass_premium_track_title_aug";
		},
	];
}
