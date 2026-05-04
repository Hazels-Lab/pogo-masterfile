#!/usr/bin/env bun
/**
 * Steady-state deprecation update. Runs as the second step of `bun run generate`.
 *
 * Reads:
 *   - working-tree packages/ts/dist/deprecated.d.ts (current deprecated set)
 *   - `git show HEAD:packages/ts/dist/...`         (PREVIOUS live emission)
 *   - working-tree packages/ts/dist/...            (NEW live emission)
 *
 * Writes:
 *   - packages/ts/dist/deprecated.d.ts
 *   - packages/rust/src/deprecated.rs
 *   - packages/go/deprecated/deprecated.go
 *
 * Git invocations use execFileSync with argv arrays — no shell interpolation,
 * no command-injection surface.
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { computeDiff } from "./deprecated/compute-diff";
import { emitGo } from "./deprecated/emit-go";
import { emitRust } from "./deprecated/emit-rust";
import { emitTypescript } from "./deprecated/emit-typescript";
import { extractTemplateIdsFromEntries, parseLiveTsEmission } from "./deprecated/parse-emission";
import type { DataTypeBody, DeprecatedSet } from "./deprecated/types";

const REPO_ROOT = join(import.meta.dir, "..");
const TS_DIST = join(REPO_ROOT, "packages", "ts", "dist");

const TS_OUT = join(TS_DIST, "deprecated.d.ts");
const RUST_OUT = join(REPO_ROOT, "packages", "rust", "src", "deprecated.rs");
const GO_OUT = join(REPO_ROOT, "packages", "go", "deprecated", "deprecated.go");

export interface ApplyDiffInput {
	current: DeprecatedSet;
	newlyDeprecated: Set<string>;
	newlyRevived: Set<string>;
	/** Map<templateId, discriminator> from the PREVIOUS live emission. */
	discriminatorOfId: Map<string, string>;
	/** Map<discriminator, DataTypeBody> from the PREVIOUS live emission, used when a discriminator is new to deprecated. */
	dataBodiesByDiscriminator: Map<string, DataTypeBody>;
	/** Today's date in ISO YYYY-MM-DD form. */
	today: string;
}

export function applyDiff(input: ApplyDiffInput): DeprecatedSet {
	// Clone current to avoid mutation surprises.
	const next: DeprecatedSet = new Map();
	for (const [k, v] of input.current) {
		next.set(k, {
			discriminator: v.discriminator,
			templateIds: new Set(v.templateIds),
			lastSeen: v.lastSeen,
			entryCount: v.entryCount,
			dataTypeBody: v.dataTypeBody,
		});
	}

	// Apply newly-revived: remove ids; drop empty discriminators.
	for (const id of input.newlyRevived) {
		for (const [discriminator, record] of next) {
			if (record.templateIds.delete(id)) {
				record.entryCount = record.templateIds.size;
				if (record.templateIds.size === 0) next.delete(discriminator);
			}
		}
	}

	// Apply newly-deprecated: add ids; create discriminators if needed; bump lastSeen.
	for (const id of input.newlyDeprecated) {
		const discriminator = input.discriminatorOfId.get(id);
		if (!discriminator) continue; // Unknown id — tolerate (shouldn't happen).
		let record = next.get(discriminator);
		if (!record) {
			const dataTypeBody = input.dataBodiesByDiscriminator.get(discriminator) ?? { ts: "", rust: "", go: "" };
			record = {
				discriminator,
				templateIds: new Set(),
				lastSeen: input.today,
				entryCount: 0,
				dataTypeBody,
			};
			next.set(discriminator, record);
		}
		record.templateIds.add(id);
		record.entryCount = record.templateIds.size;
		record.lastSeen = input.today;
	}

	return next;
}

// --- I/O orchestration (covered by Task 11's smoke test) ---

function git(...args: string[]): string | null {
	try {
		return execFileSync("git", args, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] });
	} catch {
		return null;
	}
}

