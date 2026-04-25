export interface FortPowerUpLevelSettings<
	TemplateID extends string = string,
	TData extends FortPowerUpLevelSettingsData = FortPowerUpLevelSettingsData,
> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		fortPowerUpLevelSettings: TData & {
			level: TemplateID;
		};
	};
}

export interface FortPowerUpLevelSettingsData {
	additionalLevelPowerupDurationMs?: number;
	minPowerUpPointsRequired?: number;
	powerupLevelRewards?: Array<string>;
}

export type FortPowerUpLevelSettings0 = FortPowerUpLevelSettings<"FORT_POWER_UP_LEVEL_0">;
export type FortPowerUpLevelSettings1 = FortPowerUpLevelSettings<
	"FORT_POWER_UP_LEVEL_1",
	{
		additionalLevelPowerupDurationMs: 172800000;
		minPowerUpPointsRequired: 50;
		powerupLevelRewards: ["FORT_POWER_UP_REWARD_BONUS_ITEM_ON_SPIN"];
	}
>;
export type FortPowerUpLevelSettings2 = FortPowerUpLevelSettings<
	"FORT_POWER_UP_LEVEL_2",
	{
		additionalLevelPowerupDurationMs: 43200000;
		minPowerUpPointsRequired: 100;
		powerupLevelRewards: ["FORT_POWER_UP_REWARD_BONUS_ITEM_ON_SPIN", "FORT_POWER_UP_LEVEL_REWARD_BUDDY_BONUS_HEART"];
	}
>;
export type FortPowerUpLevelSettings3 = FortPowerUpLevelSettings<
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
>;

export type FortPowerUpLevelSettingsMasterfileEntry =
	| FortPowerUpLevelSettings0
	| FortPowerUpLevelSettings1
	| FortPowerUpLevelSettings2
	| FortPowerUpLevelSettings3;

export type FortPowerUpLevelSettingsTemplateID = FortPowerUpLevelSettingsMasterfileEntry["templateId"];
