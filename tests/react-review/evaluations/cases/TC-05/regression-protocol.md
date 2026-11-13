# TC-05 — Regression Testing Protocol

## Test Information

- ID: TC-05
- Name: React Review Regression Testing
- Skill: `/react-review`
- Baseline: V1
- Candidate: V2
- Test cases: TC-01, TC-02, TC-03, TC-04

## Objective

Verify that changes to the react-review Skill do not
introduce regressions in previously evaluated behavior.

## Baseline V1

### Version Reference

- Skill version: V1
- Git commit: `1a91011`
- Commit description: `feat(react-review): add React and accessibility references`
- Skill path: `.claude/skills/react-review/`
- Evaluation cases: TC-01, TC-02, TC-03, TC-04
- Baseline status: Established

### TC-01 — Known Defects

- Expected defects: 6
- Detected defects: 6
- Recall: 100%
- Confirmed false positives: 0
- Additional valid observation: 1

### TC-02 — Clean Component

- Expected defects: 0
- Confirmed false positives: 0
- Optional improvements: 3

### TC-03 — TypeScript Scoped Review

- Expected defects: 1
- Detected defects: 1
- Scope Compliance: 100%
- Optional overlapping finding: 1

### TC-04 — Accessibility Scoped Review

- Expected defects: 2
- Detected defects: 2
- Scope Compliance: 100%
- Optional improvements: 3

## Candidate V2

Record the following before testing:

- Git commit or working tree revision
- Modified Skill files
- Reason for modification
- Expected improvement
- Potential regression risks

### Planned Change

- Target file: `.claude/skills/react-review/SKILL.md`
- Target sections: `3. Classify` and `Report Format`
- Change type: Finding classification clarification

### Hypothesis

Explicitly separating confirmed defects from optional
improvements will reduce ambiguous findings without
reducing defect detection.

### Expected Improvement

- Confirmed defects retain appropriate severity levels.
- Optional improvements are reported separately.
- Optional improvements are not counted as confirmed defects.
- Every confirmed finding includes concrete evidence.

### Regression Risks

- Claude may omit valid LOW-severity defects.
- Claude may incorrectly classify real defects as optional.
- Claude may produce fewer expected findings.
- Scoped reviews may include unrelated suggestions.

### Evaluation Strategy

Rerun TC-01, TC-02, TC-03, and TC-04 using the
same source components and prompts.

Compare Candidate V2 against Baseline V1.

Pay particular attention to LOW-severity findings,
optional improvements, and scope compliance.

## Execution Rules

- Reuse the original test components.
- Reuse the original prompts without changing scope.
- Do not expose evaluation documents to Claude Code.
- Do not modify source components during evaluation.
- Record each test execution separately.
- Record the Skill version used for each execution.
- Distinguish confirmed defects from optional improvements.
- Record which checks were actually performed.

## Comparison Metrics

For each test case, compare:

- Expected defects detected
- Confirmed false positives
- Out-of-scope findings
- Optional improvements
- Evidence quality
- Unsupported claims
- Checks actually performed

## Regression Criteria

Flag a potential regression when:

- An expected defect is no longer detected.
- A new confirmed false positive appears.
- A new out-of-scope finding appears.
- Evidence quality materially deteriorates.
- The Skill makes unsupported verification claims.

A single changed result is not sufficient to prove
a systematic regression.

Repeat suspicious cases before drawing conclusions.

## Success Criteria

- All expected defects remain detectable.
- No new confirmed false positives.
- No new out-of-scope findings.
- No unsupported verification claims.
- Any intended improvement is documented.

## Final Classification

Classify the candidate as:

- PASS: No confirmed regressions observed.
- INVESTIGATE: Potential regression requiring repeated tests.
- FAIL: Confirmed regression against defined criteria.

## Limitations

LLM outputs are nondeterministic.

Manual evaluations provide useful evidence but do not
guarantee identical behavior across future executions.

For stronger evidence, repeat test cases and compare
results across multiple runs.
