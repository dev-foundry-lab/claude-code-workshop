# React Testing Library Guidelines

## Purpose

Provide guidance for designing user-focused tests for React components using React Testing Library and TypeScript.

Use this reference when proposing component rendering tests, user interactions, accessibility queries, and asynchronous UI assertions.

## Core Principles

- Test observable behavior rather than implementation details.
- Prefer tests that resemble how users interact with the interface.
- Avoid inspecting React internal state or private component methods.
- Use accessible queries whenever possible.
- Keep tests independent and deterministic.

## Rendering Components

Use `render` from `@testing-library/react` to render components.

Provide required props and minimal realistic test data.

Do not assume that custom providers, routers, or contexts are available without inspecting the project.

## Query Priority

Prefer queries in this order when applicable:

1. `getByRole` with an accessible name.
2. `getByLabelText` for form controls.
3. `getByPlaceholderText` when more semantic queries are unavailable.
4. `getByText` for visible content.
5. `getByTestId` as a last resort.

Use:

- `getBy*` when an element should exist immediately.
- `queryBy*` when checking that an element is absent.
- `findBy*` when an element should appear asynchronously.

## User Interactions

Prefer `@testing-library/user-event` for realistic interactions.

- Use `userEvent.setup()` when applicable.
- Await asynchronous user interactions.
- Test observable results after interactions.
- Avoid manually invoking component event handlers.

## Assertions

- Use Vitest `expect`.
- Use DOM matchers such as `toBeInTheDocument` only when configured.
- Prefer assertions on visible text, accessible state, and user-facing outcomes.
- Avoid asserting internal component state.

## Asynchronous Behavior

- Use `findBy*` for elements that appear asynchronously.
- Use `waitFor` for assertions that require retrying.
- Avoid arbitrary timeouts.
- Do not assume network requests are mocked unless verified.

## Accessibility

- Prefer semantic HTML and accessible names.
- Use role-based queries when appropriate.
- Consider keyboard interaction scenarios.
- Do not claim full accessibility compliance based only on component tests.

## Test Data

- Use minimal, meaningful fixtures.
- Cover empty states, normal states, and boundary conditions when relevant.
- Avoid unnecessary test data complexity.
- Do not invent component requirements.

## Verification

When proposing React Testing Library tests:

- Identify required dependencies and configuration assumptions.
- Clearly distinguish executable examples from illustrative examples.
- State when tests have not been executed.
- Do not claim that suggested tests pass without execution evidence.
