import { spawnSync } from "node:child_process";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import type { GeneratorCliConfig } from "./codegen-core";
import {
	createFlagOption,
	createNamedShapeRenderContext,
	createShapeKey,
	createUniqueName,
	createValueOption,
	dedupeByKey,
	filterGameMasterEntries,
	inferObjectShapeProperties,
	mergeObjectShapeProperties,
	parseGeneratorCliArgs,
	summarizeTemplateFilters,
	toPascalCase,
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

type NumberKind = "u64" | "i64" | "f64";
type IntegerStrategy = "smart" | "i64" | "f64";

interface CliOptions extends BaseGeneratorCliOptions {
	integerStrategy: IntegerStrategy;
	deriveDefault: boolean;
	validate: boolean;
}

interface RenderContext extends NamedShapeRenderContext {
	options: CliOptions;
}

const RUST_RESERVED = new Set([
	"as",
	"break",
	"const",
	"continue",
	"crate",
	"else",
	"enum",
	"extern",
	"false",
	"fn",
	"for",
	"if",
	"impl",
	"in",
	"let",
	"loop",
	"match",
	"mod",
	"move",
	"mut",
	"pub",
	"ref",
	"return",
	"self",
	"Self",
	"static",
	"struct",
	"super",
	"trait",
	"true",
	"type",
	"unsafe",
	"use",
	"where",
	"while",
	"async",
	"await",
	"dyn",
]);

const RUST_CLI_CONFIG = {
	description: "Generate Rust types from a GAME_MASTER.json file.",
	examples: [
		"tsx generate-game-master-rust-types.ts --input ./GAME_MASTER.json --output ./all.rs --all",
		"tsx generate-game-master-rust-types.ts --input ./GAME_MASTER.json --output ./avatar.rs --prefix AVATAR_",
		"tsx generate-game-master-rust-types.ts --input ./GAME_MASTER.json --output ./filtered.rs --prefix AVATAR_ --match FEATURE_GATE",
		"tsx generate-game-master-rust-types.ts --input ./GAME_MASTER.json --output ./all.rs --all --integer-strategy smart --derive-default --validate",
	],
	defaults: {
		inputPath: path.resolve("GAME_MASTER.json"),
		outputPath: path.resolve(process.cwd(), "./packages/rust/lib.rs"),
		includeAll: false,
		prefixes: [],
		matches: [],
		integerStrategy: "smart" as IntegerStrategy,
		deriveDefault: false,
		validate: false,
	},
	extraOptions: [
		createValueOption(
			"--integer-strategy",
			undefined,
			"<mode>",
			"smart | i64 | f64 (default: smart)",
			(options, value) => {
				if (value !== "smart" && value !== "i64" && value !== "f64") {
					throw new Error("--integer-strategy must be one of: smart, i64, f64");
				}

				options.integerStrategy = value;
			},
		),
		createFlagOption(
			"--derive-default",
			undefined,
			"Add Default to all generated derives",
			(options) => {
				options.deriveDefault = true;
			},
		),
		createFlagOption(
			"--validate",
			undefined,
			"Validate output by generating a temporary Cargo crate and running cargo check",
			(options) => {
				options.validate = true;
			},
		),
	],
} satisfies GeneratorCliConfig<CliOptions>;

export function parseRustArgs(argv: string[]): CliOptions {
	return parseGeneratorCliArgs(argv, RUST_CLI_CONFIG);
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
		return "f64";
	}

	if (integerStrategy === "f64") {
		return "f64";
	}

	if (integerStrategy === "i64") {
		return "i64";
	}

	return value >= 0 ? "u64" : "i64";
}

