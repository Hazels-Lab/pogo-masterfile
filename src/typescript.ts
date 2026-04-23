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

interface ErgonomicValueSample {
	templateId: string;
	value: Json;
}

interface ErgonomicCluster {
	key: string;
	aliasBaseName: string;
	internalBaseName: string;
	aliasSuffixes: string[];
	entries: ClassifiedEntry[];
	node: ErgonomicObjectNode;
	correlatedPathKeys: Set<string>;
	genericParams: ErgonomicGenericParam[];
}

interface ErgonomicObjectNode {
	kind: "object";
	props: Array<ErgonomicProperty>;
}

interface ErgonomicProperty {
	key: string;
	type: ErgonomicTypeNode;
}

interface ErgonomicGenericParam {
	pathKey: string;
	name: string;
	valuesByTemplateId: Map<string, string>;
}

interface ErgonomicClusterRenderPlan {
	scopeKey: string;
	cluster: ErgonomicCluster;
	sharedFileName?: string;
	sharedImportPath?: string;
}

interface SharedModuleOutput {
	fileName: string;
	content: string;
}

interface ClusterSectionOutput {
	lines: string[];
	entryInfos: EntryTypeInfo[];
	importSpecifiers: Map<string, Set<string>>;
}

type ErgonomicTypeNode =
	| ErgonomicObjectNode
	| { kind: "null" }
	| { kind: "boolean" }
	| { kind: "number" }
	| { kind: "string" }
	| { kind: "string-literal"; value: string }
	| { kind: "generic-ref"; name: string }
	| { kind: "array"; element: ErgonomicTypeNode }
	| { kind: "tuple"; items: ErgonomicTypeNode[] }
	| { kind: "unknown" };

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

function toPascalIdentifier(input: string): string {
	const cleaned = input
		.replace(/([a-z0-9])([A-Z])/g, "$1 $2")
		.replace(/[^a-zA-Z0-9]+/g, " ")
		.trim()
		.split(/\s+/)
		.filter(Boolean)
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
		.join("")
		.replace(/^[^a-zA-Z]+/, "T");

	const fallback = cleaned || "Anonymous";
	return RESERVED.has(fallback) ? `${fallback}Type` : fallback;
}

function isVersionToken(token: string): boolean {
	return /^V\d+$/i.test(token);
}

function getTemplateIdNameTokens(templateId: string): string[] {
	return templateId
		.split(/[^A-Za-z0-9]+/g)
		.filter(Boolean)
		.filter((token) => !isVersionToken(token));
}

function getCommonTokenPrefix(tokenLists: string[][]): string[] {
	const first = tokenLists[0];

	if (!first) {
		return [];
	}

	const prefix: string[] = [];

	for (let index = 0; index < first.length; index += 1) {
		const token = first[index];

		if (!token) {
			break;
		}

		if (tokenLists.every((tokens) => tokens[index] === token)) {
			prefix.push(token);
			continue;
		}

		break;
	}

	return prefix;
}

