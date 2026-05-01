import type { MasterfileEntry } from "pogo-masterfile-types/entries";

/**
 * Three real entries copied from the live masterfile, covering three groups
 * (itemSettings, pokemonSettings, moveSettings). Real templateIds + payloads
 * so the literal-typed lookups work end-to-end.
 */
export const FIXTURE_ENTRIES: readonly MasterfileEntry[] = [
	{
		templateId: "ITEM_POTION",
		data: {
			templateId: "ITEM_POTION",
			itemSettings: {
				itemId: "ITEM_POTION",
				itemType: "ITEM_TYPE_POTION",
				category: "ITEM_CATEGORY_MEDICINE",
				dropTrainerLevel: 5,
				potion: {
					staAmount: 20,
				},
			},
		},
	},
	{
		templateId: "V0001_POKEMON_BULBASAUR",
		data: {
			templateId: "V0001_POKEMON_BULBASAUR",
			pokemonSettings: {
				pokemonId: "BULBASAUR",
				familyId: "FAMILY_BULBASAUR",
				type: "POKEMON_TYPE_GRASS",
				type2: "POKEMON_TYPE_POISON",
				stats: {
					baseStamina: 128,
					baseAttack: 118,
					baseDefense: 111,
				},
			},
		},
	},
	{
		templateId: "V0022_MOVE_MEGAHORN",
		data: {
			templateId: "V0022_MOVE_MEGAHORN",
			moveSettings: {
				movementId: "MEGAHORN",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_BUG",
				power: 105,
				accuracyChance: 1,
				criticalChance: 0.05,
				staminaLossScalar: 0.12,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "megahorn",
				durationMs: 2000,
				damageWindowStartMs: 1500,
				damageWindowEndMs: 1700,
				energyDelta: -100,
			},
		},
	},
] as unknown as readonly MasterfileEntry[];
