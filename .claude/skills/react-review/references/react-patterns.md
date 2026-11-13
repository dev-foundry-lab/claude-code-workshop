
# React Patterns Review Guidelines

## Purpose

Provide detailed React review criteria for component
correctness, state management, hooks, and performance.

Report only issues supported by concrete code evidence.

## 1. State Management

Check whether state represents information that must
persist between renders.

Look for:
- Redundant state derived from props or other state.
- State updates that depend on stale values.
- Direct mutations of state objects or arrays.
- Unnecessary synchronization between state variables.

Prefer deriving values during rendering when possible.

## 2. Effects and Synchronization

Check whether useEffect synchronizes the component
with an external system.

Look for:
- Missing or incorrect dependencies.
- Effects used only to calculate derived values.
- Missing cleanup for subscriptions or timers.
- Potential race conditions in asynchronous effects.

Do not recommend useEffect when rendering logic is enough.

## 3. Hooks

Verify that:
- Hooks follow the Rules of Hooks.
- Dependencies reflect reactive values used.
- Custom hooks have clear responsibilities.
- Closures do not unintentionally capture stale values.

Consider the project's React version and conventions.

## 4. List Rendering

Check:
- Stable and unique keys for rendered elements.
- Whether array indexes are used as keys.
- Whether list items can be reordered or filtered.
- Unnecessary transformations during rendering.

Do not assume index keys are always incorrect.

## 5. Performance

Look for measurable or well-supported performance risks.

Consider:
- Expensive computations during rendering.
- Unnecessary component re-renders.
- Unstable references when they cause actual problems.
- Large lists that may benefit from virtualization.

Do not recommend useMemo, useCallback, or React.memo
without explaining the expected benefit.

## 6. Reporting Rules

For each finding:
- Identify the affected file and location.
- Explain the React behavior involved.
- Describe the concrete risk or impact.
- Recommend the simplest appropriate correction.
- Distinguish verified defects from potential risks.

Do not modify source files.
Do not claim runtime behavior was tested unless
a relevant test was actually executed.
