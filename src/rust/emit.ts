import type { Entry, Group } from "../group.ts";
import type { InferredType, ObjectType } from "../infer.ts";
import { inferJsonTypes, widenType } from "../infer.ts";
import { pascalCase, snakeCase } from "../naming.ts";
import { clusterByFingerprint, fingerprintFileName } from "../split.ts";

// When a group has more than this many distinct payload shapes (fingerprint
// clusters), emit a single flat struct with all fields optional rather than
// one struct + enum variant per shape. Above this threshold the enum becomes
// noise (pokemonSettings has 1217 clusters because each Pokémon has many
// independent optional fields, producing combinatorial fingerprints — emitting
// 1217 enum variants is unreadable). The 1-cluster path always uses a single
// struct anyway, and 2-N clusters where N is small is where enums earn their
// keep (avatarItemDisplay's 2-shape display-string-id vs misc).
const MAX_CLUSTERS_FOR_ENUM = 4;

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
// object types route through `emitOrReuseStruct` which deduplicates by shape.
function rustType(t: InferredType, parentName: string, fieldName: string, pool: StructPool): string {
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
			return `Vec<${rustType(t.element, parentName, fieldName, pool)}>`;
		case "tuple": {
			// Tuples with all items of the same Rust type become fixed-length
			// arrays `[T; N]` (e.g., `attackScalar: [f64; 18]` for 18 type
			// matchups). Tuples with mixed item types become actual Rust
			// tuples `(T1, T2, …)` so per-position type information is
			// preserved (e.g., `[someStruct, anotherStruct]` JSON round-trips
			// as a Rust 2-tuple via serde).
			if (t.items.length === 0) return "Vec<serde_json::Value>";
			const itemTypes = t.items.map((item) => rustType(item, parentName, fieldName, pool));
			const allSame = itemTypes.every((ty) => ty === itemTypes[0]);
			return allSame ? `[${itemTypes[0]}; ${itemTypes.length}]` : `(${itemTypes.join(", ")})`;
		}
		case "object": {
			const candidate = `${parentName}${pascalCase(fieldName)}`;
			return emitOrReuseStruct(candidate, t, pool);
		}
		case "union": {
			// Rust idiom: T | null collapses to Option<T>. Other heterogeneous
			// unions can't be cleanly modeled without inventing names; punt.
			if (t.variants.length === 2) {
				const nullIdx = t.variants.findIndex((v) => v.kind === "null");
				if (nullIdx !== -1) {
					const other = t.variants[1 - nullIdx];
					if (other) return `Option<${rustType(other, parentName, fieldName, pool)}>`;
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
		const fieldName = snakeCase(prop.name);
		const inner = rustType(prop.type, name, prop.name, pool);
		const fieldType = prop.optional ? `Option<${inner}>` : inner;
		lines.push(`    pub ${fieldName}: ${fieldType},`);
		shapeParts.push(`${fieldName}:${fieldType}`);
	}
	lines.push("}");
	return { body: lines.join("\n"), shape: shapeParts.sort().join(",") };
}

function emitOrReuseStruct(candidateName: string, type: ObjectType, pool: StructPool): string {
	// Generate the body first so we know the shape — but we need a name to
	// generate it (because nested objects reference it). Use the candidate
	// name provisionally; if shape matches an existing struct, throw away the
	// emission and reuse the existing one.
	const { body, shape } = structBody(candidateName, type, pool);

	const existing = pool.byShape.get(shape);
	if (existing) return existing;

	let finalName = candidateName;
	let suffix = 2;
	while (pool.byName.has(finalName)) {
		finalName = `${candidateName}V${suffix}`;
		suffix += 1;
	}
	pool.byName.add(finalName);
	pool.byShape.set(shape, finalName);
	// If we suffixed the name, we need to re-emit with the final name (the body
	// was generated with the candidate). For empty structs there's no body
	// difference; for non-empty we re-run structBody. This is uncommon (only
	// happens on shape mismatch for the same candidate name).
	if (finalName !== candidateName) {
		const { body: finalBody } = structBody(finalName, type, pool);
		pool.deferred.push(finalBody);
	} else {
		pool.deferred.push(body);
	}
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

function header(discriminator: string): string {
	return `// Generated from Pokémon GO masterfile — group "${discriminator}".`;
}

const SERDE_IMPORT = `use serde::{Deserialize, Serialize};`;

function stubStruct(name: string): string {
	return ["#[derive(Debug, Clone, Serialize, Deserialize)]", `pub struct ${name};`].join("\n");
}

function file(blocks: readonly string[]): string {
	// Join with one blank line between blocks; trailing newline.
	return `${blocks.join("\n\n")}\n`;
}

export function emitGroupModule(group: Group): string {
	const baseName = pascalCase(group.discriminator);

	if (isStubGroup(group)) {
		return file([header(group.discriminator), SERDE_IMPORT, stubStruct(baseName)]);
	}

	const pool = newPool();
	const clusters = clusterByFingerprint(group);

	if (clusters.length === 1 || clusters.length > MAX_CLUSTERS_FOR_ENUM) {
		// Single-shape OR too many shapes to enumerate cleanly. Emit one flat
		// struct using the type inferred from the entire group's payloads —
		// fields that aren't universally present become Option<T>.
		const inferred = inferPayloadType(group.entries, group.discriminator);
		emitOrReuseStruct(baseName, inferred, pool);
		return file([header(group.discriminator), SERDE_IMPORT, ...pool.deferred]);
	}

	// Small number of clusters → emit each as a variant struct + an enum that
	// wraps them. Nested structs are deduplicated across variants via the pool.
	clusters.sort((a, b) => b.entries.length - a.entries.length);
	const enumVariants: string[] = [];
	for (const cluster of clusters) {
		const variantName = pascalCase(fingerprintFileName(cluster.fingerprint));
		const structName = `${baseName}${variantName}`;
		const inferred = inferPayloadType(cluster.entries, group.discriminator);
		const finalName = emitOrReuseStruct(structName, inferred, pool);
		enumVariants.push(`    ${variantName}(${finalName}),`);
	}
	const enumBlock = ["#[derive(Debug, Clone, Serialize, Deserialize)]", "#[serde(untagged)]", `pub enum ${baseName} {`, ...enumVariants, "}"].join("\n");

	return file([header(group.discriminator), SERDE_IMPORT, ...pool.deferred, enumBlock]);
}

// Bundle every singleton group (entries.length === 1) into one module.
// Each singleton becomes a struct (or unit struct for stub entries) named
// after its discriminator (PascalCased). Reduces the file count dramatically
// — without this each of ~150+ singletons would have its own .rs file.
export function emitSingletonsModule(singletons: readonly Group[]): string {
	const sorted = [...singletons].sort((a, b) => pascalCase(a.discriminator).localeCompare(pascalCase(b.discriminator)));
	const pool = newPool();
	const stubs: string[] = [];

	for (const group of sorted) {
		const name = pascalCase(group.discriminator);
		if (isStubGroup(group)) {
			stubs.push(stubStruct(name));
			continue;
		}
		const inferred = inferPayloadType(group.entries, group.discriminator);
		emitOrReuseStruct(name, inferred, pool);
	}

	return file(["// Generated from Pokémon GO masterfile — singletons (one-of-a-kind entries).", SERDE_IMPORT, ...stubs, ...pool.deferred]);
}

export function emitLibFile(moduleNames: readonly string[]): string {
	const lines: string[] = ["// Generated from Pokémon GO masterfile — root crate barrel.", ""];
	for (const name of [...moduleNames].sort()) {
		lines.push(`pub mod ${name};`);
	}
	lines.push("");
	return lines.join("\n");
}
