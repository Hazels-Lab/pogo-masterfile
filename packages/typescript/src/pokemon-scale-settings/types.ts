// Generated from Pokémon GO masterfile — group "pokemonScaleSettings", 6 entries (structural types).

import type { W } from "../_utils";

export interface PokemonScaleSettings<TemplateID extends string = string, TData extends PokemonScaleSettingsData = PokemonScaleSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		pokemonScaleSettings: TData;
	};
}
export type PokemonScaleSettingsType = W<PokemonScaleSettings>;

export interface PokemonScaleSettingsData {
	maxHeight: number;
	minHeight: number;
	pokemonScaleMode?: "BattlePokemonScale" | "GuiScale" | "GymTopperScale" | "MapPokemonScale" | "RaidBossScale";
}

export type PokemonScaleSettingsId =
	| "POKEMON_SCALE_SETTINGS_BATTLE_POKEMON_SCALE"
	| "POKEMON_SCALE_SETTINGS_GUI_SCALE"
	| "POKEMON_SCALE_SETTINGS_GYM_TOPPER_SCALE"
	| "POKEMON_SCALE_SETTINGS_MAP_POKEMON_SCALE"
	| "POKEMON_SCALE_SETTINGS_NATURAL_SCALE"
	| "POKEMON_SCALE_SETTINGS_RAID_BOSS_SCALE";
