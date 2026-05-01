/**
 * Emit `packages/ts-api/src/index.ts` — the public barrel.
 *
 * Static; doesn't depend on group data.
 */
export function emitIndex(): string {
	return `// Generated from Pokémon GO masterfile — top-level barrel.

export { Masterfile } from "./masterfile";
export type { GroupAccessor } from "./masterfile";
export { defaultFetcher, DEFAULT_MASTERFILE_URL } from "./fetch";
export type { FromRemoteOptions, Fetcher } from "./types";
export { MasterfileFetchError, MasterfileParseError, EntryNotFoundError } from "./errors";
export type { EntryByTemplateID, EntriesByGroup, TemplateIDsByGroup, GroupName } from "./lookup-tables";
`;
}
