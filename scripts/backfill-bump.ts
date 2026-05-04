// Run on push to main BEFORE push-release-tags.ts. For each published
// package whose tracked files changed between HEAD~1 and HEAD without a
// matching bump in .versions.json, bump the patch version (with cascade)
// and open a PR labeled `autoupdate` so auto-merge.yml squash-merges it
// onto main. The squash commit triggers tag-after-merge.yml again; that
// second run pushes the tags. No-op when versions are already bumped
// (the autoupdate path itself, or a re-entry after our own merge) or
// when the changed files don't qualify as release-worthy.
//
// Why a PR instead of `git push origin HEAD:main`: GitHub suppresses the
// `push:tags:` webhook for tags that point at commits pushed via `git
// push` from inside a workflow run, even with a fully-scoped PAT. The
// suppression does NOT apply to commits created by squash-merge, which
// is how the autoupdate flow has always worked. Mirroring that path
// keeps the release chain firing end-to-end.
//
// Usage: bun run scripts/backfill-bump.ts
// Required env: GH_TOKEN (for `gh pr create`).

import { applyBumps } from "./bump-versions";

const PACKAGE_PATHS = [
	"packages/ts",
	"packages/ts-api",
	"packages/rust-macros",
	"packages/rust",
	"packages/rust-api",
	"packages/go",
	"packages/go-api",
] as const;

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

function readVersionsAtRef(ref: string): Record<string, string> | null {
	const proc = Bun.spawnSync({
		cmd: ["git", "show", `${ref}:.versions.json`],
		stdout: "pipe",
		stderr: "pipe",
	});
	if (proc.exitCode !== 0) return null;
	return JSON.parse(new TextDecoder().decode(proc.stdout)) as Record<string, string>;
}

function listChangedFiles(pkgPath: string): string[] {
	const out = git("diff", "--name-only", "HEAD~1", "HEAD", "--", pkgPath);
	return out.split("\n").filter(Boolean);
}

// TODO: YOUR POLICY GOES HERE.
//
// Return true when this set of file changes inside `pkgPath` should
// trigger a patch-version release for that package.
//
// `changedFiles` is non-empty and every entry is a path under `pkgPath`,
// e.g. for pkgPath="packages/ts":
//   ["packages/ts/dist/deprecated.d.ts", "packages/ts/CHANGELOG.md"]
//
// Trade-offs to weigh:
//  - CHANGELOG.md: the autoupdate flow writes CHANGELOG entries TOGETHER with
//    a version bump, so this idempotency check upstream already filters that
//    case out. A standalone PR that only edits CHANGELOG.md is the question:
//    do you want it to publish, or no?
//  - README.md / docs-only edits: same question.
//  - package.json / Cargo.toml / go.mod: these affect the published artifact's
//    metadata. A dependency bump in Cargo.toml IS release-worthy; a typo fix
//    in a "description" field arguably isn't. Simplest call is "yes, always".
//  - dist/*.d.ts, src/**, *.go, *.rs: the actual source — always release.
//
// Keep the rule simple. The default many repos use is "any tracked file in
// the package directory triggers a release"; the most common refinement is
// "...except CHANGELOG.md and README.md when those are the ONLY changes".
function isReleaseWorthyChange(_pkgPath: string, changedFiles: string[]): boolean {
	return changedFiles.some((file) => {
		const base = file.split("/").pop() ?? "";
		return file.endsWith(".rs") || file.endsWith(".go") || file.endsWith(".d.ts") || base === "Cargo.toml" || base === "go.mod" || base === "package.json";
	});
}

const head = readVersionsAtRef("HEAD");
const prev = readVersionsAtRef("HEAD~1");
if (!head || !prev) {
	console.log("No prior .versions.json to compare against — skipping backfill.");
	process.exit(0);
}

const needsBump: string[] = [];
for (const pkg of PACKAGE_PATHS) {
	const files = listChangedFiles(pkg);
	if (files.length === 0) continue;
	if (head[pkg] !== prev[pkg]) {
		console.log(`${pkg}: already bumped in this push (${prev[pkg]} -> ${head[pkg]}) — skipping`);
		continue;
	}
	if (!isReleaseWorthyChange(pkg, files)) {
		console.log(`${pkg}: changed files not release-worthy — skipping`);
		continue;
	}
	console.log(`${pkg}: needs backfill bump (${files.length} file(s) changed)`);
	needsBump.push(pkg);
}

if (needsBump.length === 0) {
	console.log("No backfill bumps needed.");
	process.exit(0);
}

const mergeSha = git("rev-parse", "HEAD");
const bumps = applyBumps(new Set(needsBump), `Backfill release from merge commit \`${mergeSha}\`.`);
if (Object.keys(bumps).length === 0) {
	console.log("applyBumps returned no bumps — nothing to commit.");
	process.exit(0);
}

const shortSha = git("rev-parse", "--short", "HEAD");
const branch = `backfill/${shortSha}`;
const bumpedList = Object.keys(bumps).join(", ");
const title = `chore(release): backfill version bumps for ${bumpedList}`;
const body = [
	`Automated backfill release for manual package edits in commit \`${mergeSha}\`.`,
	"",
	"This PR is opened by `tag-after-merge.yml` because the package files in",
	"the parent commit qualified for a release but no version bump was",
	"included. Auto-merging via the `autoupdate` label produces a squash",
	"commit that the next `tag-after-merge.yml` run uses to push release tags.",
	"",
	"Bumped:",
	...Object.entries(bumps).map(([p, v]) => `- ${p} → \`${v}\``),
].join("\n");

git("checkout", "-b", branch);
git("add", "-A");
git("commit", "-m", title);
git("push", "origin", `HEAD:refs/heads/${branch}`);

function gh(...args: string[]): string {
	const proc = Bun.spawnSync({
		cmd: ["gh", ...args],
		stdout: "pipe",
		stderr: "pipe",
	});
	if (proc.exitCode !== 0) {
		const err = new TextDecoder().decode(proc.stderr);
		throw new Error(`gh ${args.join(" ")}: ${err}`);
	}
	return new TextDecoder().decode(proc.stdout).trim();
}

const prUrl = gh("pr", "create", "--base", "main", "--head", branch, "--title", title, "--body", body, "--label", "autoupdate");
console.log(`Opened backfill PR: ${prUrl}`);
