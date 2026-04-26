// Hand-crafted tiny masterfile that exercises every edge case the spec calls out:
// - multiple multi-entry groups with clean shared prefixes
// - a group with a partial (non-boundary) common prefix
// - a singleton
// - a lowercase/mixed-case templateId
// - an alias-suffix collision within one group
export const MOCK_MASTERFILE = [
	// typeEffective group — clean shared prefix POKEMON_TYPE_
	{
		templateId: "POKEMON_TYPE_BUG",
		data: {
			templateId: "POKEMON_TYPE_BUG",
			typeEffective: {
				attackScalar: [1, 1.6, 1, 0.625, 1, 1, 1, 1, 1, 1, 1.6, 1, 0.625, 1, 1, 1, 1, 1],
				attackType: "POKEMON_TYPE_BUG",
				effectGroup: {
					accuracyChance: 1,
					nested: {
						combatType: "POKEMON_TYPE_BUG",
					},
					tags: ["fast"],
					typeCode: "BUG",
					windows: [0, 250],
				},
			},
		},
	},
	{
		templateId: "POKEMON_TYPE_DARK",
		data: {
			templateId: "POKEMON_TYPE_DARK",
			typeEffective: {
				attackScalar: [1, 1, 1, 1, 1, 1.6, 1, 1, 1, 0.625, 1, 1, 1.6, 1, 1, 0.625, 1, 1],
				attackType: "POKEMON_TYPE_DARK",
				effectGroup: {
					accuracyChance: 1,
					nested: {
						combatType: "POKEMON_TYPE_DARK",
					},
					tags: ["fast", "charged"],
					typeCode: "DARK",
					windows: [0, 300],
				},
			},
		},
	},
	// pokemonSettings group — no shared prefix at underscore boundary
	{
		templateId: "V0001_POKEMON_BULBASAUR",
		data: {
			templateId: "V0001_POKEMON_BULBASAUR",
			pokemonSettings: {
				familyId: "FAMILY_BULBASAUR",
				forms: ["NORMAL"],
				stats: {
					baseAttack: 118,
					baseDefense: 111,
					baseStamina: 128,
					shadowBoost: null,
				},
			},
		},
	},
	{
		templateId: "V0002_POKEMON_IVYSAUR",
		data: {
			templateId: "V0002_POKEMON_IVYSAUR",
			pokemonSettings: {
				familyId: "FAMILY_BULBASAUR",
				forms: ["NORMAL", "SHADOW"],
				stats: {
					baseAttack: 151,
					baseDefense: 143,
					baseStamina: 155,
				},
			},
		},
	},
	// avatarCustomization group — mixed/lowercase templateIds
	{
		templateId: "AVATAR_f_backpack_one",
		data: {
			templateId: "AVATAR_f_backpack_one",
			avatarCustomization: { category: "backpack", enabled: true },
		},
	},
	{
		templateId: "AVATAR_f_backpack_two",
		data: {
			templateId: "AVATAR_f_backpack_two",
			avatarCustomization: { category: "backpack", enabled: false },
		},
	},
	// Collision-inducing pair: both PascalCase to "Foo" after shared prefix strip.
	// Shared prefix would be "COLLIDE_" → suffixes "foo" and "FOO" both → "Foo".
	{
		templateId: "COLLIDE_foo",
		data: { templateId: "COLLIDE_foo", collisionTest: { label: "foo" } },
	},
	{
		templateId: "COLLIDE_FOO",
		data: { templateId: "COLLIDE_FOO", collisionTest: { label: "FOO" } },
	},
	// combatType group — exercises templateIdSlice (prefix "COMBAT_", empty suffix).
	// Each entry's `type` value drops the COMBAT_ prefix from its templateId.
	{
		templateId: "COMBAT_POKEMON_TYPE_BUG",
		data: {
			templateId: "COMBAT_POKEMON_TYPE_BUG",
			combatType: {
				greatLevelThreshold: 0.7,
				type: "POKEMON_TYPE_BUG",
				excellentLevelThreshold: 0.95,
			},
		},
	},
	{
		templateId: "COMBAT_POKEMON_TYPE_DARK",
		data: {
			templateId: "COMBAT_POKEMON_TYPE_DARK",
			combatType: {
				greatLevelThreshold: 0.7,
				type: "POKEMON_TYPE_DARK",
				excellentLevelThreshold: 0.95,
			},
		},
	},
	{
		templateId: "COMBAT_POKEMON_TYPE_NORMAL",
		data: {
			templateId: "COMBAT_POKEMON_TYPE_NORMAL",
			combatType: {
				greatLevelThreshold: 0.6,
				type: "POKEMON_TYPE_NORMAL",
				excellentLevelThreshold: 0.95,
			},
		},
	},
	// Singleton
	{
		templateId: "ACCESSIBILITY_CLIENT_SETTINGS",
		data: {
			templateId: "ACCESSIBILITY_CLIENT_SETTINGS",
			accessibilitySettings: {
				enabled: true,
				mode: "default",
				scale: 1,
			},
		},
	},
] satisfies Array<{ templateId: string; data: Record<string, unknown> }>;
