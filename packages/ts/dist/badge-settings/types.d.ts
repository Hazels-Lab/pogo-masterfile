// Generated from Pokémon GO masterfile — group "badgeSettings", 993 entries (structural types).

import type { W } from "../_utils";

export interface BadgeSettings<TemplateID extends string = string, TData extends BadgeSettingsData = BadgeSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		badgeSettings: TData & {
			badgeType: TemplateID;
		};
	};
}
export type BadgeSettingsType = W<BadgeSettings>;

export interface BadgeSettingsData {
	badgeRank: number;
	captureReward?: [
		object,
		object,
		object,
		object,
		{
			rewardTypes?: ["POKEMON_ENCOUNTER"];
		},
	];
	eventBadge?: boolean;
	eventBadgeSettings?: {
		obEventBadgeSettingsNumber6: number;
	};
	targets: Array<number>;
}
