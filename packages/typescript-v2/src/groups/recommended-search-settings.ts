export interface RecommendedSearchSettings<TemplateID extends string> {
	templateId: TemplateID;
	data: RecommendedSearchSettingsData<TemplateID>;
}

export interface RecommendedSearchSettingsData<TemplateID extends string> {
	templateId: TemplateID;
	recommendedSearchSettings: {
		appendSearchString?: RecommendedSearchSettingsAppendSearchString;
		searchKey?: RecommendedSearchSettingsSearchKey;
		searchLabel: RecommendedSearchSettingsSearchLabel;
	};
}

export type RecommendedSearchSettingsAppendSearchString = "0*,1*,2*" | "3*,4*";

export type RecommendedSearchSettingsSearchKey = "badge_pokedex_entries_title" | "filter_key_evolve_mega" | "filter_key_hatched" | "filter_key_legendary" | "filter_key_shiny" | "filter_key_traded" | "pokemon_info_evolve_button" | "pokemon_type_normal";

export type RecommendedSearchSettingsSearchLabel = "0*,1*,2*" | "3*,4*" | "badge_pokedex_entries_title" | "filter_label_evolvable" | "filter_label_evolve_mega" | "filter_label_hatched" | "filter_label_legendary" | "filter_label_shiny" | "filter_label_traded" | "pokemon_type_normal";

export type RecommendedSearchSettingsAppraisalIvHigh = RecommendedSearchSettings<"RECOMMENDED_SEARCH_APPRAISAL_IV_HIGH">;
export type RecommendedSearchSettingsAppraisalIvLow = RecommendedSearchSettings<"RECOMMENDED_SEARCH_APPRAISAL_IV_LOW">;
export type RecommendedSearchSettingsAppraisalLabelEvolveMega = RecommendedSearchSettings<"RECOMMENDED_SEARCH_APPRAISAL_LABEL_EVOLVE_MEGA">;
export type RecommendedSearchSettingsBadgeKantoRegion = RecommendedSearchSettings<"RECOMMENDED_SEARCH_BADGE_KANTO_REGION">;
export type RecommendedSearchSettingsFilterLabelEvolvable = RecommendedSearchSettings<"RECOMMENDED_SEARCH_FILTER_LABEL_EVOLVABLE">;
export type RecommendedSearchSettingsFilterLabelHatched = RecommendedSearchSettings<"RECOMMENDED_SEARCH_FILTER_LABEL_HATCHED">;
export type RecommendedSearchSettingsFilterLabelLegendary = RecommendedSearchSettings<"RECOMMENDED_SEARCH_FILTER_LABEL_LEGENDARY">;
export type RecommendedSearchSettingsFilterLabelShiny = RecommendedSearchSettings<"RECOMMENDED_SEARCH_FILTER_LABEL_SHINY">;
export type RecommendedSearchSettingsFilterLabelTraded = RecommendedSearchSettings<"RECOMMENDED_SEARCH_FILTER_LABEL_TRADED">;
export type RecommendedSearchSettingsPokemonTypeNormal = RecommendedSearchSettings<"RECOMMENDED_SEARCH_POKEMON_TYPE_NORMAL">;

export type RecommendedSearchSettingsMasterfileEntry =
	| RecommendedSearchSettingsAppraisalIvHigh
	| RecommendedSearchSettingsAppraisalIvLow
	| RecommendedSearchSettingsAppraisalLabelEvolveMega
	| RecommendedSearchSettingsBadgeKantoRegion
	| RecommendedSearchSettingsFilterLabelEvolvable
	| RecommendedSearchSettingsFilterLabelHatched
	| RecommendedSearchSettingsFilterLabelLegendary
	| RecommendedSearchSettingsFilterLabelShiny
	| RecommendedSearchSettingsFilterLabelTraded
	| RecommendedSearchSettingsPokemonTypeNormal;

export type RecommendedSearchSettingsTemplateID = RecommendedSearchSettingsMasterfileEntry["templateId"];
