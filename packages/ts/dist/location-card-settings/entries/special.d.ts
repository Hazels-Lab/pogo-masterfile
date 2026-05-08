// Generated from Pokémon GO masterfile — group "locationCardSettings", split "special", 3 entries.

import type { S } from "../../_utils";
import type { LocationCardSettings } from "../types";

export type LocationCardSettingsSpecialBackground2024GlobalGofestMoonUltraWormhole001 = S<
	LocationCardSettings<
		"LC_SPECIAL_BACKGROUND_2024_GLOBAL_GOFEST_MOON_ULTRA_WORMHOLE_001",
		{
			cardType: "SPECIAL_BACKGROUND";
			imageUrl: "sb_GoFest2024_wormhole_moon";
			vfxAddress: "bgfx_UltraWormhole";
		}
	>
>;
export type LocationCardSettingsSpecialBackground2024GlobalGofestSunUltraWormhole001 = S<
	LocationCardSettings<
		"LC_SPECIAL_BACKGROUND_2024_GLOBAL_GOFEST_SUN_ULTRA_WORMHOLE_001",
		{
			cardType: "SPECIAL_BACKGROUND";
			imageUrl: "sb_GoFest2024_wormhole_sun";
			vfxAddress: "bgfx_UltraWormhole";
		}
	>
>;
export type LocationCardSettingsSpecialBackground2024GlobalGofestUltraWormhole001 = S<
	LocationCardSettings<
		"LC_SPECIAL_BACKGROUND_2024_GLOBAL_GOFEST_ULTRA_WORMHOLE_001",
		{
			cardType: "SPECIAL_BACKGROUND";
			imageUrl: "sb_GoFest2024_wormhole";
			vfxAddress: "bgfx_UltraWormhole";
		}
	>
>;

export type LocationCardSettingsSpecialMasterfileEntry =
	| LocationCardSettingsSpecialBackground2024GlobalGofestMoonUltraWormhole001
	| LocationCardSettingsSpecialBackground2024GlobalGofestSunUltraWormhole001
	| LocationCardSettingsSpecialBackground2024GlobalGofestUltraWormhole001;
