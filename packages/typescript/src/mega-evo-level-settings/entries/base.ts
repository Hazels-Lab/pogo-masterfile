// Generated from Pokémon GO masterfile — group "megaEvoLevelSettings", split "base", 1 entry.

import type { S } from "../../_utils";
import type { MegaEvoLevelSettings } from "../types";

export type MegaEvoLevelSettings0 = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_0",
		{
			cooldown: {
				bypassCostInitial: 200;
				durationMs: "1209600000";
			};
			effects: {
				sameTypeExtraCatchCandy: 1;
			};
			progression: object;
		}
	>
>;

export type MegaEvoLevelSettingsBaseMasterfileEntry = MegaEvoLevelSettings0;
