# Go API Package — Design Spec

**Date:** 2026-05-01
**Author:** brainstorming session (derick.magnusen@gmail.com + Claude)
**Status:** Approved, pending implementation

## Problem

The existing Go types module (`packages/go/`) ships generated structs and a `ParseMasterfile([]byte) ([]MasterfileEntry, error)` dispatcher. Consumers wanting to *use* the masterfile still have to:

1. Source `masterfile.json` themselves (or fetch it from a community mirror).
2. Build their own indexes (`map[TemplateID]Entry`, per-group buckets) every time they want O(1) lookups.
3. Reinvent error handling around the network + parse stages.

This mirrors exactly the gap closed for TypeScript by `packages/ts-api/` (`pogo-masterfile`) and for Rust by `packages/rust-api/` (`pogo-masterfile`). This spec covers the Go equivalent.

## Goal

Ship a sibling Go module, `packages/go-api/`, that depends on `packages/go/` and provides a runtime `Masterfile` struct with:

- Synchronous loading from the canonical community mirror (with overridable URL, HTTP client, and full fetcher), via functional options + `context.Context`.
- O(1) lookups by templateID.
- Per-group accessors (`mf.MoveSettings.Get(id)`) where the input ID is the typed `move_settings.MoveSettingsTemplateID` (a named string type, so untyped string literals assign without a cast).
- Iteration and introspection primitives via plain slice accessors.
- Idiomatic Go error types (`*FetchError`, `*StatusError`, `*ParseError`, `ErrInvalidShape`) usable with `errors.As` / `errors.Is`.

Like the existing language packages, the bulk of files under `packages/go-api/` is owned by the codegen — consumers never edit them, contributors only edit the hand-written templates and the generator.

## Decisions & rationale

Captured from the brainstorming session, in order:

1. **Module layout: separate `packages/go-api/` Go module.** Mirrors the `ts-api` / `rust-api` naming. Tagged with the subdirectory-prefixed semver Go modules require for monorepos (`packages/go-api/v0.1.0`). Independently versionable from the types module.
2. **Per-group accessor mechanism: field-style.** Each group is a `*<Group>Accessor` field on `Masterfile`. Caller writes `mf.MoveSettings.Get(id)`. Accessor structs hold pointers/slices into the parent's storage so construction is once-at-parse-time, reads are zero-allocation.
3. **ID parameter type: typed templateID only.** `Get(id move_settings.MoveSettingsTemplateID)`. Because the underlying type is `type X string`, untyped string literals and predefined typed constants both assign without a cast. Runtime `string` variables convert with a one-character cast (`MoveSettingsTemplateID(s)`). Closest-feeling Go analog of rust-api's `impl TryInto<TemplateId>`.
4. **Comma-ok return for lookups.** `Get(id) (Entry, bool)` mirrors the rest of the Go standard library (map lookups, type assertions, channel receives). "Not found" is not an error. Errors are reserved for fetch/parse failures.
5. **Loader API: `context.Context` + functional options.** `Load(json)`, `LoadRemote(ctx, opts...)`, `FromEntries(entries)`. Functional options (`WithURL`, `WithHTTPClient`, `WithFetcher`) for forward-compatible config. There is no async/blocking split — Go has only one concurrency model and goroutines wrap the sync API.
6. **HTTP customization: two complementary knobs.** `WithHTTPClient(*http.Client)` for transport/timeout tweaks (covers the 90% case ergonomically). `WithFetcher(Fetcher)` for full-pipeline replacement (S3, bundled file, custom JSON unwrap). Plus a `FetcherFunc` adapter so closures work.
7. **Error model: typed structs + sentinel.** `*FetchError`, `*StatusError`, `*ParseError`, plus `ErrInvalidShape` (a sentinel since it carries no fields). Each implements `Error()`; the wrapping ones implement `Unwrap()`. Idiomatic for `errors.As` / `errors.Is`.
8. **Iteration: slice accessors only.** `Entries()`, `All()`, `TemplateIDs()` all return plain slices (zero-copy views into already-stored data). Skip `Find`/`Filter`/`FindByPattern` — Go culture prefers inline `for` loops over chained helpers. Range-over-func iterators can be added later non-breakingly if wanted.
9. **Mutation: immutable after construction.** No `Refresh` / `Replace` methods. Callers reload via `LoadRemote` and swap the `*Masterfile` themselves with `atomic.Pointer[Masterfile]` or a `sync.RWMutex`. Reads on a constructed `Masterfile` are safe for concurrent use because nothing mutates internally.
10. **Singletons accessor returns the wide interface.** Singleton entries are heterogeneous (each has its own concrete `*Entry` struct). `mf.Singletons.Get(id) (masterfile.MasterfileEntry, bool)` — caller type-asserts to the concrete singleton.
11. **`Get` returns by value, accessor fields are pointers.** Entry structs are small-to-medium and value semantics avoid aliasing footguns. Accessor fields are `*<Group>Accessor` so they can hold references into the parent Masterfile's storage cleanly.

