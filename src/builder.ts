// ast-file-builder.ts
import ts from "typescript";

type Modifier = "export" | "default" | "declare" | "async" | "readonly" | "private" | "protected" | "public" | "static" | "abstract" | "override";

const f = ts.factory;
f.createWithStatement;

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

export class AstFileBuilder {
	private statements: ts.Statement[] = [];
	private leadingComment?: string;

	header(text: string): this {
		this.leadingComment = text;
		return this;
	}

	importNamed(modulePath: string, names: string[], typeOnly = false): this {
		this.statements.push(
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

		return this;
	}

	exportTypeStar(modulePath: string): this {
		this.statements.push(f.createExportDeclaration(undefined, true, undefined, f.createStringLiteral(modulePath)));
		return this;
	}

	exportTypeAlias(name: string, type: ts.TypeNode): this {
		this.statements.push(f.createTypeAliasDeclaration(mods(["export"]), f.createIdentifier(name), undefined, type));

		return this;
	}

	exportInterface(name: string, members: ts.TypeElement[]): this {
		this.statements.push(f.createInterfaceDeclaration(mods(["export"]), f.createIdentifier(name), undefined, undefined, members));

		return this;
	}

	exportClass(name: string, members: ts.ClassElement[]): this {
		this.statements.push(f.createClassDeclaration(mods(["export"]), f.createIdentifier(name), undefined, undefined, members));

		return this;
	}

	addStatement(statement: ts.Statement): this {
		this.statements.push(statement);
		return this;
	}

	render(fileName = "generated.ts"): string {
		const sourceFile = f.createSourceFile(this.statements, f.createToken(ts.SyntaxKind.EndOfFileToken), ts.NodeFlags.None);

		// Optional, but useful for tools/debugging.
		sourceFile.fileName = fileName;

		const printer = ts.createPrinter({
			newLine: ts.NewLineKind.LineFeed,
			removeComments: false,
		});

		const output = printer.printFile(sourceFile);
		return this.leadingComment ? `// ${this.leadingComment}\n\n${output}` : output;
	}
}

export const T = {
	string: () => f.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
	number: () => f.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
	boolean: () => f.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword),
	void: () => f.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword),
	unknown: () => f.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword),

	ref: (name: string, args?: ts.TypeNode[]) => f.createTypeReferenceNode(f.createIdentifier(name), args),

	array: (type: ts.TypeNode) => f.createArrayTypeNode(type),

	union: (...types: ts.TypeNode[]) => f.createUnionTypeNode(types),

	literal: (value: string | number | boolean) => {
		if (typeof value === "string") return f.createLiteralTypeNode(f.createStringLiteral(value));
		if (typeof value === "number") return f.createLiteralTypeNode(f.createNumericLiteral(value));
		return f.createLiteralTypeNode(value ? f.createTrue() : f.createFalse());
	},
};

export const N = {
	id: (name: string) => f.createIdentifier(name),

	propSignature: (name: string, type: ts.TypeNode, optional = false) =>
		f.createPropertySignature(undefined, f.createIdentifier(name), optional ? f.createToken(ts.SyntaxKind.QuestionToken) : undefined, type),

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
