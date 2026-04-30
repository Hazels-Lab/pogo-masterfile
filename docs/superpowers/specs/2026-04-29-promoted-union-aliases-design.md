# Promoted Union Aliases — Design Spec

**Date:** 2026-04-29
**Author:** brainstorming session (derick.magnusen@gmail.com + Claude)
**Status:** Implemented (with revision — see below)

## Revision (2026-04-29, post-implementation)

The original design declared a separate prefix-derived alias (`PokemonType`, `WeatherAffinity`, etc.) in each source group's `types.ts`. That alias is **always** equal to `${groupName(disc)}TemplateID`, which the generator already publishes from `entries.ts`. The two were duplicate names for the same set of strings, and unused prefix-derived aliases (e.g., `Avatar`, `Badge`) added thousands of lines of dead literal-union noise.

**As shipped**, the generator skips the new alias entirely and rewrites consumer-side promotions to reference `${groupName(disc)}TemplateID` directly, importing from `../<source>/entries` (which resolves to either `entries.ts` for flat groups or `entries/index.ts` for split groups). Collision resolution is gone — `${groupName(disc)}TemplateID` is unique by construction. The shared-prefix eligibility check on the source side is retained as a "looks like a domain enum" guard.

The rest of this document describes the original (pre-revision) design.

## Problem

The generated TypeScript output repeats the same large string-literal unions across many group files. The most obvious offender is the 18-member union of Pokémon types:

```ts
| "POKEMON_TYPE_BUG"
| "POKEMON_TYPE_DARK"
| "POKEMON_TYPE_DRAGON"
| ...
| "POKEMON_TYPE_WATER";
```

This shape appears verbatim in `move-settings/types.ts`, `combat-move/types.ts`, `weather-affinities/types.ts`, `invasion-npc-display-settings/types.ts`, `combat-league/types.ts`, `pokemon-settings/types.ts` (twice — `type` and `type2`), and elsewhere. The 18 templateIds of the `typeEffective` group are exactly this set, so every duplicated union is conceptually a reference to the same domain enum, but the generator emits each occurrence as a flat literal union.

The same pattern recurs for other prefix-shaped templateId sets across the masterfile (`COMBAT_POKEMON_TYPE_*`, `WEATHER_AFFINITY_*`, etc.). The longer the list of templateIds, the more painful the duplication is for readers and the larger the generated `.d.ts` surface gets.

## Goal

Auto-detect which multi-entry groups are "domain enums" (their templateIds share a common prefix), emit a single named alias for each such enum from the owning group's `types.ts`, and rewrite inline literal unions in other groups' generated types to reference those aliases. End users get a stable named type to import (`PokemonType`, `WeatherAffinity`, etc.); generated files shrink; the masterfile stays the single source of truth — no curated lists, no manual mappings.

The transformation must be **lossless**: every literal value that the generator would have emitted as part of an inline union remains representable through the rewritten reference (either equal to the alias or `Exclude<alias, ...>`).

## Design

### High-level pipeline

Three new pieces in `src/`:

1. **`promoted-unions.ts`** — pure module that, given the parsed `Map<string, Group>`, returns a `PromotionRegistry` of every group eligible for alias promotion.
2. **A widening hook in `inferredToType`** — when emitting a string-with-literals node, consult the registry and may rewrite the node to either a type reference or an `Exclude<...>` expression.
3. **Alias emission in `emitGroupTypes`** — when the *current* group qualifies, declare `export type ${aliasName} = "X" | "Y" | ...;` directly in `${group}/types.ts`. Always emit when the group qualifies, regardless of downstream usage.

The promotion check is the only opinionated logic. It has exactly one tunable: `PROMOTION_EXCLUDE_DELTA_RATIO` (default `0.25`) added to `src/constants.ts`.

### Eligibility & registry build

A group qualifies as a *promotion source* when:

- `group.entries.length >= 2`, and
- `sharedPrefix(templateIds) !== ""` (the existing helper from `src/naming.ts`).

Building the registry runs once after `groupEntries`:

```
buildPromotionRegistry(groups):
  registry = []
  for each group in groups.values():
    if group.entries.length < 2: continue
    prefix = sharedPrefix(group.entries.map(e => e.templateId))
    if prefix === "": continue
    aliasName = pascalCase(prefix.replace(/_+$/, ""))
    members = sorted set of group.entries.map(e => e.templateId)
    registry.push({ group, aliasName, members })
  resolveCollisions(registry, groups)
  return registry
```

