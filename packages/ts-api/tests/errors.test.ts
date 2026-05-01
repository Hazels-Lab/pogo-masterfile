/**
 * Errors — three error classes for the three real failure modes.
 *
 * Importable from the main package, the `/errors` subpath, or both. Each
 * carries the minimum context needed for debugging.
 */
import { afterEach, describe, expect, test } from "bun:test";
import { EntryNotFoundError, Masterfile, MasterfileFetchError, MasterfileParseError } from "../src/index.ts";
import { mockFetch } from "./fixture.ts";

// You can also import directly from the subpath, useful for instanceof checks
// that don't need the full runtime:
//
//   import { MasterfileFetchError } from "pogo-masterfile/errors";
//
// (Not exercised here because we already imported via the main barrel.)

const ORIGINAL_FETCH = globalThis.fetch;
afterEach(() => {
	globalThis.fetch = ORIGINAL_FETCH;
});

describe("EntryNotFoundError", () => {
	test("getEntry on a missing ID throws with the templateId attached", () => {
		const mf = Masterfile.fromJson([]);

		try {
			mf.getEntry("V9999_FAKE_TEMPLATE");
			expect.unreachable();
		} catch (err) {
			// Hover on `err` after the `instanceof` narrow — it's typed as
			// `EntryNotFoundError`, so `err.templateId` is autocomplete-friendly.
			expect(err).toBeInstanceOf(EntryNotFoundError);
			if (err instanceof EntryNotFoundError) {
				expect(err.templateId).toBe("V9999_FAKE_TEMPLATE");
			}
		}
	});

	test("per-group accessor.get throws the same error", () => {
		const mf = Masterfile.fromJson([]);
		expect(() => mf.moveSettings.get("V9999_MOVE_FAKE")).toThrow(EntryNotFoundError);
	});
});

describe("MasterfileFetchError", () => {
	test("network failure carries `url` and `cause`", async () => {
		const cause = new Error("ECONNREFUSED");
		globalThis.fetch = mockFetch(async () => {
			throw cause;
		});

		try {
			await Masterfile.fromRemote({ url: "https://example/down" });
			expect.unreachable();
		} catch (err) {
			expect(err).toBeInstanceOf(MasterfileFetchError);
			if (err instanceof MasterfileFetchError) {
				// All three fields are properly typed:
				expect(err.url).toBe("https://example/down");
				expect(err.cause).toBe(cause);
				expect(err.message).toContain("network error");
			}
		}
	});

	test("non-2xx response surfaces status text in the message", async () => {
		globalThis.fetch = mockFetch(async () => new Response("nope", { status: 503, statusText: "Unavailable" }));

		try {
			await Masterfile.fromRemote();
			expect.unreachable();
		} catch (err) {
			expect(err).toBeInstanceOf(MasterfileFetchError);
			if (err instanceof MasterfileFetchError) {
				expect(err.message).toContain("503");
				expect(err.message).toContain("Unavailable");
			}
		}
	});
});

describe("MasterfileParseError", () => {
	test("invalid JSON in the response body", async () => {
		globalThis.fetch = mockFetch(async () => new Response("not json at all", { status: 200 }));

		try {
			await Masterfile.fromRemote();
			expect.unreachable();
		} catch (err) {
			expect(err).toBeInstanceOf(MasterfileParseError);
			if (err instanceof MasterfileParseError) {
				expect(err.cause).toBeDefined();
			}
		}
	});

	test("response is JSON but not an array", async () => {
		globalThis.fetch = mockFetch(
			async () =>
				new Response(JSON.stringify({ wrapped: [] }), {
					status: 200,
					headers: { "Content-Type": "application/json" },
				}),
		);

		try {
			await Masterfile.fromRemote();
			expect.unreachable();
		} catch (err) {
			expect(err).toBeInstanceOf(MasterfileParseError);
			if (err instanceof MasterfileParseError) {
				expect(err.message).toContain("array");
			}
		}
	});
});

describe("Catching multiple error types in one block", () => {
	test("instanceof tower for the three error classes", async () => {
		// A typical consumer wrapping fromRemote in their own loader.
		async function loadOrFallback(): Promise<Masterfile> {
			try {
				return await Masterfile.fromRemote({
					fetcher: async () => {
						throw new MasterfileFetchError("simulated", "https://x", undefined);
					},
				});
			} catch (err) {
				if (err instanceof MasterfileFetchError) {
					// Retry, fall back to a cached snapshot, etc.
					return Masterfile.fromJson([]);
				}
				if (err instanceof MasterfileParseError) {
					// Upstream changed shape — bubble up with extra context.
					throw err;
				}
				throw err;
			}
		}

		const mf = await loadOrFallback();
		expect(mf.size).toBe(0);
	});
});
