import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Group } from "../group.ts";
import { isStubGroup } from "../group.ts";
import type { InferredProperty, InferredType, ObjectType } from "../infer.ts";
import { widenedPayloadObject } from "../infer.ts";
import { deriveTemplateIdVariants, pascalCase, snakeCase } from "../naming.ts";
import { clusterByFingerprint } from "../split.ts";
import { emitNamedStruct as poolEmitNamedStruct, emitOrReuseStruct as poolEmitOrReuseStruct, type StructBodyFn, type StructPoolBase } from "../struct-pool.ts";

// Path resolution for the lib.rs.tmpl template lives next to this file at
// templates/lib.rs.tmpl. `import.meta.dir` resolves to src/rust at runtime
// so the template path stays correct regardless of cwd.
const LIB_TEMPLATE_PATH = join(import.meta.dir, "templates", "lib.rs.tmpl");

// Merge a list of InferredTypes into one. Used by mergeObjectTypes (recursive,
// merges nested object schemas) and the long-heterogeneous-tuple Rust-emit
// fallback. The merge needs to handle every nested kind:
//   - object: merge property sets, recurse on each field
//   - tuple: same length → merge per-position; varying lengths → array of
//            merged element (this catches the `excludedForms` case where each
//            position observed a different length)
//   - array: merge element types
//   - number: widen numericKind (uint < int < float)
//   - mixed kinds: produce a UnionType so downstream emit can express it
//
// The "first wins" fallback in the previous version was wrong: it discarded
// per-position type variation and produced fixed-length arrays even when the
// observed lengths varied across positions, which then failed to deserialize
// against real masterfile data.
function mergeTypes(types: InferredType[]): InferredType {
	if (types.length === 0) return { kind: "union", variants: [] };
	if (types.length === 1) return types[0]!;

	const allSameKind = types.every((t) => t.kind === types[0]!.kind);
	if (!allSameKind) return { kind: "union", variants: types };

	const kind = types[0]!.kind;
	switch (kind) {
		case "object":
			return mergeObjectTypes(types as ObjectType[]);
		case "tuple": {
			const tuples = types as Array<{ kind: "tuple"; items: InferredType[] }>;
			const lengths = new Set(tuples.map((t) => t.items.length));
			if (lengths.size === 1) {
				const len = tuples[0]!.items.length;
				const items = Array.from({ length: len }, (_, i) => mergeTypes(tuples.map((t) => t.items[i]!)));
				return { kind: "tuple", items };
			}
			return { kind: "array", element: mergeTypes(tuples.flatMap((t) => t.items)) };
		}
		case "array": {
			const arrays = types as Array<{ kind: "array"; element: InferredType }>;
			return { kind: "array", element: mergeTypes(arrays.map((a) => a.element)) };
		}
		case "number": {
			const nums = types as Array<{ kind: "number"; numericKind: "uint" | "int" | "float"; literals: number[] }>;
			const kinds = new Set(nums.map((n) => n.numericKind));
			const numericKind = kinds.has("float") ? "float" : kinds.has("int") ? "int" : "uint";
			return { kind: "number", numericKind, literals: [] };
		}
		default:
			return types[0]!;
	}
}

function mergeObjectTypes(types: readonly ObjectType[]): ObjectType {
	if (types.length === 1) return types[0]!;
	const propBuckets = new Map<string, { occurrences: InferredType[]; presentIn: number; anyOptional: boolean }>();
	for (const t of types) {
		for (const prop of t.properties) {
			const entry = propBuckets.get(prop.name) ?? { occurrences: [], presentIn: 0, anyOptional: false };
			entry.occurrences.push(prop.type);
			entry.presentIn += 1;
			if (prop.optional) entry.anyOptional = true;
			propBuckets.set(prop.name, entry);
		}
	}
	const properties: InferredProperty[] = [];
	for (const [name, info] of propBuckets) {
		const optional = info.anyOptional || info.presentIn < types.length;
		properties.push({ name, type: mergeTypes(info.occurrences), optional });
	}
	properties.sort((a, b) => a.name.localeCompare(b.name));
	return { kind: "object", properties };
}

