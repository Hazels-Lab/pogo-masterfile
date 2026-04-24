export interface PokemonScaleSettings<TemplateID extends string> {
	templateId: TemplateID;
	data: PokemonScaleSettingsData<TemplateID>;
}

export interface PokemonScaleSettingsData<TemplateID extends string> {
	templateId: TemplateID;
	pokemonScaleSettings: {
		maxHeight: 3.6 | 4.2 | 4.35 | 8 | 10;
		minHeight: 0.31 | 0.8 | 1.3 | 2.3 | 4;
		pokemonScaleMode?: "BattlePokemonScale" | "GuiScale" | "GymTopperScale" | "MapPokemonScale" | "RaidBossScale";
	};
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
