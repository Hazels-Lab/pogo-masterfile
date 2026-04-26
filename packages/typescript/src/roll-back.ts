// Generated from Pokémon GO masterfile — group "rollBack", 2 entries.

import type { S } from "./_utils";
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

export type RollBackAndroidSensors = S<RollBack<"ANDROID_SENSORS_ROLL_BACK">>;
export type RollBackBidirectionalFpWeeklyChallengeReward = S<RollBack<"BIDIRECTIONAL_FP_WEEKLY_CHALLENGE_REWARD_ROLL_BACK">>;

export type RollBackMasterfileEntry = RollBackAndroidSensors | RollBackBidirectionalFpWeeklyChallengeReward;

export type RollBackTemplateID = RollBackMasterfileEntry["templateId"];