// When a group has more than this many distinct payload shapes (fingerprint
// clusters), emit a single flat struct with all fields optional rather than
// one struct + enum variant per shape. Above this threshold the enum becomes
// noise (pokemonSettings has 1217 clusters because each Pokémon has many
// independent optional fields, producing combinatorial fingerprints — emitting
// 1217 enum variants is unreadable). The 1-cluster path always uses a single
// struct anyway, and 2-N clusters where N is small is where enums earn their
// keep (avatarItemDisplay's 2-shape display-string-id vs misc).
const MAX_CLUSTERS_FOR_ENUM = 4;

// Rust's standard library only implements `Debug`, `Serialize`, and
// `Deserialize` for tuples up to 12-arity. Above this we fall back to
// `Vec<serde_json::Value>` — losing per-position type information but staying
// compilable. (In practice, tuples this large are misclassified lists anyway
// — see infer.ts's "fixed-length array → tuple" heuristic.)
const MAX_TUPLE_ARITY = 12;

// serde's default array trait impls cap at 32 elements. Beyond this we fall
// back to `Vec<T>` — loses fixed-length info but compiles without needing
// `serde-big-array` as an extra dependency.
const MAX_FIXED_ARRAY_LEN = 32;

// Rust strict + reserved keywords (Rust 2024 edition). When a snake_cased
// field name collides with one, we prefix the Rust identifier with `r#` (raw
// identifier syntax). Serde's `rename_all = "camelCase"` strips the `r#`
// prefix before case conversion, so JSON round-trip is preserved.
const RUST_KEYWORDS = new Set([
	// Strict keywords (used by the language)
	"as",
	"async",
	"await",
	"break",
	"const",
	"continue",
	"crate",
	"dyn",
	"else",
	"enum",
	"extern",
	"false",
	"fn",
	"for",
	"gen",
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
	"try",
	"type",
	"unsafe",
	"use",
	"where",
	"while",
	// Reserved keywords (not currently used but reserved for future use; r#
	// prefix still required for these as identifiers)
	"abstract",
	"become",
	"box",
	"do",
	"final",
	"macro",
	"override",
	"priv",
	"typeof",
	"unsized",
	"virtual",
	"yield",
]);

function rustFieldIdent(camelName: string): string {
	const snake = snakeCase(camelName);
	return RUST_KEYWORDS.has(snake) ? `r#${snake}` : snake;
}

// Compose a Rust enum variant name from an H3 fingerprint. Short fingerprints
// (≤ 3 fields) become the full PascalCase concat (`Forms`, `BreadOverridesForm`).
// Longer ones truncate to first-field-plus-count to avoid 300-char struct
// names — the variant's struct body already lists every field it carries, so
// the name only needs to disambiguate within the enum, not enumerate the
// fingerprint. Empty fingerprint (entries with only universal fields) is the
// catch-all `Misc`.
function variantNameFromFingerprint(fingerprint: readonly string[]): string {
	if (fingerprint.length === 0) return "Misc";
	if (fingerprint.length <= 3) return pascalCase(fingerprint.join("-"));
	return `${pascalCase(fingerprint[0] ?? "")}Plus${fingerprint.length - 1}`;
}

// Rust pool is the bare base — no language-specific extensions. The pool
// machinery lives in `../struct-pool.ts` and the Rust-specific `structBody`
// implementation below is passed in at every call site.
type StructPool = StructPoolBase;

function newPool(): StructPool {
	return { byShape: new Map(), byName: new Set(), deferred: [] };
}

const rustStructBody: StructBodyFn<StructPool> = (name, type, pool) => structBody(name, type, pool);

function emitOrReuseStruct(candidateName: string, type: ObjectType, pool: StructPool): string {
	return poolEmitOrReuseStruct(candidateName, type, pool, rustStructBody);
}

function emitNamedStruct(candidateName: string, type: ObjectType, pool: StructPool): string {
	return poolEmitNamedStruct(candidateName, type, pool, rustStructBody);
}

