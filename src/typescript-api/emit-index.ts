/**
 * Emit `packages/ts-api/src/index.ts` — the public barrel.
 *
 * Static; doesn't depend on group data. Re-exports are sorted to match
 * biome's organize-imports default: alphabetical by module path, with
 * type-exports preceding value-exports from the same module.
 *
 * Lookup-table types (`EntryByTemplateID`, `EntriesByGroup`,
 * `TemplateIDsByGroup`, `GroupName`) live in `pogo-masterfile-types/lookup-table`
 * and are intentionally NOT re-exported from this barrel — they're expensive
 * to materialize and consumers who want them should import the subpath
 * directly. The Masterfile class still uses them internally.
 */
export function emitIndex(): string {
	return `// Generated from Pokémon GO masterfile — top-level barrel.

export { EntryNotFoundError, MasterfileFetchError, MasterfileParseError } from "./errors.js";
export { DEFAULT_MASTERFILE_URL, defaultFetcher } from "./fetch.js";
export type { GroupAccessor } from "./masterfile.js";
export { Masterfile } from "./masterfile.js";
export type { Fetcher, FromRemoteOptions } from "./types.js";
`;
}
