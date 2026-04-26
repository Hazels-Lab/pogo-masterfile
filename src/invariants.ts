import type { Group } from "./group.ts";
import { isJsonObject } from "./helpers.ts";
import type { InferredProperty, InferredType } from "./infer.ts";
import { inferJsonType } from "./infer.ts";

export function deepEqual(a: unknown, b: unknown): boolean {
	if (a === b) return true;
	if (a === null || b === null) return false;
	if (typeof a !== "object" || typeof b !== "object") return false;

	const aIsArray = Array.isArray(a);
	const bIsArray = Array.isArray(b);
	if (aIsArray !== bIsArray) return false;

	if (aIsArray) {
		const arrA = a as unknown[];
		const arrB = b as unknown[];
		if (arrA.length !== arrB.length) return false;
		for (let i = 0; i < arrA.length; i += 1) {
			if (!deepEqual(arrA[i], arrB[i])) return false;
		}
		return true;
	}

	const objA = a as Record<string, unknown>;
	const objB = b as Record<string, unknown>;
	const keysA = Object.keys(objA);
	const keysB = Object.keys(objB);
	if (keysA.length !== keysB.length) return false;
	for (const key of keysA) {
		if (!Object.hasOwn(objB, key)) return false;
		if (!deepEqual(objA[key], objB[key])) return false;
	}
	return true;
}

export type InvariantNode =
	| { kind: "constant"; value: unknown }
	| { kind: "templateIdTie" }
	| { kind: "templateIdSlice"; prefix: string; suffix: string }
	| { kind: "nested"; children: InvariantTree };

export type InvariantTree = Map<string, InvariantNode>;

export function detectInvariants(group: Group): InvariantTree {
	const values = group.entries.map((e) => e.data[group.discriminator]);
	const templateIds = group.entries.map((e) => e.templateId);
	return walkInvariants(values, templateIds);
}

function walkInvariants(values: readonly unknown[], templateIds: readonly string[]): InvariantTree {
	const tree: InvariantTree = new Map();

	// Collect keys present in ANY entry at this level.
	const allKeys = new Set<string>();
	for (const v of values) {
		if (isJsonObject(v)) {
			for (const k of Object.keys(v)) allKeys.add(k);
		}
	}

	for (const key of allKeys) {
		// Requirement: every entry has this key at this level.
		const everyPresent = values.every((v) => isJsonObject(v) && Object.hasOwn(v, key));
		if (!everyPresent) continue;

		const childValues = values.map((v) => (v as Record<string, unknown>)[key]);

		// Kind 2: every value equals that entry's templateId.
		const isKind2 = childValues.every((cv, i) => cv === templateIds[i]);
		if (isKind2) {
			tree.set(key, { kind: "templateIdTie" });
			continue;
		}

		// Kind 1: every value deep-equal to the first.
		const isKind1 = childValues.every((cv) => deepEqual(cv, childValues[0]));
		if (isKind1) {
			tree.set(key, { kind: "constant", value: childValues[0] });
			continue;
		}

		// Kind 3: every value is a consistent prefix/suffix slice of its templateId.
		// (templateIdTie above is the empty/empty special case, so it wins; this picks
		// up affix-derivable strings like value="POKEMON_TYPE_BUG" inside templateId
		// "COMBAT_POKEMON_TYPE_BUG".)
		const allNonEmptyStrings = childValues.every((cv): cv is string => typeof cv === "string" && cv.length > 0);
		if (allNonEmptyStrings) {
			const slice = detectTemplateIdSlice(childValues, templateIds);
			if (slice) {
				tree.set(key, { kind: "templateIdSlice", prefix: slice.prefix, suffix: slice.suffix });
				continue;
			}
		}

		// Recurse into nested objects — but only if every entry has an object here.
		const everyObject = childValues.every(isJsonObject);
		if (everyObject) {
			const nested = walkInvariants(childValues, templateIds);
			if (nested.size > 0) {
				tree.set(key, { kind: "nested", children: nested });
			}
		}
	}

	return tree;
}

