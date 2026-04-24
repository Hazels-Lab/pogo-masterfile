# Masterfile Type Generator — Design

**Date:** 2026-04-23
**Status:** Approved (ready for implementation planning)
**Scope:** POC TypeScript generator that produces ergonomic types for the Pokémon GO GAME_MASTER file.

## Problem

`GAME_MASTER.json` (fetched from
`https://raw.githubusercontent.com/alexelgt/game_masters/refs/heads/master/GAME_MASTER.json`)
contains ~18,050 entries of the form:

```json
{ "templateId": "POKEMON_TYPE_BUG", "data": { "templateId": "POKEMON_TYPE_BUG", "typeEffective": { ... } } }
```

We want TypeScript types that:

- Are ergonomic (named aliases, generics, short import names).
- Avoid one extremely large file and avoid an extremely large number of files.
- Require minimal edge-case code so the generator can run unattended in CI on every upstream change.

## Data invariants observed

Empirical analysis of the current masterfile:

- **Every entry has exactly one non-`templateId` key under `data`.** This single key is the
  *discriminator* — it determines the entry's shape.
- **There are 195 unique discriminators** across 18,050 entries.
- Distribution:
  - 135 singletons (one-off config blobs like `ACCESSIBILITY_CLIENT_SETTINGS`)
  - 60 multi-entry groups (the ones that benefit from generics)
  - Largest groups: `pokemonExtendedSettings` (2464), `pokemonSettings` (2460),
    `avatarCustomization` (1757).

The discriminator key is the natural grouping axis. It is *already in the data* — the
generator does not impose any convention; it mirrors what upstream produces.

## Approved design decisions

| # | Decision | Chosen |
|---|---|---|
| 1 | Outer generic type naming | **A** — PascalCase of discriminator (`typeEffective` → `TypeEffective`). Fully deterministic; no heuristics. |
| 2 | File organization | **B** — One file per multi-entry group + one `misc.ts` holding all singletons. Barrel `index.ts`. |
| 3 | Per-entry type aliases | **A** — Emit for every templateId in every group. Derive suffix by stripping shared prefix (at underscore boundary) and PascalCasing the remainder. |
| 4 | Runtime artifacts | **A** — Types only. No `const` arrays. |

## Architecture

A single TypeScript script at `src/generate.ts`, run via `bun run src/generate.ts`, does
one pass:

```
fetch(GAME_MASTER_URL)
  ─▶ parse JSON
  ─▶ group entries by discriminator
  ─▶ derive PascalCase names (group + per-entry aliases)
  ─▶ emit .ts files into packages/typescript-v2/src/
```

The existing `src/*.ts` files from earlier attempts (`index.ts`, `template-id-grouper*.ts`,
`typescript-v2.ts`) are not reused. The new generator is a clean rewrite.

The generator is stateless and idempotent: run it, delete output, run again → byte-identical
output. That is the contract that makes it safe to drop into CI.

No shape inference in this POC — each group's data payload is typed as `unknown`. Shape
inference is an explicit follow-up, not part of this spec.

## Core algorithm

### Step 1: Group

```ts
type Entry = { templateId: string; data: Record<string, unknown> };
type Group = { discriminator: string; entries: Entry[] };

function groupEntries(entries: Entry[]): Map<string, Group> {
  const groups = new Map<string, Group>();
  for (const entry of entries) {
    const keys = Object.keys(entry.data).filter(k => k !== "templateId");
    if (keys.length !== 1) {
      throw new Error(`Entry ${entry.templateId} has ${keys.length} data keys, expected 1`);
    }
    const disc = keys[0];
    if (!groups.has(disc)) groups.set(disc, { discriminator: disc, entries: [] });
    groups.get(disc)!.entries.push(entry);
  }
  return groups;
}
```

### Step 2: Group name (outer type name)

```ts
// "typeEffective" -> "TypeEffective"
// "pokemonSettings" -> "PokemonSettings"
function groupName(discriminator: string): string {
  return discriminator[0].toUpperCase() + discriminator.slice(1);
}
```

*Assumption:* discriminators in the data are camelCase. All 195 currently observed
discriminators are. If upstream ever introduces snake_case discriminators, this function
should be upgraded to the same PascalCase-on-boundaries treatment as `aliasSuffix` below.

### Step 3: Per-entry alias suffix

```ts
function sharedPrefix(ids: string[]): string {
  if (ids.length <= 1) return "";
  let p = ids[0];
  for (const id of ids) {
    while (!id.startsWith(p)) p = p.slice(0, -1);
    if (p === "") return "";
  }
  // Only strip at an underscore boundary to avoid mid-word cuts.
  const lastUnderscore = p.lastIndexOf("_");
  return lastUnderscore >= 0 ? p.slice(0, lastUnderscore + 1) : "";
}

function aliasSuffix(templateId: string, prefix: string): string {
  const tail = templateId.slice(prefix.length) || "Root";
  const parts = tail.split(/[^a-zA-Z0-9]+/).filter(Boolean);
  return parts.map(w => w[0].toUpperCase() + w.slice(1).toLowerCase()).join("");
}
```

**Worked example — `typeEffective` group:**
- `sharedPrefix(["POKEMON_TYPE_BUG", ...])` → `"POKEMON_TYPE_"`
- `aliasSuffix("POKEMON_TYPE_BUG", "POKEMON_TYPE_")` → `"Bug"`
- Full alias name: `TypeEffectiveBug`

