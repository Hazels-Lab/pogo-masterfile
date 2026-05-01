import { join } from "node:path";

const REPO_ROOT = join(import.meta.dir, "..", "..");

export const PACKAGE_DIR = join(REPO_ROOT, "packages", "go-api");
export const ACCESSOR_OUT_DIR = join(PACKAGE_DIR, "accessor");
export const TEMPLATES_DIR = join(REPO_ROOT, "src", "go-api", "templates");

export const DEFAULT_MASTERFILE_URL = "https://raw.githubusercontent.com/alexelgt/game_masters/refs/heads/master/GAME_MASTER.json";
