import type { Group } from "./group.ts";

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
	| { kind: "nested"; children: InvariantTree };

export type InvariantTree = Map<string, InvariantNode>;

function isJsonObject(value: unknown): value is Record<string, unknown> {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function detectInvariants(group: Group): InvariantTree {
	const values = group.entries.map((e) => e.data[group.discriminator]);
	const templateIds = group.entries.map((e) => e.templateId);
	return walkInvariants(values, templateIds);
}

function walkInvariants(
	values: readonly unknown[],
	templateIds: readonly string[],
): InvariantTree {
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
		const everyPresent = values.every(
			(v) => isJsonObject(v) && Object.hasOwn(v, key),
		);
		if (!everyPresent) continue;

		const childValues = values.map(
			(v) => (v as Record<string, unknown>)[key],
		);

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
