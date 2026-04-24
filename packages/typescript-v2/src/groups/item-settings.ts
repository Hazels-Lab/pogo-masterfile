export interface ItemSettings<T extends string> {
	templateId: T;
	data: ItemSettingsData<T>;
}

export interface ItemSettingsData<T extends string> {
	templateId: T;
	itemSettings: {
		category: "ITEM_CATEGORY_BOOST" | "ITEM_CATEGORY_BREAD" | "ITEM_CATEGORY_BUDDY_EXCLUSIVE_FOOD" | "ITEM_CATEGORY_CAMERA" | "ITEM_CATEGORY_CANDY" | "ITEM_CATEGORY_DISK" | "ITEM_CATEGORY_ENHANCED_CURRENCY" | "ITEM_CATEGORY_ENHANCED_CURRENCY_HOLDER" | "ITEM_CATEGORY_EVENT_PASS_POINT" | "ITEM_CATEGORY_EVOLUTION_REQUIREMENT" | "ITEM_CATEGORY_FOOD" | "ITEM_CATEGORY_FRIEND_GIFT_BOX" | "ITEM_CATEGORY_GLOBAL_EVENT_TICKET" | "ITEM_CATEGORY_INCENSE" | "ITEM_CATEGORY_INCIDENT_TICKET" | "ITEM_CATEGORY_INCUBATOR" | "ITEM_CATEGORY_INVENTORY_UPGRADE" | "ITEM_CATEGORY_MEDICINE" | "ITEM_CATEGORY_MOVE_REROLL" | "ITEM_CATEGORY_MP" | "ITEM_CATEGORY_POKEBALL" | "ITEM_CATEGORY_POSTCARD_INVENTORY" | "ITEM_CATEGORY_RAID_TICKET" | "ITEM_CATEGORY_ROUTE_MAKER" | "ITEM_CATEGORY_STARDUST_BOOST" | "ITEM_CATEGORY_STAT_INCREASE" | "ITEM_CATEGORY_STICKER" | "ITEM_CATEGORY_TEAM_CHANGE" | "ITEM_CATEGORY_UTILITES" | "ITEM_CATEGORY_XP_BOOST";
		descriptionOverride?: "item_event_ticket_02_details_CATCH_MASTERY_ORICORIO" | "item_event_ticket_05_desc_GMAX_PIKACHU_MAX_BATTLE" | "item_event_ticket_06_desc_ENTEI_SHADOW_RAID_DAY" | "item_event_ticket_06_desc_REPLAY_GO_BIGGER" | "item_event_ticket_07_desc_masterball25" | "item_event_ticket_07_details_masterball25" | "ITEM_EVENT_TICKET_09_desc_fashionRaidDay26" | "ITEM_EVENT_TICKET_09_details_fashionRaidDay26" | "item_event_ticket_evergreen_desc_IntoTDepths26" | "item_event_ticket_evergreen_desc_PawPrint_20250620" | "item_event_ticket_evergreen_desc_Riolu0426" | "item_event_ticket_evergreen_details_GOWA2024GSBEA" | "item_event_ticket_evergreen_details_IntoTDepths26" | "item_event_ticket_evergreen_details_Riolu0426" | "item_event_ticket_gray_desc_FinalJustice2025" | "item_event_ticket_pink_details_CD_Tinkatink26" | "item_event_ticket_pink_details_WaterRRD26" | "item_global_event_ticket_details_GOTour2026" | "item_postcard_inventory_desc_stamp";
		dropTrainerLevel?: 1 | 4 | 5 | 6 | 8 | 10 | 12 | 15 | 18 | 20 | 25 | 30 | 31 | 99 | 100;
		eggIncubator?: {
			distanceMultiplier: 0.6666667 | 1;
			expiredIncubatorReplacement?: {
				incubatorReplacement: "ITEM_INCUBATOR_BASIC";
				usesCountOverride: 1;
			};
			incubatorType: "INCUBATOR_DISTANCE";
			maxHatchSummaryEntries?: 10;
			useBonusIncubatorAttributes?: true;
			uses?: 3;
		};
		eventPassPoint?: {
			eventPassId: "EVENT_PASS_APRIL2026_SEASON" | "EVENT_PASS_BUGOUTBUDDIES2026_EVENT" | "EVENT_PASS_DECEMBER2025_SEASON" | "EVENT_PASS_FEBRUARY2026_SEASON" | "EVENT_PASS_GOFEST2025_GLOBAL" | "EVENT_PASS_GOFEST2025_MAXFINALE" | "EVENT_PASS_GOTOUR2026_GLOBAL" | "EVENT_PASS_GOTOUR2026_IRL" | "EVENT_PASS_GOWA_2025" | "EVENT_PASS_JANUARY2026_SEASON" | "EVENT_PASS_MARCH2026_SEASON" | "EVENT_PASS_MAY2026_SEASON" | "EVENT_PASS_SHOCKINGLYGOOD2026_EVENT" | "EVENT_PASS_STEELEDRESOLVE2026_EVENT" | "EVENT_PASS_SUSTAINABILITY2026_EVENT";
		};
		food?: {
			berryMultiplier?: 1 | 1.25 | 2;
			growthPercent?: 0.1;
			itemEffect?: Array<"ITEM_EFFECT_CANDY_AWARD" | "ITEM_EFFECT_CAP_CHANCE_SINGLE_THROW" | "ITEM_EFFECT_CAP_NO_MOVEMENT" | "ITEM_EFFECT_CAP_TARGET_MAX" | "ITEM_EFFECT_CAP_TARGET_SLOW" | "ITEM_EFFECT_FULL_MOTIVATION">;
			itemEffectPercent?: Array<0 | 1 | 1.5 | 1.8 | 2 | 2.3334 | 2.5>;
			mapDurationMs?: "10800000" | "21600000" | "3600000";
			numBuddyAffectionPoints?: 1 | 2;
			numBuddyHungerPoints?: 2 | 6;
			remoteBerryMultiplier?: 0.25 | 0.3125 | 0.5 | 1;
			timeFullDurationMs?: "10800000" | "21600000" | "3600000";
		};
		globalEventTicket?: {
			backgroundImageUrl?: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2F20260113_pgo_s22_oricorio_1024x576_nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fgo_tour_kalos_1024x512_logoless.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-fashion-raid-day-2026-nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-gmax-kanto-max-battle-day-2026-nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-gmax-pikachu-2026-nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FPGO-MCS_Into_The_Depths_LiveOp_2026_v3-1024x576-nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FPGO-MCS_Shiny_Keldeo_KeyArt_v1-1024x576-nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-replay-water-research-day-2026-nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-riolu-hatch-day-2026-nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-tinkatink-community-day-2026-nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-yampers-paw-prints-ticket-nologo-2025.jpg" | "https://storage.googleapis.com/prod-public-images/1054x512.jpg" | "https://storage.googleapis.com/prod-public-images/masterball-keyart.png";
			clientEventEndTimeUtcMs: "1728424800000" | "1728943200000" | "1730844000000" | "1732472100000" | "1750636799000" | "1764532800000" | "1769976000000" | "1770494400000" | "1771790400000" | "1772409599000" | "1774112400000" | "1774717200000" | "1775210400000" | "1775322000000" | "1775926800000" | "1776531600000" | "1777136400000" | "1777741200000";
			clientEventStartTimeUtcMs: "1696845600000" | "1697364000000" | "1699264800000" | "1732356000000" | "1750377600000" | "1764064800000" | "1764669600000" | "1769508000000" | "1770458400000" | "1772236800000" | "1772542800000" | "1774101600000" | "1774706400000" | "1775311200000" | "1775916000000" | "1776510000000" | "1777125600000" | "1777730400000";
			detailsLinkKey?: "details_link_key" | "details_link_key_ENTEI_SHADOW_RAID_DAY" | "details_link_key_fashion_raid_day" | "details_link_key_GMAX_PIKACHU_MAX_BATTLE" | "details_link_key_ORICORIO_MASTERY_FEB2026" | "details_link_key_REPLAY_GO_BIGGER_MAX_BATTLE" | "details_link_key_Riolu_Hatch0426" | "item_event_ticket_evergreen_details_PawPrint_20250620" | "item_global_event_ticket_details_GOTour2026";
			displayV2Enabled?: true;
			eventBadge?: "BADGE_GO_TOUR_2026_GLOBAL";
			eventBannerUrl?: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2F20260113_pgo_s22_oricorio_1024x576_nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fgo_tour_kalos_1024x512.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FPGO_MCS_MasterBall_KeyArt_TK_GP_V2_S14_1024x512_nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-entei-shadow-raid-day-2026-nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-fashion-raid-day-2026-nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-gmax-kanto-max-battle-day-2026-nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-gmax-pikachu-2026-nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FPGO-MCS_Into_The_Depths_LiveOp_2026_v3-1024x576-nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FPGO-MCS_Shiny_Keldeo_KeyArt_v1-1024x576-nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-replay-water-research-day-2026-nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-riolu-hatch-day-2026-nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-s22-gbl-nologo-2026.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-tinkatink-community-day-2026-nologo.jpg" | "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-yampers-paw-prints-ticket-nologo-2025.jpg";
			eventDatetimeRangeKey?: "event_datetime_range_key_CATCH_MASTERY_ORICORIO" | "event_datetime_range_key_CD_Tinkatink26" | "event_datetime_range_key_ENTEI_SHADOW_RAID_DAY" | "event_datetime_range_key_fashionRaidDay_s22" | "event_datetime_range_key_FinalJustice2025" | "event_datetime_range_key_GMAX_PIKACHU_MAX_BATTLE" | "event_datetime_range_key_GOTour2026" | "event_datetime_range_key_IntoTDepths26" | "event_datetime_range_key_PawPrint_20250620" | "event_datetime_range_key_REPLAY_GO_BIGGER" | "event_datetime_range_key_Riolu0426" | "event_datetime_range_key_WaterRRD26";
			eventEndTime: "2024-10-08T22:00:00" | "2024-10-14T22:00:00" | "2024-11-05T22:00:00" | "2024-11-24T18:15:00" | "2025-06-22T23:59:59" | "2025-11-30T20:00:00" | "2026-02-01T20:00:00" | "2026-02-07T20:00:00" | "2026-02-22T20:00:00" | "2026-03-01T23:59:59" | "2026-03-21T17:00:00" | "2026-03-28T17:00:00" | "2026-04-03T10:00:00" | "2026-04-04T17:00:00" | "2026-04-11T17:00:00" | "2026-04-18T17:00:00" | "2026-04-25T17:00:00" | "2026-05-02T17:00:00";
			eventStartTime: "2023-10-09T10:00:00" | "2023-10-15T10:00:00" | "2023-11-06T10:00:00" | "2024-11-23T10:00:00" | "2025-06-20T00:00:00" | "2025-11-25T10:00:00" | "2025-12-02T10:00:00" | "2026-01-27T10:00:00" | "2026-02-07T10:00:00" | "2026-02-28T00:00:00" | "2026-03-03T13:00:00" | "2026-03-21T14:00:00" | "2026-03-28T14:00:00" | "2026-04-04T14:00:00" | "2026-04-11T14:00:00" | "2026-04-18T11:00:00" | "2026-04-25T14:00:00" | "2026-05-02T14:00:00";
			giftable?: true;
			giftItem?: "ITEM_EVENT_TICKET_02_TO_GIFT" | "ITEM_EVENT_TICKET_03_TO_GIFT" | "ITEM_EVENT_TICKET_04_TO_GIFT" | "ITEM_EVENT_TICKET_05_TO_GIFT" | "ITEM_EVENT_TICKET_06_TO_GIFT" | "ITEM_EVENT_TICKET_07_TO_GIFT" | "ITEM_EVENT_TICKET_08_TO_GIFT" | "ITEM_EVENT_TICKET_09_TO_GIFT" | "ITEM_EVENT_TICKET_10_TO_GIFT" | "ITEM_EVENT_TICKET_GRAY_TO_GIFT" | "ITEM_EVENT_TICKET_PINK_TO_GIFT" | "ITEM_EVERGREEN_TICKET_TO_GIFT" | "ITEM_GLOBAL_EVENT_TICKET_TO_GIFT";
			grantBadgeBeforeEventStartMs?: "1769904000000";
			iconRewards?: Array<
				{
					candy?: {
						amount: 30;
						pokemonId: "KELDEO";
					};
					exp?: 10000 | 12000 | 25000;
					item?: {
						amount?: 1 | 2 | 4 | 8;
						item: "ITEM_FREE_RAID_TICKET" | "ITEM_INCENSE_ORDINARY" | "ITEM_INCUBATOR_SUPER" | "ITEM_MASTER_BALL" | "ITEM_MAX_BOOST" | "ITEM_STAR_PIECE" | "ITEM_XL_RARE_CANDY";
					};
					neutralAvatarItemTemplate?: {
						displayTemplateId: "N_DISPLAY_n_shirt_shinykeldeoshirt_0";
					};
					pokemonEncounter?: {
						pokemonDisplay?: {
							form: "CLAMPERL_NORMAL" | "DIANCIE_NORMAL" | "DIGLETT_NORMAL" | "FEEBAS_NORMAL" | "GLIMMET_NORMAL" | "KELDEO_ORDINARY" | "LATIAS_NORMAL" | "LATIOS_NORMAL" | "LOTAD_NORMAL" | "ROCKRUFF_NORMAL" | "TINKATON_NORMAL" | "YUNGOOS_NORMAL";
							shiny?: true;
						};
						pokemonId: "CLAMPERL" | "DIANCIE" | "DIGLETT" | "FEEBAS" | "GLIMMET" | "KELDEO" | "LATIAS" | "LATIOS" | "LOTAD" | "ROCKRUFF" | "TINKATON" | "YAMPER" | "YUNGOOS";
					};
					stardust?: 2 | 3000;
					"type": "AVATAR_CLOTHING" | "CANDY" | "EXPERIENCE" | "ITEM" | "POKEMON_ENCOUNTER" | "STARDUST";
				}
			>;
			itemBagDescriptionKey: "item_battle_pass_ticket_desc" | "item_event_ticket_02_desc_CATCH_MASTERY_ORICORIO" | "item_event_ticket_05_details_GMAX_PIKACHU_MAX_BATTLE" | "item_event_ticket_06_details_REPLAY_GO_BIGGER" | "item_event_ticket_07_desc_masterball25" | "item_event_ticket_07_details_masterball25" | "ITEM_EVENT_TICKET_09_desc_fashionRaidDay26" | "ITEM_EVENT_TICKET_09_details_fashionRaidDay26" | "item_event_ticket_evergreen_desc_GOWA2024GSBEA" | "item_event_ticket_evergreen_desc_IntoTDepths26" | "item_event_ticket_evergreen_desc_Riolu0426" | "item_event_ticket_evergreen_details_IntoTDepths26" | "item_event_ticket_evergreen_details_PawPrint_20250620" | "item_event_ticket_evergreen_details_Riolu0426" | "item_event_ticket_gray_desc_FinalJustice2025" | "item_event_ticket_gray_details_ENTEI_SHADOW_RAID_DAY" | "item_event_ticket_pink_desc_CD_Tinkatink26" | "item_event_ticket_pink_desc_WaterRRD26" | "item_global_event_ticket_details_GOTour2026" | "item_ticket_city_safari_00_desc" | "item_ticket_city_safari_01_desc" | "item_ticket_city_safari_02_desc";
			textRewardsKey?: "text_rewards_key_CATCH_MASTERY_ORICORIO" | "text_rewards_key_CD_Tinkatink26" | "text_rewards_key_ENTEI_SHADOW_RAID_DAY" | "text_rewards_key_fashionRaidDay26" | "text_rewards_key_FinalJustice2025" | "text_rewards_key_GMAX_PIKACHU_MAX_BATTLE" | "text_rewards_key_GOTour2026" | "text_rewards_key_IntoTDepths26" | "text_rewards_key_masterball25" | "text_rewards_key_PawPrint_20250620" | "text_rewards_key_REPLAY_GO_BIGGER" | "text_rewards_key_Riolu0426" | "text_rewards_key_WaterRRD26";
			ticketItem?: "ITEM_EVENT_TICKET_02" | "ITEM_EVENT_TICKET_03" | "ITEM_EVENT_TICKET_04" | "ITEM_EVENT_TICKET_05" | "ITEM_EVENT_TICKET_07" | "ITEM_EVENT_TICKET_08" | "ITEM_EVENT_TICKET_09" | "ITEM_EVENT_TICKET_10" | "ITEM_EVENT_TICKET_PINK" | "ITEM_EVERGREEN_TICKET" | "ITEM_GLOBAL_EVENT_TICKET";
			titleImageUrl?: "https://storage.googleapis.com/prod-public-images/gotourlogo_1914247967.png";
		};
		hideItemInInventory?: true;
		ignoreInventorySpace?: true;
		incense?: {
			incenseLifetimeSeconds: 1800 | 3600;
			spawnTableProbability?: 0.25 | 1;
		};
		incidentTicket?: {
			ignoreFullInventory?: true;
			upgradedItem?: "ITEM_LEADER_MAP" | "ITEM_SHADOW_GEM";
			upgradeRequirementCount?: 4 | 6;
		};
		inventoryUpgrade?: {
			additionalStorage: 50;
			upgradeType: "INCREASE_ITEM_STORAGE" | "INCREASE_POKEMON_STORAGE" | "INCREASE_POSTCARD_STORAGE";
		};
		itemCap?: 1 | 12 | 300 | 600 | 6000 | 9999 | 10000 | 999999;
		itemId: T;
		itemType: "ITEM_TYPE_BATTLE" | "ITEM_TYPE_BREAKFAST" | "ITEM_TYPE_CAMERA" | "ITEM_TYPE_CANDY" | "ITEM_TYPE_DISK" | "ITEM_TYPE_ENHANCED_CURRENCY" | "ITEM_TYPE_ENHANCED_CURRENCY_HOLDER" | "ITEM_TYPE_EVENT_PASS_POINT" | "ITEM_TYPE_EVOLUTION_REQUIREMENT" | "ITEM_TYPE_FOOD" | "ITEM_TYPE_FRIEND_BOOST" | "ITEM_TYPE_FRIEND_GIFT_BOX" | "ITEM_TYPE_GLOBAL_EVENT_TICKET" | "ITEM_TYPE_INCENSE" | "ITEM_TYPE_INCIDENT_TICKET" | "ITEM_TYPE_INCUBATOR" | "ITEM_TYPE_INVENTORY_UPGRADE" | "ITEM_TYPE_MOVE_REROLL" | "ITEM_TYPE_MP" | "ITEM_TYPE_MP_REPLENISH" | "ITEM_TYPE_POKEBALL" | "ITEM_TYPE_POSTCARD_INVENTORY" | "ITEM_TYPE_POTION" | "ITEM_TYPE_RAID_TICKET" | "ITEM_TYPE_REVIVE" | "ITEM_TYPE_ROUTE_MAKER" | "ITEM_TYPE_SOFT_SFIDA" | "ITEM_TYPE_STARDUST_BOOST" | "ITEM_TYPE_STAT_INCREASE" | "ITEM_TYPE_STICKER_INVENTORY" | "ITEM_TYPE_TEAM_CHANGE" | "ITEM_TYPE_XP_BOOST";
		nameOverride?: "general1.ticket_CD_Tinkatink26_title" | "general1.ticket._GOWA2024GSBEA_title" | "general1.ticket.2_WaterRRD26_title" | "general1.ticket.4_Riolu0426_title" | "general1.ticket.5_IntoTDepths26_title" | "general1.ticket.5.ENTEI_SHADOW_RAID_DAY" | "general2.ticket.6.REPLAY_GO_BIGGER" | "general2.ticket.7_masterball25_title" | "general2.ticket.9_fashionRaidDay26_title" | "general2.ticket2.CATCH_MASTERY_ORICORIO" | "general2.ticket5.GMAX_PIKACHU_MAX_BATTLE" | "GOTour_2026_ticket_title" | "ITEM_EVENT_PASS_POINT_LIVE_OPS_01_name" | "item_postcard_inventory_name_stamp";
		potion?: {
			staAmount?: 20 | 50 | 200;
			staPercent?: 1;
		};
		replenishMp?: {
			mpAmount: 800;
		};
		revive?: {
			staPercent: 0.5 | 1;
		};
		stardustBoost?: {
			boostDurationMs: 1800000;
			stardustMultiplier: 1.5;
		};
		statIncrease?: {
			statsToIncreaseLimit: 1 | 3;
		};
		timePeriodCounters?: {
			playerActivity: {
				limit: 50 | 100 | 150 | 250 | 300;
			};
		};
		xpBoost?: {
			boostDurationMs: 1800000;
			xpMultiplier: 2;
		};
	};
}