**Worked example — `pokemonSettings` group:**
- `sharedPrefix(all 2460 ids)` → longest shared prefix is `"V"`, no underscore → `""`
- `aliasSuffix("V0001_POKEMON_BULBASAUR", "")` → `"V0001PokemonBulbasaur"`
- Full alias name: `PokemonSettingsV0001PokemonBulbasaur`

### Step 4: Collision detection

Within a group, if two different templateIds yield the same alias suffix, the offending
entries fall back to using `aliasSuffix(templateId, "")` — i.e. the PascalCased whole
templateId with no prefix stripped. Since templateIds are globally unique, the unstripped
PascalCased form is guaranteed unique too. Non-colliding entries in the same group keep
their clean (prefix-stripped) suffix.

### Step 5: Deterministic ordering

For byte-stable output across runs:

- Groups are processed in **alphabetical order of discriminator**.
- Within a group, entries are sorted by `templateId` (lexicographic).
- Singletons in `misc.ts` are sorted by their PascalCased interface name.
- `index.ts` re-exports appear in the same alphabetical order.

Input order from the upstream JSON is *not* relied upon.

## Output layout

```
packages/typescript-v2/src/
  groups/
    type-effective.ts
    pokemon-settings.ts
    avatar-customization.ts
    ...                      (60 multi-entry group files total)
    misc.ts                  (135 singleton interfaces)
  index.ts                   (barrel + global union types)
```

Total: **62 files**. Filenames are kebab-case derived from the discriminator.

### Multi-entry group file shape

```ts
// groups/type-effective.ts
export interface TypeEffective<T extends string> {
  templateId: T;
  data: TypeEffectiveData<T>;
}

export interface TypeEffectiveData<T extends string> {
  templateId: T;
  typeEffective: unknown; // shape inference is a follow-up
}

export type TypeEffectiveBug = TypeEffective<"POKEMON_TYPE_BUG">;
export type TypeEffectiveDark = TypeEffective<"POKEMON_TYPE_DARK">;
// ... 16 more

export type TypeEffectiveMasterfileEntry =
  | TypeEffectiveBug
  | TypeEffectiveDark
  /* ... */;

export type TypeEffectiveTemplateID = TypeEffectiveMasterfileEntry["templateId"];
```

### `misc.ts` shape

Singletons are self-contained interfaces — no generic needed since there is only one
templateId per discriminator:

```ts
export interface AccessibilityClientSettings {
  templateId: "ACCESSIBILITY_CLIENT_SETTINGS";
  data: {
    templateId: "ACCESSIBILITY_CLIENT_SETTINGS";
    accessibilitySettings: unknown;
  };
}

export interface AdditiveSceneSettings { /* ... */ }
// ... 134 more
```

### `index.ts` shape

```ts
export * from "./groups/type-effective";
export * from "./groups/pokemon-settings";
// ... all 60 group files + misc
export * from "./groups/misc";

import type { TypeEffectiveMasterfileEntry } from "./groups/type-effective";
import type { PokemonSettingsMasterfileEntry } from "./groups/pokemon-settings";
// ...

export type MasterfileEntry =
  | TypeEffectiveMasterfileEntry
  | PokemonSettingsMasterfileEntry
  /* ... 59 more */;

export type MasterfileTemplateID = MasterfileEntry["templateId"];
```

## Edge cases & invariants

### Strict invariants (throw on violation)

| Condition | Rationale |
|---|---|
| Entry has 0 or 2+ non-`templateId` keys under `data` | Breaks the core grouping assumption. Fail CI loudly rather than emit broken types. |
| Two entries share the same `templateId` | Uniqueness is assumed by every downstream consumer. |

### Graceful handling

| Condition | Behavior |
|---|---|
| Alias-suffix collision within a group | For colliding entries only, use PascalCased full templateId as suffix. Non-colliding entries in the same group keep their clean suffix. |
| Longest common prefix doesn't end at `_` | Don't strip — use whole templateId as suffix. Prevents mid-word cuts. |
| Alias suffix would be empty | Use `"Root"` as the suffix. |
| Lowercase / mixed-case templateId (e.g. `AVATAR_f_backpack_...`) | Split on `[^a-zA-Z0-9]+`, PascalCase each chunk. Valid; aesthetically lossy but deterministic. |
| Singleton group | Goes to `misc.ts` as a concrete interface — not wrapped in a generic. |

### Output directory safety

The generator deletes only `packages/typescript-v2/src/` before regeneration, not the
whole `packages/typescript-v2/` directory — that holds `package.json`, `tsconfig.json`, and
similar files that must not churn on every run.

## Out of scope (explicit follow-ups)

- Inferring shapes of `data[<discriminator>]` payloads (they stay `unknown`).
- Runtime artifacts (`const` arrays of templateIds).
- Non-TypeScript output (Rust, Go — the existing repo has stubs for these but they are
  ignored by this POC).
- "Prettier" name derivation from templateId patterns (options B/C from the brainstorming
  — to be re-evaluated only if A produces unacceptable names in practice).

## Success criteria

1. `bun run <generator>` produces a deterministic `packages/typescript-v2/src/` tree.
2. Re-running without upstream changes produces a byte-identical tree (enables
   clean CI diffs).
3. Every templateId in the fetched masterfile resolves to exactly one exported type in
   the output, reachable from `index.ts`.
4. `tsc --noEmit` passes on the generated output.
