// Generated from Pokémon GO masterfile — group "itemSettings", 142 entries.

import type { S } from "./_utils";
export interface ItemSettings<TemplateID extends string = string, TData extends ItemSettingsData = ItemSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		itemSettings: TData & {
			itemId: TemplateID;
		};
	};
}

export interface ItemSettingsData {
	category:
		| "ITEM_CATEGORY_BOOST"
		| "ITEM_CATEGORY_BREAD"
		| "ITEM_CATEGORY_BUDDY_EXCLUSIVE_FOOD"
		| "ITEM_CATEGORY_CAMERA"
		| "ITEM_CATEGORY_CANDY"
		| "ITEM_CATEGORY_DISK"
		| "ITEM_CATEGORY_ENHANCED_CURRENCY"
		| "ITEM_CATEGORY_ENHANCED_CURRENCY_HOLDER"
		| "ITEM_CATEGORY_EVENT_PASS_POINT"
		| "ITEM_CATEGORY_EVOLUTION_REQUIREMENT"
		| "ITEM_CATEGORY_FOOD"
		| "ITEM_CATEGORY_FRIEND_GIFT_BOX"
		| "ITEM_CATEGORY_GLOBAL_EVENT_TICKET"
		| "ITEM_CATEGORY_INCENSE"
		| "ITEM_CATEGORY_INCIDENT_TICKET"
		| "ITEM_CATEGORY_INCUBATOR"
		| "ITEM_CATEGORY_INVENTORY_UPGRADE"
		| "ITEM_CATEGORY_MEDICINE"
		| "ITEM_CATEGORY_MOVE_REROLL"
		| "ITEM_CATEGORY_MP"
		| "ITEM_CATEGORY_POKEBALL"
		| "ITEM_CATEGORY_POSTCARD_INVENTORY"
		| "ITEM_CATEGORY_RAID_TICKET"
		| "ITEM_CATEGORY_ROUTE_MAKER"
		| "ITEM_CATEGORY_STARDUST_BOOST"
		| "ITEM_CATEGORY_STAT_INCREASE"
		| "ITEM_CATEGORY_STICKER"
		| "ITEM_CATEGORY_TEAM_CHANGE"
		| "ITEM_CATEGORY_UTILITES"
		| "ITEM_CATEGORY_XP_BOOST";
	descriptionOverride?:
		| "item_event_ticket_02_details_CATCH_MASTERY_ORICORIO"
		| "item_event_ticket_05_desc_GMAX_PIKACHU_MAX_BATTLE"
		| "item_event_ticket_06_desc_ENTEI_SHADOW_RAID_DAY"
		| "item_event_ticket_06_desc_REPLAY_GO_BIGGER"
		| "item_event_ticket_07_desc_masterball25"
		| "item_event_ticket_07_details_masterball25"
		| "ITEM_EVENT_TICKET_09_desc_fashionRaidDay26"
		| "ITEM_EVENT_TICKET_09_details_fashionRaidDay26"
		| "item_event_ticket_evergreen_desc_IntoTDepths26"
		| "item_event_ticket_evergreen_desc_PawPrint_20250620"
		| "item_event_ticket_evergreen_desc_Riolu0426"
		| "item_event_ticket_evergreen_details_GOWA2024GSBEA"
		| "item_event_ticket_evergreen_details_IntoTDepths26"
		| "item_event_ticket_evergreen_details_Riolu0426"
		| "item_event_ticket_gray_desc_FinalJustice2025"
		| "item_event_ticket_pink_details_CD_Tinkatink26"
		| "item_event_ticket_pink_details_WaterRRD26"
		| "item_global_event_ticket_details_GOTour2026"
		| "item_postcard_inventory_desc_stamp";
	dropTrainerLevel?: number;
	eggIncubator?: {
		distanceMultiplier: number;
		expiredIncubatorReplacement?: {
			incubatorReplacement: "ITEM_INCUBATOR_BASIC";
			usesCountOverride: number;
		};
		incubatorType: "INCUBATOR_DISTANCE";
		maxHatchSummaryEntries?: number;
		useBonusIncubatorAttributes?: boolean;
		uses?: number;
	};
	eventPassPoint?: {
		eventPassId:
			| "EVENT_PASS_APRIL2026_SEASON"
			| "EVENT_PASS_BUGOUTBUDDIES2026_EVENT"
			| "EVENT_PASS_DECEMBER2025_SEASON"
			| "EVENT_PASS_FEBRUARY2026_SEASON"
			| "EVENT_PASS_GOFEST2025_GLOBAL"
			| "EVENT_PASS_GOFEST2025_MAXFINALE"
			| "EVENT_PASS_GOTOUR2026_GLOBAL"
			| "EVENT_PASS_GOTOUR2026_IRL"
			| "EVENT_PASS_GOWA_2025"
			| "EVENT_PASS_JANUARY2026_SEASON"
			| "EVENT_PASS_MARCH2026_SEASON"
			| "EVENT_PASS_MAY2026_SEASON"
			| "EVENT_PASS_SHOCKINGLYGOOD2026_EVENT"
			| "EVENT_PASS_STEELEDRESOLVE2026_EVENT"
			| "EVENT_PASS_SUSTAINABILITY2026_EVENT";
	};
	food?: {
		berryMultiplier?: number;
		growthPercent?: number;
		itemEffect?: Array<
			| "ITEM_EFFECT_CANDY_AWARD"
			| "ITEM_EFFECT_CAP_CHANCE_SINGLE_THROW"
			| "ITEM_EFFECT_CAP_NO_MOVEMENT"
			| "ITEM_EFFECT_CAP_TARGET_MAX"
			| "ITEM_EFFECT_CAP_TARGET_SLOW"
			| "ITEM_EFFECT_FULL_MOTIVATION"
		>;
		itemEffectPercent?: Array<number>;
		mapDurationMs?: "10800000" | "21600000" | "3600000";
		numBuddyAffectionPoints?: number;
		numBuddyHungerPoints?: number;
		remoteBerryMultiplier?: number;
		timeFullDurationMs?: "10800000" | "21600000" | "3600000";
	};
	globalEventTicket?: {
		backgroundImageUrl?:
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2F20260113_pgo_s22_oricorio_1024x576_nologo.jpg"
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fgo_tour_kalos_1024x512_logoless.jpg"
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-fashion-raid-day-2026-nologo.jpg"
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-gmax-kanto-max-battle-day-2026-nologo.jpg"
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-gmax-pikachu-2026-nologo.jpg"
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FPGO-MCS_Into_The_Depths_LiveOp_2026_v3-1024x576-nologo.jpg"
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FPGO-MCS_Shiny_Keldeo_KeyArt_v1-1024x576-nologo.jpg"
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-replay-water-research-day-2026-nologo.jpg"
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-riolu-hatch-day-2026-nologo.jpg"
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-tinkatink-community-day-2026-nologo.jpg"
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-yampers-paw-prints-ticket-nologo-2025.jpg"
			| "https://storage.googleapis.com/prod-public-images/1054x512.jpg"
			| "https://storage.googleapis.com/prod-public-images/masterball-keyart.png";
		clientEventEndTimeUtcMs:
			| "1728424800000"
			| "1728943200000"
			| "1730844000000"
			| "1732472100000"
			| "1750636799000"
			| "1764532800000"
			| "1769976000000"
			| "1770494400000"
			| "1771790400000"
			| "1772409599000"
			| "1774112400000"
			| "1774717200000"
			| "1775210400000"
			| "1775322000000"
			| "1775926800000"
			| "1776531600000"
			| "1777136400000"
			| "1777741200000";
		clientEventStartTimeUtcMs:
			| "1696845600000"
			| "1697364000000"
			| "1699264800000"
			| "1732356000000"
			| "1750377600000"
			| "1764064800000"
			| "1764669600000"
			| "1769508000000"
			| "1770458400000"
			| "1772236800000"
			| "1772542800000"
			| "1774101600000"
			| "1774706400000"
			| "1775311200000"
			| "1775916000000"
			| "1776510000000"
			| "1777125600000"
			| "1777730400000";
		detailsLinkKey?:
			| "details_link_key"
			| "details_link_key_ENTEI_SHADOW_RAID_DAY"
			| "details_link_key_fashion_raid_day"
			| "details_link_key_GMAX_PIKACHU_MAX_BATTLE"
			| "details_link_key_ORICORIO_MASTERY_FEB2026"
			| "details_link_key_REPLAY_GO_BIGGER_MAX_BATTLE"
			| "details_link_key_Riolu_Hatch0426"
			| "item_event_ticket_evergreen_details_PawPrint_20250620"
			| "item_global_event_ticket_details_GOTour2026";
		displayV2Enabled?: boolean;
		eventBadge?: "BADGE_GO_TOUR_2026_GLOBAL";
		eventBannerUrl?:
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2F20260113_pgo_s22_oricorio_1024x576_nologo.jpg"
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fgo_tour_kalos_1024x512.jpg"
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FPGO_MCS_MasterBall_KeyArt_TK_GP_V2_S14_1024x512_nologo.jpg"
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-entei-shadow-raid-day-2026-nologo.jpg"
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-fashion-raid-day-2026-nologo.jpg"
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-gmax-kanto-max-battle-day-2026-nologo.jpg"
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-gmax-pikachu-2026-nologo.jpg"
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FPGO-MCS_Into_The_Depths_LiveOp_2026_v3-1024x576-nologo.jpg"
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FPGO-MCS_Shiny_Keldeo_KeyArt_v1-1024x576-nologo.jpg"
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-replay-water-research-day-2026-nologo.jpg"
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-riolu-hatch-day-2026-nologo.jpg"
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-s22-gbl-nologo-2026.jpg"
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-tinkatink-community-day-2026-nologo.jpg"
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-yampers-paw-prints-ticket-nologo-2025.jpg";
		eventDatetimeRangeKey?:
			| "event_datetime_range_key_CATCH_MASTERY_ORICORIO"
			| "event_datetime_range_key_CD_Tinkatink26"
			| "event_datetime_range_key_ENTEI_SHADOW_RAID_DAY"
			| "event_datetime_range_key_fashionRaidDay_s22"
			| "event_datetime_range_key_FinalJustice2025"
			| "event_datetime_range_key_GMAX_PIKACHU_MAX_BATTLE"
			| "event_datetime_range_key_GOTour2026"
			| "event_datetime_range_key_IntoTDepths26"
			| "event_datetime_range_key_PawPrint_20250620"
			| "event_datetime_range_key_REPLAY_GO_BIGGER"
			| "event_datetime_range_key_Riolu0426"
			| "event_datetime_range_key_WaterRRD26";
		eventEndTime:
			| "2024-10-08T22:00:00"
			| "2024-10-14T22:00:00"
			| "2024-11-05T22:00:00"
			| "2024-11-24T18:15:00"
			| "2025-06-22T23:59:59"
			| "2025-11-30T20:00:00"
			| "2026-02-01T20:00:00"
			| "2026-02-07T20:00:00"
			| "2026-02-22T20:00:00"
			| "2026-03-01T23:59:59"
			| "2026-03-21T17:00:00"
			| "2026-03-28T17:00:00"
			| "2026-04-03T10:00:00"
			| "2026-04-04T17:00:00"
			| "2026-04-11T17:00:00"
			| "2026-04-18T17:00:00"
			| "2026-04-25T17:00:00"
			| "2026-05-02T17:00:00";
		eventStartTime:
			| "2023-10-09T10:00:00"
			| "2023-10-15T10:00:00"
			| "2023-11-06T10:00:00"
			| "2024-11-23T10:00:00"
			| "2025-06-20T00:00:00"
			| "2025-11-25T10:00:00"
			| "2025-12-02T10:00:00"
			| "2026-01-27T10:00:00"
			| "2026-02-07T10:00:00"
			| "2026-02-28T00:00:00"
			| "2026-03-03T13:00:00"
			| "2026-03-21T14:00:00"
			| "2026-03-28T14:00:00"
			| "2026-04-04T14:00:00"
			| "2026-04-11T14:00:00"
			| "2026-04-18T11:00:00"
			| "2026-04-25T14:00:00"
			| "2026-05-02T14:00:00";
		giftable?: boolean;
		giftItem?:
			| "ITEM_EVENT_TICKET_02_TO_GIFT"
			| "ITEM_EVENT_TICKET_03_TO_GIFT"
			| "ITEM_EVENT_TICKET_04_TO_GIFT"
			| "ITEM_EVENT_TICKET_05_TO_GIFT"
			| "ITEM_EVENT_TICKET_06_TO_GIFT"
			| "ITEM_EVENT_TICKET_07_TO_GIFT"
			| "ITEM_EVENT_TICKET_08_TO_GIFT"
			| "ITEM_EVENT_TICKET_09_TO_GIFT"
			| "ITEM_EVENT_TICKET_10_TO_GIFT"
			| "ITEM_EVENT_TICKET_GRAY_TO_GIFT"
			| "ITEM_EVENT_TICKET_PINK_TO_GIFT"
			| "ITEM_EVERGREEN_TICKET_TO_GIFT"
			| "ITEM_GLOBAL_EVENT_TICKET_TO_GIFT";
		grantBadgeBeforeEventStartMs?: "1769904000000";
		iconRewards?: Array<{
			candy?: {
				amount: number;
				pokemonId: "KELDEO";
			};
			exp?: number;
			item?: {
				amount?: number;
				item:
					| "ITEM_FREE_RAID_TICKET"
					| "ITEM_INCENSE_ORDINARY"
					| "ITEM_INCUBATOR_SUPER"
					| "ITEM_MASTER_BALL"
					| "ITEM_MAX_BOOST"
					| "ITEM_STAR_PIECE"
					| "ITEM_XL_RARE_CANDY";
			};
			neutralAvatarItemTemplate?: {
				displayTemplateId: "N_DISPLAY_n_shirt_shinykeldeoshirt_0";
			};
			pokemonEncounter?: {
				pokemonDisplay?: {
					form:
						| "CLAMPERL_NORMAL"
						| "DIANCIE_NORMAL"
						| "DIGLETT_NORMAL"
						| "FEEBAS_NORMAL"
						| "GLIMMET_NORMAL"
						| "KELDEO_ORDINARY"
						| "LATIAS_NORMAL"
						| "LATIOS_NORMAL"
						| "LOTAD_NORMAL"
						| "ROCKRUFF_NORMAL"
						| "TINKATON_NORMAL"
						| "YUNGOOS_NORMAL";
					shiny?: boolean;
				};
				pokemonId:
					| "CLAMPERL"
					| "DIANCIE"
					| "DIGLETT"
					| "FEEBAS"
					| "GLIMMET"
					| "KELDEO"
					| "LATIAS"
					| "LATIOS"
					| "LOTAD"
					| "ROCKRUFF"
					| "TINKATON"
					| "YAMPER"
					| "YUNGOOS";
			};
			stardust?: number;
			type: "AVATAR_CLOTHING" | "CANDY" | "EXPERIENCE" | "ITEM" | "POKEMON_ENCOUNTER" | "STARDUST";
		}>;
		itemBagDescriptionKey:
			| "item_battle_pass_ticket_desc"
			| "item_event_ticket_02_desc_CATCH_MASTERY_ORICORIO"
			| "item_event_ticket_05_details_GMAX_PIKACHU_MAX_BATTLE"
			| "item_event_ticket_06_details_REPLAY_GO_BIGGER"
			| "item_event_ticket_07_desc_masterball25"
			| "item_event_ticket_07_details_masterball25"
			| "ITEM_EVENT_TICKET_09_desc_fashionRaidDay26"
			| "ITEM_EVENT_TICKET_09_details_fashionRaidDay26"
			| "item_event_ticket_evergreen_desc_GOWA2024GSBEA"
			| "item_event_ticket_evergreen_desc_IntoTDepths26"
			| "item_event_ticket_evergreen_desc_Riolu0426"
			| "item_event_ticket_evergreen_details_IntoTDepths26"
			| "item_event_ticket_evergreen_details_PawPrint_20250620"
			| "item_event_ticket_evergreen_details_Riolu0426"
			| "item_event_ticket_gray_desc_FinalJustice2025"
			| "item_event_ticket_gray_details_ENTEI_SHADOW_RAID_DAY"
			| "item_event_ticket_pink_desc_CD_Tinkatink26"
			| "item_event_ticket_pink_desc_WaterRRD26"
			| "item_global_event_ticket_details_GOTour2026"
			| "item_ticket_city_safari_00_desc"
			| "item_ticket_city_safari_01_desc"
			| "item_ticket_city_safari_02_desc";
		textRewardsKey?:
			| "text_rewards_key_CATCH_MASTERY_ORICORIO"
			| "text_rewards_key_CD_Tinkatink26"
			| "text_rewards_key_ENTEI_SHADOW_RAID_DAY"
			| "text_rewards_key_fashionRaidDay26"
			| "text_rewards_key_FinalJustice2025"
			| "text_rewards_key_GMAX_PIKACHU_MAX_BATTLE"
			| "text_rewards_key_GOTour2026"
			| "text_rewards_key_IntoTDepths26"
			| "text_rewards_key_masterball25"
			| "text_rewards_key_PawPrint_20250620"
			| "text_rewards_key_REPLAY_GO_BIGGER"
			| "text_rewards_key_Riolu0426"
			| "text_rewards_key_WaterRRD26";
		ticketItem?:
			| "ITEM_EVENT_TICKET_02"
			| "ITEM_EVENT_TICKET_03"
			| "ITEM_EVENT_TICKET_04"
			| "ITEM_EVENT_TICKET_05"
			| "ITEM_EVENT_TICKET_06"
			| "ITEM_EVENT_TICKET_07"
			| "ITEM_EVENT_TICKET_08"
			| "ITEM_EVENT_TICKET_09"
			| "ITEM_EVENT_TICKET_10"
			| "ITEM_EVENT_TICKET_PINK"
			| "ITEM_EVERGREEN_TICKET"
			| "ITEM_GLOBAL_EVENT_TICKET";
		titleImageUrl?: "https://storage.googleapis.com/prod-public-images/gotourlogo_1914247967.png";
	};
	hideItemInInventory?: boolean;
	ignoreInventorySpace?: boolean;
	incense?: {
		incenseLifetimeSeconds: number;
		spawnTableProbability?: number;
	};
	incidentTicket?: {
		ignoreFullInventory?: boolean;
		upgradedItem?: "ITEM_LEADER_MAP" | "ITEM_SHADOW_GEM";
		upgradeRequirementCount?: number;
	};
	inventoryUpgrade?: {
		additionalStorage: number;
		upgradeType: "INCREASE_ITEM_STORAGE" | "INCREASE_POKEMON_STORAGE" | "INCREASE_POSTCARD_STORAGE";
	};
	itemCap?: number;
	itemType:
		| "ITEM_TYPE_BATTLE"
		| "ITEM_TYPE_BREAKFAST"
		| "ITEM_TYPE_CAMERA"
		| "ITEM_TYPE_CANDY"
		| "ITEM_TYPE_DISK"
		| "ITEM_TYPE_ENHANCED_CURRENCY"
		| "ITEM_TYPE_ENHANCED_CURRENCY_HOLDER"
		| "ITEM_TYPE_EVENT_PASS_POINT"
		| "ITEM_TYPE_EVOLUTION_REQUIREMENT"
		| "ITEM_TYPE_FOOD"
		| "ITEM_TYPE_FRIEND_BOOST"
		| "ITEM_TYPE_FRIEND_GIFT_BOX"
		| "ITEM_TYPE_GLOBAL_EVENT_TICKET"
		| "ITEM_TYPE_INCENSE"
		| "ITEM_TYPE_INCIDENT_TICKET"
		| "ITEM_TYPE_INCUBATOR"
		| "ITEM_TYPE_INVENTORY_UPGRADE"
		| "ITEM_TYPE_MOVE_REROLL"
		| "ITEM_TYPE_MP"
		| "ITEM_TYPE_MP_REPLENISH"
		| "ITEM_TYPE_POKEBALL"
		| "ITEM_TYPE_POSTCARD_INVENTORY"
		| "ITEM_TYPE_POTION"
		| "ITEM_TYPE_RAID_TICKET"
		| "ITEM_TYPE_REVIVE"
		| "ITEM_TYPE_ROUTE_MAKER"
		| "ITEM_TYPE_SOFT_SFIDA"
		| "ITEM_TYPE_STARDUST_BOOST"
		| "ITEM_TYPE_STAT_INCREASE"
		| "ITEM_TYPE_STICKER_INVENTORY"
		| "ITEM_TYPE_TEAM_CHANGE"
		| "ITEM_TYPE_XP_BOOST";
	nameOverride?:
		| "general1.ticket_CD_Tinkatink26_title"
		| "general1.ticket._GOWA2024GSBEA_title"
		| "general1.ticket.2_WaterRRD26_title"
		| "general1.ticket.4_Riolu0426_title"
		| "general1.ticket.5_IntoTDepths26_title"
		| "general1.ticket.5.ENTEI_SHADOW_RAID_DAY"
		| "general2.ticket.6.REPLAY_GO_BIGGER"
		| "general2.ticket.7_masterball25_title"
		| "general2.ticket.9_fashionRaidDay26_title"
		| "general2.ticket2.CATCH_MASTERY_ORICORIO"
		| "general2.ticket5.GMAX_PIKACHU_MAX_BATTLE"
		| "GOTour_2026_ticket_title"
		| "ITEM_EVENT_PASS_POINT_LIVE_OPS_01_name"
		| "item_postcard_inventory_name_stamp";
	potion?: {
		staAmount?: number;
		staPercent?: number;
	};
	replenishMp?: {
		mpAmount: number;
	};
	revive?: {
		staPercent: number;
	};
	stardustBoost?: {
		boostDurationMs: number;
		stardustMultiplier: number;
	};
	statIncrease?: {
		statsToIncreaseLimit: number;
	};
	timePeriodCounters?: {
		playerActivity: {
			limit: number;
		};
	};
	xpBoost?: {
		boostDurationMs: number;
		xpMultiplier: number;
	};
}

