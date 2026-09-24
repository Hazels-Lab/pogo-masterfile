// Generated from Pokémon GO masterfile — group "quickInviteSettings", 6 entries (structural types).

import type { W } from "../_utils";

export interface QuickInviteSettings<TemplateID extends string = string, TData extends QuickInviteSettingsData = QuickInviteSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		quickInviteSettings: TData & {
			enabled: true;
			suggestedPlayersVariation: "PGO_RAID_A_TEST_0611";
		};
	};
}
export type QuickInviteSettingsType = W<QuickInviteSettings>;

export interface QuickInviteSettingsData {}
