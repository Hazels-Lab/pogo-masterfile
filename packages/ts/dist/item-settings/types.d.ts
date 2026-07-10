// Generated from Pokémon GO masterfile — group "itemSettings", 151 entries (structural types).

import type { W } from "../_utils";

export interface ItemSettings<TemplateID extends string = string, TData extends ItemSettingsData = ItemSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		itemSettings: TData;
	};
}
export type ItemSettingsType = W<ItemSettings>;

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
		| "item_event_ticket_06_desc_ENTEI_SHADOW_RAID_DAY"
		| "item_event_ticket_06_desc_REPLAY_GO_BIGGER"
		| "item_event_ticket_07_desc_masterball25"
		| "item_event_ticket_07_details_masterball25"
		| "ITEM_EVENT_TICKET_09_desc_fashionRaidDay26"
		| "ITEM_EVENT_TICKET_09_details_fashionRaidDay26"
		| "item_event_ticket_evergreen_desc_10THPARTY0726"
		| "item_event_ticket_evergreen_desc_IntoTDepths26"
		| "item_event_ticket_evergreen_desc_PawPrint_20250620"
		| "item_event_ticket_evergreen_desc_Riolu0426"
		| "item_event_ticket_evergreen_details_GOWA2024GSBEA"
		| "item_event_ticket_evergreen_details_IntoTDepths26"
		| "item_event_ticket_evergreen_details_Riolu0426"
		| "item_event_ticket_gray_desc_FinalJustice2025"
		| "item_event_ticket_gray_desc_MegaFalinksRaidDay"
		| "item_event_ticket_gray_desc_MegaRaichuRaidDay"
		| "item_event_ticket_gray_desc_MegaSkarmoryRaidDay"
		| "item_event_ticket_pink_details_CD_Frigibax26"
		| "item_event_ticket_pink_details_CD_Sobble26"
		| "item_event_ticket_pink_details_CDC_Deino26"
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
			| "EVENT_PASS_AFTERPARTY2026_EVENT"
			| "EVENT_PASS_AMER2026_EVENT"
			| "EVENT_PASS_BLANCHE2026_EVENT"
			| "EVENT_PASS_EMEA2026_EVENT"
			| "EVENT_PASS_FLYINGTAXI2026_EVENT"
			| "EVENT_PASS_GOFEST2025_MAXFINALE"
			| "EVENT_PASS_GOFEST2026_GLOBAL"
			| "EVENT_PASS_GOTOUR2026_GLOBAL"
			| "EVENT_PASS_GOTOUR2026_IRL"
			| "EVENT_PASS_GOWA_2025"
			| "EVENT_PASS_JULY2026_SEASON"
			| "EVENT_PASS_JUNE2026_SEASON"
			| "EVENT_PASS_MAY2026_SEASON"
			| "EVENT_PASS_PIKACHU_CELEBRATION_2026_EVENT"
			| "EVENT_PASS_SPRINGMARATHON2026_EVENT"
			| "EVENT_PASS_STEELEDRESOLVE2026_EVENT";
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
		mapDurationMs?: "3600000" | "10800000" | "21600000";
		numBuddyAffectionPoints?: number;
		numBuddyHungerPoints?: number;
		remoteBerryMultiplier?: number;
		timeFullDurationMs?: "3600000" | "10800000" | "21600000";
	};
	globalEventTicket?: {
		backgroundImageUrl?:
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2F97c2eaee_PGO-MCS_Raichu_Super_Mega_Raid_Day_v3-1024x576-nologo.jpg"
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2F20260113_pgo_s22_oricorio_1024x576_nologo.jpg"
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Fgo_tour_kalos_1024x512_logoless.jpg"
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2FPGO_MCS_CD_KeyArt_Frigibax_v1-1024x576-nologo.jpg"
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Fpgo-deino-community-day-classic-2026-nologo.jpg"
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Fpgo-fashion-raid-day-2026-nologo.jpg"
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Fpgo-gmax-kanto-max-battle-day-2026-nologo.jpg"
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2FPGO-MCS_Into_The_Depths_LiveOp_2026_v3-1024x576-nologo.jpg"
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2FPGO-MCS_Mega_Falinks_Raid_Day_v3-1024x576-nologo.jpg"
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2FPGO-MCS_Shiny_Keldeo_KeyArt_v1-1024x576-nologo.jpg"
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Fpgo-replay-water-research-day-2026-nologo.jpg"
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Fpgo-riolu-hatch-day-2026-nologo.jpg"
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Fpgo-yampers-paw-prints-ticket-nologo-2025.jpg"
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2F3b085206_PGO-MCS_10th_Anniversary_Celebration_TICKET_v2-1024x576.jpg"
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2F9398cb22_PGO-MCS_Skarmory_Super_Mega_Raid_Day_v4-1024x576.jpg"
			| "https://storage.googleapis.com/prod-public-images/1054x512.jpg"
			| "https://storage.googleapis.com/prod-public-images/masterball-keyart.png"
			| "https://storage.googleapis.com/prod-public-images/pink-ticket-generic1024x512.jpg";
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
			| "1775322000000"
			| "1776531600000"
			| "1777136400000"
			| "1777741200000"
			| "1778950800000"
			| "1779555600000"
			| "1781604000000"
			| "1781974800000"
			| "1782579600000"
			| "1783184400000"
			| "1783368000000"
			| "1784394000000";
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
			| "1774101600000"
			| "1775311200000"
			| "1776510000000"
			| "1777125600000"
			| "1777730400000"
			| "1778940000000"
			| "1779544800000"
			| "1780405200000"
			| "1781964000000"
			| "1782568800000"
			| "1783159200000"
			| "1783173600000"
			| "1784383200000";
		detailsLinkKey?:
			| "details_link_key"
			| "details_link_key_10th_anniversary"
			| "details_link_key_ENTEI_SHADOW_RAID_DAY"
			| "details_link_key_fashion_raid_day"
			| "details_link_key_mega_falinks_raid_day"
			| "details_link_key_mega_skarmory_raid_day"
			| "details_link_key_MegaRaichuRaidDay"
			| "details_link_key_ORICORIO_MASTERY_FEB2026"
			| "details_link_key_REPLAY_GO_BIGGER_MAX_BATTLE"
			| "details_link_key_Riolu_Hatch0426"
			| "item_event_ticket_evergreen_details_PawPrint_20250620"
			| "item_global_event_ticket_details_GOTour2026";
		displayV2Enabled?: boolean;
		eventBadge?: "BADGE_GO_TOUR_2026_GLOBAL";
		eventBannerUrl?:
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2F97c2eaee_PGO-MCS_Raichu_Super_Mega_Raid_Day_v3-1024x576-nologo.jpg"
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2F20260113_pgo_s22_oricorio_1024x576_nologo.jpg"
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Fgo_tour_kalos_1024x512.jpg"
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2FPGO_MCS_CD_KeyArt_Frigibax_v1-1024x576-nologo.jpg"
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2FPGO_MCS_MasterBall_KeyArt_TK_GP_V2_S14_1024x512_nologo.jpg"
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Fpgo-deino-community-day-classic-2026-nologo.jpg"
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Fpgo-entei-shadow-raid-day-2026-nologo.jpg"
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Fpgo-fashion-raid-day-2026-nologo.jpg"
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Fpgo-gmax-kanto-max-battle-day-2026-nologo.jpg"
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2FPGO-MCS_Into_The_Depths_LiveOp_2026_v3-1024x576-nologo.jpg"
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2FPGO-MCS_Mega_Falinks_Raid_Day_v3-1024x576-nologo.jpg"
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2FPGO-MCS_Shiny_Keldeo_KeyArt_v1-1024x576-nologo.jpg"
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Fpgo-replay-water-research-day-2026-nologo.jpg"
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Fpgo-riolu-hatch-day-2026-nologo.jpg"
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Fpgo-s22-gbl-nologo-2026.jpg"
			| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Fpgo-yampers-paw-prints-ticket-nologo-2025.jpg"
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2F3b085206_PGO-MCS_10th_Anniversary_Celebration_TICKET_v2-1024x576.jpg"
			| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2F9398cb22_PGO-MCS_Skarmory_Super_Mega_Raid_Day_v4-1024x576.jpg"
			| "https://storage.googleapis.com/prod-public-images/1024x512.jpg";
		eventDatetimeRangeKey?:
			| "event_datetime_range_key_10THPARTY0726"
			| "event_datetime_range_key_CATCH_MASTERY_ORICORIO"
			| "event_datetime_range_key_CD_Frigibax26"
			| "event_datetime_range_key_CD_Sobble26"
			| "event_datetime_range_key_CDC_Deino26"
			| "event_datetime_range_key_ENTEI_SHADOW_RAID_DAY"
			| "event_datetime_range_key_fashionRaidDay_s22"
			| "event_datetime_range_key_FinalJustice2025"
			| "event_datetime_range_key_GOTour2026"
			| "event_datetime_range_key_IntoTDepths26"
			| "event_datetime_range_key_MegaFalinksRaidDay"
			| "event_datetime_range_key_MegaRaichuRaidDay"
			| "event_datetime_range_key_MegaSkarmoryRaidDay"
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
			| "2026-04-04T17:00:00"
			| "2026-04-18T17:00:00"
			| "2026-04-25T17:00:00"
			| "2026-05-02T17:00:00"
			| "2026-05-16T17:00:00"
			| "2026-05-23T17:00:00"
			| "2026-06-16T10:00:00"
			| "2026-06-20T17:00:00"
			| "2026-06-27T17:00:00"
			| "2026-07-04T17:00:00"
			| "2026-07-06T20:00:00"
			| "2026-07-18T17:00:00";
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
			| "2026-03-21T14:00:00"
			| "2026-04-04T14:00:00"
			| "2026-04-18T11:00:00"
			| "2026-04-25T14:00:00"
			| "2026-05-02T14:00:00"
			| "2026-05-16T14:00:00"
			| "2026-05-23T14:00:00"
			| "2026-06-02T13:00:00"
			| "2026-06-20T14:00:00"
			| "2026-06-27T14:00:00"
			| "2026-07-04T10:00:00"
			| "2026-07-04T14:00:00"
			| "2026-07-18T14:00:00";
		giftable?: boolean;
		giftItem?:
			| number
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
			| "ITEM_EVENT_TICKET_S23_2026_01_TO_GIFT"
			| "ITEM_EVENT_TICKET_S23_2026_02_TO_GIFT"
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
					| "ITEM_INCUBATOR_BASIC"
					| "ITEM_INCUBATOR_SUPER"
					| "ITEM_LUCKY_EGG"
					| "ITEM_MASTER_BALL"
					| "ITEM_MAX_BOOST"
					| "ITEM_PAID_RAID_TICKET"
					| "ITEM_STAR_PIECE"
					| "ITEM_XL_RARE_CANDY";
			};
			neutralAvatarItemTemplate?: {
				displayTemplateId: "N_DISPLAY_n_shirt_shinykeldeoshirt_0";
			};
			pokemonEncounter?: {
				pokemonDisplay?: {
					form:
						| "BAXCALIBUR_NORMAL"
						| "CLAMPERL_NORMAL"
						| "DIANCIE_NORMAL"
						| "DIGLETT_NORMAL"
						| "FEEBAS_NORMAL"
						| "GIMMIGHOUL_COIN_A2_2026"
						| "GLIMMET_NORMAL"
						| "HYDREIGON_NORMAL"
						| "INTELEON_NORMAL"
						| "KELDEO_ORDINARY"
						| "LATIAS_NORMAL"
						| "LATIOS_NORMAL"
						| "LOTAD_NORMAL"
						| "ROCKRUFF_NORMAL"
						| "YUNGOOS_NORMAL";
					shiny?: boolean;
				};
				pokemonId:
					| "BAXCALIBUR"
					| "CLAMPERL"
					| "DIANCIE"
					| "DIGLETT"
					| "FEEBAS"
					| "GIMMIGHOUL"
					| "GLIMMET"
					| "HYDREIGON"
					| "INTELEON"
					| "KELDEO"
					| "LATIAS"
					| "LATIOS"
					| "LOTAD"
					| "ROCKRUFF"
					| "YAMPER"
					| "YUNGOOS";
			};
			stardust?: number;
			type: "AVATAR_CLOTHING" | "CANDY" | "EXPERIENCE" | "ITEM" | "POKEMON_ENCOUNTER" | "STARDUST";
		}>;
		itemBagDescriptionKey:
			| "item_battle_pass_ticket_desc"
			| "item_event_ticket_02_desc_CATCH_MASTERY_ORICORIO"
			| "item_event_ticket_06_details_REPLAY_GO_BIGGER"
			| "item_event_ticket_07_desc_masterball25"
			| "item_event_ticket_07_details_masterball25"
			| "ITEM_EVENT_TICKET_09_desc_fashionRaidDay26"
			| "ITEM_EVENT_TICKET_09_details_fashionRaidDay26"
			| "item_event_ticket_evergreen_desc_10THPARTY0726"
			| "item_event_ticket_evergreen_desc_GOWA2024GSBEA"
			| "item_event_ticket_evergreen_desc_IntoTDepths26"
			| "item_event_ticket_evergreen_desc_Riolu0426"
			| "item_event_ticket_evergreen_details_IntoTDepths26"
			| "item_event_ticket_evergreen_details_PawPrint_20250620"
			| "item_event_ticket_evergreen_details_Riolu0426"
			| "item_event_ticket_gray_desc_FinalJustice2025"
			| "item_event_ticket_gray_desc_MegaFalinksRaidDay"
			| "item_event_ticket_gray_desc_MegaRaichuRaidDay"
			| "item_event_ticket_gray_details_ENTEI_SHADOW_RAID_DAY"
			| "item_event_ticket_gray_details_MegaRaichuRaidDay"
			| "item_event_ticket_gray_details_MegaSkarmoryRaidDay"
			| "item_event_ticket_pink_desc_CD_Frigibax26"
			| "item_event_ticket_pink_desc_CD_Sobble26"
			| "item_event_ticket_pink_desc_CDC_Deino26"
			| "item_event_ticket_pink_desc_WaterRRD26"
			| "item_global_event_ticket_details_GOTour2026"
			| "item_ticket_city_safari_00_desc"
			| "item_ticket_city_safari_01_desc"
			| "item_ticket_city_safari_02_desc";
		textRewardsKey?:
			| "text_rewards_key_10THPARTY0726"
			| "text_rewards_key_CATCH_MASTERY_ORICORIO"
			| "text_rewards_key_CD_Frigibax26"
			| "text_rewards_key_CD_Sobble26"
			| "text_rewards_key_CDC_Deino26"
			| "text_rewards_key_ENTEI_SHADOW_RAID_DAY"
			| "text_rewards_key_fashionRaidDay26"
			| "text_rewards_key_FinalJustice2025"
			| "text_rewards_key_GOTour2026"
			| "text_rewards_key_IntoTDepths26"
			| "text_rewards_key_masterball25"
			| "text_rewards_key_MegaFalinksRaidDay"
			| "text_rewards_key_MegaSkarmoryRaidDay"
			| "text_rewards_key_PawPrint_20250620"
			| "text_rewards_key_RaichuRaidDay"
			| "text_rewards_key_REPLAY_GO_BIGGER"
			| "text_rewards_key_Riolu0426"
			| "text_rewards_key_WaterRRD26";
		ticketItem?:
			| number
			| "ITEM_EVENT_TICKET_02"
			| "ITEM_EVENT_TICKET_03"
			| "ITEM_EVENT_TICKET_04"
			| "ITEM_EVENT_TICKET_05"
			| "ITEM_EVENT_TICKET_06"
			| "ITEM_EVENT_TICKET_07"
			| "ITEM_EVENT_TICKET_08"
			| "ITEM_EVENT_TICKET_09"
			| "ITEM_EVENT_TICKET_10"
			| "ITEM_EVENT_TICKET_GRAY"
			| "ITEM_EVENT_TICKET_PINK"
			| "ITEM_EVENT_TICKET_S23_2026_01"
			| "ITEM_EVENT_TICKET_S23_2026_02"
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
	itemId: number | string;
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
		| "general1.ticket_CD_Frigibax26_title"
		| "general1.ticket_CD_Sobble26_title"
		| "general1.ticket_CDC_Deino26_title"
		| "general1.ticket._GOWA2024GSBEA_title"
		| "general1.ticket.1_10THPARTY0726_title"
		| "general1.ticket.2_WaterRRD26_title"
		| "general1.ticket.4_Riolu0426_title"
		| "general1.ticket.5_IntoTDepths26_title"
		| "general1.ticket.5.ENTEI_SHADOW_RAID_DAY"
		| "general2.ticket.5_MegaFalinksRaidDay"
		| "general2.ticket.5_MegaRaichuRaidDay"
		| "general2.ticket.5_MegaSkarmoryRaidDay"
		| "general2.ticket.6.REPLAY_GO_BIGGER"
		| "general2.ticket.7_masterball25_title"
		| "general2.ticket.9_fashionRaidDay26_title"
		| "general2.ticket2.CATCH_MASTERY_ORICORIO"
		| "GOTour_2026_ticket_title"
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
