export type Json =
	| null
	| boolean
	| number
	| string
	| Json[]
	| { [key: string]: Json };

export interface GameMasterEntryRaw {
	templateId: string;
	data: Record<string, Json>;
}
