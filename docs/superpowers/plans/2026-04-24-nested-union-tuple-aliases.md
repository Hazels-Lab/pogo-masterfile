# Nested Union/Tuple Alias Extraction Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Generate exported TypeScript aliases for inferred union and tuple payload fields, including nested fields, and replace the inline object property types with those aliases.

**Architecture:** Keep `src/infer.ts` language-neutral and add a TypeScript-only alias planner in `src/emit.ts`. The planner walks each multi-entry group payload before rendering, assigns deterministic aliases from the group name plus full property path, renders the object with alias references, and emits alias definitions after the `Data` interface.

**Tech Stack:** TypeScript, Bun test runner, Biome, existing `src` generator pipeline.

**Spec:** [`docs/superpowers/specs/2026-04-24-nested-union-tuple-aliases-design.md`](../specs/2026-04-24-nested-union-tuple-aliases-design.md)

---

## File Structure

| Path | Responsibility |
|---|---|
| `src/emit.ts` | Add alias planning, alias-aware rendering, alias name generation, and alias definition output. |
| `src/emit.test.ts` | Add failing regression tests for direct aliases, nested aliases, tuple aliases, array element aliases, single literals, and `TemplateID` mirror fields. |
| `src/fixtures.ts` | Add small fixture fields that make alias extraction easy to test without reading generated package files. |
| `packages/ts-v2/src/groups/*.ts` | Regenerated output only. Do not hand-edit these files. |

Existing uncommitted `packages/ts-v2/src/groups/move-settings.ts` changes are a reference example from the user. Do not commit that hand edit directly; after the emitter change, `bun run generate` should replace it with generated output.

Current baseline note: `src/emit.ts` already emits `TemplateID` as the generic name. The first `src/emit.test.ts` test still has older `T` assertions, so the regression-test task must update those stale assertions before checking the new alias behavior.

## Task 1: Add Regression Coverage

**Files:**
- Modify: `src/fixtures.ts`
- Modify: `src/emit.test.ts`

- [ ] **Step 1: Expand the typeEffective fixture with alias-worthy fields**

In `src/fixtures.ts`, extend both `typeEffective` payload objects with these fields:

```ts
effectGroup: {
	typeCode: "BUG",
	windows: [0, 250],
	nested: {
		combatType: "POKEMON_TYPE_BUG",
	},
	tags: ["fast"],
},
```

and:

```ts
effectGroup: {
	typeCode: "DARK",
	windows: [0, 300],
	nested: {
		combatType: "POKEMON_TYPE_DARK",
	},
	tags: ["fast", "charged"],
},
```

Keep the existing `attackScalar` and `attackType` fields. `attackType` must keep proving the `TemplateID` mirror rule.

- [ ] **Step 2: Update stale generic assertions and add the failing emitter assertions**

In `src/emit.test.ts`, update the first `emitGroupFile` test so the existing generic assertions match the current emitter:

```ts
expect(output).toContain(
	"export interface TypeEffective<TemplateID extends string> {",
);
expect(output).toContain("data: TypeEffectiveData<TemplateID>;");
expect(output).toContain(
	"export interface TypeEffectiveData<TemplateID extends string> {",
);
expect(output).toContain("attackType: TemplateID;");
```

Remove the old expectations for:

```ts
"export interface TypeEffective<T extends string> {"
"data: TypeEffectiveData<T>;"
"export interface TypeEffectiveData<T extends string> {"
"attackType: T;"
```

Replace the old inline tuple expectation:

```ts
expect(output).toContain("attackScalar: [");
```

with:

```ts
expect(output).toContain("attackScalar: TypeEffectiveAttackScalar;");
expect(output).toContain("export type TypeEffectiveAttackScalar = [");
```

Then add these assertions after the `attackType` expectations:

```ts
expect(output).toContain("effectGroup: {");
expect(output).toContain("typeCode: TypeEffectiveEffectGroupTypeCode;");
expect(output).toContain("windows: TypeEffectiveEffectGroupWindows;");
expect(output).toContain("combatType: TypeEffectiveEffectGroupNestedCombatType;");
expect(output).toContain("tags: Array<TypeEffectiveEffectGroupTags>;");
expect(output).toContain(`export type TypeEffectiveEffectGroupTypeCode = "BUG" | "DARK";`);
expect(output).toContain("export type TypeEffectiveEffectGroupWindows = [");
expect(output).toContain(`export type TypeEffectiveEffectGroupNestedCombatType = "POKEMON_TYPE_BUG" | "POKEMON_TYPE_DARK";`);
expect(output).toContain(`export type TypeEffectiveEffectGroupTags = "charged" | "fast";`);
expect(output).toContain("accuracyChance: 1;");
expect(output).not.toContain(`typeCode: "BUG" | "DARK";`);
expect(output).not.toContain(`combatType: "POKEMON_TYPE_BUG" | "POKEMON_TYPE_DARK";`);
```

Also add `accuracyChance: 1` to both `typeEffective.effectGroup` objects so the test proves single literals stay inline:

```ts
accuracyChance: 1,
```

