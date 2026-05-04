// Generated from Pokémon GO masterfile — group "megaEvoLevelSettings", split "kyogre", 4 entries.

import type { S } from "../../_utils";
import type { MegaEvoLevelSettings } from "../types";

export type MegaEvoLevelSettings0V0382PokemonKyogre = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_0_V0382_POKEMON_KYOGRE",
		{
			cooldown: {
				bypassCostInitial: 400;
				durationMs: "1209600000";
			};
			effects: {
				sameTypeExtraCatchCandy: 1;
			};
			pokemonId: "KYOGRE";
			progression: object;
		}
	>
>;
export type MegaEvoLevelSettings1V0382PokemonKyogre = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_1_V0382_POKEMON_KYOGRE",
		{
			cooldown: {
				bypassCostInitial: 80;
				durationMs: "604800000";
			};
			effects: {
				sameTypeExtraCatchCandy: 1;
			};
			level: 1;
			pokemonId: "KYOGRE";
			progression: {
				pointsRequired: 1;
			};
		}
	>
>;
export type MegaEvoLevelSettings2V0382PokemonKyogre = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_2_V0382_POKEMON_KYOGRE",
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
			pokemonId: "KYOGRE";
			progression: {
				pointsRequired: 7;
			};
		}
	>
>;
export type MegaEvoLevelSettings3V0382PokemonKyogre = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_3_V0382_POKEMON_KYOGRE",
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
			pokemonId: "KYOGRE";
			progression: {
				pointsRequired: 30;
			};
		}
	>
>;

export type MegaEvoLevelSettingsKyogreMasterfileEntry =
	| MegaEvoLevelSettings0V0382PokemonKyogre
	| MegaEvoLevelSettings1V0382PokemonKyogre
	| MegaEvoLevelSettings2V0382PokemonKyogre
	| MegaEvoLevelSettings3V0382PokemonKyogre;
