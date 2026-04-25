export interface CombatMove<TemplateID extends string = string, TData extends CombatMoveData = CombatMoveData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		combatMove: TData;
	};
}

export interface CombatMoveData {
	buffs?: {
		attackerAttackStatStageChange?: number;
		attackerDefenseStatStageChange?: number;
		buffActivationChance?: number;
		targetAttackStatStageChange?: number;
		targetDefenseStatStageChange?: number;
	};
	durationTurns?: number;
	energyDelta?: number;
	power?: number;
	type?: string;
	uniqueId?: string;
	vfxName?: string;
}

export type CombatMoveV0013MoveWrap = CombatMove<
	"COMBAT_V0013_MOVE_WRAP",
	{
		buffs: {
			buffActivationChance: 1;
			targetDefenseStatStageChange: -1;
		};
		energyDelta: -45;
		power: 60;
		type: "POKEMON_TYPE_NORMAL";
		uniqueId: "WRAP";
		vfxName: "wrap";
	}
>;
export type CombatMoveV0014MoveHyperBeam = CombatMove<
	"COMBAT_V0014_MOVE_HYPER_BEAM",
	{
		energyDelta: -80;
		power: 150;
		type: "POKEMON_TYPE_NORMAL";
		uniqueId: "HYPER_BEAM";
		vfxName: "hyper_beam";
	}
>;
export type CombatMoveV0016MoveDarkPulse = CombatMove<
	"COMBAT_V0016_MOVE_DARK_PULSE",
	{
		energyDelta: -50;
		power: 80;
		type: "POKEMON_TYPE_DARK";
		uniqueId: "DARK_PULSE";
		vfxName: "dark_pulse";
	}
>;
export type CombatMoveV0018MoveSludge = CombatMove<
	"COMBAT_V0018_MOVE_SLUDGE",
	{
		energyDelta: -40;
		power: 70;
		type: "POKEMON_TYPE_POISON";
		uniqueId: "SLUDGE";
		vfxName: "sludge";
	}
>;
export type CombatMoveV0020MoveViceGrip = CombatMove<
	"COMBAT_V0020_MOVE_VICE_GRIP",
	{
		energyDelta: -40;
		power: 70;
		type: "POKEMON_TYPE_NORMAL";
		uniqueId: "VICE_GRIP";
		vfxName: "vice_grip";
	}
>;
export type CombatMoveV0021MoveFlameWheel = CombatMove<
	"COMBAT_V0021_MOVE_FLAME_WHEEL",
	{
		energyDelta: -45;
		power: 80;
		type: "POKEMON_TYPE_FIRE";
		uniqueId: "FLAME_WHEEL";
		vfxName: "flame_wheel";
	}
>;
export type CombatMoveV0022MoveMegahorn = CombatMove<
	"COMBAT_V0022_MOVE_MEGAHORN",
	{
		energyDelta: -55;
		power: 110;
		type: "POKEMON_TYPE_BUG";
		uniqueId: "MEGAHORN";
		vfxName: "megahorn";
	}
>;
export type CombatMoveV0024MoveFlamethrower = CombatMove<
	"COMBAT_V0024_MOVE_FLAMETHROWER",
	{
		energyDelta: -55;
		power: 90;
		type: "POKEMON_TYPE_FIRE";
		uniqueId: "FLAMETHROWER";
		vfxName: "flamethrower";
	}
>;
export type CombatMoveV0026MoveDig = CombatMove<
	"COMBAT_V0026_MOVE_DIG",
	{
		energyDelta: -50;
		power: 70;
		type: "POKEMON_TYPE_GROUND";
		uniqueId: "DIG";
		vfxName: "dig";
	}
>;
export type CombatMoveV0028MoveCrossChop = CombatMove<
	"COMBAT_V0028_MOVE_CROSS_CHOP",
	{
		energyDelta: -35;
		power: 55;
		type: "POKEMON_TYPE_FIGHTING";
		uniqueId: "CROSS_CHOP";
		vfxName: "cross_chop";
	}
>;
export type CombatMoveV0030MovePsybeam = CombatMove<
	"COMBAT_V0030_MOVE_PSYBEAM",
	{
		energyDelta: -60;
		power: 70;
		type: "POKEMON_TYPE_PSYCHIC";
		uniqueId: "PSYBEAM";
		vfxName: "psybeam";
	}
>;
export type CombatMoveV0031MoveEarthquake = CombatMove<
	"COMBAT_V0031_MOVE_EARTHQUAKE",
	{
		energyDelta: -65;
		power: 110;
		type: "POKEMON_TYPE_GROUND";
		uniqueId: "EARTHQUAKE";
		vfxName: "earthquake";
	}
>;
export type CombatMoveV0032MoveStoneEdge = CombatMove<
	"COMBAT_V0032_MOVE_STONE_EDGE",
	{
		energyDelta: -55;
		power: 100;
		type: "POKEMON_TYPE_ROCK";
		uniqueId: "STONE_EDGE";
		vfxName: "stone_edge";
	}
>;
export type CombatMoveV0033MoveIcePunch = CombatMove<
	"COMBAT_V0033_MOVE_ICE_PUNCH",
	{
		energyDelta: -40;
		power: 60;
		type: "POKEMON_TYPE_ICE";
		uniqueId: "ICE_PUNCH";
		vfxName: "ice_punch";
	}
>;
export type CombatMoveV0034MoveHeartStamp = CombatMove<
	"COMBAT_V0034_MOVE_HEART_STAMP",
	{
		energyDelta: -40;
		power: 40;
		type: "POKEMON_TYPE_PSYCHIC";
		uniqueId: "HEART_STAMP";
		vfxName: "heart_stamp";
	}
>;
export type CombatMoveV0035MoveDischarge = CombatMove<
	"COMBAT_V0035_MOVE_DISCHARGE",
	{
		energyDelta: -40;
		power: 55;
		type: "POKEMON_TYPE_ELECTRIC";
		uniqueId: "DISCHARGE";
		vfxName: "discharge";
	}
>;
export type CombatMoveV0036MoveFlashCannon = CombatMove<
	"COMBAT_V0036_MOVE_FLASH_CANNON",
	{
		energyDelta: -70;
		power: 110;
		type: "POKEMON_TYPE_STEEL";
		uniqueId: "FLASH_CANNON";
		vfxName: "flash_cannon";
	}
>;
export type CombatMoveV0038MoveDrillPeck = CombatMove<
	"COMBAT_V0038_MOVE_DRILL_PECK",
	{
		energyDelta: -40;
		power: 70;
		type: "POKEMON_TYPE_FLYING";
		uniqueId: "DRILL_PECK";
		vfxName: "drill_peck";
	}
>;
export type CombatMoveV0039MoveIceBeam = CombatMove<
	"COMBAT_V0039_MOVE_ICE_BEAM",
	{
		energyDelta: -55;
		power: 90;
		type: "POKEMON_TYPE_ICE";
		uniqueId: "ICE_BEAM";
		vfxName: "ice_beam";
	}
>;
export type CombatMoveV0040MoveBlizzard = CombatMove<
	"COMBAT_V0040_MOVE_BLIZZARD",
	{
		energyDelta: -75;
		power: 140;
		type: "POKEMON_TYPE_ICE";
		uniqueId: "BLIZZARD";
		vfxName: "blizzard";
	}
>;
export type CombatMoveV0042MoveHeatWave = CombatMove<
	"COMBAT_V0042_MOVE_HEAT_WAVE",
	{
		energyDelta: -45;
		power: 75;
		type: "POKEMON_TYPE_FIRE";
		uniqueId: "HEAT_WAVE";
		vfxName: "heat_wave";
	}
>;
export type CombatMoveV0045MoveAerialAce = CombatMove<
	"COMBAT_V0045_MOVE_AERIAL_ACE",
	{
		energyDelta: -45;
		power: 60;
		type: "POKEMON_TYPE_FLYING";
		uniqueId: "AERIAL_ACE";
		vfxName: "aerial_ace";
	}
>;
export type CombatMoveV0046MoveDrillRun = CombatMove<
	"COMBAT_V0046_MOVE_DRILL_RUN",
	{
		energyDelta: -45;
		power: 80;
		type: "POKEMON_TYPE_GROUND";
		uniqueId: "DRILL_RUN";
		vfxName: "drill_run";
	}
>;
export type CombatMoveV0047MovePetalBlizzard = CombatMove<
	"COMBAT_V0047_MOVE_PETAL_BLIZZARD",
	{
		energyDelta: -65;
		power: 110;
		type: "POKEMON_TYPE_GRASS";
		uniqueId: "PETAL_BLIZZARD";
		vfxName: "petal_blizzard";
	}
>;
export type CombatMoveV0048MoveMegaDrain = CombatMove<
	"COMBAT_V0048_MOVE_MEGA_DRAIN",
	{
		energyDelta: -55;
		power: 25;
		type: "POKEMON_TYPE_GRASS";
		uniqueId: "MEGA_DRAIN";
		vfxName: "mega_drain";
	}
>;
export type CombatMoveV0049MoveBugBuzz = CombatMove<
	"COMBAT_V0049_MOVE_BUG_BUZZ",
	{
		buffs: {
			buffActivationChance: 0.3;
			targetDefenseStatStageChange: -1;
		};
		energyDelta: -60;
		power: 100;
		type: "POKEMON_TYPE_BUG";
		uniqueId: "BUG_BUZZ";
		vfxName: "bug_buzz";
	}
>;
export type CombatMoveV0050MovePoisonFang = CombatMove<
	"COMBAT_V0050_MOVE_POISON_FANG",
	{
		buffs: {
			buffActivationChance: 1;
			targetDefenseStatStageChange: -1;
		};
		energyDelta: -40;
		power: 45;
		type: "POKEMON_TYPE_POISON";
		uniqueId: "POISON_FANG";
		vfxName: "poison_fang";
	}
>;
export type CombatMoveV0051MoveNightSlash = CombatMove<
	"COMBAT_V0051_MOVE_NIGHT_SLASH",
	{
		buffs: {
			attackerAttackStatStageChange: 1;
			buffActivationChance: 0.125;
		};
		energyDelta: -35;
		power: 50;
		type: "POKEMON_TYPE_DARK";
		uniqueId: "NIGHT_SLASH";
		vfxName: "night_slash";
	}
>;
export type CombatMoveV0053MoveBubbleBeam = CombatMove<
	"COMBAT_V0053_MOVE_BUBBLE_BEAM",
	{
		buffs: {
			buffActivationChance: 1;
			targetAttackStatStageChange: -1;
		};
		energyDelta: -40;
		power: 25;
		type: "POKEMON_TYPE_WATER";
		uniqueId: "BUBBLE_BEAM";
		vfxName: "bubble_beam";
	}
>;
export type CombatMoveV0054MoveSubmission = CombatMove<
	"COMBAT_V0054_MOVE_SUBMISSION",
	{
		energyDelta: -50;
		power: 60;
		type: "POKEMON_TYPE_FIGHTING";
		uniqueId: "SUBMISSION";
		vfxName: "submission";
	}
>;
export type CombatMoveV0056MoveLowSweep = CombatMove<
	"COMBAT_V0056_MOVE_LOW_SWEEP",
	{
		energyDelta: -40;
		power: 40;
		type: "POKEMON_TYPE_FIGHTING";
		uniqueId: "LOW_SWEEP";
		vfxName: "low_sweep";
	}
>;
export type CombatMoveV0057MoveAquaJet = CombatMove<
	"COMBAT_V0057_MOVE_AQUA_JET",
	{
		energyDelta: -40;
		power: 70;
		type: "POKEMON_TYPE_WATER";
		uniqueId: "AQUA_JET";
		vfxName: "aqua_jet";
	}
>;
export type CombatMoveV0058MoveAquaTail = CombatMove<
	"COMBAT_V0058_MOVE_AQUA_TAIL",
	{
		energyDelta: -35;
		power: 55;
		type: "POKEMON_TYPE_WATER";
		uniqueId: "AQUA_TAIL";
		vfxName: "aqua_tail";
	}
>;
export type CombatMoveV0059MoveSeedBomb = CombatMove<
	"COMBAT_V0059_MOVE_SEED_BOMB",
	{
		energyDelta: -40;
		power: 55;
		type: "POKEMON_TYPE_GRASS";
		uniqueId: "SEED_BOMB";
		vfxName: "seed_bomb";
	}
>;
export type CombatMoveV0060MovePsyshock = CombatMove<
	"COMBAT_V0060_MOVE_PSYSHOCK",
	{
		energyDelta: -40;
		power: 70;
		type: "POKEMON_TYPE_PSYCHIC";
		uniqueId: "PSYSHOCK";
		vfxName: "psyshock";
	}
>;
export type CombatMoveV0062MoveAncientPower = CombatMove<
	"COMBAT_V0062_MOVE_ANCIENT_POWER",
	{
		buffs: {
			attackerAttackStatStageChange: 1;
			attackerDefenseStatStageChange: 1;
			buffActivationChance: 0.1;
		};
		energyDelta: -45;
		power: 60;
		type: "POKEMON_TYPE_ROCK";
		uniqueId: "ANCIENT_POWER";
		vfxName: "ancient_power";
	}
>;
export type CombatMoveV0063MoveRockTomb = CombatMove<
	"COMBAT_V0063_MOVE_ROCK_TOMB",
	{
		buffs: {
			buffActivationChance: 1;
			targetAttackStatStageChange: -1;
		};
		energyDelta: -50;
		power: 75;
		type: "POKEMON_TYPE_ROCK";
		uniqueId: "ROCK_TOMB";
		vfxName: "rock_tomb";
	}
>;
export type CombatMoveV0064MoveRockSlide = CombatMove<
	"COMBAT_V0064_MOVE_ROCK_SLIDE",
	{
		energyDelta: -45;
		power: 75;
		type: "POKEMON_TYPE_ROCK";
		uniqueId: "ROCK_SLIDE";
		vfxName: "rock_slide";
	}
>;
export type CombatMoveV0065MovePowerGem = CombatMove<
	"COMBAT_V0065_MOVE_POWER_GEM",
	{
		energyDelta: -50;
		power: 85;
		type: "POKEMON_TYPE_ROCK";
		uniqueId: "POWER_GEM";
		vfxName: "power_gem";
	}
>;
export type CombatMoveV0066MoveShadowSneak = CombatMove<
	"COMBAT_V0066_MOVE_SHADOW_SNEAK",
	{
		energyDelta: -50;
		power: 75;
		type: "POKEMON_TYPE_GHOST";
		uniqueId: "SHADOW_SNEAK";
		vfxName: "shadow_sneak";
	}
>;
export type CombatMoveV0067MoveShadowPunch = CombatMove<
	"COMBAT_V0067_MOVE_SHADOW_PUNCH",
	{
		energyDelta: -35;
		power: 55;
		type: "POKEMON_TYPE_GHOST";
		uniqueId: "SHADOW_PUNCH";
		vfxName: "shadow_punch";
	}
>;
export type CombatMoveV0069MoveOminousWind = CombatMove<
	"COMBAT_V0069_MOVE_OMINOUS_WIND",
	{
		buffs: {
			attackerAttackStatStageChange: 1;
			attackerDefenseStatStageChange: 1;
			buffActivationChance: 0.1;
		};
		energyDelta: -45;
		power: 45;
		type: "POKEMON_TYPE_GHOST";
		uniqueId: "OMINOUS_WIND";
		vfxName: "ominous_wind";
	}
>;
export type CombatMoveV0070MoveShadowBall = CombatMove<
	"COMBAT_V0070_MOVE_SHADOW_BALL",
	{
		energyDelta: -50;
		power: 100;
		type: "POKEMON_TYPE_GHOST";
		uniqueId: "SHADOW_BALL";
		vfxName: "shadow_ball";
	}
>;
export type CombatMoveV0072MoveMagnetBomb = CombatMove<
	"COMBAT_V0072_MOVE_MAGNET_BOMB",
	{
		energyDelta: -45;
		power: 70;
		type: "POKEMON_TYPE_STEEL";
		uniqueId: "MAGNET_BOMB";
		vfxName: "magnet_bomb";
	}
>;
export type CombatMoveV0074MoveIronHead = CombatMove<
	"COMBAT_V0074_MOVE_IRON_HEAD",
	{
		energyDelta: -50;
		power: 70;
		type: "POKEMON_TYPE_STEEL";
		uniqueId: "IRON_HEAD";
		vfxName: "iron_head";
	}
>;
export type CombatMoveV0075MoveParabolicCharge = CombatMove<
	"COMBAT_V0075_MOVE_PARABOLIC_CHARGE",
	{
		buffs: {
			attackerDefenseStatStageChange: 1;
			buffActivationChance: 1;
		};
		energyDelta: -50;
		power: 70;
		type: "POKEMON_TYPE_ELECTRIC";
		uniqueId: "PARABOLIC_CHARGE";
		vfxName: "parabolic_charge";
	}
>;
export type CombatMoveV0077MoveThunderPunch = CombatMove<
	"COMBAT_V0077_MOVE_THUNDER_PUNCH",
	{
		energyDelta: -40;
		power: 60;
		type: "POKEMON_TYPE_ELECTRIC";
		uniqueId: "THUNDER_PUNCH";
		vfxName: "thunder_punch";
	}
