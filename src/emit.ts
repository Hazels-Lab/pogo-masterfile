import type { Group } from "./group.ts";
import type { InferredProperty, InferredType } from "./infer.ts";
import { inferJsonType, inferJsonTypes } from "./infer.ts";
import { aliasSuffix, deriveGroupAliases, groupName } from "./naming.ts";

interface TemplateValue {
	templateId: string;
	value: unknown;
}

interface PlannedAlias {
	path: string[];
	pathKey: string;
	name: string;
	type: InferredType;
	arrayWrapperCount: number;
}

interface AliasPlan {
	aliases: PlannedAlias[];
	byPath: Map<string, PlannedAlias>;
}

interface RenderContext {
	aliases: AliasPlan;
	path: string[];
}

const TEMPLATE_GENERIC = `TemplateID`;
const EMPTY_ALIAS_PLAN: AliasPlan = {
	aliases: [],
	byPath: new Map<string, PlannedAlias>(),
};

export function emitGroupFile(group: Group): string {
	const gName = groupName(group.discriminator);
	const sortedIds = [...group.entries].map((e) => e.templateId).sort();
	const aliases = deriveGroupAliases(sortedIds);
	const payloadType = inferGroupPayloadType(group);
	const aliasPlan = planTypeAliases(
		gName,
		payloadType,
		moduleReservedNames(gName, sortedIds, aliases),
	);

	const lines: string[] = [];
	lines.push(`export interface ${gName}<${TEMPLATE_GENERIC} extends string> {`);
	lines.push(`\ttemplateId: ${TEMPLATE_GENERIC};`);
	lines.push(`\tdata: ${gName}Data<${TEMPLATE_GENERIC}>;`);
	lines.push(`}`);
	lines.push(``);
	lines.push(
		`export interface ${gName}Data<${TEMPLATE_GENERIC} extends string> {`,
	);
	lines.push(`\ttemplateId: ${TEMPLATE_GENERIC};`);
	lines.push(
		...renderProperty(group.discriminator, payloadType, false, "\t", {
			aliases: aliasPlan,
			path: [],
		}),
	);
	lines.push(`}`);
	lines.push(``);
	lines.push(...renderAliasDefinitions(aliasPlan));

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
				...renderProperty(group.discriminator, payloadType, false, "\t\t", {
					aliases: EMPTY_ALIAS_PLAN,
					path: [],
				}),
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

function renderType(type: InferredType, context: RenderContext): string[] {
	const plannedAlias = context.aliases.byPath.get(aliasPathKey(context.path));
	if (plannedAlias) {
		if (plannedAlias.arrayWrapperCount > 0) {
			return [wrapArrayType(plannedAlias.name, plannedAlias.arrayWrapperCount)];
		}
		return [plannedAlias.name];
	}

	const inline = renderInlineType(type);
	if (inline) return [inline];

	switch (type.kind) {
		case "object":
			return renderObjectType(type.properties, context);
		case "tuple":
			return renderTupleType(type.items, context);
		case "array":
			return renderArrayType(type.element, context);
		case "union":
			return renderUnionType(type.variants, context);
		case "templateIdReference":
			return [TEMPLATE_GENERIC];
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
	context: RenderContext,
): string[] {
	const typeLines = renderType(type, context);
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
		case "templateIdReference":
			return TEMPLATE_GENERIC;
	}
}

function renderObjectType(
	properties: InferredProperty[],
	context: RenderContext,
): string[] {
	if (properties.length === 0) return ["Record<string, never>"];

	const lines = ["{"];
	for (const property of properties) {
		lines.push(
			...renderProperty(property.name, property.type, property.optional, "\t", {
				...context,
				path: [...context.path, property.name],
			}),
		);
	}
	lines.push("}");
	return lines;
}

function renderTupleType(
	items: InferredType[],
	context: RenderContext,
): string[] {
	if (items.length === 0) return ["[]"];

	const lines = ["["];
	items.forEach((item, index) => {
		const itemLines = renderType(item, context);
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

function renderArrayType(
	element: InferredType,
	context: RenderContext,
): string[] {
	const elementLines = renderType(element, context);
	if (elementLines.length === 1) return [`Array<${elementLines[0]}>`];

	return ["Array<", ...elementLines.map((line) => `\t${line}`), ">"];
}

function renderUnionType(
	variants: InferredType[],
	context: RenderContext,
): string[] {
	return variants.flatMap((variant) => {
		const lines = renderType(variant, context);
		const [firstLine, ...rest] = lines;
		return [`| ${firstLine}`, ...rest];
	});
}

function planTypeAliases(
	groupDisplayName: string,
	payloadType: InferredType,
	reservedNames: ReadonlySet<string>,
): AliasPlan {
	const candidates: Array<Omit<PlannedAlias, "name">> = [];
	collectAliasCandidates(payloadType, [], candidates, 0);
	const sorted = candidates.sort((a, b) => a.pathKey.localeCompare(b.pathKey));
	const usedNames = new Set(reservedNames);
	const aliases = sorted.map((candidate) => {
		const baseName = aliasNameForPath(groupDisplayName, candidate.path);
		const name = availableAliasName(baseName, usedNames);
		usedNames.add(name);
		return {
			...candidate,
			name,
		};
	});
	return {
		aliases,
		byPath: new Map(aliases.map((alias) => [alias.pathKey, alias])),
	};
}

function collectAliasCandidates(
	type: InferredType,
	path: string[],
	candidates: Array<Omit<PlannedAlias, "name">>,
	arrayWrapperCount: number,
): void {
	if (path.length > 0 && isAliasWorthyType(type)) {
		candidates.push({
			path,
			pathKey: aliasPathKey(path),
			type,
			arrayWrapperCount,
		});
		return;
	}

	if (type.kind === "object") {
		for (const property of type.properties) {
			collectAliasCandidates(
				property.type,
				[...path, property.name],
				candidates,
				0,
			);
		}
		return;
	}

	if (type.kind === "array") {
		collectAliasCandidates(
			type.element,
			path,
			candidates,
			arrayWrapperCount + 1,
		);
	}
}

function isAliasWorthyType(type: InferredType): boolean {
	switch (type.kind) {
		case "boolean":
		case "number":
		case "string":
			return type.literals.length > 1;
		case "tuple":
			return type.items.length > 0;
		case "union":
			return type.variants.length > 1;
		case "array":
		case "object":
		case "null":
		case "templateIdReference":
			return false;
	}
}

function aliasPathKey(path: readonly string[]): string {
	return JSON.stringify(path);
}

function aliasNameForPath(
	groupDisplayName: string,
	path: readonly string[],
): string {
	return `${groupDisplayName}${path.map(aliasNameSegment).join("")}`;
}

function aliasNameSegment(segment: string): string {
	const words = segment
		.replace(/([a-z0-9])([A-Z])/g, "$1 $2")
		.replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
		.split(/[^a-zA-Z0-9]+/)
		.filter(Boolean);

	return (
		words
			.map((word) => {
				if (word.toLowerCase() === "id") return "ID";
				return `${word[0]!.toUpperCase()}${word.slice(1).toLowerCase()}`;
			})
			.join("") || "Root"
	);
}

function wrapArrayType(typeName: string, wrapperCount: number): string {
	let rendered = typeName;
	for (let i = 0; i < wrapperCount; i += 1) {
		rendered = `Array<${rendered}>`;
	}
	return rendered;
}

function renderAliasDefinitions(plan: AliasPlan): string[] {
	const lines: string[] = [];
	for (const alias of plan.aliases) {
		const typeLines = renderType(alias.type, {
			aliases: EMPTY_ALIAS_PLAN,
			path: alias.path,
		});
		if (typeLines.length === 1) {
			lines.push(`export type ${alias.name} = ${typeLines[0]};`);
			lines.push(``);
			continue;
		}
		if (typeLines[0]?.startsWith("| ")) {
			lines.push(`export type ${alias.name} =`);
			typeLines.forEach((line, index) => {
				const suffix = index === typeLines.length - 1 ? ";" : "";
				lines.push(`\t${line}${suffix}`);
			});
			lines.push(``);
			continue;
		}
		lines.push(`export type ${alias.name} = ${typeLines[0]}`);
		for (const line of typeLines.slice(1, -1)) {
			lines.push(line);
		}
		lines.push(`${typeLines[typeLines.length - 1]};`);
		lines.push(``);
	}
	return lines;
}

function moduleReservedNames(
	groupDisplayName: string,
	sortedTemplateIds: readonly string[],
	entryAliases: ReadonlyMap<string, string>,
): Set<string> {
	const names = new Set([
		groupDisplayName,
		`${groupDisplayName}Data`,
		`${groupDisplayName}MasterfileEntry`,
		`${groupDisplayName}TemplateID`,
	]);

	for (const id of sortedTemplateIds) {
		names.add(`${groupDisplayName}${entryAliases.get(id)!}`);
	}

	return names;
}

function availableAliasName(
	baseName: string,
	usedNames: ReadonlySet<string>,
): string {
	if (!usedNames.has(baseName)) return baseName;

	let suffix = 2;
	while (usedNames.has(`${baseName}${suffix}`)) {
		suffix += 1;
	}
	return `${baseName}${suffix}`;
}

function inferGroupPayloadType(group: Group): InferredType {
	return inferTemplateAwareValues(
		group.entries.map((entry) => ({
			templateId: entry.templateId,
			value: entry.data[group.discriminator],
		})),
		[],
	);
}

function inferTemplateAwareValues(
	values: readonly TemplateValue[],
	path: readonly string[],
): InferredType {
	if (
		isTemplateIdMirrorPath(path) &&
		values.length > 0 &&
		values.every(({ templateId, value }) => value === templateId)
	) {
		return { kind: "templateIdReference" };
	}

	if (values.every(({ value }) => Array.isArray(value))) {
		return inferTemplateAwareArrays(
			values as Array<{ templateId: string; value: unknown[] }>,
			path,
		);
	}

	if (values.every(({ value }) => isJsonObject(value))) {
		return inferTemplateAwareObjects(
			values as Array<{ templateId: string; value: Record<string, unknown> }>,
			path,
		);
	}

	return inferJsonTypes(values.map(({ value }) => value));
}

function inferTemplateAwareArrays(
	values: ReadonlyArray<{ templateId: string; value: unknown[] }>,
	path: readonly string[],
): InferredType {
	const firstLength = values[0]?.value.length ?? 0;
	const isFixedLength = values.every(
		({ value }) => value.length === firstLength,
	);
	if (isFixedLength) {
		return {
			kind: "tuple",
			items: Array.from({ length: firstLength }, (_, index) =>
				inferTemplateAwareValues(
					values.map(({ templateId, value }) => ({
						templateId,
						value: value[index],
					})),
					path.length > 0 ? [...path, String(index)] : path,
				),
			),
		};
	}

	return {
		kind: "array",
		element: inferTemplateAwareValues(
			values.flatMap(({ templateId, value }) =>
				value.map((item) => ({ templateId, value: item })),
			),
			path,
		),
	};
}

function inferTemplateAwareObjects(
	values: ReadonlyArray<{ templateId: string; value: Record<string, unknown> }>,
	path: readonly string[],
): InferredType {
	const propertyValues = new Map<string, TemplateValue[]>();
	const propertyCounts = new Map<string, number>();

	for (const { templateId, value } of values) {
		for (const [key, propertyValue] of Object.entries(value)) {
			const collected = propertyValues.get(key);
			const templateValue = { templateId, value: propertyValue };
			if (collected) collected.push(templateValue);
			else propertyValues.set(key, [templateValue]);
			propertyCounts.set(key, (propertyCounts.get(key) ?? 0) + 1);
		}
	}

	const properties = [...propertyValues.entries()]
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([name, observedValues]) => ({
			name,
			type: inferTemplateAwareValues(observedValues, [...path, name]),
			optional: propertyCounts.get(name) !== values.length,
		}));

	return { kind: "object", properties };
}

function isTemplateIdMirrorPath(path: readonly string[]): boolean {
	return path.length <= 1;
}

function isJsonObject(value: unknown): value is Record<string, unknown> {
	return typeof value === "object" && value !== null && !Array.isArray(value);
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