`resolveCollisions` enforces two rules deterministically:

- **Alias-vs-interface collision.** If `aliasName === groupName(disc)` for any group in the parsed input, append `"Id"` to the colliding alias (e.g., `PokemonType` → `PokemonTypeId`). Per-alias, deterministic.
- **Alias-vs-alias collision.** If two registry entries derive the same alias, append `pascalCase(disc)` to each colliding alias as a deterministic disambiguator. (Not expected in current data; defensive only.)

### Promotion lookup

Given an inferred string union `inline` (a non-empty `Set<string>`), `tryPromote` returns one of three outcomes:

```
tryPromote(inline, registry):
  if inline.size <= 1: return null    // single literal stays inline
  candidates = []
  for entry in registry:
    if !isSubsetOrEqual(inline, entry.members): continue
    candidates.push(entry)
  if candidates.length === 0: return null

  // Smallest containing group wins; alphabetical aliasName tiebreak.
  candidates.sort((a, b) =>
    a.members.size - b.members.size
    || a.aliasName.localeCompare(b.aliasName)
  )
  best = candidates[0]
  if inline equals best.members:
    return { kind: "ref", aliasName: best.aliasName, sourceGroup: best.group }
  missing = best.members \ inline
  if missing.size === 0: return null  // already covered by equality branch
  if missing.size / best.members.size > PROMOTION_EXCLUDE_DELTA_RATIO:
    return null                       // too far — leave inline
  return { kind: "exclude", aliasName: best.aliasName, missing, sourceGroup: best.group }
```

Edge cases:

- **`inline.size === 1`** never promotes (a single literal is clearer as-is than as `Exclude<PokemonType, 17 things>`).
- **`inline.size === 0`** is impossible at this point (empty unions widen to `string`, which has no literal set).
- **Self-promotion.** A group's own data cannot widen to a union of its own templateIds — `widenType` strips templateId-tied invariants to bare `string` before this layer sees them. No special handling needed; defensive `if (sourceGroup === currentGroup) skip` in the lookup is wise but should never fire.

### Output shape

**`type-effective/types.ts`** (promotion source):

```ts
import type { W } from "../_utils";

export interface TypeEffective<...> { ... }
export type TypeEffectiveType = W<TypeEffective>;
export interface TypeEffectiveData { ... }

export type PokemonType =
  | "POKEMON_TYPE_BUG"
  | "POKEMON_TYPE_DARK"
  | "POKEMON_TYPE_DRAGON"
  | ...
  | "POKEMON_TYPE_WATER";
```

The alias is a flat literal union, sorted alphabetically (matches existing union ordering). It is generated directly from `group.entries.map(e => e.templateId).sort()` — no dependency on `entries.ts`. The duplication between this union and the entries' `TemplateID` generic args is intentional: both come from the same masterfile JSON in one generator run, so they cannot drift.

**`move-settings/types.ts`** (consumer, exact match):

```ts
import type { W } from "../_utils";
import type { PokemonType } from "../type-effective/types";

export interface MoveSettingsData {
  ...
  pokemonType: PokemonType;
  ...
}
```

**`pokemon-settings/types.ts`** (consumer, Exclude match):

```ts
import type { PokemonType } from "../type-effective/types";

// inside tempEvoOverrides[]:
typeOverride1?: Exclude<
  PokemonType,
  "POKEMON_TYPE_FAIRY" | "POKEMON_TYPE_FLYING" | "POKEMON_TYPE_POISON"
>;
```

The `Exclude` payload lists the *missing* members in alphabetical order. With `PROMOTION_EXCLUDE_DELTA_RATIO = 0.25` and an 18-member source, up to 4 missing members will trigger the `Exclude` form; 5+ missing falls back to inline.

### Plumbing changes

- **`inferredToType`** (in `src/builder.ts`) gains an optional context parameter. The signature becomes `inferredToType(type, ctx?)` where `ctx` carries the `PromotionRegistry`, an `imports` collector, and the current group identity. When `ctx` is omitted (existing tests, non-promotion callers), behavior is identical to today. When promotion fires, the alias's source path is added to `ctx.imports`.