// Convert a JSON-payload InferredType into a Rust type expression. Nested
// object types route through `emitOrReuseStruct` which deduplicates by shape;
// candidate names are derived from `fieldName` alone (not an ancestral chain),
// so collisions are resolved by shape-equality (reuse) or V2/V3 suffixing
// (different shape, same field name within the module).
function rustType(t: InferredType, fieldName: string, pool: StructPool): string {
	switch (t.kind) {
		case "string":
		case "templateIdReference":
		case "templateIdSlice":
			return "String";
		case "number":
			return t.numericKind === "uint" ? "u64" : t.numericKind === "int" ? "i64" : "f64";
		case "boolean":
			return "bool";
		case "null":
			// A field that's only ever null carries no useful type information.
			// Punt to a JSON-value catch-all so the type still compiles and
			// round-trips via serde.
			return "serde_json::Value";
		case "array":
			return `Vec<${rustType(t.element, fieldName, pool)}>`;
		case "tuple": {
			// Tuples with all items of the same Rust type become fixed-length
			// arrays `[T; N]` (e.g., `attackScalar: [f64; 18]` for 18 type
			// matchups). Tuples with mixed item types become Rust tuples
			// `(T1, T2, …)` so per-position type information is preserved.
			//
			// Caps: arrays beyond MAX_FIXED_ARRAY_LEN fall back to `Vec<T>`
			// (serde doesn't impl traits past 32). Heterogeneous tuples beyond
			// MAX_TUPLE_ARITY would normally fall back to `Vec<serde_json::Value>`
			// (Rust std doesn't impl Debug/Serialize/Deserialize for tuples past
			// 12) — but if every position is object-typed, we instead merge
			// them into one ObjectType and emit `Vec<MergedT>`. This recovers
			// the schema for long lists of records (e.g. `event_step: 45 items`
			// with slight per-position optional-field variation).
			if (t.items.length === 0) return "Vec<serde_json::Value>";
			const itemTypes = t.items.map((item) => rustType(item, fieldName, pool));
			const allSame = itemTypes.every((ty) => ty === itemTypes[0]);
			if (allSame) {
				return t.items.length <= MAX_FIXED_ARRAY_LEN ? `[${itemTypes[0]}; ${itemTypes.length}]` : `Vec<${itemTypes[0]}>`;
			}
			if (t.items.length <= MAX_TUPLE_ARITY) {
				return `(${itemTypes.join(", ")})`;
			}
			if (t.items.every((item) => item.kind === "object")) {
				const merged = mergeObjectTypes(t.items as ObjectType[]);
				return `Vec<${rustType(merged, fieldName, pool)}>`;
			}
			return "Vec<serde_json::Value>";
		}
		case "object":
			return emitOrReuseStruct(pascalCase(fieldName), t, pool);
		case "union": {
			// Strip nulls → Option<...>. The remaining non-null variants drive
			// the actual type:
			//   - 0 non-null  : impossible per inference; fall back.
			//   - 1 non-null  : just T (or Option<T> if null was present).
			//   - 2+ non-null : emit an untagged enum with one variant per
			//                   distinct kind. Serde dispatches by trying
			//                   each variant; non-overlapping primitive kinds
			//                   (string vs number vs object) deserialize
			//                   unambiguously.
			const nullVariant = t.variants.find((v) => v.kind === "null");
			const nonNull = t.variants.filter((v) => v.kind !== "null");
			if (nonNull.length === 0) return "serde_json::Value";
			if (nonNull.length === 1) {
				const first = nonNull[0];
				if (!first) return "serde_json::Value";
				const inner = rustType(first, fieldName, pool);
				return nullVariant ? `Option<${inner}>` : inner;
			}
			const enumName = emitUnionEnum(`${pascalCase(fieldName)}Value`, nonNull, fieldName, pool);
			return nullVariant ? `Option<${enumName}>` : enumName;
		}
	}
}

