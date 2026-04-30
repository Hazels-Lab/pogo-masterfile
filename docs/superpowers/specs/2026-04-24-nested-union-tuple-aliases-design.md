# Nested Union/Tuple Alias Extraction — Design

**Date:** 2026-04-24
**Status:** Approved for implementation planning
**Scope:** TypeScript-v2 emitter improvement for inferred JSON payload types.

## Problem

The current inferred TypeScript output is exact but noisy when fields contain large literal
unions or tuples. For example, `packages/ts-v2/src/groups/move-settings.ts` can
inline very large unions for fields such as `movementId`, `pokemonType`, and `vfxName`,
and can inline tuple types such as `obMoveSettingsNumber18`.

We want the generated object shape to stay readable by extracting these unions and tuples
into named exported aliases, then replacing the inline type with that alias.

## Approved Design Decisions

| # | Decision | Chosen |
|---|---|---|
| 1 | Alias extraction scope | Extract nested unions and tuples, not only direct payload fields. |
| 2 | Alias naming | Use full property-path names to avoid collisions. |
| 3 | Implementation boundary | Keep this TypeScript-only in `src/emit.ts`; do not change the language-neutral inference IR. |
| 4 | Grouping and public entry names | Preserve existing generated group files, interfaces, generic names, per-template aliases, and masterfile unions. |

## Architecture

Add a TypeScript alias planner inside `src/emit.ts`.

The emitter should still infer payload shapes exactly as it does today. Before rendering a
multi-entry group payload, it should walk the inferred payload tree and collect alias-worthy
nodes. Rendering then uses those aliases in object properties, and emits the alias
definitions after the main `Data` interface and before the per-template entry aliases.

This keeps aliasing as a rendering policy rather than a data-inference fact. Go and Rust
emitters may want different alias rules later, so the core `InferredType` model should not
grow TypeScript alias metadata for this pass.

## Alias-Worthy Types

Extract aliases for:

- Literal unions with more than one literal, including string, number, boolean, and mixed
  rendered unions.
- Tuple types with one or more items.
- Nested unions or tuples anywhere inside an object tree.

Keep these inline:

- Single literal values such as `accuracyChance: 1`.
- `TemplateID` references produced by the existing template-id mirror rule.
- Empty objects such as `Record<string, never>`.
- Variable arrays unless their element type contains an alias-worthy nested union or tuple.

If a variable array has an alias-worthy element type, alias the nested element at its full
path and render the array as `Array<AliasName>`.

## Naming Rules

Alias names use the group name plus the full property path from the discriminator payload:

```ts
moveSettings.movementId -> MoveSettingsMovementID
moveSettings.combatMove.uniqueIdType -> MoveSettingsCombatMoveUniqueIDType
moveSettings.obMoveSettingsNumber18 -> MoveSettingsObMoveSettingsNumber18
```

The name should be PascalCase and deterministic. To match the existing `TemplateID` generic
and the approved examples, property segments ending in `Id` should render with an `ID`
suffix, so `movementId` becomes `MovementID`. Do not add a broader acronym dictionary in
this pass.

If two paths still collide after PascalCasing, append a stable numeric suffix based on
lexicographic path order. The collision rule is a safety net; full path names should make
collisions rare.

## Output Shape

Before:

```ts
export interface MoveSettingsData<TemplateID extends string> {
  templateId: TemplateID;
  moveSettings: {
    movementId: "ACID_FAST" | "AERIAL_ACE";
    obMoveSettingsNumber18?: [
      0 | 250 | 350,
      0 | 300 | 400
    ];
  };
}
```

After:

```ts
export interface MoveSettingsData<TemplateID extends string> {
  templateId: TemplateID;
  moveSettings: {
    movementId: MoveSettingsMovementID;
    obMoveSettingsNumber18?: MoveSettingsObMoveSettingsNumber18;
  };
}

export type MoveSettingsMovementID = "ACID_FAST" | "AERIAL_ACE";

export type MoveSettingsObMoveSettingsNumber18 = [
  0 | 250 | 350,
  0 | 300 | 400
];
```

Nested example:

```ts
moveSettings: {
  combatMove: {
    uniqueIdType: MoveSettingsCombatMoveUniqueIDType;
  };
}

export type MoveSettingsCombatMoveUniqueIDType =
  | "POKEMON_TYPE_FIRE"
  | "POKEMON_TYPE_WATER";
```

## Testing

Add focused emitter tests that prove:

- Direct payload unions are replaced by exported aliases.
- Direct payload tuples are replaced by exported aliases.
- Nested object unions use full-path alias names.
- Single literal values stay inline.
- Template-id mirror fields still render as `TemplateID`, not as aliases.
- Existing generated group names, per-entry aliases, and masterfile unions do not change.

Run `bun test`, `bun run typecheck`, `bun run lint`, and `bun run generate`. Generated
output review should include `packages/ts-v2/src/groups/move-settings.ts` as the
reference example.