>;
export type CombatMoveV0078MoveThunder = CombatMove<
	"COMBAT_V0078_MOVE_THUNDER",
	{
		energyDelta: -60;
		power: 100;
		type: "POKEMON_TYPE_ELECTRIC";
		uniqueId: "THUNDER";
		vfxName: "thunder";
	}
>;
export type CombatMoveV0079MoveThunderbolt = CombatMove<
	"COMBAT_V0079_MOVE_THUNDERBOLT",
	{
		energyDelta: -55;
		power: 90;
		type: "POKEMON_TYPE_ELECTRIC";
		uniqueId: "THUNDERBOLT";
		vfxName: "thunderbolt";
	}
>;
export type CombatMoveV0080MoveTwister = CombatMove<
	"COMBAT_V0080_MOVE_TWISTER",
	{
		energyDelta: -40;
		power: 70;
		type: "POKEMON_TYPE_DRAGON";
		uniqueId: "TWISTER";
		vfxName: "twister";
	}
>;
export type CombatMoveV0082MoveDragonPulse = CombatMove<
	"COMBAT_V0082_MOVE_DRAGON_PULSE",
	{
		energyDelta: -55;
		power: 90;
		type: "POKEMON_TYPE_DRAGON";
		uniqueId: "DRAGON_PULSE";
		vfxName: "dragon_pulse";
	}
>;
export type CombatMoveV0083MoveDragonClaw = CombatMove<
	"COMBAT_V0083_MOVE_DRAGON_CLAW",
	{
		energyDelta: -50;
		power: 80;
		type: "POKEMON_TYPE_DRAGON";
		uniqueId: "DRAGON_CLAW";
		vfxName: "dragon_claw";
	}
>;
export type CombatMoveV0084MoveDisarmingVoice = CombatMove<
	"COMBAT_V0084_MOVE_DISARMING_VOICE",
	{
		energyDelta: -45;
		power: 70;
		type: "POKEMON_TYPE_FAIRY";
		uniqueId: "DISARMING_VOICE";
		vfxName: "disarming_voice";
	}
>;
export type CombatMoveV0085MoveDrainingKiss = CombatMove<
	"COMBAT_V0085_MOVE_DRAINING_KISS",
	{
		energyDelta: -55;
		power: 60;
		type: "POKEMON_TYPE_FAIRY";
		uniqueId: "DRAINING_KISS";
		vfxName: "draining_kiss";
	}
>;
export type CombatMoveV0086MoveDazzlingGleam = CombatMove<
	"COMBAT_V0086_MOVE_DAZZLING_GLEAM",
	{
		energyDelta: -55;
		power: 90;
		type: "POKEMON_TYPE_FAIRY";
		uniqueId: "DAZZLING_GLEAM";
		vfxName: "dazzling_gleam";
	}
>;
export type CombatMoveV0087MoveMoonblast = CombatMove<
	"COMBAT_V0087_MOVE_MOONBLAST",
	{
		buffs: {
			buffActivationChance: 0.1;
			targetAttackStatStageChange: -1;
		};
		energyDelta: -60;
		power: 110;
		type: "POKEMON_TYPE_FAIRY";
		uniqueId: "MOONBLAST";
		vfxName: "moonblast";
	}
>;
export type CombatMoveV0088MovePlayRough = CombatMove<
	"COMBAT_V0088_MOVE_PLAY_ROUGH",
	{
		energyDelta: -60;
		power: 90;
		type: "POKEMON_TYPE_FAIRY";
		uniqueId: "PLAY_ROUGH";
		vfxName: "play_rough";
	}
>;
export type CombatMoveV0089MoveCrossPoison = CombatMove<
	"COMBAT_V0089_MOVE_CROSS_POISON",
	{
		buffs: {
			attackerAttackStatStageChange: 2;
			buffActivationChance: 0.125;
		};
		energyDelta: -35;
		power: 50;
		type: "POKEMON_TYPE_POISON";
		uniqueId: "CROSS_POISON";
		vfxName: "cross_poison";
	}
>;
export type CombatMoveV0090MoveSludgeBomb = CombatMove<
	"COMBAT_V0090_MOVE_SLUDGE_BOMB",
	{
		energyDelta: -50;
		power: 80;
		type: "POKEMON_TYPE_POISON";
		uniqueId: "SLUDGE_BOMB";
		vfxName: "sludge_bomb";
	}
>;
export type CombatMoveV0091MoveSludgeWave = CombatMove<
	"COMBAT_V0091_MOVE_SLUDGE_WAVE",
	{
		energyDelta: -65;
		power: 110;
		type: "POKEMON_TYPE_POISON";
		uniqueId: "SLUDGE_WAVE";
		vfxName: "sludge_wave";
	}
>;
export type CombatMoveV0092MoveGunkShot = CombatMove<
	"COMBAT_V0092_MOVE_GUNK_SHOT",
	{
		energyDelta: -75;
		power: 130;
		type: "POKEMON_TYPE_POISON";
		uniqueId: "GUNK_SHOT";
		vfxName: "gunk_shot";
	}
>;
export type CombatMoveV0094MoveBoneClub = CombatMove<
	"COMBAT_V0094_MOVE_BONE_CLUB",
	{
		energyDelta: -35;
		power: 55;
		type: "POKEMON_TYPE_GROUND";
		uniqueId: "BONE_CLUB";
		vfxName: "bone_club";
	}
>;
export type CombatMoveV0095MoveBulldoze = CombatMove<
	"COMBAT_V0095_MOVE_BULLDOZE",
	{
		buffs: {
			buffActivationChance: 0.5;
			targetDefenseStatStageChange: -1;
		};
		energyDelta: -45;
		power: 45;
		type: "POKEMON_TYPE_GROUND";
		uniqueId: "BULLDOZE";
		vfxName: "bulldoze";
	}
>;
export type CombatMoveV0096MoveMudBomb = CombatMove<
	"COMBAT_V0096_MOVE_MUD_BOMB",
	{
		energyDelta: -45;
		power: 65;
		type: "POKEMON_TYPE_GROUND";
		uniqueId: "MUD_BOMB";
		vfxName: "mud_bomb";
	}
>;
export type CombatMoveV0099MoveSignalBeam = CombatMove<
	"COMBAT_V0099_MOVE_SIGNAL_BEAM",
	{
		buffs: {
			buffActivationChance: 0.2;
			targetAttackStatStageChange: -1;
			targetDefenseStatStageChange: -1;
		};
		energyDelta: -55;
		power: 75;
		type: "POKEMON_TYPE_BUG";
		uniqueId: "SIGNAL_BEAM";
		vfxName: "signal_beam";
	}
>;
export type CombatMoveV0100MoveXScissor = CombatMove<
	"COMBAT_V0100_MOVE_X_SCISSOR",
	{
		energyDelta: -40;
		power: 65;
		type: "POKEMON_TYPE_BUG";
		uniqueId: "X_SCISSOR";
		vfxName: "x_scissor";
	}
>;
export type CombatMoveV0101MoveFlameCharge = CombatMove<
	"COMBAT_V0101_MOVE_FLAME_CHARGE",
	{
		buffs: {
			attackerAttackStatStageChange: 1;
			buffActivationChance: 1;
		};
		energyDelta: -50;
		power: 65;
		type: "POKEMON_TYPE_FIRE";
		uniqueId: "FLAME_CHARGE";
		vfxName: "flame_charge";
	}
>;
export type CombatMoveV0102MoveFlameBurst = CombatMove<
	"COMBAT_V0102_MOVE_FLAME_BURST",
	{
		energyDelta: -55;
		power: 70;
		type: "POKEMON_TYPE_FIRE";
		uniqueId: "FLAME_BURST";
		vfxName: "flame_burst";
	}
>;
export type CombatMoveV0103MoveFireBlast = CombatMove<
	"COMBAT_V0103_MOVE_FIRE_BLAST",
	{
		energyDelta: -80;
		power: 140;
		type: "POKEMON_TYPE_FIRE";
		uniqueId: "FIRE_BLAST";
		vfxName: "fire_blast";
	}
>;
export type CombatMoveV0104MoveBrine = CombatMove<
	"COMBAT_V0104_MOVE_BRINE",
	{
		energyDelta: -50;
		power: 60;
		type: "POKEMON_TYPE_WATER";
		uniqueId: "BRINE";
		vfxName: "brine";
	}
>;
export type CombatMoveV0105MoveWaterPulse = CombatMove<
	"COMBAT_V0105_MOVE_WATER_PULSE",
	{
		energyDelta: -50;
		power: 80;
		type: "POKEMON_TYPE_WATER";
		uniqueId: "WATER_PULSE";
		vfxName: "water_pulse";
	}
>;
export type CombatMoveV0106MoveScald = CombatMove<
	"COMBAT_V0106_MOVE_SCALD",
	{
		buffs: {
			buffActivationChance: 0.3;
			targetAttackStatStageChange: -1;
		};
		energyDelta: -50;
		power: 85;
		type: "POKEMON_TYPE_WATER";
		uniqueId: "SCALD";
		vfxName: "scald";
	}
>;
export type CombatMoveV0107MoveHydroPump = CombatMove<
	"COMBAT_V0107_MOVE_HYDRO_PUMP",
	{
		energyDelta: -75;
		power: 130;
		type: "POKEMON_TYPE_WATER";
		uniqueId: "HYDRO_PUMP";
		vfxName: "hydro_pump";
	}
>;
export type CombatMoveV0108MovePsychic = CombatMove<
	"COMBAT_V0108_MOVE_PSYCHIC",
	{
		buffs: {
			buffActivationChance: 0.1;
			targetDefenseStatStageChange: -1;
		};
		energyDelta: -55;
		power: 75;
		type: "POKEMON_TYPE_PSYCHIC";
		uniqueId: "PSYCHIC";
		vfxName: "psychic";
	}
>;
export type CombatMoveV0109MovePsystrike = CombatMove<
	"COMBAT_V0109_MOVE_PSYSTRIKE",
	{
		energyDelta: -45;
		power: 90;
		type: "POKEMON_TYPE_PSYCHIC";
		uniqueId: "PSYSTRIKE";
		vfxName: "psystrike";
	}
>;
export type CombatMoveV0111MoveIcyWind = CombatMove<
	"COMBAT_V0111_MOVE_ICY_WIND",
	{
		buffs: {
			buffActivationChance: 1;
			targetAttackStatStageChange: -1;
		};
		energyDelta: -45;
		power: 60;
		type: "POKEMON_TYPE_ICE";
		uniqueId: "ICY_WIND";
		vfxName: "icy_wind";
	}
>;
export type CombatMoveV0114MoveGigaDrain = CombatMove<
	"COMBAT_V0114_MOVE_GIGA_DRAIN",
	{
		energyDelta: -80;
		power: 50;
		type: "POKEMON_TYPE_GRASS";
		uniqueId: "GIGA_DRAIN";
		vfxName: "giga_drain";
	}
>;
export type CombatMoveV0115MoveFirePunch = CombatMove<
	"COMBAT_V0115_MOVE_FIRE_PUNCH",
	{
		energyDelta: -40;
		power: 60;
		type: "POKEMON_TYPE_FIRE";
		uniqueId: "FIRE_PUNCH";
		vfxName: "fire_punch";
	}
>;
export type CombatMoveV0116MoveSolarBeam = CombatMove<
	"COMBAT_V0116_MOVE_SOLAR_BEAM",
	{
		energyDelta: -80;
		power: 150;
		type: "POKEMON_TYPE_GRASS";
		uniqueId: "SOLAR_BEAM";
		vfxName: "solar_beam";
	}
>;
export type CombatMoveV0117MoveLeafBlade = CombatMove<
	"COMBAT_V0117_MOVE_LEAF_BLADE",
	{
		energyDelta: -35;
		power: 70;
		type: "POKEMON_TYPE_GRASS";
		uniqueId: "LEAF_BLADE";
		vfxName: "leaf_blade";
	}
>;
export type CombatMoveV0118MovePowerWhip = CombatMove<
	"COMBAT_V0118_MOVE_POWER_WHIP",
	{
		energyDelta: -50;
		power: 90;
		type: "POKEMON_TYPE_GRASS";
		uniqueId: "POWER_WHIP";
		vfxName: "power_whip";
	}
>;
export type CombatMoveV0121MoveAirCutter = CombatMove<
	"COMBAT_V0121_MOVE_AIR_CUTTER",
	{
		buffs: {
			attackerAttackStatStageChange: 1;
			buffActivationChance: 0.3;
		};
		energyDelta: -35;
		power: 45;
		type: "POKEMON_TYPE_FLYING";
		uniqueId: "AIR_CUTTER";
		vfxName: "air_cutter";
	}
>;
export type CombatMoveV0122MoveHurricane = CombatMove<
	"COMBAT_V0122_MOVE_HURRICANE",
	{
		energyDelta: -65;
		power: 110;
		type: "POKEMON_TYPE_FLYING";
		uniqueId: "HURRICANE";
		vfxName: "hurricane";
	}
>;
export type CombatMoveV0123MoveBrickBreak = CombatMove<
	"COMBAT_V0123_MOVE_BRICK_BREAK",
	{
		buffs: {
			buffActivationChance: 1;
			targetDefenseStatStageChange: -1;
		};
		energyDelta: -40;
		power: 50;
		type: "POKEMON_TYPE_FIGHTING";
		uniqueId: "BRICK_BREAK";
		vfxName: "brick_break";
	}
>;
export type CombatMoveV0125MoveSwift = CombatMove<
	"COMBAT_V0125_MOVE_SWIFT",
	{
		energyDelta: -35;
		power: 55;
		type: "POKEMON_TYPE_NORMAL";
		uniqueId: "SWIFT";
		vfxName: "swift";
	}
>;
export type CombatMoveV0126MoveHornAttack = CombatMove<
	"COMBAT_V0126_MOVE_HORN_ATTACK",
	{
		energyDelta: -35;
		power: 40;
		type: "POKEMON_TYPE_NORMAL";
		uniqueId: "HORN_ATTACK";
		vfxName: "horn_attack";
	}
>;
export type CombatMoveV0127MoveStomp = CombatMove<
	"COMBAT_V0127_MOVE_STOMP",
	{
		energyDelta: -40;
		power: 55;
		type: "POKEMON_TYPE_NORMAL";
		uniqueId: "STOMP";
		vfxName: "stomp";
	}
>;
export type CombatMoveV0129MoveHyperFang = CombatMove<
	"COMBAT_V0129_MOVE_HYPER_FANG",
	{
		energyDelta: -50;
		power: 80;
		type: "POKEMON_TYPE_NORMAL";
		uniqueId: "HYPER_FANG";
		vfxName: "hyper_fang";
	}
>;
export type CombatMoveV0131MoveBodySlam = CombatMove<
	"COMBAT_V0131_MOVE_BODY_SLAM",
	{
		energyDelta: -35;
		power: 55;
		type: "POKEMON_TYPE_NORMAL";
		uniqueId: "BODY_SLAM";
		vfxName: "body_slam";
	}
>;
export type CombatMoveV0132MoveRest = CombatMove<
	"COMBAT_V0132_MOVE_REST",
	{
		energyDelta: -35;
		power: 50;
		type: "POKEMON_TYPE_NORMAL";
		uniqueId: "REST";
		vfxName: "rest";
	}
>;
export type CombatMoveV0133MoveStruggle = CombatMove<
	"COMBAT_V0133_MOVE_STRUGGLE",
	{
		energyDelta: -100;
		power: 35;
		type: "POKEMON_TYPE_NORMAL";
		uniqueId: "STRUGGLE";
		vfxName: "struggle";
	}
>;
export type CombatMoveV0134MoveScaldBlastoise = CombatMove<
	"COMBAT_V0134_MOVE_SCALD_BLASTOISE",
	{
		energyDelta: -80;
		power: 50;
		type: "POKEMON_TYPE_WATER";
		uniqueId: "SCALD_BLASTOISE";
		vfxName: "scald_blastoise";
	}
>;
export type CombatMoveV0135MoveHydroPumpBlastoise = CombatMove<
	"COMBAT_V0135_MOVE_HYDRO_PUMP_BLASTOISE",
	{
		energyDelta: -80;
		power: 90;
		type: "POKEMON_TYPE_WATER";
		uniqueId: "HYDRO_PUMP_BLASTOISE";
		vfxName: "hydro_pump_blastoise";
	}
>;
export type CombatMoveV0136MoveWrapGreen = CombatMove<
	"COMBAT_V0136_MOVE_WRAP_GREEN",
	{
		energyDelta: -45;
		power: 25;
		type: "POKEMON_TYPE_NORMAL";
		uniqueId: "WRAP_GREEN";
		vfxName: "wrap_green";
	}
>;
export type CombatMoveV0137MoveWrapPink = CombatMove<
	"COMBAT_V0137_MOVE_WRAP_PINK",
	{
		energyDelta: -45;
		power: 25;
		type: "POKEMON_TYPE_NORMAL";
		uniqueId: "WRAP_PINK";
		vfxName: "wrap_pink";
	}
>;
export type CombatMoveV0200MoveFuryCutterFast = CombatMove<
	"COMBAT_V0200_MOVE_FURY_CUTTER_FAST",
	{
		energyDelta: 4;
		power: 3;
		type: "POKEMON_TYPE_BUG";
		uniqueId: "FURY_CUTTER_FAST";
		vfxName: "fury_cutter_fast";
	}
