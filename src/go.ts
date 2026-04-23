import { spawnSync } from "node:child_process";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import type {
	GeneratedFileBundle,
	GeneratorCliConfig,
	TemplateIdGroup,
} from "./codegen-core";
import {
	createFlagOption,
	createGeneratedSiblingFileName,
	createNamedShapeRenderContext,
	createShapeKey,
	createUniqueName,
	createValueOption,
	dedupeByKey,
	filterGameMasterEntries,
	groupEntriesByTemplateIdFirstWord,
	inferObjectShapeProperties,
	mergeObjectShapeProperties,
	parseGeneratorCliArgs,
	toPascalCase,
	writeGeneratedFileBundle,
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
	| { kind: "number"; numberKind: NumberKind }
	| { kind: "string" }
	| { kind: "array"; element: Shape }
	| { kind: "object"; props: Map<string, ShapeProperty<Shape>> }
	| { kind: "union"; variants: Shape[] };

type NumberKind = "uint64" | "int64" | "float64";
type IntegerStrategy = "smart" | "int64" | "float64";

interface CliOptions extends BaseGeneratorCliOptions {
	packageName: string;
	integerStrategy: IntegerStrategy;
	validate: boolean;
}

interface RenderContext extends NamedShapeRenderContext {
	options: CliOptions;
}

interface GoGroupModuleOutput {
	fileName: string;
	content: string;
	markerLines: string[];
	decodeCases: string[];
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

function toGoPackageName(input: string): string {
	const cleaned = input
		.toLowerCase()
		.replace(/[^a-z0-9_]+/g, "")
		.replace(/^[^a-z]+/, "pkg");

	return cleaned || "gamemaster";
}

const GO_CLI_CONFIG = {
	description: "Generate Go types from a GAME_MASTER.json file.",
	examples: [
		"tsx generate-game-master-go-types.ts --input ./GAME_MASTER.json --output ./all.go --all",
		"tsx generate-game-master-go-types.ts --input ./GAME_MASTER.json --output ./avatar.go --prefix AVATAR_",
		"tsx generate-game-master-go-types.ts --input ./GAME_MASTER.json --output ./all.go --all --package gamemaster --validate",
	],
	defaults: {
		inputPath: path.resolve("GAME_MASTER.json"),
		outputPath: path.resolve(process.cwd(), "./packages/go/main.go"),
		packageName: "gamemaster",
		includeAll: false,
		prefixes: [],
		matches: [],
		integerStrategy: "smart" as IntegerStrategy,
		validate: false,
	},
	extraOptions: [
		createValueOption(
			"--package",
			"-p",
			"<name>",
			"Go package name (default: gamemaster)",
			(options, value) => {
				options.packageName = toGoPackageName(value);
			},
		),
		createValueOption(
			"--integer-strategy",
			undefined,
			"<mode>",
			"smart | int64 | float64 (default: smart)",
			(options, value) => {
				if (value !== "smart" && value !== "int64" && value !== "float64") {
					throw new Error(
						"--integer-strategy must be one of: smart, int64, float64",
					);
				}

				options.integerStrategy = value;
			},
		),
		createFlagOption(
			"--validate",
			undefined,
			"Validate output with gofmt and go build in a temp module",
			(options) => {
				options.validate = true;
			},
		),
	],
} satisfies GeneratorCliConfig<CliOptions>;

export function parseGoArgs(argv: string[]): CliOptions {
	return parseGeneratorCliArgs(argv, GO_CLI_CONFIG);
}

function isNumberShape(
	shape: Shape,
): shape is Extract<Shape, { kind: "number" }> {
	return shape.kind === "number";
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

function inferNumberKind(
	value: number,
	integerStrategy: IntegerStrategy,
): NumberKind {
	if (!Number.isInteger(value)) {
		return "float64";
	}

	if (integerStrategy === "float64") {
		return "float64";
	}

	if (integerStrategy === "int64") {
		return "int64";
	}

	return value >= 0 ? "uint64" : "int64";
}

function widenNumberKinds(left: NumberKind, right: NumberKind): NumberKind {
	if (left === right) {
		return left;
	}

	if (left === "float64" || right === "float64") {
		return "float64";
	}

	if (
		(left === "uint64" && right === "int64") ||
		(left === "int64" && right === "uint64")
	) {
		return "int64";
	}

	return "float64";
}

function inferShape(value: Json, options: CliOptions): Shape {
	if (value === null) {
		return { kind: "null" };
	}

	if (typeof value === "boolean") {
		return { kind: "boolean" };
	}

	if (typeof value === "number") {
		return {
			kind: "number",
			numberKind: inferNumberKind(value, options.integerStrategy),
		};
	}

	if (typeof value === "string") {
		return { kind: "string" };
	}

	if (Array.isArray(value)) {
		if (value.length === 0) {
			return { kind: "array", element: { kind: "union", variants: [] } };
		}

		const mergedElement = value
			.map((item) => inferShape(item, options))
			.reduce(mergeShapes);

		return { kind: "array", element: mergedElement };
	}

	return {
		kind: "object",
		props: inferObjectShapeProperties(value, (item) =>
			inferShape(item, options),
		),
	};
}

function mergeShapes(left: Shape, right: Shape): Shape {
	if (shapeKey(left) === shapeKey(right)) {
		return left;
	}

	if (isNumberShape(left) && isNumberShape(right)) {
		return {
			kind: "number",
			numberKind: widenNumberKinds(left.numberKind, right.numberKind),
		};
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

function toGoExportedIdentifier(input: string): string {
	const base = toPascalCase(input);
	return GO_RESERVED.has(base.toLowerCase()) ? `${base}Field` : base;
}

function uniqueName(base: string, ctx: RenderContext): string {
	return createUniqueName(base, ctx.seenNames);
}

function pointerIfAppropriate(typeName: string): string {
	if (
		typeName.startsWith("[]") ||
		typeName === "MasterfileRawData" ||
		typeName.startsWith("map[") ||
		typeName.startsWith("*")
	) {
		return typeName;
	}

	return `*${typeName}`;
}

function goTypeForUnion(
	shape: Extract<Shape, { kind: "union" }>,
	suggestedName: string,
	ctx: RenderContext,
): string {
	const variants = dedupeShapes(shape.variants);

	if (variants.length === 0) {
		return "MasterfileRawData";
	}

	const nonNull = variants.filter(
		(variant): variant is Exclude<Shape, { kind: "null" }> =>
			variant.kind !== "null",
	);
	const hasNull = nonNull.length !== variants.length;
	const first = nonNull.at(0);

	if (hasNull && nonNull.length === 1 && first) {
		return pointerIfAppropriate(renderShape(first, suggestedName, ctx));
	}

	const kinds = new Set(nonNull.map((variant) => variant.kind));
	if (kinds.size === 1 && first) {
		if (first.kind === "object" || first.kind === "array") {
			return "MasterfileRawData";
		}

		if (first.kind === "number") {
			const numberKinds = new Set(
				nonNull.filter(isNumberShape).map((variant) => variant.numberKind),
			);

			if (numberKinds.has("float64")) {
				return "float64";
			}

			if (numberKinds.has("int64")) {
				return "int64";
			}

			return "uint64";
		}

		return renderShape(first, suggestedName, ctx);
	}

	return "MasterfileRawData";
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
			return "MasterfileRawData";
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
				([left], [right]) => left.localeCompare(right),
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

export function buildGoOutput(
	entries: GameMasterEntryRaw[],
	options: CliOptions,
): string {
	return buildGoFiles(entries, options).barrelContent;
}

function buildGoGroupModule(
	group: TemplateIdGroup,
	options: CliOptions,
	seenNames: Set<string>,
): GoGroupModuleOutput {
	const ctx: RenderContext = {
		...createNamedShapeRenderContext(),
		seenNames,
		options,
	};
	const dataTypeNames: Array<{ templateId: string; typeName: string }> = [];

	for (const entry of group.entries) {
		const typeBase = `${toPascalCase(entry.templateId)}Data`;
		const dataShape = inferShape(entry.data, options);
		const dataTypeName = renderShape(dataShape, typeBase, ctx);

		dataTypeNames.push({
			templateId: entry.templateId,
			typeName: dataTypeName,
		});
	}

	const uniqueDataTypeNames = [
		...new Set(dataTypeNames.map(({ typeName }) => typeName)),
	];

	return {
		fileName: createGeneratedSiblingFileName(options.outputPath, group.key),
		content: [
			"// Auto-generated from GAME_MASTER.json",
			"// Do not edit by hand.",
			`// Group: ${group.key}`,
			`// Entries emitted: ${group.entries.length}`,
			`// Integer strategy: ${options.integerStrategy}`,
			"",
			`package ${options.packageName}`,
			"",
			...ctx.declarations,
			"",
		].join("\n"),
		markerLines: uniqueDataTypeNames.map(
			(typeName) =>
				`func (${receiverName(typeName)} ${typeName}) isMasterfileEntryData() {}`,
		),
		decodeCases: dataTypeNames.map(({ templateId, typeName }) =>
			[
				`\tcase ${JSON.stringify(templateId)}:`,
				`\t\tvar v ${typeName}`,
				`\t\tif err := json.Unmarshal(e.Data, &v); err != nil {`,
				"\t\t\treturn nil, err",
				"\t\t}",
				"\t\treturn v, nil",
			].join("\n"),
		),
	};
}

export function buildGoFiles(
	entries: GameMasterEntryRaw[],
	options: CliOptions,
): GeneratedFileBundle {
	const filteredEntries = filterGameMasterEntries(entries, options);
	const groups = groupEntriesByTemplateIdFirstWord(filteredEntries);
	const seenNames = new Set<string>();
	const modules = groups.map((group) =>
		buildGoGroupModule(group, options, seenNames),
	);

	return {
		barrelContent: [
			"// Auto-generated from GAME_MASTER.json",
			"// Do not edit by hand.",
			`// Entries emitted: ${filteredEntries.length}`,
			`// Groups emitted: ${groups.length}`,
			`// Integer strategy: ${options.integerStrategy}`,
			"",
			`package ${options.packageName}`,
			"",
			"import (",
			'\t"encoding/json"',
			'\t"fmt"',
			")",
			"",
			"type MasterfileRawData = json.RawMessage",
			"",
			"type MasterfileEntryData interface {",
			"\tisMasterfileEntryData()",
			"}",
			"",
			"type GameMasterEntryData = MasterfileEntryData",
			"",
			...modules.flatMap((module) => module.markerLines),
			"",
			"type MasterfileEntry struct {",
			'\tTemplateID string          `json:"templateId"`',
			'\tData       MasterfileRawData `json:"data"`',
			"}",
			"",
			"type GameMasterEntry = MasterfileEntry",
			"type Masterfile []MasterfileEntry",
			"type GameMaster = Masterfile",
			"",
			"func (e MasterfileEntry) DecodeData() (MasterfileEntryData, error) {",
			"\tswitch e.TemplateID {",
			...modules.flatMap((module) => module.decodeCases),
			"\tdefault:",
			'\t\treturn nil, fmt.Errorf("unknown templateId: %s", e.TemplateID)',
			"\t}",
			"}",
			"",
		].join("\n"),
		files: modules.map((module) => ({
			fileName: module.fileName,
			content: module.content,
		})),
	};
}

function receiverName(typeName: string): string {
	const first = typeName.charAt(0).toLowerCase();
	return /^[a-z]$/.test(first) ? first : "x";
}

function validateGoOutput(
	outputPath: string,
	packageName: string,
	bundle: GeneratedFileBundle,
): void {
	const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "gm-go-"));
	const goModPath = path.join(tempDir, "go.mod");
	const sourcePath = path.join(tempDir, path.basename(outputPath));

	fs.writeFileSync(
		goModPath,
		`module example.com/${packageName}\n\ngo 1.22\n`,
		"utf8",
	);
	fs.writeFileSync(sourcePath, bundle.barrelContent, "utf8");
	for (const file of bundle.files) {
		fs.writeFileSync(path.join(tempDir, file.fileName), file.content, "utf8");
	}

	const formatResult = spawnSync("gofmt", ["-w", sourcePath], {
		cwd: tempDir,
		encoding: "utf8",
		stdio: "pipe",
	});
	if (formatResult.status !== 0) {
		throw new Error(
			`gofmt failed\n${formatResult.stdout || ""}\n${formatResult.stderr || ""}`.trim(),
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

export async function generateGo(parsed: Json): Promise<void> {
	const options = parseGoArgs(process.argv.slice(2));

	if (!Array.isArray(parsed)) {
		throw new Error("Expected GAME_MASTER root to be an array.");
	}

	const entries = parsed as unknown as GameMasterEntryRaw[];
	const bundle = buildGoFiles(entries, options);
	const writtenPaths = await writeGeneratedFileBundle(
		options.outputPath,
		bundle,
	);

	if (options.validate) {
		validateGoOutput(options.outputPath, options.packageName, bundle);
	}

	console.log(
		`Wrote ${options.outputPath} and ${writtenPaths.length - 1} grouped Go files`,
	);
	if (options.validate) {
		console.log("Validated with gofmt and go build");
	}
}
