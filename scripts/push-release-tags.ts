// Run on push to main. Compares .versions.json between HEAD and HEAD~1; for
// each package whose version bumped, pushes a release tag in dependency order
// with a delay between layers so dependents resolve correctly when published.
//
// Tag schema (must match existing publish workflows):
//   packages/ts          -> typescript-vX.Y.Z              (npm publish)
//   packages/ts-api      -> pogo-masterfile-vX.Y.Z         (npm publish)
//   packages/rust-macros -> rust-macros-vX.Y.Z             (cargo publish)
//   packages/rust        -> rust-vX.Y.Z                    (cargo publish)
//   packages/rust-api    -> pogo-masterfile-rust-vX.Y.Z    (cargo publish)
//   packages/go          -> packages/go/vX.Y.Z             (proxy.golang.org)
//   packages/go-api      -> packages/go-api/vX.Y.Z         (proxy.golang.org)

interface LayerMember {
	path: string;
	tagPrefix: string;
}

const LAYERS: LayerMember[][] = [
	// L1: zero internal deps
	[
		{ path: "packages/ts", tagPrefix: "typescript-v" },
		{ path: "packages/rust-macros", tagPrefix: "rust-macros-v" },
		{ path: "packages/go", tagPrefix: "packages/go/v" },
	],
	// L2: depend on something in L1
	[
		{ path: "packages/ts-api", tagPrefix: "pogo-masterfile-v" },
		{ path: "packages/rust", tagPrefix: "rust-v" },
		{ path: "packages/go-api", tagPrefix: "packages/go-api/v" },
	],
	// L3: depend on L2
	[{ path: "packages/rust-api", tagPrefix: "pogo-masterfile-rust-v" }],
];

// Wait between layers — gives npm/crates.io/proxy.golang.org time to ingest
// the L1 publish before L2 jobs (triggered by L2 tags) try to resolve the
// updated dep. 90s is conservative; typical ingestion is well under 30s.
const LAYER_WAIT_MS = 90_000;

function git(...args: string[]): string {
	const proc = Bun.spawnSync({
		cmd: ["git", ...args],
		stdout: "pipe",
		stderr: "pipe",
	});
	if (proc.exitCode !== 0) {
		const err = new TextDecoder().decode(proc.stderr);
		throw new Error(`git ${args.join(" ")}: ${err}`);
	}
	return new TextDecoder().decode(proc.stdout).trim();
}

function gitOk(...args: string[]): boolean {
	const proc = Bun.spawnSync({
		cmd: ["git", ...args],
		stdout: "pipe",
		stderr: "pipe",
	});
	return proc.exitCode === 0;
}

function readVersionsAtRef(ref: string): Record<string, string> | null {
	const proc = Bun.spawnSync({
		cmd: ["git", "show", `${ref}:.versions.json`],
		stdout: "pipe",
		stderr: "pipe",
	});
	if (proc.exitCode !== 0) return null;
	return JSON.parse(new TextDecoder().decode(proc.stdout)) as Record<string, string>;
}

function tagExists(tag: string): boolean {
	return gitOk("rev-parse", "--verify", `refs/tags/${tag}`);
}

const head = readVersionsAtRef("HEAD");
const prev = readVersionsAtRef("HEAD~1");

if (!head) {
	console.log(".versions.json missing at HEAD — nothing to do.");
	process.exit(0);
}

const bumps: Record<string, string> = {};
for (const [path, version] of Object.entries(head)) {
	if (!prev || prev[path] !== version) {
		bumps[path] = version;
	}
}

if (Object.keys(bumps).length === 0) {
	console.log("No version bumps detected. Exiting.");
	process.exit(0);
}

console.log("Detected bumps:");
for (const [p, v] of Object.entries(bumps)) console.log(`  ${p} -> ${v}`);

for (let i = 0; i < LAYERS.length; i++) {
	const layer = LAYERS[i];
	if (!layer) continue;
	const tagsToPush: string[] = [];
	for (const m of layer) {
		const v = bumps[m.path];
		if (!v) continue;
		const tag = `${m.tagPrefix}${v}`;
		if (tagExists(tag)) {
			console.log(`tag ${tag} already exists — skipping`);
			continue;
		}
		console.log(`Creating tag: ${tag}`);
		git("tag", tag);
		tagsToPush.push(tag);
	}
	if (tagsToPush.length === 0) {
		console.log(`Layer ${i + 1}: no tags to push`);
		continue;
	}
	console.log(`Pushing layer ${i + 1} tags: ${tagsToPush.join(", ")}`);
	git("push", "origin", ...tagsToPush);

	if (i < LAYERS.length - 1) {
		// Only wait if there are dependents in later layers that will actually fire.
		const remainingLayers = LAYERS.slice(i + 1);
		const hasMore = remainingLayers.some((l) => l.some((m) => bumps[m.path]));
		if (hasMore) {
			console.log(`Waiting ${LAYER_WAIT_MS / 1000}s for registry ingestion before next layer...`);
			await new Promise((r) => setTimeout(r, LAYER_WAIT_MS));
		}
	}
}

console.log("Done.");
