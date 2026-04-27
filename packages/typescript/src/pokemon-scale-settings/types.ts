// Generated from Pokémon GO masterfile — group "pokemonScaleSettings", 6 entries (structural types).

export interface PokemonScaleSettings<TemplateID extends string = string, TData extends PokemonScaleSettingsData = PokemonScaleSettingsData> {
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