>;
export type CombatMoveV0201MoveBugBiteFast = CombatMove<
	"COMBAT_V0201_MOVE_BUG_BITE_FAST",
	{
		energyDelta: 3;
		power: 4;
		type: "POKEMON_TYPE_BUG";
		uniqueId: "BUG_BITE_FAST";
		vfxName: "bug_bite_fast";
	}
>;
export type CombatMoveV0202MoveBiteFast = CombatMove<
	"COMBAT_V0202_MOVE_BITE_FAST",
	{
		energyDelta: 2;
		power: 4;
		type: "POKEMON_TYPE_DARK";
		uniqueId: "BITE_FAST";
		vfxName: "bite_fast";
	}
>;
export type CombatMoveV0203MoveSuckerPunchFast = CombatMove<
	"COMBAT_V0203_MOVE_SUCKER_PUNCH_FAST",
	{
		durationTurns: 1;
		energyDelta: 7;
		power: 8;
		type: "POKEMON_TYPE_DARK";
		uniqueId: "SUCKER_PUNCH_FAST";
		vfxName: "sucker_punch_fast";
	}
>;
export type CombatMoveV0204MoveDragonBreathFast = CombatMove<
	"COMBAT_V0204_MOVE_DRAGON_BREATH_FAST",
	{
		energyDelta: 4;
		power: 3;
		type: "POKEMON_TYPE_DRAGON";
		uniqueId: "DRAGON_BREATH_FAST";
		vfxName: "dragon_breath_fast";
	}
>;
export type CombatMoveV0205MoveThunderShockFast = CombatMove<
	"COMBAT_V0205_MOVE_THUNDER_SHOCK_FAST",
	{
		durationTurns: 1;
		energyDelta: 9;
		power: 4;
		type: "POKEMON_TYPE_ELECTRIC";
		uniqueId: "THUNDER_SHOCK_FAST";
		vfxName: "thunder_shock_fast";
	}
>;
export type CombatMoveV0206MoveSparkFast = CombatMove<
	"COMBAT_V0206_MOVE_SPARK_FAST",
	{
		durationTurns: 1;
		energyDelta: 7;
		power: 5;
		type: "POKEMON_TYPE_ELECTRIC";
		uniqueId: "SPARK_FAST";
		vfxName: "spark_fast";
	}
>;
export type CombatMoveV0207MoveLowKickFast = CombatMove<
	"COMBAT_V0207_MOVE_LOW_KICK_FAST",
	{
		durationTurns: 1;
		energyDelta: 8;
		power: 5;
		type: "POKEMON_TYPE_FIGHTING";
		uniqueId: "LOW_KICK_FAST";
		vfxName: "low_kick_fast";
	}
>;
export type CombatMoveV0208MoveKarateChopFast = CombatMove<
	"COMBAT_V0208_MOVE_KARATE_CHOP_FAST",
	{
		durationTurns: 1;
		energyDelta: 9;
		power: 5;
		type: "POKEMON_TYPE_FIGHTING";
		uniqueId: "KARATE_CHOP_FAST";
		vfxName: "karate_chop_fast";
	}
>;
export type CombatMoveV0209MoveEmberFast = CombatMove<
	"COMBAT_V0209_MOVE_EMBER_FAST",
	{
		durationTurns: 1;
		energyDelta: 9;
		power: 4;
		type: "POKEMON_TYPE_FIRE";
		uniqueId: "EMBER_FAST";
		vfxName: "ember_fast";
	}
>;
export type CombatMoveV0210MoveWingAttackFast = CombatMove<
	"COMBAT_V0210_MOVE_WING_ATTACK_FAST",
	{
		durationTurns: 1;
		energyDelta: 8;
		power: 5;
		type: "POKEMON_TYPE_FLYING";
		uniqueId: "WING_ATTACK_FAST";
		vfxName: "wing_attack_fast";
	}
>;
export type CombatMoveV0211MovePeckFast = CombatMove<
	"COMBAT_V0211_MOVE_PECK_FAST",
	{
		durationTurns: 1;
		energyDelta: 8;
		power: 6;
		type: "POKEMON_TYPE_FLYING";
		uniqueId: "PECK_FAST";
		vfxName: "peck_fast";
	}
>;
export type CombatMoveV0212MoveLickFast = CombatMove<
	"COMBAT_V0212_MOVE_LICK_FAST",
	{
		energyDelta: 3;
		power: 3;
		type: "POKEMON_TYPE_GHOST";
		uniqueId: "LICK_FAST";
		vfxName: "lick_fast";
	}
>;
export type CombatMoveV0213MoveShadowClawFast = CombatMove<
	"COMBAT_V0213_MOVE_SHADOW_CLAW_FAST",
	{
		durationTurns: 1;
		energyDelta: 8;
		power: 6;
		type: "POKEMON_TYPE_GHOST";
		uniqueId: "SHADOW_CLAW_FAST";
		vfxName: "shadow_claw_fast";
	}
>;
export type CombatMoveV0214MoveVineWhipFast = CombatMove<
	"COMBAT_V0214_MOVE_VINE_WHIP_FAST",
	{
		durationTurns: 1;
		energyDelta: 8;
		power: 5;
		type: "POKEMON_TYPE_GRASS";
		uniqueId: "VINE_WHIP_FAST";
		vfxName: "vine_whip_fast";
	}
>;
export type CombatMoveV0215MoveRazorLeafFast = CombatMove<
	"COMBAT_V0215_MOVE_RAZOR_LEAF_FAST",
	{
		durationTurns: 1;
		energyDelta: 4;
		power: 9;
		type: "POKEMON_TYPE_GRASS";
		uniqueId: "RAZOR_LEAF_FAST";
		vfxName: "razor_leaf_fast";
	}
>;
export type CombatMoveV0216MoveMudShotFast = CombatMove<
	"COMBAT_V0216_MOVE_MUD_SHOT_FAST",
	{
		durationTurns: 1;
		energyDelta: 9;
		power: 3;
		type: "POKEMON_TYPE_GROUND";
		uniqueId: "MUD_SHOT_FAST";
		vfxName: "mud_shot_fast";
	}
>;
export type CombatMoveV0217MoveIceShardFast = CombatMove<
	"COMBAT_V0217_MOVE_ICE_SHARD_FAST",
	{
		durationTurns: 2;
		energyDelta: 10;
		power: 9;
		type: "POKEMON_TYPE_ICE";
		uniqueId: "ICE_SHARD_FAST";
		vfxName: "ice_shard_fast";
	}
>;
export type CombatMoveV0218MoveFrostBreathFast = CombatMove<
	"COMBAT_V0218_MOVE_FROST_BREATH_FAST",
	{
		durationTurns: 1;
		energyDelta: 5;
		power: 7;
		type: "POKEMON_TYPE_ICE";
		uniqueId: "FROST_BREATH_FAST";
		vfxName: "frost_breath_fast";
	}
>;
export type CombatMoveV0219MoveQuickAttackFast = CombatMove<
	"COMBAT_V0219_MOVE_QUICK_ATTACK_FAST",
	{
		durationTurns: 1;
		energyDelta: 8;
		power: 5;
		type: "POKEMON_TYPE_NORMAL";
		uniqueId: "QUICK_ATTACK_FAST";
		vfxName: "quick_attack_fast";
	}
>;
export type CombatMoveV0220MoveScratchFast = CombatMove<
	"COMBAT_V0220_MOVE_SCRATCH_FAST",
	{
		energyDelta: 2;
		power: 4;
		type: "POKEMON_TYPE_NORMAL";
		uniqueId: "SCRATCH_FAST";
		vfxName: "scratch_fast";
	}
>;
export type CombatMoveV0221MoveTackleFast = CombatMove<
	"COMBAT_V0221_MOVE_TACKLE_FAST",
	{
		energyDelta: 3;
		power: 3;
		type: "POKEMON_TYPE_NORMAL";
		uniqueId: "TACKLE_FAST";
		vfxName: "tackle_fast";
	}
>;
export type CombatMoveV0222MovePoundFast = CombatMove<
	"COMBAT_V0222_MOVE_POUND_FAST",
	{
		durationTurns: 1;
		energyDelta: 4;
		power: 4;
		type: "POKEMON_TYPE_NORMAL";
		uniqueId: "POUND_FAST";
		vfxName: "pound_fast";
	}
>;
export type CombatMoveV0223MoveCutFast = CombatMove<
	"COMBAT_V0223_MOVE_CUT_FAST",
	{
		energyDelta: 2;
		power: 3;
		type: "POKEMON_TYPE_NORMAL";
		uniqueId: "CUT_FAST";
		vfxName: "cut_fast";
	}
>;
export type CombatMoveV0224MovePoisonJabFast = CombatMove<
	"COMBAT_V0224_MOVE_POISON_JAB_FAST",
	{
		durationTurns: 1;
		energyDelta: 7;
		power: 7;
		type: "POKEMON_TYPE_POISON";
		uniqueId: "POISON_JAB_FAST";
		vfxName: "poison_jab_fast";
	}
>;
export type CombatMoveV0225MoveAcidFast = CombatMove<
	"COMBAT_V0225_MOVE_ACID_FAST",
	{
		durationTurns: 1;
		energyDelta: 8;
		power: 6;
		type: "POKEMON_TYPE_POISON";
		uniqueId: "ACID_FAST";
		vfxName: "acid_fast";
	}
>;
export type CombatMoveV0226MovePsychoCutFast = CombatMove<
	"COMBAT_V0226_MOVE_PSYCHO_CUT_FAST",
	{
		durationTurns: 1;
		energyDelta: 9;
		power: 4;
		type: "POKEMON_TYPE_PSYCHIC";
		uniqueId: "PSYCHO_CUT_FAST";
		vfxName: "psycho_cut_fast";
	}
>;
export type CombatMoveV0227MoveRockThrowFast = CombatMove<
	"COMBAT_V0227_MOVE_ROCK_THROW_FAST",
	{
		durationTurns: 1;
		energyDelta: 5;
		power: 8;
		type: "POKEMON_TYPE_ROCK";
		uniqueId: "ROCK_THROW_FAST";
		vfxName: "rock_throw_fast";
	}
>;
export type CombatMoveV0228MoveMetalClawFast = CombatMove<
	"COMBAT_V0228_MOVE_METAL_CLAW_FAST",
	{
		durationTurns: 1;
		energyDelta: 7;
		power: 5;
		type: "POKEMON_TYPE_STEEL";
		uniqueId: "METAL_CLAW_FAST";
		vfxName: "metal_claw_fast";
	}
>;
export type CombatMoveV0229MoveBulletPunchFast = CombatMove<
	"COMBAT_V0229_MOVE_BULLET_PUNCH_FAST",
	{
		durationTurns: 1;
		energyDelta: 7;
		power: 7;
		type: "POKEMON_TYPE_STEEL";
		uniqueId: "BULLET_PUNCH_FAST";
		vfxName: "bullet_punch_fast";
	}
>;
export type CombatMoveV0230MoveWaterGunFast = CombatMove<
	"COMBAT_V0230_MOVE_WATER_GUN_FAST",
	{
		energyDelta: 3;
		power: 3;
		type: "POKEMON_TYPE_WATER";
		uniqueId: "WATER_GUN_FAST";
		vfxName: "water_gun_fast";
	}
>;
export type CombatMoveV0231MoveSplashFast = CombatMove<
	"COMBAT_V0231_MOVE_SPLASH_FAST",
	{
		durationTurns: 3;
		energyDelta: 12;
		type: "POKEMON_TYPE_WATER";
		uniqueId: "SPLASH_FAST";
		vfxName: "splash_fast";
	}
>;
export type CombatMoveV0232MoveWaterGunFastBlastoise = CombatMove<
	"COMBAT_V0232_MOVE_WATER_GUN_FAST_BLASTOISE",
	{
		durationTurns: 1;
		energyDelta: 4;
		power: 6;
		type: "POKEMON_TYPE_WATER";
		uniqueId: "WATER_GUN_FAST_BLASTOISE";
		vfxName: "water_gun_fast_blastoise";
	}
>;
export type CombatMoveV0233MoveMudSlapFast = CombatMove<
	"COMBAT_V0233_MOVE_MUD_SLAP_FAST",
	{
		durationTurns: 2;
		energyDelta: 10;
		power: 11;
		type: "POKEMON_TYPE_GROUND";
		uniqueId: "MUD_SLAP_FAST";
		vfxName: "mud_slap_fast";
	}
>;
export type CombatMoveV0234MoveZenHeadbuttFast = CombatMove<
	"COMBAT_V0234_MOVE_ZEN_HEADBUTT_FAST",
	{
		durationTurns: 2;
		energyDelta: 6;
		power: 8;
		type: "POKEMON_TYPE_PSYCHIC";
		uniqueId: "ZEN_HEADBUTT_FAST";
		vfxName: "zen_headbutt_fast";
	}
>;
export type CombatMoveV0235MoveConfusionFast = CombatMove<
	"COMBAT_V0235_MOVE_CONFUSION_FAST",
	{
		durationTurns: 3;
		energyDelta: 14;
		power: 16;
		type: "POKEMON_TYPE_PSYCHIC";
		uniqueId: "CONFUSION_FAST";
		vfxName: "confusion_fast";
	}
>;
export type CombatMoveV0236MovePoisonStingFast = CombatMove<
	"COMBAT_V0236_MOVE_POISON_STING_FAST",
	{
		durationTurns: 1;
		energyDelta: 9;
		power: 4;
		type: "POKEMON_TYPE_POISON";
		uniqueId: "POISON_STING_FAST";
		vfxName: "poison_sting_fast";
	}
>;
export type CombatMoveV0237MoveBubbleFast = CombatMove<
	"COMBAT_V0237_MOVE_BUBBLE_FAST",
	{
		durationTurns: 2;
		energyDelta: 11;
		power: 8;
		type: "POKEMON_TYPE_WATER";
		uniqueId: "BUBBLE_FAST";
		vfxName: "bubble_fast";
	}
>;
export type CombatMoveV0238MoveFeintAttackFast = CombatMove<
	"COMBAT_V0238_MOVE_FEINT_ATTACK_FAST",
	{
		durationTurns: 1;
		energyDelta: 6;
		power: 6;
		type: "POKEMON_TYPE_DARK";
		uniqueId: "FEINT_ATTACK_FAST";
		vfxName: "feint_attack_fast";
	}
>;
export type CombatMoveV0239MoveSteelWingFast = CombatMove<
	"COMBAT_V0239_MOVE_STEEL_WING_FAST",
	{
		durationTurns: 1;
		energyDelta: 5;
		power: 7;
		type: "POKEMON_TYPE_STEEL";
		uniqueId: "STEEL_WING_FAST";
		vfxName: "steel_wing_fast";
	}
>;
export type CombatMoveV0240MoveFireFangFast = CombatMove<
	"COMBAT_V0240_MOVE_FIRE_FANG_FAST",
	{
		durationTurns: 1;
		energyDelta: 6;
		power: 8;
		type: "POKEMON_TYPE_FIRE";
		uniqueId: "FIRE_FANG_FAST";
		vfxName: "fire_fang_fast";
	}
>;
export type CombatMoveV0241MoveRockSmashFast = CombatMove<
	"COMBAT_V0241_MOVE_ROCK_SMASH_FAST",
	{
		durationTurns: 2;
		energyDelta: 7;
		power: 9;
		type: "POKEMON_TYPE_FIGHTING";
		uniqueId: "ROCK_SMASH_FAST";
		vfxName: "rock_smash_fast";
	}
>;
export type CombatMoveV0242MoveTransformFast = CombatMove<
	"COMBAT_V0242_MOVE_TRANSFORM_FAST",
	{
		durationTurns: 2;
		type: "POKEMON_TYPE_NORMAL";
		uniqueId: "TRANSFORM_FAST";
		vfxName: "transform_fast";
	}
>;
export type CombatMoveV0243MoveCounterFast = CombatMove<
	"COMBAT_V0243_MOVE_COUNTER_FAST",
	{
		durationTurns: 1;
		energyDelta: 6;
		power: 8;
		type: "POKEMON_TYPE_FIGHTING";
		uniqueId: "COUNTER_FAST";
		vfxName: "counter_fast";
	}
>;
export type CombatMoveV0244MovePowderSnowFast = CombatMove<
	"COMBAT_V0244_MOVE_POWDER_SNOW_FAST",
	{
		durationTurns: 1;
		energyDelta: 8;
		power: 6;
		type: "POKEMON_TYPE_ICE";
		uniqueId: "POWDER_SNOW_FAST";
		vfxName: "powder_snow_fast";
	}
>;
export type CombatMoveV0245MoveCloseCombat = CombatMove<
	"COMBAT_V0245_MOVE_CLOSE_COMBAT",
	{
		buffs: {
			attackerDefenseStatStageChange: -2;
			buffActivationChance: 1;
		};
		energyDelta: -45;
		power: 100;
		type: "POKEMON_TYPE_FIGHTING";
		uniqueId: "CLOSE_COMBAT";
		vfxName: "close_combat";
	}