// Encodes a (prefix, suffix) pair as a single string key using a NUL separator.
// templateIds and field values come from JSON and never contain NUL, so this is
// unambiguous for the masterfile.
const SPLIT_SEP = "\0";

function allSplits(templateId: string, value: string): Set<string> {
	const splits = new Set<string>();
	let i = templateId.indexOf(value);
	while (i >= 0) {
		splits.add(`${templateId.slice(0, i)}${SPLIT_SEP}${templateId.slice(i + value.length)}`);
		i = templateId.indexOf(value, i + 1);
	}
	return splits;
}

function detectTemplateIdSlice(values: readonly string[], templateIds: readonly string[]): { prefix: string; suffix: string } | null {
	if (values.length === 0) return null;

	const candidates = values.map((v, i) => allSplits(templateIds[i]!, v));
	if (candidates.some((set) => set.size === 0)) return null;

	const [first, ...rest] = candidates;
	const shared = [...first!].filter((key) => rest.every((s) => s.has(key)));
	if (shared.length === 0) return null;

	// Tiebreak: prefer the split with the longest prefix — matches human reading order
	// (e.g. "COMBAT_" + "POKEMON_TYPE_BUG" reads better than "" + "...BUG" with a long suffix).
	shared.sort((a, b) => {
		const aPrefixLen = a.indexOf(SPLIT_SEP);
		const bPrefixLen = b.indexOf(SPLIT_SEP);
		return bPrefixLen - aPrefixLen;
	});
	const [prefix, suffix] = shared[0]!.split(SPLIT_SEP) as [string, string];

	// Empty/empty is templateIdTie territory (and that check ran earlier with `===`).
	// If we land here it means the slice degenerates — bail so existing kinds win.
	if (prefix === "" && suffix === "") return null;
	return { prefix, suffix };
}

export function invariantsToInferredType(tree: InvariantTree): InferredType {
	const properties: InferredProperty[] = [...tree.entries()]
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([name, node]) => {
			if (node.kind === "constant") {
				return { name, optional: false, type: inferJsonType(node.value) };
			}
			if (node.kind === "templateIdTie") {
				return {
					name,
					optional: false,
					type: { kind: "templateIdReference" },
				};
			}
			if (node.kind === "templateIdSlice") {
				return {
					name,
					optional: false,
					type: { kind: "templateIdSlice", prefix: node.prefix, suffix: node.suffix },
				};
			}
			return {
				name,
				optional: false,
				type: invariantsToInferredType(node.children),
			};
		});

	return { kind: "object", properties };
}

export function stripInvariantsFromWidened(type: InferredType, tree: InvariantTree): InferredType {
	if (type.kind !== "object") return type;
	const stripped: InferredProperty[] = [];
	for (const prop of type.properties) {
		const node = tree.get(prop.name);
		if (!node) {
			stripped.push(prop);
			continue;
		}
		if (node.kind === "constant" || node.kind === "templateIdTie" || node.kind === "templateIdSlice") {
			// Leaf invariant — drop this property.
			continue;
		}
		// Nested invariants — recurse.
		const nestedStripped = stripInvariantsFromWidened(prop.type, node.children);
		if (nestedStripped.kind === "object" && nestedStripped.properties.length === 0) {
			// All children stripped — drop the container.
			continue;
		}
		stripped.push({ ...prop, type: nestedStripped });
	}
	return { kind: "object", properties: stripped };
}

export function stripInvariantsFromValue(value: unknown, tree: InvariantTree): unknown {
	if (!isJsonObject(value)) return value;
	const result: Record<string, unknown> = {};
	for (const [key, childValue] of Object.entries(value)) {
		const node = tree.get(key);
		if (!node) {
			result[key] = childValue;
			continue;
		}
		if (node.kind === "constant" || node.kind === "templateIdTie" || node.kind === "templateIdSlice") {
			continue;
		}
		const strippedChild = stripInvariantsFromValue(childValue, node.children);
		if (isJsonObject(strippedChild) && Object.keys(strippedChild).length === 0) {
			continue;
		}
		result[key] = strippedChild;
	}
	return result;
}
