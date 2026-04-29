// Generated from Pokémon GO masterfile — group "avatarGroupOrderSettings", 2 entries (structural types).

import type { W } from "../_utils";

export interface AvatarGroupOrderSettings<TemplateID extends string = string, TData extends AvatarGroupOrderSettingsData = AvatarGroupOrderSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		avatarGroupOrderSettings: TData;
	};
}
export type AvatarGroupOrderSettingsType = W<AvatarGroupOrderSettings>;

export interface AvatarGroupOrderSettingsData {
	group: Array<{
		name:
			| "group_backpack"
			| "group_belt"
			| "group_face"
			| "group_glasses"
			| "group_gloves"
			| "group_halloween"
			| "group_hat"
			| "group_necklace"
			| "group_outfits"
			| "group_pants"
			| "group_poses"
			| "group_seasonal"
			| "group_shirt"
			| "group_shoes"
			| "group_socks"
			| "group_sponsor"
			| "group_uniqlo";
		newTagEnabled?: boolean;
		order: number;
	}>;
}

export type AvatarGroup = "AVATAR_GROUP_ORDER_SETTINGS" | "AVATAR_GROUP_SETTINGS";
