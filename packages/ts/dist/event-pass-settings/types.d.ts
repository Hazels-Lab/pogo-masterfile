// Generated from Pokémon GO masterfile — group "eventPassSettings", 4 entries (structural types).

import type { W } from "../_utils";

export interface EventPassSettings<TemplateID extends string = string, TData extends EventPassSettingsData = EventPassSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		eventPassSettings: TData & {
			prefix: TemplateID;
		};
	};
}
export type EventPassSettingsType = W<EventPassSettings>;

export interface EventPassSettingsData {
	additionalBonusTiersLevel: number;
	eventPassDisplaySettings: {
		backgroundConfiguration?: "EVENT_PASS_BACKGROUND_GO_FEST_01";
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
		eventPassTitleKey:
			| "event_pass_gofest2026_finale_base_track_title"
			| "season_pass_base_track_title_aug"
			| "season_pass_base_track_title_mega_squads_2026"
			| "season_pass_base_track_title_sep";
		eventPassTrackUpgradeDescriptions: [
			{
				detailsLinkKey:
					| "details_link_key_mega_squads"
					| "gofest2026_finale_details_link"
					| "season_pass_details_link_august2026"
					| "season_pass_details_link_sep2026";
				eventDurationKey:
					| "event_pass_gofest2026_finale_event_duration"
					| "season_pass_august2026_event_duration"
					| "season_pass_mega_squads_2026_event_duration"
					| "season_pass_sep2026_event_duration";
				eventPassTrackToUpgradeTo: "PREMIUM";
				passTrackUpgradeHeaderDescription:
					| "deluxe_event_pass_track_unlock_description"
					| "event_pass_gofest2026_finale_track_upgrade_header_description"
					| "season_pass_august2026_track_upgrade_header_description"
					| "season_pass_sep2026_track_upgrade_header_description";
				ranksToHighlightRewards: [number, number, number];
				trackUnlockImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe.png";
				trackUnlockPlusPointsImageUrl:
					| "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe_plus_points.png"
					| "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe_plus.png";
				trackUnlockPlusPointsSkuId:
					| "pgorelease.gofest_finale_2025_deluxe_event_pass_track_unlock_plus_points"
					| "pgorelease.month1_deluxe_event_pass_track_unlock_plus_points"
					| "pgorelease.month3_deluxe_event_pass_track_unlock_plus_points"
					| "pgorelease.september1_2026_deluxe_event_pass_track_unlock_plus_points";
				trackUnlockSkuId:
					| "pgorelease.gofest_finale_2025_deluxe_event_pass_track_unlock"
					| "pgorelease.month1_deluxe_event_pass_track_unlock"
					| "pgorelease.month3_deluxe_event_pass_track_unlock"
					| "pgorelease.september1_2026_deluxe_event_pass_track_unlock";
				upgradeDescriptionKey:
					| "event_pass_gofest2026_finale_upgrade_description"
					| "season_pass_august2026_upgrade_description"
					| "season_pass_mega_squads_2026_upgrade_description"
					| "season_pass_sep2026_upgrade_description";
			},
		];
		headerIconUrl:
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2F7150419b_s24-logo-512x512.png"
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Fe7045957_PGO_Fest_Finale_Logo_512x512.png"
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fd99f7e15_Logo_256x256.png";
		premiumRewardBannerBottom?:
			| "event_pass_premium_reward_banner_bottom_text"
			| "event_pass_premium_reward_banner_bottom_text_25"
			| "event_pass_premium_reward_banner_bottom_text_timed_incubator";
		premiumRewardBannerImageUrl?:
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2F7150419b_s24-logo-512x512.png"
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FIncubator_green128x128.png"
			| "https://storage.googleapis.com/prod-public-images/lucky_trinket_small.png";
		premiumRewardBannerMiddle?: "avatar_shirt_maschiff" | "event_pass_premium_reward_banner_middle_text" | "item_incubator_timed_name";
		premiumRewardBannerTop?: "event_pass_premium_reward_banner_top_text";
		premiumRewardsDescription?: "season_pass_premium_rewards_desc_monthly_no_disclaimer";
		sectionDisplayPriority?: number;
		todayViewSection: "GLOBAL_EVENT_PASS_SECTION" | "SEASONAL_EVENT_PASS_SECTION";
	};
	expirationTime: "2026-09-06T23:59:59" | "2026-09-08T10:00:00" | "2026-09-14T20:00:00" | "2026-10-06T10:00:00";
	gracePeriodEndTime: "2026-09-08T23:59:59" | "2026-09-10T10:00:00" | "2026-09-16T20:00:00" | "2026-10-08T10:00:00";
	maxTierLevel: number;
	pointsItemId:
		| "ITEM_EVENT_PASS_POINT_GO_FEST_02"
		| "ITEM_EVENT_PASS_POINT_LIVE_OPS_01"
		| "ITEM_EVENT_PASS_POINT_MONTHLY_01"
		| "ITEM_EVENT_PASS_POINT_MONTHLY_03";
	trackConditions: [
		{
			track: "FREE";
			trackTitleKey:
				| "event_pass_gofest2026_finale_base_track_title"
				| "season_pass_base_track_title_aug"
				| "season_pass_base_track_title_mega_squads_2026"
				| "season_pass_base_track_title_sep";
		},
		{
			badge: "BADGE_EVENT_0192" | "BADGE_EVENT_0236" | "BADGE_EVENT_0241" | "BADGE_GOFEST_FINALE_2026_EVENT_PASS_DELUXE";
			track: "PREMIUM";
			trackTitleKey:
				| "event_pass_gofest2026_finale_premium_track_title"
				| "season_pass_premium_track_title_aug"
				| "season_pass_premium_track_title_mega_squads_2026"
				| "season_pass_premium_track_title_sep";
		},
	];
}
