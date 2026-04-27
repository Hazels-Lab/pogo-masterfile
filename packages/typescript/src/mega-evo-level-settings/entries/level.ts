// Generated from Pokémon GO masterfile — group "megaEvoLevelSettings", split "level", 3 entries.

import type { S } from "../../_utils";
import type { MegaEvoLevelSettings } from "../types";

export type MegaEvoLevelSettings1 = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_1",
		{
			cooldown: {
				bypassCostInitial: 40;
				durationMs: "604800000";
			};
			effects: {
				sameTypeExtraCatchCandy: 1;
			};
			level: 1;
			progression: {
				pointsRequired: 1;
			};
		}
	>
>;
export type MegaEvoLevelSettings2 = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_2",
		{
			cooldown: {
				bypassCostInitial: 20;
				durationMs: "432000000";
			};
			effects: {
				sameTypeExtraCatchCandy: 1;
				sameTypeExtraCatchCandyXlChance: 0.1;
				sameTypeExtraCatchXp: 50;
			};
			level: 2;
			progression: {
				pointsRequired: 7;
			};
		}
	>
>;
export type MegaEvoLevelSettings3 = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_3",
		{
			cooldown: {
				bypassCostInitial: 10;
				durationMs: "259200000";
			};
			effects: {
				sameTypeExtraCatchCandy: 2;
				sameTypeExtraCatchCandyXlChance: 0.25;
				sameTypeExtraCatchXp: 100;
			};
			level: 3;
			progression: {
				pointsRequired: 30;
			};
		}
	>
>;

export type MegaEvoLevelSettingsLevelMasterfileEntry = MegaEvoLevelSettings1 | MegaEvoLevelSettings2 | MegaEvoLevelSettings3;
