// Simulate chooseSplit against the local masterfile to see which groups
// land on H2 (templateId tokens) vs H3 (fingerprint) vs none.
//
// Run: bun run scripts/simulate-h2.ts                  → summary of all groups
//      bun run scripts/simulate-h2.ts <discriminator>  → drill into one group:
//                                                        H3 clusters + per-position
//                                                        token stats per cluster
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { Entry, Group } from "../src/group.ts";
import { groupEntries } from "../src/group.ts";
import { chooseSplit, tryH3 } from "../src/split.ts";

const raw = await readFile(join(import.meta.dir, "..", "masterfile.json"), "utf8");
const entries = JSON.parse(raw) as Entry[];
const groups = groupEntries(entries);

const drillTarget = process.argv[2];
if (drillTarget) {
	const target = groups.get(drillTarget);
	if (!target) {
		console.log(`No group named '${drillTarget}'.`);
		process.exit(1);
	}
	drillInto(target);
} else {
	summarize();
}

function summarize(): void {
	const summary: Array<{ kind: string; disc: string; size: number; lines: string[] }> = [];
	for (const g of groups.values()) {
		if (g.entries.length <= 100) continue;
		const plan = chooseSplit(g);
		const lines: string[] = [];
		describePlan(plan, "  ", lines);
		summary.push({ kind: plan.kind, disc: g.discriminator, size: g.entries.length, lines });
	}
	summary.sort((a, b) => b.size - a.size);
	for (const s of summary) {
		console.log(`${s.disc.padEnd(40)} ${String(s.size).padStart(5)} entries  [${s.kind}]`);
		for (const line of s.lines) console.log(line);
	}
}

function describePlan(plan: ReturnType<typeof chooseSplit>, indent: string, out: string[]): void {
	if (plan.kind === "none") {
		out.push(`${indent}(no split — single file)`);
		return;
	}
	const nodes = plan.kind === "h1" ? plan.buckets : plan.kind === "h2" ? plan.buckets : plan.clusters;
	const heuristicLabel = plan.kind === "h1" ? `h1:${plan.field}` : plan.kind === "h2" ? `h2:pos${plan.position}` : "h3:fingerprint";
	out.push(`${indent}${heuristicLabel} → ${nodes.length} buckets`);
	for (const n of nodes) {
		const leafMarker = n.children ? "▼" : " ";
		out.push(`${indent}  ${leafMarker} ${n.fileName.padEnd(30)} ${String(n.entries.length).padStart(5)}`);
		if (n.children) describePlan(n.children, `${indent}    `, out);
	}
}

function tokenize(id: string): string[] {
	return id.split("_").filter(Boolean);
}

function dumpPositions(label: string, ents: Entry[]): void {
	const total = ents.length;
	const maxPos = Math.max(...ents.map((e) => tokenize(e.templateId).length));
	console.log(`\n=== ${label} (${total} entries, max ${maxPos} positions) ===`);
	for (let pos = 0; pos < Math.min(maxPos, 7); pos += 1) {
		const counts = new Map<string, number>();
		let missing = 0;
		for (const e of ents) {
			const t = tokenize(e.templateId);
			if (t[pos] === undefined) {
				missing += 1;
				continue;
			}
			counts.set(t[pos]!, (counts.get(t[pos]!) ?? 0) + 1);
		}
		const top = [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8);
		const dominance = top[0] ? top[0][1] / total : 0;
		const avg = counts.size > 0 ? total / counts.size : 0;
		console.log(`  pos ${pos}: card=${counts.size}, dom=${(dominance * 100).toFixed(1)}%, avg=${avg.toFixed(1)}, missing=${missing}`);
		console.log(`    top: ${top.map(([k, v]) => `${k}(${v})`).join(", ")}`);
	}
}

function drillInto(g: Group): void {
	dumpPositions(`whole group: ${g.discriminator}`, g.entries);
	const clusters = tryH3(g);
	if (!clusters) {
		console.log(`\n(no H3 split — only one fingerprint or out of bounds)`);
		return;
	}
	for (const c of clusters) {
		dumpPositions(`H3 cluster: ${c.fileName}`, c.entries);
	}
}
