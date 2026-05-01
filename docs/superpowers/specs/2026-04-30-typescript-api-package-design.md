# TypeScript API Package — Design Spec

**Date:** 2026-04-30
**Author:** brainstorming session (derick.magnusen@gmail.com + Claude)
**Status:** Approved, pending implementation

## Problem

`pogo-masterfile-types` ships pure `.d.ts` declarations for the Pokémon GO masterfile and a `parseMasterfile` helper that dispatches each entry to its concrete payload type. Consumers wanting to *use* the data still have to:

1. Source `masterfile.json` themselves (download from a community mirror, host it, ship it with their app).
2. Build their own indexes (`Map<templateId, entry>`, per-group buckets) every time they want O(1) lookups.
3. Write their own narrowing helpers when they want a specific entry's literal type returned (`Extract<…>` over a 10k-entry union, etc.).

Every consumer reinvents the same runtime layer. There's no shared way to fetch the latest masterfile, no shared lookup ergonomics, and the literal-typed entry types — the most valuable thing about the types package — are awkward to consume without a typed lookup table that maps each templateId to its specific entry.

## Goal

Ship a sibling npm package, `pogo-masterfile`, that depends on `pogo-masterfile-types` and provides a runtime `Masterfile` class with:

- Async loading from the canonical community mirror (with overridable URL and fetch client).
- O(1) lookups by templateId, with TypeScript narrowing the return type to the exact literal entry.
- A per-group accessor surface (`mf.moveSettings.get(...)`) so consumers get focused intellisense (~hundreds of IDs per group instead of ~18k overall).
- Iteration, search, and refresh primitives.

Like the existing language packages, the API package is **fully code-generated**. The generator owns every file under `packages/api-ts/dist/` — consumers never edit them, contributors never edit them, only the generator does.

This spec covers the TypeScript API package. Rust and Go API packages are explicitly **out of scope** here; they will follow the same shape in their own specs once the TypeScript design has been validated in practice.

## Decisions & rationale

Captured from the brainstorming session, in the order they were settled:

1. **Default masterfile URL: `https://raw.githubusercontent.com/alexelgt/game_masters/refs/heads/master/GAME_MASTER.json`.** Stable community mirror, no auth, already used by the existing codegen.
2. **URL is overridable AND the fetch client is overridable.** The fetch client receives a URL string and returns `Promise<MasterfileEntry[]>`, so consumers can transform a different upstream shape into our entry array.
3. **Separate published package, `pogo-masterfile`,** layered on top of `pogo-masterfile-types`. Keeps the types package's "pure declarations, no runtime" identity intact.
4. **Stateful client class.** `Masterfile.fromRemote()` returns an instance with internal indexes built once and reused for every lookup. Mirrors how the Rust/Go versions will ship (struct + methods).
5. **Generated lookup interface for typing.** A single `EntryByTemplateID` interface mapping every literal templateId to its literal entry type, plus sibling `EntriesByGroup` and `TemplateIDsByGroup`. Indexed-access lookups stay fast at type-check time even at 10k+ keys.
6. **Universal `fetch`.** Targets both browsers and Node/Bun via the global `fetch` API. No polyfill, no `node-fetch`, no conditional exports.
7. **Throw-on-missing for `getEntry`, `tryGetEntry` for `T | undefined`.** Two-method split is the standard pattern for typed lookups (mirrors Rust's `expect`/`get`); keeps the happy path ergonomic and the safe path explicit.
8. **Per-group accessor surface.** `mf.moveSettings.get(id)` and friends — one accessor per group, reachable from the top-level instance, providing get/tryGet/has/all/templateIds/find/filter/size/iteration narrowed to that group. Replaces the originally-considered `findByGroup` / `filterByGroup` top-level methods.

## Design

### Repo layout & package identity

```
packages/
  ts/              # existing — pure types, unchanged
  api-ts/          # NEW — runtime API package, published as `pogo-masterfile`
  rust/            # existing
  go/              # existing
  rust-macros/     # existing

src/
  typescript/      # existing — emits packages/ts/
  typescript-api/  # NEW — emits packages/api-ts/
  rust/            # existing — emits packages/rust/
  go/              # existing — emits packages/go/
```

**Published npm package name: `pogo-masterfile`** (parallel to `pogo-masterfile-types`).

**Dependency direction:** `pogo-masterfile` depends on `pogo-masterfile-types` (workspace dep in dev, pinned `^x.y.z` in published `package.json`). Never the reverse.

**`packages/api-ts/dist/`** is what npm publishes — fully generated, no hand-edited files inside.

**`src/typescript-api/runtime/`** holds hand-written `.ts` source for the class, fetcher, and errors. The codegen pipeline copies/compiles these into `packages/api-ts/dist/`. Hand-written templates are inputs to codegen, not part of the published package's editable surface.

### Public API surface

```ts
import type { MasterfileEntry } from "pogo-masterfile-types/entries";
import type {
  EntryByTemplateID,
  EntriesByGroup,
  TemplateIDsByGroup,
  GroupName,
} from "./lookup-tables";

// ─── Options & types ─────────────────────────────────────────────

export interface FromRemoteOptions {
  /** URL to fetch from. Defaults to alexelgt/game_masters raw. */
  url?: string;
  /** Custom fetcher; default uses global `fetch` + `response.json()`. */
  fetcher?: Fetcher;
  /** Cancellation. */
  signal?: AbortSignal;
}

export type Fetcher = (
  url: string,
  signal?: AbortSignal,
) => Promise<MasterfileEntry[]>;

// ─── Class ───────────────────────────────────────────────────────

export class Masterfile {
  private constructor(entries: readonly MasterfileEntry[]);

  // ── Loaders ──
  static fromRemote(opts?: FromRemoteOptions): Promise<Masterfile>;
  static fromJson(json: readonly MasterfileEntry[]): Masterfile;

  // ── Core lookups ──
  getEntry<T extends keyof EntryByTemplateID>(templateId: T): EntryByTemplateID[T];
  getEntry(templateId: string): MasterfileEntry;       // throws EntryNotFoundError

  tryGetEntry<T extends keyof EntryByTemplateID>(templateId: T): EntryByTemplateID[T] | undefined;
  tryGetEntry(templateId: string): MasterfileEntry | undefined;

  has(templateId: string): templateId is keyof EntryByTemplateID;

  getAll(): readonly MasterfileEntry[];
  getGroup<G extends GroupName>(group: G): readonly EntriesByGroup[G][];

  // ── Introspection ──
  groups(): readonly GroupName[];
  templateIds(): readonly (keyof EntryByTemplateID)[];
  templateIds<G extends GroupName>(group: G): readonly TemplateIDsByGroup[G][];

  [Symbol.iterator](): IterableIterator<MasterfileEntry>;
  get size(): number;
  get raw(): readonly MasterfileEntry[];

  // ── Mutation ──
  refresh(opts?: FromRemoteOptions): Promise<void>;
  update(json: readonly MasterfileEntry[]): void;

  // ── Top-level search (group-narrowed search lives on the accessors) ──
  find(predicate: (e: MasterfileEntry) => boolean): MasterfileEntry | undefined;
  filter(predicate: (e: MasterfileEntry) => boolean): readonly MasterfileEntry[];
  /** Match against `templateId`. Returns all entries whose IDs match the pattern. */
  findByPattern(pattern: RegExp): readonly MasterfileEntry[];
}

// ─── Per-group accessor ──────────────────────────────────────────

export interface GroupAccessor<G extends GroupName> {
  get<T extends TemplateIDsByGroup[G]>(templateId: T): EntryByTemplateID[T];
  get(templateId: string): EntriesByGroup[G];                          // throws

  tryGet<T extends TemplateIDsByGroup[G]>(templateId: T): EntryByTemplateID[T] | undefined;
  tryGet(templateId: string): EntriesByGroup[G] | undefined;

  has(templateId: string): templateId is TemplateIDsByGroup[G];

  all(): readonly EntriesByGroup[G][];
  templateIds(): readonly TemplateIDsByGroup[G][];

  find(predicate: (e: EntriesByGroup[G]) => boolean): EntriesByGroup[G] | undefined;
  filter(predicate: (e: EntriesByGroup[G]) => boolean): readonly EntriesByGroup[G][];

  readonly size: number;
  [Symbol.iterator](): IterableIterator<EntriesByGroup[G]>;
}

// Augments Masterfile with a strongly-typed accessor for every group, via
// declaration merging. The named mapped type is required — TS does not allow
// inline anonymous types in interface extends clauses.
type GroupAccessorMap = { [G in GroupName]: GroupAccessor<G> };
export interface Masterfile extends GroupAccessorMap {}

// ─── Errors ──────────────────────────────────────────────────────

export class MasterfileFetchError extends Error {
  readonly url: string;
  readonly cause?: unknown;
}

export class MasterfileParseError extends Error {
  readonly cause?: unknown;
}

export class EntryNotFoundError extends Error {
  readonly templateId: string;
}
```

**Notable design choices:**

- **Private constructor** — eliminates the "did I forget to load?" footgun. Loading goes through `fromRemote` or `fromJson`.
- **Overload pattern on `getEntry` / `tryGetEntry`** — literal IDs return narrow types; wide `string` returns wide unions. No compile errors when consumers have a runtime string.
- **`has` is a type predicate** — `if (mf.has(s)) { mf.getEntry(s) }` narrows `s` from `string` to `keyof EntryByTemplateID`.
- **All list returns are `readonly`** — discourages mutation of internal state. Consumers needing mutability copy explicitly.
- **`findByGroup` / `filterByGroup` are NOT on the top level** — replaced by `mf.<group>.find(...)` / `mf.<group>.filter(...)`, where the predicate is typed against the narrow group union.
- **Errors are sparse** — three classes for the three real failure modes. Each carries minimum context for debugging.
- **`refresh()` vs `update()`** — different verbs because one is async/network, the other is sync/in-memory.

### Generated type layer

`dist/lookup-tables.d.ts` carries three interfaces and a union, abbreviated here:

```ts
import type {
  MoveSettingsMasterfileEntry,
  PokemonSettingsMasterfileEntry,
  // ... ~70 group unions ...
  MoveSettingsV0022MoveMegahorn,
  MoveSettingsV0049MoveBugBuzz,
  // ... ~10k literal entries ...
} from "pogo-masterfile-types/entries";

import type { MoveSettingsTemplateID } from "pogo-masterfile-types/move-settings/entries";
// ... per-group TemplateID re-uses ...

export type GroupName =
  | "moveSettings"
  | "pokemonSettings"
  // ... ~70 entries ...
  ;

export interface EntryByTemplateID {
  V0022_MOVE_MEGAHORN: MoveSettingsV0022MoveMegahorn;
  V0049_MOVE_BUG_BUZZ: MoveSettingsV0049MoveBugBuzz;
  // ... ~10k lines ...
}

export interface EntriesByGroup {
  moveSettings: MoveSettingsMasterfileEntry;
  pokemonSettings: PokemonSettingsMasterfileEntry;
  // ... ~70 lines ...
}

export interface TemplateIDsByGroup {
  moveSettings: MoveSettingsTemplateID;
  pokemonSettings: PokemonSettingsTemplateID;
  // ... reuses already-emitted per-group TemplateID exports ...
}
```

**Why three separate interfaces:** keyed by what the consumer naturally has (templateId vs group name). One mega-interface keyed by group with arrays inside would compile slower and read worse.

**Compile cost:** indexed access into an interface (`EntryByTemplateID[T]`) is ~O(1) per lookup at type-check time, even at 10k keys. The slow alternative is `Extract<U, ...>` over the wide entry union, which TypeScript walks linearly. The interface keeps consumer compile time flat.

`GroupName` is also emitted as a runtime value, in `dist/group-names.ts`:

```ts
// dist/group-names.ts
export const GROUP_NAMES = [
  "avatarCustomization",
  // ... ~70 entries, alphabetical ...
] as const;
export type GroupName = typeof GROUP_NAMES[number];
```

Two reasons it's a `const` array, not just a type:
1. The `Masterfile` constructor iterates it to install per-group accessors.
2. The type is derived from the constant, so type and runtime can never drift.

`lookup-tables.d.ts` re-exports `GroupName` from `group-names.ts` for convenient importing alongside the lookup interfaces.

### Fetch & override mechanism

`dist/fetch.ts` holds the default fetcher and the URL constant:

```ts
export const DEFAULT_MASTERFILE_URL =
  "https://raw.githubusercontent.com/alexelgt/game_masters/refs/heads/master/GAME_MASTER.json";

export const defaultFetcher: Fetcher = async (url, signal) => {
  let response: Response;
  try {
    response = await fetch(url, { signal });
  } catch (cause) {
    throw new MasterfileFetchError(`network error fetching ${url}`, url, cause);
  }
  if (!response.ok) {
    throw new MasterfileFetchError(
      `${response.status} ${response.statusText} from ${url}`,
      url,
    );
  }
  let json: unknown;
  try {
    json = await response.json();
  } catch (cause) {
    throw new MasterfileParseError("response body is not valid JSON", cause);
  }
  if (!Array.isArray(json)) {
    throw new MasterfileParseError("expected top-level JSON array of entries");
  }
  return json as MasterfileEntry[];
};
```

**Custom fetcher contract:**
- Receives `(url: string, signal?: AbortSignal)`.
- Returns `Promise<MasterfileEntry[]>`. The fetcher MUST normalize whatever the upstream shape is — that's the whole point of letting users swap it.
- Should propagate `signal` to its underlying `fetch` so cancellation works.
- Errors propagate as-is. Throwing `MasterfileFetchError` or `MasterfileParseError` is recommended for catchability but not required.

**`fromRemote` resolution:**
```ts
static async fromRemote(opts: FromRemoteOptions = {}): Promise<Masterfile> {
  const url = opts.url ?? DEFAULT_MASTERFILE_URL;
  const fetcher = opts.fetcher ?? defaultFetcher;
  const entries = await fetcher(url, opts.signal);
  return new Masterfile(entries);
}
```

**Validation policy** is intentionally light:
- Verify the parsed JSON is an array (throws `MasterfileParseError` if not).
- Do NOT structurally validate every entry. The masterfile is huge; runtime schema validation would be slow and add a dependency. Consumers needing it do it in their custom fetcher.

**Why `defaultFetcher` and `DEFAULT_MASTERFILE_URL` are exported:** consumers writing custom fetchers often want "default behavior + extra header" or "default URL + transform". Exposing both lets them compose without copy-pasting error-handling logic.

### Codegen pipeline integration

The orchestrator `src/generate.ts` adds one more line:

```ts
await generateTypeScript(entries);
await generateTypeScriptApi(entries);   // ← NEW
await generateRust(entries);
await generateGo(entries);
```

**Generator layout:**

```
src/typescript-api/
  generate.ts              # entry point: generateTypeScriptApi(entries)
  constants.ts             # OUT_DIR, RUNTIME_DIR, file naming
  emit-lookup-tables.ts    # → runtime/lookup-tables.d.ts (then copied to dist via tsc)
  emit-group-names.ts      # → runtime/group-names.ts
  emit-index.ts            # → runtime/index.ts (top-level barrel)
  build.ts                 # invokes tsc on the runtime/ tree
  tsconfig.build.json      # tsc config for runtime → dist
  runtime/                 # hand-written .ts source
    masterfile.ts          # Masterfile class + GroupAccessor installer
    fetch.ts               # defaultFetcher + DEFAULT_MASTERFILE_URL
    errors.ts              # error classes
    types.ts               # FromRemoteOptions, Fetcher type alias
    .gitignore             # ignores generated lookup-tables.d.ts and group-names.ts
```

**`generateTypeScriptApi` flow:**

```ts
export async function generateTypeScriptApi(entries: Entry[]): Promise<void> {
  const groups = groupEntries(entries);

  // 1. Emit generated files into runtime/ alongside hand-written source.
  //    Both are gitignored — refreshed every generate run.
  const generatedFiles = new Map<string, string>();
  generatedFiles.set("lookup-tables.d.ts", emitLookupTables(groups));
  generatedFiles.set("group-names.ts", emitGroupNames(groups));
  await writeOutput(generatedFiles, RUNTIME_DIR);

  // 2. Compile the whole runtime/ tree to packages/api-ts/dist/ via tsc.
  await runTsc({ project: "src/typescript-api/tsconfig.build.json" });

  console.log(`[typescript-api] wrote runtime to ${OUT_DIR}`);
}
```

**`tsconfig.build.json`** (rooted at `src/typescript-api/runtime/`):

```json
{
  "compilerOptions": {
    "rootDir": "src/typescript-api/runtime",
    "outDir": "packages/api-ts/dist",
    "module": "ES2022",
    "target": "ES2022",
    "moduleResolution": "bundler",
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src/typescript-api/runtime/**/*"]
}
```

**Why generated files live in `runtime/` first rather than directly in `dist/`:**
1. **Type-checking the runtime in dev.** `masterfile.ts` references `EntryByTemplateID` via `./lookup-tables` — co-locating means no path-mapping gymnastics.
2. **Single tsc invocation.** tsc treats `runtime/` as one program, compiles `.ts` to `.js + .d.ts`, copies the pre-existing `.d.ts` (lookup tables) through to outDir. One pass, one tsconfig.

**Output `packages/api-ts/dist/` after a generate run:**

| File | Source |
|---|---|
| `lookup-tables.d.ts` | Generated (copied through tsc, declaration-only). |
| `group-names.js` + `.d.ts` | Generated, then compiled. |
| `masterfile.js` + `.d.ts` | tsc on `runtime/masterfile.ts`. |
| `fetch.js` + `.d.ts` | tsc on `runtime/fetch.ts`. |
| `errors.js` + `.d.ts` | tsc on `runtime/errors.ts`. |
| `types.d.ts` | tsc on `runtime/types.ts` (types-only — no `.js`). |
| `index.js` + `.d.ts` | Generated barrel, compiled. |

**Constructor-time accessor installation** (in `runtime/masterfile.ts`):

```ts
import { GROUP_NAMES, type GroupName } from "./group-names";

class Masterfile {
  private constructor(entries: readonly MasterfileEntry[]) {
    this.installIndexes(entries);
    for (const groupName of GROUP_NAMES) {
      this.installGroupAccessor(groupName);
    }
  }
}
```

Iterating `GROUP_NAMES` (rather than discovering groups from the data) ensures every group declared in the type system has a working accessor at runtime, even if the current masterfile temporarily has zero entries for it. Refresh-safe.

### Published `package.json`

```json
{
  "name": "pogo-masterfile",
  "version": "0.1.0",
  "type": "module",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./fetch": {
      "import": "./dist/fetch.js",
      "types": "./dist/fetch.d.ts"
    },
    "./errors": {
      "import": "./dist/errors.js",
      "types": "./dist/errors.d.ts"
    }
  },
  "files": ["dist", "README.md", "LICENSE", "CHANGELOG.md"],
  "dependencies": {
    "pogo-masterfile-types": "^0.1.0"
  }
}
```

The `./fetch` and `./errors` subpath exports let consumers tree-shake or import error classes for `instanceof` checks without pulling the whole module.

### Release pipeline

Add a fourth tag pattern to CONTRIBUTING.md and a fourth GitHub Actions workflow:

| Tag pattern | Workflow |
|---|---|
| `pogo-masterfile-v*` | `.github/workflows/publish-pogo-masterfile.yml` |

Same shape as the existing `publish-npm.yml` workflow for the types package. Workflow steps: checkout → install bun → run generate → run typecheck → `npm publish` from `packages/api-ts/`.

### Testing strategy

Five test surfaces, all run via `bun test`:

1. **Generator unit tests** (`src/typescript-api/*.test.ts`):
   - `emit-lookup-tables.test.ts` — small fixture (3-4 entries across 2 groups), assert emitted strings are well-formed: correct imports, all entries appear, alphabetical ordering, no duplicates.
   - `emit-group-names.test.ts` — fixture with 3 groups, assert emitted const array contains all three (deduped, sorted) and the derived type is exported.
   - One snapshot test of a 5-group fixture's full `lookup-tables.d.ts` to catch accidental formatting/structure regressions.

2. **Runtime unit tests** (`src/typescript-api/runtime/*.test.ts`):
   - `fromJson` happy path — constructs and indexes correctly.
   - `getEntry` found / missing (throws `EntryNotFoundError`).
   - `tryGetEntry` found / missing (returns `undefined`).
   - `has` returns true/false; type-predicate narrowing verified via `expect-type`.
   - `getGroup` returns all entries for the group; empty groups return empty arrays.
   - `groups()`, `templateIds()`, `size`, `[Symbol.iterator]` consistent with fixture.
   - `update()` — replaces data, indexes rebuilt, accessors still work.
   - `refresh()` — uses provided fetcher, swaps in new data atomically.
   - **Group accessor smoke test:** `mf.moveSettings.get(...)` works at runtime, identical results to `mf.getEntry(...)`. `mf.moveSettings.size` equals `mf.getGroup("moveSettings").length`.

3. **Type tests** (`src/typescript-api/runtime/types.test.ts`) using `expect-type`:
   - `getEntry` narrows on literal templateId.
   - `getEntry` widens on `string`.
   - `getGroup` returns the narrow group union.
   - Group accessor narrows IDs (parameter type is `TemplateIDsByGroup[G] | string`).
   - `@ts-expect-error` on cross-group access (`mf.moveSettings.get<"V0001_POKEMON_BULBASAUR">` should fail to compile).

4. **Fetcher tests** (`src/typescript-api/runtime/fetch.test.ts`) with mocked `fetch`:
   - Happy path → working instance.
   - Network error → `MasterfileFetchError` with `url` + `cause`.
   - Non-2xx response → `MasterfileFetchError` with status text.
   - Invalid JSON → `MasterfileParseError`.
   - Non-array JSON → `MasterfileParseError`.
   - AbortSignal propagates to underlying `fetch`.
   - Custom fetcher override replaces the default.

5. **End-to-end smoke test** (`src/typescript-api/runtime/e2e.test.ts`) gated behind `BUN_E2E=1`:
   - Hits the real default URL.
   - Asserts `mf.size > 0`, `mf.groups()` includes `"moveSettings"` and `"pokemonSettings"`, `mf.getEntry("V0001_POKEMON_BULBASAUR")` returns a structurally-valid entry.
   - Run manually before tagging a release, or in a scheduled nightly workflow.

The existing `bun test` script already discovers `*.test.ts` under `src/`. No script changes needed.

## Out of scope

- Rust API package (`packages/api-rust/`) and Go API package (`packages/api-go/`) — separate specs, mirroring this design's surface where languages allow.
- Retry/backoff in the default fetcher — consumers do this in custom fetchers if they need it.
- ETag / If-None-Match support — same.
- Schema validation of fetched entries — same; the masterfile is too large for cheap runtime validation, and types-package tests already cover structural drift detection.
- Type-narrowing via predicate type guards on `find` / `filter` — possible later, low payoff at v0.1.
- A CLI bundled with the API package — the package is library-only.
- Renaming `packages/rust/` to `packages/rs/` — orthogonal cosmetic change tracked separately.

## Open questions

None. All design decisions resolved during the brainstorming session.

## Implementation ordering (preview)

Detailed implementation plan to be written via the writing-plans skill in a separate document. Anticipated phases:

1. Scaffold `packages/api-ts/` (package.json, README, tsconfig, .gitignore, dist placeholder).
2. Scaffold `src/typescript-api/runtime/` (hand-written runtime files: errors, types, fetch, masterfile, index — with a stub lookup-tables.d.ts so things type-check).
3. Implement `emit-group-names.ts` + tests.
4. Implement `emit-lookup-tables.ts` + tests.
5. Implement `build.ts` (tsc invocation) + `tsconfig.build.json`.
6. Implement `generateTypeScriptApi` orchestrator + wire into `src/generate.ts`.
7. Replace runtime stub with full implementation: `Masterfile` class, group accessor installation.
8. Runtime + type tests.
9. Fetcher tests.
10. End-to-end smoke test (gated).
11. Release workflow + CONTRIBUTING.md update.
12. README for `packages/api-ts/`.
