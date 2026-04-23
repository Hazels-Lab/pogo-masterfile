import * as path from "node:path";
import type { GeneratedFileBundle, GeneratorCliConfig } from "./codegen-core";
import {
	createNamedShapeRenderContext,
	createShapeKey,
	createUniqueName,
	dedupeByKey,
	filterGameMasterEntries,
	inferObjectShapeProperties,
	mergeObjectShapeProperties,
	parseGeneratorCliArgs,
	summarizeTemplateFilters,
	toPascalCase,
	writeGeneratedFileBundle,
} from "./codegen-core";
import type {
	BaseGeneratorCliOptions,
	GameMasterEntryRaw,
	Json,
	JsonObject,
	NamedShapeRenderContext,
	ShapeProperty,
} from "./types";

type Shape =
	| { kind: "null" }
	| { kind: "boolean" }
	| { kind: "number" }
	| { kind: "string" }
	| { kind: "array"; element: Shape }
	| { kind: "object"; props: Map<string, ShapeProperty<Shape>> }
	| { kind: "union"; variants: Shape[] };

interface CliOptions extends BaseGeneratorCliOptions {}

type RenderContext = NamedShapeRenderContext;

type IdentityLookupKind =
	| "pokemonSettings"
	| "pokemonExtendedSettings"
	| "genderSettings";

interface ModuleRoute {
	key: string;
	segments: string[];
	typeName: string;
	family: string;
	unionNames: string[];
	identityLookupKind?: IdentityLookupKind;
}

interface ClassifiedEntry {
	entry: GameMasterEntryRaw;
	payloadKey: string;
	route: ModuleRoute;
}

interface EntryTypeInfo {
	templateId: string;
	entryTypeName: string;
	dexId?: string;
	pokemonId?: string;
}

interface GroupModuleOutput {
	fileName: string;
	importPath: string;
	entryTypeName: string;
	byTemplateIdName: string;
	byDexIdName?: string;
	byPokemonIdName?: string;
	dexIdMap: Map<string, string[]>;
	pokemonIdMap: Map<string, string[]>;
	content: string;
	route: ModuleRoute;
}

interface StaticRouteDefinition {
	segments: string[];
	family: string;
	unionNames: string[];
}

const RESERVED = new Set([
	"string",
	"number",
	"package",
	"public",
	"private",
	"function",
	"default",
	"class",
	"interface",
	"type",
	"var",
	"const",
	"let",
	"new",
	"delete",
	"export",
	"import",
	"extends",
	"implements",
	"enum",
	"await",
]);

const TYPESCRIPT_CLI_CONFIG = {
	description: "Generate TypeScript types from a GAME_MASTER.json file.",
	examples: [
		"tsx generate-game-master-types.ts --input ./GAME_MASTER.json --output ./all.types.ts --all",
		"tsx generate-game-master-types.ts --input ./GAME_MASTER.json --output ./avatar.types.ts --prefix AVATAR_",
		"tsx generate-game-master-types.ts --input ./GAME_MASTER.json --output ./filtered.types.ts --prefix AVATAR_ --match FEATURE_GATE",
	],
	defaults: {
		inputPath: path.resolve("GAME_MASTER.json"),
		outputPath: path.resolve(
			process.cwd(),
			"./packages/typescript/src/index.ts",
		),
		includeAll: false,
		prefixes: [],
		matches: [],
	},
} satisfies GeneratorCliConfig<CliOptions>;

const FAMILY_ORDER = new Map(
	[
		"pokemon",
		"moves",
		"avatar",
		"commerce",
		"badges",
		"forms",
		"items",
		"combat",
		"quests",
		"misc",
	].map((family, index) => [family, index]),
);

const POKEMON_SUBFAMILY_ORDER = new Map(
	[
		"settings",
		"extended",
		"gender",
		"family",
		"type-chart",
		"scale",
		"home",
		"tags",
		"upgrades",
		"fx",
	].map((family, index) => [family, index]),
);

const GENERATION_ORDER = new Map(
	[
		"gen1",
		"gen2",
		"gen3",
		"gen4",
		"gen5",
		"gen6",
		"gen7",
		"gen8",
		"gen9",
		"special",
	].map((generation, index) => [generation, index]),
);

