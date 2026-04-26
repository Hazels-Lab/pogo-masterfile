// Generated from Pokémon GO masterfile — group "rollBack", 2 entries.

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

export type RollBackAndroidSensors = RollBack<"ANDROID_SENSORS_ROLL_BACK", Record<string, never>>;
export type RollBackBidirectionalFpWeeklyChallengeReward = RollBack<
	"BIDIRECTIONAL_FP_WEEKLY_CHALLENGE_REWARD_ROLL_BACK",
	Record<string, never>
>;

export type RollBackMasterfileEntry = RollBackAndroidSensors | RollBackBidirectionalFpWeeklyChallengeReward;

export type RollBackTemplateID = RollBackMasterfileEntry["templateId"];