export type ItemSettingsFusionResourceBlackKyurem = S<
	ItemSettings<
		"FUSION_RESOURCE_BLACK_KYUREM",
		{
			category: "ITEM_CATEGORY_EVOLUTION_REQUIREMENT";
			dropTrainerLevel: 1;
			ignoreInventorySpace: true;
			itemCap: 10000;
			itemType: "ITEM_TYPE_EVOLUTION_REQUIREMENT";
		}
	>
>;
export type ItemSettingsFusionResourceDawnwingsNecrozma = S<
	ItemSettings<
		"FUSION_RESOURCE_DAWNWINGS_NECROZMA",
		{
			category: "ITEM_CATEGORY_EVOLUTION_REQUIREMENT";
			dropTrainerLevel: 1;
			ignoreInventorySpace: true;
			itemCap: 10000;
			itemType: "ITEM_TYPE_EVOLUTION_REQUIREMENT";
		}
	>
>;
export type ItemSettingsFusionResourceDuskmaneNecrozma = S<
	ItemSettings<
		"FUSION_RESOURCE_DUSKMANE_NECROZMA",
		{
			category: "ITEM_CATEGORY_EVOLUTION_REQUIREMENT";
			dropTrainerLevel: 1;
			ignoreInventorySpace: true;
			itemCap: 10000;
			itemType: "ITEM_TYPE_EVOLUTION_REQUIREMENT";
		}
	>
>;
export type ItemSettingsFusionResourceWhiteKyurem = S<
	ItemSettings<
		"FUSION_RESOURCE_WHITE_KYUREM",
		{
			category: "ITEM_CATEGORY_EVOLUTION_REQUIREMENT";
			dropTrainerLevel: 1;
			ignoreInventorySpace: true;
			itemCap: 10000;
			itemType: "ITEM_TYPE_EVOLUTION_REQUIREMENT";
		}
	>
>;
export type ItemSettingsItemBattlePassTicket = S<
	ItemSettings<
		"ITEM_BATTLE_PASS_TICKET",
		{
			category: "ITEM_CATEGORY_GLOBAL_EVENT_TICKET";
			globalEventTicket: {
				clientEventEndTimeUtcMs: "1775210400000";
				clientEventStartTimeUtcMs: "1772542800000";
				eventBannerUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-s22-gbl-nologo-2026.jpg";
				eventEndTime: "2026-04-03T10:00:00";
				eventStartTime: "2026-03-03T13:00:00";
				itemBagDescriptionKey: "item_battle_pass_ticket_desc";
			};
			itemType: "ITEM_TYPE_GLOBAL_EVENT_TICKET";
		}
	>
>;
export type ItemSettingsItemBeans = S<
	ItemSettings<
		"ITEM_BEANS",
		{
			category: "ITEM_CATEGORY_EVOLUTION_REQUIREMENT";
			dropTrainerLevel: 1;
			ignoreInventorySpace: true;
			itemCap: 300;
			itemType: "ITEM_TYPE_EVOLUTION_REQUIREMENT";
		}
	>
>;
export type ItemSettingsItemBeastBall = S<
	ItemSettings<
		"ITEM_BEAST_BALL",
		{
			category: "ITEM_CATEGORY_POKEBALL";
			dropTrainerLevel: 100;
			itemType: "ITEM_TYPE_POKEBALL";
		}
	>
>;
export type ItemSettingsItemBlukBerry = S<
	ItemSettings<
		"ITEM_BLUK_BERRY",
		{
			category: "ITEM_CATEGORY_FOOD";
			dropTrainerLevel: 100;
			food: {
				growthPercent: 0.1;
				itemEffect: ["ITEM_EFFECT_CAP_NO_MOVEMENT"];
				itemEffectPercent: [1];
			};
			itemType: "ITEM_TYPE_FOOD";
		}
	>
>;
export type ItemSettingsItemBreakfast = S<
	ItemSettings<
		"ITEM_BREAKFAST",
		{
			category: "ITEM_CATEGORY_UTILITES";
			dropTrainerLevel: 1;
			ignoreInventorySpace: true;
			itemCap: 1;
			itemType: "ITEM_TYPE_BREAKFAST";
		}
	>
>;
export type ItemSettingsItemDragonScale = S<
	ItemSettings<
		"ITEM_DRAGON_SCALE",
		{
			category: "ITEM_CATEGORY_EVOLUTION_REQUIREMENT";
			dropTrainerLevel: 10;
			itemType: "ITEM_TYPE_EVOLUTION_REQUIREMENT";
		}
	>
>;
export type ItemSettingsItemEnhancedCurrency = S<
	ItemSettings<
		"ITEM_ENHANCED_CURRENCY",
		{
			category: "ITEM_CATEGORY_ENHANCED_CURRENCY";
			dropTrainerLevel: 1;
			ignoreInventorySpace: true;
			itemCap: 600;
			itemType: "ITEM_TYPE_ENHANCED_CURRENCY";
		}
	>
>;
export type ItemSettingsItemEnhancedCurrencyHolder = S<
	ItemSettings<
		"ITEM_ENHANCED_CURRENCY_HOLDER",
		{
			category: "ITEM_CATEGORY_ENHANCED_CURRENCY_HOLDER";
			ignoreInventorySpace: true;
			itemCap: 1;
			itemType: "ITEM_TYPE_ENHANCED_CURRENCY_HOLDER";
		}
	>
>;
export type ItemSettingsItemEventPassPointGoFest01 = S<
	ItemSettings<
		"ITEM_EVENT_PASS_POINT_GO_FEST_01",
		{
			category: "ITEM_CATEGORY_EVENT_PASS_POINT";
			eventPassPoint: {
				eventPassId: "EVENT_PASS_GOFEST2025_GLOBAL";
			};
			hideItemInInventory: true;
			ignoreInventorySpace: true;
			itemCap: 999999;
			itemType: "ITEM_TYPE_EVENT_PASS_POINT";
		}
	>
>;
export type ItemSettingsItemEventPassPointGoFest02 = S<
	ItemSettings<
		"ITEM_EVENT_PASS_POINT_GO_FEST_02",
		{
			category: "ITEM_CATEGORY_EVENT_PASS_POINT";
			eventPassPoint: {
				eventPassId: "EVENT_PASS_GOFEST2025_MAXFINALE";
			};
			hideItemInInventory: true;
			ignoreInventorySpace: true;
			itemCap: 999999;
			itemType: "ITEM_TYPE_EVENT_PASS_POINT";
			timePeriodCounters: {
				playerActivity: {
					limit: 50;
				};
			};
		}
	>
>;
export type ItemSettingsItemEventPassPointGoTour01 = S<
	ItemSettings<
		"ITEM_EVENT_PASS_POINT_GO_TOUR_01",
		{
			category: "ITEM_CATEGORY_EVENT_PASS_POINT";
			eventPassPoint: {
				eventPassId: "EVENT_PASS_GOTOUR2026_GLOBAL";
			};
			hideItemInInventory: true;
			ignoreInventorySpace: true;
			itemCap: 999999;
			itemType: "ITEM_TYPE_EVENT_PASS_POINT";
			timePeriodCounters: {
				playerActivity: {
					limit: 150;
				};
			};
		}
	>
>;
export type ItemSettingsItemEventPassPointGoTour02 = S<
	ItemSettings<
		"ITEM_EVENT_PASS_POINT_GO_TOUR_02",
		{
			category: "ITEM_CATEGORY_EVENT_PASS_POINT";
			eventPassPoint: {
				eventPassId: "EVENT_PASS_GOTOUR2026_IRL";
			};
			hideItemInInventory: true;
			ignoreInventorySpace: true;
			itemCap: 999999;
			itemType: "ITEM_TYPE_EVENT_PASS_POINT";
		}
	>
