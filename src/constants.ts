// Truly generic constants — language-agnostic configuration shared by every
// language emitter. Anything specific to a particular target (TS type-name
// suffixes, file/directory naming conventions, language keywords) lives in the
// emitter's own `constants.ts` (e.g., `src/typescript/constants.ts`).

export const GAME_MASTER_URL = "https://raw.githubusercontent.com/alexelgt/game_masters/refs/heads/master/GAME_MASTER.json";

// Promotion threshold: when an inline literal union is a subset of a registered
// group's templateIds, it gets rewritten as `Exclude<Alias, ...missing>` only if
// the missing fraction is at most this ratio. Above the ratio, the union stays
// inline (an Exclude with most of the members listed reads worse than the inline).
export const PROMOTION_EXCLUDE_DELTA_RATIO = 0.25;