function getPathKey(path: string[]): string {
	return path.join(".");
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

function buildClusterKey(classifiedEntry: ClassifiedEntry): string {
	const payload = getDataPayload(
		classifiedEntry.entry,
		classifiedEntry.payloadKey,
	);

	if (!payload) {
		return `${classifiedEntry.payloadKey}:missing`;
	}

	return `${classifiedEntry.payloadKey}:${shapeKey(inferShape(payload))}`;
}

function getSharedPokemonScopeKey(route: ModuleRoute): string | undefined {
	if (route.family !== "pokemon") {
		return undefined;
	}

	const subfamily = route.segments[1];

	return subfamily === "settings" ||
		subfamily === "extended" ||
		subfamily === "gender"
		? route.segments.slice(0, 2).join("/")
		: undefined;
}

function getSharedScopeAliasBaseName(scopeKey: string): string {
	switch (scopeKey) {
		case "pokemon/settings":
			return "PokemonSettings";
		case "pokemon/extended":
			return "PokemonExtended";
		case "pokemon/gender":
			return "PokemonGender";
		default:
			return scopeKey
				.split("/")
				.map((segment) => toPascalCase(segment))
				.join("");
	}
}

function shouldBuildLocalErgonomicPlan(route: ModuleRoute): boolean {
	return route.key === "pokemon/type-chart";
}

function getNameTokens(value: string): string[] {
	return value
		.split(/[^A-Za-z0-9]+/g)
		.filter(Boolean)
		.filter((token) => !isVersionToken(token))
		.map((token) => token.toUpperCase());
}

function isTemplateDerivedString(value: string, templateId: string): boolean {
	const valueTokens = getNameTokens(value);
	const templateTokens = getNameTokens(templateId);

	if (valueTokens.length === 0 || templateTokens.length === 0) {
		return false;
	}

	let searchIndex = 0;

	for (const valueToken of valueTokens) {
		const foundIndex = templateTokens.indexOf(valueToken, searchIndex);

		if (foundIndex === -1) {
			return false;
		}

		searchIndex = foundIndex + 1;
	}

	return true;
}

function buildAliasSuffixes(entries: ClassifiedEntry[]): string[] | null {
	const tokenLists = entries.map((entry) =>
		getTemplateIdNameTokens(entry.entry.templateId),
	);
	const commonTokens = getCommonTokenPrefix(tokenLists);
	const aliasSuffixes = entries.map((entry) => {
		const suffixTokens = getTemplateIdNameTokens(entry.entry.templateId).slice(
			commonTokens.length,
		);

		if (suffixTokens.length === 0) {
			return null;
		}

		return suffixTokens.map((token) => toPascalIdentifier(token)).join("");
	});

	if (
		aliasSuffixes.some(
			(aliasSuffix): aliasSuffix is null =>
				aliasSuffix === null || aliasSuffix.length === 0,
		)
	) {
		return null;
	}

	return new Set(aliasSuffixes).size === aliasSuffixes.length
		? aliasSuffixes
		: null;
}

function buildLocalAliasBaseName(entries: ClassifiedEntry[]): string | null {
	const tokenLists = entries.map((entry) =>
		getTemplateIdNameTokens(entry.entry.templateId),
	);
	const meaningfulTokens = getCommonTokenPrefix(tokenLists).filter(
		(token) => token.length >= 3,
	);

	return meaningfulTokens.length === 0
		? null
		: meaningfulTokens.map((token) => toPascalIdentifier(token)).join("");
}

function hasTupleNode(node: ErgonomicTypeNode): boolean {
	switch (node.kind) {
		case "tuple":
			return true;
		case "array":
			return hasTupleNode(node.element);
		case "object":
			return node.props.some((prop) => hasTupleNode(prop.type));
		default:
			return false;
	}
}

function createGenericParamName(
	path: string[],
	seenNames: Set<string>,
): string {
	const propKey = [...path]
		.reverse()
		.find((segment) => !/^\d+$/.test(segment) && segment !== "item");

	return createUniqueName(
		`T${toPascalIdentifier(propKey ?? "Value")}`,
		seenNames,
	);
}

function buildErgonomicTypeNode(
	samples: ErgonomicValueSample[],
	path: string[],
	correlatedPathKeys: Set<string>,
	genericParamsByPath: Map<string, ErgonomicGenericParam>,
	seenGenericNames: Set<string>,
): ErgonomicTypeNode | null {
	if (samples.length === 0) {
		return { kind: "unknown" };
	}

	if (samples.every((sample) => sample.value === null)) {
		return { kind: "null" };
	}

	if (samples.every((sample) => typeof sample.value === "boolean")) {
		return { kind: "boolean" };
	}

	if (samples.every((sample) => typeof sample.value === "number")) {
		return { kind: "number" };
	}

	if (samples.every((sample) => typeof sample.value === "string")) {
		const values = [...new Set(samples.map((sample) => sample.value))];

		if (
			samples.every(
				(sample): sample is ErgonomicValueSample & { value: string } =>
					typeof sample.value === "string" &&
					sample.value === sample.templateId,
			)
		) {
			correlatedPathKeys.add(getPathKey(path));
			return { kind: "generic-ref", name: "TTemplateId" };
		}

		if (
			values.length > 1 &&
			samples.every(
				(sample): sample is ErgonomicValueSample & { value: string } =>
					typeof sample.value === "string" &&
					isTemplateDerivedString(sample.value, sample.templateId),
			)
		) {
			const pathKey = getPathKey(path);
			const existing = genericParamsByPath.get(pathKey);

			if (existing) {
				correlatedPathKeys.add(pathKey);
				return { kind: "generic-ref", name: existing.name };
			}

			const genericParam: ErgonomicGenericParam = {
				pathKey,
				name: createGenericParamName(path, seenGenericNames),
				valuesByTemplateId: new Map(
					samples.map((sample) => [
						sample.templateId,
						JSON.stringify(sample.value),
					]),
				),
			};
			genericParamsByPath.set(pathKey, genericParam);
			correlatedPathKeys.add(pathKey);
			return { kind: "generic-ref", name: genericParam.name };
		}

		if (values.length === 1) {
			const onlyValue = values[0];

			if (typeof onlyValue === "string") {
				return { kind: "string-literal", value: onlyValue };
			}
		}

		return { kind: "string" };
	}

	if (samples.every((sample) => Array.isArray(sample.value))) {
		const arrays = samples.map((sample) => sample.value);
		const flattened = samples.flatMap((sample) => {
			const value = sample.value;

			if (!Array.isArray(value)) {
				return [];
			}

			return value.map((item) => ({
				templateId: sample.templateId,
				value: item,
			}));
		});
		const lengths = [...new Set(arrays.map((array) => array.length))];

		if (lengths.length === 1) {
			const tupleLength = lengths[0];

			if (typeof tupleLength !== "number") {
				return null;
			}

			const tupleItems = Array.from({ length: tupleLength }, (_, index) =>
				buildErgonomicTypeNode(
					samples.map((sample) => {
						const value = sample.value;

						if (!Array.isArray(value)) {
							throw new Error("Expected array sample when building tuple.");
						}

						return {
							templateId: sample.templateId,
							value: value[index] ?? null,
						};
					}),
					[...path, `${index}`],
					correlatedPathKeys,
					genericParamsByPath,
					seenGenericNames,
				),
			);

			if (
				tupleItems.every((item): item is ErgonomicTypeNode => item !== null)
			) {
				return {
					kind: "tuple",
					items: tupleItems,
				};
			}
		}
		const elementNode = buildErgonomicTypeNode(
			flattened,
			[...path, "item"],
			correlatedPathKeys,
			genericParamsByPath,
			seenGenericNames,
		);

		return {
			kind: "array",
			element: elementNode ?? { kind: "unknown" },
		};
	}

	if (
		samples.every(
			(sample) =>
				sample.value !== null &&
				typeof sample.value === "object" &&
				!Array.isArray(sample.value),
		)
	) {
		const objects = samples.map((sample) => sample.value as JsonObject);
		const firstKeys = Object.keys(objects[0] ?? {}).sort();
		const hasMatchingKeys = objects.every((value) => {
			const keys = Object.keys(value).sort();
			return (
				keys.length === firstKeys.length &&
				keys.every((key, index) => key === firstKeys[index])
			);
		});

		if (!hasMatchingKeys) {
			return null;
		}

		return {
			kind: "object",
			props: firstKeys.map((key) => {
				const childNode = buildErgonomicTypeNode(
					samples.map((sample) => {
						const value = sample.value;

						if (
							value === null ||
							typeof value !== "object" ||
							Array.isArray(value)
						) {
							throw new Error("Expected object sample when building props.");
						}

						return {
							templateId: sample.templateId,
							value: value[key] ?? null,
						};
					}),
					[...path, key],
					correlatedPathKeys,
					genericParamsByPath,
					seenGenericNames,
				);

				if (!childNode) {
					throw new Error(`Expected child node for ${key}.`);
				}

				return {
					key,
					type: childNode,
				};
			}),
		};
	}

	return null;
}

function buildErgonomicCluster(
	entries: ClassifiedEntry[],
	key: string,
	aliasBaseName: string,
	internalBaseName: string,
): ErgonomicCluster | null {
	if (entries.length < 2) {
		return null;
	}

	const aliasSuffixes = buildAliasSuffixes(entries);

	if (!aliasSuffixes) {
		return null;
	}

	const correlatedPathKeys = new Set<string>();
	const genericParamsByPath = new Map<string, ErgonomicGenericParam>();
	const seenGenericNames = new Set(["TTemplateId"]);
	const node = buildErgonomicTypeNode(
		entries.map((entry) => ({
			templateId: entry.entry.templateId,
			value: entry.entry.data,
		})),
		[],
		correlatedPathKeys,
		genericParamsByPath,
		seenGenericNames,
	);

	if (!node || node.kind !== "object") {
		return null;
	}

	if (
		![...correlatedPathKeys].some((pathKey) => pathKey !== "templateId") &&
		!hasTupleNode(node)
	) {
		return null;
	}

	return {
		key,
		aliasBaseName,
		internalBaseName,
		aliasSuffixes,
		correlatedPathKeys,
		entries,
		node,
		genericParams: [...genericParamsByPath.values()],
	};
}

function renderGenericParamDeclaration(cluster: ErgonomicCluster): string {
	return [
		"TTemplateId extends string",
		...cluster.genericParams.map((param) => `${param.name} extends string`),
	].join(", ");
}

function renderGenericParamArguments(cluster: ErgonomicCluster): string {
	return [
		"TTemplateId",
		...cluster.genericParams.map((param) => param.name),
	].join(", ");
}

function renderEntryGenericArguments(
	cluster: ErgonomicCluster,
	templateId: string,
): string {
	const args = [
		JSON.stringify(templateId),
		...cluster.genericParams.map((param) => {
			const value = param.valuesByTemplateId.get(templateId);

			if (!value) {
				throw new Error(
					`Expected generic value for ${param.name} on ${templateId}.`,
				);
			}

			return value;
		}),
	];

	return args.join(", ");
}

function renderErgonomicTypeRef(
	cluster: ErgonomicCluster,
	node: ErgonomicTypeNode,
	parentName: string,
	propKey: string,
	declarations: string[],
	seenNames: Set<string>,
): string {
	switch (node.kind) {
		case "null":
			return "null";
		case "boolean":
			return "boolean";
		case "number":
			return "number";
		case "string":
			return "string";
		case "string-literal":
			return JSON.stringify(node.value);
		case "generic-ref":
			return node.name;
		case "unknown":
			return "unknown";
		case "array": {
			const elementType = renderErgonomicTypeRef(
				cluster,
				node.element,
				`${parentName}${toPascalIdentifier(propKey)}`,
				`${propKey}Item`,
				declarations,
				seenNames,
			);
			return `(${elementType})[]`;
		}
		case "tuple": {
			if (node.items.length === 0) {
				return "[]";
			}

			return [
				"[",
				...node.items.map(
					(item) =>
						`  ${renderErgonomicTypeRef(
							cluster,
							item,
							`${parentName}${toPascalIdentifier(propKey)}`,
							`${propKey}Item`,
							declarations,
							seenNames,
						)},`,
				),
				"]",
			].join("\n");
		}
		case "object": {
			const rawName = `${parentName}${toPascalIdentifier(propKey)}`;
			const interfaceName = createUniqueName(rawName, seenNames);
			renderErgonomicObjectInterface(
				cluster,
				node,
				interfaceName,
				interfaceName,
				declarations,
				seenNames,
			);
			return `${interfaceName}<${renderGenericParamArguments(cluster)}>`;
		}
	}
}

function renderErgonomicObjectInterface(
	cluster: ErgonomicCluster,
	node: ErgonomicObjectNode,
	interfaceName: string,
	childBaseName: string,
	declarations: string[],
	seenNames: Set<string>,
): void {
	const existing = declarations.find((declaration) =>
		declaration.startsWith(`export interface ${interfaceName}<`),
	);

	if (existing) {
		return;
	}

	const body = node.props
		.map((prop) => {
			const propType = renderErgonomicTypeRef(
				cluster,
				prop.type,
				childBaseName,
				prop.key,
				declarations,
				seenNames,
			);

			return `  ${quoteProp(prop.key)}: ${propType};`;
		})
		.join("\n");

	declarations.push(
		[
			`export interface ${interfaceName}<${renderGenericParamDeclaration(cluster)}> {`,
			body,
			"}",
		].join("\n"),
	);
}

function buildErgonomicBaseLines(
	cluster: ErgonomicCluster,
	baseName: string,
	seenNames: Set<string>,
): string[] {
	const declarations: string[] = [];
	const dataName = `${baseName}Data`;

	renderErgonomicObjectInterface(
		cluster,
		cluster.node,
		dataName,
		baseName,
		declarations,
		seenNames,
	);

	return [
		`export interface ${baseName}<${renderGenericParamDeclaration(cluster)}> {`,
		"  templateId: TTemplateId;",
		`  data: ${dataName}<${renderGenericParamArguments(cluster)}>;`,
		"}",
		"",
		...declarations,
	];
}

function buildErgonomicAliasSection(
	cluster: ErgonomicCluster,
	entries: ClassifiedEntry[],
	referencedBaseName: string,
	aliasBaseName: string,
	route: ModuleRoute,
	seenNames: Set<string>,
	includeClusterHelpers: boolean,
	sharedImportPath?: string,
): ClusterSectionOutput {
	const aliasNames: string[] = [];
	const entryInfos: EntryTypeInfo[] = [];
	const importSpecifiers = new Map<string, Set<string>>();

	if (sharedImportPath) {
		importSpecifiers.set(sharedImportPath, new Set([referencedBaseName]));
	}

	const aliasLines = entries.map((entry) => {
		const index = cluster.entries.indexOf(entry);
		const suffixName = cluster.aliasSuffixes[index];

		if (!suffixName) {
			throw new Error("Expected ergonomic alias suffix for cluster entry.");
		}

		const entryTypeName = createUniqueName(
			`${aliasBaseName}${suffixName}`,
			seenNames,
		);
		aliasNames.push(entryTypeName);
		entryInfos.push({
			templateId: entry.entry.templateId,
			entryTypeName,
			...getIdentityInfo(entry.entry, route.identityLookupKind),
		});

		return `export type ${entryTypeName} = ${referencedBaseName}<${renderEntryGenericArguments(cluster, entry.entry.templateId)}>;`;
	});

	return {
		lines: includeClusterHelpers
			? [
					...aliasLines,
					"",
					`export type ${aliasBaseName}MasterfileEntry = ${joinTypeUnion(aliasNames)};`,
					`export type ${aliasBaseName}TemplateId = ${aliasBaseName}MasterfileEntry["templateId"];`,
				]
			: aliasLines,
		entryInfos,
		importSpecifiers,
	};
}

function mergeImportSpecifiers(
	target: Map<string, Set<string>>,
	source: Map<string, Set<string>>,
): void {
	for (const [importPath, names] of source.entries()) {
		const existing = target.get(importPath);

		if (existing) {
			for (const name of names) {
				existing.add(name);
			}
			continue;
		}

		target.set(importPath, new Set(names));
	}
}

function buildRawClusterEntryInfos(
	classifiedEntries: ClassifiedEntry[],
	ctx: RenderContext,
	route: ModuleRoute,
): EntryTypeInfo[] {
	return classifiedEntries.map((classifiedEntry) => {
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

		return {
			templateId: entry.templateId,
			entryTypeName,
			...getIdentityInfo(entry, route.identityLookupKind),
		};
	});
}

function buildErgonomicPlanKey(scopeKey: string, clusterKey: string): string {
	return `${scopeKey}::${clusterKey}`;
}

function buildErgonomicPlans(
	classifiedEntries: ClassifiedEntry[],
	options: CliOptions,
): {
	planByKey: Map<string, ErgonomicClusterRenderPlan>;
	sharedModules: SharedModuleOutput[];
} {
	const groupedByScope = new Map<string, ClassifiedEntry[]>();

	for (const entry of classifiedEntries) {
		const scopeKey = getSharedPokemonScopeKey(entry.route) ?? entry.route.key;
		const existing = groupedByScope.get(scopeKey);

		if (existing) {
			existing.push(entry);
			continue;
		}

		groupedByScope.set(scopeKey, [entry]);
	}

	const planByKey = new Map<string, ErgonomicClusterRenderPlan>();
	const sharedModules: SharedModuleOutput[] = [];

	for (const [scopeKey, scopeEntries] of groupedByScope.entries()) {
		const firstEntry = scopeEntries[0];

		if (!firstEntry) {
			continue;
		}

		const sharedScopeKey = getSharedPokemonScopeKey(firstEntry.route);
		const clusterEntries = new Map<string, ClassifiedEntry[]>();

		for (const entry of scopeEntries) {
			const clusterKey = buildClusterKey(entry);
			const existing = clusterEntries.get(clusterKey);

			if (existing) {
				existing.push(entry);
				continue;
			}

			clusterEntries.set(clusterKey, [entry]);
		}

		const seenBaseNames = new Set<string>();
		const plans = [...clusterEntries.entries()]
			.sort(([left], [right]) =>
				(clusterEntries.get(left)?.[0]?.entry.templateId ?? "").localeCompare(
					clusterEntries.get(right)?.[0]?.entry.templateId ?? "",
				),
			)
			.flatMap(([clusterKey, entries]) => {
				const aliasBaseName =
					sharedScopeKey !== undefined
						? getSharedScopeAliasBaseName(sharedScopeKey)
						: shouldBuildLocalErgonomicPlan(firstEntry.route)
							? buildLocalAliasBaseName(entries)
							: null;

				if (!aliasBaseName) {
					return [];
				}

				const internalBaseName =
					sharedScopeKey !== undefined
						? createUniqueName(`${aliasBaseName}Shared`, seenBaseNames)
						: createUniqueName(aliasBaseName, seenBaseNames);
				const cluster = buildErgonomicCluster(
					entries,
					clusterKey,
					aliasBaseName,
					internalBaseName,
				);

				if (!cluster) {
					return [];
				}

				return [
					{
						scopeKey,
						cluster,
						sharedFileName:
							sharedScopeKey !== undefined
								? `${sharedScopeKey}/shared.generated.ts`
								: undefined,
						sharedImportPath:
							sharedScopeKey !== undefined ? "./shared.generated" : undefined,
					} satisfies ErgonomicClusterRenderPlan,
				];
			});

		for (const plan of plans) {
			planByKey.set(buildErgonomicPlanKey(scopeKey, plan.cluster.key), plan);
		}

		if (sharedScopeKey === undefined || plans.length === 0) {
			continue;
		}

		const sharedSeenNames = new Set<string>();
		const sections = plans.map((plan) =>
			buildErgonomicBaseLines(
				plan.cluster,
				plan.cluster.internalBaseName,
				sharedSeenNames,
			),
		);
		const totalEntries = plans.reduce(
			(count, plan) => count + plan.cluster.entries.length,
			0,
		);

		sharedModules.push({
			fileName: `${sharedScopeKey}/shared.generated.ts`,
			content: [
				"/* eslint-disable */",
				"// Auto-generated from GAME_MASTER.json",
				"// Do not edit by hand.",
				`// Group: ${sharedScopeKey}/shared`,
				`// Filters: ${summarizeTemplateFilters(options)}`,
				`// Entries emitted: ${totalEntries}`,
				"",
				...sections.flatMap((section, index) =>
					index === 0 ? section : ["", ...section],
				),
				"",
			].join("\n"),
		});
	}

	return {
		planByKey,
		sharedModules,
	};
}

function buildTypescriptGroupModule(
	classifiedEntries: ClassifiedEntry[],
	route: ModuleRoute,
	options: CliOptions,
	planByKey: Map<string, ErgonomicClusterRenderPlan>,
): GroupModuleOutput {
	const ctx = createNamedShapeRenderContext();
	const entryTypeNames: string[] = [];
	const byTemplateIdLines: string[] = [];
	const entryInfos: EntryTypeInfo[] = [];
	const importSpecifiers = new Map<string, Set<string>>();
	const clusterSections: string[][] = [];
	const groupedClusters = new Map<string, ClassifiedEntry[]>();

	for (const classifiedEntry of classifiedEntries) {
		const clusterKey = buildClusterKey(classifiedEntry);
		const existing = groupedClusters.get(clusterKey);

		if (existing) {
			existing.push(classifiedEntry);
			continue;
		}

		groupedClusters.set(clusterKey, [classifiedEntry]);
	}

	for (const [clusterKey, clusterEntries] of [
		...groupedClusters.entries(),
	].sort(([left], [right]) =>
		(groupedClusters.get(left)?.[0]?.entry.templateId ?? "").localeCompare(
			groupedClusters.get(right)?.[0]?.entry.templateId ?? "",
		),
	)) {
		const scopeKey = getSharedPokemonScopeKey(route) ?? route.key;
		const plan = planByKey.get(buildErgonomicPlanKey(scopeKey, clusterKey));

		if (plan?.sharedFileName && plan.sharedImportPath) {
			const section = buildErgonomicAliasSection(
				plan.cluster,
				clusterEntries,
				plan.cluster.internalBaseName,
				plan.cluster.aliasBaseName,
				route,
				ctx.seenNames,
				false,
				plan.sharedImportPath,
			);
			clusterSections.push(section.lines);
			entryInfos.push(...section.entryInfos);
			mergeImportSpecifiers(importSpecifiers, section.importSpecifiers);
			continue;
		}

		if (plan) {
			const baseLines = buildErgonomicBaseLines(
				plan.cluster,
				plan.cluster.internalBaseName,
				ctx.seenNames,
			);
			const section = buildErgonomicAliasSection(
				plan.cluster,
				clusterEntries,
				plan.cluster.internalBaseName,
				plan.cluster.aliasBaseName,
				route,
				ctx.seenNames,
				true,
			);
			clusterSections.push([...baseLines, "", ...section.lines]);
			entryInfos.push(...section.entryInfos);
			continue;
		}

		entryInfos.push(...buildRawClusterEntryInfos(clusterEntries, ctx, route));
	}

	for (const entryInfo of entryInfos) {
		entryTypeNames.push(entryInfo.entryTypeName);
		byTemplateIdLines.push(
			`  ${JSON.stringify(entryInfo.templateId)}: ${entryInfo.entryTypeName};`,
		);
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
			...[...importSpecifiers.entries()]
				.sort(([left], [right]) => left.localeCompare(right))
				.map(
					([importPath, names]) =>
						`import type { ${[...names].sort((left, right) => left.localeCompare(right)).join(", ")} } from ${JSON.stringify(importPath)};`,
				),
			...(importSpecifiers.size > 0 ? [""] : []),
			...ctx.declarations,
			...(ctx.declarations.length > 0 && clusterSections.length > 0
				? [""]
				: []),
			...clusterSections.flatMap((section, index) =>
				index === 0 ? section : ["", ...section],
			),
			...(ctx.declarations.length > 0 || clusterSections.length > 0
				? [""]
				: []),
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

function shouldReExportModuleFromBarrel(module: GroupModuleOutput): boolean {
	return getSharedPokemonScopeKey(module.route) === undefined;
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
	const { planByKey, sharedModules } = buildErgonomicPlans(
		classifiedEntries,
		options,
	);
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
				planByKey,
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
			...modules
				.filter(shouldReExportModuleFromBarrel)
				.map((module) => `export * from ${JSON.stringify(module.importPath)};`),
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
		files: [
			...sharedModules,
			...modules.map((module) => ({
				fileName: module.fileName,
				content: module.content,
			})),
		].sort((left, right) => left.fileName.localeCompare(right.fileName)),
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
