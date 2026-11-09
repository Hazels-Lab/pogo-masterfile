// Generated from Pokémon GO masterfile — group "locationCardSettings", split "tpc30", 4 entries.

import type { S } from "../../_utils";
import type { LocationCardSettings } from "../types";

export type LocationCardSettingsTpc30My = S<
	LocationCardSettings<
		"LC_TPC30_MY",
		{
			cardTreatment: "CROP_BLEED";
			imageUrl: "lc_tpc30th_malaysia";
		}
	>
>;
export type LocationCardSettingsTpc30Ph = S<
	LocationCardSettings<
		"LC_TPC30_PH",
		{
			cardTreatment: "CROP_BLEED";
			imageUrl: "lc_tpc30th_philippines";
		}
	>
>;
export type LocationCardSettingsTpc30Sg = S<
	LocationCardSettings<
		"LC_TPC30_SG",
		{
			cardTreatment: "CROP_BLEED";
			imageUrl: "lc_tpc30th_singapore";
		}
	>
>;
export type LocationCardSettingsTpc30Tw = S<
	LocationCardSettings<
		"LC_TPC30_TW",
		{
			cardTreatment: "CROP_BLEED";
			imageUrl: "lc_tpc30th_taiwan";
		}
	>
>;

export type LocationCardSettingsTpc30MasterfileEntry =
	| LocationCardSettingsTpc30My
	| LocationCardSettingsTpc30Ph
	| LocationCardSettingsTpc30Sg
	| LocationCardSettingsTpc30Tw;
