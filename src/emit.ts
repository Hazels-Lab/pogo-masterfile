import type { Entry, Group } from "./group.ts";
import { isJsonObject } from "./helpers.ts";
import type { InferredType } from "./infer.ts";
import { inferJsonType, inferJsonTypes, widenType } from "./infer.ts";
import type { InvariantTree } from "./invariants.ts";
import { detectInvariants, invariantsToInferredType, stripInvariantsFromValue, stripInvariantsFromWidened } from "./invariants.ts";
import { aliasSuffix, deriveGroupAliases, groupName, kebabCase, pascalCase } from "./naming.ts";
import { indentLines, renderProperty, renderPropertyName, renderType, renderXDataInterface, SIMPLIFY, TEMPLATE_GENERIC } from "./render-types.ts";

// Standard file header: comment line, blank, imports, blank.
function emitFileHeader(comment: string, imports: string[]): string[] {
	return [`// ${comment}`, ``, ...imports, ``];
}

// Render `${gName}${suffix}` variant aliases for a list of entries (sorted by templateId).
// Returns the rendered lines and the type names emitted, for use in barrel unions.
function renderEntryVariants(
	entries: Entry[],
	gName: string,
	group: Group,
	aliases: Map<string, string>,
	invariants: InvariantTree,
): { lines: string[]; typeNames: string[] } {
	const sortedIds = [...entries].map((e) => e.templateId).sort();
	const entriesById = new Map(entries.map((e) => [e.templateId, e]));
	const lines: string[] = [];
	const typeNames: string[] = [];
	for (const id of sortedIds) {
		const entry = entriesById.get(id)!;
		const variantSuffix = aliases.get(id)!;
		typeNames.push(`${gName}${variantSuffix}`);
		lines.push(...renderVariantAlias(gName, entry, group, variantSuffix, invariants));
	}
	return { lines, typeNames };
}

function renderVariantAlias(gName: string, entry: Entry, group: Group, variantSuffix: string, invariants: InvariantTree): string[] {
	const typeName = `${gName}${variantSuffix}`;
	const payload = entry.data[group.discriminator];
	const stripped = stripInvariantsFromValue(payload, invariants);

	const isEmpty = !isJsonObject(stripped) || Object.keys(stripped).length === 0;
	if (isEmpty) {
		return [`export type ${typeName} = ${SIMPLIFY}<${gName}<"${entry.templateId}">>;`];
	}

	const literalLines = renderType(inferJsonType(stripped));
	return [`export type ${typeName} = ${SIMPLIFY}<${gName}<`, `\t"${entry.templateId}",`, ...indentLines(literalLines, "\t"), `>>;`];
}

export function emitMiscFile(bucketName: string, singletons: Group[]): string {
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

	const typeName = pascalCase(bucketName);
	// Global union of all singletons + stubs, for `MasterfileEntry` composition.
	if (named.length === 0) {
		lines.push(`export type Misc${typeName}MasterfileEntry = never;`);
	} else {
		lines.push(`export type Misc${typeName}MasterfileEntry =`);
		named.forEach(({ name }, i) => {
			const suffix = i === named.length - 1 ? ";" : "";
			lines.push(`\t| ${name}${suffix}`);
		});
	}
	lines.push(``);
	lines.push(`export type Misc${typeName}TemplateID = Misc${typeName}MasterfileEntry["templateId"];`);
	lines.push(``);

	return lines.join("\n");
}

function inferGroupPayloadType(group: Group): InferredType {
	return inferJsonTypes(group.entries.map((entry) => entry.data[group.discriminator]));
}

