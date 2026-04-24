export interface AvatarGroupOrderSettings<T extends string> {
	templateId: T;
	data: AvatarGroupOrderSettingsData<T>;
}

export interface AvatarGroupOrderSettingsData<T extends string> {
	templateId: T;
	avatarGroupOrderSettings: unknown;
}

export type AvatarGroupOrderSettingsOrderSettings = AvatarGroupOrderSettings<"AVATAR_GROUP_ORDER_SETTINGS">;
export type AvatarGroupOrderSettingsSettings = AvatarGroupOrderSettings<"AVATAR_GROUP_SETTINGS">;

export type AvatarGroupOrderSettingsMasterfileEntry =
	| AvatarGroupOrderSettingsOrderSettings
	| AvatarGroupOrderSettingsSettings;

export type AvatarGroupOrderSettingsTemplateID = AvatarGroupOrderSettingsMasterfileEntry["templateId"];
