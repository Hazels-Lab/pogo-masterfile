// Generated from Pokémon GO masterfile — group "locationCardSettings", split "tpc30", 4 entries.

import type { S } from "../../_utils";
import type { LocationCardSettings } from "../types";

export type LocationCardSettingsTpc30My = S<
	LocationCardSettings<
		"LC_TPC30_MY",
		{
			imageUrl: "lc_tpc30_my";
			locationCard: "LC_TPC30_MY";
		}
	>
>;
export type LocationCardSettingsTpc30Ph = S<
	LocationCardSettings<
		"LC_TPC30_PH",
		{
			imageUrl: "lc_tpc30_ph";
			locationCard: "LC_TPC30_PH";
		}
	>
>;
export type LocationCardSettingsTpc30Sg = S<
	LocationCardSettings<
		"LC_TPC30_SG",
		{
			imageUrl: "lc_tpc30_sg";
			locationCard: "LC_TPC30_SG";
		}
	>
>;
export type LocationCardSettingsTpc30Tw = S<
	LocationCardSettings<
		"LC_TPC30_TW",
		{
			imageUrl: "lc_tpc30_tw";
			locationCard: "LC_TPC30_TW";
		}
	>
>;

export type LocationCardSettingsTpc30MasterfileEntry =
	| LocationCardSettingsTpc30My
	| LocationCardSettingsTpc30Ph
	| LocationCardSettingsTpc30Sg
	| LocationCardSettingsTpc30Tw;