function structBody(name: string, type: ObjectType, pool: StructPool): { body: string; shape: string } {
	const lines: string[] = [];
	lines.push("#[derive(Debug, Clone, Serialize, Deserialize)]");
	lines.push(`#[serde(rename_all = "camelCase")]`);
	if (type.properties.length === 0) {
		lines.push(`pub struct ${name} {}`);
		return { body: lines.join("\n"), shape: "" };
	}
	lines.push(`pub struct ${name} {`);
	const shapeParts: string[] = [];
	for (const prop of type.properties) {
		const fieldName = rustFieldIdent(prop.name);
		const inner = rustType(prop.type, prop.name, pool);
		const fieldType = prop.optional ? `Option<${inner}>` : inner;
		lines.push(`    pub ${fieldName}: ${fieldType},`);
		shapeParts.push(`${fieldName}:${fieldType}`);
	}
	lines.push("}");
	return { body: lines.join("\n"), shape: shapeParts.sort().join(",") };
}

// Name a Rust enum variant for an InferredType in an untagged union. The
// variant name is the type's "kind label" (e.g., StringType → "String",
// NumberType{numericKind: "uint"} → "Uint"). Named to be compatible with
// serde's untagged discrimination — the names are descriptive only, not
// used by serde for dispatch.
function unionVariantName(t: InferredType): string {
	switch (t.kind) {
		case "string":
		case "templateIdReference":
		case "templateIdSlice":
			return "String";
		case "number":
			return t.numericKind === "uint" ? "Uint" : t.numericKind === "int" ? "Int" : "Float";
		case "boolean":
			return "Bool";
		case "null":
			return "Null";
		case "object":
			return "Object";
		case "array":
			return "Array";
		case "tuple":
			return "Tuple";
		case "union":
			return "Union";
	}
}

// Emit (or reuse, by structural shape) a `#[serde(untagged)]` enum for a
// heterogeneous field-level union. The enum name is derived from the field
// name + "Value" suffix (e.g., `form: number | string` → `FormValue`),
// matching the parent struct's namespace. Same dedup rules as nested
// structs: identical-shape unions reuse one definition, name collisions
// get V2/V3 suffixes.
function emitUnionEnum(candidateName: string, variants: readonly InferredType[], fieldName: string, pool: StructPool): string {
	const usedVariantNames = new Set<string>();
	const lines: { name: string; ty: string }[] = [];
	for (const v of variants) {
		const base = unionVariantName(v);
		let name = base;
		let suffix = 2;
		while (usedVariantNames.has(name)) name = `${base}V${suffix++}`;
		usedVariantNames.add(name);
		lines.push({ name, ty: rustType(v, fieldName, pool) });
	}
	const shape = `enum:${lines
		.map((l) => `${l.name}(${l.ty})`)
		.sort()
		.join("|")}`;
	const existing = pool.byShape.get(shape);
	if (existing) return existing;

	let finalName = candidateName;
	let suffix = 2;
	while (pool.byName.has(finalName)) finalName = `${candidateName}V${suffix++}`;
	pool.byName.add(finalName);
	pool.byShape.set(shape, finalName);

	const body = [
		"#[derive(Debug, Clone, Serialize, Deserialize)]",
		"#[serde(untagged)]",
		`pub enum ${finalName} {`,
		...lines.map((l) => `    ${l.name}(${l.ty}),`),
		"}",
	].join("\n");
	pool.deferred.push(body);
	return finalName;
}

// Module-level rustdoc (`//!`) — must appear before any items, hence the
// dedicated emit. The header doubles as the "where this came from" provenance
// note in the generated source and as a rustdoc summary on docs.rs.
function header(discriminator: string): string {
	return `//! Generated from Pokémon GO masterfile — group "${discriminator}".`;
}

const SERDE_IMPORT = `use serde::{Deserialize, Serialize};`;

// Each masterfile entry has the wrapper shape:
//   { templateId: "...", data: { templateId: "...", [discriminator?]: payload } }
// We emit one Entry struct + one EntryData struct per discriminator (paired via
// macro). Stubs (entries with no payload — `data: { templateId }`) use the
// shorter `masterfile_stub_entry!` macro.
function entryWrapper(baseName: string, snakeName: string): string {
	return `crate::masterfile_entry!(${baseName}Entry, ${baseName}EntryData, ${snakeName}: ${baseName});`;
}

function stubEntryWrapper(baseName: string): string {
	return `crate::masterfile_stub_entry!(${baseName}Entry, ${baseName}EntryData);`;
}

