import { spawnSync } from "node:child_process";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import type { GameMasterEntryRaw, Json } from "./types";

// Usage examples:
//   tsx generate-game-master-go-types.ts --input ./GAME_MASTER.json --output ./game_master.go --all
//   tsx generate-game-master-go-types.ts --input ./GAME_MASTER.json --output ./avatar.go --prefix AVATAR_
//   tsx generate-game-master-go-types.ts --input ./GAME_MASTER.json --output ./gates.go --match FEATURE_GATE
//   tsx generate-game-master-go-types.ts --input ./GAME_MASTER.json --output ./game_master.go --all --integer-strategy smart --validate
//
// Notes:
// - Emits encoding/json-friendly Go types.
// - Go does not have tagged unions, so this generator emits:
//     * one struct type per template's data payload
//     * GameMasterEntry with TemplateID + json.RawMessage data
//     * GameMasterEntryData union-like interface
//     * DecodeData() helper with a switch on TemplateID
// - Optional properties become pointers when useful for scalars/structs.
// - Arrays become slices.
// - Mixed-shape unions fall back to json.RawMessage.
// - Integer strategy defaults to "smart":
//     * all observed integers >= 0 -> uint64
//     * all observed integers (including negatives) -> int64
//     * any observed fractional number -> float64

type Shape =
	| { kind: "null" }
	| { kind: "boolean" }
	| { kind: "number"; numberKind: NumberKind }
	| { kind: "string" }
	| { kind: "array"; element: Shape }
	| { kind: "object"; props: Map<string, { shape: Shape; optional: boolean }> }
	| { kind: "union"; variants: Shape[] };

type NumberKind = "uint64" | "int64" | "float64";
type IntegerStrategy = "smart" | "int64" | "float64";

interface CliOptions {
	inputPath: string;
	outputPath: string;
	packageName: string;
	includeAll: boolean;
	prefixes: string[];
	matches: string[];
	integerStrategy: IntegerStrategy;
	validate: boolean;
}

interface RenderContext {
	declarations: string[];
	seenNames: Set<string>;
	emittedShapes: Map<string, string>;
	options: CliOptions;
}

const GO_RESERVED = new Set([
	"break",
	"default",
	"func",
	"interface",
	"select",
	"case",
	"defer",
	"go",
	"map",
	"struct",
	"chan",
	"else",
	"goto",
	"package",
	"switch",
	"const",
	"fallthrough",
	"if",
	"range",
	"type",
	"continue",
	"for",
	"import",
	"return",
	"var",
]);

function parseArgs(argv: string[]): CliOptions {
	let inputPath = path.resolve("GAME_MASTER.json");
	let outputPath = path.resolve(process.cwd(), "./packages/go/main.go");
	let packageName = "gamemaster";
	let includeAll = false;
	const prefixes: string[] = [];
	const matches: string[] = [];
	let integerStrategy: IntegerStrategy = "smart";
	let validate = false;

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
			case "--package":
			case "-p": {
				const value = argv[++i];
				if (!value) throw new Error("Missing value for --package");
				packageName = toGoPackageName(value);
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
			case "--integer-strategy": {
				const value = argv[++i];
				if (value !== "smart" && value !== "int64" && value !== "float64") {
					throw new Error(
						"--integer-strategy must be one of: smart, int64, float64",
					);
				}
				integerStrategy = value;
				break;
			}
			case "--validate":
				validate = true;
				break;
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
		packageName,
		includeAll,
		prefixes,
		matches,
		integerStrategy,
		validate,
	};
}

function printHelpAndExit(): never {
	const help = `
Generate Go types from a GAME_MASTER.json file.

Options:
  --input,  -i <path>         Path to GAME_MASTER.json
  --output, -o <path>         Path to generated .go file
  --package, -p <name>        Go package name (default: gamemaster)
  --all                       Include all templateIds
  --prefix <value>            Include templateIds starting with the given prefix (repeatable)
  --match <value>             Include templateIds containing the given substring (repeatable)
  --integer-strategy <mode>   smart | int64 | float64 (default: smart)
  --validate                  Validate output with gofmt and go build in a temp module
  --help,   -h                Show this help

Examples:
  tsx generate-game-master-go-types.ts --input ./GAME_MASTER.json --output ./all.go --all
  tsx generate-game-master-go-types.ts --input ./GAME_MASTER.json --output ./avatar.go --prefix AVATAR_
  tsx generate-game-master-go-types.ts --input ./GAME_MASTER.json --output ./all.go --all --package gamemaster --validate
`.trim();
	console.log(help);
	process.exit(0);
}

