import { generateGo } from "./go";
import { generateRust } from "./rust";
import type { Json } from "./types";
import { generateTypescript } from "./typescript";

async function main() {
	const resp = await fetch(
		"https://raw.githubusercontent.com/alexelgt/game_masters/refs/heads/master/GAME_MASTER.json",
	);

	if (!resp.ok) throw new Error("Unable to fetch remote masterfile");

	const parsed = (await resp.json()) as Json;

	generateTypescript(parsed);
	generateRust(parsed);
	generateGo(parsed);
}

await main();
