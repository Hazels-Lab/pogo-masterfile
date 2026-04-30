import { GAME_MASTER_URL } from "./constants.ts";
import type { Entry } from "./group.ts";
import { generateTypeScript } from "./typescript/generate.ts";

async function fetchMasterfile(): Promise<Entry[]> {
	const resp = await fetch(GAME_MASTER_URL);
	if (!resp.ok) {
		throw new Error(`fetch failed: ${resp.status} ${resp.statusText}`);
	}
	return (await resp.json()) as Entry[];
}

async function main(): Promise<void> {
	console.log(`Fetching ${GAME_MASTER_URL}...`);
	const entries = await fetchMasterfile();
	console.log(`Fetched ${entries.length} entries.`);

	await generateTypeScript(entries);
	// Future: await generateGo(entries);
	// Future: await generateRust(entries);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
