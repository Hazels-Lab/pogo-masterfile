// Generated from Pokémon GO masterfile — group "pokemonSettings", 2466 entries (structural types).

import type { W } from "../_utils";
import type { TypeEffectiveTemplateID } from "../type-effective/entries";

export interface PokemonSettings<TemplateID extends string = string, TData extends PokemonSettingsData = PokemonSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		pokemonSettings: TData;
	};
}
export type PokemonSettingsType = W<PokemonSettings>;

export interface PokemonSettingsData {
	allowNoevolveEvolution?: Array<
		"APRIL_2020_NOEVOLVE" | "FALL_2020_NOEVOLVE" | "FALL_2022" | "FALL_2022_NOEVOLVE" | "JAN_2020_NOEVOLVE" | "JAN_2022_NOEVOLVE" | "SPRING_2020_NOEVOLVE"
	>;
	animationTime?: Array<number>;
	breadTierGroup?: "GROUP_1" | "GROUP_2" | "GROUP_3" | "GROUP_4" | "GROUP_8" | "GROUP_Z";
	buddyGroupNumber?: number;
	buddyOffsetFemale?: [number, number, number];
	buddyOffsetMale?: [number, number, number];
	buddyPortraitOffset?: [number, number, number];
	buddyPortraitRotation?: [number, number, number];
	buddyScale?: number;
	buddySize?: "BUDDY_BABY" | "BUDDY_BIG" | "BUDDY_FLYING" | "BUDDY_SHOULDER";
	buddyWalkedMegaEnergyAward?: number;
	buddyWalkedMegaEnergyAwards?: [
		{
			megaEnergyAwardAmount: number;
			megaPokemonId: "CHARIZARD" | "GARDEVOIR" | "MEWTWO" | "RAICHU";
			tempEvoId?: "TEMP_EVOLUTION_MEGA_X";
		},
		{
			genderRequirement?: "MALE";
			megaEnergyAwardAmount: number;
			megaPokemonId: "CHARIZARD" | "GALLADE" | "MEWTWO" | "RAICHU";
			tempEvoId?: "TEMP_EVOLUTION_MEGA_Y";
		},
	];
	camera: {
		cylinderGroundM?: number;
		cylinderHeightM?: number;
		cylinderRadiusM?: number;
		diskRadiusM?: number;
		shoulderModeScale?: number;
	};
	candyToEvolve?: number;
	cinematicMoves?: Array<string>;
	combatDefaultCameraAngle?: [number, number, number];
	combatOpponentFocusCameraAngle?: [number, number, number];
	combatPlayerFocusCameraAngle?: [number, number, number];
	combatPlayerPokemonPositionOffset?: [number, number, number];
	combatShoulderCameraAngle?: [number, number, number];
	disableTransferToPokemonHome?: boolean;
	eliteCinematicMove?: Array<string>;
	eliteQuickMove?: Array<
		| "BITE_FAST"
		| "BUG_BITE_FAST"
		| "BULLET_SEED_FAST"
		| "CHARM_FAST"
		| "COUNTER_FAST"
		| "CUT_FAST"
		| "DRAGON_BREATH_FAST"
		| "DRAGON_TAIL_FAST"
		| "EMBER_FAST"
		| "FORCE_PALM_FAST"
		| "FROST_BREATH_FAST"
		| "FURY_CUTTER_FAST"
		| "GEOMANCY_FAST"
		| "GUST_FAST"
		| "HIDDEN_POWER_FAST"
		| "ICE_SHARD_FAST"
		| "INCINERATE_FAST"
		| "KARATE_CHOP_FAST"
		| "LICK_FAST"
		| "LOW_KICK_FAST"
		| "MAGICAL_LEAF_FAST"
		| "MUD_SHOT_FAST"
		| "MUD_SLAP_FAST"
		| "POISON_JAB_FAST"
		| "POUND_FAST"
		| "POWDER_SNOW_FAST"
		| "PRESENT_FAST"
		| "RAZOR_LEAF_FAST"
		| "ROCK_SMASH_FAST"
		| "ROCK_THROW_FAST"
		| "ROLLOUT_FAST"
		| "SCRATCH_FAST"
		| "SHADOW_CLAW_FAST"
		| "SMACK_DOWN_FAST"
		| "STEEL_WING_FAST"
		| "STRUGGLE_BUG_FAST"
		| "SUCKER_PUNCH_FAST"
		| "TACKLE_FAST"
		| "THUNDER_SHOCK_FAST"
		| "VOLT_SWITCH_FAST"
		| "WATER_GUN_FAST"
		| "WING_ATTACK_FAST"
		| "YAWN_FAST"
		| "ZEN_HEADBUTT_FAST"
	>;
	encounter: {
		attackProbability?: number;
		attackTimerS?: number;
		bonusCandyCaptureReward?: number;
		bonusStardustCaptureReward?: number;
		bonusXlCandyCaptureReward?: number;
		cameraDistance?: number;
		collisionHeadRadiusM?: number;
		collisionHeightM?: number;
		collisionRadiusM?: number;
		dodgeDistance?: number;
		dodgeDurationS?: number;
		dodgeProbability?: number;
		jumpTimeS?: number;
		maxPokemonActionFrequencyS?: number;
		minPokemonActionFrequencyS?: number;
		movementTimerS?: number;
		movementType?: "MOVEMENT_ELECTRIC" | "MOVEMENT_FLYING" | "MOVEMENT_HOVERING" | "MOVEMENT_JUMP" | "MOVEMENT_PSYCHIC";
		shadowAttackProbability?: number;
		shadowBaseCaptureRate?: number;
		shadowDodgeProbability?: number;
	};
	evolutionBranch?: Array<{
		candyCost?: number;
		candyCostPurified?: number;
		evolution?: string;
		evolutionItemRequirement?:
			| "ITEM_BEANS"
			| "ITEM_DRAGON_SCALE"
			| "ITEM_GEN4_EVOLUTION_STONE"
			| "ITEM_GEN5_EVOLUTION_STONE"
			| "ITEM_KINGS_ROCK"
			| "ITEM_METAL_COAT"
			| "ITEM_OTHER_EVOLUTION_STONE_A"
			| "ITEM_OTHER_EVOLUTION_STONE_MAPLE_A"
			| "ITEM_OTHER_EVOLUTION_STONE_MAPLE_B"
			| "ITEM_OTHER_EVOLUTION_STONE_MAPLE_C"
			| "ITEM_SUN_STONE"
			| "ITEM_UP_GRADE";
		evolutionItemRequirementCost?: number;
		evolutionLikelihoodWeight?: number;
		evolutionMoveRequirement?: "DRAGON_ASCENT";
		form?: string;
		genderRequirement?: "FEMALE" | "MALE";
		kmBuddyDistanceRequirement?: number;
		lureItemRequirement?: "ITEM_TROY_DISK_GLACIAL" | "ITEM_TROY_DISK_MAGNETIC" | "ITEM_TROY_DISK_MOSSY" | "ITEM_TROY_DISK_RAINY";
		mustBeBuddy?: boolean;
		noCandyCostViaTrade?: boolean;
		onlyDaytime?: boolean;
		onlyDuskPeriod?: boolean;
		onlyFullMoon?: boolean;
		onlyNighttime?: boolean;
		onlyUpsideDown?: boolean;
		priority?: number;
		questDisplay?: [
			{
				questRequirementTemplateId:
					| "ANNIHILAPE_EVOLUTION_QUEST"
					| "BISHARP_KINGAMBIT_EVOLUTION_QUEST"
					| "CHANSEY_EVOLUTION_QUEST"
					| "CHARCADET_ARMAROUGE_EVOLUTION_QUEST"
					| "CHARCADET_CERULEDGE_EVOLUTION_QUEST"
					| "DIPPLIN_EVOLUTION_QUEST"
					| "ESPEON_EVOLUTION_QUEST"
					| "FLORGES_EVOLUTION_QUEST"
					| "KUBFU_RAPID_STRIKE_EVOLUTION_QUEST"
					| "KUBFU_SINGLE_STRIKE_EVOLUTION_QUEST"
					| "MILOTIC_EVOLUTION_QUEST"
					| "MR_MIME_EVOLUTION_QUEST"
					| "NAGANADEL_EVOLUTION_QUEST"
					| "OVERQWIL_EVOLUTION_QUEST"
					| "PANCHAM_EVOLUTION_QUEST"
					| "PAWMOT_EVOLUTION_QUEST"
					| "RUNERIGUS_EVOLUTION_QUEST"
					| "SIRFETCHD_EVOLUTION_QUEST"
					| "SLOWBRO_G_EVOLUTION_QUEST"
					| "SLOWKING_G_EVOLUTION_QUEST"
					| "SNEASLER_EVOLUTION_QUEST"
					| "SNOM_FROSMOTH_EVOLUTION_QUEST"
					| "SPRITZEE_EVOLUTION_QUEST"
					| "SUDOWOODO_EVOLUTION_QUEST"
					| "SWIRLIX_EVOLUTION_QUEST"
					| "SWOOBAT_EVOLUTION_QUEST"
					| "SYLVEON_EVOLUTION_QUEST"
					| "UMBREON_EVOLUTION_QUEST";
			},
		];
		temporaryEvolution?: "TEMP_EVOLUTION_MEGA" | "TEMP_EVOLUTION_MEGA_X" | "TEMP_EVOLUTION_MEGA_Y" | "TEMP_EVOLUTION_PRIMAL";
		temporaryEvolutionEnergyCost?: number;
		temporaryEvolutionEnergyCostSubsequent?: number;
	}>;
	evolutionIds?: Array<string>;
	evolutionPips?: number;
	exclusiveKeyItem?: {
		count: number;
		item: "ITEM_BEANS" | "ITEM_MOVE_REROLL_OTHER_SPECIAL_ATTACK_A";
	};
	familyId: string;
	form?: string;
	formChange?: Array<{
		availableForm: Array<
			| "FURFROU_DANDY"
			| "FURFROU_DIAMOND"
			| "FURFROU_MATRON"
			| "FURFROU_NATURAL"
			| "HOOPA_CONFINED"
			| "HOOPA_UNBOUND"
			| "KELDEO_ORDINARY"
			| "KELDEO_RESOLUTE"
			| "KYUREM_BLACK"
			| "KYUREM_NORMAL"
			| "KYUREM_WHITE"
			| "NECROZMA_DAWN_WINGS"
			| "NECROZMA_DUSK_MANE"
			| "NECROZMA_NORMAL"
			| "SHAYMIN_LAND"
			| "SHAYMIN_SKY"
			| "ZACIAN_CROWNED_SWORD"
			| "ZACIAN_HERO"
			| "ZAMAZENTA_CROWNED_SHIELD"
			| "ZAMAZENTA_HERO"
			| "ZYGARDE_COMPLETE"
			| "ZYGARDE_COMPLETE_FIFTY_PERCENT"
			| "ZYGARDE_COMPLETE_TEN_PERCENT"
		>;
		candyCost?: number;
		componentPokemonSettings?: {
			componentCandyCost?: number;
			familyId: "FAMILY_COSMOG" | "FAMILY_RESHIRAM" | "FAMILY_ZEKROM";
			formChangeType: "FUSE" | "UNFUSE";
			locationCardSettings?: [
				{
					basePokemonLocationCard:
						| "LC_SPECIAL_BACKGROUND_2024_GLOBAL_GOFEST_ULTRA_WORMHOLE_001"
						| "LC_SPECIALBACKGROUND_2025_GLOBAL_GOTOUR_BLACK_001"
						| "LC_SPECIALBACKGROUND_2025_GLOBAL_GOTOUR_WHITE_001";
					componentPokemonLocationCard:
						| "LC_SPECIALBACKGROUND_2024_GLOBAL_GOFEST_RADIANCE_001"
						| "LC_SPECIALBACKGROUND_2024_GLOBAL_GOFEST_UMBRA_001"
						| "LC_SPECIALBACKGROUND_2025_GLOBAL_GOTOUR_BLACK_001"
						| "LC_SPECIALBACKGROUND_2025_GLOBAL_GOTOUR_WHITE_001";
					fusionPokemonLocationCard:
						| "LC_SPECIAL_BACKGROUND_2024_GLOBAL_GOFEST_MOON_ULTRA_WORMHOLE_001"
						| "LC_SPECIAL_BACKGROUND_2024_GLOBAL_GOFEST_SUN_ULTRA_WORMHOLE_001"
						| "LC_SPECIALBACKGROUND_2025_GLOBAL_GOTOUR_BLACK_WHITE_001";
				},
			];
			pokedexId: "LUNALA" | "RESHIRAM" | "SOLGALEO" | "ZEKROM";
		};
		formChangeBonusAttributes?: [
			{
				breadMode?: "BREAD_SPECIAL_MODE";
				clearBreadMode?: boolean;
				maxMoves?: [
					{
						moveLevel: "LEVEL_1";
						moveType: "A";
					},
				];
				targetForm: "ZACIAN_CROWNED_SWORD" | "ZACIAN_HERO" | "ZAMAZENTA_CROWNED_SHIELD" | "ZAMAZENTA_HERO";
			},
		];
		item?:
			| "FUSION_RESOURCE_BLACK_KYUREM"
			| "FUSION_RESOURCE_DAWNWINGS_NECROZMA"
			| "FUSION_RESOURCE_DUSKMANE_NECROZMA"
			| "FUSION_RESOURCE_WHITE_KYUREM"
			| "ITEM_BEANS"
			| "ITEM_RESOURCE_CROWNED_ZACIAN"
			| "ITEM_RESOURCE_CROWNED_ZAMAZENTA";
		itemCostCount?: number;
		locationCardSettings?: [
			{
				existingLocationCard:
					| "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_SHIELD_001"
					| "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_SHIELD_CROWNED_001"
					| "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_SWORD_001"
					| "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_SWORD_CROWNED_001";
				replacementLocationCard:
					| "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_SHIELD_001"
					| "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_SHIELD_CROWNED_001"
					| "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_SWORD_001"
					| "LC_SPECIALBACKGROUND_2025_GLOBAL_GOFEST_SWORD_CROWNED_001";
			},
		];
		moveReassignment?: {
			cinematicMoves: [
				{
					existingMoves?: ["BEHEMOTH_BASH" | "BEHEMOTH_BLADE" | "GLACIATE" | "IRON_HEAD" | "SECRET_SWORD"];
					replacementMoves: Array<
						| "AQUA_JET"
						| "BEHEMOTH_BASH"
						| "BEHEMOTH_BLADE"
						| "CLOSE_COMBAT"
						| "FREEZE_SHOCK"
						| "HYDRO_PUMP"
						| "ICE_BURN"
						| "IRON_HEAD"
						| "MOONGEIST_BEAM"
						| "SACRED_SWORD"
						| "SECRET_SWORD"
						| "SUNSTEEL_STRIKE"
						| "X_SCISSOR"
					>;
				},
			];
		};
		priority?: number;
		requiredBreadMoves?: [
			{
				moveLevel: "LEVEL_1";
				moveTypes: ["A"];
			},
		];
		requiredCinematicMoves?: [
			{
				requiredMoves: ["IRON_HEAD"];
			},
		];
		stardustCost?: number;
	}>;
	heightStdDev: number;
	ibfc: {
		alternateForm?: "AEGISLASH_BLADE" | "MIMIKYU_BUSTED" | "MORPEKO_HANGRY";
		alternateToDefaultIbfcSettings?: {
			animationDurationTurns: number;
			animationPlayPoint: "AFTER_CM_ATTACKER" | "BEFORE_CM_ATTACKER";
			currentMove?: "AURA_WHEEL_DARK";
			ibfcVfxKey: "ALTERNATE_TO_DEFAULT";
			replacementMove?: "AURA_WHEEL_ELECTRIC";
		};
		aternateForms?: ["CRAMORANT_GULPING", "CRAMORANT_GORGING"];
		combatEnable?: boolean;
		defaultForm?: "AEGISLASH_SHIELD" | "CRAMORANT_NORMAL" | "MIMIKYU_DISGUISED" | "MORPEKO_FULL_BELLY";
		defaultToAlternateIbfcSettings?: {
			animationDurationTurns: number;
			animationPlayPoint: "AFTER_CM_ATTACKER" | "BEFORE_CM_ATTACKER";
			currentMove?: "AURA_WHEEL_ELECTRIC";
			ibfcVfxKey: "DEFAULT_TO_ALTERNATE";
			replacementMove?: "AURA_WHEEL_DARK";
		};
	};
	irisFlyingHeightLimitMeters?: number;
	irisPhotoEmote1?: "Eat" | "PhysicalAttack";
	irisPhotoEmote2?: "PhysicalAttack" | "SpecialAttack";
	irisPhotoHueOrder?: number;
	irisPhotoShinyHueOrder?: number;
	isDeployable?: boolean;
	isTradable?: boolean;
	isTransferable?: boolean;
	kmBuddyDistance: number;
	modelHeight?: number;
	modelScale?: number;
	modelScaleV2?: number;
	nonTmCinematicMoves?: ["DRAGON_ASCENT"];
	parentPokemonId?: string;
	pokedexHeightM: number;
	pokedexWeightKg: number;
	pokemonClass?: "POKEMON_CLASS_LEGENDARY" | "POKEMON_CLASS_MYTHIC" | "POKEMON_CLASS_ULTRA_BEAST";
	pokemonId: string;
	quickMoves?: Array<string>;
	raidBossDistanceOffset?: number;
	shadow?: {
		purificationCandyNeeded: number;
		purificationStardustNeeded: number;
		purifiedChargeMove: "AEROBLAST_PLUS_PLUS" | "RETURN" | "SACRED_FIRE_PLUS_PLUS";
		shadowChargeMove: "AEROBLAST_PLUS" | "FRUSTRATION" | "SACRED_FIRE_PLUS";
	};
	sizeSettings?: {
		disablePokedexRecordDisplayForForms: boolean;
		mLowerBound: number;
		mUpperBound: number;
		xlScaleMultiplier: number;
		xlUpperBound: number;
		xsLowerBound: number;
		xsScaleMultiplier: number;
		xxlScaleMultiplier: number;
		xxlUpperBound: number;
		xxsLowerBound: number;
		xxsScaleMultiplier: number;
	};
	stats: {
		baseAttack: number;
		baseDefense: number;
		baseStamina: number;
	};
	tempEvoOverrides?: Array<{
		averageHeightM?: number;
		averageWeightKg?: number;
		buddyOffsetFemale?: [number, number, number];
		buddyOffsetMale?: [number, number, number];
		buddyPortraitOffset?: [number, number, number];
		buddyPortraitRotation?: [number, number, number];
		camera?: {
			cylinderGroundM?: number;
			cylinderHeightM?: number;
			cylinderRadiusM?: number;
		};
		modelHeight?: number;
		modelScaleV2?: number;
		raidBossDistanceOffset?: number;
		stats?: {
			baseAttack: number;
			baseDefense: number;
			baseStamina: number;
		};
		tempEvoId?: "TEMP_EVOLUTION_MEGA" | "TEMP_EVOLUTION_MEGA_X" | "TEMP_EVOLUTION_MEGA_Y" | "TEMP_EVOLUTION_PRIMAL";
		typeOverride1?: Exclude<TypeEffectiveTemplateID, "POKEMON_TYPE_FAIRY" | "POKEMON_TYPE_FLYING" | "POKEMON_TYPE_POISON">;
		typeOverride2?:
			| "POKEMON_TYPE_DARK"
			| "POKEMON_TYPE_DRAGON"
			| "POKEMON_TYPE_FAIRY"
			| "POKEMON_TYPE_FIGHTING"
			| "POKEMON_TYPE_FIRE"
			| "POKEMON_TYPE_FLYING"
			| "POKEMON_TYPE_GHOST"
			| "POKEMON_TYPE_GROUND"
			| "POKEMON_TYPE_ICE"
			| "POKEMON_TYPE_POISON"
			| "POKEMON_TYPE_PSYCHIC"
			| "POKEMON_TYPE_STEEL";
	}>;
	thirdMove: {
		candyToUnlock: number;
		stardustToUnlock?: number;
	};
	type: TypeEffectiveTemplateID;
	type2?: TypeEffectiveTemplateID;
	useIrisFlyingPlacement?: boolean;
	weightStdDev: number;
}
