import type { Entry, Group } from "../group.ts";
import type { InferredType, ObjectType } from "../infer.ts";
import { inferJsonTypes, widenType } from "../infer.ts";
import { pascalCase, snakeCase } from "../naming.ts";
import { clusterByFingerprint } from "../split.ts";

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

// Pool tracks already-emitted nested struct definitions for deduplication
// within a group. Two structs with the same shape (same fields, same field
// types) collapse to a single emission — pokemonSettings's many clusters all
// share things like a Camera struct that we'd otherwise duplicate per cluster.
interface StructPool {
	byShape: Map<string, string>; // hashed shape → canonical struct name
	byName: Set<string>; // names already taken (for collision-suffixing)
	deferred: string[]; // emitted struct definitions in document order
}

function newPool(): StructPool {
	return { byShape: new Map(), byName: new Set(), deferred: [] };
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
			// MAX_TUPLE_ARITY fall back to `Vec<serde_json::Value>` (Rust std
			// doesn't impl Debug/Serialize/Deserialize for tuples past 12).
			if (t.items.length === 0) return "Vec<serde_json::Value>";
			const itemTypes = t.items.map((item) => rustType(item, fieldName, pool));
			const allSame = itemTypes.every((ty) => ty === itemTypes[0]);
			if (allSame) {
				return t.items.length <= MAX_FIXED_ARRAY_LEN ? `[${itemTypes[0]}; ${itemTypes.length}]` : `Vec<${itemTypes[0]}>`;
			}
			return t.items.length <= MAX_TUPLE_ARITY ? `(${itemTypes.join(", ")})` : "Vec<serde_json::Value>";
		}
		case "object":
			return emitOrReuseStruct(pascalCase(fieldName), t, pool);
		case "union": {
			// Rust idiom: T | null collapses to Option<T>. Other heterogeneous
			// unions can't be cleanly modeled without inventing names; punt.
			if (t.variants.length === 2) {
				const nullIdx = t.variants.findIndex((v) => v.kind === "null");
				if (nullIdx !== -1) {
					const other = t.variants[1 - nullIdx];
					if (other) return `Option<${rustType(other, fieldName, pool)}>`;
				}
			}
			return "serde_json::Value";
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

// emitOrReuseStruct: shape-based deduplication. If an identically-shaped
// struct already exists, return its name. Otherwise emit and register. Used
// for *nested* structs where the name is auto-derived from a field and any
// available equivalent type works (preferring fewer total emissions).
function emitOrReuseStruct(candidateName: string, type: ObjectType, pool: StructPool): string {
	const { body, shape } = structBody(candidateName, type, pool);
	if (shape !== "") {
		const existing = pool.byShape.get(shape);
		if (existing) return existing;
	}

	let finalName = candidateName;
	let suffix = 2;
	while (pool.byName.has(finalName)) {
		finalName = `${candidateName}V${suffix}`;
		suffix += 1;
	}
	pool.byName.add(finalName);
	if (shape !== "") pool.byShape.set(shape, finalName);
	if (finalName !== candidateName) {
		const { body: finalBody } = structBody(finalName, type, pool);
		pool.deferred.push(finalBody);
	} else {
		pool.deferred.push(body);
	}
	return finalName;
}

// emitNamedStruct: name-preserving emission. Always emits a struct under the
// requested name (V2-suffixed only if that exact name is already taken).
// Used for *top-level* types (group roots, cluster variants, singletons)
// where the name carries semantic meaning and shape-collapsing across
// unrelated types would break wrapper-macro references.
//
// Critical: reserve `finalName` in `pool.byName` *before* invoking structBody,
// which triggers nested emit calls. Otherwise an inner field of the same
// pascalCase name (e.g., a `consolation_items` field inside the cluster
// variant `ConsolationItems`) claims the name first and the outer struct
// silently duplicates it.
function emitNamedStruct(candidateName: string, type: ObjectType, pool: StructPool): string {
	let finalName = candidateName;
	let suffix = 2;
	while (pool.byName.has(finalName)) finalName = `${candidateName}V${suffix++}`;
	pool.byName.add(finalName);
	const { body } = structBody(finalName, type, pool);
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

export function emitGroupModule(group: Group): string {
	const baseName = pascalCase(group.discriminator);

	if (isStubGroup(group)) {
		return file([header(group.discriminator), SERDE_IMPORT, stubEntryWrapper(baseName)]);
	}

	const pool = newPool();
	const clusters = clusterByFingerprint(group);
	const snakeName = rustFieldIdent(group.discriminator);

	if (clusters.length === 1 || clusters.length > MAX_CLUSTERS_FOR_ENUM) {
		// Single-shape OR too many shapes to enumerate cleanly. Emit one flat
		// struct using the type inferred from the entire group's payloads —
		// fields that aren't universally present become Option<T>.
		const inferred = inferPayloadType(group.entries, group.discriminator);
		emitNamedStruct(baseName, inferred, pool);
		return file([header(group.discriminator), SERDE_IMPORT, ...pool.deferred, entryWrapper(baseName, snakeName)]);
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

		const inferred = inferPayloadType(cluster.entries, group.discriminator);
		const finalName = emitNamedStruct(variantName, inferred, pool);
		enumVariants.push(`    ${variantName}(${finalName}),`);
	}
	const enumBlock = ["#[derive(Debug, Clone, Serialize, Deserialize)]", "#[serde(untagged)]", `pub enum ${baseName} {`, ...enumVariants, "}"].join("\n");

	return file([header(group.discriminator), SERDE_IMPORT, ...pool.deferred, enumBlock, entryWrapper(baseName, snakeName)]);
}

// Bundle every singleton group (entries.length === 1) into one module. Each
// singleton emits an Entry/EntryData wrapper via the macro; with-payload
// singletons also emit their inner payload struct. Stubs need no inner
// struct since their `data` has only `templateId`.
export function emitSingletonsModule(singletons: readonly Group[]): string {
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
		wrappers.push(entryWrapper(name, rustFieldIdent(group.discriminator)));
	}

	return file(["//! Generated from Pokémon GO masterfile — singletons (one-of-a-kind entries).", SERDE_IMPORT, ...pool.deferred, ...wrappers]);
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
}

export function emitLibFile(moduleNames: readonly string[], variants: readonly EntryVariant[]): string {
	const sortedModules = [...moduleNames].sort();
	const sortedVariants = [...variants].sort((a, b) => a.variantName.localeCompare(b.variantName));

	// Disambiguate any rare pascalCase collisions (e.g., a camelCase discriminator
	// and a SCREAMING_SNAKE stub template-id that PascalCase to the same name).
	const usedVariantNames = new Set<string>();
	const variantLines: string[] = [];
	for (const v of sortedVariants) {
		let name = v.variantName;
		let suffix = 2;
		while (usedVariantNames.has(name)) name = `${v.variantName}V${suffix++}`;
		usedVariantNames.add(name);
		variantLines.push(`    ${name}(${v.modulePath}::${v.entryTypeName}),`);
	}

	const lines: string[] = [
		"//! Generated Rust types for the Pokémon GO masterfile.",
		"//!",
		"//! # Quick start",
		"//!",
		"//! ```no_run",
		"//! use pogo_masterfile_types::{parse_masterfile, MasterfileEntry};",
		"//!",
		'//! let json = std::fs::read_to_string("masterfile.json").unwrap();',
		"//! let entries = parse_masterfile(&json).unwrap();",
		"//! for entry in entries {",
		"//!     match entry {",
		"//!         MasterfileEntry::PokemonSettings(e) => {",
		'//!             println!("pokémon: {}", e.template_id);',
		"//!         }",
		"//!         _ => {}",
		"//!     }",
		"//! }",
		"//! ```",
		"//!",
		"//! # Generated structure",
		"//!",
		"//! Each masterfile discriminator maps to its own module containing three",
		"//! types:",
		"//!",
		"//! - **`Entry`** (e.g. [`pokemon_settings::PokemonSettingsEntry`]): the outer",
		"//!   JSON shape, `{ templateId, data: { ... } }`.",
		"//! - **`EntryData`** (e.g. [`pokemon_settings::PokemonSettingsEntryData`]): the",
		"//!   inner `data` object, with the discriminator-keyed payload field.",
		"//! - **The payload type** (e.g. [`pokemon_settings::PokemonSettings`]): the",
		"//!   shape of the payload itself. For multi-shape groups this is a Rust",
		"//!   enum dispatching to per-cluster variant structs.",
		"//!",
		"//! Singletons (entries unique by `templateId`) are bundled into a single",
		"//! [`singletons`] module rather than emitted one file each.",
		"",
		"use serde::{Deserialize, Serialize};",
		"",
		MACRO_DEFINITIONS,
		"",
		...sortedModules.map((n) => `pub mod ${n};`),
		"",
		"/// Every typed entry the Pokémon GO masterfile can hold.",
		"///",
		"/// Variants use `#[serde(untagged)]` — serde dispatches by trying each",
		"/// variant in declaration order and picking the first whose required",
		"/// fields are all present. Each non-stub Entry's `EntryData` carries a",
		"/// unique discriminator field, so dispatch is unambiguous in practice.",
		"///",
		"/// **Caveat:** stub entries (the few discriminators with",
		"/// `data: { templateId }` only) are shape-indistinguishable under untagged",
		"/// dispatch. They'll all deserialize to whichever stub variant is declared",
		"/// first alphabetically; inspect `template_id` to recover the specific kind.",
		"#[derive(Debug, Clone, Serialize, Deserialize)]",
		"#[serde(untagged)]",
		"pub enum MasterfileEntry {",
		...variantLines,
		"}",
		"",
		"/// Parse a masterfile JSON string into a vector of typed entries.",
		"///",
		"/// # Errors",
		"///",
		"/// Returns the underlying [`serde_json::Error`] on malformed JSON or on a",
		"/// JSON entry that doesn't match any [`MasterfileEntry`] variant.",
		"///",
		"/// # Example",
		"///",
		"/// ```no_run",
		'/// let json = std::fs::read_to_string("masterfile.json").unwrap();',
		"/// let entries = pogo_masterfile_types::parse_masterfile(&json).unwrap();",
		'/// println!("{} entries", entries.len());',
		"/// ```",
		"pub fn parse_masterfile(json: &str) -> serde_json::Result<Vec<MasterfileEntry>> {",
		"    serde_json::from_str(json)",
		"}",
		"",
	];
	return lines.join("\n");
}
