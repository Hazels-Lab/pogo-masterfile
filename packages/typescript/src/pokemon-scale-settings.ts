// Generated from Pokémon GO masterfile — group "pokemonScaleSettings", 6 entries.

export interface PokemonScaleSettings<
	TemplateID extends string = string,
	TData extends PokemonScaleSettingsData = PokemonScaleSettingsData,
> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		pokemonScaleSettings: TData;
	};
}

export interface PokemonScaleSettingsData {
	maxHeight: number;
	minHeight: number;
	pokemonScaleMode?: "BattlePokemonScale" | "GuiScale" | "GymTopperScale" | "MapPokemonScale" | "RaidBossScale";
}

export type PokemonScaleSettingsBattlePokemonScale = PokemonScaleSettings<
	"POKEMON_SCALE_SETTINGS_BATTLE_POKEMON_SCALE",
	{
		maxHeight: 4.35;
		minHeight: 0.31;
		pokemonScaleMode: "BattlePokemonScale";
	}
>;
export type PokemonScaleSettingsGuiScale = PokemonScaleSettings<
	"POKEMON_SCALE_SETTINGS_GUI_SCALE",
	{
		maxHeight: 3.6;
		minHeight: 0.8;
		pokemonScaleMode: "GuiScale";
	}
>;
export type PokemonScaleSettingsGymTopperScale = PokemonScaleSettings<
	"POKEMON_SCALE_SETTINGS_GYM_TOPPER_SCALE",
	{
		maxHeight: 4.2;
		minHeight: 1.3;
		pokemonScaleMode: "GymTopperScale";
	}
>;
export type PokemonScaleSettingsMapPokemonScale = PokemonScaleSettings<
	"POKEMON_SCALE_SETTINGS_MAP_POKEMON_SCALE",
	{
		maxHeight: 10;
		minHeight: 2.3;
		pokemonScaleMode: "MapPokemonScale";
	}
>;
export type PokemonScaleSettingsNaturalScale = PokemonScaleSettings<
	"POKEMON_SCALE_SETTINGS_NATURAL_SCALE",
	{
		maxHeight: 4.35;
		minHeight: 0.31;
	}
>;
export type PokemonScaleSettingsRaidBossScale = PokemonScaleSettings<
	"POKEMON_SCALE_SETTINGS_RAID_BOSS_SCALE",
	{
		maxHeight: 8;
		minHeight: 4;
		pokemonScaleMode: "RaidBossScale";
	}
>;

export type PokemonScaleSettingsMasterfileEntry =
	| PokemonScaleSettingsBattlePokemonScale
	| PokemonScaleSettingsGuiScale
	| PokemonScaleSettingsGymTopperScale
	| PokemonScaleSettingsMapPokemonScale
	| PokemonScaleSettingsNaturalScale
	| PokemonScaleSettingsRaidBossScale;

export type PokemonScaleSettingsTemplateID = PokemonScaleSettingsMasterfileEntry["templateId"];
