// Generated from Pokémon GO masterfile — group "rollBack", 5 entries (structural types).

import type { W } from "../_utils";

export interface RollBack<TemplateID extends string = string, TData extends RollBackData = RollBackData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		rollBack: TData & {
			rollbackPercentage: 100;
		};
	};
}
export type RollBackType = W<RollBack>;

export interface RollBackData {}
