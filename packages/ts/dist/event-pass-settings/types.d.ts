// Generated from Pokémon GO masterfile — group "eventPassSettings", 2 entries (structural types).

import type { W } from "../_utils";

export interface EventPassSettings<TemplateID extends string = string, TData extends EventPassSettingsData = EventPassSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		eventPassSettings: TData & {
			additionalBonusTiersLevel: 101;
			eventPassDisplaySettings: {
				premiumRewardBannerBottom: "event_pass_premium_reward_banner_bottom_text";
				premiumRewardBannerTop: "event_pass_premium_reward_banner_top_text";
			};
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
		eventPassTitleKey: "event_pass_gofest2026_base_track_title" | "season_pass_base_track_title_july";
		eventPassTrackUpgradeDescriptions: [
			{
				detailsLinkKey: "gofest2026_details_link" | "season_pass_details_link_july2026";
				eventDurationKey: "event_pass_gofest2026_event_duration" | "season_pass_july2026_event_duration";
				eventPassTrackToUpgradeTo: "PREMIUM";
				passTrackUpgradeHeaderDescription: "event_pass_gofest2026_track_upgrade_header_description" | "season_pass_july2026_track_upgrade_header_description";
				ranksToHighlightRewards: [number, number, number];
				trackUnlockImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe.png";
				trackUnlockPlusPointsImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe_plus.png";
				trackUnlockPlusPointsSkuId:
					| "pgorelease.gofest_deluxe_event_pass_track_unlock_plus_points"
					| "pgorelease.month2_deluxe_event_pass_track_unlock_plus_points";
				trackUnlockSkuId: "pgorelease.gofest_deluxe_event_pass_track_unlock" | "pgorelease.month2_deluxe_event_pass_track_unlock";
				upgradeDescriptionKey: "event_pass_gofest2026_upgrade_description" | "season_pass_july2026_upgrade_description";
			},
		];
		headerIconUrl:
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2F1ba4259b_PGO_Fest25_Logo_2026_Global.png"
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fd99f7e15_Logo_256x256.png";
		premiumRewardBannerImageUrl:
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2F0_poke%CC%81coin.png"
			| "https://storage.googleapis.com/prod-public-images/gofest2025/bottlecap_gold.png";
		premiumRewardBannerMiddle: "item_triple_stat_increase_name" | "today_view_pokecoins_section_title";
		premiumRewardsDescription: "season_pass_premium_rewards_desc_monthly" | "season_pass_premium_rewards_desc_monthly_no_disclaimer";
		sectionDisplayPriority?: number;
		todayViewSection: number | "SEASONAL_EVENT_PASS_SECTION";
	};
	expirationTime: "2026-07-12T23:59:59" | "2026-08-04T10:00:00";
	gracePeriodEndTime: "2026-07-14T23:59:59" | "2026-08-06T10:00:00";
	maxTierLevel: number;
	pointsItemId: "ITEM_EVENT_PASS_POINT_GO_FEST_01" | "ITEM_EVENT_PASS_POINT_MONTHLY_02";
	trackConditions: [
		{
			track: "FREE";
			trackTitleKey: "event_pass_gofest2026_base_track_title" | "season_pass_base_track_title_july";
		},
		{
			badge: "BADGE_EVENT_0191" | "BADGE_GOFEST_2026_EVENT_PASS_DELUXE";
			track: "PREMIUM";
			trackTitleKey: "event_pass_gofest2026_premium_track_title" | "season_pass_premium_track_title_july";
		},
	];
}
