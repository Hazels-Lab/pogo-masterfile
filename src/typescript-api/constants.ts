import { join } from "node:path";

const REPO_ROOT = join(import.meta.dir, "..", "..");

export const PACKAGE_DIR = join(REPO_ROOT, "packages", "ts-api");
export const SRC_OUT_DIR = join(PACKAGE_DIR, "src");
export const DIST_OUT_DIR = join(PACKAGE_DIR, "dist");
export const BUILD_TSCONFIG = join(PACKAGE_DIR, "tsconfig.build.json");

export const TEMPLATES_DIR = join(REPO_ROOT, "src", "typescript-api", "templates");
export const TEMPLATES_STUBS_DIR = join(REPO_ROOT, "src", "typescript-api", "templates-stubs");

export const DEFAULT_MASTERFILE_URL =
	"https://raw.githubusercontent.com/alexelgt/game_masters/refs/heads/master/GAME_MASTER.json";