- **`emitGroupTypes`** (in `src/emit.ts`) builds a fresh `imports` collector per file, calls `inferredToType` with that context for the data type, then prepends one `importNamed("../${kebabCase(otherDisc)}/types", [aliasName], typeOnly=true)` per distinct source group hit (excluding the current group, which would be a self-import). When the current group itself qualifies, append the alias declaration after the existing `${gName}Data` interface — rendered via `T.union(...members.map(T.literal))`.

- **`emitEntriesFlat`** and **`emitEntryFile`** are not touched. Entry files keep their concrete templateId literals (`"POKEMON_TYPE_BUG"`) as the generic argument to the group interface — exactly preserving the existing entry shape.

- **`emitTypesFile`** (top-level `types.ts`) is not touched. The new aliases are picked up automatically by the existing `export type * from "./${kebabCase(disc)}/types"` re-exports.

### Flat-group `TemplateID` alias (in scope)

Today, only split groups emit a `${GroupName}TemplateID` alias (via `emitEntriesBarrel` in `src/emit.ts`). Flat groups (e.g., `type-effective`, `combat-type`) do not. Extend `emitEntriesFlat` to emit the same alias:

```ts
export type TypeEffectiveTemplateID = TypeEffectiveMasterfileEntry["templateId"];
```

This is independent of the promotion machinery — it just keeps the `TemplateID` surface uniform across split and flat groups so end users don't have to know the difference. No change to call sites; the alias is purely additive.

### Cycles

Cross-group `import type` between `types.ts` files is type-only, so TypeScript handles cycles fine. Functionally, cycles should not arise here: a group's data only references *other* groups' templateIds; the source group's own data never materializes as a string literal union of its own templateIds because `widenType` strips templateId-tied invariants to bare `string` before the promotion layer sees them. A defensive `if (sourceGroup === currentGroup) skip` in the promotion lookup belt-and-braces this.

### The single tunable

`PROMOTION_EXCLUDE_DELTA_RATIO` (default `0.25`) lives in `src/constants.ts` next to the other generator constants. Changing it is a one-line tweak followed by a regenerate. The bound is inclusive: `missing.size / members.size <= ratio` triggers `Exclude`.

## Testing

New unit tests follow the existing `*.test.ts` colocation pattern in `src/`:

- **`promoted-unions.test.ts`** — eligibility (size threshold, empty prefix), naming rule (trailing `_` strip + PascalCase), collision fallback (`PokemonType` → `PokemonTypeId` if a group named `PokemonType` existed), multi-match resolution (smallest group wins, alphabetical tiebreak), exclude-delta boundary cases (right at the ratio, just over, single missing in a small set), `inline.size === 1` never promotes.

- **`emit.test.ts`** — additions for: a fixture group whose templateIds form a promotable prefix; assert the alias is emitted in `types.ts`; assert a consumer group's data references it via `import type`; assert exact / `Exclude` / inline paths all produce expected output; assert `emitEntriesFlat` now also emits a `TemplateID` alias.

Existing tests stay green: `inferredToType`'s new `ctx` parameter is optional, so call sites that omit it (current tests) see identical behavior.

## Migration

1. Land the generator changes with empty-registry compatibility (existing tests pass unchanged).
2. Wire `buildPromotionRegistry` into `generate.ts` and thread the registry into the emit calls.
3. Run `bun run src/generate.ts`. Inspect diffs in sentinel files: `move-settings/types.ts`, `weather-affinities/types.ts`, `combat-move/types.ts`, `pokemon-settings/types.ts`, `type-effective/types.ts` (now exports `PokemonType`).
4. Run `tsc --noEmit` over `packages/ts/src` to confirm the regenerated output type-checks (no broken cross-imports, no name collisions).
5. User verifies by importing the package downstream and spot-checking `PokemonType` exists and is assignable where expected.

## Out of scope

- **Rust and Go packages** (`packages/rust/lib.rs`, `packages/go/main.go`). Different generator pipelines off the same masterfile. Same idea applies but is a separate effort.
- **Subset detection beyond exact-or-near-exact `Exclude`.** No `Extract<...>` for small subsets — a 3-of-18 inline union reads more clearly as `"A" | "B" | "C"` than as `Extract<PokemonType, "A" | "B" | "C">`.
- **Promotion based on anything other than a templateId prefix match.** No deduplication across structurally identical inline unions that don't correspond to a real group's templateIds.
- **Curated allowlist / config file.** Detection is fully automatic from the masterfile.
