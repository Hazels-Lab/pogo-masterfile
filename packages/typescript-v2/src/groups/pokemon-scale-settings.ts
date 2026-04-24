export interface PokemonScaleSettings<T extends string> {
	templateId: T;
	data: PokemonScaleSettingsData<T>;
}

export interface PokemonScaleSettingsData<T extends string> {
	templateId: T;
	pokemonScaleSettings: unknown;
}

export type PokemonScaleSettingsBattlePokemonScale = PokemonScaleSettings<"POKEMON_SCALE_SETTINGS_BATTLE_POKEMON_SCALE">;
export type PokemonScaleSettingsGuiScale = PokemonScaleSettings<"POKEMON_SCALE_SETTINGS_GUI_SCALE">;
export type PokemonScaleSettingsGymTopperScale = PokemonScaleSettings<"POKEMON_SCALE_SETTINGS_GYM_TOPPER_SCALE">;
export type PokemonScaleSettingsMapPokemonScale = PokemonScaleSettings<"POKEMON_SCALE_SETTINGS_MAP_POKEMON_SCALE">;
export type PokemonScaleSettingsNaturalScale = PokemonScaleSettings<"POKEMON_SCALE_SETTINGS_NATURAL_SCALE">;
export type PokemonScaleSettingsRaidBossScale = PokemonScaleSettings<"POKEMON_SCALE_SETTINGS_RAID_BOSS_SCALE">;

export type PokemonScaleSettingsMasterfileEntry =
	| PokemonScaleSettingsBattlePokemonScale
	| PokemonScaleSettingsGuiScale
	| PokemonScaleSettingsGymTopperScale
	| PokemonScaleSettingsMapPokemonScale
	| PokemonScaleSettingsNaturalScale
	| PokemonScaleSettingsRaidBossScale;

export type PokemonScaleSettingsTemplateID = PokemonScaleSettingsMasterfileEntry["templateId"];
