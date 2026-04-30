// TypeScript-specific naming and output-structure constants. Other language
// emitters maintain their own equivalents — these names ("Masterfile", "Entry",
// utility-type letters) are TS conventions and shouldn't leak into shared code.

const lower = <T extends string>(str: T) => str.toLowerCase() as Lowercase<T>;

// TS utility type names — used in generated `_utils.ts`.
export const SIMPLIFY = `S`;
export const WIDEN = `W`;

// Generic-looking suffix for the per-group templateId index lookup type.
export const TEMPLATE_GENERIC = `TemplateID`;

// Output directory + file naming. Used to compose paths like
// `{group}/entries/{bucket}.ts`, `{group}/types.ts`, etc.
export const SINGLETONS = "Singletons";
export const SINGLETONS_LOWER = lower(SINGLETONS);
export const BARREL_FILE = "index";
export const ENTRIES = "Entries";
export const ENTRIES_LOWER = lower(ENTRIES);
export const ENTRY = "Entry";
export const ENTRY_LOWER = lower(ENTRY);
export const TYPES = "Types";
export const TYPES_LOWER = lower(TYPES);
export const TYPE = "Type";
export const TYPE_LOWER = lower(TYPE);

// TS keywords and naming conventions used in generated source.
export const IMPORT = "import";
export const EXPORT = "export";
export const INTERFACE = "interface";
export const BARREL_TYPE = "Masterfile";
