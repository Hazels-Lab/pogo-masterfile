#!/usr/bin/env bun
/**
 * Crawl the full PokeMiners game_master archive and recover legacy template ids
 * the one-time bootstrap missed (its window started ~2022; the archive goes back
 * to 2021-06). Dry-run report by default; --write merges findings into the
 * existing deprecated emission and re-emits TS/Rust/Go.
 *
 * Usage (from repo root):
 *   bun run scripts/template-history/backfill-from-archive.ts --archive /path/to/game_masters
 *   bun run scripts/template-history/backfill-from-archive.ts --archive /path/to/game_masters --write
 *   bun run scripts/template-history/backfill-from-archive.ts --archive /path --write --exclude-shadow-purified
 *
 * The archive dir is also resolvable via the GAME_MASTERS_DIR env var.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { emitGo } from "../../src/deprecated/emit-go";
import { emitRust } from "../../src/deprecated/emit-rust";
import { emitTypescript } from "../../src/deprecated/emit-typescript";
import { crawlArchive, readCurrentDeprecated, readLiveSet } from "./backfill-io";
import { buildReport, classifyLegacy, isShadowPurified, mergeBackfill, type SeenEntry } from "./backfill-lib";

const REPO_ROOT = join(import.meta.dir, "..", "..");
const REPORT_OUT = join(import.meta.dir, "backfill-report.json");
const TS_OUT = join(REPO_ROOT, "packages", "ts", "dist", "deprecated.d.ts");
const RUST_OUT = join(REPO_ROOT, "packages", "rust", "src", "deprecated.rs");
const GO_OUT = join(REPO_ROOT, "packages", "go", "deprecated", "deprecated.go");

interface Args {
	write: boolean;
	excludeShadowPurified: boolean;
	archive: string;
}

function parseArgs(argv: string[]): Args {
	let write = false;
	let excludeShadowPurified = false;
	let archive = process.env.GAME_MASTERS_DIR ?? join(REPO_ROOT, "..", "game_masters");
	for (let i = 0; i < argv.length; i++) {
		const a = argv[i];
		if (a === "--write") write = true;
		else if (a === "--exclude-shadow-purified") excludeShadowPurified = true;
		else if (a === "--archive") archive = argv[++i] ?? archive;
		else throw new Error(`Unknown arg: ${a}`);
	}
	return { write, excludeShadowPurified, archive };
}

function main(): void {
	const args = parseArgs(process.argv.slice(2));
	const prevDir = join(args.archive, "previous_game_masters");

	console.log(`Crawling ${prevDir} ...`);
	const seen = crawlArchive(prevDir);
	console.log(`  ${seen.size} distinct template ids seen across archive`);

	const live = readLiveSet(REPO_ROOT, args.archive);
	const current = readCurrentDeprecated(REPO_ROOT);
	const alreadyDeprecated = new Set<string>();
	for (const rec of current.values()) for (const id of rec.templateIds) alreadyDeprecated.add(id);
	console.log(`  ${live.size} live ids, ${alreadyDeprecated.size} already-deprecated ids`);

	let legacy = classifyLegacy({ seen, live, alreadyDeprecated });
	if (args.excludeShadowPurified) {
		const filtered = new Map<string, SeenEntry>();
		for (const [id, info] of legacy) if (!isShadowPurified(id)) filtered.set(id, info);
		console.log(`  excluding ${legacy.size - filtered.size} shadow/purified ids`);
		legacy = filtered;
	}

	const report = buildReport(legacy, current);
	writeFileSync(REPORT_OUT, `${JSON.stringify(report, null, 2)}\n`);
	console.log(`\nLegacy ids to record: ${report.totalLegacy} across ${report.discriminatorCount} discriminators (${report.newDiscriminators} new)`);
	console.log(`  shadow/purified bucket: ${report.shadowPurifiedCount}`);
	console.log("  top discriminators:");
	for (const r of report.byDiscriminator.slice(0, 12)) {
		const flag = r.isNew ? "+" : " ";
		console.log(`   ${flag} ${r.discriminator.padEnd(34)} ${String(r.count).padStart(5)}  ${r.firstSeen}..${r.lastSeen}`);
	}
	console.log(`\nFull report: ${REPORT_OUT}`);

	if (!args.write) {
		console.log("\nDry run. Pass --write to merge into the deprecated emission.");
		return;
	}

	const next = mergeBackfill(current, legacy);
	mkdirSync(dirname(TS_OUT), { recursive: true });
	mkdirSync(dirname(RUST_OUT), { recursive: true });
	mkdirSync(dirname(GO_OUT), { recursive: true });
	writeFileSync(TS_OUT, emitTypescript(next));
	writeFileSync(RUST_OUT, emitRust(next));
	writeFileSync(GO_OUT, emitGo(next));
	console.log(`\nWrote ${next.size} discriminators to deprecated.d.ts / .rs / .go`);
	console.log("Run `bun run format` and `bun run typecheck` next.");
}

main();
