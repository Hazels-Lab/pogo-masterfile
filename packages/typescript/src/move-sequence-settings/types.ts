// Generated from Pokémon GO masterfile — group "moveSequenceSettings", 331 entries (structural types).

export interface MoveSequenceSettings<TemplateID extends string = string, TData extends MoveSequenceSettingsData = MoveSequenceSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		moveSequenceSettings: TData;
	};
}

export interface MoveSequenceSettingsData {
	sequence: Array<string>;
}