## Design

### Repo layout & module identity

```
packages/
  go/                          # existing — types module, unchanged
  go-api/                      # NEW — runtime API module
    go.mod                     # module github.com/<owner>/pogo-masterfile-types/packages/go-api
    doc.go                     # package masterfileapi documentation
    masterfile.go              # HAND-WRITTEN: Masterfile core, top-level lookups, FromEntries, Load
    masterfile_gen.go          # GENERATED: per-group accessor fields + buildIndexes()
    loader.go                  # HAND-WRITTEN: LoadRemote, functional options, default URL
    fetcher.go                 # HAND-WRITTEN: Fetcher interface, FetcherFunc, httpFetcher
    errors.go                  # HAND-WRITTEN: FetchError, StatusError, ParseError, ErrInvalidShape
    accessor/                  # GENERATED: one file per group, plus singletons
      move_settings.go
      pokemon_settings.go
      ...
      singletons.go
    examples/                  # HAND-WRITTEN
      load_remote/main.go
      from_json/main.go
      per_group/main.go
      custom_fetcher/main.go
      refresh/main.go
    masterfile_test.go         # HAND-WRITTEN, mirrors rust-api tests
    loading_test.go
    lookups_test.go
    iteration_test.go
    errors_test.go
    e2e_test.go
    testdata/
      fixture.json
    README.md
    CHANGELOG.md
    LICENSE

src/
  go/                          # existing — emits packages/go/
  go-api/                      # NEW — emits packages/go-api/
    generate.ts                # orchestrator: copy templates + run emitters
    emit-masterfile.ts         # emits masterfile_gen.go
    emit-accessors.ts          # emits accessor/*.go (one file per group + singletons)
    templates/                 # hand-written source-of-truth, copied verbatim
      masterfile.go
      loader.go
      fetcher.go
      errors.go
      doc.go
```

**Module path:** `github.com/<owner>/pogo-masterfile-types/packages/go-api`. Tagged `packages/go-api/v0.1.0` to satisfy Go's subdirectory-module rule.

**Package name:** `masterfileapi`. The existing types package is `masterfile` — using a different name avoids shadowing when both are imported from a single consumer file.

### Core types

```go
package masterfileapi

import (
    "context"
    "errors"
    "fmt"
    "io"
    "net/http"

    masterfile "github.com/<owner>/pogo-masterfile-types/packages/go"
    "github.com/<owner>/pogo-masterfile-types/packages/go-api/accessor"
)

type Masterfile struct {
    entries []masterfile.MasterfileEntry
    byID    map[string]int

    // Generated below — one *<Group>Accessor field per group, ~60 total.
    MoveSettings           *accessor.MoveSettingsAccessor
    PokemonSettings        *accessor.PokemonSettingsAccessor
    AvatarCustomization    *accessor.AvatarCustomizationAccessor
    // ...
    Singletons             *accessor.SingletonsAccessor
}
```

### Constructors

```go
// Sync, no I/O.
func Load(jsonBytes []byte) (*Masterfile, error)

// Fetches over HTTP. Default URL = DefaultMasterfileURL. Configurable via opts.
func LoadRemote(ctx context.Context, opts ...LoadOption) (*Masterfile, error)

// Wrap a pre-parsed entry slice. Never errors — index-building is total.
func FromEntries(entries []masterfile.MasterfileEntry) *Masterfile
```

### Top-level lookups & introspection

```go
// Wide return — caller type-asserts to a concrete group entry if needed.
func (m *Masterfile) GetEntry(id string) (masterfile.MasterfileEntry, bool)
func (m *Masterfile) Has(id string) bool

// Zero-copy view; do not mutate the returned slice.
func (m *Masterfile) Entries() []masterfile.MasterfileEntry
func (m *Masterfile) TemplateIDs() []string
func (m *Masterfile) Len() int
func (m *Masterfile) Groups() []string
```

