import * as path from "node:path";
import type { GeneratorCliConfig } from "./codegen-core";
import {
	createNamedShapeRenderContext,
	createShapeKey,
	createUniqueName,
	dedupeByKey,
	filterGameMasterEntries,
	inferObjectShapeProperties,
	mergeObjectShapeProperties,
	parseGeneratorCliArgs,
	summarizeTemplateFilters,
} from "./codegen-core";
import type {
	BaseGeneratorCliOptions,
	GameMasterEntryRaw,
	Json,
	NamedShapeRenderContext,
	ShapeProperty,
} from "./types";

type Shape =
	| { kind: "null" }
	| { kind: "boolean" }
	| { kind: "number" }
	| { kind: "string" }
	| { kind: "array"; element: Shape }
	| { kind: "object"; props: Map<string, ShapeProperty<Shape>> }
	| { kind: "union"; variants: Shape[] };

interface CliOptions extends BaseGeneratorCliOptions {}

type RenderContext = NamedShapeRenderContext;

const RESERVED = new Set([
	"string",
	"number",
	"package",
	"public",
	"private",
	"function",
	"default",
	"class",
	"interface",
	"type",
	"var",
	"const",
	"let",
	"new",
	"delete",
	"export",
	"import",
	"extends",
	"implements",
	"enum",
	"await",
]);

const TYPESCRIPT_CLI_CONFIG = {
	description: "Generate TypeScript types from a GAME_MASTER.json file.",
	examples: [
		"tsx generate-game-master-types.ts --input ./GAME_MASTER.json --output ./all.types.ts --all",
		"tsx generate-game-master-types.ts --input ./GAME_MASTER.json --output ./avatar.types.ts --prefix AVATAR_",
		"tsx generate-game-master-types.ts --input ./GAME_MASTER.json --output ./filtered.types.ts --prefix AVATAR_ --match FEATURE_GATE",
	],
	defaults: {
		inputPath: path.resolve("GAME_MASTER.json"),
		outputPath: path.resolve(process.cwd(), "./packages/typescript/index.ts"),
		includeAll: false,
		prefixes: [],
		matches: [],
	},
} satisfies GeneratorCliConfig<CliOptions>;

export function parseTypescriptArgs(argv: string[]): CliOptions {
	return parseGeneratorCliArgs(argv, TYPESCRIPT_CLI_CONFIG);
}

function isObjectShape(
	shape: Shape,
): shape is Extract<Shape, { kind: "object" }> {
	return shape.kind === "object";
}

function isUnionShape(
	shape: Shape,
): shape is Extract<Shape, { kind: "union" }> {
	return shape.kind === "union";
}

function serializeShape(shape: Shape): unknown {
	switch (shape.kind) {
		case "null":
		case "boolean":
		case "number":
		case "string":
			return shape;
		case "array":
			return { kind: "array", element: serializeShape(shape.element) };
		case "union":
			return {
				kind: "union",
				variants: shape.variants
					.map(serializeShape)
					.sort((left, right) =>
						createShapeKey(left, (value) => value).localeCompare(
							createShapeKey(right, (value) => value),
						),
					),
			};
		case "object":
			return {
				kind: "object",
				props: [...shape.props.entries()]
					.sort(([left], [right]) => left.localeCompare(right))
					.map(([key, value]) => [
						key,
						{ optional: value.optional, shape: serializeShape(value.shape) },
					]),
			};
	}
}

function shapeKey(shape: Shape): string {
	return createShapeKey(shape, serializeShape);
}

function dedupeShapes(shapes: Shape[]): Shape[] {
	return dedupeByKey(shapes, shapeKey);
}

function inferShape(value: Json): Shape {
	if (value === null) {
		return { kind: "null" };
	}

	if (typeof value === "boolean") {
		return { kind: "boolean" };
	}

	if (typeof value === "number") {
		return { kind: "number" };
	}

	if (typeof value === "string") {
		return { kind: "string" };
	}

	if (Array.isArray(value)) {
		if (value.length === 0) {
			return { kind: "array", element: { kind: "union", variants: [] } };
		}

		const mergedElement = value.map(inferShape).reduce(mergeShapes);
		return { kind: "array", element: mergedElement };
	}

	return {
		kind: "object",
		props: inferObjectShapeProperties(value, inferShape),
	};
}

function mergeShapes(left: Shape, right: Shape): Shape {
	if (shapeKey(left) === shapeKey(right)) {
		return left;
	}

	if (isUnionShape(left)) {
		return {
			kind: "union",
			variants: dedupeShapes([
				...left.variants,
				...(isUnionShape(right) ? right.variants : [right]),
			]),
		};
	}

	if (isUnionShape(right)) {
		return {
			kind: "union",
			variants: dedupeShapes([left, ...right.variants]),
		};
	}

	if (isObjectShape(left) && isObjectShape(right)) {
		return {
			kind: "object",
			props: mergeObjectShapeProperties(left.props, right.props, mergeShapes),
		};
	}

	if (left.kind === "array" && right.kind === "array") {
		return {
			kind: "array",
			element: mergeShapes(left.element, right.element),
		};
	}

	return { kind: "union", variants: dedupeShapes([left, right]) };
}