/** `git show <rev>:<path>` — returns null if the path doesn't exist at that rev. */
function gitShow(rev: string, path: string): string | null {
	return git("show", `${rev}:${path}`);
}

/** Read PREVIOUS live emission at HEAD — Map<templateId, discriminator>. */
function parsePreLiveFromGit(): Map<string, string> {
	const result = new Map<string, string>();
	const lsOut = git("ls-tree", "HEAD", "packages/ts/dist/");
	if (!lsOut) return result;
	for (const line of lsOut.trim().split("\n")) {
		const parts = line.split("\t");
		if (parts.length < 2) continue;
		const meta = parts[0]!.split(" ");
		const objType = meta[1]!;
		const path = parts[1]!;
		if (objType !== "tree") continue;
		const dirName = path.split("/").pop()!;
		const source = gitShow("HEAD", `${path}/entries.d.ts`);
		if (!source) continue;
		const discriminator = kebabToCamel(dirName);
		const Pascal = pascalCase(discriminator);
		const ids = extractTemplateIdsFromEntries(source, Pascal);
		for (const id of ids) result.set(id, discriminator);
	}
	return result;
}

/** Fetch PREVIOUS-HEAD type bodies for one discriminator, all three languages. */
function fetchDataBodiesAtHead(discriminator: string): DataTypeBody {
	const kebab = camelToKebab(discriminator);
	const snake = camelToSnake(discriminator);
	const ts = gitShow("HEAD", `packages/ts/dist/${kebab}/types.d.ts`) ?? "";
	const rust = gitShow("HEAD", `packages/rust/src/${snake}/types.rs`) ?? "";
	const go = gitShow("HEAD", `packages/go/${snake}/types.go`) ?? "";
	return { ts, rust, go };
}

function extractInterfaceBody(source: string, name: string): string | null {
	const marker = `export interface ${name} {`;
	const start = source.indexOf(marker);
	if (start === -1) return null;
	let depth = 0;
	for (let i = start + marker.length - 1; i < source.length; i++) {
		const ch = source[i];
		if (ch === "{") depth++;
		else if (ch === "}") {
			depth--;
			if (depth === 0) return source.slice(start, i + 1);
		}
	}
	return null;
}

