# pogo-masterfile

Runtime API for the Pokémon GO masterfile. Loads, indexes, and queries entries with per-group literal-typed accessors. Built on [`pogo-masterfile-types`](../ts/README.md).

## Install

```bash
npm install pogo-masterfile
# or
bun add pogo-masterfile
```

## Quickstart

```ts
import { Masterfile } from "pogo-masterfile";

const mf = await Masterfile.fromRemote();

// Top-level lookup — wide return type (MasterfileEntry).
const move = mf.getEntry("V0022_MOVE_MEGAHORN");

// Per-group accessor — literal-narrow return type, full intellisense.
// `tackle` is typed as the exact literal entry, e.g. its `power` is `105`.
const tackle = mf.moveSettings.get("V0033_MOVE_TACKLE_FAST");

// Iterate one group.
for (const m of mf.moveSettings) {
  // m is fully typed as a MoveSettingsMasterfileEntry
}

// Search.
const items = mf.findByPattern(/^ITEM_/);
```

### Top-level vs per-group lookups

The `Masterfile` class deliberately splits its lookup APIs to keep TypeScript's
compile times fast:

- **Top-level** (`mf.getEntry`, `mf.tryGetEntry`, `mf.has`) returns the wide
  `MasterfileEntry` union with no literal narrowing. Use it when you have an
  arbitrary string templateId and just want the entry.
- **Per-group accessor** (`mf.moveSettings.get`, etc.) narrows to the exact
  literal entry type for that group's templateIds. Use it when you know the
  group up front — you get full autocomplete on IDs and a precisely-typed
  return value.

If you want cross-group literal narrowing on top-level lookups, import the
explicit `EntryByTemplateID` interface from `pogo-masterfile-types/lookup-table`
and cast to it. That interface materializes ~18k keys and is correspondingly
expensive to type-check, so reach for it only when you actually need it.

## Loading

`Masterfile` instances are constructed via two factories:

```ts
// Fetch from the default community mirror (alexelgt/game_masters).
const mf = await Masterfile.fromRemote();

// Wrap an already-loaded array (e.g., bundled with your app or fetched manually).
const mf = Masterfile.fromJson(myEntries);
```

### Custom URL

```ts
const mf = await Masterfile.fromRemote({
  url: "https://my-cdn.example/masterfile.json",
});
```

### Custom fetcher

If your upstream returns a different shape, supply a custom fetcher that normalizes to `MasterfileEntry[]`:

```ts
const mf = await Masterfile.fromRemote({
  fetcher: async (url, signal) => {
    const r = await fetch(url, {
      signal,
      headers: { Authorization: `Bearer ${token}` },
    });
    const wrapped = (await r.json()) as { data: MasterfileEntry[] };
    return wrapped.data;
  },
});
```

You can also compose around the default fetcher:

```ts
import { defaultFetcher } from "pogo-masterfile/fetch";

const mf = await Masterfile.fromRemote({
  fetcher: async (url, signal) => {
    const entries = await defaultFetcher(url, signal);
    return entries.filter((e) => /* user filter */);
  },
});
```

### Cancellation

```ts
const ac = new AbortController();
setTimeout(() => ac.abort(), 5000);
const mf = await Masterfile.fromRemote({ signal: ac.signal });
```

## Top-level API

| Method | Description |
|---|---|
| `getEntry(id)` | Return the entry (wide `MasterfileEntry`). Throws `EntryNotFoundError` if missing. |
| `tryGetEntry(id)` | Return the entry or `undefined`. |
| `has(id)` | Boolean check. |
| `getAll()` | All entries. |
| `getGroup(name)` | All entries for one group, narrowed to that group's union. |
| `groups()` | All group names. |
| `templateIds()` / `templateIds(group)` | All template IDs (or just one group's). |
| `[Symbol.iterator]()` | `for (const e of mf)` over all entries. |
| `size` | Total entry count. |
| `raw` | Underlying `MasterfileEntry[]` (read-only view). |
| `find(pred)` / `filter(pred)` | Predicate search over all entries. |
| `findByPattern(regex)` | All entries whose `templateId` matches the regex. |
| `refresh(opts?)` | Re-fetch from remote and swap data atomically. |
| `update(json)` | Replace data with a provided array (sync). |

## Per-group accessors

For every group `G`, `mf.<G>` is a `GroupAccessor<G>` with a focused, narrowly-typed mini-API:

```ts
mf.moveSettings.get(id)            // throws if missing
mf.moveSettings.tryGet(id)         // T | undefined
mf.moveSettings.has(id)            // type predicate
mf.moveSettings.all()              // alias for getGroup("moveSettings")
mf.moveSettings.templateIds()      // narrow ID array
mf.moveSettings.find(predicate)    // predicate typed against MoveSettings union
mf.moveSettings.filter(predicate)
mf.moveSettings.size
for (const m of mf.moveSettings) { … }
```

The accessor's `find` / `filter` predicates receive the narrow group union, so `entry.data.moveSettings` autocompletes without runtime type guards.

## Errors

```ts
import { MasterfileFetchError, MasterfileParseError, EntryNotFoundError } from "pogo-masterfile/errors";

try {
  const mf = await Masterfile.fromRemote();
} catch (err) {
  if (err instanceof MasterfileFetchError) console.error("fetch failed:", err.url, err.cause);
  if (err instanceof MasterfileParseError) console.error("parse failed:", err.cause);
}

try {
  mf.getEntry("DOES_NOT_EXIST");
} catch (err) {
  if (err instanceof EntryNotFoundError) console.error("missing:", err.templateId);
}
```

## Module resolution

This package ships compiled `.js` + `.d.ts` from a `src/` → `dist/` build. It targets `module: "ES2022"` and uses universal `fetch` (Node ≥18, modern browsers, Bun, Deno). No polyfills needed.

```jsonc
// tsconfig.json
{
  "compilerOptions": {
    "moduleResolution": "bundler" // or "node16" / "nodenext"
  }
}
```

## Source

All code under `dist/` is built from generated source in `src/`, which is itself produced by the codegen pipeline at the [repo root](https://github.com/Hazels-Lab/pogo-masterfile). Don't edit emitted files by hand — re-run `bun run generate`.

## License

MIT — see [LICENSE](./LICENSE).
