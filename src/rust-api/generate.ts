import { spawn } from "node:child_process";
import { copyFile, mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { type Entry, groupEntries } from "../group.ts";
import { snakeCase } from "../naming.ts";
import { writeOutput } from "../write.ts";
import { PACKAGE_DIR, SRC_OUT_DIR, TEMPLATES_DIR } from "./constants.ts";
import { emitAccessor } from "./emit-accessor.ts";
import { emitAccessorMod } from "./emit-accessor-mod.ts";
import { emitCargo } from "./emit-cargo.ts";
import { emitLib } from "./emit-lib.ts";

const TEMPLATE_FILES_TO_COPY = ["error.rs", "fetcher.rs", "builder.rs", "masterfile.rs", "blocking.rs"];

export async function generateRustApi(entries: Entry[]): Promise<void> {
	const groups = groupEntries(entries);
	console.log(`[rust-api] grouped into ${groups.size} discriminators.`);

	// 1. Ensure output dirs exist.
	await mkdir(SRC_OUT_DIR, { recursive: true });
	await mkdir(join(SRC_OUT_DIR, "accessor"), { recursive: true });

	// 2. Build the file map for src/. (Cargo.toml goes outside src/, so write it separately.)
	const generated = new Map<string, string>();
	generated.set("lib.rs", emitLib(groups));
	generated.set("accessor/mod.rs", emitAccessorMod(groups));

	// Per-group accessor files. Singletons aren't generated — they don't fit
	// the per-group accessor shape (each singleton is its own MasterfileEntry
	// variant in the upstream types crate, not a shared Singletons wrapper).
	const multiEntry = [...groups.values()].filter((g) => g.entries.length > 1);

	for (const g of multiEntry) {
		generated.set(`accessor/${snakeCase(g.discriminator)}.rs`, emitAccessor(g));
	}

	await writeOutput(generated, SRC_OUT_DIR);

	// 3. Copy hand-written runtime templates verbatim into packages/rust-api/src/.
	//    These templates may not exist yet during early development — skip silently
	//    if missing (the user adds them in Phase 3 of the plan).
	for (const file of TEMPLATE_FILES_TO_COPY) {
		const src = join(TEMPLATES_DIR, file);
		const dest = join(SRC_OUT_DIR, file);
		try {
			await copyFile(src, dest);
		} catch (err) {
			if ((err as NodeJS.ErrnoException).code === "ENOENT") {
				console.warn(`[rust-api] template ${file} missing — skipping copy (add in Phase 3).`);
			} else {
				throw err;
			}
		}
	}

	// 4. Write Cargo.toml at the package root (one level above src/).
	await writeFile(join(PACKAGE_DIR, "Cargo.toml"), emitCargo(), "utf8");

	// 5. cargo fmt — run only if the crate has at least lib.rs + the templates it imports.
	//    We attempt fmt; if it fails (because templates aren't all there yet), warn and continue.
	try {
		await runCargoFmt();
	} catch (err) {
		console.warn(`[rust-api] cargo fmt failed (templates may be incomplete): ${(err as Error).message}`);
	}

	console.log(`[rust-api] wrote runtime to ${SRC_OUT_DIR}`);
}

function runCargoFmt(): Promise<void> {
	return new Promise((resolve, reject) => {
		const proc = spawn("cargo", ["fmt"], { cwd: PACKAGE_DIR, stdio: "inherit" });
		proc.on("error", reject);
		proc.on("exit", (code) => {
			if (code === 0) resolve();
			else reject(new Error(`cargo fmt exited with code ${code}`));
		});
	});
}
