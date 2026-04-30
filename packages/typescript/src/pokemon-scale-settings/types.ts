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
