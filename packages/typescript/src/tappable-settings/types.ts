// Generated from Pokémon GO masterfile — group "tappableSettings", 5 entries (structural types).

export interface TappableSettings<TemplateID extends string = string, TData extends TappableSettingsData = TappableSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		tappableSettings: TData & {
			visibleRadiusMeters: 150;
		};
	};
}

export interface TappableSettingsData {
	avgTappablesInView?: number;
	buddyFovDegress?: number;
	movementRespawnThresholdMeters?: number;
	removeWhenTapped?: boolean;
	spawnAngleDegrees?: number;
	tappableAssetKey?: "TAPPABLE_TYPE_HAT" | "TAPPABLE_TYPE_MAPLE" | "TAPPABLE_TYPE_POKEBALL";
	type?: "TAPPABLE_TYPE_BREAKFAST";
}
