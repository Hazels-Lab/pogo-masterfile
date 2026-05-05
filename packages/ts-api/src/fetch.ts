import type { MasterfileEntry } from "pogo-masterfile-types/entries";
import { MasterfileFetchError, MasterfileParseError } from "./errors.js";
import type { Fetcher } from "./types.js";

export const DEFAULT_MASTERFILE_URL = "https://raw.githubusercontent.com/alexelgt/game_masters/refs/heads/master/GAME_MASTER.json";

/**
 * Default fetcher: standard `fetch` + JSON parse, with shape validation.
 * Throws `MasterfileFetchError` for network/HTTP failures and
 * `MasterfileParseError` for invalid JSON or non-array bodies.
 */
export const defaultFetcher: Fetcher = async (url, signal) => {
	let response: Response;
	try {
		response = await fetch(url, { signal });
	} catch (cause) {
		throw new MasterfileFetchError(`network error fetching ${url}`, url, cause);
	}
	if (!response.ok) {
		throw new MasterfileFetchError(`${response.status} ${response.statusText} from ${url}`, url);
	}
	let json: unknown;
	try {
		json = await response.json();
	} catch (cause) {
		throw new MasterfileParseError("response body is not valid JSON", cause);
	}
	if (!Array.isArray(json)) {
		throw new MasterfileParseError("expected top-level JSON array of entries");
	}
	return json as MasterfileEntry[];
};