function sanitizeIdentifier(input: string): string {
	const cleaned = input
		.replace(/[^a-zA-Z0-9_$]+/g, " ")
		.trim()
		.split(/\s+/)
		.filter(Boolean)
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
		.join("")
		.replace(/^[^a-zA-Z_$]+/, "T");

	const fallback = cleaned || "Anonymous";
	return RESERVED.has(fallback) ? `${fallback}Type` : fallback;
}

function quoteProp(key: string): string {
	return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(key) && !RESERVED.has(key)
		? key
		: JSON.stringify(key);
}

function uniqueName(base: string, ctx: RenderContext): string {
	return createUniqueName(base, ctx.seenNames);
}

function renderShape(
	shape: Shape,
	suggestedName: string,
	ctx: RenderContext,
): string {
	const key = shapeKey(shape);
	const existing = ctx.emittedShapes.get(key);

	if (existing) {
		return existing;
	}

	switch (shape.kind) {
		case "null":
			return "null";
		case "boolean":
			return "boolean";
		case "number":
			return "number";
		case "string":
			return "string";
		case "union":
			if (shape.variants.length === 0) {
				return "unknown";
			}

			return dedupeShapes(shape.variants)
				.map((variant) => renderShape(variant, suggestedName, ctx))
				.join(" | ");
		case "array": {
			const elementType = renderShape(
				shape.element,
				`${suggestedName}Item`,
				ctx,
			);
			return `(${elementType})[]`;
		}
		case "object": {
			const interfaceName = uniqueName(sanitizeIdentifier(suggestedName), ctx);
			ctx.emittedShapes.set(key, interfaceName);

			const body = [...shape.props.entries()]
				.sort(([left], [right]) => left.localeCompare(right))
				.map(([key, value]) => {
					const propType = renderShape(
						value.shape,
						`${interfaceName}${sanitizeIdentifier(key)}`,
						ctx,
					);
					const optional = value.optional ? "?" : "";
					return `  ${quoteProp(key)}${optional}: ${propType};`;
				})
				.join("\n");

			ctx.declarations.push(`export interface ${interfaceName} {\n${body}\n}`);
			return interfaceName;
		}
	}
}

export function buildTypescriptOutput(
	entries: GameMasterEntryRaw[],
	options: CliOptions,
): string {
	const filteredEntries = filterGameMasterEntries(entries, options);
	const ctx = createNamedShapeRenderContext();
	const entryTypeNames: string[] = [];
	const byTemplateIdLines: string[] = [];

	for (const entry of filteredEntries) {
		const interfaceBase = sanitizeIdentifier(entry.templateId);
		const dataShape = inferShape(entry.data);
		const dataTypeName = renderShape(dataShape, `${interfaceBase}Data`, ctx);
		const entryTypeName = uniqueName(`${interfaceBase}Entry`, ctx);

		ctx.declarations.push(
			[
				`export interface ${entryTypeName} {`,
				`  templateId: ${JSON.stringify(entry.templateId)};`,
				`  data: ${dataTypeName};`,
				"}",
			].join("\n"),
		);

		entryTypeNames.push(entryTypeName);
		byTemplateIdLines.push(
			`  ${JSON.stringify(entry.templateId)}: ${entryTypeName};`,
		);
	}

	return [
		"/* eslint-disable */",
		"// Auto-generated from GAME_MASTER.json",
		"// Do not edit by hand.",
		`// Filters: ${summarizeTemplateFilters(options)}`,
		`// Entries emitted: ${filteredEntries.length}`,
		"",
		...ctx.declarations,
		"",
		"export interface GameMasterByTemplateId {",
		...byTemplateIdLines,
		"}",
		"",
		`export type GameMasterEntry = ${entryTypeNames.join(" | ")};`,
		"export type GameMaster = GameMasterEntry[];",
		"",
	].join("\n");
}

export async function generateTypescript(parsed: Json): Promise<void> {
	const options = parseTypescriptArgs(process.argv.slice(2));

	if (!Array.isArray(parsed)) {
		throw new Error("Expected GAME_MASTER root to be an array.");
	}

	const entries = parsed as unknown as GameMasterEntryRaw[];
	const output = buildTypescriptOutput(entries, options);
	await Bun.write(options.outputPath, output);

	console.log(`Wrote ${options.outputPath}`);
}