>;
export type ItemSettingsItemEventPassPointGoWildArea01 = S<
	ItemSettings<
		"ITEM_EVENT_PASS_POINT_GO_WILD_AREA_01",
		{
			category: "ITEM_CATEGORY_EVENT_PASS_POINT";
			eventPassPoint: {
				eventPassId: "EVENT_PASS_GOWA_2025";
			};
			hideItemInInventory: true;
			ignoreInventorySpace: true;
			itemCap: 6000;
			itemType: "ITEM_TYPE_EVENT_PASS_POINT";
			timePeriodCounters: {
				playerActivity: {
					limit: 100;
				};
			};
		}
	>
>;
export type ItemSettingsItemEventPassPointLiveOps01 = S<
	ItemSettings<
		"ITEM_EVENT_PASS_POINT_LIVE_OPS_01",
		{
			category: "ITEM_CATEGORY_EVENT_PASS_POINT";
			eventPassPoint: {
				eventPassId: "EVENT_PASS_DECEMBER2025_SEASON";
			};
			hideItemInInventory: true;
			ignoreInventorySpace: true;
			itemCap: 999999;
			itemType: "ITEM_TYPE_EVENT_PASS_POINT";
			timePeriodCounters: {
				playerActivity: {
					limit: 300;
				};
			};
		}
	>
>;
export type ItemSettingsItemEventPassPointLiveOps02 = S<
	ItemSettings<
		"ITEM_EVENT_PASS_POINT_LIVE_OPS_02",
		{
			category: "ITEM_CATEGORY_EVENT_PASS_POINT";
			eventPassPoint: {
				eventPassId: "EVENT_PASS_JANUARY2026_SEASON";
			};
			hideItemInInventory: true;
			ignoreInventorySpace: true;
			itemCap: 999999;
			itemType: "ITEM_TYPE_EVENT_PASS_POINT";
			timePeriodCounters: {
				playerActivity: {
					limit: 300;
				};
			};
		}
	>
>;
export type ItemSettingsItemEventPassPointLiveOps03 = S<
	ItemSettings<
		"ITEM_EVENT_PASS_POINT_LIVE_OPS_03",
		{
			category: "ITEM_CATEGORY_EVENT_PASS_POINT";
			eventPassPoint: {
				eventPassId: "EVENT_PASS_FEBRUARY2026_SEASON";
			};
			hideItemInInventory: true;
			ignoreInventorySpace: true;
			itemCap: 999999;
			itemType: "ITEM_TYPE_EVENT_PASS_POINT";
			timePeriodCounters: {
				playerActivity: {
					limit: 300;
				};
			};
		}
	>
>;
export type ItemSettingsItemEventPassPointLiveOps04 = S<
	ItemSettings<
		"ITEM_EVENT_PASS_POINT_LIVE_OPS_04",
		{
			category: "ITEM_CATEGORY_EVENT_PASS_POINT";
			eventPassPoint: {
				eventPassId: "EVENT_PASS_STEELEDRESOLVE2026_EVENT";
			};
			hideItemInInventory: true;
			ignoreInventorySpace: true;
			itemCap: 999999;
			itemType: "ITEM_TYPE_EVENT_PASS_POINT";
			timePeriodCounters: {
				playerActivity: {
					limit: 300;
				};
			};
		}
	>
>;
export type ItemSettingsItemEventPassPointLiveOps05 = S<
	ItemSettings<
		"ITEM_EVENT_PASS_POINT_LIVE_OPS_05",
		{
			category: "ITEM_CATEGORY_EVENT_PASS_POINT";
			eventPassPoint: {
				eventPassId: "EVENT_PASS_BUGOUTBUDDIES2026_EVENT";
			};
			hideItemInInventory: true;
			ignoreInventorySpace: true;
			itemCap: 999999;
			itemType: "ITEM_TYPE_EVENT_PASS_POINT";
			timePeriodCounters: {
				playerActivity: {
					limit: 300;
				};
			};
		}
	>
>;
export type ItemSettingsItemEventPassPointLiveOps06 = S<
	ItemSettings<
		"ITEM_EVENT_PASS_POINT_LIVE_OPS_06",
		{
			category: "ITEM_CATEGORY_EVENT_PASS_POINT";
			eventPassPoint: {
				eventPassId: "EVENT_PASS_SHOCKINGLYGOOD2026_EVENT";
			};
			hideItemInInventory: true;
			ignoreInventorySpace: true;
			itemCap: 999999;
			itemType: "ITEM_TYPE_EVENT_PASS_POINT";
			timePeriodCounters: {
				playerActivity: {
					limit: 300;
				};
			};
		}
	>
>;
export type ItemSettingsItemEventPassPointLiveOps07 = S<
	ItemSettings<
		"ITEM_EVENT_PASS_POINT_LIVE_OPS_07",
		{
			category: "ITEM_CATEGORY_EVENT_PASS_POINT";
			eventPassPoint: {
				eventPassId: "EVENT_PASS_SUSTAINABILITY2026_EVENT";
			};
			ignoreInventorySpace: true;
			itemCap: 999999;
			itemType: "ITEM_TYPE_EVENT_PASS_POINT";
			timePeriodCounters: {
				playerActivity: {
					limit: 300;
				};
			};
		}
	>
>;
export type ItemSettingsItemEventPassPointLiveOps08 = S<
	ItemSettings<
		"ITEM_EVENT_PASS_POINT_LIVE_OPS_08",
		{
			category: "ITEM_CATEGORY_EVENT_PASS_POINT";
			eventPassPoint: {
				eventPassId: "EVENT_PASS_STEELEDRESOLVE2026_EVENT";
			};
			hideItemInInventory: true;
			ignoreInventorySpace: true;
			itemCap: 999999;
			itemType: "ITEM_TYPE_EVENT_PASS_POINT";
			timePeriodCounters: {
				playerActivity: {
					limit: 300;
				};
			};
		}
	>
>;
export type ItemSettingsItemEventPassPointMonthly01 = S<
	ItemSettings<
		"ITEM_EVENT_PASS_POINT_MONTHLY_01",
		{
			category: "ITEM_CATEGORY_EVENT_PASS_POINT";
			eventPassPoint: {
				eventPassId: "EVENT_PASS_MARCH2026_SEASON";
			};
			hideItemInInventory: true;
			ignoreInventorySpace: true;
			itemCap: 999999;
			itemType: "ITEM_TYPE_EVENT_PASS_POINT";
			nameOverride: "ITEM_EVENT_PASS_POINT_LIVE_OPS_01_name";
			timePeriodCounters: {
				playerActivity: {
					limit: 300;
				};
			};
		}
	>
>;
export type ItemSettingsItemEventPassPointMonthly02 = S<
	ItemSettings<
		"ITEM_EVENT_PASS_POINT_MONTHLY_02",
		{
			category: "ITEM_CATEGORY_EVENT_PASS_POINT";
			eventPassPoint: {
				eventPassId: "EVENT_PASS_APRIL2026_SEASON";
			};
			ignoreInventorySpace: true;
			itemCap: 999999;
			itemType: "ITEM_TYPE_EVENT_PASS_POINT";
			timePeriodCounters: {
				playerActivity: {
					limit: 250;
				};
			};
		}
	>
>;
export type ItemSettingsItemEventPassPointMonthly03 = S<
	ItemSettings<
		"ITEM_EVENT_PASS_POINT_MONTHLY_03",
		{
			category: "ITEM_CATEGORY_EVENT_PASS_POINT";
			eventPassPoint: {
				eventPassId: "EVENT_PASS_MAY2026_SEASON";
			};
			hideItemInInventory: true;
			ignoreInventorySpace: true;
			itemCap: 999999;
			itemType: "ITEM_TYPE_EVENT_PASS_POINT";
			timePeriodCounters: {
				playerActivity: {
					limit: 300;
				};
			};
		}
	>
>;
export type ItemSettingsItemEventTicket02 = S<
	ItemSettings<
		"ITEM_EVENT_TICKET_02",
		{
			category: "ITEM_CATEGORY_GLOBAL_EVENT_TICKET";
			descriptionOverride: "item_event_ticket_02_details_CATCH_MASTERY_ORICORIO";
			globalEventTicket: {
				backgroundImageUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2F20260113_pgo_s22_oricorio_1024x576_nologo.jpg";
				clientEventEndTimeUtcMs: "1770494400000";
				clientEventStartTimeUtcMs: "1770458400000";
				detailsLinkKey: "details_link_key_ORICORIO_MASTERY_FEB2026";
				displayV2Enabled: true;
				eventBannerUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2F20260113_pgo_s22_oricorio_1024x576_nologo.jpg";
				eventDatetimeRangeKey: "event_datetime_range_key_CATCH_MASTERY_ORICORIO";
				eventEndTime: "2026-02-07T20:00:00";
				eventStartTime: "2026-02-07T10:00:00";
				giftable: true;
				giftItem: "ITEM_EVENT_TICKET_02_TO_GIFT";
				iconRewards: [
					{
						exp: 12000;
						type: "EXPERIENCE";
					},
					{
						stardust: 3000;
						type: "STARDUST";
					},
				];
				itemBagDescriptionKey: "item_event_ticket_02_desc_CATCH_MASTERY_ORICORIO";
				textRewardsKey: "text_rewards_key_CATCH_MASTERY_ORICORIO";
			};
			itemType: "ITEM_TYPE_GLOBAL_EVENT_TICKET";
			nameOverride: "general2.ticket2.CATCH_MASTERY_ORICORIO";
		}
	>
>;
export type ItemSettingsItemEventTicket02ToGift = S<
	ItemSettings<
		"ITEM_EVENT_TICKET_02_TO_GIFT",
		{
			category: "ITEM_CATEGORY_GLOBAL_EVENT_TICKET";
			descriptionOverride: "item_event_ticket_02_details_CATCH_MASTERY_ORICORIO";
			globalEventTicket: {
				clientEventEndTimeUtcMs: "1770494400000";
				clientEventStartTimeUtcMs: "1770458400000";
				eventBannerUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2F20260113_pgo_s22_oricorio_1024x576_nologo.jpg";
				eventEndTime: "2026-02-07T20:00:00";
				eventStartTime: "2026-02-07T10:00:00";
				itemBagDescriptionKey: "item_event_ticket_02_desc_CATCH_MASTERY_ORICORIO";
				ticketItem: "ITEM_EVENT_TICKET_02";
			};
			ignoreInventorySpace: true;
			itemType: "ITEM_TYPE_GLOBAL_EVENT_TICKET";
			nameOverride: "general2.ticket2.CATCH_MASTERY_ORICORIO";
		}
	>
>;
export type ItemSettingsItemEventTicket03 = S<
	ItemSettings<
		"ITEM_EVENT_TICKET_03",
		{
			category: "ITEM_CATEGORY_GLOBAL_EVENT_TICKET";
			descriptionOverride: "item_event_ticket_pink_details_CD_Tinkatink26";
			globalEventTicket: {
				backgroundImageUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-tinkatink-community-day-2026-nologo.jpg";
				clientEventEndTimeUtcMs: "1775926800000";
				clientEventStartTimeUtcMs: "1775916000000";
				detailsLinkKey: "details_link_key";
				displayV2Enabled: true;
				eventBannerUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-tinkatink-community-day-2026-nologo.jpg";
				eventDatetimeRangeKey: "event_datetime_range_key_CD_Tinkatink26";
				eventEndTime: "2026-04-11T17:00:00";
				eventStartTime: "2026-04-11T14:00:00";
				giftable: true;
				giftItem: "ITEM_EVENT_TICKET_03_TO_GIFT";
				iconRewards: [
					{
						pokemonEncounter: {
							pokemonDisplay: {
								form: "TINKATON_NORMAL";
							};
							pokemonId: "TINKATON";
						};
						type: "POKEMON_ENCOUNTER";
					},
					{
						item: {
							amount: 1;
							item: "ITEM_STAR_PIECE";
						};
						type: "ITEM";
					},
					{
						item: {
							amount: 1;
							item: "ITEM_XL_RARE_CANDY";
						};
						type: "ITEM";
					},
				];
				itemBagDescriptionKey: "item_event_ticket_pink_desc_CD_Tinkatink26";
				textRewardsKey: "text_rewards_key_CD_Tinkatink26";
			};
			itemType: "ITEM_TYPE_GLOBAL_EVENT_TICKET";
			nameOverride: "general1.ticket_CD_Tinkatink26_title";
		}
	>
>;
export type ItemSettingsItemEventTicket03ToGift = S<
	ItemSettings<
		"ITEM_EVENT_TICKET_03_TO_GIFT",
		{
			category: "ITEM_CATEGORY_GLOBAL_EVENT_TICKET";
			descriptionOverride: "item_event_ticket_pink_details_CD_Tinkatink26";
			globalEventTicket: {
				clientEventEndTimeUtcMs: "1775926800000";
				clientEventStartTimeUtcMs: "1775916000000";
				eventBannerUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-tinkatink-community-day-2026-nologo.jpg";
				eventEndTime: "2026-04-11T17:00:00";
				eventStartTime: "2026-04-11T14:00:00";
				itemBagDescriptionKey: "item_event_ticket_pink_desc_CD_Tinkatink26";
				ticketItem: "ITEM_EVENT_TICKET_03";
			};
			ignoreInventorySpace: true;
			itemType: "ITEM_TYPE_GLOBAL_EVENT_TICKET";
			nameOverride: "general1.ticket_CD_Tinkatink26_title";
		}
	>
>;
export type ItemSettingsItemEventTicket04 = S<
	ItemSettings<
		"ITEM_EVENT_TICKET_04",
		{
			category: "ITEM_CATEGORY_GLOBAL_EVENT_TICKET";
			descriptionOverride: "item_event_ticket_pink_details_WaterRRD26";
			globalEventTicket: {
				backgroundImageUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-replay-water-research-day-2026-nologo.jpg";
				clientEventEndTimeUtcMs: "1774112400000";
				clientEventStartTimeUtcMs: "1774101600000";
				detailsLinkKey: "details_link_key";
				displayV2Enabled: true;
				eventBannerUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-replay-water-research-day-2026-nologo.jpg";
				eventDatetimeRangeKey: "event_datetime_range_key_WaterRRD26";
				eventEndTime: "2026-03-21T17:00:00";
				eventStartTime: "2026-03-21T14:00:00";
				giftable: true;
				giftItem: "ITEM_EVENT_TICKET_04_TO_GIFT";
				iconRewards: [
					{
						pokemonEncounter: {
							pokemonDisplay: {
								form: "FEEBAS_NORMAL";
							};
							pokemonId: "FEEBAS";
						};
						type: "POKEMON_ENCOUNTER";
					},
					{
						pokemonEncounter: {
							pokemonDisplay: {
								form: "LOTAD_NORMAL";
							};
							pokemonId: "LOTAD";
						};
						type: "POKEMON_ENCOUNTER";
					},
					{
						pokemonEncounter: {
							pokemonDisplay: {
								form: "CLAMPERL_NORMAL";
							};
							pokemonId: "CLAMPERL";
						};
						type: "POKEMON_ENCOUNTER";
					},
				];
				itemBagDescriptionKey: "item_event_ticket_pink_desc_WaterRRD26";
				textRewardsKey: "text_rewards_key_WaterRRD26";
			};
			itemType: "ITEM_TYPE_GLOBAL_EVENT_TICKET";
			nameOverride: "general1.ticket.2_WaterRRD26_title";
		}
	>
