// Generated from Pokémon GO masterfile — group "recommendedSearchSettings", 10 entries (structural types).

export interface RecommendedSearchSettings<TemplateID extends string = string, TData extends RecommendedSearchSettingsData = RecommendedSearchSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		recommendedSearchSettings: TData;
	};
}

export interface RecommendedSearchSettingsData {
	appendSearchString?: "0*,1*,2*" | "3*,4*";
	searchKey?:
		| "badge_pokedex_entries_title"
		| "filter_key_evolve_mega"
		| "filter_key_hatched"
		| "filter_key_legendary"
		| "filter_key_shiny"
		| "filter_key_traded"
		| "pokemon_info_evolve_button"
		| "pokemon_type_normal";
	searchLabel:
		| "0*,1*,2*"
		| "3*,4*"
		| "badge_pokedex_entries_title"
		| "filter_label_evolvable"
		| "filter_label_evolve_mega"
		| "filter_label_hatched"
		| "filter_label_legendary"
		| "filter_label_shiny"
		| "filter_label_traded"
		| "pokemon_type_normal";
}
