# TData Generic Refactor — Design Spec

**Date:** 2026-04-24
**Author:** brainstorming session (derick.magnusen@gmail.com + Claude)
**Status:** Ready for plan-writing

## Problem

The current TypeScript masterfile generator emits **one generic parameter per alias-worthy field** for multi-entry groups. For groups with many optional fields (e.g. `item-settings.ts`, `combat-move.ts`, `avatar-customization.ts`), this produces 10–40+ generic parameters and forces sparse variants to fill unused slots with widened defaults like `string` / `number`. The resulting per-variant types misrepresent the actual data shape:

```typescript
// combat-move.ts — 12 generics
export type CombatMoveV0013MoveWrap = CombatMove<
  "COMBAT_V0013_MOVE_WRAP",
  number,  // filler — variant has no attackerAttackStatStageChange
  number,  // filler
  1,       // real literal
  ...
>;
```

The filler positions *claim* those fields exist on the variant (as widened primitives), which is a lie. A consumer narrowing to `CombatMoveV0013MoveWrap` gets type errors at runtime when they try to read fields the runtime data doesn't actually have.

Groups with few, uniformly-present fields (e.g. `combat-type.ts`, `type-effective.ts`) work well today. The problem is specifically sparsity — fields present in some variants but not others.

## Goal

Replace the multi-generic pattern with a single `TData` generic that lets each per-variant alias declare **only the fields that variant actually has**. Preserve the good behavior for uniformly-populated groups. Move fields that are truly invariant across all variants into the base interface body instead of repeating them per variant.

## Design

### Output Shape

Every multi-entry group emits exactly three top-level declarations (plus the existing union + TemplateID alias):

1. **Generic base interface** — two generics always:

```typescript
export interface X<
  TemplateID extends string = string,
  TData extends XData = XData,
> {
  templateId: TemplateID;
  data: {
    templateId: TemplateID;
    [discriminator]: TData & { ...invariants };
  };
}
```

The `& { ...invariants }` intersection contains fields invariant across all variants (see Invariant Detection below). If no invariants exist, the intersection is dropped: `[discriminator]: TData;`.

2. **`XData` widened interface** — every variable field across all variants, all optional, values widened:

```typescript
export interface XData {
  // every field that appears in at least one variant
  // all properties optional (?:)
  // primitive values widened (string/number/boolean)
  // tuples preserve length but widen elements
  // nested objects recurse the same widening rule
  // arrays emit as Array<T> with widened element type
}
```

No separate named tuple/array aliases. Tuples appear inline in `XData`. Consumers wanting the tuple type can reference `XData["fieldName"]`.

3. **Per-variant aliases** — each entry binds TData to a literal subset:

```typescript
export type XBug = X<
  "BUG_ID",
  {
    // only fields this variant has, with exact literal values
    // fields already in base-body invariants are NOT repeated here
  }
>;
```

If a variant's TData would be `{}` after stripping invariants, the second generic arg is elided via the trailing-default rule: `export type XFoo = X<"FOO_ID">;`.

### Invariant Detection

A field is hoisted from `XData` into the base-body intersection only when strict criteria are met. Two kinds:

**Kind 1 — Literal constants.** The field is present in **every entry** of the group and every entry holds the **same literal value**. Equality is **deep/structural** (JSON-equivalent): primitives compare by value, arrays/tuples compare element-wise, objects compare key-wise. This matters because the input is loaded by `JSON.parse`, so `[0, 250]` in two different entries are distinct references but structurally equal — they still qualify as a constant.

```typescript
// Every combat-type entry has excellentLevelThreshold: 0.95
combatType: TData & {
  excellentLevelThreshold: 0.95;
  niceLevelThreshold: 0.3;
};
```

**Kind 2 — TemplateID ties.** The field is present in **every entry** and its value **always equals** the entry's own `templateId`.

```typescript
// Every type-effective entry has attackType === entry.templateId
typeEffective: TData & {
  attackType: TemplateID;
};
```

