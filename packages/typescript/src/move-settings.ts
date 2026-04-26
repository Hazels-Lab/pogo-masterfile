// Generated from Pokémon GO masterfile — group "moveSettings", 384 entries.

import type { S } from "./_utils";
export interface MoveSettings<TemplateID extends string = string, TData extends MoveSettingsData = MoveSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		moveSettings: TData & {
			accuracyChance: 1;
		};
	};
}

export interface MoveSettingsData {
	animationId: number;
	criticalChance?: number;
	damageWindowEndMs: number;
	damageWindowStartMs?: number;
	durationMs: number;
	energyDelta?: number;
	healScalar?: number;
	isLocked?: boolean;
	movementId: string;
	obMoveSettingsNumber18?: [number, number, number, number];
	pokemonType:
		| "POKEMON_TYPE_BUG"
		| "POKEMON_TYPE_DARK"
		| "POKEMON_TYPE_DRAGON"
		| "POKEMON_TYPE_ELECTRIC"
		| "POKEMON_TYPE_FAIRY"
		| "POKEMON_TYPE_FIGHTING"
		| "POKEMON_TYPE_FIRE"
		| "POKEMON_TYPE_FLYING"
		| "POKEMON_TYPE_GHOST"
		| "POKEMON_TYPE_GRASS"
		| "POKEMON_TYPE_GROUND"
		| "POKEMON_TYPE_ICE"
		| "POKEMON_TYPE_NORMAL"
		| "POKEMON_TYPE_POISON"
		| "POKEMON_TYPE_PSYCHIC"
		| "POKEMON_TYPE_ROCK"
		| "POKEMON_TYPE_STEEL"
		| "POKEMON_TYPE_WATER";
	power?: number;
	staminaLossScalar?: number;
	trainerLevelMax?: number;
	trainerLevelMin?: number;
	vfxName: string;
}

export type MoveSettingsV0013MoveWrap = S<
	MoveSettings<
		"V0013_MOVE_WRAP",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2800;
			damageWindowStartMs: 2150;
			durationMs: 3000;
			energyDelta: -33;
			movementId: "WRAP";
			pokemonType: "POKEMON_TYPE_NORMAL";
			power: 60;
			staminaLossScalar: 0.06;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "wrap";
		}
	>
>;
export type MoveSettingsV0014MoveHyperBeam = S<
	MoveSettings<
		"V0014_MOVE_HYPER_BEAM",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 3800;
			damageWindowStartMs: 3500;
			durationMs: 4000;
			energyDelta: -100;
			movementId: "HYPER_BEAM";
			pokemonType: "POKEMON_TYPE_NORMAL";
			power: 150;
			staminaLossScalar: 0.15;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "hyper_beam";
		}
	>
>;
export type MoveSettingsV0016MoveDarkPulse = S<
	MoveSettings<
		"V0016_MOVE_DARK_PULSE",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2300;
			damageWindowStartMs: 1400;
			durationMs: 3000;
			energyDelta: -50;
			movementId: "DARK_PULSE";
			pokemonType: "POKEMON_TYPE_DARK";
			power: 80;
			staminaLossScalar: 0.08;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "dark_pulse";
		}
	>
>;
export type MoveSettingsV0018MoveSludge = S<
	MoveSettings<
		"V0018_MOVE_SLUDGE",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 1450;
			damageWindowStartMs: 1100;
			durationMs: 2000;
			energyDelta: -33;
			movementId: "SLUDGE";
			pokemonType: "POKEMON_TYPE_POISON";
			power: 50;
			staminaLossScalar: 0.065;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "sludge";
		}
	>
>;
export type MoveSettingsV0020MoveViceGrip = S<
	MoveSettings<
		"V0020_MOVE_VICE_GRIP",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 1600;
			damageWindowStartMs: 1200;
			durationMs: 2000;
			energyDelta: -33;
			movementId: "VICE_GRIP";
			pokemonType: "POKEMON_TYPE_NORMAL";
			power: 35;
			staminaLossScalar: 0.055;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "vice_grip";
		}
	>
>;
export type MoveSettingsV0021MoveFlameWheel = S<
	MoveSettings<
		"V0021_MOVE_FLAME_WHEEL",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2200;
			damageWindowStartMs: 1900;
			durationMs: 2500;
			energyDelta: -50;
			movementId: "FLAME_WHEEL";
			pokemonType: "POKEMON_TYPE_FIRE";
			power: 55;
			staminaLossScalar: 0.06;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "flame_wheel";
		}
	>
>;
export type MoveSettingsV0022MoveMegahorn = S<
	MoveSettings<
		"V0022_MOVE_MEGAHORN",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 1700;
			damageWindowStartMs: 1500;
			durationMs: 2000;
			energyDelta: -100;
			movementId: "MEGAHORN";
			pokemonType: "POKEMON_TYPE_BUG";
			power: 105;
			staminaLossScalar: 0.12;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "megahorn";
		}
	>
>;
export type MoveSettingsV0024MoveFlamethrower = S<
	MoveSettings<
		"V0024_MOVE_FLAMETHROWER",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 1500;
			damageWindowStartMs: 1300;
			durationMs: 2000;
			energyDelta: -50;
			movementId: "FLAMETHROWER";
			pokemonType: "POKEMON_TYPE_FIRE";
			power: 65;
			staminaLossScalar: 0.09;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "flamethrower";
		}
	>
>;
export type MoveSettingsV0026MoveDig = S<
	MoveSettings<
		"V0026_MOVE_DIG",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 4300;
			damageWindowStartMs: 2600;
			durationMs: 4500;
			energyDelta: -50;
			movementId: "DIG";
			pokemonType: "POKEMON_TYPE_GROUND";
			power: 100;
			staminaLossScalar: 0.08;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "dig";
		}
	>
>;
export type MoveSettingsV0028MoveCrossChop = S<
	MoveSettings<
		"V0028_MOVE_CROSS_CHOP",
		{
			animationId: 5;
			criticalChance: 0.25;
			damageWindowEndMs: 1200;
			damageWindowStartMs: 800;
			durationMs: 1500;
			energyDelta: -50;
			movementId: "CROSS_CHOP";
			pokemonType: "POKEMON_TYPE_FIGHTING";
			power: 50;
			staminaLossScalar: 0.1;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "cross_chop";
		}
	>
>;
export type MoveSettingsV0030MovePsybeam = S<
	MoveSettings<
		"V0030_MOVE_PSYBEAM",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2500;
			damageWindowStartMs: 1100;
			durationMs: 3000;
			energyDelta: -50;
			movementId: "PSYBEAM";
			pokemonType: "POKEMON_TYPE_PSYCHIC";
			power: 65;
			staminaLossScalar: 0.065;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "psybeam";
		}
	>
>;
export type MoveSettingsV0031MoveEarthquake = S<
	MoveSettings<
		"V0031_MOVE_EARTHQUAKE",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2600;
			durationMs: 3500;
			energyDelta: -100;
			movementId: "EARTHQUAKE";
			pokemonType: "POKEMON_TYPE_GROUND";
			power: 140;
			staminaLossScalar: 0.1;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "earthquake";
		}
	>
>;
export type MoveSettingsV0032MoveStoneEdge = S<
	MoveSettings<
		"V0032_MOVE_STONE_EDGE",
		{
			animationId: 5;
			criticalChance: 0.5;
			damageWindowEndMs: 2300;
			damageWindowStartMs: 900;
			durationMs: 2500;
			energyDelta: -100;
			movementId: "STONE_EDGE";
			pokemonType: "POKEMON_TYPE_ROCK";
			power: 105;
			staminaLossScalar: 0.1;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "stone_edge";
		}
	>
>;
export type MoveSettingsV0033MoveIcePunch = S<
	MoveSettings<
		"V0033_MOVE_ICE_PUNCH",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 1700;
			damageWindowStartMs: 1400;
			durationMs: 2000;
			energyDelta: -33;
			movementId: "ICE_PUNCH";
			pokemonType: "POKEMON_TYPE_ICE";
			power: 50;
			staminaLossScalar: 0.075;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "ice_punch";
		}
	>
>;
export type MoveSettingsV0034MoveHeartStamp = S<
	MoveSettings<
		"V0034_MOVE_HEART_STAMP",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 1700;
			damageWindowStartMs: 1200;
			durationMs: 2000;
			energyDelta: -33;
			movementId: "HEART_STAMP";
			pokemonType: "POKEMON_TYPE_PSYCHIC";
			power: 40;
			staminaLossScalar: 0.06;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "heart_stamp";
		}
	>
>;
export type MoveSettingsV0035MoveDischarge = S<
	MoveSettings<
		"V0035_MOVE_DISCHARGE",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2100;
			damageWindowStartMs: 1700;
			durationMs: 2500;
			energyDelta: -33;
			movementId: "DISCHARGE";
			pokemonType: "POKEMON_TYPE_ELECTRIC";
			power: 65;
			staminaLossScalar: 0.08;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "discharge";
		}
	>
>;
export type MoveSettingsV0036MoveFlashCannon = S<
	MoveSettings<
		"V0036_MOVE_FLASH_CANNON",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2300;
			damageWindowStartMs: 1400;
			durationMs: 2500;
			energyDelta: -100;
			movementId: "FLASH_CANNON";
			pokemonType: "POKEMON_TYPE_STEEL";
			power: 100;
			staminaLossScalar: 0.08;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "flash_cannon";
		}
	>
>;
export type MoveSettingsV0038MoveDrillPeck = S<
	MoveSettings<
		"V0038_MOVE_DRILL_PECK",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2300;
			damageWindowStartMs: 1900;
			durationMs: 2500;
			energyDelta: -33;
			movementId: "DRILL_PECK";
			pokemonType: "POKEMON_TYPE_FLYING";
			power: 70;
			staminaLossScalar: 0.08;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "drill_peck";
		}
	>
>;
export type MoveSettingsV0039MoveIceBeam = S<
	MoveSettings<
		"V0039_MOVE_ICE_BEAM",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 3000;
			damageWindowStartMs: 1500;
			durationMs: 3500;
			energyDelta: -50;
			movementId: "ICE_BEAM";
			pokemonType: "POKEMON_TYPE_ICE";
			power: 95;
			staminaLossScalar: 0.09;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "ice_beam";
		}
	>
>;
export type MoveSettingsV0040MoveBlizzard = S<
	MoveSettings<
		"V0040_MOVE_BLIZZARD",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2800;
			damageWindowStartMs: 1400;
			durationMs: 3000;
			energyDelta: -100;
			movementId: "BLIZZARD";
			pokemonType: "POKEMON_TYPE_ICE";
			power: 130;
			staminaLossScalar: 0.11;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "blizzard";
		}
	>
>;
export type MoveSettingsV0042MoveHeatWave = S<
	MoveSettings<
		"V0042_MOVE_HEAT_WAVE",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2800;
			damageWindowStartMs: 1700;
			durationMs: 3000;
			energyDelta: -100;
			movementId: "HEAT_WAVE";
			pokemonType: "POKEMON_TYPE_FIRE";
			power: 95;
			staminaLossScalar: 0.095;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "heat_wave";
		}
	>
>;
export type MoveSettingsV0045MoveAerialAce = S<
	MoveSettings<
		"V0045_MOVE_AERIAL_ACE",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2300;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			energyDelta: -33;
			movementId: "AERIAL_ACE";
			pokemonType: "POKEMON_TYPE_FLYING";
			power: 55;
			staminaLossScalar: 0.06;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "aerial_ace";
		}
	>
>;
export type MoveSettingsV0046MoveDrillRun = S<
	MoveSettings<
		"V0046_MOVE_DRILL_RUN",
		{
			animationId: 5;
			criticalChance: 0.25;
			damageWindowEndMs: 2800;
			damageWindowStartMs: 1900;
			durationMs: 3000;
			energyDelta: -50;
			movementId: "DRILL_RUN";
			pokemonType: "POKEMON_TYPE_GROUND";
			power: 85;
			staminaLossScalar: 0.08;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "drill_run";
		}
	>
>;
export type MoveSettingsV0047MovePetalBlizzard = S<
	MoveSettings<
		"V0047_MOVE_PETAL_BLIZZARD",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2200;
			damageWindowStartMs: 1600;
			durationMs: 2500;
			energyDelta: -100;
			movementId: "PETAL_BLIZZARD";
			pokemonType: "POKEMON_TYPE_GRASS";
			power: 110;
			staminaLossScalar: 0.09;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "petal_blizzard";
		}
	>
>;
export type MoveSettingsV0048MoveMegaDrain = S<
	MoveSettings<
		"V0048_MOVE_MEGA_DRAIN",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 1900;
			damageWindowStartMs: 850;
			durationMs: 2500;
			energyDelta: -50;
			healScalar: 0.5;
			movementId: "MEGA_DRAIN";
			pokemonType: "POKEMON_TYPE_GRASS";
			power: 25;
			staminaLossScalar: 0.04;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "mega_drain";
		}
	>
>;
export type MoveSettingsV0049MoveBugBuzz = S<
	MoveSettings<
		"V0049_MOVE_BUG_BUZZ",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2900;
			damageWindowStartMs: 1800;
			durationMs: 3500;
			energyDelta: -50;
			movementId: "BUG_BUZZ";
			pokemonType: "POKEMON_TYPE_BUG";
			power: 95;
			staminaLossScalar: 0.09;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "bug_buzz";
		}
	>
>;
export type MoveSettingsV0050MovePoisonFang = S<
	MoveSettings<
		"V0050_MOVE_POISON_FANG",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 1200;
			damageWindowStartMs: 700;
			durationMs: 1500;
			energyDelta: -33;
			movementId: "POISON_FANG";
			pokemonType: "POKEMON_TYPE_POISON";
			power: 30;
			staminaLossScalar: 0.05;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "poison_fang";
		}
	>
>;
export type MoveSettingsV0051MoveNightSlash = S<
	MoveSettings<
		"V0051_MOVE_NIGHT_SLASH",
		{
			animationId: 5;
			criticalChance: 0.25;
			damageWindowEndMs: 1800;
			damageWindowStartMs: 1100;
			durationMs: 2000;
			energyDelta: -33;
			movementId: "NIGHT_SLASH";
			pokemonType: "POKEMON_TYPE_DARK";
			power: 45;
			staminaLossScalar: 0.07;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "night_slash";
		}
	>
>;
export type MoveSettingsV0053MoveBubbleBeam = S<
	MoveSettings<
		"V0053_MOVE_BUBBLE_BEAM",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 1800;
			damageWindowStartMs: 1550;
			durationMs: 2000;
			energyDelta: -33;
			movementId: "BUBBLE_BEAM";
			pokemonType: "POKEMON_TYPE_WATER";
			power: 45;
			staminaLossScalar: 0.065;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "bubble_beam";
		}
	>
>;
export type MoveSettingsV0054MoveSubmission = S<
	MoveSettings<
		"V0054_MOVE_SUBMISSION",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 1800;
			damageWindowStartMs: 1600;
			durationMs: 2000;
			energyDelta: -50;
			movementId: "SUBMISSION";
			pokemonType: "POKEMON_TYPE_FIGHTING";
			power: 55;
			staminaLossScalar: 0.08;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "submission";
		}
	>
>;
export type MoveSettingsV0056MoveLowSweep = S<
	MoveSettings<
		"V0056_MOVE_LOW_SWEEP",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 1750;
			damageWindowStartMs: 1400;
			durationMs: 2000;
			energyDelta: -33;
			movementId: "LOW_SWEEP";
			pokemonType: "POKEMON_TYPE_FIGHTING";
			power: 40;
			staminaLossScalar: 0.065;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "low_sweep";
		}
	>
>;
export type MoveSettingsV0057MoveAquaJet = S<
	MoveSettings<
		"V0057_MOVE_AQUA_JET",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2000;
			damageWindowStartMs: 1600;
			durationMs: 2500;
			energyDelta: -33;
			movementId: "AQUA_JET";
			pokemonType: "POKEMON_TYPE_WATER";
			power: 45;
			staminaLossScalar: 0.04;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "aqua_jet";
		}
	>
>;
export type MoveSettingsV0058MoveAquaTail = S<
	MoveSettings<
		"V0058_MOVE_AQUA_TAIL",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 1750;
			damageWindowStartMs: 1300;
			durationMs: 2000;
			energyDelta: -33;
			movementId: "AQUA_TAIL";
			pokemonType: "POKEMON_TYPE_WATER";
			power: 50;
			staminaLossScalar: 0.09;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "aqua_tail";
		}
	>
>;
export type MoveSettingsV0059MoveSeedBomb = S<
	MoveSettings<
		"V0059_MOVE_SEED_BOMB",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 1800;
			damageWindowStartMs: 1100;
			durationMs: 2000;
			energyDelta: -33;
			movementId: "SEED_BOMB";
			pokemonType: "POKEMON_TYPE_GRASS";
			power: 55;
			staminaLossScalar: 0.08;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "seed_bomb";
		}
	>
>;
export type MoveSettingsV0060MovePsyshock = S<
	MoveSettings<
		"V0060_MOVE_PSYSHOCK",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2400;
			damageWindowStartMs: 1800;
			durationMs: 2500;
			energyDelta: -33;
			movementId: "PSYSHOCK";
			pokemonType: "POKEMON_TYPE_PSYCHIC";
			power: 60;
			staminaLossScalar: 0.08;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "psyshock";
		}
	>
>;
export type MoveSettingsV0062MoveAncientPower = S<
	MoveSettings<
		"V0062_MOVE_ANCIENT_POWER",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 3100;
			damageWindowStartMs: 2850;
			durationMs: 3500;
			energyDelta: -33;
			movementId: "ANCIENT_POWER";
			pokemonType: "POKEMON_TYPE_ROCK";
			power: 70;
			staminaLossScalar: 0.06;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "ancient_power";
		}
	>
>;
export type MoveSettingsV0063MoveRockTomb = S<
	MoveSettings<
		"V0063_MOVE_ROCK_TOMB",
		{
			animationId: 5;
			criticalChance: 0.25;
			damageWindowEndMs: 2800;
			damageWindowStartMs: 2050;
			durationMs: 3000;
			energyDelta: -50;
			movementId: "ROCK_TOMB";
			pokemonType: "POKEMON_TYPE_ROCK";
			power: 65;
			staminaLossScalar: 0.06;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "rock_tomb";
		}
	>
>;
export type MoveSettingsV0064MoveRockSlide = S<
	MoveSettings<
		"V0064_MOVE_ROCK_SLIDE",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2400;
			damageWindowStartMs: 1300;
			durationMs: 2500;
			energyDelta: -50;
			movementId: "ROCK_SLIDE";
			pokemonType: "POKEMON_TYPE_ROCK";
			power: 75;
			staminaLossScalar: 0.075;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "rock_slide";
		}
	>
>;
export type MoveSettingsV0065MovePowerGem = S<
	MoveSettings<
		"V0065_MOVE_POWER_GEM",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2800;
			damageWindowStartMs: 2050;
			durationMs: 3000;
			energyDelta: -50;
			movementId: "POWER_GEM";
			pokemonType: "POKEMON_TYPE_ROCK";
			power: 80;
			staminaLossScalar: 0.08;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "power_gem";
		}
	>
>;
export type MoveSettingsV0066MoveShadowSneak = S<
	MoveSettings<
		"V0066_MOVE_SHADOW_SNEAK",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2800;
			damageWindowStartMs: 2300;
			durationMs: 3000;
			energyDelta: -33;
			movementId: "SHADOW_SNEAK";
			pokemonType: "POKEMON_TYPE_GHOST";
			power: 50;
			staminaLossScalar: 0.04;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "shadow_sneak";
		}
	>
>;
export type MoveSettingsV0067MoveShadowPunch = S<
	MoveSettings<
		"V0067_MOVE_SHADOW_PUNCH",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 1300;
			damageWindowStartMs: 1100;
			durationMs: 1500;
			energyDelta: -33;
			movementId: "SHADOW_PUNCH";
			pokemonType: "POKEMON_TYPE_GHOST";
			power: 35;
			staminaLossScalar: 0.06;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "shadow_punch";
		}
	>
>;
export type MoveSettingsV0069MoveOminousWind = S<
	MoveSettings<
		"V0069_MOVE_OMINOUS_WIND",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2300;
			damageWindowStartMs: 2050;
			durationMs: 2500;
			energyDelta: -33;
			movementId: "OMINOUS_WIND";
			pokemonType: "POKEMON_TYPE_GHOST";
			power: 55;
			staminaLossScalar: 0.06;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "ominous_wind";
		}
	>
>;
export type MoveSettingsV0070MoveShadowBall = S<
	MoveSettings<
		"V0070_MOVE_SHADOW_BALL",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2800;
			damageWindowStartMs: 2400;
			durationMs: 3000;
			energyDelta: -50;
			movementId: "SHADOW_BALL";
			pokemonType: "POKEMON_TYPE_GHOST";
			power: 100;
			staminaLossScalar: 0.08;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "shadow_ball";
		}
	>
>;
export type MoveSettingsV0072MoveMagnetBomb = S<
	MoveSettings<
		"V0072_MOVE_MAGNET_BOMB",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2800;
			damageWindowStartMs: 2400;
			durationMs: 3000;
			energyDelta: -33;
			movementId: "MAGNET_BOMB";
			pokemonType: "POKEMON_TYPE_STEEL";
			power: 75;
			staminaLossScalar: 0.06;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "magnet_bomb";
		}
	>
>;
export type MoveSettingsV0074MoveIronHead = S<
	MoveSettings<
		"V0074_MOVE_IRON_HEAD",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 1800;
			damageWindowStartMs: 1400;
			durationMs: 2000;
			energyDelta: -50;
			movementId: "IRON_HEAD";
			pokemonType: "POKEMON_TYPE_STEEL";
			power: 60;
			staminaLossScalar: 0.08;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "iron_head";
		}
	>
>;
export type MoveSettingsV0075MoveParabolicCharge = S<
	MoveSettings<
		"V0075_MOVE_PARABOLIC_CHARGE",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2600;
			damageWindowStartMs: 1400;
			durationMs: 3000;
			energyDelta: -50;
			healScalar: 0.5;
			movementId: "PARABOLIC_CHARGE";
			pokemonType: "POKEMON_TYPE_ELECTRIC";
			power: 70;
			staminaLossScalar: 0.05;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "parabolic_charge";
		}
	>
>;
export type MoveSettingsV0077MoveThunderPunch = S<
	MoveSettings<
		"V0077_MOVE_THUNDER_PUNCH",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 1750;
			damageWindowStartMs: 1900;
			durationMs: 2000;
			energyDelta: -33;
			movementId: "THUNDER_PUNCH";
			pokemonType: "POKEMON_TYPE_ELECTRIC";
			power: 50;
			staminaLossScalar: 0.075;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "thunder_punch";
		}
	>
