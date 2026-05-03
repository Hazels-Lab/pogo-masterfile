# pogo-masterfile

[![docs.rs](https://img.shields.io/docsrs/pogo-masterfile)](https://docs.rs/pogo-masterfile)
[![Crates.io](https://img.shields.io/crates/v/pogo-masterfile)](https://crates.io/crates/pogo-masterfile)

Runtime API for the Pokémon GO masterfile. Loads, indexes, and queries entries with per-group narrow-typed accessors. Built on [`pogo-masterfile-types`](https://crates.io/crates/pogo-masterfile-types).

## Install

```bash
cargo add pogo-masterfile
```

For sync usage:

```bash
cargo add pogo-masterfile --no-default-features --features blocking
```

## Quickstart

```rust,no_run
use pogo_masterfile::Masterfile;
use pogo_masterfile_types::move_settings::MoveSettingsTemplateId;

# tokio_test::block_on(async {
let mf = Masterfile::from_remote().await.unwrap();

// Top-level lookup — wide return type.
let entry = mf.get_entry("V0022_MOVE_MEGAHORN");

// Per-group accessor with the typed enum (compile-time validated):
let megahorn = mf.move_settings().get(MoveSettingsTemplateId::V0022MoveMegahorn);

// Iterate just one group:
for move_ in mf.move_settings().iter() {
    let _ = move_;
}
# });
```

## Top-level vs per-group lookups

The `Masterfile` struct splits its lookup APIs to match Rust's idioms:

- **Top-level** (`mf.get_entry`, `mf.has`) returns `&MasterfileEntry` (the wide enum). Use it for arbitrary string IDs.
- **Per-group accessor** (`mf.move_settings().get(id)`) narrows to the exact `&MoveSettingsEntry` struct. The `id` parameter is polymorphic (`impl TryInto<MoveSettingsTemplateId>`) — accepts both the typed enum (compile-time validated) and `&str` (runtime-parsed):

```rust,ignore
use pogo_masterfile_types::move_settings::MoveSettingsTemplateId;

// Typed: compile-time validated.
let m = mf.move_settings().get(MoveSettingsTemplateId::V0022MoveMegahorn);

// String: runtime parsed. Returns None if the string doesn't parse OR the
// entry is missing.
let m = mf.move_settings().get("V0022_MOVE_MEGAHORN");
```

## Loading

```rust,no_run
use std::time::Duration;
use pogo_masterfile::Masterfile;

# tokio_test::block_on(async {
// Default: alexelgt mirror, default reqwest client.
let mf = Masterfile::from_remote().await.unwrap();

// Custom URL via builder:
let mf = Masterfile::builder()
    .url("https://my-cdn/masterfile.json")
    .timeout(Duration::from_secs(30))
    .fetch()
    .await.unwrap();

// Custom fetcher via closure:
let mf = Masterfile::builder()
    .fetcher(|_url: &str| async move {
        // ... your custom fetch + transform ...
        Ok(Vec::new())
    })
    .fetch()
    .await.unwrap();

// Already-loaded data (no network):
let mf = Masterfile::from_json("[]").unwrap();
# });
```

## Async vs blocking

Both APIs ship in the same crate, gated by Cargo features. The async API is on by default; the blocking API is opt-in.

```rust,ignore
// Async (default)
use pogo_masterfile::Masterfile;

// Blocking (feature = "blocking")
use pogo_masterfile::blocking::Masterfile;
```

The struct API is identical between the two — only `from_remote` and `refresh` change shape (sync vs async).

## Errors

Five real failure modes, surfaced through the `Error` enum:

```rust,ignore
match err {
    pogo_masterfile::Error::Fetch { url, source } => /* network */ Ok(()),
    pogo_masterfile::Error::Status { url, status } => /* HTTP non-2xx */ Ok(()),
    pogo_masterfile::Error::Parse(_) => /* invalid JSON */ Ok(()),
    pogo_masterfile::Error::InvalidShape => /* JSON not an array */ Ok(()),
    pogo_masterfile::Error::Custom(_) => /* user fetcher error */ Ok(()),
}
```

For lookups, `Option<&Entry>` carries the "not found" case — no exception path.

## Source

Generated from the codegen pipeline at the [repo root](https://github.com/Hazels-Lab/pogo-masterfile). Don't edit emitted files — re-run `bun run generate` instead.

## License

MIT — see [LICENSE](./LICENSE).
