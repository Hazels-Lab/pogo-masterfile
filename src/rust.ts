import * as fs from "node:fs";
import * as path from "node:path";
import type { GameMasterEntryRaw, Json } from "./types";

// Usage examples:
//   tsx generate-game-master-rust-types.ts --input ./GAME_MASTER.json --output ./game_master.rs --all
//   tsx generate-game-master-rust-types.ts --input ./GAME_MASTER.json --output ./avatar.rs --prefix AVATAR_
//   tsx generate-game-master-rust-types.ts --input ./GAME_MASTER.json --output ./gates.rs --match FEATURE_GATE
//   tsx generate-game-master-rust-types.ts --input ./GAME_MASTER.json --output ./game_master.rs --all --integer-strategy smart --derive-default
//   tsx generate-game-master-rust-types.ts --input ./GAME_MASTER.json --output ./game_master.rs --all --validate
//
// Notes:
// - Emits serde-friendly Rust types.
// - Uses a tagged enum for GameMasterEntry with #[serde(tag = "templateId", content = "data")].
// - Struct fields are snake_case with #[serde(rename = "...")] when needed.
// - Optional properties become Option<T>.
// - Arrays become Vec<T>.
// - Mixed-shape unions fall back to serde_json::Value.
// - Integer strategy defaults to "smart":
//     * all observed integers >= 0 -> u64
//     * all observed integers (including negatives) -> i64
//     * any observed fractional number -> f64

type Shape =
	| { kind: "null" }
	| { kind: "boolean" }
	| { kind: "number"; numberKind: NumberKind }
	| { kind: "string" }
	| { kind: "array"; element: Shape }
	| { kind: "object"; props: Map<string, { shape: Shape; optional: boolean }> }
	| { kind: "union"; variants: Shape[] };

type NumberKind = "u64" | "i64" | "f64";
type IntegerStrategy = "smart" | "i64" | "f64";

interface CliOptions {
	inputPath: string;
	outputPath: string;
	includeAll: boolean;
	prefixes: string[];
	matches: string[];
	integerStrategy: IntegerStrategy;
	deriveDefault: boolean;
	validate: boolean;
}

interface RenderContext {
	declarations: string[];
	seenNames: Set<string>;
	emittedShapes: Map<string, string>;
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

function parseArgs(argv: string[]): CliOptions {
	let inputPath = path.resolve("GAME_MASTER.json");
	let outputPath = path.resolve(process.cwd(), "./packages/rust/lib.rs");
	let includeAll = false;
	const prefixes: string[] = [];
	const matches: string[] = [];
	let integerStrategy: IntegerStrategy = "smart";
	let deriveDefault = false;
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
				if (value !== "smart" && value !== "i64" && value !== "f64") {
					throw new Error("--integer-strategy must be one of: smart, i64, f64");
				}
				integerStrategy = value;
				break;
			}
			case "--derive-default":
				deriveDefault = true;
				break;
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
		includeAll,
		prefixes,
		matches,
		integerStrategy,
		deriveDefault,
		validate,
	};
}

