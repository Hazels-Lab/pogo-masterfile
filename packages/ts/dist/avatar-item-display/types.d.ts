// Generated from Pokémon GO masterfile — group "avatarItemDisplay", 1663 entries (structural types).

import type { W } from "../_utils";

export interface AvatarItemDisplay<TemplateID extends string = string, TData extends AvatarItemDisplayData = AvatarItemDisplayData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		avatarItemDisplay: TData;
	};
}
export type AvatarItemDisplayType = W<AvatarItemDisplay>;

export interface AvatarItemDisplayData {
	displayStringId?: string;
	iconAddress: string;
}
