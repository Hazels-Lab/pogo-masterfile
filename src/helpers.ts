export function isJsonObject(value: unknown): value is Record<string, unknown> {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}

// Natural-order string comparator: digit runs compare numerically so
// `Eye2` < `Eye10` and `Svdlc2spring0` < `Svdlc10`. Used as a sort
// comparator wherever generated identifiers are emitted in import lists,
// so the codegen output matches Biome's `organizeImports` (which does
// the same thing internally) and `bun run format` produces no diff.
export function compareNatural(a: string, b: string): number {
	return a.localeCompare(b, undefined, { numeric: true });
}

export function compareNaturalBy<T>(get: (value: T) => string): (a: T, b: T) => number {
	return (a, b) => compareNatural(get(a), get(b));
}

export function compareNaturalKeys<T extends [string, unknown]>([a]: T, [b]: T) {
	return compareNatural(a, b);
}
