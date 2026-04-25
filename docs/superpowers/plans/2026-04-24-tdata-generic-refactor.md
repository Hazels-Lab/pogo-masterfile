# TData Generic Refactor Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the multi-generic per-field pattern in the TypeScript masterfile emitter with a single `TData` generic that carries a literal payload subset per variant, with invariants (field values present and equal across every variant) hoisted into the base interface body.

**Architecture:** Introduce a new `src/invariants.ts` module containing pure functions for detecting invariants (Kind 1 literal constants + Kind 2 templateId-ties), stripping them from the widened payload type, stripping them from raw JSON values, and converting invariant trees into `InferredType`. Rewrite `emitGroupFile` in `src/emit.ts` to use this pipeline. Delete the alias-planning + per-alias-generic machinery.

**Tech Stack:** TypeScript (Bun runtime), `bun:test`, Biome formatter. All source + tests colocated in `src/`. Design spec at [`docs/superpowers/specs/2026-04-24-tdata-generic-refactor-design.md`](../specs/2026-04-24-tdata-generic-refactor-design.md).

**Note on project conventions:**
- Tabs for indentation (Biome enforced), double-quoted strings.
- Tests co-located with source (`foo.ts` + `foo.test.ts`).
- `bun test` runs all tests. `bun run generate` regenerates the output packages. `bun run format` runs Biome.
- **Do NOT read** `packages/typescript/index.ts`, `packages/rust/lib.rs`, or `packages/go/main.go` — they're large generated files per `CLAUDE.md`.

---

## File Structure

**Created:**
- `src/invariants.ts` — types + pure invariant logic (detection / conversion / stripping / deep equality)
- `src/invariants.test.ts` — unit tests for all invariant functions

**Modified:**
- `src/emit.ts` — rewrite `emitGroupFile`, delete dead alias-planning code
- `src/emit.test.ts` — rewrite `emitGroupFile` assertions; add new tests

**Unchanged:**
- `src/infer.ts` — `widenType` stays as-is; ADT stays as-is
- `src/group.ts`, `src/naming.ts`, `src/fixtures.ts`, `src/write.ts`, `src/generate.ts` — no changes

---

## Task 1: Create `src/invariants.ts` module shell + `deepEqual` helper

**Files:**
- Create: `src/invariants.ts`
- Create: `src/invariants.test.ts`

- [ ] **Step 1: Write the failing test**

Create `src/invariants.test.ts`:

```typescript
import { describe, expect, test } from "bun:test";
import { deepEqual } from "./invariants.ts";

describe("deepEqual", () => {
	test("returns true for equal primitives", () => {
		expect(deepEqual(1, 1)).toBe(true);
		expect(deepEqual("a", "a")).toBe(true);
		expect(deepEqual(true, true)).toBe(true);
		expect(deepEqual(null, null)).toBe(true);
	});

	test("returns false for unequal primitives", () => {
		expect(deepEqual(1, 2)).toBe(false);
		expect(deepEqual("a", "b")).toBe(false);
		expect(deepEqual(true, false)).toBe(false);
		expect(deepEqual(null, undefined)).toBe(false);
		expect(deepEqual(1, "1")).toBe(false);
	});

	test("compares arrays element-wise", () => {
		expect(deepEqual([1, 2, 3], [1, 2, 3])).toBe(true);
		expect(deepEqual([1, 2, 3], [1, 2])).toBe(false);
		expect(deepEqual([1, 2], [1, 2, 3])).toBe(false);
		expect(deepEqual([1, 2, 3], [1, 2, 4])).toBe(false);
	});

	test("compares objects key-wise", () => {
		expect(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
		expect(deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 })).toBe(true);
		expect(deepEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false);
		expect(deepEqual({ a: 1, b: 2 }, { a: 1 })).toBe(false);
		expect(deepEqual({ a: 1, b: 2 }, { a: 1, b: 3 })).toBe(false);
	});

	test("recurses into nested structures", () => {
		expect(deepEqual({ a: [1, { b: 2 }] }, { a: [1, { b: 2 }] })).toBe(true);
		expect(deepEqual({ a: [1, { b: 2 }] }, { a: [1, { b: 3 }] })).toBe(false);
	});

	test("distinguishes arrays from objects", () => {
		expect(deepEqual([], {})).toBe(false);
	});
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test src/invariants.test.ts`
Expected: FAIL — module `./invariants.ts` not found.

- [ ] **Step 3: Implement `deepEqual`**

Create `src/invariants.ts`:

```typescript
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
```

- [ ] **Step 4: Run test to verify it passes**

Run: `bun test src/invariants.test.ts`
Expected: 6 pass, 0 fail.

- [ ] **Step 5: Commit**

```bash
git add src/invariants.ts src/invariants.test.ts
git commit -m "feat: add deepEqual helper in new invariants module"
```

---

## Task 2: Add `InvariantTree` types + `detectInvariants`

**Files:**
- Modify: `src/invariants.ts` — add types and function
- Modify: `src/invariants.test.ts` — add tests

- [ ] **Step 1: Write the failing tests**

Append to `src/invariants.test.ts`:

```typescript
import { detectInvariants } from "./invariants.ts";
import { MOCK_MASTERFILE } from "./fixtures.ts";
import { groupEntries } from "./group.ts";

describe("detectInvariants", () => {
	test("detects Kind 2 (templateId tie) at top-level", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const tree = detectInvariants(group);
		expect(tree.get("attackType")).toEqual({ kind: "templateIdTie" });
	});

	test("detects Kind 1 (constant) nested inside an object", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const tree = detectInvariants(group);
		const effectGroup = tree.get("effectGroup");
		if (!effectGroup || effectGroup.kind !== "nested") {
			throw new Error("expected effectGroup to be a nested node");
		}
		expect(effectGroup.children.get("accuracyChance")).toEqual({
			kind: "constant",
			value: 1,
		});
	});

	test("detects Kind 2 nested deeply", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const tree = detectInvariants(group);
		const effectGroup = tree.get("effectGroup");
		if (!effectGroup || effectGroup.kind !== "nested") {
			throw new Error("expected effectGroup to be a nested node");
		}
		const nested = effectGroup.children.get("nested");
		if (!nested || nested.kind !== "nested") {
			throw new Error("expected effectGroup.nested to be a nested node");
		}
		expect(nested.children.get("combatType")).toEqual({ kind: "templateIdTie" });
	});

	test("does not flag fields with varying values", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;
		const tree = detectInvariants(group);
		// attackScalar varies per-entry → not an invariant
		expect(tree.has("attackScalar")).toBe(false);
		const effectGroup = tree.get("effectGroup");
		if (!effectGroup || effectGroup.kind !== "nested") {
			throw new Error("expected effectGroup to be a nested node");
		}
		// typeCode varies ("BUG" vs "DARK") → not an invariant
		expect(effectGroup.children.has("typeCode")).toBe(false);
		// tags varies (length differs) → not an invariant
		expect(effectGroup.children.has("tags")).toBe(false);
		// windows varies ([0, 250] vs [0, 300]) → not an invariant
		expect(effectGroup.children.has("windows")).toBe(false);
	});

	test("flags a tuple constant via deep equality", () => {
		const group = {
			discriminator: "example",
			entries: [
				{
					templateId: "A",
					data: { templateId: "A", example: { sharedTuple: [0, 250] } },
				},
				{
					templateId: "B",
					data: { templateId: "B", example: { sharedTuple: [0, 250] } },
				},
			],
		};
		const tree = detectInvariants(group);
		expect(tree.get("sharedTuple")).toEqual({
			kind: "constant",
			value: [0, 250],
		});
	});

	test("does not flag a field absent in any entry", () => {
		const group = {
			discriminator: "example",
			entries: [
				{
					templateId: "A",
					data: { templateId: "A", example: { a: "shared", b: 1 } },
				},
				{
					templateId: "B",
					data: { templateId: "B", example: { a: "shared" } },
				},
			],
		};
		const tree = detectInvariants(group);
		expect(tree.get("a")).toEqual({ kind: "constant", value: "shared" });
		expect(tree.has("b")).toBe(false);
	});
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `bun test src/invariants.test.ts -t detectInvariants`
Expected: FAIL — `detectInvariants` not exported.

- [ ] **Step 3: Implement `InvariantTree` types and `detectInvariants`**

Append to `src/invariants.ts`:

```typescript
import type { Group } from "./group.ts";

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
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `bun test src/invariants.test.ts`
Expected: all tests pass (7 deepEqual + 6 detectInvariants = 13 total? Count may vary).

