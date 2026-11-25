// Generated from Pokémon GO masterfile — group "ticketGiftingSettings", 2 entries (structural types).

import type { W } from "../_utils";

export interface TicketGiftingSettings<TemplateID extends string = string, TData extends TicketGiftingSettingsData = TicketGiftingSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		ticketGiftingSettings: TData & {
			dailyPlayerGiftingLimit: 20;
			minPlayerLevel: 5;
			minRequiredFriendshipLevel: "FRIENDSHIP_LEVEL_2";
		};
	};
}
export type TicketGiftingSettingsType = W<TicketGiftingSettings>;

export interface TicketGiftingSettingsData {}
