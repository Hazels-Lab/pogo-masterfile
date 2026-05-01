import { GAME_MASTER_URL } from "./constants.ts";
import { generateGo } from "./go/generate.ts";
import type { Entry } from "./group.ts";
import { configureFloatFieldHints, scanFloatFields } from "./infer.ts";
import { generateRust } from "./rust/generate.ts";
import { generateRustApi } from "./rust-api/generate.ts";
import { generateTypeScript } from "./typescript/generate.ts";
import { generateTypeScriptApi } from "./typescript-api/generate.ts";

async function fetchMasterfile(): Promise<{ entries: Entry[]; rawJson: string }> {
	const resp = await fetch(GAME_MASTER_URL);
	if (!resp.ok) {
		throw new Error(`fetch failed: ${resp.status} ${resp.statusText}`);
	}
	const rawJson = await resp.text();
	const entries = JSON.parse(rawJson) as Entry[];
	return { entries, rawJson };
}

async function main(): Promise<void> {
	console.log(`Fetching ${GAME_MASTER_URL}...`);
	const { entries, rawJson } = await fetchMasterfile();
	console.log(`Fetched ${entries.length} entries.`);

	// Pre-scan the raw JSON text for fields that appear with decimal/exponent
	// syntax. JS's JSON.parse collapses "1.0" and "1" into the same Number, so
	// per-value inference can't recover the int-vs-float distinction the source
	// preserves; we propagate it via this hint set.
	const floatFields = scanFloatFields(rawJson);
	configureFloatFieldHints(floatFields);
	console.log(`Detected ${floatFields.size} float-typed field names from source.`);

	await Promise.all([
		(async () => {
			await generateTypeScript(entries);
			await generateTypeScriptApi(entries);
		})(),
		(async () => {
			await generateRust(entries);
			await generateRustApi(entries);
		})(),
		generateGo(entries),
	]);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
