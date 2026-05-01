import { describe, expect, test } from "bun:test";
import { emitIndex } from "./emit-index.ts";

describe("emitIndex", () => {
	test("re-exports the Masterfile class and accessor type", () => {
		const out = emitIndex();
		expect(out).toContain('export { Masterfile } from "./masterfile";');
		expect(out).toContain('export type { GroupAccessor } from "./masterfile";');
	});

	test("re-exports the fetcher and URL constant", () => {
		const out = emitIndex();
		expect(out).toContain(
			'export { defaultFetcher, DEFAULT_MASTERFILE_URL } from "./fetch";',
		);
	});

	test("re-exports option/fetcher types", () => {
		const out = emitIndex();
		expect(out).toContain(
			'export type { FromRemoteOptions, Fetcher } from "./types";',
		);
	});

	test("re-exports the error classes", () => {
		const out = emitIndex();
		expect(out).toContain(
			'export { MasterfileFetchError, MasterfileParseError, EntryNotFoundError } from "./errors";',
		);
	});

	test("re-exports the lookup-tables types", () => {
		const out = emitIndex();
		expect(out).toContain(
			'export type { EntryByTemplateID, EntriesByGroup, TemplateIDsByGroup, GroupName } from "./lookup-tables";',
		);
	});

	test("starts with the generated-file header", () => {
		const out = emitIndex();
		expect(out.startsWith("// Generated from")).toBe(true);
	});
});