>;
export type MoveSettingsV0078MoveThunder = S<
	MoveSettings<
		"V0078_MOVE_THUNDER",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2300;
			damageWindowStartMs: 1300;
			durationMs: 2500;
			energyDelta: -100;
			movementId: "THUNDER";
			pokemonType: "POKEMON_TYPE_ELECTRIC";
			power: 100;
			staminaLossScalar: 0.11;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "thunder";
		}
	>
>;
export type MoveSettingsV0079MoveThunderbolt = S<
	MoveSettings<
		"V0079_MOVE_THUNDERBOLT",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2300;
			damageWindowStartMs: 1800;
			durationMs: 2500;
			energyDelta: -50;
			movementId: "THUNDERBOLT";
			pokemonType: "POKEMON_TYPE_ELECTRIC";
			power: 80;
			staminaLossScalar: 0.09;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "thunderbolt";
		}
	>
>;
export type MoveSettingsV0080MoveTwister = S<
	MoveSettings<
		"V0080_MOVE_TWISTER",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2800;
			damageWindowStartMs: 1150;
			durationMs: 3000;
			energyDelta: -33;
			movementId: "TWISTER";
			pokemonType: "POKEMON_TYPE_DRAGON";
			power: 50;
			staminaLossScalar: 0.04;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "twister";
		}
	>
>;
export type MoveSettingsV0082MoveDragonPulse = S<
	MoveSettings<
		"V0082_MOVE_DRAGON_PULSE",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 3200;
			damageWindowStartMs: 2050;
			durationMs: 3500;
			energyDelta: -50;
			movementId: "DRAGON_PULSE";
			pokemonType: "POKEMON_TYPE_DRAGON";
			power: 90;
			staminaLossScalar: 0.085;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "dragon_pulse";
		}
	>
>;
export type MoveSettingsV0083MoveDragonClaw = S<
	MoveSettings<
		"V0083_MOVE_DRAGON_CLAW",
		{
			animationId: 5;
			criticalChance: 0.25;
			damageWindowEndMs: 1100;
			damageWindowStartMs: 900;
			durationMs: 1500;
			energyDelta: -33;
			movementId: "DRAGON_CLAW";
			pokemonType: "POKEMON_TYPE_DRAGON";
			power: 45;
			staminaLossScalar: 0.08;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "dragon_claw";
		}
	>
>;
export type MoveSettingsV0084MoveDisarmingVoice = S<
	MoveSettings<
		"V0084_MOVE_DISARMING_VOICE",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 3600;
			damageWindowStartMs: 3300;
			durationMs: 4000;
			energyDelta: -33;
			movementId: "DISARMING_VOICE";
			pokemonType: "POKEMON_TYPE_FAIRY";
			power: 70;
			staminaLossScalar: 0.04;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "disarming_voice";
		}
	>
>;
export type MoveSettingsV0085MoveDrainingKiss = S<
	MoveSettings<
		"V0085_MOVE_DRAINING_KISS",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 1200;
			damageWindowStartMs: 900;
			durationMs: 2500;
			energyDelta: -50;
			healScalar: 1;
			movementId: "DRAINING_KISS";
			pokemonType: "POKEMON_TYPE_FAIRY";
			power: 60;
			staminaLossScalar: 0.05;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "draining_kiss";
		}
	>
>;
export type MoveSettingsV0086MoveDazzlingGleam = S<
	MoveSettings<
		"V0086_MOVE_DAZZLING_GLEAM",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 3300;
			damageWindowStartMs: 2100;
			durationMs: 3500;
			energyDelta: -50;
			movementId: "DAZZLING_GLEAM";
			pokemonType: "POKEMON_TYPE_FAIRY";
			power: 100;
			staminaLossScalar: 0.08;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "dazzling_gleam";
		}
	>
>;
export type MoveSettingsV0087MoveMoonblast = S<
	MoveSettings<
		"V0087_MOVE_MOONBLAST",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 3800;
			damageWindowStartMs: 2300;
			durationMs: 4000;
			energyDelta: -100;
			movementId: "MOONBLAST";
			pokemonType: "POKEMON_TYPE_FAIRY";
			power: 130;
			staminaLossScalar: 0.095;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "moonblast";
		}
	>
>;
export type MoveSettingsV0088MovePlayRough = S<
	MoveSettings<
		"V0088_MOVE_PLAY_ROUGH",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2800;
			damageWindowStartMs: 1400;
			durationMs: 3000;
			energyDelta: -50;
			movementId: "PLAY_ROUGH";
			pokemonType: "POKEMON_TYPE_FAIRY";
			power: 90;
			staminaLossScalar: 0.1;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "play_rough";
		}
	>
>;
export type MoveSettingsV0089MoveCrossPoison = S<
	MoveSettings<
		"V0089_MOVE_CROSS_POISON",
		{
			animationId: 5;
			criticalChance: 0.25;
			damageWindowEndMs: 1300;
			damageWindowStartMs: 900;
			durationMs: 1500;
			energyDelta: -33;
			movementId: "CROSS_POISON";
			pokemonType: "POKEMON_TYPE_POISON";
			power: 40;
			staminaLossScalar: 0.07;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "cross_poison";
		}
	>
>;
export type MoveSettingsV0090MoveSludgeBomb = S<
	MoveSettings<
		"V0090_MOVE_SLUDGE_BOMB",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2300;
			damageWindowStartMs: 1300;
			durationMs: 2500;
			energyDelta: -50;
			movementId: "SLUDGE_BOMB";
			pokemonType: "POKEMON_TYPE_POISON";
			power: 85;
			staminaLossScalar: 0.09;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "sludge_bomb";
		}
	>
>;
export type MoveSettingsV0091MoveSludgeWave = S<
	MoveSettings<
		"V0091_MOVE_SLUDGE_WAVE",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2800;
			damageWindowStartMs: 1800;
			durationMs: 3000;
			energyDelta: -100;
			movementId: "SLUDGE_WAVE";
			pokemonType: "POKEMON_TYPE_POISON";
			power: 105;
			staminaLossScalar: 0.095;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "sludge_wave";
		}
	>
>;
export type MoveSettingsV0092MoveGunkShot = S<
	MoveSettings<
		"V0092_MOVE_GUNK_SHOT",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2600;
			damageWindowStartMs: 1600;
			durationMs: 3000;
			energyDelta: -100;
			movementId: "GUNK_SHOT";
			pokemonType: "POKEMON_TYPE_POISON";
			power: 130;
			staminaLossScalar: 0.12;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gunk_shot";
		}
	>
>;
export type MoveSettingsV0094MoveBoneClub = S<
	MoveSettings<
		"V0094_MOVE_BONE_CLUB",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 1300;
			damageWindowStartMs: 900;
			durationMs: 1500;
			energyDelta: -33;
			movementId: "BONE_CLUB";
			pokemonType: "POKEMON_TYPE_GROUND";
			power: 40;
			staminaLossScalar: 0.065;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "bone_club";
		}
	>
>;
export type MoveSettingsV0095MoveBulldoze = S<
	MoveSettings<
		"V0095_MOVE_BULLDOZE",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 3100;
			damageWindowStartMs: 2600;
			durationMs: 3500;
			energyDelta: -50;
			movementId: "BULLDOZE";
			pokemonType: "POKEMON_TYPE_GROUND";
			power: 80;
			staminaLossScalar: 0.06;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "bulldoze";
		}
	>
>;
export type MoveSettingsV0096MoveMudBomb = S<
	MoveSettings<
		"V0096_MOVE_MUD_BOMB",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2300;
			damageWindowStartMs: 1900;
			durationMs: 2500;
			energyDelta: -33;
			movementId: "MUD_BOMB";
			pokemonType: "POKEMON_TYPE_GROUND";
			power: 60;
			staminaLossScalar: 0.065;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "mud_bomb";
		}
	>
>;
export type MoveSettingsV0099MoveSignalBeam = S<
	MoveSettings<
		"V0099_MOVE_SIGNAL_BEAM",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2700;
			damageWindowStartMs: 1900;
			durationMs: 3000;
			energyDelta: -50;
			movementId: "SIGNAL_BEAM";
			pokemonType: "POKEMON_TYPE_BUG";
			power: 75;
			staminaLossScalar: 0.075;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "signal_beam";
		}
	>
>;
export type MoveSettingsV0100MoveXScissor = S<
	MoveSettings<
		"V0100_MOVE_X_SCISSOR",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 1300;
			damageWindowStartMs: 1100;
			durationMs: 1500;
			energyDelta: -33;
			movementId: "X_SCISSOR";
			pokemonType: "POKEMON_TYPE_BUG";
			power: 45;
			staminaLossScalar: 0.08;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "x_scissor";
		}
	>
>;
export type MoveSettingsV0101MoveFlameCharge = S<
	MoveSettings<
		"V0101_MOVE_FLAME_CHARGE",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 3650;
			damageWindowStartMs: 3100;
			durationMs: 4000;
			energyDelta: -33;
			movementId: "FLAME_CHARGE";
			pokemonType: "POKEMON_TYPE_FIRE";
			power: 70;
			staminaLossScalar: 0.05;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "flame_charge";
		}
	>
>;
export type MoveSettingsV0102MoveFlameBurst = S<
	MoveSettings<
		"V0102_MOVE_FLAME_BURST",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2000;
			damageWindowStartMs: 900;
			durationMs: 2500;
			energyDelta: -50;
			movementId: "FLAME_BURST";
			pokemonType: "POKEMON_TYPE_FIRE";
			power: 70;
			staminaLossScalar: 0.07;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "flame_burst";
		}
	>
>;
export type MoveSettingsV0103MoveFireBlast = S<
	MoveSettings<
		"V0103_MOVE_FIRE_BLAST",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 3700;
			damageWindowStartMs: 2900;
			durationMs: 4000;
			energyDelta: -100;
			movementId: "FIRE_BLAST";
			pokemonType: "POKEMON_TYPE_FIRE";
			power: 140;
			staminaLossScalar: 0.11;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "fire_blast";
		}
	>
>;
export type MoveSettingsV0104MoveBrine = S<
	MoveSettings<
		"V0104_MOVE_BRINE",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2300;
			damageWindowStartMs: 1700;
			durationMs: 2500;
			energyDelta: -50;
			movementId: "BRINE";
			pokemonType: "POKEMON_TYPE_WATER";
			power: 65;
			staminaLossScalar: 0.065;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "brine";
		}
	>
>;
export type MoveSettingsV0105MoveWaterPulse = S<
	MoveSettings<
		"V0105_MOVE_WATER_PULSE",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2700;
			damageWindowStartMs: 2000;
			durationMs: 3000;
			energyDelta: -50;
			movementId: "WATER_PULSE";
			pokemonType: "POKEMON_TYPE_WATER";
			power: 65;
			staminaLossScalar: 0.06;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "water_pulse";
		}
	>
>;
export type MoveSettingsV0106MoveScald = S<
	MoveSettings<
		"V0106_MOVE_SCALD",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 3200;
			damageWindowStartMs: 1100;
			durationMs: 3500;
			energyDelta: -50;
			movementId: "SCALD";
			pokemonType: "POKEMON_TYPE_WATER";
			power: 75;
			staminaLossScalar: 0.08;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "scald";
		}
	>
>;
export type MoveSettingsV0107MoveHydroPump = S<
	MoveSettings<
		"V0107_MOVE_HYDRO_PUMP",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 3200;
			damageWindowStartMs: 1100;
			durationMs: 3500;
			energyDelta: -100;
			movementId: "HYDRO_PUMP";
			pokemonType: "POKEMON_TYPE_WATER";
			power: 135;
			staminaLossScalar: 0.11;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "hydro_pump";
		}
	>
>;
export type MoveSettingsV0108MovePsychic = S<
	MoveSettings<
		"V0108_MOVE_PSYCHIC",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2800;
			damageWindowStartMs: 1500;
			durationMs: 3000;
			energyDelta: -50;
			movementId: "PSYCHIC";
			pokemonType: "POKEMON_TYPE_PSYCHIC";
			power: 95;
			staminaLossScalar: 0.09;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "psychic";
		}
	>
>;
export type MoveSettingsV0109MovePsystrike = S<
	MoveSettings<
		"V0109_MOVE_PSYSTRIKE",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2200;
			damageWindowStartMs: 1200;
			durationMs: 2500;
			energyDelta: -50;
			movementId: "PSYSTRIKE";
			pokemonType: "POKEMON_TYPE_PSYCHIC";
			power: 95;
			staminaLossScalar: 0.1;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "psystrike";
		}
	>
>;
export type MoveSettingsV0111MoveIcyWind = S<
	MoveSettings<
		"V0111_MOVE_ICY_WIND",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 3000;
			damageWindowStartMs: 2200;
			durationMs: 3500;
			energyDelta: -33;
			movementId: "ICY_WIND";
			pokemonType: "POKEMON_TYPE_ICE";
			power: 65;
			staminaLossScalar: 0.055;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "icy_wind";
		}
	>
>;
export type MoveSettingsV0114MoveGigaDrain = S<
	MoveSettings<
		"V0114_MOVE_GIGA_DRAIN",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2300;
			damageWindowStartMs: 1300;
			durationMs: 4000;
			energyDelta: -100;
			healScalar: 0.5;
			movementId: "GIGA_DRAIN";
			pokemonType: "POKEMON_TYPE_GRASS";
			power: 50;
			staminaLossScalar: 0.075;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "giga_drain";
		}
	>
>;
export type MoveSettingsV0115MoveFirePunch = S<
	MoveSettings<
		"V0115_MOVE_FIRE_PUNCH",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 1700;
			damageWindowStartMs: 1300;
			durationMs: 2000;
			energyDelta: -33;
			movementId: "FIRE_PUNCH";
			pokemonType: "POKEMON_TYPE_FIRE";
			power: 50;
			staminaLossScalar: 0.075;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "fire_punch";
		}
	>
>;
export type MoveSettingsV0116MoveSolarBeam = S<
	MoveSettings<
		"V0116_MOVE_SOLAR_BEAM",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 4800;
			damageWindowStartMs: 2800;
			durationMs: 5000;
			energyDelta: -100;
			movementId: "SOLAR_BEAM";
			pokemonType: "POKEMON_TYPE_GRASS";
			power: 180;
			staminaLossScalar: 0.12;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "solar_beam";
		}
	>
>;
export type MoveSettingsV0117MoveLeafBlade = S<
	MoveSettings<
		"V0117_MOVE_LEAF_BLADE",
		{
			animationId: 5;
			criticalChance: 0.25;
			damageWindowEndMs: 2300;
			damageWindowStartMs: 1350;
			durationMs: 2500;
			energyDelta: -33;
			movementId: "LEAF_BLADE";
			pokemonType: "POKEMON_TYPE_GRASS";
			power: 70;
			staminaLossScalar: 0.09;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "leaf_blade";
		}
	>
>;
export type MoveSettingsV0118MovePowerWhip = S<
	MoveSettings<
		"V0118_MOVE_POWER_WHIP",
		{
			animationId: 5;
			damageWindowEndMs: 2250;
			damageWindowStartMs: 1150;
			durationMs: 2500;
			energyDelta: -50;
			movementId: "POWER_WHIP";
			pokemonType: "POKEMON_TYPE_GRASS";
			power: 90;
			staminaLossScalar: 0.12;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "power_whip";
		}
	>
>;
export type MoveSettingsV0121MoveAirCutter = S<
	MoveSettings<
		"V0121_MOVE_AIR_CUTTER",
		{
			animationId: 5;
			criticalChance: 0.25;
			damageWindowEndMs: 2300;
			damageWindowStartMs: 1600;
			durationMs: 2500;
			energyDelta: -50;
			movementId: "AIR_CUTTER";
			pokemonType: "POKEMON_TYPE_FLYING";
			power: 55;
			staminaLossScalar: 0.06;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "air_cutter";
		}
	>
>;
export type MoveSettingsV0122MoveHurricane = S<
	MoveSettings<
		"V0122_MOVE_HURRICANE",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2200;
			damageWindowStartMs: 1000;
			durationMs: 2500;
			energyDelta: -100;
			movementId: "HURRICANE";
			pokemonType: "POKEMON_TYPE_FLYING";
			power: 105;
			staminaLossScalar: 0.11;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "hurricane";
		}
	>
>;
export type MoveSettingsV0123MoveBrickBreak = S<
	MoveSettings<
		"V0123_MOVE_BRICK_BREAK",
		{
			animationId: 5;
			criticalChance: 0.25;
			damageWindowEndMs: 1300;
			damageWindowStartMs: 700;
			durationMs: 1500;
			energyDelta: -33;
			movementId: "BRICK_BREAK";
			pokemonType: "POKEMON_TYPE_FIGHTING";
			power: 40;
			staminaLossScalar: 0.075;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "brick_break";
		}
	>
>;
export type MoveSettingsV0125MoveSwift = S<
	MoveSettings<
		"V0125_MOVE_SWIFT",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2800;
			damageWindowStartMs: 2200;
			durationMs: 3000;
			energyDelta: -50;
			movementId: "SWIFT";
			pokemonType: "POKEMON_TYPE_NORMAL";
			power: 65;
			staminaLossScalar: 0.06;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "swift";
		}
	>
>;
export type MoveSettingsV0126MoveHornAttack = S<
	MoveSettings<
		"V0126_MOVE_HORN_ATTACK",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 1800;
			damageWindowStartMs: 950;
			durationMs: 2000;
			energyDelta: -33;
			movementId: "HORN_ATTACK";
			pokemonType: "POKEMON_TYPE_NORMAL";
			power: 45;
			staminaLossScalar: 0.065;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "horn_attack";
		}
	>
>;
export type MoveSettingsV0127MoveStomp = S<
	MoveSettings<
		"V0127_MOVE_STOMP",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 1300;
			damageWindowStartMs: 900;
			durationMs: 1500;
			energyDelta: -50;
			movementId: "STOMP";
			pokemonType: "POKEMON_TYPE_NORMAL";
			power: 50;
			staminaLossScalar: 0.065;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "stomp";
		}
	>
>;
export type MoveSettingsV0129MoveHyperFang = S<
	MoveSettings<
		"V0129_MOVE_HYPER_FANG",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2000;
			damageWindowStartMs: 1500;
			durationMs: 2500;
			energyDelta: -50;
			movementId: "HYPER_FANG";
			pokemonType: "POKEMON_TYPE_NORMAL";
			power: 80;
			staminaLossScalar: 0.08;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "hyper_fang";
		}
	>
>;
export type MoveSettingsV0131MoveBodySlam = S<
	MoveSettings<
		"V0131_MOVE_BODY_SLAM",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 1800;
			damageWindowStartMs: 1300;
			durationMs: 2000;
			energyDelta: -33;
			movementId: "BODY_SLAM";
			pokemonType: "POKEMON_TYPE_NORMAL";
			power: 50;
			staminaLossScalar: 0.085;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "body_slam";
		}
	>
>;
export type MoveSettingsV0132MoveRest = S<
	MoveSettings<
		"V0132_MOVE_REST",
		{
			animationId: 5;
			damageWindowEndMs: 1800;
			damageWindowStartMs: 1600;
			durationMs: 2000;
			energyDelta: -33;
			healScalar: 1;
			movementId: "REST";
			pokemonType: "POKEMON_TYPE_NORMAL";
			power: 50;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "rest";
		}
	>
>;
export type MoveSettingsV0133MoveStruggle = S<
	MoveSettings<
		"V0133_MOVE_STRUGGLE",
		{
			animationId: 5;
			damageWindowEndMs: 1800;
			damageWindowStartMs: 1000;
			durationMs: 2000;
			movementId: "STRUGGLE";
			pokemonType: "POKEMON_TYPE_NORMAL";
			power: 35;
			staminaLossScalar: 0.1;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "struggle";
		}
	>
>;
export type MoveSettingsV0134MoveScaldBlastoise = S<
	MoveSettings<
		"V0134_MOVE_SCALD_BLASTOISE",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 4400;
			damageWindowStartMs: 2300;
			durationMs: 4500;
			energyDelta: -100;
			movementId: "SCALD_BLASTOISE";
			pokemonType: "POKEMON_TYPE_WATER";
			power: 50;
			staminaLossScalar: 0.08;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "scald_blastoise";
		}
	>
>;
export type MoveSettingsV0135MoveHydroPumpBlastoise = S<
	MoveSettings<
		"V0135_MOVE_HYDRO_PUMP_BLASTOISE",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 4300;
			damageWindowStartMs: 2200;
			durationMs: 4500;
			energyDelta: -100;
			movementId: "HYDRO_PUMP_BLASTOISE";
			pokemonType: "POKEMON_TYPE_WATER";
			power: 90;
			staminaLossScalar: 0.11;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "hydro_pump_blastoise";
		}
	>
>;
export type MoveSettingsV0136MoveWrapGreen = S<
	MoveSettings<
		"V0136_MOVE_WRAP_GREEN",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2800;
			damageWindowStartMs: 2150;
			durationMs: 3000;
			energyDelta: -33;
			movementId: "WRAP_GREEN";
			pokemonType: "POKEMON_TYPE_NORMAL";
			power: 25;
			staminaLossScalar: 0.06;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "wrap_green";
		}
	>
>;
export type MoveSettingsV0137MoveWrapPink = S<
	MoveSettings<
		"V0137_MOVE_WRAP_PINK",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2800;
			damageWindowStartMs: 2150;
			durationMs: 3000;
			energyDelta: -33;
			movementId: "WRAP_PINK";
			pokemonType: "POKEMON_TYPE_NORMAL";
			power: 25;
			staminaLossScalar: 0.06;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "wrap_pink";
		}
	>
>;
export type MoveSettingsV0200MoveFuryCutterFast = S<
	MoveSettings<
		"V0200_MOVE_FURY_CUTTER_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 500;
			damageWindowStartMs: 200;
			durationMs: 500;
			energyDelta: 8;
			movementId: "FURY_CUTTER_FAST";
			pokemonType: "POKEMON_TYPE_BUG";
			power: 4;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "fury_cutter_fast";
		}
	>
>;
export type MoveSettingsV0201MoveBugBiteFast = S<
	MoveSettings<
		"V0201_MOVE_BUG_BITE_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 450;
			damageWindowStartMs: 250;
			durationMs: 500;
			energyDelta: 6;
			movementId: "BUG_BITE_FAST";
			pokemonType: "POKEMON_TYPE_BUG";
			power: 5;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "bug_bite_fast";
		}
	>
>;
export type MoveSettingsV0202MoveBiteFast = S<
	MoveSettings<
		"V0202_MOVE_BITE_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 500;
			damageWindowStartMs: 300;
			durationMs: 500;
			energyDelta: 4;
			movementId: "BITE_FAST";
			pokemonType: "POKEMON_TYPE_DARK";
			power: 6;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "bite_fast";
		}
	>
