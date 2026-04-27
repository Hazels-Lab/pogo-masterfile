// Generated from Pokémon GO masterfile — group "rollBack", 2 entries (structural types).

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
