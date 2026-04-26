// Generated from Pokémon GO masterfile — group "recommendedSearchSettings", 10 entries.

import type { S } from "./_utils";
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

export type RecommendedSearchSettingsAppraisalIvHigh = S<
	RecommendedSearchSettings<
		"RECOMMENDED_SEARCH_APPRAISAL_IV_HIGH",
		{
			appendSearchString: "3*,4*";
			searchLabel: "3*,4*";
		}
	>
>;
export type RecommendedSearchSettingsAppraisalIvLow = S<
	RecommendedSearchSettings<
		"RECOMMENDED_SEARCH_APPRAISAL_IV_LOW",
		{
			appendSearchString: "0*,1*,2*";
			searchLabel: "0*,1*,2*";
		}
	>
>;
export type RecommendedSearchSettingsAppraisalLabelEvolveMega = S<
	RecommendedSearchSettings<
		"RECOMMENDED_SEARCH_APPRAISAL_LABEL_EVOLVE_MEGA",
		{
			searchKey: "filter_key_evolve_mega";
			searchLabel: "filter_label_evolve_mega";
		}
	>
>;
export type RecommendedSearchSettingsBadgeKantoRegion = S<
	RecommendedSearchSettings<
		"RECOMMENDED_SEARCH_BADGE_KANTO_REGION",
		{
			searchKey: "badge_pokedex_entries_title";
			searchLabel: "badge_pokedex_entries_title";
		}
	>
>;
export type RecommendedSearchSettingsFilterLabelEvolvable = S<
	RecommendedSearchSettings<
		"RECOMMENDED_SEARCH_FILTER_LABEL_EVOLVABLE",
		{
			searchKey: "pokemon_info_evolve_button";
			searchLabel: "filter_label_evolvable";
		}
	>
>;
export type RecommendedSearchSettingsFilterLabelHatched = S<
	RecommendedSearchSettings<
		"RECOMMENDED_SEARCH_FILTER_LABEL_HATCHED",
		{
			searchKey: "filter_key_hatched";
			searchLabel: "filter_label_hatched";
		}
	>
>;
export type RecommendedSearchSettingsFilterLabelLegendary = S<
	RecommendedSearchSettings<
		"RECOMMENDED_SEARCH_FILTER_LABEL_LEGENDARY",
		{
			searchKey: "filter_key_legendary";
			searchLabel: "filter_label_legendary";
		}
	>
>;
export type RecommendedSearchSettingsFilterLabelShiny = S<
	RecommendedSearchSettings<
		"RECOMMENDED_SEARCH_FILTER_LABEL_SHINY",
		{
			searchKey: "filter_key_shiny";
			searchLabel: "filter_label_shiny";
		}
	>
>;
export type RecommendedSearchSettingsFilterLabelTraded = S<
	RecommendedSearchSettings<
		"RECOMMENDED_SEARCH_FILTER_LABEL_TRADED",
		{
			searchKey: "filter_key_traded";
			searchLabel: "filter_label_traded";
		}
	>
>;
export type RecommendedSearchSettingsPokemonTypeNormal = S<
	RecommendedSearchSettings<
		"RECOMMENDED_SEARCH_POKEMON_TYPE_NORMAL",
		{
			searchKey: "pokemon_type_normal";
			searchLabel: "pokemon_type_normal";
		}
	>
>;

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