>;
export type MoveSettingsV0203MoveSuckerPunchFast = S<
	MoveSettings<
		"V0203_MOVE_SUCKER_PUNCH_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 500;
			damageWindowStartMs: 100;
			durationMs: 500;
			energyDelta: 6;
			movementId: "SUCKER_PUNCH_FAST";
			pokemonType: "POKEMON_TYPE_DARK";
			power: 5;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "sucker_punch_fast";
		}
	>
>;
export type MoveSettingsV0204MoveDragonBreathFast = S<
	MoveSettings<
		"V0204_MOVE_DRAGON_BREATH_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 500;
			damageWindowStartMs: 300;
			durationMs: 500;
			energyDelta: 4;
			movementId: "DRAGON_BREATH_FAST";
			pokemonType: "POKEMON_TYPE_DRAGON";
			power: 6;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "dragon_breath_fast";
		}
	>
>;
export type MoveSettingsV0205MoveThunderShockFast = S<
	MoveSettings<
		"V0205_MOVE_THUNDER_SHOCK_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 500;
			damageWindowStartMs: 200;
			durationMs: 500;
			energyDelta: 7;
			movementId: "THUNDER_SHOCK_FAST";
			pokemonType: "POKEMON_TYPE_ELECTRIC";
			power: 4;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "thunder_shock_fast";
		}
	>
>;
export type MoveSettingsV0206MoveSparkFast = S<
	MoveSettings<
		"V0206_MOVE_SPARK_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 500;
			damageWindowStartMs: 100;
			durationMs: 500;
			energyDelta: 6;
			movementId: "SPARK_FAST";
			pokemonType: "POKEMON_TYPE_ELECTRIC";
			power: 4;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "spark_fast";
		}
	>
>;
export type MoveSettingsV0207MoveLowKickFast = S<
	MoveSettings<
		"V0207_MOVE_LOW_KICK_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 500;
			damageWindowStartMs: 200;
			durationMs: 500;
			energyDelta: 5;
			movementId: "LOW_KICK_FAST";
			pokemonType: "POKEMON_TYPE_FIGHTING";
			power: 5;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "low_kick_fast";
		}
	>
>;
export type MoveSettingsV0208MoveKarateChopFast = S<
	MoveSettings<
		"V0208_MOVE_KARATE_CHOP_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 1000;
			damageWindowStartMs: 800;
			durationMs: 1000;
			energyDelta: 13;
			movementId: "KARATE_CHOP_FAST";
			pokemonType: "POKEMON_TYPE_FIGHTING";
			power: 10;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "karate_chop_fast";
		}
	>
>;
export type MoveSettingsV0209MoveEmberFast = S<
	MoveSettings<
		"V0209_MOVE_EMBER_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 800;
			damageWindowStartMs: 600;
			durationMs: 1000;
			energyDelta: 10;
			movementId: "EMBER_FAST";
			pokemonType: "POKEMON_TYPE_FIRE";
			power: 10;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "ember_fast";
		}
	>
>;
export type MoveSettingsV0210MoveWingAttackFast = S<
	MoveSettings<
		"V0210_MOVE_WING_ATTACK_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 950;
			damageWindowStartMs: 750;
			durationMs: 1000;
			energyDelta: 11;
			movementId: "WING_ATTACK_FAST";
			pokemonType: "POKEMON_TYPE_FLYING";
			power: 10;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "wing_attack_fast";
		}
	>
>;
export type MoveSettingsV0211MovePeckFast = S<
	MoveSettings<
		"V0211_MOVE_PECK_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 900;
			damageWindowStartMs: 450;
			durationMs: 1000;
			energyDelta: 10;
			movementId: "PECK_FAST";
			pokemonType: "POKEMON_TYPE_FLYING";
			power: 10;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "peck_fast";
		}
	>
>;
export type MoveSettingsV0212MoveLickFast = S<
	MoveSettings<
		"V0212_MOVE_LICK_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 500;
			damageWindowStartMs: 200;
			durationMs: 500;
			energyDelta: 6;
			movementId: "LICK_FAST";
			pokemonType: "POKEMON_TYPE_GHOST";
			power: 5;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "lick_fast";
		}
	>
>;
export type MoveSettingsV0213MoveShadowClawFast = S<
	MoveSettings<
		"V0213_MOVE_SHADOW_CLAW_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 300;
			damageWindowStartMs: 50;
			durationMs: 500;
			energyDelta: 4;
			movementId: "SHADOW_CLAW_FAST";
			pokemonType: "POKEMON_TYPE_GHOST";
			power: 6;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "shadow_claw_fast";
		}
	>
>;
export type MoveSettingsV0214MoveVineWhipFast = S<
	MoveSettings<
		"V0214_MOVE_VINE_WHIP_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 500;
			damageWindowStartMs: 250;
			durationMs: 500;
			energyDelta: 5;
			movementId: "VINE_WHIP_FAST";
			pokemonType: "POKEMON_TYPE_GRASS";
			power: 6;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "vine_whip_fast";
		}
	>
>;
export type MoveSettingsV0215MoveRazorLeafFast = S<
	MoveSettings<
		"V0215_MOVE_RAZOR_LEAF_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 850;
			damageWindowStartMs: 600;
			durationMs: 1000;
			energyDelta: 7;
			movementId: "RAZOR_LEAF_FAST";
			pokemonType: "POKEMON_TYPE_GRASS";
			power: 13;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "razor_leaf_fast";
		}
	>
>;
export type MoveSettingsV0216MoveMudShotFast = S<
	MoveSettings<
		"V0216_MOVE_MUD_SHOT_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 450;
			damageWindowStartMs: 250;
			durationMs: 500;
			energyDelta: 6;
			movementId: "MUD_SHOT_FAST";
			pokemonType: "POKEMON_TYPE_GROUND";
			power: 4;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "mud_shot_fast";
		}
	>
>;
export type MoveSettingsV0217MoveIceShardFast = S<
	MoveSettings<
		"V0217_MOVE_ICE_SHARD_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 700;
			damageWindowStartMs: 400;
			durationMs: 1000;
			energyDelta: 10;
			movementId: "ICE_SHARD_FAST";
			pokemonType: "POKEMON_TYPE_ICE";
			power: 10;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "ice_shard_fast";
		}
	>
>;
export type MoveSettingsV0218MoveFrostBreathFast = S<
	MoveSettings<
		"V0218_MOVE_FROST_BREATH_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 850;
			damageWindowStartMs: 550;
			durationMs: 1000;
			energyDelta: 9;
			movementId: "FROST_BREATH_FAST";
			pokemonType: "POKEMON_TYPE_ICE";
			power: 11;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "frost_breath_fast";
		}
	>
>;
export type MoveSettingsV0219MoveQuickAttackFast = S<
	MoveSettings<
		"V0219_MOVE_QUICK_ATTACK_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 750;
			damageWindowStartMs: 450;
			durationMs: 1000;
			energyDelta: 13;
			movementId: "QUICK_ATTACK_FAST";
			pokemonType: "POKEMON_TYPE_NORMAL";
			power: 10;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "quick_attack_fast";
		}
	>
>;
export type MoveSettingsV0220MoveScratchFast = S<
	MoveSettings<
		"V0220_MOVE_SCRATCH_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 500;
			damageWindowStartMs: 300;
			durationMs: 500;
			energyDelta: 4;
			movementId: "SCRATCH_FAST";
			pokemonType: "POKEMON_TYPE_NORMAL";
			power: 6;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "scratch_fast";
		}
	>
>;
export type MoveSettingsV0221MoveTackleFast = S<
	MoveSettings<
		"V0221_MOVE_TACKLE_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 500;
			damageWindowStartMs: 300;
			durationMs: 500;
			energyDelta: 5;
			movementId: "TACKLE_FAST";
			pokemonType: "POKEMON_TYPE_NORMAL";
			power: 5;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "tackle_fast";
		}
	>
>;
export type MoveSettingsV0222MovePoundFast = S<
	MoveSettings<
		"V0222_MOVE_POUND_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 440;
			damageWindowStartMs: 240;
			durationMs: 500;
			energyDelta: 5;
			movementId: "POUND_FAST";
			pokemonType: "POKEMON_TYPE_NORMAL";
			power: 6;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "pound_fast";
		}
	>
>;
export type MoveSettingsV0223MoveCutFast = S<
	MoveSettings<
		"V0223_MOVE_CUT_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 500;
			damageWindowStartMs: 300;
			durationMs: 500;
			energyDelta: 5;
			movementId: "CUT_FAST";
			pokemonType: "POKEMON_TYPE_NORMAL";
			power: 5;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "cut_fast";
		}
	>
>;
export type MoveSettingsV0224MovePoisonJabFast = S<
	MoveSettings<
		"V0224_MOVE_POISON_JAB_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 1000;
			damageWindowStartMs: 400;
			durationMs: 1000;
			energyDelta: 9;
			movementId: "POISON_JAB_FAST";
			pokemonType: "POKEMON_TYPE_POISON";
			power: 13;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "poison_jab_fast";
		}
	>
>;
export type MoveSettingsV0225MoveAcidFast = S<
	MoveSettings<
		"V0225_MOVE_ACID_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 800;
			damageWindowStartMs: 600;
			durationMs: 1000;
			energyDelta: 10;
			movementId: "ACID_FAST";
			pokemonType: "POKEMON_TYPE_POISON";
			power: 11;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "acid_fast";
		}
	>
>;
export type MoveSettingsV0226MovePsychoCutFast = S<
	MoveSettings<
		"V0226_MOVE_PSYCHO_CUT_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 470;
			damageWindowStartMs: 270;
			durationMs: 500;
			energyDelta: 7;
			movementId: "PSYCHO_CUT_FAST";
			pokemonType: "POKEMON_TYPE_PSYCHIC";
			power: 4;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "psycho_cut_fast";
		}
	>
>;
export type MoveSettingsV0227MoveRockThrowFast = S<
	MoveSettings<
		"V0227_MOVE_ROCK_THROW_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 900;
			damageWindowStartMs: 600;
			durationMs: 1000;
			energyDelta: 8;
			movementId: "ROCK_THROW_FAST";
			pokemonType: "POKEMON_TYPE_ROCK";
			power: 13;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "rock_throw_fast";
		}
	>
>;
export type MoveSettingsV0228MoveMetalClawFast = S<
	MoveSettings<
		"V0228_MOVE_METAL_CLAW_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 430;
			damageWindowStartMs: 230;
			durationMs: 500;
			energyDelta: 5;
			movementId: "METAL_CLAW_FAST";
			pokemonType: "POKEMON_TYPE_STEEL";
			power: 6;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "metal_claw_fast";
		}
	>
>;
export type MoveSettingsV0229MoveBulletPunchFast = S<
	MoveSettings<
		"V0229_MOVE_BULLET_PUNCH_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 1000;
			damageWindowStartMs: 400;
			durationMs: 1000;
			energyDelta: 11;
			movementId: "BULLET_PUNCH_FAST";
			pokemonType: "POKEMON_TYPE_STEEL";
			power: 10;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "bullet_punch_fast";
		}
	>
>;
export type MoveSettingsV0230MoveWaterGunFast = S<
	MoveSettings<
		"V0230_MOVE_WATER_GUN_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 500;
			damageWindowStartMs: 300;
			durationMs: 500;
			energyDelta: 5;
			movementId: "WATER_GUN_FAST";
			pokemonType: "POKEMON_TYPE_WATER";
			power: 5;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "water_gun_fast";
		}
	>
>;
export type MoveSettingsV0231MoveSplashFast = S<
	MoveSettings<
		"V0231_MOVE_SPLASH_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 1000;
			damageWindowStartMs: 800;
			durationMs: 1500;
			energyDelta: 17;
			movementId: "SPLASH_FAST";
			pokemonType: "POKEMON_TYPE_WATER";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "splash_fast";
		}
	>
>;
export type MoveSettingsV0232MoveWaterGunFastBlastoise = S<
	MoveSettings<
		"V0232_MOVE_WATER_GUN_FAST_BLASTOISE",
		{
			animationId: 4;
			damageWindowEndMs: 500;
			damageWindowStartMs: 300;
			durationMs: 1000;
			energyDelta: 6;
			movementId: "WATER_GUN_FAST_BLASTOISE";
			pokemonType: "POKEMON_TYPE_WATER";
			power: 10;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "water_gun_fast_blastoise";
		}
	>
>;
export type MoveSettingsV0233MoveMudSlapFast = S<
	MoveSettings<
		"V0233_MOVE_MUD_SLAP_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 1450;
			damageWindowStartMs: 1250;
			durationMs: 1500;
			energyDelta: 13;
			movementId: "MUD_SLAP_FAST";
			pokemonType: "POKEMON_TYPE_GROUND";
			power: 19;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "mud_slap_fast";
		}
	>
>;
export type MoveSettingsV0234MoveZenHeadbuttFast = S<
	MoveSettings<
		"V0234_MOVE_ZEN_HEADBUTT_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 950;
			damageWindowStartMs: 750;
			durationMs: 1000;
			energyDelta: 9;
			movementId: "ZEN_HEADBUTT_FAST";
			pokemonType: "POKEMON_TYPE_PSYCHIC";
			power: 11;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "zen_headbutt_fast";
		}
	>
>;
export type MoveSettingsV0235MoveConfusionFast = S<
	MoveSettings<
		"V0235_MOVE_CONFUSION_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 1500;
			damageWindowStartMs: 500;
			durationMs: 1500;
			energyDelta: 14;
			movementId: "CONFUSION_FAST";
			pokemonType: "POKEMON_TYPE_PSYCHIC";
			power: 19;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "confusion_fast";
		}
	>
>;
export type MoveSettingsV0236MovePoisonStingFast = S<
	MoveSettings<
		"V0236_MOVE_POISON_STING_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 475;
			damageWindowStartMs: 275;
			durationMs: 500;
			energyDelta: 6;
			movementId: "POISON_STING_FAST";
			pokemonType: "POKEMON_TYPE_POISON";
			power: 4;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "poison_sting_fast";
		}
	>
>;
export type MoveSettingsV0237MoveBubbleFast = S<
	MoveSettings<
		"V0237_MOVE_BUBBLE_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 800;
			damageWindowStartMs: 550;
			durationMs: 1000;
			energyDelta: 12;
			movementId: "BUBBLE_FAST";
			pokemonType: "POKEMON_TYPE_WATER";
			power: 10;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "bubble_fast";
		}
	>
>;
export type MoveSettingsV0238MoveFeintAttackFast = S<
	MoveSettings<
		"V0238_MOVE_FEINT_ATTACK_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 1000;
			damageWindowStartMs: 850;
			durationMs: 1000;
			energyDelta: 10;
			movementId: "FEINT_ATTACK_FAST";
			pokemonType: "POKEMON_TYPE_DARK";
			power: 11;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "feint_attack_fast";
		}
	>
>;
export type MoveSettingsV0239MoveSteelWingFast = S<
	MoveSettings<
		"V0239_MOVE_STEEL_WING_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 1000;
			damageWindowStartMs: 700;
			durationMs: 1000;
			energyDelta: 8;
			movementId: "STEEL_WING_FAST";
			pokemonType: "POKEMON_TYPE_STEEL";
			power: 14;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "steel_wing_fast";
		}
	>
>;
export type MoveSettingsV0240MoveFireFangFast = S<
	MoveSettings<
		"V0240_MOVE_FIRE_FANG_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 940;
			damageWindowStartMs: 740;
			durationMs: 1000;
			energyDelta: 9;
			movementId: "FIRE_FANG_FAST";
			pokemonType: "POKEMON_TYPE_FIRE";
			power: 13;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "fire_fang_fast";
		}
	>
>;
export type MoveSettingsV0241MoveRockSmashFast = S<
	MoveSettings<
		"V0241_MOVE_ROCK_SMASH_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 1000;
			damageWindowStartMs: 750;
			durationMs: 1500;
			energyDelta: 12;
			movementId: "ROCK_SMASH_FAST";
			pokemonType: "POKEMON_TYPE_FIGHTING";
			power: 17;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "rock_smash_fast";
		}
	>
>;
export type MoveSettingsV0242MoveTransformFast = S<
	MoveSettings<
		"V0242_MOVE_TRANSFORM_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 470;
			damageWindowStartMs: 70;
			durationMs: 2000;
			movementId: "TRANSFORM_FAST";
			pokemonType: "POKEMON_TYPE_NORMAL";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "transform_fast";
		}
	>
>;
export type MoveSettingsV0243MoveCounterFast = S<
	MoveSettings<
		"V0243_MOVE_COUNTER_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 1000;
			damageWindowStartMs: 800;
			durationMs: 1000;
			energyDelta: 9;
			movementId: "COUNTER_FAST";
			pokemonType: "POKEMON_TYPE_FIGHTING";
			power: 13;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "counter_fast";
		}
	>
>;
export type MoveSettingsV0244MovePowderSnowFast = S<
	MoveSettings<
		"V0244_MOVE_POWDER_SNOW_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 1000;
			damageWindowStartMs: 850;
			durationMs: 1000;
			energyDelta: 15;
			movementId: "POWDER_SNOW_FAST";
			pokemonType: "POKEMON_TYPE_ICE";
			power: 6;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "powder_snow_fast";
		}
	>
>;
export type MoveSettingsV0245MoveCloseCombat = S<
	MoveSettings<
		"V0245_MOVE_CLOSE_COMBAT",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2500;
			damageWindowStartMs: 1200;
			durationMs: 2500;
			energyDelta: -100;
			movementId: "CLOSE_COMBAT";
			pokemonType: "POKEMON_TYPE_FIGHTING";
			power: 105;
			staminaLossScalar: 0.04;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "close_combat";
		}
	>
>;
export type MoveSettingsV0246MoveDynamicPunch = S<
	MoveSettings<
		"V0246_MOVE_DYNAMIC_PUNCH",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2500;
			damageWindowStartMs: 1000;
			durationMs: 2500;
			energyDelta: -50;
			movementId: "DYNAMIC_PUNCH";
			pokemonType: "POKEMON_TYPE_FIGHTING";
			power: 85;
			staminaLossScalar: 0.04;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "dynamic_punch";
		}
	>
>;
export type MoveSettingsV0247MoveFocusBlast = S<
	MoveSettings<
		"V0247_MOVE_FOCUS_BLAST",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 3500;
			damageWindowStartMs: 3000;
			durationMs: 3500;
			energyDelta: -100;
			movementId: "FOCUS_BLAST";
			pokemonType: "POKEMON_TYPE_FIGHTING";
			power: 140;
			staminaLossScalar: 0.04;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "focus_blast";
		}
	>
>;
export type MoveSettingsV0248MoveAuroraBeam = S<
	MoveSettings<
		"V0248_MOVE_AURORA_BEAM",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 3500;
			damageWindowStartMs: 3300;
			durationMs: 3500;
			energyDelta: -50;
			movementId: "AURORA_BEAM";
			pokemonType: "POKEMON_TYPE_ICE";
			power: 80;
			staminaLossScalar: 0.04;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "aurora_beam";
		}
	>
>;
export type MoveSettingsV0249MoveChargeBeamFast = S<
	MoveSettings<
		"V0249_MOVE_CHARGE_BEAM_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 950;
			damageWindowStartMs: 750;
			durationMs: 1000;
			energyDelta: 14;
			movementId: "CHARGE_BEAM_FAST";
			pokemonType: "POKEMON_TYPE_ELECTRIC";
			power: 7;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "charge_beam_fast";
		}
	>
>;
export type MoveSettingsV0250MoveVoltSwitchFast = S<
	MoveSettings<
		"V0250_MOVE_VOLT_SWITCH_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 800;
			damageWindowStartMs: 600;
			durationMs: 1500;
			energyDelta: 20;
			movementId: "VOLT_SWITCH_FAST";
			pokemonType: "POKEMON_TYPE_ELECTRIC";
			power: 13;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "volt_switch_fast";
		}
	>
>;
export type MoveSettingsV0251MoveWildCharge = S<
	MoveSettings<
		"V0251_MOVE_WILD_CHARGE",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2000;
			damageWindowStartMs: 1600;
			durationMs: 2500;
			energyDelta: -50;
			movementId: "WILD_CHARGE";
			pokemonType: "POKEMON_TYPE_ELECTRIC";
			power: 90;
			staminaLossScalar: 0.04;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "wild_charge";
		}
	>
>;
export type MoveSettingsV0252MoveZapCannon = S<
	MoveSettings<
		"V0252_MOVE_ZAP_CANNON",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 3300;
			damageWindowStartMs: 2800;
			durationMs: 3500;
			energyDelta: -100;
			movementId: "ZAP_CANNON";
			pokemonType: "POKEMON_TYPE_ELECTRIC";
			power: 140;
			staminaLossScalar: 0.04;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "zap_cannon";
		}
	>
>;
export type MoveSettingsV0253MoveDragonTailFast = S<
	MoveSettings<
		"V0253_MOVE_DRAGON_TAIL_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 950;
			damageWindowStartMs: 750;
			durationMs: 1000;
			energyDelta: 8;
			movementId: "DRAGON_TAIL_FAST";
			pokemonType: "POKEMON_TYPE_DRAGON";
			power: 14;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "dragon_tail_fast";
		}
	>
>;
export type MoveSettingsV0254MoveAvalanche = S<
	MoveSettings<
		"V0254_MOVE_AVALANCHE",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 1900;
			damageWindowStartMs: 1500;
			durationMs: 2500;
			energyDelta: -50;
			movementId: "AVALANCHE";
			pokemonType: "POKEMON_TYPE_ICE";
			power: 85;
			staminaLossScalar: 0.04;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "avalanche";
		}
	>
>;
export type MoveSettingsV0255MoveAirSlashFast = S<
	MoveSettings<
		"V0255_MOVE_AIR_SLASH_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 1000;
			damageWindowStartMs: 800;
			durationMs: 1000;
			energyDelta: 8;
			movementId: "AIR_SLASH_FAST";
			pokemonType: "POKEMON_TYPE_FLYING";
			power: 12;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "air_slash_fast";
		}
	>
>;
export type MoveSettingsV0256MoveBraveBird = S<
	MoveSettings<
		"V0256_MOVE_BRAVE_BIRD",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 1600;
			damageWindowStartMs: 1000;
			durationMs: 2000;
			energyDelta: -100;
			movementId: "BRAVE_BIRD";
			pokemonType: "POKEMON_TYPE_FLYING";
			power: 130;
			staminaLossScalar: 0.04;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "brave_bird";
		}
	>
>;
export type MoveSettingsV0257MoveSkyAttack = S<
	MoveSettings<
		"V0257_MOVE_SKY_ATTACK",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 1700;
			damageWindowStartMs: 1500;
			durationMs: 2000;
			energyDelta: -50;
			movementId: "SKY_ATTACK";
			pokemonType: "POKEMON_TYPE_FLYING";
			power: 80;
			staminaLossScalar: 0.04;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "sky_attack";
		}
	>
