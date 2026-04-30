import { isJsonObject } from "./helpers.ts";

export type NumericKind = "uint" | "int" | "float";

// Field names whose source JSON has been observed using decimal syntax (e.g.
// "1.0", "0.5", "1e3"). JS's JSON.parse collapses "1.0" and "1" to the same
// Number, so we can't recover float-vs-int from the parsed values alone — we
// have to pre-scan the source text. When this set is populated (via
// `configureFloatFieldHints`), inferObjectType biases any number field whose
// name appears in the set toward `float` regardless of the numeric values
// observed. False positives (treating an integer field as float) are
// negligible cost — f64 represents integers up to 2^53 exactly, well above
// any masterfile value. False negatives (failing to mark a float field) are
// the costly case: serde refuses 1.0 → u64 conversion at deserialize time.
let floatFieldHints: ReadonlySet<string> = new Set();

export function configureFloatFieldHints(hints: ReadonlySet<string>): void {
	floatFieldHints = hints;
}

// Two regex passes over the raw masterfile JSON text. JSON numbers are integers
// when they have no fractional or exponent part, floats otherwise — but JS's
// JSON.parse erases the distinction, so we recover it from the source text.
//
// Pattern A captures `"key": <float-number>` for scalar fields.
// Pattern B captures `"key": [...<float-number>...]` for array-of-numbers
// fields (e.g. `"buddyPortraitOffset": [-250.0, 0.0, 0.0]`). The character
// class inside the brackets restricts matches to numeric content — avoids
// false positives from arrays of strings or objects.
//
// Field names are simple identifiers in the masterfile (no escaped quotes),
// so `[^"\\]+` is safe.
export function scanFloatFields(rawJson: string): Set<string> {
	const fields = new Set<string>();
	const numFrac = String.raw`-?\d+(?:\.\d+(?:[eE][-+]?\d+)?|[eE][-+]?\d+)`;
	const direct = new RegExp(String.raw`"([^"\\]+)"\s*:\s*${numFrac}`, "g");
	const inArray = new RegExp(String.raw`"([^"\\]+)"\s*:\s*\[[\s\d.,\-+eE]*?${numFrac}`, "g");
	for (const m of rawJson.matchAll(direct)) fields.add(m[1] ?? "");
	for (const m of rawJson.matchAll(inArray)) fields.add(m[1] ?? "");
	return fields;
}

// Cap on how many distinct string literals are kept when widening for XData.
// At or below this, the literal union is preserved (precision for validation);
// above it, the field widens to bare `string` (avoids huge unions for things
// like asset-name fields that exhaust the type printer).
export const STRING_LITERAL_UNION_CAP = 64;

export interface InferredProperty {
	name: string;
	type: InferredType;
	optional: boolean;
}

export interface NullType {
	kind: "null";
}

export interface BooleanType {
	kind: "boolean";
	literals: boolean[];
}

export interface NumberType {
	kind: "number";
	numericKind: NumericKind;
	literals: number[];
}

export interface StringType {
	kind: "string";
	literals: string[];
}

export interface ObjectType {
	kind: "object";
	properties: InferredProperty[];
}

export interface TupleType {
	kind: "tuple";
	items: InferredType[];
}

export interface ArrayType {
	kind: "array";
	element: InferredType;
}

export interface UnionType {
	kind: "union";
	variants: InferredType[];
}

export interface TemplateIdReferenceType {
	kind: "templateIdReference";
}

export interface TemplateIdSliceType {
	kind: "templateIdSlice";
	prefix: string;
	suffix: string;
}

export type InferredType =
	| NullType
	| BooleanType
	| NumberType
	| StringType
	| ObjectType
	| TupleType
	| ArrayType
	| UnionType
	| TemplateIdReferenceType
	| TemplateIdSliceType;

export class InferenceBuilder {
	readonly #values: unknown[] = [];

	add(value: unknown): this {
		this.#values.push(value);
		return this;
	}

