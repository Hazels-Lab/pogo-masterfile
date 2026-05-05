// Generated from Pokémon GO masterfile — group "moveSequenceSettings", 332 entries (structural types).

import type { W } from "../_utils";

export interface MoveSequenceSettings<TemplateID extends string = string, TData extends MoveSequenceSettingsData = MoveSequenceSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		moveSequenceSettings: TData;
	};
}
export type MoveSequenceSettingsType = W<MoveSequenceSettings>;

export interface MoveSequenceSettingsData {
	sequence: Array<string>;
}
