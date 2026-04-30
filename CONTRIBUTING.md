# Contributing

## Regenerating types

The three published packages under `packages/` are **fully generated** from `masterfile.json` plus the inference pipeline in `src/`. Don't edit files in `packages/typescript/src/`, `packages/rust/src/`, or `packages/go/*.go` by hand — run codegen instead:

```bash
bun run generate
```

## Updating the masterfile

`masterfile.json` is committed at the repo root. To pull in a new dump from Niantic:

1. Replace `masterfile.json` with the latest snapshot.
2. Run `bun run generate` to refresh all three language packages.
3. Run `bun test` to make sure the generator's invariants still hold.
4. Commit the updated `masterfile.json` and the regenerated package files together.

## Releases

Each language package has its own version and ships independently. Releases are triggered by **pushing a git tag** matching the package's pattern.

| Package    | Tag pattern         | Example tag           | Workflow                                  |
| ---------- | ------------------- | --------------------- | ----------------------------------------- |
| TypeScript | `typescript-v*`     | `typescript-v0.1.0`   | `.github/workflows/publish-npm.yml`       |
| Rust       | `rust-v*`           | `rust-v0.1.0`         | `.github/workflows/publish-rust.yml`      |
| Go         | `packages/go/v*`    | `packages/go/v0.1.0`  | `.github/workflows/release-go.yml`        |

### About the Go tag pattern

The Go module lives at `packages/go/`, not the repo root. Go's module proxy treats this as a separate module and **requires** semver tags to be prefixed with the module's subdirectory path. A tag of `v0.1.0` won't work — proxy.golang.org will refuse to serve the module. Always tag as `packages/go/v0.1.0` (and similar for future versions).

Reference: [Go modules in subdirectories](https://go.dev/ref/mod#vcs-version).

### Release checklist

Before pushing a release tag for any package:

1. Bump the version in the package manifest (`package.json`, `Cargo.toml`, no version file for Go — the tag *is* the version).
2. Update that package's `CHANGELOG.md` — move `## [Unreleased]` items into a new dated `## [x.y.z]` section.
3. Commit on `main`.
4. Tag and push:

   ```bash
   git tag typescript-v0.1.0      # or rust-v0.1.0 / packages/go/v0.1.0
   git push origin typescript-v0.1.0
   ```

5. Watch the corresponding workflow and confirm the package appears on the registry.

## Local verification before tagging

```bash
# TypeScript
cd packages/typescript && bun run build && npm pack --dry-run

# Rust
cd packages/rust && cargo publish --dry-run

# Go
cd packages/go && go build ./... && go vet ./... && go test ./...
```
