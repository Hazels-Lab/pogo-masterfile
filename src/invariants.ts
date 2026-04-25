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
