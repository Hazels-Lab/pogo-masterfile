import type { Entry, Group } from "./group.ts";
import { isJsonObject } from "./helpers.ts";
import type { InferredProperty, InferredType } from "./infer.ts";
import { inferJsonType, inferJsonTypes, widenType } from "./infer.ts";
import type { InvariantTree } from "./invariants.ts";
import { detectInvariants, invariantsToInferredType, stripInvariantsFromValue, stripInvariantsFromWidened } from "./invariants.ts";
import { aliasSuffix, deriveGroupAliases, groupName } from "./naming.ts";

const TEMPLATE_GENERIC = `TemplateID`;
const SIMPLIFY = `S`;

function renderXDataInterface(name: string, type: InferredType): string[] {
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

function renderVariantAlias(gName: string, entry: Entry, group: Group, variantSuffix: string, invariants: InvariantTree): string[] {
	const typeName = `${gName}${variantSuffix}`;
	const payload = entry.data[group.discriminator];
	const stripped = stripInvariantsFromValue(payload, invariants);

	const isEmpty = !isJsonObject(stripped) || Object.keys(stripped).length === 0;
	if (isEmpty) {
		return [`export type ${typeName} = ${SIMPLIFY}<${gName}<"${entry.templateId}">>;`];
	}

	const literalType = inferJsonType(stripped);
	const literalLines = renderType(literalType);

	const lines: string[] = [`export type ${typeName} = ${SIMPLIFY}<${gName}<`];
	lines.push(`\t"${entry.templateId}",`);
	if (literalLines.length === 1) {
		lines.push(`\t${literalLines[0]}`);
	} else {
		for (const line of literalLines) {
			lines.push(`\t${line}`);
		}
	}
	lines.push(`>>;`);
	return lines;
}

export function emitMiscFile(singletons: Group[]): string {
	// Precompute names + stub flag so the sort comparator is cheap.
	const named = singletons.map((g) => {
		const entry = g.entries[0]!;
		const dataKeys = Object.keys(entry.data).filter((k) => k !== "templateId");
		const isStub = dataKeys.length === 0;
		const name = isStub ? aliasSuffix(entry.templateId, "") : groupName(g.discriminator);
		return { group: g, entry, name, isStub };
	});
	named.sort((a, b) => a.name.localeCompare(b.name));

	const lines: string[] = [`// Generated from Pokémon GO masterfile — singleton entries (no shared discriminator).`, ``];
	for (const { group, entry, name, isStub } of named) {
		lines.push(`export interface ${name} {`);
		lines.push(`\ttemplateId: "${entry.templateId}";`);
		lines.push(`\tdata: {`);
		lines.push(`\t\ttemplateId: "${entry.templateId}";`);
		if (!isStub) {
			const payloadType = inferJsonType(entry.data[group.discriminator]);
			lines.push(...renderProperty(group.discriminator, payloadType, false, "\t\t"));
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

function renderProperty(name: string, type: InferredType, optional: boolean, indent: string): string[] {
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

function inferGroupPayloadType(group: Group): InferredType {
	return inferJsonTypes(group.entries.map((entry) => entry.data[group.discriminator]));
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

export function pascalCase(input: string): string {
	return input
		.replace(/([a-z])([A-Z])/g, "$1 $2")
		.replace(/[^a-zA-Z0-9]+/g, " ")
		.trim()
		.split(/\s+/)
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		.join("");
}

export function emitTypesFile(multiEntryDiscriminators: string[]): string {
	const sorted = [...multiEntryDiscriminators, "misc"].sort();
	const lines: string[] = [`// Generated from Pokémon GO masterfile — index of all groups.`, ``];

	for (const disc of sorted) {
		const name = groupName(disc);
		lines.push(`import type { ${name} } from "./${kebabCase(disc)}/types";`);
	}
	for (const disc of sorted) {
		lines.push(`export type * from "./${kebabCase(disc)}/types";`);
	}
	lines.push(``);

	lines.push(``);
	lines.push(`export type MasterfileType =`);
	for (const disc of sorted) {
		const name = groupName(disc);
		lines.push(`\t| ${name}`);
	}
	lines.push(``);

	return lines.join("\n");
}

export function emitGroupTypes(group: Group): string {
	const gName = groupName(group.discriminator);
	const sortedIds = [...group.entries].map((e) => e.templateId).sort();
	const _aliases = deriveGroupAliases(sortedIds, gName);

	const invariants = detectInvariants(group);
	const payloadType = inferGroupPayloadType(group);
	const widenedPayload = widenType(payloadType);
	const xdataType = stripInvariantsFromWidened(widenedPayload, invariants);

	const xdataName = `${gName}Data`;
	const discName = renderPropertyName(group.discriminator);
	const entryCount = group.entries.length;
	const entryWord = entryCount === 1 ? "entry" : "entries";
	const lines: string[] = [
		`// Generated from Pokémon GO masterfile — group "${group.discriminator}", ${entryCount} ${entryWord} (structural types).`,
		``,
		// `import type { ${SIMPLIFY} } from "../_utils";`,
		// ``,
		// `export type * from "./entries";`,
		// ``,
	];

	lines.push(`export interface ${gName}<`);
	lines.push(`\t${TEMPLATE_GENERIC} extends string = string,`);
	lines.push(`\tTData extends ${xdataName} = ${xdataName},`);
	lines.push(`> {`);
	lines.push(`\ttemplateId: ${TEMPLATE_GENERIC};`);
	lines.push(`\tdata: {`);
	lines.push(`\t\ttemplateId: ${TEMPLATE_GENERIC};`);

	if (invariants.size === 0) {
		lines.push(`\t\t${discName}: TData;`);
	} else {
		const invariantsType = invariantsToInferredType(invariants);
		const invariantsLines = renderType(invariantsType);
		if (invariantsLines.length === 1) {
			lines.push(`\t\t${discName}: TData & ${invariantsLines[0]};`);
		} else {
			lines.push(`\t\t${discName}: TData & ${invariantsLines[0]}`);
			for (const line of invariantsLines.slice(1, -1)) {
				lines.push(`\t\t${line}`);
			}
			lines.push(`\t\t${invariantsLines[invariantsLines.length - 1]};`);
		}
	}

	lines.push(`\t};`);
	lines.push(`}`);
	lines.push(``);

	lines.push(...renderXDataInterface(xdataName, xdataType));
	lines.push(``);

	// lines.push(`export type ${gName}MasterfileType =`);
	// sortedIds.forEach((id, i) => {
	// 	const alias = aliases.get(id)!;
	// 	const suffix = i === sortedIds.length - 1 ? ";" : "";
	// 	lines.push(`\t| ${gName}${alias}${suffix}`);
	// });
	// lines.push(``);
	// lines.push(``);

	return lines.join("\n");
}

function renderAllVariantAliases(group: Group): string[] {
	const gName = groupName(group.discriminator);
	const sortedIds = [...group.entries].map((e) => e.templateId).sort();
	const aliases = deriveGroupAliases(sortedIds, gName);
	const invariants = detectInvariants(group);
	const entriesById = new Map(group.entries.map((e) => [e.templateId, e]));

	const lines: string[] = [];
	const typeNames: string[] = [];

	for (const id of sortedIds) {
		const entry = entriesById.get(id)!;
		const variantSuffix = aliases.get(id)!;
		typeNames.push(`${gName}${variantSuffix}`);
		lines.push(...renderVariantAlias(gName, entry, group, variantSuffix, invariants));
	}

	lines.push(``);
	lines.push(renderVariantBarrelType(gName, typeNames));
	return lines;
}

function renderVariantBarrelType(typePrefix: string, typeNames: string[]) {
	return `export type ${typePrefix}MasterfileEntry = ${typeNames.join("| ")}`;
}

export function emitEntriesFlat(group: Group): string {
	const gName = groupName(group.discriminator);
	const xdataName = `${gName}Data`;
	const entryCount = group.entries.length;
	const entryWord = entryCount === 1 ? "entry" : "entries";

	const lines: string[] = [
		`// Generated from Pokémon GO masterfile — group "${group.discriminator}", ${entryCount} ${entryWord} (variant aliases).`,
		``,
		`import type { ${SIMPLIFY} } from "../_utils";`,
		`import type { ${gName}, ${xdataName} } from "./index";`,
		``,
	];
	lines.push(...renderAllVariantAliases(group));
	lines.push(``);
	return lines.join("\n");
}

export function emitEntryFile(group: Group, bucketName: string, entries: Entry[]): string {
	const gName = groupName(group.discriminator);
	const xdataName = `${gName}Data`;
	const sortedIds = [...group.entries].map((e) => e.templateId).sort();
	const aliases = deriveGroupAliases(sortedIds, gName);
	const invariants = detectInvariants(group);
	const entryCount = entries.length;
	const entryWord = entryCount === 1 ? "entry" : "entries";

	const lines: string[] = [
		`// Generated from Pokémon GO masterfile — group "${group.discriminator}", split "${bucketName}", ${entryCount} ${entryWord}.`,
		``,
		`import type { ${SIMPLIFY} } from "../../_utils";`,
		`import type { ${gName}, ${xdataName} } from "../types";`,
		``,
	];

	const sortedSubset = [...entries].map((e) => e.templateId).sort();
	const typeNames: string[] = [];
	for (const id of sortedSubset) {
		const entry = entries.find((e) => e.templateId === id)!;
		const variantSuffix = aliases.get(id)!;
		typeNames.push(`${gName}${variantSuffix}`);
		lines.push(...renderVariantAlias(gName, entry, group, variantSuffix, invariants));
	}
	lines.push(``);
	lines.push(renderVariantBarrelType(`${gName}${aliasSuffix(bucketName, "")}`, typeNames));
	lines.push(``);
	return lines.join("\n");
}

export function emitEntriesBarrel(discriminator: string, fileNames: string[]): string {
	const typeName = pascalCase(discriminator);
	const sorted = [...fileNames].sort();

	const lines: string[] = [
		`// Generated from Pokémon GO masterfile — group "${discriminator}" entries barrel.`,
		``,
		...sorted.map((e) => `import type { ${typeName}${pascalCase(e)}MasterfileEntry } from './${e}';`),
	];
	for (const name of sorted) {
		lines.push(`export type * from "./${name}";`);
	}
	lines.push(``);

	lines.push(`export type ${typeName}MasterfileEntry = ${sorted.map((f) => `${typeName}${pascalCase(f)}MasterfileEntry`).join("| ")}`);
	lines.push(``);
	lines.push(`export type ${typeName}TemplateID = ${typeName}MasterfileEntry["templateId"];`);

	return lines.join("\n");
}

export function emitTopLevelVariants(groupSplits: Map<string, "split" | "flat">): string {
	const sortedDiscs = [...groupSplits.keys(), "misc"].sort();
	const lines: string[] = [`// Generated from Pokémon GO masterfile — top-level entries barrel.`, ``];

	for (const disc of sortedDiscs) {
		const name = groupName(disc);
		lines.push(`import type { ${name}MasterfileEntry } from "./${kebabCase(disc)}/entries";`);
	}
	// lines.push(`import type { MiscMasterfileEntry } from "./misc/entries";`);

	lines.push(``);

	for (const disc of sortedDiscs) {
		const kebab = kebabCase(disc);
		const path = groupSplits.get(disc) === "split" ? `./${kebab}/entries` : `./${kebab}/entries.ts`;
		lines.push(`export type * from "${path}";`);
	}
	lines.push(``);
	// lines.push(`export type * from "./misc/entries";`);

	lines.push(``);
	lines.push(`export type MasterfileEntry =`);
	for (const disc of sortedDiscs) {
		const name = groupName(disc);
		lines.push(`\t| ${name}MasterfileEntry`);
	}
	// lines.push(`\t| MiscMasterfileEntry;`);
	lines.push(``);
	lines.push(`export type MasterfileTemplateID = MasterfileEntry["templateId"];`);
	lines.push(``);
	lines.push(`export type MasterfileEntryByTemplateID<T extends MasterfileTemplateID> = Extract<MasterfileEntry, { templateId: T }>;`);
	lines.push(``);

	return lines.join("\n");
}

export function emitIndexFile() {
	return [`export type * from "./entries";`, `export type * from "./types";`].join("\n");
}