>;
export type CombatMoveV0246MoveDynamicPunch = CombatMove<
	"COMBAT_V0246_MOVE_DYNAMIC_PUNCH",
	{
		energyDelta: -45;
		power: 90;
		type: "POKEMON_TYPE_FIGHTING";
		uniqueId: "DYNAMIC_PUNCH";
		vfxName: "dynamic_punch";
	}
>;
export type CombatMoveV0247MoveFocusBlast = CombatMove<
	"COMBAT_V0247_MOVE_FOCUS_BLAST",
	{
		energyDelta: -75;
		power: 150;
		type: "POKEMON_TYPE_FIGHTING";
		uniqueId: "FOCUS_BLAST";
		vfxName: "focus_blast";
	}
>;
export type CombatMoveV0248MoveAuroraBeam = CombatMove<
	"COMBAT_V0248_MOVE_AURORA_BEAM",
	{
		energyDelta: -60;
		power: 80;
		type: "POKEMON_TYPE_ICE";
		uniqueId: "AURORA_BEAM";
		vfxName: "aurora_beam";
	}
>;
export type CombatMoveV0249MoveChargeBeamFast = CombatMove<
	"COMBAT_V0249_MOVE_CHARGE_BEAM_FAST",
	{
		durationTurns: 2;
		energyDelta: 11;
		power: 5;
		type: "POKEMON_TYPE_ELECTRIC";
		uniqueId: "CHARGE_BEAM_FAST";
		vfxName: "charge_beam_fast";
	}
>;
export type CombatMoveV0250MoveVoltSwitchFast = CombatMove<
	"COMBAT_V0250_MOVE_VOLT_SWITCH_FAST",
	{
		durationTurns: 3;
		energyDelta: 16;
		power: 14;
		type: "POKEMON_TYPE_ELECTRIC";
		uniqueId: "VOLT_SWITCH_FAST";
		vfxName: "volt_switch_fast";
	}
>;
export type CombatMoveV0251MoveWildCharge = CombatMove<
	"COMBAT_V0251_MOVE_WILD_CHARGE",
	{
		buffs: {
			attackerDefenseStatStageChange: -2;
			buffActivationChance: 1;
		};
		energyDelta: -45;
		power: 100;
		type: "POKEMON_TYPE_ELECTRIC";
		uniqueId: "WILD_CHARGE";
		vfxName: "wild_charge";
	}
>;
export type CombatMoveV0252MoveZapCannon = CombatMove<
	"COMBAT_V0252_MOVE_ZAP_CANNON",
	{
		buffs: {
			buffActivationChance: 0.33;
			targetAttackStatStageChange: -1;
		};
		energyDelta: -80;
		power: 150;
		type: "POKEMON_TYPE_ELECTRIC";
		uniqueId: "ZAP_CANNON";
		vfxName: "zap_cannon";
	}
>;
export type CombatMoveV0253MoveDragonTailFast = CombatMove<
	"COMBAT_V0253_MOVE_DRAGON_TAIL_FAST",
	{
		durationTurns: 2;
		energyDelta: 12;
		power: 9;
		type: "POKEMON_TYPE_DRAGON";
		uniqueId: "DRAGON_TAIL_FAST";
		vfxName: "dragon_tail_fast";
	}
>;
export type CombatMoveV0254MoveAvalanche = CombatMove<
	"COMBAT_V0254_MOVE_AVALANCHE",
	{
		energyDelta: -45;
		power: 90;
		type: "POKEMON_TYPE_ICE";
		uniqueId: "AVALANCHE";
		vfxName: "avalanche";
	}
>;
export type CombatMoveV0255MoveAirSlashFast = CombatMove<
	"COMBAT_V0255_MOVE_AIR_SLASH_FAST",
	{
		durationTurns: 2;
		energyDelta: 9;
		power: 9;
		type: "POKEMON_TYPE_FLYING";
		uniqueId: "AIR_SLASH_FAST";
		vfxName: "air_slash_fast";
	}
>;
export type CombatMoveV0256MoveBraveBird = CombatMove<
	"COMBAT_V0256_MOVE_BRAVE_BIRD",
	{
		buffs: {
			attackerDefenseStatStageChange: -3;
			buffActivationChance: 1;
		};
		energyDelta: -55;
		power: 130;
		type: "POKEMON_TYPE_FLYING";
		uniqueId: "BRAVE_BIRD";
		vfxName: "brave_bird";
	}
>;
export type CombatMoveV0257MoveSkyAttack = CombatMove<
	"COMBAT_V0257_MOVE_SKY_ATTACK",
	{
		energyDelta: -50;
		power: 75;
		type: "POKEMON_TYPE_FLYING";
		uniqueId: "SKY_ATTACK";
		vfxName: "sky_attack";
	}
>;
export type CombatMoveV0258MoveSandTomb = CombatMove<
	"COMBAT_V0258_MOVE_SAND_TOMB",
	{
		buffs: {
			buffActivationChance: 1;
			targetDefenseStatStageChange: -1;
		};
		energyDelta: -40;
		power: 40;
		type: "POKEMON_TYPE_GROUND";
		uniqueId: "SAND_TOMB";
		vfxName: "sand_tomb";
	}
>;
export type CombatMoveV0259MoveRockBlast = CombatMove<
	"COMBAT_V0259_MOVE_ROCK_BLAST",
	{
		energyDelta: -40;
		power: 50;
		type: "POKEMON_TYPE_ROCK";
		uniqueId: "ROCK_BLAST";
		vfxName: "rock_blast";
	}
>;
export type CombatMoveV0260MoveInfestationFast = CombatMove<
	"COMBAT_V0260_MOVE_INFESTATION_FAST",
	{
		durationTurns: 2;
		energyDelta: 12;
		power: 6;
		type: "POKEMON_TYPE_BUG";
		uniqueId: "INFESTATION_FAST";
		vfxName: "infestation_fast";
	}
>;
export type CombatMoveV0261MoveStruggleBugFast = CombatMove<
	"COMBAT_V0261_MOVE_STRUGGLE_BUG_FAST",
	{
		durationTurns: 2;
		energyDelta: 8;
		power: 9;
		type: "POKEMON_TYPE_BUG";
		uniqueId: "STRUGGLE_BUG_FAST";
		vfxName: "struggle_bug_fast";
	}
>;
export type CombatMoveV0262MoveSilverWind = CombatMove<
	"COMBAT_V0262_MOVE_SILVER_WIND",
	{
		buffs: {
			attackerAttackStatStageChange: 1;
			attackerDefenseStatStageChange: 1;
			buffActivationChance: 0.1;
		};
		energyDelta: -45;
		power: 60;
		type: "POKEMON_TYPE_BUG";
		uniqueId: "SILVER_WIND";
		vfxName: "silver_wind";
	}
>;
export type CombatMoveV0263MoveAstonishFast = CombatMove<
	"COMBAT_V0263_MOVE_ASTONISH_FAST",
	{
		durationTurns: 2;
		energyDelta: 10;
		power: 12;
		type: "POKEMON_TYPE_GHOST";
		uniqueId: "ASTONISH_FAST";
		vfxName: "astonish_fast";
	}
>;
export type CombatMoveV0264MoveHexFast = CombatMove<
	"COMBAT_V0264_MOVE_HEX_FAST",
	{
		durationTurns: 2;
		energyDelta: 13;
		power: 7;
		type: "POKEMON_TYPE_GHOST";
		uniqueId: "HEX_FAST";
		vfxName: "hex_fast";
	}
>;
export type CombatMoveV0265MoveNightShade = CombatMove<
	"COMBAT_V0265_MOVE_NIGHT_SHADE",
	{
		energyDelta: -45;
		power: 70;
		type: "POKEMON_TYPE_GHOST";
		uniqueId: "NIGHT_SHADE";
		vfxName: "night_shade";
	}
>;
export type CombatMoveV0266MoveIronTailFast = CombatMove<
	"COMBAT_V0266_MOVE_IRON_TAIL_FAST",
	{
		durationTurns: 2;
		energyDelta: 7;
		power: 10;
		type: "POKEMON_TYPE_STEEL";
		uniqueId: "IRON_TAIL_FAST";
		vfxName: "iron_tail_fast";
	}
>;
export type CombatMoveV0267MoveGyroBall = CombatMove<
	"COMBAT_V0267_MOVE_GYRO_BALL",
	{
		energyDelta: -50;
		power: 80;
		type: "POKEMON_TYPE_STEEL";
		uniqueId: "GYRO_BALL";
		vfxName: "gyro_ball";
	}
>;
export type CombatMoveV0268MoveHeavySlam = CombatMove<
	"COMBAT_V0268_MOVE_HEAVY_SLAM",
	{
		energyDelta: -50;
		power: 70;
		type: "POKEMON_TYPE_STEEL";
		uniqueId: "HEAVY_SLAM";
		vfxName: "heavy_slam";
	}
>;
export type CombatMoveV0269MoveFireSpinFast = CombatMove<
	"COMBAT_V0269_MOVE_FIRE_SPIN_FAST",
	{
		durationTurns: 2;
		energyDelta: 10;
		power: 11;
		type: "POKEMON_TYPE_FIRE";
		uniqueId: "FIRE_SPIN_FAST";
		vfxName: "fire_spin_fast";
	}
>;
export type CombatMoveV0270MoveOverheat = CombatMove<
	"COMBAT_V0270_MOVE_OVERHEAT",
	{
		buffs: {
			attackerAttackStatStageChange: -2;
			buffActivationChance: 1;
		};
		energyDelta: -55;
		power: 130;
		type: "POKEMON_TYPE_FIRE";
		uniqueId: "OVERHEAT";
		vfxName: "overheat";
	}
>;
export type CombatMoveV0271MoveBulletSeedFast = CombatMove<
	"COMBAT_V0271_MOVE_BULLET_SEED_FAST",
	{
		durationTurns: 2;
		energyDelta: 13;
		power: 5;
		type: "POKEMON_TYPE_GRASS";
		uniqueId: "BULLET_SEED_FAST";
		vfxName: "bullet_seed_fast";
	}
>;
export type CombatMoveV0272MoveGrassKnot = CombatMove<
	"COMBAT_V0272_MOVE_GRASS_KNOT",
	{
		energyDelta: -50;
		power: 90;
		type: "POKEMON_TYPE_GRASS";
		uniqueId: "GRASS_KNOT";
		vfxName: "grass_knot";
	}
>;
export type CombatMoveV0273MoveEnergyBall = CombatMove<
	"COMBAT_V0273_MOVE_ENERGY_BALL",
	{
		buffs: {
			buffActivationChance: 0.1;
			targetDefenseStatStageChange: -1;
		};
		energyDelta: -55;
		power: 90;
		type: "POKEMON_TYPE_GRASS";
		uniqueId: "ENERGY_BALL";
		vfxName: "energy_ball";
	}
>;
export type CombatMoveV0274MoveExtrasensoryFast = CombatMove<
	"COMBAT_V0274_MOVE_EXTRASENSORY_FAST",
	{
		durationTurns: 2;
		energyDelta: 10;
		power: 8;
		type: "POKEMON_TYPE_PSYCHIC";
		uniqueId: "EXTRASENSORY_FAST";
		vfxName: "extrasensory_fast";
	}
>;
export type CombatMoveV0275MoveFuturesight = CombatMove<
	"COMBAT_V0275_MOVE_FUTURESIGHT",
	{
		energyDelta: -65;
		power: 110;
		type: "POKEMON_TYPE_PSYCHIC";
		uniqueId: "FUTURESIGHT";
		vfxName: "futuresight";
	}
>;
export type CombatMoveV0276MoveMirrorCoat = CombatMove<
	"COMBAT_V0276_MOVE_MIRROR_COAT",
	{
		energyDelta: -55;
		power: 60;
		type: "POKEMON_TYPE_PSYCHIC";
		uniqueId: "MIRROR_COAT";
		vfxName: "mirror_coat";
	}
>;
export type CombatMoveV0277MoveOutrage = CombatMove<
	"COMBAT_V0277_MOVE_OUTRAGE",
	{
		energyDelta: -60;
		power: 110;
		type: "POKEMON_TYPE_DRAGON";
		uniqueId: "OUTRAGE";
		vfxName: "outrage";
	}
>;
export type CombatMoveV0278MoveSnarlFast = CombatMove<
	"COMBAT_V0278_MOVE_SNARL_FAST",
	{
		durationTurns: 2;
		energyDelta: 13;
		power: 5;
		type: "POKEMON_TYPE_DARK";
		uniqueId: "SNARL_FAST";
		vfxName: "snarl_fast";
	}
>;
export type CombatMoveV0279MoveCrunch = CombatMove<
	"COMBAT_V0279_MOVE_CRUNCH",
	{
		buffs: {
			buffActivationChance: 0.2;
			targetDefenseStatStageChange: -1;
		};
		energyDelta: -45;
		power: 70;
		type: "POKEMON_TYPE_DARK";
		uniqueId: "CRUNCH";
		vfxName: "crunch";
	}
>;
export type CombatMoveV0280MoveFoulPlay = CombatMove<
	"COMBAT_V0280_MOVE_FOUL_PLAY",
	{
		energyDelta: -40;
		power: 65;
		type: "POKEMON_TYPE_DARK";
		uniqueId: "FOUL_PLAY";
		vfxName: "foul_play";
	}
>;
export type CombatMoveV0281MoveHiddenPowerFast = CombatMove<
	"COMBAT_V0281_MOVE_HIDDEN_POWER_FAST",
	{
		durationTurns: 2;
		energyDelta: 8;
		power: 9;
		type: "POKEMON_TYPE_NORMAL";
		uniqueId: "HIDDEN_POWER_FAST";
		vfxName: "hidden_power_fast";
	}
>;
export type CombatMoveV0282MoveTakeDownFast = CombatMove<
	"COMBAT_V0282_MOVE_TAKE_DOWN_FAST",
	{
		durationTurns: 2;
		energyDelta: 8;
		power: 5;
		type: "POKEMON_TYPE_NORMAL";
		uniqueId: "TAKE_DOWN_FAST";
		vfxName: "take_down_fast";
	}
>;
export type CombatMoveV0283MoveWaterfallFast = CombatMove<
	"COMBAT_V0283_MOVE_WATERFALL_FAST",
	{
		durationTurns: 2;
		energyDelta: 10;
		power: 11;
		type: "POKEMON_TYPE_WATER";
		uniqueId: "WATERFALL_FAST";
		vfxName: "waterfall_fast";
	}
>;
export type CombatMoveV0284MoveSurf = CombatMove<
	"COMBAT_V0284_MOVE_SURF",
	{
		energyDelta: -45;
		power: 75;
		type: "POKEMON_TYPE_WATER";
		uniqueId: "SURF";
		vfxName: "surf";
	}
>;
export type CombatMoveV0285MoveDracoMeteor = CombatMove<
	"COMBAT_V0285_MOVE_DRACO_METEOR",
	{
		buffs: {
			attackerAttackStatStageChange: -2;
			buffActivationChance: 1;
		};
		energyDelta: -65;
		power: 150;
		type: "POKEMON_TYPE_DRAGON";
		uniqueId: "DRACO_METEOR";
		vfxName: "draco_meteor";
	}
>;
export type CombatMoveV0286MoveDoomDesire = CombatMove<
	"COMBAT_V0286_MOVE_DOOM_DESIRE",
	{
		energyDelta: -40;
		power: 80;
		type: "POKEMON_TYPE_STEEL";
		uniqueId: "DOOM_DESIRE";
		vfxName: "doom_desire";
	}
>;
export type CombatMoveV0287MoveYawnFast = CombatMove<
	"COMBAT_V0287_MOVE_YAWN_FAST",
	{
		durationTurns: 3;
		energyDelta: 12;
		type: "POKEMON_TYPE_NORMAL";
		uniqueId: "YAWN_FAST";
		vfxName: "yawn_fast";
	}
>;
export type CombatMoveV0288MovePsychoBoost = CombatMove<
	"COMBAT_V0288_MOVE_PSYCHO_BOOST",
	{
		buffs: {
			attackerAttackStatStageChange: -2;
			buffActivationChance: 1;
		};
		energyDelta: -35;
		power: 70;
		type: "POKEMON_TYPE_PSYCHIC";
		uniqueId: "PSYCHO_BOOST";
		vfxName: "psycho_boost";
	}
>;
export type CombatMoveV0289MoveOriginPulse = CombatMove<
	"COMBAT_V0289_MOVE_ORIGIN_PULSE",
	{
		energyDelta: -60;
		power: 130;
		type: "POKEMON_TYPE_WATER";
		uniqueId: "ORIGIN_PULSE";
		vfxName: "origin_pulse";
	}
>;
export type CombatMoveV0290MovePrecipiceBlades = CombatMove<
	"COMBAT_V0290_MOVE_PRECIPICE_BLADES",
	{
		energyDelta: -60;
		power: 130;
		type: "POKEMON_TYPE_GROUND";
		uniqueId: "PRECIPICE_BLADES";
		vfxName: "precipice_blades";
	}
>;
export type CombatMoveV0291MovePresentFast = CombatMove<
	"COMBAT_V0291_MOVE_PRESENT_FAST",
	{
		durationTurns: 2;
		energyDelta: 12;
		power: 3;
		type: "POKEMON_TYPE_NORMAL";
		uniqueId: "PRESENT_FAST";
		vfxName: "present_fast";
	}
