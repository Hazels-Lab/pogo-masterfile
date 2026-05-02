// Compute a content-canonical hash for each published package directory.
// Run twice in autoupdate.yml — once before regen, once after — and the
// before/after diff drives the per-package patch-version bumps.
//
// Output: JSON to stdout: { "packages/ts": "<sha256>", ... }

import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";

const PACKAGES = ["packages/ts", "packages/ts-api", "packages/rust", "packages/rust-api", "packages/rust-macros", "packages/go", "packages/go-api"] as const;

function listTrackedFiles(pkgPath: string): string[] {
	const proc = Bun.spawnSync({
		cmd: ["git", "ls-files", "-z", pkgPath],
		stdout: "pipe",
		stderr: "pipe",
	});
	if (proc.exitCode !== 0) {
		const err = new TextDecoder().decode(proc.stderr);
		throw new Error(`git ls-files ${pkgPath}: ${err}`);
	}
	return new TextDecoder().decode(proc.stdout).split("\0").filter(Boolean).sort();
}

function hashPackage(pkgPath: string): string {
	const hasher = createHash("sha256");
	for (const file of listTrackedFiles(pkgPath)) {
		hasher.update(file);
		hasher.update("\0");
		let raw: Buffer;
		try {
			raw = readFileSync(file);
		} catch {
			// Tracked file disappeared between ls-files and read. Skipping it
			// changes the hash, which is the right signal — the package effectively
			// changed.
			continue;
		}
		hasher.update(canonicalize(file, raw));
		hasher.update("\0");
	}
	return hasher.digest("hex");
}

/**
 * TODO — IMPLEMENT THIS (~5–10 lines).
 *
 * Goal: same logical content → same bytes. Codegen sometimes produces
 * non-semantic diffs (reordered keys, trailing whitespace, line-ending
 * differences). Without normalization, those trigger spurious patch releases.
 *
 * Suggested strategy (pick from these or roll your own):
 *   - Files ending in `.json`: JSON.parse + JSON.stringify with sorted keys.
 *   - Text files (.ts/.rs/.go/.toml/.md/etc.): convert to string, normalize
 *     line endings (\r\n → \n), trim trailing whitespace per line, drop a
 *     final trailing newline so single-byte deltas don't trigger.
 *   - Binary or unrecognized extensions: return raw as-is.
 *
 * Hint: dispatch on the file extension. Keep it boring.
 *
 * The autoupdate workflow won't function until this is implemented — that's
 * deliberate, since the choice here directly affects which changes ship.
 */
function canonicalize(filePath: string, _raw: Buffer): Buffer {
	throw new Error(`canonicalize not implemented yet for ${filePath} — see TODO in scripts/detect-changes.ts`);
}

const out: Record<string, string> = {};
for (const pkg of PACKAGES) {
	out[pkg] = hashPackage(pkg);
}
process.stdout.write(`${JSON.stringify(out, null, 2)}\n`);
