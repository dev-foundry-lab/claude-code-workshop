# TC-04 — Evaluation Run 01

## Test Information

- Test Case: TC-04
- Skill: `/react-review`
- Target: `examples/react-review/UserList.tsx`
- Scope: Accessibility only
- Execution: Manual, Claude Code
- Expected defects: 2

## Observed Findings

### A-01 — Inaccessible Clickable Div

- Severity: HIGH
- Expected: Yes
- Detected: Yes
- Classification: True Positive
- Evidence: `<div onClick={() => onSelectUser(user)}>`
- Suggested fix: Native `<button type="button">`
- Relevant WCAG: 2.1.1, 4.1.2

### A-02 — Missing Accessible Input Label

- Severity: MEDIUM
- Expected: Yes
- Detected: Yes
- Classification: True Positive
- Evidence: Input with placeholder but no associated label
- Suggested fix: Associated `<label>` using `htmlFor` and `id`

## Optional Improvements

- O-01: Announce dynamic search results using `role="status"`.
- O-02: Give the section an accessible name when appropriate.
- O-03: Verify heading hierarchy in the containing page.

All three were explicitly classified as optional.

## Scope Evaluation

- Confirmed findings reported: 2
- In-scope confirmed findings: 2
- Out-of-scope findings: 0
- Scope Compliance: 100%

## Detection Evaluation

- Expected defects: 2
- Expected defects detected: 2
- Recall: 100%
- Confirmed false positives: 0
- Optional improvements: 3

## Checks Reported by Claude Code

- Static semantic HTML review
- Static keyboard accessibility review
- Accessible name inspection
- ARIA attribute inspection
- Dynamic content announcement review

## Checks Not Performed

- Browser rendering
- Real keyboard interaction
- Screen reader testing
- Automated axe or Lighthouse testing
- Color contrast measurement
- TypeScript compilation of suggested code

## Additional Observations

- Claude respected the requested Accessibility scope.
- Both expected defects were detected.
- Optional improvements were clearly separated from defects.
- The suggested solution introduced a separate view component, which was not required to fix the accessibility issues.
- The code example was not compiled or tested.
- Claude reported no project file modifications.
- Claude reported not reading evaluation documents.

## Final Result

PASS — Both expected accessibility defects detected with no out-of-scope findings.

Improvement opportunity: Prefer minimal, targeted code examples when proposing fixes.