>;
export type ItemSettingsItemEventTicket04ToGift = S<
	ItemSettings<
		"ITEM_EVENT_TICKET_04_TO_GIFT",
		{
			category: "ITEM_CATEGORY_GLOBAL_EVENT_TICKET";
			descriptionOverride: "item_event_ticket_pink_details_WaterRRD26";
			globalEventTicket: {
				clientEventEndTimeUtcMs: "1774112400000";
				clientEventStartTimeUtcMs: "1774101600000";
				eventBannerUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-replay-water-research-day-2026-nologo.jpg";
				eventEndTime: "2026-03-21T17:00:00";
				eventStartTime: "2026-03-21T14:00:00";
				itemBagDescriptionKey: "item_event_ticket_pink_desc_WaterRRD26";
				ticketItem: "ITEM_EVENT_TICKET_04";
			};
			ignoreInventorySpace: true;
			itemType: "ITEM_TYPE_GLOBAL_EVENT_TICKET";
		}
	>
>;
export type ItemSettingsItemEventTicket05 = S<
	ItemSettings<
		"ITEM_EVENT_TICKET_05",
		{
			category: "ITEM_CATEGORY_GLOBAL_EVENT_TICKET";
			descriptionOverride: "item_event_ticket_05_desc_GMAX_PIKACHU_MAX_BATTLE";
			globalEventTicket: {
				backgroundImageUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-gmax-pikachu-2026-nologo.jpg";
				clientEventEndTimeUtcMs: "1774717200000";
				clientEventStartTimeUtcMs: "1774706400000";
				detailsLinkKey: "details_link_key_GMAX_PIKACHU_MAX_BATTLE";
				displayV2Enabled: true;
				eventBannerUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-gmax-pikachu-2026-nologo.jpg";
				eventDatetimeRangeKey: "event_datetime_range_key_GMAX_PIKACHU_MAX_BATTLE";
				eventEndTime: "2026-03-28T17:00:00";
				eventStartTime: "2026-03-28T14:00:00";
				giftable: true;
				giftItem: "ITEM_EVENT_TICKET_05_TO_GIFT";
				iconRewards: [
					{
						item: {
							amount: 1;
							item: "ITEM_MAX_BOOST";
						};
						type: "ITEM";
					},
					{
						exp: 25000;
						type: "EXPERIENCE";
					},
				];
				itemBagDescriptionKey: "item_event_ticket_05_details_GMAX_PIKACHU_MAX_BATTLE";
				textRewardsKey: "text_rewards_key_GMAX_PIKACHU_MAX_BATTLE";
			};
			itemType: "ITEM_TYPE_GLOBAL_EVENT_TICKET";
			nameOverride: "general2.ticket5.GMAX_PIKACHU_MAX_BATTLE";
		}
	>
>;
export type ItemSettingsItemEventTicket05ToGift = S<
	ItemSettings<
		"ITEM_EVENT_TICKET_05_TO_GIFT",
		{
			category: "ITEM_CATEGORY_GLOBAL_EVENT_TICKET";
			descriptionOverride: "item_event_ticket_05_desc_GMAX_PIKACHU_MAX_BATTLE";
			globalEventTicket: {
				backgroundImageUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-gmax-pikachu-2026-nologo.jpg";
				clientEventEndTimeUtcMs: "1774717200000";
				clientEventStartTimeUtcMs: "1774706400000";
				eventBannerUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-gmax-pikachu-2026-nologo.jpg";
				eventEndTime: "2026-03-28T17:00:00";
				eventStartTime: "2026-03-28T14:00:00";
				itemBagDescriptionKey: "item_event_ticket_05_details_GMAX_PIKACHU_MAX_BATTLE";
				ticketItem: "ITEM_EVENT_TICKET_05";
			};
			ignoreInventorySpace: true;
			itemType: "ITEM_TYPE_GLOBAL_EVENT_TICKET";
			nameOverride: "general2.ticket5.GMAX_PIKACHU_MAX_BATTLE";
		}
	>
>;
export type ItemSettingsItemEventTicket06 = S<
	ItemSettings<
		"ITEM_EVENT_TICKET_06",
		{
			category: "ITEM_CATEGORY_GLOBAL_EVENT_TICKET";
			descriptionOverride: "item_event_ticket_06_desc_REPLAY_GO_BIGGER";
			globalEventTicket: {
				backgroundImageUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-gmax-kanto-max-battle-day-2026-nologo.jpg";
				clientEventEndTimeUtcMs: "1777136400000";
				clientEventStartTimeUtcMs: "1777125600000";
				detailsLinkKey: "details_link_key_REPLAY_GO_BIGGER_MAX_BATTLE";
				displayV2Enabled: true;
				eventBannerUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-gmax-kanto-max-battle-day-2026-nologo.jpg";
				eventDatetimeRangeKey: "event_datetime_range_key_REPLAY_GO_BIGGER";
				eventEndTime: "2026-04-25T17:00:00";
				eventStartTime: "2026-04-25T14:00:00";
				giftable: true;
				giftItem: "ITEM_EVENT_TICKET_06_TO_GIFT";
				iconRewards: [
					{
						item: {
							amount: 1;
							item: "ITEM_MAX_BOOST";
						};
						type: "ITEM";
					},
					{
						exp: 25000;
						type: "EXPERIENCE";
					},
				];
				itemBagDescriptionKey: "item_event_ticket_06_details_REPLAY_GO_BIGGER";
				textRewardsKey: "text_rewards_key_REPLAY_GO_BIGGER";
			};
			itemType: "ITEM_TYPE_GLOBAL_EVENT_TICKET";
			nameOverride: "general2.ticket.6.REPLAY_GO_BIGGER";
		}
	>
>;
export type ItemSettingsItemEventTicket06ToGift = S<
	ItemSettings<
		"ITEM_EVENT_TICKET_06_TO_GIFT",
		{
			category: "ITEM_CATEGORY_GLOBAL_EVENT_TICKET";
			descriptionOverride: "item_event_ticket_06_desc_REPLAY_GO_BIGGER";
			globalEventTicket: {
				clientEventEndTimeUtcMs: "1777136400000";
				clientEventStartTimeUtcMs: "1777125600000";
				eventBannerUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-gmax-kanto-max-battle-day-2026-nologo.jpg";
				eventEndTime: "2026-04-25T17:00:00";
				eventStartTime: "2026-04-25T14:00:00";
				itemBagDescriptionKey: "item_event_ticket_06_details_REPLAY_GO_BIGGER";
				ticketItem: "ITEM_EVENT_TICKET_06";
			};
			ignoreInventorySpace: true;
			itemType: "ITEM_TYPE_GLOBAL_EVENT_TICKET";
			nameOverride: "general2.ticket.6.REPLAY_GO_BIGGER";
		}
	>
>;
export type ItemSettingsItemEventTicket07 = S<
	ItemSettings<
		"ITEM_EVENT_TICKET_07",
		{
			category: "ITEM_CATEGORY_GLOBAL_EVENT_TICKET";
			descriptionOverride: "item_event_ticket_07_desc_masterball25";
			globalEventTicket: {
				backgroundImageUrl: "https://storage.googleapis.com/prod-public-images/masterball-keyart.png";
				clientEventEndTimeUtcMs: "1771790400000";
				clientEventStartTimeUtcMs: "1764669600000";
				detailsLinkKey: "details_link_key";
				displayV2Enabled: true;
				eventBannerUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FPGO_MCS_MasterBall_KeyArt_TK_GP_V2_S14_1024x512_nologo.jpg";
				eventEndTime: "2026-02-22T20:00:00";
				eventStartTime: "2025-12-02T10:00:00";
				giftable: true;
				giftItem: "ITEM_EVENT_TICKET_07_TO_GIFT";
				iconRewards: [
					{
						item: {
							amount: 1;
							item: "ITEM_MASTER_BALL";
						};
						type: "ITEM";
					},
				];
				itemBagDescriptionKey: "item_event_ticket_07_desc_masterball25";
				textRewardsKey: "text_rewards_key_masterball25";
			};
			itemType: "ITEM_TYPE_GLOBAL_EVENT_TICKET";
			nameOverride: "general2.ticket.7_masterball25_title";
		}
	>
>;
export type ItemSettingsItemEventTicket07ToGift = S<
	ItemSettings<
		"ITEM_EVENT_TICKET_07_TO_GIFT",
		{
			category: "ITEM_CATEGORY_GLOBAL_EVENT_TICKET";
			descriptionOverride: "item_event_ticket_07_details_masterball25";
			globalEventTicket: {
				clientEventEndTimeUtcMs: "1771790400000";
				clientEventStartTimeUtcMs: "1764669600000";
				eventBannerUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FPGO_MCS_MasterBall_KeyArt_TK_GP_V2_S14_1024x512_nologo.jpg";
				eventEndTime: "2026-02-22T20:00:00";
				eventStartTime: "2025-12-02T10:00:00";
				itemBagDescriptionKey: "item_event_ticket_07_details_masterball25";
				ticketItem: "ITEM_EVENT_TICKET_07";
			};
			ignoreInventorySpace: true;
			itemType: "ITEM_TYPE_GLOBAL_EVENT_TICKET";
		}
	>
>;
export type ItemSettingsItemEventTicket08 = S<
	ItemSettings<
		"ITEM_EVENT_TICKET_08",
		{
			category: "ITEM_CATEGORY_GLOBAL_EVENT_TICKET";
			descriptionOverride: "item_event_ticket_gray_desc_FinalJustice2025";
			globalEventTicket: {
				backgroundImageUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FPGO-MCS_Shiny_Keldeo_KeyArt_v1-1024x576-nologo.jpg";
				clientEventEndTimeUtcMs: "1764532800000";
				clientEventStartTimeUtcMs: "1764064800000";
				detailsLinkKey: "details_link_key";
				displayV2Enabled: true;
				eventBannerUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FPGO-MCS_Shiny_Keldeo_KeyArt_v1-1024x576-nologo.jpg";
				eventDatetimeRangeKey: "event_datetime_range_key_FinalJustice2025";
				eventEndTime: "2025-11-30T20:00:00";
				eventStartTime: "2025-11-25T10:00:00";
				giftable: true;
				giftItem: "ITEM_EVENT_TICKET_08_TO_GIFT";
				iconRewards: [
					{
						pokemonEncounter: {
							pokemonDisplay: {
								form: "KELDEO_ORDINARY";
								shiny: true;
							};
							pokemonId: "KELDEO";
						};
						type: "POKEMON_ENCOUNTER";
					},
					{
						candy: {
							amount: 30;
							pokemonId: "KELDEO";
						};
						type: "CANDY";
					},
					{
						neutralAvatarItemTemplate: {
							displayTemplateId: "N_DISPLAY_n_shirt_shinykeldeoshirt_0";
						};
						type: "AVATAR_CLOTHING";
					},
				];
				itemBagDescriptionKey: "item_event_ticket_gray_desc_FinalJustice2025";
				textRewardsKey: "text_rewards_key_FinalJustice2025";
			};
			itemType: "ITEM_TYPE_GLOBAL_EVENT_TICKET";
		}
	>
>;
export type ItemSettingsItemEventTicket08ToGift = S<
	ItemSettings<
		"ITEM_EVENT_TICKET_08_TO_GIFT",
		{
			category: "ITEM_CATEGORY_GLOBAL_EVENT_TICKET";
			descriptionOverride: "item_event_ticket_gray_desc_FinalJustice2025";
			globalEventTicket: {
				clientEventEndTimeUtcMs: "1764532800000";
				clientEventStartTimeUtcMs: "1764064800000";
				eventBannerUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FPGO-MCS_Shiny_Keldeo_KeyArt_v1-1024x576-nologo.jpg";
				eventEndTime: "2025-11-30T20:00:00";
				eventStartTime: "2025-11-25T10:00:00";
				itemBagDescriptionKey: "item_event_ticket_gray_desc_FinalJustice2025";
				ticketItem: "ITEM_EVENT_TICKET_08";
			};
			ignoreInventorySpace: true;
			itemType: "ITEM_TYPE_GLOBAL_EVENT_TICKET";
		}
	>
>;
export type ItemSettingsItemEventTicket09 = S<
	ItemSettings<
		"ITEM_EVENT_TICKET_09",
		{
			category: "ITEM_CATEGORY_GLOBAL_EVENT_TICKET";
			descriptionOverride: "ITEM_EVENT_TICKET_09_desc_fashionRaidDay26";
			globalEventTicket: {
				backgroundImageUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-fashion-raid-day-2026-nologo.jpg";
				clientEventEndTimeUtcMs: "1775322000000";
				clientEventStartTimeUtcMs: "1775311200000";
				detailsLinkKey: "details_link_key_fashion_raid_day";
				displayV2Enabled: true;
				eventBannerUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-fashion-raid-day-2026-nologo.jpg";
				eventDatetimeRangeKey: "event_datetime_range_key_fashionRaidDay_s22";
				eventEndTime: "2026-04-04T17:00:00";
				eventStartTime: "2026-04-04T14:00:00";
				giftable: true;
				giftItem: "ITEM_EVENT_TICKET_09_TO_GIFT";
				iconRewards: [
					{
						item: {
							amount: 8;
							item: "ITEM_FREE_RAID_TICKET";
						};
						type: "ITEM";
					},
					{
						item: {
							item: "ITEM_XL_RARE_CANDY";
						};
						type: "ITEM";
					},
				];
				itemBagDescriptionKey: "ITEM_EVENT_TICKET_09_desc_fashionRaidDay26";
				textRewardsKey: "text_rewards_key_fashionRaidDay26";
			};
			itemType: "ITEM_TYPE_GLOBAL_EVENT_TICKET";
			nameOverride: "general2.ticket.9_fashionRaidDay26_title";
		}
	>
