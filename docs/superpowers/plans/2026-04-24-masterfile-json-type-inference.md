# Masterfile JSON Type Inference Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace emitted discriminator payload `unknown` types with inferred JSON shapes while preserving the current grouping, filenames, and emitted type names.

**Architecture:** Add a language-neutral inference IR in `src/infer.ts`, then teach `src/emit.ts` to render that IR into TypeScript. The IR preserves number kind (`uint` / `int` / `float`), tuple-vs-array decisions, optional properties, nullability, and literal values so Go/Rust emitters can reuse it later.

**Tech Stack:** TypeScript, Bun test runner, existing `src`-only generator pipeline.

---

## File Structure

| Path | Responsibility |
|---|---|
| `src/infer.ts` | New pure inference builder and JSON type IR. |
| `src/infer.test.ts` | Focused tests for numeric kinds, literals, objects, tuples, arrays, and unions. |
| `src/emit.ts` | Replace `unknown` output with rendered inferred types. |
| `src/emit.test.ts` | Update fixtures and assertions to verify before/after output. |
| `src/group.ts` | Keep existing grouping unchanged. |
| `src/fixtures.ts` | Add representative payloads with fixed tuples, variable arrays, literals, optional fields, and nulls. |

## Task 1: Add Language-Neutral Inference IR

- [ ] Create `src/infer.ts` with exported numeric kind, inferred type interfaces, `InferenceBuilder`, `inferJsonType`, and `inferJsonTypes`.
- [ ] Classify numbers as `uint`, `int`, or `float`, preserving exact numeric literals in sorted order.
- [ ] Infer fixed-length arrays as tuples and mixed-length arrays as variable arrays.
- [ ] Merge object properties with required/optional tracking; keep `null` as a value.
- [ ] Add `src/infer.test.ts` coverage for numbers, fixed tuples, variable arrays, optional fields, and null unions.
- [ ] Run `bun test src/infer.test.ts`.
- [ ] Commit with `feat: infer language-neutral JSON shapes`.

## Task 2: Render Inferred Types Into Existing TypeScript Output

- [ ] Add TypeScript render helpers in `src/emit.ts`.
- [ ] Render scalar literals, tuples, arrays, empty objects, quoted object keys, and deterministic unions.
- [ ] Update `emitGroupFile(group)` to infer payload values from the current group discriminator.
- [ ] Update `emitMiscFile(singletons)` to infer singleton discriminator payloads while preserving stub behavior.
- [ ] Run `bun test src/emit.test.ts`.
- [ ] Commit with `feat: emit inferred discriminator payload types`.

## Task 3: Strengthen Fixtures And Regression Tests

- [ ] Expand `src/fixtures.ts` with fixed 18-number `typeEffective.attackScalar`, variable arrays, nested optional fields, string literals, nulls, and singleton scalar literals.
- [ ] Update `src/emit.test.ts` assertions for no payload `unknown`, tuple syntax, variable arrays, optional properties, and unchanged alias/union names.
- [ ] Run `bun test`, `bun run typecheck`, and `bun run lint`.

## Task 4: Generate And Hand Off Output Review

- [ ] Run `bun run generate`.
- [ ] Do not manually read or parse the huge generated package files.
- [ ] Report that generation completed and ask the user to inspect whether the generated package output shape is acceptable.

## Assumptions

- This first pass changes only payload detail, not grouping, generated filenames, or existing emitted type names.
- The inference IR is intentionally richer than TypeScript output because future Go/Rust emitters need number kind and tuple metadata.
- No literal-size cap is added in v1. If exact literal unions make generated output unusable, that should be handled as a follow-up with real output evidence.
