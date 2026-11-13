# TC-03 — Evaluation Run 02

## Test Information

- Test Case: TC-03
- Skill Version: Candidate V2
- Baseline Skill Commit: `1a91011`
- Target: `examples/react-review/UserList.tsx`
- Review Scope: Type Safety only
- Evaluation Type: Regression Testing

## Observed Findings

### F-01 — Unsafe `any[]`

- Expected: Detected
- Observed: Detected
- Baseline severity: HIGH
- Candidate severity: MEDIUM
- Location: `UserList.tsx:10`

Claude identified the unsafe prop type and explained how `any` propagates through filtering, state, and callback usage.

## Optional Improvements

Two optional improvements were reported:

1. Use `readonly User[]` for the collection.
2. Consider readonly properties in the `User` type.

Neither was classified as a confirmed defect.

## Baseline Comparison

| Metric | Baseline V1 | Candidate V2 |
| --- | --- | --- |
| Expected defects detected | 1/1 | 1/1 |
| Confirmed findings | 1 | 1 |
| Out-of-scope findings | 0 | 0 |
| Confirmed false positives | 0 | 0 |
| Optional improvements | 1 | 2 |
| Finding severity | HIGH | MEDIUM |

## Scope Evaluation

- Type Safety scope respected.
- No React Hooks findings.
- No Performance findings.
- No Accessibility findings.
- No Maintainability findings.

## Verification

Claude reported:

- Static TypeScript review.
- Inspection of the TypeScript Skill reference.
- No TypeScript compilation.
- No runtime tests.
- No source modifications.
- No evaluation documents inspected.

These actions were reported, not independently verified.

## Regression Evaluation

- Expected defect detection preserved.
- Scope compliance preserved.
- No confirmed false positives.
- Optional improvements separated correctly.
- Severity changed from HIGH to MEDIUM.

The severity difference requires monitoring but does not establish a confirmed regression.

## Preliminary Result

PASS — Detection and scope compliance preserved.

Observation: Severity classification changed.
