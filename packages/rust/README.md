# pogo-masterfile-types

[![docs.rs](https://img.shields.io/docsrs/pogo-masterfile-types)](https://docs.rs/pogo-masterfile-types)
[![Crates.io](https://img.shields.io/crates/v/pogo-masterfile-types)](https://crates.io/crates/pogo-masterfile-types)

Generated Rust types for the Pokémon GO masterfile, plus a typed `parse_masterfile` dispatcher that returns each entry as its concrete variant.

## Install

```bash
cargo add pogo-masterfile-types
```

## Usage

```rust
use pogo_masterfile_types::{parse_masterfile, MasterfileEntry};

let json = std::fs::read_to_string("masterfile.json")?;
let entries = parse_masterfile(&json)?;

for entry in entries {
    if let MasterfileEntry::PokemonSettings(e) = entry {
        println!("{}: {:?}", e.template_id, e.data.pokemon_settings.pokemon_id);
    }
}
# Ok::<(), Box<dyn std::error::Error>>(())
```

## What's in the crate

Each masterfile discriminator gets its own module containing three types:

- **`Entry`** — the outer `{ templateId, data: { ... } }` wrapper.
- **`EntryData`** — the inner `data` object, with the discriminator-keyed payload field.
- **The payload type** — the shape of the payload itself. Multi-shape groups are Rust enums dispatching to per-cluster variant structs.

Singletons (entries unique by `templateId`) live in the [`singletons`](https://docs.rs/pogo-masterfile-types/latest/pogo_masterfile_types/singletons) module.

Top-level [`MasterfileEntry`](https://docs.rs/pogo-masterfile-types/latest/pogo_masterfile_types/enum.MasterfileEntry.html) is an `#[serde(untagged)]` enum — feed the raw JSON to `parse_masterfile` and serde walks the variants until one fits.

## Source

Generated from `masterfile.json` via the codegen pipeline at the [repo root](https://github.com/<GH_OWNER>/pogo-masterfile-types). Don't edit emitted files by hand — re-run `bun run generate` instead.

## License

MIT — see [LICENSE](./LICENSE).