### Per-group accessor (one type per group, generated)

Example for `moveSettings`:

```go
package accessor

import (
    masterfile "github.com/<owner>/pogo-masterfile-types/packages/go"
    "github.com/<owner>/pogo-masterfile-types/packages/go/move_settings"
)

type MoveSettingsAccessor struct {
    entries []masterfile.MasterfileEntry          // shared slice from parent
    index   map[move_settings.MoveSettingsTemplateID]int
    order   []int                                  // positions in entries[] for stable iteration
}

func (a *MoveSettingsAccessor) Get(id move_settings.MoveSettingsTemplateID) (move_settings.MoveSettingsEntry, bool)
func (a *MoveSettingsAccessor) Has(id move_settings.MoveSettingsTemplateID) bool
func (a *MoveSettingsAccessor) All() []move_settings.MoveSettingsEntry
func (a *MoveSettingsAccessor) TemplateIDs() []move_settings.MoveSettingsTemplateID
func (a *MoveSettingsAccessor) Len() int
```

`Get` looks up the underlying entry via `entries[index[id]]` and type-asserts to the concrete entry struct, returning `(entry, true)` on success or `(zero, false)` on miss.

### Singletons accessor (special case — heterogeneous)

```go
type SingletonsAccessor struct { ... }

// Returns wide MasterfileEntry interface — caller type-asserts to the concrete singleton.
func (a *SingletonsAccessor) Get(id singletons.SingletonsTemplateID) (masterfile.MasterfileEntry, bool)
func (a *SingletonsAccessor) Has(id singletons.SingletonsTemplateID) bool
func (a *SingletonsAccessor) All() []masterfile.MasterfileEntry
func (a *SingletonsAccessor) TemplateIDs() []singletons.SingletonsTemplateID
func (a *SingletonsAccessor) Len() int
```

### Loading: options, fetcher, defaults

```go
const DefaultMasterfileURL = "https://raw.githubusercontent.com/alexelgt/game_masters/refs/heads/master/GAME_MASTER.json"

type LoadOption func(*loadConfig)

func WithURL(url string) LoadOption
func WithHTTPClient(client *http.Client) LoadOption
func WithFetcher(fetcher Fetcher) LoadOption

type Fetcher interface {
    Fetch(ctx context.Context, url string) ([]masterfile.MasterfileEntry, error)
}

type FetcherFunc func(ctx context.Context, url string) ([]masterfile.MasterfileEntry, error)

func (f FetcherFunc) Fetch(ctx context.Context, url string) ([]masterfile.MasterfileEntry, error) {
    return f(ctx, url)
}
```

Internal `httpFetcher` (in `fetcher.go`):

- Uses caller-supplied `*http.Client` if set, else `http.DefaultClient`.
- `http.NewRequestWithContext(ctx, ...)` for cancellation/timeout.
- Maps non-2xx → `*StatusError`, transport errors → `*FetchError`, JSON failures → `*ParseError`.
- Custom-fetcher errors pass through unchanged (no re-wrapping).

### Errors

```go
type FetchError struct {
    URL string
    Err error
}
func (e *FetchError) Error() string { return fmt.Sprintf("masterfile: fetch %s: %v", e.URL, e.Err) }
func (e *FetchError) Unwrap() error { return e.Err }

type StatusError struct {
    URL    string
    Status int
}
func (e *StatusError) Error() string { return fmt.Sprintf("masterfile: HTTP %d from %s", e.Status, e.URL) }

type ParseError struct {
    Err error
}
func (e *ParseError) Error() string { return fmt.Sprintf("masterfile: parse: %v", e.Err) }
func (e *ParseError) Unwrap() error { return e.Err }

var ErrInvalidShape = errors.New("masterfile: expected JSON array of entries")
```

`*FetchError`, `*StatusError`, `*ParseError` are usable with `errors.As`. `ErrInvalidShape` is comparable with `errors.Is`. There is no `EntryNotFoundError` equivalent — comma-ok handles missing lookups without an error path.

### Concurrency model

Documented in the README:

