# pogo-masterfile

Generated, language-native type definitions and runtime APIs for the Pokémon GO masterfile.

The masterfile is a single JSON document of ~hundreds of strongly-typed entry kinds (`PokemonSettings`, `MoveSettings`, `ItemSettings`, …). This repo treats it as a schema source and emits idiomatic types — plus a typed loader/lookup runtime — for three target languages, so you don't have to roll your own.

## Published artifacts

| Language   | Types                       | Runtime API           | Registry          |
| ---------- | --------------------------- | --------------------- | ----------------- |
| TypeScript | `pogo-masterfile-types`     | `pogo-masterfile`     | npm               |
| Rust       | `pogo-masterfile-types`     | `pogo-masterfile`     | crates.io         |
| Go         | `…/packages/go`             | `…/packages/go-api`   | proxy.golang.org  |

Each types package ships:

- **An `Entry` / `EntryData` / payload triple** per discriminator — the outer `{ templateId, data: { … } }` wrapper, the inner `data` object, and the discriminator-keyed payload itself.
- **A `parseMasterfile` (or `ParseMasterfile`) helper** that dispatches each JSON entry to its concrete type by inspecting the inner data object's non-`templateId` key.
- **Shared `Singletons` / `singletons` module** for entries that are unique by `templateId` and don't deserve their own file.

See each package's README for install lines and a usage example:

- [packages/ts/README.md](packages/ts/README.md)
- [packages/rust/README.md](packages/rust/README.md)
- [packages/go/README.md](packages/go/README.md)

## Where the masterfile comes from

`masterfile.json` at the repo root is the single source of truth for codegen. It comes from the public Niantic GAME_MASTER dump that the community mirrors regularly. The schema itself isn't documented by Niantic — types here are inferred from observation across the full corpus of entries (see `src/infer.ts`).

## Development

```bash
bun install            # install dependencies
bun run generate       # regenerate all three language packages
bun run typecheck      # tsc --noEmit
bun run lint           # biome check
bun test               # run generator unit tests
```

Generator source lives under `src/`:

- `src/generate.ts` — top-level orchestrator
- `src/typescript/`, `src/rust/`, `src/go/` — per-language emitters
- `src/infer.ts`, `src/group.ts`, `src/split.ts` — schema inference & shape grouping

See [CONTRIBUTING.md](CONTRIBUTING.md) for release/tagging conventions.

## License

MIT — see [LICENSE](LICENSE).