>;
export type ItemSettingsItemEventTicket09ToGift = S<
	ItemSettings<
		"ITEM_EVENT_TICKET_09_TO_GIFT",
		{
			category: "ITEM_CATEGORY_GLOBAL_EVENT_TICKET";
			descriptionOverride: "ITEM_EVENT_TICKET_09_details_fashionRaidDay26";
			globalEventTicket: {
				clientEventEndTimeUtcMs: "1775322000000";
				clientEventStartTimeUtcMs: "1775311200000";
				eventBannerUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-fashion-raid-day-2026-nologo.jpg";
				eventEndTime: "2026-04-04T17:00:00";
				eventStartTime: "2026-04-04T14:00:00";
				itemBagDescriptionKey: "ITEM_EVENT_TICKET_09_details_fashionRaidDay26";
				ticketItem: "ITEM_EVENT_TICKET_09";
			};
			ignoreInventorySpace: true;
			itemType: "ITEM_TYPE_GLOBAL_EVENT_TICKET";
			nameOverride: "general2.ticket.9_fashionRaidDay26_title";
		}
	>
>;
export type ItemSettingsItemEventTicket10 = S<
	ItemSettings<
		"ITEM_EVENT_TICKET_10",
		{
			category: "ITEM_CATEGORY_GLOBAL_EVENT_TICKET";
			descriptionOverride: "item_global_event_ticket_details_GOTour2026";
			globalEventTicket: {
				backgroundImageUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fgo_tour_kalos_1024x512_logoless.jpg";
				clientEventEndTimeUtcMs: "1772409599000";
				clientEventStartTimeUtcMs: "1772236800000";
				detailsLinkKey: "item_global_event_ticket_details_GOTour2026";
				displayV2Enabled: true;
				eventBadge: "BADGE_GO_TOUR_2026_GLOBAL";
				eventBannerUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fgo_tour_kalos_1024x512.jpg";
				eventDatetimeRangeKey: "event_datetime_range_key_GOTour2026";
				eventEndTime: "2026-03-01T23:59:59";
				eventStartTime: "2026-02-28T00:00:00";
				giftable: true;
				giftItem: "ITEM_EVENT_TICKET_10_TO_GIFT";
				grantBadgeBeforeEventStartMs: "1769904000000";
				iconRewards: [
					{
						pokemonEncounter: {
							pokemonDisplay: {
								form: "DIANCIE_NORMAL";
								shiny: true;
							};
							pokemonId: "DIANCIE";
						};
						type: "POKEMON_ENCOUNTER";
					},
					{
						pokemonEncounter: {
							pokemonDisplay: {
								form: "LATIAS_NORMAL";
							};
							pokemonId: "LATIAS";
						};
						type: "POKEMON_ENCOUNTER";
					},
					{
						pokemonEncounter: {
							pokemonDisplay: {
								form: "LATIOS_NORMAL";
							};
							pokemonId: "LATIOS";
						};
						type: "POKEMON_ENCOUNTER";
					},
				];
				itemBagDescriptionKey: "item_global_event_ticket_details_GOTour2026";
				textRewardsKey: "text_rewards_key_GOTour2026";
				titleImageUrl: "https://storage.googleapis.com/prod-public-images/gotourlogo_1914247967.png";
			};
			itemType: "ITEM_TYPE_GLOBAL_EVENT_TICKET";
			nameOverride: "GOTour_2026_ticket_title";
		}
	>
>;
export type ItemSettingsItemEventTicket10ToGift = S<
	ItemSettings<
		"ITEM_EVENT_TICKET_10_TO_GIFT",
		{
			category: "ITEM_CATEGORY_GLOBAL_EVENT_TICKET";
			descriptionOverride: "item_global_event_ticket_details_GOTour2026";
			globalEventTicket: {
				clientEventEndTimeUtcMs: "1772409599000";
				clientEventStartTimeUtcMs: "1772236800000";
				eventBannerUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fgo_tour_kalos_1024x512.jpg";
				eventEndTime: "2026-03-01T23:59:59";
				eventStartTime: "2026-02-28T00:00:00";
				itemBagDescriptionKey: "item_global_event_ticket_details_GOTour2026";
				ticketItem: "ITEM_EVENT_TICKET_10";
			};
			ignoreInventorySpace: true;
			itemType: "ITEM_TYPE_GLOBAL_EVENT_TICKET";
			nameOverride: "GOTour_2026_ticket_title";
		}
	>
>;
export type ItemSettingsItemEventTicketGray = S<
	ItemSettings<
		"ITEM_EVENT_TICKET_GRAY",
		{
			category: "ITEM_CATEGORY_GLOBAL_EVENT_TICKET";
			descriptionOverride: "item_event_ticket_06_desc_ENTEI_SHADOW_RAID_DAY";
			globalEventTicket: {
				backgroundImageUrl: "https://storage.googleapis.com/prod-public-images/1054x512.jpg";
				clientEventEndTimeUtcMs: "1777741200000";
				clientEventStartTimeUtcMs: "1777730400000";
				detailsLinkKey: "details_link_key_ENTEI_SHADOW_RAID_DAY";
				displayV2Enabled: true;
				eventBannerUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-entei-shadow-raid-day-2026-nologo.jpg";
				eventDatetimeRangeKey: "event_datetime_range_key_ENTEI_SHADOW_RAID_DAY";
				eventEndTime: "2026-05-02T17:00:00";
				eventStartTime: "2026-05-02T14:00:00";
				giftable: true;
				giftItem: "ITEM_EVENT_TICKET_GRAY_TO_GIFT";
				iconRewards: [
					{
						item: {
							amount: 8;
							item: "ITEM_FREE_RAID_TICKET";
						};
						type: "ITEM";
					},
					{
						stardust: 2;
						type: "STARDUST";
					},
				];
				itemBagDescriptionKey: "item_event_ticket_gray_details_ENTEI_SHADOW_RAID_DAY";
				textRewardsKey: "text_rewards_key_ENTEI_SHADOW_RAID_DAY";
			};
			itemType: "ITEM_TYPE_GLOBAL_EVENT_TICKET";
			nameOverride: "general1.ticket.5.ENTEI_SHADOW_RAID_DAY";
		}
	>
>;
export type ItemSettingsItemEventTicketPink = S<
	ItemSettings<
		"ITEM_EVENT_TICKET_PINK",
		{
			category: "ITEM_CATEGORY_GLOBAL_EVENT_TICKET";
			descriptionOverride: "item_event_ticket_evergreen_desc_PawPrint_20250620";
			globalEventTicket: {
				backgroundImageUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-yampers-paw-prints-ticket-nologo-2025.jpg";
				clientEventEndTimeUtcMs: "1750636799000";
				clientEventStartTimeUtcMs: "1750377600000";
				detailsLinkKey: "item_event_ticket_evergreen_details_PawPrint_20250620";
				displayV2Enabled: true;
				eventBannerUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-yampers-paw-prints-ticket-nologo-2025.jpg";
				eventDatetimeRangeKey: "event_datetime_range_key_PawPrint_20250620";
				eventEndTime: "2025-06-22T23:59:59";
				eventStartTime: "2025-06-20T00:00:00";
				giftable: true;
				giftItem: "ITEM_EVENT_TICKET_PINK_TO_GIFT";
				iconRewards: [
					{
						pokemonEncounter: {
							pokemonId: "YAMPER";
						};
						type: "POKEMON_ENCOUNTER";
					},
					{
						pokemonEncounter: {
							pokemonDisplay: {
								form: "ROCKRUFF_NORMAL";
							};
							pokemonId: "ROCKRUFF";
						};
						type: "POKEMON_ENCOUNTER";
					},
					{
						item: {
							amount: 4;
							item: "ITEM_INCENSE_ORDINARY";
						};
						type: "ITEM";
					},
				];
				itemBagDescriptionKey: "item_event_ticket_evergreen_details_PawPrint_20250620";
				textRewardsKey: "text_rewards_key_PawPrint_20250620";
			};
			itemType: "ITEM_TYPE_GLOBAL_EVENT_TICKET";
		}
	>
>;
export type ItemSettingsItemEventTicketPinkToGift = S<
	ItemSettings<
		"ITEM_EVENT_TICKET_PINK_TO_GIFT",
		{
			category: "ITEM_CATEGORY_GLOBAL_EVENT_TICKET";
			descriptionOverride: "item_event_ticket_evergreen_desc_PawPrint_20250620";
			globalEventTicket: {
				clientEventEndTimeUtcMs: "1750636799000";
				clientEventStartTimeUtcMs: "1750377600000";
				eventBannerUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-yampers-paw-prints-ticket-nologo-2025.jpg";
				eventEndTime: "2025-06-22T23:59:59";
				eventStartTime: "2025-06-20T00:00:00";
				itemBagDescriptionKey: "item_event_ticket_evergreen_details_PawPrint_20250620";
				ticketItem: "ITEM_EVENT_TICKET_PINK";
			};
			ignoreInventorySpace: true;
			itemType: "ITEM_TYPE_GLOBAL_EVENT_TICKET";
		}
	>
>;
export type ItemSettingsItemEvergreenTicket = S<
	ItemSettings<
		"ITEM_EVERGREEN_TICKET",
		{
			category: "ITEM_CATEGORY_GLOBAL_EVENT_TICKET";
			descriptionOverride: "item_event_ticket_evergreen_desc_IntoTDepths26";
			globalEventTicket: {
				backgroundImageUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FPGO-MCS_Into_The_Depths_LiveOp_2026_v3-1024x576-nologo.jpg";
				clientEventEndTimeUtcMs: "1769976000000";
				clientEventStartTimeUtcMs: "1769508000000";
				detailsLinkKey: "details_link_key";
				displayV2Enabled: true;
				eventBannerUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FPGO-MCS_Into_The_Depths_LiveOp_2026_v3-1024x576-nologo.jpg";
				eventDatetimeRangeKey: "event_datetime_range_key_IntoTDepths26";
				eventEndTime: "2026-02-01T20:00:00";
				eventStartTime: "2026-01-27T10:00:00";
				giftable: true;
				giftItem: "ITEM_EVERGREEN_TICKET_TO_GIFT";
				iconRewards: [
					{
						pokemonEncounter: {
							pokemonDisplay: {
								form: "GLIMMET_NORMAL";
							};
							pokemonId: "GLIMMET";
						};
						type: "POKEMON_ENCOUNTER";
					},
					{
						pokemonEncounter: {
							pokemonDisplay: {
								form: "YUNGOOS_NORMAL";
							};
							pokemonId: "YUNGOOS";
						};
						type: "POKEMON_ENCOUNTER";
					},
					{
						pokemonEncounter: {
							pokemonDisplay: {
								form: "DIGLETT_NORMAL";
							};
							pokemonId: "DIGLETT";
						};
						type: "POKEMON_ENCOUNTER";
					},
				];
				itemBagDescriptionKey: "item_event_ticket_evergreen_desc_IntoTDepths26";
				textRewardsKey: "text_rewards_key_IntoTDepths26";
			};
			itemType: "ITEM_TYPE_GLOBAL_EVENT_TICKET";
			nameOverride: "general1.ticket.5_IntoTDepths26_title";
		}
	>
>;
export type ItemSettingsItemEvergreenTicketToGift = S<
	ItemSettings<
		"ITEM_EVERGREEN_TICKET_TO_GIFT",
		{
			category: "ITEM_CATEGORY_GLOBAL_EVENT_TICKET";
			descriptionOverride: "item_event_ticket_evergreen_details_IntoTDepths26";
			globalEventTicket: {
				clientEventEndTimeUtcMs: "1769976000000";
				clientEventStartTimeUtcMs: "1769508000000";
				eventBannerUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FPGO-MCS_Into_The_Depths_LiveOp_2026_v3-1024x576-nologo.jpg";
				eventEndTime: "2026-02-01T20:00:00";
				eventStartTime: "2026-01-27T10:00:00";
				itemBagDescriptionKey: "item_event_ticket_evergreen_details_IntoTDepths26";
				ticketItem: "ITEM_EVERGREEN_TICKET";
			};
			ignoreInventorySpace: true;
			itemType: "ITEM_TYPE_GLOBAL_EVENT_TICKET";
		}
	>
>;
export type ItemSettingsItemFreeRaidTicket = S<
	ItemSettings<
		"ITEM_FREE_RAID_TICKET",
		{
			category: "ITEM_CATEGORY_RAID_TICKET";
			dropTrainerLevel: 100;
			itemType: "ITEM_TYPE_RAID_TICKET";
		}
	>
>;
export type ItemSettingsItemFriendGiftBox = S<
	ItemSettings<
		"ITEM_FRIEND_GIFT_BOX",
		{
			category: "ITEM_CATEGORY_FRIEND_GIFT_BOX";
			dropTrainerLevel: 100;
			itemType: "ITEM_TYPE_FRIEND_GIFT_BOX";
		}
	>
>;
export type ItemSettingsItemGen4EvolutionStone = S<
	ItemSettings<
		"ITEM_GEN4_EVOLUTION_STONE",
		{
			category: "ITEM_CATEGORY_EVOLUTION_REQUIREMENT";
			dropTrainerLevel: 10;
			itemType: "ITEM_TYPE_EVOLUTION_REQUIREMENT";
		}
	>
>;
export type ItemSettingsItemGen5EvolutionStone = S<
	ItemSettings<
		"ITEM_GEN5_EVOLUTION_STONE",
		{
			category: "ITEM_CATEGORY_EVOLUTION_REQUIREMENT";
			dropTrainerLevel: 10;
			itemType: "ITEM_TYPE_EVOLUTION_REQUIREMENT";
		}
	>
>;
export type ItemSettingsItemGiovanniMap = S<
	ItemSettings<
		"ITEM_GIOVANNI_MAP",
		{
			category: "ITEM_CATEGORY_INCIDENT_TICKET";
			dropTrainerLevel: 8;
			incidentTicket: {
				ignoreFullInventory: true;
			};
			itemType: "ITEM_TYPE_INCIDENT_TICKET";
		}
	>
>;
export type ItemSettingsItemGlobalEventTicket = S<
	ItemSettings<
		"ITEM_GLOBAL_EVENT_TICKET",
		{
			category: "ITEM_CATEGORY_GLOBAL_EVENT_TICKET";
			descriptionOverride: "item_event_ticket_evergreen_desc_Riolu0426";
			globalEventTicket: {
				backgroundImageUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-riolu-hatch-day-2026-nologo.jpg";
				clientEventEndTimeUtcMs: "1776531600000";
				clientEventStartTimeUtcMs: "1776510000000";
				detailsLinkKey: "details_link_key_Riolu_Hatch0426";
				displayV2Enabled: true;
				eventBannerUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-riolu-hatch-day-2026-nologo.jpg";
				eventDatetimeRangeKey: "event_datetime_range_key_Riolu0426";
				eventEndTime: "2026-04-18T17:00:00";
				eventStartTime: "2026-04-18T11:00:00";
				giftable: true;
				giftItem: "ITEM_GLOBAL_EVENT_TICKET_TO_GIFT";
				iconRewards: [
					{
						item: {
							amount: 1;
							item: "ITEM_STAR_PIECE";
						};
						type: "ITEM";
					},
					{
						item: {
							amount: 2;
							item: "ITEM_INCUBATOR_SUPER";
						};
						type: "ITEM";
					},
					{
						exp: 10000;
						type: "EXPERIENCE";
					},
				];
				itemBagDescriptionKey: "item_event_ticket_evergreen_desc_Riolu0426";
				textRewardsKey: "text_rewards_key_Riolu0426";
			};
			itemType: "ITEM_TYPE_GLOBAL_EVENT_TICKET";
			nameOverride: "general1.ticket.4_Riolu0426_title";
		}
	>
