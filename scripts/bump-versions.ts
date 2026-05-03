// Diffs before/after package hashes, applies strict cascade, bumps patch
// versions in .versions.json (single source of truth for tag-after-merge),
// AND in language-specific manifests where applicable, and appends CHANGELOGs.
//
// Side-effect: when packages/go bumps, packages/go-api/go.mod's `require`
// line is rewritten to the new go version so go-api resolves correctly when
// published.
//
// Usage: bun run scripts/bump-versions.ts <before.json> <after.json>
// Env:   UPSTREAM_SHA — recorded in CHANGELOG entries.

import { existsSync, readFileSync, writeFileSync } from "node:fs";

interface PkgInfo {
	path: string;
	manifest: { path: string; type: "package.json" | "Cargo.toml" } | null;
	changelog: string;
	cascade: string[];
}

const PACKAGES: PkgInfo[] = [
	{
		path: "packages/ts",
		manifest: { path: "packages/ts/package.json", type: "package.json" },
		changelog: "packages/ts/CHANGELOG.md",
		cascade: ["packages/ts-api"],
	},
	{
		path: "packages/ts-api",
		manifest: { path: "packages/ts-api/package.json", type: "package.json" },
		changelog: "packages/ts-api/CHANGELOG.md",
		cascade: [],
	},
	{
		path: "packages/rust-macros",
		manifest: { path: "packages/rust-macros/Cargo.toml", type: "Cargo.toml" },
		changelog: "packages/rust-macros/CHANGELOG.md",
		cascade: ["packages/rust"],
	},
	{
		path: "packages/rust",
		manifest: { path: "packages/rust/Cargo.toml", type: "Cargo.toml" },
		changelog: "packages/rust/CHANGELOG.md",
		cascade: ["packages/rust-api"],
	},
	{
		path: "packages/rust-api",
		manifest: { path: "packages/rust-api/Cargo.toml", type: "Cargo.toml" },
		changelog: "packages/rust-api/CHANGELOG.md",
		cascade: [],
	},
	{
		path: "packages/go",
		manifest: null,
		changelog: "packages/go/CHANGELOG.md",
		cascade: ["packages/go-api"],
	},
	{
		path: "packages/go-api",
		manifest: null,
		changelog: "packages/go-api/CHANGELOG.md",
		cascade: [],
	},
];

const VERSIONS_FILE = ".versions.json";

function bumpPatch(version: string): string {
	const m = /^(\d+)\.(\d+)\.(\d+)(.*)$/.exec(version);
	if (!m) throw new Error(`Cannot parse version: ${version}`);
	return `${m[1]}.${m[2]}.${Number(m[3]) + 1}${m[4] ?? ""}`;
}

function setManifestVersion(p: PkgInfo, v: string): void {
	if (!p.manifest) return;
	if (p.manifest.type === "package.json") {
		const obj = JSON.parse(readFileSync(p.manifest.path, "utf8"));
		obj.version = v;
		writeFileSync(p.manifest.path, `${JSON.stringify(obj, null, "\t")}\n`);
	} else {
		const text = readFileSync(p.manifest.path, "utf8");
		writeFileSync(p.manifest.path, text.replace(/^version\s*=\s*"[^"]+"/m, `version = "${v}"`));
	}
}

function appendChangelog(p: PkgInfo, version: string, upstreamSha: string): void {
	const today = new Date().toISOString().slice(0, 10);
	const entry = `## [${version}] - ${today}\n\nAutomated regeneration from upstream masterfile commit \`${upstreamSha}\`.\n`;
	let body = existsSync(p.changelog) ? readFileSync(p.changelog, "utf8") : "# Changelog\n\n";
	const idx = body.search(/^## \[/m);
	body = idx === -1 ? `${body}\n${entry}` : `${body.slice(0, idx)}${entry}\n${body.slice(idx)}`;
	writeFileSync(p.changelog, body);
}

const [beforePath, afterPath] = process.argv.slice(2);
if (!beforePath || !afterPath) {
	console.error("Usage: bump-versions.ts <before.json> <after.json>");
	process.exit(1);
}

const upstreamSha = process.env.UPSTREAM_SHA ?? "unknown";
const before = JSON.parse(readFileSync(beforePath, "utf8")) as Record<string, string>;
const after = JSON.parse(readFileSync(afterPath, "utf8")) as Record<string, string>;
const versions = JSON.parse(readFileSync(VERSIONS_FILE, "utf8")) as Record<string, string>;

const changed = new Set<string>();
for (const p of PACKAGES) {
	if (before[p.path] !== after[p.path]) changed.add(p.path);
}

const queue = [...changed];
while (queue.length > 0) {
	const cur = queue.shift();
	if (!cur) break;
	const p = PACKAGES.find((x) => x.path === cur);
	if (!p) continue;
	for (const dep of p.cascade) {
		if (!changed.has(dep)) {
			changed.add(dep);
			queue.push(dep);
		}
	}
}

const bumps: Record<string, string> = {};
for (const p of PACKAGES) {
	if (!changed.has(p.path)) continue;
	const next = bumpPatch(versions[p.path] ?? "0.1.0");
	versions[p.path] = next;
	bumps[p.path] = next;
	setManifestVersion(p, next);
	appendChangelog(p, next, upstreamSha);
	console.log(`${p.path}: ${next}`);
}

if (Object.keys(bumps).length > 0) {
	writeFileSync(VERSIONS_FILE, `${JSON.stringify(versions, null, "\t")}\n`);
}

const goBump = bumps["packages/go"];
if (goBump) {
	const goApiModPath = "packages/go-api/go.mod";
	const text = readFileSync(goApiModPath, "utf8");
	writeFileSync(goApiModPath, text.replace(/(require\s+github\.com\/Hazels-Lab\/pogo-masterfile-types\/packages\/go)\s+v[\w.+-]+/, `$1 v${goBump}`));
	console.log(`packages/go-api/go.mod: require -> v${goBump}`);
}

if (Object.keys(bumps).length === 0) {
	console.log("No effective package changes after canonical hashing.");
}
