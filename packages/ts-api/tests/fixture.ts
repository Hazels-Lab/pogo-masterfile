import { mock } from "bun:test";
import type { MasterfileEntry } from "pogo-masterfile-types/entries";

/**
 * Bun's `mock(fn)` returns a `Mock<…>` that lacks the `preconnect` property
 * TypeScript expects on `typeof fetch`. This helper casts through it so test
 * files stay focused on what they're demonstrating. Accepts any function
 * shaped like fetch's call signature.
 */
type FetchImpl = (input: Parameters<typeof fetch>[0], init?: Parameters<typeof fetch>[1]) => Promise<Response>;

export function mockFetch(impl: FetchImpl): typeof fetch {
	return mock(impl) as unknown as typeof fetch;
}

/**
 * Tiny fixture covering three groups (itemSettings, pokemonSettings,
 * moveSettings) plus one singleton (advancedSettings). All templateIds and
 * payload shapes are real values copied from the live masterfile, so literal
 * narrowing works end-to-end and intellisense surfaces actual data.
 *
 * Don't worry about the `as unknown as` cast at the bottom — the fixture is a
 * minimal subset, not a structurally-complete entry, and TypeScript's
 * structural-typing on the full payload would require many more fields than
 * a vibe-check fixture warrants.
 */
export const FIXTURE: readonly MasterfileEntry[] = [
	{
		templateId: "ITEM_POTION",
		data: {
			templateId: "ITEM_POTION",
			itemSettings: {
				itemId: "ITEM_POTION",
				itemType: "ITEM_TYPE_POTION",
				category: "ITEM_CATEGORY_MEDICINE",
				dropTrainerLevel: 5,
				potion: { staAmount: 20 },
			},
		},
	},
	{
		templateId: "ITEM_SUPER_POTION",
		data: {
			templateId: "ITEM_SUPER_POTION",
			itemSettings: {
				itemId: "ITEM_SUPER_POTION",
				itemType: "ITEM_TYPE_POTION",
				category: "ITEM_CATEGORY_MEDICINE",
				dropTrainerLevel: 10,
				potion: { staAmount: 50 },
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
				stats: { baseStamina: 128, baseAttack: 118, baseDefense: 111 },
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
				durationMs: 2000,
				damageWindowStartMs: 1500,
				damageWindowEndMs: 1700,
				energyDelta: -100,
				vfxName: "megahorn",
			},
		},
	},
	{
		templateId: "ADVANCED_SETTINGS",
		data: {
			templateId: "ADVANCED_SETTINGS",
			advancedSettings: { someField: 1 },
		},
	},
] as unknown as readonly MasterfileEntry[];
