// AST-based file builder for emitting TypeScript declaration files.
import ts from "typescript";
import type { InferredType } from "../infer.ts";
import { type PromotionContext, recordImport, tryPromote } from "../promoted-unions.ts";
import { TEMPLATE_GENERIC } from "./constants.ts";

type Modifier = "export" | "default" | "declare" | "async" | "readonly" | "private" | "protected" | "public" | "static" | "abstract" | "override";

const f = ts.factory;

const modifierKind: Record<Modifier, ts.ModifierSyntaxKind> = {
	export: ts.SyntaxKind.ExportKeyword,
	default: ts.SyntaxKind.DefaultKeyword,
	declare: ts.SyntaxKind.DeclareKeyword,
	async: ts.SyntaxKind.AsyncKeyword,
	readonly: ts.SyntaxKind.ReadonlyKeyword,
	private: ts.SyntaxKind.PrivateKeyword,
	protected: ts.SyntaxKind.ProtectedKeyword,
	public: ts.SyntaxKind.PublicKeyword,
	static: ts.SyntaxKind.StaticKeyword,
	abstract: ts.SyntaxKind.AbstractKeyword,
	override: ts.SyntaxKind.OverrideKeyword,
};

function mods(values: Modifier[] = []): ts.Modifier[] {
	return values.map((value) => f.createModifier(modifierKind[value]));
}

export type TypeParam = { name: string; constraint?: ts.TypeNode; default?: ts.TypeNode };

function makeTypeParams(params?: TypeParam[]): ts.TypeParameterDeclaration[] | undefined {
	if (!params || params.length === 0) return undefined;
	return params.map((p) => f.createTypeParameterDeclaration(undefined, f.createIdentifier(p.name), p.constraint, p.default));
}

type Part = { kind: "stmt"; stmt: ts.Statement } | { kind: "blank" } | { kind: "raw"; text: string };

export class AstFileBuilder {
	private parts: Part[] = [];
	private leadingComment?: string;

	header(text: string): this {
		this.leadingComment = text;
		return this;
	}

	blank(): this {
		this.parts.push({ kind: "blank" });
		return this;
	}

	raw(text: string): this {
		this.parts.push({ kind: "raw", text });
		return this;
	}

	addStatement(stmt: ts.Statement): this {
		this.parts.push({ kind: "stmt", stmt });
		return this;
	}

	importNamed(modulePath: string, names: string[], typeOnly = false): this {
		return this.addStatement(
			f.createImportDeclaration(
				undefined,
				f.createImportClause(
					typeOnly,
					undefined,
					f.createNamedImports(names.map((name) => f.createImportSpecifier(false, undefined, f.createIdentifier(name)))),
				),
				f.createStringLiteral(modulePath),
			),
		);
	}

	exportTypeStar(modulePath: string): this {
		return this.addStatement(f.createExportDeclaration(undefined, true, undefined, f.createStringLiteral(modulePath)));
	}

	exportTypeAlias(name: string, type: ts.TypeNode, typeParams?: TypeParam[]): this {
		return this.addStatement(f.createTypeAliasDeclaration(mods(["export"]), f.createIdentifier(name), makeTypeParams(typeParams), type));
	}

	exportInterface(name: string, members: ts.TypeElement[], typeParams?: TypeParam[]): this {
		return this.addStatement(f.createInterfaceDeclaration(mods(["export"]), f.createIdentifier(name), makeTypeParams(typeParams), undefined, members));
	}

	exportClass(name: string, members: ts.ClassElement[]): this {
		return this.addStatement(f.createClassDeclaration(mods(["export"]), f.createIdentifier(name), undefined, undefined, members));
	}

	render(fileName = "generated.ts"): string {
		this.sortLeadingImports();
		const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed, removeComments: false });
		const dummyFile = ts.createSourceFile(fileName, "", ts.ScriptTarget.Latest, false);
		const out: string[] = [];
		if (this.leadingComment) {
			out.push(`// ${this.leadingComment}`);
			out.push("");
		}
		for (const part of this.parts) {
			if (part.kind === "blank") out.push("");
			else if (part.kind === "raw") out.push(part.text);
			else out.push(printer.printNode(ts.EmitHint.Unspecified, part.stmt, dummyFile));
		}
		return `${out.join("\n")}\n`;
	}

	// Biome's organizeImports assist is a no-op on .d.ts files, so the builder
	// has to emit imports already sorted. Lexicographic comparison matches Biome's
	// order for relative paths: "../" < "./" because '.' (46) < '/' (47), with
	// alphabetical ordering within each group.
	private sortLeadingImports(): void {
		let end = 0;
		while (end < this.parts.length) {
			const part = this.parts[end]!;
			if (part.kind !== "stmt" || !ts.isImportDeclaration(part.stmt)) break;
			end++;
		}
		if (end < 2) return;
		const imports = this.parts.slice(0, end) as { kind: "stmt"; stmt: ts.ImportDeclaration }[];
		imports.sort((a, b) => {
			const aSpec = (a.stmt.moduleSpecifier as ts.StringLiteral).text;
			const bSpec = (b.stmt.moduleSpecifier as ts.StringLiteral).text;
			return aSpec < bSpec ? -1 : aSpec > bSpec ? 1 : 0;
		});
		this.parts.splice(0, end, ...imports);
	}
}