const STATIC_ROUTE_BY_PAYLOAD_KEY = new Map<string, StaticRouteDefinition>([
	[
		"pokemonFamily",
		{
			segments: ["pokemon", "family"],
			family: "pokemon",
			unionNames: ["PokemonMasterfileEntry", "PokemonFamilyEntry"],
		},
	],
	[
		"typeEffective",
		{
			segments: ["pokemon", "type-chart"],
			family: "pokemon",
			unionNames: ["PokemonMasterfileEntry"],
		},
	],
	[
		"pokemonScaleSettings",
		{
			segments: ["pokemon", "scale"],
			family: "pokemon",
			unionNames: ["PokemonMasterfileEntry"],
		},
	],
	[
		"pokemonHomeSettings",
		{
			segments: ["pokemon", "home"],
			family: "pokemon",
			unionNames: ["PokemonMasterfileEntry"],
		},
	],
	[
		"pokemonHomeFormReversions",
		{
			segments: ["pokemon", "home"],
			family: "pokemon",
			unionNames: ["PokemonMasterfileEntry"],
		},
	],
	[
		"pokemonHomeEnergyCosts",
		{
			segments: ["pokemon", "home"],
			family: "pokemon",
			unionNames: ["PokemonMasterfileEntry"],
		},
	],
	[
		"pokemonTagSettings",
		{
			segments: ["pokemon", "tags"],
			family: "pokemon",
			unionNames: ["PokemonMasterfileEntry"],
		},
	],
	[
		"pokemonUpgrades",
		{
			segments: ["pokemon", "upgrades"],
			family: "pokemon",
			unionNames: ["PokemonMasterfileEntry"],
		},
	],
	[
		"pokemonFxSettings",
		{
			segments: ["pokemon", "fx"],
			family: "pokemon",
			unionNames: ["PokemonMasterfileEntry"],
		},
	],
	[
		"moveSettings",
		{
			segments: ["moves", "settings"],
			family: "moves",
			unionNames: ["MoveMasterfileEntry"],
		},
	],
	[
		"moveSequenceSettings",
		{
			segments: ["moves", "sequences"],
			family: "moves",
			unionNames: ["MoveMasterfileEntry"],
		},
	],
	[
		"combatMove",
		{
			segments: ["moves", "combat"],
			family: "moves",
			unionNames: ["MoveMasterfileEntry"],
		},
	],
	[
		"nonCombatMoveSettings",
		{
			segments: ["moves", "non-combat"],
			family: "moves",
			unionNames: ["MoveMasterfileEntry"],
		},
	],
	[
		"avatarCustomization",
		{
			segments: ["avatar", "customization"],
			family: "avatar",
			unionNames: [],
		},
	],
	[
		"avatarItemDisplay",
		{
			segments: ["avatar", "item-display"],
			family: "avatar",
			unionNames: [],
		},
	],
	[
		"iapItemDisplay",
		{
			segments: ["commerce", "items"],
			family: "commerce",
			unionNames: [],
		},
	],
	[
		"eventPassTierSettings",
		{
			segments: ["commerce", "event-pass"],
			family: "commerce",
			unionNames: [],
		},
	],
	[
		"limitedPurchaseSkuSettings",
		{
			segments: ["commerce", "limited-purchase"],
			family: "commerce",
			unionNames: [],
		},
	],
	[
		"iapCategoryDisplay",
		{
			segments: ["commerce", "categories"],
			family: "commerce",
			unionNames: [],
		},
	],
	[
		"badgeSettings",
		{
			segments: ["badges", "settings"],
			family: "badges",
			unionNames: [],
		},
	],
	[
		"locationCardSettings",
		{
			segments: ["badges", "location-cards"],
			family: "badges",
			unionNames: [],
		},
	],
	[
		"formSettings",
		{
			segments: ["forms", "settings"],
			family: "forms",
			unionNames: [],
		},
	],
	[
		"itemSettings",
		{
			segments: ["items", "settings"],
			family: "items",
			unionNames: ["ItemMasterfileEntry"],
		},
	],
	[
		"levelUpRewards",
		{
			segments: ["items", "level-up-rewards"],
			family: "items",
			unionNames: ["ItemMasterfileEntry"],
		},
	],
	[
		"combatLeague",
		{
			segments: ["combat", "leagues"],
			family: "combat",
			unionNames: [],
		},
	],
	[
		"combatRankingProtoSettings",
		{
			segments: ["combat", "ranking"],
			family: "combat",
			unionNames: [],
		},
	],
	[
		"vsSeekerLoot",
		{
			segments: ["combat", "vs-seeker"],
			family: "combat",
			unionNames: [],
		},
	],
	[
		"combatType",
		{
			segments: ["combat", "types"],
			family: "combat",
			unionNames: [],
		},
	],
	[
		"combatNpcTrainer",
		{
			segments: ["combat", "npc-trainers"],
			family: "combat",
			unionNames: [],
		},
	],
	[
		"clientQuestTemplate",
		{
			segments: ["quests", "client"],
			family: "quests",
			unionNames: [],
		},
	],
	[
		"evolutionQuestTemplate",
		{
			segments: ["quests", "evolution"],
			family: "quests",
			unionNames: [],
		},
	],
]);

