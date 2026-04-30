export function groupName(discriminator: string): string {
	return discriminator[0]!.toUpperCase() + discriminator.slice(1);
}

export function kebabCase(camelCase: string): string {
	return camelCase.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
}

// Convert any input casing (camelCase, PascalCase, SCREAMING_SNAKE, kebab-case)
// to snake_case. Used by Rust emit for module/file names and field names.
//
// Two-pass boundary detection handles acronyms correctly: the first pass
// inserts an underscore at lowercase→uppercase transitions (`maxStone` →
// `max_Stone`); the second handles uppercase-run-before-PascalWord (`ACount`
// → `A_Count`). Without the second pass, `maxStoneACount` → `max_stone_acount`
// which then round-trips through serde rename_all="camelCase" as
// `maxStoneAcount` — a different JSON field name.
export function snakeCase(input: string): string {
	return input
		.replace(/([a-z0-9])([A-Z])/g, "$1_$2")
		.replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2")
		.replace(/[^a-zA-Z0-9]+/g, "_")
		.toLowerCase()
		.replace(/_+/g, "_")
		.replace(/^_|_$/g, "");
}

export function pascalCase(input: string): string {
	return input
		.replace(/([a-z])([A-Z])/g, "$1 $2")
		.replace(/[^a-zA-Z0-9]+/g, " ")
		.trim()
		.split(/\s+/)
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		.join("");
}

export function sharedPrefix(ids: string[]): string {
	if (ids.length <= 1) return "";
	let p = ids[0]!;
	for (const id of ids) {
		while (!id.startsWith(p)) p = p.slice(0, -1);
		if (p === "") return "";
	}
	const lastUnderscore = p.lastIndexOf("_");
	return lastUnderscore >= 0 ? p.slice(0, lastUnderscore + 1) : "";
}

export function aliasSuffix(templateId: string, prefix: string): string {
	const tail = templateId.slice(prefix.length);
	if (tail === "") return "Root";
	const parts = tail.split(/[^a-zA-Z0-9]+/).filter(Boolean);
	if (parts.length === 0) return "Root";
	return parts.map((w) => w[0]!.toUpperCase() + w.slice(1).toLowerCase()).join("");
}

/**
 * Strips a trailing PascalCase token sequence from `suffix` if it matches `gName`
 * exactly at token boundaries.
 *
 * Why: per-variant alias names compose as `${gName}${suffix}`. When templateIds
 * end with the discriminator (e.g. `_ROLL_BACK` for the `rollBack` group), the
 * suffix carries a redundant copy of the group name and the final type name
 * doubles up: `RollBackAndroidSensorsRollBack` vs the desired `RollBackAndroidSensors`.
 *
 * Boundary discipline: the strip must be aligned to PascalCase token boundaries
 * — `XSettings` against `gName = "MoveSettings"` must NOT strip (the trailing
 * "Settings" is only a partial match, not the whole group name). Stripping that
 * would lose information.
 *
 * Empty-result fallback: when stripping the entire suffix would leave nothing,
 * return the original (the name would otherwise vanish or collide).
 *
 * Examples (also covered in stripGroupNameTail tests):
 *   stripGroupNameTail("AndroidSensorsRollBack", "RollBack")  → "AndroidSensors"
 *   stripGroupNameTail("Bug",                    "TypeEffective") → "Bug"
 *   stripGroupNameTail("XSettings",              "MoveSettings") → "XSettings"  (partial match)
 *   stripGroupNameTail("RollBack",               "RollBack")     → "RollBack"   (would empty)
 *   stripGroupNameTail("FooBar",                 "Bar")          → "Foo"
 */
export function stripGroupNameTail(suffix: string, gName: string): string {
	if (gName === "" || !suffix.endsWith(gName)) return suffix;
	const head = suffix.slice(0, suffix.length - gName.length);
	return head === "" ? suffix : head;
}

export function deriveGroupAliases(templateIds: string[], gName: string): Map<string, string> {
	const prefix = sharedPrefix(templateIds);
	const result = new Map<string, string>();
	const suffixToIds = new Map<string, string[]>();

	for (const id of templateIds) {
		const suffix = stripGroupNameTail(aliasSuffix(id, prefix), gName);
		const bucket = suffixToIds.get(suffix);
		if (bucket) bucket.push(id);
		else suffixToIds.set(suffix, [id]);
	}

	for (const [suffix, ids] of suffixToIds) {
		if (ids.length === 1) {
			result.set(ids[0]!, suffix);
			continue;
		}
		// Collision: re-derive from whole templateId.
		const reDerived = new Map<string, string[]>();
		for (const id of ids) {
			const s = stripGroupNameTail(aliasSuffix(id, ""), gName);
			const bucket = reDerived.get(s);
			if (bucket) bucket.push(id);
			else reDerived.set(s, [id]);
		}
		for (const [s, idList] of reDerived) {
			if (idList.length === 1) {
				result.set(idList[0]!, s);
			} else {
				// Still colliding — tie-break with numeric suffix, lexicographic order.
				const sorted = [...idList].sort();
				sorted.forEach((id, i) => {
					result.set(id, `${s}${i}`);
				});
			}
		}
	}

	return result;
}
