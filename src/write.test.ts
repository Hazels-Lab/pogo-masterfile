import { describe, expect, test } from "bun:test";
import { readdirSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { writeOutput } from "./write.ts";

function mkTempDir(): string {
	const dir = join(tmpdir(), `masterfile-gen-${Date.now()}-${Math.random()}`);
	return dir;
}

describe("writeOutput", () => {
	test("writes files relative to outDir, creates nested dirs", async () => {
		const outDir = mkTempDir();
		await writeOutput(
			new Map([
				["groups/foo.ts", "export type Foo = 1;\n"],
				["index.ts", "export * from './groups/foo.ts';\n"],
			]),
			outDir,
		);
		expect(readFileSync(join(outDir, "groups/foo.ts"), "utf8")).toContain("Foo");
		expect(readFileSync(join(outDir, "index.ts"), "utf8")).toContain("foo");
		rmSync(outDir, { recursive: true, force: true });
	});

	test("nukes existing contents of outDir before writing", async () => {
		const outDir = mkTempDir();
		// Pre-populate with a stale file
		await writeOutput(new Map([["stale.ts", "stale"]]), outDir);
		expect(readdirSync(outDir)).toContain("stale.ts");

		// Write a fresh set — stale should be gone
		await writeOutput(new Map([["fresh.ts", "fresh"]]), outDir);
		const after = readdirSync(outDir);
		expect(after).toContain("fresh.ts");
		expect(after).not.toContain("stale.ts");

		rmSync(outDir, { recursive: true, force: true });
	});
});