function file(blocks: readonly string[]): string {
	// Join with one blank line between blocks; trailing newline.
	return `${blocks.join("\n\n")}\n`;
}

// Trivial three-line module hub written to <group>/mod.rs. Carries the
// file-level provenance comment and re-exports both submodules so existing
// import paths keep resolving.
export function emitGroupModFile(group: Group): string {
	return `${header(group.discriminator)}

pub mod template_ids;
pub mod types;

pub use template_ids::*;
pub use types::*;
`;
}

// Body of <group>/types.rs — the existing per-group struct/enum/payload
// content. The file-level header moved to mod.rs.
export function emitGroupTypesFile(group: Group): string {
	const baseName = pascalCase(group.discriminator);

	if (isStubGroup(group)) {
		return file([SERDE_IMPORT, stubEntryWrapper(baseName)]);
	}

	const pool = newPool();
	const clusters = clusterByFingerprint(group);
	const snakeName = rustFieldIdent(group.discriminator);

	if (clusters.length === 1 || clusters.length > MAX_CLUSTERS_FOR_ENUM) {
		// Single-shape OR too many shapes to enumerate cleanly. Emit one flat
		// struct using the type inferred from the entire group's payloads —
		// fields that aren't universally present become Option<T>.
		const inferred = widenedPayloadObject(group.entries, group.discriminator);
		emitNamedStruct(baseName, inferred, pool);
		return file([SERDE_IMPORT, ...pool.deferred, entryWrapper(baseName, snakeName)]);
	}

	// Small number of clusters → emit each as a variant struct + an enum that
	// wraps them. Variant struct names are derived from the fingerprint via
	// variantNameFromFingerprint (truncated for long fingerprints) — module
	// path provides namespacing. Nested structs are deduplicated across
	// variants via the pool. If two clusters happen to produce the same
	// truncated variant name, V2/V3 suffixes disambiguate per-enum.
	clusters.sort((a, b) => b.entries.length - a.entries.length);
	const enumVariants: string[] = [];
	const usedVariantNames = new Set<string>();
	for (const cluster of clusters) {
		const base = variantNameFromFingerprint(cluster.fingerprint);
		let variantName = base;
		let suffix = 2;
		while (usedVariantNames.has(variantName)) variantName = `${base}V${suffix++}`;
		usedVariantNames.add(variantName);

		const inferred = widenedPayloadObject(cluster.entries, group.discriminator);
		const finalName = emitNamedStruct(variantName, inferred, pool);
		enumVariants.push(`    ${variantName}(${finalName}),`);
	}
	const enumBlock = ["#[derive(Debug, Clone, Serialize, Deserialize)]", "#[serde(untagged)]", `pub enum ${baseName} {`, ...enumVariants, "}"].join("\n");

	return file([SERDE_IMPORT, ...pool.deferred, enumBlock, entryWrapper(baseName, snakeName)]);
}

// Shared body for the per-group and singletons templateIds enums. Both files
// share the same derive set, the same `pub enum <Name>` shape, and the same
// per-id `#[serde(rename = ...)]` variant block — they only differ in the
// header comment label, the enum's name, and the id source.
function emitRustTemplateIdsEnum(name: string, ids: readonly string[], headerLabel: string): string {
	const variants = deriveTemplateIdVariants(ids);
	const sortedIds = [...ids].sort();
	const variantBlock = sortedIds.map((id) => `    #[serde(rename = ${JSON.stringify(id)})]\n    ${variants.get(id)!},`).join("\n");

	return `//! Generated from Pokémon GO masterfile — ${headerLabel}.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash,
    Serialize, Deserialize,
    AllVariants, AsStr, FromStrEnum,
)]
pub enum ${name} {
${variantBlock}
}
`;
}

// Body of <group>/template_ids.rs — a unit-variant enum mapping
// PascalCase'd templateIds to their string literals via serde rename.
// AllVariants/AsStr/FromStrEnum derives provide ALL/SIZE/as_str/Display
// /FromStr without hand-emitted boilerplate.
export function emitGroupTemplateIdsFile(group: Group): string {
	const baseName = pascalCase(group.discriminator);
	const ids = group.entries.map((e) => e.templateId);
	return emitRustTemplateIdsEnum(`${baseName}TemplateId`, ids, `group "${group.discriminator}" templateIds`);
}

