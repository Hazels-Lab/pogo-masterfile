# Changelog

All notable changes to the Go runtime API module are recorded here. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and this module adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

> Note: Go module releases for this package are tagged as `packages/go-api/vX.Y.Z` (subdirectory-prefixed), per Go's monorepo tagging rules.

## [0.1.14] - 2026-06-09

Backfill release from merge commit `65e9b6ec918083e6635cf5f942dba662898dd5b0`.

## [0.1.13] - 2026-05-17

Automated regeneration from upstream masterfile commit `7f5778017df3bb9c4e57efb35f954c375f679e8b`.

## [0.1.12] - 2026-05-15

Automated regeneration from upstream masterfile commit `d5f2d83e76e59ffb463e30cf6542b356f1faab22`.

## [0.1.11] - 2026-05-10

Automated regeneration from upstream masterfile commit `af379b35f08bf90feb0946be90fe1156d2858498`.

## [0.1.10] - 2026-05-09

Automated regeneration from upstream masterfile commit `4c9b3dfd5594e0c614ec133b762d261835a16b2a`.

## [0.1.9] - 2026-05-08

Automated regeneration from upstream masterfile commit `56d86b2fcb8a57983f8b435089092e1dd7feb86c`.

## [0.1.8] - 2026-05-08

Automated regeneration from upstream masterfile commit `00f981067adbe6f85bcbca9f5785f4c059099670`.

## [0.1.7] - 2026-05-06

Automated regeneration from upstream masterfile commit `7ff8cda2103ca871045a4ecdf2acdb9942688105`.

## [0.1.6] - 2026-05-06

Automated regeneration from upstream masterfile commit `cf88a9bdee34929c6f2810b137ff19568b54b579`.

## [0.1.5] - 2026-05-05

Automated regeneration from upstream masterfile commit `dafeb93352512e4091a8abf6b5196fbaa68baa08`.

## [0.1.4] - 2026-05-04

Automated regeneration from upstream masterfile commit `2c89935444a154d89a845b5466244fdc24a07bd4`.

## [0.1.3] - 2026-05-04

Backfill release from merge commit `94101cd0d3123eedac3e28fa2d7644fb0387ca65`.

## [0.1.2] - 2026-05-04

Backfill release from merge commit `cbcb12454a2ea308227b8f28f8802e53bedbc3c0`.

## [0.1.1] - 2026-05-04

Backfill release from merge commit `39f0ad93d151ad16750bb3fd50d771b87dfaa066`.

## [Unreleased]

### Added
- Initial release: `Masterfile` runtime with `Load`, `LoadRemote`, `FromEntries`.
- Per-group typed accessors (`mf.MoveSettings.Get`, etc.) with `Get`, `Has`, `All`, `TemplateIDs`, `Len`.
- Top-level lookups: `GetEntry`, `Has`, `Entries`, `TemplateIDs`, `Len`, `Groups`.
- `Fetcher` interface + `FetcherFunc` adapter; default HTTP fetcher; `WithURL` / `WithHTTPClient` / `WithFetcher` options.
- Typed errors: `*FetchError`, `*StatusError`, `*ParseError`, sentinel `ErrInvalidShape` — all compatible with `errors.As` / `errors.Is`.
- Examples: `load_remote`, `from_json`, `per_group`, `custom_fetcher`, `refresh`.