**Kind 1 vs Kind 2 are mutually exclusive** in multi-entry groups: Kind 1 requires the same literal across all entries, Kind 2 requires the value to differ per-entry (always equal to that entry's distinct templateId). No priority rule is needed.

**Nested invariants.** Invariant detection runs recursively. A constant or tied field nested inside an object can be hoisted — but **only** if every entry in the group has the **full path** to that field present.

```typescript
// All 18 entries have effectGroup.nestedCombatType.combatType: "DEFAULT"
typeEffective: TData & {
  accuracyChance: 1;
  effectGroup: {
    nestedCombatType: { combatType: "DEFAULT" };
  };
};
```

If 17/18 entries have `effectGroup.nestedCombatType` and 1 doesn't, the whole subtree stays in `XData` — hoisting it would falsely claim the subtree exists on every variant.

**What does NOT become an invariant:**

- Field present in most-but-not-all entries → stays in `XData`.
- Field present in all entries but with varying values → stays in `XData`.
- Tuples / arrays with the same literal value across all entries **do** qualify (a tuple literal like `[0, 250]` across all entries is a Kind 1 constant).

### Per-Variant TData Emission

Construct each entry's TData literal by walking its own `data[discriminator]` object recursively:

1. Drop keys that are base-body invariants (Kind 1 or Kind 2).
2. Keep remaining keys with exact literal values.
3. For nested objects, recurse — a nested object may have some invariant children and some variable children; keep only the variable ones.
4. Tuple / array values are emitted as tuple literals preserving per-variant length.

**Empty-TData elision.** If the stripped payload is `{}`, emit `X<"ID">` (no second arg).

**Partial nested elision.** If a nested object has all its children hoisted as invariants, the parent key disappears from the variant's TData entirely. No empty-object shells like `effectGroup: {}`.

### Concrete Example — type-effective.ts

```typescript
export interface TypeEffective<
  TemplateID extends string = string,
  TData extends TypeEffectiveData = TypeEffectiveData,
> {
  templateId: TemplateID;
  data: {
    templateId: TemplateID;
    typeEffective: TData & {
      attackType: TemplateID;
      accuracyChance: 1;
      effectGroup: {
        nestedCombatType: { combatType: "DEFAULT" };
      };
    };
  };
}

export interface TypeEffectiveData {
  attackScalar?: [
    number, number, number, number, number, number,
    number, number, number, number, number, number,
    number, number, number, number, number, number
  ];
  effectGroup?: {
    typeCode?: string;
    tags?: string[];
    windows?: [number, number];
  };
}

export type TypeEffectiveBug = TypeEffective<
  "POKEMON_TYPE_BUG",
  {
    attackScalar: [1, 0.625, 0.625, 0.625, 1, 1, 1, 0.625, 0.625, 0.625, 1, 1.6, 1, 1.6, 1, 1, 1.6, 0.625];
    effectGroup: {
      typeCode: "BUG";
      tags: ["fast"];
      windows: [0, 250];
    };
  }
>;

// ... 17 more variants ...

export type TypeEffectiveMasterfileEntry =
  | TypeEffectiveBug
  | TypeEffectiveDark
  // ...
  | TypeEffectiveWater;

export type TypeEffectiveTemplateID = TypeEffectiveMasterfileEntry["templateId"];
```

### Concrete Example — item-settings.ts (sparse variants)

Where today item-settings has 40+ generics with filler, the new shape is:

```typescript
export interface ItemSettings<
  TemplateID extends string = string,
  TData extends ItemSettingsData = ItemSettingsData,
> {
  templateId: TemplateID;
  data: {
    templateId: TemplateID;
    itemSettings: TData;
  };
}

export interface ItemSettingsData {
  category?: string;
  descriptionOverride?: string;
  itemBerry?: { berryMultiplier?: number };
  itemCap?: number;
  // ... all other variable fields, all optional
}

export type ItemSettingsBerryRazz = ItemSettings<
  "ITEM_RAZZ_BERRY",
  {
    category: "ITEM_CATEGORY_FOOD";
    itemBerry: { berryMultiplier: 1.2 };
  }
>;

export type ItemSettingsBerryNanab = ItemSettings<
  "ITEM_NANAB_BERRY",
  {
    category: "ITEM_CATEGORY_FOOD";
    itemBerry: { berryMultiplier: 1.2 };
  }
>;

// Variants without itemBerry/descriptionOverride/etc simply omit them.
```

### Singleton Groups (misc.ts)

Unchanged. Single-entry groups continue to emit concrete (non-generic) interfaces.

### Edge Cases

| Case | Behavior |
|---|---|
| All variants have identical payload (all invariants) | `XData = {}`, every variant uses elision `X<"ID">` |
| Variant with `{}` TData after stripping | Elide second arg |
| Nested object where every child hoists to invariants | Parent key disappears from variant TData |
| Field absent in all entries | Not in `XData`, not in base body |
| Field in 17/18 entries, same value | Stays in `XData` (optional) |
| Field in 17/18 entries, varying values | Stays in `XData` (optional) |

## Implementation Outline

### Removed from the current generator

- Multi-generic header emission (one generic per alias-worthy path)
- Per-alias generic param naming (`genericParamName`, `inlinePrimitiveGenericName`, `availableAliasName` reservation loop)
- Tuple-alias rendering and the `{GroupName}{AliasName}` alias types
- `inferPerEntryTypeAtPath` (subsumed by a simpler full-payload walk)
- Primitive-vs-aliased and array-wrapper bookkeeping in `RenderContext`
- Trailing-default elision of individual generic args (replaced by single-arg elision for empty TData)

### Retained

- `widenType` (used for `XData` widening)
- The `InferredType` ADT, `inferJsonTypes`
- `emitMiscFile`, `emitIndexFile`, `kebabCase`, `aliasNameSegment`
- `Group` shape and `groupEntries`

### New logic

1. **Invariant detection** — two-pass walk over all entries per group:
   - Kind 1 (constants): field present everywhere with same `===`-equal literal
   - Kind 2 (TemplateID ties): field present everywhere, value always equals `entry.templateId`
   - Recurse into nested objects; enforce "full path present in every entry" rule
2. **XData inference** — widen the union-of-all-entries shape at `data[discriminator]`, then strip invariant paths. Emit as `export interface XData { ... }`.
3. **Variant payload inference** — for each entry, walk its own payload, strip invariant paths at every nesting depth, emit the remaining literal as the TData object literal.
4. **Base-body emission** — render the intersection `TData & { ...invariants }` with proper nesting of nested invariants. Drop the intersection entirely if no invariants.
5. **Empty-TData elision** — if a variant's stripped payload is `{}`, emit the variant alias with only the TemplateID arg.

### Test strategy

- Rewrite every multi-generic-shape assertion in `src/emit.test.ts`
- New test coverage:
  - Constant detection (Kind 1) with a scalar — type-effective `accuracyChance: 1`
  - Constant detection (Kind 1) with a tuple — fixture where every entry has `windows: [0, 250]`, asserting the tuple lands in the base body (uses deep equality)
  - TemplateID tie (Kind 2) with type-effective `attackType`
  - Per-variant TData with literal tuples (type-effective Bug's 18-tuple)
  - Sparse variants (item-settings-style fixture) — variants omit fields they don't have
  - Nested invariant: fixture with all-constant children of a nested object
  - Partial nesting: 17/18 entries have a nested path, 1 doesn't → subtree stays in `XData`
  - Empty-TData elision: fixture where every field is a constant

### Migration

Single switchover. Rewrite the emit path, delete alias-planning code, regen all 60+ group files, run `bunx tsc --noEmit` on `packages/typescript` to verify every generated file compiles. Existing tests will fail first (expected) — rewrite them to match the new shape. No feature flag.

**Rust/Go emitters.** Out of scope per `CLAUDE.md`. User verifies those outputs manually after the TypeScript emitter is done.

## Non-Goals

- No changes to Rust (`packages/rust/lib.rs`) or Go (`packages/go/main.go`) emitters in this refactor.
- No changes to `misc.ts` / singleton group emission.
- No changes to the global `MasterfileEntry` / `MasterfileTemplateID` union in `index.ts`.
- No user-facing config lever for null/never/omit (omit is the only mode — user confirmed this is the clear winner).

## Verification

1. `bun test` — all rewritten tests pass.
2. `bun run generate` — regenerates all 60+ group files without error.
3. `bun run format` — Biome formatting passes.
4. `cd packages/typescript && bunx tsc --noEmit` — zero errors.
5. Spot-check generated files:
   - `type-effective.ts` — constants in base body, per-variant with literal tuples
   - `combat-type.ts` — two constants inlined, 2-generic shape
   - `item-settings.ts` — sparse variants, no filler generics
   - `combat-move.ts` — sparse variants, no filler generics
   - `avatar-customization.ts` — per-variant TData with only the relevant fields
6. Report to user so they can verify Rust/Go outputs per `CLAUDE.md`.
