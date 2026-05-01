// Generated from Pokémon GO masterfile — group "locationCardSettings", split "citysafari2025", 3 entries.

import type { S } from "../../_utils";
import type { LocationCardSettings } from "../types";

export type LocationCardSettingsCitysafari2025Buenosaires = S<
	LocationCardSettings<
		"LC_CITYSAFARI2025_BUENOSAIRES",
		{
			imageUrl: "lc_CitySafari2025_buenosAires";
			locationCard: "LC_CITYSAFARI2025_BUENOSAIRES";
		}
	>
>;
export type LocationCardSettingsCitysafari2025Miami = S<
	LocationCardSettings<
		"LC_CITYSAFARI2025_MIAMI",
		{
			imageUrl: "lc_CitySafari2025_miami";
			locationCard: "LC_CITYSAFARI2025_MIAMI";
		}
	>
>;
export type LocationCardSettingsCitysafari2025Sydney = S<
	LocationCardSettings<
		"LC_CITYSAFARI2025_SYDNEY",
		{
			imageUrl: "lc_CitySafari2025_sydney";
			locationCard: "LC_CITYSAFARI2025_SYDNEY";
		}
	>
>;

export type LocationCardSettingsCitysafari2025MasterfileEntry =
	| LocationCardSettingsCitysafari2025Buenosaires
	| LocationCardSettingsCitysafari2025Miami
	| LocationCardSettingsCitysafari2025Sydney;
