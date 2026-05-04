#!/usr/bin/env bun
/**
 * One-time bootstrap of the deprecated emission from local analysis artifacts.
 * Run from repo root: `bun run scripts/template-history/bootstrap-deprecated.ts`
 *
 * Inputs:
 *   - scripts/template-history/mini-masterfile-removed.json
 *   - scripts/template-history/report.json
 *
 * Outputs:
 *   - packages/ts/dist/deprecated.d.ts
 *   - packages/rust/src/deprecated.rs
 *   - packages/go/deprecated/deprecated.go
 *
 * After this script runs and the resulting PR merges, this file is deleted
 * along with all analysis artifacts. Steady-state diffs handle future updates.
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { emitGo } from "../../src/deprecated/emit-go";
import { emitRust } from "../../src/deprecated/emit-rust";
import { emitTypescript } from "../../src/deprecated/emit-typescript";
import type { DeprecatedDiscriminator, DeprecatedSet } from "../../src/deprecated/types";

interface RawEntry {
	templateId: string;
	data: { templateId: string; [discriminator: string]: unknown };
}

interface PermanentRemoval {
	template_id: string;
	last_seen_date: string;
}

interface Report {
	permanent: PermanentRemoval[];
}

const REPO_ROOT = join(import.meta.dir, "..", "..");
const MINI_MASTERFILE = join(import.meta.dir, "mini-masterfile-removed.json");
const REPORT = join(import.meta.dir, "report.json");

const TS_OUT = join(REPO_ROOT, "packages", "ts", "dist", "deprecated.d.ts");
const RUST_OUT = join(REPO_ROOT, "packages", "rust", "src", "deprecated.rs");
const GO_OUT = join(REPO_ROOT, "packages", "go", "deprecated", "deprecated.go");

function main(): void {
	const entries = JSON.parse(readFileSync(MINI_MASTERFILE, "utf8")) as RawEntry[];
	const report = JSON.parse(readFileSync(REPORT, "utf8")) as Report;

	const lastSeenByTemplateId = new Map<string, string>();
	for (const r of report.permanent) {
		lastSeenByTemplateId.set(r.template_id, r.last_seen_date.slice(0, 10));
	}

	// Group by discriminator (the FIRST non-templateId key in `data`).
	// Marker-only entries with no inner key are bucketed under "_marker".
	const byDiscriminator = new Map<string, RawEntry[]>();
	for (const entry of entries) {
		const dKeys = Object.keys(entry.data).filter((k) => k !== "templateId");
		const discriminator = dKeys[0] ?? "_marker";
		if (!byDiscriminator.has(discriminator)) byDiscriminator.set(discriminator, []);
		byDiscriminator.get(discriminator)!.push(entry);
	}

	const set: DeprecatedSet = new Map();
	for (const [discriminator, group] of byDiscriminator) {
		const templateIds = new Set(group.map((e) => e.templateId));
		const dates: string[] = [];
		for (const id of templateIds) {
			const date = lastSeenByTemplateId.get(id);
			if (!date) {
				throw new Error(
					`bootstrap: templateId "${id}" (discriminator "${discriminator}") is in mini-masterfile-removed.json but absent from report.json's permanent[]. Refresh inputs.`,
				);
			}
			dates.push(date);
		}
		const lastSeen = dates.sort().at(-1)!;

		const tsDataBody = inferTypescriptDataInterface(discriminator, group);

		const record: DeprecatedDiscriminator = {
			discriminator,
			templateIds,
			lastSeen,
			entryCount: templateIds.size,
			dataTypeBody: { ts: tsDataBody, rust: "", go: "" },
		};
		set.set(discriminator, record);
	}

	mkdirSync(join(REPO_ROOT, "packages", "go", "deprecated"), { recursive: true });
	writeFileSync(TS_OUT, emitTypescript(set));
	writeFileSync(RUST_OUT, emitRust(set));
	writeFileSync(GO_OUT, emitGo(set));

	console.log(`bootstrap: wrote ${set.size} discriminators (${entries.length} entries)`);
	console.log(`  TS:   ${TS_OUT}`);
	console.log(`  Rust: ${RUST_OUT}`);
	console.log(`  Go:   ${GO_OUT}`);
}

function inferTypescriptDataInterface(discriminator: string, group: RawEntry[]): string {
	const Pascal = discriminator.charAt(0).toUpperCase() + discriminator.slice(1);
	const allKeys = new Set<string>();
	for (const e of group) {
		const inner = e.data[discriminator];
		if (inner && typeof inner === "object" && !Array.isArray(inner)) {
			for (const k of Object.keys(inner as object)) allKeys.add(k);
		}
	}
	if (allKeys.size === 0) {
		return `export interface Deprecated${Pascal}Data {}`;
	}
	const sortedKeys = [...allKeys].sort();
	const fields = sortedKeys.map((k) => `\t${JSON.stringify(k)}?: unknown;`).join("\n");
	return `export interface Deprecated${Pascal}Data {\n${fields}\n}`;
}

main();
