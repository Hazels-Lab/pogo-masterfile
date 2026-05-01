import { afterEach, describe, expect, mock, test } from "bun:test";
import {
	MasterfileFetchError,
	MasterfileParseError,
} from "../../../packages/ts-api/src/errors.ts";
import {
	DEFAULT_MASTERFILE_URL,
	defaultFetcher,
} from "../../../packages/ts-api/src/fetch.ts";
import { Masterfile } from "../../../packages/ts-api/src/masterfile.ts";
import { FIXTURE_ENTRIES } from "./fixture.ts";

const ORIGINAL_FETCH = globalThis.fetch;
afterEach(() => {
	globalThis.fetch = ORIGINAL_FETCH;
});

describe("defaultFetcher", () => {
	test("happy path returns parsed array", async () => {
		globalThis.fetch = mock(
			async () =>
				new Response(JSON.stringify(FIXTURE_ENTRIES), {
					status: 200,
					headers: { "Content-Type": "application/json" },
				}),
		);
		const entries = await defaultFetcher("https://example/test", undefined);
		expect(entries).toHaveLength(FIXTURE_ENTRIES.length);
	});

	test("network error throws MasterfileFetchError with cause", async () => {
		const cause = new Error("ECONNREFUSED");
		globalThis.fetch = mock(async () => {
			throw cause;
		});
		try {
			await defaultFetcher("https://example/x", undefined);
			expect.unreachable();
		} catch (err) {
			expect(err).toBeInstanceOf(MasterfileFetchError);
			expect((err as MasterfileFetchError).url).toBe("https://example/x");
			expect((err as MasterfileFetchError).cause).toBe(cause);
		}
	});

	test("non-2xx throws MasterfileFetchError", async () => {
		globalThis.fetch = mock(
			async () =>
				new Response("not found", { status: 404, statusText: "Not Found" }),
		);
		await expect(
			defaultFetcher("https://example/x", undefined),
		).rejects.toBeInstanceOf(MasterfileFetchError);
	});

	test("invalid JSON throws MasterfileParseError", async () => {
		globalThis.fetch = mock(
			async () => new Response("not json", { status: 200 }),
		);
		await expect(
			defaultFetcher("https://example/x", undefined),
		).rejects.toBeInstanceOf(MasterfileParseError);
	});

	test("non-array JSON throws MasterfileParseError", async () => {
		globalThis.fetch = mock(
			async () =>
				new Response(JSON.stringify({ data: [] }), {
					status: 200,
					headers: { "Content-Type": "application/json" },
				}),
		);
		await expect(
			defaultFetcher("https://example/x", undefined),
		).rejects.toBeInstanceOf(MasterfileParseError);
	});

	test("AbortSignal is forwarded to underlying fetch", async () => {
		const seenSignals: (AbortSignal | undefined)[] = [];
		globalThis.fetch = mock(async (_input, init) => {
			seenSignals.push(init?.signal ?? undefined);
			return new Response(JSON.stringify([]), { status: 200 });
		});
		const ac = new AbortController();
		await defaultFetcher("https://example/x", ac.signal);
		expect(seenSignals[0]).toBe(ac.signal);
	});
});

describe("Masterfile.fromRemote", () => {
	test("uses the default URL when none provided", async () => {
		const seenUrls: string[] = [];
		const fetcher = mock(async (url: string) => {
			seenUrls.push(url);
			return [...FIXTURE_ENTRIES];
		});
		await Masterfile.fromRemote({ fetcher });
		expect(seenUrls[0]).toBe(DEFAULT_MASTERFILE_URL);
	});

	test("uses custom URL + custom fetcher when provided", async () => {
		const seenUrls: string[] = [];
		const fetcher = mock(async (url: string) => {
			seenUrls.push(url);
			return [...FIXTURE_ENTRIES];
		});
		await Masterfile.fromRemote({ url: "https://custom/", fetcher });
		expect(seenUrls[0]).toBe("https://custom/");
	});
});