>;
export type MoveSettingsV0258MoveSandTomb = S<
	MoveSettings<
		"V0258_MOVE_SAND_TOMB",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 4000;
			damageWindowStartMs: 1700;
			durationMs: 4000;
			energyDelta: -33;
			movementId: "SAND_TOMB";
			pokemonType: "POKEMON_TYPE_GROUND";
			power: 60;
			staminaLossScalar: 0.04;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "sand_tomb";
		}
	>
>;
export type MoveSettingsV0259MoveRockBlast = S<
	MoveSettings<
		"V0259_MOVE_ROCK_BLAST",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 1900;
			damageWindowStartMs: 1500;
			durationMs: 2000;
			energyDelta: -33;
			movementId: "ROCK_BLAST";
			pokemonType: "POKEMON_TYPE_ROCK";
			power: 50;
			staminaLossScalar: 0.04;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "rock_blast";
		}
	>
>;
export type MoveSettingsV0260MoveInfestationFast = S<
	MoveSettings<
		"V0260_MOVE_INFESTATION_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 950;
			damageWindowStartMs: 750;
			durationMs: 1000;
			energyDelta: 13;
			movementId: "INFESTATION_FAST";
			pokemonType: "POKEMON_TYPE_BUG";
			power: 9;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "infestation_fast";
		}
	>
>;
export type MoveSettingsV0261MoveStruggleBugFast = S<
	MoveSettings<
		"V0261_MOVE_STRUGGLE_BUG_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 1500;
			damageWindowStartMs: 1200;
			durationMs: 1500;
			energyDelta: 15;
			movementId: "STRUGGLE_BUG_FAST";
			pokemonType: "POKEMON_TYPE_BUG";
			power: 15;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "struggle_bug_fast";
		}
	>
>;
export type MoveSettingsV0262MoveSilverWind = S<
	MoveSettings<
		"V0262_MOVE_SILVER_WIND",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 3300;
			damageWindowStartMs: 1500;
			durationMs: 3500;
			energyDelta: -33;
			movementId: "SILVER_WIND";
			pokemonType: "POKEMON_TYPE_BUG";
			power: 65;
			staminaLossScalar: 0.04;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "silver_wind";
		}
	>
>;
export type MoveSettingsV0263MoveAstonishFast = S<
	MoveSettings<
		"V0263_MOVE_ASTONISH_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 950;
			damageWindowStartMs: 600;
			durationMs: 1000;
			energyDelta: 13;
			movementId: "ASTONISH_FAST";
			pokemonType: "POKEMON_TYPE_GHOST";
			power: 7;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "astonish_fast";
		}
	>
>;
export type MoveSettingsV0264MoveHexFast = S<
	MoveSettings<
		"V0264_MOVE_HEX_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 1000;
			damageWindowStartMs: 800;
			durationMs: 1000;
			energyDelta: 13;
			movementId: "HEX_FAST";
			pokemonType: "POKEMON_TYPE_GHOST";
			power: 8;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "hex_fast";
		}
	>
>;
export type MoveSettingsV0265MoveNightShade = S<
	MoveSettings<
		"V0265_MOVE_NIGHT_SHADE",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			energyDelta: -50;
			movementId: "NIGHT_SHADE";
			pokemonType: "POKEMON_TYPE_GHOST";
			power: 60;
			staminaLossScalar: 0.04;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "night_shade";
		}
	>
>;
export type MoveSettingsV0266MoveIronTailFast = S<
	MoveSettings<
		"V0266_MOVE_IRON_TAIL_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 950;
			damageWindowStartMs: 750;
			durationMs: 1000;
			energyDelta: 6;
			movementId: "IRON_TAIL_FAST";
			pokemonType: "POKEMON_TYPE_STEEL";
			power: 14;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "iron_tail_fast";
		}
	>
>;
export type MoveSettingsV0267MoveGyroBall = S<
	MoveSettings<
		"V0267_MOVE_GYRO_BALL",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 3500;
			damageWindowStartMs: 3200;
			durationMs: 3500;
			energyDelta: -50;
			movementId: "GYRO_BALL";
			pokemonType: "POKEMON_TYPE_STEEL";
			power: 85;
			staminaLossScalar: 0.04;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gyro_ball";
		}
	>
>;
export type MoveSettingsV0268MoveHeavySlam = S<
	MoveSettings<
		"V0268_MOVE_HEAVY_SLAM",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 1800;
			damageWindowStartMs: 1400;
			durationMs: 2000;
			energyDelta: -50;
			movementId: "HEAVY_SLAM";
			pokemonType: "POKEMON_TYPE_STEEL";
			power: 70;
			staminaLossScalar: 0.04;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "heavy_slam";
		}
	>
>;
export type MoveSettingsV0269MoveFireSpinFast = S<
	MoveSettings<
		"V0269_MOVE_FIRE_SPIN_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 950;
			damageWindowStartMs: 750;
			durationMs: 1000;
			energyDelta: 9;
			movementId: "FIRE_SPIN_FAST";
			pokemonType: "POKEMON_TYPE_FIRE";
			power: 13;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "fire_spin_fast";
		}
	>
>;
export type MoveSettingsV0270MoveOverheat = S<
	MoveSettings<
		"V0270_MOVE_OVERHEAT",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 3800;
			damageWindowStartMs: 2600;
			durationMs: 4000;
			energyDelta: -100;
			movementId: "OVERHEAT";
			pokemonType: "POKEMON_TYPE_FIRE";
			power: 160;
			staminaLossScalar: 0.04;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "overheat";
		}
	>
>;
export type MoveSettingsV0271MoveBulletSeedFast = S<
	MoveSettings<
		"V0271_MOVE_BULLET_SEED_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 950;
			damageWindowStartMs: 750;
			durationMs: 1000;
			energyDelta: 13;
			movementId: "BULLET_SEED_FAST";
			pokemonType: "POKEMON_TYPE_GRASS";
			power: 7;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "bullet_seed_fast";
		}
	>
>;
export type MoveSettingsV0272MoveGrassKnot = S<
	MoveSettings<
		"V0272_MOVE_GRASS_KNOT",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2500;
			damageWindowStartMs: 1600;
			durationMs: 2500;
			energyDelta: -50;
			movementId: "GRASS_KNOT";
			pokemonType: "POKEMON_TYPE_GRASS";
			power: 90;
			staminaLossScalar: 0.04;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "grass_knot";
		}
	>
>;
export type MoveSettingsV0273MoveEnergyBall = S<
	MoveSettings<
		"V0273_MOVE_ENERGY_BALL",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 3900;
			damageWindowStartMs: 3100;
			durationMs: 4000;
			energyDelta: -50;
			movementId: "ENERGY_BALL";
			pokemonType: "POKEMON_TYPE_GRASS";
			power: 90;
			staminaLossScalar: 0.04;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "energy_ball";
		}
	>
>;
export type MoveSettingsV0274MoveExtrasensoryFast = S<
	MoveSettings<
		"V0274_MOVE_EXTRASENSORY_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 950;
			damageWindowStartMs: 750;
			durationMs: 1000;
			energyDelta: 11;
			movementId: "EXTRASENSORY_FAST";
			pokemonType: "POKEMON_TYPE_PSYCHIC";
			power: 11;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "extrasensory_fast";
		}
	>
>;
export type MoveSettingsV0275MoveFuturesight = S<
	MoveSettings<
		"V0275_MOVE_FUTURESIGHT",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2500;
			damageWindowStartMs: 1200;
			durationMs: 2500;
			energyDelta: -100;
			movementId: "FUTURESIGHT";
			pokemonType: "POKEMON_TYPE_PSYCHIC";
			power: 115;
			staminaLossScalar: 0.04;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "futuresight";
		}
	>
>;
export type MoveSettingsV0276MoveMirrorCoat = S<
	MoveSettings<
		"V0276_MOVE_MIRROR_COAT",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2400;
			damageWindowStartMs: 2200;
			durationMs: 2500;
			energyDelta: -50;
			movementId: "MIRROR_COAT";
			pokemonType: "POKEMON_TYPE_PSYCHIC";
			power: 60;
			staminaLossScalar: 0.04;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "mirror_coat";
		}
	>
>;
export type MoveSettingsV0277MoveOutrage = S<
	MoveSettings<
		"V0277_MOVE_OUTRAGE",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 3800;
			damageWindowStartMs: 2600;
			durationMs: 4000;
			energyDelta: -50;
			movementId: "OUTRAGE";
			pokemonType: "POKEMON_TYPE_DRAGON";
			power: 110;
			staminaLossScalar: 0.04;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "outrage";
		}
	>
>;
export type MoveSettingsV0278MoveSnarlFast = S<
	MoveSettings<
		"V0278_MOVE_SNARL_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 950;
			damageWindowStartMs: 750;
			durationMs: 1000;
			energyDelta: 13;
			movementId: "SNARL_FAST";
			pokemonType: "POKEMON_TYPE_DARK";
			power: 11;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "snarl_fast";
		}
	>
>;
export type MoveSettingsV0279MoveCrunch = S<
	MoveSettings<
		"V0279_MOVE_CRUNCH",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2800;
			damageWindowStartMs: 1100;
			durationMs: 3000;
			energyDelta: -33;
			movementId: "CRUNCH";
			pokemonType: "POKEMON_TYPE_DARK";
			power: 65;
			staminaLossScalar: 0.04;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "crunch";
		}
	>
>;
export type MoveSettingsV0280MoveFoulPlay = S<
	MoveSettings<
		"V0280_MOVE_FOUL_PLAY",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 1900;
			damageWindowStartMs: 1700;
			durationMs: 2000;
			energyDelta: -50;
			movementId: "FOUL_PLAY";
			pokemonType: "POKEMON_TYPE_DARK";
			power: 70;
			staminaLossScalar: 0.04;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "foul_play";
		}
	>
>;
export type MoveSettingsV0281MoveHiddenPowerFast = S<
	MoveSettings<
		"V0281_MOVE_HIDDEN_POWER_FAST",
		{
			animationId: 4;
			criticalChance: 0.05;
			damageWindowEndMs: 1400;
			damageWindowStartMs: 1100;
			durationMs: 1500;
			energyDelta: 15;
			movementId: "HIDDEN_POWER_FAST";
			pokemonType: "POKEMON_TYPE_NORMAL";
			power: 15;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "hidden_power_fast";
		}
	>
>;
export type MoveSettingsV0282MoveTakeDownFast = S<
	MoveSettings<
		"V0282_MOVE_TAKE_DOWN_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 900;
			damageWindowStartMs: 750;
			durationMs: 1000;
			energyDelta: 8;
			movementId: "TAKE_DOWN_FAST";
			pokemonType: "POKEMON_TYPE_NORMAL";
			power: 7;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "take_down_fast";
		}
	>
>;
export type MoveSettingsV0283MoveWaterfallFast = S<
	MoveSettings<
		"V0283_MOVE_WATERFALL_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 900;
			damageWindowStartMs: 750;
			durationMs: 1000;
			energyDelta: 7;
			movementId: "WATERFALL_FAST";
			pokemonType: "POKEMON_TYPE_WATER";
			power: 13;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "waterfall_fast";
		}
	>
>;
export type MoveSettingsV0284MoveSurf = S<
	MoveSettings<
		"V0284_MOVE_SURF",
		{
			animationId: 5;
			damageWindowEndMs: 1400;
			damageWindowStartMs: 1200;
			durationMs: 1500;
			energyDelta: -50;
			movementId: "SURF";
			pokemonType: "POKEMON_TYPE_WATER";
			power: 60;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "surf";
		}
	>
>;
export type MoveSettingsV0285MoveDracoMeteor = S<
	MoveSettings<
		"V0285_MOVE_DRACO_METEOR",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2900;
			durationMs: 3500;
			energyDelta: -100;
			movementId: "DRACO_METEOR";
			pokemonType: "POKEMON_TYPE_DRAGON";
			power: 150;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "draco_meteor";
		}
	>
>;
export type MoveSettingsV0286MoveDoomDesire = S<
	MoveSettings<
		"V0286_MOVE_DOOM_DESIRE",
		{
			animationId: 5;
			damageWindowEndMs: 1400;
			damageWindowStartMs: 1200;
			durationMs: 1500;
			energyDelta: -33;
			movementId: "DOOM_DESIRE";
			pokemonType: "POKEMON_TYPE_STEEL";
			power: 65;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "doom_desire";
		}
	>
>;
export type MoveSettingsV0287MoveYawnFast = S<
	MoveSettings<
		"V0287_MOVE_YAWN_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 1400;
			damageWindowStartMs: 1200;
			durationMs: 1500;
			energyDelta: 13;
			movementId: "YAWN_FAST";
			pokemonType: "POKEMON_TYPE_NORMAL";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "yawn_fast";
		}
	>
>;
export type MoveSettingsV0288MovePsychoBoost = S<
	MoveSettings<
		"V0288_MOVE_PSYCHO_BOOST",
		{
			animationId: 5;
			damageWindowEndMs: 4000;
			damageWindowStartMs: 3500;
			durationMs: 4000;
			energyDelta: -50;
			movementId: "PSYCHO_BOOST";
			pokemonType: "POKEMON_TYPE_PSYCHIC";
			power: 70;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "psycho_boost";
		}
	>
>;
export type MoveSettingsV0289MoveOriginPulse = S<
	MoveSettings<
		"V0289_MOVE_ORIGIN_PULSE",
		{
			animationId: 5;
			damageWindowEndMs: 1400;
			damageWindowStartMs: 1200;
			durationMs: 1500;
			energyDelta: -100;
			movementId: "ORIGIN_PULSE";
			pokemonType: "POKEMON_TYPE_WATER";
			power: 120;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "origin_pulse";
		}
	>
>;
export type MoveSettingsV0290MovePrecipiceBlades = S<
	MoveSettings<
		"V0290_MOVE_PRECIPICE_BLADES",
		{
			animationId: 5;
			damageWindowEndMs: 1400;
			damageWindowStartMs: 1200;
			durationMs: 1500;
			energyDelta: -100;
			movementId: "PRECIPICE_BLADES";
			pokemonType: "POKEMON_TYPE_GROUND";
			power: 120;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "precipice_blades";
		}
	>
>;
export type MoveSettingsV0291MovePresentFast = S<
	MoveSettings<
		"V0291_MOVE_PRESENT_FAST",
		{
			animationId: 5;
			damageWindowEndMs: 1500;
			damageWindowStartMs: 1300;
			durationMs: 1500;
			energyDelta: 23;
			movementId: "PRESENT_FAST";
			pokemonType: "POKEMON_TYPE_NORMAL";
			power: 6;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "present_fast";
		}
	>
>;
export type MoveSettingsV0292MoveWeatherBallFire = S<
	MoveSettings<
		"V0292_MOVE_WEATHER_BALL_FIRE",
		{
			animationId: 5;
			damageWindowEndMs: 1500;
			damageWindowStartMs: 1250;
			durationMs: 1500;
			energyDelta: -33;
			movementId: "WEATHER_BALL_FIRE";
			pokemonType: "POKEMON_TYPE_FIRE";
			power: 55;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "weather_ball_fire";
		}
	>
>;
export type MoveSettingsV0293MoveWeatherBallIce = S<
	MoveSettings<
		"V0293_MOVE_WEATHER_BALL_ICE",
		{
			animationId: 5;
			damageWindowEndMs: 1500;
			damageWindowStartMs: 1250;
			durationMs: 1500;
			energyDelta: -33;
			movementId: "WEATHER_BALL_ICE";
			pokemonType: "POKEMON_TYPE_ICE";
			power: 55;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "weather_ball_ice";
		}
	>
>;
export type MoveSettingsV0294MoveWeatherBallRock = S<
	MoveSettings<
		"V0294_MOVE_WEATHER_BALL_ROCK",
		{
			animationId: 5;
			damageWindowEndMs: 1500;
			damageWindowStartMs: 1250;
			durationMs: 1500;
			energyDelta: -33;
			movementId: "WEATHER_BALL_ROCK";
			pokemonType: "POKEMON_TYPE_ROCK";
			power: 55;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "weather_ball_rock";
		}
	>
>;
export type MoveSettingsV0295MoveWeatherBallWater = S<
	MoveSettings<
		"V0295_MOVE_WEATHER_BALL_WATER",
		{
			animationId: 5;
			damageWindowEndMs: 1500;
			damageWindowStartMs: 1250;
			durationMs: 1500;
			energyDelta: -33;
			movementId: "WEATHER_BALL_WATER";
			pokemonType: "POKEMON_TYPE_WATER";
			power: 55;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "weather_ball_water";
		}
	>
>;
export type MoveSettingsV0296MoveFrenzyPlant = S<
	MoveSettings<
		"V0296_MOVE_FRENZY_PLANT",
		{
			animationId: 5;
			damageWindowEndMs: 2450;
			damageWindowStartMs: 2045;
			durationMs: 2500;
			energyDelta: -50;
			movementId: "FRENZY_PLANT";
			pokemonType: "POKEMON_TYPE_GRASS";
			power: 100;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "frenzy_plant";
		}
	>
>;
export type MoveSettingsV0297MoveSmackDownFast = S<
	MoveSettings<
		"V0297_MOVE_SMACK_DOWN_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 900;
			damageWindowStartMs: 600;
			durationMs: 1000;
			energyDelta: 7;
			movementId: "SMACK_DOWN_FAST";
			pokemonType: "POKEMON_TYPE_ROCK";
			power: 13;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "smack_down_fast";
		}
	>
>;
export type MoveSettingsV0298MoveBlastBurn = S<
	MoveSettings<
		"V0298_MOVE_BLAST_BURN",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2950;
			durationMs: 3500;
			energyDelta: -50;
			movementId: "BLAST_BURN";
			pokemonType: "POKEMON_TYPE_FIRE";
			power: 120;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "blast_burn";
		}
	>
>;
export type MoveSettingsV0299MoveHydroCannon = S<
	MoveSettings<
		"V0299_MOVE_HYDRO_CANNON",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 1700;
			damageWindowStartMs: 600;
			durationMs: 2000;
			energyDelta: -50;
			movementId: "HYDRO_CANNON";
			pokemonType: "POKEMON_TYPE_WATER";
			power: 90;
			staminaLossScalar: 0.065;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "hydro_cannon";
		}
	>
>;
export type MoveSettingsV0300MoveLastResort = S<
	MoveSettings<
		"V0300_MOVE_LAST_RESORT",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2950;
			damageWindowStartMs: 2800;
			durationMs: 3000;
			energyDelta: -50;
			movementId: "LAST_RESORT";
			pokemonType: "POKEMON_TYPE_NORMAL";
			power: 90;
			staminaLossScalar: 0.065;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "last_resort";
		}
	>
>;
export type MoveSettingsV0301MoveMeteorMash = S<
	MoveSettings<
		"V0301_MOVE_METEOR_MASH",
		{
			animationId: 5;
			criticalChance: 0.05;
			damageWindowEndMs: 2400;
			damageWindowStartMs: 2200;
			durationMs: 2500;
			energyDelta: -50;
			movementId: "METEOR_MASH";
			pokemonType: "POKEMON_TYPE_STEEL";
			power: 100;
			staminaLossScalar: 0.065;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "meteor_mash";
		}
	>
>;
export type MoveSettingsV0302MoveSkullBash = S<
	MoveSettings<
		"V0302_MOVE_SKULL_BASH",
		{
			animationId: 5;
			damageWindowEndMs: 2200;
			damageWindowStartMs: 1700;
			durationMs: 3000;
			energyDelta: -100;
			movementId: "SKULL_BASH";
			pokemonType: "POKEMON_TYPE_NORMAL";
			power: 130;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "skull_bash";
		}
	>
>;
export type MoveSettingsV0303MoveAcidSpray = S<
	MoveSettings<
		"V0303_MOVE_ACID_SPRAY",
		{
			animationId: 5;
			damageWindowEndMs: 2800;
			damageWindowStartMs: 2100;
			durationMs: 3000;
			energyDelta: -50;
			movementId: "ACID_SPRAY";
			pokemonType: "POKEMON_TYPE_POISON";
			power: 20;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "acid_spray";
		}
	>
>;
export type MoveSettingsV0304MoveEarthPower = S<
	MoveSettings<
		"V0304_MOVE_EARTH_POWER",
		{
			animationId: 5;
			damageWindowEndMs: 3300;
			damageWindowStartMs: 2600;
			durationMs: 3500;
			energyDelta: -50;
			movementId: "EARTH_POWER";
			pokemonType: "POKEMON_TYPE_GROUND";
			power: 100;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "earth_power";
		}
	>
>;
export type MoveSettingsV0305MoveCrabhammer = S<
	MoveSettings<
		"V0305_MOVE_CRABHAMMER",
		{
			animationId: 5;
			damageWindowEndMs: 1850;
			damageWindowStartMs: 1600;
			durationMs: 2000;
			energyDelta: -50;
			movementId: "CRABHAMMER";
			pokemonType: "POKEMON_TYPE_WATER";
			power: 85;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "crabhammer";
		}
	>
>;
export type MoveSettingsV0306MoveLunge = S<
	MoveSettings<
		"V0306_MOVE_LUNGE",
		{
			animationId: 5;
			damageWindowEndMs: 2800;
			damageWindowStartMs: 2500;
			durationMs: 3000;
			energyDelta: -33;
			movementId: "LUNGE";
			pokemonType: "POKEMON_TYPE_BUG";
			power: 55;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "lunge";
		}
	>
>;
export type MoveSettingsV0307MoveCrushClaw = S<
	MoveSettings<
		"V0307_MOVE_CRUSH_CLAW",
		{
			animationId: 5;
			damageWindowEndMs: 1800;
			damageWindowStartMs: 1300;
			durationMs: 2000;
			movementId: "CRUSH_CLAW";
			pokemonType: "POKEMON_TYPE_NORMAL";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "crush_claw";
		}
	>
>;
export type MoveSettingsV0308MoveOctazooka = S<
	MoveSettings<
		"V0308_MOVE_OCTAZOOKA",
		{
			animationId: 5;
			damageWindowEndMs: 1800;
			damageWindowStartMs: 1500;
			durationMs: 2500;
			energyDelta: -50;
			movementId: "OCTAZOOKA";
			pokemonType: "POKEMON_TYPE_WATER";
			power: 55;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "octazooka";
		}
	>
>;
export type MoveSettingsV0309MoveMirrorShot = S<
	MoveSettings<
		"V0309_MOVE_MIRROR_SHOT",
		{
			animationId: 5;
			damageWindowEndMs: 2300;
			damageWindowStartMs: 1900;
			durationMs: 2500;
			energyDelta: -33;
			movementId: "MIRROR_SHOT";
			pokemonType: "POKEMON_TYPE_STEEL";
			power: 50;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "mirror_shot";
		}
	>
