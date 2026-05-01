import { join } from "node:path";
import { type Entry, type Group, groupEntries } from "../group.ts";
import { kebabCase } from "../naming.ts";
import { chooseSplit, clusterSingletons, type SplitTree } from "../split.ts";
import { writeOutput } from "../write.ts";
import { BARREL_FILE, ENTRIES_LOWER, SINGLETONS, TYPES_LOWER } from "./constants.ts";
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
import { buildPromotionRegistry } from "./promoted-unions.ts";

const OUT_DIR = join(import.meta.dir, "..", "..", "packages", "ts", "src");
const FILE_TYPE = "ts";
// Recursively materialize a split tree into the files map. At each level:
//   - Leaf bucket (no children): emitted as a single entry file at the current path.
//   - Branch bucket (with children): emitted as a subdirectory containing recursive
//     children + an `index.ts` barrel re-exporting them.
//
// Returns the names of immediate children (without extensions or trailing slashes)
// so the caller can build the parent barrel. TypeScript's module resolution treats
// `./name` identically whether `name` is `name.ts` or `name/index.ts`, so the parent
// barrel doesn't differentiate.
function emitSplitTree(group: Group, plan: SplitTree, nestedPath: string[], files: Map<string, string>): string[] {
	const dir = kebabCase(group.discriminator);
	const buckets: Array<{ fileName: string; entries: Entry[]; children?: SplitTree }> = plan.kind === "h3" ? plan.clusters : plan.buckets;
	const childNames: string[] = [];

	for (const b of buckets) {
		if (b.children) {
			const subPath = [...nestedPath, b.fileName];
			const subChildNames = emitSplitTree(group, b.children, subPath, files);
			files.set(`${dir}/${ENTRIES_LOWER}/${subPath.join("/")}/${BARREL_FILE}.${FILE_TYPE}`, emitEntriesBarrel(group.discriminator, subChildNames, subPath));
		} else {
			const dirPath = nestedPath.length > 0 ? `${dir}/${ENTRIES_LOWER}/${nestedPath.join("/")}` : `${dir}/${ENTRIES_LOWER}`;
			files.set(`${dirPath}/${b.fileName}.${FILE_TYPE}`, emitEntryFile(group, b.fileName, b.entries, nestedPath));
		}
		childNames.push(b.fileName);
	}

	return childNames;
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
		files.set(`${dir}/${BARREL_FILE}.${FILE_TYPE}`, emitIndexFile());
		files.set(`${dir}/${TYPES_LOWER}.${FILE_TYPE}`, emitGroupTypes(g, promotionRegistry));

		if (plan.kind === "none") {
			files.set(`${dir}/${ENTRIES_LOWER}.${FILE_TYPE}`, emitEntriesFlat(g));
			groupSplits.set(g.discriminator, "flat");
			continue;
		}

		const childNames = emitSplitTree(g, plan, [], files);
		files.set(`${dir}/${ENTRIES_LOWER}/${BARREL_FILE}.${FILE_TYPE}`, emitEntriesBarrel(g.discriminator, childNames));
		groupSplits.set(g.discriminator, "split");
	}

	// Singletons: cluster by trailing-token heuristic, emit each bucket like a
	// split group's bucket. The only structural differences from regular groups
	// are the per-bucket emitter (singletons don't share an interface) and the
	// trivial types.ts (no shared interface to define).
	const singletonsBuckets = clusterSingletons(singletons);
	const lowerSingleton = SINGLETONS.toLowerCase() as Lowercase<typeof SINGLETONS>;

	for (const b of singletonsBuckets) {
		files.set(`${lowerSingleton}/${ENTRIES_LOWER}/${b.fileName}.${FILE_TYPE}`, emitSingletonsFile(b.fileName, b.singletons));
	}
	files.set(
		`${lowerSingleton}/${ENTRIES_LOWER}/${BARREL_FILE}.${FILE_TYPE}`,
		emitEntriesBarrel(
			lowerSingleton,
			singletonsBuckets.map((b) => b.fileName),
		),
	);
	files.set(`${lowerSingleton}/${TYPES_LOWER}.${FILE_TYPE}`, emitSingletonsTypeFile(singletons));
	files.set(`${lowerSingleton}/${BARREL_FILE}.${FILE_TYPE}`, emitIndexFile());
	groupSplits.set(lowerSingleton, "split");

	// Root-level files
	files.set(`${TYPES_LOWER}.${FILE_TYPE}`, emitTypesFile([...multiEntry.map((g) => g.discriminator), lowerSingleton]));
	files.set(`${ENTRIES_LOWER}.${FILE_TYPE}`, emitTopLevelVariants(groupSplits));
	files.set(`${BARREL_FILE}.${FILE_TYPE}`, emitIndexFile());
	files.set(
		`_utils.${FILE_TYPE}`,
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

export async function generateTypeScript(entries: Entry[]): Promise<void> {
	const groups = groupEntries(entries);
	console.log(`[typescript] grouped into ${groups.size} discriminators.`);

	const files = planFiles(groups);
	await writeOutput(files, OUT_DIR);
	console.log(`[typescript] wrote ${files.size} files to ${OUT_DIR}`);
}