export function parseTypescriptArgs(argv: string[]): CliOptions {
	return parseGeneratorCliArgs(argv, TYPESCRIPT_CLI_CONFIG);
}

function isObjectShape(
	shape: Shape,
): shape is Extract<Shape, { kind: "object" }> {
	return shape.kind === "object";
}

function isUnionShape(
	shape: Shape,
): shape is Extract<Shape, { kind: "union" }> {
	return shape.kind === "union";
}

function serializeShape(shape: Shape): unknown {
	switch (shape.kind) {
		case "null":
		case "boolean":
		case "number":
		case "string":
			return shape;
		case "array":
			return { kind: "array", element: serializeShape(shape.element) };
		case "union":
			return {
				kind: "union",
				variants: shape.variants
					.map(serializeShape)
					.sort((left, right) =>
						createShapeKey(left, (value) => value).localeCompare(
							createShapeKey(right, (value) => value),
						),
					),
			};
		case "object":
			return {
				kind: "object",
				props: [...shape.props.entries()]
					.sort(([left], [right]) => left.localeCompare(right))
					.map(([key, value]) => [
						key,
						{ optional: value.optional, shape: serializeShape(value.shape) },
					]),
			};
	}
}

function shapeKey(shape: Shape): string {
	return createShapeKey(shape, serializeShape);
}

function dedupeShapes(shapes: Shape[]): Shape[] {
	return dedupeByKey(shapes, shapeKey);
}

function inferShape(value: Json): Shape {
	if (value === null) {
		return { kind: "null" };
	}

	if (typeof value === "boolean") {
		return { kind: "boolean" };
	}

	if (typeof value === "number") {
		return { kind: "number" };
	}

	if (typeof value === "string") {
		return { kind: "string" };
	}

	if (Array.isArray(value)) {
		if (value.length === 0) {
			return { kind: "array", element: { kind: "union", variants: [] } };
		}

		const mergedElement = value.map(inferShape).reduce(mergeShapes);
		return { kind: "array", element: mergedElement };
	}

	return {
		kind: "object",
		props: inferObjectShapeProperties(value, inferShape),
	};
}

function mergeShapes(left: Shape, right: Shape): Shape {
	if (shapeKey(left) === shapeKey(right)) {
		return left;
	}

	if (isUnionShape(left)) {
		return {
			kind: "union",
			variants: dedupeShapes([
				...left.variants,
				...(isUnionShape(right) ? right.variants : [right]),
			]),
		};
	}

	if (isUnionShape(right)) {
		return {
			kind: "union",
			variants: dedupeShapes([left, ...right.variants]),
		};
	}

	if (isObjectShape(left) && isObjectShape(right)) {
		return {
			kind: "object",
			props: mergeObjectShapeProperties(left.props, right.props, mergeShapes),
		};
	}

	if (left.kind === "array" && right.kind === "array") {
		return {
			kind: "array",
			element: mergeShapes(left.element, right.element),
		};
	}

	return { kind: "union", variants: dedupeShapes([left, right]) };
}

function sanitizeIdentifier(input: string): string {
	const cleaned = input
		.replace(/[^a-zA-Z0-9_$]+/g, " ")
		.trim()
		.split(/\s+/)
		.filter(Boolean)
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
		.join("")
		.replace(/^[^a-zA-Z_$]+/, "T");

	const fallback = cleaned || "Anonymous";
	return RESERVED.has(fallback) ? `${fallback}Type` : fallback;
}

function quoteProp(key: string): string {
	return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(key) && !RESERVED.has(key)
		? key
		: JSON.stringify(key);
}

function uniqueName(base: string, ctx: RenderContext): string {
	return createUniqueName(base, ctx.seenNames);
}

