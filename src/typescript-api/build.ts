import { spawn } from "node:child_process";
import { BUILD_TSCONFIG } from "./constants.ts";

/**
 * Invoke `bunx tsc -p packages/ts-api/tsconfig.build.json`.
 * Resolves on success, rejects on non-zero exit.
 */
export function runTsc(): Promise<void> {
	return new Promise((resolve, reject) => {
		const proc = spawn("bunx", ["tsc", "-p", BUILD_TSCONFIG], {
			stdio: "inherit",
		});
		proc.on("error", reject);
		proc.on("exit", (code) => {
			if (code === 0) resolve();
			else reject(new Error(`tsc exited with code ${code}`));
		});
	});
}
