import { join } from "node:path";
import { type Entry, type Group, groupEntries } from "../group.ts";
import { snakeCase } from "../naming.ts";
import { writeOutput } from "../write.ts";
import { emitGroupModule, emitLibFile, emitSingletonsModule } from "./emit.ts";

const OUT_DIR = join(import.meta.dir, "..", "..", "packages", "rust", "src");
const SINGLETONS_MODULE = "singletons";

export async function generateRust(entries: Entry[]): Promise<void> {
	const groups = groupEntries(entries);
	console.log(`[rust] grouped into ${groups.size} discriminators.`);

	const files = new Map<string, string>();
	const moduleNames: string[] = [];
	const singletons: Group[] = [];

	for (const group of groups.values()) {
		if (group.entries.length === 1) {
			singletons.push(group);
			continue;
		}
		const moduleName = snakeCase(group.discriminator);
		moduleNames.push(moduleName);
		files.set(`${moduleName}.rs`, emitGroupModule(group));
	}

	if (singletons.length > 0) {
		moduleNames.push(SINGLETONS_MODULE);
		files.set(`${SINGLETONS_MODULE}.rs`, emitSingletonsModule(singletons));
	}

	files.set("lib.rs", emitLibFile(moduleNames));

	await writeOutput(files, OUT_DIR);
	console.log(`[rust] wrote ${files.size} files to ${OUT_DIR} (${singletons.length} singletons folded into ${SINGLETONS_MODULE}.rs).`);
}
