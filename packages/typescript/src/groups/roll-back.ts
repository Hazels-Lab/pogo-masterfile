export interface RollBack<TemplateID extends string = string, TData extends RollBackData = RollBackData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		rollBack: TData & {
			rollbackPercentage: 100;
		};
	};
}

export interface RollBackData {}

export type RollBackAndroidSensorsRollBack = RollBack<"ANDROID_SENSORS_ROLL_BACK">;
export type RollBackBidirectionalFpWeeklyChallengeRewardRollBack = RollBack<"BIDIRECTIONAL_FP_WEEKLY_CHALLENGE_REWARD_ROLL_BACK">;

export type RollBackMasterfileEntry = RollBackAndroidSensorsRollBack | RollBackBidirectionalFpWeeklyChallengeRewardRollBack;

export type RollBackTemplateID = RollBackMasterfileEntry["templateId"];
