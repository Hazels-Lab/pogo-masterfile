import ts from "typescript";
import type { Entry, Group } from "../group.ts";
import { isJsonObject } from "../helpers.ts";
import type { InferredType } from "../infer.ts";
import { inferJsonType, inferJsonTypes, widenType } from "../infer.ts";
import type { InvariantTree } from "../invariants.ts";
import { detectInvariants, invariantsToInferredType, stripInvariantsFromValue, stripInvariantsFromWidened } from "../invariants.ts";
import { aliasSuffix, deriveGroupAliases, groupName, kebabCase, pascalCase } from "../naming.ts";
import type { PromotionContext, PromotionRegistry } from "../promoted-unions.ts";
import { AstFileBuilder, inferredToType, N, T } from "./builder.ts";
import {
	BARREL_FILE,
	BARREL_TYPE,
	ENTRIES_LOWER,
	ENTRY,
	ENTRY_LOWER,
	SIMPLIFY,
	SINGLETONS,
	TEMPLATE_GENERIC,
	TYPE,
	TYPES,
	TYPES_LOWER,
	WIDEN,
} from "./constants.ts";

// Build `${gName}${suffix}` variant alias declarations for a list of entries (sorted by templateId).
// Returns the AST statements and the type names emitted, for use in barrel unions.
function entryVariantStatements(
	entries: Entry[],
	gName: string,
	group: Group,
	aliases: Map<string, string>,
	invariants: InvariantTree,
): { statements: ts.Statement[]; typeNames: string[] } {
	const sortedIds = [...entries].map((e) => e.templateId).sort();
	const entriesById = new Map(entries.map((e) => [e.templateId, e]));
	const statements: ts.Statement[] = [];
	const typeNames: string[] = [];
	for (const id of sortedIds) {
		const entry = entriesById.get(id)!;
		const variantSuffix = aliases.get(id)!;
		const typeName = `${gName}${variantSuffix}`;
		typeNames.push(typeName);
		statements.push(variantAliasDeclaration(typeName, gName, entry, group, invariants));
	}
	return { statements, typeNames };
}

