import { join } from "node:path";
import { BARREL_FILE, ENTRIES_LOWER, GAME_MASTER_URL, SINGLETONS, TYPES_LOWER } from "./constants.ts";
import {
	emitEntriesBarrel,
	emitEntriesFlat,
	emitEntryFile,
	emitGroupTypes,
	emitIndexFile,
	emitSingletonsFile,
	emitSingletonsTypeFile,
	emitTopLevelVariants,
	emitTypesFile,
} from "./emit.ts";
import type { Entry, Group } from "./group.ts";
import { groupEntries } from "./group.ts";
import { kebabCase } from "./naming.ts";
import { buildPromotionRegistry } from "./promoted-unions.ts";
import { chooseSplit, clusterSingletons } from "./split.ts";
import { writeOutput } from "./write.ts";

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

	const promotionRegistry = buildPromotionRegistry(groups);

	const groupSplits = new Map<string, "split" | "flat">();

	for (const g of multiEntry) {
		const dir = kebabCase(g.discriminator);
		const plan = chooseSplit(g);
		files.set(`${dir}/${BARREL_FILE}.ts`, emitIndexFile());
		files.set(`${dir}/${TYPES_LOWER}.ts`, emitGroupTypes(g, promotionRegistry));

		if (plan.kind === "none") {
			files.set(`${dir}/${ENTRIES_LOWER}.ts`, emitEntriesFlat(g));
			groupSplits.set(g.discriminator, "flat");
			continue;
		}

		const buckets: Array<{ fileName: string; entries: Entry[] }> =
			plan.kind === "h1"
				? plan.buckets.map((b) => ({ fileName: b.fileName, entries: b.entries }))
				: plan.clusters.map((c) => ({ fileName: c.fileName, entries: c.entries }));
		for (const b of buckets) {
			files.set(`${dir}/${ENTRIES_LOWER}/${b.fileName}.ts`, emitEntryFile(g, b.fileName, b.entries));
		}
		files.set(
			`${dir}/${ENTRIES_LOWER}/${BARREL_FILE}.ts`,
			emitEntriesBarrel(
				g.discriminator,
				buckets.map((b) => b.fileName),
			),
		);
		groupSplits.set(g.discriminator, "split");
	}

	// Singletons: cluster singletons by trailing-token heuristic, then emit each bucket
	// like a split group's bucket. The only inherent differences from regular groups
	// are the per-bucket emitter (singletons don't share structure) and the trivial
	// types.ts (no shared interface to define).
	const singletonsBuckets = clusterSingletons(singletons);
	const lowerSingleton = SINGLETONS.toLowerCase() as Lowercase<typeof SINGLETONS>;

	for (const b of singletonsBuckets) {
		files.set(`${lowerSingleton}/${ENTRIES_LOWER}/${b.fileName}.ts`, emitSingletonsFile(b.fileName, b.singletons));
	}
	files.set(
		`${lowerSingleton}/${ENTRIES_LOWER}/${BARREL_FILE}.ts`,
		emitEntriesBarrel(
			lowerSingleton,
			singletonsBuckets.map((b) => b.fileName),
		),
	);
	// files.set(
	// 	`${lowerSingleton}/${TYPES_LOWER}.ts`,
	// 	`${IMPORT} ${TYPE_LOWER} { ${SINGLETONS}${BARREL_TYPE}${ENTRY_LOWER} } from "./${ENTRIES_LOWER}";\n\n${EXPORT} ${TYPE_LOWER} ${SINGLETONS} = ${SINGLETONS}${BARREL_TYPE}${ENTRY_LOWER};`,
	// );
	files.set(`${lowerSingleton}/${TYPES_LOWER}.ts`, emitSingletonsTypeFile(singletons));
	files.set(`${lowerSingleton}/${BARREL_FILE}.ts`, emitIndexFile());
	groupSplits.set(lowerSingleton, "split");

	// root files
	files.set(`${TYPES_LOWER}.ts`, emitTypesFile([...multiEntry.map((g) => g.discriminator), lowerSingleton]));
	files.set(`${ENTRIES_LOWER}.ts`, emitTopLevelVariants(groupSplits));
	files.set(`${BARREL_FILE}.ts`, emitIndexFile());
	files.set(
		"_utils.ts",
		`export type S<T> = { [KeyType in keyof T]: T[KeyType] } & {};

type PW<T> = [T] extends [string]
	? string
	: [T] extends [number]
		? number
		: [T] extends [boolean]
			? boolean
			: [T] extends [bigint]
				? bigint
				: [T] extends [symbol]
					? symbol
					: T;

type KoU<T> = T extends unknown ? keyof T : never;

type VoUK<T, K extends PropertyKey> = T extends unknown ? (K extends keyof T ? T[K] : never) : never;

export type W<T> =
	// Preserve functions
	[T] extends [(...args: unknown[]) => unknown]
		? T
		: // Tuples become arrays. This is the important part:
			// Widen the whole union of element types once.
			[T] extends [readonly unknown[]]
			? Array<W<T[number]>>
			: // Objects keep properties and collapse same-shaped unions
				[T] extends [object]
				? S<{
						[K in KoU<T>]: W<VoUK<T, K>>;
					}>
				: // Literals become primitives
					PW<T>;
`,
	);

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

// type PW<T> = [T] extends [string]
// 	? string
// 	: [T] extends [number]
// 		? number
// 		: [T] extends [boolean]
// 			? boolean
// 			: [T] extends [bigint]
// 				? bigint
// 				: [T] extends [symbol]
// 					? symbol
// 					: T;

// type KoU<T> = T extends unknown ? keyof T : never;

// type VoUK<T, K extends PropertyKey> = T extends unknown ? (K extends keyof T ? T[K] : never) : never;

// type S<T> = {
// 	[K in keyof T]: T[K];
// } & {};

// type W<T> =
// 	// Preserve functions
// 	[T] extends [(...args: any[]) => any]
// 		? T
// 		: // Tuples become arrays. This is the important part:
// 			// Widen the whole union of element types once.
// 			[T] extends [readonly unknown[]]
// 			? Array<W<T[number]>>
// 			: // Objects keep properties and collapse same-shaped unions
// 				[T] extends [object]
// 				? S<{
// 						[K in KoU<T>]: W<VoUK<T, K>>;
// 					}>
// 				: // Literals become primitives
// 					PW<T>;
