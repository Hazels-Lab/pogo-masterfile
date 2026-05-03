# pogo-masterfile-types (Go)

Generated Go type definitions for the Pokémon GO masterfile, plus a typed `ParseMasterfile` dispatcher that returns each entry as its concrete struct type.

## Install

```bash
go get github.com/Hazels-Lab/pogo-masterfile/packages/go
```

## Usage

```go
package main

import (
    "fmt"
    "log"
    "os"

    masterfile "github.com/Hazels-Lab/pogo-masterfile/packages/go"
)

func main() {
    data, err := os.ReadFile("masterfile.json")
    if err != nil {
        log.Fatal(err)
    }
    entries, err := masterfile.ParseMasterfile(data)
    if err != nil {
        log.Fatal(err)
    }
    for _, entry := range entries {
        if e, ok := entry.(masterfile.PokemonSettingsEntry); ok {
            fmt.Println(e.TemplateID, e.Data.PokemonSettings.PokemonId)
        }
    }
}
```

## What's in the package

Each masterfile discriminator gets a struct triple:

- **`<Name>Entry`** — outer wrapper with `TemplateID` + `Data` fields.
- **`<Name>EntryData`** — inner data object, with the discriminator-keyed payload field.
- **The payload type** — the actual shape of the payload.

`MasterfileEntry` is a sealed interface — `ParseMasterfile` returns a slice of them and you type-switch to the variant you care about. Multi-shape groups become Go interfaces with per-cluster struct variants.

## Releases

This module lives at `packages/go/` inside a multi-language monorepo. Go's module proxy treats subdirectory modules as independent and **requires** semver tags to be **prefixed with the subdirectory path**:

```bash
git tag packages/go/v0.1.0      # ✅ correct
git tag v0.1.0                   # ❌ won't resolve
```

See [Go modules in subdirectories](https://go.dev/ref/mod#vcs-version) for the underlying rule.

## Source

Generated from `masterfile.json` via the codegen pipeline at the [repo root](https://github.com/Hazels-Lab/pogo-masterfile). Don't edit emitted files by hand — re-run `bun run generate` instead.

## License

MIT — see [LICENSE](./LICENSE).
