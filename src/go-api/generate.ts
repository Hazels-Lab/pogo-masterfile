import { copyFile, mkdir, readdir } from "node:fs/promises";
import { join } from "node:path";
import type { Entry } from "../group.ts";
import { groupEntries } from "../group.ts";
import { snakeCase } from "../naming.ts";
import { writeOutput } from "../write.ts";
import { ACCESSOR_OUT_DIR, PACKAGE_DIR, TEMPLATES_DIR } from "./constants.ts";
import { emitAccessor } from "./emit-accessor.ts";
import { emitMasterfileGen } from "./emit-masterfile-gen.ts";
import { emitSingletonsAccessor } from "./emit-singletons-accessor.ts";

export async function generateGoApi(entries: Entry[]): Promise<void> {
	const groups = groupEntries(entries);
	console.log(`[go-api] grouped into ${groups.size} discriminators.`);

	await mkdir(PACKAGE_DIR, { recursive: true });
	await mkdir(ACCESSOR_OUT_DIR, { recursive: true });

	// 1. Emit accessor/<group>.go for every multi-entry group, plus the
	//    heterogeneous singletons.go.
	const generatedAccessors = new Map<string, string>();
	const multiEntry = [...groups.values()].filter((g) => g.entries.length > 1);
	for (const g of multiEntry) {
		generatedAccessors.set(`${snakeCase(g.discriminator)}.go`, emitAccessor(g));
	}
	generatedAccessors.set("singletons.go", emitSingletonsAccessor());
	await writeOutput(generatedAccessors, ACCESSOR_OUT_DIR);

	// 2. Emit masterfile_gen.go at the package root.
	const generatedRoot = new Map<string, string>();
	generatedRoot.set("masterfile_gen.go", emitMasterfileGen(groups));
	await writeOutput(generatedRoot, PACKAGE_DIR);

	// 3. Copy hand-written runtime templates verbatim.
	//    Templates may not exist yet during early development — skip silently
	//    if missing (the user adds them in Task 13).
	let templateFiles: string[] = [];
	try {
		templateFiles = (await readdir(TEMPLATES_DIR)).filter((f) => f.endsWith(".go"));
	} catch (err) {
		if ((err as NodeJS.ErrnoException).code !== "ENOENT") throw err;
	}
	for (const file of templateFiles) {
		await copyFile(join(TEMPLATES_DIR, file), join(PACKAGE_DIR, file));
	}
}
