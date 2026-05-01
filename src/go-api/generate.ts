import { copyFile, mkdir, readdir } from "node:fs/promises";
import { join } from "node:path";
import type { Entry } from "../group.ts";
import { groupEntries } from "../group.ts";
import { snakeCase } from "../naming.ts";
import { writeOutput } from "../write.ts";
import { PACKAGE_DIR, TEMPLATES_DIR } from "./constants.ts";
import { emitAccessor } from "./emit-accessor.ts";
import { emitMasterfileGen } from "./emit-masterfile-gen.ts";
import { emitSingletonsAccessor } from "./emit-singletons-accessor.ts";

// Hand-written files that live alongside generated output in PACKAGE_DIR and
// must survive the wipe performed by writeOutput. Tests, go.mod, README,
// LICENSE, and CHANGELOG are all checked in by hand.
const PRESERVED_FILES = ["go.mod", "README.md", "LICENSE", "CHANGELOG.md", "errors_test.go", "fetcher_test.go", "loader_test.go", "masterfile_test.go"];

export async function generateGoApi(entries: Entry[]): Promise<void> {
	const groups = groupEntries(entries);
	console.log(`[go-api] grouped into ${groups.size} discriminators.`);

	await mkdir(PACKAGE_DIR, { recursive: true });

	// 1. Build a single file map covering masterfile_gen.go (package root) and
	//    accessor/<group>.go + accessor/singletons.go (subdir). Writing in one
	//    call ensures the accessor/ subdir survives the PACKAGE_DIR wipe.
	const generated = new Map<string, string>();
	generated.set("masterfile_gen.go", emitMasterfileGen(groups));

	const multiEntry = [...groups.values()].filter((g) => g.entries.length > 1);
	for (const g of multiEntry) {
		generated.set(`accessor/${snakeCase(g.discriminator)}.go`, emitAccessor(g));
	}
	generated.set("accessor/singletons.go", emitSingletonsAccessor());

	await writeOutput(generated, PACKAGE_DIR, { preserve: PRESERVED_FILES });

	// 2. Copy hand-written runtime templates verbatim.
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
