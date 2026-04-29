import ts from "typescript";
import { AstFileBuilder, T } from "./builder.ts";
import {
	BARREL_FILE,
	BARREL_TYPE,
	ENTRIES_LOWER,
	ENTRY,
	ENTRY_LOWER,
	EXPORT,
	IMPORT,
	INTERFACE,
	SIMPLIFY,
	SINGLETONS,
	TEMPLATE_GENERIC,
	TYPE,
	TYPE_LOWER,
	TYPES,
	TYPES_LOWER,
	WIDEN,
} from "./constants.ts";
import type { Entry, Group } from "./group.ts";
import { isJsonObject } from "./helpers.ts";
import type { InferredType } from "./infer.ts";
import { inferJsonType, inferJsonTypes, widenType } from "./infer.ts";
import type { InvariantTree } from "./invariants.ts";
import { detectInvariants, invariantsToInferredType, stripInvariantsFromValue, stripInvariantsFromWidened } from "./invariants.ts";
import { aliasSuffix, deriveGroupAliases, groupName, kebabCase, pascalCase } from "./naming.ts";
import { indentLines, renderProperty, renderPropertyName, renderType, renderXDataInterface } from "./render-types.ts";

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
		return [`${EXPORT} ${TYPE_LOWER} ${typeName} = ${SIMPLIFY}<${gName}<"${entry.templateId}">>;`];
	}

	const literalLines = renderType(inferJsonType(stripped));
	return [`${EXPORT} ${TYPE_LOWER} ${typeName} = ${SIMPLIFY}<${gName}<`, `\t"${entry.templateId}",`, ...indentLines(literalLines, "\t"), `>>;`];
}