In the `"renders variable arrays and optional nested properties from inferred group payloads"` test, replace:

```ts
expect(output).toContain(`forms: Array<"NORMAL" | "SHADOW">;`);
```

with:

```ts
expect(output).toContain("forms: Array<PokemonSettingsForms>;");
expect(output).toContain(`export type PokemonSettingsForms = "NORMAL" | "SHADOW";`);
expect(output).not.toContain(`forms: Array<"NORMAL" | "SHADOW">;`);
```

- [ ] **Step 3: Run the failing test**

Run:

```bash
bun test src/emit.test.ts
```

Expected: the updated test fails because `typeCode`, `windows`, `combatType`, and `tags` are still rendered inline. It must not fail because of the old `T` generic-name assertions.

## Task 2: Add Alias Planning in `emit.ts`

**Files:**
- Modify: `src/emit.ts`
- Test: `src/emit.test.ts`

- [ ] **Step 1: Add alias planner interfaces**

Near the top of `src/emit.ts`, after `interface TemplateValue`, add:

```ts
interface PlannedAlias {
	path: string[];
	pathKey: string;
	name: string;
	type: InferredType;
	wrapsArrayElement: boolean;
}

interface AliasPlan {
	aliases: PlannedAlias[];
	byPath: Map<string, PlannedAlias>;
}

interface RenderContext {
	aliases: AliasPlan;
	path: string[];
}

const EMPTY_ALIAS_PLAN: AliasPlan = {
	aliases: [],
	byPath: new Map(),
};
```

- [ ] **Step 2: Add alias planning helpers**

In `src/emit.ts`, add these helpers below `renderUnionType`:

```ts
function planTypeAliases(groupDisplayName: string, payloadType: InferredType): AliasPlan {
	const candidates: Array<Omit<PlannedAlias, "name">> = [];
	collectAliasCandidates(payloadType, [], candidates);
	const sorted = candidates.sort((a, b) => a.pathKey.localeCompare(b.pathKey));
	const nameCounts = new Map<string, number>();
	const aliases = sorted.map((candidate) => {
		const baseName = aliasNameForPath(groupDisplayName, candidate.path);
		const count = nameCounts.get(baseName) ?? 0;
		nameCounts.set(baseName, count + 1);
		return {
			...candidate,
			name: count === 0 ? baseName : `${baseName}${count + 1}`,
		};
	});
	return {
		aliases,
		byPath: new Map(aliases.map((alias) => [alias.pathKey, alias])),
	};
}

function collectAliasCandidates(
	type: InferredType,
	path: string[],
	candidates: Array<Omit<PlannedAlias, "name">>,
): void {
	if (path.length > 0 && isAliasWorthyType(type)) {
		candidates.push({
			path,
			pathKey: aliasPathKey(path),
			type,
			wrapsArrayElement: false,
		});
		return;
	}

	if (type.kind === "object") {
		for (const property of type.properties) {
			collectAliasCandidates(property.type, [...path, property.name], candidates);
		}
		return;
	}

	if (type.kind === "array") {
		if (path.length > 0 && isAliasWorthyType(type.element)) {
			candidates.push({
				path,
				pathKey: aliasPathKey(path),
				type: type.element,
				wrapsArrayElement: true,
			});
			return;
		}
		collectAliasCandidates(type.element, path, candidates);
	}
}

function isAliasWorthyType(type: InferredType): boolean {
	switch (type.kind) {
		case "boolean":
		case "number":
		case "string":
			return type.literals.length > 1;
		case "tuple":
			return type.items.length > 0;
		case "union":
			return type.variants.length > 1;
		case "array":
		case "object":
		case "null":
		case "templateIdReference":
			return false;
	}
}

function aliasPathKey(path: readonly string[]): string {
	return path.join(".");
}

function aliasNameForPath(groupDisplayName: string, path: readonly string[]): string {
	return `${groupDisplayName}${path.map(aliasNameSegment).join("")}`;
}

function aliasNameSegment(segment: string): string {
	const value = aliasSuffix(segment, "");
	return value.endsWith("Id") ? `${value.slice(0, -2)}ID` : value;
}
```

- [ ] **Step 3: Make render helpers path-aware**

Update these function signatures in `src/emit.ts`:

```ts
function renderType(type: InferredType, context: RenderContext): string[]
function renderProperty(
	name: string,
	type: InferredType,
	optional: boolean,
	indent: string,
	context: RenderContext,
): string[]
function renderObjectType(properties: InferredProperty[], context: RenderContext): string[]
function renderTupleType(items: InferredType[], context: RenderContext): string[]
function renderArrayType(element: InferredType, context: RenderContext): string[]
function renderUnionType(variants: InferredType[], context: RenderContext): string[]
```

At the top of `renderType`, before inline rendering, add:

```ts
const plannedAlias = context.aliases.byPath.get(aliasPathKey(context.path));
if (plannedAlias) {
	if (plannedAlias.wrapsArrayElement) return [`Array<${plannedAlias.name}>`];
	return [plannedAlias.name];
}
```

Where `renderObjectType` renders each property, pass the nested path:

```ts
lines.push(
	...renderProperty(property.name, property.type, property.optional, "\t", {
		...context,
		path: [...context.path, property.name],
	}),
);
```

Where `renderArrayType` renders a non-aliased element, pass the existing path:

```ts
const elementLines = renderType(element, context);
```

Where `renderTupleType` renders tuple items, pass the same path. Tuple item aliases are not named separately in this pass because the tuple alias owns the tuple shape.

- [ ] **Step 4: Add alias definition rendering**

In `src/emit.ts`, add:

```ts
function renderAliasDefinitions(plan: AliasPlan): string[] {
	const lines: string[] = [];
	for (const alias of plan.aliases) {
		const typeLines = renderType(alias.type, {
			aliases: EMPTY_ALIAS_PLAN,
			path: alias.path,
		});
		if (typeLines.length === 1) {
			lines.push(`export type ${alias.name} = ${typeLines[0]};`);
			lines.push(``);
			continue;
		}
		if (typeLines[0]?.startsWith("| ")) {
			lines.push(`export type ${alias.name} =`);
			typeLines.forEach((line, index) => {
				const suffix = index === typeLines.length - 1 ? ";" : "";
				lines.push(`\t${line}${suffix}`);
			});
			lines.push(``);
			continue;
		}
		lines.push(`export type ${alias.name} = ${typeLines[0]}`);
		for (const line of typeLines.slice(1, -1)) {
			lines.push(line);
		}
		lines.push(`${typeLines[typeLines.length - 1]};`);
		lines.push(``);
	}
	return lines;
}
```

Alias definitions render with `EMPTY_ALIAS_PLAN` so alias bodies do not recursively reference themselves.

- [ ] **Step 5: Wire the alias plan into `emitGroupFile` only**

In `emitGroupFile`, after `const payloadType = inferGroupPayloadType(group);`, add:

```ts
const aliasPlan = planTypeAliases(gName, payloadType);
```

Replace the group discriminator property render call with:

```ts
lines.push(
	...renderProperty(group.discriminator, payloadType, false, "\t", {
		aliases: aliasPlan,
		path: [],
	}),
);
```

After the `Data` interface closing brace and blank line, emit aliases before per-entry aliases:

```ts
lines.push(...renderAliasDefinitions(aliasPlan));
```

Keep `emitMiscFile` using `EMPTY_ALIAS_PLAN`:

```ts
lines.push(
	...renderProperty(group.discriminator, payloadType, false, "\t\t", {
		aliases: EMPTY_ALIAS_PLAN,
		path: [],
	}),
);
```

- [ ] **Step 6: Run the focused test**

Run:

```bash
bun test src/emit.test.ts
```

Expected: all `src/emit.test.ts` tests pass.

- [ ] **Step 7: Commit the source change**

```bash
git add src/emit.ts src/emit.test.ts src/fixtures.ts
git commit -m "feat: extract nested union and tuple aliases"
```

Do not include `packages/ts-v2/src/groups/move-settings.ts` in this commit.

## Task 3: Generate Output and Verify

**Files:**
- Modify by generation: `packages/ts-v2/src/groups/*.ts`
- Test: `src/*.test.ts`

- [ ] **Step 1: Run full source checks before generation**

Run:

```bash
bun test
bun run typecheck
bun run lint
```

Expected: all commands exit 0. `bun test` should report all tests passing.

- [ ] **Step 2: Regenerate TypeScript-v2 output**

Run:

```bash
bun run generate
```

Expected output includes:

```text
Fetched 18050 entries.
Grouped into 197 discriminators.
Wrote 61 files to /Users/rin/GitHub/pogo-masterfile-types/packages/ts-v2/src
```

- [ ] **Step 3: Check the reference generated file without broad generated-file parsing**

Run:

```bash
rg -n "movementId:|export type MoveSettingsMovementID|obMoveSettingsNumber18:|export type MoveSettingsObMoveSettingsNumber18|vfxName:|export type MoveSettingsVfxName" packages/ts-v2/src/groups/move-settings.ts
```

Expected: `movementId`, `obMoveSettingsNumber18`, and `vfxName` use aliases, and the matching exported alias definitions exist in the same file.

- [ ] **Step 4: Run full checks after generation**

Run:

```bash
bun test
bun run typecheck
bun run lint
```

Expected: all commands exit 0.

- [ ] **Step 5: Commit generated output**

```bash
git add packages/ts-v2/src/groups src/emit.ts src/emit.test.ts src/fixtures.ts
git commit -m "chore: regenerate TypeScript aliases for inferred unions"
```

If `src/emit.ts`, `src/emit.test.ts`, and `src/fixtures.ts` were already committed in Task 2, `git add` will include only generated files.

## Self-Review Checklist

- [ ] The plan keeps alias extraction in `src/emit.ts` and does not add TypeScript alias metadata to `src/infer.ts`.
- [ ] Nested paths generate full-path alias names like `TypeEffectiveEffectGroupNestedCombatType`.
- [ ] Single literal values and `TemplateID` references remain inline.
- [ ] The generated `move-settings.ts` example is produced by `bun run generate`, not by hand edits.
