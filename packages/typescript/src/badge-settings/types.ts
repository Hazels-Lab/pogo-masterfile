// Generated from Pokémon GO masterfile — group "badgeSettings", 868 entries (structural types).

export interface BadgeSettings<TemplateID extends string = string, TData extends BadgeSettingsData = BadgeSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		badgeSettings: TData;
	};
}

export interface BadgeSettingsData {
	badgeRank: number;
	badgeType: number | string;
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