// Trivial three-line module hub for singletons/, mirroring per-group modules.
export function emitSingletonsModFile(): string {
	return `//! Generated from Pokémon GO masterfile — singletons (one-of-a-kind entries).

pub mod template_ids;
pub mod types;

pub use template_ids::*;
pub use types::*;
`;
}

// Bundle every singleton group (entries.length === 1) into one types.rs.
// Each singleton emits an Entry/EntryData wrapper via the macro; with-payload
// singletons also emit their inner payload struct. Stubs need no inner
// struct since their `data` has only `templateId`. The file-level header
// moved to mod.rs.
export function emitSingletonsTypesFile(singletons: readonly Group[]): string {
	const sorted = [...singletons].sort((a, b) => pascalCase(a.discriminator).localeCompare(pascalCase(b.discriminator)));
	const pool = newPool();
	const wrappers: string[] = [];

	for (const group of sorted) {
		const name = pascalCase(group.discriminator);
		if (isStubGroup(group)) {
			wrappers.push(stubEntryWrapper(name));
			continue;
		}
		const inferred = widenedPayloadObject(group.entries, group.discriminator);
		emitNamedStruct(name, inferred, pool);
		wrappers.push(entryWrapper(name, rustFieldIdent(group.discriminator)));
	}

	return file([SERDE_IMPORT, ...pool.deferred, ...wrappers]);
}

// One combined SingletonsTemplateId enum across every singleton's templateId.
export function emitSingletonsTemplateIdsFile(singletons: readonly Group[]): string {
	const allIds = singletons.flatMap((g) => g.entries.map((e) => e.templateId));
	return emitRustTemplateIdsEnum("SingletonsTemplateId", allIds, "singletons templateIds");
}

// Macros invoked by every generated module to define the Entry/EntryData
// wrapper pair that mirrors the masterfile JSON shape. Exported at crate root
// so consumers can use them too if they want to extend the generated types.
const MACRO_DEFINITIONS = `\
/// Defines an Entry + EntryData pair for a discriminator that carries a payload.
/// Used by the codegen; consumers of this crate normally don't invoke directly.
#[macro_export]
macro_rules! masterfile_entry {
\t($entry:ident, $data:ident, $field:ident: $ty:ty) => {
\t\t/// Outer masterfile wrapper: \`{ templateId, data: { ... } }\`.
\t\t#[derive(Debug, Clone, ::serde::Serialize, ::serde::Deserialize)]
\t\t#[serde(rename_all = "camelCase")]
\t\tpub struct $entry {
\t\t\tpub template_id: String,
\t\t\tpub data: $data,
\t\t}
\t\t/// Inner \`data\` object: \`{ templateId, [discriminator]: payload }\`.
\t\t#[derive(Debug, Clone, ::serde::Serialize, ::serde::Deserialize)]
\t\t#[serde(rename_all = "camelCase")]
\t\tpub struct $data {
\t\t\tpub template_id: String,
\t\t\tpub $field: $ty,
\t\t}
\t};
}

/// Defines an Entry + EntryData pair for a stub discriminator (no payload).
/// Stub entries have JSON shape \`{ templateId, data: { templateId } }\`.
#[macro_export]
macro_rules! masterfile_stub_entry {
\t($entry:ident, $data:ident) => {
\t\t/// Outer masterfile wrapper for a stub entry (no payload).
\t\t#[derive(Debug, Clone, ::serde::Serialize, ::serde::Deserialize)]
\t\t#[serde(rename_all = "camelCase")]
\t\tpub struct $entry {
\t\t\tpub template_id: String,
\t\t\tpub data: $data,
\t\t}
\t\t/// Inner \`data\` object for a stub entry: \`{ templateId }\`.
\t\t#[derive(Debug, Clone, ::serde::Serialize, ::serde::Deserialize)]
\t\t#[serde(rename_all = "camelCase")]
\t\tpub struct $data {
\t\t\tpub template_id: String,
\t\t}
\t};
}`;

