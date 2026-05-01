import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Group } from "../group.ts";
import { isStubGroup } from "../group.ts";
import type { InferredType, ObjectType } from "../infer.ts";
import { widenedPayloadObject } from "../infer.ts";
import { deriveTemplateIdVariants, pascalCase } from "../naming.ts";
import { emitNamedStruct as poolEmitNamedStruct, emitOrReuseStruct as poolEmitOrReuseStruct, type StructBodyFn, type StructPoolBase } from "../struct-pool.ts";

// Path resolution for the masterfile.go.tmpl template lives next to this file
// at templates/masterfile.go.tmpl. `import.meta.dir` resolves to src/go at
// runtime so the template path stays correct regardless of cwd.
const MASTERFILE_TEMPLATE_PATH = join(import.meta.dir, "templates", "masterfile.go.tmpl");

// Go's encoding/json supports fixed-size arrays of any length, but very long
// fixed arrays in source read poorly. Above this we fall back to slices.
const MAX_FIXED_ARRAY_LEN = 32;

// Go pool extends the base with `usesRawJSON` — flagged when emit produces
// any field type from `encoding/json` (json.RawMessage), so the file can add
// the import only when needed. `baseName` is the current top-level struct
// name used as a prefix for nested struct names (Go's flat package namespace
// requires globally-unique names; we prefix to disambiguate). It's threaded
// on the pool rather than as a function parameter so the shared `structBody`
// signature can match the Rust version. The shape/name dedup machinery
// itself lives in `../struct-pool.ts`.
interface StructPool extends StructPoolBase {
	usesRawJSON: boolean;
	baseName: string;
}

function newPool(): StructPool {
	return { byShape: new Map(), byName: new Set(), deferred: [], usesRawJSON: false, baseName: "" };
}

// A handful of Go field types live in the `encoding/json` package. When emit
// produces one, flag the file's pool so we know to add the import.
function markRawJSON(pool: StructPool): void {
	pool.usesRawJSON = true;
}

// Convert a JSON-payload InferredType into a Go type expression. The pool
// carries the enclosing top-level struct's name in `pool.baseName`; nested
// object types use it as a prefix to keep names unique within the package's
// flat namespace (unlike Rust where each module is its own namespace).
function goType(t: InferredType, fieldName: string, pool: StructPool): string {
	switch (t.kind) {
		case "string":
		case "templateIdReference":
		case "templateIdSlice":
			return "string";
		case "number":
			return t.numericKind === "uint" ? "uint64" : t.numericKind === "int" ? "int64" : "float64";
		case "boolean":
			return "bool";
		case "null":
			markRawJSON(pool);
			return "json.RawMessage";
		case "array":
			return `[]${goType(t.element, fieldName, pool)}`;
		case "tuple": {
			if (t.items.length === 0) return "[]any";
			const itemTypes = t.items.map((item) => goType(item, fieldName, pool));
			const allSame = itemTypes.every((ty) => ty === itemTypes[0]);
			if (allSame) {
				return t.items.length <= MAX_FIXED_ARRAY_LEN ? `[${t.items.length}]${itemTypes[0]}` : `[]${itemTypes[0]}`;
			}
			// Heterogeneous tuple — Go has no anonymous tuples. The closest fit
			// is `[]any` (consumer dispatches per position) or json.RawMessage
			// (consumer parses). `[]any` keeps the array shape obvious.
			return "[]any";
		}
		case "object":
			return emitOrReuseStruct(`${pool.baseName}${pascalCase(fieldName)}`, t, pool);
		case "union": {
			// T | null collapses to *T (Go's standard nil-or-T idiom).
			// Multi-variant unions fall back to json.RawMessage — Go doesn't
			// have anonymous sum types, and emitting per-field tagged-union
			// structs is heavy boilerplate for the few cases that hit this.
			const nullVariant = t.variants.find((v) => v.kind === "null");
			const nonNull = t.variants.filter((v) => v.kind !== "null");
			if (nonNull.length === 0) {
				markRawJSON(pool);
				return "json.RawMessage";
			}
			if (nonNull.length === 1) {
				const first = nonNull[0];
				if (!first) {
					markRawJSON(pool);
					return "json.RawMessage";
				}
				const inner = goType(first, fieldName, pool);
				if (!nullVariant) return inner;
				return pointerize(inner);
			}
			markRawJSON(pool);
			return "json.RawMessage";
		}
	}
}

