import { describe, expect, test } from "bun:test";
import type { DeprecatedSet } from "./deprecated/types";
import { applyDiff } from "./update-deprecated";

describe("applyDiff", () => {
	test("adds newly-deprecated to existing discriminator (and bumps lastSeen)", () => {
		const current: DeprecatedSet = new Map();
		current.set("foo", {
			discriminator: "foo",
			templateIds: new Set(["A"]),
			lastSeen: "2026-01-01",
			entryCount: 1,
			dataTypeBody: { ts: "export interface DeprecatedFooData {}", rust: "", go: "" },
		});
		const out = applyDiff({
			current,
			newlyDeprecated: new Set(["B"]),
			newlyRevived: new Set(),
			discriminatorOfId: new Map([["B", "foo"]]),
			dataBodiesByDiscriminator: new Map(),
			today: "2026-05-03",
		});
		expect(out.get("foo")?.templateIds.has("A")).toBe(true);
		expect(out.get("foo")?.templateIds.has("B")).toBe(true);
		expect(out.get("foo")?.entryCount).toBe(2);
		expect(out.get("foo")?.lastSeen).toBe("2026-05-03");
		// dataTypeBody for an existing discriminator is NOT updated.
		expect(out.get("foo")?.dataTypeBody.ts).toBe("export interface DeprecatedFooData {}");
	});

	test("creates new discriminator for unseen newly-deprecated id", () => {
		const out = applyDiff({
			current: new Map(),
			newlyDeprecated: new Set(["X"]),
			newlyRevived: new Set(),
			discriminatorOfId: new Map([["X", "newDiscriminator"]]),
			dataBodiesByDiscriminator: new Map([["newDiscriminator", { ts: "export interface DeprecatedNewDiscriminatorData {}", rust: "", go: "" }]]),
			today: "2026-05-03",
		});
		expect(out.get("newDiscriminator")?.templateIds.has("X")).toBe(true);
		expect(out.get("newDiscriminator")?.dataTypeBody.ts).toContain("DeprecatedNewDiscriminatorData");
	});

	test("removes revived id from discriminator", () => {
		const current: DeprecatedSet = new Map();
		current.set("foo", {
			discriminator: "foo",
			templateIds: new Set(["A", "B"]),
			lastSeen: "2026-01-01",
			entryCount: 2,
			dataTypeBody: { ts: "x", rust: "", go: "" },
		});
		const out = applyDiff({
			current,
			newlyDeprecated: new Set(),
			newlyRevived: new Set(["A"]),
			discriminatorOfId: new Map(),
			dataBodiesByDiscriminator: new Map(),
			today: "2026-05-03",
		});
		expect(out.get("foo")?.templateIds.has("A")).toBe(false);
		expect(out.get("foo")?.entryCount).toBe(1);
	});

	test("drops discriminator when its last id revives", () => {
		const current: DeprecatedSet = new Map();
		current.set("foo", {
			discriminator: "foo",
			templateIds: new Set(["A"]),
			lastSeen: "2026-01-01",
			entryCount: 1,
			dataTypeBody: { ts: "x", rust: "", go: "" },
		});
		const out = applyDiff({
			current,
			newlyDeprecated: new Set(),
			newlyRevived: new Set(["A"]),
			discriminatorOfId: new Map(),
			dataBodiesByDiscriminator: new Map(),
			today: "2026-05-03",
		});
		expect(out.has("foo")).toBe(false);
	});
});