function toGoPackageName(input: string): string {
	const cleaned = input
		.toLowerCase()
		.replace(/[^a-z0-9_]+/g, "")
		.replace(/^[^a-z]+/, "pkg");
	return cleaned || "gamemaster";
}

function isObject(value: Json): value is { [key: string]: Json } {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}

function stableStringify(value: unknown): string {
	if (value === null || typeof value !== "object") return JSON.stringify(value);
	if (Array.isArray(value)) return `[${value.map(stableStringify).join(",")}]`;
	const entries = Object.entries(value as Record<string, unknown>).sort(
		([a], [b]) => a.localeCompare(b),
	);
	return `{${entries.map(([k, v]) => `${JSON.stringify(k)}:${stableStringify(v)}`).join(",")}}`;
}

function serializeShape(shape: Shape): unknown {
	switch (shape.kind) {
		case "null":
		case "boolean":
		case "string":
			return shape;
		case "number":
			return { kind: "number", numberKind: shape.numberKind };
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
	for (const shape of shapes) seen.set(shapeKey(shape), shape);
	return [...seen.values()];
}

function inferNumberKind(
	value: number,
	integerStrategy: IntegerStrategy,
): NumberKind {
	if (!Number.isInteger(value)) return "float64";
	if (integerStrategy === "float64") return "float64";
	if (integerStrategy === "int64") return "int64";
	return value >= 0 ? "uint64" : "int64";
}

function widenNumberKinds(a: NumberKind, b: NumberKind): NumberKind {
	if (a === b) return a;
	if (a === "float64" || b === "float64") return "float64";
	if ((a === "uint64" && b === "int64") || (a === "int64" && b === "uint64"))
		return "int64";
	return "float64";
}

function inferShape(value: Json, options: CliOptions): Shape {
	if (value === null) return { kind: "null" };
	if (typeof value === "boolean") return { kind: "boolean" };
	if (typeof value === "number")
		return {
			kind: "number",
			numberKind: inferNumberKind(value, options.integerStrategy),
		};
	if (typeof value === "string") return { kind: "string" };
	if (Array.isArray(value)) {
		if (value.length === 0)
			return { kind: "array", element: { kind: "union", variants: [] } };
		const mergedElement = value
			.map((item) => inferShape(item, options))
			.reduce(mergeShapes);
		return { kind: "array", element: mergedElement };
	}
	const props = new Map<string, { shape: Shape; optional: boolean }>();
	for (const [key, child] of Object.entries(value))
		props.set(key, { shape: inferShape(child, options), optional: false });
	return { kind: "object", props };
}

function mergeShapes(a: Shape, b: Shape): Shape {
	if (shapeKey(a) === shapeKey(b)) return a;
	if (a.kind === "number" && b.kind === "number")
		return {
			kind: "number",
			numberKind: widenNumberKinds(a.numberKind, b.numberKind),
		};
	if (a.kind === "union")
		return {
			kind: "union",
			variants: dedupeShapes([
				...a.variants,
				...(b.kind === "union" ? b.variants : [b]),
			]),
		};
	if (b.kind === "union")
		return { kind: "union", variants: dedupeShapes([a, ...b.variants]) };
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
	if (a.kind === "array" && b.kind === "array")
		return { kind: "array", element: mergeShapes(a.element, b.element) };
	return { kind: "union", variants: dedupeShapes([a, b]) };
}

function toPascalCase(input: string): string {
	const cleaned = input
		.replace(/[^a-zA-Z0-9]+/g, " ")
		.trim()
		.split(/\s+/)
		.filter(Boolean)
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
		.join("")
		.replace(/^[^a-zA-Z]+/, "T");
	return cleaned || "Anonymous";
}

function toGoExportedIdentifier(input: string): string {
	const base = toPascalCase(input);
	return GO_RESERVED.has(base.toLowerCase()) ? `${base}Field` : base;
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

function goTypeForUnion(
	shape: Shape,
	suggestedName: string,
	ctx: RenderContext,
): string {
	const variants = "variants" in shape ? dedupeShapes(shape.variants) : [];
	if (variants.length === 0) return "json.RawMessage";

	const nonNull = variants.filter(
		(variant): variant is Exclude<Shape, { kind: "null" }> =>
			variant.kind !== "null",
	);
	const hasNull = nonNull.length !== variants.length;
	const first = nonNull.at(0);

	if (hasNull && nonNull.length === 1 && first) {
		const inner = renderShape(first, suggestedName, ctx);
		return pointerIfAppropriate(inner);
	}

	const kinds = new Set(nonNull.map((variant) => variant.kind));
	if (kinds.size === 1 && nonNull.length > 0 && first) {
		const firstKind = first.kind;
		if (firstKind === "object" || firstKind === "array")
			return "json.RawMessage";
		if (firstKind === "number") {
			const numberVariants = nonNull.filter(
				(variant): variant is Extract<Shape, { kind: "number" }> =>
					variant.kind === "number",
			);
			const numberKinds = new Set(
				numberVariants.map((variant) => variant.numberKind),
			);
			if (numberKinds.has("float64")) return "float64";
			if (numberKinds.has("int64") && numberKinds.has("uint64")) return "int64";
			if (numberKinds.has("int64")) return "int64";
			return "uint64";
		}
		return renderShape(first, suggestedName, ctx);
	}

	return "json.RawMessage";
}

function pointerIfAppropriate(typeName: string): string {
	if (typeName.startsWith("[]")) return typeName;
	if (typeName === "json.RawMessage") return typeName;
	if (typeName.startsWith("map[")) return typeName;
	if (typeName.startsWith("*")) return typeName;
	return `*${typeName}`;
}

function renderShape(
	shape: Shape,
	suggestedName: string,
	ctx: RenderContext,
): string {
	const key = shapeKey(shape);
	const existing = ctx.emittedShapes.get(key);
	if (existing) return existing;

	switch (shape.kind) {
		case "null":
			return "json.RawMessage";
		case "boolean":
			return "bool";
		case "number":
			return shape.numberKind;
		case "string":
			return "string";
		case "union":
			return goTypeForUnion(shape, suggestedName, ctx);
		case "array": {
			const elementType = renderShape(
				shape.element,
				`${suggestedName}Item`,
				ctx,
			);
			return `[]${elementType}`;
		}
		case "object": {
			const structName = uniqueName(toPascalCase(suggestedName), ctx);
			ctx.emittedShapes.set(key, structName);

			const lines: string[] = [`type ${structName} struct {`];
			for (const [rawKey, value] of [...shape.props.entries()].sort(
				([a], [b]) => a.localeCompare(b),
			)) {
				const fieldName = toGoExportedIdentifier(rawKey);
				const baseType = renderShape(
					value.shape,
					`${structName}${toPascalCase(rawKey)}`,
					ctx,
				);
				const fieldType = value.optional
					? pointerIfAppropriate(baseType)
					: baseType;
				const omitempty = value.optional ? ",omitempty" : "";
				lines.push(
					`\t${fieldName} ${fieldType} \`json:"${rawKey}${omitempty}"\``,
				);
			}
			lines.push("}");
			ctx.declarations.push(lines.join("\n"));
			return structName;
		}
	}
}

function shouldIncludeTemplateId(
	templateId: string,
	options: CliOptions,
): boolean {
	if (options.includeAll) return true;
	if (options.prefixes.some((prefix) => templateId.startsWith(prefix)))
		return true;
	if (options.matches.some((match) => templateId.includes(match))) return true;
	return false;
}

function buildGo(entries: GameMasterEntryRaw[], options: CliOptions): string {
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
		options,
	};

	const dataTypeNames: Array<{ templateId: string; typeName: string }> = [];

	for (const entry of filteredEntries) {
		const typeBase = `${toPascalCase(entry.templateId)}Data`;
		const dataShape = inferShape(entry.data as Json, options);
		const dataTypeName = renderShape(dataShape, typeBase, ctx);
		dataTypeNames.push({
			templateId: entry.templateId,
			typeName: dataTypeName,
		});
	}

	const interfaceLines = [
		"type GameMasterEntryData interface {",
		"\tisGameMasterEntryData()",
		"}",
	];

	const uniqueDataTypeNames = [
		...new Set(dataTypeNames.map(({ typeName }) => typeName)),
	];

	const markerLines = uniqueDataTypeNames.map(
		(typeName) =>
			`func (${receiverName(typeName)} ${typeName}) isGameMasterEntryData() {}`,
	);

	const decodeCases = dataTypeNames.map(({ templateId, typeName }) =>
		[
			`\tcase ${JSON.stringify(templateId)}:`,
			`\t\tvar v ${typeName}`,
			`\t\tif err := json.Unmarshal(e.Data, &v); err != nil {`,
			`\t\t\treturn nil, err`,
			`\t\t}`,
			`\t\treturn v, nil`,
		].join("\n"),
	);

	const output = [
		"// Auto-generated from GAME_MASTER.json",
		"// Do not edit by hand.",
		`// Entries emitted: ${filteredEntries.length}`,
		`// Integer strategy: ${options.integerStrategy}`,
		"",
		`package ${options.packageName}`,
		"",
		"import (",
		'\t"encoding/json"',
		'\t"fmt"',
		")",
		"",
		...ctx.declarations,
		"",
		...interfaceLines,
		"",
		...markerLines,
		"",
		"type GameMasterEntry struct {",
		'\tTemplateID string          `json:"templateId"`',
		'\tData       json.RawMessage `json:"data"`',
		"}",
		"",
		"type GameMaster []GameMasterEntry",
		"",
		"func (e GameMasterEntry) DecodeData() (GameMasterEntryData, error) {",
		"\tswitch e.TemplateID {",
		...decodeCases,
		"\tdefault:",
		'\t\treturn nil, fmt.Errorf("unknown templateId: %s", e.TemplateID)',
		"\t}",
		"}",
		"",
	].join("\n");

	return output;
}

function receiverName(typeName: string): string {
	const first = typeName.charAt(0).toLowerCase();
	return /^[a-z]$/.test(first) ? first : "x";
}

function validateGoOutput(outputPath: string, packageName: string): void {
	const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "gm-go-"));
	fs.writeFileSync(
		path.join(tempDir, "go.mod"),
		`module example.com/${packageName}\n\ngo 1.22\n`,
		"utf8",
	);
	const sourcePath = path.join(tempDir, path.basename(outputPath));
	fs.copyFileSync(outputPath, sourcePath);

	const fmtResult = spawnSync("gofmt", ["-w", sourcePath], {
		cwd: tempDir,
		encoding: "utf8",
		stdio: "pipe",
	});
	if (fmtResult.status !== 0) {
		throw new Error(
			`gofmt failed\n${fmtResult.stdout || ""}\n${fmtResult.stderr || ""}`.trim(),
		);
	}

	const buildResult = spawnSync("go", ["build", "./..."], {
		cwd: tempDir,
		encoding: "utf8",
		stdio: "pipe",
	});
	if (buildResult.status !== 0) {
		throw new Error(
			`go build failed\n${buildResult.stdout || ""}\n${buildResult.stderr || ""}`.trim(),
		);
	}
}

export function generateGo(parsed: Json): void {
	const options = parseArgs(process.argv.slice(2));

	if (!Array.isArray(parsed)) {
		throw new Error("Expected GAME_MASTER root to be an array.");
	}

	const entries = parsed as unknown as GameMasterEntryRaw[];
	const output = buildGo(entries, options);
	fs.writeFileSync(options.outputPath, output, "utf8");

	if (options.validate) {
		validateGoOutput(options.outputPath, options.packageName);
	}

	console.log(`Wrote ${options.outputPath}`);
	if (options.validate) {
		console.log("Validated with gofmt and go build");
	}
}
