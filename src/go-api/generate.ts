import { mkdir } from "node:fs/promises";
import type { Entry } from "../group.ts";
import { groupEntries } from "../group.ts";
import { ACCESSOR_OUT_DIR, PACKAGE_DIR } from "./constants.ts";

export async function generateGoApi(entries: Entry[]): Promise<void> {
	const groups = groupEntries(entries);
	console.log(`[go-api] grouped into ${groups.size} discriminators.`);

	await mkdir(PACKAGE_DIR, { recursive: true });
	await mkdir(ACCESSOR_OUT_DIR, { recursive: true });

	// Emitters wired in Task 12.
}
