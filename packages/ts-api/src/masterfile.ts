/** biome-ignore-all lint/suspicious/noUnsafeDeclarationMerging: the Masterfile class+interface merge below intentionally adds per-group accessor properties installed dynamically in the constructor. */

import type { MasterfileEntry } from "pogo-masterfile-types/entries";
import type { EntriesByGroup, LookupByGroup, TemplateIDsByGroup } from "pogo-masterfile-types/lookup-table";
import { EntryNotFoundError } from "./errors";
import { DEFAULT_MASTERFILE_URL, defaultFetcher } from "./fetch";
import { GROUP_NAMES, type GroupName } from "./group-names";
import type { FromRemoteOptions } from "./types";

// ── Group accessor ─────────────────────────────────────────────────────────
//
// Per-group accessors deliver literal-narrow typing through `LookupByGroup[G][T]`
// — TS only resolves the per-group Lookup interface (~hundreds of keys),
// never the global `EntryByTemplateID` (~18k keys). That's the win that lets
// the package's own `tsc --noEmit` finish in seconds instead of ~50.

export interface GroupAccessor<G extends GroupName> {
	get<T extends keyof LookupByGroup[G] & string>(templateId: T): LookupByGroup[G][T];
	get(templateId: string): EntriesByGroup[G];

	tryGet<T extends keyof LookupByGroup[G] & string>(templateId: T): LookupByGroup[G][T] | undefined;
	tryGet(templateId: string): EntriesByGroup[G] | undefined;

	has(templateId: string): templateId is keyof LookupByGroup[G] & string;

	all(): readonly EntriesByGroup[G][];
	templateIds(): readonly (TemplateIDsByGroup[G] & string)[];

	find(predicate: (entry: EntriesByGroup[G]) => boolean): EntriesByGroup[G] | undefined;
	filter(predicate: (entry: EntriesByGroup[G]) => boolean): readonly EntriesByGroup[G][];

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
	static async fromRemote(opts: FromRemoteOptions = {}): Promise<Masterfile> {
		const url = opts.url ?? DEFAULT_MASTERFILE_URL;
		const fetcher = opts.fetcher ?? defaultFetcher;
		const entries = await fetcher(url, opts.signal);
		return new Masterfile(entries);
	}

	static fromJson(json: readonly MasterfileEntry[]): Masterfile {
		return new Masterfile(json);
	}

	// ── Core lookups ──
	//
	// Top-level lookups return the wide `MasterfileEntry` union — no literal
	// narrowing. For literal narrowing, reach for the per-group accessor:
	// `mf.moveSettings.get("V0022_MOVE_MEGAHORN")` returns the exact literal
	// entry type. (Cross-group literal narrowing requires materializing the
	// global `EntryByTemplateID` interface from
	// `pogo-masterfile-types/lookup-table`, which is genuinely expensive.)

	getEntry(templateId: string): MasterfileEntry {
		const entry = this.#byTemplateId.get(templateId);
		if (!entry) throw new EntryNotFoundError(templateId);
		return entry;
	}

	tryGetEntry(templateId: string): MasterfileEntry | undefined {
		return this.#byTemplateId.get(templateId);
	}

	has(templateId: string): boolean {
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

	templateIds(): readonly string[];
	templateIds<G extends GroupName>(group: G): readonly (TemplateIDsByGroup[G] & string)[];
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
	find(predicate: (entry: MasterfileEntry) => boolean): MasterfileEntry | undefined {
		return this.#entries.find(predicate);
	}

	filter(predicate: (entry: MasterfileEntry) => boolean): readonly MasterfileEntry[] {
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
				const singletonsKey = "singletons" as GroupName;
				const list = byGroup.get(singletonsKey);
				if (list) list.push(entry);
			}
		}

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
				return self.#byTemplateId.get(templateId) as EntriesByGroup[G] | undefined;
			},
			has(templateId: string): templateId is keyof LookupByGroup[G] & string {
				const list = self.#byGroup.get(groupName) ?? [];
				return list.some((e) => e.templateId === templateId);
			},
			all(): readonly EntriesByGroup[G][] {
				return (self.#byGroup.get(groupName) ?? []) as unknown as readonly EntriesByGroup[G][];
			},
			templateIds(): readonly (TemplateIDsByGroup[G] & string)[] {
				return (self.#byGroup.get(groupName) ?? []).map((e) => e.templateId) as unknown as readonly (TemplateIDsByGroup[G] & string)[];
			},
			find(predicate: (e: EntriesByGroup[G]) => boolean) {
				return ((self.#byGroup.get(groupName) ?? []) as unknown as readonly EntriesByGroup[G][]).find(predicate);
			},
			filter(predicate: (e: EntriesByGroup[G]) => boolean) {
				return ((self.#byGroup.get(groupName) ?? []) as unknown as readonly EntriesByGroup[G][]).filter(predicate);
			},
			get size() {
				return (self.#byGroup.get(groupName) ?? []).length;
			},
			[Symbol.iterator](): IterableIterator<EntriesByGroup[G]> {
				return ((self.#byGroup.get(groupName) ?? []) as unknown as EntriesByGroup[G][])[Symbol.iterator]();
			},
		};
		(this as unknown as Record<string, unknown>)[groupName] = accessor;
	}
}

export interface Masterfile extends GroupAccessorMap {}

function detectGroup(entry: MasterfileEntry): GroupName | undefined {
	const dataKeys = Object.keys(entry.data).filter((k) => k !== "templateId");
	const first = dataKeys[0];
	if (first === undefined) return undefined;
	if ((GROUP_NAMES as readonly string[]).includes(first)) {
		return first as GroupName;
	}
	return undefined;
}
