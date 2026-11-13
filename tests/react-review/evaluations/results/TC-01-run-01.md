# TC-01 — Evaluation Run 01

## Execution

- Test case: TC-01
- Skill: /react-review
- Component: examples/react-review/UserList.tsx
- Scope: Full review
- Evaluation method: Manual
- Status: Completed

## Expected Findings

| ID | Detected | Reported Severity |
|---|---|---|
| F-01 | Yes | MEDIUM |
| F-02 | Yes | HIGH |
| F-03 | Yes | MEDIUM |
| F-04 | Yes | MEDIUM |
| F-05 | Yes | HIGH |
| F-06 | Yes | MEDIUM |

## Additional Findings

### AV-01 — Missing Empty State

- Severity: LOW
- Category: Accessibility / Maintainability
- Classification: Valid contextual improvement
- False positive: No
- Notes: The component renders an empty list without feedback.

## Metrics

- Expected findings: 6
- Expected findings detected: 6
- Additional valid findings: 1
- False positives: 0
- False negatives: 0
- True positives (including additional valid findings): 7
- Recall: 100%
- Precision: 100%

## Verification

- Static source review: Reported
- TypeScript compilation: Not performed
- ESLint: Not performed
- Runtime tests: Not performed
- Accessibility runtime tests: Not performed
- Reference reads: Reported, not independently verified
- Source files modified: None reported

## Observations

- All six expected defects were detected.
- The additional finding was appropriately described as a potential UX improvement.
- The suggested fixes addressed the expected defects.
- The review did not perform executable validation.
- The reported absence of TypeScript configuration was limited to the repository root.

## Conclusion

TC-01 passed the manual evaluation.

Results are preliminary and apply to one execution only.
