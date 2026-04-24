export interface AvatarGroupOrderSettings<TemplateID extends string> {
	templateId: TemplateID;
	data: AvatarGroupOrderSettingsData<TemplateID>;
}

export interface AvatarGroupOrderSettingsData<TemplateID extends string> {
	templateId: TemplateID;
	avatarGroupOrderSettings: {
		group: Array<
			{
				name: "group_backpack" | "group_belt" | "group_face" | "group_glasses" | "group_gloves" | "group_halloween" | "group_hat" | "group_necklace" | "group_outfits" | "group_pants" | "group_poses" | "group_seasonal" | "group_shirt" | "group_shoes" | "group_socks" | "group_sponsor" | "group_uniqlo";
				newTagEnabled?: true;
				order: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
			}
		>;
	};
}

export type AvatarGroupOrderSettingsOrderSettings = AvatarGroupOrderSettings<"AVATAR_GROUP_ORDER_SETTINGS">;
export type AvatarGroupOrderSettingsSettings = AvatarGroupOrderSettings<"AVATAR_GROUP_SETTINGS">;

export type AvatarGroupOrderSettingsMasterfileEntry =
	| AvatarGroupOrderSettingsOrderSettings
	| AvatarGroupOrderSettingsSettings;

export type AvatarGroupOrderSettingsTemplateID = AvatarGroupOrderSettingsMasterfileEntry["templateId"];