function renderShape(
	shape: Shape,
	suggestedName: string,
	ctx: RenderContext,
): string {
	const key = shapeKey(shape);
	const existing = ctx.emittedShapes.get(key);

	if (existing) {
		return existing;
	}

	switch (shape.kind) {
		case "null":
			return "null";
		case "boolean":
			return "boolean";
		case "number":
			return "number";
		case "string":
			return "string";
		case "union":
			if (shape.variants.length === 0) {
				return "unknown";
			}

			return dedupeShapes(shape.variants)
				.map((variant) => renderShape(variant, suggestedName, ctx))
				.join(" | ");
		case "array": {
			const elementType = renderShape(
				shape.element,
				`${suggestedName}Item`,
				ctx,
			);
			return `(${elementType})[]`;
		}
		case "object": {
			const interfaceName = uniqueName(sanitizeIdentifier(suggestedName), ctx);
			ctx.emittedShapes.set(key, interfaceName);

			const body = [...shape.props.entries()]
				.sort(([left], [right]) => left.localeCompare(right))
				.map(([key, value]) => {
					const propType = renderShape(
						value.shape,
						`${interfaceName}${sanitizeIdentifier(key)}`,
						ctx,
					);
					const optional = value.optional ? "?" : "";
					return `  ${quoteProp(key)}${optional}: ${propType};`;
				})
				.join("\n");

			ctx.declarations.push(`export interface ${interfaceName} {\n${body}\n}`);
			return interfaceName;
		}
	}
}

function getPrimaryPayloadKey(entry: GameMasterEntryRaw): string | undefined {
	const keys = Object.keys(entry.data).filter((key) => key !== "templateId");
	return keys.length === 1 ? keys[0] : undefined;
}

function getDataPayload(
	entry: GameMasterEntryRaw,
	payloadKey: string,
): JsonObject | null {
	const value = entry.data[payloadKey];
	return value && typeof value === "object" && !Array.isArray(value)
		? (value as JsonObject)
		: null;
}

function parseDexNumberFromTemplateId(templateId: string): number | undefined {
	const match = templateId.match(/(?:^|_)V(\d{1,4})_/);
	if (!match) {
		return undefined;
	}
	const second = match.at(1);
	if (!second) {
		return undefined;
	}

	const parsed = Number.parseInt(second, 10);
	return Number.isFinite(parsed) ? parsed : undefined;
}

function formatDexKey(dexNumber: number | undefined): string | undefined {
	return typeof dexNumber === "number"
		? dexNumber.toString().padStart(4, "0")
		: undefined;
}

function getPokemonGenerationSegment(templateId: string): string {
	const dexNumber = parseDexNumberFromTemplateId(templateId);

	if (typeof dexNumber !== "number") {
		return "special";
	}

	if (dexNumber <= 151) return "gen1";
	if (dexNumber <= 251) return "gen2";
	if (dexNumber <= 386) return "gen3";
	if (dexNumber <= 493) return "gen4";
	if (dexNumber <= 649) return "gen5";
	if (dexNumber <= 721) return "gen6";
	if (dexNumber <= 809) return "gen7";
	if (dexNumber <= 905) return "gen8";
	if (dexNumber <= 1025) return "gen9";

	return "special";
}

function buildModuleRoute(
	segments: string[],
	family: string,
	unionNames: string[],
	identityLookupKind?: IdentityLookupKind,
): ModuleRoute {
	return {
		key: segments.join("/"),
		segments,
		typeName: segments.map((segment) => toPascalCase(segment)).join(""),
		family,
		unionNames,
		identityLookupKind,
	};
}

