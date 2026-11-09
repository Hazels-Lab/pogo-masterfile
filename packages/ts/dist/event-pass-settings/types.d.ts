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
		bonusBoxes: Array<{
			iconType: "BATTLE" | "EGG" | "RAID" | "SPAWN_UNKNOWN";
			quantity: number;
			text: "quest_catch_pokemon_singular" | "quest_hatch_egg_singular" | "quest_win_raid_singular" | "win_max_battle_singular";
		}>;
		eventPassTitleKey: "event_pass_gowa_2025_title" | "season_pass_base_track_title_nov";
		eventPassTrackUpgradeDescriptions: [
			{
				detailsLinkKey: "event_pass_gowa_2026_link_november2026" | "season_pass_details_link_nov2026";
				eventDurationKey: "event_pass_gowa_2026_event_duration" | "season_pass_nov2026_event_duration";
				eventPassTrackToUpgradeTo: "PREMIUM";
				passTrackUpgradeHeaderDescription: "event_pass_gowa_2025_track_upgrade_header_description" | "season_pass_nov2026_track_upgrade_header_description";
				ranksToHighlightRewards: [number, number, number];
				trackUnlockImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe.png";
				trackUnlockPlusPointsImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe_plus.png";
				trackUnlockPlusPointsSkuId: "pgorelease.gowa2026_event_pass_track_unlock_plus_points" | "pgorelease.month3_deluxe_event_pass_track_unlock_plus_points";
				trackUnlockSkuId: "pgorelease.gowa2026_event_pass_track_unlock" | "pgorelease.month3_deluxe_event_pass_track_unlock";
				upgradeDescriptionKey: "event_pass_gowa_2026_upgrade_description" | "season_pass_nov2026_upgrade_description";
			},
		];
		headerIconUrl:
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2F8614da1a_GOWA_2026.png"
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2F7150419b_s24-logo-512x512.png";
		premiumRewardBannerBottom?: "event_pass_premium_reward_banner_bottom_text";
		premiumRewardBannerImageUrl?: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2F0_poke%CC%81coin.png";
		premiumRewardBannerMiddle?: "today_view_pokecoins_section_title";
		premiumRewardBannerTop?: "event_pass_premium_reward_banner_top_text";
		premiumRewardsDescription?: "season_pass_premium_rewards_desc_monthly_no_disclaimer";
		sectionDisplayPriority?: number;
		todayViewSection: "GLOBAL_EVENT_PASS_SECTION" | "SEASONAL_EVENT_PASS_SECTION";
	};
	expirationTime: "2026-11-15T18:00:00" | "2026-12-01T10:00:00";
	gracePeriodEndTime: "2026-11-17T23:59:59" | "2026-12-03T10:00:00";
	maxTierLevel: number;
	pointsItemId: "ITEM_EVENT_PASS_POINT_GO_WILD_AREA_01" | "ITEM_EVENT_PASS_POINT_MONTHLY_03";
	trackConditions: [
		{
			track: "FREE";
			trackTitleKey: "event_pass_gowa_2025_title" | "season_pass_base_track_title_nov";
		},
		{
			badge: "BADGE_EVENT_0238" | "BADGE_GOWA_2026_EVENT_01";
			track: "PREMIUM";
			trackTitleKey: "event_pass_gowa_2025_premium_title" | "season_pass_premium_track_title_nov";
		},
	];
}
