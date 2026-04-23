import * as path from "node:path";
import type { GameMasterEntryRaw, Json } from "./types";

// Usage examples:
//   tsx generate-game-master-types.ts --input ./GAME_MASTER.json --output ./GAME_MASTER.generated.ts --all
//   tsx generate-game-master-types.ts --input ./GAME_MASTER.json --output ./avatar.types.ts --prefix AVATAR_
//   tsx generate-game-master-types.ts --input ./GAME_MASTER.json --output ./mixed.types.ts --prefix AVATAR_ --prefix AR_
//   tsx generate-game-master-types.ts --input ./GAME_MASTER.json --output ./gates.types.ts --match FEATURE_GATE
//
// Notes:
// - --all includes every templateId in the file.
// - --prefix X includes templateIds that start with X. Can be repeated.
// - --match X includes templateIds that contain X. Can be repeated.
// - If no filter flags are provided, the script defaults to --all.

 type Shape =
	| { kind: "null" }
	| { kind: "boolean" }
	| { kind: "number" }
	| { kind: "string" }
	| { kind: "array"; element: Shape }
	| { kind: "object"; props: Map<string, { shape: Shape; optional: boolean }> }
	| { kind: "union"; variants: Shape[] };

interface CliOptions {
	inputPath: string;
	outputPath: string;
	includeAll: boolean;
	prefixes: string[];
	matches: string[];
}

interface RenderContext {
	declarations: string[];
	seenNames: Set<string>;
	emittedShapes: Map<string, string>;
}

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

function parseArgs(argv: string[]): CliOptions {
	let inputPath = path.resolve("GAME_MASTER.json");
	let outputPath = path.resolve(
		process.cwd(),
		"./packages/typescript/index.ts",
	);
	let includeAll = false;
	const prefixes: string[] = [];
	const matches: string[] = [];

	for (let i = 0; i < argv.length; i += 1) {
		const arg = argv[i];

		switch (arg) {
			case "--input":
			case "-i": {
				const value = argv[++i];
				if (!value) throw new Error("Missing value for --input");
				inputPath = path.resolve(value);
				break;
			}
			case "--output":
			case "-o": {
				const value = argv[++i];
				if (!value) throw new Error("Missing value for --output");
				outputPath = path.resolve(value);
				break;
			}
			case "--all":
				includeAll = true;
				break;
			case "--prefix": {
				const value = argv[++i];
				if (!value) throw new Error("Missing value for --prefix");
				prefixes.push(value);
				break;
			}
			case "--match": {
				const value = argv[++i];
				if (!value) throw new Error("Missing value for --match");
				matches.push(value);
				break;
			}
			case "--help":
			case "-h":
				printHelpAndExit();
				break;
			default:
				throw new Error(`Unknown argument: ${arg}`);
		}
	}

	if (!includeAll && prefixes.length === 0 && matches.length === 0) {
		includeAll = true;
	}

	return {
		inputPath,
		outputPath,
		includeAll,
		prefixes,
		matches,
	};
}

function printHelpAndExit(): never {
	const help = `
Generate TypeScript types from a GAME_MASTER.json file.

Options:
  --input,  -i <path>   Path to GAME_MASTER.json
  --output, -o <path>   Path to generated .ts file
  --all                 Include all templateIds
  --prefix <value>      Include templateIds starting with the given prefix (repeatable)
  --match <value>       Include templateIds containing the given substring (repeatable)
  --help,   -h          Show this help

Examples:
  tsx generate-game-master-types.ts --input ./GAME_MASTER.json --output ./all.types.ts --all
  tsx generate-game-master-types.ts --input ./GAME_MASTER.json --output ./avatar.types.ts --prefix AVATAR_
  tsx generate-game-master-types.ts --input ./GAME_MASTER.json --output ./filtered.types.ts --prefix AVATAR_ --match FEATURE_GATE
`.trim();

	console.log(help);
	process.exit(0);
}

function isObject(value: Json): value is { [key: string]: Json } {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}

function stableStringify(value: unknown): string {
	if (value === null || typeof value !== "object") {
		return JSON.stringify(value);
	}

	if (Array.isArray(value)) {
		return `[${value.map(stableStringify).join(",")}]`;
	}

	const entries = Object.entries(value as Record<string, unknown>).sort(
		([a], [b]) => a.localeCompare(b),
	);

	return `{${entries
		.map(([key, child]) => `${JSON.stringify(key)}:${stableStringify(child)}`)
		.join(",")}}`;
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
					.sort((a, b) => stableStringify(a).localeCompare(stableStringify(b))),
			};
		case "object":
			return {
				kind: "object",
				props: [...shape.props.entries()]
					.sort(([a], [b]) => a.localeCompare(b))
					.map(([key, value]) => [
						key,
						{ optional: value.optional, shape: serializeShape(value.shape) },
					]),
			};
	}
}

function shapeKey(shape: Shape): string {
	return stableStringify(serializeShape(shape));
}

function dedupeShapes(shapes: Shape[]): Shape[] {
	const seen = new Map<string, Shape>();
	for (const shape of shapes) {
		seen.set(shapeKey(shape), shape);
	}
	return [...seen.values()];
}