export function emitSingletonsFile(bucketName: string, singletons: Group[]): string {
	// Precompute names + stub flag so the sort comparator is cheap.
	const named = singletons.map((g) => {
		const entry = g.entries[0]!;
		const dataKeys = Object.keys(entry.data).filter((k) => k !== "templateId");
		const isStub = dataKeys.length === 0;
		const name = isStub ? aliasSuffix(entry.templateId, "") : groupName(g.discriminator);
		return { group: g, entry, name, isStub };
	});
	named.sort((a, b) => a.name.localeCompare(b.name));

	const lines: string[] = [`// Generated from Pokémon GO masterfile — ${SINGLETONS} ${ENTRIES_LOWER} (no shared discriminator).`, ``];
	for (const { group, entry, name, isStub } of named) {
		lines.push(`${EXPORT} ${INTERFACE} ${name} {`);
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
	// Global union of all singletons + stubs, for `${BARREL_TYPE}${ENTRY}` composition.
	if (named.length === 0) {
		lines.push(`${EXPORT} ${TYPE_LOWER} ${SINGLETONS}${typeName}${BARREL_TYPE}${ENTRY} = never;`);
	} else {
		lines.push(`${EXPORT} ${TYPE_LOWER} ${SINGLETONS}${typeName}${BARREL_TYPE}${ENTRY} =`);
		named.forEach(({ name }, i) => {
			const suffix = i === named.length - 1 ? ";" : "";
			lines.push(`\t| ${name}${suffix}`);
		});
	}
	lines.push(``);
	lines.push(`${EXPORT} ${TYPE_LOWER} ${SINGLETONS}${typeName}${TEMPLATE_GENERIC} = ${SINGLETONS}${typeName}${BARREL_TYPE}${ENTRY}["templateId"];`);
	lines.push(``);

	return lines.join("\n");
}

export function emitSingletonsTypeFile(singletons: Group[]): string {
	// Precompute names + stub flag so the sort comparator is cheap.
	const named = singletons.map((g) => {
		const entry = g.entries[0]!;
		const dataKeys = Object.keys(entry.data).filter((k) => k !== "templateId");
		const isStub = dataKeys.length === 0;
		const name = isStub ? aliasSuffix(entry.templateId, "") : groupName(g.discriminator);
		return { group: g, entry, name, isStub };
	});
	named.sort((a, b) => a.name.localeCompare(b.name));

	const lines: string[] = [
		`// Generated from Pokémon GO masterfile — ${SINGLETONS} ${TYPES} (no shared discriminator).`,
		``,
		`${IMPORT} ${TYPE_LOWER} {`,
		named.map((s) => s.name).join(",\n"),
		`} from "./${ENTRIES_LOWER}"`,
		``,
		`${IMPORT} ${TYPE_LOWER} { ${WIDEN} } from "../_utils";`,
		"",
		...named.map((s) => `${EXPORT} ${TYPE_LOWER} ${s.name}${TYPE} = ${WIDEN}<${s.name}>;`),
		"",
	];

	// Global union of all singletons + stubs, for `${BARREL_TYPE}${ENTRY}` composition.
	if (named.length === 0) {
		lines.push(`${EXPORT} ${TYPE_LOWER} ${SINGLETONS} = never;`);
		lines.push(`${EXPORT} ${TYPE_LOWER} ${SINGLETONS}${TYPE} = never;`);
	} else {
		lines.push(`${EXPORT} ${TYPE_LOWER} ${SINGLETONS} =`);
		named.forEach(({ name }, i) => {
			const suffix = i === named.length - 1 ? ";" : "";
			lines.push(`\t| ${name}${TYPE}${suffix}`);
		});
	}
	lines.push(``);
	lines.push(`/** Same as @see {${SINGLETONS}} */`);
	lines.push(`${EXPORT} ${TYPE_LOWER} ${SINGLETONS}${TYPE} = ${SINGLETONS};`);
	lines.push(``);

	return lines.join("\n");
}

function inferGroupPayloadType(group: Group): InferredType {
	return inferJsonTypes(group.entries.map((entry) => entry.data[group.discriminator]));
}

export function emitTypesFile(discriminators: string[]): string {
	const sorted = discriminators.toSorted();
	const file = new AstFileBuilder().header("Generated from Pokémon GO masterfile — index of all groups.");

	for (const disc of sorted) {
		const name = groupName(disc);
		file.importNamed(`./${kebabCase(disc)}/${TYPES_LOWER}`, [name, `${name}${TYPE}`], true);
	}

	for (const disc of sorted) {
		file.exportTypeStar(`./${kebabCase(disc)}/${TYPES_LOWER}`);
	}

	file.exportTypeAlias(`${BARREL_TYPE}${ENTRY}${TYPE}`, ts.factory.createUnionTypeNode(sorted.map((disc) => T.ref(groupName(disc)))));
	file.exportTypeAlias(`${BARREL_TYPE}${TYPE}`, ts.factory.createUnionTypeNode(sorted.map((disc) => T.ref(`${groupName(disc)}${TYPE}`))));

	return file.render();
}

export function emitGroupTypes(group: Group): string {
	const gName = groupName(group.discriminator);
	const invariants = detectInvariants(group);
	const xdataType = stripInvariantsFromWidened(widenType(inferGroupPayloadType(group)), invariants);

	const xdataName = `${gName}Data`;
	const discName = renderPropertyName(group.discriminator);
	const entryCount = group.entries.length;
	const entryWord = entryCount === 1 ? ENTRY_LOWER : ENTRIES_LOWER;
	const lines: string[] = [
		`// Generated from Pokémon GO masterfile — group "${group.discriminator}", ${entryCount} ${entryWord} (structural types).`,
		``,
		`${IMPORT} ${TYPE_LOWER} { ${WIDEN} } from "../_utils"`,
		``,
	];

	lines.push(
		`${EXPORT} ${INTERFACE} ${gName}<`,
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

	lines.push(`\t};`, `}`);
	lines.push(`${EXPORT} ${TYPE_LOWER} ${gName}${TYPE} = ${WIDEN}<${gName}>;`, ``);
	lines.push(...renderXDataInterface(xdataName, xdataType), ``);
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
	return `${EXPORT} ${TYPE_LOWER} ${typePrefix}${BARREL_TYPE}${ENTRY} = ${typeNames.join("| ")}`;
}

export function emitEntriesFlat(group: Group): string {
	const gName = groupName(group.discriminator);
	const xdataName = `${gName}Data`;
	const entryCount = group.entries.length;
	const entryWord = entryCount === 1 ? ENTRY_LOWER : ENTRIES_LOWER;

	const lines = emitFileHeader(`Generated from Pokémon GO masterfile — group "${group.discriminator}", ${entryCount} ${entryWord} (variant aliases).`, [
		`${IMPORT} ${TYPE_LOWER} { ${SIMPLIFY} } from "../_utils";`,
		`${IMPORT} ${TYPE_LOWER} { ${gName}, ${xdataName} } from "./${BARREL_FILE}";`,
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
	const entryWord = entryCount === 1 ? ENTRY_LOWER : ENTRIES_LOWER;

	const lines = emitFileHeader(`Generated from Pokémon GO masterfile — group "${group.discriminator}", split "${bucketName}", ${entryCount} ${entryWord}.`, [
		`${IMPORT} ${TYPE_LOWER} { ${SIMPLIFY} } from "../../_utils";`,
		`${IMPORT} ${TYPE_LOWER} { ${gName}, ${xdataName} } from "../${TYPES_LOWER}";`,
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
		...sorted.map((e) => `${IMPORT} ${TYPE_LOWER} { ${typeName}${pascalCase(e)}${BARREL_TYPE}${ENTRY} } from './${e}';`),
	];
	for (const name of sorted) {
		lines.push(`${EXPORT} ${TYPE_LOWER} * from "./${name}";`);
	}
	lines.push(``);

	lines.push(
		`${EXPORT} ${TYPE_LOWER} ${typeName}${BARREL_TYPE}${ENTRY} = ${sorted.map((f) => `${typeName}${pascalCase(f)}${BARREL_TYPE}${ENTRY}`).join("| ")}`,
	);
	lines.push(``);
	lines.push(`${EXPORT} ${TYPE_LOWER} ${typeName}${TEMPLATE_GENERIC} = ${typeName}${BARREL_TYPE}${ENTRY}["templateId"];`);

	return lines.join("\n");
}

export function emitTopLevelVariants(groupSplits: Map<string, "split" | "flat">): string {
	const sortedDiscs = [...groupSplits.keys()].sort();
	const lines: string[] = [`// Generated from Pokémon GO masterfile — top-level entries barrel.`, ``];

	for (const disc of sortedDiscs) {
		lines.push(`${IMPORT} ${TYPE_LOWER} { ${groupName(disc)}${BARREL_TYPE}${ENTRY} } from "./${kebabCase(disc)}/${ENTRIES_LOWER}";`);
	}
	lines.push(``);

	for (const disc of sortedDiscs) {
		const kebab = kebabCase(disc);
		const path = groupSplits.get(disc) === "split" ? `./${kebab}/${ENTRIES_LOWER}` : `./${kebab}/${ENTRIES_LOWER}`;
		lines.push(`${EXPORT} ${TYPE_LOWER} * from "${path}";`);
	}
	lines.push(``, ``, `${EXPORT} ${TYPE_LOWER} ${BARREL_TYPE}${ENTRY} =`);
	for (const disc of sortedDiscs) {
		lines.push(`\t| ${groupName(disc)}${BARREL_TYPE}${ENTRY}`);
	}
	lines.push(
		``,
		`${EXPORT} ${TYPE_LOWER} ${BARREL_TYPE}${TEMPLATE_GENERIC} = ${BARREL_TYPE}${ENTRY}["templateId"];`,
		``,
		`${EXPORT} ${TYPE_LOWER} ${BARREL_TYPE}${ENTRY}By${TEMPLATE_GENERIC}<T extends ${BARREL_TYPE}${TEMPLATE_GENERIC}> = Extract<${BARREL_TYPE}${ENTRY}, { templateId: T }>;`,
		``,
	);
	return lines.join("\n");
}

export function emitIndexFile() {
	return [`${EXPORT} ${TYPE_LOWER} * from "./${ENTRIES_LOWER}";`, `${EXPORT} ${TYPE_LOWER} * from "./${TYPES_LOWER}";`].join("\n");
}
