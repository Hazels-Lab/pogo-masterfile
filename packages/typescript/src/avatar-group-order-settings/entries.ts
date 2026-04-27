// Generated from Pokémon GO masterfile — group "avatarGroupOrderSettings", 2 entries (variant aliases).

import type { S } from "../_utils";
import type { AvatarGroupOrderSettings } from "./index";

export type AvatarGroupOrderSettingsOrderSettings = S<
	AvatarGroupOrderSettings<
		"AVATAR_GROUP_ORDER_SETTINGS",
		{
			group: [
				{
					name: "group_uniqlo";
					order: 3;
				},
				{
					name: "group_halloween";
					order: 2;
				},
				{
					name: "group_sponsor";
					order: 1;
				},
			];
		}
	>
>;
export type AvatarGroupOrderSettingsSettings = S<
	AvatarGroupOrderSettings<
		"AVATAR_GROUP_SETTINGS",
		{
			group: [
				{
					name: "group_uniqlo";
					order: 1;
				},
				{
					name: "group_sponsor";
					order: 2;
				},
				{
					name: "group_seasonal";
					newTagEnabled: true;
					order: 3;
				},
				{
					name: "group_poses";
					order: 4;
				},
				{
					name: "group_hat";
					order: 5;
				},
				{
					name: "group_face";
					order: 6;
				},
				{
					name: "group_glasses";
					order: 7;
				},
				{
					name: "group_necklace";
					order: 8;
				},
				{
					name: "group_shirt";
					order: 9;
				},
				{
					name: "group_backpack";
					order: 10;
				},
				{
					name: "group_gloves";
					order: 11;
				},
				{
					name: "group_belt";
					order: 12;
				},
				{
					name: "group_pants";
					order: 13;
				},
				{
					name: "group_outfits";
					order: 14;
				},
				{
					name: "group_socks";
					order: 15;
				},
				{
					name: "group_shoes";
					order: 16;
				},
			];
		}
	>
>;

export type AvatarGroupOrderSettingsMasterfileEntry = AvatarGroupOrderSettingsOrderSettings | AvatarGroupOrderSettingsSettings;
