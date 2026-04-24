export interface RollBack<T extends string> {
	templateId: T;
	data: RollBackData<T>;
}

export interface RollBackData<T extends string> {
	templateId: T;
	rollBack: {
		rollbackPercentage: 100;
	};
}

export type RollBackAndroidSensorsRollBack = RollBack<"ANDROID_SENSORS_ROLL_BACK">;
export type RollBackBidirectionalFpWeeklyChallengeRewardRollBack = RollBack<"BIDIRECTIONAL_FP_WEEKLY_CHALLENGE_REWARD_ROLL_BACK">;

export type RollBackMasterfileEntry =
	| RollBackAndroidSensorsRollBack
	| RollBackBidirectionalFpWeeklyChallengeRewardRollBack;

export type RollBackTemplateID = RollBackMasterfileEntry["templateId"];
