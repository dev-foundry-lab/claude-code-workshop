# TC-05 — Regression Analysis

## Test Information

- Evaluation: TC-05 — Regression Testing
- Baseline: Skill V1
- Baseline Skill Commit: `1a91011`
- Candidate: Skill V2
- Candidate Status: Uncommitted working-tree modification
- Evaluated Cases: TC-01, TC-02, TC-03, TC-04

## Objective

Evaluate whether the Candidate V2 classification rules improve the separation of confirmed defects and optional improvements without reducing defect detection or scope compliance.

## Candidate Changes

The Candidate V2 introduces two changes to SKILL.md:

1. Explicit classification rules distinguishing confirmed findings from optional improvements.
2. A dedicated Optional Improvements report section.

No other Skill changes were observed in the reviewed diff.

## Regression Results

| Test | Baseline V1 | Candidate V2 | Result |
| --- | --- | --- | --- |
| TC-01 | 6/6 detected | 6/6 detected | PASS |
| TC-02 | 0 false positives | 0 false positives | PASS |
| TC-03 | 1/1 detected | 1/1 detected | PASS |
| TC-04 | 2/2 detected | 2/2 detected | PASS |

## Aggregate Metrics

- Expected defect detections: 9
- Observed defect detections: 9
- Aggregate recall across applicable test runs: 100%
- Confirmed false positives: 0
- Confirmed out-of-scope findings: 0
- Test cases completed: 4/4

The aggregate counts include repeated detection of defects across different test scopes.

They do not represent nine unique source-code defects.

## Classification Evaluation

Candidate V2 consistently separated confirmed findings from optional improvements in the four observed reports.

Optional improvements were not assigned defect severity and were excluded from confirmed finding counts.

The results are consistent with the intended behavior, but do not establish that the Skill modification alone caused the observed classification.

## Observed Differences

### TC-01 — Finding Aggregation

Candidate V2 detected all six expected defects but combined two related defects into one finding.

- Baseline distinct findings: 6
- Candidate distinct findings: 5

No confirmed loss of defect detection was observed.

### TC-02 — Optional Improvements

- Baseline optional improvements: 3
- Candidate optional improvements: 5

More suggestions do not necessarily indicate better review quality.

### TC-03 — Severity Classification

The unsafe any[] finding changed severity:

- Baseline: HIGH
- Candidate: MEDIUM

The defect remained detected and in scope.

The severity change is an observation, not a confirmed regression.

### TC-04 — Accessibility

Both expected accessibility defects were detected with unchanged severity.

The illustrative fix included an unrelated React key.
Claude acknowledged this as outside the review scope.

No out-of-scope finding was reported.

## Verification Limitations

- Results are based on individual Claude Code reports.
- No independent compilation or runtime verification was performed.
- Prompt wording was not established as identical across all baseline and candidate executions.
- The evaluation uses one observed run per test case and Skill version.
- Some pasted reports contained truncated or malformed text of unknown origin.
- No statistical reliability claim can be made from these results.

## Regression Assessment

No confirmed regression was observed in:

- Expected defect detection.
- Confirmed false-positive counts.
- Finding scope compliance.
- Separation of confirmed and optional findings.

Differences in finding aggregation and severity classification remain documented observations.

## Recommendation

Candidate V2 is suitable for provisional acceptance based on the four completed regression tests.

Further repeated evaluations with identical prompts would strengthen confidence in the results.

## Final Classification

PROVISIONAL PASS

No confirmed regression in the evaluated criteria.

Final Skill promotion and Git commit remain pending.