function classifyTypescriptEntry(entry: GameMasterEntryRaw): ClassifiedEntry {
	const payloadKey = getPrimaryPayloadKey(entry) ?? "misc";

	if (payloadKey === "pokemonSettings") {
		return {
			entry,
			payloadKey,
			route: buildModuleRoute(
				["pokemon", "settings", getPokemonGenerationSegment(entry.templateId)],
				"pokemon",
				["PokemonMasterfileEntry", "PokemonSettingsEntry"],
				"pokemonSettings",
			),
		};
	}

	if (payloadKey === "pokemonExtendedSettings") {
		return {
			entry,
			payloadKey,
			route: buildModuleRoute(
				["pokemon", "extended", getPokemonGenerationSegment(entry.templateId)],
				"pokemon",
				["PokemonMasterfileEntry", "PokemonExtendedEntry"],
				"pokemonExtendedSettings",
			),
		};
	}

	if (payloadKey === "genderSettings") {
		return {
			entry,
			payloadKey,
			route: buildModuleRoute(
				["pokemon", "gender", getPokemonGenerationSegment(entry.templateId)],
				"pokemon",
				["PokemonMasterfileEntry", "PokemonGenderEntry"],
				"genderSettings",
			),
		};
	}

	const staticRoute = STATIC_ROUTE_BY_PAYLOAD_KEY.get(payloadKey);

	if (staticRoute) {
		return {
			entry,
			payloadKey,
			route: buildModuleRoute(
				staticRoute.segments,
				staticRoute.family,
				staticRoute.unionNames,
			),
		};
	}

	return {
		entry,
		payloadKey,
		route: buildModuleRoute(["misc"], "misc", []),
	};
}

function compareRouteSegments(left: ModuleRoute, right: ModuleRoute): number {
	const leftFamilyOrder =
		FAMILY_ORDER.get(left.family) ?? Number.MAX_SAFE_INTEGER;
	const rightFamilyOrder =
		FAMILY_ORDER.get(right.family) ?? Number.MAX_SAFE_INTEGER;

	if (leftFamilyOrder !== rightFamilyOrder) {
		return leftFamilyOrder - rightFamilyOrder;
	}

	const leftSubfamily = left.segments[1] ?? "";
	const rightSubfamily = right.segments[1] ?? "";

	if (left.family === "pokemon" || right.family === "pokemon") {
		const leftOrder =
			POKEMON_SUBFAMILY_ORDER.get(leftSubfamily) ?? Number.MAX_SAFE_INTEGER;
		const rightOrder =
			POKEMON_SUBFAMILY_ORDER.get(rightSubfamily) ?? Number.MAX_SAFE_INTEGER;

		if (leftOrder !== rightOrder) {
			return leftOrder - rightOrder;
		}
	}

	if (leftSubfamily !== rightSubfamily) {
		return leftSubfamily.localeCompare(rightSubfamily);
	}

	const leftGeneration = left.segments[2] ?? "";
	const rightGeneration = right.segments[2] ?? "";
	const leftGenerationOrder =
		GENERATION_ORDER.get(leftGeneration) ?? Number.MAX_SAFE_INTEGER;
	const rightGenerationOrder =
		GENERATION_ORDER.get(rightGeneration) ?? Number.MAX_SAFE_INTEGER;

	if (leftGenerationOrder !== rightGenerationOrder) {
		return leftGenerationOrder - rightGenerationOrder;
	}

	return left.key.localeCompare(right.key);
}

function joinTypeUnion(typeNames: string[]): string {
	return typeNames.length === 0 ? "never" : typeNames.join(" | ");
}

function buildInterfaceExtends(name: string, bases: string[]): string {
	return bases.length === 0
		? `export interface ${name} {}`
		: `export interface ${name} extends ${bases.join(", ")} {}`;
}

function buildLookupInterfaceLines(
	name: string,
	valueMap: Map<string, string[]>,
): string[] {
	return [
		`export interface ${name} {`,
		...[...valueMap.entries()]
			.sort(([left], [right]) => left.localeCompare(right))
			.map(
				([key, value]) =>
					`  ${JSON.stringify(key)}: ${joinTypeUnion([...new Set(value)])};`,
			),
		"}",
	];
}

function buildMergedLookupInterfaceLines(
	name: string,
	modules: GroupModuleOutput[],
	mapKey: "dexIdMap" | "pokemonIdMap",
	lookupNameKey: "byDexIdName" | "byPokemonIdName",
): string[] {
	const keys = new Set<string>();

	for (const module of modules) {
		for (const key of module[mapKey].keys()) {
			keys.add(key);
		}
	}

	return [
		`export interface ${name} {`,
		...[...keys]
			.sort((left, right) => left.localeCompare(right))
			.map((key) => {
				const memberTypes = modules
					.filter((module) => module[mapKey].has(key))
					.map((module) => {
						const lookupName = module[lookupNameKey];

						if (!lookupName) {
							throw new Error(
								`Expected ${lookupNameKey} for grouped module ${module.route.key}.`,
							);
						}

						return `${lookupName}[${JSON.stringify(key)}]`;
					});

				return `  ${JSON.stringify(key)}: ${joinTypeUnion(memberTypes)};`;
			}),
		"}",
	];
}

