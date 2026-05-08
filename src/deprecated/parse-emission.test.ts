import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { extractTemplateIdsFromEntries } from "./parse-emission";

const FIXTURE_DIR = join(import.meta.dir, "__fixtures__");

describe("parse-emission", () => {
	test("extractTemplateIdsFromEntries pulls templateId literals", () => {
		const source = readFileSync(join(FIXTURE_DIR, "sample-entries.d.ts.txt"), "utf8");
		const ids = extractTemplateIdsFromEntries(source, "SampleSettings");
		expect(ids).toEqual(["SAMPLE_ALPHA", "SAMPLE_BETA"]);
	});

	test("extractTemplateIdsFromEntries returns empty for unrelated source", () => {
		const ids = extractTemplateIdsFromEntries("// nothing here\nexport const x = 1;", "SampleSettings");
		expect(ids).toEqual([]);
	});

	test("extractTemplateIdsFromEntries handles multiple discriminators (returns only target)", () => {
		const source = `
			export type X = S<OtherSettings<"OTHER_ID", {}>>;
			export type Y = S<SampleSettings<"SAMPLE_X", {}>>;
		`;
		const ids = extractTemplateIdsFromEntries(source, "SampleSettings");
		expect(ids).toEqual(["SAMPLE_X"]);
	});

	// test("parseLiveTsEmission against real live emission", () => {
	// 	const distRoot = join(import.meta.dir, "..", "..", "packages", "ts", "dist");
	// 	const map = parseLiveTsEmission(distRoot);
	// 	expect(map.has("EVENT_PASS_APRIL2026_SEASON")).toBe(true);
	// 	expect(map.get("EVENT_PASS_APRIL2026_SEASON")).toBe("eventPassSettings");
	// });
});
