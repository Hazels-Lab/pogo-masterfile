import { describe, expect, test } from "bun:test";
import type { DeprecatedDiscriminator, DeprecatedSet } from "./types";

describe("deprecated types", () => {
	test("DeprecatedDiscriminator has expected shape", () => {
		const sample: DeprecatedDiscriminator = {
			discriminator: "eventPassTierSettings",
			templateIds: new Set(["FOO", "BAR"]),
			lastSeen: "2026-04-09",
			entryCount: 2,
			dataTypeBody: { ts: "interface ...", rust: "pub struct ...", go: "type ... struct ..." },
		};
		expect(sample.discriminator).toBe("eventPassTierSettings");
		expect(sample.templateIds.size).toBe(2);
	});

	test("DeprecatedSet maps discriminators to their entries", () => {
		const set: DeprecatedSet = new Map();
		set.set("foo", {
			discriminator: "foo",
			templateIds: new Set(["X"]),
			lastSeen: "2026-04-09",
			entryCount: 1,
			dataTypeBody: { ts: "", rust: "", go: "" },
		});
		expect(set.get("foo")?.templateIds.has("X")).toBe(true);
	});
});
