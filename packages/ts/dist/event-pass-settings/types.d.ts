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
		eventPassTitleKey: "season_pass_base_track_title_mega_squads_2026" | "season_pass_base_track_title_sep";
		eventPassTrackUpgradeDescriptions: [
			{
				detailsLinkKey: "details_link_key_mega_squads" | "season_pass_details_link_sep2026";
				eventDurationKey: "season_pass_mega_squads_2026_event_duration" | "season_pass_sep2026_event_duration";
				eventPassTrackToUpgradeTo: "PREMIUM";
				passTrackUpgradeHeaderDescription: "deluxe_event_pass_track_unlock_description" | "season_pass_sep2026_track_upgrade_header_description";
				ranksToHighlightRewards: [number, number, number];
				trackUnlockImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe.png";
				trackUnlockPlusPointsImageUrl: "https://storage.googleapis.com/prod-public-images/ic_eventpass_deluxe_plus.png";
				trackUnlockPlusPointsSkuId:
					| "pgorelease.month1_deluxe_event_pass_track_unlock_plus_points"
					| "pgorelease.september1_2026_deluxe_event_pass_track_unlock_plus_points";
				trackUnlockSkuId: "pgorelease.month1_deluxe_event_pass_track_unlock" | "pgorelease.september1_2026_deluxe_event_pass_track_unlock";
				upgradeDescriptionKey: "season_pass_mega_squads_2026_upgrade_description" | "season_pass_sep2026_upgrade_description";
			},
		];
		premiumRewardBannerBottom: "event_pass_premium_reward_banner_bottom_text_25" | "event_pass_premium_reward_banner_bottom_text_timed_incubator";
		premiumRewardBannerImageUrl:
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2F7150419b_s24-logo-512x512.png"
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FIncubator_green128x128.png";
		premiumRewardBannerMiddle: "avatar_shirt_maschiff" | "item_incubator_timed_name";
		sectionDisplayPriority: number;
	};
	expirationTime: "2026-09-14T20:00:00" | "2026-10-06T10:00:00";
	gracePeriodEndTime: "2026-09-16T20:00:00" | "2026-10-08T10:00:00";
	maxTierLevel: number;
	pointsItemId: "ITEM_EVENT_PASS_POINT_LIVE_OPS_01" | "ITEM_EVENT_PASS_POINT_MONTHLY_01";
	trackConditions: [
		{
			track: "FREE";
			trackTitleKey: "season_pass_base_track_title_mega_squads_2026" | "season_pass_base_track_title_sep";
		},
		{
			badge: "BADGE_EVENT_0236" | "BADGE_EVENT_0241";
			track: "PREMIUM";
			trackTitleKey: "season_pass_premium_track_title_mega_squads_2026" | "season_pass_premium_track_title_sep";
		},
	];
}
