import { GAME_MASTER_URL } from "./constants.ts";
import { generateGo } from "./go/generate.ts";
import { generateGoApi } from "./go-api/generate.ts";
import type { Entry } from "./group.ts";
import { configureFloatFieldHints, scanFloatFields } from "./infer.ts";
import { generateRust } from "./rust/generate.ts";
import { generateRustApi } from "./rust-api/generate.ts";
import { generateTypeScript } from "./typescript/generate.ts";
import { generateTypeScriptApi } from "./typescript-api/generate.ts";

type Mode = "all" | "rust" | "go" | "ts" | "ts-loose";

const USAGE = `Usage: bun run src/generate.ts [flag]

  (no flag)         Generate all targets (Rust + Go + literal TS).
  --rust-only       Generate only Rust types and Rust runtime API.
  --go-only         Generate only Go types and Go runtime API.
  --ts-only         Generate only TS types (mostly literal — current behavior) and TS runtime API.
  --ts-loose-only   Generate only TS types in "less literal" mode and TS runtime API.
                    Widens string/number/boolean literals to their base types;
                    keeps tuples (and other structural types) intact.`;

function parseMode(argv: string[]): Mode {
	const flags = argv.filter((a) => a.startsWith("--"));
	if (flags.length === 0) return "all";
	if (flags.length > 1) {
		throw new Error(`Pass at most one mode flag; got: ${flags.join(", ")}\n\n${USAGE}`);
	}
	switch (flags[0]) {
		case "--rust-only":
			return "rust";
		case "--go-only":
			return "go";
		case "--ts-only":
			return "ts";
		case "--ts-loose-only":
			return "ts-loose";
		case "--help":
		case "-h":
			console.log(USAGE);
			return process.exit(0);
		default:
			throw new Error(`Unknown flag: ${flags[0]}\n\n${USAGE}`);
	}
}

async function fetchMasterfile(): Promise<{ entries: Entry[]; rawJson: string }> {
	const resp = await fetch(GAME_MASTER_URL);
	if (!resp.ok) {
		throw new Error(`fetch failed: ${resp.status} ${resp.statusText}`);
	}
	const rawJson = await resp.text();
	const entries = JSON.parse(rawJson) as Entry[];
	return { entries, rawJson };
}

async function runMode(mode: Mode, entries: Entry[]): Promise<void> {
	const genTs = async (loose: boolean) => {
		console.time("typescript");
		await generateTypeScript(entries, { loose });
		await generateTypeScriptApi(entries);
		console.timeEnd("typescript");
	};
	const genGo = async () => {
		console.time("go");
		await generateGo(entries);
		await generateGoApi(entries);
		console.timeEnd("go");
	};
	const genRs = async () => {
		console.time("rs");
		await generateRust(entries);
		await generateRustApi(entries);
		console.timeEnd("rs");
	};

	switch (mode) {
		case "all":
			await Promise.all([genTs(false), genRs(), genGo()]);
			return;
		case "rust":
			await genRs();
			return;
		case "go":
			await genGo();
			return;
		case "ts":
			await genTs(false);
			return;
		case "ts-loose":
			// ts-api templates import from `pogo-masterfile-types/lookup-table` and
			// rely on per-entry narrow types — neither exists in loose mode. Skip
			// the runtime API when emitting loose types.
			await genTs(true);
			return;
	}
}

async function main(): Promise<void> {
	const mode = parseMode(process.argv.slice(2));

	console.log(`Fetching ${GAME_MASTER_URL}...`);
	const { entries, rawJson } = await fetchMasterfile();
	console.log(`Fetched ${entries.length} entries.`);

	// Pre-scan the raw JSON text for fields that appear with decimal/exponent
	// syntax. JS's JSON.parse collapses "1.0" and "1" into the same Number, so
	// per-value inference can't recover the int-vs-float distinction the source
	// preserves; we propagate it via this hint set.
	const floatFields = scanFloatFields(rawJson);
	configureFloatFieldHints(floatFields);
	console.log(`Detected ${floatFields.size} float-typed field names from source.`);

	console.log(`Mode: ${mode}`);
	await runMode(mode, entries);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
