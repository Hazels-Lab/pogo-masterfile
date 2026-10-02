// Generated from Pokémon GO masterfile — group "locationCardSettings", split "tokmun", 3 entries.

import type { S } from "../../_utils";
import type { LocationCardSettings } from "../types";

export type LocationCardSettingsTokmunStamp01 = S<
	LocationCardSettings<
		"LC_TOKMUN_STAMP_01",
		{
			imageUrl: "lc_TokMun_shinagawa";
		}
	>
>;
export type LocationCardSettingsTokmunStamp02 = S<
	LocationCardSettings<
		"LC_TOKMUN_STAMP_02",
		{
			imageUrl: "lc_TokMun_koto";
		}
	>
>;
export type LocationCardSettingsTokmunStamp03 = S<
	LocationCardSettings<
		"LC_TOKMUN_STAMP_03",
		{
			imageUrl: "lc_TokMun_minato";
		}
	>
>;

export type LocationCardSettingsTokmunMasterfileEntry =
	| LocationCardSettingsTokmunStamp01
	| LocationCardSettingsTokmunStamp02
	| LocationCardSettingsTokmunStamp03;