export type ItemSettingsFusionResourceBlackKyurem = ItemSettings<"FUSION_RESOURCE_BLACK_KYUREM">;
export type ItemSettingsFusionResourceDawnwingsNecrozma = ItemSettings<"FUSION_RESOURCE_DAWNWINGS_NECROZMA">;
export type ItemSettingsFusionResourceDuskmaneNecrozma = ItemSettings<"FUSION_RESOURCE_DUSKMANE_NECROZMA">;
export type ItemSettingsFusionResourceWhiteKyurem = ItemSettings<"FUSION_RESOURCE_WHITE_KYUREM">;
export type ItemSettingsItemBattlePassTicket = ItemSettings<"ITEM_BATTLE_PASS_TICKET">;
export type ItemSettingsItemBeans = ItemSettings<"ITEM_BEANS">;
export type ItemSettingsItemBeastBall = ItemSettings<"ITEM_BEAST_BALL">;
export type ItemSettingsItemBlukBerry = ItemSettings<"ITEM_BLUK_BERRY">;
export type ItemSettingsItemBreakfast = ItemSettings<"ITEM_BREAKFAST">;
export type ItemSettingsItemDragonScale = ItemSettings<"ITEM_DRAGON_SCALE">;
export type ItemSettingsItemEnhancedCurrency = ItemSettings<"ITEM_ENHANCED_CURRENCY">;
export type ItemSettingsItemEnhancedCurrencyHolder = ItemSettings<"ITEM_ENHANCED_CURRENCY_HOLDER">;
export type ItemSettingsItemEventPassPointGoFest01 = ItemSettings<"ITEM_EVENT_PASS_POINT_GO_FEST_01">;
export type ItemSettingsItemEventPassPointGoFest02 = ItemSettings<"ITEM_EVENT_PASS_POINT_GO_FEST_02">;
export type ItemSettingsItemEventPassPointGoTour01 = ItemSettings<"ITEM_EVENT_PASS_POINT_GO_TOUR_01">;
export type ItemSettingsItemEventPassPointGoTour02 = ItemSettings<"ITEM_EVENT_PASS_POINT_GO_TOUR_02">;
export type ItemSettingsItemEventPassPointGoWildArea01 = ItemSettings<"ITEM_EVENT_PASS_POINT_GO_WILD_AREA_01">;
export type ItemSettingsItemEventPassPointLiveOps01 = ItemSettings<"ITEM_EVENT_PASS_POINT_LIVE_OPS_01">;
export type ItemSettingsItemEventPassPointLiveOps02 = ItemSettings<"ITEM_EVENT_PASS_POINT_LIVE_OPS_02">;
export type ItemSettingsItemEventPassPointLiveOps03 = ItemSettings<"ITEM_EVENT_PASS_POINT_LIVE_OPS_03">;
export type ItemSettingsItemEventPassPointLiveOps04 = ItemSettings<"ITEM_EVENT_PASS_POINT_LIVE_OPS_04">;
export type ItemSettingsItemEventPassPointLiveOps05 = ItemSettings<"ITEM_EVENT_PASS_POINT_LIVE_OPS_05">;
export type ItemSettingsItemEventPassPointLiveOps06 = ItemSettings<"ITEM_EVENT_PASS_POINT_LIVE_OPS_06">;
export type ItemSettingsItemEventPassPointLiveOps07 = ItemSettings<"ITEM_EVENT_PASS_POINT_LIVE_OPS_07">;
export type ItemSettingsItemEventPassPointLiveOps08 = ItemSettings<"ITEM_EVENT_PASS_POINT_LIVE_OPS_08">;
export type ItemSettingsItemEventPassPointMonthly01 = ItemSettings<"ITEM_EVENT_PASS_POINT_MONTHLY_01">;
export type ItemSettingsItemEventPassPointMonthly02 = ItemSettings<"ITEM_EVENT_PASS_POINT_MONTHLY_02">;
export type ItemSettingsItemEventPassPointMonthly03 = ItemSettings<"ITEM_EVENT_PASS_POINT_MONTHLY_03">;
export type ItemSettingsItemEventTicket02 = ItemSettings<"ITEM_EVENT_TICKET_02">;
export type ItemSettingsItemEventTicket02ToGift = ItemSettings<"ITEM_EVENT_TICKET_02_TO_GIFT">;
export type ItemSettingsItemEventTicket03 = ItemSettings<"ITEM_EVENT_TICKET_03">;
export type ItemSettingsItemEventTicket03ToGift = ItemSettings<"ITEM_EVENT_TICKET_03_TO_GIFT">;
export type ItemSettingsItemEventTicket04 = ItemSettings<"ITEM_EVENT_TICKET_04">;
export type ItemSettingsItemEventTicket04ToGift = ItemSettings<"ITEM_EVENT_TICKET_04_TO_GIFT">;
export type ItemSettingsItemEventTicket05 = ItemSettings<"ITEM_EVENT_TICKET_05">;
export type ItemSettingsItemEventTicket05ToGift = ItemSettings<"ITEM_EVENT_TICKET_05_TO_GIFT">;
export type ItemSettingsItemEventTicket06 = ItemSettings<"ITEM_EVENT_TICKET_06">;
export type ItemSettingsItemEventTicket07 = ItemSettings<"ITEM_EVENT_TICKET_07">;
export type ItemSettingsItemEventTicket07ToGift = ItemSettings<"ITEM_EVENT_TICKET_07_TO_GIFT">;
export type ItemSettingsItemEventTicket08 = ItemSettings<"ITEM_EVENT_TICKET_08">;
export type ItemSettingsItemEventTicket08ToGift = ItemSettings<"ITEM_EVENT_TICKET_08_TO_GIFT">;
export type ItemSettingsItemEventTicket09 = ItemSettings<"ITEM_EVENT_TICKET_09">;
export type ItemSettingsItemEventTicket09ToGift = ItemSettings<"ITEM_EVENT_TICKET_09_TO_GIFT">;
export type ItemSettingsItemEventTicket10 = ItemSettings<"ITEM_EVENT_TICKET_10">;
export type ItemSettingsItemEventTicket10ToGift = ItemSettings<"ITEM_EVENT_TICKET_10_TO_GIFT">;
export type ItemSettingsItemEventTicketGray = ItemSettings<"ITEM_EVENT_TICKET_GRAY">;
export type ItemSettingsItemEventTicketPink = ItemSettings<"ITEM_EVENT_TICKET_PINK">;
export type ItemSettingsItemEventTicketPinkToGift = ItemSettings<"ITEM_EVENT_TICKET_PINK_TO_GIFT">;
export type ItemSettingsItemEvergreenTicket = ItemSettings<"ITEM_EVERGREEN_TICKET">;
export type ItemSettingsItemEvergreenTicketToGift = ItemSettings<"ITEM_EVERGREEN_TICKET_TO_GIFT">;
export type ItemSettingsItemFreeRaidTicket = ItemSettings<"ITEM_FREE_RAID_TICKET">;
export type ItemSettingsItemFriendGiftBox = ItemSettings<"ITEM_FRIEND_GIFT_BOX">;
export type ItemSettingsItemGen4EvolutionStone = ItemSettings<"ITEM_GEN4_EVOLUTION_STONE">;
export type ItemSettingsItemGen5EvolutionStone = ItemSettings<"ITEM_GEN5_EVOLUTION_STONE">;
export type ItemSettingsItemGiovanniMap = ItemSettings<"ITEM_GIOVANNI_MAP">;
export type ItemSettingsItemGlobalEventTicket = ItemSettings<"ITEM_GLOBAL_EVENT_TICKET">;
export type ItemSettingsItemGlobalEventTicketToGift = ItemSettings<"ITEM_GLOBAL_EVENT_TICKET_TO_GIFT">;
export type ItemSettingsItemGoldenPinapBerry = ItemSettings<"ITEM_GOLDEN_PINAP_BERRY">;
export type ItemSettingsItemGoldenRazzBerry = ItemSettings<"ITEM_GOLDEN_RAZZ_BERRY">;
export type ItemSettingsItemGreatBall = ItemSettings<"ITEM_GREAT_BALL">;
export type ItemSettingsItemHyperPotion = ItemSettings<"ITEM_HYPER_POTION">;
export type ItemSettingsItemIncenseBelugaBox = ItemSettings<"ITEM_INCENSE_BELUGA_BOX">;
export type ItemSettingsItemIncenseDailyAdventure = ItemSettings<"ITEM_INCENSE_DAILY_ADVENTURE">;
export type ItemSettingsItemIncenseDayBonus = ItemSettings<"ITEM_INCENSE_DAY_BONUS">;
export type ItemSettingsItemIncenseNightBonus = ItemSettings<"ITEM_INCENSE_NIGHT_BONUS">;
export type ItemSettingsItemIncenseOrdinary = ItemSettings<"ITEM_INCENSE_ORDINARY">;
export type ItemSettingsItemIncenseSparkly = ItemSettings<"ITEM_INCENSE_SPARKLY">;
export type ItemSettingsItemIncubatorBasic = ItemSettings<"ITEM_INCUBATOR_BASIC">;
export type ItemSettingsItemIncubatorBasicUnlimited = ItemSettings<"ITEM_INCUBATOR_BASIC_UNLIMITED">;
export type ItemSettingsItemIncubatorSpecial = ItemSettings<"ITEM_INCUBATOR_SPECIAL">;
export type ItemSettingsItemIncubatorSuper = ItemSettings<"ITEM_INCUBATOR_SUPER">;
export type ItemSettingsItemIncubatorTimed = ItemSettings<"ITEM_INCUBATOR_TIMED">;
export type ItemSettingsItemItemStorageUpgrade = ItemSettings<"ITEM_ITEM_STORAGE_UPGRADE">;
export type ItemSettingsItemKingsRock = ItemSettings<"ITEM_KINGS_ROCK">;
export type ItemSettingsItemLeaderMap = ItemSettings<"ITEM_LEADER_MAP">;
export type ItemSettingsItemLeaderMapFragment = ItemSettings<"ITEM_LEADER_MAP_FRAGMENT">;
export type ItemSettingsItemLuckyEgg = ItemSettings<"ITEM_LUCKY_EGG">;
export type ItemSettingsItemLuckyFriendApplicator = ItemSettings<"ITEM_LUCKY_FRIEND_APPLICATOR">;
export type ItemSettingsItemMasterBall = ItemSettings<"ITEM_MASTER_BALL">;
export type ItemSettingsItemMaxBoost = ItemSettings<"ITEM_MAX_BOOST">;
export type ItemSettingsItemMaxPotion = ItemSettings<"ITEM_MAX_POTION">;
export type ItemSettingsItemMaxRevive = ItemSettings<"ITEM_MAX_REVIVE">;
export type ItemSettingsItemMetalCoat = ItemSettings<"ITEM_METAL_COAT">;
export type ItemSettingsItemMoveRerollEliteFastAttack = ItemSettings<"ITEM_MOVE_REROLL_ELITE_FAST_ATTACK">;
export type ItemSettingsItemMoveRerollEliteSpecialAttack = ItemSettings<"ITEM_MOVE_REROLL_ELITE_SPECIAL_ATTACK">;
export type ItemSettingsItemMoveRerollFastAttack = ItemSettings<"ITEM_MOVE_REROLL_FAST_ATTACK">;
export type ItemSettingsItemMoveRerollOtherSpecialAttackA = ItemSettings<"ITEM_MOVE_REROLL_OTHER_SPECIAL_ATTACK_A">;
export type ItemSettingsItemMoveRerollSpecialAttack = ItemSettings<"ITEM_MOVE_REROLL_SPECIAL_ATTACK">;
export type ItemSettingsItemMp = ItemSettings<"ITEM_MP">;
export type ItemSettingsItemMpReplenish = ItemSettings<"ITEM_MP_REPLENISH">;
export type ItemSettingsItemNanabBerry = ItemSettings<"ITEM_NANAB_BERRY">;
export type ItemSettingsItemOtherEvolutionStoneA = ItemSettings<"ITEM_OTHER_EVOLUTION_STONE_A">;
export type ItemSettingsItemOtherEvolutionStoneMapleA = ItemSettings<"ITEM_OTHER_EVOLUTION_STONE_MAPLE_A">;
export type ItemSettingsItemOtherEvolutionStoneMapleB = ItemSettings<"ITEM_OTHER_EVOLUTION_STONE_MAPLE_B">;
export type ItemSettingsItemOtherEvolutionStoneMapleC = ItemSettings<"ITEM_OTHER_EVOLUTION_STONE_MAPLE_C">;
export type ItemSettingsItemPaidRaidTicket = ItemSettings<"ITEM_PAID_RAID_TICKET">;
export type ItemSettingsItemPinapBerry = ItemSettings<"ITEM_PINAP_BERRY">;
export type ItemSettingsItemPoffin = ItemSettings<"ITEM_POFFIN">;
export type ItemSettingsItemPokemonStorageUpgrade = ItemSettings<"ITEM_POKEMON_STORAGE_UPGRADE">;
export type ItemSettingsItemPokeBall = ItemSettings<"ITEM_POKE_BALL">;
export type ItemSettingsItemPostcardInventory = ItemSettings<"ITEM_POSTCARD_INVENTORY">;
export type ItemSettingsItemPostcardStorageUpgrade = ItemSettings<"ITEM_POSTCARD_STORAGE_UPGRADE">;
export type ItemSettingsItemPotion = ItemSettings<"ITEM_POTION">;
export type ItemSettingsItemPremierBall = ItemSettings<"ITEM_PREMIER_BALL">;
export type ItemSettingsItemRareCandy = ItemSettings<"ITEM_RARE_CANDY">;
export type ItemSettingsItemRazzBerry = ItemSettings<"ITEM_RAZZ_BERRY">;
export type ItemSettingsItemRemoteRaidTicket = ItemSettings<"ITEM_REMOTE_RAID_TICKET">;
export type ItemSettingsItemResourceCrownedZacian = ItemSettings<"ITEM_RESOURCE_CROWNED_ZACIAN">;
export type ItemSettingsItemResourceCrownedZamazenta = ItemSettings<"ITEM_RESOURCE_CROWNED_ZAMAZENTA">;
export type ItemSettingsItemRevive = ItemSettings<"ITEM_REVIVE">;
export type ItemSettingsItemRouteMaker = ItemSettings<"ITEM_ROUTE_MAKER">;
export type ItemSettingsItemShadowGem = ItemSettings<"ITEM_SHADOW_GEM">;
export type ItemSettingsItemShadowGemFragment = ItemSettings<"ITEM_SHADOW_GEM_FRAGMENT">;
export type ItemSettingsItemSingleStatIncrease = ItemSettings<"ITEM_SINGLE_STAT_INCREASE">;
export type ItemSettingsItemSoftSfida = ItemSettings<"ITEM_SOFT_SFIDA">;
export type ItemSettingsItemSpecialCamera = ItemSettings<"ITEM_SPECIAL_CAMERA">;
export type ItemSettingsItemStarPiece = ItemSettings<"ITEM_STAR_PIECE">;
export type ItemSettingsItemStickerInventory = ItemSettings<"ITEM_STICKER_INVENTORY">;
export type ItemSettingsItemSunStone = ItemSettings<"ITEM_SUN_STONE">;
export type ItemSettingsItemSuperPotion = ItemSettings<"ITEM_SUPER_POTION">;
export type ItemSettingsItemTeamChange = ItemSettings<"ITEM_TEAM_CHANGE">;
export type ItemSettingsItemTicketCitySafari00 = ItemSettings<"ITEM_TICKET_CITY_SAFARI_00">;
export type ItemSettingsItemTicketCitySafari01 = ItemSettings<"ITEM_TICKET_CITY_SAFARI_01">;
export type ItemSettingsItemTicketCitySafari02 = ItemSettings<"ITEM_TICKET_CITY_SAFARI_02">;
export type ItemSettingsItemTicketCitySafari04 = ItemSettings<"ITEM_TICKET_CITY_SAFARI_04">;
export type ItemSettingsItemTripleStatIncrease = ItemSettings<"ITEM_TRIPLE_STAT_INCREASE">;
export type ItemSettingsItemTroyDisk = ItemSettings<"ITEM_TROY_DISK">;
export type ItemSettingsItemTroyDiskGlacial = ItemSettings<"ITEM_TROY_DISK_GLACIAL">;
export type ItemSettingsItemTroyDiskMagnetic = ItemSettings<"ITEM_TROY_DISK_MAGNETIC">;
export type ItemSettingsItemTroyDiskMossy = ItemSettings<"ITEM_TROY_DISK_MOSSY">;
export type ItemSettingsItemTroyDiskRainy = ItemSettings<"ITEM_TROY_DISK_RAINY">;
export type ItemSettingsItemTroyDiskSparkly = ItemSettings<"ITEM_TROY_DISK_SPARKLY">;
export type ItemSettingsItemUltraBall = ItemSettings<"ITEM_ULTRA_BALL">;
export type ItemSettingsItemUpGrade = ItemSettings<"ITEM_UP_GRADE">;
export type ItemSettingsItemWeparBerry = ItemSettings<"ITEM_WEPAR_BERRY">;
export type ItemSettingsItemWildBall = ItemSettings<"ITEM_WILD_BALL">;
export type ItemSettingsItemWildBallPremier = ItemSettings<"ITEM_WILD_BALL_PREMIER">;
export type ItemSettingsItemXlRareCandy = ItemSettings<"ITEM_XL_RARE_CANDY">;
export type ItemSettingsItemXAttack = ItemSettings<"ITEM_X_ATTACK">;
export type ItemSettingsItemXDefense = ItemSettings<"ITEM_X_DEFENSE">;
export type ItemSettingsItemXMiracle = ItemSettings<"ITEM_X_MIRACLE">;

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
