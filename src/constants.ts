// Types
export const TEMPLATE_GENERIC = `TemplateID`;
export const SIMPLIFY = `S`;
export const WIDEN = `W`;

const lower = <T extends string>(str: T) => str.toLowerCase() as Lowercase<T>;

// Naming Schemes
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

export const IMPORT = "import";
export const EXPORT = "export";
export const INTERFACE = "interface";
export const BARREL_TYPE = "Masterfile";

// Various Configs
export const GAME_MASTER_URL = "https://raw.githubusercontent.com/alexelgt/game_masters/refs/heads/master/GAME_MASTER.json";

// Promotion threshold: when an inline literal union is a subset of a registered
// group's templateIds, it gets rewritten as `Exclude<Alias, ...missing>` only if
// the missing fraction is at most this ratio. Above the ratio, the union stays
// inline (an Exclude with most of the members listed reads worse than the inline).
export const PROMOTION_EXCLUDE_DELTA_RATIO = 0.25;
