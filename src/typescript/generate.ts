import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { type Entry, type Group, groupEntries } from "../group.ts";
import { compareNaturalBy } from "../helpers.ts";
import { kebabCase } from "../naming.ts";
import { chooseSplit, clusterSingletons, type SplitTree } from "../split.ts";
import { writeOutput } from "../write.ts";
import { BARREL_FILE, ENTRIES_LOWER, SINGLETONS, TYPES_LOWER } from "./constants.ts";
import {
	emitEntriesBarrel,
	emitEntriesFlat,
	emitEntryFile,
	emitGroupLookupTable,
	emitGroupTypes,
	emitIndexFile,
	emitRootLookupTable,
	emitSingletonsFile,
	emitSingletonsLookupTable,
	emitSingletonsLooseTypes,
	emitSingletonsTypeFile,
	emitTopLevelVariants,
	emitTopLevelVariantsLoose,
	emitTypesFile,
} from "./emit.ts";
import { buildPromotionRegistry } from "./promoted-unions.ts";

const OUT_DIR = join(import.meta.dir, "..", "..", "packages", "ts", "dist");
const FILE_TYPE = "d.ts";

const UTILS_TEMPLATE = await readFile(join(import.meta.dir, "templates", "_utils.d.ts"), "utf8");

// Recursively materialize a split tree into the files map. At each level:
//   - Leaf bucket (no children): emitted as a single entry file at the current path.
//   - Branch bucket (with children): emitted as a subdirectory containing recursive
//     children + an `index.ts` barrel re-exporting them.
//
// Returns the names of immediate children (without extensions or trailing slashes)
// so the caller can build the parent barrel. TypeScript's module resolution treats
// `./name` identically whether `name` is `name.ts` or `name/index.ts`, so the parent
// barrel doesn't differentiate.
function emitSplitTree(group: Group, plan: SplitTree, nestedPath: string[], files: Map<string, string>, loose: boolean): string[] {
	const dir = kebabCase(group.discriminator);
	const buckets: Array<{ fileName: string; entries: Entry[]; children?: SplitTree }> = plan.kind === "h3" ? plan.clusters : plan.buckets;
	const childNames: string[] = [];

	for (const b of buckets) {
		if (b.children) {
			const subPath = [...nestedPath, b.fileName];
			const subChildNames = emitSplitTree(group, b.children, subPath, files, loose);
			files.set(`${dir}/${ENTRIES_LOWER}/${subPath.join("/")}/${BARREL_FILE}.${FILE_TYPE}`, emitEntriesBarrel(group.discriminator, subChildNames, subPath));
		} else {
			const dirPath = nestedPath.length > 0 ? `${dir}/${ENTRIES_LOWER}/${nestedPath.join("/")}` : `${dir}/${ENTRIES_LOWER}`;
			files.set(`${dirPath}/${b.fileName}.${FILE_TYPE}`, emitEntryFile(group, b.fileName, b.entries, nestedPath, loose));
		}
		childNames.push(b.fileName);
	}

	return childNames;
}

// Per-group `index.d.ts` re-exports `./types` only in loose mode (no entries/
// directory exists), and re-exports both `./entries` and `./types` in literal
// mode so consumers can `import from "pogo-masterfile-types/<group>"` and pick
// up either the structural shape or the per-entry narrows.
const PER_GROUP_BARREL_LITERAL: readonly string[] = [`./${ENTRIES_LOWER}`, `./${TYPES_LOWER}`];
const PER_GROUP_BARREL_LOOSE: readonly string[] = [`./${TYPES_LOWER}`];

