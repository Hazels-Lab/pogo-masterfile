// Generated from Pokémon GO masterfile — group "recommendedSearchSettings", 10 entries (structural types).

import type { W } from "../_utils";

export interface RecommendedSearchSettings<TemplateID extends string = string, TData extends RecommendedSearchSettingsData = RecommendedSearchSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		recommendedSearchSettings: TData;
	};
}
export type RecommendedSearchSettingsType = W<RecommendedSearchSettings>;

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

export type RecommendedSearch =
	| "RECOMMENDED_SEARCH_APPRAISAL_IV_HIGH"
	| "RECOMMENDED_SEARCH_APPRAISAL_IV_LOW"
	| "RECOMMENDED_SEARCH_APPRAISAL_LABEL_EVOLVE_MEGA"
	| "RECOMMENDED_SEARCH_BADGE_KANTO_REGION"
	| "RECOMMENDED_SEARCH_FILTER_LABEL_EVOLVABLE"
	| "RECOMMENDED_SEARCH_FILTER_LABEL_HATCHED"
	| "RECOMMENDED_SEARCH_FILTER_LABEL_LEGENDARY"
	| "RECOMMENDED_SEARCH_FILTER_LABEL_SHINY"
	| "RECOMMENDED_SEARCH_FILTER_LABEL_TRADED"
	| "RECOMMENDED_SEARCH_POKEMON_TYPE_NORMAL";
