import { copyFile, mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import type { Entry } from "../group.ts";
import { groupEntries } from "../group.ts";
import { snakeCase } from "../naming.ts";
import { PACKAGE_DIR, TEMPLATES_DIR } from "./constants.ts";
import { emitAccessor } from "./emit-accessor.ts";
import { emitMasterfileGen } from "./emit-masterfile-gen.ts";
import { emitSingletonsAccessor } from "./emit-singletons-accessor.ts";

const ACCESSOR_DIR = join(PACKAGE_DIR, "accessor");
const MASTERFILE_GEN = join(PACKAGE_DIR, "masterfile_gen.go");

export async function generateGoApi(entries: Entry[]): Promise<void> {
	const groups = groupEntries(entries);
	console.log(`[go-api] grouped into ${groups.size} discriminators.`);

	await mkdir(PACKAGE_DIR, { recursive: true });

	// 1. Surgically wipe ONLY the generated artifacts. Hand-written files
	//    elsewhere in PACKAGE_DIR (tests, examples, testdata, README, etc.)
	//    are never touched.
	await rm(MASTERFILE_GEN, { force: true });
	await rm(ACCESSOR_DIR, { recursive: true, force: true });
	await mkdir(ACCESSOR_DIR, { recursive: true });

	// 2. Emit masterfile_gen.go.
	await writeFile(MASTERFILE_GEN, emitMasterfileGen(groups), "utf8");

	// 3. Emit accessor/<group>.go for every multi-entry group.
	const multiEntry = [...groups.values()].filter((g) => g.entries.length > 1);
	await Promise.all(multiEntry.map((g) => writeFile(join(ACCESSOR_DIR, `${snakeCase(g.discriminator)}.go`), emitAccessor(g), "utf8")));

	// 4. Emit accessor/singletons.go.
	await writeFile(join(ACCESSOR_DIR, "singletons.go"), emitSingletonsAccessor(), "utf8");

	// 5. Copy hand-written runtime templates verbatim.
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
