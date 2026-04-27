// Generated from Pokémon GO masterfile — group "combatType", 18 entries (structural types).

export interface CombatType<TemplateID extends string = string, TData extends CombatTypeData = CombatTypeData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		combatType: TData & {
			excellentLevelThreshold: 0.95;
			niceLevelThreshold: 0.3;
			type: TemplateID extends `COMBAT_${infer Rest}` ? Rest : string;
		};
	};
}

export interface CombatTypeData {
	greatLevelThreshold: number;
}