function planFiles(groups: Map<string, Group>, loose: boolean): Map<string, string> {
	const files = new Map<string, string>();
	const multiEntry: Group[] = [];
	const singletons: Group[] = [];

	for (const g of groups.values()) {
		if (g.entries.length === 1) singletons.push(g);
		else multiEntry.push(g);
	}

	multiEntry.sort(compareNaturalBy((g) => g.discriminator));

	const promotionRegistry = buildPromotionRegistry(groups);
	const groupSplits = new Map<string, "split" | "flat">();
	const perGroupBarrel = loose ? PER_GROUP_BARREL_LOOSE : PER_GROUP_BARREL_LITERAL;

	for (const g of multiEntry) {
		const dir = kebabCase(g.discriminator);
		files.set(`${dir}/${BARREL_FILE}.${FILE_TYPE}`, emitIndexFile(perGroupBarrel));
		files.set(`${dir}/${TYPES_LOWER}.${FILE_TYPE}`, emitGroupTypes(g, promotionRegistry, loose));

		if (loose) {
			// Loose mode: types.d.ts contains the templateID union and the wide
			// barrel-entry alias directly. No per-entry variant files, no
			// per-group lookup table.
			groupSplits.set(g.discriminator, "flat");
			continue;
		}

		files.set(`${dir}/lookup-table.${FILE_TYPE}`, emitGroupLookupTable(g));

		const plan = chooseSplit(g);
		if (plan.kind === "none") {
			files.set(`${dir}/${ENTRIES_LOWER}/${BARREL_FILE}.${FILE_TYPE}`, emitEntriesFlat(g, loose));
			groupSplits.set(g.discriminator, "flat");
			continue;
		}

		const childNames = emitSplitTree(g, plan, [], files, loose);
		files.set(`${dir}/${ENTRIES_LOWER}/${BARREL_FILE}.${FILE_TYPE}`, emitEntriesBarrel(g.discriminator, childNames));
		groupSplits.set(g.discriminator, "split");
	}

	const lowerSingleton = SINGLETONS.toLowerCase() as Lowercase<typeof SINGLETONS>;

	if (loose) {
		// Loose singletons: a single types.d.ts holds every singleton interface
		// (loose-widened), the SingletonsTemplateID union, and the Singletons /
		// SingletonsType union. No bucketing, no entries/, no lookup-table.
		files.set(`${lowerSingleton}/${TYPES_LOWER}.${FILE_TYPE}`, emitSingletonsLooseTypes(singletons));
		files.set(`${lowerSingleton}/${BARREL_FILE}.${FILE_TYPE}`, emitIndexFile(perGroupBarrel));
	} else {
		// Singletons: cluster by trailing-token heuristic, emit each bucket like a
		// split group's bucket. The only structural differences from regular groups
		// are the per-bucket emitter (singletons don't share an interface) and the
		// trivial types.ts (no shared interface to define).
		const singletonsBuckets = clusterSingletons(singletons);

		for (const b of singletonsBuckets) {
			files.set(`${lowerSingleton}/${ENTRIES_LOWER}/${b.fileName}.${FILE_TYPE}`, emitSingletonsFile(b.fileName, b.singletons, loose));
		}
		files.set(
			`${lowerSingleton}/${ENTRIES_LOWER}/${BARREL_FILE}.${FILE_TYPE}`,
			emitEntriesBarrel(
				lowerSingleton,
				singletonsBuckets.map((b) => b.fileName),
			),
		);
		files.set(`${lowerSingleton}/${TYPES_LOWER}.${FILE_TYPE}`, emitSingletonsTypeFile(singletons));
		files.set(`${lowerSingleton}/lookup-table.${FILE_TYPE}`, emitSingletonsLookupTable(singletons));
		files.set(`${lowerSingleton}/${BARREL_FILE}.${FILE_TYPE}`, emitIndexFile(perGroupBarrel));
		groupSplits.set(lowerSingleton, "split");
	}

	// Root-level files. Note: lookup-table.d.ts is intentionally NOT re-exported
	// from index.d.ts — it's an opt-in subpath because it's expensive to parse.
	const rootDiscriminators = [...multiEntry.map((g) => g.discriminator), lowerSingleton];
	files.set(`${TYPES_LOWER}.${FILE_TYPE}`, emitTypesFile(rootDiscriminators));
	files.set(
		`${ENTRIES_LOWER}.${FILE_TYPE}`,
		loose
			? emitTopLevelVariantsLoose(
					multiEntry.map((g) => g.discriminator),
					singletons.length > 0,
				)
			: emitTopLevelVariants(groupSplits),
	);
	files.set(`${BARREL_FILE}.${FILE_TYPE}`, emitIndexFile());
	if (!loose) {
		files.set(`lookup-table.${FILE_TYPE}`, emitRootLookupTable(multiEntry, singletons.length > 0));
	}
	files.set(`_utils.${FILE_TYPE}`, UTILS_TEMPLATE);

	return files;
}

export interface GenerateTypeScriptOptions {
	/**
	 * When true, emit the "less literal" variant: per-entry payload string /
	 * number / boolean literals widen to their base types. Tuples (and other
	 * structural types) are preserved. The discriminating `templateId` literal
	 * on each entry is unaffected, so discriminated-union narrowing still works.
	 */
	loose?: boolean;
}

export async function generateTypeScript(entries: Entry[], options: GenerateTypeScriptOptions = {}): Promise<void> {
	const loose = options.loose ?? false;
	const groups = groupEntries(entries);
	console.log(`[typescript] grouped into ${groups.size} discriminators${loose ? " (loose mode)" : ""}.`);

	const files = planFiles(groups, loose);
	await writeOutput(files, OUT_DIR);
	console.log(`[typescript] wrote ${files.size} files to ${OUT_DIR}`);
}
