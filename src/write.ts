import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

interface WriteOptions {
	// Relative paths under outDir whose content should survive the wipe.
	// Used by generators that share their output directory with hand-written
	// files (READMEs, LICENSEs, tests, examples).
	preserve?: string[];
}

export async function writeOutput(files: Map<string, string>, outDir: string, options: WriteOptions = {}): Promise<void> {
	const preserved = new Map<string, string>();
	for (const relPath of options.preserve ?? []) {
		try {
			preserved.set(relPath, await readFile(join(outDir, relPath), "utf8"));
		} catch {
			// File doesn't exist yet — that's fine, it just won't be restored.
		}
	}

	await rm(outDir, { recursive: true, force: true });
	await mkdir(outDir, { recursive: true });

	const allFiles = new Map<string, string>([...preserved, ...files]);
	await Promise.all(
		[...allFiles.entries()].map(async ([relPath, content]) => {
			const full = join(outDir, relPath);
			await mkdir(dirname(full), { recursive: true });
			await writeFile(full, content, "utf8");
		}),
	);
}
