import * as fs from "node:fs";
import * as path from "node:path";
import type {
	BaseGeneratorCliOptions,
	GameMasterEntryRaw,
	Json,
	JsonObject,
	NamedShapeRenderContext,
	ShapeProperty,
	TemplateFilterOptions,
} from "./types";

export interface CliFlagOptionDefinition<
	TOptions extends BaseGeneratorCliOptions,
> {
	kind: "flag";
	flag: `--${string}`;
	shortFlag?: `-${string}`;
	description: string;
	apply: (options: TOptions) => void;
}

export interface CliValueOptionDefinition<
	TOptions extends BaseGeneratorCliOptions,
> {
	kind: "value";
	flag: `--${string}`;
	shortFlag?: `-${string}`;
	valueLabel: string;
	description: string;
	apply: (options: TOptions, value: string) => void;
}

export type CliOptionDefinition<TOptions extends BaseGeneratorCliOptions> =
	| CliFlagOptionDefinition<TOptions>
	| CliValueOptionDefinition<TOptions>;

export interface GeneratorCliConfig<TOptions extends BaseGeneratorCliOptions> {
	description: string;
	examples: string[];
	defaults: TOptions;
	extraOptions?: CliOptionDefinition<TOptions>[];
}

export interface GeneratedFile {
	fileName: string;
	content: string;
}

export interface GeneratedFileBundle {
	barrelContent: string;
	files: GeneratedFile[];
}

export interface TemplateIdGroup {
	key: string;
	typeName: string;
	entries: GameMasterEntryRaw[];
}

export function createFlagOption<TOptions extends BaseGeneratorCliOptions>(
	flag: `--${string}`,
	shortFlag: `-${string}` | undefined,
	description: string,
	apply: (options: TOptions) => void,
): CliFlagOptionDefinition<TOptions> {
	return {
		kind: "flag",
		flag,
		shortFlag,
		description,
		apply,
	};
}

export function createValueOption<TOptions extends BaseGeneratorCliOptions>(
	flag: `--${string}`,
	shortFlag: `-${string}` | undefined,
	valueLabel: string,
	description: string,
	apply: (options: TOptions, value: string) => void,
): CliValueOptionDefinition<TOptions> {
	return {
		kind: "value",
		flag,
		shortFlag,
		valueLabel,
		description,
		apply,
	};
}

function cloneCliOptions<TOptions extends BaseGeneratorCliOptions>(
	defaults: TOptions,
): TOptions {
	return {
		...defaults,
		prefixes: [...defaults.prefixes],
		matches: [...defaults.matches],
	};
}

function createBaseCliOptions<
	TOptions extends BaseGeneratorCliOptions,
>(): CliOptionDefinition<TOptions>[] {
	return [
		createValueOption(
			"--input",
			"-i",
			"<path>",
			"Path to GAME_MASTER.json",
			(options, value) => {
				options.inputPath = path.resolve(value);
			},
		),
		createValueOption(
			"--output",
			"-o",
			"<path>",
			"Path to generated output file",
			(options, value) => {
				options.outputPath = path.resolve(value);
			},
		),
		createFlagOption(
			"--all",
			undefined,
			"Include all templateIds",
			(options) => {
				options.includeAll = true;
			},
		),
		createValueOption(
			"--prefix",
			undefined,
			"<value>",
			"Include templateIds starting with the given prefix (repeatable)",
			(options, value) => {
				options.prefixes.push(value);
			},
		),
		createValueOption(
			"--match",
			undefined,
			"<value>",
			"Include templateIds containing the given substring (repeatable)",
			(options, value) => {
				options.matches.push(value);
			},
		),
	];
}

function getCliOptions<TOptions extends BaseGeneratorCliOptions>(
	config: GeneratorCliConfig<TOptions>,
): CliOptionDefinition<TOptions>[] {
	return [...createBaseCliOptions<TOptions>(), ...(config.extraOptions ?? [])];
}

function formatOptionFlags<TOptions extends BaseGeneratorCliOptions>(
	option: CliOptionDefinition<TOptions>,
): string {
	const flags: string[] = [option.flag];

	if (option.shortFlag) {
		flags.push(option.shortFlag);
	}

	const joinedFlags = flags
		.map((flag) =>
			option.kind === "value" ? `${flag} ${option.valueLabel}` : flag,
		)
		.join(", ");

	return `  ${joinedFlags}`;
}

function formatHelpLine(label: string, description: string): string {
	return `${label.padEnd(30)}${description}`;
}

