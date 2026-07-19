// Generated from Pokémon GO masterfile — group "itemSettings", split "incident-ticket", 5 entries.

import type { S } from "../../_utils";
import type { ItemSettings } from "../types";

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

export type ItemSettingsIncidentTicketMasterfileEntry =
	| ItemSettingsItemGiovanniMap
	| ItemSettingsItemLeaderMap
	| ItemSettingsItemLeaderMapFragment
	| ItemSettingsItemShadowGem
	| ItemSettingsItemShadowGemFragment;
