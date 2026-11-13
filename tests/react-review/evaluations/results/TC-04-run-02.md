# TC-04 — Evaluation Run 02

## Test Information

- Test Case: TC-04
- Skill Version: Candidate V2
- Baseline Skill Commit: `1a91011`
- Target: `examples/react-review/UserList.tsx`
- Review Scope: Accessibility only
- Evaluation Type: Regression Testing

## Detection Results

| Expected Defect | Baseline V1 | Candidate V2 |
| --- | --- | --- |
| A-01 — Inaccessible clickable div | HIGH | HIGH |
| A-02 — Missing accessible input label | MEDIUM | MEDIUM |

Both expected defects were detected.

## Metrics

- Expected defects: 2
- Detected defects: 2
- Recall: 100%
- Confirmed findings: 2
- Confirmed false positives: 0
- Out-of-scope findings: 0
- Optional improvements: 3

## Optional Improvements

Claude reported three optional improvements:

1. Announce filtered results using an ARIA live region.
2. Display a message when no users match the search.
3. Give the section an accessible name using aria-labelledby.

These suggestions were not classified as defects.

## Baseline Comparison

| Metric | Baseline V1 | Candidate V2 |
| --- | --- | --- |
| Expected defects detected | 2/2 | 2/2 |
| Confirmed findings | 2 | 2 |
| Confirmed false positives | 0 | 0 |
| Out-of-scope findings | 0 | 0 |
| Optional improvements | 3 | 3 |

Finding severity remained unchanged.

## Scope Evaluation

- Accessibility scope respected in confirmed findings.
- No Type Safety findings.
- No React Hooks findings.
- No Performance findings.
- No Maintainability findings.

The illustrative fix added a React list key.
Claude explicitly acknowledged that this change was outside the requested review scope.

This was not reported as a finding, but it was an unnecessary modification in the example.

## Verification

Claude reported:

- Static accessibility review.
- Inspection of the accessibility Skill reference.
- No browser keyboard testing.
- No screen reader testing.
- No automated accessibility testing.
- No source modifications.
- No evaluation documents inspected.

These actions were reported, not independently verified.

## Observations

- Confirmed findings and optional improvements were separated.
- Expected defect detection was preserved.
- Severity classifications were preserved.
- Some pasted report text appeared truncated or malformed.
- The cause of the formatting issue is unknown.

## Preliminary Result

PASS — Expected accessibility defects detected.

No confirmed regression in defect detection, classification, or finding scope.