>;
export type MoveSettingsV0310MoveSuperPower = S<
	MoveSettings<
		"V0310_MOVE_SUPER_POWER",
		{
			animationId: 5;
			damageWindowEndMs: 2800;
			damageWindowStartMs: 2100;
			durationMs: 3000;
			energyDelta: -50;
			movementId: "SUPER_POWER";
			pokemonType: "POKEMON_TYPE_FIGHTING";
			power: 85;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "super_power";
		}
	>
>;
export type MoveSettingsV0311MoveFellStinger = S<
	MoveSettings<
		"V0311_MOVE_FELL_STINGER",
		{
			animationId: 5;
			damageWindowEndMs: 1800;
			damageWindowStartMs: 1600;
			durationMs: 2000;
			energyDelta: -33;
			movementId: "FELL_STINGER";
			pokemonType: "POKEMON_TYPE_BUG";
			power: 45;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "fell_stinger";
		}
	>
>;
export type MoveSettingsV0312MoveLeafTornado = S<
	MoveSettings<
		"V0312_MOVE_LEAF_TORNADO",
		{
			animationId: 5;
			damageWindowEndMs: 2500;
			damageWindowStartMs: 1900;
			durationMs: 3000;
			energyDelta: -33;
			movementId: "LEAF_TORNADO";
			pokemonType: "POKEMON_TYPE_GRASS";
			power: 45;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "leaf_tornado";
		}
	>
>;
export type MoveSettingsV0313MoveLeechLife = S<
	MoveSettings<
		"V0313_MOVE_LEECH_LIFE",
		{
			animationId: 5;
			damageWindowEndMs: 1400;
			damageWindowStartMs: 1150;
			durationMs: 2500;
			movementId: "LEECH_LIFE";
			pokemonType: "POKEMON_TYPE_BUG";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "leech_life";
		}
	>
>;
export type MoveSettingsV0314MoveDrainPunch = S<
	MoveSettings<
		"V0314_MOVE_DRAIN_PUNCH",
		{
			animationId: 5;
			damageWindowEndMs: 1600;
			damageWindowStartMs: 1100;
			durationMs: 2500;
			energyDelta: -33;
			movementId: "DRAIN_PUNCH";
			pokemonType: "POKEMON_TYPE_FIGHTING";
			power: 50;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "drain_punch";
		}
	>
>;
export type MoveSettingsV0315MoveShadowBone = S<
	MoveSettings<
		"V0315_MOVE_SHADOW_BONE",
		{
			animationId: 5;
			damageWindowEndMs: 2900;
			damageWindowStartMs: 2450;
			durationMs: 3000;
			energyDelta: -50;
			movementId: "SHADOW_BONE";
			pokemonType: "POKEMON_TYPE_GHOST";
			power: 85;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "shadow_bone";
		}
	>
>;
export type MoveSettingsV0316MoveMuddyWater = S<
	MoveSettings<
		"V0316_MOVE_MUDDY_WATER",
		{
			animationId: 5;
			damageWindowEndMs: 1700;
			damageWindowStartMs: 1000;
			durationMs: 2000;
			energyDelta: -33;
			movementId: "MUDDY_WATER";
			pokemonType: "POKEMON_TYPE_WATER";
			power: 45;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "muddy_water";
		}
	>
>;
export type MoveSettingsV0317MoveBlazeKick = S<
	MoveSettings<
		"V0317_MOVE_BLAZE_KICK",
		{
			animationId: 5;
			damageWindowEndMs: 600;
			damageWindowStartMs: 250;
			durationMs: 1000;
			energyDelta: -33;
			movementId: "BLAZE_KICK";
			pokemonType: "POKEMON_TYPE_FIRE";
			power: 40;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "blaze_kick";
		}
	>
>;
export type MoveSettingsV0318MoveRazorShell = S<
	MoveSettings<
		"V0318_MOVE_RAZOR_SHELL",
		{
			animationId: 5;
			damageWindowEndMs: 1200;
			damageWindowStartMs: 850;
			durationMs: 1500;
			energyDelta: -33;
			movementId: "RAZOR_SHELL";
			pokemonType: "POKEMON_TYPE_WATER";
			power: 55;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "razor_shell";
		}
	>
>;
export type MoveSettingsV0319MovePowerUpPunch = S<
	MoveSettings<
		"V0319_MOVE_POWER_UP_PUNCH",
		{
			animationId: 5;
			damageWindowEndMs: 1900;
			damageWindowStartMs: 1700;
			durationMs: 2000;
			energyDelta: -33;
			movementId: "POWER_UP_PUNCH";
			pokemonType: "POKEMON_TYPE_FIGHTING";
			power: 50;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "power_up_punch";
		}
	>
>;
export type MoveSettingsV0320MoveCharmFast = S<
	MoveSettings<
		"V0320_MOVE_CHARM_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 1200;
			damageWindowStartMs: 900;
			durationMs: 1500;
			energyDelta: 11;
			movementId: "CHARM_FAST";
			pokemonType: "POKEMON_TYPE_FAIRY";
			power: 20;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "charm_fast";
		}
	>
>;
export type MoveSettingsV0321MoveGigaImpact = S<
	MoveSettings<
		"V0321_MOVE_GIGA_IMPACT",
		{
			animationId: 5;
			damageWindowEndMs: 2200;
			damageWindowStartMs: 800;
			durationMs: 4500;
			energyDelta: -100;
			movementId: "GIGA_IMPACT";
			pokemonType: "POKEMON_TYPE_NORMAL";
			power: 200;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "giga_impact";
		}
	>
>;
export type MoveSettingsV0322MoveFrustration = S<
	MoveSettings<
		"V0322_MOVE_FRUSTRATION",
		{
			animationId: 5;
			damageWindowEndMs: 1800;
			damageWindowStartMs: 1000;
			durationMs: 2000;
			energyDelta: -33;
			isLocked: true;
			movementId: "FRUSTRATION";
			pokemonType: "POKEMON_TYPE_NORMAL";
			power: 10;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "frustration";
		}
	>
>;
export type MoveSettingsV0323MoveReturn = S<
	MoveSettings<
		"V0323_MOVE_RETURN",
		{
			animationId: 5;
			damageWindowEndMs: 150;
			durationMs: 500;
			energyDelta: -33;
			movementId: "RETURN";
			pokemonType: "POKEMON_TYPE_NORMAL";
			power: 25;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "return";
		}
	>
>;
export type MoveSettingsV0324MoveSynchronoise = S<
	MoveSettings<
		"V0324_MOVE_SYNCHRONOISE",
		{
			animationId: 5;
			damageWindowEndMs: 1500;
			damageWindowStartMs: 750;
			durationMs: 2500;
			energyDelta: -50;
			movementId: "SYNCHRONOISE";
			pokemonType: "POKEMON_TYPE_PSYCHIC";
			power: 80;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "synchronoise";
		}
	>
>;
export type MoveSettingsV0325MoveLockOnFast = S<
	MoveSettings<
		"V0325_MOVE_LOCK_ON_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 500;
			damageWindowStartMs: 370;
			durationMs: 500;
			energyDelta: 10;
			movementId: "LOCK_ON_FAST";
			pokemonType: "POKEMON_TYPE_NORMAL";
			power: 2;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "lock_on_fast";
		}
	>
>;
export type MoveSettingsV0326MoveThunderFangFast = S<
	MoveSettings<
		"V0326_MOVE_THUNDER_FANG_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 700;
			damageWindowStartMs: 200;
			durationMs: 1000;
			energyDelta: 13;
			movementId: "THUNDER_FANG_FAST";
			pokemonType: "POKEMON_TYPE_ELECTRIC";
			power: 10;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "thunder_fang_fast";
		}
	>
>;
export type MoveSettingsV0327MoveIceFangFast = S<
	MoveSettings<
		"V0327_MOVE_ICE_FANG_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 1000;
			damageWindowStartMs: 400;
			durationMs: 1500;
			energyDelta: 20;
			movementId: "ICE_FANG_FAST";
			pokemonType: "POKEMON_TYPE_ICE";
			power: 12;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "ice_fang_fast";
		}
	>
>;
export type MoveSettingsV0328MoveHornDrill = S<
	MoveSettings<
		"V0328_MOVE_HORN_DRILL",
		{
			animationId: 5;
			damageWindowEndMs: 1600;
			damageWindowStartMs: 600;
			durationMs: 2000;
			energyDelta: -25;
			movementId: "HORN_DRILL";
			pokemonType: "POKEMON_TYPE_NORMAL";
			power: 9000;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "horn_drill";
		}
	>
>;
export type MoveSettingsV0329MoveFissure = S<
	MoveSettings<
		"V0329_MOVE_FISSURE",
		{
			animationId: 5;
			damageWindowEndMs: 2500;
			damageWindowStartMs: 1200;
			durationMs: 3000;
			energyDelta: -25;
			movementId: "FISSURE";
			pokemonType: "POKEMON_TYPE_GROUND";
			power: 9001;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "fissure";
		}
	>
>;
export type MoveSettingsV0330MoveSacredSword = S<
	MoveSettings<
		"V0330_MOVE_SACRED_SWORD",
		{
			animationId: 5;
			damageWindowEndMs: 800;
			damageWindowStartMs: 300;
			durationMs: 1000;
			energyDelta: -33;
			movementId: "SACRED_SWORD";
			pokemonType: "POKEMON_TYPE_FIGHTING";
			power: 50;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "sacred_sword";
		}
	>
>;
export type MoveSettingsV0331MoveFlyingPress = S<
	MoveSettings<
		"V0331_MOVE_FLYING_PRESS",
		{
			animationId: 5;
			damageWindowEndMs: 2200;
			damageWindowStartMs: 1200;
			durationMs: 2500;
			energyDelta: -50;
			movementId: "FLYING_PRESS";
			pokemonType: "POKEMON_TYPE_FIGHTING";
			power: 115;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "flying_press";
		}
	>
>;
export type MoveSettingsV0332MoveAuraSphere = S<
	MoveSettings<
		"V0332_MOVE_AURA_SPHERE",
		{
			animationId: 5;
			damageWindowEndMs: 1800;
			damageWindowStartMs: 1200;
			durationMs: 2000;
			energyDelta: -50;
			movementId: "AURA_SPHERE";
			pokemonType: "POKEMON_TYPE_FIGHTING";
			power: 100;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "aura_sphere";
		}
	>
>;
export type MoveSettingsV0333MovePayback = S<
	MoveSettings<
		"V0333_MOVE_PAYBACK",
		{
			animationId: 5;
			damageWindowEndMs: 1800;
			damageWindowStartMs: 900;
			durationMs: 2000;
			energyDelta: -100;
			movementId: "PAYBACK";
			pokemonType: "POKEMON_TYPE_DARK";
			power: 95;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "payback";
		}
	>
>;
export type MoveSettingsV0334MoveRockWrecker = S<
	MoveSettings<
		"V0334_MOVE_ROCK_WRECKER",
		{
			animationId: 5;
			damageWindowEndMs: 2600;
			damageWindowStartMs: 1900;
			durationMs: 3500;
			energyDelta: -50;
			movementId: "ROCK_WRECKER";
			pokemonType: "POKEMON_TYPE_ROCK";
			power: 110;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "rock_wrecker";
		}
	>
>;
export type MoveSettingsV0335MoveAeroblast = S<
	MoveSettings<
		"V0335_MOVE_AEROBLAST",
		{
			animationId: 5;
			damageWindowEndMs: 3500;
			damageWindowStartMs: 3300;
			durationMs: 3500;
			energyDelta: -100;
			movementId: "AEROBLAST";
			pokemonType: "POKEMON_TYPE_FLYING";
			power: 180;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "aeroblast";
		}
	>
>;
export type MoveSettingsV0336MoveTechnoBlastNormal = S<
	MoveSettings<
		"V0336_MOVE_TECHNO_BLAST_NORMAL",
		{
			animationId: 5;
			damageWindowEndMs: 2000;
			damageWindowStartMs: 1600;
			durationMs: 2000;
			energyDelta: -100;
			movementId: "TECHNO_BLAST_NORMAL";
			pokemonType: "POKEMON_TYPE_NORMAL";
			power: 120;
			vfxName: "techno_blast_normal";
		}
	>
>;
export type MoveSettingsV0337MoveTechnoBlastBurn = S<
	MoveSettings<
		"V0337_MOVE_TECHNO_BLAST_BURN",
		{
			animationId: 5;
			damageWindowEndMs: 2000;
			damageWindowStartMs: 1400;
			durationMs: 2000;
			energyDelta: -100;
			movementId: "TECHNO_BLAST_BURN";
			pokemonType: "POKEMON_TYPE_FIRE";
			power: 120;
			vfxName: "techno_blast_burn";
		}
	>
>;
export type MoveSettingsV0338MoveTechnoBlastChill = S<
	MoveSettings<
		"V0338_MOVE_TECHNO_BLAST_CHILL",
		{
			animationId: 5;
			damageWindowEndMs: 2000;
			damageWindowStartMs: 1400;
			durationMs: 2000;
			energyDelta: -100;
			movementId: "TECHNO_BLAST_CHILL";
			pokemonType: "POKEMON_TYPE_ICE";
			power: 120;
			vfxName: "techno_blast_chill";
		}
	>
>;
export type MoveSettingsV0339MoveTechnoBlastWater = S<
	MoveSettings<
		"V0339_MOVE_TECHNO_BLAST_WATER",
		{
			animationId: 5;
			damageWindowEndMs: 2000;
			damageWindowStartMs: 1500;
			durationMs: 2000;
			energyDelta: -100;
			movementId: "TECHNO_BLAST_WATER";
			pokemonType: "POKEMON_TYPE_WATER";
			power: 120;
			vfxName: "techno_blast_water";
		}
	>
>;
export type MoveSettingsV0340MoveTechnoBlastShock = S<
	MoveSettings<
		"V0340_MOVE_TECHNO_BLAST_SHOCK",
		{
			animationId: 5;
			damageWindowEndMs: 2000;
			damageWindowStartMs: 1600;
			durationMs: 2000;
			energyDelta: -100;
			movementId: "TECHNO_BLAST_SHOCK";
			pokemonType: "POKEMON_TYPE_ELECTRIC";
			power: 120;
			vfxName: "techno_blast_shock";
		}
	>
>;
export type MoveSettingsV0341MoveFly = S<
	MoveSettings<
		"V0341_MOVE_FLY",
		{
			animationId: 5;
			damageWindowEndMs: 1700;
			damageWindowStartMs: 1400;
			durationMs: 2000;
			energyDelta: -50;
			movementId: "FLY";
			pokemonType: "POKEMON_TYPE_FLYING";
			power: 90;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "fly";
		}
	>
>;
export type MoveSettingsV0342MoveVCreate = S<
	MoveSettings<
		"V0342_MOVE_V_CREATE",
		{
			animationId: 5;
			damageWindowEndMs: 2700;
			damageWindowStartMs: 1900;
			durationMs: 3000;
			energyDelta: -33;
			movementId: "V_CREATE";
			pokemonType: "POKEMON_TYPE_FIRE";
			power: 105;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "v_create";
		}
	>
>;
export type MoveSettingsV0343MoveLeafStorm = S<
	MoveSettings<
		"V0343_MOVE_LEAF_STORM",
		{
			animationId: 5;
			damageWindowEndMs: 1250;
			damageWindowStartMs: 1100;
			durationMs: 2500;
			energyDelta: -100;
			movementId: "LEAF_STORM";
			pokemonType: "POKEMON_TYPE_GRASS";
			power: 130;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "leaf_storm";
		}
	>
>;
export type MoveSettingsV0344MoveTriAttack = S<
	MoveSettings<
		"V0344_MOVE_TRI_ATTACK",
		{
			animationId: 5;
			damageWindowEndMs: 2400;
			damageWindowStartMs: 1300;
			durationMs: 2500;
			energyDelta: -50;
			movementId: "TRI_ATTACK";
			pokemonType: "POKEMON_TYPE_NORMAL";
			power: 75;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "tri_attack";
		}
	>
>;
export type MoveSettingsV0345MoveGustFast = S<
	MoveSettings<
		"V0345_MOVE_GUST_FAST",
		{
			animationId: 5;
			damageWindowEndMs: 2000;
			damageWindowStartMs: 900;
			durationMs: 2000;
			energyDelta: 20;
			movementId: "GUST_FAST";
			pokemonType: "POKEMON_TYPE_FLYING";
			power: 25;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gust_fast";
		}
	>
>;
export type MoveSettingsV0346MoveIncinerateFast = S<
	MoveSettings<
		"V0346_MOVE_INCINERATE_FAST",
		{
			animationId: 5;
			damageWindowEndMs: 2500;
			damageWindowStartMs: 700;
			durationMs: 2500;
			energyDelta: 22;
			movementId: "INCINERATE_FAST";
			pokemonType: "POKEMON_TYPE_FIRE";
			power: 32;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "incinerate_fast";
		}
	>
>;
export type MoveSettingsV0348MoveFeatherDance = S<
	MoveSettings<
		"V0348_MOVE_FEATHER_DANCE",
		{
			animationId: 5;
			damageWindowEndMs: 2700;
			damageWindowStartMs: 1900;
			durationMs: 3000;
			energyDelta: -50;
			movementId: "FEATHER_DANCE";
			pokemonType: "POKEMON_TYPE_FLYING";
			power: 35;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "feather_dance";
		}
	>
>;
export type MoveSettingsV0350MoveFairyWindFast = S<
	MoveSettings<
		"V0350_MOVE_FAIRY_WIND_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 1000;
			damageWindowStartMs: 630;
			durationMs: 1000;
			energyDelta: 13;
			movementId: "FAIRY_WIND_FAST";
			pokemonType: "POKEMON_TYPE_FAIRY";
			power: 9;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "fairy_wind_fast";
		}
	>
>;
export type MoveSettingsV0352MoveWeatherBallNormal = S<
	MoveSettings<
		"V0352_MOVE_WEATHER_BALL_NORMAL",
		{
			animationId: 5;
			damageWindowEndMs: 1500;
			damageWindowStartMs: 1250;
			durationMs: 1500;
			energyDelta: -33;
			movementId: "WEATHER_BALL_NORMAL";
			pokemonType: "POKEMON_TYPE_NORMAL";
			power: 55;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "weather_ball_normal";
		}
	>
>;
export type MoveSettingsV0353MovePsychicFangs = S<
	MoveSettings<
		"V0353_MOVE_PSYCHIC_FANGS",
		{
			animationId: 5;
			damageWindowEndMs: 900;
			damageWindowStartMs: 200;
			durationMs: 1000;
			energyDelta: -33;
			movementId: "PSYCHIC_FANGS";
			pokemonType: "POKEMON_TYPE_PSYCHIC";
			power: 25;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "psychic_fangs";
		}
	>
>;
export type MoveSettingsV0356MoveDoubleKickFast = S<
	MoveSettings<
		"V0356_MOVE_DOUBLE_KICK_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 800;
			damageWindowStartMs: 300;
			durationMs: 1000;
			energyDelta: 13;
			movementId: "DOUBLE_KICK_FAST";
			pokemonType: "POKEMON_TYPE_FIGHTING";
			power: 10;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "double_kick_fast";
		}
	>
>;
export type MoveSettingsV0357MoveMagicalLeafFast = S<
	MoveSettings<
		"V0357_MOVE_MAGICAL_LEAF_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 1400;
			damageWindowStartMs: 850;
			durationMs: 1500;
			energyDelta: 17;
			movementId: "MAGICAL_LEAF_FAST";
			pokemonType: "POKEMON_TYPE_GRASS";
			power: 17;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "magical_leaf_fast";
		}
	>
>;
export type MoveSettingsV0358MoveSacredFire = S<
	MoveSettings<
		"V0358_MOVE_SACRED_FIRE",
		{
			animationId: 5;
			damageWindowEndMs: 2300;
			damageWindowStartMs: 1100;
			durationMs: 2500;
			energyDelta: -100;
			movementId: "SACRED_FIRE";
			pokemonType: "POKEMON_TYPE_FIRE";
			power: 120;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "sacred_fire";
		}
	>
>;
export type MoveSettingsV0359MoveIcicleSpear = S<
	MoveSettings<
		"V0359_MOVE_ICICLE_SPEAR",
		{
			animationId: 5;
			damageWindowEndMs: 1600;
			damageWindowStartMs: 1000;
			durationMs: 2000;
			energyDelta: -33;
			movementId: "ICICLE_SPEAR";
			pokemonType: "POKEMON_TYPE_ICE";
			power: 55;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "icicle_spear";
		}
	>
>;
export type MoveSettingsV0360MoveAeroblastPlus = S<
	MoveSettings<
		"V0360_MOVE_AEROBLAST_PLUS",
		{
			animationId: 5;
			damageWindowEndMs: 3500;
			damageWindowStartMs: 3300;
			durationMs: 3500;
			energyDelta: -100;
			movementId: "AEROBLAST_PLUS";
			pokemonType: "POKEMON_TYPE_FLYING";
			power: 200;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "aeroblast";
		}
	>
>;
export type MoveSettingsV0361MoveAeroblastPlusPlus = S<
	MoveSettings<
		"V0361_MOVE_AEROBLAST_PLUS_PLUS",
		{
			animationId: 5;
			damageWindowEndMs: 3500;
			damageWindowStartMs: 3300;
			durationMs: 3500;
			energyDelta: -100;
			movementId: "AEROBLAST_PLUS_PLUS";
			pokemonType: "POKEMON_TYPE_FLYING";
			power: 225;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "aeroblast";
		}
	>
>;
export type MoveSettingsV0362MoveSacredFirePlus = S<
	MoveSettings<
		"V0362_MOVE_SACRED_FIRE_PLUS",
		{
			animationId: 5;
			damageWindowEndMs: 2300;
			damageWindowStartMs: 1100;
			durationMs: 2500;
			energyDelta: -100;
			movementId: "SACRED_FIRE_PLUS";
			pokemonType: "POKEMON_TYPE_FIRE";
			power: 135;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "sacred_fire";
		}
	>
>;
export type MoveSettingsV0363MoveSacredFirePlusPlus = S<
	MoveSettings<
		"V0363_MOVE_SACRED_FIRE_PLUS_PLUS",
		{
			animationId: 5;
			damageWindowEndMs: 2300;
			damageWindowStartMs: 1100;
			durationMs: 2500;
			energyDelta: -100;
			movementId: "SACRED_FIRE_PLUS_PLUS";
			pokemonType: "POKEMON_TYPE_FIRE";
			power: 155;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "sacred_fire";
		}
	>
