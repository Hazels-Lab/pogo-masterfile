import { join } from "node:path";
import {
	emitEntriesBarrel,
	emitEntriesFlat,
	emitEntryFile,
	emitGroupTypes,
	emitIndexFile,
	emitMiscFile,
	emitTopLevelVariants,
	emitTypesFile,
	kebabCase,
} from "./emit.ts";
import type { Entry, Group } from "./group.ts";
import { groupEntries } from "./group.ts";
import { chooseSplit } from "./split.ts";
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

	multiEntry.sort((a, b) => a.discriminator.localeCompare(b.discriminator));

	const groupSplits = new Map<string, "split" | "flat">();

	for (const g of multiEntry) {
		const dir = kebabCase(g.discriminator);
		const plan = chooseSplit(g);
		files.set(`${dir}/index.ts`, emitIndexFile());
		files.set(`${dir}/types.ts`, emitGroupTypes(g));

		if (plan.kind === "none") {
			files.set(`${dir}/entries.ts`, emitEntriesFlat(g));
			groupSplits.set(g.discriminator, "flat");
		} else {
			const fileNames: string[] = [];
			const buckets: Array<{ fileName: string; entries: Entry[] }> =
				plan.kind === "h1"
					? plan.buckets.map((b) => ({ fileName: b.fileName, entries: b.entries }))
					: plan.clusters.map((c) => ({ fileName: c.fileName, entries: c.entries }));
			for (const b of buckets) {
				files.set(`${dir}/entries/${b.fileName}.ts`, emitEntryFile(g, b.fileName, b.entries));
				fileNames.push(b.fileName);
			}
			files.set(`${dir}/entries/index.ts`, emitEntriesBarrel(g.discriminator, fileNames));
			groupSplits.set(g.discriminator, "split");
		}
	}

	files.set("misc/entries.ts", emitMiscFile(singletons));
	files.set("misc/types.ts", "import type { MiscMasterfileEntry } from './entries';\n\nexport type Misc = MiscMasterfileEntry;");
	files.set("misc/index.ts", "export type * from './entries'\nexport type * from './types'");
	files.set("types.ts", emitTypesFile(multiEntry.map((g) => g.discriminator)));
	files.set("entries.ts", emitTopLevelVariants(groupSplits));
	files.set("index.ts", emitIndexFile());
	files.set("_utils.ts", "export type S<T> = {[KeyType in keyof T]: T[KeyType]} & {};");

	return files;
}

async function main(): Promise<void> {
	console.log(`Fetching ${GAME_MASTER_URL}...`);
	const entries = await fetchMasterfile();
	console.log(`Fetched ${entries.length} entries.`);

	const groups = groupEntries(entries);
	console.log(`Grouped into ${groups.size} discriminators.`);

	const files = planFiles(groups);
	await writeOutput(files, OUT_DIR);
	console.log(`Wrote ${files.size} files to ${OUT_DIR}`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