>;
export type ItemSettingsItemGlobalEventTicketToGift = S<
	ItemSettings<
		"ITEM_GLOBAL_EVENT_TICKET_TO_GIFT",
		{
			category: "ITEM_CATEGORY_GLOBAL_EVENT_TICKET";
			descriptionOverride: "item_event_ticket_evergreen_details_Riolu0426";
			globalEventTicket: {
				clientEventEndTimeUtcMs: "1776531600000";
				clientEventStartTimeUtcMs: "1776510000000";
				eventBannerUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-riolu-hatch-day-2026-nologo.jpg";
				eventEndTime: "2026-04-18T17:00:00";
				eventStartTime: "2026-04-18T11:00:00";
				itemBagDescriptionKey: "item_event_ticket_evergreen_details_Riolu0426";
				ticketItem: "ITEM_GLOBAL_EVENT_TICKET";
			};
			ignoreInventorySpace: true;
			itemType: "ITEM_TYPE_GLOBAL_EVENT_TICKET";
			nameOverride: "general1.ticket.4_Riolu0426_title";
		}
	>
>;
export type ItemSettingsItemGoldenPinapBerry = S<
	ItemSettings<
		"ITEM_GOLDEN_PINAP_BERRY",
		{
			category: "ITEM_CATEGORY_FOOD";
			dropTrainerLevel: 20;
			food: {
				berryMultiplier: 2;
				growthPercent: 0.1;
				itemEffect: ["ITEM_EFFECT_CANDY_AWARD", "ITEM_EFFECT_CAP_CHANCE_SINGLE_THROW"];
				itemEffectPercent: [2.3334, 1.8];
				mapDurationMs: "10800000";
				numBuddyAffectionPoints: 2;
				numBuddyHungerPoints: 6;
				remoteBerryMultiplier: 0.5;
				timeFullDurationMs: "10800000";
			};
			itemType: "ITEM_TYPE_FOOD";
		}
	>
>;
export type ItemSettingsItemGoldenRazzBerry = S<
	ItemSettings<
		"ITEM_GOLDEN_RAZZ_BERRY",
		{
			category: "ITEM_CATEGORY_FOOD";
			dropTrainerLevel: 10;
			food: {
				berryMultiplier: 1;
				growthPercent: 0.1;
				itemEffect: ["ITEM_EFFECT_CAP_CHANCE_SINGLE_THROW", "ITEM_EFFECT_FULL_MOTIVATION"];
				itemEffectPercent: [2.5, 1];
				mapDurationMs: "10800000";
				numBuddyAffectionPoints: 2;
				numBuddyHungerPoints: 6;
				remoteBerryMultiplier: 1;
				timeFullDurationMs: "10800000";
			};
			itemType: "ITEM_TYPE_FOOD";
		}
	>
>;
export type ItemSettingsItemGreatBall = S<
	ItemSettings<
		"ITEM_GREAT_BALL",
		{
			category: "ITEM_CATEGORY_POKEBALL";
			dropTrainerLevel: 12;
			itemType: "ITEM_TYPE_POKEBALL";
		}
	>
>;
export type ItemSettingsItemHyperPotion = S<
	ItemSettings<
		"ITEM_HYPER_POTION",
		{
			category: "ITEM_CATEGORY_MEDICINE";
			dropTrainerLevel: 15;
			itemType: "ITEM_TYPE_POTION";
			potion: {
				staAmount: 200;
			};
		}
	>
>;
export type ItemSettingsItemIncenseBelugaBox = S<
	ItemSettings<
		"ITEM_INCENSE_BELUGA_BOX",
		{
			category: "ITEM_CATEGORY_INCENSE";
			dropTrainerLevel: 1;
			incense: {
				incenseLifetimeSeconds: 3600;
				spawnTableProbability: 1;
			};
			itemType: "ITEM_TYPE_INCENSE";
		}
	>
>;
export type ItemSettingsItemIncenseDailyAdventure = S<
	ItemSettings<
		"ITEM_INCENSE_DAILY_ADVENTURE",
		{
			category: "ITEM_CATEGORY_INCENSE";
			dropTrainerLevel: 6;
			ignoreInventorySpace: true;
			incense: {
				incenseLifetimeSeconds: 1800;
				spawnTableProbability: 0.25;
			};
			itemType: "ITEM_TYPE_INCENSE";
		}
	>
>;
export type ItemSettingsItemIncenseDayBonus = S<
	ItemSettings<
		"ITEM_INCENSE_DAY_BONUS",
		{
			category: "ITEM_CATEGORY_INCENSE";
			dropTrainerLevel: 1;
			ignoreInventorySpace: true;
			incense: {
				incenseLifetimeSeconds: 3600;
				spawnTableProbability: 1;
			};
			itemType: "ITEM_TYPE_INCENSE";
		}
	>
>;
export type ItemSettingsItemIncenseNightBonus = S<
	ItemSettings<
		"ITEM_INCENSE_NIGHT_BONUS",
		{
			category: "ITEM_CATEGORY_INCENSE";
			dropTrainerLevel: 1;
			ignoreInventorySpace: true;
			incense: {
				incenseLifetimeSeconds: 3600;
				spawnTableProbability: 1;
			};
			itemType: "ITEM_TYPE_INCENSE";
		}
	>
>;
export type ItemSettingsItemIncenseOrdinary = S<
	ItemSettings<
		"ITEM_INCENSE_ORDINARY",
		{
			category: "ITEM_CATEGORY_INCENSE";
			dropTrainerLevel: 1;
			incense: {
				incenseLifetimeSeconds: 3600;
			};
			itemType: "ITEM_TYPE_INCENSE";
		}
	>
>;
export type ItemSettingsItemIncenseSparkly = S<
	ItemSettings<
		"ITEM_INCENSE_SPARKLY",
		{
			category: "ITEM_CATEGORY_INCENSE";
			dropTrainerLevel: 1;
			incense: {
				incenseLifetimeSeconds: 1800;
				spawnTableProbability: 1;
			};
			itemType: "ITEM_TYPE_INCENSE";
		}
	>
>;
export type ItemSettingsItemIncubatorBasic = S<
	ItemSettings<
		"ITEM_INCUBATOR_BASIC",
		{
			category: "ITEM_CATEGORY_INCUBATOR";
			dropTrainerLevel: 1;
			eggIncubator: {
				distanceMultiplier: 1;
				incubatorType: "INCUBATOR_DISTANCE";
				uses: 3;
			};
			itemType: "ITEM_TYPE_INCUBATOR";
		}
	>
>;
export type ItemSettingsItemIncubatorBasicUnlimited = S<
	ItemSettings<
		"ITEM_INCUBATOR_BASIC_UNLIMITED",
		{
			category: "ITEM_CATEGORY_INCUBATOR";
			dropTrainerLevel: 100;
			eggIncubator: {
				distanceMultiplier: 1;
				incubatorType: "INCUBATOR_DISTANCE";
			};
			itemType: "ITEM_TYPE_INCUBATOR";
		}
	>
>;
export type ItemSettingsItemIncubatorSpecial = S<
	ItemSettings<
		"ITEM_INCUBATOR_SPECIAL",
		{
			category: "ITEM_CATEGORY_INCUBATOR";
			dropTrainerLevel: 15;
			eggIncubator: {
				distanceMultiplier: 1;
				incubatorType: "INCUBATOR_DISTANCE";
			};
			hideItemInInventory: true;
			ignoreInventorySpace: true;
			itemType: "ITEM_TYPE_INCUBATOR";
		}
	>
>;
export type ItemSettingsItemIncubatorSuper = S<
	ItemSettings<
		"ITEM_INCUBATOR_SUPER",
		{
			category: "ITEM_CATEGORY_INCUBATOR";
			dropTrainerLevel: 1;
			eggIncubator: {
				distanceMultiplier: 0.6666667;
				incubatorType: "INCUBATOR_DISTANCE";
				uses: 3;
			};
			itemType: "ITEM_TYPE_INCUBATOR";
		}
	>
>;
export type ItemSettingsItemIncubatorTimed = S<
	ItemSettings<
		"ITEM_INCUBATOR_TIMED",
		{
			category: "ITEM_CATEGORY_INCUBATOR";
			dropTrainerLevel: 100;
			eggIncubator: {
				distanceMultiplier: 1;
				expiredIncubatorReplacement: {
					incubatorReplacement: "ITEM_INCUBATOR_BASIC";
					usesCountOverride: 1;
				};
				incubatorType: "INCUBATOR_DISTANCE";
				maxHatchSummaryEntries: 10;
				useBonusIncubatorAttributes: true;
			};
			itemType: "ITEM_TYPE_INCUBATOR";
		}
	>
>;
export type ItemSettingsItemItemStorageUpgrade = S<
	ItemSettings<
		"ITEM_ITEM_STORAGE_UPGRADE",
		{
			category: "ITEM_CATEGORY_INVENTORY_UPGRADE";
			dropTrainerLevel: 100;
			inventoryUpgrade: {
				additionalStorage: 50;
				upgradeType: "INCREASE_ITEM_STORAGE";
			};
			itemType: "ITEM_TYPE_INVENTORY_UPGRADE";
		}
	>
>;
export type ItemSettingsItemKingsRock = S<
	ItemSettings<
		"ITEM_KINGS_ROCK",
		{
			category: "ITEM_CATEGORY_EVOLUTION_REQUIREMENT";
			dropTrainerLevel: 10;
			itemType: "ITEM_TYPE_EVOLUTION_REQUIREMENT";
		}
	>
>;
export type ItemSettingsItemLeaderMap = S<
	ItemSettings<
		"ITEM_LEADER_MAP",
		{
			category: "ITEM_CATEGORY_INCIDENT_TICKET";
			dropTrainerLevel: 8;
			incidentTicket: {
				ignoreFullInventory: true;
			};
			itemType: "ITEM_TYPE_INCIDENT_TICKET";
		}
	>
>;
export type ItemSettingsItemLeaderMapFragment = S<
	ItemSettings<
		"ITEM_LEADER_MAP_FRAGMENT",
		{
			category: "ITEM_CATEGORY_INCIDENT_TICKET";
			dropTrainerLevel: 8;
			incidentTicket: {
				upgradedItem: "ITEM_LEADER_MAP";
				upgradeRequirementCount: 6;
			};
			itemType: "ITEM_TYPE_INCIDENT_TICKET";
		}
	>
>;
export type ItemSettingsItemLuckyEgg = S<
	ItemSettings<
		"ITEM_LUCKY_EGG",
		{
			category: "ITEM_CATEGORY_XP_BOOST";
			dropTrainerLevel: 1;
			itemType: "ITEM_TYPE_XP_BOOST";
			xpBoost: {
				boostDurationMs: 1800000;
				xpMultiplier: 2;
			};
		}
	>
>;
export type ItemSettingsItemLuckyFriendApplicator = S<
	ItemSettings<
		"ITEM_LUCKY_FRIEND_APPLICATOR",
		{
			category: "ITEM_CATEGORY_XP_BOOST";
			itemType: "ITEM_TYPE_FRIEND_BOOST";
		}
	>
>;
export type ItemSettingsItemMasterBall = S<
	ItemSettings<
		"ITEM_MASTER_BALL",
		{
			category: "ITEM_CATEGORY_POKEBALL";
			dropTrainerLevel: 1;
			itemType: "ITEM_TYPE_POKEBALL";
		}
	>
>;
export type ItemSettingsItemMaxBoost = S<
	ItemSettings<
		"ITEM_MAX_BOOST",
		{
			category: "ITEM_CATEGORY_BOOST";
			dropTrainerLevel: 12;
			itemType: "ITEM_TYPE_BATTLE";
		}
	>
>;
export type ItemSettingsItemMaxPotion = S<
	ItemSettings<
		"ITEM_MAX_POTION",
		{
			category: "ITEM_CATEGORY_MEDICINE";
			dropTrainerLevel: 25;
			itemType: "ITEM_TYPE_POTION";
			potion: {
				staPercent: 1;
			};
		}
	>
>;
export type ItemSettingsItemMaxRevive = S<
	ItemSettings<
		"ITEM_MAX_REVIVE",
		{
			category: "ITEM_CATEGORY_MEDICINE";
			dropTrainerLevel: 30;
			itemType: "ITEM_TYPE_REVIVE";
			revive: {
				staPercent: 1;
			};
		}
	>
>;
export type ItemSettingsItemMetalCoat = S<
	ItemSettings<
		"ITEM_METAL_COAT",
		{
			category: "ITEM_CATEGORY_EVOLUTION_REQUIREMENT";
			dropTrainerLevel: 10;
			itemType: "ITEM_TYPE_EVOLUTION_REQUIREMENT";
		}
	>
>;
export type ItemSettingsItemMoveRerollEliteFastAttack = S<
	ItemSettings<
		"ITEM_MOVE_REROLL_ELITE_FAST_ATTACK",
		{
			category: "ITEM_CATEGORY_MOVE_REROLL";
			dropTrainerLevel: 1;
			itemType: "ITEM_TYPE_MOVE_REROLL";
		}
	>
>;
export type ItemSettingsItemMoveRerollEliteSpecialAttack = S<
	ItemSettings<
		"ITEM_MOVE_REROLL_ELITE_SPECIAL_ATTACK",
		{
			category: "ITEM_CATEGORY_MOVE_REROLL";
			dropTrainerLevel: 1;
			itemType: "ITEM_TYPE_MOVE_REROLL";
		}
	>
>;
export type ItemSettingsItemMoveRerollFastAttack = S<
	ItemSettings<
		"ITEM_MOVE_REROLL_FAST_ATTACK",
		{
			category: "ITEM_CATEGORY_MOVE_REROLL";
			dropTrainerLevel: 15;
			itemType: "ITEM_TYPE_MOVE_REROLL";
		}
	>
>;
export type ItemSettingsItemMoveRerollOtherSpecialAttackA = S<
	ItemSettings<
		"ITEM_MOVE_REROLL_OTHER_SPECIAL_ATTACK_A",
		{
			category: "ITEM_CATEGORY_MOVE_REROLL";
			ignoreInventorySpace: true;
			itemType: "ITEM_TYPE_MOVE_REROLL";
		}
	>
