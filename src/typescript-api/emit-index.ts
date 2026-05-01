/**
 * Emit `packages/ts-api/src/index.ts` — the public barrel.
 *
 * Static; doesn't depend on group data. Re-exports are sorted to match
 * biome's organize-imports default: alphabetical by module path, with
 * type-exports preceding value-exports from the same module.
 */
export function emitIndex(): string {
	return `// Generated from Pokémon GO masterfile — top-level barrel.

export { EntryNotFoundError, MasterfileFetchError, MasterfileParseError } from "./errors";
export { DEFAULT_MASTERFILE_URL, defaultFetcher } from "./fetch";
export type { EntriesByGroup, EntryByTemplateID, GroupName, TemplateIDsByGroup } from "./lookup-tables";
export type { GroupAccessor } from "./masterfile";
export { Masterfile } from "./masterfile";
export type { Fetcher, FromRemoteOptions } from "./types";
`;
}