- [ ] **Step 5: Commit**

```bash
git add src/invariants.ts src/invariants.test.ts
git commit -m "feat: detect Kind 1 (constant) and Kind 2 (templateId tie) invariants"
```

---

## Task 3: Add `invariantsToInferredType`

**Files:**
- Modify: `src/invariants.ts`
- Modify: `src/invariants.test.ts`

- [ ] **Step 1: Write the failing tests**

Append to `src/invariants.test.ts`:

```typescript
import { invariantsToInferredType } from "./invariants.ts";

describe("invariantsToInferredType", () => {
	test("converts a Kind 2 tie to a templateIdReference type", () => {
		const tree: InvariantTree = new Map([["attackType", { kind: "templateIdTie" }]]);
		const result = invariantsToInferredType(tree);
		expect(result).toEqual({
			kind: "object",
			properties: [
				{
					name: "attackType",
					optional: false,
					type: { kind: "templateIdReference" },
				},
			],
		});
	});

	test("converts a Kind 1 numeric constant to a literal number type", () => {
		const tree: InvariantTree = new Map([["accuracyChance", { kind: "constant", value: 1 }]]);
		const result = invariantsToInferredType(tree);
		expect(result.kind).toBe("object");
		if (result.kind !== "object") throw new Error("unreachable");
		expect(result.properties).toHaveLength(1);
		const prop = result.properties[0]!;
		expect(prop.name).toBe("accuracyChance");
		expect(prop.optional).toBe(false);
		expect(prop.type.kind).toBe("number");
		if (prop.type.kind !== "number") throw new Error("unreachable");
		expect(prop.type.literals).toEqual([1]);
	});

	test("converts a Kind 1 tuple constant to a tuple-of-literals type", () => {
		const tree: InvariantTree = new Map([["windows", { kind: "constant", value: [0, 250] }]]);
		const result = invariantsToInferredType(tree);
		if (result.kind !== "object") throw new Error("unreachable");
		const prop = result.properties[0]!;
		if (prop.type.kind !== "tuple") throw new Error("unreachable");
		expect(prop.type.items).toHaveLength(2);
	});

	test("recurses into nested nodes", () => {
		const tree: InvariantTree = new Map<string, InvariantNode>([
			[
				"effectGroup",
				{
					kind: "nested",
					children: new Map<string, InvariantNode>([["accuracyChance", { kind: "constant", value: 1 }]]),
				},
			],
		]);
		const result = invariantsToInferredType(tree);
		if (result.kind !== "object") throw new Error("unreachable");
		const effectGroup = result.properties[0]!;
		expect(effectGroup.name).toBe("effectGroup");
		expect(effectGroup.type.kind).toBe("object");
	});

	test("sorts properties alphabetically", () => {
		const tree: InvariantTree = new Map([
			["zeta", { kind: "constant", value: 1 }],
			["alpha", { kind: "constant", value: 2 }],
		]);
		const result = invariantsToInferredType(tree);
		if (result.kind !== "object") throw new Error("unreachable");
		expect(result.properties.map((p) => p.name)).toEqual(["alpha", "zeta"]);
	});
});
```

Also update the existing `import` at the top of `invariants.test.ts` to include `InvariantNode` and `InvariantTree` type imports:

```typescript
import type { InvariantNode, InvariantTree } from "./invariants.ts";
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `bun test src/invariants.test.ts -t invariantsToInferredType`
Expected: FAIL — `invariantsToInferredType` not exported.

- [ ] **Step 3: Implement `invariantsToInferredType`**

Append to `src/invariants.ts`:

```typescript
import { inferJsonType } from "./infer.ts";
import type { InferredProperty, InferredType } from "./infer.ts";

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
					type: { kind: "templateIdReference" } as InferredType,
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
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `bun test src/invariants.test.ts`
Expected: all tests pass.

- [ ] **Step 5: Commit**

```bash
git add src/invariants.ts src/invariants.test.ts
git commit -m "feat: convert invariant tree to InferredType for rendering"
```

---

## Task 4: Add `stripInvariantsFromWidened` + `makeAllOptional`

**Files:**
- Modify: `src/invariants.ts`
- Modify: `src/invariants.test.ts`

- [ ] **Step 1: Write the failing tests**

Append to `src/invariants.test.ts`:

```typescript
import { stripInvariantsFromWidened, makeAllOptional } from "./invariants.ts";
import type { InferredType } from "./infer.ts";
import { widenType } from "./infer.ts";

describe("stripInvariantsFromWidened", () => {
	test("removes leaf invariant properties", () => {
		const type: InferredType = {
			kind: "object",
			properties: [
				{ name: "keep", optional: false, type: { kind: "string", literals: [] } },
				{ name: "drop", optional: false, type: { kind: "templateIdReference" } },
			],
		};
		const tree: InvariantTree = new Map([["drop", { kind: "templateIdTie" }]]);
		const result = stripInvariantsFromWidened(type, tree);
		if (result.kind !== "object") throw new Error("unreachable");
		expect(result.properties.map((p) => p.name)).toEqual(["keep"]);
	});

	test("recurses into nested invariants and drops empty containers", () => {
		const type: InferredType = {
			kind: "object",
			properties: [
				{
					name: "wrapper",
					optional: false,
					type: {
						kind: "object",
						properties: [
							{ name: "onlyChild", optional: false, type: { kind: "templateIdReference" } },
						],
					},
				},
				{
					name: "kept",
					optional: false,
					type: { kind: "string", literals: [] },
				},
			],
		};
		const tree: InvariantTree = new Map<string, InvariantNode>([
			[
				"wrapper",
				{
					kind: "nested",
					children: new Map<string, InvariantNode>([["onlyChild", { kind: "templateIdTie" }]]),
				},
			],
		]);
		const result = stripInvariantsFromWidened(type, tree);
		if (result.kind !== "object") throw new Error("unreachable");
		// wrapper should be dropped because its only child was stripped.
		expect(result.properties.map((p) => p.name)).toEqual(["kept"]);
	});

	test("preserves partial objects when some children are invariants", () => {
		const type: InferredType = {
			kind: "object",
			properties: [
				{
					name: "group",
					optional: false,
					type: {
						kind: "object",
						properties: [
							{ name: "drop", optional: false, type: { kind: "number", numericKind: "float", literals: [] } },
							{ name: "keep", optional: false, type: { kind: "string", literals: [] } },
						],
					},
				},
			],
		};
		const tree: InvariantTree = new Map<string, InvariantNode>([
			[
				"group",
				{
					kind: "nested",
					children: new Map<string, InvariantNode>([["drop", { kind: "constant", value: 1 }]]),
				},
			],
		]);
		const result = stripInvariantsFromWidened(type, tree);
		if (result.kind !== "object") throw new Error("unreachable");
		expect(result.properties).toHaveLength(1);
		const group = result.properties[0]!;
		if (group.type.kind !== "object") throw new Error("unreachable");
		expect(group.type.properties.map((p) => p.name)).toEqual(["keep"]);
	});
});

describe("makeAllOptional", () => {
	test("marks every property in an object as optional", () => {
		const type: InferredType = {
			kind: "object",
			properties: [
				{ name: "a", optional: false, type: { kind: "string", literals: [] } },
				{ name: "b", optional: false, type: { kind: "number", numericKind: "uint", literals: [] } },
			],
		};
		const result = makeAllOptional(type);
		if (result.kind !== "object") throw new Error("unreachable");
		expect(result.properties.every((p) => p.optional)).toBe(true);
	});

	test("recurses into nested objects", () => {
		const type: InferredType = {
			kind: "object",
			properties: [
				{
					name: "outer",
					optional: false,
					type: {
						kind: "object",
						properties: [{ name: "inner", optional: false, type: { kind: "string", literals: [] } }],
					},
				},
			],
		};
		const result = makeAllOptional(type);
		if (result.kind !== "object") throw new Error("unreachable");
		const outer = result.properties[0]!;
		expect(outer.optional).toBe(true);
		if (outer.type.kind !== "object") throw new Error("unreachable");
		expect(outer.type.properties[0]!.optional).toBe(true);
	});

	test("leaves non-object types unchanged", () => {
		const type: InferredType = { kind: "string", literals: [] };
		expect(makeAllOptional(type)).toEqual(type);
	});
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `bun test src/invariants.test.ts -t "stripInvariantsFromWidened|makeAllOptional"`
Expected: FAIL — functions not exported.

- [ ] **Step 3: Implement the functions**

Append to `src/invariants.ts`:

```typescript
export function stripInvariantsFromWidened(type: InferredType, tree: InvariantTree): InferredType {
	if (type.kind !== "object") return type;
	const stripped: InferredProperty[] = [];
	for (const prop of type.properties) {
		const node = tree.get(prop.name);
		if (!node) {
			stripped.push(prop);
			continue;
		}
		if (node.kind === "constant" || node.kind === "templateIdTie") {
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

export function makeAllOptional(type: InferredType): InferredType {
	if (type.kind !== "object") return type;
	return {
		kind: "object",
		properties: type.properties.map((p) => ({
			name: p.name,
			type: makeAllOptional(p.type),
			optional: true,
		})),
	};
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `bun test src/invariants.test.ts`
Expected: all tests pass.

- [ ] **Step 5: Commit**

```bash
git add src/invariants.ts src/invariants.test.ts
git commit -m "feat: strip invariants from widened payload + all-optional pass"
```

---

## Task 5: Add `stripInvariantsFromValue`

**Files:**
- Modify: `src/invariants.ts`
- Modify: `src/invariants.test.ts`

- [ ] **Step 1: Write the failing tests**

Append to `src/invariants.test.ts`:

```typescript
import { stripInvariantsFromValue } from "./invariants.ts";

describe("stripInvariantsFromValue", () => {
	test("removes leaf invariant keys from a raw value", () => {
		const value = { keep: 1, drop: "POKEMON_TYPE_BUG" };
		const tree: InvariantTree = new Map([["drop", { kind: "templateIdTie" }]]);
		expect(stripInvariantsFromValue(value, tree)).toEqual({ keep: 1 });
	});

	test("recurses into nested invariants and drops empty containers", () => {
		const value = { wrapper: { onlyChild: "POKEMON_TYPE_BUG" }, kept: "ok" };
		const tree: InvariantTree = new Map<string, InvariantNode>([
			[
				"wrapper",
				{
					kind: "nested",
					children: new Map<string, InvariantNode>([["onlyChild", { kind: "templateIdTie" }]]),
				},
			],
		]);
		expect(stripInvariantsFromValue(value, tree)).toEqual({ kept: "ok" });
	});

	test("preserves partial objects when some keys are invariants", () => {
		const value = { group: { drop: 1, keep: "here" } };
		const tree: InvariantTree = new Map<string, InvariantNode>([
			[
				"group",
				{
					kind: "nested",
					children: new Map<string, InvariantNode>([["drop", { kind: "constant", value: 1 }]]),
				},
			],
		]);
		expect(stripInvariantsFromValue(value, tree)).toEqual({ group: { keep: "here" } });
	});

	test("returns the value unchanged when the tree is empty", () => {
		const value = { a: 1, b: 2 };
		expect(stripInvariantsFromValue(value, new Map())).toEqual(value);
	});

	test("returns non-object values unchanged", () => {
		const tree: InvariantTree = new Map([["x", { kind: "constant", value: 0 }]]);
		expect(stripInvariantsFromValue(42, tree)).toBe(42);
		expect(stripInvariantsFromValue("hi", tree)).toBe("hi");
		expect(stripInvariantsFromValue(null, tree)).toBe(null);
	});
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `bun test src/invariants.test.ts -t stripInvariantsFromValue`
Expected: FAIL — `stripInvariantsFromValue` not exported.

- [ ] **Step 3: Implement `stripInvariantsFromValue`**

Append to `src/invariants.ts`:

```typescript
export function stripInvariantsFromValue(value: unknown, tree: InvariantTree): unknown {
	if (!isJsonObject(value)) return value;
	const result: Record<string, unknown> = {};
	for (const [key, childValue] of Object.entries(value)) {
		const node = tree.get(key);
		if (!node) {
			result[key] = childValue;
			continue;
		}
		if (node.kind === "constant" || node.kind === "templateIdTie") {
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
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `bun test src/invariants.test.ts`
Expected: all tests pass.

- [ ] **Step 5: Commit**

```bash
git add src/invariants.ts src/invariants.test.ts
git commit -m "feat: strip invariant paths from raw JSON values"
```

---

## Task 6: Rewrite `emitGroupFile` to use the invariants pipeline

**Files:**
- Modify: `src/emit.ts` — rewrite the `emitGroupFile` export + replace `renderVariantAlias`

This task replaces the emission logic but does NOT delete the old alias-planning helpers yet (that's Task 8, after tests are green). The old helpers become dead code after this task and are deleted later. The existing `emit.test.ts` tests will start failing here — that's expected; they get rewritten in Task 7.

- [ ] **Step 1: Replace the `emitGroupFile` function body**

Open `src/emit.ts`. Replace the entire `emitGroupFile` function (currently lines 37–125) with this new implementation:

```typescript
export function emitGroupFile(group: Group): string {
	const gName = groupName(group.discriminator);
	const sortedIds = [...group.entries].map((e) => e.templateId).sort();
	const aliases = deriveGroupAliases(sortedIds);

	const invariants = detectInvariants(group);
	const payloadType = inferGroupPayloadType(group);
	const widenedPayload = widenType(payloadType);
	const xdataType = makeAllOptional(stripInvariantsFromWidened(widenedPayload, invariants));

	const xdataName = `${gName}Data`;
	const discName = renderPropertyName(group.discriminator);
	const lines: string[] = [];

	// Base generic interface.
	lines.push(`export interface ${gName}<`);
	lines.push(`\t${TEMPLATE_GENERIC} extends string = string,`);
	lines.push(`\tTData extends ${xdataName} = ${xdataName},`);
	lines.push(`> {`);
	lines.push(`\ttemplateId: ${TEMPLATE_GENERIC};`);
	lines.push(`\tdata: {`);
	lines.push(`\t\ttemplateId: ${TEMPLATE_GENERIC};`);

	// Inner payload: TData or TData & { ...invariants }
	if (invariants.size === 0) {
		lines.push(`\t\t${discName}: TData;`);
	} else {
		const invariantsType = invariantsToInferredType(invariants);
		const invariantsLines = renderType(invariantsType, EMPTY_CONTEXT);
		if (invariantsLines.length === 1) {
			lines.push(`\t\t${discName}: TData & ${invariantsLines[0]};`);
		} else {
			lines.push(`\t\t${discName}: TData & ${invariantsLines[0]}`);
			for (const line of invariantsLines.slice(1, -1)) {
				lines.push(`\t\t${line}`);
			}
			lines.push(`\t\t${invariantsLines[invariantsLines.length - 1]};`);
		}
	}

	lines.push(`\t};`);
	lines.push(`}`);
	lines.push(``);

	// XData interface.
	lines.push(...renderXDataInterface(xdataName, xdataType));
	lines.push(``);

	// Per-variant aliases.
	const entriesById = new Map(group.entries.map((e) => [e.templateId, e]));
	for (const id of sortedIds) {
		const entry = entriesById.get(id)!;
		const variantSuffix = aliases.get(id)!;
		lines.push(...renderVariantAlias(gName, entry, group, variantSuffix, invariants));
	}
	lines.push(``);

	// Union + TemplateID alias.
	lines.push(`export type ${gName}MasterfileEntry =`);
	sortedIds.forEach((id, i) => {
		const alias = aliases.get(id)!;
		const suffix = i === sortedIds.length - 1 ? ";" : "";
		lines.push(`\t| ${gName}${alias}${suffix}`);
	});
	lines.push(``);
	lines.push(`export type ${gName}TemplateID = ${gName}MasterfileEntry["templateId"];`);
	lines.push(``);

	return lines.join("\n");
}
```

- [ ] **Step 2: Add the new `EMPTY_CONTEXT` constant and `renderXDataInterface` helper**

Add after the existing `EMPTY_GENERIC_NAMES` constant (around line 35):

```typescript
const EMPTY_CONTEXT: RenderContext = {
	aliases: EMPTY_ALIAS_PLAN,
	path: [],
	genericNames: EMPTY_GENERIC_NAMES,
};
```

Add a new function right above `emitMiscFile`:

```typescript
function renderXDataInterface(name: string, type: InferredType): string[] {
	// Empty object: emit `export interface Name {}` directly.
	if (type.kind === "object" && type.properties.length === 0) {
		return [`export interface ${name} {}`];
	}
	const typeLines = renderType(type, EMPTY_CONTEXT);
	// typeLines shape: ["{", "\t...", ..., "}"]
	const lines: string[] = [];
	lines.push(`export interface ${name} ${typeLines[0]}`);
	for (const line of typeLines.slice(1, -1)) {
		lines.push(line);
	}
	lines.push(typeLines[typeLines.length - 1]!);
	return lines;
}
```

- [ ] **Step 3: Replace `renderVariantAlias` with the new implementation**

Replace the entire current `renderVariantAlias` function (currently lines 127–182) with:

```typescript
function renderVariantAlias(
	gName: string,
	entry: Entry,
	group: Group,
	variantSuffix: string,
	invariants: InvariantTree,
): string[] {
	const typeName = `${gName}${variantSuffix}`;
	const payload = entry.data[group.discriminator];
	const stripped = stripInvariantsFromValue(payload, invariants);

	const isEmpty = !isJsonObject(stripped) || Object.keys(stripped).length === 0;
	if (isEmpty) {
		return [`export type ${typeName} = ${gName}<"${entry.templateId}">;`];
	}

	const literalType = inferJsonType(stripped);
	const literalLines = renderType(literalType, EMPTY_CONTEXT);

	const lines: string[] = [`export type ${typeName} = ${gName}<`];
	lines.push(`\t"${entry.templateId}",`);
	if (literalLines.length === 1) {
		lines.push(`\t${literalLines[0]}`);
	} else {
		for (const line of literalLines) {
			lines.push(`\t${line}`);
		}
	}
	lines.push(`>;`);
	return lines;
}
```

- [ ] **Step 4: Update imports at the top of `src/emit.ts`**

Current imports (lines 1–4):
```typescript
import type { Group } from "./group.ts";
import type { BooleanType, InferredProperty, InferredType, NumberType, StringType } from "./infer.ts";
import { inferJsonType, inferJsonTypes, widenType } from "./infer.ts";
import { aliasSuffix, deriveGroupAliases, groupName } from "./naming.ts";
```

Replace with:
```typescript
import type { Entry, Group } from "./group.ts";
import type { BooleanType, InferredProperty, InferredType, NumberType, StringType } from "./infer.ts";
import { inferJsonType, inferJsonTypes, widenType } from "./infer.ts";
import {
	detectInvariants,
	invariantsToInferredType,
	makeAllOptional,
	stripInvariantsFromValue,
	stripInvariantsFromWidened,
} from "./invariants.ts";
import type { InvariantTree } from "./invariants.ts";
import { aliasSuffix, deriveGroupAliases, groupName } from "./naming.ts";
```

- [ ] **Step 5: Add an `isJsonObject` helper (mirroring `invariants.ts`)**

`src/emit.ts` already has a local `isJsonObject` at the bottom (around line 708). Keep it — `renderVariantAlias` uses it.

- [ ] **Step 6: Run the generator to confirm emission doesn't crash**

Run: `bun run generate`
Expected: runs to completion. Writes 61 files. No runtime error.

(Tests in `emit.test.ts` will still fail — that's Task 7.)

- [ ] **Step 7: Commit**

```bash
git add src/emit.ts
git commit -m "feat: rewrite emitGroupFile to use TData + invariants pipeline

Produces the new shape: single TData generic, inlined constants/ties in
base body, per-variant literal TData. Existing emit.test.ts assertions
will fail until rewritten in the next task.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Task 7: Rewrite `emit.test.ts` assertions for the new shape

**Files:**
- Modify: `src/emit.test.ts`

The existing 7 `emitGroupFile` tests assert the old multi-generic shape. Rewrite each. Add 3 new tests for invariant features not covered by existing fixtures.

- [ ] **Step 1: Rewrite the first test ("emits multi-generic interface...")**

Replace the test at lines 15–98 of `src/emit.test.ts` with:

```typescript
	test("emits TData generic with invariants inlined in base body", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("typeEffective")!;

		const output = emitGroupFile(group);

		// Two-generic base interface header:
		expect(output).toContain("export interface TypeEffective<");
		expect(output).toContain("TemplateID extends string = string,");
		expect(output).toContain("TData extends TypeEffectiveData = TypeEffectiveData,");

		// Base body: TData & { invariants }
		expect(output).toContain("typeEffective: TData & {");
		expect(output).toContain("attackType: TemplateID;"); // Kind 2 top-level
		expect(output).toContain("accuracyChance: 1;"); // Kind 1 nested
		expect(output).toContain("combatType: TemplateID;"); // Kind 2 nested deeply

		// XData interface emitted with all-optional properties, no invariant fields:
		expect(output).toContain("export interface TypeEffectiveData {");
		expect(output).toContain("attackScalar?: [");
		expect(output).toContain("effectGroup?: {");
		expect(output).toContain("tags?: Array<string>;");
		expect(output).toContain("typeCode?: string;");
		expect(output).toContain("windows?: [number, number];");
		// Invariants should NOT appear in XData (they live in the base body):
		expect(output).not.toContain("attackType?:");
		expect(output).not.toContain("accuracyChance?:");
		// effectGroup.nested has only combatType (an invariant) — the whole nested
		// wrapper should be stripped from XData.
		expect(output).not.toContain("nested?:");

		// No legacy named tuple/primitive aliases should be emitted:
		expect(output).not.toContain("export type TypeEffectiveAttackScalar");
		expect(output).not.toContain("export type TypeEffectiveEffectGroupWindows");

		// Per-variant aliases carry literal TData, NOT the widened alias:
		expect(output).toContain("export type TypeEffectiveBug = TypeEffective<");
		expect(output).toContain(`"POKEMON_TYPE_BUG"`);
		expect(output).toContain("export type TypeEffectiveDark = TypeEffective<");
		expect(output).toContain(`"POKEMON_TYPE_DARK"`);

		// Bug's block contains its literal tuple + literals for variable fields.
		// Invariant-hoisted fields (attackType, accuracyChance, nested.combatType)
		// are NOT present in the variant literal — they come from the base body.
		const bugStart = output.indexOf("export type TypeEffectiveBug = TypeEffective<");
		const bugEnd = output.indexOf(">;", bugStart);
		const bugBlock = output.slice(bugStart, bugEnd + 2);
		expect(bugBlock).toContain(`"POKEMON_TYPE_BUG"`);
		expect(bugBlock).toContain("0.625");
		expect(bugBlock).toContain("1.6");
		expect(bugBlock).toContain(`"BUG"`); // typeCode
		expect(bugBlock).toContain(`"fast"`); // tags
		expect(bugBlock).toContain("250"); // windows[1]
		expect(bugBlock).not.toContain("attackType"); // invariant; in base body only
		expect(bugBlock).not.toContain("accuracyChance"); // invariant; in base body only
		expect(bugBlock).not.toContain("combatType"); // invariant; in base body only

		// Dark's block:
		const darkStart = output.indexOf("export type TypeEffectiveDark = TypeEffective<");
		const darkEnd = output.indexOf(">;", darkStart);
		const darkBlock = output.slice(darkStart, darkEnd + 2);
		expect(darkBlock).toContain(`"POKEMON_TYPE_DARK"`);
		expect(darkBlock).toContain(`"DARK"`); // typeCode
		expect(darkBlock).toContain(`"charged"`);
		expect(darkBlock).toContain(`"fast"`);
		expect(darkBlock).toContain("300"); // windows[1]

		// Union + TemplateID alias unchanged:
		expect(output).toContain("export type TypeEffectiveMasterfileEntry =");
		expect(output).toContain("| TypeEffectiveBug");
		expect(output).toContain("| TypeEffectiveDark");
		expect(output).toContain(`export type TypeEffectiveTemplateID = TypeEffectiveMasterfileEntry["templateId"];`);
	});
```

- [ ] **Step 2: Rewrite the second test ("sorts per-entry aliases...")**

Replace the test at original lines 100–121 (now shifted) with:

```typescript
	test("sorts per-variant aliases by templateId lexicographically", () => {
		const group: Group = {
			discriminator: "typeEffective",
			entries: [
				{
					templateId: "POKEMON_TYPE_WATER",
					data: { templateId: "POKEMON_TYPE_WATER", typeEffective: {} },
				},
				{
					templateId: "POKEMON_TYPE_BUG",
					data: { templateId: "POKEMON_TYPE_BUG", typeEffective: {} },
				},
			],
		};

		const output = emitGroupFile(group);
		const bugIdx = output.indexOf("TypeEffectiveBug");
		const waterIdx = output.indexOf("TypeEffectiveWater");
		expect(bugIdx).toBeGreaterThan(-1);
		expect(waterIdx).toBeGreaterThan(-1);
		expect(bugIdx).toBeLessThan(waterIdx);
	});
```

- [ ] **Step 3: Rewrite the "renders variable arrays..." test**

Replace the test that starts with "renders variable arrays and optional nested properties" with:

```typescript
	test("emits per-variant TData with only the fields that variant has", () => {
		const group = groupEntries(MOCK_MASTERFILE).get("pokemonSettings")!;

		const output = emitGroupFile(group);

		// Base interface + XData:
		expect(output).toContain("export interface PokemonSettings<");
		expect(output).toContain("TData extends PokemonSettingsData = PokemonSettingsData,");
		expect(output).toContain("export interface PokemonSettingsData {");
		expect(output).toContain("forms?: Array<string>;");
		expect(output).toContain("familyId?: \"FAMILY_BULBASAUR\";");

		// familyId is a Kind 1 constant ("FAMILY_BULBASAUR" across both entries) → base body
		expect(output).toContain("pokemonSettings: TData & {");
		// Ivysaur's stats omit `shadowBoost` (present only on Bulbasaur).
		const ivyStart = output.indexOf("export type PokemonSettingsIvysaur = PokemonSettings<");
		const ivyEnd = output.indexOf(">;", ivyStart);
		const ivyBlock = output.slice(ivyStart, ivyEnd + 2);
		expect(ivyBlock).toContain(`"V0002_POKEMON_IVYSAUR"`);
		expect(ivyBlock).toContain(`"NORMAL"`);
		expect(ivyBlock).toContain(`"SHADOW"`);
		expect(ivyBlock).not.toContain("shadowBoost");

		// Bulbasaur's TData includes shadowBoost: null.
		const bulbaStart = output.indexOf("export type PokemonSettingsBulbasaur = PokemonSettings<");
		const bulbaEnd = output.indexOf(">;", bulbaStart);
		const bulbaBlock = output.slice(bulbaStart, bulbaEnd + 2);
		expect(bulbaBlock).toContain("shadowBoost: null");
	});
```

- [ ] **Step 4: Rewrite the tuple-mirror test**

Replace the test starting with "renders tuple aliases without out-of-scope" with:

```typescript
	test("emits tuples inline in XData without dangling TemplateID references", () => {
		const group: Group = {
			discriminator: "tupleMirror",
			entries: [
				{
					templateId: "TUPLE_ONE",
					data: {
						templateId: "TUPLE_ONE",
						tupleMirror: { ids: ["TUPLE_ONE"] },
					},
				},
				{
					templateId: "TUPLE_TWO",
					data: {
						templateId: "TUPLE_TWO",
						tupleMirror: { ids: ["TUPLE_TWO"] },
					},
				},
			],
		};

		const output = emitGroupFile(group);

		// XData: ids is a 1-tuple of bare strings (widened).
		expect(output).toContain("export interface TupleMirrorData {");
		expect(output).toContain("ids?: [string];");

		// Per-variant: literal tuple.
		expect(output).toContain(`"TUPLE_ONE"`);
		expect(output).toContain(`"TUPLE_TWO"`);
	});
```

- [ ] **Step 5: Rewrite the name-collision test**

Replace the test starting with "suffixes planned aliases that collide" with:

```typescript
	test("emits XData interface name without the collision suffix", () => {
		const group: Group = {
			discriminator: "nameCollision",
			entries: [
				{
					templateId: "BUG",
					data: {
						templateId: "BUG",
						nameCollision: { bug: "one", data: "first" },
					},
				},
				{
					templateId: "DARK",
					data: {
						templateId: "DARK",
						nameCollision: { bug: "two", data: "second" },
					},
				},
			],
		};

		const output = emitGroupFile(group);

		// XData interface name is the canonical form (no collision logic now —
		// XData is the single named sibling, and per-variant aliases use the
		// group's own name derivation which already avoids collision).
		expect(output).toContain("export interface NameCollisionData {");
		expect(output).toContain("bug?: string;");
		expect(output).toContain("data?: string;");

		// Per-variant alias for templateId "BUG":
		expect(output).toContain("export type NameCollisionBug = NameCollision<");
		expect(output).toContain(`"BUG"`);
		expect(output).toContain(`"one"`);
		expect(output).toContain(`"first"`);
	});
```

- [ ] **Step 6: Rewrite the dotted-keys test**

Replace the test starting with "keeps dotted JSON keys distinct" with:

```typescript
	test("preserves dotted JSON keys as distinct properties in XData and per-variant literals", () => {
		const group: Group = {
			discriminator: "dotSettings",
			entries: [
				{
					templateId: "DOT_ONE",
					data: {
						templateId: "DOT_ONE",
						dotSettings: {
							a: { b: "inner-one" },
							"a.b": "direct-one",
						},
					},
				},
				{
					templateId: "DOT_TWO",
					data: {
						templateId: "DOT_TWO",
						dotSettings: {
							a: { b: "inner-two" },
							"a.b": "direct-two",
						},
					},
				},
			],
		};

		const output = emitGroupFile(group);

		// XData preserves both paths:
		expect(output).toContain("b?: string;");
		expect(output).toContain(`"a.b"?: string;`);

		// Per-variant literals preserve the actual values:
		expect(output).toContain(`"direct-one"`);
		expect(output).toContain(`"direct-two"`);
		expect(output).toContain(`"inner-one"`);
		expect(output).toContain(`"inner-two"`);
	});
```

- [ ] **Step 7: Rewrite the nested-array-layers test**

Replace the test starting with "preserves nested variable array layers" with:

```typescript
	test("preserves nested array layers inside XData", () => {
		const group: Group = {
			discriminator: "matrixSettings",
			entries: [
				{
					templateId: "MATRIX_ONE",
					data: {
						templateId: "MATRIX_ONE",
						matrixSettings: {
							matrix: [["A"], ["B", "A"]],
						},
					},
				},
				{
					templateId: "MATRIX_TWO",
					data: {
						templateId: "MATRIX_TWO",
						matrixSettings: {
							matrix: [["B"]],
						},
					},
				},
			],
		};

		const output = emitGroupFile(group);

		// XData: nested Array<Array<string>>
		expect(output).toContain("matrix?: Array<Array<string>>;");

		// Per-variant: literal 2D array. MATRIX_ONE has [["A"], ["B", "A"]]:
		const oneStart = output.indexOf("export type MatrixSettingsOne = MatrixSettings<");
		const oneEnd = output.indexOf(">;", oneStart);
		const oneBlock = output.slice(oneStart, oneEnd + 2);
		expect(oneBlock).toContain(`"A"`);
		expect(oneBlock).toContain(`"B"`);
	});
```

- [ ] **Step 8: Rewrite the trailing-default-elision test**

Replace the test starting with "elides trailing generic args" with:

```typescript
	test("elides the TData arg when the variant's stripped payload is empty", () => {
		const group: Group = {
			discriminator: "allConstant",
			entries: [
				{
					templateId: "A",
					data: { templateId: "A", allConstant: { fixed: 1 } },
				},
				{
					templateId: "B",
					data: { templateId: "B", allConstant: { fixed: 1 } },
				},
			],
		};

		const output = emitGroupFile(group);

		// `fixed` is a Kind 1 constant — lives in the base body. XData is empty.
		expect(output).toContain("export interface AllConstantData {}");
		expect(output).toContain("allConstant: TData & {");
		expect(output).toContain("fixed: 1;");

		// Both variants elide the TData arg:
		expect(output).toContain(`export type AllConstantA = AllConstant<"A">;`);
		expect(output).toContain(`export type AllConstantB = AllConstant<"B">;`);
	});
```

- [ ] **Step 9: Add a new test for groups with NO invariants at all**

Append inside the `describe("emitGroupFile")` block:

```typescript
	test("drops the intersection when there are no invariants", () => {
		const group: Group = {
			discriminator: "varyAll",
			entries: [
				{
					templateId: "ONE",
					data: { templateId: "ONE", varyAll: { label: "first", count: 1 } },
				},
				{
					templateId: "TWO",
					data: { templateId: "TWO", varyAll: { label: "second", count: 2 } },
				},
			],
		};

		const output = emitGroupFile(group);

		// No invariants → inner payload is plain TData (no `& {...}` intersection)
		expect(output).toContain("varyAll: TData;");
		expect(output).not.toContain("varyAll: TData &");

		// XData has both fields:
		expect(output).toContain("label?: string;");
		expect(output).toContain("count?: number;");
	});
```

- [ ] **Step 10: Remove the now-obsolete `genericParamName` describe block**

The `describe("genericParamName")` block (around line 550 of the original file) tests a function that will be deleted in Task 8. Delete the entire describe block now.

- [ ] **Step 11: Remove the `inferPerEntryTypeAtPath` describe block**

Delete the entire `describe("inferPerEntryTypeAtPath")` block (around line 567 of the original file) — that function is also being deleted in Task 8.

- [ ] **Step 12: Update the imports at the top of `emit.test.ts`**

Current imports import `genericParamName` and `inferPerEntryTypeAtPath`. Update to remove them:

```typescript
import { describe, expect, test } from "bun:test";
import { emitGroupFile, emitIndexFile, emitMiscFile, kebabCase } from "./emit.ts";
import { MOCK_MASTERFILE } from "./fixtures.ts";
import type { Group } from "./group.ts";
import { groupEntries } from "./group.ts";
```

- [ ] **Step 13: Run all tests**

Run: `bun test`
Expected: all pass. Test count will drop (we removed some tests) but no failures.

- [ ] **Step 14: Commit**

```bash
git add src/emit.test.ts
git commit -m "test: rewrite emitGroupFile assertions for TData refactor shape

Covers: invariant detection at nested depths, Kind 1 constants vs Kind 2
templateId ties, per-variant literal TData, XData all-optional rendering,
empty-TData elision, no-invariant no-intersection case."
```

---

## Task 8: Delete dead code from `src/emit.ts`

**Files:**
- Modify: `src/emit.ts`

With tests green, remove everything the new pipeline obsoletes.

- [ ] **Step 1: Delete the `PlannedAlias`, `AliasPlan`, and `EMPTY_ALIAS_PLAN` declarations**

Remove (currently lines 11–34):

```typescript
interface PlannedAlias {
	path: string[];
	pathKey: string;
	name: string;
	type: InferredType;
	arrayWrapperCount: number;
}

interface AliasPlan {
	aliases: PlannedAlias[];
	byPath: Map<string, PlannedAlias>;
}

// ...RenderContext stays but is simplified — see step 2

const EMPTY_ALIAS_PLAN: AliasPlan = {
	aliases: [],
	byPath: new Map<string, PlannedAlias>(),
};
const EMPTY_GENERIC_NAMES: ReadonlyMap<string, string> = new Map<string, string>();
```

- [ ] **Step 2: Simplify `RenderContext` + drop `EMPTY_CONTEXT`**

`RenderContext` previously had `aliases`, `path`, and `genericNames`. In the new world only `path` is used by `renderType` (not for alias lookup; for future-proofing). Actually, since we never look up by path anymore (no alias lookup), the context is vestigial. Remove it entirely.

Replace `RenderContext` (currently lines 24–28) with nothing (delete it). Every call to `renderType(type, context)` becomes `renderType(type)`. Same for `renderProperty` and the internal helpers.

Also remove `EMPTY_CONTEXT` (added in Task 6). It becomes unused.

- [ ] **Step 3: Update `renderType` signature**

Replace (currently lines 238–268):

```typescript
function renderType(type: InferredType, context: RenderContext): string[] {
	const plannedAlias = context.aliases.byPath.get(aliasPathKey(context.path));
	if (plannedAlias) {
		const name = context.genericNames.get(plannedAlias.pathKey) ?? plannedAlias.name;
		if (plannedAlias.arrayWrapperCount > 0) {
			return [wrapArrayType(name, plannedAlias.arrayWrapperCount)];
		}
		return [name];
	}

	const inline = renderInlineType(type);
	if (inline) return [inline];

	switch (type.kind) {
		case "object":
			return renderObjectType(type.properties, context);
		case "tuple":
			return renderTupleType(type.items, context);
		case "array":
			return renderArrayType(type.element, context);
		case "union":
			return renderUnionType(type.variants, context);
		case "templateIdReference":
			return [TEMPLATE_GENERIC];
		case "null":
		case "boolean":
		case "number":
		case "string":
			throw new Error(`Expected inline renderer to handle ${type.kind}`);
	}
}
```

With:

```typescript
function renderType(type: InferredType): string[] {
	const inline = renderInlineType(type);
	if (inline) return [inline];

	switch (type.kind) {
		case "object":
			return renderObjectType(type.properties);
		case "tuple":
			return renderTupleType(type.items);
		case "array":
			return renderArrayType(type.element);
		case "union":
			return renderUnionType(type.variants);
		case "templateIdReference":
			return [TEMPLATE_GENERIC];
		case "null":
		case "boolean":
		case "number":
		case "string":
			throw new Error(`Expected inline renderer to handle ${type.kind}`);
	}
}
```

- [ ] **Step 4: Update `renderProperty` signature**

Replace (currently lines 270–297):

```typescript
function renderProperty(
	name: string,
	type: InferredType,
	optional: boolean,
	indent: string,
	context: RenderContext,
): string[] {
	const typeLines = renderType(type, context);
	// ... body uses context
}
```

With:

```typescript
function renderProperty(name: string, type: InferredType, optional: boolean, indent: string): string[] {
	const typeLines = renderType(type);
	const property = `${renderPropertyName(name)}${optional ? "?" : ""}`;
	if (typeLines.length === 1) {
		return [`${indent}${property}: ${typeLines[0]};`];
	}
	if (typeLines[0]?.startsWith("| ")) {
		return [
			`${indent}${property}:`,
			...typeLines.map((line, index) => {
				const suffix = index === typeLines.length - 1 ? ";" : "";
				return `${indent}\t${line}${suffix}`;
			}),
		];
	}

	return typeLines.map((line, index) => {
		if (index === 0) return `${indent}${property}: ${line}`;
		const suffix = index === typeLines.length - 1 ? ";" : "";
		return `${indent}${line}${suffix}`;
	});
}
```

- [ ] **Step 5: Update `renderObjectType`, `renderTupleType`, `renderArrayType`, `renderUnionType`**

Each loses its `context` parameter. Replace each function body by removing `context` from the signature and from every `renderType` / `renderProperty` call.

```typescript
function renderObjectType(properties: InferredProperty[]): string[] {
	if (properties.length === 0) return ["Record<string, never>"];

	const lines = ["{"];
	for (const property of properties) {
		lines.push(...renderProperty(property.name, property.type, property.optional, "\t"));
	}
	lines.push("}");
	return lines;
}

function renderTupleType(items: InferredType[]): string[] {
	if (items.length === 0) return ["[]"];

	const lines = ["["];
	items.forEach((item, index) => {
		const itemLines = renderType(item);
		const suffix = index === items.length - 1 ? "" : ",";
		if (itemLines.length === 1) {
			lines.push(`\t${itemLines[0]}${suffix}`);
			return;
		}
		lines.push(`\t${itemLines[0]}`);
		for (const line of itemLines.slice(1, -1)) {
			lines.push(`\t${line}`);
		}
		lines.push(`\t${itemLines[itemLines.length - 1]}${suffix}`);
	});
	lines.push("]");
	return lines;
}

function renderArrayType(element: InferredType): string[] {
	const elementLines = renderType(element);
	if (elementLines.length === 1) return [`Array<${elementLines[0]}>`];

	return ["Array<", ...elementLines.map((line) => `\t${line}`), ">"];
}

function renderUnionType(variants: InferredType[]): string[] {
	return variants.flatMap((variant) => {
		const lines = renderType(variant);
		const [firstLine, ...rest] = lines;
		return [`| ${firstLine}`, ...rest];
	});
}
```

- [ ] **Step 6: Delete the planning / collection / alias-worthy logic**

Delete entirely:
- `planTypeAliases` (lines 386–408)
- `collectAliasCandidates` (lines 410–436)
- `isAliasWorthyType` (lines 438–454)
- `aliasPathKey` (lines 456–458)
- `aliasNameForPath` (lines 460–462)
- `aliasNameSegment` (lines 464–479)
- `wrapArrayType` (lines 481–487)
- `renderAliasDefinitions` (lines 489–523)
- `moduleReservedNames` (lines 525–537)
- `availableAliasName` (lines 539–547)
- `isWidenedPrimitive` (lines 549–551)
- `inlinePrimitiveGenericName` (lines 553–557)
- `genericParamName` (lines 559–563)
- `inferPerEntryTypeAtPath` (lines 575–596)
- `collectValuesAtPath` (lines 598–610)
- `unwrapArraysCollectObjects` (lines 612–616)
- `flattenArrays` (lines 618–624)
- `renderedLinesEqual` (lines 184–188)

- [ ] **Step 7: Delete the `TemplateValue` + `inferTemplateAwareObjects` machinery**

The template-aware payload inference (`inferTemplateAwareValues`, `inferTemplateAwareArrays`, `inferTemplateAwareObjects`, `isTemplateIdMirrorPath`, the `TemplateValue` interface) was used to inject `templateIdReference` nodes at depths ≤ 1. The new invariant pipeline handles this at every depth, so these functions are redundant — but `inferGroupPayloadType` still uses them.

Simplify `inferGroupPayloadType` to call `inferJsonTypes` directly on the raw payloads:

Replace (currently lines 565–573):

```typescript
function inferGroupPayloadType(group: Group): InferredType {
	return inferTemplateAwareValues(
		group.entries.map((entry) => ({
			templateId: entry.templateId,
			value: entry.data[group.discriminator],
		})),
		[],
	);
}
```

With:

```typescript
function inferGroupPayloadType(group: Group): InferredType {
	return inferJsonTypes(group.entries.map((entry) => entry.data[group.discriminator]));
}
```

Then delete:
- `TemplateValue` interface (lines 6–9)
- `inferTemplateAwareValues` (lines 626–644)
- `inferTemplateAwareArrays` (lines 646–674)
- `inferTemplateAwareObjects` (lines 676–702)
- `isTemplateIdMirrorPath` (lines 704–706)

- [ ] **Step 8: Update the `emitMiscFile` function**

`emitMiscFile` currently passes `RenderContext` to `renderProperty`. With the simplified signature it no longer takes a context. Replace its `renderProperty` call:

Current (around lines 209–215):
```typescript
lines.push(
	...renderProperty(group.discriminator, payloadType, false, "\t\t", {
		aliases: EMPTY_ALIAS_PLAN,
		path: [],
		genericNames: EMPTY_GENERIC_NAMES,
	}),
);
```

New:
```typescript
lines.push(...renderProperty(group.discriminator, payloadType, false, "\t\t"));
```

- [ ] **Step 9: Update the unused-imports and unused-types**

After deletion, `BooleanType`, `NumberType`, `StringType` are no longer used. Clean up the import:

Old:
```typescript
import type { BooleanType, InferredProperty, InferredType, NumberType, StringType } from "./infer.ts";
```

New:
```typescript
import type { InferredProperty, InferredType } from "./infer.ts";
```

`widenType` is still used by the new `emitGroupFile`. `inferJsonTypes` is now used by `inferGroupPayloadType`. `inferJsonType` is still used by `renderVariantAlias`. Keep them all.

- [ ] **Step 10: Run all tests**

Run: `bun test`
Expected: all pass.

- [ ] **Step 11: Commit**

```bash
git add src/emit.ts
git commit -m "refactor: delete dead alias-planning + per-alias-generic machinery

Removes planTypeAliases, collectAliasCandidates, isAliasWorthyType,
aliasNameForPath, renderAliasDefinitions, genericParamName,
inlinePrimitiveGenericName, inferPerEntryTypeAtPath, and the
template-aware inference helpers. Simplifies renderType to single-arg.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Task 9: Regenerate + format + typecheck + spot-check

**Files:** no source edits. Verification only.

- [ ] **Step 1: Run the generator**

Run: `bun run generate`
Expected: "Wrote 61 files to ...". No errors.

- [ ] **Step 2: Format generated output**

Run: `bun run format`
Expected: several files reformatted. A pre-existing warning about `pokemon-settings.ts` exceeding 1 MiB is fine (unrelated to this change).

- [ ] **Step 3: Typecheck generated TypeScript**

Run: `cd packages/typescript && bunx tsc --noEmit`
Expected: zero errors.

- [ ] **Step 4: Spot-check `packages/typescript/src/groups/type-effective.ts`**

Run: `head -60 packages/typescript/src/groups/type-effective.ts`

Expected: begins with

```typescript
export interface TypeEffective<
	TemplateID extends string = string,
	TData extends TypeEffectiveData = TypeEffectiveData,
> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		typeEffective: TData & {
			// ...invariants like attackType: TemplateID, accuracyChance, etc.
		};
	};
}

export interface TypeEffectiveData {
	// ...all-optional variable fields (attackScalar, effectGroup, etc.)
}

export type TypeEffectiveBug = TypeEffective<
	"POKEMON_TYPE_BUG",
	{
		// ...literal per-variant fields only
	}
>;
```

No `TypeEffectiveAttackScalar` or other named tuple aliases should be present.

- [ ] **Step 5: Spot-check `packages/typescript/src/groups/combat-type.ts`**

Run: `head -40 packages/typescript/src/groups/combat-type.ts`

Expected: two generics (`TemplateID`, `TData`), `excellentLevelThreshold: 0.95` and `niceLevelThreshold: 0.3` inlined in the base body as Kind 1 constants, and per-variant aliases that carry only `greatLevelThreshold` + `type` (or elide TData when a variant matches all defaults).

- [ ] **Step 6: Spot-check `packages/typescript/src/groups/item-settings.ts`**

Run: `head -30 packages/typescript/src/groups/item-settings.ts`

Expected: exactly two generics (no `TCategory`, `TDescriptionOverride`, etc.). The base interface is slim. `ItemSettingsData` is a single interface with all optional fields. Per-variant aliases include only the fields that variant actually has.

- [ ] **Step 7: Spot-check `packages/typescript/src/groups/combat-move.ts`**

Run: `head -30 packages/typescript/src/groups/combat-move.ts`

Expected: exactly two generics. No filler `number, number, 1, ...` positional args. Per-variant aliases carry only the fields that variant has.

- [ ] **Step 8: Spot-check that no `= string;` / `= number;` / `= boolean;` aliases remain**

Run:
```bash
grep -rE "^export type \w+ = (string|number|boolean);$" packages/typescript/src/groups/ | head
```

Expected: no matches.

- [ ] **Step 9: Report to the user**

Print a summary of what was changed and ask the user to verify the Rust and Go outputs (`packages/rust/lib.rs` and `packages/go/main.go`) per `CLAUDE.md`, since the agent cannot read those files.

---

## Verification Summary

1. `bun test` — all tests pass.
2. `bun run generate` — regenerates all 61 files without error.
3. `bun run format` — Biome passes (one pre-existing size warning is fine).
4. `cd packages/typescript && bunx tsc --noEmit` — zero errors.
5. Spot-checks show: 2-generic base interface, `XData` interface with all-optional fields, invariants in base body, per-variant literal TData, no named tuple aliases, no primitive-widened aliases.
6. User verifies Rust/Go outputs manually.

## Critical Files

- Spec: [`docs/superpowers/specs/2026-04-24-tdata-generic-refactor-design.md`](../specs/2026-04-24-tdata-generic-refactor-design.md)
- Generator core: [`src/emit.ts`](../../../src/emit.ts), [`src/invariants.ts`](../../../src/invariants.ts) (new), [`src/infer.ts`](../../../src/infer.ts)
- Tests: [`src/emit.test.ts`](../../../src/emit.test.ts), [`src/invariants.test.ts`](../../../src/invariants.test.ts) (new)
- Fixture: [`src/fixtures.ts`](../../../src/fixtures.ts)
- Package config: `package.json` (`bun test`, `bun run generate`, `bun run format`)
