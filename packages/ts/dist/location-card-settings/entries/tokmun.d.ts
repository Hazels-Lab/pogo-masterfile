// Generated from Pokémon GO masterfile — group "locationCardSettings", split "tokmun", 3 entries.

import type { S } from "../../_utils";
import type { LocationCardSettings } from "../types";

export type LocationCardSettingsTokmunStamp01 = S<
	LocationCardSettings<
		"LC_TOKMUN_STAMP_01",
		{
			imageUrl: "lc_TokMun_shinagawa";
			locationCard: "LC_TOKMUN_STAMP_01";
		}
	>
>;
export type LocationCardSettingsTokmunStamp02 = S<
	LocationCardSettings<
		"LC_TOKMUN_STAMP_02",
		{
			imageUrl: "lc_TokMun_koto";
			locationCard: "LC_TOKMUN_STAMP_02";
		}
	>
>;
export type LocationCardSettingsTokmunStamp03 = S<
	LocationCardSettings<
		"LC_TOKMUN_STAMP_03",
		{
			imageUrl: "lc_TokMun_minato";
			locationCard: "LC_TOKMUN_STAMP_03";
		}
	>
>;

export type LocationCardSettingsTokmunMasterfileEntry =
	| LocationCardSettingsTokmunStamp01
	| LocationCardSettingsTokmunStamp02
	| LocationCardSettingsTokmunStamp03;