>;
export type ItemSettingsItemMoveRerollSpecialAttack = S<
	ItemSettings<
		"ITEM_MOVE_REROLL_SPECIAL_ATTACK",
		{
			category: "ITEM_CATEGORY_MOVE_REROLL";
			dropTrainerLevel: 25;
			itemType: "ITEM_TYPE_MOVE_REROLL";
		}
	>
>;
export type ItemSettingsItemMp = S<
	ItemSettings<
		"ITEM_MP",
		{
			category: "ITEM_CATEGORY_MP";
			dropTrainerLevel: 1;
			ignoreInventorySpace: true;
			itemType: "ITEM_TYPE_MP";
		}
	>
>;
export type ItemSettingsItemMpReplenish = S<
	ItemSettings<
		"ITEM_MP_REPLENISH",
		{
			category: "ITEM_CATEGORY_BREAD";
			dropTrainerLevel: 1;
			itemCap: 12;
			itemType: "ITEM_TYPE_MP_REPLENISH";
			replenishMp: {
				mpAmount: 800;
			};
		}
	>
>;
export type ItemSettingsItemNanabBerry = S<
	ItemSettings<
		"ITEM_NANAB_BERRY",
		{
			category: "ITEM_CATEGORY_FOOD";
			dropTrainerLevel: 4;
			food: {
				berryMultiplier: 1.25;
				growthPercent: 0.1;
				itemEffect: ["ITEM_EFFECT_CAP_TARGET_SLOW"];
				itemEffectPercent: [0];
				mapDurationMs: "3600000";
				numBuddyAffectionPoints: 1;
				numBuddyHungerPoints: 2;
				remoteBerryMultiplier: 0.3125;
				timeFullDurationMs: "3600000";
			};
			itemType: "ITEM_TYPE_FOOD";
		}
	>
>;
export type ItemSettingsItemOtherEvolutionStoneA = S<
	ItemSettings<
		"ITEM_OTHER_EVOLUTION_STONE_A",
		{
			category: "ITEM_CATEGORY_EVOLUTION_REQUIREMENT";
			dropTrainerLevel: 10;
			ignoreInventorySpace: true;
			itemCap: 9999;
			itemType: "ITEM_TYPE_EVOLUTION_REQUIREMENT";
		}
	>
>;
export type ItemSettingsItemOtherEvolutionStoneMapleA = S<
	ItemSettings<
		"ITEM_OTHER_EVOLUTION_STONE_MAPLE_A",
		{
			category: "ITEM_CATEGORY_EVOLUTION_REQUIREMENT";
			dropTrainerLevel: 10;
			hideItemInInventory: true;
			ignoreInventorySpace: true;
			itemType: "ITEM_TYPE_EVOLUTION_REQUIREMENT";
		}
	>
>;
export type ItemSettingsItemOtherEvolutionStoneMapleB = S<
	ItemSettings<
		"ITEM_OTHER_EVOLUTION_STONE_MAPLE_B",
		{
			category: "ITEM_CATEGORY_EVOLUTION_REQUIREMENT";
			dropTrainerLevel: 10;
			hideItemInInventory: true;
			ignoreInventorySpace: true;
			itemType: "ITEM_TYPE_EVOLUTION_REQUIREMENT";
		}
	>
>;
export type ItemSettingsItemOtherEvolutionStoneMapleC = S<
	ItemSettings<
		"ITEM_OTHER_EVOLUTION_STONE_MAPLE_C",
		{
			category: "ITEM_CATEGORY_EVOLUTION_REQUIREMENT";
			dropTrainerLevel: 10;
			hideItemInInventory: true;
			ignoreInventorySpace: true;
			itemType: "ITEM_TYPE_EVOLUTION_REQUIREMENT";
		}
	>
>;
export type ItemSettingsItemPaidRaidTicket = S<
	ItemSettings<
		"ITEM_PAID_RAID_TICKET",
		{
			category: "ITEM_CATEGORY_RAID_TICKET";
			dropTrainerLevel: 1;
			itemType: "ITEM_TYPE_RAID_TICKET";
		}
	>
>;
export type ItemSettingsItemPinapBerry = S<
	ItemSettings<
		"ITEM_PINAP_BERRY",
		{
			category: "ITEM_CATEGORY_FOOD";
			dropTrainerLevel: 18;
			food: {
				berryMultiplier: 1;
				growthPercent: 0.1;
				itemEffect: ["ITEM_EFFECT_CANDY_AWARD"];
				itemEffectPercent: [2];
				mapDurationMs: "3600000";
				numBuddyAffectionPoints: 1;
				numBuddyHungerPoints: 2;
				remoteBerryMultiplier: 0.25;
				timeFullDurationMs: "3600000";
			};
			itemType: "ITEM_TYPE_FOOD";
		}
	>
>;
export type ItemSettingsItemPoffin = S<
	ItemSettings<
		"ITEM_POFFIN",
		{
			category: "ITEM_CATEGORY_BUDDY_EXCLUSIVE_FOOD";
			food: {
				mapDurationMs: "21600000";
				numBuddyAffectionPoints: 1;
				numBuddyHungerPoints: 6;
				timeFullDurationMs: "21600000";
			};
			itemType: "ITEM_TYPE_FOOD";
		}
	>
>;
export type ItemSettingsItemPokemonStorageUpgrade = S<
	ItemSettings<
		"ITEM_POKEMON_STORAGE_UPGRADE",
		{
			category: "ITEM_CATEGORY_INVENTORY_UPGRADE";
			dropTrainerLevel: 100;
			inventoryUpgrade: {
				additionalStorage: 50;
				upgradeType: "INCREASE_POKEMON_STORAGE";
			};
			itemType: "ITEM_TYPE_INVENTORY_UPGRADE";
		}
	>
>;
export type ItemSettingsItemPokeBall = S<
	ItemSettings<
		"ITEM_POKE_BALL",
		{
			category: "ITEM_CATEGORY_POKEBALL";
			dropTrainerLevel: 1;
			itemType: "ITEM_TYPE_POKEBALL";
		}
	>
>;
export type ItemSettingsItemPostcardInventory = S<
	ItemSettings<
		"ITEM_POSTCARD_INVENTORY",
		{
			category: "ITEM_CATEGORY_POSTCARD_INVENTORY";
			descriptionOverride: "item_postcard_inventory_desc_stamp";
			dropTrainerLevel: 100;
			itemType: "ITEM_TYPE_POSTCARD_INVENTORY";
			nameOverride: "item_postcard_inventory_name_stamp";
		}
	>
>;
export type ItemSettingsItemPostcardStorageUpgrade = S<
	ItemSettings<
		"ITEM_POSTCARD_STORAGE_UPGRADE",
		{
			category: "ITEM_CATEGORY_INVENTORY_UPGRADE";
			dropTrainerLevel: 100;
			inventoryUpgrade: {
				additionalStorage: 50;
				upgradeType: "INCREASE_POSTCARD_STORAGE";
			};
			itemType: "ITEM_TYPE_INVENTORY_UPGRADE";
		}
	>
>;
export type ItemSettingsItemPotion = S<
	ItemSettings<
		"ITEM_POTION",
		{
			category: "ITEM_CATEGORY_MEDICINE";
			dropTrainerLevel: 5;
			itemType: "ITEM_TYPE_POTION";
			potion: {
				staAmount: 20;
			};
		}
	>
>;
export type ItemSettingsItemPremierBall = S<
	ItemSettings<
		"ITEM_PREMIER_BALL",
		{
			category: "ITEM_CATEGORY_POKEBALL";
			dropTrainerLevel: 100;
			itemType: "ITEM_TYPE_POKEBALL";
		}
	>
>;
export type ItemSettingsItemRareCandy = S<
	ItemSettings<
		"ITEM_RARE_CANDY",
		{
			category: "ITEM_CATEGORY_CANDY";
			dropTrainerLevel: 5;
			itemType: "ITEM_TYPE_CANDY";
		}
	>
>;
export type ItemSettingsItemRazzBerry = S<
	ItemSettings<
		"ITEM_RAZZ_BERRY",
		{
			category: "ITEM_CATEGORY_FOOD";
			dropTrainerLevel: 8;
			food: {
				berryMultiplier: 1;
				growthPercent: 0.1;
				itemEffect: ["ITEM_EFFECT_CAP_CHANCE_SINGLE_THROW"];
				itemEffectPercent: [1.5];
				mapDurationMs: "3600000";
				numBuddyAffectionPoints: 1;
				numBuddyHungerPoints: 2;
				remoteBerryMultiplier: 0.25;
				timeFullDurationMs: "3600000";
			};
			itemType: "ITEM_TYPE_FOOD";
		}
	>
>;
export type ItemSettingsItemRemoteRaidTicket = S<
	ItemSettings<
		"ITEM_REMOTE_RAID_TICKET",
		{
			category: "ITEM_CATEGORY_RAID_TICKET";
			dropTrainerLevel: 5;
			itemType: "ITEM_TYPE_RAID_TICKET";
		}
	>
>;
export type ItemSettingsItemResourceCrownedZacian = S<
	ItemSettings<
		"ITEM_RESOURCE_CROWNED_ZACIAN",
		{
			category: "ITEM_CATEGORY_EVOLUTION_REQUIREMENT";
			dropTrainerLevel: 1;
			hideItemInInventory: true;
			ignoreInventorySpace: true;
			itemCap: 10000;
			itemType: "ITEM_TYPE_EVOLUTION_REQUIREMENT";
		}
	>
>;
export type ItemSettingsItemResourceCrownedZamazenta = S<
	ItemSettings<
		"ITEM_RESOURCE_CROWNED_ZAMAZENTA",
		{
			category: "ITEM_CATEGORY_EVOLUTION_REQUIREMENT";
			dropTrainerLevel: 1;
			hideItemInInventory: true;
			ignoreInventorySpace: true;
			itemCap: 10000;
			itemType: "ITEM_TYPE_EVOLUTION_REQUIREMENT";
		}
	>
>;
export type ItemSettingsItemRevive = S<
	ItemSettings<
		"ITEM_REVIVE",
		{
			category: "ITEM_CATEGORY_MEDICINE";
			dropTrainerLevel: 5;
			itemType: "ITEM_TYPE_REVIVE";
			revive: {
				staPercent: 0.5;
			};
		}
	>
>;
export type ItemSettingsItemRouteMaker = S<
	ItemSettings<
		"ITEM_ROUTE_MAKER",
		{
			category: "ITEM_CATEGORY_ROUTE_MAKER";
			dropTrainerLevel: 100;
			itemType: "ITEM_TYPE_ROUTE_MAKER";
		}
	>
>;
export type ItemSettingsItemShadowGem = S<
	ItemSettings<
		"ITEM_SHADOW_GEM",
		{
			category: "ITEM_CATEGORY_INCIDENT_TICKET";
			dropTrainerLevel: 100;
			incidentTicket: {
				ignoreFullInventory: true;
			};
			itemType: "ITEM_TYPE_INCIDENT_TICKET";
		}
	>
>;
export type ItemSettingsItemShadowGemFragment = S<
	ItemSettings<
		"ITEM_SHADOW_GEM_FRAGMENT",
		{
			category: "ITEM_CATEGORY_INCIDENT_TICKET";
			dropTrainerLevel: 5;
			incidentTicket: {
				upgradedItem: "ITEM_SHADOW_GEM";
				upgradeRequirementCount: 4;
			};
			itemType: "ITEM_TYPE_INCIDENT_TICKET";
		}
	>
>;
export type ItemSettingsItemSingleStatIncrease = S<
	ItemSettings<
		"ITEM_SINGLE_STAT_INCREASE",
		{
			category: "ITEM_CATEGORY_STAT_INCREASE";
			ignoreInventorySpace: true;
			itemType: "ITEM_TYPE_STAT_INCREASE";
			statIncrease: {
				statsToIncreaseLimit: 1;
			};
		}
	>
>;
export type ItemSettingsItemSoftSfida = S<
	ItemSettings<
		"ITEM_SOFT_SFIDA",
		{
			category: "ITEM_CATEGORY_UTILITES";
			dropTrainerLevel: 99;
			ignoreInventorySpace: true;
			itemType: "ITEM_TYPE_SOFT_SFIDA";
		}
	>
>;
export type ItemSettingsItemSpecialCamera = S<
	ItemSettings<
		"ITEM_SPECIAL_CAMERA",
		{
			category: "ITEM_CATEGORY_CAMERA";
			dropTrainerLevel: 100;
			ignoreInventorySpace: true;
			itemType: "ITEM_TYPE_CAMERA";
		}
	>
>;
export type ItemSettingsItemStarPiece = S<
	ItemSettings<
		"ITEM_STAR_PIECE",
		{
			category: "ITEM_CATEGORY_STARDUST_BOOST";
			dropTrainerLevel: 1;
			itemType: "ITEM_TYPE_STARDUST_BOOST";
			stardustBoost: {
				boostDurationMs: 1800000;
				stardustMultiplier: 1.5;
			};
		}
	>
>;
export type ItemSettingsItemStickerInventory = S<
	ItemSettings<
		"ITEM_STICKER_INVENTORY",
		{
			category: "ITEM_CATEGORY_STICKER";
			dropTrainerLevel: 100;
			itemType: "ITEM_TYPE_STICKER_INVENTORY";
		}
	>
>;
export type ItemSettingsItemSunStone = S<
	ItemSettings<
		"ITEM_SUN_STONE",
		{
			category: "ITEM_CATEGORY_EVOLUTION_REQUIREMENT";
			dropTrainerLevel: 10;
			itemType: "ITEM_TYPE_EVOLUTION_REQUIREMENT";
		}
	>
>;
export type ItemSettingsItemSuperPotion = S<
	ItemSettings<
		"ITEM_SUPER_POTION",
		{
			category: "ITEM_CATEGORY_MEDICINE";
			dropTrainerLevel: 10;
			itemType: "ITEM_TYPE_POTION";
			potion: {
				staAmount: 50;
			};
		}
	>
>;
export type ItemSettingsItemTeamChange = S<
	ItemSettings<
		"ITEM_TEAM_CHANGE",
		{
			category: "ITEM_CATEGORY_TEAM_CHANGE";
			dropTrainerLevel: 100;
			itemType: "ITEM_TYPE_TEAM_CHANGE";
		}
	>
>;
export type ItemSettingsItemTicketCitySafari00 = S<
	ItemSettings<
		"ITEM_TICKET_CITY_SAFARI_00",
		{
			category: "ITEM_CATEGORY_GLOBAL_EVENT_TICKET";
			globalEventTicket: {
				clientEventEndTimeUtcMs: "1728424800000";
				clientEventStartTimeUtcMs: "1696845600000";
				eventEndTime: "2024-10-08T22:00:00";
				eventStartTime: "2023-10-09T10:00:00";
				itemBagDescriptionKey: "item_ticket_city_safari_00_desc";
			};
			itemType: "ITEM_TYPE_GLOBAL_EVENT_TICKET";
		}
	>
