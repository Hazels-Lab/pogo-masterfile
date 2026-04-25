export interface TappableSettings<
	TemplateID extends string = string,
	TData extends TappableSettingsData = TappableSettingsData,
> {
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
	tappableAssetKey?: string;
	type?: string;
}

export type TappableSettingsSettings = TappableSettings<
	"TAPPABLE_SETTINGS",
	{
		avgTappablesInView: 1;
		buddyFovDegress: 130;
		movementRespawnThresholdMeters: 5;
		spawnAngleDegrees: 45;
	}
>;
export type TappableSettingsSettingsBreakfast = TappableSettings<
	"TAPPABLE_SETTINGS_BREAKFAST",
	{
		avgTappablesInView: 1;
		buddyFovDegress: 130;
		movementRespawnThresholdMeters: 5;
		removeWhenTapped: true;
		spawnAngleDegrees: 45;
		type: "TAPPABLE_TYPE_BREAKFAST";
	}
>;
export type TappableSettingsTypeHat = TappableSettings<
	"TAPPABLE_TYPE_HAT",
	{
		removeWhenTapped: true;
		tappableAssetKey: "TAPPABLE_TYPE_HAT";
	}
>;
export type TappableSettingsTypeMaple = TappableSettings<
	"TAPPABLE_TYPE_MAPLE",
	{
		removeWhenTapped: true;
		tappableAssetKey: "TAPPABLE_TYPE_MAPLE";
	}
>;
export type TappableSettingsTypePokeball = TappableSettings<
	"TAPPABLE_TYPE_POKEBALL",
	{
		removeWhenTapped: true;
		tappableAssetKey: "TAPPABLE_TYPE_POKEBALL";
	}
>;

export type TappableSettingsMasterfileEntry =
	| TappableSettingsSettings
	| TappableSettingsSettingsBreakfast
	| TappableSettingsTypeHat
	| TappableSettingsTypeMaple
	| TappableSettingsTypePokeball;

export type TappableSettingsTemplateID = TappableSettingsMasterfileEntry["templateId"];
