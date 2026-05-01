import { describe, expect, test } from "bun:test";
import { emitCargo } from "./emit-cargo.ts";

describe("emitCargo", () => {
	test("declares the pogo-masterfile package", () => {
		const out = emitCargo();
		expect(out).toContain('name = "pogo-masterfile"');
		expect(out).toContain('version = "0.1.0"');
	});

	test("declares the rust 2024 edition + 1.85 minimum", () => {
		const out = emitCargo();
		expect(out).toContain('edition = "2024"');
		expect(out).toContain('rust-version = "1.85"');
	});

	test("declares async-default + blocking features", () => {
		const out = emitCargo();
		expect(out).toContain('default = ["async"]');
		expect(out).toContain('async = ["dep:tokio"');
		expect(out).toContain('blocking = ["dep:reqwest"');
	});

	test("declares pogo-masterfile-types as a path dependency", () => {
		const out = emitCargo();
		expect(out).toContain('pogo-masterfile-types = { version = "0.1", path = "../rust" }');
	});

	test("includes thiserror, serde, serde_json", () => {
		const out = emitCargo();
		expect(out).toContain("thiserror");
		expect(out).toContain("serde");
		expect(out).toContain("serde_json");
	});
});