function printHelpAndExit(): never {
	const help = `
Generate Rust types from a GAME_MASTER.json file.

Options:
  --input,  -i <path>         Path to GAME_MASTER.json
  --output, -o <path>         Path to generated .rs file
  --all                       Include all templateIds
  --prefix <value>            Include templateIds starting with the given prefix (repeatable)
  --match <value>             Include templateIds containing the given substring (repeatable)
  --integer-strategy <mode>   smart | i64 | f64 (default: smart)
  --derive-default            Add Default to all generated derives
  --validate                  Validate output by generating a temporary Cargo crate and running cargo check
  --help,   -h                Show this help

Examples:
  tsx generate-game-master-rust-types.ts --input ./GAME_MASTER.json --output ./all.rs --all
  tsx generate-game-master-rust-types.ts --input ./GAME_MASTER.json --output ./avatar.rs --prefix AVATAR_
  tsx generate-game-master-rust-types.ts --input ./GAME_MASTER.json --output ./filtered.rs --prefix AVATAR_ --match FEATURE_GATE
  tsx generate-game-master-rust-types.ts --input ./GAME_MASTER.json --output ./all.rs --all --integer-strategy smart --derive-default --validate
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
	for (const shape of shapes) {
		seen.set(shapeKey(shape), shape);
	}
	return [...seen.values()];
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

function widenNumberKinds(a: NumberKind, b: NumberKind): NumberKind {
	if (a === b) return a;
	if (a === "f64" || b === "f64") return "f64";
	if ((a === "u64" && b === "i64") || (a === "i64" && b === "u64"))
		return "i64";
	return "f64";
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
		if (value.length === 0) {
			return { kind: "array", element: { kind: "union", variants: [] } };
		}

		const mergedElement = value
			.map((item) => inferShape(item, options))
			.reduce(mergeShapes);
		return { kind: "array", element: mergedElement };
	}

	const props = new Map<string, { shape: Shape; optional: boolean }>();
	for (const [key, child] of Object.entries(value)) {
		props.set(key, { shape: inferShape(child, options), optional: false });
	}
	return { kind: "object", props };
}

function mergeShapes(a: Shape, b: Shape): Shape {
	if (shapeKey(a) === shapeKey(b)) {
		return a;
	}

	if (a.kind === "number" && b.kind === "number") {
		return {
			kind: "number",
			numberKind: widenNumberKinds(a.numberKind, b.numberKind),
		};
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

function toSnakeCase(input: string): string {
	const basic = input
		.replace(/([a-z0-9])([A-Z])/g, "$1_$2")
		.replace(/[^a-zA-Z0-9]+/g, "_")
		.replace(/_+/g, "_")
		.replace(/^_+|_+$/g, "")
		.toLowerCase();

	if (!basic) return "field";
	return RUST_RESERVED.has(basic) ? `r#${basic}` : basic;
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

function rustTypeForUnion(
	shape: Shape,
	suggestedName: string,
	ctx: RenderContext,
): string {
	const variants = "variants" in shape ? dedupeShapes(shape.variants) : [];
	if (variants.length === 0) return "serde_json::Value";

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
	if (kinds.size === 1 && nonNull.length > 0 && first) {
		const firstKind = first.kind;
		if (firstKind === "object") return "serde_json::Value";
		if (firstKind === "array") return "serde_json::Value";
		if (firstKind === "number") {
			const numberVariants = nonNull.filter(
				(variant): variant is Extract<Shape, { kind: "number" }> =>
					variant.kind === "number",
			);
			const numberKinds = new Set(
				numberVariants.map((variant) => variant.numberKind),
			);
			if (numberKinds.has("f64")) return "f64";
			if (numberKinds.has("i64") && numberKinds.has("u64")) return "i64";
			if (numberKinds.has("i64")) return "i64";
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
				([a], [b]) => a.localeCompare(b),
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

function buildRust(entries: GameMasterEntryRaw[], options: CliOptions): string {
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

	const enumVariants: string[] = [];

	for (const entry of filteredEntries) {
		const variantBase = toPascalCase(entry.templateId);
		const dataShape = inferShape(entry.data as Json, options);
		const dataTypeName = renderShape(dataShape, `${variantBase}Data`, ctx);
		const variantName = uniqueName(variantBase, ctx);

		enumVariants.push(
			[
				`    #[serde(rename = ${JSON.stringify(entry.templateId)})]`,
				`    ${variantName}(${dataTypeName}),`,
			].join("\n"),
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
		"// Auto-generated from GAME_MASTER.json",
		"// Do not edit by hand.",
		`// Filters: ${filterSummary}`,
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
	const tempDir = fs.mkdtempSync(
		path.join(fs.realpathSync(require("node:os").tmpdir()), "gm-rs-"),
	);
	const cargoToml = `[package]\nname = "gm_types_validate"\nversion = "0.1.0"\nedition = "2021"\n\n[dependencies]\nserde = { version = "1", features = ["derive"] }\nserde_json = "1"\n`;
	const srcDir = path.join(tempDir, "src");
	fs.mkdirSync(srcDir, { recursive: true });
	fs.writeFileSync(path.join(tempDir, "Cargo.toml"), cargoToml, "utf8");
	fs.copyFileSync(outputPath, path.join(srcDir, "lib.rs"));

	const { spawnSync } =
		require("node:child_process") as typeof import("node:child_process");
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

export function generateRust(parsed: Json): void {
	const options = parseArgs(process.argv.slice(2));

	if (!Array.isArray(parsed)) {
		throw new Error("Expected GAME_MASTER root to be an array.");
	}

	const entries = parsed as unknown as GameMasterEntryRaw[];
	const output = buildRust(entries, options);
	fs.writeFileSync(options.outputPath, output, "utf8");

	if (options.validate) {
		validateRustOutput(options.outputPath);
	}

	console.log(`Wrote ${options.outputPath}`);
	if (options.validate) {
		console.log("Validated with cargo check");
	}
}
