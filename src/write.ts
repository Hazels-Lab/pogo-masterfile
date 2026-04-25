import { mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

export async function writeOutput(files: Map<string, string>, outDir: string): Promise<void> {
	await rm(outDir, { recursive: true, force: true });
	await mkdir(outDir, { recursive: true });
	await Promise.all(
		Object.entries(files).map(async ([relPath, content]) => {
			const full = join(outDir, relPath);
			await mkdir(dirname(full), { recursive: true });
			await writeFile(full, content, "utf8");
		}),
	);
}