export interface EntryVariant {
	// PascalCase variant name (also the discriminator name in PascalCase form).
	variantName: string;
	// snake_case module path where the Entry type lives (e.g., `pokemon_settings`,
	// `singletons`).
	modulePath: string;
	// PascalCase Entry type name (e.g., `PokemonSettingsEntry`).
	entryTypeName: string;
	// True iff this discriminator's `data` carries no payload key. Stubs are
	// dispatched by `templateId` value rather than by `data`'s key set.
	isStub: boolean;
	// For non-stubs: the JSON key inside `data` that identifies this variant
	// (e.g., `"pokemonSettings"`). For stubs: the entry's templateId
	// (e.g., `"ITEM_CURRENCY_VALUES"`).
	discriminator: string;
	// Number of entries in this discriminator's group. Used to sort variants
	// most-frequent-first so dispatch and serialize round-trips short-circuit
	// quickly on common cases.
	entryCount: number;
}

export function emitLibFile(moduleNames: readonly string[], variants: readonly EntryVariant[]): string {
	const sortedModules = [...moduleNames].sort();

	// Sort variants by entry count descending (most frequent first), tiebreak
	// alphabetically. The custom Deserialize impl dispatches by exact match
	// on the discriminator key, so order doesn't affect correctness — but we
	// keep the *enum declaration* in this order so that source readers and
	// pattern-match exhaustiveness diagnostics surface common cases first.
	const sortedVariants = [...variants].sort((a, b) => b.entryCount - a.entryCount || a.variantName.localeCompare(b.variantName));

	// Disambiguate any rare pascalCase collisions (e.g., a camelCase discriminator
	// and a SCREAMING_SNAKE stub template-id that PascalCase to the same name).
	const usedVariantNames = new Set<string>();
	const finalVariants: Array<{ finalName: string; v: EntryVariant }> = [];
	const variantLineStrings: string[] = [];
	for (const v of sortedVariants) {
		let name = v.variantName;
		let suffix = 2;
		while (usedVariantNames.has(name)) name = `${v.variantName}V${suffix++}`;
		usedVariantNames.add(name);
		finalVariants.push({ finalName: name, v });
		variantLineStrings.push(`    ${name}(${v.modulePath}::${v.entryTypeName}),`);
	}

	// Build dispatch arms for the custom Deserialize impl. Each arm just
	// returns `serde_json::from_value(value).map(Self::Variant)` — the
	// `map_err` to the deserializer's error type happens once at the bottom
	// of the impl rather than in every arm. Non-stubs match on the inner
	// `data` object's non-templateId key; stubs match on `templateId` value.
	const nonStubArms = finalVariants
		.filter((x) => !x.v.isStub)
		.map((x) => `\t\t\t\t${JSON.stringify(x.v.discriminator)} => serde_json::from_value(value).map(Self::${x.finalName}),`)
		.join("\n");
	const stubArms = finalVariants
		.filter((x) => x.v.isStub)
		.map((x) => `\t\t\t\tSome(${JSON.stringify(x.v.discriminator)}) => serde_json::from_value(value).map(Self::${x.finalName}),`)
		.join("\n");

	const modules = sortedModules.map((n) => `pub mod ${n};`).join("\n");
	const variantLines = variantLineStrings.join("\n");

	// The static scaffolding lives in templates/lib.rs.tmpl (file-level
	// rustdoc, the UnknownTemplateId definition, the Deserialize impl
	// boilerplate, the parse_masterfile function). We substitute four
	// data-driven blocks: the macro definitions, the `pub mod` declarations,
	// the enum variant lines, and the two sets of dispatch match arms.
	const template = readFileSync(LIB_TEMPLATE_PATH, "utf8");
	return template
		.replaceAll("{{MACRO_DEFINITIONS}}", MACRO_DEFINITIONS)
		.replaceAll("{{MODULES}}", modules)
		.replaceAll("{{VARIANT_LINES}}", variantLines)
		.replaceAll("{{NON_STUB_ARMS}}", nonStubArms)
		.replaceAll("{{STUB_ARMS}}", stubArms);
}
