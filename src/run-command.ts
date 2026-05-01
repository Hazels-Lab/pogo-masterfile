import { spawn } from "node:child_process";

/**
 * Spawn a child process with stdio inherited from the parent.
 * Resolves on exit code 0, rejects on non-zero exit or spawn error.
 */
export function runCommand(cmd: string, args: string[], opts?: { cwd?: string }): Promise<void> {
	return new Promise((resolve, reject) => {
		const proc = spawn(cmd, args, { stdio: "inherit", ...opts });
		proc.on("error", reject);
		proc.on("exit", (code) => {
			if (code === 0) resolve();
			else reject(new Error(`${cmd} exited with code ${code}`));
		});
	});
}
