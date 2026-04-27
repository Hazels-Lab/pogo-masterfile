// Generated from Pokémon GO masterfile — group "avatarGroupOrderSettings", 2 entries (structural types).

export type * from "./variants";

export interface AvatarGroupOrderSettings<TemplateID extends string = string, TData extends AvatarGroupOrderSettingsData = AvatarGroupOrderSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		avatarGroupOrderSettings: TData;
	};
}

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

export type AvatarGroupOrderSettingsMasterfileEntry = AvatarGroupOrderSettingsOrderSettings | AvatarGroupOrderSettingsSettings;

export type AvatarGroupOrderSettingsTemplateID = AvatarGroupOrderSettingsMasterfileEntry["templateId"];
