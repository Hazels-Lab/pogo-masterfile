## Important

Do NOT read or parse the following generated files (extremely large — wastes tokens):

* `./packages/ts/dist/pokemon-settings/**`
* `./packages/ts/dist/pokemon-extended-settings/**`
* `./packages/ts/dist/avatar-customization/**`
* `./packages/ts/dist/gender-settings/**`
* `./packages/ts/dist/avatar-item-display/**`
* `./packages/ts/dist/iap-item-display/**`
* `./packages/ts/dist/form-settings/**`
* `./packages/ts/dist/badge-settings/**`
* `./packages/rust/src/lib.rs`
* `./packages/rust/src/pokemon_settings/**`
* `./packages/rust/src/pokemon_extended_settings/**`
* `./packages/rust/src/avatar_customization/**`
* `./packages/rust/src/gender_settings/**`
* `./packages/rust/src/avatar_item_display/**`
* `./packages/rust/src/iap_item_display/**`
* `./packages/rust/src/form_settings/**`
* `./packages/rust/src/badge_settings/**`
* `./packages/rust/src/singletons/template_ids.rs`
* `./packages/go/masterfile.go`
* `./packages/go/pokemon_settings/**`
* `./packages/go/pokemon_extended_settings/**`
* `./packages/go/avatar_customization/**`
* `./packages/go/gender_settings/**`
* `./packages/go/avatar_item_display/**`
* `./packages/go/iap_item_display/**`
* `./packages/go/form_settings/**`
* `./packages/go/badge_settings/**`
* `./packages/go/singletons/**`

When you are done with your edits, report to the user to test if the files have outputted correctly.

## Before committing

Always run `bun run format` from the repo root before any commit. The formatter (biome + cargo fmt + gofmt) normalizes whitespace, sorts imports, and rewraps long lines across all generated and hand-written sources. Skipping it produces noisy diffs the user has to undo and re-commit by hand.
