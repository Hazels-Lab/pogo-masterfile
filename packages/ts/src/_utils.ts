export type S<T> = { [KeyType in keyof T]: T[KeyType] } & {};

type PW<T> = [T] extends [string]
	? string
	: [T] extends [number]
		? number
		: [T] extends [boolean]
			? boolean
			: [T] extends [bigint]
				? bigint
				: [T] extends [symbol]
					? symbol
					: T;

type KoU<T> = T extends unknown ? keyof T : never;

type VoUK<T, K extends PropertyKey> = T extends unknown ? (K extends keyof T ? T[K] : never) : never;

export type W<T> =
	// Preserve functions
	[T] extends [(...args: unknown[]) => unknown]
		? T
		: // Tuples become arrays. This is the important part:
			// Widen the whole union of element types once.
			[T] extends [readonly unknown[]]
			? Array<W<T[number]>>
			: // Objects keep properties and collapse same-shaped unions
				[T] extends [object]
				? S<{
						[K in KoU<T>]: W<VoUK<T, K>>;
					}>
				: // Literals become primitives
					PW<T>;