function getIdentityInfo(
	entry: GameMasterEntryRaw,
	identityLookupKind: IdentityLookupKind | undefined,
): { dexId?: string; pokemonId?: string } {
	const dexId = formatDexKey(parseDexNumberFromTemplateId(entry.templateId));

	if (identityLookupKind === "pokemonSettings") {
		const payload = getDataPayload(entry, "pokemonSettings");
		const pokemonId =
			payload && typeof payload.pokemonId === "string"
				? payload.pokemonId
				: undefined;
		return { dexId, pokemonId };
	}

	if (identityLookupKind === "pokemonExtendedSettings") {
		const payload = getDataPayload(entry, "pokemonExtendedSettings");
		const pokemonId =
			payload && typeof payload.uniqueId === "string"
				? payload.uniqueId
				: undefined;
		return { dexId, pokemonId };
	}

	if (identityLookupKind === "genderSettings") {
		const payload = getDataPayload(entry, "genderSettings");
		const pokemonId =
			payload && typeof payload.pokemon === "string"
				? payload.pokemon
				: undefined;
		return { dexId, pokemonId };
	}

	return {};
}

function buildValueMap(
	entryInfos: EntryTypeInfo[],
	keyName: "dexId" | "pokemonId",
): Map<string, string[]> {
	const valueMap = new Map<string, string[]>();

	for (const entryInfo of entryInfos) {
		const key = entryInfo[keyName];
		if (!key) {
			continue;
		}

		const existing = valueMap.get(key);
		if (existing) {
			existing.push(entryInfo.entryTypeName);
			continue;
		}

		valueMap.set(key, [entryInfo.entryTypeName]);
	}

	return valueMap;
}

function buildTypescriptGroupModule(
	classifiedEntries: ClassifiedEntry[],
	route: ModuleRoute,
	options: CliOptions,
): GroupModuleOutput {
	const ctx = createNamedShapeRenderContext();
	const entryTypeNames: string[] = [];
	const byTemplateIdLines: string[] = [];
	const entryInfos: EntryTypeInfo[] = [];

	for (const classifiedEntry of classifiedEntries) {
		const { entry } = classifiedEntry;
		const interfaceBase = sanitizeIdentifier(entry.templateId);
		const dataShape = inferShape(entry.data);
		const dataTypeName = renderShape(dataShape, `${interfaceBase}Data`, ctx);
		const entryTypeName = createUniqueName(
			`${interfaceBase}Entry`,
			ctx.seenNames,
		);

		ctx.declarations.push(
			[
				`export interface ${entryTypeName} {`,
				`  templateId: ${JSON.stringify(entry.templateId)};`,
				`  data: ${dataTypeName};`,
				"}",
			].join("\n"),
		);

		entryTypeNames.push(entryTypeName);
		byTemplateIdLines.push(
			`  ${JSON.stringify(entry.templateId)}: ${entryTypeName};`,
		);
		entryInfos.push({
			templateId: entry.templateId,
			entryTypeName,
			...getIdentityInfo(entry, route.identityLookupKind),
		});
	}

	const moduleBaseName = route.typeName;
	const entryTypeAlias = `${moduleBaseName}MasterfileEntry`;
	const byTemplateIdName = `${moduleBaseName}MasterfileByTemplateId`;
	const byDexIdName =
		route.identityLookupKind && buildValueMap(entryInfos, "dexId").size > 0
			? `${moduleBaseName}ByDexId`
			: undefined;
	const byPokemonIdName =
		route.identityLookupKind && buildValueMap(entryInfos, "pokemonId").size > 0
			? `${moduleBaseName}ByPokemonId`
			: undefined;
	const fileName = `${route.segments.join("/")}.generated.ts`;
	const importPath = `./${route.segments.join("/")}.generated`;
	const dexIdMap = buildValueMap(entryInfos, "dexId");
	const pokemonIdMap = buildValueMap(entryInfos, "pokemonId");

	return {
		fileName,
		importPath,
		entryTypeName: entryTypeAlias,
		byTemplateIdName,
		byDexIdName,
		byPokemonIdName,
		dexIdMap,
		pokemonIdMap,
		route,
		content: [
			"/* eslint-disable */",
			"// Auto-generated from GAME_MASTER.json",
			"// Do not edit by hand.",
			`// Group: ${route.key}`,
			`// Filters: ${summarizeTemplateFilters(options)}`,
			`// Entries emitted: ${classifiedEntries.length}`,
			"",
			...ctx.declarations,
			"",
			`export interface ${byTemplateIdName} {`,
			...byTemplateIdLines,
			"}",
			"",
			...(byDexIdName
				? [...buildLookupInterfaceLines(byDexIdName, dexIdMap), ""]
				: []),
			...(byPokemonIdName
				? [...buildLookupInterfaceLines(byPokemonIdName, pokemonIdMap), ""]
				: []),
			`export type ${entryTypeAlias} = ${joinTypeUnion(entryTypeNames)};`,
			"",
		].join("\n"),
	};
}

