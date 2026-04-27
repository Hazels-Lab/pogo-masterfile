// Generated from Pokémon GO masterfile — group "fortPowerUpLevelSettings", 4 entries (variant aliases).

import type { S } from "../_utils";
import type { FortPowerUpLevelSettings } from "./index";

export type FortPowerUpLevelSettings0 = S<FortPowerUpLevelSettings<"FORT_POWER_UP_LEVEL_0">>;
export type FortPowerUpLevelSettings1 = S<
	FortPowerUpLevelSettings<
		"FORT_POWER_UP_LEVEL_1",
		{
			additionalLevelPowerupDurationMs: 172800000;
			minPowerUpPointsRequired: 50;
			powerupLevelRewards: ["FORT_POWER_UP_REWARD_BONUS_ITEM_ON_SPIN"];
		}
	>
>;
export type FortPowerUpLevelSettings2 = S<
	FortPowerUpLevelSettings<
		"FORT_POWER_UP_LEVEL_2",
		{
			additionalLevelPowerupDurationMs: 43200000;
			minPowerUpPointsRequired: 100;
			powerupLevelRewards: ["FORT_POWER_UP_REWARD_BONUS_ITEM_ON_SPIN", "FORT_POWER_UP_LEVEL_REWARD_BUDDY_BONUS_HEART"];
		}
	>
>;
export type FortPowerUpLevelSettings3 = S<
	FortPowerUpLevelSettings<
		"FORT_POWER_UP_LEVEL_3",
		{
			additionalLevelPowerupDurationMs: 43200000;
			minPowerUpPointsRequired: 250;
			powerupLevelRewards: [
				"FORT_POWER_UP_REWARD_BONUS_ITEM_ON_SPIN",
				"FORT_POWER_UP_LEVEL_REWARD_BUDDY_BONUS_HEART",
				"FORT_POWER_UP_REWARD_BONUS_RAID_POKEBALLS",
			];
		}
	>
>;

export type FortPowerUpLevelSettingsMasterfileEntry =
	| FortPowerUpLevelSettings0
	| FortPowerUpLevelSettings1
	| FortPowerUpLevelSettings2
	| FortPowerUpLevelSettings3;