// `export type Name = S<G<"id">>` for empty payloads, `S<G<"id", { ...payload }>>` otherwise.
function variantAliasDeclaration(typeName: string, gName: string, entry: Entry, group: Group, invariants: InvariantTree): ts.TypeAliasDeclaration {
	const payload = entry.data[group.discriminator];
	const stripped = stripInvariantsFromValue(payload, invariants);
	const isEmpty = !isJsonObject(stripped) || Object.keys(stripped).length === 0;

	const groupArgs: ts.TypeNode[] = [T.literal(entry.templateId)];
	if (!isEmpty) groupArgs.push(inferredToType(inferJsonType(stripped)));

	return ts.factory.createTypeAliasDeclaration(
		[ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
		ts.factory.createIdentifier(typeName),
		undefined,
		T.ref(SIMPLIFY, [T.ref(gName, groupArgs)]),
	);
}

export function emitSingletonsFile(bucketName: string, singletons: Group[]): string {
	const named = singletons.map((g) => {
		const entry = g.entries[0]!;
		const dataKeys = Object.keys(entry.data).filter((k) => k !== "templateId");
		const isStub = dataKeys.length === 0;
		const name = isStub ? aliasSuffix(entry.templateId, "") : groupName(g.discriminator);
		return { group: g, entry, name, isStub };
	});
	named.sort((a, b) => a.name.localeCompare(b.name));

	const file = new AstFileBuilder().header(`Generated from Pokémon GO masterfile — ${SINGLETONS} ${ENTRIES_LOWER} (no shared discriminator).`);

	for (const { group, entry, name, isStub } of named) {
		const dataMembers: { name: string; type: ts.TypeNode; optional?: boolean }[] = [{ name: "templateId", type: T.literal(entry.templateId) }];
		if (!isStub) {
			const payloadType = inferJsonType(entry.data[group.discriminator]);
			dataMembers.push({ name: group.discriminator, type: inferredToType(payloadType) });
		}
		file.exportInterface(name, [N.propSignature("templateId", T.literal(entry.templateId)), N.propSignature("data", T.objectLiteral(dataMembers))]);
		file.blank();
	}

	const typeName = pascalCase(bucketName);
	const unionTypeName = `${SINGLETONS}${typeName}${BARREL_TYPE}${ENTRY}`;
	if (named.length === 0) {
		file.exportTypeAlias(unionTypeName, T.never());
	} else {
		file.exportTypeAlias(unionTypeName, T.union(...named.map(({ name }) => T.ref(name))));
	}
	file.blank();
	file.exportTypeAlias(`${SINGLETONS}${typeName}${TEMPLATE_GENERIC}`, T.indexedAccess(T.ref(unionTypeName), T.literal("templateId")));

	return file.render();
}

export function emitSingletonsTypeFile(singletons: Group[]): string {
	const named = singletons.map((g) => {
		const entry = g.entries[0]!;
		const dataKeys = Object.keys(entry.data).filter((k) => k !== "templateId");
		const isStub = dataKeys.length === 0;
		const name = isStub ? aliasSuffix(entry.templateId, "") : groupName(g.discriminator);
		return { group: g, entry, name, isStub };
	});
	named.sort((a, b) => a.name.localeCompare(b.name));

	const file = new AstFileBuilder().header(`Generated from Pokémon GO masterfile — ${SINGLETONS} ${TYPES} (no shared discriminator).`);

	if (named.length > 0) {
		file.importNamed(
			`./${ENTRIES_LOWER}`,
			named.map((s) => s.name),
			true,
		);
	}
	file.importNamed("../_utils", [WIDEN], true);
	file.blank();

	for (const { name } of named) {
		file.exportTypeAlias(`${name}${TYPE}`, T.ref(WIDEN, [T.ref(name)]));
	}
	file.blank();

	if (named.length === 0) {
		file.exportTypeAlias(SINGLETONS, T.never());
		file.exportTypeAlias(`${SINGLETONS}${TYPE}`, T.never());
	} else {
		file.exportTypeAlias(SINGLETONS, T.union(...named.map(({ name }) => T.ref(`${name}${TYPE}`))));
		file.blank();
		file.raw(`/** Same as @see {${SINGLETONS}} */`);
		file.exportTypeAlias(`${SINGLETONS}${TYPE}`, T.ref(SINGLETONS));
	}

	return file.render();
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
	file.blank();

	for (const disc of sorted) {
		file.exportTypeStar(`./${kebabCase(disc)}/${TYPES_LOWER}`);
	}
	file.blank();

	file.exportTypeAlias(`${BARREL_TYPE}${ENTRY}${TYPE}`, T.union(...sorted.map((disc) => T.ref(groupName(disc)))));
	file.blank();
	file.exportTypeAlias(`${BARREL_TYPE}${TYPE}`, T.union(...sorted.map((disc) => T.ref(`${groupName(disc)}${TYPE}`))));

	return file.render();
}

export function emitGroupTypes(group: Group, registry: PromotionRegistry = []): string {
	const gName = groupName(group.discriminator);
	const invariants = detectInvariants(group);
	const xdataType = stripInvariantsFromWidened(widenType(inferGroupPayloadType(group)), invariants);
	const xdataName = `${gName}Data`;
	const entryCount = group.entries.length;
	const entryWord = entryCount === 1 ? ENTRY_LOWER : ENTRIES_LOWER;

	const ctx: PromotionContext = { registry, currentGroup: group, imports: new Map() };

	// Compute body AST nodes first; this populates ctx.imports as a side effect.
	const dataPropType: ts.TypeNode =
		invariants.size > 0 ? T.intersection(T.ref("TData"), inferredToType(invariantsToInferredType(invariants), ctx)) : T.ref("TData");

	const xdataProperties = xdataType.kind === "object" ? xdataType.properties : [];
	const xdataMembers = xdataProperties.map((p) => N.propSignature(p.name, inferredToType(p.type, ctx), p.optional));

	const file = new AstFileBuilder()
		.header(`Generated from Pokémon GO masterfile — group "${group.discriminator}", ${entryCount} ${entryWord} (structural types).`)
		.importNamed("../_utils", [WIDEN], true);

	// Cross-group imports for promoted ${gName}TemplateID references; resolves to the
	// sibling group's entries.ts (flat) or entries/index.ts (split).
	const sortedImports = [...ctx.imports.entries()].filter(([disc]) => disc !== group.discriminator).sort(([a], [b]) => a.localeCompare(b));
	for (const [disc, names] of sortedImports) {
		file.importNamed(`../${kebabCase(disc)}/${ENTRIES_LOWER}`, [...names].sort(), true);
	}
	file.blank();

	file.exportInterface(
		gName,
		[
			N.propSignature("templateId", T.ref(TEMPLATE_GENERIC)),
			N.propSignature(
				"data",
				T.objectLiteral([
					{ name: "templateId", type: T.ref(TEMPLATE_GENERIC) },
					{ name: group.discriminator, type: dataPropType },
				]),
			),
		],
		[
			{ name: TEMPLATE_GENERIC, constraint: T.string(), default: T.string() },
			{ name: "TData", constraint: T.ref(xdataName), default: T.ref(xdataName) },
		],
	);

	file.exportTypeAlias(`${gName}${TYPE}`, T.ref(WIDEN, [T.ref(gName)]));
	file.blank();

	file.exportInterface(xdataName, xdataMembers);

	return file.render();
}

export function emitEntriesFlat(group: Group): string {
	const gName = groupName(group.discriminator);
	const xdataName = `${gName}Data`;
	const entryCount = group.entries.length;
	const entryWord = entryCount === 1 ? ENTRY_LOWER : ENTRIES_LOWER;

	const file = new AstFileBuilder()
		.header(`Generated from Pokémon GO masterfile — group "${group.discriminator}", ${entryCount} ${entryWord} (variant aliases).`)
		.importNamed("../_utils", [SIMPLIFY], true)
		.importNamed(`./${BARREL_FILE}`, [gName, xdataName], true)
		.blank();

	const sortedIds = [...group.entries].map((e) => e.templateId).sort();
	const aliases = deriveGroupAliases(sortedIds, gName);
	const invariants = detectInvariants(group);
	const { statements, typeNames } = entryVariantStatements(group.entries, gName, group, aliases, invariants);
	for (const stmt of statements) file.addStatement(stmt);
	file.blank();

	const unionName = `${gName}${BARREL_TYPE}${ENTRY}`;
	file.exportTypeAlias(unionName, T.union(...typeNames.map((n) => T.ref(n))));
	file.blank();
	file.exportTypeAlias(`${gName}${TEMPLATE_GENERIC}`, T.indexedAccess(T.ref(unionName), T.literal("templateId")));

	return file.render();
}

// `nestedPath` records this file's directory location relative to entries/.
//   - []                    → file lives at entries/{bucketName}.ts (flat split)
//   - ["display-string-id"] → file lives at entries/display-string-id/{bucketName}.ts
//   - ["a", "b"]            → file lives at entries/a/b/{bucketName}.ts
// Affects two things:
//   1. Import paths to ../types and ../../_utils get an extra `../` per nesting level.
//   2. The exported barrel-type name is qualified by the path so leaves at different
//      locations don't collide (entries/hat/0.ts vs entries/pants/0.ts both export "0").
export function emitEntryFile(group: Group, bucketName: string, entries: Entry[], nestedPath: string[] = []): string {
	const gName = groupName(group.discriminator);
	const xdataName = `${gName}Data`;
	const sortedIds = [...group.entries].map((e) => e.templateId).sort();
	const aliases = deriveGroupAliases(sortedIds, gName);
	const invariants = detectInvariants(group);
	const entryCount = entries.length;
	const entryWord = entryCount === 1 ? ENTRY_LOWER : ENTRIES_LOWER;

	const upDirs = (n: number) => "../".repeat(n);
	const utilsPath = `${upDirs(nestedPath.length + 2)}_utils`;
	const typesPath = `${upDirs(nestedPath.length + 1)}${TYPES_LOWER}`;
	const parentTypeName = `${gName}${nestedPath.map(pascalCase).join("")}`;
	const splitLabel = nestedPath.length > 0 ? `${nestedPath.join("/")}/${bucketName}` : bucketName;

	const file = new AstFileBuilder()
		.header(`Generated from Pokémon GO masterfile — group "${group.discriminator}", split "${splitLabel}", ${entryCount} ${entryWord}.`)
		.importNamed(utilsPath, [SIMPLIFY], true)
		.importNamed(typesPath, [gName, xdataName], true)
		.blank();

	const { statements, typeNames } = entryVariantStatements(entries, gName, group, aliases, invariants);
	for (const stmt of statements) file.addStatement(stmt);
	file.blank();

	file.exportTypeAlias(`${parentTypeName}${aliasSuffix(bucketName, "")}${BARREL_TYPE}${ENTRY}`, T.union(...typeNames.map((n) => T.ref(n))));

	return file.render();
}

// Same `nestedPath` semantics as emitEntryFile: empty for the top-level entries
// barrel; non-empty for sub-barrels. The composed typeName ensures children of
// each level export uniquely-named barrel types so parents can union them.
//
// Note: TypeScript resolves `./${child}` as either `./child.ts` or `./child/index.ts`
// transparently, so this barrel doesn't need to know whether each child is a leaf
// file or a subdirectory — the imports and re-exports work identically.
export function emitEntriesBarrel(discriminator: string, fileNames: string[], nestedPath: string[] = []): string {
	const typeName = `${pascalCase(discriminator)}${nestedPath.map(pascalCase).join("")}`;
	const sorted = [...fileNames].sort();
	const label = nestedPath.length > 0 ? `${discriminator} ${nestedPath.join("/")}` : discriminator;

	const file = new AstFileBuilder().header(`Generated from Pokémon GO masterfile — group "${label}" entries barrel.`);

	for (const e of sorted) {
		file.importNamed(`./${e}`, [`${typeName}${pascalCase(e)}${BARREL_TYPE}${ENTRY}`], true);
	}
	file.blank();

	for (const name of sorted) {
		file.exportTypeStar(`./${name}`);
	}
	file.blank();

	file.exportTypeAlias(
		`${typeName}${BARREL_TYPE}${ENTRY}`,
		T.union(...sorted.map((fileName) => T.ref(`${typeName}${pascalCase(fileName)}${BARREL_TYPE}${ENTRY}`))),
	);
	file.blank();
	file.exportTypeAlias(`${typeName}${TEMPLATE_GENERIC}`, T.indexedAccess(T.ref(`${typeName}${BARREL_TYPE}${ENTRY}`), T.literal("templateId")));

	return file.render();
}

export function emitTopLevelVariants(groupSplits: Map<string, "split" | "flat">): string {
	const sortedDiscs = [...groupSplits.keys()].sort();
	const file = new AstFileBuilder().header("Generated from Pokémon GO masterfile — top-level entries barrel.");

	for (const disc of sortedDiscs) {
		file.importNamed(`./${kebabCase(disc)}/${ENTRIES_LOWER}`, [`${groupName(disc)}${BARREL_TYPE}${ENTRY}`], true);
	}
	file.blank();

	for (const disc of sortedDiscs) {
		file.exportTypeStar(`./${kebabCase(disc)}/${ENTRIES_LOWER}`);
	}
	file.blank();

	file.exportTypeAlias(`${BARREL_TYPE}${ENTRY}`, T.union(...sortedDiscs.map((disc) => T.ref(`${groupName(disc)}${BARREL_TYPE}${ENTRY}`))));
	file.blank();
	file.exportTypeAlias(`${BARREL_TYPE}${TEMPLATE_GENERIC}`, T.indexedAccess(T.ref(`${BARREL_TYPE}${ENTRY}`), T.literal("templateId")));
	file.blank();
	file.exportTypeAlias(
		`${BARREL_TYPE}${ENTRY}By${TEMPLATE_GENERIC}`,
		T.ref("Extract", [T.ref(`${BARREL_TYPE}${ENTRY}`), T.objectLiteralInline([{ name: "templateId", type: T.ref("T") }])]),
		[{ name: "T", constraint: T.ref(`${BARREL_TYPE}${TEMPLATE_GENERIC}`) }],
	);

	return file.render();
}

export function emitIndexFile() {
	return new AstFileBuilder().exportTypeStar(`./${ENTRIES_LOWER}`).exportTypeStar(`./${TYPES_LOWER}`).render();
}

// ── Lookup-table emitters ───────────────────────────────────────────────────
//
// Optional opt-in subpath: `pogo-masterfile-types/lookup-table` (root) and
// `pogo-masterfile-types/<group>/lookup-table` (per-group). Maps each
// templateId to its specific literal-typed entry interface — useful for
// consumers that want O(1) typed lookups without re-deriving them.
//
// Deliberately NOT re-exported from the main package barrel (`index.d.ts`):
// the root lookup table is expensive to materialize (one big interface with
// every templateId in the masterfile) and shouldn't be paid for by every
// consumer.
//
// String templates (rather than the AST builder) — these files are flat and
// regular enough that templating wins on readability.

function isValidIdentifier(s: string): boolean {
	return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(s);
}

export function emitGroupLookupTable(group: Group): string {
	const gName = groupName(group.discriminator);
	const sortedIds = [...group.entries].map((e) => e.templateId).sort();
	const aliases = deriveGroupAliases(sortedIds, gName);

	const importedTypes = new Set<string>();
	const lines: string[] = [];
	for (const id of sortedIds) {
		const suffix = aliases.get(id);
		if (suffix === undefined) {
			throw new Error(`emitGroupLookupTable: no alias derived for templateId "${id}" in group "${group.discriminator}"`);
		}
		const typeName = `${gName}${suffix}`;
		importedTypes.add(typeName);
		const key = isValidIdentifier(id) ? id : `"${id}"`;
		lines.push(`\t${key}: ${typeName};`);
	}

	const sortedImports = [...importedTypes].sort();

	return `// Generated from Pokémon GO masterfile — "${group.discriminator}" lookup table.

import type {
${sortedImports.map((n) => `\t${n},`).join("\n")}
} from "./${ENTRIES_LOWER}";

export interface ${gName}Lookup {
${lines.join("\n")}
}
`;
}

export function emitSingletonsLookupTable(singletons: Group[]): string {
	const importedTypes = new Set<string>();
	const entries: { templateId: string; typeName: string }[] = [];

	for (const g of singletons) {
		const entry = g.entries[0]!;
		const dataKeys = Object.keys(entry.data).filter((k) => k !== "templateId");
		const isStub = dataKeys.length === 0;
		const typeName = isStub ? aliasSuffix(entry.templateId, "") : groupName(g.discriminator);
		importedTypes.add(typeName);
		entries.push({ templateId: entry.templateId, typeName });
	}

	entries.sort((a, b) => a.templateId.localeCompare(b.templateId));

	const lines = entries.map(({ templateId, typeName }) => {
		const key = isValidIdentifier(templateId) ? templateId : `"${templateId}"`;
		return `\t${key}: ${typeName};`;
	});

	const sortedImports = [...importedTypes].sort();

	return `// Generated from Pokémon GO masterfile — singletons lookup table.

import type {
${sortedImports.map((n) => `\t${n},`).join("\n")}
} from "./${ENTRIES_LOWER}";

export interface ${SINGLETONS}Lookup {
${lines.join("\n")}
}
`;
}

export function emitRootLookupTable(multiEntry: Group[], hasSingletons: boolean): string {
	const sortedMulti = [...multiEntry].sort((a, b) => a.discriminator.localeCompare(b.discriminator));
	const groupInfos = sortedMulti.map((g) => ({
		discriminator: g.discriminator,
		gName: groupName(g.discriminator),
		kebab: kebabCase(g.discriminator),
	}));

	const groupAliases: string[] = [];
	for (const info of groupInfos) {
		groupAliases.push(`${info.gName}${BARREL_TYPE}${ENTRY}`, `${info.gName}${TEMPLATE_GENERIC}`);
	}
	if (hasSingletons) {
		groupAliases.push(`${SINGLETONS}${BARREL_TYPE}${ENTRY}`, `${SINGLETONS}${TEMPLATE_GENERIC}`);
	}
	groupAliases.sort();

	const lookupImportLines: string[] = [];
	const lookupReExportLines: string[] = [];
	const groupNameLiterals: string[] = [];
	const entriesByGroupLines: string[] = [];
	const templateIdsByGroupLines: string[] = [];
	const lookupByGroupLines: string[] = [];
	const lookupNames: string[] = [];

	for (const info of groupInfos) {
		lookupImportLines.push(`import type { ${info.gName}Lookup } from "./${info.kebab}/lookup-table";`);
		lookupReExportLines.push(`export type { ${info.gName}Lookup } from "./${info.kebab}/lookup-table";`);
		groupNameLiterals.push(`"${info.discriminator}"`);
		entriesByGroupLines.push(`\t${info.discriminator}: ${info.gName}${BARREL_TYPE}${ENTRY};`);
		templateIdsByGroupLines.push(`\t${info.discriminator}: ${info.gName}${TEMPLATE_GENERIC};`);
		lookupByGroupLines.push(`\t${info.discriminator}: ${info.gName}Lookup;`);
		lookupNames.push(`${info.gName}Lookup`);
	}

	if (hasSingletons) {
		const singletonsKebab = SINGLETONS.toLowerCase();
		lookupImportLines.push(`import type { ${SINGLETONS}Lookup } from "./${singletonsKebab}/lookup-table";`);
		lookupReExportLines.push(`export type { ${SINGLETONS}Lookup } from "./${singletonsKebab}/lookup-table";`);
		groupNameLiterals.push(`"${singletonsKebab}"`);
		entriesByGroupLines.push(`\t${singletonsKebab}: ${SINGLETONS}${BARREL_TYPE}${ENTRY};`);
		templateIdsByGroupLines.push(`\t${singletonsKebab}: ${SINGLETONS}${TEMPLATE_GENERIC};`);
		lookupByGroupLines.push(`\t${singletonsKebab}: ${SINGLETONS}Lookup;`);
		lookupNames.push(`${SINGLETONS}Lookup`);
	}

	return `// Generated from Pokémon GO masterfile — root lookup table.
//
// Composed via interface inheritance from each group's lookup-table file.
// Materialized shape is identical to a single big interface, but the source
// is split per-group so the editor can lazily load the slice relevant to the
// current cursor position.

import type {
${groupAliases.map((n) => `\t${n},`).join("\n")}
} from "./${ENTRIES_LOWER}";
${lookupImportLines.join("\n")}

${lookupReExportLines.join("\n")}

export type GroupName = ${groupNameLiterals.join(" | ")};

// LookupByGroup maps each group discriminator to its narrow per-group Lookup
// interface. Indexed access (\`LookupByGroup[G][T]\`) gives a literal-narrow
// entry type without forcing TS to materialize the full ${ENTRY}By${TEMPLATE_GENERIC}
// (~18k keys) — only the relevant per-group lookup is resolved.
export interface LookupByGroup {
${lookupByGroupLines.join("\n")}
}

export interface EntriesByGroup {
${entriesByGroupLines.join("\n")}
}

export interface TemplateIDsByGroup {
${templateIdsByGroupLines.join("\n")}
}

// Composed via interface inheritance from every per-group Lookup. Expensive
// to materialize (~18k keys) — only opt in if you need cross-group literal
// narrowing. Most consumers should reach for LookupByGroup[G] or per-group
// Lookup interfaces instead.
export interface ${ENTRY}By${TEMPLATE_GENERIC} extends
${lookupNames.map((n) => `\t${n}`).join(",\n")} {}
`;
}