>;
export type CombatMoveV0292MoveWeatherBallFire = CombatMove<
	"COMBAT_V0292_MOVE_WEATHER_BALL_FIRE",
	{
		energyDelta: -35;
		power: 60;
		type: "POKEMON_TYPE_FIRE";
		uniqueId: "WEATHER_BALL_FIRE";
		vfxName: "weather_ball_fire";
	}
>;
export type CombatMoveV0293MoveWeatherBallIce = CombatMove<
	"COMBAT_V0293_MOVE_WEATHER_BALL_ICE",
	{
		energyDelta: -35;
		power: 60;
		type: "POKEMON_TYPE_ICE";
		uniqueId: "WEATHER_BALL_ICE";
		vfxName: "weather_ball_ice";
	}
>;
export type CombatMoveV0294MoveWeatherBallRock = CombatMove<
	"COMBAT_V0294_MOVE_WEATHER_BALL_ROCK",
	{
		energyDelta: -35;
		power: 60;
		type: "POKEMON_TYPE_ROCK";
		uniqueId: "WEATHER_BALL_ROCK";
		vfxName: "weather_ball_rock";
	}
>;
export type CombatMoveV0295MoveWeatherBallWater = CombatMove<
	"COMBAT_V0295_MOVE_WEATHER_BALL_WATER",
	{
		energyDelta: -35;
		power: 60;
		type: "POKEMON_TYPE_WATER";
		uniqueId: "WEATHER_BALL_WATER";
		vfxName: "weather_ball_water";
	}
>;
export type CombatMoveV0296MoveFrenzyPlant = CombatMove<
	"COMBAT_V0296_MOVE_FRENZY_PLANT",
	{
		energyDelta: -45;
		power: 100;
		type: "POKEMON_TYPE_GRASS";
		uniqueId: "FRENZY_PLANT";
		vfxName: "frenzy_plant";
	}
>;
export type CombatMoveV0297MoveSmackDownFast = CombatMove<
	"COMBAT_V0297_MOVE_SMACK_DOWN_FAST",
	{
		durationTurns: 2;
		energyDelta: 8;
		power: 11;
		type: "POKEMON_TYPE_ROCK";
		uniqueId: "SMACK_DOWN_FAST";
		vfxName: "smack_down_fast";
	}
>;
export type CombatMoveV0298MoveBlastBurn = CombatMove<
	"COMBAT_V0298_MOVE_BLAST_BURN",
	{
		energyDelta: -50;
		power: 110;
		type: "POKEMON_TYPE_FIRE";
		uniqueId: "BLAST_BURN";
		vfxName: "blast_burn";
	}
>;
export type CombatMoveV0299MoveHydroCannon = CombatMove<
	"COMBAT_V0299_MOVE_HYDRO_CANNON",
	{
		energyDelta: -40;
		power: 80;
		type: "POKEMON_TYPE_WATER";
		uniqueId: "HYDRO_CANNON";
		vfxName: "hydro_cannon";
	}
>;
export type CombatMoveV0300MoveLastResort = CombatMove<
	"COMBAT_V0300_MOVE_LAST_RESORT",
	{
		energyDelta: -55;
		power: 90;
		type: "POKEMON_TYPE_NORMAL";
		uniqueId: "LAST_RESORT";
		vfxName: "last_resort";
	}
>;
export type CombatMoveV0301MoveMeteorMash = CombatMove<
	"COMBAT_V0301_MOVE_METEOR_MASH",
	{
		energyDelta: -45;
		power: 100;
		type: "POKEMON_TYPE_STEEL";
		uniqueId: "METEOR_MASH";
		vfxName: "meteor_mash";
	}
>;
export type CombatMoveV0302MoveSkullBash = CombatMove<
	"COMBAT_V0302_MOVE_SKULL_BASH",
	{
		buffs: {
			attackerDefenseStatStageChange: 1;
			buffActivationChance: 1;
		};
		energyDelta: -75;
		power: 130;
		type: "POKEMON_TYPE_NORMAL";
		uniqueId: "SKULL_BASH";
		vfxName: "skull_bash";
	}
>;
export type CombatMoveV0303MoveAcidSpray = CombatMove<
	"COMBAT_V0303_MOVE_ACID_SPRAY",
	{
		buffs: {
			buffActivationChance: 1;
			targetDefenseStatStageChange: -2;
		};
		energyDelta: -45;
		power: 20;
		type: "POKEMON_TYPE_POISON";
		uniqueId: "ACID_SPRAY";
		vfxName: "acid_spray";
	}
>;
export type CombatMoveV0304MoveEarthPower = CombatMove<
	"COMBAT_V0304_MOVE_EARTH_POWER",
	{
		buffs: {
			buffActivationChance: 0.1;
			targetDefenseStatStageChange: -1;
		};
		energyDelta: -55;
		power: 90;
		type: "POKEMON_TYPE_GROUND";
		uniqueId: "EARTH_POWER";
		vfxName: "earth_power";
	}
>;
export type CombatMoveV0305MoveCrabhammer = CombatMove<
	"COMBAT_V0305_MOVE_CRABHAMMER",
	{
		buffs: {
			attackerAttackStatStageChange: 2;
			buffActivationChance: 0.125;
		};
		energyDelta: -50;
		power: 85;
		type: "POKEMON_TYPE_WATER";
		uniqueId: "CRABHAMMER";
		vfxName: "crabhammer";
	}
>;
export type CombatMoveV0306MoveLunge = CombatMove<
	"COMBAT_V0306_MOVE_LUNGE",
	{
		buffs: {
			buffActivationChance: 1;
			targetAttackStatStageChange: -1;
		};
		energyDelta: -45;
		power: 60;
		type: "POKEMON_TYPE_BUG";
		uniqueId: "LUNGE";
		vfxName: "lunge";
	}
>;
export type CombatMoveV0308MoveOctazooka = CombatMove<
	"COMBAT_V0308_MOVE_OCTAZOOKA",
	{
		buffs: {
			buffActivationChance: 0.5;
			targetAttackStatStageChange: -2;
		};
		energyDelta: -50;
		power: 50;
		type: "POKEMON_TYPE_WATER";
		uniqueId: "OCTAZOOKA";
		vfxName: "octazooka";
	}
>;
export type CombatMoveV0309MoveMirrorShot = CombatMove<
	"COMBAT_V0309_MOVE_MIRROR_SHOT",
	{
		buffs: {
			buffActivationChance: 0.3;
			targetAttackStatStageChange: -1;
		};
		energyDelta: -35;
		power: 35;
		type: "POKEMON_TYPE_STEEL";
		uniqueId: "MIRROR_SHOT";
		vfxName: "mirror_shot";
	}
>;
export type CombatMoveV0310MoveSuperPower = CombatMove<
	"COMBAT_V0310_MOVE_SUPER_POWER",
	{
		buffs: {
			attackerAttackStatStageChange: -1;
			attackerDefenseStatStageChange: -1;
			buffActivationChance: 1;
		};
		energyDelta: -40;
		power: 85;
		type: "POKEMON_TYPE_FIGHTING";
		uniqueId: "SUPER_POWER";
		vfxName: "super_power";
	}
>;
export type CombatMoveV0311MoveFellStinger = CombatMove<
	"COMBAT_V0311_MOVE_FELL_STINGER",
	{
		buffs: {
			attackerAttackStatStageChange: 1;
			buffActivationChance: 1;
		};
		energyDelta: -35;
		power: 20;
		type: "POKEMON_TYPE_BUG";
		uniqueId: "FELL_STINGER";
		vfxName: "fell_stinger";
	}
>;
export type CombatMoveV0312MoveLeafTornado = CombatMove<
	"COMBAT_V0312_MOVE_LEAF_TORNADO",
	{
		buffs: {
			buffActivationChance: 0.5;
			targetAttackStatStageChange: -2;
		};
		energyDelta: -40;
		power: 45;
		type: "POKEMON_TYPE_GRASS";
		uniqueId: "LEAF_TORNADO";
		vfxName: "leaf_tornado";
	}
>;
export type CombatMoveV0314MoveDrainPunch = CombatMove<
	"COMBAT_V0314_MOVE_DRAIN_PUNCH",
	{
		buffs: {
			attackerDefenseStatStageChange: 1;
			buffActivationChance: 1;
		};
		energyDelta: -40;
		power: 40;
		type: "POKEMON_TYPE_FIGHTING";
		uniqueId: "DRAIN_PUNCH";
		vfxName: "drain_punch";
	}
>;
export type CombatMoveV0315MoveShadowBone = CombatMove<
	"COMBAT_V0315_MOVE_SHADOW_BONE",
	{
		buffs: {
			buffActivationChance: 0.2;
			targetDefenseStatStageChange: -1;
		};
		energyDelta: -45;
		power: 80;
		type: "POKEMON_TYPE_GHOST";
		uniqueId: "SHADOW_BONE";
		vfxName: "shadow_bone";
	}
>;
export type CombatMoveV0316MoveMuddyWater = CombatMove<
	"COMBAT_V0316_MOVE_MUDDY_WATER",
	{
		buffs: {
			buffActivationChance: 0.3;
			targetAttackStatStageChange: -1;
		};
		energyDelta: -35;
		power: 35;
		type: "POKEMON_TYPE_WATER";
		uniqueId: "MUDDY_WATER";
		vfxName: "muddy_water";
	}
>;
export type CombatMoveV0317MoveBlazeKick = CombatMove<
	"COMBAT_V0317_MOVE_BLAZE_KICK",
	{
		energyDelta: -40;
		power: 60;
		type: "POKEMON_TYPE_FIRE";
		uniqueId: "BLAZE_KICK";
		vfxName: "blaze_kick";
	}
>;
export type CombatMoveV0318MoveRazorShell = CombatMove<
	"COMBAT_V0318_MOVE_RAZOR_SHELL",
	{
		buffs: {
			buffActivationChance: 0.5;
			targetDefenseStatStageChange: -1;
		};
		energyDelta: -35;
		power: 35;
		type: "POKEMON_TYPE_WATER";
		uniqueId: "RAZOR_SHELL";
		vfxName: "razor_shell";
	}
>;
export type CombatMoveV0319MovePowerUpPunch = CombatMove<
	"COMBAT_V0319_MOVE_POWER_UP_PUNCH",
	{
		buffs: {
			attackerAttackStatStageChange: 1;
			buffActivationChance: 1;
		};
		energyDelta: -35;
		power: 20;
		type: "POKEMON_TYPE_FIGHTING";
		uniqueId: "POWER_UP_PUNCH";
		vfxName: "power_up_punch";
	}
>;
export type CombatMoveV0320MoveCharmFast = CombatMove<
	"COMBAT_V0320_MOVE_CHARM_FAST",
	{
		durationTurns: 2;
		energyDelta: 8;
		power: 13;
		type: "POKEMON_TYPE_FAIRY";
		uniqueId: "CHARM_FAST";
		vfxName: "charm_fast";
	}
>;
export type CombatMoveV0321MoveGigaImpact = CombatMove<
	"COMBAT_V0321_MOVE_GIGA_IMPACT",
	{
		energyDelta: -80;
		power: 150;
		type: "POKEMON_TYPE_NORMAL";
		uniqueId: "GIGA_IMPACT";
		vfxName: "giga_impact";
	}
>;
export type CombatMoveV0322MoveFrustration = CombatMove<
	"COMBAT_V0322_MOVE_FRUSTRATION",
	{
		energyDelta: -70;
		power: 10;
		type: "POKEMON_TYPE_NORMAL";
		uniqueId: "FRUSTRATION";
		vfxName: "frustration";
	}
>;
export type CombatMoveV0323MoveReturn = CombatMove<
	"COMBAT_V0323_MOVE_RETURN",
	{
		energyDelta: -70;
		power: 130;
		type: "POKEMON_TYPE_NORMAL";
		uniqueId: "RETURN";
		vfxName: "return";
	}
>;
export type CombatMoveV0324MoveSynchronoise = CombatMove<
	"COMBAT_V0324_MOVE_SYNCHRONOISE",
	{
		energyDelta: -50;
		power: 80;
		type: "POKEMON_TYPE_PSYCHIC";
		uniqueId: "SYNCHRONOISE";
		vfxName: "synchronoise";
	}
>;
export type CombatMoveV0325MoveLockOnFast = CombatMove<
	"COMBAT_V0325_MOVE_LOCK_ON_FAST",
	{
		energyDelta: 5;
		power: 1;
		type: "POKEMON_TYPE_NORMAL";
		uniqueId: "LOCK_ON_FAST";
		vfxName: "lock_on_fast";
	}
>;
export type CombatMoveV0326MoveThunderFangFast = CombatMove<
	"COMBAT_V0326_MOVE_THUNDER_FANG_FAST",
	{
		durationTurns: 1;
		energyDelta: 6;
		power: 8;
		type: "POKEMON_TYPE_ELECTRIC";
		uniqueId: "THUNDER_FANG_FAST";
		vfxName: "thunder_fang_fast";
	}
>;
export type CombatMoveV0327MoveIceFangFast = CombatMove<
	"COMBAT_V0327_MOVE_ICE_FANG_FAST",
	{
		durationTurns: 1;
		energyDelta: 6;
		power: 8;
		type: "POKEMON_TYPE_ICE";
		uniqueId: "ICE_FANG_FAST";
		vfxName: "ice_fang_fast";
	}
>;
export type CombatMoveV0330MoveSacredSword = CombatMove<
	"COMBAT_V0330_MOVE_SACRED_SWORD",
	{
		energyDelta: -35;
		power: 60;
		type: "POKEMON_TYPE_FIGHTING";
		uniqueId: "SACRED_SWORD";
		vfxName: "sacred_sword";
	}
>;
export type CombatMoveV0331MoveFlyingPress = CombatMove<
	"COMBAT_V0331_MOVE_FLYING_PRESS",
	{
		energyDelta: -40;
		power: 90;
		type: "POKEMON_TYPE_FIGHTING";
		uniqueId: "FLYING_PRESS";
		vfxName: "flying_press";
	}
>;
export type CombatMoveV0332MoveAuraSphere = CombatMove<
	"COMBAT_V0332_MOVE_AURA_SPHERE",
	{
		energyDelta: -40;
		power: 80;
		type: "POKEMON_TYPE_FIGHTING";
		uniqueId: "AURA_SPHERE";
		vfxName: "aura_sphere";
	}
>;
export type CombatMoveV0333MovePayback = CombatMove<
	"COMBAT_V0333_MOVE_PAYBACK",
	{
		energyDelta: -60;
		power: 110;
		type: "POKEMON_TYPE_DARK";
		uniqueId: "PAYBACK";
		vfxName: "payback";
	}
>;
export type CombatMoveV0334MoveRockWrecker = CombatMove<
	"COMBAT_V0334_MOVE_ROCK_WRECKER",
	{
		energyDelta: -50;
		power: 110;
		type: "POKEMON_TYPE_ROCK";
		uniqueId: "ROCK_WRECKER";
		vfxName: "rock_wrecker";
	}
>;
export type CombatMoveV0335MoveAeroblast = CombatMove<
	"COMBAT_V0335_MOVE_AEROBLAST",
	{
		buffs: {
			attackerAttackStatStageChange: 2;
			buffActivationChance: 0.125;
		};
		energyDelta: -75;
		power: 170;
		type: "POKEMON_TYPE_FLYING";
		uniqueId: "AEROBLAST";
		vfxName: "aeroblast";
	}
>;
export type CombatMoveV0336MoveTechnoBlastNormal = CombatMove<
	"COMBAT_V0336_MOVE_TECHNO_BLAST_NORMAL",
	{
		energyDelta: -55;
		power: 120;
		type: "POKEMON_TYPE_NORMAL";
		uniqueId: "TECHNO_BLAST_NORMAL";
		vfxName: "techno_blast_normal";
	}
>;
export type CombatMoveV0337MoveTechnoBlastBurn = CombatMove<
	"COMBAT_V0337_MOVE_TECHNO_BLAST_BURN",
	{
		energyDelta: -55;
		power: 120;
		type: "POKEMON_TYPE_FIRE";
		uniqueId: "TECHNO_BLAST_BURN";
		vfxName: "techno_blast_burn";
	}
>;
export type CombatMoveV0338MoveTechnoBlastChill = CombatMove<
	"COMBAT_V0338_MOVE_TECHNO_BLAST_CHILL",
	{
		energyDelta: -55;
		power: 120;
		type: "POKEMON_TYPE_ICE";
		uniqueId: "TECHNO_BLAST_CHILL";
		vfxName: "techno_blast_chill";
	}
>;
export type CombatMoveV0339MoveTechnoBlastWater = CombatMove<
	"COMBAT_V0339_MOVE_TECHNO_BLAST_WATER",
	{
		energyDelta: -55;
		power: 120;
		type: "POKEMON_TYPE_WATER";
		uniqueId: "TECHNO_BLAST_WATER";
		vfxName: "techno_blast_water";
	}
>;
export type CombatMoveV0340MoveTechnoBlastShock = CombatMove<
	"COMBAT_V0340_MOVE_TECHNO_BLAST_SHOCK",
	{
		energyDelta: -55;
		power: 120;
		type: "POKEMON_TYPE_ELECTRIC";
		uniqueId: "TECHNO_BLAST_SHOCK";
		vfxName: "techno_blast_shock";
	}
