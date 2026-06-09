import { describe, expect, test } from "bun:test";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { crawlArchive, readCurrentDeprecated, readLiveSet } from "./backfill-io";

function snapshot(root: string, name: string, entries: unknown[]): void {
	const dir = join(root, name);
	mkdirSync(dir, { recursive: true });
	writeFileSync(join(dir, "game_master.json"), JSON.stringify(entries));
}

describe("crawlArchive", () => {
	test("merges across snapshots, keeping latest shape + max date", () => {
		const prev = mkdtempSync(join(tmpdir(), "prev-"));
		snapshot(prev, "gm_v2_apk0001_2021.06.03-10.00.00", [
			{ templateId: "A", data: { templateId: "A", oldDisc: {} } },
			{ templateId: "GONE", data: { templateId: "GONE", itemSettings: {} } },
		]);
		snapshot(prev, "gm_v2_apk0002_2023.08.30-10.00.00", [{ templateId: "A", data: { templateId: "A", newDisc: {} } }]);
		const seen = crawlArchive(prev);
		expect(seen.get("A")).toEqual({ discriminator: "newDisc", lastSeen: "2023-08-30" });
		expect(seen.get("GONE")).toEqual({ discriminator: "itemSettings", lastSeen: "2021-06-03" });
	});
});

describe("readLiveSet", () => {
	test("union of template-ids.txt and latest/latest.json", () => {
		const repo = mkdtempSync(join(tmpdir(), "repo-"));
		const arch = mkdtempSync(join(tmpdir(), "arch-"));
		writeFileSync(join(repo, "template-ids.txt"), "ID_FROM_TXT\nSHARED\n");
		mkdirSync(join(arch, "latest"), { recursive: true });
		writeFileSync(
			join(arch, "latest", "latest.json"),
			JSON.stringify([
				{ templateId: "ID_FROM_JSON", data: {} },
				{ templateId: "SHARED", data: {} },
			]),
		);
		const live = readLiveSet(repo, arch);
		expect(live.has("ID_FROM_TXT")).toBe(true);
		expect(live.has("ID_FROM_JSON")).toBe(true);
		expect(live.has("SHARED")).toBe(true);
		expect(live.size).toBe(3);
	});
});

describe("readCurrentDeprecated", () => {
	test("parses the working-tree deprecated.d.ts", () => {
		const repo = mkdtempSync(join(tmpdir(), "repo2-"));
		const dist = join(repo, "packages", "ts", "dist");
		mkdirSync(dist, { recursive: true });
		writeFileSync(join(dist, "deprecated.d.ts"), `/** @deprecated lastSeen 2024-11-11 — 1 entries */\ntype DeprecatedItemSettingsIds = "OLD_ITEM";\n`);
		const set = readCurrentDeprecated(repo);
		expect(set.get("itemSettings")?.templateIds).toEqual(new Set(["OLD_ITEM"]));
	});

	test("missing file → empty set", () => {
		const repo = mkdtempSync(join(tmpdir(), "repo3-"));
		expect(readCurrentDeprecated(repo).size).toBe(0);
	});
});
