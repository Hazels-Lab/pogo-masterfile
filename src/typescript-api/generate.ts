import { copyFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import { type Entry, groupEntries } from "../group.ts";
import { runCommand } from "../run-command.ts";
import { writeOutput } from "../write.ts";
import { BUILD_TSCONFIG, SRC_OUT_DIR, TEMPLATES_DIR, TEMPLATES_STUBS_DIR } from "./constants.ts";
import { emitGroupNames } from "./emit-group-names.ts";
import { emitIndex } from "./emit-index.ts";

const TEMPLATE_FILES_TO_COPY = ["errors.ts", "types.ts", "fetch.ts", "masterfile.ts"];

export async function generateTypeScriptApi(entries: Entry[]): Promise<void> {
	const groups = groupEntries(entries);
	console.log(`[typescript-api] grouped into ${groups.size} discriminators.`);

	// 1. Ensure output dirs exist.
	await mkdir(SRC_OUT_DIR, { recursive: true });
	await mkdir(TEMPLATES_STUBS_DIR, { recursive: true });

	// 2. Emit data-driven files into packages/ts-api/src/.
	//    Lookup tables themselves live upstream in `pogo-masterfile-types/lookup-table`
	//    so they're shared with type-only consumers and not duplicated here.
	const generated = new Map<string, string>();
	generated.set("group-names.ts", emitGroupNames(groups));
	generated.set("index.ts", emitIndex());
	await writeOutput(generated, SRC_OUT_DIR);

	// 3. Refresh editor stubs alongside the templates so the IDE resolves
	//    `./group-names` from within templates/.
	const stubs = new Map<string, string>();
	stubs.set("group-names.ts", emitGroupNames(groups));
	await writeOutput(stubs, TEMPLATES_STUBS_DIR);

	// 4. Copy hand-written runtime templates verbatim into packages/ts-api/src/.
	for (const file of TEMPLATE_FILES_TO_COPY) {
		await copyFile(join(TEMPLATES_DIR, file), join(SRC_OUT_DIR, file));
	}

	// 5. Compile src/ → dist/ via tsc.
	await runCommand("bunx", ["tsc", "-p", BUILD_TSCONFIG]);

	console.log(`[typescript-api] wrote runtime to ${SRC_OUT_DIR} and built dist/`);
}
