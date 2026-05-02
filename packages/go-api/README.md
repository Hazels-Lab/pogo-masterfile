# pogo-masterfile (Go)

Runtime API for the Pokémon GO masterfile. Loads, indexes, and queries entries with per-group typed accessors. Built on [`pogo-masterfile-types`](../go/README.md).

## Install

```bash
go get github.com/Hazels-Lab/pogo-masterfile-types/packages/go-api
```

## Quickstart

```go
package main

import (
    "context"
    "fmt"
    "log"

    masterfileapi "github.com/Hazels-Lab/pogo-masterfile-types/packages/go-api"
    "github.com/Hazels-Lab/pogo-masterfile-types/packages/go/move_settings"
)

func main() {
    mf, err := masterfileapi.LoadRemote(context.Background())
    if err != nil {
        log.Fatal(err)
    }

    // Top-level lookup — returns the wide MasterfileEntry interface.
    entry, ok := mf.GetEntry("V0022_MOVE_MEGAHORN")
    _ = entry

    // Per-group accessor — typed return; fields autocomplete.
    move, ok := mf.MoveSettings.Get(move_settings.MoveSettingsTemplateIDV0013MoveWrap)
    if ok {
        fmt.Printf("power = %v\n", move.Data.MoveSettings.Power)
    }
}
```

## Top-level vs per-group lookups

- **Top-level** (`mf.GetEntry`, `mf.Has`) returns the wide `masterfile.MasterfileEntry` interface. Use it for arbitrary string IDs; type-assert to a concrete entry if you need fields.
- **Per-group** (`mf.MoveSettings.Get(id)`) returns the concrete typed entry. The id parameter is the typed `move_settings.MoveSettingsTemplateID` — predefined constants and string literals work directly; string variables need a one-character cast (`move_settings.MoveSettingsTemplateID(s)`).

## Loading

```go
// Default: alexelgt mirror, http.DefaultClient.
mf, err := masterfileapi.LoadRemote(ctx)

// Custom URL / timeout via *http.Client.
mf, err := masterfileapi.LoadRemote(
    ctx,
    masterfileapi.WithURL("https://my-cdn/masterfile.json"),
    masterfileapi.WithHTTPClient(&http.Client{Timeout: 30 * time.Second}),
)

// Fully custom fetcher (e.g. wrapped JSON shape, S3 source).
mf, err := masterfileapi.LoadRemote(
    ctx,
    masterfileapi.WithFetcher(masterfileapi.FetcherFunc(func(ctx context.Context, url string) ([]masterfile.MasterfileEntry, error) {
        // ...
    })),
)

// Pre-loaded JSON (no network).
mf, err := masterfileapi.Load(jsonBytes)

// Pre-parsed entries.
mf := masterfileapi.FromEntries(entries)
```

## Errors

```go
import "errors"

mf, err := masterfileapi.LoadRemote(ctx)
if err != nil {
    var fe *masterfileapi.FetchError
    var se *masterfileapi.StatusError
    var pe *masterfileapi.ParseError
    switch {
    case errors.As(err, &fe):  // network/transport (incl. context cancel)
    case errors.As(err, &se):  // non-2xx HTTP
    case errors.As(err, &pe):  // JSON malformed
    case errors.Is(err, masterfileapi.ErrInvalidShape): // not an array
    }
}
```

Lookups never error: `Get` and `Has` use the comma-ok pattern.

## Refresh / concurrent reads

`Masterfile` is read-safe across goroutines after construction. To refresh, swap the pointer atomically:

```go
var current atomic.Pointer[masterfileapi.Masterfile]
mf, _ := masterfileapi.LoadRemote(ctx)
current.Store(mf)

// background refresh
go func() {
    if mf2, err := masterfileapi.LoadRemote(ctx); err == nil {
        current.Store(mf2)
    }
}()

// readers
mf := current.Load()
```

## Releases

This module lives at `packages/go-api/` inside a multi-language monorepo. Go's module proxy treats subdirectory modules as independent and **requires** semver tags to be **prefixed with the subdirectory path**:

```bash
git tag packages/go-api/v0.1.0      # ✅ correct
git tag v0.1.0                       # ❌ won't resolve
```

See [Go modules in subdirectories](https://go.dev/ref/mod#vcs-version) for the underlying rule.

## Source

`masterfile_gen.go` and `accessor/*.go` are generated from the codegen pipeline at the [repo root](https://github.com/Hazels-Lab/pogo-masterfile-types). Don't edit emitted files by hand — re-run `bun run generate` instead. The hand-written runtime templates (`masterfile.go`, `loader.go`, `fetcher.go`, `errors.go`, `doc.go`) live in `src/go-api/templates/` and are copied verbatim on each generate.

## License

MIT — see [LICENSE](./LICENSE).
