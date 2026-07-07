// Generated from Pokémon GO masterfile — group "itemSettings", split "raid-ticket", 3 entries.

import type { S } from "../../_utils";
import type { ItemSettings } from "../types";

export type ItemSettingsItemFreeRaidTicket = S<
	ItemSettings<
		"ITEM_FREE_RAID_TICKET",
		{
			category: "ITEM_CATEGORY_RAID_TICKET";
			dropTrainerLevel: 100;
			itemId: "ITEM_FREE_RAID_TICKET";
			itemType: "ITEM_TYPE_RAID_TICKET";
		}
	>
>;
export type ItemSettingsItemPaidRaidTicket = S<
	ItemSettings<
		"ITEM_PAID_RAID_TICKET",
		{
			category: "ITEM_CATEGORY_RAID_TICKET";
			dropTrainerLevel: 1;
			itemId: "ITEM_PAID_RAID_TICKET";
			itemType: "ITEM_TYPE_RAID_TICKET";
		}
	>
>;
export type ItemSettingsItemRemoteRaidTicket = S<
	ItemSettings<
		"ITEM_REMOTE_RAID_TICKET",
		{
			category: "ITEM_CATEGORY_RAID_TICKET";
			dropTrainerLevel: 5;
			itemId: "ITEM_REMOTE_RAID_TICKET";
			itemType: "ITEM_TYPE_RAID_TICKET";
		}
	>
>;

export type ItemSettingsRaidTicketMasterfileEntry = ItemSettingsItemFreeRaidTicket | ItemSettingsItemPaidRaidTicket | ItemSettingsItemRemoteRaidTicket;
