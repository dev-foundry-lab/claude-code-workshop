# TC-03 — Expected Findings

## Test Case

- ID: TC-03
- Name: TypeScript Scoped Review
- Component: `examples/react-review/UserList.tsx`
- Skill: `/react-review`
- Review scope: Type Safety only
- Expected findings: 1

## Ground Truth

### F-01 — Unsafe TypeScript Props

- Category: Type Safety
- Location: Line 10
- Evidence: `users: any[]`
- Expected: Identify the loss of type safety.
- Suggested fix: Replace `any[]` with `User[]` or `readonly User[]`.

## Expected Explanation

The review should explain that:

- The `User` type already exists.
- `any[]` allows invalid user objects.
- Property access is not properly checked.
- The callback contract is not guaranteed by the prop type.

These are consequences of F-01, not separate defects.

## Out-of-Scope Findings

The following findings must not be reported:

- Missing `users` dependency in `useEffect`.
- Redundant derived React state.
- Missing React list key.
- Inaccessible clickable `div`.
- Missing input label.
- React performance optimizations.

## Evaluation Rules

- Count F-01 at most once.
- Accept equivalent technical explanations.
- Count unrelated React or Accessibility findings as scope violations.
- Do not count explanations of the consequences of `any[]` as scope violations.
- Evaluate findings based on technical evidence, not wording.
- Record any additional Type Safety findings separately for review.

## Execution Constraints

- Do not modify any files.
- Do not apply fixes.
- Do not read evaluation documents during the review.
- Use only the relevant Skill references.
- Report which checks were actually performed.

## Success Criteria

- F-01 is detected.
- No out-of-scope findings are reported.
- No unsupported Type Safety findings are reported.
- No source files are modified.
