# pogo-masterfile-types

Generated TypeScript type definitions for the Pokémon GO masterfile, plus a typed parser that dispatches each entry to its concrete payload type.

## Install

```bash
npm install pogo-masterfile-types
# or
bun add pogo-masterfile-types
```

## Usage

```ts
import type { MasterfileEntry } from "pogo-masterfile-types";

const json = await Bun.file("masterfile.json").json();
const entries = json as MasterfileEntry[];

for (const entry of entries) {
  if ("pokemonSettings" in entry.data) {
    // entry.data.pokemonSettings is fully typed as PokemonSettings
    console.log(entry.data.pokemonSettings.pokemonId);
  }
}
```

## Subpath imports

Each masterfile discriminator gets its own subpath, so you can pull in just what you need:

```ts
import type { PokemonSettings } from "pogo-masterfile-types/pokemon-settings";
import type { MoveSettings } from "pogo-masterfile-types/move-settings";
import type { ItemSettings } from "pogo-masterfile-types/item-settings";
```

Subpaths follow the source directory layout — every folder under `dist/` is exposed.

## Module resolution

This package ships **only `.d.ts` files** (no runtime JS — these are pure type declarations). Because the emitted declarations preserve extensionless relative imports, your project should use:

```jsonc
// tsconfig.json
{
  "compilerOptions": {
    "moduleResolution": "bundler"  // or "node" (legacy)
  }
}
```

Bundler-mode resolution is the default in modern TypeScript projects (Next.js, Vite, Bun, Deno). If you're on `"node16"` / `"nodenext"`, you may need to switch.

## Source

Generated from `masterfile.json` via the codegen pipeline at the [repo root](https://github.com/<GH_OWNER>/pogo-masterfile-types). Don't edit emitted files by hand — re-run `bun run generate` instead.

## License

MIT — see [LICENSE](./LICENSE).