- Construction is single-goroutine.
- After construction, all read methods are safe for concurrent use because internal storage is read-only.
- Refresh pattern uses `atomic.Pointer[Masterfile]`:

```go
var current atomic.Pointer[masterfileapi.Masterfile]
mf, err := masterfileapi.LoadRemote(ctx)
if err != nil { /* handle */ }
current.Store(mf)

// background refresh
go func() {
    if mf2, err := masterfileapi.LoadRemote(ctx); err == nil {
        current.Store(mf2)
    }
}()

// readers
mf := current.Load()
move, ok := mf.MoveSettings.Get(move_settings.MoveSettingsTemplateIDV0033MoveTackleFast)
```

### Codegen pipeline integration

`src/generate.ts` gets a new `src/go-api/` step that runs after `src/go/`:

- **`emit-masterfile.ts`** writes `packages/go-api/masterfile_gen.go`:
  - The per-group accessor fields on the `Masterfile` struct
  - An internal `buildIndexes(entries []masterfile.MasterfileEntry, byID map[string]int)` function that allocates each accessor and walks `entries` once, populating per-group `index` maps and `order` slices via a type switch on the discriminator
  - A `GroupNames []string` constant listing every group name in canonical order

- **`emit-accessors.ts`** writes `packages/go-api/accessor/<group>.go`, one file per group plus `singletons.go`:
  - `<Group>Accessor` struct
  - `Get` / `Has` / `All` / `TemplateIDs` / `Len` methods
  - The singletons file is special-cased to return the wide `MasterfileEntry` interface

Hand-written templates (`masterfile.go`, `loader.go`, `fetcher.go`, `errors.go`, `doc.go`) live under `src/go-api/templates/` as the source of truth and are **copied verbatim into `packages/go-api/` on every `bun run generate`** (mirroring how rust-api treats `masterfile.rs`, `error.rs`, `fetcher.rs`, `builder.rs`, `blocking.rs`). This keeps `packages/go-api/` reproducible end-to-end from the generator. Examples, tests, README, CHANGELOG, LICENSE, and `go.mod` ship directly in `packages/go-api/` and are NOT regenerated — they're ordinary committed files contributors edit by hand.

`bun run format` is extended to run `gofmt` over `packages/go-api/` (in addition to the existing `packages/go/`).

### Tests

Mirror `rust-api/tests/` layout, all under `packages/go-api/`:

- `masterfile_test.go` — core: `FromEntries`, `GetEntry`, `Has`, `Len`.
- `loading_test.go` — `Load(json)` success/failure, `FromEntries` invariants.
- `lookups_test.go` — per-group `Get`/`Has`/`All`/`TemplateIDs`, top-level vs per-group narrowing.
- `iteration_test.go` — `Entries`, `All`, `TemplateIDs`, `Groups`, ordering stability.
- `errors_test.go` — round-trip each error type through `errors.As` / `errors.Is`; `ErrInvalidShape` for non-array JSON.
- `e2e_test.go` — full `LoadRemote` against an `httptest.NewServer` returning `testdata/fixture.json` (and a separate test against the full repo-root `masterfile.json`).
- `testdata/fixture.json` — small canned slice mirroring `ts-api/tests/fixture.ts`.

Tests use `httptest` exclusively — no live network in CI.

### Examples

`packages/go-api/examples/`:

- `load_remote/main.go` — `masterfileapi.LoadRemote(ctx)`, print a known move.
- `from_json/main.go` — `os.ReadFile` + `masterfileapi.Load(bytes)`.
- `per_group/main.go` — typed-constant lookup demo on `mf.MoveSettings`.
- `custom_fetcher/main.go` — `WithFetcher(FetcherFunc(...))` wrapping a custom JSON shape.
- `refresh/main.go` — `atomic.Pointer[Masterfile]` swap pattern.

Each example is a standalone `package main` runnable with `go run ./examples/<name>/`.

## Out of scope

- Mutation methods (`Refresh`, `Replace`) — callers swap pointers themselves.
- `Find` / `Filter` / `FindByPattern` chained helpers — inline `for` is more idiomatic.
- Range-over-func iterators — slice accessors are sufficient for v0.1; can be added non-breakingly later.
- A blocking variant feature flag (rust-api's `blocking` feature) — Go has no async/blocking split.
- Cross-group literal-narrowed lookups — top-level `GetEntry` returns the wide interface intentionally.