>;
export type CombatMoveV0341MoveFly = CombatMove<
	"COMBAT_V0341_MOVE_FLY",
	{
		energyDelta: -45;
		power: 80;
		type: "POKEMON_TYPE_FLYING";
		uniqueId: "FLY";
		vfxName: "fly";
	}
>;
export type CombatMoveV0342MoveVCreate = CombatMove<
	"COMBAT_V0342_MOVE_V_CREATE",
	{
		buffs: {
			attackerDefenseStatStageChange: -3;
			buffActivationChance: 1;
		};
		energyDelta: -40;
		power: 95;
		type: "POKEMON_TYPE_FIRE";
		uniqueId: "V_CREATE";
		vfxName: "v_create";
	}
>;
export type CombatMoveV0343MoveLeafStorm = CombatMove<
	"COMBAT_V0343_MOVE_LEAF_STORM",
	{
		buffs: {
			attackerAttackStatStageChange: -2;
			buffActivationChance: 1;
		};
		energyDelta: -55;
		power: 130;
		type: "POKEMON_TYPE_GRASS";
		uniqueId: "LEAF_STORM";
		vfxName: "leaf_storm";
	}
>;
export type CombatMoveV0344MoveTriAttack = CombatMove<
	"COMBAT_V0344_MOVE_TRI_ATTACK",
	{
		buffs: {
			buffActivationChance: 0.5;
			targetAttackStatStageChange: -1;
			targetDefenseStatStageChange: -1;
		};
		energyDelta: -50;
		power: 65;
		type: "POKEMON_TYPE_NORMAL";
		uniqueId: "TRI_ATTACK";
		vfxName: "tri_attack";
	}
>;
export type CombatMoveV0345MoveGustFast = CombatMove<
	"COMBAT_V0345_MOVE_GUST_FAST",
	{
		durationTurns: 3;
		energyDelta: 12;
		power: 16;
		type: "POKEMON_TYPE_FLYING";
		uniqueId: "GUST_FAST";
		vfxName: "gust_fast";
	}
>;
export type CombatMoveV0346MoveIncinerateFast = CombatMove<
	"COMBAT_V0346_MOVE_INCINERATE_FAST",
	{
		durationTurns: 4;
		energyDelta: 20;
		power: 20;
		type: "POKEMON_TYPE_FIRE";
		uniqueId: "INCINERATE_FAST";
		vfxName: "incinerate_fast";
	}
>;
export type CombatMoveV0348MoveFeatherDance = CombatMove<
	"COMBAT_V0348_MOVE_FEATHER_DANCE",
	{
		buffs: {
			buffActivationChance: 1;
			targetAttackStatStageChange: -2;
		};
		energyDelta: -50;
		power: 35;
		type: "POKEMON_TYPE_FLYING";
		uniqueId: "FEATHER_DANCE";
		vfxName: "feather_dance";
	}
>;
export type CombatMoveV0350MoveFairyWindFast = CombatMove<
	"COMBAT_V0350_MOVE_FAIRY_WIND_FAST",
	{
		durationTurns: 1;
		energyDelta: 9;
		power: 4;
		type: "POKEMON_TYPE_FAIRY";
		uniqueId: "FAIRY_WIND_FAST";
		vfxName: "fairy_wind_fast";
	}
>;
export type CombatMoveV0352MoveWeatherBallNormal = CombatMove<
	"COMBAT_V0352_MOVE_WEATHER_BALL_NORMAL",
	{
		energyDelta: -35;
		power: 60;
		type: "POKEMON_TYPE_NORMAL";
		uniqueId: "WEATHER_BALL_NORMAL";
		vfxName: "weather_ball_normal";
	}
>;
export type CombatMoveV0353MovePsychicFangs = CombatMove<
	"COMBAT_V0353_MOVE_PSYCHIC_FANGS",
	{
		buffs: {
			buffActivationChance: 1;
			targetDefenseStatStageChange: -1;
		};
		energyDelta: -35;
		power: 40;
		type: "POKEMON_TYPE_PSYCHIC";
		uniqueId: "PSYCHIC_FANGS";
		vfxName: "psychic_fangs";
	}
>;
export type CombatMoveV0356MoveDoubleKickFast = CombatMove<
	"COMBAT_V0356_MOVE_DOUBLE_KICK_FAST",
	{
		durationTurns: 2;
		energyDelta: 12;
		power: 8;
		type: "POKEMON_TYPE_FIGHTING";
		uniqueId: "DOUBLE_KICK_FAST";
		vfxName: "double_kick_fast";
	}
>;
export type CombatMoveV0357MoveMagicalLeafFast = CombatMove<
	"COMBAT_V0357_MOVE_MAGICAL_LEAF_FAST",
	{
		durationTurns: 2;
		energyDelta: 10;
		power: 10;
		type: "POKEMON_TYPE_GRASS";
		uniqueId: "MAGICAL_LEAF_FAST";
		vfxName: "magical_leaf_fast";
	}
>;
export type CombatMoveV0358MoveSacredFire = CombatMove<
	"COMBAT_V0358_MOVE_SACRED_FIRE",
	{
		buffs: {
			buffActivationChance: 0.5;
			targetAttackStatStageChange: -1;
		};
		energyDelta: -65;
		power: 130;
		type: "POKEMON_TYPE_FIRE";
		uniqueId: "SACRED_FIRE";
		vfxName: "sacred_fire";
	}
>;
export type CombatMoveV0359MoveIcicleSpear = CombatMove<
	"COMBAT_V0359_MOVE_ICICLE_SPEAR",
	{
		energyDelta: -40;
		power: 70;
		type: "POKEMON_TYPE_ICE";
		uniqueId: "ICICLE_SPEAR";
		vfxName: "icicle_spear";
	}
>;
export type CombatMoveV0360MoveAeroblastPlus = CombatMove<
	"COMBAT_V0360_MOVE_AEROBLAST_PLUS",
	{
		buffs: {
			attackerAttackStatStageChange: 2;
			buffActivationChance: 0.125;
		};
		energyDelta: -75;
		power: 170;
		type: "POKEMON_TYPE_FLYING";
		uniqueId: "AEROBLAST_PLUS";
		vfxName: "aeroblast";
	}
>;
export type CombatMoveV0361MoveAeroblastPlusPlus = CombatMove<
	"COMBAT_V0361_MOVE_AEROBLAST_PLUS_PLUS",
	{
		buffs: {
			attackerAttackStatStageChange: 2;
			buffActivationChance: 0.125;
		};
		energyDelta: -75;
		power: 170;
		type: "POKEMON_TYPE_FLYING";
		uniqueId: "AEROBLAST_PLUS_PLUS";
		vfxName: "aeroblast";
	}
>;
export type CombatMoveV0362MoveSacredFirePlus = CombatMove<
	"COMBAT_V0362_MOVE_SACRED_FIRE_PLUS",
	{
		buffs: {
			buffActivationChance: 0.5;
			targetAttackStatStageChange: -1;
		};
		energyDelta: -65;
		power: 130;
		type: "POKEMON_TYPE_FIRE";
		uniqueId: "SACRED_FIRE_PLUS";
		vfxName: "sacred_fire";
	}
>;
export type CombatMoveV0363MoveSacredFirePlusPlus = CombatMove<
	"COMBAT_V0363_MOVE_SACRED_FIRE_PLUS_PLUS",
	{
		buffs: {
			buffActivationChance: 0.5;
			targetAttackStatStageChange: -1;
		};
		energyDelta: -65;
		power: 130;
		type: "POKEMON_TYPE_FIRE";
		uniqueId: "SACRED_FIRE_PLUS_PLUS";
		vfxName: "sacred_fire";
	}
>;
export type CombatMoveV0364MoveAcrobatics = CombatMove<
	"COMBAT_V0364_MOVE_ACROBATICS",
	{
		energyDelta: -55;
		power: 110;
		type: "POKEMON_TYPE_FLYING";
		uniqueId: "ACROBATICS";
		vfxName: "acrobatics";
	}
>;
export type CombatMoveV0365MoveLusterPurge = CombatMove<
	"COMBAT_V0365_MOVE_LUSTER_PURGE",
	{
		buffs: {
			buffActivationChance: 0.5;
			targetDefenseStatStageChange: -1;
		};
		energyDelta: -60;
		power: 120;
		type: "POKEMON_TYPE_PSYCHIC";
		uniqueId: "LUSTER_PURGE";
		vfxName: "luster_purge";
	}
>;
export type CombatMoveV0366MoveMistBall = CombatMove<
	"COMBAT_V0366_MOVE_MIST_BALL",
	{
		buffs: {
			buffActivationChance: 0.5;
			targetAttackStatStageChange: -1;
		};
		energyDelta: -60;
		power: 120;
		type: "POKEMON_TYPE_PSYCHIC";
		uniqueId: "MIST_BALL";
		vfxName: "mist_ball";
	}
>;
export type CombatMoveV0367MoveBrutalSwing = CombatMove<
	"COMBAT_V0367_MOVE_BRUTAL_SWING",
	{
		energyDelta: -35;
		power: 55;
		type: "POKEMON_TYPE_DARK";
		uniqueId: "BRUTAL_SWING";
		vfxName: "brutal_swing";
	}
>;
export type CombatMoveV0368MoveRolloutFast = CombatMove<
	"COMBAT_V0368_MOVE_ROLLOUT_FAST",
	{
		durationTurns: 2;
		energyDelta: 13;
		power: 7;
		type: "POKEMON_TYPE_ROCK";
		uniqueId: "ROLLOUT_FAST";
		vfxName: "rollout_fast";
	}
>;
export type CombatMoveV0369MoveSeedFlare = CombatMove<
	"COMBAT_V0369_MOVE_SEED_FLARE",
	{
		buffs: {
			buffActivationChance: 0.4;
			targetDefenseStatStageChange: -2;
		};
		energyDelta: -75;
		power: 130;
		type: "POKEMON_TYPE_GRASS";
		uniqueId: "SEED_FLARE";
		vfxName: "seed_flare";
	}
>;
export type CombatMoveV0370MoveObstruct = CombatMove<
	"COMBAT_V0370_MOVE_OBSTRUCT",
	{
		buffs: {
			attackerDefenseStatStageChange: 1;
			buffActivationChance: 1;
			targetDefenseStatStageChange: -1;
		};
		energyDelta: -40;
		power: 15;
		type: "POKEMON_TYPE_DARK";
		uniqueId: "OBSTRUCT";
		vfxName: "obstruct";
	}
>;
export type CombatMoveV0371MoveShadowForce = CombatMove<
	"COMBAT_V0371_MOVE_SHADOW_FORCE",
	{
		energyDelta: -90;
		power: 120;
		type: "POKEMON_TYPE_GHOST";
		uniqueId: "SHADOW_FORCE";
		vfxName: "shadow_force";
	}
>;
export type CombatMoveV0372MoveMeteorBeam = CombatMove<
	"COMBAT_V0372_MOVE_METEOR_BEAM",
	{
		buffs: {
			attackerAttackStatStageChange: 1;
			buffActivationChance: 1;
		};
		energyDelta: -60;
		power: 120;
		type: "POKEMON_TYPE_ROCK";
		uniqueId: "METEOR_BEAM";
		vfxName: "meteor_beam";
	}
>;
export type CombatMoveV0373MoveWaterShurikenFast = CombatMove<
	"COMBAT_V0373_MOVE_WATER_SHURIKEN_FAST",
	{
		durationTurns: 2;
		energyDelta: 14;
		power: 6;
		type: "POKEMON_TYPE_WATER";
		uniqueId: "WATER_SHURIKEN_FAST";
		vfxName: "water_shuriken_fast";
	}
>;
export type CombatMoveV0374MoveFusionBolt = CombatMove<
	"COMBAT_V0374_MOVE_FUSION_BOLT",
	{
		energyDelta: -45;
		power: 90;
		type: "POKEMON_TYPE_ELECTRIC";
		uniqueId: "FUSION_BOLT";
		vfxName: "fusion_bolt";
	}
>;
export type CombatMoveV0375MoveFusionFlare = CombatMove<
	"COMBAT_V0375_MOVE_FUSION_FLARE",
	{
		energyDelta: -45;
		power: 90;
		type: "POKEMON_TYPE_FIRE";
		uniqueId: "FUSION_FLARE";
		vfxName: "fusion_flare";
	}
>;
export type CombatMoveV0376MovePoltergeist = CombatMove<
	"COMBAT_V0376_MOVE_POLTERGEIST",
	{
		energyDelta: -75;
		power: 150;
		type: "POKEMON_TYPE_GHOST";
		uniqueId: "POLTERGEIST";
		vfxName: "poltergeist";
	}
>;
export type CombatMoveV0377MoveHighHorsepower = CombatMove<
	"COMBAT_V0377_MOVE_HIGH_HORSEPOWER",
	{
		energyDelta: -60;
		power: 100;
		type: "POKEMON_TYPE_GROUND";
		uniqueId: "HIGH_HORSEPOWER";
		vfxName: "high_horsepower";
	}
>;
export type CombatMoveV0378MoveGlaciate = CombatMove<
	"COMBAT_V0378_MOVE_GLACIATE",
	{
		buffs: {
			buffActivationChance: 1;
			targetAttackStatStageChange: -1;
		};
		energyDelta: -40;
		power: 60;
		type: "POKEMON_TYPE_ICE";
		uniqueId: "GLACIATE";
		vfxName: "glaciate";
	}
>;
export type CombatMoveV0379MoveBreakingSwipe = CombatMove<
	"COMBAT_V0379_MOVE_BREAKING_SWIPE",
	{
		buffs: {
			buffActivationChance: 1;
			targetAttackStatStageChange: -1;
		};
		energyDelta: -50;
		power: 50;
		type: "POKEMON_TYPE_DRAGON";
		uniqueId: "BREAKING_SWIPE";
		vfxName: "breaking_swipe";
	}
>;
export type CombatMoveV0380MoveBoomburst = CombatMove<
	"COMBAT_V0380_MOVE_BOOMBURST",
	{
		energyDelta: -70;
		power: 150;
		type: "POKEMON_TYPE_NORMAL";
		uniqueId: "BOOMBURST";
		vfxName: "boomburst";
	}
>;
export type CombatMoveV0381MoveDoubleIronBash = CombatMove<
	"COMBAT_V0381_MOVE_DOUBLE_IRON_BASH",
	{
		energyDelta: -35;
		power: 55;
		type: "POKEMON_TYPE_STEEL";
		uniqueId: "DOUBLE_IRON_BASH";
		vfxName: "double_iron_bash";
	}
>;
export type CombatMoveV0382MoveMysticalFire = CombatMove<
	"COMBAT_V0382_MOVE_MYSTICAL_FIRE",
	{
		buffs: {
			buffActivationChance: 1;
			targetAttackStatStageChange: -1;
		};
		energyDelta: -45;
		power: 60;
		type: "POKEMON_TYPE_FIRE";
		uniqueId: "MYSTICAL_FIRE";
		vfxName: "myst_fire";
	}
>;
export type CombatMoveV0383MoveLiquidation = CombatMove<
	"COMBAT_V0383_MOVE_LIQUIDATION",
	{
		buffs: {
			buffActivationChance: 0.3;
			targetDefenseStatStageChange: -1;
		};
		energyDelta: -45;
		power: 70;
		type: "POKEMON_TYPE_WATER";
		uniqueId: "LIQUIDATION";
		vfxName: "liquidation";
	}
>;
export type CombatMoveV0384MoveDragonAscent = CombatMove<
	"COMBAT_V0384_MOVE_DRAGON_ASCENT",
	{
		buffs: {
			attackerDefenseStatStageChange: -1;
			buffActivationChance: 1;
		};
		energyDelta: -70;
		power: 150;
		type: "POKEMON_TYPE_FLYING";
		uniqueId: "DRAGON_ASCENT";
		vfxName: "dragon_ascent";
	}
>;
export type CombatMoveV0385MoveLeafageFast = CombatMove<
	"COMBAT_V0385_MOVE_LEAFAGE_FAST",
	{
		durationTurns: 1;
		energyDelta: 8;
		power: 6;
		type: "POKEMON_TYPE_GRASS";
		uniqueId: "LEAFAGE_FAST";
		vfxName: "leafage_fast";
	}
>;
export type CombatMoveV0386MoveMagmaStorm = CombatMove<
	"COMBAT_V0386_MOVE_MAGMA_STORM",
	{
		energyDelta: -40;
		power: 65;
		type: "POKEMON_TYPE_FIRE";
		uniqueId: "MAGMA_STORM";
		vfxName: "magma_storm";
	}
>;
export type CombatMoveV0387MoveGeomancyFast = CombatMove<
	"COMBAT_V0387_MOVE_GEOMANCY_FAST",
	{
		durationTurns: 2;
		energyDelta: 13;
		power: 8;
		type: "POKEMON_TYPE_FAIRY";
		uniqueId: "GEOMANCY_FAST";
		vfxName: "geomancy_fast";
	}
