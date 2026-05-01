import { describe, expect, test } from "bun:test";
import { AstFileBuilder, T } from "./builder.ts";

describe("AstFileBuilder.render — leading import block", () => {
	test("places parent-relative imports (../) before sibling imports (./)", () => {
		const output = new AstFileBuilder()
			.importNamed("./entries", ["A"], true)
			.importNamed("../_utils", ["W"], true)
			.blank()
			.exportTypeAlias("X", T.string())
			.render();

		const parentIdx = output.indexOf(`from "../_utils"`);
		const siblingIdx = output.indexOf(`from "./entries"`);

		expect(parentIdx).toBeGreaterThanOrEqual(0);
		expect(siblingIdx).toBeGreaterThanOrEqual(0);
		expect(parentIdx).toBeLessThan(siblingIdx);
	});

	test("sorts imports within the same group alphabetically by module specifier", () => {
		const output = new AstFileBuilder()
			.importNamed("./zebra", ["Z"], true)
			.importNamed("./alpha", ["A"], true)
			.blank()
			.exportTypeAlias("X", T.string())
			.render();

		const alphaIdx = output.indexOf(`from "./alpha"`);
		const zebraIdx = output.indexOf(`from "./zebra"`);

		expect(alphaIdx).toBeGreaterThanOrEqual(0);
		expect(zebraIdx).toBeGreaterThanOrEqual(0);
		expect(alphaIdx).toBeLessThan(zebraIdx);
	});

	test("does not reorder statements that follow a non-import statement", () => {
		// Imports added after a non-import statement aren't part of the leading
		// block and must keep their position.
		const output = new AstFileBuilder().importNamed("./a", ["A"], true).exportTypeAlias("X", T.string()).importNamed("../b", ["B"], true).render();

		const exportIdx = output.indexOf("export type X");
		const lateImportIdx = output.indexOf(`from "../b"`);

		expect(exportIdx).toBeLessThan(lateImportIdx);
	});
});
