export interface RollBack<TemplateID extends string> {
	templateId: TemplateID;
	data: RollBackData<TemplateID>;
}

export interface RollBackData<TemplateID extends string> {
	templateId: TemplateID;
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
