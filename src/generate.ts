import { join } from "node:path";
import { emitGroupFile, emitIndexFile, emitMiscFile, kebabCase } from "./emit.ts";
import type { Entry, Group } from "./group.ts";
import { groupEntries } from "./group.ts";
import { writeOutput } from "./write.ts";

const GAME_MASTER_URL = "https://raw.githubusercontent.com/alexelgt/game_masters/refs/heads/master/GAME_MASTER.json";

const OUT_DIR = join(import.meta.dir, "..", "packages", "typescript", "src");

async function fetchMasterfile(): Promise<Entry[]> {
	const resp = await fetch(GAME_MASTER_URL);
	if (!resp.ok) {
		throw new Error(`fetch failed: ${resp.status} ${resp.statusText}`);
	}
	return (await resp.json()) as Entry[];
}

function planFiles(groups: Map<string, Group>): Map<string, string> {
	const files = new Map<string, string>();
	const multiEntry: Group[] = [];
	const singletons: Group[] = [];

	for (const g of groups.values()) {
		if (g.entries.length === 1) singletons.push(g);
		else multiEntry.push(g);
	}

	// Sort groups alphabetically by discriminator for deterministic iteration.
	multiEntry.sort((a, b) => a.discriminator.localeCompare(b.discriminator));

	for (const g of multiEntry) {
		files.set(`groups/${kebabCase(g.discriminator)}.ts`, emitGroupFile(g));
	}
	files.set("groups/misc.ts", emitMiscFile(singletons));
	files.set("index.ts", emitIndexFile(multiEntry.map((g) => g.discriminator)));

	return files;
}

async function main(): Promise<void> {
	console.log(`Fetching ${GAME_MASTER_URL}...`);
	const entries = await fetchMasterfile();
	console.log(`Fetched ${entries.length} entries.`);

	const groups = groupEntries(entries);
	console.log(`Grouped into ${groups.size} discriminators.`);

	const files = planFiles(groups);
	writeOutput(files, OUT_DIR);
	console.log(`Wrote ${files.size} files to ${OUT_DIR}`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
