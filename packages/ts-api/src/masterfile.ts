import type { MasterfileEntry } from "pogo-masterfile-types/entries";
import { EntryNotFoundError } from "./errors";
import { defaultFetcher, DEFAULT_MASTERFILE_URL } from "./fetch";
import { GROUP_NAMES, type GroupName } from "./group-names";
import type {
	EntriesByGroup,
	EntryByTemplateID,
	TemplateIDsByGroup,
} from "./lookup-tables";
import type { FromRemoteOptions } from "./types";

// ── Group accessor ─────────────────────────────────────────────────────────

export interface GroupAccessor<G extends GroupName> {
	get<T extends TemplateIDsByGroup[G] & keyof EntryByTemplateID>(
		templateId: T,
	): EntryByTemplateID[T];
	get(templateId: string): EntriesByGroup[G];

	tryGet<T extends TemplateIDsByGroup[G] & keyof EntryByTemplateID>(
		templateId: T,
	): EntryByTemplateID[T] | undefined;
	tryGet(templateId: string): EntriesByGroup[G] | undefined;

	has(templateId: string): templateId is TemplateIDsByGroup[G] & string;

	all(): readonly EntriesByGroup[G][];
	templateIds(): readonly (TemplateIDsByGroup[G] & string)[];

	find(
		predicate: (entry: EntriesByGroup[G]) => boolean,
	): EntriesByGroup[G] | undefined;
	filter(
		predicate: (entry: EntriesByGroup[G]) => boolean,
	): readonly EntriesByGroup[G][];

	readonly size: number;
	[Symbol.iterator](): IterableIterator<EntriesByGroup[G]>;
}

type GroupAccessorMap = { [G in GroupName]: GroupAccessor<G> };

// ── Class ──────────────────────────────────────────────────────────────────

export class Masterfile {
	#entries: readonly MasterfileEntry[] = [];
	#byTemplateId: Map<string, MasterfileEntry> = new Map();
	#byGroup: Map<GroupName, MasterfileEntry[]> = new Map();

	private constructor(entries: readonly MasterfileEntry[]) {
		this.#install(entries);
		for (const groupName of GROUP_NAMES) {
			this.#installAccessor(groupName);
		}
	}

	// ── Loaders ──
	static async fromRemote(
		opts: FromRemoteOptions = {},
	): Promise<Masterfile> {
		const url = opts.url ?? DEFAULT_MASTERFILE_URL;
		const fetcher = opts.fetcher ?? defaultFetcher;
		const entries = await fetcher(url, opts.signal);
		return new Masterfile(entries);
	}

	static fromJson(json: readonly MasterfileEntry[]): Masterfile {
		return new Masterfile(json);
	}

	// ── Core lookups ──
	getEntry<T extends keyof EntryByTemplateID>(
		templateId: T,
	): EntryByTemplateID[T];
	getEntry(templateId: string): MasterfileEntry;
	getEntry(templateId: string): MasterfileEntry {
		const entry = this.#byTemplateId.get(templateId);
		if (!entry) throw new EntryNotFoundError(templateId);
		return entry;
	}

	tryGetEntry<T extends keyof EntryByTemplateID>(
		templateId: T,
	): EntryByTemplateID[T] | undefined;
	tryGetEntry(templateId: string): MasterfileEntry | undefined;
	tryGetEntry(templateId: string): MasterfileEntry | undefined {
		return this.#byTemplateId.get(templateId);
	}

	has(templateId: string): templateId is keyof EntryByTemplateID & string {
		return this.#byTemplateId.has(templateId);
	}

	getAll(): readonly MasterfileEntry[] {
		return this.#entries;
	}

