/**
 * Loading: every way to construct a Masterfile.
 *
 * Open this file in your editor and let intellisense show you the shapes —
 * `Masterfile.fromRemote` parameters, `FromRemoteOptions` fields, the custom
 * `Fetcher` signature.
 */
import { afterEach, describe, expect, mock, test } from "bun:test";
import type { MasterfileEntry } from "pogo-masterfile-types/entries";
import { DEFAULT_MASTERFILE_URL, defaultFetcher, type Fetcher, Masterfile, MasterfileFetchError, MasterfileParseError } from "../src/index.ts";
import { FIXTURE, mockFetch } from "./fixture.ts";

const ORIGINAL_FETCH = globalThis.fetch;
afterEach(() => {
	globalThis.fetch = ORIGINAL_FETCH;
});

describe("Masterfile.fromJson", () => {
	test("wraps an already-loaded array, no async", () => {
		const mf = Masterfile.fromJson(FIXTURE);
		expect(mf.size).toBe(FIXTURE.length);
	});

	test("the underlying array is preserved on `raw`", () => {
		const mf = Masterfile.fromJson(FIXTURE);
		expect(mf.raw).toHaveLength(FIXTURE.length);
	});
});

describe("Masterfile.fromRemote", () => {
	test("default — uses the alexelgt mirror", async () => {
		const seenUrls: string[] = [];
		const fetcher = mock(async (url: string) => {
			seenUrls.push(url);
			return [...FIXTURE];
		});
		const mf = await Masterfile.fromRemote({ fetcher });
		expect(seenUrls[0]).toBe(DEFAULT_MASTERFILE_URL);
		expect(mf.size).toBe(FIXTURE.length);
	});

	test("custom URL — same fetcher, different upstream", async () => {
		const seenUrls: string[] = [];
		const fetcher = mock(async (url: string) => {
			seenUrls.push(url);
			return [...FIXTURE];
		});
		await Masterfile.fromRemote({
			url: "https://my-cdn.example/masterfile.json",
			fetcher,
		});
		expect(seenUrls[0]).toBe("https://my-cdn.example/masterfile.json");
	});

	test("custom fetcher — auth headers, transforms, retries, whatever", async () => {
		// A consumer writing this fetcher gets full intellisense on Response,
		// AbortSignal, and the required `Promise<MasterfileEntry[]>` return.
		const fetcher: Fetcher = async (url, signal) => {
			const r = await fetch(url, {
				signal,
				headers: { Authorization: `Bearer fake-token` },
			});
			return (await r.json()) as MasterfileEntry[];
		};

		// Stub the underlying fetch (the custom fetcher delegates to it).
		globalThis.fetch = mockFetch(
			async () =>
				new Response(JSON.stringify(FIXTURE), {
					status: 200,
					headers: { "Content-Type": "application/json" },
				}),
		);

		const mf = await Masterfile.fromRemote({ fetcher });
		expect(mf.size).toBe(FIXTURE.length);
	});

	test("composing on top of the default fetcher", async () => {
		// Common pattern — keep the default error handling and JSON-array
		// validation, but post-process before the array reaches Masterfile.
		const fetcher: Fetcher = async (url, signal) => {
			const entries = await defaultFetcher(url, signal);
			// e.g. drop entries the consumer doesn't care about.
			return entries.filter((e) => !e.templateId.startsWith("AVATAR_"));
		};

		globalThis.fetch = mockFetch(
			async () =>
				new Response(JSON.stringify(FIXTURE), {
					status: 200,
					headers: { "Content-Type": "application/json" },
				}),
		);

		const mf = await Masterfile.fromRemote({ fetcher });
		expect(mf.size).toBe(FIXTURE.length); // fixture has no AVATAR_ entries
	});

	test("AbortSignal — cancellation propagates to the underlying fetch", async () => {
		const seenSignals: (AbortSignal | undefined)[] = [];
		globalThis.fetch = mockFetch(async (_input, init) => {
			seenSignals.push(init?.signal ?? undefined);
			return new Response(JSON.stringify(FIXTURE), { status: 200 });
		});
		const ac = new AbortController();
		await Masterfile.fromRemote({ signal: ac.signal });
		expect(seenSignals[0]).toBe(ac.signal);
	});

	test("network error → MasterfileFetchError with cause", async () => {
		const cause = new Error("ECONNREFUSED");
		globalThis.fetch = mockFetch(async () => {
			throw cause;
		});
		await expect(Masterfile.fromRemote()).rejects.toBeInstanceOf(MasterfileFetchError);
	});

	test("non-array body → MasterfileParseError", async () => {
		globalThis.fetch = mockFetch(
			async () =>
				new Response(JSON.stringify({ data: [] }), {
					status: 200,
					headers: { "Content-Type": "application/json" },
				}),
		);
		await expect(Masterfile.fromRemote()).rejects.toBeInstanceOf(MasterfileParseError);
	});
});
