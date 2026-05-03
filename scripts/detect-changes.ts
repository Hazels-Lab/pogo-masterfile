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

// Normalize content so non-semantic diffs (reordered JSON keys, trailing
// whitespace, line-ending differences) don't bump versions. Anything we don't
// recognize as text passes through byte-identical.
function canonicalize(filePath: string, raw: Buffer): Buffer {
	const lower = filePath.toLowerCase();

	// JSON: parse and re-emit with recursively sorted keys.
	if (lower.endsWith(".json")) {
		try {
			return Buffer.from(stableStringify(JSON.parse(raw.toString("utf8"))));
		} catch {
			// Malformed JSON — fall through to text normalization rather than
			// silently passing it through; we'd rather notice odd files.
		}
	}

	// Text source: normalize line endings, drop trailing whitespace per line,
	// collapse trailing blank lines into a single \n.
	if (isTextLike(lower)) {
		const text = raw
			.toString("utf8")
			.replace(/\r\n/g, "\n")
			.split("\n")
			.map((line) => line.replace(/[\t ]+$/, ""))
			.join("\n")
			.replace(/\n+$/, "\n");
		return Buffer.from(text, "utf8");
	}

	// Unknown extension — assume binary and pass through unchanged.
	return raw;
}

function isTextLike(lowerPath: string): boolean {
	if (
		lowerPath.endsWith(".ts") ||
		lowerPath.endsWith(".tsx") ||
		lowerPath.endsWith(".js") ||
		lowerPath.endsWith(".rs") ||
		lowerPath.endsWith(".go") ||
		lowerPath.endsWith(".toml") ||
		lowerPath.endsWith(".md") ||
		lowerPath.endsWith(".mod") ||
		lowerPath.endsWith(".sum") ||
		lowerPath.endsWith(".json")
	) {
		return true;
	}
	// Extensionless tracked text files (LICENSE, etc.).
	const base = lowerPath.split("/").pop() ?? "";
	return base === "license" || base === "license.txt";
}

function stableStringify(value: unknown): string {
	if (value === null || typeof value !== "object") {
		return JSON.stringify(value);
	}
	if (Array.isArray(value)) {
		return `[${value.map(stableStringify).join(",")}]`;
	}
	const obj = value as Record<string, unknown>;
	const keys = Object.keys(obj).sort();
	return `{${keys.map((k) => `${JSON.stringify(k)}:${stableStringify(obj[k])}`).join(",")}}`;
}

const out: Record<string, string> = {};
for (const pkg of PACKAGES) {
	out[pkg] = hashPackage(pkg);
}
process.stdout.write(`${JSON.stringify(out, null, 2)}\n`);
