import { join } from "node:path";
import { type Entry, type Group, groupEntries } from "../group.ts";
import { pascalCase, snakeCase } from "../naming.ts";
import { writeOutput } from "../write.ts";
import { type EntryVariant, emitGroupModule, emitLibFile, emitSingletonsModule } from "./emit.ts";

const OUT_DIR = join(import.meta.dir, "..", "..", "packages", "rust", "src");
const SINGLETONS_MODULE = "singletons";

function isStubGroup(group: Group): boolean {
	const first = group.entries[0];
	if (!first) return true;
	return Object.keys(first.data).filter((k) => k !== "templateId").length === 0;
}

export async function generateRust(entries: Entry[]): Promise<void> {
	const groups = groupEntries(entries);
	console.log(`[rust] grouped into ${groups.size} discriminators.`);

	const files = new Map<string, string>();
	const moduleNames: string[] = [];
	const singletons: Group[] = [];
	const enumVariants: EntryVariant[] = [];

	for (const group of groups.values()) {
		const baseName = pascalCase(group.discriminator);
		const entryTypeName = `${baseName}Entry`;
		const stub = isStubGroup(group);

		if (group.entries.length === 1) {
			singletons.push(group);
			enumVariants.push({
				variantName: baseName,
				modulePath: SINGLETONS_MODULE,
				entryTypeName,
				isStub: stub,
				discriminator: group.discriminator,
				entryCount: group.entries.length,
			});
			continue;
		}

		const moduleName = snakeCase(group.discriminator);
		moduleNames.push(moduleName);
		files.set(`${moduleName}.rs`, emitGroupModule(group));
		enumVariants.push({
			variantName: baseName,
			modulePath: moduleName,
			entryTypeName,
			isStub: stub,
			discriminator: group.discriminator,
			entryCount: group.entries.length,
		});
	}

	if (singletons.length > 0) {
		moduleNames.push(SINGLETONS_MODULE);
		files.set(`${SINGLETONS_MODULE}.rs`, emitSingletonsModule(singletons));
	}

	files.set("lib.rs", emitLibFile(moduleNames, enumVariants));

	await writeOutput(files, OUT_DIR);
	console.log(`[rust] wrote ${files.size} files to ${OUT_DIR} (${singletons.length} singletons folded into ${SINGLETONS_MODULE}.rs).`);
}