>;
export type CombatMoveV0388MoveSpacialRend = CombatMove<
	"COMBAT_V0388_MOVE_SPACIAL_REND",
	{
		energyDelta: -55;
		power: 95;
		type: "POKEMON_TYPE_DRAGON";
		uniqueId: "SPACIAL_REND";
		vfxName: "spacial_rend";
	}
>;
export type CombatMoveV0389MoveOblivionWing = CombatMove<
	"COMBAT_V0389_MOVE_OBLIVION_WING",
	{
		buffs: {
			attackerDefenseStatStageChange: 1;
			buffActivationChance: 1;
		};
		energyDelta: -50;
		power: 85;
		type: "POKEMON_TYPE_FLYING";
		uniqueId: "OBLIVION_WING";
		vfxName: "oblivion_wing";
	}
>;
export type CombatMoveV0390MoveNaturesMadness = CombatMove<
	"COMBAT_V0390_MOVE_NATURES_MADNESS",
	{
		buffs: {
			buffActivationChance: 1;
			targetDefenseStatStageChange: -1;
		};
		energyDelta: -50;
		power: 80;
		type: "POKEMON_TYPE_FAIRY";
		uniqueId: "NATURES_MADNESS";
		vfxName: "natures_madness";
	}
>;
export type CombatMoveV0391MoveTripleAxel = CombatMove<
	"COMBAT_V0391_MOVE_TRIPLE_AXEL",
	{
		buffs: {
			attackerAttackStatStageChange: 1;
			buffActivationChance: 1;
		};
		energyDelta: -45;
		power: 60;
		type: "POKEMON_TYPE_ICE";
		uniqueId: "TRIPLE_AXEL";
		vfxName: "triple_axel";
	}
>;
export type CombatMoveV0392MoveTrailblaze = CombatMove<
	"COMBAT_V0392_MOVE_TRAILBLAZE",
	{
		buffs: {
			attackerAttackStatStageChange: 1;
			buffActivationChance: 1;
		};
		energyDelta: -45;
		power: 65;
		type: "POKEMON_TYPE_GRASS";
		uniqueId: "TRAILBLAZE";
		vfxName: "trailblaze";
	}
>;
export type CombatMoveV0393MoveScorchingSands = CombatMove<
	"COMBAT_V0393_MOVE_SCORCHING_SANDS",
	{
		buffs: {
			buffActivationChance: 0.1;
			targetAttackStatStageChange: -1;
		};
		energyDelta: -50;
		power: 80;
		type: "POKEMON_TYPE_GROUND";
		uniqueId: "SCORCHING_SANDS";
		vfxName: "scorching_sands";
	}
>;
export type CombatMoveV0394MoveRoarOfTime = CombatMove<
	"COMBAT_V0394_MOVE_ROAR_OF_TIME",
	{
		energyDelta: -65;
		power: 150;
		type: "POKEMON_TYPE_DRAGON";
		uniqueId: "ROAR_OF_TIME";
		vfxName: "roar_of_time";
	}
>;
export type CombatMoveV0395MoveBleakwindStorm = CombatMove<
	"COMBAT_V0395_MOVE_BLEAKWIND_STORM",
	{
		buffs: {
			buffActivationChance: 1;
			targetAttackStatStageChange: -1;
		};
		energyDelta: -45;
		power: 60;
		type: "POKEMON_TYPE_FLYING";
		uniqueId: "BLEAKWIND_STORM";
		vfxName: "bleakwind_storm";
	}
>;
export type CombatMoveV0396MoveSandsearStorm = CombatMove<
	"COMBAT_V0396_MOVE_SANDSEAR_STORM",
	{
		buffs: {
			buffActivationChance: 1;
			targetAttackStatStageChange: -1;
		};
		energyDelta: -45;
		power: 60;
		type: "POKEMON_TYPE_GROUND";
		uniqueId: "SANDSEAR_STORM";
		vfxName: "sandsear_storm";
	}
>;
export type CombatMoveV0397MoveWildboltStorm = CombatMove<
	"COMBAT_V0397_MOVE_WILDBOLT_STORM",
	{
		buffs: {
			buffActivationChance: 1;
			targetAttackStatStageChange: -1;
		};
		energyDelta: -45;
		power: 60;
		type: "POKEMON_TYPE_ELECTRIC";
		uniqueId: "WILDBOLT_STORM";
		vfxName: "wildbolt_storm";
	}
>;
export type CombatMoveV0398MoveSpiritShackle = CombatMove<
	"COMBAT_V0398_MOVE_SPIRIT_SHACKLE",
	{
		buffs: {
			buffActivationChance: 0.33;
			targetDefenseStatStageChange: -1;
		};
		energyDelta: -40;
		power: 50;
		type: "POKEMON_TYPE_GHOST";
		uniqueId: "SPIRIT_SHACKLE";
		vfxName: "spirit_shackle";
	}
>;
export type CombatMoveV0399MoveVoltTackle = CombatMove<
	"COMBAT_V0399_MOVE_VOLT_TACKLE",
	{
		buffs: {
			attackerDefenseStatStageChange: -1;
			buffActivationChance: 1;
		};
		energyDelta: -40;
		power: 90;
		type: "POKEMON_TYPE_ELECTRIC";
		uniqueId: "VOLT_TACKLE";
		vfxName: "volt_tackle";
	}
>;
export type CombatMoveV0400MoveDarkestLariat = CombatMove<
	"COMBAT_V0400_MOVE_DARKEST_LARIAT",
	{
		energyDelta: -60;
		power: 120;
		type: "POKEMON_TYPE_DARK";
		uniqueId: "DARKEST_LARIAT";
		vfxName: "darkest_lariat";
	}
>;
export type CombatMoveV0401MovePsywaveFast = CombatMove<
	"COMBAT_V0401_MOVE_PSYWAVE_FAST",
	{
		energyDelta: 4;
		power: 3;
		type: "POKEMON_TYPE_PSYCHIC";
		uniqueId: "PSYWAVE_FAST";
		vfxName: "psywave";
	}
>;
export type CombatMoveV0402MoveMetalSoundFast = CombatMove<
	"COMBAT_V0402_MOVE_METAL_SOUND_FAST",
	{
		durationTurns: 1;
		energyDelta: 8;
		power: 5;
		type: "POKEMON_TYPE_STEEL";
		uniqueId: "METAL_SOUND_FAST";
		vfxName: "metal_sound";
	}
>;
export type CombatMoveV0403MoveSandAttackFast = CombatMove<
	"COMBAT_V0403_MOVE_SAND_ATTACK_FAST",
	{
		energyDelta: 4;
		power: 2;
		type: "POKEMON_TYPE_GROUND";
		uniqueId: "SAND_ATTACK_FAST";
		vfxName: "sand_attack";
	}
>;
export type CombatMoveV0404MoveSunsteelStrike = CombatMove<
	"COMBAT_V0404_MOVE_SUNSTEEL_STRIKE",
	{
		energyDelta: -65;
		power: 135;
		type: "POKEMON_TYPE_STEEL";
		uniqueId: "SUNSTEEL_STRIKE";
		vfxName: "sunsteel_strike";
	}
>;
export type CombatMoveV0405MoveMoongeistBeam = CombatMove<
	"COMBAT_V0405_MOVE_MOONGEIST_BEAM",
	{
		energyDelta: -65;
		power: 135;
		type: "POKEMON_TYPE_GHOST";
		uniqueId: "MOONGEIST_BEAM";
		vfxName: "moongeist_beam";
	}
>;
export type CombatMoveV0406MoveAuraWheelElectric = CombatMove<
	"COMBAT_V0406_MOVE_AURA_WHEEL_ELECTRIC",
	{
		buffs: {
			attackerAttackStatStageChange: 1;
			buffActivationChance: 1;
		};
		energyDelta: -45;
		power: 100;
		type: "POKEMON_TYPE_ELECTRIC";
		uniqueId: "AURA_WHEEL_ELECTRIC";
		vfxName: "aura_wheel_electric";
	}
>;
export type CombatMoveV0407MoveAuraWheelDark = CombatMove<
	"COMBAT_V0407_MOVE_AURA_WHEEL_DARK",
	{
		buffs: {
			attackerAttackStatStageChange: 1;
			buffActivationChance: 1;
		};
		energyDelta: -45;
		power: 100;
		type: "POKEMON_TYPE_DARK";
		uniqueId: "AURA_WHEEL_DARK";
		vfxName: "aura_wheel_electric";
	}
>;
export type CombatMoveV0408MoveHighJumpKick = CombatMove<
	"COMBAT_V0408_MOVE_HIGH_JUMP_KICK",
	{
		buffs: {
			attackerDefenseStatStageChange: -4;
			buffActivationChance: 0.1;
		};
		energyDelta: -55;
		power: 110;
		type: "POKEMON_TYPE_FIGHTING";
		uniqueId: "HIGH_JUMP_KICK";
		vfxName: "high_jump_kick";
	}
>;
export type CombatMoveV0462MoveForcePalmFast = CombatMove<
	"COMBAT_V0462_MOVE_FORCE_PALM_FAST",
	{
		durationTurns: 2;
		energyDelta: 10;
		power: 13;
		type: "POKEMON_TYPE_FIGHTING";
		uniqueId: "FORCE_PALM_FAST";
		vfxName: "force_palm_fast";
	}
>;
export type CombatMoveV0463MoveSparklingAria = CombatMove<
	"COMBAT_V0463_MOVE_SPARKLING_ARIA",
	{
		energyDelta: -45;
		power: 80;
		type: "POKEMON_TYPE_WATER";
		uniqueId: "SPARKLING_ARIA";
		vfxName: "sparkling_aria";
	}
>;
export type CombatMoveV0464MoveRageFist = CombatMove<
	"COMBAT_V0464_MOVE_RAGE_FIST",
	{
		buffs: {
			attackerAttackStatStageChange: 1;
			buffActivationChance: 1;
		};
		energyDelta: -35;
		power: 50;
		type: "POKEMON_TYPE_GHOST";
		uniqueId: "RAGE_FIST";
		vfxName: "rage_fist";
	}
>;
export type CombatMoveV0465MoveFlowerTrick = CombatMove<
	"COMBAT_V0465_MOVE_FLOWER_TRICK",
	{
		buffs: {
			attackerAttackStatStageChange: 1;
			buffActivationChance: 1;
		};
		energyDelta: -35;
		power: 30;
		type: "POKEMON_TYPE_GRASS";
		uniqueId: "FLOWER_TRICK";
		vfxName: "flower_trick";
	}
>;
export type CombatMoveV0466MoveFreezeShock = CombatMove<
	"COMBAT_V0466_MOVE_FREEZE_SHOCK",
	{
		buffs: {
			buffActivationChance: 0.3;
			targetAttackStatStageChange: -1;
		};
		energyDelta: -60;
		power: 120;
		type: "POKEMON_TYPE_ICE";
		uniqueId: "FREEZE_SHOCK";
		vfxName: "freeze_shock";
	}
>;
export type CombatMoveV0467MoveIceBurn = CombatMove<
	"COMBAT_V0467_MOVE_ICE_BURN",
	{
		buffs: {
			buffActivationChance: 0.3;
			targetDefenseStatStageChange: -1;
		};
		energyDelta: -60;
		power: 120;
		type: "POKEMON_TYPE_ICE";
		uniqueId: "ICE_BURN";
		vfxName: "ice_burn";
	}
>;
export type CombatMoveV0468MoveTorchSong = CombatMove<
	"COMBAT_V0468_MOVE_TORCH_SONG",
	{
		buffs: {
			attackerAttackStatStageChange: 1;
			buffActivationChance: 1;
		};
		energyDelta: -45;
		power: 70;
		type: "POKEMON_TYPE_FIRE";
		uniqueId: "TORCH_SONG";
		vfxName: "torch_song";
	}
>;
export type CombatMoveV0469MoveBehemothBlade = CombatMove<
	"COMBAT_V0469_MOVE_BEHEMOTH_BLADE",
	{
		energyDelta: -55;
		power: 100;
		type: "POKEMON_TYPE_STEEL";
		uniqueId: "BEHEMOTH_BLADE";
		vfxName: "behemoth_blade";
	}
>;
export type CombatMoveV0470MoveBehemothBash = CombatMove<
	"COMBAT_V0470_MOVE_BEHEMOTH_BASH",
	{
		energyDelta: -45;
		power: 80;
		type: "POKEMON_TYPE_STEEL";
		uniqueId: "BEHEMOTH_BASH";
		vfxName: "behemoth_bash";
	}
>;
export type CombatMoveV0471MoveUpperHand = CombatMove<
	"COMBAT_V0471_MOVE_UPPER_HAND",
	{
		buffs: {
			buffActivationChance: 0.3;
			targetDefenseStatStageChange: -1;
		};
		energyDelta: -40;
		power: 70;
		type: "POKEMON_TYPE_FIGHTING";
		uniqueId: "UPPER_HAND";
		vfxName: "upper_hand";
	}
>;
export type CombatMoveV0472MoveThunderCage = CombatMove<
	"COMBAT_V0472_MOVE_THUNDER_CAGE",
	{
		buffs: {
			buffActivationChance: 1;
			targetDefenseStatStageChange: -1;
		};
		energyDelta: -40;
		power: 60;
		type: "POKEMON_TYPE_ELECTRIC";
		uniqueId: "THUNDER_CAGE";
		vfxName: "thunder_cage";
	}
>;
export type CombatMoveV0482MoveDynamaxCannon = CombatMove<
	"COMBAT_V0482_MOVE_DYNAMAX_CANNON",
	{
		energyDelta: -45;
		power: 80;
		type: "POKEMON_TYPE_DRAGON";
		uniqueId: "DYNAMAX_CANNON";
		vfxName: "dynamax_cannon";
	}
>;
export type CombatMoveV0484MoveClangingScales = CombatMove<
	"COMBAT_V0484_MOVE_CLANGING_SCALES",
	{
		buffs: {
			attackerDefenseStatStageChange: -1;
			buffActivationChance: 1;
		};
		energyDelta: -45;
		power: 120;
		type: "POKEMON_TYPE_DRAGON";
		uniqueId: "CLANGING_SCALES";
		vfxName: "clanging_scales";
	}
>;
export type CombatMoveV0485MoveCrushGrip = CombatMove<
	"COMBAT_V0485_MOVE_CRUSH_GRIP",
	{
		energyDelta: -50;
		power: 110;
		type: "POKEMON_TYPE_NORMAL";
		uniqueId: "CRUSH_GRIP";
		vfxName: "crush_grip";
	}
>;
export type CombatMoveV0486MoveDragonEnergy = CombatMove<
	"COMBAT_V0486_MOVE_DRAGON_ENERGY",
	{
		energyDelta: -45;
		power: 90;
		type: "POKEMON_TYPE_DRAGON";
		uniqueId: "DRAGON_ENERGY";
		vfxName: "dragon_energy";
	}
>;
export type CombatMoveV0487MoveAquaStep = CombatMove<
	"COMBAT_V0487_MOVE_AQUA_STEP",
	{
		buffs: {
			attackerAttackStatStageChange: 1;
			buffActivationChance: 1;
		};
		energyDelta: -40;
		power: 55;
		type: "POKEMON_TYPE_WATER";
		uniqueId: "AQUA_STEP";
		vfxName: "aqua_step";
	}
>;
export type CombatMoveV0488MoveChillingWater = CombatMove<
	"COMBAT_V0488_MOVE_CHILLING_WATER",
	{
		buffs: {
			buffActivationChance: 1;
			targetAttackStatStageChange: -1;
		};
		energyDelta: -45;
		power: 60;
		type: "POKEMON_TYPE_WATER";
		uniqueId: "CHILLING_WATER";
		vfxName: "chilling_water";
	}
>;
export type CombatMoveV0489MoveSecretSword = CombatMove<
	"COMBAT_V0489_MOVE_SECRET_SWORD",
	{
		buffs: Record<string, never>;
		energyDelta: -35;
		power: 70;
		type: "POKEMON_TYPE_FIGHTING";
		uniqueId: "SECRET_SWORD";
		vfxName: "secret_sword";
	}
>;
export type CombatMoveV0490MoveBeakBlast = CombatMove<
	"COMBAT_V0490_MOVE_BEAK_BLAST",
	{
		buffs: {
			buffActivationChance: 1;
			targetAttackStatStageChange: -1;
		};
		energyDelta: -55;
		power: 110;
		type: "POKEMON_TYPE_FLYING";
		uniqueId: "BEAK_BLAST";
		vfxName: "beak_blast";
	}
>;
export type CombatMoveV0491MoveMindBlown = CombatMove<
	"COMBAT_V0491_MOVE_MIND_BLOWN",
	{
		buffs: {
			attackerDefenseStatStageChange: -4;
			buffActivationChance: 1;
		};
		energyDelta: -35;
		power: 90;
		type: "POKEMON_TYPE_FIRE";
		uniqueId: "MIND_BLOWN";
		vfxName: "mind_blown";
	}
>;
export type CombatMoveV0492MoveDrumBeating = CombatMove<
	"COMBAT_V0492_MOVE_DRUM_BEATING",
	{
		buffs: {
			buffActivationChance: 1;
			targetAttackStatStageChange: -1;
		};
		energyDelta: -35;
		power: 60;
		type: "POKEMON_TYPE_GRASS";
		uniqueId: "DRUM_BEATING";
		vfxName: "drum_beating";
	}