	getGroup<G extends GroupName>(group: G): readonly EntriesByGroup[G][] {
		return (this.#byGroup.get(group) ?? []) as unknown as readonly EntriesByGroup[G][];
	}

	// ── Introspection ──
	groups(): readonly GroupName[] {
		return GROUP_NAMES;
	}

	// `templateIds()` no-arg returns all IDs as plain strings — the literal
	// union over 18k+ entries exceeds TS's "expression too complex" threshold.
	// `templateIds(group)` returns the narrow per-group union.
	templateIds(): readonly string[];
	templateIds<G extends GroupName>(
		group: G,
	): readonly (TemplateIDsByGroup[G] & string)[];
	templateIds(group?: GroupName): readonly string[] {
		if (group === undefined) {
			return [...this.#byTemplateId.keys()];
		}
		return (this.#byGroup.get(group) ?? []).map((e) => e.templateId);
	}

	[Symbol.iterator](): IterableIterator<MasterfileEntry> {
		return this.#entries[Symbol.iterator]();
	}

	get size(): number {
		return this.#entries.length;
	}

	get raw(): readonly MasterfileEntry[] {
		return this.#entries;
	}

	// ── Mutation ──
	async refresh(opts: FromRemoteOptions = {}): Promise<void> {
		const url = opts.url ?? DEFAULT_MASTERFILE_URL;
		const fetcher = opts.fetcher ?? defaultFetcher;
		const entries = await fetcher(url, opts.signal);
		this.#install(entries);
	}

	update(json: readonly MasterfileEntry[]): void {
		this.#install(json);
	}

	// ── Top-level search ──
	find(
		predicate: (entry: MasterfileEntry) => boolean,
	): MasterfileEntry | undefined {
		return this.#entries.find(predicate);
	}

	filter(
		predicate: (entry: MasterfileEntry) => boolean,
	): readonly MasterfileEntry[] {
		return this.#entries.filter(predicate);
	}

	findByPattern(pattern: RegExp): readonly MasterfileEntry[] {
		return this.#entries.filter((e) => pattern.test(e.templateId));
	}

	// ── Internals ──
	#install(entries: readonly MasterfileEntry[]): void {
		const byTemplateId = new Map<string, MasterfileEntry>();
		const byGroup = new Map<GroupName, MasterfileEntry[]>();
		for (const groupName of GROUP_NAMES) {
			byGroup.set(groupName, []);
		}

		for (const entry of entries) {
			byTemplateId.set(entry.templateId, entry);
			const group = detectGroup(entry);
			if (group !== undefined) {
				byGroup.get(group)!.push(entry);
			} else {
				// Singleton-shaped (or stub): fold into the synthetic "singletons" group.
				const singletonsKey = "singletons" as GroupName;
				const list = byGroup.get(singletonsKey);
				if (list) list.push(entry);
			}
		}

		// Atomic swap: only mutate `this` once both maps are fully built.
		this.#entries = entries;
		this.#byTemplateId = byTemplateId;
		this.#byGroup = byGroup;
	}

	#installAccessor<G extends GroupName>(groupName: G): void {
		const self = this;
		const accessor: GroupAccessor<G> = {
			get(templateId: string): EntriesByGroup[G] {
				const entry = self.#byTemplateId.get(templateId);
				if (!entry) throw new EntryNotFoundError(templateId);
				return entry as EntriesByGroup[G];
			},
			tryGet(templateId: string): EntriesByGroup[G] | undefined {
				return self.#byTemplateId.get(templateId) as
					| EntriesByGroup[G]
					| undefined;
			},
			has(templateId: string): templateId is TemplateIDsByGroup[G] & string {
				const list = self.#byGroup.get(groupName) ?? [];
				return list.some((e) => e.templateId === templateId);
			},
			all(): readonly EntriesByGroup[G][] {
				return (self.#byGroup.get(groupName) ?? []) as unknown as readonly EntriesByGroup[G][];
			},
			templateIds(): readonly (TemplateIDsByGroup[G] & string)[] {
				return (self.#byGroup.get(groupName) ?? []).map(
					(e) => e.templateId,
				) as unknown as readonly (TemplateIDsByGroup[G] & string)[];
			},
			find(predicate: (e: EntriesByGroup[G]) => boolean) {
				return ((self.#byGroup.get(groupName) ?? []) as unknown as readonly EntriesByGroup[G][]).find(
					predicate,
				);
			},
			filter(predicate: (e: EntriesByGroup[G]) => boolean) {
				return ((self.#byGroup.get(groupName) ?? []) as unknown as readonly EntriesByGroup[G][]).filter(
					predicate,
				);
			},
			get size() {
				return (self.#byGroup.get(groupName) ?? []).length;
			},
			[Symbol.iterator](): IterableIterator<EntriesByGroup[G]> {
				return ((self.#byGroup.get(groupName) ?? []) as unknown as EntriesByGroup[G][])[
					Symbol.iterator
				]();
			},
		};
		(this as unknown as Record<string, unknown>)[groupName] = accessor;
	}
}

export interface Masterfile extends GroupAccessorMap {}

/**
 * Extract the group discriminator from a masterfile entry by inspecting the
 * non-`templateId` keys of its `data` payload. Returns `undefined` for
 * singleton-shaped entries (whose discriminator key is unique per entry, not
 * shared) and stub entries (no payload).
 */
function detectGroup(entry: MasterfileEntry): GroupName | undefined {
	const dataKeys = Object.keys(entry.data).filter((k) => k !== "templateId");
	const first = dataKeys[0];
	if (first === undefined) return undefined;
	if ((GROUP_NAMES as readonly string[]).includes(first)) {
		return first as GroupName;
	}
	return undefined;
}