// Wrap a Go type in `*` to make it a pointer, unless it's already pointerable
// in its own zero state (slices, maps, interfaces, json.RawMessage). Idiomatic
// Go uses pointer for nullable primitives/structs; nil is the absent indicator
// for slice/map/interface zero values, so they don't need a pointer wrapper.
function pointerize(typeExpr: string): string {
	if (typeExpr.startsWith("[]") || typeExpr.startsWith("map[")) return typeExpr;
	if (typeExpr === "json.RawMessage" || typeExpr === "any") return typeExpr;
	if (typeExpr.startsWith("*")) return typeExpr;
	return `*${typeExpr}`;
}

// Optional fields wrap their type in *T (or stay as-is for slice/map types
// whose nil already signals absence) and pick up an `omitempty` JSON tag.
function fieldType(typeExpr: string, optional: boolean): string {
	if (!optional) return typeExpr;
	if (typeExpr.startsWith("[]") || typeExpr.startsWith("map[")) return typeExpr;
	if (typeExpr === "json.RawMessage" || typeExpr === "any") return typeExpr;
	if (typeExpr.startsWith("*")) return typeExpr;
	return `*${typeExpr}`;
}

function jsonTag(jsonName: string, optional: boolean): string {
	return optional ? `\`json:"${jsonName},omitempty"\`` : `\`json:"${jsonName}"\``;
}

const goStructBody: StructBodyFn<StructPool> = (name, type, pool) => {
	if (type.properties.length === 0) {
		return { body: `type ${name} struct{}`, shape: "" };
	}
	const lines: string[] = [`type ${name} struct {`];
	const shapeParts: string[] = [];
	for (const prop of type.properties) {
		const goName = pascalCase(prop.name);
		const inner = goType(prop.type, prop.name, pool);
		const ty = fieldType(inner, prop.optional);
		const tag = jsonTag(prop.name, prop.optional);
		lines.push(`\t${goName} ${ty} ${tag}`);
		shapeParts.push(`${goName}:${ty}`);
	}
	lines.push("}");
	return { body: lines.join("\n"), shape: shapeParts.sort().join(",") };
};

// Shape-based dedup: identical-shape nested structs share one emission.
function emitOrReuseStruct(candidateName: string, type: ObjectType, pool: StructPool): string {
	return poolEmitOrReuseStruct(candidateName, type, pool, goStructBody);
}

// Name-preserving emission for top-level types whose name carries semantic
// meaning (group root structs, singletons). The shared helper reserves the
// resolved name in `byName` before invoking `structBody` so a nested field
// whose pascalCase matches the parent name doesn't claim the slot first.
// We set `pool.baseName` to the resolved name so nested-struct emissions
// inherit it as the prefix for their own names; restore the previous value
// on exit so sibling top-level structs each scope their own prefix.
function emitNamedStruct(candidateName: string, type: ObjectType, pool: StructPool): string {
	const previousBaseName = pool.baseName;
	// Pre-compute the suffix-resolved name so we can set pool.baseName before
	// the shared helper triggers nested emissions through structBody.
	let resolvedName = candidateName;
	let suffix = 2;
	while (pool.byName.has(resolvedName)) resolvedName = `${candidateName}V${suffix++}`;
	pool.baseName = resolvedName;
	const result = poolEmitNamedStruct(candidateName, type, pool, goStructBody);
	pool.baseName = previousBaseName;
	return result;
}

