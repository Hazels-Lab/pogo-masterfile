export interface FortPowerUpLevelSettings<T extends string> {
	templateId: T;
	data: FortPowerUpLevelSettingsData<T>;
}

export interface FortPowerUpLevelSettingsData<T extends string> {
	templateId: T;
	fortPowerUpLevelSettings: {
		additionalLevelPowerupDurationMs?: 43200000 | 172800000;
		level: T;
		minPowerUpPointsRequired?: 50 | 100 | 250;
		powerupLevelRewards?: Array<"FORT_POWER_UP_LEVEL_REWARD_BUDDY_BONUS_HEART" | "FORT_POWER_UP_REWARD_BONUS_ITEM_ON_SPIN" | "FORT_POWER_UP_REWARD_BONUS_RAID_POKEBALLS">;
	};
}

export type FortPowerUpLevelSettings0 = FortPowerUpLevelSettings<"FORT_POWER_UP_LEVEL_0">;
export type FortPowerUpLevelSettings1 = FortPowerUpLevelSettings<"FORT_POWER_UP_LEVEL_1">;
export type FortPowerUpLevelSettings2 = FortPowerUpLevelSettings<"FORT_POWER_UP_LEVEL_2">;
export type FortPowerUpLevelSettings3 = FortPowerUpLevelSettings<"FORT_POWER_UP_LEVEL_3">;

export type FortPowerUpLevelSettingsMasterfileEntry =
	| FortPowerUpLevelSettings0
	| FortPowerUpLevelSettings1
	| FortPowerUpLevelSettings2
	| FortPowerUpLevelSettings3;

export type FortPowerUpLevelSettingsTemplateID = FortPowerUpLevelSettingsMasterfileEntry["templateId"];
