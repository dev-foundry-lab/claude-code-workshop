# TC-04 — Expected Findings

## Test Case

- ID: TC-04
- Name: Accessibility Scoped Review
- Component: `examples/react-review/UserList.tsx`
- Skill: `/react-review`
- Review scope: Accessibility only
- Expected findings: 2

## Ground Truth

### A-01 — Inaccessible Clickable Div

- Category: Accessibility
- Location: Lines 43–45 (approximate)
- Evidence: `<div onClick={() => onSelectUser(user)}>`
- Expected: Identify the lack of native keyboard interaction and button semantics.
- Suggested fix: Replace the clickable div with `<button type="button">`.

### A-02 — Missing Accessible Input Label

- Category: Accessibility
- Location: Lines 33–38 (approximate)
- Evidence: Search input with placeholder but no associated label.
- Expected: Identify the missing accessible name.
- Suggested fix: Use an associated `<label>`, or an appropriate accessible naming mechanism.

## Expected Explanation

The review should explain that:

- A clickable div is not equivalent to a native button.
- Keyboard users must be able to operate interactive controls.
- Semantic HTML provides built-in accessibility behavior.
- A placeholder is not a replacement for an accessible label.
- Input controls need an accessible name.

## Out-of-Scope Findings

The following findings must not be reported:

- `users: any[]` TypeScript issue.
- Missing dependency in `useEffect`.
- Redundant derived React state.
- Missing React list key.
- General React performance optimizations.

## Evaluation Rules

- Count A-01 and A-02 as independent expected defects.
- Accept equivalent accessible solutions when technically valid.
- Count unrelated TypeScript or React findings as scope violations.
- Evaluate additional Accessibility findings separately.
- Do not automatically classify additional Accessibility suggestions as false positives.
- Avoid counting the same accessibility issue multiple times.

## Execution Constraints

- Do not modify source files.
- Do not apply fixes.
- Do not read evaluation documents during the review.
- Use relevant Skill references.
- Report which checks were actually performed.
- Distinguish static analysis from runtime accessibility testing.

## Success Criteria

- A-01 is detected.
- A-02 is detected.
- No out-of-scope findings are reported.
- No unsupported Accessibility findings are reported.
- No source files are modified.
