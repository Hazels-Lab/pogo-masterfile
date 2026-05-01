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
		expect(out).toContain('export { DEFAULT_MASTERFILE_URL, defaultFetcher } from "./fetch";');
	});

	test("re-exports option/fetcher types", () => {
		const out = emitIndex();
		expect(out).toContain('export type { Fetcher, FromRemoteOptions } from "./types";');
	});

	test("re-exports the error classes", () => {
		const out = emitIndex();
		expect(out).toContain('export { EntryNotFoundError, MasterfileFetchError, MasterfileParseError } from "./errors";');
	});

	test("re-exports the lookup-tables types", () => {
		const out = emitIndex();
		expect(out).toContain('export type { EntriesByGroup, EntryByTemplateID, GroupName, TemplateIDsByGroup } from "./lookup-tables";');
	});

	test("export order matches biome organize-imports default", () => {
		const out = emitIndex();
		const errorsIdx = out.indexOf('from "./errors"');
		const fetchIdx = out.indexOf('from "./fetch"');
		const lookupIdx = out.indexOf('from "./lookup-tables"');
		const masterfileTypeIdx = out.indexOf("export type { GroupAccessor }");
		const masterfileValueIdx = out.indexOf("export { Masterfile }");
		const typesIdx = out.indexOf('from "./types"');
		// Alphabetical by module + type-exports before value-exports for same module.
		expect(errorsIdx).toBeLessThan(fetchIdx);
		expect(fetchIdx).toBeLessThan(lookupIdx);
		expect(lookupIdx).toBeLessThan(masterfileTypeIdx);
		expect(masterfileTypeIdx).toBeLessThan(masterfileValueIdx);
		expect(masterfileValueIdx).toBeLessThan(typesIdx);
	});

	test("starts with the generated-file header", () => {
		const out = emitIndex();
		expect(out.startsWith("// Generated from")).toBe(true);
	});
});
