// Generated from Pokémon GO masterfile — group "ticketGiftingSettings", 2 entries (variant aliases).

import type { S } from "../../_utils";
import type { TicketGiftingSettings } from "../types";

export type TicketGiftingSettingsItemGiftingSettings = S<TicketGiftingSettings<"ITEM_GIFTING_SETTINGS">>;
export type TicketGiftingSettingsTicketGiftingSettings = S<TicketGiftingSettings<"TICKET_GIFTING_SETTINGS">>;

export type TicketGiftingSettingsMasterfileEntry = TicketGiftingSettingsItemGiftingSettings | TicketGiftingSettingsTicketGiftingSettings;

export type TicketGiftingSettingsTemplateID = TicketGiftingSettingsMasterfileEntry["templateId"];
