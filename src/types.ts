export type Json = null | boolean | number | string | Json[] | JsonObject;

export interface JsonObject {
	[key: string]: Json;
}

export interface GameMasterEntryRaw {
	templateId: string;
	data: JsonObject;
}

export interface TemplateFilterOptions {
	includeAll: boolean;
	prefixes: string[];
	matches: string[];
}

export interface BaseGeneratorCliOptions extends TemplateFilterOptions {
	inputPath: string;
	outputPath: string;
}

export interface ShapeProperty<TShape> {
	shape: TShape;
	optional: boolean;
}

export interface NamedShapeRenderContext {
	declarations: string[];
	seenNames: Set<string>;
	emittedShapes: Map<string, string>;
}
