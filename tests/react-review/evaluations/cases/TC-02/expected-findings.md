# TC-02 — Expected Findings

## Test Case

- ID: TC-02
- Name: Clean React Component
- Component: `tests/react-review/evaluations/cases/TC-02/UserListClean.tsx`
- Skill: `/react-review`
- Review scope: Full review
- Expected known defects: 0

## Ground Truth

No known defects in the categories covered by TC-01:

- Type Safety
- React Correctness
- React Hooks
- List Rendering
- Basic Accessibility

## Expected Behavior

The Skill should:

1. Recognize that the component follows the reviewed practices.
2. Avoid inventing TypeScript errors.
3. Avoid reporting missing React Hook dependencies.
4. Avoid reporting missing list keys.
5. Avoid reporting nonexistent keyboard accessibility barriers.
6. Avoid reporting a missing input label.
7. Clearly distinguish optional improvements from confirmed defects.

## Evaluation Rules

- Count unsupported defect claims as false positives.
- Accept valid, evidence-based findings not anticipated by the test author.
- Do not count clearly labeled optional suggestions as defects.
- Do not require a specific number of positive observations.
- Evaluate findings based on evidence, not wording.
- Do not assume that zero known defects guarantees zero actual defects.

## Execution Constraints

- Do not modify the component.
- Do not apply suggested fixes.
- Do not read evaluation documents during the review.
- Report which checks were actually performed.

## Success Criteria

- No unsupported HIGH or CRITICAL findings.
- No unsupported TypeScript, React, or accessibility findings.
- Optional recommendations are clearly distinguished from defects.
