# Go Sub-Package Migration — Design Spec

**Date:** 2026-04-30
**Author:** brainstorming session (derick.magnusen@gmail.com + Claude)
**Status:** Approved, pending implementation

## Problem

The Go output is currently flat: `packages/go/` holds 130+ generated `.go` files all in `package masterfile`. Reading the directory listing is unpleasant — `badge_settings.go`, `badge_settings_template_ids.go`, `combat_npc_personality.go`, `combat_npc_personality_template_ids.go`, ... — and the package surface mixes 60+ unrelated discriminator groups in one namespace. Type names carry the group as a redundant prefix because the package can't (`masterfile.BadgeSettings`).

The flat layout was deliberately chosen in the prior templateId-enums spec ([2026-04-30-templateid-enums-design.md](2026-04-30-templateid-enums-design.md)) as Path Y, with sub-packages (Path X) deferred. After living with the result, the flat layout is the bigger ergonomic problem.

## Goal

Move each discriminator group into its own sub-package: `packages/go/badge_settings/{types,template_ids}.go`, `packages/go/pokemon_settings/{types,template_ids}.go`, etc. Singletons get `packages/go/singletons/{types,template_ids}.go`. Keep the parser and the `MasterfileEntry` interface in the root `package masterfile`. Symmetric with the Rust layout (`packages/rust/src/<group>/{types,template_ids}.rs`).

The compile-time sealed-interface guarantee (`isMasterfileEntry()` unexported) cannot survive the move — unexported methods are owned by their declaring package. Replace it with an exported marker method (`MasterfileEntry()`); accept the loss of the "no foreign implementers" property as the price of layout cleanliness.

## Design

### Output layout

```
packages/go/
  go.mod                                # preserved
  doc.go                                # preserved
  README.md, LICENSE, CHANGELOG.md      # preserved
  masterfile.go                         # generated: parser, interface, dispatch
  masterfile_test.go                    # preserved (updated by hand for new imports)
  examples/parse/main.go                # preserved (no per-group type refs — no change needed)
  badge_settings/
    types.go                            # package badge_settings — structs + Entry wrappers
    template_ids.go                     # typed-string + const block + Values slice
  pokemon_settings/
    types.go
    template_ids.go
  …
  singletons/
    types.go                            # all singletons folded
    template_ids.go                     # one combined SingletonsTemplateID const block
```

Package names are snake_case matching the directory name (`package badge_settings`). This deviates from Effective Go's "no underscores in package names" guideline but matches the project's existing snake_case file naming and produces readable output for long discriminator names like `pokemon_extended_settings` (the lowercase-no-underscore form `pokemonextendedsettings` is genuinely worse). Linters that flag this can be silenced for generated code.

### Marker interface change

`packages/go/masterfile.go` declares:

```go
package masterfile

// MasterfileEntry is satisfied by every per-discriminator Entry type
// generated under this module. Implementers live in per-group sub-packages
// (e.g. badge_settings.BadgeSettingsEntry); the marker method is exported
// because Go's unexported-method sealing trick only works within a single
// package.
type MasterfileEntry interface {
    MasterfileEntry()
}
```

Each generated `*Entry` struct in its sub-package implements the marker:

```go
package badge_settings

func (BadgeSettingsEntry) MasterfileEntry() {}
```

The marker method name matches the interface name — convention in `net/http` (`Handler.ServeHTTP`), `database/sql/driver` and others. Anyone *could* implement the interface externally; the documentation is the only barrier. In practice this doesn't matter because the only thing producing `MasterfileEntry` values is `ParseMasterfile`, which only ever returns generated types.

### Type naming inside sub-packages

Generated type names keep their group prefix unchanged:

- `badge_settings.BadgeSettingsEntry` (not `badge_settings.Entry`)
- `badge_settings.BadgeSettings` (not `badge_settings.Settings`)
- `badge_settings.BadgeSettingsTemplateID` (not `badge_settings.TemplateID`)
- `badge_settings.BadgeSettingsTemplateIDValues` (not `badge_settings.Values`)

Reasons:

1. **Cross-language consistency.** Rust kept the prefix in `pogo_masterfile_types::badge_settings::BadgeSettings`. Diverging here makes the symmetry weaker and forces consumers to remember per-language renaming rules.
2. **Grep-ability.** Searching the codebase for `BadgeSettingsEntry` finds every reference. With the prefix dropped, type names like `Entry`, `Settings`, and `TemplateID` collide across groups when grepping.
3. **One-time decision cost.** Renaming later is a breaking change to the Go API; preserving names now leaves the option open without forcing it.

Consumers who hate the redundant reads can alias on import: `bs "github.com/.../packages/go/badge_settings"` → `bs.BadgeSettings`.

### Cross-package dispatch in `masterfile.go`

The dispatcher needs to import every sub-package so it can name their concrete types in the type switch:

