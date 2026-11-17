# Vitest Testing Guidelines

## Purpose

Provide technical guidance for proposing unit and component tests using Vitest with TypeScript.

Use this reference when designing test cases, assertions, mocks, or asynchronous tests.

Do not execute tests or modify project files.

## Test Structure

- Use `describe` to group related test scenarios when useful.
- Use `it` or `test` to describe observable behavior.
- Prefer descriptive test names.
- Keep each test focused on one behavior.
- Follow the project's existing testing conventions when available.

Example:

```ts
import { describe, expect, it } from "vitest";

describe("sum", () => {
  it("returns the sum of two numbers", () => {
    expect(2 + 3).toBe(5);
  });
});
```

## Assertions

- Use `expect` for assertions.
- Prefer explicit assertions over snapshots when testing behavior.
- Use `toBe` for primitive equality.
- Use `toEqual` or `toStrictEqual` for structured values.
- Use DOM-specific matchers only when their availability is confirmed.

Do not assume that `@testing-library/jest-dom` is configured.

## Mocks and Spies

- Use `vi.fn()` to create mock functions.
- Use `vi.spyOn()` when observing an existing method is necessary.
- Mock external dependencies only when needed.
- Avoid mocking React internals or implementation details.
- Restore or clear mocks between tests when appropriate.

Example:

```ts
import { expect, it, vi } from "vitest";

it("calls the callback with the expected value", () => {
  const onSelect = vi.fn<(id: number) => void>();

  onSelect(42);

  expect(onSelect).toHaveBeenCalledWith(42);
});
```

## Asynchronous Tests

- Use `async` and `await` for asynchronous operations.
- Await promises that affect the expected result.
- Avoid arbitrary delays and timers.
- Prefer `findByRole` or `waitFor` from React Testing Library when testing asynchronous UI updates.
- Use fake timers only when the behavior requires them.

## TypeScript Guidelines

- Use meaningful types for test data.
- Avoid `any`.
- Prefer typed fixtures and factories.
- Do not suppress TypeScript errors without justification.
- Ensure proposed examples are compatible with the component's public interface.

## Reliability

- Tests should be deterministic and independent.
- Avoid relying on execution order.
- Reset shared state when necessary.
- Do not make assertions about unverified implementation details.
- Do not claim that suggested tests pass unless execution evidence exists.

## Verification

When suggesting Vitest tests:

- State whether Vitest is installed or whether this is unknown.
- State whether the test environment is configured or unknown.
- Identify any required setup or dependencies.
- Clearly label examples as unexecuted when applicable.
