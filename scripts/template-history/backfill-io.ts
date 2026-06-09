import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { parseDeprecatedSource } from "../../src/deprecated/parse-source";
import type { DeprecatedSet } from "../../src/deprecated/types";
import type { Entry } from "../../src/group";
import { accumulateSeen, parseSnapshotDate, type SeenEntry } from "./backfill-lib";

/** Crawl every `<prevDir>/<snapshot>/game_master.json` into a seen-map. */
export function crawlArchive(prevDir: string): Map<string, SeenEntry> {
	const seen = new Map<string, SeenEntry>();
	let skipped = 0;
	for (const d of readdirSync(prevDir, { withFileTypes: true })) {
		if (!d.isDirectory()) continue;
		// Unparseable folder name is a HARD error by design: every snapshot must
		// be counted, and a name that doesn't match means a new timestamp format
		// to handle (see PokeMiners README), not a snapshot to silently drop.
		const date = parseSnapshotDate(d.name);
		const file = join(prevDir, d.name, "game_master.json");
		if (!existsSync(file)) {
			console.warn(`skip ${d.name}: no game_master.json`);
			skipped++;
			continue;
		}
		let entries: Entry[];
		try {
			entries = JSON.parse(readFileSync(file, "utf8")) as Entry[];
		} catch {
			console.warn(`skip ${d.name}: JSON parse failed`);
			skipped++;
			continue;
		}
		accumulateSeen(seen, entries, date);
	}
	if (skipped) console.warn(`crawl: skipped ${skipped} snapshot(s)`);
	return seen;
}

/** LIVE set = ids in `<repoRoot>/template-ids.txt` ∪ ids in `<archiveDir>/latest/latest.json`. */
export function readLiveSet(repoRoot: string, archiveDir: string): Set<string> {
	const live = new Set<string>();
	const idsTxt = join(repoRoot, "template-ids.txt");
	if (existsSync(idsTxt)) {
		for (const line of readFileSync(idsTxt, "utf8").split("\n")) {
			const id = line.trim();
			if (id) live.add(id);
		}
	}
	const latest = join(archiveDir, "latest", "latest.json");
	if (existsSync(latest)) {
		for (const e of JSON.parse(readFileSync(latest, "utf8")) as Entry[]) live.add(e.templateId);
	}
	return live;
}

/** Parse the working-tree `packages/ts/dist/deprecated.d.ts` into a DeprecatedSet (empty if absent). */
export function readCurrentDeprecated(repoRoot: string): DeprecatedSet {
	const file = join(repoRoot, "packages", "ts", "dist", "deprecated.d.ts");
	if (!existsSync(file)) return new Map();
	return parseDeprecatedSource(readFileSync(file, "utf8"));
}
