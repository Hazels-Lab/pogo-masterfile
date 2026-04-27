// Generated from Pokémon GO masterfile — group "evolutionChainDisplaySettings", 79 entries (structural types).

export interface EvolutionChainDisplaySettings<
	TemplateID extends string = string,
	TData extends EvolutionChainDisplaySettingsData = EvolutionChainDisplaySettingsData,
> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		evolutionChainDisplaySettings: TData;
	};
}

export interface EvolutionChainDisplaySettingsData {
	evolutionChains?: Array<{
		evolutionInfos: Array<{
			form?: string;
			gender?: "FEMALE" | "GENDERLESS" | "MALE";
			pokemon: string;
		}>;
		headerMessage?:
			| "alola_pokedex_header"
			| "form_artisan"
			| "form_counterfeit"
			| "form_masterpiece"
			| "galarian_pokedex_header"
			| "gender_female"
			| "gender_male"
			| "hisuian_pokedex_header"
			| "paldean_pokedex_header";
	}>;
	pokemon: string;
}