>;
export type ItemSettingsItemTicketCitySafari01 = S<
	ItemSettings<
		"ITEM_TICKET_CITY_SAFARI_01",
		{
			category: "ITEM_CATEGORY_GLOBAL_EVENT_TICKET";
			globalEventTicket: {
				clientEventEndTimeUtcMs: "1728943200000";
				clientEventStartTimeUtcMs: "1697364000000";
				eventEndTime: "2024-10-14T22:00:00";
				eventStartTime: "2023-10-15T10:00:00";
				itemBagDescriptionKey: "item_ticket_city_safari_01_desc";
			};
			itemType: "ITEM_TYPE_GLOBAL_EVENT_TICKET";
		}
	>
>;
export type ItemSettingsItemTicketCitySafari02 = S<
	ItemSettings<
		"ITEM_TICKET_CITY_SAFARI_02",
		{
			category: "ITEM_CATEGORY_GLOBAL_EVENT_TICKET";
			globalEventTicket: {
				clientEventEndTimeUtcMs: "1730844000000";
				clientEventStartTimeUtcMs: "1699264800000";
				eventEndTime: "2024-11-05T22:00:00";
				eventStartTime: "2023-11-06T10:00:00";
				itemBagDescriptionKey: "item_ticket_city_safari_02_desc";
			};
			itemType: "ITEM_TYPE_GLOBAL_EVENT_TICKET";
		}
	>
>;
export type ItemSettingsItemTicketCitySafari04 = S<
	ItemSettings<
		"ITEM_TICKET_CITY_SAFARI_04",
		{
			category: "ITEM_CATEGORY_GLOBAL_EVENT_TICKET";
			descriptionOverride: "item_event_ticket_evergreen_details_GOWA2024GSBEA";
			globalEventTicket: {
				clientEventEndTimeUtcMs: "1732472100000";
				clientEventStartTimeUtcMs: "1732356000000";
				eventEndTime: "2024-11-24T18:15:00";
				eventStartTime: "2024-11-23T10:00:00";
				itemBagDescriptionKey: "item_event_ticket_evergreen_desc_GOWA2024GSBEA";
			};
			ignoreInventorySpace: true;
			itemType: "ITEM_TYPE_GLOBAL_EVENT_TICKET";
			nameOverride: "general1.ticket._GOWA2024GSBEA_title";
		}
	>
>;
export type ItemSettingsItemTripleStatIncrease = S<
	ItemSettings<
		"ITEM_TRIPLE_STAT_INCREASE",
		{
			category: "ITEM_CATEGORY_STAT_INCREASE";
			ignoreInventorySpace: true;
			itemType: "ITEM_TYPE_STAT_INCREASE";
			statIncrease: {
				statsToIncreaseLimit: 3;
			};
		}
	>
>;
export type ItemSettingsItemTroyDisk = S<
	ItemSettings<
		"ITEM_TROY_DISK",
		{
			category: "ITEM_CATEGORY_DISK";
			dropTrainerLevel: 1;
			itemType: "ITEM_TYPE_DISK";
		}
	>
>;
export type ItemSettingsItemTroyDiskGlacial = S<
	ItemSettings<
		"ITEM_TROY_DISK_GLACIAL",
		{
			category: "ITEM_CATEGORY_DISK";
			dropTrainerLevel: 1;
			itemType: "ITEM_TYPE_DISK";
		}
	>
>;
export type ItemSettingsItemTroyDiskMagnetic = S<
	ItemSettings<
		"ITEM_TROY_DISK_MAGNETIC",
		{
			category: "ITEM_CATEGORY_DISK";
			dropTrainerLevel: 1;
			itemType: "ITEM_TYPE_DISK";
		}
	>
>;
export type ItemSettingsItemTroyDiskMossy = S<
	ItemSettings<
		"ITEM_TROY_DISK_MOSSY",
		{
			category: "ITEM_CATEGORY_DISK";
			dropTrainerLevel: 1;
			itemType: "ITEM_TYPE_DISK";
		}
	>
>;
export type ItemSettingsItemTroyDiskRainy = S<
	ItemSettings<
		"ITEM_TROY_DISK_RAINY",
		{
			category: "ITEM_CATEGORY_DISK";
			dropTrainerLevel: 1;
			itemType: "ITEM_TYPE_DISK";
		}
	>
>;
export type ItemSettingsItemTroyDiskSparkly = S<
	ItemSettings<
		"ITEM_TROY_DISK_SPARKLY",
		{
			category: "ITEM_CATEGORY_DISK";
			dropTrainerLevel: 1;
			itemCap: 1;
			itemType: "ITEM_TYPE_DISK";
		}
	>
>;
export type ItemSettingsItemUltraBall = S<
	ItemSettings<
		"ITEM_ULTRA_BALL",
		{
			category: "ITEM_CATEGORY_POKEBALL";
			dropTrainerLevel: 20;
			itemType: "ITEM_TYPE_POKEBALL";
		}
	>
>;
export type ItemSettingsItemUpGrade = S<
	ItemSettings<
		"ITEM_UP_GRADE",
		{
			category: "ITEM_CATEGORY_EVOLUTION_REQUIREMENT";
			dropTrainerLevel: 10;
			itemType: "ITEM_TYPE_EVOLUTION_REQUIREMENT";
		}
	>
>;
export type ItemSettingsItemWeparBerry = S<
	ItemSettings<
		"ITEM_WEPAR_BERRY",
		{
			category: "ITEM_CATEGORY_FOOD";
			dropTrainerLevel: 100;
			food: {
				growthPercent: 0.1;
				itemEffect: ["ITEM_EFFECT_CAP_TARGET_MAX"];
				itemEffectPercent: [1];
			};
			itemType: "ITEM_TYPE_FOOD";
		}
	>
>;
export type ItemSettingsItemWildBall = S<
	ItemSettings<
		"ITEM_WILD_BALL",
		{
			category: "ITEM_CATEGORY_POKEBALL";
			dropTrainerLevel: 1;
			itemType: "ITEM_TYPE_POKEBALL";
		}
	>
>;
export type ItemSettingsItemWildBallPremier = S<
	ItemSettings<
		"ITEM_WILD_BALL_PREMIER",
		{
			category: "ITEM_CATEGORY_POKEBALL";
			dropTrainerLevel: 1;
			itemType: "ITEM_TYPE_POKEBALL";
		}
	>
>;
export type ItemSettingsItemXlRareCandy = S<
	ItemSettings<
		"ITEM_XL_RARE_CANDY",
		{
			category: "ITEM_CATEGORY_CANDY";
			dropTrainerLevel: 31;
			itemType: "ITEM_TYPE_CANDY";
		}
	>
>;
export type ItemSettingsItemXAttack = S<
	ItemSettings<
		"ITEM_X_ATTACK",
		{
			category: "ITEM_CATEGORY_BOOST";
			dropTrainerLevel: 100;
			itemType: "ITEM_TYPE_BATTLE";
		}
	>
>;
export type ItemSettingsItemXDefense = S<
	ItemSettings<
		"ITEM_X_DEFENSE",
		{
			category: "ITEM_CATEGORY_BOOST";
			dropTrainerLevel: 100;
			itemType: "ITEM_TYPE_BATTLE";
		}
	>
>;
export type ItemSettingsItemXMiracle = S<
	ItemSettings<
		"ITEM_X_MIRACLE",
		{
			category: "ITEM_CATEGORY_BOOST";
			dropTrainerLevel: 100;
			itemType: "ITEM_TYPE_BATTLE";
		}
	>
>;

export type ItemSettingsMasterfileEntry =
	| ItemSettingsFusionResourceBlackKyurem
	| ItemSettingsFusionResourceDawnwingsNecrozma
	| ItemSettingsFusionResourceDuskmaneNecrozma
	| ItemSettingsFusionResourceWhiteKyurem
	| ItemSettingsItemBattlePassTicket
	| ItemSettingsItemBeans
	| ItemSettingsItemBeastBall
	| ItemSettingsItemBlukBerry
	| ItemSettingsItemBreakfast
	| ItemSettingsItemDragonScale
	| ItemSettingsItemEnhancedCurrency
	| ItemSettingsItemEnhancedCurrencyHolder
	| ItemSettingsItemEventPassPointGoFest01
	| ItemSettingsItemEventPassPointGoFest02
	| ItemSettingsItemEventPassPointGoTour01
	| ItemSettingsItemEventPassPointGoTour02
	| ItemSettingsItemEventPassPointGoWildArea01
	| ItemSettingsItemEventPassPointLiveOps01
	| ItemSettingsItemEventPassPointLiveOps02
	| ItemSettingsItemEventPassPointLiveOps03
	| ItemSettingsItemEventPassPointLiveOps04
	| ItemSettingsItemEventPassPointLiveOps05
	| ItemSettingsItemEventPassPointLiveOps06
	| ItemSettingsItemEventPassPointLiveOps07
	| ItemSettingsItemEventPassPointLiveOps08
	| ItemSettingsItemEventPassPointMonthly01
	| ItemSettingsItemEventPassPointMonthly02
	| ItemSettingsItemEventPassPointMonthly03
	| ItemSettingsItemEventTicket02
	| ItemSettingsItemEventTicket02ToGift
	| ItemSettingsItemEventTicket03
	| ItemSettingsItemEventTicket03ToGift
	| ItemSettingsItemEventTicket04
	| ItemSettingsItemEventTicket04ToGift
	| ItemSettingsItemEventTicket05
	| ItemSettingsItemEventTicket05ToGift
	| ItemSettingsItemEventTicket06
	| ItemSettingsItemEventTicket06ToGift
	| ItemSettingsItemEventTicket07
	| ItemSettingsItemEventTicket07ToGift
	| ItemSettingsItemEventTicket08
	| ItemSettingsItemEventTicket08ToGift
	| ItemSettingsItemEventTicket09
	| ItemSettingsItemEventTicket09ToGift
	| ItemSettingsItemEventTicket10
	| ItemSettingsItemEventTicket10ToGift
	| ItemSettingsItemEventTicketGray
	| ItemSettingsItemEventTicketPink
	| ItemSettingsItemEventTicketPinkToGift
	| ItemSettingsItemEvergreenTicket
	| ItemSettingsItemEvergreenTicketToGift
	| ItemSettingsItemFreeRaidTicket
	| ItemSettingsItemFriendGiftBox
	| ItemSettingsItemGen4EvolutionStone
	| ItemSettingsItemGen5EvolutionStone
	| ItemSettingsItemGiovanniMap
	| ItemSettingsItemGlobalEventTicket
	| ItemSettingsItemGlobalEventTicketToGift
	| ItemSettingsItemGoldenPinapBerry
	| ItemSettingsItemGoldenRazzBerry
	| ItemSettingsItemGreatBall
	| ItemSettingsItemHyperPotion
	| ItemSettingsItemIncenseBelugaBox
	| ItemSettingsItemIncenseDailyAdventure
	| ItemSettingsItemIncenseDayBonus
	| ItemSettingsItemIncenseNightBonus
	| ItemSettingsItemIncenseOrdinary
	| ItemSettingsItemIncenseSparkly
	| ItemSettingsItemIncubatorBasic
	| ItemSettingsItemIncubatorBasicUnlimited
	| ItemSettingsItemIncubatorSpecial
	| ItemSettingsItemIncubatorSuper
	| ItemSettingsItemIncubatorTimed
	| ItemSettingsItemItemStorageUpgrade
	| ItemSettingsItemKingsRock
	| ItemSettingsItemLeaderMap
	| ItemSettingsItemLeaderMapFragment
	| ItemSettingsItemLuckyEgg
	| ItemSettingsItemLuckyFriendApplicator
	| ItemSettingsItemMasterBall
	| ItemSettingsItemMaxBoost
	| ItemSettingsItemMaxPotion
	| ItemSettingsItemMaxRevive
	| ItemSettingsItemMetalCoat
	| ItemSettingsItemMoveRerollEliteFastAttack
	| ItemSettingsItemMoveRerollEliteSpecialAttack
	| ItemSettingsItemMoveRerollFastAttack
	| ItemSettingsItemMoveRerollOtherSpecialAttackA
	| ItemSettingsItemMoveRerollSpecialAttack
	| ItemSettingsItemMp
	| ItemSettingsItemMpReplenish
	| ItemSettingsItemNanabBerry
	| ItemSettingsItemOtherEvolutionStoneA
	| ItemSettingsItemOtherEvolutionStoneMapleA
	| ItemSettingsItemOtherEvolutionStoneMapleB
	| ItemSettingsItemOtherEvolutionStoneMapleC
	| ItemSettingsItemPaidRaidTicket
	| ItemSettingsItemPinapBerry
	| ItemSettingsItemPoffin
	| ItemSettingsItemPokemonStorageUpgrade
	| ItemSettingsItemPokeBall
	| ItemSettingsItemPostcardInventory
	| ItemSettingsItemPostcardStorageUpgrade
	| ItemSettingsItemPotion
	| ItemSettingsItemPremierBall
	| ItemSettingsItemRareCandy
	| ItemSettingsItemRazzBerry
	| ItemSettingsItemRemoteRaidTicket
	| ItemSettingsItemResourceCrownedZacian
	| ItemSettingsItemResourceCrownedZamazenta
	| ItemSettingsItemRevive
	| ItemSettingsItemRouteMaker
	| ItemSettingsItemShadowGem
	| ItemSettingsItemShadowGemFragment
	| ItemSettingsItemSingleStatIncrease
	| ItemSettingsItemSoftSfida
	| ItemSettingsItemSpecialCamera
	| ItemSettingsItemStarPiece
	| ItemSettingsItemStickerInventory
	| ItemSettingsItemSunStone
	| ItemSettingsItemSuperPotion
	| ItemSettingsItemTeamChange
	| ItemSettingsItemTicketCitySafari00
	| ItemSettingsItemTicketCitySafari01
	| ItemSettingsItemTicketCitySafari02
	| ItemSettingsItemTicketCitySafari04
	| ItemSettingsItemTripleStatIncrease
	| ItemSettingsItemTroyDisk
	| ItemSettingsItemTroyDiskGlacial
	| ItemSettingsItemTroyDiskMagnetic
	| ItemSettingsItemTroyDiskMossy
	| ItemSettingsItemTroyDiskRainy
	| ItemSettingsItemTroyDiskSparkly
	| ItemSettingsItemUltraBall
	| ItemSettingsItemUpGrade
	| ItemSettingsItemWeparBerry
	| ItemSettingsItemWildBall
	| ItemSettingsItemWildBallPremier
	| ItemSettingsItemXlRareCandy
	| ItemSettingsItemXAttack
	| ItemSettingsItemXDefense
	| ItemSettingsItemXMiracle;

export type ItemSettingsTemplateID = ItemSettingsMasterfileEntry["templateId"];
