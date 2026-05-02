# Contributing

## Regenerating types

The seven published packages under `packages/` are **fully generated** from the upstream masterfile JSON plus the inference pipeline in `src/`. Don't edit generated files by hand — run codegen instead:

```bash
bun run generate
```

## Automated upstream tracking

The repo runs an unattended pipeline that mirrors upstream masterfile changes through to published artifacts. End-to-end:

1. **`autoupdate.yml`** runs every 6 hours (and on `workflow_dispatch`). It checks the upstream `alexelgt/game_masters` repo's HEAD SHA against `.upstream-sha`. If different, it runs `bun run generate`, computes per-package canonical hashes (via `scripts/detect-changes.ts`), and bumps the patch version of every package whose content actually changed (with strict cascade — when `ts` bumps, `ts-api` bumps; same for `rust` → `rust-api` and `go` → `go-api`). Version state lives in `.versions.json`.

2. The bumps land as a PR labeled `autoupdate`. CI runs against it.

3. **`auto-merge.yml`** enables auto-merge on the labeled PR; once CI is green, GitHub squash-merges it to `main`.

4. **`tag-after-merge.yml`** watches `main` for `.versions.json` bumps. For each bumped package, it pushes the corresponding release tag in dependency-ordered layers (with a 90s gap between layers so dependents resolve correctly):

   - **L1** (independent): `typescript-v*`, `rust-macros-v*`, `packages/go/v*`
   - **L2**: `pogo-masterfile-v*`, `rust-v*`, `packages/go-api/v*`
   - **L3**: `pogo-masterfile-rust-v*`

5. Each tag fires its existing per-package publish workflow (npm / crates.io / GitHub Release).

### One-time setup before the pipeline can run

Required secrets (Settings → Secrets and variables → Actions):

| Secret | Permissions | Purpose |
|---|---|---|
| `AUTOUPDATE_TOKEN` | Fine-grained PAT with `contents: write` + `pull-requests: write` on this repo | Lets autoupdate workflows open PRs and push tags such that downstream workflows actually fire (the default `GITHUB_TOKEN` cannot trigger workflow chains). |
| `NPM_TOKEN` | Automation token for the `pogo-masterfile-types` and `pogo-masterfile` npm packages | Used by `publish-npm.yml` and `publish-pogo-masterfile.yml`. |
| `CARGO_REGISTRY_TOKEN` | Token from <https://crates.io/settings/tokens> with `publish-new` + `publish-update` for the three Rust crates | Used by `publish-rust*.yml`. |

Repo settings:

- **Branch protection on `main`**: require `CI` workflow checks; allow auto-merge.
- **`Allow auto-merge`** (Settings → General → Pull Requests).
- **Default branch**: `main`.

Bootstrap step (do once, by hand):

```bash
# Seed crates.io with the proc-macro crate so the rust crate's dep can resolve.
git tag rust-macros-v0.1.0
git push origin rust-macros-v0.1.0
```

After that the pipeline self-services. To pause it: disable the `Autoupdate` workflow in the Actions UI.

### Manual override

If you ever need to pull a masterfile snapshot manually:

1. Run `bun run generate` locally.
2. Run `bun test`.
3. Commit and push as a normal PR. The `tag-after-merge.yml` workflow will pick up any `.versions.json` bumps — bump them yourself in the PR if you want to release.

## Releases

Each language package has its own version and ships independently. Releases are triggered by **pushing a git tag** matching the package's pattern.

| Package          | Tag pattern               | Example tag                   | Workflow                                          |
| ---------------- | ------------------------- | ----------------------------- | ------------------------------------------------- |
| TypeScript types | `typescript-v*`           | `typescript-v0.1.0`           | `.github/workflows/publish-npm.yml`               |
| TS API           | `pogo-masterfile-v*`      | `pogo-masterfile-v0.1.0`      | `.github/workflows/publish-pogo-masterfile.yml`   |
| Rust macros      | `rust-macros-v*`          | `rust-macros-v0.1.0`          | `.github/workflows/publish-rust-macros.yml`       |
| Rust types       | `rust-v*`                 | `rust-v0.1.0`                 | `.github/workflows/publish-rust.yml`              |
| Rust API         | `pogo-masterfile-rust-v*` | `pogo-masterfile-rust-v0.1.0` | `.github/workflows/publish-rust-api.yml`          |
| Go types         | `packages/go/v*`          | `packages/go/v0.1.0`          | `.github/workflows/release-go.yml`                |
| Go API           | `packages/go-api/v*`      | `packages/go-api/v0.1.0`      | `.github/workflows/release-go-api.yml`            |

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
# TypeScript types
cd packages/ts && bun run check && npm pack --dry-run

# TypeScript API (pogo-masterfile)
cd packages/ts-api && bun run build && npm pack --dry-run

# Rust
cd packages/rust && cargo publish --dry-run

# Rust API (pogo-masterfile)
cd packages/rust-api && cargo publish --dry-run

# Go
cd packages/go && go build ./... && go vet ./... && go test ./...
```