function parseCurrentDeprecated(): DeprecatedSet {
	// Read from git HEAD because src/generate.ts wipes the dist/ directory before
	// update-deprecated.ts runs. The working-tree file no longer exists at this point.
	const source = gitShow("HEAD", "packages/ts/dist/deprecated.d.ts");
	if (!source) return new Map();
	const set: DeprecatedSet = new Map();
	const blockRe =
		/\/\*\* @deprecated lastSeen (\d{4}-\d{2}-\d{2}) — (\d+) entries \*\/\s*\nexport type Deprecated([A-Za-z_][A-Za-z0-9_]*)<[\s\S]*?TID extends Deprecated\3Ids[\s\S]*?>\s*=\s*\{/g;
	const idsRe = /type Deprecated([A-Za-z_][A-Za-z0-9_]*)Ids\s*=\s*([\s\S]+?);/g;
	const idMap = new Map<string, string[]>();
	for (const m of source.matchAll(idsRe)) {
		const Pascal = m[1]!;
		const literals = [...m[2]!.matchAll(/"([^"]+)"/g)].map((mm) => mm[1]!);
		idMap.set(Pascal, literals);
	}
	for (const m of source.matchAll(blockRe)) {
		const lastSeen = m[1]!;
		const entryCount = Number(m[2]!);
		const Pascal = m[3]!;
		const discriminator = Pascal.charAt(0).toLowerCase() + Pascal.slice(1);
		const ids = idMap.get(Pascal) ?? [];
		const dataBody = extractInterfaceBody(source, `Deprecated${Pascal}Data`) ?? "";
		set.set(discriminator, {
			discriminator,
			templateIds: new Set(ids),
			lastSeen,
			entryCount,
			dataTypeBody: { ts: dataBody, rust: "", go: "" },
		});
	}
	return set;
}

function main(): void {
	const oldLiveMap = parsePreLiveFromGit();
	if (oldLiveMap.size === 0) {
		console.warn("update-deprecated: previous live emission unavailable at HEAD (fresh clone or paths moved). No-op.");
		return;
	}
	const oldLiveIds = new Set(oldLiveMap.keys());

	const newLiveMap = parseLiveTsEmission(TS_DIST);
	const newLiveIds = new Set(newLiveMap.keys());

	const current = parseCurrentDeprecated();
	const currentIds = new Set<string>();
	for (const r of current.values()) for (const id of r.templateIds) currentIds.add(id);

	const diff = computeDiff({ oldLive: oldLiveIds, newLive: newLiveIds, currentDeprecated: currentIds });

	const newDiscriminators = new Set<string>();
	for (const id of diff.newlyDeprecated) {
		const discriminator = oldLiveMap.get(id);
		if (!discriminator) continue;
		if (!current.has(discriminator)) newDiscriminators.add(discriminator);
	}
	const dataBodies = new Map<string, DataTypeBody>();
	for (const d of newDiscriminators) dataBodies.set(d, fetchDataBodiesAtHead(d));

	const today = new Date().toISOString().slice(0, 10);
	const next = applyDiff({
		current,
		newlyDeprecated: diff.newlyDeprecated,
		newlyRevived: diff.newlyRevived,
		discriminatorOfId: oldLiveMap,
		dataBodiesByDiscriminator: dataBodies,
		today,
	});

	mkdirSync(dirname(TS_OUT), { recursive: true });
	mkdirSync(dirname(RUST_OUT), { recursive: true });
	mkdirSync(dirname(GO_OUT), { recursive: true });
	writeFileSync(TS_OUT, emitTypescript(next));
	writeFileSync(RUST_OUT, emitRust(next));
	writeFileSync(GO_OUT, emitGo(next));

	wireOptInSurfaces();

	console.log(`update-deprecated: +${diff.newlyDeprecated.size} newly deprecated, -${diff.newlyRevived.size} revived, ${next.size} discriminators`);
}

function wireOptInSurfaces(): void {
	// 1. Ensure packages/rust/src/lib.rs ends with the cfg-feature lines.
	const RUST_LIB = join(REPO_ROOT, "packages", "rust", "src", "lib.rs");
	const RUST_FEATURE_DECL = `\n#[cfg(feature = "deprecated")]\npub mod deprecated;\n`;
	const libContent = readFileSync(RUST_LIB, "utf8");
	if (!libContent.includes(`#[cfg(feature = "deprecated")]`)) {
		writeFileSync(RUST_LIB, libContent + RUST_FEATURE_DECL);
	}

	// 2. Ensure packages/go/deprecated/doc.go exists.
	const GO_DOC = join(REPO_ROOT, "packages", "go", "deprecated", "doc.go");
	if (!existsSync(GO_DOC)) {
		const docContent = `// Package deprecated holds historical type definitions for masterfile
// templates that have been removed from the upstream GAME_MASTER.json.
//
// Types here carry // Deprecated: comments and are kept for consumers
// that need to parse older masterfile dumps. New code should prefer
// the live types in github.com/Hazels-Lab/pogo-masterfile/packages/go.
//
// The contents of deprecated.go are fully generated. See:
//   docs/superpowers/specs/2026-05-03-deprecated-types-tracking-design.md
package deprecated
`;
		mkdirSync(join(REPO_ROOT, "packages", "go", "deprecated"), { recursive: true });
		writeFileSync(GO_DOC, docContent);
	}
}

function kebabToCamel(s: string): string {
	return s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}
function camelToKebab(s: string): string {
	return s.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
}
function camelToSnake(s: string): string {
	return s.replace(/[A-Z]/g, (c) => `_${c.toLowerCase()}`);
}
function pascalCase(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

if (import.meta.main) main();
