# TC-01 — Evaluation Run 02

## Test Information

- Test Case: TC-01
- Skill Version: Candidate V2
- Baseline Skill Commit: `1a91011`
- Target: `examples/react-review/UserList.tsx`
- Review Scope: Full React Review
- Evaluation Type: Regression Testing

## Detection Results

| Expected Defect | Result |
| --- | --- |
| F-01 — Unsafe `any[]` | Detected |
| F-02 — Missing useEffect dependency | Detected |
| F-03 — Redundant derived state | Detected, merged with F-02 |
| F-04 — Missing list key | Detected |
| F-05 — Inaccessible clickable div | Detected |
| F-06 — Missing accessible input label | Detected |

## Metrics

- Expected defects: 6
- Detected defects: 6
- Distinct confirmed findings: 5
- Recall: 100%
- Confirmed false positives: 0
- Optional improvements: 4

## Classification Evaluation

- Confirmed findings separated from optional improvements.
- Optional improvements excluded from confirmed finding counts.
- Optional improvements received no defect severity.
- Genuine defects were not incorrectly classified as optional.

## Verification

Claude reported:

- Static analysis of the component.
- Inspection of the three Skill references.
- No source modifications.
- No TypeScript compilation or lint execution.
- No runtime tests.
- No browser or assistive technology tests.

These are reported actions, not independently verified.

## Baseline Comparison

Baseline V1:

- 6 expected defects detected.
- 6 distinct findings.
- 0 confirmed false positives.

Candidate V2:

- 6 expected defects detected.
- 5 distinct findings.
- 0 confirmed false positives.

F-02 and F-03 were combined into one finding.

This is a reporting difference, not a confirmed
loss of defect detection.

## Observations

- Optional improvements are clearly separated.
- No confirmed regression in expected defect detection.
- Some report text appeared truncated or malformed
  in the pasted output; the cause is unverified.
- Further test cases are required before evaluating
  the Candidate V2 as a whole.

## Preliminary Result

PASS — Expected defects detected.

Observation: Finding aggregation changed from
six distinct findings to five.
