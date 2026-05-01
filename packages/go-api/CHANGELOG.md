# Changelog

All notable changes to the Go runtime API module are recorded here. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and this module adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

> Note: Go module releases for this package are tagged as `packages/go-api/vX.Y.Z` (subdirectory-prefixed), per Go's monorepo tagging rules.

## [Unreleased]

### Added
- Initial release: `Masterfile` runtime with `Load`, `LoadRemote`, `FromEntries`.
- Per-group typed accessors (`mf.MoveSettings.Get`, etc.) with `Get`, `Has`, `All`, `TemplateIDs`, `Len`.
- Top-level lookups: `GetEntry`, `Has`, `Entries`, `TemplateIDs`, `Len`, `Groups`.
- `Fetcher` interface + `FetcherFunc` adapter; default HTTP fetcher; `WithURL` / `WithHTTPClient` / `WithFetcher` options.
- Typed errors: `*FetchError`, `*StatusError`, `*ParseError`, sentinel `ErrInvalidShape` — all compatible with `errors.As` / `errors.Is`.
- Examples: `load_remote`, `from_json`, `per_group`, `custom_fetcher`, `refresh`.
