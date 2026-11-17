# Test Design Guidelines

## Purpose

Provide a systematic approach for identifying and prioritizing test scenarios for React components written in TypeScript.

Focus on observable behavior, user impact, and regression risk.

Do not invent requirements or claim coverage without evidence.

## Behavior Discovery

Analyze the component's public interface and observable behavior.

Identify:

- Required and optional props.
- Conditional rendering.
- User interactions.
- State transitions visible to users.
- Callback contracts.
- Loading, empty, and error states when applicable.
- Asynchronous behavior when applicable.

Distinguish implemented behavior from assumed requirements.

## Scenario Categories

Consider the following categories when relevant:

### Happy Path

Verify the primary expected behavior using valid inputs.

### Empty States

Verify behavior when collections are empty or optional content is absent.

### Boundary Conditions

Consider minimum, maximum, and other meaningful input boundaries.

### User Interactions

Verify clicks, typing, selections, and keyboard interactions when applicable.

### Prop Changes

Verify observable updates when component props change.

### Error Scenarios

Verify error handling only when the component exposes or implements relevant behavior.

### Asynchronous Scenarios

Verify loading, success, and failure transitions when supported by the component.

## Test Priority

Use three priority levels:

### HIGH

Critical user-facing behavior, important business rules, or high-risk regressions.

### MEDIUM

Relevant secondary behavior, meaningful edge cases, or moderately risky interactions.

### LOW

Minor behaviors, low-risk edge cases, or optional refinements.

Explain each priority using observable impact and regression risk.

Do not confuse test priority with defect severity.

## Coverage Assessment

Inspect existing tests only within the authorized scope.

For each scenario, distinguish between:

- Covered by an inspected test.
- Confirmed missing within the inspected test scope.
- Not verifiable from available evidence.

Do not infer repository-wide coverage from a subset of files.

Do not invent numerical coverage percentages.

## Scenario Specification

Each proposed test scenario should include:

- Unique ID.
- Priority.
- Behavior under test.
- Preconditions.
- Test inputs or user actions.
- Expected observable result.
- Reason for inclusion.
- Coverage status.

## Avoiding Redundant Tests

- Prefer meaningful behavioral coverage over test quantity.
- Avoid duplicate scenarios without additional value.
- Do not test React framework internals.
- Do not require implementation-specific assertions.
- Prefer maintainable tests that survive reasonable refactoring.

## Evidence and Limitations

- Ground observations in inspected source files.
- Clearly label assumptions.
- Distinguish proposed tests from executed tests.
- Report unavailable files and unverified coverage.
- Never claim a test passed without execution evidence.
