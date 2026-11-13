# TC-01 — Expected Findings

## Test Case

- ID: TC-01
- Name: React component with known defects
- Component: `examples/react-review/UserList.tsx`
- Skill: `/react-review`
- Review scope: Full review
- Expected findings: 6

## Ground Truth

### F-01 — Unsafe TypeScript Props

- Category: Type Safety
- Location: Line 10
- Evidence: `users: any[]`
- Expected: Identify loss of type safety.
- Suggested fix: Use `User[]`.

### F-02 — Missing Effect Dependency

- Category: Correctness
- Location: Lines 21–27
- Evidence: The effect reads `users` but depends only on `search`.
- Expected: Identify stale filtered results when `users` changes.
- Suggested fix: Remove the unnecessary effect or correct its dependencies.

### F-03 — Redundant Derived State

- Category: Correctness
- Location: Lines 19–27
- Evidence: `filteredUsers` is derived from `users` and `search`.
- Expected: Identify unnecessary state synchronization.
- Suggested fix: Calculate filtered users during rendering.

### F-04 — Missing List Key

- Category: Correctness
- Location: Line 42
- Evidence: `<li>` inside `.map()` has no `key`.
- Expected: Identify the missing stable key.
- Suggested fix: Use `key={user.id}`.

### F-05 — Inaccessible Clickable Element

- Category: Accessibility
- Location: Lines 43–45
- Evidence: `<div>` uses `onClick` without native keyboard support.
- Expected: Identify the keyboard accessibility barrier.
- Suggested fix: Use a native `<button type="button">`.

### F-06 — Missing Form Label

- Category: Accessibility
- Location: Lines 33–38
- Evidence: The input uses a placeholder without an associated label.
- Expected: Identify the missing persistent label.
- Suggested fix: Add a visible `<label>` associated with the input.

## Evaluation Rules

- Count each expected defect at most once.
- Accept equivalent technical explanations and fixes.
- Accept combined findings when all relevant defects are clearly explained.
- Do not require exact wording or identical severity levels.
- Do not count speculative improvements as expected findings.
- Record unsupported findings separately as false positives.
- Distinguish code-level evidence from runtime verification.

## Execution Constraints

- Do not modify the component.
- Do not apply suggested fixes.
- Report which checks were actually performed.