	build(): InferredType {
		return inferJsonTypes(this.#values);
	}
}

export function inferJsonType(value: unknown): InferredType {
	return inferJsonTypes([value]);
}

export function widenType(type: InferredType): InferredType {
	switch (type.kind) {
		case "null":
			return type;
		case "templateIdReference":
		case "templateIdSlice":
			// Widening drops the TemplateID generic reference — XData is generic-free.
			return { kind: "string", literals: [] };
		case "boolean":
			return { kind: "boolean", literals: [] };
		case "number":
			return { kind: "number", numericKind: type.numericKind, literals: [] };
		case "string":
			return type.literals.length > 0 && type.literals.length <= STRING_LITERAL_UNION_CAP
				? { kind: "string", literals: type.literals }
				: { kind: "string", literals: [] };
		case "object":
			return {
				kind: "object",
				properties: type.properties.map((p) => ({
					name: p.name,
					optional: p.optional,
					type: widenType(p.type),
				})),
			};
		case "tuple":
			return { kind: "tuple", items: type.items.map(widenType) };
		case "array":
			return { kind: "array", element: widenType(type.element) };
		case "union":
			return { kind: "union", variants: type.variants.map(widenType) };
	}
}

export function inferJsonTypes(values: readonly unknown[]): InferredType {
	if (values.length === 0) return { kind: "union", variants: [] };

	const nullCount = values.filter((value) => value === null).length;
	const booleans = values.filter((value): value is boolean => typeof value === "boolean");
	const numbers = values.filter((value): value is number => typeof value === "number");
	const strings = values.filter((value): value is string => typeof value === "string");
	const arrays = values.filter((value): value is unknown[] => Array.isArray(value));
	const objects = values.filter(isJsonObject);

	const recognized = nullCount + booleans.length + numbers.length + strings.length + arrays.length + objects.length;
	if (recognized !== values.length) {
		throw new Error("Cannot infer non-JSON value");
	}

	const variants: InferredType[] = [];
	if (nullCount > 0) variants.push({ kind: "null" });
	if (booleans.length > 0) variants.push(inferBooleanType(booleans));
	if (numbers.length > 0) variants.push(inferNumberType(numbers));
	if (strings.length > 0) variants.push(inferStringType(strings));
	if (objects.length > 0) variants.push(inferObjectType(objects));
	if (arrays.length > 0) variants.push(inferArrayType(arrays));

	if (variants.length === 1) return variants[0]!;
	return {
		kind: "union",
		variants: variants.sort((a, b) => variantSortKey(a).localeCompare(variantSortKey(b))),
	};
}

function inferBooleanType(values: readonly boolean[]): BooleanType {
	return {
		kind: "boolean",
		literals: [...new Set(values)].sort((a, b) => Number(a) - Number(b)),
	};
}

function inferNumberType(values: readonly number[]): NumberType {
	for (const value of values) {
		if (!Number.isFinite(value)) {
			throw new Error(`Cannot infer non-finite number ${value}`);
		}
	}

	return {
		kind: "number",
		numericKind: inferNumericKind(values),
		literals: [...new Set(values)].sort((a, b) => a - b),
	};
}

function inferNumericKind(values: readonly number[]): NumericKind {
	if (values.some((value) => !Number.isInteger(value))) return "float";
	if (values.some((value) => value < 0)) return "int";
	return "uint";
}

function inferStringType(values: readonly string[]): StringType {
	return {
		kind: "string",
		literals: [...new Set(values)].sort((a, b) => a.localeCompare(b)),
	};
}

function inferObjectType(values: readonly Record<string, unknown>[]): ObjectType {
	const propertyValues = new Map<string, unknown[]>();
	const propertyCounts = new Map<string, number>();

	for (const value of values) {
		for (const [key, propertyValue] of Object.entries(value)) {
			const collected = propertyValues.get(key);
			if (collected) collected.push(propertyValue);
			else propertyValues.set(key, [propertyValue]);
			propertyCounts.set(key, (propertyCounts.get(key) ?? 0) + 1);
		}
	}

	const properties = [...propertyValues.entries()]
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([name, observedValues]) => {
			let type = inferJsonTypes(observedValues);
			// Float-field hint: if the source JSON ever wrote this field with
			// decimal syntax (either a scalar value or any element of an array
			// of numbers), treat numeric content of this field as float
			// regardless of the values JS surfaced after `JSON.parse`. The
			// propagation walks into array/tuple element types but stops at
			// object boundaries (which have their own field names handled
			// independently).
			if (floatFieldHints.has(name)) type = applyFloatToNumbers(type);
			return {
				name,
				type,
				optional: propertyCounts.get(name) !== values.length,
			};
		});

	return { kind: "object", properties };
}

function applyFloatToNumbers(t: InferredType): InferredType {
	switch (t.kind) {
		case "number":
			return { ...t, numericKind: "float" };
		case "array":
			return { kind: "array", element: applyFloatToNumbers(t.element) };
		case "tuple":
			return { kind: "tuple", items: t.items.map(applyFloatToNumbers) };
		case "union":
			return { kind: "union", variants: t.variants.map(applyFloatToNumbers) };
		default:
			// Stop at object/string/boolean/null/templateId leaves — float
			// hint only applies to numeric content reachable via array/tuple
			// containers within this field's type.
			return t;
	}
}

function inferArrayType(values: readonly unknown[][]): TupleType | ArrayType {
	const firstLength = values[0]?.length ?? 0;
	const isFixedLength = values.every((value) => value.length === firstLength);
	if (isFixedLength) {
		const allItems = values.flat();
		const tupleNumericKind =
			allItems.length > 0 && allItems.every((value): value is number => typeof value === "number") ? inferNumericKind(allItems) : undefined;
		return {
			kind: "tuple",
			items: Array.from({ length: firstLength }, (_, index) => {
				const item = inferJsonTypes(values.map((value) => value[index]));
				if (tupleNumericKind && item.kind === "number") {
					return { ...item, numericKind: tupleNumericKind };
				}
				return item;
			}),
		};
	}

	return {
		kind: "array",
		element: inferJsonTypes(values.flat()),
	};
}

function variantSortKey(type: InferredType): string {
	switch (type.kind) {
		case "null":
			return "0-null";
		case "boolean":
			return "1-boolean";
		case "number":
			return "2-number";
		case "string":
			return "3-string";
		case "object":
			return "4-object";
		case "tuple":
			return "5-tuple";
		case "array":
			return "6-array";
		case "union":
			return "7-union";
		case "templateIdReference":
			return "8-templateIdReference";
		case "templateIdSlice":
			return "9-templateIdSlice";
	}
}
