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

	test("does NOT re-export lookup-table types from the barrel", () => {
		// Lookup-table types live upstream in pogo-masterfile-types/lookup-table.
		// Re-exporting them here would defeat the opt-in subpath strategy.
		const out = emitIndex();
		expect(out).not.toContain("EntryByTemplateID");
		expect(out).not.toContain("EntriesByGroup");
		expect(out).not.toContain("TemplateIDsByGroup");
		expect(out).not.toContain("./lookup-tables");
		expect(out).not.toContain("pogo-masterfile-types/lookup-table");
	});

	test("export order matches biome organize-imports default", () => {
		const out = emitIndex();
		const errorsIdx = out.indexOf('from "./errors"');
		const fetchIdx = out.indexOf('from "./fetch"');
		const masterfileTypeIdx = out.indexOf("export type { GroupAccessor }");
		const masterfileValueIdx = out.indexOf("export { Masterfile }");
		const typesIdx = out.indexOf('from "./types"');
		// Alphabetical by module + type-exports before value-exports for same module.
		expect(errorsIdx).toBeLessThan(fetchIdx);
		expect(fetchIdx).toBeLessThan(masterfileTypeIdx);
		expect(masterfileTypeIdx).toBeLessThan(masterfileValueIdx);
		expect(masterfileValueIdx).toBeLessThan(typesIdx);
	});

	test("starts with the generated-file header", () => {
		const out = emitIndex();
		expect(out.startsWith("// Generated from")).toBe(true);
	});
});