function inferShape(value: Json): Shape {
	if (value === null) return { kind: "null" };
	if (typeof value === "boolean") return { kind: "boolean" };
	if (typeof value === "number") return { kind: "number" };
	if (typeof value === "string") return { kind: "string" };

	if (Array.isArray(value)) {
		if (value.length === 0) {
			return { kind: "array", element: { kind: "union", variants: [] } };
		}

		const mergedElement = value.map(inferShape).reduce(mergeShapes);
		return { kind: "array", element: mergedElement };
	}

	const props = new Map<string, { shape: Shape; optional: boolean }>();
	for (const [key, child] of Object.entries(value)) {
		props.set(key, { shape: inferShape(child), optional: false });
	}
	return { kind: "object", props };
}

function mergeShapes(a: Shape, b: Shape): Shape {
	if (shapeKey(a) === shapeKey(b)) {
		return a;
	}

	if (a.kind === "union") {
		return {
			kind: "union",
			variants: dedupeShapes([
				...a.variants,
				...(b.kind === "union" ? b.variants : [b]),
			]),
		};
	}

	if (b.kind === "union") {
		return {
			kind: "union",
			variants: dedupeShapes([a, ...b.variants]),
		};
	}

	if (a.kind === "object" && b.kind === "object") {
		const keys = new Set([...a.props.keys(), ...b.props.keys()]);
		const props = new Map<string, { shape: Shape; optional: boolean }>();

		for (const key of keys) {
			const left = a.props.get(key);
			const right = b.props.get(key);

			if (left && right) {
				props.set(key, {
					shape: mergeShapes(left.shape, right.shape),
					optional: left.optional || right.optional,
				});
			} else if (left) {
				props.set(key, { shape: left.shape, optional: true });
			} else if (right) {
				props.set(key, { shape: right.shape, optional: true });
			}
		}

		return { kind: "object", props };
	}

	if (a.kind === "array" && b.kind === "array") {
		return { kind: "array", element: mergeShapes(a.element, b.element) };
	}

	return { kind: "union", variants: dedupeShapes([a, b]) };
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
	let name = base;
	let counter = 2;

	while (ctx.seenNames.has(name)) {
		name = `${base}${counter}`;
		counter += 1;
	}

	ctx.seenNames.add(name);
	return name;
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
		case "union": {
			if (shape.variants.length === 0) return "unknown";
			return dedupeShapes(shape.variants)
				.map((variant) => renderShape(variant, suggestedName, ctx))
				.join(" | ");
		}
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
				.sort(([a], [b]) => a.localeCompare(b))
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

function shouldIncludeTemplateId(
	templateId: string,
	options: CliOptions,
): boolean {
	if (options.includeAll) {
		return true;
	}

	if (options.prefixes.some((prefix) => templateId.startsWith(prefix))) {
		return true;
	}

	if (options.matches.some((match) => templateId.includes(match))) {
		return true;
	}

	return false;
}

function buildTypes(
	entries: GameMasterEntryRaw[],
	options: CliOptions,
): string {
	const filteredEntries = entries
		.filter(
			(entry) =>
				entry &&
				typeof entry.templateId === "string" &&
				isObject(entry.data as Json),
		)
		.filter((entry) => shouldIncludeTemplateId(entry.templateId, options));

	if (filteredEntries.length === 0) {
		throw new Error("No matching templateIds found for the selected filters.");
	}

	const ctx: RenderContext = {
		declarations: [],
		seenNames: new Set(),
		emittedShapes: new Map(),
	};

	const entryTypeNames: string[] = [];
	const byTemplateIdLines: string[] = [];

	for (const entry of filteredEntries) {
		const interfaceBase = sanitizeIdentifier(entry.templateId);
		const dataShape = inferShape(entry.data as Json);
		const dataTypeName = renderShape(dataShape, `${interfaceBase}Data`, ctx);
		const entryTypeName = uniqueName(`${interfaceBase}Entry`, ctx);

		ctx.declarations.push(
			[
				`export interface ${entryTypeName} {`,
				`  templateId: ${JSON.stringify(entry.templateId)};`,
				`  data: ${dataTypeName};`,
				`}`,
			].join("\n"),
		);

		entryTypeNames.push(entryTypeName);
		byTemplateIdLines.push(
			`  ${JSON.stringify(entry.templateId)}: ${entryTypeName};`,
		);
	}

	const filterSummary = [
		options.includeAll ? "all" : null,
		...options.prefixes.map((prefix) => `prefix:${prefix}`),
		...options.matches.map((match) => `match:${match}`),
	]
		.filter(Boolean)
		.join(", ");

	return [
		"/* eslint-disable */",
		"// Auto-generated from GAME_MASTER.json",
		"// Do not edit by hand.",
		`// Filters: ${filterSummary}`,
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

export function generateTypescript(parsed: Json): void {
	const options = parseArgs(process.argv.slice(2));
	// const raw = fs.readFileSync(options.inputPath, "utf8");
	// const parsed = JSON.parse(raw) as Json;

	if (!Array.isArray(parsed)) {
		throw new Error("Expected GAME_MASTER root to be an array.");
	}

	const entries = parsed as unknown as GameMasterEntryRaw[];
	const output = buildTypes(entries, options);
	Bun.write(options.outputPath, output);

	console.log(`Wrote ${options.outputPath}`);
}
