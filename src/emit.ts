import type { Group } from "./group.ts";
import type { InferredProperty, InferredType } from "./infer.ts";
import { inferJsonType, inferJsonTypes } from "./infer.ts";
import { aliasSuffix, deriveGroupAliases, groupName } from "./naming.ts";

export function emitGroupFile(group: Group): string {
	const gName = groupName(group.discriminator);
	const sortedIds = [...group.entries].map((e) => e.templateId).sort();
	const aliases = deriveGroupAliases(sortedIds);
	const payloadType = inferJsonTypes(
		group.entries.map((entry) => entry.data[group.discriminator]),
	);

	const lines: string[] = [];
	lines.push(`export interface ${gName}<T extends string> {`);
	lines.push(`\ttemplateId: T;`);
	lines.push(`\tdata: ${gName}Data<T>;`);
	lines.push(`}`);
	lines.push(``);
	lines.push(`export interface ${gName}Data<T extends string> {`);
	lines.push(`\ttemplateId: T;`);
	lines.push(...renderProperty(group.discriminator, payloadType, false, "\t"));
	lines.push(`}`);
	lines.push(``);

	for (const id of sortedIds) {
		const alias = aliases.get(id)!;
		lines.push(`export type ${gName}${alias} = ${gName}<"${id}">;`);
	}
	lines.push(``);

	lines.push(`export type ${gName}MasterfileEntry =`);
	sortedIds.forEach((id, i) => {
		const alias = aliases.get(id)!;
		const suffix = i === sortedIds.length - 1 ? ";" : "";
		lines.push(`\t| ${gName}${alias}${suffix}`);
	});
	lines.push(``);
	lines.push(
		`export type ${gName}TemplateID = ${gName}MasterfileEntry["templateId"];`,
	);
	lines.push(``);

	return lines.join("\n");
}

export function emitMiscFile(singletons: Group[]): string {
	// Precompute names + stub flag so the sort comparator is cheap.
	const named = singletons.map((g) => {
		const entry = g.entries[0]!;
		const dataKeys = Object.keys(entry.data).filter((k) => k !== "templateId");
		const isStub = dataKeys.length === 0;
		const name = isStub
			? aliasSuffix(entry.templateId, "")
			: groupName(g.discriminator);
		return { group: g, entry, name, isStub };
	});
	named.sort((a, b) => a.name.localeCompare(b.name));

	const lines: string[] = [];
	for (const { group, entry, name, isStub } of named) {
		lines.push(`export interface ${name} {`);
		lines.push(`\ttemplateId: "${entry.templateId}";`);
		lines.push(`\tdata: {`);
		lines.push(`\t\ttemplateId: "${entry.templateId}";`);
		if (!isStub) {
			const payloadType = inferJsonType(entry.data[group.discriminator]);
			lines.push(
				...renderProperty(group.discriminator, payloadType, false, "\t\t"),
			);
		}
		lines.push(`\t};`);
		lines.push(`}`);
		lines.push(``);
	}
	// Global union of all singletons + stubs, for `MasterfileEntry` composition.
	if (named.length === 0) {
		lines.push(`export type MiscMasterfileEntry = never;`);
	} else {
		lines.push(`export type MiscMasterfileEntry =`);
		named.forEach(({ name }, i) => {
			const suffix = i === named.length - 1 ? ";" : "";
			lines.push(`\t| ${name}${suffix}`);
		});
	}
	lines.push(``);
	lines.push(`export type MiscTemplateID = MiscMasterfileEntry["templateId"];`);
	lines.push(``);

	return lines.join("\n");
}

function renderType(type: InferredType): string[] {
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
		case "null":
		case "boolean":
		case "number":
		case "string":
			throw new Error(`Expected inline renderer to handle ${type.kind}`);
	}
}

function renderProperty(
	name: string,
	type: InferredType,
	optional: boolean,
	indent: string,
): string[] {
	const typeLines = renderType(type);
	const property = `${renderPropertyName(name)}${optional ? "?" : ""}`;
	if (typeLines.length === 1) {
		return [`${indent}${property}: ${typeLines[0]};`];
	}
	if (typeLines[0]?.startsWith("| ")) {
		return [
			`${indent}${property}:`,
			...typeLines.map((line, index) => {
				const suffix = index === typeLines.length - 1 ? ";" : "";
				return `${indent}\t${line}${suffix}`;
			}),
		];
	}

	return typeLines.map((line, index) => {
		if (index === 0) return `${indent}${property}: ${line}`;
		const suffix = index === typeLines.length - 1 ? ";" : "";
		return `${indent}${line}${suffix}`;
	});
}

function renderPropertyName(name: string): string {
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
			return (
				type.literals.map((value) => JSON.stringify(value)).join(" | ") ||
				"string"
			);
		case "object":
			return type.properties.length === 0 ? "Record<string, never>" : undefined;
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
	}
}

function renderObjectType(properties: InferredProperty[]): string[] {
	if (properties.length === 0) return ["Record<string, never>"];

	const lines = ["{"];
	for (const property of properties) {
		lines.push(
			...renderProperty(property.name, property.type, property.optional, "\t"),
		);
	}
	lines.push("}");
	return lines;
}

function renderTupleType(items: InferredType[]): string[] {
	if (items.length === 0) return ["[]"];

	const lines = ["["];
	items.forEach((item, index) => {
		const itemLines = renderType(item);
		const suffix = index === items.length - 1 ? "" : ",";
		if (itemLines.length === 1) {
			lines.push(`\t${itemLines[0]}${suffix}`);
			return;
		}
		lines.push(`\t${itemLines[0]}`);
		for (const line of itemLines.slice(1, -1)) {
			lines.push(`\t${line}`);
		}
		lines.push(`\t${itemLines[itemLines.length - 1]}${suffix}`);
	});
	lines.push("]");
	return lines;
}

function renderArrayType(element: InferredType): string[] {
	const elementLines = renderType(element);
	if (elementLines.length === 1) return [`Array<${elementLines[0]}>`];

	return ["Array<", ...elementLines.map((line) => `\t${line}`), ">"];
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

export function kebabCase(camelCase: string): string {
	return camelCase.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
}

export function emitIndexFile(multiEntryDiscriminators: string[]): string {
	const sorted = [...multiEntryDiscriminators].sort();
	const lines: string[] = [];

	for (const disc of sorted) {
		lines.push(`export type * from "./groups/${kebabCase(disc)}.ts";`);
	}
	lines.push(`export type * from "./groups/misc.ts";`);
	lines.push(``);

	for (const disc of sorted) {
		const name = groupName(disc);
		lines.push(
			`import type { ${name}MasterfileEntry } from "./groups/${kebabCase(disc)}.ts";`,
		);
	}
	lines.push(`import type { MiscMasterfileEntry } from "./groups/misc.ts";`);
	lines.push(``);
	lines.push(`export type MasterfileEntry =`);
	for (const disc of sorted) {
		const name = groupName(disc);
		lines.push(`\t| ${name}MasterfileEntry`);
	}
	lines.push(`\t| MiscMasterfileEntry;`);
	lines.push(``);
	lines.push(
		`export type MasterfileTemplateID = MasterfileEntry["templateId"];`,
	);
	lines.push(``);

	return lines.join("\n");
}