// Boilerplate Entry/EntryData pair. Mirrors the Rust macro output but inline
// (Go has no macros). The exported `MasterfileEntry()` marker method makes
// Entry types satisfy the `MasterfileEntry` interface in masterfile.go.
//
// When `payloadJsonKey` is provided, the EntryData struct gains a typed
// payload field — `TemplateID` is padded to align with the (longer) payload
// field name. When omitted (stub case), no payload field is emitted and
// `TemplateID` stands alone with no alignment padding.
function emitGoEntryWrapper(baseName: string, payloadJsonKey?: string): string {
	const lines: string[] = [
		`type ${baseName}Entry struct {`,
		`\tTemplateID string \`json:"templateId"\``,
		`\tData       ${baseName}EntryData \`json:"data"\``,
		`}`,
		``,
		`func (${baseName}Entry) MasterfileEntry() {}`,
		``,
		`type ${baseName}EntryData struct {`,
	];
	if (payloadJsonKey === undefined) {
		lines.push(`\tTemplateID string \`json:"templateId"\``);
	} else {
		const goPayloadField = pascalCase(payloadJsonKey);
		lines.push(`\tTemplateID     string \`json:"templateId"\``);
		lines.push(`\t${goPayloadField} ${baseName} \`json:"${payloadJsonKey}"\``);
	}
	lines.push(`}`);
	return lines.join("\n");
}

function file(headerComment: string, pool: StructPool, body: string, packageName: string): string {
	const parts: string[] = [headerComment, "", `package ${packageName}`, ""];
	if (pool.usesRawJSON) {
		parts.push(`import "encoding/json"`, "");
	}
	parts.push(...pool.deferred);
	if (body) parts.push(body);
	return `${parts.filter((p) => p !== "").join("\n\n")}\n`;
}

export function emitGroupModule(group: Group, packageName: string): string {
	const baseName = pascalCase(group.discriminator);
	const headerComment = `// Generated from Pokémon GO masterfile — group "${group.discriminator}".`;
	const pool = newPool();

	if (isStubGroup(group)) {
		return file(headerComment, pool, emitGoEntryWrapper(baseName), packageName);
	}

	const inferred = widenedPayloadObject(group.entries, group.discriminator);
	emitNamedStruct(baseName, inferred, pool);
	return file(headerComment, pool, emitGoEntryWrapper(baseName, group.discriminator), packageName);
}

export function emitSingletonsModule(singletons: readonly Group[], packageName: string): string {
	const sorted = [...singletons].sort((a, b) => pascalCase(a.discriminator).localeCompare(pascalCase(b.discriminator)));
	const pool = newPool();
	const wrappers: string[] = [];

	for (const group of sorted) {
		const name = pascalCase(group.discriminator);
		if (isStubGroup(group)) {
			wrappers.push(emitGoEntryWrapper(name));
			continue;
		}
		const inferred = widenedPayloadObject(group.entries, group.discriminator);
		emitNamedStruct(name, inferred, pool);
		wrappers.push(emitGoEntryWrapper(name, group.discriminator));
	}

	const headerComment = `// Generated from Pokémon GO masterfile — singletons (one-of-a-kind entries).`;
	return file(headerComment, pool, wrappers.join("\n\n"), packageName);
}

export interface EntryVariant {
	variantName: string;
	entryTypeName: string;
	isStub: boolean;
	discriminator: string;
	entryCount: number;
	// snake_case sub-package directory where the Entry type lives
	// (e.g., "badge_settings", "singletons"). The masterfile dispatcher
	// uses this to qualify the type reference in the parse switch.
	modulePath: string;
}