>;
export type MoveSettingsV0364MoveAcrobatics = S<
	MoveSettings<
		"V0364_MOVE_ACROBATICS",
		{
			animationId: 5;
			damageWindowEndMs: 1700;
			damageWindowStartMs: 600;
			durationMs: 2000;
			energyDelta: -100;
			movementId: "ACROBATICS";
			pokemonType: "POKEMON_TYPE_FLYING";
			power: 100;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "acrobatics";
		}
	>
>;
export type MoveSettingsV0365MoveLusterPurge = S<
	MoveSettings<
		"V0365_MOVE_LUSTER_PURGE",
		{
			animationId: 5;
			damageWindowEndMs: 1500;
			damageWindowStartMs: 500;
			durationMs: 1500;
			energyDelta: -100;
			movementId: "LUSTER_PURGE";
			pokemonType: "POKEMON_TYPE_PSYCHIC";
			power: 100;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "luster_purge";
		}
	>
>;
export type MoveSettingsV0366MoveMistBall = S<
	MoveSettings<
		"V0366_MOVE_MIST_BALL",
		{
			animationId: 5;
			damageWindowEndMs: 1700;
			damageWindowStartMs: 1200;
			durationMs: 2000;
			energyDelta: -100;
			movementId: "MIST_BALL";
			pokemonType: "POKEMON_TYPE_PSYCHIC";
			power: 105;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "mist_ball";
		}
	>
>;
export type MoveSettingsV0367MoveBrutalSwing = S<
	MoveSettings<
		"V0367_MOVE_BRUTAL_SWING",
		{
			animationId: 5;
			damageWindowEndMs: 1700;
			damageWindowStartMs: 1300;
			durationMs: 2000;
			energyDelta: -33;
			movementId: "BRUTAL_SWING";
			pokemonType: "POKEMON_TYPE_DARK";
			power: 65;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "brutal_swing";
		}
	>
>;
export type MoveSettingsV0368MoveRolloutFast = S<
	MoveSettings<
		"V0368_MOVE_ROLLOUT_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 1300;
			damageWindowStartMs: 1060;
			durationMs: 1500;
			energyDelta: 19;
			movementId: "ROLLOUT_FAST";
			pokemonType: "POKEMON_TYPE_ROCK";
			power: 15;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "rollout_fast";
		}
	>
>;
export type MoveSettingsV0369MoveSeedFlare = S<
	MoveSettings<
		"V0369_MOVE_SEED_FLARE",
		{
			animationId: 5;
			damageWindowEndMs: 2400;
			damageWindowStartMs: 2300;
			durationMs: 2500;
			energyDelta: -100;
			movementId: "SEED_FLARE";
			pokemonType: "POKEMON_TYPE_GRASS";
			power: 115;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "seed_flare";
		}
	>
>;
export type MoveSettingsV0370MoveObstruct = S<
	MoveSettings<
		"V0370_MOVE_OBSTRUCT",
		{
			animationId: 5;
			damageWindowEndMs: 1400;
			damageWindowStartMs: 300;
			durationMs: 1500;
			energyDelta: -33;
			movementId: "OBSTRUCT";
			pokemonType: "POKEMON_TYPE_DARK";
			power: 20;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "obstruct";
		}
	>
>;
export type MoveSettingsV0371MoveShadowForce = S<
	MoveSettings<
		"V0371_MOVE_SHADOW_FORCE",
		{
			animationId: 5;
			damageWindowEndMs: 2000;
			damageWindowStartMs: 1800;
			durationMs: 2000;
			energyDelta: -100;
			movementId: "SHADOW_FORCE";
			pokemonType: "POKEMON_TYPE_GHOST";
			power: 140;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "shadow_force";
		}
	>
>;
export type MoveSettingsV0372MoveMeteorBeam = S<
	MoveSettings<
		"V0372_MOVE_METEOR_BEAM",
		{
			animationId: 5;
			damageWindowEndMs: 2000;
			damageWindowStartMs: 1100;
			durationMs: 2000;
			energyDelta: -100;
			movementId: "METEOR_BEAM";
			pokemonType: "POKEMON_TYPE_ROCK";
			power: 140;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "meteor_beam";
		}
	>
>;
export type MoveSettingsV0373MoveWaterShurikenFast = S<
	MoveSettings<
		"V0373_MOVE_WATER_SHURIKEN_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 1000;
			damageWindowStartMs: 900;
			durationMs: 1000;
			energyDelta: 14;
			movementId: "WATER_SHURIKEN_FAST";
			pokemonType: "POKEMON_TYPE_WATER";
			power: 9;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "water_shuriken_fast";
		}
	>
>;
export type MoveSettingsV0374MoveFusionBolt = S<
	MoveSettings<
		"V0374_MOVE_FUSION_BOLT",
		{
			animationId: 5;
			damageWindowEndMs: 1800;
			damageWindowStartMs: 1250;
			durationMs: 2000;
			energyDelta: -100;
			movementId: "FUSION_BOLT";
			pokemonType: "POKEMON_TYPE_ELECTRIC";
			power: 140;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "fusion_bolt";
		}
	>
>;
export type MoveSettingsV0375MoveFusionFlare = S<
	MoveSettings<
		"V0375_MOVE_FUSION_FLARE",
		{
			animationId: 5;
			damageWindowEndMs: 1800;
			damageWindowStartMs: 1300;
			durationMs: 2000;
			energyDelta: -100;
			movementId: "FUSION_FLARE";
			pokemonType: "POKEMON_TYPE_FIRE";
			power: 140;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "fusion_flare";
		}
	>
>;
export type MoveSettingsV0376MovePoltergeist = S<
	MoveSettings<
		"V0376_MOVE_POLTERGEIST",
		{
			animationId: 5;
			damageWindowEndMs: 2900;
			damageWindowStartMs: 2700;
			durationMs: 3500;
			energyDelta: -100;
			movementId: "POLTERGEIST";
			pokemonType: "POKEMON_TYPE_GHOST";
			power: 140;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "poltergeist";
		}
	>
>;
export type MoveSettingsV0377MoveHighHorsepower = S<
	MoveSettings<
		"V0377_MOVE_HIGH_HORSEPOWER",
		{
			animationId: 5;
			damageWindowEndMs: 1100;
			damageWindowStartMs: 900;
			durationMs: 1500;
			energyDelta: -100;
			movementId: "HIGH_HORSEPOWER";
			pokemonType: "POKEMON_TYPE_GROUND";
			power: 105;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "high_horsepower";
		}
	>
>;
export type MoveSettingsV0378MoveGlaciate = S<
	MoveSettings<
		"V0378_MOVE_GLACIATE",
		{
			animationId: 5;
			damageWindowEndMs: 2500;
			damageWindowStartMs: 1500;
			durationMs: 2500;
			energyDelta: -100;
			movementId: "GLACIATE";
			pokemonType: "POKEMON_TYPE_ICE";
			power: 160;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "glaciate";
		}
	>
>;
export type MoveSettingsV0379MoveBreakingSwipe = S<
	MoveSettings<
		"V0379_MOVE_BREAKING_SWIPE",
		{
			animationId: 5;
			damageWindowEndMs: 900;
			damageWindowStartMs: 470;
			durationMs: 1000;
			energyDelta: -33;
			movementId: "BREAKING_SWIPE";
			pokemonType: "POKEMON_TYPE_DRAGON";
			power: 45;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "breaking_swipe";
		}
	>
>;
export type MoveSettingsV0380MoveBoomburst = S<
	MoveSettings<
		"V0380_MOVE_BOOMBURST",
		{
			animationId: 5;
			damageWindowEndMs: 2200;
			damageWindowStartMs: 1200;
			durationMs: 2500;
			energyDelta: -100;
			movementId: "BOOMBURST";
			pokemonType: "POKEMON_TYPE_NORMAL";
			power: 150;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "boomburst";
		}
	>
>;
export type MoveSettingsV0381MoveDoubleIronBash = S<
	MoveSettings<
		"V0381_MOVE_DOUBLE_IRON_BASH",
		{
			animationId: 5;
			damageWindowEndMs: 2000;
			damageWindowStartMs: 1300;
			durationMs: 2000;
			energyDelta: -33;
			movementId: "DOUBLE_IRON_BASH";
			pokemonType: "POKEMON_TYPE_STEEL";
			power: 70;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "double_iron_bash";
		}
	>
>;
export type MoveSettingsV0382MoveMysticalFire = S<
	MoveSettings<
		"V0382_MOVE_MYSTICAL_FIRE",
		{
			animationId: 5;
			damageWindowEndMs: 2000;
			damageWindowStartMs: 1300;
			durationMs: 2000;
			energyDelta: -33;
			movementId: "MYSTICAL_FIRE";
			pokemonType: "POKEMON_TYPE_FIRE";
			power: 60;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "myst_fire";
		}
	>
>;
export type MoveSettingsV0383MoveLiquidation = S<
	MoveSettings<
		"V0383_MOVE_LIQUIDATION",
		{
			animationId: 5;
			damageWindowEndMs: 2700;
			damageWindowStartMs: 2000;
			durationMs: 3000;
			energyDelta: -33;
			movementId: "LIQUIDATION";
			pokemonType: "POKEMON_TYPE_WATER";
			power: 70;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "liquidation";
		}
	>
>;
export type MoveSettingsV0384MoveDragonAscent = S<
	MoveSettings<
		"V0384_MOVE_DRAGON_ASCENT",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 3250;
			durationMs: 3500;
			energyDelta: -50;
			movementId: "DRAGON_ASCENT";
			pokemonType: "POKEMON_TYPE_FLYING";
			power: 140;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "dragon_ascent";
		}
	>
>;
export type MoveSettingsV0385MoveLeafageFast = S<
	MoveSettings<
		"V0385_MOVE_LEAFAGE_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 700;
			damageWindowStartMs: 200;
			durationMs: 500;
			energyDelta: 4;
			movementId: "LEAFAGE_FAST";
			pokemonType: "POKEMON_TYPE_GRASS";
			power: 6;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "leafage_fast";
		}
	>
>;
export type MoveSettingsV0386MoveMagmaStorm = S<
	MoveSettings<
		"V0386_MOVE_MAGMA_STORM",
		{
			animationId: 5;
			damageWindowEndMs: 2800;
			damageWindowStartMs: 1300;
			durationMs: 2500;
			energyDelta: -33;
			movementId: "MAGMA_STORM";
			pokemonType: "POKEMON_TYPE_FIRE";
			power: 75;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "magma_storm";
		}
	>
>;
export type MoveSettingsV0387MoveGeomancyFast = S<
	MoveSettings<
		"V0387_MOVE_GEOMANCY_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 1500;
			damageWindowStartMs: 1000;
			durationMs: 1500;
			energyDelta: 14;
			movementId: "GEOMANCY_FAST";
			pokemonType: "POKEMON_TYPE_FAIRY";
			power: 20;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "geomancy_fast";
		}
	>
>;
export type MoveSettingsV0388MoveSpacialRend = S<
	MoveSettings<
		"V0388_MOVE_SPACIAL_REND",
		{
			animationId: 5;
			damageWindowEndMs: 2950;
			damageWindowStartMs: 1370;
			durationMs: 2500;
			energyDelta: -100;
			movementId: "SPACIAL_REND";
			pokemonType: "POKEMON_TYPE_DRAGON";
			power: 160;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "spacial_rend";
		}
	>
>;
export type MoveSettingsV0389MoveOblivionWing = S<
	MoveSettings<
		"V0389_MOVE_OBLIVION_WING",
		{
			animationId: 4;
			damageWindowEndMs: 1900;
			damageWindowStartMs: 1500;
			durationMs: 2000;
			energyDelta: -50;
			movementId: "OBLIVION_WING";
			pokemonType: "POKEMON_TYPE_FLYING";
			power: 85;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "oblivion_wing";
		}
	>
>;
export type MoveSettingsV0390MoveNaturesMadness = S<
	MoveSettings<
		"V0390_MOVE_NATURES_MADNESS",
		{
			animationId: 5;
			damageWindowEndMs: 1900;
			damageWindowStartMs: 1300;
			durationMs: 2000;
			energyDelta: -50;
			movementId: "NATURES_MADNESS";
			pokemonType: "POKEMON_TYPE_FAIRY";
			power: 90;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "natures_madness";
		}
	>
>;
export type MoveSettingsV0391MoveTripleAxel = S<
	MoveSettings<
		"V0391_MOVE_TRIPLE_AXEL",
		{
			animationId: 5;
			damageWindowEndMs: 1700;
			damageWindowStartMs: 1500;
			durationMs: 2000;
			energyDelta: -33;
			movementId: "TRIPLE_AXEL";
			pokemonType: "POKEMON_TYPE_ICE";
			power: 60;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "triple_axel";
		}
	>
>;
export type MoveSettingsV0392MoveTrailblaze = S<
	MoveSettings<
		"V0392_MOVE_TRAILBLAZE",
		{
			animationId: 5;
			damageWindowEndMs: 1900;
			damageWindowStartMs: 1200;
			durationMs: 2000;
			energyDelta: -50;
			movementId: "TRAILBLAZE";
			pokemonType: "POKEMON_TYPE_GRASS";
			power: 65;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "trailblaze";
		}
	>
>;
export type MoveSettingsV0393MoveScorchingSands = S<
	MoveSettings<
		"V0393_MOVE_SCORCHING_SANDS",
		{
			animationId: 5;
			damageWindowEndMs: 2300;
			damageWindowStartMs: 1400;
			durationMs: 3000;
			energyDelta: -50;
			movementId: "SCORCHING_SANDS";
			pokemonType: "POKEMON_TYPE_GROUND";
			power: 90;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "scorching_sands";
		}
	>
>;
export type MoveSettingsV0394MoveRoarOfTime = S<
	MoveSettings<
		"V0394_MOVE_ROAR_OF_TIME",
		{
			animationId: 5;
			damageWindowEndMs: 2300;
			damageWindowStartMs: 850;
			durationMs: 2000;
			energyDelta: -100;
			movementId: "ROAR_OF_TIME";
			pokemonType: "POKEMON_TYPE_DRAGON";
			power: 160;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "roar_of_time";
		}
	>
>;
export type MoveSettingsV0395MoveBleakwindStorm = S<
	MoveSettings<
		"V0395_MOVE_BLEAKWIND_STORM",
		{
			animationId: 5;
			damageWindowEndMs: 2800;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			energyDelta: -100;
			movementId: "BLEAKWIND_STORM";
			pokemonType: "POKEMON_TYPE_FLYING";
			power: 150;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "bleakwind_storm";
		}
	>
>;
export type MoveSettingsV0396MoveSandsearStorm = S<
	MoveSettings<
		"V0396_MOVE_SANDSEAR_STORM",
		{
			animationId: 5;
			damageWindowEndMs: 2800;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			energyDelta: -100;
			movementId: "SANDSEAR_STORM";
			pokemonType: "POKEMON_TYPE_GROUND";
			power: 150;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "sandsear_storm";
		}
	>
>;
export type MoveSettingsV0397MoveWildboltStorm = S<
	MoveSettings<
		"V0397_MOVE_WILDBOLT_STORM",
		{
			animationId: 5;
			damageWindowEndMs: 2800;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			energyDelta: -100;
			movementId: "WILDBOLT_STORM";
			pokemonType: "POKEMON_TYPE_ELECTRIC";
			power: 150;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "wildbold_storm";
		}
	>
>;
export type MoveSettingsV0398MoveSpiritShackle = S<
	MoveSettings<
		"V0398_MOVE_SPIRIT_SHACKLE",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			energyDelta: -33;
			movementId: "SPIRIT_SHACKLE";
			pokemonType: "POKEMON_TYPE_GHOST";
			power: 70;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "spirit_shackle";
		}
	>
>;
export type MoveSettingsV0399MoveVoltTackle = S<
	MoveSettings<
		"V0399_MOVE_VOLT_TACKLE",
		{
			animationId: 5;
			damageWindowEndMs: 2600;
			damageWindowStartMs: 2100;
			durationMs: 3500;
			energyDelta: -33;
			movementId: "VOLT_TACKLE";
			pokemonType: "POKEMON_TYPE_ELECTRIC";
			power: 90;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "volt_tackle";
		}
	>
>;
export type MoveSettingsV0400MoveDarkestLariat = S<
	MoveSettings<
		"V0400_MOVE_DARKEST_LARIAT",
		{
			animationId: 5;
			damageWindowEndMs: 2000;
			damageWindowStartMs: 1200;
			durationMs: 2000;
			energyDelta: -50;
			movementId: "DARKEST_LARIAT";
			pokemonType: "POKEMON_TYPE_DARK";
			power: 80;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "darkest_lariat";
		}
	>
>;
export type MoveSettingsV0401MovePsywaveFast = S<
	MoveSettings<
		"V0401_MOVE_PSYWAVE_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 600;
			damageWindowStartMs: 300;
			durationMs: 500;
			energyDelta: 7;
			movementId: "PSYWAVE_FAST";
			pokemonType: "POKEMON_TYPE_PSYCHIC";
			power: 4;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "psywave";
		}
	>
>;
export type MoveSettingsV0402MoveMetalSoundFast = S<
	MoveSettings<
		"V0402_MOVE_METAL_SOUND_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 700;
			damageWindowStartMs: 200;
			durationMs: 500;
			energyDelta: 6;
			movementId: "METAL_SOUND_FAST";
			pokemonType: "POKEMON_TYPE_STEEL";
			power: 4;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "metal_sound";
		}
	>
>;
export type MoveSettingsV0403MoveSandAttackFast = S<
	MoveSettings<
		"V0403_MOVE_SAND_ATTACK_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 600;
			damageWindowStartMs: 300;
			durationMs: 500;
			energyDelta: 7;
			movementId: "SAND_ATTACK_FAST";
			pokemonType: "POKEMON_TYPE_GROUND";
			power: 4;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "sand_attack";
		}
	>
>;
export type MoveSettingsV0404MoveSunsteelStrike = S<
	MoveSettings<
		"V0404_MOVE_SUNSTEEL_STRIKE",
		{
			animationId: 4;
			damageWindowEndMs: 3000;
			damageWindowStartMs: 2200;
			durationMs: 3000;
			energyDelta: -100;
			movementId: "SUNSTEEL_STRIKE";
			pokemonType: "POKEMON_TYPE_STEEL";
			power: 230;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "sunsteel_strike";
		}
	>
>;
export type MoveSettingsV0405MoveMoongeistBeam = S<
	MoveSettings<
		"V0405_MOVE_MOONGEIST_BEAM",
		{
			animationId: 4;
			damageWindowEndMs: 3000;
			damageWindowStartMs: 2200;
			durationMs: 3000;
			energyDelta: -100;
			movementId: "MOONGEIST_BEAM";
			pokemonType: "POKEMON_TYPE_GHOST";
			power: 230;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "moongeist_beam";
		}
	>
>;
export type MoveSettingsV0406MoveAuraWheelElectric = S<
	MoveSettings<
		"V0406_MOVE_AURA_WHEEL_ELECTRIC",
		{
			animationId: 5;
			damageWindowEndMs: 2500;
			damageWindowStartMs: 2100;
			durationMs: 2500;
			energyDelta: -50;
			movementId: "AURA_WHEEL_ELECTRIC";
			pokemonType: "POKEMON_TYPE_ELECTRIC";
			power: 100;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "aura_wheel_electric";
		}
	>
>;
export type MoveSettingsV0407MoveAuraWheelDark = S<
	MoveSettings<
		"V0407_MOVE_AURA_WHEEL_DARK",
		{
			animationId: 5;
			damageWindowEndMs: 2500;
			damageWindowStartMs: 2100;
			durationMs: 2500;
			energyDelta: -50;
			movementId: "AURA_WHEEL_DARK";
			pokemonType: "POKEMON_TYPE_DARK";
			power: 100;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "aura_wheel_electric";
		}
	>
>;
export type MoveSettingsV0408MoveHighJumpKick = S<
	MoveSettings<
		"V0408_MOVE_HIGH_JUMP_KICK",
		{
			animationId: 5;
			damageWindowEndMs: 800;
			damageWindowStartMs: 450;
			durationMs: 1500;
			energyDelta: -100;
			movementId: "HIGH_JUMP_KICK";
			pokemonType: "POKEMON_TYPE_FIGHTING";
			power: 90;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "high_jump_kick";
		}
	>
>;
export type MoveSettingsV0462MoveForcePalmFast = S<
	MoveSettings<
		"V0462_MOVE_FORCE_PALM_FAST",
		{
			animationId: 4;
			damageWindowEndMs: 1000;
			damageWindowStartMs: 800;
			durationMs: 1000;
			energyDelta: 16;
			movementId: "FORCE_PALM_FAST";
			pokemonType: "POKEMON_TYPE_FIGHTING";
			power: 10;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "force_palm_fast";
		}
	>
>;
export type MoveSettingsV0463MoveSparklingAria = S<
	MoveSettings<
		"V0463_MOVE_SPARKLING_ARIA",
		{
			animationId: 5;
			damageWindowEndMs: 2900;
			damageWindowStartMs: 1700;
			durationMs: 3000;
			energyDelta: -33;
			movementId: "SPARKLING_ARIA";
			pokemonType: "POKEMON_TYPE_WATER";
			power: 85;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "sparkling_aria";
		}
	>
>;
export type MoveSettingsV0464MoveRageFist = S<
	MoveSettings<
		"V0464_MOVE_RAGE_FIST",
		{
			animationId: 5;
			damageWindowEndMs: 3000;
			damageWindowStartMs: 2750;
			durationMs: 3000;
			energyDelta: -50;
			movementId: "RAGE_FIST";
			pokemonType: "POKEMON_TYPE_GHOST";
			power: 100;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "rage_fist";
		}
	>
>;
export type MoveSettingsV0465MoveFlowerTrick = S<
	MoveSettings<
		"V0465_MOVE_FLOWER_TRICK",
		{
			animationId: 5;
			damageWindowEndMs: 2700;
			damageWindowStartMs: 1800;
			durationMs: 3000;
			energyDelta: -33;
			movementId: "FLOWER_TRICK";
			pokemonType: "POKEMON_TYPE_GRASS";
			power: 75;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "flower_trick";
		}
	>
>;
export type MoveSettingsV0466MoveFreezeShock = S<
	MoveSettings<
		"V0466_MOVE_FREEZE_SHOCK",
		{
			animationId: 5;
			damageWindowEndMs: 1400;
			damageWindowStartMs: 900;
			durationMs: 1500;
			energyDelta: -100;
			movementId: "FREEZE_SHOCK";
			pokemonType: "POKEMON_TYPE_ICE";
			power: 160;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "freeze_shock";
		}
	>
