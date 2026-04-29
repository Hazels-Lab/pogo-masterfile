// Generated from Pokémon GO masterfile — group "itemSettings", split "global-event-ticket", 31 entries.

import type { S } from "../../_utils";
import type { ItemSettings } from "../types";

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
export type ItemSettingsItemEventTicketGrayToGift = S<
	ItemSettings<
		"ITEM_EVENT_TICKET_GRAY_TO_GIFT",
		{
			category: "ITEM_CATEGORY_GLOBAL_EVENT_TICKET";
			descriptionOverride: "item_event_ticket_06_desc_ENTEI_SHADOW_RAID_DAY";
			globalEventTicket: {
				backgroundImageUrl: "https://storage.googleapis.com/prod-public-images/1054x512.jpg";
				clientEventEndTimeUtcMs: "1777741200000";
				clientEventStartTimeUtcMs: "1777730400000";
				eventBannerUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-entei-shadow-raid-day-2026-nologo.jpg";
				eventEndTime: "2026-05-02T17:00:00";
				eventStartTime: "2026-05-02T14:00:00";
				itemBagDescriptionKey: "item_event_ticket_gray_details_ENTEI_SHADOW_RAID_DAY";
				ticketItem: "ITEM_EVENT_TICKET_GRAY";
			};
			ignoreInventorySpace: true;
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

export type ItemSettingsGlobalEventTicketMasterfileEntry =
	| ItemSettingsItemBattlePassTicket
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
	| ItemSettingsItemEventTicketGrayToGift
	| ItemSettingsItemEventTicketPink
	| ItemSettingsItemEventTicketPinkToGift
	| ItemSettingsItemEvergreenTicket
	| ItemSettingsItemEvergreenTicketToGift
	| ItemSettingsItemGlobalEventTicket
	| ItemSettingsItemGlobalEventTicketToGift
	| ItemSettingsItemTicketCitySafari00
	| ItemSettingsItemTicketCitySafari01
	| ItemSettingsItemTicketCitySafari02
	| ItemSettingsItemTicketCitySafari04;
