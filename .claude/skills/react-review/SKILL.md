---
name: react-review
description: >
  Review existing React components written in TypeScript
  for correctness, type safety, performance, accessibility,
  and maintainability. Use this skill when the user asks
  to review, audit, inspect, or identify problems in React
  components. Produce a structured report in Italian
  with findings, severity levels, recommendations,
  and TypeScript/TSX code examples. Do not modify files.
---

# React Review

## Purpose

Perform a read-only code review of existing React components written in TypeScript.

Identify concrete issues related to correctness, type safety, performance, accessibility, and maintainability.

Explain findings in Italian and provide actionable recommendations with TypeScript/TSX examples when useful.

Do not modify source files, install dependencies, or execute commands that change project state.

## Workflow

Follow these steps in order when reviewing a component.

### 1. Inspect

- Read the requested React component.
- Identify its props, state, hooks, and event handlers.
- Inspect relevant imports, types, and dependencies.
- Check existing project conventions in CLAUDE.md.
- Do not assume behavior that cannot be verified.

### 2. Analyze

Review the component across five categories:

- Correctness: bugs, state management, hooks, effects, and error handling.
- Type Safety: TypeScript types, unsafe casts, `any`, and component props.
- Performance: unnecessary renders, expensive computations, and list rendering.
- Accessibility: semantic HTML, keyboard support, focus management, and ARIA.
- Maintainability: readability, duplication, complexity, and separation of concerns.

Only report issues supported by concrete evidence.

When reviewing TypeScript type safety, read `references/typescript.md` before evaluating Type Safety findings. Apply its criteria to the component being reviewed.

When reviewing React correctness, state management, hooks, or performance, read `references/react-patterns.md` before evaluating the relevant findings.

Apply its criteria to the component being reviewed.

When reviewing accessibility, read `references/accessibility.md` before evaluating Accessibility findings.

Apply its criteria to the component being reviewed.

Resolve the reference path relative to this SKILL.md file.

Do not load unrelated reference documents unless they are relevant to the review.

### 3. Classify

Assign a severity level to each finding:

- CRITICAL: severe defects with major impact.
- HIGH: significant bugs or accessibility barriers.
- MEDIUM: meaningful quality or reliability issues.
- LOW: minor improvements or maintainability issues.

Consider impact and likelihood when assigning severity.

Distinguish confirmed findings from optional improvements.

- A confirmed finding describes a concrete defect or quality issue supported by evidence in the reviewed code.
- Assign CRITICAL, HIGH, MEDIUM, or LOW severity only to confirmed findings.
- An optional improvement is a suggestion that may enhance the component but is not supported as a current defect.
- Do not classify optional improvements as confirmed findings.
- Do not downgrade genuine LOW-severity defects to optional improvements merely because their impact is limited.
- Keep optional improvements separate from confirmed findings.
- Respect the requested review scope for both categories.

### 4. Recommend

For each finding:

- Explain the problem and its consequences.
- Reference the relevant file and line numbers.
- Suggest a concrete improvement.
- Provide a TypeScript/TSX example when useful.
- Do not modify the original source code.

### 5. Report

- Write the final report in Italian.
- Group findings by severity.
- Include positive observations when relevant.
- Prioritize recommended improvements.
- State which checks were and were not performed.
- If no issues are found, report that explicitly.

## Report Format

Use the following structure for every review.
Write all explanations in Italian.

### Executive Summary

- Component name and file path.
- Overall assessment.
- Number of findings by severity.
- Main risks or concerns.

### Findings

For each finding, provide:

- Severity: CRITICAL, HIGH, MEDIUM, or LOW.
- Category: Correctness, Type Safety, Performance, Accessibility, or Maintainability.
- Location: file path and line number.
- Evidence: relevant code or observed behavior.
- Explanation: why the issue matters.
- Recommendation: how to address it.

Order findings from highest to lowest severity.

Do not invent findings to fill categories.

### Optional Improvements

List optional improvements separately from confirmed findings.

- Explain the potential benefit of each suggestion.
- Do not assign defect severity to optional improvements.
- Do not include optional improvements in confirmed finding counts.
- Do not present optional improvements as required fixes.
- Omit this section when there are no relevant suggestions.

### Suggested Fixes

For findings that benefit from code examples:

- Provide a concise TypeScript/TSX snippet.
- Follow existing project conventions.
- Explain why the suggested change helps.
- Clearly distinguish examples from applied changes.
- Ensure every code example is syntactically valid TypeScript or TSX.
- Use properly closed JSX tags and comments.
- Never insert explanatory text or invalid comments inside JSX markup.
- Prefer complete, copyable examples over incomplete fragments when demonstrating a fix.
- Review each snippet for syntax errors before including it in the report.
- Do not claim that a snippet was compiled or tested unless that verification actually occurred.

### Positive Observations

Highlight relevant good practices already present in the component.

### Recommended Priorities

List recommended improvements in priority order, considering severity, impact, and implementation effort.

### Verification

State explicitly:

- Files inspected.
- Checks actually performed.
- Checks not performed.
- Assumptions and remaining uncertainties.

Never claim that tests or runtime checks passed unless they were actually executed.