>;
export type MoveSettingsV0467MoveIceBurn = S<
	MoveSettings<
		"V0467_MOVE_ICE_BURN",
		{
			animationId: 5;
			damageWindowEndMs: 2200;
			damageWindowStartMs: 1800;
			durationMs: 2000;
			energyDelta: -50;
			movementId: "ICE_BURN";
			pokemonType: "POKEMON_TYPE_ICE";
			power: 90;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "ice_burn";
		}
	>
>;
export type MoveSettingsV0468MoveTorchSong = S<
	MoveSettings<
		"V0468_MOVE_TORCH_SONG",
		{
			animationId: 5;
			damageWindowEndMs: 3500;
			damageWindowStartMs: 2500;
			durationMs: 3500;
			energyDelta: -50;
			movementId: "TORCH_SONG";
			pokemonType: "POKEMON_TYPE_FIRE";
			power: 100;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "torch_song";
		}
	>
>;
export type MoveSettingsV0469MoveBehemothBlade = S<
	MoveSettings<
		"V0469_MOVE_BEHEMOTH_BLADE",
		{
			animationId: 5;
			damageWindowEndMs: 3500;
			damageWindowStartMs: 2500;
			durationMs: 3500;
			energyDelta: -100;
			isLocked: true;
			movementId: "BEHEMOTH_BLADE";
			pokemonType: "POKEMON_TYPE_STEEL";
			power: 200;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "behemoth_blade";
		}
	>
>;
export type MoveSettingsV0470MoveBehemothBash = S<
	MoveSettings<
		"V0470_MOVE_BEHEMOTH_BASH",
		{
			animationId: 5;
			damageWindowEndMs: 1400;
			damageWindowStartMs: 900;
			durationMs: 1500;
			energyDelta: -50;
			isLocked: true;
			movementId: "BEHEMOTH_BASH";
			pokemonType: "POKEMON_TYPE_STEEL";
			power: 125;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "behemoth_bash";
		}
	>
>;
export type MoveSettingsV0471MoveUpperHand = S<
	MoveSettings<
		"V0471_MOVE_UPPER_HAND",
		{
			animationId: 5;
			damageWindowEndMs: 3100;
			damageWindowStartMs: 2300;
			durationMs: 2000;
			energyDelta: -33;
			movementId: "UPPER_HAND";
			pokemonType: "POKEMON_TYPE_FIGHTING";
			power: 50;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "upper_hand";
		}
	>
>;
export type MoveSettingsV0472MoveThunderCage = S<
	MoveSettings<
		"V0472_MOVE_THUNDER_CAGE",
		{
			animationId: 5;
			damageWindowEndMs: 3200;
			damageWindowStartMs: 1880;
			durationMs: 3500;
			energyDelta: -100;
			movementId: "THUNDER_CAGE";
			pokemonType: "POKEMON_TYPE_ELECTRIC";
			power: 220;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "thunder_cage";
		}
	>
>;
export type MoveSettingsV0482MoveDynamaxCannon = S<
	MoveSettings<
		"V0482_MOVE_DYNAMAX_CANNON",
		{
			animationId: 5;
			damageWindowEndMs: 1400;
			damageWindowStartMs: 900;
			durationMs: 1500;
			energyDelta: -100;
			isLocked: true;
			movementId: "DYNAMAX_CANNON";
			pokemonType: "POKEMON_TYPE_DRAGON";
			power: 215;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "dynamax_cannon";
		}
	>
>;
export type MoveSettingsV0484MoveClangingScales = S<
	MoveSettings<
		"V0484_MOVE_CLANGING_SCALES",
		{
			animationId: 5;
			damageWindowEndMs: 3200;
			damageWindowStartMs: 1880;
			durationMs: 3500;
			energyDelta: -100;
			movementId: "CLANGING_SCALES";
			pokemonType: "POKEMON_TYPE_DRAGON";
			power: 120;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "clanging_scales";
		}
	>
>;
export type MoveSettingsV0485MoveCrushGrip = S<
	MoveSettings<
		"V0485_MOVE_CRUSH_GRIP",
		{
			animationId: 5;
			damageWindowEndMs: 1700;
			damageWindowStartMs: 700;
			durationMs: 2000;
			energyDelta: -100;
			movementId: "CRUSH_GRIP";
			pokemonType: "POKEMON_TYPE_NORMAL";
			power: 210;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "crush_grip";
		}
	>
>;
export type MoveSettingsV0486MoveDragonEnergy = S<
	MoveSettings<
		"V0486_MOVE_DRAGON_ENERGY",
		{
			animationId: 5;
			damageWindowEndMs: 3200;
			damageWindowStartMs: 1880;
			durationMs: 3500;
			energyDelta: -50;
			movementId: "DRAGON_ENERGY";
			pokemonType: "POKEMON_TYPE_DRAGON";
			power: 155;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "dragon_energy";
		}
	>
>;
export type MoveSettingsV0487MoveAquaStep = S<
	MoveSettings<
		"V0487_MOVE_AQUA_STEP",
		{
			animationId: 5;
			damageWindowEndMs: 3100;
			damageWindowStartMs: 2050;
			durationMs: 3500;
			energyDelta: -33;
			movementId: "AQUA_STEP";
			pokemonType: "POKEMON_TYPE_WATER";
			power: 55;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "aqua_step";
		}
	>
>;
export type MoveSettingsV0488MoveChillingWater = S<
	MoveSettings<
		"V0488_MOVE_CHILLING_WATER",
		{
			animationId: 5;
			damageWindowEndMs: 3100;
			damageWindowStartMs: 2050;
			durationMs: 3500;
			energyDelta: -33;
			movementId: "CHILLING_WATER";
			pokemonType: "POKEMON_TYPE_WATER";
			power: 65;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "chilling_water";
		}
	>
>;
export type MoveSettingsV0489MoveSecretSword = S<
	MoveSettings<
		"V0489_MOVE_SECRET_SWORD",
		{
			animationId: 5;
			damageWindowEndMs: 1600;
			damageWindowStartMs: 1200;
			durationMs: 2000;
			energyDelta: -50;
			isLocked: true;
			movementId: "SECRET_SWORD";
			pokemonType: "POKEMON_TYPE_FIGHTING";
			power: 120;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "secret_sword";
		}
	>
>;
export type MoveSettingsV0490MoveBeakBlast = S<
	MoveSettings<
		"V0490_MOVE_BEAK_BLAST",
		{
			animationId: 5;
			damageWindowEndMs: 2500;
			damageWindowStartMs: 1500;
			durationMs: 2500;
			energyDelta: -50;
			movementId: "BEAK_BLAST";
			pokemonType: "POKEMON_TYPE_FLYING";
			power: 125;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "beak_blast";
		}
	>
>;
export type MoveSettingsV0491MoveMindBlown = S<
	MoveSettings<
		"V0491_MOVE_MIND_BLOWN",
		{
			animationId: 5;
			damageWindowEndMs: 4000;
			damageWindowStartMs: 3000;
			durationMs: 4000;
			energyDelta: -33;
			movementId: "MIND_BLOWN";
			pokemonType: "POKEMON_TYPE_FIRE";
			power: 130;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "mind_blown";
		}
	>
>;
export type MoveSettingsV0492MoveDrumBeating = S<
	MoveSettings<
		"V0492_MOVE_DRUM_BEATING",
		{
			animationId: 5;
			damageWindowEndMs: 4000;
			damageWindowStartMs: 3000;
			durationMs: 4500;
			energyDelta: -33;
			movementId: "DRUM_BEATING";
			pokemonType: "POKEMON_TYPE_GRASS";
			power: 115;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "drum_beating";
		}
	>
>;
export type MoveSettingsV0493MovePyroball = S<
	MoveSettings<
		"V0493_MOVE_PYROBALL",
		{
			animationId: 5;
			damageWindowEndMs: 1600;
			damageWindowStartMs: 900;
			durationMs: 2000;
			energyDelta: -100;
			movementId: "PYROBALL";
			pokemonType: "POKEMON_TYPE_FIRE";
			power: 150;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "pyroball";
		}
	>
>;
export type MoveSettingsV0494MoveGigatonHammer = S<
	MoveSettings<
		"V0494_MOVE_GIGATON_HAMMER",
		{
			animationId: 5;
			damageWindowEndMs: 3100;
			damageWindowStartMs: 2000;
			durationMs: 3000;
			energyDelta: -100;
			movementId: "GIGATON_HAMMER";
			pokemonType: "POKEMON_TYPE_STEEL";
			power: 300;
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gigaton_hammer";
		}
	>
>;
export type MoveSettingsVnBm001 = S<
	MoveSettings<
		"VN_BM_001",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_001";
			obMoveSettingsNumber18: [250, 300, 350, 450];
			pokemonType: "POKEMON_TYPE_FIRE";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "max_flare";
		}
	>
>;
export type MoveSettingsVnBm002 = S<
	MoveSettings<
		"VN_BM_002",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_002";
			obMoveSettingsNumber18: [250, 300, 350, 450];
			pokemonType: "POKEMON_TYPE_BUG";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "max_flutterby";
		}
	>
>;
export type MoveSettingsVnBm003 = S<
	MoveSettings<
		"VN_BM_003",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_003";
			obMoveSettingsNumber18: [250, 300, 350, 450];
			pokemonType: "POKEMON_TYPE_ELECTRIC";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "max_lightning";
		}
	>
>;
export type MoveSettingsVnBm004 = S<
	MoveSettings<
		"VN_BM_004",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_004";
			obMoveSettingsNumber18: [250, 300, 350, 450];
			pokemonType: "POKEMON_TYPE_NORMAL";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "max_strike";
		}
	>
>;
export type MoveSettingsVnBm005 = S<
	MoveSettings<
		"VN_BM_005",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_005";
			obMoveSettingsNumber18: [250, 300, 350, 450];
			pokemonType: "POKEMON_TYPE_FIGHTING";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "max_knuckle";
		}
	>
>;
export type MoveSettingsVnBm006 = S<
	MoveSettings<
		"VN_BM_006",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_006";
			obMoveSettingsNumber18: [250, 300, 350, 450];
			pokemonType: "POKEMON_TYPE_GHOST";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "max_phantasm";
		}
	>
>;
export type MoveSettingsVnBm007 = S<
	MoveSettings<
		"VN_BM_007",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_007";
			obMoveSettingsNumber18: [250, 300, 350, 450];
			pokemonType: "POKEMON_TYPE_ICE";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "max_hailstorm";
		}
	>
>;
export type MoveSettingsVnBm008 = S<
	MoveSettings<
		"VN_BM_008",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_008";
			obMoveSettingsNumber18: [250, 300, 350, 450];
			pokemonType: "POKEMON_TYPE_POISON";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "max_ooze";
		}
	>
>;
export type MoveSettingsVnBm009 = S<
	MoveSettings<
		"VN_BM_009",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_009";
			obMoveSettingsNumber18: [250, 300, 350, 450];
			pokemonType: "POKEMON_TYPE_WATER";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "max_geyser";
		}
	>
>;
export type MoveSettingsVnBm010 = S<
	MoveSettings<
		"VN_BM_010",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_010";
			obMoveSettingsNumber18: [250, 300, 350, 450];
			pokemonType: "POKEMON_TYPE_FLYING";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "max_airstream";
		}
	>
>;
export type MoveSettingsVnBm011 = S<
	MoveSettings<
		"VN_BM_011",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_011";
			obMoveSettingsNumber18: [250, 300, 350, 450];
			pokemonType: "POKEMON_TYPE_FAIRY";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "max_starfall";
		}
	>
>;
export type MoveSettingsVnBm012 = S<
	MoveSettings<
		"VN_BM_012",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_012";
			obMoveSettingsNumber18: [250, 300, 350, 450];
			pokemonType: "POKEMON_TYPE_DRAGON";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "max_wyrmwind";
		}
	>
>;
export type MoveSettingsVnBm013 = S<
	MoveSettings<
		"VN_BM_013",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_013";
			obMoveSettingsNumber18: [250, 300, 350, 450];
			pokemonType: "POKEMON_TYPE_PSYCHIC";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "max_mindstorm";
		}
	>
>;
export type MoveSettingsVnBm014 = S<
	MoveSettings<
		"VN_BM_014",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_014";
			obMoveSettingsNumber18: [250, 300, 350, 450];
			pokemonType: "POKEMON_TYPE_ROCK";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "max_rockfall";
		}
	>
>;
export type MoveSettingsVnBm015 = S<
	MoveSettings<
		"VN_BM_015",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_015";
			obMoveSettingsNumber18: [250, 300, 350, 450];
			pokemonType: "POKEMON_TYPE_GROUND";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "max_quake";
		}
	>
>;
export type MoveSettingsVnBm016 = S<
	MoveSettings<
		"VN_BM_016",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_016";
			obMoveSettingsNumber18: [250, 300, 350, 450];
			pokemonType: "POKEMON_TYPE_DARK";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "max_darkness";
		}
	>
>;
export type MoveSettingsVnBm017 = S<
	MoveSettings<
		"VN_BM_017",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_017";
			obMoveSettingsNumber18: [250, 300, 350, 450];
			pokemonType: "POKEMON_TYPE_GRASS";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "max_overgrowth";
		}
	>
>;
export type MoveSettingsVnBm018 = S<
	MoveSettings<
		"VN_BM_018",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_018";
			obMoveSettingsNumber18: [250, 300, 350, 450];
			pokemonType: "POKEMON_TYPE_STEEL";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "max_steelspike";
		}
	>
>;
export type MoveSettingsVnBm019 = S<
	MoveSettings<
		"VN_BM_019",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_019";
			obMoveSettingsNumber18: [350, 400, 450, 550];
			pokemonType: "POKEMON_TYPE_FIRE";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gmax_wildfire";
		}
	>
>;
export type MoveSettingsVnBm020 = S<
	MoveSettings<
		"VN_BM_020",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_020";
			obMoveSettingsNumber18: [350, 400, 450, 550];
			pokemonType: "POKEMON_TYPE_BUG";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gmax_befuddle";
		}
	>
>;
export type MoveSettingsVnBm021 = S<
	MoveSettings<
		"VN_BM_021",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_021";
			obMoveSettingsNumber18: [350, 400, 450, 550];
			pokemonType: "POKEMON_TYPE_ELECTRIC";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gmax_voltcrash";
		}
	>
>;
export type MoveSettingsVnBm022 = S<
	MoveSettings<
		"VN_BM_022",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_022";
			obMoveSettingsNumber18: [350, 400, 450, 550];
			pokemonType: "POKEMON_TYPE_NORMAL";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gmax_goldrush";
		}
	>
>;
export type MoveSettingsVnBm023 = S<
	MoveSettings<
		"VN_BM_023",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_023";
			obMoveSettingsNumber18: [350, 400, 450, 550];
			pokemonType: "POKEMON_TYPE_FIGHTING";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gmax_chistrike";
		}
	>
>;
export type MoveSettingsVnBm024 = S<
	MoveSettings<
		"VN_BM_024",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_024";
			obMoveSettingsNumber18: [350, 400, 450, 550];
			pokemonType: "POKEMON_TYPE_GHOST";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gmax_terror";
		}
	>
>;
export type MoveSettingsVnBm025 = S<
	MoveSettings<
		"VN_BM_025",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_025";
			obMoveSettingsNumber18: [350, 400, 450, 550];
			pokemonType: "POKEMON_TYPE_WATER";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gmax_foamburst";
		}
	>
>;
export type MoveSettingsVnBm026 = S<
	MoveSettings<
		"VN_BM_026",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_026";
			obMoveSettingsNumber18: [350, 400, 450, 550];
			pokemonType: "POKEMON_TYPE_ICE";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gmax_resonance";
		}
	>
>;
export type MoveSettingsVnBm027 = S<
	MoveSettings<
		"VN_BM_027",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_027";
			obMoveSettingsNumber18: [350, 400, 450, 550];
			pokemonType: "POKEMON_TYPE_NORMAL";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gmax_cuddle";
		}
	>
>;
export type MoveSettingsVnBm028 = S<
	MoveSettings<
		"VN_BM_028",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_028";
			obMoveSettingsNumber18: [350, 400, 450, 550];
			pokemonType: "POKEMON_TYPE_NORMAL";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gmax_replenish";
		}
	>
>;
export type MoveSettingsVnBm029 = S<
	MoveSettings<
		"VN_BM_029",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_029";
			obMoveSettingsNumber18: [350, 400, 450, 550];
			pokemonType: "POKEMON_TYPE_POISON";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gmax_malodor";
		}
	>
>;
export type MoveSettingsVnBm030 = S<
	MoveSettings<
		"VN_BM_030",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_030";
			obMoveSettingsNumber18: [350, 400, 450, 550];
			pokemonType: "POKEMON_TYPE_STEEL";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gmax_meltdown";
		}
	>
>;
export type MoveSettingsVnBm031 = S<
	MoveSettings<
		"VN_BM_031",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_031";
			obMoveSettingsNumber18: [350, 400, 450, 550];
			pokemonType: "POKEMON_TYPE_FLYING";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gmax_windrage";
		}
	>
>;
export type MoveSettingsVnBm032 = S<
	MoveSettings<
		"VN_BM_032",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_032";
			obMoveSettingsNumber18: [350, 400, 450, 550];
			pokemonType: "POKEMON_TYPE_PSYCHIC";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gmax_gravitas";
		}
	>
>;
export type MoveSettingsVnBm033 = S<
	MoveSettings<
		"VN_BM_033",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_033";
			obMoveSettingsNumber18: [350, 400, 450, 550];
			pokemonType: "POKEMON_TYPE_WATER";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gmax_stonesurge";
		}
	>
>;
export type MoveSettingsVnBm034 = S<
	MoveSettings<
		"VN_BM_034",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_034";
			obMoveSettingsNumber18: [350, 400, 450, 550];
			pokemonType: "POKEMON_TYPE_ROCK";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gmax_volcalith";
		}
	>
>;
export type MoveSettingsVnBm035 = S<
	MoveSettings<
		"VN_BM_035",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_035";
			obMoveSettingsNumber18: [350, 400, 450, 550];
			pokemonType: "POKEMON_TYPE_GRASS";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gmax_tartness";
		}
	>
>;
export type MoveSettingsVnBm036 = S<
	MoveSettings<
		"VN_BM_036",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_036";
			obMoveSettingsNumber18: [350, 400, 450, 550];
			pokemonType: "POKEMON_TYPE_GRASS";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gmax_sweetness";
		}
	>
>;
export type MoveSettingsVnBm037 = S<
	MoveSettings<
		"VN_BM_037",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_037";
			obMoveSettingsNumber18: [350, 400, 450, 550];
			pokemonType: "POKEMON_TYPE_GROUND";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gmax_sandblast";
		}
	>
>;
export type MoveSettingsVnBm038 = S<
	MoveSettings<
		"VN_BM_038",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_038";
			obMoveSettingsNumber18: [350, 400, 450, 550];
			pokemonType: "POKEMON_TYPE_ELECTRIC";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gmax_stun_shock";
		}
	>
>;
export type MoveSettingsVnBm039 = S<
	MoveSettings<
		"VN_BM_039",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_039";
			obMoveSettingsNumber18: [350, 400, 450, 550];
			pokemonType: "POKEMON_TYPE_FIRE";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gmax_centiferno";
		}
	>
>;
export type MoveSettingsVnBm040 = S<
	MoveSettings<
		"VN_BM_040",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_040";
			obMoveSettingsNumber18: [350, 400, 450, 550];
			pokemonType: "POKEMON_TYPE_FAIRY";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gmax_smite";
		}
	>
>;
export type MoveSettingsVnBm041 = S<
	MoveSettings<
		"VN_BM_041",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_041";
			obMoveSettingsNumber18: [350, 400, 450, 550];
			pokemonType: "POKEMON_TYPE_DARK";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gmax_snooze";
		}
	>
>;
export type MoveSettingsVnBm042 = S<
	MoveSettings<
		"VN_BM_042",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_042";
			obMoveSettingsNumber18: [350, 400, 450, 550];
			pokemonType: "POKEMON_TYPE_FAIRY";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gmax_finale";
		}
	>
>;
export type MoveSettingsVnBm043 = S<
	MoveSettings<
		"VN_BM_043",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_043";
			obMoveSettingsNumber18: [350, 400, 450, 550];
			pokemonType: "POKEMON_TYPE_STEEL";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gmax_steelsurge";
		}
	>
>;
export type MoveSettingsVnBm044 = S<
	MoveSettings<
		"VN_BM_044",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_044";
			obMoveSettingsNumber18: [350, 400, 450, 550];
			pokemonType: "POKEMON_TYPE_DRAGON";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gmax_depletion";
		}
	>
>;
export type MoveSettingsVnBm045 = S<
	MoveSettings<
		"VN_BM_045",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_045";
			obMoveSettingsNumber18: [350, 400, 450, 550];
			pokemonType: "POKEMON_TYPE_GRASS";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gmax_vinelash";
		}
	>
>;
export type MoveSettingsVnBm046 = S<
	MoveSettings<
		"VN_BM_046",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_046";
			obMoveSettingsNumber18: [350, 400, 450, 550];
			pokemonType: "POKEMON_TYPE_WATER";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gmax_cannonade";
		}
	>
>;
export type MoveSettingsVnBm047 = S<
	MoveSettings<
		"VN_BM_047",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_047";
			obMoveSettingsNumber18: [350, 400, 450, 550];
			pokemonType: "POKEMON_TYPE_GRASS";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gmax_drumsolo";
		}
	>
>;
export type MoveSettingsVnBm048 = S<
	MoveSettings<
		"VN_BM_048",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_048";
			obMoveSettingsNumber18: [350, 400, 450, 550];
			pokemonType: "POKEMON_TYPE_FIRE";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gmax_fireball";
		}
	>
>;
export type MoveSettingsVnBm049 = S<
	MoveSettings<
		"VN_BM_049",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_049";
			obMoveSettingsNumber18: [350, 400, 450, 550];
			pokemonType: "POKEMON_TYPE_WATER";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gmax_hydrosnipe";
		}
	>
>;
export type MoveSettingsVnBm050 = S<
	MoveSettings<
		"VN_BM_050",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_050";
			obMoveSettingsNumber18: [350, 400, 450, 550];
			pokemonType: "POKEMON_TYPE_DARK";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gmax_oneblow";
		}
	>
>;
export type MoveSettingsVnBm051 = S<
	MoveSettings<
		"VN_BM_051",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_051";
			obMoveSettingsNumber18: [350, 400, 450, 550];
			pokemonType: "POKEMON_TYPE_WATER";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "gmax_rapidflow";
		}
	>
>;
export type MoveSettingsVnBm052 = S<
	MoveSettings<
		"VN_BM_052",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_052";
			obMoveSettingsNumber18: [0, 0, 0, 0];
			pokemonType: "POKEMON_TYPE_NORMAL";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "max_shield";
		}
	>