function widenNumberKinds(left: NumberKind, right: NumberKind): NumberKind {
	if (left === right) {
		return left;
	}

	if (left === "f64" || right === "f64") {
		return "f64";
	}

	if (
		(left === "u64" && right === "i64") ||
		(left === "i64" && right === "u64")
	) {
		return "i64";
	}

	return "f64";
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

function toSnakeCase(input: string): string {
	const basic = input
		.replace(/([a-z0-9])([A-Z])/g, "$1_$2")
		.replace(/[^a-zA-Z0-9]+/g, "_")
		.replace(/_+/g, "_")
		.replace(/^_+|_+$/g, "")
		.toLowerCase();

	if (!basic) {
		return "field";
	}

	return RUST_RESERVED.has(basic) ? `r#${basic}` : basic;
}

function uniqueName(base: string, ctx: RenderContext): string {
	return createUniqueName(base, ctx.seenNames);
}

function rustTypeForUnion(
	shape: Extract<Shape, { kind: "union" }>,
	suggestedName: string,
	ctx: RenderContext,
): string {
	const variants = dedupeShapes(shape.variants);

	if (variants.length === 0) {
		return "serde_json::Value";
	}

	const nonNull = variants.filter(
		(variant): variant is Exclude<Shape, { kind: "null" }> =>
			variant.kind !== "null",
	);
	const hasNull = nonNull.length !== variants.length;
	const first = nonNull.at(0);

	if (hasNull && nonNull.length === 1 && first) {
		return `Option<${renderShape(first, suggestedName, ctx)}>`;
	}

	const kinds = new Set(nonNull.map((variant) => variant.kind));
	if (kinds.size === 1 && first) {
		if (first.kind === "object" || first.kind === "array") {
			return "serde_json::Value";
		}

		if (first.kind === "number") {
			const numberKinds = new Set(
				nonNull.filter(isNumberShape).map((variant) => variant.numberKind),
			);

			if (numberKinds.has("f64")) {
				return "f64";
			}

			if (numberKinds.has("i64")) {
				return "i64";
			}

			return "u64";
		}

		return renderShape(first, suggestedName, ctx);
	}

	return "serde_json::Value";
}

function deriveLine(options: CliOptions): string {
	const derives = ["Debug", "Clone", "PartialEq", "Serialize", "Deserialize"];

	if (options.deriveDefault) {
		derives.push("Default");
	}

	return `#[derive(${derives.join(", ")})]`;
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
			return "Option<serde_json::Value>";
		case "boolean":
			return "bool";
		case "number":
			return shape.numberKind;
		case "string":
			return "String";
		case "union":
			return rustTypeForUnion(shape, suggestedName, ctx);
		case "array": {
			const elementType = renderShape(
				shape.element,
				`${suggestedName}Item`,
				ctx,
			);
			return `Vec<${elementType}>`;
		}
		case "object": {
			const structName = uniqueName(toPascalCase(suggestedName), ctx);
			ctx.emittedShapes.set(key, structName);

			const lines: string[] = [
				deriveLine(ctx.options),
				`pub struct ${structName} {`,
			];
			for (const [rawKey, value] of [...shape.props.entries()].sort(
				([left], [right]) => left.localeCompare(right),
			)) {
				const fieldName = toSnakeCase(rawKey);
				const fieldTypeBase = renderShape(
					value.shape,
					`${structName}${toPascalCase(rawKey)}`,
					ctx,
				);
				const fieldType =
					value.optional && !fieldTypeBase.startsWith("Option<")
						? `Option<${fieldTypeBase}>`
						: fieldTypeBase;

				if (rawKey !== fieldName.replace(/^r#/, "")) {
					lines.push(`    #[serde(rename = ${JSON.stringify(rawKey)})]`);
				}
				if (value.optional) {
					lines.push('    #[serde(skip_serializing_if = "Option::is_none")]');
				}

				lines.push(`    pub ${fieldName}: ${fieldType},`);
			}
			lines.push("}");
			ctx.declarations.push(lines.join("\n"));

			return structName;
		}
	}
}

export function buildRustOutput(
	entries: GameMasterEntryRaw[],
	options: CliOptions,
): string {
	const filteredEntries = filterGameMasterEntries(entries, options);
	const ctx: RenderContext = {
		...createNamedShapeRenderContext(),
		options,
	};
	const enumVariants: string[] = [];

	for (const entry of filteredEntries) {
		const variantBase = toPascalCase(entry.templateId);
		const dataShape = inferShape(entry.data, options);
		const dataTypeName = renderShape(dataShape, `${variantBase}Data`, ctx);
		const variantName = uniqueName(variantBase, ctx);

		enumVariants.push(
			[
				`    #[serde(rename = ${JSON.stringify(entry.templateId)})]`,
				`    ${variantName}(${dataTypeName}),`,
			].join("\n"),
		);
	}

	return [
		"// Auto-generated from GAME_MASTER.json",
		"// Do not edit by hand.",
		`// Filters: ${summarizeTemplateFilters(options)}`,
		`// Entries emitted: ${filteredEntries.length}`,
		`// Integer strategy: ${options.integerStrategy}`,
		`// Derive Default: ${options.deriveDefault}`,
		"",
		"use serde::{Deserialize, Serialize};",
		"",
		...ctx.declarations,
		"",
		deriveLine(options),
		'#[serde(tag = "templateId", content = "data")]',
		"pub enum GameMasterEntry {",
		...enumVariants,
		"}",
		"",
		"pub type GameMaster = Vec<GameMasterEntry>;",
		"",
	].join("\n");
}

function validateRustOutput(outputPath: string): void {
	const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "gm-rs-"));
	const cargoTomlPath = path.join(tempDir, "Cargo.toml");
	const srcDir = path.join(tempDir, "src");

	fs.mkdirSync(srcDir, { recursive: true });
	fs.writeFileSync(
		cargoTomlPath,
		[
			"[package]",
			'name = "gm_types_validate"',
			'version = "0.1.0"',
			'edition = "2021"',
			"",
			"[dependencies]",
			'serde = { version = "1", features = ["derive"] }',
			'serde_json = "1"',
			"",
		].join("\n"),
		"utf8",
	);
	fs.copyFileSync(outputPath, path.join(srcDir, "lib.rs"));

	const result = spawnSync("cargo", ["check", "--quiet"], {
		cwd: tempDir,
		encoding: "utf8",
		stdio: "pipe",
	});
	if (result.status !== 0) {
		throw new Error(
			`cargo check failed\n${result.stdout || ""}\n${result.stderr || ""}`.trim(),
		);
	}
}

export async function generateRust(parsed: Json): Promise<void> {
	const options = parseRustArgs(process.argv.slice(2));

	if (!Array.isArray(parsed)) {
		throw new Error("Expected GAME_MASTER root to be an array.");
	}

	const entries = parsed as unknown as GameMasterEntryRaw[];
	const output = buildRustOutput(entries, options);
	await Bun.write(options.outputPath, output);

	if (options.validate) {
		validateRustOutput(options.outputPath);
	}

	console.log(`Wrote ${options.outputPath}`);
	if (options.validate) {
		console.log("Validated with cargo check");
	}
}
