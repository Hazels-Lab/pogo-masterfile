import type { MasterfileEntry } from "pogo-masterfile-types/entries";

export interface FromRemoteOptions {
	/** URL to fetch from. Defaults to `DEFAULT_MASTERFILE_URL`. */
	url?: string;
	/** Custom fetcher. Default uses global `fetch` + `response.json()`. */
	fetcher?: Fetcher;
	/** Cancellation. */
	signal?: AbortSignal;
}

/**
 * Fetch the masterfile JSON and normalize it to `MasterfileEntry[]`.
 *
 * Custom fetchers MUST handle whatever upstream shape they receive and return
 * an array conforming to `MasterfileEntry[]`. They should propagate `signal`
 * to the underlying fetch so cancellation works.
 */
export type Fetcher = (url: string, signal?: AbortSignal) => Promise<MasterfileEntry[]>;
