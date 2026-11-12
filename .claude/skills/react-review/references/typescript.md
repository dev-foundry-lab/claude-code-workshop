
# TypeScript Review Guidelines

## Purpose

Provide detailed TypeScript review criteria for React
components.

Use these guidelines when evaluating type safety.
Report only issues supported by concrete code evidence.

## 1. Explicit Any

Identify explicit uses of `any` that weaken type safety.

Check:
- Component props.
- Function parameters and return values.
- State and hook types.
- API response types.

Recommend specific types or `unknown` when appropriate.

Do not assume every use of `any` is automatically a bug.

## 2. Unsafe Type Assertions

Look for assertions that bypass meaningful type checks.

Examples:
- `value as User` without validation.
- Double assertions such as `as unknown as User`.
- Non-null assertions (`!`) without a justified invariant.

Explain the actual risk before recommending a change.

## 3. Component Props

Verify that:
- Required props are correctly typed.
- Optional props are handled safely.
- Callback parameters have meaningful types.
- Collection item types are explicit.
- Readonly collections are considered when appropriate.

## 4. Null and Undefined

Check whether potentially absent values are handled.

Pay attention to:
- Optional properties.
- Nullable state.
- Array lookups.
- Asynchronous data.

Recommend guards or narrowing when necessary.

## 5. Type Inference

Prefer TypeScript inference when it is clear and safe.

Avoid recommending unnecessary annotations.

Explicit types are useful when they clarify public
contracts or prevent incorrect assumptions.

## 6. Reporting Rules

For each finding:
- Identify the affected file and location.
- Explain the type-safety problem.
- Describe the concrete risk.
- Provide a valid TypeScript or TSX correction.
- Distinguish verified errors from potential risks.

Do not modify source files.
Do not claim compilation success without running
a compiler.
