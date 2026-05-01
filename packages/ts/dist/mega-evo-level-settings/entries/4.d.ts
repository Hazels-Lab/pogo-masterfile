// Generated from Pokémon GO masterfile — group "megaEvoLevelSettings", split "4", 3 entries.

import type { S } from "../../_utils";
import type { MegaEvoLevelSettings } from "../types";

export type MegaEvoLevelSettings4V0071PokemonVictreebel = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_4_V0071_POKEMON_VICTREEBEL",
		{
			cooldown: {
				bypassCostInitial: 5;
				durationMs: "86400000";
			};
			effects: {
				sameTypeExtraCatchCandy: 3;
				sameTypeExtraCatchCandyXlChance: 0.3;
				sameTypeExtraCatchXp: 200;
				selfCpBoostAdditionalLevel: 2;
			};
			ftueExpirationTimestamp: "1775001600000";
			level: 4;
			megaEnergyCostToUnlock: 5000;
			pokemonId: "VICTREEBEL";
			progression: {
				pointsRequired: 30;
			};
		}
	>
>;
export type MegaEvoLevelSettings4V0149PokemonDragonite = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_4_V0149_POKEMON_DRAGONITE",
		{
			cooldown: {
				bypassCostInitial: 5;
				durationMs: "86400000";
			};
			effects: {
				sameTypeExtraCatchCandy: 3;
				sameTypeExtraCatchCandyXlChance: 0.3;
				sameTypeExtraCatchXp: 200;
				selfCpBoostAdditionalLevel: 2;
			};
			ftueExpirationTimestamp: "1775001600000";
			level: 4;
			megaEnergyCostToUnlock: 5000;
			pokemonId: "DRAGONITE";
			progression: {
				pointsRequired: 30;
			};
		}
	>
>;
export type MegaEvoLevelSettings4V0687PokemonMalamar = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_4_V0687_POKEMON_MALAMAR",
		{
			cooldown: {
				bypassCostInitial: 5;
				durationMs: "86400000";
			};
			effects: {
				sameTypeExtraCatchCandy: 3;
				sameTypeExtraCatchCandyXlChance: 0.3;
				sameTypeExtraCatchXp: 200;
				selfCpBoostAdditionalLevel: 2;
			};
			ftueExpirationTimestamp: "1775001600000";
			level: 4;
			megaEnergyCostToUnlock: 5000;
			pokemonId: "MALAMAR";
			progression: {
				pointsRequired: 30;
			};
		}
	>
>;

export type MegaEvoLevelSettings4MasterfileEntry =
	| MegaEvoLevelSettings4V0071PokemonVictreebel
	| MegaEvoLevelSettings4V0149PokemonDragonite
	| MegaEvoLevelSettings4V0687PokemonMalamar;