// Reserved-word handling: matches render-types.ts so AST emits quoted property names where the string-based renderer did.
const IDENTIFIER_NAME = /^[$A-Z_a-z][$\w]*$/;

const RESERVED_WORDS = new Set([
	"abstract",
	"any",
	"as",
	"asserts",
	"async",
	"await",
	"boolean",
	"break",
	"case",
	"catch",
	"class",
	"const",
	"constructor",
	"continue",
	"debugger",
	"declare",
	"default",
	"delete",
	"do",
	"else",
	"enum",
	"export",
	"extends",
	"false",
	"finally",
	"for",
	"from",
	"function",
	"get",
	"if",
	"implements",
	"import",
	"in",
	"infer",
	"instanceof",
	"interface",
	"is",
	"keyof",
	"let",
	"module",
	"namespace",
	"never",
	"new",
	"null",
	"number",
	"object",
	"of",
	"package",
	"private",
	"protected",
	"public",
	"readonly",
	"require",
	"return",
	"satisfies",
	"set",
	"static",
	"string",
	"super",
	"switch",
	"symbol",
	"this",
	"throw",
	"true",
	"try",
	"type",
	"typeof",
	"undefined",
	"unique",
	"unknown",
	"var",
	"void",
	"while",
	"with",
	"yield",
]);

function propertyName(name: string): ts.PropertyName {
	if (IDENTIFIER_NAME.test(name) && !RESERVED_WORDS.has(name)) return f.createIdentifier(name);
	return f.createStringLiteral(name);
}

export const T = {
	string: () => f.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
	number: () => f.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
	boolean: () => f.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword),
	void: () => f.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword),
	unknown: () => f.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword),
	object: () => f.createKeywordTypeNode(ts.SyntaxKind.ObjectKeyword),
	never: () => f.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword),
	null: () => f.createLiteralTypeNode(f.createNull()),

	ref: (name: string, args?: ts.TypeNode[]) => f.createTypeReferenceNode(f.createIdentifier(name), args),

	array: (type: ts.TypeNode) => f.createArrayTypeNode(type),

	union: (...types: ts.TypeNode[]) => f.createUnionTypeNode(types),
	intersection: (...types: ts.TypeNode[]) => f.createIntersectionTypeNode(types),

	indexedAccess: (obj: ts.TypeNode, index: ts.TypeNode) => f.createIndexedAccessTypeNode(obj, index),

	tuple: (...items: ts.TypeNode[]) => f.createTupleTypeNode(items),

	objectLiteral: (props: { name: string; type: ts.TypeNode; optional?: boolean }[]) =>
		f.createTypeLiteralNode(
			props.map((p) => f.createPropertySignature(undefined, propertyName(p.name), p.optional ? f.createToken(ts.SyntaxKind.QuestionToken) : undefined, p.type)),
		),

	// Single-line variant: forces the printer to emit `{ a: A; b: B }` on one line.
	// Biome will then keep it single-line when it fits the configured line width.
	objectLiteralInline: (props: { name: string; type: ts.TypeNode; optional?: boolean }[]) => {
		const node = f.createTypeLiteralNode(
			props.map((p) => f.createPropertySignature(undefined, propertyName(p.name), p.optional ? f.createToken(ts.SyntaxKind.QuestionToken) : undefined, p.type)),
		);
		return ts.setEmitFlags(node, ts.EmitFlags.SingleLine);
	},

	conditional: (check: ts.TypeNode, ext: ts.TypeNode, t: ts.TypeNode, fls: ts.TypeNode) => f.createConditionalTypeNode(check, ext, t, fls),

	templateLiteral: (head: string, spans: { type: ts.TypeNode; suffix: string }[]) =>
		f.createTemplateLiteralType(
			f.createTemplateHead(head),
			spans.map((s, i) => f.createTemplateLiteralTypeSpan(s.type, i === spans.length - 1 ? f.createTemplateTail(s.suffix) : f.createTemplateMiddle(s.suffix))),
		),

	infer: (name: string) => f.createInferTypeNode(f.createTypeParameterDeclaration(undefined, name)),

	literal: (value: string | number | boolean) => {
		if (typeof value === "string") return f.createLiteralTypeNode(f.createStringLiteral(value));
		if (typeof value === "number") {
			if (value < 0) {
				return f.createLiteralTypeNode(f.createPrefixUnaryExpression(ts.SyntaxKind.MinusToken, f.createNumericLiteral(-value)));
			}
			return f.createLiteralTypeNode(f.createNumericLiteral(value));
		}
		return f.createLiteralTypeNode(value ? f.createTrue() : f.createFalse());
	},
};