>;
export type MoveSettingsVnBm053 = S<
	MoveSettings<
		"VN_BM_053",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_053";
			obMoveSettingsNumber18: [0, 0, 0, 0];
			pokemonType: "POKEMON_TYPE_NORMAL";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "max_heal";
		}
	>
>;
export type MoveSettingsVnBm054 = S<
	MoveSettings<
		"VN_BM_054",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_054";
			obMoveSettingsNumber18: [0, 0, 0, 0];
			pokemonType: "POKEMON_TYPE_NORMAL";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "max_shield";
		}
	>
>;
export type MoveSettingsVnBm055 = S<
	MoveSettings<
		"VN_BM_055",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_055";
			obMoveSettingsNumber18: [0, 0, 0, 0];
			pokemonType: "POKEMON_TYPE_NORMAL";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "max_heal";
		}
	>
>;
export type MoveSettingsVnBm056 = S<
	MoveSettings<
		"VN_BM_056",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_056";
			obMoveSettingsNumber18: [0, 0, 0, 0];
			pokemonType: "POKEMON_TYPE_NORMAL";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "max_shield";
		}
	>
>;
export type MoveSettingsVnBm057 = S<
	MoveSettings<
		"VN_BM_057",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_057";
			obMoveSettingsNumber18: [0, 0, 0, 0];
			pokemonType: "POKEMON_TYPE_NORMAL";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "max_heal";
		}
	>
>;
export type MoveSettingsVnBm058 = S<
	MoveSettings<
		"VN_BM_058",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_058";
			obMoveSettingsNumber18: [0, 0, 0, 0];
			pokemonType: "POKEMON_TYPE_NORMAL";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "max_shield";
		}
	>
>;
export type MoveSettingsVnBm059 = S<
	MoveSettings<
		"VN_BM_059",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_059";
			obMoveSettingsNumber18: [0, 0, 0, 0];
			pokemonType: "POKEMON_TYPE_NORMAL";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "max_heal";
		}
	>
>;
export type MoveSettingsVnBm060 = S<
	MoveSettings<
		"VN_BM_060",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_060";
			obMoveSettingsNumber18: [250, 300, 350, 450];
			pokemonType: "POKEMON_TYPE_STEEL";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "max_behemoth_blade";
		}
	>
>;
export type MoveSettingsVnBm061 = S<
	MoveSettings<
		"VN_BM_061",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_061";
			obMoveSettingsNumber18: [250, 300, 350, 450];
			pokemonType: "POKEMON_TYPE_STEEL";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "max_behemoth_bash";
		}
	>
>;
export type MoveSettingsVnBm062 = S<
	MoveSettings<
		"VN_BM_062",
		{
			animationId: 5;
			damageWindowEndMs: 3400;
			damageWindowStartMs: 2000;
			durationMs: 2500;
			movementId: "VN_BM_062";
			obMoveSettingsNumber18: [350, 400, 450, 550];
			pokemonType: "POKEMON_TYPE_DRAGON";
			staminaLossScalar: 0.01;
			trainerLevelMax: 100;
			trainerLevelMin: 1;
			vfxName: "max_dynamax_cannon";
		}
	>
>;

export type MoveSettingsMasterfileEntry =
	| MoveSettingsV0013MoveWrap
	| MoveSettingsV0014MoveHyperBeam
	| MoveSettingsV0016MoveDarkPulse
	| MoveSettingsV0018MoveSludge
	| MoveSettingsV0020MoveViceGrip
	| MoveSettingsV0021MoveFlameWheel
	| MoveSettingsV0022MoveMegahorn
	| MoveSettingsV0024MoveFlamethrower
	| MoveSettingsV0026MoveDig
	| MoveSettingsV0028MoveCrossChop
	| MoveSettingsV0030MovePsybeam
	| MoveSettingsV0031MoveEarthquake
	| MoveSettingsV0032MoveStoneEdge
	| MoveSettingsV0033MoveIcePunch
	| MoveSettingsV0034MoveHeartStamp
	| MoveSettingsV0035MoveDischarge
	| MoveSettingsV0036MoveFlashCannon
	| MoveSettingsV0038MoveDrillPeck
	| MoveSettingsV0039MoveIceBeam
	| MoveSettingsV0040MoveBlizzard
	| MoveSettingsV0042MoveHeatWave
	| MoveSettingsV0045MoveAerialAce
	| MoveSettingsV0046MoveDrillRun
	| MoveSettingsV0047MovePetalBlizzard
	| MoveSettingsV0048MoveMegaDrain
	| MoveSettingsV0049MoveBugBuzz
	| MoveSettingsV0050MovePoisonFang
	| MoveSettingsV0051MoveNightSlash
	| MoveSettingsV0053MoveBubbleBeam
	| MoveSettingsV0054MoveSubmission
	| MoveSettingsV0056MoveLowSweep
	| MoveSettingsV0057MoveAquaJet
	| MoveSettingsV0058MoveAquaTail
	| MoveSettingsV0059MoveSeedBomb
	| MoveSettingsV0060MovePsyshock
	| MoveSettingsV0062MoveAncientPower
	| MoveSettingsV0063MoveRockTomb
	| MoveSettingsV0064MoveRockSlide
	| MoveSettingsV0065MovePowerGem
	| MoveSettingsV0066MoveShadowSneak
	| MoveSettingsV0067MoveShadowPunch
	| MoveSettingsV0069MoveOminousWind
	| MoveSettingsV0070MoveShadowBall
	| MoveSettingsV0072MoveMagnetBomb
	| MoveSettingsV0074MoveIronHead
	| MoveSettingsV0075MoveParabolicCharge
	| MoveSettingsV0077MoveThunderPunch
	| MoveSettingsV0078MoveThunder
	| MoveSettingsV0079MoveThunderbolt
	| MoveSettingsV0080MoveTwister
	| MoveSettingsV0082MoveDragonPulse
	| MoveSettingsV0083MoveDragonClaw
	| MoveSettingsV0084MoveDisarmingVoice
	| MoveSettingsV0085MoveDrainingKiss
	| MoveSettingsV0086MoveDazzlingGleam
	| MoveSettingsV0087MoveMoonblast
	| MoveSettingsV0088MovePlayRough
	| MoveSettingsV0089MoveCrossPoison
	| MoveSettingsV0090MoveSludgeBomb
	| MoveSettingsV0091MoveSludgeWave
	| MoveSettingsV0092MoveGunkShot
	| MoveSettingsV0094MoveBoneClub
	| MoveSettingsV0095MoveBulldoze
	| MoveSettingsV0096MoveMudBomb
	| MoveSettingsV0099MoveSignalBeam
	| MoveSettingsV0100MoveXScissor
	| MoveSettingsV0101MoveFlameCharge
	| MoveSettingsV0102MoveFlameBurst
	| MoveSettingsV0103MoveFireBlast
	| MoveSettingsV0104MoveBrine
	| MoveSettingsV0105MoveWaterPulse
	| MoveSettingsV0106MoveScald
	| MoveSettingsV0107MoveHydroPump
	| MoveSettingsV0108MovePsychic
	| MoveSettingsV0109MovePsystrike
	| MoveSettingsV0111MoveIcyWind
	| MoveSettingsV0114MoveGigaDrain
	| MoveSettingsV0115MoveFirePunch
	| MoveSettingsV0116MoveSolarBeam
	| MoveSettingsV0117MoveLeafBlade
	| MoveSettingsV0118MovePowerWhip
	| MoveSettingsV0121MoveAirCutter
	| MoveSettingsV0122MoveHurricane
	| MoveSettingsV0123MoveBrickBreak
	| MoveSettingsV0125MoveSwift
	| MoveSettingsV0126MoveHornAttack
	| MoveSettingsV0127MoveStomp
	| MoveSettingsV0129MoveHyperFang
	| MoveSettingsV0131MoveBodySlam
	| MoveSettingsV0132MoveRest
	| MoveSettingsV0133MoveStruggle
	| MoveSettingsV0134MoveScaldBlastoise
	| MoveSettingsV0135MoveHydroPumpBlastoise
	| MoveSettingsV0136MoveWrapGreen
	| MoveSettingsV0137MoveWrapPink
	| MoveSettingsV0200MoveFuryCutterFast
	| MoveSettingsV0201MoveBugBiteFast
	| MoveSettingsV0202MoveBiteFast
	| MoveSettingsV0203MoveSuckerPunchFast
	| MoveSettingsV0204MoveDragonBreathFast
	| MoveSettingsV0205MoveThunderShockFast
	| MoveSettingsV0206MoveSparkFast
	| MoveSettingsV0207MoveLowKickFast
	| MoveSettingsV0208MoveKarateChopFast
	| MoveSettingsV0209MoveEmberFast
	| MoveSettingsV0210MoveWingAttackFast
	| MoveSettingsV0211MovePeckFast
	| MoveSettingsV0212MoveLickFast
	| MoveSettingsV0213MoveShadowClawFast
	| MoveSettingsV0214MoveVineWhipFast
	| MoveSettingsV0215MoveRazorLeafFast
	| MoveSettingsV0216MoveMudShotFast
	| MoveSettingsV0217MoveIceShardFast
	| MoveSettingsV0218MoveFrostBreathFast
	| MoveSettingsV0219MoveQuickAttackFast
	| MoveSettingsV0220MoveScratchFast
	| MoveSettingsV0221MoveTackleFast
	| MoveSettingsV0222MovePoundFast
	| MoveSettingsV0223MoveCutFast
	| MoveSettingsV0224MovePoisonJabFast
	| MoveSettingsV0225MoveAcidFast
	| MoveSettingsV0226MovePsychoCutFast
	| MoveSettingsV0227MoveRockThrowFast
	| MoveSettingsV0228MoveMetalClawFast
	| MoveSettingsV0229MoveBulletPunchFast
	| MoveSettingsV0230MoveWaterGunFast
	| MoveSettingsV0231MoveSplashFast
	| MoveSettingsV0232MoveWaterGunFastBlastoise
	| MoveSettingsV0233MoveMudSlapFast
	| MoveSettingsV0234MoveZenHeadbuttFast
	| MoveSettingsV0235MoveConfusionFast
	| MoveSettingsV0236MovePoisonStingFast
	| MoveSettingsV0237MoveBubbleFast
	| MoveSettingsV0238MoveFeintAttackFast
	| MoveSettingsV0239MoveSteelWingFast
	| MoveSettingsV0240MoveFireFangFast
	| MoveSettingsV0241MoveRockSmashFast
	| MoveSettingsV0242MoveTransformFast
	| MoveSettingsV0243MoveCounterFast
	| MoveSettingsV0244MovePowderSnowFast
	| MoveSettingsV0245MoveCloseCombat
	| MoveSettingsV0246MoveDynamicPunch
	| MoveSettingsV0247MoveFocusBlast
	| MoveSettingsV0248MoveAuroraBeam
	| MoveSettingsV0249MoveChargeBeamFast
	| MoveSettingsV0250MoveVoltSwitchFast
	| MoveSettingsV0251MoveWildCharge
	| MoveSettingsV0252MoveZapCannon
	| MoveSettingsV0253MoveDragonTailFast
	| MoveSettingsV0254MoveAvalanche
	| MoveSettingsV0255MoveAirSlashFast
	| MoveSettingsV0256MoveBraveBird
	| MoveSettingsV0257MoveSkyAttack
	| MoveSettingsV0258MoveSandTomb
	| MoveSettingsV0259MoveRockBlast
	| MoveSettingsV0260MoveInfestationFast
	| MoveSettingsV0261MoveStruggleBugFast
	| MoveSettingsV0262MoveSilverWind
	| MoveSettingsV0263MoveAstonishFast
	| MoveSettingsV0264MoveHexFast
	| MoveSettingsV0265MoveNightShade
	| MoveSettingsV0266MoveIronTailFast
	| MoveSettingsV0267MoveGyroBall
	| MoveSettingsV0268MoveHeavySlam
	| MoveSettingsV0269MoveFireSpinFast
	| MoveSettingsV0270MoveOverheat
	| MoveSettingsV0271MoveBulletSeedFast
	| MoveSettingsV0272MoveGrassKnot
	| MoveSettingsV0273MoveEnergyBall
	| MoveSettingsV0274MoveExtrasensoryFast
	| MoveSettingsV0275MoveFuturesight
	| MoveSettingsV0276MoveMirrorCoat
	| MoveSettingsV0277MoveOutrage
	| MoveSettingsV0278MoveSnarlFast
	| MoveSettingsV0279MoveCrunch
	| MoveSettingsV0280MoveFoulPlay
	| MoveSettingsV0281MoveHiddenPowerFast
	| MoveSettingsV0282MoveTakeDownFast
	| MoveSettingsV0283MoveWaterfallFast
	| MoveSettingsV0284MoveSurf
	| MoveSettingsV0285MoveDracoMeteor
	| MoveSettingsV0286MoveDoomDesire
	| MoveSettingsV0287MoveYawnFast
	| MoveSettingsV0288MovePsychoBoost
	| MoveSettingsV0289MoveOriginPulse
	| MoveSettingsV0290MovePrecipiceBlades
	| MoveSettingsV0291MovePresentFast
	| MoveSettingsV0292MoveWeatherBallFire
	| MoveSettingsV0293MoveWeatherBallIce
	| MoveSettingsV0294MoveWeatherBallRock
	| MoveSettingsV0295MoveWeatherBallWater
	| MoveSettingsV0296MoveFrenzyPlant
	| MoveSettingsV0297MoveSmackDownFast
	| MoveSettingsV0298MoveBlastBurn
	| MoveSettingsV0299MoveHydroCannon
	| MoveSettingsV0300MoveLastResort
	| MoveSettingsV0301MoveMeteorMash
	| MoveSettingsV0302MoveSkullBash
	| MoveSettingsV0303MoveAcidSpray
	| MoveSettingsV0304MoveEarthPower
	| MoveSettingsV0305MoveCrabhammer
	| MoveSettingsV0306MoveLunge
	| MoveSettingsV0307MoveCrushClaw
	| MoveSettingsV0308MoveOctazooka
	| MoveSettingsV0309MoveMirrorShot
	| MoveSettingsV0310MoveSuperPower
	| MoveSettingsV0311MoveFellStinger
	| MoveSettingsV0312MoveLeafTornado
	| MoveSettingsV0313MoveLeechLife
	| MoveSettingsV0314MoveDrainPunch
	| MoveSettingsV0315MoveShadowBone
	| MoveSettingsV0316MoveMuddyWater
	| MoveSettingsV0317MoveBlazeKick
	| MoveSettingsV0318MoveRazorShell
	| MoveSettingsV0319MovePowerUpPunch
	| MoveSettingsV0320MoveCharmFast
	| MoveSettingsV0321MoveGigaImpact
	| MoveSettingsV0322MoveFrustration
	| MoveSettingsV0323MoveReturn
	| MoveSettingsV0324MoveSynchronoise
	| MoveSettingsV0325MoveLockOnFast
	| MoveSettingsV0326MoveThunderFangFast
	| MoveSettingsV0327MoveIceFangFast
	| MoveSettingsV0328MoveHornDrill
	| MoveSettingsV0329MoveFissure
	| MoveSettingsV0330MoveSacredSword
	| MoveSettingsV0331MoveFlyingPress
	| MoveSettingsV0332MoveAuraSphere
	| MoveSettingsV0333MovePayback
	| MoveSettingsV0334MoveRockWrecker
	| MoveSettingsV0335MoveAeroblast
	| MoveSettingsV0336MoveTechnoBlastNormal
	| MoveSettingsV0337MoveTechnoBlastBurn
	| MoveSettingsV0338MoveTechnoBlastChill
	| MoveSettingsV0339MoveTechnoBlastWater
	| MoveSettingsV0340MoveTechnoBlastShock
	| MoveSettingsV0341MoveFly
	| MoveSettingsV0342MoveVCreate
	| MoveSettingsV0343MoveLeafStorm
	| MoveSettingsV0344MoveTriAttack
	| MoveSettingsV0345MoveGustFast
	| MoveSettingsV0346MoveIncinerateFast
	| MoveSettingsV0348MoveFeatherDance
	| MoveSettingsV0350MoveFairyWindFast
	| MoveSettingsV0352MoveWeatherBallNormal
	| MoveSettingsV0353MovePsychicFangs
	| MoveSettingsV0356MoveDoubleKickFast
	| MoveSettingsV0357MoveMagicalLeafFast
	| MoveSettingsV0358MoveSacredFire
	| MoveSettingsV0359MoveIcicleSpear
	| MoveSettingsV0360MoveAeroblastPlus
	| MoveSettingsV0361MoveAeroblastPlusPlus
	| MoveSettingsV0362MoveSacredFirePlus
	| MoveSettingsV0363MoveSacredFirePlusPlus
	| MoveSettingsV0364MoveAcrobatics
	| MoveSettingsV0365MoveLusterPurge
	| MoveSettingsV0366MoveMistBall
	| MoveSettingsV0367MoveBrutalSwing
	| MoveSettingsV0368MoveRolloutFast
	| MoveSettingsV0369MoveSeedFlare
	| MoveSettingsV0370MoveObstruct
	| MoveSettingsV0371MoveShadowForce
	| MoveSettingsV0372MoveMeteorBeam
	| MoveSettingsV0373MoveWaterShurikenFast
	| MoveSettingsV0374MoveFusionBolt
	| MoveSettingsV0375MoveFusionFlare
	| MoveSettingsV0376MovePoltergeist
	| MoveSettingsV0377MoveHighHorsepower
	| MoveSettingsV0378MoveGlaciate
	| MoveSettingsV0379MoveBreakingSwipe
	| MoveSettingsV0380MoveBoomburst
	| MoveSettingsV0381MoveDoubleIronBash
	| MoveSettingsV0382MoveMysticalFire
	| MoveSettingsV0383MoveLiquidation
	| MoveSettingsV0384MoveDragonAscent
	| MoveSettingsV0385MoveLeafageFast
	| MoveSettingsV0386MoveMagmaStorm
	| MoveSettingsV0387MoveGeomancyFast
	| MoveSettingsV0388MoveSpacialRend
	| MoveSettingsV0389MoveOblivionWing
	| MoveSettingsV0390MoveNaturesMadness
	| MoveSettingsV0391MoveTripleAxel
	| MoveSettingsV0392MoveTrailblaze
	| MoveSettingsV0393MoveScorchingSands
	| MoveSettingsV0394MoveRoarOfTime
	| MoveSettingsV0395MoveBleakwindStorm
	| MoveSettingsV0396MoveSandsearStorm
	| MoveSettingsV0397MoveWildboltStorm
	| MoveSettingsV0398MoveSpiritShackle
	| MoveSettingsV0399MoveVoltTackle
	| MoveSettingsV0400MoveDarkestLariat
	| MoveSettingsV0401MovePsywaveFast
	| MoveSettingsV0402MoveMetalSoundFast
	| MoveSettingsV0403MoveSandAttackFast
	| MoveSettingsV0404MoveSunsteelStrike
	| MoveSettingsV0405MoveMoongeistBeam
	| MoveSettingsV0406MoveAuraWheelElectric
	| MoveSettingsV0407MoveAuraWheelDark
	| MoveSettingsV0408MoveHighJumpKick
	| MoveSettingsV0462MoveForcePalmFast
	| MoveSettingsV0463MoveSparklingAria
	| MoveSettingsV0464MoveRageFist
	| MoveSettingsV0465MoveFlowerTrick
	| MoveSettingsV0466MoveFreezeShock
	| MoveSettingsV0467MoveIceBurn
	| MoveSettingsV0468MoveTorchSong
	| MoveSettingsV0469MoveBehemothBlade
	| MoveSettingsV0470MoveBehemothBash
	| MoveSettingsV0471MoveUpperHand
	| MoveSettingsV0472MoveThunderCage
	| MoveSettingsV0482MoveDynamaxCannon
	| MoveSettingsV0484MoveClangingScales
	| MoveSettingsV0485MoveCrushGrip
	| MoveSettingsV0486MoveDragonEnergy
	| MoveSettingsV0487MoveAquaStep
	| MoveSettingsV0488MoveChillingWater
	| MoveSettingsV0489MoveSecretSword
	| MoveSettingsV0490MoveBeakBlast
	| MoveSettingsV0491MoveMindBlown
	| MoveSettingsV0492MoveDrumBeating
	| MoveSettingsV0493MovePyroball
	| MoveSettingsV0494MoveGigatonHammer
	| MoveSettingsVnBm001
	| MoveSettingsVnBm002
	| MoveSettingsVnBm003
	| MoveSettingsVnBm004
	| MoveSettingsVnBm005
	| MoveSettingsVnBm006
	| MoveSettingsVnBm007
	| MoveSettingsVnBm008
	| MoveSettingsVnBm009
	| MoveSettingsVnBm010
	| MoveSettingsVnBm011
	| MoveSettingsVnBm012
	| MoveSettingsVnBm013
	| MoveSettingsVnBm014
	| MoveSettingsVnBm015
	| MoveSettingsVnBm016
	| MoveSettingsVnBm017
	| MoveSettingsVnBm018
	| MoveSettingsVnBm019
	| MoveSettingsVnBm020
	| MoveSettingsVnBm021
	| MoveSettingsVnBm022
	| MoveSettingsVnBm023
	| MoveSettingsVnBm024
	| MoveSettingsVnBm025
	| MoveSettingsVnBm026
	| MoveSettingsVnBm027
	| MoveSettingsVnBm028
	| MoveSettingsVnBm029
	| MoveSettingsVnBm030
	| MoveSettingsVnBm031
	| MoveSettingsVnBm032
	| MoveSettingsVnBm033
	| MoveSettingsVnBm034
	| MoveSettingsVnBm035
	| MoveSettingsVnBm036
	| MoveSettingsVnBm037
	| MoveSettingsVnBm038
	| MoveSettingsVnBm039
	| MoveSettingsVnBm040
	| MoveSettingsVnBm041
	| MoveSettingsVnBm042
	| MoveSettingsVnBm043
	| MoveSettingsVnBm044
	| MoveSettingsVnBm045
	| MoveSettingsVnBm046
	| MoveSettingsVnBm047
	| MoveSettingsVnBm048
	| MoveSettingsVnBm049
	| MoveSettingsVnBm050
	| MoveSettingsVnBm051
	| MoveSettingsVnBm052
	| MoveSettingsVnBm053
	| MoveSettingsVnBm054
	| MoveSettingsVnBm055
	| MoveSettingsVnBm056
	| MoveSettingsVnBm057
	| MoveSettingsVnBm058
	| MoveSettingsVnBm059
	| MoveSettingsVnBm060
	| MoveSettingsVnBm061
	| MoveSettingsVnBm062;

export type MoveSettingsTemplateID = MoveSettingsMasterfileEntry["templateId"];
