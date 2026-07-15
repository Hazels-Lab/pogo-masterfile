// Generated from Pokémon GO masterfile — group "formSettings", 1025 entries (structural types).

import type { W } from "../_utils";

export interface FormSettings<TemplateID extends string = string, TData extends FormSettingsData = FormSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		formSettings: TData;
	};
}
export type FormSettingsType = W<FormSettings>;

export interface FormSettingsData {
	forms?: Array<{
		assetBundleSuffix?:
			| "pm0001_00_pgo_fall2019"
			| "pm0003_00_pgo_copy2019"
			| "pm0004_00_pgo_fall2019"
			| "pm0006_00_pgo_copy2019"
			| "pm0007_00_pgo_fall2019"
			| "pm0009_00_pgo_copy2019"
			| "pm0025_00_pgo_4thanniversary"
			| "pm0025_00_pgo_5thanniversary"
			| "pm0025_00_pgo_copy2019"
			| "pm0025_00_pgo_fall2019"
			| "pm0025_00_pgo_flying"
			| "pm0025_00_pgo_movie2020"
			| "pm0025_00_pgo_popstar"
			| "pm0025_00_pgo_rockstar"
			| "pm0025_00_pgo_tshirt"
			| "pm0025_00_pgo_winter2020"
			| "pm0025_00_pikachu_pgo_kariyushi"
			| "pm0079_00_pgo_2020"
			| "pm0080_00_pgo_2021"
			| "pm0150_00_pgo_a"
			| "pm0225_00_pgo_winter2020"
			| "pm0302_00_pgo_fall2020"
			| "pm0613_00_pgo_winter2020"
			| "pm0614_00_pgo_winter2020";
		assetBundleValue?: number;
		form: number | string;
		isCostume?: boolean;
		sillouetteObfuscationGroup?: {
			groupNumber: number;
			overrideDisplayForm: "DUDUNSPARCE_TWO" | "POLTCHAGEIST_COUNTERFEIT" | "SINISTEA_PHONY";
		};
	}>;
	pokemon: string;
}