export function emitTypesFile(discriminators: string[]): string {
	const sorted = [...discriminators].sort();
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
	const invariants = detectInvariants(group);
	const xdataType = stripInvariantsFromWidened(widenType(inferGroupPayloadType(group)), invariants);

	const xdataName = `${gName}Data`;
	const discName = renderPropertyName(group.discriminator);
	const entryCount = group.entries.length;
	const entryWord = entryCount === 1 ? "entry" : "entries";
	const lines: string[] = [`// Generated from Pokémon GO masterfile — group "${group.discriminator}", ${entryCount} ${entryWord} (structural types).`, ``];

	lines.push(
		`export interface ${gName}<`,
		`\t${TEMPLATE_GENERIC} extends string = string,`,
		`\tTData extends ${xdataName} = ${xdataName},`,
		`> {`,
		`\ttemplateId: ${TEMPLATE_GENERIC};`,
		`\tdata: {`,
		`\t\ttemplateId: ${TEMPLATE_GENERIC};`,
	);

	if (invariants.size === 0) {
		lines.push(`\t\t${discName}: TData;`);
	} else {
		const invariantsLines = renderType(invariantsToInferredType(invariants));
		if (invariantsLines.length === 1) {
			lines.push(`\t\t${discName}: TData & ${invariantsLines[0]};`);
		} else {
			lines.push(`\t\t${discName}: TData & ${invariantsLines[0]}`, ...indentLines(invariantsLines.slice(1), "\t\t", ";"));
		}
	}

	lines.push(`\t};`, `}`, ``, ...renderXDataInterface(xdataName, xdataType), ``);
	return lines.join("\n");
}

function renderAllVariantAliases(group: Group): string[] {
	const gName = groupName(group.discriminator);
	const sortedIds = [...group.entries].map((e) => e.templateId).sort();
	const aliases = deriveGroupAliases(sortedIds, gName);
	const invariants = detectInvariants(group);
	const { lines, typeNames } = renderEntryVariants(group.entries, gName, group, aliases, invariants);
	lines.push(``, renderVariantBarrelType(gName, typeNames));
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

	const lines = emitFileHeader(`Generated from Pokémon GO masterfile — group "${group.discriminator}", ${entryCount} ${entryWord} (variant aliases).`, [
		`import type { ${SIMPLIFY} } from "../_utils";`,
		`import type { ${gName}, ${xdataName} } from "./index";`,
	]);
	lines.push(...renderAllVariantAliases(group), ``);
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

	const lines = emitFileHeader(`Generated from Pokémon GO masterfile — group "${group.discriminator}", split "${bucketName}", ${entryCount} ${entryWord}.`, [
		`import type { ${SIMPLIFY} } from "../../_utils";`,
		`import type { ${gName}, ${xdataName} } from "../types";`,
	]);

	const { lines: variantLines, typeNames } = renderEntryVariants(entries, gName, group, aliases, invariants);
	lines.push(...variantLines, ``, renderVariantBarrelType(`${gName}${aliasSuffix(bucketName, "")}`, typeNames), ``);
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
	const sortedDiscs = [...groupSplits.keys()].sort();
	const lines: string[] = [`// Generated from Pokémon GO masterfile — top-level entries barrel.`, ``];

	for (const disc of sortedDiscs) {
		lines.push(`import type { ${groupName(disc)}MasterfileEntry } from "./${kebabCase(disc)}/entries";`);
	}
	lines.push(``);

	for (const disc of sortedDiscs) {
		const kebab = kebabCase(disc);
		const path = groupSplits.get(disc) === "split" ? `./${kebab}/entries` : `./${kebab}/entries`;
		lines.push(`export type * from "${path}";`);
	}
	lines.push(``, ``, `export type MasterfileEntry =`);
	for (const disc of sortedDiscs) {
		lines.push(`\t| ${groupName(disc)}MasterfileEntry`);
	}
	lines.push(
		``,
		`export type MasterfileTemplateID = MasterfileEntry["templateId"];`,
		``,
		`export type MasterfileEntryByTemplateID<T extends MasterfileTemplateID> = Extract<MasterfileEntry, { templateId: T }>;`,
		``,
	);
	return lines.join("\n");
}

export function emitIndexFile() {
	return [`export type * from "./entries";`, `export type * from "./types";`].join("\n");
}