// Emit the package's entry-point file: package documentation, the
// `MasterfileEntry` interface, the `ParseMasterfile` function with O(1) string-
// switch dispatch, and the supporting probe helper. Sorted by entry count
// descending so the switch's most common cases come first. The static
// scaffolding lives in templates/masterfile.go.tmpl; this function only
// computes the data-driven imports + switch arms and substitutes them in.
export function emitMasterfileFile(variants: readonly EntryVariant[], modulePath: string): string {
	const sorted = [...variants].sort((a, b) => b.entryCount - a.entryCount || a.variantName.localeCompare(b.variantName));
	const nonStubs = sorted.filter((v) => !v.isStub);
	const stubs = sorted.filter((v) => v.isStub);

	// Deduplicated sub-package imports, sorted alphabetically. Each variant's
	// modulePath becomes <modulePath>/<group>; the dispatch references types
	// as <group>.EntryType.
	const subPackages = [...new Set(sorted.map((v) => v.modulePath))].sort();
	const subPackageImports = subPackages.map((p) => `\t${JSON.stringify(`${modulePath}/${p}`)}`).join("\n");

	const nonStubArms = nonStubs
		.map(
			(v) =>
				`\tcase ${JSON.stringify(v.discriminator)}:\n\t\tvar e ${v.modulePath}.${v.entryTypeName}\n\t\tif err := json.Unmarshal(data, &e); err != nil {\n\t\t\treturn nil, err\n\t\t}\n\t\treturn e, nil`,
		)
		.join("\n");
	const stubArms = stubs
		.map(
			(v) =>
				`\t\tcase ${JSON.stringify(v.discriminator)}:\n\t\t\tvar e ${v.modulePath}.${v.entryTypeName}\n\t\t\tif err := json.Unmarshal(data, &e); err != nil {\n\t\t\t\treturn nil, err\n\t\t\t}\n\t\t\treturn e, nil`,
		)
		.join("\n");

	const template = readFileSync(MASTERFILE_TEMPLATE_PATH, "utf8");
	return template.replaceAll("{{SUB_PACKAGE_IMPORTS}}", subPackageImports).replaceAll("{{NON_STUB_ARMS}}", nonStubArms).replaceAll("{{STUB_ARMS}}", stubArms);
}

function emitGoConstBlock(typeName: string, idsToVariants: Map<string, string>): string {
	const sortedIds = [...idsToVariants.keys()].sort();
	const constNames = sortedIds.map((id) => `${typeName}${idsToVariants.get(id)!}`);

	// Align values for readability — gofmt does this anyway, but we produce
	// it pre-aligned to keep diffs deterministic.
	const widest = Math.max(...constNames.map((n) => n.length));
	const constLines = sortedIds.map((id, i) => `\t${constNames[i]!.padEnd(widest, " ")} ${typeName} = ${JSON.stringify(id)}`).join("\n");

	const valuesLines = constNames.map((n) => `\t${n},`).join("\n");

	// `[...]T{…}` is a fixed-size array literal — Go computes the length at
	// compile time. Stronger type info than `[]T` and lets `len(Values)` be a
	// constant; consumers wanting a slice convert with `Values[:]`.
	return `const (\n${constLines}\n)\n\nvar ${typeName}Values = [...]${typeName}{\n${valuesLines}\n}`;
}

// Shared body for the per-group and singletons templateIds Go files. Both
// emit `type <Name> string` plus the `const (...)` value block plus the
// `var <Name>Values = [...]<Name>{...}` array; they only differ in the
// header comment label, the type name, and the id source.
function emitGoTemplateIdsConstFile(typeName: string, ids: readonly string[], headerLabel: string, packageName: string): string {
	const variants = deriveTemplateIdVariants(ids);
	const constBlock = emitGoConstBlock(typeName, variants);
	return `// Generated from Pokémon GO masterfile — ${headerLabel}.\n\npackage ${packageName}\n\ntype ${typeName} string\n\n${constBlock}\n`;
}

export function emitGroupTemplateIdsFile(group: Group, packageName: string): string {
	const baseName = pascalCase(group.discriminator);
	const typeName = `${baseName}TemplateID`;
	const ids = group.entries.map((e) => e.templateId);
	return emitGoTemplateIdsConstFile(typeName, ids, `group "${group.discriminator}" templateIds`, packageName);
}

export function emitSingletonsTemplateIdsFile(singletons: readonly Group[], packageName: string): string {
	const allIds = singletons.flatMap((g) => g.entries.map((e) => e.templateId));
	return emitGoTemplateIdsConstFile("SingletonsTemplateID", allIds, "singletons templateIds", packageName);
}
