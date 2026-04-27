import { join } from "node:path";
import { emitEntriesBarrel, emitEntriesFlat, emitEntryFile, emitGroupTypes, emitIndexFile, emitMiscFile, emitTopLevelVariants, emitTypesFile } from "./emit.ts";
import type { Entry, Group } from "./group.ts";
import { groupEntries } from "./group.ts";
import { kebabCase } from "./naming.ts";
import { chooseSplit, clusterSingletons } from "./split.ts";
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
			continue;
		}

		const buckets: Array<{ fileName: string; entries: Entry[] }> =
			plan.kind === "h1"
				? plan.buckets.map((b) => ({ fileName: b.fileName, entries: b.entries }))
				: plan.clusters.map((c) => ({ fileName: c.fileName, entries: c.entries }));
		for (const b of buckets) {
			files.set(`${dir}/entries/${b.fileName}.ts`, emitEntryFile(g, b.fileName, b.entries));
		}
		files.set(
			`${dir}/entries/index.ts`,
			emitEntriesBarrel(
				g.discriminator,
				buckets.map((b) => b.fileName),
			),
		);
		groupSplits.set(g.discriminator, "split");
	}

	// Misc: cluster singletons by trailing-token heuristic, then emit each bucket
	// like a split group's bucket. The only inherent differences from regular groups
	// are the per-bucket emitter (singletons don't share structure) and the trivial
	// types.ts (no shared interface to define).
	const miscBuckets = clusterSingletons(singletons);
	for (const b of miscBuckets) {
		files.set(`misc/entries/${b.fileName}.ts`, emitMiscFile(b.fileName, b.singletons));
	}
	files.set(
		`misc/entries/index.ts`,
		emitEntriesBarrel(
			"misc",
			miscBuckets.map((b) => b.fileName),
		),
	);
	files.set("misc/types.ts", `import type { MiscMasterfileEntry } from "./entries";\n\nexport type Misc = MiscMasterfileEntry;`);
	files.set("misc/index.ts", emitIndexFile());
	groupSplits.set("misc", "split");

	files.set("types.ts", emitTypesFile([...multiEntry.map((g) => g.discriminator), "misc"]));
	files.set("entries.ts", emitTopLevelVariants(groupSplits));
	files.set("index.ts", emitIndexFile());
	files.set("_utils.ts", "export type S<T> = { [KeyType in keyof T]: T[KeyType] } & {};");

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
