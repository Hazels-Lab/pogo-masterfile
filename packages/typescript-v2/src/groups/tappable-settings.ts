export interface TappableSettings<T extends string> {
	templateId: T;
	data: TappableSettingsData<T>;
}

export interface TappableSettingsData<T extends string> {
	templateId: T;
	tappableSettings: unknown;
}

export type TappableSettingsSettings = TappableSettings<"TAPPABLE_SETTINGS">;
export type TappableSettingsSettingsBreakfast = TappableSettings<"TAPPABLE_SETTINGS_BREAKFAST">;
export type TappableSettingsTypeHat = TappableSettings<"TAPPABLE_TYPE_HAT">;
export type TappableSettingsTypeMaple = TappableSettings<"TAPPABLE_TYPE_MAPLE">;
export type TappableSettingsTypePokeball = TappableSettings<"TAPPABLE_TYPE_POKEBALL">;

export type TappableSettingsMasterfileEntry =
	| TappableSettingsSettings
	| TappableSettingsSettingsBreakfast
	| TappableSettingsTypeHat
	| TappableSettingsTypeMaple
	| TappableSettingsTypePokeball;

export type TappableSettingsTemplateID = TappableSettingsMasterfileEntry["templateId"];