export function formatGeneratorHelp<TOptions extends BaseGeneratorCliOptions>(
	config: GeneratorCliConfig<TOptions>,
): string {
	const optionLines = getCliOptions(config).map((option) =>
		formatHelpLine(formatOptionFlags(option), option.description),
	);

	return [
		config.description,
		"",
		"Options:",
		...optionLines,
		formatHelpLine("  --help, -h", "Show this help"),
		"",
		"Examples:",
		...config.examples.map((example) => `  ${example}`),
	].join("\n");
}

export function normalizeTemplateFilterOptions<
	TOptions extends TemplateFilterOptions,
>(options: TOptions): TOptions {
	if (
		!options.includeAll &&
		options.prefixes.length === 0 &&
		options.matches.length === 0
	) {
		options.includeAll = true;
	}

	return options;
}

export function parseGeneratorCliArgs<TOptions extends BaseGeneratorCliOptions>(
	argv: string[],
	config: GeneratorCliConfig<TOptions>,
): TOptions {
	const options = cloneCliOptions(config.defaults);
	const cliOptions = getCliOptions(config);

	for (let index = 0; index < argv.length; index += 1) {
		const arg = argv[index];

		if (arg === "--help" || arg === "-h") {
			console.log(formatGeneratorHelp(config));
			process.exit(0);
		}

		const option = cliOptions.find(
			(candidate) => candidate.flag === arg || candidate.shortFlag === arg,
		);

		if (!option) {
			throw new Error(`Unknown argument: ${arg}`);
		}

		if (option.kind === "value") {
			const value = argv[++index];
			if (!value) {
				throw new Error(`Missing value for ${option.flag}`);
			}

			option.apply(options, value);
			continue;
		}

		option.apply(options);
	}

	return normalizeTemplateFilterOptions(options);
}

export function isJsonObject(value: Json): value is JsonObject {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function shouldIncludeTemplateId(
	templateId: string,
	options: TemplateFilterOptions,
): boolean {
	if (options.includeAll) {
		return true;
	}

	if (options.prefixes.some((prefix) => templateId.startsWith(prefix))) {
		return true;
	}

	if (options.matches.some((match) => templateId.includes(match))) {
		return true;
	}

	return false;
}

export function filterGameMasterEntries(
	entries: GameMasterEntryRaw[],
	options: TemplateFilterOptions,
): GameMasterEntryRaw[] {
	const filteredEntries = entries
		.filter(
			(entry) =>
				entry &&
				typeof entry.templateId === "string" &&
				isJsonObject(entry.data as Json),
		)
		.filter((entry) => shouldIncludeTemplateId(entry.templateId, options));

	if (filteredEntries.length === 0) {
		throw new Error("No matching templateIds found for the selected filters.");
	}

	return filteredEntries;
}

export function summarizeTemplateFilters(
	options: TemplateFilterOptions,
): string {
	return [
		options.includeAll ? "all" : null,
		...options.prefixes.map((prefix) => `prefix:${prefix}`),
		...options.matches.map((match) => `match:${match}`),
	]
		.filter((value): value is string => value !== null)
		.join(", ");
}

export function stableStringify(value: unknown): string {
	if (value === null || typeof value !== "object") {
		return JSON.stringify(value);
	}

	if (Array.isArray(value)) {
		return `[${value.map(stableStringify).join(",")}]`;
	}

	const entries = Object.entries(value as Record<string, unknown>).sort(
		([left], [right]) => left.localeCompare(right),
	);

	return `{${entries
		.map(([key, child]) => `${JSON.stringify(key)}:${stableStringify(child)}`)
		.join(",")}}`;
}

export function createShapeKey<TShape>(
	shape: TShape,
	serializeShape: (shape: TShape) => unknown,
): string {
	return stableStringify(serializeShape(shape));
}

export function dedupeByKey<TValue>(
	values: TValue[],
	getKey: (value: TValue) => string,
): TValue[] {
	const seen = new Map<string, TValue>();

	for (const value of values) {
		seen.set(getKey(value), value);
	}

	return [...seen.values()];
}

export function inferObjectShapeProperties<TShape>(
	value: JsonObject,
	inferShape: (value: Json) => TShape,
): Map<string, ShapeProperty<TShape>> {
	const props = new Map<string, ShapeProperty<TShape>>();

	for (const [key, child] of Object.entries(value)) {
		props.set(key, { shape: inferShape(child), optional: false });
	}

	return props;
}

export function mergeObjectShapeProperties<TShape>(
	leftProps: Map<string, ShapeProperty<TShape>>,
	rightProps: Map<string, ShapeProperty<TShape>>,
	mergeShapes: (left: TShape, right: TShape) => TShape,
): Map<string, ShapeProperty<TShape>> {
	const keys = new Set([...leftProps.keys(), ...rightProps.keys()]);
	const props = new Map<string, ShapeProperty<TShape>>();

	for (const key of keys) {
		const left = leftProps.get(key);
		const right = rightProps.get(key);

		if (left && right) {
			props.set(key, {
				shape: mergeShapes(left.shape, right.shape),
				optional: left.optional || right.optional,
			});
			continue;
		}

		if (left) {
			props.set(key, { shape: left.shape, optional: true });
			continue;
		}

		if (right) {
			props.set(key, { shape: right.shape, optional: true });
		}
	}

	return props;
}

export function createNamedShapeRenderContext(): NamedShapeRenderContext {
	return {
		declarations: [],
		seenNames: new Set(),
		emittedShapes: new Map(),
	};
}

export function createUniqueName(base: string, seenNames: Set<string>): string {
	let name = base;
	let counter = 2;

	while (seenNames.has(name)) {
		name = `${base}${counter}`;
		counter += 1;
	}

	seenNames.add(name);
	return name;
}

export function toPascalCase(input: string): string {
	const cleaned = input
		.replace(/[^a-zA-Z0-9]+/g, " ")
		.trim()
		.split(/\s+/)
		.filter(Boolean)
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
		.join("")
		.replace(/^[^a-zA-Z]+/, "T");

	return cleaned || "Anonymous";
}

export function extractTemplateIdFirstWord(templateId: string): string {
	const firstWord = templateId.match(/[A-Za-z0-9]+/)?.[0];
	return firstWord || "misc";
}

export function toGeneratedFileSegment(input: string): string {
	const normalized = input
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/-+/g, "-")
		.replace(/^-+|-+$/g, "");

	return normalized || "misc";
}