```go
package masterfile

import (
    "encoding/json"
    "fmt"

    "github.com/PLACEHOLDER/pogo-masterfile-types/packages/go/badge_settings"
    "github.com/PLACEHOLDER/pogo-masterfile-types/packages/go/pokemon_settings"
    // …~60 more sub-package imports, sorted alphabetically
    "github.com/PLACEHOLDER/pogo-masterfile-types/packages/go/singletons"
)

type MasterfileEntry interface {
    MasterfileEntry()
}

func ParseMasterfile(data []byte) ([]MasterfileEntry, error) { /* unchanged */ }

func parseEntry(data json.RawMessage) (MasterfileEntry, error) {
    var probe struct { /* unchanged */ }
    if err := json.Unmarshal(data, &probe); err != nil { /* unchanged */ }

    var disc string
    for k := range probe.Data {
        if k != "templateId" {
            disc = k
            break
        }
    }

    switch disc {
    case "badgeSettings":
        var e badge_settings.BadgeSettingsEntry
        if err := json.Unmarshal(data, &e); err != nil {
            return nil, err
        }
        return e, nil
    case "pokemonSettings":
        var e pokemon_settings.PokemonSettingsEntry
        // …
    case "":
        switch probe.TemplateID {
        case "ACCESSIBILITY_CLIENT_SETTINGS":
            var e singletons.AccessibilitySettingsEntry
            // …
        }
    }
}
```

The structure is mechanically the same as today; the only change is qualified type names in each `case` body.

### Module-path discovery

The sub-package imports need the module path (`github.com/PLACEHOLDER/pogo-masterfile-types/packages/go`). Today's codegen never references it because everything's in one package. The new `emitMasterfileFile` reads the module declaration line from `packages/go/go.mod` at generate time:

```ts
const goMod = await readFile(join(OUT_DIR, "go.mod"), "utf8");
const modulePath = goMod.match(/^module\s+(\S+)/m)?.[1];
if (!modulePath) throw new Error("could not parse module path from go.mod");
```

This means `PLACEHOLDER` flows through automatically; when the user replaces it (`PLACEHOLDER → realorg`), the next regenerate picks it up without any other change.

Falls through `writeOutput`'s `preserve` list as today.

### Files

Each `<group>/types.go` carries the existing struct + Entry wrapper content from the current `<group>.go`, with two changes:

1. `package masterfile` → `package <group>`.
2. The Entry wrapper's marker-method line `func (FooEntry) isMasterfileEntry() {}` → `func (FooEntry) MasterfileEntry() {}`.

Each `<group>/template_ids.go` is the existing `<group>_template_ids.go` content with the same `package` rename.

`singletons/types.go` and `singletons/template_ids.go` follow the same pattern. The combined enum `SingletonsTemplateID` and per-singleton `*Entry` wrappers all live under `package singletons`.

`masterfile.go` is rewritten as described in §"Cross-package dispatch."

### Test updates (hand-written)

`packages/go/masterfile_test.go` has hand-written tests that reference now-relocated types. Update by hand:

```go
// Before:
entry, ok := entries[0].(AccessibilitySettingsEntry)

// After:
import singletons "github.com/PLACEHOLDER/pogo-masterfile-types/packages/go/singletons"
// …
entry, ok := entries[0].(singletons.AccessibilitySettingsEntry)
```

The two smoke tests added in the prior templateId-enums migration also need import updates:

```go
// Before:
if len(BadgeSettingsTemplateIDValues) == 0 { … }

// After:
import badge_settings "github.com/PLACEHOLDER/pogo-masterfile-types/packages/go/badge_settings"
// …
if len(badge_settings.BadgeSettingsTemplateIDValues) == 0 { … }
```

`examples/parse/main.go` uses only `masterfile.ParseMasterfile` and prints — no per-group type references. No update needed.

## Out of scope

- **Rust layout** — already module-per-group; no change.
- **TypeScript layout** — separate concern, not touched.
- **Type renames** (e.g. `BadgeSettingsEntry` → `Entry`) — explicit defer per Design Choice 2A.
- **`internal/` enforcement** of "no foreign implementers" — accepted loss; documentation is the only barrier.
- **Per-group `doc.go` files** — generated code stays lean; can add later if needed.
- **Migration of go.mod's `PLACEHOLDER`** — pre-existing TODO; codegen reads whatever's in there.

## Migration / build order

1. Add module-path discovery to `src/go/generate.ts` (read `go.mod`).
2. Update `entryWrapper`/`stubEntryWrapper` macros in `src/go/emit.ts` to emit `MasterfileEntry()` instead of `isMasterfileEntry()`.
3. Refactor `emitGroupModule` and `emitSingletonsModule` to take a `packageName` parameter (defaulting to the group's snake_case name); both produce output with that package declaration.
4. Refactor `emitGroupTemplateIdsFile` and `emitSingletonsTemplateIdsFile` similarly.
5. Refactor `emitMasterfileFile` to import every sub-package and qualify type references in the dispatch switch.
6. Update `src/go/generate.ts` to write into `<group>/types.go` + `<group>/template_ids.go` paths instead of flat `<group>.go` + `<group>_template_ids.go`.
7. Update the `preserve` list — add nothing new, but verify `examples/parse/main.go` continues to be preserved.
8. Add/update tests in `src/go/emit.test.ts` to cover the new package declarations, marker method, and import paths in `masterfile.go`.
9. Run `bun run src/generate.ts`. Verify `cd packages/go && go build ./...` succeeds.
10. Hand-update `packages/go/masterfile_test.go` to import the relocated types and qualify references.
11. Run `cd packages/go && go test ./...` — both existing tests and the smoke tests added in the prior migration pass should be green.
12. Update CLAUDE.md and AGENTS.md skip-list entries from `<group>.go` / `<group>_template_ids.go` globs to `<group>/**`.