export const N = {
	id: (name: string) => f.createIdentifier(name),

	propSignature: (name: string, type: ts.TypeNode, optional = false) =>
		f.createPropertySignature(undefined, propertyName(name), optional ? f.createToken(ts.SyntaxKind.QuestionToken) : undefined, type),

	param: (name: string, type?: ts.TypeNode, modifiers: Modifier[] = []) =>
		f.createParameterDeclaration(mods(modifiers), undefined, f.createIdentifier(name), undefined, type, undefined),

	constructor: (params: ts.ParameterDeclaration[], statements: ts.Statement[] = []) =>
		f.createConstructorDeclaration(undefined, params, f.createBlock(statements, true)),

	method: (name: string, params: ts.ParameterDeclaration[], returnType: ts.TypeNode | undefined, statements: ts.Statement[], modifiers: Modifier[] = []) =>
		f.createMethodDeclaration(mods(modifiers), undefined, f.createIdentifier(name), undefined, undefined, params, returnType, f.createBlock(statements, true)),

	return: (expr?: ts.Expression) => f.createReturnStatement(expr),

	string: (value: string) => f.createStringLiteral(value),

	thisProp: (name: string) => f.createPropertyAccessExpression(f.createThis(), f.createIdentifier(name)),

	add: (left: ts.Expression, right: ts.Expression) => f.createBinaryExpression(left, ts.SyntaxKind.PlusToken, right),
};

// Convert an InferredType to its AST TypeNode. Mirrors the shape of renderType() in render-types.ts.
export function inferredToType(type: InferredType, ctx?: PromotionContext): ts.TypeNode {
	switch (type.kind) {
		case "null":
			return T.null();
		case "boolean":
			return type.literals.length === 0 ? T.boolean() : T.union(...type.literals.map((l) => T.literal(l)));
		case "number":
			return type.literals.length === 0 ? T.number() : T.union(...type.literals.map((l) => T.literal(l)));
		case "string": {
			if (type.literals.length === 0) return T.string();
			if (ctx) {
				const promoted = tryPromote(new Set(type.literals), ctx.registry, ctx.currentGroup);
				if (promoted) {
					recordImport(ctx, promoted.sourceGroup, promoted.aliasName);
					if (promoted.kind === "ref") return T.ref(promoted.aliasName);
					return T.ref("Exclude", [T.ref(promoted.aliasName), T.union(...promoted.missing.map((m) => T.literal(m)))]);
				}
			}
			return T.union(...type.literals.map((l) => T.literal(l)));
		}
		case "object":
			if (type.properties.length === 0) return T.object();
			return T.objectLiteral(type.properties.map((p) => ({ name: p.name, type: inferredToType(p.type, ctx), optional: p.optional })));
		case "tuple":
			return T.tuple(...type.items.map((t) => inferredToType(t, ctx)));
		case "array":
			return T.ref("Array", [inferredToType(type.element, ctx)]);
		case "union":
			if (type.variants.length === 0) return T.never();
			if (type.variants.length === 1) return inferredToType(type.variants[0]!, ctx);
			// Flatten any nested UnionTypeNodes so the printer doesn't wrap them in parens.
			return T.union(...flattenUnion(type.variants.map((v) => inferredToType(v, ctx))));
		case "templateIdReference":
			return T.ref(TEMPLATE_GENERIC);
		case "templateIdSlice":
			return T.conditional(
				T.ref(TEMPLATE_GENERIC),
				T.templateLiteral(type.prefix, [{ type: T.infer("Rest"), suffix: type.suffix }]),
				T.ref("Rest"),
				T.string(),
			);
	}
}

function flattenUnion(types: ts.TypeNode[]): ts.TypeNode[] {
	return types.flatMap((t) => (ts.isUnionTypeNode(t) ? flattenUnion([...t.types]) : [t]));
}
