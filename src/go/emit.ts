import type { Entry, Group } from "../group.ts";
import type { InferredType, ObjectType } from "../infer.ts";
import { inferJsonTypes, widenType } from "../infer.ts";
import { deriveTemplateIdVariants, pascalCase } from "../naming.ts";

// Go's encoding/json supports fixed-size arrays of any length, but very long
// fixed arrays in source read poorly. Above this we fall back to slices.
const MAX_FIXED_ARRAY_LEN = 32;

// Pool tracks already-emitted nested struct definitions for deduplication.
// Same shape-based dedup as the Rust emitter — two fields whose object types
// have identical shapes share one struct definition; same name with different
// shape gets V2/V3 suffix.
interface StructPool {
	byShape: Map<string, string>;
	byName: Set<string>;
	deferred: string[];
	usesRawJSON: boolean;
}

function newPool(): StructPool {
	return { byShape: new Map(), byName: new Set(), deferred: [], usesRawJSON: false };
}

// A handful of Go field types live in the `encoding/json` package. When emit
// produces one, flag the file's pool so we know to add the import.
function markRawJSON(pool: StructPool): void {
	pool.usesRawJSON = true;
}

// Convert a JSON-payload InferredType into a Go type expression. `baseName`
// is the enclosing top-level struct's name; nested object types use it as a
// prefix to keep names unique within the package's flat namespace (unlike
// Rust where each module is its own namespace).
function goType(t: InferredType, fieldName: string, pool: StructPool, baseName: string): string {
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
			return `[]${goType(t.element, fieldName, pool, baseName)}`;
		case "tuple": {
			if (t.items.length === 0) return "[]any";
			const itemTypes = t.items.map((item) => goType(item, fieldName, pool, baseName));
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
			return emitOrReuseStruct(`${baseName}${pascalCase(fieldName)}`, t, pool, baseName);
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
				const inner = goType(first, fieldName, pool, baseName);
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

function structBody(name: string, type: ObjectType, pool: StructPool, baseName: string): { body: string; shape: string } {
	if (type.properties.length === 0) {
		return { body: `type ${name} struct{}`, shape: "" };
	}
	const lines: string[] = [`type ${name} struct {`];
	const shapeParts: string[] = [];
	for (const prop of type.properties) {
		const goName = pascalCase(prop.name);
		const inner = goType(prop.type, prop.name, pool, baseName);
		const ty = fieldType(inner, prop.optional);
		const tag = jsonTag(prop.name, prop.optional);
		lines.push(`\t${goName} ${ty} ${tag}`);
		shapeParts.push(`${goName}:${ty}`);
	}
	lines.push("}");
	return { body: lines.join("\n"), shape: shapeParts.sort().join(",") };
}

// Shape-based dedup: identical-shape nested structs share one emission.
function emitOrReuseStruct(candidateName: string, type: ObjectType, pool: StructPool, baseName: string): string {
	const { body, shape } = structBody(candidateName, type, pool, baseName);
	if (shape !== "") {
		const existing = pool.byShape.get(shape);
		if (existing) return existing;
	}
	let finalName = candidateName;
	let suffix = 2;
	while (pool.byName.has(finalName)) finalName = `${candidateName}V${suffix++}`;
	pool.byName.add(finalName);
	if (shape !== "") pool.byShape.set(shape, finalName);
	if (finalName !== candidateName) {
		const { body: finalBody } = structBody(finalName, type, pool, baseName);
		pool.deferred.push(finalBody);
	} else {
		pool.deferred.push(body);
	}
	return finalName;
}

// Name-preserving emission for top-level types whose name carries semantic
// meaning (group root structs, singletons). Reserves the name in `byName`
// before generating the body so a nested field whose pascalCase matches the
// parent name doesn't claim the slot first. The baseName parameter is the
// nested-type prefix; for top-level structs it equals the candidateName.
function emitNamedStruct(candidateName: string, type: ObjectType, pool: StructPool): string {
	let finalName = candidateName;
	let suffix = 2;
	while (pool.byName.has(finalName)) finalName = `${candidateName}V${suffix++}`;
	pool.byName.add(finalName);
	const { body } = structBody(finalName, type, pool, finalName);
	pool.deferred.push(body);
	return finalName;
}

function inferPayloadType(entries: Entry[], discriminator: string): ObjectType {
	const payloads = entries.map((e) => e.data[discriminator]);
	const widened = widenType(inferJsonTypes(payloads));
	if (widened.kind !== "object") {
		throw new Error(`Expected object payload type for "${discriminator}", got ${widened.kind}`);
	}
	return widened;
}

function isStubGroup(group: Group): boolean {
	const first = group.entries[0];
	if (!first) return true;
	return Object.keys(first.data).filter((k) => k !== "templateId").length === 0;
}

// Boilerplate Entry/EntryData pair for a discriminator with payload. Mirrors
// the Rust macro output but inline (Go has no macros). The exported
// `MasterfileEntry()` marker method makes Entry types satisfy the
// `MasterfileEntry` interface in masterfile.go.
function entryWrapper(baseName: string, payloadJsonKey: string): string {
	const goPayloadField = pascalCase(payloadJsonKey);
	return [
		`type ${baseName}Entry struct {`,
		`\tTemplateID string \`json:"templateId"\``,
		`\tData       ${baseName}EntryData \`json:"data"\``,
		`}`,
		``,
		`func (${baseName}Entry) MasterfileEntry() {}`,
		``,
		`type ${baseName}EntryData struct {`,
		`\tTemplateID     string \`json:"templateId"\``,
		`\t${goPayloadField} ${baseName} \`json:"${payloadJsonKey}"\``,
		`}`,
	].join("\n");
}

function stubEntryWrapper(baseName: string): string {
	return [
		`type ${baseName}Entry struct {`,
		`\tTemplateID string \`json:"templateId"\``,
		`\tData       ${baseName}EntryData \`json:"data"\``,
		`}`,
		``,
		`func (${baseName}Entry) MasterfileEntry() {}`,
		``,
		`type ${baseName}EntryData struct {`,
		`\tTemplateID string \`json:"templateId"\``,
		`}`,
	].join("\n");
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
		return file(headerComment, pool, stubEntryWrapper(baseName), packageName);
	}

	const inferred = inferPayloadType(group.entries, group.discriminator);
	emitNamedStruct(baseName, inferred, pool);
	return file(headerComment, pool, entryWrapper(baseName, group.discriminator), packageName);
}

export function emitSingletonsModule(singletons: readonly Group[], packageName: string): string {
	const sorted = [...singletons].sort((a, b) => pascalCase(a.discriminator).localeCompare(pascalCase(b.discriminator)));
	const pool = newPool();
	const wrappers: string[] = [];

	for (const group of sorted) {
		const name = pascalCase(group.discriminator);
		if (isStubGroup(group)) {
			wrappers.push(stubEntryWrapper(name));
			continue;
		}
		const inferred = inferPayloadType(group.entries, group.discriminator);
		emitNamedStruct(name, inferred, pool);
		wrappers.push(entryWrapper(name, group.discriminator));
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
// descending so the switch's most common cases come first.
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

	return `// Generated from Pokémon GO masterfile — package entry point.
// Package documentation lives in doc.go.

package masterfile

import (
\t"encoding/json"
\t"fmt"

${subPackageImports}
)

// MasterfileEntry is the marker interface implemented by every per-discriminator
// Entry type generated under this module. Use a type switch to extract a
// concrete entry from a parse result.
//
// The marker method is exported because Go's unexported-method sealing trick
// only works within a single package. Foreign types could implement this
// interface, but the only thing that produces values of it is ParseMasterfile
// which only returns generated types.
type MasterfileEntry interface {
\tMasterfileEntry()
}

// ParseMasterfile parses a masterfile JSON byte slice into a slice of typed
// entries. Each entry is dispatched to the concrete \`*Entry\` type matching
// its discriminator (the non-templateId key inside \`data\`).
func ParseMasterfile(data []byte) ([]MasterfileEntry, error) {
\tvar raw []json.RawMessage
\tif err := json.Unmarshal(data, &raw); err != nil {
\t\treturn nil, fmt.Errorf("masterfile is not a JSON array: %w", err)
\t}

\tentries := make([]MasterfileEntry, 0, len(raw))
\tfor i, m := range raw {
\t\te, err := parseEntry(m)
\t\tif err != nil {
\t\t\treturn nil, fmt.Errorf("entry %d: %w", i, err)
\t\t}
\t\tentries = append(entries, e)
\t}
\treturn entries, nil
}

func parseEntry(data json.RawMessage) (MasterfileEntry, error) {
\tvar probe struct {
\t\tTemplateID string                     \`json:"templateId"\`
\t\tData       map[string]json.RawMessage \`json:"data"\`
\t}
\tif err := json.Unmarshal(data, &probe); err != nil {
\t\treturn nil, fmt.Errorf("parse entry shell: %w", err)
\t}

\tvar disc string
\tfor k := range probe.Data {
\t\tif k != "templateId" {
\t\t\tdisc = k
\t\t\tbreak
\t\t}
\t}

\tswitch disc {
${nonStubArms}
\tcase "":
\t\tswitch probe.TemplateID {
${stubArms}
\t\tdefault:
\t\t\treturn nil, fmt.Errorf("unknown stub templateId: %s", probe.TemplateID)
\t\t}
\tdefault:
\t\treturn nil, fmt.Errorf("unknown discriminator: %s", disc)
\t}
}
`;
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

export function emitGroupTemplateIdsFile(group: Group, packageName: string): string {
	const baseName = pascalCase(group.discriminator);
	const typeName = `${baseName}TemplateID`;
	const ids = group.entries.map((e) => e.templateId);
	const variants = deriveTemplateIdVariants(ids);
	const constBlock = emitGoConstBlock(typeName, variants);

	return `// Generated from Pokémon GO masterfile — group "${group.discriminator}" templateIds.\n\npackage ${packageName}\n\ntype ${typeName} string\n\n${constBlock}\n`;
}

export function emitSingletonsTemplateIdsFile(singletons: readonly Group[], packageName: string): string {
	const allIds = singletons.flatMap((g) => g.entries.map((e) => e.templateId));
	const typeName = "SingletonsTemplateID";
	const variants = deriveTemplateIdVariants(allIds);
	const constBlock = emitGoConstBlock(typeName, variants);

	return `// Generated from Pokémon GO masterfile — singletons templateIds.\n\npackage ${packageName}\n\ntype ${typeName} string\n\n${constBlock}\n`;
}
