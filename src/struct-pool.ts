import type { ObjectType } from "./infer.ts";

// Pool tracks already-emitted nested struct definitions for deduplication
// within a code-generation unit (typically one Rust module or one Go package).
// Two structs with the same shape (same fields, same field types) collapse
// to a single emission — pokemonSettings's many fingerprint clusters all
// share things like a Camera struct that we'd otherwise duplicate per
// cluster. The shape-string is computed by the language-specific
// `structBody` and used here only as an opaque dedup key.
//
// Per-language pools may extend this base with additional state (e.g. Go's
// `usesRawJSON` flag tracks whether `encoding/json` needs to be imported),
// while sharing the dedup machinery in this module.
export interface StructPoolBase {
	byShape: Map<string, string>; // hashed shape → canonical struct name
	byName: Set<string>; // names already taken (for collision-suffixing)
	deferred: string[]; // emitted struct definitions in document order
}

// Language-specific struct emitter. Produces the textual struct/type
// definition for `name` from `type`, plus a `shape` string that is the
// dedup key. Two calls producing the same `shape` are considered equivalent
// regardless of the candidate name. An empty-shape result (e.g., a struct
// with no fields) opts out of shape-based dedup — every empty struct gets
// its own emission so name-preserving callers can still rely on getting
// back the name they asked for.
export type StructBodyFn<P extends StructPoolBase> = (name: string, type: ObjectType, pool: P) => { body: string; shape: string };

// emitOrReuseStruct: shape-based deduplication. If an identically-shaped
// struct already exists, return its name. Otherwise emit and register. Used
// for *nested* structs where the name is auto-derived from a field and any
// available equivalent type works (preferring fewer total emissions).
export function emitOrReuseStruct<P extends StructPoolBase>(candidateName: string, type: ObjectType, pool: P, structBody: StructBodyFn<P>): string {
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
export function emitNamedStruct<P extends StructPoolBase>(candidateName: string, type: ObjectType, pool: P, structBody: StructBodyFn<P>): string {
	let finalName = candidateName;
	let suffix = 2;
	while (pool.byName.has(finalName)) finalName = `${candidateName}V${suffix++}`;
	pool.byName.add(finalName);
	const { body } = structBody(finalName, type, pool);
	pool.deferred.push(body);
	return finalName;
}
