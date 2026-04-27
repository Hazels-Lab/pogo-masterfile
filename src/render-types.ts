import { TEMPLATE_GENERIC } from "./constants.ts";
import type { InferredProperty, InferredType } from "./infer.ts";

// Prepend `indent` to each line; append `lastSuffix` (e.g. ";" or ",") to the final line only.
// The everyday shape for indenting a multi-line type body and attaching trailing punctuation.
export function indentLines(lines: string[], indent: string, lastSuffix = ""): string[] {
	return lines.map((line, i) => {
		const suffix = i === lines.length - 1 ? lastSuffix : "";
		return `${indent}${line}${suffix}`;
	});
}

export function renderXDataInterface(name: string, type: InferredType): string[] {
	// Empty object: emit `export interface Name {}` directly.
	if (type.kind === "object" && type.properties.length === 0) {
		return [`export interface ${name} {}`];
	}
	const typeLines = renderType(type);
	// typeLines shape: ["{", "\t...", ..., "}"]
	const lines: string[] = [];
	lines.push(`export interface ${name} ${typeLines[0]}`);
	for (const line of typeLines.slice(1, -1)) {
		lines.push(line);
	}
	lines.push(typeLines[typeLines.length - 1]!);
	return lines;
}

export function renderType(type: InferredType): string[] {
	const inline = renderInlineType(type);
	if (inline) return [inline];

	switch (type.kind) {
		case "object":
			return renderObjectType(type.properties);
		case "tuple":
			return renderTupleType(type.items);
		case "array":
			return renderArrayType(type.element);
		case "union":
			return renderUnionType(type.variants);
		case "templateIdReference":
			return [TEMPLATE_GENERIC];
		case "templateIdSlice":
			return [`${TEMPLATE_GENERIC} extends \`${type.prefix}\${infer Rest}${type.suffix}\` ? Rest : string`];
		case "null":
		case "boolean":
		case "number":
		case "string":
			throw new Error(`Expected inline renderer to handle ${type.kind}`);
	}
}

export function renderProperty(name: string, type: InferredType, optional: boolean, indent: string): string[] {
	const typeLines = renderType(type);
	const property = `${renderPropertyName(name)}${optional ? "?" : ""}`;
	if (typeLines.length === 1) {
		return [`${indent}${property}: ${typeLines[0]};`];
	}
	// Union types render as `| A | B | ...` — break onto its own line, then indent.
	if (typeLines[0]?.startsWith("| ")) {
		return [`${indent}${property}:`, ...indentLines(typeLines, `${indent}\t`, ";")];
	}
	// Other multi-line shapes (object, tuple, array): glue first line to the property name.
	return [`${indent}${property}: ${typeLines[0]}`, ...indentLines(typeLines.slice(1), indent, ";")];
}

export function renderPropertyName(name: string): string {
	if (isIdentifierName(name) && !RESERVED_WORDS.has(name)) return name;
	return JSON.stringify(name);
}

function renderInlineType(type: InferredType): string | undefined {
	switch (type.kind) {
		case "null":
			return "null";
		case "boolean":
			return type.literals.map(String).join(" | ") || "boolean";
		case "number":
			return type.literals.map(String).join(" | ") || "number";
		case "string":
			return type.literals.map((value) => JSON.stringify(value)).join(" | ") || "string";
		case "object":
			return type.properties.length === 0 ? "object" : undefined;
		case "tuple":
			return type.items.length === 0 ? "[]" : undefined;
		case "array": {
			const element = renderInlineType(type.element);
			return element ? `Array<${element}>` : undefined;
		}
		case "union": {
			const variants = type.variants.map(renderInlineType);
			if (variants.every((variant): variant is string => Boolean(variant))) {
				return variants.join(" | ") || "never";
			}
			return undefined;
		}
		case "templateIdReference":
			return TEMPLATE_GENERIC;
		case "templateIdSlice":
			return `${TEMPLATE_GENERIC} extends \`${type.prefix}\${infer Rest}${type.suffix}\` ? Rest : string`;
	}
}

function renderObjectType(properties: InferredProperty[]): string[] {
	if (properties.length === 0) {
		// this shouldn't be hit
		return ["Record<string, never>"];
	}

	const lines = ["{"];
	for (const property of properties) {
		lines.push(...renderProperty(property.name, property.type, property.optional, "\t"));
	}
	lines.push("}");
	return lines;
}

function renderTupleType(items: InferredType[]): string[] {
	if (items.length === 0) return ["[]"];

	const lines = ["["];
	items.forEach((item, index) => {
		const isLast = index === items.length - 1;
		lines.push(...indentLines(renderType(item), "\t", isLast ? "" : ","));
	});
	lines.push("]");
	return lines;
}

function renderArrayType(element: InferredType): string[] {
	const elementLines = renderType(element);
	if (elementLines.length === 1) return [`Array<${elementLines[0]}>`];

	return ["Array<", ...indentLines(elementLines, "\t"), ">"];
}

function renderUnionType(variants: InferredType[]): string[] {
	return variants.flatMap((variant) => {
		const lines = renderType(variant);
		const [firstLine, ...rest] = lines;
		return [`| ${firstLine}`, ...rest];
	});
}

function isIdentifierName(value: string): boolean {
	return /^[$A-Z_a-z][$\w]*$/.test(value);
}

const RESERVED_WORDS = new Set([
	"abstract",
	"any",
	"as",
	"asserts",
	"async",
	"await",
	"boolean",
	"break",
	"case",
	"catch",
	"class",
	"const",
	"constructor",
	"continue",
	"debugger",
	"declare",
	"default",
	"delete",
	"do",
	"else",
	"enum",
	"export",
	"extends",
	"false",
	"finally",
	"for",
	"from",
	"function",
	"get",
	"if",
	"implements",
	"import",
	"in",
	"infer",
	"instanceof",
	"interface",
	"is",
	"keyof",
	"let",
	"module",
	"namespace",
	"never",
	"new",
	"null",
	"number",
	"object",
	"of",
	"package",
	"private",
	"protected",
	"public",
	"readonly",
	"require",
	"return",
	"satisfies",
	"set",
	"static",
	"string",
	"super",
	"switch",
	"symbol",
	"this",
	"throw",
	"true",
	"try",
	"type",
	"typeof",
	"undefined",
	"unique",
	"unknown",
	"var",
	"void",
	"while",
	"with",
	"yield",
]);