export function groupEntriesByTemplateIdFirstWord(
	entries: GameMasterEntryRaw[],
): TemplateIdGroup[] {
	const groups = new Map<string, TemplateIdGroup>();

	for (const entry of entries) {
		const firstWord = extractTemplateIdFirstWord(entry.templateId);
		const key = toGeneratedFileSegment(firstWord);
		const existing = groups.get(key);

		if (existing) {
			existing.entries.push(entry);
			continue;
		}

		groups.set(key, {
			key,
			typeName: toPascalCase(firstWord),
			entries: [entry],
		});
	}

	return [...groups.values()];
}

export function createGeneratedSiblingFileName(
	outputPath: string,
	groupKey: string,
): string {
	const extension = path.extname(outputPath);
	const stem = path.basename(outputPath, extension);
	return `${stem}.${groupKey}.generated${extension}`;
}

export function isGeneratedSiblingFile(
	outputPath: string,
	fileName: string,
): boolean {
	const extension = path.extname(outputPath);
	const stem = path.basename(outputPath, extension);

	return (
		fileName.startsWith(`${stem}.`) &&
		fileName.endsWith(`.generated${extension}`)
	);
}

async function listGeneratedFilesRecursive(
	rootDir: string,
	extension: string,
	currentDir = rootDir,
): Promise<string[]> {
	const entries = await fs.promises.readdir(currentDir, {
		withFileTypes: true,
	});
	const files: string[] = [];

	for (const entry of entries) {
		const entryPath = path.join(currentDir, entry.name);

		if (entry.isDirectory()) {
			files.push(
				...(await listGeneratedFilesRecursive(rootDir, extension, entryPath)),
			);
			continue;
		}

		if (entry.isFile() && entry.name.endsWith(`.generated${extension}`)) {
			files.push(path.relative(rootDir, entryPath));
		}
	}

	return files;
}

export async function writeGeneratedFileBundle(
	outputPath: string,
	bundle: GeneratedFileBundle,
): Promise<string[]> {
	const outputDir = path.dirname(outputPath);
	await fs.promises.mkdir(outputDir, { recursive: true });
	const nextGeneratedFiles = new Set(bundle.files.map((file) => file.fileName));
	const extension = path.extname(outputPath);
	const existingGeneratedFiles = await listGeneratedFilesRecursive(
		outputDir,
		extension,
	);

	await Promise.all(
		existingGeneratedFiles
			.filter((fileName) => !nextGeneratedFiles.has(fileName))
			.map((fileName) => fs.promises.unlink(path.join(outputDir, fileName))),
	);

	await Bun.write(outputPath, bundle.barrelContent);
	await Promise.all(
		bundle.files.map(async (file) => {
			const filePath = path.join(outputDir, file.fileName);
			await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
			await Bun.write(filePath, file.content);
		}),
	);

	return [
		outputPath,
		...bundle.files.map((file) => path.join(outputDir, file.fileName)),
	];
}
