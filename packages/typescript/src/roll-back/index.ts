// Generated from Pokémon GO masterfile — group "rollBack", 2 entries (structural types).

export type * from "./variants";

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

export type RollBackMasterfileEntry = RollBackAndroidSensors | RollBackBidirectionalFpWeeklyChallengeReward;

export type RollBackTemplateID = RollBackMasterfileEntry["templateId"];