>;
export type CombatMoveV0493MovePyroball = CombatMove<
	"COMBAT_V0493_MOVE_PYROBALL",
	{
		energyDelta: -40;
		power: 75;
		type: "POKEMON_TYPE_FIRE";
		uniqueId: "PYROBALL";
		vfxName: "pyroball";
	}
>;
export type CombatMoveV0494MoveGigatonHammer = CombatMove<
	"COMBAT_V0494_MOVE_GIGATON_HAMMER",
	{
		energyDelta: -60;
		power: 130;
		type: "POKEMON_TYPE_STEEL";
		uniqueId: "GIGATON_HAMMER";
		vfxName: "gigaton_hammer";
	}
>;

export type CombatMoveMasterfileEntry =
	| CombatMoveV0013MoveWrap
	| CombatMoveV0014MoveHyperBeam
	| CombatMoveV0016MoveDarkPulse
	| CombatMoveV0018MoveSludge
	| CombatMoveV0020MoveViceGrip
	| CombatMoveV0021MoveFlameWheel
	| CombatMoveV0022MoveMegahorn
	| CombatMoveV0024MoveFlamethrower
	| CombatMoveV0026MoveDig
	| CombatMoveV0028MoveCrossChop
	| CombatMoveV0030MovePsybeam
	| CombatMoveV0031MoveEarthquake
	| CombatMoveV0032MoveStoneEdge
	| CombatMoveV0033MoveIcePunch
	| CombatMoveV0034MoveHeartStamp
	| CombatMoveV0035MoveDischarge
	| CombatMoveV0036MoveFlashCannon
	| CombatMoveV0038MoveDrillPeck
	| CombatMoveV0039MoveIceBeam
	| CombatMoveV0040MoveBlizzard
	| CombatMoveV0042MoveHeatWave
	| CombatMoveV0045MoveAerialAce
	| CombatMoveV0046MoveDrillRun
	| CombatMoveV0047MovePetalBlizzard
	| CombatMoveV0048MoveMegaDrain
	| CombatMoveV0049MoveBugBuzz
	| CombatMoveV0050MovePoisonFang
	| CombatMoveV0051MoveNightSlash
	| CombatMoveV0053MoveBubbleBeam
	| CombatMoveV0054MoveSubmission
	| CombatMoveV0056MoveLowSweep
	| CombatMoveV0057MoveAquaJet
	| CombatMoveV0058MoveAquaTail
	| CombatMoveV0059MoveSeedBomb
	| CombatMoveV0060MovePsyshock
	| CombatMoveV0062MoveAncientPower
	| CombatMoveV0063MoveRockTomb
	| CombatMoveV0064MoveRockSlide
	| CombatMoveV0065MovePowerGem
	| CombatMoveV0066MoveShadowSneak
	| CombatMoveV0067MoveShadowPunch
	| CombatMoveV0069MoveOminousWind
	| CombatMoveV0070MoveShadowBall
	| CombatMoveV0072MoveMagnetBomb
	| CombatMoveV0074MoveIronHead
	| CombatMoveV0075MoveParabolicCharge
	| CombatMoveV0077MoveThunderPunch
	| CombatMoveV0078MoveThunder
	| CombatMoveV0079MoveThunderbolt
	| CombatMoveV0080MoveTwister
	| CombatMoveV0082MoveDragonPulse
	| CombatMoveV0083MoveDragonClaw
	| CombatMoveV0084MoveDisarmingVoice
	| CombatMoveV0085MoveDrainingKiss
	| CombatMoveV0086MoveDazzlingGleam
	| CombatMoveV0087MoveMoonblast
	| CombatMoveV0088MovePlayRough
	| CombatMoveV0089MoveCrossPoison
	| CombatMoveV0090MoveSludgeBomb
	| CombatMoveV0091MoveSludgeWave
	| CombatMoveV0092MoveGunkShot
	| CombatMoveV0094MoveBoneClub
	| CombatMoveV0095MoveBulldoze
	| CombatMoveV0096MoveMudBomb
	| CombatMoveV0099MoveSignalBeam
	| CombatMoveV0100MoveXScissor
	| CombatMoveV0101MoveFlameCharge
	| CombatMoveV0102MoveFlameBurst
	| CombatMoveV0103MoveFireBlast
	| CombatMoveV0104MoveBrine
	| CombatMoveV0105MoveWaterPulse
	| CombatMoveV0106MoveScald
	| CombatMoveV0107MoveHydroPump
	| CombatMoveV0108MovePsychic
	| CombatMoveV0109MovePsystrike
	| CombatMoveV0111MoveIcyWind
	| CombatMoveV0114MoveGigaDrain
	| CombatMoveV0115MoveFirePunch
	| CombatMoveV0116MoveSolarBeam
	| CombatMoveV0117MoveLeafBlade
	| CombatMoveV0118MovePowerWhip
	| CombatMoveV0121MoveAirCutter
	| CombatMoveV0122MoveHurricane
	| CombatMoveV0123MoveBrickBreak
	| CombatMoveV0125MoveSwift
	| CombatMoveV0126MoveHornAttack
	| CombatMoveV0127MoveStomp
	| CombatMoveV0129MoveHyperFang
	| CombatMoveV0131MoveBodySlam
	| CombatMoveV0132MoveRest
	| CombatMoveV0133MoveStruggle
	| CombatMoveV0134MoveScaldBlastoise
	| CombatMoveV0135MoveHydroPumpBlastoise
	| CombatMoveV0136MoveWrapGreen
	| CombatMoveV0137MoveWrapPink
	| CombatMoveV0200MoveFuryCutterFast
	| CombatMoveV0201MoveBugBiteFast
	| CombatMoveV0202MoveBiteFast
	| CombatMoveV0203MoveSuckerPunchFast
	| CombatMoveV0204MoveDragonBreathFast
	| CombatMoveV0205MoveThunderShockFast
	| CombatMoveV0206MoveSparkFast
	| CombatMoveV0207MoveLowKickFast
	| CombatMoveV0208MoveKarateChopFast
	| CombatMoveV0209MoveEmberFast
	| CombatMoveV0210MoveWingAttackFast
	| CombatMoveV0211MovePeckFast
	| CombatMoveV0212MoveLickFast
	| CombatMoveV0213MoveShadowClawFast
	| CombatMoveV0214MoveVineWhipFast
	| CombatMoveV0215MoveRazorLeafFast
	| CombatMoveV0216MoveMudShotFast
	| CombatMoveV0217MoveIceShardFast
	| CombatMoveV0218MoveFrostBreathFast
	| CombatMoveV0219MoveQuickAttackFast
	| CombatMoveV0220MoveScratchFast
	| CombatMoveV0221MoveTackleFast
	| CombatMoveV0222MovePoundFast
	| CombatMoveV0223MoveCutFast
	| CombatMoveV0224MovePoisonJabFast
	| CombatMoveV0225MoveAcidFast
	| CombatMoveV0226MovePsychoCutFast
	| CombatMoveV0227MoveRockThrowFast
	| CombatMoveV0228MoveMetalClawFast
	| CombatMoveV0229MoveBulletPunchFast
	| CombatMoveV0230MoveWaterGunFast
	| CombatMoveV0231MoveSplashFast
	| CombatMoveV0232MoveWaterGunFastBlastoise
	| CombatMoveV0233MoveMudSlapFast
	| CombatMoveV0234MoveZenHeadbuttFast
	| CombatMoveV0235MoveConfusionFast
	| CombatMoveV0236MovePoisonStingFast
	| CombatMoveV0237MoveBubbleFast
	| CombatMoveV0238MoveFeintAttackFast
	| CombatMoveV0239MoveSteelWingFast
	| CombatMoveV0240MoveFireFangFast
	| CombatMoveV0241MoveRockSmashFast
	| CombatMoveV0242MoveTransformFast
	| CombatMoveV0243MoveCounterFast
	| CombatMoveV0244MovePowderSnowFast
	| CombatMoveV0245MoveCloseCombat
	| CombatMoveV0246MoveDynamicPunch
	| CombatMoveV0247MoveFocusBlast
	| CombatMoveV0248MoveAuroraBeam
	| CombatMoveV0249MoveChargeBeamFast
	| CombatMoveV0250MoveVoltSwitchFast
	| CombatMoveV0251MoveWildCharge
	| CombatMoveV0252MoveZapCannon
	| CombatMoveV0253MoveDragonTailFast
	| CombatMoveV0254MoveAvalanche
	| CombatMoveV0255MoveAirSlashFast
	| CombatMoveV0256MoveBraveBird
	| CombatMoveV0257MoveSkyAttack
	| CombatMoveV0258MoveSandTomb
	| CombatMoveV0259MoveRockBlast
	| CombatMoveV0260MoveInfestationFast
	| CombatMoveV0261MoveStruggleBugFast
	| CombatMoveV0262MoveSilverWind
	| CombatMoveV0263MoveAstonishFast
	| CombatMoveV0264MoveHexFast
	| CombatMoveV0265MoveNightShade
	| CombatMoveV0266MoveIronTailFast
	| CombatMoveV0267MoveGyroBall
	| CombatMoveV0268MoveHeavySlam
	| CombatMoveV0269MoveFireSpinFast
	| CombatMoveV0270MoveOverheat
	| CombatMoveV0271MoveBulletSeedFast
	| CombatMoveV0272MoveGrassKnot
	| CombatMoveV0273MoveEnergyBall
	| CombatMoveV0274MoveExtrasensoryFast
	| CombatMoveV0275MoveFuturesight
	| CombatMoveV0276MoveMirrorCoat
	| CombatMoveV0277MoveOutrage
	| CombatMoveV0278MoveSnarlFast
	| CombatMoveV0279MoveCrunch
	| CombatMoveV0280MoveFoulPlay
	| CombatMoveV0281MoveHiddenPowerFast
	| CombatMoveV0282MoveTakeDownFast
	| CombatMoveV0283MoveWaterfallFast
	| CombatMoveV0284MoveSurf
	| CombatMoveV0285MoveDracoMeteor
	| CombatMoveV0286MoveDoomDesire
	| CombatMoveV0287MoveYawnFast
	| CombatMoveV0288MovePsychoBoost
	| CombatMoveV0289MoveOriginPulse
	| CombatMoveV0290MovePrecipiceBlades
	| CombatMoveV0291MovePresentFast
	| CombatMoveV0292MoveWeatherBallFire
	| CombatMoveV0293MoveWeatherBallIce
	| CombatMoveV0294MoveWeatherBallRock
	| CombatMoveV0295MoveWeatherBallWater
	| CombatMoveV0296MoveFrenzyPlant
	| CombatMoveV0297MoveSmackDownFast
	| CombatMoveV0298MoveBlastBurn
	| CombatMoveV0299MoveHydroCannon
	| CombatMoveV0300MoveLastResort
	| CombatMoveV0301MoveMeteorMash
	| CombatMoveV0302MoveSkullBash
	| CombatMoveV0303MoveAcidSpray
	| CombatMoveV0304MoveEarthPower
	| CombatMoveV0305MoveCrabhammer
	| CombatMoveV0306MoveLunge
	| CombatMoveV0308MoveOctazooka
	| CombatMoveV0309MoveMirrorShot
	| CombatMoveV0310MoveSuperPower
	| CombatMoveV0311MoveFellStinger
	| CombatMoveV0312MoveLeafTornado
	| CombatMoveV0314MoveDrainPunch
	| CombatMoveV0315MoveShadowBone
	| CombatMoveV0316MoveMuddyWater
	| CombatMoveV0317MoveBlazeKick
	| CombatMoveV0318MoveRazorShell
	| CombatMoveV0319MovePowerUpPunch
	| CombatMoveV0320MoveCharmFast
	| CombatMoveV0321MoveGigaImpact
	| CombatMoveV0322MoveFrustration
	| CombatMoveV0323MoveReturn
	| CombatMoveV0324MoveSynchronoise
	| CombatMoveV0325MoveLockOnFast
	| CombatMoveV0326MoveThunderFangFast
	| CombatMoveV0327MoveIceFangFast
	| CombatMoveV0330MoveSacredSword
	| CombatMoveV0331MoveFlyingPress
	| CombatMoveV0332MoveAuraSphere
	| CombatMoveV0333MovePayback
	| CombatMoveV0334MoveRockWrecker
	| CombatMoveV0335MoveAeroblast
	| CombatMoveV0336MoveTechnoBlastNormal
	| CombatMoveV0337MoveTechnoBlastBurn
	| CombatMoveV0338MoveTechnoBlastChill
	| CombatMoveV0339MoveTechnoBlastWater
	| CombatMoveV0340MoveTechnoBlastShock
	| CombatMoveV0341MoveFly
	| CombatMoveV0342MoveVCreate
	| CombatMoveV0343MoveLeafStorm
	| CombatMoveV0344MoveTriAttack
	| CombatMoveV0345MoveGustFast
	| CombatMoveV0346MoveIncinerateFast
	| CombatMoveV0348MoveFeatherDance
	| CombatMoveV0350MoveFairyWindFast
	| CombatMoveV0352MoveWeatherBallNormal
	| CombatMoveV0353MovePsychicFangs
	| CombatMoveV0356MoveDoubleKickFast
	| CombatMoveV0357MoveMagicalLeafFast
	| CombatMoveV0358MoveSacredFire
	| CombatMoveV0359MoveIcicleSpear
	| CombatMoveV0360MoveAeroblastPlus
	| CombatMoveV0361MoveAeroblastPlusPlus
	| CombatMoveV0362MoveSacredFirePlus
	| CombatMoveV0363MoveSacredFirePlusPlus
	| CombatMoveV0364MoveAcrobatics
	| CombatMoveV0365MoveLusterPurge
	| CombatMoveV0366MoveMistBall
	| CombatMoveV0367MoveBrutalSwing
	| CombatMoveV0368MoveRolloutFast
	| CombatMoveV0369MoveSeedFlare
	| CombatMoveV0370MoveObstruct
	| CombatMoveV0371MoveShadowForce
	| CombatMoveV0372MoveMeteorBeam
	| CombatMoveV0373MoveWaterShurikenFast
	| CombatMoveV0374MoveFusionBolt
	| CombatMoveV0375MoveFusionFlare
	| CombatMoveV0376MovePoltergeist
	| CombatMoveV0377MoveHighHorsepower
	| CombatMoveV0378MoveGlaciate
	| CombatMoveV0379MoveBreakingSwipe
	| CombatMoveV0380MoveBoomburst
	| CombatMoveV0381MoveDoubleIronBash
	| CombatMoveV0382MoveMysticalFire
	| CombatMoveV0383MoveLiquidation
	| CombatMoveV0384MoveDragonAscent
	| CombatMoveV0385MoveLeafageFast
	| CombatMoveV0386MoveMagmaStorm
	| CombatMoveV0387MoveGeomancyFast
	| CombatMoveV0388MoveSpacialRend
	| CombatMoveV0389MoveOblivionWing
	| CombatMoveV0390MoveNaturesMadness
	| CombatMoveV0391MoveTripleAxel
	| CombatMoveV0392MoveTrailblaze
	| CombatMoveV0393MoveScorchingSands
	| CombatMoveV0394MoveRoarOfTime
	| CombatMoveV0395MoveBleakwindStorm
	| CombatMoveV0396MoveSandsearStorm
	| CombatMoveV0397MoveWildboltStorm
	| CombatMoveV0398MoveSpiritShackle
	| CombatMoveV0399MoveVoltTackle
	| CombatMoveV0400MoveDarkestLariat
	| CombatMoveV0401MovePsywaveFast
	| CombatMoveV0402MoveMetalSoundFast
	| CombatMoveV0403MoveSandAttackFast
	| CombatMoveV0404MoveSunsteelStrike
	| CombatMoveV0405MoveMoongeistBeam
	| CombatMoveV0406MoveAuraWheelElectric
	| CombatMoveV0407MoveAuraWheelDark
	| CombatMoveV0408MoveHighJumpKick
	| CombatMoveV0462MoveForcePalmFast
	| CombatMoveV0463MoveSparklingAria
	| CombatMoveV0464MoveRageFist
	| CombatMoveV0465MoveFlowerTrick
	| CombatMoveV0466MoveFreezeShock
	| CombatMoveV0467MoveIceBurn
	| CombatMoveV0468MoveTorchSong
	| CombatMoveV0469MoveBehemothBlade
	| CombatMoveV0470MoveBehemothBash
	| CombatMoveV0471MoveUpperHand
	| CombatMoveV0472MoveThunderCage
	| CombatMoveV0482MoveDynamaxCannon
	| CombatMoveV0484MoveClangingScales
	| CombatMoveV0485MoveCrushGrip
	| CombatMoveV0486MoveDragonEnergy
	| CombatMoveV0487MoveAquaStep
	| CombatMoveV0488MoveChillingWater
	| CombatMoveV0489MoveSecretSword
	| CombatMoveV0490MoveBeakBlast
	| CombatMoveV0491MoveMindBlown
	| CombatMoveV0492MoveDrumBeating
	| CombatMoveV0493MovePyroball
	| CombatMoveV0494MoveGigatonHammer;

export type CombatMoveTemplateID = CombatMoveMasterfileEntry["templateId"];
