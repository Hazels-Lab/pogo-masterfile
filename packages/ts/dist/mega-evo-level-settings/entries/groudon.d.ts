// Generated from Pokémon GO masterfile — group "megaEvoLevelSettings", split "groudon", 4 entries.

import type { S } from "../../_utils";
import type { MegaEvoLevelSettings } from "../types";

export type MegaEvoLevelSettings0V0383PokemonGroudon = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_0_V0383_POKEMON_GROUDON",
		{
			cooldown: {
				bypassCostInitial: 400;
				durationMs: "1209600000";
			};
			effects: {
				sameTypeExtraCatchCandy: 1;
			};
			pokemonId: "GROUDON";
			progression: object;
		}
	>
>;
export type MegaEvoLevelSettings1V0383PokemonGroudon = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_1_V0383_POKEMON_GROUDON",
		{
			cooldown: {
				bypassCostInitial: 80;
				durationMs: "604800000";
			};
			effects: {
				sameTypeExtraCatchCandy: 1;
			};
			level: 1;
			pokemonId: "GROUDON";
			progression: {
				pointsRequired: 1;
			};
		}
	>
>;
export type MegaEvoLevelSettings2V0383PokemonGroudon = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_2_V0383_POKEMON_GROUDON",
		{
			cooldown: {
				bypassCostInitial: 40;
				durationMs: "432000000";
			};
			effects: {
				sameTypeExtraCatchCandy: 1;
				sameTypeExtraCatchCandyXlChance: 0.1;
				sameTypeExtraCatchXp: 50;
			};
			level: 2;
			megaEnergyCostPerPoint: 160;
			pokemonId: "GROUDON";
			progression: {
				pointsRequired: 7;
			};
		}
	>
>;
export type MegaEvoLevelSettings3V0383PokemonGroudon = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_3_V0383_POKEMON_GROUDON",
		{
			cooldown: {
				bypassCostInitial: 20;
				durationMs: "259200000";
			};
			effects: {
				sameTypeExtraCatchCandy: 2;
				sameTypeExtraCatchCandyXlChance: 0.25;
				sameTypeExtraCatchXp: 100;
			};
			level: 3;
			megaEnergyCostPerPoint: 80;
			pokemonId: "GROUDON";
			progression: {
				pointsRequired: 30;
			};
		}
	>
>;

export type MegaEvoLevelSettingsGroudonMasterfileEntry =
	| MegaEvoLevelSettings0V0383PokemonGroudon
	| MegaEvoLevelSettings1V0383PokemonGroudon
	| MegaEvoLevelSettings2V0383PokemonGroudon
	| MegaEvoLevelSettings3V0383PokemonGroudon;
