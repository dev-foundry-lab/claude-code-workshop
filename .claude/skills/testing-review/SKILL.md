---
name: testing-review
description: >
  Analyze existing React components written in TypeScript to identify missing test scenarios, assess testability, and recommend unit and integration tests using Vitest and React Testing Library.
  Use this skill when the user asks to review test coverage, identify missing tests, or design test cases for React components.
  Produce a structured report in Italian with priorities, expected behaviors, and TypeScript/TSX test examples.
  Do not modify files or execute tests.
---

# Testing Review

## Purpose

Perform a read-only test analysis of existing React components written in TypeScript.

Identify observable behaviors that should be tested, evaluate existing tests when available within the authorized scope, and recommend relevant unit and integration test scenarios.

Use Vitest and React Testing Library as the reference testing stack.

Do not perform a general code review, modify project files, install dependencies, or execute tests.

## Workflow

1. Understand the component:
   - Inspect the component and its public interface.
   - Identify props, state, events, conditional rendering, and observable behaviors.
   - Distinguish explicit requirements from assumptions.

2. Inspect existing tests:
   - Read existing tests only when included in the authorized scope.
   - Identify behaviors already covered by those tests.
   - Do not infer global test coverage from a limited set of files.
   - If tests are unavailable, explicitly state that existing coverage cannot be verified.

3. Identify test scenarios:
   - Cover primary user interactions and expected behaviors.
   - Consider prop updates, empty states, boundary conditions, and error scenarios when relevant.
   - Include accessibility-related interactions where applicable.
   - Do not invent product requirements.

4. Prioritize scenarios:
   - Use HIGH, MEDIUM, and LOW priority levels.
   - Base priorities on behavioral risk, user impact, and likelihood of regression.
   - Explain the reason for each priority.

5. Suggest tests:
   - Provide actionable examples using Vitest and React Testing Library.
   - Prefer observable behavior over implementation details.
   - Use TypeScript and TSX with explicit, meaningful types.
   - Clearly identify illustrative examples that have not been executed.

6. Report verification limits:
   - List the files inspected.
   - Distinguish confirmed observations from proposed scenarios.
   - State which checks were not performed.
   - Never claim that tests passed unless execution evidence is available.

## Report Format

Write the final report in Italian using the following structure.

### Executive Summary

- Component and files analyzed.
- Main observable behaviors.
- Overall testability assessment.
- Existing test coverage status: verified, partial, or not verifiable.
- Summary of recommended test scenarios by priority.

### Existing Tests

For each existing test found within the authorized scope:

- Test file and test name.
- Behavior verified.
- Relevant observations or limitations.

If no test files were provided or inspected, state that existing coverage is not verifiable.

Do not report a numerical coverage percentage without actual coverage evidence.

### Missing Test Scenarios

For each proposed scenario, provide:

- ID: TC-01, TC-02, etc.
- Priority: HIGH, MEDIUM, or LOW.
- Behavior to verify.
- Preconditions and test inputs.
- Expected observable result.
- Rationale for the priority.
- Coverage status: confirmed missing within inspected scope, or not verifiable.

Distinguish explicitly required behaviors from assumptions.

### Suggested Tests

Provide TypeScript/TSX examples using Vitest and React Testing Library.

- Prefer accessible queries such as getByRole.
- Test user-visible behavior rather than internal implementation details.
- Use appropriate assertions and mocks.
- Do not assume dependencies or configurations are installed.
- Clearly state that examples have not been executed.

### Optional Improvements

List non-essential improvements separately from missing test scenarios.

Do not assign defect severity to optional suggestions.

### Verification

Include:

- Files inspected.
- Checks performed.
- Checks not performed.
- Assumptions and uncertainties.
- Explicit confirmation that no files were modified and no tests were executed, if supported by the actions performed.

## References

Consult the following references when relevant to the delegated task.

### Vitest

Read `references/vitest.md` when proposing test structure, assertions, mocks, spies, or asynchronous test patterns.

### React Testing Library

Read `references/react-testing-library.md` when analyzing component rendering, accessible queries, user interactions, or asynchronous UI behavior.

### Test Design

Read `references/test-design.md` when identifying test scenarios, assigning priorities, assessing coverage evidence, or avoiding redundant tests.

Use the references as technical guidance while respecting the authorized scope and the read-only workflow.

Do not read unrelated files or evaluation fixtures unless explicitly authorized.