function buildModuleImportLine(module: GroupModuleOutput): string {
	const importedNames = [
		module.byTemplateIdName,
		module.entryTypeName,
		...(module.byDexIdName ? [module.byDexIdName] : []),
		...(module.byPokemonIdName ? [module.byPokemonIdName] : []),
	];

	return `import type { ${importedNames.join(", ")} } from ${JSON.stringify(module.importPath)};`;
}

function buildFamilyUnionLines(
	name: string,
	modules: GroupModuleOutput[],
): string[] {
	return modules.length === 0
		? []
		: [
				`export type ${name} = ${joinTypeUnion(modules.map((module) => module.entryTypeName))};`,
			];
}

function buildLookupExtendsLines(
	name: string,
	modules: GroupModuleOutput[],
	key: "byTemplateIdName" | "byDexIdName" | "byPokemonIdName",
): string[] {
	const bases = modules
		.map((module) => module[key])
		.filter((value): value is string => typeof value === "string");

	return bases.length === 0 ? [] : [buildInterfaceExtends(name, bases)];
}

export function buildTypescriptOutput(
	entries: GameMasterEntryRaw[],
	options: CliOptions,
): string {
	return buildTypescriptFiles(entries, options).barrelContent;
}

export function buildTypescriptFiles(
	entries: GameMasterEntryRaw[],
	options: CliOptions,
): GeneratedFileBundle {
	const filteredEntries = filterGameMasterEntries(entries, options);
	const classifiedEntries = filteredEntries.map(classifyTypescriptEntry);
	const groupedEntries = new Map<string, ClassifiedEntry[]>();

	for (const classifiedEntry of classifiedEntries) {
		const existing = groupedEntries.get(classifiedEntry.route.key);
		if (existing) {
			existing.push(classifiedEntry);
			continue;
		}

		groupedEntries.set(classifiedEntry.route.key, [classifiedEntry]);
	}

	const modules = [...groupedEntries.entries()]
		.map(([_, moduleEntries]) => {
			const firstEntry = moduleEntries[0];

			if (!firstEntry) {
				throw new Error("Expected grouped TypeScript entries to be non-empty.");
			}

			return buildTypescriptGroupModule(
				moduleEntries,
				firstEntry.route,
				options,
			);
		})
		.sort((left, right) => compareRouteSegments(left.route, right.route));
	const entryTypeNames = modules.map((module) => module.entryTypeName);
	const byTemplateIdNames = modules.map((module) => module.byTemplateIdName);
	const pokemonModules = modules.filter(
		(module) => module.route.family === "pokemon",
	);
	const pokemonSettingsModules = modules.filter((module) =>
		module.route.unionNames.includes("PokemonSettingsEntry"),
	);
	const pokemonExtendedModules = modules.filter((module) =>
		module.route.unionNames.includes("PokemonExtendedEntry"),
	);
	const pokemonGenderModules = modules.filter((module) =>
		module.route.unionNames.includes("PokemonGenderEntry"),
	);

	return {
		barrelContent: [
			"/* eslint-disable */",
			"// Auto-generated from GAME_MASTER.json",
			"// Do not edit by hand.",
			`// Filters: ${summarizeTemplateFilters(options)}`,
			`// Entries emitted: ${filteredEntries.length}`,
			`// Groups emitted: ${modules.length}`,
			"",
			...modules.map(
				(module) => `export * from ${JSON.stringify(module.importPath)};`,
			),
			"",
			'import type POGOProtos from "@na-ji/pogo-protos";',
			...modules.map(buildModuleImportLine),
			"",
			buildInterfaceExtends("MasterfileByTemplateId", byTemplateIdNames),
			"export interface GameMasterByTemplateId extends MasterfileByTemplateId {}",
			"",
			`export type MasterfileEntry = ${joinTypeUnion(entryTypeNames)};`,
			"export type GameMasterEntry = MasterfileEntry;",
			"export type Masterfile = MasterfileEntry[];",
			"export type GameMaster = Masterfile;",
			"",
			...buildFamilyUnionLines("PokemonMasterfileEntry", pokemonModules),
			...buildFamilyUnionLines("PokemonSettingsEntry", pokemonSettingsModules),
			...buildFamilyUnionLines("PokemonExtendedEntry", pokemonExtendedModules),
			...buildFamilyUnionLines("PokemonGenderEntry", pokemonGenderModules),
			...buildFamilyUnionLines(
				"PokemonFamilyEntry",
				modules.filter((module) =>
					module.route.unionNames.includes("PokemonFamilyEntry"),
				),
			),
			...buildFamilyUnionLines(
				"MoveMasterfileEntry",
				modules.filter((module) =>
					module.route.unionNames.includes("MoveMasterfileEntry"),
				),
			),
			...buildFamilyUnionLines(
				"ItemMasterfileEntry",
				modules.filter((module) =>
					module.route.unionNames.includes("ItemMasterfileEntry"),
				),
			),
			"",
			...buildLookupExtendsLines(
				"PokemonSettingsByTemplateId",
				pokemonSettingsModules,
				"byTemplateIdName",
			),
			...buildMergedLookupInterfaceLines(
				"PokemonSettingsByDexId",
				pokemonSettingsModules,
				"dexIdMap",
				"byDexIdName",
			),
			...buildMergedLookupInterfaceLines(
				"PokemonSettingsByPokemonId",
				pokemonSettingsModules,
				"pokemonIdMap",
				"byPokemonIdName",
			),
			"",
			...buildLookupExtendsLines(
				"PokemonExtendedByTemplateId",
				pokemonExtendedModules,
				"byTemplateIdName",
			),
			...buildMergedLookupInterfaceLines(
				"PokemonExtendedByDexId",
				pokemonExtendedModules,
				"dexIdMap",
				"byDexIdName",
			),
			...buildMergedLookupInterfaceLines(
				"PokemonExtendedByPokemonId",
				pokemonExtendedModules,
				"pokemonIdMap",
				"byPokemonIdName",
			),
			"",
			...buildLookupExtendsLines(
				"PokemonGenderByTemplateId",
				pokemonGenderModules,
				"byTemplateIdName",
			),
			...buildMergedLookupInterfaceLines(
				"PokemonGenderByDexId",
				pokemonGenderModules,
				"dexIdMap",
				"byDexIdName",
			),
			...buildMergedLookupInterfaceLines(
				"PokemonGenderByPokemonId",
				pokemonGenderModules,
				"pokemonIdMap",
				"byPokemonIdName",
			),
			"",
			"export type NormalizedPokemonSettings = POGOProtos.Rpc.IPokemonSettingsProto;",
			"export type NormalizedMoveSettings = POGOProtos.Rpc.IMoveSettingsProto;",
			"export type NormalizedItemSettings = POGOProtos.Rpc.IItemSettingsProto;",
			"",
			"export type NormalizedPokemonSettingsByTemplateId = {",
			"  [K in keyof PokemonSettingsByTemplateId]: NormalizedPokemonSettings;",
			"};",
			"export type NormalizedPokemonSettingsByDexId = {",
			"  [K in keyof PokemonSettingsByDexId]: NormalizedPokemonSettings;",
			"};",
			"export type NormalizedPokemonSettingsByPokemonId = {",
			"  [K in keyof PokemonSettingsByPokemonId]: NormalizedPokemonSettings;",
			"};",
			"",
		].join("\n"),
		files: modules.map((module) => ({
			fileName: module.fileName,
			content: module.content,
		})),
	};
}

export async function generateTypescript(parsed: Json): Promise<void> {
	const options = parseTypescriptArgs(process.argv.slice(2));

	if (!Array.isArray(parsed)) {
		throw new Error("Expected GAME_MASTER root to be an array.");
	}

	const entries = parsed as unknown as GameMasterEntryRaw[];
	const bundle = buildTypescriptFiles(entries, options);
	const writtenPaths = await writeGeneratedFileBundle(
		options.outputPath,
		bundle,
	);

	console.log(
		`Wrote ${options.outputPath} and ${writtenPaths.length - 1} grouped TypeScript files`,
	);
}
